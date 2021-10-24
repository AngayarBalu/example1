var dialog_fill_container = "";
var dialog_fill_count = 0;
var dialog_fill_ques = [];
var dialog_fill_ans = [];
var dialog_fill_opt = [];
var dialog_fill_start_no = 0;
var dialog_fill_st = 0;
var dialog_fill_n = 0;
var dialog_fill_heading = "";
var dialog_fill_questions = 0;
var dialog_fill_total_marks = 0;
var dialog_fill_head_no = 0;
var each_dialog_fill_mark = 0;
var dialog_fill_num_question = 0;
var dialog_fill_marks = 0;
function dialog_fill_add_field() {
    if (dialog_fill_n > 0) {
        $("#dialog_fill_a").empty();
        dialog_fill_count = 0;
    }
    dialog_fill_n++;
    dialog_fill_heading = document.getElementById("dialog_fill_heading").value;
    dialog_fill_questions = document.getElementById("dialog_fill-questions").value;
    dialog_fill_container = document.getElementById("dialog_fill_a");
    dialog_fill_total_marks = document.getElementById("dialog_fill-marks").value;
    dialog_fill_head_no = document.getElementById("dialog_fill-heading-number").value;
    dialog_fill_start_no = document.getElementById("dialog_fill_starting-number").value;
    dialog_fill_st = dialog_fill_start_no;
    if (dialog_fill_total_marks != 0) {
        if (dialog_fill_heading != "") {
            if ($("input[name=dialog_fill_type]").is(":checked")) {
                if (dialog_fill_questions != 0) {
                    if ($("input[name='dialog_fill_type'][value='dialog_fill_Numbers']").prop("checked")) {
                        document.getElementById("dialog_fill_getvalue").style.display = "block";
                        for (i = 0; i < dialog_fill_questions; i++) {
                            dialog_fill_container.innerHTML = dialog_fill_container.innerHTML +
                                "&nbsp;<div id='dialog_fill_" + dialog_fill_count + "'><div class='row'><div class = 'col-sm-1'><label id='questionLabel" + dialog_fill_count + "'>" + dialog_fill_start_no + " .</label></div><div class = 'col-sm-11'><div style='height:40px;' class='form-control input_text' id='dialog_fill_question" + dialog_fill_count + "'contenteditable='true' data-placeholder='Line " + (dialog_fill_count + 1) + "' ></div></div></div></div>";
                            dialog_fill_count++;
                            dialog_fill_start_no++;
                        }
                    }

                    if ($("input[name='dialog_fill_type'][value='dialog_fill_Alphabets']").prop("checked")) {
                        document.getElementById("dialog_fill_getvalue").style.display = "block";
                        var numbering = 97;
                        for (i = 0; i < dialog_fill_questions; i++) {
                            var res = String.fromCharCode(numbering);
                            dialog_fill_container.innerHTML = dialog_fill_container.innerHTML +
                                "&nbsp;<div id='dialog_fill_" + dialog_fill_count + "'><div class='row'><div class = 'col-sm-1'><label id='questionLabel" + dialog_fill_count + "'>" + res + " .</label></div><div class = 'col-sm-11'><div style='height:40px;' class='form-control input_text' id='dialog_fill_question" + dialog_fill_count + "'contenteditable='true' data-placeholder='Line " + res + "' ></div></div></div></div>";
                            dialog_fill_count++;
                            numbering++;
                        }
                    }

                    if ($("input[name='dialog_fill_type'][value='dialog_fill_Roman letters']").prop("checked")) {
                        document.getElementById("dialog_fill_getvalue").style.display = "block";
                        for (i = 0; i < dialog_fill_questions; i++) {
                            var res = integer_to_roman(i + 1)
                            dialog_fill_container.innerHTML = dialog_fill_container.innerHTML +
                                "&nbsp;<div id='dialog_fill_" + dialog_fill_count + "'><div class='row'><div class = 'col-sm-1'><label id='questionLabel" + dialog_fill_count + "'>" + res + " .</label></div><div class = 'col-sm-11'><div style='height:40px;' class='form-control input_text' id='dialog_fill_question" + dialog_fill_count + "'contenteditable='true' data-placeholder='Line (" + res + ")' ></div></div></div></div>";
                            dialog_fill_count++;
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

function dialog_fill_getvalues() {
    var dialog_fill_question = {};
    if (dialog_fill_heading != "") {
        if (dialog_fill_questions != 0) {
            for (i = 0; i < dialog_fill_count; i++) {
                dialog_fill_ques[i] = document.getElementById("dialog_fill_question" + i).textContent;
            }

            dialog_fill_ques = dialog_fill_ques.filter(function (e) { return e });
            if (dialog_fill_ques.length == dialog_fill_questions) {

                each_dialog_fill_mark = printEachMark(dialog_fill_heading, dialog_fill_total_marks, 1)
                
                dialog_fill_num_question = printNumQuestions(dialog_fill_heading, 1)
                dialog_fill_marks = dialog_fill_num_question + " x " + each_dialog_fill_mark + " = " + dialog_fill_total_marks
                if ($("input[name='dialog_fill_type'][value='dialog_fill_Numbers']").prop("checked")) {
                    var start_num = dialog_fill_st;
                    for (i = 0; i < dialog_fill_questions; i++) {
                        var inData = document.getElementById('dialog_fill_question' + i).textContent;
                        dialog_fill_question[start_num] = inData;
                        start_num++;
                    }
                }

                if (dialog_head_no != 0) {
                    con_no = parseInt(choose_ques_no) + 1;
                }
                else {
                    con_no = start_num;
                }

                if ($("input[name='dialog_fill_type'][value='dialog_fill_Roman letters']").prop("checked")) {
                    for (i = 0; i < dialog_fill_questions; i++) {
                        var roman = integer_to_roman(i + 1);
                        var inData = document.getElementById('dialog_fill_question' + i).textContent;
                        dialog_fill_question[roman] = inData;
                    }
                }
                if ($("input[name='dialog_fill_type'][value='dialog_fill_Alphabets']").prop("checked")) {
                    var a = 97;
                    for (i = 0; i < dialog_fill_questions; i++) {
                        var alpha = String.fromCharCode(a);
                        var inData = document.getElementById('dialog_fill_question' + i).textContent;
                        dialog_fill_question[alpha] = inData;
                        a++;
                    }
                }

                var partno = "";
                
                for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
                    console.log("retrived " + question_types[v]);
                    var partarr = question_types[v];
                    for (var h = 0; h < partarr.length; h++) {
                        if ("Dialogue writing (Fill in the blanks)" == partarr[h]) {
                            partno = v - s_sec;
                            break;
                        }
                    }
                }


                item_dialog_fill[dialog_fill_head_no] = {
                    "heading": dialog_fill_heading,
                    "marks": dialog_fill_marks,
                    "type": "COMP",
                    "question": dialog_fill_question,
                    "quotedWords": null,
                    "quoteType": null,
                    "options": null
                }
                obj_dialog_fill = {
                    "user": reg_teacher,
                    "heading": dialog_fill_heading,
                    "marks": dialog_fill_marks,
                    "type": "COMP",
                    "question": dialog_fill_question,
                    "quotedWords": null,
                    "quoteType": null,
                    "options": null
                }
                console.log(JSON.stringify(item_dialog_fill, null, '\t'))
                console.log(JSON.stringify(obj_dialog_fill, null, '\t'))
                createDialogWritingFill(JSON.stringify(obj_dialog_fill, null, '\t'))
                alert("Dialog writing (fill in the blanks) is saved successfully");
                document.getElementById('dialog_fill_getvalue').value='Saved!';

                if (item_dialog_fill != {}) {
                    if (part1.hasOwnProperty("part " + partno)) {
                        var temp_item = part1["part " + partno];
                        part1["part " + partno] = { ...temp_item, ...item_dialog_fill };
                        
                    }
                    else {
                        part1["part " + partno] = item_dialog_fill;
                        
                    }
                    item_dialog_fill = {};
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

function dialog_fill_getResults(elem) {
    elem.checked && elem.value == "dialog_fill_Numbers" ? $("#dialog_fill_dvtext").show() : $("#dialog_fill_dvtext").hide();
};