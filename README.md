# Support Engineer Lexart

Welcome to this repository. It contains a series of small challenges for a job opportunity at Lexart.

## Programing Challenge

<summary><strong>
Create an algorithm that runs through a one-dimensional array containing letters and numbers:<br />
- Obtain an array containing only letters<br />
- Obtain an array containing only numbers<br />
- Obtain the largest number from the previous array<br />
</strong></summary><br />

For this I defined a function named <i>`getInfoFromArray`</i>. It takes an array as an argument. The function creates two new arrays, lettersArray and numbersArray, and a variable called highestNumber initialized to 0. It then filters through the input array and adds any items that are numbers to the numbersArray, and any items that are strings to the lettersArray. Finally, it finds the highest number in numbersArray using the Math.max method and assigns it to highestNumber. The function then returns an object containing the lettersArray, numbersArray, and highestNumber.
