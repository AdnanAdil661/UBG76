(function (_0x192009, _0x1ea105) {
    var _0x5b54ef = _0x5e0f, _0x1998b0 = _0x192009();
    while (!![]) {
        try {
            var _0xc17f49 = parseInt(_0x5b54ef(0xb8)) / 0x1 * (-parseInt(_0x5b54ef(0xb9)) / 0x2) + parseInt(_0x5b54ef(0xba)) / 0x3 * (-parseInt(_0x5b54ef(0xbb)) / 0x4) + -parseInt(_0x5b54ef(0xbc)) / 0x5 * (parseInt(_0x5b54ef(0xbd)) / 0x6) + parseInt(_0x5b54ef(0xbe)) / 0x7 * (-parseInt(_0x5b54ef(0xbf)) / 0x8) + -parseInt(_0x5b54ef(0xc0)) / 0x9 + parseInt(_0x5b54ef(0xc1)) / 0xa + parseInt(_0x5b54ef(0xc2)) / 0xb;
            if (_0xc17f49 === _0x1ea105)
                break;
            else
                _0x1998b0['push'](_0x1998b0['shift']());
        } catch (_0x1ee1a2) {
            _0x1998b0['push'](_0x1998b0['shift']());
        }
    }
}(_0xd9a2, 0x67709));
function initPreload() {
    var _0x257c53 = _0x5e0f;
    toggleLoader(!![]), checkMobileEvent(), $(window)[_0x257c53(0xc3)](function () {
        resizeGameFunc();
    }), resizeGameFunc(), loader = new createjs['LoadQueue'](![]), manifest = [
        {
            'src': _0x257c53(0xc4),
            'id': _0x257c53(0xc5)
        },
        {
            'src': _0x257c53(0xc6),
            'id': _0x257c53(0xc7)
        },
        {
            'src': _0x257c53(0xc8),
            'id': _0x257c53(0xc9)
        },
        {
            'src': _0x257c53(0xca),
            'id': _0x257c53(0xcb)
        },
        {
            'src': 'assets/item_money_01.png',
            'id': _0x257c53(0xcc)
        },
        {
            'src': 'assets/item_money_02.png',
            'id': 'itemMoney2'
        },
        {
            'src': _0x257c53(0xcd),
            'id': 'itemMoney3'
        },
        {
            'src': 'assets/item_money_04.png',
            'id': _0x257c53(0xce)
        },
        {
            'src': _0x257c53(0xcf),
            'id': 'itemTimer'
        },
        {
            'src': _0x257c53(0xd0),
            'id': _0x257c53(0xd1)
        },
        {
            'src': 'assets/item_candy.png',
            'id': _0x257c53(0xd2)
        },
        {
            'src': _0x257c53(0xd3),
            'id': _0x257c53(0xd4)
        },
        {
            'src': 'assets/item_needle.png',
            'id': _0x257c53(0xd5)
        },
        {
            'src': _0x257c53(0xd6),
            'id': 'itemPixel'
        },
        {
            'src': _0x257c53(0xd7),
            'id': 'buttonConfirm'
        },
        {
            'src': _0x257c53(0xd8),
            'id': _0x257c53(0xd9)
        },
        {
            'src': 'assets/item_confirm.png',
            'id': _0x257c53(0xda)
        },
        {
            'src': _0x257c53(0xdb),
            'id': _0x257c53(0xdc)
        },
        {
            'src': _0x257c53(0xdd),
            'id': _0x257c53(0xde)
        },
        {
            'src': _0x257c53(0xdf),
            'id': _0x257c53(0xe0)
        },
        {
            'src': _0x257c53(0xe1),
            'id': _0x257c53(0xe2)
        },
        {
            'src': _0x257c53(0xe3),
            'id': _0x257c53(0xe4)
        },
        {
            'src': _0x257c53(0xe5),
            'id': _0x257c53(0xe6)
        },
        {
            'src': _0x257c53(0xe7),
            'id': _0x257c53(0xe8)
        },
        {
            'src': 'assets/button_fullscreen.png',
            'id': 'buttonFullscreen'
        },
        {
            'src': _0x257c53(0xe9),
            'id': 'buttonSoundOn'
        },
        {
            'src': _0x257c53(0xea),
            'id': _0x257c53(0xeb)
        },
        {
            'src': _0x257c53(0xec),
            'id': _0x257c53(0xed)
        },
        {
            'src': _0x257c53(0xee),
            'id': _0x257c53(0xef)
        }
    ];
    for (var _0x12e200 = 0x0; _0x12e200 < players_arr[_0x257c53(0xf0)]; _0x12e200++) {
        manifest[_0x257c53(0xf1)]({
            'src': players_arr[_0x12e200][_0x257c53(0xf2)],
            'id': 'player' + _0x12e200
        });
    }
    for (var _0x12e200 = 0x0; _0x12e200 < guards_arr[_0x257c53(0xf0)]; _0x12e200++) {
        manifest[_0x257c53(0xf1)]({
            'src': guards_arr[_0x12e200][_0x257c53(0xf2)],
            'id': _0x257c53(0xf3) + _0x12e200
        });
    }
    for (var _0x12e200 = 0x0; _0x12e200 <= 0x3; _0x12e200++) {
        for (var _0x28eb07 in gameSettings[_0x257c53(0xf4) + _0x12e200][_0x257c53(0xf5)]) {
            gameSettings[_0x257c53(0xf4) + _0x12e200]['background'][_0x28eb07]['src'] != undefined && manifest[_0x257c53(0xf1)]({
                'src': gameSettings[_0x257c53(0xf4) + _0x12e200][_0x257c53(0xf5)][_0x28eb07]['src'],
                'id': 'game' + _0x12e200 + _0x28eb07
            });
        }
        for (var _0x28eb07 in gameSettings[_0x257c53(0xf4) + _0x12e200]['items']) {
            gameSettings['game' + _0x12e200]['items'][_0x28eb07]['src'] != undefined && manifest[_0x257c53(0xf1)]({
                'src': gameSettings[_0x257c53(0xf4) + _0x12e200][_0x257c53(0xf6)][_0x28eb07][_0x257c53(0xf2)],
                'id': _0x257c53(0xf4) + _0x12e200 + _0x28eb07
            });
        }
    }
    for (var _0x12e200 = 0x0; _0x12e200 < gameSettings[_0x257c53(0xf7)]['candy'][_0x257c53(0xf0)]; _0x12e200++) {
        manifest[_0x257c53(0xf1)]({
            'src': gameSettings['game2'][_0x257c53(0xf8)][_0x12e200][_0x257c53(0xf2)],
            'id': _0x257c53(0xf8) + _0x12e200
        }), manifest[_0x257c53(0xf1)]({
            'src': gameSettings['game2'][_0x257c53(0xf8)][_0x12e200][_0x257c53(0xf9)],
            'id': _0x257c53(0xfa) + _0x12e200
        });
    }
    soundOn = !![], ($['browser'][_0x257c53(0xfb)] || isTablet) && (!enableMobileSound && (soundOn = ![])), soundOn && (manifest['push']({
        'src': _0x257c53(0xfc),
        'id': _0x257c53(0xfd)
    }), manifest[_0x257c53(0xf1)]({
        'src': _0x257c53(0xfe),
        'id': 'soundClick'
    }), manifest[_0x257c53(0xf1)]({
        'src': _0x257c53(0xff),
        'id': _0x257c53(0x100)
    }), manifest['push']({
        'src': _0x257c53(0x101),
        'id': _0x257c53(0x102)
    }), manifest['push']({
        'src': _0x257c53(0x103),
        'id': _0x257c53(0x104)
    }), manifest['push']({
        'src': _0x257c53(0x105),
        'id': _0x257c53(0x106)
    }), manifest[_0x257c53(0xf1)]({
        'src': 'assets/sounds/lightoff.ogg',
        'id': 'soundLightOff'
    }), manifest[_0x257c53(0xf1)]({
        'src': _0x257c53(0x107),
        'id': _0x257c53(0x108)
    }), manifest['push']({
        'src': _0x257c53(0x109),
        'id': _0x257c53(0x10a)
    }), manifest[_0x257c53(0xf1)]({
        'src': _0x257c53(0x10b),
        'id': _0x257c53(0x10c)
    }), manifest[_0x257c53(0xf1)]({
        'src': _0x257c53(0x10d),
        'id': _0x257c53(0x10e)
    }), manifest['push']({
        'src': _0x257c53(0x10f),
        'id': _0x257c53(0x110)
    }), manifest['push']({
        'src': _0x257c53(0x111),
        'id': _0x257c53(0x112)
    }), manifest[_0x257c53(0xf1)]({
        'src': _0x257c53(0x113),
        'id': _0x257c53(0x114)
    }), manifest[_0x257c53(0xf1)]({
        'src': 'assets/sounds/crack_final.ogg',
        'id': _0x257c53(0x115)
    }), manifest['push']({
        'src': _0x257c53(0x116),
        'id': 'soundGlass1'
    }), manifest['push']({
        'src': _0x257c53(0x117),
        'id': _0x257c53(0x118)
    }), manifest[_0x257c53(0xf1)]({
        'src': 'assets/sounds/glass3.ogg',
        'id': _0x257c53(0x119)
    }), manifest[_0x257c53(0xf1)]({
        'src': _0x257c53(0x11a),
        'id': _0x257c53(0x11b)
    }), manifest[_0x257c53(0xf1)]({
        'src': _0x257c53(0x11c),
        'id': 'soundSand1'
    }), manifest[_0x257c53(0xf1)]({
        'src': _0x257c53(0x11d),
        'id': _0x257c53(0x11e)
    }), manifest[_0x257c53(0xf1)]({
        'src': _0x257c53(0x11f),
        'id': 'soundSand3'
    }), manifest[_0x257c53(0xf1)]({
        'src': _0x257c53(0x120),
        'id': _0x257c53(0x121)
    }), manifest[_0x257c53(0xf1)]({
        'src': _0x257c53(0x122),
        'id': 'soundCountdownEnd'
    }), manifest[_0x257c53(0xf1)]({
        'src': _0x257c53(0x123),
        'id': _0x257c53(0x124)
    }), createjs['Sound'][_0x257c53(0x125)] = ['mp3'], loader[_0x257c53(0x126)](createjs[_0x257c53(0x127)])), loader[_0x257c53(0x128)](_0x257c53(0x129), handleComplete), loader['addEventListener']('fileload', fileComplete), loader['addEventListener']('error', handleFileError), loader['on'](_0x257c53(0x12a), handleProgress, this), loader[_0x257c53(0x12b)](manifest);
}
function fileComplete(_0xce060a) {
    var _0x18c9a8 = _0xce060a['item'];
}
function _0xd9a2() {
    var _0x345a87 = [
        'assets/sounds/music.ogg',
        'musicGame',
        'assets/sounds/click.ogg',
        'assets/sounds/fail.ogg',
        'soundFail',
        'assets/sounds/win.ogg',
        'soundWin',
        'assets/sounds/complete.ogg',
        'soundComplete',
        'assets/sounds/lighton.ogg',
        'soundLightOn',
        'assets/sounds/shot1.ogg',
        'soundShot1',
        'assets/sounds/shot2.ogg',
        'soundShot2',
        'assets/sounds/shot3.ogg',
        'soundShot3',
        'assets/sounds/crack1.ogg',
        'soundCrack1',
        'assets/sounds/crack2.ogg',
        'soundCrack2',
        'assets/sounds/crack3.ogg',
        'soundCrack3',
        'assets/sounds/crack_error.ogg',
        'soundCrackError',
        'soundCrackFinal',
        'assets/sounds/glass1.ogg',
        'assets/sounds/glass2.ogg',
        'soundGlass2',
        'soundGlass3',
        'assets/sounds/glass_broken.ogg',
        'soundGlassBroken',
        'assets/sounds/sand1.ogg',
        'assets/sounds/sand2.ogg',
        'soundSand2',
        'assets/sounds/sand3.ogg',
        'assets/sounds/sound_beep.ogg',
        'soundCountdown',
        'assets/sounds/sound_beep_end.ogg',
        'assets/sounds/sound_beep_close.ogg',
        'soundCountdownClose',
        'alternateExtensions',
        'installPlugin',
        'Sound',
        'addEventListener',
        'complete',
        'progress',
        'loadManifest',
        'error\x20',
        '#mainLoader\x20span',
        'html',
        'round',
        '#mainLoader',
        '17539yJbIAC',
        '76aDfGfI',
        '175470wSfVrn',
        '4QTCavF',
        '1475LvKxYN',
        '16446eZVEIB',
        '892549uLyuUJ',
        '40ksdTTJ',
        '1102815XCzTHf',
        '7064920uIGjWy',
        '22119174GhvwVP',
        'resize',
        'assets/logo.png',
        'logo',
        'assets/button_start.png',
        'buttonStart',
        'assets/yadlogo.png',
        'yadlogo',
        'assets/item_piggy.png',
        'itemPiggy',
        'itemMoney1',
        'assets/item_money_03.png',
        'itemMoney4',
        'assets/item_timer.png',
        'assets/item_light.png',
        'itemLight',
        'itemCandy',
        'assets/item_candy_cover.png',
        'itemCandyCover',
        'itemNeedle',
        'assets/item_pixel.png',
        'assets/button_confirm.png',
        'assets/button_cancel.png',
        'buttonCancel',
        'itemExit',
        'assets/item_confirm_p.png',
        'itemExitP',
        'assets/item_result.png',
        'itemResult',
        'assets/item_result_p.png',
        'itemResultP',
        'assets/button_restart.png',
        'buttonRestart',
        'assets/button_facebook.png',
        'buttonFacebook',
        'assets/button_twitter.png',
        'buttonTwitter',
        'assets/button_whatsapp.png',
        'buttonWhatsapp',
        'assets/button_sound_on.png',
        'assets/button_sound_off.png',
        'buttonSoundOff',
        'assets/button_exit.png',
        'buttonExit',
        'assets/button_settings.png',
        'buttonSettings',
        'length',
        'push',
        'src',
        'guard',
        'game',
        'background',
        'items',
        'game2',
        'candy',
        'finalSrc',
        'candyFinal',
        'mobile'
    ];
    _0xd9a2 = function () {
        return _0x345a87;
    };
    return _0xd9a2();
}
function _0x5e0f(_0x139e76, _0x479711) {
    var _0xd9a268 = _0xd9a2();
    return _0x5e0f = function (_0x5e0f32, _0x4285a7) {
        _0x5e0f32 = _0x5e0f32 - 0xb8;
        var _0x45b97c = _0xd9a268[_0x5e0f32];
        return _0x45b97c;
    }, _0x5e0f(_0x139e76, _0x479711);
}
function handleFileError(_0x23a485) {
    var _0x44929a = _0x5e0f;
    console['log'](_0x44929a(0x12c), _0x23a485);
}
function handleProgress() {
    var _0x62aef5 = _0x5e0f;
    $(_0x62aef5(0x12d))[_0x62aef5(0x12e)](Math[_0x62aef5(0x12f)](loader[_0x62aef5(0x12a)] / 0x1 * 0x64) + '\x20BILLIONS');
}
function handleComplete() {
    toggleLoader(![]), initMain();
}
;
function toggleLoader(_0x5c4c9b) {
    var _0x4bc0ab = _0x5e0f;
    _0x5c4c9b ? $(_0x4bc0ab(0x130))['show']() : $(_0x4bc0ab(0x130))['hide']();
}