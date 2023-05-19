# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
A: The “target” element that initiated the event, it doesn’t change through the bubbling process.

- Why is it possible to listen for events on one element that actually happen its descendent elements?
A: because of event bubbling and capturing?

- What DOM element property tells you what type of element it is?
A: nodeName or tagName properties

- What does the `element.closest()` method take as its argument and what does it return?
A: arguement: any css selectors such as class, ID, and type
A: return: The closest ancestor Element or itself, which matches the selectors. If there are no such element, null.

- How can you remove an element from the DOM?
A: using the remove method

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
A: By using the event delegation, which is attaching a single event listener to a parent element to handle events triggered by its descendant elements.


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
