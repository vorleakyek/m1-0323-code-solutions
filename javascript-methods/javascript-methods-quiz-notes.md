# javascript-methods-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
A: To check if the output is what we expected

- What is a method?
A: A function which is a property of an object.
A method, like a function, is a set of instructions that perform a task.

- How is a method different from any other function?
A: A method is associated with an object while a function is not.

- How do you remove the last element from an array?
A: using the pop() method removes the last element from an array and returns that element. This method changes the length of the array.

- How do you round a number down to the nearest integer?
A: Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.

- How do you generate a random number?
A: Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

- How do you delete an element from an array?
A: splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

- How do you append an element to an array?
A: push() method adds one or more elements to the end of an array and returns the new length of the array.
unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
Note: can also use the splice() method to add an element in array

```javascript
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

- How do you break a string up into an array?
A: split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

- Do string methods change the original string? How would you check if you weren't sure?
A: String methods does not change the original string. We can check it by conosle.log() the value of the string before and after the changes to check it.

- Roughly how many string methods are there according to the MDN Web docs?
A: around 50 methods

- Is the return value of a function or method useful in every situation?
A: probably not; sometime we don't need to know or store that information. We just need it to perform the action.

- Roughly how many array methods are there according to the MDN Web docs?
A: around 40 methods

- What three-letter acronym should you always include in your Google search about a JavaScript method or CSS property?
A: MDN Web Docs (formerly known as the Mozilla Developer Network or MDN) is a free resource for in-depth documentation on web standards such as HTML5, CSS, JavaScript, and much more.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
```

for HTML:
```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:
```css
div {
  width:100%
}
```
