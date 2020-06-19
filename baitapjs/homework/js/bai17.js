function min(a,b,c){
    var min1 = a<c?a:c;
    var min2 = a<b?a:b;
    return min1<min2?min1:min2;
}
function max(a,b,c){
    var max1 = a>c?a:c;
    var max2 = a>b?a:b;
    return max1>max2?max1:max2;
}
var num1,num2,num3;
var number1, number2,number3;
do{
    num1 = prompt("Nhập vào số thứ nhất: ","0");
    number1 = Number(num1);
}while(Number.isNaN(number1));
do{
    num2 = prompt("Nhập vào số thứ nhất: ","0");
    number2 = Number(num2);
}while(Number.isNaN(number2));
do{
    num3 = prompt("Nhập vào số thứ nhất: ","0");
    number3 = Number(num3);
}while(Number.isNaN(number3));

console.log("Min: ",min(number1,number2,number3));
console.log("Max: ",max(number1,number2,number3));