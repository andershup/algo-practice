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








  // THE RECURSIVE FUNCTION THAT RICHARD FOUNG AT THE MEETUP
 
// function fib(n, memo) {
//   // console.log('this is the num before base', n)
//   if (n < 2) {
//     return n;
//   }
//   if(!memo[n]) {
//     // console.log('this is inside memo' , n)
//     // when the object doesn't have the property of n
//     // store the result of the call inside memo[n]
//     memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//     // console.log('this is memo [n]', memo[n])
//   }
//   return memo[n];
// }

// fib(8,{})





//  THE RECURSEVE MEOIZATION FROM THE COURSE + my version below
 


//  function fibMemo(index, cache) {
//   cache = cache || [];
//   console.log(cache[index])
//   if (cache[index]) return cache[index];
//   else {
//     if (index < 3) return 1;
//     else {
//       cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
//     }
//   }
//   return cache[index];
// }



// const fibMemo = (index, cache) => {
//   cache = cache || []
//   console.log('working my way up', index)
//   if(cache[index]) {
//     console.log('now returnning')
//      return cache[index]
//   }
//   else 
//   {
//     if(index < 2) return index
//     else {
//       cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache)
//       console.log(cache[index])
//     }
//     return cache[index]
//   }
// }
 
// console.log(fibMemo(8))



// console.log(fib(6, {})); // 5

// function recursiveStrReversing(str) {
//   console.count()
//   console.log('this is the str before base case', str)
//     if(str === '') return ''
//     console.log('this is the str before recursion', str)
//     return recursiveStrReversing(str.substr(1)) + str.charAt(0)
// }

// console.log(recursiveStrReversing('abcdefghijklmn'))

// const fibonacciRecorsion = (num) =>  {
  
//   console.count()
//   console.log('num before base case', num)
//     if(num < 2) return num
//     console.log('num before recursion', num)
  
//     return fibonacciRecorsion(num -1) + fibonacciRecorsion(num - 2) 
    
// }

// console.log(fibonacciRecorsion(6))

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
//     this.data[address].push([key, value])
//     return this
//   }
//   get(key) {
//     console.count()
//     let address = this._hash(key)
//     if(!this.data[address]) return  false
//     let currentBucket = this.data[address]
//     if(currentBucket) {
//       for(let i = 0 ; i < currentBucket.length ; i ++) {
//         if(currentBucket[i][0] === key) return currentBucket[i][0]
//       }
//     }
    
//   }
// }

// const myHashTable = new HashTable(50);
// console.log(myHashTable.set('grapes', 10000))
// console.log(myHashTable.get('grape'))
// console.log(myHashTable.set('apples', 9))
// myHashTable.get('apples')

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
//       return this
//     } else {
//     let currentNode = this.root
    
//     while(true) {
//       // move left 
//       if(value < currentNode.value) {
//          if(!currentNode.left) 
//          {
//            currentNode.left = newNode
//            return this
//          }
//          currentNode = currentNode.left 
//       }
//       // move right
//       else (value > currentNode.value)
//       {
//         if(!currentNode.right) {
//           currentNode.right = newNode
//           return this
//         }
//         currentNode = currentNode.right
//       }
//     }
//   }
// }
// insert(value) {
//   let newNode = new Node(value)
//   if(this.root === null) {
//     this.root = newNode
//   }
//   //
// }
//   lookup(value){
//     let currentNode = this.root
 
//      while(currentNode) {
//       //is a match
//       if(value === currentNode.value) {
//         return currentNode
//       }
//       //move left 
//       else if (value < currentNode.value) {
//           currentNode = currentNode.left 
//         }
//         // move right
//         else if(value > currentNode.value) 
//         {
//           currentNode = currentNode.right 
//         }
//       }
//       return null
//     }
  

// }

// const tree = new BinarySearchTree();
// console.log(tree.insert(9))
// console.log(tree.insert(4))
// console.log(tree.insert(6))
// console.log(tree.insert(20))
// console.log(tree.insert(170))
// console.log(tree.insert(15))
// console.log(tree.insert(1))
// console.log(tree.lookup(15))
// // JSON.stringify(traverse(tree.root))

// //     9
// //  4     20
// //1  6  15  170

// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }

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
//       return this
//     } else {
//     let currentNode = this.root
    
//     while(true) {
//     //going left
//     if(value < currentNode.value) {
//       if(!currentNode.left) 
//       {
//         currentNode.left = newNode 
//         return this
//       }
//       else 
//       {
//          currentNode = currentNode.left
//       }
//     }
//     if(value > currentNode.value) 
//     {
//       if(!currentNode.right) 
//       {
//         currentNode.right = newNode
//         return this
//       }
//       else 
//       {
//         currentNode = currentNode.right 
//       }
//     }

