var sys = require("sys");

sys.print(new Date());

var aFunc = function doSomeWork() {
  sys.print("\nDoing some work\n");
}

sys.print(aFunc);
