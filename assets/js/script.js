/* 
Case sensitive= reconhece letras maiusculas e minusculas

por tag: getElementeTagName()
por Id: getElementeById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk= false
let emailOk= false
let assuntoOk= false
let mapa = document.querySelector ( '#mapa')

nome.style.width= '100%'
email.style.width= '100%'



function validaNome(){
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txt.innerHTML = 'Nome Inválido'
        txt.style.color= "red"
        txtNome.style.display= 'block'
    } else {
        txtNome.style.display= 'none'
        nomeOk= true
    }
}
function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail' )

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.com') == -1 ) {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color= "red"
        txtEmail.style.display= 'block'
    }  else{
        txtEmail.style.display= 'none'
         emailOk= true
        }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100) {
       
        txtAssunto.innerHTML = 'Máximo de 100 caracteres'
        txtAssunto.style.color= "red"
        txtAssunto.style.display= 'block'
    } else {
        txtAssunto.style.display= 'none'
         assuntoOk= true
    }
}

function enviar(){
        if (nomeOk == true && emailOk == true && assuntoOk == true){
alert(' Formulário enviado com sucesso!')
        } else {
            alert ('Preencha o formulário corretamente!')
        }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}