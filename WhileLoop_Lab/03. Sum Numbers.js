function sumNumbers(input) {

    let sum = 0;

    while (input != 'Stop') {
        let num = Number(input.shift());
        sum += num;
    }
    console.log(sum);
}

sumNumbers([1,2,3,4,5,6,'Stop'])


