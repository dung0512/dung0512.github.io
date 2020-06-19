function delSpace(str){
    str = str.trim();
    while(str.includes(" ")){
        str = str.substring(0,str.indexOf(" ")).concat(str.substring(str.indexOf(" ")+1,str.length));
    }
    return str;
}

var str="	Hello     world   ";


console.log(delSpace(str));
