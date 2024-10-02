$(document).ready(function () {
    const carouselItems = $('.carousel-items');
    const totalItems = $('.product-item').length;
    const itemWidth = $('.product-item').outerWidth(true); // Largeur d'un élément produit avec margin
    let currentPosition = 0;

    // Fonction pour avancer dans le carrousel
    function nextSlide() {
        if (currentPosition > -(itemWidth * (totalItems - 3))) {
            currentPosition -= itemWidth;
            carouselItems.css('transform', `translateX(${currentPosition}px)`);
        }
    }

    // Fonction pour revenir en arrière dans le carrousel
    function prevSlide() {
        if (currentPosition < 0) {
            currentPosition += itemWidth;
            carouselItems.css('transform', `translateX(${currentPosition}px)`);
        }
    }

    // Attacher les événements aux boutons
    $('.next').click(nextSlide);
    $('.prev').click(prevSlide);
});