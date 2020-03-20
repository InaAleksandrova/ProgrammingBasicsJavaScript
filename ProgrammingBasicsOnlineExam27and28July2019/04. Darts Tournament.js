function dartsTournament(input) {
    let startPoints = Number(input.shift());
    let sector = '';
    let currPoints = 0;
    let counter = 0;

    while (startPoints != 0) {
        sector = input.shift();
        counter++;
        currPoints = Number(input.shift());

        if (sector == 'number section') {
            startPoints -= currPoints;
        } else if (sector == 'double ring') {
            startPoints -= currPoints * 2;
        } else if (sector == 'triple ring') {
            startPoints -= currPoints * 3;
        } else if (sector == 'bullseye') {
            break;
        }
        if (startPoints < 0) {
            break;
        }
    }
    if (sector == 'bullseye') {
        console.log(`Congratulations! You won the game with a bullseye in ${counter} moves!`);
    } else if (startPoints < 0) {
        console.log(`Sorry, you lost. Score difference: ${Math.abs(startPoints)}.`);
    } else {
        console.log(`Congratulations! You won the game in ${counter} moves!`);
    }
}

dartsTournament([75, 'triple ring', 17, 'number section', 16, 'triple ring', 13, 'double ring', 10])

//75, 'triple ring', 17, 'number section', 16, 'triple ring', 13, 'double ring', 10

//150, 'double ring', 20, 'triple ring', 10, 'number section', 20, 'triple ring', 20

//101, 'triple ring', 7, 'double ring', 19, 'bullseye'
