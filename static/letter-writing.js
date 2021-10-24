var normal_letter_container = "";
var normal_letter_count = 0;
var normal_letter_ques = [];
var normal_letter_ans = [];
var normal_letter_opt = [];
var normal_letter_start_no = 0;
var normal_letter_st = 0;
var normal_letter_n = 0;
var normal_letter_heading = "";
var normal_letter_questions = 0;
var normal_letter_total_marks = 0;
var normal_letter_head_no = 0;
var each_normal_letter_mark = 0;
var normal_letter_num_question = 0;
var normal_letter_marks = 0;

function normal_letter_add_field() {
    if (normal_letter_n > 0) {
        $("#normal_letter_a").empty();
        normal_letter_count = 0;
    }
    normal_letter_n++;
    normal_letter_heading = document.getElementById("normal_letter_heading").value;
    normal_letter_questions = document.getElementById("normal_letter-questions").value;
    normal_letter_container = document.getElementById("normal_letter_a");
    normal_letter_total_marks = document.getElementById("normal_letter-marks").value;
    normal_letter_head_no = document.getElementById("normal_letter-heading-number").value;
    normal_letter_start_no = document.getElementById("normal_letter_starting-number").value;
    each_normal_letter_mark = printEachMark(normal_letter_heading, normal_letter_total_marks, normal_letter_questions)
    normal_letter_num_question = printNumQuestions(normal_letter_heading, normal_letter_questions)
    normal_letter_marks = normal_letter_num_question + " x " + each_normal_letter_mark + " = " + normal_letter_total_marks
    normal_letter_st = normal_letter_start_no;
    if (normal_letter_total_marks != 0) {
        if (normal_letter_heading != "") {
            if ($("input[name=normal_letter_type]").is(":checked")) {
                if (normal_letter_questions != 0) {
                    if ($("input[name='normal_letter_type'][value='normal_letter_Numbers']").prop("checked")) {
                        if (normal_letter_start_no != 0) {
                            document.getElementById("normal_letter_getvalue").style.display = "block";
                            for (i = 0; i < normal_letter_questions; i++) {
                                normal_letter_container.innerHTML = normal_letter_container.innerHTML +
                                    "&nbsp;<div id='normal_letter_" + normal_letter_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + normal_letter_count + "'>" + normal_letter_start_no + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='normal_letter_question" + normal_letter_count + "'contenteditable='true' data-placeholder='Question " + (normal_letter_count + 1) + "' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;'>" + each_normal_letter_mark + " mark</label></div></div></div>";
                                normal_letter_count++;
                                normal_letter_start_no++;
                            }
                        } else {
                            alert("please enter the starting number")
                        }
                    }

                    if ($("input[name='normal_letter_type'][value='normal_letter_Alphabets']").prop("checked")) {
                        document.getElementById("normal_letter_getvalue").style.display = "block";
                        var numbering = 97;
                        for (i = 0; i < normal_letter_questions; i++) {
                            var res = String.fromCharCode(numbering);
                            normal_letter_container.innerHTML = normal_letter_container.innerHTML +
                                "&nbsp;<div id='normal_letter_" + normal_letter_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + normal_letter_count + "'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='normal_letter_question" + normal_letter_count + "'contenteditable='true' data-placeholder='Question " + res + "' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;'>" + each_normal_letter_mark + " mark</label></div></div></div>";
                            normal_letter_count++;
                            numbering++;
                        }
                    }

                    if ($("input[name='normal_letter_type'][value='normal_letter_Roman letters']").prop("checked")) {
                        document.getElementById("normal_letter_getvalue").style.display = "block";
                        for (i = 0; i < normal_letter_questions; i++) {
                            var res = integer_to_roman(i + 1)
                            normal_letter_container.innerHTML = normal_letter_container.innerHTML +
                                "&nbsp;<div id='normal_letter_" + normal_letter_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + normal_letter_count + "'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='normal_letter_question" + normal_letter_count + "'contenteditable='true' data-placeholder='Question (" + res + ")' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;'>" + each_normal_letter_mark + " mark</label></div></div></div>";
                            normal_letter_count++;
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

function normal_letter_getvalues() {
    var normal_letter_question = {};
    if (normal_letter_heading != "") {
        if (normal_letter_questions != 0) {
            for (i = 0; i < normal_letter_count; i++) {
                normal_letter_ques[i] = document.getElementById("normal_letter_question" + i).textContent;
            }

            normal_letter_ques = normal_letter_ques.filter(function (e) { return e });
            if (normal_letter_ques.length == normal_letter_questions) {
                if ($("input[name='normal_letter_type'][value='normal_letter_Numbers']").prop("checked")) {
                    var start_num = normal_letter_st;
                    for (i = 0; i < normal_letter_questions; i++) {
                        var inData = document.getElementById('normal_letter_question' + i).textContent;
                        normal_letter_question[start_num] = { "question": inData, "type": "MCQN", "quotedWords": null, "quoteType": null, "options": null };
                        start_num++;
                    }
                }

                    
              
                if ($("input[name='normal_letter_type'][value='normal_letter_Roman letters']").prop("checked")) {
                    for (i = 0; i < normal_letter_questions; i++) {
                        var roman = integer_to_roman(i + 1);
                        var inData = document.getElementById('normal_letter_question' + i).textContent;
                        normal_letter_question[roman] = { "question": inData, "type": "MCQN", "quotedWords": null, "quoteType": null, "options": null };
                    }
                }
                if ($("input[name='normal_letter_type'][value='normal_letter_Alphabets']").prop("checked")) {
                    var a = 97;
                    for (i = 0; i < normal_letter_questions; i++) {
                        var alpha = String.fromCharCode(a);
                        var inData = document.getElementById('normal_letter_question' + i).textContent;
                        normal_letter_question[alpha] = { "question": inData, "type": "MCQN", "quotedWords": null, "quoteType": null, "options": null };
                        a++;
                    }
                }

                var partno = "";

                for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
                    console.log("retrived " + question_types[v]);
                    var partarr = question_types[v];
                    for (var h = 0; h < partarr.length; h++) {
                        if ("Letter writing questions" == partarr[h]) {
                            partno = v - s_sec;
                            break;
                        }
                    }
                }



                con_no = parseInt(normal_letter_head_no) + 1;
                
                item_normal_letter_ques[normal_letter_head_no] = {
                    "heading": normal_letter_heading,
                    "marks": normal_letter_marks,
                    "type": "COMP",
                    "questions":normal_letter_question,
                    "quotedWords": null,
                    "quoteType": null,
                    "options": null
                }
               

                obj_normal_letter_ques = {
                    "user": reg_teacher,
                    "heading": normal_letter_heading,
                    "marks": normal_letter_marks,
                    "type": "MCQN",
                    "questions":normal_letter_question,
                    "quotedWords": null,
                    "quoteType": null,
                    "options": null
                }
               

                console.log(JSON.stringify(item_normal_letter_ques, null, '\t'))
                console.log(JSON.stringify(obj_normal_letter_ques, null, '\t'))
                create_normal_letter_writing(JSON.stringify(obj_normal_letter_ques, null, '\t'))
                alert("Letter writing is saved successfully");
                document.getElementById('normal_letter_getvalue').value='Saved!';
                
                if (item_normal_letter_ques != {}) {
                    if (part1.hasOwnProperty("part " + partno)) {
                        var temp_item = part1["part " + partno];
                        part1["part " + partno] = { ...temp_item, ...item_normal_letter_ques };
                    }
                    else {
                        part1["part " + partno] = item_normal_letter_ques;
                    }
                    item_normal_letter_ques = {};
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

function normal_letter_getResults(elem) {
    elem.checked && elem.value == "normal_letter_Numbers" ? $("#normal_letter_dvtext").show() : $("#normal_letter_dvtext").hide();
};
