const width = window.innerWidth;
const height = window.innerHeight;
const aspectRatio = (width / height).toFixed(2);

console.log(`Ширина: ${width}px, Высота: ${height}px`);
console.log(`Соотношение сторон: ${aspectRatio}`);

window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspectRatio = (width / height).toFixed(2);

    console.clear();
    console.log(`Ширина: ${width}px, Высота: ${height}px`);
    console.log(`Соотношение сторон: ${aspectRatio}`);
});

document.addEventListener("DOMContentLoaded", () => {
    const content = [
        {
            number: "01",
            title: "MeGAno - sHop",
            description: "Интернет - магазин Мегано.",
            videoSrc: "../portfolio-web/assets/effects.MOV",
            imgSrc: "../portfolio-web/assets/мак.png",
        },
        {
            number: "02",
            title: "Mobile - App",
            description: "Мобильное приложение на основе КАИ.",
            videoSrc: "../portfolio-web/assets/moove.mov",
            imgSrc: "../portfolio-web/assets/phone.png",
        },
        {
            number: "03",
            title: "tWitteR - clone",
            description: "Микросервис - с функционалом твиттера.",
            videoSrc: "../portfolio-web/assets/coding.MOV",
            imgSrc: "../portfolio-web/assets/мак.png",
        },
        {
            number: "04",
            title: "teleGRAM - boT",
            description: "Бот - для поиска актуальных отелей.",
            videoSrc: "../portfolio-web/assets/Itachi-Uchiha-Moonlight-Killer.mp4",
            imgSrc: "../portfolio-web/assets/phone.png",
        },
        {
            number: "05",
            title: "siMplE - WEb",
            description: "Первое знакомство с html/css.",
            videoSrc: "../portfolio-web/assets/Itachi-Uchiha-Moonlight-Killer.mp4",
            imgSrc: "../portfolio-web/assets/iMac1.png",
        },
    ];

    let currentIndex = 0;

    const section = document.querySelector('.about-section');
    const numberElement = section.querySelector('.number');
    const titleElement = section.querySelector('.about-text h2');
    const descriptionElement = section.querySelector('.about-text p');
    const videoElement = section.querySelector('.background-video');
    const imgElement = section.querySelector('.image');

    // Функция для обновления контента
    function updateContent(index) {
        const currentContent = content[index];
        numberElement.textContent = currentContent.number;
        titleElement.textContent = currentContent.title;
        descriptionElement.textContent = currentContent.description;
        videoElement.src = currentContent.videoSrc;
        imgElement.src = currentContent.imgSrc;

        section.classList.remove("special-style", "special-style-for3", "special-style-for5");

        if (currentContent.number === "02" || currentContent.number === "04") {
            section.classList.add("special-style");
        } else if (currentContent.number === "03") {
            section.classList.add("special-style-for3");
        } else if (currentContent.number === "05") {
            section.classList.add("special-style-for5");
        }

    }

    // Обработчик события для стрелки вправо
    document.querySelector('.right-arrow').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % content.length; // Переход к следующему контенту
        updateContent(currentIndex);
    });

    // Обработчик события для стрелки влево
    document.querySelector('.left-arrow').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + content.length) % content.length; // Переход к предыдущему контенту
        updateContent(currentIndex);
    });

    // Инициализируем первый контент
    updateContent(currentIndex);
});
