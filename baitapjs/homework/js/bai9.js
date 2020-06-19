do{
    var n = prompt("Nhập số n: ","0");
    var number = Number(n);
}while(Number.isNaN(number));

var numberCheck = number;
var sum = 0;
while(numberCheck>0){ //121
    var x = numberCheck%10;
    sum = sum*10+x;
    numberCheck = numberCheck/10;
}
console.log(sum);

if(sum==number) {
    alert("YES")
    console.log("YES");
}
else{ 
    alert("NO")
    console.log("NO");
}
