const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const formatNumber = function (number) {
    return number > 9 ? `${number}` : `0${number}`;
}

const formatTimerValue = function (hours, minutes, seconds) {
    return [hours, minutes, seconds].map(formatNumber).join(':');
}

const updateTimerValueBySeconds = function (timerSeconds, timerEl) {
    const seconds = timerSeconds % 60;
    const minutes = Math.floor((timerSeconds - seconds) / 60) % 60;
    const hours = Math.floor(timerSeconds / 3600);

    timerEl.textContent = formatTimerValue(hours, minutes, seconds);
}

const createTimerAnimator = (timerEl) => {
    let timer = null;

    return (seconds) => {
        clearInterval(timer);
        updateTimerValueBySeconds(seconds, timerEl)

        timer = setInterval(() => {
            updateTimerValueBySeconds(--seconds, timerEl);

            if (!seconds) {
                clearInterval(timer);
                timerEl.textContent = 'finish';
            }
        }, 1000)
    };
};

const animateTimer = createTimerAnimator(timerEl);

inputEl.addEventListener('input', (event) => {
    // ну вообще можно просто type number указать
    const inputValue = inputEl.value;
    const numbers = inputValue.match(/\d/g);

    inputEl.value = numbers ? numbers.join('') : '';
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);

    animateTimer(seconds);

    inputEl.value = '';
});
