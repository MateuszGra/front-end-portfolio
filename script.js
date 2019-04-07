(function() {
    const about = document.querySelector(".about");
    const projects = document.querySelector(".projects");
    const contact = document.querySelector(".contact");


    const aboutSection = document.querySelector(".aboutSection");
    const projectsSection = document.querySelector(".projectsSection");
    const contactSection = document.querySelector(".contactSection");

    const closeAbout = document.getElementById('closeAbout');
    const closeProjects = document.getElementById('closeProjects');
    const closeContact = document.getElementById('closeContact');

    const body = document.querySelector('body');

    const inputUrl = document.querySelector(".inputUrl");
    inputUrl.value = 'https://mateuszgra.github.io/front-end-portfolio/';

    about.addEventListener("click", function(e) {  
        aboutSection.classList.remove('none');
        aboutSection.style.zIndex = 1;
        projectsSection.style.zIndex = 0;
        contactSection.style.zIndex = 0;
        if(screen.width < 1000){
            projectsSection.classList.add('none');
            contactSection.classList.add('none');
        }
    },false);
    aboutSection.addEventListener("click", function(e) {  
        aboutSection.style.zIndex = 1;
        projectsSection.style.zIndex = 0;
        contactSection.style.zIndex = 0;
    },false);
    projects.addEventListener("click", function(e) {  
        projectsSection.classList.remove('none');
        aboutSection.style.zIndex = 0;
        projectsSection.style.zIndex = 1;
        contactSection.style.zIndex = 0;
        if(screen.width < 1000){
            aboutSection.classList.add('none');
            contactSection.classList.add('none');
        }
    },false);
    projectsSection.addEventListener("click", function(e) {  
        aboutSection.style.zIndex = 0;
        projectsSection.style.zIndex = 1;
        contactSection.style.zIndex = 0;
    },false);
    contact.addEventListener("click", function(e) {  
        contactSection.classList.remove('none');
        aboutSection.style.zIndex = 0;
        projectsSection.style.zIndex = 0;
        contactSection.style.zIndex = 1;
        if(screen.width < 1000){
            projectsSection.classList.add('none');
            aboutSection.classList.add('none');
        }
    },false);
    contactSection.addEventListener("click", function(e) {  
        aboutSection.style.zIndex = 0;
        projectsSection.style.zIndex = 0;
        contactSection.style.zIndex = 1;
    },false);

    closeAbout.addEventListener("click", function(e) {  
        aboutSection.classList.add('none');
    },false);

    closeProjects.addEventListener("click", function(e) {  
        projectsSection.classList.add('none');
    },false);

    closeContact.addEventListener("click", function(e) {  
        contactSection.classList.add('none');
    },false);

    window.addEventListener("load", function(e) {  
        const loader = document.querySelector('.loader');
        body.removeChild(loader); 
    },false);

})();