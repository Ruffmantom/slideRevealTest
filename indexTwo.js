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
      const moveY = e.originalEvent.touches[0].clientY;
      const distanceX = startX - moveX;
      const distanceY = Math.abs(startY - moveY); // Absolute distance moved vertically
      
      if (distanceY > distanceX) {
        // If more vertical movement than horizontal, allow default behavior (scrolling)
        return;
      }

      e.preventDefault(); // Prevent scrolling when swiping horizontally

      if (distanceX > 70) { // Adjust threshold as needed
        $(this).find('.delete-btn').addClass("show");
      } else {
        $(this).find('.delete-btn').removeClass("show");
      }
      
      if (distanceX > 230) { // Adjust auto-delete threshold as needed
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
