@app.route('/teacher/teacher-notes/poem/poetic-questions')
def teacher_notes_poem_poetic_questions():
    return render_template('poem-poetic-questions.html')

@app.route('/teacher/teacher-notes/poem/figure-of-speech')
def teacher_notes_poem_figure_of_speech():
    return render_template('poem-figure-of-speech.html')

@app.route('/teacher/teacher-notes/poem/paragraph-questions')
def teacher_notes_poem_paragraph_questions():
    return render_template('poem-paragraph-questions.html')

@app.route('/teacher/teacher-notes/poem/fill-in-with-appropriate-phrasal-verbs-with-passage-and-help-box')
def teacher_notes_poem_fill():
    return render_template('poem-fill-in-with-appropriate-phrasal-verbs-with-passage-and-help-box.html')