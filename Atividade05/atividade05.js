var botao = document.getElementById("botao");
var menu = document.getElementsByClassName("menu-lateral")[0];
var container = document.getElementById("container");

var flag = false;

botao.onclick = function(){
    if (!flag) {
        menu.style.transform = "translateX(0px)";
        container.style.paddingLeft = "110px"
    }else{
        menu.style.transform = "translateX(-110px)";
        container.style.paddingLeft = "0"
    }

    flag = !flag;
};

window.onresize = function(){
    if(window.innerWidth > 480){
      menu.style = "";
      container.style = "";
    }
};    

var accordeonLinks = document.querySelectorAll("#accordeon ul li a");
var accordeonLi = document.querySelectorAll("#accordeon ul li");

var show = function(event){
    var li = event.target.parentElement;
    if(li.className == "active"){
        li.className = "";
        return;
    }

    for(var i=0, accordeonLiLength = accordeonLi.length; i<accordeonLiLength; i++){
        accordeonLi[i].className = "";
    }

    li.className = "active";
};

for (var i = 0, accordeonLinksLength = accordeonLinks.length; i<accordeonLinksLength; i++) {
    accordeonLinks[i].onclick = show;
};