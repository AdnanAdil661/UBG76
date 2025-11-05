
// You can write more code here

/* START OF COMPILED CODE */

class OrcPhysicsComponent {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__OrcPhysicsComponent"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.gameObject.body.setSize(40, 58);
		this.gameObject.body.offset.x -= 5;
		this.gameObject.body.offset.y += 5;
		/* END-USER-CTR-CODE */
	}

	/** @returns {OrcPhysicsComponent} */
	static getComponent(gameObject) {
		return gameObject["__OrcPhysicsComponent"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
