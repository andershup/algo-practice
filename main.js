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
//     // set(key, value) {
//     //   let address = this._hash(key)
//     //   if(!this.data[address]) {
//     //     this.data[address] = []
//     //   }
//     //   this.data[address].push([key, value])
//     //   return this.data
//     // }
//     // get(key) {
//     //   let address = this._hash(key)
//     //   const currentBucket = this.data[address]
//     //   if(currentBucket) {
//     //       for(let i = 0 ; i < currentBucket.length ; i ++) {
//     //       if(currentBucket[i][0] === key)
//     //       {
//     //         return currentBucket[i][1]
//     //       }
//     //     }
//     //   }
//     // }
//     set(key , value) {
//       let address = this._hash(key)
//       if(!this.data[address])
//       {
//         this.data[address] = []
//       }
//       this.data[address].push([key, value])
//       return this.data
//     }
//     get(key) {
//       let address = this._hash(key)
//       let currentBucket = this.data[address]
//       if(currentBucket) 
//       {
//         for(let i = 0 ; i < currentBucket.length ; i ++) 
//         {
//           if(currentBucket[i][0] === key) 
//           {
//             return currentBucket[i][1]
//           } else 
//           {
//             return 'data does not exist'
//           }
//         }
//       }
//     }



  

// }

  
//   const myHashTable = new HashTable(5);
//   myHashTable.set('grapes', 10000)
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
//   debugger
//     if (str === "") {
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




//Discord
//Udemy
//google

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
//   // append(value) {
//   //   const newNode = new Node(value)
//   //   this.tail.next = newNode
//   //   this.tail = newNode
//   //   this.length++
//   //   return this
//   // }
//   // prepend(value) {
//   //   const newNode = new Node(value)
//   //   newNode.next = this.head
//   //   this.head = newNode
//   //   this.length ++
//   //   return this
//   // }
//   // printToList() {
//   //   let currentNode = this.head
//   //   let array = []
//   //   while(currentNode !== null) {
//   //     array.push(currentNode.value)
//   //     currentNode = currentNode.next
//   //   }
//   //   return array 
//   // }
//   // insert(index, value) {
//   //   const newNode = new Node(value) 
//   //   const leader = this.traverse(index-1)
//   //   const pointerHolder = leader.next
//   //   leader.next = newNode
//   //   newNode.next = pointerHolder
//   //   return this.printToList()
    
//   // }
//   // traverse(index) {
//   //   let counter = 0 
//   //   let currentNode = this.head
//   //   while(counter !== index) {
//   //     currentNode = currentNode.next
//   //     counter++
//   //   }
//   //   return currentNode
//   // }
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
// class Node {
//   constructor(value) {
//     this.value = value,
//     this.next = null 
//   }
// }
// class LinkedList  {
//   constructor(value) {
//     this.head = {
//       value,
//       next: null
//     }  
//     this.tail = this.head
//     this.length = 1
//   }
//   printToList () {
//     let currentNode = this.head
//     let array = []
//     while(currentNode !== null) {
//       array.push(currentNode.value)
//       currentNode = currentNode.next  
//     }
//     return array
//   }
//   append(value) {
//     let newNode = new Node(value)
//     this.tail.next = newNode
//     this.tail = newNode
//     this.length ++
//     return this
//   }
//   prepend (value) {
//     let newNode = new Node(value)
//     newNode.next = this.head  
//     this.head = newNode
//     this.length ++
//     return this
//   }
//   traverse(index) { 
//     let indexNode = this.head
//     let counter = 0
//     while(counter !== index) {
//       indexNode = indexNode.next
//       counter ++
//     }
//     return indexNode
//   }
//   insert(index, value) {
//     let newNode = new Node(value)
//     let leader = this.traverse(index - 1)
//     let follower = leader.next
//     leader.next = newNode
//     newNode.next = follower
  
//     this.length ++
//     return this
//   }
//   remove(index) {
//     const leader = this.traverse(index - 1)
//     const nodeToRemove = leader.next
//     const follower = nodeToRemove.next 
//     leader.next = follower 
//     this.length --
//     return this.printToList()
//   }

  
// }

// const myNewList = new LinkedList(10)

// console.log(myNewList.append(555))
// console.log(myNewList.append(5))
// // myNewList.append(55)
// console.log(myNewList.prepend(22))
// console.log(myNewList.insert(2,777))
// console.log(myNewList.remove(2))
// console.log(myNewList.printToList())
// console.log(myNewList.reverse())



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



function recursiveStrReversing(str) {
    if(str === '') return ''
    return recursiveStrReversing(str.substr(1)) + str.charAt(0)
}

console.log(recursiveStrReversing('abcdefghijklmn'))
