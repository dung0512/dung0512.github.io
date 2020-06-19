function isPrime(n){
    if(n<2) return false;
    for(var i=2;i<=Math.sqrt(n);i++){
        if(n%i == 0) return false;
    }
    return true;
}

var a = [1,2,3,2,3,4,6,7];
var result = a.filter((value) =>{
    return isPrime(value);
})
console.log(result);
