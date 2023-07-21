# Support Engineer Lexart

Welcome to this repository. It contains a series of small challenges for a job opportunity at Lexart.

## Database Challenge

For this, I had to Download the World database from the following link: https://dev.mysql.com/doc/index-other.html and import it into a database management system. Then I had to create a table called "AverageLifeExpectancy" that would contain the following information: LifeProm and Region. Then I had to generate the pivot table to link "AverageLifeExpectancy" with its data.

This repository contains the .sql with the queries I used to solve this challenge, along with the World database's as well.

## Programing Challenge

<summary><strong>
Create an algorithm that runs through a one-dimensional array containing letters and numbers:<br />
- Obtain an array containing only letters<br />
- Obtain an array containing only numbers<br />
- Obtain the largest number from the previous array<br />
</strong></summary><br />

For this I defined a function named <i>`getInfoFromArray`</i>. It takes an array as an argument. The function creates two new arrays, lettersArray and numbersArray, and a variable called highestNumber initialized to 0. It then filters through the input array and adds any items that are numbers to the numbersArray, and any items that are strings to the lettersArray. Finally, it finds the highest number in numbersArray using the Math.max method and assigns it to highestNumber. The function then returns an object containing the lettersArray, numbersArray, and highestNumber.
