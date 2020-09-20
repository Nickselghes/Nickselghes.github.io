var searchInput = document.querySelector('.search-input'),
    btnSearch = document.querySelector('.btn-search'),
    catalog = document.querySelector('.catalog'),
    backdropMenu = document.querySelector('.backdrop-menu'),
    btnWriteUs = document.querySelector('.btn-write-us'),
    WriteUs = document.querySelector('.modal-write'),
    closeWriteUs = document.querySelector('.modal-write-close'),
    sliderImg = document.querySelector('.slider-img'),
    Slideritem1 = document.querySelector('.slider-item-1'),
    Slideritem2 = document.querySelector('.slider-item-2'),
    Slideritem3 = document.querySelector('.slider-item-3'),
    SliderChange1 = document.querySelector('input[value="SC1"]'),
    SliderChange2 = document.querySelector('input[value="SC2"]'),
    SliderChange3 = document.querySelector('input[value="SC3"]'),   SliderChang2e1 = document.querySelector('input[value="SC1-2"]'),
    SliderChang2e2 = document.querySelector('input[value="SC2-2"]'),
    SliderChang2e3 = document.querySelector('input[value="SC3-2"]'),   SliderChang3e1 = document.querySelector('input[value="SC1-3"]'),
    SliderChang3e2 = document.querySelector('input[value="SC2-3"]'),
    SliderChang3e3 = document.querySelector('input[value="SC3-3"]');

searchInput.addEventListener('click', function(evt){
    evt.preventDefault();
    btnSearch.classList.remove('modal');
});

searchInput.onblur = function(){
    if(! this.classList.contains('modal')){
        btnSearch.classList.add('modal');
    }
};

catalog.addEventListener('mouseover', function(evt){
   evt.preventDefault();
    backdropMenu.classList.toggle('backdrop');
    sliderImg.classList.toggle('backdrop-z');
});

SliderChange1.addEventListener('click', function(evt){
    evt.preventDefault();
    if(Slideritem1.classList.contains('modal')){
        Slideritem1.classList.remove('modal');
        Slideritem2.classList.add('modal');
        Slideritem3.classList.add('modal');
    }
});

SliderChange2.addEventListener('click', function(evt){
    evt.preventDefault();
    if(Slideritem2.classList.contains('modal')){
        Slideritem2.classList.remove('modal');
        Slideritem1.classList.add('modal');
        Slideritem3.classList.add('modal');
    }
});

SliderChange3.addEventListener('click', function(evt){
    evt.preventDefault();
    if(Slideritem3.classList.contains('modal')){
        Slideritem3.classList.remove('modal');
        Slideritem1.classList.add('modal');
        Slideritem2.classList.add('modal');
    }
});

SliderChang2e1.addEventListener('click', function(evt){
    evt.preventDefault();
    if(Slideritem1.classList.contains('modal')){
        Slideritem1.classList.remove('modal');
        Slideritem2.classList.add('modal');
        Slideritem3.classList.add('modal');
    }
});

SliderChang2e2.addEventListener('click', function(evt){
    evt.preventDefault();
    if(Slideritem2.classList.contains('modal')){
        Slideritem2.classList.remove('modal');
        Slideritem1.classList.add('modal');
        Slideritem3.classList.add('modal');
    }
});

SliderChang2e3.addEventListener('click', function(evt){
    evt.preventDefault();
    if(Slideritem3.classList.contains('modal')){
        Slideritem3.classList.remove('modal');
        Slideritem1.classList.add('modal');
        Slideritem2.classList.add('modal');
    }
});

SliderChang3e1.addEventListener('click', function(evt){
    evt.preventDefault();
    if(Slideritem1.classList.contains('modal')){
        Slideritem1.classList.remove('modal');
        Slideritem2.classList.add('modal');
        Slideritem3.classList.add('modal');
    }
});

SliderChang3e2.addEventListener('click', function(evt){
    evt.preventDefault();
    if(Slideritem2.classList.contains('modal')){
        Slideritem2.classList.remove('modal');
        Slideritem1.classList.add('modal');
        Slideritem3.classList.add('modal');
    }
});

SliderChang3e3.addEventListener('click', function(evt){
    evt.preventDefault();
    if(Slideritem3.classList.contains('modal')){
        Slideritem3.classList.remove('modal');
        Slideritem1.classList.add('modal');
        Slideritem2.classList.add('modal');
    }
});

btnWriteUs.addEventListener('click', function(evt){
    evt.preventDefault();
    WriteUs.classList.toggle('modal');
});

closeWriteUs.addEventListener('click', function(evt){
    evt.preventDefault();
    WriteUs.classList.toggle('modal');
});
