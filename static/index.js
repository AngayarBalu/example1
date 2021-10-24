var ip = "127.0.0.1:5487";
var std = localStorage.getItem("std");
var sec = localStorage.getItem("section");
var subname = localStorage.getItem("subname");
var user_id = localStorage.getItem("regId");
var ch_no = localStorage.getItem("ch_no");
var ch_type = localStorage.getItem("ch_type");
var ch_heading = localStorage.getItem("ch_heading");
var schoolname;
console.log(user_id)


$(function(){
  $("#includedContent").load("/admin/htmlfile"); 
});

$(function(){
  $("#teacher-div").load("/teacher/htmlfile"); 
});

var fd = new FormData();
fd.append('regId', user_id);
fetch('/admin-portal/teacher-profile', {
    method: 'POST',
    body: fd
}).then(function (response) {
    //console.log(response);
    return response.json();

}).then(function (data) {
    console.log(data);
    if(data.response=="User not found"){
      var user_id = localStorage.getItem("adminId");
      var fd = new FormData();
      fd.append('adminId', user_id);
      fetch('/admin-portal/admin-profile', {
          method: 'POST',
          body: fd
      }).then(function (response) {
          //console.log(response);
          return response.json();

      }).then(function (data1) {
          console.log(data1);
          schoolname = data1["schoolname"];
          localStorage.setItem("schoolname",schoolname);

      });
    }
    else{
      schoolname = data["schoolname"];
      localStorage.setItem("schoolname",schoolname);
    }
    

});


//save final object
function upload_assignments(opts,schoolname,std,sec,subject) {
  fetch('/teacher/post-assignments', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
    if(data.status=="success"){
      var posttime = new Date(new Date().getTime() + 4*60*60*1000).toLocaleTimeString();
      var postdate = new Date(new Date().getTime() - 2*24*60*60*1000).toLocaleDateString();
      var regId = localStorage.getItem("teacher-id");

      var fd = new FormData();
      fd.append('notification', "Your assignment is posted for the subject "+subject);
      fd.append('schoolname', schoolname);
      fd.append('regId',regId);
      fd.append('std', std);
      fd.append('sec',sec);
      fd.append('subject',subject);
      fd.append('posted-time', posttime);
      fd.append('posted-date', postdate);


    fetch('/student/notifications', {
        method: 'POST',
        body: fd
    }).then(function (response) {
        return response.json();

    }).then(function (data) {
        console.log(data);
        if(data.status=="successfully notified"){
          alert("Your assignment is posted successfully!")
          window.location.replace("/teacher/home-page");
        }
    });
    }
    else{
      alert("Something went wrong, please try again.")
    }
  });
}


function update_student_marks(opts,std,schoolname,examname) {

  fetch('/teacher/update-student-marks', {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts,
}).then(function (response) {
    //console.log(response);
    return response.json();
}).then(function (data) {
    console.log(data);

});
}

function calculateGrade(mark){
    grade = ""
    if (mark > 90 && mark <= 100){
        grade = "A"
    }
    else if (mark > 80 && mark <= 90){
        grade = "B"
    }
    else if (mark > 70 && mark <= 80){
        grade = "C"
    }
    else if (mark > 60 && mark <= 70){
        grade = "D"
    }
    else if (mark > 50 && mark <= 60){
        grade = "E"
    }
    else{
        grade = " - "
    }
    return grade                     
}


function sslc_course_enroll(opts){
    fetch('/teacher/sslc-course-enrollment', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body:'name='+opts,
  }).then(function (response) {
      //console.log(response);
      return response.json();
  }).then(function (data) {
      console.log(data);
      if(data.status=="success"){
        Swal.fire({
          title: 'Courses enrolled successfully!',
          icon: 'success'
      }).then(function(result) {
      if (result.value) {
          window.location.replace("/admin/home-page");
      }
      });
        // alert("Courses enrolled successfully!");
      }
      else if(data.status=="Teacher not found"){
        Swal.fire({
          title: 'No teacher available wuth this ID, Please enter the valid teacher ID',
          icon: 'error'
      }).then(function(result) {
      if (result.value) {
          window.location.replace("/admin/home-page")
      }
      });
        // alert("No teacher available wuth this ID, Please enter the valid teacher ID")
      }
  });
}

