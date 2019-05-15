(() => {
    const icons = document.querySelectorAll('#icon');
    const section = document.querySelectorAll('section');
    const close = document.querySelectorAll('#close');
    const windowTopBar = document.querySelectorAll('.windowTop');

    const inputUrl = document.querySelector(".inputUrl");
    inputUrl.value = 'https://mateuszgra.github.io/front-end-portfolio/';

    let width = window.innerWidth;

    //click on icon or section
    iconClick = n => {
        for (let z = 0; z < icons.length; z++) {
            section[z].style.zIndex = 0;
            windowTopBar[z].classList.add('notActive');
            if (window.innerWidth < 1000) {
                section[z].classList.add('none');
            }
        }
        section[n].classList.remove('none');
        section[n].style.zIndex = 1;
        windowTopBar[n].classList.remove('notActive');
    }

    for (let i = 0; i < icons.length; i++) {
        icons[i].addEventListener("click", (e) => {
            iconClick(i);
        }, false);
        icons[i].addEventListener("touch", (e) => {
            iconClick(i);
        }, false);
        section[i].addEventListener("click", (e) => {
            iconClick(i);
        }, false);
        section[i].addEventListener("touch", (e) => {
            iconClick(i);
        }, false);
    }

    //close secions
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", (e) => {
            e.stopPropagation();
            section[i].classList.add('none');
        }, false);
        close[i].addEventListener("touch", (e) => {
            e.stopPropagation();
            section[i].classList.add('none');
        }, false);
    }

    //resize - change full screen to mobile version
    window.addEventListener("resize", (e) => {
        if (window.innerWidth < 1000 && width != window.innerWidth) {
            for (let i = 0; i < section.length; i++) {
                section[i].classList.add('none');
            }
        }
    }, false);
})();