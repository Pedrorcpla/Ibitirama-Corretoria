var images = document.querySelectorAll('.images-area .image');
var plants = document.querySelectorAll('.plant');
var close = document.querySelector('.closeButton');


const bigimage = document.querySelector('.bigimage');
const areaimage = document.querySelector('.areaimage');

images.forEach(image => {
    // image.addEventListener('click', (event)=> console.log(window.getComputedStyle(event.target).backgroundImage));
    image.addEventListener('click', openImageModal);
});
plants.forEach(plant => {
    // plant.addEventListener('click', (event)=> console.log(window.getComputedStyle(event.target).backgroundImage));
    plant.addEventListener('click', openImageModal);
});

function openImageModal(event) {
    event.preventDefault();

    const element = event.target;
    const url = window.getComputedStyle(element).backgroundImage;
    areaimage.style.backgroundImage = url;
    bigimage.style.display = 'flex';
}

close.addEventListener('click', () => {
    bigimage.style.display = 'none';
})