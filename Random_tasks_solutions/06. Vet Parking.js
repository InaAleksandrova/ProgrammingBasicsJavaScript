function vetParking(input) {
    let days = Number(input.shift());
    let hours = Number(input.shift());
    let totalSum = 0;

    for (let i = 1; i <= days; i++) {
        let sum = 0;
        for (let j = 1; j <= hours; j++) {
            if (i % 2 == 0 && j % 2 != 0) {
                sum += 2.50;
            } else if (i % 2 != 0 && j % 2 == 0) {
                sum += 1.25;
            } else {
                sum += 1;
            }
        }
        console.log(`Day: ${i} - ${sum.toFixed(2)} leva`);
        totalSum += sum;
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}

vetParking([2,5])