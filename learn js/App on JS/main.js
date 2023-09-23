
//start of video no 3  => "create images slider"...........................................................
/*
//get elements .................................
// Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));//.............

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

//clicking on next and prev button ...............
// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Set ID On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');//.............

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {

  // Create The LI
  var paginationItem = document.createElement('li');

  // Set Custom Attribute
  paginationItem.setAttribute('data-index', i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));

  // Append Items to The Main Ul List
  paginationElement.appendChild(paginationItem);

}

// Add The Created UL Element to The Page
document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items | Array.form [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));




// Loop Through All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {

  paginationsBullets[i].onclick = function () {

    currentSlide = parseInt(this.getAttribute('data-index'));

    theChecker();

  }

}



// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {

  if (nextButton.classList.contains('disabled')) {

    // Do Nothing
    return false;

  } else {

    currentSlide++;

    theChecker();

  }

}

// Previous Slide Function
function prevSlide() {

  if (prevButton.classList.contains('disabled')) {

    // Do Nothing
    return false;

  } else {

    currentSlide--;

    theChecker();

  }

}





// Create The Checker Function
function theChecker() {

  // Set The Slide Number
  slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);


  // Remove All Active Classes
  removeAllActive();

  // Set Active Class On Current Slide
  sliderImages[currentSlide - 1].classList.add('active');

  // Set Active Class on Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add('active');




  // Check if Current Slide is The First
  if (currentSlide == 1) {

    // Add Disabled Class on Previous Button
    prevButton.classList.add('disabled');

  } else {

    // Remove Disabled Class From Previous Button
    prevButton.classList.remove('disabled');

  }

  // Check if Current Slide is The Last
  if (currentSlide == slidesCount) {

    // Add Disabled Class on Next Button
    nextButton.classList.add('disabled');

  } else {

    // Remove Disabled Class From Next Button
    nextButton.classList.remove('disabled');

  }

}




// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {

  // Loop Through Images
  sliderImages.forEach(function (img) {

    img.classList.remove('active');

  });

  // Loop Through Pagination Bullets
  paginationsBullets.forEach(function (bullet) {

    bullet.classList.remove('active');

  });

}
*/
//end of video no 3  => "create images slider"


//start of video no 10  => "Increase Numbers On Scrolling".....................................................
// new idea.....................
/*
let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");



let started = false; // Function Started ? No=>     to make func work for one time only...........

//make this func second after lower func 
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 300) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};


//make this func first 
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);     //to make all numbers finish at the same time...........
}
*/
//end of video no 10  => "Increase Numbers On Scrolling"


//start of video no 11  => "Animate Width On Scrolling".....................................................
// new idea.....................
/*
let section = document.querySelector(".three");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {                      
  if (window.scrollY >= section.offsetTop -300) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
*/
//end of video no 11  => "Animate Width On Scrolling"


//start of video no 12  => "Create Countdown Timer".....................................................
/*
// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();//gettime to get time in ms......
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
*/
//end of video no 12  => "Create Countdown Timer"


// start of video no 14  => "Count Input Characters And Fill Borders".................................
// good idea ...........
/*
let count = document.querySelector(".count");
let progress = document.querySelector(".progress");
let input = document.querySelector("input");
let div = document.querySelector("div");
let maxLength = input.getAttribute("maxlength");

count.innerHTML = maxLength;

input.oninput = function () { // new event ..........
  count.innerHTML = maxLength - this.value.length;
  count.innerHTML == 0 ? count.classList.add("zero") : count.classList.remove("zero");
  // Set The Progress
  progress.style.width = `${(this.value.length * 100) / maxLength}%`;
  count.innerHTML == 0 ? progress.classList.add("full") : progress.classList.remove("full");
};
*/
// end of video no 14  => "Count Input Characters And Fill Borders"


//  start of video no 17   => "Fullscreen Navigation"..................................... 
/*
let toggle = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let cancel = document.querySelector(".close");

toggle.onclick = function(){
    nav.classList.add("open");
}

cancel.onclick = function(){
    nav.classList.remove("open");
}

document.onkeyup = function(e){ // new idea................
    if(e.key === "Escape" ){
        nav.classList.remove("open");
    }
}
*/
//  end of video no 17   => "Fullscreen Navigation" 


//  start of video no 20  => "Random Background Color"..................................... 
/*
//   Practice
//   - Random Background Color

// #fd34f7 FF00FF

let div = document.querySelector(".colors");


let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colorParts = [];

// we need 6 no to make a color  "sec step looping"
for (let i = 0; i < 6; i++) {
  colorParts.push(hexArray[Math.floor(Math.random() * hexArray.length)]);//random arr index "first step"
}

let finalColor = `#${colorParts.join("")}`;

div.append(finalColor);
div.style.backgroundColor = finalColor;
*/
//  end of video no 20  => "Random Background Color" 


//  start of video no 21  => "Create Our Work Filter"..................................... 
/*
let switcherLis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.images);

switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

// Remove Active Class From All Lis And Add To Current "first step"
function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

// Manage Imgs "sec step"
function manageImgs() {
    imgs.forEach((img) => {
        //u can use visibility instead of display
      img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {  //this = li clicked on in addevent
      el.style.display = "block";
    });
  }
*/
//  end of video no 21  => "Create Our Work Filter" 


//  start of video no 22  => "Generate Random Serial Number"..................................... 
/*
let serialEl = document.querySelector(".serial");
let btnEl = document.querySelector(".generate");

btnEl.onclick = function(){
    let serialCount = 10 ;
    let serialChars = "0123456789ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz";
    let randomSerial = "";

    for(let i= 0 ; i< serialCount ; i++){
        randomSerial += serialChars[Math.floor(Math.random() * serialChars.length )];
    }
    serialEl.innerHTML = randomSerial;
}
*/
//  end of video no 22  => "Generate Random Serial Number" 


//  start of video no 24  => "Create Tabs"..................................... 
/*
let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from (tabs);
//create array from tabs and contents 
let div = document.querySelectorAll(".content > div");
let divArray = Array.from (div);

tabsArray.forEach((ele) => {
    ele.addEventListener("click",removeActive);
    ele.addEventListener("click",removeContent);
})

//remove active class from tabs and appear current "first step"
function removeActive (){
    tabsArray.forEach((ele)=>{
        ele.classList.remove("active");
        this.classList.add("active");
    });
}

//remove active class from content and appear current "sec step"
function removeContent (){
    divArray.forEach((cont) => {
        cont.style.display = "none";
        document.querySelector(this.dataset.cont).style.display = "block";
    });
}
*/

//  end of video no 24  => "Create Tabs" 


//  start of video no 25   => "Scroll To Top"..................................... 
/*
let span = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
*/
//  end of video no 25  => "Scroll To Top" 
