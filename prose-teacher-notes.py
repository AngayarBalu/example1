@app.route('/TeacherNotes/10th std/english/prose/final',methods=["POST"])
def insert_prose_final_answer():
#   declaration space
    
    response_string = {}
    if request.method == 'POST':
        db = myclient["English-TeachernotesQuestionBank"]
        collection = db["prose - notes"]
     
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



@app.route('/TeacherNotes/10th std/english/prose/Insert_active_passive',methods=["POST"])
def insert_active_passive():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["active_passive_voice"]
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
            collection = db["active_passive_voice"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["active_passive_voice"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/prose/Insert_develop_stories',methods=["POST"])
def insert_develop_stories():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["develop-stories"]
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
            collection = db["develop-stories"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["develop-stories"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/TeacherNotes/10th std/english/prose/Insert_american_british',methods=["POST"])
def insert_american_british():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["american english-british english"]
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
            collection = db["american english-british english"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["american english-british english"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/TeacherNotes/10th std/english/prose/Insert_prefix_suffix',methods=["POST"])
def insert_prefix_suffix():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["prefix-suffix"]
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
            collection = db["prefix-suffix"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["prefix-suffix"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/prose/Insert_advertisements_questions',methods=["POST"])
def insert_advertisements_questions():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["advertisements-questions"]
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
            collection = db["advertisements-questions"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["advertisements-questions"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/prose/Insert_antonyms',methods=["POST"])
def insert_antonyms():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["antonyms"]
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
            collection = db["antonyms"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["antonyms"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/TeacherNotes/10th std/english/prose/Insert_prose_comprehension_question',methods=["POST"])
def insert_prose_comprehension_question():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["prose_comprehension_question"]
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
            collection = db["prose_comprehension_question"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["prose_comprehension_question"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/TeacherNotes/10th std/english/prose/Insert_expand_headlines',methods=["POST"])
def insert_expand_headlines():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["expand-headlines"]
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
            collection = db["expand-headlines"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["expand-headlines"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/prose/Insert_prose_fill_phrasal_verbs',methods=["POST"])
def insert_prose_fill_phrasal_verbs():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["prose fill phrasal verbs"]
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
            collection = db["prose fill phrasal verbs"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["prose fill phrasal verbs"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/TeacherNotes/10th std/english/prose/Insert_prose_fill_phrasal_verbs_with_passage',methods=["POST"])
def insert_prose_fill_phrasal_verbs_with_passage():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["prose fill phrasal verbs with passage"]
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
            collection = db["prose fill phrasal verbs with passage"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["prose fill phrasal verbs with passage"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/TeacherNotes/10th std/english/prose/Insert_formal_letter_writing',methods=["POST"])
def insert_formal_letter_writing():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["formal-letter-writing"]
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
            collection = db["formal-letter-writing"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["formal-letter-writing"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/prose/Insert_informal_letter_writing',methods=["POST"])
def insert_informal_letter_writing():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["informal-letter-writing"]
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
            collection = db["informal-letter-writing"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["informal-letter-writing"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/prose/Insert_note_making',methods=["POST"])
def insert_note_making():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["note-making"]
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
            collection = db["note-making"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["note-making"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/prose/Insert_prose_paragraph_questions',methods=["POST"])
def insert_prose_paragraph_questions():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["prose-paragraph-questions"]
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
            collection = db["prose-paragraph-questions"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["prose-paragraph-questions"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/TeacherNotes/10th std/english/prose/Insert_picture_comprehension',methods=["POST"])
def insert_picture_comprehension():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["picture-comprehension"]
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
            collection = db["picture-comprehension"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["picture-comprehension"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/TeacherNotes/10th std/english/prose/Insert_poem_fill',methods=["POST"])
def insert_poem_fill():
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


@app.route('/TeacherNotes/10th std/english/prose/Insert_preposition_and_meaning',methods=["POST"])
def insert_preposition_and_meaning():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["preposition and its meaning"]
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
            collection = db["preposition and its meaning"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["preposition and its meaning"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/TeacherNotes/10th std/english/prose/Insert_develop_story',methods=["POST"])
def insert_develop_story():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["develop-story"]
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
            collection = db["develop-story"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["develop-story"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/prose/Insert_report_writing',methods=["POST"])
def insert_report_writing():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["report-writing"]
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
            collection = db["report-writing"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["report-writing"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/prose/Insert_standard_english',methods=["POST"])
def insert_standard_english():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["standard english"]
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
            collection = db["standard english"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["standard english"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/prose/Insert_road_map_questions',methods=["POST"])
def insert_road_map_questions():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["roadmap-questions"]
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
            collection = db["roadmap-questions"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["roadmap-questions"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/prose/Insert_sentence_making',methods=["POST"])
def insert_sentence_making():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["sentence-making"]
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
            collection = db["sentence-making"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["sentence-making"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/TeacherNotes/10th std/english/prose/Insert_prose_short_questions',methods=["POST"])
def insert_prose_short_questions():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["prose-short-questions"]
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
            collection = db["prose-short-questions"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["prose-short-questions"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/prose/Insert_singular_plural',methods=["POST"])
def insert_singular_plural():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["singular-plural"]
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
            collection = db["singular-plural"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["singular-plural"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/prose/Insert_synonyms',methods=["POST"])
def insert_synonyms():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["synonyms"]
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
            collection = db["synonyms"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["synonyms"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/TeacherNotes/10th std/english/prose/Insert_translation_questions',methods=["POST"])
def insert_translation_questions():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["translation-questions"]
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
            collection = db["translation-questions"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["translation-questions"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/TeacherNotes/10th std/english/prose/Insert_prose_matching',methods=["POST"])
def insert_prose_matching():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["prose-matching"]
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
            collection = db["prose-matching"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["prose-matching"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/TeacherNotes/10th std/english/prose/Insert_abbreviation_questions',methods=["POST"])
def insert_abbreviation_questions():
#   declaration space
    db = myclient["English-TeachernotesQuestionBank"]
    collection = db["abbreviation-questions"]
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
            collection = db["abbreviation-questions"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-TeachernotesQuestionBank"]
                collection = db["abbreviation-questions"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)
