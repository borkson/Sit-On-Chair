document.addEventListener('DOMContentLoaded', function() {

    // ------ SLIDER
    //all variables
    var leftArrow = document.querySelector('.left-arrow');
    var rightArrow = document.querySelector('.right-arrow');
    var imgSlider = document.querySelectorAll('.slide');
    var imgCounter = 0; // counter with actual img index
    imgSlider[0].classList.add('visible');

    //events for arrows
    rightArrow.addEventListener('click', function() {
        //remove class visible with actual img index
        imgSlider[imgCounter].classList.remove('visible');
        //increase actual img index
        imgCounter++;
        if (imgCounter >= imgSlider.length) {
            imgCounter = 0;
        }
        imgSlider[imgCounter].classList.add('visible');
    });

    leftArrow.addEventListener('click', function() {
        imgSlider[imgCounter].classList.remove('visible');
        imgCounter--;
        if (imgCounter < 0) {
            imgCounter = imgSlider.length - 1;
        }
        imgSlider[imgCounter].classList.add('visible');
    });


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
