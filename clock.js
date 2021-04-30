const date = document.querySelector('.date');
const clock = document.querySelector('.clock');

function getTime(){
    const time = new Date();

    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    var printhour;

    /*10이하면 앞에 0출력*/
    clock.innerHTML = `${hour<10 ? `0${hour}` :hour}:${minutes<10 ? `0${minutes}` :minutes}:${seconds<10 ? `0${seconds}` :seconds}`
}
function getDate(){
    const time2 = new Date();

    const year = time2.getFullYear();
    const month = time2.getMonth()+1;
    const day = time2.getDate();

    date.innerHTML = year + "년 "+ month +"월 " + day +"일";
}
/*1초마다 계속 업데이트*/
function init(){
    setInterval(getDate, 1000);
    setInterval(getTime, 1000);
}

init();
