let {
  interval,
  Subject
} = require('rxjs');
let source = interval(1000)
let observerA = {
  next: value => console.log('a', value),
  complete: value => console.log('a complete'),
  error: err => console.log(err)
}
let observerB = {
  next: value => console.log('b', value),
  complete: value => console.log('b complete'),
  error: err => console.log(err)
}
let subject = new Subject()
subject.subscribe(observerA)
source.subscribe(subject)
setTimeout(() => {
  subject.subscribe(observerB)
}, 3000)