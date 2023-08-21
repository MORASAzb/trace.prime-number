const numString = prompt("please enter your number");
const num = parseInt(numString);

if (!isNaN(num)) {
    if (num <= 1) {
        console.log(`${num} not a prime number. `);
    } else if (num <= 3) {
        console.log(`${num} a prime number..`);
    } else if (num % 2 === 0 || num % 3 === 0) {
        console.log(`${num} not a prime number.`);
    } else {
        let i = 5;
        while (i * i <= num) 
        {
            if (num % i === 0 || num % (i + 2) === 0) {
                console.log(`${num} not a prime number.`);
            }
            i += 6;//
        }
        if (i * i > num) {
            console.log(`${num}  a prime number.`);
        }
    }
} else {
    console.log("The Unqualified entrance! Enter a number.")
}
