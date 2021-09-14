const sidebar = document.getElementById('sidebar');
const s1 = document.getElementById('s1');
const s11 = document.querySelectorAll('#s11');
const s212 = document.querySelectorAll('#s212');
const s2111 = document.querySelectorAll('#s2111');
const s3 = document.querySelectorAll('#s3');
const side2 = document.getElementById('side2');
const right = document.getElementById('right')
function myFunction() {
    side2.style.display = "none";
    s1.style.display = "none";

    for(var i = 0; i < s11.length; i++) {
        s11[i].style.display = "none";
    }
    for(var i = 0; i < s2111.length; i++) {
        s2111[i].style.display = "none";
    }
    for(var i = 0; i < s212.length; i++) {
        s212[i].style.display = "none";
    }
    for(var i = 0; i < s3.length; i++) {
        s3[i].style.display = "none";
    }
    right.style.display = "inline-block";
    sidebar.style.minWidth="50px";
    sidebar.style.width="50px";
}
function myFunction2() {
    side2.style.display = "flex";
    s1.style.display = "flex";
    for(var i = 0; i < s11.length; i++) {
        s11[i].style.display = "inline-block";
    }
    for(var i = 0; i < s2111.length; i++) {
        s2111[i].style.display = "block";
    }
    for(var i = 0; i < s212.length; i++) {
        s212[i].style.display = "flex";
    }
    for(var i = 0; i < s3.length; i++) {
        s3[i].style.display = "block";
    }
    right.style.display = "none";
}