$(window).load(function() {
    var item = $('.item');
    /* begin toggle class on each .item */
    item.each(function () {
        $(this).on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('active');
        });
    });
    /* END toggle class on each .item */

    /* begin text cutting by three periods */
    item.dotdotdot();
    /* END text cutting by three periods */

    var setMainHeight = function () {
        var main = $('main');
        if ($(window).width() > 750) {
            if ( $(window).height() > main.height() ){
                var winH = $(window).height();
                var headerH = $('header').outerHeight();
                var height = winH - headerH -10;
                main.css('height', height + 'px');
            } else {
                main.css('height', main.height() + 'px');
            }
        }
    };
    setMainHeight();

    $(window).resize(function () {
        setMainHeight();
        item.dotdotdot();
    });

    // begin toggle menu
    $('.btn-menu-toggle').on('click', function(e){
        e.preventDefault();
        var btnMenu = $('.btn-menu-toggle');
        nav = $('nav');
        wrap = $('.wrapper');
        if (nav.hasClass('active')){
            nav.toggleClass('active').animate({left: '-250px'}, 300);
            wrap.animate({left: '0'}, 300, function () {
                wrap.css('position', 'static')
            });
            btnMenu.toggleClass('active');
        } else {
            nav.toggleClass('active').animate({left: '0'}, 300);
            wrap.animate({left: '250px'}, 300).css('position', 'fixed');
            btnMenu.toggleClass('active');
        }
    });
    // END toggle menu
});