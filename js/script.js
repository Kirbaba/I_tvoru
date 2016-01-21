
/*-------------GOOGLE MAPS-----------------*/

function initialize() {

    var myLatlng = new google.maps.LatLng(59.934602, 30.334607);
    var mapOptions = {
        center: new google.maps.LatLng(59.934602, 30.334607),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title:"Ditlogistic"
    });
}

function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAaOWKyamSxMTXclSDFmJ2N4Am20PCTD6I&sensor=FALSE&callback=initialize";
    document.body.appendChild(script);
}

window.onload = loadScript;


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

    $(".toggle-menu").click(function(e) {
        e.preventDefault();
        $(".navigation-mobile").slideDown("slow");
    });
    $(".navigation-mobile__menu-hide").click(function(e) {
        e.preventDefault();
        $(".navigation-mobile").slideUp("fast");
    });

});



