var pie_chart_counter = 1;
var pie_chart_counter1 = 1;
var pie_chart_no_of_questions = 0;
var pie_chart_total_marks = 0;
var pie_chart_res = "";
var pie_chart_numbering = 97;
var pie_chart_head = "";
var pie_chart_st = 0;
var pie_chart_start_no = 0;
var pie_chart_ques_no = 0;
var pie_chart_headings = [];
var pie_chart_ques = [];
var pie_chart_option = [];
var pie_chart_count_opt = [];
var pie_chart_cnt = 1;
var pie_chart_each_mark = 0;
var pie_chart_no_option = 0;
var pie_chart_checkBox = "";
var pie_chart_choice = 0;
var pie_chart_opt = 0;
var pie_chart_val = 0;
var pie_chart_num = 1;
var pie_chart_num_of_ques = 0;
var pie_chart_fileOutput = ""

function pie_chart_encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("pie_chart_uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("pie_chart_uploadPreview").src = oFREvent.target.result;
    };
    reader.onloadend = function () {
        pie_chart_fileOutput = reader.result;
    }
    reader.readAsDataURL(file);
};

function pie_chart_PreviewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("pie_chart_uploadImage").files[0]);
    oFReader.onload = function (oFREvent) {
        document.getElementById("pie_chart_uploadPreview").src = oFREvent.target.result;
    };
};

