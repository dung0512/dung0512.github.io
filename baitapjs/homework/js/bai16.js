function pickId(str){
    str = str.slice(str.lastIndexOf("/")+1,str.length);
    return str;
}

var str = "https://www.facebook.com/lehien.1410";
console.log(pickId(str));
