console.log("deCaptcha loaded");

class DeCaptcha {
	#rootElement;
	#instructionsElement;
	#imageContainerElement;
	
	constructor(anchorElement) {
		let rootElement = document.createElement("div");
		rootElement.classList.add("deCaptchaRoot");

		let instructions = document.createElement("div");
		instructions.classList.add("deCaptchaInstructions");
		rootElement.append(instructions)
		this.#instructionsElement = instructions;
		this.#populateInstructions();

		let imageContainer = document.createElement("div");
		imageContainer.classList.add("deCaptchaImageContainer");
		rootElement.append(imageContainer)
		this.#imageContainerElement = imageContainer;
		this.#populateImages();

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

	regenerate() {
		this.#populateImages();
		this.#populateInstructions();
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

	#populateInstructions(){
		this.#instructionsElement.innerHTML = `Select all images with <strong style="font-size: 22px; display: block">${this.#getWord()}</strong>`
	}

	#populateImages(){
		this.#imageContainerElement.innerHTML = "";
		
		for(let i = 0; i < 9; i++){
			const imageUri = this.#getImageUri();

			let captchaImage = document.createElement("img");
			captchaImage.src = imageUri;
			captchaImage.draggable = false;
			captchaImage.style.scale = 1;
			captchaImage.classList.add("deCaptchaImage");
			
			captchaImage.onclick = () => {
				const scale = captchaImage.style.scale;
				const target = scale < 1 ? 1 : 0.8;
				captchaImage.animate({scale: target}, {duration: 50, iterations: 1})
						.finished.then(() => {
							captchaImage.style.scale = target
						});
			}

			this.#imageContainerElement.append(captchaImage);
		}
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

	#getImageUri(){
		const imagesUris = [
			"https://thumbnails.pcgamingwiki.com/8/8d/PTower.jpg/300px-PTower.jpg",
			"https://upload.wikimedia.org/wikipedia/en/6/6d/Bethesda_Starfield.jpg",
			"https://m.media-amazon.com/images/M/MV5BMTk4MDM0MDUzM15BMl5BanBnXkFtZTcwOTI4MzU1Mw@@._V1_FMjpg_UX1000_.jpg",
			"https://i.kym-cdn.com/entries/icons/facebook/000/002/284/crab_nicholson.jpg"
		];
		return imagesUris[Math.floor(Math.random() * imagesUris.length)];
	}
}