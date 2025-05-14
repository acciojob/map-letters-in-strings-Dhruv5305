const mapLetters = (str) => {
  const result = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!result[char]) {
      result[char] = [];
    }
    result[char].push(i);
  }

  return result;
};

console.log(mapLetters("dodo"));     
console.log(mapLetters("froggy"));   
console.log(mapLetters("grapes"));   