var match_container = "";
var match_count = 0;
var match_ques = [];
var match_ans = [];
var match_opt = [];
var match_start_no = 0;
var match_st = 0;
var match_n = 0;
var match_heading = "";
var match_questions = 0;
var match_options = 0;
var match_total_marks = 0;
var match_head_no = 0;
var each_match_mark = 0;
var match_num_question = 0;
var match_marks = 0;

function match_getResults(elem) {
    elem.checked && elem.value == "match_Numbers" ? $("#match_dvtext").show() : $("#match_dvtext").hide();
};

function match_add_field() {
    if (match_n > 0) {
        $("#match_a").empty();
        match_count = 0;
    }
    match_n++;
    match_heading = document.getElementById("match_heading").value;
    match_questions = document.getElementById("match-questions").value;
    match_options = document.getElementById("match-options").value;
    match_container = document.getElementById("match_a");
    match_total_marks = document.getElementById("match-marks").value;
    match_head_no = document.getElementById("match-heading-number").value;
    match_start_no = document.getElementById("match_starting-number").value;
    match_st = match_start_no;
    each_match_mark = printEachMark(match_heading, match_total_marks, match_questions)
    match_num_question = printNumQuestions(match_heading, match_questions)
    match_marks = match_num_question + " x " + each_match_mark + " = " + match_total_marks

    if (match_total_marks != 0) {
        if (match_heading != "") {
            if ($("input[name=match_type]").is(":checked")) {
                if (match_questions != 0) {
                    if (match_options != 0) {
                        if (match_questions <= match_options) {
                            if ($("input[name='match_type'][value='match_Numbers']").prop("checked")) {
                                document.getElementById("match_getvalue").style.display = "block";
                                var numbering = 97;
                                if (match_start_no != 0) {
                                    for (i = 0; i < match_options; i++) {
                                        var res = String.fromCharCode(numbering);
                                        match_container.innerHTML = match_container.innerHTML +
                                            "&nbsp;<div id='match_" + match_count + "'><div class='row'><div class = 'col-sm-1'><label id='match_questionLabel" + match_count + "' style='display:none;font-weight:bold;'>" + match_start_no + " .</label></div><div class = 'col-sm-4'><div style='height:40px;display:none;overflow:auto;' class='form-control input_text' id='match_question" + match_count + "'contenteditable='true' data-placeholder='Question " + (match_count + 1) + "' ></div></div><div class='col-sm-1'><label id='match_optionLabel" + match_count + "' style='display:none;'>-</label></div><div class='col-sm-5'><div style='height:40px;display:none;overflow:auto;' class='form-control input_text' id='match_option" + match_count + "'contenteditable='true' data-placeholder='Option - " + res + "' ></div></div><div class = 'col-sm-1'><label id='match_eachmark" + match_count + "' style='display:none;font-weight:bold;'>" + each_match_mark + " mark</label></div>&nbsp;</div></div>";
                                        match_count++;
                                        match_start_no++;
                                        numbering++;
                                    }
                                } else {
                                    alert("Please enter the starting number")
                                }
                            }

                            if ($("input[name='match_type'][value='match_Alphabets']").prop("checked")) {
                                document.getElementById("match_getvalue").style.display = "block";
                                var numbering = 97;
                                for (i = 0; i < match_options; i++) {
                                    var res = String.fromCharCode(numbering);
                                    match_container.innerHTML = match_container.innerHTML +
                                        "&nbsp;<div id='match_" + match_count + "'><div class='row'><div class = 'col-sm-1'><label id='match_questionLabel" + match_count + "' style='display:none;font-weight:bold;'>" + res + " .</label></div><div class = 'col-sm-4'><div style='height:40px;display:none;overflow:auto;' class='form-control input_text' id='match_question" + match_count + "'contenteditable='true' data-placeholder='Question " + (match_count + 1) + "' ></div></div><div class='col-sm-1'><label id='match_optionLabel" + match_count + "' style='display:none;'>-</label></div><div class='col-sm-5'><div style='height:40px;display:none;overflow:auto;' class='form-control input_text' id='match_option" + match_count + "'contenteditable='true' data-placeholder='Option - " + res + "' ></div></div><div class = 'col-sm-1'><label id='match_eachmark" + match_count + "' style='display:none;font-weight:bold;'>" + each_match_mark + " mark</label></div>&nbsp;</div></div>";
                                    match_count++;
                                    numbering++;
                                }
                            }

                            if ($("input[name='match_type'][value='match_Roman letters']").prop("checked")) {
                                document.getElementById("match_getvalue").style.display = "block";
                                var roman = 1;
                                var numbering = 97;
                                for (i = 0; i < match_options; i++) {
                                    var res = String.fromCharCode(numbering);
                                    var res2 = integer_to_roman(roman);
                                    match_container.innerHTML = match_container.innerHTML +
                                        "&nbsp;<div id='match_" + match_count + "'><div class='row'><div class = 'col-sm-1'><label id='match_questionLabel" + match_count + "' style='display:none;font-weight:bold;'>" + res2 + " .</label></div><div class = 'col-sm-4'><div style='height:40px;display:none;overflow:auto;' class='form-control input_text' id='match_question" + match_count + "'contenteditable='true' data-placeholder='Question " + (match_count + 1) + "' ></div></div><div class='col-sm-1'><label id='match_optionLabel" + match_count + "' style='display:none;'>-</label></div><div class='col-sm-5'><div style='height:40px;display:none;overflow:auto;' class='form-control input_text' id='match_option" + match_count + "'contenteditable='true' data-placeholder='Option - " + res + "' ></div></div><div class = 'col-sm-1'><label id='match_eachmark" + match_count + "' style='display:none;font-weight:bold;'>" + each_match_mark + " mark</label></div>&nbsp;</div></div>";
                                    match_count++;
                                    roman++;
                                    numbering++;
                                }
                            }


                            for (j = 0; j < match_questions; j++) {
                                document.getElementById("match_questionLabel" + j).style.display = 'block';
                                document.getElementById("match_question" + j).style.display = 'block';
                                document.getElementById("match_eachmark" + j).style.display = 'block';
                            }
                            for (j = 0; j < match_options; j++) {
                                document.getElementById("match_optionLabel" + j).style.display = 'block';
                                document.getElementById("match_option" + j).style.display = 'block';
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

function match_getvalues() {
    var match_question = {};
    var match_option = {};
    if (match_total_marks != 0) {
        if (match_heading != "") {
            if (match_questions != 0) {
                if (match_options != 0) {
                    if (match_questions <= match_options) {
                        for (i = 0; i < match_count; i++) {
                            match_ques[i] = document.getElementById("match_question" + i).textContent;
                            match_opt[i] = document.getElementById("match_option" + i).textContent;
                        }

                        match_ques = match_ques.filter(function (e) { return e });
                        if (match_ques.length == match_questions) {
                            if (match_opt.length == match_options) {
                                var arraySet = new Set(match_opt);
                                if (arraySet.has("")) {
                                    alert("Please enter all the options")
                                } else {

                                    if ($("input[name='match_type'][value='match_Numbers']").prop("checked")) {
                                        var start_num = match_st;
                                        for (i = 0; i < match_questions; i++) {
                                            var inData = document.getElementById('match_question' + i).textContent;
                                            match_question[start_num] = inData;
                                            start_num++;
                                        }
                                    }

                                   
                                    if ($("input[name='match_type'][value='match_Roman letters']").prop("checked")) {
                                        for (i = 0; i < match_questions; i++) {
                                            var roman = integer_to_roman(i + 1);
                                            var inData = document.getElementById('match_question' + i).textContent;
                                            match_question[roman] = inData;
                                        }
                                    }
                                    if ($("input[name='match_type'][value='match_Alphabets']").prop("checked")) {
                                        var a = 97;
                                        for (i = 0; i < match_questions; i++) {
                                            var alpha = String.fromCharCode(a);
                                            var inData = document.getElementById('match_question' + i).textContent;
                                            match_question[alpha] = inData;
                                            a++;
                                        }
                                    }

                                    var a = 97;
                                    for (i = 0; i < match_options; i++) {
                                        var alpha = String.fromCharCode(a);
                                        var inData = document.getElementById('match_option' + i).textContent;
                                        match_option[alpha] = inData;
                                        a++;
                                    }

                                    var partno = "";
                            
                                    for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
                                        console.log("retrived " + question_types[v]);
                                        var partarr = question_types[v];
                                        for (var h = 0; h < partarr.length; h++) {
                                            if ("Match the following appropriately" == partarr[h]) {
                                                partno = v - s_sec;
                                                break;
                                            }
                                        }
                                    }
                    
                    
                                    con_no = parseInt(match_head_no) + 1;

                                    item_match[match_head_no] = {
                                        "heading": match_heading,
                                        "marks": match_marks,
                                        "type":"MATCH",
                                        "questions": match_question,
                                        "quotedWords": null,
                                        "quoteType": null,
                                        "options": match_option
                                    }

                                    obj_match = {
                                        "user": reg_teacher,
                                        "heading": match_heading,
                                        "marks": match_marks,
                                        "type":"MATCH",
                                        "questions": match_question,
                                        "quotedWords": null,
                                        "quoteType": null,
                                        "options": match_option
                                    }
                                    console.log(JSON.stringify(item_match, null, '\t'))
                                    console.log(JSON.stringify(obj_match, null, '\t'))
                                    createMatching(JSON.stringify(obj_match, null, '\t'))
                                    alert("Match the following appropriately is saved successfully");
                                    document.getElementById('match_getvalue').value='Saved!';
                                    
                                    if (item_match != {}) {
                                        if (part1.hasOwnProperty("part " + partno)) {
                                            var temp_item = part1["part " + partno];
                                            part1["part " + partno] = { ...temp_item, ...item_match };
                                        }
                                        else {
                                            part1["part " + partno] = item_match;
                                        }
                                        item_match = {};
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

function toObject(arr) {
    var rv = {};
    for (i = 0; i < arr.length; i++) {
        rv[i + 1] = arr[i]
    }

    return rv
}

