function touristShop(input) {
    let budget = Number(input.shift());
    let equipment = input.shift();
    let currentSum = 0;
    let neededMoney = 0;
    let counter = 0;

    while (equipment != 'Stop') {
        counter++;
        let equipmentPrice = Number(input.shift());
        if (counter % 3 == 0) {
            equipmentPrice = 0.50 * equipmentPrice;
        }
        if (equipmentPrice > budget) {
            neededMoney = Math.abs(budget - equipmentPrice);
            break;
        }
        budget -= equipmentPrice;
        currentSum += equipmentPrice;
        equipment = input.shift();
    }
    if (equipment == 'Stop') {
        console.log(`You bought ${counter} products for ${currentSum.toFixed(2)} leva.`);
    } else {
        console.log(`You don't have enough money!`);
        console.log(`You need ${neededMoney.toFixed(2)} leva!`);
    }
}

touristShop([153.20, 'Backpack', 25.20, 'Shoes', 54, 'Sunglasses', 30, 'Stop'])

//153.20, 'Backpack', 25.20, 'Shoes', 54, 'Sunglasses', 30, 'Stop'
//54, 'Thermal underwear', 24, 'Sunscreen', 45
//54, 'Thermal underwear', 34, 'Sunscreen', 10
