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
//     if(!this.data[address]) this.data[address] = []
//     this.data[address].push([key,value])
//     return this
//   }
//   get(key) {
//     let address = this._hash(key)
//     if(this.data[address]) {
//       return this.data[address]
//     }
//   }
// }

// const myHashTable = new HashTable(50);
// console.log(myHashTable.set('grapes', 10000))
// console.log(myHashTable.set('apples', 9))
// console.log(myHashTable.get('grapes'))
// console.log(myHashTable.get('apples'))


// class Node {
//   constructor(value) {
//     this.value = value,
//     this.next = null
//   }
// }

// class Queue {
//   constructor() {
//     this.front = null,
//     this.back = null,
//     this.length = 0
//   }
//   enqueue(value) {
//     let newNode = new Node(value)
//     if(this.front === null) {
//       this.front = newNode
//       this.back = newNode
//       this.length ++
//       return this
//     } else {
//       this.back.next = newNode
//       this.back = newNode
//       this.length ++
//       return this
//     }

//   }
// }

// const myQueue = new Queue()

// console.log(myQueue.enqueue('tony'))
// console.log(myQueue.enqueue('peter'))
// console.log(myQueue.enqueue('steve'))
// console.log(myQueue.enqueue('eddie'))
// const array1 = [11,2,3,4,5,6,7,8,9,55]
// const array2 = [10,11,12,13,14,15]

// const twoArrays = (array1, array2) => {
//   let map = {}
//   for(let i = 0 ; i < array1.length ; i ++) {
//     if(!map[array1[i]]) {
//       const item = array1[i]
//       map[item] = true
//     }
//   }
//   for(let j = 0 ; j < array2.length ; j ++) {
//     if(map[array2[j]]) return true
//   }

//   console.log(map)
//   return false 
// }

// console.log(twoArrays(array1, array2))
// console.log(new Float32Array(10))
// const bubbleSort = array => {
  //   const length = array.length
  //   for(i = 0 ; i < length ; i ++) 
  //   {
    //     for(j = 0 ; j < length ; j ++) 
    //     {
      //       if(array[j] > array[j+1])
      //       {
        //         let temp = array[j]
        //         array[j] = array[j+1]
        //         array[j+1] = temp
        //       }
        //     }
        //   }
        //   return array
        // }
        
        // console.log(bubbleSort(array1))
        // const array1 = [10,45,67,32,88,2]


        
        // const insertionSort = array1 =>
        // {
        //   let length = array1.length
        //   for(let i = 0 ; i < length ; i ++)
        //   {
        //     if(array1[i] < array1[i + 1]) 
        //     {
        //       console.log('hurray')
        //       array1.unshift(array1.splice(i,1)[0])
        //      }
        //   } 
        //  return array1
        // }

        // console.log(insertionSort(array1))

        // class Node {
        //   constructor(value){
        //     this.left = null;
        //     this.right = null;
        //     this.value = value;
        //   }
        // }
        
        // class BinarySearchTree {
        //   constructor(){
        //     this.root = null;
        //   }
        //   insert(value){
        //     //Code here
        //     let newNode = new Node(value)
        //     let currentNode = this.root 
        //     if(this.root === null)
        //     {
        //       this.root = newNode
        //       return this
        //     } else {
        //       //turning left
        //       while(true) {
        //         if(value < currentNode.value) {
        //         if(currentNode.left === null) 
        //         {
        //           currentNode.left = newNode
        //           return this
        //         }
        //         else 
        //         {
        //           currentNode = currentNode.left 
        //         }
        //       }
        //         // turning right 
        //         if(value > currentNode.value) {
        //         if(currentNode.right === null) 
        //         {
        //           currentNode.right = newNode
        //           return  this
        //         } else 
        //         {
        //           currentNode = currentNode.right 
        //         }
        //       }
        //     }
        //     }
        //   }
        //   lookup(value){
        //     //Code here
        //   }
        //   // remove
        // }
        
        // const tree = new BinarySearchTree();
        // console.log(tree.insert(9))
        // console.log(tree.insert(4))
        // console.log(tree.insert(6))
        // console.log(tree.insert(20))
        // console.log(tree.insert(170))
        // console.log(tree.insert(15))
        // console.log(tree.insert(1))
        // JSON.stringify(traverse(tree.root))
        
        // //     9
        // //  4     20
        // //1  6  15  170
        
        // function traverse(node) {
        //   const tree = { value: node.value };
        //   tree.left = node.left === null ? null : traverse(node.left);
        //   tree.right = node.right === null ? null : traverse(node.right);
        //   return tree;
        // }

   
        //Answer:
        // 0-->1 2 
        // 1-->3 2 0 
        // 2-->4 1 0 
        // 3-->1 4 
        // 4-->3 2 5 
        // 5-->4 6 
        // 6-->5
//  const numbers = [9,4,6,2,1,5,6,8,3,4,0]
// const twoSum = (array, sum) =>
// {
//   let resultArray = []
//   let hashTable = []
//   for(let i = 0 ; i < array.length ; i ++) 
//   {
//     hashTable.push(array[i])
//     let opposite = sum - array[i]
    
