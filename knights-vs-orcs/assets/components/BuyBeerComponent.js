
// You can write more code here

/* START OF COMPILED CODE */

class BuyBeerComponent {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__BuyBeerComponent"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene = this.gameObject.scene;
		this.create();
		/* END-USER-CTR-CODE */
	}

	/** @returns {BuyBeerComponent} */
	static getComponent(gameObject) {
		return gameObject["__BuyBeerComponent"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.
	create(){
		this.gameObject.setInteractive();
		const buymeabeer_description = this.scene.add.text(this.gameObject.x - 210, this.gameObject.y + 50, "", {});
		buymeabeer_description.setVisible(false);
		buymeabeer_description.text = "If you like the game? You can support me by just buying me a beer!!! It can help me develop more games like this!! :D. Thank you very very very much!!!\n( Note: This will open a new tab. )";
		buymeabeer_description.setStyle({"backgroundColor":"#000000ff","fontSize":"26px"});
		buymeabeer_description.setPadding({"left":10,"top":10,"right":10,"bottom":10});
		buymeabeer_description.setWordWrapWidth(450);
		buymeabeer_description.setAlign("center");
		this.gameObject.setScale(0.5);
		this.gameObject.on('pointerup', () => {
			window.open("https://www.buymeacoffee.com/jadjgd");
		}, this);

		this.gameObject.on('pointerover', () => {
			buymeabeer_description.setVisible(true);
		}, this);
		this.gameObject.on('pointerout', () => {
			buymeabeer_description.setVisible(false);
		}, this);


	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
