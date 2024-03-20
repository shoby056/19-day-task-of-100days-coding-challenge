//  Given a mix of different types of items,
//   make a new list that has only the words.
//list of mixed items
const mixedItems:(string | number | boolean)[]=["shoaib",555,true]

// pick out only words
let onlyWords = mixedItems.filter(item => typeof item ==="string")
console.log(onlyWords);