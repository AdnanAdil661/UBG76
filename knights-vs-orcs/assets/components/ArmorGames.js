
// You can write more code here

/* START OF COMPILED CODE */

class ArmorGames {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__ArmorGames"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.gameObject.setInteractive();
		this.gameObject.on("pointerup", () => {
			window.open("https://armorgames.com/");
		}, this);
		/* END-USER-CTR-CODE */
	}

	/** @returns {ArmorGames} */
	static getComponent(gameObject) {
		return gameObject["__ArmorGames"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
