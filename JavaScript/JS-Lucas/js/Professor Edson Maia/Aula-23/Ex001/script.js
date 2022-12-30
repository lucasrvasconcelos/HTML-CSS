
let hora = document.querySelector('#hora')
let minuto = document.querySelector('#minuto')
let segundo = document.querySelector('#segundo')

let horaatual = new Date().getHours()
let minutoatual = new Date().getUTCMinutes()
let segundoatual = new Date().getUTCSeconds()

hora = document.querySelector('#hora').textContent = digitos(horaatual)
        minuto = document.querySelector('#minuto').textContent = digitos(minutoatual)
        segundo = document.querySelector('#segundo').textContent = digitos(segundoatual)
        relogio(hora)
        console.log('a')

function digitos(n){
    if(n < 10 && n >= 0){
        return `0${horaatual}`
    } else{
        return n
    }
}

function relogio(h){
    let img = null
    if(h > 4 && h <= 12){
        img = "https://cdn-icons-png.flaticon.com/512/3108/3108530.png"
        document.querySelector('#img').setAttribute('src', img)
        document.querySelector('.imagem').classList.add('rotate')
    } else if (h >= 12.01 && h < 18){
        img = "https://cdn-icons-png.flaticon.com/512/3175/3175147.png"
        document.querySelector('#img').setAttribute('src', img)
        document.querySelector('.imagem').classList.remove('rotate')
    } else if (h >= 18 && h <= 23.59){
        img = 'https://cdn-icons-png.flaticon.com/512/4958/4958197.png'
        document.querySelector('#img').setAttribute('src', img)
        document.querySelector('.imagem').classList.add('rotate')
    } else{
        img = 'https://cdn-icons-png.flaticon.com/512/4482/4482094.png'
        document.querySelector('#img').setAttribute('src', img)
        document.querySelector('.imagem').classList.remove('rotate')
    }
}

