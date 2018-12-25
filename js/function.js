var wrap = document.querySelector('.wrap');
var clock = document.querySelector('#clock');
var colotText = document.querySelector('#colorText');

function editData () {
    var time = new Date();
    var hours = time.getHours().toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    if (hours.length < 2) {
        hours = `0${hours}`
    }
    if (minutes.length < 2) {
        minutes = `0${minutes}`
    }
    if (seconds.length < 2) {
        seconds = `0${seconds}`
    }
    var textContent = `${hours}:${minutes}:${seconds}`
    var colorContent = `#${hours}${minutes}${seconds}`
    clock.textContent = textContent
    colotText.textContent = colorContent
    wrap.style.backgroundColor = colorContent;
};
editData ();
setInterval(() => {
    editData ()
}, 1000);