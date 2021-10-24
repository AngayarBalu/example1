var supple_para_container = "";
var supple_para_count = 0;
var supple_para_ques = [];
var supple_para_ans = [];
var supple_para_opt = [];
var supple_para_start_no = 0;
var supple_para_st = 0;
var supple_para_n = 0;
var supple_para_heading = "";
var supple_para_questions = 0;
var supple_para_total_marks = 0;
var supple_para_head_no = 0;
var each_supple_para_mark = 0;
var supple_para_num_question = 0;
var supple_para_marks = 0;

function supple_para_getResults(elem) {
    elem.checked && elem.value == "supple_para_Numbers" ? $("#supple_para_dvtext").show() : $("#supple_para_dvtext").hide();
};

function supple_para_add_field() {
    if (supple_para_n > 0) {
        $("#supple_para_a").empty();
        supple_para_count = 0;
    }
    supple_para_n++;
    supple_para_heading = document.getElementById("supple_para_heading").value;
    supple_para_questions = document.getElementById("supple_para-questions").value;
    supple_para_container = document.getElementById("supple_para_a");
    supple_para_total_marks = document.getElementById("supple_para-marks").value;
    supple_para_head_no = document.getElementById("supple_para-heading-number").value;
    supple_para_start_no = document.getElementById("supple_para_starting-number").value;
    each_supple_para_mark = printEachMark(supple_para_heading, supple_para_total_marks, supple_para_questions)
    supple_para_num_question = printNumQuestions(supple_para_heading, supple_para_questions)
    supple_para_marks = supple_para_num_question + " x " + each_supple_para_mark + " = " + supple_para_total_marks
    supple_para_st = supple_para_start_no;
    if (supple_para_total_marks != 0) {
        if (supple_para_heading != "") {
            if ($("input[name=supple_para_type]").is(":checked")) {
                if (supple_para_questions != 0) {
                    if ($("input[name='supple_para_type'][value='supple_para_Numbers']").prop("checked")) {
                        if (supple_para_start_no != 0) {
                            document.getElementById("supple_para_getvalue").style.display = "block";
                            for (i = 0; i < supple_para_questions; i++) {
                                supple_para_container.innerHTML = supple_para_container.innerHTML +
                                    "&nbsp;<div id='supple_para_" + supple_para_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + supple_para_count + "'>" + supple_para_start_no + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='supple_para_question" + supple_para_count + "'contenteditable='true' data-placeholder='Question " + (supple_para_count + 1) + "' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;'>" + each_supple_para_mark + " mark</label></div></div></div>";
                                supple_para_count++;
                                supple_para_start_no++;
                            }
                        } else {
                            alert("Please enter the starting number")
                        }
                    }

                    if ($("input[name='supple_para_type'][value='supple_para_Alphabets']").prop("checked")) {
                        document.getElementById("supple_para_getvalue").style.display = "block";
                        var numbering = 97;
                        for (i = 0; i < supple_para_questions; i++) {
                            var res = String.fromCharCode(numbering);
                            supple_para_container.innerHTML = supple_para_container.innerHTML +
                                "&nbsp;<div id='supple_para_" + supple_para_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + supple_para_count + "'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='supple_para_question" + supple_para_count + "'contenteditable='true' data-placeholder='Question " + res + "' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;'>" + each_supple_para_mark + " mark</label></div></div></div>";
                            supple_para_count++;
                            numbering++;
                        }
                    }

                    if ($("input[name='supple_para_type'][value='supple_para_Roman letters']").prop("checked")) {
                        document.getElementById("supple_para_getvalue").style.display = "block";
                        for (i = 0; i < supple_para_questions; i++) {
                            var res = integer_to_roman(i + 1)
                            supple_para_container.innerHTML = supple_para_container.innerHTML +
                                "&nbsp;<div id='supple_para_" + supple_para_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + supple_para_count + "'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='supple_para_question" + supple_para_count + "'contenteditable='true' data-placeholder='Question (" + res + ")' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;'>" + each_supple_para_mark + " mark</label></div></div></div>";
                            supple_para_count++;
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

function supple_para_getvalues() {
    var supple_para_question = {};
    if (supple_para_head_no != 0) {
        if (supple_para_heading != "") {
            if (supple_para_questions != 0) {
                for (i = 0; i < supple_para_count; i++) {
                    supple_para_ques[i] = document.getElementById("supple_para_question" + i).textContent;
                }

                supple_para_ques = supple_para_ques.filter(function (e) { return e });
                if (supple_para_ques.length == supple_para_questions) {
                    if ($("input[name='supple_para_type'][value='supple_para_Numbers']").prop("checked")) {
                        var start_num = supple_para_st;
                        for (i = 0; i < supple_para_questions; i++) {
                            var inData = document.getElementById('supple_para_question' + i).textContent;
                            supple_para_question[start_num] = inData;
                            start_num++;
                        }
                    }
                    if ($("input[name='supple_para_type'][value='supple_para_Roman letters']").prop("checked")) {
                        for (i = 0; i < supple_para_questions; i++) {
                            var roman = integer_to_roman(i + 1);
                            var inData = document.getElementById('supple_para_question' + i).textContent;
                            supple_para_question[roman] = inData;
                        }
                    }
                    if ($("input[name='supple_para_type'][value='supple_para_Alphabets']").prop("checked")) {
                        var a = 97;
                        for (i = 0; i < supple_para_questions; i++) {
                            var alpha = String.fromCharCode(a);
                            var inData = document.getElementById('supple_para_question' + i).textContent;
                            supple_para_question[alpha] = inData;
                            a++;
                        }
                    }

                    var supple_para_quest = {}
                    supple_para_quest["question"] = supple_para_question;

                    var partno = "";
                   
                    for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
                        console.log("retrived " + question_types[v]);
                        var partarr = question_types[v];
                        for (var h = 0; h < partarr.length; h++) {
                            if ("Paragraph questions ( Supplementary )" == partarr[h]) {
                                partno = v - s_sec;
                                break;
                            }
                        }
                    }
    
    
                    con_no = parseInt(supple_para_head_no) + 1;

                    item_supple_para_ques[supple_para_head_no] = {
                        "heading": supple_para_heading,
                        "marks": supple_para_marks,
                        "type": "MCQCH",
                        "quotedWords": null,
                        "quoteType": null,
                        "options": null,
                        "question":ArrayToObject(supple_para_ques)
                    }

                    obj_supple_para_ques = {
                        "user": reg_teacher,
                        "heading": supple_para_heading,
                        "marks": supple_para_marks,
                        "type": "MCQCH",
                        "quotedWords": null,
                        "quoteType": null,
                        "options": null,
                        "question": ArrayToObject(supple_para_ques)
                    };
                    
                    // for (let key in supple_para_quest) {
                    //     item_supple_para_ques[supple_para_head_no][key] = supple_para_quest[key]
                    // }

                    // for (let key in supple_para_quest) {
                    //     obj_supple_para_ques[key] = supple_para_quest[key]
                    // }

                    console.log(JSON.stringify(item_supple_para_ques, null, '\t'))
                    console.log(JSON.stringify(obj_supple_para_ques, null, '\t'))
                    createSupplementaryParagraph(JSON.stringify(obj_supple_para_ques, null, '\t'))
                    alert("supplementary paragraph questions is saved successfully");
                    document.getElementById('supple_para_getvalue').value="Saved!";
                    if (item_supple_para_ques != {}) {
                        if (part1.hasOwnProperty("part " + partno)) {
                            var temp_item = part1["part " + partno];
                            part1["part " + partno] = { ...temp_item, ...item_supple_para_ques };
                        }
                        else {
                            part1["part " + partno] = item_supple_para_ques;
                        }
                        item_supple_para_ques = {};
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
    else {
        alert("Please enter the heading number");
    }
}

function ArrayToObject(arr) {
    var obj = {};
    for (var i = 1; i <= arr.length; i++) {
        obj[i] = arr[i - 1];
    }
    return obj
}