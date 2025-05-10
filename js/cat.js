// Функция для отображения 'Z' над котиком
const createZ = (parent, delay, offsetX, offsetY) => {
    const zElement = document.createElement('div');
    zElement.textContent = 'Z';
    zElement.style.position = 'absolute';
    zElement.style.fontSize = '24px';
    zElement.style.color = '#ffffff';
    zElement.style.opacity = '0.8';
    zElement.style.pointerEvents = 'none';
    zElement.style.transition = `all ${2 + delay}s ease`;
    zElement.style.left = parent.offsetLeft + parent.offsetWidth + offsetX + 'px';
    zElement.style.top = parent.offsetTop - 20 + offsetY + 'px';

    document.body.appendChild(zElement);

    setTimeout(() => {
        zElement.style.opacity = '0';
        zElement.style.left = parseInt(zElement.style.left) + 30 + 'px';
        zElement.style.top = parseInt(zElement.style.top) - 50 + 'px';
    }, 300);

    setTimeout(() => {
        zElement.remove();
    }, (2 + delay) * 1000);
};

// Запуск функции для котика
const catElement = document.querySelector('.cat');
if (catElement) {
    setInterval(() => {
        createZ(catElement, 4, Math.floor(Math.random() * (10 - -10 + 1)) + -10, Math.floor(Math.random() * (10 - -10 + 1)) + -10)
    }, 2000);
}
