@app.route('/student/get-attendance',methods=["GET", "POST"])
def student_getAttendance():
    db = myclient["Class"]
    collection = db["attendance"]
    if request.method == 'POST':
        db_response = list(collection.find({},{"_id":0}))
        if db_response != None:
            return json.dumps(db_response)
    return json.dumps({"status": "user not found","response": "User not found"})