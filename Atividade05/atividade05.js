let botao = document.getElementById("botao");
let menu = document.getElementsByClassName("menu-lateral")[0];
let container = document.getElementById("container");

let flag = false;

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

let accordeonLinks = document.querySelectorAll("#accordeon ul li a");
let accordeonLi = document.querySelectorAll("#accordeon ul li");
let show = function(event){
    let li = event.target.parentElement;
    event.target.style.borderRadius = "5px 5px 0 0"
    if(li.className == "active"){
        li.className = "";
        event.target.style = "";
        return;
    }
    for (let i = 0, accordeonLinksLength = accordeonLinks.length; i<accordeonLinksLength; i++) {
        accordeonLinks[i].style = "";
    };

    for(let i=0, accordeonLiLength = accordeonLi.length; i<accordeonLiLength; i++){
        accordeonLi[i].className = "";
    }

    li.className = "active";
};

for (let i = 0, accordeonLinksLength = accordeonLinks.length; i<accordeonLinksLength; i++) {
    accordeonLinks[i].onclick = show;
};