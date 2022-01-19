function ceasarSipher(str, num) {
    strArray = str.split('')
    const alphabet = 'abcdefghijklmnopqrstuvxyz'.split('')
    newArray = []

    for(i = 0 ; i < str.length; i ++) {
        let currentIndex = i 
        console.log(currentIndex)
        let newIndex = currentIndex + num
        newArray.push(alphabet[newIndex])
    }
    console.log(newArray)
}

console.log(ceasarSipher('abcdef',3))