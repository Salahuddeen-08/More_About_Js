// array in js
// [][][][][][]
// let fruit1 = apple
// let fruit2 = mango
// let nameOfArray = ["apple", "mango", "banana", "strawberry"]

let fruits = ["apple", "mango", "banana", "strawberry", 100]; // n = 5
        //       0        1        2          3          4     // n-1 = 4

// let array1 = ["this", "is", "first", "array"]; //method 1

// let array2 = new Array("apple", "mango", "banana", "strawberry"); //method 2

// for, while etc
//

fruits.push(200);
fruits.unshift(300);
fruits.pop();
fruits.shift();
console.log(fruits);

for(let index = 0; index < fruits.length; index++ ) {
        console.log("Element at index" + index + " " + fruits[index]);
}

