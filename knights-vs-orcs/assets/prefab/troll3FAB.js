
// You can write more code here

/* START OF COMPILED CODE */

class troll3FAB extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "troll3RUN_sprite", frame ?? 0);

		// this (components)
		new PhysicsComponent(this);
		new EnemyMovement(this);
		new OrcPhysicsComponent(this);

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.name = "troll3";
		this.health = 900;
		this.gameObject = this;
		this.movement();
		this.scene.orclympic.play();
		this.row = "";
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
		this.gameObject.anims.play('t3_run');
		this.damage = Phaser.Math.Between(100, 108);

		this.on("animationstart", (anim) => {
			if(anim.key == "t3_die"){ this.scene.orc_death.play(); }
		}, this);


		this.on('animationcomplete', (anim) => {
			if(anim.key == "t3_die"){ this.destroy(); }else if(anim.key == "t3_atk"){
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

	t3Collision(knight, enemy){
		this.e = knight;
		enemy.body.setVelocityX(0);
		this.collision = true;
		if(this.nextHit > this.scene.time.now){ return; }
		this.nextHit = this.scene.time.now + 1000;
		enemy.anims.play("t3_atk");
	}

	update(){
		if(this.health <= 0) {
			this.anims.play('t3_die', true); 
			this.body.enable = false;
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
		}

		if(this.e.active != true && this.body.enable == true){ this.body.setVelocityX(this.velocity); this.anims.play('t3_run', true); }

		this.collision = false;

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
