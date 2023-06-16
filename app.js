const testString = document.getElementById('msg').value;
// take a string and map over it comparing the character to the
//one in the array returning the index of that character

const searchBtn = document.querySelector('.search__btn');
searchBtn.addEventListener('click', (e) => {
  console.log(firstEncryption);
});





const firstConversion = function(testString) {

  const firstCypher = [ 
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', ' ' 
  ];

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

const firstResults = document.querySelector('.result');
const text = testString;
const display = text.toString();
firstResults.textContent = display

const firstEncodedArray = document.querySelector('.result2');
const text2 = firstEncryption;
const display2 = firstEncryption.toString();
firstEncodedArray.textContent = display2







//take the first encryption array and convert it to a quaternary array
//is there a quarternary notation in javascript>?

const secondConversion = function(firstEncryption) {

  let quarterConversion = [];

  firstEncryption.map((chars)  => {
    quarterConversion.push(chars.toString(3))
  });

  return quarterConversion;
};









const yourEncryptedString = secondConversion(firstEncryption)


const secondEncodedArray = document.querySelector('.result3');
const text3 = yourEncryptedString.toString();

secondEncodedArray.textContent = text3;




//now reverse the process

const firstDeCrypt = function(yourEncryptedString) {

  let utilityArray = [];

  yourEncryptedString.map((char) => {

    let num = Number(char)
    let sum = 0;

    while (num > 33) {
      num -= 100;
      sum += 9;
    }
    while (num > 3) {
      num -= 10;
      sum += 3;
    }
    while (num > 0) {
      num -= 1;
      sum += 1;
    }
   
    utilityArray.push(sum)
  })

  return utilityArray
};







const decryptionHolder = firstDeCrypt(yourEncryptedString)


//we receive an array containing the indices of the letters that
//need to be returned
//we iterate over the array containing the indices

const finalReversion = function(decryptionHolder) {
  const firstCypher = [ 
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', ' ' 
  ];

  let utilityHolder = [];
  
  for (let i = 0; i < decryptionHolder.length; i++) {
    let canidate = decryptionHolder[i];

    const kanji = firstCypher[canidate];
    utilityHolder.push(kanji);
  };

  return utilityHolder;
};

const finalVersion = finalReversion(decryptionHolder);

const ultimateVersion = finalVersion.toString();

const runningOutOfVariableNames = ultimateVersion.replaceAll(',', '');
