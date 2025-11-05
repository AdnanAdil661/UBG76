////////////////////////////////////////////////////////////
// CANVAS
////////////////////////////////////////////////////////////
var stage
var canvasW=0;
var canvasH=0;

/*!
 * 
 * START GAME CANVAS - This is the function that runs to setup game canvas
 * 
 */
function initGameCanvas(w,h){
	canvasW=w;
	canvasH=h;
	stage = new createjs.Stage("gameCanvas");
	
	createjs.Touch.enable(stage);
	stage.enableMouseOver(20);
	stage.mouseMoveOutside = true;
	
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", tick);	
}

var canvasContainer, mainContainer, gameContainer, inputContainer, inputHistoryContainer, resultContainer;
var bg, digitTop, digitBottom, logo, btnStart, screenDefault, screenReflect, screenAccessGranted, scoreBar1, scoreBar2, scoreBar3, screenTimer, screenTimerAlert, screenTimerMask, screenTimerAlertMask, screenScoreText, textEnter, textInstruction, screenTriedText, buttonReplay, btnFacebook, btnTwitter, btnWhatsapp, textFinalScore, textShare, textFinalScoreDisplay;
$.buttons = {};
$.input = {};
$.inputHistory = {};

/*!
 * 
 * BUILD GAME CANVAS ASSERTS - This is the function that runs to build game canvas asserts
 * 
 */
