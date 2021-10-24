$(document).ready(function () {
    var syn_counter = 1;
    var syn_counter1 = 1;
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

    $("#addButton_syn_options").click(function () {
        if (num > 1) {
            $("#syn_c").empty();
            syn_counter = 1;
        }
        num++;
        $("#syn_c").append("<br><br>");
        no_of_questions = $("#number-of-questions_syn_options").val();
        num_ques_syn_opt = no_of_questions;
        total_marks = $("#marks_syn_options").val();
        opt = 0;
        mark_syn_opt_total_marks = total_marks;
        head = $("#heading_syn_options").val();
        start_no = $("#starting-number_syn_options").val();
        st = start_no;
        if (no_of_questions != 0 && total_marks != 0 && head != "" && start_no!=0) {
            each_mark_syn_opt = printEachMark(head, total_marks, no_of_questions);
            no_of_ques_syn_options = printNumQuestions(head, no_of_questions);

            for (i = 0; i < no_of_questions; i++) {
                
                $("#syn_c").append('<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + start_no + '. </label></div>' +
                    '<div class="col-sm-9"><div class="form-control" style="height:40px; overflow: auto;" name="textbox' + syn_counter + '" id="textbox_syn_options' + syn_counter + '" onkeyup="myFunctionsSynonymsWoPara(' + syn_counter + ')" class="form-control mt-2 mt-md-0" contenteditable="true" data-placeholder="Question" cols="200" rows="100"></div></div>' + '<div class="col-sm-2"><input class="form-control mt-2 mt-md-0" type="text" id="eachmark_syn_options' + syn_counter + '" value="' + each_mark_syn_opt + '"  placeholder="Mark" readonly></div></div>');
                $("#syn_c").append('&nbsp;<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-11"><input class="form-control mt-2 mt-md-0" type="text" id="highlightedword_syn_options' + syn_counter + '" onblur="myhighlightSynonymsWoPara(' + syn_counter + ')" onfocus="myfocusSynonymsWoPara(' + syn_counter + ')" placeholder="Highlighted word"/></div></div>');
                $("#syn_c").append('<div class="row"><div class="col-sm-1"><label></label></div>' + '<div class="col-sm-2"><input type="checkbox" id="myCheck_syn_options' + syn_counter + '" class = "example" name="MCQ" value="MCQ" onclick="myFunctionSynonymsWoPara(' + syn_counter + ')"><label>MCQ</label></div></div><div id="Check_syn_options' + syn_counter + '"></div>');
                start_no++;
                    
                $("#syn_c").append("<br>");
                syn_counter++;
            }

        $("#syn_c").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="getButtonValue_syn_options"  class="test btn btn-primary" value="Save" ></div></div>');
        }

        else {
            alert("Please enter all the fields");
        }
    });



    $(document).on('click', "#getButtonValue_syn_options", function () {

        for (i = 1; i <= no_of_questions; i++) {
            headings[i - 1] = $('#eachHeading_syn_options' + i).val();
            if (headings[i - 1] == "") {
                //alert("Please enter all the headings");
                break;
            }
            else {
                console.log("Headings : " + headings[i - 1]);
            }
        }

        for (i = 1; i <= no_of_questions; i++) {
            ques[i - 1] = $('#textbox_syn_options' + i).text();
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
                count_opt[j] = $('#noofoption_syn_options' + (j + 1)).val();

                if (count_opt[j] == 0) {
                    alert("Please enter number of options");
                    break;

                }
                else {

                    for (i = 0; i < count_opt[j]; i++) {

                        option[choice] = ($('#options_syn_options' + choice).val());
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
        marks_syn_options = no_of_ques_syn_options + "x" + each_mark_syn_opt + "=" + mark_syn_opt_total_marks;
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
                $("#textbox_syn_options" + i).each(function () {
                    var inData = $(this).text();
                    if (inData != "") {
                        ques_arr.push(inData);
                    }
                    var ans_head = $("#eachHeading_syn_options" + i).val();
                    var high = $("#highlightedword_syn_options" + i).val();
                    checkBox = document.getElementById("myCheck_syn_options" + i);
                    if (checkBox.checked == true) {
                        count_opt[i] = parseInt($('#noofoption_syn_options' + i).val());
                        cnnt += count_opt[i];

                        for (j = 0; j < count_opt[i]; j++) {
                            option[ch] = $('#options_syn_options' + ch).val();

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
                if ("Synonyms" == partarr[h]) {
                    partno = v - s_sec;
                    break;
                }
            }
        }

        item_syn_options = {
            "heading": head,
            "marks": marks_syn_options
        };

        obj_syn_options = {
            "user": reg_teacher,
            "heading": head,
            "marks": marks_syn_options
        };


        for (let key in questions) {
            item_syn_options[key] = questions[key];
        }

        for (let key in questions) {
            obj_syn_options[key] = questions[key];
        }



        if (ques_arr.length == no_of_questions) {

            var arraySet = new Set(opt_arr)
            if (arraySet.has("")) {
            }
            else {
                if (opt_arr.length == cnnt) {
                    alert("Synonyms is saved successfully!");
                    console.log(JSON.stringify(item_syn_options,null,'\t'))
                    document.getElementById("getButtonValue_syn_options").value = "Saved!";
                    createSynonymsWithoutOptions(JSON.stringify(obj_syn_options));
                    if (item_syn_options != {}) {
                        if (part1.hasOwnProperty("part " + partno)) {
                            var temp_item = part1["part " + partno];
                            part1["part " + partno] = { ...temp_item, ...item_syn_options };
                        }
                        else {
                            part1["part " + partno] = item_syn_options;
                        }
                        item_syn_options = {};
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

function getResultsSynonymsWoPara(elem) {
    $(document).ready(function () {
        elem.checked && elem.value == "Numbers_syn_options" ? $("#dvtext_syn_options").show() : $("#dvtext_syn_options").hide();
    });
}

var text_syn_options = "";
    var count = 1;
    function myFunctionsSynonymsWoPara(count) {
        $(document).ready(function () {
            text_syn_options = $("#textbox_syn_options" + count).text();
        });
    }


    function myhighlightSynonymsWoPara(count) {
        $(document).ready(function () {
            var s = document.getElementById("highlightedword_syn_options" + count).value;
            var a = text_syn_options.replace(s, '<u>' + s + '</u>');
            text_syn_options = a;
            $("#textbox_syn_options" + count).html(a);
        });
    }

    function myfocusSynonymsWoPara(count) {
        $(document).ready(function () {
            var s = document.getElementById("highlightedword_syn_options" + count).value;
            if (s == "" || s == null) {
            }
            else {
                var a = text_syn_options.replace('<u>' + s + '</u>', s);
                text_syn_options = a;
                $("#textbox_syn_options").html(a);
            }
        });
    }


    var no_option = 0;
    var numbering = 0;
    var opt = 0;
    var checkBox = "";
    var syn_counter = 1;
    var count_opt = [];
    var option = [];

    function myFunctionSynonymsWoPara(syn_counter) {
        checkBox = document.getElementById('myCheck_syn_options' + syn_counter);
        //checkBox = document.querySelectorAll(".example");
        if (checkBox.checked == true) {
            var table = document.getElementById("Check_syn_options" + syn_counter);
            table.innerHTML += '<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="text" min="0" name="total_mark" id="noofoption_syn_options' + syn_counter + '" class="form-control" placeholder="Number of Options"></div>&nbsp;<div class="col-sm-2"><input type="button" value="Create Options" class="btn btn-primary" id="addOption_syn_options' + syn_counter + '" onclick="addOptionSynonymsWoPara(' + syn_counter + ')"></div></div><div id="option_syn_options' + syn_counter + '"></div><br>';

        } else {
            var table = document.getElementById("Check_syn_options" + syn_counter);
            while (table.firstChild) {
                table.removeChild(table.firstChild);
            }
        }

    }

    var n = 1;

    function addOptionSynonymsWoPara(syn_counter) {

        for (i = 1; i <= num_ques_syn_opt; i++) {
            if (i == syn_counter) {
                break;
            }
        }


        no_option = document.getElementById("noofoption_syn_options" + syn_counter).value;
        numbering = 97;
        var table = document.getElementById("option_syn_options" + syn_counter);
        table.innerHTML = "";

        if (no_option != 0) {
            for (i = 0; i < no_option; i++) {
                var res = String.fromCharCode(numbering);

                if (i == 0) {
                    table.innerHTML += '<br><br>';
                }

                table.innerHTML += '<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-3"><input type="text" min="0" name="total_mark" id="options_syn_options' + opt + '" class="form-control" placeholder="Option - ' + res + '"></div></div>&nbsp;';
                numbering++;
                opt++;

            }
            n++;
        }
        else {
            alert("enter all options");
        }

    }

