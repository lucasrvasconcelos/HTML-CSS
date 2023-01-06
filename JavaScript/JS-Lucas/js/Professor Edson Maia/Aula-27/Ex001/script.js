
let n = document.querySelector('#number')
let button = document.querySelector('#button')

let span = document.querySelector('#span')
let span2 = document.querySelector('.span')



button.addEventListener('click', () => {
    let ar = []
    span.innerHTML = null
    for(let i = 0;i < 13; i++){
        ar = [...ar, n.value * i]
    }

    for(let i = 0; i < ar.length ; i++){
        span.innerHTML += `${n.value} * ${i} = ${ar[i]} <br>`
        // document.write(`${n.value} * ${i} = ${ar[i]} <br>`)
    }

    
    setTimeout(() => {
        location.reload()
    }, 50000);
})


function animation(){
    span2.classList.remove('anime')
    span2.classList.add('anime')
}

