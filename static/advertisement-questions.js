var ad_container = '';
var ad_count = 0;
var ad_ques = [];
var ad_ans = [];
var ad_opt = [];
var ad_start_no = 0;
var ad_st = 0;
var ad_n = 0;
var ad_heading = '';
var ad_questions = 0;
var ad_total_marks = 0;
var ad_head_no = 0;
var each_ad_mark = 0;
var ad_num_question = 0;
var ad_marks = 0;

function ad_add_field() {
    if (ad_n > 0) {
        $('#ad_a').empty();
        ad_count = 0;
    }
    ad_n++;
    ad_heading = document.getElementById('ad_heading').value;
    ad_questions = document.getElementById('ad-questions').value;
    ad_container = document.getElementById('ad_a');
    ad_total_marks = document.getElementById('ad-marks').value;
    ad_head_no = document.getElementById('ad-heading-number').value;
    ad_start_no = document.getElementById('ad_starting-number').value;
    ad_st = ad_start_no;
    each_ad_mark = printEachMark(ad_heading, ad_total_marks, ad_questions)
    ad_num_question = printNumQuestions(ad_heading, ad_questions)
    ad_marks = ad_num_question + " x " + each_ad_mark + " = " + ad_total_marks
    if (ad_total_marks != 0) {
        if (ad_heading != "") {
            if ($("input[name=ad_type]").is(":checked")) {
                if (ad_questions != 0) {
                    if ($("input[name='ad_type'][value='ad_Numbers']").prop("checked")) {
                        if (ad_start_no != 0) {
                            document.getElementById("ad_getvalue").style.display = "block";
                            for (i = 0; i < ad_questions; i++) {
                                ad_container.innerHTML = ad_container.innerHTML +
                                    "&nbsp;<div id='ad_" + ad_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + ad_count + "'>" + ad_start_no + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='ad_question" + ad_count + "'contenteditable='true' data-placeholder='Question " + (ad_count + 1) + "' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;'>" + each_ad_mark + " mark</label></div></div></div>";
                                ad_count++;
                                ad_start_no++;
                            }
                        }
                        else {
                            alert("Please enter the starting number")
                        }

                    }

                    if ($("input[name='ad_type'][value='ad_Alphabets']").prop("checked")) {
                        document.getElementById("ad_getvalue").style.display = "block";
                        var numbering = 97;
                        for (i = 0; i < ad_questions; i++) {
                            var res = String.fromCharCode(numbering);
                            ad_container.innerHTML = ad_container.innerHTML +
                                "&nbsp;<div id='ad_" + ad_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + ad_count + "'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='ad_question" + ad_count + "'contenteditable='true' data-placeholder='Question " + res + "' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;'>" + each_ad_mark + " mark</label></div></div></div>";
                            ad_count++;
                            numbering++;
                        }
                    }

                    if ($("input[name='ad_type'][value='ad_Roman letters']").prop("checked")) {
                        document.getElementById("ad_getvalue").style.display = "block";
                        for (i = 0; i < ad_questions; i++) {
                            var res = integer_to_roman(i + 1)
                            ad_container.innerHTML = ad_container.innerHTML +
                                "&nbsp;<div id='ad_" + ad_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + ad_count + "'>" + res + " .</label></div><div class = 'col-sm-10'><div style='height:40px;overflow:auto;' class='form-control input_text' id='ad_question" + ad_count + "'contenteditable='true' data-placeholder='Question (" + res + ")' ></div></div><div class = 'col-sm-1'><label style='font-weight:bold;'>" + each_ad_mark + " mark</label></div></div></div>";
                            ad_count++;
                        }
                    }
                }
                else {
                    alert("Please enter the number of questions");
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
        alert("Please enter the marks")
    }
}

function ad_getvalues() {
    var ad_question = {};
    if (ad_heading != "") {
        if (ad_questions != 0) {
            for (i = 0; i < ad_count; i++) {
                ad_ques[i] = document.getElementById("ad_question" + i).textContent;
            }

            ad_ques = ad_ques.filter(function (e) { return e });
            if (ad_ques.length == ad_questions) {

                if ($("input[name='ad_type'][value='ad_Numbers']").prop("checked")) {
                    var start_num = ad_st;
                    for (i = 0; i < ad_questions; i++) {
                        ad_question[start_num] = document.getElementById('ad_question' + i).textContent;
                        start_num++;
                    }
                }

                if (ad_head_no != 0) {
                    con_no = parseInt(ad_head_no) + 1;
                }
                else {
                    con_no = start_num;
                }
                
                if ($("input[name='ad_type'][value='ad_Roman letters']").prop("checked")) {
                    for (i = 0; i < ad_questions; i++) {
                        var roman = integer_to_roman(i + 1);
                        ad_question[roman] = document.getElementById('ad_question' + i).textContent;
                    }
                }
                if ($("input[name='ad_type'][value='ad_Alphabets']").prop("checked")) {
                    var a = 97;
                    for (i = 0; i < ad_questions; i++) {
                        var alpha = String.fromCharCode(a);
                        ad_question[alpha] = document.getElementById('ad_question' + i).textContent;
                        a++;
                    }
                }

                var ad_quest = {};
                ad_quest["question"] = ad_question;
                var partno = "";
                for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
                    console.log("retrived " + question_types[v]);
                    var partarr = question_types[v];
                    for (var h = 0; h < partarr.length; h++) {
                        if ("Advertisement questions" == partarr[h]) {
                            partno = v - s_sec;
                            
                            break;
                        }
                    }
                }

                item_ad_ques[ad_head_no] = {
                    "heading": ad_heading,
                    "type":"MCQCH",
                    "marks": ad_marks,
                    "quotedWords": null,
                    "quoteType": null,
                    "options": null
                }
                for (let key in ad_quest) {
                    item_ad_ques[ad_head_no][key] = ad_quest[key]
                }

                obj_ad_ques = {
                    "user": reg_teacher,
                    "heading": ad_heading,
                    "marks": ad_marks,
                    "quotedWords": null,
                    "quoteType": null,
                    "options": null
                }
                for (let key in ad_quest) {
                    obj_ad_ques[key] = ad_quest[key]
                }

                console.log(JSON.stringify(item_ad_ques, null, '\t'))
                console.log(JSON.stringify(obj_ad_ques, null, '\t'))
                createAdvertisementQuestions(JSON.stringify(obj_ad_ques, null, '\t'))
                alert("Advertisement questions is saved successfully");
                document.getElementById('ad_getvalue').value='Saved!';
                if (item_ad_ques != {}) {
                    if (part1.hasOwnProperty("part " + partno)) {
                        var temp_item = part1["part " + partno];
                        part1["part " + partno] = { ...temp_item, ...item_ad_ques };
                    }
                    else {
                        part1["part " + partno] = item_ad_ques;
                    }
                    item_ad_ques = {};
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

function ad_getResults(elem) {
    elem.checked && elem.value == "ad_Numbers" ? $("#ad_dvtext").show() : $("#ad_dvtext").hide();
};