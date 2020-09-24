/* Pegando os inputs do lado direito */
let inputTextoToDale = document.querySelector('#textToDele')
let botaoDaleDeleDoli = document.querySelector('#botaoAdd')

/* Pegando os inputs do lado esquerdo */
let areaDosTexts = document.querySelector('.areaText')

/* Checando o click do usuario no botao */ 
botaoDaleDeleDoli.addEventListener('click', () => {
    if (inputTextoToDale.value != ''){
        inputTextoToDale.style.color = 'rgb(60, 0, 68)'
        addToDales()
    }

    else{
        inputTextoToDale.style.color = 'red'
    }
})

/* Corrigindo um bug no cor do placeholder */
inputTextoToDale.addEventListener('keydown', (keys) => {
    inputTextoToDale.style.color = 'rgb(60, 0, 68)'
})

/* Tirando as barras de rolagem */
document.querySelector('body').style.overflow = 'hidden'

/* Colocando sistema de enter */
inputTextoToDale.addEventListener('keydown', (keys) => {
    if (keys.key == 'Enter'){
        if (inputTextoToDale.value != ''){
            inputTextoToDale.style.color = 'rgb(60, 0, 68)'
            addToDales()
        }

        else{
            inputTextoToDale.style.color = 'red'
        }
    }
})

function addToDales(){
    let valorInput = inputTextoToDale.value

    let areaDosToDalesIndividual = document.createElement('div')
    let newTextoToDale = document.createElement('label')
    let newBotaoRemover = document.createElement('a')
    let br = document.createElement('br')
    let br2 = document.createElement('br')

    /* Setando atributos dos elementos */
    newTextoToDale.setAttribute('class', 'TextoToDale')

    newBotaoRemover.setAttribute('class', 'botaoRemover')
    newBotaoRemover.setAttribute('href', '#')

    /* Colocando Valores */
    newTextoToDale.innerHTML = valorInput
    newBotaoRemover.innerHTML = 'Remover'

    /* Adicionando eles a area */
    newTextoToDale.appendChild(newBotaoRemover)
    areaDosToDalesIndividual.appendChild(newTextoToDale)

    /* Colocando Quebras de linhas */
    areaDosToDalesIndividual.appendChild(br)
    areaDosToDalesIndividual.appendChild(br2)

    areaDosTexts.appendChild(areaDosToDalesIndividual)
    
    /* Checado se eu posso voltar a visibilidade da barra de rolagem */
    let quantDeTextosToDale = areaDosTexts.childElementCount - 1
    
    if (quantDeTextosToDale >= 10){
        document.querySelector('body').style.overflow = 'visible'
    }

    /* Criando sistema de deletar os to dales */
    newBotaoRemover.addEventListener('click', () => {
        let paiDoBtnDelete = newBotaoRemover.parentNode
        areaDosTexts.removeChild(paiDoBtnDelete.parentNode)

        if  (quantDeTextosToDale <= 10){
            document.querySelector('body').style.overflow = 'hidden'
        }
    })

    /* Colocando Nada no input do to dale */
    inputTextoToDale.value = ''
}