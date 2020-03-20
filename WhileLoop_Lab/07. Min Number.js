function minNum(input) {
    let n = Number(input.shift());
    let minNumber = Number.MAX_SAFE_INTEGER;
    let counter = 0;

    while (counter <= n) {
        let num = Number(input.shift());
        if (num < minNumber) {
            minNumber = num; 
        }
        counter++;
    }
    console.log(minNumber);
}

minNum([3, -10, 20, -30])