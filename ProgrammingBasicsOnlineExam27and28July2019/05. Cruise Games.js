function cruiseGames(input) {
    let name = input.shift();
    let numberOfGames = Number(input.shift());
    let volleyballCounter = 0;
    let volleyballPoints = 0
    let tennisCounter = 0;
    let tennisPoints = 0
    let badmintonCounter = 0;
    let badmintonPoints = 0

    for (let i = 0; i < numberOfGames; i++) {
        let gameName = input.shift();
        let points = 0;

        if (gameName == 'volleyball') {
            points = Number(input.shift());
            volleyballCounter++;
            volleyballPoints += points + (7/100 * points);
        } else if (gameName == 'tennis') {
            points = Number(input.shift());
            tennisCounter++;
            tennisPoints += points + (5/100 * points);
        } else if (gameName == 'badminton') {
            points = Number(input.shift());
            badmintonCounter++;
            badmintonPoints += points + (2/100 * points);
        }
    }
    let avgVolleyballPoints = Math.floor(volleyballPoints / volleyballCounter);
    let avgTennisPoints = Math.floor(tennisPoints / tennisCounter);
    let avgBadmintonPoints = Math.floor(badmintonPoints / badmintonCounter);
    let totalPoints = Math.floor(volleyballPoints + tennisPoints + badmintonPoints);
    if (avgVolleyballPoints >= 75 && avgTennisPoints >= 75 && avgBadmintonPoints >= 75) {
        console.log(`Congratulations, ${name}! You won the cruise games with ${totalPoints} points.`);
    } else {
        console.log(`Sorry, ${name}, you lost. Your points are only ${totalPoints}.`);
    }
}

cruiseGames(['Pepi', 3, 'volleyball', 78, 'tennis', 98, 'badminton', 105])

