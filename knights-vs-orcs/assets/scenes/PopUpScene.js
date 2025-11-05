
// You can write more code here

/* START OF COMPILED CODE */

class PopUpScene extends Phaser.Scene {

	constructor() {
		super("PopUpScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// t1
		const t1 = this.add.image(968, 548, "t1");
		t1.scaleX = 0;
		t1.scaleY = 0;

		// t2
		const t2 = this.add.image(968, 548, "t2");
		t2.scaleX = 0;
		t2.scaleY = 0;

		// won_window
		const won_window = this.add.image(968, 548, "won_window");
		won_window.scaleX = 0;
		won_window.scaleY = 0;

		// lost_window
		const lost_window = this.add.image(968, 548, "lost_window");
		lost_window.scaleX = 0;
		lost_window.scaleY = 0;

		// new_character_1
		const new_character_1 = this.add.image(968, 548, "2");
		new_character_1.scaleX = 0;
		new_character_1.scaleY = 0;

		// countdown
		const countdown = this.add.sprite(946, 510, "countdown", 2);

		// new_character_2
		const new_character_2 = this.add.image(968, 548, "3");
		new_character_2.scaleX = 0;
		new_character_2.scaleY = 0;

		// new_character_3
		const new_character_3 = this.add.image(968, 548, "4");
		new_character_3.scaleX = 0;
		new_character_3.scaleY = 0;

		// msg_box
		const msg_box = this.add.image(968, 548, "6");
		msg_box.scaleX = 0;
		msg_box.scaleY = 0;

		// new_character_4
		const new_character_4 = this.add.image(968, 548, "1");
		new_character_4.scaleX = 0;
		new_character_4.scaleY = 0;

		// upgrade_window
		const upgrade_window = this.add.image(968, 548, "7");
		upgrade_window.scaleX = 0;
		upgrade_window.scaleY = 0;

		// upgrade_button
		const upgrade_button = this.add.image(1070, 723, "upgrade_button");
		upgrade_button.visible = false;

		// new_character_5
		const new_character_5 = this.add.image(968, 548, "5");
		new_character_5.scaleX = 0;
		new_character_5.scaleY = 0;

		// msg_box_1
		const msg_box_1 = this.add.image(968, 548, "8");
		msg_box_1.scaleX = 0;
		msg_box_1.scaleY = 0;

		// new_skill_window
		const new_skill_window = this.add.image(942, 562, "new_skill_window");
		new_skill_window.scaleX = 0;
		new_skill_window.scaleY = 0;

		// skill_arrow
		const skill_arrow = this.add.image(1004, 96, "arrow_t1");
		skill_arrow.angle = 90;
		skill_arrow.visible = false;

		// window_1
		const window_1 = this.add.image(989, 545, "window_1");
		window_1.scaleX = 0;
		window_1.scaleY = 0;

		// text
		const text = this.add.text(804, 354, "", {});
		text.visible = false;
		text.text = "Next Round: ";
		text.setStyle({"fontFamily":"EnchantedLand","fontSize":"46px"});

		// text_1
		const text_1 = this.add.text(882, 234, "", {});
		text_1.visible = false;
		text_1.text = "Round Finished!";
		text_1.setStyle({"fontFamily":"EnchantedLand","fontSize":"56px"});

		// text_2
		const text_2 = this.add.text(804, 471, "", {});
		text_2.visible = false;
		text_2.text = "Coins Collected: ";
		text_2.setStyle({"fontFamily":"EnchantedLand","fontSize":"46px"});

		// text_2_1
		const text_2_1 = this.add.text(803, 582, "", {});
		text_2_1.visible = false;
		text_2_1.text = "Crowns Collected:";
		text_2_1.setStyle({"fontFamily":"EnchantedLand","fontSize":"46px"});

		// current_round
		const current_round = this.add.text(960, 357, "", {});
		current_round.visible = false;
		current_round.text = "0";
		current_round.setStyle({"fontFamily":"EnchantedLand","fontSize":"46px"});

		// coins_collected
		const coins_collected = this.add.text(1002, 474, "", {});
		coins_collected.visible = false;
		coins_collected.text = "0";
		coins_collected.setStyle({"fontFamily":"EnchantedLand","fontSize":"46px"});

		// crowns_collected
		const crowns_collected = this.add.text(1035, 585, "", {});
		crowns_collected.visible = false;
		crowns_collected.text = "0";
		crowns_collected.setStyle({"fontFamily":"EnchantedLand","fontSize":"46px"});

		// restart_icon0
		const restart_icon0 = this.add.image(576, 788, "restart_icon", 0);
		restart_icon0.visible = false;

		// _next_stage_icon0
		const _next_stage_icon0 = this.add.image(974, 786, "_next_stage_icon", 0);
		_next_stage_icon0.visible = false;

		// quit_icon0
		const quit_icon0 = this.add.image(1385, 786, "quit_icon", 0);
		quit_icon0.visible = false;

		// restart_icon0_1
		const restart_icon0_1 = this.add.sprite(729, 783, "restart_icon", 0);
		restart_icon0_1.visible = false;

		// quit_icon0_1
		const quit_icon0_1 = this.add.sprite(1219, 783, "quit_icon", 0);
		quit_icon0_1.visible = false;

		// endless_next
		const endless_next = this.add.sprite(1123, 832, "_next_stage_icon", 0);
		endless_next.visible = false;

		// endless_exit
		const endless_exit = this.add.sprite(864, 832, "quit_icon", 0);
		endless_exit.visible = false;

		// text_3
		const text_3 = this.add.text(814, 720, "", {});
		text_3.visible = false;
		text_3.text = "(Click anywhere to close this window)";
		text_3.setStyle({"fontFamily":"EnchantedLand","fontSize":"56px"});

		// final_msg
		const final_msg = this.add.image(942, 562, "final_msg");
		final_msg.scaleX = 0;
		final_msg.scaleY = 0;

		// lists
		const endless_win_list = [window_1, text_1, current_round, text, text_2, coins_collected, text_2_1, crowns_collected, endless_next, endless_exit]

		this.t1 = t1;
		this.t2 = t2;
		this.won_window = won_window;
		this.lost_window = lost_window;
		this.new_character_1 = new_character_1;
		this.countdown = countdown;
		this.new_character_2 = new_character_2;
		this.new_character_3 = new_character_3;
		this.msg_box = msg_box;
		this.new_character_4 = new_character_4;
		this.upgrade_window = upgrade_window;
		this.upgrade_button = upgrade_button;
		this.new_character_5 = new_character_5;
		this.msg_box_1 = msg_box_1;
		this.new_skill_window = new_skill_window;
		this.skill_arrow = skill_arrow;
		this.window_1 = window_1;
		this.current_round = current_round;
		this.coins_collected = coins_collected;
		this.crowns_collected = crowns_collected;
		this.restart_icon0 = restart_icon0;
		this._next_stage_icon0 = _next_stage_icon0;
		this.quit_icon0 = quit_icon0;
		this.restart_icon0_1 = restart_icon0_1;
		this.quit_icon0_1 = quit_icon0_1;
		this.endless_next = endless_next;
		this.endless_exit = endless_exit;
		this.text_3 = text_3;
		this.final_msg = final_msg;
		this.endless_win_list = endless_win_list;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	t1;
	/** @type {Phaser.GameObjects.Image} */
	t2;
	/** @type {Phaser.GameObjects.Image} */
	won_window;
	/** @type {Phaser.GameObjects.Image} */
	lost_window;
	/** @type {Phaser.GameObjects.Image} */
	new_character_1;
	/** @type {Phaser.GameObjects.Sprite} */
	countdown;
	/** @type {Phaser.GameObjects.Image} */
	new_character_2;
	/** @type {Phaser.GameObjects.Image} */
	new_character_3;
	/** @type {Phaser.GameObjects.Image} */
	msg_box;
	/** @type {Phaser.GameObjects.Image} */
	new_character_4;
	/** @type {Phaser.GameObjects.Image} */
	upgrade_window;
	/** @type {Phaser.GameObjects.Image} */
	upgrade_button;
	/** @type {Phaser.GameObjects.Image} */
	new_character_5;
	/** @type {Phaser.GameObjects.Image} */
	msg_box_1;
	/** @type {Phaser.GameObjects.Image} */
	new_skill_window;
	/** @type {Phaser.GameObjects.Image} */
	skill_arrow;
	/** @type {Phaser.GameObjects.Image} */
	window_1;
	/** @type {Phaser.GameObjects.Text} */
	current_round;
	/** @type {Phaser.GameObjects.Text} */
	coins_collected;
	/** @type {Phaser.GameObjects.Text} */
	crowns_collected;
	/** @type {Phaser.GameObjects.Image} */
	restart_icon0;
	/** @type {Phaser.GameObjects.Image} */
	_next_stage_icon0;
	/** @type {Phaser.GameObjects.Image} */
	quit_icon0;
	/** @type {Phaser.GameObjects.Sprite} */
	restart_icon0_1;
	/** @type {Phaser.GameObjects.Sprite} */
	quit_icon0_1;
	/** @type {Phaser.GameObjects.Sprite} */
	endless_next;
	/** @type {Phaser.GameObjects.Sprite} */
	endless_exit;
	/** @type {Phaser.GameObjects.Text} */
	text_3;
	/** @type {Phaser.GameObjects.Image} */
	final_msg;
	/** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Text|Phaser.GameObjects.Sprite>} */
	endless_win_list;

	/* START-USER-CODE */

	// Write your code here

	create(data) {

		this.ui = this.sound.add("ui");
		this.scene.bringToTop();
		this.editorCreate();
		this.t1.setScale(0);
		this.won_window.setScale(0);
		this.countdown.setVisible(false);
		if(data.tutorialMode){	
			this.tutorialWindow(data);
		}
		this.cdSND = this.sound.add("cdsnd");
		if(data.type == "WIN"){
			this.showWINwindow(data);
		}else if(data.type == "LOST"){
			this.showLOSTwindow(data);
		}else if(data.type == "show_character_1"){
			this.showCharacter(data, data.type);
		}else if(data.type == "show_character_2"){
			this.showCharacter(data, data.type);
		}else if(data.type == "show_character_3"){
			this.showCharacter(data, data.type);
		}else if(data.type == "show_character_4"){
			this.showCharacter(data, data.type);
		}else if(data.type == "show_character_5"){
			this.showCharacter(data, data.type);
		}else if(data.type == "countdown"){
			this.countdown.setVisible(true);
			this.goCD(data.scene);
		}else if(data.type == "present_upgrade"){
			this.goShowUpgrade(data.scene);
		}else if(data.type == "final_charge"){
			this.showFinalCharge(data.scene);
		}else if(data.type == "endless_win"){
			this.goEndlessWin(data.scene);
		}else if(data.type == "final_message"){
			this.finalMessage(data.scene);
		}

	}

	finalMessage(myscene){
		this.tweens.add({
			targets: this.final_msg,
			scale: 1,
			ease: 'Power1',
			duration: 500,
			onComplete: () => {
				this.final_msg.setInteractive();
			},
			onCompleteScope: this
		});	
		this.final_msg.on('pointerup', () => {
		this.ui.play();
		this.tweens.add({
			targets: this.final_msg,
			scale: 0,
			ease: 'Power1',
			duration: 500,
			onComplete: () => {
				myscene.stop();
				this.scene.start("CreditsScene");
			},
			onCompleteScope: this
		});					
		}, this);		
	}

	goEndlessWin(data){
		_ROUNDS++;
		castleHP+=1000;
		this.tweens.add({
			targets: this.window_1,
			scale: 1,
			ease: 'Power1',
			duration: 500,
			onComplete: () => {
				this.endless_win_list.forEach((items, index) => {
					items.setVisible(true);
				});

				// CHECK HOW MANY COLLECTED COINS
				let col_coins = parseInt(data.scene.coinText.text);
				this.coins_collected.setText(col_coins);
				let crowns = parseInt(localStorage.getItem("crowns"));
				if(isNaN(crowns) || crowns == undefined || crowns == null){
					localStorage.setItem("crowns", "0");
				}else{
					// RE-FETCH
					crowns = parseInt(localStorage.getItem("crowns"));
				}
				this.crowns_collected.setText(crowns);
				_GLOBAL_COINS = col_coins + 1000;
				this.current_round.setText(_ROUNDS);

				this.endless_next.setInteractive();
				this.endless_exit.setInteractive();

				this.endless_next.on('pointerup', () => {
					this.endless_next.setFrame(1);
					data.restart();
					data.scene.battle_music.stop();
					data.scene.loose.stop();
					this.scene.stop();
				}, this);

				this.endless_next.on('pointerover', () => {
					this.endless_next.setFrame(1);
				}, this);

				this.endless_next.on('pointerout', () => {
					this.endless_next.setFrame(0);
				}, this);

				this.endless_next.on('pointerdown', () => {
					this.endless_next.setFrame(2);
				}, this);

				this.endless_exit.on('pointerup', () => {
					this.endless_next.setFrame(1);
					data.scene.battle_music.stop();
					this.scene.start("MainMenu");
				}, this);

				this.endless_exit.on('pointerover', () => {
					this.endless_exit.setFrame(1);
				}, this);

				this.endless_exit.on('pointerout', () => {
					this.endless_exit.setFrame(0);
				}, this);

				this.endless_exit.on('pointerdown', () => {
					this.endless_exit.setFrame(2);
				}, this);
			},
			onCompleteScope: this
		});			

	}

	showFinalCharge(data){
		this.tweens.add({
			targets: this.msg_box_1,
			scale: 1,
			ease: 'Power1',
			duration: 500,
			onComplete: () => {
				this.msg_box_1.setInteractive();
				this.text_3.setVisible(true);
		},
			onCompleteScope: this
		});	
		this.msg_box_1.on('pointerup', () => {
			this.ui.play();
		this.tweens.add({
			targets: this.msg_box_1,
			scale: 0,
			ease: 'Power1',
			duration: 500,
			onComplete: () => {
				data.resume();
				this.text_3.setVisible(false);
				this.scene.stop();
			},
			onCompleteScope: this
		});					
		}, this);		
	}

	goShowUpgrade(data){
		this.upgrade_button.setInteractive().on('pointerup', () => {
			data.stop();
			this.scene.start("UpgradeScene");
			this.scene.stop();
		}, this);

		this.tweens.add({
			targets: this.upgrade_window,
			scale: 1,
			ease: 'Power1',
			duration: 500,
            onComplete: () => {
				this.upgrade_button.setVisible(true);
            },
            onCompleteScope: this,
		});	 
	}

	goCD(data){
		this.cdSND.play();
		this.tweens.add({
			targets: this.countdown,
			scale: 0.5,
			ease: 'Power1',
			duration: 1000,
            onComplete: () => {
				this.countdown.setVisible(false);
				this.countdown.setFrame(1);
				this.countDown(2, data);

            },
            onCompleteScope: this,
		});	 		
	}

	countDown(num, data){
		this.cdSND.play();
		this.countdown.setScale(1);
		this.countdown.setVisible(true);
		if(num == 2){
			this.tweens.add({
				targets: this.countdown,
				scale: 0.5,
				ease: 'Power1',
				duration: 1000,
				onComplete: () => {
					this.countdown.setVisible(false);
					this.countdown.setFrame(0);
					this.countDown(1, data);
				},
				onCompleteScope: this,
			});	 
		}else if(num == 1){
			this.tweens.add({
				targets: this.countdown,
				scale: 0.5,
				ease: 'Power1',
				duration: 1000,
				onComplete: () => {
					this.countdown.setVisible(false);
					data.resume();
					this.scene.stop();
					//this.countDown(0);
				},
				onCompleteScope: this,
			});				
		}		
	}

	showCharacter(data, type){
		if(type == "show_character_1"){
			this.new_character_1.setInteractive();
			this.tweens.add({
				targets: this.new_character_1,
				scale: 1,
				ease: 'Power1',
				duration: 500,
				onComplete: () => {
				},
				onCompleteScope: this
			});	
			this.new_character_1.on('pointerup', () => {
				this.ui.play();
			this.tweens.add({
				targets: this.new_character_1,
				scale: 0,
				ease: 'Power1',
				duration: 500,
				onComplete: () => {
					this.countdown.setVisible(true);
					this.goCD(data.scene);
				},
				onCompleteScope: this
			});					
			}, this);
		}else if(type == "show_character_2"){
			this.new_character_2.setInteractive();
			this.tweens.add({
				targets: this.new_character_2,
				scale: 1,
				ease: 'Power1',
				duration: 500,
				onComplete: () => {
				},
				onCompleteScope: this
			});	
			this.new_character_2.on('pointerup', () => {
				this.ui.play();
			this.tweens.add({
				targets: this.new_character_2,
				scale: 0,
				ease: 'Power1',
				duration: 500,
				onComplete: () => {
					//this.countdown.setVisible(true);
					//this.goCD(data.scene);
					this.tweens.add({
						targets: this.new_skill_window,
						scale: 0.7,
						ease: 'Power1',
						duration: 500,
						onComplete: () => {
							this.skill_arrow.setVisible(true);
							this.tweens.add({
								targets: this.skill_arrow,
								x: this.skill_arrow.x + 15,
								yoyo: true,
								duration: 500,
								repeat: -1
							});
							this.new_skill_window.setInteractive().on('pointerup', () => {
								this.ui.play();
								this.tweens.add({
									targets: this.new_skill_window,
									scale: 0,
									ease: 'Power1',
									duration: 500,
									onComplete: () => {
										this.countdown.setVisible(true);
										this.goCD(data.scene);										
									},
									onCompleteScope: this
								});									
							}, this);

						},
						onCompleteScope: this
					}, this);
				},
				onCompleteScope: this
			});					
			}, this);			
		}else if(type == "show_character_3"){
			this.new_character_3.setInteractive();
			this.tweens.add({
				targets: this.new_character_3,
				scale: 1,
				ease: 'Power1',
				duration: 500,
				onComplete: () => {
				},
				onCompleteScope: this
			});	
			this.new_character_3.on('pointerup', () => {
				this.ui.play();
			this.tweens.add({
				targets: this.new_character_3,
				scale: 0,
				ease: 'Power1',
				duration: 500,
				onComplete: () => {
					this.countdown.setVisible(true);
					this.goCD(data.scene);
				},
				onCompleteScope: this
			});					
			}, this);			
		}else if(type == "show_character_4"){
			this.msg_box.setInteractive();
			this.new_character_4.setInteractive().on('pointerup', () => {
				this.ui.play();
				this.tweens.add({
					targets: this.new_character_4,
					scale: 0,
					ease: 'Power1',
					duration: 500,
					onComplete: () => {
						this.countdown.setVisible(true);
						this.goCD(data.scene);						
					},
					onCompleteScope: this
				});	
			});
			this.tweens.add({
				targets: this.msg_box,
				scale: 1,
				ease: 'Power1',
				duration: 500,
				onComplete: () => {

				},
				onCompleteScope: this
			});		
			this.msg_box.on("pointerup", () => {
				this.ui.play();
				this.tweens.add({
					targets: this.msg_box,
					scale: 0,
					ease: 'Power1',
					duration: 500,
					onComplete: () => {
						this.tweens.add({
							targets: this.new_character_4,
							scale: 1,
							ease: 'Power1',
							duration: 500,
							onComplete: () => {

							},
							onCompleteScope: this
						});		
					},
					onCompleteScope: this
				});						
			}, this);		
		}else if(type == "show_character_5"){
			this.new_character_5.setInteractive();
			this.tweens.add({
				targets: this.new_character_5,
				scale: 1,
				ease: 'Power1',
				duration: 500,
				onComplete: () => {
				},
				onCompleteScope: this
			});	
			this.new_character_5.on('pointerup', () => {
				this.ui.play();
			this.tweens.add({
				targets: this.new_character_5,
				scale: 0,
				ease: 'Power1',
				duration: 500,
				onComplete: () => {
					this.countdown.setVisible(true);
					this.goCD(data.scene);
				},
				onCompleteScope: this
			});					
			}, this);				
		}
	}

	showLOSTwindow(data){
		this.tweens.add({
			targets:this.lost_window,
			scale: 1,
			ease: 'Power1',
			duration: 500,
			onComplete: () => {
				this.quit_icon0_1.setVisible(true);
				this.restart_icon0_1.setVisible(true);
			},
			onCompleteScope: this
		});	

		this.quit_icon0_1.setInteractive();
		this.restart_icon0_1.setInteractive();

		this.quit_icon0_1.on('pointerup', () => {

			this.quit_icon0_1.setFrame(0);
			this.ui.play();
			data.scene.scene.loose.stop();
			data.scene.scene.battle_music.stop();
			data.scene.start("MainMenu");

			this.scene.stop();
		}, this);

		this.quit_icon0_1.on('pointerdown', () => {
			this.quit_icon0_1.setFrame(2);
		}, this);

		this.quit_icon0_1.on('pointerover', () => {
			this.quit_icon0_1.setFrame(1);
		}, this);

		this.quit_icon0_1.on('pointerout', () => {
			this.quit_icon0_1.setFrame(0);
		}, this);


		this.restart_icon0_1.on('pointerup', () => {
			this.restart_icon0_1.setFrame(0);
			this.ui.play();
			data.scene.restart();
			this.scene.stop();
		}, this);

		this.restart_icon0_1.on('pointerdown', () => {
			this.restart_icon0_1.setFrame(2);
		}, this);

		this.restart_icon0_1.on('pointerover', () => {
			this.restart_icon0_1.setFrame(1);
		}, this);

		this.restart_icon0_1.on('pointerout', () => {
			this.restart_icon0_1.setFrame(0);
		}, this);
	}

	showWINwindow(data){
		this.tweens.add({
			targets:this.won_window,
			scale: 1,
			ease: 'Power1',
			duration: 500,
			onComplete: () => {
				this._next_stage_icon0.setVisible(true);
				this.quit_icon0.setVisible(true);
				this.restart_icon0.setVisible(true);
			},
			onCompleteScope: this
		});		

		// MAKE THE BUTTONS INTERACTIVE
		this._next_stage_icon0.setInteractive();
		this.quit_icon0.setInteractive();
		this.restart_icon0.setInteractive();

		this._next_stage_icon0.on('pointerup', () => {
			this._next_stage_icon0.setFrame(0);
			this.ui.play();
			data.scene.stop();
			this.scene.start(data.nextScene);
		}, this);

		this._next_stage_icon0.on('pointerdown', () => {
			this._next_stage_icon0.setFrame(2);
		}, this);

		this._next_stage_icon0.on('pointerover', () => {
			this._next_stage_icon0.setFrame(1);
		}, this);

		this._next_stage_icon0.on('pointerout', () => {
			this._next_stage_icon0.setFrame(0);
		}, this);


		this.quit_icon0.on('pointerup', () => {
			this.quit_icon0.setFrame(0);
			this.ui.play();
			data.scene.scene.loose.stop();
			data.scene.scene.battle_music.stop();
			data.scene.start("MainMenu");
			this.scene.stop();
		}, this);

		this.quit_icon0.on('pointerdown', () => {
			this.quit_icon0.setFrame(2);
		}, this);

		this.quit_icon0.on('pointerover', () => {
			this.quit_icon0.setFrame(1);
		}, this);

		this.quit_icon0.on('pointerout', () => {
			this.quit_icon0.setFrame(0);
		}, this);


		this.restart_icon0.on('pointerup', () => {
			this.restart_icon0.setFrame(0);
			this.ui.play();
			data.scene.restart();
			this.scene.stop();
		}, this);

		this.restart_icon0.on('pointerdown', () => {
			this.restart_icon0.setFrame(2);
		}, this);

		this.restart_icon0.on('pointerover', () => {
			this.restart_icon0.setFrame(1);
		}, this);

		this.restart_icon0.on('pointerout', () => {
			this.restart_icon0.setFrame(0);
		}, this);
	}

	tutorialWindow(data){
		this.t1.setInteractive();
		this.t1.on('pointerup', () => {
			this.tweens.add({
				targets: this.t1,
				scale: 0,
				ease: 'Power1',
				duration: 500,
				onComplete: () => {
					this.scene.resume(data.sceneName);
					data.scene.arrow_t1_1.setVisible(true);
					this.scene.stop();
				},
				onCompleteScope: this
			});	
			this.ui.play();
		}, this);

		this.t2.setInteractive();
		this.t2.on('pointerup', () => {
			this.tweens.add({
				targets: this.t2,
				scale: 0,
				ease: 'Power1',
				duration: 500,
				onComplete: () => {
					this.scene.resume(data.sceneName);
					this.scene.stop();
				},
				onCompleteScope: this
			});	
			this.ui.play();

		}, this);


		if(data.scene.stepsTut == 0){

			this.tweens.add({
				targets:this.t1,
				scale: 1,
				ease: 'Power1',
				duration: 500,
				onComplete: () => {
					data.scene.stepsTut = 1;
				},
				onCompleteScope: this
			});				
		}

		if(data.scene.stepsTut == 1){

			this.tweens.add({
				targets:this.t2,
				scale: 1,
				ease: 'Power1',
				duration: 500,
				onComplete: () => {
					data.scene.stepsTut = 2;
				},
				onCompleteScope: this
			});				
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
