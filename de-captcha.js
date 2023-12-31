console.log("deCaptcha loaded");

class DeCaptcha {
	#rootElement;
	
	constructor(anchorElement) {
		const word = "fake soul"

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
		instructions.innerHTML = `Select all images with <strong style="font-size: 22px; display: block">${word}</strong>`
		rootElement.append(instructions)

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
}