var arr = new Array("a", "b", "c", "d","e");
var j;
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("------------------------------------");
for (j in arr) {
    console.log(arr[j]);
}
