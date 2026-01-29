//basics
console.log("Hello");
console.log('Hello');
//console.log('i'm learning js');
//we will use escape character(\) to tell the string does not end here 
console.log('I\'m learning javascript')
//multi-line string
console.log('Hello\n This is a New line');
let s="It is a string";
console.log(typeof(s));
console.log(s);
let age=20.64;
console.log("My age is:"+Math.round(age));
//printing using backtick(Used for interpolation(string and variable) method)
console.log(`My age is: ${Math.round(age)}`);
//we use === instead of == as it also check the type of variable
let calculation=2+2;
let result=calculation+2;
console.log(result);

//variable like 2name(error) and special character(excluding $ and _) are probhited
let $name="qwerty";
let _name=$name;
//3 ways to create a variable(let,const,var)
const id=23;
//we cant teh value of const(it is more safer to use)
var variable3;
//We dont use var in writing js code(use in old codes) because it does not follow the rules of scope

//falsy values::: 0,False,''(empty string),NaN(not a number),Undefined,Null
console.log(0);
if(false){console.log("false hello");}
if(''){console.log("empty string hello");}
console.log('Text'/5);
let qwer;
console.log(qwer);  //undefined

//string
console.log('hello'.length);
console.log('hello'.toUpperCase());

//String is an inbuilt function to covert in string
String(25);

//type coercion
//if a string has only numbers and we do-*/,the string is converted into number
console.log('25'-5); //20
//but not in the case of +
console.log('25'+5); //255