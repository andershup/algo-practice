// class HashTable {
//     constructor(size){
//       this.data = new Array(size);
//     }
  
//     _hash(key) {
//       let hash = 0;
//       for (let i =0; i < key.length; i++){
//           hash = (hash + key.charCodeAt(i) * i) % this.data.length
//       }
//       return hash;
//     }

//     // set(key , value) {
//     //   let address = this._hash(key)
//     //   if(!this.data[address])
//     //   {
//     //     this.data[address] = []
//     //   }
//     //   this.data[address].push([key, value])
//     //   return this.data
//     // }
//     // get(key) {
//     //   let address = this._hash(key)
//     //   let currentBucket = this.data[address]
//     //   if(currentBucket) 
//     //   {
//     //     for(let i = 0 ; i < currentBucket.length ; i ++) 
//     //     {
//     //       if(currentBucket[i][0] === key) 
//     //       {
//     //         return currentBucket[i][1]
//     //       } else 
//     //       {
//     //         return 'data does not exist'
//     //       }
//     //     }
//     //   }
//     // }
//     set(key,value) {
//         let address = this._hash(key)
//         if(!this.data[address]) {
//             this.data[address] = []
//         }
//         this.data[address].push([key, value])
//         return this
//     }
//     get(key)  {
//         let address = this._hash(key) 
//         let currentBucket = this.data[address]
//         if(currentBucket) {
//             for(let i = 0 ; i < currentBucket.length ; i ++) {
//                 if(currentBucket[i][0] === key) {
//                     return currentBucket[i][1]
//                 }
//             } 
//         } else return false 
        
//     }



  

// }

  
//   const myHashTable = new HashTable(5);
// console.log(  myHashTable.set('grapes', 10000))
//  console.log( myHashTable.get('grapes'))
//   myHashTable.set('apples', 9)
//  console.log(myHashTable.get('apples'))

// function fibonacciRecorsion(n) {
//     if(n < 2) {
//         console.log('this is n:',n)
//         return n
//     }
//     console.log('this is big n',n)
//     return fibonacciRecorsion(n-1) + fibonacciRecorsion(n-2)
// }
// console.log('answer:', fibonacciRecorsion(8))


// const twoSum = (arr, sum) => {
//     let resultArray = []
//     let tempArray = []
//     for(let i = 0 ; i < arr.length ; i ++)
//     {
//         let currentNumber = arr[i]
//         let opposite = sum - currentNumber
//         if(tempArray.indexOf(opposite) !== -1) {
//             resultArray.push([currentNumber, opposite])
//         }
//         tempArray.push(currentNumber)
//         console.log(currentNumber)
//     }
//     return resultArray
// }

// console.log(twoSum([1,2,3,4,5,6,7], 10))

// const factoral = (num) => {
//     if(num === 2) {
//         return 2
//     }
//     return num * factoral(num - 1)
// }
// console.log(factoral(4))

// const fibonacciRecorsion = (num) => {
//     if(num < 2) {
//         return num 
//     }
//     return fibonacciRecorsion(num-1) + fibonacciRecorsion(num-2)
// }

// console.log(fibonacciRecorsion(6))



//Implement a function that reverses a string using iteration...and then recursion!

// function reverseStringRecursive (str) {
//   let t0 = performance.now()
 
//     if (str === "") {
//       let t1 = performance.now()
//       console.log('to get to the top of the stack took ' + (t1 - t0) +             ' milliseconds')
//       return "";
//     } else {
//       console.log(str.substr(1), '+', str.charAt(0))
      
//       return reverseStringRecursive(str.substr(1)) + str.charAt(0);
//     }
//   }
  
//  console.log( reverseStringRecursive('abcdefg'));



// const reverseString = (str) => {
    
//     if(str === '') {
//         return ''
//     } else {
//     return reverseString(str.substr(1)) + str.charAt(0)
// }
// }

// console.log(reverseString('yoyo mastery'))

// class Node {
//     constructor(value){
//       this.value = value;
//       this.next = null;
// }
// }

