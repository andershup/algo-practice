const twoSum = (numArray, sum) => {
    resultArray = []
    let hashTable = []
    let pairs = []
    for(i = 0 ; i < numArray.length ; i++) {
        let currentNumber = numArray[i]
        let opposite = sum - numArray[i]
        if(hashTable.indexOf(opposite) !== -1) {
            pairs.push([currentNumber, opposite])
        } 
        hashTable.push(currentNumber)
    }
    resultArray.push(pairs)
    return resultArray
}

console.log(twoSum([1,2,3,4,5,6,7,8,9], 10))