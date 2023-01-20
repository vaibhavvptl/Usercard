//to swap two number in array
//takes first , second  postion and array in which we have  to swap
const swap = (first, second, arr) => {
	let temp = arr[first]
	arr[first] = arr[second]
	arr[second] = temp
	// arr[first] = arr[first] + arr[second]
	// arr[second] = arr[first] - arr[second]
	// arr[first] = arr[first] - arr[second]
}

const sortArray = (arrToSort) => {
	//postion variable to swap negetive number
	let postion = 0
	for (let i = 0; i < arrToSort.length; i++) {
		//swapung two numbers if current element is negative and incrementing postion variable
		if (arrToSort[i] < 0) {
			swap(i, postion++, arrToSort)
		}
	}
	return arrToSort
}

const arrayForSorting = [-12, -1, 7, 5, -3, -6]
console.log(sortArray(arrayForSorting))
