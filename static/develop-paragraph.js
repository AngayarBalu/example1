var dev_para_container = "";
var dev_para_count = 0;
var dev_para_ques = [];
var dev_para_ans = [];
var dev_para_opt = [];
var dev_para_start_no = 0;
var dev_para_st = 0;
var dev_para_n = 0;
var dev_para_heading = "";
var dev_para_questions = 0;
var dev_para_quest = {};
var dev_para_total_marks = 0;
var dev_para_head_no = 0;
var each_dev_para_mark = 0;
var dev_para_num_question = 0;
var dev_para_marks = 0;


function dev_para_add_field() {
    if (dev_para_n > 0) {
        $("#dev_para_a").empty();
        dev_para_count = 0;
    }
    dev_para_n++;
    dev_para_heading = document.getElementById("dev_para_heading").value;
    dev_para_questions = document.getElementById("dev_para-questions").value;
    dev_para_container = document.getElementById("dev_para_a");
    dev_para_total_marks = document.getElementById("dev_para-marks").value;
    dev_para_head_no = document.getElementById("dev_para-heading-number").value;
    dev_para_start_no = document.getElementById("dev_para_starting-number").value;
    each_dev_para_mark = printEachMark(dev_para_heading, dev_para_total_marks, dev_para_questions)
    dev_para_num_question = printNumQuestions(dev_para_heading, dev_para_questions)
    dev_para_marks = dev_para_num_question + " x " + each_dev_para_mark + " = " + dev_para_total_marks
    dev_para_st = dev_para_start_no;
    if (dev_para_total_marks != 0) {
        if (dev_para_heading != "") {
            if ($("input[name=dev_para_type]").is(":checked")) {
                if (dev_para_questions != 0) {
                    if ($("input[name='dev_para_type'][value='dev_para_Numbers']").prop("checked")) {
                        if (dev_para_start_no != 0) {
                            document.getElementById("dev_para_getvalue").style.display = "block";
                            for (i = 0; i < dev_para_questions; i++) {
                                dev_para_container.innerHTML = dev_para_container.innerHTML +
                                    "&nbsp;<div id='dev_para_" + dev_para_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold' id='questionLabel" + dev_para_count + "'>" + dev_para_start_no + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='dev_para_question" + dev_para_count + "'contenteditable='true' data-placeholder='Question " + (dev_para_count + 1) + "' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold'>" + each_dev_para_mark + " mark</label></div></div></div>";
                                dev_para_count++;
                                dev_para_start_no++;
                            }
                        } else {
                            alert("Please enter the starting number")
                        }

                    }

                    if ($("input[name='dev_para_type'][value='dev_para_Alphabets']").prop("checked")) {
                        document.getElementById("dev_para_getvalue").style.display = "block";
                        var numbering = 97;
                        for (i = 0; i < dev_para_questions; i++) {
                            var res = String.fromCharCode(numbering);
                            dev_para_container.innerHTML = dev_para_container.innerHTML +
                                "&nbsp;<div id='dev_para_" + dev_para_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold' id='questionLabel" + dev_para_count + "'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='dev_para_question" + dev_para_count + "'contenteditable='true' data-placeholder='Question " + res + "' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold'>" + each_dev_para_mark + " mark</label></div></div></div>";
                            dev_para_count++;
                            numbering++;
                        }
                    }

                    if ($("input[name='dev_para_type'][value='dev_para_Roman letters']").prop("checked")) {
                        document.getElementById("dev_para_getvalue").style.display = "block";
                        for (i = 0; i < dev_para_questions; i++) {
                            var res = integer_to_roman(i + 1)
                            dev_para_container.innerHTML = dev_para_container.innerHTML +
                                "&nbsp;<div id='dev_para_" + dev_para_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold' id='questionLabel" + dev_para_count + "'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='dev_para_question" + dev_para_count + "'contenteditable='true' data-placeholder='Question (" + res + ")' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold'>" + each_dev_para_mark + " mark</label></div></div></div>";
                            dev_para_count++;
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

function dev_para_getvalues() {
    var dev_para_question = {};
    if (dev_para_head_no != 0) {
        if (dev_para_heading != "") {
            if (dev_para_questions != 0) {
                for (i = 0; i < dev_para_count; i++) {
                    dev_para_ques[i] = document.getElementById("dev_para_question" + i).textContent;
                }

                dev_para_ques = dev_para_ques.filter(function (e) { return e });
                if (dev_para_ques.length == dev_para_questions) {
                    if ($("input[name='dev_para_type'][value='dev_para_Numbers']").prop("checked")) {
                        var start_num = dev_para_st;
                        for (i = 0; i < dev_para_questions; i++) {
                            var inData = document.getElementById('dev_para_question' + i).textContent;
                            dev_para_question[start_num] = inData;
                            start_num++;
                        }
                    }

                    if (dev_para_head_no != 0) {
                        con_no = parseInt(dev_para_head_no) + 1;
                    }
                    else {
                        con_no = start_num;
                    }

                    if ($("input[name='dev_para_type'][value='dev_para_Roman letters']").prop("checked")) {
                        for (i = 0; i < dev_para_questions; i++) {
                            var roman = integer_to_roman(i + 1);
                            var inData = document.getElementById('dev_para_question' + i).textContent;
                            dev_para_question[roman] = inData;
                        }
                    }
                    if ($("input[name='dev_para_type'][value='dev_para_Alphabets']").prop("checked")) {
                        var a = 97;
                        for (i = 0; i < dev_para_questions; i++) {
                            var alpha = String.fromCharCode(a);
                            var inData = document.getElementById('dev_para_question' + i).textContent;
                            dev_para_question[alpha] = inData;
                            a++;
                        }
                    }

                    for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
                        console.log("retrived " + question_types[v]);
                        var partarr = question_types[v];
                        for (var h = 0; h < partarr.length; h++) {
                            if ("Write a paragraph using outlines" == partarr[h]) {
                                partno = v - s_sec;
                                break;
                            }
                        }
                    }
    
    

                    item_dev_para[dev_para_head_no] = {
                        "heading": dev_para_heading,
                        "marks": dev_para_marks,
                        "type":"MCQCH",
                        "question":dev_para_question,                        
                        "quotedWords": null,
                        "quoteType": null,
                        "options": null
                    }
                    // for (let key in  dev_para_question) {
                    //     item_dev_para[dev_para_head_no][key] =  dev_para_question[key]
                    // }

                    obj_dev_para = {
                        "user":reg_teacher,
                        "heading": dev_para_heading,
                        "marks": dev_para_marks,
                        "type":"MCQCH",
                        "quotedWords": null,
                        "quoteType": null,
                        "options": null
                    }

                    for (let key in  dev_para_question) {
                        obj_dev_para[key] =  dev_para_question[key]
                    }
                    console.log(JSON.stringify(item_dev_para, null, '\t'))
                    console.log(JSON.stringify(obj_dev_para, null, '\t'))
                    createParagraphUsingOutlines(JSON.stringify(obj_dev_para, null, '\t'));
                    alert("Write a paragraph using outlines is saved successfully");
                    document.getElementById('dev_para_getvalue').value='Saved!';
                    
                    if (item_dev_para != {}) {
                        if (part1.hasOwnProperty("part " + partno)) {
                            var temp_item = part1["part " + partno];
                            part1["part " + partno] = { ...temp_item, ...item_dev_para };
                        }
                        else {
                            part1["part " + partno] = item_dev_para;
                        }
                        item_dev_para = {};
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

function dev_para_getResults(elem) {
    elem.checked && elem.value == "dev_para_Numbers" ? $("#dev_para_dvtext").show() : $("#dev_para_dvtext").hide();
};