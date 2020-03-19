const Module = (function () {
  'use strict';

  function averageIncrease (initial, current, years) {
    const percentageChange = current / initial;
    const exponent = 1 / years;
    const rateOfGrowth = Math.pow(percentageChange, exponent);
    const changePercentage = (rateOfGrowth - 1) * 100
    return Math.round(changePercentage * 10) / 10;
  }

  return {
    averageIncrease: averageIncrease,
  };

})();
