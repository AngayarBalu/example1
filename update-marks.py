import math
@app.route('/teacher/update-student-marks',methods=["POST"])
def teacher_update_student_marks():
    db = myclient["accounts"]
    collection = db["student"]
    if request.method == 'POST':
        flag = False
        count = 1
        Arr = []
        total_mark = 0
        maxi_mark = 0
        sub = json.loads(request.form['name'])
        regno = sub['regno']
        std = sub['std']
        sec = sub['sec']
        schoolname = sub['schoolname']
        exam_name = sub['exam-name']
        subjects = sub['subjects']
        db_response = collection.find_one({"regno":regno,"class":std,"section":sec,"schoolname":schoolname})
        if db_response != None:
            if db_response["examScore"] != None:
                for key in db_response["examScore"]:
                    if db_response["examScore"][key]["exam-name"] == exam_name:
                        flag = True
                        break
                    else:
                        count = count + 1
                        
                if flag == True:
                    courses = db_response["examScore"]
                    lenn = len( db_response["examScore"])
                    leng = len(db_response["examScore"][key]["subjects"])
                    
                    for i in range(1,leng+1):
                        Arr.append(courses[str(count)]["subjects"][str(i)]["name"])
                    print(Arr)
                        
                    for j in range(1,len(subjects)+1):
                        for i in range(len(Arr)):
                            if subjects[str(j)]["name"] in Arr[i]:
                                countt = i+1
                                courses[str(count)]["subjects"][str(countt)]["mark"] = subjects[str(j)]["mark"]
                                courses[str(count)]["subjects"][str(countt)]["maximum-mark"] = subjects[str(j)]["maximum-mark"]
                                courses[str(count)]["subjects"][str(countt)]["grade"] = subjects[str(j)]["grade"]
                        if subjects[str(j)]["name"] not in Arr:
                            courses[str(count)]["subjects"][str(leng+1)] = {"name":subjects[str(j)]["name"],"mark":subjects[str(j)]["mark"],"maximum-mark":subjects[str(j)]["maximum-mark"],"grade":subjects[str(j)]["grade"]}
                            leng = leng + 1

                    for i in range(1,leng+1):
                        total_mark = total_mark + int(courses[str(count)]["subjects"][str(i)]["mark"])
                        maxi_mark = maxi_mark + int(courses[str(count)]["subjects"][str(i)]["maximum-mark"])
                    
                    grade_mark = 0
                    grade = ""
                    grade_mark = (total_mark / maxi_mark) * 100
                    
                    
                    if grade_mark > 90 and grade_mark <= 100:
                        grade = "A"
                        
                    elif grade_mark > 80 and grade_mark <= 90:
                        grade = "B"
                        
                    elif grade_mark > 70 and grade_mark <= 80:
                        grade = "C"
                        
                    elif grade_mark > 60 and grade_mark <= 70:
                        grade = "D"
                        
                    elif grade_mark > 50 and grade_mark <= 60:
                        grade = "E"
                        
                    elif grade_mark > 0 and grade_mark <= 50:
                        grade = "F"

                    else:
                        grade = " - "

                    print(total_mark)
                    courses[str(count)]["total-mark"] = str(total_mark)
                    courses[str(count)]["maximum-mark"] = str(maxi_mark)
                    courses[str(count)]["percentage"] = str(math.floor(grade_mark))
                    courses[str(count)]["grade"] = grade
                    courses[str(count)]["rank"] = ""

                    update_result = collection.update_one({"_id":ObjectId(db_response['_id'])},{"$set":{"examScore":courses}})
                    if update_result.acknowledged:
                        return json.dumps({"status": "success","response": "ok"})
                    return json.dumps({"status": "failed","response": "database error"})

                else:
                    courses = db_response["examScore"]
                    lenn = len( db_response["examScore"])
                    leng = len(subjects)
                    courses[str(lenn+1)] = {"exam-name":exam_name,"subjects":subjects}
                    for i in range(1,leng+1):
                        total_mark = total_mark + int(courses[str(lenn+1)]["subjects"][str(i)]["mark"])
                        maxi_mark = maxi_mark + int(courses[str(lenn+1)]["subjects"][str(i)]["maximum-mark"])

                    print(total_mark)
                    grade_mark = 0
                    grade = ""
                    grade_mark = (total_mark / maxi_mark) * 100
                    
                    
                    if grade_mark > 90 and grade_mark <= 100:
                        grade = "A"
                        
                    elif grade_mark > 80 and grade_mark <= 90:
                        grade = "B"
                        
                    elif grade_mark > 70 and grade_mark <= 80:
                        grade = "C"
                        
                    elif grade_mark > 60 and grade_mark <= 70:
                        grade = "D"
                        
                    elif grade_mark > 50 and grade_mark <= 60:
                        grade = "E"
                        
                    elif grade_mark > 0 and grade_mark <= 50:
                        grade = "F"

                    else:
                        grade = " - "

                    courses[str(lenn+1)]["total-mark"] = str(total_mark)
                    courses[str(lenn+1)]["maximum-mark"] = str(maxi_mark)
                    courses[str(lenn+1)]["percentage"] = str(math.floor(grade_mark))
                    courses[str(lenn+1)]["grade"] = grade
                    courses[str(lenn+1)]["rank"] = ""
                    
                    update_result = collection.update_one({"_id":ObjectId(db_response['_id'])},{"$set":{"examScore":courses}})
                    if update_result.acknowledged:
                        return json.dumps({"status": "success","response": "ok"})
                    return json.dumps({"status": "failed","response": "database error"})
                return json.dumps({"status": "failed","response": "database error"})

                
                    
            if bool(db_response["examScore"]) == False:
                courses = {}
                courses["1"] = {"exam-name":exam_name,"subjects":subjects}
                leng = len(subjects)
                for i in range(1,leng+1):
                    total_mark = total_mark + int(courses["1"]["subjects"][str(i)]["mark"])
                    maxi_mark = maxi_mark + int(courses["1"]["subjects"][str(i)]["maximum-mark"])

                print(total_mark)
                grade_mark = 0
                grade = ""
                grade_mark = (total_mark / maxi_mark) * 100

                if grade_mark > 90 and grade_mark <= 100:
                        grade = "A"
                        
                elif grade_mark > 80 and grade_mark <= 90:
                    grade = "B"

                elif grade_mark > 70 and grade_mark <= 80:
                    grade = "C"

                elif grade_mark > 60 and grade_mark <= 70:
                    grade = "D"

                elif grade_mark > 50 and grade_mark <= 60:
                    grade = "E"

                elif grade_mark > 0 and grade_mark <= 50:
                    grade = "F"

                else:
                    grade = " - "


                courses["1"]["total-mark"] = str(total_mark)
                courses["1"]["maximum-mark"] = str(maxi_mark)
                courses["1"]["percentage"] = str(math.floor(grade_mark))
                courses["1"]["grade"] = grade
                courses["1"]["rank"] = ""
                update_result = collection.update_one({"_id":ObjectId(db_response['_id'])},{"$set":{"examScore":courses}})
                if update_result.acknowledged:
                    return json.dumps({"status": "success","response": "ok"})
                return json.dumps({"status": "failed","response": "database error"})
            return json.dumps({"status": "failed","response": "database error"})
               
        else:
             return json.dumps({"status":"User not found","response":"database error. request not acknowledged"})