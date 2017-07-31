
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
        this.object.addEventListener('click', this.describe.bind(this));
        this.object.addEventListener('dblclick', function(){
            this.remove();
        })
    }
    draw(){
        shapesArea.appendChild(this.object);        
    }
    describe(shape, height, width, area, radius, perimeter) {
        console.log('I am a ' + this.object.className);
        Shape.innerHTML = this.object.className;
        Width.innerHTML = this.width + 'px';
        Height.innerHTML = this.height + 'px';
        Radius.innerHTML = this.radi + ' px';
        Area.innerHTML = this.area + 'px';
        Perimeter.innerHTML = this.perimeter + 'px';
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
        this.object.style.top = Math.floor(Math.random() * 501) + "px";
        this.object.style.left = Math.floor(Math.random() * 501) + "px";
        this.draw();
    }
    get area(){
        return this.width * this.height; 
    }
    get perimeter(){
        return (this.width*2) + (this.height*2);
    }  
}

class Square extends Shapes {
    constructor(sideLength){
        super('square');
        console.log('im a square');
        this.name = "Square";
        this.width = sideLength;
        this.height = sideLength;
        this.sideLength = sideLength;
        this.object.style.height = sideLength + "px";
        this.object.style.width = sideLength + "px";
        this.object.style.top = Math.floor(Math.random() * 501) + "px";
        this.object.style.left = Math.floor(Math.random() * 501) + "px";
        this.draw();
    }
    get area(){
        return this.sideLength*this.sideLength;
    }
    get perimeter(){
        return this.sideLength*4;
    }
}

class Circle extends Shapes {
    constructor(radi){
        super('circle');
        this.radi = radi;
        this.object.style.height = 2 * radi + "px";
        this.object.style.width = 2 * radi + "px";
        this.object.style.top = Math.floor(Math.random() * 401) + "px";
        this.object.style.left = Math.floor(Math.random() * 401) + "px";
        console.log(radi);
        this.draw();
    }
    get area() {
        return Math.floor(Math.PI * this.radi * this.radi);
    };
    get perimeter(){
        return Math.floor(2*Math.PI*this.radi);
    }
}

class Triangle extends Shapes {
    constructor(height){
        super('triangle');
        this.height = height;
        this.width = height;
        this.object.style.borderBottomWidth = height +'px';
        this.object.style.borderRightWidth = height +'px';
        this.object.style.top = Math.floor(Math.random() * 501) + "px";
        this.object.style.left = Math.floor(Math.random() * 501) + "px";
        console.log(this.height);
        this.draw();
    }
    get area(){
        return 0.5 * this.height * this.height
    }
    get perimeter(){
        return 2 * this.height + Math.floor(Math.sqrt(2 * this.height * this.height));
    }
}
// Create New Shapes
function  newRec() {
    let height = document.getElementById('recHeight').value;
    let width = document.getElementById('recWidth').value;
    const rectangle = new Rectangle(width, height);
    console.log(rectangle);
    rectangle.describe();
    document.getElementById('recHeight').value = '';
    document.getElementById('recWidth').value = '';
}

function newSq(){
    let sideLength = document.getElementById('sqLength').value;
    let square = new Square(sideLength);
    square.describe();
    document.getElementById('sqLength').value = '';
}

function newCircle(){
    let radi = document.getElementById('cirRadius').value;
    let circle = new Circle(radi);
    circle.describe();
    document.getElementById('cirRadius').value = '';
}

function newTriangle(){
    let height = document.getElementById('triHeight').value;
    let triangle = new Triangle(height);
    triangle.describe();
    document.getElementById('triHeight').value = '';
}

function goodBye(){
    this.remove();
    Shape.innerText = '';
    Width.innerText = '';
    Height.innerText = '';
    Radius.innerText = '';
    Area.innerText = '';
    Perimeter.innerText = '';

}

document.getElementById('genRec').addEventListener('click', newRec);
document.getElementById('genSq').addEventListener('click', newSq);
document.getElementById('genCircle').addEventListener('click', newCircle);
document.getElementById('genTri').addEventListener('click', newTriangle);

