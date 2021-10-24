function register() {
    var regno = document.getElementById("admin-id").value;
    var name = document.getElementById("admin-username").value;
    var aadhar = document.getElementById("admin-aadhar").value;
    var mobile = document.getElementById("admin-mobile").value;
    var dob = document.getElementById("admin-date-of-birth").value;
    var gender = document.getElementById("admin-gender").value;
    var email_id = document.getElementById("admin-email").value;
    var schoolname = document.getElementById("admin-schoolname").value;
    var address = document.getElementById("admin-address").textContent;
    var pincode = document.getElementById("admin-pincode").value;
    var password = document.getElementById("admin-password").value;
    const d = new Date(dob)
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
    const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

    var dateofbirth = `${da}-${mo}-${ye}`;
    
    if (regno!=0 && name!="" && gender!="" && dob!="" && schoolname!="" && email_id!="" && address!="" && pincode!="" && password!="" && mobile != "" && aadhar != "") {
        var reexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (reexp.test(email_id) == true){
        if (mobile.length == 10) {
            if (aadhar.length == 12) {
                    if (password.length >= 8) {
                        var fd = new FormData();
                        fd.append('admin_id', regno);
                        fd.append('name', name);
                        fd.append('password', password);
                        fd.append('dob', dateofbirth);
                        fd.append('email', email_id);
                        fd.append('sex', gender);
                        fd.append('mobile', mobile);
                        fd.append('schoolname', schoolname);
                        fd.append('aadhar', aadhar);
                        fd.append('address', address);
                        fd.append('pincode', pincode);
                        
                        fetch('/admin/registration', {
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
                                localStorage.setItem("schoolname",schoolname);
                                window.location.replace("/admin/admin-login")
                            }
                            else if(data.response== "User account already exists"){
                                alert("Admin account already exists")
                            }
                            else if(data.response == "database error. request not acknowledged"){
                                alert("Please check your account");
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
    }
    else{
        alert("Please enter the email id properly")
    }
}
else{
        alert("Please enter all the fields")
    }
}

