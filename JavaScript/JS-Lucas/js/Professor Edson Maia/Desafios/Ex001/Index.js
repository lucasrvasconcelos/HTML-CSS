q1 = {
    np: 1,
    descp: 'Qual o nome e a idade da pessoa mais velha mencionada na Bíblia?',
    respa:'Matusalém, viveu 969 anos',
    respb:'Noé, viveu 990 anos',
    respc:'Rainha Ester, viveu 859 anos',
    cert: 1
}

q2 = {
    np: 2,
    descp: 'Que animal falou com Balaão?',
    respa:'Camelo',
    respb:'Jumenta',
    respc:'Cordeiro',
    cert: 2
}

q3 = {
    np: 3,
    descp: 'Enquanto pastor de ovelhas, Davi protegeu seu rebanho de dois animais perigosos. Quais?',
    respa:'Urso e escorpião',
    respb:'Cobra e lobo',
    respc:'Urso e leão',
    cert: 3
}

q4 = {
    np: 4,
    descp: 'Qual o nome da ilha onde João escreveu o livro de Apocalipse?',
    respa:'Ilha de Patmos',
    respb:'Ilha de Creta',
    respc:'Ilha de Pérgamo',
    cert: 1
}


let pergunta = document.querySelector('#pergunta')
let opcA = document.querySelector('#A')
let opcB = document.querySelector('#B')
let opcC = document.querySelector('#C')

function questoes(q){
    if(q == 1){
        pergunta.textContent = `${q1.np}° ${q1.descp}`
        opcA.textContent = q1.respa
        opcB.textContent = q1.respb
        opcC.textContent = q1.respc
        document.querySelector('#resultado').style.display = 'flex'
        document.querySelector('#resultado').textContent = `1 de 4`
    } else if (q == 2){
        pergunta.textContent = `${q2.np}° ${q2.descp}`
        opcA.textContent = q2.respa
        opcB.textContent = q2.respb
        opcC.textContent = q2.respc
        document.querySelector('#resultado').style.display = 'flex'
        document.querySelector('#resultado').textContent = `2 de 4`
 
    } else if (q == 3){
        pergunta.textContent = `${q3.np}° ${q3.descp}`
        opcA.textContent = q3.respa
        opcB.textContent = q3.respb
        opcC.textContent = q3.respc
        document.querySelector('#resultado').style.display = 'flex'
        document.querySelector('#resultado').textContent = `3 de 4`

    } else if (q == 4){
        pergunta.textContent = `${q4.np}° ${q4.descp}`
        opcA.textContent = q4.respa
        opcB.textContent = q4.respb
        opcC.textContent = q4.respc
        document.querySelector('#resultado').style.display = 'flex'
        document.querySelector('#resultado').textContent = `4 de 4`
    } else {
        console.log('Fim')
    }
}

function verifica(q){
    if(q > 4){
        return false
    } else {
        document.querySelector("#A").style.backgroundColor = 'transparent'
        document.querySelector("#B").style.backgroundColor = 'transparent'
        document.querySelector("#C").style.backgroundColor = 'transparent'
        return true
    }
}

function resposta(q){
    if(q == 1 && v == q1.cert){
        document.querySelector("#A").style.backgroundColor = 'lightgreen'
        document.querySelector("#B").style.backgroundColor = 'yellow'
        document.querySelector("#C").style.backgroundColor = 'yellow'
        console.log('Acertou')
        total += 10
        return total
    } else if (q == 2 && v == q2.cert){
        console.log('Acertou')
        document.querySelector("#A").style.backgroundColor = 'yellow'
        document.querySelector("#B").style.backgroundColor = 'lightgreen'
        document.querySelector("#C").style.backgroundColor = 'yellow'
        total += 10
        return total
    } else if (q == 3 && v == q3.cert){
        console.log('Acertou')
        document.querySelector("#A").style.backgroundColor = 'yellow'
        document.querySelector("#B").style.backgroundColor = 'yellow'
        document.querySelector("#C").style.backgroundColor = 'lightgreen'
        total += 10
        return total
    } else if (q == 4 && v == q4.cert){
        console.log('Acertou')
        document.querySelector("#A").style.backgroundColor = 'lightgreen'
        document.querySelector("#B").style.backgroundColor = 'yellow'
        document.querySelector("#C").style.backgroundColor = 'yellow'
        total += 10
        return total
    } else {
        if(q == 1){
            document.querySelector("#A").style.backgroundColor = 'lightgreen'
            document.querySelector("#B").style.backgroundColor = 'yellow'
            document.querySelector("#C").style.backgroundColor = 'yellow'
        }
        else if(q == 2){
            document.querySelector("#A").style.backgroundColor = 'yellow'
            document.querySelector("#B").style.backgroundColor = 'lightgreen'
            document.querySelector("#C").style.backgroundColor = 'yellow'
        }
        if(q == 3){
            document.querySelector("#A").style.backgroundColor = 'yellow'
            document.querySelector("#B").style.backgroundColor = 'yellow'
            document.querySelector("#C").style.backgroundColor = 'lightgreen'
        }
        if(q == 4){
            document.querySelector("#A").style.backgroundColor = 'lightgreen'
            document.querySelector("#B").style.backgroundColor = 'yellow'
            document.querySelector("#C").style.backgroundColor = 'yellow'
        }
        console.log('errou')
        total += 0
        return total
    }
}

function totais(total){
    document.querySelector('.quiz').style.display = 'none'
    document.querySelector('#resultado').style.display = 'flex'
    document.querySelector('#resultado').textContent = `Você conseguiu ${total} pontos`
    setTimeout(() => {
        location.reload()
    }, 2000);
}

let q = 1
let v = 0
let total = 0

document.querySelector("#A").addEventListener('click', () =>{
   console.log(document.querySelector('#A').value)
    v = document.querySelector('#A').value
    total =+ resposta(q, v)
    q += 1
    setTimeout(() => {
        if(verifica(q) == true){
            questoes(q)
        }else{
           totais(total)
         }
    }, 2000);
})

document.querySelector("#B").addEventListener('click', () =>{
    console.log(document.querySelector('#B').value)
    v = document.querySelector('#B').value
    total =+ resposta(q, v)
    q += 1
    setTimeout(() => {
        if(verifica(q) == true){
            questoes(q)
        }else{
           totais(total)
         }
    }, 2000);
})

document.querySelector("#C").addEventListener('click', () =>{
    console.log(document.querySelector('#C').value)
    v = document.querySelector('#C').value
    total =+ resposta(q, v)
    q += 1
    setTimeout(() => {
        if(verifica(q) == true){
            questoes(q)
        }else{
           totais(total)
         }
    }, 2000);
})

///////////////////////////////////////////////////////////////////////////////////////

document.querySelector('#testar').addEventListener('click', () => {
        document.querySelector('.quiz').classList.add('align')
        document.querySelector('.quiz').style.display = 'flex'
        document.querySelector('#testar').style.display = 'none'
        if(verifica(q) == true){
           questoes(q)
        } else{
           console.log('Parou')
         }
})