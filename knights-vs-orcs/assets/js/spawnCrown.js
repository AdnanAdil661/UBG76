class spawnCrown extends Phaser.GameObjects.Image{
    constructor(object, scene){
        let x = object.x;
        let y = object.y;

        super(object.scene, x, y, 'crown');
        new PhysicsComponent(this);
        object.scene.add.existing(this);
        object.scene.physics.world.enableBody(this);
        this.method(scene);
    }


    method(scene){
        this.gems_collected = scene.sound.add("gems_collected");
        this.body.setSize(100, 100);
        this.setInteractive();
        
        this.on('pointerdown', () => {
            let crowns = parseInt(scene.crownText.text) + Phaser.Math.Between(165, 525);
            scene.crownText.setText(crowns);
            localStorage.setItem("crowns", crowns);
			let tween = scene.tweens.add({
				targets: this,
				y: 50,
                x: 450,
				ease: 'Power1',
				duration: 1000,
                onComplete: () => {
                    this.gems_collected.play();
                    this.destroy();
                },
                onCompleteScope: this,
			});	            
        });
    }

}