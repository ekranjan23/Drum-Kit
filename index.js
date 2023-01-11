// for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {

//         // console.log(this.style.color = 'red')
//         var buttonInnerHTML = this.innerHTML;
//         switch (buttonInnerHTML) {

//             case "w":
//                 var audio1 = new Audio('sounds/crash.mp3');
//                 audio1.play();
//                 break;

//             case "a":
//                 var audio1 = new Audio('sounds/kick-bass.mp3');
//                 audio1.play();
//                 break;

//             case "s":
//                 var audio1 = new Audio('sounds/snare.mp3');
//                 audio1.play();
//                 break;

//             case "d":
//                 var audio1 = new Audio('sounds/tom-1.mp3');
//                 audio1.play();
//                 break;

//             case "j":
//                 var audio1 = new Audio('sounds/tom-2.mp3');
//                 audio1.play();
//                 break;

//             case "k":
//                 var audio1 = new Audio('sounds/tom-3.mp3');
//                 audio1.play();
//                 break;

//             case "l":
//                 var audio1 = new Audio('sounds/tom-4.mp3');
//                 audio1.play();
//                 break;

//             default: console.log();
//                 break;
//         }
//     }

//     );
// }



// // var audio1 = new Audio('sounds/tom-3.mp3');
// // audio1.play();

// ________________________________________________________

for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        // console.log(this.style.color = 'red')
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

    });
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
});

function makeSound(key) {

    switch (key) {

        case "w":
            var audio1 = new Audio('sounds/crash.mp3');
            audio1.play();
            break;

        case "a":
            var audio1 = new Audio('sounds/kick-bass.mp3');
            audio1.play();
            break;

        case "s":
            var audio1 = new Audio('sounds/snare.mp3');
            audio1.play();
            break;

        case "d":
            var audio1 = new Audio('sounds/tom-1.mp3');
            audio1.play();
            break;

        case "j":
            var audio1 = new Audio('sounds/tom-2.mp3');
            audio1.play();
            break;

        case "k":
            var audio1 = new Audio('sounds/tom-3.mp3');
            audio1.play();
            break;

        case "l":
            var audio1 = new Audio('sounds/tom-4.mp3');
            audio1.play();
            break;

        default: console.log();
            break;
    }
}



// var audio1 = new Audio('sounds/tom-3.mp3');
// audio1.play();



