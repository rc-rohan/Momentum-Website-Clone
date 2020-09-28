const timeDisplay = document.querySelector('.time');
/*
    todo Add the 2 digits in the time for single digit add 0 before
*/
function getTime(){
    const getDate = new Date();
    const time = `${getDate.getHours()}:${getDate.getMinutes()}:${getDate.getSeconds()}`;
    console.log(time);
    timeDisplay.innerHTML = time;
}
setInterval(getTime,1000);

