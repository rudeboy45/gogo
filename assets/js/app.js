$(function() {
    
    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();
    
    /* Fixed Header */
    checkscroll(scrollOffset);
    
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        
        checkscroll(scrollOffset);
        
    });
    
    function checkscroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
    
    
    /* smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        let $this = $(this),
            blockid = $this.data('scroll'),
            blockOffset = $(blockid).offset().top;
        
        $("#nav a").removeClass("active");
        $this.addClass("active");
        
        
        $("html, body").animate({
           scrollTop: blockOffset 
        }, 500);
    });
    
    
    
    /* Menu nav toggle */
    
    
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();
        
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
    
    
    /* collapse */
    
    
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();
        
        let $this = $(this),
            blockid = $this.data('collapse');
        
//        $this.toggleClass("active");
        $(blockid).slideToggle();
    });  
    
    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
        
    });
    
    
    
});