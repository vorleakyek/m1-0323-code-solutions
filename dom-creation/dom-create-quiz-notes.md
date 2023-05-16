# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
A: No, it's only creating a new element in memory. The element is not visible on the page until it is added to the DOM tree.

- How do you add an element as a child to another element?
A: node.append(nodes or string)

Notes:
Here are more insertion methods, they specify different places where to insert:

o node.append(...nodes or strings) – append nodes or strings at the end of node,
o node.prepend(...nodes or strings) – insert nodes or strings at the beginning of node,
o node.before(...nodes or strings) –- insert nodes or strings before node,
o node.after(...nodes or strings) –- insert nodes or strings after node,
o node.replaceWith(...nodes or strings) –- replaces node with the given nodes or strings.

Arguments of these methods are an arbitrary list of DOM nodes to insert, or text strings (that become text nodes automatically).

- What do you pass as the arguments to the `element.setAttribute()` method?
A: setAttribute(name, value)

A string specifying the name of the attribute
A string containing the value to assign to the attribute.

Note:
Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

- What steps do you need to take in order to insert a new element into the page?
A: Create a new elemment, set the attribute if needed, and then append it

Note: can use other methods as mentioned in the previous questions

- What is the `textContent` property of an element object for?
A: to gets or sets the text inside the node

- Name two ways to set the `class` attribute of a DOM element.
A: use the className or the setAttribute methods

o pokemonCardDiv.className = 'pokemon-card';
o image.setAttribute('src', pokemon.imageUrl);

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
A: Can reuse the function and only create it when needed because sometime we don't know if we would need it
in advance. Depending on how users interact with the webpage, it will just create those element accordingly.

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
