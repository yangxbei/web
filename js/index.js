function init(){
    setInterval("changeImg()",2000);
}
var i=1;
function changeImg(){
    i++;
    document.getElementById("lunbotu").src="./images/"+i+".jpg";
    if(i==4){
        i=0;
    }
}