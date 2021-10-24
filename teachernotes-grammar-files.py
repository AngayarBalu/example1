@app.route('/teacher/teacher-notes/grammar/combine-sentences-into-single-sentences')
def teacher_notes_grammar_combine_sentences():
    return render_template('grammar-combine-sentences-into-single-sentences.html')

@app.route('/teacher/teacher-notes/grammar/active-passive-voice')
def teacher_notes_grammar_active_and_passive():
    return render_template('grammar-active-passive-voice.html')

@app.route('/teacher/teacher-notes/grammar/direct-indirect-speech')
def teacher_notes_grammar_direct_indirect_speech():
    return render_template('grammar-direct-indirect-speech.html')

@app.route('/teacher/teacher-notes/grammar/if-clauses')
def teacher_notes_grammar_if_clauses():
    return render_template('grammar-if-clauses.html')

@app.route('/teacher/teacher-notes/grammar/degrees-of-comparison')
def teacher_notes_grammar_degrees_of_comparison():
    return render_template('grammar-degrees-of-comparison.html')

@app.route('/teacher/teacher-notes/grammar/punctuation-questions')
def teacher_notes_grammar_punctuation_questions():
    return render_template('grammar-punctuation-questions.html')

@app.route('/teacher/teacher-notes/grammar/rewrite-the-passage-into-passive-voice')
def teacher_notes_grammar_rewrite_the_passage_into_passive_voice():
    return render_template('grammar-rewrite-the-passage-into-passive-voice.html')

@app.route('/teacher/teacher-notes/grammar/correct-the-tense-of-the-verb')
def teacher_notes_grammar_correct_the_tense_of_the_verb():
    return render_template('grammar-correct-the-tense-of-the-verb.html')

@app.route('/teacher/teacher-notes/grammar/part-of-speech')
def teacher_notes_grammar_part_of_speech():
    return render_template('grammar-part-of-speech.html')

@app.route('/teacher/teacher-notes/grammar/identify-tense-form')
def teacher_notes_grammar_identify_tense_form():
    return render_template('grammar-identify-tense-form.html')

@app.route('/teacher/teacher-notes/grammar/error-spotting')
def teacher_notes_grammar_error_spotting():
    return render_template('grammar-error-spotting.html')
