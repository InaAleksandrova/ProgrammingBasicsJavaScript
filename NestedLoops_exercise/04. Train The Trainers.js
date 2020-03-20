function trainTheTrainers(input) {
    let n = Number(input.shift());
    let taskName = input.shift();
    let grade = 0;
    let allTaskGradesSum = 0;
    let taskGradesSum = 0;
    let taskCounter = 0;
    let avgTaskGrade = 0;

    while (taskName != 'Finish') {
        for (let i = 0; i < n; i++) {
            grade = Number(input.shift());
            allTaskGradesSum += grade;
            taskGradesSum += grade;
            avgTaskGrade = taskGradesSum / n;
        }
        console.log(`${taskName} - ${avgTaskGrade.toFixed(2)}.`);
        taskCounter++;
        taskGradesSum = 0;
        taskName = input.shift();
    }
    let avgTotalTasksGrade = allTaskGradesSum / (taskCounter * n);
    console.log(`Student's final assessment is ${avgTotalTasksGrade.toFixed(2)}.`);
}

trainTheTrainers([3, 'Arrays', 4.53, 5.23, 5.00, 'Lists', 5.83, 6.00, 5.42, 'Finish'])

//3, 'Arrays', 4.53, 5.23, 5.00, 'Lists', 5.83, 6.00, 5.42, 'Finish'
//2, 'While-Loop', 6.00, 5.50, 'For-Loop', 5.84, 5.66, 'Finish'
