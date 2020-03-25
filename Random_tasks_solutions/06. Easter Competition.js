function easterCompetition(input) {
    let n = Number(input.shift());
    let bakersName = '';
    let winnerName = '';
    let maxPoints = Number.MIN_SAFE_INTEGER;
    let sumPoints = 0;

    for (i = 0; i < n; i++) {
        bakersName = input.shift();
        let points = Number(input.shift());
        let command = '';
        while (command != 'Stop') {
            sumPoints += points;
            command = input.shift();
            points = Number(command);
        }
        if (sumPoints > maxPoints) {
            maxPoints = sumPoints;
            winnerName = bakersName;
            console.log(`${bakersName} has ${sumPoints} points.`);
            console.log(`${bakersName} is the new number 1!`);
        } else {
            console.log(`${bakersName} has ${sumPoints} points.`);
        }
        sumPoints = 0;  
    }
    console.log(`${winnerName} won competition with ${maxPoints} points!`);
    
}
