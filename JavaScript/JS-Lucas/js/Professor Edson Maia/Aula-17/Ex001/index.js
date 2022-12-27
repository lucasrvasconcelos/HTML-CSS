
document.querySelector('#iConfirmar').addEventListener('click', () => {
    let valor = document.querySelector('#iValor').value
        if(isNaN(valor) || valor <= 0 || valor > 10 ){
            alert('Dados inválidos')
        } else if (valor % 1 != 0){
            alert('Apenas valores inteiros')
        } else {
           function array() {
                let lista = []
                for( let i = 1; i < 11; i++){
                    lista = [...lista, i]
                }
                let maquina = Math.floor(Math.random() * lista.length + 1)
                return maquina
            }
            // chamando função
            let maquina = array()
            document.querySelector('#iConfirmar').setAttribute('disabled', '')
            document.querySelector('#retorno').textContent = '%'
            document.querySelector('#respMaquina').textContent = `Pensando`
            document.querySelector('#iConfirmar').value = 'Escolhendo'
            document.querySelector('.img-perfil').style.transform = 'scale(110%)'
            document.querySelector('#audio').play()
            setTimeout(() => {
                document.querySelector('#respMaquina').textContent = `Pensei em ${maquina}`
                document.querySelector('.img-perfil').style.transform = 'scale(100%)'
                document.querySelector('#iConfirmar').removeAttribute('disabled', '')
                document.querySelector('#iConfirmar').value = 'Confirmar'
                document.querySelector('#audio').pause()
                document.querySelector('#audio').currentTime = 0

            if(valor == maquina){
                document.querySelector('.img-perfil').style.backgroundImage = 'none'
                document.querySelector('.img-perfil').classList.add('green')
                document.querySelector('.img-perfil').classList.remove('red')
                document.querySelector('#retorno').textContent = '!'
            } else {
                document.querySelector('.img-perfil').style.backgroundImage = 'none'
                document.querySelector('.img-perfil').classList.add('red')
                document.querySelector('.img-perfil').classList.remove('green')
                document.querySelector('#retorno').textContent = 'X'
            }

        }, 2000);
        }

        
})

document.querySelector('#iValor').addEventListener('focus', () => {
    document.querySelector('.img-perfil').style.backgroundImage = 'linear-gradient(45deg, rgb(0, 187, 250), rgb(66, 54, 238))'
    document.querySelector('#iValor').value = null
    document.querySelector('#retorno').textContent = '?'
})


document.querySelector('#iValor').addEventListener('keypress', (e) => {
    if(e.which == 13){
        document.querySelector('#iConfirmar').focus()
    }
})