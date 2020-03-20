function lemonadeStand(input) {
    let lemonsKg = Number(input.shift());
    let sugarKg = Number(input.shift());
    let waterLiters = Number(input.shift());
    let lemonJuice = 980 * lemonsKg;
    let lemonadeAmount = lemonJuice + (waterLiters * 1000) + (30 / 100 * sugarKg);
    let lemonadeCups = Math.floor(lemonadeAmount / 150);
    let lemonadeProfit = lemonadeCups * 1.20;

    console.log(`All cups sold: ${lemonadeCups}`);
    console.log(`Money earned: ${lemonadeProfit.toFixed(2)}`);
}

lemonadeStand([5, 3.5, 5])