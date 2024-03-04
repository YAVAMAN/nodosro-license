// Reviews slider
const revSlider = new Swiper('.revs-slider', {
    loop: true,
    spaceBetween: 40,
    slidesPerView: 1,
    navigation: {
        nextEl: '.revs-button-next',
        prevEl: '.revs-button-prev',
    },
});