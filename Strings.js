/**
 *Find Palindromes
 *@param {string} text - Text to analize
 *@returns {string[]} - List of palindromes
*/
const findPalindromes = text => {

  //This function normalize words to clean accents and punctuation marks
  const normalize = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[.,;:¿?!¡(){}"«»“”‘’'\[\]-]+/g, "").toLowerCase()

  //List of found palindromes at the text
  const palindromes = [];

  const wordList = text.split(' ');

  wordList.map(word => {
    if (normalize(word) === normalize(word).split('').reverse().join('')) {
      palindromes.push(normalize(word).toLowerCase());
    }
  })
  return palindromes;
}


const areAnagram = ({ word1, word2 }) => {
  if (word1.length !== word2.length) return false
  const lettersList1 = word1.split('');
  const lettersList2 = word2.split('');

  for (const letter of lettersList1) {
    if (lettersList2.includes(letter)) lettersList2.splice(lettersList2.indexOf(letter), 1);
    else return false
  }
  return true
}

/**
 *Find Anagrams
*/
const findAnagrams = text => {

  //This function normalize words to clean accents and punctuation marks
  const normalize = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[.,;:¿?!¡(){}"«»“”‘’'\[\]-]+/g, "").toLowerCase()

  const orderedLetters = {};
  const wordList = text.split(' ');

  for (let word of wordList) {
    word = normalize(word);

    if (orderedLetters[word.length]) {
      for(const subList of orderedLetters[word.length]) {
        if (areAnagram({word1: word, word2: subList[0]})) {
          subList.push(word);
          break;
        }
      }
      orderedLetters[word.length].push([word]);
    } else orderedLetters[word.length] = [[word]];
  }
  const anagrams = [];
  for(const list of Object.values(orderedLetters)) {
    for(subList of Object.values(list)) {
      if (subList.length > 1) anagrams.push(subList);
    }
  }
  return anagrams;
}

console.log(findAnagrams("Hola aloh cora aroc roma amor crustaceo crustacoe"));