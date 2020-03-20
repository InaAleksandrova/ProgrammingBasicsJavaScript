function reservation(input) {
    let reservationDay = Number(input.shift());
    let reservationMonth = Number(input.shift());
    let checkinDay = Number(input.shift());
    let checkinMonth = Number(input.shift());
    let checkoutDay = Number(input.shift());
    let checkoutMonth = Number(input.shift());
    let pricePerNight = 30;
    let nights = checkoutDay - checkinDay;

    if (reservationMonth == checkinMonth && checkinDay - reservationDay >= 10) {
        pricePerNight = pricePerNight - 5;
    } else if (reservationMonth != checkinMonth) {
        pricePerNight = 0.8 * (pricePerNight - 5);
    } else {
        pricePerNight = 30;
    }
    let totalCost = nights * pricePerNight;
    console.log(`Your stay from ${checkinDay}/${checkinMonth} to ${checkoutDay}/${checkoutMonth} will cost ${totalCost.toFixed(2)}`);
}

reservation([21, 7, 28, 8, 30, 8])