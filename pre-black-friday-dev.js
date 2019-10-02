$(document).on('ready', function () {
    $('.pre-blackfriday-faq').on('click', function () {
        $(this)
            .find('.faq-hide')
            .slideToggle(1);
        $(this)
            .find('.faq-show')
            .slideToggle(1);
        $(this)
            .find('.texto-faq')
            .slideToggle();
        $(this)
            .find('h3')
            .toggleClass('faq-tit-bold');
    });
    $('.dropfake').on('click', function () {
        $('.pre-blackfriday-categorias-check').toggleClass('ckeck-active');
        $('.dropfake').toggleClass('seta-rotacionada');
    });
    $('.cpf').mask('999.999.999-99');
    $('.circle-menu-mobile').on('click', function () {
        $('body').addClass('no-scrolling');
        $('.x-overlay.js--overlay').addClass('is--active');
        $('.menu-responsive').addClass('menu-reponsive-active');
    });
    $('.couch-select-catergory__close').on('click', function () {
        $('body').removeClass('no-scrolling');
        $('.x-overlay.js--overlay').removeClass('is--active');
        $('.menu-responsive').removeClass('menu-reponsive-active');
    });
    $('.x-overlay.js--overlay').on('click', function () {
        $('body').removeClass('no-scrolling');
        $('.x-overlay.js--overlay').removeClass('is--active');
        $('.menu-responsive').removeClass('menu-reponsive-active');
    });
    $('#pre-blackfriday-carrossel').slick({
        arrows: false,
        speed: 300,
        responsive: [
            {
                breakpoint: 3000,
                settings: {
                    slidesToShow: 4,
                    infinite: false,
                    dots: false,
                    centerMode: true,
                    centerPadding: '40px'
                }
            }, {
                breakpoint: 1360,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true,
                    centerMode: true
                }
            }, {
                breakpoint: 1064,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    dots: true,
                    centerMode: true
                }
            }, {
                breakpoint: 666,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: true,
                    centerMode: true
                }
            }
        ]
    });
    $('.pre-blackfriday-categorias').slick({
        arrows: false,
        speed: 300,
        responsive: [
            {
                breakpoint: 3000,
                settings: {
                    slidesToShow: 6,
                    infinite: false,
                    dots: false,
                    centerMode: true,
                    centerPadding: '40px'
                }
            }, {
                breakpoint: 1360,
                settings: {
                    slidesToShow: 6,
                    infinite: false
                }
            }, {
                breakpoint: 1064,
                settings: {
                    slidesToShow: 4,
                    infinite: true,
                    dots: true,
                    centerMode: true
                }
            }, {
                breakpoint: 666,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    dots: true,
                    centerMode: true,
                    centerPadding: '40px'
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: true,
                    centerMode: true
                }
            }
        ]
    });
})
$(document).on('scroll', function () {
    var distanciaTopo = $(this).scrollTop();
    if (distanciaTopo > 200) {
        $('.pre-blackfriday-header nav').addClass('fixed-menu')
    } else {
        $('.pre-blackfriday-header nav').removeClass('fixed-menu')
    }
})
function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}
function cadastroEmail(e) {
    $('.pre-blackfriday-form').innerHTML('<p>E-mail cadastrado com sucesso</p>');
}
function enviarForm() {
    var nome = $('#nome').val();
    var cpf = $('#cpf').val();
    var email = $('#email').val();
    var categorias = new Array($('input#categoria:checked').each(function categoriasMarcadas(e) {
        var valores = $(this).val();
        // console.log(valores);
    }));
    var receberNovidades = $('#receberNovidades[checked=true]');

    $.ajax({
        url: "http://api.vtex.com/tokstok/dataentities/CL/documents",
        type: "POST",
        data: {"firstName" : '"' + nome + '"' },
        contentType: "application/json",
        success: function (data) {
            console.log(data.serialize());
        },
        error: function (error) {
            console.log("ERRO");
        }
    })

}


