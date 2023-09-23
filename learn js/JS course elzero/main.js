/*                               
                               // start ass 1 videos(1:9)
document.getElementById("test").style.color = "blue";
document.getElementById("test").style.fontFamily = "arial";
document.getElementById("test").style.fontWeight = "bold";
document.getElementById("test").style.textAlign = "center";
document.getElementById("test").style.fontSize = "80px";

console.log("%cElzero %cweb %cschool","color: red; font-size: 40px","color: green; font-size: 40px; font-weight:bold",
"color: white; font-size: 40px; background-color: blue");

console.group("father");
console.log("son1");
console.log("son2");
console.log("son3");
console.group("mother");
console.log("son1");
console.log("son2");
console.log("son3");

console.groupEnd();
console.groupEnd();

console.group("grand father");
console.log("son1");
console.log("son2");
console.log("son3");
console.group("uncle");
console.log("son1");
console.log("son2");
console.log("son3");

console.table(["Osama", "Ahmed", "Sayed", "Sayed", "Sayed"]);
*/

// end ass 1 videos(1:9)

// challenge
/*
let the_title = `Elzero` ,
the_desc = `elzero web school` ,
the_date= `22/8/2022`;

let markup = `
<div class="card">
<h3> Hello ${the_title} </h3>
<P>${the_desc }</p>
<span>${the_date}</span>
</div>
`;
document.write(markup.repeat(4));
*/
// start ass 2 videos(10:17)
/*
let numberOne = 10 , numberTwo = 20;     
console.log(numberOne+""+numberTwo );                    
console.log(typeof (numberOne+""+numberTwo) );                    
console.log(`${numberOne}${numberTwo}`);                      
console.log(typeof `${numberOne}${numberTwo}`);      
console.log(numberOne + '\n' +numberTwo);      
console.log(`${numberOne}
${numberTwo}`);  

let elzero = document.getElementById('elzero');
console.log(elzero.innerHTML); 
console.log(typeof elzero); 

let a = 21;
let b = 20;

console.log("_"+a+("_"+a+""+b).repeat(3)+"_"+b+"_");
*/
// end ass 2 videos(10:17)

// challenge
/*                                
let d ="-100";
let e ="20";    
let f =30;
let g =true;
console.log(-d * e );   
console.log(-d + ++f + ++e * ++g) 
*/

// start ass 3 videos(18:22)
/*
let num = 3;
let a = true ;
console.log(num + num);
console.log(num * ++a );
console.log( ((num * num ) + (num * num ) ) / ++a);
console.log(++num + --a) ;
console.log(a * a + a);

let b = "10";
console.log(+b * a);
console.log(+b + +b);
console.log((++a * a - --a + ++a) * --a );
console.log(+b * +b / (a * a + --a) );
console.log((++b - a) * ++a );
*/
// end ass 3 videos(18:22)

// start ass 4 videos(23:26)
/*
console.log(-Number.MIN_SAFE_INTEGER); 

let b=true;   console.log((Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER) * Math.pow(++b,++b) + Math.pow(--b,++b)); 

let myVar = "100.56789 Views";
console.log(parseInt(myVar));
console.log(parseFloat(myVar).toFixed(2));

let num = 10;
let a = true;
console.log(+(Number.isInteger(num))* ++a); 

let flt = 10.4;
console.log(Math.round(flt)); 
console.log(Math.floor(flt)); 
console.log(Math.trunc(flt)); 
console.log((flt).toFixed(0)); 
console.log(parseInt(flt)); 
*/
// end ass 4 videos(23:26)

// start ass 5 videos(27:30)
/*
let userName = "Elzero";
console.log(userName.slice(0,1).toLowerCase()); 
console.log(userName.charAt(0).toLowerCase()); 
console.log(userName[0].toLowerCase()); 
console.log(userName.substring(0,1).toLowerCase()); 
console.log(userName.substr(0,1).toLowerCase().repeat(3)); 

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); 
console.log(word.startsWith(letterE.toUpperCase())); 
console.log(word.endsWith(letterO.toLocaleLowerCase())); // True
*/
// end ass 5 videos(27:30)

