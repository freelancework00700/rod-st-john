$(document).ready(function(){
    $('a[href*="#"]').click(function(){
        $($(this).attr("href")).effect("highlight", {}, 4500);
    });
});