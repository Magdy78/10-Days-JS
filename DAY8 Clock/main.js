const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
const hr = document.querySelector('#hr');

const deg = 6;
setInterval(()=>{

    let day = new Date();
    let ms = day.getMilliseconds() * deg;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg + ms /1000;
    let hh = day.getHours() * 30;
    hr.style.transform = `rotateZ(${hh}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})