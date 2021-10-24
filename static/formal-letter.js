var formal_letter_heading = '';
var formal_letter_questions = 0;
var formal_letter_total_marks = 0;
var formal_letter_head_no = 0;
var formal_letter_container = "";
var formal_letter_start_no = 0;
var each_formal_letter_mark = 0;
var formal_letter_num_question = 0;
var formal_letter_marks = 0;
var formal_letter_count = 0;
var formal_letter_st = 0;
var formal_letter_n = 0;


function letter_addquestions() {
    if (formal_letter_n > 0) {
        $("#letter_a").empty();
        formal_letter_count = 0;
    }
    formal_letter_n++;
    formal_letter_questions = document.getElementById('letter-num-question').value;
    formal_letter_heading = document.getElementById('letter_heading').value;
    formal_letter_total_marks = document.getElementById('letter-marks').value;
    formal_letter_head_no = document.getElementById('letter-heading-number').value;
    formal_letter_container = document.getElementById("letter_a");
    formal_letter_start_no = document.getElementById("letter_starting-number").value;
    each_formal_letter_mark = printEachMark(formal_letter_heading, formal_letter_total_marks, formal_letter_questions)
    formal_letter_num_question = printNumQuestions(formal_letter_heading, formal_letter_questions)
    formal_letter_marks = formal_letter_num_question + " x " + each_formal_letter_mark + " = " + formal_letter_total_marks
    formal_letter_st = formal_letter_start_no;
    if (formal_letter_total_marks != 0) {
        if (formal_letter_heading != "") {
            if ($("input[name=letter_type]").is(":checked")) {
                if (formal_letter_questions != 0) {
                    if ($("input[name='letter_type'][value='letter_Numbers']").prop("checked")) {
                        if (formal_letter_start_no != 0) {
                            document.getElementById("letter_getvalue").style.display = "block";
                            for (i = 0; i < formal_letter_questions; i++) {
                                formal_letter_container.innerHTML = formal_letter_container.innerHTML +
                                    "&nbsp;<div id='formal_letter_" + formal_letter_count + "'><div class='row'><div class='col-sm-1'><label style='font-weight:bold;'>" + formal_letter_start_no + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='formal_letter-question" + formal_letter_count + "'contenteditable='true' data-placeholder='Question " + (formal_letter_count + 1) + "' ></div></div><div class='col-sm-1'><label style='font-weight:bold;'>" + each_formal_letter_mark + " mark</label></div></div>&nbsp;<div class='row'><div class='col-sm-1'><label style='font-weight:bold;'>From</label></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-from-address1" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 1' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-from-address2" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 2' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-from-address3" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 3' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-from-address4" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 4' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><label style='font-weight:bold;'>To</label></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-to-address1" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 1' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-to-address2" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 2' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-to-address3" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 3' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-to-address4" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 4' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><label style='font-weight:bold;'>Respected sir/madam,</label></div></div>&nbsp;<div class='row'><div class='col-sm-1'></div><div class='col-sm-1'><label style='font-weight:bold;'>Sub:</label></div><div class='col-sm-10'><div style='height:40px;overflow: auto; ' name='message' id='formal_letter-subject" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Type the subject here...' cols='200' rows='100'></div></div></div></div><div class='mt-3 form-group'><div style='height:200px;overflow: auto; ' name='message' id='formal_letter-body" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Type your message here...' cols='200' rows='100'></div></div><div class='row'><div class='col-sm-1'><label style='font-weight:bold;'>Place:</label></div><div class='col-sm-2'><div style='height:40px;overflow: auto; ' name='message' id='formal_letter-place" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Place'  cols='200' rows='100'></div></div><div class='col-sm-5'></div><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='formal_letter-yours" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Yours obediently,'  cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-1'><label style='font-weight:bold;'>Date:</label></div><div class='col-sm-2'><div style='height:40px;overflow: auto;' name='message' id='formal_letter-date" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Date'  cols='200' rows='100'></div></div><div class='col-sm-5'></div><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='formal_letter-name" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='your name'  cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><label style='font-weight:bold;'>Address on the envelope</label></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='formal_letter-envelope1" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Envelope address line 1' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='formal_letter-envelope2" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Envelope address line 2' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='formal_letter-envelope3" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Envelope address line 3' cols='200' rows='100'></div></div></div>&nbsp;</div>";
                                formal_letter_count++;
                                formal_letter_start_no++;
                            }
                        } else {
                            alert("please enter the starting number")
                        }
                    }

                    if ($("input[name='letter_type'][value='letter_Alphabets']").prop("checked")) {
                        document.getElementById("letter_getvalue").style.display = "block";
                        var numbering = 97;
                        for (i = 0; i < formal_letter_questions; i++) {
                            var res = String.fromCharCode(numbering);
                            formal_letter_container.innerHTML = formal_letter_container.innerHTML +
                                "&nbsp;<div id='formal_letter_" + formal_letter_count + "'><div class='row'><div class='col-sm-1'><label style='font-weight:bold;'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='formal_letter-question" + formal_letter_count + "'contenteditable='true' data-placeholder='Question " + (formal_letter_count + 1) + "' ></div></div><div class='col-sm-1'><label style='font-weight:bold;'>" + each_formal_letter_mark + " mark</label></div></div>&nbsp;<div class='row'><div class='col-sm-1'><label style='font-weight:bold;'>From</label></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-from-address1" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 1' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-from-address2" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 2' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-from-address3" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 3' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-from-address4" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 4' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><label style='font-weight:bold;'>To</label></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-to-address1" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 1' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-to-address2" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 2' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-to-address3" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 3' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-to-address4" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 4' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><label style='font-weight:bold;'>Respected sir/madam,</label></div></div>&nbsp;<div class='row'><div class='col-sm-1'></div><div class='col-sm-1'><label style='font-weight:bold;'>Sub:</label></div><div class='col-sm-10'><div style='height:40px;overflow: auto; ' name='message' id='formal_letter-subject" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Type the subject here...' cols='200' rows='100'></div></div></div></div><div class='mt-3 form-group'><div style='height:200px;overflow: auto; ' name='message' id='formal_letter-body" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Type your message here...' cols='200' rows='100'></div></div><div class='row'><div class='col-sm-1'><label style='font-weight:bold;'>Place:</label></div><div class='col-sm-2'><div style='height:40px;overflow: auto; ' name='message' id='formal_letter-place" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Place'  cols='200' rows='100'></div></div><div class='col-sm-5'></div><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='formal_letter-yours" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Yours obediently,'  cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-1'><label style='font-weight:bold;'>Date:</label></div><div class='col-sm-2'><div style='height:40px;overflow: auto;' name='message' id='formal_letter-date" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Date'  cols='200' rows='100'></div></div><div class='col-sm-5'></div><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='formal_letter-name" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='your name'  cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><label style='font-weight:bold;'>Address on the envelope</label></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='formal_letter-envelope1" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Envelope address line 1' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='formal_letter-envelope2" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Envelope address line 2' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='formal_letter-envelope3" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Envelope address line 3' cols='200' rows='100'></div></div></div>&nbsp;</div>";
                            formal_letter_count++;
                            numbering++;
                        }
                    }

                    if ($("input[name='letter_type'][value='letter_Roman letters']").prop("checked")) {
                        document.getElementById("letter_getvalue").style.display = "block";
                        for (i = 0; i < formal_letter_questions; i++) {
                            var res = integer_to_roman(i + 1)
                            formal_letter_container.innerHTML = formal_letter_container.innerHTML +
                                "&nbsp;<div id='formal_letter_" + formal_letter_count + "'><div class='row'><div class='col-sm-1'><label style='font-weight:bold;'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='formal_letter-question" + formal_letter_count + "'contenteditable='true' data-placeholder='Question " + (formal_letter_count + 1) + "' ></div></div><div class='col-sm-1'><label style='font-weight:bold;'>" + each_formal_letter_mark + " mark</label></div></div>&nbsp;<div class='row'><div class='col-sm-1'><label style='font-weight:bold;'>From</label></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-from-address1" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 1' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-from-address2" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 2' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-from-address3" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 3' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-from-address4" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 4' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><label style='font-weight:bold;'>To</label></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-to-address1" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 1' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-to-address2" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 2' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-to-address3" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 3' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow:auto;' name='message' id='formal_letter-to-address4" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Address line 4' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><label style='font-weight:bold;'>Respected sir/madam,</label></div></div>&nbsp;<div class='row'><div class='col-sm-1'></div><div class='col-sm-1'><label style='font-weight:bold;'>Sub:</label></div><div class='col-sm-10'><div style='height:40px;overflow: auto; ' name='message' id='formal_letter-subject" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Type the subject here...' cols='200' rows='100'></div></div></div></div><div class='mt-3 form-group'><div style='height:200px;overflow: auto; ' name='message' id='formal_letter-body" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Type your message here...' cols='200' rows='100'></div></div><div class='row'><div class='col-sm-1'><label style='font-weight:bold;'>Place:</label></div><div class='col-sm-2'><div style='height:40px;overflow: auto; ' name='message' id='formal_letter-place" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Place'  cols='200' rows='100'></div></div><div class='col-sm-5'></div><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='formal_letter-yours" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Yours obediently,'  cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-1'><label style='font-weight:bold;'>Date:</label></div><div class='col-sm-2'><div style='height:40px;overflow: auto;' name='message' id='formal_letter-date" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Date'  cols='200' rows='100'></div></div><div class='col-sm-5'></div><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='formal_letter-name" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='your name'  cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><label style='font-weight:bold;'>Address on the envelope</label></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='formal_letter-envelope1" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Envelope address line 1' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='formal_letter-envelope2" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Envelope address line 2' cols='200' rows='100'></div></div></div>&nbsp;<div class='row'><div class='col-sm-4'><div style='height:40px;overflow: auto; ' name='message' id='formal_letter-envelope3" + formal_letter_count + "' class='form-control' contenteditable='true' data-placeholder='Envelope address line 3' cols='200' rows='100'></div></div></div>&nbsp;</div>";
                            formal_letter_count++;
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



function letter_getvalues() {
    var formal_letter_question = {};
    var dateArr = [];
    var quesArr = [];
    var bodyArr = [];
    var yoursArr = [];
    var nameArr = [];
    var subjectArr = [];
    var placeArr = [];
    for (i = 0; i < formal_letter_questions; i++) {
        var formal_letter_from_addr = [];
        var formal_letter_to_addr = [];
        var formal_letter_envelope = [];
        var formal_letter_envelope_arr = [];
        var formal_letter_fromArr = [];
        var formal_letter_toArr = [];

        var formal_letter_ques = document.getElementById('formal_letter-question' + i).textContent;
        formal_letter_from_addr.push(document.getElementById('formal_letter-from-address1' + i).textContent);
        formal_letter_from_addr.push(document.getElementById('formal_letter-from-address2' + i).textContent);
        formal_letter_from_addr.push(document.getElementById('formal_letter-from-address3' + i).textContent);
        formal_letter_from_addr.push(document.getElementById('formal_letter-from-address4' + i).textContent);
        formal_letter_to_addr.push(document.getElementById('formal_letter-to-address1' + i).textContent);
        formal_letter_to_addr.push(document.getElementById('formal_letter-to-address2' + i).textContent);
        formal_letter_to_addr.push(document.getElementById('formal_letter-to-address3' + i).textContent);
        formal_letter_to_addr.push(document.getElementById('formal_letter-to-address4' + i).textContent);
        var formal_letter_subject = document.getElementById('formal_letter-subject' + i).textContent;
        var formal_letter_body = document.getElementById('formal_letter-body' + i).textContent;
        var formal_letter_yours = document.getElementById('formal_letter-yours' + i).textContent;
        var formal_letter_name = document.getElementById('formal_letter-name' + i).textContent;
        var formal_letter_date = document.getElementById('formal_letter-date' + i).textContent;
        var formal_letter_place = document.getElementById('formal_letter-place' + i).textContent;
        formal_letter_envelope.push(document.getElementById('formal_letter-envelope1' + i).textContent);
        formal_letter_envelope.push(document.getElementById('formal_letter-envelope2' + i).textContent);
        formal_letter_envelope.push(document.getElementById('formal_letter-envelope3' + i).textContent);

        quesArr.push(formal_letter_ques);
        dateArr.push(formal_letter_date);
        subjectArr.push(formal_letter_subject);
        bodyArr.push(formal_letter_body);
        yoursArr.push(formal_letter_yours);
        nameArr.push(formal_letter_name);
        placeArr.push(formal_letter_place);

        formal_letter_envelope_arr = formal_letter_envelope.filter(function (e) { return e });
        formal_letter_fromArr = formal_letter_from_addr.filter(function (e) { return e });
        formal_letter_toArr = formal_letter_to_addr.filter(function (e) { return e });

        if ($("input[name='letter_type'][value='letter_Numbers']").prop("checked")) {
            var start_num = formal_letter_st;
            formal_letter_question[parseInt(start_num) + i] = {
                "question": formal_letter_ques,
                "type": "LETTER",
                "date": formal_letter_date,
                "place": formal_letter_place,
                "from-address": formal_letter_fromArr,
                "to-address": formal_letter_toArr,
                "subject": formal_letter_subject,
                "letter-body": formal_letter_body,
                "yours": formal_letter_yours,
                "name": formal_letter_name,
                "envelope": formal_letter_envelope_arr,
                "quotedWords": null,
                "quoteType": null,
                "options": null
            };
        }
            
        
       
        if ($("input[name='letter_type'][value='letter_Roman letters']").prop("checked")) {
            var roman = integer_to_roman(i + 1);
            formal_letter_question[roman] = {
                "question": formal_letter_ques,
                "type": "LETTER",
                "date": formal_letter_date,
                "place": formal_letter_place,
                "from-address": formal_letter_fromArr,
                "to-address": formal_letter_toArr,
                "subject": formal_letter_subject,
                "letter-body": formal_letter_body,
                "yours": formal_letter_yours,
                "name": formal_letter_name,
                "envelope": formal_letter_envelope_arr,
                "quotedWords": null,
                "quoteType": null,
                "options": null
            };
        }
        if ($("input[name='letter_type'][value='letter_Alphabets']").prop("checked")) {
            var a = 97;
            var alpha = String.fromCharCode(a + i);
            formal_letter_question[alpha] = {
                "question": formal_letter_ques,
                "type": "LETTER",
                "date": formal_letter_date,
                "place": formal_letter_place,
                "from-address": formal_letter_fromArr,
                "to-address": formal_letter_toArr,
                "subject": formal_letter_subject,
                "letter-body": formal_letter_body,
                "yours": formal_letter_yours,
                "name": formal_letter_name,
                "envelope": formal_letter_envelope_arr,
                "quotedWords": null,
                "quoteType": null,
                "options": null
            };
        }
    }
    if (count(quesArr) == formal_letter_questions && count(subjectArr) == formal_letter_questions && count(nameArr) == formal_letter_questions && count(yoursArr) == formal_letter_questions && count(placeArr) == formal_letter_questions && count(dateArr) == formal_letter_questions) {
        //     alert("number of questions"+formal_letter_questions);
        //     alert("ques arr"+count(quesArr));
        //    alert("start arr"+count(startArr));
        //    alert("date arr"+count(dateArr));
        //    alert("name arr"+count(nameArr));
        //    alert("yours arr"+count(yoursArr));
        var partno = "";
        

        for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
            console.log("retrived " + question_types[v]);
            var partarr = question_types[v];
            for (var h = 0; h < partarr.length; h++) {
                if ("Letter writing ( Formal )" == partarr[h]) {
                    partno = v - s_sec;
                    break;
                }
            }
        }

        con_no = parseInt(formal_letter_head_no) + 1;

        item_formal_letter[formal_letter_head_no] = {
            'heading': formal_letter_heading,
            'marks': formal_letter_marks,
            "type": "FORMAL",
            "questions":formal_letter_question,
            "quotedWords": null,
            "quoteType": null,
            "options": null
        }

       
        obj_formal_letter = {
            'user': reg_teacher,
            'heading': formal_letter_heading,
            'marks': formal_letter_marks,
            "type": "FORMAL",
            "questions":formal_letter_question,
            "quotedWords": null,
            "quoteType": null,
            "options": null
        }

       

        console.log(JSON.stringify(item_formal_letter, null, '\t'))
        console.log(JSON.stringify(obj_formal_letter, null, '\t'))
        createFormalLetter(JSON.stringify(obj_formal_letter, null, '\t'))
        alert('letter writing(Formal) is saved successfully');
        document.getElementById('letter_getvalue').value = 'Saved!';
        if (item_formal_letter != {}) {
            if (part1.hasOwnProperty("part " + partno)) {
                var temp_item = part1["part " + partno];
                part1["part " + partno] = { ...temp_item, ...item_formal_letter };
            }
            else {
                part1["part " + partno] = item_formal_letter;
            }
            item_formal_letter = {};
        }
    }
    else {
        alert("Please enter all the fields")
    }
}

function letter_getResults(elem) {
    elem.checked && elem.value == "letter_Numbers" ? $("#letter_dvtext").show() : $("#letter_dvtext").hide();
};

function count(array) {
    var c = 0;
    for (i in array) // in returns key, not object
        if (array[i] != "")
            c++;

    return c;
}
