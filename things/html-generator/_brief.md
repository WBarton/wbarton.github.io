# Brief

A simplified version of HTML can be represented by using arrays to represent elements:

    [tagName, child1, child2, ...]

* The tag name is always the first entry in the array and is a string.
* The children can be either arrays or strings.
* If the child is a string it is treated as plain text, not HTML markup.
* If the child is an array it is treated as a nested element.
* There is no support for attributes, comments, etc., just elements and text.

Implement a JavaScript function that takes an array and generates the HTML string.

* Empty tags should be self-closing.
* Consecutive text nodes are merged in the finished output.
* No libraries, build processes or transpilers.

Examples:

    ['div'] => '<div/>'
    ['h1', 'Text'] => '<h1>Text</h1>'
    ['span', 'More', 'Text'] => '<span>MoreText</span>'
    ['a', ['b', 'More'], ' Text'] => '<a><b>More</b> Text</a>'
    ['p', '<b>Text</b>'] => '<p>&lt;b&gt;Text&lt;/b&gt;</p>'