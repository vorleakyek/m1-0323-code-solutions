# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
A: The “target” element that initiated the event, it doesn’t change through the bubbling process.

- What is the affect of setting an element to `display: none`?
A: Hide the element from the webpage

Note: The element does not contribute to the layout of the page. Any space it would have occupied is collapsed, and the surrounding elements adjust accordingly.

- What does the `element.matches()` method take as an argument and what does it return?
A: It takes a string for css selectors and return true/false based on the matching result.

Argument: A string containing valid CSS selectors to test the Element against.

Return: true if the Element matches the selectors. Otherwise, false.

- How can you retrieve the value of an element's attribute?
A: use the getAttribute() method


- At what steps of the solution would it be helpful to log things to the console?
A: in each of the for loop

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
A: I think we would have to add an eventlistener to each of the tab and view.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
A: I think we would have to use the classList.add and classList.remove properties to toggle the 'hidden' class on and off for each view element.

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
