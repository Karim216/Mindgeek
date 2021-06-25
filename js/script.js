let labelClickMenu = document.querySelector(".checkbtn"); //label check
let btnShowHideMenu = document.querySelector(".checkbtn i"); //icon menu responsive

//Fonction qui gère l'apparution du menu de navbar
function changBtn(){
    //affiche le menu du navbar
    if(btnShowHideMenu.className === "fas fa-bars"){
        btnShowHideMenu.classList.remove("fa-bars");
        document.getElementById("nav1").style.display = "block";

        btnShowHideMenu.classList.add("fa-times");
    }
    //supprime le menu du navbar
    else{
        btnShowHideMenu.classList.remove("fa-times");
        document.getElementById("nav1").style.display = "none";

        btnShowHideMenu.classList.add("fa-bars");
    }  
}

//ajout d'un EventListener au bouton du menu nav
labelClickMenu.addEventListener("click", changBtn);