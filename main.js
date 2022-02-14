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

function fibonacciRecorsion(n) {
    if(n < 2) {
        console.log('this is n:',n)
        return n
    }
    console.log('this is big n',n)
    return fibonacciRecorsion(n-1) + fibonacciRecorsion(n-2)
}
console.log('answer:', fibonacciRecorsion(8))

