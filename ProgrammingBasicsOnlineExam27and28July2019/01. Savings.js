function savings(input) {
    let salary = Number(input.shift());
    let months = Number(input.shift());
    let expenses = Number(input.shift());
    let unknownExpenses = (30 / 100) * salary;
    let savings = salary - (expenses + unknownExpenses);
    let savingsPercent = (savings / salary) * 100;

    console.log(`She can save ${savingsPercent.toFixed(2)}%`);
    console.log(`${(savings * months).toFixed(2)}`);
    
    

}

savings([1500, 3, 800])