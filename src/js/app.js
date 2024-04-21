// import 'lightbox2';
import lightbox from 'lightbox2';
import '../../node_modules/lightbox2/dist/js/lightbox-plus-jquery.js';  

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel img');
    let index = 0;

    function changeImage() {
        images[index].classList.remove('active');
        index = (index + 1) % images.length;
        images[index].classList.add('active');
    }

    setInterval(changeImage, 3000);
});
