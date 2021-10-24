$(document).ready(function () {
    $("#poem_dvtext").hide();

    var counter = 1;
    var counter1 = 1;
    var c = 97;
    var no_of_questions = 0;//no. of question
    var total_marks = 0;//mark
    var head = "";
    var ques_no = 0;
    var start_no = 1;
    var st = 0;
    var a = 97;
    var res = "";
    var res1 = 1;
    var poemLines = [];
    var ques = [];
    var cnt = 1;
    var num = 1;

    $(document).on('click', "#poem_addButton",function () {
        if (num > 1) {
            $("#l").empty();
            counter = 1;
        }
        num++;
        no_of_questions = $("#poem-number-of-questions").val();
        num_ques_poet = no_of_questions;
        total_marks = $("#poem_marks").val();
        mark_poet = total_marks;
        head = $("#poem_heading").val();
        ques_no = $("#poem-question-number").val();
        start_no = $("#poem-starting-number").val();
        st = start_no;
        each_mark_poet = printEachMark(head, total_marks, no_of_questions);
        no_of_ques_poet = printNumQuestions(head, no_of_questions);

        if (no_of_questions != 0 && total_marks != 0 && head != "" && $("input[name=type]").is(":checked")) {
            $("#l").append("<br><br>");
            var c1 = 97;
            var roman = 1;
            for (i = 0; i < no_of_questions; i++) {
                var res = String.fromCharCode(c1);
                if ($("input[name='type'][value='poem_Alphabets']").prop("checked")) {
                    $("#l").append('<div class="row"> <div class="col-sm-1"><label style="font-weight:bold;">' + res + '. </label></div>' +
                        '<div class="col-sm-9"><div style="height:200px; " name="message" id="poem_Line' + counter + '" class="form-control" contenteditable="true" data-placeholder="Type your Poemline here..." cols="100" rows="4"></div></div>' + '<div class="col-sm-2"><input type="text" class="form-control mt-2 mt-md-0" id="poem_eachmark' + counter + '" value="' + each_mark_poet + '" size="4" placeholder="Mark" readonly></div>' + '</div>'
                    );
                    $("#l").append(
                        '&nbsp;<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-9"><input type="text" id="poem_ques' + counter + '" value="" class="form-control" placeholder="Question "></div></div>'
                    );
                    $("#l").append("<br>");

                }

                else if ($("input[name='type'][value='poem_Numbers']").prop("checked")) {
                    if (start_no != 0) {
                        $("#l").append('<div class="row"> <div class="col-sm-1"><label style="font-weight:bold;">' + start_no + '. </label></div>' +
                            '<div class="col-sm-9"><div style="height:200px; " name="message" id="poem_Line' + counter + '" class="form-control" contenteditable="true" data-placeholder="Type your Poemline here..." cols="100" rows="4"></div></div>' + '<div class="col-sm-2"><input type="text" class="form-control mt-2 mt-md-0" id="poem_eachmark' + counter + '" value="' + each_mark_poet + '" size="4" placeholder="Mark" readonly></div>' + '</div>'
                        );
                        $("#l").append(
                            '&nbsp;<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-9"><input type="text" id="poem_ques' + counter + '" value="" class="form-control" placeholder="Question "></div></div>'
                        );
                        $("#l").append("<br>");
                        start_no++;
                    }
                }

                else if ($("input[name='type'][value='poem_Roman letters']").prop("checked")) {
                    var res2 = integer_to_roman(roman);
                    $("#l").append('<div class="row"> <div class="col-sm-1"><label style="font-weight:bold;">' + res2 + '. </label></div>' +
                        '<div class="col-sm-9"><div style="height:200px; " name="message" id="poem_Line' + counter + '" class="form-control" contenteditable="true" data-placeholder="Type your Poemline here..." cols="100" rows="4"></div></div>' + '<div class="col-sm-2"><input type="text" class="form-control mt-2 mt-md-0" id="poem_eachmark' + counter + '" value="' + each_mark_poet + '" size="4" placeholder="Mark" readonly></div>' + '</div>'
                    );
                    $("#l").append(
                        '&nbsp;<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-9"><input type="text" id="poem_ques' + counter + '" value="" class="form-control" placeholder="Question "></div></div>'
                    );
                    $("#l").append("<br>");
                    roman++;
                }
                $("#l").append("<br>");

                c1++;
                counter++;
            }
            if ($("input[name='type'][value='poem_Alphabets']").prop("checked")) {
                $("#l").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="poem_getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
            }

            else if ($("input[name='type'][value='poem_Numbers']").prop("checked")) {
                if (start_no != 0) {
                    $("#l").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="poem_getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
                }
                else {
                    alert("Please enter the starting number");
                }
            }

            else if ($("input[name='type'][value='poem_Roman letters']").prop("checked")) {
                $("#l").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="poem_getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
            }

        }
        else {
            alert("Please enter all the fields");
        }
    });

    $(document).on('click', "#poem_getButtonValue", function () {

        for (i = 1; i <= no_of_questions; i++) {
            poemLines[i - 1] = $('#poem_Line' + i).text();
            if (poemLines[i - 1] == "") {
                alert("Please enter all the Poem lines");
                break;
            }
            else {
                // console.log(poemLines[i - 1]);
            }
        }


        for (i = 1; i <= no_of_questions; i++) {
            ques[i - 1] = $('#poem_ques' + i).val();
            if (ques[i - 1] == "") {
                alert("Please enter all the questions");
                break;
            }
            else {
                // console.log(ques[i - 1]);
            }
        }

        item = {};
        item1 = {};
        marks_poet = no_of_ques_poet + "x" + each_mark_poet + "=" + mark_poet;
        ques_arr = [];
        if ($("input[name='type'][value='poem_Numbers']").prop("checked")) {
            var start_num = st;
            for (i = 1; i <= no_of_questions; i++) {
                $("#poem_Line" + i).each(function () {
                    var poem_line = $(this).text();
                    var question_number = $("#poem_ques" + i).val();
                    var Mark = $("#poem_eachmark" + i).val();
                    if (poem_line != "" && question_number != "" && Mark != "") {
                        var inData = {
                            "heading": null,
                            "type": "MCQN",
                            "marks": Mark,
                            "quotedWords": poem_line,
                            "question": question_number,
                            "quoteType": null,
                            "options": null
                        }
                        ques_arr.push(inData);
                    }
                    item[start_num] = inData;
                });
                start_num++;
            }
        }

        if (ques_no != 0) {
            con_no = parseInt(ques_no) + 1;
        }
        else {
            con_no = start_num;
        }

        if ($("input[name='type'][value='poem_Roman letters']").prop("checked")) {
            for (i = 1; i <= no_of_questions; i++) {
                var roman = integer_to_roman(i);
                $("#poem_Line" + i).each(function () {
                    var poem_line = $(this).text();
                    var question_number = $("#poem_ques" + i).val();
                    var Mark = $("#poem_eachmark" + i).val();
                    if (poem_line != "" && question_number != "" && Mark != "") {
                        var inData = {
                            "heading": null,
                            "type": "MCQN",
                            "marks": Mark,
                            "quotedWords": poem_line,
                            "question": question_number,
                            "quoteType": null,
                            "options": null
                        }
                        ques_arr.push(inData);
                    }
                    item[roman] = inData;
                });
            }
        }

        if ($("input[name='type'][value='poem_Alphabets']").prop("checked")) {
            var character = 97;
            for (i = 1; i <= no_of_questions; i++) {
                var alpha = String.fromCharCode(character);
                $("#poem_Line" + i).each(function () {
                    var poem_line = $(this).text();
                    var question_number = $("#poem_ques" + i).val();
                    var Mark = $("#poem_eachmark" + i).val();
                    if (poem_line != "" && question_number != "" && Mark != "") {
                        var inData = {
                            "heading": null,
                            "type": "MCQN",
                            "marks": Mark,
                            "quotedWords": poem_line,
                            "question": question_number,
                            "quoteType": null,
                            "options": null
                        }
                        ques_arr.push(inData);
                    }
                    item[alpha] = inData;
                });
                character++;
            }
        }

        var partno = "";
        
        for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
            console.log("retrived " + question_types[v]);
            var partarr = question_types[v];
            for (var h = 0; h < partarr.length; h++) {
                if ("Poetic lines with questions" == partarr[h]) {
                    partno = v - s_sec;
                    break;
                }
            }
        }

        item_poet = {

            "heading": head,
            "marks": marks_poet

        };
        obj_poet = {
            "user": reg_teacher,

            "heading": head,
            "marks": marks_poet

        };

        if (ques_arr.length == no_of_questions) {
            var arraySet = new Set(ques_arr)
            if (arraySet.has("")) {
            }
            else {
                alert("Poetic lines with questions is saved successfully!");
                document.getElementById("poem_getButtonValue").value = "Saved!";
                obj_poet = { ...item, ...obj_poet }
                console.log(JSON.stringify(item_poet,null,'\t'))
                createPoeticLines(JSON.stringify(obj_poet));
                if (item_poet != {}) {
                    item_poet = { ...item, ...item_poet }
                    if (part1.hasOwnProperty("part " + partno)) {
                        var temp_item = part1["part " + partno];
                        part1["part " + partno] = { ...temp_item, ...item_poet };
                    }
                    else {
                        part1["part " + partno] = item_poet;
                    }
                    item_poet = {};
                }
            }

        }
    });
});

function getResults_poem(elem) {
    $(document).ready(function () {
        elem.checked && elem.value == "poem_Numbers" ? $("#poem_dvtext").show() : $("#poem_dvtext").hide();
    })

};