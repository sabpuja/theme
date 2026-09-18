"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(window.webpackJsonp = window.webpackJsonp || []).push([[4], { 138: function _(e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = function () {
      function e(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, a, n) {
        return a && e(t.prototype, a), n && e(t, n), t;
      };
    }(),
        o = s(a(0)),
        r = s(a(24)),
        l = s(a(44)),
        i = s(a(17)),
        u = s(a(65)),
        d = s(a(66)),
        c = a(18);function s(e) {
      return e && e.__esModule ? e : { default: e };
    }a(45);var f = function (e) {
      function t() {
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), function (e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
        }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
      }return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, r.default), n(t, [{ key: "loaded", value: function value() {
          this.selectors = { targetlink: "[data-targetlink]" }, (0, i.default)(), this.targetlink(), this.countdownPassword(), (0, l.default)(), (0, u.default)(), new d.default().init(), this.slideshowparallax(), this.Homeclickevent(), this.countdownBanner(), this.Accordion(), this.randomproducts(), this.videoplay(), this.blogFlexible();
        } }, { key: "targetlink", value: function value() {
          var e = this.selectors;(0, o.default)("body").on("click", e.targetlink, function (e) {
            e.preventDefault();var t = (0, c.attr)(e.currentTarget, "href"),
                a = (0, o.default)(t);a.length && (0, o.default)("html,body").animate({ scrollTop: a.offset().top - 90 }, 800);
          });
        } }, { key: "countdownPassword", value: function value() {
          (0, o.default)("[data-timer]").each(function (e, t) {
            var a = (0, o.default)(t),
                n = a.data("timervalue"),
                r = a.data("languages");a.countdown(n, function (e) {
              (0, o.default)(e.currentTarget).html(e.strftime("<span>%D" + r.days + "</span> <span>%H" + r.hours + "</span> <span>%M" + r.minutes + "</span> <span>%S" + r.seconds + "</span>"));
            });
          });
        } }, { key: "Homeclickevent", value: function value() {
          (0, o.default)(".thumb-click").on("click", function (e) {
            e.preventDefault();var t = (0, o.default)(e.currentTarget);t.closest(".product-item").find(".mainImage").attr("src", t.data("original-image")), (0, o.default)(".product-item .thumbs-slider .image").removeClass("active"), t.closest(".image").addClass("active");
          });
        } }, { key: "slideshowparallax", value: function value() {
          (0, o.default)(window).scroll(function (e) {
            var t = (0, o.default)(window).innerHeight(),
                a = (0, o.default)(e.currentTarget).scrollTop();if (a <= t) {
              var n = "translateY(" + a / 2 + "px)";(0, o.default)(".index-slideshow-parallax").css("transform", n);
            }a > 10 ? (0, o.default)(".icon-scroll").hide() : (0, o.default)(".icon-scroll").show();
          });
        } }, { key: "countdownBanner", value: function value() {
          (0, o.default)("[data-timer]").each(function (e, t) {
            var a = (0, o.default)(t).data("timervalue"),
                n = (0, o.default)(t).data("languages");(0, o.default)(t).countdown(a, function (e) {
              (0, o.default)(e.currentTarget).html(e.strftime("<div class='timer'><div class='day'><span>%D" + n.day + "</span></div> <div class='hour'><span>%H" + n.hours + "</span></div><div class='min'><span>%M" + n.minutes + "</span></div><div class='sec'><span><span>%S" + n.seconds + "</span></div></div>"));
            });
          });
        } }, { key: "Accordion", value: function value() {
          (0, o.default)(".blog-item").on("mouseover", function (e) {
            var t = (0, o.default)(e.currentTarget);(0, o.default)(".blog-item").removeClass("active"), (0, o.default)(t).addClass("active");
          });
        } }, { key: "randomproducts", value: function value() {
          (0, o.default)("[data-product-grid-random]").each(function (e, t) {
            for (var a = (0, o.default)(t), n = a.children(); n.length;) {
              a.append(n.splice(Math.floor(Math.random() * n.length), 1)[0]), a.parent().find("[data-product-grid-random-load]").addClass("hide-load");
            }
          });
        } }, { key: "videoplay", value: function value() {
          return (0, o.default)("body").on("click", "[data-videoplay]", function (e) {
            e.preventDefault();var t = "[" + (0, o.default)(e.currentTarget).data("videoplayid") + "]",
                a = (0, o.default)(t);a.foundation("open"), a.parent().css("z-index", 9999);
          }), this;
        } }, { key: "blogFlexible", value: function value() {
          return (0, o.default)("body").on("click", "[data-flexible-article]", function (e) {
            e.preventDefault();var t = (0, o.default)(e.currentTarget).data("flexible-article");(0, o.default)("[data-flexible-article-content]").hide("500"), (0, o.default)('[data-flexible-article-content="' + t + '"]').show("500");
          }), this;
        } }]), t;
    }();t.default = f;
  } }]);