//   }
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
// // JSON.stringify(traverse(tree.root))

// //     9
// //  4     20
// //1  6  15  170

// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }


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
//     const newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//     } else {
//       let currentNode = this.root;
//       while(true){
//         if(value < currentNode.value){
//           //Left
//           if(!currentNode.left){
//             currentNode.left = newNode;
//             return this;
//           }
//           currentNode = currentNode.left;
//         } else {
//           //Right
//           if(!currentNode.right){
//             currentNode.right = newNode;
//             return this;
//           } 
//           currentNode = currentNode.right;
//         }
//       }
//     }
//   }
//   lookup(value){
//     if (!this.root) {
//       return false;
//     }
//     let currentNode = this.root;
//     while(currentNode){
//       if(value < currentNode.value){
//         currentNode = currentNode.left;
//       } else if(value > currentNode.value){
//         currentNode = currentNode.right;
//       } else if (currentNode.value === value) {
//         return currentNode;
//       }
//     }
//     return null
//   }
//   remove(value) {
//     if (!this.root) {
//       return false;
//     }
//     let currentNode = this.root;
//     let parentNode = null;
//     while(currentNode){
//       if(value < currentNode.value){
//         parentNode = currentNode;
//         currentNode = currentNode.left;
//       } else if(value > currentNode.value){
//         parentNode = currentNode;
//         currentNode = currentNode.right;
//       } else if (currentNode.value === value) {
//         //We have a match, get to work!
        
//         //Option 1: No right child: 
//         if (currentNode.right === null) {
//           if (parentNode === null) {
//             this.root = currentNode.left;
//           } else {
            
//             //if parent > current value, make current left child a child of parent
//             if(currentNode.value < parentNode.value) {
//               parentNode.left = currentNode.left;
            
//             //if parent < current value, make left child a right child of parent
//             } else if(currentNode.value > parentNode.value) {
//               parentNode.right = currentNode.left;
//             }
//           }
        
//         //Option 2: Right child which doesnt have a left child
//         } else if (currentNode.right.left === null) {
//           currentNode.right.left = currentNode.left;
//           if(parentNode === null) {
//             this.root = currentNode.right;
//           } else {
            
//             //if parent > current, make right child of the left the parent
//             if(currentNode.value < parentNode.value) {
//               parentNode.left = currentNode.right;
            
//             //if parent < current, make right child a right child of the parent
//             } else if (currentNode.value > parentNode.value) {
//               parentNode.right = currentNode.right;
//             }
//           }
        
//         //Option 3: Right child that has a left child
//         } else {

//           //find the Right child's left most child
//           let leftmost = currentNode.right.left;
//           let leftmostParent = currentNode.right;
//           while(leftmost.left !== null) {
//             leftmostParent = leftmost;
//             leftmost = leftmost.left;
//           }
          
//           //Parent's left subtree is now leftmost's right subtree
//           leftmostParent.left = leftmost.right;
//           leftmost.left = currentNode.left;
//           leftmost.right = currentNode.right;

//           if(parentNode === null) {
//             this.root = leftmost;
//           } else {
//             if(currentNode.value < parentNode.value) {
//               parentNode.left = leftmost;
//             } else if(currentNode.value > parentNode.value) {
//               parentNode.right = leftmost;
//             }
//           }
//         }
//       return true;
//       }
//     }
//   }
// }

// const tree = new BinarySearchTree();
// tree.insert(9)
// tree.insert(4)
// tree.insert(6)
// tree.insert(20)
// tree.insert(170)
// tree.insert(15)
// tree.insert(1)
// tree.remove(170)
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


// }

// /   printToList() {
  //     let array = []
  //     let currentNode = this.head
  //     console.log(currentNode)
  //     while(currentNode !== null) {
  //       array.push(currentNode.value)
  //       currentNode = currentNode.next
  //     }
  //     return array


  // class Queue {
  //   constructor(value) {
  //     this.value = value
  //     this.next = null 
  //   }
  // }


//   class Node {
//     constructor(value) {
//     this.value = value,
//     this.next = null
//   }
//   }

//   class RememberLinkedLists {
//     constructor(value) {
//       this.head =  {
//         value: value,
//         next: null
//       }
//       this.tail = this.head
//       this.length = 1
//     }
//     append(value) {
//       let newNode = new Node(value)
    
      
//         this.tail.next = newNode
//         this.tail = newNode
//         this.length ++
//         /* console.log('try this' , this.length) */
//         return this
      
      
//     }
//     prepend(value) {
//       let newNode = new Node(value)
//       newNode.next = this.head

