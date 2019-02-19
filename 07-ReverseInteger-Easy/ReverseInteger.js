var reverse = function(x) {
    let sign = Math.sign(x);
    let s = "";
    sign>=0 ? sign="" : sign="-";
    x = Math.abs(x);
    while(x>=10){
        let pop = x%10
        x= Math.floor(x/10)
        s = s + pop.toString()
    }
    s = sign + s + x.toString()
    if(s>Math.pow(2, 31)-1 || s<Math.pow(-2, 31)){
        return 0
    }
    return s
};