webpackHotUpdatemojs_curve_editor(0,{78:function(t,e,s){(function(t){t.tag2("curve",'<div riot-style="{this.getSvgStyle()}"> <svg width="358" height="358" viewbox="0 0 100 100" class="{this.CLASSES[\'curve__svg\']}"> </svg> </div>',"",'class="{this.CLASSES[\'curve\']}" riot-style="{this.getStyle()}"',function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}var i=s(86),r=e(i);this.CLASSES=s(81),s(79),r["default"].subscribe(this.update.bind(this)),this.getSvgStyle=function(){var t=r["default"].getState().present,e=t.tempResize_top;358-e<358&&(e=0),e=mod(e);var s="transform: translate(0px, "+-e+"px)";return""+mojs.h.prefix.css+s+"; "+s+";"},this.getStyle=function(){var t=r["default"].getState().present,e=t.tempResize_top;358-e<358&&(e=0),e=mod(e);var s="background-position: 0 "+(-e-1)+"px";return s+";"}})}).call(e,s(2))}});