//       this.head = newNode
    
//       this.length ++
//       return this
//     }
//     printToList() {
//       let array = []
//       let currentNode = this.head 
//       console.log('this is the currentNode ',  currentNode)
//       while(currentNode) {
//         array.push(currentNode.value)
//         currentNode = currentNode.next

//       }
//       return array
//     }

//     traverse(index) {
//       let currentNode = this.head
//       let counter = 0
//       while(counter !== index) 
//       {
//         currentNode = currentNode.next 
//         counter ++
//       }
//       return currentNode
//     }
//     insert(index, value) {
//       let newNode = new Node(value)
//       let leader = this.traverse(index - 1)
//       let follower = leader.next 
//       leader.next = newNode
//       newNode.next = follower
//       return this
//     }
//     remove(index) {
//       let leader = this.traverse(index - 1)
//       let nodeToRemove = leader.next
//       let follower = nodeToRemove.next
//       leader.next = follower
      
//     }
//     reverse() {
      
//       let first = this.head
//       let second = first.next 
//       this.tail = this.head 
//     while(second) 
//     {
//       let tempVar = second.next 
//       second.next = first   
//       first = second
//       second = tempVar
      

//     }
//     this.head.next = null
//     this.head = first 
//       return this
//       }
//     }
  

//  const okToTry = new RememberLinkedLists(5)
// console.log(okToTry)
//  console.log(okToTry.append(50))
//  console.log(okToTry.append(500))
//  console.log(okToTry.append(5000))
//  console.log(okToTry.append(50000))
//  console.log(okToTry.prepend(5000000000))
//  console.log(okToTry.insert(4, 242))
//  console.log(okToTry.remove(3))
//  console.log('originalllll' , okToTry.printToList())
// //  console.log('original' , okToTry.printToList())
//  console.log(okToTry.reverse())
//  console.log('reversed print to list', okToTry.printToList())
 

//  class HashTable {
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
//     if(!this.data[address])
//     {
//       this.data[address] = []
//     }
//       this.data[address].push([key, value])
//     return this
//   }
//   get(key) {
//     let address = this._hash(key)
//     let currentBucket = this.data[address]
    
//       if(currentBucket) {
//         for(let i = 0 ; i < currentBucket.length ; i ++) 
//         {
//           if(currentBucket[i][0] === key) 
//           {
//             return currentBucket[i][1]
//           }
//         }
//       }
    
//     return 'threre is not such thing'
    
//   }
  
// }

// const myHashTable = new HashTable(3);
// console.log(myHashTable.set('grapes', 10000))
// console.log(myHashTable.set('apples', 9))
// console.log(myHashTable.set('apples', 900))
// console.log(myHashTable.set('apples', 90))
// console.log(myHashTable.set('bananas', 90))
// console.log(myHashTable.set('bananas', 9))
// console.log(myHashTable.get('bananas'))
// myHashTable.get('apples')


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
//     if (!this.data[address]) {
//       this.data[address] = [];
//     }
//     this.data[address].push([key, value]);
//     return this.data;
//   }

//   get(key){
//     const address = this._hash(key);
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

// const myHashTable = new HashTable(5);
// console.log(myHashTable.set('grapes', 10000))
// console.log(myHashTable.set('apples', 79))
// console.log(myHashTable.set('pears', 90))
// console.log(myHashTable.set('pears', 9))
// console.log(myHashTable.set('bananas', 956))
// console.log(myHashTable.set('apples', 95))
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
//    this.first = null
//    this.last = null 
//   this.length = 0 
//   }

// peek() {
//   return this.first.value
// }
// enqueue(value) {
//   let newNode = new Node(value)
//   if(this.last === null) {
//     this.first = newNode
//     this.last = newNode
//     this.length ++
//     return this
//   }
//   this.last.next = newNode
//   this.last = newNode
//   this.length ++
//   return this
// }
// dequeue() {
//   this.first = this.first.next 
//   this.length --
//   return this
// }
// }

// const myQueue = new Queue()

// console.log(myQueue.enqueue('david'))
// console.log(myQueue.enqueue('peter'))
// console.log(myQueue.enqueue('paul'))
// console.log(myQueue.peek())
// console.log(myQueue.dequeue())


// const array1 = ['a','b','f','d','h']
// const array2 = ['g','u','p']

// function contains(array1,array2) {
// let map = {}
// for(let i = 0 ; i < array1.length ; i ++) 
// {
//   if(!map[array1[i]]) 
//   {
//     const item = array1[i]
//     map[item] = true
//   }
// }
// for(let j = 0 ; j < array2.length ; j ++) {
//   if(map[array2[j]]) 
//   {
//     return true
//   }
// }
// return false 
// }

