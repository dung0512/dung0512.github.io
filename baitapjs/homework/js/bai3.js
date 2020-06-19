do{
    var n = prompt("Nhập số n: ","0");
    var number = Number(n);
}while(Number.isNaN(number));

for(var i=1;i<=number;i++){
    if(i%2 == 0) console.log(i);
}