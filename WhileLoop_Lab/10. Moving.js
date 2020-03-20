function moving(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let freeSpace = width * length * height;
    let boxesNumber = 0;
    let allBoxes = 0;

    while (input != 'Done') {
        boxesNumber = Number(input.shift());
        allBoxes += boxesNumber;
        if (allBoxes > freeSpace) {
            break;
        }
    }
    if (freeSpace >= allBoxes) {
        console.log(`${freeSpace - allBoxes} Cubic meters left.`);
    } else {
        let neededSpace = Math.abs(freeSpace - allBoxes)
        console.log(`No more free space! You need ${neededSpace} Cubic meters more.`);
    }
}

moving([10, 1, 2, 4, 6, 'Done']) //10, 10, 2, 20, 20, 20, 20, 122

10, 1, 2, 4, 6, 'Done'
