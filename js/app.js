document.addEventListener('DOMContentLoaded', function() {

    // hide & show text Chair CLAIR & MARGARITA from "bar-text" after mouseover & mouseout event:
    var imageGallery = document.querySelectorAll('.image-gallery');

    for (var i = 0; i < imageGallery.length; i++) {
        imageGallery[i].addEventListener('mouseover', function() {
            this.querySelector('.opacity-gallery').classList.toggle('hide');
            //or
            // this.querySelector('.opacity-gallery').style.display='none';
        });
        imageGallery[i].addEventListener('mouseout', function() {
            this.querySelector('.opacity-gallery').classList.toggle('hide');
            //or
            // this.querySelector('.opacity-gallery').style.display='block';
        });
    }


});
