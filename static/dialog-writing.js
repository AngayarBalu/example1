var dialog_container = "";
var dialog_count = 0;
var dialog_ques = [];
var dialog_ans = [];
var dialog_opt = [];
var dialog_start_no = 0;
var dialog_st = 0;
var dialog_n = 0;
var dialog_heading = "";
var dialog_questions = 0;
var dialog_total_marks = 0;
var dialog_head_no = 0;
var each_dialog_mark = 0;
var dialog_num_question = 0;
var dialog_marks = 0;

function dialog_add_field() {
    if (dialog_n > 0) {
        $("#dialog_a").empty();
        dialog_count = 0;
    }
    dialog_n++;
    dialog_heading = document.getElementById("dialog_heading").value;
    dialog_questions = document.getElementById("dialog-questions").value;
    dialog_container = document.getElementById("dialog_a");
    dialog_total_marks = document.getElementById("dialog-marks").value;
    dialog_head_no = document.getElementById("dialog-heading-number").value;
    dialog_start_no = document.getElementById("dialog_starting-number").value;
    each_dialog_mark = printEachMark(dialog_heading, dialog_total_marks, dialog_questions)
    dialog_num_question = printNumQuestions(dialog_heading, dialog_questions)
    dialog_marks = dialog_num_question + " x " + each_dialog_mark + " = " + dialog_total_marks
    dialog_st = dialog_start_no;
    if (dialog_total_marks != 0) {
        if (dialog_heading != "") {
            if ($("input[name=dialog_type]").is(":checked")) {
                if (dialog_questions != 0) {
                    if ($("input[name='dialog_type'][value='dialog_Numbers']").prop("checked")) {
                        if (dialog_start_no != 0) {
                            document.getElementById("dialog_getvalue").style.display = "block";
                            for (i = 0; i < dialog_questions; i++) {
                                dialog_container.innerHTML = dialog_container.innerHTML +
                                    "&nbsp;<div id='dialog_" + dialog_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + dialog_count + "'>" + dialog_start_no + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='dialog_question" + dialog_count + "'contenteditable='true' data-placeholder='Question " + (dialog_count + 1) + "' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;'>" + each_dialog_mark + " mark</label></div></div></div>";
                                dialog_count++;
                                dialog_start_no++;
                            }
                        } else {
                            alert("please enter the starting number")
                        }
                    }

                    if ($("input[name='dialog_type'][value='dialog_Alphabets']").prop("checked")) {
                        document.getElementById("dialog_getvalue").style.display = "block";
                        var numbering = 97;
                        for (i = 0; i < dialog_questions; i++) {
                            var res = String.fromCharCode(numbering);
                            dialog_container.innerHTML = dialog_container.innerHTML +
                                "&nbsp;<div id='dialog_" + dialog_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + dialog_count + "'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='dialog_question" + dialog_count + "'contenteditable='true' data-placeholder='Question " + res + "' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;'>" + each_dialog_mark + " mark</label></div></div></div>";
                            dialog_count++;
                            numbering++;
                        }
                    }

                    if ($("input[name='dialog_type'][value='dialog_Roman letters']").prop("checked")) {
                        document.getElementById("dialog_getvalue").style.display = "block";
                        for (i = 0; i < dialog_questions; i++) {
                            var res = integer_to_roman(i + 1)
                            dialog_container.innerHTML = dialog_container.innerHTML +
                                "&nbsp;<div id='dialog_" + dialog_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + dialog_count + "'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='dialog_question" + dialog_count + "'contenteditable='true' data-placeholder='Question (" + res + ")' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;'>" + each_dialog_mark + " mark</label></div></div></div>";
                            dialog_count++;
                        }
                    }
                }
                else {
                    alert("Please enter the number of questions");
                }
            }
            else {
                alert("Please select the numbering option");
            }
        }
        else {
            alert("Please enter the heading");
        }
    } else {
        alert("Please enter the marks")
    }
}

function dialog_getvalues() {
    var dialog_question = {};
    if (dialog_heading != "") {
        if (dialog_questions != 0) {
            for (i = 0; i < dialog_count; i++) {
                dialog_ques[i] = document.getElementById("dialog_question" + i).textContent;
            }

            dialog_ques = dialog_ques.filter(function (e) { return e });
            if (dialog_ques.length == dialog_questions) {
                if ($("input[name='dialog_type'][value='dialog_Numbers']").prop("checked")) {
                    var start_num = dialog_st;
                    for (i = 0; i < dialog_questions; i++) {
                        var inData = document.getElementById('dialog_question' + i).textContent;
                        dialog_question[start_num] = { "question": inData, "type": "MCQN", "quotedWords": null, "quoteType": null, "options": null };
                        start_num++;
                    }
                }

                con_no = parseInt(dialog_head_no) + 1;
               
                if ($("input[name='dialog_type'][value='dialog_Roman letters']").prop("checked")) {
                    for (i = 0; i < dialog_questions; i++) {
                        var roman = integer_to_roman(i + 1);
                        var inData = document.getElementById('dialog_question' + i).textContent;
                        dialog_question[roman] = { "question": inData, "type": "MCQN", "quotedWords": null, "quoteType": null, "options": null };
                    }
                }
                if ($("input[name='dialog_type'][value='dialog_Alphabets']").prop("checked")) {
                    var a = 97;
                    for (i = 0; i < dialog_questions; i++) {
                        var alpha = String.fromCharCode(a);
                        var inData = document.getElementById('dialog_question' + i).textContent;
                        dialog_question[alpha] = { "question": inData, "type": "MCQN", "quotedWords": null, "quoteType": null, "options": null };
                        a++;
                    }
                }

                var partno = "";
                
                for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
                    console.log("retrived " + question_types[v]);
                    var partarr = question_types[v];
                    for (var h = 0; h < partarr.length; h++) {
                        if ("Dialogue writing" == partarr[h]) {
                            partno = v - s_sec;
                            break;
                        }
                    }
                }



                item_dialog_ques[dialog_head_no] = {
                    "heading": dialog_heading,
                    "marks": dialog_marks,
                    "type": "COMP",
                    "questions": dialog_question,
                    "quotedWords": null,
                    "quoteType": null,
                    "options": null
                }
                // for (let key in dialog_question) {
                //     item_dialog_ques[dialog_head_no][key] = dialog_question[key]
                // }

                obj_dialog_ques = {
                    "user": reg_teacher,
                    "heading": dialog_heading,
                    "marks": dialog_marks,
                    "type": "COMP",
                    "questions": dialog_question,
                    "quotedWords": null,
                    "quoteType": null,
                    "options": null
                }
                // for (let key in dialog_question) {
                //     obj_dialog_ques[key] = dialog_question[key]
                // }

                console.log(JSON.stringify(item_dialog_ques, null, '\t'))
                console.log(JSON.stringify(obj_dialog_ques, null, '\t'))
                // createDialogWriting(JSON.stringify(obj_dialog_ques, null, '\t'))
                alert("Dialog writing is saved successfully");
                document.getElementById('dialog_getvalue').value='Saved!';
                
                if (item_dialog_ques != {}) {
                    if (part1.hasOwnProperty("part " + partno)) {
                        var temp_item = part1["part " + partno];
                        
                        part1["part " + partno] = { ...temp_item, ...item_dialog_ques };
                    }
                    else {
                       
                        part1["part " + partno] = item_dialog_ques;
                    }
                    item_dialog_ques = {};
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

function dialog_getResults(elem) {
    elem.checked && elem.value == "dialog_Numbers" ? $("#dialog_dvtext").show() : $("#dialog_dvtext").hide();
};
