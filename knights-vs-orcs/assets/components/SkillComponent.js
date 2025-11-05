
// You can write more code here

/* START OF COMPILED CODE */

class SkillComponent {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__SkillComponent"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene = this.gameObject.scene;
		this.create();
		/* END-USER-CTR-CODE */
	}

	/** @returns {SkillComponent} */
	static getComponent(gameObject) {
		return gameObject["__SkillComponent"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.
	create(){
		this.gameObject.setInteractive();
		this.r = 30;
		this.scene.loose = this.scene.sound.add('raining_arrows_1');
		this.scene.loose.setVolume(.4);
		this.stillCooldown = false;

		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.gameObject.once('destroy', ()=>{
            this.scene.arrowImpact.play();
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
		});
		this.gameObject.on('pointerup', () => {
			let coins = parseInt(this.scene.coinText.text);
			if(this.gameObject.isTinted || coins < 2500){

			}else{
				this.scene.loose.play();
				this.stillCooldown = true;
				let t = coins - 2500;
				this.scene.coinText.setText(t);
				this.scene.loose.once('complete', function(music){
					if(this.gameObject.texture.key == "raining_arrows"){
						for(let i = 0; i < this.r; i++){
							this.shootSomeDamnArrows(i);
						}
					}
				}, this);
				this.gameObject.setTint(0x333231);
				this.scene.time.addEvent({
					delay: 100000,
					callback: () => {
						this.gameObject.clearTint();
						this.stillCooldown = false;
					},
					//args: [],
					callbackScope: this,
					loop: false
				});	
			}
		}, this);
		this.raining_arrows = false;
		this.raining_arrows_1 = false;
		this.raining_arrows_2 = false;
		this.raining_arrows_3 = false;
		this.raining_arrows_4 = false;
		this.raining_arrows_5 = false;
		this.raining_arrows_6 = false;
		this.raining_arrows_7 = false;
	}

	shootSomeDamnArrows(i){
		this.raining_arrows = true;
		this.raining_arrows_1 = true;
		this.raining_arrows_2 = true;
		this.raining_arrows_3 = true;
		this.raining_arrows_4 = true;
		this.raining_arrows_5 = true;
		this.raining_arrows_6 = true;
		this.raining_arrows_7 = true;
		this.scene.time.addEvent({
			delay: 10000,
			callback: () => {
				this.raining_arrows = false;
				this.raining_arrows_1 = false;
				this.raining_arrows_2 = false;
				this.raining_arrows_3 = false;
				this.raining_arrows_4 = false;
				this.raining_arrows_5 = false;
				this.raining_arrows_6 = false;
				this.raining_arrows_7 = false;
			},
			//args: [],
			callbackScope: this,	
			loop: false
		});	
		this.nextShot = this.scene.time.now;
		this.nextShot1 = this.scene.time.now;
		this.nextShot2 = this.scene.time.now;
		this.nextShot3 = this.scene.time.now;
		this.nextShot4 = this.scene.time.now;
		this.nextShot5 = this.scene.time.now;
		this.nextShot6 = this.scene.time.now;
		this.nextShot7 = this.scene.time.now;
	}

	update(){
		let coin = parseInt(this.scene.coinText.text);
		if(coin != undefined){
			if(coin >= 2500 && this.stillCooldown == false){
				this.gameObject.clearTint();
			}else{
				this.gameObject.setTint("0x333231");
			}
		}
		if(this.raining_arrows == true){
			if(this.nextShot > this.scene.time.now){ return; }
			this.nextShot = this.scene.time.now + Phaser.Math.Between(200, 500);
			let arrow = new RainingArrows(this.scene);
			this.scene.castleArrowGroup.add(arrow);
		}
		if(this.raining_arrows_1 == true){
			if(this.nextShot1 > this.scene.time.now){ return; }
			this.nextShot1 = this.scene.time.now + Phaser.Math.Between(200, 1000);
			let arrow = new RainingArrows(this.scene);
			this.scene.castleArrowGroup.add(arrow);
		}
		if(this.raining_arrows_2 == true){
			if(this.nextShot2 > this.scene.time.now){ return; }
			this.nextShot2 = this.scene.time.now + Phaser.Math.Between(200, 1500);
			let arrow = new RainingArrows(this.scene);
			this.scene.castleArrowGroup.add(arrow);
		}
		if(this.raining_arrows_3 == true){
			if(this.nextShot3 > this.scene.time.now){ return; }
			this.nextShot3 = this.scene.time.now + Phaser.Math.Between(200, 1000);
			let arrow = new RainingArrows(this.scene);
			this.scene.castleArrowGroup.add(arrow);
		}
		if(this.raining_arrows_4 == true){
			if(this.nextShot4 > this.scene.time.now){ return; }
			this.nextShot4 = this.scene.time.now + Phaser.Math.Between(200, 1000);
			let arrow = new RainingArrows(this.scene);
			this.scene.castleArrowGroup.add(arrow);
		}
		if(this.raining_arrows_5 == true){
			if(this.nextShot5 > this.scene.time.now){ return; }
			this.nextShot5 = this.scene.time.now + Phaser.Math.Between(200, 500);
			let arrow = new RainingArrows(this.scene);
			this.scene.castleArrowGroup.add(arrow);
		}
		if(this.raining_arrows_6 == true){
			if(this.nextShot6 > this.scene.time.now){ return; }
			this.nextShot6 = this.scene.time.now + Phaser.Math.Between(200, 1000);
			let arrow = new RainingArrows(this.scene);
			this.scene.castleArrowGroup.add(arrow);
		}
		if(this.raining_arrows_7 == true){
			if(this.nextShot7 > this.scene.time.now){ return; }
			this.nextShot7 = this.scene.time.now + Phaser.Math.Between(200, 500);
			let arrow = new RainingArrows(this.scene);
			this.scene.castleArrowGroup.add(arrow);
		}	
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
