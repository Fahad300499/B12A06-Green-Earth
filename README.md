
<h1>1. What is the difference between var, let, and const?</h1>
<p>Ans: Var:- 
Scope:- var is function-scoped. This means a variable declared with var is available anywhere within the function it's defined in, even in nested blocks.
Hoisting:- var is hoisted, which means its declaration is moved to the top of its function or global scope. 
Reassignment & Redeclaration:- You can reassign a var variable and can also redeclare it in the same scope without an error. 
Let:- 
Scope:- let is block-scoped. A variable declared with let is only accessible within the specific block of code (like an if statement or a for loop) where it's defined.
Hoisting:- let is also hoisted, but it enters a "temporal dead zone." This means you cannot access a let variable before its declaration line. Attempting to do so will result in a Reference Error.
Reassignment & Redeclaration: - You can reassign a let variable, but you cannot redeclare it in the same scope. 
Const:-
Scope:- const is also block-scoped.
Hoisting:- const also enters a temporal dead zone. You cannot access a const variable before its declaration.
Reassignment & Redeclaration:- You cannot reassign a const variable. It must be initialized with a value at the time of declaration. You also cannot redeclare a const in the same scope. </p>

<h1>2. What is the difference between map(), forEach(), and filter()?</h1>
<p>Ans: Map: -  The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. It's used when you want to transform each element and get a new array of the same length with the modified values. The original array remains unchanged.
Examlple: 
const numbers = [1, 2, 3]; 
const doubled = numbers.map(num => num * 2); 
console.log(doubled); // Output: [2, 4, 6] 
console.log(numbers); // Output: [1, 2, 3] (Original array is unchanged)
forEach():- The forEach() method executes a provided function once for each array element. It doesn't 
return a new array; its return value is undefined.
Example:- 
const numbers = [2, 5, 7]; 
numbers.forEach(num => console.log(num)); 
// Output: // 2 // 5 // 7

Filter:- The filter() method creates a new array with all elements that pass a test implemented by the provided function. The test function should return a boolean value (true to keep the element, false to discard it). It's used when you want to select a subset of elements from an array. The original array remains unchanged.
JavaScript
Example:
const numbers = [1, 2, 5, 10, 15, 26];
const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); // Output: [2, 10, 26]
console.log(numbers); // Output: [1, 2, 5, 10, 15, 26] (Original array is unchanged) </p>

<h1>3. What are arrow functions in ES6?</h1>
<p>Ans: Arrow functions are a new way to write functions in ES6  that provide a more concise syntax compared to traditional function expressions. 
Arrow functions provide a shorter way to write functions, especially for simple one-line functions. For example, (a, b) => a + b is a simplified version of function(a, b) { return a + b; }.
If an arrow function consists of a single expression, you can omit the curly braces {} and the return keyword. The expression's result is automatically returned. No arguments Object: Arrow functions do not have their own arguments object. However, you can use rest parameters (...args) to access the arguments passed to the function. Cannot be Used as Constructors: Arrow functions cannot be used with the new keyword to create new objects.
Not Hoisted: Unlike traditional function declarations, arrow functions are not hoisted. You must define an arrow function before you can use it.
Example:-
const addArrow = (a, b) => a + b; 
console.log(addArrow(2, 3)); 
// Output: 5 </p>

<h1>4. How does destructuring assignment work in ES6?</h1>
<p>Ans: Destructuring assignment in ES6 is a powerful feature that allows you to easily extract values from arrays and properties from objects into separate, distinct variables. It provides a more convenient and readable way to access and use data from these structures. There are two type of destructuring:- 
1. Array destructuring
2. Object destructuring
Array Destructuring:- 
Array destructuring unpacks values from an array based on their position or order. You create a pattern on the left side of the assignment that mirrors the structure of the array.
Example:
JavaScript
const fruits = ['apple', 'banana', 'cherry'];
// With destructuring
const [fruit1, fruit2] = fruits;
console.log(fruit1); // Output: 'apple'
console.log(fruit2); // Output: 'banana'
Object Destructuring:-
Object destructuring unpacks values from an object based on the property names. The variable names in your pattern must match the property keys in the object you are destructuring.
Example:-
JavaScript
const person = { name: 'Alice', age: 25 };

// With destructuring
const { name, age } = person;

console.log(name); // Output: 'Alice'
console.log(age);  // Output: 25</p>



<h1>5. Explain template literals in ES6. How are they different from string concatenation?</h1>
<p>Ans: Template literals are a modern way to create strings in ES6 using backticks (``). They make writing strings much easier by letting you embed variables and expressions directly inside, and by allowing strings to span multiple lines.
String Concatenation:- 
This method is like building a sentence with LEGO blocks. You have to join separate string pieces and variables together using the + operator. It can get messy and hard to read, especially with many variables.
JavaScript
const name = 'Fahad';
const age = 25;
const greeting = 'My name is ' + name + ' and I am ' + age + ' years old.';
console.log(greeting); 
// Output: My name is Fahad and I am 25 years old.

Template Literals:- 
This is like filling in the blanks on a form. You write the whole sentence and just put your variables inside special placeholders ${ }. It's much cleaner and easier to read.
JavaScript
const name = 'Fahad';
const age = 25;
const greeting = `My name is ${name} and I am ${age} years old.`;
console.log(greeting);
// Output: My name is Fahad and I am 25 years old.
Differences of templete literals and string concatination :-
1. Syntax: Template literals use backticks (``), while concatenation uses single or double quotes and the + operator.
2. Readability: Template literals are much easier to read and write because the entire string is in one place, and the variables are clearly marked.
3. Multi-line Support: Template literals can span multiple lines naturally, without needing special characters like \n for new lines.</p>
