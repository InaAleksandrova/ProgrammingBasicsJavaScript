function seaTrip(input) {
    let foodMoneyPerDay = Number(input.shift());
    let souvernirsMoneyPerDay = Number(input.shift());
    let hotelMoneyPerNight = Number(input.shift());
    let distance = 2 * 210;
    let gasMoney = (distance / 100 * 7) * 1.85;
    let stayFoodMoney = 3 * foodMoneyPerDay;
    let souvernirsMoney = 3 * souvernirsMoneyPerDay
    let hotelMoneyDay1 = 0.9 * hotelMoneyPerNight;
    let hotelMoneyDay2 = 0.85 * hotelMoneyPerNight;
    let hotelMoneyDay3 = 0.80 * hotelMoneyPerNight;
    let totalMoney = (hotelMoneyDay1 + hotelMoneyDay2 + hotelMoneyDay3) + gasMoney + souvernirsMoney + stayFoodMoney;

    console.log(`Money needed: ${totalMoney.toFixed(2)}`);

}

seaTrip([100, 50, 500])
