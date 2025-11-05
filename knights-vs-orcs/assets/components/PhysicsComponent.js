
// You can write more code here

/* START OF COMPILED CODE */

class PhysicsComponent {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__PhysicsComponent"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		const scene = this.gameObject.scene;

		scene.physics.add.existing(this.gameObject);
		this.gameObject.body.setAllowGravity(false);
		this.gameObject.body.setSize(40, 58);
		this.gameObject.body.setBounce(0);

		/* END-USER-CTR-CODE */
	}

	/** @returns {PhysicsComponent} */
	static getComponent(gameObject) {
		return gameObject["__PhysicsComponent"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
