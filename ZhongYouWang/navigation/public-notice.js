document.getElementById("logoI").href="../../homePage/homePage.html";
document.getElementById("introduce").href="#about";
document.getElementById("team").href="../../team/LookingForTeam.html";
document.getElementById("gameList").href="../../gameList/gameList.html";
document.getElementById("experience").href="../../experience/experience.html";

document.getElementById("logoI").onmouseover=function () {
    document.getElementById("logoI").style.borderBottom="none";
}

var loginWindow=document.getElementById("loginWindow");/*登陆/注册窗口*/
var curtain=document.getElementById("curtain");/*遮罩层*/
var register=document.getElementById("register");
register.onclick=function () {
    loginWindow.style.display="block";
    curtain.style.display="block";
}

var closeButton=document.getElementById("closeButton");
closeButton.onclick=function () {
    loginWindow.style.display="none";
    curtain.style.display="none";
}