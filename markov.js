/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/
  //NOTE: The context of this constructor was included in the source code for this assignment.
  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chains = new Map(); // new Map() is the same as {}
    for (let i = 0; i < this.words.length; i++) { //NOTE: need to index each word in  the array
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;
      if (chains[word]) chains[word].push(nextWord);
      else chains[word] = [nextWord];
    }
    this.chains = chains;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let keys = Array.from(Object.keys(this.chains)); // NOTE need the keys to be an array to use Math.random() 
    let key = keys[Math.floor(Math.random() * keys.length)];
    let output = []; // NOTE: output is an array of words
    while (output.length < numWords && key !== null) { // stop when we reach numWords or when we reach a word that doesn't have a next word
      output.push(key);
      key = this.chains[key][Math.floor(Math.random() * this.chains[key].length)];
    }
    return output.join(" ");
  }

}

let mm = new MarkovMachine("the cat in the hat");
console.log(mm);
console.log(mm.makeText());
console.log(mm.makeText(50));
let mm2 = new MarkovMachine("One fish two fish red fish blue fish");
console.log(mm2);
console.log(mm2.makeText());
console.log(mm2.makeText(50));
let mm3 = new MarkovMachine("Would you like them here or there? I would not like them here or there. I would not like them anywhere.");
console.log(mm3);
console.log(mm3.makeText());
console.log(mm3.makeText(50));
module.exports = { MarkovMachine };