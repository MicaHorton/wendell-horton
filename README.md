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
