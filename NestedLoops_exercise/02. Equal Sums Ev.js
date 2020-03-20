function position(input) {
    let n1 = Number(input.shift());
    let n2 = Number(input.shift());
    let printLine = '';

    for (let i = n1; i <= n2; i++) {
        let currentNum = "" + i;
        let evenSum = 0;
        let oddSum = 0;
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = currentNum.charCodeAt(j);
            if (j % 2 == 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (evenSum === oddSum) {
            printLine += i + ' ';
        }
    }
    console.log(printLine);
}

position([100000, 100050])