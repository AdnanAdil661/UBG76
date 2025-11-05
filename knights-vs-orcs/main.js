
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1920,
		height: 1080,
		type: Phaser.AUTO,
		backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		input :{
			activePointers: 3,
		},
		physics: {
			default: 'arcade',
			arcade: {
				gravity: { y: 0 },
				debug: false
			}
		},

	});

	game.scene.add("Boot", Boot, true);

});

class Boot extends Phaser.Scene {
	constructor(){
		super({
			pack: {
				files: [
					{
						type: "image",
						key: "loading",
						url: "./assets/loading.png"
					}
				]
			}			
		});
	}
	
	preload() {
		this.add.image(0, 0, 'loading').setOrigin(0);
		this.load.pack("pack", "assets/asset-pack.json");
	}

	create() {
		this.scene.start("MainMenu");
	}

}