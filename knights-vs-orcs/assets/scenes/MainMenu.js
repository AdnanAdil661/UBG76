
// You can write more code here

/* START OF COMPILED CODE */

class MainMenu extends Phaser.Scene {

	constructor() {
		super("MainMenu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mainmenu_bg
		const mainmenu_bg = this.add.image(0, 0, "mainmenu_bg");
		mainmenu_bg.setOrigin(0, 0);

		// play_now
		const play_now = this.add.sprite(990, 695, "play_main_button", 0);

		// credits
		const credits = this.add.sprite(1225, 908, "credits_main_button", 0);

		// endless
		const endless = this.add.sprite(788, 908, "endless_main_button", 0);

		// continue_button
		const continue_button = this.add.sprite(990, 695, "continue_main_button", 0);
		continue_button.visible = false;

		// upgrade_button
		const upgrade_button = this.add.sprite(1225, 695, "upgrade_main_button", 0);
		upgrade_button.visible = false;

		// text
		const text = this.add.text(180, 124, "", {});
		text.visible = false;
		text.text = "New text";
		text.setStyle({"fontFamily":"EnchantedLand"});

		// mainmenu_bg (components)
		new ArmorGames(mainmenu_bg);

		this.play_now = play_now;
		this.credits = credits;
		this.endless = endless;
		this.continue_button = continue_button;
		this.upgrade_button = upgrade_button;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	play_now;
	/** @type {Phaser.GameObjects.Sprite} */
	credits;
	/** @type {Phaser.GameObjects.Sprite} */
	endless;
	/** @type {Phaser.GameObjects.Sprite} */
	continue_button;
	/** @type {Phaser.GameObjects.Sprite} */
	upgrade_button;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		let getFirstVisit = localStorage.getItem("first_visit");
		//localStorage.setItem("first_visit", true); 
		if(!localStorage.hasOwnProperty('first_visit')){
			localStorage.setItem("first_visit", false);
		}
		let getStage = localStorage.getItem("_CURRENT_STAGE");

		// SET CROWNS

		if(!localStorage.hasOwnProperty("crowns")){
			localStorage.setItem("crowns", 0);
		}

		let game = localStorage.getItem("game");

		if(localStorage.hasOwnProperty("game")){
			this.endless.setFrame(0);
			this.endless.setInteractive();
		}else{
			this.endless.setFrame(2);
		}

		this.play_now.setInteractive();
		this.credits.setInteractive();

		//this.endless.setInteractive();

		place = Phaser.Math.Between(1, 4);
		console.log(getFirstVisit);
		if(getFirstVisit == "true"){
			console.log("EXECUTED?");
			this.continue_button.x = 788;
			this.upgrade_button.setVisible(true);			
		}

		this.upgrade_button.setInteractive();
		// KUNG MAG IDOG ANG KUKU E SHOW ANG UPGRADE
		this.upgrade_button.on('pointerup', () => {
			this.scene.start("UpgradeScene");
		}, this);

		this.upgrade_button.on("pointerover", () => {
			this.upgrade_button.setFrame(1);
		}, this);

		this.upgrade_button.on("pointerout", () => {
			this.upgrade_button.setFrame(0);
		}, this);

		if(typeof getStage == "string"){
			this.play_now.removeInteractive();
			this.play_now.setVisible(false);
			this.continue_button.setVisible(true);
			this.continue_button.setInteractive();
		}else{

		}
		this.continue_button.on("pointerup", () => {
			this.continue_button.setFrame(0);
			this.scene.start(getStage);
		}, this);

		this.continue_button.on("pointerover", () => {
			this.continue_button.setFrame(1);
		}, this);

		this.continue_button.on("pointerout", () => {
			this.continue_button.setFrame(0);
		}, this);


		this.play_now.on("pointerup", () => {
			this.play_now.setFrame(0);
			this.scene.start("tutorialScene");
		}, this);

		this.play_now.on("pointerover", () => {
			this.play_now.setFrame(1);
		}, this);

		this.play_now.on("pointerout", () => {
			this.play_now.setFrame(0);
		}, this);

		this.credits.on("pointerup", () => {
			this.credits.setFrame(0);
			this.scene.start("CreditsScene");
		}, this);

		this.credits.on("pointerover", () => {
			this.credits.setFrame(1);
		}, this);

		this.credits.on("pointerout", () => {
			this.credits.setFrame(0);
		}, this);

		this.endless.on("pointerup", () => {
			this.endless.setFrame(0);
			this.scene.start("EndlessScene");
		}, this);

		this.endless.on("pointerover", () => {
			this.endless.setFrame(1);
		}, this);

		this.endless.on("pointerout", () => {
			this.endless.setFrame(0);
		}, this);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
