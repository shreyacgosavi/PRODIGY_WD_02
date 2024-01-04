let stopwatch;
let lapCounter = 1;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
    stopwatch = setInterval(updateDisplay, 0); // Update every 10 milliseconds
    toggleButtons(true);
}

function stopStopwatch() {
    clearInterval(stopwatch);
    toggleButtons(false);
}

function resetStopwatch() {
    clearInterval(stopwatch);
    lapCounter = 1;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    resetDisplay();
    clearLapList();
    toggleButtons(false);
}

function recordLap() {
    const lapTime = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds) + '.' + formatMilliseconds(milliseconds);
    const lapList = document.getElementById("lapList");

    const lapItem = document.createElement("li");
    lapItem.className = "lap-list-item";
    lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
    lapList.appendChild(lapItem);

    lapCounter++;
}

function updateDisplay() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${formatMilliseconds(milliseconds)}`;
    document.getElementById("display").textContent = formattedTime;
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function formatMilliseconds(ms) {
    return ms < 10 ? "00" + ms : (ms < 100 ? "0" + ms : ms);
}

function clearLapList() {
    const lapList = document.getElementById("lapList");
    lapList.innerHTML = '';
}

function toggleButtons(running) {
    const startBtn = document.getElementById("startBtn");
    const lapBtn = document.getElementById("lapBtn");
    const stopBtn = document.getElementById("stopBtn");
    const resetBtn = document.getElementById("resetBtn");

    startBtn.disabled = running;
    lapBtn.disabled = !running;
    stopBtn.disabled = !running;
    resetBtn.disabled = running;
}
function resetDisplay() {
    
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${formatMilliseconds(milliseconds)}`;
    document.getElementById("display").textContent = formattedTime;
}