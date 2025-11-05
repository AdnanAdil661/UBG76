function CMsgBox(szText,oParentContainer){
    var _oMsg;
    var _oButOk;
    var _oThis;
    var _oContainer;
    var _oParentContainer;

    this._init = function (szText) {
        _oContainer = new createjs.Container();
        _oParentContainer.addChild(_oContainer);

        var oFade;

        oFade = new createjs.Shape();
        oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        oFade.alpha = 0.5;

        oFade.on("click", function () {});

        _oContainer.addChild(oFade);

        var oSpriteBg = s_oSpriteLibrary.getSprite('msg_box');
        var oBg = createBitmap(oSpriteBg);

        oBg.x = CANVAS_WIDTH * 0.5;
        oBg.y = CANVAS_HEIGHT * 0.5;
        oBg.regX = oSpriteBg.width * 0.5;
        oBg.regY = oSpriteBg.height * 0.5;
        _oContainer.addChild(oBg);
        
        var oMsgOutline = new createjs.Text(TEXT_ERR_LS, "50px " + FONT, "#600101");
        oMsgOutline.x = CANVAS_WIDTH / 2;
        oMsgOutline.y = 340;
        oMsgOutline.textAlign = "center";
        oMsgOutline.textBaseline = "middle";
        oMsgOutline.lineWidth = 800;
        oMsgOutline.lineHeight = 50;
        oMsgOutline.outline = 8;
        _oContainer.addChild(oMsgOutline);
        
        _oMsg = new createjs.Text(TEXT_ERR_LS, "50px " + FONT, "#fff");
        _oMsg.x = CANVAS_WIDTH / 2;
        _oMsg.y = 340;
        _oMsg.textAlign = "center";
        _oMsg.textBaseline = "middle";
        _oMsg.lineWidth = 800;
        _oMsg.lineHeight = 50;
        _oContainer.addChild(_oMsg);

        _oButOk = new CGfxButton(CANVAS_WIDTH / 2 + 470, 270, s_oSpriteLibrary.getSprite('but_exit'), _oContainer);
        _oButOk.addEventListener(ON_MOUSE_UP, this._onButOk, this);
    };

    this._onButOk = function () {
        _oThis.unload();
    };

    this.unload = function () {
        _oButOk.unload();
        _oParentContainer.removeChild(_oContainer);
    };
    
    _oThis = this;
    _oParentContainer = oParentContainer;

    this._init(szText);
}