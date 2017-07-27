
document.addEventListener('DOMContentLoaded', function(){
    console.log('Document Ready');

})
let shapesArea = document.getElementById('shapesArea');
class Shapes {
    constructor(shape){
        this.object = document.createElement('div');
        this.object.className = shape;
    }
    draw(){
        shapesArea.appendChild(this.object)
    }
    describe(shape) {
        console.log('I am a ' + this.shape)
    }
}

class Rectangle extends Shapes {
    constructor(width, height){
        super('rectangle');
        this.height = height;
        this.width = width;
        this.object.style.height = height;
        this.object.style.width = width;
    }
    get area() {
        return this.height * this.width;
    }
}

// class Square extends Shapes {
//     constructor(sideLength){
//         super('Square');
//     }
// }

// class Circle extends Shapes {
//     constructor(radius){
//         super('Circle');
//     }
// }

// class Triangle extends Shapes {
//     constructor(height){
//         super('Triangle');
//     }
// }
function  newRec() {
        let height = document.getElementById('recHeight').value;
        let width = document.getElementById('recWidth').value;
        let rectangle = new Rectangle(width, height);
        rectangle.draw();
        console.log(rectangle);
        console.log('hello');
        rectangle.describe();
    }

document.getElementById('genRec').addEventListener('click', newRec)

