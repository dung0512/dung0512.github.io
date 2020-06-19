var a = [1,2,3,4,4,4,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
var max = a[0];
for(var i=0;i<a.length;i++){
    if(a[i]>max) max = a[i];
}
var c = [];
for(var i=0;i<=max;i++){
    c[i]=0;
}
for(var i=0;i<a.length;i++){
    c[a[i]]+=1;
}

var countOccur = c[0];
for(var i=0;i<=max;i++){
    if(c[i]>countOccur) countOccur = c[i];
}

for(var i=0;i<=max;i++){
    if(c[i]==countOccur){
        console.log("Số xuất hiện nhiều nhất là số: ",i);
        console.log("Xuất hiện: ",c[i],"lần");
    }
}

