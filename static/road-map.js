var road_map_heading = "";
var road_map_question = "";
var road_map_total_marks = 0;
var road_map_head_no = 0;
var road_map_fileOutput = ""
var road_map_ques_obj = {};
var each_road_map_mark = 0;
var road_map_num_question = 0;
var road_map_marks = 0;
function road_map_encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("road_map_uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("road_map_uploadPreview").src = oFREvent.target.result;
    };
    reader.onloadend = function () {
        road_map_fileOutput = reader.result;
    }
    reader.readAsDataURL(file);
};

function road_map_PreviewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("road_map_uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("road_map_uploadPreview").src = oFREvent.target.result;
    };
};

function road_map_getvalues() {
    road_map_heading = document.getElementById("road_map_heading").value;
    road_map_question = document.getElementById("road_map_question").value;
    road_map_total_marks = document.getElementById("road_map-marks").value;
    road_map_head_no = document.getElementById("road_map-heading-number").value;
    if (road_map_head_no != 0) {
        if (road_map_heading != "") {
            if (road_map_total_marks != 0) {
                if (road_map_fileOutput != "") {
                    each_road_map_mark = printEachMark(road_map_heading, road_map_total_marks, 1)
                    road_map_num_question = printNumQuestions(road_map_heading, road_map_total_marks)
                    road_map_marks = road_map_num_question + " x " + each_road_map_mark + " = " + road_map_total_marks
                    var partno = "";
                  

                    for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
                        console.log("retrived " + question_types[v]);
                        var partarr = question_types[v];
                        for (var h = 0; h < partarr.length; h++) {
                            if ("Observe the map and write the instructions" == partarr[h]) {
                                partno = v - s_sec;
                                break;
                            }
                        }
                    }
    
                    con_no = parseInt(road_map_head_no) + 1;

                    item_road_map[road_map_head_no] = {
                        "heading": road_map_heading,
                        "type": "COMPIMG",
                        "marks": road_map_marks,
                        "question": road_map_question,
                        "image": road_map_fileOutput,
                        "quotedWords": null,
                        "quoteType": null,
                        "options": null
                    }

                    obj_road_map = {
                        "user": reg_teacher,
                        "heading": road_map_heading,
                        "type": "COMPIMG",
                        "marks": road_map_marks,
                        "question": road_map_question,
                        "image": road_map_fileOutput,
                        "quotedWords": null,
                        "quoteType": null,
                        "options": null
                    }

                    console.log(JSON.stringify(item_road_map, null, '\t'))
                    console.log(JSON.stringify(obj_road_map, null, '\t'))
                    createRoadMap(JSON.stringify(obj_road_map, null, '\t'));

                    alert("Observe the map and write the instructions is saved successfully");
                    document.getElementById('road_map_getvalue').value='Saved!';

                    if (item_road_map != {}) {
                        if (part1.hasOwnProperty("part " + partno)) {
                            var temp_item = part1["part " + partno];
                            part1["part " + partno] = { ...temp_item, ...item_road_map };
                        }
                        else {
                            part1["part " + partno] = item_road_map;
                        }
                        item_road_map = {};
                    }
                }
                else {
                    alert("Please upload an image")
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