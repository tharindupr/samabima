$(document).ready(function() {
    $(".featured-container").mCustomScrollbar({
        axis: "x", // horizontal scrollbar
        theme: "dark",
        scrollInertia: 0
    });

    $('.featured-container').slimScroll({
        height: '295px'
    });
});