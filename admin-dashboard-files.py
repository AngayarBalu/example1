@app.route('/admin/login')
def admin_login_page():
    return render_template('admin-login.html')

@app.route('/admin/register')
def admin_register_page():
    return render_template('admin-register.html')

@app.route('/admin/reset-password')
def admin_reset_password_page():
    return render_template('admin-reset-password.html')

@app.route('/admin/htmlfile')
def admin_htmlfile():
    return render_template('admin-htmlfile.html')

@app.route('/admin/student-register')
def admin_student_register_page():
    return render_template('admin-student-register.html')

@app.route('/admin/examiner-register')
def admin_examiner_register_page():
    return render_template('admin-examiner-register.html')

@app.route('/admin/teacher-register')
def admin_teacher_register_page():
    return render_template('admin-teacher-register.html')

@app.route('/admin/9th-student-details')
def admin_ninth_student_details():
    return render_template('admin-9th-student-details.html')

@app.route('/admin/10th-student-details')
def admin_tenth_student_details():
    return render_template('admin-10th-student-details.html')

@app.route('/admin/11th-student-details')
def admin_eleventh_student_details():
    return render_template('admin-11th-student-details.html')

@app.route('/admin/12th-student-details')
def admin_twelth_student_details():
    return render_template('admin-12th-student-details.html')

@app.route('/admin/examiner-details')
def admin_examiner_details():
    return render_template('admin-examiner-details.html')

@app.route('/admin/teacher-details')
def admin_teacher_details():
    return render_template('admin-teacher-details.html')

@app.route('/admin/examiner-approval')
def admin_approve_examiner():
    return render_template('admin-examiner-approval.html')

@app.route('/admin/student-approval')
def admin_approve_student():
    return render_template('admin-student-approval.html')

@app.route('/admin/teacher-approval')
def admin_approve_teacher():
    return render_template('admin-teacher-approval.html')

@app.route('/admin/class-time-table')
def admin_class_time_table():
    return render_template('admin-class-time-table.html')

@app.route('/admin/edit-profile')
def admin_edit_profile():
    return render_template('admin-edit-admin-profile.html')

@app.route('/admin/edit-examiner-profile')
def admin_examiner_edit_profile():
    return render_template('admin-edit-examiner-profile.html')

@app.route('/admin/edit-student-profile')
def admin_student_edit_profile():
    return render_template('admin-edit-student-profile.html')

@app.route('/admin/edit-teacher-profile')
def admin_teacher_edit_profile():
    return render_template('admin-edit-teacher-profile.html')

@app.route('/admin/profile')
def admin_profile():
    return render_template('admin-profile.html')

@app.route('/admin/student-profile')
def admin_student_profile():
    return render_template('admin-student-profile.html')

@app.route('/admin/teacher-profile')
def admin_teacher_profile():
    return render_template('admin-teacher-profile.html')

@app.route('/admin/examiner-profile')
def admin_examiner_profile():
    return render_template('admin-examiner-profile.html')

@app.route('/admin/exam-time-table')
def admin_exam_time_table():
    return render_template('admin-exam-time-table.html')

@app.route('/admin/teacher-time-table')
def admin_teacher_time_table():
    return render_template('admin-teacher-time-table.html')

@app.route('/admin/view-time-table')
def admin_view_time_table():
    return render_template('admin-view-time-table.html')

@app.route('/admin/view-class-time-table')
def admin_view_class_time_table():
    return render_template('admin-view-class-time-table.html')

@app.route('/admin/teacher-sslc-enrollment')
def admin_teacher_sslc_enrollment():
    return render_template('admin-teacher-sslc-enrollment.html')

@app.route('/admin/teacher-hsc-enrollment')
def admin_teacher_hsc_enrollment():
    return render_template('admin-teacher-hsc-enrollment.html')

@app.route('/admin/student-hsc-enrollment')
def admin_student_hsc_enrollment():
    return render_template('admin-student-enroll-course.html')

@app.route('/admin/home-page')
def admin_home_page():
    return render_template('admin-home-page.html')

@app.route('/admin/file-metadata')
def admin_file_metadata():
    return render_template('admin-file-metadata.html')

@app.route('/admin/student-report')
def admin_student_report():
    return render_template('admin-student-report.html')

@app.route('/admin/student-download-report')
def admin_download_student_report():
    return render_template('admin-download-report.html')

@app.route('/admin/edit-exam-time-table')
def admin_edit_exam_time_table():
    return render_template('admin-edit-exam-time-table.html')

@app.route('/admin/forgot-email')
def admin_forgot_email():
    return render_template('admin-forgot-email.html')

@app.route('/admin/forgot-password')
def admin_forgot_password_page():
    return render_template('admin-forgot-password.html')