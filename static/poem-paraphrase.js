var poem_container = "";
var poem_count = 0;
var poem_ques = [];
var poem_ans = [];
var poem_opt = [];
var poem_start_no = 0;
var poem_st = 0;
var poem_n = 0;
var poem_heading = "";
var poem_questions = 0;
var poem_total_marks = 0;
var poem_head_no = 0;
var each_poem_mark = 0;
var poem_num_question = 0;
var poem_marks = 0;

function poem_add_field() {
    if (poem_n > 0) {
        $("#poem_a").empty();
        poem_count = 0;
    }
    poem_n++;
    poem_heading = document.getElementById("poem_heading").value;
    poem_questions = document.getElementById("poem-questions").value;
    poem_name = document.getElementById("poem_name").value;
    poem_author = document.getElementById("author_name").value;
    poem_container = document.getElementById("poem_a");
    poem_total_marks = document.getElementById("poem-marks").value;
    poem_head_no = document.getElementById("poem-heading-number").value;
    each_poem_mark = printEachMark(poem_heading, poem_total_marks, 1)
    poem_num_question = printNumQuestions(poem_heading, 1)
    poem_marks = 1 + " x " + each_poem_mark + " = " + poem_total_marks
    poem_st = poem_start_no;
    if (poem_total_marks != 0) {
        if (poem_heading != "") {
            if (poem_name != "") {
                if (poem_author != "") {
                    if (poem_questions != 0) {
                        document.getElementById("poem_getvalue").style.display = "block";
                        poem_container.innerHTML = poem_container.innerHTML +
                            "&nbsp;<div class='form-group'><label style='font-weight:bold;'>Poemlines</label></div>"

                        for (i = 0; i < poem_questions; i++) {
                            poem_container.innerHTML = poem_container.innerHTML +
                                "&nbsp;<div id='poem_" + poem_count + "'><div class='row'><div class = 'col-sm-1'><label style='font-weight:bold;' id='questionLabel" + poem_count + "'>" + (i + 1) + " .</label></div><div class = 'col-sm-11'><div style='height:40px;overflow:auto;' class='form-control input_text' id='poem_question" + poem_count + "'contenteditable='true' data-placeholder='Poem line " + (poem_count + 1) + "' ></div></div></div></div>";
                            poem_count++;
                        }
                        poem_container.innerHTML = poem_container.innerHTML +
                            "&nbsp;<div class='form-group'><label style='font-weight:bold;' id='paragraphLabel" + poem_count + "'>Question</label><div style='height:150px;overflow:auto;' class='form-control input_text' id='poem_paragraph' contenteditable='true' data-placeholder='Type the question here...' ></div></div>"

                    } else {
                        alert("Please enter the author name");
                    }
                } else {
                    alert("Please enter the poem name");
                }
            }
            else {
                alert("Please enter the number of questions");
            }
        }
        else {
            alert("Please enter the heading");
        }
    } else {
        alert("Please enter the marks")
    }
}

function poem_getvalues() {
    var poem_paragraph = [];
    if (poem_heading != "") {
        if (poem_questions != 0) {
            poem_paragraph.push(document.getElementById("poem_paragraph").textContent);
            for (i = 0; i < poem_count; i++) {
                poem_ques[i] = document.getElementById("poem_question" + i).textContent;
            }

            poem_ques = poem_ques.filter(function (e) { return e });
            if (count(poem_ques) == poem_questions) {
                if (count(poem_paragraph) == 1) {
                    var partno = "";


                    for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
                        console.log("retrived " + question_types[v]);
                        var partarr = question_types[v];
                        for (var h = 0; h < partarr.length; h++) {
                            if ("Read the poem and complete the paraphrase" == partarr[h]) {
                                partno = v - s_sec;

                                break;
                            }
                        }
                    }
                    con_no = parseInt(poem_head_no) + 1;

                    item_poem_ques[poem_head_no] = {
                        "heading": poem_heading,
                        "marks": poem_marks,
                        "type": "POEM",
                        "poem": poem_name,
                        "poemlines": poem_ques,
                        "author": poem_author,
                        "paragraph": poem_paragraph,
                        "question": null,
                        "quotedWords": null,
                        "quoteType": null,
                        "options": null
                    }

                    obj_poem_ques = {
                        "user": reg_teacher,
                        "heading": poem_heading,
                        "marks": poem_marks,
                        "type": "POEM",
                        "poem": poem_name,
                        "poemlines": poem_ques,
                        "author": poem_author,
                        "paragraph": poem_paragraph,
                        "question": null,
                        "quotedWords": null,
                        "quoteType": null,
                        "options": null
                    }

                    console.log(JSON.stringify(item_poem_ques, null, '\t'))
                    console.log(JSON.stringify(obj_poem_ques, null, '\t'))
                    createPoemFill(JSON.stringify(obj_poem_ques, null, '\t'))
                    alert("Read the poem and complete the paraphrase is saved successfully");
                    document.getElementById('poem_getvalue').value = 'Saved!';

                    if (item_poem_ques != {}) {
                        if (part1.hasOwnProperty("part " + partno)) {
                            var temp_item = part1["part " + partno];
                            part1["part " + partno] = { ...temp_item, ...item_poem_ques };
                        }
                        else {
                            part1["part " + partno] = item_poem_ques;
                        }
                        item_poem_ques = {};
                    }
                } else {
                    alert("Please enter the question")
                }

            } else {
                alert("Please enter all the poem lines")
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

function poem_getResults(elem) {
    elem.checked && elem.value == "poem_Numbers" ? $("#poem_dvtext").show() : $("#poem_dvtext").hide();
};

function count(array) {
    var c = 0;
    for (i in array) // in returns key, not object
        if (array[i] != "")
            c++;

    return c;
}