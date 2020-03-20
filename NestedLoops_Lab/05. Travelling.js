function travelling(input) {
    let destination = input.shift();
    let totalSavedMoney = 0;

    while (destination != 'End') {
        let minBudget = Number(input.shift());
        let savedMoney = 0;
        while (totalSavedMoney < minBudget) {
            savedMoney = Number(input.shift());   //без Number задачата не е окей - Judge дава 60 от 100
            totalSavedMoney += savedMoney;
        }
        console.log(`Going to ${destination}!`);
        destination = input.shift();
        totalSavedMoney = 0;
    }
}

travelling(['France', 2000, 300, 300, 200, 400, 190, 258, 360, 'Portugal', 1450, 400, 400, 200, 300, 300, 'Egypt', 1900, 1000, 280, 300, 500, 'End'])

//'Greece', 1000, 200, 200, 300, 100, 150, 240, 'Spain', 1200, 300, 500, 193, 423, 'End'
//'France', 2000, 300, 300, 200, 400, 190, 258, 360, 'Portugal', 1450, 400, 400, 200, 300, 300, 'Egypt', 1900, 1000, 280, 300, 500, 'End'
