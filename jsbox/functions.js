function SimpleFunction() {
  console.log("This is a simple function.");
};

SimpleFunction();

function log(message) {
  console.log("LOG:" + message);
};

log("Hello world");

// partial functions or currying

function greetingMaker(greeting) {
  function addName(name) {
    return greeting + " " + name;
  }

  return addName;
}

var dayGreeting = greetingMaker("Good Morning...");
var nightGreeting = greetingMaker("Good Night...");

var name = "Nauman";

log(dayGreeting(name));
log(nightGreeting(name));

log(dayGreeting);

