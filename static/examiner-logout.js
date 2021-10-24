var regno = localStorage.getItem("examiner-id");
var pwd = localStorage.getItem("examiner-password");

function logout() {

    var send = new FormData();
    send.append('examiner_id', regno);
    send.append('password', pwd);


    fetch('/admin-portal/examiner-logout', {
        method: 'POST',
        body: send
    }).then(function (response) {

        //console.log(response);

        return response.json();

    }).then(function (data) {
        console.log(data);
        window.location.replace("/examiner-login")

    });
}