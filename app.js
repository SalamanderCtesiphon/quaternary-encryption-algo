

const testString = 'test';

// take a string and map over it comparing the character to the
//one in the array returning the index of that character



const firstConversion = function(testString) {
  const firstCypher = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', '.', ',', ' ' ];
  let decimalConversion = [];
  for (let i = 0; i < testString.length; i++) {
  
    //take input and test it against all the elements
    //in the array returning the index of the character
    firstCypher.map((character) => {
      let input = testString.charAt(i)
      if(character === input) {
        let index = firstCypher.indexOf(character)
        decimalConversion.push(index)
      }
    })
  }
  return decimalConversion;
}

const firstEncryption = firstConversion(testString)

console.log(firstEncryption)