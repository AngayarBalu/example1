function register() {
    var regno = document.getElementById("examiner-id").value;
    var name = document.getElementById("examiner-username").value;
    var hallno = document.getElementById("examiner-hallno").value;
    var aadhar = document.getElementById("examiner-aadhar").value;
    var mobile = document.getElementById("examiner-mobile").value;
    var dob = document.getElementById("examiner-date-of-birth").value;
    // var gender = document.getElementById("examiner-gender").value;
    var radios = document.getElementsByName('examiner-gender');
    var gender = ""
    for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        // alert(radios[i].value);
        gender = radios[i].value;
        break;
    }
    }

    var schoolname = document.getElementById("examiner-schoolname").value;
    var address = document.getElementById("examiner-address").textContent;
    var pincode = document.getElementById("examiner-pincode").value;
    var password = document.getElementById("examiner-password").value;
    const d = new Date(dob)
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
    const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

    var dateofbirth = `${da}-${mo}-${ye}`;
    
    if (regno!=0 && name!="" && hallno!="" && gender!="" && dob!="" && schoolname!="" && address!="" && pincode!="" && password!="" && mobile != "" && aadhar != "") {
        if (mobile.length == 10) {
            if (aadhar.length == 12) {
                    if (password.length >= 8) {
                        var fd = new FormData();
                        fd.append('examiner_id', regno);
                        fd.append('name', name);
                        fd.append('hallno', hallno);
                        fd.append('password', password);
                        fd.append('dob', dateofbirth);
                        fd.append('sex', gender);
                        fd.append('mobile', mobile);
                        fd.append('schoolname', schoolname);
                        fd.append('aadhar', aadhar);
                        fd.append('address', address);
                        fd.append('pincode', pincode);
                        
                        fetch('/examiner/registration', {
                            method: 'POST',
                            body: fd
                        }).then(function (response) {

                            //console.log(response);

                            return response.json();

                        }).then(function (data) {
                            console.log(data);

                            console.log(data.status);
                            if (data.status == "success") {
                                
                                Swal.fire({
                                    title: 'Successfully Registered!',
                                    text: 'Do you want to go to the Log In page?',
                                    icon: 'success',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Yes, send me there!'
                                 }).then(function(result) {
                                   if (result.value) {
                                    localStorage.setItem('schoolname',schoolname);
                                    localStorage.setItem('teacher-id',regno);
                                    window.location.replace("/examiner-login")
                                   }
                                 });
                            }
                            else if(data.response== "User account already exists"){
                                // alert("Examiner account already exists")
                                Swal.fire({
                                    title: 'Examiner account already exists, please try again with another id.',
                                    icon: 'danger'
                                }).then(function(result) {
                                if (result.value) {
                                    window.location.replace("/examiner-register")
                                }
                                });
                            }
                            else if(data.response == "database error. request not acknowledged"){
                                Swal.fire({
                                    title: 'Could not register examiner, please contact your administrator',
                                    icon: 'danger'
                                }).then(function(result) {
                                if (result.value) {
                                    window.location.replace("/examiner-register")
                                }
                                });
                            }
                        });
                    }
                    else {
                        alert("Password length should be greater than 8")
                    }
            }
            else {
                alert("Aadhar number should have 12 digits");
            }
        }
        else {
            alert("Mobile number should have 10 digits")
        }

    }else{
        alert("Please enter all the fields")
    }
}

