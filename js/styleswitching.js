const switchstyle = document.querySelector(".switchstyle");
const list = document.querySelector(".list");
const block  = document.querySelector(".block");
const albumList = document.querySelector(".albumList");
const albumblock = document.querySelector(".albumblock");

function switchClick(e){
    let str = e.target.className;
    if(str.includes("list")){
        albumList.style.display = "block";
        albumblock.style.display = "none"
        list.style.color = "#4fbfff";
        block.style.color = "#cfcfcf"
    }else{
        albumList.style.display = "none";
        albumblock.style.display = "block"
        list.style.color = "#cfcfcf";
        block.style.color = "#4fbfff"
    }
}

switchstyle.addEventListener("click", switchClick);