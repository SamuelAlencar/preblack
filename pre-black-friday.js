function onlynumber(e) {
	var i = e || window.event,
		o = i.keyCode || i.which;
	o = String.fromCharCode(o);
	var s = /^[0-9.]+$/;
	s.test(o) || (i.returnValue = !1, i.preventDefault && i.preventDefault())
}

$('.x-footer__modal-close ').on('click', function(){
    $('.pre-blackfriday-box-modal').hide()
})

$(document).on("ready", function () {
	$(".pre-blackfriday-faq").on("click", function () {
		$(this).find(".faq-hide").slideToggle(1), $(this).find(".faq-show").slideToggle(1), $(this).find(".texto-faq").slideToggle(), $(this).find("h3").toggleClass("faq-tit-bold")
	}), $(".dropfake").on("click", function () {
		$(".pre-blackfriday-categorias-check").toggleClass("ckeck-active"), $(".dropfake").toggleClass("seta-rotacionada")
	}), $(".cpf").mask("999.999.999-99"), $(".circle-menu-mobile").on("click", function () {
		$("body").addClass("no-scrolling"), $(".x-overlay.js--overlay").addClass("is--active"), $(".menu-responsive").addClass("menu-reponsive-active")
	}), $(".couch-select-catergory__close").on("click", function () {
		$("body").removeClass("no-scrolling"), $(".x-overlay.js--overlay").removeClass("is--active"), $(".menu-responsive").removeClass("menu-reponsive-active")
	}), $(".x-overlay.js--overlay").on("click", function () {
		$("body").removeClass("no-scrolling"), $(".x-overlay.js--overlay").removeClass("is--active"), $(".menu-responsive").removeClass("menu-reponsive-active")
	}), $("#pre-blackfriday-carrossel").slick({
		arrows: !1,
		speed: 300,
		responsive: [{
			breakpoint: 3e3,
			settings: {
				slidesToShow: 4,
				infinite: !1,
				dots: !1,
				centerMode: !0,
				centerPadding: "40px"
			}
		}, {
			breakpoint: 1360,
			settings: {
				slidesToShow: 3,
				infinite: !0,
				dots: !0,
				centerMode: !0
			}
		}, {
			breakpoint: 1064,
			settings: {
				slidesToShow: 2,
				infinite: !0,
				dots: !0,
				centerMode: !0
			}
		}, {
			breakpoint: 666,
			settings: {
				slidesToShow: 1,
				infinite: !0,
				dots: !0,
				centerMode: !0
			}
		}]
	}), $(".pre-blackfriday-categorias").slick({
		arrows: !1,
		speed: 300,
		responsive: [{
			breakpoint: 3e3,
			settings: {
				slidesToShow: 6,
				infinite: !1,
				dots: !1,
				centerMode: !0,
				centerPadding: "40px"
			}
		}, {
			breakpoint: 1360,
			settings: {
				slidesToShow: 6,
				infinite: !1
			}
		}, {
			breakpoint: 1064,
			settings: {
				slidesToShow: 4,
				infinite: !0,
				dots: !0,
				centerMode: !0
			}
		}, {
			breakpoint: 666,
			settings: {
				slidesToShow: 2,
				infinite: !0,
				dots: !0,
				centerMode: !0,
				centerPadding: "40px"
			}
		}, {
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				infinite: !0,
				dots: !0,
				centerMode: !0
			}
		}]
	})
}), $(document).on("scroll", function () {
	var e = $(this).scrollTop();
	e > 200 ? $(".pre-blackfriday-header nav").addClass("fixed-menu") : $(".pre-blackfriday-header nav").removeClass("fixed-menu")
});
 