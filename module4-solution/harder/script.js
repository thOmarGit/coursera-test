

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


(function(Window){
    
    for (i=0; i<names.length; i++) {
        if (names[i].charAt(0).toLowerCase()=="j") {
            byeSpeaker.speak(names[i]);
          }
        else {
            helloSpeaker.speak(names[i]);
          }
    } 

})(window);

// © 2021 GitHub, Inc.charAt(index)