// start ass 6 videos(31:32)
/*
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(! -50  >= +"-40"); // true
console.log(! 10 <= -"-40"); // true
console.log(!("10" === 10)); // true
console.log(!(20 < false)); // true

let num1 = 10;
let num2 = 20;
console.log(10 < 20); // true
console.log(!(10 > 20)); // true
console.log(!(10 == 20)); // true
console.log(!(10 === 20)); // true
console.log(20 >= 10); // true
console.log(10 >= 20); // true

let a = 20;
let b = 30;
let c = 10;
console.log(a < b && a > c || a == b); // true
console.log(a < b || a < c); // true
console.log(!(a > b) && !(a === b) && !(a < c) && !(a === c)); // true
*/
// end ass 6 videos(31:32)

// start ass 7 videos(33:37)
/*
let num = 110; 
if (num <10){
    console.log("00" + num)

}else if(num >10 && num <100){
    console.log("0" + num)

}else if(num >=100){

    console.log(num)
}


let num1 = 9;
let str = "9";
let str2 = "20";

if(num1 == str){
    console.log(`"{num1} Is The Same Value As {str}"` )
}

if(num1 !== str){
    console.log(`"{num1} Is The Same Value As {str} But Not The Same Type"`)
}

if(num1 != str2){
    console.log(`"{num1} Is Not The Same Value Or The Same Type As {str2}"`)
}

if(typeof(str)=== typeof(str2)){
    console.log(`"{str} Is The Same Type As {str2} But Not The Same Value"`)
}


let num1 = 10;
let num2 = 30;
let num3 = "30";

if(+num3 > num1 && num3 !== num1){
console.log(`"30 Is Larger Than 10 And Type string Not The Same Type As number"`)
}

if(num3 > num1 && num3 == num2 && num3 !== num2 ){
console.log(`"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"`)
}

if(num3 != num1 && num3 !== num1 && num3 !== num2){
    console.log(`"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"`)
}


let num1 = 15;
let num2 = 10;
let num3 = 15;
let num4 = 41;

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
*/
// end ass 7 videos(33:37)

// start ass 8 videos(38:39)
/*
let day = "  friday   ";

let date = day.trim()[0].toUpperCase() + day.trim().substring(1);

switch(date){
    case "Friday":  case "Suterday":  case "Sunday":
        console.log('"No Appointments Available"');
        break;

    case "Monday":  case "Thursday":
        console.log('"From 10:00 AM To 5:00 PM"');
        break;

    case "Tuesday":    
        console.log('"From 10:00 AM To 7:00 PM"');
        break;

    default:
        console.log('"Its Not A Valid Day"')
        break;
}
*/
// end ass 8 videos(38:39)

// challenge
/*
let job = "Designer";
let salary = 0;

switch(job){
    case "Manager":
        salary =8000 ;
        console.log(salary);
        break;

    case "IT":         case "Support":
        salary =6000 ;
        console.log(salary);
        break;

    case "Developer":  case "Designer":
        salary =7000 ;
        console.log(salary);
        break;

        default:
        salary=4000;
        console.log(salary);
        break;
}


let holidays = 2;
let money = 0;

if(holidays == 0){
    money = 5000;
    console.log(`My Money is ${money}`);
}
else if(holidays == 1 || holidays == 2){
    money = 3000;
    console.log(`My Money is ${money}`);
}
else if(holidays == 3){
    money = 2000;
    console.log(`My Money is ${money}`);
}
else if(holidays == 4){
    money = 1000;
    console.log(`My Money is ${money}`);
}
else if(holidays == 5){
    money = 0;
    console.log(`My Money is ${money}`);
}
else{money = 0;
    console.log(`My Money is ${money}`);
}
*/

// start ass 9 videos(40:47)
/*
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
console.log(myFriends.slice((num-num),num)); // ["Ahmed", "Elham", "Osama"];

console.log(myFriends.splice((num-num),num)); // ["Ahmed", "Elham", "Osama"];


let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]


let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

console.log((arrOne.concat(arrTwo)).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]


let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].substring(2).toLocaleUpperCase()); // ZERO


let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes("JS")){
  console.log("found");
}

if (haystack.indexOf("JS") != -1){
  console.log("found");
}

if (haystack.lastIndexOf("JS") != -1) {
  console.log("found");
}


let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

let test = (arr2[2] + arr1[2] + arr2[3]).toLocaleLowerCase();
console.log(test); // fxy
allArrs[0] = test  ;
console.log(allArrs); // ['fxy']
*/
// end ass 9 videos(40:47)

