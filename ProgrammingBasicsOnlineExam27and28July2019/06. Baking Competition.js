function bakingCompetition(input) {
    let n = Number(input.shift());
    let allSweets = 0;
    let totalPofit = 0;

    for (let i = 0; i < n; i++) {
        let allCookies = 0;
        let allCakes = 0;
        let allWaffles = 0;
        let price = 0;
        let name = input.shift();
        let command = input.shift();
        while (command != 'Stop baking!') {
            let sweets = command;
            let sweetsCount = Number(input.shift());
            if (sweets == 'cookies') {
                price = sweetsCount * 1.50;
                allCookies += sweetsCount;
            } else if (sweets == 'cakes') {
                price = sweetsCount * 7.80;
                allCakes += sweetsCount;
            } else if (sweets == 'waffles'){
                price = sweetsCount * 2.30;
                allWaffles += sweetsCount;
            }
            totalPofit += price;  //ако не се изчисляват в цикъла, Judge не ги приема и дава само 20 от 100
            allSweets += sweetsCount;
            command = input.shift();
        }
        console.log(`${name} baked ${allCookies} cookies, ${allCakes} cakes and ${allWaffles} waffles.`);
    }

    console.log(`All bakery sold: ${allSweets}`);
    console.log(`Total sum for charity: ${totalPofit.toFixed(2)} lv.`);
}

bakingCompetition([3, 'George', 'cookies', 10, 'Stop baking!', 'Annie', 'waffles', 8, 'Stop baking!',
    'Ivan', 'cookies', 6, 'waffles', 3, 'Stop baking!'])

//3, 'George', 'cookies', 10, 'Stop baking!', 'Annie', 'waffles', 8, 'Stop baking!', 'Ivan', 'cookies', 6, 'waffles', 3, 'Stop baking!'
