function balance(input) {
    let n = Number(input.shift());
    let counter = 1;
    let sum = 0;

    while (counter <= n) {
        let increase = Number(input.shift());
        if (increase > 0) {
            console.log(`Increase: ${increase.toFixed(2)}`);
            sum += increase;
        } else {
            console.log('Invalid operation!');
            break;
        }
        counter++;
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}

balance([3, 5.51, 69.42, -100]);