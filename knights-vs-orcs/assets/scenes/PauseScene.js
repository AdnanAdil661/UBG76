
// You can write more code here

/* START OF COMPILED CODE */

class PauseScene extends Phaser.Scene {

	constructor() {
		super("PauseScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// pausewindow
		this.add.image(956, 541, "pausewindow");

		// sound_sprite0
		const sound_sprite0 = this.add.image(951, 263, "sound_sprite", 0);

		// resume_button_main0
		const resume_button_main0 = this.add.sprite(956, 445, "resume_button_main", 0);

		// restart_button_main0
		const restart_button_main0 = this.add.sprite(956, 641, "restart_button_main", 0);

		// exit_button_main0
		const exit_button_main0 = this.add.sprite(956, 838, "exit_button_main", 0);

		this.sound_sprite0 = sound_sprite0;
		this.resume_button_main0 = resume_button_main0;
		this.restart_button_main0 = restart_button_main0;
		this.exit_button_main0 = exit_button_main0;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	sound_sprite0;
	/** @type {Phaser.GameObjects.Sprite} */
	resume_button_main0;
	/** @type {Phaser.GameObjects.Sprite} */
	restart_button_main0;
	/** @type {Phaser.GameObjects.Sprite} */
	exit_button_main0;

	/* START-USER-CODE */

	// Write your code here


	create(data) {

		this.editorCreate();
		this.scene.bringToTop();
		this.restart_button_main0.setInteractive();
		this.resume_button_main0.setInteractive();
		this.exit_button_main0.setInteractive();

		this.resume_button_main0.on('pointerup', () => {
			data.scene.scene.battle_music.resume();
			if(data.scene.scene.loose != undefined){
				data.scene.scene.loose.resume();
			}
			
			this.scene.resume(data.sceneName);
			this.scene.stop();
		}, this);

		this.resume_button_main0.on('pointerover', () => {
			this.resume_button_main0.setFrame(1);
		}, this);

		this.resume_button_main0.on('pointerout', () => {
			this.resume_button_main0.setFrame(0);
		}, this);

		this.restart_button_main0.on('pointerup', () => {
			data.scene.restart();
			this.scene.stop();
		}, this);

		this.restart_button_main0.on('pointerover', () => {
			this.restart_button_main0.setFrame(1);
		}, this);

		this.restart_button_main0.on('pointerout', () => {
			this.restart_button_main0.setFrame(0);
		}, this);

		this.exit_button_main0.on('pointerup', () => {
			data.scene.start("MainMenu");		
			data.scene.scene.battle_music.stop();
			this.scene.stop();
		}, this);

		this.exit_button_main0.on('pointerover', () => {
			this.exit_button_main0.setFrame(1);
		}, this);

		this.exit_button_main0.on('pointerout', () => {
			this.exit_button_main0.setFrame(0);
		}, this);

		// CHECK SOUND
		let sndCheck = localStorage.getItem("sound");
		if(localStorage.hasOwnProperty("sound") == false){
			localStorage.setItem("sound", false);
			sndCheck = localStorage.getItem("sound");
		}

		if(sndCheck == "false"){
			this.sound_sprite0.setFrame(0);
			data.scene.manager.game.sound.setMute(false);
		}else{
			this.sound_sprite0.setFrame(1);
			data.scene.manager.game.sound.setMute(true);
		}

		this.sound_sprite0.setInteractive();
		this.sound_sprite0.on("pointerup", () => {
			if(this.sound_sprite0.frame.name == 0){
				// MUTE
				data.scene.manager.game.sound.setMute(true);
				localStorage.setItem("sound", true);
				this.sound_sprite0.setFrame(1);
			}else{
				// UNMUTE
				data.scene.manager.game.sound.setMute(false);
				localStorage.setItem("sound", false);
				this.sound_sprite0.setFrame(0);
			}
		}, this);
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
