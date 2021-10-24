var informal_letter_heading = '';
var informal_letter_questions = 0;
var informal_letter_total_marks = 0;
var informal_letter_head_no = 0;
var informal_letter_container = "";
var informal_letter_start_no = 0;
var each_informal_letter_mark = 0;
var informal_letter_num_question = 0;
var informal_letter_marks = 0;
var informal_letter_count = 0;
var informal_letter_st = 0;
var informal_letter_n = 0;


function informal_letter_addquestions() {
    if (informal_letter_n > 0) {
        $("#informal_letter_a").empty();
        informal_letter_count = 0;
    }
    informal_letter_n++;
    informal_letter_questions = document.getElementById('informal_letter-num-question').value;
    informal_letter_heading = document.getElementById('informal_letter_heading').value;
    informal_letter_total_marks = document.getElementById('informal_letter-marks').value;
    informal_letter_head_no = document.getElementById('informal_letter-heading-number').value;
    informal_letter_container = document.getElementById("informal_letter_a");
    informal_letter_start_no = document.getElementById("informal_letter_starting-number").value;
    each_informal_letter_mark = printEachMark(informal_letter_heading, informal_letter_total_marks, informal_letter_questions)
    informal_letter_num_question = printNumQuestions(informal_letter_heading, informal_letter_questions)
    informal_letter_marks = informal_letter_num_question + " x " + each_informal_letter_mark + " = " + informal_letter_total_marks
    informal_letter_st = informal_letter_start_no;
    if (informal_letter_total_marks != 0) {
        if (informal_letter_heading != "") {
            if ($("input[name=informal_letter_type]").is(":checked")) {
                if (informal_letter_questions != 0) {
                    if ($("input[name='informal_letter_type'][value='informal_letter_Numbers']").prop("checked")) {
                        if (informal_letter_start_no != 0) {
                            document.getElementById("informal_letter_getvalue").style.display = "block";
                            for (i = 0; i < informal_letter_questions; i++) {
                                informal_letter_container.innerHTML = informal_letter_container.innerHTML +
                                    "&nbsp;<div id='informal_letter_" + informal_letter_count + "'><div class='row'><div class='col-sm-1'><label style='font-weight:bold;'>" + informal_letter_start_no + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='informal_letter-question" + informal_letter_count + "'contenteditable='true' data-placeholder='Question " + (informal_letter_count + 1) + "' ></div></div><div class='col-sm-1'><label style='font-weight:bold;'>" + each_informal_letter_mark + " mark</label></div></div>&nbsp;<div class='row'><div class='col-sm-9'></div><div class='col-sm-3'><div style='height:40px;overflow:auto;' name='message' id='informal_letter-above-address1" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 1' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-9'></div><div class='col-sm-3'><div style='height:40px;overflow:auto;' name='message' id='informal_letter-above-address2" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 2' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-9'></div><div class='col-sm-3'><div style='height:40px;overflow:auto;' name='message' id='informal_letter-date" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Date' cols='200' rows='100'></div></div></div><div class='row'><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='informal_letter-start" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Dear ABC' cols='200' rows='100'></div></div></div><div class='mt-3 form-group'><div style='height:200px;overflow: auto; ' name='message' id='informal_letter-body" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Type your message here...' cols='200' rows='100'></div></div><div class='row'><div class='col-sm-8'></div> <div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='informal_letter-yours" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Yours obediently,'  cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-8'></div> <div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='informal_letter-name" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='your name'  cols='200' rows='100'></div></div></div><div class='row'><div class='col-sm-4'><label style='font-weight:bold;'>Address on the envelope</label></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='informal_letter-envelope1" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Envelope address line 1' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='informal_letter-envelope2" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Envelope address line 2' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='informal_letter-envelope3" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Envelope address line 3' cols='200' rows='100'></div></div></div>&nbsp;</div>";
                                informal_letter_count++;
                                informal_letter_start_no++;
                            }
                        } else {
                            alert("please enter the starting number")
                        }
                    }

                    if ($("input[name='informal_letter_type'][value='informal_letter_Alphabets']").prop("checked")) {
                        document.getElementById("informal_letter_getvalue").style.display = "block";
                        var numbering = 97;
                        for (i = 0; i < informal_letter_questions; i++) {
                            var res = String.fromCharCode(numbering);
                            informal_letter_container.innerHTML = informal_letter_container.innerHTML +
                                "&nbsp;<div id='informal_letter_" + informal_letter_count + "'><div class='row'><div class='col-sm-1'><label style='font-weight:bold;'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='informal_letter-question" + informal_letter_count + "'contenteditable='true' data-placeholder='Question " + (informal_letter_count + 1) + "' ></div></div><div class='col-sm-1'><label style='font-weight:bold;'>" + each_informal_letter_mark + " mark</label></div></div>&nbsp;<div class='row'><div class='col-sm-9'></div><div class='col-sm-3'><div style='height:40px;overflow:auto;' name='message' id='informal_letter-above-address1" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 1' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-9'></div><div class='col-sm-3'><div style='height:40px;overflow:auto;' name='message' id='informal_letter-above-address2" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 2' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-9'></div><div class='col-sm-3'><div style='height:40px;overflow:auto;' name='message' id='informal_letter-date" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Date' cols='200' rows='100'></div></div></div><div class='row'><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='informal_letter-start" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Dear ABC' cols='200' rows='100'></div></div></div><div class='mt-3 form-group'><div style='height:200px;overflow: auto; ' name='message' id='informal_letter-body" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Type your message here...' cols='200' rows='100'></div></div><div class='row'><div class='col-sm-8'></div> <div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='informal_letter-yours" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Yours obediently,'  cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-8'></div> <div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='informal_letter-name" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='your name'  cols='200' rows='100'></div></div></div><div class='row'><div class='col-sm-4'><label style='font-weight:bold;'>Address on the envelope</label></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='informal_letter-envelope1" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Envelope address line 1' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='informal_letter-envelope2" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Envelope address line 2' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='informal_letter-envelope3" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Envelope address line 3' cols='200' rows='100'></div></div></div>&nbsp;</div>";
                            informal_letter_count++;
                            numbering++;
                        }
                    }

                    if ($("input[name='informal_letter_type'][value='informal_letter_Roman informal_letters']").prop("checked")) {
                        document.getElementById("informal_letter_getvalue").style.display = "block";
                        for (i = 0; i < informal_letter_questions; i++) {
                            var res = integer_to_roman(i + 1)
                            informal_letter_container.innerHTML = informal_letter_container.innerHTML +
                                "&nbsp;<div id='informal_letter_" + informal_letter_count + "'><div class='row'><div class='col-sm-1'><label style='font-weight:bold;'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='informal_letter-question" + informal_letter_count + "'contenteditable='true' data-placeholder='Question " + (informal_letter_count + 1) + "' ></div></div><div class='col-sm-1'><label style='font-weight:bold;'>" + each_informal_letter_mark + " mark</label></div></div>&nbsp;<div class='row'><div class='col-sm-9'></div><div class='col-sm-3'><div style='height:40px;overflow:auto;' name='message' id='informal_letter-above-address1" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 1' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-9'></div><div class='col-sm-3'><div style='height:40px;overflow:auto;' name='message' id='informal_letter-above-address2" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 2' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-9'></div><div class='col-sm-3'><div style='height:40px;overflow:auto;' name='message' id='informal_letter-date" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Date' cols='200' rows='100'></div></div></div><div class='row'><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='informal_letter-start" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Dear ABC' cols='200' rows='100'></div></div></div><div class='mt-3 form-group'><div style='height:200px;overflow: auto; ' name='message' id='informal_letter-body" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Type your message here...' cols='200' rows='100'></div></div><div class='row'><div class='col-sm-8'></div> <div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='informal_letter-yours" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Yours obediently,'  cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-8'></div> <div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='informal_letter-name" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='your name'  cols='200' rows='100'></div></div></div><div class='row'><div class='col-sm-4'><label style='font-weight:bold;'>Address on the envelope</label></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='informal_letter-envelope1" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Envelope address line 1' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='informal_letter-envelope2" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Envelope address line 2' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='informal_letter-envelope3" + informal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Envelope address line 3' cols='200' rows='100'></div></div></div>&nbsp;</div>";
                            informal_letter_count++;
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
    } else {
        alert("Please enter the marks")
    }
}



function informal_letter_getvalues() {
    var informal_letter_question = {};
    var dateArr = [];
    var quesArr = [];
    var startArr = [];
    var bodyArr = [];
    var yoursArr = [];
    var nameArr = [];
    for (i = 0; i < informal_letter_questions; i++) {
        var informal_letter_above_addr = [];
        var informal_letter_envelope = [];
        var informal_letter_above_addr_place = [];
        var informal_letter_envlope_arr = [];

        var informal_letter_ques = document.getElementById('informal_letter-question' + i).textContent;
        informal_letter_above_addr.push(document.getElementById('informal_letter-above-address1' + i).textContent);
        informal_letter_above_addr.push(document.getElementById('informal_letter-above-address2' + i).textContent);
        var informal_letter_above_addr_date = document.getElementById('informal_letter-date' + i).textContent;
        var informal_letter_start = document.getElementById('informal_letter-start' + i).textContent;
        var informal_letter_body = document.getElementById('informal_letter-body' + i).textContent;
        var informal_letter_yours = document.getElementById('informal_letter-yours' + i).textContent;
        var informal_letter_name = document.getElementById('informal_letter-name' + i).textContent;
        informal_letter_envelope.push(document.getElementById('informal_letter-envelope1' + i).textContent);
        informal_letter_envelope.push(document.getElementById('informal_letter-envelope2' + i).textContent);
        informal_letter_envelope.push(document.getElementById('informal_letter-envelope3' + i).textContent);

        quesArr.push(informal_letter_ques);
        dateArr.push(informal_letter_above_addr_date);
        startArr.push(informal_letter_start);
        bodyArr.push(informal_letter_body);
        yoursArr.push(informal_letter_yours);
        nameArr.push(informal_letter_name);
        informal_letter_above_addr_place = informal_letter_above_addr.filter(function (e) { return e });

        informal_letter_envlope_arr = informal_letter_envelope.filter(function (e) { return e });


        if ($("input[name='informal_letter_type'][value='informal_letter_Numbers']").prop("checked")) {
            var start_num = informal_letter_st;
            informal_letter_question[parseInt(start_num) + i] = {
                "question": informal_letter_ques,
                "type":"LETTER",
                "place": informal_letter_above_addr_place,
                "date": informal_letter_above_addr_date,
                "start": informal_letter_start,
                "informal_letter-body": informal_letter_body,
                "yours": informal_letter_yours,
                "name": informal_letter_name,
                "envelope": informal_letter_envlope_arr,
                "quotedWords": null,
                "quoteType": null,
                "options": null
            };
        }
 
        if ($("input[name='informal_letter_type'][value='informal_letter_Roman informal_letters']").prop("checked")) {
            var roman = integer_to_roman(i + 1);
            informal_letter_question[roman] = {
                "question": informal_letter_ques,
                "type":"LETTER",
                "place": informal_letter_above_addr_place,
                "date": informal_letter_above_addr_date,
                "start": informal_letter_start,
                "informal_letter-body": informal_letter_body,
                "yours": informal_letter_yours,
                "name": informal_letter_name,
                "envelope": informal_letter_envlope_arr,
                "quotedWords": null,
                "quoteType": null,
                "options": null
            };
        }
        if ($("input[name='informal_letter_type'][value='informal_letter_Alphabets']").prop("checked")) {
            var a = 97;
            var alpha = String.fromCharCode(a + i);
            informal_letter_question[alpha] = {
                "question": informal_letter_ques,
                "type":"LETTER",
                "place": informal_letter_above_addr_place,
                "date": informal_letter_above_addr_date,
                "start": informal_letter_start,
                "informal_letter-body": informal_letter_body,
                "yours": informal_letter_yours,
                "name": informal_letter_name,
                "envelope": informal_letter_envlope_arr,
                "quotedWords": null,
                "quoteType": null,
                "options": null
            };
        }
    }
    if (count(quesArr) == informal_letter_questions && count(startArr) == informal_letter_questions && count(nameArr) == informal_letter_questions && count(yoursArr) == informal_letter_questions && count(dateArr) == informal_letter_questions) {
        var partno = "";

        for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
            console.log("retrived " + question_types[v]);
            var partarr = question_types[v];
            for (var h = 0; h < partarr.length; h++) {
                if ("Letter writing ( Informal )" == partarr[h]) {
                    partno = v - s_sec;
                    break;
                }
            }
        }

        con_no = parseInt(informal_letter_head_no) + 1;

        item_informal_letter[informal_letter_head_no] = {
            'heading': informal_letter_heading,
            'marks': informal_letter_marks,
            "type": "INFORMAL",
            "questions": informal_letter_question,
            "quotedWords": null,
            "quoteType": null,
            "options": null
        }

        // for (let key in informal_letter_question) {
        //     item_informal_letter[informal_letter_head_no][key] = informal_letter_question[key]
        // }
        obj_informal_letter = {
            'user': reg_teacher,
            'heading': informal_letter_heading,
            'marks': informal_letter_marks,
            "type": "INFORMAL",
            "questions": informal_letter_question,
            "quotedWords": null,
            "quoteType": null,
            "options": null
        }

        // for (let key in informal_letter_question) {
        //     obj_informal_letter[key] = informal_letter_question[key]
        // }

        console.log(JSON.stringify(item_informal_letter, null, '\t'))
        console.log(JSON.stringify(obj_informal_letter, null, '\t'))
        // createInformalLetter(JSON.stringify(obj_informal_letter, null, '\t'))
        alert('letter writing(Informal) is saved successfully');
        document.getElementById('informal_letter_getvalue').value = 'Saved!';
        if (item_informal_letter != {}) {
            if (part1.hasOwnProperty("part " + partno)) {
                var temp_item = part1["part " + partno];
                part1["part " + partno] = { ...temp_item, ...item_informal_letter };
            }
            else {
                part1["part " + partno] = item_informal_letter;
            }
            item_informal_letter = {};
        }
    }
    else {
        alert("Please enter all the fields")
    }
}

function informal_letter_getResults(elem) {
    elem.checked && elem.value == "informal_letter_Numbers" ? $("#informal_letter_dvtext").show() : $("#informal_letter_dvtext").hide();
};

function count(array) {
    var c = 0;
    for (i in array) // in returns key, not object
        if (array[i] != "")
            c++;

    return c;
}