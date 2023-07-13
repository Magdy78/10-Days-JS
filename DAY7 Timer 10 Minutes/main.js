const countdown = document.getElementById('countdown');

const startMinutes =10;
let time = startMinutes * 60;
setInterval(updateCounter , 1000);
function updateCounter() {
    const min = Math.floor(time/60);
    let sec = time % 60;

    sec = sec <10 ? '0' +sec : sec;
    countdown.innerHTML = `${min}:${sec}`
    time--;

}