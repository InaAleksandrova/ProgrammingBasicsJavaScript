function summerShopping(input) {
    let budget = Number(input.shift());
    let beachTowel = Number(input.shift());
    let discount = Number(input.shift());;
    let discountPercent = discount / 100;
    let umbrella = 2/3 * beachTowel;
    let flipflops = 0.75 * umbrella;
    let beachBag = 1/3 * (flipflops + beachTowel);
    let discountSum = discountPercent * (beachTowel + umbrella + flipflops + beachBag);
    let totalSum = (beachTowel + umbrella + flipflops + beachBag) - discountSum;
    let difference = Math.abs(budget - totalSum);

    if (budget >= totalSum) {
        console.log(`Annie's sum is ${totalSum.toFixed(2)} lv. She has ${difference.toFixed(2)} lv. left.`);
    } else {
        console.log(`Annie's sum is ${totalSum.toFixed(2)} lv. She needs ${difference.toFixed(2)} lv. more.`);
    }
}

summerShopping([40, 15, 5])