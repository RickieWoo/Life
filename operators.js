const { Observable, combineLatest, of} = require('rxjs')

let source = of('a', 'b');
function map(source, cb) {
  return Observable.create((observer) => {
    return source.subscribe(
      val => {
        try {
          observer.next(cb(val))
        } catch (e) {
          observer.error(e)
        }
      },
      error => { observer.error(error) },
      () => { observer.complete() }
    )
  })
}

let hello = map(source, val => val + ' hello' )
hello.subscribe(console.log)
