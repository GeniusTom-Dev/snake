// import { Game } from './Classes/Game.js';

let container = document.querySelector('.container');

for (let i = 0; i < 600; i++) {
    let emptyCase = document.createElement('div');
    emptyCase.classList.add('emptyCase');
    emptyCase.id = "case" + i;
    container.appendChild(emptyCase);
}

let game = new Game(30,20);

document.getElementById('newGame').addEventListener('click', () => {
    document.querySelector(".startGame").style.display = "none";
    document.querySelector(".border").style.display = "block";
    game.init();
    game.start();
})

document.getElementById('restartGame').addEventListener('click', () => {
    game.restart(30,20);
    game.init();
    game.start();
    document.querySelector(".border").style.opacity = "1";
    document.querySelector(".gameOver").style.display = "none";
})