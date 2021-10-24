
@app.route('/teacher/login')
def teacher_login_page():
    return render_template('teacher-login.html')

@app.route('/teacher/register')
def teacher_register_page():
    return render_template('teacher-register.html')

@app.route('/teacher/reset-password')
def teacher_reset_password_page():
    return render_template('teacher-reset-password.html')

@app.route('/teacher/home-page')
def teacher_home_page():
    return render_template('teacher-home-page.html')

@app.route('/teacher/htmlfile')
def teacher_htmlfile():
    return render_template('teacher-htmlfile.html')

@app.route('/teacher/9th-standard')
def teacher_ninth_standard():
    return render_template('teacher-9th-standard.html')

@app.route('/teacher/10th-standard')
def teacher_tenth_standard():
    return render_template('teacher-10th-standard.html')

@app.route('/teacher/11th-standard')
def teacher_eleventh_standard():
    return render_template('teacher-11th-standard.html')

@app.route('/teacher/12th-standard')
def teacher_twelth_standard():
    return render_template('teacher-12th-standard.html')

@app.route('/teacher/file-details')
def teacher_file_details():
    return render_template('teacher-file-details.html')

@app.route('/teacher/book-contents')
def teacher_book_contents():
    return render_template('teacher-book-contents.html')

@app.route('/teacher/upload-assignment')
def teacher_upload_assignment():
    return render_template('teacher-assignment.html')

@app.route('/teacher/notifications')
def teacher_notifications():
    return render_template('teacher-notifications.html')

@app.route('/teacher/sslc-enrollment')
def teacher_sslc_enrollment():
    return render_template('teacher-sslc-enrollment.html')

@app.route('/teacher/hsc-enrollment')
def teacher_hsc_enrollment():
    return render_template('teacher-hsc-enrollment.html')

@app.route('/teacher/exam-time-table')
def teacher_exam_time_table():
    return render_template('teacher-exam-time-table.html')

@app.route('/teacher/view-class-time-table')
def teacher_view_class_time_table():
    return render_template('teacher-view-class-time-table.html')

@app.route('/teacher/profile')
def teacher_profile():
    return render_template('teacher-profile.html')

@app.route('/teacher/edit-profile')
def teacher_edit_profile():
    return render_template('teacher-edit-profile.html')

@app.route('/teacher/student-profile')
def teacher_student_profile():
    return render_template('teacher-student-profile.html')

@app.route('/teacher/student-report')
def teacher_student_report():
    return render_template('teacher-student-report.html')

@app.route('/teacher/student-mark')
def teacher_student_mark():
    return render_template('teacher-student-marks.html')

@app.route('/teacher/student-update-mark')
def teacher_update_student_mark():
    return render_template('teacher-update-marks.html')

@app.route('/teacher/discussion-forum')
def teacher_discussion_forum():
    return render_template('teacher-discussion-forum.html')

@app.route('/teacher/discussion-forum-reply')
def teacher_discussion_forum_reply():
    return render_template('teacher-discussion-forum-reply.html')

@app.route('/teacher/mark-student-attendance')
def teacher_mark_student_attendance():
    return render_template('teacher-mark-attendance.html')

@app.route('/teacher/student-attendance')
def teacher_view_student_attendance():
    return render_template('teacher-view-attendance.html')

@app.route('/teacher/student-edit-attendance')
def teacher_edit_student_attendance():
    return render_template('teacher-edit-attendance.html')

@app.route('/teacher/student-download-report')
def teacher_download_student_report():
    return render_template('teacher-download-report.html')

@app.route('/teacher/forgot-email')
def teacher_forgot_email():
    return render_template('teacher-forgot-email.html')

@app.route('/teacher/forgot-password')
def teacher_forgot_password_page():
    return render_template('teacher-forgot-password.html')
