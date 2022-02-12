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



// const reverseArray = (arr) => {
//     for(let i = 0 ; i < arr.length/2 ; i++) {
//         let tempVar = arr[i]
//         arr[i] = arr[arr.length -1 - i]
//         console.log(arr[i])
//         arr[arr.length -1 - i] = tempVar
//     }
//     return arr

// }

// console.log(reverseArray([1,2,3,4,5,6,7,8,9]))