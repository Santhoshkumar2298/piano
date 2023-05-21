var whiteKeys = document.querySelectorAll(".white").length;
var blackKeys = document.querySelectorAll(".black").length;

for (i = 0; i < whiteKeys; i++) {
    document.querySelectorAll(".white")[i].addEventListener("click", function () {

        var whiteBtn = this.getAttribute("data-key");
        makeSound(whiteBtn);
        keyShow(whiteBtn);
});
}

for (j=0; j < blackKeys; j++){
    document.querySelectorAll(".black")[j].addEventListener("click", function(){

        var blackBtn = this.getAttribute("data-key");
        makeSound(blackBtn);
        blackShow(blackBtn);
    })
}

document.addEventListener("keypress", function (event) {
    var keyPressed = event.key;
    makeSound(keyPressed);
  
    var whiteKeys = document.querySelectorAll(".white");
    var isWhiteKey = false;
  
    for (var i = 0; i < whiteKeys.length; i++) {
      if (keyPressed === whiteKeys[i].getAttribute("data-key")) {
        isWhiteKey = true;
        break;
      }
    }
  
    if (isWhiteKey) {
      keyShow(keyPressed);
    } else {
      blackShow(keyPressed);
    }
  });
  
    
function makeSound(key){
    switch (key) {
        case "a":
            var playC1 = new Audio("sounds/1C.mp3");
            playC1.play();
            break;
        case "s":
            var playD1 = new Audio("sounds/1D.mp3");
            playD1.play();
            break;
        case "d":
            var playE1 = new Audio("sounds/1E.mp3");
            playE1.play();
            break;
        case "f":
            var playF1 = new Audio("sounds/1F.mp3");
            playF1.play();
            break;
        case "g":
            var playG1 = new Audio("sounds/1G.mp3");
            playG1.play();
            break;
        case "h":
            var playA2 = new Audio("sounds/2A.mp3");
            playA2.play();
            break;
        case "j":
            var playB2 = new Audio("sounds/2B.mp3");
            playB2.play();
            break;
        case "k":
            var playC2 = new Audio("sounds/2C.mp3");
            playC2.play();
            break;
        case "l":
            var playD2 = new Audio("sounds/2D.mp3");
            playD2.play();
            break;
        case "z":
            var playE2 = new Audio("sounds/2E.mp3");
            playE2.play();
            break;
        case "x":
            var playF2 = new Audio("sounds/2F.mp3");
            playF2.play();
            break;
        case "c":
            var playG2 = new Audio("sounds/2G.mp3");
            playG2.play();
            break;
        case "v":
            var playA3 = new Audio("sounds/3A.mp3");
            playA3.play();
            break;
        case "b":
            var playB3 = new Audio("sounds/3B.mp3");
            playB3.play();
            break;
        case "n":
            var playC3 = new Audio("sounds/3C.mp3");
            playC3.play();
            break;
// for Black Keys 
        case "q":
            var playQ = new Audio("sounds/q.mp3");
            playQ.play();
            break;
        case "w":
            var playW = new Audio("sounds/w.mp3");
            playW.play();
            break;
        case "e":
            var playE = new Audio("sounds/e.mp3");
            playE.play();
            break;
        case "r":
            var playR = new Audio("sounds/r.mp3");
            playR.play();
            break;
        case "t":
            var playT = new Audio("sounds/t.mp3");
            playT.play();
            break;
        case "y":
            var playY = new Audio("sounds/y.mp3");
            playY.play();
            break;
        case "u":
            var playU = new Audio("sounds/u.mp3");
            playU.play();
            break;
        case "i":
            var playI = new Audio("sounds/i.mp3");
            playI.play();
            break;
        case "o":
            var playO = new Audio("sounds/o.mp3");
            playO.play();
            break;
        case "p":
            var playP = new Audio("sounds/r.mp3");
            playP.play();
            break; 
        default:
            console.log(pressedKey);
            break;
       }
    }

    function keyShow(key){
        var button = document.querySelector(".white[data-key='"+ key +"']");
        button.classList.add("pressed");
    
        setTimeout(function() {
            button.classList.remove("pressed");
        }, 100);
    }

    function blackShow(key){
        var button = document.querySelector(".black[data-key='"+ key +"']");
        button.classList.add("blackpressed");
    
        setTimeout(function() {
            button.classList.remove("blackpressed");
        }, 100);
    }