// start ass 10 videos(48:53)
/*
let start = 10;
let end = 100;
let exclude = 40;
for ( let i=start ; i<=end; i+=start){
  if(i===exclude)
  {continue};
  console.log(i);
}


let start = 10;
let end = 0;
let stop = 3;

for (let i =start  ;  ; i-- ){
  if (i < end) break;
  console.log(i);
  if (i == stop ) break;
}


let start = 1;
let end = 6;
let breaker = 2;

mainLoop : for(let i = start ; i<=end ; i++){
  console.log(i);

  nestedLoop : for (let r = breaker ; r < end ; r+=breaker){
    console.log(`--${r}`);
  }

}


let index = 10;
let jump = 2;
let end = 0;

let i = index 
for ( ; ; ) {

if (i < end ) break;
if(i < jump*jump ) break;
console.log(i);
i-=jump;

}


let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for(let i = 0 ; i < friends.length ; i++){
  if(friends[i].charAt(0)== letter.toUpperCase()){
    continue;
  }
  console.log(` ${i} => ${friends[i]}`);
}

// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"


let start = 0;                               ..........................................................................
let swappedName = "elZerO";

for( let i = start ; i<swappedName.length; i++){
  if( typeof swappedName[i] === "string".toUpperCase()){
      typeof swappedName[i] === "string".toLowerCase();
  }

}
console.log(swappedName);
// Output
"ELzERo"


let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for(let i = ++start ; i < mix.length ; i++){
  if(typeof mix[i]=== "string"){
    continue
  }
  console.log(mix[i]);
}

                               // end ass 10 videos(48:53)

                               // start ass 10 videos(54:53)

let friends = ["Ahmed", "Sayed" , "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
// for(  ; index < friends.length; index++ ){
//   if(typeof friends[index] !== "string")
//   continue;
//   if(friends[index].charAt(counter) === "A")
//   continue;
//   console.log(`${index} => ${friends[index]}`);
// }

while(index < friends.length){
  index +=1;

  if(typeof friends[index] !== "string")
  {continue};
  if(friends[index].charAt(counter) === "A")
  {continue};
    console.log(`${index} => ${friends[index]}`);
}

// Output
"1 => Sayed"
"2 => Mahmoud"
*/
// end ass 10 videos(54:56)

// start ass 11 videos(57:63)
/*
function sayHello(theName, theGender) {
if( theGender === "Male" ){
  console.log(`Hello Mr ${theName}`);
}

else if( theGender === "Female"){
  console.log(`Hello Miss ${theName}`);
}

else{
  console.log(`Hello ${theName}`);
}
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"


function calculate(firstNum, secondNum, operation) {
if( secondNum != null ){

  if (operation === "subtract"){
    console.log(firstNum - secondNum);
  }

  else if (operation === "multiply"){
    console.log(firstNum * secondNum);
  }

  else{
    console.log(firstNum + secondNum);
  }
}

else{
    console.log("Second Number Not Found");
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600


function ageInTime(theAge) {
  if(theAge < 10 || theAge > 100){
    console.log("Age Out Of Range");
  }
  else{
    console.log(` your age in years is ${theAge}`);
    console.log(` your age in months is ${theAge * 12}`);
    console.log(` your age in weeks is ${theAge * 12 * 4 }`);
    console.log(` your age in days is ${theAge * 12 * 4 * 7 }`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months


// function createSelectBox(startYear, endYear) {
//   let newDiv = document.createElement("select")
//   for(let i = startYear ; i <= endYear ; i++){
//     console.log(`<option value ="${i}"> ${i} </option>`);
//   }
// }
// createSelectBox(2000, 2021)


let x = 1 ;
function multiply(...numbers){
  for (let i = 0 ; i < numbers.length ; i++){
    if(typeof numbers[i] === "string"  )
    continue;

    x = x * Math.floor(numbers[i]) ;
  }
  console.log(x);
    x = 1 ;
}

    
multiply(10.5, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
*/
// end ass 11 videos(57:63)

