$(document).ready(function () {
    var counter = 1;
    var counter1 = 1;
    var c = 97;
    var no_of_questions = 0;
    var total_marks = 0;
    var res = "";
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
    numbering = 0;
    checkBox1 = "";
    var choice = 0;
    var val = 0;
    var b = 0
    var num = 1;


    $(document).on('click', "#addButton_ans_gram1", function () {

        if (num > 1) {
            $("#d").empty();
            counter = 1;
        }
        num++;
        $("#d").append("<br><br>");
        no_of_questions = $("#number-of-questions_ans_gram1").val();
        num_ques_ans_grmr1 = no_of_questions;
        opt2 = 0;
        var ch = 0;
        total_marks = $("#marks_ans_gram1").val();
        mark_ans_grmr1 = total_marks;
        ques_no = $("#question-number_ans_gram1").val();
        head = $("#heading_ans_gram1").val();
        start_no = $("#starting-number_ans_gram1").val();
        st = start_no;
        if (no_of_questions != 0 && total_marks != 0 && head != "" && start_no!=0) {
            each_mark_ans_gram1 = printEachMark(head, total_marks, no_of_questions);
            no_of_ques_ans_grmr1 = printNumQuestions(head, no_of_questions);

            for (i = 0; i < no_of_questions; i++) {
                $("#d").append('<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + start_no + '. </label></div>' +
                    '<div class="col-sm-9"><input type="text" name="eachHeading' + counter +
                    '" id="eachHeading_ans_gram1' + counter + '" value="" class="form-control input-lg" placeholder="Heading"></div>' + '<div class="col-sm-2"><input class="form-control mt-2 mt-md-0" type="text" id="eachmark_ans_gram1' + counter + '" value="' + each_mark_ans_gram1 + '"  placeholder="Mark" readonly></div></div>');
                $("#d").append('&nbsp;<div class="row"><div class="col-sm-1"><label></label></div>' + '<div class="col-sm-11"><div class="form-control" style="height:50px; overflow: auto;" name="textbox' + counter + '" id="textbox_ans_gram1' + counter + '" onkeyup="myFunctionsAnsGrammar1(' + counter + ')" class="form-control mt-2 mt-md-0" contenteditable="true" data-placeholder="Question" cols="200" rows="100"></div></div></div>' +
                    '<br><div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-11"><input class="form-control mt-2 mt-md-0" type="text" id="highlightedword_ans_gram1' + counter + '" onblur="myhighlightAnsGrammar1(' + counter + ')" onfocus="myfocusAnsGrammar1(' + counter + ')" placeholder="Highlighted word"/></div></div>');
                $("#d").append('<div class="row"><div class="col-sm-1"><label></label></div>' + '<div class="col-sm-2"><input type="checkbox" id="myCheck_ans_gram1' + counter + '" class = "example" name="MCQ" value="MCQ" onclick="myFunctionAnsGrammar1(' + counter + ')"><label>MCQ</label></div></div><div id="Check_ans_gram1' + counter + '"></div>');

                start_no++;

                $("#d").append("<br>");
                counter++;
            }
            $("#d").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="getButtonValue_ans_gram1"  class="test btn btn-primary" value="Save" ></div></div>');
        }

        else {
            alert("Please enter all the fields");
        }
    });



    $(document).on('click', "#getButtonValue_ans_gram1", function () {

        for (i = 1; i <= no_of_questions; i++) {
            headings[i - 1] = $('#eachHeading_ans_gram1' + i).val();
            if (headings[i - 1] == "") {
                //alert("Please enter all the headings");
                break;
            }
            else {
                console.log("Headings : " + headings[i - 1]);
            }
        }

        for (i = 1; i <= no_of_questions; i++) {
            ques[i - 1] = $('#textbox_ans_gram1' + i).text();
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

            if (checkBox1.checked == true) {

                count_opt[j] = $('#noofoption_ans_gram1' + (j + 1)).val();

                if (count_opt[j] == 0) {
                    alert("Please enter number of options");
                    break;

                }
                else {

                    for (i = 0; i < count_opt[j]; i++) {

                        option[choice] = ($('#options_ans_gram1' + choice).val());
                        choice++;

                    }
                }
            }
        }

        item2 = {};
        item = {};
        ch = 0;
        ques_arr = [];
        questions = {};
        opt_obj = [];
        options = {};
        marks_ans_grmr1 = no_of_ques_ans_grmr1 + "x" + each_mark_ans_gram1 + "=" + mark_ans_grmr1;
        opt_arr = [];
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
                $("#textbox_ans_gram1" + i).each(function () {
                    var inData = $(this).text();
                    if (inData != "") {
                        ques_arr.push(inData);
                    }
                    var ans_head = $("#eachHeading_ans_gram1" + i).val();
                    var high = $("#highlightedword_ans_gram1" + i).val();
                    checkBox1 = document.getElementById("myCheck_ans_gram1" + i);
                    if (checkBox1.checked == true) {
                        count_opt[i] = parseInt($('#noofoption_ans_gram1' + i).val());
                        cnnt += count_opt[i];

                        for (j = 0; j < count_opt[i]; j++) {
                            option[ch] = $('#options_ans_gram1' + ch).val();

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
            console.log("retrived " + question_types[v] + " " + v);
            var partarr = question_types[v];
            for (var h = 0; h < partarr.length; h++) {
                if ("Answer the following - I (Grammar)" == partarr[h]) {
                    partno = v - s_sec;
                    break;
                }
            }
        }

        item_ans_grmr1 = {
            "heading": head,
            "marks": marks_ans_grmr1
        };
        obj_ans_grmr1 = {
            "user": reg_teacher,
            "heading": head,
            "marks": marks_ans_grmr1
        };

        for (let key in questions) {
            item_ans_grmr1[key] = questions[key];
        }
        for (let key in questions) {
            obj_ans_grmr1[key] = questions[key];
        }

        if (ques_arr.length == no_of_questions) {

            var arraySet = new Set(opt_arr)
            if (arraySet.has("")) {
            }
            else {
                if (opt_arr.length == cnnt) {
                    alert("Answer the following (Grammar) - I is saved successfully!");
                    console.log(JSON.stringify(item_ans_grmr1,null,'\t'))
                
                    document.getElementById("getButtonValue_ans_gram1").value = "Saved!";
                    createAnsGrammar1(JSON.stringify(obj_ans_grmr1));
                    if (item_ans_grmr1 != {}) {
                        if (part1.hasOwnProperty("part " + partno)) {
                            var temp_item = part1["part " + partno];
                            part1["part " + partno] = { ...temp_item, ...item_ans_grmr1 };
                        }
                        else {
                            part1["part " + partno] = item_ans_grmr1;
                        }
                        item_ans_grmr1 = {};
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



var text_ans_gram1 = "";

    function myFunctionsAnsGrammar1(count) {
        $(document).ready(function () {
            text_ans_gram1 = $("#textbox_ans_gram1" + count).text();
        });
    }
    function myhighlightAnsGrammar1(count) {
        $(document).ready(function () {

            var s = document.getElementById("highlightedword_ans_gram1" + count).value;
            var a = text_ans_gram1.replace(s, '<u>' + s + '</u>');
            text_ans_gram1 = a;
            $("#textbox_ans_gram1" + count).html(a);
        });

    }
    function myfocusAnsGrammar1(count) {
        $(document).ready(function () {
            var s = document.getElementById("highlightedword_ans_gram1" + count).value;
            if (s == "" || s == null) {

            }
            else {
                var a = text_ans_gram1.replace('<u>' + s + '</u>', s);
                text_ans_gram1 = a;
                $("#textbox_ans_gram1").html(a);
            }
        });
    }

    var no_option = 0;
    var numbering = 0;
    var opt1 = 0;
    var checkBox1 = "";
    var counter = 1;
    var count_opt = [];
    var option = [];

    function myFunctionAnsGrammar1(counter) {
        checkBox1 = document.getElementById('myCheck_ans_gram1' + counter);
        //checkBox = document.querySelectorAll(".example");
        if (checkBox1.checked == true) {

            var table = document.getElementById("Check_ans_gram1" + counter);
            table.innerHTML += '<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="text" min="0" name="total_mark" id="noofoption_ans_gram1' + counter + '" class="form-control" placeholder="Number of Options"></div>&nbsp;<div class="col-sm-2"><input type="button" value="Create Options" class="btn btn-primary" id="addOption_ans_gram1' + counter + '" onclick="addOptionAnsGrammar1(' + counter + ')"></div></div><div id="option_ans_gram1' + counter + '"></div><br>';

        } else {
            var table = document.getElementById("Check_ans_gram1" + counter);
            while (table.firstChild) {
                table.removeChild(table.firstChild);
            }

        }
    }
    function addOptionAnsGrammar1(counter) {

        no_option = document.getElementById("noofoption_ans_gram1" + counter).value;
        numbering = 97;
        if (no_option != 0) {
            for (i = 0; i < no_option; i++) {
                var res = String.fromCharCode(numbering);
                var table = document.getElementById("option_ans_gram1" + counter);

                if (i == 0) {
                    table.innerHTML += '<br><br>';
                }
                //table.innerHTML+='<input style="margin-left:90px;"type="text" min="0" name="total_mark" id="options'+i+'" class="form-control col-sm-2" placeholder="Option - '+res+'">&nbsp;';
                table.innerHTML += '<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-3"><input type="text" min="0" name="total_mark" id="options_ans_gram1' + opt1 + '" class="form-control" placeholder="Option - ' + res + '"></div></div>&nbsp;';
                numbering++;
                opt1++;

            }
        }
        else {
            alert("enter all options");
        }
    }


function getResultsAnsGrammar1(elem) {
    $(document).ready(function () {
        elem.checked && elem.value == "Numbers_ans_gram1" ? $("#dvtext_ans_gram1").show() : $("#dvtext_ans_gram1").hide();
    });
}