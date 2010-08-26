var arr = ["1", "2", "3"];

console.log(arr.join("--"));

arr.forEach(function(element) {
    console.log("-->Hello:"+element);
});

console.log("Hello world");
console.log(arr);

console.log(arr.filter(function(element) {
    return (element !== "2");
}));


var log = function(message) {
  console.log(message);
};


log("This is cool");

for(i in arr) {
  log(i);
};
