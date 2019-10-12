const Rx = require('rxjs')

let observable = Rx.Observable.create(function (observer) {
  observer.next('a')
  observer.next('b')
})
console.log('start');
observable.subscribe(function (v) {
  console.log('v: ', v);
})
console.log('end');
