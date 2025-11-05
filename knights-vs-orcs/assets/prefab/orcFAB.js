
// You can write more code here

/* START OF COMPILED CODE */

class orcFAB extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "orcRUN_sprite", frame ?? 0);

		// this (components)
		new PhysicsComponent(this);
		new EnemyMovement(this);

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.name = "orc1";
		this.health = 100;
		this.gameObject = this;
		this.movement();

		this.scene.orc_spawn.play();

		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.once('destroy', ()=>{
			
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
			let coin = new SpawnCoin(this, scene);
			const chances = Math.floor(Math.random() * 11);
			if(chances >= 7){
				let crown = new spawnCrown(this, scene);
			}
		});	
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	movement(){
		this.e = "";
		this.collision = false;	
		this.velocity = -75;
		this.gameObject.body.setVelocityX(-75);
		this.gameObject.flipX = true;		
		this.gameObject.anims.play('o1_run');
		this.damage = Phaser.Math.Between(14, 20);
		this.on("animationstart", (anim) => {
			if(anim.key == "o1_die"){ this.scene.orc_death.play(); }
		}, this);


		this.on('animationcomplete', (anim) => {
			if(anim.key == "o1_die"){ 

				if(this.scene.spawnedOrcs != undefined){ 
					this.scene.spawnedOrcs = 0; 
				} 
				if(this.scene.firstDeath != undefined){
					if(this.scene.firstDeath == false){
						this.scene.firstDeath = true;
						this.scene.spawnWindow();
					}
				}
				this.destroy(); 

			}else if(anim.key == "o1_atk"){
				if(this.e.active){
					if(this.e.health >= 0){
						this.e.health -= this.damage;
						this.scene.woodSND.play();
					}
				}
			}
		}, this);
		this.nextHit = this.scene.time.now;
	}

	o1Collision(knight, enemy){
		this.e = knight;
		enemy.body.setVelocityX(0);
		this.collision = true;	
		if(this.nextHit > this.scene.time.now){ return; }
		this.nextHit = this.scene.time.now + 1000;	
		enemy.anims.play("o1_atk");
	}

	update(){
		if(this.health <= 0) {
			this.anims.play('o1_die', true); 
			this.body.enable = false;
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
		}

		if(this.e.active != true && this.body.enable == true){ this.body.setVelocityX(this.velocity); this.anims.play('o1_run', true); }

		this.collision = false;

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
