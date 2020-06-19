var a = [9,8,7,6,4,5,3,2,1];
for(var i=0;i<a.length-1;i++){
    for(var j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
            var tg = a[i];
            a[i] = a[j];
            a[j] = tg;
        }
    }
}
console.log(a);
