var count1 = 0;
//var ch_heading = document.getElementById('ch_heading').value;

function final_submission() {
    var count = 1;
    var final_obj = {};
    var quest = {}
    var final_item = {};
    count1++;

    console.log("Ch type" + ch_type)
    quest = { "user": user_id, "standard": std, "section": sec, "schoolname": schoolname, "subject": capitalizeFirstLetter(subname), "chapter-no": parseInt(ch_no), "chapter-type": ch_type, "chapter-name": ch_heading };
     
    
    // prose part

    if (ch_type == "prose") {
        //Abbreviation questions
        var abbre_obj = JSON.parse(localStorage.getItem("abbreviation_final_object"));
        console.log(JSON.stringify(abbre_obj, null, '\t'));
        if (abbre_obj != null) {
            final_obj[count] = abbre_obj;
            count++;
        }
        localStorage.removeItem('abbreviation_final_object');

        //Advertisement questions
        var ad_obj = JSON.parse(localStorage.getItem("advertisement_final_object"));
        console.log(JSON.stringify(ad_obj, null, '\t'))
        if (ad_obj != null) {
            final_obj[count] = ad_obj;
            count++;
        }
        localStorage.removeItem('advertisement_final_object');

        //Active voice and passive voice
        var active_obj = JSON.parse(localStorage.getItem("active_final_object"));
        console.log(JSON.stringify(active_obj, null, '\t'))
        if (active_obj != null) {
            final_obj[count] = active_obj;
            count++;
        }
        localStorage.removeItem('active_final_object');


        //American english and british english 
        var american_obj = JSON.parse(localStorage.getItem("american_english_final_object"));
        console.log(JSON.stringify(american_obj, null, '\t'));
        if (american_obj != null) {
            final_obj[count] = american_obj;
            count++;
        }
        localStorage.removeItem('american_english_final_object');

        //Antonyms
        var antonyms_obj = JSON.parse(localStorage.getItem("antonyms_final_object"));
        console.log(JSON.stringify(antonyms_obj, null, '\t'));
        if (antonyms_obj != null) {
            final_obj[count] = antonyms_obj;
            count++;
        }
        localStorage.removeItem('antonyms_final_object');


        //Comprehension questions
        var compre_obj = JSON.parse(localStorage.getItem("compre_final_object"));
        console.log(JSON.stringify(compre_obj, null, '\t'));
        if (compre_obj != null) {
            final_obj[count] = compre_obj;
            count++;
        }
        localStorage.removeItem('compre_final_object');


        //Develop story with pictures
        var develop_story_obj = JSON.parse(localStorage.getItem("develop_story_final_object"));
        console.log(JSON.stringify(develop_story_obj, null, '\t'));
        if (develop_story_obj != null) {
            final_obj[count] = develop_story_obj;
            count++;
        }
        localStorage.removeItem('develop_story_final_object');


        //Expand headlines
        var ex_head_obj = JSON.parse(localStorage.getItem("ex_head_final_object"));
        console.log(JSON.stringify(ex_head_obj, null, '\t'));
        if (ex_head_obj != null) {
            final_obj[count] = ex_head_obj;
            count++;
        }
        localStorage.removeItem('ex_head_final_object');


        //Fill in the blanks with help box
        var phrase_obj = JSON.parse(localStorage.getItem("phrase_final_object"));
        console.log(JSON.stringify(phrase_obj, null, '\t'));
        if (phrase_obj != null) {
            final_obj[count] = phrase_obj;
            count++;
        }
        localStorage.removeItem('phrase_final_object');

        //Fill in with appropriate phrasal verbs with help box and passage
        var phrase_passage_obj = JSON.parse(localStorage.getItem("phrase_passage_final_object"));
        console.log(JSON.stringify(phrase_passage_obj, null, '\t'));
        if (phrase_passage_obj != null) {
            final_obj[count] = phrase_passage_obj;
            count++;
        }
        localStorage.removeItem('phrase_passage_final_object');


        //formal letter writing
        var formal_letter_obj = JSON.parse(localStorage.getItem("formal_letter_final_object"));
        console.log(JSON.stringify(formal_letter_obj, null, '\t'));
        if (formal_letter_obj != null) {
            final_obj[count] = formal_letter_obj;
            count++;
        }
        localStorage.removeItem('formal_letter_final_object');

        //informal letter writing
        var informal_letter_obj = JSON.parse(localStorage.getItem("informal_letter_final_object"));
        console.log(JSON.stringify(informal_letter_obj, null, '\t'));
        if (informal_letter_obj != null) {
            final_obj[count] = informal_letter_obj;
            count++;
        }
        localStorage.removeItem('informal_letter_final_object');


        //matching
        var match_obj = JSON.parse(localStorage.getItem("match_final_object"));
        console.log(JSON.stringify(match_obj, null, '\t'));
        if (match_obj != null) {
            final_obj[count] = match_obj;
            count++;
        }
        localStorage.removeItem('match_final_object');

        //mcq
        var mcq_obj = JSON.parse(localStorage.getItem("mcq_final_object"));
        console.log(JSON.stringify(mcq_obj, null, '\t'));
        if (mcq_obj != null) {
            final_obj[count] = mcq_obj;
            count++;
        }
        localStorage.removeItem('mcq_final_object');


        //note making
        var note_obj = JSON.parse(localStorage.getItem("note_final_object"));
        console.log(JSON.stringify(note_obj, null, '\t'));
        if (note_obj != null) {
            final_obj[count] = note_obj;
            count++;
        }
        localStorage.removeItem('note_final_object');


        //paragraph questions
        var para_obj = JSON.parse(localStorage.getItem("para_final_object"));
        console.log(JSON.stringify(para_obj, null, '\t'));
        if (para_obj != null) {
            final_obj[count] = para_obj;
            count++;
        }
        localStorage.removeItem('para_final_object');

        //picture comprehension
        var picture_obj = JSON.parse(localStorage.getItem("picture_final_object"));
        console.log(JSON.stringify(picture_obj, null, '\t'));
        if (picture_obj != null) {
            final_obj[count] = picture_obj;
            count++;
        }
        localStorage.removeItem('picture_final_object');


        //poem fill in the blanks
        var poem_fill_obj = JSON.parse(localStorage.getItem("poem_fill_final_object"));
        console.log(JSON.stringify(poem_fill_obj, null, '\t'));
        if (poem_fill_obj != null) {
            final_obj[count] = poem_fill_obj;
            count++;
        }
        localStorage.removeItem('poem_fill_final_object');


        //prefix and suffix
        var prefix_suffix_obj = JSON.parse(localStorage.getItem("prefix_final_object"));
        console.log(JSON.stringify(prefix_suffix_obj, null, '\t'));
        if (prefix_suffix_obj != null) {
            final_obj[count] = prefix_suffix_obj;
            count++;
        }
        localStorage.removeItem('prefix_final_object');

        //preposition and its meaning
        var prep_mean_obj = JSON.parse(localStorage.getItem("prep_mean_final_object"));
        console.log(JSON.stringify(prep_mean_obj, null, '\t'));
        if (prep_mean_obj != null) {
            final_obj[count] = prep_mean_obj;
            count++;
        }
        localStorage.removeItem('prep_mean_final_object');

        //read and develop story
        var read_develop_obj = JSON.parse(localStorage.getItem("read_develop_final_object"));
        console.log(JSON.stringify(read_develop_obj, null, '\t'));
        if (read_develop_obj != null) {
            final_obj[count] = read_develop_obj;
            count++;
        }
        localStorage.removeItem('read_develop_final_object');

        //report writing
        var report_obj = JSON.parse(localStorage.getItem("report_final_object"));
        console.log(JSON.stringify(report_obj, null, '\t'));
        if (report_obj != null) {
            final_obj[count] = report_obj;
            count++;
        }
        localStorage.removeItem('report_final_object');

        //rewrite into standard english
        var standard_eng_obj = JSON.parse(localStorage.getItem("standard_eng_final_object"));
        console.log(JSON.stringify(standard_eng_obj, null, '\t'));
        if (standard_eng_obj != null) {
            final_obj[count] = standard_eng_obj;
            count++;
        }
        localStorage.removeItem('standard_eng_final_object');

        //roadmap 
        var road_map_obj = JSON.parse(localStorage.getItem("road_map_final_object"));
        console.log(JSON.stringify(road_map_obj, null, '\t'));
        if (road_map_obj != null) {
            final_obj[count] = road_map_obj;
            count++;
        }
        localStorage.removeItem('road_map_final_object');


        //sentence making
        var sentence_obj = JSON.parse(localStorage.getItem("sentence_final_object"));
        console.log(JSON.stringify(sentence_obj, null, '\t'));
        if (sentence_obj != null) {
            final_obj[count] = sentence_obj;
            count++;
        }
        localStorage.removeItem('sentence_final_object');

        //short questions
        var short_obj = JSON.parse(localStorage.getItem("short_final_object"));
        console.log(JSON.stringify(short_obj, null, '\t'));
        if (short_obj != null) {
            final_obj[count] = short_obj;
            count++;
        }
        localStorage.removeItem('short_final_object');

        //singular and plural
        var sing_obj = JSON.parse(localStorage.getItem("sing_final_object"));
        console.log(JSON.stringify(sing_obj, null, '\t'));
        if (sing_obj != null) {
            final_obj[count] = sing_obj;
            count++;
        }
        localStorage.removeItem('sing_final_object');

        //synonyms
        var synonyms_obj = JSON.parse(localStorage.getItem("synonyms_final_object"));
        console.log(JSON.stringify(synonyms_obj, null, '\t'));
        if (synonyms_obj != null) {
            final_obj[count] = synonyms_obj;
            count++;
        }
        localStorage.removeItem('synonyms_final_object');

        //translation
        var translation_obj = JSON.parse(localStorage.getItem("translation_final_object"));
        console.log(JSON.stringify(translation_obj, null, '\t'));
        if (translation_obj != null) {
            final_obj[count] = translation_obj;
            count++;
        }
        localStorage.removeItem('translation_final_object');

        final_item = {"question":final_obj,...quest}

        create_prose_final_answer(JSON.stringify(final_item, null, '\t'));
    }


    //poem part

    else if (ch_type == "poem") {
        //poem questions
        var poem_question_obj = JSON.parse(localStorage.getItem("poem_question_final_object"));
        console.log(JSON.stringify(poem_question_obj, null, '\t'));
        if (poem_question_obj != null) {
            final_obj[count] = poem_question_obj;
            count++;
        }
        localStorage.removeItem("poem_question_final_object");

        //poem paragraph questions
        var poem_para_obj = JSON.parse(localStorage.getItem("poem_para_final_object"));
        console.log(JSON.stringify(poem_para_obj, null, '\t'));
        if (poem_para_obj != null) {
            final_obj[count] = poem_para_obj;
            count++;
        }
        localStorage.removeItem("poem_para_final_object");

        //poem - fill in with appropriate phrases
        var poem_fill_ques_obj = JSON.parse(localStorage.getItem("poem_phrase_final_object"));
        console.log(JSON.stringify(poem_fill_ques_obj, null, '\t'));
        if (poem_fill_ques_obj != null) {
            final_obj[count] = poem_fill_ques_obj;
            count++;
        }
        localStorage.removeItem("poem_phrase_final_object");


        //figure of speech
        var figure_obj = JSON.parse(localStorage.getItem("figure_final_object"));
        console.log(JSON.stringify(figure_obj, null, '\t'));
        if (figure_obj != null) {
            final_obj[count] = figure_obj;
            count++;
        }
        localStorage.removeItem("figure_final_object");
        console.log(JSON.stringify(final_obj, null, '\t'))
        final_item = {"question":final_obj,...quest}

        create_poem_final_answer(JSON.stringify(final_item, null, '\t'));
    }



    //supplementary part

    else if (ch_type == "supplementary") {
        //supple - paragraph fill in the blanks
        var supple_para_fill_obj = JSON.parse(localStorage.getItem("supple_para_fill_final_object"));
        console.log(JSON.stringify(supple_para_fill_obj, null, '\t'));
        if (supple_para_fill_obj != null) {
            final_obj[count] = supple_para_fill_obj;
            count++;
        }
        localStorage.removeItem("supple_para_fill_final_object");

        //character or speaker
        var character_obj = JSON.parse(localStorage.getItem("character_final_object"));
        console.log(JSON.stringify(character_obj, null, '\t'));
        if (character_obj != null) {
            final_obj[count] = character_obj;
            count++;
        }
        localStorage.removeItem("character_final_object");

        //choose the correct answer
        var choose_obj = JSON.parse(localStorage.getItem("choose_final_object"));
        console.log(JSON.stringify(choose_obj, null, '\t'));
        if (choose_obj != null) {
            final_obj[count] = choose_obj;
            count++;
        }
        localStorage.removeItem("choose_final_object");

        //supplementary - comprehension questions
        var supple_compre_obj = JSON.parse(localStorage.getItem("supple_compre_final_object"));
        console.log(JSON.stringify(supple_compre_obj, null, '\t'));
        if (supple_compre_obj != null) {
            final_obj[count] = supple_compre_obj;
            count++;
        }
        localStorage.removeItem("supple_compre_final_object");

        //supplementary - matching
        var supple_match_obj = JSON.parse(localStorage.getItem("supple_match_final_object"));
        console.log(JSON.stringify(supple_match_obj, null, '\t'));
        if (supple_match_obj != null) {
            final_obj[count] = supple_match_obj;
            count++;
        }
        localStorage.removeItem("supple_match_final_object");

        //supplementary - mindmap
        var supple_mindmap_obj = JSON.parse(localStorage.getItem("supple_mindmap_final_object"));
        console.log(JSON.stringify(supple_mindmap_obj, null, '\t'));
        if (supple_mindmap_obj != null) {
            final_obj[count] = supple_mindmap_obj;
            count++;
        }
        localStorage.removeItem("supple_mindmap_final_object");

        //supplementary - paragraph questions
        var supple_para_obj = JSON.parse(localStorage.getItem("supple_para_final_object"));
        console.log(JSON.stringify(supple_para_obj, null, '\t'));
        if (supple_para_obj != null) {
            final_obj[count] = supple_para_obj;
            count++;
        }
        localStorage.removeItem("supple_para_final_object");

        //supplementary - rearrange the sentences in a coherent order.
        var supple_rearrange_obj = JSON.parse(localStorage.getItem("supple_rearrange_final_object"));
        console.log(JSON.stringify(supple_rearrange_obj, null, '\t'));
        if (supple_rearrange_obj != null) {
            final_obj[count] = supple_rearrange_obj;
            count++;
        }
        localStorage.removeItem("supple_rearrange_final_object");

        //supplementary - short questions
        var supple_short_obj = JSON.parse(localStorage.getItem("supple_short_final_object"));
        console.log(JSON.stringify(supple_short_obj, null, '\t'));
        if (supple_short_obj != null) {
            final_obj[count] = supple_short_obj;
            count++;
        }
        localStorage.removeItem("supple_short_final_object");

        //supplementary - situation and reactions
        var supple_situation_obj = JSON.parse(localStorage.getItem("supple_situation_final_object"));
        console.log(JSON.stringify(supple_situation_obj, null, '\t'));
        if (supple_situation_obj != null) {
            final_obj[count] = supple_situation_obj;
            count++;
        }
        localStorage.removeItem("supple_situation_final_object");
        final_item = {"question":final_obj,...quest}
        create_supplementary_final_answer(JSON.stringify(final_item, null, '\t'));
    }



    //grammar part

    else if (ch_type == "grammar") {
        //grammar - active voice and passive voice
        var grammar_active_obj = JSON.parse(localStorage.getItem("grammar_active_final_object"));
        console.log(JSON.stringify(grammar_active_obj, null, '\t'));
        if (grammar_active_obj != null) {
            final_obj[count] = grammar_active_obj;
            count++;
        }
        localStorage.removeItem("grammar_active_final_object");


        //Error spotting
        var error_obj = JSON.parse(localStorage.getItem("error_final_object"));
        console.log(JSON.stringify(error_obj, null, '\t'));
        if (error_obj != null) {
            final_obj[count] = error_obj;
            count++;
        }
        localStorage.removeItem('error_final_object');

        //grammar - combine sentences
        var grammar_combine_obj = JSON.parse(localStorage.getItem("grammar_combine_final_object"));
        console.log(JSON.stringify(grammar_combine_obj, null, '\t'));
        if (grammar_combine_obj != null) {
            final_obj[count] = grammar_combine_obj;
            count++;
        }
        localStorage.removeItem("grammar_combine_final_object");

        //grammar - direct speech and indirect speech
        var grammar_direct_obj = JSON.parse(localStorage.getItem("grammar_direct_final_object"));
        console.log(JSON.stringify(grammar_direct_obj, null, '\t'));
        if (grammar_direct_obj != null) {
            final_obj[count] = grammar_direct_obj;
            count++;
        }
        localStorage.removeItem("grammar_direct_final_object");

        //grammar - degrees of comparison
        var grammar_degrees_obj = JSON.parse(localStorage.getItem("grammar_degrees_final_object"));
        console.log(JSON.stringify(grammar_degrees_obj, null, '\t'));
        if (grammar_degrees_obj != null) {
            final_obj[count] = grammar_degrees_obj;
            count++;
        }
        localStorage.removeItem("grammar_degrees_final_object");

        //grammar - if clause
        var grammar_ifclause_obj = JSON.parse(localStorage.getItem("grammar_ifclause_final_object"));
        console.log(JSON.stringify(grammar_ifclause_obj, null, '\t'));
        if (grammar_ifclause_obj != null) {
            final_obj[count] = grammar_ifclause_obj;
            count++;
        }
        localStorage.removeItem("grammar_ifclause_final_object");

        //grammar - punctuation questions
        var grammar_punctuation_obj = JSON.parse(localStorage.getItem("grammar_punctuation_final_object"));
        console.log(JSON.stringify(grammar_punctuation_obj, null, '\t'));
        if (grammar_punctuation_obj != null) {
            final_obj[count] = grammar_punctuation_obj;
            count++;
        }
        localStorage.removeItem("grammar_punctuation_final_object");

        //Correct tense of the verb
        var correct_tense_obj = JSON.parse(localStorage.getItem("correct_tense_final_object"));
        console.log(JSON.stringify(correct_tense_obj, null, '\t'));
        if (correct_tense_obj != null) {
            final_obj[count] = correct_tense_obj;
            count++;
        }
        localStorage.removeItem('correct_tense_final_object');

        //identify tense forms
        var tense_form_obj = JSON.parse(localStorage.getItem("tense_form_final_object"));
        console.log(JSON.stringify(tense_form_obj, null, '\t'));
        if (tense_form_obj != null) {
            final_obj[count] = tense_form_obj;
            count++;
        }
        localStorage.removeItem('tense_form_final_object');

        //part of speech
        var part_obj = JSON.parse(localStorage.getItem("part_final_object"));
        console.log(JSON.stringify(part_obj, null, '\t'));
        if (part_obj != null) {
            final_obj[count] = part_obj;
            count++;
        }
        localStorage.removeItem('part_final_object');

        //rewrite passage into passive voice
        var rewrite_passive_obj = JSON.parse(localStorage.getItem("rewrite_passive_final_object"));
        console.log(JSON.stringify(rewrite_passive_obj, null, '\t'));
        if (rewrite_passive_obj != null) {
            final_obj[count] = rewrite_passive_obj;
            count++;
        }
        localStorage.removeItem('rewrite_passive_final_object');
        final_item = {"question":final_obj,...quest}

        create_grammar_final_answer(JSON.stringify(final_item, null, '\t'));




    }


    if (count1 == 1) {
        alert("Your notes are successfully saved!")
        console.log(JSON.stringify(final_item, null, '\t'))
        updateFileDetails(schoolname, user_id, ch_heading, ch_no, ch_type, sec, std)

    }

    if (count1 > 1) {
        alert("Your notes are already saved!")
    }



    // window.location.replace("F:/Teacher Notes - 10th std English/teachernotes-stencil/submit.html")
}

function updateFileDetails(school, regId, ch_head, chapter_no, unit_type, sec, std) {

    var createdAt = new Date();
    console.log("created at: " + createdAt)
    var fd = new FormData();

    fd.append('regId', regId);
    fd.append('schoolname', school);
    fd.append('class', std);
    fd.append('section', sec);
    fd.append("chapter_no", chapter_no);
    fd.append("name", ch_head);
    fd.append("unit_type", unit_type);
    fd.append("createdAt",createdAt);

    fetch('/update/fileDetails', {
        method: 'POST',
        body: fd
    }).then(function (response) {
        return response.json();

    }).then(function (data) {
        console.log(data);
    });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }