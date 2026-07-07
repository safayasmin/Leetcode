/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   var res1=s.split("").sort().join("");
   var res2=t.split("").sort().join("");
   if(res1===res2){
    return true;
   }else{
    return false;
   }
};