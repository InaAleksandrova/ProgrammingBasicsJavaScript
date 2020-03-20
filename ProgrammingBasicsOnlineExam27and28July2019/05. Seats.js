function seats(input) {
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let ticketNumber = input.shift();

        let symbol1 = ticketNumber.charAt(0);
        let symbol2 = ticketNumber.charAt(1);
        let symbol3 = ticketNumber.charAt(2);
        let symbol4 = ticketNumber.charAt(3);

        if (ticketNumber.length == 4) {
            if (symbol1 >= 'A' && symbol1 <= 'Z') {
                console.log(`Seat decoded: ${symbol1}${symbol2}${symbol3}`);
            } else {
                console.log(`Seat decoded: ${symbol4}${symbol2}${symbol3}`);
            }
        } if (ticketNumber.length == 5 || ticketNumber.length == 6) {
            console.log(`Seat decoded: ${symbol1}${symbol2.charCodeAt()}`);
        }
    }
}

seats([3, 'W24578', 'W981', '042W'])