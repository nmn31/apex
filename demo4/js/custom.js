$('.preloader').addClass('preloader-deactivate');
$(document).ready(function() {
  // When the dot-menu is clicked, toggle the menu
      // Toggle the 'visible' class on .mob-menu to show or hide the menu
    $('.mob-menu').toggleClass('visible');
    
    // You can also apply changes to the targeted containers if needed
    $('.others-option-for-responsive .container .container').each(function() {
      // Example action: add a class to the nested container
      $(this).toggleClass('active');  // Add or remove the 'active' class
    });
});
