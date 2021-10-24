var ex_head_container = "";
var ex_head_count = 0;
var ex_head_ques = [];
var ex_head_ans = [];
var ex_head_opt = [];
var ex_head_start_no = 0;
var ex_head_st = 0;
var ex_head_n = 0;
var ex_head_heading = "";
var ex_head_questions = 0;
var ex_head_total_marks = 0;
var ex_head_head_no = 0;
var each_ex_head_mark = 0;
var ex_head_num_question = 0;
var ex_head_marks = 0;

function ex_head_add_field() {
    if (ex_head_n > 0) {
        $("#ex_head_a").empty();
        ex_head_count = 0;
    }
    ex_head_n++;
    ex_head_heading = document.getElementById("ex_head_heading").value;
    ex_head_questions = document.getElementById("ex_head-questions").value;
    ex_head_container = document.getElementById("ex_head_a");
    ex_head_total_marks = document.getElementById("ex_head-marks").value;
    ex_head_head_no = document.getElementById("ex_head-heading-number").value;
    ex_head_start_no = document.getElementById("ex_head_starting-number").value;
    ex_head_st = ex_head_start_no;
    each_ex_head_mark = printEachMark(ex_head_heading, ex_head_total_marks, ex_head_questions)
    ex_head_num_question = printNumQuestions(ex_head_heading, ex_head_questions)
    ex_head_marks = ex_head_num_question + " x " + each_ex_head_mark + " = " + ex_head_total_marks
    if (ex_head_total_marks != 0) {
        if (ex_head_heading != "") {
            if ($("input[name=ex_head_type]").is(":checked")) {
                if (ex_head_questions != 0) {
                    if ($("input[name='ex_head_type'][value='ex_head_Numbers']").prop("checked")) {
                        if (ex_head_start_no != 0) {
                            document.getElementById("ex_head_getvalue").style.display = "block";
                            for (i = 0; i < ex_head_questions; i++) {
                                ex_head_container.innerHTML = ex_head_container.innerHTML +
                                    "&nbsp;<div id='ex_head_" + ex_head_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + ex_head_count + "'>" + ex_head_start_no + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='ex_head_question" + ex_head_count + "'contenteditable='true' data-placeholder='Question " + (ex_head_count + 1) + "' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;'>" + each_ex_head_mark + " mark</label></div></div></div>";
                                ex_head_count++;
                                ex_head_start_no++;
                            }
                        } else {
                            alert("Please enter the starting number")
                        }
                    }

                    if ($("input[name='ex_head_type'][value='ex_head_Alphabets']").prop("checked")) {
                        document.getElementById("ex_head_getvalue").style.display = "block";
                        var numbering = 97;
                        for (i = 0; i < ex_head_questions; i++) {
                            var res = String.fromCharCode(numbering);
                            ex_head_container.innerHTML = ex_head_container.innerHTML +
                                "&nbsp;<div id='ex_head_" + ex_head_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + ex_head_count + "'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='ex_head_question" + ex_head_count + "'contenteditable='true' data-placeholder='Question " + res + "' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;'>" + each_ex_head_mark + " mark</label></div></div></div>";
                            ex_head_count++;
                            numbering++;
                        }
                    }

                    if ($("input[name='ex_head_type'][value='ex_head_Roman letters']").prop("checked")) {
                        document.getElementById("ex_head_getvalue").style.display = "block";
                        for (i = 0; i < ex_head_questions; i++) {
                            var res = integer_to_roman(i + 1)
                            ex_head_container.innerHTML = ex_head_container.innerHTML +
                                "&nbsp;<div id='ex_head_" + ex_head_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + ex_head_count + "'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='ex_head_question" + ex_head_count + "'contenteditable='true' data-placeholder='Question (" + res + ")' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;'>" + each_ex_head_mark + " mark</label></div></div></div>";
                            ex_head_count++;
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

function ex_head_getvalues() {
    var ex_head_question = {};
    if (ex_head_heading != "") {
        if (ex_head_questions != 0) {
            for (i = 0; i < ex_head_count; i++) {
                ex_head_ques[i] = document.getElementById("ex_head_question" + i).textContent;
            }

            ex_head_ques = ex_head_ques.filter(function (e) { return e });
            if (ex_head_ques.length == ex_head_questions) {
                if ($("input[name='ex_head_type'][value='ex_head_Numbers']").prop("checked")) {
                    var start_num = ex_head_st;
                    for (i = 0; i < ex_head_questions; i++) {
                        ex_head_question[start_num] = document.getElementById('ex_head_question' + i).textContent;
                        start_num++;
                    }
                }

                con_no = parseInt(ex_head_head_no) + 1;
                
            
                if ($("input[name='ex_head_type'][value='ex_head_Roman letters']").prop("checked")) {
                    for (i = 0; i < ex_head_questions; i++) {
                        var roman = integer_to_roman(i + 1);
                        ex_head_question[roman] = document.getElementById('ex_head_question' + i).textContent;
                    }
                }
                if ($("input[name='ex_head_type'][value='ex_head_Alphabets']").prop("checked")) {
                    var a = 97;
                    for (i = 0; i < ex_head_questions; i++) {
                        var alpha = String.fromCharCode(a);
                        ex_head_question[alpha] = document.getElementById('ex_head_question' + i).textContent;
                        a++;
                    }
                }

                var partno = "";
                for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
                    console.log("retrieved " + question_types[v]);
                    var partarr = question_types[v];
                    for (var h = 0; h < partarr.length; h++) {
                        if ("Expand the headlines" == partarr[h]) {
                            partno = v - s_sec;
                            break;
                        }
                    }
                }

                item_ex_head[ex_head_head_no] = {
                    "heading": ex_head_heading,
                    "marks": ex_head_marks,
                    "type": "COMP",
                    "question": ex_head_question,
                    "quotedWords": null,
                    "quoteType": null,
                    "options": null
                }

                obj_ex_head = {
                    "user":reg_teacher,
                    "heading": ex_head_heading,
                    "marks": ex_head_marks,
                    "type": "COMP",
                    "question": ex_head_question,
                    "quotedWords": null,
                    "quoteType": null,
                    "options": null
                }
                console.log(JSON.stringify(item_ex_head , null, '\t'))
                console.log(JSON.stringify(obj_ex_head , null, '\t'))
                createExpandHeadlines(JSON.stringify(obj_ex_head , null, '\t'))
                alert("Expand the headlines is saved successfully");
                document.getElementById('ex_head_getvalue').value='Saved!';

                if (item_ex_head != {}) {
                    if (part1.hasOwnProperty("part " + partno)) {
                        var temp_item = part1["part " + partno];
                        part1["part " + partno] = { ...temp_item, ...item_ex_head };
                    }
                    else {
                        part1["part " + partno] = item_ex_head;
                    }
                    item_ex_head = {};
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

function ex_head_getResults(elem) {
    elem.checked && elem.value == "ex_head_Numbers" ? $("#ex_head_dvtext").show() : $("#ex_head_dvtext").hide();
};