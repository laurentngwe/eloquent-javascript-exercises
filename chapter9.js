"use strict"
function palindrome(string){
    let arrayMinusExtraCaracter = [];
    //arrayMinusExtraCaracter = [...array].filter(elem=>elem in/[a-z]/);
    //arrayMinusExtraCaracter = [...array].filter(elem=>/[\w]/.test(elem));
    arrayMinusExtraCaracter = string.replace(/[_|*|+|-]/g,"");
    //console.log(arrayMinusExtraCaracter);
    function reverse(string){
        let result = "";
        for(let i = 0; i<string.length; i++){
            result = string[i] + result;
        }
        return result;
    }
    //console.log(reverse(arrayMinusExtraCaracter));
    return arrayMinusExtraCaracter == reverse(arrayMinusExtraCaracter); 
}
//console.log(palindrome("_***-eye"));;
//let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
let dateTime = /\d{1,2}-(\d{1,2}|\w{3})-\d{4} \d{1,2}:\d{2}/;

function parseINI(string) {
    // Start with an object to hold the top-level fields
    let result = {};
    let section = result;
    string.split(/\r?\n/).forEach(line => {
        let match;
        if (match = line.match(/^(\w+)=(.*)$/)) {
            section[match[1]] = match[2];
            // console.log(match[1],match[2]);
        } else if (match = line.match(/^\[(.*)\]$/)) {
            // console.log(result[match[1]]);
            section = result[match[1]] = {};
            // console.log(section);
        } else if (!/^\s*(;.*)?$/.test(line)) {
            throw new Error("Line '" + line + "' is not valid.");
        }
    });
        return result;
}

/*console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki`));
*/
// → {name: "Vasilis", address: {city: "Tessaloniki"}}

//REGEXP GOLF
let rexp1 = /ca(r|t)/g;
let rexp2 = /pr?op/g;
let rexp3 = /fer{2}(et|y|ari)/g;
let rexp4 = /^.*ious$/g;
let rexp5 // /\s.,[:;]/g //to white space periode comma colon or semicolon
let rexp6 = /.{7,}/g;
let rexp7       // /[^e]/gi        //[a-d][f-z]/gi;

//QUOTING STYLE
let quotation = /\s'|'\s/g;
let story = "'while 'keeping' the single quotes used in contractions like aren’t'";

//story.replace(/\s'/g,' "') and story.replace(/'\s/g,'" ')
//console.log(story.replace(/\s'/g,' "')).replace(/'\s/,'" ');// need to ajust it to fit the case where need space before or after

//NUMBERS AGAIN
let numRegex = /^(\+|-)?\dE-?\d+|^\.\d+|\d+\.$/gi; //ok
//let numRegex = /(\+|-)?\dE-?\d+/;
let number = "."
console.log(number.match(numRegex));
console.log(numRegex.test(number));