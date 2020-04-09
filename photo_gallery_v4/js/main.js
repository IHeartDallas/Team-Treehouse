

$(document).ready(function () {
    $('.light-box').magnificPopup({
        type: 'image',
        gallery: { enabled: true },
        removalDelay: 300,       // Delay in milliseconds before popup is removed
        mainClass: 'mfp-fade',   // Class that is added to popup wrapper and background
        image: {
            titleSrc: 'title' // this tells the script which attribute has your caption
        }
    });
});

$(document).ready(function () {
    let images = document.getElementsByTagName('a');
    $("#myInput").on('keyup', function () {
        let search = $("#myInput").val().toLowerCase();
        for (var i = 0; i < images.length; i++) {
            let searchVal = images[i].getAttribute("title");
            if (searchVal.toLowerCase().indexOf(search) > -1) {
                images[i].style.display = "";
            } else {
                images[i].style.display = "none";
            }
        }
    });
});

$(document).ready(function () {
    $("#sticker").sticky({ topSpacking: 0 });
});

$(document).ready(function () {
    $("header").sticky({
        getWidthFrom: '.gallery',
        responsiveWidth: true
    })
});