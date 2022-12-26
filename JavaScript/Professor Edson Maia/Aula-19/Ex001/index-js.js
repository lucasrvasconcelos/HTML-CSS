
Verificar = () =>{
    
    if (document.querySelector('#iNumber').value.length == 0){
        document.querySelector('#calcular').setAttribute('disabled', '')
    } else {
        document.querySelector('#calcular').removeAttribute('disabled', '')
    }
}

document.querySelector('#calcular').addEventListener('click', () => {
    let valor = Number.parseFloat(document.querySelector('#iNumber').value)
    let moedas = document.getElementsByName('Tipo-Moedas')

    if(document.querySelector('#iNumber').value.length > 8 || document.querySelector('#iNumber').value < 0){
        document.querySelector('#ititulo').style.fontSize = '100%'
        document.querySelector('#ititulo').textContent = 'Digite valores válidos'
        document.querySelector('#calcular').setAttribute('disabled', '')

        setTimeout(() => {
            document.querySelector('#ititulo').style.fontSize = '2em'
            document.querySelector('#ititulo').textContent = 'Conversor de MOEDAS'
            document.querySelector('#calcular').removeAttribute('disabled', '')
        }, 2000);

    } else {
    for(let i = 0;i < moedas.length; i++){
        if(moedas[i].checked){
            if(i == 0){
                document.querySelector('#ititulo').textContent = `Convertendo ${(valor).toLocaleString('BR', {style: 'currency', currency: 'BRL'})} em Dolar, temos ${(valor/5.20).toLocaleString('USA', {style: 'currency', currency: 'USD'})}`
                document.querySelector('#ititulo').style.fontSize = '100%'
            } else if(i == 1){
                document.querySelector('#ititulo').textContent = `Convertendo ${(valor).toLocaleString('BR', {style: 'currency', currency: 'BRL'})} em Dolar, temos ${(valor/5.52).toLocaleString('EUR', {style: 'currency', currency: 'EUR'})}`
                document.querySelector('#ititulo').style.fontSize = '100%'
            } else if(i == 2){
                document.querySelector('#ititulo').textContent = `Convertendo ${(valor).toLocaleString('BR', {style: 'currency', currency: 'BRL'})} em Dolar, temos ${(valor/87.142).toFixed(6)} BTC`}
                document.querySelector('#ititulo').style.fontSize = '100%'
        }
    }
}
})

function del(){

}
document.querySelector('#iNumber').addEventListener('keypress', (e) => {
    if(e.which == 13 || e.which == 9){
        document.querySelector('#dolar').focus()
    }
})

document.querySelector('#dolar').addEventListener('keypress', (e) => {
    if(e.which == 13 || e.which == 9){
        document.querySelector('#euro').focus()
    }
})

document.querySelector('#euro').addEventListener('keypress', (e) => {
    if(e.which == 13 || e.which == 9){
        document.querySelector('#BTC').focus()
    }
})

document.querySelector('#BTC').addEventListener('keypress', (e) => {
    if(e.which == 13 || e.which == 9){
        document.querySelector('#calcular').focus()
    }
})


