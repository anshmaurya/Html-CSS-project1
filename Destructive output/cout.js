function Words(str) {
    const wordss = str.split(" ");
    const map = new Map();
  
    for (let word of wordss) {
      if (map.has(word)) {
        map.set(word, map.get(word) + 1);
      } else {
        map.set(word, 1);
      }
    }
  
    return map;
  }
  
  const sentence = "Hey , I am Ansh Maurya.";
  console.log(Words(sentence));