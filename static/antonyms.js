$(document).ready(function () {
    var ant_counter = 1;
    var ant_counter1 = 1;
    var c = 97;
    var no_of_questions = 0;
    var total_marks = 0;
    var res = "";
    numbering = 97;
    var head = "";
    var res1 = 1;
    var a = 0;
    var st = 0;
    var start_no = 0;
    var ques_no = 0;
    var headings = [];
    var ques = [];
    option = [];
    count_opt = [];
    var cnt = 1;
    var choice = 0;
    var val = 0;
    checkBox = "";
    var b = 0
    var num = 1;

    $("#addButton_ant_options").click(function () {
        if (num > 1) {
            $("#ant_c").empty();
            ant_counter = 1;
        }
        num++;
        $("#ant_c").append("<br><br>");
        no_of_questions = $("#number-of-questions_ant_options").val();
        num_ques_ant_opt = no_of_questions;
        total_marks = $("#marks_ant_options").val();
        opt = 0;
        mark_ant_opt_total_marks = total_marks;
        head = $("#heading_ant_options").val();
        start_no = $("#starting-number_ant_options").val();
        st = start_no;
        if (no_of_questions != 0 && total_marks != 0 && head != "" && start_no!=0) {
            each_mark_ant_opt = printEachMark(head, total_marks, no_of_questions);
            no_of_ques_ant_options = printNumQuestions(head, no_of_questions);

            for (i = 0; i < no_of_questions; i++) {
                
                $("#ant_c").append('<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + start_no + '. </label></div>' +
                    '<div class="col-sm-9"><div class="form-control" style="height:40px; overflow: auto;" name="textbox' + ant_counter + '" id="textbox_ant_options' + ant_counter + '" onkeyup="myFunctionsAntonymsWoPara(' + ant_counter + ')" class="form-control mt-2 mt-md-0" contenteditable="true" data-placeholder="Question" cols="200" rows="100"></div></div>' + '<div class="col-sm-2"><input class="form-control mt-2 mt-md-0" type="text" id="eachmark_ant_options' + ant_counter + '" value="' + each_mark_ant_opt + '"  placeholder="Mark" readonly></div></div>');
                $("#ant_c").append('&nbsp;<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-11"><input class="form-control mt-2 mt-md-0" type="text" id="highlightedword_ant_options' + ant_counter + '" onblur="myhighlightAntonymsWoPara(' + ant_counter + ')" onfocus="myfocusAntonymsWoPara(' + ant_counter + ')" placeholder="Highlighted word"/></div></div>');
                $("#ant_c").append('<div class="row"><div class="col-sm-1"><label></label></div>' + '<div class="col-sm-2"><input type="checkbox" id="myCheck_ant_options' + ant_counter + '" class = "example" name="MCQ" value="MCQ" onclick="myFunctionAntonymsWoPara(' + ant_counter + ')"><label>MCQ</label></div></div><div id="Check_ant_options' + ant_counter + '"></div>');
                start_no++;
                    
                $("#ant_c").append("<br>");
                ant_counter++;
            }

        $("#ant_c").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="getButtonValue_ant_options"  class="test btn btn-primary" value="Save" ></div></div>');
        }

        else {
            alert("Please enter all the fields");
        }
    });



    $(document).on('click', "#getButtonValue_ant_options", function () {

        for (i = 1; i <= no_of_questions; i++) {
            headings[i - 1] = $('#eachHeading_ant_options' + i).val();
            if (headings[i - 1] == "") {
                //alert("Please enter all the headings");
                break;
            }
            else {
                console.log("Headings : " + headings[i - 1]);
            }
        }

        for (i = 1; i <= no_of_questions; i++) {
            ques[i - 1] = $('#textbox_ant_options' + i).text();
            if (ques[i - 1] == "") {
                alert("Please enter all the questions");
                break;
            }

            else {
                console.log("Questions : " + ques[i - 1]);
            }
        }

        count_opt = [];
        val = 0;
        choice = 0;
        for (j = 0; j < no_of_questions; j++) {
            if (checkBox.checked == true) {
                count_opt[j] = $('#noofoption_ant_options' + (j + 1)).val();

                if (count_opt[j] == 0) {
                    alert("Please enter number of options");
                    break;

                }
                else {

                    for (i = 0; i < count_opt[j]; i++) {

                        option[choice] = ($('#options_ant_options' + choice).val());
                        choice++;

                    }
                }
            }
        }

        item2 = {};
        item = {};
        var ch = 0;
        ques_arr = [];
        questions = {};
        opt_obj = [];
        options = {};
        opt_arr = [];
        marks_ant_options = no_of_ques_ant_options + "x" + each_mark_ant_opt + "=" + mark_ant_opt_total_marks;
        paragraph = {};
        var cnnt = 0;
        item1 = {};
        a = 0;
        b = 0;
           var start_num = st;
            cnnt = 0;
            ch = 0;
            count_opt = [];
            opt_arr = [];

            for (i = 1; i <= no_of_questions; i++) {
                $("#textbox_ant_options" + i).each(function () {
                    var inData = $(this).text();
                    if (inData != "") {
                        ques_arr.push(inData);
                    }
                    var ans_head = $("#eachHeading_ant_options" + i).val();
                    var high = $("#highlightedword_ant_options" + i).val();
                    checkBox = document.getElementById("myCheck_ant_options" + i);
                    if (checkBox.checked == true) {
                        count_opt[i] = parseInt($('#noofoption_ant_options' + i).val());
                        cnnt += count_opt[i];

                        for (j = 0; j < count_opt[i]; j++) {
                            option[ch] = $('#options_ant_options' + ch).val();

                            if (option[ch] == 0) {
                                alert("Please enter the option which you selected");
                                break;
                            }
                            else {
                                console.log("Options : " + option[ch]);
                                opt_obj.push(option[ch]);
                                opt_arr.push(option[ch]);
                                ch++;
                            }
                        }


                        if (ans_head != "" && high != "") {
                            questions[start_num] = { "heading": ans_head, "type": "MCQSL", "question": inData, "quotedWords": high, "quoteType": "underline", "options": ArrayToObject(opt_obj) };
                        }
                        else if (ans_head != "" && high == "") {
                            questions[start_num] = { "heading": ans_head, "type": "MCQSL", "question": inData, "quotedWords": null, "quoteType": null, "options": ArrayToObject(opt_obj) };
                        }
                        else if (ans_head == "" && high != "") {
                            questions[start_num] = { "heading": null, "type": "MCQSL", "question": inData, "quotedWords": high, "quoteType": "underline", "options": ArrayToObject(opt_obj) };
                        }
                        else {
                            questions[start_num] = { "heading": null, "type": "MCQSL", "question": inData, "quotedWords": null, "quoteType": null, "options": ArrayToObject(opt_obj) };
                        }
                        opt_obj = [];
                    }
                    else {
                        if (ans_head != "" && high != "") {
                            questions[start_num] = { "heading": ans_head, "type": "MCQN", "question": inData, "quotedWords": high, "quoteType": "underline", "options": null };
                        }
                        else if (ans_head != "" && high == "") {
                            questions[start_num] = { "heading": ans_head, "type": "MCQN", "question": inData, "quotedWords": null, "quoteType": null, "options": null };
                        }
                        else if (ans_head == "" && high != "") {
                            questions[start_num] = { "heading": null, "type": "MCQN", "question": inData, "quotedWords": high, "quoteType": "underline", "options": null };
                        }
                        else {
                            questions[start_num] = { "heading": null, "type": "MCQN", "question": inData, "quotedWords": null, "quoteType": null, "options": null };
                        }
                    }
                });
                start_num++;
            }
        
        if (ques_no != 0) {
            con_no = parseInt(ques_no) + 1;
        }
        else {
            con_no = start_num;
        }
        
        var partno = "";
        for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
            console.log("retrived " + question_types[v]);
            var partarr = question_types[v];
            for (var h = 0; h < partarr.length; h++) {
                if ("Antonyms" == partarr[h]) {
                    partno = v - s_sec;
                    break;
                }
            }
        }

        item_ant_options = {
            "heading": head,
            "marks": marks_ant_options
        };

        obj_ant_options = {
            "user": reg_teacher,
            "heading": head,
            "marks": marks_ant_options
        };


        for (let key in questions) {
            item_ant_options[key] = questions[key];
        }

        for (let key in questions) {
            obj_ant_options[key] = questions[key];
        }



        if (ques_arr.length == no_of_questions) {

            var arraySet = new Set(opt_arr)
            if (arraySet.has("")) {
            }
            else {
                if (opt_arr.length == cnnt) {
                    alert("Antonyms is saved successfully!");
                    console.log(JSON.stringify(item_ant_options,null,'\t'))
                    document.getElementById("getButtonValue_ant_options").value = "Saved!";
                    createAntonymsWithoutOptions(JSON.stringify(obj_ant_options));
                    if (item_ant_options != {}) {
                        if (part1.hasOwnProperty("part " + partno)) {
                            var temp_item = part1["part " + partno];
                            part1["part " + partno] = { ...temp_item, ...item_ant_options };
                        }
                        else {
                            part1["part " + partno] = item_ant_options;
                        }
                        item_ant_options = {};
                    }
                }
            }

        }
    });
    function ArrayToObject(arr) {
        var obj = {};
        for (var i = 1; i <= arr.length; i++) {
            obj[i] = arr[i - 1];
        }
        return obj
    }
    
});