// console.log(contains(array1,array2))

// const meanMedainMode = numbers => {
//   return {
//     mean: meanAlgo(numbers),
//     median: medianAlgo(numbers),
//     mode: modeAlgo(numbers)
//   }
// }

// const meanAlgo = numbers => {
//   console.log('this is mean')
// }
// const medianAlgo = numbers => {
//   console.log('this is median')
// }
// const modeAlgo = numbers => {
//   const map = {}
//   for(let i = 0 ; i < numbers.length ; i ++) 
//   {
//     if(!map[numbers[i]]) map[numbers[i]] = 0
//     map[numbers[i]] ++
//   }
//   // console.log('this is with for loop', map)
//   const map2 = {}
//   numbers.forEach(number => {
//     if(!map2[number]) map2[number] = 0
//     map2[number]++
  
    
//   });
//   let maxNumber = 0
//   let mode = []
//   for(let number in numbers) 
//   {
//     console.log('this is map[number]' , map[number])
//     if(map[number] >= maxNumber) 
//     {
//       mode = [number]
//       maxNumber = map[number]
//       console.log('this is the max number ', maxNumber)
//     }
//   }
//   return mode
// }
// // console.log(modeAlgo([1,2,3,4,5,6,7,8,9,0]))
// console.log(meanMedainMode([1,1,1,1,1,2,3,3,3,3,3,3,3,3,3,3,3,3,4,5,6,7,8,9]))

// const myString = 'this is is the wwway to wheaven 242'

// const myRegEx = /\D/ig 
// let result = myString.match(myRegEx)

// let result2 = myRegEx.test(myString)

// let result3 = myString.replace(/[^s]/g, "")
// console.log(result)

// const fibboMemo = (index, cache) => {
//   cache = cache ||  []
// if(cache[index]) return cache[index]
// else {
//   if(index < 2) return index
//   else {
// if(!cache[index]) {
//   cache[index] = fibboMemo(index -1, cache) + fibboMemo(index - 2, cache)
// }
// }
// } return cache[index]
// }

// console.log(fibboMemo(6))


// function fibMemo(index, cache) {
//   cache = cache || [];
//   console.log(cache[index])
//   if (cache[index]) return cache[index];
//   else {
//     if (index < 3) return 1;
//     else {
//       cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
//     }
//   }
//   return cache[index];
// }

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
//     if(this.root === null)
//     {
//       this.root = newNode
//       return this
//     }
//    else {
//      let currentNode = this.root
//      while(true) {
//        if(value < currentNode.value) 
//        {
//          if(!currentNode.left)
//          {
//            currentNode.left = newNode
//            return this
//          }
//          currentNode = currentNode.left
//        } else {
//          if(!currentNode.right) 
//          {
//            currentNode.right = newNode
//            return this
//          }
//          currentNode = currentNode.right
//        }
//      }
//    }
//   }
   
//   lookup(value){
//     //Code here
//     let currentNode = this.root
//     while(currentNode.value !== value) 
//     {
//       if(value < currentNode.value)
//       {
//         currentNode = currentNode.left
//       }
//       else {
//         currentNode = currentNode.right
//       }
//     }
//     return currentNode
//   }
//   remove(value) {
//     let currentNode = this.root
//     if()
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
// console.log(tree.lookup(170))
// console.log(JSON.stringify(traverse(tree.root)))

// //     9
// //  4     20
// //1  6  15  170

// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }

// const recursiveString = str => {
//   if(str === '') return ''

//   return recursiveString(str.substr(1)) + str.charAt(0)
// }

// console.log(recursiveString('abcd'))
// class Node {
//   constructor(value){
//     this.value = value;
//     this.next = null;
//   }
// }

// const twoSum = (array, sum) => {
//   let hashTable = []
//   let pairs = []
//   for(let i = 0 ; i < array.length ; i ++) {
//     let opposite = sum - array[i]
//     if(hashTable[opposite]) {
//       pairs.push([array[i], opposite])
//     }
//     hashTable.push(array[i])
//   }
//   return pairs

// }
// console.log(twoSum([1,2,3,4,5,6,7,8,9,0], 10))

// class Graph { 
//   constructor() { 
//     this.numberOfNodes = 0;
//     this.adjacentList = {
//     }; 
//   } 
//   addVertex(node)  {
//    this.adjacentList[node] = []
//    this.numberOfNodes ++
//   } 
//   addEdge(node1, node2) { 
//     //undirected Graph 
//     this.adjacentList[node1].push(node2)
//     this.adjacentList[node2].push(node1)
  
    
//   } 
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

