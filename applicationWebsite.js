
 var yourName = prompt("Please enter your Firstname");
var yourNameFirstChar = yourName.slice(0,1);
var yourNameFirstChar1 = yourNameFirstChar.toUpperCase();

 var yourNameRemChar = yourName.slice(1, yourName.length);
 var yourNameRemChar1 = yourNameRemChar.toLowerCase()

 var finalFirstName = yourNameFirstChar1 + yourNameRemChar1



var yourLastName = prompt("Please enter your Lastname");
var yourLastNameFirstChar = yourLastName.slice(0,1);
var yourLastNameFirstChar1 = yourLastNameFirstChar.toUpperCase();

 var yourLastNameRemChar = yourLastName.slice(1, yourName.length);
 var yourLastNameRemChar1 = yourLastNameRemChar.toLowerCase()

 var finalName2 = yourLastNameFirstChar1 + yourLastNameRemChar1

document.querySelector(".yourName").innerHTML = (finalFirstName + " " +finalName2);





var typed = new Typed(".auto-typing",{
    strings: ["FERANMI,","A WEB DEVELOPER,", "A FLUTTER AND DART PROGRAMMER,", "A SAXOPHONIST,", "A TEACHER,", "A JAVA PROGRAMMER,","AN ACTOR"],
    typeSpeed: 40,
    backSpeed: 50,
    loop: true
})