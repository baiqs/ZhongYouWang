
/*轮播图*/
var viewPagerBox=document.getElementById("viewPagerBox");             /*轮播图box*/
var first=new viewPagerItem("../resources/homePage/viewPager/first.png",0);     /*轮播图项*/
var second=new viewPagerItem("../resources/homePage/viewPager/second.png",1);
var third=new viewPagerItem("../resources/homePage/viewPager/third.png",2);
var forty=new viewPagerItem("../resources/homePage/viewPager/forty.png",3);
var viewPagerItems=new Array(first,second,third,forty);               /*轮播图项组*/
var viewPagerTitles=document.getElementsByClassName("viewPagerTitle");   /*轮播图标题组*/
viewPagerBox.append(viewPagerItems[0]);
viewPagerBox.append(viewPagerItems[1]);
var viewPagerTitle0=viewPagerTitles[0];
var viewPagerTitle1=viewPagerTitles[1];
var viewPagerTitle2=viewPagerTitles[2];
var viewPagerTitle3=viewPagerTitles[3];
var current_item=1;
var viewLoop=window.setInterval(handover,5000);

viewPagerTitle0.onmouseover=function () {
    viewPagerItemHover(0);
}
viewPagerTitle0.onmouseout=function(){
    viewPagerItemOut(0);
}
viewPagerTitle1.onmouseover=function () {
    viewPagerItemHover(1);
}
viewPagerTitle1.onmouseout=function(){
    viewPagerItemOut(1);
}
viewPagerTitle2.onmouseover=function () {
    viewPagerItemHover(2);
}
viewPagerTitle2.onmouseout=function(){
    viewPagerItemOut(2);
}
viewPagerTitle3.onmouseover=function () {
    viewPagerItemHover(3);
}
viewPagerTitle3.onmouseout=function(){
    viewPagerItemOut(3);
}
function viewPagerItemHover(id) {
    clearInterval(viewLoop);
    for(var i=0;i<viewPagerTitles.length;i++){
        viewPagerTitles[i].style.backgroundColor="coral";
    }
    viewPagerTitles[id].style.backgroundColor="deepskyblue";
    for(var i=viewPagerBox.children.length;i>0;i--){
        viewPagerBox.removeChild(viewPagerBox.firstElementChild);
    }
    viewPagerBox.style.backgroundImage="url('"+viewPagerItems[id].src+"')";
    viewPagerBox.style.backgroundSize="cover";
    viewPagerBox.style.backgroundRepeat="no-repeat";
}/*轮播图标题鼠标移入*/
function viewPagerItemOut(id) {
    viewPagerTitles[id].style.backgroundColor="coral";
}/*轮播图标题鼠标移出*/
function viewPagerItem (src,id) {
    var image=new Image();
    image.src=src;
    image.classList.add("viewPagerItem");
    image.id=id;
    image.title="点击了解详情";
    return image;
}/*轮播图子项构造函数*/
function handover() {
    var firstpos=0;
    var lastpos=0;
    var firstItem=viewPagerBox.firstElementChild;
    var lastItem=viewPagerBox.lastElementChild;
    current_item+=1;
    var interval=window.setInterval(move,10);

    function move() {                   /*平移动画*/
        if(firstpos==firstItem.height){
            lastItem.style.bottom=0;
            viewPagerTitles[firstItem.id].style.backgroundColor="coral";
            if(viewPagerBox.children.length>0)
                viewPagerBox.removeChild(firstItem);
            var nextItem=viewPagerItems[current_item%4];
            nextItem.style.bottom=-350+"px";
            viewPagerBox.append(nextItem);
            clearInterval(interval);

            var viewPagerTitle=viewPagerTitles[viewPagerBox.firstElementChild.id];
            viewPagerTitle.style.backgroundColor="deepskyblue";
        }else {
            firstpos++;
            lastpos++;
            firstItem.style.bottom=firstpos+"px";
            lastItem.style.bottom=lastpos+"px";
        }
    }
}/*轮播图切换*/

