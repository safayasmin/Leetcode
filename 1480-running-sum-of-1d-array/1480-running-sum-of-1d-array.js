/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var result=[]
    var sum=0
    for(i=0;i<nums.length;i++){
       result.push(sum+=nums[i])
    }
    return result
};