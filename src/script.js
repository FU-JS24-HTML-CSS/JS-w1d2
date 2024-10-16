/** VARIABLER */

//var // vi vill inte använda var längre, alls

//const // konstant värde, går inte att ädnra
//let // let är ett värde vi kan ändra och byta ut på

const variableName = "variabelnamnet är variableName"
const koala = 123
const zebra = true

const ageVar = 34
const firstName = "jesper"

/*
vi vill använda variabler för att vi vill kunna spara och återanvända data
*/

/** DATATYPER */

const stringVariable = "ett ord, en mening eller bara massa olika symboler av olika slag, samlade, ibland"
const numberVariable = 23.190
const boolVariable = true //false

const objectVariable = {}
const arrayVariable = []

const undefinedVariable = undefined //vi har ett värde men vi vet inte vad det är för något
const nullVariable = null //vi har inget värde. värdet saknas


/**
 * vanliga listor
 * 
 * array
 * map
 * set
 */

// mindre använda datatyper

const bigIntVariable = 29837284n
const symbolVariable = Symbol()

//inbyggda datatyper
//const promiseVariable = Promise() // async/await


// Conditionals

// if/else

const age = 34

if(age >= 20) {
    //gör någonting om uttrycket stämmer
}
else {
    //gör det här annars
}

let isUnderAge = false
if(age < 30) {
    //gör någotnign om påståendet stämmer
    isUnderAge = true
}
else if (true) {
    //gör det här om tidigare påståenden inte stämmer, men det här påståendet stämmer
}
else if (true) {
    //gör det här om tidigare påståenden inte stämmer, men det här påståendet stämmer
}
else if (true) {
    //gör det här om tidigare påståenden inte stämmer, men det här påståendet stämmer
}
else if (true) {
    //gör det här om tidigare påståenden inte stämmer, men det här påståendet stämmer
}
else {
    // gör det här
}

// age === 34 ? console.log("gör det här om påståendet är sant") : console.log("annars gör vi det här")

const isOverAge = age > 30 ? true : false
console.log(isOverAge)


// ternary med flera påståenden
let score = 30
 
let grade = score >= 90 ? 'A':
            score >= 80 ? 'B':
            score >= 70 ? 'C':
            score >= 60 ? 'D': 'total failure';
 
    console.log('Ditt betyg är ' + grade);



// switch ser ut såhär
switch(true) {
    case age < 10:
        console.log("det här händer")
    break

    case age < 20:
        console.log("det här händer")
    break

    case age > 21 || age < 50 :

    default:
        console.log("det här händer sist")

}

// modulo - räknar på vad som finns kvar efter vi har subtraherat högra sidan med vänstra sidan fram till att det inte går att subtrahera längre (kan inte gå ner på negativa värden)
console.log("modulo")
console.log(231 % 34)