// start ass 12 videos(64:70)
/*
  function getDetails(zName, zAge, zCountry) {  .....................................................................
      zName = zName.trim();// name
      zAge = zAge.trim();//age
      zCountry = zCountry.trim();//country

  function namePattern(zName) {
    return(zName.split(' ',1) +" " + zName.substr( ' ',1).toLocaleUpperCase()+".");
  }

  function ageWithMessage(zAge) {
    return(`your age is ${zAge.charAt(0)}${zAge.charAt(1)}`);
  }

  function countryTwoLetters(zCountry) {
    return(`${zCountry.charAt(0).toLocaleUpperCase()}${zCountry.charAt(1).toLocaleUpperCase()}`);
  }

  function fullDetails() {
    return `${namePattern()} ${ageWithMessage()} ${countryTwoLetters()}`;
  }
  return fullDetails(); // Do Not Edit This
}


console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY


                                            // training
// let a = "35 ahmed ";
// let b = " Ahmed ";
// let c = "Ahmed  mostafa";
// a = a.trim();//age
// console.log(`your age is ${a.charAt(0)}${a.charAt(1)}`);

// b = b.trim();//country
// console.log(`${b.charAt(0).toLocaleUpperCase()}${b.charAt(1).toLocaleUpperCase()}`);

// c = c.trim();// name
// console.log(c.split(' ',1) +" " + c.substr( ' ',1).toLocaleUpperCase()+".");


function itsMe() {
  return `Iam A Normal Function`;
}
console.log(itsMe()); // Iam A Normal Function


//Arrow
let print = _ => 'Iam An Arrow Function';
console.log(print()); // Iam A Arrow Function


function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


//Arrow
let test= (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
*/

// training
// let a = '10ahmed'
// let b = '20 bb'
// if(typeof +a.charAt(0)!== "String"){
//   c= a.charAt(0) +a.charAt(1);
//   d=  b.charAt(0) +b.charAt(1)
//   console.log( Number (c) + Number (d) );
// }

// console.log (typeof (+"30" + "30"));

/*
function specialMix(...data) { .................................................................................
  let x = 0 ;
  let y = +"1";
  let z= 0 ;

  for (let i = 0 ; i < data.length ; i++){


    if(typeof data[i] !== "string"){
      x = x + data[i];
    }
    
    // else if (typeof  data[i] === "string"){
    //   y = y + data[i]; 
    // }

      if (typeof +data[i].charAt(0) !== "String") {
        if(typeof +data[i].charAt(0) === "String")
        continue;

        else{
          a = +data[i].charAt(0) ; 
          b= +data[i].charAt(1);
          z= z + Number (a) + Number (b);
        }
        }
      
    }

  // if(typeof y === "string")
  //     console.log(`All are Strings`);
  return z ;
  // return x ;

}

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix(10, 30, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

*/
// end ass 12 videos(64:70)

// start ass 13 videos(71:78)

//trainig with elzero

// let mix = "A13BS2ZX";

// let numbers = mix.split("").filter(function(ele){
//   return !isNaN(parseInt(ele));
// });
// console.log(numbers);

// let multiply = numbers.map(function(num){
//   return num*num ;
// });
// console.log(multiply);

/*
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let result = mix.map(function(ele){
  return isNaN(ele) ? ele :  '' ; 
}).reduce(function(acc , current){
  return (`${acc}${current}`)
});

console.log(result);
//Elzero


let myString = "EElllzzzzzzzeroo";

let test = myString.split("").filter(function(ele,index){
  return myString.indexOf(ele) === index;
  ;
}).join("");

console.log (test);
//Elzero


let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

test = numsAndStrings.filter(function(ele){
  return  ! isNaN(ele);
}).map(function(ele){
  return  -ele  ;
});

console.log(test);
// [-1, -10, 10, 20, -5, -3]
*/
// end ass 13 videos(71:78)

// start ass 14 videos(79:85)
/*
// Create Your Object Here
let member = new Object({
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return "My Name Is Elzero, My Age Is 38, I Live in Egypt";
  },
});

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt


let objMethodOne = new Object ({
  property : "Method One",
});

let objMethodTwo =  {
  property : "Method Two",
};

let objMethodThree =  Object.create ({});
objMethodThree.property = "Method Three";


let objMethodFour =  Object.assign ({},{property : "Method Four"},);

console.log(objMethodOne.property); 
console.log(objMethodTwo.property); 
console.log(objMethodThree.property);
console.log(objMethodFour.property); 


let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign({a:1},threeNums,twoNums );
console.log(finalObject);
*/
// end ass 14 videos(79:85)

