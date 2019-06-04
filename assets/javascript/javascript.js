$(document).ready(function () {
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });

    // Randomize the mix iframe src with page load
    let mix = ""
    let mixId = Math.floor(Math.random() * 7) + 1;
    console.log("id:", mixId)

    switch (mixId) {
        case 1: mix = "https://www.mixcloud.com/widget/iframe/?hide_cover=&hide_artwork=1&feed=%2Fblacklion%2Fdisco-alfresco%2F";
            // code block
            break;
        case 2: mix = "https://www.mixcloud.com/widget/iframe/?hide_cover=&hide_artwork=1&feed=%2Fblacklion%2Fno-vacancy%2F";
            // code block
            break;
        case 3: mix = "https://www.mixcloud.com/widget/iframe/?hide_cover=&hide_artwork=1&feed=%2Fblacklion%2Fpancakes-booze-art-show-chicago-2017%2F";
            break;
        case 4: mix = "https://www.mixcloud.com/widget/iframe/?hide_cover=&hide_artwork=1&feed=%2Fblacklion%2Frhythm-bourbon%2F";
            break;
        case 5: mix = "https://www.mixcloud.com/widget/iframe/?hide_cover=&hide_artwork=1&feed=%2Fblacklion%2Flove-abroad-encore%2F";
            break;
        case 6: mix = "https://www.mixcloud.com/widget/iframe/?hide_cover=&hide_artwork=1&feed=%2Fblacklion%2Fgo-bag%2F";
            break;
        case 7: mix = "https://www.mixcloud.com/widget/iframe/?hide_cover=&hide_artwork=1&feed=%2Fblacklion%2Ffree-format%2F";
            break;
        default: mix = "https://www.mixcloud.com/widget/iframe/?hide_cover=&hide_artwork=1&feed=%2Fblacklion%2F";
        // code block
    }
    console.log("mix:", mix)
    $("#player").attr("src", mix)

});