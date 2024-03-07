$(document).ready(function () {
  let startX;

  $(".card").on("touchstart", function (e) {
    startX = e.originalEvent.touches[0].clientX;
    $(this).addClass("swiping");
  });

  $(".card").on("touchmove", function (e) {
    const moveX = e.originalEvent.touches[0].clientX;
    const distance = startX - moveX;
    console.log(distance);
    if (distance > 50) {
      // Adjust threshold as needed
      // $(this).find('.delete-btn').show();
      $(this).find(".delete-btn").addClass("show");
    } else {
      $(this).find(".delete-btn").removeClass("show");
    }
    if (distance > 230) {
      // Adjust auto-delete threshold as needed
      $(this).find(".delete-btn").addClass("removed");
      $(this).fadeOut(); // Auto-delete the card
    }
  });

  $(".card").on("touchend", function () {
    $(this).removeClass("swiping");
    // Optionally reset card position here if not deleted
  });

  $(".delete-btn").on("click", function () {
    $(this).parent().fadeOut(); // Delete the card when button is clicked
  });

  $(document).on("touchstart", function (e) {
    if (!$(e.target).closest(".card").length) {
      $(".delete-btn").removeClass("show"); // Hide all delete buttons
    }
  });
});