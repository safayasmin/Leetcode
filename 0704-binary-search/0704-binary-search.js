/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    var s=nums.sort((a,b)=>a-b);
    for(var i=0;i<s.length;i++){
        if(s[i]===target){
            return i;
        }
    }
    return -1
    
};
console.log(search([-1,0,3,5,9,12,4],9))