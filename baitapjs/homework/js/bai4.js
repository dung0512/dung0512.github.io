function isPrime(n){
    if(n<2) return false;
    for(var i=2;i<=Math.sqrt(n);i++){
        if(n%i == 0) return false;
    }
    return true;
}

do{
    var n = prompt("Nhập số n: ","0");
    var number = Number(n);
}while(Number.isNaN(number));

for(var i=1;i<=number;i++){
    if(isPrime(i)) console.log(i);
}
