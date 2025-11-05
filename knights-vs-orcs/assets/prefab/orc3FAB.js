
// You can write more code here

/* START OF COMPILED CODE */

class orc3FAB extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "orc3RUN_sprite", frame ?? 0);

		// this (components)
		new PhysicsComponent(this);
		new EnemyMovement(this);

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.name = "orc3";
		this.health = 420;
		this.gameObject = this;
		this.movement();
		this.row = "";

		this.scene.orc_spawn.play();

		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.once('destroy', ()=>{
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
			let coin = new SpawnCoin(this, scene);
		});	
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	movement(){
		this.e = "";
		this.collision = false;	
		this.velocity = -75;
		this.gameObject.body.setVelocityX(-75);
		this.gameObject.flipX = true;		
		this.gameObject.anims.play('o3_run');
		this.damage = Phaser.Math.Between(37, 54); //Phaser.Math.Between(37, 54)

		this.on("animationstart", (anim) => {
			if(anim.key == "o3_die"){ this.scene.orc_death.play(); }
		}, this);

		this.on('animationcomplete', (anim) => {
			if(anim.key == "o3_die"){ this.destroy(); }else if(anim.key == "o3_atk"){
				if(this.e.active){
					if(this.e.health >= 0){
						this.e.health -= this.damage;
						this.scene.axeSwing.play();
					}
				}				
			}
		}, this);
		this.nextHit = this.scene.time.now;
	}

	o3Collision(knight, enemy){
		this.e = knight;
		enemy.body.setVelocityX(0);
		this.collision = true;
		if(this.nextHit > this.scene.time.now){ return; }
		this.nextHit = this.scene.time.now + 1000;	
		enemy.anims.play("o3_atk", true);	
	}

	update(){
		if(this.health <= 0) {
			this.anims.play('o3_die', true); 
			this.body.enable = false;
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
		}

		if(this.e.active != true && this.body.enable == true){ this.body.setVelocityX(this.velocity); this.anims.play('o3_run', true); }

		this.collision = false;

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
