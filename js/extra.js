//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('ul.bs-sidenav > li > a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    $('img').after(function() {
        if ($(this).attr('title') == undefined) {$(this).attr('title', $(this).attr('alt'));}
        // return '<div class="img-caption" style="width:' + $(this).css('width') + '">' + $(this).attr('alt')  + '</div>';
        return '<div class="img-caption">' + $(this).attr('alt')  + '</div>';
    });
});
