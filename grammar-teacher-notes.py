@app.route('/TeacherNotes/10th std/english/grammar/final',methods=["POST"])
def insert_grammar_final_answer():
#   declaration space
    
    response_string = {}
    if request.method == 'POST':
        
        db = myclient["English-TeachernotesQuestionBank"]
        collection = db["grammar - notes"]
     
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



@app.route('/TeacherNotes/10th std/english/grammar/Insert_part_of_speech',methods=["POST"])
def insert_part_of_speech():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["parts of speech"]
    response_string = {}
    if request.method == 'POST':
        incoming_data = json.loads(request.form['name'])
        existing_data = collection.find_one({"user": incoming_data['user']})
    # db_response = collection.insert_one(data)

        if existing_data == None:
            insert_response = collection.insert_one(incoming_data)
            if insert_response.acknowledged == True:
                response_string = {"status": "success","response":"ok/10"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}

        else:
            db = myclient["English-Teachernotes-HistoryDB"]
            collection = db["parts of speech"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["parts of speech"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/grammar/Insert_rewrite_passive',methods=["POST"])
def insert_rewrite_passive():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["rewrite passage-passive voice"]
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
            collection = db["rewrite passage-passive voice"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["rewrite passage-passive voice"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/TeacherNotes/10th std/english/grammar/Insert_tense_forms',methods=["POST"])
def insert_tense_forms():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["identify the tense of the form"]
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
            collection = db["identify the tense of the form"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["identify the tense of the form"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/TeacherNotes/10th std/english/grammar/Insert_correct_tense',methods=["POST"])
def insert_correct_tense():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["correct-tense-of-the-form"]
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
            collection = db["correct-tense-of-the-form"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["correct-tense-of-the-form"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/TeacherNotes/10th std/english/grammar/Insert_errors_spotting',methods=["POST"])
def insert_errors_spotting():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["errors-spotting"]
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
            collection = db["errors-spotting"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["errors-spotting"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/grammar/Insert_direct_indirect_speech_questions',methods=["POST"])
def insert_direct_indirect_speech_questions():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["direct speech-indirect speech"]
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
            collection = db["direct speech-indirect speech"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["direct speech-indirect speech"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/grammar/Insert_active_passive_voice_questions',methods=["POST"])
def insert_active_passive_voice_questions():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["active voice-passive voice"]
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
            collection = db["active voice-passive voice"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["active voice-passive voice"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/TeacherNotes/10th std/english/grammar/Insert_ifclause_questions',methods=["POST"])
def insert_ifclause_questions():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["ifclause-questions"]
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
            collection = db["ifclause-questions"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["ifclause-questions"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/grammar/Insert_degrees_of_comparison_questions',methods=["POST"])
def insert_degrees_of_comparison_questions():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["degrees of comparison"]
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
            collection = db["degrees of comparison"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["degrees of comparison"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/grammar/Insert_combine_sentences',methods=["POST"])
def insert_combine_sentences():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["combine-sentences"]
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
            collection = db["combine-sentences"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["combine-sentences"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/TeacherNotes/10th std/english/grammar/Insert_punctuation_questions',methods=["POST"])
def insert_punctuation_questions():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["punctuation-questions"]
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
            collection = db["punctuation-questions"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["punctuation-questions"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)
