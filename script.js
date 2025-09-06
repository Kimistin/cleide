document.getElementById('startButton').addEventListener('click', startTimer);

function startTimer() {
    const timeInput = document.getElementById('timeInput').value;
    let time = parseInt(timeInput);

    if (isNaN(time) || time <= 0) {
        alert('Please enter a valid number of seconds.');
        return;
    }

    const timerDisplay = document.getElementById('timerDisplay');
    const interval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        if (time <= 0) {
            clearInterval(interval);
            playRandomSound();
        }
        time--;
    }, 1000);
}

function playRandomSound() {
    const sounds = [
        document.getElementById('sound1'),
        document.getElementById('sound2'),
        document.getElementById('sound3'),
        document.getElementById('sound4'),
        document.getElementById('sound5'),
        document.getElementById('sound6'),
        document.getElementById('sound7'),
        document.getElementById('sound8'),
        document.getElementById('sound9')
    ];
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    randomSound.play();
}

