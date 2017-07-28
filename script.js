
document.addEventListener('DOMContentLoaded', function(){
    console.log('Document Ready');

})
let shapesArea = document.getElementById('shapesArea');
    Shape = document.getElementById('Shape');
    Width = document.getElementById('Width');
    Height = document.getElementById('Height');
    Radius = document.getElementById('Radius');
    Area = document.getElementById('Area');
    Perimeter = document.getElementById('Perimeter');

// Parent class
class Shapes {
    constructor(shape, width, height, area){
        this.object = document.createElement('div');
        this.object.className = shape;
        this.width = width;
        this.height = height;
        // this.area = area;
    }
    draw(){
        shapesArea.appendChild(this.object);
    }
    describe(shape, height, width, area, radius, perimeter) {
        console.log('I am a ' + this.object.className);
        Shape.innerHTML = this.object.className;
        Width.innerHTML = this.width;
        Height.innerHTML = this.height;
        Radius.innerHTML = this.radius;
        Area.innerHTML = this.area;
        Perimeter.innerHTML = this.perimeter;

    }
}
// Child classes
class Rectangle extends Shapes {
    constructor(height, width){
        super('rectangle');
        this.name = "Rectangle";
        this.width = width;
        this.height = height;
        this.object.style.height = height + "px";
        this.object.style.width = width + "px";
        this.object.style.top = Math.floor(Math.random() * 601) + "px";
        this.object.style.left = Math.floor(Math.random() * 601) + "px";
        this.draw();
    }
        get area(){
          return this.width * this.height; 
        }  
}

class Square extends Shapes {
    constructor(sideLength){
        super('square');
        console.log('im a square');
        this.name = "Square";
        this.sideLength = sideLength;
        this.object.style.height = sideLength + "px";
        this.object.style.width = sideLength + "px";
        this.object.style.top = Math.floor(Math.random() * 601) + "px";
        this.object.style.left = Math.floor(Math.random() * 601) + "px";
        this.draw();
    }
    get area(){
        return this.sideLength*2;
    }
}

class Circle extends Shapes {
    constructor(radi){
        super('circle');
        this.radi = radi;
        this.object.style.height = 2 * radi + "px";
        this.object.style.width = 2 * radi + "px";
        this.object.style.top = Math.floor(Math.random() * 601) + "px";
        this.object.style.left = Math.floor(Math.random() * 601) + "px";
        console.log(radi);
        this.draw();
    }
}

class Triangle extends Shapes {
    constructor(height){
        super('triangle');
        this.height = height;
        this.object.style.borderBottomWidth = height;
        this.object.style.borderRightWidth = height;
        this.object.style.top = Math.floor(Math.random() * 601) + "px";
        this.object.style.left = Math.floor(Math.random() * 601) + "px";
        this.draw();
    }
}
// Create New Shapes
function  newRec() {
    let height = document.getElementById('recHeight').value;
    let width = document.getElementById('recWidth').value;
    const rectangle = new Rectangle(width, height);
    console.log(rectangle);
    rectangle.describe();
}

function newSq(){
    let sideLength = document.getElementById('sqLength').value;
    let square = new Square(sideLength);
    square.describe();
}

function newCircle(){
    let radi = document.getElementById('cirRadius').value;
    let circle = new Circle(radi);
    circle.describe();
}

function newTriangle(){
    let height = document.getElementById('triHeight').value + "px";
    let triangle = new Triangle(height);
}

document.getElementById('genRec').addEventListener('click', newRec);
document.getElementById('genSq').addEventListener('click', newSq);
document.getElementById('genCircle').addEventListener('click', newCircle);
document.getElementById('genTri').addEventListener('click', newTriangle);

