// function ceasarSipher(str, num) {
//     strArray = str.split('')
//     const alphabet = 'abcdefghijklmnopqrstuvxyz'.split('')
//     newArray = []

//     for(i = 0 ; i < str.length; i ++) {
//         let currentIndex = i 
//         console.log(currentIndex)
//         let newIndex = currentIndex + num
//         newArray.push(alphabet[newIndex])
//     }
//     console.log(newArray)
// }

// console.log(ceasarSipher('abcdef',3))


// function reverseWord (str) {
//     const wordsArray = str.split(' ')
//     let newArray = []
//     wordsArray.forEach(word => {
//        newWord =  word.split('').reverse().join('')
//         newArray.push(newWord)
//     })
//     return newArray.toString()
    
// }

// console.log(reverseWord('this is my new string'))

function twoSum(array, sum) {
    let pairs = []
    let hashTable = []
    for(i = 0 ; i < array.length ; i ++) {
        let currentNumber = array[i]
        let counterpart = sum - currentNumber
        if(hashTable.indexOf(counterpart) !== -1) {
            pairs.push([currentNumber, counterpart])
        }
        hashTable.push(currentNumber)
    }
    return pairs
}
console.log(twoSum([1,2,3,4,5,6,7,8,9], 5))