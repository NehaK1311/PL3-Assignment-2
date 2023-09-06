const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

/*const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

are used to select HTML elements using JavaScript. They utilize the document.querySelector() method, which is a built-in method in JavaScript that allows you to select an HTML element based on a CSS selector.

Here's what each line does:

const burger = document.querySelector('.burger');

This line selects an element with a class of "burger" from the HTML document.
It assumes that there's an HTML element with the class "burger", typically used for the hamburger menu icon.
const navLinks = document.querySelector('.nav-links');

This line selects an element with a class of "nav-links" from the HTML document.
It assumes that there's an HTML element containing the navigation links with the class "nav-links".
After these lines of code are executed, the variables burger and navLinks hold references to the selected HTML elements. You can then use these variables to manipulate these elements using JavaScript.

For example, with the lines of code you provided and the subsequent event listener, you can toggle the "active" class on the navLinks element when the burger icon is clicked, effectively showing or hiding the navigation links based on the responsive design behavior.
 */

/*burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
So, when the "burger" icon is clicked, the event listener triggers the callback function, which toggles the "active" class on the navLinks element. This class is likely used in your CSS to control the visibility and appearance of the navigation links, often as part of a responsive design where the links are hidden by default on small screens and revealed when the burger menu is clicked. */