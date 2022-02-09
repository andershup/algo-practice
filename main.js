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

// function twoSum(array, sum) {
//     let pairs = []
//     let hashTable = []
//     for(i = 0 ; i < array.length ; i ++) {
//         let currentNumber = array[i]
//         let counterpart = sum - currentNumber
//         if(hashTable.indexOf(counterpart) !== -1) {
//             pairs.push([currentNumber, counterpart])
//         }
//         hashTable.push(currentNumber)
//     }
//     return pairs
// }
// console.log(twoSum([1,2,3,4,5,6,7,8,9], 5))

// function factoral (num) {
//     if(num === 1) {
//         return num 
//     }
//     else {
//         return num * factoral(num - 1) 
//     }
// }

// console.log(factoral(5))

// function factoral(num) {
//     if(num === 1) {
//         return num 
//     }
//     else {
//         return factoral(num - 1) 
//     }
// }

// // console.log(factoral(5))

// function fibonacci (position) {
//     let currentNumber = 
// }



// let myString = 'this is the unly un-bugging Nunes and her nuw partner is do 99 more problems and 5 6 44 m 4 3 77'
// let myRegex = /[^a-g1-6]/ig
// let replaced = myString.replace(/[0-9a-g]/ig, "Z")
// let result = myString.match(myRegex)

// console.log(result)
// console.log(replaced)

// let myString = 'smississippis'
// let myRegex = /m*/g
// let result = myString.match(myRegex)
// console.log(result)

// function harmlessRansomNote(note, article) {
//     let noteArray = note.toLowerCase().split(' ')
//     let articleArray = article.toLowerCase().split(' ')
//     let newArray = []
//     let hashTable = {}
//     articleArray.forEach(word => {
//         if(!hashTable[word]) hashTable[word] = 0
//         hashTable[word]++
//     })
//     let noteIsPossible = false
//     noteArray.forEach(word => {
//         if(hashTable[word] > -1) {
//             hashTable[word]--
//                 if(hashTable[word] > -1) noteIsPossible = true
//         }
//         else noteIsPossible = false
//     })
//     console.log(hashTable)
//         return noteIsPossible
//     }



// function reversedArray(array) {
//     for(i = 0 ; i < array.length ; i++) {
//         let tempVar = array[i]
//         console.log(tempVar)
//         let opposite = array.length - i
//         console.log(opposite)
        
//         console.log(tempVar)
//     }
// }

// console.log(reversedArray([1,2,3,4,5,6,7,8]))

// let arrayOne = [1,2,3,4,5,6,7,8]


// // let arrayTwo = arrayOne.concat().reverse()
// // console.log(arrayOne)
// // console.log(arrayTwo)

// function getMean(array) {
//     let sum = 0 
//     array.forEach(num => {
//         sum += num
//     })
//     let result = sum / array.length
//     return result 
// }

// function getMedian(array) {
//     array.sort(function(a, b) { a-b })
//     let median
//     if(array.length % 2 !== 0) {
//         median = array[Math.floor(array.length/2)]
//     }
//     else 
//     {
//         let bottomNumber = array[(array.length / 2) -1]
//         let topNumber = array[(array.length)]
//         median = (bottomNumber + topNumber) / 2
//     }
//     return median
    
// }

// function getMode(array) {
//     let newObj = {}

//     array.forEach(num => {
//         if(!newObj[num]) newObj[num] = 0
//         newObj[num] ++
//         })
//     let maxNumber = 0 
//     modes = []
//     for(num in newObj) {
//         if(newObj[num] > maxNumber) {
//             modes = [num]
//             maxNumber = newObj[num]
//         }
//     }
//     return modes
   
// }

// console.log(getMode([1,2,2,3,4,5,5,5,5]))



// function meanmedianmode(array) {
//     return {
//         mean: getMean(array),
//         median: getMedian(array),
//         mode: getMode(array)
//     }
// }

function reverseArray(array) {
    for(i = 0 ; i < array.length/2 ; i++) {
        let tempVar = array[i]
        array[i] = array[array.length -1 -i]
        array[array.length - 1 - i] = tempVar
    }
    return array 
}

console.log(reverseArray([1,2,3,4,5,6,7]))