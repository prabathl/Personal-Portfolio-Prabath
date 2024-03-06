// script.js

// Download Resume functionality
$(document).ready(function() {
  // Add a click event listener to the "Download Resume" button
  $('#downloadResumeBtn').click(function() {
    // Change the href attribute to the path of your resume PDF
    var resumePath = 'Assets/CV.pdf';
    // Trigger the download
    window.location.href = resumePath;
  });
});

// Image Slider for Projects Page
$(document).ready(function() {
  // Initialize the Bootstrap carousel
  $('#projectSlider').carousel();

  // Optional: Pause the slider on hover
  $('#projectSlider').hover(function() {
    $(this).carousel('pause');
  }, function() {
    $(this).carousel('cycle');
  });
});
