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
        projectsSection.classList.add('none');
        contactSection.classList.add('none');
    },false);

    projects.addEventListener("click", function(e) {  
        aboutSection.classList.add('none');
        projectsSection.classList.remove('none');
        contactSection.classList.add('none');
    },false);

    contact.addEventListener("click", function(e) {  
        aboutSection.classList.add('none');
        projectsSection.classList.add('none');
        contactSection.classList.remove('none');
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