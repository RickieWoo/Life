const Rx = require('rxjs')

// let observable_three_way = Rx.Observable.create(function (observer) {
//   observer.next('a')
//   observer.next('b')
//   observer.completed();
//   observer.error('c')
// })
// // let observer = {
// //   next: value => { console.log(value); },
// //   error: error => { console.log('Error: ', error); },
// //   completed: function() { console.log('complete') }
// // }
// observable_three_way.subscribe(
//   value => { console.log(value); },
//   error => { console.log('Error: ', error); },
//   function() { console.log('complete') }
// )
// var source = Rx.Observable.of('Jerry', 'Anna');

// source.subscribe({
//     next: function(value) {
//         console.log(value)
//     },
//     complete: function() {
//         console.log('complete!');
//     },
//     error: function(error) {
//         console.log(error)
//     }
// });
// var observable = Rx.Observable.create(function (observer) {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   setTimeout(() => {
//     observer.next(4);
//     observer.complete();
//   }, 1000);
// });

// console.log('just before subscribe');
// observable.subscribe({
//   next: x => console.log('got value ' + x),
//   error: err => console.error('something wrong occurred: ' + err),
//   complete: () => console.log('done'),
// });
// console.log('just after subscribe');
let observable_three_way = Rx.Observable.create(function (observer) {
  observer.next('a')
  observer.next('b')
  observer.complete();
  observer.error('c')
})
let observer = {
  next: value => { console.log(value); },
  error: error => { console.log('Error: ', error); },
  completed: function() { console.log('complete') }
}
observable_three_way.subscribe(observer)
