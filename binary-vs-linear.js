"use strict"

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
//========================================================//
let linearSearch = (target, values) => {
    for (var i = 0; i < values.length; i++) {
        if (target == values[i]) {
            return i
        }
    }
    return "-1"
}
//========================================================//
function binary_search(search, array) {
    var first = 0
    var last = array.length - 1
    var mid = Math.floor((array.length - 1) / 2)
    var match = false;

    while (match == false) {
        if (array[mid] == search) {
            return mid
        } else if (search > array[mid]) {
            first = mid + 1
            mid = Math.floor((first + last) / 2)
        } else if (search < array[mid]) {
            first = 0
            last = mid
            mid = Math.floor((first + last) / 2)
        }
    }
}
//========================================================//
let random_numbers = [];
for (var i = 0; i < 10000; i++){
  random_numbers.push(i)
}
//========================================================//
// add tests
suite.add('Test Linear Search', function() {
  /o/.test(linearSearch(18, random_numbers));
})
.add('Test Binary Search', function() {
  /o/.test(binary_search(5, random_numbers));
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Yang Tercepat Adalah : ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
