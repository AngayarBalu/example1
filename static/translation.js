// var trans_heading = "";
// var trans_questions = 0;
// var trans_total_marks = 0;
// var trans_head_no = 0;
// var trans_passage = ""
// var trans_ques_obj = {};
// var each_trans_mark = 0;
// var trans_num_question = 0;
// var trans_marks = 0;

// function trans_getvalues() {
//     trans_heading = document.getElementById("trans_heading").value;
//     trans_total_marks = document.getElementById("trans-marks").value;
//     trans_head_no = document.getElementById("trans-heading-number").value;
//     trans_passage = document.getElementById("trans-passage").textContent;
//     var trans_question = {};
//     if (trans_head_no != 0) {
//         if (trans_heading != "") {
//             if (trans_total_marks != 0) {
//                 if (trans_passage != "") {
//                     each_trans_mark = printEachMark(trans_heading, trans_total_marks, trans_total_marks)
//                     trans_num_question = printNumQuestions(trans_heading, trans_total_marks)
//                     trans_marks = trans_num_question + " x " + each_trans_mark + " = " + trans_total_marks
//                     var partno = "";
//                     for (var v = sum_sect + 1; v <= (parseInt(retrievedData4[sectioncount]) + sum_sect); v++) {
//                         console.log("retrived " + retrievedData6[v]);
//                         var partarr = retrievedData6[v];
//                         for (var h = 0; h < partarr.length; h++) {
//                             if ("Translation" == partarr[h]) {
//                                 partno = v - sum_sect;
//                                 break;
//                             }
//                         }
//                     }

//                     item_translation[trans_head_no] = {
//                         "heading": trans_heading,
//                         "type": "MCQN",
//                         "marks": trans_marks,
//                         "question": trans_passage,
//                         "quotedWords": null,
//                         "quoteType": null,
//                         "options": null
//                     }

//                     obj_translation = {
//                         "user": reg_teacher,
//                         "heading": trans_heading,
//                         "type": "MCQN",
//                         "marks": trans_marks,
//                         "question": trans_passage,
//                         "quotedWords": null,
//                         "quoteType": null,
//                         "options": null
//                     }

//                     console.log(JSON.stringify(item_translation, null, '\t'))
//                     console.log(JSON.stringify(obj_translation, null, '\t'))
//                     createTranslation(JSON.stringify(obj_translation, null, '\t'))
//                     alert("Translation question is saved successfully");
//                     document.getElementById('trans_getvalue').value='Saved!';

//                     if (item_translation != {}) {
//                         if (part1.hasOwnProperty("part " + partno)) {
//                             var temp_item = part1["part " + partno];
//                             part1["part " + partno] = { ...temp_item, ...item_translation };
//                         }
//                         else {
//                             part1["part " + partno] = item_translation;
//                         }
//                         item_translation = {};
//                     }
//                 }
//                 else {
//                     alert("Please enter the passage")
//                 }
//             } else {
//                 alert("Please enter the marks")
//             }
//         }
//         else {
//             alert("Please enter the heading");
//         }
//     } else {
//         alert("Please enter the heading number")
//     }
// }
var trans_container = "";
var trans_count = 0;
// var trans_ques = [];
var trans_ans = [];
var trans_opt = [];
var trans_start_no = 0;
var trans_st = 0;
var trans_n = 0;
var trans_heading = "";
var trans_questions = 0;
var trans_total_marks = 0;
var trans_head_no = 0;
var each_trans_mark = 0;
var trans_num_question = 0;
var trans_marks = 0;

