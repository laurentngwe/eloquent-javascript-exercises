"use strict"

//Exercise Flattening
let arrayOfArray = [[1,2,3,4],[5,6],["a","b","c"],[7,8,9]];

const flatten = function(arrayOfArray){
    return arrayOfArray.reduce((sum,elem)=>sum.concat(elem));
};

//Exercise Your own loop
const ownLoop = function(values,test){
///i don't understand it!
};

//Exercise Everything
const everyUsingLoop = function(array, predicate){
    for (let elem of array) {
        if(!predicate(elem)) return false;
    }
    return true;
};
const everyUsingSome = function(array, predicate){
    if(array.some(elem=>!predicate(elem))) return false;
    //if(array.some(!predicate(elem))) return false;
    return true;
};

const repeat = function(n,action){
    for (let index = 0; index < n; index++) {
        action(index);
        
    }
};

let label = [];
repeat(5,i=>{label.push(`Unit ${i+1}`)});
//console.log(label);
//console.log(sum(range(5,15)));

console.log(everyUsingLoop(arrayOfArray,elem=>elem.length>=2));
//console.log(everyUsingSome(arrayOfArray,elem=>elem.length>=2));

//console.log(flatten(arrayOfArray));