// start ass 15 videos(86:93)

//training
// for (let i = 0; i < 100; i++) {

// let myDiv = document.createElement("div");
// myDiv.className = "product";

// let myHead = document.createElement("h3");
// let myHeadText = document.createTextNode(`product title ${i + 1} `);
// let myPara = document.createElement("p");
// let myParaText = document.createTextNode(`product describtion ${i + 1}`);

//   myHead.appendChild(myHeadText);
//   myPara.appendChild(myParaText);

//   myDiv.appendChild(myHead);
//   myDiv.appendChild(myPara);
//   document.body.appendChild(myDiv);
// }

/*
let first = document.querySelectorAll("#elzero");


let myImg = document.getElementsByTagName("img");

for (let i=0 ; i<10 ; i++){
  myImg[i].setAttribute("src" ,"https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
  myImg[i].setAttribute("alt" ,"Elzero Logo");

console.log (myImg[i]);
}


myImg = document.getElementsByTagName("img");

for (let i=0 ; i<10 ; i++){
  if(myImg[i].hasAttribute("alt")) {
    myImg[i].setAttribute("alt" ,"old");
  }

  else{
    myImg[i].setAttribute("alt" ,"Elzero new");
  }
console.log (myImg[i]);
}


let first = document.getElementsByTagName("div")[0];
let firstTit = first.getAttribute("title");
let firstText = first.textContent;

let sec = document.getElementsByTagName("div")[1];
let secTit = sec.getAttribute("title");
let sectText = sec.textContent;

first.setAttribute("title",secTit);
first.textContent = sectText;

sec.setAttribute("title",firstTit);
sec.textContent = firstText;

console.log(first);
console.log(sec);
*/

// end ass 15 videos(86:93)

// start ass 16 videos(94:101)

// let element = document.querySelectorAll("[href='https://elzero.org']");
// console.log(element);

// window.onload = function () {
//     element.click();
//   };

/*
let element = document.querySelector(".our-element");

element.nextElementSibling.remove();

let start = document.createElement("div");
start.className = "start";
start.title="Start Element";
start.textContent= "start";
element.before(start);

let end = document.createElement("div");
end.className = "end";
end.title="end Element";
end.textContent= "end";
element.after(end);

console.log(element);
*/

// end ass 16 videos(94:101)

//training scroll to top

// let btn = document.querySelector("button");
// btn.style.cssText =
//   " background-color : red ; border:none ; border-radius : 4px; padding : 5px ; position:fixed; bottom: 20px ; right : 20px ; display:none";

// window.onscroll = function () {
//   if (window.scrollY >= 500) {
//     btn.style.display = "block";
//   } else {
//     btn.style.display = "none";
//   }
// };

// btn.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// };

// start ass 17 videos(102:110)
/*
let test = prompt("Print Number From – To","Example: 5-20");
let nums =test.split("-");
let start = +nums[0];
let end = +nums[1];

if (start < end){
  for (let i = start ; i <= end ; i++){
    document.write(`${i} <br>`);
  }
}

else if (start > end ){
  for (let i = end ; i <= start ; i++){
    document.write(`${i} <br>`);
  }
}



let div = document.querySelector("div");
let cancel = document.querySelectorAll("div")[1];
div.style.display= "none";

function popup (){
  div.style.display= "block";
}

setTimeout(popup,3000);

cancel.onclick= function(){
  div.style.display= "none";
}


let div = document.querySelector("div");

let counter = setInterval(countdown, 1000);

function countdown() {
  div.innerHTML -= 1;
  if ((div.innerHTML === "5")) {
    location.assign("https://google.com");
  }
}


let div = document.querySelector("div");

let counter = setInterval(countdown, 1000);

function countdown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "8") {
    window.open("https://google.com", "_blank", "width=400,height=400,left = 2000,top=10");
  }
  else if (div.innerHTML === "0"){
    clearInterval(counter);
  }
}
*/

// end ass 17 videos(102:110)

// ass18