//     if(hashTable.indexOf(opposite) !== -1) resultArray.push([array[i], opposite])
//   }
//   return resultArray
// }
// console.log(twoSum(numbers, 11))

// const twoSum = (array, sum) => 
// {
  //   let pairs = []
  //   let hashTable = []
  //   for(let i = 0 ; i < array.length ; i ++) 
  //   {
    //     let counter = sum - array[i]
    //     let currentNumber = array[i]
    //     if(hashTable.indexOf(counter) !== -1) pairs.push([currentNumber, counter])
    //     hashTable.push(currentNumber)
    //   }
    //   return pairs 
    // }
    
    // console.log(twoSum(numbers, 10))
    
    // const bubbleSort = array =>
    // {
      //   for(i = 0 ; i < array.length ; i ++) 
      //   {
        //     for(j = 0 ; j < array.length ; j ++)
        //     {
          //       if(array[j] < array[j-1])
          //         {
            //           let temp = array[j]
            //           array[j] = array[j - 1]
            //           array[j - 1] = temp
            //         }
            //     }
            //   } return array
            // }
            
            // console.log(bubbleSort(numbers))
            
            // const selectionSort = array => 
            // {
              //   let length = array.length
              //   for(i = 0 ; i < length ; i ++)
              //   {
                //     let min = i 
                //     let temp = array[i]
                //     for(j = i + 1 ; j < length ; j ++)
                //     {
                  //       if(array[j] < array[min])
                  //       {
                    //         min = j
                    //       }
                    //     }
                    //     array[i] = array[min]
                    //     array[min] = temp 
                    
                    //   }
                    //   return array
                    // }
                    
                    // console.log(selectionSort(numbers))
                    
  //  const numbers = [9,4,6,2,1,5,6,8,3,4,0]
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
//    const insertionSort = array =>
//      {
//     const length = array.length
//   for(let i = 0 ; i < length ; i ++)
//   {
//     console.log('this is i ', i,'at',array[i], array)
//     if(array[i] < array[0])
//     {
//       array.unshift(array.splice(i,1)[0])
//       // console.log(array)
//     } else 
//     {
//       if(array[i] < array[i -1])
//       {
//         for(let j = 1; j < i ; j ++)
//         {
//           console.log('this is j', j,'at',array[j], array)
//           if(array[i] >= array[j-1] && array[i] < array[j])
//           {
           
//             array.splice(j,0,array.splice(i,1)[0])

//             console.log('this is j after splice', j,'at',array[j], array)
//           }
//         }
//       }
//     }
//   }

// }
// insertionSort(numbers)
// console.log(numbers)



// function insertionSort(array) {
//   const length = array.length;
// 	for (let i = 0; i < length; i++) {
// 		if (array[i] < array[0]) {
//       //move number to the first position
//       array.unshift(array.splice(i,1)[0]);
//     } else {
//       // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
//       if (array[i] < array[i-1]) {
//         //find where number should go
//         for (var j = 1; j < i; j++) {
//           if (array[i] >= array[j-1] && array[i] < array[j]) {
//             //move number to the right spot
            // array.splice(j,0,array.splice(i,1)[0]);
//           }
//         }
//       }
//     }
// 	}
// }

// insertionSort(numbers);
// console.log(numbers);

// const fibbonacciRecursive = num =>
// {
//   if(num < 2) return num 
//   return fibbonacciRecursive(num -1) + fibbonacciRecursive(num - 2)
// }

// console.log(fibbonacciRecursive(8))

// const array1 = [1,2,3,4,5,6,7,8,9]
// const array2 = [11,12,13,14]

// const compareArrays = (array1, array2) =>
// {
//   let map = {}
//   for(i = 0 ; i < array1.length ; i ++)
//   {
//     if(!map[array1[i]]) 
//     {
      
//       const item = array1[i]
//       map[item] = true
//     }
//   }
//   return map
// }

// console.log(compareArrays(array1,array2))

  const numbers = [9,40,1,200,1,55,6,6,6,6,89,3,3,3,3,3,3,4,0]
// const selectionSort = array => 
// {
//   for(i = 0 ; i < array.length ; i ++)
//   {
//     console.log('this is i', array[i])
//     let min = i
//     let temp = array[i]
//     for(let j = i + 1 ; j < array.length ; j ++)
//     {
//       console.log('first tick of j', j)
//       if(array[j] < array[min])
//       {
//         console.log('this is j','index',j, array[j])
//         min = j
//         console.log('this is array[min]', array[min])
        
//       }
      
      
      
//     }
//     array[i] = array[min]
//     array[min] = temp 
    
//   }
//   return array 
// }

// console.log(selectionSort(numbers))

const modeSelect = array =>
{
//   let map = {}
//   for(i = 0 ; i < array.length ; i ++) 
//   {
//     if(!map[array[i]]) map[array[i]] = 0
//     map[array[i]] ++
//   }
//   let maxOccurence = 0
//   let mode = []
//   console.log(map)
//   for(let p in map) {
//     console.log(map[p])
//     if(map[p]  > maxOccurence)
//     {
//       maxOccurence = map[p]
//       mode = p
//     }
//   }
//   return mode 
// }

// console.log(modeSelect(numbers))