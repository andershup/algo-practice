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

const getMean = (arr) => {
    let sum = 0
    arr.forEach(num => {
        sum += num
    })
    return sum/arr.length
}

const getMedian = (arr) => {
    arr.sort((a,b) => a - b)
    if(arr.length % 2 !== 0) {
        let result = arr[Math.floor(arr.length/2)]
        return result 
    }
   
    let upperNumber = arr[Math.floor(arr.length/2)]
    let lowerNumber = arr[Math.floor((arr.length-1)/2)]
    return (upperNumber + lowerNumber) / 2
}

const getMode = (arr) => {
    let hashTable = {}
    arr.forEach(num => {
        if(!hashTable[num]) hashTable[num] = 0 
        hashTable[num]++
    })
 
    console.log(hashTable)
    let maxNumber = 0 
    for(property in hashTable) {
      
      if(hashTable[property] >= maxNumber) {
          maxNumber = property
      }
        
        
    }
    return maxNumber

}

console.log(getMode([1,2,3,3,3,3,4,5,6,7,8,9,10,11,11,11,11,11,12]))

const meanMedianMode = (arr) => {
    return {
        mean: getMean(arr),
        median: getMedian(arr),
        mode: getMode(arr)
    }
}