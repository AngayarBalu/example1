

@app.route('/student/attendance',methods=["GET", "POST"])
def mark_student_attendance():
    db = myclient["Class"]
    collection = db["attendance"]
    regno = request.form['regno']
    print(regno)
    std = request.form['class']
    section = request.form['section']
    schoolname = request.form['schoolname']
    attendance = request.form['attendance']
    time = request.form['time']
    mydate = {}
    mytime = {}
    current_date = request.form['date']
    
    mytime[time] = attendance
    mydate[current_date] = mytime
    my_attendance = {
        "regno":regno,
        "class":std,
        "section":section,
        "schoolname":schoolname,
        "attendance":mydate
    }
    a = {}
    b = {}
    
    if request.method == 'POST':
        db_response = collection.find_one({"regno":regno,"class":std,"section":section,"schoolname":schoolname})
        if db_response != None:
            attend_time = {}
            
            attend_time = db_response
            b[time] = attendance
            a[current_date] = b
            # print(a)
            
            
            attend_time["attendance"] = b
            # attend_time = attendance

            print(attend_time)
            print(attendance)

            # attend_time[current_date][time] = attendance
            # attend_time[current_date].update(time:attendance)
            update_result = collection.update_one({"regno":regno,"class":std,"section":section,"schoolname":schoolname},{"$set":{"attendance":attend_time["attendance"]}})
            if update_result.acknowledged == True and update_result.modified_count == 1:
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error"}
            return json.dumps(response_string, indent=4)
            
        else:
            db_response = collection.insert_one(my_attendance)
            if db_response.acknowledged == True:
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
            return json.dumps(response_string, indent=4)