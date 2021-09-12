const sidebar = document.getElementById('sidebar');
const s1 = document.getElementById('s1');
const s11 = document.querySelectorAll('#s11');
const s212 = document.querySelectorAll('#s212');
const s2111 = document.querySelectorAll('#s2111');
const s3 = document.querySelectorAll('#s3');
const side2 = document.getElementById('side-2');
const right = document.getElementById('right')
function myFunction() {
    s1.style.display = "none";
    side2.style.display = "none";

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
    sidebar.style.width="4%";
}
function myFunction2() {
    s1.style.display = "flex";
    side2.style.display = "flex";

    for(var i = 0; i < s11.length; i++) {
        s11[i].style.display = "flex";
    }
    for(var i = 0; i < s2111.length; i++) {
        s2111[i].style.display = "flex";
    }
    for(var i = 0; i < s212.length; i++) {
        s212[i].style.display = "flex";
    }
    for(var i = 0; i < s3.length; i++) {
        s3[i].style.display = "flex";
    }
    right.style.display = "none";
    sidebar.style.width="16%";
}