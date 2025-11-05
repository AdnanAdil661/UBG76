class SpawnText extends Phaser.GameObjects.Text{
    constructor(scene, x, y, text, style){
        super(scene, x, y, text, style);

        scene.add.existing(this);
		scene.tweens.add({
			targets: this,
			y: this.y - 70,
			ease: 'Power1',
			duration: 1500,
			onComplete: () => {
                this.destroy();
			},
			onCompleteScope: this
		});	
    }
}