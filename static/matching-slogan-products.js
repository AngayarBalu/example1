var match1_container = "";
var match1_count = 0;
var match1_ques = [];
var match1_ans = [];
var match1_opt = [];
var match1_start_no = 0;
var match1_st = 0;
var match1_n = 0;
var match1_heading = "";
var match1_questions = 0;
var match1_options = 0;
var match1_total_marks = 0;
var match1_head_no = 0;
var each_match1_mark = 0;
var match1_num_question = 0;
var match1_marks = 0;
function match1_add_field() {
    if (match1_n > 0) {
        $("#match1_a").empty();
        match1_count = 0;
    }
    match1_n++;
    match1_heading = document.getElementById("match1_heading").value;
    match1_questions = document.getElementById("match1-questions").value;
    match1_options = document.getElementById("match1-options").value;
    match1_container = document.getElementById("match1_a");
    match1_total_marks = document.getElementById("match1-marks").value;
    match1_head_no = document.getElementById("match1-heading-number").value;
    match1_start_no = document.getElementById("match1_starting-number").value;
    each_match1_mark = printEachMark(match1_heading, match1_total_marks, match1_questions)
    match1_num_question = printNumQuestions(match1_heading, match1_questions)
    match1_marks = match1_num_question + " x " + each_match1_mark + " = " + match1_total_marks
    match1_st = match1_start_no;
    if (match1_total_marks != 0) {
        if (match1_heading != "") {
            if ($("input[name=match1_type]").is(":checked")) {
                if (match1_questions != 0) {
                    if (match1_options != 0) {
                        if (match1_questions <= match1_options) {
                            if ($("input[name='match1_type'][value='match1_Numbers']").prop("checked")) {
                                if (match1_start_no != 0) {
                                    document.getElementById("match1_getvalue").style.display = "block";
                                    var numbering = 97;
                                    for (i = 0; i < match1_options; i++) {
                                        var res = String.fromCharCode(numbering);
                                        match1_container.innerHTML = match1_container.innerHTML +
                                            "&nbsp;<div id='match1_" + match1_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='match1_questionLabel" + match1_count + "' style='display:none;'>" + match1_start_no + " .</label></div><div class = 'col-sm-4'><div style='height:40px;display:none;overflow:auto;' class='form-control input_text' id='match1_question" + match1_count + "'contenteditable='true' data-placeholder='Question " + (match1_count + 1) + "' ></div></div><div class='col-sm-1'><label id='match1_optionLabel" + match1_count + "' style='display:none;'>-</label></div><div class='col-sm-5'><div style='height:40px;display:none;overflow:auto;' class='form-control input_text' id='match1_option" + match1_count + "'contenteditable='true' data-placeholder='Option - " + res + "' ></div></div><div class = 'col-sm-1'><label id='match1_eachmark" + match1_count + "' style='display:none;font-weight:bold;'>" + each_match1_mark + " mark</label></div>&nbsp;</div></div>";
                                        match1_count++;
                                        match1_start_no++;
                                        numbering++;
                                    }
                                } else {
                                    alert("Please enter the starting number")
                                }
                            }

                            if ($("input[name='match1_type'][value='match1_Alphabets']").prop("checked")) {
                                document.getElementById("match1_getvalue").style.display = "block";
                                var numbering = 97;
                                for (i = 0; i < match1_options; i++) {
                                    var res = String.fromCharCode(numbering);
                                    match1_container.innerHTML = match1_container.innerHTML +
                                        "&nbsp;<div id='match1_" + match1_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='match1_questionLabel" + match1_count + "' style='display:none;'>" + res + " .</label></div><div class = 'col-sm-4'><div style='height:40px;display:none;overflow:auto;' class='form-control input_text' id='match1_question" + match1_count + "'contenteditable='true' data-placeholder='Question " + (match1_count + 1) + "' ></div></div><div class='col-sm-1'><label id='match1_optionLabel" + match1_count + "' style='display:none;'>-</label></div><div class='col-sm-5'><div style='height:40px;display:none;overflow:auto;' class='form-control input_text' id='match1_option" + match1_count + "'contenteditable='true' data-placeholder='Option - " + res + "' ></div></div><div class = 'col-sm-1'><label id='match1_eachmark" + match1_count + "' style='display:none;font-weight:bold;'>" + each_match1_mark + " mark</label></div>&nbsp;</div></div>";
                                    match1_count++;
                                    numbering++;
                                }
                            }

                            if ($("input[name='match1_type'][value='match1_Roman letters']").prop("checked")) {
                                document.getElementById("match1_getvalue").style.display = "block";
                                var roman = 1;
                                var numbering = 97;
                                for (i = 0; i < match1_options; i++) {
                                    var res = String.fromCharCode(numbering);
                                    var res2 = integer_to_roman(roman);
                                    match1_container.innerHTML = match1_container.innerHTML +
                                        "&nbsp;<div id='match1_" + match1_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='match1_questionLabel" + match1_count + "' style='display:none;'>" + res2 + " .</label></div><div class = 'col-sm-4'><div style='height:40px;display:none;overflow:auto;' class='form-control input_text' id='match1_question" + match1_count + "'contenteditable='true' data-placeholder='Question " + (match1_count + 1) + "' ></div></div><div class='col-sm-1'><label id='match1_optionLabel" + match1_count + "' style='display:none;'>-</label></div><div class='col-sm-5'><div style='height:40px;display:none;overflow:auto;' class='form-control input_text' id='match1_option" + match1_count + "'contenteditable='true' data-placeholder='Option - " + res + "' ></div></div><div class = 'col-sm-1'><label id='match1_eachmark" + match1_count + "' style='display:none;font-weight:bold;'>" + each_match1_mark + " mark</label></div>&nbsp;</div></div>";
                                    match1_count++;
                                    roman++;
                                    numbering++;
                                }
                            }


                            for (j = 0; j < match1_questions; j++) {
                                document.getElementById("match1_questionLabel" + j).style.display = 'block';
                                document.getElementById("match1_question" + j).style.display = 'block';
                                document.getElementById("match1_eachmark" + j).style.display = 'block';
                            }
                            for (j = 0; j < match1_options; j++) {
                                document.getElementById("match1_optionLabel" + j).style.display = 'block';
                                document.getElementById("match1_option" + j).style.display = 'block';
                            }
                        } else {
                            alert("No. of options should be greater than or equal to no. of questions")
                        }
                    }
                    else {
                        alert("Please enter the number of options")
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

function match1_getvalues() {
    var match1_question = {};
    var match1_option = {};
    if (match1_total_marks != 0) {
        if (match1_heading != "") {
            if (match1_questions != 0) {
                if (match1_options != 0) {
                    if (match1_questions <= match1_options) {
                        for (i = 0; i < match1_count; i++) {
                            match1_ques[i] = document.getElementById("match1_question" + i).textContent;
                            match1_opt[i] = document.getElementById("match1_option" + i).textContent;
                        }

                        match1_ques = match1_ques.filter(function (e) { return e });
                        if (match1_ques.length == match1_questions) {
                            if (match1_opt.length == match1_options) {
                                var arraySet = new Set(match1_opt);
                                if (arraySet.has("")) {
                                    alert("Please enter all the options")
                                } else {
                                    if ($("input[name='match1_type'][value='match1_Numbers']").prop("checked")) {
                                        var start_num = match1_st;
                                        for (i = 0; i < match1_questions; i++) {
                                            var inData = document.getElementById('match1_question' + i).textContent;
                                            match1_question[start_num] = inData;
                                            start_num++;
                                        }
                                    }

                                    if ($("input[name='match1_type'][value='match1_Roman letters']").prop("checked")) {
                                        for (i = 0; i < match1_questions; i++) {
                                            var roman = integer_to_roman(i + 1);
                                            var inData = document.getElementById('match1_question' + i).textContent;
                                            match1_question[roman] = inData;
                                        }
                                    }
                                    if ($("input[name='match1_type'][value='match1_Alphabets']").prop("checked")) {
                                        var a = 97;
                                        for (i = 0; i < match1_questions; i++) {
                                            var alpha = String.fromCharCode(a);
                                            var inData = document.getElementById('match1_question' + i).textContent;
                                            match1_question[alpha] = inData;
                                            a++;
                                        }
                                    }

                                    var a = 97;
                                    for (i = 0; i < match1_options; i++) {
                                        var alpha = String.fromCharCode(a);
                                        var inData = document.getElementById('match1_option' + i).textContent;
                                        match1_option[alpha] = inData;
                                        a++;
                                    }

                                    var partno = "";

                                    for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
                                        console.log("retrived " + question_types[v]);
                                        var partarr = question_types[v];
                                        for (var h = 0; h < partarr.length; h++) {
                                            if ("Match the following products and slogans appropriately" == partarr[h]) {
                                                partno = v - s_sec;
                                                break;
                                            }
                                        }
                                    }
                    
                                    con_no = parseInt(match1_head_no) + 1;

                                    item_match1[match1_head_no] = {
                                        "heading": match1_heading,
                                        "marks": match1_marks,
                                        "type": "MATCH",
                                        "questions": match1_question,
                                        "quotedWords": null,
                                        "quoteType": null,
                                        "options": match1_option
                                    }

                                    obj_match1 = {
                                        "user": reg_teacher,
                                        "heading": match1_heading,
                                        "marks": match1_marks,
                                        "type": "MATCH",
                                        "questions": match1_question,
                                        "quotedWords": null,
                                        "quoteType": null,
                                        "options": match1_option
                                    }

                                    console.log(JSON.stringify(item_match1, null, '\t'))
                                    console.log(JSON.stringify(obj_match1, null, '\t'))
                                    createMatching_products_slogans(JSON.stringify(obj_match1, null, '\t'))
                                    alert("Match the following products and slogans appropriately is saved successfully");
                                    document.getElementById('match1_getvalue').value="Saved!";
                                    if (item_match1 != {}) {
                                        if (part1.hasOwnProperty("part " + partno)) {
                                            var temp_item = part1["part " + partno];
                                            part1["part " + partno] = { ...temp_item, ...item_match1 };
                                        }
                                        else {
                                            part1["part " + partno] = item_match1;
                                        }
                                        item_match1 = {};
                                    }
                                }
                            }
                        } else {
                            alert("Please enter all the questions")
                        }
                    } else {
                        alert("No. of options should be greater than or equal to no. of questions")
                    }
                }
                else {
                    alert("Please enter the number of options")
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
    else {
        alert("Please enter the marks")
    }
}

function match1_getResults(elem) {
    elem.checked && elem.value == "match1_Numbers" ? $("#match1_dvtext").show() : $("#match1_dvtext").hide();
};