$(document).ready(function () {
    $("#punct_dvtext").hide();
    var counter = 1;
    var counter1 = 1;
    var c = 97;
    var no_of_questions = 0;
    var total_marks = 0;
    var count3 = 0;
    var res = "";
    var head = "";
    var res1 = 1;
    var start_no = 0;
    var st = 0;
    var a = 97;
    var ques_no = 0;
    var punc_ques = [];
    var cnt = 1;
    var num = 1;

    $(document).on('click', "#punct_addButton",function () {
    
        if (num > 1) {
            $("#punct").empty();
            counter = 1;
        }
        num++;
        $("#punct").append("<br><br>");
        no_of_questions = $("#punct-number-of-questions").val();
        num_ques_punc = no_of_questions;
        total_marks = $("#punct_marks").val();
        mark_punc = total_marks;
        ques_no = $("#punct-question-number").val();
        head = $("#punct_heading").val();
        start_no = $("#punct-starting-number").val();
        st = start_no;
        each_mark_punc = total_marks / no_of_questions;
        if (no_of_questions != 0 && total_marks != 0 && head != "" && $("input[name=type]").is(":checked")) {
            each_mark_punc = printEachMark(head, total_marks, no_of_questions);
            no_of_ques_punc = printNumQuestions(head, no_of_questions);
            var c1 = 97;
            var roman = 1;
            for (i = 0; i < no_of_questions; i++) {

                var res = String.fromCharCode(c1);

                if ($("input[name='type'][value='punct_Alphabets']").prop("checked")) {
                    $("#punct").append('<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + res + '. </label></div>' +
                        '<div class="col-sm-8"><input type="text"  name="punct_textbox' + counter +
                        '" id="punct_textbox' + counter + '" value="" class="form-control input-lg" placeholder="Question"></div>' + '&nbsp;&nbsp;&nbsp;' + '<div class="col-sm-2"><input style=" text-align:center; "type="text" class="form-control" id="punct_eachmark' + counter + '" value="' + each_mark_punc + '" size="4" placeholder="Mark" readonly></div></div>'
                    );
                }

                else if ($("input[name='type'][value='punct_Numbers']").prop("checked")) {
                    if (start_no != 0) {
                        $("#punct").append('<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + start_no + '. </label></div>' +
                            '<div class="col-sm-8"><input type="text" name="punct_textbox' + counter +
                            '" id="punct_textbox' + counter + '" value="" class="form-control input-lg" placeholder="Question"></div>' + '&nbsp;&nbsp;&nbsp;' + '<div class="col-sm-2"><input style=" text-align:center;"type="text" class="form-control" id="punct_eachmark' + counter + '" value="' + each_mark_punc + '" size="4" placeholder="Mark" readonly></div></div>'
                        );
                        start_no++;
                    }
                }

                else if ($("input[name='type'][value='punct_Roman letters']").prop("checked")) {
                    var res2 = integer_to_roman(roman);
                    $("#punct").append('<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + res2 + '.</label></div>' +
                        '<div class="col-sm-8"><input type="text"  name="punct_textbox' + counter +
                        '" id="punct_textbox' + counter + '" value="" class="form-control input-lg" placeholder="Question"></div>' + '&nbsp;' + '<div class="col-sm-2"><input class="form-control w-5" style=" text-align:center;"type="text" id="punct_eachmark' + counter + '" value="' + each_mark_punc + '" size="4" placeholder="Mark" readonly></div></div>');
                    roman++;
                }
                $("#punct").append("<br>");
                c1++;
                counter++;
            }

            if ($("input[name='type'][value='punct_Alphabets']").prop("checked")) {
                $("#punct").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="punct_getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
            }

            else if ($("input[name='type'][value='punct_Numbers']").prop("checked")) {
                if (start_no != 0) {
                    $("#punct").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="punct_getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
                }
                else {
                    alert("Please enter the starting number");
                }
            }

            else if ($("input[name='type'][value='punct_Roman letters']").prop("checked")) {
                $("#punct").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="punct_getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
            }
        }

        else {
            alert("Please enter all the fields");
        }
    });

    $(document).on('click', "#punct_getButtonValue", function () {
        for (i = 1; i <= no_of_questions; i++) {
            punc_ques[i - 1] = $('#punct_textbox' + i).val();
            if (punc_ques[i - 1] == "") {
                alert("Please enter all the questions");
                break;
            }
            else {
                console.log(punc_ques[i - 1]);
            }
        }

        item2 = {};
        item = {};
        marks_punc = no_of_ques_punc + "x" + each_mark_punc + "=" + mark_punc;
        item1 = {};
        ques_arr = [];
        if ($("input[name='type'][value='punct_Numbers']").prop("checked")) {
            var start_num = st;
            for (i = 1; i <= no_of_questions; i++) {
                $("#punct_textbox" + i).each(function () {
                    var inData = $(this).val();
                    ques_arr.push(inData);
                    item[start_num] = { "question": inData, "type": "MCQN", "quotedWords": null, "quoteType": null, "options": null };
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
        if ($("input[name='type'][value='punct_Roman letters']").prop("checked")) {
            for (i = 1; i <= no_of_questions; i++) {
                var roman = integer_to_roman(i);
                $("#punct_textbox" + i).each(function () {
                    var inData = $(this).val();
                    ques_arr.push(inData);
                    item[roman] = { "question": inData, "type": "MCQN", "quotedWords": null, "quoteType": null, "options": null };
                });
            }
        }

        if ($("input[name='type'][value='punct_Alphabets']").prop("checked")) {
            var character = 97;
            for (i = 1; i <= no_of_questions; i++) {
                var alpha = String.fromCharCode(character);
                $("#punct_textbox" + i).each(function () {
                    var inData = $(this).val();
                    ques_arr.push(inData);
                    item[alpha] = { "question": inData, "type": "MCQN", "quotedWords": null, "quoteType": null, "options": null };
                });
                character++;
            }
        }

        var partno = "";
        for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
            console.log("retrived " + question_types[v]);
            var partarr = question_types[v];
            for (var h = 0; h < partarr.length; h++) {
                if ("Punctuation" == partarr[h]) {
                    partno = v - s_sec;
                    break;
                }
            }
        }

        item_punc = {
            "heading": head,
            "marks": marks_punc
        };

        obj_punc = {
            "user": reg_teacher,
            "heading": head,
            "marks": marks_punc
        };


        for (let key in item) {
            item_punc[key] = item[key];
        }
        for (let key in item) {
            obj_punc[key] = item[key];
        }

        if (ques_arr.length == no_of_questions) {
            var arraySet = new Set(ques_arr)
            if (arraySet.has("")) {
            }
            else {
                alert("Punctuation questions is saved successfully!");
                // console.log(JSON.stringify(item_punc,null,'\t'))
                document.getElementById("punct_getButtonValue").value = "Saved!";

                // createPunctuation(JSON.stringify(obj_punc));
                if (item_punc != {}) {
                    if (part1.hasOwnProperty("part " + partno)) {
                        var temp_item = part1["part " + partno];
                        part1["part " + partno] = { ...temp_item, ...item_punc };
                    }
                    else {
                        part1["part " + partno] = item_punc;
                    }
                    item_punc = {};
                    console.log(JSON.stringify(part1,null,'\t'))
                }
            }

        }
    });
});

function getResults_punct(elem) {
    $(document).ready(function () {
        elem.checked && elem.value == "punct_Numbers" ? $("#punct_dvtext").show() : $("#punct_dvtext").hide();
    })
};


