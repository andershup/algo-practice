// function getMean (arr) {
//     let total  = 0
//     let result
//     console.log(arr)
//     for (let i = 0 ; i < arr.length  ; i++) {
//         total += arr[i]
//     } return total / arr.length
// }

// console.log(getMean([5,5,5,5,10]))

// function getMedian(arr) {
//     let medianResult
//     const newArray = arr.sort(function (a,b){return a-b})
//     console.log(newArray)
//     if(newArray.length % 2 !== 0) {
//         let medianResult = newArray[Math.floor(arr.length/2)]
//         return medianResult
//     }
//     if(newArray.length % 2 === 0) {
//         let lowerMedian = newArray[(arr.length/2)]
//         console.log(lowerMedian)
//         let upperMedian = newArray[(arr.length/2)-1]
//         console.log(upperMedian)
//         medianResult = ((lowerMedian + upperMedian) / 2)
//         return medianResult
//     }
// }

// console.log(getMedian([1,5,6,7,8,9]))

// function getMode(array) {
//     const modeObj = {}

//     array.forEach(number => {
//         if(!modeObj[number]) modeObj[number] = 0
//         modeObj[number]++
//     })

//     let maxFrequency = 0
//     let modes = []
//     for(let number in modeObj) {
//         if(modeObj[number] > maxFrequency) {
//             modes = [number]
//             maxFrequency = modeObj[number]
//         }
//     }
//     return modes

//     console.log(modeObj)

// }

// console.log(getMode([1,1,1,1,1,2,3,4,4,4,4,4,4,4,5,6,7,8,9,9,9,,]))

// function twoSum(numArray, sum) {
//     var pairs = [];
//     var hashTable = [];

//     for (var i = 0; i < numArray.length; i++) {
//       var currNum = numArray[i];
//       var counterpart = sum - currNum;
//       if (hashTable.indexOf(counterpart) !== -1) {
//         pairs.push([ currNum, counterpart ]);
//       }
//       hashTable.push(currNum);
//     }

//     return pairs;
//   }

//   twoSum([1, 6, 4, 5, 3, 3], 7);

//   function factorial (num) {
//       if(num === 1) {
//           return num
//       }
//       else {
//           return num * factorial(num - 1)
//       }
//   }

//   console.log(factorial(4))

// function binarySearch(numArray, key) {
//   var middleIdx = Math.floor(numArray.length / 2);
//   var middleElem = numArray[middleIdx];
//   console.log(middleElem);
//   console.log(middleElem);
//   if (middleElem === key) return true;
//   else if (middleElem < key && numArray.length > 1) {
//     return binarySearch(numArray.splice(middleIdx, numArray.length), key);
//   } else if (middleElem > key && numArray.length > 1) {
//     return binarySearch(numArray.splice(0, middleIdx), key);
//   } else return console.log('it ends up here');
// }

// console.log(binarySearch([1, 2, 3, 4, 6], 3));

// function fibonacci(position) {
//     if(position < 3) return 1
//     else return fibonacci(position-1) + fibonacci(position - 2)
// }

// console.log(fibonacci(9))

// function bubleUpSort(arr) {
//     for (let  i = arr.length ; i > 0 ; i--) {
//         for (j = 0 ; j < i ; j++) {
//             if(arr[j] > arr[j+1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(bubleUpSort([2,5,7,3,4,6]))

// function mergeSortedArr (arr) {
//     const middleElem = Math.floor(arr.length/2)
//     const firstHalf = arr.slice(0, middleElem)
//     const secondHalf = arr.splice(middleElem)
    
// }

// function merge(array1, array2) {
//     const result = []
//     while(array1.length && array2.length) {
//         let smallest;
//         if(array1[0] < array2[0]) {
//             smallest = array1.shift()
//         } else {
//             smallest = array2.shift()
//         } result.push(smallest)
//     } 
// }

// console.log(mergeSortedArr(([1,4,5,7,9,10, 2,6,8,11])))

// function fizzbuzz (num) {
   
//     for(i = 0; i <= num; i++) {
//         if(i > 0  && i % 3 === 0) {
//             console.log('fizz')
//         }
//         else if(i > 0 && i % 5 === 0) {
//             console.log('buzz')
//         } else {
//         console.log(i)
//     }
// } 

