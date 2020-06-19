function tong(n){
    if(n==0) return 0;
    return n+tong(n-1);
}

console.log(tong(9));
