function capitalize(string) {
  let stringArray = string.split('');
  stringArray[0] = stringArray[0].toUpperCase();
  return stringArray.join('');
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

function caesarCipher(string, shift) {
  let stringArray = string.split('');
  let finalArray = [];

  for (let character of stringArray) {
    if (
      (character >= 'a' && character <= 'z') ||
      (character >= 'A' && character <= 'Z')
    ) {
      let newCharacter = String.fromCharCode(character.charCodeAt(0) + shift);

      if (
        (newCharacter < 'a' || newCharacter > 'z') &&
        (newCharacter < 'A' || newCharacter > 'Z')
      ) {
        if (character >= 'a' && character <= 'z') {
          newCharacter = String.fromCharCode(
            newCharacter.charCodeAt(0) - 122 + 96,
          );
        } else {
          newCharacter = String.fromCharCode(
            newCharacter.charCodeAt(0) - 90 + 64,
          );
        }
      }
      finalArray.push(newCharacter);
    } else {
      finalArray.push(character);
    }
  }

  return finalArray.join('');
}

function analyzeArray(array) {
  let finalObject = {};
  let mean = 0;
  array.forEach((value) => {
    mean += value;
  });
  finalObject.average = mean / array.length;
  array.sort((a, b) => a - b);
  finalObject.min = array[0];
  finalObject.max = array[array.length - 1];
  finalObject.length = array.length;
  return finalObject;
}

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