function buildGameCanvas(){
	canvasContainer = new createjs.Container();
	mainContainer = new createjs.Container();
	gameContainer = new createjs.Container();
	inputContainer = new createjs.Container();
	inputHistoryContainer = new createjs.Container();
	resultContainer = new createjs.Container();
	confirmContainer = new createjs.Container();
	optionsContainer = new createjs.Container();
	
	bg = new createjs.Shape();
	bg.graphics.beginFill(bgColour).drawRect(0, 0, canvasW, canvasH);
	
	digitTop = new createjs.Bitmap(loader.getResult('digitTiles'));
	digitBottom = new createjs.Bitmap(loader.getResult('digitTiles'));
	centerReg(digitTop);
	centerReg(digitBottom);
	digitTop.x = digitBottom.x = canvasW/2;
	digitTop.scaleX = digitTop.scaleY = -1;
	digitBottom.y = canvasH/100 * 80;
	
	digitTop.y = canvasH/100 * -25;
	digitBottom.y = canvasH/100 * 130;
	
	logo = new createjs.Bitmap(loader.getResult('logo'));
	centerReg(logo);
	logo.x = canvasW/2;
	logo.y = canvasH/100 * 50;
	
	btnStart = new createjs.Bitmap(loader.getResult('btnStart'));
	centerReg(btnStart);
	btnStart.x = canvasW/2;
	btnStart.y = canvasH/100 * 80;
	
	var buttonStartX = 140;
	var buttonX = buttonStartX;
	var buttonY = 520;
	var buttonSpace = 100;
	for(n=0;n<numbers_arr.length; n++){
		$.buttons['button'+n] = new createjs.Bitmap(loader.getResult('buttonNumber'));
		$.buttons['button'+n].name = numbers_arr[n];
		createHitarea($.buttons['button'+n]);
		centerReg($.buttons['button'+n]);
		
		$.buttons['button'+n].x = buttonX;
		$.buttons['button'+n].y = buttonY;
		buttonX += ($.buttons['button'+n].image.naturalWidth/2)+buttonSpace;
		if(n == 4){
			buttonX = buttonStartX;
			buttonY += 150;
		}
		
		$.buttons['text'+n] = new createjs.Text();
		$.buttons['text'+n].font = "80px chinese_rocksregular";
		$.buttons['text'+n].color = "#ffffff";
		$.buttons['text'+n].text = numbers_arr[n];
		$.buttons['text'+n].textAlign = "center";
		$.buttons['text'+n].textBaseline='alphabetic';
		$.buttons['text'+n].x = $.buttons['button'+n].x;
		$.buttons['text'+n].y = $.buttons['button'+n].y+18;
		
		gameContainer.addChild($.buttons['button'+n], $.buttons['text'+n]);
	}
	
	textEnter = new createjs.Bitmap(loader.getResult('textEnter'));
	centerReg(textEnter);
	textEnter.x = canvasW/100 * 48;
	textEnter.y = canvasH/100 * 32;
	
	textInstruction = new createjs.Bitmap(loader.getResult('textInstruction'));
	centerReg(textInstruction);
	textInstruction.x = canvasW/100 * 48;
	textInstruction.y = canvasH/100 * 32;
	
	screenDefault = new createjs.Bitmap(loader.getResult('screenDefault'));
	centerReg(screenDefault);
	screenDefault.x = canvasW/2;
	screenDefault.y = canvasH/100 * 34;
	
	screenReflect = new createjs.Bitmap(loader.getResult('screenReflect'));
	centerReg(screenReflect);
	screenReflect.x = canvasW/2;
	screenReflect.y = canvasH/100 * 34;
	
	screenAccessGranted = new createjs.Bitmap(loader.getResult('screenAccessGranted'));
	centerReg(screenAccessGranted);
	screenAccessGranted.x = canvasW/100 * 47.5;
	screenAccessGranted.y = canvasH/100 * 31;
	
	screenScoreText = new createjs.Text();
	screenScoreText.font = "60px hackedregular";
	screenScoreText.color = scoreTextColour;
	screenScoreText.text = '000';
	screenScoreText.textAlign = "center";
	screenScoreText.textBaseline='alphabetic';
	screenScoreText.x = canvasW/100 * 11.5;
	screenScoreText.y = canvasH/100 * 51;
	
	screenTriedText = new createjs.Text();
	screenTriedText.font = "30px hackedregular";
	screenTriedText.color = scoreTextColour;
	screenTriedText.text = inputTriedText;
	screenTriedText.textAlign = "left";
	screenTriedText.textBaseline='alphabetic';
	screenTriedText.x = canvasW/100 * 78.5;
	screenTriedText.y = canvasH/100 * 52;
	
	scoreBar1 = new createjs.Bitmap(loader.getResult('screenScoreBar'));
	scoreBar2 = new createjs.Bitmap(loader.getResult('screenScoreBar'));
	scoreBar3 = new createjs.Bitmap(loader.getResult('screenScoreBar'));
	centerReg(scoreBar1);
	centerReg(scoreBar2);
	centerReg(scoreBar3);
	scoreBar1.x = canvasW/100 * 7.4;
	scoreBar2.x = canvasW/100 * 11.4;
	scoreBar3.x = canvasW/100 * 15.4;
	scoreBar1.y = scoreBar2.y = scoreBar3.y = canvasW/100*20;
	
	screenTimer = new createjs.Bitmap(loader.getResult('screenTimer'));
	screenTimer.regX = screenTimer.naturalWidth/2;
	screenTimer.regY = screenTimer.naturalHeight;
	screenTimer.x = canvasW/100 * 89.2;
	screenTimer.y = canvasH/100 * 20.5;
	
	screenTimerAlert = new createjs.Bitmap(loader.getResult('screenTimerAlert'));
	screenTimerAlert.regX = screenTimerAlert.naturalWidth/2;
	screenTimerAlert.regY = screenTimerAlert.naturalHeight;
	screenTimerAlert.x = canvasW/100 * 89.2;
	screenTimerAlert.y = canvasH/100 * 20.5;
	
	screenTimerMask = new createjs.Shape();
	screenTimer.mask = screenTimerMask;
	
	screenTimerAlertMask = new createjs.Shape();
	screenTimerAlert.mask = screenTimerAlertMask;
	
	var totalWidth = (inputWidth * totalInputs)+(inputSpace * (totalInputs-1));
	var startX = (canvasW/100 * 53.5) - (totalWidth/2);
	
	for(n=0;n<totalInputs; n++){
		$.input['number'+n] = new createjs.Text();
		$.input['number'+n].font = "280px hackedregular";
		$.input['number'+n].color = inputTextColour;
		$.input['number'+n].text = '8';
		$.input['number'+n].textAlign = "center";
		$.input['number'+n].textBaseline='alphabetic';
		$.input['number'+n].x = startX
		$.input['number'+n].y = canvasH/100 * 44;
		startX+=inputWidth+inputSpace;
		
		$.input['barDefault'+n] = new createjs.Bitmap(loader.getResult('barDefault'));
		$.input['barWrong'+n] = new createjs.Bitmap(loader.getResult('barWrong'));
		$.input['barRemove'+n] = new createjs.Bitmap(loader.getResult('barRemove'));
		$.input['barCorrect'+n] = new createjs.Bitmap(loader.getResult('barCorrect'));
		$.input['barDefault'+n].name = 'default';
		$.input['barWrong'+n].name = 'wrong';
		$.input['barRemove'+n].name = 'remove';
		$.input['barCorrect'+n].name = 'correct';
		centerReg($.input['barDefault'+n]);
		centerReg($.input['barWrong'+n]);
		centerReg($.input['barRemove'+n]);
		centerReg($.input['barCorrect'+n]);
		$.input['barDefault'+n].x = $.input['barWrong'+n].x = $.input['barRemove'+n].x = $.input['barCorrect'+n].x = $.input['number'+n].x;
		$.input['barDefault'+n].y = $.input['barWrong'+n].y = $.input['barRemove'+n].y = $.input['barCorrect'+n].y = canvasH/100 * 51;
		$.input['barWrong'+n].alpha = $.input['barRemove'+n].alpha = $.input['barCorrect'+n].alpha = 0;
		
		inputContainer.addChild($.input['number'+n], $.input['barDefault'+n], $.input['barWrong'+n], $.input['barRemove'+n], $.input['barCorrect'+n]);
	}
	
	inputHistoryContainer.x = canvasW/100 * 79.8;
	inputHistoryContainer.y = canvasH/100 * 22.5;
	
	buttonReplay = new createjs.Bitmap(loader.getResult('btnReplay'));
	btnFacebook = new createjs.Bitmap(loader.getResult('btnFacebook'));
	btnTwitter = new createjs.Bitmap(loader.getResult('btnTwitter'));
	btnWhatsapp = new createjs.Bitmap(loader.getResult('btnWhatsapp'));
	centerReg(buttonReplay);
	centerReg(btnFacebook);
	centerReg(btnTwitter);
	centerReg(btnWhatsapp);
	
	btnFacebook.x = canvasW/100 * 35;
	btnTwitter.x = canvasW/2;
	btnWhatsapp.x = canvasW/100 * 65;
	btnFacebook.y = btnTwitter.y = btnWhatsapp.y = canvasH/100 * 70;
	
	buttonReplay.x = canvasW/2;
	buttonReplay.y = canvasH/100 * 87;
	
	textFinalScore = new createjs.Bitmap(loader.getResult('textFinalScore'));
	textShare = new createjs.Bitmap(loader.getResult('textShare'));
	centerReg(textFinalScore);
	centerReg(textShare);
	
	textFinalScore.x = canvasW/2;
	textFinalScore.y = canvasH/100 * 25;
	textShare.x = canvasW/2;
	textShare.y = canvasH/100 * 60;
	
	textFinalScoreDisplay = new createjs.Text();
	textFinalScoreDisplay.font = "230px chinese_rocksregular";
	textFinalScoreDisplay.color = scoreTextColour;
	textFinalScoreDisplay.text = '100';
	textFinalScoreDisplay.textAlign = "center";
	textFinalScoreDisplay.textBaseline='alphabetic';
	textFinalScoreDisplay.x = canvasW/2;
	textFinalScoreDisplay.y = canvasH/100 * 53;
	
	//option
	buttonFullscreen = new createjs.Bitmap(loader.getResult('buttonFullscreen'));
	centerReg(buttonFullscreen);
	buttonSoundOn = new createjs.Bitmap(loader.getResult('buttonSoundOn'));
	centerReg(buttonSoundOn);
	buttonSoundOff = new createjs.Bitmap(loader.getResult('buttonSoundOff'));
	centerReg(buttonSoundOff);
	buttonSoundOn.visible = false;
	buttonExit = new createjs.Bitmap(loader.getResult('buttonExit'));
	centerReg(buttonExit);
	buttonSettings = new createjs.Bitmap(loader.getResult('buttonSettings'));
	centerReg(buttonSettings);
	
	createHitarea(buttonFullscreen);
	createHitarea(buttonSoundOn);
	createHitarea(buttonSoundOff);
	createHitarea(buttonExit);
	createHitarea(buttonSettings);
	optionsContainer.addChild(buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonExit);
	optionsContainer.visible = false;
	
	//exit
	itemExit = new createjs.Bitmap(loader.getResult('itemExit'));
	centerReg(itemExit);
	itemExit.x = canvasW/2;
	itemExit.y = canvasH/2;
	
	buttonConfirm = new createjs.Bitmap(loader.getResult('buttonConfirm'));
	centerReg(buttonConfirm);
	buttonConfirm.x = canvasW/100* 35;
	buttonConfirm.y = canvasH/100 * 63;
	
	buttonCancel = new createjs.Bitmap(loader.getResult('buttonCancel'));
	centerReg(buttonCancel);
	buttonCancel.x = canvasW/100 * 65;
	buttonCancel.y = canvasH/100 * 63;
	
	confirmMessageTxt = new createjs.Text();
	confirmMessageTxt.font = "50px hackedregular";
	confirmMessageTxt.color = "#fff";
	confirmMessageTxt.textAlign = "center";
	confirmMessageTxt.textBaseline='alphabetic';
	confirmMessageTxt.text = exitMessage;
	confirmMessageTxt.x = canvasW/2;
	confirmMessageTxt.y = canvasH/100 *44;
	
	confirmContainer.addChild(itemExit, buttonConfirm, buttonCancel, confirmMessageTxt);
	confirmContainer.visible = false;
	
	mainContainer.addChild(logo, btnStart);
	gameContainer.addChild(screenDefault, textEnter, textInstruction, scoreBar1, scoreBar2, scoreBar3, screenTimer, screenTimerAlert, screenScoreText, screenTriedText, inputContainer, inputHistoryContainer, screenAccessGranted, screenReflect);
	resultContainer.addChild(buttonReplay, textFinalScore, textFinalScoreDisplay);
	if(shareEnable){
		resultContainer.addChild(btnFacebook, btnTwitter, btnWhatsapp, textShare);
	}
	canvasContainer.addChild(bg, digitTop, digitBottom, mainContainer, gameContainer, resultContainer, confirmContainer, optionsContainer, buttonSettings);
	stage.addChild(canvasContainer);
	
	resizeCanvas();
}


