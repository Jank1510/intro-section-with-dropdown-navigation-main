let menu1 = document.getElementById("menudesplegable1")
menu1.style.display='false'
let menu2 = document.getElementById("menudesplegable2")
menu2.style.display='false'
let imgDesple1 = document.getElementById("imgDesple1")
let imgDesple2 = document.getElementById("imgDesple2")

let variador1 = false
let variador2 = false

function menuDesplegable1(){
    if (variador1==false){
        variador1=true
        menu1.style.display='block'
        imgDesple1.src='./images/icon-arrow-up.svg'
    }else{

        variador1=false
        menu1.style.display='none'
        imgDesple1.src='./images/icon-arrow-down.svg'

    }
}
function menuDesplegable2(){
    if (variador2==false){
        variador2=true
        menu2.style.display='block'
        imgDesple2.src='./images/icon-arrow-up.svg'

    }else{

        variador2=false
        menu2.style.display='none'
        imgDesple2.src='./images/icon-arrow-down.svg'

    }
}
let nav = document.getElementById("nav");
let open=false;
let img = document.getElementById("menu");
function openClose(){
    if (open==false){
        open=true
        nav.style.display='flex'
        img.src='./images/icon-close-menu.svg'
    }else{
       if (open==true){
            open=false
            nav.style.display='none'
        img.src='./images/icon-menu.svg'

        }
    }
}