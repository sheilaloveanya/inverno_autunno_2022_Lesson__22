"use strict";

/*=============Домашка========================*/
console.log('Я вивчаю JS');
['Я вивчаю JS'].forEach(alert);
 

/*
console.log('Я вивчаю ' + 'JS');
*/

let userEyesColor;

let user;
let userName = 'Вася';

user = userName;
console.log(user);


/*=============Змінні і константи========================*/

/*
function testBlock() {
	let myAge = 36;
	console.log(myAge);
}
testBlock();
console.log(myAge);
*/



/*
let myAge = 36;

function testBlock() {
	let myAge = 18;
	console.log(myAge);
}
testBlock();
console.log(myAge);
*/


/*
const myAge = 36;
myAge = 18;  //eror
*/



/*
const BLOCK_SIZE = 25;
const COLOR_RED = "#FFF";

const summSizes = 25 + 30;

const userProfile = {
	name: 'Фрілансер',
	age: 36,
	message: 'Живи а працюй у вільний час!'
}
console.log(userProfile);
userProfile.age = 18;
console.log(userProfile);
*/



/*
age = 35;
console.log(age);
var age;*/


/*
function testBlocket() {
	let myAgeLet = 36;
}
testBlocket();
function testBlockVar() {
	let myAgeVar = 36;
}
testBlockVar();
console.log(myAgeVar); //eror
*/


/*
if (true) {
let sizeLet = 50;
console.log(sizeLet);-видасть помилку
}

if (true)  {
	var sizeVar = 50;
}
console.log(sizeVar);- правильно
*/


/*=============Типи даних========================*/


/*
let userName;
console.log(typeof userName);
userName = "Фрілансер по життю";
console.log(typeof userName);
userName = 58;
console.log(typeof userName);
*/


/*
let userName;
console.log(typeof userName);
console.log(userName);

if (typeof userName === 'undefined') {
	console.log('Змінна не опреділена');
} else {
		console.log('Змінна опреділена');
	
}

if (typeof userName === 'undefined') {
	console.log('Змінна не опреділена');
} else {
	console.log('Змінна опреділена');
}
*/


/*
let userName = null;
console.log(userName);

let block = document.querySelector('.block');
console.log(block);

console.log(typeof block); 
*/


/*
let willYouMarryMe = false;
if (willYouMarryMe) {
	console.log(':)');
} else {
	console.log(':(');
}
*/


/*
let trueOrFalse = 58 > 18;
console.log(trueOrFalse);
*/


/*
let userAge = 20;
let userHeit = 1.83;
console.log(userAge);
console.log(typeof userAge);
console.log(userHeit);
console.log(typeof userHeit);
*/


/*
let getInfinity = -58 / 0;
console.log(getInfinity);
console.log(typeof getInfinity);
*/


/*
let getNan = 'Фрілансер' / 10;
console.log(getNan);
console.log(typeof getNan);
*/


/*
const bigInteger = 12345678901234567890123456789n;
console.log(typeof bigInteger);
*/


/*
let userName = "Фрілансер по життю";
console.log(typeof userName);

let userNameV2 = 'Фрілансер по життю';
console.log(typeof userNameV2);

let userNameV3 = `Фрілансер по життю`;
console.log(typeof userNameV3);

let userAge = 36;
let userAgeInfo = `Вік: ${userAge}`;
console.log(userAgeInfo);
*/


/*
let userInfo = {
name: "Фрілансер по життю",
age: 36
}
console.log(userInfo);
console.log(typeof userInfo);
*/


/*
let id = Symbol("id");
console.log(typeof id);
*/


/*
let funcVariable = function name(params) {
}
console.log(typeof funcVariable);
*/


/*
let userAge = 58;
console.log(userAge);
console.log(typeof userAge);

userAge = String(userAge);

console.log(userAge);
console.log(typeof userAge);
*/


/*
let userTrue = true;
console.log(userTrue);
console.log(typeof userTrue);

userAge = String(userTrue);

console.log(userTrue);
console.log(typeof userTrue);
*/


/*
let userAge = "58";
console.log(userAge);
console.log(typeof userAge);

userAge = Number(userAge);

console.log(userAge);
console.log(typeof userAge);
*/


/*
let userAge = "72" / "2";
console.log(userAge);
console.log(typeof userAge);
*/


/*
let userAge = " ";
console.log(userAge);
console.log(typeof userAge);

userAge = Boolean(userAge);

console.log(userAge);
console.log(typeof userAge);
*/