// class Stack {
//   constructor(){
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   peek() {
//   }
//   push(value){
  

//   }
//   pop(){
 
//   }
  
//   //isEmpty
// }

// const myStack = new Stack();
// console.log(myStack.push('Discord'))
// console.log(myStack.push('Udemy'))
// console.log(myStack.push('google'))
// console.log(myStack.pop())



// Discord
// Udemy
// google

// const stringReversal = (str) => {
//   if(str === '') {
//     return ''
//   }
//   return stringReversal(str.substr(1)) + str.charAt()
// }


// class Node {
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }
// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value,
//       next: null
//     }
//     this.tail = this.head
//     this.length = 1 
//   }
//   append(value) {
//     const newNode = new Node(value)
//     this.tail.next = newNode
//     this.tail = newNode
//     this.length++
//     return this
//   }
//   prepend(value) {
//     const newNode = new Node(value)
//     newNode.next = this.head
//     this.head = newNode
//     this.length ++
//     return this
//   }
//   printToList() {
//     let currentNode = this.head
//     let array = []
//     while(currentNode !== null) {
//       array.push(currentNode.value)
//       currentNode = currentNode.next
//     }
//     return array 
//   }
//   insert(index, value) {
//     const newNode = new Node(value) 
//     const leader = this.traverse(index-1)
//     const pointerHolder = leader.next
//     leader.next = newNode
//     newNode.next = pointerHolder
//     return this.printToList()
    
//   }
//   traverse(index) {
//     let counter = 0 
//     let currentNode = this.head
//     while(counter !== index) {
//       currentNode = currentNode.next
//       counter++
//     }
//     return currentNode
//   }
//   append(value) {
//     let newNode = new Node(value)
//     this.tail.next = newNode
//     this.tail = newNode
//     this.length ++
//     return this
//   }
//   prepend(value) {
//     let newNode = new Node(value)
//     newNode.next = this.head
//     this.head = newNode
//     this.length ++
//     return this
//   }
//   printToList() {
//     let array = []
//     let currentNode = this.head
//     console.log(currentNode)
//     while(currentNode !== null) {
//       array.push(currentNode.value)
//       currentNode = currentNode.next
//     }
//     return array
//   }
//   traverse(index) {
//     if(index < 1) {
//       return this.head 
//     }
//     let counter = 0 
//     let currentNode = this.head
//     while(counter !== index) {
//       currentNode = currentNode.next
//       counter ++
//     }
//     return currentNode
//   }
//   insert(index, value) {
   
//     let currentNode = new Node(value)
//     let leader = this.traverse(index-1)
//     let afterNodeHolder = leader.next
//     currentNode = leader.next
//     currentNode.next = afterNodeHolder
//     return currentNode
//   }



   // }
    // reverse () {
    //   if(!this.head.next) {
    //       return this.head
    //   }
    //     let first = this.head 
    //     this.tail = this.head  
    //     let second = first.next
    //     while(second) {
    //         const temp = second.next
    //         second.next = first 
    //         first = second
    //         second = temp
    //     }
    //     this.head.next = null
    //     this.head = first  
    //     return this
    //     }

//     remove(index) {
//       if(index === 0) {
//         this.head = this.head.next 
//       }
   
//       let leader = this.traverse(index - 1)
//       let follower = this.traverse(index).next 
//       leader.next = follower
//     }


    
// } 

  


// const myNewList = new LinkedList(10)

// console.log(myNewList.append(555))
// console.log(myNewList.append(5))
// myNewList.append(55)
// console.log(myNewList.prepend(22))
// // console.log(myNewList.insert(2,777))
// console.log(myNewList.printToList())
// console.log(myNewList.remove(4))
// // console.log(myNewList.reverse())
// console.log(myNewList.printToList())



// COME BACK TO THIS ONE AND REVERSE THE INCEPTION() AND 'ITERATE' ORDER
// let counter = 0 
// function inception() {
//   debugger
//   if(counter > 3) {
//     return 'done'
//   }
//   counter ++
//    return  inception() + 'iterate' 
// }
// console.log(inception())

