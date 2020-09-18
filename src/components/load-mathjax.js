var loadMathJax = function () {
    console.log('mathjax');

    var config = document.createElement('script');
    config.setAttribute('defer', 'defer');
    config.type = 'text/javascript';
    config.src = 'mathjax-config.js';
    document.getElementsByTagName('head')[0].appendChild(config);

    var mathjax = document.createElement('script');
    mathjax.setAttribute('defer', 'defer');
    mathjax.type = 'text/javascript';
    mathjax.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
    document.getElementsByTagName('head')[0].appendChild(mathjax);
    
}

export default loadMathJax;