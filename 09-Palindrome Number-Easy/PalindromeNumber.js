var isPalindrome = function(x) {
    //exclude the invalid cases
    if (x<0) return false
    if (x<10) return true
    if (x>=10 && x%10==0) return false
    
    let revert = 0
    while(x>revert){
        if(x==revert){
            return true
        }
        revert = revert*10 + x%10 
        x = Math.floor(x/10) 
    }
    return x==revert || x==Math.floor(revert/10)
};