// const fibonacci = (num) =>  {
//     if(num <2) {
//       return num 
//     }
//     return fibonacci(num -1) + fibonacci(num -2)
// }

// console.log(fibonacci(4))

// const factoral = (num) => {
//   if(num < 2) {
//     return num
//   }
//   return num *  factoral(num -1)
// }

// console.log(factoral(4))

// function recursiveString (str) {
//   if(str === '') return ''
//   return recursiveString(str.substr(1)) + str.charAt(0)
// }

// console.log(recursiveString('this is hello'))

// const twoSum = (array, sum) =>  {
//   let pairs = []
//   let HashTable = []

//   for(let i = 0 ; i < array.length ; i ++) {
//     let currentNumber = array[i]
//     let opposite = sum - currentNumber
//     if(HashTable[opposite] !== -1 && currentNumber !== opposite) {
//       pairs.push([currentNumber, opposite])
//     }
//     HashTable.push(currentNumber)
//   }
//   return pairs 
// }

// console.log(twoSum([1,2,3,4,5,5,6,7,8,9],10))



// function recursiveStrReversing(str) {
//     if(str === '') return ''
//     return recursiveStrReversing(str.substr(1)) + str.charAt(0)
// }

// console.log(recursiveStrReversing('abcdefghijklmn'))

// const fibonacciRecorsion = (num) =>  {
//     if(num < 2) return num
//     return fibonacciRecorsion(num -1) + fibonacciRecorsion(num - 2) 
// }

// console.log(fibonacciRecorsion(8))

// function factoralRecursion (num) {
//     debugger
//     if(num === 0) {
//         return 1 
//     }
//     return factoralRecursion(num - 1) * num 
// }

// console.log(factoralRecursion(4))

  
  
  //Discord
  //Udemy
  //google

// function recursiveFactorial(num) {
//   if(num === 0) return 1
//   return recursiveFactorial(num -1) * num
// }

// console.log(recursiveFactorial(5))


// console.log(getMean([1,2,3,4,5,6,7,8,9,10]))


// const recursiveString = str => {
//   if(str === '') return ''
//   return recursiveString(str.substr(1)) + str.charAt(0)
// }

// console.log(recursiveString('abcdefgh'))



// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     const newNode = {
//       value: value,
//       next: null
//     }
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }
//   prepend(value) {
//     const newNode = {
//       value: value,
//       next: null
//     }
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
//   printList() {
//     const array = [];
//     let currentNode = this.head;
//     while(currentNode !== null){
//         array.push(currentNode.value)
//         currentNode = currentNode.next
//     }
//     return array;
//   }
//   insert(index, value){
//     //Check for proper parameters;
//     if(index >= this.length) {
//       console.log('yes')
//       return this.append(value);
//     }
    
//     const newNode = {
//       value: value,
//       next: null
//     }
//     const leader = this.traverseToIndex(index-1);
//     const holdingPointer = leader.next;
//     leader.next = newNode;
//     newNode.next = holdingPointer;
//     this.length++;
//     return this.printList();
//   }
  // traverseToIndex(index) {
  //   //Check parameters
  //   let counter = 0;
  //   let currentNode = this.head;
  //   while(counter !== index){
  //     currentNode = currentNode.next;
  //     counter++;
  //   }
  //   return currentNode;
//   }

// }

// let myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
// console.log(myLinkedList.printList())
// // console.log(myLinkedList.remove(2))
// console.log(myLinkedList.reverse())

// var bunny = {
//   name: 'Usagi',
//   showName: function() {
//     alert(this.name);
//   }
// };
// bunny.showName()


