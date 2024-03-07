$(document).ready(function () {
  // Listen for swipeleft on cards
  $(".card").on("swipeleft", function (e) {
    let cardId = $(this).data("cardid"); // Use $(this) for consistency
    console.log(cardId);
    $(this).addClass("swiping");
    $(this).find('.delete-btn').addClass("show");
  });

  // Listen for swiperight on cards
  $(".card").on("swiperight", function (e) {
    let cardId = $(this).data("cardid"); // Use $(this) for consistency
    console.log(cardId);
    $(this).removeClass("swiping");
    $(this).find('.delete-btn').removeClass("show");
  });

  // Handle click event on delete buttons
  $('.delete-btn').on('click', function() {
    $(this).parent().fadeOut(); // Delete the card when button is clicked
  });
});
