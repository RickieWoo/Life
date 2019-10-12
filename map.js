
var newCourseList = [
	{
		"id": 511021,
		"title": "React for Beginners",
		"coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
		"rating": 5
	},
	{
		"id": 511022,
		"title": "Vue2 for Beginners",
		"coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
		"rating": 5
	},
	{
		"id": 511023,
		"title": "Angular2 for Beginners",
		"coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
		"rating": 5
	},
	{
		"id": 511024,
		"title": "Webpack for Beginners",
		"coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
		"rating": 4
	}
], idAndTitle = [];
Array.prototype.map = function (callback) {
	let resultArr = [];
	this.forEach((el, index) => {
		resultArr.push(callback(el, index))
	})
	return resultArr
}
Array.prototype.filter = function(callback) {
	let resultArr = [];
	this.forEach((el, index) => {
		if (callback(el, index)) {
			resultArr.push(el)
		}
	})
	return resultArr
}
Array.prototype.concatAll = function () {
	let resultArr = [];
	this.forEach((el, index) => {
		resultArr.push(...el)
	})
	return resultArr
}

// 我們希望每一個陣列都有 map 這個方法，所以我們在 Array.prototype 擴充 map function
// Array.prototype.map = function(callback) {
//   var result = []; // map 最後一定會返回一個新陣列，所以我們先宣告一個新陣列
	
//   this.forEach(function(element, index) {
// 	  // this 就是呼叫 map 的陣列
// 	  result.push(callback(element, index));
// 	  // 執行使用者定義的 callback， callback 會回傳使用者預期的元素，所以我們把它 push 進新陣列
//   })
	
//   return result;
// }
idAndTitle = newCourseList.map(e => {
	return {id: e.id}
});
idAndTitle = newCourseList.filter(e => {
	return e.rating==4
}).map(course => course.title)

