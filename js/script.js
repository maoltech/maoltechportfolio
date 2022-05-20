$(document).ready(function() {
    
    // Animate on Scroll Initialization
    AOS.init({
        duration: 1000,
        mirror: true
    });

    // .scroll() creates an event when the user scrolls
    $(window).scroll(function() {

      // .scrollTop() retrieves vertical position of the scroll bar for the first element in a set of matched elements
      var scroll = $(window).scrollTop();

      var aboutSection = $('#about');
      var portSection = $('#projects');
      var blogSection = $('#blog');
      var contSection = $('#contact');

      // .offset() retrieves current position of element relative to document
      var aboutPosition = aboutSection.offset().top;
      var portPosition = portSection.offset().top;
      var blogPosition = blogSection.offset().top;
      var contPosition = contSection.offset().top;

      if(scroll < aboutPosition) {
        $('#home-link').addClass('active-link');
        $('#about-link').removeClass('active-link');
        $('nav').removeClass('navbar-display');
      }
      else if (scroll > aboutPosition - 100) {
        $('nav').addClass('navbar-display');
        $('#about-link').addClass('active-link');
        $('#home-link').removeClass('active-link');
        $('#port-link').removeClass('active-link');
      }
      else {
        $('nav').removeClass('navbar-display');
      }
      
      if(scroll > portPosition - 100){
        $('#port-link').addClass('active-link');
        $('#about-link').removeClass('active-link');
        $('#blog-link').removeClass('active-link');
      }

      if(scroll > blogPosition - 100){
        $('#blog-link').addClass('active-link');
        $('#port-link').removeClass('active-link');
        $('#cont-link').removeClass('active-link')
      }

      if(scroll > contPosition - 100){
        $('#cont-link').addClass('active-link');
        $('#blog-link').removeClass('active-link');
      }

    });
  });