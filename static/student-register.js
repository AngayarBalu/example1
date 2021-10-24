// //Student registration

// function student_register() {
//     var regno = document.getElementById("student-id").value;
//     var name = document.getElementById("student-username").value;
//     var aadhar = document.getElementById("student-aadhar").value;
//     var mobile = document.getElementById("student-mobile").value;
//     var dob = document.getElementById("student-date-of-birth").value;
//     var radios = document.getElementsByName('student-gender');
//     var gender = ""
//     for (var i = 0, length = radios.length; i < length; i++) {
//     if (radios[i].checked) {
//         gender = radios[i].value;
//         break;
//     }
//     }
//     var standard = document.getElementById("student-standard").value;
//     var section = document.getElementById("student-section").value;
//     var schoolname = document.getElementById("student-schoolname").value;
//     var address = document.getElementById("student-address").textContent;
//     var pincode = document.getElementById("student-pincode").value;

//     const d = new Date(dob)
//     const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
//     const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
//     const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

//     var dateofbirth = `${da}-${mo}-${ye}`;

//     var password = document.getElementById("student-password").value;
//     if (regno != 0 && name != "" && gender != "" && dob != "" && standard != "" && section != "" && schoolname != "" && address != "" && pincode != "" && password != "" && mobile != "" && aadhar != "") {
//         if (regno.length == 7) {
//             if (mobile.length == 10) {
//                 if (aadhar.length == 12) {
//                     if (password.length >= 8) {
//                         var fd = new FormData();
//                         fd.append('regno', regno);
//                         fd.append('name', name);
//                         fd.append('password', password);
//                         fd.append('dob', dateofbirth);
//                         fd.append('sex', gender);
//                         fd.append('class', standard);
//                         fd.append('section', section);
//                         fd.append('schoolname', schoolname);
//                         fd.append('mobile', mobile);
//                         fd.append('aadhar', aadhar);
//                         fd.append('address', address);
//                         fd.append('pincode', pincode);

//                         fetch('/student/registration', {
//                             method: 'POST',
//                             body: fd
//                         }).then(function (response) {

//                             //console.log(response);

//                             return response.json();

//                         }).then(function (data) {
//                             console.log(data);
//                             if (data.status == "success") {
//                                 // alert("Registered successfully");
//                                 Swal.fire({
//                                     title: 'Successfully Registered!',
//                                     icon: 'success'
//                                  }).then(function(result) {
//                                    if (result.value) {
//                                     var mystd = localStorage.getItem('std')
//                                     window.location.replace("/admin/"+mystd+"th-student-details")
//                                    }
//                                  });
//                             }
//                             else if (data.response == "User account already exists") {
//                                 Swal.fire({
//                                     title: 'Teacher already exists, please enter valid register number.',
//                                     text: 'Try again?',
//                                     icon: 'danger',
//                                     showCancelButton: true,
//                                     confirmButtonColor: '#3085d6',
//                                     cancelButtonColor: '#d33',
//                                     confirmButtonText: 'Yes, try again!'
//                                  }).then(function(result) {
//                                    if (result.value) {
//                                     window.location.replace("/admin/student-register")
//                                    }
//                                    else{
//                                     var mystd = localStorage.getItem('std')
//                                     window.location.replace("/admin/"+mystd+"th-student-details")
//                                    }
//                                  });
//                             }
//                             else{
//                                 Swal.fire({
//                                     title: 'Something went wrong, please try again',
//                                     icon: 'danger'
                                    
//                                  }).then(function(result) {
//                                    if (result.value) {
//                                     var mystd = localStorage.getItem('std')
//                                     window.location.replace("/admin/"+mystd+"th-student-details")
//                                    }
//                                  });
//                             }
//                         });
//                     }
//                     else {
//                         alert("Password length should be greater than 8")
//                     }
//                 }
//                 else {
//                     alert("Aadhar number should have 12 digits");
//                 }
//             }
//             else {
//                 alert("Mobile number should have 10 digits")
//             }
//         } else {
//             alert("Registration number should be length 7")
//         }

//     } else {
//         alert("Please enter all the fields")
//     }

// }





