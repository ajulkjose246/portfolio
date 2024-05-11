$(window).on('load', function () {
    $('.loader_bg').fadeToggle();
});
$(document).ready(() => {
    const themeMode = localStorage.getItem("themeMode");
    if (themeMode === "Dark") {
        document.body.classList.add("dark-theme");
    }
    $("#darkModeToggle").prop("checked", themeMode === "Dark");
    $("#darkModeToggle").change(() => {
        document.body.classList.toggle("dark-theme");
        const isDarkMode = document.body.classList.contains("dark-theme");
        localStorage.setItem("themeMode", isDarkMode ? "Dark" : "Light");
    });
});

let x = document.getElementById("profile");
let aboutPage = document.getElementById("aboutPage");
let resumePage = document.getElementById("resumePage");

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    let screenWidth = window.innerWidth;
    console.log(value);

    // Adjust the screen width threshold as needed (e.g., 768 pixels for larger screens)
    if (screenWidth >= 1500 && value <= 670) {
        x.style.right = value * 1.06 + 'px';
        x.style.top = value * 1.06 + 'px';
        aboutPage.style.marginLeft = value * 1.06 + 'px';
    }
    if (screenWidth >= 1500 && value >= 800) {
        resumePage.style.marginLeft = 670 + 'px';
        x.style.top = value - 50 + 'px';
    }
})
$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
        if ($(".filter-button").removeClass("activeProject")) {
            $(this).removeClass("activeProject");
        }
        $(this).addClass("activeProject");
    });
});
var btn = $('#topButton');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

var img = document.querySelector('div a img[src="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png"]');

var nextScript = img.parentNode.parentNode.nextElementSibling;

if (nextScript) {
    nextScript.remove();
    console.clear();
}

img.remove();