/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length == 1) {
    return lists[0]
  }
  let val = new ListNode()
  let p = val
  let {
    cnt,
    index
  } = allEmpty(lists)
  if (!cnt) return null
  while (cnt) {
    if (cnt == 1) {
      p.val = lists[index].val
      p.next = lists[index].next
      break
    } else {
      let minVal = min(lists)
      if (!isNaN(minVal)) {
        p.val = minVal;
        p.next = new ListNode()
        p = p.next
      }
      let obj = allEmpty(lists)
      cnt = obj.cnt
      index = obj.index
    }
  }
  return val
};
var min = function (lists) {
  let temp;
  let index;
  for (let i = 0; i < lists.length; i++) {
    if (!lists[i]) {
      lists.splice(i, 1)
      i--
      continue
    }
    temp = isNaN(temp) ? lists[i].val : temp
    index = isNaN(index) ? 0 : index
    if (lists[i].val < temp) {
      temp = lists[i].val
      index = i
    }
  }
  if (lists[index]) {
    lists[index] = lists[index].next
  }
  return temp;
}

var allEmpty = function (lists) {
  let cnt = 0;
  let index;
  for (let i in lists) {
    if (!!lists[i]) {
      cnt++;
      index = i;
    }
  }
  return {
    cnt,
    index
  }
}


function ListNode(val) {
  this.val = val;
  this.next = null;
}