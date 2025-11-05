
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg2
		const bg2 = this.add.image(0, 0, "bg2");
		bg2.setOrigin(0, 0);

		// elves_castle0
		const elves_castle0 = new CastlePrefab(this, -33, 483);
		this.add.existing(elves_castle0);

		// orc_castle0
		const orc_castle0 = new EnemyCastlePrefab(this, 1888, 483);
		this.add.existing(orc_castle0);

		// spearman_card
		const spearman_card = this.add.image(443, 995, "spearman_card");

		// axeman_card
		const axeman_card = this.add.image(663, 995, "axeman_card");

		// preeminentman_card
		const preeminentman_card = this.add.image(883, 995, "preeminentman_card");

		// archer_card
		const archer_card = this.add.image(1103, 995, "archer_card");

		// swordy_card
		const swordy_card = this.add.image(1332, 995, "swordy_card");

		// coin_ui
		this.add.image(200, 60, "coin_ui");

		// coinText
		const coinText = this.add.text(341, 29, "", {});
		coinText.text = "0\n";
		coinText.setStyle({"align":"right","fontFamily":"EnchantedLand","fontSize":"55px"});

		// hp_elven_castle
		const hp_elven_castle = this.add.sprite(200, 221, "hp", 10);

		// hp_orc_castle
		const hp_orc_castle = this.add.sprite(1738, 221, "hp", 10);

		// crown_ui
		this.add.image(593, 60, "crown_ui");

		// crownText
		const crownText = this.add.text(732, 29, "", {});
		crownText.text = "0\n";
		crownText.setStyle({"align":"right","fontFamily":"EnchantedLand","fontSize":"55px"});

		// settings_icon
		const settings_icon = this.add.image(1863, 60, "settings_icon");

		// hightlight
		const hightlight = this.add.rectangle(1007, 570, 130, 108);
		hightlight.visible = false;
		hightlight.isFilled = true;
		hightlight.fillColor = 15027761;

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

		this.elves_castle0 = elves_castle0;
		this.orc_castle0 = orc_castle0;
		this.spearman_card = spearman_card;
		this.coinText = coinText;
		this.hp_elven_castle = hp_elven_castle;
		this.hp_orc_castle = hp_orc_castle;
		this.crownText = crownText;
		this.settings_icon = settings_icon;
		this.hightlight = hightlight;

		this.events.emit("scene-awake");
	}

	/** @type {CastlePrefab} */
	elves_castle0;
	/** @type {EnemyCastlePrefab} */
	orc_castle0;
	/** @type {Phaser.GameObjects.Image} */
	spearman_card;
	/** @type {Phaser.GameObjects.Text} */
	coinText;
	/** @type {Phaser.GameObjects.Sprite} */
	hp_elven_castle;
	/** @type {Phaser.GameObjects.Sprite} */
	hp_orc_castle;
	/** @type {Phaser.GameObjects.Text} */
	crownText;
	/** @type {Phaser.GameObjects.Image} */
	settings_icon;
	/** @type {Phaser.GameObjects.Rectangle} */
	hightlight;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate();

		// PUT START UP CURRENCY!
		this.coinText.setText(1000);
		this.musicArray = [];
		this.sndCounter = 0;

		// GET VALUE OF CROWS
		let crowns = parseInt(localStorage.getItem("crowns"));

		if(isNaN(crowns)){
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
		this.input.on('pointerdown', () => {
			//this.cointText.setText(200);

		}, this);
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

		this.hordesSpawn();
		this.heroesSpawn();

		// SET SIZE FOR CASTLE
		this.elves_castle0.body.setSize(1000, 750);
		this.orc_castle0.body.setSize(900, 750);

		this.physics.add.overlap(this.wholeElfArrowGroup, this.orc_castle0, (arrow, castle) => {
			//onsole.log(enemy.health);
			castle.health -= arrow.damage;
			arrow.destroy();
		}, false, this);

		this.physics.add.overlap(this.enemyCastleArrowGroup, this.wholeKnightGroup, (arrow, knight) => {
			//onsole.log(enemy.health);
			knight.health -= 50;
			arrow.destroy();
		}, false, this);

		this.physics.add.overlap(this.castleArrowGroup, this.wholeEnemyGroup, (arrow, enemy) => {
			console.log(enemy.health);
			enemy.health -= 50;
			arrow.destroy();
		}, false, this);


		this.physics.add.overlap(this.orc_castle0, this.wholeKnightGroup, (castle, knight) => {
			//KNIGHT
			if (knight.name == "k1") {
				//console.log("HITTING ENEMY!");
				knight.k1Collision(knight, castle);
			}

			if (knight.name == "k2") {
				knight.k2Collision(knight, castle);
			}

			if (knight.name == "k3") {
				knight.k3Collision(knight, castle);
			}

			if (knight.name == "e2") {
				knight.e2Collision(knight, castle);
			}

		}, false, this);

		this.physics.add.overlap(this.elves_castle0, this.wholeEnemyGroup, (castle, enemy) => {
			//console.log(enemy.health);
			//castle.health -= 150;
			//arrow.destroy();
			// ENEMY
			console.log(castle.health);
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


		this.physics.add.overlap(this.wholeElfArrowGroup, this.wholeEnemyGroup, (arrow, enemy) => {
			console.log(enemy.health);
			enemy.health -= arrow.damage;
			arrow.destroy();
		}, false, this);

		this.physics.add.overlap(this.knightGroup_Row_1, this.enemyGroup_Row_1, (knight, enemy) => {
			//console.log(enemy.texture.key)
			// k1RUN_sprite

			//KNIGHT
			if (knight.name == "k1") {
				//console.log("HITTING ENEMY!");
				knight.k1Collision(knight, enemy);
			}

			if (knight.name == "k2") {
				knight.k2Collision(knight, enemy);
			}

			if (knight.name == "k3") {
				knight.k3Collision(knight, enemy);
			}

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
			//console.log(enemy.texture.key)
			// k1RUN_sprite

			//KNIGHT
			if (knight.name == "k1") {
				//console.log("HITTING ENEMY!");
				knight.k1Collision(knight, enemy);
			}

			if (knight.name == "k2") {
				knight.k2Collision(knight, enemy);
			}

			if (knight.name == "k3") {
				knight.k3Collision(knight, enemy);
			}

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
			//console.log(enemy.texture.key)
			// k1RUN_sprite

			//KNIGHT
			if (knight.name == "k1") {
				//console.log("HITTING ENEMY!");
				knight.k1Collision(knight, enemy);
			}

			if (knight.name == "k2") {
				knight.k2Collision(knight, enemy);
			}

			if (knight.name == "k3") {
				knight.k3Collision(knight, enemy);
			}

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
			//console.log(enemy.texture.key)
			// k1RUN_sprite

			//KNIGHT
			if (knight.name == "k1") {
				//console.log("HITTING ENEMY!");
				knight.k1Collision(knight, enemy);
			}

			if (knight.name == "k2") {
				knight.k2Collision(knight, enemy);
			}

			if (knight.name == "k3") {
				knight.k3Collision(knight, enemy);
			}

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

		this.input.topOnly = false;

		this.input.on('pointerup', () => {
			this.hightlight.setVisible(false);
			this.selectedCard = "";
		}, this);

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
			//console.log("X: " + xcal + " Y: " + ycal);
			console.log("X: " + x + " Y: " + y);
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
						break;
					case "axeman_card":
						ycal = y * this.cellHeight + this.cH + this.offset.y - knightY;
						spawn = new k2FAB(this, xcal, ycal);
						coins -= 120;
						break;
					case "preeminentman_card":
						ycal = y * this.cellHeight + this.cH + this.offset.y - knightY;
						spawn = new k3FAB(this, xcal, ycal);
						coins -= 250;
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
						break;
					case "swordy_card":
						ycal = y * this.cellHeight + this.cH + this.offset.y - elf1Y;
						spawn = new eFAB(this, xcal, ycal);
						coins -= 300;
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

		var timer = this.time.addEvent({
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
				enemy = new troll1FAB(this, c_x, c_y);
				this.add.existing(enemy);
				if (y == 0) {
					this.enemyGroup_Row_1.add(enemy);
					enemy.row = "row1";
				} else if (y == 1) {
					this.enemyGroup_Row_2.add(enemy);
					enemy.row = "row2";
				} else if (y == 2) {
					this.enemyGroup_Row_3.add(enemy);
					enemy.row = "row3";
				} else if (y == 3) {
					this.enemyGroup_Row_4.add(enemy);
					enemy.row = "row4";
				}
				this.wholeEnemyGroup.add(enemy);
			},
			//args: [],
			callbackScope: this,
			loop: true
		});

		var timer1 = this.time.addEvent({
			delay: 705555500,                // ms
			callback: () => {
				let x = 8;
				let y = Phaser.Math.Between(0, 3);
				//x = c_x * this.cellWidth + this.cW + this.offset.x;
				let chance = Math.random();
				let enemy;
				if(Math.random() * 100 < 50){
					// 50% chance
					// orc level 1 - 2
					let c_x = x * this.cellWidth + this.cW + this.offset.x;
					let c_y = y * this.cellHeight + this.cH + this.offset.y - 23;	
					enemy = new orc3FAB(this, c_x, c_y);		
					this.add.existing(enemy);
					if(y == 0){
						this.enemyGroup_Row_1.add(enemy);
					}else if(y == 1){
						this.enemyGroup_Row_2.add(enemy);
					}else if(y == 2){
						this.enemyGroup_Row_3.add(enemy);
					}else if(y == 3){
						this.enemyGroup_Row_4.add(enemy);
					}
					this.wholeEnemyGroup.add(enemy);
				}
			},
			//args: [],
			callbackScope: this,
			loop: true
		});

		var timer3 = this.time.addEvent({
			delay: 10055500,                // ms
			callback: () => {
				let x = 8;
				let y = Phaser.Math.Between(0, 3);
				//x = c_x * this.cellWidth + this.cW + this.offset.x;
				let chance = Math.random();
				let enemy;
				if(Math.random() * 100 < 40){
					// 30% chance
					// orc level 1 - 2
					let c_x = x * this.cellWidth + this.cW + this.offset.x;
					let c_y = y * this.cellHeight + this.cH + this.offset.y - 23;	
					enemy = new troll3FAB(this, c_x, c_y);		
					this.add.existing(enemy);
					if(y == 0){
						this.enemyGroup_Row_1.add(enemy);
					}else if(y == 1){
						this.enemyGroup_Row_2.add(enemy);
					}else if(y == 2){
						this.enemyGroup_Row_3.add(enemy);
					}else if(y == 3){
						this.enemyGroup_Row_4.add(enemy);
					}
				this.wholeEnemyGroup.add(enemy);

				}
			},
			//args: [],
			callbackScope: this,
			loop: true
		});
		// HANDLE PAUSE
		this.settings_icon.setInteractive();
		this.settings_icon.on('pointerdown', () => {
			this.scene.pause();
			//console.log(this.scene.key);
			this.scene.run("PauseScene", { sceneName: this.scene.key, scene: this.scene });
		}, this);

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

	update() {

		if(this.elves_castle0.health <= 0){
			this.scene.stop();
			this.scene.start();
		}else if(this.orc_castle0.health <= 0){
			this.scene.stop();
			this.scene.start();
		}

		this.wholeKnightGroup.children.each(function (elf){
			if (Phaser.Math.Distance.Between(elf.x, elf.y, this.orc_castle0.x, this.orc_castle0.y) < 600) {
				if (elf.name == "e1" && elf.health > 0) {

					if (elf.x < this.orc_castle0.x) {
						//console.log("HI!?");
						elf.shooting = true;
						if (elf.isShooting()) {
							elf.fireArrows(this.orc_castle0, "row1");
						}
					}
				} else { }				
			}
		}, this);

		this.wholeKnightGroup.children.each(function (elf) {
			//console.log(plant.pote());
			// plant ...
			this.wholeEnemyGroup.children.each(function (enemy) {
				//console.log(Phaser.Math.Distance.Between(plant.x, plant.y, zombie.x, zombie.y));
				if (Phaser.Math.Distance.Between(elf.x, elf.y, enemy.x, enemy.y) < 400) {
					/*if(.isShooting()){
						plant.shoot(zombie, 'row1');

					}*/
					if (elf.name == "e1" && elf.health > 0 && enemy.row == elf.row) {

						if (elf.x < enemy.x) {
							//console.log("HI!?");
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


