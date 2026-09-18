"use strict";
var \_get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
var \_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
var \_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
function \_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function \_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.\_\_proto\_\_ = superClass; }
function \_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window.webpackJsonp = window.webpackJsonp || []).push([[0], [function (t, e, n) {
var i;
/\*!
\* jQuery JavaScript Library v3.3.1
\* https://jquery.com/
\*
\* Includes Sizzle.js
\* https://sizzlejs.com/
\*
\* Copyright JS Foundation and other contributors
\* Released under the MIT license
\* https://jquery.org/license
\*
\* Date: 2018-01-20T17:24Z
\*/
/\*!
\* jQuery JavaScript Library v3.3.1
\* https://jquery.com/
\*
\* Includes Sizzle.js
\* https://sizzlejs.com/
\*
\* Copyright JS Foundation and other contributors
\* Released under the MIT license
\* https://jquery.org/license
\*
\* Date: 2018-01-20T17:24Z
\*/
!function (e, n) {
"use strict";
"object" == \_typeof(t.exports) ? t.exports = e.document ? n(e, !0) : function (t) {
if (!t.document) throw new Error("jQuery requires a window with a document");return n(t);
} : n(e);
}("undefined" != typeof window ? window : this, function (n, o) {
"use strict";
var r = [],
s = n.document,
a = Object.getPrototypeOf,
l = r.slice,
c = r.concat,
u = r.push,
d = r.indexOf,
p = {},
f = p.toString,
h = p.hasOwnProperty,
m = h.toString,
g = m.call(Object),
v = {},
w = function w(t) {
return "function" == typeof t && "number" != typeof t.nodeType;
},
y = function y(t) {
return null != t && t === t.window;
},
b = { type: !0, src: !0, noModule: !0 };function x(t, e, n) {
var i,
o = (e = e || s).createElement("script");if (o.text = t, n) for (i in b) {
n[i] && (o[i] = n[i]);
}e.head.appendChild(o).parentNode.removeChild(o);
}function C(t) {
return null == t ? t + "" : "object" == (typeof t === "undefined" ? "undefined" : \_typeof(t)) || "function" == typeof t ? p[f.call(t)] || "object" : typeof t === "undefined" ? "undefined" : \_typeof(t);
}var k = function k(t, e) {
return new k.fn.init(t, e);
},
T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function E(t) {
var e = !!t && "length" in t && t.length,
n = C(t);return !w(t) && !y(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
}k.fn = k.prototype = { jquery: "3.3.1", constructor: k, length: 0, toArray: function toArray() {
return l.call(this);
}, get: function get(t) {
return null == t ? l.call(this) : t < 0 ? this[t + this.length] : this[t];
}, pushStack: function pushStack(t) {
var e = k.merge(this.constructor(), t);return e.prevObject = this, e;
}, each: function each(t) {
return k.each(this, t);
}, map: function map(t) {
return this.pushStack(k.map(this, function (e, n) {
return t.call(e, n, e);
}));
}, slice: function slice() {
return this.pushStack(l.apply(this, arguments));
}, first: function first() {
return this.eq(0);
}, last: function last() {
return this.eq(-1);
}, eq: function eq(t) {
var e = this.length,
n = +t + (t < 0 ? e : 0);return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
}, end: function end() {
return this.prevObject || this.constructor();
}, push: u, sort: r.sort, splice: r.splice }, k.extend = k.fn.extend = function () {
var t,
e,
n,
i,
o,
r,
s = arguments[0] || {},
a = 1,
l = arguments.length,
c = !1;for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == (typeof s === "undefined" ? "undefined" : \_typeof(s)) || w(s) || (s = {}), a === l && (s = this, a--); a < l; a++) {
if (null != (t = arguments[a])) for (e in t) {
n = s[e], s !== (i = t[e]) && (c && i && (k.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && k.isPlainObject(n) ? n : {}, s[e] = k.extend(c, r, i)) : void 0 !== i && (s[e] = i));
}
}return s;
}, k.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(t) {
throw new Error(t);
}, noop: function noop() {}, isPlainObject: function isPlainObject(t) {
var e, n;return !(!t || "[object Object]" !== f.call(t)) && (!(e = a(t)) || "function" == typeof (n = h.call(e, "constructor") && e.constructor) && m.call(n) === g);
}, isEmptyObject: function isEmptyObject(t) {
var e;for (e in t) {
return !1;
}return !0;
}, globalEval: function globalEval(t) {
x(t);
}, each: function each(t, e) {
var n,
i = 0;if (E(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++) {} else for (i in t) {
if (!1 === e.call(t[i], i, t[i])) break;
}return t;
}, trim: function trim(t) {
return null == t ? "" : (t + "").replace(T, "");
}, makeArray: function makeArray(t, e) {
var n = e || [];return null != t && (E(Object(t)) ? k.merge(n, "string" == typeof t ? [t] : t) : u.call(n, t)), n;
}, inArray: function inArray(t, e, n) {
return null == e ? -1 : d.call(e, t, n);
}, merge: function merge(t, e) {
for (var n = +e.length, i = 0, o = t.length; i < n; i++) {
t[o++] = e[i];
}return t.length = o, t;
}, grep: function grep(t, e, n) {
for (var i = [], o = 0, r = t.length, s = !n; o < r; o++) {
!e(t[o], o) !== s && i.push(t[o]);
}return i;
}, map: function map(t, e, n) {
var i,
o,
r = 0,
s = [];if (E(t)) for (i = t.length; r < i; r++) {
null != (o = e(t[r], r, n)) && s.push(o);
} else for (r in t) {
null != (o = e(t[r], r, n)) && s.push(o);
}return c.apply([], s);
}, guid: 1, support: v }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = r[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
p["[object " + e + "]"] = e.toLowerCase();
});var \_ =
/\*!
\* Sizzle CSS Selector Engine v2.3.3
\* https://sizzlejs.com/
\*
\* Copyright jQuery Foundation and other contributors
\* Released under the MIT license
\* http://jquery.org/license
\*
\* Date: 2016-08-08
\*/
function (t) {
var e,
n,
i,
o,
r,
s,
a,
l,
c,
u,
d,
p,
f,
h,
m,
g,
v,
w,
y,
b = "sizzle" + 1 \* new Date(),
x = t.document,
C = 0,
k = 0,
T = st(),
E = st(),
\_ = st(),
S = function S(t, e) {
return t === e && (d = !0), 0;
},
$ = {}.hasOwnProperty,
O = [],
A = O.pop,
L = O.push,
z = O.push,
D = O.slice,
I = function I(t, e) {
for (var n = 0, i = t.length; n < i; n++) {
if (t[n] === e) return n;
}return -1;
},
P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
M = "[\\x20\\t\\r\\n\\f]",
j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
N = "\\[" + M + "\*(" + j + ")(?:" + M + "\*([\*^$|!~]?=)" + M + "\*(?:'((?:\\\\.|[^\\\\'])\*)'|\"((?:\\\\.|[^\\\\\"])\*)\"|(" + j + "))|)" + M + "\*\\]",
R = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])\*)'|\"((?:\\\\.|[^\\\\\"])\*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")\*)|.\*)\\)|)",
H = new RegExp(M + "+", "g"),
F = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)\*)" + M + "+$", "g"),
B = new RegExp("^" + M + "\*," + M + "\*"),
q = new RegExp("^" + M + "\*([>+~]|" + M + ")" + M + "\*"),
W = new RegExp("=" + M + "\*([^\\]'\"]\*?)" + M + "\*\\]", "g"),
Y = new RegExp(R),
G = new RegExp("^" + j + "$"),
V = { ID: new RegExp("^#(" + j + ")"), CLASS: new RegExp("^\\.(" + j + ")"), TAG: new RegExp("^(" + j + "|[\*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + R), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "\*(even|odd|(([+-]|)(\\d\*)n|)" + M + "\*(?:([+-]|)" + M + "\*(\\d+)|))" + M + "\*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + M + "\*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "\*((?:-\\d)?\\d\*)" + M + "\*\\)|)(?=[^-]|$)", "i") },
U = /^(?:input|select|textarea|button)$/i,
K = /^h\d$/i,
Z = /^[^{]+\{\s\*\[native \w/,
X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
Q = /[+~]/,
J = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
tt = function tt(t, e, n) {
var i = "0x" + e - 65536;return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
},
et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
nt = function nt(t, e) {
return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
},
it = function it() {
p();
},
ot = wt(function (t) {
return !0 === t.disabled && ("form" in t || "label" in t);
}, { dir: "parentNode", next: "legend" });try {
z.apply(O = D.call(x.childNodes), x.childNodes), O[x.childNodes.length].nodeType;
} catch (t) {
z = { apply: O.length ? function (t, e) {
L.apply(t, D.call(e));
} : function (t, e) {
for (var n = t.length, i = 0; t[n++] = e[i++];) {}t.length = n - 1;
} };
}function rt(t, e, i, o) {
var r,
a,
c,
u,
d,
h,
v,
w = e && e.ownerDocument,
C = e ? e.nodeType : 9;if (i = i || [], "string" != typeof t || !t || 1 !== C && 9 !== C && 11 !== C) return i;if (!o && ((e ? e.ownerDocument || e : x) !== f && p(e), e = e || f, m)) {
if (11 !== C && (d = X.exec(t))) if (r = d[1]) {
if (9 === C) {
if (!(c = e.getElementById(r))) return i;if (c.id === r) return i.push(c), i;
} else if (w && (c = w.getElementById(r)) && y(e, c) && c.id === r) return i.push(c), i;
} else {
if (d[2]) return z.apply(i, e.getElementsByTagName(t)), i;if ((r = d[3]) && n.getElementsByClassName && e.getElementsByClassName) return z.apply(i, e.getElementsByClassName(r)), i;
}if (n.qsa && !\_[t + " "] && (!g || !g.test(t))) {
if (1 !== C) w = e, v = t;else if ("object" !== e.nodeName.toLowerCase()) {
for ((u = e.getAttribute("id")) ? u = u.replace(et, nt) : e.setAttribute("id", u = b), a = (h = s(t)).length; a--;) {
h[a] = "#" + u + " " + vt(h[a]);
}v = h.join(","), w = Q.test(t) && mt(e.parentNode) || e;
}if (v) try {
return z.apply(i, w.querySelectorAll(v)), i;
} catch (t) {} finally {
u === b && e.removeAttribute("id");
}
}
}return l(t.replace(F, "$1"), e, i, o);
}function st() {
var t = [];return function e(n, o) {
return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = o;
};
}function at(t) {
return t[b] = !0, t;
}function lt(t) {
var e = f.createElement("fieldset");try {
return !!t(e);
} catch (t) {
return !1;
} finally {
e.parentNode && e.parentNode.removeChild(e), e = null;
}
}function ct(t, e) {
for (var n = t.split("|"), o = n.length; o--;) {
i.attrHandle[n[o]] = e;
}
}function ut(t, e) {
var n = e && t,
i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;if (i) return i;if (n) for (; n = n.nextSibling;) {
if (n === e) return -1;
}return t ? 1 : -1;
}function dt(t) {
return function (e) {
return "input" === e.nodeName.toLowerCase() && e.type === t;
};
}function pt(t) {
return function (e) {
var n = e.nodeName.toLowerCase();return ("input" === n || "button" === n) && e.type === t;
};
}function ft(t) {
return function (e) {
return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ot(e) === t : e.disabled === t : "label" in e && e.disabled === t;
};
}function ht(t) {
return at(function (e) {
return e = +e, at(function (n, i) {
for (var o, r = t([], n.length, e), s = r.length; s--;) {
n[o = r[s]] && (n[o] = !(i[o] = n[o]));
}
});
});
}function mt(t) {
return t && void 0 !== t.getElementsByTagName && t;
}for (e in n = rt.support = {}, r = rt.isXML = function (t) {
var e = t && (t.ownerDocument || t).documentElement;return !!e && "HTML" !== e.nodeName;
}, p = rt.setDocument = function (t) {
var e,
o,
s = t ? t.ownerDocument || t : x;return s !== f && 9 === s.nodeType && s.documentElement ? (h = (f = s).documentElement, m = !r(f), x !== f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", it, !1) : o.attachEvent && o.attachEvent("onunload", it)), n.attributes = lt(function (t) {
return t.className = "i", !t.getAttribute("className");
}), n.getElementsByTagName = lt(function (t) {
return t.appendChild(f.createComment("")), !t.getElementsByTagName("\*").length;
}), n.getElementsByClassName = Z.test(f.getElementsByClassName), n.getById = lt(function (t) {
return h.appendChild(t).id = b, !f.getElementsByName || !f.getElementsByName(b).length;
}), n.getById ? (i.filter.ID = function (t) {
var e = t.replace(J, tt);return function (t) {
return t.getAttribute("id") === e;
};
}, i.find.ID = function (t, e) {
if (void 0 !== e.getElementById && m) {
var n = e.getElementById(t);return n ? [n] : [];
}
}) : (i.filter.ID = function (t) {
var e = t.replace(J, tt);return function (t) {
var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");return n && n.value === e;
};
}, i.find.ID = function (t, e) {
if (void 0 !== e.getElementById && m) {
var n,
i,
o,
r = e.getElementById(t);if (r) {
if ((n = r.getAttributeNode("id")) && n.value === t) return [r];for (o = e.getElementsByName(t), i = 0; r = o[i++];) {
if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
}
}return [];
}
}), i.find.TAG = n.getElementsByTagName ? function (t, e) {
return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0;
} : function (t, e) {
var n,
i = [],
o = 0,
r = e.getElementsByTagName(t);if ("\*" === t) {
for (; n = r[o++];) {
1 === n.nodeType && i.push(n);
}return i;
}return r;
}, i.find.CLASS = n.getElementsByClassName && function (t, e) {
if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t);
}, v = [], g = [], (n.qsa = Z.test(f.querySelectorAll)) && (lt(function (t) {
h.appendChild(t).innerHTML = "", t.querySelectorAll("[msallowcapture^='']").length && g.push("[\*^$]=" + M + "\*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + M + "\*(?:value|" + P + ")"), t.querySelectorAll("[id~=" + b + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + b + "+\*").length || g.push(".#.+[+~]");
}), lt(function (t) {
t.innerHTML = "";var e = f.createElement("input");e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + M + "\*[\*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("\*,:x"), g.push(",.\*:");
})), (n.matchesSelector = Z.test(w = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && lt(function (t) {
n.disconnectedMatch = w.call(t, "\*"), w.call(t, "[s!='']:x"), v.push("!=", R);
}), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), e = Z.test(h.compareDocumentPosition), y = e || Z.test(h.contains) ? function (t, e) {
var n = 9 === t.nodeType ? t.documentElement : t,
i = e && e.parentNode;return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
} : function (t, e) {
if (e) for (; e = e.parentNode;) {
if (e === t) return !0;
}return !1;
}, S = e ? function (t, e) {
if (t === e) return d = !0, 0;var i = !t.compareDocumentPosition - !e.compareDocumentPosition;return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === f || t.ownerDocument === x && y(x, t) ? -1 : e === f || e.ownerDocument === x && y(x, e) ? 1 : u ? I(u, t) - I(u, e) : 0 : 4 & i ? -1 : 1);
} : function (t, e) {
if (t === e) return d = !0, 0;var n,
i = 0,
o = t.parentNode,
r = e.parentNode,
s = [t],
a = [e];if (!o || !r) return t === f ? -1 : e === f ? 1 : o ? -1 : r ? 1 : u ? I(u, t) - I(u, e) : 0;if (o === r) return ut(t, e);for (n = t; n = n.parentNode;) {
s.unshift(n);
}for (n = e; n = n.parentNode;) {
a.unshift(n);
}for (; s[i] === a[i];) {
i++;
}return i ? ut(s[i], a[i]) : s[i] === x ? -1 : a[i] === x ? 1 : 0;
}, f) : f;
}, rt.matches = function (t, e) {
return rt(t, null, null, e);
}, rt.matchesSelector = function (t, e) {
if ((t.ownerDocument || t) !== f && p(t), e = e.replace(W, "='$1']"), n.matchesSelector && m && !\_[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e))) try {
var i = w.call(t, e);if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i;
} catch (t) {}return rt(e, f, null, [t]).length > 0;
}, rt.contains = function (t, e) {
return (t.ownerDocument || t) !== f && p(t), y(t, e);
}, rt.attr = function (t, e) {
(t.ownerDocument || t) !== f && p(t);var o = i.attrHandle[e.toLowerCase()],
r = o && $.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !m) : void 0;return void 0 !== r ? r : n.attributes || !m ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null;
}, rt.escape = function (t) {
return (t + "").replace(et, nt);
}, rt.error = function (t) {
throw new Error("Syntax error, unrecognized expression: " + t);
}, rt.uniqueSort = function (t) {
var e,
i = [],
o = 0,
r = 0;if (d = !n.detectDuplicates, u = !n.sortStable && t.slice(0), t.sort(S), d) {
for (; e = t[r++];) {
e === t[r] && (o = i.push(r));
}for (; o--;) {
t.splice(i[o], 1);
}
}return u = null, t;
}, o = rt.getText = function (t) {
var e,
n = "",
i = 0,
r = t.nodeType;if (r) {
if (1 === r || 9 === r || 11 === r) {
if ("string" == typeof t.textContent) return t.textContent;for (t = t.firstChild; t; t = t.nextSibling) {
n += o(t);
}
} else if (3 === r || 4 === r) return t.nodeValue;
} else for (; e = t[i++];) {
n += o(e);
}return n;
}, (i = rt.selectors = { cacheLength: 50, createPseudo: at, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(t) {
return t[1] = t[1].replace(J, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
}, CHILD: function CHILD(t) {
return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 \* ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]), t;
}, PSEUDO: function PSEUDO(t) {
var e,
n = !t[6] && t[2];return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && Y.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3));
} }, filter: { TAG: function TAG(t) {
var e = t.replace(J, tt).toLowerCase();return "\*" === t ? function () {
return !0;
} : function (t) {
return t.nodeName && t.nodeName.toLowerCase() === e;
};
}, CLASS: function CLASS(t) {
var e = T[t + " "];return e || (e = new RegExp("(^|" + M + ")" + t + "(" + M + "|$)")) && T(t, function (t) {
return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
});
}, ATTR: function ATTR(t, e, n) {
return function (i) {
var o = rt.attr(i, t);return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "\*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o.replace(H, " ") + " ").indexOf(n) > -1 : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"));
};
}, CHILD: function CHILD(t, e, n, i, o) {
var r = "nth" !== t.slice(0, 3),
s = "last" !== t.slice(-4),
a = "of-type" === e;return 1 === i && 0 === o ? function (t) {
return !!t.parentNode;
} : function (e, n, l) {
var c,
u,
d,
p,
f,
h,
m = r !== s ? "nextSibling" : "previousSibling",
g = e.parentNode,
v = a && e.nodeName.toLowerCase(),
w = !l && !a,
y = !1;if (g) {
if (r) {
for (; m;) {
for (p = e; p = p[m];) {
if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
}h = m = "only" === t && !h && "nextSibling";
}return !0;
}if (h = [s ? g.firstChild : g.lastChild], s && w) {
for (y = (f = (c = (u = (d = (p = g)[b] || (p[b] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === C && c[1]) && c[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (y = f = 0) || h.pop();) {
if (1 === p.nodeType && ++y && p === e) {
u[t] = [C, f, y];break;
}
}
} else if (w && (y = f = (c = (u = (d = (p = e)[b] || (p[b] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === C && c[1]), !1 === y) for (; (p = ++f && p && p[m] || (y = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++y || (w && ((u = (d = p[b] || (p[b] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] = [C, y]), p !== e));) {}return (y -= o) === i || y % i == 0 && y / i >= 0;
}
};
}, PSEUDO: function PSEUDO(t, e) {
var n,
o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);return o[b] ? o(e) : o.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function (t, n) {
for (var i, r = o(t, e), s = r.length; s--;) {
t[i = I(t, r[s])] = !(n[i] = r[s]);
}
}) : function (t) {
return o(t, 0, n);
}) : o;
} }, pseudos: { not: at(function (t) {
var e = [],
n = [],
i = a(t.replace(F, "$1"));return i[b] ? at(function (t, e, n, o) {
for (var r, s = i(t, null, o, []), a = t.length; a--;) {
(r = s[a]) && (t[a] = !(e[a] = r));
}
}) : function (t, o, r) {
return e[0] = t, i(e, null, r, n), e[0] = null, !n.pop();
};
}), has: at(function (t) {
return function (e) {
return rt(t, e).length > 0;
};
}), contains: at(function (t) {
return t = t.replace(J, tt), function (e) {
return (e.textContent || e.innerText || o(e)).indexOf(t) > -1;
};
}), lang: at(function (t) {
return G.test(t || "") || rt.error("unsupported lang: " + t), t = t.replace(J, tt).toLowerCase(), function (e) {
var n;do {
if (n = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
} while ((e = e.parentNode) && 1 === e.nodeType);return !1;
};
}), target: function target(e) {
var n = t.location && t.location.hash;return n && n.slice(1) === e.id;
}, root: function root(t) {
return t === h;
}, focus: function focus(t) {
return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
}, enabled: ft(!1), disabled: ft(!0), checked: function checked(t) {
var e = t.nodeName.toLowerCase();return "input" === e && !!t.checked || "option" === e && !!t.selected;
}, selected: function selected(t) {
return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
}, empty: function empty(t) {
for (t = t.firstChild; t; t = t.nextSibling) {
if (t.nodeType < 6) return !1;
}return !0;
}, parent: function parent(t) {
return !i.pseudos.empty(t);
}, header: function header(t) {
return K.test(t.nodeName);
}, input: function input(t) {
return U.test(t.nodeName);
}, button: function button(t) {
var e = t.nodeName.toLowerCase();return "input" === e && "button" === t.type || "button" === e;
}, text: function text(t) {
var e;return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
}, first: ht(function () {
return [0];
}), last: ht(function (t, e) {
return [e - 1];
}), eq: ht(function (t, e, n) {
return [n < 0 ? n + e : n];
}), even: ht(function (t, e) {
for (var n = 0; n < e; n += 2) {
t.push(n);
}return t;
}), odd: ht(function (t, e) {
for (var n = 1; n < e; n += 2) {
t.push(n);
}return t;
}), lt: ht(function (t, e, n) {
for (var i = n < 0 ? n + e : n; --i >= 0;) {
t.push(i);
}return t;
}), gt: ht(function (t, e, n) {
for (var i = n < 0 ? n + e : n; ++i < e;) {
t.push(i);
}return t;
}) } }).pseudos.nth = i.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
i.pseudos[e] = dt(e);
}for (e in { submit: !0, reset: !0 }) {
i.pseudos[e] = pt(e);
}function gt() {}function vt(t) {
for (var e = 0, n = t.length, i = ""; e < n; e++) {
i += t[e].value;
}return i;
}function wt(t, e, n) {
var i = e.dir,
o = e.next,
r = o || i,
s = n && "parentNode" === r,
a = k++;return e.first ? function (e, n, o) {
for (; e = e[i];) {
if (1 === e.nodeType || s) return t(e, n, o);
}return !1;
} : function (e, n, l) {
var c,
u,
d,
p = [C, a];if (l) {
for (; e = e[i];) {
if ((1 === e.nodeType || s) && t(e, n, l)) return !0;
}
} else for (; e = e[i];) {
if (1 === e.nodeType || s) if (u = (d = e[b] || (e[b] = {}))[e.uniqueID] || (d[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e;else {
if ((c = u[r]) && c[0] === C && c[1] === a) return p[2] = c[2];if (u[r] = p, p[2] = t(e, n, l)) return !0;
}
}return !1;
};
}function yt(t) {
return t.length > 1 ? function (e, n, i) {
for (var o = t.length; o--;) {
if (!t[o](e, n, i)) return !1;
}return !0;
} : t[0];
}function bt(t, e, n, i, o) {
for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++) {
(r = t[a]) && (n && !n(r, i, o) || (s.push(r), c && e.push(a)));
}return s;
}function xt(t, e, n, i, o, r) {
return i && !i[b] && (i = xt(i)), o && !o[b] && (o = xt(o, r)), at(function (r, s, a, l) {
var c,
u,
d,
p = [],
f = [],
h = s.length,
m = r || function (t, e, n) {
for (var i = 0, o = e.length; i < o; i++) {
rt(t, e[i], n);
}return n;
}(e || "\*", a.nodeType ? [a] : a, []),
g = !t || !r && e ? m : bt(m, p, t, a, l),
v = n ? o || (r ? t : h || i) ? [] : s : g;if (n && n(g, v, a, l), i) for (c = bt(v, f), i(c, [], a, l), u = c.length; u--;) {
(d = c[u]) && (v[f[u]] = !(g[f[u]] = d));
}if (r) {
if (o || t) {
if (o) {
for (c = [], u = v.length; u--;) {
(d = v[u]) && c.push(g[u] = d);
}o(null, v = [], c, l);
}for (u = v.length; u--;) {
(d = v[u]) && (c = o ? I(r, d) : p[u]) > -1 && (r[c] = !(s[c] = d));
}
}
} else v = bt(v === s ? v.splice(h, v.length) : v), o ? o(null, s, v, l) : z.apply(s, v);
});
}function Ct(t) {
for (var e, n, o, r = t.length, s = i.relative[t[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = wt(function (t) {
return t === e;
}, a, !0), d = wt(function (t) {
return I(e, t) > -1;
}, a, !0), p = [function (t, n, i) {
var o = !s && (i || n !== c) || ((e = n).nodeType ? u(t, n, i) : d(t, n, i));return e = null, o;
}]; l < r; l++) {
if (n = i.relative[t[l].type]) p = [wt(yt(p), n)];else {
if ((n = i.filter[t[l].type].apply(null, t[l].matches))[b]) {
for (o = ++l; o < r && !i.relative[t[o].type]; o++) {}return xt(l > 1 && yt(p), l > 1 && vt(t.slice(0, l - 1).concat({ value: " " === t[l - 2].type ? "\*" : "" })).replace(F, "$1"), n, l < o && Ct(t.slice(l, o)), o < r && Ct(t = t.slice(o)), o < r && vt(t));
}p.push(n);
}
}return yt(p);
}return gt.prototype = i.filters = i.pseudos, i.setFilters = new gt(), s = rt.tokenize = function (t, e) {
var n,
o,
r,
s,
a,
l,
c,
u = E[t + " "];if (u) return e ? 0 : u.slice(0);for (a = t, l = [], c = i.preFilter; a;) {
for (s in n && !(o = B.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = q.exec(a)) && (n = o.shift(), r.push({ value: n, type: o[0].replace(F, " ") }), a = a.slice(n.length)), i.filter) {
!(o = V[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({ value: n, type: s, matches: o }), a = a.slice(n.length));
}if (!n) break;
}return e ? a.length : a ? rt.error(t) : E(t, l).slice(0);
}, a = rt.compile = function (t, e) {
var n,
o = [],
r = [],
a = \_[t + " "];if (!a) {
for (e || (e = s(t)), n = e.length; n--;) {
(a = Ct(e[n]))[b] ? o.push(a) : r.push(a);
}(a = \_(t, function (t, e) {
var n = e.length > 0,
o = t.length > 0,
r = function r(\_r, s, a, l, u) {
var d,
h,
g,
v = 0,
w = "0",
y = \_r && [],
b = [],
x = c,
k = \_r || o && i.find.TAG("\*", u),
T = C += null == x ? 1 : Math.random() || .1,
E = k.length;for (u && (c = s === f || s || u); w !== E && null != (d = k[w]); w++) {
if (o && d) {
for (h = 0, s || d.ownerDocument === f || (p(d), a = !m); g = t[h++];) {
if (g(d, s || f, a)) {
l.push(d);break;
}
}u && (C = T);
}n && ((d = !g && d) && v--, \_r && y.push(d));
}if (v += w, n && w !== v) {
for (h = 0; g = e[h++];) {
g(y, b, s, a);
}if (\_r) {
if (v > 0) for (; w--;) {
y[w] || b[w] || (b[w] = A.call(l));
}b = bt(b);
}z.apply(l, b), u && !\_r && b.length > 0 && v + e.length > 1 && rt.uniqueSort(l);
}return u && (C = T, c = x), y;
};return n ? at(r) : r;
}(r, o))).selector = t;
}return a;
}, l = rt.select = function (t, e, n, o) {
var r,
l,
c,
u,
d,
p = "function" == typeof t && t,
f = !o && s(t = p.selector || t);if (n = n || [], 1 === f.length) {
if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && m && i.relative[l[1].type]) {
if (!(e = (i.find.ID(c.matches[0].replace(J, tt), e) || [])[0])) return n;p && (e = e.parentNode), t = t.slice(l.shift().value.length);
}for (r = V.needsContext.test(t) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);) {
if ((d = i.find[u]) && (o = d(c.matches[0].replace(J, tt), Q.test(l[0].type) && mt(e.parentNode) || e))) {
if (l.splice(r, 1), !(t = o.length && vt(l))) return z.apply(n, o), n;break;
}
}
}return (p || a(t, f))(o, e, !m, n, !e || Q.test(t) && mt(e.parentNode) || e), n;
}, n.sortStable = b.split("").sort(S).join("") === b, n.detectDuplicates = !!d, p(), n.sortDetached = lt(function (t) {
return 1 & t.compareDocumentPosition(f.createElement("fieldset"));
}), lt(function (t) {
return t.innerHTML = "", "#" === t.firstChild.getAttribute("href");
}) || ct("type|href|height|width", function (t, e, n) {
if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
}), n.attributes && lt(function (t) {
return t.innerHTML = "", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
}) || ct("value", function (t, e, n) {
if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
}), lt(function (t) {
return null == t.getAttribute("disabled");
}) || ct(P, function (t, e, n) {
var i;if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
}), rt;
}(n);k.find = \_, k.expr = \_.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = \_.uniqueSort, k.text = \_.getText, k.isXMLDoc = \_.isXML, k.contains = \_.contains, k.escapeSelector = \_.escape;var S = function S(t, e, n) {
for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) {
if (1 === t.nodeType) {
if (o && k(t).is(n)) break;i.push(t);
}
}return i;
},
$ = function $(t, e) {
for (var n = []; t; t = t.nextSibling) {
1 === t.nodeType && t !== e && n.push(t);
}return n;
},
O = k.expr.match.needsContext;function A(t, e) {
return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
}var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]\*)[\x20\t\r\n\f]\*\/?>(?:<\/\1>|)$/i;function z(t, e, n) {
return w(e) ? k.grep(t, function (t, i) {
return !!e.call(t, i, t) !== n;
}) : e.nodeType ? k.grep(t, function (t) {
return t === e !== n;
}) : "string" != typeof e ? k.grep(t, function (t) {
return d.call(e, t) > -1 !== n;
}) : k.filter(e, t, n);
}k.filter = function (t, e, n) {
var i = e[0];return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? k.find.matchesSelector(i, t) ? [i] : [] : k.find.matches(t, k.grep(e, function (t) {
return 1 === t.nodeType;
}));
}, k.fn.extend({ find: function find(t) {
var e,
n,
i = this.length,
o = this;if ("string" != typeof t) return this.pushStack(k(t).filter(function () {
for (e = 0; e < i; e++) {
if (k.contains(o[e], this)) return !0;
}
}));for (n = this.pushStack([]), e = 0; e < i; e++) {
k.find(t, o[e], n);
}return i > 1 ? k.uniqueSort(n) : n;
}, filter: function filter(t) {
return this.pushStack(z(this, t || [], !1));
}, not: function not(t) {
return this.pushStack(z(this, t || [], !0));
}, is: function is(t) {
return !!z(this, "string" == typeof t && O.test(t) ? k(t) : t || [], !1).length;
} });var D,
I = /^(?:\s\*(<[\w\W]+>)[^>]\*|#([\w-]+))$/;(k.fn.init = function (t, e, n) {
var i, o;if (!t) return this;if (n = n || D, "string" == typeof t) {
if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : I.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);if (i[1]) {
if (e = e instanceof k ? e[0] : e, k.merge(this, k.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : s, !0)), L.test(i[1]) && k.isPlainObject(e)) for (i in e) {
w(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
}return this;
}return (o = s.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
}return t.nodeType ? (this[0] = t, this.length = 1, this) : w(t) ? void 0 !== n.ready ? n.ready(t) : t(k) : k.makeArray(t, this);
}).prototype = k.fn, D = k(s);var P = /^(?:parents|prev(?:Until|All))/,
M = { children: !0, contents: !0, next: !0, prev: !0 };function j(t, e) {
for (; (t = t[e]) && 1 !== t.nodeType;) {}return t;
}k.fn.extend({ has: function has(t) {
var e = k(t, this),
n = e.length;return this.filter(function () {
for (var t = 0; t < n; t++) {
if (k.contains(this, e[t])) return !0;
}
});
}, closest: function closest(t, e) {
var n,
i = 0,
o = this.length,
r = [],
s = "string" != typeof t && k(t);if (!O.test(t)) for (; i < o; i++) {
for (n = this[i]; n && n !== e; n = n.parentNode) {
if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && k.find.matchesSelector(n, t))) {
r.push(n);break;
}
}
}return this.pushStack(r.length > 1 ? k.uniqueSort(r) : r);
}, index: function index(t) {
return t ? "string" == typeof t ? d.call(k(t), this[0]) : d.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
}, add: function add(t, e) {
return this.pushStack(k.uniqueSort(k.merge(this.get(), k(t, e))));
}, addBack: function addBack(t) {
return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
} }), k.each({ parent: function parent(t) {
var e = t.parentNode;return e && 11 !== e.nodeType ? e : null;
}, parents: function parents(t) {
return S(t, "parentNode");
}, parentsUntil: function parentsUntil(t, e, n) {
return S(t, "parentNode", n);
}, next: function next(t) {
return j(t, "nextSibling");
}, prev: function prev(t) {
return j(t, "previousSibling");
}, nextAll: function nextAll(t) {
return S(t, "nextSibling");
}, prevAll: function prevAll(t) {
return S(t, "previousSibling");
}, nextUntil: function nextUntil(t, e, n) {
return S(t, "nextSibling", n);
}, prevUntil: function prevUntil(t, e, n) {
return S(t, "previousSibling", n);
}, siblings: function siblings(t) {
return $((t.parentNode || {}).firstChild, t);
}, children: function children(t) {
return $(t.firstChild);
}, contents: function contents(t) {
return A(t, "iframe") ? t.contentDocument : (A(t, "template") && (t = t.content || t), k.merge([], t.childNodes));
} }, function (t, e) {
k.fn[t] = function (n, i) {
var o = k.map(this, e, n);return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = k.filter(i, o)), this.length > 1 && (M[t] || k.uniqueSort(o), P.test(t) && o.reverse()), this.pushStack(o);
};
});var N = /[^\x20\t\r\n\f]+/g;function R(t) {
return t;
}function H(t) {
throw t;
}function F(t, e, n, i) {
var o;try {
t && w(o = t.promise) ? o.call(t).done(e).fail(n) : t && w(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i));
} catch (t) {
n.apply(void 0, [t]);
}
}k.Callbacks = function (t) {
t = "string" == typeof t ? function (t) {
var e = {};return k.each(t.match(N) || [], function (t, n) {
e[n] = !0;
}), e;
}(t) : k.extend({}, t);var e,
n,
i,
o,
r = [],
s = [],
a = -1,
l = function l() {
for (o = o || t.once, i = e = !0; s.length; a = -1) {
for (n = s.shift(); ++a < r.length;) {
!1 === r[a].apply(n[0], n[1]) && t.stopOnFalse && (a = r.length, n = !1);
}
}t.memory || (n = !1), e = !1, o && (r = n ? [] : "");
},
c = { add: function add() {
return r && (n && !e && (a = r.length - 1, s.push(n)), function e(n) {
k.each(n, function (n, i) {
w(i) ? t.unique && c.has(i) || r.push(i) : i && i.length && "string" !== C(i) && e(i);
});
}(arguments), n && !e && l()), this;
}, remove: function remove() {
return k.each(arguments, function (t, e) {
for (var n; (n = k.inArray(e, r, n)) > -1;) {
r.splice(n, 1), n <= a && a--;
}
}), this;
}, has: function has(t) {
return t ? k.inArray(t, r) > -1 : r.length > 0;
}, empty: function empty() {
return r && (r = []), this;
}, disable: function disable() {
return o = s = [], r = n = "", this;
}, disabled: function disabled() {
return !r;
}, lock: function lock() {
return o = s = [], n || e || (r = n = ""), this;
}, locked: function locked() {
return !!o;
}, fireWith: function fireWith(t, n) {
return o || (n = [t, (n = n || []).slice ? n.slice() : n], s.push(n), e || l()), this;
}, fire: function fire() {
return c.fireWith(this, arguments), this;
}, fired: function fired() {
return !!i;
} };return c;
}, k.extend({ Deferred: function Deferred(t) {
var e = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
i = "pending",
o = { state: function state() {
return i;
}, always: function always() {
return r.done(arguments).fail(arguments), this;
}, catch: function \_catch(t) {
return o.then(null, t);
}, pipe: function pipe() {
var t = arguments;return k.Deferred(function (n) {
k.each(e, function (e, i) {
var o = w(t[i[4]]) && t[i[4]];r[i[1]](function () {
var t = o && o.apply(this, arguments);t && w(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [t] : arguments);
});
}), t = null;
}).promise();
}, then: function then(t, i, o) {
var r = 0;function s(t, e, i, o) {
return function () {
var a = this,
l = arguments,
c = function c() {
var n, c;if (!(t < r)) {
if ((n = i.apply(a, l)) === e.promise()) throw new TypeError("Thenable self-resolution");c = n && ("object" == (typeof n === "undefined" ? "undefined" : \_typeof(n)) || "function" == typeof n) && n.then, w(c) ? o ? c.call(n, s(r, e, R, o), s(r, e, H, o)) : (r++, c.call(n, s(r, e, R, o), s(r, e, H, o), s(r, e, R, e.notifyWith))) : (i !== R && (a = void 0, l = [n]), (o || e.resolveWith)(a, l));
}
},
u = o ? c : function () {
try {
c();
} catch (n) {
k.Deferred.exceptionHook && k.Deferred.exceptionHook(n, u.stackTrace), t + 1 >= r && (i !== H && (a = void 0, l = [n]), e.rejectWith(a, l));
}
};t ? u() : (k.Deferred.getStackHook && (u.stackTrace = k.Deferred.getStackHook()), n.setTimeout(u));
};
}return k.Deferred(function (n) {
e[0][3].add(s(0, n, w(o) ? o : R, n.notifyWith)), e[1][3].add(s(0, n, w(t) ? t : R)), e[2][3].add(s(0, n, w(i) ? i : H));
}).promise();
}, promise: function promise(t) {
return null != t ? k.extend(t, o) : o;
} },
r = {};return k.each(e, function (t, n) {
var s = n[2],
a = n[5];o[n[1]] = s.add, a && s.add(function () {
i = a;
}, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), s.add(n[3].fire), r[n[0]] = function () {
return r[n[0] + "With"](this === r ? void 0 : this, arguments), this;
}, r[n[0] + "With"] = s.fireWith;
}), o.promise(r), t && t.call(r, r), r;
}, when: function when(t) {
var e = arguments.length,
n = e,
i = Array(n),
o = l.call(arguments),
r = k.Deferred(),
s = function s(t) {
return function (n) {
i[t] = this, o[t] = arguments.length > 1 ? l.call(arguments) : n, --e || r.resolveWith(i, o);
};
};if (e <= 1 && (F(t, r.done(s(n)).resolve, r.reject, !e), "pending" === r.state() || w(o[n] && o[n].then))) return r.then();for (; n--;) {
F(o[n], s(n), r.reject);
}return r.promise();
} });var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook = function (t, e) {
n.console && n.console.warn && t && B.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
}, k.readyException = function (t) {
n.setTimeout(function () {
throw t;
});
};var q = k.Deferred();function W() {
s.removeEventListener("DOMContentLoaded", W), n.removeEventListener("load", W), k.ready();
}k.fn.ready = function (t) {
return q.then(t).catch(function (t) {
k.readyException(t);
}), this;
}, k.extend({ isReady: !1, readyWait: 1, ready: function ready(t) {
(!0 === t ? --k.readyWait : k.isReady) || (k.isReady = !0, !0 !== t && --k.readyWait > 0 || q.resolveWith(s, [k]));
} }), k.ready.then = q.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(k.ready) : (s.addEventListener("DOMContentLoaded", W), n.addEventListener("load", W));var Y = function Y(t, e, n, i, o, r, s) {
var a = 0,
l = t.length,
c = null == n;if ("object" === C(n)) for (a in o = !0, n) {
Y(t, e, a, n[a], !0, r, s);
} else if (void 0 !== i && (o = !0, w(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function e(t, \_e2, n) {
return c.call(k(t), n);
})), e)) for (; a < l; a++) {
e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
}return o ? t : c ? e.call(t) : l ? e(t[0], n) : r;
},
G = /^-ms-/,
V = /-([a-z])/g;function U(t, e) {
return e.toUpperCase();
}function K(t) {
return t.replace(G, "ms-").replace(V, U);
}var Z = function Z(t) {
return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
};function X() {
this.expando = k.expando + X.uid++;
}X.uid = 1, X.prototype = { cache: function cache(t) {
var e = t[this.expando];return e || (e = {}, Z(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e;
}, set: function set(t, e, n) {
var i,
o = this.cache(t);if ("string" == typeof e) o[K(e)] = n;else for (i in e) {
o[K(i)] = e[i];
}return o;
}, get: function get(t, e) {
return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][K(e)];
}, access: function access(t, e, n) {
return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e);
}, remove: function remove(t, e) {
var n,
i = t[this.expando];if (void 0 !== i) {
if (void 0 !== e) {
n = (e = Array.isArray(e) ? e.map(K) : (e = K(e)) in i ? [e] : e.match(N) || []).length;for (; n--;) {
delete i[e[n]];
}
}(void 0 === e || k.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
}
}, hasData: function hasData(t) {
var e = t[this.expando];return void 0 !== e && !k.isEmptyObject(e);
} };var Q = new X(),
J = new X(),
tt = /^(?:\{[\w\W]\*\}|\[[\w\W]\*\])$/,
et = /[A-Z]/g;function nt(t, e, n) {
var i;if (void 0 === n && 1 === t.nodeType) if (i = "data-" + e.replace(et, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
try {
n = function (t) {
return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t);
}(n);
} catch (t) {}J.set(t, e, n);
} else n = void 0;return n;
}k.extend({ hasData: function hasData(t) {
return J.hasData(t) || Q.hasData(t);
}, data: function data(t, e, n) {
return J.access(t, e, n);
}, removeData: function removeData(t, e) {
J.remove(t, e);
}, \_data: function \_data(t, e, n) {
return Q.access(t, e, n);
}, \_removeData: function \_removeData(t, e) {
Q.remove(t, e);
} }), k.fn.extend({ data: function data(t, e) {
var n,
i,
o,
r = this[0],
s = r && r.attributes;if (void 0 === t) {
if (this.length && (o = J.get(r), 1 === r.nodeType && !Q.get(r, "hasDataAttrs"))) {
for (n = s.length; n--;) {
s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = K(i.slice(5)), nt(r, i, o[i]));
}Q.set(r, "hasDataAttrs", !0);
}return o;
}return "object" == (typeof t === "undefined" ? "undefined" : \_typeof(t)) ? this.each(function () {
J.set(this, t);
}) : Y(this, function (e) {
var n;if (r && void 0 === e) return void 0 !== (n = J.get(r, t)) ? n : void 0 !== (n = nt(r, t)) ? n : void 0;this.each(function () {
J.set(this, t, e);
});
}, null, e, arguments.length > 1, null, !0);
}, removeData: function removeData(t) {
return this.each(function () {
J.remove(this, t);
});
} }), k.extend({ queue: function queue(t, e, n) {
var i;if (t) return e = (e || "fx") + "queue", i = Q.get(t, e), n && (!i || Array.isArray(n) ? i = Q.access(t, e, k.makeArray(n)) : i.push(n)), i || [];
}, dequeue: function dequeue(t, e) {
e = e || "fx";var n = k.queue(t, e),
i = n.length,
o = n.shift(),
r = k.\_queueHooks(t, e);"inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, function () {
k.dequeue(t, e);
}, r)), !i && r && r.empty.fire();
}, \_queueHooks: function \_queueHooks(t, e) {
var n = e + "queueHooks";return Q.get(t, n) || Q.access(t, n, { empty: k.Callbacks("once memory").add(function () {
Q.remove(t, [e + "queue", n]);
}) });
} }), k.fn.extend({ queue: function queue(t, e) {
var n = 2;return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? k.queue(this[0], t) : void 0 === e ? this : this.each(function () {
var n = k.queue(this, t, e);k.\_queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && k.dequeue(this, t);
});
}, dequeue: function dequeue(t) {
return this.each(function () {
k.dequeue(this, t);
});
}, clearQueue: function clearQueue(t) {
return this.queue(t || "fx", []);
}, promise: function promise(t, e) {
var n,
i = 1,
o = k.Deferred(),
r = this,
s = this.length,
a = function a() {
--i || o.resolveWith(r, [r]);
};for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) {
(n = Q.get(r[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
}return a(), o.promise(e);
} });var it = /[+-]?(?:\d\*\.|)\d+(?:[eE][+-]?\d+|)/.source,
ot = new RegExp("^(?:([+-])=|)(" + it + ")([a-z%]\*)$", "i"),
rt = ["Top", "Right", "Bottom", "Left"],
st = function st(t, e) {
return "none" === (t = e || t).style.display || "" === t.style.display && k.contains(t.ownerDocument, t) && "none" === k.css(t, "display");
},
at = function at(t, e, n, i) {
var o,
r,
s = {};for (r in e) {
s[r] = t.style[r], t.style[r] = e[r];
}for (r in o = n.apply(t, i || []), e) {
t.style[r] = s[r];
}return o;
};function lt(t, e, n, i) {
var o,
r,
s = 20,
a = i ? function () {
return i.cur();
} : function () {
return k.css(t, e, "");
},
l = a(),
c = n && n[3] || (k.cssNumber[e] ? "" : "px"),
u = (k.cssNumber[e] || "px" !== c && +l) && ot.exec(k.css(t, e));if (u && u[3] !== c) {
for (l /= 2, c = c || u[3], u = +l || 1; s--;) {
k.style(t, e, u + c), (1 - r) \* (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
}u \*= 2, k.style(t, e, u + c), n = n || [];
}return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) \* n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o;
}var ct = {};function ut(t) {
var e,
n = t.ownerDocument,
i = t.nodeName,
o = ct[i];return o || (e = n.body.appendChild(n.createElement(i)), o = k.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), ct[i] = o, o);
}function dt(t, e) {
for (var n, i, o = [], r = 0, s = t.length; r < s; r++) {
(i = t[r]).style && (n = i.style.display, e ? ("none" === n && (o[r] = Q.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && st(i) && (o[r] = ut(i))) : "none" !== n && (o[r] = "none", Q.set(i, "display", n)));
}for (r = 0; r < s; r++) {
null != o[r] && (t[r].style.display = o[r]);
}return t;
}k.fn.extend({ show: function show() {
return dt(this, !0);
}, hide: function hide() {
return dt(this);
}, toggle: function toggle(t) {
return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
st(this) ? k(this).show() : k(this).hide();
});
} });var pt = /^(?:checkbox|radio)$/i,
ft = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
ht = /^$|^module$|\/(?:java|ecma)script/i,
mt = { option: [1, ""], thead: [1, ""], col: [2, ""], tr: [2, ""], td: [3, ""], \_default: [0, "", ""] };function gt(t, e) {
var n;return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "\*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "\*") : [], void 0 === e || e && A(t, e) ? k.merge([t], n) : n;
}function vt(t, e) {
for (var n = 0, i = t.length; n < i; n++) {
Q.set(t[n], "globalEval", !e || Q.get(e[n], "globalEval"));
}
}mt.optgroup = mt.option, mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead, mt.th = mt.td;var wt,
yt,
bt = /<|&#?\w+;/;function xt(t, e, n, i, o) {
for (var r, s, a, l, c, u, d = e.createDocumentFragment(), p = [], f = 0, h = t.length; f < h; f++) {
if ((r = t[f]) || 0 === r) if ("object" === C(r)) k.merge(p, r.nodeType ? [r] : r);else if (bt.test(r)) {
for (s = s || d.appendChild(e.createElement("div")), a = (ft.exec(r) || ["", ""])[1].toLowerCase(), l = mt[a] || mt.\_default, s.innerHTML = l[1] + k.htmlPrefilter(r) + l[2], u = l[0]; u--;) {
s = s.lastChild;
}k.merge(p, s.childNodes), (s = d.firstChild).textContent = "";
} else p.push(e.createTextNode(r));
}for (d.textContent = "", f = 0; r = p[f++];) {
if (i && k.inArray(r, i) > -1) o && o.push(r);else if (c = k.contains(r.ownerDocument, r), s = gt(d.appendChild(r), "script"), c && vt(s), n) for (u = 0; r = s[u++];) {
ht.test(r.type || "") && n.push(r);
}
}return d;
}wt = s.createDocumentFragment().appendChild(s.createElement("div")), (yt = s.createElement("input")).setAttribute("type", "radio"), yt.setAttribute("checked", "checked"), yt.setAttribute("name", "t"), wt.appendChild(yt), v.checkClone = wt.cloneNode(!0).cloneNode(!0).lastChild.checked, wt.innerHTML = "", v.noCloneChecked = !!wt.cloneNode(!0).lastChild.defaultValue;var Ct = s.documentElement,
kt = /^key/,
Tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
Et = /^([^.]\*)(?:\.(.+)|)/;function \_t() {
return !0;
}function St() {
return !1;
}function $t() {
try {
return s.activeElement;
} catch (t) {}
}function Ot(t, e, n, i, o, r) {
var s, a;if ("object" == (typeof e === "undefined" ? "undefined" : \_typeof(e))) {
for (a in "string" != typeof n && (i = i || n, n = void 0), e) {
Ot(t, a, n, i, e[a], r);
}return t;
}if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = St;else if (!o) return t;return 1 === r && (s = o, (o = function o(t) {
return k().off(t), s.apply(this, arguments);
}).guid = s.guid || (s.guid = k.guid++)), t.each(function () {
k.event.add(this, e, o, i, n);
});
}k.event = { global: {}, add: function add(t, e, n, i, o) {
var r,
s,
a,
l,
c,
u,
d,
p,
f,
h,
m,
g = Q.get(t);if (g) for (n.handler && (n = (r = n).handler, o = r.selector), o && k.find.matchesSelector(Ct, o), n.guid || (n.guid = k.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (e) {
return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0;
}), c = (e = (e || "").match(N) || [""]).length; c--;) {
f = m = (a = Et.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (d = k.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = k.event.special[f] || {}, u = k.extend({ type: f, origType: m, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && k.expr.match.needsContext.test(o), namespace: h.join(".") }, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, h, s) || t.addEventListener && t.addEventListener(f, s)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), k.event.global[f] = !0);
}
}, remove: function remove(t, e, n, i, o) {
var r,
s,
a,
l,
c,
u,
d,
p,
f,
h,
m,
g = Q.hasData(t) && Q.get(t);if (g && (l = g.events)) {
for (c = (e = (e || "").match(N) || [""]).length; c--;) {
if (f = m = (a = Et.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
for (d = k.event.special[f] || {}, p = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.\*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) {
u = p[r], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("\*\*" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(t, u));
}s && !p.length && (d.teardown && !1 !== d.teardown.call(t, h, g.handle) || k.removeEvent(t, f, g.handle), delete l[f]);
} else for (f in l) {
k.event.remove(t, f + e[c], n, i, !0);
}
}k.isEmptyObject(l) && Q.remove(t, "handle events");
}
}, dispatch: function dispatch(t) {
var e,
n,
i,
o,
r,
s,
a = k.event.fix(t),
l = new Array(arguments.length),
c = (Q.get(this, "events") || {})[a.type] || [],
u = k.event.special[a.type] || {};for (l[0] = a, e = 1; e < arguments.length; e++) {
l[e] = arguments[e];
}if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
for (s = k.event.handlers.call(this, a, c), e = 0; (o = s[e++]) && !a.isPropagationStopped();) {
for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) {
a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((k.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
}
}return u.postDispatch && u.postDispatch.call(this, a), a.result;
}
}, handlers: function handlers(t, e) {
var n,
i,
o,
r,
s,
a = [],
l = e.delegateCount,
c = t.target;if (l && c.nodeType && !("click" === t.type && t.button >= 1)) for (; c !== this; c = c.parentNode || this) {
if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
for (r = [], s = {}, n = 0; n < l; n++) {
void 0 === s[o = (i = e[n]).selector + " "] && (s[o] = i.needsContext ? k(o, this).index(c) > -1 : k.find(o, this, null, [c]).length), s[o] && r.push(i);
}r.length && a.push({ elem: c, handlers: r });
}
}return c = this, l < e.length && a.push({ elem: c, handlers: e.slice(l) }), a;
}, addProp: function addProp(t, e) {
Object.defineProperty(k.Event.prototype, t, { enumerable: !0, configurable: !0, get: w(e) ? function () {
if (this.originalEvent) return e(this.originalEvent);
} : function () {
if (this.originalEvent) return this.originalEvent[t];
}, set: function set(e) {
Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
} });
}, fix: function fix(t) {
return t[k.expando] ? t : new k.Event(t);
}, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
if (this !== $t() && this.focus) return this.focus(), !1;
}, delegateType: "focusin" }, blur: { trigger: function trigger() {
if (this === $t() && this.blur) return this.blur(), !1;
}, delegateType: "focusout" }, click: { trigger: function trigger() {
if ("checkbox" === this.type && this.click && A(this, "input")) return this.click(), !1;
}, \_default: function \_default(t) {
return A(t.target, "a");
} }, beforeunload: { postDispatch: function postDispatch(t) {
void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
} } } }, k.removeEvent = function (t, e, n) {
t.removeEventListener && t.removeEventListener(e, n);
}, k.Event = function (t, e) {
if (!(this instanceof k.Event)) return new k.Event(t, e);t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? \_t : St, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && k.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[k.expando] = !0;
}, k.Event.prototype = { constructor: k.Event, isDefaultPrevented: St, isPropagationStopped: St, isImmediatePropagationStopped: St, isSimulated: !1, preventDefault: function preventDefault() {
var t = this.originalEvent;this.isDefaultPrevented = \_t, t && !this.isSimulated && t.preventDefault();
}, stopPropagation: function stopPropagation() {
var t = this.originalEvent;this.isPropagationStopped = \_t, t && !this.isSimulated && t.stopPropagation();
}, stopImmediatePropagation: function stopImmediatePropagation() {
var t = this.originalEvent;this.isImmediatePropagationStopped = \_t, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
} }, k.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(t) {
var e = t.button;return null == t.which && kt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Tt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which;
} }, k.event.addProp), k.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, e) {
k.event.special[t] = { delegateType: e, bindType: e, handle: function handle(t) {
var n,
i = t.relatedTarget,
o = t.handleObj;return i && (i === this || k.contains(this, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n;
} };
}), k.fn.extend({ on: function on(t, e, n, i) {
return Ot(this, t, e, n, i);
}, one: function one(t, e, n, i) {
return Ot(this, t, e, n, i, 1);
}, off: function off(t, e, n) {
var i, o;if (t && t.preventDefault && t.handleObj) return i = t.handleObj, k(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" == (typeof t === "undefined" ? "undefined" : \_typeof(t))) {
for (o in t) {
this.off(o, e, t[o]);
}return this;
}return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = St), this.each(function () {
k.event.remove(this, t, n, e);
});
} });var At = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]\*)[^>]\*)\/>/gi,
Lt = /\s\*$/g;function It(t, e) {
return A(t, "table") && A(11 !== e.nodeType ? e : e.firstChild, "tr") && k(t).children("tbody")[0] || t;
}function Pt(t) {
return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
}function Mt(t) {
return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t;
}function jt(t, e) {
var n, i, o, r, s, a, l, c;if (1 === e.nodeType) {
if (Q.hasData(t) && (r = Q.access(t), s = Q.set(e, r), c = r.events)) for (o in delete s.handle, s.events = {}, c) {
for (n = 0, i = c[o].length; n < i; n++) {
k.event.add(e, o, c[o][n]);
}
}J.hasData(t) && (a = J.access(t), l = k.extend({}, a), J.set(e, l));
}
}function Nt(t, e, n, i) {
e = c.apply([], e);var o,
r,
s,
a,
l,
u,
d = 0,
p = t.length,
f = p - 1,
h = e[0],
m = w(h);if (m || p > 1 && "string" == typeof h && !v.checkClone && zt.test(h)) return t.each(function (o) {
var r = t.eq(o);m && (e[0] = h.call(this, o, r.html())), Nt(r, e, n, i);
});if (p && (r = (o = xt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
for (a = (s = k.map(gt(o, "script"), Pt)).length; d < p; d++) {
l = o, d !== f && (l = k.clone(l, !0, !0), a && k.merge(s, gt(l, "script"))), n.call(t[d], l, d);
}if (a) for (u = s[s.length - 1].ownerDocument, k.map(s, Mt), d = 0; d < a; d++) {
l = s[d], ht.test(l.type || "") && !Q.access(l, "globalEval") && k.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? k.\_evalUrl && k.\_evalUrl(l.src) : x(l.textContent.replace(Dt, ""), u, l));
}
}return t;
}function Rt(t, e, n) {
for (var i, o = e ? k.filter(e, t) : t, r = 0; null != (i = o[r]); r++) {
n || 1 !== i.nodeType || k.cleanData(gt(i)), i.parentNode && (n && k.contains(i.ownerDocument, i) && vt(gt(i, "script")), i.parentNode.removeChild(i));
}return t;
}k.extend({ htmlPrefilter: function htmlPrefilter(t) {
return t.replace(At, "<$1>");
}, clone: function clone(t, e, n) {
var i,
o,
r,
s,
a,
l,
c,
u = t.cloneNode(!0),
d = k.contains(t.ownerDocument, t);if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || k.isXMLDoc(t))) for (s = gt(u), i = 0, o = (r = gt(t)).length; i < o; i++) {
a = r[i], l = s[i], c = void 0, "input" === (c = l.nodeName.toLowerCase()) && pt.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
}if (e) if (n) for (r = r || gt(t), s = s || gt(u), i = 0, o = r.length; i < o; i++) {
jt(r[i], s[i]);
} else jt(t, u);return (s = gt(u, "script")).length > 0 && vt(s, !d && gt(t, "script")), u;
}, cleanData: function cleanData(t) {
for (var e, n, i, o = k.event.special, r = 0; void 0 !== (n = t[r]); r++) {
if (Z(n)) {
if (e = n[Q.expando]) {
if (e.events) for (i in e.events) {
o[i] ? k.event.remove(n, i) : k.removeEvent(n, i, e.handle);
}n[Q.expando] = void 0;
}n[J.expando] && (n[J.expando] = void 0);
}
}
} }), k.fn.extend({ detach: function detach(t) {
return Rt(this, t, !0);
}, remove: function remove(t) {
return Rt(this, t);
}, text: function text(t) {
return Y(this, function (t) {
return void 0 === t ? k.text(this) : this.empty().each(function () {
1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
});
}, null, t, arguments.length);
}, append: function append() {
return Nt(this, arguments, function (t) {
1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || It(this, t).appendChild(t);
});
}, prepend: function prepend() {
return Nt(this, arguments, function (t) {
if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
var e = It(this, t);e.insertBefore(t, e.firstChild);
}
});
}, before: function before() {
return Nt(this, arguments, function (t) {
this.parentNode && this.parentNode.insertBefore(t, this);
});
}, after: function after() {
return Nt(this, arguments, function (t) {
this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
});
}, empty: function empty() {
for (var t, e = 0; null != (t = this[e]); e++) {
1 === t.nodeType && (k.cleanData(gt(t, !1)), t.textContent = "");
}return this;
}, clone: function clone(t, e) {
return t = null != t && t, e = null == e ? t : e, this.map(function () {
return k.clone(this, t, e);
});
}, html: function html(t) {
return Y(this, function (t) {
var e = this[0] || {},
n = 0,
i = this.length;if (void 0 === t && 1 === e.nodeType) return e.innerHTML;if ("string" == typeof t && !Lt.test(t) && !mt[(ft.exec(t) || ["", ""])[1].toLowerCase()]) {
t = k.htmlPrefilter(t);try {
for (; n < i; n++) {
1 === (e = this[n] || {}).nodeType && (k.cleanData(gt(e, !1)), e.innerHTML = t);
}e = 0;
} catch (t) {}
}e && this.empty().append(t);
}, null, t, arguments.length);
}, replaceWith: function replaceWith() {
var t = [];return Nt(this, arguments, function (e) {
var n = this.parentNode;k.inArray(this, t) < 0 && (k.cleanData(gt(this)), n && n.replaceChild(e, this));
}, t);
} }), k.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, e) {
k.fn[t] = function (t) {
for (var n, i = [], o = k(t), r = o.length - 1, s = 0; s <= r; s++) {
n = s === r ? this : this.clone(!0), k(o[s])[e](n), u.apply(i, n.get());
}return this.pushStack(i);
};
});var Ht = new RegExp("^(" + it + ")(?!px)[a-z%]+$", "i"),
Ft = function Ft(t) {
var e = t.ownerDocument.defaultView;return e && e.opener || (e = n), e.getComputedStyle(t);
},
Bt = new RegExp(rt.join("|"), "i");function qt(t, e, n) {
var i,
o,
r,
s,
a = t.style;return (n = n || Ft(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || k.contains(t.ownerDocument, t) || (s = k.style(t, e)), !v.pixelBoxStyles() && Ht.test(s) && Bt.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s;
}function Wt(t, e) {
return { get: function get() {
if (!t()) return (this.get = e).apply(this, arguments);delete this.get;
} };
}!function () {
function t() {
if (u) {
c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Ct.appendChild(c).appendChild(u);var t = n.getComputedStyle(u);i = "1%" !== t.top, l = 12 === e(t.marginLeft), u.style.right = "60%", a = 36 === e(t.right), o = 36 === e(t.width), u.style.position = "absolute", r = 36 === u.offsetWidth || "absolute", Ct.removeChild(c), u = null;
}
}function e(t) {
return Math.round(parseFloat(t));
}var i,
o,
r,
a,
l,
c = s.createElement("div"),
u = s.createElement("div");u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(v, { boxSizingReliable: function boxSizingReliable() {
return t(), o;
}, pixelBoxStyles: function pixelBoxStyles() {
return t(), a;
}, pixelPosition: function pixelPosition() {
return t(), i;
}, reliableMarginLeft: function reliableMarginLeft() {
return t(), l;
}, scrollboxSize: function scrollboxSize() {
return t(), r;
} }));
}();var Yt = /^(none|table(?!-c[ea]).+)/,
Gt = /^--/,
Vt = { position: "absolute", visibility: "hidden", display: "block" },
Ut = { letterSpacing: "0", fontWeight: "400" },
Kt = ["Webkit", "Moz", "ms"],
Zt = s.createElement("div").style;function Xt(t) {
var e = k.cssProps[t];return e || (e = k.cssProps[t] = function (t) {
if (t in Zt) return t;for (var e = t[0].toUpperCase() + t.slice(1), n = Kt.length; n--;) {
if ((t = Kt[n] + e) in Zt) return t;
}
}(t) || t), e;
}function Qt(t, e, n) {
var i = ot.exec(e);return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
}function Jt(t, e, n, i, o, r) {
var s = "width" === e ? 1 : 0,
a = 0,
l = 0;if (n === (i ? "border" : "content")) return 0;for (; s < 4; s += 2) {
"margin" === n && (l += k.css(t, n + rt[s], !0, o)), i ? ("content" === n && (l -= k.css(t, "padding" + rt[s], !0, o)), "margin" !== n && (l -= k.css(t, "border" + rt[s] + "Width", !0, o))) : (l += k.css(t, "padding" + rt[s], !0, o), "padding" !== n ? l += k.css(t, "border" + rt[s] + "Width", !0, o) : a += k.css(t, "border" + rt[s] + "Width", !0, o));
}return !i && r >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - .5))), l;
}function te(t, e, n) {
var i = Ft(t),
o = qt(t, e, i),
r = "border-box" === k.css(t, "boxSizing", !1, i),
s = r;if (Ht.test(o)) {
if (!n) return o;o = "auto";
}return s = s && (v.boxSizingReliable() || o === t.style[e]), ("auto" === o || !parseFloat(o) && "inline" === k.css(t, "display", !1, i)) && (o = t["offset" + e[0].toUpperCase() + e.slice(1)], s = !0), (o = parseFloat(o) || 0) + Jt(t, e, n || (r ? "border" : "content"), s, i, o) + "px";
}function ee(t, e, n, i, o) {
return new ee.prototype.init(t, e, n, i, o);
}k.extend({ cssHooks: { opacity: { get: function get(t, e) {
if (e) {
var n = qt(t, "opacity");return "" === n ? "1" : n;
}
} } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(t, e, n, i) {
if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
var o,
r,
s,
a = K(e),
l = Gt.test(e),
c = t.style;if (l || (e = Xt(a)), s = k.cssHooks[e] || k.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : c[e];"string" === (r = typeof n === "undefined" ? "undefined" : \_typeof(n)) && (o = ot.exec(n)) && o[1] && (n = lt(t, e, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (k.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n));
}
}, css: function css(t, e, n, i) {
var o,
r,
s,
a = K(e);return Gt.test(e) || (e = Xt(a)), (s = k.cssHooks[e] || k.cssHooks[a]) && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = qt(t, e, i)), "normal" === o && e in Ut && (o = Ut[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o;
} }), k.each(["height", "width"], function (t, e) {
k.cssHooks[e] = { get: function get(t, n, i) {
if (n) return !Yt.test(k.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? te(t, e, i) : at(t, Vt, function () {
return te(t, e, i);
});
}, set: function set(t, n, i) {
var o,
r = Ft(t),
s = "border-box" === k.css(t, "boxSizing", !1, r),
a = i && Jt(t, e, i, s, r);return s && v.scrollboxSize() === r.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - Jt(t, e, "border", !1, r) - .5)), a && (o = ot.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = k.css(t, e)), Qt(0, n, a);
} };
}), k.cssHooks.marginLeft = Wt(v.reliableMarginLeft, function (t, e) {
if (e) return (parseFloat(qt(t, "marginLeft")) || t.getBoundingClientRect().left - at(t, { marginLeft: 0 }, function () {
return t.getBoundingClientRect().left;
})) + "px";
}), k.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
k.cssHooks[t + e] = { expand: function expand(n) {
for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
o[t + rt[i] + e] = r[i] || r[i - 2] || r[0];
}return o;
} }, "margin" !== t && (k.cssHooks[t + e].set = Qt);
}), k.fn.extend({ css: function css(t, e) {
return Y(this, function (t, e, n) {
var i,
o,
r = {},
s = 0;if (Array.isArray(e)) {
for (i = Ft(t), o = e.length; s < o; s++) {
r[e[s]] = k.css(t, e[s], !1, i);
}return r;
}return void 0 !== n ? k.style(t, e, n) : k.css(t, e);
}, t, e, arguments.length > 1);
} }), k.Tween = ee, ee.prototype = { constructor: ee, init: function init(t, e, n, i, o, r) {
this.elem = t, this.prop = n, this.easing = o || k.easing.\_default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (k.cssNumber[n] ? "" : "px");
}, cur: function cur() {
var t = ee.propHooks[this.prop];return t && t.get ? t.get(this) : ee.propHooks.\_default.get(this);
}, run: function run(t) {
var e,
n = ee.propHooks[this.prop];return this.options.duration ? this.pos = e = k.easing[this.easing](t, this.options.duration \* t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) \* e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ee.propHooks.\_default.set(this), this;
} }, ee.prototype.init.prototype = ee.prototype, ee.propHooks = { \_default: { get: function get(t) {
var e;return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = k.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
}, set: function set(t) {
k.fx.step[t.prop] ? k.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[k.cssProps[t.prop]] && !k.cssHooks[t.prop] ? t.elem[t.prop] = t.now : k.style(t.elem, t.prop, t.now + t.unit);
} } }, ee.propHooks.scrollTop = ee.propHooks.scrollLeft = { set: function set(t) {
t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
} }, k.easing = { linear: function linear(t) {
return t;
}, swing: function swing(t) {
return .5 - Math.cos(t \* Math.PI) / 2;
}, \_default: "swing" }, k.fx = ee.prototype.init, k.fx.step = {};var ne,
ie,
oe = /^(?:toggle|show|hide)$/,
re = /queueHooks$/;function se() {
ie && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(se) : n.setTimeout(se, k.fx.interval), k.fx.tick());
}function ae() {
return n.setTimeout(function () {
ne = void 0;
}), ne = Date.now();
}function le(t, e) {
var n,
i = 0,
o = { height: t };for (e = e ? 1 : 0; i < 4; i += 2 - e) {
o["margin" + (n = rt[i])] = o["padding" + n] = t;
}return e && (o.opacity = o.width = t), o;
}function ce(t, e, n) {
for (var i, o = (ue.tweeners[e] || []).concat(ue.tweeners["\*"]), r = 0, s = o.length; r < s; r++) {
if (i = o[r].call(n, e, t)) return i;
}
}function ue(t, e, n) {
var i,
o,
r = 0,
s = ue.prefilters.length,
a = k.Deferred().always(function () {
delete l.elem;
}),
l = function l() {
if (o) return !1;for (var e = ne || ae(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) {
c.tweens[r].run(i);
}return a.notifyWith(t, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1);
},
c = a.promise({ elem: t, props: k.extend({}, e), opts: k.extend(!0, { specialEasing: {}, easing: k.easing.\_default }, n), originalProperties: e, originalOptions: n, startTime: ne || ae(), duration: n.duration, tweens: [], createTween: function createTween(e, n) {
var i = k.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);return c.tweens.push(i), i;
}, stop: function stop(e) {
var n = 0,
i = e ? c.tweens.length : 0;if (o) return this;for (o = !0; n < i; n++) {
c.tweens[n].run(1);
}return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this;
} }),
u = c.props;for (!function (t, e) {
var n, i, o, r, s;for (n in t) {
if (o = e[i = K(n)], r = t[n], Array.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = k.cssHooks[i]) && ("expand" in s)) for (n in r = s.expand(r), delete t[i], r) {
(n in t) || (t[n] = r[n], e[n] = o);
} else e[i] = o;
}
}(u, c.opts.specialEasing); r < s; r++) {
if (i = ue.prefilters[r].call(c, t, u, c.opts)) return w(i.stop) && (k.\_queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
}return k.map(u, ce, c), w(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), k.fx.timer(k.extend(l, { elem: t, anim: c, queue: c.opts.queue })), c;
}k.Animation = k.extend(ue, { tweeners: { "\*": [function (t, e) {
var n = this.createTween(t, e);return lt(n.elem, t, ot.exec(e), n), n;
}] }, tweener: function tweener(t, e) {
w(t) ? (e = t, t = ["\*"]) : t = t.match(N);for (var n, i = 0, o = t.length; i < o; i++) {
n = t[i], ue.tweeners[n] = ue.tweeners[n] || [], ue.tweeners[n].unshift(e);
}
}, prefilters: [function (t, e, n) {
var i,
o,
r,
s,
a,
l,
c,
u,
d = "width" in e || "height" in e,
p = this,
f = {},
h = t.style,
m = t.nodeType && st(t),
g = Q.get(t, "fxshow");for (i in n.queue || (null == (s = k.\_queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
s.unqueued || a();
}), s.unqueued++, p.always(function () {
p.always(function () {
s.unqueued--, k.queue(t, "fx").length || s.empty.fire();
});
})), e) {
if (o = e[i], oe.test(o)) {
if (delete e[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
if ("show" !== o || !g || void 0 === g[i]) continue;m = !0;
}f[i] = g && g[i] || k.style(t, i);
}
}if ((l = !k.isEmptyObject(e)) || !k.isEmptyObject(f)) for (i in d && 1 === t.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = g && g.display) && (c = Q.get(t, "display")), "none" === (u = k.css(t, "display")) && (c ? u = c : (dt([t], !0), c = t.style.display || c, u = k.css(t, "display"), dt([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === k.css(t, "float") && (l || (p.done(function () {
h.display = c;
}), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
})), l = !1, f) {
l || (g ? "hidden" in g && (m = g.hidden) : g = Q.access(t, "fxshow", { display: c }), r && (g.hidden = !m), m && dt([t], !0), p.done(function () {
for (i in m || dt([t]), Q.remove(t, "fxshow"), f) {
k.style(t, i, f[i]);
}
})), l = ce(m ? g[i] : 0, i, p), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0));
}
}], prefilter: function prefilter(t, e) {
e ? ue.prefilters.unshift(t) : ue.prefilters.push(t);
} }), k.speed = function (t, e, n) {
var i = t && "object" == (typeof t === "undefined" ? "undefined" : \_typeof(t)) ? k.extend({}, t) : { complete: n || !n && e || w(t) && t, duration: t, easing: n && e || e && !w(e) && e };return k.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in k.fx.speeds ? i.duration = k.fx.speeds[i.duration] : i.duration = k.fx.speeds.\_default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
w(i.old) && i.old.call(this), i.queue && k.dequeue(this, i.queue);
}, i;
}, k.fn.extend({ fadeTo: function fadeTo(t, e, n, i) {
return this.filter(st).css("opacity", 0).show().end().animate({ opacity: e }, t, n, i);
}, animate: function animate(t, e, n, i) {
var o = k.isEmptyObject(t),
r = k.speed(e, n, i),
s = function s() {
var e = ue(this, k.extend({}, t), r);(o || Q.get(this, "finish")) && e.stop(!0);
};return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
}, stop: function stop(t, e, n) {
var i = function i(t) {
var e = t.stop;delete t.stop, e(n);
};return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
var e = !0,
o = null != t && t + "queueHooks",
r = k.timers,
s = Q.get(this);if (o) s[o] && s[o].stop && i(s[o]);else for (o in s) {
s[o] && s[o].stop && re.test(o) && i(s[o]);
}for (o = r.length; o--;) {
r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
}!e && n || k.dequeue(this, t);
});
}, finish: function finish(t) {
return !1 !== t && (t = t || "fx"), this.each(function () {
var e,
n = Q.get(this),
i = n[t + "queue"],
o = n[t + "queueHooks"],
r = k.timers,
s = i ? i.length : 0;for (n.finish = !0, k.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) {
r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
}for (e = 0; e < s; e++) {
i[e] && i[e].finish && i[e].finish.call(this);
}delete n.finish;
});
} }), k.each(["toggle", "show", "hide"], function (t, e) {
var n = k.fn[e];k.fn[e] = function (t, i, o) {
return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(le(e, !0), t, i, o);
};
}), k.each({ slideDown: le("show"), slideUp: le("hide"), slideToggle: le("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, e) {
k.fn[t] = function (t, n, i) {
return this.animate(e, t, n, i);
};
}), k.timers = [], k.fx.tick = function () {
var t,
e = 0,
n = k.timers;for (ne = Date.now(); e < n.length; e++) {
(t = n[e])() || n[e] !== t || n.splice(e--, 1);
}n.length || k.fx.stop(), ne = void 0;
}, k.fx.timer = function (t) {
k.timers.push(t), k.fx.start();
}, k.fx.interval = 13, k.fx.start = function () {
ie || (ie = !0, se());
}, k.fx.stop = function () {
ie = null;
}, k.fx.speeds = { slow: 600, fast: 200, \_default: 400 }, k.fn.delay = function (t, e) {
return t = k.fx && k.fx.speeds[t] || t, e = e || "fx", this.queue(e, function (e, i) {
var o = n.setTimeout(e, t);i.stop = function () {
n.clearTimeout(o);
};
});
}, function () {
var t = s.createElement("input"),
e = s.createElement("select").appendChild(s.createElement("option"));t.type = "checkbox", v.checkOn = "" !== t.value, v.optSelected = e.selected, (t = s.createElement("input")).value = "t", t.type = "radio", v.radioValue = "t" === t.value;
}();var de,
pe = k.expr.attrHandle;k.fn.extend({ attr: function attr(t, e) {
return Y(this, k.attr, t, e, arguments.length > 1);
}, removeAttr: function removeAttr(t) {
return this.each(function () {
k.removeAttr(this, t);
});
} }), k.extend({ attr: function attr(t, e, n) {
var i,
o,
r = t.nodeType;if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? k.prop(t, e, n) : (1 === r && k.isXMLDoc(t) || (o = k.attrHooks[e.toLowerCase()] || (k.expr.match.bool.test(e) ? de : void 0)), void 0 !== n ? null === n ? void k.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = k.find.attr(t, e)) ? void 0 : i);
}, attrHooks: { type: { set: function set(t, e) {
if (!v.radioValue && "radio" === e && A(t, "input")) {
var n = t.value;return t.setAttribute("type", e), n && (t.value = n), e;
}
} } }, removeAttr: function removeAttr(t, e) {
var n,
i = 0,
o = e && e.match(N);if (o && 1 === t.nodeType) for (; n = o[i++];) {
t.removeAttribute(n);
}
} }), de = { set: function set(t, e, n) {
return !1 === e ? k.removeAttr(t, n) : t.setAttribute(n, n), n;
} }, k.each(k.expr.match.bool.source.match(/\w+/g), function (t, e) {
var n = pe[e] || k.find.attr;pe[e] = function (t, e, i) {
var o,
r,
s = e.toLowerCase();return i || (r = pe[s], pe[s] = o, o = null != n(t, e, i) ? s : null, pe[s] = r), o;
};
});var fe = /^(?:input|select|textarea|button)$/i,
he = /^(?:a|area)$/i;function me(t) {
return (t.match(N) || []).join(" ");
}function ge(t) {
return t.getAttribute && t.getAttribute("class") || "";
}function ve(t) {
return Array.isArray(t) ? t : "string" == typeof t && t.match(N) || [];
}k.fn.extend({ prop: function prop(t, e) {
return Y(this, k.prop, t, e, arguments.length > 1);
}, removeProp: function removeProp(t) {
return this.each(function () {
delete this[k.propFix[t] || t];
});
} }), k.extend({ prop: function prop(t, e, n) {
var i,
o,
r = t.nodeType;if (3 !== r && 8 !== r && 2 !== r) return 1 === r && k.isXMLDoc(t) || (e = k.propFix[e] || e, o = k.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e];
}, propHooks: { tabIndex: { get: function get(t) {
var e = k.find.attr(t, "tabindex");return e ? parseInt(e, 10) : fe.test(t.nodeName) || he.test(t.nodeName) && t.href ? 0 : -1;
} } }, propFix: { for: "htmlFor", class: "className" } }), v.optSelected || (k.propHooks.selected = { get: function get(t) {
var e = t.parentNode;return e && e.parentNode && e.parentNode.selectedIndex, null;
}, set: function set(t) {
var e = t.parentNode;e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
} }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
k.propFix[this.toLowerCase()] = this;
}), k.fn.extend({ addClass: function addClass(t) {
var e,
n,
i,
o,
r,
s,
a,
l = 0;if (w(t)) return this.each(function (e) {
k(this).addClass(t.call(this, e, ge(this)));
});if ((e = ve(t)).length) for (; n = this[l++];) {
if (o = ge(n), i = 1 === n.nodeType && " " + me(o) + " ") {
for (s = 0; r = e[s++];) {
i.indexOf(" " + r + " ") < 0 && (i += r + " ");
}o !== (a = me(i)) && n.setAttribute("class", a);
}
}return this;
}, removeClass: function removeClass(t) {
var e,
n,
i,
o,
r,
s,
a,
l = 0;if (w(t)) return this.each(function (e) {
k(this).removeClass(t.call(this, e, ge(this)));
});if (!arguments.length) return this.attr("class", "");if ((e = ve(t)).length) for (; n = this[l++];) {
if (o = ge(n), i = 1 === n.nodeType && " " + me(o) + " ") {
for (s = 0; r = e[s++];) {
for (; i.indexOf(" " + r + " ") > -1;) {
i = i.replace(" " + r + " ", " ");
}
}o !== (a = me(i)) && n.setAttribute("class", a);
}
}return this;
}, toggleClass: function toggleClass(t, e) {
var n = typeof t === "undefined" ? "undefined" : \_typeof(t),
i = "string" === n || Array.isArray(t);return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : w(t) ? this.each(function (n) {
k(this).toggleClass(t.call(this, n, ge(this), e), e);
}) : this.each(function () {
var e, o, r, s;if (i) for (o = 0, r = k(this), s = ve(t); e = s[o++];) {
r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
} else void 0 !== t && "boolean" !== n || ((e = ge(this)) && Q.set(this, "\_\_className\_\_", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Q.get(this, "\_\_className\_\_") || ""));
});
}, hasClass: function hasClass(t) {
var e,
n,
i = 0;for (e = " " + t + " "; n = this[i++];) {
if (1 === n.nodeType && (" " + me(ge(n)) + " ").indexOf(e) > -1) return !0;
}return !1;
} });var we = /\r/g;k.fn.extend({ val: function val(t) {
var e,
n,
i,
o = this[0];return arguments.length ? (i = w(t), this.each(function (n) {
var o;1 === this.nodeType && (null == (o = i ? t.call(this, n, k(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = k.map(o, function (t) {
return null == t ? "" : t + "";
})), (e = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o));
})) : o ? (e = k.valHooks[o.type] || k.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(we, "") : null == n ? "" : n : void 0;
} }), k.extend({ valHooks: { option: { get: function get(t) {
var e = k.find.attr(t, "value");return null != e ? e : me(k.text(t));
} }, select: { get: function get(t) {
var e,
n,
i,
o = t.options,
r = t.selectedIndex,
s = "select-one" === t.type,
a = s ? null : [],
l = s ? r + 1 : o.length;for (i = r < 0 ? l : s ? r : 0; i < l; i++) {
if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
if (e = k(n).val(), s) return e;a.push(e);
}
}return a;
}, set: function set(t, e) {
for (var n, i, o = t.options, r = k.makeArray(e), s = o.length; s--;) {
((i = o[s]).selected = k.inArray(k.valHooks.option.get(i), r) > -1) && (n = !0);
}return n || (t.selectedIndex = -1), r;
} } } }), k.each(["radio", "checkbox"], function () {
k.valHooks[this] = { set: function set(t, e) {
if (Array.isArray(e)) return t.checked = k.inArray(k(t).val(), e) > -1;
} }, v.checkOn || (k.valHooks[this].get = function (t) {
return null === t.getAttribute("value") ? "on" : t.value;
});
}), v.focusin = "onfocusin" in n;var ye = /^(?:focusinfocus|focusoutblur)$/,
be = function be(t) {
t.stopPropagation();
};k.extend(k.event, { trigger: function trigger(t, e, i, o) {
var r,
a,
l,
c,
u,
d,
p,
f,
m = [i || s],
g = h.call(t, "type") ? t.type : t,
v = h.call(t, "namespace") ? t.namespace.split(".") : [];if (a = f = l = i = i || s, 3 !== i.nodeType && 8 !== i.nodeType && !ye.test(g + k.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."), g = v.shift(), v.sort()), u = g.indexOf(":") < 0 && "on" + g, (t = t[k.expando] ? t : new k.Event(g, "object" == (typeof t === "undefined" ? "undefined" : \_typeof(t)) && t)).isTrigger = o ? 2 : 3, t.namespace = v.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.\*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : k.makeArray(e, [t]), p = k.event.special[g] || {}, o || !p.trigger || !1 !== p.trigger.apply(i, e))) {
if (!o && !p.noBubble && !y(i)) {
for (c = p.delegateType || g, ye.test(c + g) || (a = a.parentNode); a; a = a.parentNode) {
m.push(a), l = a;
}l === (i.ownerDocument || s) && m.push(l.defaultView || l.parentWindow || n);
}for (r = 0; (a = m[r++]) && !t.isPropagationStopped();) {
f = a, t.type = r > 1 ? c : p.bindType || g, (d = (Q.get(a, "events") || {})[t.type] && Q.get(a, "handle")) && d.apply(a, e), (d = u && a[u]) && d.apply && Z(a) && (t.result = d.apply(a, e), !1 === t.result && t.preventDefault());
}return t.type = g, o || t.isDefaultPrevented() || p.\_default && !1 !== p.\_default.apply(m.pop(), e) || !Z(i) || u && w(i[g]) && !y(i) && ((l = i[u]) && (i[u] = null), k.event.triggered = g, t.isPropagationStopped() && f.addEventListener(g, be), i[g](), t.isPropagationStopped() && f.removeEventListener(g, be), k.event.triggered = void 0, l && (i[u] = l)), t.result;
}
}, simulate: function simulate(t, e, n) {
var i = k.extend(new k.Event(), n, { type: t, isSimulated: !0 });k.event.trigger(i, null, e);
} }), k.fn.extend({ trigger: function trigger(t, e) {
return this.each(function () {
k.event.trigger(t, e, this);
});
}, triggerHandler: function triggerHandler(t, e) {
var n = this[0];if (n) return k.event.trigger(t, e, n, !0);
} }), v.focusin || k.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
var n = function n(t) {
k.event.simulate(e, t.target, k.event.fix(t));
};k.event.special[e] = { setup: function setup() {
var i = this.ownerDocument || this,
o = Q.access(i, e);o || i.addEventListener(t, n, !0), Q.access(i, e, (o || 0) + 1);
}, teardown: function teardown() {
var i = this.ownerDocument || this,
o = Q.access(i, e) - 1;o ? Q.access(i, e, o) : (i.removeEventListener(t, n, !0), Q.remove(i, e));
} };
});var xe = n.location,
Ce = Date.now(),
ke = /\?/;k.parseXML = function (t) {
var e;if (!t || "string" != typeof t) return null;try {
e = new n.DOMParser().parseFromString(t, "text/xml");
} catch (t) {
e = void 0;
}return e && !e.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + t), e;
};var Te = /\[\]$/,
Ee = /\r?\n/g,
\_e = /^(?:submit|button|image|reset|file)$/i,
Se = /^(?:input|select|textarea|keygen)/i;function $e(t, e, n, i) {
var o;if (Array.isArray(e)) k.each(e, function (e, o) {
n || Te.test(t) ? i(t, o) : $e(t + "[" + ("object" == (typeof o === "undefined" ? "undefined" : \_typeof(o)) && null != o ? e : "") + "]", o, n, i);
});else if (n || "object" !== C(e)) i(t, e);else for (o in e) {
$e(t + "[" + o + "]", e[o], n, i);
}
}k.param = function (t, e) {
var n,
i = [],
o = function o(t, e) {
var n = w(e) ? e() : e;i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
};if (Array.isArray(t) || t.jquery && !k.isPlainObject(t)) k.each(t, function () {
o(this.name, this.value);
});else for (n in t) {
$e(n, t[n], e, o);
}return i.join("&");
}, k.fn.extend({ serialize: function serialize() {
return k.param(this.serializeArray());
}, serializeArray: function serializeArray() {
return this.map(function () {
var t = k.prop(this, "elements");return t ? k.makeArray(t) : this;
}).filter(function () {
var t = this.type;return this.name && !k(this).is(":disabled") && Se.test(this.nodeName) && !\_e.test(t) && (this.checked || !pt.test(t));
}).map(function (t, e) {
var n = k(this).val();return null == n ? null : Array.isArray(n) ? k.map(n, function (t) {
return { name: e.name, value: t.replace(Ee, "\r\n") };
}) : { name: e.name, value: n.replace(Ee, "\r\n") };
}).get();
} });var Oe = /%20/g,
Ae = /#.\*$/,
Le = /([?&])\_=[^&]\*/,
ze = /^(.\*?):[ \t]\*([^\r\n]\*)$/gm,
De = /^(?:GET|HEAD)$/,
Ie = /^\/\//,
Pe = {},
Me = {},
je = "\*/".concat("\*"),
Ne = s.createElement("a");function Re(t) {
return function (e, n) {
"string" != typeof e && (n = e, e = "\*");var i,
o = 0,
r = e.toLowerCase().match(N) || [];if (w(n)) for (; i = r[o++];) {
"+" === i[0] ? (i = i.slice(1) || "\*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n);
}
};
}function He(t, e, n, i) {
var o = {},
r = t === Me;function s(a) {
var l;return o[a] = !0, k.each(t[a] || [], function (t, a) {
var c = a(e, n, i);return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1);
}), l;
}return s(e.dataTypes[0]) || !o["\*"] && s("\*");
}function Fe(t, e) {
var n,
i,
o = k.ajaxSettings.flatOptions || {};for (n in e) {
void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
}return i && k.extend(!0, t, i), t;
}Ne.href = xe.href, k.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: xe.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xe.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "\*": je, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "\* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(t, e) {
return e ? Fe(Fe(t, k.ajaxSettings), e) : Fe(k.ajaxSettings, t);
}, ajaxPrefilter: Re(Pe), ajaxTransport: Re(Me), ajax: function ajax(t, e) {
"object" == (typeof t === "undefined" ? "undefined" : \_typeof(t)) && (e = t, t = void 0), e = e || {};var i,
o,
r,
a,
l,
c,
u,
d,
p,
f,
h = k.ajaxSetup({}, e),
m = h.context || h,
g = h.context && (m.nodeType || m.jquery) ? k(m) : k.event,
v = k.Deferred(),
w = k.Callbacks("once memory"),
y = h.statusCode || {},
b = {},
x = {},
C = "canceled",
T = { readyState: 0, getResponseHeader: function getResponseHeader(t) {
var e;if (u) {
if (!a) for (a = {}; e = ze.exec(r);) {
a[e[1].toLowerCase()] = e[2];
}e = a[t.toLowerCase()];
}return null == e ? null : e;
}, getAllResponseHeaders: function getAllResponseHeaders() {
return u ? r : null;
}, setRequestHeader: function setRequestHeader(t, e) {
return null == u && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, b[t] = e), this;
}, overrideMimeType: function overrideMimeType(t) {
return null == u && (h.mimeType = t), this;
}, statusCode: function statusCode(t) {
var e;if (t) if (u) T.always(t[T.status]);else for (e in t) {
y[e] = [y[e], t[e]];
}return this;
}, abort: function abort(t) {
var e = t || C;return i && i.abort(e), E(0, e), this;
} };if (v.promise(T), h.url = ((t || h.url || xe.href) + "").replace(Ie, xe.protocol + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = (h.dataType || "\*").toLowerCase().match(N) || [""], null == h.crossDomain) {
c = s.createElement("a");try {
c.href = h.url, c.href = c.href, h.crossDomain = Ne.protocol + "//" + Ne.host != c.protocol + "//" + c.host;
} catch (t) {
h.crossDomain = !0;
}
}if (h.data && h.processData && "string" != typeof h.data && (h.data = k.param(h.data, h.traditional)), He(Pe, h, e, T), u) return T;for (p in (d = k.event && h.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !De.test(h.type), o = h.url.replace(Ae, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Oe, "+")) : (f = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (ke.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Le, "$1"), f = (ke.test(o) ? "&" : "?") + "\_=" + Ce++ + f), h.url = o + f), h.ifModified && (k.lastModified[o] && T.setRequestHeader("If-Modified-Since", k.lastModified[o]), k.etag[o] && T.setRequestHeader("If-None-Match", k.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || e.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("\*" !== h.dataTypes[0] ? ", " + je + "; q=0.01" : "") : h.accepts["\*"]), h.headers) {
T.setRequestHeader(p, h.headers[p]);
}if (h.beforeSend && (!1 === h.beforeSend.call(m, T, h) || u)) return T.abort();if (C = "abort", w.add(h.complete), T.done(h.success), T.fail(h.error), i = He(Me, h, e, T)) {
if (T.readyState = 1, d && g.trigger("ajaxSend", [T, h]), u) return T;h.async && h.timeout > 0 && (l = n.setTimeout(function () {
T.abort("timeout");
}, h.timeout));try {
u = !1, i.send(b, E);
} catch (t) {
if (u) throw t;E(-1, t);
}
} else E(-1, "No Transport");function E(t, e, s, a) {
var c,
p,
f,
b,
x,
C = e;u || (u = !0, l && n.clearTimeout(l), i = void 0, r = a || "", T.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, s && (b = function (t, e, n) {
for (var i, o, r, s, a = t.contents, l = t.dataTypes; "\*" === l[0];) {
l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
}if (i) for (o in a) {
if (a[o] && a[o].test(i)) {
l.unshift(o);break;
}
}if (l[0] in n) r = l[0];else {
for (o in n) {
if (!l[0] || t.converters[o + " " + l[0]]) {
r = o;break;
}s || (s = o);
}r = r || s;
}if (r) return r !== l[0] && l.unshift(r), n[r];
}(h, T, s)), b = function (t, e, n, i) {
var o,
r,
s,
a,
l,
c = {},
u = t.dataTypes.slice();if (u[1]) for (s in t.converters) {
c[s.toLowerCase()] = t.converters[s];
}for (r = u.shift(); r;) {
if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift()) if ("\*" === r) r = l;else if ("\*" !== l && l !== r) {
if (!(s = c[l + " " + r] || c["\* " + r])) for (o in c) {
if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["\* " + a[0]])) {
!0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));break;
}
}if (!0 !== s) if (s && t.throws) e = s(e);else try {
e = s(e);
} catch (t) {
return { state: "parsererror", error: s ? t : "No conversion from " + l + " to " + r };
}
}
}return { state: "success", data: e };
}(h, b, T, c), c ? (h.ifModified && ((x = T.getResponseHeader("Last-Modified")) && (k.lastModified[o] = x), (x = T.getResponseHeader("etag")) && (k.etag[o] = x)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, c = !(f = b.error))) : (f = C, !t && C || (C = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (e || C) + "", c ? v.resolveWith(m, [p, C, T]) : v.rejectWith(m, [T, C, f]), T.statusCode(y), y = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [T, h, c ? p : f]), w.fireWith(m, [T, C]), d && (g.trigger("ajaxComplete", [T, h]), --k.active || k.event.trigger("ajaxStop")));
}return T;
}, getJSON: function getJSON(t, e, n) {
return k.get(t, e, n, "json");
}, getScript: function getScript(t, e) {
return k.get(t, void 0, e, "script");
} }), k.each(["get", "post"], function (t, e) {
k[e] = function (t, n, i, o) {
return w(n) && (o = o || i, i = n, n = void 0), k.ajax(k.extend({ url: t, type: e, dataType: o, data: n, success: i }, k.isPlainObject(t) && t));
};
}), k.\_evalUrl = function (t) {
return k.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
}, k.fn.extend({ wrapAll: function wrapAll(t) {
var e;return this[0] && (w(t) && (t = t.call(this[0])), e = k(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
for (var t = this; t.firstElementChild;) {
t = t.firstElementChild;
}return t;
}).append(this)), this;
}, wrapInner: function wrapInner(t) {
return w(t) ? this.each(function (e) {
k(this).wrapInner(t.call(this, e));
}) : this.each(function () {
var e = k(this),
n = e.contents();n.length ? n.wrapAll(t) : e.append(t);
});
}, wrap: function wrap(t) {
var e = w(t);return this.each(function (n) {
k(this).wrapAll(e ? t.call(this, n) : t);
});
}, unwrap: function unwrap(t) {
return this.parent(t).not("body").each(function () {
k(this).replaceWith(this.childNodes);
}), this;
} }), k.expr.pseudos.hidden = function (t) {
return !k.expr.pseudos.visible(t);
}, k.expr.pseudos.visible = function (t) {
return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
}, k.ajaxSettings.xhr = function () {
try {
return new n.XMLHttpRequest();
} catch (t) {}
};var Be = { 0: 200, 1223: 204 },
qe = k.ajaxSettings.xhr();v.cors = !!qe && "withCredentials" in qe, v.ajax = qe = !!qe, k.ajaxTransport(function (t) {
var \_e3, i;if (v.cors || qe && !t.crossDomain) return { send: function send(o, r) {
var s,
a = t.xhr();if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) {
a[s] = t.xhrFields[s];
}for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) {
a.setRequestHeader(s, o[s]);
}\_e3 = function e(t) {
return function () {
\_e3 && (\_e3 = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Be[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
};
}, a.onload = \_e3(), i = a.onerror = a.ontimeout = \_e3("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
4 === a.readyState && n.setTimeout(function () {
\_e3 && i();
});
}, \_e3 = \_e3("abort");try {
a.send(t.hasContent && t.data || null);
} catch (t) {
if (\_e3) throw t;
}
}, abort: function abort() {
\_e3 && \_e3();
} };
}), k.ajaxPrefilter(function (t) {
t.crossDomain && (t.contents.script = !1);
}), k.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(t) {
return k.globalEval(t), t;
} } }), k.ajaxPrefilter("script", function (t) {
void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
}), k.ajaxTransport("script", function (t) {
var e, \_n;if (t.crossDomain) return { send: function send(i, o) {
e = k("