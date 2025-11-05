
// You can write more code here

/* START OF COMPILED CODE */

class k2FAB extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "k2RUN_sprite", frame ?? 0);

		// this (components)
		new PhysicsComponent(this);

		/* START-USER-CTR-CODE */
		this.create();
		this.name = "k2";
		this.health = 150;
		this.velocity = 75;
		this.damage = Phaser.Math.Between(19, 35);
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.once('destroy', ()=>{
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
		});

		//////////// GET UPGRADE STATS HERE ///////////////////////////////

		// get upgrade vars;
		let _FORTIFY_STATS = 0;
		let _UNENDINGFAITH_STATS = 0;
		let _HEROESCHARGE_STATS = [];
		this.damage = Phaser.Math.Between(24, 37);

		if(localStorage.getItem("_FORTIFICATION_UPGRADE_STATS") != null){
			_FORTIFY_STATS = parseInt(localStorage.getItem("_FORTIFICATION_UPGRADE_STATS"));

			if(_FORTIFY_STATS != undefined){
				this.health += _FORTIFY_STATS;
			}

		}

		if(localStorage.getItem("_UNENDINGFAITH_UPGRADE_STATS") != null){
			_UNENDINGFAITH_STATS = parseInt(localStorage.getItem("_UNENDINGFAITH_UPGRADE_STATS"));
			if(_UNENDINGFAITH_STATS != undefined){
				this.damage = Phaser.Math.Between(24, 37) + _UNENDINGFAITH_STATS; // damage 14 - 20
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

	k2Collision(knight, enemy){
		this.e = enemy;
		knight.body.setVelocityX(0);
		this.collision = true;		
		if(this.nextHit > this.scene.time.now){ return; }
		this.nextHit = this.scene.time.now + 1000;
		knight.anims.play("k2_atk");

	}

	create(){
		const scene = this.scene;
		this.collision = false;
		this.e = "";
		this.anims.play('k2_run');
		this.nextHit = this.scene.time.now;
		this.on("animationstart", (anim) => {
			if(anim.key == "k2_die"){ this.scene.knightDeath.play(); }
		}, this);
		this.on('animationcomplete', (anim) => {
			if(anim.key == "k2_die"){ this.destroy(); }else if(anim.key == "k2_atk"){
					if(this.e.active){
					if(this.e.health >= 0){
						this.e.health -= this.damage;
						this.scene.axeSwing.play();
					}
				}
			}
		}, this);
	}

	update(){
		if(this.health < 0) { 
			this.body.enable = false;

			this.anims.play('k2_die', false); 
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
		}
		if(this.e.active != true && this.body.enable == true){ this.body.setVelocityX(this.velocity); this.anims.play('k2_run', true); }
		this.collision = false;		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
