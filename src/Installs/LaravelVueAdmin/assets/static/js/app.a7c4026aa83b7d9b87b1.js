webpackJsonp([2, 0], [function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var l = s(5),
        i = e(l),
        n = s(620),
        r = e(n);
    s(362);
    var o = s(540),
        c = e(o),
        d = s(619),
        p = e(d),
        v = s(621),
        f = e(v),
        u = s(223),
        h = e(u),
        _ = s(618),
        m = e(_),
        g = s(537),
        C = e(g),
        b = s(248),
        y = e(b);
    s(290), i.default.use(r.default), i.default.use(p.default), i.default.use(f.default), i.default.use(h.default), i.default.use(m.default, {
        color: "#3DA2E0",
        failedColor: "#874b4b",
        thickness: "2px",
        transition: {
            speed: "0.2s",
            opacity: "0.6s"
        },
        autoRevert: !0,
        location: "top",
        inverse: !1
    });
    var w = "UA-91865024-1";
    i.default.use(C.default, {
        id: w
    });
    var L = new r.default({
        routes: y.default,
        mode: "history"
    });
    new i.default({
        name: "app",
        el: "#app",
        router: L,
        render: function(t) {
            return t(c.default)
        },
        template: "<App/>",
        components: {
            App: c.default
        }
    })
}, , , , , , function(t, a, s) {
    t.exports = s.p + "static/img/flat-avatar.c4584a3.png"
}, , function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function l(t, a) {
        return (0, n.default)(t, a)
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.mergeOptions = l;
    var i = s(518),
        n = e(i)
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(5),
        i = e(l),
        n = s(9),
        r = e(n),
        o = s(8);
    a.default = i.default.extend({
        render: function(t) {
            return t("div", [t("canvas", {
                attrs: {
                    id: this.chartId,
                    width: this.width,
                    height: this.height
                },
                ref: "canvas"
            })])
        },
        props: {
            chartId: {
                default: "bar-chart",
                type: String
            },
            width: {
                default: 400,
                type: Number
            },
            height: {
                default: 400,
                type: Number
            }
        },
        data: function() {
            return {
                defaultOptions: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: !0
                            },
                            gridLines: {
                                display: !1
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: !1
                            },
                            categoryPercentage: .5,
                            barPercentage: .2
                        }]
                    }
                }
            }
        },
        methods: {
            renderChart: function(t, a, s) {
                var e = (0, o.mergeOptions)(this.defaultOptions, a);
                this._chart = new r.default(this.$refs.canvas.getContext("2d"), {
                    type: s || "bar",
                    data: t,
                    options: e
                }), this._chart.generateLegend()
            }
        },
        beforeDestroy: function() {
            this._chart.destroy()
        }
    })
}, , , , , , , , , , , , , , , , , , , , , , , , function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(233),
        i = e(l);
    a.default = i.default.extend({
        mounted: function() {
            this.renderChart({
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Data One",
                    backgroundColor: "#f87979",
                    data: [40, 39, 10, 40, 39, 80, 40]
                }]
            }, {
                responsive: !0,
                maintainAspectRatio: !1
            })
        }
    })
}, function(t, a) {
    "use strict";
    var s = {
        getDuration: function(t) {
            var a = new Date(t);
            a.getMonth();
            return a.setMonth(a.getMonth() + 1), a.setDate(0), a.getDate()
        },
        changeDay: function(t, a) {
            var s = new Date(t);
            return new Date(s.setDate(s.getDate() + a))
        },
        getStartDate: function(t) {
            return new Date(t.getFullYear(), t.getMonth(), 1)
        },
        getEndDate: function(t) {
            var a = new Date(t.getFullYear(), t.getMonth() + 1, 1);
            return new Date(a.setDate(a.getDate() - 1))
        },
        format: function(t, a) {
            t = "string" == typeof t ? new Date(t.replace(/-/g, "/")) : new Date(t);
            var s = {
                M: t.getMonth() + 1,
                d: t.getDate(),
                h: t.getHours(),
                m: t.getMinutes(),
                s: t.getSeconds(),
                q: Math.floor((t.getMonth() + 3) / 3),
                S: t.getMilliseconds()
            };
            return a = a.replace(/([yMdhmsqS])+/g, function(a, e) {
                var l = s[e];
                return void 0 !== l ? (a.length > 1 && (l = "0" + l, l = l.substr(l.length - 2)), l) : "y" === e ? String(t.getFullYear()).substr(4 - a.length) : a
            })
        }
    };
    t.exports = s
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, a, s) {
    t.exports = s.p + "static/img/colorful4.a5eeb3f.jpg"
}, , function(t, a, s) {
    var e, l;
    s(375), e = s(261);
    var i = s(588);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(399), e = s(262);
    var i = s(612);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(400), e = s(254);
    var i = s(613);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, , function(t, a, s) {
    (function(t) {
        "use strict";

        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var e = s(37),
            l = a(e),
            i = function(t, a, s) {
                if (this.mode = window.SVGAngle ? "svg" : "vml", this.params = s, "svg" === this.mode) this.createSvgNode = function(t) {
                    return document.createElementNS(this.svgns, t)
                };
                else {
                    try {
                        document.namespaces.rvml || document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), this.createVmlNode = function(t) {
                            return document.createElement("<rvml:" + t + ' class="rvml">')
                        }
                    } catch (t) {
                        this.createVmlNode = function(t) {
                            return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                        }
                    }
                    document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)")
                }
                "svg" === this.mode ? this.canvas = this.createSvgNode("svg") : (this.canvas = this.createVmlNode("group"), this.canvas.style.position = "absolute"), this.setSize(t, a)
            };
        i.prototype = {
            svgns: "http://www.w3.org/2000/svg",
            mode: "svg",
            width: 0,
            height: 0,
            canvas: null
        };
        var n = function(t, a, s, e) {
            t && this.setColors(t), a && this.setNormalizeFunction(a), s && this.setMin(s), s && this.setMax(e)
        };
        n.prototype = {
            colors: []
        };
        var r = function a(s) {
            s = s || {};
            var e, l = this,
                r = a.maps[s.map];
            if (!r) throw new Error('Invalid "' + s.map + '" map parameter. Please make sure you have loaded this map file in your HTML.');
            this.selectedRegions = [], this.multiSelectRegion = s.multiSelectRegion, this.container = s.container, this.defaultWidth = r.width, this.defaultHeight = r.height, this.color = s.color, this.selectedColor = s.selectedColor, this.hoverColor = s.hoverColor, this.hoverColors = s.hoverColors, this.hoverOpacity = s.hoverOpacity, this.setBackgroundColor(s.backgroundColor), this.width = s.container.width(), this.height = s.container.height(), this.resize(), t(window).resize(function() {
                var a = s.container.width(),
                    i = s.container.height();
                if (a && i) {
                    l.width = a, l.height = i, l.resize(), l.canvas.setSize(l.width, l.height), l.applyTransform();
                    var n = t.Event("resize.jqvmap");
                    t(s.container).trigger(n, [a, i]), e && (t(".jqvmap-pin").remove(), l.pinHandlers = !1, l.placePins(e.pins, e.mode))
                }
            }), this.canvas = new i(this.width, this.height, s), s.container.append(this.canvas.canvas), this.makeDraggable(), this.rootGroup = this.canvas.createGroup(!0), this.index = a.mapIndex, this.label = t("<div/>").addClass("jqvmap-label").appendTo(t("body")).hide(), s.enableZoom && (t("<div/>").addClass("jqvmap-zoomin").text("+").appendTo(s.container), t("<div/>").addClass("jqvmap-zoomout").html("&#x2212;").appendTo(s.container)), l.countries = [];
            for (var o in r.paths) {
                var c = this.canvas.createPath({
                    path: r.paths[o].path
                });
                c.setFill(this.color), c.id = l.getCountryId(o), l.countries[o] = c, "svg" === this.canvas.mode ? c.setAttribute("class", "jqvmap-region") : t(c).addClass("jqvmap-region"), t(this.rootGroup).append(c)
            }
            if (t(s.container).delegate("svg" === this.canvas.mode ? "path" : "shape", "mouseover mouseout", function(a) {
                    var e = a.target,
                        i = a.target.id.split("_").pop(),
                        n = t.Event("labelShow.jqvmap"),
                        o = t.Event("regionMouseOver.jqvmap");
                    i = i.toLowerCase(), "mouseover" === a.type ? (t(s.container).trigger(o, [i, r.paths[i].name]), o.isDefaultPrevented() || l.highlight(i, e), s.showTooltip && (l.label.text(r.paths[i].name), t(s.container).trigger(n, [l.label, i]), n.isDefaultPrevented() || (l.label.show(), l.labelWidth = l.label.width(), l.labelHeight = l.label.height()))) : (l.unhighlight(i, e), l.label.hide(), t(s.container).trigger("regionMouseOut.jqvmap", [i, r.paths[i].name]))
                }), t(s.container).delegate("svg" === this.canvas.mode ? "path" : "shape", "click", function(a) {
                    var e = a.target,
                        i = a.target.id.split("_").pop(),
                        n = t.Event("regionClick.jqvmap");
                    if (i = i.toLowerCase(), t(s.container).trigger(n, [i, r.paths[i].name]), !s.multiSelectRegion && !n.isDefaultPrevented())
                        for (var o in r.paths) l.countries[o].currentFillColor = l.countries[o].getOriginalFill(), l.countries[o].setFill(l.countries[o].getOriginalFill());
                    n.isDefaultPrevented() || (l.isSelected(i) ? l.deselect(i, e) : l.select(i, e))
                }), s.showTooltip && s.container.mousemove(function(t) {
                    if (l.label.is(":visible")) {
                        var a = t.pageX - 15 - l.labelWidth,
                            s = t.pageY - 15 - l.labelHeight;
                        a < 0 && (a = t.pageX + 15), s < 0 && (s = t.pageY + 15), l.label.css({
                            left: a,
                            top: s
                        })
                    }
                }), this.setColors(s.colors), this.canvas.canvas.appendChild(this.rootGroup), this.applyTransform(), this.colorScale = new n(s.scaleColors, s.normalizeFunction, s.valueMin, s.valueMax), s.values && (this.values = s.values, this.setValues(s.values)), s.selectedRegions)
                if (s.selectedRegions instanceof Array)
                    for (var d in s.selectedRegions) this.select(s.selectedRegions[d].toLowerCase());
                else this.select(s.selectedRegions.toLowerCase());
            if (this.bindZoomButtons(), s.pins && (e = {
                    pins: s.pins,
                    mode: s.pinMode
                }, this.pinHandlers = !1, this.placePins(s.pins, s.pinMode)), s.showLabels) {
                this.pinHandlers = !1;
                var p = {};
                for (o in l.countries) "function" != typeof l.countries[o] && (s.pins && s.pins[o] || (p[o] = o.toUpperCase()));
                e = {
                    pins: p,
                    mode: "content"
                }, this.placePins(p, "content")
            }
            a.mapIndex++
        };
        r.prototype = {
                transX: 0,
                transY: 0,
                scale: 1,
                baseTransX: 0,
                baseTransY: 0,
                baseScale: 1,
                width: 0,
                height: 0,
                countries: {},
                countriesColors: {},
                countriesData: {},
                zoomStep: 1.4,
                zoomMaxStep: 4,
                zoomCurStep: 1
            }, r.xlink = "http://www.w3.org/1999/xlink", r.mapIndex = 1, r.maps = {},
            function() {
                var a = {
                        colors: 1,
                        values: 1,
                        backgroundColor: 1,
                        scaleColors: 1,
                        normalizeFunction: 1,
                        enableZoom: 1,
                        showTooltip: 1,
                        borderColor: 1,
                        borderWidth: 1,
                        borderOpacity: 1,
                        selectedRegions: 1,
                        multiSelectRegion: 1
                    },
                    s = {
                        onLabelShow: "labelShow",
                        onLoad: "load",
                        onRegionOver: "regionMouseOver",
                        onRegionOut: "regionMouseOut",
                        onRegionClick: "regionClick",
                        onRegionSelect: "regionSelect",
                        onRegionDeselect: "regionDeselect",
                        onResize: "resize"
                    };
                t.fn.vectorMap = function(e) {
                    var l = {
                            map: "world_en",
                            backgroundColor: "#a5bfdd",
                            color: "#f4f3f0",
                            hoverColor: "#c9dfaf",
                            hoverColors: {},
                            selectedColor: "#c9dfaf",
                            scaleColors: ["#b6d6ff", "#005ace"],
                            normalizeFunction: "linear",
                            enableZoom: !0,
                            showTooltip: !0,
                            borderColor: "#818181",
                            borderWidth: 1,
                            borderOpacity: .25,
                            selectedRegions: null,
                            multiSelectRegion: !1
                        },
                        i = this.data("mapObject");
                    if ("addMap" === e) r.maps[arguments[1]] = arguments[2];
                    else {
                        if ("set" !== e || !a[arguments[1]]) {
                            if ("string" == typeof e && "function" == typeof i[e]) return i[e].apply(i, Array.prototype.slice.call(arguments, 1));
                            t.extend(l, e), l.container = this, this.css({
                                position: "relative",
                                overflow: "hidden"
                            }), i = new r(l), this.data("mapObject", i), this.unbind(".jqvmap");
                            for (var n in s) l[n] && this.bind(s[n] + ".jqvmap", l[n]);
                            var o = t.Event("load.jqvmap");
                            return t(l.container).trigger(o, i), i
                        }
                        i["set" + arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1)].apply(i, Array.prototype.slice.call(arguments, 2))
                    }
                }
            }(t), n.arrayToRgb = function(t) {
                for (var a, s = "#", e = 0; e < t.length; e++) a = t[e].toString(16), s += 1 === a.length ? "0" + a : a;
                return s
            }, n.prototype.getColor = function(t) {
                "function" == typeof this.normalize && (t = this.normalize(t));
                for (var a, s = [], e = 0, l = 0; l < this.colors.length - 1; l++) a = this.vectorLength(this.vectorSubtract(this.colors[l + 1], this.colors[l])), s.push(a), e += a;
                var i = (this.maxValue - this.minValue) / e;
                for (l = 0; l < s.length; l++) s[l] *= i;
                for (l = 0, t -= this.minValue; t - s[l] >= 0;) t -= s[l], l++;
                var n;
                for (n = l === this.colors.length - 1 ? this.vectorToNum(this.colors[l]).toString(16) : this.vectorToNum(this.vectorAdd(this.colors[l], this.vectorMult(this.vectorSubtract(this.colors[l + 1], this.colors[l]), t / s[l]))).toString(16); n.length < 6;) n = "0" + n;
                return "#" + n
            }, n.rgbToArray = function(t) {
                return t = t.substr(1), [parseInt(t.substr(0, 2), 16), parseInt(t.substr(2, 2), 16), parseInt(t.substr(4, 2), 16)]
            }, n.prototype.setColors = function(t) {
                for (var a = 0; a < t.length; a++) t[a] = n.rgbToArray(t[a]);
                this.colors = t
            }, n.prototype.setMax = function(t) {
                this.clearMaxValue = t, "function" == typeof this.normalize ? this.maxValue = this.normalize(t) : this.maxValue = t
            }, n.prototype.setMin = function(t) {
                this.clearMinValue = t, "function" == typeof this.normalize ? this.minValue = this.normalize(t) : this.minValue = t
            }, n.prototype.setNormalizeFunction = function(t) {
                "polynomial" === t ? this.normalize = function(t) {
                    return Math.pow(t, .2)
                } : "linear" === t ? delete this.normalize : this.normalize = t, this.setMin(this.clearMinValue), this.setMax(this.clearMaxValue)
            }, n.prototype.vectorAdd = function(t, a) {
                for (var s = [], e = 0; e < t.length; e++) s[e] = t[e] + a[e];
                return s
            }, n.prototype.vectorLength = function(t) {
                for (var a = 0, s = 0; s < t.length; s++) a += t[s] * t[s];
                return Math.sqrt(a)
            }, n.prototype.vectorMult = function(t, a) {
                for (var s = [], e = 0; e < t.length; e++) s[e] = t[e] * a;
                return s
            }, n.prototype.vectorSubtract = function(t, a) {
                for (var s = [], e = 0; e < t.length; e++) s[e] = t[e] - a[e];
                return s
            }, n.prototype.vectorToNum = function(t) {
                for (var a = 0, s = 0; s < t.length; s++) a += Math.round(t[s]) * Math.pow(256, t.length - s - 1);
                return a
            }, r.prototype.applyTransform = function() {
                var t, a, s, e;
                this.defaultWidth * this.scale <= this.width ? (t = (this.width - this.defaultWidth * this.scale) / (2 * this.scale), s = (this.width - this.defaultWidth * this.scale) / (2 * this.scale)) : (t = 0, s = (this.width - this.defaultWidth * this.scale) / this.scale), this.defaultHeight * this.scale <= this.height ? (a = (this.height - this.defaultHeight * this.scale) / (2 * this.scale), e = (this.height - this.defaultHeight * this.scale) / (2 * this.scale)) : (a = 0, e = (this.height - this.defaultHeight * this.scale) / this.scale), this.transY > a ? this.transY = a : this.transY < e && (this.transY = e), this.transX > t ? this.transX = t : this.transX < s && (this.transX = s), this.canvas.applyTransformParams(this.scale, this.transX, this.transY)
            }, r.prototype.bindZoomButtons = function() {
                var t = this;
                this.container.find(".jqvmap-zoomin").click(function() {
                    t.zoomIn()
                }), this.container.find(".jqvmap-zoomout").click(function() {
                    t.zoomOut()
                })
            }, r.prototype.deselect = function(a, s) {
                if (a = a.toLowerCase(), s = s || t("#" + this.getCountryId(a))[0], this.isSelected(a)) this.selectedRegions.splice(this.selectIndex(a), 1), t(this.container).trigger("regionDeselect.jqvmap", [a]), s.currentFillColor = s.getOriginalFill(), s.setFill(s.getOriginalFill());
                else
                    for (var e in this.countries) this.selectedRegions.splice(this.selectedRegions.indexOf(e), 1), this.countries[e].currentFillColor = this.color, this.countries[e].setFill(this.color)
            }, r.prototype.getCountryId = function(t) {
                return "jqvmap" + this.index + "_" + t
            }, r.prototype.getPin = function(a) {
                var s = t("#" + this.getPinId(a));
                return s.html()
            }, r.prototype.getPinId = function(t) {
                return this.getCountryId(t) + "_pin"
            }, r.prototype.getPins = function() {
                var a = this.container.find(".jqvmap-pin"),
                    s = {};
                return t.each(a, function(a, e) {
                    e = t(e);
                    var l = e.attr("for").toLowerCase(),
                        i = e.html();
                    s[l] = i
                }), (0, l.default)(s)
            }, r.prototype.highlight = function(a, s) {
                s = s || t("#" + this.getCountryId(a))[0], this.hoverOpacity ? s.setOpacity(this.hoverOpacity) : this.hoverColors && a in this.hoverColors ? (s.currentFillColor = s.getFill() + "", s.setFill(this.hoverColors[a])) : this.hoverColor && (s.currentFillColor = s.getFill() + "", s.setFill(this.hoverColor))
            }, r.prototype.isSelected = function(t) {
                return this.selectIndex(t) >= 0
            }, r.prototype.makeDraggable = function() {
                var a, s, e = !1,
                    l = this;
                l.isMoving = !1, l.isMovingTimeout = !1;
                var i, n, r, o, c, d, p;
                this.container.mousemove(function(t) {
                    return e && (l.transX -= (a - t.pageX) / l.scale, l.transY -= (s - t.pageY) / l.scale, l.applyTransform(), a = t.pageX, s = t.pageY, l.isMoving = !0, l.isMovingTimeout && clearTimeout(l.isMovingTimeout), l.container.trigger("drag")), !1
                }).mousedown(function(t) {
                    return e = !0, a = t.pageX, s = t.pageY, !1
                }).mouseup(function() {
                    return e = !1, clearTimeout(l.isMovingTimeout), l.isMovingTimeout = setTimeout(function() {
                        l.isMoving = !1
                    }, 100), !1
                }).mouseout(function() {
                    if (e && l.isMoving) return clearTimeout(l.isMovingTimeout), l.isMovingTimeout = setTimeout(function() {
                        e = !1, l.isMoving = !1
                    }, 100), !1
                }), t(this.container).bind("touchmove", function(a) {
                    var s, e, v, f, u = a.originalEvent.touches;
                    if (1 === u.length) {
                        if (1 === i) {
                            if (d === u[0].pageX && p === u[0].pageY) return;
                            v = l.transX, f = l.transY, l.transX -= (d - u[0].pageX) / l.scale, l.transY -= (p - u[0].pageY) / l.scale, l.applyTransform(), v === l.transX && f === l.transY || a.preventDefault(), l.isMoving = !0, l.isMovingTimeout && clearTimeout(l.isMovingTimeout)
                        }
                        d = u[0].pageX, p = u[0].pageY
                    } else 2 === u.length && (2 === i ? (e = Math.sqrt(Math.pow(u[0].pageX - u[1].pageX, 2) + Math.pow(u[0].pageY - u[1].pageY, 2)) / o, l.setScale(c * e, n, r), a.preventDefault()) : (s = t(l.container).offset(), n = u[0].pageX > u[1].pageX ? u[1].pageX + (u[0].pageX - u[1].pageX) / 2 : u[0].pageX + (u[1].pageX - u[0].pageX) / 2, r = u[0].pageY > u[1].pageY ? u[1].pageY + (u[0].pageY - u[1].pageY) / 2 : u[0].pageY + (u[1].pageY - u[0].pageY) / 2, n -= s.left, r -= s.top, c = l.scale, o = Math.sqrt(Math.pow(u[0].pageX - u[1].pageX, 2) + Math.pow(u[0].pageY - u[1].pageY, 2))));
                    i = u.length
                }), t(this.container).bind("touchstart", function() {
                    i = 0
                }), t(this.container).bind("touchend", function() {
                    i = 0
                })
            }, r.prototype.placePins = function(a, s) {
                var e = this;
                if ((!s || "content" !== s && "id" !== s) && (s = "content"), "content" === s ? t.each(a, function(a, s) {
                        if (0 !== t("#" + e.getCountryId(a)).length) {
                            var l = e.getPinId(a),
                                i = t("#" + l);
                            i.length > 0 && i.remove(), e.container.append('<div id="' + l + '" for="' + a + '" class="jqvmap-pin" style="position:absolute">' + s + "</div>")
                        }
                    }) : t.each(a, function(a, s) {
                        if (0 !== t("#" + e.getCountryId(a)).length) {
                            var l = e.getPinId(a),
                                i = t("#" + l);
                            i.length > 0 && i.remove(), e.container.append('<div id="' + l + '" for="' + a + '" class="jqvmap-pin" style="position:absolute"></div>'), i.append(t("#" + s))
                        }
                    }), this.positionPins(), !this.pinHandlers) {
                    this.pinHandlers = !0;
                    var l = function() {
                        e.positionPins()
                    };
                    this.container.bind("zoomIn", l).bind("zoomOut", l).bind("drag", l)
                }
            }, r.prototype.positionPins = function() {
                var a = this,
                    s = this.container.find(".jqvmap-pin");
                t.each(s, function(s, e) {
                    e = t(e);
                    var l = a.getCountryId(e.attr("for").toLowerCase()),
                        i = t("#" + l),
                        n = i[0].getBBox(),
                        r = a.scale,
                        o = a.canvas.rootGroup.getBoundingClientRect(),
                        c = a.container[0].getBoundingClientRect(),
                        d = {
                            left: o.left - c.left,
                            top: o.top - c.top
                        },
                        p = n.x * r + n.width * r / 2,
                        v = n.y * r + n.height * r / 2;
                    e.css({
                        left: d.left + p - e.width() / 2,
                        top: d.top + v - e.height() / 2
                    })
                })
            }, r.prototype.removePin = function(a) {
                a = a.toLowerCase(), t("#" + this.getPinId(a)).remove()
            }, r.prototype.removePins = function() {
                this.container.find(".jqvmap-pin").remove()
            }, r.prototype.reset = function() {
                for (var t in this.countries) this.countries[t].setFill(this.color);
                this.scale = this.baseScale, this.transX = this.baseTransX, this.transY = this.baseTransY, this.applyTransform()
            }, r.prototype.resize = function() {
                var t = this.baseScale;
                this.width / this.height > this.defaultWidth / this.defaultHeight ? (this.baseScale = this.height / this.defaultHeight, this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale)) : (this.baseScale = this.width / this.defaultWidth, this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale)), this.scale *= this.baseScale / t, this.transX *= this.baseScale / t, this.transY *= this.baseScale / t
            }, r.prototype.select = function(a, s) {
                a = a.toLowerCase(), s = s || t("#" + this.getCountryId(a))[0], this.isSelected(a) || (this.multiSelectRegion ? this.selectedRegions.push(a) : this.selectedRegions = [a], t(this.container).trigger("regionSelect.jqvmap", [a]), this.selectedColor && s && (s.currentFillColor = this.selectedColor, s.setFill(this.selectedColor)))
            }, r.prototype.selectIndex = function(t) {
                t = t.toLowerCase();
                for (var a = 0; a < this.selectedRegions.length; a++)
                    if (t === this.selectedRegions[a]) return a;
                return -1
            }, r.prototype.setBackgroundColor = function(t) {
                this.container.css("background-color", t)
            }, r.prototype.setColors = function(t, a) {
                if ("string" == typeof t) this.countries[t].setFill(a), this.countries[t].setAttribute("original", a);
                else {
                    var s = t;
                    for (var e in s) this.countries[e] && (this.countries[e].setFill(s[e]), this.countries[e].setAttribute("original", s[e]))
                }
            }, r.prototype.setNormalizeFunction = function(t) {
                this.colorScale.setNormalizeFunction(t), this.values && this.setValues(this.values)
            }, r.prototype.setScale = function(t) {
                this.scale = t, this.applyTransform()
            }, r.prototype.setScaleColors = function(t) {
                this.colorScale.setColors(t), this.values && this.setValues(this.values)
            }, r.prototype.setValues = function(t) {
                var a, s = 0,
                    e = Number.MAX_VALUE;
                for (var l in t) l = l.toLowerCase(), a = parseFloat(t[l]), isNaN(a) || (a > s && (s = t[l]), a < e && (e = a));
                e === s && s++, this.colorScale.setMin(e), this.colorScale.setMax(s);
                var i = {};
                for (l in t) l = l.toLowerCase(), a = parseFloat(t[l]), i[l] = isNaN(a) ? this.color : this.colorScale.getColor(a);
                this.setColors(i), this.values = t
            }, r.prototype.unhighlight = function(a, s) {
                a = a.toLowerCase(), s = s || t("#" + this.getCountryId(a))[0], s.setOpacity(1), s.currentFillColor && s.setFill(s.currentFillColor)
            }, r.prototype.zoomIn = function() {
                var a = this,
                    s = (t("#zoom").innerHeight() - 12 - 30 - 6 - 7 - 6) / (this.zoomMaxStep - this.zoomCurStep);
                if (a.zoomCurStep < a.zoomMaxStep) {
                    a.transX -= (a.width / a.scale - a.width / (a.scale * a.zoomStep)) / 2, a.transY -= (a.height / a.scale - a.height / (a.scale * a.zoomStep)) / 2, a.setScale(a.scale * a.zoomStep), a.zoomCurStep++;
                    var e = t("#zoomSlider");
                    e.css("top", parseInt(e.css("top"), 10) - s), a.container.trigger("zoomIn")
                }
            }, r.prototype.zoomOut = function() {
                var a = this,
                    s = (t("#zoom").innerHeight() - 12 - 30 - 6 - 7 - 6) / (this.zoomMaxStep - this.zoomCurStep);
                if (a.zoomCurStep > 1) {
                    a.transX += (a.width / (a.scale / a.zoomStep) - a.width / a.scale) / 2, a.transY += (a.height / (a.scale / a.zoomStep) - a.height / a.scale) / 2, a.setScale(a.scale / a.zoomStep), a.zoomCurStep--;
                    var e = t("#zoomSlider");
                    e.css("top", parseInt(e.css("top"), 10) + s), a.container.trigger("zoomOut")
                }
            }, i.prototype.applyTransformParams = function(t, a, s) {
                "svg" === this.mode ? this.rootGroup.setAttribute("transform", "scale(" + t + ") translate(" + a + ", " + s + ")") : (this.rootGroup.coordorigin = this.width - a + "," + (this.height - s), this.rootGroup.coordsize = this.width / t + "," + this.height / t)
            }, i.prototype.createGroup = function(t) {
                var a;
                return "svg" === this.mode ? a = this.createSvgNode("g") : (a = this.createVmlNode("group"), a.style.width = this.width + "px", a.style.height = this.height + "px", a.style.left = "0px", a.style.top = "0px", a.coordorigin = "0 0", a.coordsize = this.width + " " + this.height), t && (this.rootGroup = a), a
            }, i.prototype.createPath = function(t) {
                var a;
                if ("svg" === this.mode) a = this.createSvgNode("path"), a.setAttribute("d", t.path), null !== this.params.borderColor && a.setAttribute("stroke", this.params.borderColor), this.params.borderWidth > 0 && (a.setAttribute("stroke-width", this.params.borderWidth), a.setAttribute("stroke-linecap", "round"), a.setAttribute("stroke-linejoin", "round")), this.params.borderOpacity > 0 && a.setAttribute("stroke-opacity", this.params.borderOpacity), a.setFill = function(t) {
                    this.setAttribute("fill", t), null === this.getAttribute("original") && this.setAttribute("original", t)
                }, a.getFill = function() {
                    return this.getAttribute("fill")
                }, a.getOriginalFill = function() {
                    return this.getAttribute("original")
                }, a.setOpacity = function(t) {
                    this.setAttribute("fill-opacity", t)
                };
                else {
                    a = this.createVmlNode("shape"), a.coordorigin = "0 0", a.coordsize = this.width + " " + this.height, a.style.width = this.width + "px", a.style.height = this.height + "px", a.fillcolor = r.defaultFillColor, a.stroked = !1, a.path = i.pathSvgToVml(t.path);
                    var s = this.createVmlNode("skew");
                    s.on = !0, s.matrix = "0.01,0,0,0.01,0,0", s.offset = "0,0", a.appendChild(s);
                    var e = this.createVmlNode("fill");
                    a.appendChild(e), a.setFill = function(t) {
                        this.getElementsByTagName("fill")[0].color = t, null === this.getAttribute("original") && this.setAttribute("original", t)
                    }, a.getFill = function() {
                        return this.getElementsByTagName("fill")[0].color
                    }, a.getOriginalFill = function() {
                        return this.getAttribute("original")
                    }, a.setOpacity = function(t) {
                        this.getElementsByTagName("fill")[0].opacity = parseInt(100 * t, 10) + "%"
                    }
                }
                return a
            }, i.prototype.pathSvgToVml = function(t) {
                var a, s, e = "",
                    l = 0,
                    i = 0;
                return t.replace(/([MmLlHhVvCcSs])((?:-?(?:\d+)?(?:\.\d+)?,?\s?)+)/g, function(t, n, r) {
                    r = r.replace(/(\d)-/g, "$1,-").replace(/\s+/g, ",").split(","), r[0] || r.shift();
                    for (var o = 0, c = r.length; o < c; o++) r[o] = Math.round(100 * r[o]);
                    switch (n) {
                        case "m":
                            l += r[0], i += r[1], e = "t" + r.join(",");
                            break;
                        case "M":
                            l = r[0], i = r[1], e = "m" + r.join(",");
                            break;
                        case "l":
                            l += r[0], i += r[1], e = "r" + r.join(",");
                            break;
                        case "L":
                            l = r[0], i = r[1], e = "l" + r.join(",");
                            break;
                        case "h":
                            l += r[0], e = "r" + r[0] + ",0";
                            break;
                        case "H":
                            l = r[0], e = "l" + l + "," + i;
                            break;
                        case "v":
                            i += r[0], e = "r0," + r[0];
                            break;
                        case "V":
                            i = r[0], e = "l" + l + "," + i;
                            break;
                        case "c":
                            a = l + r[r.length - 4], s = i + r[r.length - 3], l += r[r.length - 2], i += r[r.length - 1], e = "v" + r.join(",");
                            break;
                        case "C":
                            a = r[r.length - 4], s = r[r.length - 3], l = r[r.length - 2], i = r[r.length - 1], e = "c" + r.join(",");
                            break;
                        case "s":
                            r.unshift(i - s), r.unshift(l - a), a = l + r[r.length - 4], s = i + r[r.length - 3], l += r[r.length - 2], i += r[r.length - 1], e = "v" + r.join(",");
                            break;
                        case "S":
                            r.unshift(i + i - s), r.unshift(l + l - a), a = r[r.length - 4], s = r[r.length - 3], l = r[r.length - 2], i = r[r.length - 1], e = "c" + r.join(",")
                    }
                    return e
                }).replace(/z/g, "")
            }, i.prototype.setSize = function(t, a) {
                if ("svg" === this.mode) this.canvas.setAttribute("width", t), this.canvas.setAttribute("height", a);
                else if (this.canvas.style.width = t + "px", this.canvas.style.height = a + "px", this.canvas.coordsize = t + " " + a, this.canvas.coordorigin = "0 0", this.rootGroup) {
                    for (var s = this.rootGroup.getElementsByTagName("shape"), e = 0, l = s.length; e < l; e++) s[e].coordsize = t + " " + a, s[e].style.width = t + "px", s[e].style.height = a + "px";
                    this.rootGroup.coordsize = t + " " + a, this.rootGroup.style.width = t + "px", this.rootGroup.style.height = a + "px"
                }
                this.width = t, this.height = a
            }
    }).call(a, s(11))
}, function(t, a, s) {
    (function(t) {
        "use strict";
        t.fn.vectorMap("addMap", "world_en", {
            width: 950,
            height: 550,
            paths: {
                id: {
                    path: "M781.68,324.4l-2.31,8.68l-12.53,4.23l-3.75-4.4l-1.82,0.5l3.4,13.12l5.09,0.57l6.79,2.57v2.57l3.11-0.57l4.53-6.27v-5.13l2.55-5.13l2.83,0.57l-3.4-7.13l-0.52-4.59L781.68,324.4L781.68,324.4M722.48,317.57l-0.28,2.28l6.79,11.41h1.98l14.15,23.67l5.66,0.57l2.83-8.27l-4.53-2.85l-0.85-4.56L722.48,317.57L722.48,317.57M789.53,349.11l2.26,2.77l-1.47,4.16v0.79h3.34l1.18-10.4l1.08,0.3l1.96,9.5l1.87,0.5l1.77-4.06l-1.77-6.14l-1.47-2.67l4.62-3.37l-1.08-1.49l-4.42,2.87h-1.18l-2.16-3.17l0.69-1.39l3.64-1.78l5.5,1.68l1.67-0.1l4.13-3.86l-1.67-1.68l-3.83,2.97h-2.46l-3.73-1.78l-2.65,0.1l-2.95,4.75l-1.87,8.22L789.53,349.11L789.53,349.11M814.19,330.5l-1.87,4.55l2.95,3.86h0.98l1.28-2.57l0.69-0.89l-1.28-1.39l-1.87-0.69L814.19,330.5L814.19,330.5M819.99,345.45l-4.03,0.89l-1.18,1.29l0.98,1.68l2.65-0.99l1.67-0.99l2.46,1.98l1.08-0.89l-1.96-2.38L819.99,345.45L819.99,345.45M753.17,358.32l-2.75,1.88l0.59,1.58l8.75,1.98l4.42,0.79l1.87,1.98l5.01,0.4l2.36,1.98l2.16-0.5l1.97-1.78l-3.64-1.68l-3.14-2.67l-8.16-1.98L753.17,358.32L753.17,358.32M781.77,366.93l-2.16,1.19l1.28,1.39l3.14-1.19L781.77,366.93L781.77,366.93M785.5,366.04l0.39,1.88l2.26,0.59l0.88-1.09l-0.98-1.49L785.5,366.04L785.5,366.04M790.91,370.99l-2.75,0.4l2.46,2.08h1.96L790.91,370.99L790.91,370.99M791.69,367.72l-0.59,1.19l4.42,0.69l3.44-1.98l-1.96-0.59l-3.14,0.89l-1.18-0.99L791.69,367.72L791.69,367.72M831.93,339.34l-4.17,0.47l-2.68,1.96l1.11,2.24l4.54,0.84v0.84l-2.87,2.33l1.39,4.85l1.39,0.09l1.2-4.76h2.22l0.93,4.66l10.83,8.96l0.28,7l3.7,4.01l1.67-0.09l0.37-24.72l-6.29-4.38l-5.93,4.01l-2.13,1.31l-3.52-2.24l-0.09-7.09L831.93,339.34L831.93,339.34z",
                    name: "Indonesia"
                },
                pg: {
                    path: "M852.76,348.29l-0.37,24.44l3.52-0.19l4.63-5.41l3.89,0.19l2.5,2.24l0.83,6.9l7.96,4.2l2.04-0.75v-2.52l-6.39-5.32l-3.15-7.28l2.5-1.21l-1.85-4.01l-3.7-0.09l-0.93-4.29l-9.81-6.62L852.76,348.29L852.76,348.29M880.48,349l-0.88,1.25l4.81,4.26l0.66,2.5l1.31-0.15l0.15-2.57l-1.46-1.32L880.48,349L880.48,349M882.89,355.03l-0.95,0.22l-0.58,2.57l-1.82,1.18l-5.47,0.96l0.22,2.06l5.76-0.29l3.65-2.28l-0.22-3.97L882.89,355.03L882.89,355.03M889.38,359.51l1.24,3.45l2.19,2.13l0.66-0.59l-0.22-2.28l-2.48-3.01L889.38,359.51L889.38,359.51z",
                    name: "Papua New Guinea"
                },
                mx: {
                    path: "M137.49,225.43l4.83,15.21l-2.25,1.26l0.25,3.02l4.25,3.27v6.05l5.25,5.04l-2.25-14.86l-3-9.83l0.75-6.8l2.5,0.25l1,2.27l-1,5.79l13,25.44v9.07l10.5,12.34l11.5,5.29l4.75-2.77l6.75,5.54l4-4.03l-1.75-4.54l5.75-1.76l1.75,1.01l1.75-1.76h2.75l5-8.82l-2.5-2.27l-9.75,2.27l-2.25,6.55l-5.75,1.01l-6.75-2.77l-3-9.57l2.27-12.07l-4.64-2.89l-2.21-11.59l-1.85-0.79l-3.38,3.43l-3.88-2.07l-1.52-7.73l-15.37-1.61l-7.94-5.97L137.49,225.43L137.49,225.43z",
                    name: "Mexico"
                },
                ee: {
                    path: "M517.77,143.66l-5.6-0.2l-3.55,2.17l-0.05,1.61l2.3,2.17l7.15,1.21L517.77,143.66L517.77,143.66M506.76,147.64l-1.55-0.05l-0.9,0.91l0.65,0.96l1.55,0.1l0.8-1.16L506.76,147.64L506.76,147.64z",
                    name: "Estonia"
                },
                dz: {
                    path: "M473.88,227.49l-4.08-1.37l-16.98,3.19l-3.7,2.81l2.26,11.67l-6.75,0.27l-4.06,6.53l-9.67,2.32l0.03,4.75l31.85,24.35l5.43,0.46l18.11-14.15l-1.81-2.28l-3.4-0.46l-2.04-3.42v-14.15l-1.36-1.37l0.23-3.65l-3.62-3.65l-0.45-3.88l1.58-1.14l-0.68-4.11L473.88,227.49L473.88,227.49z",
                    name: "Algeria"
                },
                ma: {
                    path: "M448.29,232.28h-11.55l-2.26,5.02l-5.21,2.51l-4.3,11.64l-8.38,5.02l-11.77,19.39l11.55-0.23l0.45-5.7h2.94v-7.76h10.19l0.23-10.04l9.74-2.28l4.08-6.62l6.34-0.23L448.29,232.28L448.29,232.28z",
                    name: "Morocco"
                },
                mr: {
                    path: "M404.9,276.66l2.18,2.85l-0.45,12.32l3.17-2.28l2.26-0.46l3.17,1.14l3.62,5.02l3.4-2.28l16.53-0.23l-4.08-27.61l4.38-0.02l-8.16-6.25l0.01,4.06l-10.33,0.01l-0.05,7.75l-2.97-0.01l-0.38,5.72L404.9,276.66L404.9,276.66z",
                    name: "Mauritania"
                },
                sn: {
                    path: "M412.03,289.84L410.12,290.31L406.18,293.18L405.28,294.78L405,296.37L406.43,297.40L411.28,297.34L414.40,296.5L414.75,298.03L414.46,300.06L414.53,300.09L406.78,300.21L408.03,303.21L408.71,301.37L418,302.15L418.06,302.21L419.03,302.25L422,302.37L422.12,300.62L418.53,296.31L414.53,290.87L412.03,289.84z",
                    name: "Senegal"
                },
                gm: {
                    path: "M406.89,298.34l-0.13,1.11l6.92-0.1l0.35-1.03l-0.15-1.04l-1.99,0.81L406.89,298.34L406.89,298.34z",
                    name: "Gambia"
                },
                gw: {
                    path: "M408.6,304.53l1.4,2.77l3.93-3.38l0.04-1.04l-4.63-0.67L408.6,304.53L408.6,304.53z",
                    name: "Guinea-Bissau"
                },
                gn: {
                    path: "M410.42,307.94l3.04,4.68l3.96-3.44l4.06-0.18l3.38,4.49l2.87,1.89l1.08-2.1l0.96-0.54l-0.07-4.62l-1.91-5.48l-5.86,0.65l-7.25-0.58l-0.04,1.86L410.42,307.94L410.42,307.94z",
                    name: "Guinea"
                },
                sl: {
                    path: "M413.93,313.13l5.65,5.46l4.03-4.89l-2.52-3.95l-3.47,0.35L413.93,313.13L413.93,313.13z",
                    name: "Sierra Leone"
                },
                lr: {
                    path: "M420.17,319.19l10.98,7.34l-0.26-5.56l-3.32-3.91l-3.24-2.87L420.17,319.19L420.17,319.19z",
                    name: "Liberia"
                },
                ci: {
                    path: "M432.07,326.75l4.28-3.03l5.32-0.93l5.43,1.17l-2.77-4.19l-0.81-2.56l0.81-7.57l-4.85,0.23l-2.2-2.1l-4.62,0.12l-2.2,0.35l0.23,5.12l-1.16,0.47l-1.39,2.56l3.58,4.19L432.07,326.75L432.07,326.75z",
                    name: "Cote d'Ivoire"
                },
                ml: {
                    path: "M419.46,295.84l3.08-2.11l17.12-0.1l-3.96-27.54l4.52-0.13l21.87,16.69l2.94,0.42l-1.11,9.28l-13.75,1.25l-10.61,7.92l-1.93,5.42l-7.37,0.31l-1.88-5.41l-5.65,0.4l0.22-1.77L419.46,295.84L419.46,295.84z",
                    name: "Mali"
                },
                bf: {
                    path: "M450.59,294.28l3.64-0.29l5.97,8.44l-5.54,4.18l-4.01-1.03l-5.39,0.07l-0.87,3.16l-4.52,0.22l-1.24-1.69l1.6-5.14L450.59,294.28L450.59,294.28z",
                    name: "Burkina Faso"
                },
                ne: {
                    path: "M460.89,302l2.55-0.06l2.3-3.45l3.86-0.69l4.11,2.51l8.77,0.25l6.78-2.76l2.55-2.19l0.19-2.88l4.73-4.77l1.25-10.53l-3.11-6.52l-7.96-1.94l-18.42,14.36l-2.61-0.25l-1.12,9.97l-9.4,0.94L460.89,302L460.89,302z",
                    name: "Niger"
                },
                gh: {
                    path: "M444.34,317.05l1.12,2.63l2.92,4.58l1.62-0.06l4.42-2.51l-0.31-14.29l-3.42-1l-4.79,0.13L444.34,317.05L444.34,317.05z",
                    name: "Ghana"
                },
                tg: {
                    path: "M455.22,321.25l2.68-1.57l-0.06-10.35l-1.74-2.82l-1.12,0.94L455.22,321.25L455.22,321.25z",
                    name: "Togo"
                },
                bj: {
                    path: "M458.71,319.49h2.12l0.12-6.02l2.68-3.89l-0.12-6.77l-2.43-0.06l-4.17,3.26l1.74,3.32L458.71,319.49L458.71,319.49z",
                    name: "Benin"
                },
                ng: {
                    path: "M461.57,319.37l3.92,0.19l4.73,5.27l2.3,0.63l1.8-0.88l2.74-0.38l0.93-3.82l3.73-2.45l4.04-0.19l7.4-13.61l-0.12-3.07l-3.42-2.63l-6.84,3.01l-9.15-0.13l-4.36-2.76l-3.11,0.69l-1.62,2.82l-0.12,7.96l-2.61,3.7L461.57,319.37L461.57,319.37z",
                    name: "Nigeria"
                },
                tn: {
                    path: "M474.91,227.33l5.53-2.23l1.82,1.18l0.07,1.44l-0.85,1.11l0.13,1.97l0.85,0.46v3.54l-0.98,1.64l0.13,1.05l3.71,1.31l-2.99,4.65l-1.17-0.07l-0.2,3.74l-1.3,0.2l-1.11-0.98l0.26-3.8l-3.64-3.54l-0.46-3.08l1.76-1.38L474.91,227.33L474.91,227.33z",
                    name: "Tunisia"
                },
                ly: {
                    path: "M480.05,248.03l1.56-0.26l0.46-3.6h0.78l3.19-5.24l7.87,2.29l2.15,3.34l7.74,3.54l4.03-1.7l-0.39-1.7l-1.76-1.7l0.2-1.18l2.86-2.42h5.66l2.15,2.88l4.55,0.66l0.59,36.89l-3.38-0.13l-20.42-10.62l-2.21,1.25l-8.39-2.1l-2.28-3.01l-3.32-0.46l-1.69-3.01L480.05,248.03L480.05,248.03z",
                    name: "Libya"
                },
                eg: {
                    path: "M521.93,243.06l2.67,0.07l5.2,1.44l2.47,0.07l3.06-2.56h1.43l2.6,1.44h3.29l0.59-0.04l2.08,5.98l0.59,1.93l0.55,2.89l-0.98,0.72l-1.69-0.85l-1.95-6.36l-1.76-0.13l-0.13,2.16l1.17,3.74l9.37,11.6l0.2,4.98l-2.73,3.15L522.32,273L521.93,243.06L521.93,243.06z",
                    name: "Egypt"
                },
                td: {
                    path: "M492.79,296l0.13-2.95l4.74-4.61l1.27-11.32l-3.16-6.04l2.21-1.13l21.4,11.15l-0.13,10.94l-3.77,3.21v5.64l2.47,4.78h-4.36l-7.22,7.14l-0.19,2.16l-5.33-0.07l-0.07,0.98l-3.04-0.4l-2.08-3.93l-1.56-0.77l0.2-1.2l1.96-1.5v-7.02l-2.71-0.42l-3.27-2.43L492.79,296L492.79,296L492.79,296z",
                    name: "Chad"
                },
                sd: {
                    path: "M520.15,292.43l0.18-11.83l2.46,0.07l-0.28-6.57l25.8,0.23l3.69-3.72l7.96,12.73l-4.36,5.14v7.85l-6.86,14.75l-2.36,1.04l0.75,4.11h2.94l3.99,5.79l-3.2,0.41l-0.82,1.49l-0.08,2.15l-9.6-0.17l-0.98-1.49l-6.71-0.38l-12.32-12.68l1.23-0.74l0.33-2.98l-2.95-1.74l-2.69-5.31l0.15-4.94L520.15,292.43L520.15,292.43z",
                    name: "Sudan"
                },
                cm: {
                    path: "M477.82,324.28l3.22,2.96l-0.23,4.58l17.66-0.41l1.44-1.62l-5.06-5.45l-0.75-1.97l3.22-6.03l-2.19-4l-1.84-0.99v-2.03l2.13-1.39l0.12-6.32l-1.69-0.19l-0.03,3.32l-7.42,13.85l-4.54,0.23l-3.11,2.14L477.82,324.28L477.82,324.28z",
                    name: "Cameroon"
                },
                er: {
                    path: "M556.71,294.7l-0.25-5.89l3.96-4.62l1.07,0.82l1.95,6.52l9.36,6.97l-1.7,2.09l-6.85-5.89H556.71L556.71,294.7z",
                    name: "Eritrea"
                },
                dj: {
                    path: "M571.48,301.54l-0.57,3.36l3.96-0.06l0.06-4.94l-1.45-0.89L571.48,301.54L571.48,301.54z",
                    name: "Djibouti"
                },
                et: {
                    path: "M549.49,311.76l7.28-16.2l7.23,0.04l6.41,5.57l-0.45,4.59h4.97l0.51,2.76l8.04,4.81l4.96,0.25l-9.43,10.13l-12.95,3.99h-3.21l-5.72-4.88l-2.26-0.95l-4.38-6.45l-2.89,0.04l-0.34-2.96L549.49,311.76L549.49,311.76z",
                    name: "Ethiopia"
                },
                so: {
                    path: "M575.74,305.04l4.08,2.78l1.21-0.06l10.13-3.48l1.15,3.71l-0.81,3.13l-2.19,1.74l-5.47-0.35l-7.83-4.81L575.74,305.04L575.74,305.04M591.97,304.05l4.37-1.68l1.55,0.93l-0.17,3.88l-4.03,11.48l-21.81,23.36l-2.53-1.74l-0.17-9.86l3.28-3.77l6.96-2.15l10.21-10.78l2.67-2.38l0.75-3.48L591.97,304.05L591.97,304.05z",
                    name: "Somalia"
                },
                ye: {
                    path: "M599.62,299.65l2.13,2.38l2.88-1.74l1.04-0.35l-1.32-1.28l-2.53,0.75L599.62,299.65L599.62,299.65M571.99,289.23l1.44,4.28v4.18l3.46,3.14l24.38-9.93l0.23-2.73l-3.91-7.02l-9.81,3.13l-5.63,5.54l-6.53-3.86L571.99,289.23L571.99,289.23z",
                    name: "Yemen"
                },
                cf: {
                    path: "M495.66,324.05l4.66,5.04l1.84-2.38l2.93,0.12l0.63-2.32l2.88-1.8l5.98,4.12l3.45-3.42l13.39,0.59L519,311.18l1.67-1.04l0.23-2.26l-2.82-1.33h-4.14l-6.67,6.61l-0.23,2.72l-5.29-0.17l-0.17,1.16l-3.45-0.35l-3.11,5.91L495.66,324.05L495.66,324.05z",
                    name: "Central African Republic"
                },
                st: {
                    path: "M470.74,337.15l1.15-0.58l0.86,0.7l-0.86,1.33l-1.04-0.41L470.74,337.15L470.74,337.15M473.05,333.5l1.73-0.29l0.58,1.1l-0.86,0.93l-0.86-0.12L473.05,333.5L473.05,333.5z",
                    name: "Sao Tome and Principe"
                },
                gq: {
                    path: "M476.84,327.41l-0.46,1.97l1.38,0.75l1.32-0.99l-0.46-2.03L476.84,327.41L476.84,327.41M480.99,332.69l-0.06,1.39l4.54,0.23l-0.06-1.57L480.99,332.69L480.99,332.69z",
                    name: "Equatorial Guinea"
                },
                ga: {
                    path: "M486.39,332.63l-0.12,2.49l-5.64-0.12l-3.45,6.67l8.11,8.87l2.01-1.68l-0.06-1.74l-1.38-0.64v-1.22l3.11-1.97l2.76,2.09l3.05,0.06l-0.06-10.49l-4.83-0.23l-0.06-2.2L486.39,332.63L486.39,332.63z",
                    name: "Gabon"
                },
                cg: {
                    path: "M491,332.52l-0.06,1.45l4.78,0.12l0.17,12.41l-4.37-0.12l-2.53-1.97l-1.96,1.1l-0.09,0.55l1.01,0.49l0.29,2.55l-2.7,2.32l0.58,1.22l2.99-2.32h1.44l0.46,1.39l1.9,0.81l6.1-5.16l-0.12-3.77l1.27-3.07l3.91-2.9l1.05-9.81l-2.78,0.01l-3.22,4.41L491,332.52L491,332.52z",
                    name: "Congo"
                },
                ao: {
                    path: "M486.55,353.23l1.74,2.26l2.25-2.13l-0.66-2.21l-0.56-0.04L486.55,353.23L486.55,353.23M488.62,356.71l3.41,12.73l-0.08,4.02l-4.99,5.36l-0.75,8.71l19.2,0.17l6.24,2.26l5.15-0.67l-3-3.76l0.01-10.74l5.9-0.25v-4.19l-4.79-0.2l-0.96-9.92l-2.02,0.03l-1.09-0.98l-1.19,0.06l-1.58,3.06H502l-1.41-1.42l0.42-2.01l-1.66-2.43L488.62,356.71L488.62,356.71z",
                    name: "Angola"
                },
                cd: {
                    path: "M489.38,355.71l10.31-0.18l2.09,2.97l-0.08,2.19l0.77,0.7h5.12l1.47-2.89h2.09l0.85,0.86l2.87-0.08l0.85,10.08l4.96,0.16v0.78l13.33,6.01l0.62,1.17h2.79l-0.31-4.22l-5.04-2.42l0.31-3.2l2.17-5.08l4.96-0.16l-4.26-14.14l0.08-6.01l6.74-10.54l0.08-1.48l-1.01-0.55l0.04-2.86l-1.23-0.11l-1.24-1.58l-20.35-0.92l-3.73,3.63l-6.11-4.02l-2.15,1.32l-1.56,13.13l-3.86,2.98l-1.16,2.64l0.21,3.91l-6.96,5.69l-1.85-0.84l0.25,1.09L489.38,355.71L489.38,355.71z",
                    name: "Congo"
                },
                rw: {
                    path: "M537.82,339.9l2.81,2.59l-0.12,2.77l-4.36,0.09v-3.06L537.82,339.9L537.82,339.9z",
                    name: "Rwanda"
                },
                bi: {
                    path: "M536.21,346.21l4.27-0.09l-1.11,3.74l-1.08,0.94h-1.32l-0.94-2.53L536.21,346.21L536.21,346.21z",
                    name: "Burundi"
                },
                ug: {
                    path: "M538.3,339.09l3.03,2.84l1.9-1.21l5.14-0.84l0.88,0.09l0.33-1.95l2.9-6.1l-2.44-5.08l-7.91,0.05l-0.05,2.09l1.06,1.02l-0.16,2.09L538.3,339.09L538.3,339.09z",
                    name: "Uganda"
                },
                ke: {
                    path: "M550.83,326.52l2.66,5.19l-3.19,6.69l-0.42,2.03l15.93,9.85l4.94-7.76l-2.5-2.03l-0.05-10.22l3.13-3.42l-4.99,1.66l-3.77,0.05l-5.9-4.98l-1.86-0.8l-3.45,0.32l-0.61,1.02L550.83,326.52L550.83,326.52z",
                    name: "Kenya"
                },
                tz: {
                    path: "M550.57,371.42l17.47-2.14l-3.93-7.6l-0.21-7.28l1.27-3.48l-16.62-10.44l-5.21,0.86l-1.81,1.34l-0.16,3.05l-1.17,4.23l-1.22,1.45l-1.75,0.16l3.35,11.61l5.47,2.57l3.77,0.11L550.57,371.42L550.57,371.42z",
                    name: "Tanzania"
                },
                zm: {
                    path: "M514.55,384.7l3.17,4.4l4.91,0.3l1.74,0.96l5.14,0.06l4.43-6.21l12.38-5.54l1.08-4.88l-1.44-6.99l-6.46-3.68l-4.31,0.3l-2.15,4.76l0.06,2.17l5.08,2.47l0.3,5.37l-4.37,0.24l-1.08-1.81l-12.14-5.18l-0.36,3.98l-5.74,0.18L514.55,384.7L514.55,384.7z",
                    name: "Zambia"
                },
                mw: {
                    path: "M547.16,379.4l3.11,3.25l-0.06,4.16l0.6,1.75l4.13-4.46l-0.48-5.67l-2.21-1.69l-1.97-9.95l-3.41-0.12l1.55,7.17L547.16,379.4L547.16,379.4z",
                    name: "Malawi"
                },
                mz: {
                    path: "M541.17,413.28l2.69,2.23l6.34-3.86l1.02-5.73v-9.46l10.17-8.32l1.74,0.06l6.16-5.91l-0.96-12.18L552,372.17l0.48,3.68l2.81,2.17l0.66,6.63l-5.5,5.37l-1.32-3.01l0.24-3.98l-3.17-3.44l-7.78,3.62l7.24,3.68l0.24,10.73l-4.79,7.11L541.17,413.28L541.17,413.28z",
                    name: "Mozambique"
                },
                zw: {
                    path: "M524.66,392.3l8.97,10.13l6.88,1.75l4.61-7.23l-0.36-9.58l-7.48-3.86l-2.81,1.27l-4.19,6.39l-5.8-0.06L524.66,392.3L524.66,392.3z",
                    name: "Zimbabwe"
                },
                na: {
                    path: "M496.55,421.96l3.35,0.24l1.97,1.99l4.67,0.06l1.14-13.26v-8.68l2.99-0.6l1.14-9.1l7.6-0.24l2.69-2.23l-4.55-0.18l-6.16,0.84l-6.64-2.41h-18.66l0.48,5.3l6.22,9.16l-1.08,4.7l0.06,2.47L496.55,421.96L496.55,421.96z",
                    name: "Namibia"
                },
                bw: {
                    path: "M508.51,411.23l2.15,0.66l-0.3,6.15l2.21,0.3l5.08-4.58l6.1,0.66l1.62-4.1l7.72-7.05l-9.27-10.67l-0.12-1.75l-1.02-0.3l-2.81,2.59l-7.3,0.18l-1.02,9.1l-2.87,0.66L508.51,411.23L508.51,411.23z",
                    name: "Botswana"
                },
                sz: {
                    path: "M540.87,414l-2.51,0.42l-1.08,2.95l1.92,1.75h2.33l1.97-2.83L540.87,414L540.87,414z",
                    name: "Swaziland"
                },
                ls: {
                    path: "M527.41,425.39l3.05-2.35l1.44,0.06l1.74,2.17l-0.18,2.17l-2.93,1.08v0.84l-3.23-0.18l-0.78-2.35L527.41,425.39L527.41,425.39z",
                    name: "Lesotho"
                },
                za: {
                    path: "M534.16,403.63l-7.9,7.3l-1.88,4.51l-6.26-0.78l-5.21,4.63l-3.46-0.34l0.28-6.4l-1.23-0.43l-0.86,13.09l-6.14-0.06l-1.85-2.18l-2.71-0.03l2.47,7.09l4.41,4.17l-3.15,3.67l2.04,4.6l4.72,1.8l3.76-3.2l10.77,0.06l0.77-0.96l4.78-0.84l16.17-16.1l-0.06-5.07l-1.73,2.24h-2.59l-3.15-2.64l1.6-3.98l2.75-0.56l-0.25-8.18L534.16,403.63L534.16,403.63z M530.37,422.13l1.51-0.06l2.45,2.66l-0.07,3.08l-2.87,1.45l-0.18,1.02l-4.38,0.05l-1.37-3.3l1.25-2.42L530.37,422.13L530.37,422.13z",
                    name: "South Africa"
                },
                gl: {
                    path: "M321.13,50.07l-1.36,2.17l2.45,2.45l-1.09,2.45l3.54,4.62l4.35-1.36l5.71-0.54l6.53,7.07l4.35,11.69l-3.53,7.34l4.89-0.82l2.72,1.63l0.27,3.54l-5.98,0.27l3.26,3.26l4.08,0.82l-8.97,11.96l-1.09,7.34l1.9,5.98l-1.36,3.54l2.45,7.61l4.62,5.17l1.36-0.27l2.99-0.82l0.27,4.35l1.9,2.72l3.53-0.27l2.72-10.06l8.16-10.06l12.24-4.89l7.61-9.52l3.53,1.63h7.34l5.98-5.98l7.34-2.99l0.82-4.62l-4.62-4.08l-4.08-1.36l-2.18-5.71l5.17-2.99l8.16,4.35l2.72-2.99l-4.35-2.45l9.25-12.51l-1.63-5.44l-4.35-0.27l1.63-4.89l5.44-2.45l11.15-9.79l-3.26-3.53l-12.51,1.09l-6.53,6.53l3.81-8.43l-4.35-1.09l-2.45,4.35l-3.53-2.99l-9.79,1.09l2.72-4.35l16.04-0.54l-4.08-5.44l-17.4-3.26l-7.07,1.09l0.27,3.54l-7.34-2.45l0.27-2.45l-5.17,1.09l-1.09,2.72l5.44,1.9l-5.71,4.08l-4.08-4.62l-5.71-1.63l-0.82,4.35h-5.71l-2.18-4.62l-8.97-1.36l-4.89,2.45l-0.27,3.26l-6.25-0.82l-3.81,1.63l0.27,3.81v1.9l-7.07,1.36l-3.26-2.17l-2.18,3.53l3.26,3.54l6.8-0.82l0.54,2.18l-5.17,2.45L321.13,50.07L321.13,50.07M342.89,92.49l1.63,2.45l-0.82,2.99h-1.63l-2.18-2.45l0.54-1.9L342.89,92.49L342.89,92.49M410.87,85.69l4.62,1.36l-0.27,3.81l-4.89-2.45l-1.09-1.36L410.87,85.69L410.87,85.69z",
                    name: "Greenland"
                },
                au: {
                    path: "M761.17,427.98l-0.35,25.38l-3.9,2.86l-0.35,2.5l5.32,3.57l13.13-2.5h6.74l2.48-3.58l14.9-2.86l10.64,3.22l-0.71,4.29l1.42,4.29l8.16-1.43l0.35,2.14l-5.32,3.93l1.77,1.43l3.9-1.43l-1.06,11.8l7.45,5.72l4.26-1.43l2.13,2.14l12.42-1.79l11.71-18.95l4.26-1.07l8.51-15.73l2.13-13.58l-5.32-6.79l2.13-1.43l-4.26-13.23l-4.61-3.22l0.71-17.87l-4.26-3.22l-1.06-10.01h-2.13l-7.1,23.59l-3.9,0.36l-8.87-8.94l4.97-13.23l-9.22-1.79l-10.29,2.86l-2.84,8.22l-4.61,1.07l-0.35-5.72l-18.8,11.44l0.35,4.29l-2.84,3.93h-7.1l-15.26,6.43L761.17,427.98L761.17,427.98M825.74,496.26l-1.77,7.15l0.35,5l5.32-0.36l6.03-9.29L825.74,496.26L825.74,496.26z",
                    name: "Australia"
                },
                nz: {
                    path: "M913.02,481.96l1.06,11.8l-1.42,5.36l-5.32,3.93l0.35,4.65v5l1.42,1.79l14.55-12.51v-2.86h-3.55l-4.97-16.8L913.02,481.96L913.02,481.96M902.38,507.7l2.84,5.36l-7.81,7.51l-0.71,3.93l-5.32,0.71l-8.87,8.22l-8.16-3.93l-0.71-2.86l14.9-6.43L902.38,507.7L902.38,507.7z",
                    name: "New Zealand"
                },
                nc: {
                    path: "M906.64,420.47l-0.35,1.79l4.61,6.43l2.48,1.07l0.35-2.5L906.64,420.47L906.64,420.47z",
                    name: "New Caledonia"
                },
                my: {
                    path: "M764.14,332.92l3.02,3.49l11.58-4.01l2.29-8.84l5.16-0.37l4.72-3.42l-6.12-4.46l-1.4-2.45l-3.02,5.57l1.11,3.2l-1.84,2.67l-3.47-0.89l-8.41,6.17l0.22,3.57L764.14,332.92L764.14,332.92M732.71,315.45l2.01,4.51l0.45,5.86l2.69,4.17l6.49,3.94l2.46,0.23l-0.45-4.06l-2.13-5.18l-3.12-6.63l-0.26,1.16l-3.76-0.17l-2.7-3.88L732.71,315.45L732.71,315.45z",
                    name: "Malaysia"
                },
                bn: {
                    path: "M779.77,319.25l-2.88,3.49l2.36,0.74l1.33-1.86L779.77,319.25L779.77,319.25z",
                    name: "Brunei Darussalam"
                },
                tl: {
                    path: "M806.14,368.42l-5.11,4.26l0.49,1.09l2.16-0.4l2.55-2.38l5.01-0.69l-0.98-1.68L806.14,368.42L806.14,368.42z",
                    name: "Timor-Leste"
                },
                sb: {
                    path: "M895.43,364.65l0.15,2.28l1.39,1.32l1.31-0.81l-1.17-2.43L895.43,364.65L895.43,364.65M897.18,370.31l-1.17,1.25l1.24,2.28l1.46,0.44l-0.07-1.54L897.18,370.31L897.18,370.31M900.03,368.99l1.02,2.5l1.97,2.35l1.09-1.76l-1.46-2.5L900.03,368.99L900.03,368.99M905.14,372.74l0.58,3.09l1.39,1.91l1.17-2.42L905.14,372.74L905.14,372.74M906.74,379.65l-0.51,0.88l1.68,2.21l1.17,0.07l-0.73-2.87L906.74,379.65L906.74,379.65M903.02,384.05l-1.75,0.81l1.53,2.13l1.31-0.74L903.02,384.05L903.02,384.05z",
                    name: "Solomon Islands"
                },
                vu: {
                    path: "M920.87,397.22l-1.24,1.66l0.52,1.87l0.62,0.42l1.13-1.46L920.87,397.22L920.87,397.22M921.49,402.31l0.1,1.35l1.34,0.42l0.93-0.52l-0.93-1.46L921.49,402.31L921.49,402.31M923.45,414.37l-0.62,0.94l0.93,1.04l1.55-0.52L923.45,414.37L923.45,414.37z",
                    name: "Vanuatu"
                },
                fj: {
                    path: "M948.62,412.29l-1.24,1.66l-0.1,1.87l1.44,1.46L948.62,412.29L948.62,412.29z",
                    name: "Fiji"
                },
                ph: {
                    path: "M789.37,297.53l-0.86,1.64l-0.48,2.02l-4.78,6.07l0.29,1.25l2.01-0.29l6.21-6.94L789.37,297.53L789.37,297.53M797.11,295.22l-0.1,5.01l1.82,1.83l0.67,3.56l1.82,0.39l0.86-2.22l-1.43-1.06l-0.38-6.26L797.11,295.22L797.11,295.22M802.28,297.15l-0.1,4.43l1.05,1.73l1.82-2.12l-0.48-3.85L802.28,297.15L802.28,297.15M803.42,293.29l1.82,2.41l0.86,2.31h1.63l-0.29-3.95l-1.82-1.25L803.42,293.29L803.42,293.29M806.96,302.35l0.38,2.89l-3.35,2.7l-2.77,0.29l-2.96,3.18l0.1,1.45l2.77-0.87l1.91-1.25l1.63,4.14l2.87,2.02l1.15-0.39l1.05-1.25l-2.29-2.31l1.34-1.06l1.53,1.25l1.05-1.73l-1.05-2.12l-0.19-4.72L806.96,302.35L806.96,302.35M791.38,272.97l-2.58,1.83l-0.29,5.78l4.02,7.8l1.34,1.06l1.72-1.16l2.96,0.48l0.57,2.6l2.2,0.19l1.05-1.44l-1.34-1.83l-1.63-1.54l-3.44-0.38l-1.82-2.99l2.1-3.18l0.19-2.79l-1.43-3.56L791.38,272.97L791.38,272.97M792.72,290.21l0.76,2.7l1.34,0.87l0.96-1.25l-1.53-2.12L792.72,290.21L792.72,290.21z",
                    name: "Philippines"
                },
                cn: {
                    path: "M759.83,270.17l-2.39,0.67l-1.72,2.12l1.43,2.79l2.1,0.19l2.39-2.12l0.57-2.79L759.83,270.17L759.83,270.17M670.4,170.07l-3.46,8.7l-4.77-0.25l-5.03,11.01l4.27,5.44l-8.8,12.15l-4.52-0.76l-3.02,3.8l0.75,2.28l3.52,0.25l1.76,4.05l3.52,0.76l10.81,13.93v7.09l5.28,3.29l5.78-1.01l7.29,4.3l8.8,2.53l4.27-0.51l4.78-0.51l10.05-6.58l3.27,0.51l1.25,2.97l2.77,0.83l3.77,5.57l-2.51,5.57l1.51,3.8l4.27,1.52l0.75,4.56l5.03,0.51l0.75-2.28l7.29-3.8l4.52,0.25l5.28,5.82l3.52-1.52l2.26,0.25l1.01,2.79l1.76,0.25l2.51-3.54l10.05-3.8l9.05-10.89l3.02-10.38l-0.25-6.84l-3.77-0.76l2.26-2.53l-0.5-4.05l-9.55-9.62v-4.81l2.76-3.54l2.76-1.27l0.25-2.79h-7.04l-1.26,3.8l-3.27-0.76l-4.02-4.3l2.51-6.58l3.52-3.8l3.27,0.25l-0.5,5.82l1.76,1.52l4.27-4.3l1.51-0.25l-0.5-3.29l4.02-4.81l3.02,0.25l1.76-5.57l2.06-1.09l0.21-3.47l-2-2.1l-0.17-5.48l3.85-0.25l-0.25-14.13l-2.7,1.62l-1.01,3.62l-4.51-0.01l-13.07-7.35l-9.44-11.38l-9.58-0.1l-2.44,2.12l3.1,7.1l-1.08,6.66l-3.86,1.6l-2.17-0.17l-0.16,6.59l2.26,0.51l4.02-1.77l5.28,2.53v2.53l-3.77,0.25l-3.02,6.58l-2.76,0.25l-9.8,12.91l-10.3,4.56l-7.04,0.51l-4.77-3.29l-6.79,3.55l-7.29-2.28l-1.76-4.81l-12.31-0.76l-6.53-10.63h-2.76l-2.22-4.93L670.4,170.07z",
                    name: "China"
                },
                tw: {
                    path: "M787.46,248.31l-3.54,2.7l-0.19,5.2l3.06,3.56l0.76-0.67L787.46,248.31L787.46,248.31z",
                    name: "Taiwan"
                },
                jp: {
                    path: "M803.23,216.42l-1.63,1.64l0.67,2.31l1.43,0.1l0.96,5.01l1.15,1.25l2.01-1.83l0.86-3.28l-2.49-3.56L803.23,216.42L803.23,216.42M812.03,213.15l-2.77,2.6l-0.1,2.99l0.67,0.87l3.73-3.18l-0.29-3.18L812.03,213.15L812.03,213.15M808.2,206.98l-4.88,5.59l0.86,1.35l2.39,0.29l4.49-3.47l3.16-0.58l2.87,3.37l2.2-0.77l0.86-3.28l4.11-0.1l4.02-4.82l-2.1-8l-0.96-4.24l2.1-1.73l-4.78-7.22l-1.24,0.1l-2.58,2.89v2.41l1.15,1.35l0.38,6.36l-2.96,3.66l-1.72-1.06l-1.34,2.99l-0.29,2.79l1.05,1.64l-0.67,1.25l-2.2-1.83h-1.53l-1.34,0.77L808.2,206.98L808.2,206.98M816.43,163.44l-1.53,1.35l0.77,2.89l1.34,1.35l-0.1,4.43l-1.72,0.67l-1.34,2.99l3.92,5.39l2.58-0.87l0.48-1.35l-2.77-2.5l1.72-2.22l1.82,0.29l1.43,1.54l0.1-3.18l3.92-3.18l2.2-0.58l-1.82-3.08l-0.86-1.35l-1.43,0.96l-1.24,1.54l-2.68-0.58l-2.77-1.83L816.43,163.44L816.43,163.44z",
                    name: "Japan"
                },
                ru: {
                    path: "M506.61,151.72l-1.5-0.15l-2.7,3.23v1.51l0.9,0.35l1.75,0.05l2.9-2.37l0.4-0.81L506.61,151.72L506.61,151.72M830.86,160.45l-2.68,3.76l0.19,1.83l1.34-0.58l3.15-3.95L830.86,160.45L830.86,160.45M834.4,154.96l-0.96,2.6l0.1,1.73l1.63-1.06l1.53-3.08V154L834.4,154.96L834.4,154.96M840.04,132.03l-1.24,1.54l0.1,2.41l1.15-0.1l1.91-3.37L840.04,132.03L840.04,132.03M837.75,137.91v4.24l1.34,0.48l0.96-1.54v-3.27L837.75,137.91L837.75,137.91M798.64,122.59l-0.09,6.17l7.74,11.95l2.77,10.4l4.88,9.25l1.91,0.67l1.63-1.35l0.76-2.22l-6.98-7.61l0.19-3.95l1.53-0.67l0.38-2.31l-13.67-19.36L798.64,122.59L798.64,122.59M852.57,103.42l-1.91,0.19l1.15,1.64l2.39,1.64l0.67-0.77L852.57,103.42L852.57,103.42M856.29,104.58l0.29,1.64l2.96,0.87l0.29-1.16L856.29,104.58L856.29,104.58M547.82,38.79l1.72,0.69l-1.21,2.08v2.95l-2.58,1.56H543l-1.55-1.91l0.17-2.08l1.21-1.56h2.41L547.82,38.79L547.82,38.79M554.36,36.88v2.08l1.72,1.39l2.41-0.17l2.07-1.91v-1.39h-1.89l-1.55,0.52l-1.21-1.39L554.36,36.88L554.36,36.88M564.18,37.06l1.21,2.6l2.41,0.17l1.72-0.69l-0.86-2.43l-2.24-0.52L564.18,37.06L564.18,37.06M573.99,33.59l-1.89-0.35l-1.72,1.74l0.86,1.56l0.52,2.43l2.24-1.73l0.52-1.91L573.99,33.59L573.99,33.59M584.49,51.98l-0.52,2.43l-3.96,3.47l-8.44,1.91l-6.89,11.45l-1.21,3.3l6.89,1.74l1.03-4.16l2.07-6.42l5.34-2.78l4.48-3.47l3.27-1.39h1.72v-4.68L584.49,51.98L584.49,51.98M562.28,77.31l4.65,0.52l1.55,5.38l3.96,4.16l-1.38,2.78h-2.41l-2.24-2.6l-4.99-0.17l-2.07-2.78v-1.91l3.1-0.87L562.28,77.31L562.28,77.31M634.95,18.15l-2.24-1.39h-2.58l-0.52,1.56l-2.75,1.56l-2.07,0.69l-0.34,2.08l4.82,0.35L634.95,18.15L634.95,18.15M640.28,18.67l-1.21,2.6l-2.41-0.17l-3.79,2.78l-1.03,3.47h2.41l1.38-2.26l3.27,2.43l3.1-1.39l2.24-1.91l-0.86-2.95l-1.21-2.08L640.28,18.67L640.28,18.67M645.28,20.58l1.21,4.86l1.89,4.51l2.07-3.64l3.96-0.87v-2.6l-2.58-1.91L645.28,20.58L645.28,20.58M739.76,12.8l2.69,2.26l1.91-0.79l0.56-3.17L741,8.39l-2.58,1.7l-6.28,0.57v2.83l-6.62,0.11v4.63l7.74,5.76l2.02-1.47l-0.45-4.07l4.94-1.24l-1.01-1.92l-1.79-1.81L739.76,12.8L739.76,12.8M746.94,10.09l1.79,3.39l6.96-0.79l1.91-2.49l-0.45-2.15l-1.91-0.79l-1.79,1.36l-5.16,1.13L746.94,10.09L746.94,10.09M746.49,23.31l-3.48-0.9L741,24.56l-0.9,2.94l4.71-0.45l3.59-1.81L746.49,23.31L746.49,23.31M836.68,3.76l-2.92-0.9L830.4,4.1l-1.68,2.49l2.13,2.83l5.61-2.49l1.12-1.24L836.68,3.76L836.68,3.76M817.97,72.93l1.76,6.08l3.52,1.01l3.52-5.57l-2.01-3.8l0.75-3.29h5.28l-1.26,2.53l0.5,9.12l-7.54,18.74l0.75,4.05l-0.25,6.84l14.07,20.51l2.76,0.76l0.25-16.71l2.76-2.53l-3.02-6.58l2.51-2.79l-5.53-7.34l-3.02,0.25l-1-12.15l7.79-2.03l0.5-3.55l4.02-1.01l2.26,2.03l2.76-11.14l4.77-8.1l3.77-2.03l3.27,0.25v-3.8l-5.28-1.01l-7.29-6.08l3.52-4.05l-3.02-6.84l2.51-2.53l3.02,4.05l7.54,2.79l8.29,0.76l1.01-3.54l-4.27-4.3l4.77-6.58l-10.81-3.8l-2.76,5.57l-3.52-4.56l-19.85-6.84l-18.85,3.29l-2.76,1.52v1.52l4.02,2.03l-0.5,4.81l-7.29-3.04l-16.08,6.33l-2.76-5.82h-11.06l-5.03,5.32l-17.84-4.05l-16.33,3.29l-2.01,5.06l2.51,0.76l-0.25,3.8l-15.83,1.77l1.01,5.06l-14.58-2.53l3.52-6.58l-14.83-0.76l1.26,6.84l-4.77,2.28l-4.02-3.8l-16.33,2.79l-6.28,5.82l-0.25,3.54l-4.02,0.25l-0.5-4.05l12.82-11.14v-7.6l-8.29-2.28l-10.81,3.54l-4.52-4.56h-2.01l-2.51,5.06l2.01,2.28l-14.33,7.85l-12.31,9.37l-7.54,10.38v4.3l8.04,3.29l-4.02,3.04l-8.54-3.04l-3.52,3.04l-5.28-6.08l-1.01,2.28l5.78,18.23l1.51,0.51l4.02-2.03l2.01,1.52v3.29l-3.77-1.52l-2.26,1.77l1.51,3.29l-1.26,8.61l-7.79,0.76l-0.5-2.79l4.52-2.79l1.01-7.6l-5.03-6.58l-1.76-11.39l-8.04-1.27l-0.75,4.05l1.51,2.03l-3.27,2.79l1.26,7.6l4.77,2.03l1.01,5.57l-4.78-3.04l-12.31-2.28l-1.51,4.05l-9.8,3.54l-1.51-2.53l-12.82,7.09l-0.25,4.81l-5.03,0.76l1.51-3.54v-3.54l-5.03-1.77l-3.27,1.27l2.76,5.32l2.01,3.54v2.79l-3.77-0.76l-0.75-0.76l-3.77,4.05l2.01,3.54l-8.54-0.25l2.76,3.55l-0.75,1.52h-4.52l-3.27-2.28l-0.75-6.33l-5.28-2.03v-2.53l11.06,2.28l6.03,0.51l2.51-3.8l-2.26-4.05l-16.08-6.33l-5.55,1.38l-1.9,1.63l0.59,3.75l2.36,0.41l-0.55,5.9l7.28,17.1l-5.26,8.34l-0.36,1.88l2.67,1.88l-2.41,1.59l-1.6,0.03l0.3,7.35l2.21,3.13l0.03,3.04l2.83,0.26l4.33,1.65l4.58,6.3l0.05,1.66l-1.49,2.55l3.42-0.19l3.33,0.96l4.5,6.37l11.08,1.01l-0.48,7.58l-3.82,3.27l0.79,1.28l-3.77,4.05l-1,3.8l2.26,3.29l7.29,2.53l3.02-1.77l19.35,7.34l0.75-2.03l-4.02-3.8v-4.81l-2.51-0.76l0.5-4.05l4.02-4.81l-7.21-5.4l0.5-7.51l7.71-5.07l9.05,0.51l1.51,2.79l9.3,0.51l6.79-3.8l-3.52-3.8l0.75-7.09l17.59-8.61l13.53,6.1l4.52-4.05l13.32,12.66l10.05-1.01l3.52,3.54l9.55,1.01l6.28-8.61l8.04,3.55l4.27,0.76l4.27-3.8l-3.77-2.53l3.27-5.06l9.3,3.04l2.01,4.05l4.02,0.25l2.51-1.77l6.79-0.25l0.75,1.77l7.79,0.51l5.28-5.57l10.81,1.27l3.27-1.27l1-6.08l-3.27-7.34l3.27-2.79h10.3l9.8,11.65l12.56,7.09h3.77l0.5-3.04l4.52-2.79l0.5,16.46l-4.02,0.25v4.05l2.26,2.79l-0.42,3.62l1.67,0.69l1.01-2.53l1.51,0.51l1,1.01l4.52-1.01l4.52-13.17l0.5-16.46l-5.78-13.17l-7.29-8.86l-3.52,0.51v2.79l-8.54-3.29l3.27-7.09l2.76-18.74l11.56-3.54l5.53-3.54h6.03L805.86,96l1.51,2.53l5.28-5.57l3.02,0.25l-0.5-3.29l-4.78-1.01l3.27-11.9L817.97,72.93L817.97,72.93z",
                    name: "Russian Federation"
                },
                us: {
                    path: "M69.17,53.35l3.46,6.47l2.22-0.5v-2.24L69.17,53.35L69.17,53.35M49.66,110.26l-0.17,3.01l2.16-0.5v-1.34L49.66,110.26L49.66,110.26M46.34,111.6l-4.32,2.18l0.67,2.34l1.66-1.34l3.32-1.51L46.34,111.6L46.34,111.6M28.39,114.44l-2.99-0.67l-0.5,1.34l0.33,2.51L28.39,114.44L28.39,114.44M22.07,114.28l-2.83-1.17l-1,1.84l1.83,1.84L22.07,114.28L22.07,114.28M12.27,111.6l-1.33-1.84l-1.33,0.5v2.51l1.5,1L12.27,111.6L12.27,111.6M1.47,99.71l1.66,1.17l-0.5,1.34H1.47V99.71L1.47,99.71M10,248.7l-0.14,2.33l2.04,1.37l1.22-1.09L10,248.7L10,248.7M15.29,252.13l-1.9,1.37l1.63,2.05l1.9-1.64L15.29,252.13L15.29,252.13M19.1,255.41l-1.63,2.19l0.54,1.37l2.31-1.09L19.1,255.41L19.1,255.41M21.81,259.65l-0.95,5.47l0.95,2.05l3.12-0.96l1.63-2.74l-3.4-3.15L21.81,259.65L21.81,259.65M271.05,281.06l-2.64-0.89l-2.12,1.33l1.06,1.24l3.61,0.53L271.05,281.06L271.05,281.06M93.11,44.89l-8.39,1.99l1.73,9.45l9.13,2.49l0.49,1.99L82.5,65.04l-7.65,12.68l2.71,13.43L82,94.13l3.46-3.23l0.99,1.99l-4.2,4.97l-16.29,7.46l-10.37,2.49l-0.25,3.73l23.94-6.96l9.87-2.74l9.13-11.19l10.12-6.71l-5.18,8.7l5.68,0.75l9.63-4.23l1.73,6.96l6.66,1.49l6.91,6.71l0.49,4.97l-0.99,1.24l1.23,4.72h1.73l0.25-7.96h1.97l0.49,19.64l4.94-4.23l-3.46-20.39h-5.18l-5.68-7.21l27.89-47.25l-27.64-21.63l-30.85,5.97l-1.23,9.45l6.66,3.98l-2.47,6.47L93.11,44.89L93.11,44.89M148.76,158.34l-1,4.02l-3.49-2.26h-1.74l-1,4.27l-12.21,27.36l3.24,23.84l3.99,2.01l0.75,6.53h8.22l7.97,6.02l15.69,1.51l1.74,8.03l2.49,1.76l3.49-3.51l2.74,1.25l2.49,11.54l4.23,2.76l3.49-6.53l10.71-7.78l6.97,3.26l5.98,0.5l0.25-3.76l12.45,0.25l2.49,2.76l0.5,6.27l-1.49,3.51l1.74,6.02h3.74l3.74-5.77l-1.49-2.76l-1.49-6.02l2.24-6.78l10.21-8.78l7.72-2.26l-1-7.28l10.71-11.55l10.71-1.76L272.8,199l10.46-6.02v-8.03l-1-0.5l-3.74,1.25l-0.5,4.92l-12.43,0.15l-9.74,6.47l-15.29,5l-2.44-2.99l6.94-10.5l-3.43-3.27l-2.33-4.44l-4.83-3.88l-5.25-0.44l-9.92-6.77L148.76,158.34L148.76,158.34z",
                    name: "United States of America"
                },
                mu: {
                    path: "M613.01,398.99l-1.52,1.99l0.3,2.15l3.2-2.61L613.01,398.99L613.01,398.99z",
                    name: "Mauritius"
                },
                re: {
                    path: "M607.38,402.37l-2.28,0.15l-0.15,1.99l1.52,0.31l2.28-1.07L607.38,402.37L607.38,402.37z",
                    name: "Reunion"
                },
                mg: {
                    path: "M592.3,372.92l-2.13,5.06l-3.65,6.44l-6.39,0.46l-2.74,3.22l0.46,9.82l-3.96,4.6l0.46,7.82l3.35,3.83l3.96-0.46l3.96-2.92l-0.91-4.6l9.13-15.8l-1.83-1.99l1.83-3.83l1.98,0.61l0.61-1.53l-1.83-7.82l-1.07-3.22L592.3,372.92L592.3,372.92z",
                    name: "Madagascar"
                },
                km: {
                    path: "M577.69,371.23l0.46,1.53l1.98,0.31l0.76-1.99L577.69,371.23L577.69,371.23M580.58,374.3l0.76,1.69h1.22l0.61-2.15L580.58,374.3L580.58,374.3z",
                    name: "Comoros"
                },
                sc: {
                    path: "M602.35,358.34l-0.61,1.23l1.67,1.38l1.22-1.38L602.35,358.34L602.35,358.34M610.88,349.14l-1.83,1.23l1.37,2.15h1.83L610.88,349.14L610.88,349.14M611.64,354.51l-1.22,1.38l0.91,1.38l1.67,0.31l0.15-2.92L611.64,354.51L611.64,354.51z",
                    name: "Seychelles"
                },
                mv: {
                    path: "M656.4,320.76l0.3,2.61l1.67,0.61l0.3-2.3L656.4,320.76L656.4,320.76M658.53,326.28l-0.15,3.22l1.22,0.61l1.07-2.15L658.53,326.28L658.53,326.28M658.84,332.57l-1.07,1.07l1.22,1.07l1.52-1.07L658.84,332.57L658.84,332.57z",
                    name: "Maldives"
                },
                pt: {
                    path: "M372.64,217.02l-1.36,1.37l2.44,1.37l0.27-1.91L372.64,217.02L372.64,217.02M379.97,216.2l-1.63,1.09l1.36,1.09l2.17-0.55L379.97,216.2L379.97,216.2M381.05,220.03l-0.81,2.19l1.08,1.37l1.36-1.09L381.05,220.03L381.05,220.03M387.56,224.4l-0.54,1.37l0.81,0.82l2.17-1.37L387.56,224.4L387.56,224.4M408.18,236.42l-1.08,1.37l1.08,1.37l1.63-0.82L408.18,236.42L408.18,236.42M430.93,211.24l-0.62,8.65l-1.77,1.6l0.18,0.98l1.24,2.05l-0.8,2.5l1.33,0.45l3.1-0.36l-0.18-2.5l2.03-11.59l-0.44-1.6L430.93,211.24L430.93,211.24z",
                    name: "Portugal"
                },
                es: {
                    path: "M415.62,253.73l-1.75,1.01l0.81,0.82L415.62,253.73L415.62,253.73M409.54,253.92l-2.17,0.55l1.08,1.64h1.63L409.54,253.92L409.54,253.92M404.38,252.28l-1.36,1.37l1.9,1.64l1.08-2.46L404.38,252.28L404.38,252.28M448.36,205h-12.74l-2.57-1.16l-1.24,0.09l-1.5,3.12l0.53,3.21l4.87,0.45l0.62,2.05l-2.12,11.95l0.09,2.14l3.45,1.87l3.98,0.27l7.96-1.96l3.89-4.9l0.09-4.99l6.9-6.24l0.35-2.76l-6.28-0.09L448.36,205L448.36,205M461.1,217.21l-1.59,0.54l0.35,1.43h2.3l0.97-1.07L461.1,217.21L461.1,217.21z",
                    name: "Spain"
                },
                cv: {
                    path: "M387.56,290.54l-1.9,1.09l1.36,1.09l1.63-0.82L387.56,290.54L387.56,290.54M392.23,292.74l-1.24,1.1l0.88,1.63l2.12-0.95L392.23,292.74L392.23,292.74M389.52,295.83l-1.59,0.95l1.71,2.29l1.35-0.71L389.52,295.83L389.52,295.83z",
                    name: "Cape Verde"
                },
                pf: {
                    path: "M27.25,402.68l-1.9-0.14l-0.14,1.78l1.49,0.96l1.77-1.09L27.25,402.68L27.25,402.68M33.77,404.6l-2.72,1.78l2.04,2.46l1.77-0.41l0.95-1.23L33.77,404.6L33.77,404.6z",
                    name: "French Polynesia"
                },
                kn: {
                    path: "M276.6,283.37l-1.5,0.62l0.53,1.33l1.76-1.15l-0.35-0.36L276.6,283.37L276.6,283.37z",
                    name: "Saint Kitts and Nevis"
                },
                ag: {
                    path: "M279.07,284.88l-0.88,1.87l1.06,1.42l1.32-1.15L279.07,284.88L279.07,284.88z",
                    name: "Antigua and Barbuda"
                },
                dm: {
                    path: "M282.07,290.03l-1.06,0.98l0.79,1.6l1.5-0.44L282.07,290.03L282.07,290.03z",
                    name: "Dominica"
                },
                lc: {
                    path: "M281.98,294.03l-0.71,1.51l1.15,1.24l1.5-0.8L281.98,294.03L281.98,294.03z",
                    name: "Saint Lucia"
                },
                bb: {
                    path: "M282.07,297.85l-1.23,0.89l0.97,1.78l1.59-0.89L282.07,297.85L282.07,297.85z",
                    name: "Barbados"
                },
                gd: {
                    path: "M280.57,301.31l-1.15,1.15l0.44,0.71h1.41l0.44-1.16L280.57,301.31L280.57,301.31z",
                    name: "Grenada"
                },
                tt: {
                    path: "M282.24,304.78l-1.06,0.98l-1.15,0.18v1.42l2.12,1.95l0.88-1.42l0.53-1.6l-0.18-1.33L282.24,304.78L282.24,304.78z",
                    name: "Trinidad and Tobago"
                },
                do: {
                    path: "M263.11,280.44l-5.29-3.46l-2.5-0.85l-0.84,6l0.88,1.69l1.15-1.33l3.35-0.89l2.91,0.62L263.11,280.44L263.11,280.44z",
                    name: "Dominican Republic"
                },
                ht: {
                    path: "M250.86,275.38l3.44,0.36l-0.41,4.22l-0.34,2.22l-4.01-0.22l-0.71,1.07l-1.23-0.09l-0.44-2.31l4.23-0.35l-0.26-2.4l-1.94-0.8L250.86,275.38L250.86,275.38z",
                    name: "Haiti"
                },
                fk: {
                    path: "M307.95,508.18l-2.63-0.29l-2.62,1.76l1.9,2.06L307.95,508.18L307.95,508.18M310.57,506.86l-0.87,2.79l-2.48,2.2l0.15,0.73l4.23-1.62l1.75-2.2L310.57,506.86L310.57,506.86z",
                    name: "Falkland Islands"
                },
                is: {
                    path: "M406.36,117.31l-1.96-1.11l-2.64,1.67l-2.27,2.1l0.06,1.17l2.94,0.37l-0.18,2.1l-1.04,1.05l0.25,0.68l2.94,0.19v3.4l4.23,0.74l2.51,1.42l2.82,0.12l4.84-2.41l3.74-4.94l0.06-3.34l-2.27-1.92l-1.9-1.61l-0.86,0.62l-1.29,1.67l-1.47-0.19l-1.47-1.61l-1.9,0.18l-2.76,2.29l-1.66,1.79l-0.92-0.8l-0.06-1.98l0.92-0.62L406.36,117.31L406.36,117.31z",
                    name: "Iceland"
                },
                no: {
                    path: "M488.26,53.96l-1.65-1.66l-3.66,1.78h-6.72L475.17,58l3.77,3.33l1.65-0.24l2.36-4.04l2,1.43l-1.42,2.85l-0.71,4.16l1.65,2.61l3.54-5.94l4.6-5.59l-1.77-1.54L488.26,53.96L488.26,53.96M490.26,46.83l-2.95,2.73l1.77,2.73h3.18l1.3,1.78l3.89,2.02l4.48-2.61l3.07-2.61l-1.06-2.14l-3.07-1.78l-2.24,2.02l-1.53-1.9l-1.18,0.12l-1.53,3.33l-2.24-2.26l-0.24-1.54L490.26,46.83L490.26,46.83M496.98,59.07l-2.36,2.14l-2,1.54l0.94,1.66l1.89,0.59l3.07-1.43l1.42-1.78l-1.3-2.14L496.98,59.07L496.98,59.07M515.46,102.14l2.02-1.48L517.3,99l-1.28-0.74l0.18-2.03h1.1v-1.11l-4.77-1.29l-7.15,0.74l-0.73,3.14L503,97.16l-1.1-1.85l-3.49,0.18L498.04,99l-1.65,0.74l-0.92-1.85l-7.34,5.91l1.47,1.66l-2.75,1.29l-6.24,12.38l-2.2,1.48l0.18,1.11l2.2,1.11l-0.55,2.4l-3.67-0.19l-1.1-1.29l-2.38,2.77l-1.47,1.11l-0.37,2.59l-1.28,0.74l-3.3,0.74l-1.65,5.18l1.1,8.5l1.28,3.88l1.47,1.48l3.3-0.18l4.77-4.62l1.83-3.14l0.55,4.62l3.12-5.54l0.18-15.53l2.54-1.6l0.76-8.57l7.7-11.09l3.67-1.29l1.65-2.03l5.5,1.29l2.75,1.66l0.92-4.62l4.59-2.77L515.46,102.14L515.46,102.14z",
                    name: "Norway"
                },
                lk: {
                    path: "M680.54,308.05l0.25,2.72l0.25,1.98l-1.47,0.25l0.74,4.45l2.21,1.24l3.43-1.98l-0.98-4.69l0.25-1.73l-3.19-2.96L680.54,308.05L680.54,308.05z",
                    name: "Sri Lanka"
                },
                cu: {
                    path: "M220.85,266.92v1.27l5.32,0.1l2.51-1.46l0.39,1.07l5.22,1.27l4.64,4.19l-1.06,1.46l0.19,1.66l3.87,0.97l3.87-1.75l1.74-1.75l-2.51-1.27l-12.95-7.6l-4.54-0.49L220.85,266.92L220.85,266.92z",
                    name: "Cuba"
                },
                bs: {
                    path: "M239.61,259.13l-1.26-0.39l-0.1,2.43l1.55,1.56l1.06-1.56L239.61,259.13L239.61,259.13M242.12,262.93l-1.74,0.97l1.64,2.34l0.87-1.17L242.12,262.93L242.12,262.93M247.73,264.68l-1.84-0.1l0.19,1.17l1.35,1.95l1.16-1.27L247.73,264.68L247.73,264.68M246.86,262.35l-3-1.27l-0.58-3.02l1.16-0.49l1.16,2.34l1.16,0.88L246.86,262.35L246.86,262.35M243.96,256.21l-1.55-0.39l-0.29-1.95l-1.64-0.58l1.06-1.07l1.93,0.68l1.45,0.88L243.96,256.21L243.96,256.21z",
                    name: "Bahamas"
                },
                jm: {
                    path: "M238.93,279.59l-3.48,0.88v0.97l2.03,1.17h2.13l1.35-1.56L238.93,279.59L238.93,279.59z",
                    name: "Jamaica"
                },
                ec: {
                    path: "M230.2,335.85l-4.73,2.94l-0.34,4.36l-0.95,1.43l2.98,2.86l-1.29,1.41l0.3,3.6l5.33,1.27l8.07-9.55l-0.02-3.33l-3.87-0.25L230.2,335.85L230.2,335.85z",
                    name: "Ecuador"
                },
                ca: {
                    path: "M203.73,35.89l0.22,4.02l-7.98,8.27l2,6.7l5.76-1.56l3.33-4.92l8.42-3.13l6.87-0.45l-5.32-5.81l-2.66,2.01l-2-0.67l-1.11-2.46l-2.44-2.46L203.73,35.89L203.73,35.89M214.15,24.05l-1.77,3.13l8.65,3.13l3.1-4.69l1.33,3.13h2.22l4.21-4.69l-5.1-1.34l-2-1.56l-2.66,2.68L214.15,24.05L214.15,24.05M229.23,30.31l-6.87,2.9v2.23l8.87,3.35l-2,2.23l1.33,2.9l5.54-2.46h4.66l2.22,3.57l3.77-3.8l-0.89-3.58l-3.1,1.12l-0.44-4.47l1.55-2.68h-1.55l-2.44,1.56l-1.11,0.89l0.67,3.13l-1.77,1.34l-2.66-0.22l-0.67-4.02L229.23,30.31L229.23,30.31M238.32,23.38l-0.67,2.23l4.21,2.01l3.1-1.79l-0.22-1.34L238.32,23.38L238.32,23.38M241.64,19.58l-3.1,1.12l0.22,1.56l6.87-0.45l-0.22-1.56L241.64,19.58L241.64,19.58M256.5,23.38l-0.44,1.56l-1.11,1.56v2.23l4.21-0.67l4.43,3.8h1.55v-3.8l-4.43-4.92L256.5,23.38L256.5,23.38M267.81,27.85l1.77,2.01l-1.55,2.68l1.11,2.9l4.88-2.68v-2.01l-2.88-3.35L267.81,27.85L267.81,27.85M274.24,22.71l0.22,3.57h5.99l1.55,1.34l-0.22,1.56l-5.32,0.67l3.77,5.14l5.1,0.89l7.09-3.13l-10.2-15.42l-3.1,2.01l0.22,2.68l-3.55-1.34L274.24,22.71L274.24,22.71M222.58,47.96l-8.42,2.23l-4.88,4.25l0.44,4.69l8.87,2.68l-2,4.47l-6.43-4.02l-1.77,3.35l4.21,2.9l-0.22,4.69l6.43,1.79l7.76-0.45l1.33-2.46l5.76,6.48l3.99-1.34l0.67-4.47l2.88,2.01l0.44-4.47l-3.55-2.23l0.22-14.07l-3.1-2.46L231.89,56L222.58,47.96L222.58,47.96M249.63,57.79l-2.88-1.34l-1.55,2.01l3.1,4.92l0.22,4.69l6.65-4.02v-5.81l2.44-2.46l-2.44-1.79h-3.99L249.63,57.79L249.63,57.79M263.82,55.78l-4.66,3.8l1.11,4.69h2.88l1.33-2.46l2,2.01l2-0.22l5.32-4.47L263.82,55.78L263.82,55.78M263.37,48.4l-1.11,2.23l4.88,1.79l1.33-2.01L263.37,48.4L263.37,48.4M260.49,39.91l-4.88,0.67l-2.88,2.68l5.32,0.22l-1.55,4.02l1.11,1.79l1.55-0.22l3.77-6.03L260.49,39.91L260.49,39.91M268.92,38.35l-2.66,0.89l0.44,3.57l4.43,2.9l0.22,2.23l-1.33,1.34l0.67,4.47l17.07,5.58l4.66,1.56l4.66-4.02l-5.54-4.47l-5.1,1.34l-7.09-0.67l-2.66-2.68l-0.67-7.37l-4.43-2.23L268.92,38.35L268.92,38.35M282.88,61.59L278,61.14l-5.76,2.23l-3.1,4.24l0.89,11.62l9.53,0.45l9.09,4.47l6.43,7.37l4.88-0.22l-1.33,6.92l-4.43,7.37l-4.88,2.23l-3.55-0.67l-1.77-1.56l-2.66,3.57l1.11,3.57l3.77,0.22l4.66-2.23l3.99,10.28l9.98,6.48l6.87-8.71l-5.76-9.38l3.33-3.8l4.66,7.82l8.42-7.37l-1.55-3.35l-5.76,1.79l-3.99-10.95l3.77-6.25l-7.54-8.04l-4.21,2.9l-3.99-8.71l-8.42,1.12l-2.22-10.5l-6.87,4.69l-0.67,5.81h-3.77l0.44-5.14L282.88,61.59L282.88,61.59M292.86,65.61l-1.77,1.79l1.55,2.46l7.32,0.89l-4.66-4.92L292.86,65.61L292.86,65.61M285.77,40.36v2.01l-4.88,1.12l1.33,2.23l5.54,2.23l6.21,0.67l4.43,3.13l4.43-2.46l-3.1-3.13h3.99l2.44-2.68l5.99-0.89v-1.34l-3.33-2.23l0.44-2.46l9.31,1.56l13.75-5.36l-5.1-1.56l1.33-1.79h10.64l1.77-1.79l-21.51-7.6l-5.1-1.79l-5.54,4.02l-6.21-5.14l-3.33-0.22l-0.67,4.25l-4.21-3.8l-4.88,1.56l0.89,2.46l7.32,1.56l-0.44,3.57l3.99,2.46l9.76-2.46l0.22,3.35l-7.98,3.8l-4.88-3.8l-4.43,0.45l4.43,6.26l-2.22,1.12l-3.33-2.9l-2.44,1.56l2.22,4.24h3.77l-0.89,4.02l-3.1-0.45l-3.99-4.25L285.77,40.36L285.77,40.36M266.01,101.85l-4.23,5.32l-0.26,5.86l3.7-2.13h4.49l3.17,2.93l2.91-2.4L266.01,101.85L266.01,101.85M317.52,171.05l-10.57,10.12l1.06,2.4l12.94,4.79l1.85-3.19l-1.06-5.32l-4.23,0.53l-2.38-2.66l3.96-3.99L317.52,171.05L317.52,171.05M158.22,48.66l1.99,3.01l1,4.02l4.98,1.25l3.49-3.76l2.99,1.51l8.47,0.75l5.98-2.51l1,8.28h3.49V57.7l3.49,0.25l8.72,10.29l5.73,3.51l-2.99,4.77l1.25,1.25L219,80.03l0.25,5.02l2.99,0.5l0.75-7.53l4.73-1.25l3.49,5.27l7.47,3.51l3.74,0.75l2.49-3.01l0.25-4.77l4.48-2.76l1.49,4.02l-3.99,7.03l0.5,3.51l2.24-3.51l4.48-4.02l0.25-5.27l-2.49-4.02l0.75-3.26l5.98-3.01l2.74,2.01l0.5,17.57l4.23-3.76l2.49,1.51l-3.49,6.02l4.48,1l6.48-10.04l5.48,5.77l-2.24,10.29l-5.48,3.01l-5.23-2.51l-9.46,2.01l1,3.26l-2.49,4.02l-7.72,1.76l-8.72,6.78l-7.72,10.29l-1,3.26l5.23,2.01l1.99,5.02l7.22,7.28l11.46,5.02l-2.49,11.54l-0.25,3.26l2.99,2.01l3.99-5.27l0.5-10.04l6.23-0.25l2.99-5.77l0.5-8.78l7.97-15.56l9.96,3.51l5.23,7.28l-2.24,7.28l3.99,2.26l9.71-6.53l2.74,17.82l8.97,10.79l0.25,5.52l-9.96,2.51l-4.73,5.02l-9.96-2.26l-4.98-0.25l-8.72,6.78l5.23-1.25l6.48-1.25l1.25,1.51l-1.74,5.52l0.25,5.02l2.99,2.01l2.99-0.75l1.5-2.26h1.99l-3.24,6.02l-6.23,0.25l-2.74,4.02h-3.49l-1-3.01l4.98-5.02l-5.98,2.01l-0.27-8.53l-1.72-1l-5.23,2.26l-0.5,4.27h-11.96l-10.21,7.03l-13.7,4.52l-1.49-2.01l6.9-10.3l-3.92-3.77l-2.49-4.78l-5.07-3.87l-5.44-0.45l-9.75-6.83l-70.71-11.62l-1.17-4.79l-6.48-6.02v-5.02l1-4.52l-0.5-2.51l-2.49-2.51l-0.5-4.02l6.48-4.52l-3.99-21.58l-5.48-0.25l-4.98-6.53L158.22,48.66L158.22,48.66M133.83,128.41l-1.7,3.26l0.59,2.31l1.11,0.69l-0.26,0.94l-1.19,0.34l0.34,3.43l1.28,1.29l1.02-1.11l-1.28-3.34l0.76-2.66l1.87-2.49l-1.36-2.31L133.83,128.41L133.83,128.41M139.45,147.95l-1.53,0.6l2.81,3.26l0.68,3.86l2.81,3l2.38-0.43v-3.94l-2.89-1.8L139.45,147.95L139.45,147.95z",
                    name: "Canada"
                },
                gt: {
                    path: "M194.88,291.52l5.93,4.34l5.98-7.43l-1.02-1.54l-2.04-0.07v-4.35l-1.53-0.93l-4.63,1.38l1.77,4.08L194.88,291.52L194.88,291.52z",
                    name: "Guatemala"
                },
                hn: {
                    path: "M207.55,288.78l9.24-0.35l2.74,3.26l-1.71-0.39l-3.29,0.14l-4.3,4.04l-1.84,4.09l-1.21-0.64l-0.01-4.48l-2.66-1.78L207.55,288.78L207.55,288.78z",
                    name: "Honduras"
                },
                sv: {
                    path: "M201.65,296.27l4.7,2.34l-0.07-3.71l-2.41-1.47L201.65,296.27L201.65,296.27z",
                    name: "El Salvador"
                },
                ni: {
                    path: "M217.74,292.11l2.19,0.44l0.07,4.49l-2.55,7.28l-6.87-0.68l-1.53-3.51l2.04-4.26l3.87-3.6L217.74,292.11L217.74,292.11z",
                    name: "Nicaragua"
                },
                cr: {
                    path: "M217.38,304.98l1.39,2.72l1.13,1.5l-1.52,4.51l-2.9-2.04l-4.74-4.34v-2.87L217.38,304.98L217.38,304.98z",
                    name: "Costa Rica"
                },
                pa: {
                    path: "M220.59,309.61l-1.46,4.56l4.82,1.25l2.99,0.59l0.51-3.53l3.21-1.62l2.85,1.47l1.12,1.79l1.36-0.16l1.07-3.25l-3.56-1.47l-2.7-1.47l-2.7,1.84l-3.21,1.62l-3.28-1.32L220.59,309.61L220.59,309.61z",
                    name: "Panama"
                },
                co: {
                    path: "M253.73,299.78l-2.06-0.21l-13.62,11.23l-1.44,3.95l-1.86,0.21l0.83,8.73l-4.75,11.65l5.16,4.37l6.61,0.42l4.54,6.66l6.6,0.21l-0.21,4.99H256l2.68-9.15l-2.48-3.12l0.62-5.82l5.16-0.42l-0.62-13.52l-11.56-3.74l-2.68-7.28L253.73,299.78L253.73,299.78z",
                    name: "Colombia"
                },
                ve: {
                    path: "M250.46,305.92l0.44,2.59l3.25,1.03l0.74-4.77l3.43-3.55l3.43,4.02l7.89,2.15l6.68-1.4l4.55,5.61l3.43,2.15l-3.76,5.73l1.26,4.34l-2.15,2.66l-2.23,1.87l-4.83-2.43l-1.11,1.12v3.46l3.53,1.68l-2.6,2.81l-2.6,2.81l-3.43-0.28l-3.45-3.79l-0.73-14.26l-11.78-4.02l-2.14-6.27L250.46,305.92L250.46,305.92z",
                    name: "Venezuela"
                },
                gy: {
                    path: "M285.05,314.13l7.22,6.54l-2.87,3.32l-0.23,1.97l3.77,3.89l-0.09,3.74l-6.56,2.5l-3.93-5.31l0.84-6.38l-1.68-4.75L285.05,314.13L285.05,314.13z",
                    name: "Guyana"
                },
                sr: {
                    path: "M293.13,321.14l2.04,1.87l3.16-1.96l2.88,0.09l-0.37,1.12l-1.21,2.52l-0.19,6.27l-5.75,2.34l0.28-4.02l-3.71-3.46l0.19-1.78L293.13,321.14L293.13,321.14z",
                    name: "Suriname"
                },
                gf: {
                    path: "M302.13,321.8l5.85,3.65l-3.06,6.08l-1.11,1.4l-3.25-1.87l0.09-6.55L302.13,321.8L302.13,321.8z",
                    name: "French Guiana"
                },
                pe: {
                    path: "M225.03,349.52l-1.94,1.96l0.13,3.13l16.94,30.88l17.59,11.34l2.72-4.56l0.65-10.03l-1.42-6.25l-4.79-8.08l-2.85,0.91l-1.29,1.43l-5.69-6.52l1.42-7.69l6.6-4.3l-0.52-4.04l-6.72-0.26l-3.49-5.86l-1.94-0.65l0.13,3.52l-8.66,10.29l-6.47-1.56L225.03,349.52L225.03,349.52z",
                    name: "Peru"
                },
                bo: {
                    path: "M258.71,372.79l8.23-3.59l2.72,0.26l1.81,7.56l12.54,4.17l2.07,6.39l5.17,0.65l2.2,5.47l-1.55,4.95l-8.41,0.65l-3.1,7.95l-6.6-0.13l-2.07-0.39l-3.81,3.7l-1.88-0.18l-6.47-14.99l1.79-2.68l0.63-10.6l-1.6-6.31L258.71,372.79L258.71,372.79z",
                    name: "Bolivia"
                },
                py: {
                    path: "M291.76,399.51l2.2,2.4l-0.26,5.08l6.34-0.39l4.79,6.13l-0.39,5.47l-3.1,4.69l-6.34,0.26l-0.26-2.61l1.81-4.3l-6.21-3.91h-5.17l-3.88-4.17l2.82-8.06L291.76,399.51L291.76,399.51z",
                    name: "Paraguay"
                },
                uy: {
                    path: "M300.36,431.93l-2.05,2.19l0.85,11.78l6.44,1.87l8.19-8.21L300.36,431.93L300.36,431.93z",
                    name: "Uruguay"
                },
                ar: {
                    path: "M305.47,418.2l1.94,1.82l-7.37,10.95l-2.59,2.87l0.9,12.51l5.69,6.91l-4.78,8.34l-3.62,1.56h-4.14l1.16,6.51l-6.47,2.22l1.55,5.47l-3.88,12.38l4.79,3.91l-2.59,6.38l-4.4,6.91l2.33,4.82l-5.69,0.91l-4.66-5.73l-0.78-17.85l-7.24-30.32l2.19-10.6l-4.66-13.55l3.1-17.59l2.85-3.39l-0.7-2.57l3.66-3.34l8.16,0.56l4.56,4.87l5.27,0.09l5.4,3.3l-1.59,3.72l0.38,3.76l7.65-0.36L305.47,418.2L305.47,418.2M288.92,518.79l0.26,5.73l4.4-0.39l3.75-2.48l-6.34-1.3L288.92,518.79L288.92,518.79z",
                    name: "Argentina"
                },
                cl: {
                    path: "M285.04,514.1l-4.27,9.38l7.37,0.78l0.13-6.25L285.04,514.1L285.04,514.1M283.59,512.63l-3.21,3.55l-0.39,4.17l-6.21-3.52l-6.6-9.51l-1.94-3.39l2.72-3.52l-0.26-4.43l-3.1-1.3l-2.46-1.82l0.52-2.48l3.23-0.91l0.65-14.33l-5.04-2.87l-3.29-74.59l0.85-1.48l6.44,14.85l2.06,0.04l0.67,2.37l-2.74,3.32l-3.15,17.87l4.48,13.76l-2.07,10.42l7.3,30.64l0.77,17.92l5.23,6.05L283.59,512.63L283.59,512.63M262.28,475.14l-1.29,1.95l0.65,3.39l1.29,0.13l0.65-4.3L262.28,475.14L262.28,475.14z",
                    name: "Chile"
                },
                br: {
                    path: "M314.24,438.85l6.25-12.02l0.23-10.1l11.66-7.52h6.53l5.13-8.69l0.93-16.68l-2.1-4.46l12.36-11.28l0.47-12.45l-16.79-8.22l-20.28-6.34l-9.56-0.94l2.57-5.4l-0.7-8.22l-2.09-0.69l-3.09,6.14l-1.62,2.03l-4.16-1.84l-13.99,4.93l-4.66-5.87l0.75-6.13l-4.4,4.48l-4.86-2.62l-0.49,0.69l0.01,2.13l4.19,2.25l-6.29,6.63l-3.97-0.04l-4.02-4.09l-4.55,0.14l-0.56,4.86l2.61,3.17l-3.08,9.87l-3.6,0.28l-5.73,3.62l-1.4,7.11l4.97,5.32l0.91-1.03l3.49-0.94l2.98,5.02l8.53-3.66l3.31,0.19l2.28,8.07l12.17,3.86l2.1,6.44l5.18,0.62l2.47,6.15l-1.67,5.47l2.18,2.86l-0.32,4.26l5.84-0.55l5.35,6.76l-0.42,4.75l3.17,2.68l-7.6,11.51L314.24,438.85L314.24,438.85z",
                    name: "Brazil"
                },
                bz: {
                    path: "M204.56,282.4l-0.05,3.65h0.84l2.86-5.34h-1.94L204.56,282.4L204.56,282.4z",
                    name: "Belize"
                },
                mn: {
                    path: "M673.8,170.17l5.82-7.72l6.99,3.23l4.75,1.27l5.82-5.34l-3.95-2.91l2.6-3.67l7.76,2.74l2.69,4.41l4.86,0.13l2.54-1.89l5.23-0.21l1.14,1.94l8.69,0.44l5.5-5.61l7.61,0.8l-0.44,7.64l3.33,0.76l4.09-1.86l4.33,2.14l-0.1,1.08l-3.14,0.09l-3.27,6.86l-2.54,0.25l-9.88,12.91l-10.09,4.45l-6.31,0.49l-5.24-3.38l-6.7,3.58l-6.6-2.05l-1.87-4.79l-12.5-0.88l-6.4-10.85l-3.11-0.2L673.8,170.17L673.8,170.17z",
                    name: "Mongolia"
                },
                kp: {
                    path: "M778.28,194.27l1.84,0.77l0.56,6.44l3.65,0.21l3.44-4.03l-1.19-1.06l0.14-4.32l3.16-3.82l-1.61-2.9l1.05-1.2l0.58-3l-1.83-0.83l-1.56,0.79l-1.93,5.86l-3.12-0.27l-3.61,4.26L778.28,194.27L778.28,194.27z",
                    name: "North Korea"
                },
                kr: {
                    path: "M788.34,198.2l6.18,5.04l1.05,4.88l-0.21,2.62l-3.02,3.4l-2.6,0.14l-2.95-6.37l-1.12-3.04l1.19-0.92l-0.28-1.27l-1.47-0.66L788.34,198.2L788.34,198.2z",
                    name: "South Korea"
                },
                kz: {
                    path: "M576.69,188.62l4.1-1.75l4.58-0.16l0.32,7h-2.68l-2.05,3.34l2.68,4.45l3.95,2.23l0.36,2.55l1.45-0.48l1.34-1.59l2.21,0.48l1.11,2.23h2.84v-2.86l-1.74-5.09l-0.79-4.13l5.05-2.23l6.79,1.11l4.26,4.29l9.63-0.95l5.37,7.63l6.31,0.32l1.74-2.86l2.21-0.48l0.32-3.18l3.31-0.16l1.74,2.07l1.74-4.13l14.99,2.07l2.52-3.34l-4.26-5.25l5.68-12.4l4.58,0.32l3.16-7.63l-6.31-0.64l-3.63-3.5l-10,1.16l-12.88-12.45l-4.54,4.03l-13.77-6.25l-16.89,8.27l-0.47,5.88l3.95,4.61l-7.7,4.35l-9.99-0.22l-2.09-3.07l-7.83-0.43l-7.42,4.77l-0.16,6.52L576.69,188.62L576.69,188.62z",
                    name: "Kazakhstan"
                },
                tm: {
                    path: "M593.85,207.59l-0.62,2.63h-4.15v3.56l4.46,2.94l-1.38,4.03v1.86l1.85,0.31l2.46-3.25l5.54-1.24l11.84,4.49l0.15,3.25l6.61,0.62l7.38-7.75l-0.92-2.48l-4.92-1.08l-13.84-8.99l-0.62-3.25h-5.23l-2.31,4.34h-2.31L593.85,207.59L593.85,207.59z",
                    name: "Turkmenistan"
                },
                uz: {
                    path: "M628.92,219.06l3.08,0.16v-5.27l-2.92-1.7l4.92-6.2h2l2,2.33l5.23-2.01l-7.23-2.48l-0.28-1.5l-1.72,0.42l-1.69,2.94l-7.29-0.24l-5.35-7.57l-9.4,0.93l-4.48-4.44l-6.2-1.05l-4.5,1.83l2.61,8.68l0.03,2.92l1.9,0.04l2.33-4.44l6.2,0.08l0.92,3.41l13.29,8.82l5.14,1.18L628.92,219.06L628.92,219.06z",
                    name: "Uzbekistan"
                },
                tj: {
                    path: "M630.19,211.84l4.11-5.1h1.55l0.54,1.14l-1.9,1.38v1.14l1.25,0.9l6.01,0.36l1.96-0.84l0.89,0.18l0.6,1.92l3.57,0.36l1.79,3.78l-0.54,1.14l-0.71,0.06l-0.71-1.44l-1.55-0.12l-2.68,0.36l-0.18,2.52l-2.68-0.18l0.12-3.18l-1.96-1.92l-2.98,2.46l0.06,1.62l-2.62,0.9h-1.55l0.12-5.58L630.19,211.84L630.19,211.84z",
                    name: "Tajikistan"
                },
                kg: {
                    path: "M636.81,199.21l-0.31,2.53l0.25,1.56l8.7,2.92l-7.64,3.08l-0.87-0.72l-1.65,1.06l0.08,0.58l0.88,0.4l5.36,0.14l2.72-0.82l3.49-4.4l4.37,0.76l5.27-7.3l-14.1-1.92l-1.95,4.73l-2.46-2.64L636.81,199.21L636.81,199.21z",
                    name: "Kyrgyz Republic"
                },
                af: {
                    path: "M614.12,227.05l1.59,12.46l3.96,0.87l0.37,2.24l-2.84,2.37l5.29,4.27l10.28-3.7l0.82-4.38l6.47-4.04l2.48-9.36l1.85-1.99l-1.92-3.34l6.26-3.87l-0.8-1.12l-2.89,0.18l-0.26,2.66l-3.88-0.04l-0.07-3.55l-1.25-1.49l-2.1,1.91l0.06,1.75l-3.17,1.2l-5.85-0.37l-7.6,7.96L614.12,227.05L614.12,227.05z",
                    name: "Afghanistan"
                },
                pk: {
                    path: "M623.13,249.84l2.6,3.86l-0.25,1.99l-3.46,1.37l-0.25,3.24h3.96l1.36-1.12h7.54l6.8,5.98l0.87-2.87h5.07l0.12-3.61l-5.19-4.98l1.11-2.74l5.32-0.37l7.17-14.95l-3.96-3.11l-1.48-5.23l9.64-0.87l-5.69-8.1l-3.03-0.82l-1.24,1.5l-0.93,0.07l-5.69,3.61l1.86,3.12l-2.1,2.24l-2.6,9.59l-6.43,4.11l-0.87,4.49L623.13,249.84L623.13,249.84z",
                    name: "Pakistan"
                },
                in : {
                    path: "M670.98,313.01l4.58-2.24l2.72-9.84l-0.12-12.08l15.58-16.82v-3.99l3.21-1.25l-0.12-4.61l-3.46-6.73l1.98-3.61l4.33,3.99l5.56,0.25v2.24l-1.73,1.87l0.37,1l2.97,0.12l0.62,3.36h0.87l2.23-3.99l1.11-10.46l3.71-2.62l0.12-3.61l-1.48-2.87l-2.35-0.12l-9.2,6.08l0.58,3.91l-6.46-0.02l-2.28-2.79l-1.24,0.16l0.42,3.88l-13.97-1l-8.66-3.86l-0.46-4.75l-5.77-3.58l-0.07-7.37l-3.96-4.53l-9.1,0.87l0.99,3.96l4.46,3.61l-7.71,15.78l-5.16,0.39l-0.85,1.9l5.08,4.7l-0.25,4.75l-5.19-0.08l-0.56,2.36l4.31-0.19l0.12,1.87l-3.09,1.62l1.98,3.74l3.83,1.25l2.35-1.74l1.11-3.11l1.36-0.62l1.61,1.62l-0.49,3.99l-1.11,1.87l0.25,3.24L670.98,313.01L670.98,313.01z",
                    name: "India"
                },
                np: {
                    path: "M671.19,242.56l0.46,4.27l8.08,3.66l12.95,0.96l-0.49-3.13l-8.65-2.38l-7.34-4.37L671.19,242.56L671.19,242.56z",
                    name: "Nepal"
                },
                bt: {
                    path: "M695.4,248.08l1.55,2.12l5.24,0.04l-0.53-2.9L695.4,248.08L695.4,248.08z",
                    name: "Bhutan"
                },
                bd: {
                    path: "M695.57,253.11l-1.31,2.37l3.4,6.46l0.1,5.04l0.62,1.35l3.99,0.07l2.26-2.17l1.64,0.99l0.33,3.07l1.31-0.82l0.08-3.92l-1.1-0.13l-0.69-3.33l-2.78-0.1l-0.69-1.85l1.7-2.27l0.03-1.12h-4.94L695.57,253.11L695.57,253.11z",
                    name: "Bangladesh"
                },
                mm: {
                    path: "M729.44,303.65l-2.77-4.44l2.01-2.82l-1.9-3.49l-1.79-0.34l-0.34-5.86l-2.68-5.19l-0.78,1.24l-1.79,3.04l-2.24,0.34l-1.12-1.47l-0.56-3.95l-1.68-3.16l-6.84-6.45l1.68-1.11l0.31-4.67l2.5-4.2l1.08-10.45l3.62-2.47l0.12-3.81l2.17,0.72l3.42,4.95l-2.54,5.44l1.71,4.27l4.23,1.66l0.77,4.65l5.68,0.88l-1.57,2.71l-7.16,2.82l-0.78,4.62l5.26,6.76l0.22,3.61l-1.23,1.24l0.11,1.13l3.92,5.75l0.11,5.97L729.44,303.65L729.44,303.65z",
                    name: "Myanmar"
                },
                th: {
                    path: "M730.03,270.47l3.24,4.17v5.07l1.12,0.56l5.15-2.48l1.01,0.34l6.15,7.1l-0.22,4.85l-2.01-0.34l-1.79-1.13l-1.34,0.11l-2.35,3.94l0.45,2.14l1.9,1.01l-0.11,2.37l-1.34,0.68l-4.59-3.16v-2.82l-1.9-0.11l-0.78,1.24l-0.4,12.62l2.97,5.42l5.26,5.07l-0.22,1.47l-2.8-0.11l-2.57-3.83h-2.69l-3.36-2.71l-1.01-2.82l1.45-2.37l0.5-2.14l1.58-2.8l-0.07-6.44l-3.86-5.58l-0.16-0.68l1.25-1.26l-0.29-4.43l-5.14-6.51l0.6-3.75L730.03,270.47L730.03,270.47z",
                    name: "Thailand"
                },
                kh: {
                    path: "M740.48,299.47l4.09,4.37l7.61-5.64l0.67-8.9l-3.93,2.71l-2.04-1.14l-2.77-0.37l-1.55-1.09l-0.75,0.04l-2.03,3.33l0.33,1.54l2.06,1.15l-0.25,3.13L740.48,299.47L740.48,299.47z",
                    name: "Cambodia"
                },
                la: {
                    path: "M735.47,262.93l-2.42,1.23l-2.01,5.86l3.36,4.28l-0.56,4.73l0.56,0.23l5.59-2.71l7.5,8.38l-0.18,5.28l1.63,0.88l4.03-3.27l-0.33-2.59l-11.63-11.05l0.11-1.69l1.45-1.01l-1.01-2.82l-4.81-0.79L735.47,262.93L735.47,262.93z",
                    name: "Lao People's Democratic Republic"
                },
                vn: {
                    path: "M745.06,304.45l1.19,1.87l0.22,2.14l3.13,0.34l3.8-5.07l3.58-1.01l1.9-5.18l-0.89-8.34l-3.69-5.07l-3.89-3.11l-4.95-8.5l3.55-5.94l-5.08-5.83l-4.07-0.18l-3.66,1.97l1.09,4.71l4.88,0.86l1.31,3.63l-1.72,1.12l0.11,0.9l11.45,11.2l0.45,3.29l-0.69,10.4L745.06,304.45L745.06,304.45z",
                    name: "Vietnam"
                },
                ge: {
                    path: "M555.46,204.16l3.27,4.27l4.08,1.88l2.51-0.01l4.31-1.17l1.08-1.69l-12.75-4.77L555.46,204.16L555.46,204.16z",
                    name: "Georgia"
                },
                am: {
                    path: "M569.72,209.89l4.8,6.26l-1.41,1.65l-3.4-0.59l-4.22-3.78l0.23-2.48L569.72,209.89L569.72,209.89z",
                    name: "Armenia"
                },
                az: {
                    path: "M571.41,207.72l-1.01,1.72l4.71,6.18l1.64-0.53l2.7,2.83l1.17-4.96l2.93,0.47l-0.12-1.42l-4.82-4.22l-0.92,2.48L571.41,207.72L571.41,207.72z",
                    name: "Azerbaijan"
                },
                ir: {
                    path: "M569.65,217.95l-1.22,1.27l0.12,2.01l1.52,2.13l5.39,5.9l-0.82,2.36h-0.94l-0.47,2.36l3.05,3.9l2.81,0.24l5.63,7.79l3.16,0.24l2.46,1.77l0.12,3.54l9.73,5.67h3.63l2.23-1.89l2.81-0.12l1.64,3.78l10.51,1.46l0.31-3.86l3.48-1.26l0.16-1.38l-2.77-3.78l-6.17-4.96l3.24-2.95l-0.23-1.3l-4.06-0.63l-1.72-13.7l-0.2-3.15l-11.01-4.21l-4.88,1.1l-2.73,3.35l-2.42-0.16l-0.7,0.59l-5.39-0.35l-6.8-4.96l-2.53-2.77l-1.16,0.28l-2.09,2.39L569.65,217.95L569.65,217.95z",
                    name: "Iran"
                },
                tr: {
                    path: "M558.7,209.19l-2.23,2.36l-8.2-0.24l-4.92-2.95l-4.8-0.12l-5.51,3.9l-5.16,0.24l-0.47,2.95h-5.86l-2.34,2.13v1.18l1.41,1.18v1.3l-0.59,1.54l0.59,1.3l1.88-0.94l1.88,2.01l-0.47,1.42l-0.7,0.95l1.05,1.18l5.16,1.06l3.63-1.54v-2.24l1.76,0.35l4.22,2.48l4.57-0.71l1.99-1.89l1.29,0.47v2.13h1.76l1.52-2.95l13.36-1.42l5.83-0.71l-1.54-2.02l-0.03-2.73l1.17-1.4l-4.26-3.42l0.23-2.95h-2.34L558.7,209.19L558.7,209.19M523.02,209.7l-0.16,3.55l3.1-0.95l1.42-0.95l-0.42-1.54l-1.47-1.17L523.02,209.7L523.02,209.7z",
                    name: "Turkey"
                },
                om: {
                    path: "M598.38,280.84l7.39-4.26l1.31-6.25l-1.62-0.93l0.67-6.7l1.41-0.82l1.51,2.37l8.99,4.7v2.61l-10.89,16.03l-5.01,0.17L598.38,280.84L598.38,280.84z",
                    name: "Oman"
                },
                ae: {
                    path: "M594.01,264.94l0.87,3.48l9.86,0.87l0.69-7.14l1.9-1.04l0.52-2.61l-3.11,0.87l-3.46,5.23L594.01,264.94L594.01,264.94z",
                    name: "United Arab Emirates"
                },
                qa: {
                    path: "M592.63,259.02l-0.52,4.01l1.54,1.17l1.4-0.13l0.52-5.05l-1.21-0.87L592.63,259.02L592.63,259.02z",
                    name: "Qatar"
                },
                kw: {
                    path: "M583.29,247.17l-2.25-1.22l-1.56,1.57l0.17,3.14l3.63,1.39L583.29,247.17L583.29,247.17z",
                    name: "Kuwait"
                },
                sa: {
                    path: "M584,253.24l7.01,9.77l2.26,1.8l1.01,4.38l10.79,0.85l1.22,0.64l-1.21,5.4l-7.09,4.18l-10.37,3.14l-5.53,5.4l-6.57-3.83l-3.98,3.48L566,279.4l-3.8-1.74l-1.38-2.09v-4.53l-13.83-16.72l-0.52-2.96h3.98l4.84-4.18l0.17-2.09l-1.38-1.39l2.77-2.26l5.88,0.35l10.03,8.36l5.92-0.27l0.38,1.46L584,253.24L584,253.24z",
                    name: "Saudi Arabia"
                },
                sy: {
                    path: "M546.67,229.13l-0.35,2.54l2.82,1.18l-0.12,7.04l2.82-0.06l2.82-2.13l1.06-0.18l6.4-5.09l1.29-7.39l-12.79,1.3l-1.35,2.96L546.67,229.13L546.67,229.13z",
                    name: "Syrian Arab Republic"
                },
                iq: {
                    path: "M564.31,225.03l-1.56,7.71l-6.46,5.38l0.41,2.54l6.31,0.43l10.05,8.18l5.62-0.16l0.15-1.89l2.06-2.21l2.88,1.63l0.38-0.36l-5.57-7.41l-2.64-0.16l-3.51-4.51l0.7-3.32l1.07-0.14l0.37-1.47l-4.78-5.03L564.31,225.03L564.31,225.03z",
                    name: "Iraq"
                },
                jo: {
                    path: "M548.9,240.78l-2.46,8.58l-0.11,1.31h3.87l4.33-3.82l0.11-1.45l-1.77-1.81l3.17-2.63l-0.46-2.44l-0.87,0.2l-2.64,1.89L548.9,240.78L548.9,240.78z",
                    name: "Jordan"
                },
                lb: {
                    path: "M546.2,232.44l0.06,1.95l-0.82,2.96l2.82,0.24l0.18-4.2L546.2,232.44L546.2,232.44z",
                    name: "Lebanon"
                },
                il: {
                    path: "M545.32,238.06l-1.58,5.03l2.05,6.03l2.35-8.81v-1.89L545.32,238.06L545.32,238.06z",
                    name: "Israel"
                },
                cy: {
                    path: "M543.21,229.84l1.23,0.89l-3.81,3.61l-1.82-0.06l-1.35-0.95l0.18-1.77l2.76-0.18L543.21,229.84L543.21,229.84z",
                    name: "Cyprus"
                },
                gb: {
                    path: "M446.12,149.08l-1.83,2.77l0.73,1.11h4.22v1.85l-1.1,1.48l0.73,3.88l2.38,4.62l1.83,4.25l2.93,1.11l1.28,2.22l-0.18,2.03l-1.83,1.11l-0.18,0.92l1.28,0.74l-1.1,1.48l-2.57,1.11l-4.95-0.55l-7.71,3.51l-2.57-1.29l7.34-4.25l-0.92-0.55l-3.85-0.37l2.38-3.51l0.37-2.96l3.12-0.37l-0.55-5.73l-3.67-0.18l-1.1-1.29l0.18-4.25l-2.2,0.18l2.2-7.39l4.04-2.96L446.12,149.08L446.12,149.08M438.42,161.47l-3.3,0.37l-0.18,2.96l2.2,1.48l2.38-0.55l0.92-1.66L438.42,161.47L438.42,161.47z",
                    name: "United Kingdom"
                },
                ie: {
                    path: "M439.51,166.55l-0.91,6l-8.07,2.96h-2.57l-1.83-1.29v-1.11l4.04-2.59l-1.1-2.22l0.18-3.14l3.49,0.18l1.6-3.76l-0.21,3.34l2.71,2.15L439.51,166.55L439.51,166.55z",
                    name: "Ireland"
                },
                se: {
                    path: "M497.72,104.58l1.96,1.81h3.67l2.02,3.88l0.55,6.65l-4.95,3.51v3.51l-3.49,4.81l-2.02,0.18l-2.75,4.62l0.18,4.44l4.77,3.51l-0.37,2.03l-1.83,2.77l-2.75,2.4l0.18,7.95l-4.22,1.48l-1.47,3.14h-2.02l-1.1-5.54l-4.59-7.04l3.77-6.31l0.26-15.59l2.6-1.43l0.63-8.92l7.41-10.61L497.72,104.58L497.72,104.58M498.49,150.17l-2.11,1.67l1.06,2.45l1.87-1.82L498.49,150.17L498.49,150.17z",
                    name: "Sweden"
                },
                fi: {
                    path: "M506.79,116.94l2.07,0.91l1.28,2.4l-1.28,1.66l-6.42,7.02l-1.1,3.7l1.47,5.36l4.95,3.7l6.6-3.14l5.32-0.74l4.95-7.95l-3.67-8.69l-3.49-8.32l0.55-5.36l-2.2-0.37l-0.57-3.91l-2.96-4.83l-3.28,2.27l-1.29,5.27l-3.48-2.09l-4.84-1.18l-1.08,1.26l1.86,1.68l3.39-0.06l2.73,4.41L506.79,116.94L506.79,116.94z",
                    name: "Finland"
                },
                lv: {
                    path: "M518.07,151.37l-6.85-1.11l0.15,3.83l6.35,3.88l2.6-0.76l-0.15-2.92L518.07,151.37L518.07,151.37z",
                    name: "Latvia"
                },
                lt: {
                    path: "M510.81,154.7l-2.15-0.05l-2.95,2.82h-2.5l0.15,3.53l-1.5,2.77l5.4,0.05l1.55-0.2l1.55,1.87l3.55-0.15l3.4-4.33l-0.2-2.57L510.81,154.7L510.81,154.7z",
                    name: "Lithuania"
                },
                by: {
                    path: "M510.66,166.29l1.5,2.47l-0.6,1.97l0.1,1.56l0.55,1.87l3.1-1.76l3.85,0.1l2.7,1.11h6.85l2-4.79l1.2-1.81v-1.21l-4.3-6.05l-3.8-1.51l-3.1-0.35l-2.7,0.86l0.1,2.72l-3.75,4.74L510.66,166.29L510.66,166.29z",
                    name: "Belarus"
                },
                pl: {
                    path: "M511.46,174.76l0.85,1.56l0.2,1.66l-0.7,1.61l-1.6,3.08l-1.35,0.61l-1.75-0.76l-1.05,0.05l-2.55,0.96l-2.9-0.86l-4.7-3.33l-4.6-2.47l-1.85-2.82l-0.35-6.65l3.6-3.13l4.7-1.56l1.75-0.2l-0.7,1.41l0.45,0.55l7.91,0.15l1.7-0.05l2.8,4.29l-0.7,1.76l0.3,2.07L511.46,174.76L511.46,174.76z",
                    name: "Poland"
                },
                it: {
                    path: "M477.56,213.38l-2.65,1.34l0.35,5.17l2.12,0.36l1.59-1.52v-4.9L477.56,213.38L477.56,213.38M472.27,196.98l-0.62,1.57l0.17,1.71l2.39,2.79l3.76-0.13l8.3,9.64l5.18,1.5l3.06,2.89l0.73,6.59l1.64-0.96l1.42-3.59l-0.35-2.58l2.43-0.22l0.35-1.46l-6.85-3.28l-6.5-6.39l-2.59-3.82l-0.63-3.63l3.31-0.79l-0.85-2.39l-2.03-1.71l-1.75-0.08l-2.44,0.67l-2.3,3.22l-1.39,0.92l-2.15-1.32L472.27,196.98L472.27,196.98M492.44,223.02l-1.45-0.78l-4.95,0.78l0.17,1.34l4.45,2.24l0.67,0.73l1.17,0.17L492.44,223.02L492.44,223.02z",
                    name: "Italy"
                },
                fr: {
                    path: "M477.83,206.96l-1.95,1.96l-0.18,1.78l1.59,0.98l0.62-0.09l0.35-2.59L477.83,206.96L477.83,206.96M460.4,178.7l-2.21,0.54l-4.42,4.81l-1.33,0.09l-1.77-1.25l-1.15,0.27l-0.88,2.76l-6.46,0.18l0.18,1.43l4.42,2.94l5.13,4.1l-0.09,4.9l-2.74,4.81l5.93,2.85l6.02,0.18l1.86-2.14l3.8,0.09l1.06,0.98l3.8-0.27l1.95-2.5l-2.48-2.94l-0.18-1.87l0.53-2.05l-1.24-1.78l-2.12,0.62l-0.27-1.6l4.69-5.17v-3.12l-3.1-1.78l-1.59-0.27L460.4,178.7L460.4,178.7z",
                    name: "France"
                },
                nl: {
                    path: "M470.09,168.27l-4.53,2.23l0.96,0.87l0.1,2.23l-0.96-0.19l-1.06-1.65l-2.53,4.01l3.89,0.81l1.45,1.53l0.77,0.02l0.51-3.46l2.45-1.03L470.09,168.27L470.09,168.27z",
                    name: "Netherlands"
                },
                be: {
                    path: "M461.61,176.52l-0.64,1.6l6.88,4.54l1.98,0.47l0.07-2.15l-1.73-1.94h-1.06l-1.45-1.65L461.61,176.52L461.61,176.52z",
                    name: "Belgium"
                },
                de: {
                    path: "M471.14,167.88l3.57-0.58v-2.52l2.99-0.49l1.64,1.65l1.73,0.19l2.7-1.17l2.41,0.68l2.12,1.84l0.29,6.89l2.12,2.82l-2.79,0.39l-4.63,2.91l0.39,0.97l4.14,3.88l-0.29,1.94l-3.85,1.94l-3.57,0.1l-0.87,1.84h-1.83l-0.87-1.94l-3.18-0.78l-0.1-3.2l-2.7-1.84l0.29-2.33l-1.83-2.52l0.48-3.3l2.5-1.17L471.14,167.88L471.14,167.88z",
                    name: "Germany"
                },
                dk: {
                    path: "M476.77,151.5l-4.15,4.59l-0.15,2.99l1.89,4.93l2.96-0.56l-0.37-4.03l2.04-2.28l-0.04-1.79l-1.44-3.73L476.77,151.5L476.77,151.5M481.44,159.64l-0.93-0.04l-1.22,1.12l0.15,1.75l2.89,0.08l0.15-1.98L481.44,159.64L481.44,159.64z",
                    name: "Denmark"
                },
                ch: {
                    path: "M472.91,189.38l-4.36,4.64l0.09,0.47l1.79-0.56l1.61,2.24l2.72-0.96l1.88,1.46l0.77-0.44l2.32-3.64l-0.59-0.56l-2.29-0.06l-1.11-2.27L472.91,189.38L472.91,189.38z",
                    name: "Switzerland"
                },
                cz: {
                    path: "M488.43,184.87h2.97h1.46l2.37,1.69l4.39-3.65l-4.26-3.04l-4.22-2.04l-2.89,0.52l-3.92,2.52L488.43,184.87L488.43,184.87z",
                    name: "Czech Republic"
                },
                sk: {
                    path: "M495.84,187.13l0.69,0.61l0.09,1.04l7.63-0.17l5.64-2.43l-0.09-2.47l-1.08,0.48l-1.55-0.83l-0.95-0.04l-2.5,1l-3.4-0.82L495.84,187.13L495.84,187.13z",
                    name: "Slovakia"
                },
                at: {
                    path: "M480.63,190.12l-0.65,1.35l0.56,0.96l2.33-0.48h1.98l2.15,1.82l4.57-0.83l3.36-2l0.86-1.35l-0.13-1.74l-3.02-2.26l-4.05,0.04l-0.34,2.3l-4.26,2.08L480.63,190.12L480.63,190.12z",
                    name: "Austria"
                },
                hu: {
                    path: "M496.74,189.6l-1.16,1.82l0.09,2.78l1.85,0.95l5.69,0.17l7.93-6.68l0.04-1.48l-0.86-0.43l-5.73,2.6L496.74,189.6L496.74,189.6z",
                    name: "Hungary"
                },
                si: {
                    path: "M494.8,191.99l-2.54,1.52l-4.74,1.04l0.95,2.74l3.32,0.04l3.06-2.56L494.8,191.99L494.8,191.99z",
                    name: "Slovenia"
                },
                hr: {
                    path: "M495.62,195.16l-3.53,2.91h-3.58l-0.43,2.52l1.64,0.43l0.82-1.22l1.29,1.13l1.03,3.6l7.07,3.3l0.7-0.8l-7.17-7.4l0.73-1.35l6.81-0.26l0.69-2.17l-4.44,0.13L495.62,195.16L495.62,195.16z",
                    name: "Croatia"
                },
                ba: {
                    path: "M494.8,198.94l-0.37,0.61l6.71,6.92l2.46-3.62l-0.09-1.43l-2.15-2.61L494.8,198.94L494.8,198.94z",
                    name: "Bosnia and Herzegovina"
                },
                mt: {
                    path: "M492.61,230.47l-1.67,0.34l0.06,1.85l1.5,0.5l0.67-0.56L492.61,230.47L492.61,230.47z",
                    name: "Malta"
                },
                ua: {
                    path: "M515.57,173.15l-2.9,1.63l0.72,3.08l-2.68,5.65l0.02,2.49l1.26,0.8l8.08,0.4l2.26-1.87l2.42,0.81l3.47,4.63l-2.54,4.56l3.02,0.88l3.95-4.55l2.26,0.41l2.1,1.46l-1.85,2.44l2.5,3.9h2.66l1.37-2.6l2.82-0.57l0.08-2.11l-5.24-0.81l0.16-2.27h5.08l5.48-4.39l2.42-2.11l0.4-6.66l-10.8-0.97l-4.43-6.25l-3.06-1.05l-3.71,0.16l-1.67,4.13l-7.6,0.1l-2.47-1.14L515.57,173.15L515.57,173.15z",
                    name: "Ukraine"
                },
                md: {
                    path: "M520.75,187.71l3.1,4.77l-0.26,2.7l1.11,0.05l2.63-4.45l-3.16-3.92l-1.79-0.74L520.75,187.71L520.75,187.71z",
                    name: "Moldova"
                },
                ro: {
                    path: "M512.18,187.6l-0.26,1.48l-5.79,4.82l4.84,7.1l3.1,2.17h5.58l1.84-1.54l2.47-0.32l1.84,1.11l3.26-3.71l-0.63-1.86l-3.31-0.85l-2.26-0.11l0.11-3.18l-3-4.72L512.18,187.6L512.18,187.6z",
                    name: "Romania"
                },
                rs: {
                    path: "M505.55,194.54l-2.05,1.54h-1l-0.68,2.12l2.42,2.81l0.16,2.23l-3,4.24l0.42,1.27l1.74,0.32l1.37-1.86l0.74-0.05l1.26,1.22l3.84-1.17l-0.32-5.46L505.55,194.54L505.55,194.54z",
                    name: "Serbia"
                },
                bg: {
                    path: "M511.44,202.39l0.16,4.98l1.68,3.5l6.31,0.11l2.84-2.01l2.79-1.11l-0.68-3.18l0.63-1.7l-1.42-0.74l-1.95,0.16l-1.53,1.54l-6.42,0.05L511.44,202.39L511.44,202.39z",
                    name: "Bulgaria"
                },
                al: {
                    path: "M504.02,209.76v4.61l1.32,2.49l0.95-0.11l1.63-2.97l-0.95-1.33l-0.37-3.29l-1.26-1.17L504.02,209.76L504.02,209.76z",
                    name: "Albania"
                },
                mk: {
                    path: "M510.92,208.01l-3.37,1.11l0.16,2.86l0.79,1.01l4-1.86L510.92,208.01L510.92,208.01z",
                    name: "Macedonia"
                },
                gr: {
                    path: "M506.71,217.6l-0.11,1.33l4.63,2.33l2.21,0.85l-1.16,1.22l-2.58,0.26l-0.37,1.17l0.89,2.01l2.89,1.54l1.26,0.11l0.16-3.45l1.89-2.28l-5.16-6.1l0.68-2.07l1.21-0.05l1.84,1.48l1.16-0.58l0.37-2.07l5.42,0.05l0.21-3.18l-2.26,1.59l-6.63-0.16l-4.31,2.23L506.71,217.6L506.71,217.6M516.76,230.59l1.63,0.05l0.68,1.01h2.37l1.58-0.58l0.53,0.64l-1.05,1.38l-4.63,0.16l-0.84-1.11l-0.89-0.53L516.76,230.59L516.76,230.59z",
                    name: "Greece"
                }
            }
        })
    }).call(a, s(11))
}, function(t, a) {
    "use strict";
    ! function(t) {
        function a(t, a) {
            for (var s in a) a.hasOwnProperty(s) && (t[s] = a[s]);
            return t
        }

        function s(t, s) {
            this.button = t, this.options = a({}, this.options), a(this.options, s), this._init()
        }
        Modernizr.addTest("csstransformspreserve3d", function() {
            var a, s = Modernizr.prefixed("transformStyle"),
                e = "preserve-3d";
            return !!s && (s = s.replace(/([A-Z])/g, function(t, a) {
                return "-" + a.toLowerCase()
            }).replace(/^ms-/, "-ms-"), Modernizr.testStyles("#modernizr{" + s + ":" + e + ";}", function(e, l) {
                a = t.getComputedStyle ? getComputedStyle(e, null).getPropertyValue(s) : ""
            }), a === e)
        });
        var e = {
                transitions: Modernizr.csstransitions,
                transforms3d: Modernizr.csstransforms3d && Modernizr.csstransformspreserve3d
            },
            l = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                msTransition: "MSTransitionEnd",
                transition: "transitionend"
            },
            i = l[Modernizr.prefixed("transition")];
        s.prototype.options = {
            statusTime: 1500
        }, s.prototype._init = function() {
            this._validate(), this._create(), this._initEvents()
        }, s.prototype._validate = function() {
            null === this.button.getAttribute("data-style") && this.button.setAttribute("data-style", "fill"), null === this.button.getAttribute("data-vertical") && null === this.button.getAttribute("data-horizontal") && this.button.setAttribute("data-horizontal", ""), e.transforms3d || null === this.button.getAttribute("data-perspective") || (this.button.removeAttribute("data-perspective"), this.button.setAttribute("data-style", "fill"), this.button.removeAttribute("data-vertical"), this.button.setAttribute("data-horizontal", ""))
        }, s.prototype._create = function() {
            var t = document.createElement("span");
            t.className = "content", t.innerHTML = this.button.innerHTML;
            var a = document.createElement("span");
            a.className = "progress";
            var s = document.createElement("span");
            if (s.className = "progress-inner", a.appendChild(s), this.button.innerHTML = "", null !== this.button.getAttribute("data-perspective")) {
                var e = document.createElement("span");
                e.className = "progress-wrap", e.appendChild(t), e.appendChild(a), this.button.appendChild(e)
            } else this.button.appendChild(t), this.button.appendChild(a);
            this.progress = s, null !== this.button.getAttribute("data-horizontal") ? this.progressProp = "width" : null !== this.button.getAttribute("data-vertical") && (this.progressProp = "height"), this._enable()
        }, s.prototype._setProgress = function(t) {
            this.progress.style[this.progressProp] = 100 * t + "%"
        }, s.prototype._initEvents = function() {
            var t = this;
            this.button.addEventListener("click", function() {
                t.button.setAttribute("disabled", ""), classie.remove(t.progress, "notransition"), classie.add(this, "state-loading"), setTimeout(function() {
                    if ("function" == typeof t.options.callback) t.options.callback(t);
                    else {
                        t._setProgress(1);
                        var a = function a(s) {
                            e.transitions && s.propertyName !== t.progressProp || (this.removeEventListener(i, a), t._stop())
                        };
                        e.transitions ? t.progress.addEventListener(i, a) : a.call()
                    }
                }, "fill" === t.button.getAttribute("data-style") || "top-line" === t.button.getAttribute("data-style") || "lateral-lines" === t.button.getAttribute("data-style") ? 0 : 200)
            })
        }, s.prototype._stop = function(t) {
            var a = this;
            setTimeout(function() {
                a.progress.style.opacity = 0;
                var s = function t(s) {
                    e.transitions && "opacity" !== s.propertyName || (this.removeEventListener(i, t), classie.add(a.progress, "notransition"), a.progress.style[a.progressProp] = "0%", a.progress.style.opacity = 1)
                };
                if (e.transitions ? a.progress.addEventListener(i, s) : s.call(), "number" == typeof t) {
                    var l = t >= 0 ? "state-success" : "state-error";
                    classie.add(a.button, l), setTimeout(function() {
                        classie.remove(a.button, l), a._enable()
                    }, a.options.statusTime)
                } else a._enable();
                classie.remove(a.button, "state-loading")
            }, 100)
        }, s.prototype._enable = function() {
            this.button.removeAttribute("disabled")
        }, t.ProgressButton = s
    }(window)
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(5),
        i = e(l),
        n = s(9),
        r = e(n),
        o = s(8);
    a.default = i.default.extend({
        render: function(t) {
            return t("div", [t("canvas", {
                attrs: {
                    id: this.chartId,
                    width: this.width,
                    height: this.height
                },
                ref: "canvas"
            })])
        },
        props: {
            chartId: {
                default: "bubble-chart",
                type: String
            },
            width: {
                default: 400,
                type: Number
            },
            height: {
                default: 400,
                type: Number
            }
        },
        data: function() {
            return {
                defaultOptions: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: !0
                            },
                            gridLines: {
                                display: !1
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: !1
                            },
                            categoryPercentage: .5,
                            barPercentage: .2
                        }]
                    }
                }
            }
        },
        methods: {
            renderChart: function(t, a) {
                var s = (0, o.mergeOptions)(this.defaultOptions, a);
                this._chart = new r.default(this.$refs.canvas.getContext("2d"), {
                    type: "bubble",
                    data: t,
                    options: s
                }), this._chart.generateLegend()
            }
        },
        beforeDestroy: function() {
            this._chart.destroy()
        }
    })
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(5),
        i = e(l),
        n = s(9),
        r = e(n),
        o = s(8);
    a.default = i.default.extend({
        render: function(t) {
            return t("div", [t("canvas", {
                attrs: {
                    id: this.chartId,
                    width: this.width,
                    height: this.height
                },
                ref: "canvas"
            })])
        },
        props: {
            chartId: {
                default: "doughnut-chart",
                type: String
            },
            width: {
                default: 400,
                type: Number
            },
            height: {
                default: 400,
                type: Number
            }
        },
        data: function() {
            return {
                defaultOptions: {}
            }
        },
        methods: {
            renderChart: function(t, a) {
                var s = (0, o.mergeOptions)(this.defaultOptions, a);
                this._chart = new r.default(this.$refs.canvas.getContext("2d"), {
                    type: "doughnut",
                    data: t,
                    options: s
                }), this._chart.generateLegend()
            }
        },
        beforeDestroy: function() {
            this._chart.destroy()
        }
    })
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(5),
        i = e(l),
        n = s(9),
        r = e(n),
        o = s(8);
    a.default = i.default.extend({
        render: function(t) {
            return t("div", [t("canvas", {
                attrs: {
                    id: this.chartId,
                    width: this.width,
                    height: this.height
                },
                ref: "canvas"
            })])
        },
        props: {
            chartId: {
                default: "line-chart",
                type: String
            },
            width: {
                default: 400,
                type: Number
            },
            height: {
                default: 400,
                type: Number
            }
        },
        data: function() {
            return {
                defaultOptions: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: !0
                            },
                            gridLines: {
                                display: !1
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: !1
                            }
                        }]
                    }
                }
            }
        },
        methods: {
            renderChart: function(t, a) {
                var s = (0, o.mergeOptions)(this.defaultOptions, a);
                this._chart = new r.default(this.$refs.canvas.getContext("2d"), {
                    type: "line",
                    data: t,
                    options: s
                }), this._chart.generateLegend()
            }
        },
        beforeDestroy: function() {
            this._chart.destroy()
        }
    })
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(5),
        i = e(l),
        n = s(9),
        r = e(n),
        o = s(8);
    a.default = i.default.extend({
        render: function(t) {
            return t("div", [t("canvas", {
                attrs: {
                    id: this.chartId,
                    width: this.width,
                    height: this.height
                },
                ref: "canvas"
            })])
        },
        props: {
            chartId: {
                default: "pie-chart",
                type: String
            },
            width: {
                default: 400,
                type: Number
            },
            height: {
                default: 400,
                type: Number
            }
        },
        data: function() {
            return {
                defaultOptions: {}
            }
        },
        methods: {
            renderChart: function(t, a) {
                var s = (0, o.mergeOptions)(this.defaultOptions, a);
                this._chart = new r.default(this.$refs.canvas.getContext("2d"), {
                    type: "pie",
                    data: t,
                    options: s
                }), this._chart.generateLegend()
            }
        },
        beforeDestroy: function() {
            this._chart.destroy()
        }
    })
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(5),
        i = e(l),
        n = s(9),
        r = e(n),
        o = s(8);
    a.default = i.default.extend({
        render: function(t) {
            return t("div", [t("canvas", {
                attrs: {
                    id: this.chartId,
                    width: this.width,
                    height: this.height
                },
                ref: "canvas"
            })])
        },
        props: {
            chartId: {
                default: "polar-chart",
                type: String
            },
            width: {
                default: 400,
                type: Number
            },
            height: {
                default: 400,
                type: Number
            }
        },
        data: function() {
            return {
                defaultOptions: {}
            }
        },
        methods: {
            renderChart: function(t, a) {
                var s = (0, o.mergeOptions)(this.defaultOptions, a);
                this._chart = new r.default(this.$refs.canvas.getContext("2d"), {
                    type: "polarArea",
                    data: t,
                    options: s
                }), this._chart.generateLegend()
            }
        },
        beforeDestroy: function() {
            this._chart.destroy()
        }
    })
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(5),
        i = e(l),
        n = s(9),
        r = e(n),
        o = s(8);
    a.default = i.default.extend({
        render: function(t) {
            return t("div", [t("canvas", {
                attrs: {
                    id: this.chartId,
                    width: this.width,
                    height: this.height
                },
                ref: "canvas"
            })])
        },
        props: {
            chartId: {
                default: "radar-chart",
                type: String
            },
            width: {
                default: 400,
                type: Number
            },
            height: {
                default: 400,
                type: Number
            }
        },
        data: function() {
            return {
                defaultOptions: {}
            }
        },
        methods: {
            renderChart: function(t, a) {
                var s = (0, o.mergeOptions)(this.defaultOptions, a);
                this._chart = new r.default(this.$refs.canvas.getContext("2d"), {
                    type: "radar",
                    data: t,
                    options: s
                }), this._chart.generateLegend()
            }
        },
        beforeDestroy: function() {
            this._chart.destroy()
        }
    })
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(36),
        i = e(l);
    a.default = i.default.extend({
        mounted: function() {
            this.renderChart({
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                datasets: [{
                    label: "Data One",
                    backgroundColor: "#f87979",
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                }]
            }, {
                responsive: !0,
                maintainAspectRatio: !1
            })
        }
    })
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(231),
        i = e(l);
    a.default = i.default.extend({
        mounted: function() {
            this.renderChart({
                datasets: [{
                    label: "Data One",
                    backgroundColor: "#f87979",
                    data: [{
                        x: 20,
                        y: 25,
                        r: 5
                    }, {
                        x: 40,
                        y: 10,
                        r: 10
                    }, {
                        x: 30,
                        y: 22,
                        r: 30
                    }]
                }, {
                    label: "Data Two",
                    backgroundColor: "#7C8CF8",
                    data: [{
                        x: 10,
                        y: 30,
                        r: 15
                    }, {
                        x: 20,
                        y: 20,
                        r: 10
                    }, {
                        x: 15,
                        y: 8,
                        r: 30
                    }]
                }]
            }, {
                responsive: !0,
                maintainAspectRatio: !1
            })
        }
    })
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(232),
        i = e(l);
    a.default = i.default.extend({
        mounted: function() {
            this.renderChart({
                labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
                datasets: [{
                    backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
                    data: [40, 20, 80, 10]
                }]
            }, {
                responsive: !0,
                maintainAspectRatio: !1
            })
        }
    })
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(234),
        i = e(l);
    a.default = i.default.extend({
        mounted: function() {
            this.renderChart({
                labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
                datasets: [{
                    backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
                    data: [40, 20, 80, 10]
                }]
            }, {
                responsive: !0,
                maintainAspectRatio: !1
            })
        }
    })
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(235),
        i = e(l);
    a.default = i.default.extend({
        mounted: function() {
            this.renderChart({
                labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                datasets: [{
                    label: "My First dataset",
                    backgroundColor: "rgba(179,181,198,0.2)",
                    pointBackgroundColor: "rgba(179,181,198,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(179,181,198,1)",
                    data: [65, 59, 90, 81, 56, 55, 40]
                }, {
                    label: "My Second dataset",
                    backgroundColor: "rgba(255,99,132,0.2)",
                    pointBackgroundColor: "rgba(255,99,132,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(255,99,132,1)",
                    data: [28, 48, 40, 19, 96, 27, 100]
                }]
            }, {
                responsive: !0,
                maintainAspectRatio: !1
            })
        }
    })
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(236),
        i = e(l);
    a.default = i.default.extend({
        mounted: function() {
            this.renderChart({
                labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                datasets: [{
                    label: "My First dataset",
                    backgroundColor: "rgba(179,181,198,0.2)",
                    borderColor: "rgba(179,181,198,1)",
                    pointBackgroundColor: "rgba(179,181,198,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(179,181,198,1)",
                    data: [65, 59, 90, 81, 56, 55, 40]
                }, {
                    label: "My Second dataset",
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    pointBackgroundColor: "rgba(255,99,132,1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(255,99,132,1)",
                    data: [28, 48, 40, 19, 96, 27, 100]
                }]
            }, {
                responsive: !0,
                maintainAspectRatio: !1
            })
        }
    })
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(36),
        i = e(l),
        n = s(245),
        r = e(n);
    a.default = i.default.extend({
        mixins: [r.default],
        data: function() {
            return {
                chartData: ""
            }
        },
        created: function() {
            this.fillData()
        },
        mounted: function() {
            var t = this;
            this.renderChart(this.chartData, {
                responsive: !0,
                maintainAspectRatio: !1
            }), setInterval(function() {
                t.fillData()
            }, 5e3)
        },
        methods: {
            fillData: function() {
                this.chartData = {
                    labels: ["January" + this.getRandomInt(), "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    datasets: [{
                        label: "Data One",
                        backgroundColor: "#f87979",
                        data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                    }]
                }
            },
            getRandomInt: function() {
                return Math.floor(46 * Math.random()) + 5
            }
        }
    })
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(36),
        i = e(l),
        n = s(246),
        r = e(n);
    a.default = i.default.extend({
        mixins: [r.default],
        mounted: function() {
            this.renderChart(this.chartData)
        }
    })
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var l = s(37),
        i = e(l);
    t.exports = {
        data: function() {
            return {
                chartData: null
            }
        },
        watch: {
            chartData: {
                handler: function(t, a) {
                    if (a) {
                        var s = this._chart,
                            e = t.datasets.map(function(t) {
                                return t.label
                            }),
                            l = a.datasets.map(function(t) {
                                return t.label
                            });
                        (0, i.default)(e) === (0, i.default)(l) ? this.forceUpdate(t, s): this.forceRender()
                    }
                }
            }
        },
        methods: {
            forceUpdate: function(t, a) {
                t.datasets.forEach(function(t, s) {
                    a.data.datasets[s].data = t.data
                }), a.data.labels = t.labels, a.update()
            },
            forceRender: function() {
                this.renderChart(this.chartData, this.options)
            }
        }
    }
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var l = s(37),
        i = e(l);
    t.exports = {
        props: {
            chartData: {
                required: !0
            }
        },
        watch: {
            chartData: {
                handler: function(t, a) {
                    var s = this;
                    a && ! function() {
                        var e = s._chart,
                            l = t.datasets.map(function(t) {
                                return t.label
                            }),
                            n = a.datasets.map(function(t) {
                                return t.label
                            });
                        (0, i.default)(l) === (0, i.default)(n) ? (t.datasets.forEach(function(t, a) {
                            e.data.datasets[a].data = t.data
                        }), e.data.labels = t.labels, e.update()) : s.renderChart(s.chartData, s.options)
                    }()
                }
            }
        }
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        en: {
            weekNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            titleFormat: "MM/yyyy"
        },
        zh: {
            weekNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "11月", "12月"],
            titleFormat: "yyyy年MM月"
        }
    }
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(561),
        i = e(l),
        n = s(549),
        r = e(n),
        o = s(555),
        c = e(o),
        d = s(573),
        p = e(d),
        v = s(575),
        f = e(v),
        u = s(545),
        h = e(u),
        _ = s(548),
        m = e(_),
        g = s(547),
        C = e(g),
        b = s(546),
        y = e(b),
        w = s(550),
        L = e(w),
        x = s(553),
        M = e(x),
        k = s(551),
        S = e(k),
        z = s(552),
        j = e(z),
        D = s(554),
        E = e(D),
        A = s(556),
        R = e(A),
        P = s(559),
        $ = e(P),
        F = s(557),
        I = e(F),
        T = s(558),
        B = e(T),
        O = s(560),
        q = e(O),
        N = s(574),
        H = e(N),
        U = s(562),
        J = e(U),
        V = s(563),
        Y = e(V),
        G = s(572),
        W = e(G),
        K = s(564),
        X = e(K),
        Z = s(565),
        Q = e(Z),
        tt = s(566),
        at = e(tt),
        st = s(567),
        et = e(st),
        lt = s(568),
        it = e(lt),
        nt = s(569),
        rt = e(nt),
        ot = s(570),
        ct = e(ot),
        dt = s(571),
        pt = e(dt),
        vt = [{
            path: "/",
            name: "login",
            component: p.default
        }, {
            path: "/signup",
            name: "signup",
            component: f.default
        }, {
            path: "/dashboard/",
            name: "dashboard",
            component: r.default,
            children: [{
                path: "home",
                component: c.default
            }, {
                path: "typography",
                name: "typography",
                component: Y.default
            }, {
                path: "calendar",
                name: "calendar",
                component: h.default
            }, {
                path: "docs",
                name: "docs",
                component: L.default
            }, {
                path: "grid",
                name: "grid",
                component: E.default
            }, {
                path: "table",
                name: "table",
                component: J.default
            }, {
                path: "invoice",
                name: "invoice",
                component: R.default
            }, {
                path: "profile",
                name: "profile",
                component: i.default
            }, {
                path: "charts",
                name: "charts",
                component: m.default,
                children: [{
                    path: "chart",
                    component: C.default
                }, {
                    path: "c3chart",
                    component: y.default
                }]
            }, {
                path: "form",
                name: "form",
                component: M.default,
                children: [{
                    path: "components",
                    component: S.default
                }, {
                    path: "elements",
                    component: j.default
                }]
            }, {
                path: "mail",
                name: "mail",
                component: $.default,
                children: [{
                    path: "compose",
                    component: I.default
                }, {
                    path: "inbox",
                    component: B.default
                }]
            }, {
                path: "pages",
                name: "pages",
                component: q.default,
                children: [{
                    path: "blank",
                    component: q.default
                }]
            }, {
                path: "ui-interface",
                name: "ui-interface",
                component: W.default,
                children: [{
                    path: "alerts",
                    component: X.default
                }, {
                    path: "buttons",
                    component: Q.default
                }, {
                    path: "dropdown",
                    component: at.default
                }, {
                    path: "icons",
                    component: et.default
                }, {
                    path: "other-elements",
                    component: it.default
                }, {
                    path: "pagination",
                    component: rt.default
                }, {
                    path: "panels",
                    component: ct.default
                }, {
                    path: "progress-bar",
                    component: pt.default
                }]
            }]
        }, {
            path: "*",
            name: "notfound",
            component: H.default
        }];
    a.default = vt
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var s = "undefined" != typeof window;
    a.default = {
        name: "VueProgress",
        serverCacheKey: function() {
            return "Progress"
        },
        computed: {
            style: function t() {
                var a = this.progress.options.location,
                    t = {
                        "background-color": this.progress.options.canSuccess ? this.progress.options.color : this.progress.options.failedColor,
                        opacity: this.progress.options.show ? 1 : 0
                    };
                return "top" == a || "bottom" == a ? ("top" === a ? t.top = "0px" : t.bottom = "0px", this.progress.options.inverse ? t.right = "0px" : t.left = "0px", t.width = this.progress.percent + "%", t.height = this.progress.options.thickness, t.transition = "width " + this.progress.options.transition.speed + ", opacity " + this.progress.options.transition.opacity) : "left" != a && "right" != a || ("left" === a ? t.left = "0px" : t.right = "0px", this.progress.options.inverse ? t.top = "0px" : t.bottom = "0px", t.height = this.progress.percent + "%", t.width = this.progress.options.thickness, t.transition = "height " + this.progress.options.transition.speed + ", opacity " + this.progress.options.transition.opacity), t
            },
            progress: function() {
                return s ? window.VueProgressBarEventBus.RADON_LOADING_BAR : {
                    percent: 0,
                    options: {
                        canSuccess: !0,
                        show: !1,
                        color: "rgb(19, 91, 55)",
                        failedColor: "red",
                        thickness: "2px",
                        transition: {
                            speed: "0.2s",
                            opacity: "0.6s"
                        },
                        location: "top",
                        autoRevert: !0,
                        inverse: !1
                    }
                }
            }
        }
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "app",
        components: {},
        mounted: function() {
            this.$Progress.finish()
        },
        created: function() {
            var t = this;
            this.$Progress.start(), this.$router.beforeEach(function(a, s, e) {
                if (void 0 !== a.meta.progress) {
                    var l = a.meta.progress;
                    t.$Progress.parseMeta(l)
                }
                t.$Progress.start(), e()
            }), this.$router.afterEach(function(a, s) {
                t.$Progress.finish()
            })
        }
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "Stats",
        props: ["title", "progress", "info", "color", "icon"]
    }
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(61),
        i = e(l);
    a.default = {
        props: {
            currentDate: {},
            events: {},
            weekNames: {
                type: Array,
                default: []
            },
            monthNames: {},
            firstDay: {}
        },
        created: function() {
            this.events.forEach(function(t, a) {
                t._id = t.id || a, t.end = t.end || t.start
            })
        },
        data: function() {
            return {
                weekMask: [1, 2, 3, 4, 5, 6, 7],
                isLismit: !0,
                eventLimit: 3,
                showMore: !1,
                morePos: {
                    top: 0,
                    left: 0
                },
                selectDay: {}
            }
        },
        watch: {
            weekNames: function(t) {}
        },
        computed: {
            currentDates: function() {
                return this.getCalendar()
            }
        },
        methods: {
            isBegin: function(t, a, s) {
                var e = new Date(t.start);
                return 0 == s || e.toDateString() == a.toDateString() ? t.title : "　"
            },
            moreTitle: function(t) {
                var a = new Date(t);
                return this.weekNames[a.getDay()] + ", " + this.monthNames[a.getMonth()] + a.getDate()
            },
            classNames: function(t) {
                return t ? "string" == typeof t ? t : Array.isArray(t) ? t.join(" ") : "" : ""
            },
            getCalendar: function() {
                var t = new Date,
                    a = new Date(this.currentDate),
                    s = i.default.getStartDate(a),
                    e = s.getDay(),
                    l = parseInt(this.firstDay) - e;
                l = l > 0 ? l - 7 : l, s.setDate(s.getDate() + l);
                for (var n = [], r = 0; r < 6; r++) {
                    for (var o = [], c = 0; c < 7; c++) o.push({
                        monthDay: s.getDate(),
                        isToday: t.toDateString() == s.toDateString(),
                        isCurMonth: s.getMonth() == a.getMonth(),
                        weekDay: c,
                        date: new Date(s),
                        events: this.slotEvents(s)
                    }), s.setDate(s.getDate() + 1);
                    n.push(o)
                }
                return n
            },
            slotEvents: function(t) {
                var a = this.events.filter(function(a) {
                    var s = new Date(a.start),
                        e = new Date(s.getFullYear(), s.getMonth(), s.getDate()),
                        l = a.end ? new Date(a.end) : e;
                    return t >= e && t <= l
                });
                a.sort(function(t, a) {
                    return t.cellIndex ? a.cellIndex ? t.cellIndex - a.cellIndex : -1 : 1
                });
                for (var s = 0; s < a.length; s++) a[s].cellIndex = a[s].cellIndex || s + 1, a[s].isShow = !0, a[s].cellIndex == s + 1 || s > 2 || a.splice(s, 0, {
                    title: "holder",
                    cellIndex: s + 1,
                    start: i.default.format(t, "yyyy-MM-dd"),
                    end: i.default.format(t, "yyyy-MM-dd"),
                    isShow: !1
                });
                return a
            },
            isStart: function(t, a) {
                var s = new Date(t);
                return s.toDateString() == a.toDateString()
            },
            isEnd: function(t, a) {
                var s = new Date(t);
                return s.toDateString() == a.toDateString()
            },
            selectThisDay: function(t, a) {
                this.selectDay = t, this.showMore = !0, this.morePos = this.computePos(event.target), this.morePos.top -= 100;
                var s = t.events.filter(function(t) {
                    return 1 == t.isShow
                });
                this.$emit("moreclick", t.date, s, a)
            },
            computePos: function(t) {
                var a = t.getBoundingClientRect(),
                    s = this.$refs.dates.getBoundingClientRect();
                return {
                    left: a.left - s.left,
                    top: a.top + a.height - s.top
                }
            },
            dayClick: function(t, a) {
                this.$emit("dayclick", t, a)
            },
            eventClick: function(t, a) {
                if (t.isShow) {
                    a.stopPropagation();
                    var s = this.computePos(a.target);
                    this.$emit("eventclick", t, a, s)
                }
            }
        }
    }
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(61),
        i = e(l);
    a.default = {
        created: function() {
            this.dispatchEvent()
        },
        props: {
            currentDate: {},
            titleFormat: {},
            firstDay: {}
        },
        data: function() {
            return {
                title: "",
                leftArrow: "<<",
                rightArrow: ">>",
                headDate: new Date
            }
        },
        watch: {
            currentDate: function(t) {
                t && (this.headDate = t)
            }
        },
        methods: {
            goPrev: function() {
                this.headDate = this.changeMonth(this.headDate, -1), this.dispatchEvent()
            },
            goNext: function() {
                this.headDate = this.changeMonth(this.headDate, 1), this.dispatchEvent()
            },
            changeMonth: function(t, a) {
                var s = new Date(t);
                return new Date(s.setMonth(s.getMonth() + a))
            },
            dispatchEvent: function() {
                this.title = i.default.format(this.headDate, this.titleFormat);
                var t = i.default.getStartDate(this.headDate),
                    a = t.getDay(),
                    s = parseInt(this.firstDay) - a;
                s && (s -= 7), t.setDate(t.getDate() + s);
                var e = i.default.changeDay(t, 41),
                    l = i.default.getStartDate(this.headDate);
                this.$emit("change", i.default.format(t, "yyyy-MM-dd"), i.default.format(e, "yyyy-MM-dd"), i.default.format(l, "yyyy-MM-dd"), this.headDate)
            }
        }
    }
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(247),
        i = e(l);
    a.default = {
        props: {
            events: {
                type: Array,
                default: []
            },
            lang: {
                type: String,
                default: "zh"
            },
            firstDay: {
                type: Number | String,
                validator: function(t) {
                    var a = parseInt(t);
                    return a >= 0 && a <= 6
                },
                default: 0
            },
            titleFormat: {
                type: String,
                default: function() {
                    return i.default[this.lang].titleFormat
                }
            },
            monthNames: {
                type: Array,
                default: function() {
                    return i.default[this.lang].monthNames
                }
            },
            weekNames: {
                type: Array,
                default: function() {
                    var t = i.default[this.lang].weekNames;
                    return t.slice(this.firstDay).concat(t.slice(0, this.firstDay))
                }
            }
        },
        data: function() {
            return {
                currentDate: new Date
            }
        },
        methods: {
            emitChangeMonth: function(t, a, s, e) {
                this.currentDate = e, this.$emit("changeMonth", t, a, s)
            },
            emitEventClick: function(t, a, s) {
                this.$emit("eventClick", t, a, s)
            },
            emitDayClick: function(t, a) {
                this.$emit("dayClick", t, a)
            },
            emitMoreClick: function(t, a, s) {
                this.$emit("moreClick", t, event, s)
            }
        },
        components: {
            "fc-body": s(543),
            "fc-header": s(544)
        }
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "charts",
        components: {}
    }
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(224),
        i = e(l),
        n = s(225),
        r = e(n);
    a.default = {
        name: "dashboard",
        components: {
            Navbar: i.default,
            Sidebar: r.default
        }
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "charts",
        components: {}
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "mail",
        components: {}
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "ui-interface",
        components: {}
    }
}, function(t, a) {
    "use strict"
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(289),
        i = e(l),
        n = s(5),
        r = e(n),
        o = s(223),
        c = e(o),
        d = s(405),
        p = e(d),
        v = s(404),
        f = e(v),
        u = s(407),
        h = e(u),
        _ = s(406),
        m = e(_);
    r.default.use(c.default), r.default.config.lang = "en";
    var g = {
        en: {
            message: p.default
        },
        hn: {
            message: m.default
        },
        de: {
            message: f.default
        },
        ur: {
            message: h.default
        }
    };
    (0, i.default)(g).forEach(function(t) {
        r.default.locale(t, g[t])
    }), a.default = {
        name: "navbar",
        data: function() {
            return {
                show: !0
            }
        },
        components: {
            "full-calendar": s(539)
        },
        methods: {
            changeLanguage: function(t) {
                console.log("Lang: ", t), r.default.config.lang = t
            }
        }
    }
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(226),
        i = e(l),
        n = [{
            title: "Sunny 725-727",
            start: "2016-07-25",
            end: "2016-07-27",
            cssClass: "family"
        }, {
            title: "Sunny 726-727",
            start: "2016-07-26",
            end: "2016-07-27",
            cssClass: ["home", "work"]
        }, {
            title: "Sunny 727-728",
            start: "2016-07-27",
            end: "2016-07-28"
        }, {
            title: "Sunny 728-730",
            start: "2016-07-28",
            end: "2016-07-30"
        }];
    a.default = {
        data: function() {
            return {
                name: "Sunny!",
                fcEvents: n,
                show: !0
            }
        },
        methods: {
            changeMonth: function(t, a, s) {},
            eventClick: function(t, a, s) {},
            dayClick: function(t, a) {},
            moreClick: function(t, a, s) {}
        },
        name: "sidebar",
        components: {
            VC: i.default
        }
    }
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(5),
        i = e(l),
        n = s(617),
        r = e(n);
    a.default = {
        name: "Todo",
        components: {
            VuePerfectScrollbar: r.default
        },
        data: function() {
            return {
                settings: {
                    maxScrollbarLength: 60
                },
                todos: [{
                    title: "Meeting with Nabindar Singh.",
                    completed: !1
                }, {
                    title: "Exercise at 6 PM with Nicholas.",
                    completed: !1
                }, {
                    title: "Avengers Age of Ultron.",
                    completed: !1
                }, {
                    title: "Henna Birthday at Mezbaan.",
                    completed: !1
                }],
                newTodo: "",
                filter: "all",
                editing: null
            }
        },
        filters: {
            pluralize: function(t) {
                return 1 === t ? "item" : "items"
            }
        },
        directives: {
            todoFocus: function(t, a) {
                a && i.default.nextTick(function(a) {
                    t.focus()
                })
            }
        },
        methods: {
            scrollHanle: function(t) {},
            addTodo: function() {
                this.todos.push({
                    completed: !1,
                    title: this.newTodo
                }), this.newTodo = ""
            },
            deleteTodo: function(t) {
                this.todos = this.todos.filter(function(a) {
                    return a !== t
                })
            },
            deleteCompleted: function() {
                this.todos = this.todos.filter(function(t) {
                    return !t.completed
                })
            },
            editTodo: function(t) {
                this.editing = t
            },
            doneEdit: function() {
                this.editing = null
            }
        },
        computed: {
            remaining: function() {
                return this.todos.filter(function(t) {
                    return !t.completed
                }).length
            },
            completed: function() {
                return this.todos.filter(function(t) {
                    return t.completed
                }).length
            },
            filteredTodos: function() {
                return "active" === this.filter ? this.todos.filter(function(t) {
                    return !t.completed
                }) : "completed" === this.filter ? this.todos.filter(function(t) {
                    return t.completed
                }) : this.todos
            }
        }
    }
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(226),
        i = e(l),
        n = [{
            title: "Sunny 725-727",
            start: "2016-07-25",
            end: "2016-07-27",
            cssClass: "family"
        }, {
            title: "Sunny 726-727",
            start: "2016-07-26",
            end: "2016-07-27",
            cssClass: ["home", "work"]
        }, {
            title: "Sunny 727-728",
            start: "2016-07-27",
            end: "2016-07-28"
        }, {
            title: "Sunny 728-730",
            start: "2016-07-28",
            end: "2016-07-30"
        }];
    a.default = {
        data: function() {
            return {
                name: "Sunny!",
                fcEvents: n
            }
        },
        methods: {
            changeMonth: function(t, a, s) {},
            eventClick: function(t, a, s) {},
            dayClick: function(t, a) {},
            moreClick: function(t, a, s) {}
        },
        name: "calendar",
        components: {
            VC: i.default
        }
    }
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(62),
        i = e(l);
    a.default = {
        name: "c3chart",
        components: {},
        mounted: function() {
            i.default.generate({
                bindto: "#c3line",
                size: {
                    height: 280,
                    width: 560
                },
                data: {
                    columns: [
                        ["New User", 40, 60, 100, 230, 150, 250, 20, 80, 10],
                        ["Returning User", 65, 35, 10, 200, 15, 25, 175, 65, 120],
                        ["Referral User", 87, 62, 20, 80, 45, 15, 100, 20, 250]
                    ]
                },
                axis: {
                    x: {
                        show: !0
                    },
                    y: {
                        show: !0
                    }
                }
            }), i.default.generate({
                bindto: "#c3pie",
                size: {
                    height: 280,
                    width: 560
                },
                padding: {
                    top: 4,
                    right: 4,
                    bottom: 4,
                    left: 4
                },
                pie: {
                    label: {
                        show: !0
                    }
                },
                data: {
                    columns: [
                        ["New", 66],
                        ["Refral", 23],
                        ["Returning", 11]
                    ],
                    type: "pie",
                    onclick: function(t, a) {
                        console.log("onclick", t, a)
                    },
                    onmouseover: function(t, a) {
                        console.log("onmouseover", t, a)
                    },
                    onmouseout: function(t, a) {
                        console.log("onmouseout", t, a)
                    }
                }
            }), i.default.generate({
                bindto: "#c3donut",
                size: {
                    height: 280,
                    width: 560
                },
                padding: {
                    top: 4,
                    right: 4,
                    bottom: 4,
                    left: 4
                },
                data: {
                    columns: [
                        ["New", 66],
                        ["Refral", 23],
                        ["Returning", 11]
                    ],
                    type: "donut",
                    onclick: function(t, a) {
                        console.log("onclick", t, a)
                    },
                    onmouseover: function(t, a) {
                        console.log("onmouseover", t, a)
                    },
                    onmouseout: function(t, a) {
                        console.log("onmouseout", t, a)
                    }
                },
                donut: {
                    title: "Donut Chart"
                }
            }), i.default.generate({
                bindto: "#c3area",
                size: {
                    height: 280,
                    width: 560
                },
                data: {
                    columns: [
                        ["data1", 300, 350, 300, 0, 0, 0],
                        ["data2", 130, 100, 140, 200, 150, 50]
                    ],
                    types: {
                        data1: "area",
                        data2: "area-spline"
                    }
                }
            })
        }
    }
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(237),
        i = e(l),
        n = s(60),
        r = e(n),
        o = s(239),
        c = e(o),
        d = s(240),
        p = e(d),
        v = s(242),
        f = e(v),
        u = s(241),
        h = e(u),
        _ = s(238),
        m = e(_),
        g = s(243),
        C = e(g),
        b = s(244),
        y = e(b);
    a.default = {
        name: "chart",
        components: {
            BarExample: i.default,
            LineExample: r.default,
            DoughnutExample: c.default,
            PieExample: p.default,
            RadarExample: f.default,
            PolarAreaExample: h.default,
            BubbleExample: m.default,
            ReactiveExample: C.default,
            ReactivePropExample: y.default
        },
        data: function() {
            return {
                barChart: {
                    data: [4, 8, 15, 16, 23, 42],
                    width: 420,
                    barHeight: 20
                }
            }
        }
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "docs",
        components: {}
    }
}, function(t, a, s) {
    "use strict";

    function e(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var l = s(622),
        i = e(l);
    a.default = {
        name: "components",
        components: {
            Datepicker: i.default
        }
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "elements",
        components: {}
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "grid",
        components: {}
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "invoice",
        components: {}
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "compose",
        data: function() {
            return {
                content: ""
            }
        },
        components: {}
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "inbox",
        components: {}
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "blank",
        components: {}
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "profile",
        components: {}
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "table",
        components: {}
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "typography",
        components: {}
    }
}, function(t, a, s) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var e = s(227);
    a.default = {
        name: "alerts",
        components: {
            alert: e.alert
        },
        data: function() {
            return {
                alertShow1: !1,
                alertShow2: !1,
                alertShow3: !1,
                alertShow4: !1,
                alertShow5: !1
            }
        },
        methods: {
            showMe1: function() {
                this.alertShow1 = !0, this.alertShow2 = !1, this.alertShow3 = !1, this.alertShow4 = !1, this.alertShow5 = !1
            },
            showMe2: function() {
                this.alertShow2 = !0, this.alertShow1 = !1, this.alertShow3 = !1, this.alertShow4 = !1, this.alertShow5 = !1
            },
            showMe3: function() {
                this.alertShow3 = !0, this.alertShow1 = !1, this.alertShow2 = !1, this.alertShow4 = !1, this.alertShow5 = !1
            },
            showMe4: function() {
                this.alertShow4 = !0, this.alertShow1 = !1, this.alertShow2 = !1, this.alertShow3 = !1, this.alertShow5 = !1
            },
            showMe5: function() {
                this.alertShow5 = !0, this.alertShow1 = !1, this.alertShow2 = !1, this.alertShow3 = !1, this.alertShow4 = !1
            }
        }
    }
}, function(t, a, s) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), s(230), a.default = {
        name: "button",
        components: {},
        mounted: function() {
            [].slice.call(window.document.querySelectorAll("button.progress-button")).forEach(function(t) {
                new ProgressButton(t, {
                    callback: function(t) {
                        var a = 0,
                            s = setInterval(function() {
                                a = Math.min(a + .1 * Math.random(), 1), t._setProgress(a), 1 === a && (t._stop(1), clearInterval(s))
                            }, 200)
                    }
                })
            })
        }
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "dropdown",
        components: {}
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "icons",
        components: {}
    }
}, function(t, a, s) {
    (function(t) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var e = s(227);
        a.default = {
            name: "other-elements",
            components: {
                popover: e.popover
            },
            data: function() {
                return {
                    placements: ["top", "left", "right", "bottom"],
                    text: "Lorem ipsum dolor sit amet",
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod"
                }
            },
            mounted: function() {
                t(document).ready(function() {
                    t("body").tooltip({
                        selector: "[data-toggle='tooltip']"
                    }).popover({
                        selector: "[data-toggle='popover']"
                    })
                })
            }
        }
    }).call(a, s(11))
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "pagination",
        components: {}
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "panels",
        components: {}
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "progress-bar",
        components: {}
    }
}, function(t, a, s) {
    (function(t) {
        "use strict";

        function e(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var l = s(224),
            i = e(l),
            n = s(225),
            r = e(n),
            o = s(60),
            c = e(o),
            d = s(542),
            p = e(d),
            v = s(541),
            f = e(v),
            u = s(62),
            h = e(u);
        s(228), s(229), a.default = {
            name: "dashboard",
            data: function() {
                return {
                    progress: 0,
                    error: !1,
                    direction: "right"
                }
            },
            components: {
                Navbar: i.default,
                Sidebar: r.default,
                LineExample: c.default,
                Todos: p.default,
                Stats: f.default
            },
            mounted: function() {
                t("#vmap").vectorMap({
                    map: "world_en"
                }), h.default.generate({
                    padding: {
                        top: 60,
                        right: 40,
                        left: 40
                    },
                    bindto: "#c3line",
                    data: {
                        columns: [
                            ["New User", 40, 60, 100, 230, 150, 250, 20, 80, 10],
                            ["Returning User", 65, 35, 10, 200, 15, 25, 175, 65, 120],
                            ["Referral User", 87, 62, 20, 80, 45, 15, 100, 20, 250]
                        ]
                    },
                    axis: {
                        x: {
                            show: !1
                        },
                        y: {
                            show: !1
                        }
                    }
                }), h.default.generate({
                    bindto: "#c3bar",
                    size: {
                        height: 140,
                        width: 280
                    },
                    padding: {
                        top: 4,
                        right: 4,
                        bottom: 4,
                        left: 4
                    },
                    data: {
                        columns: [
                            ["Users", 30, 200, 100, 400, 150, 250, 400, 10, 300, 250, 160, 40, 200]
                        ],
                        type: "bar",
                        colors: {
                            Users: "#DE6764"
                        }
                    },
                    axis: {
                        x: {
                            show: !1
                        },
                        y: {
                            show: !1
                        }
                    },
                    bar: {
                        width: {
                            ratio: .8
                        },
                        zerobased: !0
                    }
                }), h.default.generate({
                    bindto: "#c3pie",
                    size: {
                        height: 140,
                        width: 280
                    },
                    padding: {
                        top: 4,
                        right: 4,
                        bottom: 4,
                        left: 4
                    },
                    pie: {
                        label: {
                            show: !1
                        }
                    },
                    data: {
                        columns: [
                            ["New", 66],
                            ["Refral", 23],
                            ["Returning", 11]
                        ],
                        type: "pie",
                        onclick: function(t, a) {
                            console.log("onclick", t, a)
                        },
                        onmouseover: function(t, a) {
                            console.log("onmouseover", t, a)
                        },
                        onmouseout: function(t, a) {
                            console.log("onmouseout", t, a)
                        }
                    }
                })
            }
        }
    }).call(a, s(11))
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "not-found",
        components: {}
    }
}, function(t, a) {
    "use strict";
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.default = {
        name: "signup",
        components: {}
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {}, function(t, a) {
    t.exports = {
        hello: "Hallo Wereld",
        title: "Ani Theme",
        language: "taal",
        buynow: "Koop nu",
        "ltr-rtl": "Links/rechts",
        "ani-pascal": "Ani Pascal",
        topnav1: "Je hebt 4 ongelezen berichten .",
        topnavheader1: "Stuurde u een vriendenverzoek.",
        topnavheader2: "Vroeg je om StrapUI mee.",
        topnavheader3: "Gefeliciteerd! uw account is geactiveerd.",
        topnavheader4: "Laten we hebben een vergadering op 17:00.",
        feed: "nIEUWSFEED",
        li1: "Anna vond StrapUI - Dashboard Themes & Templates .",
        li2: "Henna verjaardag in Mezbaan om 7:00 uur.",
        li3: "Animesh Saha heeft gereageerd op je bericht.",
        li4: "Server Alert: Behoefte om uw server te upgraden .",
        chart1: "referral gebruiker",
        chart2: "Bestaande gebruiker",
        chart3: "nieuwe gebruiker",
        views: "Totaal Bekeken",
        stat1: "server uptime",
        stat2: "positieve feedback",
        stat3: "berichten gemarkeerd",
        dashboard: "dashboard",
        typography: "typografie",
        grid: "rooster",
        table: "tafel",
        todo: "Om Taken te doen",
        form: "vormen",
        elements: "vorm elements",
        components: "vorm components",
        user_interface: "gebruikersinterface",
        buttons: "knop",
        dropdown: "dropdown",
        icons: "icoon",
        panels: "paneel",
        alerts: "alarm",
        progressbars: "vooruitgang bars",
        pagination: "paginering",
        other_elements: "andere elementen",
        charts: "grafieken",
        "chart-js": "grafiek JS",
        "chart-c3": "C3 Grafiek",
        calendar: "kalender",
        mail: "mail",
        inbox: "inbox",
        compose: "componeren",
        invoice: "factuur",
        docs: "Docs",
        pages: "Pages",
        blankpage: "blanco pagina",
        login: "Log In",
        signup: "Inschrijven",
        "404page": "404 pagina",
        threenotifications: "Je hebt 3 nieuwe meldingen.",
        runuma: "Runuma Das vond uw foto.",
        harshita: "Harshita Borah vond je status.",
        archana: "Archana wil vrienden zijn.",
        animesh: "Animesh Saha zonder vrienden u.",
        profilee: "profiel",
        logout: "uitloggen",
        lucy: "Lucy Chandler",
        diptesh: "Diptesh Mishra",
        weng: "Wang Xiao",
        jade: "Jade Mullick",
        add: "toevoegen",
        "add-ph": "Wat gedaan moet worden?",
        todo1: "Meeting with Mr. Singh.",
        todo2: "Meeting with Mr. Singh.",
        todo3: "Meeting with Mr. Singh.",
        todo4: "Meeting with Mr. Singh.",
        registerhere: "Registreer hier",
        email: "E-mail",
        password: "wachtwoord",
        register: "Registreer",
        loginpage: "login pagina",
        fullname: "volledige Naam",
        repeatpass: "Herhaal Wachtwoord"
    }
}, function(t, a) {
    t.exports = {
        hello: "hello world",
        title: "Ani Theme",
        language: "Language",
        buynow: "Buy Now",
        "ltr-rtl": "LTR/RTL",
        "ani-pascal": "Ani Pascal",
        topnav1: "You have 4 unread messages.",
        topnavheader1: "Sent you a friend request.",
        topnavheader2: "Asked you to join StrapUI.",
        topnavheader3: "Congratulations! your account is activated.",
        topnavheader4: "Let's have a meeting at 5:00pm.",
        feed: "NEWS FEED",
        li1: "Anna liked StrapUI - Dashboard Themes & Templates.",
        li2: "Henna birthday at Mezbaan at 7:00pm.",
        li3: "Animesh Saha commented on your post.",
        li4: "Server Alert: Need to upgrade your server.",
        chart1: "Referral User",
        chart2: "Returning User",
        chart3: "New User",
        views: "Total Views",
        stat1: "Server Uptime",
        stat2: "Positive Feedback",
        stat3: "Posts Flagged",
        dashboard: "Dashboard",
        typography: "Typography",
        grid: "Grid",
        table: "Table",
        todo: "To do Tasks",
        form: "Form",
        elements: "Form Elements",
        components: "Form Components",
        user_interface: "User Interface",
        buttons: "Button",
        dropdown: "Dropdown",
        icons: "Icon",
        panels: "Panel",
        alerts: "Alert",
        progressbars: "Progressbars",
        pagination: "Pagination",
        other_elements: "Other Elements",
        charts: "Charts",
        "chart-js": "Chart JS",
        "chart-c3": "C3 Chart",
        calendar: "CALENDAR",
        mail: "Mail",
        inbox: "Inbox",
        compose: "Compose",
        invoice: "Invoice",
        docs: "Docs",
        pages: "Pages",
        blankpage: "Blank page",
        login: "Log in",
        singup: "Sign Up",
        "404page": "404 Page",
        threenotifications: "You have 3 new notifications.",
        runuma: "Runuma Das liked your photo.",
        harshita: "Harshita Borah liked your status.",
        archana: "Archana wants to be friends.",
        animesh: "Animesh Saha unfriended you.",
        profilee: "Profile",
        logout: "Logout",
        "//lucy": "Lucy Chandler",
        "//diptesh": "Diptesh Mishra",
        "//weng": "Wang Xiao",
        "//jade": "Jade Mullick",
        add: "Add",
        "add-ph": "What needs to be done?",
        todo1: "Meeting with Mr. Singh.",
        todo2: "Meeting with Mr. Singh.",
        todo3: "Meeting with Mr. Singh.",
        todo4: "Meeting with Mr. Singh.",
        "//registerhere": "Register Here",
        "//email": "Email",
        "//password": "Password",
        "//register": "Register",
        "//loginpage": "Login Page",
        "//fullname": "Full Name",
        "//repeatpass": "Repeat Password"
    }
}, function(t, a) {
    t.exports = {
        hello: "नमस्ते दुनिया",
        title: "Ani थीम",
        language: "भाषा",
        buynow: "अभी खरीदें",
        "ltr-rtl": "बाएँ / दांए",
        "ani-pascal": "Ani पास्कल",
        topnav1: "आप 4 अपठित संदेश नहीं है।",
        topnavheader1: "आप एक दोस्त के अनुरोध भेजा",
        topnavheader2: "StrapUI में शामिल होने के लिए कहा।",
        topnavheader3: "बधाई हो! आपका खाता सक्रिय है।",
        topnavheader4: "5:00 बजे एक बैठक करते हैं।",
        feed: "समाचार फ़ीड",
        li1: "डैशबोर्ड थीम्स और टेम्पलेट्स - अन्ना StrapUI पसंद आया।",
        li2: "7:00 पर Mezbaan पर मेंहदी जन्मदिन ।",
        li3: "अनिमेष साहा अपनी पोस्ट पर टिप्पणी की।",
        li4: "सर्वर अलर्ट: अपने सर्वर अपग्रेड करना होगा।.",
        chart1: "रेफरल उपयोगकर्ता",
        chart2: "रिटर्निंग उपयोगकर्ता",
        chart3: "नए उपयोगकर्ता",
        views: "कुल दृश्य",
        stat1: "सर्वर अपटाइम",
        stat2: "सकारात्मक प्रतिक्रिया",
        stat3: "रवाना किया",
        dashboard: "डैशबोर्ड",
        typography: "टाइपोग्राफी",
        grid: "ग्रिड",
        table: "तालिका",
        todo: "कार्य करने के लिए",
        form: "फार्म",
        elements: "फार्म तत्वों",
        components: "पर्चा अवयव",
        user_interface: "प्रयोक्ता इंटरफ़ेस",
        buttons: "बटन",
        dropdown: "ड्रॉप डाउन",
        icons: "आइकन",
        panels: "पैनल",
        alerts: "चेतावनी",
        progressbars: "प्रगति सलाखों",
        pagination: "पृष्ठ पर अंक लगाना",
        other_elements: "अन्य तत्वों",
        charts: "चार्ट्स",
        "chart-js": "चार्ट जेएस",
        "chart-c3": "सी 3 चार्ट",
        calendar: "कैलेंडर",
        mail: "मेल",
        inbox: "इनबॉक्स",
        compose: "लिखना",
        invoice: "चालान",
        docs: "डॉक्स",
        pages: "पन्ने",
        blankpage: "खाली पेज",
        login: "लॉग इन करें",
        singup: "साइन अप करें",
        "404page": "404 पेज",
        threenotifications: "आप 3 नई सूचनाएं नहीं हैं।",
        runuma: "Runuma दास अपनी तस्वीर पसंद आया।",
        harshita: "Harshita बोरा अपनी स्थिति को पसंद आया।",
        archana: "अर्चना दोस्ती करना चाहता है।",
        animesh: "अनिमेष साहा आप बिना ऐक्य।",
        profilee: "प्रोफ़ाइल",
        logout: "लॉग आउट",
        lucy: "लुसी चांडलर",
        diptesh: "Diptesh मिश्रा",
        weng: "वांग जिओ",
        jade: "जेड मलिक",
        add: "जोड़ें",
        "add-ph": "क्या किया जाने की जरूरत है?",
        todo1: "Meeting with Mr. Singh.",
        todo2: "Meeting with Mr. Singh.",
        todo3: "Meeting with Mr. Singh.",
        todo4: "Meeting with Mr. Singh.",
        registerhere: "यहां रजिस्टर करें",
        email: "ई मेल",
        password: "पासवर्ड",
        register: "रजिस्टर",
        loginpage: "लॉगिन पृष्ठ",
        fullname: "पूरा नाम",
        repeatpass: "पासवर्ड दोहराएं"
    }
}, function(t, a) {
    t.exports = {
        hello: "ہیلو دنیا",
        title: "اینی تھیم",
        language: "زبان",
        buynow: "ابھی خریدئے",
        "ltr-rtl": "بائیں/ دائیں",
        "ani-pascal": "اینی پاسکل",
        topnav1: "آپ 4 بغیر پڑھے ہوئے پیغامات",
        topnavheader1: "آپ کو ایک دوست کی درخواست بھیجی.",
        topnavheader2: "StrapUI شامل ہونے کے لئے آپ سے پوچھا",
        topnavheader3: "مبارک ہو! اپنے اکاؤنٹ کو چالو ہے",
        topnavheader4: "کے 5:00 بجے ایک میٹنگ کرتے ہیں",
        feed: "نیوز فیڈ",
        li1: "ڈیش بورڈ موضوعات اور سانچے - انا StrapUI پسند کیا",
        li2: "7:00 بجے Mezbaan پر مہندی سالگرہ",
        li3: "Animesh ساہا آپ کی اشاعت پر تبصرہ کیا",
        li4: "سرور انتباہ: آپ کے سرور کو اپ گریڈ کرنے کی ضرورت ہے",
        chart1: "ریفرل صارف",
        chart2: "ریٹرننگ صارف",
        chart3: "نیا صارف",
        views: "کل آراء",
        stat1: "سرور  اپ ٹائم",
        stat2: "مثبت رائے",
        stat3: "پوسٹس جھنڈا لگایا",
        dashboard: "ڈیش بورڈ",
        typography: "نوع ٹائپ",
        grid: "گرڈ",
        table: "ٹیبل",
        todo: "کاموں کو کرنے",
        form: "فارم",
        elements: "فارم عناصر",
        components: "فارم اجزاء",
        user_interface: "صارف مواجہ",
        buttons: "بٹنوں",
        dropdown: "ڈراپڈاؤن",
        icons: "آئکن",
        panels: "پینل",
        alerts: "انتباہ",
        progressbars: "پروگریس بار",
        pagination: "صفحہ بندی",
        other_elements: "دیگر عناصر",
        charts: "چارٹ",
        "chart-js": "چارٹ JS",
        "chart-c3": "C3 چارٹ",
        calendar: "کیلنڈر",
        mail: "میل",
        inbox: "ان باکس",
        compose: "تحریر",
        invoice: "انوائس",
        docs: "ڈاکس",
        pages: "صفحات",
        blankpage: "خالی صفحہ",
        login: "لاگ ان",
        singup: "ممبر بنیں",
        "404page": "صفحہ 404",
        threenotifications: "آپ کو 3 نئی اطلاعات حاصل ہے.",
        runuma: "Runuma داس آپ کی تصویر کو پسند کیا.",
        harshita: "Harshita بورا آپ کی حیثیت کو پسند کیا.",
        archana: "ارچنا دوست بننا چاہتا ہے.",
        animesh: "Animesh ساہا آپ unfriended.",
        profilee: "پروفائل",
        logout: "لاگ آؤٹ",
        lucy: "لسی چانڈلر",
        diptesh: "Diptesh مشرا",
        weng: "وانگ ژاؤ",
        jade: "جیڈ Mullick",
        add: "شامل کریں",
        "add-ph": "کیا کیا کرنے کی ضرورت ہے؟",
        todo1: "Meeting with Mr. Singh.",
        todo2: "Meeting with Mr. Singh.",
        todo3: "Meeting with Mr. Singh.",
        todo4: "Meeting with Mr. Singh.",
        registerhere: "یہاں رجسٹر",
        email: "دوستوں کوارسال کریں",
        password: "پاس ورڈ",
        register: "شمولیت اختیار کریں",
        loginpage: "لاگ ان پیج",
        fullname: "فل نام",
        repeatpass: "دہرائیں پاس ورڈ"
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, a, s) {
    function e(t) {
        return s(l(t))
    }

    function l(t) {
        return i[t] || function() {
            throw new Error("Cannot find module '" + t + "'.")
        }()
    }
    var i = {
        "./af": 114,
        "./af.js": 114,
        "./ar": 120,
        "./ar-dz": 115,
        "./ar-dz.js": 115,
        "./ar-ly": 116,
        "./ar-ly.js": 116,
        "./ar-ma": 117,
        "./ar-ma.js": 117,
        "./ar-sa": 118,
        "./ar-sa.js": 118,
        "./ar-tn": 119,
        "./ar-tn.js": 119,
        "./ar.js": 120,
        "./az": 121,
        "./az.js": 121,
        "./be": 122,
        "./be.js": 122,
        "./bg": 123,
        "./bg.js": 123,
        "./bn": 124,
        "./bn.js": 124,
        "./bo": 125,
        "./bo.js": 125,
        "./br": 126,
        "./br.js": 126,
        "./bs": 127,
        "./bs.js": 127,
        "./ca": 128,
        "./ca.js": 128,
        "./cs": 129,
        "./cs.js": 129,
        "./cv": 130,
        "./cv.js": 130,
        "./cy": 131,
        "./cy.js": 131,
        "./da": 132,
        "./da.js": 132,
        "./de": 134,
        "./de-at": 133,
        "./de-at.js": 133,
        "./de.js": 134,
        "./dv": 135,
        "./dv.js": 135,
        "./el": 136,
        "./el.js": 136,
        "./en-au": 137,
        "./en-au.js": 137,
        "./en-ca": 138,
        "./en-ca.js": 138,
        "./en-gb": 139,
        "./en-gb.js": 139,
        "./en-ie": 140,
        "./en-ie.js": 140,
        "./en-nz": 141,
        "./en-nz.js": 141,
        "./eo": 142,
        "./eo.js": 142,
        "./es": 144,
        "./es-do": 143,
        "./es-do.js": 143,
        "./es.js": 144,
        "./et": 145,
        "./et.js": 145,
        "./eu": 146,
        "./eu.js": 146,
        "./fa": 147,
        "./fa.js": 147,
        "./fi": 148,
        "./fi.js": 148,
        "./fo": 149,
        "./fo.js": 149,
        "./fr": 152,
        "./fr-ca": 150,
        "./fr-ca.js": 150,
        "./fr-ch": 151,
        "./fr-ch.js": 151,
        "./fr.js": 152,
        "./fy": 153,
        "./fy.js": 153,
        "./gd": 154,
        "./gd.js": 154,
        "./gl": 155,
        "./gl.js": 155,
        "./he": 156,
        "./he.js": 156,
        "./hi": 157,
        "./hi.js": 157,
        "./hr": 158,
        "./hr.js": 158,
        "./hu": 159,
        "./hu.js": 159,
        "./hy-am": 160,
        "./hy-am.js": 160,
        "./id": 161,
        "./id.js": 161,
        "./is": 162,
        "./is.js": 162,
        "./it": 163,
        "./it.js": 163,
        "./ja": 164,
        "./ja.js": 164,
        "./jv": 165,
        "./jv.js": 165,
        "./ka": 166,
        "./ka.js": 166,
        "./kk": 167,
        "./kk.js": 167,
        "./km": 168,
        "./km.js": 168,
        "./ko": 169,
        "./ko.js": 169,
        "./ky": 170,
        "./ky.js": 170,
        "./lb": 171,
        "./lb.js": 171,
        "./lo": 172,
        "./lo.js": 172,
        "./lt": 173,
        "./lt.js": 173,
        "./lv": 174,
        "./lv.js": 174,
        "./me": 175,
        "./me.js": 175,
        "./mi": 176,
        "./mi.js": 176,
        "./mk": 177,
        "./mk.js": 177,
        "./ml": 178,
        "./ml.js": 178,
        "./mr": 179,
        "./mr.js": 179,
        "./ms": 181,
        "./ms-my": 180,
        "./ms-my.js": 180,
        "./ms.js": 181,
        "./my": 182,
        "./my.js": 182,
        "./nb": 183,
        "./nb.js": 183,
        "./ne": 184,
        "./ne.js": 184,
        "./nl": 186,
        "./nl-be": 185,
        "./nl-be.js": 185,
        "./nl.js": 186,
        "./nn": 187,
        "./nn.js": 187,
        "./pa-in": 188,
        "./pa-in.js": 188,
        "./pl": 189,
        "./pl.js": 189,
        "./pt": 191,
        "./pt-br": 190,
        "./pt-br.js": 190,
        "./pt.js": 191,
        "./ro": 192,
        "./ro.js": 192,
        "./ru": 193,
        "./ru.js": 193,
        "./se": 194,
        "./se.js": 194,
        "./si": 195,
        "./si.js": 195,
        "./sk": 196,
        "./sk.js": 196,
        "./sl": 197,
        "./sl.js": 197,
        "./sq": 198,
        "./sq.js": 198,
        "./sr": 200,
        "./sr-cyrl": 199,
        "./sr-cyrl.js": 199,
        "./sr.js": 200,
        "./ss": 201,
        "./ss.js": 201,
        "./sv": 202,
        "./sv.js": 202,
        "./sw": 203,
        "./sw.js": 203,
        "./ta": 204,
        "./ta.js": 204,
        "./te": 205,
        "./te.js": 205,
        "./tet": 206,
        "./tet.js": 206,
        "./th": 207,
        "./th.js": 207,
        "./tl-ph": 208,
        "./tl-ph.js": 208,
        "./tlh": 209,
        "./tlh.js": 209,
        "./tr": 210,
        "./tr.js": 210,
        "./tzl": 211,
        "./tzl.js": 211,
        "./tzm": 213,
        "./tzm-latn": 212,
        "./tzm-latn.js": 212,
        "./tzm.js": 213,
        "./uk": 214,
        "./uk.js": 214,
        "./uz": 215,
        "./uz.js": 215,
        "./vi": 216,
        "./vi.js": 216,
        "./x-pseudo": 217,
        "./x-pseudo.js": 217,
        "./yo": 218,
        "./yo.js": 218,
        "./zh-cn": 219,
        "./zh-cn.js": 219,
        "./zh-hk": 220,
        "./zh-hk.js": 220,
        "./zh-tw": 221,
        "./zh-tw.js": 221
    };
    e.keys = function() {
        return Object.keys(i)
    }, e.resolve = l, t.exports = e, e.id = 535
}, function(t, a, s) {
    t.exports = s.p + "static/img/flat.31c9fed.png"
}, , , , function(t, a, s) {
    var e, l;
    s(402), e = s(250);
    var i = s(615);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(365), e = s(251);
    var i = s(578);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(370), e = s(263);
    var i = s(583);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(395), e = s(252);
    var i = s(608);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(374), e = s(253);
    var i = s(587);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(382), e = s(264);
    var i = s(595);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(386), e = s(265);
    var i = s(599);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(371), e = s(266);
    var i = s(584);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(401), e = s(255);
    var i = s(614);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(394), e = s(256);
    var i = s(607);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(369), e = s(267);
    var i = s(582);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(390), e = s(268);
    var i = s(603);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(373), e = s(269);
    var i = s(586);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(378), e = s(257);
    var i = s(591);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(366), e = s(270);
    var i = s(579);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(376), e = s(286);
    var i = s(589);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(392), e = s(271);
    var i = s(605);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(403), e = s(272);
    var i = s(616);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(384), e = s(273);
    var i = s(597);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(396), e = s(258);
    var i = s(609);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(372), e = s(274);
    var i = s(585);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(389), e = s(275);
    var i = s(602);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(379), e = s(276);
    var i = s(592);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(381), e = s(277);
    var i = s(594);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(387), e = s(278);
    var i = s(600);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(391), e = s(279);
    var i = s(604);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(383), e = s(280);
    var i = s(596);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(397), e = s(281);
    var i = s(610);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(368), e = s(282);
    var i = s(581);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(364), e = s(283);
    var i = s(577);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(377), e = s(284);
    var i = s(590);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(398), e = s(285);
    var i = s(611);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(380), e = s(259);
    var i = s(593);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(393), e = s(260);
    var i = s(606);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(385), e = s(287);
    var i = s(598);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(367), e = s(288);
    var i = s(580);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a, s) {
    var e, l;
    s(388), e = s(249);
    var i = s(601);
    l = e = e || {}, "object" != typeof e.default && "function" != typeof e.default || (l = e = e.default), "function" == typeof l && (l = l.options), l.render = i.render, l.staticRenderFns = i.staticRenderFns, t.exports = e
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement;
            t._self._c || a;
            return t._m(0)
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "pagination"
                }
            }, [s("div", {
                staticClass: "animated fadeIn"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-md-6"
            }, [s("div", {
                staticClass: "panel panel-success"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Breadcrumbs\n                          ")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "clearfix"
            }, [s("ol", {
                staticClass: "breadcrumb no-bg no-m-t"
            }, [s("li", {
                staticClass: "active"
            }, [s("i", {
                staticClass: "fa fa-home"
            })]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Library")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Home")])])])]), t._v(" "), s("div", {
                staticClass: "line-h-ex"
            }), t._v(" "), s("div", {
                staticClass: "clearfix"
            }, [s("ol", {
                staticClass: "breadcrumb pull-right no-bg m-t"
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Home")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Library")])]), t._v(" "), s("li", {
                staticClass: "active"
            }, [s("i", {
                staticClass: "fa fa-home"
            })])])]), t._v(" "), s("div", {
                staticClass: "line-h-ex"
            }), t._v(" "), s("div", {
                staticClass: "clearfix"
            }, [s("ol", {
                staticClass: "breadcrumb m-t no-m-b"
            }, [s("li", {
                staticClass: "active"
            }, [s("i", {
                staticClass: "fa fa-home"
            })]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Library")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Home")])])])])])]), t._v(" "), s("div", {
                staticClass: "panel panel-warning"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Pager\n                          ")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "clearfix"
            }, [s("ul", {
                staticClass: "pager no-m-t"
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Previous")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Next")])])])]), t._v(" "), s("div", {
                staticClass: "line-h-ex"
            }), t._v(" "), s("div", {
                staticClass: "clearfix",
                attrs: {
                    "ng-controller": "PaginationDemoCtrl"
                }
            }, [s("div", {
                staticClass: "clearfix"
            }, [s("ul", {
                staticClass: "pager no-m-t"
            }, [s("li", {
                staticClass: "pull-left"
            }, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("« Previous")])]), t._v(" "), s("li", {
                staticClass: "pull-right"
            }, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Next »")])])])])])])])]), t._v(" "), s("div", {
                staticClass: "col-md-6"
            }, [s("div", {
                staticClass: "panel panel-info"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Pagination\n                      ")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "clearfix",
                attrs: {
                    "ng-controller": "PaginationDemoCtrl"
                }
            }, [s("nav", {
                attrs: {
                    "aria-label": ""
                }
            }, [s("ul", {
                staticClass: "pagination"
            }, [s("li", {
                staticClass: "disabled"
            }, [s("a", {
                attrs: {
                    href: "#",
                    "aria-label": "Previous"
                }
            }, [s("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [t._v("«")])])]), t._v(" "), s("li", {
                staticClass: "disabled"
            }, [s("a", {
                attrs: {
                    href: "#",
                    "aria-label": "Previous"
                }
            }, [s("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [t._v("‹")])])]), t._v(" "), s("li", {}, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("1 "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", {}, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("2 "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", {}, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("3 "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", {
                staticClass: "active"
            }, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("4 "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", {}, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("5 "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", {}, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("6 "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", {}, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("7 "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", {
                staticClass: "disabled"
            }, [s("a", {
                attrs: {
                    href: "#",
                    "aria-label": "Previous"
                }
            }, [s("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [t._v("›")])])]), t._v(" "), s("li", {
                staticClass: "disabled"
            }, [s("a", {
                attrs: {
                    href: "#",
                    "aria-label": "Previous"
                }
            }, [s("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [t._v("»")])])])])])]), t._v(" "), s("div", {
                staticClass: "clearfix text-center",
                attrs: {
                    "ng-controller": "PaginationDemoCtrl"
                }
            }, [s("nav", {
                attrs: {
                    "aria-label": ""
                }
            }, [s("ul", {
                staticClass: "pagination"
            }, [s("li", {
                staticClass: "disabled"
            }, [s("a", {
                attrs: {
                    href: "#",
                    "aria-label": "Previous"
                }
            }, [s("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [t._v("«")])])]), t._v(" "), s("li", {
                staticClass: "disabled"
            }, [s("a", {
                attrs: {
                    href: "#",
                    "aria-label": "Previous"
                }
            }, [s("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [t._v("‹")])])]), t._v(" "), s("li", {}, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("1 "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", {}, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("2 "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", {}, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("3 "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", {
                staticClass: "active"
            }, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("4 "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", {}, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("5 "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", {}, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("6 "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", {}, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("7 "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", {
                staticClass: "disabled"
            }, [s("a", {
                attrs: {
                    href: "#",
                    "aria-label": "Previous"
                }
            }, [s("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [t._v("›")])])]), t._v(" "), s("li", {
                staticClass: "disabled"
            }, [s("a", {
                attrs: {
                    href: "#",
                    "aria-label": "Previous"
                }
            }, [s("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [t._v("»")])])])])])]), t._v(" "), s("div", {
                staticClass: "clearfix pull-right",
                attrs: {
                    "ng-controller": "PaginationDemoCtrl"
                }
            }, [s("nav", {
                attrs: {
                    "aria-label": ""
                }
            }, [s("ul", {
                staticClass: "pagination"
            }, [s("li", {
                staticClass: "disabled"
            }, [s("a", {
                attrs: {
                    href: "#",
                    "aria-label": "Previous"
                }
            }, [s("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [t._v("«")])])]), t._v(" "), s("li", {
                staticClass: "disabled"
            }, [s("a", {
                attrs: {
                    href: "#",
                    "aria-label": "Previous"
                }
            }, [s("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [t._v("‹")])])]), t._v(" "), s("li", {}, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("1 "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", {}, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("2 "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", {}, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("3 "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", {
                staticClass: "active"
            }, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("4 "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", {}, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("5 "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", {}, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("6 "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", {}, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("7 "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", {
                staticClass: "disabled"
            }, [s("a", {
                attrs: {
                    href: "#",
                    "aria-label": "Previous"
                }
            }, [s("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [t._v("›")])])]), t._v(" "), s("li", {
                staticClass: "disabled"
            }, [s("a", {
                attrs: {
                    href: "#",
                    "aria-label": "Previous"
                }
            }, [s("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [t._v("»")])])])])])])])]), t._v(" "), s("div", {
                staticClass: "panel panel-danger"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Pagination Sizes\n                          ")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "clearfix"
            }, [s("ul", {
                staticClass: "pagination pagination-lg no-m-t"
            }, [s("li", [s("a", {
                attrs: {
                    href: "#",
                    "aria-label": "Previous"
                }
            }, [s("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [t._v("«")])])]), t._v(" "), s("li", {
                staticClass: "active"
            }, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("1")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("2")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("3")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("4")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("5")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#",
                    "aria-label": "Next"
                }
            }, [s("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [t._v("»")])])])])]), t._v(" "), s("div", {
                staticClass: "line-h-ex"
            }), t._v(" "), s("div", {
                staticClass: "clearfix"
            }, [s("ul", {
                staticClass: "pagination"
            }, [s("li", [s("a", {
                attrs: {
                    href: "#",
                    "aria-label": "Previous"
                }
            }, [s("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [t._v("«")])])]), t._v(" "), s("li", {
                staticClass: "active"
            }, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("1")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("2")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("3")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("4")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("5")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#",
                    "aria-label": "Next"
                }
            }, [s("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [t._v("»")])])])])]), t._v(" "), s("div", {
                staticClass: "line-h-ex"
            }), t._v(" "), s("div", {
                staticClass: "clearfix"
            }, [s("ul", {
                staticClass: "pagination pagination-sm no-m-b"
            }, [s("li", [s("a", {
                attrs: {
                    href: "#",
                    "aria-label": "Previous"
                }
            }, [s("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [t._v("«")])])]), t._v(" "), s("li", {
                staticClass: "active"
            }, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("1")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("2")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("3")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("4")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("5")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#",
                    "aria-label": "Next"
                }
            }, [s("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [t._v("»")])])])])])])])])])])])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "stats"
            }, [s("div", {
                staticClass: "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }, [s("div", {
                staticClass: "pull-left text-center",
                staticStyle: {
                    "margin-right": "14px"
                }
            }, [s("i", {
                class: "fa " + t.icon + " fa-4x text-info",
                style: "line-height: 88px; color:" + t.color + ";"
            })]), t._v(" "), s("div", {}, [s("h4", {
                staticStyle: {
                    color: "#555",
                    margin: "0",
                    "margin-top": "5px",
                    padding: "0",
                    "font-size": "22px",
                    "line-height": "36px",
                    "font-weight": "700"
                }
            }, [t._v(t._s(t.title))]), t._v(" "), s("div", {
                staticClass: "progress",
                staticStyle: {
                    height: "5px",
                    margin: "0",
                    padding: "0",
                    "line-height": "28px"
                }
            }, [s("div", {
                staticClass: "progress-bar",
                style: "width:" + t.progress + "; background-color:" + t.color + ";",
                attrs: {
                    role: "progressbar",
                    "aria-valuenow": "70",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }
            }, [s("span", {
                staticClass: "sr-only"
            }, [t._v("70% Complete")])])]), t._v(" "), s("p", {
                staticStyle: {
                    "font-size": "14px",
                    "font-weight": "500",
                    color: "#555",
                    "margin-top": "8px",
                    padding: "0",
                    "line-height": "16px"
                }
            }, [t._v(t._s(t.info)), s("i", {
                staticClass: "fa fa-arrow-circle-o-right pull-right text-muted",
                staticStyle: {
                    "padding-right": "5px !important"
                }
            })])])])])
        },
        staticRenderFns: []
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement;
            t._self._c || a;
            return t._m(0)
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "grid"
                }
            }, [s("div", {
                staticClass: "animated fadeIn"
            }, [s("div", {
                attrs: {
                    id: "panel-grid"
                }
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-sm-12"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "text-center"
            }, [s("h4", [t._v("Twelve")])])])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-sm-6"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "text-center"
            }, [s("h4", [t._v("Six")])])])])]), t._v(" "), s("div", {
                staticClass: "col-sm-6"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "text-center"
            }, [s("h4", [t._v("Six")])])])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-sm-4"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "text-center"
            }, [s("h4", [t._v("Four")])])])])]), t._v(" "), s("div", {
                staticClass: "col-sm-4"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "text-center"
            }, [s("h4", [t._v("Four")])])])])]), t._v(" "), s("div", {
                staticClass: "col-sm-4"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "text-center"
            }, [s("h4", [t._v("Four")])])])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-sm-3"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "text-center"
            }, [s("h4", [t._v("Three")])])])])]), t._v(" "), s("div", {
                staticClass: "col-sm-3"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "text-center"
            }, [s("h4", [t._v("Three")])])])])]), t._v(" "), s("div", {
                staticClass: "col-sm-3"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "text-center"
            }, [s("h4", [t._v("Three")])])])])]), t._v(" "), s("div", {
                staticClass: "col-sm-3"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "text-center"
            }, [s("h4", [t._v("Three")])])])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-sm-5"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "text-center"
            }, [s("h4", [t._v("Five")])])])])]), t._v(" "), s("div", {
                staticClass: "col-sm-7"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "text-center"
            }, [s("h4", [t._v("Seven")])])])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-sm-4"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "text-center"
            }, [s("h4", [t._v("Four")])])])])]), t._v(" "), s("div", {
                staticClass: "col-sm-8"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "text-center"
            }, [s("h4", [t._v("Eight")])])])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-sm-3"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "text-center"
            }, [s("h4", [t._v("Three")])])])])]), t._v(" "), s("div", {
                staticClass: "col-sm-9"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "text-center"
            }, [s("h4", [t._v("Nine")])])])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-sm-2"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "text-center"
            }, [s("h4", [t._v("Two")])])])])]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "text-center"
            }, [s("h4", [t._v("Ten")])])])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-sm-1"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "text-center"
            }, [s("h4", [t._v("One")])])])])]), t._v(" "), s("div", {
                staticClass: "col-sm-11"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "text-center"
            }, [s("h4", [t._v("Eleven")])])])])])])])])])
        }]
    }
}, function(t, a, s) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                e = t._self._c || a;
            return e("div", {
                attrs: {
                    id: "signup"
                }
            }, [e("div", {
                staticClass: "login-page"
            }, [e("div", {
                staticClass: "row"
            }, [e("div", {
                staticClass: "col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4 animated fadeIn"
            }, [e("img", {
                staticClass: "user-avatar",
                attrs: {
                    src: s(6)
                }
            }), t._v(" "), e("h1", [t._v("Ani Theme")]), t._v(" "), t._m(0), t._v(" "), e("router-link", {
                attrs: {
                    to: "/dashboard/home"
                }
            }, [e("button", {
                staticClass: "btn btn-login-page btn-white btn-outline btn-lg btn-rounded",
                attrs: {
                    type: "submit"
                }
            }, [t._v("Register")]), t._v(" ")]), t._v(" "), e("router-link", {
                attrs: {
                    to: "/"
                }
            }, [e("a", {
                attrs: {
                    href: "/"
                }
            }, [e("button", {
                staticClass: "btn btn-login-page btn-white btn-outline btn-lg btn-rounded",
                attrs: {
                    type: "submit"
                }
            }, [t._v("Login")])])])], 1)])])])
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "form-content"
            }, [s("div", {
                staticClass: "form-group"
            }, [s("input", {
                staticClass: "input-underline input-lg",
                attrs: {
                    type: "text",
                    id: "",
                    placeholder: "Full Name"
                }
            })]), t._v(" "), s("div", {
                staticClass: "form-group"
            }, [s("input", {
                staticClass: "input-underline input-lg",
                attrs: {
                    type: "text",
                    id: "",
                    placeholder: "Email"
                }
            })]), t._v(" "), s("div", {
                staticClass: "form-group"
            }, [s("input", {
                staticClass: "input-underline input-lg",
                attrs: {
                    type: "password",
                    id: "",
                    placeholder: "Password"
                }
            })]), t._v(" "), s("div", {
                staticClass: "form-group"
            }, [s("input", {
                staticClass: "input-underline input-lg",
                attrs: {
                    type: "password",
                    id: "",
                    placeholder: "Repeat Password"
                }
            })])])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement;
            t._self._c || a;
            return t._m(0)
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "other-elements"
                }
            }, [s("div", {
                staticClass: "animated fadeIn"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-lg-8 col-md-6"
            }, [s("div", {
                staticClass: "panel panel-primary"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("List Group\n\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("ul", {
                staticClass: "list-group"
            }, [s("li", {
                staticClass: "list-group-item"
            }, [t._v("Cras justo odio")]), t._v(" "), s("li", {
                staticClass: "list-group-item"
            }, [t._v("Dapibus ac facilisis in")]), t._v(" "), s("li", {
                staticClass: "list-group-item"
            }, [t._v("Morbi leo risus")]), t._v(" "), s("li", {
                staticClass: "list-group-item"
            }, [t._v("Porta ac consectetur ac")]), t._v(" "), s("li", {
                staticClass: "list-group-item"
            }, [t._v("Vestibulum at eros")])]), t._v(" "), s("ul", {
                staticClass: "list-group"
            }, [s("li", {
                staticClass: "list-group-item"
            }, [s("span", {
                staticClass: "badge"
            }, [t._v("14")]), t._v("\n\t\t\t\t\t\t\tCras justo odio\n\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "list-group"
            }, [s("a", {
                staticClass: "list-group-item active",
                attrs: {
                    href: "#"
                }
            }, [t._v("\n\t\t\t\t\t\t\tCras justo odio\n\t\t\t\t\t\t")]), t._v(" "), s("a", {
                staticClass: "list-group-item",
                attrs: {
                    href: "#"
                }
            }, [t._v("Dapibus ac facilisis in")]), t._v(" "), s("a", {
                staticClass: "list-group-item",
                attrs: {
                    href: "#"
                }
            }, [t._v("Morbi leo risus")]), t._v(" "), s("a", {
                staticClass: "list-group-item",
                attrs: {
                    href: "#"
                }
            }, [t._v("Porta ac consectetur ac")]), t._v(" "), s("a", {
                staticClass: "list-group-item",
                attrs: {
                    href: "#"
                }
            }, [t._v("Vestibulum at eros")])]), t._v(" "), s("div", {
                staticClass: "list-group"
            }, [s("a", {
                staticClass: "list-group-item list-group-item-success",
                attrs: {
                    href: "#"
                }
            }, [t._v("Dapibus ac facilisis in")]), t._v(" "), s("a", {
                staticClass: "list-group-item list-group-item-info",
                attrs: {
                    href: "#"
                }
            }, [t._v("Cras sit amet nibh libero")]), t._v(" "), s("a", {
                staticClass: "list-group-item list-group-item-warning",
                attrs: {
                    href: "#"
                }
            }, [t._v("Porta ac consectetur ac")]), t._v(" "), s("a", {
                staticClass: "list-group-item list-group-item-danger",
                attrs: {
                    href: "#"
                }
            }, [t._v("Vestibulum at eros")])]), t._v(" "), s("div", {
                staticClass: "list-group"
            }, [s("a", {
                staticClass: "list-group-item active",
                attrs: {
                    href: "#"
                }
            }, [s("h4", {
                staticClass: "list-group-item-heading"
            }, [t._v("List group item heading")]), t._v(" "), s("p", {
                staticClass: "list-group-item-text"
            }, [t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione officiis totam eos optio!")])]), t._v(" "), s("a", {
                staticClass: "list-group-item",
                attrs: {
                    href: "#"
                }
            }, [s("h4", {
                staticClass: "list-group-item-heading"
            }, [t._v("List group item heading")]), t._v(" "), s("p", {
                staticClass: "list-group-item-text"
            }, [t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione officiis totam eos optio!")])]), t._v(" "), s("a", {
                staticClass: "list-group-item",
                attrs: {
                    href: "#"
                }
            }, [s("h4", {
                staticClass: "list-group-item-heading"
            }, [t._v("List group item heading")]), t._v(" "), s("p", {
                staticClass: "list-group-item-text"
            }, [t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione officiis totam eos optio!")])])])])])]), t._v(" "), s("div", {
                staticClass: "col-lg-4 col-md-6"
            }, [s("div", {
                staticClass: "panel panel-warning"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Labels & Badges\n\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("span", {
                staticClass: "label label-default"
            }, [t._v("labels")]), t._v(" "), s("span", {
                staticClass: "label label-primary"
            }, [t._v("labels")]), t._v(" "), s("span", {
                staticClass: "label label-success"
            }, [t._v("labels")]), t._v(" "), s("span", {
                staticClass: "label label-info"
            }, [t._v("labels")]), t._v(" "), s("span", {
                staticClass: "label label-warning"
            }, [t._v("labels")]), t._v(" "), s("span", {
                staticClass: "label label-danger"
            }, [t._v("labels")]), t._v(" "), s("br"), s("br"), t._v(" "), s("span", {
                staticClass: "badge primaryb"
            }, [t._v("35")]), t._v(" "), s("span", {
                staticClass: "badge infob"
            }, [t._v("67")]), t._v(" "), s("span", {
                staticClass: "badge successb"
            }, [t._v("12")]), t._v(" "), s("span", {
                staticClass: "badge dangerb"
            }, [t._v("39")]), t._v(" "), s("span", {
                staticClass: "badge warningb"
            }, [t._v("07")]), t._v(" "), s("span", {
                staticClass: "badge violetb"
            }, [t._v("94")]), t._v(" "), s("span", {
                staticClass: "badge orangeb"
            }, [s("i", {
                staticClass: "fa fa-star"
            })]), t._v(" "), s("span", {
                staticClass: "badge cyanb"
            }, [s("i", {
                staticClass: "fa fa-certificate"
            })])])]), t._v(" "), s("div", {
                staticClass: "panel panel-danger"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Carousel")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "carousel slide",
                attrs: {
                    id: "myCarouselText",
                    "data-ride": "carousel"
                }
            }, [s("div", {
                staticClass: "carousel-inner",
                staticStyle: {
                    height: "60px"
                },
                attrs: {
                    role: "listbox"
                }
            }, [s("div", {
                staticClass: "item active"
            }, [t._v("\n\t\t\t\t\t\t\tSuccess is not final, failure is not fatal: it is the courage to continue that counts.\n\t\t\t\t\t\t")]), t._v(" "), s("div", {
                staticClass: "item"
            }, [t._v("\n\t\t\t\t\t\t\tTo succeed in life, you need two things: ignorance and confidence.\n\t\t\t\t\t\t")]), t._v(" "), s("div", {
                staticClass: "item"
            }, [t._v("\n\t\t\t\t\t\t\tSuccess is how high you bounce when you hit bottom. Keep Going.\n\t\t\t\t\t\t")])]), t._v(" "), s("ol", {
                staticClass: "carousel-indicators",
                staticStyle: {
                    bottom: "0",
                    "margin-top": "5px",
                    "margin-bottom": "-5px"
                }
            }, [s("li", {
                staticClass: "active",
                staticStyle: {
                    "background-color": "#3CA2E0"
                },
                attrs: {
                    "data-target": "#myCarouselText",
                    "data-slide-to": "0"
                }
            }), t._v(" "), s("li", {
                staticStyle: {
                    "background-color": "#3CA2E0"
                },
                attrs: {
                    "data-target": "#myCarouselText",
                    "data-slide-to": "1"
                }
            }), t._v(" "), s("li", {
                staticStyle: {
                    "background-color": "#3CA2E0"
                },
                attrs: {
                    "data-target": "#myCarouselText",
                    "data-slide-to": "2"
                }
            })])])])]), t._v(" "), s("div", {
                staticClass: "panel panel-info"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Carousel")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "carousel slide",
                attrs: {
                    id: "myCarousel",
                    "data-ride": "carousel"
                }
            }, [s("ol", {
                staticClass: "carousel-indicators"
            }, [s("li", {
                staticClass: "active",
                attrs: {
                    "data-target": "#myCarousel",
                    "data-slide-to": "0"
                }
            }), t._v(" "), s("li", {
                attrs: {
                    "data-target": "#myCarousel",
                    "data-slide-to": "1"
                }
            }), t._v(" "), s("li", {
                attrs: {
                    "data-target": "#myCarousel",
                    "data-slide-to": "2"
                }
            })]), t._v(" "), s("div", {
                staticClass: "carousel-inner",
                attrs: {
                    role: "listbox"
                }
            }, [s("div", {
                staticClass: "item active"
            }, [s("img", {
                attrs: {
                    src: "/static/images/img1.jpg",
                    alt: "Chania"
                }
            })]), t._v(" "), s("div", {
                staticClass: "item"
            }, [s("img", {
                attrs: {
                    src: "/static/images/img2.jpg",
                    alt: "Chania"
                }
            })]), t._v(" "), s("div", {
                staticClass: "item"
            }, [s("img", {
                attrs: {
                    src: "/static/images/img3.jpg",
                    alt: "Flower"
                }
            })])]), t._v(" "), s("a", {
                staticClass: "left carousel-control",
                attrs: {
                    href: "#myCarousel",
                    role: "button",
                    "data-slide": "prev"
                }
            }, [s("span", {
                staticClass: "glyphicon glyphicon-chevron-left",
                attrs: {
                    "aria-hidden": "true"
                }
            }), t._v(" "), s("span", {
                staticClass: "sr-only"
            }, [t._v("Previous")])]), t._v(" "), s("a", {
                staticClass: "right carousel-control",
                attrs: {
                    href: "#myCarousel",
                    role: "button",
                    "data-slide": "next"
                }
            }, [s("span", {
                staticClass: "glyphicon glyphicon-chevron-right",
                attrs: {
                    "aria-hidden": "true"
                }
            }), t._v(" "), s("span", {
                staticClass: "sr-only"
            }, [t._v("Next")])])])])]), t._v(" "), s("div", {
                staticClass: "panel panel-success tool"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Tooltip & Popover")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "multiple_elements"
            }, [s("div", {
                staticClass: "btn-group"
            }, [s("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "button",
                    "data-toggle": "tooltip",
                    "data-placement": "left",
                    "data-original-title": "This is a Left Tooltip"
                }
            }, [t._v("\n\t\t\t\tLeft Tooltip\n\t\t\t")]), t._v(" "), s("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "button",
                    "data-toggle": "tooltip",
                    "data-placement": "top",
                    "data-original-title": "This is a Top Tooltip"
                }
            }, [t._v("\n\t\t\t\tTop Tooltip\n\t\t\t")]), t._v(" "), s("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "button",
                    "data-toggle": "tooltip",
                    "data-placement": "bottom",
                    "data-original-title": "This is a Bottom Tooltip"
                }
            }, [t._v("\n\t\t\t\tBottom Tooltip\n\t\t\t")]), t._v(" "), s("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "button",
                    "data-toggle": "tooltip",
                    "data-placement": "right",
                    "data-original-title": "This is a Right Tooltip"
                }
            }, [t._v("\n\t\t\t\tRight Tooltip\n\t\t\t")])])]), t._v(" "), s("hr"), t._v(" "), s("div", {
                staticClass: "multiple_elements"
            }, [s("div", {
                staticClass: "btn-group"
            }, [s("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "button",
                    "data-toggle": "popover",
                    "data-placement": "left",
                    "data-content": "To the Left!"
                }
            }, [t._v("\n\t\t\t\tLeft Popover\n\t\t\t")]), t._v(" "), s("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "button",
                    "data-toggle": "popover",
                    "data-placement": "top",
                    "data-content": "On the Top!"
                }
            }, [t._v("\n\t\t\t\tTop Popover\n\t\t\t")]), t._v(" "), s("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "button",
                    "data-toggle": "popover",
                    "data-placement": "bottom",
                    "data-content": "Bottom!"
                }
            }, [t._v("\n\t\t\t\tBottom Popover\n\t\t\t")]), t._v(" "), s("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "button",
                    "data-toggle": "popover",
                    "data-placement": "right",
                    "data-content": "To the Right!"
                }
            }, [t._v("\n\t\t\t\tRight Popover\n\t\t\t")])])])])])])])])])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement;
            t._self._c || a;
            return t._m(0)
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "docs"
                }
            }, [s("div", {
                staticClass: "animated fadeIn docs"
            })])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "todoapp"
            }, [s("div", {
                staticClass: "panel-heading col-xs-12 todo-title"
            }, [s("div", {
                staticClass: "todo-header text-center"
            }, [s("h4", [s("i", {
                staticClass: "fa fa-tasks"
            }), t._v(" " + t._s(t.$t("message.todo")))])])]), t._v(" "), s("div", {
                staticClass: "panel-body bg-danger",
                staticStyle: {
                    "padding-bottom": "-15px"
                }
            }, [s("div", {
                staticClass: "todo-body"
            }, [s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.todos.length,
                    expression: "todos.length"
                }],
                staticClass: "main col-xs-12"
            }, [s("ul", {
                staticClass: "todo-list",
                attrs: {
                    id: "todo-list"
                }
            }, t._l(t.filteredTodos, function(a) {
                return s("li", {
                    staticClass: "todo",
                    class: {
                        completed: a.completed, editing: a === t.editing
                    }
                }, [s("label", {
                    staticClass: "checkbox1 animated bounceInRight"
                }, [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: a.completed,
                        expression: "todo.completed"
                    }],
                    staticClass: "checkbox",
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(a.completed) ? t._i(a.completed, null) > -1 : a.completed
                    },
                    on: {
                        change: function(s) {
                            var e = a.completed,
                                l = s.target,
                                i = !!l.checked;
                            if (Array.isArray(e)) {
                                var n = null,
                                    r = t._i(e, n);
                                i ? r < 0 && (a.completed = e.concat(n)) : r > -1 && (a.completed = e.slice(0, r).concat(e.slice(r + 1)))
                            } else a.completed = i
                        }
                    }
                }), t._v(" "), s("span", {
                    staticStyle: {
                        "margin-bottom": "5px !important"
                    }
                })]), t._v(" "), s("label", {
                    staticClass: "todo-con",
                    on: {
                        dblclick: function(s) {
                            t.editTodo(a)
                        }
                    }
                }, [t._v(t._s(a.title))]), t._v(" "), s("button", {
                    staticClass: "destroy",
                    on: {
                        click: function(s) {
                            s.preventDefault(), t.deleteTodo(a)
                        }
                    }
                }, [s("i", {
                    staticClass: "fa fa-minus",
                    attrs: {
                        "aria-hidden": "true"
                    }
                })])])
            }))]), t._v(" "), s("div", {
                staticClass: "row todo-from-bottom"
            }, [s("div", {
                staticClass: "col-xs-12"
            }, [s("div", {
                staticClass: "input-group"
            }, [s("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.newTodo,
                    expression: "newTodo"
                }],
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    onkeydown: "gotoBottom()",
                    autocomplete: "off",
                    placeholder: t.$t("message.add-ph")
                },
                domProps: {
                    value: t._s(t.newTodo)
                },
                on: {
                    keyup: function(a) {
                        t._k(a.keyCode, "enter", 13) || t.addTodo(a)
                    },
                    input: function(a) {
                        a.target.composing || (t.newTodo = a.target.value)
                    }
                }
            }), t._v(" "), s("span", {
                staticClass: "input-group-btn"
            }, [s("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "submit",
                    onclick: "gotoBottom()"
                },
                on: {
                    click: t.addTodo
                }
            }, [t._v(t._s(t.$t("message.add")))])])])])])])])])
        },
        staticRenderFns: []
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "chart"
                }
            }, [s("div", {
                staticClass: "chart container animated fadeIn"
            }, [s("div", {
                staticClass: "col-sm-6"
            }, [s("div", {
                staticClass: "panel panel-primary"
            }, [t._m(0), t._v(" "), s("line-example")], 1), t._v(" "), s("div", {
                staticClass: "panel panel-primary"
            }, [t._m(1), t._v(" "), s("reactive-example")], 1)]), t._v(" "), s("div", {
                staticClass: "col-sm-6"
            }, [s("div", {
                staticClass: "panel panel-primary"
            }, [t._m(2), t._v(" "), s("doughnut-example")], 1), t._v(" "), s("div", {
                staticClass: "panel panel-primary"
            }, [t._m(3), t._v(" "), s("pie-example")], 1)])])])
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "panel-heading"
            }, [s("h3", [t._v("Linechart")])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "panel-heading"
            }, [s("h3", [t._v("Barchart with reactive mixing for live data")])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "panel-heading"
            }, [s("h3", [t._v("Doughnutchart")])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "panel-heading"
            }, [s("h3", [t._v("Piechart")])])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement;
            t._self._c || a;
            return t._m(0)
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "blank"
                }
            }, [s("div", {
                staticClass: "animated fadeIn"
            })])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement;
            t._self._c || a;
            return t._m(0)
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "elements"
                }
            }, [s("div", {
                staticClass: "animated fadeIn"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-md-6"
            }, [s("div", {
                staticClass: "panel panel-info"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Default Form\n\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("form", [s("div", {
                staticClass: "form-group"
            }, [s("label", {
                attrs: {
                    for: "exampleInputEmail1"
                }
            }, [t._v("Email address")]), t._v(" "), s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "email",
                    id: "exampleInputEmail1",
                    placeholder: "Enter email"
                }
            })]), t._v(" "), s("div", {
                staticClass: "form-group"
            }, [s("label", {
                attrs: {
                    for: "exampleInputPassword1"
                }
            }, [t._v("Password")]), t._v(" "), s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "password",
                    id: "exampleInputPassword1",
                    placeholder: "Password"
                }
            })]), t._v(" "), s("div", {
                staticClass: "checkbox"
            }, [s("label", [s("input", {
                attrs: {
                    type: "checkbox"
                }
            }), t._v(" Remember me\n\t\t\t\t\t\t\t")])]), t._v(" "), s("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "submit"
                }
            }, [t._v("Submit")])])])]), t._v(" "), s("div", {
                staticClass: "panel panel-success"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Horizontal Form\n\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("form", {
                staticClass: "form-horizontal"
            }, [s("div", {
                staticClass: "form-group"
            }, [s("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {
                    for: "inputEmail3"
                }
            }, [t._v("Email")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "email",
                    id: "inputEmail3",
                    placeholder: "Email"
                }
            })])]), t._v(" "), s("div", {
                staticClass: "form-group"
            }, [s("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {
                    for: "inputPassword3"
                }
            }, [t._v("Password")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "password",
                    id: "inputPassword3",
                    placeholder: "Password"
                }
            })])]), t._v(" "), s("div", {
                staticClass: "form-group"
            }, [s("div", {
                staticClass: "col-sm-offset-2 col-sm-10"
            }, [s("div", {
                staticClass: "checkbox"
            }, [s("label", [s("input", {
                attrs: {
                    type: "checkbox"
                }
            }), t._v(" Remember me\n\t\t\t\t\t\t\t\t\t")])])])]), t._v(" "), s("div", {
                staticClass: "form-group"
            }, [s("div", {
                staticClass: "col-sm-offset-2 col-sm-10"
            }, [s("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "submit"
                }
            }, [t._v("Sign in")]), t._v("  \n\t\t\t\t\t\t\t")])])])])]), t._v(" "), s("div", {
                staticClass: "panel panel-primary"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Inline Form\n\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("form", {
                staticClass: "form-inline inline-block"
            }, [s("div", {
                staticClass: "form-group col-xs-5"
            }, [s("label", {
                attrs: {
                    for: "exampleInputName2"
                }
            }, [t._v("Name")]), t._v(" "), s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    id: "exampleInputName2",
                    placeholder: "Jane Doe"
                }
            })]), t._v(" "), s("div", {
                staticClass: "form-group col-xs-5"
            }, [s("label", {
                attrs: {
                    for: "exampleInputEmail2"
                }
            }, [t._v("Email")]), t._v(" "), s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "email",
                    id: "exampleInputEmail2",
                    placeholder: "jane.doe@example.com"
                }
            })]), t._v(" "), s("button", {
                staticClass: "btn btn-default col-xs-2",
                attrs: {
                    type: "submit"
                }
            }, [t._v("Send")])])])])]), t._v(" "), s("div", {
                staticClass: "col-md-6"
            }, [s("div", {
                staticClass: "panel panel-danger"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Inline Underline Form\n\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("form", {
                staticClass: "form-inline"
            }, [s("div", {
                staticClass: "form-group"
            }, [s("label", {
                attrs: {
                    for: "exampleInputName2"
                }
            }, [t._v("Name")]), t._v(" "), s("input", {
                staticClass: "form-control underline",
                attrs: {
                    type: "text",
                    id: "exampleInputName2",
                    placeholder: "Jane Doe"
                }
            })]), t._v(" "), s("div", {
                staticClass: "form-group"
            }, [s("label", {
                attrs: {
                    for: "exampleInputEmail2"
                }
            }, [t._v("Email")]), t._v(" "), s("input", {
                staticClass: "form-control underline",
                attrs: {
                    type: "email",
                    id: "exampleInputEmail2",
                    placeholder: "jane.doe@example.com"
                }
            })]), t._v(" "), s("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "submit"
                }
            }, [t._v("Send invitation")])])])])]), t._v(" "), s("div", {
                staticClass: "col-md-6"
            }, [s("div", {
                staticClass: "panel panel-warning"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Underline Default Form\n\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("form", [s("div", {
                staticClass: "form-group"
            }, [s("label", {
                attrs: {
                    for: "exampleInputEmail1"
                }
            }, [t._v("Email address")]), t._v(" "), s("input", {
                staticClass: "form-control underline",
                attrs: {
                    type: "email",
                    id: "exampleInputEmail1",
                    placeholder: "Enter email"
                }
            })]), t._v(" "), s("div", {
                staticClass: "form-group"
            }, [s("label", {
                attrs: {
                    for: "exampleInputPassword1"
                }
            }, [t._v("Password")]), t._v(" "), s("input", {
                staticClass: "form-control underline",
                attrs: {
                    type: "password",
                    id: "exampleInputPassword1",
                    placeholder: "Password"
                }
            })]), t._v(" "), s("div", {
                staticClass: "checkbox"
            }, [s("label", [s("input", {
                attrs: {
                    type: "checkbox"
                }
            }), t._v(" Remember me\n\t\t\t\t\t\t\t")])]), t._v(" "), s("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "submit"
                }
            }, [t._v("Submit")])])])]), t._v(" "), s("div", {
                staticClass: "panel panel-info"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Horizontal Underline Form\n\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("form", [s("div", {
                staticClass: "form-group"
            }, [s("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {
                    for: "inputEmail3"
                }
            }, [t._v("Email")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("input", {
                staticClass: "form-control underline",
                attrs: {
                    type: "email",
                    id: "inputEmail3",
                    placeholder: "Email"
                }
            })])]), t._v(" "), s("div", {
                staticClass: "form-group"
            }, [s("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {
                    for: "inputPassword3"
                }
            }, [t._v("Password")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("input", {
                staticClass: "form-control underline",
                attrs: {
                    type: "password",
                    id: "inputPassword3",
                    placeholder: "Password"
                }
            })])]), t._v(" "), s("div", {
                staticClass: "form-group"
            }, [s("div", {
                staticClass: "col-sm-offset-2 col-sm-10"
            }, [s("div", {
                staticClass: "checkbox"
            }, [s("label", [s("input", {
                attrs: {
                    type: "checkbox"
                }
            }), t._v(" Remember me\n\t\t\t\t\t\t\t\t\t")])])])]), t._v(" "), s("div", {
                staticClass: "form-group"
            }, [s("div", {
                staticClass: "col-sm-offset-2 col-sm-10"
            }, [s("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "submit"
                }
            }, [t._v("Sign in")])])])])])])])])])])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "full-calendar-header"
            }, [s("div", {
                staticClass: "header-center"
            }, [s("span", {
                staticClass: "prev-month",
                on: {
                    click: function(a) {
                        a.stopPropagation(), t.goPrev(a)
                    }
                }
            }, [t._v(t._s(t.leftArrow))]), t._v(" "), s("span", {
                staticClass: "title",
                staticStyle: {
                    "margin-left": "20px"
                }
            }, [t._v(t._s(t.title))]), t._v(" "), s("span", {
                staticClass: "next-month",
                on: {
                    click: function(a) {
                        a.stopPropagation(), t.goNext(a)
                    }
                }
            }, [t._v(t._s(t.rightArrow))])])])
        },
        staticRenderFns: []
    }
}, function(t, a, s) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                e = t._self._c || a;
            return e("div", {
                staticClass: "navbar navbar-fixed-top"
            }, [e("nav", {
                staticClass: "navbar topnav-navbar navbar-fixed-top",
                attrs: {
                    role: "navigation"
                }
            }, [e("div", {
                staticClass: "navbar-header text-center"
            }, [t._m(0), t._v(" "), e("span", {
                staticClass: "navbar-brand",
                staticStyle: {
                    float: "none !important"
                },
                attrs: {
                    "ui-sref": "home"
                }
            }, [t._v(t._s(t.$t("message.title")))])]), t._v(" "), e("div", {
                staticClass: "collapse navbar-collapse"
            }, [t._m(1), t._v(" "), e("ul", {
                staticClass: "nav navbar-nav"
            }, [e("li", {
                staticClass: "dropdown",
                attrs: {
                    "data-toggle": "dropdown",
                    "on-toggle": "toggled(open)"
                }
            }, [t._m(2), t._v(" "), e("ul", {
                staticClass: "dropdown-menu animated fadeIn"
            }, [e("li", {
                staticClass: "messages-top text-center"
            }, [t._v("\n    \t\t\t\t\t\t" + t._s(t.$t("message.topnav1")) + "\n    \t\t\t\t\t")]), t._v(" "), e("li", {
                staticClass: "dropdown-messages"
            }, [e("a", {
                attrs: {
                    href: "#"
                }
            }, [e("div", {
                staticClass: "message-sender"
            }, [t._v("\n    \t\t\t\t\t\t\t\tMax\n    \t\t\t\t\t\t\t")]), t._v(" "), e("div", {
                staticClass: "message-header"
            }, [t._v("\n    \t\t\t\t\t\t\t\t" + t._s(t.$t("message.topnavheader1")) + "\n    \t\t\t\t\t\t\t")])])]), t._v(" "), e("li", {
                staticClass: "dropdown-messages"
            }, [e("a", {
                attrs: {
                    href: "#"
                }
            }, [e("div", {
                staticClass: "message-sender"
            }, [t._v("\n    \t\t\t\t\t\t\t\tJobs\n    \t\t\t\t\t\t\t")]), t._v(" "), e("div", {
                staticClass: "message-header"
            }, [t._v("\n    \t\t\t\t\t\t\t\t" + t._s(t.$t("message.topnavheader2")) + "\n    \t\t\t\t\t\t\t")])])]), t._v(" "), e("li", {
                staticClass: "dropdown-messages"
            }, [e("a", {
                attrs: {
                    href: "#"
                }
            }, [e("div", {
                staticClass: "message-sender"
            }, [t._v("\n    \t\t\t\t\t\t\t\tBill\n    \t\t\t\t\t\t\t")]), t._v(" "), e("div", {
                staticClass: "message-header"
            }, [t._v("\n    \t\t\t\t\t\t\t\t" + t._s(t.$t("message.topnavheader3")) + "\n    \t\t\t\t\t\t\t")])])]), t._v(" "), e("li", {
                staticClass: "dropdown-messages"
            }, [e("a", {
                attrs: {
                    href: "#"
                }
            }, [e("div", {
                staticClass: "message-sender"
            }, [t._v("\n    \t\t\t\t\t\t\t\tMark\n    \t\t\t\t\t\t\t")]), t._v(" "), e("div", {
                staticClass: "message-header"
            }, [t._v("\n    \t\t\t\t\t\t\t\t" + t._s(t.$t("message.topnavheader4")) + "\n    \t\t\t\t\t\t\t")])])])])]), t._v(" "), e("li", {
                staticClass: "dropdown",
                attrs: {
                    "data-toggle": "dropdown",
                    "on-toggle": "toggled(open)"
                }
            }, [t._m(3), t._v(" "), e("ul", {
                staticClass: "dropdown-menu animated fadeIn"
            }, [e("li", {
                staticClass: "notification-header text-center"
            }, [t._v("\n    \t\t\t\t\t\t" + t._s(t.$t("message.threenotifications")) + "\n    \t\t\t\t\t")]), t._v(" "), e("li", {
                staticClass: "dropdown-notifications"
            }, [e("a", {
                attrs: {
                    href: "#"
                }
            }, [e("div", {
                staticClass: "notification"
            }, [e("i", {
                staticClass: "fa fa-thumbs-up"
            }), t._v(t._s(t.$t("message.runuma")) + "\n    \t\t\t\t\t\t\t")])])]), t._v(" "), e("li", {
                staticClass: "dropdown-notifications"
            }, [e("a", {
                attrs: {
                    href: "#"
                }
            }, [e("div", {
                staticClass: "notification"
            }, [e("i", {
                staticClass: "fa fa-thumbs-up"
            }), t._v(t._s(t.$t("message.harshita")) + "\n    \t\t\t\t\t\t\t")])])]), t._v(" "), e("li", {
                staticClass: "dropdown-notifications"
            }, [e("a", {
                attrs: {
                    href: "#"
                }
            }, [e("div", {
                staticClass: "notification"
            }, [e("i", {
                staticClass: "fa fa-user-plus"
            }), t._v(t._s(t.$t("message.archana")) + "\n    \t\t\t\t\t\t\t")])])]), t._v(" "), e("li", {
                staticClass: "dropdown-notifications"
            }, [e("a", {
                attrs: {
                    href: "#"
                }
            }, [e("div", {
                staticClass: "notification"
            }, [e("i", {
                staticClass: "fa fa-user-times"
            }), t._v(t._s(t.$t("message.animesh")) + "\n    \t\t\t\t\t\t\t")])])])])])]), t._v(" "), e("ul", {
                staticClass: "nav navbar-nav pull-right navbar-right"
            }, [e("li", [e("a", {
                attrs: {
                    onclick: "toggleSide()"
                }
            }, [e("span", [t._v(t._s(t.$t("message.ltr-rtl")))])])]), t._v(" "), e("li", {
                staticClass: "dropdown",
                attrs: {
                    "on-toggle": "toggled(open)"
                }
            }, [e("a", {
                staticClass: "dropdown-toggle",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [e("span", [t._v(t._s(t.$t("message.language")))])]), t._v(" "), e("ul", {
                staticClass: "dropdown-menu lang pull-right animated fadeIn"
            }, [e("li", [e("a", {
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(a) {
                        t.changeLanguage("en")
                    }
                }
            }, [t._v("English")])]), t._v(" "), e("li", [e("a", {
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(a) {
                        t.changeLanguage("de")
                    }
                }
            }, [t._v("Dutch")])]), t._v(" "), e("li", [e("a", {
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(a) {
                        t.changeLanguage("ur")
                    }
                }
            }, [t._v("اردو")])]), t._v(" "), e("li", [e("a", {
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(a) {
                        t.changeLanguage("hn")
                    }
                }
            }, [t._v("हिन्दी")])])])]), t._v(" "), e("li", {
                staticClass: "dropdown admin-dropdown",
                attrs: {
                    "on-toggle": "toggled(open)"
                }
            }, [e("a", {
                staticClass: "dropdown-toggle",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [e("img", {
                staticClass: "topnav-img",
                attrs: {
                    src: s(6),
                    alt: ""
                }
            }), t._v(" "), e("span", {
                staticClass: "hidden-sm"
            }, [t._v(t._s(t.$t("message.ani-pascal")))])]), t._v(" "), e("ul", {
                staticClass: "dropdown-menu pull-right animated fadeIn"
            }, [e("li", {
                attrs: {
                    id: "pop-dd"
                }
            }, [e("router-link", {
                staticClass: "r-link",
                attrs: {
                    to: "/dashboard/profile"
                }
            }, [e("a", {
                attrs: {
                    "ui-sref": "profile"
                }
            }, [t._v(t._s(t.$t("message.profilee")))])])], 1), t._v(" "), e("li", {
                attrs: {
                    id: "pop-dd"
                }
            }, [e("router-link", {
                staticClass: "r-link",
                attrs: {
                    to: "/"
                }
            }, [e("a", {
                attrs: {
                    "ui-sref": "login"
                }
            }, [t._v(t._s(t.$t("message.logout")))])])], 1)])])]), t._v(" "), e("a", {
                staticClass: "btn btn-primary btn-rounded pull-right btn-bordered visible-lg",
                staticStyle: {
                    margin: "8px 10px 0 0"
                },
                attrs: {
                    href: "https://www.strapui.com/themes/ani-vuejs-theme/"
                }
            }, [t._v(t._s(t.$t("message.buynow")))])]), t._v(" "), e("ul", {
                staticClass: "nav navbar-nav pull-right hidd"
            }, [e("li", {
                staticClass: "dropdown admin-dropdown",
                attrs: {
                    "on-toggle": "toggled(open)"
                }
            }, [t._m(4), t._v(" "), e("ul", {
                staticClass: "dropdown-menu pull-right animated fadeIn"
            }, [e("li", {
                attrs: {
                    id: "pop-dd"
                }
            }, [e("router-link", {
                attrs: {
                    to: "/dashboard/profile"
                }
            }, [e("a", {
                attrs: {
                    "ui-sref": "profile"
                }
            }, [t._v(t._s(t.$t("message.profilee")))])])], 1), t._v(" "), e("li", {
                attrs: {
                    id: "pop-dd"
                }
            }, [e("router-link", {
                attrs: {
                    to: "/"
                }
            }, [e("a", {
                attrs: {
                    "ui-sref": "login"
                }
            }, [t._v(t._s(t.$t("message.logout")))])])], 1)])])])])])
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("button", {
                staticClass: "navbar-toggle pull-left",
                attrs: {
                    type: "button",
                    onclick: "toggleBar()"
                }
            }, [s("span", {
                staticClass: "sr-only"
            }, [t._v("Toggle navigation")]), t._v(" "), s("span", {
                staticClass: "icon-bar",
                staticStyle: {
                    "background-color": "#fff"
                }
            }), t._v(" "), s("span", {
                staticClass: "icon-bar",
                staticStyle: {
                    "background-color": "#fff"
                }
            }), t._v(" "), s("span", {
                staticClass: "icon-bar",
                staticStyle: {
                    "background-color": "#fff"
                }
            })])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("form", {
                staticClass: "navbar-form navbar-left",
                attrs: {
                    role: "search"
                }
            }, [s("i", {
                staticClass: "fa fa-search",
                attrs: {
                    "aria-hidden": "true"
                }
            }), t._v(" "), s("div", {
                staticClass: "form-group"
            }, [s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    placeholder: ""
                }
            })])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("a", {
                staticClass: "dropdown-toggle",
                attrs: {
                    href: "",
                    "data-toggle": "dropdown"
                }
            }, [s("i", {
                staticClass: "fa fa-envelope",
                attrs: {
                    "aria-hidden": "true"
                }
            }), s("span", {
                staticClass: "badge badge-green"
            }, [t._v("5")])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("a", {
                staticClass: "dropdown-toggle",
                attrs: {
                    href: "",
                    "data-toggle": "dropdown"
                }
            }, [s("i", {
                staticClass: "fa fa-bell",
                attrs: {
                    "aria-hidden": "true"
                }
            }), s("span", {
                staticClass: "badge badge-red"
            }, [t._v("13")])])
        }, function() {
            var t = this,
                a = t.$createElement,
                e = t._self._c || a;
            return e("a", {
                staticClass: "dropdown-toggle animated fadeIn",
                attrs: {
                    href: "",
                    "data-toggle": "dropdown"
                }
            }, [e("img", {
                staticClass: "topnav-img",
                attrs: {
                    src: s(6),
                    alt: ""
                }
            })])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "ltr",
                attrs: {
                    id: "home"
                }
            }, [s("div", {
                staticClass: "dashboard-body animated fadeIn"
            }, [s("div", {}, [s("div", {
                staticClass: "col-md-3"
            }, [s("div", {
                staticClass: "panel stats-panel panel-xs"
            }, [s("Stats", {
                attrs: {
                    title: "75%",
                    progress: "70%",
                    info: t.$t("message.stat1"),
                    color: "#5bc0de",
                    icon: "fa-cloud-upload"
                }
            })], 1), t._v(" "), s("div", {
                staticClass: "panel stats-panel panel-xs"
            }, [s("Stats", {
                attrs: {
                    title: "85%",
                    progress: "85%",
                    info: t.$t("message.stat2"),
                    color: "#5CB85C",
                    icon: "fa-heartbeat"
                }
            })], 1), t._v(" "), s("div", {
                staticClass: "panel stats-panel panel-xs"
            }, [s("Stats", {
                attrs: {
                    title: "12,351",
                    progress: "77%",
                    info: t.$t("message.stat3"),
                    color: "#DE6764",
                    icon: "fa-flag"
                }
            })], 1)]), t._v(" "), s("div", {
                staticClass: "col-md-6"
            }, [s("div", {
                staticClass: "panel panel-md"
            }, [s("div", {
                staticStyle: {
                    height: "281px !important"
                },
                attrs: {
                    id: "c3line"
                }
            }), t._v(" "), s("div", {
                staticClass: "c3line-data",
                staticStyle: {
                    position: "absolute",
                    top: "0"
                }
            }, [s("div", {
                staticClass: "usr-rf col-xs-4",
                staticStyle: {
                    color: "#1F77B4"
                }
            }, [s("h2", [t._v("55%")]), t._v(" "), s("p", [t._v(t._s(t.$t("message.chart1")))])]), t._v(" "), s("div", {
                staticClass: "usr-rt col-xs-4",
                staticStyle: {
                    color: "#2CA02C"
                }
            }, [s("h2", [t._v("25%")]), t._v(" "), s("p", [t._v(t._s(t.$t("message.chart2")))])]), t._v(" "), s("div", {
                staticClass: "usr-nw col-xs-4",
                staticStyle: {
                    color: "#FF7F0E"
                }
            }, [s("h2", [t._v("22%")]), t._v(" "), s("p", [t._v(t._s(t.$t("message.chart3")))])])])])]), t._v(" "), t._m(0)]), t._v(" "), s("div", {}, [t._m(1), t._v(" "), s("div", {
                staticClass: "col-lg-4 col-md-6",
                staticStyle: {
                    "margin-top": "5px !important"
                }
            }, [s("div", {
                staticClass: "todo-container panel panel-lg panel-danger"
            }, [s("Todos")], 1)])])])])
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "col-md-3"
            }, [s("div", {
                staticClass: "panel panel-sm"
            }, [s("div", {
                staticClass: "text-center",
                attrs: {
                    id: "c3bar"
                }
            })]), t._v(" "), s("div", {
                staticClass: "panel panel-sm"
            }, [s("h5", {
                staticStyle: {
                    position: "absolute",
                    color: "#666",
                    margin: "15px",
                    "font-weight": "700"
                }
            }, [t._v("TOTAL VIEWS")]), t._v(" "), s("h5", {
                staticStyle: {
                    position: "absolute",
                    color: "#3CA2E0",
                    margin: "15px",
                    "margin-top": "40px",
                    "font-weight": "700"
                }
            }, [t._v("22068")]), t._v(" "), s("div", {
                staticClass: "pull-right",
                attrs: {
                    id: "c3pie"
                }
            })])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "col-lg-8 col-md-6",
                staticStyle: {
                    "margin-top": "5px !important"
                }
            }, [s("div", {
                staticClass: "panel panel-lg"
            }, [s("div", {
                staticStyle: {
                    height: "350px"
                },
                attrs: {
                    id: "vmap"
                }
            })])])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "panels"
                }
            }, [s("div", {
                staticClass: "animated fadeIn"
            }, [s("div", {
                staticClass: "row"
            }, [t._m(0), t._v(" "), s("div", {
                staticClass: "col-md-6"
            }, [s("div", {
                staticClass: "panel panel-info"
            }, [t._m(1), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("blockquote", [t._v("Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible. "), s("small", [t._v(" Francis of Assisi ")])]), t._v(" "), s("blockquote", {
                staticClass: "pull-right"
            }, [t._v("Don't judge each day by the harvest you reap but by the seeds that you plant."), s("small", [t._v("Robert Louis Stevenson")])])], 1)]), t._v(" "), t._m(2), t._v(" "), t._m(3)])])])])
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "col-md-6"
            }, [s("div", {
                staticClass: "panel panel-primary"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Primary title\n  \t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [t._v("\n  \t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n  \t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n  \t\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n  \t\t\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n  \t\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n  \t\t\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  \t\t\t\t\t"), s("div", {
                staticClass: "panel-btn"
            }, [s("button", {
                staticClass: "btn btn-primary pull-right btn-rounded",
                attrs: {
                    type: "button"
                }
            }, [t._v("\n  \t\t\t\t\t\tClick here!")])])])]), t._v(" "), s("div", {
                staticClass: "panel panel-danger img-panel"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Danger Panel\n  \t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("h4", [t._v("Lorem Ipsum")]), t._v(" "), s("img", {
                staticClass: "img-responsive img-thumbnail pull-right",
                attrs: {
                    src: "/static/images/dog.jpg",
                    alt: ""
                }
            }), t._v("\n  \t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n  \t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n  \t\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n  \t\t\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n  \t\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n  \t\t\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  \t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel panel-success"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Header\n  \t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [t._v("\n  \t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n  \t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n  \t\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n  \t\t\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n  \t\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n  \t\t\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  \t\t\t\t")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Hello World!\n  \t\t\t\t\t\t")])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "panel panel-warning"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Warning\n  \t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [t._v("\n  \t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n  \t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n  \t\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n  \t\t\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n  \t\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n  \t\t\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  \t\t\t\t")])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Default Header\n  \t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [t._v("\n  \t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n  \t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n  \t\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n  \t\t\t\t\tconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n  \t\t\t\t\tcillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n  \t\t\t\t\tproident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  \t\t\t\t")])]);
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "ltr",
                attrs: {
                    id: "forms"
                }
            }, [s("router-view")], 1)
        },
        staticRenderFns: []
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement;
            t._self._c || a;
            return t._m(0)
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "table"
                }
            }, [s("div", {
                staticClass: "animated fadeIn"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-md-6"
            }, [s("div", {
                staticClass: "panel panel-primary"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Regular Table\n  \t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("table", {
                staticClass: "table "
            }, [s("thead", [s("tr", [s("th", [t._v("Name")]), t._v(" "), s("th", [t._v("Email")]), t._v(" "), s("th", [t._v("Address")])])]), t._v(" "), s("tbody", [s("tr", [s("td", [t._v("John")]), t._v(" "), s("td", [t._v("john@gmail.com")]), t._v(" "), s("td", [t._v("London, UK")])]), t._v(" "), s("tr", [s("td", [t._v("Andy")]), t._v(" "), s("td", [t._v("andygmail.com")]), t._v(" "), s("td", [t._v("Merseyside, UK")])]), t._v(" "), s("tr", [s("td", [t._v("Frank")]), t._v(" "), s("td", [t._v("frank@gmail.com")]), t._v(" "), s("td", [t._v("Southampton, UK")])])])])])])]), t._v(" "), s("div", {
                staticClass: "col-md-6"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Bordered Table\n  \t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("table", {
                staticClass: "table table-bordered"
            }, [s("thead", [s("tr", [s("th", [t._v("Name")]), t._v(" "), s("th", [t._v("Email")]), t._v(" "), s("th", [t._v("Address")])])]), t._v(" "), s("tbody", [s("tr", [s("td", [t._v("John")]), t._v(" "), s("td", [t._v("john@gmail.com")]), t._v(" "), s("td", [t._v("London, UK")])]), t._v(" "), s("tr", [s("td", [t._v("Andy")]), t._v(" "), s("td", [t._v("andygmail.com")]), t._v(" "), s("td", [t._v("Merseyside, UK")])]), t._v(" "), s("tr", [s("td", [t._v("Frank")]), t._v(" "), s("td", [t._v("frank@gmail.com")]), t._v(" "), s("td", [t._v("Southampton, UK")])])])])])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-md-6"
            }, [s("div", {
                staticClass: "panel panel-info"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Striped Table\n  \t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("table", {
                staticClass: "table table-striped"
            }, [s("thead", [s("tr", [s("th", [t._v("Name")]), t._v(" "), s("th", [t._v("Email")]), t._v(" "), s("th", [t._v("Address")])])]), t._v(" "), s("tbody", [s("tr", [s("td", [t._v("John")]), t._v(" "), s("td", [t._v("john@gmail.com")]), t._v(" "), s("td", [t._v("London, UK")])]), t._v(" "), s("tr", [s("td", [t._v("Andy")]), t._v(" "), s("td", [t._v("andygmail.com")]), t._v(" "), s("td", [t._v("Merseyside, UK")])]), t._v(" "), s("tr", [s("td", [t._v("Frank")]), t._v(" "), s("td", [t._v("frank@gmail.com")]), t._v(" "), s("td", [t._v("Southampton, UK")])])])])])])]), t._v(" "), s("div", {
                staticClass: "col-md-6"
            }, [s("div", {
                staticClass: "panel panel-success"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Hover Table\n  \t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("table", {
                staticClass: "table table-hover"
            }, [s("thead", [s("tr", [s("th", [t._v("Name")]), t._v(" "), s("th", [t._v("Email")]), t._v(" "), s("th", [t._v("Address")])])]), t._v(" "), s("tbody", [s("tr", [s("td", [t._v("John")]), t._v(" "), s("td", [t._v("john@gmail.com")]), t._v(" "), s("td", [t._v("London, UK")])]), t._v(" "), s("tr", [s("td", [t._v("Andy")]), t._v(" "), s("td", [t._v("andygmail.com")]), t._v(" "), s("td", [t._v("Merseyside, UK")])]), t._v(" "), s("tr", [s("td", [t._v("Frank")]), t._v(" "), s("td", [t._v("frank@gmail.com")]), t._v(" "), s("td", [t._v("Southampton, UK")])])])])])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-md-6"
            }, [s("div", {
                staticClass: "panel panel-danger"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Condensed Table\n  \t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("table", {
                staticClass: "table table-condensed"
            }, [s("thead", [s("tr", [s("th", [t._v("Name")]), t._v(" "), s("th", [t._v("Email")]), t._v(" "), s("th", [t._v("Address")])])]), t._v(" "), s("tbody", [s("tr", [s("td", [t._v("John")]), t._v(" "), s("td", [t._v("john@gmail.com")]), t._v(" "), s("td", [t._v("London, UK")])]), t._v(" "), s("tr", [s("td", [t._v("Andy")]), t._v(" "), s("td", [t._v("andygmail.com")]), t._v(" "), s("td", [t._v("Merseyside, UK")])]), t._v(" "), s("tr", [s("td", [t._v("Frank")]), t._v(" "), s("td", [t._v("frank@gmail.com")]), t._v(" "), s("td", [t._v("Southampton, UK")])])])])])])]), t._v(" "), s("div", {
                staticClass: "col-md-6"
            }, [s("div", {
                staticClass: "panel panel-warning"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Condensed, Bordered, Striped Table\n  \t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("table", {
                staticClass: "table table-condensed table-bordered table-striped"
            }, [s("thead", [s("tr", [s("th", [t._v("Name")]), t._v(" "), s("th", [t._v("Email")]), t._v(" "), s("th", [t._v("Address")])])]), t._v(" "), s("tbody", [s("tr", [s("td", [t._v("John")]), t._v(" "), s("td", [t._v("john@gmail.com")]), t._v(" "), s("td", [t._v("London, UK")])]), t._v(" "), s("tr", [s("td", [t._v("Andy")]), t._v(" "), s("td", [t._v("andygmail.com")]), t._v(" "), s("td", [t._v("Merseyside, UK")])]), t._v(" "), s("tr", [s("td", [t._v("Frank")]), t._v(" "), s("td", [t._v("frank@gmail.com")]), t._v(" "), s("td", [t._v("Southampton, UK")])])])])])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-sm-12"
            }, [s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Coloured Table\n  \t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("table", {
                staticClass: "table table-bordered white"
            }, [s("thead", [s("tr", [s("th", [t._v("Name")]), t._v(" "), s("th", [t._v("Email")]), t._v(" "), s("th", [t._v("Address")])])]), t._v(" "), s("tbody", [s("tr", {
                staticClass: "success"
            }, [s("td", [t._v("John")]), t._v(" "), s("td", [t._v("john@gmail.com")]), t._v(" "), s("td", [t._v("London, UK")])]), t._v(" "), s("tr", {
                staticClass: "info"
            }, [s("td", [t._v("Andy")]), t._v(" "), s("td", [t._v("andy@gmail.com")]), t._v(" "), s("td", [t._v("Merseyside, UK")])]), t._v(" "), s("tr", {
                staticClass: "warning"
            }, [s("td", [t._v("Frank")]), t._v(" "), s("td", [t._v("frank@gmail.com")]), t._v(" "), s("td", [t._v("Southampton, UK")])]), t._v(" "), s("tr", {
                staticClass: "danger"
            }, [s("td", [t._v("Rickie")]), t._v(" "), s("td", [t._v("rickie@gmail.com")]), t._v(" "), s("td", [t._v("Burnley, UK")])])])])])])])])])])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "ltr",
                attrs: {
                    id: "ui-interface"
                }
            }, [s("router-view")], 1)
        },
        staticRenderFns: []
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "typography"
                }
            }, [s("div", {
                staticClass: "animated fadeIn"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-lg-8 col-md-6"
            }, [t._m(0), t._v(" "), s("div", {
                staticClass: "panel panel-danger"
            }, [t._m(1), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("h4", [t._v("Default Blockquote")]), t._v(" "), s("blockquote", [s("p", [t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")])]), t._v(" "), s("h4", [t._v("Blockquote with Citation")]), t._v(" "), s("blockquote", [s("p", [t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")]), t._v(" "), s("small", [t._v("Someone famous in "), s("cite", {
                attrs: {
                    title: "Source Title"
                }
            }, [t._v("Source Title")])])]), t._v(" "), s("h4", [t._v("Right Aligned Blockquote")]), t._v(" "), s("blockquote", {
                staticClass: "pull-right"
            }, [s("p", [t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")])])], 1)]), t._v(" "), t._m(2), t._v(" "), t._m(3)]), t._v(" "), t._m(4)])])])
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "panel panel-primary"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Typography\n\t\t\t\t\t\t"), s("div", {
                staticClass: "panel-control pull-right"
            }, [s("a", {
                staticClass: "panelButton"
            }, [s("i", {
                staticClass: "fa fa-refresh"
            })]), t._v(" "), s("a", {
                staticClass: "panelButton"
            }, [s("i", {
                staticClass: "fa fa-minus"
            })]), t._v(" "), s("a", {
                staticClass: "panelButton"
            }, [s("i", {
                staticClass: "fa fa-remove"
            })])])])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("h1", [t._v("Heading 1 "), s("small", [t._v("Sub-heading")])]), t._v(" "), s("h2", [t._v("Heading 2 "), s("small", [t._v("Sub-heading")])]), t._v(" "), s("h3", [t._v("Heading 3 "), s("small", [t._v("Sub-heading")])]), t._v(" "), s("h4", [t._v("Heading 4 "), s("small", [t._v("Sub-heading")])]), t._v(" "), s("h5", [t._v("Heading 5 "), s("small", [t._v("Sub-heading")])]), t._v(" "), s("h6", [t._v("Heading 6 "), s("small", [t._v("Sub-heading")])]), t._v(" "), s("p", {
                staticClass: "lead"
            }, [t._v("This is an example of lead body copy.")]), t._v(" "), s("p", [t._v("This is an example of standard paragraph text. This is an example of "), s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("link anchor text")]), t._v(" within body copy.")]), t._v(" "), s("p", [s("small", [t._v("This is an example of small, fine print text.")])]), t._v(" "), s("p", [s("strong", [t._v("This is an example of strong, bold text.")])]), t._v(" "), s("p", [s("em", [t._v("This is an example of emphasized, italic text.")])]), t._v(" "), s("br")])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Blockquotes\n\t\t\t\t\t\t")])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "panel panel-default"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Wells\n\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "well"
            }, [t._v("\n\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam perferendis molestias, quibusdam veritatis laborum eius ex. Quaerat harum voluptatibus recusandae consequatur? Id, repudiandae! Dolor blanditiis voluptate porro, perferendis voluptas, ad!\n\t\t\t\t\t")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "panel panel-warning"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Code\n\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("p", [t._v("This is an example of an inline code element within body copy. Wrap inline code within a "), s("code", [t._v("<code>...</code>")]), t._v("tag.")]), t._v(" "), s("pre", {
                staticClass: "pre-code"
            }, [t._v("This is an example of preformatted text.")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "col-lg-4 col-md-6"
            }, [s("div", {
                staticClass: "panel panel-info"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Unordered Lists\n\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("ul", [s("li", [t._v("Lorem ipsum dolor sit amet, consectetur ")]), t._v(" "), s("li", [t._v("elit. Necessitatibus quidem similique")]), t._v(" "), s("li", [t._v("lorem ipsum dolor sit amet\n\t\t\t\t\t\t\t"), s("ul", [s("li", [t._v("on debitis")]), t._v(" "), s("li", [t._v("error odio")]), t._v(" "), s("li", [t._v(" n dolore magni")])])]), t._v(" "), s("li", [t._v("List Item")])])])]), t._v(" "), s("div", {
                staticClass: "panel panel-warning"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Ordered Lists\n\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("ol", [s("li", [t._v("List Item lorem ipsum dolor")]), t._v(" "), s("li", [t._v("List Item lorem ipsum dolor")]), t._v(" "), s("li", [t._v("List Item lorem ipsum dolor")]), t._v(" "), s("li", [t._v("List Item lorem ipsum dolor")])])])]), t._v(" "), s("div", {
                staticClass: "panel panel-primary"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Unstyled List\n\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("ul", {
                staticClass: "list-unstyled"
            }, [s("li", [t._v("List Item lorem ipsum")]), t._v(" "), s("li", [t._v("List Item lorem ipsum")]), t._v(" "), s("li", [t._v("List Item lorem ipsum")])])])]), t._v(" "), s("div", {
                staticClass: "panel panel-danger"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Inline List\n\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("ul", {
                staticClass: "list-inline"
            }, [s("li", [t._v("List Item")]), t._v(" "), s("li", [t._v("List Item")]), t._v(" "), s("li", [t._v("List Item")])])])]), t._v(" "), s("div", {
                staticClass: "panel panel-info"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Emphasis Classes\n\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("p", {
                staticClass: "text-muted"
            }, [t._v("This is an example of muted text.")]), t._v(" "), s("p", {
                staticClass: "text-primary"
            }, [t._v("This is an example of primary text.")]), t._v(" "), s("p", {
                staticClass: "text-success"
            }, [t._v("This is an example of success text.")]), t._v(" "), s("p", {
                staticClass: "text-info"
            }, [t._v("This is an example of info text.")]), t._v(" "), s("p", {
                staticClass: "text-warning"
            }, [t._v("This is an example of warning text.")]), t._v(" "), s("p", {
                staticClass: "text-danger"
            }, [t._v("This is an example of danger text.")])])]), t._v(" "), s("div", {
                staticClass: "panel panel-primary"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Alignment Helpers\n\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("p", {
                staticClass: "text-left"
            }, [t._v("Left aligned text.")]), t._v(" "), s("p", {
                staticClass: "text-center"
            }, [t._v("Center aligned text.")]), t._v(" "), s("p", {
                staticClass: "text-right"
            }, [t._v("Right aligned text.")])])])])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "calendar"
                }
            }, [s("div", {
                staticClass: "calendar-plugin animated fadeIn"
            }, [s("VC", {
                staticClass: "test-fc",
                attrs: {
                    events: t.fcEvents,
                    "first-day": "1",
                    lang: "en"
                },
                on: {
                    changeMonth: t.changeMonth,
                    eventClick: t.eventClick,
                    dayClick: t.dayClick,
                    moreClick: t.moreClick
                }
            })], 1)])
        },
        staticRenderFns: []
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "dropdown"
                }
            }, [s("div", {
                staticClass: "animated fadeIn"
            }, [t._m(0), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-sm-12"
            }, [s("div", {
                staticClass: "panel panel-warning"
            }, [t._m(1), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "btn-group",
                attrs: {
                    "ng-controller": "DropdownCtrl",
                    dropdown: "",
                    "is-open": "status.isopen"
                }
            }, [s("Button", {
                staticClass: "btn btn-default dropdown-toggle",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [t._v("\n                          Button Dropdown\n                          "), s("span", {
                staticClass: "caret"
            })]), t._v(" "), t._m(2)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    "ng-controller": "DropdownCtrl",
                    dropdown: "",
                    "is-open": "status.isopen"
                }
            }, [s("Button", {
                staticClass: "btn btn-primary dropdown-toggle",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [t._v("\n                          Button Dropdown\n                          "), s("span", {
                staticClass: "caret"
            })]), t._v(" "), t._m(3)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    "ng-controller": "DropdownCtrl",
                    dropdown: "",
                    "is-open": "status.isopen"
                }
            }, [s("Button", {
                staticClass: "btn btn-success dropdown-toggle",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [t._v("\n                          Button Dropdown\n                          "), s("span", {
                staticClass: "caret"
            })]), t._v(" "), t._m(4)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    "ng-controller": "DropdownCtrl",
                    dropdown: "",
                    "is-open": "status.isopen"
                }
            }, [s("Button", {
                staticClass: "btn btn-warning dropdown-toggle",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [t._v("\n                          Button Dropdown\n                          "), s("span", {
                staticClass: "caret"
            })]), t._v(" "), t._m(5)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    "ng-controller": "DropdownCtrl",
                    dropdown: "",
                    "is-open": "status.isopen"
                }
            }, [s("Button", {
                staticClass: "btn btn-danger dropdown-toggle",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [t._v("\n                          Button Dropdown\n                          "), s("span", {
                staticClass: "caret"
            })]), t._v(" "), t._m(6)], 1), t._v(" "), s("hr"), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    "ng-controller": "DropdownCtrl",
                    dropdown: "",
                    "is-open": "status.isopen"
                }
            }, [s("Button", {
                staticClass: "btn btn-default btn-rounded dropdown-toggle",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [t._v("\n                          Button Dropdown\n                          "), s("span", {
                staticClass: "caret"
            })]), t._v(" "), t._m(7)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    "ng-controller": "DropdownCtrl",
                    dropdown: "",
                    "is-open": "status.isopen"
                }
            }, [s("Button", {
                staticClass: "btn btn-primary btn-rounded dropdown-toggle",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [t._v("\n                          Button Dropdown\n                          "), s("span", {
                staticClass: "caret"
            })]), t._v(" "), t._m(8)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    "ng-controller": "DropdownCtrl",
                    dropdown: "",
                    "is-open": "status.isopen"
                }
            }, [s("Button", {
                staticClass: "btn btn-info btn-rounded dropdown-toggle",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [t._v("\n                          Button Dropdown\n                          "), s("span", {
                staticClass: "caret"
            })]), t._v(" "), t._m(9)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    "ng-controller": "DropdownCtrl",
                    dropdown: "",
                    "is-open": "status.isopen"
                }
            }, [s("Button", {
                staticClass: "btn btn-warning btn-rounded dropdown-toggle",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [t._v("\n                          Button Dropdown\n                          "), s("span", {
                staticClass: "caret"
            })]), t._v(" "), t._m(10)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    "ng-controller": "DropdownCtrl",
                    dropdown: "",
                    "is-open": "status.isopen"
                }
            }, [s("Button", {
                staticClass: "btn btn-danger btn-rounded dropdown-toggle",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [t._v("\n                          Button Dropdown\n                          "), s("span", {
                staticClass: "caret"
            })]), t._v(" "), t._m(11)], 1), t._v(" "), s("hr"), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    "ng-controller": "DropdownCtrl",
                    dropdown: "",
                    "is-open": "status.isopen"
                }
            }, [s("Button", {
                staticClass: "btn btn-default btn-bordered dropdown-toggle",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [t._v("\n                          Button Dropdown\n                          "), s("span", {
                staticClass: "caret"
            })]), t._v(" "), t._m(12)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    "ng-controller": "DropdownCtrl",
                    dropdown: "",
                    "is-open": "status.isopen"
                }
            }, [s("Button", {
                staticClass: "btn btn-primary btn-bordered dropdown-toggle",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [t._v("\n                          Button Dropdown\n                          "), s("span", {
                staticClass: "caret"
            })]), t._v(" "), t._m(13)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    "ng-controller": "DropdownCtrl",
                    dropdown: "",
                    "is-open": "status.isopen"
                }
            }, [s("Button", {
                staticClass: "btn btn-success btn-bordered dropdown-toggle",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [t._v("\n                          Button Dropdown\n                          "), s("span", {
                staticClass: "caret"
            })]), t._v(" "), t._m(14)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    "ng-controller": "DropdownCtrl",
                    dropdown: "",
                    "is-open": "status.isopen"
                }
            }, [s("Button", {
                staticClass: "btn btn-warning btn-bordered dropdown-toggle",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [t._v("\n                          Button Dropdown\n                          "), s("span", {
                staticClass: "caret"
            })]), t._v(" "), t._m(15)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    "ng-controller": "DropdownCtrl",
                    dropdown: "",
                    "is-open": "status.isopen"
                }
            }, [s("Button", {
                staticClass: "btn btn-danger btn-bordered dropdown-toggle",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [t._v("\n                          Button Dropdown\n                          "), s("span", {
                staticClass: "caret"
            })]), t._v(" "), t._m(16)], 1)])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-sm-12"
            }, [s("div", {
                staticClass: "panel panel-success"
            }, [t._m(17), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "btn-group",
                attrs: {
                    dropdown: ""
                }
            }, [s("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "button"
                }
            }, [t._v("Action")]), t._v(" "), s("Button", {
                staticClass: "btn btn-default dropdown-toggle haha",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [s("span", {
                staticClass: "caret"
            }), t._v(" "), s("span", {
                staticClass: "sr-only"
            }, [t._v("Split button!")])]), t._v(" "), t._m(18)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    dropdown: ""
                }
            }, [s("button", {
                staticClass: "btn btn-success",
                attrs: {
                    type: "button"
                }
            }, [t._v("Action")]), t._v(" "), s("Button", {
                staticClass: "btn btn-success dropdown-toggle haha",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [s("span", {
                staticClass: "caret"
            }), t._v(" "), s("span", {
                staticClass: "sr-only"
            }, [t._v("Split button!")])]), t._v(" "), t._m(19)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    dropdown: ""
                }
            }, [s("button", {
                staticClass: "btn btn-primary",
                attrs: {
                    type: "button"
                }
            }, [t._v("Action")]), t._v(" "), s("Button", {
                staticClass: "btn btn-primary dropdown-toggle haha",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [s("span", {
                staticClass: "caret"
            }), t._v(" "), s("span", {
                staticClass: "sr-only"
            }, [t._v("Split button!")])]), t._v(" "), t._m(20)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    dropdown: ""
                }
            }, [s("button", {
                staticClass: "btn btn-warning",
                attrs: {
                    type: "button"
                }
            }, [t._v("Action")]), t._v(" "), s("Button", {
                staticClass: "btn btn-warning dropdown-toggle haha",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [s("span", {
                staticClass: "caret"
            }), t._v(" "), s("span", {
                staticClass: "sr-only"
            }, [t._v("Split button!")])]), t._v(" "), t._m(21)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    dropdown: ""
                }
            }, [s("button", {
                staticClass: "btn btn-danger",
                attrs: {
                    type: "button"
                }
            }, [t._v("Action")]), t._v(" "), s("Button", {
                staticClass: "btn btn-danger dropdown-toggle haha",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [s("span", {
                staticClass: "caret"
            }), t._v(" "), s("span", {
                staticClass: "sr-only"
            }, [t._v("Split button!")])]), t._v(" "), t._m(22)], 1), t._v(" "), s("hr"), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    dropdown: ""
                }
            }, [s("button", {
                staticClass: "btn btn-default btn-rounded",
                attrs: {
                    type: "button"
                }
            }, [t._v("Action")]), t._v(" "), s("Button", {
                staticClass: "btn btn-default btn-rounded dropdown-toggle haha",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [s("span", {
                staticClass: "caret"
            }), t._v(" "), s("span", {
                staticClass: "sr-only"
            }, [t._v("Split button!")])]), t._v(" "), t._m(23)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    dropdown: ""
                }
            }, [s("button", {
                staticClass: "btn btn-success btn-rounded",
                attrs: {
                    type: "button"
                }
            }, [t._v("Action")]), t._v(" "), s("Button", {
                staticClass: "btn btn-success btn-rounded dropdown-toggle haha",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [s("span", {
                staticClass: "caret"
            }), t._v(" "), s("span", {
                staticClass: "sr-only"
            }, [t._v("Split button!")])]), t._v(" "), t._m(24)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    dropdown: ""
                }
            }, [s("button", {
                staticClass: "btn btn-primary btn-rounded",
                attrs: {
                    type: "button"
                }
            }, [t._v("Action")]), t._v(" "), s("Button", {
                staticClass: "btn btn-primary btn-rounded dropdown-toggle haha",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [s("span", {
                staticClass: "caret"
            }), t._v(" "), s("span", {
                staticClass: "sr-only"
            }, [t._v("Split button!")])]), t._v(" "), t._m(25)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    dropdown: ""
                }
            }, [s("button", {
                staticClass: "btn btn-warning btn-rounded",
                attrs: {
                    type: "button"
                }
            }, [t._v("Action")]), t._v(" "), s("Button", {
                staticClass: "btn btn-warning btn-rounded dropdown-toggle haha",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [s("span", {
                staticClass: "caret"
            }), t._v(" "), s("span", {
                staticClass: "sr-only"
            }, [t._v("Split button!")])]), t._v(" "), t._m(26)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    dropdown: ""
                }
            }, [s("button", {
                staticClass: "btn btn-danger btn-rounded",
                attrs: {
                    type: "button"
                }
            }, [t._v("Action")]), t._v(" "), s("Button", {
                staticClass: "btn btn-danger btn-rounded dropdown-toggle haha",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [s("span", {
                staticClass: "caret"
            }), t._v(" "), s("span", {
                staticClass: "sr-only"
            }, [t._v("Split button!")])]), t._v(" "), t._m(27)], 1), t._v(" "), s("hr"), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    dropdown: ""
                }
            }, [s("button", {
                staticClass: "btn btn-default btn-bordered",
                attrs: {
                    type: "button"
                }
            }, [t._v("Action")]), t._v(" "), s("Button", {
                staticClass: "btn btn-default btn-bordered dropdown-toggle haha",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [s("span", {
                staticClass: "caret"
            }), t._v(" "), s("span", {
                staticClass: "sr-only"
            }, [t._v("Split button!")])]), t._v(" "), t._m(28)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    dropdown: ""
                }
            }, [s("button", {
                staticClass: "btn btn-primary btn-bordered",
                attrs: {
                    type: "button"
                }
            }, [t._v("Action")]), t._v(" "), s("Button", {
                staticClass: "btn btn-primary btn-bordered dropdown-toggle haha",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [s("span", {
                staticClass: "caret"
            }), t._v(" "), s("span", {
                staticClass: "sr-only"
            }, [t._v("Split button!")])]), t._v(" "), t._m(29)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    dropdown: ""
                }
            }, [s("button", {
                staticClass: "btn btn-success btn-bordered",
                attrs: {
                    type: "button"
                }
            }, [t._v("Action")]), t._v(" "), s("Button", {
                staticClass: "btn btn-success btn-bordered dropdown-toggle haha",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [s("span", {
                staticClass: "caret"
            }), t._v(" "), s("span", {
                staticClass: "sr-only"
            }, [t._v("Split button!")])]), t._v(" "), t._m(30)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    dropdown: ""
                }
            }, [s("button", {
                staticClass: "btn btn-warning btn-bordered",
                attrs: {
                    type: "button"
                }
            }, [t._v("Action")]), t._v(" "), s("Button", {
                staticClass: "btn btn-warning btn-bordered dropdown-toggle haha",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [s("span", {
                staticClass: "caret"
            }), t._v(" "), s("span", {
                staticClass: "sr-only"
            }, [t._v("Split button!")])]), t._v(" "), t._m(31)], 1), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    dropdown: ""
                }
            }, [s("button", {
                staticClass: "btn btn-danger btn-bordered",
                attrs: {
                    type: "button"
                }
            }, [t._v("Action")]), t._v(" "), s("Button", {
                staticClass: "btn btn-danger btn-bordered dropdown-toggle haha",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [s("span", {
                staticClass: "caret"
            }), t._v(" "), s("span", {
                staticClass: "sr-only"
            }, [t._v("Split button!")])]), t._v(" "), t._m(32)], 1)])])])])])])
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-sm-12"
            }, [s("div", {
                staticClass: "panel panel-primary"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Navbar")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("h4", [t._v("Default Style")]), t._v(" "), s("nav", {
                staticClass: "navbar navbar-default display-default",
                staticStyle: {
                    position: "relative"
                }
            }, [s("div", {
                staticClass: "container-fluid"
            }, [s("div", {
                staticClass: "navbar-header"
            }, [s("button", {
                staticClass: "navbar-toggle collapsed",
                attrs: {
                    type: "button",
                    "data-toggle": "collapse",
                    "data-target": "#bs-example-navbar-collapse-1"
                }
            }, [s("span", {
                staticClass: "sr-only"
            }, [t._v("Toggle navigation")]), t._v(" "), s("span", {
                staticClass: "icon-bar"
            }), t._v(" "), s("span", {
                staticClass: "icon-bar"
            }), t._v(" "), s("span", {
                staticClass: "icon-bar"
            })]), t._v(" "), s("a", {
                staticClass: "navbar-brand",
                attrs: {
                    href: "#"
                }
            })]), t._v(" "), s("div", {
                staticClass: "collapse navbar-collapse",
                attrs: {
                    id: "bs-example-navbar-collapse-1"
                }
            }, [s("ul", {
                staticClass: "nav navbar-nav"
            }, [s("li", {
                staticClass: "active"
            }, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Link "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Link")])]), t._v(" "), s("li", {
                staticClass: "dropdown",
                attrs: {
                    dropdown: "",
                    "on-toggle": "toggled(open)"
                }
            }, [s("a", {
                staticClass: "dropdown-toggle",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [t._v("\n                                          Dropdown\n                                          "), s("span", {
                staticClass: "caret"
            })]), t._v(" "), s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("One more separated link")])])])])]), t._v(" "), s("form", {
                staticClass: "navbar-form navbar-left",
                attrs: {
                    role: "search"
                }
            }, [s("div", {
                staticClass: "form-group"
            }, [s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    placeholder: "Search"
                }
            })]), t._v(" "), s("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "submit"
                }
            }, [t._v("Submit")])]), t._v(" "), s("ul", {
                staticClass: "nav navbar-nav navbar-right"
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Link")])]), t._v(" "), s("li", {
                staticClass: "dropdown",
                attrs: {
                    dropdown: "",
                    "on-toggle": "toggled(open)"
                }
            }, [s("a", {
                staticClass: "dropdown-toggle",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [t._v("\n                                        Dropdown\n                                        "), s("span", {
                staticClass: "caret"
            })]), t._v(" "), s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])])])])])]), t._v(" "), s("h4", [t._v("Inverted Style")]), t._v(" "), s("nav", {
                staticClass: "navbar navbar-inverse display-default",
                staticStyle: {
                    position: "relative"
                }
            }, [s("div", {
                staticClass: "container-fluid"
            }, [s("div", {
                staticClass: "navbar-header"
            }, [s("button", {
                staticClass: "navbar-toggle collapsed",
                attrs: {
                    type: "button",
                    "data-toggle": "collapse",
                    "data-target": "#bs-example-navbar-collapse-1"
                }
            }, [s("span", {
                staticClass: "sr-only"
            }, [t._v("Toggle navigation")]), t._v(" "), s("span", {
                staticClass: "icon-bar"
            }), t._v(" "), s("span", {
                staticClass: "icon-bar"
            }), t._v(" "), s("span", {
                staticClass: "icon-bar"
            })]), t._v(" "), s("a", {
                staticClass: "navbar-brand",
                attrs: {
                    href: "#"
                }
            })]), t._v(" "), s("div", {
                staticClass: "collapse navbar-collapse",
                attrs: {
                    id: "bs-example-navbar-collapse-1"
                }
            }, [s("ul", {
                staticClass: "nav navbar-nav"
            }, [s("li", {
                staticClass: "active"
            }, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Link "), s("span", {
                staticClass: "sr-only"
            }, [t._v("(current)")])])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Link")])]), t._v(" "), s("li", {
                staticClass: "dropdown",
                attrs: {
                    dropdown: "",
                    "on-toggle": "toggled(open)"
                }
            }, [s("a", {
                staticClass: "dropdown-toggle",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [t._v("\n                                        Dropdown\n                                        "), s("span", {
                staticClass: "caret"
            })]), t._v(" "), s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("One more separated link")])])])])]), t._v(" "), s("form", {
                staticClass: "navbar-form navbar-left",
                attrs: {
                    role: "search"
                }
            }, [s("div", {
                staticClass: "form-group"
            }, [s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    placeholder: "Search"
                }
            })]), t._v(" "), s("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "submit"
                }
            }, [t._v("Submit")])]), t._v(" "), s("ul", {
                staticClass: "nav navbar-nav navbar-right"
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Link")])]), t._v(" "), s("li", {
                staticClass: "dropdown",
                attrs: {
                    dropdown: "",
                    "on-toggle": "toggled(open)"
                }
            }, [s("a", {
                staticClass: "dropdown-toggle",
                attrs: {
                    "data-toggle": "dropdown"
                }
            }, [t._v("\n                                        Dropdown\n                                        "), s("span", {
                staticClass: "caret"
            })]), t._v(" "), s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])])])])])])])])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Regular Dropdown\n                        ")])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Split-Button Dropdown\n                        ")])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("ul", {
                staticClass: "dropdown-menu",
                attrs: {
                    role: "menu"
                }
            }, [s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Another action")])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Something else here")])]), t._v(" "), s("li", {
                staticClass: "divider"
            }), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Separated link")])])])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement;
            t._self._c || a;
            return t._m(0)
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "inbox"
                }
            }, [s("div", {
                staticClass: "animated fadeIn"
            }, [s("div", {
                staticClass: "inbox-container-wrap"
            }, [s("div", {
                staticClass: "inbox-container"
            }, [s("div", {
                staticClass: "col email-options ps-container"
            }, [s("div", {
                staticClass: "padding-15"
            }, [s("div", {
                staticClass: "butt-container"
            }, [s("a", {
                staticClass: "btn btn-primary btn-block btn-rounded",
                attrs: {
                    "ui-sref": "compose"
                }
            }, [t._v("Compose")])]), t._v(" "), s("ul", {
                staticClass: "main-options"
            }, [s("li", {
                staticClass: "activeli"
            }, [s("a", {
                attrs: {
                    "ui-sref": "inbox"
                }
            }, [s("span", {
                staticClass: "title"
            }, [t._v("   Inbox")]), t._v(" "), s("span", {
                staticClass: "badge pull-right"
            }, [t._v("10")])])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    "ui-sref": "inbox"
                }
            }, [s("span", {
                staticClass: "title"
            }, [t._v("   Junk Mail")])])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    "ui-sref": "inbox"
                }
            }, [s("span", {
                staticClass: "title"
            }, [t._v("   Drafts")]), t._v(" "), s("span", {
                staticClass: "badge pull-right"
            }, [t._v("16")])])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    "ui-sref": "inbox"
                }
            }, [s("span", {
                staticClass: "title"
            }, [t._v("   Sent")])])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    "ui-sref": "inbox"
                }
            }, [s("span", {
                staticClass: "title"
            }, [t._v("   Trash")])])]), t._v(" "), s("hr", {
                staticClass: "poor"
            }), t._v(" "), s("h5", [t._v("LABELS")]), t._v(" "), s("li", [s("a", {
                attrs: {
                    "ui-sref": "inbox"
                }
            }, [s("span", {
                staticClass: "title"
            }, [t._v("   Clients "), s("i", {
                staticClass: "fa fa-stop pull-right faorange"
            })])])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    "ui-sref": "inbox"
                }
            }, [s("span", {
                staticClass: "title"
            }, [t._v("   Social "), s("i", {
                staticClass: "fa fa-stop pull-right fayellow"
            })])])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    "ui-sref": "inbox"
                }
            }, [s("span", {
                staticClass: "title"
            }, [t._v("   Family "), s("i", {
                staticClass: "fa fa-stop pull-right facyan"
            })])])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    "ui-sref": "inbox"
                }
            }, [s("span", {
                staticClass: "title"
            }, [t._v("   Friends "), s("i", {
                staticClass: "fa fa-stop pull-right fapurple"
            })])])])])])])]), t._v(" "), s("div", {
                staticClass: "message-list-wrapper"
            }, [s("div", {
                staticClass: "searchbox"
            }, [s("span", {
                staticClass: "sebox"
            }, [t._v("Inbox")]), t._v(" (14 unread) "), s("i", {
                staticClass: "fa fa-envelope-o"
            }), t._v(" "), s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    id: "exampleInputEmail1",
                    placeholder: "Search Inbox..."
                }
            })]), t._v(" "), s("div", {
                staticClass: "wrap-list"
            }, [s("div", {
                staticClass: "messages-list"
            }, [s("ul", [s("li", {
                staticClass: "messages-item"
            }, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [s("div", {
                staticClass: "leftist"
            }, [s("i", {
                staticClass: "fa fa-star"
            }), t._v(" "), s("label", {
                staticClass: "checkbox1",
                attrs: {
                    for: "Option45"
                }
            }, [s("input", {
                attrs: {
                    id: "Option45",
                    type: "checkbox"
                }
            }), t._v(" "), s("span")])]), t._v(" "), s("span", {
                staticClass: "messages-item-subject"
            }, [t._v(" Nicole Bell")]), t._v(" "), s("span", {
                staticClass: "date-class text-muted pull-right"
            }, [s("i", {
                staticClass: "fa fa-paperclip"
            }), t._v(" 7th Jan")]), t._v(" "), s("span", {
                staticClass: "messages-item-content"
            }, [s("p", [t._v("Hi Peter, Thanks for the e-mail. Lorem ipsum dolor sit amet,")])])])]), t._v(" "), s("li", {
                staticClass: "messages-item"
            }, [s("div", {
                staticClass: "leftist"
            }, [s("i", {
                staticClass: "fa fa-star"
            }), t._v(" "), s("label", {
                staticClass: "checkbox1",
                attrs: {
                    for: "Option55"
                }
            }, [s("input", {
                attrs: {
                    id: "Option55",
                    type: "checkbox"
                }
            }), t._v(" "), s("span")])]), t._v(" "), s("span", {
                staticClass: "messages-item-subject"
            }, [t._v(" John Doe ")]), t._v(" "), s("span", {
                staticClass: "date-class text-muted pull-right"
            }, [s("i", {
                staticClass: "fa fa-paperclip"
            }), t._v(" 4th Jan")]), t._v(" "), s("span", {
                staticClass: "messages-item-content"
            }, [s("p", [t._v("Dear Mr. Clarks I am interested in Lorem ipsum dolor sit amet,")])])]), t._v(" "), s("li", {
                staticClass: "messages-item active-message"
            }, [s("div", {
                staticClass: "leftist"
            }, [s("i", {
                staticClass: "fa fa-star"
            }), t._v(" "), s("label", {
                staticClass: "checkbox1",
                attrs: {
                    for: "Option65"
                }
            }, [s("input", {
                attrs: {
                    id: "Option65",
                    type: "checkbox"
                }
            }), t._v(" "), s("span")])]), t._v(" "), s("span", {
                staticClass: "messages-item-subject"
            }, [t._v(" Jane Doe ")]), t._v(" "), s("span", {
                staticClass: "date-class text-muted pull-right"
            }, [t._v(" 1st Jan")]), t._v(" "), s("span", {
                staticClass: "messages-item-content"
            }, [s("p", [t._v("Dear Mr. Clarks In response Lorem ipsum dolor sit amet,")])])]), t._v(" "), s("li", {
                staticClass: "messages-item"
            }, [s("div", {
                staticClass: "leftist"
            }, [s("i", {
                staticClass: "fa fa-star fa-starred"
            }), t._v(" "), s("label", {
                staticClass: "checkbox1",
                attrs: {
                    for: "Option42"
                }
            }, [s("input", {
                attrs: {
                    id: "Option42",
                    type: "checkbox"
                }
            }), t._v(" "), s("span")])]), t._v(" "), s("span", {
                staticClass: "messages-item-subject"
            }, [t._v("  Peter Drury ")]), t._v(" "), s("span", {
                staticClass: "date-class text-muted pull-right"
            }, [t._v(" 29th Dec")]), t._v(" "), s("span", {
                staticClass: "messages-item-content"
            }, [s("p", [t._v("Dear Mr. Clarks, As we discussed Lorem ipsum dolor sit amet,")])])]), t._v(" "), s("li", {
                staticClass: "messages-item"
            }, [s("div", {
                staticClass: "leftist"
            }, [s("i", {
                staticClass: "fa fa-star"
            }), t._v(" "), s("label", {
                staticClass: "checkbox1",
                attrs: {
                    for: "Option32"
                }
            }, [s("input", {
                attrs: {
                    id: "Option32",
                    type: "checkbox"
                }
            }), t._v(" "), s("span")])]), t._v(" "), s("span", {
                staticClass: "messages-item-subject"
            }, [t._v(" John Smith ")]), t._v(" "), s("span", {
                staticClass: "date-class text-muted pull-right"
            }, [s("i", {
                staticClass: "fa fa-paperclip"
            }), t._v(" 26th Dec")]), t._v(" "), s("span", {
                staticClass: "messages-item-content"
            }, [s("p", [t._v("Dear Peter, Good Day! Lorem ipsum dolor sit amet,")])])]), t._v(" "), s("li", {
                staticClass: "messages-item"
            }, [s("div", {
                staticClass: "leftist"
            }, [s("i", {
                staticClass: "fa fa-star"
            }), t._v(" "), s("label", {
                staticClass: "checkbox1",
                attrs: {
                    for: "Option92"
                }
            }, [s("input", {
                attrs: {
                    id: "Option92",
                    type: "checkbox"
                }
            }), t._v(" "), s("span")])]), t._v(" "), s("span", {
                staticClass: "messages-item-subject"
            }, [t._v("Congratulations ")]), t._v(" "), s("span", {
                staticClass: "date-class text-muted pull-right"
            }, [t._v(" 7th jan")]), t._v(" "), s("span", {
                staticClass: "messages-item-content"
            }, [s("p", [t._v("Dear friend Peter Lorem ipsum dolor sit amet,")])])]), t._v(" "), s("li", {
                staticClass: "messages-item"
            }, [s("div", {
                staticClass: "leftist"
            }, [s("i", {
                staticClass: "fa fa-star"
            }), t._v(" "), s("label", {
                staticClass: "checkbox1",
                attrs: {
                    for: "Option30"
                }
            }, [s("input", {
                attrs: {
                    id: "Option30",
                    type: "checkbox"
                }
            }), t._v(" "), s("span")])]), t._v(" "), s("span", {
                staticClass: "messages-item-subject"
            }, [t._v(" Sincere request to keep in touch.")]), t._v(" "), s("span", {
                staticClass: "date-class text-muted pull-right"
            }, [s("i", {
                staticClass: "fa fa-paperclip"
            }), t._v(" 7th jan")]), t._v(" "), s("span", {
                staticClass: "messages-item-content"
            }, [s("p", [t._v("Dear Mr. Clarks,I was shocked Lorem ipsum dolor sit amet,")])])]), t._v(" "), s("li", {
                staticClass: "messages-item"
            }, [s("a", {
                attrs: {
                    href: "#"
                }
            }, [s("div", {
                staticClass: "leftist"
            }, [s("i", {
                staticClass: "fa fa-star"
            }), t._v(" "), s("label", {
                staticClass: "checkbox1",
                attrs: {
                    for: "Option45"
                }
            }, [s("input", {
                attrs: {
                    id: "Option45",
                    type: "checkbox"
                }
            }), t._v(" "), s("span")])]), t._v(" "), s("span", {
                staticClass: "messages-item-subject"
            }, [t._v(" Nicole Bell")]), t._v(" "), s("span", {
                staticClass: "date-class text-muted pull-right"
            }, [s("i", {
                staticClass: "fa fa-paperclip"
            }), t._v(" 7th Jan")]), t._v(" "), s("span", {
                staticClass: "messages-item-content"
            }, [s("p", [t._v("Hi Peter, Thanks for the e-mail. Lorem ipsum dolor sit amet,")])])])]), t._v(" "), s("li", {
                staticClass: "messages-item"
            }, [s("div", {
                staticClass: "leftist"
            }, [s("i", {
                staticClass: "fa fa-star"
            }), t._v(" "), s("label", {
                staticClass: "checkbox1",
                attrs: {
                    for: "Option55"
                }
            }, [s("input", {
                attrs: {
                    id: "Option55",
                    type: "checkbox"
                }
            }), t._v(" "), s("span")])]), t._v(" "), s("span", {
                staticClass: "messages-item-subject"
            }, [t._v(" John Doe ")]), t._v(" "), s("span", {
                staticClass: "date-class text-muted pull-right"
            }, [s("i", {
                staticClass: "fa fa-paperclip"
            }), t._v(" 4th Jan")]), t._v(" "), s("span", {
                staticClass: "messages-item-content"
            }, [s("p", [t._v("Dear Mr. Clarks I am interested in Lorem ipsum dolor sit amet,")])])]), t._v(" "), s("li", {
                staticClass: "messages-item"
            }, [s("div", {
                staticClass: "leftist"
            }, [s("i", {
                staticClass: "fa fa-star"
            }), t._v(" "), s("label", {
                staticClass: "checkbox1",
                attrs: {
                    for: "Option65"
                }
            }, [s("input", {
                attrs: {
                    id: "Option65",
                    type: "checkbox"
                }
            }), t._v(" "), s("span")])]), t._v(" "), s("span", {
                staticClass: "messages-item-subject"
            }, [t._v(" Jane Doe ")]), t._v(" "), s("span", {
                staticClass: "date-class text-muted pull-right"
            }, [t._v(" 1st Jan")]), t._v(" "), s("span", {
                staticClass: "messages-item-content"
            }, [s("p", [t._v("Dear Mr. Clarks In response Lorem ipsum dolor sit amet,")])])]), t._v(" "), s("li", {
                staticClass: "messages-item"
            }, [s("div", {
                staticClass: "leftist"
            }, [s("i", {
                staticClass: "fa fa-star fa-starred"
            }), t._v(" "), s("label", {
                staticClass: "checkbox1",
                attrs: {
                    for: "Option42"
                }
            }, [s("input", {
                attrs: {
                    id: "Option42",
                    type: "checkbox"
                }
            }), t._v(" "), s("span")])]), t._v(" "), s("span", {
                staticClass: "messages-item-subject"
            }, [t._v("  Peter Drury ")]), t._v(" "), s("span", {
                staticClass: "date-class text-muted pull-right"
            }, [t._v(" 29th Dec")]), t._v(" "), s("span", {
                staticClass: "messages-item-content"
            }, [s("p", [t._v("Dear Mr. Clarks, As we discussed Lorem ipsum dolor sit amet,")])])]), t._v(" "), s("li", {
                staticClass: "messages-item"
            }, [s("div", {
                staticClass: "leftist"
            }, [s("i", {
                staticClass: "fa fa-star"
            }), t._v(" "), s("label", {
                staticClass: "checkbox1",
                attrs: {
                    for: "Option32"
                }
            }, [s("input", {
                attrs: {
                    id: "Option32",
                    type: "checkbox"
                }
            }), t._v(" "), s("span")])]), t._v(" "), s("span", {
                staticClass: "messages-item-subject"
            }, [t._v(" John Smith ")]), t._v(" "), s("span", {
                staticClass: "date-class text-muted pull-right"
            }, [s("i", {
                staticClass: "fa fa-paperclip"
            }), t._v(" 26th Dec")]), t._v(" "), s("span", {
                staticClass: "messages-item-content"
            }, [s("p", [t._v("Dear Peter, Good Day! Lorem ipsum dolor sit amet,")])])]), t._v(" "), s("li", {
                staticClass: "messages-item"
            }, [s("div", {
                staticClass: "leftist"
            }, [s("i", {
                staticClass: "fa fa-star"
            }), t._v(" "), s("label", {
                staticClass: "checkbox1",
                attrs: {
                    for: "Option92"
                }
            }, [s("input", {
                attrs: {
                    id: "Option92",
                    type: "checkbox"
                }
            }), t._v(" "), s("span")])]), t._v(" "), s("span", {
                staticClass: "messages-item-subject"
            }, [t._v("Congratulations ")]), t._v(" "), s("span", {
                staticClass: "date-class text-muted pull-right"
            }, [t._v(" 7th jan")]), t._v(" "), s("span", {
                staticClass: "messages-item-content"
            }, [s("p", [t._v("Dear friend Peter Lorem ipsum dolor sit amet,")])])]), t._v(" "), s("li", {
                staticClass: "messages-item"
            }, [s("div", {
                staticClass: "leftist"
            }, [s("i", {
                staticClass: "fa fa-star"
            }), t._v(" "), s("label", {
                staticClass: "checkbox1",
                attrs: {
                    for: "Option30"
                }
            }, [s("input", {
                attrs: {
                    id: "Option30",
                    type: "checkbox"
                }
            }), t._v(" "), s("span")])]), t._v(" "), s("span", {
                staticClass: "messages-item-subject"
            }, [t._v(" Sincere request to keep in touch.")]), t._v(" "), s("span", {
                staticClass: "date-class text-muted pull-right"
            }, [s("i", {
                staticClass: "fa fa-paperclip"
            }), t._v(" 7th jan")]), t._v(" "), s("span", {
                staticClass: "messages-item-content"
            }, [s("p", [t._v("Dear Mr. Clarks,I was shocked Lorem ipsum dolor sit amet,")])])])])])])]), t._v(" "), s("div", {
                staticClass: "text-wrapper bg-white"
            }, [s("div", {
                staticClass: "wrap-message"
            }, [s("div", {
                staticClass: "n0-scroll"
            }, [s("div", {
                staticClass: "message-topic"
            }, [s("i", {
                staticClass: "fa fa-star m-r-xs text-primary"
            }), t._v(" Development Files "), s("span", {
                staticClass: "pull-right text-muted"
            }, [s("a", {
                attrs: {
                    href: ""
                }
            }, [s("i", {
                staticClass: "fa fa-reply"
            })]), s("a", {
                attrs: {
                    href: ""
                }
            }, [s("i", {
                staticClass: "fa fa-trash-o"
            })])])]), t._v(" "), s("div", {
                staticClass: "message-sender"
            }, [s("img", {
                staticClass: "img-circle sender-img m-r-xs",
                attrs: {
                    src: "static/images/flat-avatar.png",
                    alt: ""
                }
            }), t._v(" "), s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("Kumar Sanket")]), t._v(" to "), s("a", {
                attrs: {
                    href: "#"
                }
            }, [t._v("me")]), t._v("  "), s("i", {
                staticClass: "fa fa-caret-square-o-down"
            }), t._v(" "), s("small", {
                staticClass: "pull-right m-t-sm"
            }, [s("i", {
                staticClass: "fa fa-paperclip"
            }), t._v("  "), s("a", {
                attrs: {
                    href: "javascript:;"
                }
            }, [t._v("(2)")]), t._v("    Today 7:30 AM\n\t\t\t\t\t\t")])])]), t._v(" "), s("div", {
                staticClass: "message-content"
            }, [s("p", [t._v("Hi Peter,")]), t._v(" "), s("p", [t._v("Thanks for the e-mail. It is always nice to hear from people, especially from you, Scott.")]), t._v(" "), s("p", [t._v("I have not got any reply, a positive or negative one, from Seibido yet."), s("br"), t._v("Let's wait and hope that it will make a BOOK.")]), t._v(" "), s("p", [t._v("Have you finished your paperwork for Kaken and writing academic articles?"), s("br"), t._v("If you have some free time in the near future, I want to meet you and explain to you our next project.")]), t._v(" "), s("p", [t._v("Why not drink out in Hiroshima if we are accepted?"), s("br"), t._v("We need to celebrate ourselves, don't we?"), s("br"), t._v("Let's have a small end-of-the-year party!")]), t._v(" "), s("p", [t._v("Sincerely, K. Nakagawa")])]), t._v(" "), s("div", {
                staticClass: "messagefooter"
            }, [s("button", {
                staticClass: "btn btn-primary btn-rounded pull-right",
                attrs: {
                    type: "button"
                }
            }, [s("i", {
                staticClass: "fa fa-reply"
            }), t._v(" Reply")])])])])])])])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement;
            t._self._c || a;
            return t._m(0)
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "not-found"
                }
            }, [s("div", {
                staticClass: "login-page animated fadeIn"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4"
            }, [s("a", {
                staticClass: "hvr-pulse-grow",
                attrs: {
                    "ui-sref": "home"
                }
            }, [s("img", {
                staticClass: "user-avatar",
                attrs: {
                    src: "static/images/flat-avatar.png"
                }
            })]), t._v(" "), s("h1", [t._v("Ani Theme ")]), t._v(" "), s("div", {
                staticClass: "four-container text-center"
            }, [s("h1", [t._v("404")])]), t._v("\n  \t\t\tOops! Page not found.\n  \t\t")])])])])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement;
            t._self._c || a;
            return t._m(0)
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "c3chart"
                }
            }, [s("div", {
                staticClass: "chart container animated fadeIn"
            }, [s("div", {
                staticClass: "col-sm-6"
            }, [s("div", {
                staticClass: "panel panel-primary"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", [t._v("C3 Area Chart")])]), t._v(" "), s("div", {
                staticClass: "text-center",
                attrs: {
                    id: "c3area"
                }
            })]), t._v(" "), s("div", {
                staticClass: "panel panel-primary"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", [t._v("C3 Pie Chart")])]), t._v(" "), s("div", {
                staticClass: "text-center",
                attrs: {
                    id: "c3pie"
                }
            })])]), t._v(" "), s("div", {
                staticClass: "col-sm-6"
            }, [s("div", {
                staticClass: "panel panel-primary"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", [t._v("C3 Line Chart")])]), t._v(" "), s("div", {
                staticClass: "text-center",
                attrs: {
                    id: "c3line"
                }
            })]), t._v(" "), s("div", {
                staticClass: "panel panel-primary"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", [t._v("C3 Donut Chart")])]), t._v(" "), s("div", {
                staticClass: "text-center",
                attrs: {
                    id: "c3donut"
                }
            })])])])])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "alerts"
                }
            }, [s("div", {
                staticClass: "animated fadeIn"
            }, [s("div", {
                staticClass: "panel panel-primary"
            }, [t._m(0), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("div", [s("alert", {
                attrs: {
                    placement: "",
                    type: "success",
                    width: "",
                    dismissable: ""
                }
            }, [s("span", {
                staticClass: "icon-ok-circled alert-icon-float-left"
            }), t._v(" "), s("strong", [t._v("Well Done!")]), t._v(" "), s("p", [t._v("You successfully read this important alert message.")])]), t._v(" "), s("alert", {
                attrs: {
                    placement: "",
                    type: "info",
                    width: "",
                    dismissable: ""
                }
            }, [s("span", {
                staticClass: "icon-ok-circled alert-icon-float-left"
            }), t._v(" "), s("strong", [t._v("Well Done!")]), t._v(" "), s("p", [t._v("You successfully read this important alert message.")])]), t._v(" "), s("alert", {
                attrs: {
                    placement: "",
                    type: "warning",
                    width: "",
                    dismissable: ""
                }
            }, [s("span", {
                staticClass: "icon-ok-circled alert-icon-float-left"
            }), t._v(" "), s("strong", [t._v("Well Done!")]), t._v(" "), s("p", [t._v("You successfully read this important alert message.")])]), t._v(" "), s("alert", {
                attrs: {
                    placement: "",
                    type: "danger",
                    width: "",
                    dismissable: ""
                }
            }, [s("span", {
                staticClass: "icon-ok-circled alert-icon-float-left"
            }), t._v(" "), s("strong", [t._v("Well Done!")]), t._v(" "), s("p", [t._v("You successfully read this important alert message.")])])], 1)])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-md-12"
            }, [s("div", {
                staticClass: "panel panel-info"
            }, [t._m(1), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("alert", {
                staticStyle: {
                    width: "400px",
                    "margin-top": "60px"
                },
                attrs: {
                    placement: "top-right",
                    type: "success",
                    duration: "5000",
                    show: t.alertShow1,
                    dismissable: ""
                }
            }, [s("span", {
                staticClass: "icon-ok-circled alert-icon-float-left"
            }), t._v(" "), s("strong", [t._v("Well Done!")]), t._v(" "), s("p", [t._v("You successfully read this important alert message.")])]), t._v(" "), s("alert", {
                staticStyle: {
                    width: "400px",
                    "margin-top": "140px"
                },
                attrs: {
                    placement: "top-right",
                    type: "info",
                    duration: "5000",
                    show: t.alertShow2,
                    dismissable: ""
                }
            }, [s("span", {
                staticClass: "icon-ok-circled alert-icon-float-left"
            }), t._v(" "), s("strong", [t._v("Well Done!")]), t._v(" "), s("p", [t._v("You successfully read this important alert message.")])]), t._v(" "), s("alert", {
                staticStyle: {
                    width: "400px",
                    "margin-top": "220px"
                },
                attrs: {
                    placement: "top-right",
                    type: "warning",
                    duration: "5000",
                    show: t.alertShow3,
                    dismissable: ""
                }
            }, [s("span", {
                staticClass: "icon-ok-circled alert-icon-float-left"
            }), t._v(" "), s("strong", [t._v("Well Done!")]), t._v(" "), s("p", [t._v("You successfully read this important alert message.")])]), t._v(" "), s("alert", {
                staticStyle: {
                    width: "400px",
                    "margin-top": "300px"
                },
                attrs: {
                    placement: "top-right",
                    type: "danger",
                    duration: "5000",
                    show: t.alertShow4,
                    dismissable: ""
                }
            }, [s("span", {
                staticClass: "icon-ok-circled alert-icon-float-left"
            }), t._v(" "), s("strong", [t._v("Well Done!")]), t._v(" "), s("p", [t._v("You successfully read this important alert message.")])]), t._v(" "), s("p", [s("button", {
                staticClass: "btn btn-success",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(a) {
                        t.showMe1()
                    }
                }
            }, [t._v("Show Growl")]), t._v(" "), s("button", {
                staticClass: "btn btn-info",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(a) {
                        t.showMe2()
                    }
                }
            }, [t._v("Primary Growl")]), t._v(" "), s("button", {
                staticClass: "btn btn-warning",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(a) {
                        t.showMe3()
                    }
                }
            }, [t._v("Info Growl")]), t._v(" "), s("button", {
                staticClass: "btn btn-danger",
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(a) {
                        t.showMe4()
                    }
                }
            }, [t._v("Warning Growl")])])], 1)])])])])])
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Dismissable Alerts\n  \t\t\t\t"), s("div", {
                staticClass: "panel-control pull-right"
            }, [s("a", {
                staticClass: "panelButton"
            }, [s("i", {
                staticClass: "fa fa-refresh"
            })]), t._v(" "), s("a", {
                staticClass: "panelButton"
            }, [s("i", {
                staticClass: "fa fa-minus"
            })]), t._v(" "), s("a", {
                staticClass: "panelButton"
            }, [s("i", {
                staticClass: "fa fa-remove"
            })])])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Growl Alerts\n  \t\t\t\t\t\t")])])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "__cov-progress",
                style: t.style
            })
        },
        staticRenderFns: []
    }
}, function(t, a, s) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement;
            t._self._c || a;
            return t._m(0)
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                e = t._self._c || a;
            return e("div", {
                attrs: {
                    id: "profile"
                }
            }, [e("div", {
                staticClass: "animated fadeIn"
            }, [e("div", {
                staticClass: "cover-wrapper"
            }, [e("div", {
                staticClass: "cover-photo",
                staticStyle: {
                    "background-image": "url('../../../../static/images/profile-cover.jpg')"
                }
            }, [e("div", {
                staticClass: "name-desg"
            }, [e("h3", [t._v("\n  \t\t\t\t\tKumar Sanket\n  \t\t\t\t\t"), e("small", [t._v("CEO and Founder @Sahusoft")])])])]), t._v(" "), e("div", {
                staticClass: "profile-photo-warp"
            }, [e("img", {
                staticClass: "profile-photo img-responsive img-circle",
                attrs: {
                    src: s(536),
                    alt: ""
                }
            })]), t._v(" "), e("div", {
                staticClass: "foobar"
            }, [e("a", {
                attrs: {
                    href: ""
                }
            }, [e("i", {
                staticClass: "fa fa-heart text-danger"
            }), t._v(" 443")]), t._v("     "), e("a", {
                attrs: {
                    href: "#"
                }
            }, [e("i", {
                staticClass: "fa fa-users"
            }), t._v(" 443")]), t._v(" "), e("span", {
                staticClass: "probutton"
            }, [e("button", {
                staticClass: "btn btn-primary  btn-bordered",
                attrs: {
                    type: "button"
                }
            }, [t._v("\n  \t\t\t\tFollow")])]), t._v(" "), e("span", {
                staticClass: "links pull-right"
            }, [e("a", {
                attrs: {
                    href: ""
                }
            }, [e("i", {
                staticClass: "fa fa-twitter"
            })]), t._v(" "), e("a", {
                attrs: {
                    href: ""
                }
            }, [e("i", {
                staticClass: "fa fa-facebook"
            })]), t._v(" "), e("a", {
                attrs: {
                    href: ""
                }
            }, [e("i", {
                staticClass: "fa fa-google-plus"
            })]), t._v(" "), e("a", {
                attrs: {
                    href: ""
                }
            }, [e("i", {
                staticClass: "fa fa-github"
            })])])])]), t._v(" "), e("div", {
                staticClass: "conter-wrapper-body"
            }, [e("div", [e("div", {
                staticClass: "profile-body row",
                attrs: {
                    id: "profile-items"
                }
            }, [e("div", {
                staticClass: "col-sm-6"
            }, [e("div", {
                staticClass: "profile-comment prophoto"
            }, [e("div", {
                staticClass: "panel panel-default"
            }, [e("div", {
                staticClass: "panel-body"
            }, [e("textarea", {
                attrs: {
                    name: "",
                    id: "",
                    cols: "54",
                    rows: "4"
                }
            })]), t._v(" "), e("div", {
                staticClass: "panel-footer inline"
            }, [e("div", {
                staticClass: "submit-footer pull-left"
            }, [e("a", {
                attrs: {
                    href: ""
                }
            }, [e("i", {
                staticClass: "fa fa-picture-o"
            })]), e("a", {
                attrs: {
                    href: ""
                }
            }, [e("i", {
                staticClass: "fa fa-calendar"
            })]), e("a", {
                attrs: {
                    href: ""
                }
            }, [e("i", {
                staticClass: "fa fa-video-camera"
            })])]), t._v(" "), e("span", {
                staticClass: "probutton pull-right"
            }, [e("button", {
                staticClass: "btn btn-primary btn-rounded",
                staticStyle: {
                    "margin-top": "5px"
                },
                attrs: {
                    type: "button"
                }
            }, [t._v("Send Message")])])])])]), t._v(" "), e("div", {
                staticClass: "prophoto"
            }, [e("div", {
                staticClass: "panel panel-default"
            }, [e("div", {
                staticClass: "panel-heading"
            }, [e("h3", {
                staticClass: "panel-title"
            }, [e("img", {
                staticClass: "panel-photo img-responsive img-circle",
                attrs: {
                    src: s(6),
                    alt: ""
                }
            }), t._v("\n  \t\t\t\t\t\t\t\t\tKumar Sanket "), e("br"), e("span", {
                staticClass: "text-muted"
            }, [t._v("Posted on 3rd March 2014")])])]), t._v(" "), e("div", {
                staticClass: "panel-body"
            }, [e("img", {
                staticClass: "img-responsive",
                attrs: {
                    src: s(222),
                    alt: "",
                    height: "200"
                }
            }), t._v(" "), e("div", {
                staticClass: "comment-links clearfix"
            }, [e("a", {
                attrs: {
                    href: ""
                }
            }, [e("i", {
                staticClass: "fa fa-share-alt"
            }), t._v("22")]), e("a", {
                attrs: {
                    href: ""
                }
            }, [e("i", {
                staticClass: "fa fa-comments-o"
            }), t._v("106")]), e("a", {
                attrs: {
                    href: ""
                }
            }, [e("i", {
                staticClass: "fa fa-heart text-danger"
            }), t._v("862")])])])])])]), t._v(" "), e("div", {
                staticClass: "col-sm-6"
            }, [e("div", {
                staticClass: "prophoto"
            }, [e("div", {
                staticClass: "comment-link"
            }, [e("div", {
                staticClass: "panel panel-default"
            }, [e("div", {
                staticClass: "panel-heading"
            }, [e("h3", {
                staticClass: "panel-title"
            }, [e("img", {
                staticClass: "panel-photo img-responsive img-circle",
                attrs: {
                    src: s(6),
                    alt: ""
                }
            }), t._v("\n  \t\t\t\t\t\t\t\t\t\tKumar Sanket "), e("br"), e("span", {
                staticClass: "text-muted"
            }, [t._v("Posted on 3rd March 2014")])])]), t._v(" "), e("div", {
                staticClass: "panel-body"
            }, [e("div", {
                staticClass: "lorem"
            }, [t._v("\n  \t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur harum aliquid tempore molestias nemo modi quas repellat. Accusantium praesentium, cupiditate tempore culpa voluptate laboriosam itaque error iste accusamus reprehenderit illum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est saepe voluptas, eligendi necessitatibus adipisci soluta, amet magnam, rerum, iure minima fuga praesentium nobis veniam quisquam illum repellat beatae. Consectetur, asperiores.\n  \t\t\t\t\t\t\t\t\t")]), t._v(" "), e("div", {
                staticClass: "comment-links clearfix"
            }, [e("a", {
                attrs: {
                    href: ""
                }
            }, [e("i", {
                staticClass: "fa fa-share-alt"
            }), t._v("22")]), e("a", {
                attrs: {
                    href: ""
                }
            }, [e("i", {
                staticClass: "fa fa-comments-o"
            }), t._v("106")]), e("a", {
                attrs: {
                    href: ""
                }
            }, [e("i", {
                staticClass: "fa fa-heart text-danger"
            }), t._v("862")])]), t._v(" "), e("div", {
                staticClass: "comments-here media"
            }, [e("a", {
                staticClass: "pull-left",
                attrs: {
                    href: "#"
                }
            }, [e("img", {
                staticClass: "media-object img-circle img-responsive",
                attrs: {
                    src: s(6),
                    alt: "Media Object"
                }
            })]), t._v(" "), e("div", {
                staticClass: "media-body"
            }, [e("a", {
                attrs: {
                    href: ""
                }
            }, [e("h5", {
                staticClass: "media-heading"
            }, [t._v("Kumar Pratik")])]), t._v(" "), e("span", {
                staticClass: "timely pull-right text-muted"
            }, [t._v(" 3 hours ago")]), t._v("\n  \t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Hic repudiandae exercitationem provident nihil consectetur.\n  \t\t\t\t\t\t\t\t\t\t\t"), e("div", {
                staticClass: "comment-like"
            }, [e("a", {
                attrs: {
                    href: ""
                }
            }, [e("i", {
                staticClass: "fa fa-comments-o"
            }), t._v("106")]), e("a", {
                attrs: {
                    href: ""
                }
            }, [e("i", {
                staticClass: "fa fa-heart text-danger"
            }), t._v("862")])])])])])])])])]), t._v(" "), e("div", {
                staticClass: " col-sm-6 "
            }, [e("div", {
                staticClass: "prophoto"
            }, [e("div", {
                staticClass: "panel panel-default"
            }, [e("div", {
                staticClass: "panel-heading"
            }, [e("h3", {
                staticClass: "panel-title"
            }, [e("img", {
                staticClass: "panel-photo img-responsive img-circle",
                attrs: {
                    src: s(6),
                    alt: ""
                }
            }), t._v("\n  \t\t\t\t\t\t\t\t\tKumar Sanket "), e("br"), e("span", {
                staticClass: "text-muted"
            }, [t._v("Posted on 3rd March 2014")])])]), t._v(" "), e("div", {
                staticClass: "panel-body"
            }, [e("img", {
                staticClass: "img-responsive",
                attrs: {
                    src: s(222),
                    alt: "",
                    height: "200"
                }
            }), t._v(" "), e("div", {
                staticClass: "comment-links clearfix"
            }, [e("a", {
                attrs: {
                    href: ""
                }
            }, [e("i", {
                staticClass: "fa fa-share-alt"
            }), t._v("22")]), e("a", {
                attrs: {
                    href: ""
                }
            }, [e("i", {
                staticClass: "fa fa-comments-o"
            }), t._v("106")]), e("a", {
                attrs: {
                    href: ""
                }
            }, [e("i", {
                staticClass: "fa fa-heart text-danger"
            }), t._v("862")])])])])])])])])])])])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "components"
                }
            }, [s("div", {
                staticClass: "animated fadeIn"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-md-12"
            }, [s("div", {
                staticClass: "panel panel-primary"
            }, [t._m(0), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("form", {
                staticClass: "form-horizontal"
            }, [t._m(1), t._v(" "), s("hr"), t._v(" "), t._m(2), t._v(" "), s("hr"), t._v(" "), t._m(3), t._v(" "), s("hr"), t._v(" "), t._m(4), t._v(" "), s("hr"), t._v(" "), t._m(5), t._v(" "), s("hr"), t._v(" "), t._m(6), t._v(" "), s("hr"), t._v(" "), t._m(7), t._v(" "), s("hr"), t._v(" "), t._m(8), t._v(" "), s("hr"), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {
                    for: "inputtext"
                }
            }, [t._v("Checkbox and Radio")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("div", {
                staticClass: "checkbox"
            }, [s("label", [s("input", {
                attrs: {
                    type: "checkbox",
                    value: ""
                },
                domProps: {
                    value: ""
                }
            }), t._v("\n\t\t\t\t\t\t\t\t\t\tOption one is this and that—be sure to include why it's great\n\t\t\t\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "checkbox disabled"
            }, [s("label", [s("input", {
                attrs: {
                    type: "checkbox",
                    value: "",
                    disabled: ""
                },
                domProps: {
                    value: ""
                }
            }), t._v("\n\t\t\t\t\t\t\t\t\t\tOption two is disabled\n\t\t\t\t\t\t\t\t\t")])]), t._v(" "), s("div", {}, [s("label", [s("input", {
                attrs: {
                    type: "radio",
                    name: "optionsRadios",
                    id: "optionsRadios1",
                    value: "option1",
                    checked: ""
                },
                domProps: {
                    value: "option1",
                    checked: !0
                }
            }), t._v("\n\t\t\t\t\t\t\t\t\t\tOption one is this and that—be sure to include why it's great\n\t\t\t\t\t\t\t\t\t")])]), t._v(" "), s("div", {}, [s("label", [s("input", {
                attrs: {
                    type: "radio",
                    name: "optionsRadios",
                    id: "optionsRadios2",
                    value: "option2"
                },
                domProps: {
                    value: "option2"
                }
            }), t._v("\n\t\t\t\t\t\t\t\t\t\tOption two can be something else and selecting it will deselect option one\n\t\t\t\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: " disabled"
            }, [s("label", [s("input", {
                attrs: {
                    type: "radio",
                    name: "optionsRadios",
                    id: "optionsRadios3",
                    value: "option3",
                    disabled: ""
                },
                domProps: {
                    value: "option3"
                }
            }), t._v("\n\t\t\t\t\t\t\t\t\t\tOption three is disabled\n\t\t\t\t\t\t\t\t\t")])])])]), t._v(" "), s("hr"), t._v(" "), t._m(9), t._v(" "), s("hr"), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {
                    for: "inputtext"
                }
            }, [t._v("Switch")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("div", {
                staticClass: "onoffswitch"
            }, [s("input", {
                staticClass: "onoffswitch-checkbox",
                attrs: {
                    type: "checkbox",
                    name: "onoffswitch",
                    id: "switch3",
                    checked: ""
                },
                domProps: {
                    checked: !0
                }
            }), t._v(" "), t._m(10)])])]), t._v(" "), s("hr"), t._v(" "), t._m(11), t._v(" "), s("hr"), t._v(" "), t._m(12), t._v(" "), s("hr"), t._v(" "), t._m(13), t._v(" "), s("hr"), t._v(" "), t._m(14), t._v(" "), s("hr"), t._v(" "), t._m(15), t._v(" "), s("hr"), t._v(" "), t._m(16), t._v(" "), s("hr"), t._v(" "), t._m(17), t._v(" "), s("hr"), t._v(" "), t._m(18), t._v(" "), s("hr"), t._v(" "), s("label", {
                staticClass: "col-sm-2 control-label"
            }, [t._v("Date Picker")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("p", {
                staticClass: "input-group",
                staticStyle: {
                    width: "100% !important"
                },
                attrs: {
                    id: "dp"
                }
            }, [s("datepicker", {
                staticClass: "dp",
                staticStyle: {
                    width: "inherit !important"
                },
                attrs: {
                    placeholder: "Pick a Date"
                }
            })], 1)])])])])])])])])
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Components\n\t\t\t\t\t")])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "form-group"
            }, [s("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {
                    for: "inputEmail3"
                }
            }, [t._v("Normal")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    id: "inputemail3"
                }
            })])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "form-group"
            }, [s("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {
                    for: "inputPassword3"
                }
            }, [t._v("Password")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "password",
                    id: "inputPassword3"
                }
            })])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "form-group"
            }, [s("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {
                    for: "inputtext"
                }
            }, [t._v("Help Text")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    id: "help"
                }
            }), t._v(" "), s("p", {
                staticClass: "help-block"
            }, [t._v("Example block-level help text here.")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "form-group"
            }, [s("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {
                    for: "inputtext"
                }
            }, [t._v("Placeholder")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    id: "placeholder",
                    placeholder: "Placeholder"
                }
            })])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "form-group"
            }, [s("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {
                    for: "inputtext"
                }
            }, [t._v("Rounded")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("input", {
                staticClass: "form-control rounded",
                attrs: {
                    type: "text",
                    id: "rounded"
                }
            })])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "form-group"
            }, [s("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {
                    for: "inputtext"
                }
            }, [t._v("Line")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("input", {
                staticClass: "form-control underline",
                attrs: {
                    type: "text",
                    id: "underline",
                    placeholder: "Underlined"
                }
            })])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "form-group"
            }, [s("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {
                    for: "inputtext"
                }
            }, [t._v("Disabled")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    id: "disabled",
                    placeholder: "Disabled Input here",
                    disabled: ""
                }
            })])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "form-group"
            }, [s("label", {
                staticClass: "col-sm-2 control-label"
            }, [t._v("Static")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("p", {
                staticClass: "form-control-static"
            }, [t._v("email@example.com")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "row"
            }, [s("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {
                    for: "inputtext"
                }
            }, [t._v("Custom Checkboxes and Radio Buttons")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("label", {
                staticClass: "checkbox1",
                attrs: {
                    for: "Option"
                }
            }, [s("input", {
                attrs: {
                    id: "Option",
                    type: "checkbox"
                }
            }), t._v(" "), s("span")]), t._v(" "), s("label", {
                staticClass: "radio1",
                attrs: {
                    for: "Option1"
                }
            }, [s("input", {
                attrs: {
                    id: "Option1",
                    name: "one",
                    type: "radio"
                }
            }), t._v(" "), s("span")]), t._v(" "), s("label", {
                staticClass: "radio1",
                attrs: {
                    for: "Option2"
                }
            }, [s("input", {
                attrs: {
                    id: "Option2",
                    name: "one",
                    type: "radio"
                }
            }), t._v(" "), s("span")]), t._v(" "), s("label", {
                staticClass: "radio1",
                attrs: {
                    for: "Option3"
                }
            }, [s("input", {
                attrs: {
                    id: "Option3",
                    name: "one",
                    type: "radio"
                }
            }), t._v(" "), s("span")])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("label", {
                staticClass: "onoffswitch-label",
                attrs: {
                    for: "switch3"
                }
            }, [s("span", {
                staticClass: "onoffswitch-inner"
            }), t._v(" "), s("span", {
                staticClass: "onoffswitch-switch"
            })])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "row"
            }, [s("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {
                    for: "inputtext"
                }
            }, [t._v("Select")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("select", {
                staticClass: "form-control"
            }, [s("option", [t._v("1")]), t._v(" "), s("option", [t._v("2")]), t._v(" "), s("option", [t._v("3")]), t._v(" "), s("option", [t._v("4")]), t._v(" "), s("option", [t._v("5")])]), t._v(" "), s("br"), t._v(" "), s("select", {
                staticClass: "form-control",
                attrs: {
                    multiple: ""
                }
            }, [s("option", [t._v("1")]), t._v(" "), s("option", [t._v("2")]), t._v(" "), s("option", [t._v("3")]), t._v(" "), s("option", [t._v("4")]), t._v(" "), s("option", [t._v("5")])])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "form-group has-success"
            }, [s("label", {
                staticClass: "control-label col-sm-2 sucesss",
                attrs: {
                    for: "inputSuccess1"
                }
            }, [t._v("Input with success")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    id: "inputSuccess1"
                }
            })])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "form-group has-warning"
            }, [s("label", {
                staticClass: "control-label col-sm-2 warnings",
                attrs: {
                    for: "inputWarning1"
                }
            }, [t._v("Input with warning")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    id: "inputWarning1"
                }
            })])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "form-group has-error"
            }, [s("label", {
                staticClass: "control-label col-sm-2 errors",
                attrs: {
                    for: "inputError1"
                }
            }, [t._v("Input with error")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    id: "inputError1"
                }
            })])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "row"
            }, [s("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {
                    for: "inputtext"
                }
            }, [t._v("Control Sizing")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("input", {
                staticClass: "form-control input-lg",
                attrs: {
                    type: "text",
                    placeholder: ".input-lg"
                }
            }), s("br"), t._v(" "), s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    placeholder: "Default input"
                }
            }), s("br"), t._v(" "), s("input", {
                staticClass: "form-control input-sm",
                attrs: {
                    type: "text",
                    placeholder: ".input-sm"
                }
            })])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "row"
            }, [s("label", {
                staticClass: "col-sm-2 control-label",
                attrs: {
                    for: "inputtext"
                }
            }, [t._v("Column Sizing")]), t._v(" "), s("div", {
                staticClass: "col-sm-2"
            }, [s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    placeholder: ".col-sm-2"
                }
            })]), t._v(" "), s("div", {
                staticClass: "col-sm-3"
            }, [s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    placeholder: ".col-sm-3"
                }
            })]), t._v(" "), s("div", {
                staticClass: "col-sm-4"
            }, [s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    placeholder: ".col-sm-4"
                }
            })])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "form-group"
            }, [s("label", {
                staticClass: "col-sm-2 control-label"
            }, [t._v("Input groups")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("div", {
                staticClass: "input-group mb-10"
            }, [s("span", {
                staticClass: "input-group-addon"
            }, [t._v("@")]), t._v(" "), s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "text",
                    placeholder: "Username"
                }
            })]), t._v(" "), s("br"), t._v(" "), s("div", {
                staticClass: "input-group mb-10"
            }, [s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "text"
                }
            }), t._v(" "), s("span", {
                staticClass: "input-group-addon"
            }, [t._v(".00")])]), t._v(" "), s("br"), t._v(" "), s("div", {
                staticClass: "input-group mb-10"
            }, [s("span", {
                staticClass: "input-group-addon"
            }, [t._v("$")]), t._v(" "), s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "text"
                }
            }), t._v(" "), s("span", {
                staticClass: "input-group-addon"
            }, [t._v(".00")])])])])
        }, function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "form-group"
            }, [s("label", {
                staticClass: "col-sm-2 control-label"
            }, [t._v("Button addons")]), t._v(" "), s("div", {
                staticClass: "col-sm-10"
            }, [s("div", {
                staticClass: "input-group mb-10"
            }, [s("span", {
                staticClass: "input-group-btn"
            }, [s("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "button"
                }
            }, [t._v("Go!")])]), t._v(" "), s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "text"
                }
            })]), t._v(" "), s("br"), t._v(" "), s("div", {
                staticClass: "input-group"
            }, [s("input", {
                staticClass: "form-control",
                attrs: {
                    type: "text"
                }
            }), t._v(" "), s("span", {
                staticClass: "input-group-btn"
            }, [s("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "button"
                }
            }, [t._v("Go!")])])])])])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement;
            t._self._c || a;
            return t._m(0)
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "buttons"
                }
            }, [s("div", {
                staticClass: "animated fadeIn"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-sm-12"
            }, [s("div", {
                staticClass: "panel panel-primary"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("p", [s("button", {
                staticClass: "btn btn-default btn-rounded",
                attrs: {
                    type: "button"
                }
            }, [t._v("Default Button")]), t._v(" "), s("button", {
                staticClass: "btn btn-primary btn-rounded",
                attrs: {
                    type: "button"
                }
            }, [t._v("Primary Button")]), t._v(" "), s("button", {
                staticClass: "btn btn-success btn-rounded",
                attrs: {
                    type: "button"
                }
            }, [t._v("Success Button")]), t._v(" "), s("button", {
                staticClass: "btn btn-info btn-rounded",
                attrs: {
                    type: "button"
                }
            }, [t._v("Info Button")]), t._v(" "), s("button", {
                staticClass: "btn btn-warning btn-rounded",
                attrs: {
                    type: "button"
                }
            }, [t._v("Warning Button")]), t._v(" "), s("button", {
                staticClass: "btn btn-danger btn-rounded",
                attrs: {
                    type: "button"
                }
            }, [t._v("Danger Button")])]), t._v(" "), s("hr"), t._v(" "), s("p", [s("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "button"
                }
            }, [t._v("Default Button")]), t._v(" "), s("button", {
                staticClass: "btn btn-primary",
                attrs: {
                    type: "button"
                }
            }, [t._v("  Primary Button")]), t._v(" "), s("button", {
                staticClass: "btn btn-success",
                attrs: {
                    type: "button"
                }
            }, [t._v("Success Button")]), t._v(" "), s("button", {
                staticClass: "btn btn-info",
                attrs: {
                    type: "button"
                }
            }, [t._v("Info Button")]), t._v(" "), s("button", {
                staticClass: "btn btn-warning",
                attrs: {
                    type: "button"
                }
            }, [t._v("Warning Button")]), t._v(" "), s("button", {
                staticClass: "btn btn-danger",
                attrs: {
                    type: "button"
                }
            }, [t._v("Danger Button")])]), t._v(" "), s("hr"), t._v(" "), s("p", [s("button", {
                staticClass: "btn btn-default btn-rounded btn-outline",
                attrs: {
                    type: "button"
                }
            }, [t._v("Default Button")]), t._v(" "), s("button", {
                staticClass: "btn btn-info btn-rounded btn-outline",
                attrs: {
                    type: "button"
                }
            }, [t._v("Info Button")]), t._v(" "), s("button", {
                staticClass: "btn btn-primary btn-rounded btn-outline",
                attrs: {
                    type: "button"
                }
            }, [t._v("Primary Button")]), t._v(" "), s("button", {
                staticClass: "btn btn-success btn-rounded btn-outline",
                attrs: {
                    type: "button"
                }
            }, [t._v("Success Button")]), t._v(" "), s("button", {
                staticClass: "btn btn-warning btn-rounded btn-outline",
                attrs: {
                    type: "button"
                }
            }, [t._v("Warning Button")]), t._v(" "), s("button", {
                staticClass: "btn btn-danger btn-rounded btn-outline",
                attrs: {
                    type: "button"
                }
            }, [t._v("Danger Button")])])])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-sm-12"
            }, [s("div", {
                staticClass: "panel panel-primary"
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("p", [s("button", {
                staticClass: "progress-button primary-progress",
                attrs: {
                    "data-style": "fill",
                    "data-horizontal": ""
                }
            }, [t._v("Submit")]), t._v("  \n                      "), s("button", {
                staticClass: "progress-button primary-progress",
                attrs: {
                    "data-style": "fill",
                    "data-vertical": ""
                }
            }, [t._v("Submit")]), t._v("  \n                      "), s("button", {
                staticClass: "progress-button primary-progress",
                attrs: {
                    "data-style": "shrink",
                    "data-horizontal": ""
                }
            }, [t._v("Submit")]), t._v("  \n                      "), s("button", {
                staticClass: "progress-button primary-progress",
                attrs: {
                    "data-style": "shrink",
                    "data-vertical": ""
                }
            }, [t._v("Submit")]), t._v("  \n                      "), s("button", {
                staticClass: "progress-button primary-progress",
                attrs: {
                    "data-style": "rotate-angle-bottom",
                    "data-perspective": "",
                    "data-horizontal": ""
                }
            }, [t._v("Submit")]), t._v("  \n                      ")]), t._v(" "), s("hr"), t._v(" "), s("p", [s("button", {
                staticClass: "progress-button primary-progress",
                attrs: {
                    "data-style": "rotate-angle-left",
                    "data-perspective": "",
                    "data-vertical": ""
                }
            }, [t._v("Submit")]), t._v("  \n                      "), s("button", {
                staticClass: "progress-button primary-progress",
                attrs: {
                    "data-style": "rotate-angle-right",
                    "data-perspective": "",
                    "data-vertical": ""
                }
            }, [t._v("Submit")]), t._v("  \n                      "), s("button", {
                staticClass: "progress-button primary-progress",
                attrs: {
                    "data-style": "rotate-side-down",
                    "data-perspective": "",
                    "data-horizontal": ""
                }
            }, [t._v("Submit")]), t._v("  \n                      "), s("button", {
                staticClass: "progress-button primary-progress",
                attrs: {
                    "data-style": "rotate-side-up",
                    "data-perspective": "",
                    "data-horizontal": ""
                }
            }, [t._v("Submit")]), t._v("  \n                      "), s("button", {
                staticClass: "progress-button primary-progress",
                attrs: {
                    "data-style": "rotate-back",
                    "data-perspective": "",
                    "data-horizontal": ""
                }
            }, [t._v("Submit")]), t._v("  \n                      ")]), t._v(" "), s("hr"), t._v(" "), s("p", [s("button", {
                staticClass: "progress-button primary-progress",
                attrs: {
                    "data-style": "flip-open",
                    "data-perspective": "",
                    "data-horizontal": ""
                }
            }, [t._v("Submit")]), t._v("  \n                      "), s("button", {
                staticClass: "progress-button primary-progress",
                attrs: {
                    "data-style": "slide-down",
                    "data-horizontal": ""
                }
            }, [t._v("Submit")]), t._v("  \n                      "), s("button", {
                staticClass: "progress-button primary-progress",
                attrs: {
                    "data-style": "move-up",
                    "data-horizontal": ""
                }
            }, [t._v("Submit")]), t._v("  \n                      "), s("button", {
                staticClass: "progress-button primary-progress",
                attrs: {
                    "data-style": "top-line",
                    "data-horizontal": ""
                }
            }, [t._v("Submit")]), t._v("  \n                      "), s("button", {
                staticClass: "progress-button primary-progress",
                attrs: {
                    "data-style": "lateral-lines",
                    "data-vertical": ""
                }
            }, [t._v("Submit")]), t._v("  \n                      ")])])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-md-4"
            }, [s("div", {
                staticClass: "panel panel-primary"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Button Sizes\n                          ")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("p", [s("button", {
                staticClass: "btn btn-danger btn-rounded btn-xs",
                attrs: {
                    type: "button"
                }
            }, [t._v("Extra Small Button")])]), t._v(" "), s("p", [s("button", {
                staticClass: "btn btn-success btn-rounded btn-sm",
                attrs: {
                    type: "button"
                }
            }, [t._v("Small Button")])]), t._v(" "), s("p", [s("button", {
                staticClass: "btn btn-info btn-rounded btn-lg",
                attrs: {
                    type: "button"
                }
            }, [t._v("Large Button")])]), t._v(" "), s("p", [s("button", {
                staticClass: "btn btn-warning btn-block btn-rounded",
                attrs: {
                    type: "button"
                }
            }, [t._v("Block Level Button")])])])])]), t._v(" "), s("div", {
                staticClass: "col-md-8"
            }, [s("div", {
                staticClass: "panel panel-primary"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Button Groups\n                              "), s("div", {
                staticClass: "panel-control pull-right"
            }, [s("a", {
                staticClass: "panelButton"
            }, [s("i", {
                staticClass: "fa fa-refresh"
            })]), t._v(" "), s("a", {
                staticClass: "panelButton"
            }, [s("i", {
                staticClass: "fa fa-minus"
            })]), t._v(" "), s("a", {
                staticClass: "panelButton"
            }, [s("i", {
                staticClass: "fa fa-remove"
            })])])])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("p"), s("div", {
                staticClass: "btn-group",
                attrs: {
                    role: "group"
                }
            }, [s("button", {
                staticClass: "btn btn-primary",
                attrs: {
                    type: "button"
                }
            }, [t._v("Primary Button")]), t._v(" "), s("button", {
                staticClass: "btn btn-default",
                attrs: {
                    type: "button"
                }
            }, [t._v("Default Button")])]), t._v(" "), s("p"), t._v(" "), s("hr"), t._v(" "), s("h4", [t._v("Justified Button Groups")]), t._v(" "), s("p"), t._v(" "), s("div", {
                staticClass: "btn-group btn-group-justified",
                attrs: {
                    role: "group"
                }
            }, [s("div", {
                staticClass: "btn-group",
                attrs: {
                    role: "group"
                }
            }, [s("button", {
                staticClass: "btn btn-primary",
                attrs: {
                    type: "button"
                }
            }, [t._v("Primary ")])]), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    role: "group"
                }
            }, [s("button", {
                staticClass: "btn btn-info",
                attrs: {
                    type: "button"
                }
            }, [t._v("Info")])]), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    role: "group"
                }
            }, [s("button", {
                staticClass: "btn btn-warning",
                attrs: {
                    type: "button"
                }
            }, [t._v("Warning")])]), t._v(" "), s("div", {
                staticClass: "btn-group",
                attrs: {
                    role: "group"
                }
            }, [s("button", {
                staticClass: "btn btn-danger",
                attrs: {
                    type: "button"
                }
            }, [t._v("Danger")])])])])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-sm-12"
            }, [s("div", {
                staticClass: "panel panel-primary"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Buttons with Icons\n                          "), s("div", {
                staticClass: "panel-control pull-right"
            }, [s("a", {
                staticClass: "panelButton"
            }, [s("i", {
                staticClass: "fa fa-refresh"
            })]), t._v(" "), s("a", {
                staticClass: "panelButton"
            }, [s("i", {
                staticClass: "fa fa-minus"
            })]), t._v(" "), s("a", {
                staticClass: "panelButton"
            }, [s("i", {
                staticClass: "fa fa-remove"
            })])])])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("button", {
                staticClass: "btn btn-primary btn-circle btn-lg",
                attrs: {
                    type: "button"
                }
            }, [s("i", {
                staticClass: "fa fa-twitter"
            })]), t._v(" "), s("button", {
                staticClass: "btn btn-info btn-circle btn-lg",
                attrs: {
                    type: "button"
                }
            }, [s("i", {
                staticClass: "fa fa-facebook"
            })]), t._v(" "), s("button", {
                staticClass: "btn btn-warning btn-rounded",
                attrs: {
                    type: "button"
                }
            }, [t._v("Download  "), s("i", {
                staticClass: "fa fa-download"
            })]), t._v(" "), s("button", {
                staticClass: "btn btn-success btn-bordered",
                attrs: {
                    type: "button"
                }
            }, [s("i", {
                staticClass: "fa fa-plus"
            }), t._v("  View More")]), t._v(" "), s("button", {
                staticClass: "btn btn-danger",
                attrs: {
                    type: "button"
                }
            }, [s("i", {
                staticClass: "fa fa-phone"
            }), t._v("  Call Us!")])])])])])])])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement;
            t._self._c || a;
            return t._m(0)
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "invoice"
                }
            }, [s("div", {
                staticClass: "animated fadeIn"
            }, [s("div", {
                staticClass: "panel panel-default",
                attrs: {
                    id: "panel-invoice"
                }
            }, [s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "invoice"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-md-6"
            }, [s("a", {
                attrs: {
                    href: "/dashboard"
                }
            }, [s("span", {
                staticClass: "text text-muted"
            }, [t._v(" Ani Theme")])])]), t._v(" "), s("div", {
                staticClass: "col-md-6 text-right"
            }, [s("p", {
                staticClass: "text-dark"
            }, [t._v("\n    \t\t\t\t\t\t#1233219 / 01 Jan 2014  "), s("br"), s("small", {
                staticClass: "text-light"
            }, [t._v(" Lorem ipsum dolor sit amet ")])])])]), t._v(" "), s("hr"), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-md-4"
            }, [s("h4", [t._v("Client:")]), t._v(" "), s("div", {
                staticClass: "well"
            }, [s("address", [s("strong", {
                staticClass: "text-dark"
            }, [t._v("Customer Company, Inc.")]), t._v(" "), s("br"), t._v("\n    \t\t\t\t\t\t\t1 Infinite Loop\n    \t\t\t\t\t\t\t"), s("br"), t._v("\n    \t\t\t\t\t\t\tCupertino, CA 95014\n    \t\t\t\t\t\t\t"), s("br"), t._v(" "), s("abbr", {
                attrs: {
                    title: "Phone"
                }
            }, [t._v("P:")]), t._v(" (123) 456-7890\n    \t\t\t\t\t\t")]), t._v(" "), s("address", [s("strong", {
                staticClass: "text-dark"
            }, [t._v("E-mail:")]), t._v(" "), s("a", {
                attrs: {
                    href: "mailto:#"
                }
            }, [t._v("\n    \t\t\t\t\t\t\t\tinfo@customer.com\n    \t\t\t\t\t\t\t")])])])]), t._v(" "), s("div", {
                staticClass: "col-md-4"
            }), t._v(" "), s("div", {
                staticClass: "col-md-4 pull-right payment-detals-wrap"
            }, [s("h4", [t._v("Payment Details:")]), t._v(" "), s("ul", {
                staticClass: "list-unstyled invoice-details"
            }, [s("li", [s("strong", [t._v("V.A.T Reg #:")]), t._v(" 233243444\n    \t\t\t\t\t\t")]), t._v(" "), s("li", [s("strong", [t._v("Account Name:")]), t._v(" Company Ltd\n    \t\t\t\t\t\t")]), t._v(" "), s("li", [s("strong", [t._v("SWIFT code:")]), t._v(" 1233F4343ABCDEW\n    \t\t\t\t\t\t")]), t._v(" "), s("li", [s("strong", [t._v("DATE:")]), t._v(" 01/01/2014\n    \t\t\t\t\t\t")]), t._v(" "), s("li", [s("strong", [t._v("DUE:")]), t._v(" 11/02/2014\n    \t\t\t\t\t\t")])])])]), t._v(" "), s("hr"), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-sm-12"
            }, [s("table", {
                staticClass: "table table-bordered table-striped"
            }, [s("thead", [s("tr", [s("th", [t._v(" # ")]), t._v(" "), s("th", [t._v(" Item ")]), t._v(" "), s("th", {
                staticClass: "hidden-480"
            }, [t._v(" Description ")]), t._v(" "), s("th", {
                staticClass: "hidden-480"
            }, [t._v(" Quantity ")]), t._v(" "), s("th", {
                staticClass: "hidden-480"
            }, [t._v(" Unit Cost ")]), t._v(" "), s("th", [t._v(" Total ")])])]), t._v(" "), s("tbody", [s("tr", [s("td", [t._v(" 1 ")]), t._v(" "), s("td", [t._v(" Lorem ")]), t._v(" "), s("td", {
                staticClass: "hidden-480"
            }, [t._v(" Drem psum dolor ")]), t._v(" "), s("td", {
                staticClass: "hidden-480"
            }, [t._v(" 12 ")]), t._v(" "), s("td", {
                staticClass: "hidden-480"
            }, [t._v(" $35 ")]), t._v(" "), s("td", [t._v(" $1152 ")])]), t._v(" "), s("tr", [s("td", [t._v(" 2 ")]), t._v(" "), s("td", [t._v(" Ipsum ")]), t._v(" "), s("td", {
                staticClass: "hidden-480"
            }, [t._v(" Consectetuer adipiscing elit ")]), t._v(" "), s("td", {
                staticClass: "hidden-480"
            }, [t._v(" 21 ")]), t._v(" "), s("td", {
                staticClass: "hidden-480"
            }, [t._v(" $469 ")]), t._v(" "), s("td", [t._v(" $6159 ")])]), t._v(" "), s("tr", [s("td", [t._v(" 3 ")]), t._v(" "), s("td", [t._v(" Dolor ")]), t._v(" "), s("td", {
                staticClass: "hidden-480"
            }, [t._v(" Olor sit amet adipiscing eli ")]), t._v(" "), s("td", {
                staticClass: "hidden-480"
            }, [t._v(" 24 ")]), t._v(" "), s("td", {
                staticClass: "hidden-480"
            }, [t._v(" $144 ")]), t._v(" "), s("td", [t._v(" $8270 ")])]), t._v(" "), s("tr", [s("td", [t._v(" 4 ")]), t._v(" "), s("td", [t._v(" Sit ")]), t._v(" "), s("td", {
                staticClass: "hidden-480"
            }, [t._v(" Laoreet dolore magna ")]), t._v(" "), s("td", {
                staticClass: "hidden-480"
            }, [t._v(" 194 ")]), t._v(" "), s("td", {
                staticClass: "hidden-480"
            }, [t._v(" $317 ")]), t._v(" "), s("td", [t._v(" $966 ")])])])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-sm-12 invoice-block"
            }, [s("ul", {
                staticClass: "list-unstyled amounts text-small",
                attrs: {
                    align: "right"
                }
            }, [s("li", [s("strong", [t._v("Sub-Total:")]), t._v(" $12,876\n    \t\t\t\t\t\t")]), t._v(" "), s("li", [s("strong", [t._v("Discount:")]), t._v(" 9.9%\n    \t\t\t\t\t\t")]), t._v(" "), s("li", [s("strong", [t._v("VAT:")]), t._v(" 22%\n    \t\t\t\t\t\t")]), t._v(" "), s("li", {
                staticClass: "text-extra-large"
            }, [s("strong", [t._v("Total:")]), t._v(" $11,400\n    \t\t\t\t\t\t")])]), t._v(" "), s("br"), t._v(" "), s("a", {
                staticClass: "btn btn-rounded btn-primary btn-o hidden-print pull-right"
            }, [t._v("\n    \t\t\t\t\t\tSubmit Your Invoice "), s("i", {
                staticClass: "fa fa-check"
            })]), t._v("    \n    \t\t\t\t\t"), s("a", {
                staticClass: "btn btn-bordered btn-primary hidden-print pull-right",
                attrs: {
                    onclick: "javascript:window.print();"
                }
            }, [t._v("\n    \t\t\t\t\t\tPrint "), s("i", {
                staticClass: "fa fa-print"
            })])])])])])])])])
        }]
    }
}, function(t, a, s) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                e = t._self._c || a;
            return e("div", {
                attrs: {
                    id: "login"
                }
            }, [e("div", {
                staticClass: "login-page"
            }, [e("div", {
                staticClass: "row"
            }, [e("div", {
                staticClass: "col-xs-12 col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4 aanimated fadeIn"
            }, [e("img", {
                staticClass: "user-avatar",
                attrs: {
                    src: s(6)
                }
            }), t._v(" "), e("h1", [t._v("Ani Theme ")]), t._v(" "), t._m(0), t._v(" "), e("router-link", {
                attrs: {
                    to: "/dashboard/home"
                }
            }, [e("a", {
                attrs: {
                    href: ""
                }
            }, [e("button", {
                staticClass: "btn btn-login-page btn-white btn-outline btn-rounded"
            }, [t._v("Log in")])])]), t._v("\n\n           \n          "), e("router-link", {
                attrs: {
                    to: "/signup"
                }
            }, [e("a", {
                attrs: {
                    href: ""
                }
            }, [e("button", {
                staticClass: "btn btn-login-page btn-white btn-outline btn-rounded"
            }, [t._v("Register Here")])])])], 1)])])])
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "form-content"
            }, [s("div", {
                staticClass: "form-group"
            }, [s("input", {
                staticClass: "input-underline input-lg in-login-page",
                attrs: {
                    type: "text",
                    "ng-model": "name",
                    placeholder: "Email",
                    id: ""
                }
            })]), t._v(" "), s("div", {
                staticClass: "form-group"
            }, [s("input", {
                staticClass: "input-underline input-lg in-login-page",
                attrs: {
                    type: "password",
                    placeholder: "Password",
                    id: ""
                }
            })])])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "ltr",
                attrs: {
                    id: "dashboard"
                }
            }, [s("Navbar"), t._v(" "), s("Sidebar"), t._v(" "), s("div", {
                staticClass: "conter-wrapper",
                attrs: {
                    id: "body-container"
                }
            }, [s("router-view")], 1)], 1)
        },
        staticRenderFns: []
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "full-calendar-body"
            }, [s("div", {
                staticClass: "weeks"
            }, t._l(t.weekNames, function(a) {
                return s("strong", {
                    staticClass: "week"
                }, [t._v(t._s(a))])
            })), t._v(" "), s("div", {
                ref: "dates",
                staticClass: "dates"
            }, [s("div", {
                staticClass: "dates-bg"
            }, t._l(t.currentDates, function(a) {
                return s("div", {
                    staticClass: "week-row"
                }, t._l(a, function(a) {
                    return s("div", {
                        staticClass: "day-cell",
                        class: {
                            today: a.isToday, "not-cur-month": !a.isCurMonth
                        }
                    }, [s("p", {
                        staticClass: "day-number"
                    }, [t._v(t._s(a.monthDay))])])
                }))
            })), t._v(" "), s("div", {
                staticClass: "dates-events"
            }, t._l(t.currentDates, function(a) {
                return s("div", {
                    staticClass: "events-week"
                }, t._l(a, function(a) {
                    return s("div", {
                        staticClass: "events-day",
                        class: {
                            today: a.isToday, "not-cur-month": !a.isCurMonth
                        },
                        attrs: {
                            "track-by": "$index"
                        },
                        on: {
                            click: function(s) {
                                s.stopPropagation(), t.dayClick(a.date, s)
                            }
                        }
                    }, [s("p", {
                        staticClass: "day-number"
                    }, [t._v(t._s(a.monthDay))]), t._v(" "), s("div", {
                        staticClass: "event-box"
                    }, [t._l(a.events, function(e) {
                        return s("p", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.cellIndex <= t.eventLimit,
                                expression: "event.cellIndex <= eventLimit"
                            }],
                            staticClass: "event-item",
                            class: [t.classNames(e.cssClass), {
                                "is-start": t.isStart(e.start, a.date),
                                "is-end": t.isEnd(e.end, a.date),
                                "is-opacity": !e.isShow
                            }],
                            on: {
                                click: function(a) {
                                    t.eventClick(e, a)
                                }
                            }
                        }, [t._v("\n              " + t._s(t.isBegin(e, a.date, a.weekDay)) + "\n            ")])
                    }), t._v(" "), a.events.length > t.eventLimit ? s("p", {
                        staticClass: "more-link",
                        on: {
                            click: function(s) {
                                s.stopPropagation(), t.selectThisDay(a, s)
                            }
                        }
                    }, [t._v("\n              + " + t._s(a.events[a.events.length - 1].cellIndex - t.eventLimit) + " more\n            ")]) : t._e()], 2)])
                }))
            })), t._v(" "), s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showMore,
                    expression: "showMore"
                }],
                staticClass: "more-events",
                style: {
                    left: t.morePos.left + "px",
                    top: t.morePos.top + "px"
                }
            }, [s("div", {
                staticClass: "more-header"
            }, [s("span", {
                staticClass: "title"
            }, [t._v(t._s(t.moreTitle(t.selectDay.date)))]), t._v(" "), s("span", {
                staticClass: "close",
                on: {
                    click: function(a) {
                        a.stopPropagation(), t.showMore = !1
                    }
                }
            }, [t._v("x")])]), t._v(" "), s("div", {
                staticClass: "more-body"
            }, [s("ul", {
                staticClass: "body-list"
            }, t._l(t.selectDay.events, function(a) {
                return s("li", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: a.isShow,
                        expression: "event.isShow"
                    }],
                    staticClass: "body-item",
                    on: {
                        click: function(s) {
                            t.eventClick(a, s)
                        }
                    }
                }, [t._v("\n            " + t._s(a.title) + "\n          ")])
            }))])]), t._v(" "), t._t("body-card")], 2)])
        },
        staticRenderFns: []
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "ltr",
                attrs: {
                    id: "mail"
                }
            }, [s("router-view")], 1)
        },
        staticRenderFns: []
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement;
            t._self._c || a;
            return t._m(0)
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "icons"
                }
            }, [s("div", {
                staticClass: "animated fadeIn"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-sm-12"
            }, [s("div", {
                staticClass: "panel panel-primary icon-page"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Icons\n\t\t\t\t\t\t"), s("div", {
                staticClass: "panel-control pull-right"
            }, [s("a", {
                staticClass: "panelButton"
            }, [s("i", {
                staticClass: "fa fa-refresh"
            })]), t._v(" "), s("a", {
                staticClass: "panelButton"
            }, [s("i", {
                staticClass: "fa fa-minus"
            })]), t._v(" "), s("a", {
                staticClass: "panelButton"
            }, [s("i", {
                staticClass: "fa fa-remove"
            })])])])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "fa col-lg-3"
            }, [s("p", [s("i", {
                staticClass: "fa fa-glass"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-glass\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-music"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-music\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-search"
            }), t._v("\n\t\t\t\t\t\t\tfa-search\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-envelope-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-envelope-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-heart"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-heart\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-star"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-star\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-star-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-star-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-user"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-user\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-film"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-film\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-th-large"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-th-large\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-th"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-th\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-th-list"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-th-list\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-check"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-check\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-times"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-times\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-search-plus"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-search-plus\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-search-minus"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-search-minus\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-power-off"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-power-off\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-signal"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-signal\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-gear"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-gear\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-cog"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-cog\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-trash-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-trash-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-home"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-home\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-file-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-file-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-clock-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-clock-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-road"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-road\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-download"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-download\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-arrow-circle-o-down"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-arrow-circle-o-down\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-arrow-circle-o-up"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-arrow-circle-o-up\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-inbox"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-inbox\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-play-circle-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-play-circle-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-rotate-right"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-rotate-right\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-repeat"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-repeat\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-refresh"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-refresh\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-list-alt"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-list-alt\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-lock"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-lock\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-flag"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-flag\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-headphones"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-headphones\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-volume-off"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-volume-off\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-volume-down"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-volume-down\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-volume-up"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-volume-up\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-qrcode"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-qrcode\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-barcode"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-barcode\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-tag"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-tag\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-tags"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-tags\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-book"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-book\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-bookmark"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-bookmark\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-print"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-print\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-camera"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-camera\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-font"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-font\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-bold"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-bold\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-italic"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-italic\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-text-height"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-text-height\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-text-width"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-text-width\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-align-left"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-align-left\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-align-center"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-align-center\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-align-right"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-align-right\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-align-justify"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-align-justify\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-list"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-list\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-dedent"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-dedent\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-outdent"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-outdent\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-indent"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-indent\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-video-camera"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-video-camera\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-photo"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-photo\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-image"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-image\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-picture-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-picture-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-pencil"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-pencil\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-map-marker"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-map-marker\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-adjust"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-adjust\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-tint"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-tint\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-edit"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-edit\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-pencil-square-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-pencil-square-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-share-square-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-share-square-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-check-square-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-check-square-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-arrows"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-arrows\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-step-backward"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-step-backward\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-fast-backward"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-fast-backward\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-backward"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-backward\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-play"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-play\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-pause"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-pause\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-stop"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-stop\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-forward"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-forward\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-fast-forward"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-fast-forward\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-step-forward"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-step-forward\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-eject"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-eject\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-chevron-left"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-chevron-left\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-chevron-right"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-chevron-right\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-plus-circle"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-plus-circle\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-minus-circle"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-minus-circle\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-times-circle"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-times-circle\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-check-circle"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-check-circle\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-question-circle"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-question-circle\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-info-circle"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-info-circle\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-crosshairs"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-crosshairs\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-times-circle-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-times-circle-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-check-circle-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-check-circle-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-ban"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-ban\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-arrow-left"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-arrow-left\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-arrow-right"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-arrow-right\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-arrow-up"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-arrow-up\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-arrow-down"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-arrow-down\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-mail-forward"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-mail-forward\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-share"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-share\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-expand"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-expand\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-compress"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-compress\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-plus"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-plus\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-minus"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-minus\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-asterisk"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-asterisk\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-exclamation-circle"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-exclamation-circle\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-gift"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-gift\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-leaf"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-leaf\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-fire"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-fire\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-eye"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-eye\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-eye-slash"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-eye-slash\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-warning"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-warning\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-exclamation-triangle"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-exclamation-triangle\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-plane"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-plane\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-calendar"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-calendar\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-random"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-random\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-comment"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-comment\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-magnet"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-magnet\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-chevron-up"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-chevron-up\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-chevron-down"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-chevron-down\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-retweet"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-retweet\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-shopping-cart"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-shopping-cart\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-folder"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-folder\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-folder-open"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-folder-open")])]), t._v(" "), s("div", {
                staticClass: "fa col-lg-3"
            }, [s("p", [s("i", {
                staticClass: "fa fa-arrows-h"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-arrows-h\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-bar-chart-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-bar-chart-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-twitter-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-twitter-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-facebook-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-facebook-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-camera-retro"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-camera-retro\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-key"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-key\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-gears"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-gears\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-cogs"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-cogs\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-comments"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-comments\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-thumbs-o-up"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-thumbs-o-up\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-thumbs-o-down"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-thumbs-o-down\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-star-half"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-star-half\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-heart-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-heart-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-sign-out"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-sign-out\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-linkedin-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-linkedin-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-thumb-tack"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-thumb-tack\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-external-link"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-external-link\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-sign-in"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-sign-in\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-trophy"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-trophy\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-github-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-github-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-upload"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-upload\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-lemon-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-lemon-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-phone"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-phone\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-square-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-square-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-bookmark-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-bookmark-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-phone-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-phone-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-twitter"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-twitter\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-facebook"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-facebook\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-github"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-github\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-unlock"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-unlock\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-credit-card"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-credit-card\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-rss"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-rss\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-hdd-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-hdd-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-bullhorn"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-bullhorn\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-bell"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-bell\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-certificate"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-certificate\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-hand-o-right"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-hand-o-right\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-hand-o-left"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-hand-o-left\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-hand-o-up"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-hand-o-up\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-hand-o-down"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-hand-o-down\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-arrow-circle-left"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-arrow-circle-left\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-arrow-circle-right"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-arrow-circle-right\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-arrow-circle-up"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-arrow-circle-up\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-arrow-circle-down"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-arrow-circle-down\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-globe"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-globe\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-wrench"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-wrench\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-tasks"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-tasks\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-filter"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-filter\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-brifiase"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-brifiase\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-arrows-alt"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-arrows-alt\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-group"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-group\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-users"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-users\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-chain"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-chain\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-link"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-link\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-cloud"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-cloud\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-flask"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-flask\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-cut"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-cut\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-scissors"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-scissors\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-copy"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-copy\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-files-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-files-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-paperclip"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-paperclip\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-save"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-save\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-floppy-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-floppy-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-navicon"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-navicon\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-reorder"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-reorder\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-bars"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-bars\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-list-ul"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-list-ul\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-list-ol"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-list-ol\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-strikethrough"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-strikethrough\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-underline"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-underline\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-table"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-table\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-magic"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-magic\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-truck"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-truck\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-pinterest"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-pinterest\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-pinterest-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-pinterest-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-google-plus-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-google-plus-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-google-plus"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-google-plus\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-money"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-money\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-caret-down"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-caret-down\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-caret-up"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-caret-up\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-caret-left"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-caret-left\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-caret-right"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-caret-right\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-columns"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-columns\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-unsorted"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-unsorted\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-sort"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-sort\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-sort-down"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-sort-down\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-sort-desc"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-sort-desc\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-sort-up"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-sort-up\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-sort-asc"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-sort-asc\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-envelope"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-envelope\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-linkedin"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-linkedin\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-rotate-left"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-rotate-left\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-undo"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-undo\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-legal"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-legal\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-gavel"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-gavel\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-dashboard"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-dashboard\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-tachometer"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-tachometer\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-comment-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-comment-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-comments-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-comments-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-flash"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-flash\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-bolt"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-bolt\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-sitemap"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-sitemap\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-mbreli"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-umbreli\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-paste"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-paste\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-clipboard"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-clipboard\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-lightbulb-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-lightbulb-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-exchange"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-exchange\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-cloud-download"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-cloud-download\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-cloud-upload"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-cloud-upload\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-user-md"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-user-md\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-stethoscope"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-stethoscope\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-suitcase"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-suitcase\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-bell-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-bell-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-coffee"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-coffee\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-cutlery"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-cutlery\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-file-text-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-file-text-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-building-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-building-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-hospital-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-hospital-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-ambulance"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-ambulance\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-medkit"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-medkit\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-fighter-jet"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-fighter-jet\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-beer"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-beer\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-h-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-h-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-plus-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-plus-square\n\t\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "fa col-lg-3"
            }, [s("p", [s("i", {
                staticClass: "fa fa-angle-double-right"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-angle-double-right\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-angle-double-up"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-angle-double-up\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-angle-double-down"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-angle-double-down\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-angle-left"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-angle-left\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-angle-right"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-angle-right\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-angle-up"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-angle-up\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-angle-down"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-angle-down\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-desktop"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-desktop\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-laptop"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-laptop\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-tablet"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-tablet\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-mobile-phone"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-mobile-phone\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-mobile"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-mobile\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-circle-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-circle-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-quote-left"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-quote-left\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-quote-right"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-quote-right\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-spinner"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-spinner\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-circle"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-circle\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-mail-reply"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-mail-reply\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-reply"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-reply\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-github-alt"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-github-alt\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-folder-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-folder-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-folder-open-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-folder-open-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-smile-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-smile-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-frown-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-frown-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-meh-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-meh-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-gamepad"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-gamepad\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-keyboard-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-keyboard-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-flag-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-flag-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-flag-checkered"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-flag-checkered\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-terminal"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-terminal\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-code"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-code\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-mail-reply-all"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-mail-reply-all\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-reply-all"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-reply-all\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-star-half-empty"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-star-half-empty\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-star-half-full"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-star-half-full\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-star-half-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-star-half-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-location-arrow"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-location-arrow\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-crop"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-crop\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-code-fork"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-code-fork\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-unlink"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-unlink\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-chain-broei"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-chain-broei\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-question"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-question\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-info"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-info\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-exclamation"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-exclamation\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-superscript"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-superscript\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-subscript"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-subscript\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-eraser"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-eraser\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-puzzle-piece"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-puzzle-piece\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-microphone"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-microphone\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-microphone-slash"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-microphone-slash\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-shield"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-shield\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-calendar-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-calendar-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-fire-extinguisher"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-fire-extinguisher\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-rocket"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-rocket\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-maxcdn"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-maxcdn\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-chevron-circle-left"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-chevron-circle-left\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-chevron-circle-right"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-chevron-circle-right\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-chevron-circle-up"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-chevron-circle-up\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-chevron-circle-down"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-chevron-circle-down\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-html5"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-html5\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-css3"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-css3\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-anchor"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-anchor\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-unlock-alt"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-unlock-alt\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-bullseye"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-bullseye\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-ellipsis-h"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-ellipsis-h\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-ellipsis-v"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-ellipsis-v\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-rss-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-rss-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-play-circle"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-play-circle\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-ticket"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-ticket\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-minus-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-minus-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-minus-square-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-minus-square-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-level-up"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-level-up\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-level-down"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-level-down\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-check-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-check-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-pencil-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-pencil-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-external-link-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-external-link-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-share-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-share-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-compass"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-compass\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-toggle-down"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-toggle-down\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-caret-square-o-down"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-caret-square-o-down\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-toggle-up"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-toggle-up\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-caret-square-o-up"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-caret-square-o-up\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-toggle-right"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-toggle-right\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-caret-square-o-right"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-caret-square-o-right\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-euro"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-euro\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-eur"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-eur\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-gbp"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-gbp\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-dollar"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-dollar\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-usd"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-usd\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-rupee"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-rupee\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-inr"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-inr\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-cny"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-cny\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-rmb"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-rmb\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-yen"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-yen\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-jpy"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-jpy\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-ruble"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-ruble\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-rouble"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-rouble\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-rub"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-rub\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-won"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-won\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-krw"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-krw\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-bitcoin"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-bitcoin\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-btc"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-btc\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-file"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-file\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-file-text"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-file-text\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-sort-alpha-asc"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-sort-alpha-asc\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-sort-alpha-desc"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-sort-alpha-desc\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-sort-amount-asc"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-sort-amount-asc\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-sort-amount-desc"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-sort-amount-desc\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-sort-numeric-asc"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-sort-numeric-asc\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-sort-numeric-desc"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-sort-numeric-desc\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-thumbs-up"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-thumbs-up\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-thumbs-down"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-thumbs-down\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-youtube-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-youtube-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-youtube"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-youtube\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-xing"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-xing\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-xing-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-xing-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-youtube-play"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-youtube-play\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-dropbox"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-dropbox\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-stack-overflow"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-stack-overflow\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-instagram"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-instagram\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-flickr"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-flickr\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-adn"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-adn\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-bitbucket"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-bitbucket\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-bitbucket-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-bitbucket-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-tumblr"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-tumblr\n\t\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                staticClass: "fa col-lg-3"
            }, [s("p", [s("i", {
                staticClass: "fa fa-long-arrow-down"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-long-arrow-down\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-long-arrow-up"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-long-arrow-up\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-long-arrow-left"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-long-arrow-left\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-long-arrow-right"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-long-arrow-right\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-apple"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-apple\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-windows"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-windows\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-android"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-android\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-linux"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-linux\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-dribbble"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-dribbble\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-skype"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-skype\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-foursquare"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-foursquare\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-trello"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-trello\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-female"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-female\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-male"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-male\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-gittip"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-gittip\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-sun-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-sun-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-moon-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-moon-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-archive"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-archive\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-bug"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-bug\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-vk"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-vk\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-weibo"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-weibo\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-renren"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-renren\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-pagelines"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-pagelines\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-stack-exchange"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-stack-exchange\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-arrow-circle-o-right"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-arrow-circle-o-right\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-arrow-circle-o-left"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-arrow-circle-o-left\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-toggle-left"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-toggle-left\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-caret-square-o-left"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-caret-square-o-left\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-dot-circle-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-dot-circle-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-wheelchair"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-wheelchair\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-vimeo-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-vimeo-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-turkish-lira"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-turkish-lira\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-try"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-try\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-plus-square-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-plus-square-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-space-shuttle"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-space-shuttle\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-slack"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-slack\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-envelope-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-envelope-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-wordpress"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-wordpress\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-openid"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-openid\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-institution"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-institution\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-bank"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-bank\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-university"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-university\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-mortar-board"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-mortar-board\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-graduation-cap"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-graduation-cap\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-yahoo"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-yahoo\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-google"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-google\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-reddit"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-reddit\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-reddit-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-reddit-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-stumbleupon-circle"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-stumbleupon-circle\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-stumbleupon"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-stumbleupon\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-delicious"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-delicious\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-digg"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-digg\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-pied-piper-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-pied-piper-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-pied-piper"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-pied-piper\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-pied-piper-alt"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-pied-piper-alt\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-drupal"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-drupal\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-joomla"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-joomla\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-language"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-language\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-fax"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-fax\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-building"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-building\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-child"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-child\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-paw"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-paw\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-spoon"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-spoon\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-cube"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-cube\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-cubes"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-cubes\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-behance"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-behance\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-behance-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-behance-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-steam"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-steam\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-steam-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-steam-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-recycle"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-recycle\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-automobile"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-automobile\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-car"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-car\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-cab"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-cab\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-taxi"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-taxi\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-tree"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-tree\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-spotify"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-spotify\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-deviantart"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-deviantart\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-soundcloud"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-soundcloud\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-database"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-database\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-file-pdf-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-file-pdf-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-file-word-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-file-word-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-file-excel-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-file-excel-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-file-powerpoint-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-file-powerpoint-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-file-photo-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-file-photo-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-file-picture-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-file-picture-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-file-image-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-file-image-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-file-zip-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-file-zip-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-file-archive-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-file-archive-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-file-sound-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-file-sound-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-file-audio-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-file-audio-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-file-movie-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-file-movie-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-file-video-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-file-video-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-file-code-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-file-code-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-vine"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-vine\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-codepen"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-codepen\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-jsfiddle"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-jsfiddle\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-life-bouy"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-life-bouy\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-life-saver"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-life-saver\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-support"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-support\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-life-ring"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-life-ring\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-circle-o-notch"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-circle-o-notch\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-ra"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-ra\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-rebel"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-rebel\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-ge"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-ge\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-empire"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-empire\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-git-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-git-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-git"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-git\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-hacker-news"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-hacker-news\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-tencent-weibo"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-tencent-weibo\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-qq"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-qq\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-wechat"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-wechat\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-weixin"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-weixin\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-send"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-send\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-paper-plane"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-paper-plane\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-send-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-send-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-paper-plane-o"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-paper-plane-o\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-history"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-history\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-circle-thin"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-circle-thin\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-header"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-header\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-paragraph"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-paragraph\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-sliders"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-sliders\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-share-alt"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-share-alt\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-share-alt-square"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-share-alt-square\n\t\t\t\t\t\t\t")]), s("p", [s("i", {
                staticClass: "fa fa-bomb"
            }), t._v("\n\t\t\t\t\t\t\t\tfa-bomb\n\t\t\t\t\t\t\t")])])])])])])])])])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement;
            t._self._c || a;
            return t._m(0)
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "progress-bar"
                }
            }, [s("div", {
                staticClass: "animated fadeIn"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-md-6"
            }, [s("div", {
                staticClass: "panel panel-success"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Progress Bars\n                  ")])]), t._v(" "), s("div", {
                staticStyle: {
                    margin: "20px",
                    "min-height": "200px"
                }
            }, [s("h4", {
                staticStyle: {
                    "font-size": "16px"
                }
            }, [t._v("Regular")]), t._v(" "), s("div", {
                staticClass: "progress"
            }, [s("div", {
                staticClass: "progress-bar",
                staticStyle: {
                    width: "70%",
                    "background-color": "#5CB85C"
                },
                attrs: {
                    role: "progressbar",
                    "aria-valuenow": "70",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }
            }, [s("span", {
                staticClass: "sr-only"
            }, [t._v("70% Complete")])])]), t._v(" "), s("h4", {
                staticStyle: {
                    "font-size": "16px"
                }
            }, [t._v("With Label")]), t._v(" "), s("div", {
                staticClass: "progress"
            }, [s("div", {
                staticClass: "progress-bar",
                staticStyle: {
                    width: "60%",
                    "background-color": "#5CB85C"
                },
                attrs: {
                    role: "progressbar",
                    "aria-valuenow": "70",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }
            }, [s("p", {
                staticClass: "text-center",
                staticStyle: {
                    "font-size": "12px",
                    color: "#fff",
                    "font-weight": "500",
                    "line-height": "20px"
                }
            }, [t._v("60%")])])]), t._v(" "), s("h4", {
                staticStyle: {
                    "font-size": "16px"
                }
            }, [t._v("Stacked")]), t._v(" "), s("div", {
                staticClass: "progress"
            }, [s("div", {
                staticClass: "progress-bar progress-bar-success",
                staticStyle: {
                    width: "40%"
                },
                attrs: {
                    role: "progressbar"
                }
            }, [s("p", {
                staticClass: "text-center",
                staticStyle: {
                    "font-size": "10px",
                    color: "#fff",
                    "font-weight": "500",
                    "line-height": "14px"
                }
            })]), t._v(" "), s("div", {
                staticClass: "progress-bar progress-bar-warning",
                staticStyle: {
                    width: "10%"
                },
                attrs: {
                    role: "progressbar"
                }
            }, [s("p", {
                staticClass: "text-center",
                staticStyle: {
                    "font-size": "10px",
                    color: "#fff",
                    "font-weight": "500",
                    "line-height": "14px"
                }
            })]), t._v(" "), s("div", {
                staticClass: "progress-bar progress-bar-danger",
                staticStyle: {
                    width: "20%"
                },
                attrs: {
                    role: "progressbar"
                }
            }, [s("p", {
                staticClass: "text-center",
                staticStyle: {
                    "font-size": "10px",
                    color: "#fff",
                    "font-weight": "500",
                    "line-height": "14px"
                }
            })])])])])]), t._v(" "), s("div", {
                staticClass: "col-md-6"
            }, [s("div", {
                staticClass: "panel panel-info"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Contextual Progressbars\n                    ")])]), t._v(" "), s("div", {
                staticStyle: {
                    margin: "20px",
                    "min-height": "210px"
                }
            }, [s("div", {
                staticClass: "progress"
            }, [s("div", {
                staticClass: "progress-bar progress-bar-success",
                staticStyle: {
                    width: "100%"
                },
                attrs: {
                    role: "progressbar",
                    "aria-valuenow": "70",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }
            }, [s("span", {
                staticClass: "sr-only"
            }, [t._v("70% Complete")])])]), t._v(" "), s("div", {
                staticClass: "progress"
            }, [s("div", {
                staticClass: "progress-bar progress-bar-primary",
                staticStyle: {
                    width: "80%"
                },
                attrs: {
                    role: "progressbar",
                    "aria-valuenow": "70",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }
            }, [s("span", {
                staticClass: "sr-only"
            }, [t._v("70% Complete")])])]), t._v(" "), s("div", {
                staticClass: "progress"
            }, [s("div", {
                staticClass: "progress-bar progress-bar-warning",
                staticStyle: {
                    width: "60%"
                },
                attrs: {
                    role: "progressbar",
                    "aria-valuenow": "70",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }
            }, [s("span", {
                staticClass: "sr-only"
            }, [t._v("70% Complete")])])]), t._v(" "), s("div", {
                staticClass: "progress"
            }, [s("div", {
                staticClass: "progress-bar progress-bar-danger",
                staticStyle: {
                    width: "40%"
                },
                attrs: {
                    role: "progressbar",
                    "aria-valuenow": "70",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }
            }, [s("span", {
                staticClass: "sr-only"
            }, [t._v("70% Complete")])])]), t._v(" "), s("div", {
                staticClass: "progress"
            }, [s("div", {
                staticClass: "progress-bar progress-bar-info",
                staticStyle: {
                    width: "20%"
                },
                attrs: {
                    role: "progressbar",
                    "aria-valuenow": "70",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }
            }, [s("span", {
                staticClass: "sr-only"
            }, [t._v("70% Complete")])])])])])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "col-md-6"
            }, [s("div", {
                staticClass: "panel panel-primary"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Striped Progresbars\n                    ")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "progress"
            }, [s("div", {
                staticClass: "progress-bar progress-bar-success progress-bar-striped",
                staticStyle: {
                    width: "40%"
                },
                attrs: {
                    role: "progressbar",
                    "aria-valuenow": "40",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }
            }, [s("span", {
                staticClass: "sr-only"
            }, [t._v("40% Complete (success)")])])]), t._v(" "), s("div", {
                staticClass: "progress"
            }, [s("div", {
                staticClass: "progress-bar progress-bar-info progress-bar-striped",
                staticStyle: {
                    width: "20%"
                },
                attrs: {
                    role: "progressbar",
                    "aria-valuenow": "20",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }
            }, [s("span", {
                staticClass: "sr-only"
            }, [t._v("20% Complete")])])]), t._v(" "), s("div", {
                staticClass: "progress"
            }, [s("div", {
                staticClass: "progress-bar progress-bar-warning progress-bar-striped",
                staticStyle: {
                    width: "60%"
                },
                attrs: {
                    role: "progressbar",
                    "aria-valuenow": "60",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }
            }, [s("span", {
                staticClass: "sr-only"
            }, [t._v("60% Complete (warning)")])])]), t._v(" "), s("div", {
                staticClass: "progress"
            }, [s("div", {
                staticClass: "progress-bar progress-bar-danger progress-bar-striped",
                staticStyle: {
                    width: "80%"
                },
                attrs: {
                    role: "progressbar",
                    "aria-valuenow": "80",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }
            }, [s("span", {
                staticClass: "sr-only"
            }, [t._v("80% Complete (danger)")])])]), t._v(" "), s("div", {
                staticClass: "progress"
            }, [s("div", {
                staticClass: "progress-bar progress-bar-primary progress-bar-striped",
                staticStyle: {
                    width: "48%"
                },
                attrs: {
                    role: "progressbar",
                    "aria-valuenow": "80",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }
            }, [s("span", {
                staticClass: "sr-only"
            }, [t._v("80% Complete (danger)")])])])])])]), t._v(" "), s("div", {
                staticClass: "col-md-6"
            }, [s("div", {
                staticClass: "panel panel-danger"
            }, [s("div", {
                staticClass: "panel-heading"
            }, [s("h3", {
                staticClass: "panel-title"
            }, [t._v("Animated Progresbars\n                    ")])]), t._v(" "), s("div", {
                staticClass: "panel-body"
            }, [s("div", {
                staticClass: "progress"
            }, [s("div", {
                staticClass: "progress-bar progress-bar-striped progress-bar-primary active",
                staticStyle: {
                    width: "90%"
                },
                attrs: {
                    role: "progressbar",
                    "aria-valuenow": "45",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }
            }, [s("span", {
                staticClass: "sr-only"
            }, [t._v("45% Complete")])])]), t._v(" "), s("div", {
                staticClass: "progress"
            }, [s("div", {
                staticClass: "progress-bar progress-bar-striped progress-bar-success active",
                staticStyle: {
                    width: "70%"
                },
                attrs: {
                    role: "progressbar",
                    "aria-valuenow": "45",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }
            }, [s("span", {
                staticClass: "sr-only"
            }, [t._v("45% Complete")])])]), t._v(" "), s("div", {
                staticClass: "progress"
            }, [s("div", {
                staticClass: "progress-bar progress-bar-striped progress-bar-info active",
                staticStyle: {
                    width: "50%"
                },
                attrs: {
                    role: "progressbar",
                    "aria-valuenow": "45",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }
            }, [s("span", {
                staticClass: "sr-only"
            }, [t._v("45% Complete")])])]), t._v(" "), s("div", {
                staticClass: "progress"
            }, [s("div", {
                staticClass: "progress-bar progress-bar-striped progress-bar-danger active",
                staticStyle: {
                    width: "30%"
                },
                attrs: {
                    role: "progressbar",
                    "aria-valuenow": "45",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }
            }, [s("span", {
                staticClass: "sr-only"
            }, [t._v("45% Complete")])])]), t._v(" "), s("div", {
                staticClass: "progress"
            }, [s("div", {
                staticClass: "progress-bar progress-bar-striped progress-bar-warning active",
                staticStyle: {
                    width: "10%"
                },
                attrs: {
                    role: "progressbar",
                    "aria-valuenow": "45",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }
            }, [s("span", {
                staticClass: "sr-only"
            }, [t._v("45% Complete")])])])])])])])])])
        }]
    }
}, function(t, a, s) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                e = t._self._c || a;
            return e("div", {
                staticClass: "hidden-xs",
                attrs: {
                    id: "sidebar"
                }
            }, [e("div", {
                staticClass: "side-menu"
            }, [e("div", {
                staticClass: "menu-body"
            }, [e("ul", {
                staticClass: "nav nav-pills nav-stacked sidenav"
            }, [e("li", {
                attrs: {
                    "ng-class": "{active: $state.includes('home')}"
                }
            }, [e("router-link", {
                attrs: {
                    to: "/dashboard/home"
                }
            }, [e("a", {
                attrs: {
                    "ui-sref": "home"
                }
            }, [e("i", {
                staticClass: "fa fa-tachometer"
            })])]), t._v(" "), e("ul", {
                staticClass: "nested-dropdown animated fadeIn"
            }, [e("router-link", {
                attrs: {
                    to: "/dashboard/home"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ui-sref": "home"
                }
            }, [t._v(t._s(t.$t("message.dashboard")))])])])], 1)], 1), t._v(" "), e("li", {
                attrs: {
                    "ng-class": "{active: $state.includes('typography')}"
                }
            }, [e("router-link", {
                attrs: {
                    to: "/dashboard/typography"
                }
            }, [e("a", {
                attrs: {
                    "ui-sref": "typography"
                }
            }, [e("i", {
                staticClass: "fa fa-text-width"
            })])]), t._v(" "), e("ul", {
                staticClass: "nested-dropdown animated fadeIn"
            }, [e("router-link", {
                attrs: {
                    to: "/dashboard/typography"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ng-class": "{active: $state.includes('typography')}",
                    "ui-sref": "typography"
                }
            }, [t._v(t._s(t.$t("message.typography")))])])])], 1)], 1), t._v(" "), e("li", {
                attrs: {
                    "ng-class": "{active: $state.includes('grid')}"
                }
            }, [e("router-link", {
                attrs: {
                    to: "/dashboard/Grid"
                }
            }, [e("a", {
                attrs: {
                    "ui-sref": "grid"
                }
            }, [e("i", {
                staticClass: "fa fa-th"
            })])]), t._v(" "), e("ul", {
                staticClass: "nested-dropdown animated fadeIn"
            }, [e("router-link", {
                attrs: {
                    to: "/dashboard/Grid"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ui-sref": "grid"
                }
            }, [t._v(t._s(t.$t("message.grid")))])])])], 1)], 1), t._v(" "), e("li", {
                attrs: {
                    "ng-class": "{active: $state.includes('table')}"
                }
            }, [e("router-link", {
                attrs: {
                    to: "/dashboard/Table"
                }
            }, [e("a", {
                attrs: {
                    "ui-sref": "table"
                }
            }, [e("i", {
                staticClass: "fa fa-list"
            })])]), t._v(" "), e("ul", {
                staticClass: "nested-dropdown animated fadeIn"
            }, [e("router-link", {
                attrs: {
                    to: "/dashboard/Table"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ng-class": "{active: $state.includes('table')}",
                    "ui-sref": "table"
                }
            }, [t._v(t._s(t.$t("message.table")))])])])], 1)], 1), t._v(" "), e("li", {
                attrs: {
                    "ng-class": "{active: $state.includes('form')}"
                }
            }, [e("router-link", {
                attrs: {
                    to: "/dashboard/form/elements"
                }
            }, [e("a", {
                attrs: {
                    "ui-sref": "elements"
                }
            }, [e("i", {
                staticClass: "fa fa-pencil-square-o"
            })])]), t._v(" "), e("ul", {
                staticClass: "nested-dropdown animated fadeIn"
            }, [e("li", {
                staticClass: "sidemenu-header"
            }, [t._v(t._s(t.$t("message.form")))]), t._v(" "), e("router-link", {
                attrs: {
                    to: "/dashboard/form/elements"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ng-class": "{active: $state.includes('form')}",
                    "ui-sref": "elements"
                }
            }, [t._v(t._s(t.$t("message.elements")))])])]), t._v(" "), e("router-link", {
                attrs: {
                    to: "/dashboard/form/components"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ng-class": "{active: $state.includes('form')}",
                    "ui-sref": "components"
                }
            }, [t._v(t._s(t.$t("message.components")))])])])], 1)], 1), t._v(" "), e("li", {
                attrs: {
                    "ng-class": "{active: $state.includes('ui-interface')}"
                }
            }, [e("router-link", {
                attrs: {
                    to: "/dashboard/ui-interface/buttons"
                }
            }, [e("a", {
                attrs: {
                    "ui-sref": "button"
                }
            }, [e("i", {
                staticClass: "fa fa-cloud-download"
            })])]), t._v(" "), e("ul", {
                staticClass: "nested-dropdown animated fadeIn"
            }, [e("li", {
                staticClass: "sidemenu-header"
            }, [t._v(t._s(t.$t("message.user_interface")))]), t._v(" "), e("router-link", {
                attrs: {
                    to: "/dashboard/ui-interface/buttons"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ui-sref": "button"
                }
            }, [t._v(t._s(t.$t("message.buttons")))])])]), t._v(" "), e("router-link", {
                attrs: {
                    to: "/dashboard/ui-interface/dropdown"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ui-sref": "dropdown"
                }
            }, [t._v(t._s(t.$t("message.dropdown")))])])]), t._v(" "), e("router-link", {
                attrs: {
                    to: "/dashboard/ui-interface/icons"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ui-sref": "icons"
                }
            }, [t._v(t._s(t.$t("message.icons")))])])]), t._v(" "), e("router-link", {
                attrs: {
                    to: "/dashboard/ui-interface/panels"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ui-sref": "panels"
                }
            }, [t._v(t._s(t.$t("message.panels")))])])]), t._v(" "), e("router-link", {
                attrs: {
                    to: "/dashboard/ui-interface/alerts"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ui-sref": "alerts"
                }
            }, [t._v(t._s(t.$t("message.alerts")))])])]), t._v(" "), e("router-link", {
                attrs: {
                    to: "/dashboard/ui-interface/progress-bar"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ui-sref": "progressbars"
                }
            }, [t._v(t._s(t.$t("message.progressbars")))])])]), t._v(" "), e("router-link", {
                attrs: {
                    to: "/dashboard/ui-interface/pagination"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ui-sref": "pagination"
                }
            }, [t._v(t._s(t.$t("message.pagination")))])])]), t._v(" "), e("router-link", {
                attrs: {
                    to: "/dashboard/ui-interface/other-elements"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ui-sref": "other-elements"
                }
            }, [t._v(t._s(t.$t("message.other_elements")))])])])], 1)], 1), t._v(" "), e("li", {
                attrs: {
                    "ng-class": "{active: $state.includes('charts')}"
                }
            }, [e("router-link", {
                attrs: {
                    to: "/dashboard/charts/chart"
                }
            }, [e("a", {
                attrs: {
                    "ui-sref": "chartjs"
                }
            }, [e("i", {
                staticClass: "fa fa-signal"
            })])]), t._v(" "), e("ul", {
                staticClass: "nested-dropdown animated fadeIn"
            }, [e("li", {
                staticClass: "sidemenu-header"
            }, [t._v(t._s(t.$t("message.charts")))]), t._v(" "), e("router-link", {
                attrs: {
                    to: "/dashboard/charts/chart"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ui-sref": "chartjs"
                }
            }, [t._v(t._s(t.$t("message.chart-js")))])])]), t._v(" "), e("router-link", {
                attrs: {
                    to: "/dashboard/charts/c3chart"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ui-sref": "c3chart"
                }
            }, [t._v(t._s(t.$t("message.chart-c3")))])])])], 1)], 1), t._v(" "), e("li", {
                attrs: {
                    "ng-class": "{active: $state.includes('calendar')}"
                }
            }, [e("router-link", {
                attrs: {
                    to: "/dashboard/calendar"
                }
            }, [e("a", {
                attrs: {
                    "ui-sref": "calendar"
                }
            }, [e("i", {
                staticClass: "fa fa-calendar"
            })])]), t._v(" "), e("ul", {
                staticClass: "nested-dropdown animated fadeIn"
            }, [e("router-link", {
                attrs: {
                    to: "/dashboard/calendar"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ui-sref": "calendar"
                }
            }, [t._v(t._s(t.$t("message.calendar")))])])])], 1)], 1), t._v(" "), e("li", {
                attrs: {
                    "ng-class": "{active: $state.includes('mail')}"
                }
            }, [e("router-link", {
                attrs: {
                    to: "/dashboard/mail/inbox"
                }
            }, [e("a", {
                attrs: {
                    "ui-sref": "inbox"
                }
            }, [e("i", {
                staticClass: "fa fa-envelope"
            })])]), t._v(" "), e("ul", {
                staticClass: "nested-dropdown animated fadeIn"
            }, [e("li", {
                staticClass: "sidemenu-header"
            }, [t._v(t._s(t.$t("message.mail")))]), t._v(" "), e("router-link", {
                attrs: {
                    to: "/dashboard/mail/inbox"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ui-sref": "inbox"
                }
            }, [t._v(t._s(t.$t("message.inbox")))])])]), t._v(" "), e("router-link", {
                attrs: {
                    to: "/dashboard/mail/compose"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ui-sref": "compose"
                }
            }, [t._v(t._s(t.$t("message.compose")))])])])], 1)], 1), t._v(" "), e("li", {
                attrs: {
                    "ng-class": "{active: $state.includes('invoice')}"
                }
            }, [e("router-link", {
                attrs: {
                    to: "/dashboard/invoice"
                }
            }, [e("a", {
                attrs: {
                    "ui-sref": "invoice"
                }
            }, [e("i", {
                staticClass: "fa fa-list-alt"
            })])]), t._v(" "), e("ul", {
                staticClass: "nested-dropdown animated fadeIn"
            }, [e("router-link", {
                attrs: {
                    to: "/dashboard/invoice"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ui-sref": "invoice"
                }
            }, [t._v(t._s(t.$t("message.invoice")))])])])], 1)], 1), t._v(" "), e("router-link", {
                attrs: {
                    to: "/dashboard/profile"
                }
            }), t._v(" "), e("li", {
                attrs: {
                    "ng-class": "{active: $state.includes('docs')}"
                }
            }, [t._m(0), t._v(" "), e("ul", {
                staticClass: "nested-dropdown animated fadeIn"
            }, [e("a", {
                attrs: {
                    href: "http://www.strapui.com/docs/ani-vuejs-theme/"
                }
            }, [e("a", {
                attrs: {
                    "ui-sref": "docs"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ui-sref": "docs"
                }
            }, [t._v(t._s(t.$t("message.docs")))])])])])])]), t._v(" "), e("li", {
                attrs: {
                    "ng-class": "{active: $state.includes('pages')}"
                }
            }, [e("router-link", {
                attrs: {
                    to: "/dashboard/pages/blank"
                }
            }, [e("a", {
                attrs: {
                    "ui-sref": "blank"
                }
            }, [e("i", {
                staticClass: "fa fa-files-o"
            })])]), t._v(" "), e("ul", {
                staticClass: "nested-dropdown animated fadeIn"
            }, [e("li", {
                staticClass: "sidemenu-header"
            }, [t._v(t._s(t.$t("message.pages")))]), t._v(" "), e("router-link", {
                attrs: {
                    to: "/dashboard/pages/blank"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ui-sref": "blank"
                }
            }, [t._v(t._s(t.$t("message.blankpage")))])])]), t._v(" "), e("router-link", {
                attrs: {
                    to: "/"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ui-sref": "login"
                }
            }, [t._v(t._s(t.$t("message.login")))])])]), t._v(" "), e("router-link", {
                attrs: {
                    to: "/signup"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ui-sref": "signup"
                }
            }, [t._v(t._s(t.$t("message.singup")))])])]), t._v(" "), e("router-link", {
                attrs: {
                    to: "/notfound"
                }
            }, [e("li", [e("a", {
                attrs: {
                    "ui-sref": "404 Page"
                }
            }, [t._v(t._s(t.$t("message.404page")))])])])], 1)], 1)], 1)])]), t._v(" "), e("div", {
                staticClass: "navbar-side-cards pull-right"
            }, [e("div", {
                staticClass: "navbar-side-cards-profile text-center"
            }, [e("a", {
                attrs: {
                    href: "#"
                }
            }, [e("router-link", {
                attrs: {
                    to: "/dashboard/profile"
                }
            }, [e("img", {
                attrs: {
                    src: s(6),
                    alt: "dp"
                }
            })])], 1), t._v(" "), e("p", [t._v(t._s(t.$t("message.ani-pascal")))])]), t._v(" "), e("div", {
                staticClass: "tabs-head",
                staticStyle: {
                    width: "100%",
                    "background-color": "#2089C9",
                    padding: "3px"
                }
            }, [e("span", {
                staticClass: "text-center"
            }, [e("b", [t._v(t._s(t.$t("message.calendar")))])])]), t._v(" "), e("div", {
                staticClass: "navbar-side-cards-calender"
            }, [e("VC", {
                staticClass: "test-fc",
                attrs: {
                    events: t.fcEvents,
                    "first-day": "1",
                    lang: "en"
                },
                on: {
                    changeMonth: t.changeMonth,
                    eventClick: t.eventClick,
                    dayClick: t.dayClick,
                    moreClick: t.moreClick
                }
            })], 1), t._v(" "), e("div", {
                staticClass: "tabs-head",
                staticStyle: {
                    width: "100%",
                    "background-color": "#2089C9",
                    padding: "3px"
                }
            }, [e("span", [e("b", [t._v(t._s(t.$t("message.feed")))])])]), t._v(" "), e("div", {
                staticClass: "navbar-side-cards-feed"
            }, [e("a", {
                attrs: {
                    href: "#"
                }
            }, [e("p", {
                staticClass: "pull-left"
            }, [t._v(t._s(t.$t("message.li1"))), e("span", {
                staticClass: "pull-right"
            }, [t._v("25/4/2015")])])]), t._v(" "), e("a", {
                attrs: {
                    href: "#"
                }
            }, [e("p", {
                staticClass: "pull-left"
            }, [t._v(t._s(t.$t("message.li2"))), e("span", {
                staticClass: "pull-right"
            }, [t._v("25/4/2015")])])]), t._v(" "), e("a", {
                attrs: {
                    href: "#"
                }
            }, [e("p", {
                staticClass: "pull-left"
            }, [t._v(t._s(t.$t("message.li3"))), e("span", {
                staticClass: "pull-right"
            }, [t._v("25/4/2015")])])]), t._v(" "), e("a", {
                attrs: {
                    href: "#"
                }
            }, [e("p", {
                staticClass: "pull-left"
            }, [t._v(t._s(t.$t("message.li4"))), e("span", {
                staticClass: "pull-right"
            }, [t._v("25/4/2015")])])])])])])
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("a", {
                attrs: {
                    href: "http://www.strapui.com/docs/ani-vuejs-theme/"
                }
            }, [s("a", {
                attrs: {
                    "ui-sref": "docs"
                }
            }, [s("i", {
                staticClass: "fa fa-credit-card"
            })])])
        }]
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "comp-full-calendar"
            }, [s("fc-header", {
                attrs: {
                    "current-date": t.currentDate,
                    "title-format": t.titleFormat,
                    "first-day": t.firstDay
                },
                on: {
                    change: t.emitChangeMonth
                }
            }, [s("div", {
                slot: "header-left"
            }, [t._t("fc-header-left")], 2), t._v(" "), s("div", {
                slot: "header-right"
            }, [t._t("fc-header-right")], 2)]), t._v(" "), s("fc-body", {
                attrs: {
                    "current-date": t.currentDate,
                    events: t.events,
                    "month-names": t.monthNames,
                    "week-names": t.weekNames,
                    "first-day": t.firstDay
                },
                on: {
                    eventclick: t.emitEventClick,
                    dayclick: t.emitDayClick,
                    moreclick: t.emitMoreClick
                }
            }, [s("div", {
                slot: "body-card"
            }, [t._t("fc-body-card")], 2)])], 1)
        },
        staticRenderFns: []
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "ltr",
                attrs: {
                    id: "charts"
                }
            }, [s("router-view")], 1)
        },
        staticRenderFns: []
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                staticClass: "ltr",
                attrs: {
                    id: "app"
                }
            }, [s("router-view"), t._v(" "), s("vue-progress-bar")], 1)
        },
        staticRenderFns: []
    }
}, function(t, a) {
    t.exports = {
        render: function() {
            var t = this,
                a = t.$createElement;
            t._self._c || a;
            return t._m(0)
        },
        staticRenderFns: [function() {
            var t = this,
                a = t.$createElement,
                s = t._self._c || a;
            return s("div", {
                attrs: {
                    id: "compose"
                }
            }, [s("div", {
                staticClass: "animated fadeIn"
            }, [s("div", {
                staticClass: "inbox-container-wrap"
            }, [s("div", {
                staticClass: "inbox-container col-xs-2"
            }, [s("div", {
                staticClass: "col email-options ps-container"
            }, [s("div", {
                staticClass: "padding-15"
            }, [s("div", {
                staticClass: "butt-container"
            }, [s("a", {
                attrs: {
                    "ui-sref": "compose"
                }
            }, [s("button", {
                staticClass: "btn btn-primary btn-block btn-rounded"
            }, [t._v("\n  \t\t\t\t\t\t\tCompose\n  \t\t\t\t\t\t")])])]), t._v(" "), s("ul", {
                staticClass: "main-options"
            }, [s("li", {
                staticClass: "activeli"
            }, [s("a", {
                attrs: {
                    "ui-sref": "inbox"
                }
            }, [s("span", {
                staticClass: "title"
            }, [t._v("   Inbox")]), t._v(" "), s("span", {
                staticClass: "badge pull-right"
            }, [t._v("10")])])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    "ui-sref": "inbox"
                }
            }, [s("span", {
                staticClass: "title"
            }, [t._v("   Junk Mail")])])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    "ui-sref": "inbox"
                }
            }, [s("span", {
                staticClass: "title"
            }, [t._v("   Drafts")]), t._v(" "), s("span", {
                staticClass: "badge pull-right"
            }, [t._v("16")])])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    href: ""
                }
            }, [s("span", {
                staticClass: "title"
            }, [t._v("   Sent")])])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    "ui-sref": "inbox"
                }
            }, [s("span", {
                staticClass: "title"
            }, [t._v("   Trash")])])]), t._v(" "), s("hr", {
                staticClass: "poor"
            }), t._v(" "), s("h5", [t._v("LABELS")]), t._v(" "), s("li", [s("a", {
                attrs: {
                    "ui-sref": "inbox"
                }
            }, [s("span", {
                staticClass: "title"
            }, [t._v("   Clients "), s("i", {
                staticClass: "fa fa-stop pull-right faorange"
            })])])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    "ui-sref": "inbox"
                }
            }, [s("span", {
                staticClass: "title"
            }, [t._v("   Social "), s("i", {
                staticClass: "fa fa-stop pull-right fayellow"
            })])])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    "ui-sref": "inbox"
                }
            }, [s("span", {
                staticClass: "title"
            }, [t._v("   Family "), s("i", {
                staticClass: "fa fa-stop pull-right facyan"
            })])])]), t._v(" "), s("li", [s("a", {
                attrs: {
                    "ui-sref": "inbox"
                }
            }, [s("span", {
                staticClass: "title"
            }, [t._v("   Friends "), s("i", {
                staticClass: "fa fa-stop pull-right fapurple"
            })])])])])])])]), t._v(" "), s("div", {
                staticClass: "compose-container"
            }, [s("div", {
                staticClass: "wrap-compose"
            }, [s("div", {
                staticClass: "mail-header"
            }, [s("h4", [t._v("New Email")])]), t._v(" "), s("div", {
                staticClass: "receipient"
            }, [s("strong", {
                staticClass: "to"
            }, [t._v("TO ")]), t._v(" "), s("span", {
                staticClass: "label label-primary"
            }, [t._v("john@doe.com")])]), t._v(" "), s("div", {
                staticClass: "subject"
            }, [s("strong", {
                staticClass: "strong-header"
            }, [t._v("SUBJECT")]), t._v(" "), s("strong", {
                staticClass: "subjetc"
            }, [t._v("[LOGO] Envelope")])]), t._v(" "), s("div", {
                staticClass: "send-footer",
                staticStyle: {
                    "margin-top": "306px"
                }
            }, [s("button", {
                staticClass: "btn btn-primary btn-rounded",
                attrs: {
                    type: "button"
                }
            }, [t._v("Send")]), t._v("\n  \t\t\t\t\t   "), s("a", {
                attrs: {
                    href: ""
                }
            }, [s("i", {
                staticClass: "fa fa-paperclip"
            })]), t._v(" "), s("a", {
                attrs: {
                    href: ""
                }
            }, [s("i", {
                staticClass: "fa fa-trash-o pull-right"
            })])])])])])])])
        }]
    }
}]);
//# sourceMappingURL=app.a7c4026aa83b7d9b87b1.js.map