var Module = (function () {
  'use strict';

  function _hexToRgb (hex) {
    var hexInt = parseInt(hex, 16);
    var r = (hexInt >> 16) & 255;
    var g = (hexInt >> 8) & 255;
    var b = hexInt & 255;

    return [r, g, b];
  }

  function _rgbToHex (r, g, b) {
    return ((r << 16) + (g << 8) + b).toString(16);
  }

  function averageColor (hex1, hex2) {
    var hex1Rgb = _hexToRgb(hex1);
    var hex2Rgb = _hexToRgb(hex2);
    var avgRgb = [];
    var avgHex;
  
    for (var i = 0; i < 3; i++) {
      avgRgb[i] = (Math.round((hex1Rgb[i] + hex2Rgb[i]) / 2));
    }

    return _rgbToHex(avgRgb[0], avgRgb[1], avgRgb[2]);
  }
  
  return {
    averageColor: averageColor
  };

})();
