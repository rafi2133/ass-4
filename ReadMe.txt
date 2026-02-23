1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
getElementById - to find only one element .
getElementsByClassName - to find the element which have the same class name.
querySelector - returns one element need to write like a css 
querySelectorAll - returns a static NodeList of ALL elements matching the selector.

2. How do you create and insert a new element into the DOM?
Answer: 
document.createElement('tag') - creates a new element.
element.innerHTML or element.innerText - adds content to the element.
parent.appendChild(child) - adds the element as the last child of the parent.
parent.insertBefore(newChild, existingChild) - adds the element before an existing child.
parent.append() - adds multiple elements or text at once

3. What is Event Bubbling? And how does it work?
Answer:
Event Bubbling - when an event happens on a child element, it first runs on that element, then on its parent, then on the parent's parent, all the way up to the document.
Example: Click on a button inside a div → button's click runs first → then div's click runs → then body's click runs.

4. What is Event Delegation in JavaScript? Why is it useful?
Answer:
Event Delegation - putting ONE event listener on a parent element instead of many listeners on each child.
The parent uses event.target to know which child was clicked.
Why useful? - Better performance, works for new elements added later, and cleaner code.

5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
preventDefault() - stops the browser's default behavior (like form submit, link click).
stopPropagation() - stops the event from bubbling up to parent elements.
Use preventDefault() to override default actions, use stopPropagation() to stop parent listeners from running.