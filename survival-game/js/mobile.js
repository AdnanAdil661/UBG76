function _0x5518(_0x16da74, _0x31fb7e) {
    var _0x37613a = _0x3761();
    return _0x5518 = function (_0x551873, _0x1c528a) {
        _0x551873 = _0x551873 - 0x1a8;
        var _0x20a9d9 = _0x37613a[_0x551873];
        return _0x20a9d9;
    }, _0x5518(_0x16da74, _0x31fb7e);
}
(function (_0x2a6e74, _0x2f9a3c) {
    var _0x303892 = _0x5518, _0x43a8ca = _0x2a6e74();
    while (!![]) {
        try {
            var _0x1e7911 = -parseInt(_0x303892(0x1a8)) / 0x1 * (-parseInt(_0x303892(0x1a9)) / 0x2) + parseInt(_0x303892(0x1aa)) / 0x3 + parseInt(_0x303892(0x1ab)) / 0x4 + parseInt(_0x303892(0x1ac)) / 0x5 + -parseInt(_0x303892(0x1ad)) / 0x6 + parseInt(_0x303892(0x1ae)) / 0x7 * (parseInt(_0x303892(0x1af)) / 0x8) + -parseInt(_0x303892(0x1b0)) / 0x9;
            if (_0x1e7911 === _0x2f9a3c)
                break;
            else
                _0x43a8ca['push'](_0x43a8ca['shift']());
        } catch (_0x2a293e) {
            _0x43a8ca['push'](_0x43a8ca['shift']());
        }
    }
}(_0x3761, 0xd6c98));
var resizeTimer;
function checkMobileEvent() {
    var _0x55c95b = _0x5518;
    ($[_0x55c95b(0x1b1)][_0x55c95b(0x1b2)] || isTablet) && ($(window)[_0x55c95b(0x1b3)](_0x55c95b(0x1b4))['on']('orientationchange', function (_0x230b25) {
        var _0x1bcdcd = _0x55c95b;
        $(_0x1bcdcd(0x1b5))[_0x1bcdcd(0x1b6)](), $(_0x1bcdcd(0x1b7))[_0x1bcdcd(0x1b6)](), clearTimeout(resizeTimer), resizeTimer = setTimeout(checkMobileOrientation, 0x3e8);
    }), checkMobileOrientation());
}
function _0x3761() {
    var _0x24a655 = [
        'isLandscape',
        '3SKxZor',
        '846842VdBqEx',
        '3062853CzcnVd',
        '3279516xQQgcW',
        '108005vXxZbl',
        '9848118TJLCdf',
        '6552385LGSzcf',
        '8gLANQP',
        '13928652WEmBzo',
        'browser',
        'mobile',
        'off',
        'orientationchange',
        '#canvasHolder',
        'hide',
        '#rotateHolder',
        'innerWidth',
        'innerHeight'
    ];
    _0x3761 = function () {
        return _0x24a655;
    };
    return _0x3761();
}
function checkMobileOrientation() {
    var _0x1c8c44 = _0x5518, _0x119de7 = ![];
    window[_0x1c8c44(0x1b8)] > window[_0x1c8c44(0x1b9)] && (_0x119de7 = !![]), viewport['isLandscape'] = _0x119de7, changeViewport(viewport[_0x1c8c44(0x1ba)]), resizeGameFunc(), $('#canvasHolder')['show']();
}
function toggleRotate(_0x1cf1fa) {
    var _0x14840d = _0x5518;
    _0x1cf1fa ? $('#rotateHolder')['fadeIn']() : $(_0x14840d(0x1b7))['fadeOut'](), resizeGameFunc();
}