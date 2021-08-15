const lanButton = document.querySelector('#lan-but')
const lanButtonDot = document.querySelector('#lan-but #lan-but-dot')
const lanFlagUsa = document.getElementById('usa-flag')
const lanFlagBra = document.getElementById('bra-flag')
const textPt = document.querySelectorAll('.pt')
const textEn = document.querySelectorAll('.en')

var isEn = true //Variável global que determina a linguagem da SPA
hideLanguage(textPt)

function hideLanguage(langNodeList){
    Array.from(langNodeList).map((item) => {
        item.style.display = 'none';
    })
}

function showLanguage (langNodeList){
    Array.from(langNodeList).map((item) =>{
        item.style.display = 'initial'
    })
}

const changeLanguage = () =>{
    isEn ? 
    (hideLanguage(textPt), showLanguage(textEn)):
    (hideLanguage(textEn), showLanguage(textPt))
}
//Quando o usuário clicar na bandeira do Brasil
lanFlagBra.addEventListener('click', () =>{
    lanButtonDot.className = 'is-pt'
    isEn = false
    changeLanguage()
})
//Quando o usuário clicar na bandeira dos Estados Unidos
lanFlagUsa.addEventListener('click', () =>{
    lanButtonDot.className = 'is-en'
    isEn = true
    changeLanguage()
})
//Quando o uauário clicar no botão central
lanButton.addEventListener('click', (e) =>{
    e.preventDefault()

    if(lanButtonDot.className == 'is-en'){
        lanButtonDot.className = 'is-pt'
        isEn = false
    }else{
        lanButtonDot.className = 'is-en'
        isEn = true
    }
       
    changeLanguage()
})

//AÇÕES DO MENU HAMBURGUER
const menuBtn = document.querySelector ('img#menu-btn')
const menuOpt = document.getElementById ('menu-opt')

function menuListener(){
    var opened = menuOpt.classList ==  'opened' ? true : false
    return opened
}

function openCloseMenu() {
    menuListener() ?
    (menuOpt.classList = 'closed'):
    (menuOpt.classList = 'opened');
}

//AÇÕES NO MODAL DE CONTATO
const modalBtn = document.getElementById('modal-link')
const modalContainer = document.querySelector('div#modal')
const modalBox = document.querySelector('div#modal-social')
const modalCloseBtn = document.querySelector('div#modal-social-exit')

modalContainer.addEventListener('click',  evt =>{
    if (evt.path.indexOf(modalCloseBtn)  == -1){
        closeModal()
    }
})

function closeModal(){
    modalContainer.classList.remove('show')
    modalBox.classList.remove('show')

} 

modalBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    modalContainer.classList.add('show')
    modalBox.classList.add('show')
})

