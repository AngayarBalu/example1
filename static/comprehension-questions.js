var second_compre_counter = 1;
var second_compre_counter1 = 1;
var second_compre_ques_no_of_questions = 0;
var second_compre_ques_total_marks = 0;
var second_compre_ques_res = "";
var second_compre_ques_numbering = 97;
var second_compre_ques_head = "";
var second_compre_ques_head_no = 0;
var second_compre_ques_st = 0;
var second_compre_ques_start_no = 0;
var second_compre_ques_ques_no = 0;
var second_compre_ques_headings = [];
var second_compre_ques_ques = [];
var second_compre_ques_option = [];
var second_compre_ques_count_opt = [];
var second_compre_ques_cnt = 1;
var second_compre_ques_each_mark = 0;
var second_compre_ques_no_option = 0;
var second_compre_ques_passage = "";
var second_compre_ques_checkBox = "";
var second_compre_ques_choice = 0;
var second_compre_ques_opt = 0;
var second_compre_ques_val = 0;
var second_compre_ques_num = 1;
var second_compre_ques_num_of_ques = 0;


var second_compre_ques_fileOutput = ""
function second_compre_ques_encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("second_compre_ques_uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("second_compre_ques_uploadPreview").src = oFREvent.target.result;
    };
    reader.onloadend = function () {
        second_compre_ques_fileOutput = reader.result;
    }
    reader.readAsDataURL(file);
};

function PreviewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("second_compre_ques_uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("second_compre_ques_uploadPreview").src = oFREvent.target.result;
    };
};



