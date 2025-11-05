function CLevelBut(iXPos,iYPos,oSprite,bActive, Level){
    var _bActive;
    var _aCbCompleted;
    var _aCbOwner;
    var _aButton = new Array();
    var _aParams = [];
    var _oButton;
    var _oButContainer;
    
    this._init = function(iXPos,iYPos,oSprite,bActive){
        _oButContainer = new createjs.Container();
        _oButContainer.x = iXPos;
        _oButContainer.y = iYPos; 
        _oButContainer.cursor = "pointer";
        _oButContainer.mouseEnabled = bActive;
        s_oStage.addChild(_oButContainer);
        
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        var oData = {   
                        images: [oSprite], 
                        // width, height & registration point of each sprite
                        frames: {width: oSprite.width/2, height: oSprite.height, regX: (oSprite.width/2)/2, regY: oSprite.height/2}, 
                        animations: {state_true:[0],state_false:[1]}
                   };
                   
        var oSpriteSheet = new createjs.SpriteSheet(oData);
         
        _bActive = bActive;
        _oButton = createSprite(oSpriteSheet, "state_"+_bActive,(oSprite.width/2)/2,oSprite.height/2,oSprite.width/2,oSprite.height);
         
        _oButton.mouseEnabled = bActive;
        _oButton.stop();
        _oButContainer.addChild(_oButton);
        
        _aButton.push(_oButton);
        
        var _oLevelText = new createjs.Text(Level,"60px "+FONT, "#600101");
        _oLevelText.y = 20;
        _oLevelText.textAlign = "center";
        _oLevelText.textBaseline = "alphabetic";
        _oLevelText.lineWidth = 200;
        _oLevelText.outline = 8;
        _oButContainer.addChild(_oLevelText);
        
        _oLevelText = new createjs.Text(Level,"60px "+FONT, "#ffffff");
        _oLevelText.y = 20;
        _oLevelText.textAlign = "center";
        _oLevelText.textBaseline = "alphabetic";
        _oLevelText.lineWidth = 200;
        _oButContainer.addChild(_oLevelText);
        
        this._initListener();
    };
    
    this.unload = function(){
       _oButContainer.removeAllEventListeners();
	   
       _oButContainer.removeChild(_oButton);
    };
    
    this._initListener = function(){
       _oButContainer.on("mousedown", this.buttonDown);
       _oButContainer.on("pressup" , this.buttonRelease);      
    };
    
    this.viewBut = function(oButton){
        _oButContainer.addChild(oButton);
    };
    
    this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };
    
    this.addEventListenerWithParams = function(iEvent,cbCompleted, cbOwner,aParams){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
        _aParams = aParams;
    };
    
    this.ifClickable = function(){
        if(_oButContainer.mouseEnabled === true){
            return 1;
        }
        return 0;
    };
    
    this.setActive = function(iLevel, bActive){
        _bActive = bActive;
        _aButton[iLevel].gotoAndStop("state_"+_bActive);
        _oButContainer.mouseEnabled = bActive;
    };
    
    this.buttonRelease = function(){
        _oButContainer.scaleX = 1;
        _oButContainer.scaleY = 1;
        
        
        playSound("click",1,false);
        
        
        _bActive = !_bActive;
        _oButton.gotoAndStop("state_"+_bActive);

        if(_aCbCompleted[ON_MOUSE_UP]){
            _aCbCompleted[ON_MOUSE_UP].call(_aCbOwner[ON_MOUSE_UP],_aParams);
        }
    };
    
    this.buttonDown = function(){
        _oButContainer.scaleX = 0.9;
        _oButContainer.scaleY = 0.9;

       if(_aCbCompleted[ON_MOUSE_DOWN]){
           _aCbCompleted[ON_MOUSE_DOWN].call(_aCbOwner[ON_MOUSE_DOWN],_aParams);
       }
    };
    
    this.setPosition = function(iXPos,iYPos){
         _oButContainer.x = iXPos;
         _oButContainer.y = iYPos;
    };
    
    this.setVisible = function(bVisible){
        _oButContainer.visible = bVisible;
    };
    
    this._init(iXPos,iYPos,oSprite,bActive);
}