// start ass 19 videos(115:122)
/*
let myNumbers = [1, 2, 3, 4, 5];
let [a,,,,e]= myNumbers;

console.log(a * e); // 5


let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
let [a,b,c,[d,e,[f,g]]]= mySkills;

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);
// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel


let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

let finalArr= arr1.concat(arr2,arr3);
// console.log (finalArr) ;

let [c, , , , , , ,a,b]= finalArr;

console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// My Best Friends: Shady, Mahmoud, Ahmed


const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

let {
  age: a,
  working: w,
  country: c,
  hobbies: [h1, , h3],
} = member;

console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming


//challenge
let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// console.log(myFriends[0]);

if (chosen === 1){
  let {title: a , age:b ,available:c ,skills:[ ,d]} = myFriends[chosen -1 ];
  console.log(`${a}`);
  console.log(`${b}`);
  console.log(c = true ?  "available" : "Not avialable") ;
  console.log(`${d}`) ;
}

else if (chosen === 2){
  let {title: a , age:b ,available:c ,skills:[ ,d]} = myFriends[chosen -1];
  console.log(`${a}`);
  console.log(`${b}`);
  console.log(c = true ?  "available" : "Not avialable") ;
  console.log(`${d}`) ;
}

else if (chosen === 3){
  let {title: a , age:b ,available:c ,skills:[ ,d]} = myFriends[chosen -1];
  console.log(`${a}`);
  console.log(`${b}`);
  console.log(c = true ?  "available" : "Not avialable") ;
  console.log(`${d}`) ;
}
*/

// end ass 19 videos(115:122)

// start ass 20 videos(123:133)
/*
let setOfNumbers = new Set([10]);
setOfNumbers.add(20),setOfNumbers.add(setOfNumbers.size);
console.log(setOfNumbers);
// [10,20,2]

console.log([...setOfNumbers][2]);
//2


let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
let result = new Set(myFriends);

console.log ([...result].sort() );
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']


let myNewMap = new Map();
myNewMap.set("username","Osama");
myNewMap.set("role","Admin");
myNewMap.set("country","Egypt");

console.log(myNewMap);
console.log(myNewMap.size);
console.log (myNewMap.has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true


let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let test = Object.keys(myInfo);
let result = test.some((e) => e==="role");
console.log(test);
console.log(result);


let theNumber = 100020003000;
// the correct answer
let correct = [...new Set(theNumber.toString())].filter((ele) => ele !== "0").join("");
console.log (correct);

// let test =  new Set(theNumber.toString());
// // console.log([...test][0],[...test][2],[...test][3]);
// console.log(`${[...test][0]}${[...test][2]}${[...test][3]}`);

// Needed Output
// 123


let theName = "Elzero";

let newSet = new Set(theName);
console.log(newSet);

console.log([...theName]);
console.log(theName.split(""));
console.log(Array.from(theName));
let char = Object.assign([],theName);
console.log(char);


let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

let test1 = numsOne.concat(numsTwo);
console.log(test1);

let test2 = [...numsOne, ...numsTwo];
console.log(test2);

numsOne.push(...numsTwo);
console.log(numsOne);
//[1,2,3,4,5,6]


//challenge

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log((Math.max(...n2)*(n1.concat(n2).length))) ;
// Needed Output
// 210
*/

// end ass 20 videos(123:133)

// start ass 21 videos(134:146)
/*
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipRegEx = /20{2}1:db8:3{4}:4{4}:5{4}:6{4}:7{4}:8{4}/ig;

console.log(ipRegEx.test(ip));


let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let regEx = /\bos(\d+)?o\b/ig;

console.log(specialNames.match(regEx));
// Output
// ['Os10O', 'OsO', 'Os100O']
let phone = "+(995)-123 (4567)";
let regEx = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;

console.log(regEx.test(phone));


let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{1,2}(\/|\s)?-?\s?\d+(\/|\s)?-?\s?\d{2,4}/ig; 

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"


//challenge

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(http:|https:)?\/?\/?(www.)?elzero\.org/ig; 

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
*/
// end ass 21 videos(134:146)

// start ass 22 videos(147:158)

//test
// class user {
//   #e; //private prop
//   static count = 0; // static prop

