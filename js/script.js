var layer = document.querySelector('.layer'),
    layer1 = document.querySelector('.layer-1'),
    layer2 = document.querySelector('.layer-2');

layer.addEventListener('mousemove', function(evt){
    let x = evt.clientX;
    let y = evt.clientY;
    layer1.style.transform = 'translate(' + x * 1/40 + 
    'px) ';
    
    layer2.style.transform = 'translate(' + x * 1/150 + 'px,' + y * 1/150 + 'px)';
});