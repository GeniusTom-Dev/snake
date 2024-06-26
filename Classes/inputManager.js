export class InputManager {
    constructor(snake) {
        this.snake = snake;
        this.bindKeys();

    }

    bindKeys() {
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'z':
                    this.pushZ();
                    break;
                case 's':
                    this.pushS();
                    break;
                case 'q':
                    this.pushQ();
                    break;
                case 'd':
                    this.pushD();
                    break;
                default:
                    break;
            }
        });
    }

    pushD(){
        if(this.snake.getDirection() !== 'left'){
            this.snake.setDirection('right');
        }
    }

    pushQ(){
        if(this.snake.getDirection() !== 'right'){
            this.snake.setDirection('left');
        }
    }

    pushZ(){
        if(this.snake.getDirection() !== 'down'){
            this.snake.setDirection('up');
        }
    }

    pushS(){
        if(this.snake.getDirection() !== 'up'){
            this.snake.setDirection('down');
        }
    }
}