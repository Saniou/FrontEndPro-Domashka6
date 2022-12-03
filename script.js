const intro = +prompt('Get length array');
let element;
const array = [];

for (let i = 1; i <= intro; i++){
    element = prompt('Add element');
    if(element){
        array.push(element);
    } 
} 

if(element == null){
    console.log('Error');
} else {
    console.log(array);
}

function compareNumeric(a, b){
    return a - b
}

array.sort(compareNumeric)
console.log(`Array sort: ${array}`);

array.splice(1, 3)
console.log(`Array element delete: ${array}`);

// -------------------- або так -----------------

// let arrLength = +prompt("Введіть довжину масиву");
// let str = prompt("Введіть елементи масиву через кому і пробіл.");

// let arr = str.split(', ', arrLength);
// console.log(`Довжина масиву: ${arrLength}, масив: ${arr}`);

// function compare(a, b) {
//     return a - b;
// }

// let array = arr.sort(compare);
// console.log(`Відсортований масив: ${array}`);

// array.splice(1, 3);
// console.log(`Масив без видалених елементів: ${array}`);