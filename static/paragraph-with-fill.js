var fill_container = "";
var fill_count = 0;
var fill_ques = [];
var fill_ans = [];
var fill_opt = [];
var fill_start_no = 0;
var fill_para = "";
var fill_st = 0;
var fill_n = 0;
var fill_heading = "";
var fill_options = 0;
var fill_total_marks = 0;
var fill_head_no = 0;
var each_fill_mark = 0;
var fill_num_question = 0;
var fill_marks = 0;
var fill_paragraph ={};


function fill_getResults(elem) {
    elem.checked && elem.value == "fill_Numbers" ? $("#fill_dvtext").show() : $("#fill_dvtext").hide();
}

function fill_add_field() {
    if (fill_n > 0) {
        $("#fill_a").empty();
        fill_count = 0;
    }
    fill_n++;
    fill_heading = document.getElementById("fill_heading").value;
    fill_options = document.getElementById("fill-options").value;
    fill_container = document.getElementById("fill_a");
    fill_para = document.getElementById("fill-paragraph").textContent;
    fill_total_marks = document.getElementById("fill-marks").value;
    fill_head_no = document.getElementById("fill-heading-number").value;
    fill_start_no = document.getElementById("fill_starting-number").value;
    each_fill_mark = printEachMark(fill_heading, fill_total_marks, fill_options)
    fill_num_question = printNumQuestions(fill_heading, fill_options)
    fill_marks = fill_num_question + " x " + each_fill_mark + " = " + fill_total_marks
    fill_st = fill_start_no;
    if (fill_total_marks != 0) {
        if (fill_heading != "") {
            if (fill_paragraph != 0) {
                if ($("input[name=fill_type]").is(":checked")) {
                    if (fill_options != 0) {
                        if ($("input[name='fill_type'][value='fill_Numbers']").prop("checked")) {
                            document.getElementById("fill_getvalue").style.display = "block";
                            for (i = 0; i < fill_options; i++) {
                                fill_container.innerHTML = fill_container.innerHTML +
                                    "&nbsp;<div id='fill_" + fill_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + fill_count + "'>" + fill_start_no + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='fill_option" + fill_count + "'contenteditable='true' data-placeholder='Option " + (fill_count + 1) + "' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;' id='eachmark" + fill_count + "'>" + each_fill_mark + " mark</label></div></div></div>";
                                fill_count++;
                                fill_start_no++;
                            }
                        }

                        if ($("input[name='fill_type'][value='fill_Alphabets']").prop("checked")) {
                            document.getElementById("fill_getvalue").style.display = "block";
                            var numbering = 97;
                            for (i = 0; i < fill_options; i++) {
                                var res = String.fromCharCode(numbering);
                                fill_container.innerHTML = fill_container.innerHTML +
                                    "&nbsp;<div id='fill_" + fill_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + fill_count + "'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='fill_option" + fill_count + "'contenteditable='true' data-placeholder='Option " + res + "' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;' id='eachmark" + fill_count + "'>" + each_fill_mark + " mark</label></div></div></div>";
                                fill_count++;
                                numbering++;
                            }
                        }

                        if ($("input[name='fill_type'][value='fill_Roman letters']").prop("checked")) {
                            document.getElementById("fill_getvalue").style.display = "block";
                            for (i = 0; i < fill_options; i++) {
                                var res = integer_to_roman(i + 1)
                                fill_container.innerHTML = fill_container.innerHTML +
                                    "&nbsp;<div id='fill_" + fill_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + fill_count + "'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='fill_option" + fill_count + "'contenteditable='true' data-placeholder='Option (" + res + ")' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;' id='eachmark" + fill_count + "'>" + each_fill_mark + " mark</label></div></div></div>";
                                fill_count++;
                            }
                        }
                    }
                    else {
                        alert("Please enter the number of options");
                    }
                }
                else {
                    alert("Please select the numbering option");
                }
            }
            else {
                alert("Please enter the heading");
            }
        } else {
            alert("Please enter the question");
        }
    } else {
        alert("Please enter the marks")
    }
}

function fill_getvalues() {
    var fill_option = {};
    if (fill_heading != "") {
        if (fill_options != 0) {
            for (i = 0; i < fill_count; i++) {
                fill_ques[i] = document.getElementById("fill_option" + i).textContent;
            }

            fill_ques = fill_ques.filter(function (e) { return e });
            if (fill_ques.length == fill_options) {

                if ($("input[name='fill_type'][value='fill_Numbers']").prop("checked")) {
                    var start_num = fill_st;
                    for (i = 0; i < fill_options; i++) {
                        var inData = document.getElementById('fill_option' + i).textContent;
                        var para_graph = document.getElementById("fill-paragraph").textContent;
                        fill_paragraph = [para_graph];
                        fill_option[start_num] = inData;
                        start_num++;
                    }
                }

                
                if ($("input[name='fill_type'][value='fill_Roman letters']").prop("checked")) {
                    for (i = 0; i < fill_options; i++) {
                        var roman = integer_to_roman(i + 1);
                        var inData = document.getElementById('fill_option' + i).textContent;
                        var para_graph = document.getElementById("fill-paragraph").textContent;
                        fill_paragraph = [para_graph];
                        fill_option[roman] = inData;
                    }
                }
                if ($("input[name='fill_type'][value='fill_Alphabets']").prop("checked")) {
                    var a = 97;
                    for (i = 0; i < fill_options; i++) {
                        var alpha = String.fromCharCode(a);
                        var inData = document.getElementById('fill_option' + i).textContent;
                        var para_graph = document.getElementById("fill-paragraph").textContent
                        fill_paragraph = [para_graph];
                        fill_option[alpha] = inData;
                        a++;
                    }
                }

                var partno = "";
        
                for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
                    console.log("retrived " + question_types[v]);
                    var partarr = question_types[v];
                    for (var h = 0; h < partarr.length; h++) {
                        if ("Fill the paragraph with appropriate phrases" == partarr[h]) {
                            partno = v - s_sec;
                            break;
                        }
                    }
                }

                con_no = parseInt(fill_head_no) + 1;

                item_fill[fill_head_no] = {
                    "heading": fill_heading,
                    "type":"FILL",
                    "marks": fill_marks,
                    "paragraph": fill_paragraph,
                    "question": null,
                    "quotedWords": null,
                    "quoteType": null,
                    "options": fill_option
                }

                obj_fill = {
                    "user": reg_teacher,
                    "heading": fill_heading,
                    "type":"FILL",
                    "marks": fill_marks,
                    "paragraph": fill_paragraph,
                    "question": null,
                    "quotedWords": null,
                    "quoteType": null,
                    "options": fill_option
                }
                console.log(JSON.stringify(item_fill, null, '\t'))
                console.log(JSON.stringify(obj_fill, null, '\t'))
                createParaWithFill(JSON.stringify(obj_fill, null, '\t'))
                alert("Fill the paragraph with appropriate phrases is saved successfully");
                document.getElementById('fill_getvalue').value='Saved!';
                if (item_fill != {}) {
                    if (part1.hasOwnProperty("part " + partno)) {
                        var temp_item = part1["part " + partno];
                        part1["part " + partno] = { ...temp_item, ...item_fill };
                    }
                    else {
                        part1["part " + partno] = item_fill;
                    }
                    item_fill = {};
                }
            } else {
                alert("Please enter all the questions")
            }
        }
        else {
            alert("Please enter the number of questions");
        }
    }
    else {
        alert("Please enter the heading");
    }
}



