@app.route('/TeacherNotes/10th std/english/supplementary/final',methods=["POST"])
def insert_supplementary_final_answer():
#   declaration space
    
    response_string = {}
    if request.method == 'POST':
        
        db = myclient["English-TeachernotesQuestionBank"]
        collection = db["supplementary - notes"]
     
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

@app.route('/TeacherNotes/10th std/english/supplementary/Insert_supplementary_situation_reaction',methods=["POST"])
def insert_supplementary_situation_reaction():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["situation-reaction"]
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
            collection = db["situation-reaction"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["situation-reaction"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/supplementary/Insert_character_speaker',methods=["POST"])
def insert_character_speaker():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["character-speaker"]
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
            collection = db["character-speaker"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["character-speaker"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/supplementary/Insert_supplementary_rearrange_sentences',methods=["POST"])
def insert_supplementary_rearrange_sentences():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["rearrange-sentences"]
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
            collection = db["rearrange-sentences"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["rearrange-sentences"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/supplementary/Insert_supplementary_matching',methods=["POST"])
def insert_supplementary_matching():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["supplementary-matching"]
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
            collection = db["supplementary-matching"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["supplementary-matching"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/supplementary/Insert_supplementary_shortquestions',methods=["POST"])
def insert_supplementary_shortquestions():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["supplementary-short-questions"]
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
            collection = db["supplementary-short-questions"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["supplementary-short-questions"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/supplementary/Insert_supplementary_paragraph',methods=["POST"])
def insert_supplementary_paragraph():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["supplementary-paragraph-questions"]
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
            collection = db["supplementary-paragraph-questions"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["supplementary-paragraph-questions"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/supplementary/Insert_supplementary_mind_map',methods=["POST"])
def insert_supplementary_mind_map():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["mindmap-questions"]
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
            collection = db["mindmap-questions"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["mindmap-questions"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/supplementary/Insert_supplementary_comprehension',methods=["POST"])
def insert_supplementary_comprehension():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["supplementary-comprehension"]
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
            collection = db["supplementary-comprehension"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["supplementary-comprehension"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/TeacherNotes/10th std/english/supplementary/Insert_supplementary_choose_best_answer',methods=["POST"])
def insert_supplementary_choose_best_answer():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["supplementary-choose the correct answer"]
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
            collection = db["supplementary-choose the correct answer"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["supplementary-choose the correct answer"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/supplementary/Insert_supplementary_para_fill',methods=["POST"])
def insert_supplementary_para_fill():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["supplementary-fill in the blanks"]
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
            collection = db["supplementary-fill in the blanks"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["supplementary-fill in the blanks"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


