window.onload = function (){

//...................hamburger..............................//

let hamburger = document.getElementById('hamburger')
let menu = document.getElementById('menu')
let Rcreatives = document.getElementById('Rcreatives')
let Rarrow = document.getElementById('Rarrow')
let sharp = document.getElementById('sharp')

hamburger.addEventListener('click',Fhamburger)

function Fhamburger () {

  if (menu.style.display == "none"){
    hamburger.style.opacity = '.7'
    menu.style.display = "flex"
    Rcreatives.style.opacity = '0'
    Rarrow.style.opacity = '0'
    sharp.style.display = "block"
    hamburger.classList.add("shake")
  }

  else{
    hamburger.style.opacity = '1'
    menu.style.display = "none"
    Rcreatives.style.opacity = '1'
    Rarrow.style.opacity = '1'
    sharp.style.display = "none"
    hamburger.classList.remove("shake")
  }


}


//...............................default menu......................//

    let li = document.getElementById('default-li');
    let a = document.getElementById('default-a');
    let liMB = document.getElementById('default-li-mb');
    let aMB = document.getElementById('default-a-mb');

    li.addEventListener('mouseenter',hover)
    a.addEventListener('mouseenter',hover)
    liMB.addEventListener('mouseenter',hoverMB)
    aMB.addEventListener('mouseenter',hoverMB)

function hoverMB(){ 
  aMB.style.color = '#fff'
  aMB.style.backgroundColor = '#6fcfff'
  liMB.style.color = '#fff'
  liMB.style.backgroundColor = '#6fcfff'
 
      }

  function hover(){ 
    li.style.color = '#fff'
    li.style.backgroundColor = '#6fcfff'
    a.style.color = '#fff'
    a.style.backgroundColor = '#6fcfff'
        }

        
    li.addEventListener('mouseout',mouseout)
    a.addEventListener('mouseout',mouseout)
    liMB.addEventListener('mouseout',mouseoutMB)
    aMB.addEventListener('mouseout',mouseoutMB)

    function mouseoutMB(){ 
      liMB.style.color = 'black'
      liMB.style.backgroundColor = '#fbd601'
      aMB.style.color = 'black'
      aMB.style.backgroundColor = '#fbd601'
          }

  function mouseout(){ 
    li.style.color = '#1a1e27'
    li.style.backgroundColor = '#fff'
    a.style.color = '#1a1e27'
    a.style.backgroundColor = '#fff'
        }


    }         