class Arrow extends Phaser.GameObjects.Sprite{
    constructor(object){
        let x = object.x + 7;
        let y = object.y + 4;

        super(object.scene, x, y, 'arrow');
        new PhysicsComponent(this);
        object.scene.add.existing(this);
        object.scene.physics.world.enableBody(this);
        this.body.velocity.x = 550;
        this.body.setSize(32, 12)
        this.damage = 35;

        let _PRECISION_STATS = 0;
		if(localStorage.getItem("_PRECISION_UPGRADE_STATS") != null){
			_PRECISION_STATS = parseInt(localStorage.getItem("_PRECISION_UPGRADE_STATS"));
			
			if(_PRECISION_STATS != undefined){
				this.damage += _PRECISION_STATS;
			}
		}
    }
}