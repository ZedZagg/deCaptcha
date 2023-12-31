console.log("deCaptcha loaded");

class DeCaptcha {
	#rootElement;
	
	constructor(anchorElement) {
		let rootElement = document.createElement("div");
		rootElement.style.width = "100px"
		rootElement.style.height = "100px"
		rootElement.style.backgroundColor = "red"
		rootElement.style.opacity = 0

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