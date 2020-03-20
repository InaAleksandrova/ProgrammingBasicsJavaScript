function maxNum(input) {
    let n = Number(input.shift());
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let counter = 0;

    while (counter <= n) {
        let num = Number(input.shift());
        if (num > maxNumber) {
            maxNumber = num; 
        }
        counter++;
    }
    console.log(maxNumber);
}

maxNum([3, -10, 20, -30])