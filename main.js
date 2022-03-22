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

// class Graph { 
//   constructor() { 
//     this.numberOfNodes = 0;
//     this.adjacentList = {
//     }; 
//   } 
//   addVertex(node)  { 
//    if(!this.adjacentList[node]) this.adjacentList[node] = []
//     return this
//   } 
//   addEdge(node1, node2) { 
//     //undirected Graph 
//     this.adjacentList[node1].push(node2)
//     this.adjacentList[node2].push(node1)
//     return this
//   } 
// //   showConnections() { 
// //     const allNodes = Object.keys(this.adjacentList); 
// //     for (let node of allNodes) { 
// //       let nodeConnections = this.adjacentList[node]; 
// //       let connections = ""; 
// //       let vertex;
// //       for (vertex of nodeConnections) {
// //         connections += vertex + " ";
// //       } 
// //       console.log(node + "-->" + connections); 
// //     } 
// // } 
//  showConnections() {
//   let allNodes = Object.keys(this.adjacentList)
  
//   for(let node of allNodes) {

//    let nodeConnections = this.adjacentList[node]
//    let connections = ''
//   let vertex 
//     for(vertex of nodeConnections)
    
//       connections += vertex + " "
      
//       console.log(node + '-->' + connections)
//     }
// }

 

// const myGraph = new Graph();
// console.log(myGraph.addVertex('0'))
// console.log(myGraph.addVertex('1'))
// console.log(myGraph.addVertex('2'))
// console.log(myGraph.addVertex('3'))
// console.log(myGraph.addVertex('4'))
// console.log(myGraph.addVertex('5'))
// console.log(myGraph.addVertex('6'))
// console.log(myGraph.addEdge('3', '1'))
// console.log(myGraph.addEdge('3', '4'))
// console.log(myGraph.addEdge('4', '2'))
// console.log(myGraph.addEdge('4', '5'))
// console.log(myGraph.addEdge('1', '2'))
// console.log(myGraph.addEdge('1', '0'))
// console.log(myGraph.addEdge('0', '2'))
// console.log(myGraph.addEdge('6', '5'))

// myGraph.showConnections(); 
// //Answer:
// // 0-->1 2 
// // 1-->3 2 0 
// // 2-->4 1 0 
// // 3-->1 4 
// // 4-->3 2 5 
// // 5-->4 6 
// // 6-->5

// const arr = [3, 5, 7];
// arr.foo = 'hello';

// for (let i in arr) {
//    console.log(i); // logs "0", "1", "2", "foo"
// }

// for (let i of arr) {
//    console.log(i); // logs 3, 5, 7
// }


// const months = ['Jan', 'March', 'April', 'June'];

// const trial = months.splice(2,1)[0]
// console.log(trial)

// const numbers = [99,44,6,2,1,5,63,87,283,4,0]

// function insertionSort(array) {
//   const length = array.length
//   for(let i = 0 ; i < length ; i ++) {
//     if(array[i] < array[0]) {
//       console.log('this is i before shifting' ,array[i], array)
//       array.unshift(array.splice(i,1)[0])
//       console.log('this is i in the first condition after shifting', array[i],array)
//   } else 
//   {
//     if(array[i] < array[i-1]) {
//       console.log('goes to the second condition')
//       for(let j = 1 ; j < i ; j ++) {
//         console.log('this is j value', array[j])
//         console.log('this is i value', array[i])

//         if(array[i] >= array[j-1] && array[i] < array[j]) {
//         array.splice(j,0,array.splice(i,1)[0])
//       }
//     }
//   }
// }

// }
// }

// console.log(insertionSort(numbers))

// add a method insert() to the linked list that adds a node to the specified index.

// const reverseStringRecursive = str => {
//   if(str === '') return ''
//   return reverseStringRecursive(str.substr(1)) + str.charAt(0)


// }

// console.log(reverseStringRecursive('abcdefg'))

// const factoralRecursive = num => {
//   if(num < 3) return num 
//   return factoralRecursive(num - 1) * num 
// }

// console.log(factoralRecursive(8))
// class Node {
//   constructor(value) {
//     this.value = value
//     this.left = null,
//     this.right = null
//   }
// }
// class BinaryTree {
//   constructor() {
//     this.root = null
//     this.left = null,
//     this.right = null
//   }
//   insert(value)  {
//     let newNode = new Node(value)
//     if(this.root === null) {
//       this.root = newNode
//       return this
//     }
//     else {
//       // Going left
//       let currentNode = this.root
//       while(true) {
//       if(value < currentNode.value) {
//         if(!currentNode.left) {
//           currentNode.left = newNode
//           return this
//         }
//         else currentNode = currentNode.left
//       } else {
//         //going right
//         if(!currentNode.right) {
//           currentNode.right = newNode
//           return this
//         }
//         else {
//           currentNode = currentNode.right
//         }
//       }
//     }
//     }
//   }
// }

