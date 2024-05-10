$('[goto]').click(function () {
    if ($(this).attr('goto').includes("#")) {
        $('html, body').animate({
            scrollTop: $($(this).attr('goto')).offset().top - 130
        }, 1000);
    } else if ($(this).attr('goto').includes("https") || $(this).attr('goto').includes("mailto:")) {
        window.open($(this).attr("goto"), "_blank")
    }
});