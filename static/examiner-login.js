function login() {
    var regno = document.getElementById("examiner-id").value;
    var password = document.getElementById("examiner-password").value;
    

    var fd = new FormData();
    fd.append('examiner_id', regno);
    fd.append('password', password);

    fetch('/admin-portal/examiner-login', {
        method: 'POST',
        body: fd
    }).then(function (response) {

        //console.log(response);

        return response.json();

    }).then(function (data) {
        console.log(data);

        console.log(data.status);
        if (data.status == "success") {
            localStorage.setItem("examiner-id", regno);
            localStorage.setItem("examiner-password", password);
            window.location.replace("/examinar/live-panel")
        }
        else if (data.status == "successful") {
            localStorage.setItem("examiner-id", regno);
            localStorage.setItem("examiner-password", password);
            window.location.replace("/examinar/live-panel")
        }
        else if(regno=="" || password==""){
            alert("Please enter both examiner Id and Password");
        }
        else if(data.response =="wrong password"){
            alert("Invalid Examiner Id or Password");
        }
        else if(data.response == "You are already logged in on another device"){
            alert("You are logged in on another device");
        }
    });
}
