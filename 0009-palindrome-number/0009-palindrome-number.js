/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var words=x.toString()

    var reversed=words
    .split("")
    .reverse()
    .join("")
    
    if(words===reversed){
        return true
    }else{
        return false
    }
};
console.log(isPalindrome(10))