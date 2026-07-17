/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    var max=0;
    for(var i=0;i<accounts.length;i++){
        var res=accounts[i].reduce((a,b)=>a+b,0);
        if(res>max){
            max=res;
        }
    }
    return max
};