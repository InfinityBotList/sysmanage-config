function imgError(place) {
    place.src='https://cdn.discordapp.com/attachments/653733403841134600/1133665334101037116/CordX.jpg';
}

function backImgError(place) {
    place.src='https://cdn.discordapp.com/attachments/653733403841134600/1133665334101037116/CordX.jpg';
}




var $info = $('.tooltip');
$info.each( function () {
  var dataInfo = $(this).data("tooltip");
  $( this ).append('<span class="inner" >' + dataInfo + '</span>');
});
  
$('body').toggleClass('loaded');
$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','rgb(2,0,36)');
    }, 250);
 
});
