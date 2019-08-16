//greeting.js
/*
Morning (5AM - 12PM) "Good Morning,  " 
Afternoon (12PM - 5PM) "Good Afternoon, let's grab a coffee"
Evening (5PM - 10PM) "Good Evening, netflix time?"
Night (10PM - 5AM) "Good Night, have a sweet dream! "
*/
const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
let greetingText = "Hello";

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue); 
    saveName(currentValue);
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function selectGreeting(hourRange){
    switch(hourRange){
        case 0: //morning
            greetingText = "It's time to work!";
            break;
        case 1: //afternoon
            greetingText = "let's grab a coffee!";
            break;
        case 2: //evening
            greetingText = "Netflix time?";
            break;
        case 3:
            greetingText = "have a sweet dream! ";
            break;
        default:
            break;
    }
}

function paintGreeting(text){
    selectGreeting(hourRange);
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `${text}, ${greetingText}`;
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();