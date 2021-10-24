var ch_speaker_container = "";
var ch_speaker_count = 0;
var ch_speaker_ques = [];
var ch_speaker_ans = [];
var ch_speaker_opt = [];
var ch_speaker_start_no = 0;
var ch_speaker_st = 0;
var ch_speaker_n = 0;
var ch_speaker_heading = "";
var ch_speaker_questions = 0;
var ch_speaker_total_marks = 0;
var ch_speaker_head_no = 0;
var each_ch_speaker_mark = 0;
var ch_speaker_num_question = 0;
var ch_speaker_marks = 0;


function ch_speaker_getResults(elem) {
    elem.checked && elem.value == "ch_speaker_Numbers" ? $("#ch_speaker_dvtext").show() : $("#ch_speaker_dvtext").hide();
};

function ch_speaker_add_field() {
    if (ch_speaker_n > 0) {
        $("#ch_speaker_a").empty();
        ch_speaker_count = 0;
    }
    ch_speaker_n++;
    ch_speaker_heading = document.getElementById("ch_speaker_heading").value;
    ch_speaker_questions = document.getElementById("ch_speaker-questions").value;
    ch_speaker_container = document.getElementById("ch_speaker_a");
    ch_speaker_total_marks = document.getElementById("ch_speaker-marks").value;
    ch_speaker_head_no = document.getElementById("ch_speaker-heading-number").value;
    ch_speaker_start_no = document.getElementById("ch_speaker_starting-number").value;
    ch_speaker_st = ch_speaker_start_no;
    each_ch_speaker_mark = printEachMark(ch_speaker_heading, ch_speaker_total_marks, ch_speaker_questions)
    ch_speaker_num_question = printNumQuestions(ch_speaker_heading, ch_speaker_questions)
    ch_speaker_marks = ch_speaker_num_question + " x " + each_ch_speaker_mark + " = " + ch_speaker_total_marks

    if (ch_speaker_total_marks != 0) {
        if (ch_speaker_heading != "") {
            if ($("input[name=ch_speaker_type]").is(":checked")) {
                if (ch_speaker_questions != 0) {
                    if ($("input[name='ch_speaker_type'][value='ch_speaker_Numbers']").prop("checked")) {
                        document.getElementById("ch_speaker_getvalue").style.display = "block";
                        for (i = 0; i < ch_speaker_questions; i++) {
                            ch_speaker_container.innerHTML = ch_speaker_container.innerHTML +
                                "&nbsp;<div id='ch_speaker_" + ch_speaker_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + ch_speaker_count + "'>" + ch_speaker_start_no + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='ch_speaker_question" + ch_speaker_count + "'contenteditable='true' data-placeholder='Question " + (ch_speaker_count + 1) + "' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;' id='eachmark" + ch_speaker_count + "'>" + each_ch_speaker_mark + " mark</label></div></div></div>";
                            ch_speaker_count++;
                            ch_speaker_start_no++;
                        }
                    }

                    if ($("input[name='ch_speaker_type'][value='ch_speaker_Alphabets']").prop("checked")) {
                        document.getElementById("ch_speaker_getvalue").style.display = "block";
                        var numbering = 97;
                        for (i = 0; i < ch_speaker_questions; i++) {
                            var res = String.fromCharCode(numbering);
                            ch_speaker_container.innerHTML = ch_speaker_container.innerHTML +
                                "&nbsp;<div id='ch_speaker_" + ch_speaker_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + ch_speaker_count + "'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='ch_speaker_question" + ch_speaker_count + "'contenteditable='true' data-placeholder='Question " + (ch_speaker_count + 1) + "' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;'  id='eachmark" + ch_speaker_count + "'>" + each_ch_speaker_mark + " mark</label></div></div></div>";
                            ch_speaker_count++;
                            numbering++;
                        }
                    }

                    if ($("input[name='ch_speaker_type'][value='ch_speaker_Roman letters']").prop("checked")) {
                        document.getElementById("ch_speaker_getvalue").style.display = "block";
                        for (i = 0; i < ch_speaker_questions; i++) {
                            var res = integer_to_roman(i + 1)
                            ch_speaker_container.innerHTML = ch_speaker_container.innerHTML +
                                "&nbsp;<div id='ch_speaker_" + ch_speaker_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + ch_speaker_count + "'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='ch_speaker_question" + ch_speaker_count + "'contenteditable='true' data-placeholder='Question " + (ch_speaker_count + 1) + "' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;' id='eachmark" + ch_speaker_count + "'>" + each_ch_speaker_mark + " mark</label></div></div></div>";
                            ch_speaker_count++;
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

function ch_speaker_getvalues() {
    var ch_speaker_question = {};
    if (ch_speaker_heading != "") {
        if (ch_speaker_questions != 0) {
            for (i = 0; i < ch_speaker_count; i++) {
                ch_speaker_ques[i] = document.getElementById("ch_speaker_question" + i).textContent;
            }

            ch_speaker_ques = ch_speaker_ques.filter(function (e) { return e });
            if (ch_speaker_ques.length == ch_speaker_questions) {
                if ($("input[name='ch_speaker_type'][value='ch_speaker_Numbers']").prop("checked")) {
                    var start_num = ch_speaker_st;
                    for (i = 0; i < ch_speaker_questions; i++) {
                        var inData = document.getElementById('ch_speaker_question' + i).textContent;
                        ch_speaker_question[start_num] = inData;
                        start_num++;
                    }
                }
                if ($("input[name='ch_speaker_type'][value='ch_speaker_Roman letters']").prop("checked")) {
                    for (i = 0; i < ch_speaker_questions; i++) {
                        var roman = integer_to_roman(i + 1);
                        var inData = document.getElementById('ch_speaker_question' + i).textContent;
                        ch_speaker_question[roman] = inData;
                    }
                }
                if ($("input[name='ch_speaker_type'][value='ch_speaker_Alphabets']").prop("checked")) {
                    var a = 97;
                    for (i = 0; i < ch_speaker_questions; i++) {
                        var alpha = String.fromCharCode(a);
                        var inData = document.getElementById('ch_speaker_question' + i).textContent;
                        ch_speaker_question[alpha] = inData;
                        a++;
                    }
                }

                var partno = "";

                for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
                    console.log("retrived " + question_types[v]);
                    var partarr = question_types[v];
                    for (var h = 0; h < partarr.length; h++) {
                        if ("Identify character or speaker" == partarr[h]) {
                            partno = v - s_sec;
                            break;
                        }
                    }
                }

                con_no = parseInt(ch_speaker_head_no)+1;

                item_ch_speaker[ch_speaker_head_no] = {
                    "heading": ch_speaker_heading,
                    "marks": ch_speaker_marks,
                    "type": "COMP",
                    "question": ch_speaker_question,
                    "quotedWords": null,
                    "quoteType": null,
                    "options": null
                }

                obj_ch_speaker = {
                    "user": reg_teacher,
                    "heading": ch_speaker_heading,
                    "marks": ch_speaker_marks,
                    "type": "COMP",
                    "question": ch_speaker_question,
                    "quotedWords": null,
                    "quoteType": null,
                    "options": null
                };
                console.log(JSON.stringify(item_ch_speaker, null, '\t'))
                console.log(JSON.stringify(obj_ch_speaker, null, '\t'))
                createCharacterSpeaker(JSON.stringify(obj_ch_speaker, null, '\t'))
                alert("Identify character or speaker is saved successfully");
                document.getElementById('ch_speaker_getvalue').value='Saved!';
                if (item_ch_speaker != {}) {
                    if (part1.hasOwnProperty("part " + partno)) {
                        var temp_item = part1["part " + partno];
                        part1["part " + partno] = { ...temp_item, ...item_ch_speaker };
                    }
                    else {
                        part1["part " + partno] = item_ch_speaker;
                    }
                    item_ch_speaker = {};
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