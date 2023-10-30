let menu = document.querySelector('.menu');
let icon = document.querySelector('.nav__icon');


icon.addEventListener('click',function(){
    if(this.classList.contains('fa-bars')){
        this.classList = 'fas fa-xmark nav__icon';
        menu.style.left = 0;
    }
    else{
        this.classList = 'fas fa-bars nav__icon';
        menu.style.left = "-270px";
    }
})
