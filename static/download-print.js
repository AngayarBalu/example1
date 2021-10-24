function play_book(each_mark, num_ques, mark) {
    var p;
    if (each_mark == 1 && num_ques == 1 && mark == 1) {
        p = " which has " + num_ques + " question " + mark + " mark each question carries " + each_mark + " mark" + '.\n';
    }
    else if (each_mark == 1 && num_ques > 1 && mark == 1) {
        p = " which has " + num_ques + " questions " + mark + " mark each question carries " + each_mark + " mark" + '.\n';
    }
    else if (each_mark > 1 && num_ques == 1 && mark == 1) {
        p = " which has " + num_ques + " question " + mark + " mark each question carries " + each_mark + " marks" + '.\n';
    }
    else if (each_mark == 1 && num_ques == 1 && mark > 1) {
        p = " which has " + num_ques + " question " + mark + " marks each question carries " + each_mark + " mark" + '.\n';
    }
    else if (each_mark > 1 && num_ques > 1 && mark == 1) {
        p = " which has " + num_ques + " questions " + mark + " mark each question carries " + each_mark + " marks" + '.\n';
    }
    else if (each_mark > 1 && num_ques == 1 && mark > 1) {
        p = " which has " + num_ques + " question " + mark + " marks each question carries " + each_mark + " marks" + '.\n';
    }
    else if (each_mark == 1 && num_ques > 1 && mark > 1) {
        p = " which has " + num_ques + " questions " + mark + " marks each question carries " + each_mark + " mark" + '.\n';
    }
    else if (each_mark > 1 && num_ques > 1 && mark == 1) {
        p = " which has " + num_ques + " questions " + mark + " mark each question carries " + each_mark + " marks" + '.\n';
    }
    else {
        p = " which has " + num_ques + " questions " + mark + " marks each question carries " + each_mark + " marks" + '.\n';
    }
    return p;
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function print() {
    c = 65;
    var val = 1;
    var cap = String.fromCharCode(cha);
    var s_count = retrievedData2;
    if (part1 != {}) {

        if (sectioncount != 0) {

            sec_title = { "title": retrievedData3[s_count], "marks": retrievedData5[s_count] }
            section1["section " + (cap)] = { ...sec_title, ...part1 };

            console.log(JSON.stringify(section1, null, '\t'));
            part1 = {};
        }
    }

    sections = { "type of test": retrievedData15,"school name":retrievedData14,"standard":retrievedData13,"title": retrievedData8, "date of exam": retrievedData12, "time": time_allowed, "maximum marks": maximum_marks, "instructions": [retrievedData11], ...section1 };
    obj_eng_ques = { "user": user_id, "type of test": retrievedData15,"school name":retrievedData14,"standard":retrievedData13,"title": retrievedData8, "date of exam": retrievedData12, "time": time_allowed, "maximum marks": maximum_marks, "instructions": [retrievedData11], ...section1, "submitted":false};
    createEnglishIQuestionPaper(JSON.stringify(obj_eng_ques, null, '\t'));

    play = "The subject name is: " + retrievedData8 + '.\n' + "The total time allowed is: " + time_allowed + '.\n' + "The maximum marks is " + maximum_marks + '.\n' + "The instructions are: " + retrievedData11 + '.\n';

    if (retrievedData2 <= 1) {
        play += "This question paper has " + numberToWords(retrievedData2) + " section" + '.\n';
    }
    else {
        play += "This question paper has " + numberToWords(retrievedData2) + " sections" + '.\n';
    }

    for (i = 1; i <= retrievedData2; i++) {

        var res = String.fromCharCode(c);

        play += "Section " + res + " is " + retrievedData3[i] + '.\n';

        if (retrievedData4[i] <= 1) {
            play += "No of parts in Section " + res + " is " + retrievedData4[i] + '.\n';
        }
        else {
            play += "No of parts in Section " + res + " are " + retrievedData4[i] + '.\n';
        }


        var counterr = 1;
        temp = 1;
        for (var j = 1; j <= parseInt(retrievedData4[i]); j++) {

            var p_name = retrievedData6[val];

            if (p_name.length <= 1) {
                play += "Part " + integer_to_roman1(temp) + " has " + p_name.length + " heading" + '.\n';
            }
            else {
                play += "Part " + integer_to_roman1(temp) + " has " + p_name.length + " headings" + '.\n';
            }

            for (var k = 0; k < p_name.length; k++) {
                play += p_name[k];
                if (p_name[k] == "Fill the paragraph with appropriate phrases") {
                    play += play_book(each_fill_mark, fill_num_question, fill_total_marks);
                }
                if (p_name[k] == "Identify character or speaker") {
                    play += play_book(each_ch_speaker_mark, ch_speaker_num_question, ch_speaker_total_marks);
                }
                if (p_name[k] == "Choose the correct answer") {
                    play += play_book(choose_each_mark, choose_num_of_ques, choose_total_marks);
                }
                if (p_name[k] == "Match the following appropriately") {
                    play += play_book(each_match_mark, match_num_question, match_total_marks);
                }
                if (p_name[k] == "Comprehension questions") {
                    play += play_book(compre_ques_each_mark, compre_ques_num_of_ques,compre_ques_total_marks);
                }
                if (p_name[k] == "Study the mind map and fill in the blanks") {
                    play += play_book(each_mind_map_mark, mind_map_num_question, mind_map_total_marks);
                }
                if (p_name[k] == "Paragraph questions ( Supplementary )") {
                    play += play_book(each_supple_para_mark, supple_para_num_question, supple_para_total_marks);
                }
                if (p_name[k] == "Note-making or Summarise notes") {
                    play += play_book(each_note_mark, note_num_question, note_total_marks);
                }
                if (p_name[k] == "Dialogue writing") {
                    play += play_book(each_dialog_mark, dialog_num_question, dialog_total_marks);
                }
                if (p_name[k] == "Advertisement questions") {
                    play += play_book(each_ad_mark, ad_num_question, ad_total_marks);
                }
                if (p_name[k] == "Expand the headlines") {
                    play += play_book(each_ex_head_mark, ex_head_num_question, ex_head_total_marks);
                }
                if (p_name[k] == "Study the pie-chart and answer the questions") {
                    play += play_book(each_match_mark, match_num_question, match_total_marks);
                }
                if (p_name[k] == "Match the following products and slogans appropriately") {
                    play += play_book(each_match1_mark, match1_num_question, match1_total_marks);
                }
                if (p_name[k] == "Write a paragraph using outlines") {
                    play += play_book(each_dev_para_mark, dev_para_num_question, dev_para_total_marks);
                }
                if (p_name[k] == "Observe the map and write the instructions") {
                    play += play_book(each_road_map_mark, road_map_num_question, road_map_total_marks);
                }
                if (p_name[k] == "Read the poem and complete the paraphrase") {
                    play += play_book(each_poem_mark, poem_num_question, poem_total_marks);
                }
                if (p_name[k] == "Translation") {
                    play += play_book(each_trans_mark, trans_num_question, trans_total_marks);
                }
                if (p_name[k] == "Picture comprehension") {
                    play += play_book(each_picture_compre_mark, picture_compre_num_question, picture_compre_total_marks);
                }
                if (p_name[k] == "Translation and Picture comprehension") {
                    play += play_book(each_pic_trans_mark, pic_trans_num_question, pic_trans_total_marks);
                }
                if (p_name[k] == "Letter writing ( Formal )") {
                    play += play_book(each_formal_letter_mark,formal_letter_num_question, formal_letter_total_marks);
                }
                
                if (p_name[k] == "Letter writing ( Informal )") {
                    play += play_book(each_informal_letter_mark, informal_letter_num_question, informal_letter_total_marks);
                }

                if (p_name[k] == "Letter writing questions") {
                    play += play_book(each_normal_letter_mark, normal_letter_num_question, normal_letter_total_marks);
                }

                if (p_name[k] == "Dialogue writing (Fill in the blanks)") {
                    play += play_book(each_dialog_fill_mark, dialog_fill_num_question, dialog_fill_total_marks);
                }
                
            }
            counterr++;
            sec_count++;
            temp++;
            val++;
        }
        c++;
    }
    //download("question_paper_schema_output.json", JSON.stringify(sections, null, '\t'));
    obj_play = { "user": user_id, "type of test": retrievedData15,"school name":retrievedData14,"standard":retrievedData13,"title": retrievedData8, "date of exam": retrievedData12,"playbook": play }
    createEnglishIPlaybook(JSON.stringify(obj_play, null, '\t'))
    // download("Playbook.txt", play);
    console.log(play);
    // location.href = "http://180.179.48.5:80/print"
   
    localStorage.setItem("user",user_id)
    localStorage.setItem("title",sub_name);
    localStorage.setItem("date of exam",retrievedData12);
    localStorage.setItem("type of test",retrievedData15);
    localStorage.setItem("standard",retrievedData13);
    localStorage.setItem("school name",retrievedData14);
    next();
    
}

function next(){
    location.href = "http://180.179.48.5:80/print";
}