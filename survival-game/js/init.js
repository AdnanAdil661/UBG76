(function (_0x213907, _0xc25c4) {
    var _0x2a6709 = _0x3511, _0x28d7b9 = _0x213907();
    while (!![]) {
        try {
            var _0x109131 = parseInt(_0x2a6709(0x1f1)) / 0x1 * (parseInt(_0x2a6709(0x1f2)) / 0x2) + parseInt(_0x2a6709(0x1f3)) / 0x3 + parseInt(_0x2a6709(0x1f4)) / 0x4 + -parseInt(_0x2a6709(0x1f5)) / 0x5 * (-parseInt(_0x2a6709(0x1f6)) / 0x6) + -parseInt(_0x2a6709(0x1f7)) / 0x7 * (parseInt(_0x2a6709(0x1f8)) / 0x8) + parseInt(_0x2a6709(0x1f9)) / 0x9 * (parseInt(_0x2a6709(0x1fa)) / 0xa) + -parseInt(_0x2a6709(0x1fb)) / 0xb;
            if (_0x109131 === _0xc25c4)
                break;
            else
                _0x28d7b9['push'](_0x28d7b9['shift']());
        } catch (_0x18fd25) {
            _0x28d7b9['push'](_0x28d7b9['shift']());
        }
    }
}(_0x3ccf, 0xe66de));
function _0x3511(_0x239c18, _0xbe28e4) {
    var _0x3ccf27 = _0x3ccf();
    return _0x3511 = function (_0x351119, _0x60ac10) {
        _0x351119 = _0x351119 - 0x1f1;
        var _0x3edcd8 = _0x3ccf27[_0x351119];
        return _0x3edcd8;
    }, _0x3511(_0x239c18, _0xbe28e4);
}
var stageWidth, stageHeight = 0x0, isLoaded = ![];
$(function () {
    var _0x4f7ead = _0x3511, _0x2bac86 = function () {
            var _0x24be7e = _0x3511;
            try {
                createjs[_0x24be7e(0x1fc)]['context'][_0x24be7e(0x1fd)] === _0x24be7e(0x1fe) && (createjs[_0x24be7e(0x1fc)]['context'][_0x24be7e(0x1ff)](), window[_0x24be7e(0x200)](_0x24be7e(0x201), _0x2bac86));
            } catch (_0x2de151) {
                console[_0x24be7e(0x202)]('There\x20was\x20an\x20error\x20while\x20trying\x20to\x20resume\x20the\x20SoundJS\x20Web\x20Audio\x20context...'), console[_0x24be7e(0x202)](_0x2de151);
            }
        };
    window[_0x4f7ead(0x203)](_0x4f7ead(0x201), _0x2bac86), window[_0x4f7ead(0x204)][_0x4f7ead(0x205)][_0x4f7ead(0x206)](0x0, 0x4) === _0x4f7ead(0x207) && alert(_0x4f7ead(0x208)), $(window)[_0x4f7ead(0x209)](function () {
        resizeLoaderFunc();
    }), resizeLoaderFunc(), checkBrowser();
});
function resizeLoaderFunc() {
    var _0x3bdf57 = _0x3511;
    stageWidth = $(window)[_0x3bdf57(0x20a)](), stageHeight = $(window)[_0x3bdf57(0x20b)](), $(_0x3bdf57(0x20c))[_0x3bdf57(0x20d)]('left', checkContentWidth($(_0x3bdf57(0x20c)))), $(_0x3bdf57(0x20c))['css']('top', checkContentHeight($(_0x3bdf57(0x20c))));
}
var browserSupport = ![], isTablet;
function _0x3ccf() {
    var _0x36da8a = [
        'location',
        'protocol',
        'substr',
        'file',
        'To\x20install\x20the\x20game\x20just\x20upload\x20folder\x20\x27game\x27\x20to\x20your\x20server.\x20The\x20game\x20won\x27t\x20run\x20locally\x20with\x20some\x20browser\x20like\x20Chrome\x20due\x20to\x20some\x20security\x20mode.',
        'resize',
        'width',
        'height',
        '#mainLoader',
        'css',
        'userAgent',
        'canvas',
        'getContext',
        'show',
        '1603901VnTZbQ',
        '2jgGuAJ',
        '2636487hfazif',
        '346428OynUkx',
        '485RLILRu',
        '16494mNZIAi',
        '311143DJCIPl',
        '328smKcAN',
        '873KYZsQQ',
        '105670NHLBZh',
        '12042162NBBRSK',
        'WebAudioPlugin',
        'state',
        'suspended',
        'resume',
        'removeEventListener',
        'click',
        'error',
        'addEventListener'
    ];
    _0x3ccf = function () {
        return _0x36da8a;
    };
    return _0x3ccf();
}
function checkBrowser() {
    var _0x1312b4 = _0x3511;
    isTablet = /ipad|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i['test'](navigator[_0x1312b4(0x20e)]['toLowerCase']()), deviceVer = getDeviceVer();
    var _0x591601 = document['createElement'](_0x1312b4(0x20f));
    _0x591601[_0x1312b4(0x210)] && (browserSupport = !![]), browserSupport ? !isLoaded && (isLoaded = !![], initPreload()) : $('#notSupportHolder')[_0x1312b4(0x211)]();
}