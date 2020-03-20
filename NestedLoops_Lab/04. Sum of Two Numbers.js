function sumOfTwoNumbers(input) {
    let n1 = Number(input.shift());
    let n2 = Number(input.shift());
    let n3 = Number(input.shift());
    let counter = 0;
    let isFound = Boolean(false);

    for (let i = n1; i <= n2; i++) {
        for (let j = n1; j <= n2; j++) {
            counter++;
            let sum = i + j;
            if (sum === n3) {
                isFound = true;
                console.log(`Combination N:${counter} (${i} + ${j} = ${n3})`)
                break;
            }
        }
        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${n3}`);
    }

}

