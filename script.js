// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
var counter = 0;
var story = "Once upon a time,";

var displayEl = document.getElementById("display");

var minus50Btn = document.getElementById("minus50");
var minus10btn = document.getElementById("minus10");
var minus1btn = document.getElementById("minus1");

var plus50Btn = document.getElementById("plus50");
var plus10btn = document.getElementById("plus10");
var plus1btn = document.getElementById("plus1");

var stringInEl = document.getElementById("strIn");
var storyEl = document.getElementById("strOut");

var roundbtn1 = document.getElementById("rand1");
var roundbtn2 = document.getElementById("rand2");
var roundbtn3 = document.getElementById("rand3");
var roundbtn4 = document.getElementById("rand4");

var picBtn = document.getElementById("pic-btn");
var picContainer = document.getElementById("pic-container");

// event lister
minus50Btn.addEventListener("click", minus50fcn);
minus10btn.addEventListener("click", minus10fcn);
minus1btn.addEventListener("click", minus1fcn);

plus50Btn.addEventListener("click", plus50fcn);
plus10btn.addEventListener("click", plus10fcn);
plus1btn.addEventListener("click", plus1fcn);

stringInEl.addEventListener("change", updateStory);

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before

// event lister
function minus50fcn() {
  // Update the value of the counter(JS)
  counter = counter - 50;

  // then use the counter to update the website(HTML)
  displayEl.innerHTML = counter;
}
function minus10fcn() {
  // Update the value of the counter(JS)
  counter = counter - 10; //same as counter = counter - 10

  // Update site
  displayEl.innerHTML = counter;
}
function minus1fcn() {
  // Update the value of the counter(JS)
  //  Counter - counter - 1 or
  // counter-=1 or
  counter--;

  // Update site
  displayEl.innerHTML = counter;
}

function plus50fcn() {
  // Update the value of the counter(JS)
  counter = counter + 50;

  // then use the counter to update the website(HTML)
  displayEl.innerHTML = counter;
}

function plus10fcn() {
  // Update the value of the counter(JS)
  counter += 10; //same as counter = counter - 10

  // Update site
  displayEl.innerHTML = counter;
}
function plus1fcn() {
  // Update the value of the counter(JS)
  counter++;

  // Update site
  displayEl.innerHTML = counter;
}
// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
function updateStory() {
  // save the users word to a variable
  var word = stringInEl.value;

  // update the story variable (JS)
  story += word + " ";
  // Update the site to show the story
  stringInEl.value = "";
  storyEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
roundbtn1.addEventListener("click", round1);
roundbtn2.addEventListener("click", round2);
roundbtn3.addEventListener("click", round3);
roundbtn4.addEventListener("click", round4);

function round1() {
  // create a random dec 0 -1
  let rand = Math.random();
  // round to 3 dec places
  rand = rand.toFixed(3);
  // Update stite
  document.getElementById("rand1-out").innerHTML = rand;
}

function round2() {
  // create a random num 0 -100
  let rand = Math.random() * 100;
  rand = Math.round(rand);
  // Update stite
  document.getElementById("rand2-out").innerHTML = rand;
}

// random # from x to y
// Math.random() * (y-x) +x

// E.g If i want a random #f rom 1 to 3:
// var
function round3() {
  // create a random num -5-5
  // var rand = Math.random() * (5 - (-5)) + (-5)
  var rand = Math.random() * 10 - 5;
  rand = Math.round(rand);
  // Update stite
  document.getElementById("rand3-out").innerHTML = rand;
}

picBtn.addEventListener("click", addCandy);

function addCandy() {
  // every click, add another candy to the contaier
  picContainer.innerHTML += "<img src='img/sour.jpg' width='50px' />";
}
// Check your understanding
// 1. Complete the rest of the incrementing buttons.
// 2. Complete the random __ to __ button.
function round4() {
  var number1 = +document.getElementById("rand-in1").value;
  var number2 = +document.getElementById("rand-in2").value;
  var rand = Math.random() * (number1 - number2) + number2;
  rand = Math.round(rand);
  document.getElementById("rand4-out").innerHTML = rand;
}
// 3. Complete the Random Size button. This button should change the font size of all text in the body to a value between 0 and 75
// 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.

var randrgb = document.getElementById("random-rgb");
randrgb.addEventListener("click", RGB);

function RGB() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;

  var rgbString = `rgb(${r},${g} ,${b} )`;
  document.getElementById("HTML").style.background = rgbString;
}

var randtext = document.getElementById("random-size");
randtext.addEventListener("click", TEXT);

function TEXT() {
  var text = Math.random() * 75;
  let fontSize = `${text}`;
  console.log(fontSize);
  document.getElementById("body").style.fontSizeAdjust = fontSize;
}
var reset = document.getElementById("reset");
reset.addEventListener("click", resetpage);

function resetpage() {
  counter = 0;
  displayEl.innerHTML = counter;
  story = "Once upon a time, ";
  storyEl.innerHTML = story;
  document.getElementById("rand1-out").innerHTML = "----------";
  document.getElementById("rand2-out").innerHTML = "----------";
  document.getElementById("rand3-out").innerHTML = "----------";
  document.getElementById("rand4-out").innerHTML = "----------";
  document.getElementById("HTML").style.background = "#9ae4c8";
  document.getElementById("h1").style.fontSize = 21 + "px";
  document.getElementById("h2").style.fontSize = 18 + "px";
  document.getElementById("h23").style.fontSize = 18 + "px";
  document.getElementById("h24").style.fontSize = 18 + "px";
  document.getElementById("p").style.fontSize = 16 + "px";
  document.getElementById("p2").style.fontSize = 16 + "px";
  document.getElementById("p3").style.fontSize = 16 + "px";
}
// Your job is to make the values random in the above code snippet.

// 4. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.
// document.getElementById("Thebody").style.font-size
