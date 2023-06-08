// 1
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let count = 15;
let arr = [];
let sum = 0;

for (i = 0; i < count; i++) {
  arr[i] = getRandomInt(-10, 30 + 1);
  sum += arr[i] > 0 ? arr[i] : 0;
}

console.log("1: " + arr);
console.log("1: " + sum / count);
document.querySelector('.results').innerHTML = arr;

// 2
let arr2 = [];
arr.forEach((item) => {
    arr2.push(item < 0 ? Math.pow(item, 2) : item);
});

console.log("2: " + arr2);

// 3
let sumPlus = 0, sumMinus = 0, countZero = 0;

for (i = 0; i < count; i++) {
    switch (true) {
        case (arr[i] > 0):
            sumPlus += arr[i];
            break;
        case (arr[i] < 0):
            sumMinus += arr[i];
            break;
        default:
            countZero += 1;
    }
}

console.log("3(+): " + sumPlus / count);
console.log("3(-): " + sumMinus / count);
console.log("3(0): " + countZero);

// 4 and dop 1
let names = ['red', 'black', 'white'];
let colors = [0, 0, 0];
let countCurrent = 0;
let colorCurrent = -1;

for (i = 0; i < 1000000; i++) {
    let n = getRandomInt(0, 2 + 1);
    
    if (n == colorCurrent)
        countCurrent += 1;
    else {
        if (countCurrent > colors[colorCurrent])
            colors[colorCurrent] = countCurrent;

        countCurrent = 1;
        colorCurrent = n;
    }
}

let result = [];
let max = Math.max.apply(Math, colors);
for (i = 0; i < names.length; i++)
    if (colors[i] == max)
        result.push(names[i]);

console.log("4, dop 1 - red: " + colors[0]);
console.log("4, dop 1 - black: " + colors[1]);
console.log("4, dop 1 - white: " + colors[2]);
console.log("4, dop 1 - result: " + result);
