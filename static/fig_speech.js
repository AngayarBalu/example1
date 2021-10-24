var show_mark_fig = 0;

$(document).ready(function () {
    var fig_counter = 1;
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


    $(document).on('click', "#addButton_fig", function () {

        if (num > 1) {
            $("#fig_d").empty();
            fig_counter = 1;
        }
        num++;
        option = [];
        $("#fig_d").append("<br><br>");
        no_of_questions = $("#number-of-questions_fig").val();
        num_ques_fig = no_of_questions;
        opt1 = 0;
        var ch = 0;
        total_marks = $("#marks_fig").val();
        mark_fig = total_marks;
        //ques_no = $("#question-number_fig").val();
        head = $("#heading_fig").val();
        start_no = $("#starting-number_fig").val();
        st = start_no;
        if (no_of_questions != 0 && total_marks != 0 && head != "" && start_no != 0) {
            
            no_of_ques_fig = printNumQuestions(head, no_of_questions);

            for (i = 0; i < no_of_questions; i++) {
                $("#fig_d").append('<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + start_no + '. </label></div>' +
                    '<div class="col-sm-9"><div style="height:200px; " name="eachHeading' + fig_counter + '" id="eachHeading_fig' + fig_counter + '" class="form-control" contenteditable="true" data-placeholder="Type your Poemline here..." cols="100" rows="4"></div></div>');
                // $("#fig_d").append('&nbsp;<div class="row"><div class="col-sm-1"><label></label></div>' + '<div class="col-sm-11"><div class="form-control" style="height:50px; overflow: auto;" name="textbox' + fig_counter + '" id="textbox_fig' + fig_counter + '" onkeyup="myFunctionsFig(' + fig_counter + ')" class="form-control mt-2 mt-md-0" contenteditable="true" data-placeholder="Question" cols="200" rows="100"></div></div></div>' +
                //     '<br><div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-11"><input class="form-control mt-2 mt-md-0" type="text" id="highlightedword_fig' + fig_counter + '" onblur="myhighlightFig(' + fig_counter + ')" onfocus="myfocusFig(' + fig_counter + ')" placeholder="Highlighted word"/></div></div>');
                $("#fig_d").append('<div class="row"><div class="col-sm-1"><label></label></div>' + '<div id="Check_fig' + fig_counter + '"></div></div>');
                var table = document.getElementById("Check_fig" + fig_counter);
                //table.innerHTML = '<div class="row"><div class="col-sm-2"><input class="form-control mt-2 mt-md-0" type="text" id="eachmark_fig' + fig_counter + '" value="' + each_mark_fig + '"  placeholder="Mark" readonly></div></div>';
                table.innerHTML += '<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="text" min="0" name="total_mark" id="noofoption_fig' + fig_counter + '" class="form-control" placeholder="Number of Options"></div>&nbsp;<div class="col-sm-2"><input type="button" value="Create Options" class="btn btn-primary" id="addOption_fig' + fig_counter + '" onclick="addOptionFig(' + fig_counter + ')"></div></div><div id="option_fig' + fig_counter + '"></div><br>';

                start_no++;

                $("#fig_d").append("<br>");
                fig_counter++;
            }
            $("#fig_d").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="getButtonValue_fig"  class="test btn btn-primary" value="Save" ></div></div>');
        }

        else {
            alert("Please enter all the fields");
        }
    });



    $(document).on('click', "#getButtonValue_fig", function () {

        for (i = 1; i <= no_of_questions; i++) {
            headings[i - 1] = $('#eachHeading_fig' + i).val();
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

            

                count_opt[j] = $('#noofoption_fig' + (j + 1)).val();

                if (count_opt[j] == 0) {
                    alert("Please enter number of options");
                    break;

                }
                else {

                    for (i = 0; i < count_opt[j]; i++) {

                        option[choice] = ($('#options_fig' + choice).val());
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
            $("#eachHeading_fig" + i).each(function () {
                
                var inData = $(this).text();
                if (inData != "") {
                    ques_arr.push(inData);
                }
              
                count_opt[i] = parseInt($('#noofoption_fig' + i).val());
                cnnt += count_opt[i];

                for (j = 0; j < count_opt[i]; j++) {
                    var alpha = String.fromCharCode(character);
                    option[ch] = $('#options_fig' + ch).val();

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
            each_mark_fig = printEachMark(head, total_marks, no_of_questions);
        
        show_mark_fig = each_mark_fig;
        marks_fig = no_of_ques_fig + "x" + each_mark_fig + "=" + mark_fig;
        }
        else{
            each_mark_fig = printEachMark(head, total_marks, cnnt);
            show_mark_fig = each_mark_fig;
            marks_fig = no_of_ques_fig + "x" + each_mark_fig + "=" + mark_fig;
            }

        

        var partno = "";
        for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
            console.log("retrived " + question_types[v] + " " + v);
            var partarr = question_types[v];
            for (var h = 0; h < partarr.length; h++) {
                if ("Figure of speech" == partarr[h]) {
                    partno = v - s_sec;
                    break;
                }
            }
        }

        console.log(poemlines)

        item_fig = {
            "heading": head,
            "marks": marks_fig
        };
        obj_fig = {
            "user": reg_teacher,
            "heading": head,
            "marks": marks_fig
        };

        for (let key in poemlines) {
            item_fig[key] = poemlines[key];
        }
        for (let key in poemlines) {
            obj_fig[key] = poemlines[key];
        }

        if (ques_arr.length == no_of_questions) {

            var arraySet = new Set(opt_arr)
            if (arraySet.has("")) {
            }
            else {
                if (opt_arr.length == cnnt) {
                    alert("Figure of speech is saved successfully!");
                    console.log(JSON.stringify(item_fig, null, '\t'))

                    document.getElementById("getButtonValue_fig").value = "Saved!";
                    createFigureOfSpeech(JSON.stringify(obj_fig));
                    if (item_fig != {}) {
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

        }
    });
   
});




var no_option = 0;
var numbering = 0;
var opt1 = 0;
var checkBox1 = "";
var fig_counter = 1;
var count_opt = [];
var option = [];

function myFunctionFig(fig_counter) {
    checkBox1 = document.getElementById('myCheck_fig' + fig_counter);
    //checkBox = document.querySelectorAll(".example");
    if (checkBox1.checked == true) {

        var table = document.getElementById("Check_fig" + fig_counter);
        table.innerHTML += '<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="text" min="0" name="total_mark" id="noofoption_fig' + fig_counter + '" class="form-control" placeholder="Number of Options"></div>&nbsp;<div class="col-sm-2"><input type="button" value="Create Options" class="btn btn-primary" id="addOption_fig' + fig_counter + '" onclick="addOptionFig(' + fig_counter + ')"></div></div><div id="option_fig' + fig_counter + '"></div><br>';

    } else {
        var table = document.getElementById("Check_fig" + fig_counter);
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }

    }
}
function addOptionFig(fig_counter) {

    no_option = document.getElementById("noofoption_fig" + fig_counter).value;
    numbering = 97;
    

    if (no_option != 0) {

        // var tab = document.getElementById("option_fig" + fig_counter);
        // tab.innerHTML = '<div class="row"><div class="col-sm-2"><input class="form-control mt-2 mt-md-0" type="text" id="eachmark_fig' + fig_counter + '" value="' + show_mark_fig + '"  placeholder="Mark" readonly></div></div>';

        for (i = 0; i < no_option; i++) {
            var res = String.fromCharCode(numbering);
            var table = document.getElementById("option_fig" + fig_counter);

            if (i == 0) {
                table.innerHTML += '<br><br>';
            }
            //table.innerHTML+='<input style="margin-left:90px;"type="text" min="0" name="total_mark" id="options'+i+'" class="form-control col-sm-2" placeholder="Option - '+res+'">&nbsp;';
            table.innerHTML += '<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-3"><input type="text" min="0" name="total_mark" id="options_fig' + opt1 + '" class="form-control" placeholder="Option - ' + res + '"></div></div>&nbsp;';
            numbering++;
            opt1++;

        }
    }
    else {
        alert("enter all options");
    }
}


function getResultsFig(elem) {
    $(document).ready(function () {
        elem.checked && elem.value == "Numbers_fig" ? $("#dvtext_fig").show() : $("#dvtext_fig").hide();
    });
}