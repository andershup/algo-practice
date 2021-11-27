function reversedWords (str) {
    let newString = str.split(' ')
    const reversedArr = []
    newString.forEach(word => {
        let reversedWords = ''
        for(i = word.length-1 ; i >= 0 ; i--) {
            reversedWords += word[i]

        } reversedArr.push(reversedWords)
        }) 
    return reversedArr.join(' ')
}


console.log(reversedWords('this is a good piece of string'))