class CastleArrow extends Phaser.GameObjects.Sprite{
    constructor(object, enemy){
        let x = object.x + 7;
        let y = object.y + 4;

        super(object.scene, x, y, 'arrow');
        
        new PhysicsComponent(this);
        object.scene.add.existing(this);
        object.scene.physics.world.enableBody(this);
        //this.body.velocity.x = 550;
        this.body.setSize(32, 12);
        let angle = Phaser.Math.Angle.BetweenPoints(this, enemy);
        this.rotation = angle;
        object.scene.physics.moveToObject(this, enemy, 950);
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.once('destroy', ()=>{
            this.scene.arrowImpact.play();
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
		});
        this.maxX = object.x + 700;
    }

    update(){
        if(this.x >= this.maxX){ this.destroy(); }       
    }
}