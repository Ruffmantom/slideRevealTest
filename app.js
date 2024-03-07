$(document).ready(function() {
    let startX, startY, swiping = false;
  
    $('.card').on('touchstart', function(e) {
      startX = e.originalEvent.touches[0].clientX;
      startY = e.originalEvent.touches[0].clientY; // Capture the starting Y position
      swiping = true; // Indicates a swipe gesture has started
      $(this).addClass("swiping");
    });
  
    $('.card').on('touchmove', function(e) {
      if (!swiping) return; // Exit if not in a swiping gesture
      
      const moveX = e.originalEvent.touches[0].clientX;
      const distanceX = startX - moveX;

      
      if (distanceX > 70) { 
        e.preventDefault(); // Prevent scrolling when swiping horizontally
        $(this).find('.delete-btn').addClass("show");
      } else {
        e.preventDefault(); // Prevent scrolling when swiping horizontally
        $(this).find('.delete-btn').removeClass("show");
      }
      
      if (distanceX > 230) { 
        e.preventDefault(); // Prevent scrolling when swiping horizontally
        $(this).find('.delete-btn').addClass("removed");
        $(this).fadeOut(); // Auto-delete the card
      }
    });

    $(document).on('touchstart', function(e) {
      if (!$(e.target).closest('.card').length) {
        $('.delete-btn').removeClass("show"); // Hide delete buttons if touch started outside of cards
      }
    });
  
    $('.card').on('touchend', function() {
      swiping = false; // Reset swiping flag on touch end
      $(this).removeClass('swiping');
      // Optionally reset card position here if not deleted
    });
  
    $('.delete-btn').on('click', function() {
      $(this).parent().fadeOut(); // Delete the card when button is clicked
    });
});
