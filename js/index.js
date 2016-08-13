$(document).ready(function(){
  $("#myName").on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
    $("#mySkillz").removeClass("light-text").addClass("fadeIn");
  });

  $("nav a").on('click', function(event){
  // Prevent default anchor click behavior
    event.preventDefault();
    // Store hash (#)
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 500, function(){
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
});
