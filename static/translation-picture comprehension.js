
var trans_questions = 0;
var pic_trans_total_marks = 0;
var pic_trans_head_no = 0;
var translation_heading = "";
var pic_compre_heading = "";
var translation_passage = "";
var pic_compre_trans_fileOutput = ""
var picture_compre_ques_obj = {}
var each_pic_trans_mark = 0;
var pic_trans_num_question = 0;
var pic_trans_marks = 0;

var translation_container = "";
var translation_count = 0;
// var trans_ques = [];
var translation_ans = [];
var translation_opt = [];
var translation_start_no = 0;
var translation_st = 0;
var translation_n = 0;
var translation_heading = "";
var translation_questions = 0;
var translation_total_marks = 0;
var translation_head_no = 0;
var each_translation_mark = 0;
var translation_num_question = 0;
var translation_marks = 0;

function picture_compre_trans_encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("picture_compre_trans_uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("picture_compre_trans_uploadPreview").src = oFREvent.target.result;
    };
    reader.onloadend = function () {
        pic_compre_trans_fileOutput = reader.result;
    }
    reader.readAsDataURL(file);
};

function trans_picture_PreviewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("picture_compre_trans_uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("picture_compre_trans_uploadPreview").src = oFREvent.target.result;
    };
};
function translation_add_field() {
    if (translation_n > 0) {
        $("#translation_a").empty();
        translation_count = 0;
    }
    translation_n++;
    //translation_heading = document.getElementById("translation_heading").value;
    translation_questions = document.getElementById("translation-questions").value;
    translation_container = document.getElementById("translation_a");
    translation_start_no = 1;
 
    if (translation_questions != 0) {
                   
                            document.getElementById("translation_picture_getvalue").style.display = "block";
                            for (i = 0; i < translation_questions; i++) {
                                translation_container.innerHTML = translation_container.innerHTML +
                                    "&nbsp;<div id='translation_" + translation_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + translation_count + "'>" + translation_start_no + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='translation_question" + translation_count + "'contenteditable='true' data-placeholder='Question " + (translation_count + 1) + "' ></div></div></div></div>";
                                translation_count++;
                                translation_start_no++;
                            }
                      
                }
                else {
                    alert("Please enter the number of questions");
                }
           
        
}

function translation_picture_getvalues() {
    var translation_question = [];
    var translation_ques = [];
    pic_trans_total_marks = document.getElementById("translation-pic-marks").value;
    pic_trans_head_no = document.getElementById("translation-pic-heading-number").value;
    translation_heading = document.getElementById("translation_heading").value;
    pic_compre_heading = document.getElementById("pic_compre_heading").value;
    // translation_passage = document.getElementById("translation-passage").textContent;
    if (pic_trans_head_no != 0) {
        if (pic_trans_total_marks != 0) {
            if (translation_heading != "") {
                if (pic_compre_heading != "") {
                    if (translation_questions != 0) {
                        for (i = 0; i < translation_count; i++) {
                            translation_ques[i] = document.getElementById("translation_question" + i).textContent;
                        }
            
                        translation_ques = translation_ques.filter(function (e) { return e });
                        if (count(translation_ques) == translation_questions) {
                            // if ($("input[name='trans_type'][value='trans_Numbers']").prop("checked")) {
                                // var start_num = trans_st;
                                for (i = 0; i < translation_questions; i++) {
                                    var inData = document.getElementById('translation_question' + i).textContent;
                                    translation_question[i]= inData;
                                    // start_num++;
                                }
                    
                        if (pic_compre_trans_fileOutput != "") {
                            each_pic_trans_mark = printEachMark(translation_heading, pic_trans_total_marks, 1)
                            pic_trans_num_question = printNumQuestions(translation_heading, 1)
                            pic_trans_marks = pic_trans_num_question + " x " + each_pic_trans_mark + " = " + pic_trans_total_marks

                            var partno = "";
                           
                            for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
                                console.log("retrived " + question_types[v]);
                                var partarr = question_types[v];
                                for (var h = 0; h < partarr.length; h++) {
                                    if ("Translation and Picture comprehension" == partarr[h]) {
                                        partno = v - s_sec;
                                        break;
                                    }
                                }
                            }
            
                            con_no = parseInt(pic_trans_head_no) + 1;

                            item_trans_pic[pic_trans_head_no] = {
                                "heading": null,
                                "marks": pic_trans_marks,
                                "type":"TRAPIC",
                                "questions": {
                                    "a": {
                                        "heading": translation_heading,
                                        "marks": null,
                                        "type": "MCQN",
                                        "question": translation_question
                                    },
                                    "b": {
                                        "heading": pic_compre_heading,
                                        "marks": null,
                                        "type": "COMPIMG",
                                        "image": pic_compre_trans_fileOutput
                                    }
                                },
                                "quotedWords": null,
                                "quoteType": null,
                                "options": null
                            }

                            obj_trans_pic = {
                                "user":reg_teacher,
                                "heading": null,
                                "marks": pic_trans_marks,
                                "type": "TRAPIC",
                                "question": {
                                    "a": {
                                        "heading": translation_heading,
                                        "marks": null,
                                        "type": "MCQN",
                                        "question": translation_question
                                    },
                                    "b": {
                                        "heading": pic_compre_heading,
                                        "marks": null,
                                        "type": "COMPIMG",
                                        "image": pic_compre_trans_fileOutput
                                    },
                                },
                                "quotedWords": null,
                                "quoteType": null,
                                "options": null
                            }

                            console.log(JSON.stringify(item_trans_pic, null, '\t'))
                            console.log(JSON.stringify(obj_trans_pic, null, '\t'))
                            createPictureTranslation(JSON.stringify(obj_trans_pic, null, '\t'))
                            alert("Translation and Picture comprehension is saved successfully");
                            document.getElementById('translation_picture_getvalue').value='Saved!';
                            if (item_trans_pic != {}) {
                                if (part1.hasOwnProperty("part " + partno)) {
                                    var temp_item = part1["part " + partno];
                                    part1["part " + partno] = { ...temp_item, ...item_trans_pic };
                                }
                                else {
                                    part1["part " + partno] = item_trans_pic;
                                }
                                item_trans_pic = {};
                            }
                        }
                        else {
                            alert("Please upload an image")
                        }
                    } else {
                        alert("Please enter all the questions")
                    }}
                     else {
                        alert("Please enter the questions")
                    }
                }
                else {
                    alert("Please enter picture comprehension heading");
                }
            } else {
                alert("Please enter the translation heading")
            }
        }
        else {
            alert("Please enter the total marks")
        }
    }
    else {
        alert("Please enter the heading number")
    }
}

function count(array) {
    var c = 0;
    for (i in array) // in returns key, not object
        if (array[i] != "")
            c++;

    return c;
}

