var a = [1,3,6,9,11,20];
var k=13;
a.push(k);

var result = a.sort((a,b) =>{
    return a-b;
})
console.log(result);
