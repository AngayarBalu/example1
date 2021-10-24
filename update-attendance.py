@app.route('/student/update-attendance',methods=["GET", "POST"])
def student_update_attendance():
    db = myclient["Class"]
    collection = db["attendance"]
    regno = request.form['regno']
    std = request.form['std']
    section = request.form['section']
    schoolname = request.form['schoolname']
    attendance = request.form['attendance']
    time = request.form['timing']
    current_date = request.form['date']
    
    if request.method == 'POST':
        db_response = collection.find_one({"regno":regno,"class":std,"section":section,"schoolname":schoolname})
        if db_response != None:
            attend_time = db_response["attendance"]
            attend_time[current_date][time] = attendance
            update_result = collection.update_one({"regno":regno,"class":std,"section":section,"schoolname":schoolname},{"$set":{"attendance":attend_time}})
            if update_result.acknowledged == True and update_result.modified_count == 1:
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error"}
            return json.dumps(response_string, indent=4)
            
        else:
            response_string = {"status":"failed","response":"database error. request not acknowledged"}
        return json.dumps(response_string, indent=4)