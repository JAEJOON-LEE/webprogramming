// var clock = document.querySelector('.clock');

// function realtimeClock() {
//     clock.value = getTimeStamp();
//     setTimeout("realtimeClock()", 1000);
// }


// function getTimeStamp() { // 24시간제
//     var d = new Date();

//     var s =
//         leadingZeros(d.getFullYear(), 4) + '. ' +
//         leadingZeros(d.getMonth() + 1, 2) + '. ' +
//         leadingZeros(d.getDate(), 2) + ' \n' +

//         leadingZeros(d.getHours(), 2) + '시 ' +
//         leadingZeros(d.getMinutes(), 2) +'분';

//     return s;
// }


// function leadingZeros(n, digits) {
//     var zero = '';
//     n = n.toString();

//     if (n.length < digits) {
//         for (i = 0; i < digits - n.length; i++)
//             zero += '0';
//     }
//     return zero + n;
// }

const date = document.querySelector('.date');
const clock = document.querySelector('.clock');


function getTime(){
    const time = new Date();

    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    var printhour;


    clock.innerHTML = `${hour<10 ? `0${hour}` :hour}:${minutes<10 ? `0${minutes}` :minutes}:${seconds<10 ? `0${seconds}` :seconds}`
}
function getDate(){
    const time2 = new Date();

    const year = time2.getFullYear();
    const month = time2.getMonth()+1;
    const day = time2.getDate();

    date.innerHTML = year + "년 "+ month +"월 " + day +"일";
}


function init(){
    setInterval(getDate, 1000);
    setInterval(getTime, 1000);
}

init();
