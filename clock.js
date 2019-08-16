//clock.js
const clockContainer = document.querySelector(".js-clock"); //return first element that matches with the query selector
const clockTitle = clockContainer.querySelector("h1");
let hourRange = 0; 
// 0 morning, 1 afternoon, 2 evening, 3 night

function setHourRange(hours){
    if(hours < 5 || hours > 22){
        hourRange = 3; //night
    } else if(hours >=5 && hours < 12){
        hourRange = 0;
    } else if(hours >=12 && hours <17){
        hourRange = 1;
    } else {
        hourRange = 2;
    }
}

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${
        seconds < 10 ? `0${seconds}`: seconds
    }`;
    setHourRange(hours);
}
function init(){
    getTime();
    setInterval(getTime, 1000);
   
}

init();