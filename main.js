const d = document,
  $imageContainer = d.getElementById("main-container");

let imgPicker = 1;

d.addEventListener("DOMContentLoaded", function () {
  setInterval(() => {
    $imageContainer.innerHTML = `<img src=../../assets/carrusel/${imgPicker}.jpg alt= imagen ${imgPicker} />`;
    imgPicker++;
    if (imgPicker === 11) imgPicker = 1;
  }, 2000);
});
