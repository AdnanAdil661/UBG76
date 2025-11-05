
// You can write more code here

/* START OF COMPILED CODE */

class eFAB extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "e1RUN_sprite", frame ?? 0);

		// this (components)
		new PhysicsComponent(this);

		/* START-USER-CTR-CODE */
		this.name = "e2";
		this.health = "130";
		this.scene.elfDeath.play();
		this.currentAttacking = "";
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.once('destroy', ()=>{
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
			console.log("Game object destroyed!");
		});
		this.create();
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	create(){
		const scene = this.scene;
		this.e = "";
		this.anims.play('e1_run');
		this.velocity = 75;
		this.body.setVelocityX(this.velocity);
		this.collision = false;	

		let _SWORDSMANSHIP_STATS;

		if(localStorage.getItem("_SWORDSMANSHIP_UPGRADE_STATS") != null){
			_SWORDSMANSHIP_STATS = parseInt(localStorage.getItem("_SWORDSMANSHIP_UPGRADE_STATS"));
		}		

		this.damage = Phaser.Math.Between(62, 78) + _SWORDSMANSHIP_STATS;
		this.on("animationstart", (anim) => {
			if(anim.key == "e2_die"){ this.scene.elfDeath.play(); }
		}, this);
		this.on('animationcomplete', (anim) => {
			if(anim.key == "e1_die"){ this.destroy(); }else if(anim.key == "e1_atk"){
				if(this.e.active){
					console.log(this.e.health);
					if(this.e.health >= 0){
						this.e.health -= this.damage;
						this.scene.swordSwing.play();
					}
					//console.log(this.e);
				}				
			}
		}, this);

		this.nextHit = this.scene.time.now;
	}

	e2Collision(knight, enemy){
		this.e = enemy;
		knight.body.setVelocityX(0);
		this.collision = true;
		if(this.nextHit > this.scene.time.now){ return; }
		this.nextHit = this.scene.time.now + 1000;
		knight.anims.play("e1_atk");
	}

	update(){
		if(this.health < 0) { 
			this.body.enable = false;

			this.anims.play('e1_die', false); 
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
		}
		//console.log();
		if(this.e.active != true && this.body.enable == true){ this.body.setVelocityX(this.velocity); this.anims.play('e1_run', true); }
		this.collision = false;
	}	
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
