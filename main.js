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

// const fibbonacciRecursive = num => {
  
//   if(num < 3) return 1 
//   return fibbonacciRecursive(num - 1) + fibbonacciRecursive(num - 2)
// }

// console.log(fibbonacciRecursive(8))

class Graph { 
  constructor() { 
    this.numberOfNodes = 0;
    this.adjacentList = {
    }; 
  } 
  addVertex(node)  { 
   if(!this.adjacentList[node]) this.adjacentList[node] = []
    return this
  } 
  addEdge(node1, node2) { 
    //undirected Graph 
    this.adjacentList[node1].push(node2)
    this.adjacentList[node2].push(node1)
    return this
  } 
//   showConnections() { 
//     const allNodes = Object.keys(this.adjacentList); 
//     for (let node of allNodes) { 
//       let nodeConnections = this.adjacentList[node]; 
//       let connections = ""; 
//       let vertex;
//       for (vertex of nodeConnections) {
//         connections += vertex + " ";
//       } 
//       console.log(node + "-->" + connections); 
//     } 
// } 
showConnections() {
  let allNodes = Object.keys(this.adjacentList)
  
  for(let node of allNodes) {
   let nodeConnections = this.adjacentList[node]
   let connections = ''
  let vertex 
    for(vertex of nodeConnections)
    
      connections += vertex + " "
      
      console.log(node + '-->' + connections)
    }
}
}
 

const myGraph = new Graph();
console.log(myGraph.addVertex('0'))
console.log(myGraph.addVertex('1'))
console.log(myGraph.addVertex('2'))
console.log(myGraph.addVertex('3'))
console.log(myGraph.addVertex('4'))
console.log(myGraph.addVertex('5'))
console.log(myGraph.addVertex('6'))
console.log(myGraph.addEdge('3', '1'))
console.log(myGraph.addEdge('3', '4'))
console.log(myGraph.addEdge('4', '2'))
console.log(myGraph.addEdge('4', '5'))
console.log(myGraph.addEdge('1', '2'))
console.log(myGraph.addEdge('1', '0'))
console.log(myGraph.addEdge('0', '2'))
console.log(myGraph.addEdge('6', '5'))

myGraph.showConnections(); 
//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5

const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}
