const getInfoFromArray = (array) => {
  const lettersArray = [];
  const numbersArray = [];
  let highestNumber = 0;

  array.filter((item) => {
    if (typeof item === 'number') numbersArray.push(item);
    if (typeof item === 'string') lettersArray.push(item);
  })

  highestNumber = Math.max(...numbersArray);

  return {
    lettersArray,
    numbersArray,
    highestNumber
  }
}

const array = ['a', 10, 'b', 'hello', 122, 15];

console.log(getInfoFromArray(array));