function letterFinder(word, match) {
  for (let i = 0; (i < word.length); i++) {
    let counter = word[i];
    if (counter === match) {
      console.log("Found the match at " + i);
    } else {
      console.log("---No Match found at " + i);
    }
  }
}
letterFinder("test", "t");
