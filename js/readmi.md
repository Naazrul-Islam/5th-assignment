Question number--- 1 : What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
getElementById:: find only one element by a unique "id" and return a single element or null if not found.
getElementByClassName:: find all element with a given class name and return a htmlCollection.
querySelector:: it can select by any css selector and return the first matching element.
querySelectorAll::same as querySelector but return all matching element.


Question number--- 2 : How do you create and insert a new element into the DOM?

Answer::
create and insert a new element into the Document Object Model (DOM), you first use document.createElement() to create the element and then use one of several methods to place it in the desired location. The insertion method depends on whether you want to add the new element as a child, sibling, or replace an existing element.



Question number--- 3 :What is Event Bubbling and how does it work?

ANSwer:

event is a JavaScript concept that describes how events propagate or bubble up through the DOM. 
How Event Bubbling Works:
Event Target--->Target Phase--->Bubbling Phase---> Propagation--->Event Stop.


Question number ---4; What is Event Delegation in JavaScript? Why is it useful?
 
 ANSWER:
 Event Delegation is a technique where you attach a single event listener to a parent element, and use it to handle events for all of its child elements (even ones that may be added later).

it is usefull because 
fewer event listeners, works with dynamic content, and makes my code efficient.



Question number ---5;  What is the difference between preventDefault() and stopPropagation() methods?


ANNSWER:
preventDefault() stops the defult browser behavior and stopPropagation() stop event flow in the DOM tree.


























