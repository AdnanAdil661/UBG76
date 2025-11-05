
// You can write more code here

/* START OF COMPILED CODE */

class UpgradeScene extends Phaser.Scene {

	constructor() {
		super("UpgradeScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// window
		this.add.image(956, 548, "window");

		// fortification_upgrade0
		const fortification_upgrade0 = this.add.sprite(691, 439, "fortification_upgrade", 0);

		// unendingfaith_upgrade0
		const unendingfaith_upgrade0 = this.add.sprite(691, 611, "unendingfaith_upgrade", 0);

		// heroescharge_upgrade0
		const heroescharge_upgrade0 = this.add.image(691, 785, "heroescharge_upgrade", 0);

		// precision_upgrade0
		const precision_upgrade0 = this.add.sprite(1225, 613, "precision_upgrade", 0);

		// swordsmanship_upgrade0
		const swordsmanship_upgrade0 = this.add.image(1225, 439, "swordsmanship_upgrade", 0);

		// fortificationButton
		const fortificationButton = this.add.image(827, 463, "upgradebutton");

		// unendingfaithButton
		const unendingfaithButton = this.add.image(827, 636, "upgradebutton");

		// heroeschargeButton
		const heroeschargeButton = this.add.image(827, 810, "upgradebutton");

		// swordsmanshipButton
		const swordsmanshipButton = this.add.image(1362, 463, "upgradebutton");

		// precisionupgradeButton
		const precisionupgradeButton = this.add.image(1362, 637, "upgradebutton");

		// fortificationPrice
		const fortificationPrice = this.add.text(567, 462, "", {});
		fortificationPrice.text = "1000\n";
		fortificationPrice.setStyle({"fontFamily":"EnchantedLand","fontSize":"36px"});

		// crownui
		this.add.image(1088, 792, "crownui");

		// crownData
		const crownData = this.add.text(1154, 762, "", {});
		crownData.text = "0";
		crownData.setStyle({"fontFamily":"EnchantedLand","fontSize":"66px"});

		// unendingfaithPrice
		const unendingfaithPrice = this.add.text(567, 633, "", {});
		unendingfaithPrice.text = "2000\n";
		unendingfaithPrice.setStyle({"fontFamily":"EnchantedLand","fontSize":"36px"});

		// heroeschargePrice
		const heroeschargePrice = this.add.text(567, 807, "", {});
		heroeschargePrice.text = "10000";
		heroeschargePrice.setStyle({"fontFamily":"EnchantedLand","fontSize":"36px"});

		// swordsmanshipPrice
		const swordsmanshipPrice = this.add.text(1100, 462, "", {});
		swordsmanshipPrice.text = "15000";
		swordsmanshipPrice.setStyle({"fontFamily":"EnchantedLand","fontSize":"36px"});

		// precisionupgradePrice
		const precisionupgradePrice = this.add.text(1100, 634, "", {});
		precisionupgradePrice.text = "10000";
		precisionupgradePrice.setStyle({"fontFamily":"EnchantedLand","fontSize":"36px"});

		// fortification_description
		const fortification_description = this.add.text(868, 445, "", {});
		fortification_description.visible = false;
		fortification_description.text = "Fortification:\nBlacksmiths from the Balkosh Mountains are using a new technique of crafting armors called \"Osmium Reinforcement\". It gradually increases the Knights defense.";
		fortification_description.setStyle({"backgroundColor":"#000000ff","fontSize":"36px"});
		fortification_description.setPadding({"left":10,"top":10,"right":10,"bottom":10});
		fortification_description.setWordWrapWidth(450);

		// unendingfaith_description
		const unendingfaith_description = this.add.text(909, 768, "", {});
		unendingfaith_description.visible = false;
		unendingfaith_description.text = "Unending Faith:\nThe Omniscience appreciates the power of faith among His warriors which grants them more strength and increases the Knights' damaging prowess.";
		unendingfaith_description.setStyle({"backgroundColor":"#000000ff","fontSize":"36px"});
		unendingfaith_description.setPadding({"left":10,"top":10,"right":10,"bottom":10});
		unendingfaith_description.setWordWrapWidth(450);

		// heroescharge_description
		const heroescharge_description = this.add.text(235, 909, "", {});
		heroescharge_description.visible = false;
		heroescharge_description.text = "Heroes Charge:\nWith prayers and absolute faith, knights will charge into the abyss and will face their brutal destiny. This will Increase Knights movement speed and Health points.";
		heroescharge_description.setStyle({"backgroundColor":"#000000ff","fontSize":"36px"});
		heroescharge_description.setPadding({"left":10,"top":10,"right":10,"bottom":10});
		heroescharge_description.setWordWrapWidth(450);

		// swordsmanship_description
		const swordsmanship_description = this.add.text(-276, 853, "", {});
		swordsmanship_description.visible = false;
		swordsmanship_description.text = "Swordsmanship:\nWith endless training and no rest, Swordy will gain more strength and wlll increase his attack damage and attack speed.";
		swordsmanship_description.setStyle({"backgroundColor":"#000000ff","fontSize":"36px"});
		swordsmanship_description.setPadding({"left":10,"top":10,"right":10,"bottom":10});
		swordsmanship_description.setWordWrapWidth(450);

		// precision_description
		const precision_description = this.add.text(-394, 330, "", {});
		precision_description.visible = false;
		precision_description.text = "Precision:\nElf Archers from Tanaya Valley have extraordinary hearing and perception ability which grant them more power and will increase their attack damage.";
		precision_description.setStyle({"backgroundColor":"#000000ff","fontSize":"36px"});
		precision_description.setPadding({"left":10,"top":10,"right":10,"bottom":10});
		precision_description.setWordWrapWidth(450);

		// home
		const home = this.add.image(1805, 108, "home");

		this.fortification_upgrade0 = fortification_upgrade0;
		this.unendingfaith_upgrade0 = unendingfaith_upgrade0;
		this.heroescharge_upgrade0 = heroescharge_upgrade0;
		this.precision_upgrade0 = precision_upgrade0;
		this.swordsmanship_upgrade0 = swordsmanship_upgrade0;
		this.fortificationButton = fortificationButton;
		this.unendingfaithButton = unendingfaithButton;
		this.heroeschargeButton = heroeschargeButton;
		this.swordsmanshipButton = swordsmanshipButton;
		this.precisionupgradeButton = precisionupgradeButton;
		this.fortificationPrice = fortificationPrice;
		this.crownData = crownData;
		this.unendingfaithPrice = unendingfaithPrice;
		this.heroeschargePrice = heroeschargePrice;
		this.swordsmanshipPrice = swordsmanshipPrice;
		this.precisionupgradePrice = precisionupgradePrice;
		this.fortification_description = fortification_description;
		this.unendingfaith_description = unendingfaith_description;
		this.heroescharge_description = heroescharge_description;
		this.swordsmanship_description = swordsmanship_description;
		this.precision_description = precision_description;
		this.home = home;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	fortification_upgrade0;
	/** @type {Phaser.GameObjects.Sprite} */
	unendingfaith_upgrade0;
	/** @type {Phaser.GameObjects.Image} */
	heroescharge_upgrade0;
	/** @type {Phaser.GameObjects.Sprite} */
	precision_upgrade0;
	/** @type {Phaser.GameObjects.Image} */
	swordsmanship_upgrade0;
	/** @type {Phaser.GameObjects.Image} */
	fortificationButton;
	/** @type {Phaser.GameObjects.Image} */
	unendingfaithButton;
	/** @type {Phaser.GameObjects.Image} */
	heroeschargeButton;
	/** @type {Phaser.GameObjects.Image} */
	swordsmanshipButton;
	/** @type {Phaser.GameObjects.Image} */
	precisionupgradeButton;
	/** @type {Phaser.GameObjects.Text} */
	fortificationPrice;
	/** @type {Phaser.GameObjects.Text} */
	crownData;
	/** @type {Phaser.GameObjects.Text} */
	unendingfaithPrice;
	/** @type {Phaser.GameObjects.Text} */
	heroeschargePrice;
	/** @type {Phaser.GameObjects.Text} */
	swordsmanshipPrice;
	/** @type {Phaser.GameObjects.Text} */
	precisionupgradePrice;
	/** @type {Phaser.GameObjects.Text} */
	fortification_description;
	/** @type {Phaser.GameObjects.Text} */
	unendingfaith_description;
	/** @type {Phaser.GameObjects.Text} */
	heroescharge_description;
	/** @type {Phaser.GameObjects.Text} */
	swordsmanship_description;
	/** @type {Phaser.GameObjects.Text} */
	precision_description;
	/** @type {Phaser.GameObjects.Image} */
	home;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
		this.crowns = 0;
		this.fortificationUpgrade();
		this.unEndingFaith();
		this.heroesCharge();
		this.swordsmanship();
		this.precision();

		this.input.topOnly = false;
		this.descX = 495;
		this.descY = 395;
		localStorage.setItem("first_visit", true);
		this.home.setInteractive().on('pointerup', () => {
			this.scene.start("MainMenu");
		}, this);
	}

	precision(){
		this.precision_upgrade0.setInteractive();

		this.precision_upgrade0.on('pointermove', (pointer, localX, localY) => {
			this.precision_description.setVisible(true);
			this.precision_description.x = localX + this.descX + 525;
			this.precision_description.y = localY + this.descY - 25;
		}, this);

		this.precision_upgrade0.setInteractive().on('pointerout', () => {
			this.precision_description.setVisible(false);
		}, this);
		// GET STATS OF UPGRADE
		let lvl = localStorage.getItem("_PRECISION_UPGRADE_LVL");

		// CHECK IF NOT CREATED YET
		let precision_stats = localStorage.getItem("_PRECISION_UPGRADE_STATS");

		if(precision_stats == null){
			localStorage.setItem("_PRECISION_UPGRADE_STATS", "0");
		}

		if(lvl == null){
			localStorage.setItem("_PRECISION_UPGRADE_LVL", "0");
		}else{
			lvl = localStorage.getItem("_PRECISION_UPGRADE_LVL");
			console.log(lvl);
		}

		// SET FRAMES ACCORDING TO DATA
		// precision_upgrade0
		console.log("UP LVL: " + lvl);
		if(lvl == "0"){
			this.precision_upgrade0.setFrame(0);
		}else if(lvl == "1"){
			this.precision_upgrade0.setFrame(1);
			this.precisionupgradePrice.setText("20000");
			localStorage.setItem("_PRECISION_UPGRADE_STATS", "7");
			localStorage.setItem("_PRECISION_UPGRADE_LVL", "1");			
		}else if(lvl == "2"){
			this.precision_upgrade0.setFrame(2);
			this.precisionupgradePrice.setText("30000");
			localStorage.setItem("_PRECISION_UPGRADE_STATS", "14");
			localStorage.setItem("_PRECISION_UPGRADE_LVL", "2");				
		}else if(lvl == "3"){
			this.precision_upgrade0.setFrame(3);
			this.precisionupgradePrice.setText("40000");
			localStorage.setItem("_PRECISION_UPGRADE_STATS", "21");
			localStorage.setItem("_PRECISION_UPGRADE_LVL", "3");			
		}else if(lvl == "4"){
			this.precision_upgrade0.setFrame(4);
			this.precisionupgradePrice.setText("50000");
			localStorage.setItem("_PRECISION_UPGRADE_STATS", "28");
			localStorage.setItem("_PRECISION_UPGRADE_LVL", "4");					
		}else if(lvl == "5"){
			this.precision_upgrade0.setFrame(5);
			this.precisionupgradePrice.setText("");
			localStorage.setItem("_PRECISION_UPGRADE_STATS", "35");
			localStorage.setItem("_PRECISION_UPGRADE_LVL", "5");	
		}	

		if(lvl < 5){ this.precisionupgradeButton.setInteractive(); }

		let price, res;

		this.precisionupgradeButton.on('pointerup', () => {
			if(this.precision_upgrade0.frame.name == 0){
				price = parseInt(this.precisionupgradePrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.precisionupgradePrice.setText("20000");
					localStorage.setItem("_PRECISION_UPGRADE_STATS", "7");
					localStorage.setItem("_PRECISION_UPGRADE_LVL", "1");
					this.precision_upgrade0.setFrame(1);
				}
			}else if(this.precision_upgrade0.frame.name == 1){
				price = parseInt(this.precisionupgradePrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					localStorage.setItem("_PRECISION_UPGRADE_STATS", "14");
					localStorage.setItem("_PRECISION_UPGRADE_LVL", "2");
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.precision_upgrade0.setFrame(2);
					this.precisionupgradePrice.setText("30000");						
				}
			}else if(this.precision_upgrade0.frame.name == 2){
				price = parseInt(this.precisionupgradePrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					localStorage.setItem("_PRECISION_UPGRADE_STATS", "21");
					localStorage.setItem("_PRECISION_UPGRADE_LVL", "3");
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.precisionupgradePrice.setText("40000");
					this.precision_upgrade0.setFrame(3);
				}
			}else if(this.precision_upgrade0.frame.name == 3){
				price = parseInt(this.precisionupgradePrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					localStorage.setItem("_PRECISION_UPGRADE_STATS", "28");
					localStorage.setItem("_PRECISION_UPGRADE_LVL", "4");
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.precisionupgradePrice.setText("50000");
					this.precision_upgrade0.setFrame(4);	
				}
			}else if(this.precision_upgrade0.frame.name == 4){
				price = parseInt(this.precisionupgradePrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.precisionupgradePrice.setText("");
					localStorage.setItem("_PRECISION_UPGRADE_STATS", "35");
					localStorage.setItem("_PRECISION_UPGRADE_LVL", "5");
					this.precision_upgrade0.setFrame(5);
				}
			}
		}, this);			
	}

	swordsmanship(){
		this.swordsmanship_upgrade0.setInteractive();

		this.swordsmanship_upgrade0.on('pointermove', (pointer, localX, localY) => {
			this.swordsmanship_description.setVisible(true);
			this.swordsmanship_description.x = localX + this.descX + 525;
			this.swordsmanship_description.y = localY + this.descY - 25;
		}, this);

		this.swordsmanship_upgrade0.setInteractive().on('pointerout', () => {
			this.swordsmanship_description.setVisible(false);
		}, this);
		// GET STATS OF UPGRADE
		let lvl = localStorage.getItem("_SWORDSMANSHIP_UPGRADE_LVL");

		// CHECK IF NOT CREATED YET
		let swordsmanship_stats = localStorage.getItem("_SWORDSMANSHIP_UPGRADE_STATS");

		if(swordsmanship_stats == null){
			localStorage.setItem("_SWORDSMANSHIP_UPGRADE_STATS", "0");
		}

		if(lvl == null){
			localStorage.setItem("_SWORDSMANSHIP_UPGRADE_LVL", "0");
		}else{
			lvl = localStorage.getItem("_SWORDSMANSHIP_UPGRADE_LVL");
			console.log(lvl);
		}

		// SET FRAMES ACCORDING TO DATA
		// swordsmanship_upgrade0
		if(lvl == "0"){
			this.swordsmanship_upgrade0.setFrame(0);
		}else if(lvl == "1"){
			this.swordsmanship_upgrade0.setFrame(1);
			this.swordsmanshipPrice.setText("35000");
			localStorage.setItem("_SWORDSMANSHIP_UPGRADE_STATS", "12");
			localStorage.setItem("_SWORDSMANSHIP_UPGRADE_LVL", "1");			
		}else if(lvl == "2"){
			this.swordsmanship_upgrade0.setFrame(2);
			this.swordsmanshipPrice.setText("55000");
			localStorage.setItem("_SWORDSMANSHIP_UPGRADE_STATS", "25");
			localStorage.setItem("_SWORDSMANSHIP_UPGRADE_LVL", "2");				
		}else if(lvl == "3"){
			this.swordsmanship_upgrade0.setFrame(3);
			this.swordsmanshipPrice.setText("75000");
			localStorage.setItem("_SWORDSMANSHIP_UPGRADE_STATS", "47");
			localStorage.setItem("_SWORDSMANSHIP_UPGRADE_LVL", "3");			
		}else if(lvl == "4"){
			this.swordsmanship_upgrade0.setFrame(4);
			this.swordsmanshipPrice.setText("95000");
			localStorage.setItem("_SWORDSMANSHIP_UPGRADE_STATS", "63");
			localStorage.setItem("_SWORDSMANSHIP_UPGRADE_LVL", "4");					
		}else if(lvl == "5"){
			this.swordsmanship_upgrade0.setFrame(5);
			this.swordsmanshipPrice.setText("");
			localStorage.setItem("_SWORDSMANSHIP_UPGRADE_STATS", "84");
			localStorage.setItem("_SWORDSMANSHIP_UPGRADE_LVL", "5");				
		}

		if(lvl < 5){ this.swordsmanshipButton.setInteractive(); }

		let price, res;

		this.swordsmanshipButton.on('pointerup', () => {
			if(this.swordsmanship_upgrade0.frame.name == 0){
				price = parseInt(this.swordsmanshipPrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.swordsmanshipPrice.setText("35000");
					localStorage.setItem("_SWORDSMANSHIP_UPGRADE_STATS", "12");
					localStorage.setItem("_SWORDSMANSHIP_UPGRADE_LVL", "1");
					this.swordsmanship_upgrade0.setFrame(1);
				}
			}else if(this.swordsmanship_upgrade0.frame.name == 1){
				price = parseInt(this.swordsmanshipPrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					localStorage.setItem("_SWORDSMANSHIP_UPGRADE_STATS", "25");
					localStorage.setItem("_SWORDSMANSHIP_UPGRADE_LVL", "2");
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.swordsmanship_upgrade0.setFrame(2);
					this.swordsmanshipPrice.setText("55000");						
				}
			}else if(this.swordsmanship_upgrade0.frame.name == 2){
				price = parseInt(this.swordsmanshipPrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					localStorage.setItem("_SWORDSMANSHIP_UPGRADE_STATS", "47");
					localStorage.setItem("_SWORDSMANSHIP_UPGRADE_LVL", "3");
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.swordsmanshipPrice.setText("75000");
					this.swordsmanship_upgrade0.setFrame(3);
				}
			}else if(this.swordsmanship_upgrade0.frame.name == 3){
				price = parseInt(this.swordsmanshipPrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					localStorage.setItem("_SWORDSMANSHIP_UPGRADE_STATS", "63");
					localStorage.setItem("_SWORDSMANSHIP_UPGRADE_LVL", "4");
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.swordsmanshipPrice.setText("95000");
					this.swordsmanship_upgrade0.setFrame(4);	
				}
			}else if(this.swordsmanship_upgrade0.frame.name == 4){
				price = parseInt(this.swordsmanshipPrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.swordsmanshipPrice.setText("");
					localStorage.setItem("_SWORDSMANSHIP_UPGRADE_STATS", "84");
					localStorage.setItem("_SWORDSMANSHIP_UPGRADE_LVL", "5");
					this.swordsmanship_upgrade0.setFrame(5);
				}
			}
		}, this);			
	}

	heroesCharge(){
		this.heroescharge_upgrade0.setInteractive();

		this.heroescharge_upgrade0.on('pointermove', (pointer, localX, localY) => {
			this.heroescharge_description.setVisible(true);
			this.heroescharge_description.x = localX + this.descX;
			this.heroescharge_description.y = localY + this.descY;
		}, this);

		this.heroescharge_upgrade0.setInteractive().on('pointerout', () => {
			this.heroescharge_description.setVisible(false);
		}, this);

		// GET STATS OF UPGRADE
		let lvl = localStorage.getItem("_HEROESCHARGE_UPGRADE_LVL");

		// CHECK IF NOT CREATED YET
		let heroescharge_stats = localStorage.getItem("_HEROESCHARGE_UPGRADE_STATS");

		if(heroescharge_stats == null){
			localStorage.setItem("_HEROESCHARGE_UPGRADE_STATS", "0");
		}

		if(lvl == null){
			localStorage.setItem("_HEROESCHARGE_UPGRADE_LVL", "0");
		}else{
			lvl = localStorage.getItem("_HEROESCHARGE_UPGRADE_LVL");
			console.log(lvl);			
		}

		// SET FRAMES ACCORDING TO DATA LVL
		//heroescharge_upgrade0
		if(lvl == "0"){
			this.heroescharge_upgrade0.setFrame(0);
		}else if(lvl == "1"){
			this.heroescharge_upgrade0.setFrame(1);
			this.heroeschargePrice.setText("15000");
			localStorage.setItem("_HEROESCHARGE_UPGRADE_STATS", "10-3");
			localStorage.setItem("_HEROESCHARGE_UPGRADE_LVL", "1");			
		}else if(lvl == "2"){
			this.heroescharge_upgrade0.setFrame(2);
			this.heroeschargePrice.setText("25000");
			localStorage.setItem("_HEROESCHARGE_UPGRADE_STATS", "20-6");
			localStorage.setItem("_HEROESCHARGE_UPGRADE_LVL", "2");				
		}else if(lvl == "3"){
			this.heroescharge_upgrade0.setFrame(3);
			this.heroeschargePrice.setText("45000");
			localStorage.setItem("_HEROESCHARGE_UPGRADE_STATS", "30-9");
			localStorage.setItem("_HEROESCHARGE_UPGRADE_LVL", "3");			
		}else if(lvl == "4"){
			this.heroescharge_upgrade0.setFrame(4);
			this.heroeschargePrice.setText("65000");
			localStorage.setItem("_HEROESCHARGE_UPGRADE_STATS", "40-12");
			localStorage.setItem("_HEROESCHARGE_UPGRADE_LVL", "4");					
		}else if(lvl == "5"){
			this.heroescharge_upgrade0.setFrame(5);
			this.heroeschargePrice.setText("");
			localStorage.setItem("_HEROESCHARGE_UPGRADE_STATS", "60-20");
			localStorage.setItem("_HEROESCHARGE_UPGRADE_LVL", "5");				
		}

		if(lvl < 5){ this.heroeschargeButton.setInteractive(); }

		let price, res;

		this.heroeschargeButton.on('pointerup', () => {
			if(this.heroescharge_upgrade0.frame.name == 0){
				price = parseInt(this.heroeschargePrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.heroeschargePrice.setText("15000");
					localStorage.setItem("_HEROESCHARGE_UPGRADE_STATS", "10-3");
					localStorage.setItem("_HEROESCHARGE_UPGRADE_LVL", "1");
					this.heroescharge_upgrade0.setFrame(1);
				}
			}else if(this.heroescharge_upgrade0.frame.name == 1){
				price = parseInt(this.heroeschargePrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					localStorage.setItem("_HEROESCHARGE_UPGRADE_STATS", "20-6");
					localStorage.setItem("_HEROESCHARGE_UPGRADE_LVL", "2");
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.heroescharge_upgrade0.setFrame(2);
					this.heroeschargePrice.setText("25000");						
				}
			}else if(this.heroescharge_upgrade0.frame.name == 2){
				price = parseInt(this.heroeschargePrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					localStorage.setItem("_HEROESCHARGE_UPGRADE_STATS", "30-9");
					localStorage.setItem("_HEROESCHARGE_UPGRADE_LVL", "3");
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.heroeschargePrice.setText("45000");
					this.heroescharge_upgrade0.setFrame(3);
				}
			}else if(this.heroescharge_upgrade0.frame.name == 3){
				price = parseInt(this.heroeschargePrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					localStorage.setItem("_HEROESCHARGE_UPGRADE_STATS", "40-12");
					localStorage.setItem("_HEROESCHARGE_UPGRADE_LVL", "4");
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.heroeschargePrice.setText("65000");
					this.heroescharge_upgrade0.setFrame(4);	
				}
			}else if(this.heroescharge_upgrade0.frame.name == 4){
				price = parseInt(this.heroeschargePrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.heroeschargePrice.setText("");
					localStorage.setItem("_HEROESCHARGE_UPGRADE_STATS", "50-20");
					localStorage.setItem("_HEROESCHARGE_UPGRADE_LVL", "5");
					this.heroescharge_upgrade0.setFrame(5);
				}
			}
		}, this);		
	}

	unEndingFaith(){

		this.unendingfaith_upgrade0.setInteractive();

		this.unendingfaith_upgrade0.on('pointermove', (pointer, localX, localY) => {
			this.unendingfaith_description.setVisible(true);
			this.unendingfaith_description.x = localX + this.descX;
			this.unendingfaith_description.y = localY + this.descY + 150;
		}, this);

		this.unendingfaith_upgrade0.setInteractive().on('pointerout', () => {
			this.unendingfaith_description.setVisible(false);
		}, this);

		// GET STATIS OF UPGRADE
		let lvl = localStorage.getItem("_UNENDINGFAITH_UPGRADE_LVL");


		// CHECK IF NOT CREATED YET
		let unendingfaith_stats = localStorage.getItem("_UNENDINGFAITH_UPGRADE_STATS");

		if(unendingfaith_stats == null){
			localStorage.setItem("_UNENDINGFAITH_UPGRADE_STATS", "0");
		}

		if(lvl == null){
			console.log("CREATING storage item...");
			localStorage.setItem("_UNENDINGFAITH_UPGRADE_LVL", "0");
		}else{

			lvl = localStorage.getItem("_UNENDINGFAITH_UPGRADE_LVL");
			console.log(lvl);
		}

		// SET FRAMES ACCORDING TO DATA LVL
		//this.unendingfaith_upgrade0
		if(lvl == "0"){
			this.unendingfaith_upgrade0.setFrame(0);
		}else if(lvl == "1"){	
			this.unendingfaith_upgrade0.setFrame(1);
			this.unendingfaithPrice.setText("4500");
			localStorage.setItem("_UNENDINGFAITH_UPGRADE_STATS", "5");
			localStorage.setItem("_UNENDINGFAITH_UPGRADE_LVL", "1");
		}else if(lvl == "2"){
			this.unendingfaith_upgrade0.setFrame(2);
			this.unendingfaithPrice.setText("8000");
			localStorage.setItem("_UNENDINGFAITH_UPGRADE_STATS", "8");
			localStorage.setItem("_UNENDINGFAITH_UPGRADE_LVL", "2");
		}else if(lvl == "3"){
			this.unendingfaith_upgrade0.setFrame(3);
			this.unendingfaithPrice.setText("11000");
			localStorage.setItem("_UNENDINGFAITH_UPGRADE_STATS", "14");
			localStorage.setItem("_UNENDINGFAITH_UPGRADE_LVL", "3");
		}else if(lvl == "4"){
			this.unendingfaith_upgrade0.setFrame(4);
			this.unendingfaithPrice.setText("15000");
			localStorage.setItem("_UNENDINGFAITH_UPGRADE_STATS", "19");
			localStorage.setItem("_UNENDINGFAITH_UPGRADE_LVL", "4");
		}else if(lvl == "5"){
			this.unendingfaith_upgrade0.setFrame(5);
			this.unendingfaithPrice.setText("");
			localStorage.setItem("_UNENDINGFAITH_UPGRADE_STATS", "27");
			localStorage.setItem("_UNENDINGFAITH_UPGRADE_LVL", "5");
		}

		if(lvl < 5){ this.unendingfaithButton.setInteractive(); }

		let price, res;

		this.unendingfaithButton.on('pointerup', () => {
			if(this.unendingfaith_upgrade0.frame.name == 0){
				price = parseInt(this.unendingfaithPrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.unendingfaithPrice.setText("4500");
					localStorage.setItem("_UNENDINGFAITH_UPGRADE_STATS", "5");
					localStorage.setItem("_UNENDINGFAITH_UPGRADE_LVL", "1");
					this.unendingfaith_upgrade0.setFrame(1);
				}
			}else if(this.unendingfaith_upgrade0.frame.name == 1){
				price = parseInt(this.unendingfaithPrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					localStorage.setItem("_UNENDINGFAITH_UPGRADE_STATS", "8");
					localStorage.setItem("_UNENDINGFAITH_UPGRADE_LVL", "2");
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.unendingfaith_upgrade0.setFrame(2);
					this.unendingfaithPrice.setText("8000");						
				}
			}else if(this.unendingfaith_upgrade0.frame.name == 2){
				price = parseInt(this.unendingfaithPrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					localStorage.setItem("_UNENDINGFAITH_UPGRADE_STATS", "14");
					localStorage.setItem("_UNENDINGFAITH_UPGRADE_LVL", "3");
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.unendingfaithPrice.setText("11000");
					this.unendingfaith_upgrade0.setFrame(3);
				}
			}else if(this.unendingfaith_upgrade0.frame.name == 3){
				price = parseInt(this.unendingfaithPrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					localStorage.setItem("_UNENDINGFAITH_UPGRADE_STATS", "19");
					localStorage.setItem("_UNENDINGFAITH_UPGRADE_LVL", "4");
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.unendingfaithPrice.setText("17000");
					this.unendingfaith_upgrade0.setFrame(4);	
				}
			}else if(this.unendingfaith_upgrade0.frame.name == 4){
				price = parseInt(this.unendingfaithPrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.unendingfaithPrice.setText("");
					localStorage.setItem("_UNENDINGFAITH_UPGRADE_STATS", "27");
					localStorage.setItem("_UNENDINGFAITH_UPGRADE_LVL", "5");
					this.unendingfaith_upgrade0.setFrame(5);
				}
			}
		}, this);

	}

	fortificationUpgrade(){
		// GET STATUS OF UPGRADE
		let lvl = localStorage.getItem("_FORTIFICATION_UPGRADE_LVL");

		// CHECK IF NOT CREATED YET
		let fortification_stats = localStorage.getItem("_FORTIFICATION_UPGRADE_STATS");

		if(fortification_stats == null){
			localStorage.setItem("_FORTIFICATION_UPGRADE_STATS", "0");
		}

		if(lvl == null){
			console.log("CREATING storage item...");
			localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "0");
		}else{

			lvl = localStorage.getItem("_FORTIFICATION_UPGRADE_LVL");
			console.log(lvl);
		}

		// SHOW DESCRIPTION
		//this.fortification_desc
		this.fortification_upgrade0.setInteractive();

		this.fortification_upgrade0.on('pointermove', (pointer, localX, localY) => {
			this.fortification_description.setVisible(true);
			this.fortification_description.x = localX + this.descX;
			this.fortification_description.y = localY + this.descY;
		}, this);

		this.fortification_upgrade0.setInteractive().on('pointerout', () => {
			this.fortification_description.setVisible(false);
		}, this);

		// SET FRAMES ACCORDING TO DATA LVL
		if(lvl == "0"){
			this.fortification_upgrade0.setFrame(0);
		}else if(lvl == "1"){	
			this.fortification_upgrade0.setFrame(1);
			this.fortificationPrice.setText("2500");
			localStorage.setItem("_FORTIFICATION_UPGRADE_STATS", "15");
			localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
		}else if(lvl == "2"){
			this.fortification_upgrade0.setFrame(2);
			this.fortificationPrice.setText("4000");
			localStorage.setItem("_FORTIFICATION_UPGRADE_STATS", "30");
			localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "2");
		}else if(lvl == "3"){
			this.fortification_upgrade0.setFrame(3);
			this.fortificationPrice.setText("5500");
			localStorage.setItem("_FORTIFICATION_UPGRADE_STATS", "55");
			localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "3");
		}else if(lvl == "4"){
			this.fortification_upgrade0.setFrame(4);
			this.fortificationPrice.setText("7000");
			localStorage.setItem("_FORTIFICATION_UPGRADE_STATS", "75");
			localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "4");
		}else if(lvl == "5"){
			this.fortification_upgrade0.setFrame(5);
			this.fortificationPrice.setText("");
			localStorage.setItem("_FORTIFICATION_UPGRADE_STATS", "90");
			localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "5");
		}

		if(lvl < 5){ this.fortificationButton.setInteractive(); }

		let price, res;

		this.fortificationButton.on('pointerup', () => {
			if(this.fortification_upgrade0.frame.name == 0){
				price = parseInt(this.fortificationPrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.fortificationPrice.setText("2500");
					localStorage.setItem("_FORTIFICATION_UPGRADE_STATS", "15");
					localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.fortification_upgrade0.setFrame(1);
				}
			}else if(this.fortification_upgrade0.frame.name == 1){
				price = parseInt(this.fortificationPrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					localStorage.setItem("_FORTIFICATION_UPGRADE_STATS", "30");
					localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "2");
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.fortification_upgrade0.setFrame(2);
					this.fortificationPrice.setText("4000");						
				}
			}else if(this.fortification_upgrade0.frame.name == 2){
				price = parseInt(this.fortificationPrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					localStorage.setItem("_FORTIFICATION_UPGRADE_STATS", "55");
					localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "3");
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.fortificationPrice.setText("5500");
					this.fortification_upgrade0.setFrame(3);
				}
			}else if(this.fortification_upgrade0.frame.name == 3){
				price = parseInt(this.fortificationPrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					localStorage.setItem("_FORTIFICATION_UPGRADE_STATS", "75");
					localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "4");
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.fortificationPrice.setText("7000");
					this.fortification_upgrade0.setFrame(4);	
				}
			}else if(this.fortification_upgrade0.frame.name == 4){
				price = parseInt(this.fortificationPrice.text);
				if(this.crowns >= price){
					res = this.crowns - price;
					// UPDATE CROWNS
					localStorage.setItem("crowns", res);
					//localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "1");
					this.fortificationPrice.setText("");
					localStorage.setItem("_FORTIFICATION_UPGRADE_STATS", "90");
					localStorage.setItem("_FORTIFICATION_UPGRADE_LVL", "5");
					this.fortification_upgrade0.setFrame(5);
				}
			}
		}, this);
	}

	update(){
		// GET CROWN VALUE
		this.crowns = parseInt(localStorage.getItem("crowns"));

		this.crownData.setText(this.crowns);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
