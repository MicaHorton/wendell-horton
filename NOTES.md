# How To Use Latex Documents
- Use Pandoc to convert text macros. It will convert some math macros to MathML.
- Use MathJax to style the rest of the math macros (that are still LaTex.) Also, improves browser support for MathML. 
- Prettify the HTML using an online converter. Change class to className.
- Style the HTML and inline-math with CSS.

# Processing a New File
1) convert with pandoc -f latex -t html -o ch#.html Ch#-nonumbers.tex
2) cleanup
    - create indents
    - get rid of log id's
    - change class to ClassName


# Some React Notes
- ES6 Script is the base for JavaScript and knockoffs like ActionScript or whatever. JavaScript is ovbiously the most popular one, so much so, people often use the terms interchangably. 
- React uses JSX

promises
.then
.catch (only errors)
.finally (no mater)

Render - ComponentWillMount
Compare
Commit - ComponentDidMount

State can be changed, props cannot be.s
Props and state are related. 
The state of one component will often become the props of a child component.

Migrating from Legacy Lifecycles
https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#fetching-external-data

Promises
.then
async/await

https://javascript.info/promise-basics

promise
    state - pending, fufilled, rejected
    result - undefined, value, error

.then 
    two built-in fuctions: result and error

.catch
    like .then but only for errors

.finally
    like .then, but regardless of result or error