
// You can write more code here

/* START OF COMPILED CODE */

class CastlePrefab extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "elves_castle", frame ?? 0);

		// this (components)
		new PhysicsComponent(this);

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.maxHealth = 1200;
		this.health = 1200;

		this.body.setSize(1000, 750);
		this.create();

		//this.body.setVelocityX(100);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	create(){
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.once('destroy', ()=>{
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
		});
		this.nextShot = this.scene.time.now;
		this.sndPlay = false;
	}

	castleFire(enemy, row){
		if(this.nextShot > this.scene.time.now){ return; }
		this.nextShot = this.scene.time.now + 750;
		let arrow = new CastleArrow(this, enemy);
		this.scene.castleArrowGroup.add(arrow);
		this.scene.bowSND.play();
	}

	percentage(hp, maxhp){
		let hp_left = Math.round(hp / maxhp * 100);
		if(hp_left < 100 && hp_left > 90){
			this.scene.hp_elven_castle.setFrame(9);
		}else if(hp_left < 90 && hp_left > 80){
			this.scene.hp_elven_castle.setFrame(8);
		}else if(hp_left < 80 && hp_left > 70){
			this.scene.hp_elven_castle.setFrame(7);
		}else if(hp_left < 70 && hp_left > 60){
			this.scene.hp_elven_castle.setFrame(6);
		}else if(hp_left < 60 && hp_left > 50){
			this.scene.hp_elven_castle.setFrame(5);
		}else if(hp_left < 50 && hp_left > 40){
			if(this.scene.scene.key == "Stage4Scene1" || this.scene.scene.key == "Stage4Scene2" || this.scene.scene.key == "Stage4Scene3" || this.scene.scene.key == "EndlessScene"){
				if(!this.scene.heroes_spawn_snd.isPlaying && this.sndPlay == false){
					this.scene.heroes_spawn_snd.play();
					this.sndPlay = true;
				}
			}
			this.setFrame(1);
			this.scene.hp_elven_castle.setFrame(4);
		}else if(hp_left < 40 && hp_left > 30){
			this.scene.hp_elven_castle.setFrame(3);
		}else if(hp_left < 20 && hp_left > 10){
			this.scene.hp_elven_castle.setFrame(2);
			this.setFrame(2);
		}else if(hp_left < 10 && hp_left > 0){
			this.scene.hp_elven_castle.setFrame(1);
		}else if(hp_left <= 0){
			// GAME OVER!
			this.scene.hp_elven_castle.setFrame(0);
		}
	}

	update(){
		this.scene.wholeEnemyGroup.children.each(function (enemy) {
			if (Phaser.Math.Distance.Between(this.x, this.y, enemy.x, enemy.y) < 700) {
				this.castleFire(enemy, "row1");
			}
		}, this);
		this.percentage(this.health, this.maxHealth);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
