function chuanHoa(str){
    str= str.toLowerCase().trim().replace(/\s+/g," ").split(" ");
    var res="";
    console.log(str);
    
    for(var i=0;i<str.length;i++){
        res += str[i].slice(0,1).toUpperCase().concat(str[i].slice(1,str[i].length)).concat(" ");
    }

    return res;
}

var str = "       lE     tHI ThuY       HiEN           ";
console.log(chuanHoa(str));
