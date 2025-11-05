
// You can write more code here

/* START OF COMPILED CODE */

class CreditsScene extends Phaser.Scene {

	constructor() {
		super("CreditsScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// credits_scene
		const credits_scene = this.add.image(0, 0, "credits_scene");
		credits_scene.setOrigin(0, 0);

		// home
		const home = this.add.image(1796, 117, "home");

		// buymeabeer
		const buymeabeer = this.add.image(567, 419, "buymeabeer");

		// buymeabeer (components)
		new BuyBeerComponent(buymeabeer);

		this.home = home;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	home;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.cameras.main.fadeIn(1000, 0, 0, 0);
		this.editorCreate();

		this.home.setInteractive();
		this.home.on('pointerup', () => {
			this.scene.start("MainMenu");
		}, this);

		this.input.on('pointerup', function(pointer){
			var touchX = pointer.x;
			var touchY = pointer.y;
			console.log("X: " + touchX + " Y: " + touchY);
			//if (x >= 0.001 && x <= 0.009) {
			// something
			//}
			if(touchX >= 88 && touchX <= 256){
				if(touchY >= 420 && touchY <= 476){
					window.open("https://www.facebook.com/Just-An0ther-disconsolate-Javascript-g4me-developer-107378128468340/");
				}
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
