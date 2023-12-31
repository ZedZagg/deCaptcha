console.log("deCaptcha loaded");

class DeCaptcha {
	#rootElement;
	
	constructor(anchorElement) {
		let rootElement = document.createElement("div");
		rootElement.style.minWidth = "240px"
		rootElement.style.maxWidth = "400px"
		rootElement.style.backgroundColor = "rgb(255, 255, 255)"
		rootElement.style.border = "1px solid rgb(204, 204, 204)"
		rootElement.style.boxShadow = "rgba(0, 0, 0, 0.2) 2px 2px 3px"
		rootElement.style.opacity = 0

		let instructions = document.createElement("div");
		instructions.style.height = "66px"
		instructions.style.margin = "7px"
		instructions.style.backgroundColor = "#1a73e8"
		instructions.style.padding = "24px"
		instructions.style.color = "white"
		instructions.style.fontSize = "16px"
		instructions.style.fontFamily = "Roboto,helvetica,arial,sans-serif"
		instructions.innerHTML = `Select all images with <strong style="font-size: 22px; display: block">${this.#getWord()}</strong>`
		rootElement.append(instructions)

		let imageContainer = document.createElement("div");
		imageContainer.style.margin = "5px"
		imageContainer.style.marginTop = "-2px"
		imageContainer.style.lineHeight = "0px"
		rootElement.append(imageContainer)

		for(let i = 0; i < 9; i++){		
			let captchaImage = document.createElement("img");
			captchaImage.style.width = "126px";
			captchaImage.style.height = "126px";
			captchaImage.style.backgroundColor = "grey";
			captchaImage.style.margin = "2px";
			captchaImage.style.display = "inline";
			captchaImage.style.scale = 1;
			imageContainer.append(captchaImage);
			captchaImage.onclick = () => {
				const scale = captchaImage.style.scale;
				const target = scale < 1 ? 1 : 0.8;
				captchaImage.animate({scale: target}, {duration: 50, iterations: 1})
						.finished.then(() => {
							captchaImage.style.scale = target
						});
			}
		}

		anchorElement.append(rootElement);
		this.#rootElement = rootElement;
	}

	show() {
		const currentOpacity = this.#rootElement.style.opacity;
		this.#fadeRoot(currentOpacity, 1);
	}

	hide() {
		const currentOpacity = this.#rootElement.style.opacity;
		this.#fadeRoot(currentOpacity, 0);
	}

	#fadeRoot(startOpacity, endOpacity){
		const rootEl = this.#rootElement;

		const anim = rootEl.animate(
			{opacity: [startOpacity, endOpacity]}, 
			{duration: 200, iterations: 1}
		);

		anim.finished.then(() => {
			rootEl.style.opacity = endOpacity;
		});
	}

	#getWord(){
		const firstWordSet = [
			"Artificial",
			"Fake",
			"Forced",
			"Cringe",
			"Honest",
			"Kino",
			"Ludo",
			"Liminal",
			"Tranny",
			"Goy",
			"Zoomer",
			"Boomer",
			"Weeb",
			"Based",
			"Schizo",
			"Grug"
		];

		const secondWordSet = [
			"Soul",
			"Core",
			"Pilled",
			"Kino",
			"Horny",
			"Fun",
			"Cringe",
			"Reddit",
			"Slop",
			"Nostalgia",
			"Ludo",
			"Humor",
			"Shit",
			"Cunny",
			"FOTM",
			"Jank"
		];

		const first = firstWordSet[Math.floor(Math.random() * firstWordSet.length)];
		const second = secondWordSet[Math.floor(Math.random() * secondWordSet.length)];
		return `${first} ${second}`;
	}
}