!function(e, t) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var s = t();
        for (var i in s)
            ("object" == typeof exports ? exports : e)[i] = s[i]
    }
}(self, ( () => ( () => {
    "use strict";
    var e = {
        474: (e, t, s) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = s(921)
              , n = s(606)
              , a = s(56)
              , r = s(271);
            class h extends Laya.UIComponent {
                constructor(e) {
                    super(),
                    this.isMounted = !1,
                    this.isOpened = !1,
                    this._scrollValue = 1,
                    this.name = e,
                    this.once(n.default.Mounted, this, this.onMounted),
                    this.once(n.default.Dispose, this, this.onDispose),
                    Laya.timer.frameOnce(1, this, this.onConstruct_)
                }
                onConstruct_() {
                    const e = a.default.create();
                    e.push((e => {
                        this.onPreRender(e)
                    }
                    )),
                    e.push((e => {
                        i.default.loadScene("GameBanner.json", this, (t => {
                            this.size(Laya.stage.width + 400, t.height),
                            this.centerX = 0,
                            this.bottom = 10,
                            t.left = t.right = 0,
                            t.pos(0, 0),
                            this.view = t,
                            this.addChild(this.view),
                            e()
                        }
                        ))
                    }
                    )),
                    e.onComplete(( () => {
                        this.isMounted = !0,
                        Laya.stage.on(Laya.Event.RESIZE, this, this.onResize),
                        this.onResize(),
                        this.event(n.default.Mounted)
                    }
                    )),
                    e.parallel()
                }
                onPreRender(e) {
                    e()
                }
                dispose() {
                    this.event(n.default.Dispose),
                    Laya.stage.offAllCaller(this),
                    Laya.timer.clearAll(this),
                    this.removeSelf(),
                    this.destroy()
                }
                setSwallowTouches(e) {
                    this._touchListener?.setSwallowTouches(e)
                }
                onDisable() {}
                onEnable() {}
                addMountedListener(e, t, s) {
                    this.once(n.default.Mounted, e, t, s),
                    this.isMounted && this.event(n.default.Mounted, s)
                }
                onResize() {}
                onMounted() {
                    this.view.banner.hScrollBarSkin = "",
                    this.view.banner.renderHandler = new Laya.Handler(this,this.renderBanner),
                    this.view.banner.scrollBar && (this.view.banner.scrollBar.mouseWheelEnable = !1),
                    Laya.stage.addChild(this),
                    Laya.timer.frameLoop(1, this, this.onUpdate)
                }
                onDispose() {}
                renderBanner(e, t) {
                    const s = e.dataSource;
                    e.offAll(),
                    e.on(Laya.Event.MOUSE_OVER, e, ( () => {
                        e.zOrder = 100,
                        e.scale(e.scaleX + .1, e.scaleY + .1),
                        this._scrollValue = 0
                    }
                    )),
                    e.on(Laya.Event.MOUSE_OUT, e, ( () => {
                        e.zOrder = t,
                        e.scale(e.scaleX - .1, e.scaleY - .1),
                        this._scrollValue = 1
                    }
                    )),
                    e.on(Laya.Event.MOUSE_DOWN, e, (e => {
                        e.stopPropagation(),
                        r.default.getInstance().navigate("GAME", "MORE", s.id)
                    }
                    ))
                }
                setBannerSize(e, t) {
                    const s = this.view.banner.itemRender;
                    s.props.width = e,
                    s.props.height = t,
                    s.props.y = t / 2;
                    const i = s.child[0].props
                      , n = s.child[0].child[0].props;
                    i.width = e,
                    i.height = t,
                    n.width = e,
                    n.height = t,
                    i.x = .5 * e,
                    i.y = .5 * t,
                    n.x = .5 * e,
                    n.y = .5 * t;
                    const a = this.view.banner.cells;
                    for (const s of a) {
                        s.width = e,
                        s.height = t;
                        const i = s._children || s._childs;
                        i[0].width = e,
                        i[0].height = t,
                        i[0].mask.width = e,
                        i[0].mask.height = t,
                        i[0].x = .5 * e,
                        i[0].y = .5 * t,
                        i[0].mask.x = .5 * e,
                        i[0].mask.y = .5 * t
                    }
                    this.view.banner.scrollBar && (this.view.banner.scrollBar.mouseWheelEnable = !1),
                    this.view.banner.spaceX = 20
                }
                onUpdate() {
                    this.view.banner.scrollBar && (this.view.banner.scrollBar.value += this._scrollValue,
                    this.view.banner.scrollBar.value >= this.view.banner.scrollBar.max && (this.view.banner.scrollBar.value = 0))
                }
                getChildAt(e) {
                    return {}
                }
                get games() {
                    return this.view?.banner || {}
                }
            }
            t.default = h
        }
        ,
        759: (e, t, s) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = s(921)
              , n = s(606)
              , a = s(56)
              , r = s(271);
            class h extends Laya.UIComponent {
                constructor(e) {
                    super(),
                    this.isMounted = !1,
                    this.isOpened = !1,
                    this.w = 200,
                    this.h = 150,
                    this.name = e,
                    this.once(n.default.Mounted, this, this.onMounted),
                    this.once(n.default.Dispose, this, this.onDispose),
                    Laya.timer.frameOnce(1, this, this.onConstruct_)
                }
                onConstruct_() {
                    const e = a.default.create();
                    e.push((e => {
                        this.onPreRender(e)
                    }
                    )),
                    e.push((e => {
                        i.default.loadScene("GameBox.json", this, (t => {
                            t.pos(0, 0),
                            this.view = t,
                            this.size(t.width, t.height),
                            this.addChild(this.view),
                            this.on(Laya.Event.RESIZE, this, ( () => {
                                t.size(this.width, this.height)
                            }
                            )),
                            e()
                        }
                        ))
                    }
                    )),
                    e.onComplete(( () => {
                        this.isMounted = !0,
                        Laya.stage.on(Laya.Event.RESIZE, this, this.onResize),
                        this.onResize(),
                        this.event(n.default.Mounted)
                    }
                    )),
                    e.parallel()
                }
                onPreRender(e) {
                    e()
                }
                dispose() {
                    this.event(n.default.Dispose),
                    Laya.stage.offAllCaller(this),
                    Laya.timer.clearAll(this),
                    this.removeSelf(),
                    this.destroy()
                }
                onDisable() {}
                onEnable() {}
                addMountedListener(e, t, s) {
                    this.once(n.default.Mounted, e, t, s),
                    this.isMounted && this.event(n.default.Mounted, s)
                }
                onResize() {}
                onMounted() {
                    Laya.stage.addChild(this),
                    this.view.game1.on(Laya.Event.MOUSE_DOWN, this, (e => {
                        r.default.getInstance().navigate("GAME", "MORE", this.view.game1.dataSource.id)
                    }
                    )),
                    this.view.game2.on(Laya.Event.MOUSE_DOWN, this, (e => {
                        r.default.getInstance().navigate("GAME", "MORE", this.view.game2.dataSource.id)
                    }
                    ))
                }
                onDispose() {}
                setBannerSize(e, t) {
                    this.w = e,
                    this.h = t,
                    this.onBannerResize()
                }
                onBannerResize() {
                    const e = this.game1.getChildByName("thumb")
                      , t = this.game2.getChildByName("thumb")
                      , s = this.game1.getChildByName("bg")
                      , i = this.game2.getChildByName("bg");
                    e.width = t.width = this.w,
                    e.height = t.height = this.h,
                    e.mask && (e.mask.width = this.w,
                    e.mask.height = this.h,
                    e.mask.x = .5 * this.w,
                    e.mask.y = .5 * this.h),
                    t.mask && (t.mask.width = this.w,
                    t.mask.height = this.h,
                    t.mask.x = .5 * this.w,
                    t.mask.y = .5 * this.h),
                    s.width = i.width = this.w + 14,
                    s.height = i.height = this.h + 14
                }
                get game1() {
                    return this.view.game1
                }
                get game2() {
                    return this.view.game2
                }
            }
            t.default = h
        }
        ,
        606: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            class s {
            }
            t.default = s,
            s.Mounted = "Mounted",
            s.Dispose = "Dispose"
        }
        ,
        921: (e, t, s) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = s(907)
              , n = s(298)
              , a = new class {
                constructor() {
                    this._spineTemplets = new Map,
                    this.fetchings = {},
                    this.callbacks = {},
                    this.resourcesAssets = {}
                }
                get(e) {
                    return Laya.loader.getRes(e)
                }
                offAllCaller(e) {
                    Object.values(this.callbacks).forEach((t => {
                        t.offAllCaller(e)
                    }
                    ))
                }
                loadSpine(e, t, s) {
                    const a = this.callbacks[e] = this.callbacks[e] || new i.default;
                    if (this.fetchings[e])
                        return void a.once(t, s);
                    if (this.fetchings[e] = !0,
                    a.once(t, s),
                    this._spineTemplets.has(e)) {
                        let t = this._spineTemplets.get(e);
                        return void a.fire([t.buildArmature()])
                    }
                    const r = new Laya.SpineTemplet(Laya.SpineVersion.v4_0);
                    r.on(Laya.Event.COMPLETE, this, ( () => {
                        this.fetchings[e] = !1;
                        let t = this._spineTemplets.get(e);
                        a.fire([t.buildArmature()])
                    }
                    )),
                    this._spineTemplets.set(e, r),
                    this._spineTemplets.set(n.default.basename(e, ".json"), r),
                    r.loadAni(e)
                }
                loadScene(e, t, s) {
                    const n = this.callbacks[e] = this.callbacks[e] || new i.default;
                    if (!this.fetchings[e])
                        return this.fetchings[e] = !0,
                        n.once(t, s),
                        this.resourcesAssets[e] ? (this.fetchings[e] = !1,
                        void n.fire([this.resourcesAssets[e]])) : (Laya.Scene.load(e, Laya.Handler.create(this, (t => {
                            this.fetchings[e] = !1,
                            n.fire([t])
                        }
                        ))),
                        n);
                    n.once(t, s)
                }
                load(e, t, s) {
                    const n = this.callbacks[e] = this.callbacks[e] || new i.default;
                    if (!this.fetchings[e])
                        return this.fetchings[e] = !0,
                        n.once(t, s),
                        Laya.loader.load(e, Laya.Handler.create(this, (t => {
                            this.fetchings[e] = !1,
                            n.fire([t])
                        }
                        ))),
                        n;
                    n.once(t, s)
                }
            }
            ;
            t.default = a
        }
        ,
        26: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = class {
                static getInstance() {
                    return this.instance || (this.instance = new this),
                    this.instance
                }
            }
        }
        ,
        907: (e, t, s) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = s(729);
            class n {
                constructor(e) {
                    this._name = e || "Emitter_" + n._ID++
                }
                hasListener(e) {
                    return !(!this._events || !this._events[e])
                }
                fire(e=null) {
                    if (!this._events || !this._events[this._name])
                        return !1;
                    var t = this._events[this._name];
                    if (t.run)
                        t.once && delete this._events[this._name],
                        null != e ? t.runWith(e) : t.run();
                    else {
                        for (var s = 0, i = t.length; s < i; s++) {
                            var n = t[s];
                            n && (null != e ? n.runWith(e) : n.run()),
                            n && !n.once || (t.splice(s, 1),
                            s--,
                            i--)
                        }
                        0 === t.length && this._events && this._events[this._name] && !this._events[this._name].run && delete this._events[this._name]
                    }
                    return !0
                }
                on(e, t, s=null) {
                    return this._createListener(this._name, e, t, s, !1)
                }
                once(e, t, s=null) {
                    return this._createListener(this._name, e, t, s, !0)
                }
                _createListener(e, t, s, i, n, r=!0) {
                    r && this.off(t, s, n);
                    var h = a.create(t || this, s, i, n);
                    this._events || (this._events = {});
                    var o = this._events;
                    return o[e] ? o[e].run ? o[e] = [o[e], h] : o[e].push(h) : o[e] = h,
                    this
                }
                off(e, t, s=!1) {
                    if (!this._events || !this._events[this._name])
                        return this;
                    var i = this._events[this._name];
                    if (null != i)
                        if (i.run)
                            e && i.caller !== e || null != t && i.method !== t || s && !i.once || (delete this._events[this._name],
                            i.recover());
                        else {
                            for (var n = 0, a = 0, r = i.length; a < r; a++) {
                                var h = i[a];
                                h ? !h || e && h.caller !== e || null != t && h.method !== t || s && !h.once || (n++,
                                i[a] = null,
                                h.recover()) : n++
                            }
                            n === r && delete this._events[this._name]
                        }
                    return this
                }
                offAllOnce() {
                    if (!this._events)
                        return this;
                    let e = this._events[this._name];
                    if (null != e)
                        if (e.run && e.once)
                            delete this._events[this._name],
                            e.recover();
                        else {
                            let t = 0;
                            for (let s = 0, i = e.length; s < i; s++) {
                                let i = e[s];
                                i ? i && i.once && (t++,
                                e[s] = null,
                                i.recover()) : t++
                            }
                        }
                    return this
                }
                offAll() {
                    var e = this._events;
                    if (!e)
                        return this;
                    for (var t in e)
                        this._recoverHandlers(e[t]);
                    return this._events = null,
                    this
                }
                offAllCaller(e) {
                    if (e && this._events)
                        for (var t in this._events)
                            this.off(t, e, null);
                    return this
                }
                _recoverHandlers(e) {
                    if (e)
                        if (e.run)
                            e.recover();
                        else
                            for (var t = e.length - 1; t > -1; t--)
                                e[t] && (e[t].recover(),
                                e[t] = null)
                }
            }
            t.default = n,
            n._ID = 0;
            class a extends i.Handler {
                constructor(e, t, s, i) {
                    super(e, t, s, i)
                }
                recover() {
                    this._id > 0 && (this._id = 0,
                    a._pool.push(this.clear()))
                }
                static create(e, t, s=null, i=!0) {
                    return a._pool.length ? a._pool.pop().setTo(e, t, s, i) : new a(e,t,s,i)
                }
            }
            a._pool = []
        }
        ,
        729: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.Handler = void 0;
            class s {
                constructor(e=null, t=null, s=null, i=!1) {
                    this.once = !1,
                    this._id = 0,
                    this.setTo(e, t, s, i)
                }
                setTo(e, t, i, n=!1) {
                    return this._id = s._gid++,
                    this.caller = e,
                    this.method = t,
                    this.args = i,
                    this.once = n,
                    this
                }
                run() {
                    if (null == this.method)
                        return null;
                    var e = this._id
                      , t = this.method.apply(this.caller, this.args);
                    return this._id === e && this.once && this.recover(),
                    t
                }
                runWith(e) {
                    if (null == this.method)
                        return null;
                    var t = this._id;
                    if (null == e)
                        var s = this.method.apply(this.caller, this.args);
                    else
                        s = this.args || e.unshift ? this.args ? this.method.apply(this.caller, this.args.concat(e)) : this.method.apply(this.caller, e) : this.method.call(this.caller, e);
                    return this._id === t && this.once && this.recover(),
                    s
                }
                clear() {
                    return this.caller = null,
                    this.method = null,
                    this.args = null,
                    this
                }
                recover() {
                    this._id > 0 && (this._id = 0,
                    s._pool.push(this.clear()))
                }
                static create(e, t, i=null, n=!0) {
                    return s._pool.length ? s._pool.pop().setTo(e, t, i, n) : new s(e,t,i,n)
                }
            }
            t.Handler = s,
            s._pool = [],
            s._gid = 1
        }
        ,
        424: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.default = class {
                static get(e, t) {
                    return new Promise(( (s, i) => {
                        const n = {
                            url: "",
                            responseType: "json",
                            headers: {},
                            async: !0
                        };
                        "string" == typeof e ? n.url = e : (n.url = e.url,
                        Object.assign(n, e));
                        const a = new XMLHttpRequest;
                        a.responseType = n.responseType;
                        for (const [e,t] of Object.entries(n.headers))
                            a.setRequestHeader(e, t);
                        // H2Fix
                        a.open("GET", n.url, !0),
                        // a.open("GET", "./patch/yyggames/res/games.json?"+ n.url, !0),
                        a.onload = function() {
                            let e = a.response;
                            if (200 != a.status && 0 != a.status || e.byteLength < 10)
                                return t && t(null),
                                void s(null);
                            try {
                                e = JSON.parse(e)
                            } catch (e) {}
                            s(e),
                            t && t(e)
                        }
                        ,
                        a.onerror = function(e) {
                            s(null),
                            t && t(null)
                        }
                        ,
                        a.send()
                    }
                    ))
                }
                static post(e, t, s) {
                    return new Promise(( (i, n) => {
                        let a = t;
                        const r = Object.assign({
                            url: "",
                            responseType: "json",
                            headers: {},
                            async: !0
                        }, e)
                          , h = new XMLHttpRequest;
                        h.open("POST", r.url, r.async);
                        for (const [e,s] of Object.entries(r.headers)) {
                            const i = e.toLowerCase();
                            h.setRequestHeader(i, s),
                            "content-type" == i && s.includes("application/x-www-form-urlencoded") && (a = Object.keys(t).map((e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)).join("&"))
                        }
                        h.responseType = r.responseType,
                        h.onload = function(e) {
                            var t = void 0 !== h.status ? h.status : 200;
                            if (200 !== t && 204 !== t && 0 !== t)
                                throw new Error("SEVRVER_OPTIONS_TIMEOUT");
                            try {
                                const e = JSON.parse(h.responseText);
                                i(e),
                                s && s(e)
                            } catch (e) {
                                throw "SEVRVER_OPTIONS" + e
                            }
                        }
                        ,
                        h.send(a)
                    }
                    ))
                }
            }
        }
        ,
        403: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.Poolableify = t.Poolableified = void 0;
            class s {
                constructor(e) {
                    this.freeObjects = [],
                    this.className = e
                }
                free(e) {
                    if (null == e)
                        throw "object cannot be null.";
                    this.freeObjects.push(e),
                    e.free && e.free()
                }
                obtain() {}
                get(...e) {
                    this.getor || (this.getor = () => {
                        if (this.freeObjects.length > 0)
                            return this.freeObjects.pop()
                    }
                    );
                    let t = this.getor(...e);
                    return t || (t = this.className.new ? this.className.new() : new this.className(...e)),
                    t.obtain && t.obtain(),
                    t
                }
            }
            t.default = s,
            t.Poolableified = class {
                static create() {
                    return this.POOL || (this.POOL = new s(this)),
                    this.POOL.get()
                }
                static free(e) {
                    return this.POOL.free(e)
                }
            }
            ,
            t.Poolableify = function(e, t) {
                return class extends e {
                    static create(...e) {
                        return this.POOL || (this.POOL = new s(this),
                        this.POOL.getor = t?.bind(this.POOL)),
                        this.POOL.get(...e)
                    }
                    static free(e) {
                        return this.POOL.free(e)
                    }
                }
            }
        }
        ,
        56: (e, t, s) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = s(403);
            class n extends i.Poolableified {
                constructor() {
                    super(...arguments),
                    this.isRunning = !1
                }
                init(e) {
                    return this.call = e,
                    this.isRunning = !1,
                    this
                }
                free() {
                    this.call = null,
                    this.isRunning = !1
                }
            }
            class a extends i.Poolableified {
                constructor() {
                    super(...arguments),
                    this._array = [],
                    this.pre = 0,
                    this.length = 0,
                    this.autoFree = !0
                }
                onProgress(e) {
                    return this.progress = e,
                    this
                }
                onClear(e) {
                    this._func_clear = e
                }
                onComplete(e) {
                    this.complete = e
                }
                push(e) {
                    if ("function" != typeof e)
                        throw "not function";
                    this._array.push(n.create().init(e)),
                    this.length = this._array.length
                }
                free() {
                    this.clear()
                }
                parallel() {
                    if (0 == this._array.length && 0 == this.pre && this.complete)
                        return this.complete(),
                        this.complete = null,
                        void (this.autoFree && a.free(this));
                    for (let e = 0; e < this._array.length; e++) {
                        const t = this._array[e];
                        t.isRunning || (t.isRunning = !0,
                        t.call(( () => {
                            this.pre++,
                            this.progress && this.progress(this.pre, this.length),
                            this.parallel()
                        }
                        )))
                    }
                    0 !== this.length && this.length == this.pre && (this.complete && this.complete(),
                    this.complete = null,
                    this.autoFree && a.free(this))
                }
                clear() {
                    this._func_clear && this._func_clear(),
                    this._func_clear = null,
                    this._array.length = 0,
                    this.pre = this.length = 0,
                    this.progress = null,
                    this.complete = null
                }
                sequence() {
                    const e = this._array.shift();
                    e ? e.call(( () => {
                        this.pre++,
                        this.progress && this.progress(this.pre, this.length),
                        this.sequence()
                    }
                    )) : (this.complete && this.complete(),
                    this.complete = null,
                    this.autoFree && a.free(this))
                }
            }
            t.default = a
        }
        ,
        298: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const s = /(\.[^\.\/\?\\]*)(\?.*)?$/;
            t.default = class {
                static join(...e) {
                    let t = "";
                    for (const s of e)
                        t = (t + ("" === t ? "" : "/") + s).replace(/(\/|\\\\)$/, "");
                    return t
                }
                static extname(e) {
                    const t = s.exec(e);
                    return t ? t[1] : ""
                }
                static basename(e, t) {
                    const s = e.indexOf("?");
                    s > 0 && (e = e.substring(0, s));
                    const i = (/(\/|\\)([^\/\\]+)$/g.exec(e.replace(/(\/|\\)$/, "")) || ["", "", e])[2];
                    return t && e.substring(e.length - t.length).toLowerCase() === t.toLowerCase() ? i.substring(0, i.length - t.length) : i
                }
            }
        }
        ,
        271: (e, t, s) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const i = s(26)
              , n = s(424)
              , a = s(56)
              , r = s(474)
              , h = s(759);
            class o extends i.default {
                constructor() {
                    super(...arguments),
                    this.inited = !1,
                    this._navigate = {
                        isNavigated: !1,
                        SCREEN: "GAME",
                        TAG: "MORE",
                        fid: ""
                    },
                    this.isNavigated = !1
                }
                init(e) {
                    if (this.inited)
                        return;
                    this.inited = !0;
                    const t = a.default.create();
                    t.push((t => {
                        n.default.get({
                            url: e.json
                        }, (s => {
                            this.forgames = [];
                            for (const t of s)
                                t.appName = t.nameid || "",
                                t.id = t.id + "",
                                t.appName.toLowerCase() !== e.appName.toLowerCase() && this.forgames.push(t);
                            t()
                        }
                        ))
                    }
                    )),
                    t.push((e => {
                        n.default.get({
                            url: "https://h5gamessdk.yyggames.com/sdk/YYGGames_modules/module_frogames/LayaEngineGame/version.json"
                        }, (t => {
                            const s = Laya.URL.formatURL;
                            Laya.URL.formatURL = function(e) {
                                return t[e] ? t[e] : s(e)
                            }
                            ,
                            e()
                        }
                        ))
                    }
                    )),
                    t.push((e => {
                        const t = document.getElementById("layaCanvas");
                        t && (t.addEventListener("mouseup", this.onNavigate.bind(this)),
                        t.addEventListener("touchend", this.onNavigate.bind(this))),
                        e()
                    }
                    )),
                    t.onComplete(( () => {
                        const t = a.default.create();
                        t.push((t => {
                            this.gameBanner = new r.default,
                            this.gameBanner.addMountedListener(this, ( () => {
                                this.forgames.sort((function() {
                                    return .5 - Math.random()
                                }
                                )),
                                this.gameBanner.setBannerSize(e.width, e.height),
                                this.gameBanner.view.banner.array = this.forgames,
                                this.gameBanner.zOrder = 2e5,
                                t()
                            }
                            ))
                        }
                        )),
                        t.push((t => {
                            this.gameBox = new h.default,
                            this.gameBox.mouseThrough = !0,
                            this.gameBox.addMountedListener(this, ( () => {
                                this.forgames.sort((function() {
                                    return .5 - Math.random()
                                }
                                )),
                                this.gameBox.view.game1.dataSource = this.forgames[0],
                                this.gameBox.view.game2.dataSource = this.forgames[1],
                                this.gameBox.zOrder = 2e5,
                                this.gameBox.setBannerSize(e.width, e.height),
                                t()
                            }
                            ))
                        }
                        )),
                        t.onComplete(( () => {
                            e.cb(this)
                        }
                        )),
                        t.parallel()
                    }
                    )),
                    t.parallel()
                }
                onNavigate() {
                    this._navigate.isNavigated && (this._navigate.isNavigated = !1,
                    YYGGames.navigate(this._navigate.SCREEN, this._navigate.TAG, this._navigate.fid))
                }
                navigate(e, t, s) {
                    this._navigate.isNavigated || (this._navigate.isNavigated = !0,
                    this._navigate.SCREEN = e,
                    this._navigate.TAG = t,
                    this._navigate.fid = s)
                }
            }
            t.default = o,
            e.exports = o.getInstance(),
            window.module_forgames_LayaEngineGame = o.getInstance()
        }
    }
      , t = {};
    return function s(i) {
        var n = t[i];
        if (void 0 !== n)
            return n.exports;
        var a = t[i] = {
            exports: {}
        };
        return e[i](a, a.exports, s),
        a.exports
    }(271)
}
)()));