// console.log(myGraph.showConnections())
//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5

// class Graph { 
//   constructor() { 
//     this.numberOfNodes = 0;
//     this.adjacentList = {
//     }; 
//   } 
//   addVertex(node)  { 
//     if(!this.adjacentList[node]) this.adjacentList[node] = []
//     this.numberOfNodes ++
//     return this
//   } 
//   addEdge(node1, node2) { 
//     //undirected Graph 
//     this.adjacentList[node1].push(node2)
//     this.adjacentList[node2].push(node1)
//     return this

//   } 
//   showConnections() { 
//     const allNodes = Object.keys(this.adjacentList); 
//     //setting up an nested loop
//     for (let node of allNodes) { 
//       let nodeConnections = this.adjacentList[node]; 
//       let connections = ""; 
//       let vertex;
//       for (vertex of nodeConnections) {
//         connections += vertex + " ";
//       } 
//       console.log(node + "-->" + connections); 
//     } 
//   }
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

const array1 = [2,23,4]
const array2 = [1,23,5,10]

// const compare = (array1, array2) => {
//   let map = {}
//   for(i = 0 ; i < array1.length ; i ++) {
//     if(!map[array1[i]]) {
//       let item = array1[i]
//       map[item] = true
//     }
//   }
//   for(j = 0 ; j < array2.length ; j ++) {
//     if(map[array2[j]]) return true
//   }
//   return false 
// }


// const compare = (array1,array2) => {
//   return array1.some(element => array2.includes(element))
// }
// console.log(compare(array1, array2))



// const factoral = (num) => {
//     if(num < 2) return num
//     return factoral(num -1) * num 
// }

// console.log(factoral(8))

// const recursiveReversal = string => {
//   if(string === '') return ''
//   return recursiveReversal(string.substr(1)) + string.charAt(0)
// }

// console.log(recursiveReversal('abcdefg'))




// class Stack {
//   constructor(){
//    this.array = []
//   } 
//   peek() {
//     return this.array[this.array.length-1]
//   }
//   push(value){
//    this.array.push(value)
//    return this
//   }
//   pop(){
//    return this.array.pop()
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

/**
 * BUBBLESORT 
 */
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// const bubbleSort = array => {
//   let length = array.length
//   for(i = 0 ; i < length ; i ++) {
//     for(j = 0 ; j < length ; j ++) {
//       if(array[j] < array[j+1]) {
//         let tempVar = array[j]
//         array[j] = array[j+1]
//         array[j+1] = tempVar
//       }
//     }
//   }
// }
// bubbleSort(numbers);
// console.log(numbers);
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const selectionSort = array => {
//   for(let i = 0 ; i < array.length ; i ++) {
//    let min = i
//    let temp = array[i]
//     for(let j = i+1 ; j < array.length ; j ++) {
//       if(array[j] < array[min]) {
//         min = j
//       }
//    // so now it has found the minimum for that first i iteration
//   }
//   array[i] = array[min]
//   array[min] = temp

//   }
//   return array
// }

//   selectionSort(numbers)
//   console.log([numbers])



// function insertionSort(array) {
  
  // }
  
  // insertionSort(numbers);
  // console.log(numbers);
 /*  const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

  const bubble = array => {
    const length = array.length
    for(i = 0 ; i < length ; i ++) {
      for(let j = 0 ; j < length ; j ++) {
        if(array[j] > array[j+1]) {
          let temp = array[j]
          array[j] = array[j+1]
          array[j+1] = temp
        }
      }
    }
    return array
  }

  // console.log(bubble(numbers))

  const reverseArray = array => {
    for(i = 0 ; i < array.length/2 ; i ++) {
      let temp = array[i]
      array[i] = array[array.length-1-i]
      array[array.length-1-i] = temp
    }
    return array
  }

  console.log(reverseArray(numbers)) */



  
  // add a method remove() to the linked list that deletes a node to the specified index.
  class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
      //Code here
      let newNode = new Node(value)
      let currentNode = this.root 
      if(this.root === null) 
      {
        this.root = newNode
        return this
      } else {
    while(true) {
      if(value < currentNode.value) {
      if(!currentNode.left){
        currentNode.left = newNode
        return this
      }
     currentNode = currentNode.left
    }
    else {
        if(!currentNode.right) {
          currentNode.right = newNode
          return this
        }
      
          currentNode = currentNode.right
    }
  }
}
     
    }
    lookup(value){
      //Code here
    }
    // remove
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  JSON.stringify(traverse(tree.root))
  
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  
  