function bestPlaneTickets(input) {
    let flightNumber = input.shift();
    let currFlightNumber = '';
    let currPrice = 0;
    let minStay = Number.MAX_SAFE_INTEGER;

    while (flightNumber != 'End') {
        let price = Number(input.shift());
        let stay = Number(input.shift());
        if (stay < minStay) {
            minStay = stay;
            currFlightNumber = flightNumber; 
            currPrice = price; 
        }
        flightNumber = input.shift();
    }
    let priceInBGN = currPrice * 1.96;
    let minStayInHours = 0;
    let minStayInMinutes = minStay % 60;;
    if (minStay >= 60) {
        minStayInHours = parseInt(minStay / 60);
    }
    console.log(`Ticket found for flight ${currFlightNumber} costs ${priceInBGN.toFixed(2)} leva with ${minStayInHours}h ${minStayInMinutes}m stay`);
    
}


bestPlaneTickets(['W64301', 60, 140, 'FR9967', 80, 200, 'FR0066', 45, 160, 'End'])