var ans_vocab_opt_obj = [];
var ans_vocab_flag = [];
// var fileOutput = [];


// var fileOutput = [];
function ans_vocab_add_field() {
    // var ans_vocab_head = document.getElementById('ans_vocab-heading').textContent;
    // var ans_vocab_Mark = document.getElementById('ans_vocab-marks').textContent;
    var ans_vocab_quest = document.getElementById('ans_vocab-question' + (ans_vocab_count - 1)).textContent;
    var ans_vocab_ques_no = document.getElementById('ans_vocab_quesno' + (ans_vocab_count - 1)).textContent;
    // if (ans_vocab_head != "") {
    //     if (ans_vocab_Mark != 0) {
    if (ans_vocab_ques_no != 0) {
        if (ans_vocab_quest != "") {
            var n = ans_vocab_check(ans_vocab_count - 1)
            if (n == undefined) {
                document.getElementById('ans_vocab_addButton' + (ans_vocab_count - 1)).style.display = "none"
                document.getElementById('ans_vocab_removeButton' + (ans_vocab_count - 1)).style.display = "none"
                container.innerHTML = container.innerHTML +
                    "<div id='input_text" + ans_vocab_count + "'><div class='form-group'><label for='question no' style='font-weight: bold;'>Question No.</label><div style='height:40px;overflow:auto;' class='form-control input_text' id='ans_vocab_quesno" + ans_vocab_count + "'contenteditable='true' data-placeholder='Question No.' cols='200' rows='100'></div></div><div class='form-group'><label for='heading' style='font-weight: bold;'>Heading</label><div style='height:50px;' class='form-control input_text' id='ans_vocab-heading" + ans_vocab_count + "'contenteditable='true' data-placeholder='Type your heading here...' cols='200' rows='100'></div>&nbsp;<div class='form-group'><label for='question' style='font-weight: bold;'>Question</label><div style='height:50px;' class='form-control input_text' onkeyup='ans_vocab_Function(" + ans_vocab_count + ")' id='ans_vocab-question" + ans_vocab_count + "'contenteditable='true' data-placeholder='Type your question here...' cols='200' rows='100'></div>&nbsp;<div class='form-group'><label for='highlighted word' style='font-weight: bold;'>Highlighted word</label><div style='height:50px;' class='form-control input_text' id='ans_vocab-highlighted" + ans_vocab_count + "'contenteditable='true' data-placeholder='Highlighted word' onblur='ans_vocab_highlight(" + ans_vocab_count + ")' onfocus='ans_vocab_focus(" + ans_vocab_count + ")' cols='200' rows='100'></div>&nbsp;<div class='row'><div class='col-sm-2'><input style='display:none;' type='button' id='ans_vocab_myCheck1" + ans_vocab_count + "' class = 'btn btn-danger' name='ans_vocab' value='Remove options' onclick='ans_vocab_removeFunction(" + ans_vocab_count + ")'>&nbsp;</div><div class='col-sm-8'><label></label></div><div class='col-sm-2'><input type='button' id='ans_vocab_myCheck" + ans_vocab_count + "' class = 'btn btn-primary' name='ans_vocab' value='Add options' onclick='ans_vocab_myFunction(" + ans_vocab_count + ")'>&nbsp;</div><div class='col-sm-2'><input type='button' id='ans_vocab_img" + ans_vocab_count + "' class = 'btn btn-primary' name='ans_vocab' value='Add Image' onclick='image_show(" + ans_vocab_count + ")'>&nbsp;</div></div><div id='ans_vocab_Check" + ans_vocab_count + "'></div>&nbsp;<div id='ans_vocab_imgshow" + ans_vocab_count + "'></div>&nbsp;<div class='row'><div class='col-sm-10'><label></label></div><div class='col-sm-1'><input type='button' value='+' class='form-control btn btn-primary' onclick='ans_vocab_add_field();' id='ans_vocab_addButton" + ans_vocab_count + "'></div><div class ='col-sm-1'><input type='button' class='form-control btn btn-danger' value='-' id='ans_vocab_removeButton" + ans_vocab_count + "' onclick=ans_vocab_remove_field('input_text" + ans_vocab_count + "');></div></div></div></div>";
                ans_vocab_count++;
            }
            if (n == true) {
                document.getElementById('ans_vocab_addButton' + (ans_vocab_count - 1)).style.display = "none"
                document.getElementById('ans_vocab_removeButton' + (ans_vocab_count - 1)).style.display = "none"
                container.innerHTML = container.innerHTML +
                    "<div id='input_text" + ans_vocab_count + "'><div class='form-group'><label for='question no' style='font-weight: bold;'>Question No.</label><div style='height:40px;overflow:auto;' class='form-control input_text' id='ans_vocab_quesno" + ans_vocab_count + "'contenteditable='true' data-placeholder='Question No.' cols='200' rows='100'></div></div><div class='form-group'><label for='heading' style='font-weight: bold;'>Heading</label><div style='height:50px;' class='form-control input_text' id='ans_vocab-heading" + ans_vocab_count + "'contenteditable='true' data-placeholder='Type your heading here...' cols='200' rows='100'></div>&nbsp;<div class='form-group'><label for='question' style='font-weight: bold;'>Question</label><div style='height:50px;' class='form-control input_text' onkeyup='ans_vocab_Function(" + ans_vocab_count + ")' id='ans_vocab-question" + ans_vocab_count + "'contenteditable='true' data-placeholder='Type your question here...' cols='200' rows='100'></div>&nbsp;<div class='form-group'><label for='highlighted word' style='font-weight: bold;'>Highlighted word</label><div style='height:50px;' class='form-control input_text' id='ans_vocab-highlighted" + ans_vocab_count + "'contenteditable='true' data-placeholder='Highlighted word' onblur='ans_vocab_highlight(" + ans_vocab_count + ")' onfocus='ans_vocab_focus(" + ans_vocab_count + ")' cols='200' rows='100'></div>&nbsp;<div class='row'><div class='col-sm-2'><input style='display:none;' type='button' id='ans_vocab_myCheck1" + ans_vocab_count + "' class = 'btn btn-danger' name='ans_vocab' value='Remove options' onclick='ans_vocab_removeFunction(" + ans_vocab_count + ")'>&nbsp;</div><div class='col-sm-8'><label></label></div><div class='col-sm-2'><input type='button' id='ans_vocab_myCheck" + ans_vocab_count + "' class = 'btn btn-primary' name='ans_vocab' value='Add options' onclick='ans_vocab_myFunction(" + ans_vocab_count + ")'>&nbsp;</div></div></div><div id='ans_vocab_Check" + ans_vocab_count + "'></div>&nbsp;<div class='row'><div class='col-sm-10'><label></label></div><div class='col-sm-1'><input type='button' value='+' class='form-control btn btn-primary' onclick='ans_vocab_add_field();' id='ans_vocab_addButton" + ans_vocab_count + "'></div><div class ='col-sm-1'><input type='button' class='form-control btn btn-danger' value='-' id='ans_vocab_removeButton" + ans_vocab_count + "' onclick=ans_vocab_remove_field('input_text" + ans_vocab_count + "');></div></div></div></div>";
                ans_vocab_count++;
            }
            if (n == false) {
                alert("Please enter all the options")
            }
        }
        else {
            alert("Please enter question")
        }
    }
    else {
        alert("Please enter the question number")
    }
    //     }
    //     else {
    //         alert("Please enter total marks")
    //     }
    // } else {
    //     alert("Please enter the heading")
    // }
}

