/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
      let minprice = Infinity;
    let maxprofit = 0;
    for(let price of prices){
        minprice = Math.min(minprice,price);
        let profit = price - minprice;
        maxprofit = Math.max(maxprofit,profit)
    }
    return maxprofit;
};