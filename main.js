const Array = [1,2,5,3,4,7,7,7,7,7,77,88,5]

// const selectionSort = array => {
//   const length = array.length
//   for(i = 0 ; i < length ; i ++ ) 
//   {
//     let min = i
//     let temp = array[i]
//     for(j = i+1 ; j < length ; j ++) {
//       if(array[j] < array[min] ) {
//         min = j
//       }
//       array[i] = array[min]
//       array[min] = temp 

//     }
//   }
//   return array 
// }

// console.log(selectionSort(Array))


const Mode = array => {
  
  let map = {}
  array.forEach(number => {
    
    if(!map[number]) map[number] = 0
    map[number] ++  
  })
  let maxMode = 0
  let mode = []
  for(let key in map) {
    if(map[key] > maxMode) {
      mode = key
      maxMode = map[key]
    }
  }
  return mode
}

console.log(Mode(Array))