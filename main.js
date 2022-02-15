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



  

// }

  
//   const myHashTable = new HashTable(50);
//  console.log( myHashTable.set('grapes', 10000))
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
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head
    this.length = 1 
  }
  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length ++
    return this
  }
  printToList() {
    let currentNode = this.head
    let array = []
    while(currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array 
  }
  insert(index, value) {
    const newNode = new Node(value) 
    const leader = this.traverse(index-1)
    const pointerHolder = leader.next
    leader.next = newNode
    newNode.next = pointerHolder
    return this.printToList()
    
  }
  traverse(index) {
    let counter = 0 
    let currentNode = this.head
    while(counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }
}


const myNewList = new LinkedList(10)
myNewList.append(55)
myNewList.append(555)
myNewList.prepend(22)
console.log(myNewList.printToList())
console.log(myNewList.insert(2,22))
