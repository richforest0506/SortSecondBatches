const seconds_batches = [
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5, 6, 7],
    [30, 31, 32, 33],
    [1, 2, 3, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  ]
  
let sorted_uniq_seconds = [];
seconds_batches.forEach(element => {
    element.forEach(item => {
        var i;
        for (i=0; i<sorted_uniq_seconds.length; i++) {
            if (sorted_uniq_seconds[i] === item) break;                        
            if (sorted_uniq_seconds[i] > item) {
                sorted_uniq_seconds.splice(i, 0, item);
                break;
            }
        }
        if (i == sorted_uniq_seconds.length)
            sorted_uniq_seconds.push(item);
    });
});
console.log(sorted_uniq_seconds);