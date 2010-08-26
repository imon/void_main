var sys = require("sys");

var aString = "This is a String";

var bString = new String("Another String");


sys.print(aString+"\n");
sys.print(bString);


var name = new String("What is your name?");

if (name == "nauman") {
  sys.print("You are it.");
}

typeof name.valueOf();
sys.print(typeof name.valueOf() == "string");

var keywords = "key1, key2, key3";

var keywordsArray = keywords.split(",");

for(var i=0; i < keywordsArray.length; i++) 
  sys.print(">>>:" + keywordsArray[i] + "\n");

sys.print(/nauman/i.test("NauMan leghari"));

sys.print("This is a new world".replace(/new/, "sad"));


