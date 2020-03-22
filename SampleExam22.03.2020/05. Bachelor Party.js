function bachelorParty(input) {
    let moneyForSinger = Number(input.shift());
    let command = input.shift();
    let pricePerPerson = 0;
    let totalGuests = 0;
    let profit = 0;
    let totalProfit = 0;

    while (command != 'The restaurant is full') {
        let numberOfGuests = Number(command);

        if (numberOfGuests < 5) {
            pricePerPerson = 100;
        } else {
            pricePerPerson = 70;
        }
        profit = numberOfGuests * pricePerPerson;
        totalProfit += profit;
        totalGuests += numberOfGuests;
        command = input.shift();
    }

    if (moneyForSinger > totalProfit) {
        console.log(`You have ${totalGuests} guests and ${totalProfit} leva income, but no singer.`);
    } else {
        console.log(`You have ${totalGuests} guests and ${totalProfit - moneyForSinger} leva left.`);
        
    }
}

bachelorParty([2800, 5, 5, 4, 6, 6, 12, 12, 'The restaurant is full'])