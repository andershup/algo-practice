const firstOccuring = (arr)  => {
    let allreadyDone = []
    for(i = 0 ; i < arr.length ; i ++) {
        let currentNum = arr[i]
        if( allreadyDone.indexOf(currentNum) !== -1) {
            return currentNum
        }
        allreadyDone.push(currentNum)
    }
}

console.log(firstOccuring([1,2,3,4,5,6,7,8,9,4]))