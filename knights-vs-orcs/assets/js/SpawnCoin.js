class SpawnCoin extends Phaser.GameObjects.Image{
    constructor(object, scene){
        let x = object.x;
        let y = object.y;

        super(object.scene, x, y, 'coin');
        new PhysicsComponent(this);
        object.scene.add.existing(this);
        object.scene.physics.world.enableBody(this);
        this.method(scene);
    }

    method(scene){
        this.collect = scene.sound.add("collect");
        this.body.setSize(100, 100);
        this.coin = scene.sound.add("coins_collected");
        this.setInteractive();
        this.on('pointerdown', () => {
            let coins = parseInt(scene.coinText.text) + 200;
            this.collect.play();
            scene.coinText.setText(coins);
			let tween = scene.tweens.add({
				targets: this,
				y: 50,
                x: 50,
				ease: 'Power1',
				duration: 1000,
                onComplete: () => {
                    this.coin.play();
                    this.destroy();
                },
                onCompleteScope: this,
			});	            
        });
    }

}