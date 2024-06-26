import {Position} from "./Position.js";

export  class Plate {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.posApple = null;
    }

    getPosApple(){
        return this.posApple;
    }

    getCaseByPos(x,y){
        return x === 0 && y === 0 ? 0 : x + (y * 30);
    }

    generateApple(){
        let x,y;
        do {
            x = Math.floor(Math.random() * this.row);
            y = Math.floor(Math.random() * this.col);
            // console.log(this.getCaseByPos(x,y))
        }while (document.getElementById('case' + this.getCaseByPos(x,y)).classList.contains("emptyCase") !== true)

        this.posApple = new Position(x,y);

        this.renderApple();
    }

    renderApple(){
        let pos = this.getCaseByPos(this.posApple.getX(), this.posApple.getY());
        let caseApple = document.getElementById("case" + pos);
        caseApple.classList.remove("emptyCase");
        caseApple.classList.add("apple");
    }

    renderSnake(snake){
        let initSnakePos = snake.getPos();
        for (let i = 0; i < initSnakePos.length; i++) {
            let pos = this.getCaseByPos(initSnakePos[i].getX(), initSnakePos[i].getY());
            this.addSnakeCase(pos)
        }
    }

    addSnakeCase(pos){
        let caseSnake = document.getElementById("case" + pos);
        caseSnake.classList.remove("emptyCase");
        caseSnake.classList.add("snake");
    }

    removeSnakeCase(pos){
        let caseSnake = document.getElementById("case" + pos);
        caseSnake.classList.remove("snake");
        caseSnake.classList.add("emptyCase");
    }

    removeAppleCase(pos){
        let caseSnake = document.getElementById("case" + pos);
        caseSnake.classList.remove("apple");
        caseSnake.classList.add("emptyCase");
    }

    moveSnake(snake, move){
        let tailPos = snake.getTail();
        let pos = this.getCaseByPos(tailPos.getX(), tailPos.getY());
        this.removeSnakeCase(pos);
        if(move !== "apple"){
            snake.removeTail();
        }

        let headPos = snake.getHead();
        pos = this.getCaseByPos(headPos.getX(), headPos.getY());
        if(move === "apple"){
            this.removeAppleCase(pos);
            this.generateApple();
        }
        this.addSnakeCase(pos);
    }

    clearCase(pos){
        let caseSnake = document.getElementById("case" + pos);
        caseSnake.classList.remove("snake");
        caseSnake.classList.remove("apple");
        caseSnake.classList.add("emptyCase");
    }
    
    reset(snake){
        let initSnakePos = snake.getPos();
        for (let i = 0; i < initSnakePos.length; i++) {
            let pos = this.getCaseByPos(initSnakePos[i].getX(), initSnakePos[i].getY());
            this.clearCase(pos)
        }
        this.removeAppleCase(this.getCaseByPos(this.posApple.getX(), this.posApple.getY()));
    }
}