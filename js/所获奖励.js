function changeLiCnt1(){
    document.getElementById("div1").style.display="block";
    if(document.getElementById("div2").style.display="block"){
        document.getElementById("div2").style.display="none";
        document.getElementById("da2").style.backgroundColor= "#e7dfd6";
        document.getElementById("da2").style.height="40px";
        document.getElementById("da2").style.paddingTop="15px";
    }
    document.getElementById("da1").style.backgroundColor="rgb(240, 184, 120)";
    document.getElementById("da1").style.height="60px";
    document.getElementById("da1").style.paddingTop="35px";
}
function changeLiCnt2(){
    document.getElementById("div2").style.display="block";
    if(document.getElementById("div1").style.display="block"){
        document.getElementById("div1").style.display="none";
        document.getElementById("da1").style.backgroundColor= "#e7dfd6";
        document.getElementById("da1").style.height="40px";
        document.getElementById("da1").style.paddingTop="15px";
    }
    document.getElementById("da2").style.backgroundColor="rgb(240, 184, 120)";
    document.getElementById("da2").style.height="60px";
    document.getElementById("da2").style.paddingTop="35px";
}