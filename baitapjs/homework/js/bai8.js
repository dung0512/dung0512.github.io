do{
    var n = prompt("Nhập số n: ","0");
    var number = Number(n);
}while(Number.isNaN(number));

var check = true;
while(number>0){
    var i = number%10;
    if(i%2==0){
        check = false;
        break;
    }
    number /= 10;
}

if(check) console.log("YES");
else console.log("NO");

