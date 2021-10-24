$(document).ready(function () {

    $("#compre_dvtext").hide();
    counter = 1;
    var counter1 = 1;
    var c = 97;
    var no_of_questions = 0;
    var total_marks = 0;
    var res = "";
    var head = "";
    var res1 = 1;
    var start_no = 0;
    var st = 0
    var ques_no = 0;
    var comp_ques = [];
    option = [];
    var para = "";
    checkBox = "";
    no_option = 0;
    var cnt = 1;
    var a = 97;
    opt = 0;
    count_opt = [];
    var choice = 0;
    var val = 0;
    var num = 1;

    $(document).on('click', "#compre_addButton",function () {
        if (num > 1) {
            $("#compre").empty();
            counter = 1;
        }

        $("#compre").append("<br><br>");
        no_of_questions = $("#compre-number-of-questions").val();
        num_ques_compre = no_of_questions;
        total_marks = $("#compre_marks").val();
        mark_compre = total_marks;
        ques_no = $("#compre-question-number").val();
        head = $("#compre_heading").val();
        start_no = $("#compre-starting-number").val();
        opt = 0;
        checkBox = "";
        st = start_no;
        para = $("#compre_txt").text();
        if (no_of_questions != 0 && total_marks != 0 && head != "" && para != "" && $("input[name=type]").is(":checked")) {
            each_mark_compre = printEachMark(head, total_marks, no_of_questions);
            no_of_ques_compre = printNumQuestions(head, no_of_questions);

            var c1 = 97;
            var roman = 1;
            for (i = 0; i < no_of_questions; i++) {

                var res = String.fromCharCode(c1);
                if ($("input[name='type'][value='compre_Alphabets']").prop("checked")) {
                    $("#compre").append('<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + res + '. </label></div>' +
                        '<div class="col-sm-8"><input type="text" name="compre_textbox' + counter +
                        '" id="compre_textbox' + counter + '" value="" class="form-control input-lg" placeholder="Question"></div>' + '&nbsp;&nbsp;&nbsp;' + '<div class="col-sm-2"><input style=" text-align:center;" type="text" class="form-control" id="compre_eachmark' + counter + '" value="' + each_mark_compre + '" placeholder="Mark" readonly></div></div>'
                    );
                    $("#compre").append('&nbsp;<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="checkbox" id="compre_myCheck' + counter + '" name="MCQ" class="compre" value="MCQ" onclick="compre_Function(' + counter + ')"><label>MCQ</label></div></div><div id="compre_Check' + counter + '"></div>');

                }

                else if ($("input[name='type'][value='compre_Numbers']").prop("checked")) {
                    if (start_no != 0) {
                        $("#compre").append('<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + start_no + '. </label></div>' +
                            '<div class="col-sm-8"><input type="text" name="compre_textbox' + counter +
                            '" id="compre_textbox' + counter + '" value="" class="form-control input-lg" placeholder="Question"></div>' + '&nbsp;&nbsp;&nbsp;' + '<div class="col-sm-2"><input style=" text-align:center;" type="text" class="form-control" id="compre_eachmark' + counter + '" value="' + each_mark_compre + '" placeholder="Mark" readonly></div></div>'
                        );
                        $("#compre").append('&nbsp;<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="checkbox" id="compre_myCheck' + counter + '" name="MCQ" class="compre" value="MCQ" onclick="compre_Function(' + counter + ')"><label>MCQ</label></div></div><div id="compre_Check' + counter + '"></div>');

                        start_no++;
                    }
                }

                else if ($("input[name='type'][value='compre_Roman letters']").prop("checked")) {
                    var res2 = integer_to_roman(roman);
                    $("#compre").append('<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + res2 + '. </label></div>' +
                        '<div class="col-sm-8"><input type="text" name="compre_textbox' + counter +
                        '" id="compre_textbox' + counter + '" value="" class="form-control input-lg" placeholder="Question"></div>' + '&nbsp;&nbsp;&nbsp;' + '<div class="col-sm-2"><input style=" text-align:center;" type="text" class="form-control" id="compre_eachmark' + counter + '" value="' + each_mark_compre + '" placeholder="Mark" readonly></div></div>'
                    );
                    $("#compre").append('&nbsp;<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="checkbox" id="compre_myCheck' + counter + '" name="MCQ" class="compre" value="MCQ" onclick="compre_Function(' + counter + ')"><label>MCQ</label></div></div><div id="compre_Check' + counter + '"></div>');

                    roman++;
                }
                $("#compre").append("<br>");
                c1++;
                counter++;
            }

            if ($("input[name='type'][value='compre_Alphabets']").prop("checked")) {
                $("#compre").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="compre_getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
            }

            else if ($("input[name='type'][value='compre_Numbers']").prop("checked")) {
                if (start_no != 0) {
                    $("#compre").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="compre_getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
                }
                else {
                    alert("Please enter the starting number");
                }
            }

            else if ($("input[name='type'][value='compre_Roman letters']").prop("checked")) {
                $("#compre").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="compre_getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
            }

        }

        else {
            alert("Please enter all the fields");
        }
        num++;
    });



    $(document).on('click', "#compre_getButtonValue", function () {

        for (i = 1; i <= no_of_questions; i++) {
            comp_ques[i - 1] = $('#compre_textbox' + i).val();
            if (comp_ques[i - 1] == "") {
                alert("Please enter all the comprehension questions");
                break;
            }

            else {
                //console.log("Questions : " + comp_ques[i - 1]);
            }
        }


        count_opt = [];
        val = 1;
        choice = 0;

        for (j = 0; j < no_of_questions; j++) {

            if (checkBox.checked == true) {
                //alert("no of option");
                count_opt[j] = $('#compre_noofoption' + (val)).val();
                if (count_opt[j] == 0) {
                    alert("Please enter number of options");
                    break;
                }

                else {
                    val++;
                    for (i = 0; i < count_opt[j]; i++) {

                        option[choice] = ($('#compre_options' + choice).val());
                        choice++;
                    }
                }

            }
        }

        item2 = {};
        item = {};
        marks_compre = no_of_ques_compre + "x" + each_mark_compre + "=" + mark_compre;
        var ch = 0;
        ques_arr = [];
        questions1 = {};
        opt_obj = [];
        options = {};
        opt_arr = [];
        paragraph = {};
        item1 = {};
        var cnnt = 0;
        a = 0;
        b = 0;
        if ($("input[name='type'][value='compre_Numbers']").prop("checked")) {
            var start_num = st;
            cnnt = 0;
            for (i = 1; i <= no_of_questions; i++) {
                $("#compre_textbox" + i).each(function () {
                    var inData = $(this).val();
                    if (inData != "") {
                        ques_arr.push(inData);
                    }
                    var para_graph = $("#compre_txt").text();
                    paragraph = [para_graph];
                    checkBox = document.getElementById("compre_myCheck" + i);
                    if (checkBox.checked == true) {
                        count_opt[i] = parseInt($('#compre_noofoption' + i).val());
                        cnnt += count_opt[i];
                        //console.log(count_opt[i]);
                        for (j = 0; j < count_opt[i]; j++) {
                            option[ch] = ($('#compre_options' + ch).val());


                            if (option[ch] == "") {
                                alert("Please enter the option which you selected");
                                break;
                            }
                            else {
                                opt_obj.push(option[ch]);
                                opt_arr.push(option[ch]);
                                ch++;
                            }
                            //console.log(option[ch]);

                        }
                        questions1[start_num] = { "question": inData, "type": "MCQSL", "options": opt_obj };
                        opt_obj = [];
                    }
                    else {
                        questions1[start_num] = { "question": inData, "type": "MCQN", "options": null };
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

        if ($("input[name='type'][value='compre_Roman letters']").prop("checked")) {
            cnnt = 0;
            for (i = 1; i <= no_of_questions; i++) {
                var roman = integer_to_roman(i);
                $("#compre_textbox" + i).each(function () {
                    var inData = $(this).val();
                    if (inData != "") {
                        ques_arr.push(inData);
                    }
                    var para_graph = $("#compre_txt").text();
                    paragraph = [para_graph];
                    checkBox = document.getElementById("compre_myCheck" + i);
                    if (checkBox.checked == true) {
                        count_opt[i] = parseInt($('#compre_noofoption' + i).val());
                        cnnt += count_opt[i];
                        for (j = 0; j < count_opt[i]; j++) {
                            option[ch] = ($('#compre_options' + ch).val());
                            if (option[ch] == "") {
                                alert("Please enter the option which you selected");
                                break;
                            }
                            else {
                                opt_obj.push(option[ch]);
                                opt_arr.push(option[ch]);
                                ch++;
                            }
                        }
                        questions1[roman] = { "question": inData, "type": "MCQSL", "options": opt_obj };
                        opt_obj = [];
                    }
                    else {
                        questions1[roman] = { "question": inData, "type": "MCQN", "options": null };
                    }
                });
            }
        }

        if ($("input[name='type'][value='compre_Alphabets']").prop("checked")) {
            var character = 97;
            cnnt = 0;
            for (i = 1; i <= no_of_questions; i++) {
                var alpha = String.fromCharCode(character);
                $("#compre_textbox" + i).each(function () {
                    var inData = $(this).val();
                    if (inData != "") {
                        ques_arr.push(inData);
                    }
                    var para_graph = $("#compre_txt").text();
                    paragraph = [para_graph];
                    checkBox = document.getElementById("compre_myCheck" + i);
                    if (checkBox.checked == true) {
                        count_opt[i] = parseInt($('#compre_noofoption' + i).val());
                        cnnt += count_opt[i];
                        //console.log(count_opt[i]);
                        for (j = 0; j < count_opt[i]; j++) {
                            option[ch] = ($('#compre_options' + ch).val());
                            //console.log(option[ch]);
                            if (option[ch] == "") {
                                alert("Please enter the option which you selected");
                                break;
                            }
                            else {
                                opt_obj.push(option[ch]);
                                opt_arr.push(option[ch]);
                                ch++;
                            }
                        }
                        questions1[alpha] = { "question": inData, "type": "MCQSL", "options": opt_obj };
                        opt_obj = [];
                    }
                    else {
                        questions1[alpha] = { "question": inData, "type": "MCQN", "options": null };
                    }
                });
                character += 1;
            }
        }

        var partno = "";
        for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
            console.log("retrived " + question_types[v]);
            var partarr = question_types[v];
            for (var h = 0; h < partarr.length; h++) {
                if ("Comprehension(prose)" == partarr[h]) {
                    partno = v - s_sec;
                    break;
                }
            }
        }

        ques_no_compre = ques_no;


        item_compre[ques_no] = {
            "heading": head,
            "marks": marks_compre,
            "type": "COMP",
            "paragraph": paragraph,
            "questions": questions1,
            "quotedWords": null,
            "quoteType": null,
            "options": null

        };
        obj_compre = {
            "user": reg_teacher,
            "heading": head,
            "marks": marks_compre,
            "type": "COMP",
            "paragraph": paragraph,
            "questions": questions1,
            "quotedWords": null,
            "quoteType": null,
            "options": null
        };
        /*   for (let key in questions1) {
               item_compre[key] = questions1[key];
           }
           for (let key in questions1) {
               obj_compre[key] = questions1[key];
           }*/
        if (ques_arr.length == no_of_questions) {
            var arraySet = new Set(opt_arr)
            if (arraySet.has("")) {
            }
            else {
                if (opt_arr.length == cnnt) {
                    alert("Comprehension questions is saved successfully!");
                    document.getElementById("compre_getButtonValue").value = "Saved!";
                    console.log(JSON.stringify(item_compre,null,'\t'))
                    createComprehensionQuestions(JSON.stringify(obj_compre, null, '\t'));
                    if (item_compre != {}) {
                        // item_compre[ques_no]={...item_compre[ques_no],...questions1,...compre_quote}
                        if (part1.hasOwnProperty("part " + partno)) {
                            var temp_item = part1["part " + partno];
                            part1["part " + partno] = { ...temp_item, ...item_compre };
                        }
                        else {
                            part1["part " + partno] = item_compre;
                        }

                        item_compre = {};
                        console.log(JSON.stringify(part1["part " + partno], null, '\t'));
                    }
                }
            }

        }
    });

});

function getResults_compre(elem) {
    $(document).ready(function () {
        elem.checked && elem.value == "compre_Numbers" ? $("#compre_dvtext").show() : $("#compre_dvtext").hide();
    })

};

//Comprehension Functions
function compre_Function(counter) {
    $(document).ready(function () {
        checkBox = document.getElementById("compre_myCheck" + counter);

        if (checkBox.checked == true) {

            var table = document.getElementById("compre_Check" + counter);
            table.innerHTML += '<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="text" min="0" name="total_mark" id="compre_noofoption' + counter + '" class="form-control" placeholder="Number of Options"></div>&nbsp;<div class="col-sm-2"><input type="button" value="Create Options" class="btn btn-primary" id="compre_addOption' + counter + '" onclick="compre_addOption(' + counter + ')"></div></div><div id="compre_option' + counter + '"></div><br>';

        } else {
            var table = document.getElementById("compre_Check" + counter);
            while (table.firstChild) {
                table.removeChild(table.firstChild);
            }
        }

    })
}


function compre_addOption(counter) {
    $(document).ready(function () {
        no_option = document.getElementById("compre_noofoption" + counter).value;
        var numbering = 97;
        if (no_option != 0) {
            for (i = 0; i < no_option; i++) {
                var res = String.fromCharCode(numbering);
                var table = document.getElementById("compre_option" + counter);
                if (i == 0) {
                    table.innerHTML += '<br><br>';
                }
                table.innerHTML += '<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-3"><input type="text" min="0" name="total_mark" id="compre_options' + opt + '" class="form-control" placeholder="Option - ' + res + '"></div></div>&nbsp;';
                numbering++;
                opt++;
            }
        }
    })
}

