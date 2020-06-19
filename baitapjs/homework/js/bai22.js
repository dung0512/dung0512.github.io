var a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];
var min=a[0];
var max=a[0];
var ave;
var sum = 0;
for(var i=0;i<a.length;i++){
    if(a[i]>max) max = a[i];
    else min = a[i];
    sum+=a[i];
}

console.log(max, min, sum/a.length);
