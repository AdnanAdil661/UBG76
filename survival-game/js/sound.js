(function (_0xb2c8e5, _0x267bc9) {
    var _0x39c612 = _0x344e, _0x1e948a = _0xb2c8e5();
    while (!![]) {
        try {
            var _0x29cefd = parseInt(_0x39c612(0x1b6)) / 0x1 * (-parseInt(_0x39c612(0x1b7)) / 0x2) + parseInt(_0x39c612(0x1b8)) / 0x3 + parseInt(_0x39c612(0x1b9)) / 0x4 + parseInt(_0x39c612(0x1ba)) / 0x5 * (parseInt(_0x39c612(0x1bb)) / 0x6) + parseInt(_0x39c612(0x1bc)) / 0x7 * (-parseInt(_0x39c612(0x1bd)) / 0x8) + -parseInt(_0x39c612(0x1be)) / 0x9 * (-parseInt(_0x39c612(0x1bf)) / 0xa) + -parseInt(_0x39c612(0x1c0)) / 0xb;
            if (_0x29cefd === _0x267bc9)
                break;
            else
                _0x1e948a['push'](_0x1e948a['shift']());
        } catch (_0x3f2889) {
            _0x1e948a['push'](_0x1e948a['shift']());
        }
    }
}(_0x1b86, 0x6c67e));
var enableMobileSound = !![], soundOn;
function playSound(_0x1be3ee, _0x3a1b3a) {
    var _0x17bff7 = _0x344e;
    if (soundOn) {
        var _0x290041;
        if (_0x3a1b3a) {
            _0x290041 = -0x1, createjs[_0x17bff7(0x1c1)][_0x17bff7(0x1c2)]();
            var _0x205c83 = new createjs[(_0x17bff7(0x1c3))]()['set']({
                'interrupt': createjs[_0x17bff7(0x1c1)][_0x17bff7(0x1c4)],
                'loop': _0x290041
            });
            musicLoop = createjs[_0x17bff7(0x1c1)][_0x17bff7(0x1c5)](_0x1be3ee, _0x205c83);
            if (musicLoop == null || musicLoop[_0x17bff7(0x1c6)] == createjs[_0x17bff7(0x1c1)][_0x17bff7(0x1c7)])
                return;
            else
                musicLoop[_0x17bff7(0x1c8)](), musicLoop['addEventListener'](_0x17bff7(0x1c9), function (_0xcf4f77) {
                });
        } else
            _0x290041 = 0x0, createjs['Sound'][_0x17bff7(0x1c5)](_0x1be3ee);
    }
}
function stopSound() {
    var _0x587992 = _0x344e;
    createjs[_0x587992(0x1c1)][_0x587992(0x1c2)]();
}
function _0x344e(_0x99c742, _0x5c4b98) {
    var _0x1b8688 = _0x1b86();
    return _0x344e = function (_0x344e25, _0x4081f2) {
        _0x344e25 = _0x344e25 - 0x1b6;
        var _0x18921b = _0x1b8688[_0x344e25];
        return _0x18921b;
    }, _0x344e(_0x99c742, _0x5c4b98);
}
$['sound'] = {};
function playSoundLoop(_0x5d1dfd) {
    var _0x531826 = _0x344e;
    soundOn && ($[_0x531826(0x1ca)][_0x5d1dfd] == null && ($[_0x531826(0x1ca)][_0x5d1dfd] = createjs[_0x531826(0x1c1)][_0x531826(0x1c5)](_0x5d1dfd), $[_0x531826(0x1ca)][_0x5d1dfd]['removeAllEventListeners'](), $[_0x531826(0x1ca)][_0x5d1dfd][_0x531826(0x1cb)](_0x531826(0x1c9), function () {
        var _0x3ce29d = _0x531826;
        $[_0x3ce29d(0x1ca)][_0x5d1dfd][_0x3ce29d(0x1c5)]();
    })));
}
function stopSoundLoop(_0x5db91a) {
    var _0x1233a8 = _0x344e;
    soundOn && ($['sound'][_0x5db91a] != null && ($['sound'][_0x5db91a][_0x1233a8(0x1c2)](), $['sound'][_0x5db91a] = null));
}
function setSoundVolume(_0xf228f2, _0x17e0fe) {
    var _0x13df0a = _0x344e;
    soundOn && ($['sound'][_0xf228f2] != null && ($[_0x13df0a(0x1ca)][_0xf228f2][_0x13df0a(0x1cc)] = _0x17e0fe));
}
function playSoundID(_0x46a2fb, _0x23a654) {
    var _0x408dc3 = _0x344e;
    if (soundOn) {
        if ($[_0x408dc3(0x1ca)][_0x46a2fb] == null) {
            $[_0x408dc3(0x1ca)][_0x46a2fb] = createjs['Sound'][_0x408dc3(0x1c5)](_0x46a2fb), $['sound'][_0x46a2fb][_0x408dc3(0x1c8)]();
            if (_0x23a654 != undefined)
                $['sound'][_0x46a2fb][_0x408dc3(0x1cb)](_0x408dc3(0x1c9), _0x23a654);
        }
    }
}
function _0x1b86() {
    var _0xb609b5 = [
        'sound',
        'addEventListener',
        'volume',
        '57AOlAIg',
        '4614YTsGQs',
        '1751250ZBVAsk',
        '3075940MBDkAT',
        '15JksKgJ',
        '527232aeAmda',
        '82453THSpFx',
        '568Frkucp',
        '457038ODwgoD',
        '140eXEaIN',
        '10070071WYQfQv',
        'Sound',
        'stop',
        'PlayPropsConfig',
        'INTERRUPT_NONE',
        'play',
        'playState',
        'PLAY_FAILED',
        'removeAllEventListeners',
        'complete'
    ];
    _0x1b86 = function () {
        return _0xb609b5;
    };
    return _0x1b86();
}
function stopSoundID(_0xc3e18a) {
    var _0x592fa4 = _0x344e;
    soundOn && ($[_0x592fa4(0x1ca)][_0xc3e18a] != null && ($[_0x592fa4(0x1ca)][_0xc3e18a][_0x592fa4(0x1c2)](), $[_0x592fa4(0x1ca)][_0xc3e18a] = null));
}
function toggleMute(_0x1cf41a) {
    var _0x4d0b37 = _0x344e;
    createjs[_0x4d0b37(0x1c1)]['muted'] = _0x1cf41a;
}