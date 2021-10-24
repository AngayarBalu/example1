var regno = localStorage.getItem("admin-id");
var pwd = localStorage.getItem("admin-password");

function logout() {

    var send = new FormData();
    send.append('adminId', regno);
    send.append('password', pwd);


    fetch('/admin-portal/admin-logout', {
        method: 'POST',
        body: send
    }).then(function (response) {

        //console.log(response);

        return response.json();

    }).then(function (data) {
        console.log(data);
        window.location.replace("/admin/admin-login")

    });
}