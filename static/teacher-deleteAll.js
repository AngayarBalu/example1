function teacher_deleteAll() {
    fetch('/admin-portal/teacher/deleteAll', {
        method: 'POST'
    }).then(function (response) {

        //console.log(response);

        return response.json();

    }).then(function (data) {
        console.log(data);

        console.log(data.status);
        if (data.status == "success") {
            alert("All the teachers are deleted successfully!");
            window.location.replace("/admin/admin-home-page");
        }
    });
}