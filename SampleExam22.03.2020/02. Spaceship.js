function spaceShip(input) {
    let shipWidth = Number(input.shift());
    let shipLength = Number(input.shift());
    let shipHeight = Number(input.shift());
    let avgHeight = Number(input.shift());
    let shipVolume = shipWidth * shipLength * shipHeight;
    let roomVolume = (avgHeight + 0.40) * 2 * 2;
    let numberSpacemen = Math.floor(shipVolume / roomVolume);

    if (numberSpacemen >= 3 && numberSpacemen <= 10) {
        console.log(`The spacecraft holds ${numberSpacemen} astronauts.`);
    } else if (numberSpacemen < 3) {
        console.log('The spacecraft is too small.');
    } else {
        console.log('The spacecraft is too big.');
    }
}

spaceShip([3.5, 4, 5, 1.70])