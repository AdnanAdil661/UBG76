
// You can write more code here

/* START OF COMPILED CODE */

class CardComponent {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__CardComponent"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene = this.gameObject.scene;

		this.create();
		/* END-USER-CTR-CODE */
	}

	/** @returns {CardComponent} */
	static getComponent(gameObject) {
		return gameObject["__CardComponent"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.
	create(){
		const origx = this.gameObject.x;
		const origy = this.gameObject.y;
		this.gameObject.setInteractive();
		this.clicking = this.scene.sound.add("clicking");
		this.no_money = this.scene.sound.add("no_money");
		this.no_money.setVolume(1.2);
		this.gameObject.on('pointerover', () => {
			var tween = this.scene.tweens.add({
				targets: this.gameObject,
				y: origy - 30,
				scale: 1.3,
				ease: 'Power1',
				duration: 300,
			});	
		}, this);

		this.gameObject.on('pointerout', () => {
			var tween = this.scene.tweens.add({
				targets: this.gameObject,
				y: origy,
				scale: 1,
				ease: 'Power1',
				duration: 300,
			});
		}, this);

		this.gameObject.on('pointerup', () => {
			if(this.clicking.isPlaying == false){
				this.clicking.play();
			}
			let coins = parseInt(this.scene.coinText.text);
			selectedCard = this.gameObject.texture.key;
			if(this.gameObject.isTinted){
				selectedCard = "";
			}
			switch(this.gameObject.texture.key){
				case "spearman_card":
					if(coins < 75){
						selectedCard = "";
						this.noMoney();
					}
					break;
				case "axeman_card":
					if(coins < 120){
						selectedCard = "";
						this.noMoney();
						// POP UP A TEXT
					}
					break;
				case "preeminentman_card":
					if(coins < 250){
						selectedCard = "";
						this.noMoney();
						// POP UP A TEXT
					}
					break;
				case "archer_card":
					if(coins < 200){
						selectedCard = "";
						this.noMoney();
						// POP UP A TEXT
					}
					break;
				case "swordy_card":
					if(coins < 300){
						selectedCard = "";
						this.noMoney();
						// POP UP A TEXT
					}
					break;
				default:
					// nothing to do here
			}

		}, this);

		this.gameObject.on('pointerdown', () => {
			if(this.scene.stepsTut != undefined || this.scene.stepsTut != null){
				this.scene.arrow_t1_1.setVisible(false);
			}

			if(this.scene.tutorialArrows != undefined){
				if(this.scene.tutorialArrows == true){
					this.scene.arrow_t1.setVisible(true);
					this.scene.tutorialArrows = false;
				}
			}
			this.scene.g2.setFillStyle("#cecece", .5);
			this.scene.g2.setVisible(true);
		}, this);
	}

	noMoney(){
		if(!this.no_money.isPlaying){
			this.no_money.play();
			this.scene.coinText.setTint(0xfe0000);
			this.scene.time.addEvent({
				delay: 300,                // ms
				callback: () => {
					this.scene.coinText.clearTint();
				},
				//args: [],
				callbackScope: this.scene,
				loop: false
			});							
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
