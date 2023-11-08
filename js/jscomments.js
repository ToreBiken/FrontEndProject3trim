$(document).ready(function() {
    $(".our-courses-button").click(function() {
      $(".pt-5").each(function(index) {
        $(this).delay(index * 300).fadeIn(500);
      });
    });
  });
  
  $(document).ready(function() {
    $(".our-courses-button").click(function() {
      $("#hide").each(function(index) {
        $(this).delay(index * 300).fadeIn(500);
      });
    });
  });
  
  
  $(document).ready(function() {
    $("#our-courses-button").click(function() {
      $(".pt-5").each(function(index) {
        $(this).delay(index * 300).fadeIn(500);
      });
      $("#hide").each(function(index) {
        $(this).delay(index * 300).fadeIn(500);
      });
    });
    $("#hide").click(function() {
      $(".pt-5").fadeOut(500);
      $("#hide").fadeOut(500);
    });
  });
  