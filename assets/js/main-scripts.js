const navbar = $('nav');

$(window).scroll(function() {
    // $(this).scrollTop() > 50 ? windowScrollTop(true) : windowScrollTop(false)
})

function animateScrollTopNavbar(scrolledTop) {
    (scrolledTop) ? navbar.addClass("c-nav-scroll"): navbar.removeClass("c-nav-scroll");
}

function windowScrollTop(scrollTop) {
    animateScrollTopNavbar(scrollTop)
}