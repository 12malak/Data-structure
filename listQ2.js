
class ListNode {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
  }
  
  class LinkedList {
      constructor(head = null) {
          this.head = head;
      } 
  
  
  
        reverse(node1) {
          var prev = null;
          var current = node1;
          var next = null;
              while (current != null) {
                  next = current.next;
                  current.next = prev;
                  prev = current;
                  current = next;
              }
              node1 = prev;
              return node1;
          }
          }
  let node1 = new LinkedList(1);
  let node2 = new LinkedList(2);
  let node3 = new LinkedList(3);
  
  node1.next = node2;
  node2.next = node3;
  
  let list = new LinkedList(node1);
  
  console.log(list);
  
  console.log(list.reverse(node1));