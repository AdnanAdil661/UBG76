
// You can write more code here

/* START OF COMPILED CODE */

class e1FAB extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "eRUN_sprite", frame ?? 0);

		// this (components)
		new PhysicsComponent(this);

		/* START-USER-CTR-CODE */
		let _PRECISION_STATS;
		this.health = "50";
		this.name ="e1";
		this.row = "";
		this.shooting = false;
		this.scene.elfSpawn.play();
		this.damage = Phaser.Math.Between(5, 25);
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.once('destroy', ()=>{
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
		});
		this.create();
		if(localStorage.getItem("_PRECISION_UPGRADE_STATS") != null){
			_PRECISION_STATS = parseInt(localStorage.getItem("_PRECISION_UPGRADE_STATS"));
			if(_PRECISION_STATS != undefined){
				this.damage = Phaser.Math.Between(5, 25) + _PRECISION_STATS; // damage 14 - 20
			}

		}
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	isShooting(){
		return true;
	}

	fireArrows(enemy, row){
		this.body.setVelocityX(0);
		this.anims.play('e_atk', true);
		if(this.nextShot > this.scene.time.now){ return; }
		this.scene.bowSND.play();
		this.nextShot = this.scene.time.now + 1350;
		let arrow = new Arrow(this);
		this.currentEnemy = enemy;


		this.scene.wholeElfArrowGroup.add(arrow);
	}

	create(){
		const scene = this.scene;
		this.anims.play('e_run');
		this.velocity = 75;
		this.body.setVelocityX(this.velocity);
		this.nextShot = this.scene.time.now;
		this.currentEnemy = "";
		this.on("animationstart", (anim) => {
			if(anim.key == "e_die"){ this.scene.elfDeath.play(); }
		}, this);
		this.on('animationcomplete', (anim) => {
			if(anim.key == "e_die"){ this.destroy(); }
		}, this);
	}

	update(){
		if(this.health <= 0) {
			this.anims.play('e_die', true); 
			this.body.enable = false;
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
		}

		if(!this.currentEnemy.active && this.body.enable == true){
			this.body.setVelocityX(this.velocity); this.anims.play('e_run', true);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
