@app.route('/TeacherNotes/10th std/english/poem/final',methods=["POST"])
def insert_poem_final_answer():
#   declaration space
    
    response_string = {}
    if request.method == 'POST':
        
        db = myclient["English-TeachernotesQuestionBank"]
        collection = db["poem - notes"]
     
        data = json.loads(request.form['name'])
  
        existing_data = collection.find_one({"user":data["user"],"chapter-no":data["chapter-no"],"chapter-type":data["chapter-type"],"chapter-name":data["chapter-name"],"standard":data["standard"],"section":data["section"],"schoolname":data["schoolname"]})
            
        if existing_data == None:
            insert_response = collection.insert_one(data)
            if insert_response.acknowledged == True:
                
                return json.dumps({"status": "success","response":"content inserted"})
            else:
                return json.dumps({"status":"failed","response":"database error. request not acknowledged"})      

        else:
            
            count = 1
            exist_data = {}
            for i in existing_data["question"]:
                exist_data[str(count)] = existing_data["question"][i]
                count = count + 1
                
            for i in data["question"]:
                exist_data[str(count)] = data["question"][i]
                count = count + 1
                
            update_result = collection.update_one({'_id': ObjectId(existing_data['_id'])},{"$set":{"question":exist_data}})
                
            if update_result.acknowledged == True and update_result.modified_count == 1:
            
                return json.dumps({"status":"success","response":"content updated"})



@app.route('/TeacherNotes/10th std/english/poem/Insert_poem_fill_phrasal_verbs_with_passage',methods=["POST"])
def insert_poem_fill_phrasal_verbs_with_passage():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["poem-fill in the blanks"]
    response_string = {}
    if request.method == 'POST':
        incoming_data = json.loads(request.form['name'])
        existing_data = collection.find_one({"user": incoming_data['user']})
    # db_response = collection.insert_one(data)

        if existing_data == None:
            insert_response = collection.insert_one(incoming_data)
            if insert_response.acknowledged == True:
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}

        else:
            db = myclient["English-Teachernotes-HistoryDB"]
            collection = db["poem-fill in the blanks"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["poem-fill in the blanks"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/TeacherNotes/10th std/english/poem/Insert_poetic_lines_questions',methods=["POST"])
def insert_poetic_lines_questions():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["poetic lines with questions"]
    response_string = {}
    if request.method == 'POST':
        incoming_data = json.loads(request.form['name'])
        existing_data = collection.find_one({"user": incoming_data['user']})
    # db_response = collection.insert_one(data)

        if existing_data == None:
            insert_response = collection.insert_one(incoming_data)
            if insert_response.acknowledged == True:
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}

        else:
            db = myclient["English-Teachernotes-HistoryDB"]
            collection = db["poetic lines with questions"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["poetic lines with questions"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/poem/Insert_figure_of_speech',methods=["POST"])
def insert_figure_of_speech():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["figure of speech"]
    response_string = {}
    if request.method == 'POST':
        incoming_data = json.loads(request.form['name'])
        existing_data = collection.find_one({"user": incoming_data['user']})
    # db_response = collection.insert_one(data)

        if existing_data == None:
            insert_response = collection.insert_one(incoming_data)
            if insert_response.acknowledged == True:
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}

        else:
            db = myclient["English-Teachernotes-HistoryDB"]
            collection = db["figure of speech"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["figure of speech"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/TeacherNotes/10th std/english/poem/Insert_poem_paragraph',methods=["POST"])
def insert_poem_paragraph():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["poem-paragraph-questions"]
    response_string = {}
    if request.method == 'POST':
        incoming_data = json.loads(request.form['name'])
        existing_data = collection.find_one({"user": incoming_data['user']})
    # db_response = collection.insert_one(data)

        if existing_data == None:
            insert_response = collection.insert_one(incoming_data)
            if insert_response.acknowledged == True:
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}

        else:
            db = myclient["English-Teachernotes-HistoryDB"]
            collection = db["poem-paragraph-questions"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["poem-paragraph-questions"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)