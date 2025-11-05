
// You can write more code here

/* START OF COMPILED CODE */

class k3FAB extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "k3RUN_sprite", frame ?? 0);

		// this (components)
		new PhysicsComponent(this);

		/* START-USER-CTR-CODE */
		this.name = "k3";
		this.health = 350;
		this.damage = Phaser.Math.Between(47, 54);
		this.velocity = 75;

		this.currentAttacking = "";
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.once('destroy', ()=>{
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
		});
		this.create();

		//////////// GET UPGRADE STATS HERE ///////////////////////////////

		// get upgrade vars;
		let _FORTIFY_STATS = 0;
		let _UNENDINGFAITH_STATS = 0;
		let _HEROESCHARGE_STATS = [];

		if(localStorage.getItem("_FORTIFICATION_UPGRADE_STATS") != null){
			_FORTIFY_STATS = parseInt(localStorage.getItem("_FORTIFICATION_UPGRADE_STATS"));

			if(_FORTIFY_STATS != undefined){
				this.health += _FORTIFY_STATS;
			}

		}

		if(localStorage.getItem("_UNENDINGFAITH_UPGRADE_STATS") != null){
			_UNENDINGFAITH_STATS = parseInt(localStorage.getItem("_UNENDINGFAITH_UPGRADE_STATS"));
			if(_UNENDINGFAITH_STATS != undefined){
				this.damage = Phaser.Math.Between(47, 54) + _UNENDINGFAITH_STATS; // damage 14 - 20
			}

		}

		if(localStorage.getItem("_HEROESCHARGE_UPGRADE_STATS") != null){
			_HEROESCHARGE_STATS = localStorage.getItem("_HEROESCHARGE_UPGRADE_STATS").split("-");
			if(_HEROESCHARGE_STATS[0] != undefined && _HEROESCHARGE_STATS[1] != undefined){
				this.health += parseInt(_HEROESCHARGE_STATS[1]);
				this.velocity += parseInt(_HEROESCHARGE_STATS[0]);				
			}
		}

		/////////////////////////////////////////////////////////////////
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	create(){
		const scene = this.scene;
		this.e = "";
		this.collision = false;			

		this.anims.play('k3_run');

		this.body.setVelocityX(this.velocity);
		this.snd = this.scene.sound.add('sword');
		this.snd.setVolume(0.3);
		this.body.setVelocityX(this.velocity);
		this.on("animationstart", (anim) => {
			if(anim.key == "k3_die"){ this.scene.knightDeath.play(); }
		}, this);
		this.on('animationcomplete', (anim) => {
			if(anim.key == "k3_die"){ this.destroy(); }else if(anim.key == "k3_atk"){
				if(this.e.active){
					if(this.e.health >= 0){
						this.e.health -= this.damage;
						this.snd.play();
					}
				}
			}
		}, this);

		this.nextHit = this.scene.time.now;
	}

	k3Collision(knight, enemy){
		this.e = enemy;
		knight.body.setVelocityX(0);
		this.collision = true;
		if(this.nextHit > this.scene.time.now){ return; }
		this.nextHit = this.scene.time.now + 1000;		
		knight.anims.play("k3_atk");

	}

	update(){
		if(this.health < 0) { 
			this.body.enable = false;

			this.anims.play('k3_die', false); 
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
		}
		if(this.e.active != true && this.body.enable == true){ this.body.setVelocityX(this.velocity); this.anims.play('k3_run', true); }
		this.collision = false;
	}	

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
