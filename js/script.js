jQuery(document).ready(function($){
    $('.slider-box').fotorama();

    $('.custom-arrow-left').on('click', function(){
        var $fotoramaDiv = $('.slider-box').fotorama();
        var fotorama = $fotoramaDiv.data('fotorama');
        fotorama.show('<');
    });

    $('.custom-arrow-right').on('click', function(){
        var $fotoramaDiv = $('.slider-box').fotorama();
        var fotorama = $fotoramaDiv.data('fotorama');
        fotorama.show('>');
    });
});



