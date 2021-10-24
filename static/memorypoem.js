$(document).ready(function () {

    $("#memory_dvtext").hide();

    var counter = 1;
    var counter1 = 1;
    var c = 97;
    var no_of_questions = 0;
    var total_marks = 0;
    var head = "";
    var ques_no = 0;
    var start_num = 0;
    var a = 97;
    var st = 0;
    var res = "";
    var res1 = 1;
    var start_no = 1;
    var quesArr = [];
    var fromArr = [];
    var toArr = [];
    var cnt = 1;
    var num = 1;

    $(document).on('click', "#memory_addButton",function () {
        if (num > 1) {
            $("#memory").empty();
            counter = 1;
        }

        num++;
        no_of_questions = $("#memory-number-of-questions").val();
        num_ques_mem = no_of_questions;
        total_marks = $("#memory_marks").val();
        mark_mem = total_marks;
        head = $("#memory_heading").val();
        ques_no = $("#memory-question-number").val();
        start_no = $("#memory-starting-number").val();
        st = start_no;
        if (no_of_questions != 0 && total_marks != 0 && head != "" && ques_no != 0 && $("input[name=type]").is(":checked")) {
            $("#memory").append('<br><br>');
            each_mark_mem = printEachMark(head, total_marks, no_of_questions);
            no_of_ques_mem = printNumQuestions(head, no_of_questions);
            var c1 = 97;
            var roman = 1;

            for (i = 0; i < no_of_questions; i++) {
                var res = String.fromCharCode(c1);

                if ($("input[name='type'][value='memory_Alphabets']").prop("checked")) {
                    $("#memory").append("<br>");
                    $("#memory").append('<div class="row"> <div class="col-sm-1"><label style="font-weight:bold;">' + res + '. </label></div>' +
                        '<div class="col-sm-9"><input type="text"  id="memory_ques' + counter + '" value="" class="form-control input-lg" placeholder="Question(Poem name)"></div>' + '<div class="col-sm-2"><input type="text" class="form-control mt-2 mt-md-0" id="memory_eachmark' + counter + '" value="' + each_mark_mem + '" size="4" placeholder="Mark" readonly></div>' + '</div>'
                    );
                    $("#memory").append("<br>");
                    $("#memory").append('<div class="row"><div class="col-sm-1"><label>From :  </label></div>' +
                        '<div class="col-sm-11"><input type="text" id="memory_from' + counter + '" value="" class="form-control input-lg" placeholder="Starting line of the poem "></div></div>'
                    );
                    $("#memory").append("<br>");
                    $("#memory").append('<div class="row"><div class="col-sm-1"><label>To:   </label></div>' +
                        '<div class="col-sm-11"><input type="text" id="memory_to' + counter + '" value="" class="form-control input-lg" placeholder="Ending line of the poem"></div></div>'
                    );
                }

                else if ($("input[name='type'][value='memory_Numbers']").prop("checked")) {
                    if (start_no != 0) {

                        $("#memory").append("<br>");
                        $("#memory").append('<div class="row"> <div class="col-sm-1"><label style="font-weight:bold;">' + start_no + '. </label></div>' +
                            '<div class="col-sm-9"><input type="text"  id="memory_ques' + counter + '" value="" class="form-control input-lg" placeholder="Question(Poem name)"></div>' + '<div class="col-sm-2"><input type="text" class="form-control mt-2 mt-md-0" id="memory_eachmark' + counter + '" value="' + each_mark_mem + '" size="4" placeholder="Mark" readonly></div>' + '</div>'
                        );
                        $("#memory").append("<br>");
                        $("#memory").append('<div class="row"><div class="col-sm-1"><label>From :  </label></div>' +
                            '<div class="col-sm-11"><input type="text" id="memory_from' + counter + '" value="" class="form-control input-lg" placeholder="Starting line of the poem "></div></div>'
                        );
                        $("#memory").append("<br>");
                        $("#memory").append('<div class="row"><div class="col-sm-1"><label>To:   </label></div>' +
                            '<div class="col-sm-11"><input type="text" id="memory_to' + counter + '" value="" class="form-control input-lg" placeholder="Ending line of the poem"></div></div>'
                        );

                        $("#memory").append("<br>");
                        start_no++;
                    }
                }

                else if ($("input[name='type'][value='memory_Roman letters']").prop("checked")) {
                    var res2 = integer_to_roman(roman);
                    $("#memory").append("<br>");
                    $("#memory").append('<div class="row"> <div class="col-sm-1"><label style="font-weight:bold;">' + res2 + '. </label></div>' +
                        '<div class="col-sm-9"><input type="text"  id="memory_ques' + counter + '" value="" class="form-control input-lg" placeholder="Question(Poem name)"></div>' + '<div class="col-sm-2"><input type="text" class="form-control mt-2 mt-md-0" id="memory_eachmark' + counter + '" value="' + each_mark_mem + '" size="4" placeholder="Mark" readonly></div>' + '</div>'
                    );
                    $("#memory").append("<br>");
                    $("#memory").append('<div class="row"><div class="col-sm-1"><label>From :  </label></div>' +
                        '<div class="col-sm-11"><input type="text" id="memory_from' + counter + '" value="" class="form-control input-lg" placeholder="Starting line of the poem "></div></div>'
                    );
                    $("#memory").append("<br>");
                    $("#memory").append('<div class="row"><div class="col-sm-1"><label>To:   </label></div>' +
                        '<div class="col-sm-11"><input type="text" id="memory_to' + counter + '" value="" class="form-control input-lg" placeholder="Ending line of the poem"></div></div>'
                    );

                    roman++;
                }
                $("#memory").append("<br>");

                c1++;
                counter++;
            }
            if ($("input[name='type'][value='memory_Alphabets']").prop("checked")) {
                $("#memory").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="memory_getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
            }

            else if ($("input[name='type'][value='memory_Numbers']").prop("checked")) {
                if (start_no != 0) {
                    $("#memory").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="memory_getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
                }
                else {
                    alert("Please enter the starting number");
                }
            }

            else if ($("input[name='type'][value='memory_Roman letters']").prop("checked")) {
                $("#memory").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="memory_getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
            }

        }

        else {
            alert("Please enter all the fields");
        }
    });

    $(document).on('click', "#memory_getButtonValue", function () {

        for (i = 1; i <= no_of_questions; i++) {
            quesArr[i - 1] = $('#memory_ques' + i).val();
            if (quesArr[i - 1] == "") {
                alert("Please enter all the poem name");
                break;
            }
            else {
                console.log(quesArr[i - 1]);
            }
        }

        for (i = 1; i <= no_of_questions; i++) {
            fromArr[i - 1] = $('#memory_from' + i).val();
            if (fromArr[i - 1] == "") {
                alert("Please enter all the from line");
                break;
            }
            else {
                console.log(fromArr[i - 1]);
            }
        }


        for (i = 1; i <= no_of_questions; i++) {
            toArr[i - 1] = $('#memory_to' + i).val();
            if (toArr[i - 1] == "") {
                alert("Please enter all the to line");
                break;
            }
            else {
                console.log(toArr[i - 1]);
            }
        }

        item = {};
        item2 = {};
        item3 = {};

        marks_mem = no_of_ques_mem + "x" + each_mark_mem + "=" + mark_mem;
        item1 = {};
        ques_arr = [];
        if ($("input[name='type'][value='memory_Numbers']").prop("checked")) {
            var start_num = st;
            for (i = 1; i <= no_of_questions; i++) {
                $("#memory_ques" + i).each(function () {
                    var poem_name = $(this).val();
                    var from_line = $("#memory_from" + i).val();
                    var to_line = $("#memory_to" + i).val();
                    if (poem_name != "" && from_line != "" && to_line != "") {
                        var quest = poem_name + " From: " + from_line + " To: " + to_line;
                        ques_arr.push(quest);
                    }
                    item[start_num] = quest;
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

        if ($("input[name='type'][value='memory_Roman letters']").prop("checked")) {
            for (i = 1; i <= no_of_questions; i++) {
                var roman = integer_to_roman(i);
                $("#memory_ques" + i).each(function () {
                    var poem_name = $(this).val();
                    var from_line = $("#memory_from" + i).val();
                    var to_line = $("#memory_to" + i).val();
                    if (poem_name != "" && from_line != "" && to_line != "") {
                        var quest = poem_name + " From: " + from_line + " To: " + to_line;
                        ques_arr.push(quest);
                    }
                    item[roman] = quest;
                });
            }
        }

        if ($("input[name='type'][value='memory_Alphabets']").prop("checked")) {
            var character = 97;
            for (i = 1; i <= no_of_questions; i++) {
                var alpha = String.fromCharCode(character);
                $("#memory_ques" + i).each(function () {
                    var poem_name = $(this).val();
                    var from_line = $("#memory_from" + i).val();
                    var to_line = $("#memory_to" + i).val();
                    if (poem_name != "" && from_line != "" && to_line != "") {
                        var quest = poem_name + " From: " + from_line + " To: " + to_line;
                        ques_arr.push(quest);
                    }
                    item[alpha] = quest;
                });
                character++;
            }
        }

        var partno = "";
        for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
            console.log("retrived " + question_types[v]);
            var partarr = question_types[v];
            for (var h = 0; h < partarr.length; h++) {
                if ("Memory poem" == partarr[h]) {
                    partno = v - s_sec;
                    break;
                }
            }
        }

        item2[ques_no] = { "question": item, "heading": null, "type": "MCQCH", "marks": null };
        item3 = { "question": item, "heading": null, "marks": null };
        item_mem = {
            "heading": head,
            "marks": marks_mem,
            "quotedWords": null,
            "quoteType": null,
            "options": null
        };
        obj_mem = {
            "user": reg_teacher,
            "heading": head,
            "marks": marks_mem,
            "quotedWords": null,
            "quoteType": null,
            "options": null
        };

        for (let key in item2) {
            item_mem[key] = item2[key];
        }
        for (let key in item3) {
            obj_mem[key] = item3[key];
        }

        if (ques_arr.length == no_of_questions) {
            var arraySet = new Set(ques_arr)
            if (arraySet.has("")) {
            }
            else {
                alert("Memory poem is saved successfully!");
                document.getElementById("memory_getButtonValue").value = "Saved!";
                console.log(JSON.stringify(item_mem,null,'\t'))
                createMemoryPoem(JSON.stringify(obj_mem));
                if (item_mem != {}) {
                    if (part1.hasOwnProperty("part " + partno)) {
                        var temp_item = part1["part " + partno];
                        part1["part " + partno] = { ...temp_item, ...item_mem };
                    }
                    else {
                        part1["part " + partno] = item_mem;
                    }
                    item_mem = {};
                }
            }
        }
    });
});

function getResults_memory(elem) {
    $(document).ready(function () {
        elem.checked && elem.value == "memory_Numbers" ? $("#memory_dvtext").show() : $("#memory_dvtext").hide();
    })

};