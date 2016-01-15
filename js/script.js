$(document).ready(function(){
    $('.slider-box').fotorama();
});

$(document).ready(function(){
    $('div.rating').rating();
});


$('#rating').rating({

    fx: 'float',

    image: 'images/stars.png',

    loader: 'images/ajax-loader.gif',

    minimal: 0.6,

    url: 'rating.php',

    callback: function (responce) {


        this.vote_success.fadeOut(2000);

        if (responce.msg) alert(responce.msg);

    }

});
