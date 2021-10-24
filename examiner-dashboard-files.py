@app.route('/examiner-login')
def examiner_login():
    return render_template('examiner-login.html')

@app.route('/examiner-register')
def examiner_reg():
    return render_template('examiner-register.html')

@app.route('/examiner-reset-password')
def examiner_reset_pwd():
    return render_template('examiner-reset-password.html')

@app.route('/examinar/live-panel')
def examiner_livepanel():
    return render_template('live-panel.html')