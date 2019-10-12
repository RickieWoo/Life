class Producer{
	constructor() {
		this.listerners = []
	}
	addEventListener(listener) {
		if (typeof listener !== 'function') {
			throw new Error('listener必须是function')
		} else {
			this.listerners.push(listener)
		}
	}
	removeEventListener(listener) {
		this.listerners.splice(this.listeners.indexOf(listener), 1)
	}
	notify(message) {
		this.listerners.forEach(e => {
			e(message)
		})
  }
}
var arr = [1, 2, 3];
var iterator = arr[Symbol.iterator]();
iterator.next();
// { value: 1, done: false }
iterator.next();
// { value: 2, done: false }
iterator.next();
// { value: 3, done: false }
iterator.next();
// { value: undefined, done: true }  
let pro = new Producer();
pro.addEventListener(function (x) {
	console.log('x: ', x);
})
pro.notify('message')


