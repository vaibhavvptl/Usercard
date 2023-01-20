//to swap two number in array
//takes first , second  postion and array in which we have  to swap
const swap = (first, second, arr) => {
	// let temp = arr[first]
	// arr[first] = arr[second]
	// arr[second] = temp

	//withoot using third variable
	arr[first] = arr[first] + arr[second]
	arr[second] = arr[first] - arr[second]
	arr[first] = arr[first] - arr[second]
}

//function to sort array in two parts negetive first after postive
const sortArray = (arrToSort) => {
	//postion variable to swap negetive number
	let postionToSwap = 0
	for (let i = 0; i < arrToSort.length; i++) {
		//if first number is negetive then inceremet postion variable no need for swap
		if (i === 0 && arrToSort[i] < 0) ++postionToSwap

		//swaping two numbers if current element is negative and incrementing postion variable
		if (arrToSort[i] < 0 && i > 0) {
			swap(i, postionToSwap++, arrToSort)
		}
	}
	return arrToSort
}

const arrayForSorting = [-12, 1, -1, -13, -5, 6, 7, 5, -3, -9]
console.log(sortArray(arrayForSorting))
