var  menunavegacaolaterala = document.querySelectorAll('.menu-navegacao-lateral-a');
var  menunavegacaolaterali = document.querySelectorAll('.menu-navegacao-lateral-a i');
var  menunavegacaolateralspan = document.querySelectorAll('.menu-navegacao-lateral-a span');
var  menunavegacaolateraldiv = document.querySelectorAll('.menu-navegacao-lateral-a + div');
var  menunavegacaolateraldivpai = document.querySelectorAll('.menu-navegacao-lateral-div');




for (let index = 0; index < menunavegacaolateraldivpai.length; index++) {
    menunavegacaolateraldivpai[index].addEventListener('mouseover',()=>{
        menunavegacaolaterala[index].classList.add('red','white-text')
        menunavegacaolaterali[index].classList.add('white-text')

        if (index !== 1 && index !== 5) {
            menunavegacaolateralspan[index].innerHTML = '<i class="material-icons white-text">chevron_right</i>'
        }
        submenu(index)
        for (let i = 0; i < menunavegacaolateraldivpai.length; i++) {
            if (i != index) {
                menunavegacaolaterala[i].classList.remove('red','white-text')
                menunavegacaolaterali[i].classList.remove('white-text')
                if (i!==1 && i!==5) {
                    menunavegacaolateralspan[i].innerHTML = '<i class="material-icons black-text">chevron_left</i>'
                }
                menunavegacaolateraldiv[i].classList.add('hide')
            }
            
        }
    })
    menunavegacaolateraldivpai[index].addEventListener('mouseout',()=>{
        menunavegacaolateraldiv[index].classList.add('hide')
    })
    
}

function submenu(index) {
       
        if (index === 0) {
            menunavegacaolateraldiv[index].classList.remove('hide')
            menunavegacaolateraldiv[index].classList.add('animacao-direita')
            menunavegacaolateraldiv[index].style.marginTop = '98px'
        }else if (index === 2) {
            
            menunavegacaolateraldiv[index].classList.remove('hide')
            menunavegacaolateraldiv[index].classList.add('animacao-direita')
            menunavegacaolateraldiv[index].style.marginTop = '207px'
        }else if (index === 3) {
    
            menunavegacaolateraldiv[index].classList.remove('hide')
            menunavegacaolateraldiv[index].classList.add('animacao-direita')
            menunavegacaolateraldiv[index].style.marginTop = '260px'
        }else if (index === 4) {
            
            menunavegacaolateraldiv[index].classList.remove('hide')
            menunavegacaolateraldiv[index].classList.add('animacao-direita')
            menunavegacaolateraldiv[index].style.marginTop = '1.5em'
        } else if(index === 6){
            
            menunavegacaolateraldiv[index].classList.remove('hide')
            menunavegacaolateraldiv[index].classList.add('animacao-direita')
            menunavegacaolateraldiv[index].style.marginTop = '23em'
        }else if (index === 7) {
            
            menunavegacaolateraldiv[index].classList.remove('hide')
            menunavegacaolateraldiv[index].classList.add('animacao-direita')
            menunavegacaolateraldiv[index].style.marginTop = '18em'
        }
    
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-button');
    var instances = M.Dropdown.init(elems);
    var instance = M.Dropdown.getInstance(elems);
   
  });

  
