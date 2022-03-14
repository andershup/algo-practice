// const Array = [1,2,5,3,4,7,7,7,7,7,77,88,5]

// const selectionSort = array => {
//   const length = array.length
//   for(i = 0 ; i < length ; i ++ ) 
//   {
//     let min = i
//     let temp = array[i]
//     for(j = i+1 ; j < length ; j ++) {
//       if(array[j] < array[min] ) {
//         min = j
//       }
//       array[i] = array[min]
//       array[min] = temp 

//     }
//   }
//   return array 
// }

// console.log(selectionSort(Array))


// const Mode = array => {
  
//   let map = {}
//   array.forEach(number => {
    
//     if(!map[number]) map[number] = 0
//     map[number] ++  
//   })
//   let maxMode = 0
//   let mode = []
//   for(let key in map) {
//     if(map[key] > maxMode) {
//       mode = key
//       maxMode = map[key]
//     }
//   }
//   return mode
// }

// console.log(Mode(Array))




// class Stack {
//   constructor(){
//     this.array = []
//   }
//   peek() {
//     return this.array[this.array.length-1]
//   }
//   push(value){
//     this.array.push(value)
//     return this;
//   }
//   pop(){
//     this.array.pop()
//     return this;
//   }
//   //isEmpty
// }

// const myStack = new Stack();
// console.log(myStack.peek())
// console.log(myStack.push('google'))
// console.log(myStack.push('udemy'))
// console.log(myStack.push('discord'))
// console.log(myStack.peek())
// console.log(myStack.pop())
// console.log(myStack.pop())
// console.log(myStack.pop())


//Discord
//Udemy
//google

// const array1 = [1,2,3,4,5,6,7,8,9,0]
// const array2 = [1,20,30,40,50]

// const compare = (array1, array2) => {
//   let map = {}
//   array1.forEach(element => {
//     if(!map[element]) map[element] = []
//     let item = map[element]
//     item = true
//   })
//   array2.forEach(element => {
//     if(map[element] === true) return true
//   })
//   return false
// }

// console.log(compare(array1,array2))\

// class HashTable {
//   constructor(size){
//     this.data = new Array(size);
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i =0; i < key.length; i++){
//         hash = (hash + key.charCodeAt(i) * i) % this.data.length
//     }
//     return hash;
//   }
//   set(key, value) {
//     let address = this._hash(key)
//     console.log(key)
//     console.log(address)
//     if(!this.data[address]){
//        this.data[address] = [] }
//     this.data[address].push([key, value])
//     return this.data
//   }
  // set(key, value) {
  //   let address = this._hash(key)
  //   console.log(key)
  //   console.log(address)
  //   if (!this.data[address]) {
  //     this.data[address] = [];
  //   }
  //   this.data[address].push([key, value]);
  //   return this.data;
  // }
//   get(key) {
//     const address = this._hash(key)
//     console.log(key)
//     console.log(address)
//     if(!this.data[address]) {
//        return 'ooops does not excist' }
//      else  { return this.data[address].value } 
    
//   }
// }

// const myHashTable = new HashTable(50);
// console.log(myHashTable.set('grapes', 10000))
// console.log(myHashTable.get('grapes'))
// console.log(myHashTable.set('apples', 9))
// console.log(myHashTable.get('apples'))


// class HashTable {
//   constructor(size){
//     this.data = new Array(size);
//     // this.data = [];
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i =0; i < key.length; i++){
//         hash = (hash + key.charCodeAt(i) * i) % this.data.length
//     }
//     return hash;
//   }

//   set(key, value) {
//     let address = this._hash(key);
//     console.log(address)
//     if (!this.data[address]) {
//       this.data[address] = [];
//     }
//     this.data[address].push([key, value]);
//     return this.data;
//   }

//   get(key){
//     const address = this._hash(key);
//     console.log(address)
//     const currentBucket = this.data[address]
//     if (currentBucket) {
//       for(let i = 0; i < currentBucket.length; i++){
//         if(currentBucket[i][0] === key) {
//           return currentBucket[i][1]
//         }
//       }
//     }
//     return undefined;
//   }
// }

// const myHashTable = new HashTable(50);
// console.log(myHashTable.set('grapes', 10000))
// console.log(myHashTable.get('grapes'))
// console.log(myHashTable.set('apples', 9))
// console.log(myHashTable.get('apples'))

class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null,
    this.bottom = null
    this.length = 0
  }
  push(value) {
    let newNode = new Node(value)
    if(this.bottom === null) {
      this.top = newNode
      this.bottom = newNode
      this.length ++
      return this
    }
    else 
    {
      this.bottom.next = newNode
      this.bottom = newNode
      this.length ++
      return this
    }
  }
  peek() {
    return this.top.value
  }
  pop() {
    this.top = this.top.next
    return this
  }
}

const myStack = new Stack()

console.log(myStack.push(3))
console.log(myStack.push(30))
console.log(myStack.push(300))
console.log(myStack.push(3000))
console.log(myStack.push(30000))
console.log(myStack.peek())
console.log(myStack.pop())
