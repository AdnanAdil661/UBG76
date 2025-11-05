class EnemyCastleArrow extends Phaser.GameObjects.Sprite{
    constructor(object, knight){
        let x = object.x + 7;
        let y = object.y + 4;

        super(object.scene, x, y, 'boulder');
        new PhysicsComponent(this);
        object.scene.add.existing(this);
        object.scene.physics.world.enableBody(this);
        //this.body.velocity.x = 550;
        this.body.setSize(32, 12);
        let angle = Phaser.Math.Angle.BetweenPoints(this, knight);
        this.rotation = angle;
        object.scene.physics.moveToObject(this, knight, 950);
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.once('destroy', ()=>{
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
		});
        this.maxX = object.x - 700;


        this.on("animationcomplete", (anims) => {
            if(anims.key == "boulder_animation"){
                this.destroy();
            }
        }, this);
    }

    update(){
        if(this.x <= this.maxX){ 
            this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
            this.anims.play("boulder_animation");
        }
    }
    
}