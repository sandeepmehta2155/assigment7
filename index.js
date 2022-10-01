"use strict";

const l = console.log;

// Javascript Assignment 7

// 1. Input a String S, and check its length and if the length is greater than 4,
// truncate the input String and output the result -
// Input: Ice Output: Ice
// Input:Icecream Output:Icec...

// Answer:
// =>

/**
 *
 * @param {*} str
 * @returns string with truncate if length greater than 4
 */
const truncateString = (str) =>
  str.length > 4 ? str.slice(0, 4) + "..." : str;

// Output :
l(truncateString("Ice"));
l(truncateString("Icecream"));

// -------------------------------------------------------------------------------------------------

// 2. Input a String S with multiple words, and remove whitespaces and
// output the result -
// Input: “Hii Boy” Output: “HiiBoy”

// Answer:
// =>

/**
 *
 * @param {*} str
 * @returns string without any whitespaces
 */
const removeSpaces = (str) => str.replace(" ", "");

// Output :
l(removeSpaces("Hii Boy"));

// -------------------------------------------------------------------------------------------------

// 3. Input a String S with two words, and replace first word with second word
// and display the result -
// Input: “Hii Boy” Output: “Boy Hii”

// Answer:
// =>

/**
 *
 * @param {*} str
 * @returns words swapped from the sequence
 */
const swapWords = (str) => {
  const [a, b] = str.split(" ");
  return [b, a].join(" ");
};

l(swapWords("Hii Boy"));

// -------------------------------------------------------------------------------------------------

// 4. Input a String S with a word, and replace character “a” with “x” and
// display the result -
// Input: “apple” Output: “xpple”

// Answer:
// =>

/**
 *
 * @param {*} str
 * @returns string with replace "a" letter with "x"
 */
const replaceLetter = (str) => str.replace("a", "x");

// Output :
l(replaceLetter("apple"));

// -------------------------------------------------------------------------------------------------

// 5. What string method can be used to convert string into array ?

// Answer:
// =>

/*
1) split() 
2) toArray()
*/

// -------------------------------------------------------------------------------------------------

// 6. What string method can be used to check the occurrence of a specified
// text in a string?

// Answer:
// =>

/*
1) indexOf() 
2) findIndex()
*/

// -------------------------------------------------------------------------------------------------

// 7. How can you break a string to a newline in Javascript ?

// Answer:
// =>

/* Using \n & \r
 */

// 8. Write a Javascript function to test whether the first character of a string
// is lowercase.

// Answer:
// =>
const regEx = /[a-z]/;

/**
 *
 * @param {*} str
 * @returns boolean value  whether the first character of a string is lowercase.
 */
const testLowerCase = (str) => str && regEx.test(str[0]);

// Output :
l(testLowerCase("Hello"));
l(testLowerCase("hello"));

// 9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
// (any combination) using string methods.
// How will you handle that ?

// Answer:
// =>

/**
 *
 * @param {*} str
 * @returns string with lowered case
 */
const handleString = (str) => str.toLowerCase();

// Output :
l(handleString("yes"));
l(handleString("YES"));
l(handleString("Yes"));

// 10. Given a String S, achieve following tasks
// a) Convert the String into upper case.
// b) Convert only the first character to uppercase.
// c) Convert the String into lower case.
// d) Break the string into two halves and swap them.
// e) Count the repeating characters.
// f) Reverse the string

// Answer:
// =>

/**
 * 
 * @param {*} str 
 * @returns convert the String into upper case.
 */
const convertToUpperCase = (str) => str.toUpperCase();

/**
 * 
 * @param {*} str 
 * @returns convert only the first character to uppercase.
 */
const firstCharUpper = (str) =>
  regEx.test(str[0]) ? str[0].toUpperCase() + str.slice(1, str.length) : str;

/**
 * 
 * @param {*} str 
 * @returns convert the String into lower case.
 */
const convertToLowerCase = (str) => str.toLowerCase();

/**
 * 
 * @param {*} str 
 * @returns break the string into two halves and swap them.
 */
const breakString = (str) => swapWords(str);

/**
 * 
 * @param {*} str 
 * @returns reverse the string
 */
const reverseString = (str) => str && str.split("").reverse().join("");

/**
 * 
 * @param {*} str 
 * @returns count the repeating characters.
 */
const countRepeatingChar = (str) => {
  const obj = {};
  str.split("").forEach((i) => {
    obj[i] ? (obj[i] += 1) : (obj[i] = 1);
  });
  return obj;
};

l(convertToUpperCase("hello"));
l(firstCharUpper("hello"));
l(reverseString("hello"));
l(countRepeatingChar("hello"));
