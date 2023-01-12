let menu1 = document.getElementById("menudesplegable1")
menu1.style.display='false'
let menu2 = document.getElementById("menudesplegable2")
menu2.style.display='false'

let variador1 = false
let variador2 = false

function menuDesplegable1(){
    if (variador1==false){
        variador1=true
        menu1.style.display='block'
    }else{

        variador1=false
        menu1.style.display='none'
    }
}
function menuDesplegable2(){
    if (variador2==false){
        variador2=true
        menu2.style.display='block'
    }else{

        variador2=false
        menu2.style.display='none'
    }
}