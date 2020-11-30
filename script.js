var state = false;
function Change(){
    this.hamburger = document.getElementById("Hambur");
    this.menuList = document.getElementById("MenuList");
    if(state === false){
        this.hamburger.src = "images/icon-close.svg"
        this.menuList.style.transition = "all 1s";
        this.menuList.style.marginLeft = "-5px"
        this.menuList.style.marginTop = "300px"
        this.menuList.style.width = "280px";
        this.menuList.style.height = "180px";
        this.menuList.style.opacity = "1";
        this.menuList.style.transform = "rotate(0)";
        state = true;
    }else if(state === true){
        this.hamburger.src = "images/icon-hamburger.svg"
        this.menuList.style.marginTop = "0"
        this.menuList.style.marginLeft = "280px"
        this.menuList.style.width = "0px";
        this.menuList.style.height = "0px";
        this.menuList.style.opacity = "0";
        this.menuList.style.transform = "rotate(45deg)";
        state = false;
    }

}



function show(){
    var changes = new Change();
}