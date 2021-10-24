
function login() {
    var regno = document.getElementById("teacher-id").value;
    var password = document.getElementById("teacher-password").value;
    localStorage.setItem("teacher-id",regno);
    localStorage.setItem("teacher-password",password);
    

    var fd = new FormData();
    fd.append('regId', regno);
    fd.append('password', password);

    fetch('/teacher/login', {
        method: 'POST',
        body: fd
    }).then(function (response) {

        //console.log(response);

        return response.json();

    }).then(function (data) {
        console.log(data);

        console.log(data.status);
        if (data.status == "success") {
            localStorage.setItem("regId", regno);
            localStorage.setItem("password", password);
            window.location.replace("/teacher/home-page")
        }
        else if (data.status == "successful") {
            localStorage.setItem("regId", regno);
            localStorage.setItem("password", password);
            window.location.replace("/teacher/home-page")
        }
        else if(regno=="" || password==""){
            alert("Please enter both Teacher Id and Password");
        }

        else if(data.response =="User not found"){
            alert("Teacher Id not found or Invalid User");
        }
        
        else if(data.response =="wrong password"){
            alert("Invalid Password");
        }
        else if(data.response == "You are already logged in on another device"){
            alert("You are already logged in on another device");
        }
    });
}


var regno = localStorage.getItem("teacher-id");
var pwd = localStorage.getItem("teacher-password");
// console.log(regno)


function logout() {

    var send = new FormData();
    send.append('regId', regno);
    send.append('password', pwd);


    fetch('/teacher/logout', {
        method: 'POST',
        body: send
    }).then(function (response) {

        //console.log(response);

        return response.json();

    }).then(function (data) {
        console.log(data);
        if(data.status=="logout success"){
            window.location.replace("/teacher/login")
        }   
    });
}



function reset() {
    var regno = document.getElementById("teacher-id").value;
    var aadhar = document.getElementById("teacher-aadhar").value;
    var password = document.getElementById("teacher-new-password").value;
    var new_password = document.getElementById("teacher-confirm-password").value;
    if (aadhar.length == 12) {
        if (password == new_password) {
            if (password.length >= 8) {
                var fd = new FormData();
                fd.append('regId', regno);
                fd.append('aadhar', aadhar);
                fd.append('password', password);

                console.log(aadhar + " " + password);
                fetch('/teacher/reset-password', {
                    method: 'POST',
                    body: fd
                }).then(function (response) {

                    //console.log(response);

                    return response.json();

                }).then(function (data) {
                    console.log(data);

                    console.log(data.status);
                    if (data.status == "success") {
                        localStorage.setItem("regId", regno);
                        localStorage.setItem("aadhar", aadhar);
                        localStorage.setItem("password", password);
                        alert("Successfully reset password");
                        window.location.replace("/teacher/login")
                    }
                    else if (data.status == "user not found") {
                        alert("Please enter valid teacher id")
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