//   constructor(id,userName,salery){
//   this.i = id ;
//   this.u= userName;
//   this.#e = salery <6000 ? salery+500 : salery  ;
//   }

//   cost (){
//     return `your salery is ${this.#e}`;
//   }
// }

// let userOne = new user (100,"Ahmed",5000);
// console.log(userOne.i);
// console.log(user.count); //static prop can be accessed only from the head class & can be inheritanced
// console.log(userOne.cost() ); //private prop can be accessed only from inside the class & can be inheritanced

// class test extends user{
//   constructor(id , userName, salery,color){
//     super(id , userName, salery);
//     this.c = color;
//   }
// }

// let userTwo = new test (101,"Amr",6000,"red");
// console.log(userTwo.i);
// console.log(userTwo.c);
// console.log(test.count);
// console.log(userTwo.cost() );

/*
class Car{

  constructor(name, model, price) {
  this.n = name;
  this.m = model;
  this.p = price;
}

  run() {
    return`Car Is Running Now`;
}

  stop() {
    return`Car Is Stopped`;
}
}

let car1 = new Car("MG",2022,420000);

console.log(`Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p} `);
console.log(`${car1.run()}`);

// Needed Output
// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"

let cardPattern = /\d{4}-\d{4}-\d{4}-\d{4}-/ig;
// String.prototype.getPat=function(val){
//   return (val.match(cardPattern));
// }
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card ;
  }
  get showData(){
    return`Hello Osama Your Credit Card Number Is ${this.#c} `;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

/*


class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

class Tablet extends Phone{
  constructor(name, serial, price,size) {
    super(name, serial, price)
    this.size = size || "unknown";
  }
  fullDetails(){
    return`ipad serial is ${this.serial} and size is ${this.size}`;
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

String.prototype.addLove = function () {
  return`I Love Elzero Web School`;
};

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School


const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

Object.defineProperties(myObj,{
  id:{
    enumerable: false ,
  },

  score:{
    writable: false,
    value : 1000,
  },

  country:{
    configurable: true,
  },

})

delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output
// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}
*/
// end ass 22 videos(147:158)

// start ass 23 videos(159:168)
//test
// let dateNow = new Date();
// let birthDate = new Date("6 oct,1996");
// let age = dateNow - birthDate;

// console.log(dateNow);
// console.log(age / 1000 / 60 / 60 / 24 / 365);

// console.log(dateNow.getTime()); //epoch time 1/1/1970
// console.log(dateNow.getDate()); // current  Day Of The Month
// console.log(birthDate.getFullYear()); // current year
// console.log(dateNow.getMonth()); // current month but zero based
// console.log(dateNow.getDay()); // current Day Of The Week
// console.log(dateNow.getHours()); // current hour
// console.log(dateNow.getMinutes()); //current min
// console.log(dateNow.getSeconds());
// dateNow.setDate(1); // Day Of The Month [Negative And Positive]
// console.log(dateNow);

/*
let nowTime = new Date();
let myBirth = new Date ("oct 6 1996");
let myAge = (nowTime - myBirth)/1000  ;

console.log(`${Math.round(myAge)} seconds`);
console.log(`${Math.round(myAge/60)} min`);
console.log(`${Math.round(myAge/(60*60))} hours`);
console.log(`${Math.round(myAge/(60*60)/24)} days`);
console.log(`${Math.round(myAge/(60*60)/24/30)} months`);
console.log(`${Math.round(myAge/(60*60)/24/30/12)} years`);


let start = new Date(0);
start.setFullYear(1980);
console.log(start);

start.setSeconds(1);
start.setHours(0);
console.log(start);

let nowTime = new Date();
nowTime.setMonth(8,30);
console.log(nowTime);
//30 seb

momths = ['jan' , 'feb' , 'march', 'april'];
console.log(`previous month is ${momths[3]} and last day is ${nowTime.getDate()}`);


let myAge1 = new Date("oct 6 1996");
console.log(myAge1);

let myAge2 = new Date (1996,9,6);
console.log(myAge2);

let nowTime = new Date(0);
let myBirth = new Date ("oct 6 1996");
let myAgeinms = (myBirth - nowTime)  ;
let myAge3 = new Date(myAgeinms);

console.log(myAge3);


//start time 
start = performance.now();

//operation
for (let i = 1 ; i < 10000 ; i++){
  document.write (`${i} <br>`);
}

//end time 
end = performance.now();

duration = end- start ;
console.log(`loop takes ${parseInt(duration)} Milliseconds.`);



function* gen() {
  
  let index = 14;

  while (true) {
    yield index;
  }
}

let generator = gen();
console.log(generator.next());



function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

function* genAll(){
  yield* new Set (genNumbers());
  yield* new Set (genLetters());
}
let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}

// you must use local host to use import & export 
import * as modOne from "./mod-two.js" ;
import calc , {} from "./mod-one.js" ; 
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
*/
// end ass 23 videos(159:168)

