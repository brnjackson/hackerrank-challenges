const pdfViewer = (h, word) => {
    let maxHeight = 0
   
    for (let c of word) {
      let charHeight = h[c.charCodeAt(0) - 97]
   
      if(charHeight > maxHeight) {
        maxHeight = charHeight
      }
    }
    return word.length * maxHeight
   }

   let h1 = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
   let h2 = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7]
   let word1 = 'abc'
   let word2 = 'zaba'
   
   console.log(pdfViewer(h1, word1))
   console.log(pdfViewer(h2, word2))
   