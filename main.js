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

const recursion = (num) => {
   
    if(num < 3) return 1 
    return num - recursion(num -1)
}
console.log(recursion(8))