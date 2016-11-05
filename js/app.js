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

    var rightArrow = document.querySelector('.right-arrow');
    var leftArrow = document.querySelector('.left-arrow');
    var slideImg = document.querySelectorAll('.slide')
        // lub var list = document.querySelectorAll('li');
    var imgCounter = 0;

    slideImg[0].classList.add('visible');


    rightArrow.addEventListener("click", function() {
        slideImg[imgCounter].classList.remove('visible');
        imgCounter++;

        if (imgCounter >= slideImg.length) {
            imgCounter = 0;
        }

        slideImg[imgCounter].classList.add('visible');
    });


    leftArrow.addEventListener("click", function() {
        slideImg[imgCounter].classList.remove('visible');
        imgCounter--;

        if (imgCounter < 0) {
            imgCounter = slideImg.length - 1;
        }
        slideImg[imgCounter].classList.add('visible');


    });

});
