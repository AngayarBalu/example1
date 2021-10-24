var choose_counter = 1;
var choose_no_of_questions = 0;
var choose_total_marks = 0;
var choose_res = "";
var choose_numbering = 97;
var choose_head = "";
var choose_st = 0;
var choose_start_no = 0;
var choose_ques_no = 0;
var choose_headings = [];
var choose_ques = [];
var choose_option = [];
var choose_count_opt = [];
var choose_cnt = 1;
var choose_each_mark = 0;
var choose_no_option = 0;

var choose_checkBox = "";
var choose_choice = 0;
var choose_opt = 0;
var choose_val = 0;
var choose_num = 1;
var choose_num_of_ques = 0;

$(document).ready(function () {
    $(document).on('click','#choose-addButton',function () {
        if (choose_num > 1) {
            $("#choose-a").empty();
            choose_counter = 1;
        }
        choose_num++;
        $("#choose-a").append("<br><br>");
        choose_no_of_questions = $("#choose-number-of-questions").val();
        choose_opt = 0;
        choose_total_marks = $("#choose-marks").val();
        choose_ques_no = $("#choose-question-number").val();
        choose_head = $("#choose-heading").val();
        choose_start_no = $("#choose-starting-number").val();
        choose_st = choose_start_no;
        if (choose_no_of_questions != 0 && choose_total_marks != 0 && choose_head != "" && $("input[name=choose-type]").is(":checked")) {
            choose_each_mark = printEachMark(choose_head, choose_total_marks, choose_no_of_questions)
            choose_num_of_ques = printNumQuestions(choose_head, choose_no_of_questions)
            if ($("input[name='choose-type'][value='choose-Alphabets']").prop("checked")) {
                alert(choose_no_of_questions)
                var c1 = 97;
                for (i = 0; i < choose_no_of_questions; i++) {
                    var res = String.fromCharCode(c1);
                    alert(res)
                    $("#choose-a").append('&nbsp;<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + res + '. </label></div>' + '<div class="col-sm-10"><div class="form-control" style="height:50px; " name="choose-question' + choose_counter + '" id="choose-question' + choose_counter + '" class="form-control mt-2 mt-md-0" contenteditable="true" data-placeholder="Question" cols="200" rows="100"></div></div><div class="col-sm-1"><label style="font-weight:bold;" id="eachmark' + choose_counter + '">' + choose_each_mark + ' mark</label></div></div>');
                    $("#choose-a").append('<div class="row"><div class="col-sm-1"><label></label></div>' + '<div class="col-sm-2"><input type="checkbox" id="choose-myCheck' + choose_counter + '" class = "example" name="MCQ" value="MCQ" onclick="choose_Function(' + choose_counter + ')"><label>MCQ</label></div></div><div id="choose-Check' + choose_counter + '"></div>');
                    c1++;
                    choose_counter++;
                }
            }

            else if ($("input[name='choose-type'][value='choose-Numbers']").prop("checked")) {
                alert(choose_no_of_questions)
                for (i = 0; i < choose_no_of_questions; i++) {
                    alert(choose_start_no)
                    if (choose_start_no != 0) {
                        alert("number")
                        $("#choose-a").append('&nbsp;<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + choose_start_no + '. </label></div>' + '<div class="col-sm-10"><div class="form-control" style="height:50px; " name="choose-question' + choose_counter + '" id="choose-question' + choose_counter + '" class="form-control mt-2 mt-md-0" contenteditable="true" data-placeholder="Question" cols="200" rows="100"></div></div><div class="col-sm-1"><label style="font-weight:bold;" id="eachmark' + choose_counter + '">' + choose_each_mark + ' mark</label></div></div>');
                        $("#choose-a").append('<div class="row"><div class="col-sm-1"><label></label></div>' + '<div class="col-sm-2"><input type="checkbox" id="choose-myCheck' + choose_counter + '" class = "example" name="MCQ" value="MCQ" onclick="choose_Function(' + choose_counter + ')"><label>MCQ</label></div></div><div id="choose-Check' + choose_counter + '"></div>');
                        choose_start_no++;
                        choose_counter++;
                    }
                }
            }

            else if ($("input[name='choose-type'][value='choose-Roman letters']").prop("checked")) {
                alert(choose_no_of_questions)
                for (i = 0; i < choose_no_of_questions; i++) {
                    var res = integer_to_roman(i + 1);
                    alert(res)
                    $("#choose-a").append('&nbsp;<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + res + ' .</label></div>' + '<div class="col-sm-10"><div class="form-control" style="height:50px; " name="choose-question' + choose_counter + '" id="choose-question' + choose_counter + '" class="form-control mt-2 mt-md-0" contenteditable="true" data-placeholder="Question" cols="200" rows="100"></div></div><div class="col-sm-1"><label style="font-weight:bold;" id="eachmark' + choose_counter + '">' + choose_each_mark + ' mark</label></div></div>');
                    $("#choose-a").append('<div class="row"><div class="col-sm-1"><label></label></div>' + '<div class="col-sm-2"><input type="checkbox" id="choose-myCheck' + choose_counter + '" class = "example" name="MCQ" value="MCQ" onclick="choose_Function(' + choose_counter + ')"><label>MCQ</label></div></div><div id="choose-Check' + choose_counter + '"></div>');
                    choose_counter++;
                }
            }
            $("#choose-a").append("<br>");

            if ($("input[name='choose-type'][value='choose-Alphabets']").prop("checked")) {
                $("#choose-a").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="choose-getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
            }

            else if ($("input[name='choose-type'][value='choose-Numbers']").prop("checked")) {
                if (choose_start_no != 0) {
                    $("#choose-a").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="choose-getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
                }
                else {
                    alert("Please enter the starting number");
                }
            }

            else if ($("input[name='choose-type'][value='choose-Roman letters']").prop("checked")) {
                $("#choose-a").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="choose-getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
            }
        }

        else {
            alert("Please enter all the fields");
        }

    });


    $(document).on('click', "#choose-getButtonValue", function () {

        for (i = 1; i <= choose_no_of_questions; i++) {
            choose_headings[i - 1] = $('#choose-eachHeading' + i).val();
            if (choose_headings[i - 1] == "") {
                //alert("Please enter all the headings");
                break;
            }
            else {
                console.log("Headings : " + choose_headings[i - 1]);
            }
        }

        for (i = 1; i <= choose_no_of_questions; i++) {
            choose_ques[i - 1] = $('#choose-question' + i).text();
            if (choose_ques[i - 1] == "") {
                alert("Please enter all the questions");
                break;
            }
            else {
                console.log("Questions : " + choose_ques[i - 1]);
            }
        }

        choose_count_opt = [];
        choose_val = 0;
        choose_choice = 0;
        for (j = 0; j < choose_no_of_questions; j++) {
            if (choose_checkBox.checked == true) {
                choose_count_opt[j] = $('#choose-noofoption' + (j + 1)).val();
                if (choose_count_opt[j] == 0) {
                    alert("Please enter number of options");
                    break;
                }
                else {
                    for (i = 0; i < choose_count_opt[j]; i++) {
                        choose_option[choose_choice] = ($('#choose-options' + choose_choice).val());
                    }
                }
            }
        }

        var choose_ch = 0;
        var choose_ques_arr = [];
        var choose_questions = {};
        var choose_opt_obj = [];
        var choose_options = {};
        var choose_opt_arr = [];
        var choose_paragraph = {};
        var choose_cnnt = 0;
        choose_ques_obj = {};
        if ($("input[name='choose-type'][value='choose-Numbers']").prop("checked")) {
            var choose_start_num = choose_st;
            choose_cnnt = 0;
            choose_ch = 0;
            choose_count_opt = [];
            choose_opt_arr = [];
            for (i = 1; i <= choose_no_of_questions; i++) {
                $("#choose-question" + i).each(function () {
                    var choose_inData = $(this).text();
                    if (choose_inData != "") {
                        choose_ques_arr.push(choose_inData);
                    }
                    choose_checkBox = document.getElementById("choose-myCheck" + i);
                    if (choose_checkBox.checked == true) {
                        choose_count_opt[i] = parseInt($('#choose-noofoption' + i).val());
                        choose_cnnt += choose_count_opt[i];

                        for (j = 0; j < choose_count_opt[i]; j++) {
                            choose_option[choose_ch] = $('#choose-options' + choose_ch).val();

                            if (choose_option[choose_ch] == 0) {
                                alert("Please enter the option which you selected");
                                break;
                            }
                            else {
                                console.log("Options : " + choose_option[choose_ch]);
                                choose_opt_obj.push(choose_option[choose_ch]);
                                choose_opt_arr.push(choose_option[choose_ch]);
                                choose_ch++;
                            }
                        }
                        choose_questions[choose_start_num] = { "heading": null, "question": choose_inData, "type": "MCQSL", "quotedWords": null, "quoteType": null, "options": choose_opt_obj };
                        choose_opt_obj = [];
                    }
                    else {
                        choose_questions[choose_start_num] = { "heading": null, "question": choose_inData, "type": "MCQN", "quotedWords": null, "quoteType": null, "options": null };
                    }
                });
                choose_start_num++;
            }
        }

        if (choose_ques_no != 0) {
            con_no = parseInt(choose_ques_no) + 1;
        }
        else {
            con_no = choose_start_num;
        }
        if ($("input[name='choose-type'][value='choose-Roman letters']").prop("checked")) {
            var choose_r = 1;
            choose_cnnt = 0;
            choose_ch = 0;
            choose_count_opt = [];
            choose_opt_arr = [];
            for (i = 1; i <= choose_no_of_questions; i++) {
                var choose_roman = integer_to_roman(choose_r);
                choose_r++;
                $("#choose-question" + i).each(function () {
                    var choose_inData = $(this).text();
                    if (choose_inData != "") {
                        choose_ques_arr.push(choose_inData);
                    }
                    choose_checkBox = document.getElementById("choose-myCheck" + i);
                    if (choose_checkBox.checked == true) {
                        choose_count_opt[i] = parseInt($('#choose-noofoption' + i).val());
                        choose_cnnt += choose_count_opt[i];

                        for (j = 0; j < choose_count_opt[i]; j++) {
                            choose_option[choose_ch] = $('#choose-options' + choose_ch).val();

                            if (choose_option[choose_ch] == 0) {
                                alert("Please enter the option which you selected");
                                break;
                            }
                            else {
                                console.log("Options : " + choose_option[choose_ch]);
                                choose_opt_obj.push(choose_option[choose_ch]);
                                choose_opt_arr.push(choose_option[choose_ch]);
                                choose_ch++;
                            }
                        }
                        choose_questions[choose_roman] = { "heading": null, "question": choose_inData, "type": "MCQSL", "quotedWords": null, "quoteType": null, "options": choose_opt_obj };
                        choose_opt_obj = [];
                    }
                    else {
                        choose_questions[choose_roman] = { "heading": null, "question": choose_inData, "type": "MCQN", "quotedWords": null, "quoteType": null, "options": null };
                    }
                });
            }
        }

        if ($("input[name='choose-type'][value='choose-Alphabets']").prop("checked")) {
            var choose_character = 97;
            choose_cnnt = 0;
            choose_ch = 0;
            choose_count_opt = [];
            choose_opt_arr = [];
            for (i = 1; i <= choose_no_of_questions; i++) {
                var choose_alpha = String.fromCharCode(choose_character);
                $("#choose-question" + i).each(function () {
                    var choose_inData = $(this).text();
                    if (choose_inData != "") {
                        choose_ques_arr.push(choose_inData);
                    }
                    choose_checkBox = document.getElementById("choose-myCheck" + i);
                    if (choose_checkBox.checked == true) {
                        choose_count_opt[i] = parseInt($('#choose-noofoption' + i).val());
                        choose_cnnt += choose_count_opt[i];
                        for (j = 0; j < choose_count_opt[i]; j++) {
                            choose_option[choose_ch] = $('#choose-options' + choose_ch).val();

                            if (choose_option[choose_ch] == 0) {
                                alert("Please enter the option which you selected");
                                break;
                            }
                            else {
                                console.log("Options : " + choose_option[choose_ch]);
                                choose_opt_obj.push(choose_option[choose_ch]);
                                choose_opt_arr.push(choose_option[choose_ch]);
                                choose_ch++;
                            }
                        }
                        choose_questions[choose_alpha] = { "heading": null, "question": choose_inData, "type": "MCQSL", "quotedWords": null, "quoteType": null, "options": choose_opt_obj };
                        choose_opt_obj = [];
                    }
                    else {
                        choose_questions[choose_alpha] = { "heading": null, "question": choose_inData, "type": "MCQN", "quotedWords": null, "quoteType": null, "options": null };
                    }
                });
                choose_character += 1;
            }
        }

        var partno = "";
        for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
            console.log("retrived " + question_types[v]);
            var partarr = question_types[v];
            for (var h = 0; h < partarr.length; h++) {
                if ("Choose the correct answer" == partarr[h]) {
                    partno = v - s_sec;
                    break;
                }
            }
        }

        var choose_mark = choose_num_of_ques + " x " + choose_each_mark + " = " + choose_total_marks;
        item_choose[choose_ques_no] = {
            "heading": choose_head,
            "type": "COMP",
            "marks": choose_mark,
            "questions": choose_questions,
            "quotedWords": null,
            "quoteType": null,
            "options": null
        };

        obj_choose = {
            "user": reg_teacher,
            "heading": choose_head,
            "type": "COMP",
            "marks": choose_mark,
            "questions": choose_questions,
            "quotedWords": null,
            "quoteType": null,
            "options": null
        };

        // for (let key in choose_questions) {
        //     item_choose[choose_ques_no][key] = choose_questions[key];
        // }

        // for (let key in choose_questions) {
        //     obj_choose[key] = choose_questions[key];
        // }

        if (choose_ques_arr.length == choose_no_of_questions) {

            var arraySet = new Set(choose_opt_arr)
            if (arraySet.has("")) {
            }
            else {
                if (choose_opt_arr.length == choose_cnnt) {
                    console.log(JSON.stringify(item_choose, null, '\t'));
                    console.log(JSON.stringify(obj_choose, null, '\t'));
                    createChooseCorrectAnswer(JSON.stringify(obj_choose, null, '\t'));
                    alert("Choose the correct answers is saved successfully")
                    document.getElementById('choose-getButtonValue').value = "Saved!";
                    if (item_choose != {}) {
                        if (part1.hasOwnProperty("part " + partno)) {
                            var temp_item = part1["part " + partno];
                            part1["part " + partno] = { ...temp_item, ...item_choose };
                        }
                        else {
                            part1["part " + partno] = item_choose;
                        }
                        item_choose = {};
                    }
                }
            }

        }
    });
});

function ArrayToObject(arr) {
    var obj = {};
    for (var i = 1; i <= arr.length; i++) {
        obj[i] = arr[i - 1];
    }
    return obj
}

function choose_Function(choose_counter) {
    choose_checkBox = document.getElementById('choose-myCheck' + choose_counter);
    if (choose_checkBox.checked == true) {
        var table = document.getElementById("choose-Check" + choose_counter);
        table.innerHTML += '<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="text" min="0" name="total_mark" id="choose-noofoption' + choose_counter + '" class="form-control" placeholder="No of Options"></div>&nbsp;<div class="col-sm-2"><input type="button" value="Create Options" class="btn btn-primary" id="choose-addOption' + choose_counter + '" onclick="choose_addOption(' + choose_counter + ')"></div></div><div id="choose-option' + choose_counter + '"></div><br>';

    } else {
        var table = document.getElementById("choose-Check" + choose_counter);
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }

    }
}

function choose_addOption(choose_counter) {
    choose_no_option = document.getElementById("choose-noofoption" + choose_counter).value;
    choose_numbering = 97;
    if (choose_no_option != 0) {
        for (i = 0; i < choose_no_option; i++) {
            var res = String.fromCharCode(choose_numbering);
            var table = document.getElementById("choose-option" + choose_counter);
            if (i == 0) {
                table.innerHTML += '<br><br>';
            }
            table.innerHTML += '<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-3"><input type="text" min="0" name="total_mark" id="choose-options' + choose_opt + '" class="form-control" placeholder="Option - ' + res + '"></div></div>&nbsp;';
            choose_numbering++;
            choose_opt++;
        }
    }
    else {
        alert("enter all options");
    }
}

function choose_getResults(elem) {
    elem.checked && elem.value == "choose-Numbers" ? $("#choose_dvtext").show() : $("#choose_dvtext").hide();
}

