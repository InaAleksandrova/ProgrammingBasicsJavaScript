function cruiseShip(input) {
    let cruiseType = input.shift();
    let cabinType = input.shift();
    let nights = Number(input.shift());
    let totalprice = 0;

    switch (cruiseType) {
        case 'Mediterranean':
            if (cabinType == 'standard cabin') {
                totalprice = nights * 27.50 * 4;
            } else if (cabinType == 'cabin with balcony') {
                totalprice = nights * 30.20 * 4;
            } else {
                totalprice = nights * 40.50 * 4;
            }
            break;
        case 'Adriatic':
            if (cabinType == 'standard cabin') {
                totalprice = nights * 22.99 * 4;
            } else if (cabinType == 'cabin with balcony') {
                totalprice = nights * 25.00 * 4;
            } else {
                totalprice = nights * 34.99 * 4;
            }
            break;
        case 'Aegean':
            if (cabinType == 'standard cabin') {
                totalprice = nights * 23.00 * 4;
            } else if (cabinType == 'cabin with balcony') {
                totalprice = nights * 26.60 * 4;
            } else {
                totalprice = nights * 39.80 * 4;
            }
            break;
    }
    if (nights > 7) {
        totalprice = 0.75 * totalprice;
    }
    console.log(`Annie's holiday in the ${cruiseType} sea costs ${totalprice.toFixed(2)} lv.`);
}

cruiseShip(['Aegean', 'standard cabin', 10])