function ans_vocab_myFunction(ans_vocab_counter) {
    document.getElementById('ans_vocab_myCheck' + ans_vocab_counter).style.display = "none"
    checkBox = document.getElementById('ans_vocab_myCheck' + ans_vocab_counter);
    var table = document.getElementById("ans_vocab_Check" + ans_vocab_counter);
    table.innerHTML += '<div class="row"><div class="col-sm-2"><div style="height:40px;" class="form-control " id="ans_vocab_noofoption' + ans_vocab_counter + '" contenteditable="true" data-placeholder="No.of options" cols="100" rows="30"></div></div>&nbsp;<div class="col-sm-2"><input type="button" value="Create Options" class="btn btn-primary" id="ans_vocab_addOption' + ans_vocab_counter + '" onclick="ans_vocab_addOption(' + ans_vocab_counter + ')"></div></div><div id="ans_vocab_option' + ans_vocab_counter + '"></div><br>';
}

function ans_vocab_removeFunction(ans_vocab_counter) {
    document.getElementById('ans_vocab_myCheck' + ans_vocab_counter).style.display = "block"
    var table = document.getElementById("ans_vocab_Check" + ans_vocab_counter);
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}

function ans_vocab_addOption(ans_vocab_counter) {
    ans_vocab_flag.push(ans_vocab_counter);
    no_option = document.getElementById("ans_vocab_noofoption" + ans_vocab_counter).textContent;
    numbering = 97;

    if (no_option != 0) {
        for (i = 0; i < no_option; i++) {
            var res = String.fromCharCode(numbering);
            var table = document.getElementById("ans_vocab_option" + ans_vocab_counter);
            if (i == 0) {
                table.innerHTML += '<br><br>';
            }
            table.innerHTML += '<div class="row"><div class="col-sm-4"><div style="height:40px;" class="form-control" id="ans_vocab_options' + opt + '" data-placeholder="Option - ' + res + '" contenteditable="true" cols="100" rows="30"></div></div></div>&nbsp;';
            numbering++;
            opt++;
        }
    }
    else {
        alert("enter all number of options");
    }
}

