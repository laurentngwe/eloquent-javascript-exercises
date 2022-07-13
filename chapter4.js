"use strict"
const range = function(start,end,step=1){
    let result = [];
    for(let i=start; i<=end;i+=step){
        result.push(i);
    }
    return result;
}
const sum = (range)=>{
     return range.reduce((som,elem)=>som+elem);
}
// console.log(range(1,10,2));
// console.log(sum(range(1,10,2)));
// console.log(range(0,10,2));
// console.log(sum(range(0,10,2)));
// console.log(range(1,10));

//write like this the function revereArray(reverseArray(rang(1,0))) does not work why?
// const reverseArray = function(range){
//     let result = [];
//     for(let i = 0; i < range.length; i++){
//         result.unshift(i);
//     }
//     return result;
// }
const reverseArray = function(range){
    let result = [];
    let rangeBis = range;
    while(rangeBis.length > 0){
        result.push(rangeBis.pop());
    }
    return result;
}
const reverseArrayInPlace = (range)=>{
    return reverseArray(range);
}   
// console.log(reverseArray(range(0,9)));
// console.log(typeof reverseArray(range(0,9)));
// console.log(typeof []);
// console.log(reverseArray(reverseArray(range(0,9))));
// console.log(range(0,9).reverse().reverse());

const arrayToList = function(range){
    let list = {};    
    if(range.length === 1){
        list.value = range.shift();
        list.rest = null
    }else{
        list.value = range.shift();
        list.rest = arrayToList(range);
    }
    return list;
}
/*const arrayToListNonRecursive = function(range){
    let list = {}
    list.value = range.pop();
    list.rest  = null;
    let temp = list;
    while(range.length > 0){
        list.rest = temp;
        list.value = range.pop();
        console.log(range);
        temp = list;
    }
    return list;
}*/
const arrayToListNonRecursive = function(array){
    let list = {};
    let temp;
    list.value  = array.pop();
    list.rest = null;
    console.log(`list.value: ${list.value} and list.rest:${list.rest}`);
    let i = array.length;
    while(i > 0){
        temp = list;
        list.value = array.pop();
        list.rest = temp;
        i--;
    }
    console.log(array);
    return list;
}
const listToArray = function(list){
    let range = [];
    while(list.rest != null){
        range.push(list.value);
        list = list.rest;
    }
    range.push(list.value);
    return range;
}
const prepend = function(elem,list){
    return {
        value:elem,
        rest:list
    }
}
const nth = function(list,number=0){
    while(number!=0){
        if(list == null) return undefined;
        list = list.rest;
        number--;
    }
    return list.value;
}
//console.log(arrayToList(range(1,3)));
//console.log(arrayToListNonRecursive(range(1,3)));
//console.log(listToArray(arrayToList(range(1,3))));
//console.log(prepend(0,arrayToList(range(1,3))));
//let list = arrayToList(range(1,3));
//console.log(nth(list,5));
let myList = {value:1,
                rest:{ value:2,
                        rest:{ value:3,
                                rest:{value:4,
                                        rest:null}
                        }
                    }
            }

// console.log(listToArray(myList));
// console.log(myList);
console.log(arrayToListNonRecursive([1,2,3,4]))
//console.log(listToArray(arrayToListNonRecursive([1,2,3,4])));