function CPausePanel(oSpriteBg){
    
    var _oBg;
    var _oGroup;

    var _oMsgText;
    
    this._init = function(oSpriteBg){
        
        _oGroup = new createjs.Container();
        _oGroup.alpha = 0;
        _oGroup.visible=false;
        
        _oBg = createBitmap(oSpriteBg);
        _oBg.x = 0;
        _oBg.y = 0;
        _oGroup.addChild(_oBg);
        
        _oMsgText = new createjs.Text(TEXT_PAUSE," 100px "+FONT, "#600101");
        _oMsgText.x = CANVAS_WIDTH/2;
        _oMsgText.y = (CANVAS_HEIGHT/2);
        _oMsgText.textAlign = "center";
        _oMsgText.textBaseline = "alphabetic";
        _oMsgText.lineWidth = 500;        
        _oMsgText.outline = 8;
        _oGroup.addChild(_oMsgText);

        _oMsgText = new createjs.Text(TEXT_PAUSE," 100px "+FONT, "#ffffff");
        _oMsgText.x = CANVAS_WIDTH/2;
        _oMsgText.y = (CANVAS_HEIGHT/2);
        _oMsgText.textAlign = "center";
        _oMsgText.textBaseline = "alphabetic";
        _oMsgText.lineWidth = 500;  
        _oGroup.addChild(_oMsgText);

        s_oStage.addChild(_oGroup);
        
        this.show();
    };
    
    this.unload = function(){
        _oGroup.removeAllEventListeners();
    };
    
    this._initListener = function(){
        _oGroup.on("mousedown",this._onExit);
    };
    
    this.show = function(){
	
	playSound("game_over",1,false);
	
        
        
        _oGroup.visible = true;
        
        var oParent = this;
        createjs.Tween.get(_oGroup).to({alpha:1 }, 500).call(function() {oParent._initListener();});
    };
    
    this._onExit = function(){
        _oGroup.removeAllEventListeners();
        s_oStage.removeChild(_oGroup);
        
        s_oGame.onPauseExit();
    };
    
    this._init(oSpriteBg);
    
    return this;
}
