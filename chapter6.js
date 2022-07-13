"use strict"
let protoCar = {
    start(sound){
      console.log(`To start the car you have to use the ${this.starter} \n ${sound} `);
    }
};
  
//let lamborghiniCar = Object.create(protoCar);
//lamborghiniCar.starter = "button";
//lamborghiniCar.start("Vroo Vroo Vroom Vroom");
/*
function makeCar(starter){
    let car = Object.create(protoCar);
    car.starter = starter;
    return car;
}

function Car(starter){
    this.starter = starter;
}
Car.prototype.start = function(sound){
    console.log(`To start the car you have to use the ${this.starter} `);
};
*/
/*
class Car{
    constructor(starter){
        this.starter = starter;
    }
    start(sound){
        console.log(`To start the car you have to use the ${this.starter} \n ${sound} `);
    }
}

let ferrariCar = new Car("metalic key");
ferrariCar.start("Vroo Vroom Vroo Vroom");
*/
class Car{ 
    constructor(mark,name,type,color,starter,maxSpeed){
        this.mark = mark;
        this.name = name;
        this.type =type;
        this.color = color;
        this.starter = starter;
        this.maxSpeed = maxSpeed; 
        this.speed = 0;
    }
  start(sound){
    console.log(`To start the car you have to use the ${this.starter} \n ${sound} `);
  }
  accelerate(speed){
    ((this.speed+speed)<= this.maxSpeed)?this.speed += speed:this.speed = this.maxSpeed ;
    console.log(this.speed);
  }
  decelerate(speed){
  	((this.speed-speed)<= 0)?this.speed=0:this.speed-=speed;
    console.log(this.speed);
  }
  stop(){
    console.log(this.speed = 0);
  }
  toString(){
      console.log(`Our ${this.mark} ${this.name} is a ${this.type} with the ${this.color} color and a max speed of ${this.maxSpeed}`);
  }
}

let rav4 = new Car("Toyota","RAV4","SUV","metalic gray","button",240);
/*rav4.start("vrrroomm");
rav4.accelerate(60);
rav4.decelerate(30);
rav4.accelerate(60);
rav4.stop();
console.log(rav4.hasOwnProperty("toString"));
console.log("toString" in rav4);
console.log(rav4.toString());
*/
let rabbit = {};
rabbit.speak = function(line){
    //console.log(`The rabbit says '${line}'`);
};

function speak(line){
    //console.log(`The ${this.type} rabbit says "${line}"`);
}

//console.log(rabbit.speak("I'm alive"));

let whiteRabbit = {type:"white", speak};
let hungryRabbit = {type:"hungry", speak};

whiteRabbit.speak("how late it's getting!");
hungryRabbit.speak("I could use carrot right now.");

function normalize(){
    console.log(this.coords.map(n=>n/this.length));
}

//normalize.call({coords:[0,2,3],length:5});
//normalize.bind({coords:[0,2,3],length:5});
//console.log(Object.getPrototypeOf(speak));

let ages = new Map();
ages.set("Joseph",5);
ages.set("Nina",34);
ages.set("Laurent",35);

let cars = new Map();
cars.set("Toyota",30);
cars.set("Mitsubishi",20);
cars.set("Mercedes",12);
let totalCars = 0;
/*for( let car of cars ){
    console.log(car[1]);
    totalCars += car[1];
}
*/
//console.log(`The amount of cars in stock is ${totalCars}`);
//console.log(Object.keys(cars));
//console.log(`Joseph is ${ages.get("Joseph")} years old`);
//console.log(`Is Romaric age know? ${ages.has("Romaric")}`);

//Symbols values created with the Symbol function

