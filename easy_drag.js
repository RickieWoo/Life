const Rx = require('rxjs')

const mouseDown = Rx.Observable.fromEvent(dragDom, 'mousedown');
const mouseUp = Rx.Observable.fromEvent(body, 'mouseup');
const mouseMove = Rx.Observable.fromEvent(body, 'mousemove');

mouseDown.map(event => mouseMove.takeUntil(mouseUp)).concatAll()
  .map(e => {
    return {
      x: e.clientX,
      y: e.clientY
    }
  })
  .subscribe(pos => {

  })