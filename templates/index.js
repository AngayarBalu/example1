// var ip = "180.179.48.5:80";
var ip = "127.0.0.1:5487";
function createEnglishIQuestionPaper(opts) {
  fetch('/insertEnglishIQuestionPaper', {
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

function createPlaybook(opts) {
  fetch('/insertPlaybook', {
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

function createSynonyms(opts) {
  fetch('/insertSynonyms', {
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

function createSynonymsWithoutOptions(opts) {
  fetch('/insertSynonymsWithoutOptions', {
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


function createAntonyms(opts) {
    fetch('/insertAntonyms', {
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

  function createAntonymsWithoutOptions(opts) {
    fetch('/insertAntonymsWithoutOptions', {
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
  

  function createAnsVocabulary(opts) {
    fetch('/insertAnsVocabulary', {
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

  function createAnsGrammar1(opts) {
    fetch('/insertAnsGrammar1', {
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
  function createAnsGrammar2(opts) {
    fetch('/insertAnsGrammar2', {
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


  function createPunctuation(opts) {
    fetch('/insertPunctuation', {
      method: 'POST',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body:'name='+opts
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
    });
  }


  function createShortQuestions(opts) {
    fetch('/insertShortQuestions', {
      method: 'POST',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body:'name='+opts
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
    });
  }
  
  function createProseParaQuestions(opts){
  fetch('/insertProseParaQuestions', {
    method: 'POST',
     headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:'name='+opts
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

function createMemoryPoem(opts){
    fetch('/insertMemoryPoem', {
      method: 'POST',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body:'name='+opts
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
    });
  }

  function createPoeticLines(opts){
    fetch('/insertPoeticLines', {
      method: 'POST',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body:'name='+opts
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
    });
  }


  function createFigureOfSpeech(opts){
    fetch('/insertFigureOfSpeech', {
      method: 'POST',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body:'name='+opts
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
    });
  }

  function createPoemParaQuestions(opts){
    fetch('/insertPoemParaQuestions', {
      method: 'POST',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body:'name='+opts
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
    });
  }

  function createComprehensionQuestions(opts){
    fetch('/insertComprehensionQuestions', {
      method: 'POST',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body:'name='+opts
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
    });
  }


  function createErrorSpotting(opts){
    fetch('/insertErrorSpotting', {
      method: 'POST',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body:'name='+opts
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
    });
  }

  function createImageComprehensionQuestions(opts){
    fetch('/insertImageComprehensionQuestions', {
      method: 'POST',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body:'name='+opts
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
    });
  } 
  
  
  function create_normal_letter_writing(opts) {
    fetch('/insert_normal_letter_writing', {
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
  
  function createParaWithFill(opts) {
    fetch('/insertParaWithFill', {
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
  
  
  function createCharacterSpeaker(opts) {
      fetch('/insertCharacterSpeaker', {
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
    
  
    function createMatching(opts) {
      fetch('/insertMatching', {
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
  
    function createChooseCorrectAnswer(opts) {
      fetch('/insertChooseCorrectAnswer', {
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
    
    function createMindmap(opts) {
      fetch('/insertMindmap', {
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
  
  
    function createSupplementaryParagraph(opts) {
      fetch('/insertSupplementaryParagraph', {
        method: 'POST',
         headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body:'name='+opts
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
      });
    }
  
  
    function createNoteMaking(opts) {
      fetch('/insertNoteMaking', {
        method: 'POST',
         headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body:'name='+opts
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
      });
    }
    
    function createDialogWritingFill(opts){
    fetch('/insertDialogWritingFill', {
      method: 'POST',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body:'name='+opts
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
    });
  }
  
  function createDialogWriting(opts){
      fetch('/insertDialogWriting', {
        method: 'POST',
         headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body:'name='+opts
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
      });
    }
  
    function createFormalLetter(opts){
      fetch('/insertFormalLetter', {
        method: 'POST',
         headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body:'name='+opts
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
      });
    }
  
  
    function createInformalLetter(opts){
      fetch('/insertInformalLetter', {
        method: 'POST',
         headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body:'name='+opts
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
      });
    }
  
    function createAdvertisementQuestions(opts){
      fetch('/insertAdvertisementQuestions', {
        method: 'POST',
         headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body:'name='+opts
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
      });
    }
  
    function createSecondComprehensionQuestions(opts){
      fetch('/insertComprehensionQuestions1', {
        method: 'POST',
         headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body:'name='+opts
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
      });
    }
  
  
    function createExpandHeadlines(opts){
      fetch('/insertExpandHeadlines', {
        method: 'POST',
         headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body:'name='+opts
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
      });
    }
  
    function createPiechart(opts){
      fetch('/insertPiechart', {
        method: 'POST',
         headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body:'name='+opts
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
      });
    } 
  
  
    function createParagraphUsingOutlines(opts){
      fetch('/insertParagraphUsingOutlines', {
        method: 'POST',
         headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body:'name='+opts
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
      });
    }
  
    function createMatching_products_slogans(opts){
      fetch('/insertMatching_products_slogans', {
        method: 'POST',
         headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body:'name='+opts
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
      });
    } 
  
  
    function createRoadMap(opts){
      fetch('/insertRoadMap', {
        method: 'POST',
         headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body:'name='+opts
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
      });
    }
  
    // function createPoemFill(opts){
    //   fetch('/insertMatching_products_slogans', {
    //     method: 'POST',
    //      headers: {'Content-Type':'application/x-www-form-urlencoded'},
    //     body:'name='+opts
    //   }).then(function(response) {
    //     return response.json();
    //   }).then(function(data) {
    //     console.log(data);
    //   });
    // } 
    
    function createTranslation(opts){
      fetch('/insertTranslation', {
        method: 'POST',
         headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body:'name='+opts
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
      });
    } 
  
  
    function createPictureComprehension(opts){
      fetch('/insertPictureComprehension', {
        method: 'POST',
         headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body:'name='+opts
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
      });
    }
  
    function createPictureTranslation(opts) {
      fetch('/insertPictureTranslation', {
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
  
    function createPoemFill(opts){
      fetch('/insertPoemFill', {
        method: 'POST',
         headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body:'name='+opts
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
      });
    }
    
    