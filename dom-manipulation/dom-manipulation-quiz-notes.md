# dom-manipulation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `className` property of element objects?
A: The className property of the Element interface gets and sets the value of the class attribute of the specified element.

Note: The name className is used for this property instead of class because of conflicts with the "class" keyword in many languages which are used to manipulate the DOM.

- How do you update the CSS class attribute of an element using JavaScript?
A: We can use the className property of the element to set the value of the class that meet a certain condition.

Note: classList also has useful methods for adding, removing, and toggling.

- What is the `textContent` property of element objects?
A: textContent gets the content of all elements, including <script> and <style> elements.

- How do you update the text within an element using JavaScript?
A: document.querySelector('selector').textContent = "Texts"

- Is the `event` parameter of an event listener callback always useful?
A: It's depending on what information we need. So, if we don't need to know anything about the event occurs then, it won't be useful.

- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
A: I think it would be more complicated if we didn't use a variable to keep track of the number clicks since there won't be an easy way to increment the value.

- Why is storing information about a program in variables better than only storing it in the DOM?
A: We can easily access it and it's more flexible to change it.


## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
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
  width: 100%;
}
```
