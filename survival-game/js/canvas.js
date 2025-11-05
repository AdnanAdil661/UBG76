var _0x293c07 = _0x12e8;
(function (_0x3a3f07, _0x35b1e4) {
    var _0x540fae = _0x12e8, _0x3b7a10 = _0x3a3f07();
    while (!![]) {
        try {
            var _0x2720d0 = -parseInt(_0x540fae(0x194)) / 0x1 + parseInt(_0x540fae(0x195)) / 0x2 + -parseInt(_0x540fae(0x196)) / 0x3 * (parseInt(_0x540fae(0x197)) / 0x4) + -parseInt(_0x540fae(0x198)) / 0x5 * (-parseInt(_0x540fae(0x199)) / 0x6) + -parseInt(_0x540fae(0x19a)) / 0x7 + -parseInt(_0x540fae(0x19b)) / 0x8 * (parseInt(_0x540fae(0x19c)) / 0x9) + -parseInt(_0x540fae(0x19d)) / 0xa * (-parseInt(_0x540fae(0x19e)) / 0xb);
            if (_0x2720d0 === _0x35b1e4)
                break;
            else
                _0x3b7a10['push'](_0x3b7a10['shift']());
        } catch (_0x19872c) {
            _0x3b7a10['push'](_0x3b7a10['shift']());
        }
    }
}(_0x274c, 0x46999));
var stage, canvasW = 0x0, canvasH = 0x0;
function initGameCanvas(_0x245d67, _0x271287) {
    var _0x29d3b6 = _0x12e8, _0x301689 = document['getElementById']('gameCanvas');
    _0x301689[_0x29d3b6(0x19f)] = _0x245d67, _0x301689['height'] = _0x271287, canvasW = _0x245d67, canvasH = _0x271287, stage = new createjs[(_0x29d3b6(0x1a0))](_0x29d3b6(0x1a1)), createjs['Touch'][_0x29d3b6(0x1a2)](stage), stage[_0x29d3b6(0x1a3)](0x14), stage['mouseMoveOutside'] = !![], createjs[_0x29d3b6(0x1a4)][_0x29d3b6(0x1a5)] = 0x3c, createjs[_0x29d3b6(0x1a4)][_0x29d3b6(0x1a6)](_0x29d3b6(0x1a7), tick);
}
var guide = ![], canvasContainer, mainContainer, gameContainer, gameStatusContainer, worldContainer, resultContainer, confirmContainer, guideline, bg, logo, buttonStart, yadlogo, buttonRestart, buttonFacebook, buttonTwitter, buttonWhatsapp, buttonFullscreen, buttonSoundOn, buttonSoundOff;
$[_0x293c07(0x1a8)] = {}, $['sprites'] = {}, $[_0x293c07(0x1a9)] = {};
function buildGameCanvas() {
    var _0x492d8f = _0x293c07;
    canvasContainer = new createjs[(_0x492d8f(0x1aa))](), mainContainer = new createjs[(_0x492d8f(0x1aa))](), moneyContainer = new createjs[(_0x492d8f(0x1aa))](), piggyContainer = new createjs['Container'](), gameContainer = new createjs['Container'](), candyContainer = new createjs['Container'](), cacheContainer = new createjs[(_0x492d8f(0x1aa))](), gameRoundContainer = new createjs[(_0x492d8f(0x1aa))](), gameStatusContainer = new createjs[(_0x492d8f(0x1aa))](), gameInstructContainer = new createjs['Container'](), worldContainer = new createjs[(_0x492d8f(0x1aa))](), resultContainer = new createjs['Container'](), confirmContainer = new createjs[(_0x492d8f(0x1aa))](), logo = new createjs[(_0x492d8f(0x1ab))](loader[_0x492d8f(0x1ac)]('logo')), centerReg(logo), buttonStart = new createjs[(_0x492d8f(0x1ab))](loader[_0x492d8f(0x1ac)]('buttonStart')), centerReg(buttonStart), buttonStart['x'] = canvasW / 0x2, buttonStart['y'] = canvasH / 0x64 * 0x37, yadlogo = new createjs[(_0x492d8f(0x1ab))](loader[_0x492d8f(0x1ac)]('yadlogo')), centerReg(yadlogo), yadlogo['x'] = canvasW / 0x2, yadlogo['y'] = canvasH / 0x64 * 0x37, itemPiggy = new createjs[(_0x492d8f(0x1ab))](loader['getResult'](_0x492d8f(0x1ad))), centerReg(itemPiggy), itemPiggy[_0x492d8f(0x1ae)] = itemPiggy[_0x492d8f(0x1af)][_0x492d8f(0x1b0)], piggyContainer[_0x492d8f(0x1b1)](moneyContainer, itemPiggy);
    for (var _0x18c6fe = 0x1; _0x18c6fe <= 0x4; _0x18c6fe++) {
        var _0xe75e8e = _0x492d8f(0x1b2) + _0x18c6fe;
        $['money'][_0xe75e8e] = new createjs[(_0x492d8f(0x1ab))](loader['getResult'](_0xe75e8e)), centerReg($[_0x492d8f(0x1a8)][_0xe75e8e]);
    }
    itemTimer = new createjs['Bitmap'](loader[_0x492d8f(0x1ac)](_0x492d8f(0x1b3))), centerReg(itemTimer), timerTxt = new createjs[(_0x492d8f(0x1b4))](), timerTxt[_0x492d8f(0x1b5)] = '30px\x20kimberleyblack', timerTxt[_0x492d8f(0x1b6)] = '#333', timerTxt[_0x492d8f(0x1b7)] = 'center', timerTxt[_0x492d8f(0x1b8)] = _0x492d8f(0x1b9), timerTxt['text'] = _0x492d8f(0x1ba), timerTxt['y'] = 0x0 + 0x5;
    var _0x73dc85 = 0x3f, _0xc8eb6d = 0x3f, _0x830375 = {
            'regX': _0x73dc85 / 0x2,
            'regY': _0xc8eb6d / 0x2,
            'width': _0x73dc85,
            'height': _0xc8eb6d,
            'count': 0x2
        }, _0x4c8ce6 = {
            'red': {
                'frames': [0x0],
                'speed': 0.3
            },
            'green': {
                'frames': [0x1],
                'speed': 0.3
            }
        }, _0x5c344a = new createjs[(_0x492d8f(0x1bb))]({
            'images': [loader[_0x492d8f(0x1ac)]('itemLight')['src']],
            'frames': _0x830375,
            'animations': _0x4c8ce6
        });
    itemLight = new createjs[(_0x492d8f(0x1bc))](_0x5c344a, 'red'), itemLight[_0x492d8f(0x1a5)] = 0x14, itemLight['y'] = 0x46, gameStatusContainer[_0x492d8f(0x1b1)](itemTimer, timerTxt, itemLight), roundTxt = new createjs[(_0x492d8f(0x1b4))](), roundTxt['font'] = _0x492d8f(0x1bd), roundTxt[_0x492d8f(0x1b6)] = '#fff', roundTxt[_0x492d8f(0x1b7)] = _0x492d8f(0x1be), roundTxt['textBaseline'] = _0x492d8f(0x1b9), roundTxt[_0x492d8f(0x1bf)] = _0x492d8f(0x1c0), roundShadowTxt = new createjs[(_0x492d8f(0x1b4))](), roundShadowTxt[_0x492d8f(0x1b5)] = _0x492d8f(0x1bd), roundShadowTxt[_0x492d8f(0x1b6)] = _0x492d8f(0x1c1), roundShadowTxt[_0x492d8f(0x1b7)] = _0x492d8f(0x1be), roundShadowTxt['textBaseline'] = _0x492d8f(0x1b9), roundShadowTxt[_0x492d8f(0x1bf)] = _0x492d8f(0x1c0), roundShadowTxt['y'] = roundTxt['y'] + 0x3, roundNameTxt = new createjs[(_0x492d8f(0x1b4))](), roundNameTxt[_0x492d8f(0x1b5)] = _0x492d8f(0x1c2), roundNameTxt['color'] = _0x492d8f(0x1c1), roundNameTxt[_0x492d8f(0x1b7)] = _0x492d8f(0x1be), roundNameTxt[_0x492d8f(0x1b8)] = _0x492d8f(0x1b9), roundNameTxt[_0x492d8f(0x1bf)] = 'Name', roundNameTxt['y'] = 0x2d, roundNameShadowTxt = new createjs[(_0x492d8f(0x1b4))](), roundNameShadowTxt['font'] = _0x492d8f(0x1c2), roundNameShadowTxt[_0x492d8f(0x1b6)] = _0x492d8f(0x1c1), roundNameShadowTxt['textAlign'] = 'center', roundNameShadowTxt['textBaseline'] = _0x492d8f(0x1b9), roundNameShadowTxt[_0x492d8f(0x1bf)] = 'Name', roundNameShadowTxt['y'] = roundNameTxt['y'] + 0x5, gameRoundContainer[_0x492d8f(0x1b1)](roundShadowTxt, roundTxt, roundNameShadowTxt, roundNameTxt), instructionTxt = new createjs[(_0x492d8f(0x1b4))](), instructionTxt[_0x492d8f(0x1b5)] = '30px\x20kimberleyblack', instructionTxt[_0x492d8f(0x1b6)] = _0x492d8f(0x1c1), instructionTxt[_0x492d8f(0x1b7)] = 'center', instructionTxt[_0x492d8f(0x1b8)] = _0x492d8f(0x1b9), instructionTxt['text'] = _0x492d8f(0x1c3), gameInstructContainer['addChild'](instructionTxt);
    for (var _0x18c6fe = 0x0; _0x18c6fe <= 0x3; _0x18c6fe++) {
        for (var _0x429944 in gameSettings['game' + _0x18c6fe][_0x492d8f(0x1a9)]) {
            var _0xe75e8e = 'game' + _0x18c6fe + _0x429944;
            $['background'][_0xe75e8e] = new createjs[(_0x492d8f(0x1ab))](loader[_0x492d8f(0x1ac)](_0xe75e8e)), $[_0x492d8f(0x1a9)][_0xe75e8e]['y'] -= $['background'][_0xe75e8e][_0x492d8f(0x1af)][_0x492d8f(0x1b0)], gameContainer['addChild']($['background'][_0xe75e8e]), gameSettings[_0x492d8f(0x1c4) + _0x18c6fe][_0x492d8f(0x1a9)][_0x429944]['id'] = _0xe75e8e, gameSettings[_0x492d8f(0x1c4) + _0x18c6fe]['background'][_0x429944]['w'] = $[_0x492d8f(0x1a9)][_0xe75e8e]['image'][_0x492d8f(0x1c5)], gameSettings[_0x492d8f(0x1c4) + _0x18c6fe]['background'][_0x429944]['h'] = $[_0x492d8f(0x1a9)][_0xe75e8e][_0x492d8f(0x1af)][_0x492d8f(0x1b0)];
        }
        for (var _0x429944 in gameSettings[_0x492d8f(0x1c4) + _0x18c6fe][_0x492d8f(0x1c6)]) {
            var _0xe75e8e = _0x492d8f(0x1c4) + _0x18c6fe + _0x429944;
            if (_0x429944 == _0x492d8f(0x1c7)) {
                var _0x73dc85 = 0x82, _0xc8eb6d = 0xe6, _0x830375 = {
                        'regX': 0x0,
                        'regY': 0x0,
                        'width': _0x73dc85,
                        'height': _0xc8eb6d,
                        'count': 0x4
                    }, _0x4c8ce6 = {
                        'idle': {
                            'frames': [
                                0x0,
                                0x1
                            ],
                            'speed': 0.3
                        },
                        'close': {
                            'frames': [0x2],
                            'speed': 0.3
                        },
                        'peek': {
                            'frames': [0x3],
                            'speed': 0.3
                        }
                    }, _0x71eb82 = new createjs['SpriteSheet']({
                        'images': [loader[_0x492d8f(0x1ac)](_0xe75e8e)['src']],
                        'frames': _0x830375,
                        'animations': _0x4c8ce6
                    });
                $[_0x492d8f(0x1c8)][_0xe75e8e] = new createjs[(_0x492d8f(0x1bc))](_0x71eb82, 'idle'), $['sprites'][_0xe75e8e][_0x492d8f(0x1a5)] = 0x14, $[_0x492d8f(0x1c8)][_0xe75e8e]['w'] = _0x73dc85, $[_0x492d8f(0x1c8)][_0xe75e8e]['h'] = _0xc8eb6d, gameData[_0x492d8f(0x1c7)] = $[_0x492d8f(0x1c8)][_0xe75e8e], gameData[_0x492d8f(0x1c7)]['x'] = -_0x73dc85, gameContainer[_0x492d8f(0x1b1)](gameData[_0x492d8f(0x1c7)]);
            } else
                $[_0x492d8f(0x1c8)][_0xe75e8e] = new createjs['Bitmap'](loader[_0x492d8f(0x1ac)](_0xe75e8e)), $['sprites'][_0xe75e8e]['w'] = $[_0x492d8f(0x1c8)][_0xe75e8e]['image'][_0x492d8f(0x1c5)], $[_0x492d8f(0x1c8)][_0xe75e8e]['h'] = $[_0x492d8f(0x1c8)][_0xe75e8e][_0x492d8f(0x1af)][_0x492d8f(0x1b0)];
        }
    }
    for (var _0x18c6fe = 0x0; _0x18c6fe < players_arr[_0x492d8f(0x1c9)]; _0x18c6fe++) {
        var _0x73dc85 = 0x41, _0xc8eb6d = 0x64, _0x830375 = {
                'regX': 0x0,
                'regY': 0x0,
                'width': _0x73dc85,
                'height': _0xc8eb6d,
                'count': 0x7
            }, _0x4c8ce6 = {
                'idle': {
                    'frames': [
                        0x0,
                        0x1
                    ],
                    'speed': 0.3
                },
                'run': {
                    'frames': [
                        0x2,
                        0x3
                    ],
                    'speed': 0.3
                },
                'dead': {
                    'frames': [
                        0x4,
                        0x5,
                        0x6
                    ],
                    'speed': 0.3
                }
            }, _0x25e654 = new createjs['SpriteSheet']({
                'images': [loader['getResult'](_0x492d8f(0x1ca) + _0x18c6fe)[_0x492d8f(0x1cb)]],
                'frames': _0x830375,
                'animations': _0x4c8ce6
            });
        $[_0x492d8f(0x1c8)][_0x492d8f(0x1ca) + _0x18c6fe] = new createjs[(_0x492d8f(0x1bc))](_0x25e654, 'idle'), $['sprites'][_0x492d8f(0x1ca) + _0x18c6fe]['framerate'] = 0x14, $[_0x492d8f(0x1c8)][_0x492d8f(0x1ca) + _0x18c6fe]['w'] = _0x73dc85, $[_0x492d8f(0x1c8)][_0x492d8f(0x1ca) + _0x18c6fe]['h'] = _0xc8eb6d;
    }
    for (var _0x18c6fe = 0x0; _0x18c6fe < guards_arr[_0x492d8f(0x1c9)]; _0x18c6fe++) {
        var _0xe75e8e = _0x492d8f(0x1cc) + _0x18c6fe;
        $[_0x492d8f(0x1c8)][_0xe75e8e] = new createjs[(_0x492d8f(0x1ab))](loader[_0x492d8f(0x1ac)](_0xe75e8e)), $[_0x492d8f(0x1c8)][_0xe75e8e]['w'] = $[_0x492d8f(0x1c8)][_0xe75e8e][_0x492d8f(0x1af)]['naturalWidth'], $[_0x492d8f(0x1c8)][_0xe75e8e]['h'] = $['sprites'][_0xe75e8e][_0x492d8f(0x1af)][_0x492d8f(0x1b0)];
    }
    itemCandyCover = new createjs['Bitmap'](loader[_0x492d8f(0x1ac)](_0x492d8f(0x1cd))), centerReg(itemCandyCover), itemCandyBase = new createjs[(_0x492d8f(0x1ab))](loader[_0x492d8f(0x1ac)](_0x492d8f(0x1ce))), centerReg(itemCandyBase), itemPixel = new createjs[(_0x492d8f(0x1ab))](loader[_0x492d8f(0x1ac)]('itemPixel')), centerReg(itemPixel), itemNeedle = new createjs[(_0x492d8f(0x1ab))](loader['getResult'](_0x492d8f(0x1cf))), itemNeedle['regX'] = 0x0, itemNeedle[_0x492d8f(0x1ae)] = 0xcf, candyDrawing = new createjs['Shape'](), candyContainer['addChild'](itemPixel, itemCandyCover, itemCandyBase, candyDrawing);
    for (var _0x18c6fe = 0x0; _0x18c6fe < gameSettings[_0x492d8f(0x1d0)]['candy'][_0x492d8f(0x1c9)]; _0x18c6fe++) {
        $[_0x492d8f(0x1c8)]['candy' + _0x18c6fe] = new createjs[(_0x492d8f(0x1ab))](loader[_0x492d8f(0x1ac)](_0x492d8f(0x1d1) + _0x18c6fe)), centerReg($[_0x492d8f(0x1c8)][_0x492d8f(0x1d1) + _0x18c6fe]), $[_0x492d8f(0x1c8)][_0x492d8f(0x1d2) + _0x18c6fe] = new createjs[(_0x492d8f(0x1ab))](loader[_0x492d8f(0x1ac)](_0x492d8f(0x1d2) + _0x18c6fe)), centerReg($['sprites']['candyFinal' + _0x18c6fe]), candyContainer[_0x492d8f(0x1b1)]($[_0x492d8f(0x1c8)][_0x492d8f(0x1d1) + _0x18c6fe], $[_0x492d8f(0x1c8)][_0x492d8f(0x1d2) + _0x18c6fe]);
    }
    candyContainer['addChild'](itemNeedle), itemResult = new createjs[(_0x492d8f(0x1ab))](loader['getResult'](_0x492d8f(0x1d3))), itemResultP = new createjs[(_0x492d8f(0x1ab))](loader[_0x492d8f(0x1ac)]('itemResultP')), resultTitleTxt = new createjs['Text'](), resultTitleTxt[_0x492d8f(0x1b5)] = '40px\x20kimberleyblack', resultTitleTxt['color'] = _0x492d8f(0x1d4), resultTitleTxt[_0x492d8f(0x1b7)] = 'center', resultTitleTxt[_0x492d8f(0x1b8)] = _0x492d8f(0x1b9), resultTitleTxt[_0x492d8f(0x1bf)] = '', resultScoreTxt = new createjs[(_0x492d8f(0x1b4))](), resultScoreTxt[_0x492d8f(0x1b5)] = _0x492d8f(0x1d5), resultScoreTxt['color'] = '#fff', resultScoreTxt[_0x492d8f(0x1b7)] = _0x492d8f(0x1be), resultScoreTxt[_0x492d8f(0x1b8)] = _0x492d8f(0x1b9), resultScoreTxt[_0x492d8f(0x1bf)] = '', resultShareTxt = new createjs['Text'](), resultShareTxt['font'] = _0x492d8f(0x1bd), resultShareTxt[_0x492d8f(0x1b6)] = '#fff', resultShareTxt[_0x492d8f(0x1b7)] = _0x492d8f(0x1be), resultShareTxt['textBaseline'] = _0x492d8f(0x1b9), resultShareTxt[_0x492d8f(0x1bf)] = shareText, buttonFacebook = new createjs[(_0x492d8f(0x1ab))](loader[_0x492d8f(0x1ac)](_0x492d8f(0x1d6))), buttonTwitter = new createjs[(_0x492d8f(0x1ab))](loader[_0x492d8f(0x1ac)](_0x492d8f(0x1d7))), buttonWhatsapp = new createjs[(_0x492d8f(0x1ab))](loader[_0x492d8f(0x1ac)](_0x492d8f(0x1d8))), centerReg(buttonFacebook), createHitarea(buttonFacebook), centerReg(buttonTwitter), createHitarea(buttonTwitter), centerReg(buttonWhatsapp), createHitarea(buttonWhatsapp), buttonRestart = new createjs[(_0x492d8f(0x1ab))](loader[_0x492d8f(0x1ac)](_0x492d8f(0x1d9))), centerReg(buttonRestart), createHitarea(buttonRestart), buttonFullscreen = new createjs[(_0x492d8f(0x1ab))](loader[_0x492d8f(0x1ac)](_0x492d8f(0x1da))), centerReg(buttonFullscreen), buttonSoundOn = new createjs[(_0x492d8f(0x1ab))](loader[_0x492d8f(0x1ac)]('buttonSoundOn')), centerReg(buttonSoundOn), buttonSoundOff = new createjs['Bitmap'](loader[_0x492d8f(0x1ac)](_0x492d8f(0x1db))), centerReg(buttonSoundOff), buttonSoundOn['visible'] = ![], buttonExit = new createjs['Bitmap'](loader[_0x492d8f(0x1ac)](_0x492d8f(0x1dc))), centerReg(buttonExit), buttonSettings = new createjs['Bitmap'](loader[_0x492d8f(0x1ac)](_0x492d8f(0x1dd))), centerReg(buttonSettings), createHitarea(buttonFullscreen), createHitarea(buttonSoundOn), createHitarea(buttonSoundOff), createHitarea(buttonExit), createHitarea(buttonSettings), optionsContainer = new createjs[(_0x492d8f(0x1aa))](), optionsContainer[_0x492d8f(0x1b1)](buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonExit), optionsContainer['visible'] = ![], itemExit = new createjs['Bitmap'](loader[_0x492d8f(0x1ac)]('itemExit')), itemExitP = new createjs['Bitmap'](loader[_0x492d8f(0x1ac)]('itemExitP')), buttonConfirm = new createjs[(_0x492d8f(0x1ab))](loader[_0x492d8f(0x1ac)]('buttonConfirm')), centerReg(buttonConfirm), buttonCancel = new createjs[(_0x492d8f(0x1ab))](loader[_0x492d8f(0x1ac)](_0x492d8f(0x1de))), centerReg(buttonCancel), confirmMessageTxt = new createjs['Text'](), confirmMessageTxt['font'] = _0x492d8f(0x1c2), confirmMessageTxt['color'] = _0x492d8f(0x1c1), confirmMessageTxt[_0x492d8f(0x1b7)] = _0x492d8f(0x1be), confirmMessageTxt['textBaseline'] = _0x492d8f(0x1b9), confirmMessageTxt[_0x492d8f(0x1bf)] = gameTextDisplay['exitMessage'], confirmContainer['addChild'](itemExit, itemExitP, buttonConfirm, buttonCancel, confirmMessageTxt), confirmContainer[_0x492d8f(0x1df)] = ![], guide && (guideline = new createjs[(_0x492d8f(0x1e0))]()), pressMove = new createjs[(_0x492d8f(0x1e0))](), cacheContainer[_0x492d8f(0x1df)] = ![], mainContainer[_0x492d8f(0x1b1)](logo, buttonStart), gameContainer[_0x492d8f(0x1b1)](cacheContainer, pressMove, candyContainer, gameStatusContainer, gameInstructContainer, gameRoundContainer), resultContainer['addChild'](itemResult, itemResultP, resultTitleTxt, resultScoreTxt, buttonRestart), shareEnable && resultContainer['addChild'](resultShareTxt, buttonFacebook, buttonTwitter, buttonWhatsapp), piggyContainer[_0x492d8f(0x1e1)] = piggyContainer[_0x492d8f(0x1e2)] = 0.8, canvasContainer['addChild'](worldContainer, piggyContainer, mainContainer, gameContainer, resultContainer, confirmContainer, optionsContainer, buttonSettings, guideline, yadlogo), stage['addChild'](canvasContainer), changeViewport(viewport[_0x492d8f(0x1e3)]), resizeGameFunc(viewport['isLandscape']);
}
function changeViewport(_0x4a11d2) {
    var _0xf6219e = _0x293c07;
    _0x4a11d2 ? (stageW = landscapeSize['w'], stageH = landscapeSize['h'], contentW = landscapeSize['cW'], contentH = landscapeSize['cH'], defaultData[_0xf6219e(0x19f)] = defaultData[_0xf6219e(0x1e4)][_0xf6219e(0x1e5)]['w'], defaultData[_0xf6219e(0x1e6)] = defaultData[_0xf6219e(0x1e4)][_0xf6219e(0x1e5)]['h'], defaultData[_0xf6219e(0x1e7)] = defaultData[_0xf6219e(0x1e4)][_0xf6219e(0x1e5)][_0xf6219e(0x1e7)]) : (stageW = portraitSize['w'], stageH = portraitSize['h'], contentW = portraitSize['cW'], contentH = portraitSize['cH'], defaultData[_0xf6219e(0x19f)] = defaultData[_0xf6219e(0x1e4)][_0xf6219e(0x1e8)]['w'], defaultData[_0xf6219e(0x1e6)] = defaultData['viewport'][_0xf6219e(0x1e8)]['h'], defaultData['scale'] = defaultData[_0xf6219e(0x1e4)]['portrait']['scale']), gameCanvas[_0xf6219e(0x19f)] = stageW, gameCanvas[_0xf6219e(0x1e6)] = stageH, canvasW = stageW, canvasH = stageH, changeCanvasViewport(), changeGameViewport();
}
function changeCanvasViewport() {
    var _0x42c0df = _0x293c07;
    canvasContainer != undefined && (guide && guideline[_0x42c0df(0x1e9)][_0x42c0df(0x1ea)]()['setStrokeStyle'](0x2)[_0x42c0df(0x1eb)](_0x42c0df(0x1ec))[_0x42c0df(0x1ed)]((stageW - contentW) / 0x2, (stageH - contentH) / 0x2, contentW, contentH), pressMove[_0x42c0df(0x1ee)] = new createjs['Shape'](new createjs['Graphics']()['beginFill'](_0x42c0df(0x1ef))[_0x42c0df(0x1ed)](0x0, 0x0, canvasW, canvasH)), gameStatusContainer['x'] = canvasW / 0x2, gameStatusContainer['y'] = offset['y'] + 0x37, gameRoundContainer['x'] = canvasW / 0x2, gameRoundContainer['y'] = offset['y'] + 0xc8, gameInstructContainer['x'] = canvasW / 0x2, gameInstructContainer['y'] = offset['y'] + 0xc8, viewport[_0x42c0df(0x1e3)] ? (logo['x'] = canvasW / 0x2, logo['y'] = canvasH / 0x64 * 0x33, buttonStart['x'] = canvasW / 0x2, buttonStart['y'] = canvasH / 0x64 * 0x4d, yadlogo['x'] = canvasW - 0xc8, yadlogo['y'] = canvasH - 0x4b, piggyContainer['x'] = canvasW / 0x2, piggyContainer['y'] = canvasH / 0x64 * 0x26, candyContainer['x'] = canvasW / 0x2, candyContainer['y'] = canvasH / 0x2, itemResult[_0x42c0df(0x1df)] = !![], itemResultP[_0x42c0df(0x1df)] = ![], resultTitleTxt['x'] = canvasW / 0x2, resultTitleTxt['y'] = canvasH / 0x64 * 0x21, resultScoreTxt['x'] = canvasW / 0x2, resultScoreTxt['y'] = canvasH / 0x64 * 0x2a, resultShareTxt['x'] = canvasW / 0x2, resultShareTxt['y'] = canvasH / 0x64 * 0x30, buttonFacebook['x'] = canvasW / 0x2 - 0x41, buttonTwitter['x'] = canvasW / 0x2, buttonWhatsapp['x'] = canvasW / 0x2 + 0x41, buttonFacebook['y'] = buttonTwitter['y'] = buttonWhatsapp['y'] = canvasH / 0x64 * 0x36, buttonRestart['x'] = canvasW / 0x2, buttonRestart['y'] = canvasH / 0x64 * 0x41, itemExit[_0x42c0df(0x1df)] = !![], itemExitP[_0x42c0df(0x1df)] = ![], buttonConfirm['x'] = canvasW / 0x2 - 0x82, buttonConfirm['y'] = canvasH / 0x64 * 0x3f, buttonCancel['x'] = canvasW / 0x2 + 0x82, buttonCancel['y'] = canvasH / 0x64 * 0x3f, confirmMessageTxt['x'] = canvasW / 0x2, confirmMessageTxt['y'] = canvasH / 0x64 * 0x2b) : (logo['x'] = canvasW / 0x2, logo['y'] = canvasH / 0x64 * 0x26, buttonStart['x'] = canvasW / 0x2, buttonStart['y'] = canvasH / 0x64 * 0x4d, yadlogo['x'] = canvasW - 0xc8, yadlogo['y'] = canvasH - 0x4b, piggyContainer['x'] = canvasW / 0x2, piggyContainer['y'] = canvasH / 0x64 * 0x1e, candyContainer['x'] = canvasW / 0x2, candyContainer['y'] = canvasH / 0x2, itemResult[_0x42c0df(0x1df)] = ![], itemResultP[_0x42c0df(0x1df)] = !![], resultTitleTxt['x'] = canvasW / 0x2, resultTitleTxt['y'] = canvasH / 0x64 * 0x26, resultScoreTxt['x'] = canvasW / 0x2, resultScoreTxt['y'] = canvasH / 0x64 * 0x2d, resultShareTxt['x'] = canvasW / 0x2, resultShareTxt['y'] = canvasH / 0x64 * 0x32, buttonFacebook['x'] = canvasW / 0x2 - 0x43, buttonTwitter['x'] = canvasW / 0x2, buttonWhatsapp['x'] = canvasW / 0x2 + 0x43, buttonFacebook['y'] = buttonTwitter['y'] = buttonWhatsapp['y'] = canvasH / 0x64 * 0x36, buttonRestart['x'] = canvasW / 0x2, buttonRestart['y'] = canvasH / 0x64 * 0x3e, itemExit[_0x42c0df(0x1df)] = ![], itemExitP[_0x42c0df(0x1df)] = !![], buttonConfirm['x'] = canvasW / 0x2 - 0x82, buttonConfirm['y'] = canvasH / 0x64 * 0x3f, buttonCancel['x'] = canvasW / 0x2 + 0x82, buttonCancel['y'] = canvasH / 0x64 * 0x3f, confirmMessageTxt['x'] = canvasW / 0x2, confirmMessageTxt['y'] = canvasH / 0x64 * 0x2b), resizeGameInstruction());
}
function _0x12e8(_0x182f54, _0xb733d) {
    var _0x274cab = _0x274c();
    return _0x12e8 = function (_0x12e8d1, _0x436e06) {
        _0x12e8d1 = _0x12e8d1 - 0x194;
        var _0x3b12cb = _0x274cab[_0x12e8d1];
        return _0x3b12cb;
    }, _0x12e8(_0x182f54, _0xb733d);
}
function resizeCanvas() {
    var _0x3d6e79 = _0x293c07;
    if (canvasContainer != undefined) {
        buttonSettings['x'] = canvasW - offset['x'] - 0x3c, buttonSettings['y'] = offset['y'] + 0x2d, yadlogo['x'] = canvasW - offset['x'] - 0x64, yadlogo['y'] = canvasH - offset['y'] - 0x4b, console[_0x3d6e79(0x1f0)](canvasH);
        var _0x45eacf = 0x41;
        curPage != 'game' ? (buttonExit[_0x3d6e79(0x1df)] = ![], buttonSoundOn['x'] = buttonSoundOff['x'] = buttonSettings['x'], buttonSoundOn['y'] = buttonSoundOff['y'] = buttonSettings['y'] + _0x45eacf, buttonSoundOn['x'] = buttonSoundOff['x'], buttonSoundOn['y'] = buttonSoundOff['y'] = buttonSettings['y'] + _0x45eacf, buttonFullscreen['x'] = buttonSettings['x'], buttonFullscreen['y'] = buttonSettings['y'] + _0x45eacf * 0x2) : (buttonExit[_0x3d6e79(0x1df)] = !![], buttonSoundOn['x'] = buttonSoundOff['x'] = buttonSettings['x'], buttonSoundOn['y'] = buttonSoundOff['y'] = buttonSettings['y'] + _0x45eacf, buttonSoundOn['x'] = buttonSoundOff['x'], buttonSoundOn['y'] = buttonSoundOff['y'] = buttonSettings['y'] + _0x45eacf, buttonFullscreen['x'] = buttonSettings['x'], buttonFullscreen['y'] = buttonSettings['y'] + _0x45eacf * 0x2, buttonExit['x'] = buttonSettings['x'], buttonExit['y'] = buttonSettings['y'] + _0x45eacf * 0x3);
    }
}
function removeGameCanvas() {
    var _0x3fa7ea = _0x293c07;
    stage[_0x3fa7ea(0x1f1)] = !![], stage[_0x3fa7ea(0x1f2)](), stage[_0x3fa7ea(0x1f3)](), createjs[_0x3fa7ea(0x1a4)][_0x3fa7ea(0x1f4)](_0x3fa7ea(0x1a7), tick), createjs[_0x3fa7ea(0x1a4)][_0x3fa7ea(0x1f4)](_0x3fa7ea(0x1a7), stage);
}
function tick(_0x5d4872) {
    var _0x410195 = _0x293c07;
    updateGame(), stage[_0x410195(0x1f3)](_0x5d4872);
}
function centerReg(_0xda389c) {
    var _0x1b2108 = _0x293c07;
    _0xda389c[_0x1b2108(0x1f5)] = _0xda389c[_0x1b2108(0x1af)]['naturalWidth'] / 0x2, _0xda389c[_0x1b2108(0x1ae)] = _0xda389c[_0x1b2108(0x1af)][_0x1b2108(0x1b0)] / 0x2;
}
function createHitarea(_0x160b6b) {
    var _0x55d74b = _0x293c07;
    _0x160b6b[_0x55d74b(0x1ee)] = new createjs['Shape'](new createjs[(_0x55d74b(0x1f6))]()['beginFill']('#000')['drawRect'](0x0, 0x0, _0x160b6b['image'][_0x55d74b(0x1c5)], _0x160b6b[_0x55d74b(0x1af)][_0x55d74b(0x1b0)]));
}
function _0x274c() {
    var _0x4ba33c = [
        'tick',
        'money',
        'background',
        'Container',
        'Bitmap',
        'getResult',
        'itemPiggy',
        'regY',
        'image',
        'naturalHeight',
        'addChild',
        'itemMoney',
        'itemTimer',
        'Text',
        'font',
        'color',
        'textAlign',
        'textBaseline',
        'alphabetic',
        '00:00',
        'SpriteSheet',
        'Sprite',
        '25px\x20kimberleyblack',
        'center',
        'text',
        'Round\x201',
        '#fff',
        '40px\x20kimberleyblack',
        'Name',
        'game',
        'naturalWidth',
        'items',
        'doll',
        'sprites',
        'length',
        'player',
        'src',
        'guard',
        'itemCandyCover',
        'itemCandy',
        'itemNeedle',
        'game2',
        'candy',
        'candyFinal',
        'itemResult',
        '#D6D6D6',
        '75px\x20kimberleyblack',
        'buttonFacebook',
        'buttonTwitter',
        'buttonWhatsapp',
        'buttonRestart',
        'buttonFullscreen',
        'buttonSoundOff',
        'buttonExit',
        'buttonSettings',
        'buttonCancel',
        'visible',
        'Shape',
        'scaleX',
        'scaleY',
        'isLandscape',
        'viewport',
        'landscape',
        'height',
        'scale',
        'portrait',
        'graphics',
        'clear',
        'beginStroke',
        'red',
        'drawRect',
        'hitArea',
        '#000',
        'log',
        'autoClear',
        'removeAllChildren',
        'update',
        'removeEventListener',
        'regX',
        'Graphics',
        '486170hrthWe',
        '295050DEvJcZ',
        '39099zCPJad',
        '164TsYzff',
        '260735dUqHaB',
        '30EjYAOB',
        '1480493FlODkx',
        '376fuvaUG',
        '14409awAFDb',
        '30kgGMgO',
        '4356682qSilWv',
        'width',
        'Stage',
        'gameCanvas',
        'enable',
        'enableMouseOver',
        'Ticker',
        'framerate',
        'addEventListener'
    ];
    _0x274c = function () {
        return _0x4ba33c;
    };
    return _0x274c();
}