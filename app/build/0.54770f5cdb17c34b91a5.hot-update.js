webpackHotUpdatemojs_curve_editor(0,{42:function(t,e,o){(function(t){o(82),o(47),o(48),o(52),o(78),t.tag2("curve-editor",'<icons></icons> <div class="{this.CLASSES[\'curve-editor__left\']}"> <icon-button shape="code"></icon-button> <a href="https://github.com/legomushroom/mojs-curve-editor" target="_blank" class="{this.CLASSES[\'curve-editor__mojs-logo\']}"> <icon shape="mojs-logo"></icon> </a> </div> <div class="{this.CLASSES[\'curve-editor__right\']}"> <curve></curve> <resize-handle type="top"></resize-handle> <resize-handle type="right"></resize-handle> <resize-handle type="bottom"></resize-handle> </div>',"",'class="{this.CLASSES[\'curve-editor\']}" riot-style="{this.getStyle()}"',function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}var s=this,i=o(77),r=e(i),a=o(87),n=e(a),c=o(92),d=e(c);o(43),this.CLASSES=o(56);var l=t,u=l.store;u.subscribe(this.update.bind(this)),this.on("mount",function(){(0,n["default"])(new r["default"](s.root)).on("pan",function(t){s.x=t.deltaX,s.y=t.deltaY,s.update()}).on("panend",function(t){var e=t.deltaX,o=t.deltaY,i=u.getState().present.translate;s.x=s.y=0,u.dispatch({type:"EDITOR_TRANSLATE",data:{x:i.x+e,y:i.y+o}})})}),this.getStyle=function(){var t=u.getState().present,e=t.tempResize_top,o=t.tempResize_bottom;e+=t.resize_top,o+=t.resize_bottom,378-e<378&&(e=0),378+o<378&&(o=0),console.log(e,o),e=(0,d["default"])(e),o=(0,d["default"])(o);var i=t.translate,r="height: "+(378-e+o)+"px",a=(s.x||0)+i.x,n=(s.y||0)+i.y,c="transform: translate("+a+"px, "+(n+e)+"px)";return""+mojs.h.prefix.css+c+"; "+c+"; "+r}})}).call(e,o(2))}});