var picture_compre_heading = "";
var picture_compre_total_marks = 0;
var picture_compre_head_no = 0;
var picture_compre_fileOutput = ""
var picture_compre_ques_obj = {}
var each_picture_compre_mark = 0;
var picture_compre_num_question = 0;
var picture_compre_marks = 0;

function picture_compre_encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("picture_compre_uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("picture_compre_uploadPreview").src = oFREvent.target.result;
    };
    reader.onloadend = function () {
        picture_compre_fileOutput = reader.result;
    }
    reader.readAsDataURL(file);
};

function picture_compre_PreviewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("picture_compre_uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("picture_compre_uploadPreview").src = oFREvent.target.result;
    };
};

function picture_compre_getvalues() {
    picture_compre_heading = document.getElementById("picture_compre_heading").value;
    picture_compre_total_marks = document.getElementById("picture_compre-marks").value;
    picture_compre_head_no = document.getElementById("picture_compre-heading-number").value;
    if (picture_compre_head_no != 0) {
        if (picture_compre_heading != "") {
            if (picture_compre_total_marks != 0) {
                if (picture_compre_fileOutput != "") {
                    each_picture_compre_mark = printEachMark(picture_compre_heading, picture_compre_total_marks, 1)
                    picture_compre_num_question = printNumQuestions(picture_compre_heading, 1)
                    picture_compre_marks = picture_compre_num_question + " x " + each_picture_compre_mark + " = " + picture_compre_total_marks
                    var partno = "";
                    
                    for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
                        console.log("retrived " + question_types[v]);
                        var partarr = question_types[v];
                        for (var h = 0; h < partarr.length; h++) {
                            if ("Picture comprehension" == partarr[h]) {
                                partno = v - s_sec;
                                break;
                            }
                        }
                    }
    
                    con_no = parseInt(picture_compre_head_no) + 1;

                    item_pic_compre[picture_compre_head_no] = {
                        "heading": picture_compre_heading,
                        "type":"COMPIMG",
                        "marks": picture_compre_marks,
                        "image": picture_compre_fileOutput,
                        "quotedWords": null,
                        "quoteType": null,
                        "options": null
                    }

                    obj_pic_compre = {
                        "user":reg_teacher,
                        "heading": picture_compre_heading,
                        "type":"COMPIMG",
                        "marks": picture_compre_marks,
                        "image": picture_compre_fileOutput,
                        "quotedWords": null,
                        "quoteType": null,
                        "options": null
                    }

                    console.log(JSON.stringify(item_pic_compre, null, '\t'))
                    console.log(JSON.stringify(obj_pic_compre, null, '\t'))
                    createPictureComprehension(JSON.stringify(obj_pic_compre, null, '\t'))
                    alert("Picture comprehension is saved successfully");
                    document.getElementById('picture_compre_getvalue').value='Saved!';
                    if (item_pic_compre != {}) {
                        if (part1.hasOwnProperty("part " + partno)) {
                            var temp_item = part1["part " + partno];
                            part1["part " + partno] = { ...temp_item, ...item_pic_compre };
                        }
                        else {
                            part1["part " + partno] = item_pic_compre;
                        }
                        item_pic_compre = {};
                    }
                }
                else {
                    alert("Please upload an image")
                }
            } else {
                alert("Please enter the marks")
            }
        }
        else {
            alert("Please enter the heading");
        }
    } else {
        alert("Please enter the heading number")
    }
}