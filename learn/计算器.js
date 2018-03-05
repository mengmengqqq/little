var a="";
var b="";
var c="";
function clicki(){
    if(b===""||b==="+"||b==="-"||b==="*"||b==="/"){
        if(event.srcElement.innerText==="0"){
            a = "";
            display.innerText = 0;
            return;
        }
    }
    if(b==="."||b==="+"||b==="-"||b==="*"||b==="/"){
        if(event.srcElement.innerText==="."||event.srcElement.innerText==="+"||event.srcElement.innerText==="-"||event.srcElement.innerText==="*"||event.srcElement.innerText==="/"){
            b="+";
            display.innerText=a;
            return;
        }
    }
    if(event.srcElement.innerText==="="){
        return;
    }
    if(event.srcElement.innerText==="C") {
        a = "";
        b="+";
        display.innerText = 0;
        return;
    }
    b=event.srcElement.innerText;
    a+=event.srcElement.innerText;
    display.innerText=a;
}
function clickii(){
    var anwser;
    anwser=eval(a);
    a=anwser;
    display.innerText=a;
}