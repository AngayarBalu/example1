@app.route('/teacher/teacher-notes')
def teacher_notes():
    return render_template('teachernotes.html')

@app.route('/teacher/teacher-notes/grammar')
def teacher_notes_grammar():
    return render_template('grammar.html')

@app.route('/teacher/teacher-notes/prose')
def teacher_notes_prose():
    return render_template('prose.html')

@app.route('/teacher/teacher-notes/poem')
def teacher_notes_poem():
    return render_template('poem.html')

@app.route('/teacher/teacher-notes/supplementary')
def teacher_notes_supplementary():
    return render_template('supplementary.html')