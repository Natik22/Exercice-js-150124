const imgs = document.querySelectorAll('img');  
const slide = imgs.length;
const suivant = document.querySelector ('.right');
const precedent = document.querySelector ('.left');
let count = 0;


function suivantSlide(){
    imgs[count].classList.remove('active');

    if (count < slide - 1){
    count++;
    } else {
        count = 0;
    }
    imgs[count].classList.add('active');
}

suivant.addEventListener('click', suivantSlide)

function precedentSlide(){
    imgs[count].classList.remove('active');

    if (count > 0){
    count--;
    } else {
        count = slide - 1;
    }
    imgs[count].classList.add('active');
}

precedent.addEventListener('click', precedentSlide)

function keyPress(e) {
    if (e.keyCode === 37){
        suivantSlide();
    } else if (e.keyCode === 39){
        precedentSlide();
    }
}
document.addEventListener('keydown', keyPress)