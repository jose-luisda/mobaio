
// var formulario_senha = document.querySelector('#formulario-senha')

// formulario_senha.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     let dado = new FormData(formulario_senha);
//     let url = ' teste.php '
//     validacao(dado, url)
// })
// function validacao(dados,url) {
//     if (dados && url) {
//         ajax_validacao(dados,url)
//     } else {
        
//     }
    
// }

// function ajax_validacao(dados,url) {
//     $.ajax({
//         url: url,
//         type: 'post',
//         dataType: 'json',
//         data: dados,
//         contentType: false,
//         cache: false,
//         processData: false,
//     }).done((resposta) => {
//         erros_validacao(resposta)
//     })
// }

// function erros_validacao(resultado) {
//     if (resultado.mensagem[1]) {
//         M.toast({html: resultado.mensagem[0], classes: 'rounded'});
//     }else if(!resultado.mensagem[0]){
//            let validacao_fronte_end = verifica()
//             if (validacao_fronte_end) {
//                 M.toast({html: validacao_fronte_end, classes: 'rounded'});
//             }
//     }
// }
// function verifica(){
//     let erro; 
// 	senha = document.getElementById("senha").value;
// 	if((senha.length >= 4) && (senha.length <= 7)){
//       erro =  'Senha não pade esta vazia!';
// 	}else if(senha.length>7){
//         erro =  'Senha não pade ter mais de 20 caracteres!';
// 	}
// 	if(senha.match(/[a-z]+/)){
//         erro =   'Somente letras e números são permitidos.1';
// 	}
// 	if(senha.match(/[A-Z]+/)){
//         erro =   'Somente letras e números são permitidos.2';
// 	}
// 	if(senha.match(/d+/)){
//         erro =   'Somente letras e números são permitidos.3';
// 	}
// 	if(senha.match(/W+/)){
//         erro =   'Somente letras e números são permitidos.4';
//     }
//     if (erro) {
//         return erro;
//     } else {
//         return false
//     }
// }

// function elemento_mensagem() {
    
    
// }

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}