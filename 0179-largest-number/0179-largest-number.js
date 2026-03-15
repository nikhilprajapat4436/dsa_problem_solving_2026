/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    

    nums.sort((a,b)=>{
        let order1 = "" + a + b;
        let order2 = "" + b + a;
        return order2 - order1;
    });

    let result = nums.join("");

    if(result[0] === "0"){
        return "0";
    }

    return result;



};