function second_compre_ques_addFields() {
    if (second_compre_ques_num > 1) {
        $("#second_compre_ques-a").empty();
        second_compre_counter = 1;
    }
    second_compre_ques_num++;
    $("#second_compre_ques-a").append("<br><br>");
    second_compre_ques_no_of_questions = $("#second_compre_ques-number-of-questions").val();
    second_compre_ques_opt = 0;
    second_compre_ques_total_marks = $("#second_compre_ques-marks").val();
    second_compre_ques_ques_no = $("#second_compre_ques-question-number").val();
    second_compre_ques_head = $("#second_compre_ques-heading").val();
    second_compre_ques_start_no = $("#second_compre_ques-starting-number").val();
    second_compre_ques_passage = $("#second_compre_ques-passage").text();;
    second_compre_ques_st = second_compre_ques_start_no;
    if (second_compre_ques_no_of_questions != 0 && second_compre_ques_passage != "" && second_compre_ques_total_marks != 0 && second_compre_ques_head != "" && $("input[name=second_compre_ques-type]").is(":checked")) {
        second_compre_ques_each_mark = printEachMark(second_compre_ques_head, second_compre_ques_total_marks, second_compre_ques_no_of_questions)
        second_compre_ques_num_of_ques = printNumQuestions(second_compre_ques_head, second_compre_ques_no_of_questions)
        if ($("input[name='second_compre_ques-type'][value='second_compre_ques-Alphabets']").prop("checked")) {
            var c1 = 97;
            for (i = 0; i < second_compre_ques_no_of_questions; i++) {
                var res = String.fromCharCode(c1);
                $("#second_compre_ques-a").append('&nbsp;<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + res + '. </label></div>' + '<div class="col-sm-10"><div class="form-control" style="height:40px;overflow:auto;" name="second_compre_ques-question' + second_compre_counter + '" id="second_compre_ques-question' + second_compre_counter + '" class="form-control" contenteditable="true" data-placeholder="Question" cols="200" rows="100"></div></div><div class="col-sm-1"><label style="font-weight:bold;">' + second_compre_ques_each_mark + ' mark</label></div></div>');
                $("#second_compre_ques-a").append('<div class="row"><div class="col-sm-1"><label></label></div>' + '<div class="col-sm-2"><input type="checkbox" id="second_compre_ques-myCheck' + second_compre_counter + '" class = "example" name="MCQ" value="MCQ" onclick="second_compre_ques_Function(' + second_compre_counter + ')"><label>MCQ</label></div></div><div id="second_compre_ques-Check' + second_compre_counter + '"></div>');
                c1++;
                second_compre_counter++;
            }
        }

        else if ($("input[name='second_compre_ques-type'][value='second_compre_ques-Numbers']").prop("checked")) {
            for (i = 0; i < second_compre_ques_no_of_questions; i++) {
                if (second_compre_ques_start_no != 0) {
                    $("#second_compre_ques-a").append('&nbsp;<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + second_compre_ques_start_no + '. </label></div>' + '<div class="col-sm-10"><div class="form-control" style="height:40px;overflow:auto;" name="second_compre_ques-question' + second_compre_counter + '" id="second_compre_ques-question' + second_compre_counter + '" class="form-control" contenteditable="true" data-placeholder="Question" cols="200" rows="100"></div></div><div class="col-sm-1"><label style="font-weight:bold;>' + second_compre_ques_each_mark + ' mark</label></div></div>');
                    $("#second_compre_ques-a").append('<div class="row"><div class="col-sm-1"><label></label></div>' + '<div class="col-sm-2"><input type="checkbox" id="second_compre_ques-myCheck' + second_compre_counter + '" class = "example" name="MCQ" value="MCQ" onclick="second_compre_ques_Function(' + second_compre_counter + ')"><label>MCQ</label></div></div><div id="second_compre_ques-Check' + second_compre_counter + '"></div>');
                    second_compre_ques_start_no++;
                    second_compre_counter++;
                } else {
                    alert("Please enter the starting number")
                }
            }
        }

        else if ($("input[name='second_compre_ques-type'][value='second_compre_ques-Roman letters']").prop("checked")) {
            for (i = 0; i < second_compre_ques_no_of_questions; i++) {
                var res = integer_to_roman(i + 1);
                $("#second_compre_ques-a").append('&nbsp;<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + res + '. </label></div>' + '<div class="col-sm-10"><div class="form-control" style="height:40px;overflow:auto;" name="second_compre_ques-question' + second_compre_counter + '" id="second_compre_ques-question' + second_compre_counter + '" class="form-control" contenteditable="true" data-placeholder="Question" cols="200" rows="100"></div></div><div class="col-sm-1"><label style="font-weight:bold;>' + second_compre_ques_each_mark + ' mark</label></div></div>');
                $("#second_compre_ques-a").append('<div class="row"><div class="col-sm-1"><label></label></div>' + '<div class="col-sm-2"><input type="checkbox" id="second_compre_ques-myCheck' + second_compre_counter + '" class = "example" name="MCQ" value="MCQ" onclick="second_compre_ques_Function(' + second_compre_counter + ')"><label>MCQ</label></div></div><div id="second_compre_ques-Check' + second_compre_counter + '"></div>');
                second_compre_counter++;
            }
        }
        $("#second_compre_ques-a").append("<br>");



        if ($("input[name='second_compre_ques-type'][value='second_compre_ques-Alphabets']").prop("checked")) {
            $("#second_compre_ques-a").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" onclick="second_compre_ques_getValues();" id="second_compre_ques-getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
        }

        else if ($("input[name='second_compre_ques-type'][value='second_compre_ques-Numbers']").prop("checked")) {
            if (second_compre_ques_start_no != 0) {
                $("#second_compre_ques-a").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" onclick="second_compre_ques_getValues();" id="second_compre_ques-getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
            }
            else {
                alert("Please enter the starting number");
            }
        }

        else if ($("input[name='second_compre_ques-type'][value='second_compre_ques-Roman letters']").prop("checked")) {
            $("#second_compre_ques-a").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" onclick="second_compre_ques_getValues();" id="second_compre_ques-getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
        }
    }

    else {
        alert("Please enter all the fields");
    }
}


function second_compre_ques_Function(second_compre_counter) {
    second_compre_ques_checkBox = document.getElementById('second_compre_ques-myCheck' + second_compre_counter);
    if (second_compre_ques_checkBox.checked == true) {
        var table = document.getElementById("second_compre_ques-Check" + second_compre_counter);
        table.innerHTML += '<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="number" min="0" name="total_mark" id="second_compre_ques-noofoption' + second_compre_counter + '" class="form-control" placeholder="No of Options"></div>&nbsp;<div class="col-sm-2"><input type="button" value="Create Options" class="btn btn-primary" id="second_compre_ques-addOption' + second_compre_counter + '" onclick="second_compre_ques_addOption(' + second_compre_counter + ')"></div></div><div id="second_compre_ques-option' + second_compre_counter + '"></div><br>';

    } else {
        var table = document.getElementById("second_compre_ques-Check" + second_compre_counter);
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }

    }
}
function second_compre_ques_addOption(second_compre_counter) {
    second_compre_ques_no_option = document.getElementById("second_compre_ques-noofoption" + second_compre_counter).value;
    second_compre_ques_numbering = 97;
    if (second_compre_ques_no_option != 0) {
        for (i = 0; i < second_compre_ques_no_option; i++) {
            var res = String.fromCharCode(second_compre_ques_numbering);
            var table = document.getElementById("second_compre_ques-option" + second_compre_counter);
            if (i == 0) {
                table.innerHTML += '<br><br>';
            }
            table.innerHTML += '<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-3"><input type="text" min="0" name="total_mark" id="second_compre_ques-options' + second_compre_ques_opt + '" class="form-control" placeholder="Option - ' + res + '"></div></div>&nbsp;';
            second_compre_ques_numbering++;
            second_compre_ques_opt++;
        }
    }
    else {
        alert("enter all options");
    }

}

function second_compre_ques_getValues() {
    second_compre_ques_count_opt = [];
    second_compre_ques_val = 0;
    second_compre_ques_choice = 0;
    for (j = 0; j < second_compre_ques_no_of_questions; j++) {
        if (second_compre_ques_checkBox.checked == true) {
            second_compre_ques_count_opt[j] = $('#second_compre_ques-noofoption' + (j + 1)).val();
            if (second_compre_ques_count_opt[j] == 0) {
                alert("Please enter number of options");
                break;
            }
            else {
                for (i = 0; i < second_compre_ques_count_opt[j]; i++) {
                    second_compre_ques_option[second_compre_ques_choice] = ($('#second_compre_ques-options' + second_compre_ques_choice).val());
                }
            }
        }
    }

    var second_compre_ques_ch = 0;
    var second_compre_ques_ques_arr = [];
    var second_compre_ques_questions = {};
    var second_compre_ques_opt_obj = [];
    var second_compre_ques_opt_arr = [];
    var second_compre_ques_cnnt = 0;
    if ($("input[name='second_compre_ques-type'][value='second_compre_ques-Numbers']").prop("checked")) {
        var second_compre_ques_start_num = second_compre_ques_st;
        second_compre_ques_cnnt = 0;
        second_compre_ques_ch = 0;
        second_compre_ques_count_opt = [];
        second_compre_ques_opt_arr = [];
        for (i = 1; i <= second_compre_ques_no_of_questions; i++) {
            $("#second_compre_ques-question" + i).each(function () {
                var second_compre_ques_inData = $(this).text();
                if (second_compre_ques_inData != "") {
                    second_compre_ques_ques_arr.push(second_compre_ques_inData);
                }
                second_compre_ques_checkBox = document.getElementById("second_compre_ques-myCheck" + i);
                if (second_compre_ques_checkBox.checked == true) {
                    second_compre_ques_count_opt[i] = parseInt($('#second_compre_ques-noofoption' + i).val());
                    second_compre_ques_cnnt += second_compre_ques_count_opt[i];

                    for (j = 0; j < second_compre_ques_count_opt[i]; j++) {
                        second_compre_ques_option[second_compre_ques_ch] = $('#second_compre_ques-options' + second_compre_ques_ch).val();

                        if (second_compre_ques_option[second_compre_ques_ch] == 0) {
                            alert("Please enter the option which you selected");
                            break;
                        }
                        else {
                            console.log("Options : " + second_compre_ques_option[second_compre_ques_ch]);
                            second_compre_ques_opt_obj.push(second_compre_ques_option[second_compre_ques_ch]);
                            second_compre_ques_opt_arr.push(second_compre_ques_option[second_compre_ques_ch]);
                            second_compre_ques_ch++;
                        }
                    }
                    second_compre_ques_questions[second_compre_ques_start_num] = { "heading": null, "question": second_compre_ques_inData, "type": "MCQSL", "quotedWords": null, "quoteType": "null", "options": ArrayToObject(second_compre_ques_opt_obj) };
                    second_compre_ques_opt_obj = [];
                }
                else {
                    second_compre_ques_questions[second_compre_ques_start_num] = { "heading": null, "question": second_compre_ques_inData, "type": "MCQN", "quotedWords": null, "quoteType": null, "options": null };
                }
            });
            second_compre_ques_start_num++;
        }
    }

    if (second_compre_ques_ques_no != 0) {
        con_no = parseInt(second_compre_ques_ques_no) + 1;
    }
    else {
        con_no = second_compre_ques_start_num;
    }

    if ($("input[name='second_compre_ques-type'][value='second_compre_ques-Roman letters']").prop("checked")) {
        var second_compre_ques_r = 1;
        second_compre_ques_cnnt = 0;
        second_compre_ques_ch = 0;
        second_compre_ques_count_opt = [];
        second_compre_ques_opt_arr = [];
        for (i = 1; i <= second_compre_ques_no_of_questions; i++) {
            var second_compre_ques_roman = integer_to_roman(second_compre_ques_r);
            second_compre_ques_r++;
            $("#second_compre_ques-question" + i).each(function () {
                var second_compre_ques_inData = $(this).text();
                if (second_compre_ques_inData != "") {
                    second_compre_ques_ques_arr.push(second_compre_ques_inData);
                }
                second_compre_ques_checkBox = document.getElementById("second_compre_ques-myCheck" + i);
                if (second_compre_ques_checkBox.checked == true) {
                    second_compre_ques_count_opt[i] = parseInt($('#second_compre_ques-noofoption' + i).val());
                    second_compre_ques_cnnt += second_compre_ques_count_opt[i];

                    for (j = 0; j < second_compre_ques_count_opt[i]; j++) {
                        second_compre_ques_option[second_compre_ques_ch] = $('#second_compre_ques-options' + second_compre_ques_ch).val();

                        if (second_compre_ques_option[second_compre_ques_ch] == 0) {
                            alert("Please enter the option which you selected");
                            break;
                        }
                        else {
                            console.log("Options : " + second_compre_ques_option[second_compre_ques_ch]);
                            second_compre_ques_opt_obj.push(second_compre_ques_option[second_compre_ques_ch]);
                            second_compre_ques_opt_arr.push(second_compre_ques_option[second_compre_ques_ch]);
                            second_compre_ques_ch++;
                        }
                    }
                    second_compre_ques_questions[second_compre_ques_roman] = { "heading": null, "question": second_compre_ques_inData, "type": "MCQSL", "quotedWords": null, "quoteType": null, "options": ArrayToObject(second_compre_ques_opt_obj) };
                    second_compre_ques_opt_obj = [];
                }
                else {
                    second_compre_ques_questions[second_compre_ques_roman] = { "heading": null, "question": second_compre_ques_inData, "type": "MCQN", "quotedWords": null, "quoteType": null, "options": null };
                }
            });
        }
    }

    if ($("input[name='second_compre_ques-type'][value='second_compre_ques-Alphabets']").prop("checked")) {
        var second_compre_ques_character = 97;
        second_compre_ques_cnnt = 0;
        second_compre_ques_ch = 0;
        second_compre_ques_count_opt = [];
        second_compre_ques_opt_arr = [];
        for (i = 1; i <= second_compre_ques_no_of_questions; i++) {
            var second_compre_ques_alpha = String.fromCharCode(second_compre_ques_character);
            $("#second_compre_ques-question" + i).each(function () {
                var second_compre_ques_inData = $(this).text();
                if (second_compre_ques_inData != "") {
                    second_compre_ques_ques_arr.push(second_compre_ques_inData);
                }
                second_compre_ques_checkBox = document.getElementById("second_compre_ques-myCheck" + i);
                if (second_compre_ques_checkBox.checked == true) {
                    second_compre_ques_count_opt[i] = parseInt($('#second_compre_ques-noofoption' + i).val());
                    second_compre_ques_cnnt += second_compre_ques_count_opt[i];
                    for (j = 0; j < second_compre_ques_count_opt[i]; j++) {
                        second_compre_ques_option[second_compre_ques_ch] = $('#second_compre_ques-options' + second_compre_ques_ch).val();

                        if (second_compre_ques_option[second_compre_ques_ch] == 0) {
                            alert("Please enter the option which you selected");
                            break;
                        }
                        else {
                            console.log("Options : " + second_compre_ques_option[second_compre_ques_ch]);
                            second_compre_ques_opt_obj.push(second_compre_ques_option[second_compre_ques_ch]);
                            second_compre_ques_opt_arr.push(second_compre_ques_option[second_compre_ques_ch]);
                            second_compre_ques_ch++;
                        }
                    }
                    second_compre_ques_questions[second_compre_ques_alpha] = { "heading": null, "question": second_compre_ques_inData, "type": "MCQSL", "quotedWords": null, "quoteType": null, "options": ArrayToObject(second_compre_ques_opt_obj) };
                    second_compre_ques_opt_obj = [];
                }
                else {
                    second_compre_ques_questions[second_compre_ques_alpha] = { "heading": null, "question": second_compre_ques_inData, "type": "MCQN", "quotedWords": null, "quoteType": null, "options": null };
                }
            });
            second_compre_ques_character += 1;
        }
    }

    var partno = "";
    for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
        console.log("retrived " + question_types[v]);
        var partarr = question_types[v];
        for (var h = 0; h < partarr.length; h++) {
            if ("Comprehension questions(supply)" == partarr[h]) {
                partno = v - s_sec;
                break;
            }
        }
    }


    var second_compre_ques_mark = second_compre_ques_num_of_ques + " x " + second_compre_ques_each_mark + " = " + second_compre_ques_total_marks;
    second_compre_ques_head_no = document.getElementById('second_compre_ques-question-number').value;
    var arraySet = new Set(second_compre_ques_ques);

    if (count(second_compre_ques_ques_arr) == second_compre_ques_no_of_questions) {
        item_second_compre_ques[second_compre_ques_head_no] = {
            "heading": second_compre_ques_head,
            "type": "COMP",
            "marks": second_compre_ques_mark,
            "paragraph": [second_compre_ques_passage],
            "questions": second_compre_ques_questions,
            "quotedWords": null,
            "quoteType": null,
            "options": null
        };

        obj_second_compre_ques = {
            "user": reg_teacher,
            "type": "COMP",
            "heading": second_compre_ques_head,
            "marks": second_compre_ques_mark,
            "paragraph": [second_compre_ques_passage],
            "questions": second_compre_ques_questions,
            "quotedWords": null,
            "quoteType": null,
            "options": null
        };

        // for (let key in second_compre_ques_questions) {
        //     item_second_compre_ques[second_compre_ques_head_no][key] = second_compre_ques_questions[key];
        // }

        // for (let key in second_compre_ques_questions) {
        //     obj_second_compre_ques[key] = second_compre_ques_questions[key];
        // }
       
        if (second_compre_ques_ques_arr.length == second_compre_ques_no_of_questions) {
            
            var arraySet = new Set(second_compre_ques_opt_arr)
            if (arraySet.has("")) {
            }
            else {

                if (count(second_compre_ques_opt_arr) == second_compre_ques_cnnt) {
                   
                    console.log(JSON.stringify(item_second_compre_ques, null, '\t'));
                    console.log(JSON.stringify(obj_second_compre_ques, null, '\t'));
                    createSecondComprehensionQuestions(JSON.stringify(obj_second_compre_ques, null, '\t'))
                    alert("Comprehension questions is saved successfully")
                    document.getElementById('second_compre_ques-getButtonValue').value = 'Saved!';

                    if (item_second_compre_ques != {}) {
                        if (part1.hasOwnProperty("part " + partno)) {
                            var temp_item = part1["part " + partno];
                            part1["part " + partno] = { ...temp_item, ...item_second_compre_ques };
                        }
                        else {
                            part1["part " + partno] = item_second_compre_ques;
                        }
                        item_second_compre_ques = {};
                    }
                }
            }
        } else {
            alert("Please enter all the questions")
        }
    }
}

function count(array) {
    var c = 0;
    for (i in array) // in returns key, not object
        if (array[i] != "")
            c++;

    return c;
}


function second_compre_ques_getResults(elem) {
    elem.checked && elem.value == "second_compre_ques-Numbers" ? $("#second_compre_dvtext").show() : $("#second_compre_dvtext").hide();
}