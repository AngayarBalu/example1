var show_mark = 0;

$(document).ready(function () {
    var poet_counter = 1;
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


    $(document).on('click', "#addButton_poet", function () {

        if (num > 1) {
            $("#poet_d").empty();
            poet_counter = 1;
        }
        num++;
        option = [];
        $("#poet_d").append("<br><br>");
        no_of_questions = $("#number-of-questions_poet").val();
        num_ques_poet = no_of_questions;
        opt1 = 0;
        var ch = 0;
        total_marks = $("#marks_poet").val();
        mark_poet = total_marks;
        // ques_no = $("#question-number_poet").val();
        head = $("#heading_poet").val();
        start_no = $("#starting-number_poet").val();
        st = start_no;
        if (no_of_questions != 0 && total_marks != 0 && head != "" && start_no != 0) {
            
            no_of_ques_poet = printNumQuestions(head, no_of_questions);

            for (i = 0; i < no_of_questions; i++) {
                $("#poet_d").append('<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + start_no + '. </label></div>' +
                    '<div class="col-sm-9"><div style="height:200px; " name="eachHeading' + poet_counter + '" id="eachHeading_poet' + poet_counter + '" class="form-control" contenteditable="true" data-placeholder="Type your Poemline here..." cols="100" rows="4"></div></div>');
                // $("#poet_d").append('&nbsp;<div class="row"><div class="col-sm-1"><label></label></div>' + '<div class="col-sm-11"><div class="form-control" style="height:50px; overflow: auto;" name="textbox' + poet_counter + '" id="textbox_poet' + poet_counter + '" onkeyup="myFunctionsPoet(' + poet_counter + ')" class="form-control mt-2 mt-md-0" contenteditable="true" data-placeholder="Question" cols="200" rows="100"></div></div></div>' +
                //     '<br><div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-11"><input class="form-control mt-2 mt-md-0" type="text" id="highlightedword_poet' + poet_counter + '" onblur="myhighlightPoet(' + poet_counter + ')" onfocus="myfocusPoet(' + poet_counter + ')" placeholder="Highlighted word"/></div></div>');
                $("#poet_d").append('<div class="row"><div class="col-sm-1"><label></label></div>' + '<div id="Check_poet' + poet_counter + '"></div></div>');
                var table = document.getElementById("Check_poet" + poet_counter);
                //table.innerHTML = '<div class="row"><div class="col-sm-2"><input class="form-control mt-2 mt-md-0" type="text" id="eachmark_poet' + poet_counter + '" value="' + each_mark_poet + '"  placeholder="Mark" readonly></div></div>';
                table.innerHTML += '<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="text" min="0" name="total_mark" id="noofoption_poet' + poet_counter + '" class="form-control" placeholder="Number of Options"></div>&nbsp;<div class="col-sm-2"><input type="button" value="Create Options" class="btn btn-primary" id="addOption_poet' + poet_counter + '" onclick="addOptionPoet(' + poet_counter + ')"></div></div><div id="option_poet' + poet_counter + '"></div><br>';

                start_no++;

                $("#poet_d").append("<br>");
                poet_counter++;
            }
            $("#poet_d").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="getButtonValue_poet"  class="test btn btn-primary" value="Save" ></div></div>');
        }

        else {
            alert("Please enter all the fields");
        }
    });



    $(document).on('click', "#getButtonValue_poet", function () {

        for (i = 1; i <= no_of_questions; i++) {
            headings[i - 1] = $('#eachHeading_poet' + i).val();
            if (headings[i - 1] == "") {
                //alert("Please enter all the headings");
                break;
            }
            else {
                console.log("Headings : " + headings[i - 1]);
            }
        }

     

        count_opt = [];
        val = 0;
        choice = 0;
        for (j = 0; j < no_of_questions; j++) {

            

                count_opt[j] = $('#noofoption_poet' + (j + 1)).val();

                if (count_opt[j] == 0) {
                    alert("Please enter number of options");
                    break;

                }
                else {

                    for (i = 0; i < count_opt[j]; i++) {

                        option[choice] = ($('#options_poet' + choice).val());
                        choice++;

                    }
                }
            
        }

        item2 = {};
        item = {};
        ch = 0;
        ques_arr = [];
        poemlines = {};
        questions = {};
        opt_obj = [];
        options = {};
        
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
            var character = 97;
            $("#eachHeading_poet" + i).each(function () {
                
                var inData = $(this).text();
                if (inData != "") {
                    ques_arr.push(inData);
                }
              
                count_opt[i] = parseInt($('#noofoption_poet' + i).val());
                cnnt += count_opt[i];

                for (j = 0; j < count_opt[i]; j++) {
                    var alpha = String.fromCharCode(character);
                    option[ch] = $('#options_poet' + ch).val();

                    if (option[ch] == 0) {
                        alert("Please enter the option which you selected");
                        break;
                    }
                    else {
                        console.log("Options : " + option[ch]);
                        opt_obj.push(option[ch]);
                        opt_arr.push(option[ch]);
                        questions[alpha]= option[ch];
                        ch++;
                        character++;
                    }
                }


                poemlines[start_num] = { "heading": null, "type": "COMP", "quotedWords": inData,"question": questions,"quoteType": null, "options": null }
                opt_obj = [];
                questions = {};
                
            });
            start_num++;
        }

      
        con_no = start_num;
        

        
        
        if(no_of_questions < cnnt){
            each_mark_poet = printEachMark(head, total_marks, no_of_questions);
        
        show_mark = each_mark_poet;
        marks_poet = no_of_ques_poet + "x" + each_mark_poet + "=" + mark_poet;
        }
        else{
            each_mark_poet = printEachMark(head, total_marks, cnnt);
            show_mark = each_mark_poet;
            marks_poet = no_of_ques_poet + "x" + each_mark_poet + "=" + mark_poet;
            }

        

        var partno = "";
        for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
            console.log("retrived " + question_types[v] + " " + v);
            var partarr = question_types[v];
            for (var h = 0; h < partarr.length; h++) {
                if ("Poetic lines with questions" == partarr[h]) {
                    partno = v - s_sec;
                    break;
                }
            }
        }

        console.log(poemlines)

        item_poet = {
            "heading": head,
            "marks": marks_poet
        };
        obj_poet = {
            "user": reg_teacher,
            "heading": head,
            "marks": marks_poet
        };

        for (let key in poemlines) {
            item_poet[key] = poemlines[key];
        }
        for (let key in poemlines) {
            obj_poet[key] = poemlines[key];
        }

        if (ques_arr.length == no_of_questions) {

            var arraySet = new Set(opt_arr)
            if (arraySet.has("")) {
            }
            else {
                if (opt_arr.length == cnnt) {
                    alert("Poetic lines with questions is saved successfully!");
                    console.log(JSON.stringify(item_poet, null, '\t'))

                    document.getElementById("getButtonValue_poet").value = "Saved!";
                    createPoeticLines(JSON.stringify(obj_poet));
                    if (item_poet != {}) {
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

        }
    });
   
});




var no_option = 0;
var numbering = 0;
var opt1 = 0;
var checkBox1 = "";
var poet_counter = 1;
var count_opt = [];
var option = [];

function myFunctionPoet(poet_counter) {
    checkBox1 = document.getElementById('myCheck_poet' + poet_counter);
    //checkBox = document.querySelectorAll(".example");
    if (checkBox1.checked == true) {

        var table = document.getElementById("Check_poet" + poet_counter);
        table.innerHTML += '<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="text" min="0" name="total_mark" id="noofoption_poet' + poet_counter + '" class="form-control" placeholder="Number of Options"></div>&nbsp;<div class="col-sm-2"><input type="button" value="Create Options" class="btn btn-primary" id="addOption_poet' + poet_counter + '" onclick="addOptionPoet(' + poet_counter + ')"></div></div><div id="option_poet' + poet_counter + '"></div><br>';

    } else {
        var table = document.getElementById("Check_poet" + poet_counter);
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }

    }
}
function addOptionPoet(poet_counter) {

    no_option = document.getElementById("noofoption_poet" + poet_counter).value;
    numbering = 97;
    

    if (no_option != 0) {

        // var tab = document.getElementById("option_poet" + poet_counter);
        // tab.innerHTML = '<div class="row"><div class="col-sm-2"><input class="form-control mt-2 mt-md-0" type="text" id="eachmark_poet' + poet_counter + '" value="' + show_mark + '"  placeholder="Mark" readonly></div></div>';

        for (i = 0; i < no_option; i++) {
            var res = String.fromCharCode(numbering);
            var table = document.getElementById("option_poet" + poet_counter);

            if (i == 0) {
                table.innerHTML += '<br><br>';
            }
            //table.innerHTML+='<input style="margin-left:90px;"type="text" min="0" name="total_mark" id="options'+i+'" class="form-control col-sm-2" placeholder="Option - '+res+'">&nbsp;';
            table.innerHTML += '<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-3"><input type="text" min="0" name="total_mark" id="options_poet' + opt1 + '" class="form-control" placeholder="Option - ' + res + '"></div></div>&nbsp;';
            numbering++;
            opt1++;

        }
    }
    else {
        alert("enter all options");
    }
}


function getResultsPoet(elem) {
    $(document).ready(function () {
        elem.checked && elem.value == "Numbers_poet" ? $("#dvtext_poet").show() : $("#dvtext_poet").hide();
    });
}