import { Position } from "./Position.js";

export class Snake {
    constructor(rowSize, colSize) {
        this.direction = "right";
        this.lastDirection = null; // création du paramètre pour empecher l'auto colision
        this.head = new Position(17,15)
        this.pos = [this.head, new Position(16,15),new Position(15,15)];
        this.rowSize = rowSize;
        this.colSize = colSize;
    }

    getPos(){
        return this.pos;
    }

    getHead(){
        return this.head;
    }

    getTail(){
        return this.pos[this.pos.length - 1];
    }

    removeTail(){
        this.pos.pop();
    }

    getDirection(){
        return this.direction;
    }

    setDirection(direction){
        if(direction === "right" && this.lastDirection !== "left" || direction === "left" && this.lastDirection !== "right" || direction === "up" && this.lastDirection !== "down" || direction === "down" && this.lastDirection !== "up"){
            this.direction = direction;
        }
    }
    
    checkMove(posApple){
        let newPos;
        switch (this.direction) {
            case "right":
                newPos = new Position(this.head.getX() + 1, this.head.getY());
                break;
            case "left":
                newPos = new Position(this.head.getX() - 1, this.head.getY());
                break;
            case "up":
                newPos = new Position(this.head.getX(), this.head.getY() - 1);
                break;
            case "down":
                newPos = new Position(this.head.getX(), this.head.getY() + 1);
                break;

        }

        let collide = this.checkCollide(newPos, posApple);

        if (collide === "apple" || collide === false){
            this.pos.unshift(newPos);
            this.head = newPos;
            this.lastDirection = this.direction;
            return collide;
        }

        return true;


    }

    checkCollide(newPos, pos = null){
        if(newPos.getX()  === this.rowSize || newPos.getY() === this.colSize || newPos.getX() < 0 || newPos.getY() < 0) {
            return "wall";
        }else if(pos !== null && (pos.getX() === newPos.getX() && pos.getY() === newPos.getY())){
            return "apple";
        }else if(this.posIsInSnake(newPos)){
            return "snake";
        }
        return false;
    }


    posIsInSnake(newPos) {
        for (let i = 0; i < this.pos.length; i++) {
            if (this.pos[i].getX() === newPos.getX() && this.pos[i].getY() === newPos.getY()) {
                return true;
            }
        }
        return false;
    }
}