$(document).ready(function () {
    $("#figure_dvtext").hide();

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

    $(document).on('click', "#figure_addButton",function () {

        if (num > 1) {
            $("#m").empty();
            counter = 1;
        }
        num++;
        no_of_questions = $("#figure-number-of-questions").val();
        num_ques_fig = no_of_questions;
        total_marks = $("#figure_marks").val();
        mark_fig = total_marks;
        head = $("#figure_heading").val();
        ques_no = $("#figure-question-number").val();
        start_no = $("#figure-starting-number").val();
        st = start_no;
        each_mark_fig = printEachMark(head, total_marks, no_of_questions);
        no_of_ques_fig = printNumQuestions(head, no_of_questions);
        if (no_of_questions != 0 && total_marks != 0 && head != "" && $("input[name=type]").is(":checked")) {
            $("#m").append("<br><br>");
            var c1 = 97;
            var roman = 1;
            for (i = 0; i < no_of_questions; i++) {
                var res = String.fromCharCode(c1);
                if ($("input[name='type'][value='figure_Alphabets']").prop("checked")) {
                    $("#m").append('<div class="row"> <div class="col-sm-1"><label style="font-weight:bold;">' + res + '. </label></div>' +
                        '<div class="col-sm-9"><div style="height:200px; " name="message" id="figure_poemLine' + counter + '" class="form-control" contenteditable="true" data-placeholder="Type your Poemline here..." cols="100" rows="4"></div></div>' + '<div class="col-sm-2"><input type="text" class="form-control mt-2 mt-md-0" id="figure_eachmark' + counter + '" value="' + each_mark_fig + '" size="4" placeholder="Mark" readonly></div>' + '</div>'
                    );
                    $("#m").append(
                        '&nbsp;<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-9"><input type="text" id="figure_ques' + counter + '" value="" class="form-control" placeholder="Question "></div></div>'
                    );
                    $("#m").append("<br>");

                }

                else if ($("input[name='type'][value='figure_Numbers']").prop("checked")) {
                    if (start_no != 0) {
                        $("#m").append('<div class="row"> <div class="col-sm-1"><label style="font-weight:bold;">' + start_no + '. </label></div>' +
                            '<div class="col-sm-9"><div style="height:200px; " name="message" id="figure_poemLine' + counter + '" class="form-control" contenteditable="true" data-placeholder="Type your Poemline here..." cols="100" rows="4"></div></div>' + '<div class="col-sm-2"><input type="text" class="form-control mt-2 mt-md-0" id="figure_eachmark' + counter + '" value="' + each_mark_fig + '" size="4" placeholder="Mark" readonly></div>' + '</div>'
                        );
                        $("#m").append(
                            '&nbsp;<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-9"><input type="text" id="figure_ques' + counter + '" value="" class="form-control" placeholder="Question "></div></div>'
                        );
                        $("#m").append("<br>");
                        start_no++;
                    }
                }

                else if ($("input[name='type'][value='figure_Roman letters']").prop("checked")) {
                    var res2 = integer_to_roman(roman);
                    $("#m").append('<div class="row"> <div class="col-sm-1"><label style="font-weight:bold;">' + res2 + '. </label></div>' +
                        '<div class="col-sm-9"><div style="height:200px; " name="message" id="figure_poemLine' + counter + '" class="form-control" contenteditable="true" data-placeholder="Type your Poemline here..." cols="100" rows="4"></div></div>' + '<div class="col-sm-2"><input type="text" class="form-control mt-2 mt-md-0" id="figure_eachmark' + counter + '" value="' + each_mark_fig + '" size="4" placeholder="Mark" readonly></div>' + '</div>'
                    );
                    $("#m").append(
                        '&nbsp;<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-9"><input type="text" id="figure_ques' + counter + '" value="" class="form-control" placeholder="Question "></div></div>'
                    );
                    $("#m").append("<br>");
                    roman++;
                }
                $("#m").append("<br>");

                c1++;
                counter++;
            }
            if ($("input[name='type'][value='figure_Alphabets']").prop("checked")) {
                $("#m").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="figure_getButtonValue"  class="test btn btn-primary" value=Save" ></div></div>');
            }

            else if ($("input[name='type'][value='figure_Numbers']").prop("checked")) {
                if (start_no != 0) {
                    $("#m").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="figure_getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
                }
                else {
                    alert("Please enter the starting number");
                }
            }

            else if ($("input[name='type'][value='figure_Roman letters']").prop("checked")) {
                $("#m").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="figure_getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
            }

        }
        else {
            alert("Please enter all the fields");
        }
    });

    $(document).on('click', "#figure_getButtonValue", function () {

        for (i = 1; i <= no_of_questions; i++) {
            poemLines[i - 1] = $('#figure_poemLine' + i).text();
            if (poemLines[i - 1] == "") {
                alert("Please enter all the Poem lines");
                break;
            }
            else {
                //console.log(poemLines[i - 1]);
            }
        }


        for (i = 1; i <= no_of_questions; i++) {
            ques[i - 1] = $('#figure_ques' + i).val();
            if (ques[i - 1] == "") {
                alert("Please enter all the questions");
                break;
            }
            else {
                //console.log(ques[i - 1]);
            }
        }

        item = {};
        item1 = {};
        marks_fig = no_of_ques_fig + "x" + each_mark_fig + "=" + mark_fig;
        ques_arr = [];
        if ($("input[name='type'][value='figure_Numbers']").prop("checked")) {
            var start_num = st;
            for (i = 1; i <= no_of_questions; i++) {
                $("#figure_poemLine" + i).each(function () {
                    var poem_line = $(this).text();
                    var question_number = $("#figure_ques" + i).val();
                    var Mark = $("#figure_eachmark" + i).val();
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

        if ($("input[name='type'][value='figure_Roman letters']").prop("checked")) {
            for (i = 1; i <= no_of_questions; i++) {
                var roman = integer_to_roman(i);
                $("#figure_poemLine" + i).each(function () {
                    var poem_line = $(this).text();
                    var question_number = $("#figure_ques" + i).val();
                    var Mark = $("#figure_eachmark" + i).val();
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

        if ($("input[name='type'][value='figure_Alphabets']").prop("checked")) {
            var character = 97;
            for (i = 1; i <= no_of_questions; i++) {
                var alpha = String.fromCharCode(character);
                $("#figure_poemLine" + i).each(function () {
                    var poem_line = $(this).text();
                    var question_number = $("#figure_ques" + i).val();
                    var Mark = $("#figure_eachmark" + i).val();
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
                if ("Figure of speech" == partarr[h]) {
                    partno = v - s_sec;
                    break;
                }
            }
        }

        item_fig = {

            "heading": head,
            "marks": marks_fig

        };
        obj_fig = {
            "user": reg_teacher,

            "heading": head,
            "marks": marks_fig

        };

        if (ques_arr.length == no_of_questions) {
            var arraySet = new Set(ques_arr)
            if (arraySet.has("")) {
            }
            else {
                alert("Figure of speech is saved successfully!");
                document.getElementById("figure_getButtonValue").value = "Saved!";
                obj_fig = { ...item, ...obj_fig }
                console.log(JSON.stringify(item_fig,null,'\t'))
                createFigureOfSpeech(JSON.stringify(obj_fig));
                if (item_fig != {}) {
                    item_fig = { ...item, ...item_fig }

                    if (part1.hasOwnProperty("part " + partno)) {
                        var temp_item = part1["part " + partno];
                        part1["part " + partno] = { ...temp_item, ...item_fig };
                    }
                    else {
                        part1["part " + partno] = item_fig;
                    }
                    item_fig = {};
                }
            }

        }
    });
});

function getResults_figure(elem) {
    $(document).ready(function () {
        elem.checked && elem.value == "figure_Numbers" ? $("#figure_dvtext").show() : $("#figure_dvtext").hide();
    })

};