/*!
 * 
 * RESIZE GAME CANVAS - This is the function that runs to resize game canvas
 * 
 */
function resizeCanvas(){
 	if(canvasContainer!=undefined){
		buttonSettings.x = (canvasW - offset.x) - 60;
		buttonSettings.y = offset.y + 45;
		
		var distanceNum = 75;
		if(curPage != 'game'){
			buttonExit.visible = false;
			buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;
			buttonSoundOn.x = buttonSoundOff.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+(distanceNum);
			
			buttonFullscreen.x = buttonSettings.x;
			buttonFullscreen.y = buttonSettings.y+(distanceNum*2);
		}else{
			buttonExit.visible = true;
			buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;
			buttonSoundOn.x = buttonSoundOff.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+(distanceNum);
			
			buttonFullscreen.x = buttonSettings.x;
			buttonFullscreen.y = buttonSettings.y+(distanceNum*2);
			
			buttonExit.x = buttonSettings.x;
			buttonExit.y = buttonSettings.y+(distanceNum*3);
		}
	}
}

/*!
 * 
 * REMOVE GAME CANVAS - This is the function that runs to remove game canvas
 * 
 */
 function removeGameCanvas(){
	 stage.autoClear = true;
	 stage.removeAllChildren();
	 stage.update();
	 createjs.Ticker.removeEventListener("tick", tick);
	 createjs.Ticker.removeEventListener("tick", stage);
 }

/*!
 * 
 * CANVAS LOOP - This is the function that runs for canvas loop
 * 
 */ 
function tick(event) {
	updateGame();
	stage.update(event);
}

/*!
 * 
 * CANVAS MISC FUNCTIONS
 * 
 */
function centerReg(obj){
	obj.regX=obj.image.naturalWidth/2;
	obj.regY=obj.image.naturalHeight/2;
}

function createHitarea(obj){
	obj.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(0, 0, obj.image.naturalWidth, obj.image.naturalHeight));	
}