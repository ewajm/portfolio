$(document).ready(function(){
  $("#myName").on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
    $("#mySkillz").removeClass("light-text").addClass("fadeIn");
  });
});
