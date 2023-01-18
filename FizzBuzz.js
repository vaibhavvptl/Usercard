const fizzBuzz = (n) => {
	let c3 = 0,
		c5 = 0
	for (let i = 1; i <= n; i++) {
		c3++
		c5++

		//if both c3 and c5 are at 3 and 5 respectively then num divisible by 15
		if (c3 === 3 && c5 === 5) {
			c3 = 0
			c5 = 0
			console.log("FizzBuzz ")
		}
		//if c5=5 then num is divislble by 5
		else if (c5 === 5) {
			c5 = 0
			console.log("Buzz ")
		}
		//c3=3 then num divisible by 3 and set c3 to 0
		else if (c3 === 3) {
			c3 = 0
			console.log("Fizz ")
		}
		//for rest of numbers printing num
		else console.log(i)
	}
}

fizzBuzz(100)
