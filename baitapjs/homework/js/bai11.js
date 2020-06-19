function countSpace(str){
    var count = 0;
    for(var i=0;i<str.length;i++){
        if(str[i]==" ") count++;
    }
    return count;
}

var str = " Hello  world";
console.log(countSpace(str));
