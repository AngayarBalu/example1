$(document).ready(function () {
    $("#dvtext_shortques").hide();

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
    var short_ques = [];
    var cnt = 1;
    var num = 1;

    $(document).on('click', "#addButton_shortques",function () {
        short_ques = [];
        if (num > 1) {
            $("#g").empty();
            counter = 1;
        }
        num++;
        $("#g").append("<br><br>");
        no_of_questions = $("#number-of-questions_shortques").val();
        num_ques_shortques = no_of_questions;
        total_marks = $("#marks_shortques").val();
        mark_shortques = total_marks;
        ques_no = $("#question-number_shortques").val();
        head = $("#heading_shortques").val();
        start_no = $("#starting-number_shortques").val();
        st = start_no;
        if (no_of_questions != 0 && total_marks != 0 && head != "" && $("input[name=type_shortques]").is(":checked")) {
            each_mark_shortques = printEachMark(head, total_marks, no_of_questions);
            no_of_ques_shortques = printNumQuestions(head, no_of_questions);

            var c1 = 97;
            var roman = 1;
            for (i = 0; i < no_of_questions; i++) {

                var res = String.fromCharCode(c1);

                if ($("input[name='type_shortques'][value='Alphabets_shortques']").prop("checked")) {
                    $("#g").append('<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + res + '. </label></div>' +
                        '<div class="col-sm-8"><input type="text"  name="textbox' + counter +
                        '" id="textbox_shortques' + counter + '" value="" class="form-control input-lg" placeholder="Question"></div>' + '&nbsp;&nbsp;&nbsp;' + '<div class="col-sm-2"><input style=" text-align:center; "type="text" class="form-control" id="eachmark_shortques' + counter + '" value="' + each_mark_shortques + '" size="4" placeholder="Mark" readonly></div></div>'
                    );
                }

                else if ($("input[name='type_shortques'][value='Numbers_shortques']").prop("checked")) {
                    if (start_no != 0) {
                        $("#g").append('<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + start_no + '. </label></div>' +
                            '<div class="col-sm-8"><input type="text" name="textbox' + counter +
                            '" id="textbox_shortques' + counter + '" value="" class="form-control input-lg" placeholder="Question"></div>' + '&nbsp;&nbsp;&nbsp;' + '<div class="col-sm-2"><input style=" text-align:center;"type="text" class="form-control" id="eachmark_shortques' + counter + '" value="' + each_mark_shortques + '" size="4" placeholder="Mark" readonly></div></div>'
                        );
                        start_no++;
                    }
                }

                else if ($("input[name='type_shortques'][value='Roman letters_shortques']").prop("checked")) {
                    var res2 = integer_to_roman(roman);
                    $("#g").append('<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + res2 + '.</label></div>' +
                        '<div class="col-sm-8"><input type="text"  name="textbox' + counter +
                        '" id="textbox_shortques' + counter + '" value="" class="form-control input-lg" placeholder="Question"></div>' + '&nbsp;' + '<div class="col-sm-2"><input class="form-control w-5" style=" text-align:center;"type="text" id="eachmark_shortques' + counter + '" value="' + each_mark_shortques + '" size="4" placeholder="Mark" readonly></div></div>');
                    roman++;
                }
                $("#g").append("<br>");
                c1++;
                counter++;
            }

            if ($("input[name='type_shortques'][value='Alphabets_shortques']").prop("checked")) {
                $("#g").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="getButtonValue_shortques"  class="test btn btn-primary" value="Save" ></div></div>');
            }

            else if ($("input[name='type_shortques'][value='Numbers_shortques']").prop("checked")) {
                if (start_no != 0) {
                    $("#g").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="getButtonValue_shortques"  class="test btn btn-primary" value="Save" ></div></div>');
                }
                else {
                    alert("Please enter the starting number");
                }
            }

            else if ($("input[name='type_shortques'][value='Roman letters_shortques']").prop("checked")) {
                $("#g").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="getButtonValue_shortques"  class="test btn btn-primary" value="Save" ></div></div>');
            }
        }

        else {
            alert("Please enter all the fields");
        }
    });

    $(document).on('click', "#getButtonValue_shortques", function () {
       
        for (i = 1; i <= no_of_questions; i++) {
            short_ques[i - 1] = $('#textbox_shortques' + i).val();
            if (short_ques[i - 1] == "") {
                alert("Please enter all the questions");
                break;
            }
            else {
                console.log(short_ques[i - 1]);
            }
        }

        item2 = {};
        item = {};
        item1 = {};
        marks_shortques = no_of_ques_shortques + "x" + each_mark_shortques + "=" + mark_shortques;
        ques_arr = [];
        if ($("input[name='type_shortques'][value='Numbers_shortques']").prop("checked")) {
            var start_num = st;
            for (i = 1; i <= no_of_questions; i++) {
                $("#textbox_shortques" + i).each(function () {
                    var inData = $(this).val();
                    ques_arr.push(inData);
                    item[start_num] = { "heading": null, "type": "MCQN", "question": inData, "quotedWords": null, "quoteType": null, "options": null };
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
        if ($("input[name='type_shortques'][value='Roman letters_shortques']").prop("checked")) {
            for (i = 1; i <= no_of_questions; i++) {
                var roman = integer_to_roman(i);
                $("#textbox_shortques" + i).each(function () {
                    var inData = $(this).val();
                    ques_arr.push(inData);
                    item[roman] = { "heading": null, "type": "MCQN", "question": inData, "quotedWords": null, "quoteType": null, "options": null };
                });
            }
        }

        if ($("input[name='type_shortques'][value='Alphabets_shortques']").prop("checked")) {
            var character = 97;
            for (i = 1; i <= no_of_questions; i++) {
                var alpha = String.fromCharCode(character);
                $("#textbox_shortques" + i).each(function () {
                    var inData = $(this).val();
                    ques_arr.push(inData);
                    item[alpha] = { "heading": null, "type": "MCQN", "question": inData, "quotedWords": null, "quoteType": null, "options": null };
                });
                character++;
            }
        }

        var partno = "";
        for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
            console.log("retrived " + question_types[v]);
            var partarr = question_types[v];
            for (var h = 0; h < partarr.length; h++) {
                if ("Short questions" == partarr[h]) {
                    partno = v - s_sec;
                    break;
                }
            }
        }

        item_shortques = {
            "heading": head,
            "marks": marks_shortques

        };
        obj_shortques = {
            "user": reg_teacher,
            "heading": head,
            "marks": marks_shortques
        };

        for (let key in item) {
            item_shortques[key] = item[key];
        }
        for (let key in item) {
            obj_shortques[key] = item[key];
        }

        if (ques_arr.length == no_of_questions) {
            var arraySet = new Set(ques_arr)
            if (arraySet.has("")) {
            }
            else {
                alert("Short questions is saved successfully!");
                console.log(JSON.stringify(item_shortques,null,'\t'))
                document.getElementById("getButtonValue_shortques").value = "Saved!"
                createShortQuestions(JSON.stringify(obj_shortques));
                if (item_shortques != {}) {
                    if (part1.hasOwnProperty("part " + partno)) {
                        
                        var temp_item = part1["part " + partno];
                        part1["part " + partno] = { ...temp_item, ...item_shortques };
                    }
                    else {
                        
                        part1["part " + partno] = item_shortques;
                    }
                    item_shortques = {};
                }
            }

        }
    });
});

function getResultsShortQuestions(elem) {
    $(document).ready(function () {
        elem.checked && elem.value == "Numbers_shortques" ? $("#dvtext_shortques").show() : $("#dvtext_shortques").hide();
    });
}
