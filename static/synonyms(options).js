

$(document).ready(function () {
    $("#dvtext_synonyms").hide();

    var counter = 1;
    var counter1 = 1;
    var cnt = 1;
    var num = 0;
    var words = [];
    var no_of_questions = 0;
    var total_marks = 0;
    var no_of_options = 0;
    var opt_count = 0;
    var head = "";
    var ques_no = 0;
    var start_no = 0;
    var st = 0;
    var para = "";
    var ques_arr = [];
    var opt_arr = [];
    var res1 = 1;
    var str = "";
    var highlight_word = [];
    var option = [];
    var n = 1;


    $("#addButton_synonyms").click(function () {
        if (n > 1) {
            $("#a").empty();
            counter = 1;
        }
        n++;
        no_of_questions = $("#number-of-questions_synonyms").val();
        num_ques_syn = no_of_questions;
        total_marks = $("#marks_synonyms").val();
        mark_syn = total_marks;
        no_of_options = $("#number-of-options_synonyms").val();
        head = $("#heading_synonyms").val();
        ques_no = $("#question-number_synonyms").val();
        start_no = $("#starting-number_synonyms").val();
        st = start_no;
        para = $("#txt_synonyms").text();
        var count2 = 0;
        counter1 = 1;
        if (no_of_questions != 0 && total_marks != 0 && no_of_options != 0 && head != "" && ques_no != 0 && $("input[name=type_synonyms]").is(":checked") && para != "") {

            each_mark_synonyms = printEachMark(head, total_marks, no_of_questions);
            no_of_ques_syn = printNumQuestions(head, no_of_questions);
            var c = 97;
            var roman = 1;
            for (i = 0; i < no_of_questions; i++) {
                var c1 = 97;
                var res = String.fromCharCode(c);
                if ($("input[name='type_synonyms'][value='Alphabets_synonyms']").prop("checked")) {
                    $("#a").append('<label style="font-weight:bold;">' + res + '. </label>' + '&nbsp;' +
                        '<br><input type="text" name="textbox' + counter +
                        '" id="textbox_synonyms' + counter + '" value=""  class="form-control-sm" onblur="myhighlightSynonyms(' + counter + ')" onfocus="myfocusSynonyms(' + counter + ')" placeholder="Highlighted word">' + '&nbsp;&nbsp;&nbsp;'
                    );
                }

                else if ($("input[name='type_synonyms'][value='Numbers_synonyms']").prop("checked")) {
                    if (start_no != 0) {
                        $("#a").append('<label style="font-weight:bold;">' + start_no + '. </label>' + '&nbsp;' +
                            '<br><input type="text" name="textbox' + counter +
                            '" id="textbox_synonyms' + counter + '" value="" class="form-control-sm"  onblur="myhighlightSynonyms(' + counter + ')" onfocus="myfocusSynonyms(' + counter + ')" placeholder="Highlighted word">' + '&nbsp;&nbsp;&nbsp;'
                        );
                        start_no++;
                    }
                }

                else if ($("input[name='type_synonyms'][value='Roman letters_synonyms']").prop("checked")) {
                    var res2 = integer_to_roman(roman);
                    $("#a").append('<label style="font-weight:bold;">' + res2 + '. &nbsp;&nbsp;&nbsp;</label>' + '&nbsp;' +
                        '<br><input type="text" name="textbox' + counter +
                        '" id="textbox_synonyms' + counter + '" value=""  class="form-control-sm"  onblur="myhighlightSynonyms(' + counter + ')" onfocus="myfocusSynonyms(' + counter + ')" placeholder="Highlighted word">' + '&nbsp;'
                    );
                    roman++;
                }


                for (k = 0; k < no_of_options; k++) {
                    var res = String.fromCharCode(c1);
                    if ($("input[name='type_synonyms'][value='Alphabets_synonyms']").prop("checked")) {
                        if (k == 0) {
                            $("#a").append('&nbsp;' + '<input type="text" name="option' + counter1 + '" id="option_synonyms' + counter1 + '" value="" class="form-control-sm" placeholder="option - ' + res + '">' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
                        }
                        if (k > 0) {
                            $("#a").append('&nbsp;' +
                                '<input type="text" name="option' + counter1 +
                                '" id="option_synonyms' + counter1 + '" value="" class="form-control-sm" placeholder="option - ' + res + '">' + '&nbsp;&nbsp;&nbsp;');
                        }
                    }

                    else if ($("input[name='type_synonyms'][value='Numbers_synonyms']").prop("checked")) {
                        if (start_no != 0) {
                            if (k == 0) {
                                $("#a").append('&nbsp;' + '<input type="text" name="option' + counter1 + '" id="option_synonyms' + counter1 + '" value="" class="form-control-sm" placeholder="option - ' + res + '">' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
                            }
                            if (k > 0) {
                                $("#a").append('&nbsp;' +
                                    '<input type="text" name="option' + counter1 +
                                    '" id="option_synonyms' + counter1 + '" value="" class="form-control-sm" placeholder="option - ' + res + '">' + '&nbsp;&nbsp;&nbsp;');
                            }
                        }

                    }

                    else if ($("input[name='type_synonyms'][value='Roman letters_synonyms']").prop("checked")) {
                        if (k == 0) {
                            $("#a").append('&nbsp;' + '<input type="text" name="option' + counter1 + '" id="option_synonyms' + counter1 + '" value="" class="form-control-sm" placeholder="option - ' + res + '">' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
                        }
                        if (k > 0) {
                            $("#a").append('&nbsp;' +
                                '<input type="text" name="option' + counter1 +
                                '" id="option_synonyms' + counter1 + '" value="" class="form-control-sm" placeholder="option - ' + res + '">' + '&nbsp;&nbsp;&nbsp;');
                        }
                    }




                    c1++;
                    counter1++;
                }
                if ($("input[name='type_synonyms'][value='Alphabets_synonyms']").prop("checked")) {
                    $("#a").append('<input style=" text-align:center; border-radius:5px;border: 1px solid gray;"type="text" id="eachmark_synonyms' + counter + '" value="' + each_mark_synonyms + '" size="4" placeholder="Mark" readonly>');
                }

                else if ($("input[name='type_synonyms'][value='Numbers_synonyms']").prop("checked")) {
                    if (start_no != 0) {
                        $("#a").append('<input style=" text-align:center; border-radius:5px;border: 1px solid gray;"type="text" id="eachmark_synonyms' + counter + '" value="' + each_mark_synonyms + '" size="4" placeholder="Mark" readonly>');
                    }

                }

                else if ($("input[name='type_synonyms'][value='Roman letters_synonyms']").prop("checked")) {
                    $("#a").append('<input style=" text-align:center; border-radius:5px;border: 1px solid gray;"type="text" id="eachmark_synonyms' + counter + '" value="' + each_mark_synonyms + '" size="4" placeholder="Mark" readonly>');
                }
                $("#a").append("<br><br>");
                c++;
                counter++;
            }
            if ($("input[name='type_synonyms'][value='Alphabets_synonyms']").prop("checked")) {
                $("#a").append('<div class="row"><div class="col-sm-2"><input type="button" id="getButtonValue_synonyms"  class="test btn btn-primary" value="Save" ></div></div>');
            }

            else if ($("input[name='type_synonyms'][value='Numbers_synonyms']").prop("checked")) {
                if (start_no != 0) {
                    $("#a").append('<div class="row"><div class="col-sm-2"><input type="button" id="getButtonValue_synonyms"  class="test btn btn-primary" value="Save" ></div></div>');
                }
                else {
                    alert("Please enter the starting number");
                }
            }

            else if ($("input[name='type_synonyms'][value='Roman letters_synonyms']").prop("checked")) {
                $("#a").append('<div class="row"><div class="col-sm-2"><input type="button" id="getButtonValue_synonyms"  class="test btn btn-primary" value="Save"  ></div></div>');
            }
        }

        else {
            alert("Please enter all the fields");
        }
    });

    $(document).on('click', "#getButtonValue_synonyms", function () {
        //console.log("Synonyms mark : "+mark_syn);
        var msg = '';
        var al = 1;
        var optionIndex = 0;
        var newOption = {};
        var question_arr = [];
        var option_arr = [];
        for (i = 1; i <= no_of_questions; i++) {
            highlight_word[i - 1] = $('#textbox_synonyms' + i).val();
            ques_arr.push($('#textbox_synonyms' + i).val());
            question_arr.push(ques_arr);
            if (highlight_word[i - 1] == "") {
                alert("Please enter all the highlighted words");
            }

            for (m = 1; m <= no_of_options; m++) {
                option[m - 1] = $('#option_synonyms' + al).val();
                if (option[m - 1] == "") {
                    alert("Please enter option");
                    break;
                }
                else {
                    opt_arr.push(option[m - 1]);
                    option_arr.push(opt_arr);
                    opt_arr = [];
                    al++;
                }
            }
            newOption[optionIndex] = option;
            option = [];
            optionIndex++;
            ques_arr = [];
        }

        counter = 1;
        item2 = {};
        item = {};
        quoteWords = {};
        options = {};
        paragraph = {};
        item1 = {};
        sliced = {};
        newObj = {};
        marks_syn = no_of_ques_syn + "x" + each_mark_synonyms + "=" + mark_syn;
        var c = 0;
        var count1 = 0;
        var count3 = 0;

        if ($("input[name='type_synonyms'][value='Numbers_synonyms']").prop("checked")) {
            var start_num = st;
            optionIndex = 0;
            for (i = 1; i <= no_of_questions; i++) {
                $("#textbox_synonyms" + i).each(function () {
                    var inData = $(this).val();
                    var para_graph = $("#txt_synonyms").text();
                    paragraph = [para_graph];
                    quoteWords[start_num] = inData;
                    options[start_num] = newOption[optionIndex];
                });
                start_num++;
                optionIndex++;
            }
        }

        if (ques_no != 0) {
            con_no = parseInt(ques_no) + 1;
        }
        else {
            con_no = start_num;
        }

        if ($("input[name='type_synonyms'][value='Roman letters_synonyms']").prop("checked")) {
            optionIndex = 0;
            for (i = 1; i <= no_of_questions; i++) {
                var roman = integer_to_roman(i);
                $("#textbox_synonyms" + i).each(function () {
                    var inData = $(this).val();
                    var para_graph = $("#txt_synonyms").text();
                    paragraph = [para_graph];
                    quoteWords[roman] = inData;
                    options[roman] = newOption[optionIndex];
                });
                optionIndex++;
            }
        }

        if ($("input[name='type_synonyms'][value='Alphabets_synonyms']").prop("checked")) {
            optionIndex = 0;
            var a = 97;
            for (i = 1; i <= no_of_questions; i++) {
                var alpha = String.fromCharCode(a);
                $("#textbox_synonyms" + i).each(function () {
                    var inData = $(this).val();
                    var para_graph = $("#txt_synonyms").text();
                    paragraph = [para_graph];
                    quoteWords[alpha] = inData;
                    options[alpha] = newOption[optionIndex];
                });
                optionIndex++;
                a += 1;
            }
        }

        var partno = "";
        for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
            console.log("retrived " + question_types[v] + " " + s_sec);
            var partarr = question_types[v];
            for (var h = 0; h < partarr.length; h++) {
                if ("Synonyms with paragraph" == partarr[h]) {
                    partno = v - s_sec;
                    break;
                }
            }
        }

        ques_no_syn = ques_no;

        item_syn[ques_no_syn] = {
            "type": "SYN",
            "heading": head,
            "marks": marks_syn,
            "paragraph": paragraph,
            "quotedWords": quoteWords,
            "options": options,
            "quoteType": "underline"
        };
        obj_syn = {
            "user": reg_teacher,
            "type": "SYN",
            "heading": head,
            "marks": marks_syn,
            "paragraph": paragraph,
            "quotedWords": quoteWords,
            "options": options,
            "quoteType": "underline"
        };

        //item2[ques_no] = item1;
        count3 = count(question_arr);
        count2 = count(option_arr);
        var arraySet = new Set(option_arr);
        if (arraySet.has("")) {
            alert("Please enter all the options");
        }

        if (count3 == no_of_questions) {
            if (count2 == no_of_questions * no_of_options) {
                console.log(JSON.stringify(item_syn, null, '\t'));

                if (item_syn != {}) {
                    if (part1.hasOwnProperty("part " + partno)) {
                        var temp_item = part1["part " + partno];
                        part1["part " + partno] = { ...temp_item, ...item_syn };
                    }
                    else {
                        part1["part " + partno] = item_syn;
                    }
                    item_syn = {};
                    console.log(JSON.stringify(part1,null,'\t'))
                }

                alert("Synonyms with paragraph is saved successfully!");
                document.getElementById("getButtonValue_synonyms").value = "Saved!"
                createSynonyms(JSON.stringify(obj_syn));
            }
            else {
                alert("Count 2 :" + count2 + "/ " + no_of_questions * no_of_options);
                
            }
        }

    });

    function count(array) {
        var c = 0;
        for (i in array) // in returns key, not object
            if (array[i] != "")
                c++;
    
        return c;
    }
});


function getResultsSynonyms(elem) {
    $(document).ready(function () {
        elem.checked && elem.value == "Numbers_synonyms" ? $("#dvtext_synonyms").show() : $("#dvtext_synonyms").hide();
    });
}

var text_synonyms = "";
    function myFunctionsSynonyms() {
        $(document).ready(function () {
            text_synonyms = $("#txt_synonyms").text();
        });
    }
    function myhighlightSynonyms(count) {
        $(document).ready(function () {
            var s = document.getElementById("textbox_synonyms" + count).value;
            var a = text_synonyms.replace(s, '<u>' + s + '</u>');
            text_synonyms = a;
            $("#txt_synonyms").html(a);
        });
    }

    function myfocusSynonyms(count) {
        $(document).ready(function () {
            var s = document.getElementById("textbox_synonyms" + count).value;
            if (s == "" || s == null) {

            }
            else {
                var a = text_synonyms.replace('<u>' + s + '</u>', s);
                text_synonyms = a;
                $("#txt_synonyms").html(a);
            }
        });
    }
