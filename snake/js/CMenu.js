function CMenu(){
    
    var _oDifficultyText;
    var _oModeSurvival;
    var _oModeAdventure;
    
    var _oBg;
    var _oAudioToggle;
    var _oButInfo;
    var _oButFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    
    var _pStartPosAudio;
    var _pStartPosInfo;
    var _pStartPosFullscreen;
    
    this._init = function(){
        
        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_menu'));
        s_oStage.addChild(_oBg);
        
        _oDifficultyText = new createjs.Text(TEXT_DIFFICULTY," 50px "+ FONT, "#600101");
        _oDifficultyText.x = CANVAS_WIDTH/2;
        _oDifficultyText.y = 170+650;
        _oDifficultyText.textAlign = "center";
        _oDifficultyText.textBaseline = "alphabetic";
        _oDifficultyText.lineWidth = 1000;
        _oDifficultyText.outline = 8;
        s_oStage.addChild(_oDifficultyText);
        
        _oDifficultyText = new createjs.Text(TEXT_DIFFICULTY," 50px "+ FONT, "#ffffff");
        _oDifficultyText.x = CANVAS_WIDTH/2;
        _oDifficultyText.y = 170+650;
        _oDifficultyText.textAlign = "center";
        _oDifficultyText.textBaseline = "alphabetic";
        _oDifficultyText.lineWidth = 1000;
        s_oStage.addChild(_oDifficultyText);
        
        var oModePos = {x: CANVAS_WIDTH/2, y: 825};
        
        var oSpriteSurvival = s_oSpriteLibrary.getSprite('survival');
        _oModeSurvival = new CToggle(oModePos.x - 400,oModePos.y,oSpriteSurvival,true);
        _oModeSurvival.addEventListener(ON_MOUSE_UP, this._onModeSurvival, this, 0);
        
        var oTextSurvival =  new createjs.Text(TEXT_SURVIVAL,"50px "+FONT, "#600101");
        oTextSurvival.x = oModePos.x - 400;
        oTextSurvival.y = oModePos.y + 130;
        oTextSurvival.textAlign = "center";
        oTextSurvival.textBaseline = "alphabetic";
        oTextSurvival.outline = 8;
        s_oStage.addChild(oTextSurvival);
        
        var oTextSurvival =  new createjs.Text(TEXT_SURVIVAL,"50px "+FONT, "#ffffff");
        oTextSurvival.x = oModePos.x - 400;
        oTextSurvival.y = oModePos.y + 130;
        oTextSurvival.textAlign = "center";
        oTextSurvival.textBaseline = "alphabetic";
        s_oStage.addChild(oTextSurvival);
        
        var oSpriteAdventure = s_oSpriteLibrary.getSprite('adventure');
        _oModeAdventure = new CToggle(oModePos.x + 400,oModePos.y,oSpriteAdventure,true);
        _oModeAdventure.addEventListener(ON_MOUSE_UP, this._onModeAdventure, this);
        
        var oTextAdventure =  new createjs.Text(TEXT_ADVENTURE,"50px "+FONT, "#600101");
        oTextAdventure.x = oModePos.x + 400;
        oTextAdventure.y = oModePos.y + 130;
        oTextAdventure.textAlign = "center";
        oTextAdventure.textBaseline = "alphabetic";
        oTextAdventure.outline = 8;
        s_oStage.addChild(oTextAdventure);
        
        var oTextAdventure =  new createjs.Text(TEXT_ADVENTURE,"50px "+FONT, "#ffffff");
        oTextAdventure.x = oModePos.x + 400;
        oTextAdventure.y = oModePos.y + 130;
        oTextAdventure.textAlign = "center";
        oTextAdventure.textBaseline = "alphabetic";
        s_oStage.addChild(oTextAdventure);
        
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {x: CANVAS_WIDTH - oSprite.height/2 - 10, y: (oSprite.height/2) + 10};
            
            _oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,oSprite,s_bAudioActive);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);    
        }
        
        var oSprite = s_oSpriteLibrary.getSprite('but_credits');
        _pStartPosInfo = {x: (oSprite.width/2)+ 10, y: (oSprite.height/2) + 10}; 
        _oButInfo = new CGfxButton(_pStartPosInfo.x,_pStartPosInfo.y,oSprite,s_oStage);
        _oButInfo.addEventListener(ON_MOUSE_UP, this._onCredits, this);
        
        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
        
        if(ENABLE_FULLSCREEN === false){
            _fRequestFullScreen = false;
        }
        
        if (_fRequestFullScreen && screenfull.enabled){
            oSprite = s_oSpriteLibrary.getSprite('but_fullscreen');
             _pStartPosFullscreen = {x:_pStartPosInfo.x + oSprite.width/2 + 10,y:_pStartPosInfo.y};
             
            _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen,s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this);
        }
        
        if(!s_bStorageAvailable){
            new CMsgBox(TEXT_ERR_LS,s_oStage);
        }
        
        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);        
    };  
    
    this.unload = function(){
        _oModeSurvival.unload();
        _oModeAdventure.unload();
        
        _oButInfo.unload();
        _oButInfo = null;
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
        }
        
        if (_fRequestFullScreen && screenfull.enabled){
            _oButFullscreen.unload();
        }
        
        s_oMenu = null;
        s_oStage.removeAllChildren();    
        
    };
    
    this.refreshButtonPos = function(iNewX,iNewY){
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX,iNewY + _pStartPosAudio.y);
        }   
        if (_fRequestFullScreen && screenfull.enabled){
            _oButFullscreen.setPosition(_pStartPosFullscreen.x + s_iOffsetX,_pStartPosFullscreen.y + s_iOffsetY);
        }
        _oButInfo.setPosition(_pStartPosInfo.x + iNewX,iNewY + _pStartPosInfo.y);
    };

    this._onAudioToggle = function(){
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    
    this._onModeSurvival = function( level ){

            s_oMenu.unload();
            s_oMain.gotoGame(SURVIVAL_MODE, 0);
            $(s_oMain).trigger("start_session");
    };
    
    this._onModeAdventure = function(){

            s_oMenu.unload();
            
            s_oMain.gotoLevelMenu();
            $(s_oMain).trigger("start_session");
    };
    
    this._onCredits = function(){
        new CCreditsPanel();
    };
    
    this.resetFullscreenBut = function(){
	if (_fRequestFullScreen && screenfull.enabled){
		_oButFullscreen.setActive(s_bFullscreen);
	}
    };


    this._onFullscreenRelease = function(){
        if(s_bFullscreen) { 
		_fCancelFullScreen.call(window.document);
	}else{
		_fRequestFullScreen.call(window.document.documentElement);
	}
	
	sizeHandler();

    };
          
    s_oMenu = this;        
    this._init();
    
    
};

var s_oMenu = null;