function examPreparation(input) {
    let maxFails = Number(input.shift());
    let taskName = '';
    let lastTask = '';
    let taskScore = 0;
    let successCount = 0;
    let failsCount = 0;
    let totalGrades = 0;

    while (input != 'Enough') {
        taskName = input.shift();
        taskScore = Number(input.shift());
        totalGrades += taskScore;
        if (taskScore <= 4) {
            failsCount++;
            if (failsCount == maxFails) {
                break;
            }
        } 
        successCount++;
        lastTask = taskName;
    }
    let avgGrade = totalGrades / successCount;
    if (failsCount == maxFails) {
        console.log(`You need a break, ${failsCount} poor grades.`);
    } else {
        console.log(`Average score: ${avgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${successCount}`);
        console.log(`Last problem: ${lastTask}`);
    }
}

examPreparation([2, 'Income', 3, 'Game Info', 6, 'Best Player', 4])

//3, 'Money', 6, 'Story', 4, 'Spring Time', 5, 'Bus', 6, 'Enough'
//2, 'Income', 3, 'Game Info', 6, 'Best Player', 4
