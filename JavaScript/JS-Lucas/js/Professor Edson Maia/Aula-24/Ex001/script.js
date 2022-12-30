
document.querySelector('#confirmar').addEventListener('click', (e) => {
    
    let ano = document.querySelector('#ano')
    let sexo = document.getElementsByName('sexo')
    if(ano.value){
        if(ano.value % 1 != 0 || ano.value <= 1800){
            alert('Dados inválidos')
            ano.value = null
            }

        else {      
            for(let i = 0; i < sexo.length; i++){
                if(sexo[0].checked || sexo[1].checked){
                    let idade = new Date().getFullYear() - Number(ano.value)
                    document.querySelector('#result').textContent = `Você tem ${idade} anos`
                    foto(sexo)
                } else{
                    alert('Selecione o sexo')
                }
            }                 
        }

    } else {
        alert('Informe os dados')
    }

    e.preventDefault()
})

function foto(sexo){
    if(sexo[0].checked){
        document.querySelector('#imagem').setAttribute('src','https://cdn-icons-png.flaticon.com/512/1208/1208007.png')
    } else if(sexo[1].checked){
        document.querySelector('#imagem').setAttribute('src','https://cdn-icons-png.flaticon.com/512/8469/8469776.png')
    }
}