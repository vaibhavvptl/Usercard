const urls = [
	"https://jsonplaceholder.typicode.com/posts",
	"https://jsonplaceholder.typicode.com/posts/59",
	"https://jsonplaceholder.typicode.com/users",
	"https://jsonplaceholder.typicode.com/posts/178",
	"https://jsonplaceholder.typicode.com/comments",
	"https://jsonplaceholder.typicode.com/users/987",
	"https://jsonplaceholder.typicode.com/albums",
	"https://jsonplaceholder.typicode.com/todos/967",
	"https://jsonplaceholder.typicode.com/comments/732",
	"https://jsonplaceholder.typicode.com/photos",
	"https://jsonplaceholder.typicode.com/todos",
	"https://jsonplaceholder.typicode.com/photos/800",
]

//200,404,404,200,200,200,200,200,404,200,200,404

const urlLogger = () => {
	let activeLinks = []
	let inactiveLinks = []
	//stroing  resonse in result and waiting for it to resolve
	const result = urls.map(async (url) => {
		const res = await fetch(url)
		// if status code is 200 link is active else link is inactive
		if (res.status === 200) activeLinks.push(url)
		else inactiveLinks.push(url)
	})

	//waiting for all the promise to return the result then map through two array activelinks and inactive links
	Promise.all(result).then(() => {
		console.log("Active links")
		activeLinks.map((link) => console.log(link))

		console.log("Inactive links")
		inactiveLinks.map((link) => console.log(link))
	})
}

urlLogger()
