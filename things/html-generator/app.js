var Module = (function () {
  'use strict';

  function _flatten (array) {
    return [].concat.apply([], array);
  }

  function _encodeString (rawString) {
    var encodedString = rawString.replace(/[\u00A0-\u9999<>\&]/gim, function (i) {
      return '&#' + i.charCodeAt(0) + ';';
    });

    return encodedString;
  }

  function generate (source) {
    var result;

    function process (arr) {
      arr.forEach(function (el, i) {
        if (i === 0) {
          var closeTag = (arr.length > 1) ? '>' : '/>';
          arr[0] = '<' + el + closeTag;
          if (arr.length > 1) {
            arr.push('</' + el + '>');
          }
        } else if (Array.isArray(el)) {
          process(el);
        } else {
          arr[i] = _encodeString(el);
        }
      });
      result = arr;
    }
    
    process(source);

    return _flatten(result).join('');
  }
  
  return {
    generate: generate
  };

})();
