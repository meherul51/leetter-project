function result(){
    var mark = document.getElementById("number").value;
let letter = ""
switch(true){
    case mark>=80:
        letter = "5.00";
        break;
    case mark>=70:
        letter = "4.00";
        break;
    case mark>=60:
        letter = "3.50";
        break;
    case mark>=50:
        letter = "3.00";
        break;
    case mark>40:
        letter = "2.00";
        break;
    case mark>=33:
        letter = "1.00";
        break;
    default:
        letter = "0";
}
    document.getElementById("demo").innerHTML = letter;
}