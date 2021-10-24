// var ip = "180.179.48.5:80";
// var ip = "127.0.0.1:5487";
function createEnglishIIQuestionPaper(opts) {
  fetch('http://'+ip+'/insertEnglishIIQuestionPaper', {
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

function createEnglishIIPlaybook(opts) {
  fetch('http://'+ip+'/insertEnglishIIPlaybook', {
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

function create_normal_letter_writing(opts) {
  fetch('http://'+ip+'/insert_normal_letter_writing', {
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
  fetch('http://'+ip+'/insertParaWithFill', {
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
    fetch('http://'+ip+'/insertCharacterSpeaker', {
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
    fetch('http://'+ip+'/insertMatching', {
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
    fetch('http://'+ip+'/insertChooseCorrectAnswer', {
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
    fetch('http://'+ip+'/insertMindmap', {
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
    fetch('http://'+ip+'/insertSupplementaryParagraph', {
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
    fetch('http://'+ip+'/insertNoteMaking', {
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
  fetch('http://'+ip+'/insertDialogWritingFill', {
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
    fetch('http://'+ip+'/insertDialogWriting', {
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
    fetch('http://'+ip+'/insertFormalLetter', {
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
    fetch('http://'+ip+'/insertInformalLetter', {
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
    fetch('http://'+ip+'/insertAdvertisementQuestions', {
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
    fetch('http://'+ip+'/insertComprehensionQuestions1', {
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
    fetch('http://'+ip+'/insertExpandHeadlines', {
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
    fetch('http://'+ip+'/insertPiechart', {
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
    fetch('http://'+ip+'/insertParagraphUsingOutlines', {
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
    fetch('http://'+ip+'/insertMatching_products_slogans', {
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
    fetch('http://'+ip+'/insertRoadMap', {
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
  //   fetch('http://'+ip+'/insertMatching_products_slogans', {
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
    fetch('http://'+ip+'/insertTranslation', {
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
    fetch('http://'+ip+'/insertPictureComprehension', {
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
    fetch('http://'+ip+'/insertPictureTranslation', {
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
    fetch('http://'+ip+'/insertPoemFill', {
      method: 'POST',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body:'name='+opts
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
    });
  }
  
  