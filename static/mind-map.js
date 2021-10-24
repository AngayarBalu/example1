var mind_map_n = 0;
var mind_map_heading = "";
var mind_map_questions = 0;
var mind_map_total_marks = 0;
var mind_map_head_no = 0;
var mind_map_fileOutput = ""
var each_mind_map_mark = 0;
var mind_map_num_question = 0;
var mind_map_marks = 0;

function mind_map_encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("mind_map_uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("mind_map_uploadPreview").src = oFREvent.target.result;
    };
    reader.onloadend = function () {
        mind_map_fileOutput = reader.result;
    }
    reader.readAsDataURL(file);
};

function mind_map_PreviewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("mind_map_uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("mind_map_uploadPreview").src = oFREvent.target.result;
    };
};

function mind_map_getvalues() {
    if (mind_map_n > 0) {
        $("#mind_map_a").empty();
        mind_map_count = 0;
    }
    mind_map_n++;
    mind_map_heading = document.getElementById("mind_map_heading").value;
    mind_map_total_marks = document.getElementById("mind_map-marks").value;
    mind_map_head_no = document.getElementById("mind_map-heading-number").value;

    if (mind_map_head_no != 0) {
        if (mind_map_heading != "") {
            if (mind_map_total_marks != 0) {
                if (mind_map_fileOutput != "") {
                    each_mind_map_mark = printEachMark(mind_map_heading, mind_map_total_marks, 1)
                    mind_map_num_question = printNumQuestions(mind_map_heading, 1)
                    mind_map_marks = mind_map_num_question + " x " + each_mind_map_mark + " = " + mind_map_total_marks
                    var partno = "";
                    
                    for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
                        console.log("retrived " + question_types[v]);
                        var partarr = question_types[v];
                        for (var h = 0; h < partarr.length; h++) {
                            if ("Study the mind map and fill in the blanks" == partarr[h]) {
                                partno = v - s_sec;
                                break;
                            }
                        }
                    }

                    
                    con_no = parseInt(mind_map_head_no) + 1;
    
    
                    item_mind_map[mind_map_head_no] = {
                        "heading": mind_map_heading,
                        "marks": mind_map_marks,
                        "type": "COMPIMG",
                        "image": mind_map_fileOutput,
                        "question": null,
                        "quotedWords": null,
                        "quoteType": null,
                        "options": null
                    }

                    obj_mind_map = {
                        "user": reg_teacher,
                        "heading": mind_map_heading,
                        "marks": mind_map_marks,
                        "type": "COMPIMG",
                        "image": mind_map_fileOutput,
                        "question": null,
                        "quotedWords": null,
                        "quoteType": null,
                        "options": null
                    };

                    console.log(JSON.stringify(item_mind_map, null, '\t'))
                    console.log(JSON.stringify(obj_mind_map, null, '\t'))
                    createMindmap(JSON.stringify(obj_mind_map, null, '\t'))
                    alert("Study the mind map and fill in the blanks is saved successfully");
                    document.getElementById('mind_map_getvalue').value='Saved!';
                    if (item_mind_map != {}) {
                        if (part1.hasOwnProperty("part " + partno)) {
                            var temp_item = part1["part " + partno];
                            part1["part " + partno] = { ...temp_item, ...item_mind_map };
                        }
                        else {
                            part1["part " + partno] = item_mind_map;
                        }
                        item_mind_map = {};
                    }
                }
                else {
                    alert("Please upload the image")
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
