var ip = "127.0.0.1:5487";


//save final object
function create_prose_final_answer(opts) {
  fetch('/TeacherNotes/10th std/english/prose/final', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}


function create_poem_final_answer(opts) {
  fetch('/TeacherNotes/10th std/english/poem/final', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_supplementary_final_answer(opts) {
  fetch('/TeacherNotes/10th std/english/supplementary/final', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_grammar_final_answer(opts) {
  fetch('/TeacherNotes/10th std/english/grammar/final', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}


//prose part

function create_active_passive(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_active_passive', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_develop_stories(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_develop_stories', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_advertisements_questions(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_advertisements_questions', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_antonyms(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_antonyms', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}


function create_prose_comprehension_question(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_prose_comprehension_question', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}


function create_expand_headlines(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_expand_headlines', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_prose_fill_phrasal_verbs(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_prose_fill_phrasal_verbs', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_prose_fill_phrasal_verbs_with_passage(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_prose_fill_phrasal_verbs_with_passage', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_formal_letter_writing(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_formal_letter_writing', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_informal_letter_writing(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_informal_letter_writing', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_note_making(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_note_making', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_prose_paragraph_questions(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_prose_paragraph_questions', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_picture_comprehension(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_picture_comprehension', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_poem_fill(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_poem_fill', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_preposition_and_meaning(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_preposition_and_meaning', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_develop_story(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_develop_story', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_report_writing(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_report_writing', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_standard_english(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_standard_english', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_road_map_questions(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_road_map_questions', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_sentence_making(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_sentence_making', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_american_british(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_american_british', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_prefix_suffix(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_prefix_suffix', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_prose_short_questions(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_prose_short_questions', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_singular_plural(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_singular_plural', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}


function create_synonyms(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_synonyms', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_translation_questions(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_translation_questions', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_prose_matching(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_prose_matching', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_abbreviation_questions(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_abbreviation_questions', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}











//grammar part
function create_direct_indirect_speech_questions(opts) {
  fetch('/TeacherNotes/10th std/english/grammar/Insert_direct_indirect_speech_questions', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_errors_spotting(opts) {
  fetch('/TeacherNotes/10th std/english/grammar/Insert_errors_spotting', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_active_passive_voice_questions(opts) {
  fetch('/TeacherNotes/10th std/english/grammar/Insert_active_passive_voice_questions', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_ifclause_questions(opts) {
  fetch('/TeacherNotes/10th std/english/grammar/Insert_ifclause_questions', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_degrees_of_comparison_questions(opts) {
  fetch('/TeacherNotes/10th std/english/grammar/Insert_degrees_of_comparison_questions', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_combine_sentences(opts) {
  fetch('/TeacherNotes/10th std/english/grammar/Insert_combine_sentences', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_punctuation_questions(opts) {
  fetch('/TeacherNotes/10th std/english/grammar/Insert_punctuation_questions', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_rewrite_passive(opts) {
  fetch('/TeacherNotes/10th std/english/grammar/Insert_rewrite_passive', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_tense_forms(opts) {
  fetch('/TeacherNotes/10th std/english/grammar/Insert_tense_forms', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}


function create_correct_tense(opts) {
  fetch('/TeacherNotes/10th std/english/grammar/Insert_correct_tense', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}


function create_part_of_speech(opts) {
  fetch('/TeacherNotes/10th std/english/prose/Insert_part_of_speech', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}





// Supplementary part
function create_supplementary_situation_reaction(opts) {
  fetch('/TeacherNotes/10th std/english/supplementary/Insert_supplementary_situation_reaction', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_character_speaker(opts) {
  fetch('/TeacherNotes/10th std/english/supplementary/Insert_character_speaker', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_supplementary_rearrange_sentences(opts) {
  fetch('/TeacherNotes/10th std/english/supplementary/Insert_supplementary_rearrange_sentences', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_supplementary_matching(opts) {
  fetch('/TeacherNotes/10th std/english/supplementary/Insert_supplementary_matching', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_supplementary_paragraph(opts) {
  fetch('/TeacherNotes/10th std/english/supplementary/Insert_supplementary_paragraph', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}


function create_supplementary_shortquestions(opts) {
  fetch('/TeacherNotes/10th std/english/supplementary/Insert_supplementary_shortquestions', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}


function create_supplementary_mind_map(opts) {
  fetch('/TeacherNotes/10th std/english/supplementary/Insert_supplementary_mind_map', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_supplementary_comprehension(opts) {
  fetch('/TeacherNotes/10th std/english/supplementary/Insert_supplementary_comprehension', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_supplementary_choose_best_answer(opts) {
  fetch('/TeacherNotes/10th std/english/supplementary/Insert_supplementary_choose_best_answer', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_supplementary_para_fill(opts) {
  fetch('/TeacherNotes/10th std/english/supplementary/Insert_supplementary_para_fill', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}




//poem part


function create_poem_fill_phrasal_verbs_with_passage(opts) {
  fetch('/TeacherNotes/10th std/english/poem/Insert_poem_fill_phrasal_verbs_with_passage', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_poem_paragraph(opts) {
  fetch('/TeacherNotes/10th std/english/poem/Insert_poem_paragraph', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_poetic_lines_questions(opts) {
  fetch('/TeacherNotes/10th std/english/poem/Insert_poetic_lines_questions', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function create_figure_of_speech(opts) {
  fetch('/TeacherNotes/10th std/english/poem/Insert_figure_of_speech', {
    method: 'POST',
	 headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
	  
	//console.log(response);
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}












function integer_to_roman(num) {
  if (typeof num !== 'number')
      return false;

  var digits = String(+num).split(""),
      key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
          "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
          "", "i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
      roman_num = "",
      i = 3;
  while (i--)
      roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
  return Array(+digits.join("") + 1).join("M") + roman_num;
}


function toObject(arr) {
  var rv = {};
  for (i = 0; i < arr.length; i++) {
      rv[i + 1] = arr[i]
  }

  return rv
}

function count(array) {
  var c = 0;
  for (i in array) // in returns key, not object
      if (array[i] != "")
          c++;

  return c;
}

