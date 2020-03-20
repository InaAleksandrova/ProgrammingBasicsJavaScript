function coding(input) {

    let stringNumber = input[0];

    for (let i = stringNumber.length - 1; i >= 0; i--) {
        let currentDigit = Number(stringNumber[i]);
        if (currentDigit == 0) {
            console.log('ZERO');
            continue;
        }
        let printLine = '';
        for (let n = 1; n <= currentDigit; n++) {
            printLine += String.fromCharCode(currentDigit + 33);
        }
        console.log(printLine)
    }
}

coding(['9347439']);