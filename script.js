const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime(){
    const now = new Date();

    const sec = now.getSeconds();
    const secDeg = ((sec/60)*360)+90;
    secondHand.style.transform = `rotate(${secDeg}deg)`;

    const min = now.getMinutes();
    const minDeg = ((min/60)*360)+((sec/60)*6)+90;
    minHand.style.transform = `rotate(${minDeg}deg)`;

    const hour = now.getHours();
    const hourDeg = ((hour/12)*360)+((min/60)*30)+90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setTime, 1000);
console.log(new Date());