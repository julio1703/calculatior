const numButtons = Array.from(document.querySelectorAll(".numButton"));
const opButtons = Array.from(document.querySelectorAll(".opButton"));
const deletes = document.querySelector("#delete");
const equales = document.getElementById("equal");
const clears = document.getElementById("clear");
const results = document.querySelector("#result");
let equalCheck = 0;
let check1 = 0;
numButtons.forEach((element) => {
    element.addEventListener("click", (event) => {
        if(equalCheck==1 && check1==1||check1==2){
            result.textContent = "";
            results.textContent += event.target.textContent;
            check1 = 0;
        }
        else {result.textContent += event.target.textContent;}
    })
});
opButtons.forEach((element) => {
    element.addEventListener("click", (event) => {
        if(check1==2){results.textContent="";
        results.textContent += event.target.textContent}
        else {results.textContent += event.target.textContent;
        equalCheck=0;
        check1=0;
        }
    })
});
deletes.addEventListener("click", (event) => {
    if(equalCheck==1){results.textContent="";}
    else {results.textContent = results.textContent.split("").splice(0, results.textContent.length - 1).join("");}
})
function check(array,i,mark) {
    if (i == array.length && mark == 0) return true;
    else if (i == array.length && mark == 2) return false;
    else if (i == array.length && mark == 1) return false;
    else if (array[i].valueOf() >= 0 && array[i].valueOf() < 10) return check(array, i+=1, 0);
    else if (array[i] == "+" && mark == 2 || array[i] == "-" && mark == 2 || array[i] == "*" && mark == 2 || array[i] == "/" && mark == 2) return false;
    else if (array[i] == "+" || array[i] == "-" || array[i] == "*" || array[i] == "/") return check(array, i+=1,2);
    else if (array[i] == "." && mark == 1) return false;
    else if (array[i]==".")return check(array,i+=1,1);
}
equales.addEventListener("click",(event)=>{
    equalCheck=1;
    if(check(results.textContent.split(""),0,0)==true){
        results.textContent=eval(results.textContent);
        check1=1;
    }else{
        results.textContent="ERROR"
        check1=2;
    };
});
clears.addEventListener("click",(event)=>{
    results.textContent="";
})