function ans_vocab_remove_field(id) {
    var myobj = document.getElementById(id);
    myobj.remove();
    ans_vocab_count--;
    if (ans_vocab_count != 0) {
        document.getElementById("addButton").style.display = "none";
    }
}

function ans_vocab_check(j) {
    document.getElementById('ans_vocab_myCheck' + j).addEventListener("click", () => {
        ans_vocab_count_opt[j] = parseInt(document.getElementById('ans_vocab_noofoption' + j).textContent);
        if (ans_vocab_count_opt[j] == 0) {
            return false;
        }
        else {
            for (i = 0; i < ans_vocab_count_opt[j]; i++) {
                ans_vocab_option[ans_vocab_choice] = document.getElementById('ans_vocab_options' + ans_vocab_choice).textContent;
                console.log("option : " + ans_vocab_option[ans_vocab_choice])
                ans_vocab_choice++;
            }
            return true;
        }
    });
}



function numbOption(i) {
    var res = document.getElementById('ans_vocab_noofoption' + i).textContent;
    if (res == "") {
        return false;
    } else {
        return true;
    }
}

function ans_vocab_save() {
    ans_vocab_cnnt = 0;
    ans_vocab_ch = 0;
    var ans_vocab_questions = {}
    var ans_vocab_ques_arr = [];
    var ans_vocab_option = [];
    ans_vocab_count_opt = [];
    ans_vocab_opt_arr = [];
    var ans_vocab_choice = 0;

    for (j = 0; j < ans_vocab_count; j++) {
        document.getElementById('ans_vocab_myCheck' + j).addEventListener("click", () => {
            ans_vocab_count_opt[j] = parseInt(document.getElementById('ans_vocab_noofoption' + j).textContent);
            if (ans_vocab_count_opt[j] == 0) {
                alert("Please enter number of options");
            }
            else {
                for (i = 0; i < ans_vocab_count_opt[j]; i++) {
                    ans_vocab_option[ans_vocab_choice] = document.getElementById('ans_vocab_options' + ans_vocab_choice).textContent;
                    console.log("option : " + ans_vocab_option[ans_vocab_choice])
                    ans_vocab_choice++;
                }
            }
        });
    }




    for (i = 0; i < ans_vocab_count; i++) {
        var inData = document.getElementById('ans_vocab-question' + i).textContent;
        if (inData != "") {
            ans_vocab_ques_arr.push(inData);
        }
        var ans_vocab_ans_head = document.getElementById('ans_vocab-heading' + i).textContent;
        var ans_vocab_high = document.getElementById('ans_vocab-highlighted' + i).textContent;
        var ans_vocab_quesno = document.getElementById('ans_vocab_quesno' + i).textContent;
        console.log(ans_vocab_flag)


        // if(fileOutput.indexOf(i+1) !== -1){
        //     fileData = fileOutput[i + 1];
        //     console.log(fileOutput[i+1]);
        // }


        if (ans_vocab_flag.indexOf(i) !== -1) {
            // alert("if part")
            ans_vocab_count_opt[i] = parseInt(document.getElementById('ans_vocab_noofoption' + i).textContent);
            ans_vocab_cnnt += ans_vocab_count_opt[i];

            for (j = 0; j < ans_vocab_count_opt[i]; j++) {
                ans_vocab_option[ans_vocab_ch] = document.getElementById('ans_vocab_options' + ans_vocab_ch).textContent;
                if (ans_vocab_option[ans_vocab_ch] == 0) {
                    alert("Please enter the option which you selected");
                    break;
                }
                else {
                    console.log("Options : " + ans_vocab_option[ans_vocab_ch]);
                    ans_vocab_opt_obj.push(ans_vocab_option[ans_vocab_ch]);
                    ans_vocab_opt_arr.push(ans_vocab_option[ans_vocab_ch]);
                    ans_vocab_ch++;
                }
            }

            var fileData = fileOutput[i];
            if (document.getElementById('uploadImage' + (i + 1)) != null) {

                if (fileData == undefined) {
                    alert("Please select image");
                }
                else {



                    if (fileData != null) {
                        if (ans_vocab_ans_head != "" && ans_vocab_high != "") {
                            ans_vocab_questions[ans_vocab_quesno] = { "heading": ans_vocab_ans_head, "type": "MCQSL", "question": inData, "quotedWords": ans_vocab_high, "quoteType": "underline", "options": ans_vocab_opt_obj, "image": fileData };
                        }
                        else if (ans_vocab_ans_head != "" && ans_vocab_high == "") {
                            ans_vocab_questions[ans_vocab_quesno] = { "heading": ans_vocab_ans_head, "type": "MCQSL", "question": inData, "quotedWords": null, "quoteType": null, "options": ans_vocab_opt_obj, "image": fileData };
                        }
                        else if (ans_vocab_ans_head == "" && ans_vocab_high != "") {
                            ans_vocab_questions[ans_vocab_quesno] = { "heading": null, "type": "MCQSL", "question": inData, "quotedWords": ans_vocab_high, "quoteType": "underline", "options": ans_vocab_opt_obj, "image": fileData };
                        }
                        else {
                            ans_vocab_questions[ans_vocab_quesno] = { "heading": null, "type": "MCQSL", "question": inData, "quotedWords": null, "quoteType": null, "options": ans_vocab_opt_obj, "image": fileData };
                        }
                        ans_vocab_opt_obj = [];
                    }
                    else {
                        if (ans_vocab_ans_head != "" && ans_vocab_high != "") {
                            ans_vocab_questions[ans_vocab_quesno] = { "heading": ans_vocab_ans_head, "type": "MCQSL", "question": inData, "quotedWords": ans_vocab_high, "quoteType": "underline", "options": ans_vocab_opt_obj, "image": null };
                        }
                        else if (ans_vocab_ans_head != "" && ans_vocab_high == "") {
                            ans_vocab_questions[ans_vocab_quesno] = { "heading": ans_vocab_ans_head, "type": "MCQSL", "question": inData, "quotedWords": null, "quoteType": null, "options": ans_vocab_opt_obj, "image": null };
                        }
                        else if (ans_vocab_ans_head == "" && ans_vocab_high != "") {
                            ans_vocab_questions[ans_vocab_quesno] = { "heading": null, "type": "MCQSL", "question": inData, "quotedWords": ans_vocab_high, "quoteType": "underline", "options": ans_vocab_opt_obj, "image": null };
                        }
                        else {
                            ans_vocab_questions[ans_vocab_quesno] = { "heading": null, "type": "MCQSL", "question": inData, "quotedWords": null, "quoteType": null, "options": ans_vocab_opt_obj, "image": null };
                        }
                        ans_vocab_opt_obj = [];
                    }
                }
            }
            else {
                if (fileData != null) {
                    if (ans_vocab_ans_head != "" && ans_vocab_high != "") {
                        ans_vocab_questions[ans_vocab_quesno] = { "heading": ans_vocab_ans_head, "type": "MCQSL", "question": inData, "quotedWords": ans_vocab_high, "quoteType": "underline", "options": ans_vocab_opt_obj, "image": fileData };
                    }
                    else if (ans_vocab_ans_head != "" && ans_vocab_high == "") {
                        ans_vocab_questions[ans_vocab_quesno] = { "heading": ans_vocab_ans_head, "type": "MCQSL", "question": inData, "quotedWords": null, "quoteType": null, "options": ans_vocab_opt_obj, "image": fileData };
                    }
                    else if (ans_vocab_ans_head == "" && ans_vocab_high != "") {
                        ans_vocab_questions[ans_vocab_quesno] = { "heading": null, "type": "MCQSL", "question": inData, "quotedWords": ans_vocab_high, "quoteType": "underline", "options": ans_vocab_opt_obj, "image": fileData };
                    }
                    else {
                        ans_vocab_questions[ans_vocab_quesno] = { "heading": null, "type": "MCQSL", "question": inData, "quotedWords": null, "quoteType": null, "options": ans_vocab_opt_obj, "image": fileData };
                    }
                    ans_vocab_opt_obj = [];
                }
                else {
                    if (ans_vocab_ans_head != "" && ans_vocab_high != "") {
                        ans_vocab_questions[ans_vocab_quesno] = { "heading": ans_vocab_ans_head, "type": "MCQSL", "question": inData, "quotedWords": ans_vocab_high, "quoteType": "underline", "options": ans_vocab_opt_obj, "image": null };
                    }
                    else if (ans_vocab_ans_head != "" && ans_vocab_high == "") {
                        ans_vocab_questions[ans_vocab_quesno] = { "heading": ans_vocab_ans_head, "type": "MCQSL", "question": inData, "quotedWords": null, "quoteType": null, "options": ans_vocab_opt_obj, "image": null };
                    }
                    else if (ans_vocab_ans_head == "" && ans_vocab_high != "") {
                        ans_vocab_questions[ans_vocab_quesno] = { "heading": null, "type": "MCQSL", "question": inData, "quotedWords": ans_vocab_high, "quoteType": "underline", "options": ans_vocab_opt_obj, "image": null };
                    }
                    else {
                        ans_vocab_questions[ans_vocab_quesno] = { "heading": null, "type": "MCQSL", "question": inData, "quotedWords": null, "quoteType": null, "options": ans_vocab_opt_obj, "image": null };
                    }
                    ans_vocab_opt_obj = [];
                }
            }



        }
        else {
            var fileData = fileOutput[i];
            if (document.getElementById('uploadImage' + (i + 1)) != null) {

                if (fileData == undefined) {
                    alert("Please select image");
                }
                else {
                    if (fileData != null) {
                        if (ans_vocab_ans_head != "" && ans_vocab_high != "") {
                            ans_vocab_questions[ans_vocab_quesno] = { "heading": ans_vocab_ans_head, "type": "MCQN", "question": inData, "quotedWords": ans_vocab_high, "quoteType": "underline", "options": null, "image": fileData };
                        }
                        else if (ans_vocab_ans_head != "" && ans_vocab_high == "") {
                            ans_vocab_questions[ans_vocab_quesno] = { "heading": ans_vocab_ans_head, "type": "MCQN", "question": inData, "quotedWords": null, "quoteType": null, "options": null, "image": fileData };
                        }
                        else if (ans_vocab_ans_head == "" && ans_vocab_high != "") {
                            ans_vocab_questions[ans_vocab_quesno] = { "heading": null, "type": "MCQN", "question": inData, "quotedWords": ans_vocab_high, "quoteType": "underline", "options": null, "image": fileData };
                        }
                        else {
                            ans_vocab_questions[ans_vocab_quesno] = { "heading": null, "type": "MCQN", "question": inData, "quotedWords": null, "quoteType": null, "options": null, "image": fileData };
                        }
                    }
                    else {
                        if (ans_vocab_ans_head != "" && ans_vocab_high != "") {
                            ans_vocab_questions[ans_vocab_quesno] = { "heading": ans_vocab_ans_head, "type": "MCQN", "question": inData, "quotedWords": ans_vocab_high, "quoteType": "underline", "options": null, "image": null };
                        }
                        else if (ans_vocab_ans_head != "" && ans_vocab_high == "") {
                            ans_vocab_questions[ans_vocab_quesno] = { "heading": ans_vocab_ans_head, "type": "MCQN", "question": inData, "quotedWords": null, "quoteType": null, "options": null, "image": null };
                        }
                        else if (ans_vocab_ans_head == "" && ans_vocab_high != "") {
                            ans_vocab_questions[ans_vocab_quesno] = { "heading": null, "type": "MCQN", "question": inData, "quotedWords": ans_vocab_high, "quoteType": "underline", "options": null, "image": null };
                        }
                        else {
                            ans_vocab_questions[ans_vocab_quesno] = { "heading": null, "type": "MCQN", "question": inData, "quotedWords": null, "quoteType": null, "options": null, "image": null };
                        }
                    }
                }

            }
            else {

                if (fileData != null) {
                    if (ans_vocab_ans_head != "" && ans_vocab_high != "") {
                        ans_vocab_questions[ans_vocab_quesno] = { "heading": ans_vocab_ans_head, "type": "MCQN", "question": inData, "quotedWords": ans_vocab_high, "quoteType": "underline", "options": null, "image": fileData };
                    }
                    else if (ans_vocab_ans_head != "" && ans_vocab_high == "") {
                        ans_vocab_questions[ans_vocab_quesno] = { "heading": ans_vocab_ans_head, "type": "MCQN", "question": inData, "quotedWords": null, "quoteType": null, "options": null, "image": fileData };
                    }
                    else if (ans_vocab_ans_head == "" && ans_vocab_high != "") {
                        ans_vocab_questions[ans_vocab_quesno] = { "heading": null, "type": "MCQN", "question": inData, "quotedWords": ans_vocab_high, "quoteType": "underline", "options": null, "image": fileData };
                    }
                    else {
                        ans_vocab_questions[ans_vocab_quesno] = { "heading": null, "type": "MCQN", "question": inData, "quotedWords": null, "quoteType": null, "options": null, "image": fileData };
                    }
                }
                else {
                    if (ans_vocab_ans_head != "" && ans_vocab_high != "") {
                        ans_vocab_questions[ans_vocab_quesno] = { "heading": ans_vocab_ans_head, "type": "MCQN", "question": inData, "quotedWords": ans_vocab_high, "quoteType": "underline", "options": null, "image": null };
                    }
                    else if (ans_vocab_ans_head != "" && ans_vocab_high == "") {
                        ans_vocab_questions[ans_vocab_quesno] = { "heading": ans_vocab_ans_head, "type": "MCQN", "question": inData, "quotedWords": null, "quoteType": null, "options": null, "image": null };
                    }
                    else if (ans_vocab_ans_head == "" && ans_vocab_high != "") {
                        ans_vocab_questions[ans_vocab_quesno] = { "heading": null, "type": "MCQN", "question": inData, "quotedWords": ans_vocab_high, "quoteType": "underline", "options": null, "image": null };
                    }
                    else {
                        ans_vocab_questions[ans_vocab_quesno] = { "heading": null, "type": "MCQN", "question": inData, "quotedWords": null, "quoteType": null, "options": null, "image": null };
                    }
                }
            }


        }
    }

    for (k = 0; k < ans_vocab_count; k++) {
        var q = ""
        var qno = ""
        q = document.getElementById('ans_vocab-question' + k).textContent;
        qno = document.getElementById('ans_vocab_quesno' + k).textContent;
        if (q == "" || qno == "") {
            alert("Please enter all the questions and question number")

            break;
        }

        else {
            if (k == (ans_vocab_count - 1)) {
                var ans_vocab_ques_item = {}

                for (let key in ans_vocab_questions) {
                    ans_vocab_ques_item[key] = ans_vocab_questions[key]
                }

                if (Object.keys(ans_vocab_questions).length !== 0 || Object.keys(ans_vocab_ques_item).length !== 0) {

                    // var postedAt = new Date();
                    // console.log("Posted at: " + postedAt)

                    var today = new Date();

                    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

                    var time = today.getHours() + ":" + today.getMinutes();

                    console.log(get24hTime(today))

                    var postedTime = get24hTime(time);

                    var postedDate = date



                    var assign_obj = {};
                    assign_obj = {
                        "user": user_id,
                        "subject": sub,
                        "mark": mark,
                        "section": sec.toUpperCase(),
                        "class": std,
                        "end-date": end_date,
                        "end-time": end_time,
                        "schoolname": schoolname,
                        "postedDate": postedDate,
                        "postedTime": postedTime
                    }

                    assign_obj = { ...assign_obj, ...ans_vocab_ques_item }
                    upload_assignments(JSON.stringify(assign_obj, null, '\t'));
                    alert("Assignment uploaded Successfully");
                    console.log(ans_vocab_ques_item)
                    console.log(ans_vocab_questions)
                    console.log(JSON.stringify(assign_obj, null, '\t'));

                }



            }
        }
    }

}


