

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


(function(){

    var i = 0;
    for (name in names) {
        if (names[name].charAt(0).toLowerCase()==="j") {
            byeSpeaker.speak(names[name]);
          }
        else {
            helloSpeaker.speak(names[name]);
          }
    } 

    // OR THIS:

        // for (i=0; i<names.length ;i++) {
        // if (names[i].charAt(0).toLowerCase()=="j") {
        //     byeSpeaker.speak(names[i]);
        //   }
        // else {
        //     helloSpeaker.speak(names[i]);
        //   }
        // }  

})();

// © 2021 GitHub, Inc.charAt(index)