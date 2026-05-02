/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
   var min = Math.min(...nums)
   var max = Math.max(...nums)

   var dev = 1

   for(var i = 1; i <= min; i++){
      if(min % i == 0 && max % i == 0){
         dev = i
      }
   }

   return dev
};

console.log(findGCD([3,3]));