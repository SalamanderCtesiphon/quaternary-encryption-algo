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
      if(character === testString.charAt(i)) {
        decimalConversion.push(firstCypher.indexOf(character));
      }
    });
  };
  return decimalConversion;
};

const firstEncryption = firstConversion(testString);

//take the first encryption array and convert it to a quaternary array
//is there a quarternary notation in javascript>?

const secondConversion = function(firstEncryption) {
  let quarterConversion = [];
  firstEncryption.map((chars)  => {
    quarterConversion.push(chars.toString(4))
  });
  return quarterConversion;
};

const yourEncryptedString = secondConversion(firstEncryption)

console.log(yourEncryptedString);