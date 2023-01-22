var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');

jsTriggers.forEach (function(trigger) {
    trigger.addEventListener('click', function(){
        var id  = this.getAttribute ('data-tab'),
            content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
            activeTrigger = document.querySelector('.js-tab-trigger.active'),
            activeContent = document.querySelector('.js-tab-content.active');
        
        activeTrigger.classList.remove('active');
        trigger.classList.add('active');

        activeContent.classList.remove('active');
        content.classList.add('active')


    });
});


// ==================================================document.querySelectorAll===============================================================================\\
// const fly = document.querySelectorAll ('.menu__product')

// .forEach(product => product.addEventListener('click', function(){
//     let start = Date.now();

//     let timer = setInterval(function(){
//         let timePassed = Date.now() - start;

//         product.style.left = timePassed / 1 + 'px';

//         if (timePassed > 200) clearInterval (timer);
//     },20);
// }))

// console.log(fly);
// ==============================================================================================================================================================\\


// const fly = document.querySelectorAll ('.menu__product')

// const line = document.createElement ('line')
//     line.style.width = '100px';
//     line.style.height = '100px';
//     line.style.background = 'red';
// document.getElementById('menu__product').appendChild(line);

// console.log(line);

// const fly = document.querySelectorAll ('.menu__product')
// .forEach(product => product.addEventListener('click', function(){
//     let start = Date.now();

//     let timer = setInterval(function(){
//         let timePassed = Date.now() - start;

//         product.style.left = timePassed / 1 + 'px';

//         if (timePassed > 200) clearInterval (timer);
//     },20);
// }))

// console.log(fly);



$('.menu__product').click(function(e){
    let menu = $(this).parent('.menu__content');
    menu.append('<img src = "images/img-sha.svg" class="animatocart">')
    $('.animatocart') .css({
        'position' : 'absolute',
        'background' : '#150905',
        'width' : '45px',
        'height' : '25px',
        'border-radius' : '6px',
        'z-index' : '9999999999',
        'left' : e.pageX-50,
        'top' : e.pageY-50,
        });
    let basket = $('.header__basket  ').offset();
    $('.animatocart').animate({top: basket.top + '0px', left: basket.left + '400px', width: 0, height:0}, 600, function(){
        $(this).remove();
        
    });

    // let basket__mob = $('.header__phone--basket').offset();
    // $('.animatocart').animate({top: basket__mob.top + '0px', left: basket__mob.left + '2000px', width: 0, height:0}, 600, function(){
    //     $(this).remove();
        
    // });
});
