var note_n = 0;
var note_heading = "";
var note_questions = 0;
var note_total_marks = 0;
var note_head_no = 0;
var note_passage = ""
var each_note_mark = printEachMark(note_heading, note_total_marks, note_total_marks)
var note_num_question = 0;
var notemaking_mark = 0;
var note_marks = 0;

function note_getvalues() {
    if (note_n > 0) {
        $("#note_a").empty();
        note_count = 0;
    }
    note_n++;
    note_heading = document.getElementById("note_heading").value;
    note_total_marks = document.getElementById("note-marks").value;
    note_head_no = document.getElementById("note-heading-number").value;
    note_passage = document.getElementById("note-passage").textContent;
    var note_question = {};
    var partno = "";
    
    for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
        console.log("retrived " + question_types[v]);
        var partarr = question_types[v];
        for (var h = 0; h < partarr.length; h++) {
            if ("Note-making or Summarise notes" == partarr[h]) {
                partno = v - s_sec;
                break;
            }
        }
    }


    if (note_head_no != 0) {
        if (note_heading != "") {
            if (note_total_marks != 0) {
                if (note_passage != "") {
                    con_no = parseInt(note_head_no) + 1;
                    each_note_mark = printEachMark(note_heading, note_total_marks, 1)
                    note_num_question = printNumQuestions(note_heading, 1)
                    notemaking_mark = note_total_marks / 2;
                    note_marks = notemaking_mark + " + " + notemaking_mark + " = " + note_total_marks
                    item_note_making[note_head_no] = {
                        "heading": note_heading,
                        "type": "MCQN",
                        "marks": note_marks,
                        "question": note_passage,
                        "quotedWords": null,
                        "quoteType": null,
                        "options": null
                    }

                    obj_note_making = {
                        "user": reg_teacher,
                        "heading": note_heading,
                        "type": "MCQN",
                        "marks": note_marks,
                        "question": note_passage,
                        "quotedWords": null,
                        "quoteType": null,
                        "options": null
                    };

                    console.log(JSON.stringify(item_note_making, null, '\t'))
                    console.log(JSON.stringify(obj_note_making, null, '\t'))
                    createNoteMaking(JSON.stringify(obj_note_making, null, '\t'))
                    alert("Note-making or Summarise notes is saved successfully");
                    document.getElementById('note_getvalue').value = 'Saved!';

                    if (item_note_making != {}) {
                        if (part1.hasOwnProperty("part " + partno)) {
                            var temp_item = part1["part " + partno];
                            part1["part " + partno] = { ...temp_item, ...item_note_making };
                        }
                        else {
                            part1["part " + partno] = item_note_making;
                        }
                        item_note_making = {};
                    }
                }
                else {
                    alert("Please enter the passage")
                }
            } else {
                alert("Please enter the marks")
            }
        }
        else {
            alert("Please enter the heading");
        }
    } else {
        alert("Please enter the heading number")
    }
}