var text_ans_vocab = "";
function ans_vocab_Function(count) {
    text_ans_vocab = document.getElementById("ans_vocab-question" + count).textContent;
}
function ans_vocab_highlight(count) {
    var s = document.getElementById("ans_vocab-highlighted" + count).textContent;
    var a = text_ans_vocab.replace(s, '<u>' + s + '</u>');
    text_ans_vocab = a;
    document.getElementById("ans_vocab-question" + count).innerHTML = a;
}
function ans_vocab_focus(count) {
    event.preventDefault();
    var s = document.getElementById("ans_vocab-highlighted" + count).textContent;
    if (s == "" || s == null) {
    }
    else {
        var a = text_ans_vocab.replace('<u>' + s + '</u>', s);
        text_ans_vocab = a;
        document.getElementById("ans_vocab-question" + count).innerHTML = a;
    }
}

function ArrayToObject(arr) {
    var obj = {};
    for (var i = 1; i <= arr.length; i++) {
        obj[i] = arr[i - 1];
    }
    return obj
}

function image_show(ans_vocab_counter) {
    // document.getElementById('ans_vocab_imgshow' + ans_vocab_counter).style.display = "none";
    document.getElementById('ans_vocab_img' + ans_vocab_counter).style.display = "none";
    var img_table = document.getElementById("ans_vocab_imgshow" + ans_vocab_counter);
    img_table.innerHTML += '<div class="mt-3 form-group"><label style="font-weight: bold;">Image</label><table style="width:50%"><tr><th rowspan="2"><img id="uploadPreview' + ans_vocab_count + '" style="width: 300px; height: 250px;" /></th><th rowspan="2"><input id="uploadImage' + ans_vocab_count + '" type="file" onchange="encodeImageFileAsURL(this,' + ans_vocab_count + ')"/></th></tr></table><br></div>';


}

