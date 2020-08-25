//------------------------Basic Foundations I---------------------------//
//Get 1 to 225
function count(arr) {
    var arr = []
    for (var i = 1; i <= 256; i++) {
        arr.push(i);
    }
    return arr;
}
var y = count(256)
console.log(y)
//
//
//Get even 1000
function eventhousand() {
    var sum = 0;
    for (var i=0; i<= 1000; i+=2) {
                sum+= i;
        }
        return sum;
}
var sum = eventhousand(1000)
console.log(sum)
//
//
//Sum odd 5000
function oddfivethousand() {
    var sum = 0
    for(i = 1; i <= 5000; i+=2 ) {
    sum+= i;
    }
    return sum;
}
var y = oddfivethousand(5000)
console.log(y)
//
//
//Iterate an array
function iteratearray(arr) {
    var sum = 0
    for(var i = 0; i < arr.length; i++) {
    sum = sum +arr[i];
    }
    return sum;
}
var y = iteratearray([1,2,3,4,5,6]);
console.log(y);
var x = iteratearray([10,20,30,40,50,60]);
console.log(x);
//
//
//Find Max
function findmax(arr) {
    var max = arr[0];
    for (var i = 0; i <arr.length; i++) {
        if(max < arr[i]) {
            max =arr [i];
        }
    }
    return max;
}
var x = findmax([10,28,3,30,55,63,22]);
console.log(x);
var y = findmax([103,218,323,310,555,623,624]);
console.log(y);
//
//
//Find Average
function findavg(arr) {
    sum = 0
    for(i = 0; i < arr.length; i++) {
        sum= sum + arr[i]
    }
    return sum / arr.length
}
var y = findavg([3,5,8,2,8,7]);
console.log(y);
var x = findavg([10,20,30,40,50]);
console.log(x);
//
//
//Array odd
function arrayodd(arr) {
    var arr = []
    for(i = 1; i <= 50; i+=2 ) {
        arr.push(i);
    }
    return arr;
}
var y = arrayodd(50)
console.log(y)
//
//
//Greater than Y
function greaterthany(arr, y) {
    var count = 0 
    for (i = 0; i < arr.length; i ++) {
        if (arr[i]> y) {
            count ++;
        }
    }
    return count
}
x = greaterthany([1,2,3,4,5,6], 2)
console.log(x)
//
//
//Squares
function squares(arr) {
    for(i = 0; i<arr.length; i++) {
        arr[i] = arr[i]*arr[i];
    }
    return arr;
}
x = squares([2,3,4,5,6]);
console.log(x);
//
//
//Negatives
function negatives(arr) {
    for(i = 0;i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i]=0
        }
    }
    return arr
}
x = negatives([-2,-3,4,5,-6])
console.log(x)
//
//
//Max-Min-Avg
function minmaxavg(arr) {
    min = arr[0]
    max = arr[0]
    avg = arr[0]
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if(arr[i] < min) {
            min = arr[i];
        }
        avg = avg + arr[i];
    }
    var avg = avg / arr.length;
    return [min,max,avg];
}
x = minmaxavg([2,4,7,10,20,0])
console.log(x)
//
//
//Swap Values
function swapvalues(arr) {
    temp = arr[0]
        arr[0] = arr[arr.length -1];
        arr[arr.length -1] = temp;
    return arr;
    }
x = swapvalues([1,2,3,4,5]);
console.log(x)
//
//
//Number to string
function numberstostring(arr) {
    for(i = 0;i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i]= "Dojo"
        }
    }
    return arr
}
x = numberstostring([-2,-3,4,5,-6])
console.log(x)