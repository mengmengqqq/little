var liid = document.getElementsByClassName('liid');
var b_1 = document.getElementsByClassName('b_1');
var one = document.getElementsByClassName('one');
b_1.style.display = 'none';
liid.onmouseover = function (){
    b_1.style.display = 'block';
}
liid.onmouseout = function (){
    b_1.style.display = 'none';
}
b_1.onmouseover = function (){
    b_1.style.display = 'block';
}
b_1.onmouseout = function (){
    b_1.style.display = 'none';
}
