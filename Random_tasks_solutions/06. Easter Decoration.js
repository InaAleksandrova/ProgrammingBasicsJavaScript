function easterDecoration(input) {
    let n = Number(input.shift());
    let counter = 0; 
    let sum = 0;
    let totalSum = 0;

    for (i = 0; i < n; i++) {
        let typeDecoration = input.shift();
        let command = '';
        while (command != 'Finish') {
            counter++;
            if (typeDecoration == 'basket') {
                sum += 1.50;
            } else if (typeDecoration == 'wreath') {
                sum += 3.80;
            } else if (typeDecoration == 'chocolate bunny'){
                sum += 7.00; 
            }
            command = input.shift();
            typeDecoration = command;
        }
        if (counter % 2 == 0) {
            sum = 0.80 * sum;
        }
        console.log(`You purchased ${counter} items for ${sum.toFixed(2)} leva.`);
        totalSum += sum;
        sum = 0;
        counter = 0;
    }
    let avgSum = totalSum / n;
    console.log(`Average bill per client is: ${avgSum.toFixed(2)} leva.`);
}
