const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fruits = ['apple', 'banana', 'pear', 'kiwi', 'satsumas'];


console.log(fruits)

let running = true
let counter = 0

// loopar om koden i sitt kodblock tills påståendet inte längre stämmer
while (counter < 10) {

    // 3 olika sätt att öka värdet på counter med 1
    counter = counter + 1
    //counter += 1
    //counter++ //increment

    // 3 olika sätt att minska värdet på counter med 1
    //counter = counter - 1
    //counter -= 1
    //counter-- //decrement

    console.log(counter)
}

console.log("vi går vidare")


// do/while kör alltid en gång innan den kollar om påståendet stämmer. så påståendet händer sist istället för först, till skillnad från den vanliga while-loopen
do {
    counter = counter + 1

    console.log(counter)
} while (counter < 10)

console.log("for loopar!")

const numbersArray = [1, 2, 3, 4, 5, 100, 23023, 238, 2132, 23421, 2, 32, 76, 23, 95]

const numbersUnder100 = []

// for-loopen går igenom sina krav för att loopa igenom valfri data
/*
den tar 3 olika parametrar
indexering - första parametern är numret vi räknar på
påstående - andra parametern är påståendet som ska stämma tills det inte längre stämmer
iterering - tredje parametern är hur vi ökar eller minskar värdet på vår indexering för att uppnå vårt påstående
 */
for (let i = 0; i > numbersArray.length; i++) {
    if (numbersArray[i] < 100) {
        numbersUnder100.push(numbersArray[i])
    }
}

console.log(numbersUnder100)

console.log("FOR OF LOOP!")

// for/of går igenom en array eller valfri lista en efter en tills alla positioner i den valda listan har körts
for (let fruit of fruits) {
    console.log(fruit)
}

const person = {
    name: 'Jesper',
    lastName: 'Sjöström',
    age: 34,
    city: 'Stockholm'
}

console.log("FOR IN LOOP!")

// for/in går igenom alla nycklar i ett objekt. för att kunna få värden i ett objekt behöver du ta objektet i fråga och ge den nyckeln som du får för varje värde som finns i objektet
for (let key in person) {
    console.log(key + ": " + person[key])
}
