const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
let timerId = null;
buttonStart.disabled = false;

const setBg = () => {
    timerId = setInterval(() => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
    }, 1000);
    buttonStart.disabled = true;
}

buttonStart.addEventListener('click', setBg);
buttonStop.addEventListener('click', () => {
    clearInterval(timerId);
    buttonStart.disabled = false;
});