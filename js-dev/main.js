$(document).ready(function () {
    $(document).on('click', '.menu-toggler, .mob-menu__overlay, .mob-menu__close', function () {
        $('.mob-menu').toggleClass('active');
        return false;
    });
    
    $('.marquee').marquee({
        duration: 13000,
        startVisible: false,
        duplicated: true
    });
});