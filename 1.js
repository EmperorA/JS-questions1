/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* Answer
The main types of datatypes are numbers, strings, boolean, arrays and objects.
Numbers can be integer numbers or floats(numbers with decimal points)
Strings are any series of characters included between double or single quotes.
boolean has one of the two values True or False
Objects are used to store-value pairs( each property associated with its own value)
Array is used to store multiple values in a single variable. It is
a collection of elements of any type which mmeans that you can create an
array with elements of type string, boolean, Number, obects..
There are also null, undefined and symbol data-types.
*/

/* EXERCISE 2
 Try to describe what an object is, in your own words.
*/

/* WRITE YOUR ANSWER HERE 
Object in JS is the most important data-type. it forms the building blocks for
modern JS. It iis quite different from JS ancient data-types (Number, strings boolean
    null, undefined...) in that these ancient data-types store single value
    each depending on their types.
Objects are more complex and may contain any combination of these
ancient data-types as welll as reference data-types.
A object is created with curly brackets with an optionall list of properties.
A property is a key:value paor where key is a string also called property name,
and value can be anything.
*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* WRITE YOUR ANSWER HERE 
console.log(12 + 20);
*/

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* WRITE YOUR ANSWER HERE 
var x = 12;
*/

/* EXERCISE 5
 Create a variable called name and assign to it your name as a string.
 
*/

/* WRITE YOUR ANSWER HERE
var name = "Austine"; */

/* EXERCISE 6
 Execute a subtraction between the number 4 and the variable x you declared before (which is storing the value 12).
*/

/* WRITE YOUR ANSWER HERE 
console.log(x - 4);
*/

/* EXERCISE 7
Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
 YOU DON'T NEED AN IF/ELSE BLOCK. It is enough to use console.log()
*/

/* WRITE YOUR ANSWER HERE 
var name1 = "john";
var name2 = "John";
console.long(name1 == name2);
console.log(name1.toLowercase == name2.toLowercase);

*/


/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