// var bunny = {
//   name: 'Usagi',
//   tasks: ['transform', 'eat cake', 'blow kisses'],
//   showTasks: function() {
//     this.tasks.forEach(function(task) {
//       alert(this.name + " wants to " + task);
//     });
//   }
// };



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
//     let newNode = new Node(value)
//     if(this.root === null) {
//       this.root = newNode
//     }
//     else 
//     {
//       let currentNode = this.root
//       while(true) 
//       {
//         if(value < currentNode.value) {
//           if(!currentNode.left) {
//             currentNode.left = newNode
//             return this
//           }
//           currentNode = currentNode.left
//       }
//       if(value > currentNode.value) 
//       {
//         if(!currentNode.right) 
//         {
//           currentNode.right = newNode
//           return this
//         }
//         currentNode = currentNode.right 
        
//       }
      
//     }
//     return this 
//   }
// }
//   lookup(value){
//     if(!this.root) {
//       return false
//     }
//     let currentNode = this.root
//     let parentNode = null
//     while(currentNode) 
//     {
//       if(currentNode.value === value) 
//       {
//         return currentNode 
//       }
//       else if(value < currentNode.value ) 
//       {
        
//         currentNode = currentNode.left
//       }
//       else if(value > currentNode.value) 
//       {
        
//         currentNode = currentNode.right
//       }
//     }
//     return false 
//   }
//   remove(value) {
//     let currentNode = this.root
//     let parentNode = null
//     while(currentNode) 
//     {
//       if(value < currentNode.value)
//       {
//         parentNode = currentNode

//         currentNode = currentNode.left
//       }
//       else if(value > currentNode.value)
//       {
//         parentNode = currentNode
//         currentNode = currentNode.right
//       }
//       else if(value === currentNode.value) 
//       {
//         // so from here we go to work

//         // if current has no right child
//         if(currentNode.right === null) {
//           if(parentNode === null) {
//             this.root = currentNode.left
//           }
//           else {
//             if(currentNode.value > parentNode.value) {
//             parentNode.right = currentNode.left 
//           }
//           if(currentNode.value < parentNode.value) {
//             parentNode.left = currentNode.left
//           }
//         }
//       }
//       //if currentNode has no left child
//         if(currentNode.left === null) {
//           if(parentNode === null) {
//             this.root = currentNode.right
//           }
//           else 
//           {
//             if(currentNode.value > parentNode.value) 
//             {
//               parentNode.right = currentNode.right
//             }
//             if(currentNode.value < parentNode.value) 
//             {
//               parentNode.left = currentNode.right 
//             }
//           }
//         }
//         // if currentNode has two children
        
      
   
//       return this 
//     }
//     return false 
//   }
// }

// const tree = new BinarySearchTree();
// console.log(tree.insert(9))
// console.log(tree.insert(4))
// console.log(tree.insert(6))
// console.log(tree.insert(20))
// console.log(tree.insert(170))
// console.log(tree.insert(15))
// console.log(tree.insert(1))
// console.log(tree.lookup(11))
// console.log(tree.remove(170))
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




// const myArray = [1,2,3,4,5,6,7]
// const mySecondArray = [55]
// function checkArrays(myArray, mySecondArray) {
// let map = {}
// for(let i = 0 ; i < myArray.length ; i ++) 
// {
//   if(!map[myArray[i]])
//   {
//     const item = myArray[i]
//     map[item] = true
//   }
// }
// for(let j = 0 ; j < mySecondArray.length ; j ++) 
// {
//   if(map[mySecondArray[j]]) 
//   {
//     return true
//   }
//   else return false
// }

// }

// console.log(checkArrays(myArray,mySecondArray))

// function secondOne(myArray, mySecondArray) {
//   return myArray.some(item => mySecondArray.includes(item ))
// }
// console.log(secondOne(myArray, mySecondArray))

const  mode = array => {
  let map = {}
  for(let i = 0 ; i < array.length ; i++) {
    if(!map[array[i]]) map[array[i]] = 0
    map[array[i]] ++
  }
  console.log(map)
  let maxNumber = 0
  let modes = []
  for(num in map) {
    console.log(map[num])
    if(map[num] > maxNumber){
       maxNumber = map[num]
    modes = num }
  }
  return modes 
}

console.log(mode([1,1,1,3,4,5,6,6,6,6,6,8,9,0,0,0]))