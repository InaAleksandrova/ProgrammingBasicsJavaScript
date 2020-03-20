function buiding(input) {
    let floors = Number(input.shift());
    let rooms = Number(input.shift());

    for (let floor = floors; floor >= 1; floor--) {
        let output = '';
        for (let room = 0; room < rooms; room++) {
            if (floor == floors) {
                output += `L${floor}${room} `;
            } else if (floor % 2 == 0) {
                output += `O${floor}${room} `;
            } else {
                output += `A${floor}${room} `;
            }
        }
        console.log(output);
    }

}

buiding([6,4])