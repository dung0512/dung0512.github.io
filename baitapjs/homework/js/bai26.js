function findPos(a,k){
    var c=[];
    for(var i=0;i<a.length;i++){
        c[i] = Math.abs(k-a[i]);
    }
    var min=c[0];
    for(var i=0;i<c.length;i++){
        if(c[i]<min) min = c[i];
    }
    for(var i=0;i<c.length;i++){
        if(min==c[i]) {
            console.log(a[i]);
        }
    }
}

var  a = [1,2,3,4,6,7];
// findPos(a,8);
findPos(a,5);