//Student registration
function student_register() {
    var regno = document.getElementById("student-id").value;
    var name = document.getElementById("student-username").value;
    var aadhar = document.getElementById("student-aadhar").value;
    var mobile = document.getElementById("student-mobile").value;
    var email_id = document.getElementById("student-email").value;
    var dob = document.getElementById("student-date-of-birth").value;
    var radios = document.getElementsByName('student-gender');
    var gender = ""
    for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        gender = radios[i].value;
        break;
    }
    }
    var standard = document.getElementById("student-standard").value;
    var section = document.getElementById("student-section").value;
    var schoolname = document.getElementById("student-schoolname").value;
    var address = document.getElementById("student-address").textContent;
    var pincode = document.getElementById("student-pincode").value;
    var password = document.getElementById("student-password").value;
    

    if (regno!=0 && name!="" && standard!="" && section!="" && gender!="" && email_id!="" && dob!="" && schoolname!="" && address!="" && pincode!="" && password!="" && mobile != "" && aadhar != "") {
        var reexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (reexp.test(email_id) == true){
        if (mobile.length == 10) {
            if (aadhar.length == 12) {
                    if (password.length >= 8) {
                        var fd = new FormData();
                        fd.append('regno', regno);

                        fetch('/student/check', {
                            method: 'POST',
                            body: fd
                        }).then(function (response) {

                            //console.log(response);

                            return response.json();

                        }).then(function (data) {
                            console.log(data);
                            if(data.status=="failed"){
                                var fd = new FormData();
                                fd.append('aadhar', aadhar);
                                fetch('/user/aadharcheck', {
                                    method: 'POST',
                                    body: fd
                                }).then(function (response) {
        
                                    //console.log(response);
        
                                    return response.json();
        
                                }).then(function (data) {
                                    console.log(data);
                                    if(data.status=="success"){
                                        Swal.fire({
                                            title: 'Aadhar number already exists, enter valid aadhar number',
                                        })
                                    }else{
                                        var fd = new FormData();
                                        fd.append('mobile', mobile);
                                        fetch('/user/phnocheck', {
                                            method: 'POST',
                                            body: fd
                                        }).then(function (response) {
        
                                            //console.log(response);
        
                                            return response.json();
        
                                        }).then(function (data) {
                                            console.log(data);
                                            if(data.status=="success"){
                                                Swal.fire({
                                                    title: 'Mobile number already exists, try with another',
                                                })
                                            }else{
                                                var fd = new FormData();
                                                fd.append('email', email_id);
                                                fetch('/user/mailid_check', {
                                                    method: 'POST',
                                                    body: fd
                                                }).then(function (response) {
        
                                                    //console.log(response);
        
                                                    return response.json();
        
                                                }).then(function (data) {
                                                    console.log(data);
                                                    if(data.status=="success"){
                                                        Swal.fire({
                                                            title: 'Email id already exists, try with another mail id',
                                                        })
                                                    }else{
                                                        var val_email = getEmail(email_id)
                                                        if(val_email==true){
                                                            const d = new Date(dob)
                                                            const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
                                                            const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
                                                            const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
                                                            var dateofbirth = `${da}-${mo}-${ye}`;
                                                            var fd = new FormData();
                                                            fd.append('regno', regno);
                                                            fd.append('name', name);
                                                            fd.append('password', password);
                                                            fd.append('dob', dateofbirth);
                                                            fd.append('sex', gender);
                                                            fd.append('class', standard);
                                                            fd.append('section', section);
                                                            fd.append('schoolname', schoolname);
                                                            fd.append('mobile', mobile);
                                                            fd.append('email', email_id);
                                                            fd.append('aadhar', aadhar);
                                                            fd.append('address', address);
                                                            fd.append('pincode', pincode);
                                                            
                                                            fetch('/student/registration', {
                                                                method: 'POST',
                                                                body: fd
                                                            }).then(function (response) {
                                    
                                                                //console.log(response);
                                    
                                                                return response.json();
                                    
                                                            }).then(function (data) {
                                                                console.log(data);
                                    
                                                                console.log(data.status);
                                                                if (data.status == "success") {
                                                                    // alert("Registered successfully");
                                                                    Swal.fire({
                                                                        title: 'Successfully Registered!',
                                                                        icon: 'success'
                                                                        }).then(function(result) {
                                                                        if (result.value) {
                                                                        var mystd = localStorage.getItem('std')
                                                                        window.location.replace("/admin/"+mystd+"th-student-details")
                                                                        }
                                                                        });
                                                                }
                                                                else if (data.response == "User account already exists") {
                                                                    Swal.fire({
                                                                        title: 'Student already exists, please enter valid register number.',
                                                                        text: 'Try again?',
                                                                        icon: 'danger',
                                                                        showCancelButton: true,
                                                                        confirmButtonColor: '#3085d6',
                                                                        cancelButtonColor: '#d33',
                                                                        confirmButtonText: 'Yes, try again!'
                                                                        }).then(function(result) {
                                                                        if (result.value) {
                                                                        window.location.replace("/admin/student-register")
                                                                        }
                                                                        else{
                                                                        var mystd = localStorage.getItem('std')
                                                                        window.location.replace("/admin/"+mystd+"th-student-details")
                                                                        }
                                                                        });
                                                                }
                                                                else{
                                                                    Swal.fire({
                                                                        title: 'Something went wrong, please try again',
                                                                        icon: 'danger'
                                                                        
                                                                        }).then(function(result) {
                                                                        if (result.value) {
                                                                        var mystd = localStorage.getItem('std')
                                                                        window.location.replace("/admin/"+mystd+"th-student-details")
                                                                        }
                                                                    });
                                                                }
                                                            });
                                                        }
                                                        else{
                                                            Swal.fire({
                                                                title: 'Please enter the proper email id',
                                                            })
                                                        }
                                                    }
                                                }); 
                                            }
                                        });     
                                    }
                                });
                            }
                            else{
                                Swal.fire({
                                    title: 'Register number already exists',
                                })
                            }
                        });

                        }
                    else {
                        Swal.fire({
                            title: 'Password length should be greater than 8',
                        })
                        // alert("Password length should be greater than 8")
                    }
            }
            else {
                Swal.fire({
                    title: 'Aadhar number should have 12 digits',
                })
                // alert("Aadhar number should have 12 digits");
            }
        }
        else {
            Swal.fire({
                title: 'Mobile number should have 10 digits',
            })
        }
    }else{
        Swal.fire({
            title: 'Please enter the email id properly',
        })
    }
}
    else{
        Swal.fire({
            title: 'Please enter all the fields',
        })
    }

}


function getEmail(email){
    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
      if (regexEmail.test(email)) {
          return true
      } else {
          return false
      }
  }
