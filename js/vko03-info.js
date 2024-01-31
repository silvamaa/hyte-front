window.addEventListener('load', (event) => {
    const language = window.navigator.language;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const currentDate = new Date().toLocaleDateString('fi-FI');
    const currentTime = new Date().toLocaleTimeString('fi-FI');

    window.document.getElementById('langPlaceholder').textContent = language;
    window.document.getElementById('screenSizePlaceholder').textContent = `${screenWidth} x ${screenHeight}`;
    window.document.getElementById('windowSizePlaceholder').textContent = `${windowWidth} x ${windowHeight}`;
    window.document.getElementById('dateTimePlaceholder').textContent = `${currentDate} ${currentTime}`;
});
