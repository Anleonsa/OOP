/**
 *Find Palindromes
 *@param {string} text - Text to analize
 *@returns {string[]} - List of palindromes
*/
const findPalindromes = text => {

  //This function normalize words to clean accents and punctuation marks
  const normalize = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[.,;:¿?!¡(){}"«»“”‘’'\[\]-]+/g, "").toLowerCase()

  const palindromes = [];
  const wordList = text.split(' ');

  wordList.map(word => {
    if (normalize(word) === normalize(word).split('').reverse().join('')) {
      palindromes.push(normalize(word).toLowerCase());
    }
  })
  return palindromes;
}

/**
 *Find Anagrams
 *@param {string} text - Text to analize
 *@returns {} - List of anagrams
*/
const findAnagrams = text => {

  //This function normalize words to clean accents and punctuation marks
  const normalize = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[.,;:¿?!¡(){}"«»“”‘’'\[\]-]+/g, "").toLowerCase()

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

  const anagrams = {};
  const wordList = text.split(' ');

  for (let word of wordList) {
    word = normalize(word);
    if (anagrams[word.length]) {
      for(const subWord of anagrams[word.length]) {
        if (areAnagram({word1: word, word2: subWord})) {
          anagrams[word.length].push(word);
          break;
        }
      }
    } else anagrams[word.length] = [word]
  }
  return Object.values(anagrams).filter(list => list.length > 1);
}