// start ass 24 videos(169:178)
//important test
/*let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");//to get url
myRequest.send(); // to send req
console.log(myRequest);

myRequest.onreadystatechange= function(){

    // to check that req is successful.........
  if (this.status===200 && this.readyState===4){
    // console.log(this.responseText);

    // to convert json obj to js obj.........
    let jsData = JSON.parse(this.responseText ) ;
    // console.log(jsData);

    // to loop on js obj to get some data .........
    for (let i= 0 ; i< jsData.length; i++){
      let div = document.createElement("div");
      let resp = document.createTextNode(jsData[i].full_name);
      div.appendChild(resp);
      document.body.appendChild(div);
    }
  }
};


// u must use local hosting..........
let calling = new XMLHttpRequest();

calling.open("GET","./articles.json");
calling.send();
//console.log(calling);// ready state 4 , status 200 

calling.onreadystatechange=function(){
// console.log(calling.readyState);
// console.log(calling.status);

if (this.readyState=== 4 && this.status===200){
    
  //console.log(calling.responseText);

  //console.log(`data loaded`);

  //js obj..........
let mainData = JSON.parse(calling.responseText);
console.log(mainData);

//loop for updating data..........
for (let i = 0 ; i < mainData.length ; i++){
  mainData[i].catagory = "all";
}
// console.log(mainData);

for (let i = 0 ; i < mainData.length ; i++){
  document.write(`<div>
              <h2>${mainData[i].id}</h2>
              <p>${mainData[i].writer}</p>
              <p>${mainData[i].catagory}</p>
              <p>${mainData[i].topic}</p>
            </div>`);
}

//convert js obj to json obj "string"...........
let updatedData = JSON.stringify(mainData);
// console.log(updatedData);
}
};

// end ass 24 videos(159:178)

// start ass 25 videos(179:188) last ass *_*

let myPromise = new Promise((resolveFunc, rejectFunc) => {
  let calling = new XMLHttpRequest();
  calling.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
      resolveFunc(JSON.parse(this.responseText));
    } else {
      rejectFunc(Error("no data founded"));
    }
  };

  calling.open("GET" , "./lastass.json");
  calling.send();
});

myPromise.then((result) => {
  result.length = 5;
return result;
}).then((result)=>{

  for(let i = 0 ; i< result.length ; i++){
    document.write
    (`<div>
        <h3>${result[i].title}</h3>
        <p>${result[i].description}</p>
      </div>`);
  }
}).catch((rej) => console.log(rej));


// this solution isshorter than the next solution
async function fetchData() {
  let myData = await fetch("./lastass.json");
  return await myData.json();
}

fetchData()
  .then((myData) => {
    myData.length = 5;
    console.log(myData);
    return myData;
  })
  .then((myData) => {
    for (let i = 0; i < myData.length; i++) {
      document.write(`<div>
          <h3>${myData[i].title}</h3>
          <p>${myData[i].description}</p>
        </div>`);
    }
  })
  .catch((rej) => console.log(rej));

  */

// fetch("./lastass.json")
// .then((result) => {
//   console.log(result);
//   let myData = result.json();
//   myData.length = 5;
//   // console.log(myData);
//   return myData;
//   })
//   .then((myData) => {
//     myData.length = 5;
//     console.log(myData);
//     return myData;
//   })

//   .then((myData)=>{
//     for(let i = 0 ; i< myData.length ; i++){
//       document.write
//       (`<div>
//           <h3>${myData[i].title}</h3>
//           <p>${myData[i].description}</p>
//         </div>`);
//     }
//   }).catch((rej) => console.log(rej));

// end ass 25 videos(179:188) last ass *_*
