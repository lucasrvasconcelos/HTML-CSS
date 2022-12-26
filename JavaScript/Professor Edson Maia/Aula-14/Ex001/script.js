


let enviar = document.querySelector('#btn1').addEventListener('click', function(e){
    let nome = document.querySelector('#iNome').value
    let idade = document.querySelector('#iIdade').value
    let peso = document.querySelector('#iPeso').value
    let altura = document.querySelector('#iAltura').value
    let imc = document.querySelector('#iIMC')

    // nome = nome.value;
    // idade = idade.value
    // peso = peso.value
    // altura = altura.value
    
    let cImc = (peso / (altura * altura)).toFixed(1)

    if(cImc >= 0 && cImc < 18.5){
        document.querySelector('#iIMC').value = 'MAGREZA'
        document.querySelector('#iIMC').style.backgroundColor = 'lightsalmon'
        document.querySelector('#iResultado').textContent = cImc
    } else if (cImc >= 18.6 && cImc <= 24.9){
        document.querySelector('#iIMC').value = 'NORMAL'
        document.querySelector('#iIMC').style.backgroundColor = 'lightgreen'
        document.querySelector('#iResultado').textContent = cImc
    } else if (cImc >= 25.0 && cImc <= 29.9){
        document.querySelector('#iIMC').value = 'SOBREPESO'
        document.querySelector('#iIMC').style.backgroundColor = 'lightyellow'
        document.querySelector('#iResultado').textContent = cImc
    } else if (cImc >= 30.0 && cImc <= 39.9){
        document.querySelector('#iIMC').value = 'OBESIDADE'
        document.querySelector('#iIMC').style.backgroundColor = 'rgba(192, 6, 6, 0.514)'
        document.querySelector('#iResultado').textContent = cImc
    } else if (cImc > 40.0){
        document.querySelector('#iIMC').value = 'OBESIDADE GRAVE'
        document.querySelector('#iIMC').style.backgroundColor = 'rgba(192, 6, 6, 0.514)'
        document.querySelector('#iResultado').textContent = cImc
    } else{
        document.querySelector('#iIMC').value = 'VALORES INVÁLIDOS'
        document.querySelector('#iIMC').style.backgroundColor = 'darkcyan'
    }
    
    e.preventDefault()

    // MENOR QUE 18,5	MAGREZA	0
    // ENTRE 18,5 E 24,9	NORMAL	0
    // ENTRE 25,0 E 29,9	SOBREPESO	I
    // ENTRE 30,0 E 39,9	OBESIDADE	II
    // MAIOR QUE 40,0	OBESIDADE GRAVE	III
})

let limpar = document.querySelector('#btn2').addEventListener('click', function(e){
    document.querySelector('#iNome').value = null
    document.querySelector('#iIdade').value = null
    document.querySelector('#iPeso').value = null
    document.querySelector('#iAltura').value = null
    document.querySelector('#iIMC').value = 'Digite as informações'
    document.querySelector('#iResultado').textContent = '---'
    e.preventDefault()
})