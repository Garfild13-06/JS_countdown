let timerStartValueSeconds = 3665;
timer = document.getElementById('timer');
timer.textContent = setTimerString(timerStartValueSeconds);

function setTimerString(secondsSet) {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    if (Math.trunc(secondsSet / 3600) < 10) {
        hours = '0' + Math.trunc(secondsSet / 3600);
    } else {
        hours = Math.trunc(secondsSet / 3600);
    }
    if (Math.trunc((secondsSet - (hours * 3600)) / 60) < 10) {
        minutes = '0' + Math.trunc((secondsSet - (hours * 3600)) / 60);
    } else {
        minutes = Math.trunc((secondsSet - (hours * 3600)) / 60);
    }

    if (Math.trunc(secondsSet - (hours * 3600) - (minutes * 60)) < 10) {
        seconds = '0' + Math.trunc(secondsSet - (hours * 3600) - (minutes * 60));
    } else {
        seconds = Math.trunc(secondsSet - (hours * 3600) - (minutes * 60));
    }
    return hours + ':' + minutes + ':' + seconds;
}

function getTimerstring() {
    let timerString = timer.textContent.split(':');
    let hours = Number(timerString[0]);
    let minutes = Number(timerString[1]);
    let seconds = Number(timerString[2]);
    return (hours * 3600) + (minutes * 60) + seconds;
}

setInterval(() => {
    let curentTimer = getTimerstring();
    if (curentTimer <= 0) {
        timer.textContent = setTimerString(timerStartValueSeconds);
        window.alert('Вы победили в конкурсе!');
    } else {
        document.getElementById('timer').textContent = setTimerString(curentTimer - 1);
    }
}, 1000)