function pie_chart_addFields() {
    if (pie_chart_num > 1) {
        $("#pie_chart-a").empty();
        pie_chart_counter = 1;
    }

    pie_chart_num++;
    $("#pie_chart-a").append("<br><br>");
    pie_chart_no_of_questions = $("#pie_chart-number-of-questions").val();
    pie_chart_opt = 0;
    pie_chart_total_marks = $("#pie_chart-marks").val();
    pie_chart_ques_no = $("#pie_chart-question-number").val();
    pie_chart_head = $("#pie_chart-heading").val();
    pie_chart_start_no = $("#pie_chart-starting-number").val();
    pie_chart_st = pie_chart_start_no;
    if (pie_chart_no_of_questions != 0 && pie_chart_total_marks != 0 && pie_chart_fileOutput != "" && pie_chart_head != "" && $("input[name=pie_chart-type]").is(":checked")) {
        pie_chart_each_mark = printEachMark(pie_chart_head, pie_chart_total_marks, pie_chart_no_of_questions)
        pie_chart_num_of_ques = printNumQuestions(pie_chart_head, pie_chart_no_of_questions)
        
        if ($("input[name='pie_chart-type'][value='pie_chart-Alphabets']").prop("checked")) {
            var c1 = 97;
            for (i = 0; i < pie_chart_no_of_questions; i++) {
                var res = String.fromCharCode(c1);
                $("#pie_chart-a").append('&nbsp;<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + res + '. </label></div>' + '<div class="col-sm-10"><div class="form-control" style="height:40px;overflow:auto;" name="pie_chart-question' + pie_chart_counter + '" id="pie_chart-question' + pie_chart_counter + '" class="form-control mt-2 mt-md-0" contenteditable="true" data-placeholder="Question" cols="200" rows="100"></div></div><div class="col-sm-1"><label style="font-weight:bold;">' + pie_chart_each_mark + ' mark</label></div></div>');
                $("#pie_chart-a").append('<div class="row"><div class="col-sm-1"><label></label></div>' + '<div class="col-sm-2"><input type="checkbox" id="pie_chart-myCheck' + pie_chart_counter + '" class = "example" name="MCQ" value="MCQ" onclick="pie_chart_Function(' + pie_chart_counter + ')"><label>MCQ</label></div></div><div id="pie_chart-Check' + pie_chart_counter + '"></div>');
                c1++;
                pie_chart_counter++;
            }
        }

        else if ($("input[name='pie_chart-type'][value='pie_chart-Numbers']").prop("checked")) {
            if (pie_chart_start_no != 0) {
                for (i = 0; i < pie_chart_no_of_questions; i++) {
                    if (pie_chart_start_no != 0) {
                        $("#pie_chart-a").append('&nbsp;<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + pie_chart_start_no + '. </label></div>' + '<div class="col-sm-10"><div class="form-control" style="height:40px;overflow:auto;" name="pie_chart-question' + pie_chart_counter + '" id="pie_chart-question' + pie_chart_counter + '" class="form-control mt-2 mt-md-0" contenteditable="true" data-placeholder="Question" cols="200" rows="100"></div></div><div class="col-sm-1"><label style="font-weight:bold;">' + pie_chart_each_mark + ' mark</label></div></div>');
                        $("#pie_chart-a").append('<div class="row"><div class="col-sm-1"><label></label></div>' + '<div class="col-sm-2"><input type="checkbox" id="pie_chart-myCheck' + pie_chart_counter + '" class = "example" name="MCQ" value="MCQ" onclick="pie_chart_Function(' + pie_chart_counter + ')"><label>MCQ</label></div></div><div id="pie_chart-Check' + pie_chart_counter + '"></div>');
                        pie_chart_start_no++;
                        pie_chart_counter++;
                    }
                }
            } else {
                alert("Please enter the starting number")
            }
        }

        else if ($("input[name='pie_chart-type'][value='pie_chart-Roman letters']").prop("checked")) {
            for (i = 0; i < pie_chart_no_of_questions; i++) {
                var res = integer_to_roman(i + 1);
                $("#pie_chart-a").append('&nbsp;<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + res + '. </label></div>' + '<div class="col-sm-10"><div class="form-control" style="height:40px;overflow:auto;" name="pie_chart-question' + pie_chart_counter + '" id="pie_chart-question' + pie_chart_counter + '" class="form-control mt-2 mt-md-0" contenteditable="true" data-placeholder="Question" cols="200" rows="100"></div></div><div class="col-sm-1"><label style="font-weight:bold;">' + pie_chart_each_mark + ' mark</label></div></div>');
                $("#pie_chart-a").append('<div class="row"><div class="col-sm-1"><label></label></div>' + '<div class="col-sm-2"><input type="checkbox" id="pie_chart-myCheck' + pie_chart_counter + '" class = "example" name="MCQ" value="MCQ" onclick="pie_chart_Function(' + pie_chart_counter + ')"><label>MCQ</label></div></div><div id="pie_chart-Check' + pie_chart_counter + '"></div>');
                pie_chart_counter++;
            }
        }
        $("#pie_chart-a").append("<br>");



        if ($("input[name='pie_chart-type'][value='pie_chart-Alphabets']").prop("checked")) {
            $("#pie_chart-a").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="pie_chart-getButtonValue"  class="test btn btn-primary" onclick="pie_chart_getValues();" value="Save" ></div></div>');
        }

        else if ($("input[name='pie_chart-type'][value='pie_chart-Numbers']").prop("checked")) {
            if (pie_chart_start_no != 0) {
                $("#pie_chart-a").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="pie_chart-getButtonValue"  class="test btn btn-primary" onclick="pie_chart_getValues();" value="Save" ></div></div>');
            }
        }

        else if ($("input[name='pie_chart-type'][value='pie_chart-Roman letters']").prop("checked")) {
            $("#pie_chart-a").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="pie_chart-getButtonValue"  class="test btn btn-primary" onclick="pie_chart_getValues();" value="Save" ></div></div>');
        }
    }

    else {
        alert("Please enter all the fields");
    }
}

function pie_chart_Function(pie_chart_counter) {
    pie_chart_checkBox = document.getElementById('pie_chart-myCheck' + pie_chart_counter);
    if (pie_chart_checkBox.checked == true) {
        var table = document.getElementById("pie_chart-Check" + pie_chart_counter);
        table.innerHTML += '<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="text" min="0" name="total_mark" id="pie_chart-noofoption' + pie_chart_counter + '" class="form-control" placeholder="No of Options"></div>&nbsp;<div class="col-sm-2"><input type="button" value="Create Options" class="btn btn-primary" id="pie_chart-addOption' + pie_chart_counter + '" onclick="pie_chart_addOption(' + pie_chart_counter + ')"></div></div><div id="pie_chart-option' + pie_chart_counter + '"></div><br>';

    } else {
        var table = document.getElementById("pie_chart-Check" + pie_chart_counter);
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }

    }
}
function pie_chart_addOption(pie_chart_counter) {
    pie_chart_no_option = document.getElementById("pie_chart-noofoption" + pie_chart_counter).value;
    pie_chart_numbering = 97;
    if (pie_chart_no_option != 0) {
        for (i = 0; i < pie_chart_no_option; i++) {
            var res = String.fromCharCode(pie_chart_numbering);
            var table = document.getElementById("pie_chart-option" + pie_chart_counter);
            if (i == 0) {
                table.innerHTML += '<br><br>';
            }
            table.innerHTML += '<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-3"><input type="text" min="0" name="total_mark" id="pie_chart-options' + pie_chart_opt + '" class="form-control" placeholder="Option - ' + res + '"></div></div>&nbsp;';
            pie_chart_numbering++;
            pie_chart_opt++;
        }
    }
    else {
        alert("enter all options");
    }

}

function pie_chart_getValues() {
    pie_chart_count_opt = [];
    pie_chart_val = 0;
    pie_chart_choice = 0;
    for (j = 0; j < pie_chart_no_of_questions; j++) {
        if (pie_chart_checkBox.checked == true) {
            pie_chart_count_opt[j] = $('#pie_chart-noofoption' + (j + 1)).val();
            if (pie_chart_count_opt[j] == 0) {
                alert("Please enter number of options");
                break;
            }
            else {
                for (i = 0; i < pie_chart_count_opt[j]; i++) {
                    pie_chart_option[pie_chart_choice] = ($('#pie_chart-options' + pie_chart_choice).val());
                }
            }
        }
    }

    var pie_chart_ch = 0;
    var pie_chart_ques_arr = [];
    var pie_chart_questions = {};
    var pie_chart_opt_obj = [];
    var pie_chart_opt_arr = [];
    var pie_chart_cnnt = 0;
    pie_chart_ques_obj = {};
    if ($("input[name='pie_chart-type'][value='pie_chart-Numbers']").prop("checked")) {
        var pie_chart_start_num = pie_chart_st;
        pie_chart_cnnt = 0;
        pie_chart_ch = 0;
        pie_chart_count_opt = [];
        pie_chart_opt_arr = [];
        for (i = 1; i <= pie_chart_no_of_questions; i++) {
            $("#pie_chart-question" + i).each(function () {
                var pie_chart_inData = $(this).text();
                if (pie_chart_inData != "") {
                    pie_chart_ques_arr.push(pie_chart_inData);
                }
                pie_chart_checkBox = document.getElementById("pie_chart-myCheck" + i);
                if (pie_chart_checkBox.checked == true) {
                    pie_chart_count_opt[i] = parseInt($('#pie_chart-noofoption' + i).val());
                    pie_chart_cnnt += pie_chart_count_opt[i];

                    for (j = 0; j < pie_chart_count_opt[i]; j++) {
                        pie_chart_option[pie_chart_ch] = $('#pie_chart-options' + pie_chart_ch).val();

                        if (pie_chart_option[pie_chart_ch] == 0) {
                            alert("Please enter the option which you selected");
                            break;
                        }
                        else {
                            console.log("Options : " + pie_chart_option[pie_chart_ch]);
                            pie_chart_opt_obj.push(pie_chart_option[pie_chart_ch]);
                            pie_chart_opt_arr.push(pie_chart_option[pie_chart_ch]);
                            pie_chart_ch++;
                        }
                    }
                    pie_chart_questions[pie_chart_start_num] = { "heading": null, "question": pie_chart_inData, "type": "MCQSL", "quotedWords": null, "quoteType": "null", "options": pie_chart_opt_obj };
                    pie_chart_opt_obj = [];
                }
                else {
                    pie_chart_questions[pie_chart_start_num] = { "heading": null, "question": pie_chart_inData, "type": "MCQN", "quotedWords": null, "quoteType": null, "options": null };
                }
            });
            pie_chart_start_num++;
        }
    }
    if ($("input[name='pie_chart-type'][value='pie_chart-Roman letters']").prop("checked")) {
        var pie_chart_r = 1;
        pie_chart_cnnt = 0;
        pie_chart_ch = 0;
        pie_chart_count_opt = [];
        pie_chart_opt_arr = [];
        for (i = 1; i <= pie_chart_no_of_questions; i++) {
            var pie_chart_roman = integer_to_roman(pie_chart_r);
            pie_chart_r++;
            $("#pie_chart-question" + i).each(function () {
                var pie_chart_inData = $(this).text();
                if (pie_chart_inData != "") {
                    pie_chart_ques_arr.push(pie_chart_inData);
                }
                pie_chart_checkBox = document.getElementById("pie_chart-myCheck" + i);
                if (pie_chart_checkBox.checked == true) {
                    pie_chart_count_opt[i] = parseInt($('#pie_chart-noofoption' + i).val());
                    pie_chart_cnnt += pie_chart_count_opt[i];

                    for (j = 0; j < pie_chart_count_opt[i]; j++) {
                        pie_chart_option[pie_chart_ch] = $('#pie_chart-options' + pie_chart_ch).val();

                        if (pie_chart_option[pie_chart_ch] == 0) {
                            alert("Please enter the option which you selected");
                            break;
                        }
                        else {
                            console.log("Options : " + pie_chart_option[pie_chart_ch]);
                            pie_chart_opt_obj.push(pie_chart_option[pie_chart_ch]);
                            pie_chart_opt_arr.push(pie_chart_option[pie_chart_ch]);
                            pie_chart_ch++;
                        }
                    }
                    pie_chart_questions[pie_chart_roman] = { "heading": null, "question": pie_chart_inData, "type": "MCQSL", "quotedWords": null, "quoteType": null, "options": pie_chart_opt_obj };
                    pie_chart_opt_obj = [];
                }
                else {
                    pie_chart_questions[pie_chart_roman] = { "heading": null, "question": pie_chart_inData, "type": "MCQN", "quotedWords": null, "quoteType": null, "options": null };
                }
            });
        }
    }

    if ($("input[name='pie_chart-type'][value='pie_chart-Alphabets']").prop("checked")) {
        var pie_chart_character = 97;
        pie_chart_cnnt = 0;
        pie_chart_ch = 0;
        pie_chart_count_opt = [];
        pie_chart_opt_arr = [];
        for (i = 1; i <= pie_chart_no_of_questions; i++) {
            var pie_chart_alpha = String.fromCharCode(pie_chart_character);
            $("#pie_chart-question" + i).each(function () {
                var pie_chart_inData = $(this).text();
                if (pie_chart_inData != "") {
                    pie_chart_ques_arr.push(pie_chart_inData);
                }
                pie_chart_checkBox = document.getElementById("pie_chart-myCheck" + i);
                if (pie_chart_checkBox.checked == true) {
                    pie_chart_count_opt[i] = parseInt($('#pie_chart-noofoption' + i).val());
                    pie_chart_cnnt += pie_chart_count_opt[i];
                    for (j = 0; j < pie_chart_count_opt[i]; j++) {
                        pie_chart_option[pie_chart_ch] = $('#pie_chart-options' + pie_chart_ch).val();

                        if (pie_chart_option[pie_chart_ch] == 0) {
                            alert("Please enter the option which you selected");
                            break;
                        }
                        else {
                            console.log("Options : " + pie_chart_option[pie_chart_ch]);
                            pie_chart_opt_obj.push(pie_chart_option[pie_chart_ch]);
                            pie_chart_opt_arr.push(pie_chart_option[pie_chart_ch]);
                            pie_chart_ch++;
                        }
                    }
                    pie_chart_questions[pie_chart_alpha] = { "heading": null, "question": pie_chart_inData, "type": "MCQSL", "quotedWords": null, "quoteType": null, "options": pie_chart_opt_obj };
                    pie_chart_opt_obj = [];
                }
                else {
                    pie_chart_questions[pie_chart_alpha] = { "heading": null, "question": pie_chart_inData, "type": "MCQN", "quotedWords": null, "quoteType": null, "options": null };
                }
            });
            pie_chart_character += 1;
        }
    }

    var partno = "";

    for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
        console.log("retrived " + question_types[v]);
        var partarr = question_types[v];
        for (var h = 0; h < partarr.length; h++) {
            if ("Study the pie-chart and answer the questions" == partarr[h]) {
                partno = v - s_sec;
                break;
            }
        }
    }

    con_no = parseInt(pie_chart_ques_no) + 1;
    
    var pie_chart_mark = pie_chart_num_of_ques + " x " + pie_chart_each_mark + " = " + pie_chart_total_marks;
    item_pie_chart[pie_chart_ques_no] = {
        "heading": pie_chart_head,
        "type": "COMPIMG",
        "marks": pie_chart_mark,
        "image": pie_chart_fileOutput,
        "question": pie_chart_questions,
        "quotedWords": null,
        "quoteType": null,
        "options": null
    };

    // for (let key in pie_chart_questions) {
    //     item_pie_chart[pie_chart_ques_no][key] = pie_chart_questions[key];
    // }

    obj_pie_chart = {
        "user": reg_teacher,
        "heading": pie_chart_head,
        "type": "COMPIMG",
        "marks": pie_chart_mark,
        "image": pie_chart_fileOutput,
        "question": pie_chart_questions,
        "quotedWords": null,
        "quoteType": null,
        "options": null
    };

    // for (let key in pie_chart_questions) {
    //     obj_pie_chart[key] = pie_chart_questions[key];
    // }


    if (count(pie_chart_ques_arr) == pie_chart_no_of_questions) {
        var arraySet = new Set(pie_chart_opt_arr)
        if (arraySet.has("")) {
        }
        else {
            if (count(pie_chart_opt_arr) == pie_chart_cnnt) {
                console.log(JSON.stringify(item_pie_chart, null, '\t'));
                console.log(JSON.stringify(obj_pie_chart, null, '\t'));
                createPiechart(JSON.stringify(obj_pie_chart, null, '\t'))
                alert("Study the pie-chart and answer the questions is saved successfully")
                document.getElementById('pie_chart-getButtonValue').value = 'Saved!';
                if (item_pie_chart != {}) {
                    if (part1.hasOwnProperty("part " + partno)) {
                        var temp_item = part1["part " + partno];
                        part1["part " + partno] = { ...temp_item, ...item_pie_chart };
                    }
                    else {
                        part1["part " + partno] = item_pie_chart;
                    }
                    item_pie_chart = {};
                }
            }
        }
    } else {
        alert("Please enter all the questions")
    }
}

function pie_chart_getResults(elem) {
    elem.checked && elem.value == "pie_chart-Numbers" ? $("#pie_chart_dvtext").show() : $("#pie_chart_dvtext").hide();
}


function count(array) {
    var c = 0;
    for (i in array) // in returns key, not object
        if (array[i] != "")
            c++;

    return c;
}