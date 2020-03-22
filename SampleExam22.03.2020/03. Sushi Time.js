function sushiTime(input) {
    let sushiType = input.shift();
    let sushiRestaurant = input.shift();
    let portions = Number(input.shift());
    let typeOfOrder = input.shift();
    let portionsPrice = 0;

    switch (sushiRestaurant) {
        case 'Sushi Zone':
            if (sushiType == 'sashimi') {
                portionsPrice = portions * 4.99;
            } else if (sushiType == 'maki') {
                portionsPrice = portions * 5.29;
            } else if (sushiType == 'uramaki') {
                portionsPrice = portions * 5.99;
            } else if (sushiType == 'temaki') {
                portionsPrice = portions * 4.29;
            } if (typeOfOrder == 'Y') {
                portionsPrice = portionsPrice + (0.20 * portionsPrice)
                console.log(`Total price: ${Math.ceil(portionsPrice)} lv.`);
            } else {
                console.log(`Total price: ${Math.ceil(portionsPrice)} lv.`);
            }
            break;
        case 'Sushi Time':
            if (sushiType == 'sashimi') {
                portionsPrice = portions * 5.49;
            } else if (sushiType == 'maki') {
                portionsPrice = portions * 4.69 ;
            } else if (sushiType == 'uramaki') {
                portionsPrice = portions * 4.49;
            } else if (sushiType == 'temaki') {
                portionsPrice = portions * 5.19;
            } if (typeOfOrder == 'Y') {
                portionsPrice = portionsPrice + (0.20 * portionsPrice)
                console.log(`Total price: ${Math.ceil(portionsPrice)} lv.`);
            } else {
                console.log(`Total price: ${Math.ceil(portionsPrice)} lv.`);
            }
            break;
        case 'Sushi Bar':
            if (sushiType == 'sashimi') {
                portionsPrice = portions * 5.25;
            } else if (sushiType == 'maki') {
                portionsPrice = portions * 5.55;
            } else if (sushiType == 'uramaki') {
                portionsPrice = portions * 6.25;
            } else if (sushiType == 'temaki') {
                portionsPrice = portions * 4.75;
            } if (typeOfOrder == 'Y') {
                portionsPrice = portionsPrice + (0.20 * portionsPrice)
                console.log(`Total price: ${Math.ceil(portionsPrice)} lv.`);
            } else {
                console.log(`Total price: ${Math.ceil(portionsPrice)} lv.`);
            }
            break;
        case 'Asian Pub':
            if (sushiType == 'sashimi') {
                portionsPrice = portions * 4.50;
            } else if (sushiType == 'maki') {
                portionsPrice = portions * 4.80;
            } else if (sushiType == 'uramaki') {
                portionsPrice = portions * 5.50;
            } else if (sushiType == 'temaki') {
                portionsPrice = portions * 5.50;
            } if (typeOfOrder == 'Y') {
                portionsPrice = portionsPrice + (0.20 * portionsPrice)
                console.log(`Total price: ${Math.ceil(portionsPrice)} lv.`);
            } else {
                console.log(`Total price: ${Math.ceil(portionsPrice)} lv.`);
            }
            break;
        default:
            console.log(`${sushiRestaurant} is invalid restaurant!`);
            break;
    }
    
}

sushiTime(['maki', 'fsdfsdf', 4, 'N'])