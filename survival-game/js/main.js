(function (_0x5b9ef0, _0x1f192e) {
    var _0xed6b8a = _0x3649, _0x7b0212 = _0x5b9ef0();
    while (!![]) {
        try {
            var _0x3ff03a = parseInt(_0xed6b8a(0x74)) / 0x1 + -parseInt(_0xed6b8a(0x75)) / 0x2 * (parseInt(_0xed6b8a(0x76)) / 0x3) + -parseInt(_0xed6b8a(0x77)) / 0x4 + parseInt(_0xed6b8a(0x78)) / 0x5 + -parseInt(_0xed6b8a(0x79)) / 0x6 + parseInt(_0xed6b8a(0x7a)) / 0x7 * (-parseInt(_0xed6b8a(0x7b)) / 0x8) + -parseInt(_0xed6b8a(0x7c)) / 0x9 * (-parseInt(_0xed6b8a(0x7d)) / 0xa);
            if (_0x3ff03a === _0x1f192e)
                break;
            else
                _0x7b0212['push'](_0x7b0212['shift']());
        } catch (_0x1034fd) {
            _0x7b0212['push'](_0x7b0212['shift']());
        }
    }
}(_0x26f5, 0xba100));
var stageW = 0x500, stageH = 0x300, contentW = 0x400, contentH = 0x240, viewport = { 'isLandscape': !![] }, landscapeSize = {
        'w': stageW,
        'h': stageH,
        'cW': contentW,
        'cH': contentH
    }, portraitSize = {
        'w': 0x300,
        'h': 0x400,
        'cW': 0x240,
        'cH': 0x384
    };
function _0x3649(_0x3201af, _0x3348fd) {
    var _0x26f56d = _0x26f5();
    return _0x3649 = function (_0x364901, _0x19c1cb) {
        _0x364901 = _0x364901 - 0x74;
        var _0x585f65 = _0x26f56d[_0x364901];
        return _0x585f65;
    }, _0x3649(_0x3201af, _0x3348fd);
}
function _0x26f5() {
    var _0x500cfc = [
        'mobile',
        '#canvasHolder',
        'show',
        'main',
        '.mobileRotate',
        'css',
        'top',
        'innerWidth',
        'innerHeight',
        'left',
        'abs',
        'canvas',
        'height',
        '1229696pVvrmD',
        '4VMlkds',
        '44886WXOCnl',
        '4717544KlXqbP',
        '6922225upsXhD',
        '5469552rvzQOk',
        '14VXEKwV',
        '3481528jkNNpB',
        '157743jREBuD',
        '650gDaQyA',
        'Survival-Game',
        'musicStatic'
    ];
    _0x26f5 = function () {
        return _0x500cfc;
    };
    return _0x26f5();
}
function initMain() {
    var _0x5a4ae2 = _0x3649;
    YYGGames['startup']({
        'channel': 0x0,
        'appName': _0x5a4ae2(0x7e),
        'complete': () => {
            var _0x903edb = _0x5a4ae2;
            window[_0x903edb(0x7f)] = ![], (!$['browser'][_0x903edb(0x80)] || !isTablet) && $(_0x903edb(0x81))[_0x903edb(0x82)](), initGameCanvas(stageW, stageH), buildGameCanvas(), buildGameButton(), goPage(_0x903edb(0x83)), resizeCanvas();
        }
    });
}
var windowW = windowH = 0x0, scalePercent = 0x0, offset = {
        'x': 0x0,
        'y': 0x0,
        'left': 0x0,
        'top': 0x0
    };
function resizeGameFunc() {
    setTimeout(function () {
        var _0x5c6dcb = _0x3649;
        $(_0x5c6dcb(0x84))['css']('left', checkContentWidth($(_0x5c6dcb(0x84)))), $(_0x5c6dcb(0x84))[_0x5c6dcb(0x85)](_0x5c6dcb(0x86), checkContentHeight($('.mobileRotate'))), windowW = window[_0x5c6dcb(0x87)], windowH = window[_0x5c6dcb(0x88)], scalePercent = windowW / contentW;
        contentH * scalePercent > windowH && (scalePercent = windowH / contentH);
        scalePercent = scalePercent > 0x1 ? 0x1 : scalePercent;
        windowW > stageW && windowH > stageH && (windowW > stageW && (scalePercent = windowW / stageW, stageH * scalePercent > windowH && (scalePercent = windowH / stageH)));
        var _0x5a8a8c = stageW * scalePercent, _0x156058 = stageH * scalePercent;
        offset[_0x5c6dcb(0x89)] = 0x0, offset[_0x5c6dcb(0x86)] = 0x0, _0x5a8a8c > windowW ? offset[_0x5c6dcb(0x89)] = -(_0x5a8a8c - windowW) : offset['left'] = windowW - _0x5a8a8c, _0x156058 > windowH ? offset[_0x5c6dcb(0x86)] = -(_0x156058 - windowH) : offset[_0x5c6dcb(0x86)] = windowH - _0x156058, offset['x'] = 0x0, offset['y'] = 0x0, offset[_0x5c6dcb(0x89)] < 0x0 && (offset['x'] = Math[_0x5c6dcb(0x8a)](offset['left'] / scalePercent / 0x2)), offset[_0x5c6dcb(0x86)] < 0x0 && (offset['y'] = Math[_0x5c6dcb(0x8a)](offset['top'] / scalePercent / 0x2)), $('canvas')[_0x5c6dcb(0x85)]('width', _0x5a8a8c), $(_0x5c6dcb(0x8b))[_0x5c6dcb(0x85)](_0x5c6dcb(0x8c), _0x156058), $(_0x5c6dcb(0x8b))[_0x5c6dcb(0x85)](_0x5c6dcb(0x89), offset[_0x5c6dcb(0x89)] / 0x2), $(_0x5c6dcb(0x8b))[_0x5c6dcb(0x85)]('top', offset['top'] / 0x2), $(window)['scrollTop'](0x0), resizeCanvas();
    }, 0x64);
}