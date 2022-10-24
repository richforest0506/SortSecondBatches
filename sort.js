const seconds_batches = [
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5, 6, 7],
    [30, 31, 32, 33],
    [1, 2, 3, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  ]
  
var arr = [].concat.apply([], seconds_batches);
arr = arr.sort(function (a, b) { return a*1 - b*1; });
let sorted_uniq_seconds = [arr[0]];
for (var i = 1; i < arr.length; i++) { 
    if (arr[i-1] !== arr[i]) {
      sorted_uniq_seconds.push(arr[i]);
    }
}
console.log(sorted_uniq_seconds);