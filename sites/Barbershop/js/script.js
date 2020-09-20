var
overlay = document.querySelector('.overlay'),
btnAuth = document.querySelector('.btn-auth'),
authForm = document.querySelector('.modal-auth'),
login = document.querySelector('input[name="login"]'),
authClose = document.querySelector('.auth-close'),
mapClose = document.querySelector('.map-close'),
btnMap = document.querySelector('.btn-map'),
btnMapSecond = document.querySelector('.btn-map-second'),
map = document.querySelector('.modal-map');

btnAuth.addEventListener('click', function(evt){
    evt.preventDefault();
    authForm.classList.toggle('modal-active');
    overlay.classList.toggle('overlay-active');
    login.focus;
});

authClose.addEventListener('click', function(evt){
    evt.preventDefault();
    authForm.classList.toggle('modal-active');
    overlay.classList.toggle('overlay-active');
})

if(btnMap){
    btnMap.addEventListener('click', function(evt){
        evt.preventDefault();
        map.classList.toggle('modal-active');
        overlay.classList.toggle('overlay-active');
    });
}

btnMapSecond.addEventListener('click', function(evt){
    evt.preventDefault();
    map.classList.toggle('modal-active');
    overlay.classList.toggle('overlay-active');
});

mapClose.addEventListener('click', function(evt){
    evt.preventDefault();
    map.classList.toggle('modal-active');
    overlay.classList.toggle('overlay-active');
})

