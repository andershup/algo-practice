function ceasarCipher(str, num) {
    let newString = str.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvxyz'.split('')
    let resultString = ''

    for(i = 0 ; i < str.length; i ++ ) {
        let currentLetter = newString[i]
        if(currentLetter ===  ' ') {
            resultString += currentLetter
            continue
        }
        let currentIndex = alphabet.indexOf(currentLetter)
        console.log(currentIndex)
        let newIndex = currentIndex + num
        resultString += alphabet[newIndex]
        console.log(resultString)
    }
}

console.log(ceasarCipher('abc  defg', 10))