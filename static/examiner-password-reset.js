function reset() {
    var regno = document.getElementById("examiner-id").value;
    var aadhar = document.getElementById("examiner-aadhar").value;
    var password = document.getElementById("examiner-new-password").value;
    var new_password = document.getElementById("examiner-confirm-password").value;
    if (aadhar.length == 12) {
        if (password == new_password) {
            if (password.length >= 8) {
                var fd = new FormData();
                fd.append('examiner_id', regno);
                fd.append('aadhar', aadhar);
                fd.append('password', password);

                console.log(aadhar + " " + password);
                fetch('/admin-portal/examiner-reset-password', {
                    method: 'POST',
                    body: fd
                }).then(function (response) {

                    //console.log(response);

                    return response.json();

                }).then(function (data) {
                    console.log(data);

                    console.log(data.status);
                    if (data.status == "success") {
                        localStorage.setItem("examiner_id", regno);
                        localStorage.setItem("aadhar", aadhar);
                        localStorage.setItem("password", password);
                        alert("Successfully reset password");
                        window.location.replace("/examiner-login")
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
