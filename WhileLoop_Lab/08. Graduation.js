function graduation(input) {
    let name = input.shift();
    let counter = 1;
    let grade = 1;
    let sum = 0;

    while (counter <= 12) {
        grade = Number(input.shift());
        if (grade >= 4) {
            sum += grade;
            counter++;
        }
    }
    let avgGrade = (sum / 12);
    console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);

}

graduation(['Ani', 5, 5.32, 6, 5.43, 5, 6, 5.5, 4.55, 5, 6, 5.56, 6])