// }

// fizzbuzz(20)

// function harmlessRansomNote (note, magazine) {
//   let noteArray = note.split(' ')
//   let magazineArray = magazine.split(' ')
//   const magazineObj = {}
//     magazineArray.forEach(word => {
//         if(!magazineObj[word])    magazineObj[word] = 0
         
//             magazineObj[word] ++
//         })
   

//     let noteIsPossible = true;

//     noteArray.forEach(word => {
//         if(magazineObj[word]) {
//             magazineObj[word]--
//             if(magazineObj[word] < 0) {
//                 noteIsPossible = false
//             }
//         }
//         else noteIsPossible = false;
//     })
//     return noteIsPossible

    
// }

// console.log(harmlessRansomNote('this is a secret note for you from a admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'));


// function isPalindrome(string) {
//     string = string.toLowerCase();
//     const characterArray = string.split('');
//     const allowedCharacters = 'abcdefghijklmnopqrstuvxyz'.split('')

//     const lettersArray = []

//     characterArray.forEach(element => { if(allowedCharacters.indexOf(element) > -1) {
//         lettersArray.push(element)
//     }

// })

// return lettersArray.join('') === lettersArray.reverse().join('')
        
//     }

// console.log(isPalindrome("race car"))

// function isPalindrome (string) {
//     string = string.toLowerCase()
//     const stringArray = string.split('')
//     const allowedCharacters = 'abcdefghijklmnopqrstuvxyz'.split('')

//     const newStringArray = []

//     stringArray.forEach(element => { if(allowedCharacters.indexOf(element) > -1) {
//         newStringArray.push(element)
//     }
// })
        
// return newStringArray.join('') === newStringArray.reverse().join('')

// }

// console.log(isPalindrome('race car'))


// function ceaserSipher (str, num) {
//     const strArray = str.split('')
//     console.log(strArray)
//     const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     console.log(alphabetArray)

//     let brandNewString = ''
//     console.log(brandNewString)
//     for(i = 0 ; i < strArray.length ; i ++ ) {
//         let currentLetter = strArray[i]
//         if(currentLetter === ' ') {
//             brandNewString += currentLetter
//             continue 
//         }
//         let currentIndexInAlphabet = alphabetArray.indexOf(currentLetter)
//         let newIndex = currentIndexInAlphabet + num
//         brandNewString += alphabetArray[newIndex]
//     }
//     return brandNewString
// }

// console.log(ceaserSipher('abcdefg', 5))


// function reverseWords(str) {
//     const strArray = str.split(' ')
//     const newArray = []
//     console.log(strArray)

//     strArray.forEach(word => {
//       let newWordOrder = ""
//       for(i = word.length - 1 ; i >= 0 ; i--) {
//           newWordOrder += word[i]
//           console.log(newWordOrder)
//       } 
//       newArray.push(newWordOrder)
//     });
//     return newArray.join(' ')
    
// }


// console.log(reverseWords('hi there this is my string'))
        
// function reversedArray(arr) {
// for(i = 0 ; i < arr.length ; i++) {
//     let tempVar = arr[i]
//     arr[i] = arr[arr.length - 1 - i]
//     arr[arr.length -1 - i] = tempVar
// }
// return arr 
// }

// console.log(reversedArray([1, 2, 3, 4, 5, 6]))

// function getMean(array) {
//     let sum = 0
//     array.forEach(num => {
//         sum +=  num 
//     })
//     let result = sum / array.length
//     return result 
// }

// function getMedian (array) {
//     array = array.sort()
//     if(array.length % 2 !== 0) {

//         return array[Math.floor(array.length/2)]
//     }
//     else {
//         const higherNumber = array[Math.ceil(array.length/2)]
//         console.log(higherNumber)
//         const lowerNumber = array[Math.floor(array.length/2)-1]
//         console.log(lowerNumber)
//         result =  (higherNumber + lowerNumber) /2
//         return result
//     }
    
// }

// function getMode(array) {
//     if(array.length === 0) {
//         return null
//     }
//     const modeObj = {}
//     let maxFrequency = 0
//     let modeArray = []
//     array.forEach(num => {
//         if(!modeObj[num]) {
//             modeObj[num] = 0 
//         }
//         modeObj[num] ++
//         console.log(modeObj)
//     })
//     for(let num in modeObj) {
//         if(modeObj[num] > maxFrequency) {
//           modeArray = [num]
//           console.log(num)
//           maxFrequency = modeObj[num]
//         }
    