let sym2 = Symbol("name");
let sym1 = Symbol("name");
//console.log(sym1);
//console.log(sym2);
//console.log(Symbol.for("name"));
//rav4.chasisNumber = Symbol("04557820");
//console.log(typeof rav4.chasisNumber);
//console.log(Object.getOwnPropertySymbols(rav4));
//The Iterator interface || not clear try to experiment more!
const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function(){
    return `${this.length} cm of blue yarn`;
}
let stringObject = {
    [toStringSymbol](){return"a jute rope"}
};
//console.log([1,2].toString());
//console.log([1,2][toStringSymbol]());
//console.log(stringObject[toStringSymbol]());
//console.log(stringObject.toStringSymbol());

/*
let obj = {};
obj[Symbol('a')] = 'a';
obj[Symbol.for('b')] = 'b';
obj['c'] = 'c';
obj.d = 'd';
for(let i in obj){
    console.log(i);
}
*/


//console.log(Math.floor(Math.random()*1000));
//console.log("The Iterator interface");
let okIterator = "OK"[Symbol.iterator]();
for (let element of okIterator) {
    //console.log(element);    
}
//console.log(okIterator.next());
//console.log(okIterator.next());
//console.log(okIterator.next());

class Matrix{
    constructor(width, height, element = (x,y)=> undefined){
        this.width = width;
        this.height = height;
        this.content = [];
        for(let y=0; y< height; y++){
            for(let x=0; x<width; x++){
                this.content[y*width + x] = element(x,y);
            }
        }
    }
    get(x,y){
        return this.content[y*this.width + x];
    }
    set(x, y, value){
        this.content[y*this.width + x] = value;
    }
}

class MatrixIterator{
    constructor(matrix){
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }
    next(){
        if(this.y == this.matrix.height) return {done:true};
        let value = {x:this.x, 
                    y:this.y, 
                    value: this.matrix.get(this.x,this.y)};
        this.x++;
        if(this.x == this.matrix.width){
            this.x = 0;
            this.y++;
        }
        return {value,done:false};
    }
}
Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
}

let matrix = new Matrix(3,3, (x,y)=>`value (${x},${y})`);
for(let element of matrix){
    //console.log(element.x, element.y, element.value);
}

//Getters, Setters and Statics

//console.log(ages.size);
let varyingSize = {
    get size() {
        return Math.floor(Math.random()*100);
    }
}
//console.log(varyingSize.size);
//console.log(varyingSize.size());

// A vector types
class Vec{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    plus(vector){
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }
    minus(vector){
        this.x -= vector.x;
        this.y -= vector.y;
        return this; 
    }
    get length(){
        return Math.sqrt(this.x**2 + this.y**2);
    }
}

//Groups
class Group{
    constructor(...args){
        this.args = [...args];
    }
    add(value){
        if(!this.args.includes(value)){this.args.push(value);}
    }
    delete(value){
        if(this.args.includes(value)){
            let index = this.args.indexOf(value);
            return this.args.splice(index,1);
        }
    }
    has(value){
        //if(this.group.indexOf(value) == -1) return false;
        return this.args.includes(value,0);
    }
}

//iterable groups
class GroupIterator{
    constructor(group){
        this.length = 0;
        this.group = group;
    }
    next(){
        if(this.group.args.length == this.length) return {done:true}
        let element = this.group.args[this.length];
        let value = {index:this.group.args.indexOf(element),
            val: element
        };
        this.length++;
        return {value,done:false}
    }
}
Group.prototype[Symbol.iterator] = function(){
    return new GroupIterator(this);
}
let group = new Group(1,2,3,4,5,6);
for(let element of group){
    console.log(element);
}

//Borrowing a method
let hasOwnProperty = Symbol("hasOwnProperty");
Group.prototype[hasOwnProperty] = function(){
    return `Used of the Symbol hasOwnProperty${hasOwnProperty.key} in ${this}`;
}

// let myGroup = new Group(1,2,3,4,5);
// console.log(myGroup);
// console.log(myGroup.has(1));
// myGroup.add(1)
// console.log(myGroup);
// console.log(myGroup[hasOwnProperty]());

