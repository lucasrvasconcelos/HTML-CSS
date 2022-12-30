
let inicio = document.querySelector('#inicio')
let fim = document.querySelector('#fim')
let passo = document.querySelector('#passo')


document.querySelector('#confirmar').addEventListener('click', calcular)

function calcular(){
    let inicio = Number(document.querySelector('#inicio').value)
    let fim = Number(document.querySelector('#fim').value)
    let passo = Number(document.querySelector('#passo').value)
    console.log(inicio)
    console.log(fim)
    console.log(passo)

    if(inicio > 0 && fim > 0 && passo > 0){
        document.querySelector('#inicio').classList.remove('erro')
        document.querySelector('#fim').classList.remove('erro')
        document.querySelector('#passo').classList.remove('erro')

        inicio > fim || inicio <= 0 ? document.querySelector('#inicio').classList.add('erro'):document.querySelector('#inicio').classList.remove('erro')
        fim < inicio || inicio <= 0 ? document.querySelector('#inicio').classList.add('erro'):document.querySelector('#inicio').classList.remove('erro')
        passo > fim || inicio <= 0 ? document.querySelector('#passo').classList.add('erro'):document.querySelector('#passo').classList.remove('erro')
        let a = []

        while(inicio <= fim){
   
            a.push(inicio)
        
            inicio += passo
        } 
        
        document.querySelector('#result').textContent = a

        if(inicio == fim){
            document.querySelector('#inicio').classList.add('erro')
            document.querySelector('#fim').classList.add('erro')

        } else{
            console.log('fim')
        }

    } else {
            inicio <= 0 ? document.querySelector('#inicio').classList.add('erro'):document.querySelector('#inicio').classList.remove('erro')
            fim <= 0 ? document.querySelector('#fim').classList.add('erro'):document.querySelector('#fim').classList.remove('erro')
            passo <= 0 ? document.querySelector('#passo').classList.add('erro'):document.querySelector('#passo').classList.remove('erro')
            document.querySelector('#result').textContent = ''
            console.log('Preencha os campos em vermelho')
        }
}