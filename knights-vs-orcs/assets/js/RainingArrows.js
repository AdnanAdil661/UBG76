class RainingArrows extends Phaser.GameObjects.Sprite{
    constructor(scene){
        let x = Phaser.Math.Between(300, 1620);
        let y = -50;

        super(scene, x, y, 'arrow');
        new PhysicsComponent(this);
        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        this.setScale(1.5, 1.5);
        this.body.velocity.y = 1250;
        this.body.setSize(32, 12);
        this.damage = 975;
        this.rotation = -80;
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.once('destroy', ()=>{
            this.scene.arrowImpact.play();
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
		});
    }

    update(){
        if(this.y > 1080){ this.destroy(); }
    }
}