function ObjectToArray(obj) {
  var arr = [];
  for (key in obj) {
      arr.push(obj[key]);
  }
  return arr
}

function getCurrentDate(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + '-' + mm + '-' + yyyy;
  return today;
} 

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getDayName(dateString) {
  var [date, options] = [new Date(dateString), {weekday: 'long'}];
  return new Intl.DateTimeFormat('en-Us', options).format(date);
}

function create_time_table(opts, exam_name){
  fetch('/exam/time-table', {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts,
}).then(function (response) {
    //console.log(response);
    return response.json();
}).then(function (data) {
    console.log(data);
    if(data.status=="success"){
      
      var posttime = new Date(new Date().getTime() + 4*60*60*1000).toLocaleTimeString();
      var postdate = new Date(new Date().getTime() - 2*24*60*60*1000).toLocaleDateString();
      var admin_id = localStorage.getItem("admin-id");
      var schoolname = localStorage.getItem("schoolname");

      var fd = new FormData();
      fd.append('notification', "Exam time table is posted");
      fd.append('schoolname', schoolname);
      fd.append('admin-id', admin_id);
      fd.append('exam-name', exam_name);
      fd.append('posted-time', posttime);
      fd.append('posted-date', postdate);


    fetch('/notifications', {
        method: 'POST',
        body: fd
    }).then(function (response) {
        return response.json();

    }).then(function (data) {
        console.log(data);
        if(data.status=="successfully notified"){
          alert("Your time table is saved successfully!");
          window.location.replace("/admin/view-class-time-table");
        }
    });

    }
    else if(data.status=="successful"){
      alert("Your time table is already inserted!");
    }

    else{
      alert("Something went wrong, please try again")
    }
});
}


function update_time_table(opts){
  fetch('/update/exam-time-table', {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts,
}).then(function (response) {
    //console.log(response);
    return response.json();
}).then(function (data) {
    console.log(data);
    if(data.status=="successful"){
        Swal.fire({
          title: 'Your time table is updated successfully!',
          icon: 'success'
      });
    }
    if(data.status=="success"){
      Swal.fire({
        title: 'Your time table is updated successfully!',
        icon: 'success'
    });
    }
    else{
      Swal.fire({
        title: 'Something went wrong, please try again',
        icon: 'error'
    });
    }
});
}



function create_teacher_time_table(opts){
  fetch('/teacher/class-time-table', {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts,
}).then(function (response) {
    //console.log(response);
    return response.json();
}).then(function (data) {
    console.log(data);
    if(data.status=="success"){
      alert("Time table is saved successfully!")
    }
    else if(data.status=="successful"){
      alert("Time table is saved successfully!");
    }

    else{
      alert("Something went wrong, please try again")
    }

});
}


function create_class_time_table(opts){
  fetch('/student/class-time-table', {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts,
}).then(function (response) {
    //console.log(response);
    return response.json();
}).then(function (data) {
    console.log(data);
    if(data.status=="success"){
        alert("Time table is saved successfully!")
        window.location.replace("/admin/view-class-time-table");
    }
    else if(data.status=="successful"){
        alert("Time table is saved successfully!");
        window.location.replace("/admin/view-class-time-table");
    }

    else{
      alert("Something went wrong, please try again")
    }

});
}



function toObject(arr) {
  var rv = {};
  for (i = 0; i < arr.length; i++) {
      rv[i + 1] = arr[i]
  }
  return rv
}

function count(array) {
  var c = 0;
  for (i in array) // in returns key, not object
      if (array[i] != "")
          c++;

  return c;
}
