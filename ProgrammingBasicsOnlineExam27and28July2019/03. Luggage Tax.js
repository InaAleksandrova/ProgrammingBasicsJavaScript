function luggageTax(input) {
    let width = Number(input.shift());
    let height = Number(input.shift());
    let depth = Number(input.shift());
    let ticketType = input.shift();

    let suitcaseVolume = width * height * depth;
    let tax = 0;

    if (suitcaseVolume < 50) {
        tax = 0;
    } else if (suitcaseVolume >= 50 && suitcaseVolume <= 100) {
        if (ticketType == 'true') {
            tax = 0;
        } else {
            tax = 25;
        }
    } else if (suitcaseVolume > 100 && suitcaseVolume <= 200) {
        if (ticketType == 'true') {
            tax = 10;
        } else {
            tax = 50;
        }
    } else {
        if (ticketType == 'true') {
            tax = 20;
        } else {
            tax = 100;
        }
    }
    console.log(`Luggage tax: ${tax.toFixed(2)}`);
}

luggageTax([10, 4, 5, 'true'])