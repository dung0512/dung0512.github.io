do{
    var n = prompt("Nhập số n: ","0");
    var number = Number(n);
}while(Number.isNaN(number));

for(var i=2;i<=n;i++){
    for(var j=1;j<=10;j++){
        console.log(i+"x"+j+"="+i*j);
    }
}