@app.route('/teacher/teacher-notes/supplementary/supplementary-identify-character-speaker')
def teacher_notes_supplementary_identify_character_speaker():
    return render_template('supplementary-identify-character-speaker.html')

@app.route('/teacher/teacher-notes/supplementary/supplementary-situation-reaction')
def teacher_notes_supplementary_situation_reaction():
    return render_template('supplementary-situation-reaction.html')

@app.route('/teacher/teacher-notes/supplementary/supplementary-mind-map')
def teacher_notes_supplementary_mind_map():
    return render_template('supplementary-mind-map.html')

@app.route('/teacher/teacher-notes/supplementary/supplementary-para-fill-in-the-blanks')
def teacher_notes_supplementary_para_fill():
    return render_template('supplementary-para-fill-in-the-blanks.html')

@app.route('/teacher/teacher-notes/supplementary/supplementary-matching')
def teacher_notes_supplementary_matching():
    return render_template('supplementary-matching.html')

@app.route('/teacher/teacher-notes/supplementary/supplementary-choose-the-best-answer')
def teacher_notes_supplementary_choose_the_best_answer():
    return render_template('supplementary-choose-the-best-answer.html')

@app.route('/teacher/teacher-notes/supplementary/supplementary-comprehension')
def teacher_notes_supplementary_comprehension():
    return render_template('supplementary-comprehension.html')

@app.route('/teacher/teacher-notes/supplementary/supplementary-rearrange-the-sentences')
def teacher_notes_supplementary_rearrange_the_sentences():
    return render_template('supplementary-rearrange-the-sentences.html')

@app.route('/teacher/teacher-notes/supplementary/supplementary-shortquestions')
def teacher_notes_supplementary_shortquestions():
    return render_template('supplementary-shortquestions.html')

@app.route('/teacher/teacher-notes/supplementary/supplementary-paragraph-questions')
def teacher_notes_supplementary_paragraph_questions():
    return render_template('supplementary-paragraph-questions.html')