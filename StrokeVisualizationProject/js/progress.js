
$(document).ready(function () {
    setTimeout(function(){
        $('#bodies').show();
    }, 1000);
});


$(function() {
    $(".preload").fadeOut(2000, function() {
        $(".content").fadeIn(1000);
    });
});