do{
    var n = prompt("Nhập số n: ","0");
    var number = Number(n);
}while(Number.isNaN(number));
var sum=0;
for(var i=1;i<=number;i++){
    sum += i;
}
console.log(sum);
