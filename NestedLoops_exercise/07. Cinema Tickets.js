function cinemaTickets(input) {
    let movieName = input.shift();
    let totalTicketsCounter = 0;
    let studentCounter = 0;
    let standardCounter = 0;
    let kidCounter = 0;

    while (movieName != 'Finish') {
        let capacity = Number(input.shift());
        let ticketType = input.shift();

        while (ticketType != 'End') {
            if (ticketType == 'student') {
                studentCounter++
            } else if (ticketType == 'standard') {
                standardCounter++;
            } else {
                kidCounter++;
            }
            totalTicketsCounter++;
            if (totalTicketsCounter >= capacity) {
                break;
            }
            ticketType = input.shift();
        }
        let percentCapacity = (totalTicketsCounter / capacity) * 100;
        console.log(`${movieName} - ${percentCapacity.toFixed(2)}% full.`);
        totalTicketsCounter = 0;
        movieName = input.shift();
    }
    let allTickets = studentCounter + standardCounter + kidCounter;
    let studentTicketsPercent = (studentCounter / allTickets) * 100;
    let standardTicketsPercent = (standardCounter / allTickets) * 100;
    let kidTicketsPercent = (kidCounter / allTickets) * 100;
    console.log(`Total tickets: ${allTickets}`);
    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketsPercent.toFixed(2)}% kids tickets.`);
}

cinemaTickets(['Taxi', 10, 'standard', 'kid', 'student', 'student', 'standard', 'standard', 'End', 
'Scary Movie', 6, 'student', 'student', 'student', 'student', 'student', 'student', 'Finish'])

//