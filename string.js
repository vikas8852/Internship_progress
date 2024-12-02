
// var myStr="\'FirstLine\n\tSecondLine\n third line";
// console.log(myStr);

var out=" hello this is start "+ "this is end"  //string can be concatened using + operator
console.log(out);
var name=" Alex"
var x="My name is "+name;
console.log(x);



//string immutable


var str="Hello world";
str[0]="J"; //unchange
console.log(str);



//Accessing the character
var char=str[1];
console.log(char);
var len=str.length;
console.log(len)

let chars=str.charAt(5);
let sl=str.slice(2,4) // return slice string from index 2-3

let text1 = "Hello World!";
let text2 = text1.toUpperCase();   // to convert in uppercase and similarl in lowercase

let text3 = "      Hello World!      ";
let text4 = text1.trim();    // trim whitespace from both side of string
console.log( text4);
console.log("hello");
