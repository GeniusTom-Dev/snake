import { Plate } from './Plate.js';
import { Snake } from './Snake.js';
import { InputManager } from "./inputManager.js";

export class Game {
    constructor(row, col) {
        this.gameLoop = null;
        this.plate = new Plate(row, col);
        this.snake = new Snake(row, col);
        this.score = 0;
        new InputManager(this.snake);
    }

    init(){
        this.plate.renderSnake(this.snake);
    }

    start() {
        this.plate.generateApple();
        this.gameLoop = setInterval(() => {
            this.update();
        }, 200);
    }

    update(){
        let move = this.snake.checkMove(this.plate.getPosApple());
        if(move === "apple" || move === false){
            if(move === "apple") {
                this.score++;
                this.setScore();
            }
            this.plate.moveSnake(this.snake, move);
        }else{
            this.loose()
        }
    }

    setScore(){
        document.querySelector(".scoreText").innerHTML = this.score;
    }

    loose(){
        clearInterval(this.gameLoop);
        document.querySelector(".border").style.opacity = "0.2";
        document.querySelector(".gameOver").style.display = "flex";
    }

    restart(row, col){
        this.plate.reset(this.snake)
        this.score = 0;
        this.setScore();
        this.gameLoop = null;
        this.plate = new Plate(row, col);
        this.snake = new Snake(row, col);
        new InputManager(this.snake);
    }
}