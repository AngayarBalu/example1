@app.route('/student/forgot-password')
def student_forgot_password_page():
    return render_template('student-forgot-password.html')
