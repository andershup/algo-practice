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

const meanMedianMode = (array) => {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}

const getMean = (array) => {
  sum = 0
  length = array.length
  array.forEach(element => {
    sum += element  
  });
  let mean = sum / length
  return mean 
}

// console.log(getMean([1,2,3,4,5,6,7,8,9,10]))