function getResultsAntonymsWoPara(elem) {
    $(document).ready(function () {
        elem.checked && elem.value == "Numbers_ant_options" ? $("#dvtext_ant_options").show() : $("#dvtext_ant_options").hide();
    });
}

var text_ant_options = "";
    var count = 1;
    function myFunctionsAntonymsWoPara(count) {
        $(document).ready(function () {
            text_ant_options = $("#textbox_ant_options" + count).text();
        });
    }


    function myhighlightAntonymsWoPara(count) {
        $(document).ready(function () {
            var s = document.getElementById("highlightedword_ant_options" + count).value;
            var a = text_ant_options.replace(s, '<u>' + s + '</u>');
            text_ant_options = a;
            $("#textbox_ant_options" + count).html(a);
        });
    }

    function myfocusAntonymsWoPara(count) {
        $(document).ready(function () {
            var s = document.getElementById("highlightedword_ant_options" + count).value;
            if (s == "" || s == null) {
            }
            else {
                var a = text_ant_options.replace('<u>' + s + '</u>', s);
                text_ant_options = a;
                $("#textbox_ant_options").html(a);
            }
        });
    }


    var no_option = 0;
    var numbering = 0;
    var opt = 0;
    var checkBox = "";
    var ant_counter = 1;
    var count_opt = [];
    var option = [];

    function myFunctionAntonymsWoPara(ant_counter) {
        checkBox = document.getElementById('myCheck_ant_options' + ant_counter);
        //checkBox = document.querySelectorAll(".example");
        if (checkBox.checked == true) {
            var table = document.getElementById("Check_ant_options" + ant_counter);
            table.innerHTML += '<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="text" min="0" name="total_mark" id="noofoption_ant_options' + ant_counter + '" class="form-control" placeholder="Number of Options"></div>&nbsp;<div class="col-sm-2"><input type="button" value="Create Options" class="btn btn-primary" id="addOption_ant_options' + ant_counter + '" onclick="addOptionAntonymsWoPara(' + ant_counter + ')"></div></div><div id="option_ant_options' + ant_counter + '"></div><br>';

        } else {
            var table = document.getElementById("Check_ant_options" + ant_counter);
            while (table.firstChild) {
                table.removeChild(table.firstChild);
            }
        }

    }

    var n = 1;

    function addOptionAntonymsWoPara(ant_counter) {

        for (i = 1; i <= num_ques_ant_opt; i++) {
            if (i == ant_counter) {
                break;
            }
        }


        no_option = document.getElementById("noofoption_ant_options" + ant_counter).value;
        numbering = 97;
        var table = document.getElementById("option_ant_options" + ant_counter);
        table.innerHTML = "";

        if (no_option != 0) {
            for (i = 0; i < no_option; i++) {
                var res = String.fromCharCode(numbering);

                if (i == 0) {
                    table.innerHTML += '<br><br>';
                }

                table.innerHTML += '<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-3"><input type="text" min="0" name="total_mark" id="options_ant_options' + opt + '" class="form-control" placeholder="Option - ' + res + '"></div></div>&nbsp;';
                numbering++;
                opt++;

            }
            n++;
        }
        else {
            alert("enter all options");
        }

    }

