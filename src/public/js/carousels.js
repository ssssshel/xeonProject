const btnLeft = document.getElementById('headerSliderLeft');
const btnRight = document.getElementById('headerSliderRight');

const headerSlider = document.querySelector('.headerSlider');
const s1 = document.getElementById('headerSlide1');
const s2 = document.getElementById('headerSlide2');
const s3 = document.getElementById('headerSlide3');

const intervalTime = 3500;
let position = 0;

const carousel = [s1, s2, s3];

function rightPhoto(){
    if(position >= carousel.length -1){
        position = 0;
    }else{
        position++;
    }
    render();
}

function leftPhoto(){
    if(position <= 0){
        position = carousel.length -1
    }else{
        position--;
    }
    render();
}

function render(){
    let item = carousel[position];
    item.style.display = 'block';
    if(position == 0){
        s2.style.display = 'none';
        s3.style.display = 'none';
    }else if(position == 1){
        s1.style.display = 'none';
        s3.style.display = 'none';
    }else if(position == 2){
        s1.style.display = 'none';
        s2.style.display = 'none';
    }
}

function transition(){
    interval = setInterval(rightPhoto, intervalTime);
}

btnLeft.addEventListener('click', leftPhoto);

btnRight.addEventListener('click', rightPhoto);

render();
transition();