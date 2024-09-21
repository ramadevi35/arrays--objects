let x;

//Array Literal
const numbers = [12, 45, 99, 33, 55, 78, 46];
const mixed = [12, "Hello", true, null];

//Array constructor
const fruits = new Array("apple", "orange", "grapes", "watermelon");

x = numbers[0];
x = numbers[0] + numbers[3];
x = `My favorite fruit is ${fruits[0]}`;
x = numbers.length;
fruits[3] = "pear";
// fruits.length = 2;
fruits[4] = "strawberry";
fruits[fruits.length] = "blueberry";
fruits[fruits.length] = "peach";

x = fruits;

console.log(x);
