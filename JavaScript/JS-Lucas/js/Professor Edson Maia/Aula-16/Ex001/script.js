document.querySelector('#button').addEventListener('click', () => {
    document.querySelector('#audio').play()
    document.querySelector('#button').setAttribute('disabled', '')
    document.querySelector('#iDado').setAttribute('src', `./img/dado/0.png`)
    document.querySelector('#iDado').classList.add('rotate')
    // document.querySelector('#button').style.display = 'none'
    setTimeout(() => {
        document.querySelector('#iDado').classList.remove('rotate')
        const dado = [ 1, 2, 3, 4, 5, 6 ]
        let n = Math.floor(Math.random() * dado.length + 1)
        document.querySelector('#button').removeAttribute('disabled')
        document.querySelector('#iDado').setAttribute('src', `./img/dado/${n}.png`)
        console.log(n)

    }, 650);

    
}) 