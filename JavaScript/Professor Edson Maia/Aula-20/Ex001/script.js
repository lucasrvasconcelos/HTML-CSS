
document.querySelector('#nC').addEventListener('keyup', () => {
    campos() 
})

document.querySelector('#nC').addEventListener('change', () => {
    campos() 
})

function campos(){
    let celsius = document.querySelector('#nC')
        if(verifica(celsius)){
            document.querySelector('#iSubmit').removeAttribute('disabled', '')
            document.querySelector('#nC').style.border = '2px solid green'
            calculaF(celsius)
            calculaK(celsius)
            rangeC()
            rangeF()
            rangeK()
        } else {
            document.querySelector('#iSubmit').setAttribute('disabled', '')
            document.querySelector('#nC').style.border = '2px solid red'
            limpa()
        }
}

document.querySelector('#rangeC').addEventListener('change', () => {
    document.querySelector('#iSubmit').removeAttribute('disabled', '')
    let VrangeC = document.querySelector('#rangeC')
    document.querySelector('#nC').value = VrangeC.value
    calculaF(VrangeC)
    calculaK(VrangeC)
    rangeF()
    rangeK()
})

//FUNÇÕES
function verifica(valor){
    if (valor.value.length == 0 || valor.value.length > 5 || valor.value < 0){
        
        return false
    } else {
        return true
    } 
}

function calculaF(valor){
    document.querySelector('#nF').value = ((valor.value * 1.8) + 32).toFixed(2)
}

function calculaK(valor){
    parseFloat(valor.value)
    document.querySelector('#nK').value = (parseFloat(valor.value) + 273.15).toFixed(2)
}


//RANGE

function rangeC(){
    let rangeValue = document.querySelector('#nC')
    document.querySelector(`#rangeC`).value = rangeValue.value
}

function rangeF(){
    let rangeValue = document.querySelector('#nF')
    document.querySelector(`#rangeF`).value = rangeValue.value
}

function rangeK(){
    let rangeValue = document.querySelector('#nK')
    document.querySelector(`#rangeK`).value = rangeValue.value
}

// LIMPAR
function limpa(){
    document.querySelector('#nC').value = null
    document.querySelector('#nF').value = null
    document.querySelector('#nK').value = null
    document.querySelector('#iSubmit').setAttribute('disabled', '')
    document.querySelector('#nC').style.border = '2px solid red'
}

// BUTTON
document.querySelector('.button').addEventListener('click', () => {
    limpa()
    document.querySelector('.button').classList.toggle('animate')
    document.querySelector('#rangeC').value = 0
    setTimeout(() => {
        document.querySelector('.button').classList.toggle('animate') 
    }, 200);
}) 