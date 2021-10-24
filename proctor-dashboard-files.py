@app.route('/proctor/loginpage')
def form_login():
    return render_template('proctor_login.html')

@app.route('/proctor/register')
def form_reg():
    return render_template('proctor_register.html')

@app.route('/proctor/reset/pwd')
def form_reset():
    return render_template('proctor-reset-password.html')

@app.route('/proctor/home')
def form_home():
    return render_template('proctor-home-page.html')

@app.route('/form')
def form():
    return render_template('question_setting(comb).html')

@app.route('/template/select')
def temp_select():
    return render_template('Template_selection(comb).html')

@app.route('/print')
def preview():
    return render_template('print-preview.html')

@app.route('/login-js')
def form_loginjs():
    return render_template('proctor_login_page.js')

@app.route('/index-js')
def index_js():
    return render_template('index.js')

@app.route('/preview-js')
def preview_js():
    return render_template('print-preview.js')

@app.route('/parser-js')
def parser_js():
    return render_template('parser.js')
