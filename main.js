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