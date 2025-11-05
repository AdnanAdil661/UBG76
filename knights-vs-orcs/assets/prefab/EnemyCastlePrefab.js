
// You can write more code here

/* START OF COMPILED CODE */

class EnemyCastlePrefab extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "orc_castle", frame ?? 0);

		this.flipX = true;

		// this (components)
		new PhysicsComponent(this);

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.maxHealth = 1200;
		this.health = 1200;

		this.create();
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	create(){
		if(this.scene.tutorialMode == true){
			this.health = 200;
			this.maxHealth = 200;
		}
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.once('destroy', ()=>{
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
		});
		this.nextShot = this.scene.time.now;
		this.enemy_castle_fire = this.scene.sound.add("enemy_castle_fire");
		this.sndPlay = false;
	}

	castleFire(enemy, row){
		if(this.nextShot > this.scene.time.now){ return; }
		this.nextShot = this.scene.time.now + 1350;
		let arrow = new EnemyCastleArrow(this, enemy);
		this.scene.enemyCastleArrowGroup.add(arrow);
		if(this.enemy_castle_fire.isPlaying == false){
			this.enemy_castle_fire.play();
		}
	}

	percentage(hp, maxhp){
		let hp_left = Math.round(hp / maxhp * 100);
		if(hp_left < 100 && hp_left > 90){
			this.scene.hp_orc_castle.setFrame(9);
		}else if(hp_left < 90 && hp_left > 80){
			this.scene.hp_orc_castle.setFrame(8);
		}else if(hp_left < 80 && hp_left > 70){
			this.scene.hp_orc_castle.setFrame(7);
		}else if(hp_left < 70 && hp_left > 60){
			this.scene.hp_orc_castle.setFrame(6);
		}else if(hp_left < 60 && hp_left > 50){
			this.scene.hp_orc_castle.setFrame(5);
		}else if(hp_left < 50 && hp_left > 40){
			if(this.scene.scene.key == "Stage4Scene1" || this.scene.scene.key == "Stage4Scene2" || this.scene.scene.key == "Stage4Scene3" || this.scene.scene.key == "EndlessScene"){
				if(!this.scene.orc_spawn_snd.isPlaying && this.sndPlay == false){
					this.scene.orc_spawn_snd.play();
					this.sndPlay = true;
				}
			}
			this.setFrame(1);
			this.scene.hp_orc_castle.setFrame(4);
		}else if(hp_left < 40 && hp_left > 30){
			this.scene.hp_orc_castle.setFrame(3);
		}else if(hp_left < 20 && hp_left > 10){
			this.setFrame(2);
			this.scene.hp_orc_castle.setFrame(2);
		}else if(hp_left < 10 && hp_left > 0){
			this.scene.hp_orc_castle.setFrame(1);
		}else if(hp_left <= 0){
			// GAME OVER!
			this.scene.hp_orc_castle.setFrame(0);
		}		
	}

	update(){
		this.scene.wholeKnightGroup.children.each(function (knight) {
			if (Phaser.Math.Distance.Between(this.x, this.y, knight.x, knight.y) < 600) {
				this.castleFire(knight, "row1");
			}
		}, this);

		this.percentage(this.health, this.maxHealth);
	}	
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
