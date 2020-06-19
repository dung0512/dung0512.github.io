function findPosEdge(s1,s2){
    s1 = s1.slice(0,s1.lastIndexOf(s2));
    return s1.lastIndexOf(s2);
}

var s1= "This is a beautiful day, is it?"
var s2="isa";
console.log(findPosEdge(s1,s2));
