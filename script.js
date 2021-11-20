'use strict';

const fibonacci = (n) => {
    let result = [0, 1];
    for (let i = 2; i <= n; i++) {
        result.push(result[(i-1)] + result[(i-2)]);
    }

    const numOfDigit = +(n.toString().slice(-1));

    switch (numOfDigit) {
        case 0:
            console.log(`${n}th Fibonacci Number is: ` + result[n]);
            break;
        case 1:
            console.log(`${n}st Fibonacci Number is: ` + result[n]);
            break;
        case 2:
            console.log(`${n}nd Fibonacci Number is: ` + result[n]);
            break;
        case 3:
            console.log(`${n}rd Fibonacci Number is: ` + result[n]);
            break;
        case 4:
            console.log(`${n}th Fibonacci Number is: ` + result[n]);
            break;
        case 5:
            console.log(`${n}th Fibonacci Number is: ` + result[n]);
            break;
        case 6:
            console.log(`${n}th Fibonacci Number is: ` + result[n]);
            break;
        case 7:
            console.log(`${n}th Fibonacci Number is: ` + result[n]);
            break;
        case 8:
            console.log(`${n}th Fibonacci Number is: ` + result[n]);
            break;
        case 9:
            console.log(`${n}th Fibonacci Number is: ` + result[n]);
            break;
        case 10:
            console.log(`${n}th Fibonacci Number is: ` + result[n]);
            break;

    }
}

fibonacci(9)