// const myTree = new BinaryTree()

// console.log(myTree.insert(8))
// console.log(myTree.insert(3))
// console.log(myTree.insert(1))
// console.log(myTree.insert(10))
// console.log(myTree.insert(11))

// const bubbleSort = array => {
//   for(i = 0 ; i < array.length ; i ++) {
//     console.log(i)
//     for(j = 0 ; j < array.length ; j ++) {
//       console.log('this is j', j)
//       if(array[j] < array[j-1]) {
//         let temp = array[j-1]
//         array[j-1] = array[j]
//         array[j] = temp 
//         console.log(array)

//       }
//     }
//   }
//   return array 
// }
// console.log(bubbleSort([1,6,7,89,3,5,6,7]))


// const numbers = [99,44,6,2,1,5,63,87,283,4,0]

// function selectionSort(array) {
//   const length = array.length
  
//   for(i = 0; i < length ; i ++) {
//     let min = i
//     let temp = array[i]
//     for(j = i + 1 ; j < length ; j ++) {
//       if(array[j] < array[min]) {
//         min = j
//       }
//     }
   
//     array[i] = array[min]
//     array[min] = temp 
//   }
//   return array 
// }

// console.log(selectionSort(numbers))


// const selectionSort = array => {
//   const length = array.length
//   for(i = 0 ; i < length ; i ++) {
//     let red = i
//     let temp = array[i]
//     for(let j = i + 1 ; j < length ; j ++) {
//       if(array[j] < array[red]) {
//         red = j 
//       }
//     }
//     array[i] = array[red]
//     array[red] = temp 

//   }
//   return array 
// }


// class Stack {
//   constructor(){
//     this.array = []
//   }
//   peek() {
//     return this.array[this.array.length-1]
//   }
//   push(value){
//   this.array.push(value)
//   return this
//   }
//   pop(){
//     return this.array.pop()
//   }
//   //isEmpty
// }

// const myStack = new Stack();
// console.log(myStack.push('google'))
// console.log(myStack.push('udemy'))
// console.log(myStack.push('discord'))
// console.log(myStack.peek())
// console.log(myStack.peek())
// console.log(myStack.pop())
// console.log(myStack.pop())
// console.log(myStack.pop())


//Discord
//Udemy
//google


// const numbers = [99,44,6,2,1,5,63,87,283,4,0]

// const reverseArray = array => {
//   for(i = 0 ; i < array.length/2 ; i++) {
//     let temp = array[i]
//     let opposite = array[array.length - 1 - i]
//     array[i] = opposite
//     array[array.length - 1 - i] = temp 
//   }
//   return array
// }

// console.log(reverseArray(numbers))


// class Graph { 
//   constructor() { 
//     this.numberOfNodes = 0;
//     this.adjacentList = {
//     }; 
//   } 
//   addVertex(node)  {
//     if(!this.adjacentList[node]) this.adjacentList[node] = []
//     return this

//   } 
//   addEdge(node1, node2) { 
//     //undirected Graph 
//     this.adjacentList[node1].push(node2)
//     this.adjacentList[node2].push(node1)
  
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
// showConnections() {
//   let allNodes = Object.keys(this.adjacentList)
//   for(let node of allNodes) {
//     let nodeConnnections = this.adjacentList[node]
    
//     let connections = ''
//     let vertex 
//     for(vertex of nodeConnnections) {
//       connections += vertex + ' '
     
//     } console.log(node + '-->' + connections)
//   }
// }
// } 

// const myGraph = new Graph();
// console.log(myGraph.addvertex('0'))
// console.log(myGraph.addvertex('1'))
// console.log(myGraph.addvertex('2'))
// console.log(myGraph.addvertex('3'))
// console.log(myGraph.addvertex('4'))
// console.log(myGraph.addvertex('5'))
// console.log(myGraph.addvertex('6'))

// console.log(myGraph.addEdge('3', '1'))
// console.log(myGraph.addEdge('3', '4'))
// console.log(myGraph.addEdge('4', '2'))
// console.log(myGraph.addEdge('4', '5'))
// console.log(myGraph.addEdge('1', '2'))
// console.log(myGraph.addEdge('1', '0'))
// console.log(myGraph.addEdge('0', '2'))
// console.log(myGraph.addEdge('6', '5'))

// console.log(myGraph.showConnections())
// //Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5

class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key)
    if(!this.data[address]) this.data[address] = []
    this.data[address].push([key,value])
    return this
  }
  get(key) {
    let address = this._hash(key)
    if(this.data[address]) {
      return this.data[address]
    }
  }
}

const myHashTable = new HashTable(50);
console.log(myHashTable.set('grapes', 10000))
console.log(myHashTable.set('apples', 9))
console.log(myHashTable.get('grapes'))
console.log(myHashTable.get('apples'))