function trans_add_field() {
    if (trans_n > 0) {
        $("#trans_a").empty();
        trans_count = 0;
    }
    trans_n++;
    trans_heading = document.getElementById("trans_heading").value;
    trans_questions = document.getElementById("trans-questions").value;
    trans_container = document.getElementById("trans_a");
    trans_total_marks = document.getElementById("trans-marks").value;
    trans_head_no = document.getElementById("trans-heading-number").value;
    trans_start_no = 1;
    each_trans_mark = printEachMark(trans_heading, trans_total_marks, trans_questions)
    trans_num_question = printNumQuestions(trans_heading, trans_questions)
    trans_marks = trans_num_question + " x " + each_trans_mark + " = " + trans_total_marks
    trans_st = trans_start_no;
    if (trans_total_marks != 0) {
        if (trans_heading != "") {
            // if ($("input[name=trans_type]").is(":checked")) {
                if (trans_questions != 0) {
                    // if ($("input[name='trans_type'][value='trans_Numbers']").prop("checked")) {
                        // if (trans_start_no != 0) {
                            document.getElementById("trans_getvalue").style.display = "block";
                            for (i = 0; i < trans_questions; i++) {
                                trans_container.innerHTML = trans_container.innerHTML +
                                    "&nbsp;<div id='trans_" + trans_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + trans_count + "'>" + trans_start_no + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='trans_question" + trans_count + "'contenteditable='true' data-placeholder='Question " + (trans_count + 1) + "' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;'>" + each_trans_mark + " mark</label></div></div></div>";
                                trans_count++;
                                trans_start_no++;
                            }
                        // } else {
                        //     alert("please enter the starting number")
                        // }
                    // }

                    // if ($("input[name='trans_type'][value='trans_Alphabets']").prop("checked")) {
                    //     document.getElementById("trans_getvalue").style.display = "block";
                    //     var numbering = 97;
                    //     for (i = 0; i < trans_questions; i++) {
                    //         var res = String.fromCharCode(numbering);
                    //         trans_container.innerHTML = trans_container.innerHTML +
                    //             "&nbsp;<div id='trans_" + trans_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + trans_count + "'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='trans_question" + trans_count + "'contenteditable='true' data-placeholder='Question " + res + "' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;'>" + each_trans_mark + " mark</label></div></div></div>";
                    //         trans_count++;
                    //         numbering++;
                    //     }
                    // }

                    // if ($("input[name='trans_type'][value='trans_Roman letters']").prop("checked")) {
                    //     document.getElementById("trans_getvalue").style.display = "block";
                    //     for (i = 0; i < trans_questions; i++) {
                    //         var res = integer_to_roman(i + 1)
                    //         trans_container.innerHTML = trans_container.innerHTML +
                    //             "&nbsp;<div id='trans_" + trans_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + trans_count + "'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='trans_question" + trans_count + "'contenteditable='true' data-placeholder='Question (" + res + ")' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;'>" + each_trans_mark + " mark</label></div></div></div>";
                    //         trans_count++;
                    //     }
                    // }
                }
                else {
                    alert("Please enter the number of questions");
                }
            // }
            // else {
            //     alert("Please select the numbering option");
            // }
        }
        else {
            alert("Please enter the heading");
        }
    } else {
        alert("Please enter the marks")
    }
}

function trans_getvalues() {
    var trans_question = [];
    var trans_ques = [];
    if (trans_heading != "") {
        if (trans_questions != 0) {
            for (i = 0; i < trans_count; i++) {
                trans_ques[i] = document.getElementById("trans_question" + i).textContent;
            }

            trans_ques = trans_ques.filter(function (e) { return e });
           
            if (count(trans_ques) == trans_questions) {
                // if ($("input[name='trans_type'][value='trans_Numbers']").prop("checked")) {
                    // var start_num = trans_st;
                    for (i = 0; i < trans_questions; i++) {
                        var inData = document.getElementById('trans_question' + i).textContent;
                        trans_question[i]= inData;
                        // start_num++;
                    }
                // }
                // if ($("input[name='trans_type'][value='trans_Roman letters']").prop("checked")) {
                //     for (i = 0; i < trans_questions; i++) {
                //         var roman = integer_to_roman(i + 1);
                //         var inData = document.getElementById('trans_question' + i).textContent;
                //         trans_question[i]= inData;
                //     }
                // }
                // if ($("input[name='trans_type'][value='trans_Alphabets']").prop("checked")) {
                //     var a = 97;
                //     for (i = 0; i < trans_questions; i++) {
                //         var alpha = String.fromCharCode(a);
                //         var inData = document.getElementById('trans_question' + i).textContent;
                //         trans_question[i] = inData;
                //         a++;
                //     }
                // }

                var partno = "";
                
                for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
                    console.log("retrived " + question_types[v]);
                    var partarr = question_types[v];
                    for (var h = 0; h < partarr.length; h++) {
                        if ("Translation" == partarr[h]) {
                            partno = v - s_sec;
                            break;
                        }
                    }
                }


                con_no = parseInt(trans_head_no) + 1;
                item_translation[trans_head_no] = {
                    "heading": trans_heading,
                    "type": "MCQN",
                    "marks": trans_marks,
                    "question": trans_question,
                    "quotedWords": null,
                    "quoteType": null,
                    "options": null
                }

                obj_translation = {
                    "user": reg_teacher,
                    "heading": trans_heading,
                    "type": "MCQN",
                    "marks": trans_marks,
                    "question": trans_question,
                    "quotedWords": null,
                    "quoteType": null,
                    "options": null
                }

                console.log(JSON.stringify(item_translation, null, '\t'))
                console.log(JSON.stringify(obj_translation, null, '\t'))
                // createTranslation(JSON.stringify(obj_translation, null, '\t'))
                alert("Translation question is saved successfully");
                document.getElementById('trans_getvalue').value = 'Saved!';

                if (item_translation != {}) {
                    if (part1.hasOwnProperty("part " + partno)) {
                        var temp_item = part1["part " + partno];
                        part1["part " + partno] = { ...temp_item, ...item_translation };
                    }
                    else {
                        part1["part " + partno] = item_translation;
                    }
                    item_translation = {};
                }

            } else {
                alert("Please enter all the questions")
            }
        }
        else {
            alert("Please enter the number of questions");
        }
    }
    else {
        alert("Please enter the heading");
    }
}

function trans_getResults(elem) {
    elem.checked && elem.value == "trans_Numbers" ? $("#trans_dvtext").show() : $("#trans_dvtext").hide();
};

function count(array) {
    var c = 0;
    for (i in array) // in returns key, not object
        if (array[i] != "")
            c++;

    return c;
}
