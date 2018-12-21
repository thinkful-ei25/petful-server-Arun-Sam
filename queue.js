'use strict';

class _Node{
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
  }

  enqueue(data){
    const node = new _Node(data);

    if(!this.first){
      this.first = node;
    }
    if(this.last){
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue(){
    const node = this.first;
    if(!node){
      return;
    }
    this.first = node.next;
    if(node === this.last){
      this.last = null;
    }
    return node.value;
  }

  isEmpty(){
    return !this.first;
  }

  peek(){
    if(this.first){
      return this.first.value;
    }
    return; 
  }
}

// if(require.main === module){
//   const cats = new Queue();
//   console.log(cats.isEmpty());
//   cats.enqueue('1 cat');
//   cats.enqueue('2 cat');
//   cats.enqueue('red cat');
//   cats.enqueue('blue cat');
//   while(!cats.isEmpty()){
//     console.log(cats.dequeue());
//   }
// }

module.exports = Queue;