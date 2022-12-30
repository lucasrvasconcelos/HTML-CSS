document.querySelector('#submit').addEventListener('click', () => {
    document.querySelector('h3').style.display = 'none'
    document.querySelector('input').style.display = 'none'
    document.querySelector('button').style.display = 'none'

    let span = document.querySelector('.span')
    let c = 1

    let n = document.querySelector('#numero')
    while(c <= n.value){
        span.textContent = span.textContent + c
        c++  
    }

    c = 1

    do{
        span.textContent = span.textContent + c
        c++  
    } while(c <= n.value)
})
