$(window).on("load", function(){
    // preloader start
    $(".preloader").fadeOut("slow")
    // preloader end
})



$(document).ready(function(){
    // navbar shrink start
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink")
        }
        else{
            $(".navbar").removeClass("navbar-shrink")
        }
    });
    // navbar shrink end
    // video popup start
    const videoSrc = $("#player_01").attr("src");
    $(".video-play-btn, .video-popup").on("click", function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#player_01").attr("src", "");
        }
        else{
            $(".video-popup").addClass("open");
            if( $("#player_01").attr("src") == ''){
                $("#player_01").attr("src", videoSrc);
            }
        }
    })
    // video popup end

    // features carousel start
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    }) 
    // features carousel end
    // screenshots carousel start
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    }) 
    // screenshots carousel end

    // testimonials carousel start
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    }) 
    // testimonials carousel end
    // team carousel start
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    }) 
    // team carousel end


    // faq section start
    $(".accordion .accordion-item .accordion-header").click(function(){

        // self clicking close
        if($(this).next(".accordion-body").hasClass("active")){
            $(this).next(".accordion-body").removeClass("active").slideUp()
            $(this).children("span").removeClass("fa-minus").addClass("fa-plus")
        }
        else{
        $(".accordion-item .accordion-body").removeClass("active").slideUp()
        $(".accordion-item .accordion-header span").removeClass("fa-minus").addClass("fa-plus")
        $(this).next(".accordion-body").addClass("active").slideDown()

        $(this).children("span").removeClass("fa-plus").addClass("fa-minus")
        }
    })
    // faq section end
    

    // page scrolling start
    $.scrollIt({
        topOffset: -50
    });

    // page scrolling end

    // navbar collapse start
    $(".nav-link").on("click", function(){
        $(".navbar-collapse").collapse("hide");
    })
    // navbar collapse end

    // toggle theme start
    function toggleTheme(){
        if(localStorage.getItem("shala-theme") !==null){
            if(localStorage.getItem("shala-theme") === "dark"){
                $("body").addClass("dark");
            }
            else{
                $("body").removeClass("dark")
            }
        }
        updateIcon();
    }
    toggleTheme();
    $(".toggle-theme").on("click", function(){
        $("body").toggleClass("dark")
        if($("body").hasClass("dark")){
            localStorage.setItem("shala-theme", "dark");
        }
        else{
            localStorage.setItem("shala-theme", "light");
        }
        updateIcon();
    })
    function updateIcon(){
        if($("body").hasClass("dark")){
            $(".toggle-theme i").removeClass("fa-moon")
            $(".toggle-theme i").addClass("fa-sun")
        }
        else{
            $(".toggle-theme i").removeClass("fa-sun")
            $(".toggle-theme i").addClass("fa-moon")
        }
    }
    // toggle theme end

});