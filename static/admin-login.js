function login() {
    var regno = document.getElementById("admin-id").value;
    var password = document.getElementById("admin-password").value;
    localStorage.setItem("admin-id",regno);
    localStorage.setItem("admin-password",password);
    

    var fd = new FormData();
    fd.append('admin_id', regno);
    fd.append('password', password);

    fetch('/admin/login', {
        method: 'POST',
        body: fd
    }).then(function (response) {

        //console.log(response);

        return response.json();

    }).then(function (data) {
        console.log(data);

        console.log(data.status);
        if (data.status == "success") {
            localStorage.setItem("adminId", regno);
            localStorage.setItem("password", password);
            Android.sendData(regno);
            window.location.replace("/admin/admin-home-page")
        }
        else if (data.status == "successful") {
            localStorage.setItem("adminId", regno);
            localStorage.setItem("password", password);
            window.location.replace("/admin/admin-home-page")
        }
        else if(regno=="" || password==""){
            alert("Please enter both Admin Id and Password");
        }

        
        else if(data.response =="User not found"){
            alert("User Id not found or Invalid User");
        }
        
        else if(data.response =="wrong password"){
            alert("Invalid Password");
        }
        else if(data.response == "You are already logged in on another device"){
            alert("You are logged in on another device");
        }

    
    });
}
