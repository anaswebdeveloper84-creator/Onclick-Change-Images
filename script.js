function changeImage(thumb) {
  const mainImage = document.getElementById('displayedImage');
  mainImage.src = thumb.src.replace('/150/100', '/600/400'); // use large version
}
