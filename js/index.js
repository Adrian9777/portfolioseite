// inline
/* block */

//Jason ist eine form um Daten abzuspeichern und Datenaustausch zwischen webbasierten Systemen auszutauschen

// Global Exicusion Context                        (T.O.E. Thread of execusion)                   |    Global Memeory
console.log(eineVariabel)
var eineVariabel = "Adran ";                                                                      // var eineVariable = "Adrian"
// constante Variable
const konstanteVariable = "Scheele "                                                              // const konstanteVariable = "Scheele "      
let age = "25";
                                                                                                  // let age = "25";
console.log("Was ist 26 mal 2 ?  Antwort:" + age * 2);                                             
 

function multiplyByTwo(num){                                                                      // const multiplyByTwo ==> funktion
    let result = num*2;
    return result;
}

const resultAgex2 = multiplyByTwo(25);

                                                                               // const multiply

// + - /  % *

//Data Types
/*
Boolean
Number
String
undefined
null
*/

//Objekt
const Person = {};

Person.name = "Adrian";
Person.surname = "Scheele";
Person.age = 25;
//Person.istVolljaehrig = funktion()
Person.istVolljaehrig = () => {
    if (Person.age >= 18) {
        console.log(Person.name + Person.surname + "ist Volljährig")
    }
}
Person.istVolljaehrig()
console.log(Person)

const name = Person.name;
console.log(name)
console.log(typeof Person.age)
console.log(Person.istVolljaehrig)

Person.istVolljaehrig();

//array
const array = [];
array[0] = "Fiat";
array[1] = "BMW";
array[2] = "Mercedes";

console.log(array)
console.log(array.length)

//condition
/*
if(condition){

}
else if(condition) {

}
else{

}
 */

array[0]  = "Bugatti"

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
      
}

















/*
const numbers = [1,2,3,4,5]

function summe(numbers){
    let x = 0;
    for (let index = 0; index < array.length; index++) {
        const element = numbers[index];
        x += element;
        
    }
    console.log(x);
}

summe(numbers);

*/































const numbers2 = [1,2,3,4,5,6,7,8];

function durchschnitt(numbers){
    let x = 0;
    let n = numbers.length;
    for (let index = 0; index < n; index++) {
        const element = numbers[index];
        x += element;    
    }
    let y = x/n
    console.log("Durchschnitt" + x/n)
    console.log(y)
}
// numbers2 ist argument
durchschnitt(numbers2);


let string = "Adrian ist ein Webdesigner und Adriano ist auch Webdesigner";
let newString = string.slice(7, -13);
//von 7 bis 13
let newString2 = string.substring(7,13);
// von 7 bis 20 (7+13)
let newString3 = string.substr(7,13);

let replace = string.replace("Webdesigner", "Webdeveloper");
let replace2 = string.replace(/Webdesigner/g, "Webdeveloper");

let upper = string.toUpperCase();
let lower = string.toLowerCase();

let string3 = "heuteistFreitag";

let all = string.concat(' ' , string3);

let passwort = "  Adrian1234";
//nimmt spaces weg
let trimPasswort = passwort.trim();
let trimPasswort2 = passwort.trimStart();
let trimPasswort3 = passwort.trimEnd();

console.log(passwort)
console.log("trim " +  trimPasswort)


console.log(newString);
console.log(newString2);
console.log(newString3);
console.log(string.length);
console.log(replace);
console.log(replace2);
console.log(upper);
console.log(lower);
console.log(all);