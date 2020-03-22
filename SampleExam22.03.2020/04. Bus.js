function bus(input) {
    let startingNumberPassengers = Number(input.shift());
    let numberOfStops = Number(input.shift());
    let finalNumPassengers = 0;

    for (i = 1; i <= numberOfStops; i++) {
        let goingOutPass = Number(input.shift());
        let goingInPass = Number(input.shift());
        
        startingNumberPassengers -= goingOutPass;
        startingNumberPassengers += goingInPass;
        
        if (i % 2 != 0) {
            startingNumberPassengers += 2;
        } else {
            startingNumberPassengers -= 2;
        }
    }
    finalNumPassengers = startingNumberPassengers;
    console.log(`The final number of passengers is : ${finalNumPassengers}`);  
}

bus([20, 2, 10, 5, 5, 3])
    