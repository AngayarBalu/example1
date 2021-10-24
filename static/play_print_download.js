
function print() {

    c = 65;

    var val = 1;
    var cap = String.fromCharCode(cha);
    var s_count = section_count;
    if (part1 != {}) {

        if (sectioncount != 0) {

            sec_title = { "title": section_titles[s_count], "marks": sectionmarks[s_count] }
            section1["section " + (cap)] = { ...sec_title, ...part1 };

            console.log(JSON.stringify(section1, null, '\t'));
            part1 = {};
        }

    }

    sections = {  "type of test": test_types,"school name": school_name, "standard": std, "title": subject_name, "date of exam": exam_date, "time": time_allowed, "maximum marks": maximum_marks, "instructions": [instruct], ...section1 };
    obj_eng_ques = { "user": reg_teacher, "submitted": false, "type of test": test_types,"school name": school_name,  "standard": std, "title": subject_name, "date of exam": exam_date, "time": time_allowed, "maximum marks": maximum_marks, "instructions": [instruct], ...section1 };
    createEnglishIQuestionPaper(JSON.stringify(obj_eng_ques, null, '\t'));

    play = "This is " + test_types + " for " + std + '.\n' + "The subject name is " + subject_name + '.\n' + "The total time allowed is " + time_allowed + '.\n' + "The maximum marks is " + maximum_marks + '.\n' + "The instructions are " + instruct + '.\n';

    if (section_count <= 1) {
        play += "This question paper has " + numberToWords(section_count) + " section" + '.\n';
    }
    else {
        play += "This question paper has " + numberToWords(section_count) + " sections" + '.\n';
    }

    for (i = 1; i <= section_count; i++) {

        var res = String.fromCharCode(c);

        play += "Section " + res + " is " + section_titles[i] + '.\n';

        if (no_of_parts[i] <= 1) {
            play += "No of parts in Section " + res + " is " + no_of_parts[i] + '.\n';
        }
        else {
            play += "No of parts in Section " + res + " are " + no_of_parts[i] + '.\n';
        }


        var counterr = 1;
        temp = 1;
        for (var j = 1; j <= parseInt(no_of_parts[i]); j++) {

            var p_name = question_types[val];

            if (p_name.length <= 1) {
                play += "Part " + integer_to_roman1(temp) + " has " + p_name.length + " heading" + '.\n';
            }
            else {
                play += "Part " + integer_to_roman1(temp) + " has " + p_name.length + " headings" + '.\n';
            }

            for (var k = 0; k < p_name.length; k++) {
                play += p_name[k];
                if (p_name[k] == "Synonyms with paragraph") {
                    play += play_book(each_mark_synonyms, num_ques_syn, mark_syn);

                }
                if (p_name[k] == "Antonyms with paragraph") {
                    play += play_book(each_mark_antonyms, num_ques_ant, mark_ant);

                }

                if (p_name[k] == "Synonyms") {
                    play += play_book(each_mark_syn_opt, num_ques_syn_opt, mark_syn_opt_total_marks);

                }

                if (p_name[k] == "Antonyms") {
                    play += play_book(each_mark_ant_opt, num_ques_ant_opt, mark_ant_opt_total_marks);

                }
                if (p_name[k] == "Answer the following - I (Vocabulary)") {
                    play += play_book(each_mark_ans_vocabulary, num_ques_ans_voc, mark_ans_voc);
                }
                if (p_name[k] == "Answer the following - I (Grammar)") {
                    play += play_book(each_mark_ans_gram1, num_ques_ans_grmr1, mark_ans_grmr1);
                }
                if (p_name[k] == "Answer the following - II (Grammar)") {
                    play += play_book(each_mark_ans_gram2, num_ques_ans_grmr2, mark_ans_grmr2);
                }
                if (p_name[k] == "Punctuation") {
                    play += play_book(each_mark_punc, num_ques_punc, mark_punc);
                }
                if (p_name[k] == "Short questions") {
                    play += play_book(each_mark_shortques, num_ques_shortques, mark_shortques);
                }
                if (p_name[k] == "Paragraph questions (Prose)") {
                    play += play_book(each_mark_pro_para, num_ques_pro_para, mark_pro_para_ques);
                }
                if (p_name[k] == "Memory poem") {
                    play += play_book(each_mark_mem, num_ques_mem, mark_mem);
                }
                if (p_name[k] == "Poetic lines with questions") {
                    play += play_book(each_mark_poet, num_ques_poet, mark_poet);
                }
                if (p_name[k] == "Figure of speech") {
                    play += play_book(each_mark_fig, num_ques_fig, mark_fig);
                }
                if (p_name[k] == "Paragraph questions (Poem)") {
                    play += play_book(each_mark_poem_para, num_ques_poem_para, mark_poem_para_ques);
                }
                if (p_name[k] == "Comprehension(prose)") {
                    play += play_book(each_mark_compre, num_ques_compre, mark_compre);
                }
                if (p_name[k] == "Error Spotting") {
                    play += play_book(each_mark_errques, num_ques_errques, mark_errques);

                }
                if (p_name[k] == "Image Comprehension") {
                    play += play_book(each_mark_img_compre, num_ques_img_compre, mark_img_compre);

                }

                if (p_name[k] == "Fill the paragraph with appropriate phrases") {
                    play += play_book(each_fill_mark, fill_num_question, fill_total_marks);
                }
                if (p_name[k] == "Identify character or speaker") {
                    play += play_book(each_ch_speaker_mark, ch_speaker_num_question, ch_speaker_total_marks);
                }
                if (p_name[k] == "Match the following appropriately") {
                    play += play_book(each_match_mark, match_num_question, match_total_marks);
                }

                if (p_name[k] == "Choose the correct answer") {
                    play += play_book(choose_each_mark, choose_num_of_ques, choose_total_marks);
                }
                
                if (p_name[k] == "Comprehension questions(supply)") {
                    play += play_book(second_compre_ques_each_mark, second_compre_ques_num_of_ques,second_compre_ques_total_marks);
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
                    play += play_book(pie_chart_each_mark, pie_chart_num_of_ques,pie_chart_total_marks);
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
    download("question_paper_schema_output.json", JSON.stringify(sections, null, '\t'));
    obj_play = { "user": reg_teacher, "type of test": test_types,"school name": school_name,  "standard": std, "title": subject_name, "date of exam": exam_date,"playbook": play };
 
    console.log(play)
    createPlaybook(JSON.stringify(obj_play, null, '\t'));
    //download("Playbook.txt", play);
    localStorage.setItem("user",reg_teacher)
    localStorage.setItem("title",subject_name)
    localStorage.setItem("type of test",test_types)
    localStorage.setItem("standard",std)
    localStorage.setItem("school name",school_name)
    localStorage.setItem("date of exam", exam_date)

    next();
    
    
    
    //location.href = "print-preview.html";
}

function next(){
    location.href = "/print";
}
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
