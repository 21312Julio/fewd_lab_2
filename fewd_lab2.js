//Julio Costa Beyeler 21312 https://github.com/21312Julio/fewd_lab_2.git

// Question 3) Length is equal to 7.
var myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];
console.log(myAlphabet.length);
// Question 4)
function myAlphabetLength() {
    return console.log(myAlphabet.length);
};

myAlphabetLength();
// Question 5)
var Planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];
// Question 6)
console.log(Planets[0]);
console.log(Planets[1]);
console.log(Planets[2]);
console.log(Planets[3]);
console.log(Planets[4]);
// Question 7)
var wowDatatypes = ['First', 1, null];
console.log(wowDatatypes[0]);
console.log(wowDatatypes[1]);
console.log(wowDatatypes[2]);
// Question 8) 15, 5, 50, 2, 1, 5, 6
var x = 5, y = 10, z = 15;
console.log(x + y);
console.log(y - x);
console.log(x * y);
console.log(y / x);
console.log(x % 2);
console.log(x++);
console.log(x--);
// Question 9) 5Hello, Hello World!, 15
var a = 5, b = 'Hello ', c = 'World!', d = 10;
console.log(a + b);
console.log(b + c);
console.log(a + d);
// Question 10)  true, false, true, true, false, true, false, true, true, true
var a = 5, b = 10, c = '5';
var x = a;
console.log(a == c);
console.log(a === c);
console.log(a == x);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a >= c);
console.log(a <= c);
// Question 11) 
var hello = function() {
    return 'Hello World!';
};
// Question 12)
console.log(hello());
// Question 13) x = 'Hi!'
var s_hello = function() {
    return 'Hi!';
};

var x = s_hello();
console.log(x);
