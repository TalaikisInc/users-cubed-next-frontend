import hljs from 'highlight.js/lib/highlight.js'
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
hljs.registerLanguage('python', require('highlight.js/lib/languages/python'))

export const highlightedCode = (code, language) => hljs.highlight(language, code).value
