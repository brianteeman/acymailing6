(function (t, e) {
    'object' === typeof exports && 'object' === typeof module ? module.exports = e() : 'function' === typeof define && define.amd ? define([], e) : 'object' === typeof exports ? exports['VuePrismEditor'] = e() : t['VuePrismEditor'] = e();
})('undefined' !== typeof self ? self : this, function () {
    return function (t) {
        var e = {};

        function n(r) {
            if (e[r]) return e[r].exports;
            var i = e[r] = {
                i: r,
                l: !1,
                exports: {},
            };
            return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
        }

        return n.m = t, n.c = e, n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r,
            });
        }, n.r = function (t) {
            'undefined' !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(t, '__esModule', {value: !0});
        }, n.t = function (t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, 'default', {
                enumerable: !0,
                value: t,
            }), 2 & e && 'string' != typeof t) {
                for (var i in t) {
                    n.d(r, i, function (e) {
                        return t[e];
                    }.bind(null, i));
                }
            }
            return r;
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t['default'];
            } : function () {
                return t;
            };
            return n.d(e, 'a', e), e;
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, n.p = '', n(n.s = 'fb15');
    }({
        '02f4': function (t, e, n) {
            var r = n('4588'), i = n('be13');
            t.exports = function (t) {
                return function (e, n) {
                    var o, c, a = String(i(e)), u = r(n), s = a.length;
                    return u < 0 || u >= s ? t ? '' : void 0 : (o = a.charCodeAt(u), o < 55296 || o > 56319 || u + 1 === s || (c = a.charCodeAt(u + 1)) < 56320 || c > 57343 ? t ? a.charAt(u) : o : t ? a.slice(u, u + 2) : c - 56320 + (o - 55296 << 10) + 65536);
                };
            };
        },
        '0390': function (t, e, n) {
            'use strict';
            var r = n('02f4')(!0);
            t.exports = function (t, e, n) {
                return e + (n ? r(t, e).length : 1);
            };
        },
        '0bfb': function (t, e, n) {
            'use strict';
            var r = n('cb7c');
            t.exports = function () {
                var t = r(this), e = '';
                return t.global && (e += 'g'), t.ignoreCase && (e += 'i'), t.multiline && (e += 'm'), t.unicode && (e += 'u'), t.sticky && (e += 'y'), e;
            };
        },
        '214f': function (t, e, n) {
            'use strict';
            n('b0c5');
            var r = n('2aba'), i = n('32e9'), o = n('79e5'), c = n('be13'), a = n('2b4c'), u = n('520a'), s = a('species'), f = !o(function () {
                var t = /./;
                return t.exec = function () {
                    var t = [];
                    return t.groups = {a: '7'}, t;
                }, '7' !== ''.replace(t, '$<a>');
            }), l = function () {
                var t = /(?:)/, e = t.exec;
                t.exec = function () {
                    return e.apply(this, arguments);
                };
                var n = 'ab'.split(t);
                return 2 === n.length && 'a' === n[0] && 'b' === n[1];
            }();
            t.exports = function (t, e, n) {
                var d = a(t), p = !o(function () {
                    var e = {};
                    return e[d] = function () {
                        return 7;
                    }, 7 != ''[t](e);
                }), h = p ? !o(function () {
                    var e = !1, n = /a/;
                    return n.exec = function () {
                        return e = !0, null;
                    }, 'split' === t && (n.constructor = {}, n.constructor[s] = function () {
                        return n;
                    }), n[d](''), !e;
                }) : void 0;
                if (!p || !h || 'replace' === t && !f || 'split' === t && !l) {
                    var v = /./[d], g = n(c, d, ''[t], function (t, e, n, r, i) {
                        return e.exec === u ? p && !i ? {
                            done: !0,
                            value: v.call(e, n, r),
                        } : {
                            done: !0,
                            value: t.call(n, e, r),
                        } : {done: !1};
                    }), m = g[0], y = g[1];
                    r(String.prototype, t, m), i(RegExp.prototype, d, 2 == e ? function (t, e) {
                        return y.call(t, this, e);
                    } : function (t) {
                        return y.call(t, this);
                    });
                }
            };
        },
        '230e': function (t, e, n) {
            var r = n('d3f4'), i = n('7726').document, o = r(i) && r(i.createElement);
            t.exports = function (t) {
                return o ? i.createElement(t) : {};
            };
        },
        '23c6': function (t, e, n) {
            var r = n('2d95'), i = n('2b4c')('toStringTag'), o = 'Arguments' == r(function () {
                return arguments;
            }()), c = function (t, e) {
                try {return t[e];} catch (n) {}
            };
            t.exports = function (t) {
                var e, n, a;
                return void 0 === t ? 'Undefined' : null === t ? 'Null' : 'string' == typeof (n = c(e = Object(t), i)) ? n : o ? r(e) : 'Object' == (a = r(e)) && 'function' == typeof e.callee ? 'Arguments' : a;
            };
        },
        '28a5': function (t, e, n) {
            'use strict';
            var r = n('aae3'), i = n('cb7c'), o = n('ebd6'), c = n('0390'), a = n('9def'), u = n('5f1b'), s = n('520a'), f = n('79e5'), l = Math.min, d = [].push, p = 'split', h = 'length', v = 'lastIndex', g = 4294967295, m = !f(function () {
                RegExp(g, 'y');
            });
            n('214f')('split', 2, function (t, e, n, f) {
                var y;
                return y = 'c' == 'abbc'[p](/(b)*/)[1] || 4 != 'test'[p](/(?:)/, -1)[h] || 2 != 'ab'[p](/(?:ab)*/)[h] || 4 != '.'[p](/(.?)(.?)/)[h] || '.'[p](/()()/)[h] > 1 || ''[p](/.?/)[h] ? function (t, e) {
                    var i = String(this);
                    if (void 0 === t && 0 === e) return [];
                    if (!r(t)) return n.call(i, t, e);
                    var o, c, a, u = [], f = (t.ignoreCase ? 'i' : '') + (t.multiline ? 'm' : '') + (t.unicode ? 'u' : '') + (t.sticky ? 'y' : ''), l = 0, p = void 0 === e ? g : e >>> 0, m = new RegExp(t.source, f + 'g');
                    while (o = s.call(m, i)) {
                        if (c = m[v], c > l && (u.push(i.slice(l, o.index)), o[h] > 1 && o.index < i[h] && d.apply(u, o.slice(1)), a = o[0][h], l = c, u[h] >= p)) break;
                        m[v] === o.index && m[v]++;
                    }
                    return l === i[h] ? !a && m.test('') || u.push('') : u.push(i.slice(l)), u[h] > p ? u.slice(0, p) : u;
                } : '0'[p](void 0, 0)[h] ? function (t, e) {
                    return void 0 === t && 0 === e ? [] : n.call(this, t, e);
                } : n, [
                    function (n, r) {
                        var i = t(this), o = void 0 == n ? void 0 : n[e];
                        return void 0 !== o ? o.call(n, i, r) : y.call(String(i), n, r);
                    },
                    function (t, e) {
                        var r = f(y, t, this, e, y !== n);
                        if (r.done) return r.value;
                        var s = i(t), d = String(this), p = o(s, RegExp), h = s.unicode, v = (s.ignoreCase ? 'i' : '') + (s.multiline ? 'm' : '') + (s.unicode ? 'u' : '') + (m ? 'y' : 'g'), b = new p(m ? s : '^(?:' + s.source + ')', v), x = void 0 === e ? g : e >>> 0;
                        if (0 === x) return [];
                        if (0 === d.length) return null === u(b, d) ? [d] : [];
                        var S = 0, _ = 0, C = [];
                        while (_ < d.length) {
                            b.lastIndex = m ? _ : 0;
                            var w, k = u(b, m ? d : d.slice(_));
                            if (null === k || (w = l(a(b.lastIndex + (m ? 0 : _)), d.length)) === S) {
                                _ = c(d, _, h);
                            } else {
                                if (C.push(d.slice(S, _)), C.length === x) return C;
                                for (var T = 1 ; T <= k.length - 1 ; T++) if (C.push(k[T]), C.length === x) return C;
                                _ = S = w;
                            }
                        }
                        return C.push(d.slice(S)), C;
                    },
                ];
            });
        },
        '2aba': function (t, e, n) {
            var r = n('7726'), i = n('32e9'), o = n('69a8'), c = n('ca5a')('src'), a = n('fa5b'), u = 'toString', s = ('' + a).split(u);
            n('8378').inspectSource = function (t) {
                return a.call(t);
            }, (t.exports = function (t, e, n, a) {
                var u = 'function' == typeof n;
                u && (o(n, 'name') || i(n, 'name', e)), t[e] !== n && (u && (o(n, c) || i(n, c, t[e] ? '' + t[e] : s.join(String(e)))), t === r ? t[e] = n : a ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)));
            })(Function.prototype, u, function () {
                return 'function' == typeof this && this[c] || a.call(this);
            });
        },
        '2b4c': function (t, e, n) {
            var r = n('5537')('wks'), i = n('ca5a'), o = n('7726').Symbol, c = 'function' == typeof o, a = t.exports = function (t) {
                return r[t] || (r[t] = c && o[t] || (c ? o : i)('Symbol.' + t));
            };
            a.store = r;
        },
        '2d00': function (t, e) {
            t.exports = !1;
        },
        '2d95': function (t, e) {
            var n = {}.toString;
            t.exports = function (t) {
                return n.call(t).slice(8, -1);
            };
        },
        '32e9': function (t, e, n) {
            var r = n('86cc'), i = n('4630');
            t.exports = n('9e1e') ? function (t, e, n) {
                return r.f(t, e, i(1, n));
            } : function (t, e, n) {
                return t[e] = n, t;
            };
        },
        3846: function (t, e, n) {
            n('9e1e') && 'g' != /./g.flags && n('86cc')
                .f(RegExp.prototype, 'flags', {
                    configurable: !0,
                    get: n('0bfb'),
                });
        },
        '412e': function (t, e, n) {
        },
        4588: function (t, e) {
            var n = Math.ceil, r = Math.floor;
            t.exports = function (t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
            };
        },
        4630: function (t, e) {
            t.exports = function (t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e,
                };
            };
        },
        4917: function (t, e, n) {
            'use strict';
            var r = n('cb7c'), i = n('9def'), o = n('0390'), c = n('5f1b');
            n('214f')('match', 1, function (t, e, n, a) {
                return [
                    function (n) {
                        var r = t(this), i = void 0 == n ? void 0 : n[e];
                        return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r));
                    },
                    function (t) {
                        var e = a(n, t, this);
                        if (e.done) return e.value;
                        var u = r(t), s = String(this);
                        if (!u.global) return c(u, s);
                        var f = u.unicode;
                        u.lastIndex = 0;
                        var l, d = [], p = 0;
                        while (null !== (l = c(u, s))) {
                            var h = String(l[0]);
                            d[p] = h, '' === h && (u.lastIndex = o(s, i(u.lastIndex), f)), p++;
                        }
                        return 0 === p ? null : d;
                    },
                ];
            });
        },
        '4bf8': function (t, e, n) {
            var r = n('be13');
            t.exports = function (t) {
                return Object(r(t));
            };
        },
        5147: function (t, e, n) {
            var r = n('2b4c')('match');
            t.exports = function (t) {
                var e = /./;
                try {'/./'[t](e);} catch (n) {try {return e[r] = !1, !'/./'[t](e);} catch (i) {}}
                return !0;
            };
        },
        '520a': function (t, e, n) {
            'use strict';
            var r = n('0bfb'), i = RegExp.prototype.exec, o = String.prototype.replace, c = i, a = 'lastIndex', u = function () {
                var t = /a/, e = /b*/g;
                return i.call(t, 'a'), i.call(e, 'a'), 0 !== t[a] || 0 !== e[a];
            }(), s = void 0 !== /()??/.exec('')[1], f = u || s;
            f && (c = function (t) {
                var e, n, c, f, l = this;
                return s && (n = new RegExp('^' + l.source + '$(?!\\s)', r.call(l))), u && (e = l[a]), c = i.call(l, t), u && c && (l[a] = l.global ? c.index + c[0].length : e), s && c && c.length > 1 && o.call(c[0], n, function () {
                    for (f = 1 ; f < arguments.length - 2 ; f++) void 0 === arguments[f] && (c[f] = void 0);
                }), c;
            }), t.exports = c;
        },
        5537: function (t, e, n) {
            var r = n('8378'), i = n('7726'), o = '__core-js_shared__', c = i[o] || (i[o] = {});
            (t.exports = function (t, e) {
                return c[t] || (c[t] = void 0 !== e ? e : {});
            })('versions', [])
                .push({
                    version: r.version,
                    mode: n('2d00') ? 'pure' : 'global',
                    copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
                });
        },
        '5ca1': function (t, e, n) {
            var r = n('7726'), i = n('8378'), o = n('32e9'), c = n('2aba'), a = n('9b43'), u = 'prototype', s = function (t, e, n) {
                var f, l, d, p, h = t & s.F, v = t & s.G, g = t & s.S, m = t & s.P, y = t & s.B, b = v ? r : g ? r[e] || (r[e] = {}) : (r[e] || {})[u], x = v ? i : i[e] || (i[e] = {}), S = x[u] || (x[u] = {});
                for (f in v && (n = e), n) l = !h && b && void 0 !== b[f], d = (l ? b : n)[f], p = y && l ? a(d, r) : m && 'function' == typeof d ? a(Function.call, d) : d, b && c(b, f, d, t & s.U), x[f] != d && o(x, f, p), m && S[f] != d && (S[f] = d);
            };
            r.core = i, s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s;
        },
        '5f1b': function (t, e, n) {
            'use strict';
            var r = n('23c6'), i = RegExp.prototype.exec;
            t.exports = function (t, e) {
                var n = t.exec;
                if ('function' === typeof n) {
                    var o = n.call(t, e);
                    if ('object' !== typeof o) throw new TypeError('RegExp exec method returned something other than an Object or null');
                    return o;
                }
                if ('RegExp' !== r(t)) throw new TypeError('RegExp#exec called on incompatible receiver');
                return i.call(t, e);
            };
        },
        '69a8': function (t, e) {
            var n = {}.hasOwnProperty;
            t.exports = function (t, e) {
                return n.call(t, e);
            };
        },
        '6a99': function (t, e, n) {
            var r = n('d3f4');
            t.exports = function (t, e) {
                if (!r(t)) return t;
                var n, i;
                if (e && 'function' == typeof (n = t.toString) && !r(i = n.call(t))) return i;
                if ('function' == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
                if (!e && 'function' == typeof (n = t.toString) && !r(i = n.call(t))) return i;
                throw TypeError('Can\'t convert object to primitive value');
            };
        },
        '6b54': function (t, e, n) {
            'use strict';
            n('3846');
            var r = n('cb7c'), i = n('0bfb'), o = n('9e1e'), c = 'toString', a = /./[c], u = function (t) {
                n('2aba')(RegExp.prototype, c, t, !0);
            };
            n('79e5')(function () {
                return '/a/b' != a.call({
                    source: 'a',
                    flags: 'b',
                });
            }) ? u(function () {
                var t = r(this);
                return '/'.concat(t.source, '/', 'flags' in t ? t.flags : !o && t instanceof RegExp ? i.call(t) : void 0);
            }) : a.name != c && u(function () {
                return a.call(this);
            });
        },
        '72d6': function (t, e, n) {
            var r = n('8a8d'), i = n('ad9a');

            function o(t, e) {
                if (!(this instanceof o)) return new o(t, e);
                if (this.node = this.start = this.peeked = t, this.root = e, this.closingTag = !1, this._revisit = !0, this._selects = [], this._rejects = [], t && this.higher(t)) throw new Error('root must be a parent or ancestor to node');
            }

            function c(t, e) {
                var n = 'nextSibling' == t;
                return function (i, o, c) {
                    i = this.compile(i), o = o && o > 0 ? o : 1;
                    var a = this.node, u = this.closingTag, s = this._revisit;
                    while (a) {
                        if (r(n, u) && a[e]) a = a[e], u = !n; else if (1 == a.nodeType && !a[e] && r(n, u)) {if (u = n, !s) continue;} else if (a[t]) a = a[t], u = !n; else if (a = a.parentNode, u = n, !s) continue;
                        if (!a || this.higher(a, this.root)) break;
                        if (i(a) && this.selects(a, c) && this.rejects(a, c)) {
                            if (--o) continue;
                            return c || (this.node = a), this.closingTag = u, a;
                        }
                    }
                    return null;
                };
            }

            t.exports = o, o.prototype.reset = function (t) {
                return this.node = t || this.start, this;
            }, o.prototype.revisit = function (t) {
                return this._revisit = void 0 == t || t, this;
            }, o.prototype.opening = function () {
                return 1 == this.node.nodeType && (this.closingTag = !1), this;
            }, o.prototype.atOpening = function () {
                return !this.closingTag;
            }, o.prototype.closing = function () {
                return 1 == this.node.nodeType && (this.closingTag = !0), this;
            }, o.prototype.atClosing = function () {
                return this.closingTag;
            }, o.prototype.next = c('nextSibling', 'firstChild'), o.prototype.previous = o.prototype.prev = c('previousSibling', 'lastChild'), o.prototype.select = function (t) {
                return t = this.compile(t), this._selects.push(t), this;
            }, o.prototype.selects = function (t, e) {
                var n = this._selects, r = n.length;
                if (!r) return !0;
                for (var i = 0 ; i < r ; i++) if (n[i].call(this, t, e)) return !0;
                return !1;
            }, o.prototype.reject = function (t) {
                return t = this.compile(t), this._rejects.push(t), this;
            }, o.prototype.rejects = function (t, e) {
                var n = this._rejects, r = n.length;
                if (!r) return !0;
                for (var i = 0 ; i < r ; i++) if (n[i].call(this, t, e)) return !1;
                return !0;
            }, o.prototype.higher = function (t) {
                var e = this.root;
                if (!e) return !1;
                t = t.parentNode;
                while (t && t != e) t = t.parentNode;
                return t != e;
            }, o.prototype.compile = function (t) {
                switch (typeof t) {
                    case'number':
                        return function (e) {
                            return t == e.nodeType;
                        };
                    case'string':
                        return new Function('node', 'return ' + i(t, 'node.'));
                    case'function':
                        return t;
                    default:
                        return function () {
                            return !0;
                        };
                }
            }, o.prototype.peak = o.prototype.peek = function (t, e) {
                return 1 == arguments.length && (e = t, t = !0), e = void 0 == e ? 1 : e, e ? e > 0 ? this.next(t, e, !0) : this.prev(t, Math.abs(e), !0) : this.node;
            }, o.prototype.use = function (t) {
                return t(this), this;
            };
        },
        '74a0': function (t, e, n) {
            'use strict';
            /*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
            var r = /["'&<>]/;

            function i(t) {
                var e, n = '' + t, i = r.exec(n);
                if (!i) return n;
                var o = '', c = 0, a = 0;
                for (c = i.index ; c < n.length ; c++) {
                    switch (n.charCodeAt(c)) {
                        case 34:
                            e = '&quot;';
                            break;
                        case 38:
                            e = '&amp;';
                            break;
                        case 39:
                            e = '&#39;';
                            break;
                        case 60:
                            e = '&lt;';
                            break;
                        case 62:
                            e = '&gt;';
                            break;
                        default:
                            continue;
                    }
                    a !== c && (o += n.substring(a, c)), a = c + 1, o += e;
                }
                return a !== c ? o + n.substring(a, c) : o;
            }

            t.exports = i;
        },
        7726: function (t, e) {
            var n = t.exports = 'undefined' != typeof window && window.Math == Math ? window : 'undefined' != typeof self && self.Math == Math ? self : Function('return this')();
            'number' == typeof __g && (__g = n);
        },
        '79e5': function (t, e) {
            t.exports = function (t) {
                try {return !!t();} catch (e) {return !0;}
            };
        },
        8378: function (t, e) {
            var n = t.exports = {version: '2.6.5'};
            'number' == typeof __e && (__e = n);
        },
        '86cc': function (t, e, n) {
            var r = n('cb7c'), i = n('c69a'), o = n('6a99'), c = Object.defineProperty;
            e.f = n('9e1e') ? Object.defineProperty : function (t, e, n) {
                if (r(t), e = o(e, !0), r(n), i) try {return c(t, e, n);} catch (a) {}
                if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!');
                return 'value' in n && (t[e] = n.value), t;
            };
        },
        '8a8d': function (t, e) {
            function n(t, e) {
                return t ^ e;
            }

            t.exports = n;
        },
        '954e': function (t, e, n) {
            'use strict';
            var r, i = n('cf4f'), o = {}, c = {
                default: {
                    '&quot;': '"',
                    '&#34;': '"',
                    '&apos;': '\'',
                    '&#39;': '\'',
                    '&amp;': '&',
                    '&#38;': '&',
                    '&gt;': '>',
                    '&#62;': '>',
                    '&lt;': '<',
                    '&#60;': '<',
                },
                extras: {
                    '&cent;': '¢',
                    '&#162;': '¢',
                    '&copy;': '©',
                    '&#169;': '©',
                    '&euro;': '€',
                    '&#8364;': '€',
                    '&pound;': '£',
                    '&#163;': '£',
                    '&reg;': '®',
                    '&#174;': '®',
                    '&yen;': '¥',
                    '&#165;': '¥',
                },
            };

            function a(t, e) {
                if (!s(t)) return '';
                var n = c[e || 'default'], r = u(e, n);
                return t.replace(r, function (t) {
                    return n[t];
                });
            }

            function u(t, e) {
                if (o[t]) return o[t];
                var n = Object.keys(e).join('|'), r = new RegExp('(?=(' + n + '))\\1', 'g');
                return o[t] = r, r;
            }

            function s(t) {
                return t && 'string' === typeof t;
            }

            Object.defineProperty(c, 'all', {
                get: function () {
                    return r || (r = i({}, c.default, c.extras));
                },
            }), a.chars = c.default, a.extras = c.extras, Object.defineProperty(a, 'all', {
                get: function () {
                    return c.all;
                },
            }), t.exports = a;
        },
        '9b43': function (t, e, n) {
            var r = n('d8e8');
            t.exports = function (t, e, n) {
                if (r(t), void 0 === e) return t;
                switch (n) {
                    case 1:
                        return function (n) {
                            return t.call(e, n);
                        };
                    case 2:
                        return function (n, r) {
                            return t.call(e, n, r);
                        };
                    case 3:
                        return function (n, r, i) {
                            return t.call(e, n, r, i);
                        };
                }
                return function () {
                    return t.apply(e, arguments);
                };
            };
        },
        '9def': function (t, e, n) {
            var r = n('4588'), i = Math.min;
            t.exports = function (t) {
                return t > 0 ? i(r(t), 9007199254740991) : 0;
            };
        },
        '9e1e': function (t, e, n) {
            t.exports = !n('79e5')(function () {
                return 7 != Object.defineProperty({}, 'a', {
                    get: function () {
                        return 7;
                    },
                }).a;
            });
        },
        a481: function (t, e, n) {
            'use strict';
            var r = n('cb7c'), i = n('4bf8'), o = n('9def'), c = n('4588'), a = n('0390'), u = n('5f1b'), s = Math.max, f = Math.min, l = Math.floor, d = /\$([$&`']|\d\d?|<[^>]*>)/g, p = /\$([$&`']|\d\d?)/g, h = function (t) {
                return void 0 === t ? t : String(t);
            };
            n('214f')('replace', 2, function (t, e, n, v) {
                return [
                    function (r, i) {
                        var o = t(this), c = void 0 == r ? void 0 : r[e];
                        return void 0 !== c ? c.call(r, o, i) : n.call(String(o), r, i);
                    },
                    function (t, e) {
                        var i = v(n, t, this, e);
                        if (i.done) return i.value;
                        var l = r(t), d = String(this), p = 'function' === typeof e;
                        p || (e = String(e));
                        var m = l.global;
                        if (m) {
                            var y = l.unicode;
                            l.lastIndex = 0;
                        }
                        var b = [];
                        while (1) {
                            var x = u(l, d);
                            if (null === x) break;
                            if (b.push(x), !m) break;
                            var S = String(x[0]);
                            '' === S && (l.lastIndex = a(d, o(l.lastIndex), y));
                        }
                        for (var _ = '', C = 0, w = 0 ; w < b.length ; w++) {
                            x = b[w];
                            for (var k = String(x[0]), T = s(f(c(x.index), d.length), 0), E = [], O = 1 ; O < x.length ; O++) E.push(h(x[O]));
                            var j = x.groups;
                            if (p) {
                                var $ = [k].concat(E, T, d);
                                void 0 !== j && $.push(j);
                                var N = String(e.apply(void 0, $));
                            } else {
                                N = g(k, d, T, E, j, e);
                            }
                            T >= C && (_ += d.slice(C, T) + N, C = T + k.length);
                        }
                        return _ + d.slice(C);
                    },
                ];

                function g(t, e, r, o, c, a) {
                    var u = r + t.length, s = o.length, f = p;
                    return void 0 !== c && (c = i(c), f = d), n.call(a, f, function (n, i) {
                        var a;
                        switch (i.charAt(0)) {
                            case'$':
                                return '$';
                            case'&':
                                return t;
                            case'`':
                                return e.slice(0, r);
                            case'\'':
                                return e.slice(u);
                            case'<':
                                a = c[i.slice(1, -1)];
                                break;
                            default:
                                var f = +i;
                                if (0 === f) return n;
                                if (f > s) {
                                    var d = l(f / 10);
                                    return 0 === d ? n : d <= s ? void 0 === o[d - 1] ? i.charAt(1) : o[d - 1] + i.charAt(1) : n;
                                }
                                a = o[f - 1];
                        }
                        return void 0 === a ? '' : a;
                    });
                }
            });
        },
        aae3: function (t, e, n) {
            var r = n('d3f4'), i = n('2d95'), o = n('2b4c')('match');
            t.exports = function (t) {
                var e;
                return r(t) && (void 0 !== (e = t[o]) ? !!e : 'RegExp' == i(t));
            };
        },
        ad9a: function (t, e) {
            var n = /\b(Array|Date|Object|Math|JSON)\b/g;

            function r(t) {
                return t.replace(/\.\w+|\w+ *\(|"[^"]*"|'[^']*'|\/([^\/]+)\//g, '').replace(n, '').match(/[a-zA-Z_]\w*/g) || [];
            }

            function i(t, e, n) {
                var r = /\.\w+|\w+ *\(|"[^"]*"|'[^']*'|\/([^\/]+)\/|[a-zA-Z_]\w*/g;
                return t.replace(r, function (t) {
                    return '(' == t[t.length - 1] ? n(t) : ~e.indexOf(t) ? n(t) : t;
                });
            }

            function o(t) {
                for (var e = [], n = 0 ; n < t.length ; n++) ~e.indexOf(t[n]) || e.push(t[n]);
                return e;
            }

            function c(t) {
                return function (e) {
                    return t + e;
                };
            }

            t.exports = function (t, e) {
                var n = o(r(t));
                return e && 'string' == typeof e && (e = c(e)), e ? i(t, n, e) : n;
            };
        },
        aef6: function (t, e, n) {
            'use strict';
            var r = n('5ca1'), i = n('9def'), o = n('d2c8'), c = 'endsWith', a = ''[c];
            r(r.P + r.F * n('5147')(c), 'String', {
                endsWith: function (t) {
                    var e = o(this, t, c), n = arguments.length > 1 ? arguments[1] : void 0, r = i(e.length), u = void 0 === n ? r : Math.min(i(n), r), s = String(t);
                    return a ? a.call(e, s, u) : e.slice(u - s.length, u) === s;
                },
            });
        },
        b0c5: function (t, e, n) {
            'use strict';
            var r = n('520a');
            n('5ca1')({
                target: 'RegExp',
                proto: !0,
                forced: r !== /./.exec,
            }, {exec: r});
        },
        b16a: function (t, e, n) {
            'use strict';
            var r = n('412e'), i = n.n(r);
            i.a;
        },
        be13: function (t, e) {
            t.exports = function (t) {
                if (void 0 == t) throw TypeError('Can\'t call method on  ' + t);
                return t;
            };
        },
        c69a: function (t, e, n) {
            t.exports = !n('9e1e') && !n('79e5')(function () {
                return 7 != Object.defineProperty(n('230e')('div'), 'a', {
                    get: function () {
                        return 7;
                    },
                }).a;
            });
        },
        ca5a: function (t, e) {
            var n = 0, r = Math.random();
            t.exports = function (t) {
                return 'Symbol('.concat(void 0 === t ? '' : t, ')_', (++n + r).toString(36));
            };
        },
        cb7c: function (t, e, n) {
            var r = n('d3f4');
            t.exports = function (t) {
                if (!r(t)) throw TypeError(t + ' is not an object!');
                return t;
            };
        },
        cf4f: function (t, e, n) {
            'use strict';
            var r = n('d913');

            function i(t, e) {
                for (var n in e) o(e, n) && (t[n] = e[n]);
            }

            function o(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }

            t.exports = function (t) {
                r(t) || (t = {});
                for (var e = arguments.length, n = 1 ; n < e ; n++) {
                    var o = arguments[n];
                    r(o) && i(t, o);
                }
                return t;
            };
        },
        d2c8: function (t, e, n) {
            var r = n('aae3'), i = n('be13');
            t.exports = function (t, e, n) {
                if (r(e)) throw TypeError('String#' + n + ' doesn\'t accept regex!');
                return String(i(t));
            };
        },
        d3f4: function (t, e) {
            t.exports = function (t) {
                return 'object' === typeof t ? null !== t : 'function' === typeof t;
            };
        },
        d8e8: function (t, e) {
            t.exports = function (t) {
                if ('function' != typeof t) throw TypeError(t + ' is not a function!');
                return t;
            };
        },
        d913: function (t, e, n) {
            'use strict';
            /*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
            t.exports = function (t) {
                return 'undefined' !== typeof t && null !== t && ('object' === typeof t || 'function' === typeof t);
            };
        },
        ebd6: function (t, e, n) {
            var r = n('cb7c'), i = n('d8e8'), o = n('2b4c')('species');
            t.exports = function (t, e) {
                var n, c = r(t).constructor;
                return void 0 === c || void 0 == (n = r(c)[o]) ? e : i(n);
            };
        },
        f6fd: function (t, e) {
            (function (t) {
                var e = 'currentScript', n = t.getElementsByTagName('script');
                e in t || Object.defineProperty(t, e, {
                    get: function () {
                        try {throw new Error;} catch (r) {
                            var t, e = (/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack) || [!1])[1];
                            for (t in n) if (n[t].src == e || 'interactive' == n[t].readyState) return n[t];
                            return null;
                        }
                    },
                });
            })(document);
        },
        fa5b: function (t, e, n) {
            t.exports = n('5537')('native-function-to-string', Function.toString);
        },
        fb15: function (t, e, n) {
            'use strict';
            var r;
            (n.r(e), 'undefined' !== typeof window) && (n('f6fd'), (r = window.document.currentScript) && (r = r.src.match(/(.+\/)[^\/]+\.js(\?.*)?$/)) && (n.p = r[1]));
            var i = function () {
                var t, e = this, n = e.$createElement, r = e._self._c || n;
                return r('div', {staticClass: 'prism-editor-wrapper'}, [
                    e.lineNumbers ? r('div', {
                        staticClass: 'prism-editor__line-numbers',
                        style: {'min-height': e.lineNumbersHeight},
                        attrs: {'aria-hidden': 'true'},
                    }, [
                        r('div', {
                            staticClass: 'prism-editor__line-width-calc',
                            staticStyle: {
                                height: '0px',
                                visibility: 'hidden',
                                'pointer-events': 'none',
                            },
                        }, [e._v('\n      999\n    ')]),
                        e._l(e.lineNumbersCount, function (t) {
                            return r('div', {
                                key: t,
                                staticClass: 'prism-editor__line-number token comment',
                            }, [e._v('\n      ' + e._s(t) + '\n    ')]);
                        }),
                    ], 2) : e._e(),
                    r('pre', {
                        ref: 'pre',
                        staticClass: 'prism-editor__code',
                        class: (t = {}, t['language-' + e.language] = !0, t),
                        attrs: {
                            contenteditable: !e.readonly,
                            spellCheck: 'false',
                            autocapitalize: 'off',
                            autocomplete: 'off',
                            autocorrect: 'off',
                            'data-gramm': 'false',
                        },
                        domProps: {innerHTML: e._s(e.content)},
                        on: {
                            keydown: e.handleKeyDown,
                            keyup: e.handleKeyUp,
                            click: e.handleClick,
                        },
                    }),
                ]);
            }, o = [], c = (n('aef6'), n('28a5'), n('74a0')), a = n.n(c);

            function u(t, e, n) {
                return 'text' === e && (t = a()(t)), '<code class="language-'.concat(n, '">').concat(t, '</code>');
            }

            var s = function (t, e) {
                if (!e) return u(t, 'text', 'text');
                e = e.toLowerCase();
                var n = e;
                if ('vue' !== e && 'html' !== e || (e = 'markup'), 'md' === e && (e = 'markdown'), 'ts' === e && (e = 'typescript'), Prism.languages[e]) {
                    var r = Prism.highlight(t, Prism.languages[e], e);
                    return u(r, n, e);
                }
                return u(t, 'text', 'text');
            }, f = (n('a481'), function (t) {
                return t.replace('\n', '<br>');
            }), l = f, d = n('954e'), p = n.n(d), h = function (t) {
                return p()(t.replace(/<br>/gm, '\n').replace(/<\/?[^>]*>/gm, ''));
            }, v = h, g = (n('6b54'), n('72d6')), m = n.n(g);

            function y(t, e) {
                var n = window.getSelection();
                if (1 == arguments.length) {
                    if (!n.rangeCount) return;
                    var r = {}, i = n.getRangeAt(0), o = i.cloneRange();
                    return o.selectNodeContents(t), o.setEnd(i.endContainer, i.endOffset), r.end = o.toString().length, o.setStart(i.startContainer, i.startOffset), r.start = r.end - o.toString().length, r.atStart = 0 === o.startOffset, r.commonAncestorContainer = o.commonAncestorContainer, r.endContainer = o.endContainer, r.startContainer = o.startContainer, r;
                }
                var c, a, u = e.end && e.end !== e.start, s = 0, f = (i = document.createRange(), m()(t).select(Node.TEXT_NODE).revisit(!1)), l = e.start > t.textContent.length ? t.textContent.length : e.start, d = e.end > t.textContent.length ? t.textContent.length : e.end, p = e.atStart;
                while (c = f.next()) {
                    var h = s;
                    s += c.textContent.length;
                    var v = p ? s > l : s >= l;
                    if (!a && v && (a = !0, i.setStart(c, l - h), !u)) {
                        i.collapse(!0), b(t, i);
                        break;
                    }
                    if (u && s >= d) {
                        i.setEnd(c, d - h), b(t, i);
                        break;
                    }
                }
            }

            function b(t, e) {
                var n = window.getSelection();
                t.focus(), n.removeAllRanges(), n.addRange(e);
            }

            var x = y, S = (n('4917'), function (t, e) {
                var n = t.slice(0, e), r = n.lastIndexOf('\n') + 1, i = n.slice(r);
                return i;
            }), _ = /^\s+/, C = function (t, e) {
                var n = S(t, e), r = n.match(_);
                return null === r ? '' : r[0] || '';
            }, w = /^(\t| {2})* {2}$/, k = function (t, e) {
                var n = S(t, e);
                return w.test(n) ? 2 : 0;
            }, T = {
                model: {
                    prop: 'code',
                    event: 'change',
                },
                props: {
                    emitEvents: {
                        type: Boolean,
                        default: !1,
                    },
                    language: {
                        type: String,
                        default: 'js',
                    },
                    lineNumbers: {
                        type: Boolean,
                        default: !1,
                    },
                    autoStyleLineNumbers: {
                        type: Boolean,
                        default: !0,
                    },
                    readonly: {
                        type: Boolean,
                        default: !1,
                    },
                    code: {
                        type: String,
                        default: '',
                    },
                },
                data: function () {
                    return {
                        undoStack: [],
                        selection: void 0,
                        lineNumbersHeight: '20px',
                        undoOffset: 0,
                        undoTimestamp: 0,
                        lastPos: 0,
                        codeData: '',
                        composing: !1,
                    };
                },
                watch: {
                    code: {
                        immediate: !0,
                        handler: function (t) {
                            this.codeData = t || '';
                        },
                    },
                    content: {
                        immediate: !0,
                        handler: function () {
                            var t = this;
                            this.lineNumbers && this.$nextTick(function () {
                                t.setLineNumbersHeight();
                            });
                        },
                    },
                    lineNumbers: function () {
                        var t = this;
                        this.$nextTick(function () {
                            t.styleLineNumbers(), t.setLineNumbersHeight();
                        });
                    },
                },
                computed: {
                    content: function () {
                        return s(this.codeData, this.language);
                    },
                    lineNumbersCount: function () {
                        var t = this.codeData.split(/\r\n|\n/).length;
                        return this.codeData.endsWith('\n') && t--, t;
                    },
                },
                updated: function () {
                    this.selection && x(this.$refs.pre, this.selection);
                },
                mounted: function () {
                    var t = this;
                    this.recordChange(this.getPlain()), this.undoTimestamp = 0, this.styleLineNumbers();
                    var e = function (e) {
                        e.preventDefault();
                        var n = x(t.$refs.pre), r = (e.originalEvent || e).clipboardData.getData('Text');
                        document.execCommand('insertHTML', !1, a()(r));
                        var i = n.end + r.length;
                        t.selection = {
                            start: i,
                            end: i,
                        };
                        var o = t.getPlain();
                        t.recordChange(o, t.selection), t.updateContent(o), t.setLineNumbersHeight();
                    }, n = this.$refs.pre;
                    n.addEventListener('paste', e), this.$once('hook:beforeDestroy', function () {
                        n.removeEventListener('paste', e);
                    }), n.addEventListener('compositionstart', function () {
                        t.composing = !0;
                    }), n.addEventListener('compositionend', function () {
                        t.composing = !1;
                    });
                },
                methods: {
                    setLineNumbersHeight: function () {
                        this.lineNumbersHeight = getComputedStyle(this.$refs.pre).height;
                    },
                    styleLineNumbers: function () {
                        if (this.lineNumbers && this.autoStyleLineNumbers) {
                            var t = this.$refs.pre, e = this.$el.querySelector('.prism-editor__line-numbers'), n = window.getComputedStyle(t);
                            this.$nextTick(function () {
                                var r = 'border-top-left-radius', i = 'border-bottom-left-radius';
                                e.style[r] = n[r], e.style[i] = n[i], t.style[r] = 0, t.style[i] = 0;
                                var o = [
                                    'background-color',
                                    'margin-top',
                                    'padding-top',
                                    'font-family',
                                    'font-size',
                                    'line-height',
                                ];
                                o.forEach(function (t) {
                                    e.style[t] = n[t];
                                }), e.style['margin-bottom'] = '-' + n['padding-top'];
                            });
                        }
                    },
                    handleClick: function (t) {
                        this.emitEvents && this.$emit('editorClick', t), this.undoTimestamp = 0, this.selection = x(this.$refs.pre);
                    },
                    getPlain: function () {
                        if (this._innerHTML === this.$refs.pre.innerHTML) return this._plain;
                        var t = v(l(this.$refs.pre.innerHTML));
                        return this._innerHTML = this.$refs.pre.innerHTML, this._plain = t, this._plain;
                    },
                    recordChange: function (t, e) {
                        if (t !== this.undoStack[this.undoStack.length - 1]) {
                            this.undoOffset > 0 && (this.undoStack = this.undoStack.slice(0, -this.undoOffset), this.undoOffset = 0);
                            var n = Date.now(), r = {
                                plain: t,
                                selection: e,
                            };
                            n - this.undoTimestamp < 3e3 ? this.undoStack[this.undoStack.length - 1] = r : (this.undoStack.push(r), this.undoStack.length > 50 && this.undoStack.shift()), this.undoTimestamp = n;
                        }
                    },
                    updateContent: function (t) {
                        this.$emit('change', t);
                    },
                    restoreStackState: function (t) {
                        var e = this.undoStack[this.undoStack.length - 1 - t], n = e.plain, r = e.selection;
                        this.selection = r, this.undoOffset = t, this.updateContent(n);
                    },
                    undo: function () {
                        var t = this.undoOffset + 1;
                        t >= this.undoStack.length || this.restoreStackState(t);
                    },
                    redo: function () {
                        var t = this.undoOffset - 1;
                        t < 0 || this.restoreStackState(t);
                    },
                    handleKeyDown: function (t) {
                        if (this.emitEvents && this.$emit('keydown', t), 9 !== t.keyCode || this.ignoreTabKey) {
                            if (8 === t.keyCode) {
                                var e = x(this.$refs.pre), n = e.start, r = e.end;
                                if (n !== r) return;
                                var i = k(this.$refs.pre.innerText, n);
                                if (i <= 0) return;
                                for (var o = 0 ; o < i ; o++) document.execCommand('delete', !1);
                                t.preventDefault();
                            } else if (13 === t.keyCode) {
                                var c = x(this.$refs.pre), a = c.start, u = C(this.$refs.pre.innerText, a);
                                document.execCommand('insertHTML', !1, '\n ' + u), document.execCommand('delete', !1), t.preventDefault();
                            } else {
                                90 !== t.keyCode || t.metaKey === t.ctrlKey || t.altKey || (t.shiftKey ? this.redo() : this.undo(), t.preventDefault());
                            }
                        } else {
                            document.execCommand('insertHTML', !1, '  '), t.preventDefault();
                        }
                    },
                    handleKeyUp: function (t) {
                        var e = t.which;
                        if (this.composing) {
                            if (13 !== e) return;
                            this.composing = !1;
                        }
                        if (this.emitEvents && this.$emit('keyup', t), 91 !== t.keyCode && 93 !== t.keyCode && !t.ctrlKey && !t.metaKey) {
                            if (13 === t.keyCode && (this.undoTimestamp = 0), this.selection = x(this.$refs.pre), 37 !== t.keyCode && 38 !== t.keyCode && 39 !== t.keyCode && 40 !== t.keyCode) {
                                var n = this.getPlain();
                                this.recordChange(n, this.selection), this.updateContent(n);
                            } else {
                                this.undoTimestamp = 0;
                            }
                        }
                    },
                },
            }, E = T;
            n('b16a');

            function O(t, e, n, r, i, o, c, a) {
                var u, s = 'function' === typeof t ? t.options : t;
                if (e && (s.render = e, s.staticRenderFns = n, s._compiled = !0), r && (s.functional = !0), o && (s._scopeId = 'data-v-' + o), c ? (u = function (t) {
                    t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || 'undefined' === typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(c);
                }, s._ssrRegister = u) : i && (u = a ? function () {
                    i.call(this, this.$root.$options.shadowRoot);
                } : i), u) {
                    if (s.functional) {
                        s._injectStyles = u;
                        var f = s.render;
                        s.render = function (t, e) {
                            return u.call(e), f(t, e);
                        };
                    } else {
                        var l = s.beforeCreate;
                        s.beforeCreate = l ? [].concat(l, u) : [u];
                    }
                }
                return {
                    exports: t,
                    options: s,
                };
            }

            var j = O(E, i, o, !1, null, null, null), $ = j.exports;
            e['default'] = $;
        },
    })['default'];
});