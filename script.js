class Shapes {
    constructor(shape){
        this.shape = shape;
    }
    describe() {
        console.log('I am a ' + this.shape)
    }
}

class Rectangle extends Shapes {
    constructor(width, height){
        super('Rectangle');
    }
}

class Square extends Shapes {
    constructor(sideLength){
        super('Square');
    }
}

class Circle extends Shapes {
    constructor(radius){
        super('Circle');
    }
}

class Triangle extends Shapes {
    constructor(height){
        super('Triangle');
    }
}