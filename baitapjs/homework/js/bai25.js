function square(a){
    for(var i=0;i<a.length;i++){
        a[i] = Math.pow(a[i],2);
    }
}

var a = [1,2,3,2,3,4,6,7];
square(a);
var result = a.filter((value) =>{
    return value;
})

console.log(result);
