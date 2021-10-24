$(document).ready(function () {
    $("#error_dvtext").hide();

    var counter = 1;
    var counter1 = 1;
    var c = 97;
    var no_of_questions = 0;
    var total_marks = 0;
    var no_of_options = 0;
    var res = "";
    var head = "";
    var res1 = 1;
    var start_no = 0;
    var st = 0;
    var a = 97;
    var ques_no = 0;
    var err_ques = [];
    var cnt = 1;
    var num = 1;

    $(document).on('click', "#error_addButton",function () {
        if (num > 1) {
            $("#error").empty();
            counter = 1;
        }
        $("#error").append("<br><br>");
        no_of_questions = $("#error-number-of-questions").val();
        num_ques_errques = no_of_questions;
        total_marks = $("#error_marks").val();
        mark_errques = total_marks;
        ques_no = $("#error-question-number").val();
        head = $("#error_heading").val();
        start_no = $("#error-starting-number").val();
        st = start_no;
        if (no_of_questions != 0 && total_marks != 0 && head != "" && ques_no != 0 && $("input[name=type]").is(":checked")) {
            each_mark_errques = printEachMark(head, total_marks, no_of_questions);
            no_of_ques_errques = printNumQuestions(head, no_of_questions);

            var c1 = 97;
            var roman = 1;
            for (i = 0; i < no_of_questions; i++) {
                var res = String.fromCharCode(c1);
                if ($("input[name='type'][value='error_Alphabets']").prop("checked")) {
                    $("#error").append('<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + res + '. </label></div>' +
                        '<div class="col-sm-8"><input type="text"  name="error_textbox' + counter +
                        '" id="error_textbox' + counter + '" value="" class="form-control input-lg" placeholder="Question"></div>' + '&nbsp;&nbsp;&nbsp;' + '<div class="col-sm-2"><input style=" text-align:center; "type="text" class="form-control" id="error_eachmark' + counter + '" value="' + each_mark_errques + '" size="4" placeholder="Mark" readonly></div></div>'
                    );
                }

                else if ($("input[name='type'][value='error_Numbers']").prop("checked")) {
                    if (start_no != 0) {
                        $("#error").append('<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + start_no + '. </label></div>' +
                            '<div class="col-sm-8"><input type="text" name="error_textbox' + counter +
                            '" id="error_textbox' + counter + '" value="" class="form-control input-lg" placeholder="Question"></div>' + '&nbsp;&nbsp;&nbsp;' + '<div class="col-sm-2"><input style=" text-align:center;"type="text" class="form-control" id="error_eachmark' + counter + '" value="' + each_mark_errques + '" size="4" placeholder="Mark" readonly></div></div>'
                        );
                        start_no++;
                    }
                }

                else if ($("input[name='type'][value='error_Roman letters']").prop("checked")) {
                    var res2 = integer_to_roman(roman);
                    $("#error").append('<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + res2 + '.</label></div>' +
                        '<div class="col-sm-8"><input type="text"  name="error_textbox' + counter +
                        '" id="error_textbox' + counter + '" value="" class="form-control input-lg" placeholder="Question"></div>' + '&nbsp;' + '<div class="col-sm-2"><input class="form-control w-5" style=" text-align:center;"type="text" id="error_eachmark' + counter + '" value="' + each_mark_errques + '" size="4" placeholder="Mark" readonly></div></div>');
                    roman++;
                }
                $("#error").append("<br>");
                c1++;
                counter++;
            }

            if ($("input[name='type'][value='error_Alphabets']").prop("checked")) {
                $("#error").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="error_getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
            }

            else if ($("input[name='type'][value='error_Numbers']").prop("checked")) {
                if (start_no != 0) {
                    $("#error").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="error_getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
                }
                else {
                    alert("Please enter the starting number");
                }
            }

            else if ($("input[name='type'][value='error_Roman letters']").prop("checked")) {
                $("#error").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="error_getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
            }

        }

        else {
            alert("Please enter all the fields");
        }
        num++;
    });

    $(document).on('click', "#error_getButtonValue", function () {
        for (i = 1; i <= no_of_questions; i++) {
            err_ques[i - 1] = $('#error_textbox' + i).val();
            if (err_ques[i - 1] == "") {
                alert("Please enter all the questions");
                break;
            }
            else {
                //console.log(err_ques[i - 1]);
            }
        }

        item2 = {};
        marks_errques = no_of_ques_errques + "x" + each_mark_errques + "=" + mark_errques;
        item = {};
        item1 = {};
        var ques = [];
        if ($("input[name='type'][value='error_Numbers']").prop("checked")) {
            var start_num = st;
            for (i = 1; i <= no_of_questions; i++) {
                $("#error_textbox" + i).each(function () {
                    var inData = $(this).val();
                    item[start_num] = inData;
                    if (inData != "") {
                        ques.push(inData);
                    }

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

        if ($("input[name='type'][value='error_Roman letters']").prop("checked")) {
            for (i = 1; i <= no_of_questions; i++) {
                var roman = integer_to_roman(i);
                $("#error_textbox" + i).each(function () {
                    var inData = $(this).val();
                    item[roman] = inData;
                    if (inData != "") {
                        ques.push(inData);
                    }
                });
            }
        }

        if ($("input[name='type'][value='error_Alphabets']").prop("checked")) {
            var chatacter = 97;
            for (i = 1; i <= no_of_questions; i++) {
                var alpha = String.fromCharCode(chatacter);
                $("#error_textbox" + i).each(function () {
                    var inData = $(this).val();
                    item[alpha] = inData;
                    if (inData != "") {
                        ques.push(inData);
                    }
                });
                chatacter++;
            }
        }

        var partno = "";
        for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
            console.log("retrived " + question_types[v]);
            var partarr = question_types[v];
            for (var h = 0; h < partarr.length; h++) {
                if ("Error Spotting" == partarr[h]) {
                    partno = v - s_sec;
                    break;
                }
            }
        }

        ques_no_err = ques_no;
        item_errques[ques_no] = {
            "heading": head,
            "type": "COMP",
            "marks": marks_errques,
            "question": item,
            "quotedWords": null,
            "quoteType": null,
            "options": null
        };
        obj_errques = {
            "user": reg_teacher,
            "heading": head,
            "type": "COMP",
            "marks": marks_errques,
            "question": item,
            "quotedWords": null,
            "quoteType": null,
            "options": null,

        };
        if (ques.length == no_of_questions) {
            alert("Spot the errors is saved successfully!");
            document.getElementById("error_getButtonValue").value = "Saved!";
            console.log(JSON.stringify(item_errques,null,'\t'))
            createErrorSpotting(JSON.stringify(obj_errques));
            if (item_errques != {}) {
                if (part1.hasOwnProperty("part " + partno)) {
                    var temp_item = part1["part " + partno];
                    part1["part " + partno] = { ...temp_item, ...item_errques };
                }
                else {
                    part1["part " + partno] = item_errques;
                }
                item_errques = {};
            }
        }
    });
});

function getResults_error(elem) {
    $(document).ready(function () {
        elem.checked && elem.value == "error_Numbers" ? $("#error_dvtext").show() : $("#error_dvtext").hide();
    })

};