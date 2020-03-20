function graduation2(input) {
    let name = input.shift();
    let counter = 1;
    let failsCounter = 1;
    let grade = 1;
    let sum = 0;

    while (counter <= 12) {
        grade = Number(input.shift());
        if (grade >= 4) {
            sum += grade;
        } else {
            failsCounter++;
            break;
        }
        counter++;
    }

    if (failsCounter >= 2) {
        console.log(`${name} has been excluded at ${counter} grade`);
    } else {
        let avgGrade = (sum / 12);
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}

graduation2(['Ani', 5, 5.32, 6, 5.43, 5, 6, 5.5, 4.55, 5, 6, 5.56, 6])

//'Mimi', 5, 6, 5, 6, 5, 6, 6, 2, 3

//'Ani', 5, 5.32, 6, 5.43, 5, 6, 5.5, 4.55, 5, 6, 5.56, 6
