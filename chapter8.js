"use strict"
function Person(name){this.name = name;}
let ferdinand = new Person("Ferdinand");
//console.log(ferdinand);

class Employe{
    constructor(name, surname, dateBirth){
        this.name = name;
        this.surname = surname;
        this.dateBirth = dateBirth;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.names = name;
    }
}

let staff = new Employe("Ferdinand");
// console.log(staff);
// console.log(staff.getName());

function numberToString(n, base = 10) {
    let result = "", sign = "";
    if(typeof base != "number"){
        throw new Error(`Invalid base ${typeof base}  ${base}`);
    }
    if(base == 0 || base == 1 || base < 0){
        throw new Error("Invalid base " + base);
    }
    if(n < 0){
        sign = "-";
        n = -n;
    }
    do {
        result = String(n % base) + result;
        //n /= base;
        //n = (n-(n % base)) / base;
        n = Math.floor(n/base);
    }while(n > 0);
    console.log(n);
    return sign + result;
}
/*try {
    //console.log(numberToString(10,1));
    // console.log(numberToString(10,0));
    //console.log(numberToString(10,"2"));
    
} catch (error) {
    console.log("Something went wrong " + error);
}*/
class InputError extends Error{}

function promptDirection(question){
    let result = prompt(question);
    if(result.toLowerCase() == "left") return "L";
    if(result.toLowerCase() == "right") return "R";
    // throw new Error("Invalid direction: " + result);
    throw new InputError(`Invalid direction: ${result}`);
}

function look(){
    if(promptDirection("which way?") == "L"){
        return "a house";
    } else {
        return "two angry bears";
    }
}

/*try {
    //console.log("You see", look());
} catch (error) {
    //console.log("Something went wrong: " + error);
}*/

/*for(;;){
    try {
        let dir = promptDirection("Where?");
        console.log(`You choose ${dir}` );
        break;
    } catch (e) {
        if (e instanceof InputError) {
            console.log("Not a valid direction. Try again.");
        } else{
            throw e;
        }
    }
}*/

const accounts = {
    a: 100,
    b: 0,
    c: 20
};

function getAccount(){
    let accountName = prompt("Enter an account name");
    if(!accounts.hasOwnProperty(accountName)){
        throw new InputError(`No such account: ${accountName}`);
    }
    return accountName;
}

function transfert(from, amount) {
    if(accounts[from] < amount) return;
    let progress = 0;
    try {
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress = 2;
    } catch (error) {
        console.log(`${error}`);
    }finally{
        if (progress == 1) {
            accounts[from] += amount;
        }
    }
    accounts[getAccount()] += amount;
}


// RETRY exercise
class MultiplicatorUnitFailure extends Error{}

function primitiveMultiply(num1,num2){
    let test = Math.random()*100;
    if(test > 20) throw new MultiplicatorUnitFailure("MultiplicatorUnitFailure")
    return num1 + num2;
}

function retry(){
    for(;;){
        try {
            let num1 = +prompt("Enter the first number");
            let num2 = +prompt("Enter the second number");
            let result = primitiveMultiply(num1,num2);
            console.log(result);
            if(num1+num2 == result)break;
        } catch (error) {
            if(error instanceof MultiplicatorUnitFailure){
                console.log(`The function primitiveMultiply has throw ${error}`);
            }else{throw error;}
        }
    }
}
// retry();

//The locked box
const box = {
    locked:true,
    unlock(){this.locked = false;},
    lock(){this.locked = true;},
    _content:[],
    get content(){
        if(this.locked)throw new Error("Locked!");
        return  this._content;
    }
};

function withBoxUnlocked(apply,box){
    try {
        if(!box.locked){apply();}
        else{
            box.unlock();
            apply();
            box.lock();
        } 
    } catch (error) {
        console.log(`The box is ${error}  Try to unlock it before atttempting an action on it.`);
    }
}
let array1 = [1,2,3,4,5];
// console.log(array1);
// withBoxUnlocked(() => {box._content.push(...array1);},box);
// withBoxUnlocked(()=>console.log(box._content),box);