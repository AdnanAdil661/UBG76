
// You can write more code here

/* START OF COMPILED CODE */

class EnemyMovement {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__EnemyMovement"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene = this.gameObject.scene;
		this.create();
		// CREATE UPDATE
		/* END-USER-CTR-CODE */
	}

	/** @returns {EnemyMovement} */
	static getComponent(gameObject) {
		return gameObject["__EnemyMovement"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;

	/* START-USER-CODE */

	create(){
		//this.gameObject.body.setVelocityX(-150);
		//this.gameObject.flipX = true;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
