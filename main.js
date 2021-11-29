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


