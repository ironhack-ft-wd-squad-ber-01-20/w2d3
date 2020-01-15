function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
}

// for (let i = 0; i < 1000; i++) {
//   console.log("Hello");
// }

// for (let i = 0; i < 1000; i++) {
//   console.log("World");
// }

foo();

let result;

setTimeout(function() {
  result = "response";
  console.log("World");
}, 5000);

setTimeout(function() {
  console.log("Hello");
}, 4999);

// for (let i = 0; i < 1000; i++) {
//   bar();
// }

console.log(result);
bar();

let counter = 0;
const intervalId = setInterval(function() {
  counter += 1;
  console.log("Interval");
  if (counter === 10) {
    clearInterval(intervalId);
  }
}, 500);

setTimeout(function() {
  clearInterval(intervalId);
}, 1500);

// Build a 10 second countdown
// using DOM manipulation
// Display the number of seconds
// decrement every second
// when you reach 0 display an image
//

function countdown() {
  const paragraph = document.createElement("p");
  const body = document.body;
  body.appendChild(paragraph);

  const img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://media.giphy.com/media/L17xM7PvLcqJggsCYa/giphy.gif"
  );

  let countdownCounter = 10;

  const countdownId = setInterval(function() {
    paragraph.innerText = countdownCounter;
    if (countdownCounter === 0) {
      body.removeChild(paragraph);
      body.appendChild(img);
      clearInterval(countdownId);
    }

    countdownCounter -= 1;
  }, 1000);
}

// window.onload = function() {
//   countdown();
// };

window.onload = countdown;

// console.log("Making the request");
// axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then(function(response) {
//   console.log("WE HAVE A RESPONSE: ", response);
// });
// console.log("Request was made");
