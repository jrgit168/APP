// **多張下載
const manyPictures = document.querySelector(".manyPictures");
const selectCancel = document.querySelector(".selectCancel");
const dlPictures = document.querySelector(".dlPictures");
const smallprint = document.querySelector(".smallprint");
const allPictures = document.querySelector(".allPictures");

const album = document.querySelectorAll(".album");
const checkPictures = document.querySelectorAll(".checkPictures");
const checkPicturesCheckbox = document.querySelectorAll(".checkPictures input")


function multipleSelectionMode(){
    manyPictures.style.display = "none"
    selectCancel.style.display = "block"
    dlPictures.style.display = "block"
    allPictures.style.display = "block"
    smallprint.style.display = "none"
    for(let i=0;i<album.length;i++){
        album[i].style.display = "none"
    }
    for(let i=0;i<checkPictures.length;i++){
        checkPictures[i].style.display = "block"
    }
}

function cancel(){
    manyPictures.style.display = "block"
    selectCancel.style.display = "none"
    dlPictures.style.display = "none"
    allPictures.style.display = "none"
    smallprint.style.display = "block"
    for(let i=0;i<album.length;i++){
        album[i].style.display = "block"
    }
    for(let i=0;i<checkPictures.length;i++){
        checkPictures[i].style.display = "none"
    }
}

function selectAll(){
    for(let i=0;i<checkPicturesCheckbox.length;i++){
        checkPicturesCheckbox[i].checked = true
    }
}

manyPictures.addEventListener("click", multipleSelectionMode);
selectCancel.addEventListener("click", cancel);
allPictures.addEventListener("click", selectAll);