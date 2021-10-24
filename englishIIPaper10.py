@app.route('/insertEnglishIIQuestionPaper',methods=["POST"])
def insert_EnglishIIQuestionPaper():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["English-II-Paper"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["English-II-Paper"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["English-II-Paper"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/insertEnglishIIPlaybook',methods=["POST"])
def insert_EnglishIIPlaybook():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["English-II-Playbook"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["English-II-Playbook"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["English-II-Playbook"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/insertParaWithFill',methods=["POST"])
def insert_ParaWithFill():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["ParaWithFill"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["ParaWithFill"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["ParaWithFill"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/insertCharacterSpeaker',methods=["POST"])
def insert_CharacterSpeaker():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["CharacterSpeaker"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["CharacterSpeaker"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["CharacterSpeaker"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)

@app.route('/insertMatching',methods=["POST"])
def insert_Matching():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["Matching"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["Matching"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["Matching"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/insertChooseCorrectAnswer',methods=["POST"])
def insert_ChooseCorrectAnswer():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["Choose the correct answer"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["Choose the correct answer"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["Choose the correct answer"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/insertMindmap',methods=["POST"])
def insert_Mindmap():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["Mindmap"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["Mindmap"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["Mindmap"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/insertSupplementaryParagraph',methods=["POST"])
def insert_SupplementaryParagraph():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["Supplementary Paragraph"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["Supplementary Paragraph"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["Supplementary Paragraph"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/insertNoteMaking',methods=["POST"])
def insert_NoteMaking():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["Note-Making"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["Note-Making"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["Note-Making"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/insertDialogWritingFill',methods=["POST"])
def insert_DialogWritingFill():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["Dialogue Writing-Fill in the blanks"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["Dialogue Writing-Fill in the blanks"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["Dialogue Writing-Fill in the blanks"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/insertDialogWriting',methods=["POST"])
def insert_DialogWriting():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["Dialogue-writing"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["Dialogue-writing"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["Dialogue-writing"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/insertFormalLetter',methods=["POST"])
def insert_FormalLetter():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["Formal Letter"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["Formal Letter"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["Formal Letter"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/insertInformalLetter',methods=["POST"])
def insert_InformalLetter():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["Informal Letter"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["Informal Letter"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["Informal Letter"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/insertAdvertisementQuestions',methods=["POST"])
def insert_AdvertisementQuestions():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["Advertisement Questions"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["Advertisement Questions"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["Advertisement Questions"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/insertExpandHeadlines',methods=["POST"])
def insert_ExpandHeadlines():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["Expand Headlines"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["Expand Headlines"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["Expand Headlines"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/insertPiechart',methods=["POST"])
def insert_Piechart():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["Pie-chart"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["Pie-chart"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["Pie-chart"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/insertParagraphUsingOutlines',methods=["POST"])
def insert_ParagraphUsingOutlines():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["Paragraph using outlines"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["Paragraph using outlines"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["Paragraph using outlines"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/insertMatching_products_slogans',methods=["POST"])
def insert_Matching_products_slogans():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["Matching the products and slogans"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["Matching the products and slogans"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["Matching the products and slogans"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/insertRoadMap',methods=["POST"])
def insert_RoadMap():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["Road-Map"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["Road-Map"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["Road-Map"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/insertPoemFill',methods=["POST"])
def insert_PoemFill():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["Read the poem and fill in the blanks"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["Read the poem and fill in the blanks"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["Read the poem and fill in the blanks"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/insertTranslation',methods=["POST"])
def insert_Translation():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["Translation"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["Translation"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["Translation"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/insertPictureComprehension',methods=["POST"])
def insert_PictureComprehension():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["Picture Comprehension"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["Picture Comprehension"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["Picture Comprehension"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)



@app.route('/insertPictureTranslation',methods=["POST"])
def insert_PictureTranslation():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["Picture Comprehension and translation"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["Picture Comprehension and translation"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["Picture Comprehension and translation"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)


@app.route('/insertComprehensionQuestions1',methods=["POST"])
def insert_ComprehensionQuestions():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["Comprehension Questions"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["Comprehension Questions"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["Comprehension Questions"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)

@app.route('/insert_normal_letter_writing',methods=["POST"])
def insert_normal_letter_writing():
#   declaration space
    db = myclient["English-II-QuestionBank"]
    collection = db["NormalLetter"]
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
            db = myclient["English-II-QuestionBank-HistoryDB"]
            collection = db["NormalLetter"]
            history_response = collection.insert_one(existing_data)
            if history_response.acknowledged == True:
                db = myclient["English-II-QuestionBank"]
                collection = db["NormalLetter"]
                collection.delete_one({'user': incoming_data['user']})
                collection.insert_one(incoming_data)
                response_string = {"status": "success","response":"ok"}
            else:
                response_string = {"status":"failed","response":"database error. request not acknowledged"}
    return make_response(jsonify(response_string),200)

