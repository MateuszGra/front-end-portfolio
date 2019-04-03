(function() {
    const about = document.querySelector(".about");
    const projects = document.querySelector(".projects");
    const contact = document.querySelector(".contact");


    const aboutSection = document.querySelector(".aboutSection");
    const projectsSection = document.querySelector(".projectsSection");
    const contactSection = document.querySelector(".contactSection");

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
})();