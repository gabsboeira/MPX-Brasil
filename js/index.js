document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuIcon = document.getElementById("menu-icon");
    const menuCollapse = document.getElementById("navbarNavDropdown");

    // Detecta quando o menu está mostrado
    menuCollapse.addEventListener('shown.bs.collapse', function () {
        menuIcon.classList.remove("bi-list");
        menuIcon.classList.add("bi-x");
    });

    // Detecta quando o menu é ocultado
    menuCollapse.addEventListener('hidden.bs.collapse', function () {
        menuIcon.classList.remove("bi-x");
        menuIcon.classList.add("bi-list");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector("#carouselVitrine");
    let indicators = document.querySelectorAll(".carousel-indicators button");
    let slides = document.querySelectorAll("#carouselVitrine .carousel-item");

    carousel.addEventListener("slid.bs.carousel", function () {
        let activeIndex = [...slides].findIndex(slide => slide.classList.contains("active"));
        
        if (activeIndex !== -1) {
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle("active", index === activeIndex);
            });
        }
    });
});

$(document).ready( function ( $ ) {
    $('.slick-servicos').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        dots: false,
		arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/btn-esq.png" alt="Anterior"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/btn-dir.png" alt="Próximo"></button>',

                     
		responsive: [
            {
				breakpoint: 1400,
				settings: {
					slidesToShow: 4,
                    slidesToScroll: 2,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
                    slidesToScroll: 2,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
                    slidesToScroll: 2,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
				}
			}
		]

    });

    $('.slick-noticias').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
		arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/btn-esq.png" alt="Anterior"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/btn-dir.png" alt="Próximo"></button>',
                     
		responsive: [
            {
				breakpoint: 1400,
				settings: {
					slidesToShow: 4,
                    slidesToScroll: 2,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
                    slidesToScroll: 4,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
                    slidesToScroll: 3,
				}
			},
            {
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
                    slidesToScroll: 3,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
				}
			}
		]

    });

    $('.slick-galeria').slick({
        centerMode: true,
        centerPadding: '-100px',
        slidesToShow: 3,        
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/btn-esq.png" alt="Anterior"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/btn-dir.png" alt="Próximo"></button>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            }
        ]
    });
    
});