// function PreviewImage() {
//     var oFReader = new FileReader();
//     oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

//     oFReader.onload = function (oFREvent) {
//         document.getElementById("uploadPreview").src = oFREvent.target.result;
//     };
// };

function encodeImageFileAsURL(element, ans_vocab_counter) {

    var file = element.files[0];
    var reader = new FileReader();
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("uploadImage" + ans_vocab_counter).files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview" + ans_vocab_counter).src = oFREvent.target.result;
    };
    reader.onloadend = function () {
        fileOutput[ans_vocab_counter - 1] = reader.result;

    }
    reader.readAsDataURL(file);



};

function get24hTime(str) {
    str = String(str).toLowerCase().replace(/\s/g, '');
    var has_am = str.indexOf('am') >= 0;
    var has_pm = str.indexOf('pm') >= 0;
    // first strip off the am/pm, leave it either hour or hour:minute
    str = str.replace('am', '').replace('pm', '');
    // if hour, convert to hour:00
    if (str.indexOf(':') < 0) str = str + ':00';
    // now it's hour:minute
    // we add am/pm back if striped out before 
    if (has_am) str += ' am';
    if (has_pm) str += ' pm';
    // now its either hour:minute, or hour:minute am/pm
    // put it in a date object, it will convert to 24 hours format for us 
    var d = new Date("1/1/2011 " + str);
    // make hours and minutes double digits
    var doubleDigits = function (n) {
        return (parseInt(n) < 10) ? "0" + n : String(n);
    };
    return doubleDigits(d.getHours()) + ':' + doubleDigits(d.getMinutes());
}




