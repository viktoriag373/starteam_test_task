'use strict'
window.onload = function () {
	function initializeClock(timeoutSec) {
		let remainTime = timeoutSec;
		let hoursElements = document.querySelectorAll(".countdown .hours");
		let minutesElements = document.querySelectorAll(".countdown .minutes");
		let secondsElements = document.querySelectorAll(".countdown .seconds");

		function updateClock() {
			if (remainTime < 0) {
				remainTime = timeoutSec
			}

			let remainSeconds = Math.floor(remainTime % 60);
			let remainMinutes = Math.floor((remainTime / 60) % 60);
			let remainHours = Math.floor((remainTime / (60 * 60)) % 24);

			for (let i = 0; i < hoursElements.length; i++) {
				hoursElements[i].innerHTML = ("0" + remainHours).slice(-2);
			}
			for (let i = 0; i < minutesElements.length; i++) {
				minutesElements[i].innerHTML = ("0" + remainMinutes).slice(-2);
			}
			for (let i = 0; i < secondsElements.length; i++) {
				secondsElements[i].innerHTML = ("0" + remainSeconds).slice(-2);
			}

			remainTime--;
		}
		updateClock();
		setInterval(updateClock, 1000);
	}

	initializeClock(2*60*60);
}