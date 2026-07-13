/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var arr=[]
    for(var i=0;i<nums.length;i++){
        if(nums[i]!==0){
            arr.push(nums[i])
        }
    }
     for(var i=0;i<nums.length;i++){
         if(nums[i]===0){
             arr.push(nums[i]);
         }
     }
     for (var i = 0; i < nums.length; i++) {
        nums[i] = arr[i];
    }
};