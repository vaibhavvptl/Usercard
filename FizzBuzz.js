const fizzBuzz = (n) => {
	let counterThree = 0,
		counterFive = 0,
		iterator = 0

	//setting n for edge cases like : nth value of input
	n = n > 0 ? n + 1 : n - 1

	//this will loop intil iterator is not equal to our input n
	while (iterator !== n) {
		//if both counterThree and counterFive are at 3 and 5 respectively then num divisible by 15
		if (counterThree === 3 && counterFive === 5) {
			counterThree = 0
			counterFive = 0
			console.log("FizzBuzz ")
		}
		//if counterFive = 5 then num is divislble by 5
		else if (counterFive === 5) {
			counterFive = 0
			console.log("Buzz ")
		}
		//counterThree = 3 then num divisible by 3 and set counterThree to 0
		else if (counterThree === 3) {
			counterThree = 0
			console.log("Fizz ")
		}
		//for rest of numbers printing iterator
		else console.log(iterator)

		//if num is greaterthan 0 then increasing and for lessthan 0 descreasing itreator
		iterator = n > 0 ? ++iterator : --iterator

		counterThree++
		counterFive++
	}
}

fizzBuzz(100)
