// function register() {
//     var regno = document.getElementById("student-id").value;
//     var name = document.getElementById("student-username").value;
//     var aadhar = document.getElementById("student-aadhar").value;
//     var mobile = document.getElementById("student-mobile").value;
//     var dob = document.getElementById("student-date-of-birth").value;
//     var gender = document.getElementById("student-gender").value;
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

//                             console.log(data.status);
//                             if (data.status == "success") {
//                                 alert("Registered successfully");
//                                 window.location.replace("/admin/admin-home-page")
//                             }
//                             else if(data.response== "User account already exists"){
//                                 alert("student account already exists")
//                             }
//                             else if(data.response == "database error. request not acknowledged"){
//                                 alert("Please contact your admin");
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


