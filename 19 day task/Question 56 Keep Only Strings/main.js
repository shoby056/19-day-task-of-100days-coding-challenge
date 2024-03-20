//  Given a mix of different types of items,
//   make a new list that has only the words.
//list of mixed items
var mixedItems = ["shoaib", 555, true];
// pick out only words
var onlyWords = mixedItems.filter(function (item) { return typeof item === "string"; });
console.log(onlyWords);
