function multiplyTable(input) { 
    let number = input.shift();
    let currentNumber = number.toString();
    let currentDigit = '';

    for (let i = 0; i < 3; i++) {
        currentDigit = currentNumber.charAt(i);
    }
        for (let j = 1; j <= currentNumber[2]; j++) {
            for (let k = 1; k <= currentNumber[1]; k++) {
                for (let l = 1; l <= currentNumber[0]; l++) {
                    let result = j * k * l;
                    console.log(`${j} * ${k} * ${l} = ${result};`);
                }
            }
        }
}

multiplyTable([563])