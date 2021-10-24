import math  
@app.route('/teacher/update-rank',methods=["POST"])
def teacher_update_student_rank():
    db = myclient["accounts"]
    collection = db["student"]
    if request.method == 'POST':
        schoolname = request.form['schoolname']
        std = request.form['std']
        exam_name = request.form['exam-name']
        count = 1
        count1 = 1
        count2 = 1
        dict1 = {}
        db_response = list(collection.find({"schoolname":schoolname,"class":std},{"_id":0}))
        if db_response != None:
            my_response = db_response
            for value in db_response:
                for val in value["examScore"]:
                    if(value["examScore"][str(val)]["exam-name"] == exam_name):
                        dict1[str(count1)] = {"regno":value["regno"],"percentage" : value["examScore"][str(val)]["percentage"], "rank": value["examScore"][str(val)]["rank"]}
                        count1 = count1 + 1
                        
            for i in range(100,0,-1):
                list1 = []
                for key in range(1,len(dict1)+1):
                    if dict1[str(key)]["percentage"] == str(i):
                        dict1[str(key)]["rank"] = str(count)
                        list1.append(str(key))
                        
                if len(list1) != 0:
                    count = count + len(list1)
                    
            for key in dict1:
                for value in my_response:
                    if(value["regno"] == dict1[key]["regno"]):
                        for val in value["examScore"]:
                            if(value["examScore"][str(val)]["exam-name"] == exam_name):
                                value["examScore"][str(val)]["rank"] = dict1[key]["rank"]
                                update_result = collection.update_one({"regno":value["regno"]},{"$set":{"examScore":value["examScore"]}})
            if update_result.acknowledged == True:
                return json.dumps({"status": "ranks are updated successfully","response": "ok"})
            return json.dumps({"status": "failed","response": "database error"})
                            
               
        else:
             return json.dumps({"status":"User not found","response":"database error. request not acknowledged"})