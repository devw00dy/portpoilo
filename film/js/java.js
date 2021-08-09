function() {
			$(document).on('scroll', function() {
				if ($(window).scrollTop() > 50) {
					$("#header_bg").removeClass("deactive");
					$("#header_bg").addClass("active");
				} else {
					$("#header_bg").removeClass("active");
					$("#header_bg").addClass("deactive");
				}
			}

			$('.mainimg').bxSlider({
				slideWidth: 800, //슬라이드 이미지 너비
				auto: true, //자동실행
				speed: 1000, //이동속도
				pause: 5000, //멈춰있는 시간
				mode: 'fade' //슬라이드 전환효과
			});

			$('.slider').bxSlider({
				slideWidth: 300, //슬라이드 이미지 너비
				auto: true, //자동실행
				speed: 1000, //이동속도
				pause: 5000, //멈춰있는 시간

				maxSlides: 3, //최대 이미지 노출 갯수
				moveSlides: 1, //슬라이드 이동시 갯수
				slideMargin: 10, // 이미지 간격
			});
		});