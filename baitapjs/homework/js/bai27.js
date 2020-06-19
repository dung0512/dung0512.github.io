var students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "DO THi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
];

function chuanHoa(str){
    str= str.toLowerCase().trim().replace(/\s+/g," ").split(" ");
    var res="";
    
    for(var i=0;i<str.length;i++){
        res += str[i].slice(0,1).toUpperCase().concat(str[i].slice(1,str[i].length)).concat(" ");
    }

    return res;
}

var newStudent =students.map((students)=>{
    var newStudent1 = {...students};
    newStudent1.firstName = chuanHoa(newStudent1.firstName);
    newStudent1.lastName = chuanHoa(newStudent1.lastName);
    return newStudent1;
});
var result = newStudent.filter((newStudent) =>{
    return newStudent.firstName.length>3 && (newStudent.firstName.includes("a") || newStudent.firstName.includes("A"));
    
})
console.log(result);



