

document.querySelector('#iNota1').addEventListener('blur', () => { 
    let nota1 = document.querySelector('#iNota1').value
    if(nota1 < 0 || nota1 > 10){
        document.querySelector('#iNota1').style.outline = '0.5px solid red'
        // document.querySelector('.mensagem').textContent = 'DIGITE VALORES VÁLIDOS'
        // document.querySelector('.mensagem').style.backgroundColor = 'red'
        // document.querySelector('.mensagem').style.color = 'white'
    }else{
        document.querySelector('#iNota1').style.outline = '0.5px solid green'
        // document.querySelector('.mensagem').textContent = null
        // document.querySelector('.mensagem').style.backgroundColor = 'transparent'
        // document.querySelector('.mensagem').style.color = 'white'
    }
    
})

document.querySelector('#iNota2').addEventListener('blur', () => { 
    let nota2 = document.querySelector('#iNota2').value
    if(nota2 < 0 || nota2 > 10){
        document.querySelector('#iNota2').style.outline = '1px solid red'
        // document.querySelector('.mensagem').textContent = 'DIGITE VALORES VÁLIDOS'
        // document.querySelector('.mensagem').style.backgroundColor = 'red'
        // document.querySelector('.mensagem').style.color = 'white'
    }else{
        document.querySelector('#iNota2').style.outline = '1px solid green'
        // document.querySelector('.mensagem').textContent = null
        // document.querySelector('.mensagem').style.backgroundColor = 'transparent'
        // document.querySelector('.mensagem').style.color = 'white'
    }
    
})

document.querySelector('#Calcular').addEventListener('click', function(e){
    e.preventDefault()
    var nota1 = Number.parseFloat(document.querySelector('#iNota1').value)
    var nota2 = Number.parseFloat(document.querySelector('#iNota2').value)
    
    if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10){
        document.querySelector('#situacao').textContent = null
        document.querySelector('#iResult').value = null
        document.querySelector('.mensagem').textContent = null
        document.querySelector('.mensagem').style.backgroundColor = null
        document.querySelector('.mensagem').style.color = null
        document.querySelector('.mensagem').textContent = 'DIGITE VALORES VÁLIDOS'
        document.querySelector('.mensagem').style.backgroundColor = 'red'
        document.querySelector('.mensagem').style.color = 'white' 

        // FLASH MENSAGE
        setTimeout(() => {
            document.querySelector('.mensagem').textContent = null
            document.querySelector('.mensagem').style.backgroundColor = null
            document.querySelector('.mensagem').style.color = null  
        }, 5000);

    } else {
        function media(n1, n2){
            media = (n1 + n2) / 2
            return media.toFixed(2)
            }      
        
        mediaFinal = media(nota1, nota2)
        // Number(mediaFinal).toFixed(2)
        
        document.querySelector('#iResult').value = mediaFinal
            
            if(mediaFinal >= 0 && mediaFinal <= 4.99){
                document.querySelector('#situacao').textContent = 'REPROVADO' 
                vsmp()
            } else if (mediaFinal >= 5 && mediaFinal <= 5.99){
                document.querySelector('#situacao').textContent = 'RECUPERAÇÃO'
                vsmp() 
            } else if (mediaFinal >= 6 && mediaFinal <= 10){
                document.querySelector('#situacao').textContent = 'APROVADO'
                vsmp()
            } else if(isNaN(mediaFinal)){
                document.querySelector('#situacao').textContent = 'INFORME AS NOTAS'
                document.querySelector('.mensagem').textContent = null
                document.querySelector('.mensagem').style.backgroundColor = null
                document.querySelector('.mensagem').style.color = null 
            } else {
                
                document.querySelector('#situacao').textContent = 'VALORES INVÁLIDOS'
                setTimeout(() => {
                    document.querySelector('#situacao').style.color = 'red'
                }, 2000);
                document.querySelector('.mensagem').textContent = null
                document.querySelector('.mensagem').style.backgroundColor = null
                document.querySelector('.mensagem').style.color = null 
            }
        
            function vsmp(){
                document.querySelector('.mensagem').textContent = 'OBRIGADO, VOLTE SEMPRE'
                document.querySelector('.mensagem').style.backgroundColor = 'rgb(28, 151, 145)'
                document.querySelector('.mensagem').style.color = 'white'
            }
    }
})

document.querySelector('#Limpar').addEventListener('click', function(e){
        document.querySelector('#iNota1').value = null
        document.querySelector('#iNota2').value = null
        document.querySelector('#situacao').textContent = null
        document.querySelector('#iResult').value = null
        document.querySelector('.mensagem').textContent = null
        document.querySelector('.mensagem').style.backgroundColor = null
        document.querySelector('.mensagem').style.color = null
    e.preventDefault()
})
