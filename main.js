 function ceasarCipher (str, num) {
     let lowerCaseString = str.toLowerCase()
     const alphabet = 'abcdefghijklmnopqrstuvxyz'.split('')
     let newString = ''

     for (let i = 0 ; i < str.length ; i ++) {
         let currentChar = lowerCaseString[i]
         if(str[i] === '') {
             newString += currentChar
             continue
         }
         let currentLetterIndex = alphabet.indexOf(currentChar)
         let newIndex = currentLetterIndex + num

         console.log(currentLetterIndex) 
         console.log(newIndex) 
         console.log(newString)
         return newString += alphabet[newIndex]
        }
 }

 console.log(ceasarCipher('abcdefg', 3))