const highestNumber = (numberArray) => {
	// asssigned first array element to maxNumber variable which store maximum number and return it
	let maxNumber = numberArray[0]

	for (i in numberArray) {
		//if current number is greater than max number setting it to max number
		if (numberArray[i] > maxNumber) maxNumber = numberArray[i]
	}
	return maxNumber
}

const numbersArray = [-10, -15, -2, -4, -10]
console.log(highestNumber(numbersArray))
