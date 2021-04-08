

// quando scorro suula freccia diventa rossa e quando esco ritoorna nera.
// per freccia dx
var scorriDestra = $ ('.right');

scorriDestra.mouseenter(function(){

    scorriDestra.addClass('red');
    

})
scorriDestra.mouseleave(function(){

    scorriDestra.removeClass('red');
    

})

// per freccia sx
var scorriSinistra = $ ('.left');
scorriSinistra.mouseenter(function(){

    scorriSinistra.addClass('red');
    

})
scorriSinistra.mouseleave(function(){

    scorriSinistra.removeClass('red');
    

})
// quando clicco scorro le immagini
var cliccaDestra = $('.right');

cliccaDestra.click(function(){

    var scorriImg = $('.active');

    scorriImg.removeClass('active');

    // se l'immagine è l'ultima della lista, torno alla prima
    // else scorro le immagini normalmente
    if (scorriImg.hasClass('last')){
        
        $('.first').addClass('active');
    
    }else{
        
        var nextImg = scorriImg.next();
        nextImg.addClass('active');

    }
})


var cliccaSinistra = $('.left');

cliccaSinistra.click(function(){

    var scorriImg = $('.active');

    scorriImg.removeClass('active');

    // if --> l'immmagine è la prima della lista, torne all'ultima
    // else --> scorro le immagini al contrario normalmente
    if (scorriImg.hasClass('first')){
        
        $('.last').addClass('active');
    
    }else{
        
        var nextImg = scorriImg.prev();
        nextImg.addClass('active');

    }
})