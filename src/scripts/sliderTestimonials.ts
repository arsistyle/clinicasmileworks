import Swiper from "swiper"

import { Autoplay, Pagination } from "swiper/modules"

export const initSliderTestimonials = () => {
	window.addEventListener("load", () => {
		// eslint-disable-next-line unused-imports/no-unused-vars
		const swiper = new Swiper(".swiper", {
			modules: [Pagination, Autoplay],
			slidesPerView: 1,
			autoplay: {
				pauseOnMouseEnter: true,
				delay: 6000,
			},
			pagination: {
				el: ".swiper-pagination",
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			loop: true,
		})
	})
}
