
function login() {
    var regId = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var fd = new FormData();
    fd.append('regId', regId);
    fd.append('password', password);
    console.log(regId + " " + password);
    fetch('/proctor/login', {
        method: 'POST',
        body: fd
    }).then(function (response) {

        //console.log(response);

        return response.json();

    }).then(function (data) {
        console.log(data);

        console.log(data.status);
        if (data.status == "success") {
            localStorage.setItem("regId", regId);
            localStorage.setItem("password", password);
            window.location.replace("/proctor/home")
        }
        else if (data.status == "successful") {
            localStorage.setItem("regId", regId);
            localStorage.setItem("password", password);
            window.location.replace("/proctor/home")
        }
        else {
            alert("Invalid Proctor Id or Password");
        }
    });
}


function reset() {
    var regId = document.getElementById("username").value;
    var aadhar = document.getElementById("aadhar number").value;
    var new_password = document.getElementById("new password").value;
    var password = document.getElementById("confirm password").value;
    if (aadhar.length == 12) {
        if (password == new_password) {
            if (password.length >= 8) {
                var fd = new FormData();
                fd.append('regId', regId);
                fd.append('aadhar', aadhar);
                fd.append('password', password);

                console.log(aadhar + " " + password);
                fetch('/proctor/reset-password', {
                    method: 'POST',
                    body: fd
                }).then(function (response) {

                    //console.log(response);

                    return response.json();

                }).then(function (data) {
                    console.log(data);

                    console.log(data.status);
                    if (data.status == "success") {
                        localStorage.setItem("regId", regId);
                        localStorage.setItem("aadhar", aadhar);
                        localStorage.setItem("password", password);
                        alert("Successfully reset password");
                        window.location.replace("/proctor/login")
                    }
                    else if (data.status == "user not found") {
                        alert("Please enter valid proctor id")
                    }
                    else if (data.response == "aadhar didn't match") {
                        alert("Invalid aadhar number, check your aadhar number");
                    }
                });
            }
            else {
                alert("Password length should be greater than 8")
            }
        }
        else {
            alert("Passwords mismatch")
        }

    }
    else {
        alert("Aadhar number should have 12 digits");
    }
}

function register() {
    var regId = document.getElementById("proctor-id").value;
    var name = document.getElementById("username").value;
    var aadhar = document.getElementById("aadhar").value;
    var mobile = document.getElementById("mobile").value;
    var mail_id = document.getElementById("mail-id").value;
    var new_password = document.getElementById("password").value;
    var password = document.getElementById("repeat-password").value;
    if (new_password != "" && password != "" && regId != "" && mobile != "" && aadhar != "" && name != "" && mail_id != "") {
        if (mobile.length == 10) {
            if (aadhar.length == 12) {
                if (password == new_password) {
                    if (password.length >= 8) {
                        var fd = new FormData();
                        fd.append('regId', regId);
                        fd.append('name', name);
                        fd.append('email', mail_id);
                        fd.append('mobile', mobile);
                        fd.append('aadhar', aadhar);
                        fd.append('password', password);
                        fetch('/proctor/teacher-registration', {
                            method: 'POST',
                            body: fd
                        }).then(function (response) {

                            //console.log(response);

                            return response.json();

                        }).then(function (data) {
                            console.log(data);

                            console.log(data.status);
                            if (data.status == "success") {
                                alert("Registered successfully");
                                window.location.replace("/proctor/loginpage")
                            }
                            else if (data.status == "failed") {
                                alert("User already exists")
                            }
                        });
                    }
                    else {
                        alert("Password length should be greater than 8")
                    }
                }
                else {
                    alert("Passwords mismatch")
                }

            }
            else {
                alert("Aadhar number should have 12 digits");
            }
        }
        else {
            alert("Mobile number should have 10 digits")
        }
    } else {
        alert("Please enter all the fields")
    }

}
