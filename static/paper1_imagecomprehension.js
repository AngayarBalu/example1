$(document).ready(function () {
    $("#image_dvtext").hide();
    var counter = 1;
    var counter1 = 1;
    var c = 97;
    var no_of_questions = 0;
    var total_marks = 0;
    var res = "";
    var head = "";
    var a = 97;
    var start_no = 0;
    var st = 0;
    var ques_no = 0;
    var img_ques = [];
    var cnt = 1;
    var img = "";
    var num = 1;

    $(document).on('click', "#image_addButton",function () {
  
        if (num > 1) {
            $("#image_compre").empty();
            counter = 1;
        }

        num++;
        $("#image_compre").append("<br><br>");
        no_of_questions = $("#image-number-of-questions").val();
        num_ques_img_compre = no_of_questions;
        total_marks = $("#image_marks").val();
        mark_img_compre = total_marks;
        ques_no = $("#image-question-number").val();
        head = $("#image_heading").val();
        start_no = $("#image-starting-number").val();
        st = start_no;
        img = $("#uploadImage").val();
        if (no_of_questions != 0 && total_marks != 0 && head != "" && $("input[name=type]").is(":checked") && img != "") {
            each_mark_img_compre = printEachMark(head, total_marks, no_of_questions);
            no_of_ques_img_compre = printNumQuestions(head, no_of_questions);

            var c1 = 97;
            var roman = 1;
            for (i = 0; i < no_of_questions; i++) {

                var res = String.fromCharCode(c1);

                if ($("input[name='type'][value='image_Alphabets']").prop("checked")) {
                    $("#image_compre").append('<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + res + '. </label></div>' +
                        '<div class="col-sm-8"><input type="text" name="image_textbox' + counter +
                        '" id="image_textbox' + counter + '" value="" class="form-control input-lg" placeholder="Question"></div>' + '&nbsp;&nbsp;&nbsp;' + '<div class="col-sm-2"><input style=" text-align:center; border-radius:5px;border: 1px solid gray;"type="text" class="form-control" id="image_eachmark' + counter + '" value="' + each_mark_img_compre + '" size="4" placeholder="Mark" readonly></div></div>'
                    );
                }

                else if ($("input[name='type'][value='image_Numbers']").prop("checked")) {
                    if (start_no != 0) {
                        $("#image_compre").append('<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + start_no + '. </label></div>' +
                            '<div class="col-sm-8"><input type="text" name="image_textbox' + counter +
                            '" id="image_textbox' + counter + '" value="" class="form-control input-lg" placeholder="Question"></div>' + '&nbsp;&nbsp;&nbsp;' + '<div class="col-sm-2"><input style=" text-align:center; border-radius:5px;border: 1px solid gray;"type="text" class="form-control" id="image_eachmark' + counter + '" value="' + each_mark_img_compre + '" size="4" placeholder="Mark" readonly></div></div>'
                        );
                        start_no++;
                    }
                }

                else if ($("input[name='type'][value='image_Roman letters']").prop("checked")) {
                    var res2 = integer_to_roman(roman);
                    $("#image_compre").append('<div class="row"><div class="col-sm-1"><label style="font-weight:bold;">' + res2 + '.</label></div>' +
                        '<div class="col-sm-8"><input type="text" name="image_textbox' + counter +
                        '" id="image_textbox' + counter + '" value="" class="form-control input-lg" placeholder="Question"></div>' + '&nbsp;' + '<div class="col-sm-2"><input class="form-control w-5" style=" text-align:center; border-radius:5px;border: 1px solid gray;"type="text" id="image_eachmark' + counter + '" value="' + each_mark_img_compre + '" size="4" placeholder="Mark" readonly></div></div>');
                    roman++;
                }
                $("#image_compre").append("<br>");
                c1++;
                counter++;
            }

            if ($("input[name='type'][value='image_Alphabets']").prop("checked")) {
                $("#image_compre").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="image_getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
            }

            else if ($("input[name='type'][value='image_Numbers']").prop("checked")) {
                if (start_no != 0) {
                    $("#image_compre").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="image_getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
                }
                else {
                    alert("Please enter the starting number");
                }
            }

            else if ($("input[name='type'][value='image_Roman letters']").prop("checked")) {
                $("#image_compre").append('<div class="row"><div class="col-sm-1"><label></label></div><div class="col-sm-2"><input type="button" id="image_getButtonValue"  class="test btn btn-primary" value="Save" ></div></div>');
            }
        }

        else {
            alert("Please enter all the fields");
        }
    });

    $(document).on('click', "#image_getButtonValue", function () {
        for (i = 1; i <= no_of_questions; i++) {
            img_ques[i - 1] = $('#image_textbox' + i).val();
            if (img_ques[i - 1] == "") {
                alert("Please enter all the questions");
                break;
            }
            else {
                //console.log(img_ques[i - 1]);
            }
        }

        item4 = {};
        marks_img_compre = no_of_ques_img_compre + "x" + each_mark_img_compre + "=" + mark_img_compre;
        item1 = {};
        img_arr = [];
        if ($("input[name='type'][value='image_Numbers']").prop("checked")) {
            var start_num = st;
            for (i = 1; i <= no_of_questions; i++) {
                $("#image_textbox" + i).each(function () {
                    var inData = $(this).val();
                    item4[start_num] = inData;
                    if (inData != "") {
                        img_arr.push(inData);
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

        if ($("input[name='type'][value='image_Roman letters']").prop("checked")) {
            for (i = 1; i <= no_of_questions; i++) {
                var roman = integer_to_roman(i);
                $("#image_textbox" + i).each(function () {
                    var inData = $(this).val();
                    item4[roman] = inData;
                    if (inData != "") {
                        img_arr.push(inData);
                    }
                });
            }
        }

        if ($("input[name='type'][value='image_Alphabets']").prop("checked")) {
            var character = 97;
            for (i = 1; i <= no_of_questions; i++) {
                var alpha = String.fromCharCode(character);
                $("#image_textbox" + i).each(function () {
                    var inData = $(this).val();
                    item4[alpha] = inData;
                    if (inData != "") {
                        img_arr.push(inData);
                    }
                });
                character++;
            }
        }

        var partno = "";
        for (var v = s_sec + 1; v <= (parseInt(no_of_parts[sec_count]) + s_sec); v++) {
            console.log("retrived " + question_types[v]);
            var partarr = question_types[v];
            for (var h = 0; h < partarr.length; h++) {
                if ("Image Comprehension" == partarr[h]) {
                    partno = v - s_sec;
                    break;
                }
            }
        }



        item_img_compre[ques_no] = {
            "heading": head,
            "type": "COMPIMG",
            "marks": marks_img_compre,
            "question": item4,
            "image": fileOutput,
            "quotedWords": null,
            "quoteType": null,
            "options": null
        };

        obj_img_compre = {
            "user": reg_teacher,
            "heading": head,
            "type": "COMPIMG",
            "marks": marks_img_compre,
            "question": item4,
            "image": fileOutput,
            "quotedWords": null,
            "quoteType": null,
            "options": null

        };

        if (img_arr.length == no_of_questions) {
            alert("Image comprehension questions is saved successfully!");
            document.getElementById("image_getButtonValue").value = "Saved!";
            console.log(JSON.stringify(item_img_compre,null,'\t'))
            createImageComprehensionQuestions(JSON.stringify(obj_img_compre));
            if (item_img_compre != {}) {
                if (part1.hasOwnProperty("part " + partno)) {
                    var temp_item = part1["part " + partno];
                    part1["part " + partno] = { ...temp_item, ...item_img_compre };
                }
                else {
                    part1["part " + partno] = item_img_compre;
                }
                item_img_compre = {};
            }
        }
    });
});

function getResults_image(elem) {
    $(document).ready(function () {
        elem.checked && elem.value == "image_Numbers" ? $("#image_dvtext").show() : $("#image_dvtext").hide();
    })

};




//image comprehension functions
function PreviewImage() {
    $(document).ready(function () {
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

        oFReader.onload = function (oFREvent) {
            document.getElementById("uploadPreview").src = oFREvent.target.result;
        };
    })
};


var fileOutput = "";
function encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview").src = oFREvent.target.result;
    };
    reader.onloadend = function () {
        fileOutput = reader.result;
    }
    reader.readAsDataURL(file);
};
