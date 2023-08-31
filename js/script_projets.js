$("#header").load("../header.html");

$("#header").load("header.html");

$("#apropos").load("../header-description.html");

$("#apropos").load("header-description.html");

$("ul li a p").mouseover(function () {
    $("ul li a p").not(this).css("opacity", "0.2");
});

$("li").mouseover(function () {
    $(this).find("img").css({
        "opacity": "1"
    });
    // $("img").not($(this).parent().find("img")).css({
    //     "opacity": "0"
    // });
});

$("li").mouseout(function () {
    $(this).find("img").css({
        "opacity": "0"
    });

    // $("img").not($(this).parent().find("img")).css({
    //     "opacity": "0"
    // });
});