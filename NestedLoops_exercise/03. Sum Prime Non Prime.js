function primeNonPrime(input) {
    let command = input.shift();
    let sumPrimeNumbers = 0;
    let sumNonPrimeNumbers = 0;
    

    while (command != 'stop') {
        let number = Number(command);
        if (number < 0) {
            console.log('Number is negative.');
            command = input.shift();
            continue;
        } 
        
        let isPrime = true;
        if (number == 0 || number == 1) {
            isPrime = false;
        } else {
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        } if (isPrime) {
            sumPrimeNumbers += number;
        } else {
            sumNonPrimeNumbers += number;
        }
        command = input.shift();
    
    }
console.log(`Sum of all prime numbers is: ${sumPrimeNumbers}`);
console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumbers}`);
}

primeNonPrime([-1, 30, 5, 3, 20, 'stop'])


