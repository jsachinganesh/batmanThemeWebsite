const images = [...document.querySelectorAll('.sliderContainer img')];
const sliderBtn = document.querySelector('.sliders_btns');
const modalOpenBtn = [...document.querySelectorAll('.readMore')];
const modalBtn = document.querySelector('.modal_innerBtn');
const modal_cotainer = document.querySelector('.modal_cotainer');
const modal = document.querySelector('.modal');

let cnt = 0;
const width = images[0].offsetWidth;
slider(cnt);


sliderBtn.addEventListener('click', (e) => {
    const name = e.target.getAttribute("data-name");
    if (name === 'left') {
        preImg();
    } else if(name=='right') {
        nextImg();
    }
});

function slider(slide){
    images.forEach((img, i) => {
        img.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
}

function nextImg() {
    if (cnt === images.length - 1) {
        cnt = 0;
    } else {
        cnt++;
    }
    slider(cnt);
}


function preImg() {
    if (cnt == 0) {
        cnt = images.length - 1;
        slider(cnt);
    } else {
        cnt--;
        slider(cnt);
    }
    
}


modalBtn.addEventListener('click', (e) => {
    modal.classList.add('hide');
});

modalOpenBtn.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
        modal.classList.remove('hide');
    });
});

modal.addEventListener('click', (e) => {
    modal.parentElement.querySelector('.modal').classList.add('hide');
})