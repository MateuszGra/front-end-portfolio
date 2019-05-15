(() => {
    const section = document.querySelectorAll('section');
    let draggedEl;
    let grabPointY;
    let grabPointX;

    function onDragStart(ev) {
        let boundingClientRect;
        if (ev.target.className.indexOf('windowTop') === -1) {
            return;
        }

        draggedEl = this;
        boundingClientRect = draggedEl.getBoundingClientRect();
        grabPointY = boundingClientRect.top - ev.clientY;
        grabPointX = boundingClientRect.left - ev.clientX;
    };

    onDrag = ev => {
        if (!draggedEl) {
            return;
        }

        let posX = ev.clientX + grabPointX;
        let posY = ev.clientY + grabPointY;

        if (posX < 0) {
            posX = 0;
        }
        if (posY < 0) {
            posY = 0;
        }

        draggedEl.style.transform = "translateX(" + posX + "px) translateY(" + posY + "px)";
    };

    onDragEnd = () => {
        draggedEl = null;
        grabPointX = null;
        grabPointY = null;
    };

    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', onDragEnd);
    for (let i = 0; i < section.length; i++) {
        section[i].addEventListener('mousedown', onDragStart);
    }
})();