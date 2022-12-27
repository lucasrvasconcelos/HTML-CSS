window.onscroll =  () => {
    if(document.documentElement.scrollTop > 10){
        document.querySelector("header").classList.add('header');
        document.querySelector("header").classList.remove('header-reverse');
        
    } else {
        document.querySelector("header").classList.remove('header');
        document.querySelector("header").classList.add('header-reverse');
        console.log(document.documentElement.scrollTop)
    }

}
