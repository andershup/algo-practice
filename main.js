function harmlessRansomNote(noteText, magazineText) {
    const noteArray = noteText.split(' ')
    const magazineArray = magazineText.split(' ')
    const magazineObj = {}

    magazineArray.forEach(word => { if(!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++
    }
    ) 
    let noteIsPossible = true
      
    noteArray.forEach(word => {
        if(magazineObj[word]) { magazineObj[word]--
        if(magazineObj[word] < 0) noteIsPossible = false
        } else noteIsPossible = false
    }
        )  
        return noteIsPossible 

}

console.log(harmlessRansomNote('this is my my simple note', 'this is my simple note lets try with a different '))