//     else if(modeObj[num] === maxFrequency) {
//         modeArray.push()
//     }
// }

// }

// // getMode([1,1,1,1,1,1,2,3,4,5,6,7,7,1,1,1,1,7,7,7,7,7,7,7,7,])

// function getMeanMedianMode() {
//     return {
//         mean: getMean, 
//         median: getMedian,
//         mode: getMode 
//     }
// }




// function twoSum (numArray, num) {
//     let pairs = []
//     let hashTable = []

//     for(i = 0 ; i < numArray.length ; i ++) {
//         let currentNumber = numArray[i]
//         let oppositeNumber = num -  currentNumber
//         if(hashTable.indexOf(oppositeNumber) !== -1) {
//             pairs.push([currentNumber, oppositeNumber])
//         } 
//         hashTable.push(currentNumber)
//     } return pairs
// }

// console.log(twoSum([8,2,3,5,4,5,6], 10))



// function binarySearch (numArray, key) {
//     let middleInx = Math.floor(numArray.length/2)
//     let middleElem = numArray[middleInx]
//     if(middleElem === key) return true
//     else if(middleElem < key && numArray.length > 1) {
//         return binarySearch(numArray.splice(middleInx, numArray.length), key)
//     }
//     else if(middleElem > key && numArray.length > 1) {
//         return binarySearch(numArray.splice(0, middleInx), key)
//     }
//     else return false
// }

// console.log(binarySearch([2,3,5,6,7,8,10,12,50,60], 12))

// function harmlessRansomNote(note, magazine) {
//     let noteArray = note.split(' ')
//     let magazineArray = magazine.split(' ')
//     let hashTable = {}

//     magazineArray.forEach(word => {
//         if(!hashTable[word]) hashTable[word]= 0
//         hashTable[word]++
//     });
//     console.log(hashTable)

//     let noteIsPossible = true

//     noteArray.forEach(word => {
//         if(hashTable[word]) {
//             hashTable[word]--
//             if(hashTable[word]<0) noteIsPossible = false
//         }
//         else noteIsPossible = false
//     })

//     return noteIsPossible


// }


// console.log(harmlessRansomNote('this is a secret secret note for you from an admirer', 'puerto rico is a place of great wonder and excitement it has many  waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'));


// function isPalindrome (str) {
//     stringArray = str.split('')
//     allowedCharectors = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     let newArray = []

//     stringArray.forEach(letter => {
//         if(allowedCharectors.indexOf(letter) > -1) {
//             newArray.push(letter)
//         }
//         // newArray.join('')
//     });
    
//     console.log(newArray)
//     return stringArray.join('') === newArray.reverse().join('')
// }
// console.log(isPalindrome('race car'))

// function isPalindrome(str) {
//     strArray = str.split('')
//     allowedChar = 'abcdefghijklmnopqrstuvwxy'.split('')
//     hashTable = []
//     strArray.forEach(letter => {
//         if(allowedChar.indexOf(letter) > -1) {
//             hashTable.push(letter) 

//         }
//         console.log(hashTable)
        
//     })
//     return hashTable.join() === strArray.reverse().join()
// }

// console.log(isPalindrome('racecar'))


function harmlessRansomNote(note, magazine) {
    noteArray = note.toLowerCase().split(' ')

    magazineArray = magazine.toLowerCase().split(' ')
  
    hashTable = {}
  
    magazineArray.forEach(element => {
        if(!hashTable[element]) hashTable[element] = 0
        hashTable[element]++
    });
    console.log(hashTable)
    noteIsPossible = true
    
    noteArray.forEach(element => {
        if(!hashTable[element]) return noteIsPossible = false
        if(hashTable[element]) {
            hashTable[element]--
            if(hashTable[element] < 0) return noteIsPossible = false
        }
        else noteIsPossible = true
        console.log(hashTable)
    }) 

    return noteIsPossible

}


console.log(harmlessRansomNote('this is a secret note for you from an admirer', 'puerto rico is a place of great wonder and excitement it has many  waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'));