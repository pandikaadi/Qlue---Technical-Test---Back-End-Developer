let result = ""
function setToSum(arr, i, n) {
  function printRes(arr) {
    if (arr.length != 1) {
      let res = [];
      for (var i = 0; i < arr.length; i++) {
        res.push(arr[i]);
      }
      result += res.join(",")
      result += "\n"
      console.log(res.join(","));
      console.log("");
    }
  }
  if (n == 0) printRes(arr);

  for (var j = i; j <= n; j++) {
    arr.push(j);

    setToSum(arr, j, n - j);

    arr.pop();
  }
}

var n = 4;
var arr = [];
setToSum(arr, 1, n);
