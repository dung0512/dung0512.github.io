// var a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
var a = [1,1,1,1,1,1,1,1,1,1];
var sortArr = a.sort((b,c) =>{
    return c-b;
})
var max = a[0];
var count =0;
for(var i=0;i<sortArr.length;i++){
    if(a[i]!=max) {
        console.log(a[i]);
        break;
    }
    count++;
}
if(count == sortArr.length) console.log(-1);
