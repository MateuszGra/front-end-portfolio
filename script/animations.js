(() => {
    const zombieAnimation = document.querySelector('.zombieAnimation');
    const knightAnimation = document.querySelector('.knightAnimation');

    let number = -1;
    setInterval(() => {
        number++;

        if (number >= 4) {
            number = 0;
        }

        zombieAnimation.src = 'img/dangeon_game/zombie_' + number + '.png';
        knightAnimation.src = 'img/dangeon_game/knight_' + number + '.png';

    }, 140);
})();