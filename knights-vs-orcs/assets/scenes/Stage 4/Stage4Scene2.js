
// You can write more code here

/* START OF COMPILED CODE */

class Stage4Scene2 extends Phaser.Scene {

	constructor() {
		super("Stage4Scene2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg5
		const bg5 = this.add.image(0, 0, "bg5");
		bg5.setOrigin(0, 0);

		// elves_castle0
		const elves_castle0 = new CastlePrefab(this, -33, 513);
		this.add.existing(elves_castle0);

		// orc_castle0
		const orc_castle0 = new EnemyCastlePrefab(this, 1904, 513);
		this.add.existing(orc_castle0);

		// hp_elven_castle
		const hp_elven_castle = this.add.sprite(200, 221, "hp", 10);

		// hp_orc_castle
		const hp_orc_castle = this.add.sprite(1738, 221, "hp", 10);

		// crown_ui
		this.add.image(597, 70, "crown_ui");

		// coin_ui
		this.add.image(200, 70, "coin_ui");

		// settings_icon
		const settings_icon = this.add.image(1863, 60, "settings_icon");

		// spearman_card
		const spearman_card = this.add.image(459, 995, "spearman_card");

		// axeman_card
		const axeman_card = this.add.image(663, 995, "axeman_card");

		// coinText
		const coinText = this.add.text(341, 40, "", {rtl: true});
		coinText.text = "0\n";
		coinText.setStyle({"align":"right","fontFamily":"EnchantedLand","fontSize":"55px"});

		// crownText
		const crownText = this.add.text(732, 40, "", {rtl: true});
		crownText.text = "0\n";
		crownText.setStyle({"align":"right","fontFamily":"EnchantedLand","fontSize":"55px"});

		// hightlight
		const hightlight = this.add.rectangle(1192, 894, 130, 108);
		hightlight.visible = false;
		hightlight.isFilled = true;
		hightlight.fillColor = 15027761;

		// preeminentman_card
		const preeminentman_card = this.add.image(883, 995, "preeminentman_card");

		// archer_card
		const archer_card = this.add.image(1103, 995, "archer_card");

		// swordy_card
		const swordy_card = this.add.image(1332, 995, "swordy_card");

		// raining_arrows
		const raining_arrows = this.add.image(876, 92, "raining_arrows");
		raining_arrows.scaleX = 0.7;
		raining_arrows.scaleY = 0.7;

		// buymeabeer
		const buymeabeer = this.add.image(1667, 71, "buymeabeer");

		// elves_castle0 (components)
		new PhysicsComponent(elves_castle0);

		// orc_castle0 (components)
		new PhysicsComponent(orc_castle0);

		// spearman_card (components)
		new CardComponent(spearman_card);

		// axeman_card (components)
		new CardComponent(axeman_card);

		// preeminentman_card (components)
		new CardComponent(preeminentman_card);

		// archer_card (components)
		new CardComponent(archer_card);

		// swordy_card (components)
		new CardComponent(swordy_card);

		// raining_arrows (components)
		new SkillComponent(raining_arrows);

		// buymeabeer (components)
		new BuyBeerComponent(buymeabeer);

		this.elves_castle0 = elves_castle0;
		this.orc_castle0 = orc_castle0;
		this.hp_elven_castle = hp_elven_castle;
		this.hp_orc_castle = hp_orc_castle;
		this.settings_icon = settings_icon;
		this.spearman_card = spearman_card;
		this.axeman_card = axeman_card;
		this.coinText = coinText;
		this.crownText = crownText;
		this.hightlight = hightlight;
		this.preeminentman_card = preeminentman_card;
		this.archer_card = archer_card;
		this.swordy_card = swordy_card;
		this.raining_arrows = raining_arrows;

		this.events.emit("scene-awake");
	}

	/** @type {CastlePrefab} */
	elves_castle0;
	/** @type {EnemyCastlePrefab} */
	orc_castle0;
	/** @type {Phaser.GameObjects.Sprite} */
	hp_elven_castle;
	/** @type {Phaser.GameObjects.Sprite} */
	hp_orc_castle;
	/** @type {Phaser.GameObjects.Image} */
	settings_icon;
	/** @type {Phaser.GameObjects.Image} */
	spearman_card;
	/** @type {Phaser.GameObjects.Image} */
	axeman_card;
	/** @type {Phaser.GameObjects.Text} */
	coinText;
	/** @type {Phaser.GameObjects.Text} */
	crownText;
	/** @type {Phaser.GameObjects.Rectangle} */
	hightlight;
	/** @type {Phaser.GameObjects.Image} */
	preeminentman_card;
	/** @type {Phaser.GameObjects.Image} */
	archer_card;
	/** @type {Phaser.GameObjects.Image} */
	swordy_card;
	/** @type {Phaser.GameObjects.Image} */
	raining_arrows;

	/* START-USER-CODE */

	// Write your code here

	create() {
		// SET CURRENT STAGE
		localStorage.setItem("_CURRENT_STAGE", "Stage4Scene2");
		//data.scene.manager.game.sound.setMute(false);
		// SET MUTE
		if(localStorage.hasOwnProperty("sound")){
			let getSND = localStorage.getItem("sound");
			if(getSND == "false"){
				this.sound.setMute(false);
			}else{
				this.sound.setMute(true);
			}
		}
		
		// SOUNDS
		this.woodSND = this.sound.add('wood');
		this.woodSND.setVolume(0.7);

		this.spearSwing = this.sound.add("spear");
		this.spearSwing.setVolume(0.3);

		this.axeSwing = this.sound.add('axe');
		this.axeSwing.setVolume(0.3);	

		this.swordSwing = this.sound.add('sword');
		this.swordSwing.setVolume(0.3);

		this.bowSND = this.sound.add('bow');
		this.bowSND.setVolume(0.3);

		this.arrowImpact = this.sound.add("arrow_impact");
		this.arrowImpact.setVolume(0.4);

		this.knightDeath = this.sound.add("death");
		this.knightDeath.setVolume(0.4);

		this.k1Spawn = this.sound.add("knightspawn");
		this.k1Spawn.setVolume(0.3);

		this.elfSpawn = this.sound.add("elfspawn");
		this.elfSpawn.setVolume(0.3);

		this.elfDeath = this.sound.add("elfdeath");
		this.elfDeath.setVolume(0.3);

		this.orc_death = this.sound.add("orc_death");
		this.orc_death.setVolume(0.3);

		this.orc_spawn = this.sound.add("orc_spawn");
		this.orc_spawn.setVolume(0.3);

		this.orclympic = this.sound.add('orclympic_spawn');
		this.orclympic.setVolume(0.3);

		this.battle_win = this.sound.add("battle_win");
		//this.battle_music.setVolume(0.3);

		this.battle_lose = this.sound.add("battle_lose");
		this.battle_lose.setVolume(0.5);

		this.battle_music = this.sound.add("battle_music");
		this.battle_music.setVolume(0.3);
		this.battle_music.setLoop(true);
		this.battle_music.play();

		this.editorCreate();

		// PUT START UP CURRENCY!
		this.coinText.setText(3000);

		// GET VALUE OF CROWS
		let crowns = parseInt(localStorage.getItem("crowns"));

		if(isNaN(crowns) || crowns == undefined || crowns == null){
			localStorage.setItem("crowns", "0");
		}else{
			// RE-FETCH
			crowns = parseInt(localStorage.getItem("crowns"));
		}


		// SET TEXT FOR CROWNS
		this.crownText.setText(crowns);
		// rectangle
		const rectangle = this.add.rectangle(1019, 635, 1800, 900);
		rectangle.visible = false;
		rectangle.isFilled = true;

		this.input.topOnly = false;
		this.g2 = this.add.grid(955, 635, 1170, 430, 130, 108);
		//g2.setAlpha(.5); //alpha set
		this.g2.setInteractive();
		this.cellWidth = 130;
		this.cellHeight = 108;
		this.cW = this.cellWidth / 2;
		this.cH = this.cellHeight / 2;
		this.offset = this.g2.getTopLeft();

		this.add.text(100, 100, '200', { fontFamily: 'EnchantedLand' });
		//this.cointText.style.rtl = true;

		this.input.on('pointerup', () => {
			this.hightlight.setVisible(false);
			this.selectedCard = "";
		}, this);

		this.k1Spawn = this.sound.add("knightspawn");
		this.k1Spawn.setVolume(0.3);

		this.g2.on("pointermove", (pointer, localX, localY) => {
				if(selectedCard.length != 0){
					this.hightlight.setVisible(true);
					const x = Math.floor(localX / this.cellWidth);
					const y = Math.floor(localY / this.cellHeight);
					const i = y * 9 + x;
					let xcal = x * this.cellWidth + this.cW + this.offset.x;
					let ycal = y * this.cellHeight + this.cH + this.offset.y;		
					this.hightlight.x = xcal;
					this.hightlight.y = ycal
					if(x < 4){
						this.hightlight.fillColor = 5030963;
					}else{
						this.hightlight.fillColor = 15027761;
					}
				}else{
					this.hightlight.setVisible(false);
				}
		}, this);

		this.g2.on('pointerup', (pointer, localX, localY) => {
			this.g2.setFillStyle();
			this.g2.setVisible(false);

			this.hightlight.setVisible(false);
			const x = Math.floor(localX / this.cellWidth);
			const y = Math.floor(localY / this.cellHeight);
			const i = y * 9 + x;
			let xcal = x * this.cellWidth + this.cW + this.offset.x;
			let ycal = y * this.cellHeight + this.cH + this.offset.y;

			let knightY = 8;
			let elfY = 19;
			let elf1Y = 21;

			if(x > 4){ selectedCard = "";}
			if (x < 4 && selectedCard.length != 0) {
				//let f = new k1FAB(this, xcal, ycal);
				let spawn;
				let coins = parseInt(this.coinText.text);
				switch (selectedCard) {
					case "spearman_card":
						ycal = y * this.cellHeight + this.cH + this.offset.y - knightY;
						spawn = new k1FAB(this, xcal, ycal);
						coins -= 75;
						this.k1Spawn.play();
						new SpawnText(this, this.spearman_card.x - 85, this.spearman_card.y - 80, "Cooldown....", {"align":"right","fontFamily":"EnchantedLand","fontSize":"55px"})
						this.spearman_card.setTint(0x333231);
						this.time.addEvent({
							delay: 2000,
							callback: () => {
								this.spearman_card.clearTint();
							},
							//args: [],
							callbackScope: this,
							loop: false
						});						
						break;
					case "axeman_card":
						ycal = y * this.cellHeight + this.cH + this.offset.y - knightY;
						spawn = new k2FAB(this, xcal, ycal);
						coins -= 120;
						this.k1Spawn.play();
						new SpawnText(this, this.axeman_card.x - 85, this.axeman_card.y - 80, "Cooldown....", {"align":"right","fontFamily":"EnchantedLand","fontSize":"55px"})
						this.axeman_card.setTint(0x333231);
						this.time.addEvent({
							delay: 2500,
							callback: () => {
								this.axeman_card.clearTint();
							},
							//args: [],
							callbackScope: this,
							loop: false
						});						
						break;
					case "preeminentman_card":
						ycal = y * this.cellHeight + this.cH + this.offset.y - knightY;
						spawn = new k3FAB(this, xcal, ycal);
						coins -= 250;
						this.k1Spawn.play();
						new SpawnText(this, this.preeminentman_card.x - 85, this.preeminentman_card.y - 80, "Cooldown....", {"align":"right","fontFamily":"EnchantedLand","fontSize":"55px"})
						this.preeminentman_card.setTint(0x333231);
						this.time.addEvent({
							delay: 2500,
							callback: () => {
								this.preeminentman_card.clearTint();
							},
							//args: [],
							callbackScope: this,
							loop: false
						});		
						break;
					case "archer_card":
						ycal = y * this.cellHeight + this.cH + this.offset.y - elfY;
						spawn = new e1FAB(this, xcal, ycal);
						coins -= 200;
						if (y == 0) {
							spawn.row = "row1";
						} else if (y == 1) {
							spawn.row = "row2";
						} else if (y == 2) {
							spawn.row = "row3";
						} else if (y == 3) {
							spawn.row = "row4";
						}
						new SpawnText(this, this.archer_card.x - 85, this.archer_card.y - 80, "Cooldown....", {"align":"right","fontFamily":"EnchantedLand","fontSize":"55px"})
						this.archer_card.setTint(0x333231);
						this.time.addEvent({
							delay: 2000,
							callback: () => {
								this.archer_card.clearTint();
							},
							//args: [],
							callbackScope: this,
							loop: false
						});	
						break;
					case "swordy_card":
						ycal = y * this.cellHeight + this.cH + this.offset.y - elf1Y;
						spawn = new eFAB(this, xcal, ycal);
						coins -= 300;
						new SpawnText(this, this.swordy_card.x - 85, this.swordy_card.y - 80, "Cooldown....", {"align":"right","fontFamily":"EnchantedLand","fontSize":"55px"})
						this.swordy_card.setTint(0x333231);
						this.time.addEvent({
							delay: 2000,
							callback: () => {
								this.swordy_card.clearTint();
							},
							//args: [],
							callbackScope: this,
							loop: false
						});	
						break;
					default:
					// nothind to do here
				}
				this.coinText.setText(coins);
				this.add.existing(spawn);
				if (y == 0) {
					this.knightGroup_Row_1.add(spawn);
				} else if (y == 1) {
					this.knightGroup_Row_2.add(spawn);
				} else if (y == 2) {
					this.knightGroup_Row_3.add(spawn);
				} else if (y == 3) {
					this.knightGroup_Row_4.add(spawn);
				}

				this.wholeKnightGroup.add(spawn);

				selectedCard = "";
			}

		}, this);	

		// SET SIZE FOR CASTLE
		this.elves_castle0.body.setSize(1000, 750);
		this.orc_castle0.body.setSize(900, 750);

		// GROUPS
		this.knightGroup_Row_1 = this.add.group();
		this.knightGroup_Row_2 = this.add.group();
		this.knightGroup_Row_3 = this.add.group();
		this.knightGroup_Row_4 = this.add.group();

		this.enemyGroup_Row_1 = this.add.group();
		this.enemyGroup_Row_2 = this.add.group();
		this.enemyGroup_Row_3 = this.add.group();
		this.enemyGroup_Row_4 = this.add.group();

		this.arrowGroupROW_1 = this.add.group();
		this.arrowGroupROW_2 = this.add.group();
		this.arrowGroupROW_3 = this.add.group();
		this.arrowGroupROW_4 = this.add.group();

		this.castleArrowGroup = this.add.group();
		this.wholeEnemyGroup = this.add.group();
		this.wholeKnightGroup = this.add.group();
		this.enemyCastleArrowGroup = this.add.group();
		this.wholeElfArrowGroup = this.add.group();

		// ADD OVERLAP DETECTION FOR ENEMY AND ELF CASTLE
		this.rock_impact = this.sound.add("rock_impact");
		this.physics.add.overlap(this.wholeElfArrowGroup, this.orc_castle0, (arrow, castle) => {
			//onsole.log(enemy.health);
			castle.health -= arrow.damage;

			arrow.destroy();
		}, false, this);

		this.physics.add.overlap(this.enemyCastleArrowGroup, this.wholeKnightGroup, (arrow, knight) => {
			//onsole.log(enemy.health);
			knight.health -= 90;
			if(!this.rock_impact.isPlaying){
				arrow.body.setEnable(false);
				arrow.anims.play("boulder_animation");
				this.rock_impact.play();
			}
		}, false, this);

		this.physics.add.overlap(this.castleArrowGroup, this.wholeEnemyGroup, (arrow, enemy) => {
			if(arrow.damage != undefined || arrow.damage != null){
				enemy.health -= arrow.damage;
			}else{
				enemy.health -= 25;
			}

			arrow.destroy();
		}, false, this);	

		//////////////////////////////////////////////////////		

		// ADD OVERLAP CALLBACK: ENEMY CASTLE TO KNIGHT GROUPS
		this.physics.add.overlap(this.orc_castle0, this.wholeKnightGroup, (castle, knight) => {
			//KNIGHT 1
			if (knight.name == "k1") {
				knight.k1Collision(knight, castle);
			}
			//KNIGHT 2
			if (knight.name == "k2") {
				knight.k2Collision(knight, castle);
			}

			//KNIGHT 2
			if (knight.name == "k3") {
				knight.k3Collision(knight, castle);
			}

			//KNIGHT 2
			if (knight.name == "e2") {
				knight.e2Collision(knight, castle);
			}
		}, false, this);

		//////////////////////////////////////////////////////	

		// ADD OVERLAP CALLBACK: ELF CASTLE TO ENEMY GROUPS

		this.physics.add.overlap(this.elves_castle0, this.wholeEnemyGroup, (castle, enemy) => {
			//castle.health -= 150;
			//arrow.destroy();
			// ENEMY
			if (enemy.name == "orc1") {
				enemy.o1Collision(castle, enemy);
			}

			if (enemy.name == "orc2") {
				enemy.o2Collision(castle, enemy);
			}

			if (enemy.name == "orc3") {
				enemy.o3Collision(castle, enemy);
			}

			if (enemy.name == "troll1") {
				enemy.t1Collision(castle, enemy);
			}

			if (enemy.name == "troll2") {
				enemy.t2Collision(castle, enemy);
			}

			if (enemy.name == "troll3") {
				enemy.t3Collision(castle, enemy);
			}
		}, false, this);

		//////////////////////////////////////////////////////////			

		// ADD OVERLAP FOR ELF ARROW GROUP TO ENEMY GROUPS

		this.physics.add.overlap(this.wholeElfArrowGroup, this.wholeEnemyGroup, (arrow, enemy) => {
			enemy.health -= arrow.damage;
			arrow.destroy();
		}, false, this);

		//////////////////////////////////////////////////////////

		///// dasdasd
		// ADD OVERLAP FOR KNIGHT GROUPS TO ENEMY GROUPS

		this.physics.add.overlap(this.knightGroup_Row_1, this.enemyGroup_Row_1, (knight, enemy) => {
			// k1RUN_sprite

			//KNIGHT 1
			if (knight.name == "k1") {
				knight.k1Collision(knight, enemy);
			}

			//KNIGHT 2
			if (knight.name == "k2") {
				knight.k2Collision(knight, enemy);
			}

			//KNIGHT 2
			if (knight.name == "k3") {
				knight.k3Collision(knight, enemy);
			}

			//KNIGHT 2
			if (knight.name == "e2") {
				knight.e2Collision(knight, enemy);
			}

			// ENEMY
			if (enemy.name == "orc1") {
				enemy.o1Collision(knight, enemy);
			}

			if (enemy.name == "orc2") {
				enemy.o2Collision(knight, enemy);
			}

			if (enemy.name == "orc3") {
				enemy.o3Collision(knight, enemy);
			}

			if (enemy.name == "troll1") {
				enemy.t1Collision(knight, enemy);
			}

			if (enemy.name == "troll2") {
				enemy.t2Collision(knight, enemy);
			}

			if (enemy.name == "troll3") {
				enemy.t3Collision(knight, enemy);
			}
		}, false, this);

		this.physics.add.overlap(this.knightGroup_Row_2, this.enemyGroup_Row_2, (knight, enemy) => {
			// k1RUN_sprite

			//KNIGHT 1
			if (knight.name == "k1") {
				knight.k1Collision(knight, enemy);
			}

			//KNIGHT 2
			if (knight.name == "k2") {
				knight.k2Collision(knight, enemy);
			}

			//KNIGHT 2
			if (knight.name == "k3") {
				knight.k3Collision(knight, enemy);
			}

			//KNIGHT 2
			if (knight.name == "e2") {
				knight.e2Collision(knight, enemy);
			}

			// ENEMY
			if (enemy.name == "orc1") {
				enemy.o1Collision(knight, enemy);
			}

			if (enemy.name == "orc2") {
				enemy.o2Collision(knight, enemy);
			}

			if (enemy.name == "orc3") {
				enemy.o3Collision(knight, enemy);
			}

			if (enemy.name == "troll1") {
				enemy.t1Collision(knight, enemy);
			}

			if (enemy.name == "troll2") {
				enemy.t2Collision(knight, enemy);
			}

			if (enemy.name == "troll3") {
				enemy.t3Collision(knight, enemy);
			}
		}, false, this);

		this.physics.add.overlap(this.knightGroup_Row_3, this.enemyGroup_Row_3, (knight, enemy) => {
			// k1RUN_sprite

			//KNIGHT 1
			if (knight.name == "k1") {
				knight.k1Collision(knight, enemy);
			}

			//KNIGHT 2
			if (knight.name == "k2") {
				knight.k2Collision(knight, enemy);
			}

			//KNIGHT 2
			if (knight.name == "k3") {
				knight.k3Collision(knight, enemy);
			}

			//KNIGHT 2
			if (knight.name == "e2") {
				knight.e2Collision(knight, enemy);
			}


			// ENEMY
			if (enemy.name == "orc1") {
				enemy.o1Collision(knight, enemy);
			}

			if (enemy.name == "orc2") {
				enemy.o2Collision(knight, enemy);
			}

			if (enemy.name == "orc3") {
				enemy.o3Collision(knight, enemy);
			}

			if (enemy.name == "troll1") {
				enemy.t1Collision(knight, enemy);
			}

			if (enemy.name == "troll2") {
				enemy.t2Collision(knight, enemy);
			}

			if (enemy.name == "troll3") {
				enemy.t3Collision(knight, enemy);
			}
		}, false, this);

		this.physics.add.overlap(this.knightGroup_Row_4, this.enemyGroup_Row_4, (knight, enemy) => {
			// k1RUN_sprite

			//KNIGHT 1
			if (knight.name == "k1") {
				knight.k1Collision(knight, enemy);
			}

			//KNIGHT 2
			if (knight.name == "k2") {
				knight.k2Collision(knight, enemy);
			}

			//KNIGHT 2
			if (knight.name == "k3") {
				knight.k3Collision(knight, enemy);
			}

			//KNIGHT 2
			if (knight.name == "e2") {
				knight.e2Collision(knight, enemy);
			}

			// ENEMY
			if (enemy.name == "orc1") {
				enemy.o1Collision(knight, enemy);
			}

			if (enemy.name == "orc2") {
				enemy.o2Collision(knight, enemy);
			}

			if (enemy.name == "orc3") {
				enemy.o3Collision(knight, enemy);
			}

			if (enemy.name == "troll1") {
				enemy.t1Collision(knight, enemy);
			}

			if (enemy.name == "troll2") {
				enemy.t2Collision(knight, enemy);
			}

			if (enemy.name == "troll3") {
				enemy.t3Collision(knight, enemy);
			}
		}, false, this);


		//////////////////////////////////////////////////////////	

		// ADD TIMER FOR ENEMY SPAWN
		this.timer = this.time.addEvent({
			delay: 2000,                // ms
			callback: () => {
				let x = 8;
				let y = Phaser.Math.Between(0, 3);
				//x = c_x * this.cellWidth + this.cW + this.offset.x;
				let chance = Math.random();
				let enemy;

				// 50% chance
				// orc level 1 - 2
				let c_x = x * this.cellWidth + this.cW + this.offset.x;
				let c_y = y * this.cellHeight + this.cH + this.offset.y - 23;
				let spawnRND = Phaser.Math.Between(0, 5);
				if(spawnRND == 5){
					enemy = new orc2FAB(this, c_x, c_y);
				}else if(spawnRND == 3){
					enemy = new troll1FAB(this, c_x, c_y);
				}else if(spawnRND == 2){
					enemy = new troll2FAB(this, c_x, c_y);
				}else{
					enemy = new orcFAB(this, c_x, c_y);
				}

				this.add.existing(enemy);
				if (y == 0) {
					this.enemyGroup_Row_1.add(enemy);
					enemy.row = "row1";
				}else if(y == 1){
					this.enemyGroup_Row_2.add(enemy);
					enemy.row = "row2";
				}else if(y == 2){
					this.enemyGroup_Row_3.add(enemy);
					enemy.row = "row3";
				}else if(y == 3){
					this.enemyGroup_Row_4.add(enemy);
					enemy.row = "row4";
				}
				this.wholeEnemyGroup.add(enemy);
			},
			//args: [],
			callbackScope: this,
			loop: true
		});

		// ADD TIMER FOR ENEMY SPAWN
		this.timer1 = this.time.addEvent({
			delay: 5000,                // ms
			callback: () => {
				let x = 8;
				let y = Phaser.Math.Between(0, 3);
				//x = c_x * this.cellWidth + this.cW + this.offset.x;
				let chance = Math.random();
				let enemy;

				// 50% chance
				// orc level 1 - 2
				let c_x = x * this.cellWidth + this.cW + this.offset.x;
				let c_y = y * this.cellHeight + this.cH + this.offset.y - 23;
				let spawnRND = Phaser.Math.Between(0, 4);
				if(spawnRND == 3){
					enemy = new orc2FAB(this, c_x, c_y);
					this.add.existing(enemy);
					if (y == 0) {
						this.enemyGroup_Row_1.add(enemy);
						enemy.row = "row1";
					}else if(y == 1){
						this.enemyGroup_Row_2.add(enemy);
						enemy.row = "row2";
					}else if(y == 2){
						this.enemyGroup_Row_3.add(enemy);
						enemy.row = "row3";
					}else if(y == 3){
						this.enemyGroup_Row_4.add(enemy);
						enemy.row = "row4";
					}
					this.wholeEnemyGroup.add(enemy);
				}else if(spawnRND == 1){
					enemy = new troll1FAB(this, c_x, c_y);
					this.add.existing(enemy);
					if (y == 0) {
						this.enemyGroup_Row_1.add(enemy);
						enemy.row = "row1";
					}else if(y == 1){
						this.enemyGroup_Row_2.add(enemy);
						enemy.row = "row2";
					}else if(y == 2){
						this.enemyGroup_Row_3.add(enemy);
						enemy.row = "row3";
					}else if(y == 3){
						this.enemyGroup_Row_4.add(enemy);
						enemy.row = "row4";
					}
					this.wholeEnemyGroup.add(enemy);
				}
			},
			//args: [],
			callbackScope: this,
			loop: true
		});
		//////////////////////////////////////////////////////////	


		// ADD TIMER FOR ENEMY SPAWN
		this.timer2 = this.time.addEvent({
			delay: 6000,                // ms
			callback: () => {
				let x = 8;
				let y = Phaser.Math.Between(0, 3);
				//x = c_x * this.cellWidth + this.cW + this.offset.x;
				let chance = Math.random();
				let enemy;

				// 50% chance
				// orc level 1 - 2
				let c_x = x * this.cellWidth + this.cW + this.offset.x;
				let c_y = y * this.cellHeight + this.cH + this.offset.y - 23;
				if(Phaser.Math.Between(1, 3) == 2){
					enemy = new orc3FAB(this, c_x, c_y);
					this.add.existing(enemy);
					if (y == 0) {
						this.enemyGroup_Row_1.add(enemy);
						enemy.row = "row1";
					}else if(y == 1){
						this.enemyGroup_Row_2.add(enemy);
						enemy.row = "row2";
					}else if(y == 2){
						this.enemyGroup_Row_3.add(enemy);
						enemy.row = "row3";
					}else if(y == 3){
						this.enemyGroup_Row_4.add(enemy);
						enemy.row = "row4";
					}
					this.wholeEnemyGroup.add(enemy);
				}
			},
			//args: [],
			callbackScope: this,
			loop: true
		});
		//////////////////////////////////////////////////////////	

		// ADD TIMER FOR ENEMY SPAWN
		this.timer4 = this.time.addEvent({
			delay: 6000,                // ms
			callback: () => {
				let x = 8;
				let y = Phaser.Math.Between(0, 3);
				//x = c_x * this.cellWidth + this.cW + this.offset.x;
				let chance = Math.random();
				let enemy;

				// 50% chance
				// orc level 1 - 2
				let c_x = x * this.cellWidth + this.cW + this.offset.x;
				let c_y = y * this.cellHeight + this.cH + this.offset.y - 23;
				if(Phaser.Math.Between(1, 7) == 5){
					enemy = new troll3FAB(this, c_x, c_y);
					this.add.existing(enemy);
					if (y == 0) {
						this.enemyGroup_Row_1.add(enemy);
						enemy.row = "row1";
					}else if(y == 1){
						this.enemyGroup_Row_2.add(enemy);
						enemy.row = "row2";
					}else if(y == 2){
						this.enemyGroup_Row_3.add(enemy);
						enemy.row = "row3";
					}else if(y == 3){
						this.enemyGroup_Row_4.add(enemy);
						enemy.row = "row4";
					}
					this.wholeEnemyGroup.add(enemy);
				}
			},
			//args: [],
			callbackScope: this,
			loop: true
		});
		//////////////////////////////////////////////////////////	


		// ADD TIMER FOR ENEMY SPAWN
		this.timer2 = this.time.addEvent({
			delay: 3500,                // ms
			callback: () => {
				let x = 8;
				let y = Phaser.Math.Between(0, 3);
				//x = c_x * this.cellWidth + this.cW + this.offset.x;
				let chance = Math.random();
				let enemy;

				// 50% chance
				// orc level 1 - 2
				let c_x = x * this.cellWidth + this.cW + this.offset.x;
				let c_y = y * this.cellHeight + this.cH + this.offset.y - 23;
				if(Phaser.Math.Between(1, 3) == 2){
					enemy = new troll1FAB(this, c_x, c_y);
					this.add.existing(enemy);
					if (y == 0) {
						this.enemyGroup_Row_1.add(enemy);
						enemy.row = "row1";
					}else if(y == 1){
						this.enemyGroup_Row_2.add(enemy);
						enemy.row = "row2";
					}else if(y == 2){
						this.enemyGroup_Row_3.add(enemy);
						enemy.row = "row3";
					}else if(y == 3){
						this.enemyGroup_Row_4.add(enemy);
						enemy.row = "row4";
					}
					this.wholeEnemyGroup.add(enemy);
				}
			},
			//args: [],
			callbackScope: this,
			loop: true
		});
		//////////////////////////////////////////////////////////	

		// HANDLE PAUSE
		this.settings_icon.setInteractive();
		this.settings_icon.on('pointerdown', () => {
			this.scene.pause();
			this.battle_music.pause();
			this.scene.run("PauseScene", { sceneName: this.scene.key, scene: this.scene });
		}, this);	

		// HANDLE FINAL CHARGE
		this.final_charge_trigger = false;
		this.orc_spawn_snd = this.sound.add("orc_spawn_snd");
		this.heroes_spawn_snd = this.sound.add("heroes_spawn_snd");
		this.finalhero_scream = this.sound.add("finalhero_scream");
		this.orc_final_scream = this.sound.add("orc_final_scream");
		this.prematureHeroSpawn = false;
		this.prematureOrcSpawn = false;

		this.orc_spawn_snd.once("complete", () => {
			if(this.prematureOrcSpawn){
				this.orc_final_scream.play();
				this.hordesSpawn();
			}
			if(this.final_charge_trigger == false){
				this.orc_final_scream.play();
				this.hordesSpawn();

				this.final_charge_trigger = true;
				this.time.addEvent({
					delay: 2500,                // ms
					callback: () => {
						this.heroes_spawn_snd.play();
						this.prematureHeroSpawn = true;
					},
					callbackScope: this,
					loop: false
				});
			}
		}, this);

		this.heroes_spawn_snd.once("complete", () => {
			if(this.prematureHeroSpawn){
				this.finalhero_scream.play();
				this.heroesSpawn();
			}
			if(this.final_charge_trigger == false){
				this.finalhero_scream.play();
				this.heroesSpawn();

				this.time.addEvent({
					delay: 2500,                // ms
					callback: () => {
						this.orc_spawn_snd.play();
						this.prematureOrcSpawn = true;
					},
					callbackScope: this,
					loop: false
				});

				this.final_charge_trigger = true;
			}
		}, this);

		this.orc_castle0.maxHealth = 8000;
		this.orc_castle0.health = 8000;
		this.scene.run("PopUpScene", { sceneName: this.scene.key, scene: this.scene, tutorialMode: false, type: "countdown"});
		this.scene.pause();
	}

	spawnLOSTwindow(){
		this.battle_lose.play();

		this.battle_music.stop();
		this.scene.run("PopUpScene", { sceneName: this.scene.key, scene: this.scene, tutorialMode: false, type: "LOST"});
		this.scene.pause();		
	}

	spawnWINwindow(){
		this.battle_win.play();
		this.battle_music.stop();
		this.scene.run("PopUpScene", { sceneName: this.scene.key, scene: this.scene, tutorialMode: false, type: "WIN", nextScene: "Stage4Scene3" });
		this.scene.pause();
	}

	addGroup(object, type, index){
		if(type == "enemy"){
			if(index == 0){
				this.enemyGroup_Row_1.add(object);
				object.row = "row1";
			}else if(index == 1){
				this.enemyGroup_Row_2.add(object); 
				object.row = "row2";
			}else if(index == 2){
				this.enemyGroup_Row_3.add(object); 
				object.row = "row3";
			}else if(index == 3){
				this.enemyGroup_Row_4.add(object);
				object.row = "row4";
			}
		}else if(type == "knight"){
			if(index == 0){
				this.knightGroup_Row_1.add(object);
			}else if(index == 1){
				this.knightGroup_Row_2.add(object); 
			}else if(index == 2){
				this.knightGroup_Row_3.add(object); 
			}else if(index == 3){
				this.knightGroup_Row_4.add(object);
			}			
		}	
	}

	heroesSpawn(){
		let x = 0
		let y = [0, 1, 2, 3];
		let c_x = x * this.cellWidth + this.cW + this.offset.x;
		let heroes;
		let knightY = 8;	
		let c_y = [
			y[0] * this.cellHeight + this.cH + this.offset.y - knightY,
			y[1] * this.cellHeight + this.cH + this.offset.y - knightY,
			y[2] * this.cellHeight + this.cH + this.offset.y - knightY,
			y[3] * this.cellHeight + this.cH + this.offset.y - knightY,			
		];

		c_y.forEach((ypos, index) => {
			if(index == 1 || index == 2){
				heroes = new k3FAB(this, c_x, ypos);
			}else{
				heroes = new k2FAB(this, c_x, ypos);
			}
			this.add.existing(heroes);
			this.wholeKnightGroup.add(heroes);
			this.addGroup(heroes, "knight", index);
		});

		this.time.addEvent({
			delay: 1500,                // ms
			callback: () => {
				c_y.forEach((ypos, index) => {
					heroes = new k1FAB(this, c_x, ypos);
					this.add.existing(heroes);
					this.wholeKnightGroup.add(heroes);
					this.addGroup(heroes, "knight", index);
				});
			},
			//args: [],
			callbackScope: this,
			loop: false
		});

		this.time.addEvent({
			delay: 3000,                // ms
			callback: () => {
				c_y.forEach((ypos, index) => {
					heroes = new k1FAB(this, c_x, ypos);
					this.add.existing(heroes);
					this.wholeKnightGroup.add(heroes);
					this.addGroup(heroes, "knight", index);
				});
			},
			//args: [],
			callbackScope: this,
			loop: false
		});



	}

	hordesSpawn(){
		let x = 8;
		let y = [0, 1, 2, 3];
		let c_x = x * this.cellWidth + this.cW + this.offset.x;
		let enemy;
		let c_y = [
			y[0] * this.cellHeight + this.cH + this.offset.y - 23,
			y[1] * this.cellHeight + this.cH + this.offset.y - 23,
			y[2] * this.cellHeight + this.cH + this.offset.y - 23,
			y[3] * this.cellHeight + this.cH + this.offset.y - 23,
		];
		c_y.forEach((ypos, index) => {

			if(index == 1 || index == 2){
				enemy = new orc3FAB(this, c_x, ypos);
			}else{
				enemy = new orcFAB(this, c_x, ypos);
			}
			this.add.existing(enemy);
			this.wholeEnemyGroup.add(enemy);
			this.addGroup(enemy, "enemy", index);

		});

		this.time.addEvent({
			delay: 1500,                // ms
			callback: () => {
				c_y.forEach((ypos, index) => {
					let rand = Phaser.Math.Between(0, 1);
					if(rand == 1){
						enemy = new orc2FAB(this, c_x, ypos);
					}else{
						enemy = new orcFAB(this, c_x, ypos);
					}
					this.add.existing(enemy);
					this.wholeEnemyGroup.add(enemy);
					this.addGroup(enemy, "enemy", index);
				});
			},
			//args: [],
			callbackScope: this,
			loop: false
		});
		this.time.addEvent({
			delay: 3000,                // ms
			callback: () => {
				c_y.forEach((ypos, index) => {
					enemy = new orcFAB(this, c_x, ypos);
					this.add.existing(enemy);
					this.wholeEnemyGroup.add(enemy);
					this.addGroup(enemy, "enemy", index);
				});
			},
			//args: [],
			callbackScope: this,
			loop: false
		});


	}

	update(){
		if(this.elves_castle0.health <= 0){
			//this.spawnWINwindow();
			this.spawnLOSTwindow();
		}else if(this.orc_castle0.health <= 0){
			this.spawnWINwindow();
			//this.spawnLOSTwindow();
		}

		this.wholeKnightGroup.children.each(function (elf){
			if (Phaser.Math.Distance.Between(elf.x, elf.y, this.orc_castle0.x, this.orc_castle0.y) < 600) {
				if (elf.name == "e1" && elf.health > 0) {

					if (elf.x < this.orc_castle0.x) {
						elf.shooting = true;
						if (elf.isShooting()) {
							elf.fireArrows(this.orc_castle0, "row1");
						}
					}
				} else { }				
			}
		}, this);

		this.wholeKnightGroup.children.each(function (elf) {
			// plant ...
			this.wholeEnemyGroup.children.each(function (enemy) {
				if (Phaser.Math.Distance.Between(elf.x, elf.y, enemy.x, enemy.y) < 400) {
					/*if(.isShooting()){
						plant.shoot(zombie, 'row1');

					}*/
					if (elf.name == "e1" && elf.health > 0 && enemy.row == elf.row) {

						if (elf.x < enemy.x) {
							elf.shooting = true;
							if (elf.isShooting()) {
								elf.fireArrows(enemy, elf.row);
							}
						}
					} else { }
				}
			}, this);
		}, this);
	}	

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
