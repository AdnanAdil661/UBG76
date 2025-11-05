
// You can write more code here

/* START OF COMPILED CODE */

class orc2FAB extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "orc2RUN_sprite", frame ?? 0);

		// this (components)
		new PhysicsComponent(this);
		new EnemyMovement(this);

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.name = "orc2";
		this.health = 200;
		this.gameObject = this;
		this.row = "";
		this.movement();

		this.scene.orc_spawn.play();

		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.once('destroy', ()=>{
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
			let coin = new SpawnCoin(this, scene);
		});			/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	movement(){
		this.e = "";
		this.collision = false;	
		this.velocity = -75;
		this.gameObject.body.setVelocityX(-75);
		this.gameObject.flipX = true;		
		this.gameObject.anims.play('o2_run');
		this.damage = Phaser.Math.Between(19, 35);

		this.on("animationstart", (anim) => {
			if(anim.key == "o2_die"){ this.scene.orc_death.play(); }
		}, this);

		this.on('animationcomplete', (anim) => {
			if(anim.key == "o2_die"){ this.destroy(); }else if(anim.key == "o2_atk"){
				if(this.e.active){
					if(this.e.health >= 0){
						this.e.health -= this.damage;
						this.scene.swordSwing.play();
					}
				}
			}
		}, this);

		this.nextHit = this.scene.time.now;
	}

	o2Collision(knight, enemy){
		this.e = knight;
		enemy.body.setVelocityX(0);
		this.collision = true;
		if(this.nextHit > this.scene.time.now){ return; }
		this.nextHit = this.scene.time.now + 1000;	
		enemy.anims.play("o2_atk");	
	}

	update(){
		if(this.health <= 0) {
			this.anims.play('o2_die', true); 
			this.body.enable = false;
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
		}

		if(this.e.active != true && this.body.enable == true){ this.body.setVelocityX(this.velocity); this.anims.play('o2_run', true); }

		this.collision = false;

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
