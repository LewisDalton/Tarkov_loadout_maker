document
  .getElementById("helmet_select")
  .addEventListener("change", function () {
    const selected_value = this.value;
    const img_element = document.getElementById("helmet_image");
    img_element.src = selected_value;
  });

const div = document.getElementById("character");
const img = new Image(); // Create an off-screen image element

img.src = "assets/images/char_background.png"; // Replace with the actual image path
img.onload = function () {
  div.style.width = `${img.naturalWidth}px`; // Set div width to the image width
  div.style.height = `${img.naturalHeight}px`; // Set div height to the image height
};
