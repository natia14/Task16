// First
let cars = ['mercedes', 'lexus', 'bmw', 'Toyota', 'porsche', 'mercedes'];

for (let i=1; i < cars.length; i++) {
    console.log(cars[i]);
}

// Second
let names = ['sofo', 'lana', 'david', 'george', 'khatuna'];
for (let item of names) {
    if(item.length > 3) {
        console.log(item);
    }
}

// Third
let number = [15, 6, 4, 10, 222, 3256, 4587];
for (let i=0; i < number.length; i++) {
    if(number[i] % 2 == 0) {
        console.log('Even number: ' + number[i])
    } else {
        console.log('Odd number: ' + number[i]);
    }
}

// Fourth
let numbers = [16, 76, 150, 6, 8, [90, 600]];
console.log(numbers[5][1]);

// Fifth
var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
};

console.log(person.eyecolor);

// Sixth
let my_array = [19, 'july', 2021];
for (let item of my_array) {
    console.log(item);
}

// Seventh
let name = ['valo', 'tamo', 'paata', 'lika', 'monika', 'eteri', 'irakli'];
if (name.length == 5 && name[name.length - 1] == 'irkali') {
    console.log("მასივის რაოდენობა: 5 და ბოლო ელემენტია ნიკა");
}

if (name.length == 7 || name[0] == 'sandro') {
    console.log("მასივის რაოდენობა: 7 და პირველი ელემენტია ვალო");
}

// Eighth 
// 6 === “6”
// false, რადგან არ ხდება ცვლადების ტიპების კონვერტაცია.