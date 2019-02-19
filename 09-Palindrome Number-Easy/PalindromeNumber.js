var isPalindrome = function(x) {
    //invalid case
    if (x<0) return false
    if (x<10) return true
    if (x>=10 && x%10==0) return false
    
    let revert = 0
    while(x>revert){
        if(x==revert){
            return true
        }
        revert = revert*10 + x%10 //revert = 1 revert = 12
        x = Math.floor(x/10) // x = 12 x = 1
    }
    return x==revert || x==Math.floor(revert/10)
};