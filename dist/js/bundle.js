!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i),k=h.getAttribute("xlink:href")||h.getAttribute("href");if(!k&&g.attributeName&&(k=h.getAttribute(g.attributeName)),j&&k){if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split("#"),q=l.shift(),r=l.join("#");if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open("GET",q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s)}else a(i,j,document.getElementById(r))}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName("use"),p=0;f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});
// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),(a=n.fancybox.getInstance())&&a.$trigger&&a.$trigger.is(o)||(e.selector?s=n(e.selector):(i=o.attr("data-fancybox")||"",i?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),a=n.fancybox.open(s,e,r),a.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(void 0!==n.style[t])return o[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,i;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},i=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),i)},b=function(t,e,o){var i=this;i.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(i.opts=h(i.opts,e)),n.fancybox.isMobile&&(i.opts=h(i.opts,i.opts.mobile)),i.id=i.opts.id||++c,i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=!0,i.group=[],i.slides={},i.addContent(t),i.group.length&&i.init()};n.extend(b.prototype,{init:function(){var o,i,a=this,s=a.group[a.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&!1!==r.hideScrollbar&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),i="",n.each(r.buttons,function(t,e){i+=r.btnTpl[e]||""}),o=n(a.translate(a,r.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+a.id).addClass(r.baseClass).data("FancyBox",a).appendTo(r.parentEl),a.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){a.$refs[t]=o.find(".fancybox-"+t)}),a.trigger("onInit"),a.activate(),a.jumpTo(a.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return void 0===n[e]?t:n[e]})},addContent:function(t){var e,o=this,i=n.makeArray(t);n.each(i,function(t,e){var i,a,s,r,c,l={},d={};n.isPlainObject(e)?(l=e,d=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),d=i.data()||{},d=n.extend(!0,{},d,d.options),d.$orig=i,l.src=o.opts.src||d.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=e)):l={type:"html",src:e+""},l.opts=n.extend(!0,{},o.opts,d),n.isArray(d.buttons)&&(l.opts.buttons=d.buttons),n.fancybox.isMobile&&l.opts.mobile&&(l.opts=h(l.opts,l.opts.mobile)),a=l.type||l.opts.type,r=l.src||"",!a&&r&&((s=r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(a="video",l.opts.video.format||(l.opts.video.format="video/"+("ogv"===s[1]?"ogg":s[1]))):r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?(a="iframe",l=n.extend(!0,l,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===r.charAt(0)&&(a="inline")),a?l.type=a:o.trigger("objectNeedsType",l),l.contentType||(l.contentType=n.inArray(l.type,["html","inline","ajax"])>-1?"html":l.type),l.index=o.group.length,"auto"==l.opts.smallBtn&&(l.opts.smallBtn=n.inArray(l.type,["html","inline","ajax"])>-1),"auto"===l.opts.toolbar&&(l.opts.toolbar=!l.opts.smallBtn),l.$thumb=l.opts.$thumb||null,l.opts.$trigger&&l.index===o.opts.index&&(l.$thumb=l.opts.$trigger.find("img:first"),l.$thumb.length&&(l.opts.$orig=l.opts.$trigger)),l.$thumb&&l.$thumb.length||!l.opts.$orig||(l.$thumb=l.opts.$orig.find("img:first")),l.$thumb&&!l.$thumb.length&&(l.$thumb=null),l.thumb=l.opts.thumb||(l.$thumb?l.$thumb[0].src:null),"function"===n.type(l.opts.caption)&&(l.opts.caption=l.opts.caption.apply(e,[o,l])),"function"===n.type(o.opts.caption)&&(l.opts.caption=o.opts.caption.apply(e,[o,l])),l.opts.caption instanceof n||(l.opts.caption=void 0===l.opts.caption?"":l.opts.caption+""),"ajax"===l.type&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),o.group.push(l)}),Object.keys(o.slides).length&&(o.updateControls(),(e=o.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,i=o.current,a=t.keyCode||t.which;if(9==a)return void(i.opts.trapFocus&&e.focus(t));if(!(!i.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input,textarea,video,audio,select")))return 8===a||27===a?(t.preventDefault(),void e.close(t)):37===a||38===a?(t.preventDefault(),void e.previous()):39===a||40===a?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,a)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){++e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var o,i,a,s,r,c,l,d,u,f=this,h=f.group.length;if(!(f.isDragging||f.isClosing||f.isAnimating&&f.firstRun)){if(t=parseInt(t,10),!(a=f.current?f.current.opts.loop:f.opts.loop)&&(t<0||t>=h))return!1;if(o=f.firstRun=!Object.keys(f.slides).length,r=f.current,f.prevIndex=f.currIndex,f.prevPos=f.currPos,s=f.createSlide(t),h>1&&((a||s.index<h-1)&&f.createSlide(t+1),(a||s.index>0)&&f.createSlide(t-1)),f.current=s,f.currIndex=s.index,f.currPos=s.pos,f.trigger("beforeShow",o),f.updateControls(),s.forcedDuration=void 0,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[o?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=f.isMoved(s),s.$slide.addClass("fancybox-slide--current"),o)return s.opts.animationEffect&&e&&f.$refs.container.css("transition-duration",e+"ms"),f.$refs.container.addClass("fancybox-is-open").trigger("focus"),f.loadSlide(s),void f.preload("image");c=n.fancybox.getTranslate(r.$slide),l=n.fancybox.getTranslate(f.$refs.stage),n.each(f.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),r.pos!==s.pos&&(r.isComplete=!1),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(u=c.left-(r.pos*c.width+r.pos*r.opts.gutter),n.each(f.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=o.pos*c.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:i-l.left+u}),o.pos!==s.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>s.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-s.pos)*c.width+(o.pos-s.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===f.currPos&&f.complete()})})):e&&s.opts.transitionEffect&&(d="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,r.$slide.addClass("fancybox-slide--"+(r.pos>s.pos?"next":"previous")),n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),s.isLoaded?f.revealContent(s):f.loadSlide(s),f.preload("image")}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,o){var i,a,s,r,c,l=this,d=l.current,u=d.$content,f=n.fancybox.getTranslate(d.$slide).width,p=n.fancybox.getTranslate(d.$slide).height,h=d.width,g=d.height;l.isAnimating||l.isMoved()||!u||"image"!=d.type||!d.isLoaded||d.hasError||(l.isAnimating=!0,n.fancybox.stop(u),t=void 0===t?.5*f:t,e=void 0===e?.5*p:e,i=n.fancybox.getTranslate(u),i.top-=n.fancybox.getTranslate(d.$slide).top,i.left-=n.fancybox.getTranslate(d.$slide).left,r=h/i.width,c=g/i.height,a=.5*f-.5*h,s=.5*p-.5*g,h>f&&(a=i.left*r-(t*r-t),a>0&&(a=0),a<f-h&&(a=f-h)),g>p&&(s=i.top*c-(e*c-e),s>0&&(s=0),s<p-g&&(s=p-g)),l.updateCursor(h,g),n.fancybox.animate(u,{top:s,left:a,scaleX:r,scaleY:c},o||366,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;o.isAnimating||o.isMoved()||!a||"image"!=i.type||!i.isLoaded||i.hasError||(o.isAnimating=!0,n.fancybox.stop(a),e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||366,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),i=Math.min(1,e/l,o/d),l*=i,d*=i,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/a?d=l/a:l>d*a&&(l=d*a)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,o=e.current,i=o.$slide;!e.isClosing&&o&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},void 0===t?0:t,function(){i.css({transform:"",opacity:""}),o.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,i=t||this.current;return!!i&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(i.$slide),!i.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,i,a=this,s=a.current,r=a.$refs.container;s&&!a.isClosing&&a.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=a.canPan(t,e),i=!!o||a.isZoomable(),r.toggleClass("fancybox-is-zoomable",i),n("[data-fancybox-zoom]").prop("disabled",!i),o?r.addClass("fancybox-can-pan"):i&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||a.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if((t=e.getFitPos(n))&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var o=this,i=!1,a=o.current,s=a.$content;return void 0!==t&&void 0!==e?i=t<a.width&&e<a.height:s&&(i=n.fancybox.getTranslate(s),i=i.width<a.width&&i.height<a.height),i},canPan:function(t,e){var o=this,i=o.current,a=null,s=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(s=o.getFitPos(i),void 0!==t&&void 0!==e?a={width:t,height:e}:i.isComplete&&(a=n.fancybox.getTranslate(i.$content)),a&&s&&(s=Math.abs(a.width-s.width)>1.5||Math.abs(a.height-s.height)>1.5)),s},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,!1===a.trigger("beforeLoad",t))return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(t){var o,i=this;setTimeout(function(){var e=t.$image;i.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||i.showLoading(t)},50),i.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){i.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),i.setBigImage(t)},checkSrcset:function(e){var n,o,i,a,s=e.opts.srcset||e.opts.image.srcset;if(s){i=t.devicePixelRatio||1,a=t.innerWidth*i,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);if(0===n)return e.url=t;o&&(e.value=o,e.postfix=t[t.length-1])}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=a||"x"===c.postfix&&c.value>=i){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,i=e.createElement("img"),a=n(i);t.$image=a.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),a.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i.complete||"complete"==i.readyState)&&a.naturalWidth&&a.naturalHeight?a.trigger("load"):i.error&&a.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,o=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(a),a.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(o.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),o.afterLoad(t)}),a.on("refresh.fb",function(){var n,o,s=t.$content,r=i.css.width,c=i.css.height;if(1===e[0].isReady){try{n=e.contents(),o=n.find("body")}catch(t){}o&&o.length&&o.children().length&&(a.css("overflow","visible"),s.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===r&&(r=Math.ceil(Math.max(o[0].clientWidth,o.outerWidth(!0)))),s.css("width",r||"").css("max-width",""),void 0===c&&(c=Math.ceil(Math.max(o[0].clientHeight,o.outerHeight(!0)))),s.css("height",c||""),a.css("overflow","auto")),s.removeClass("fancybox-is-hidden")}})):o.afterLoad(t),e.attr("src",t.src),a.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;(t=t||e.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,i=o.opts.caption,a=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",a),a&&i&&i.length&&(o.pos!==n.currPos?(e=s.clone().appendTo(s.parent()),e.children().eq(0).empty().html(i),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,i,a=this,s=t||a.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],i=s.$slide.css("padding-bottom"),parseFloat(i)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=i),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,o,i,a,s=this,r=t.$slide,c=!1,l=!1,d=s.isMoved(t),u=t.isRevealed;return t.isRevealed=!0,e=t.opts[s.firstRun?"animationEffect":"transitionEffect"],i=t.opts[s.firstRun?"animationDuration":"transitionDuration"],i=parseInt(void 0===t.forcedDuration?i:t.forcedDuration,10),!d&&t.pos===s.currPos&&i||(e=!1),"zoom"===e&&(t.pos===s.currPos&&i&&"image"===t.type&&!t.hasError&&(l=s.getThumbPos(t))?c=s.getFitPos(t):e="fade"),"zoom"===e?(s.isAnimating=!0,c.scaleX=c.width/l.width,c.scaleY=c.height/l.height,a=t.opts.zoomOpacity,"auto"==a&&(a=Math.abs(t.width/t.height-l.width/l.height)>.1),a&&(l.opacity=.1,c.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),l),p(t.$content),void n.fancybox.animate(t.$content,c,i,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(t),e?(n.fancybox.stop(r),o="fancybox-slide--"+(t.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,r.addClass(o).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(r),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(r,"fancybox-slide--current",i,function(){r.removeClass(o).css({transform:"",opacity:""}),t.pos===s.currPos&&s.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),u||!d||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===s.currPos&&s.complete())))},getThumbPos:function(t){var e,o,i,a,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),i=parseFloat(c.css("border-right-width")||0),a=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-i-s,height:e.height-o-a,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,i={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=i),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var i,a,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(i=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),i=i.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),i.length?(a=i.index(e.activeElement),t&&t.shiftKey?(a<0||0==a)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(a<0||a==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,!1===u.trigger("beforeClose",t)?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),i&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",i+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||a&&i&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,
"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),p(a),n.fancybox.animate(a,l,i,h),!0):(o&&i?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,i,h):!0===t?setTimeout(h,i):h(),!0)))},cleanUp:function(e){var o,i,a,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(i=t.scrollX,a=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(i))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;if(s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),!1===o)return o;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i)},updateControls:function(){var t=this,o=t.current,i=o.index,a=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),r&&r.length?(t.$caption=s,s.children().eq(0).html(r)):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),a.find("[data-fancybox-count]").html(t.group.length),a.find("[data-fancybox-index]").html(i+1),a.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&i<=0),a.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&i>=t.group.length-1),"image"===o.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.7",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",o={};if(t&&e)return void 0===e.left&&void 0===e.top||(n=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),void 0!==e.scaleX&&void 0!==e.scaleY?n+=" scale("+e.scaleX+", "+e.scaleY+")":void 0!==e.scaleX&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),void 0!==e.opacity&&(o.opacity=e.opacity),void 0!==e.width&&(o.width=e.width),void 0!==e.height&&(o.height=e.height),t.css(o)},animate:function(t,e,o,i,a){var s,r=this;n.isFunction(o)&&(i=o,o=null),r.stop(t),s=r.getTranslate(t),t.on(f,function(c){(!c||!c.originalEvent||t.is(c.originalEvent.target)&&"z-index"!=c.originalEvent.propertyName)&&(r.stop(t),n.isNumeric(o)&&t.css("transition-duration",""),n.isPlainObject(e)?void 0!==e.scaleX&&void 0!==e.scaleY&&r.setTranslate(t,{top:e.top,left:e.left,width:s.width*e.scaleX,height:s.height*e.scaleY,scaleX:1,scaleY:1}):!0!==a&&t.removeClass(e),n.isFunction(i)&&i(c))}),n.isNumeric(o)&&t.css("transition-duration",o+"ms"),n.isPlainObject(e)?(void 0!==e.scaleX&&void 0!==e.scaleY&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=null;r.on("mousedown mouseup focus blur",".fancybox-button",function(e){switch(e.type){case"mousedown":t=n(this);break;case"mouseup":t=null;break;case"focusin":n(".fancybox-button").removeClass("fancybox-focus"),n(this).is(t)||n(this).is("[disabled]")||n(this).addClass("fancybox-focus");break;case"focusout":n(".fancybox-button").removeClass("fancybox-focus")}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},e,a.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;if(this[t].loaded)return void setTimeout(function(){n.done(t)});this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(e){var n,o,i;"youtube"===e&&delete window.onYouTubeIframeAPIReady,(n=t.fancybox.getInstance())&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?i=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(i=new Vimeo.Player(o),i.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(i(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();i.realPoints=i.startPoints=a(o),i.startPoints.length&&(u.touch&&o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=p,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=d.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(f[0].clientWidth),i.canvasHeight=Math.round(f[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=n.fancybox.getTranslate(f),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),((i.opts||i.canPan)&&(c.is(i.$stage)||i.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.parents(".fancybox-caption").length))&&(i.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&i.isScrollable||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(!0!==c)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||!1===s.opts.vertical||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,i;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),i=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-i.top,s.sliderStartPos.left=o.left-i.left),n.fancybox.setTranslate(e.$slide,{top:o.top-i.top,left:o.left-i.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;if(s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5))return void(t.startPoints=t.newPoints);t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&i(t.requestId),t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&i(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;if(o.endPoints=a(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap)return o.onTap(t);o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&a>1&&(o.dMs>130&&s>10||s>50);o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,250)):r&&o.distanceX>0?i=o.instance.previous(300):r&&o.distanceX<0&&(i=o.instance.next(300)),!1!==i||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(!1===i.opts.momentum||i.dMs>350?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+500*i.velocityX,e=i.contentLastPos.top+500*i.velocityY),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,366))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,i=o.current;i&&(!0===t||i.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==i.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},i.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},i.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.isAnimating=!1,n.update(!0,!0,0),n.isComplete||n.complete()),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var i;if(!n)return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();e&&e.group[e.currIndex].opts.fullScreen?(i=e.$refs.container,i.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var o=function(t){this.init(t)};e.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var i=0,a=n.length;i<a&&(n[i].thumb&&o++,!(o>1));i++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,i=o.instance,a=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),o.$grid.on("click","a",function(){i.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(i.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+i.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,i=o.$list,a=o.$grid;o.instance.current&&(e=i.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.scrollLeft()||n.left>a.scrollLeft()+(a.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new o(e),n.isActive&&!0===n.opts.autoStart&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},
tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:e,index:o<1?1:o,gallery:i}}function i(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,""!==(n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&n)}n.escapeSelector||(n.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),n(function(){!1!==n.fancybox.defaults.hash&&(n(e).on({"onInit.fb":function(t,e){var n,i;!1!==e.group[e.currIndex].opts.hash&&(n=o(),(i=a(e))&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&!1!==i.opts.hash&&(r=a(o))&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300)))},"beforeClose.fb":function(n,o,i){i&&!1!==i.opts.hash&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var i=n(o).data("FancyBox");if(i&&i.currentHash)return e=i,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&i(t)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||!1===o.opts.wheel||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/*
    A simple jQuery modal (http://github.com/kylefox/jquery-modal)
    Version 0.9.1
*/
!function(o){"object"==typeof module&&"object"==typeof module.exports?o(require("jquery"),window,document):o(jQuery,window,document)}(function(o,t,i,e){var s=[],l=function(){return s.length?s[s.length-1]:null},n=function(){var o,t=!1;for(o=s.length-1;o>=0;o--)s[o].$blocker&&(s[o].$blocker.toggleClass("current",!t).toggleClass("behind",t),t=!0)};o.modal=function(t,i){var e,n;if(this.$body=o("body"),this.options=o.extend({},o.modal.defaults,i),this.options.doFade=!isNaN(parseInt(this.options.fadeDuration,10)),this.$blocker=null,this.options.closeExisting)for(;o.modal.isActive();)o.modal.close();if(s.push(this),t.is("a"))if(n=t.attr("href"),this.anchor=t,/^#/.test(n)){if(this.$elm=o(n),1!==this.$elm.length)return null;this.$body.append(this.$elm),this.open()}else this.$elm=o("<div>"),this.$body.append(this.$elm),e=function(o,t){t.elm.remove()},this.showSpinner(),t.trigger(o.modal.AJAX_SEND),o.get(n).done(function(i){if(o.modal.isActive()){t.trigger(o.modal.AJAX_SUCCESS);var s=l();s.$elm.empty().append(i).on(o.modal.CLOSE,e),s.hideSpinner(),s.open(),t.trigger(o.modal.AJAX_COMPLETE)}}).fail(function(){t.trigger(o.modal.AJAX_FAIL);var i=l();i.hideSpinner(),s.pop(),t.trigger(o.modal.AJAX_COMPLETE)});else this.$elm=t,this.anchor=t,this.$body.append(this.$elm),this.open()},o.modal.prototype={constructor:o.modal,open:function(){var t=this;this.block(),this.anchor.blur(),this.options.doFade?setTimeout(function(){t.show()},this.options.fadeDuration*this.options.fadeDelay):this.show(),o(i).off("keydown.modal").on("keydown.modal",function(o){var t=l();27===o.which&&t.options.escapeClose&&t.close()}),this.options.clickClose&&this.$blocker.click(function(t){t.target===this&&o.modal.close()})},close:function(){s.pop(),this.unblock(),this.hide(),o.modal.isActive()||o(i).off("keydown.modal")},block:function(){this.$elm.trigger(o.modal.BEFORE_BLOCK,[this._ctx()]),this.$body.css("overflow","hidden"),this.$blocker=o('<div class="'+this.options.blockerClass+' blocker current"></div>').appendTo(this.$body),n(),this.options.doFade&&this.$blocker.css("opacity",0).animate({opacity:1},this.options.fadeDuration),this.$elm.trigger(o.modal.BLOCK,[this._ctx()])},unblock:function(t){!t&&this.options.doFade?this.$blocker.fadeOut(this.options.fadeDuration,this.unblock.bind(this,!0)):(this.$blocker.children().appendTo(this.$body),this.$blocker.remove(),this.$blocker=null,n(),o.modal.isActive()||this.$body.css("overflow",""))},show:function(){this.$elm.trigger(o.modal.BEFORE_OPEN,[this._ctx()]),this.options.showClose&&(this.closeButton=o('<a href="#close-modal" rel="modal:close" class="close-modal '+this.options.closeClass+'">'+this.options.closeText+"</a>"),this.$elm.append(this.closeButton)),this.$elm.addClass(this.options.modalClass).appendTo(this.$blocker),this.options.doFade?this.$elm.css({opacity:0,display:"inline-block"}).animate({opacity:1},this.options.fadeDuration):this.$elm.css("display","inline-block"),this.$elm.trigger(o.modal.OPEN,[this._ctx()])},hide:function(){this.$elm.trigger(o.modal.BEFORE_CLOSE,[this._ctx()]),this.closeButton&&this.closeButton.remove();var t=this;this.options.doFade?this.$elm.fadeOut(this.options.fadeDuration,function(){t.$elm.trigger(o.modal.AFTER_CLOSE,[t._ctx()])}):this.$elm.hide(0,function(){t.$elm.trigger(o.modal.AFTER_CLOSE,[t._ctx()])}),this.$elm.trigger(o.modal.CLOSE,[this._ctx()])},showSpinner:function(){this.options.showSpinner&&(this.spinner=this.spinner||o('<div class="'+this.options.modalClass+'-spinner"></div>').append(this.options.spinnerHtml),this.$body.append(this.spinner),this.spinner.show())},hideSpinner:function(){this.spinner&&this.spinner.remove()},_ctx:function(){return{elm:this.$elm,$elm:this.$elm,$blocker:this.$blocker,options:this.options}}},o.modal.close=function(t){if(o.modal.isActive()){t&&t.preventDefault();var i=l();return i.close(),i.$elm}},o.modal.isActive=function(){return s.length>0},o.modal.getCurrent=l,o.modal.defaults={closeExisting:!0,escapeClose:!0,clickClose:!0,closeText:"Close",closeClass:"",modalClass:"modal",blockerClass:"jquery-modal",spinnerHtml:'<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div>',showSpinner:!0,showClose:!0,fadeDuration:null,fadeDelay:1},o.modal.BEFORE_BLOCK="modal:before-block",o.modal.BLOCK="modal:block",o.modal.BEFORE_OPEN="modal:before-open",o.modal.OPEN="modal:open",o.modal.BEFORE_CLOSE="modal:before-close",o.modal.CLOSE="modal:close",o.modal.AFTER_CLOSE="modal:after-close",o.modal.AJAX_SEND="modal:ajax:send",o.modal.AJAX_SUCCESS="modal:ajax:success",o.modal.AJAX_FAIL="modal:ajax:fail",o.modal.AJAX_COMPLETE="modal:ajax:complete",o.fn.modal=function(t){return 1===this.length&&new o.modal(this,t),this},o(i).on("click.modal",'a[rel~="modal:close"]',o.modal.close),o(i).on("click.modal",'a[rel~="modal:open"]',function(t){t.preventDefault(),o(this).modal()})});
/*!
* Parsley.js
* Version 2.8.1 - built Sat, Feb 3rd 2018, 2:27 pm
* http://parsleyjs.org
* Guillaume Potier - <guillaume@wisembly.com>
* Marc-Andre Lafortune - <petroselinum@marc-andre.ca>
* MIT Licensed
*/
function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}var _slice=Array.prototype.slice,_slicedToArray=function(){function e(e,t){var i=[],n=!0,r=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(n=(a=o.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(l){r=!0,s=l}finally{try{!n&&o["return"]&&o["return"]()}finally{if(r)throw s}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):e.parsley=t(e.jQuery)}(this,function(e){"use strict";function t(e,t){return e.parsleyAdaptedCallback||(e.parsleyAdaptedCallback=function(){var i=Array.prototype.slice.call(arguments,0);i.unshift(this),e.apply(t||M,i)}),e.parsleyAdaptedCallback}function i(e){return 0===e.lastIndexOf(D,0)?e.substr(D.length):e}/**
   * inputevent - Alleviate browser bugs for input events
   * https://github.com/marcandre/inputevent
   * @version v0.0.3 - (built Thu, Apr 14th 2016, 5:58 pm)
   * @author Marc-Andre Lafortune <github@marc-andre.ca>
   * @license MIT
   */
function n(){var t=this,i=window||global;_extends(this,{isNativeEvent:function(e){return e.originalEvent&&e.originalEvent.isTrusted!==!1},fakeInputEvent:function(i){t.isNativeEvent(i)&&e(i.target).trigger("input")},misbehaves:function(i){t.isNativeEvent(i)&&(t.behavesOk(i),e(document).on("change.inputevent",i.data.selector,t.fakeInputEvent),t.fakeInputEvent(i))},behavesOk:function(i){t.isNativeEvent(i)&&e(document).off("input.inputevent",i.data.selector,t.behavesOk).off("change.inputevent",i.data.selector,t.misbehaves)},install:function(){if(!i.inputEventPatched){i.inputEventPatched="0.0.3";for(var n=["select",'input[type="checkbox"]','input[type="radio"]','input[type="file"]'],r=0;r<n.length;r++){var s=n[r];e(document).on("input.inputevent",s,{selector:s},t.behavesOk).on("change.inputevent",s,{selector:s},t.misbehaves)}}},uninstall:function(){delete i.inputEventPatched,e(document).off(".inputevent")}})}var r=1,s={},a={attr:function(e,t,i){var n,r,s,a=new RegExp("^"+t,"i");if("undefined"==typeof i)i={};else for(n in i)i.hasOwnProperty(n)&&delete i[n];if(!e)return i;for(s=e.attributes,n=s.length;n--;)r=s[n],r&&r.specified&&a.test(r.name)&&(i[this.camelize(r.name.slice(t.length))]=this.deserializeValue(r.value));return i},checkAttr:function(e,t,i){return e.hasAttribute(t+i)},setAttr:function(e,t,i,n){e.setAttribute(this.dasherize(t+i),String(n))},getType:function(e){return e.getAttribute("type")||"text"},generateID:function(){return""+r++},deserializeValue:function(e){var t;try{return e?"true"==e||"false"!=e&&("null"==e?null:isNaN(t=Number(e))?/^[\[\{]/.test(e)?JSON.parse(e):e:t):e}catch(i){return e}},camelize:function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},dasherize:function(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()},warn:function(){var e;window.console&&"function"==typeof window.console.warn&&(e=window.console).warn.apply(e,arguments)},warnOnce:function(e){s[e]||(s[e]=!0,this.warn.apply(this,arguments))},_resetWarnings:function(){s={}},trimString:function(e){return e.replace(/^\s+|\s+$/g,"")},parse:{date:function S(e){var t=e.match(/^(\d{4,})-(\d\d)-(\d\d)$/);if(!t)return null;var i=t.map(function(e){return parseInt(e,10)}),n=_slicedToArray(i,4),r=(n[0],n[1]),s=n[2],a=n[3],S=new Date(r,s-1,a);return S.getFullYear()!==r||S.getMonth()+1!==s||S.getDate()!==a?null:S},string:function(e){return e},integer:function(e){return isNaN(e)?null:parseInt(e,10)},number:function(e){if(isNaN(e))throw null;return parseFloat(e)},"boolean":function(e){return!/^\s*false\s*$/i.test(e)},object:function(e){return a.deserializeValue(e)},regexp:function(e){var t="";return/^\/.*\/(?:[gimy]*)$/.test(e)?(t=e.replace(/.*\/([gimy]*)$/,"$1"),e=e.replace(new RegExp("^/(.*?)/"+t+"$"),"$1")):e="^"+e+"$",new RegExp(e,t)}},parseRequirement:function(e,t){var i=this.parse[e||"string"];if(!i)throw'Unknown requirement specification: "'+e+'"';var n=i(t);if(null===n)throw"Requirement is not a "+e+': "'+t+'"';return n},namespaceEvents:function(t,i){return t=this.trimString(t||"").split(/\s+/),t[0]?e.map(t,function(e){return e+"."+i}).join(" "):""},difference:function(t,i){var n=[];return e.each(t,function(e,t){i.indexOf(t)==-1&&n.push(t)}),n},all:function(t){return e.when.apply(e,_toConsumableArray(t).concat([42,42]))},objectCreate:Object.create||function(){var e=function(){};return function(t){if(arguments.length>1)throw Error("Second argument not supported");if("object"!=typeof t)throw TypeError("Argument must be an object");e.prototype=t;var i=new e;return e.prototype=null,i}}(),_SubmitSelector:'input[type="submit"], button:submit'},o={namespace:"data-parsley-",inputs:"input, textarea, select",excluded:"input[type=button], input[type=submit], input[type=reset], input[type=hidden]",priorityEnabled:!0,multiple:null,group:null,uiEnabled:!0,validationThreshold:3,focus:"first",trigger:!1,triggerAfterFailure:"input",errorClass:"parsley-error",successClass:"parsley-success",classHandler:function(e){},errorsContainer:function(e){},errorsWrapper:'<ul class="parsley-errors-list"></ul>',errorTemplate:"<li></li>"},l=function(){this.__id__=a.generateID()};l.prototype={asyncSupport:!0,_pipeAccordingToValidationResult:function(){var t=this,i=function(){var i=e.Deferred();return!0!==t.validationResult&&i.reject(),i.resolve().promise()};return[i,i]},actualizeOptions:function(){return a.attr(this.element,this.options.namespace,this.domOptions),this.parent&&this.parent.actualizeOptions&&this.parent.actualizeOptions(),this},_resetOptions:function(e){this.domOptions=a.objectCreate(this.parent.options),this.options=a.objectCreate(this.domOptions);for(var t in e)e.hasOwnProperty(t)&&(this.options[t]=e[t]);this.actualizeOptions()},_listeners:null,on:function(e,t){this._listeners=this._listeners||{};var i=this._listeners[e]=this._listeners[e]||[];return i.push(t),this},subscribe:function(t,i){e.listenTo(this,t.toLowerCase(),i)},off:function(e,t){var i=this._listeners&&this._listeners[e];if(i)if(t)for(var n=i.length;n--;)i[n]===t&&i.splice(n,1);else delete this._listeners[e];return this},unsubscribe:function(t,i){e.unsubscribeTo(this,t.toLowerCase())},trigger:function(e,t,i){t=t||this;var n,r=this._listeners&&this._listeners[e];if(r)for(var s=r.length;s--;)if(n=r[s].call(t,t,i),n===!1)return n;return!this.parent||this.parent.trigger(e,t,i)},asyncIsValid:function(e,t){return a.warnOnce("asyncIsValid is deprecated; please use whenValid instead"),this.whenValid({group:e,force:t})},_findRelated:function(){return this.options.multiple?e(this.parent.element.querySelectorAll("["+this.options.namespace+'multiple="'+this.options.multiple+'"]')):this.$element}};var u=function(e,t){var i=e.match(/^\s*\[(.*)\]\s*$/);if(!i)throw'Requirement is not an array: "'+e+'"';var n=i[1].split(",").map(a.trimString);if(n.length!==t)throw"Requirement has "+n.length+" values when "+t+" are needed";return n},d=function(e,t,i){var n=null,r={};for(var s in e)if(s){var o=i(s);"string"==typeof o&&(o=a.parseRequirement(e[s],o)),r[s]=o}else n=a.parseRequirement(e[s],t);return[n,r]},h=function(t){e.extend(!0,this,t)};h.prototype={validate:function(e,t){if(this.fn)return arguments.length>3&&(t=[].slice.call(arguments,1,-1)),this.fn(e,t);if(Array.isArray(e)){if(!this.validateMultiple)throw"Validator `"+this.name+"` does not handle multiple values";return this.validateMultiple.apply(this,arguments)}var i=arguments[arguments.length-1];if(this.validateDate&&i._isDateInput())return arguments[0]=a.parse.date(arguments[0]),null!==arguments[0]&&this.validateDate.apply(this,arguments);if(this.validateNumber)return!isNaN(e)&&(arguments[0]=parseFloat(arguments[0]),this.validateNumber.apply(this,arguments));if(this.validateString)return this.validateString.apply(this,arguments);throw"Validator `"+this.name+"` only handles multiple values"},parseRequirements:function(t,i){if("string"!=typeof t)return Array.isArray(t)?t:[t];var n=this.requirementType;if(Array.isArray(n)){for(var r=u(t,n.length),s=0;s<r.length;s++)r[s]=a.parseRequirement(n[s],r[s]);return r}return e.isPlainObject(n)?d(n,t,i):[a.parseRequirement(n,t)]},requirementType:"string",priority:2};var p=function(e,t){this.__class__="ValidatorRegistry",this.locale="en",this.init(e||{},t||{})},c={email:/^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/,number:/^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,integer:/^-?\d+$/,digits:/^\d+$/,alphanum:/^\w+$/i,date:{test:function(e){return null!==a.parse.date(e)}},url:new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$")};c.range=c.number;var f=function(e){var t=(""+e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},m=function(e,t){return t.map(a.parse[e])},g=function(e,t){return function(i){for(var n=arguments.length,r=Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return r.pop(),t.apply(void 0,[i].concat(_toConsumableArray(m(e,r))))}},v=function(e){return{validateDate:g("date",e),validateNumber:g("number",e),requirementType:e.length<=2?"string":["string","string"],priority:30}};p.prototype={init:function(e,t){this.catalog=t,this.validators=_extends({},this.validators);for(var i in e)this.addValidator(i,e[i].fn,e[i].priority);window.Parsley.trigger("parsley:validator:init")},setLocale:function(e){if("undefined"==typeof this.catalog[e])throw new Error(e+" is not available in the catalog");return this.locale=e,this},addCatalog:function(e,t,i){return"object"==typeof t&&(this.catalog[e]=t),!0===i?this.setLocale(e):this},addMessage:function(e,t,i){return"undefined"==typeof this.catalog[e]&&(this.catalog[e]={}),this.catalog[e][t]=i,this},addMessages:function(e,t){for(var i in t)this.addMessage(e,i,t[i]);return this},addValidator:function(e,t,i){if(this.validators[e])a.warn('Validator "'+e+'" is already defined.');else if(o.hasOwnProperty(e))return void a.warn('"'+e+'" is a restricted keyword and is not a valid validator name.');return this._setValidator.apply(this,arguments)},hasValidator:function(e){return!!this.validators[e]},updateValidator:function(e,t,i){return this.validators[e]?this._setValidator.apply(this,arguments):(a.warn('Validator "'+e+'" is not already defined.'),this.addValidator.apply(this,arguments))},removeValidator:function(e){return this.validators[e]||a.warn('Validator "'+e+'" is not defined.'),delete this.validators[e],this},_setValidator:function(e,t,i){"object"!=typeof t&&(t={fn:t,priority:i}),t.validate||(t=new h(t)),this.validators[e]=t;for(var n in t.messages||{})this.addMessage(n,e,t.messages[n]);return this},getErrorMessage:function(e){var t;if("type"===e.name){var i=this.catalog[this.locale][e.name]||{};t=i[e.requirements]}else t=this.formatMessage(this.catalog[this.locale][e.name],e.requirements);return t||this.catalog[this.locale].defaultMessage||this.catalog.en.defaultMessage},formatMessage:function(e,t){if("object"==typeof t){for(var i in t)e=this.formatMessage(e,t[i]);return e}return"string"==typeof e?e.replace(/%s/i,t):""},validators:{notblank:{validateString:function(e){return/\S/.test(e)},priority:2},required:{validateMultiple:function(e){return e.length>0},validateString:function(e){return/\S/.test(e)},priority:512},type:{validateString:function(e,t){var i=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=i.step,r=void 0===n?"any":n,s=i.base,a=void 0===s?0:s,o=c[t];if(!o)throw new Error("validator type `"+t+"` is not supported");if(!o.test(e))return!1;if("number"===t&&!/^any$/i.test(r||"")){var l=Number(e),u=Math.max(f(r),f(a));if(f(l)>u)return!1;var d=function(e){return Math.round(e*Math.pow(10,u))};if((d(l)-d(a))%d(r)!=0)return!1}return!0},requirementType:{"":"string",step:"string",base:"number"},priority:256},pattern:{validateString:function(e,t){return t.test(e)},requirementType:"regexp",priority:64},minlength:{validateString:function(e,t){return e.length>=t},requirementType:"integer",priority:30},maxlength:{validateString:function(e,t){return e.length<=t},requirementType:"integer",priority:30},length:{validateString:function(e,t,i){return e.length>=t&&e.length<=i},requirementType:["integer","integer"],priority:30},mincheck:{validateMultiple:function(e,t){return e.length>=t},requirementType:"integer",priority:30},maxcheck:{validateMultiple:function(e,t){return e.length<=t},requirementType:"integer",priority:30},check:{validateMultiple:function(e,t,i){return e.length>=t&&e.length<=i},requirementType:["integer","integer"],priority:30},min:v(function(e,t){return e>=t}),max:v(function(e,t){return e<=t}),range:v(function(e,t,i){return e>=t&&e<=i}),equalto:{validateString:function(t,i){var n=e(i);return n.length?t===n.val():t===i},priority:256}}};var y={},_=function k(e,t,i){for(var n=[],r=[],s=0;s<e.length;s++){for(var a=!1,o=0;o<t.length;o++)if(e[s].assert.name===t[o].assert.name){a=!0;break}a?r.push(e[s]):n.push(e[s])}return{kept:r,added:n,removed:i?[]:k(t,e,!0).added}};y.Form={_actualizeTriggers:function(){var e=this;this.$element.on("submit.Parsley",function(t){e.onSubmitValidate(t)}),this.$element.on("click.Parsley",a._SubmitSelector,function(t){e.onSubmitButton(t)}),!1!==this.options.uiEnabled&&this.element.setAttribute("novalidate","")},focus:function(){if(this._focusedField=null,!0===this.validationResult||"none"===this.options.focus)return null;for(var e=0;e<this.fields.length;e++){var t=this.fields[e];if(!0!==t.validationResult&&t.validationResult.length>0&&"undefined"==typeof t.options.noFocus&&(this._focusedField=t.$element,"first"===this.options.focus))break}return null===this._focusedField?null:this._focusedField.focus()},_destroyUI:function(){this.$element.off(".Parsley")}},y.Field={_reflowUI:function(){if(this._buildUI(),this._ui){var e=_(this.validationResult,this._ui.lastValidationResult);this._ui.lastValidationResult=this.validationResult,this._manageStatusClass(),this._manageErrorsMessages(e),this._actualizeTriggers(),!e.kept.length&&!e.added.length||this._failedOnce||(this._failedOnce=!0,this._actualizeTriggers())}},getErrorsMessages:function(){if(!0===this.validationResult)return[];for(var e=[],t=0;t<this.validationResult.length;t++)e.push(this.validationResult[t].errorMessage||this._getErrorMessage(this.validationResult[t].assert));return e},addError:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=t.message,n=t.assert,r=t.updateClass,s=void 0===r||r;this._buildUI(),this._addError(e,{message:i,assert:n}),s&&this._errorClass()},updateError:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=t.message,n=t.assert,r=t.updateClass,s=void 0===r||r;this._buildUI(),this._updateError(e,{message:i,assert:n}),s&&this._errorClass()},removeError:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=t.updateClass,n=void 0===i||i;this._buildUI(),this._removeError(e),n&&this._manageStatusClass()},_manageStatusClass:function(){this.hasConstraints()&&this.needsValidation()&&!0===this.validationResult?this._successClass():this.validationResult.length>0?this._errorClass():this._resetClass()},_manageErrorsMessages:function(t){if("undefined"==typeof this.options.errorsMessagesDisabled){if("undefined"!=typeof this.options.errorMessage)return t.added.length||t.kept.length?(this._insertErrorWrapper(),0===this._ui.$errorsWrapper.find(".parsley-custom-error-message").length&&this._ui.$errorsWrapper.append(e(this.options.errorTemplate).addClass("parsley-custom-error-message")),this._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(this.options.errorMessage)):this._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();for(var i=0;i<t.removed.length;i++)this._removeError(t.removed[i].assert.name);for(i=0;i<t.added.length;i++)this._addError(t.added[i].assert.name,{message:t.added[i].errorMessage,assert:t.added[i].assert});for(i=0;i<t.kept.length;i++)this._updateError(t.kept[i].assert.name,{message:t.kept[i].errorMessage,assert:t.kept[i].assert})}},_addError:function(t,i){var n=i.message,r=i.assert;this._insertErrorWrapper(),this._ui.$errorClassHandler.attr("aria-describedby",this._ui.errorsWrapperId),this._ui.$errorsWrapper.addClass("filled").append(e(this.options.errorTemplate).addClass("parsley-"+t).html(n||this._getErrorMessage(r)))},_updateError:function(e,t){var i=t.message,n=t.assert;this._ui.$errorsWrapper.addClass("filled").find(".parsley-"+e).html(i||this._getErrorMessage(n))},_removeError:function(e){this._ui.$errorClassHandler.removeAttr("aria-describedby"),this._ui.$errorsWrapper.removeClass("filled").find(".parsley-"+e).remove()},_getErrorMessage:function(e){var t=e.name+"Message";return"undefined"!=typeof this.options[t]?window.Parsley.formatMessage(this.options[t],e.requirements):window.Parsley.getErrorMessage(e)},_buildUI:function(){if(!this._ui&&!1!==this.options.uiEnabled){var t={};this.element.setAttribute(this.options.namespace+"id",this.__id__),t.$errorClassHandler=this._manageClassHandler(),t.errorsWrapperId="parsley-id-"+(this.options.multiple?"multiple-"+this.options.multiple:this.__id__),t.$errorsWrapper=e(this.options.errorsWrapper).attr("id",t.errorsWrapperId),t.lastValidationResult=[],t.validationInformationVisible=!1,this._ui=t}},_manageClassHandler:function(){if("string"==typeof this.options.classHandler&&e(this.options.classHandler).length)return e(this.options.classHandler);var t=this.options.classHandler;if("string"==typeof this.options.classHandler&&"function"==typeof window[this.options.classHandler]&&(t=window[this.options.classHandler]),"function"==typeof t){var i=t.call(this,this);if("undefined"!=typeof i&&i.length)return i}else{if("object"==typeof t&&t instanceof jQuery&&t.length)return t;t&&a.warn("The class handler `"+t+"` does not exist in DOM nor as a global JS function")}return this._inputHolder()},_inputHolder:function(){return this.options.multiple&&"SELECT"!==this.element.nodeName?this.$element.parent():this.$element},_insertErrorWrapper:function(){var t=this.options.errorsContainer;if(0!==this._ui.$errorsWrapper.parent().length)return this._ui.$errorsWrapper.parent();if("string"==typeof t){if(e(t).length)return e(t).append(this._ui.$errorsWrapper);"function"==typeof window[t]?t=window[t]:a.warn("The errors container `"+t+"` does not exist in DOM nor as a global JS function")}return"function"==typeof t&&(t=t.call(this,this)),"object"==typeof t&&t.length?t.append(this._ui.$errorsWrapper):this._inputHolder().after(this._ui.$errorsWrapper)},_actualizeTriggers:function(){var e,t=this,i=this._findRelated();i.off(".Parsley"),this._failedOnce?i.on(a.namespaceEvents(this.options.triggerAfterFailure,"Parsley"),function(){t._validateIfNeeded()}):(e=a.namespaceEvents(this.options.trigger,"Parsley"))&&i.on(e,function(e){t._validateIfNeeded(e)})},_validateIfNeeded:function(e){var t=this;e&&/key|input/.test(e.type)&&(!this._ui||!this._ui.validationInformationVisible)&&this.getValue().length<=this.options.validationThreshold||(this.options.debounce?(window.clearTimeout(this._debounced),this._debounced=window.setTimeout(function(){return t.validate()},this.options.debounce)):this.validate())},_resetUI:function(){this._failedOnce=!1,this._actualizeTriggers(),"undefined"!=typeof this._ui&&(this._ui.$errorsWrapper.removeClass("filled").children().remove(),this._resetClass(),this._ui.lastValidationResult=[],this._ui.validationInformationVisible=!1)},_destroyUI:function(){this._resetUI(),"undefined"!=typeof this._ui&&this._ui.$errorsWrapper.remove(),delete this._ui},_successClass:function(){this._ui.validationInformationVisible=!0,this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass)},_errorClass:function(){this._ui.validationInformationVisible=!0,this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass)},_resetClass:function(){this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass)}};var w=function(t,i,n){this.__class__="Form",this.element=t,this.$element=e(t),this.domOptions=i,this.options=n,this.parent=window.Parsley,this.fields=[],this.validationResult=null},b={pending:null,resolved:!0,rejected:!1};w.prototype={onSubmitValidate:function(e){var t=this;if(!0!==e.parsley){var i=this._submitSource||this.$element.find(a._SubmitSelector)[0];if(this._submitSource=null,this.$element.find(".parsley-synthetic-submit-button").prop("disabled",!0),!i||null===i.getAttribute("formnovalidate")){window.Parsley._remoteCache={};var n=this.whenValidate({event:e});"resolved"===n.state()&&!1!==this._trigger("submit")||(e.stopImmediatePropagation(),e.preventDefault(),"pending"===n.state()&&n.done(function(){t._submit(i)}))}}},onSubmitButton:function(e){this._submitSource=e.currentTarget},_submit:function(t){if(!1!==this._trigger("submit")){if(t){var i=this.$element.find(".parsley-synthetic-submit-button").prop("disabled",!1);0===i.length&&(i=e('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element)),i.attr({name:t.getAttribute("name"),value:t.getAttribute("value")})}this.$element.trigger(_extends(e.Event("submit"),{parsley:!0}))}},validate:function(t){if(arguments.length>=1&&!e.isPlainObject(t)){a.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated.");var i=_slice.call(arguments),n=i[0],r=i[1],s=i[2];t={group:n,force:r,event:s}}return b[this.whenValidate(t).state()]},whenValidate:function(){var t,i=this,n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=n.group,s=n.force,o=n.event;this.submitEvent=o,o&&(this.submitEvent=_extends({},o,{preventDefault:function(){a.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"),i.validationResult=!1}})),this.validationResult=!0,this._trigger("validate"),this._refreshFields();var l=this._withoutReactualizingFormOptions(function(){return e.map(i.fields,function(e){return e.whenValidate({force:s,group:r})})});return(t=a.all(l).done(function(){i._trigger("success")}).fail(function(){i.validationResult=!1,i.focus(),i._trigger("error")}).always(function(){i._trigger("validated")})).pipe.apply(t,_toConsumableArray(this._pipeAccordingToValidationResult()))},isValid:function(t){if(arguments.length>=1&&!e.isPlainObject(t)){a.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated.");var i=_slice.call(arguments),n=i[0],r=i[1];t={group:n,force:r}}return b[this.whenValid(t).state()]},whenValid:function(){var t=this,i=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=i.group,r=i.force;this._refreshFields();var s=this._withoutReactualizingFormOptions(function(){return e.map(t.fields,function(e){return e.whenValid({group:n,force:r})})});return a.all(s)},refresh:function(){return this._refreshFields(),this},reset:function(){for(var e=0;e<this.fields.length;e++)this.fields[e].reset();this._trigger("reset")},destroy:function(){this._destroyUI();for(var e=0;e<this.fields.length;e++)this.fields[e].destroy();this.$element.removeData("Parsley"),this._trigger("destroy")},_refreshFields:function(){return this.actualizeOptions()._bindFields()},_bindFields:function(){var t=this,i=this.fields;return this.fields=[],this.fieldsMappedById={},this._withoutReactualizingFormOptions(function(){t.$element.find(t.options.inputs).not(t.options.excluded).each(function(e,i){var n=new window.Parsley.Factory(i,{},t);if(("Field"===n.__class__||"FieldMultiple"===n.__class__)&&!0!==n.options.excluded){var r=n.__class__+"-"+n.__id__;"undefined"==typeof t.fieldsMappedById[r]&&(t.fieldsMappedById[r]=n,t.fields.push(n))}}),e.each(a.difference(i,t.fields),function(e,t){t.reset()})}),this},_withoutReactualizingFormOptions:function(e){var t=this.actualizeOptions;this.actualizeOptions=function(){return this};var i=e();return this.actualizeOptions=t,i},_trigger:function(e){return this.trigger("form:"+e)}};var F=function(e,t,i,n,r){var s=window.Parsley._validatorRegistry.validators[t],a=new h(s);n=n||e.options[t+"Priority"]||a.priority,r=!0===r,_extends(this,{validator:a,name:t,requirements:i,priority:n,isDomConstraint:r}),this._parseRequirements(e.options)},C=function(e){var t=e[0].toUpperCase();return t+e.slice(1)};F.prototype={validate:function(e,t){var i;return(i=this.validator).validate.apply(i,[e].concat(_toConsumableArray(this.requirementList),[t]))},_parseRequirements:function(e){var t=this;this.requirementList=this.validator.parseRequirements(this.requirements,function(i){return e[t.name+C(i)]})}};var A=function(t,i,n,r){this.__class__="Field",this.element=t,this.$element=e(t),"undefined"!=typeof r&&(this.parent=r),this.options=n,this.domOptions=i,this.constraints=[],this.constraintsByName={},this.validationResult=!0,this._bindConstraints()},E={pending:null,resolved:!0,rejected:!1};A.prototype={validate:function(t){arguments.length>=1&&!e.isPlainObject(t)&&(a.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."),t={options:t});var i=this.whenValidate(t);if(!i)return!0;switch(i.state()){case"pending":return null;case"resolved":return!0;case"rejected":return this.validationResult}},whenValidate:function(){var e,t=this,i=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=i.force,r=i.group;if(this.refresh(),!r||this._isInGroup(r))return this.value=this.getValue(),this._trigger("validate"),(e=this.whenValid({force:n,value:this.value,_refreshed:!0}).always(function(){t._reflowUI()}).done(function(){t._trigger("success")}).fail(function(){t._trigger("error")}).always(function(){t._trigger("validated")})).pipe.apply(e,_toConsumableArray(this._pipeAccordingToValidationResult()))},hasConstraints:function(){return 0!==this.constraints.length},needsValidation:function(e){return"undefined"==typeof e&&(e=this.getValue()),!(!e.length&&!this._isRequired()&&"undefined"==typeof this.options.validateIfEmpty)},_isInGroup:function(t){return Array.isArray(this.options.group)?-1!==e.inArray(t,this.options.group):this.options.group===t},isValid:function(t){if(arguments.length>=1&&!e.isPlainObject(t)){a.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated.");var i=_slice.call(arguments),n=i[0],r=i[1];t={force:n,value:r}}var s=this.whenValid(t);return!s||E[s.state()]},whenValid:function(){var t=this,i=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=i.force,r=void 0!==n&&n,s=i.value,o=i.group,l=i._refreshed;if(l||this.refresh(),!o||this._isInGroup(o)){if(this.validationResult=!0,!this.hasConstraints())return e.when();if("undefined"!=typeof s&&null!==s||(s=this.getValue()),!this.needsValidation(s)&&!0!==r)return e.when();var u=this._getGroupedConstraints(),d=[];return e.each(u,function(i,n){var r=a.all(e.map(n,function(e){return t._validateConstraint(s,e)}));if(d.push(r),"rejected"===r.state())return!1}),a.all(d)}},_validateConstraint:function(t,i){var n=this,r=i.validate(t,this);return!1===r&&(r=e.Deferred().reject()),a.all([r]).fail(function(e){n.validationResult instanceof Array||(n.validationResult=[]),n.validationResult.push({assert:i,errorMessage:"string"==typeof e&&e})})},getValue:function(){var e;return e="function"==typeof this.options.value?this.options.value(this):"undefined"!=typeof this.options.value?this.options.value:this.$element.val(),"undefined"==typeof e||null===e?"":this._handleWhitespace(e)},reset:function(){return this._resetUI(),this._trigger("reset")},destroy:function(){this._destroyUI(),this.$element.removeData("Parsley"),this.$element.removeData("FieldMultiple"),this._trigger("destroy")},refresh:function(){return this._refreshConstraints(),this},_refreshConstraints:function(){return this.actualizeOptions()._bindConstraints()},refreshConstraints:function(){return a.warnOnce("Parsley's refreshConstraints is deprecated. Please use refresh"),this.refresh()},addConstraint:function(e,t,i,n){if(window.Parsley._validatorRegistry.validators[e]){var r=new F(this,e,t,i,n);"undefined"!==this.constraintsByName[r.name]&&this.removeConstraint(r.name),this.constraints.push(r),this.constraintsByName[r.name]=r}return this},removeConstraint:function(e){for(var t=0;t<this.constraints.length;t++)if(e===this.constraints[t].name){this.constraints.splice(t,1);break}return delete this.constraintsByName[e],this},updateConstraint:function(e,t,i){return this.removeConstraint(e).addConstraint(e,t,i)},_bindConstraints:function(){for(var e=[],t={},i=0;i<this.constraints.length;i++)!1===this.constraints[i].isDomConstraint&&(e.push(this.constraints[i]),t[this.constraints[i].name]=this.constraints[i]);this.constraints=e,this.constraintsByName=t;for(var n in this.options)this.addConstraint(n,this.options[n],void 0,!0);return this._bindHtml5Constraints()},_bindHtml5Constraints:function(){null!==this.element.getAttribute("required")&&this.addConstraint("required",!0,void 0,!0),null!==this.element.getAttribute("pattern")&&this.addConstraint("pattern",this.element.getAttribute("pattern"),void 0,!0);var e=this.element.getAttribute("min"),t=this.element.getAttribute("max");null!==e&&null!==t?this.addConstraint("range",[e,t],void 0,!0):null!==e?this.addConstraint("min",e,void 0,!0):null!==t&&this.addConstraint("max",t,void 0,!0),null!==this.element.getAttribute("minlength")&&null!==this.element.getAttribute("maxlength")?this.addConstraint("length",[this.element.getAttribute("minlength"),this.element.getAttribute("maxlength")],void 0,!0):null!==this.element.getAttribute("minlength")?this.addConstraint("minlength",this.element.getAttribute("minlength"),void 0,!0):null!==this.element.getAttribute("maxlength")&&this.addConstraint("maxlength",this.element.getAttribute("maxlength"),void 0,!0);var i=a.getType(this.element);return"number"===i?this.addConstraint("type",["number",{step:this.element.getAttribute("step")||"1",base:e||this.element.getAttribute("value")}],void 0,!0):/^(email|url|range|date)$/i.test(i)?this.addConstraint("type",i,void 0,!0):this},_isRequired:function(){return"undefined"!=typeof this.constraintsByName.required&&!1!==this.constraintsByName.required.requirements},_trigger:function(e){return this.trigger("field:"+e)},_handleWhitespace:function(e){return!0===this.options.trimValue&&a.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'),"squish"===this.options.whitespace&&(e=e.replace(/\s{2,}/g," ")),"trim"!==this.options.whitespace&&"squish"!==this.options.whitespace&&!0!==this.options.trimValue||(e=a.trimString(e)),e},_isDateInput:function(){var e=this.constraintsByName.type;return e&&"date"===e.requirements},_getGroupedConstraints:function(){if(!1===this.options.priorityEnabled)return[this.constraints];for(var e=[],t={},i=0;i<this.constraints.length;i++){var n=this.constraints[i].priority;t[n]||e.push(t[n]=[]),t[n].push(this.constraints[i])}return e.sort(function(e,t){return t[0].priority-e[0].priority}),e}};var x=A,$=function(){this.__class__="FieldMultiple"};$.prototype={addElement:function(e){return this.$elements.push(e),this},_refreshConstraints:function(){var t;if(this.constraints=[],"SELECT"===this.element.nodeName)return this.actualizeOptions()._bindConstraints(),this;for(var i=0;i<this.$elements.length;i++)if(e("html").has(this.$elements[i]).length){t=this.$elements[i].data("FieldMultiple")._refreshConstraints().constraints;for(var n=0;n<t.length;n++)this.addConstraint(t[n].name,t[n].requirements,t[n].priority,t[n].isDomConstraint)}else this.$elements.splice(i,1);return this},getValue:function(){if("function"==typeof this.options.value)return this.options.value(this);if("undefined"!=typeof this.options.value)return this.options.value;if("INPUT"===this.element.nodeName){var t=a.getType(this.element);if("radio"===t)return this._findRelated().filter(":checked").val()||"";if("checkbox"===t){
var i=[];return this._findRelated().filter(":checked").each(function(){i.push(e(this).val())}),i}}return"SELECT"===this.element.nodeName&&null===this.$element.val()?[]:this.$element.val()},_init:function(){return this.$elements=[this.$element],this}};var P=function(t,i,n){this.element=t,this.$element=e(t);var r=this.$element.data("Parsley");if(r)return"undefined"!=typeof n&&r.parent===window.Parsley&&(r.parent=n,r._resetOptions(r.options)),"object"==typeof i&&_extends(r.options,i),r;if(!this.$element.length)throw new Error("You must bind Parsley on an existing element.");if("undefined"!=typeof n&&"Form"!==n.__class__)throw new Error("Parent instance must be a Form instance");return this.parent=n||window.Parsley,this.init(i)};P.prototype={init:function(e){return this.__class__="Parsley",this.__version__="2.8.1",this.__id__=a.generateID(),this._resetOptions(e),"FORM"===this.element.nodeName||a.checkAttr(this.element,this.options.namespace,"validate")&&!this.$element.is(this.options.inputs)?this.bind("parsleyForm"):this.isMultiple()?this.handleMultiple():this.bind("parsleyField")},isMultiple:function(){var e=a.getType(this.element);return"radio"===e||"checkbox"===e||"SELECT"===this.element.nodeName&&null!==this.element.getAttribute("multiple")},handleMultiple:function(){var t,i,n=this;if(this.options.multiple=this.options.multiple||(t=this.element.getAttribute("name"))||this.element.getAttribute("id"),"SELECT"===this.element.nodeName&&null!==this.element.getAttribute("multiple"))return this.options.multiple=this.options.multiple||this.__id__,this.bind("parsleyFieldMultiple");if(!this.options.multiple)return a.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.",this.$element),this;this.options.multiple=this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g,""),t&&e('input[name="'+t+'"]').each(function(e,t){var i=a.getType(t);"radio"!==i&&"checkbox"!==i||t.setAttribute(n.options.namespace+"multiple",n.options.multiple)});for(var r=this._findRelated(),s=0;s<r.length;s++)if(i=e(r.get(s)).data("Parsley"),"undefined"!=typeof i){this.$element.data("FieldMultiple")||i.addElement(this.$element);break}return this.bind("parsleyField",!0),i||this.bind("parsleyFieldMultiple")},bind:function(t,i){var n;switch(t){case"parsleyForm":n=e.extend(new w(this.element,this.domOptions,this.options),new l,window.ParsleyExtend)._bindFields();break;case"parsleyField":n=e.extend(new x(this.element,this.domOptions,this.options,this.parent),new l,window.ParsleyExtend);break;case"parsleyFieldMultiple":n=e.extend(new x(this.element,this.domOptions,this.options,this.parent),new $,new l,window.ParsleyExtend)._init();break;default:throw new Error(t+"is not a supported Parsley type")}return this.options.multiple&&a.setAttr(this.element,this.options.namespace,"multiple",this.options.multiple),"undefined"!=typeof i?(this.$element.data("FieldMultiple",n),n):(this.$element.data("Parsley",n),n._actualizeTriggers(),n._trigger("init"),n)}};var V=e.fn.jquery.split(".");if(parseInt(V[0])<=1&&parseInt(V[1])<8)throw"The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";V.forEach||a.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");var T=_extends(new l,{element:document,$element:e(document),actualizeOptions:null,_resetOptions:null,Factory:P,version:"2.8.1"});_extends(x.prototype,y.Field,l.prototype),_extends(w.prototype,y.Form,l.prototype),_extends(P.prototype,l.prototype),e.fn.parsley=e.fn.psly=function(t){if(this.length>1){var i=[];return this.each(function(){i.push(e(this).parsley(t))}),i}if(0!=this.length)return new P(this[0],t)},"undefined"==typeof window.ParsleyExtend&&(window.ParsleyExtend={}),T.options=_extends(a.objectCreate(o),window.ParsleyConfig),window.ParsleyConfig=T.options,window.Parsley=window.psly=T,T.Utils=a,window.ParsleyUtils={},e.each(a,function(e,t){"function"==typeof t&&(window.ParsleyUtils[e]=function(){return a.warnOnce("Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead."),a[e].apply(a,arguments)})});var O=window.Parsley._validatorRegistry=new p(window.ParsleyConfig.validators,window.ParsleyConfig.i18n);window.ParsleyValidator={},e.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator hasValidator".split(" "),function(e,t){window.Parsley[t]=function(){return O[t].apply(O,arguments)},window.ParsleyValidator[t]=function(){var e;return a.warnOnce("Accessing the method '"+t+"' through Validator is deprecated. Simply call 'window.Parsley."+t+"(...)'"),(e=window.Parsley)[t].apply(e,arguments)}}),window.Parsley.UI=y,window.ParsleyUI={removeError:function(e,t,i){var n=!0!==i;return a.warnOnce("Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."),e.removeError(t,{updateClass:n})},getErrorsMessages:function(e){return a.warnOnce("Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly."),e.getErrorsMessages()}},e.each("addError updateError".split(" "),function(e,t){window.ParsleyUI[t]=function(e,i,n,r,s){var o=!0!==s;return a.warnOnce("Accessing UI is deprecated. Call '"+t+"' on the instance directly. Please comment in issue 1073 as to your need to call this method."),e[t](i,{message:n,assert:r,updateClass:o})}}),!1!==window.ParsleyConfig.autoBind&&e(function(){e("[data-parsley-validate]").length&&e("[data-parsley-validate]").parsley()});var M=e({}),R=function(){a.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")},D="parsley:";e.listen=function(e,n){var r;if(R(),"object"==typeof arguments[1]&&"function"==typeof arguments[2]&&(r=arguments[1],n=arguments[2]),"function"!=typeof n)throw new Error("Wrong parameters");window.Parsley.on(i(e),t(n,r))},e.listenTo=function(e,n,r){if(R(),!(e instanceof x||e instanceof w))throw new Error("Must give Parsley instance");if("string"!=typeof n||"function"!=typeof r)throw new Error("Wrong parameters");e.on(i(n),t(r))},e.unsubscribe=function(e,t){if(R(),"string"!=typeof e||"function"!=typeof t)throw new Error("Wrong arguments");window.Parsley.off(i(e),t.parsleyAdaptedCallback)},e.unsubscribeTo=function(e,t){if(R(),!(e instanceof x||e instanceof w))throw new Error("Must give Parsley instance");e.off(i(t))},e.unsubscribeAll=function(t){R(),window.Parsley.off(i(t)),e("form,input,textarea,select").each(function(){var n=e(this).data("Parsley");n&&n.off(i(t))})},e.emit=function(e,t){var n;R();var r=t instanceof x||t instanceof w,s=Array.prototype.slice.call(arguments,r?2:1);s.unshift(i(e)),r||(t=window.Parsley),(n=t).trigger.apply(n,_toConsumableArray(s))};e.extend(!0,T,{asyncValidators:{"default":{fn:function(e){return e.status>=200&&e.status<300},url:!1},reverse:{fn:function(e){return e.status<200||e.status>=300},url:!1}},addAsyncValidator:function(e,t,i,n){return T.asyncValidators[e]={fn:t,url:i||!1,options:n||{}},this}}),T.addValidator("remote",{requirementType:{"":"string",validator:"string",reverse:"boolean",options:"object"},validateString:function(t,i,n,r){var s,a,o={},l=n.validator||(!0===n.reverse?"reverse":"default");if("undefined"==typeof T.asyncValidators[l])throw new Error("Calling an undefined async validator: `"+l+"`");i=T.asyncValidators[l].url||i,i.indexOf("{value}")>-1?i=i.replace("{value}",encodeURIComponent(t)):o[r.element.getAttribute("name")||r.element.getAttribute("id")]=t;var u=e.extend(!0,n.options||{},T.asyncValidators[l].options);s=e.extend(!0,{},{url:i,data:o,type:"GET"},u),r.trigger("field:ajaxoptions",r,s),a=e.param(s),"undefined"==typeof T._remoteCache&&(T._remoteCache={});var d=T._remoteCache[a]=T._remoteCache[a]||e.ajax(s),h=function(){var t=T.asyncValidators[l].fn.call(r,d,i,n);return t||(t=e.Deferred().reject()),e.when(t)};return d.then(h,h)},priority:-1}),T.on("form:submit",function(){T._remoteCache={}}),l.prototype.addAsyncValidator=function(){return a.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"),T.addAsyncValidator.apply(T,arguments)},T.addMessages("en",{defaultMessage:"This value seems to be invalid.",type:{email:"This value should be a valid email.",url:"This value should be a valid url.",number:"This value should be a valid number.",integer:"This value should be a valid integer.",digits:"This value should be digits.",alphanum:"This value should be alphanumeric."},notblank:"This value should not be blank.",required:"This value is required.",pattern:"This value seems to be invalid.",min:"This value should be greater than or equal to %s.",max:"This value should be lower than or equal to %s.",range:"This value should be between %s and %s.",minlength:"This value is too short. It should have %s characters or more.",maxlength:"This value is too long. It should have %s characters or fewer.",length:"This value length is invalid. It should be between %s and %s characters long.",mincheck:"You must select at least %s choices.",maxcheck:"You must select %s choices or fewer.",check:"You must select between %s and %s choices.",equalto:"This value should be the same."}),T.setLocale("en");var I=new n;I.install();var q=T;return q});
//# sourceMappingURL=parsley.min.js.map

// Validation errors messages for Parsley
// Load this after Parsley

Parsley.addMessages('ru', {
  defaultMessage: "Некорректное значение.",
  type: {
    email:        "Введите адрес электронной почты.",
    url:          "Введите URL адрес.",
    number:       "Введите число.",
    integer:      "Введите целое число.",
    digits:       "Введите только цифры.",
    alphanum:     "Введите буквенно-цифровое значение."
  },
  notblank:       "Это поле должно быть заполнено.",
  required:       "Обязательное поле.",
  pattern:        "Это значение некорректно.",
  min:            "Это значение должно быть не менее чем %s.",
  max:            "Это значение должно быть не более чем %s.",
  range:          "Это значение должно быть от %s до %s.",
  minlength:      "Это значение должно содержать не менее %s символов.",
  maxlength:      "Это значение должно содержать не более %s символов.",
  length:         "Это значение должно содержать от %s до %s символов.",
  mincheck:       "Выберите не менее %s значений.",
  maxcheck:       "Выберите не более %s значений.",
  check:          "Выберите от %s до %s значений.",
  equalto:        "Это значение должно совпадать."
});

Parsley.setLocale('ru');

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.IMask = factory());
}(this, function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var O = 'object';

	var check = function (it) {
	  return it && it.Math == Math && it;
	}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


	var global_1 = // eslint-disable-next-line no-undef
	check(typeof globalThis == O && globalThis) || check(typeof window == O && window) || check(typeof self == O && self) || check(typeof commonjsGlobal == O && commonjsGlobal) || // eslint-disable-next-line no-new-func
	Function('return this')();

	var fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty


	var descriptors = !fails(function () {
	  return Object.defineProperty({}, 'a', {
	    get: function () {
	      return 7;
	    }
	  }).a != 7;
	});

	var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

	var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
	  1: 2
	}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable

	var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : nativePropertyIsEnumerable;

	var objectPropertyIsEnumerable = {
		f: f
	};

	var createPropertyDescriptor = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var toString = {}.toString;

	var classofRaw = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

	var indexedObject = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings




	var toIndexedObject = function (it) {
	  return indexedObject(requireObjectCoercible(it));
	};

	var isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	// `ToPrimitive` abstract operation
	// https://tc39.github.io/ecma262/#sec-toprimitive
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string


	var toPrimitive = function (input, PREFERRED_STRING) {
	  if (!isObject(input)) return input;
	  var fn, val;
	  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var hasOwnProperty = {}.hasOwnProperty;

	var has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var document$1 = global_1.document; // typeof document.createElement is 'object' in old IE

	var EXISTS = isObject(document$1) && isObject(document$1.createElement);

	var documentCreateElement = function (it) {
	  return EXISTS ? document$1.createElement(it) : {};
	};

	// Thank's IE8 for his funny defineProperty


	var ie8DomDefine = !descriptors && !fails(function () {
	  return Object.defineProperty(documentCreateElement('div'), 'a', {
	    get: function () {
	      return 7;
	    }
	  }).a != 7;
	});

	var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

	var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPrimitive(P, true);
	  if (ie8DomDefine) try {
	    return nativeGetOwnPropertyDescriptor(O, P);
	  } catch (error) {
	    /* empty */
	  }
	  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
	};

	var objectGetOwnPropertyDescriptor = {
		f: f$1
	};

	var anObject = function (it) {
	  if (!isObject(it)) {
	    throw TypeError(String(it) + ' is not an object');
	  }

	  return it;
	};

	var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperty

	var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (ie8DomDefine) try {
	    return nativeDefineProperty(O, P, Attributes);
	  } catch (error) {
	    /* empty */
	  }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var objectDefineProperty = {
		f: f$2
	};

	var hide = descriptors ? function (object, key, value) {
	  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var setGlobal = function (key, value) {
	  try {
	    hide(global_1, key, value);
	  } catch (error) {
	    global_1[key] = value;
	  }

	  return value;
	};

	var shared = createCommonjsModule(function (module) {
	var SHARED = '__core-js_shared__';
	var store = global_1[SHARED] || setGlobal(SHARED, {});
	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.1.3',
	  mode:  'global',
	  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
	});
	});

	var functionToString = shared('native-function-to-string', Function.toString);

	var WeakMap = global_1.WeakMap;
	var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(functionToString.call(WeakMap));

	var id = 0;
	var postfix = Math.random();

	var uid = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
	};

	var keys = shared('keys');

	var sharedKey = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	var hiddenKeys = {};

	var WeakMap$1 = global_1.WeakMap;
	var set, get, has$1;

	var enforce = function (it) {
	  return has$1(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;

	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
	    }

	    return state;
	  };
	};

	if (nativeWeakMap) {
	  var store = new WeakMap$1();
	  var wmget = store.get;
	  var wmhas = store.has;
	  var wmset = store.set;

	  set = function (it, metadata) {
	    wmset.call(store, it, metadata);
	    return metadata;
	  };

	  get = function (it) {
	    return wmget.call(store, it) || {};
	  };

	  has$1 = function (it) {
	    return wmhas.call(store, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys[STATE] = true;

	  set = function (it, metadata) {
	    hide(it, STATE, metadata);
	    return metadata;
	  };

	  get = function (it) {
	    return has(it, STATE) ? it[STATE] : {};
	  };

	  has$1 = function (it) {
	    return has(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has$1,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var redefine = createCommonjsModule(function (module) {
	var getInternalState = internalState.get;
	var enforceInternalState = internalState.enforce;
	var TEMPLATE = String(functionToString).split('toString');
	shared('inspectSource', function (it) {
	  return functionToString.call(it);
	});
	(module.exports = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;

	  if (typeof value == 'function') {
	    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
	    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
	  }

	  if (O === global_1) {
	    if (simple) O[key] = value;else setGlobal(key, value);
	    return;
	  } else if (!unsafe) {
	    delete O[key];
	  } else if (!noTargetGet && O[key]) {
	    simple = true;
	  }

	  if (simple) O[key] = value;else hide(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, 'toString', function toString() {
	  return typeof this == 'function' && getInternalState(this).source || functionToString.call(this);
	});
	});

	var path = global_1;

	var aFunction = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	var getBuiltIn = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace]) : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
	};

	var ceil = Math.ceil;
	var floor = Math.floor; // `ToInteger` abstract operation
	// https://tc39.github.io/ecma262/#sec-tointeger

	var toInteger = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
	};

	var min = Math.min; // `ToLength` abstract operation
	// https://tc39.github.io/ecma262/#sec-tolength

	var toLength = function (argument) {
	  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var max = Math.max;
	var min$1 = Math.min; // Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).

	var toAbsoluteIndex = function (index, length) {
	  var integer = toInteger(index);
	  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
	};

	// `Array.prototype.{ indexOf, includes }` methods implementation


	var createMethod = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value; // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare

	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++]; // eslint-disable-next-line no-self-compare

	      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    }
	    return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
	  includes: createMethod(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod(false)
	};

	var indexOf = arrayIncludes.indexOf;



	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;

	  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key); // Don't enum bug & hidden keys


	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~indexOf(result, key) || result.push(key);
	  }

	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

	var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertynames

	var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return objectKeysInternal(O, hiddenKeys$1);
	};

	var objectGetOwnPropertyNames = {
		f: f$3
	};

	var f$4 = Object.getOwnPropertySymbols;

	var objectGetOwnPropertySymbols = {
		f: f$4
	};

	// all object keys, includes non-enumerable and symbols


	var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = objectGetOwnPropertyNames.f(anObject(it));
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
	};

	var copyConstructorProperties = function (target, source) {
	  var keys = ownKeys(source);
	  var defineProperty = objectDefineProperty.f;
	  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	  }
	};

	var replacement = /#|\.prototype\./;

	var isForced = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
	};

	var normalize = isForced.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = 'N';
	var POLYFILL = isForced.POLYFILL = 'P';
	var isForced_1 = isForced;

	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;










	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	*/


	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

	  if (GLOBAL) {
	    target = global_1;
	  } else if (STATIC) {
	    target = global_1[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global_1[TARGET] || {}).prototype;
	  }

	  if (target) for (key in source) {
	    sourceProperty = source[key];

	    if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor$1(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];

	    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty === typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    } // add a flag to not completely full polyfills


	    if (options.sham || targetProperty && targetProperty.sham) {
	      hide(sourceProperty, 'sham', true);
	    } // extend global


	    redefine(target, key, sourceProperty, options);
	  }
	};

	// `Object.keys` method
	// https://tc39.github.io/ecma262/#sec-object.keys


	var objectKeys = Object.keys || function keys(O) {
	  return objectKeysInternal(O, enumBugKeys);
	};

	// `ToObject` abstract operation
	// https://tc39.github.io/ecma262/#sec-toobject


	var toObject = function (argument) {
	  return Object(requireObjectCoercible(argument));
	};

	var nativeAssign = Object.assign; // `Object.assign` method
	// https://tc39.github.io/ecma262/#sec-object.assign
	// should work with symbols and should have deterministic property order (V8 bug)

	var objectAssign = !nativeAssign || fails(function () {
	  var A = {};
	  var B = {}; // eslint-disable-next-line no-undef

	  var symbol = Symbol();
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) {
	    B[chr] = chr;
	  });
	  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  var propertyIsEnumerable = objectPropertyIsEnumerable.f;

	  while (argumentsLength > index) {
	    var S = indexedObject(arguments[index++]);
	    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;

	    while (length > j) {
	      key = keys[j++];
	      if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
	    }
	  }

	  return T;
	} : nativeAssign;

	// `Object.assign` method
	// https://tc39.github.io/ecma262/#sec-object.assign


	_export({
	  target: 'Object',
	  stat: true,
	  forced: Object.assign !== objectAssign
	}, {
	  assign: objectAssign
	});

	// `String.prototype.repeat` method implementation
	// https://tc39.github.io/ecma262/#sec-string.prototype.repeat


	var stringRepeat = ''.repeat || function repeat(count) {
	  var str = String(requireObjectCoercible(this));
	  var result = '';
	  var n = toInteger(count);
	  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');

	  for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;

	  return result;
	};

	// https://github.com/tc39/proposal-string-pad-start-end






	var ceil$1 = Math.ceil; // `String.prototype.{ padStart, padEnd }` methods implementation

	var createMethod$1 = function (IS_END) {
	  return function ($this, maxLength, fillString) {
	    var S = String(requireObjectCoercible($this));
	    var stringLength = S.length;
	    var fillStr = fillString === undefined ? ' ' : String(fillString);
	    var intMaxLength = toLength(maxLength);
	    var fillLen, stringFiller;
	    if (intMaxLength <= stringLength || fillStr == '') return S;
	    fillLen = intMaxLength - stringLength;
	    stringFiller = stringRepeat.call(fillStr, ceil$1(fillLen / fillStr.length));
	    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
	    return IS_END ? S + stringFiller : stringFiller + S;
	  };
	};

	var stringPad = {
	  // `String.prototype.padStart` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.padstart
	  start: createMethod$1(false),
	  // `String.prototype.padEnd` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.padend
	  end: createMethod$1(true)
	};

	var userAgent = getBuiltIn('navigator', 'userAgent') || '';

	// https://github.com/zloirock/core-js/issues/280
	 // eslint-disable-next-line unicorn/no-unsafe-regex


	var webkitStringPadBug = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

	var $padEnd = stringPad.end;

	 // `String.prototype.padEnd` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.padend


	_export({
	  target: 'String',
	  proto: true,
	  forced: webkitStringPadBug
	}, {
	  padEnd: function padEnd(maxLength
	  /* , fillString = ' ' */
	  ) {
	    return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $padStart = stringPad.start;

	 // `String.prototype.padStart` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.padstart


	_export({
	  target: 'String',
	  proto: true,
	  forced: webkitStringPadBug
	}, {
	  padStart: function padStart(maxLength
	  /* , fillString = ' ' */
	  ) {
	    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// `String.prototype.repeat` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.repeat


	_export({
	  target: 'String',
	  proto: true
	}, {
	  repeat: stringRepeat
	});

	function _typeof(obj) {
	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    _typeof = function (obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function (obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};

	  var target = _objectWithoutPropertiesLoose(source, excluded);

	  var key, i;

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
	  }

	  return _assertThisInitialized(self);
	}

	function _superPropBase(object, property) {
	  while (!Object.prototype.hasOwnProperty.call(object, property)) {
	    object = _getPrototypeOf(object);
	    if (object === null) break;
	  }

	  return object;
	}

	function _get(target, property, receiver) {
	  if (typeof Reflect !== "undefined" && Reflect.get) {
	    _get = Reflect.get;
	  } else {
	    _get = function _get(target, property, receiver) {
	      var base = _superPropBase(target, property);

	      if (!base) return;
	      var desc = Object.getOwnPropertyDescriptor(base, property);

	      if (desc.get) {
	        return desc.get.call(receiver);
	      }

	      return desc.value;
	    };
	  }

	  return _get(target, property, receiver || target);
	}

	function set$1(target, property, value, receiver) {
	  if (typeof Reflect !== "undefined" && Reflect.set) {
	    set$1 = Reflect.set;
	  } else {
	    set$1 = function set(target, property, value, receiver) {
	      var base = _superPropBase(target, property);

	      var desc;

	      if (base) {
	        desc = Object.getOwnPropertyDescriptor(base, property);

	        if (desc.set) {
	          desc.set.call(receiver, value);
	          return true;
	        } else if (!desc.writable) {
	          return false;
	        }
	      }

	      desc = Object.getOwnPropertyDescriptor(receiver, property);

	      if (desc) {
	        if (!desc.writable) {
	          return false;
	        }

	        desc.value = value;
	        Object.defineProperty(receiver, property, desc);
	      } else {
	        _defineProperty(receiver, property, value);
	      }

	      return true;
	    };
	  }

	  return set$1(target, property, value, receiver);
	}

	function _set(target, property, value, receiver, isStrict) {
	  var s = set$1(target, property, value, receiver || target);

	  if (!s && isStrict) {
	    throw new Error('failed to set property');
	  }

	  return value;
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
	}

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArrayLimit(arr, i) {
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _e = undefined;

	  try {
	    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance");
	}

	/** Checks if value is string */
	function isString(str) {
	  return typeof str === 'string' || str instanceof String;
	}
	/**
	  Direction
	  @prop {string} NONE
	  @prop {string} LEFT
	  @prop {string} FORCE_LEFT
	  @prop {string} RIGHT
	  @prop {string} FORCE_RIGHT
	*/

	var DIRECTION = {
	  NONE: 'NONE',
	  LEFT: 'LEFT',
	  FORCE_LEFT: 'FORCE_LEFT',
	  RIGHT: 'RIGHT',
	  FORCE_RIGHT: 'FORCE_RIGHT'
	  /**
	    Direction
	    @enum {string}
	  */

	};
	/** */

	function forceDirection(direction) {
	  switch (direction) {
	    case DIRECTION.LEFT:
	      return DIRECTION.FORCE_LEFT;

	    case DIRECTION.RIGHT:
	      return DIRECTION.FORCE_RIGHT;

	    default:
	      return direction;
	  }
	}
	/** Escapes regular expression control chars */

	function escapeRegExp(str) {
	  return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
	} // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes

	function objectIncludes(b, a) {
	  if (a === b) return true;
	  var arrA = Array.isArray(a),
	      arrB = Array.isArray(b),
	      i;

	  if (arrA && arrB) {
	    if (a.length != b.length) return false;

	    for (i = 0; i < a.length; i++) {
	      if (!objectIncludes(a[i], b[i])) return false;
	    }

	    return true;
	  }

	  if (arrA != arrB) return false;

	  if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
	    var dateA = a instanceof Date,
	        dateB = b instanceof Date;
	    if (dateA && dateB) return a.getTime() == b.getTime();
	    if (dateA != dateB) return false;
	    var regexpA = a instanceof RegExp,
	        regexpB = b instanceof RegExp;
	    if (regexpA && regexpB) return a.toString() == b.toString();
	    if (regexpA != regexpB) return false;
	    var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

	    for (i = 0; i < keys.length; i++) {
	      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
	    }

	    for (i = 0; i < keys.length; i++) {
	      if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
	    }

	    return true;
	  } else if (a && b && typeof a === 'function' && typeof b === 'function') {
	    return a.toString() === b.toString();
	  }

	  return false;
	}
	/* eslint-disable no-undef */

	var g = typeof window !== 'undefined' && window || typeof global !== 'undefined' && global.global === global && global || typeof self !== 'undefined' && self.self === self && self || {};
	/* eslint-enable no-undef */

	/** Selection range */

	/** Provides details of changing input */

	var ActionDetails =
	/*#__PURE__*/
	function () {
	  /** Current input value */

	  /** Current cursor position */

	  /** Old input value */

	  /** Old selection */
	  function ActionDetails(value, cursorPos, oldValue, oldSelection) {
	    _classCallCheck(this, ActionDetails);

	    this.value = value;
	    this.cursorPos = cursorPos;
	    this.oldValue = oldValue;
	    this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

	    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
	      --this.oldSelection.start;
	    }
	  }
	  /**
	    Start changing position
	    @readonly
	  */


	  _createClass(ActionDetails, [{
	    key: "startChangePos",
	    get: function get() {
	      return Math.min(this.cursorPos, this.oldSelection.start);
	    }
	    /**
	      Inserted symbols count
	      @readonly
	    */

	  }, {
	    key: "insertedCount",
	    get: function get() {
	      return this.cursorPos - this.startChangePos;
	    }
	    /**
	      Inserted symbols
	      @readonly
	    */

	  }, {
	    key: "inserted",
	    get: function get() {
	      return this.value.substr(this.startChangePos, this.insertedCount);
	    }
	    /**
	      Removed symbols count
	      @readonly
	    */

	  }, {
	    key: "removedCount",
	    get: function get() {
	      // Math.max for opposite operation
	      return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
	      this.oldValue.length - this.value.length, 0);
	    }
	    /**
	      Removed symbols
	      @readonly
	    */

	  }, {
	    key: "removed",
	    get: function get() {
	      return this.oldValue.substr(this.startChangePos, this.removedCount);
	    }
	    /**
	      Unchanged head symbols
	      @readonly
	    */

	  }, {
	    key: "head",
	    get: function get() {
	      return this.value.substring(0, this.startChangePos);
	    }
	    /**
	      Unchanged tail symbols
	      @readonly
	    */

	  }, {
	    key: "tail",
	    get: function get() {
	      return this.value.substring(this.startChangePos + this.insertedCount);
	    }
	    /**
	      Remove direction
	      @readonly
	    */

	  }, {
	    key: "removeDirection",
	    get: function get() {
	      if (!this.removedCount || this.insertedCount) return DIRECTION.NONE; // align right if delete at right or if range removed (event with backspace)

	      return this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? DIRECTION.RIGHT : DIRECTION.LEFT;
	    }
	  }]);

	  return ActionDetails;
	}();

	/**
	  Provides details of changing model value
	  @param {Object} [details]
	  @param {string} [details.inserted] - Inserted symbols
	  @param {boolean} [details.skip] - Can skip chars
	  @param {number} [details.removeCount] - Removed symbols count
	  @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
	*/
	var ChangeDetails =
	/*#__PURE__*/
	function () {
	  /** Inserted symbols */

	  /** Can skip chars */

	  /** Additional offset if any changes occurred before tail */

	  /** Raw inserted is used by dynamic mask */
	  function ChangeDetails(details) {
	    _classCallCheck(this, ChangeDetails);

	    Object.assign(this, {
	      inserted: '',
	      rawInserted: '',
	      skip: false,
	      tailShift: 0
	    }, details);
	  }
	  /**
	    Aggregate changes
	    @returns {ChangeDetails} `this`
	  */


	  _createClass(ChangeDetails, [{
	    key: "aggregate",
	    value: function aggregate(details) {
	      this.rawInserted += details.rawInserted;
	      this.skip = this.skip || details.skip;
	      this.inserted += details.inserted;
	      this.tailShift += details.tailShift;
	      return this;
	    }
	    /** Total offset considering all changes */

	  }, {
	    key: "offset",
	    get: function get() {
	      return this.tailShift + this.inserted.length;
	    }
	  }]);

	  return ChangeDetails;
	}();

	/** Provides details of continuous extracted tail */
	var ContinuousTailDetails =
	/*#__PURE__*/
	function () {
	  /** Tail value as string */

	  /** Tail start position */

	  /** Start position */
	  function ContinuousTailDetails() {
	    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var stop = arguments.length > 2 ? arguments[2] : undefined;

	    _classCallCheck(this, ContinuousTailDetails);

	    this.value = value;
	    this.from = from;
	    this.stop = stop;
	  }

	  _createClass(ContinuousTailDetails, [{
	    key: "toString",
	    value: function toString() {
	      return this.value;
	    }
	  }, {
	    key: "extend",
	    value: function extend(tail) {
	      this.value += String(tail);
	    }
	  }, {
	    key: "appendTo",
	    value: function appendTo(masked) {
	      return masked.append(this.toString(), {
	        tail: true
	      }).aggregate(masked._appendPlaceholder());
	    }
	  }, {
	    key: "shiftBefore",
	    value: function shiftBefore(pos) {
	      if (this.from >= pos || !this.value.length) return '';
	      var shiftChar = this.value[0];
	      this.value = this.value.slice(1);
	      return shiftChar;
	    }
	  }, {
	    key: "state",
	    get: function get() {
	      return {
	        value: this.value,
	        from: this.from,
	        stop: this.stop
	      };
	    },
	    set: function set(state) {
	      Object.assign(this, state);
	    }
	  }]);

	  return ContinuousTailDetails;
	}();

	/** Provides common masking stuff */
	var Masked =
	/*#__PURE__*/
	function () {
	  // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

	  /** @type {Mask} */

	  /** */
	  // $FlowFixMe no ideas

	  /** Transforms value before mask processing */

	  /** Validates if value is acceptable */

	  /** Does additional processing in the end of editing */

	  /** Enable characters overwriting */

	  /** */
	  function Masked(opts) {
	    _classCallCheck(this, Masked);

	    this._value = '';

	    this._update(opts);

	    this.isInitialized = true;
	  }
	  /** Sets and applies new options */


	  _createClass(Masked, [{
	    key: "updateOptions",
	    value: function updateOptions(opts) {
	      if (!Object.keys(opts).length) return;
	      this.withValueRefresh(this._update.bind(this, opts));
	    }
	    /**
	      Sets new options
	      @protected
	    */

	  }, {
	    key: "_update",
	    value: function _update(opts) {
	      Object.assign(this, opts);
	    }
	    /** Mask state */

	  }, {
	    key: "reset",

	    /** Resets value */
	    value: function reset() {
	      this._value = '';
	    }
	    /** */

	  }, {
	    key: "resolve",

	    /** Resolve new value */
	    value: function resolve(value) {
	      this.reset();
	      this.append(value, {
	        input: true
	      }, '');
	      this.doCommit();
	      return this.value;
	    }
	    /** */

	  }, {
	    key: "nearestInputPos",

	    /** Finds nearest input position in direction */
	    value: function nearestInputPos(cursorPos, direction) {
	      return cursorPos;
	    }
	    /** Extracts value in range considering flags */

	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      return this.value.slice(fromPos, toPos);
	    }
	    /** Extracts tail in range */

	  }, {
	    key: "extractTail",
	    value: function extractTail() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
	    }
	    /** Appends tail */
	    // $FlowFixMe no ideas

	  }, {
	    key: "appendTail",
	    value: function appendTail(tail) {
	      if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
	      return tail.appendTo(this);
	    }
	    /** Appends char */

	  }, {
	    key: "_appendCharRaw",
	    value: function _appendCharRaw(ch) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      ch = this.doPrepare(ch, flags);
	      if (!ch) return new ChangeDetails();
	      this._value += ch;
	      return new ChangeDetails({
	        inserted: ch,
	        rawInserted: ch
	      });
	    }
	    /** Appends char */

	  }, {
	    key: "_appendChar",
	    value: function _appendChar(ch) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var checkTail = arguments.length > 2 ? arguments[2] : undefined;
	      var consistentState = this.state;

	      var details = this._appendCharRaw(ch, flags);

	      if (details.inserted) {
	        var consistentTail;
	        var appended = this.doValidate(flags) !== false;

	        if (appended && checkTail != null) {
	          // validation ok, check tail
	          var beforeTailState = this.state;

	          if (this.overwrite) {
	            consistentTail = checkTail.state;
	            checkTail.shiftBefore(this.value.length);
	          }

	          var tailDetails = this.appendTail(checkTail);
	          appended = tailDetails.rawInserted === checkTail.toString(); // if ok, rollback state after tail

	          if (appended && tailDetails.inserted) this.state = beforeTailState;
	        } // revert all if something went wrong


	        if (!appended) {
	          details.rawInserted = details.inserted = '';
	          this.state = consistentState;
	          if (checkTail && consistentTail) checkTail.state = consistentTail;
	        }
	      }

	      return details;
	    }
	    /** Appends optional placeholder at end */

	  }, {
	    key: "_appendPlaceholder",
	    value: function _appendPlaceholder() {
	      return new ChangeDetails();
	    }
	    /** Appends symbols considering flags */
	    // $FlowFixMe no ideas

	  }, {
	    key: "append",
	    value: function append(str, flags, tail) {
	      if (!isString(str)) throw new Error('value should be string');
	      var details = new ChangeDetails();
	      var checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
	      if (flags.tail) flags._beforeTailState = this.state;

	      for (var ci = 0; ci < str.length; ++ci) {
	        details.aggregate(this._appendChar(str[ci], flags, checkTail));
	      } // append tail but aggregate only tailShift


	      if (checkTail != null) {
	        details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
	        // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
	        // this._resetBeforeTailState();
	      }

	      return details;
	    }
	    /** */

	  }, {
	    key: "remove",
	    value: function remove() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
	      return new ChangeDetails();
	    }
	    /** Calls function and reapplies current value */

	  }, {
	    key: "withValueRefresh",
	    value: function withValueRefresh(fn) {
	      if (this._refreshing || !this.isInitialized) return fn();
	      this._refreshing = true;
	      var unmasked = this.unmaskedValue;
	      var value = this.value;
	      var ret = fn(); // try to update with raw value first to keep fixed chars

	      if (this.resolve(value) !== value) {
	        // or fallback to unmasked
	        this.unmaskedValue = unmasked;
	      }

	      delete this._refreshing;
	      return ret;
	    }
	    /**
	      Prepares string before mask processing
	      @protected
	    */

	  }, {
	    key: "doPrepare",
	    value: function doPrepare(str) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      return this.prepare ? this.prepare(str, this, flags) : str;
	    }
	    /**
	      Validates if value is acceptable
	      @protected
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate(flags) {
	      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
	    }
	    /**
	      Does additional processing in the end of editing
	      @protected
	    */

	  }, {
	    key: "doCommit",
	    value: function doCommit() {
	      if (this.commit) this.commit(this.value, this);
	    }
	    /** */

	  }, {
	    key: "splice",
	    value: function splice(start, deleteCount, inserted, removeDirection) {
	      var tailPos = start + deleteCount;
	      var tail = this.extractTail(tailPos);
	      var startChangePos = this.nearestInputPos(start, removeDirection);
	      var changeDetails = new ChangeDetails({
	        tailShift: startChangePos - start // adjust tailShift if start was aligned

	      }).aggregate(this.remove(startChangePos)).aggregate(this.append(inserted, {
	        input: true
	      }, tail));
	      return changeDetails;
	    }
	  }, {
	    key: "state",
	    get: function get() {
	      return {
	        _value: this.value
	      };
	    },
	    set: function set(state) {
	      this._value = state._value;
	    }
	  }, {
	    key: "value",
	    get: function get() {
	      return this._value;
	    },
	    set: function set(value) {
	      this.resolve(value);
	    }
	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this.value;
	    },
	    set: function set(value) {
	      this.reset();
	      this.append(value, {}, '');
	      this.doCommit();
	    }
	    /** */

	  }, {
	    key: "typedValue",
	    get: function get() {
	      return this.unmaskedValue;
	    },
	    set: function set(value) {
	      this.unmaskedValue = value;
	    }
	    /** Value that includes raw user input */

	  }, {
	    key: "rawInputValue",
	    get: function get() {
	      return this.extractInput(0, this.value.length, {
	        raw: true
	      });
	    },
	    set: function set(value) {
	      this.reset();
	      this.append(value, {
	        raw: true
	      }, '');
	      this.doCommit();
	    }
	    /** */

	  }, {
	    key: "isComplete",
	    get: function get() {
	      return true;
	    }
	  }]);

	  return Masked;
	}();

	/** Get Masked class by mask type */
	function maskedClass(mask) {
	  if (mask == null) {
	    throw new Error('mask property should be defined');
	  }

	  if (mask instanceof RegExp) return g.IMask.MaskedRegExp;
	  if (isString(mask)) return g.IMask.MaskedPattern;
	  if (mask instanceof Date || mask === Date) return g.IMask.MaskedDate;
	  if (mask instanceof Number || typeof mask === 'number' || mask === Number) return g.IMask.MaskedNumber;
	  if (Array.isArray(mask) || mask === Array) return g.IMask.MaskedDynamic; // $FlowFixMe

	  if (mask.prototype instanceof g.IMask.Masked) return mask; // $FlowFixMe

	  if (mask instanceof Function) return g.IMask.MaskedFunction;
	  console.warn('Mask not found for mask', mask); // eslint-disable-line no-console

	  return g.IMask.Masked;
	}
	/** Creates new {@link Masked} depending on mask type */

	function createMask(opts) {
	  opts = Object.assign({}, opts);
	  var mask = opts.mask;
	  if (mask instanceof g.IMask.Masked) return mask;
	  var MaskedClass = maskedClass(mask);
	  return new MaskedClass(opts);
	}

	var DEFAULT_INPUT_DEFINITIONS = {
	  '0': /\d/,
	  'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	  // http://stackoverflow.com/a/22075070
	  '*': /./
	};
	/** */

	var PatternInputDefinition =
	/*#__PURE__*/
	function () {
	  /** */

	  /** */

	  /** */

	  /** */

	  /** */

	  /** */
	  function PatternInputDefinition(opts) {
	    _classCallCheck(this, PatternInputDefinition);

	    var mask = opts.mask,
	        blockOpts = _objectWithoutProperties(opts, ["mask"]);

	    this.masked = createMask({
	      mask: mask
	    });
	    Object.assign(this, blockOpts);
	  }

	  _createClass(PatternInputDefinition, [{
	    key: "reset",
	    value: function reset() {
	      this._isFilled = false;
	      this.masked.reset();
	    }
	  }, {
	    key: "remove",
	    value: function remove() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

	      if (fromPos === 0 && toPos >= 1) {
	        this._isFilled = false;
	        return this.masked.remove(fromPos, toPos);
	      }

	      return new ChangeDetails();
	    }
	  }, {
	    key: "_appendChar",
	    value: function _appendChar(str) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      if (this._isFilled) return new ChangeDetails();
	      var state = this.masked.state; // simulate input

	      var details = this.masked._appendChar(str, flags);

	      if (details.inserted && this.doValidate(flags) === false) {
	        details.inserted = details.rawInserted = '';
	        this.masked.state = state;
	      }

	      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
	        details.inserted = this.placeholderChar;
	      }

	      details.skip = !details.inserted && !this.isOptional;
	      this._isFilled = Boolean(details.inserted);
	      return details;
	    }
	  }, {
	    key: "append",
	    value: function append() {
	      var _this$masked;

	      return (_this$masked = this.masked).append.apply(_this$masked, arguments);
	    }
	  }, {
	    key: "_appendPlaceholder",
	    value: function _appendPlaceholder() {
	      var details = new ChangeDetails();
	      if (this._isFilled || this.isOptional) return details;
	      this._isFilled = true;
	      details.inserted = this.placeholderChar;
	      return details;
	    }
	  }, {
	    key: "extractTail",
	    value: function extractTail() {
	      var _this$masked2;

	      return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
	    }
	  }, {
	    key: "appendTail",
	    value: function appendTail() {
	      var _this$masked3;

	      return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
	    }
	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      var flags = arguments.length > 2 ? arguments[2] : undefined;
	      return this.masked.extractInput(fromPos, toPos, flags);
	    }
	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos(cursorPos) {
	      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
	      var minPos = 0;
	      var maxPos = this.value.length;
	      var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

	      switch (direction) {
	        case DIRECTION.LEFT:
	        case DIRECTION.FORCE_LEFT:
	          return this.isComplete ? boundPos : minPos;

	        case DIRECTION.RIGHT:
	        case DIRECTION.FORCE_RIGHT:
	          return this.isComplete ? boundPos : maxPos;

	        case DIRECTION.NONE:
	        default:
	          return boundPos;
	      }
	    }
	  }, {
	    key: "doValidate",
	    value: function doValidate() {
	      var _this$masked4, _this$parent;

	      return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
	    }
	  }, {
	    key: "doCommit",
	    value: function doCommit() {
	      this.masked.doCommit();
	    }
	  }, {
	    key: "value",
	    get: function get() {
	      return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : '');
	    }
	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this.masked.unmaskedValue;
	    }
	  }, {
	    key: "isComplete",
	    get: function get() {
	      return Boolean(this.masked.value) || this.isOptional;
	    }
	  }, {
	    key: "state",
	    get: function get() {
	      return {
	        masked: this.masked.state,
	        _isFilled: this._isFilled
	      };
	    },
	    set: function set(state) {
	      this.masked.state = state.masked;
	      this._isFilled = state._isFilled;
	    }
	  }]);

	  return PatternInputDefinition;
	}();

	var PatternFixedDefinition =
	/*#__PURE__*/
	function () {
	  /** */

	  /** */

	  /** */

	  /** */
	  function PatternFixedDefinition(opts) {
	    _classCallCheck(this, PatternFixedDefinition);

	    Object.assign(this, opts);
	    this._value = '';
	  }

	  _createClass(PatternFixedDefinition, [{
	    key: "reset",
	    value: function reset() {
	      this._isRawInput = false;
	      this._value = '';
	    }
	  }, {
	    key: "remove",
	    value: function remove() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
	      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
	      if (!this._value) this._isRawInput = false;
	      return new ChangeDetails();
	    }
	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos(cursorPos) {
	      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
	      var minPos = 0;
	      var maxPos = this._value.length;

	      switch (direction) {
	        case DIRECTION.LEFT:
	        case DIRECTION.FORCE_LEFT:
	          return minPos;

	        case DIRECTION.NONE:
	        case DIRECTION.RIGHT:
	        case DIRECTION.FORCE_RIGHT:
	        default:
	          return maxPos;
	      }
	    }
	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
	      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
	    }
	  }, {
	    key: "_appendChar",
	    value: function _appendChar(str) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var details = new ChangeDetails();
	      if (this._value) return details;
	      var appended = this.char === str[0];
	      var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !flags.tail;
	      if (isResolved) details.rawInserted = this.char;
	      this._value = details.inserted = this.char;
	      this._isRawInput = isResolved && (flags.raw || flags.input);
	      return details;
	    }
	  }, {
	    key: "_appendPlaceholder",
	    value: function _appendPlaceholder() {
	      var details = new ChangeDetails();
	      if (this._value) return details;
	      this._value = details.inserted = this.char;
	      return details;
	    }
	  }, {
	    key: "extractTail",
	    value: function extractTail() {
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      return new ContinuousTailDetails('');
	    } // $FlowFixMe no ideas

	  }, {
	    key: "appendTail",
	    value: function appendTail(tail) {
	      if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
	      return tail.appendTo(this);
	    }
	  }, {
	    key: "append",
	    value: function append(str, flags, tail) {
	      var details = this._appendChar(str, flags);

	      if (tail != null) {
	        details.tailShift += this.appendTail(tail).tailShift;
	      }

	      return details;
	    }
	  }, {
	    key: "doCommit",
	    value: function doCommit() {}
	  }, {
	    key: "value",
	    get: function get() {
	      return this._value;
	    }
	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this.isUnmasking ? this.value : '';
	    }
	  }, {
	    key: "isComplete",
	    get: function get() {
	      return true;
	    }
	  }, {
	    key: "state",
	    get: function get() {
	      return {
	        _value: this._value,
	        _isRawInput: this._isRawInput
	      };
	    },
	    set: function set(state) {
	      Object.assign(this, state);
	    }
	  }]);

	  return PatternFixedDefinition;
	}();

	var ChunksTailDetails =
	/*#__PURE__*/
	function () {
	  /** */
	  function ChunksTailDetails() {
	    var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	    _classCallCheck(this, ChunksTailDetails);

	    this.chunks = chunks;
	    this.from = from;
	  }

	  _createClass(ChunksTailDetails, [{
	    key: "toString",
	    value: function toString() {
	      return this.chunks.map(String).join('');
	    } // $FlowFixMe no ideas

	  }, {
	    key: "extend",
	    value: function extend(tailChunk) {
	      if (!String(tailChunk)) return;
	      if (isString(tailChunk)) tailChunk = new ContinuousTailDetails(String(tailChunk));
	      var lastChunk = this.chunks[this.chunks.length - 1];
	      var extendLast = lastChunk && ( // if stops are same or tail has no stop
	      lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
	      tailChunk.from === lastChunk.from + lastChunk.toString().length;

	      if (tailChunk instanceof ContinuousTailDetails) {
	        // check the ability to extend previous chunk
	        if (extendLast) {
	          // extend previous chunk
	          lastChunk.extend(tailChunk.toString());
	        } else {
	          // append new chunk
	          this.chunks.push(tailChunk);
	        }
	      } else if (tailChunk instanceof ChunksTailDetails) {
	        if (tailChunk.stop == null) {
	          // unwrap floating chunks to parent, keeping `from` pos
	          var firstTailChunk;

	          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
	            firstTailChunk = tailChunk.chunks.shift();
	            firstTailChunk.from += tailChunk.from;
	            this.extend(firstTailChunk);
	          }
	        } // if tail chunk still has value


	        if (tailChunk.toString()) {
	          // if chunks contains stops, then popup stop to container
	          tailChunk.stop = tailChunk.blockIndex;
	          this.chunks.push(tailChunk);
	        }
	      }
	    }
	  }, {
	    key: "appendTo",
	    value: function appendTo(masked) {
	      if (!(masked instanceof g.IMask.MaskedPattern)) {
	        var tail = new ContinuousTailDetails(this.toString());
	        return tail.appendTo(masked);
	      }

	      var details = new ChangeDetails();

	      for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
	        var chunk = this.chunks[ci];

	        var lastBlockIter = masked._mapPosToBlock(masked.value.length);

	        var stop = chunk.stop;
	        var chunkBlock = void 0;

	        if (stop && ( // if block not found or stop is behind lastBlock
	        !lastBlockIter || lastBlockIter.index <= stop)) {
	          if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
	          masked._stops.indexOf(stop) >= 0) {
	            details.aggregate(masked._appendPlaceholder(stop));
	          }

	          chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
	        }

	        if (chunkBlock) {
	          var tailDetails = chunkBlock.appendTail(chunk);
	          tailDetails.skip = false; // always ignore skip, it will be set on last

	          details.aggregate(tailDetails);
	          masked._value += tailDetails.inserted; // get not inserted chars

	          var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
	          if (remainChars) details.aggregate(masked.append(remainChars, {
	            tail: true
	          }));
	        } else {
	          details.aggregate(masked.append(chunk.toString(), {
	            tail: true
	          }));
	        }
	      }
	      return details;
	    }
	  }, {
	    key: "shiftBefore",
	    value: function shiftBefore(pos) {
	      if (this.from >= pos || !this.chunks.length) return '';
	      var chunkShiftPos = pos - this.from;
	      var ci = 0;

	      while (ci < this.chunks.length) {
	        var chunk = this.chunks[ci];
	        var shiftChar = chunk.shiftBefore(chunkShiftPos);

	        if (chunk.toString()) {
	          // chunk still contains value
	          // but not shifted - means no more available chars to shift
	          if (!shiftChar) break;
	          ++ci;
	        } else {
	          // clean if chunk has no value
	          this.chunks.splice(ci, 1);
	        }

	        if (shiftChar) return shiftChar;
	      }

	      return '';
	    }
	  }, {
	    key: "state",
	    get: function get() {
	      return {
	        chunks: this.chunks.map(function (c) {
	          return c.state;
	        }),
	        from: this.from,
	        stop: this.stop,
	        blockIndex: this.blockIndex
	      };
	    },
	    set: function set(state) {
	      var chunks = state.chunks,
	          props = _objectWithoutProperties(state, ["chunks"]);

	      Object.assign(this, props);
	      this.chunks = chunks.map(function (cstate) {
	        var chunk = "chunks" in cstate ? new ChunksTailDetails() : new ContinuousTailDetails(); // $FlowFixMe already checked above

	        chunk.state = cstate;
	        return chunk;
	      });
	    }
	  }]);

	  return ChunksTailDetails;
	}();

	/**
	  Pattern mask
	  @param {Object} opts
	  @param {Object} opts.blocks
	  @param {Object} opts.definitions
	  @param {string} opts.placeholderChar
	  @param {boolean} opts.lazy
	*/
	var MaskedPattern =
	/*#__PURE__*/
	function (_Masked) {
	  _inherits(MaskedPattern, _Masked);

	  /** */

	  /** */

	  /** Single char for empty input */

	  /** Show placeholder only when needed */
	  function MaskedPattern() {
	    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, MaskedPattern);

	    // TODO type $Shape<MaskedPatternOptions>={} does not work
	    opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
	    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedPattern).call(this, Object.assign({}, MaskedPattern.DEFAULTS, {}, opts)));
	  }
	  /**
	    @override
	    @param {Object} opts
	  */


	  _createClass(MaskedPattern, [{
	    key: "_update",
	    value: function _update() {
	      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      opts.definitions = Object.assign({}, this.definitions, opts.definitions);

	      _get(_getPrototypeOf(MaskedPattern.prototype), "_update", this).call(this, opts);

	      this._rebuildMask();
	    }
	    /** */

	  }, {
	    key: "_rebuildMask",
	    value: function _rebuildMask() {
	      var _this = this;

	      var defs = this.definitions;
	      this._blocks = [];
	      this._stops = [];
	      this._maskedBlocks = {};
	      var pattern = this.mask;
	      if (!pattern || !defs) return;
	      var unmaskingBlock = false;
	      var optionalBlock = false;

	      for (var i = 0; i < pattern.length; ++i) {
	        if (this.blocks) {
	          var _ret = function () {
	            var p = pattern.slice(i);
	            var bNames = Object.keys(_this.blocks).filter(function (bName) {
	              return p.indexOf(bName) === 0;
	            }); // order by key length

	            bNames.sort(function (a, b) {
	              return b.length - a.length;
	            }); // use block name with max length

	            var bName = bNames[0];

	            if (bName) {
	              var maskedBlock = createMask(Object.assign({
	                parent: _this,
	                lazy: _this.lazy,
	                placeholderChar: _this.placeholderChar
	              }, _this.blocks[bName]));

	              if (maskedBlock) {
	                _this._blocks.push(maskedBlock); // store block index


	                if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

	                _this._maskedBlocks[bName].push(_this._blocks.length - 1);
	              }

	              i += bName.length - 1;
	              return "continue";
	            }
	          }();

	          if (_ret === "continue") continue;
	        }

	        var char = pattern[i];

	        var _isInput = char in defs;

	        if (char === MaskedPattern.STOP_CHAR) {
	          this._stops.push(this._blocks.length);

	          continue;
	        }

	        if (char === '{' || char === '}') {
	          unmaskingBlock = !unmaskingBlock;
	          continue;
	        }

	        if (char === '[' || char === ']') {
	          optionalBlock = !optionalBlock;
	          continue;
	        }

	        if (char === MaskedPattern.ESCAPE_CHAR) {
	          ++i;
	          char = pattern[i];
	          if (!char) break;
	          _isInput = false;
	        }

	        var def = _isInput ? new PatternInputDefinition({
	          parent: this,
	          lazy: this.lazy,
	          placeholderChar: this.placeholderChar,
	          mask: defs[char],
	          isOptional: optionalBlock
	        }) : new PatternFixedDefinition({
	          char: char,
	          isUnmasking: unmaskingBlock
	        });

	        this._blocks.push(def);
	      }
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "reset",

	    /**
	      @override
	    */
	    value: function reset() {
	      _get(_getPrototypeOf(MaskedPattern.prototype), "reset", this).call(this);

	      this._blocks.forEach(function (b) {
	        return b.reset();
	      });
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doCommit",

	    /**
	      @override
	    */
	    value: function doCommit() {
	      this._blocks.forEach(function (b) {
	        return b.doCommit();
	      });

	      _get(_getPrototypeOf(MaskedPattern.prototype), "doCommit", this).call(this);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "appendTail",

	    /**
	      @override
	    */
	    value: function appendTail(tail) {
	      return _get(_getPrototypeOf(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "_appendCharRaw",
	    value: function _appendCharRaw(ch) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      ch = this.doPrepare(ch, flags);

	      var blockIter = this._mapPosToBlock(this.value.length);

	      var details = new ChangeDetails();
	      if (!blockIter) return details;

	      for (var bi = blockIter.index;; ++bi) {
	        var _block = this._blocks[bi];
	        if (!_block) break;

	        var blockDetails = _block._appendChar(ch, flags);

	        var skip = blockDetails.skip;
	        details.aggregate(blockDetails);
	        if (skip || blockDetails.rawInserted) break; // go next char
	      }

	      return details;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "extractTail",
	    value: function extractTail() {
	      var _this2 = this;

	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      var chunkTail = new ChunksTailDetails();
	      if (fromPos === toPos) return chunkTail;

	      this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
	        var blockChunk = b.extractTail(bFromPos, bToPos);
	        blockChunk.stop = _this2._findStopBefore(bi);
	        blockChunk.from = _this2._blockStartPos(bi);
	        if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
	        chunkTail.extend(blockChunk);
	      });

	      return chunkTail;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      if (fromPos === toPos) return '';
	      var input = '';

	      this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
	        input += b.extractInput(fromPos, toPos, flags);
	      });

	      return input;
	    }
	  }, {
	    key: "_findStopBefore",
	    value: function _findStopBefore(blockIndex) {
	      var stopBefore;

	      for (var si = 0; si < this._stops.length; ++si) {
	        var stop = this._stops[si];
	        if (stop <= blockIndex) stopBefore = stop;else break;
	      }

	      return stopBefore;
	    }
	    /** Appends placeholder depending on laziness */

	  }, {
	    key: "_appendPlaceholder",
	    value: function _appendPlaceholder(toBlockIndex) {
	      var _this3 = this;

	      var details = new ChangeDetails();
	      if (this.lazy && toBlockIndex == null) return details;

	      var startBlockIter = this._mapPosToBlock(this.value.length);

	      if (!startBlockIter) return details;
	      var startBlockIndex = startBlockIter.index;
	      var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

	      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
	        if (!b.lazy || toBlockIndex != null) {
	          // $FlowFixMe `_blocks` may not be present
	          var args = b._blocks != null ? [b._blocks.length] : [];

	          var bDetails = b._appendPlaceholder.apply(b, args);

	          _this3._value += bDetails.inserted;
	          details.aggregate(bDetails);
	        }
	      });

	      return details;
	    }
	    /** Finds block in pos */

	  }, {
	    key: "_mapPosToBlock",
	    value: function _mapPosToBlock(pos) {
	      var accVal = '';

	      for (var bi = 0; bi < this._blocks.length; ++bi) {
	        var _block2 = this._blocks[bi];
	        var blockStartPos = accVal.length;
	        accVal += _block2.value;

	        if (pos <= accVal.length) {
	          return {
	            index: bi,
	            offset: pos - blockStartPos
	          };
	        }
	      }
	    }
	    /** */

	  }, {
	    key: "_blockStartPos",
	    value: function _blockStartPos(blockIndex) {
	      return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
	        return pos += b.value.length;
	      }, 0);
	    }
	    /** */

	  }, {
	    key: "_forEachBlocksInRange",
	    value: function _forEachBlocksInRange(fromPos) {
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      var fn = arguments.length > 2 ? arguments[2] : undefined;

	      var fromBlockIter = this._mapPosToBlock(fromPos);

	      if (fromBlockIter) {
	        var toBlockIter = this._mapPosToBlock(toPos); // process first block


	        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
	        var fromBlockStartPos = fromBlockIter.offset;
	        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
	        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

	        if (toBlockIter && !isSameBlock) {
	          // process intermediate blocks
	          for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
	            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
	          } // process last block


	          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
	        }
	      }
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "remove",
	    value: function remove() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

	      var removeDetails = _get(_getPrototypeOf(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

	      this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
	        removeDetails.aggregate(b.remove(bFromPos, bToPos));
	      });

	      return removeDetails;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos(cursorPos) {
	      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
	      // TODO refactor - extract alignblock
	      var beginBlockData = this._mapPosToBlock(cursorPos) || {
	        index: 0,
	        offset: 0
	      };
	      var beginBlockOffset = beginBlockData.offset,
	          beginBlockIndex = beginBlockData.index;
	      var beginBlock = this._blocks[beginBlockIndex];
	      if (!beginBlock) return cursorPos;
	      var beginBlockCursorPos = beginBlockOffset; // if position inside block - try to adjust it

	      if (beginBlockCursorPos !== 0 && beginBlockCursorPos < beginBlock.value.length) {
	        beginBlockCursorPos = beginBlock.nearestInputPos(beginBlockOffset, forceDirection(direction));
	      }

	      var cursorAtRight = beginBlockCursorPos === beginBlock.value.length;
	      var cursorAtLeft = beginBlockCursorPos === 0; //  cursor is INSIDE first block (not at bounds)

	      if (!cursorAtLeft && !cursorAtRight) return this._blockStartPos(beginBlockIndex) + beginBlockCursorPos;
	      var searchBlockIndex = cursorAtRight ? beginBlockIndex + 1 : beginBlockIndex;

	      if (direction === DIRECTION.NONE) {
	        // NONE direction used to calculate start input position if no chars were removed
	        // FOR NONE:
	        // -
	        // input|any
	        // ->
	        //  any|input
	        // <-
	        //  filled-input|any
	        // check if first block at left is input
	        if (searchBlockIndex > 0) {
	          var blockIndexAtLeft = searchBlockIndex - 1;
	          var blockAtLeft = this._blocks[blockIndexAtLeft];
	          var blockInputPos = blockAtLeft.nearestInputPos(0, DIRECTION.NONE); // is input

	          if (!blockAtLeft.value.length || blockInputPos !== blockAtLeft.value.length) {
	            return this._blockStartPos(searchBlockIndex);
	          }
	        } // ->


	        var firstInputAtRight = searchBlockIndex;

	        for (var bi = firstInputAtRight; bi < this._blocks.length; ++bi) {
	          var _block3 = this._blocks[bi];

	          var _blockInputPos = _block3.nearestInputPos(0, DIRECTION.NONE);

	          if (_blockInputPos !== _block3.value.length) {
	            return this._blockStartPos(bi) + _blockInputPos;
	          }
	        } // <-
	        // find first non-fixed symbol


	        for (var _bi = searchBlockIndex - 1; _bi >= 0; --_bi) {
	          var _block4 = this._blocks[_bi];

	          var _blockInputPos2 = _block4.nearestInputPos(0, DIRECTION.NONE); // is input


	          if (!_block4.value.length || _blockInputPos2 !== _block4.value.length) {
	            return this._blockStartPos(_bi) + _block4.value.length;
	          }
	        }

	        return cursorPos;
	      }

	      if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
	        // -
	        //  any|filled-input
	        // <-
	        //  any|first not empty is not-len-aligned
	        //  not-0-aligned|any
	        // ->
	        //  any|not-len-aligned or end
	        // check if first block at right is filled input
	        var firstFilledBlockIndexAtRight;

	        for (var _bi2 = searchBlockIndex; _bi2 < this._blocks.length; ++_bi2) {
	          if (this._blocks[_bi2].value) {
	            firstFilledBlockIndexAtRight = _bi2;
	            break;
	          }
	        }

	        if (firstFilledBlockIndexAtRight != null) {
	          var filledBlock = this._blocks[firstFilledBlockIndexAtRight];

	          var _blockInputPos3 = filledBlock.nearestInputPos(0, DIRECTION.RIGHT);

	          if (_blockInputPos3 === 0 && filledBlock.unmaskedValue.length) {
	            // filled block is input
	            return this._blockStartPos(firstFilledBlockIndexAtRight) + _blockInputPos3;
	          }
	        } // <-
	        // find this vars


	        var firstFilledInputBlockIndex = -1;
	        var firstEmptyInputBlockIndex; // TODO consider nested empty inputs

	        for (var _bi3 = searchBlockIndex - 1; _bi3 >= 0; --_bi3) {
	          var _block5 = this._blocks[_bi3];

	          var _blockInputPos4 = _block5.nearestInputPos(_block5.value.length, DIRECTION.FORCE_LEFT);

	          if (!_block5.value || _blockInputPos4 !== 0) firstEmptyInputBlockIndex = _bi3;

	          if (_blockInputPos4 !== 0) {
	            if (_blockInputPos4 !== _block5.value.length) {
	              // aligned inside block - return immediately
	              return this._blockStartPos(_bi3) + _blockInputPos4;
	            } else {
	              // found filled
	              firstFilledInputBlockIndex = _bi3;
	              break;
	            }
	          }
	        }

	        if (direction === DIRECTION.LEFT) {
	          // try find first empty input before start searching position only when not forced
	          for (var _bi4 = firstFilledInputBlockIndex + 1; _bi4 <= Math.min(searchBlockIndex, this._blocks.length - 1); ++_bi4) {
	            var _block6 = this._blocks[_bi4];

	            var _blockInputPos5 = _block6.nearestInputPos(0, DIRECTION.NONE);

	            var blockAlignedPos = this._blockStartPos(_bi4) + _blockInputPos5;

	            if (blockAlignedPos > cursorPos) break; // if block is not lazy input

	            if (_blockInputPos5 !== _block6.value.length) return blockAlignedPos;
	          }
	        } // process overflow


	        if (firstFilledInputBlockIndex >= 0) {
	          return this._blockStartPos(firstFilledInputBlockIndex) + this._blocks[firstFilledInputBlockIndex].value.length;
	        } // for lazy if has aligned left inside fixed and has came to the start - use start position


	        if (direction === DIRECTION.FORCE_LEFT || this.lazy && !this.extractInput() && !isInput(this._blocks[searchBlockIndex])) {
	          return 0;
	        }

	        if (firstEmptyInputBlockIndex != null) {
	          return this._blockStartPos(firstEmptyInputBlockIndex);
	        } // find first input


	        for (var _bi5 = searchBlockIndex; _bi5 < this._blocks.length; ++_bi5) {
	          var _block7 = this._blocks[_bi5];

	          var _blockInputPos6 = _block7.nearestInputPos(0, DIRECTION.NONE); // is input


	          if (!_block7.value.length || _blockInputPos6 !== _block7.value.length) {
	            return this._blockStartPos(_bi5) + _blockInputPos6;
	          }
	        }

	        return 0;
	      }

	      if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
	        // ->
	        //  any|not-len-aligned and filled
	        //  any|not-len-aligned
	        // <-
	        //  not-0-aligned or start|any
	        var firstInputBlockAlignedIndex;
	        var firstInputBlockAlignedPos;

	        for (var _bi6 = searchBlockIndex; _bi6 < this._blocks.length; ++_bi6) {
	          var _block8 = this._blocks[_bi6];

	          var _blockInputPos7 = _block8.nearestInputPos(0, DIRECTION.NONE);

	          if (_blockInputPos7 !== _block8.value.length) {
	            firstInputBlockAlignedPos = this._blockStartPos(_bi6) + _blockInputPos7;
	            firstInputBlockAlignedIndex = _bi6;
	            break;
	          }
	        }

	        if (firstInputBlockAlignedIndex != null && firstInputBlockAlignedPos != null) {
	          for (var _bi7 = firstInputBlockAlignedIndex; _bi7 < this._blocks.length; ++_bi7) {
	            var _block9 = this._blocks[_bi7];

	            var _blockInputPos8 = _block9.nearestInputPos(0, DIRECTION.FORCE_RIGHT);

	            if (_blockInputPos8 !== _block9.value.length) {
	              return this._blockStartPos(_bi7) + _blockInputPos8;
	            }
	          }

	          return direction === DIRECTION.FORCE_RIGHT ? this.value.length : firstInputBlockAlignedPos;
	        }

	        for (var _bi8 = Math.min(searchBlockIndex, this._blocks.length - 1); _bi8 >= 0; --_bi8) {
	          var _block10 = this._blocks[_bi8];

	          var _blockInputPos9 = _block10.nearestInputPos(_block10.value.length, DIRECTION.LEFT);

	          if (_blockInputPos9 !== 0) {
	            var alignedPos = this._blockStartPos(_bi8) + _blockInputPos9;

	            if (alignedPos >= cursorPos) return alignedPos;
	            break;
	          }
	        }
	      }

	      return cursorPos;
	    }
	    /** Get block by name */

	  }, {
	    key: "maskedBlock",
	    value: function maskedBlock(name) {
	      return this.maskedBlocks(name)[0];
	    }
	    /** Get all blocks by name */

	  }, {
	    key: "maskedBlocks",
	    value: function maskedBlocks(name) {
	      var _this4 = this;

	      var indices = this._maskedBlocks[name];
	      if (!indices) return [];
	      return indices.map(function (gi) {
	        return _this4._blocks[gi];
	      });
	    }
	  }, {
	    key: "state",
	    get: function get() {
	      return Object.assign({}, _get(_getPrototypeOf(MaskedPattern.prototype), "state", this), {
	        _blocks: this._blocks.map(function (b) {
	          return b.state;
	        })
	      });
	    },
	    set: function set(state) {
	      var _blocks = state._blocks,
	          maskedState = _objectWithoutProperties(state, ["_blocks"]);

	      this._blocks.forEach(function (b, bi) {
	        return b.state = _blocks[bi];
	      });

	      _set(_getPrototypeOf(MaskedPattern.prototype), "state", maskedState, this, true);
	    }
	  }, {
	    key: "isComplete",
	    get: function get() {
	      return this._blocks.every(function (b) {
	        return b.isComplete;
	      });
	    }
	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this._blocks.reduce(function (str, b) {
	        return str += b.unmaskedValue;
	      }, '');
	    },
	    set: function set(unmaskedValue) {
	      _set(_getPrototypeOf(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "value",
	    get: function get() {
	      // TODO return _value when not in change?
	      return this._blocks.reduce(function (str, b) {
	        return str += b.value;
	      }, '');
	    },
	    set: function set(value) {
	      _set(_getPrototypeOf(MaskedPattern.prototype), "value", value, this, true);
	    }
	  }]);

	  return MaskedPattern;
	}(Masked);
	MaskedPattern.DEFAULTS = {
	  lazy: true,
	  placeholderChar: '_'
	};
	MaskedPattern.STOP_CHAR = '`';
	MaskedPattern.ESCAPE_CHAR = '\\';
	MaskedPattern.InputDefinition = PatternInputDefinition;
	MaskedPattern.FixedDefinition = PatternFixedDefinition;

	function isInput(block) {
	  if (!block) return false;
	  var value = block.value;
	  return !value || block.nearestInputPos(0, DIRECTION.NONE) !== value.length;
	}

	/** Pattern which accepts ranges */
	var MaskedRange =
	/*#__PURE__*/
	function (_MaskedPattern) {
	  _inherits(MaskedRange, _MaskedPattern);

	  function MaskedRange() {
	    _classCallCheck(this, MaskedRange);

	    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedRange).apply(this, arguments));
	  }

	  _createClass(MaskedRange, [{
	    key: "_update",

	    /**
	      @override
	    */
	    value: function _update(opts) {
	      // TODO type
	      opts = Object.assign({
	        to: this.to || 0,
	        from: this.from || 0
	      }, opts);
	      var maxLength = String(opts.to).length;
	      if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
	      opts.maxLength = maxLength;
	      var fromStr = String(opts.from).padStart(maxLength, '0');
	      var toStr = String(opts.to).padStart(maxLength, '0');
	      var sameCharsCount = 0;

	      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
	        ++sameCharsCount;
	      }

	      opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

	      _get(_getPrototypeOf(MaskedRange.prototype), "_update", this).call(this, opts);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "boundaries",
	    value: function boundaries(str) {
	      var minstr = '';
	      var maxstr = '';

	      var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
	          _ref2 = _slicedToArray(_ref, 3),
	          placeholder = _ref2[1],
	          num = _ref2[2];

	      if (num) {
	        minstr = '0'.repeat(placeholder.length) + num;
	        maxstr = '9'.repeat(placeholder.length) + num;
	      }

	      minstr = minstr.padEnd(this.maxLength, '0');
	      maxstr = maxstr.padEnd(this.maxLength, '9');
	      return [minstr, maxstr];
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doPrepare",
	    value: function doPrepare(str) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      str = _get(_getPrototypeOf(MaskedRange.prototype), "doPrepare", this).call(this, str, flags).replace(/\D/g, '');
	      if (!this.autofix) return str;
	      var fromStr = String(this.from).padStart(this.maxLength, '0');
	      var toStr = String(this.to).padStart(this.maxLength, '0');
	      var val = this.value;
	      var prepStr = '';

	      for (var ci = 0; ci < str.length; ++ci) {
	        var nextVal = val + prepStr + str[ci];

	        var _this$boundaries = this.boundaries(nextVal),
	            _this$boundaries2 = _slicedToArray(_this$boundaries, 2),
	            minstr = _this$boundaries2[0],
	            maxstr = _this$boundaries2[1];

	        if (Number(maxstr) < this.from) prepStr += fromStr[nextVal.length - 1];else if (Number(minstr) > this.to) prepStr += toStr[nextVal.length - 1];else prepStr += str[ci];
	      }

	      return prepStr;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate() {
	      var _get2;

	      var str = this.value;
	      var firstNonZero = str.search(/[^0]/);
	      if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

	      var _this$boundaries3 = this.boundaries(str),
	          _this$boundaries4 = _slicedToArray(_this$boundaries3, 2),
	          minstr = _this$boundaries4[0],
	          maxstr = _this$boundaries4[1];

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
	    }
	  }, {
	    key: "_matchFrom",

	    /**
	      Optionally sets max length of pattern.
	      Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
	    */

	    /** Min bound */

	    /** Max bound */

	    /** */
	    get: function get() {
	      return this.maxLength - String(this.from).length;
	    }
	  }, {
	    key: "isComplete",
	    get: function get() {
	      return _get(_getPrototypeOf(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
	    }
	  }]);

	  return MaskedRange;
	}(MaskedPattern);

	/** Date mask */

	var MaskedDate =
	/*#__PURE__*/
	function (_MaskedPattern) {
	  _inherits(MaskedDate, _MaskedPattern);

	  /** Parse string to Date */

	  /** Format Date to string */

	  /** Pattern mask for date according to {@link MaskedDate#format} */

	  /** Start date */

	  /** End date */

	  /** */

	  /**
	    @param {Object} opts
	  */
	  function MaskedDate(opts) {
	    _classCallCheck(this, MaskedDate);

	    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedDate).call(this, Object.assign({}, MaskedDate.DEFAULTS, {}, opts)));
	  }
	  /**
	    @override
	  */


	  _createClass(MaskedDate, [{
	    key: "_update",
	    value: function _update(opts) {
	      if (opts.mask === Date) delete opts.mask;
	      if (opts.pattern) opts.mask = opts.pattern;
	      var blocks = opts.blocks;
	      opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

	      if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
	      if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

	      if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
	        opts.blocks.m.from = opts.min.getMonth() + 1;
	        opts.blocks.m.to = opts.max.getMonth() + 1;

	        if (opts.blocks.m.from === opts.blocks.m.to) {
	          opts.blocks.d.from = opts.min.getDate();
	          opts.blocks.d.to = opts.max.getDate();
	        }
	      }

	      Object.assign(opts.blocks, blocks); // add autofix

	      Object.keys(opts.blocks).forEach(function (bk) {
	        var b = opts.blocks[bk];
	        if (!('autofix' in b)) b.autofix = opts.autofix;
	      });

	      _get(_getPrototypeOf(MaskedDate.prototype), "_update", this).call(this, opts);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate() {
	      var _get2;

	      var date = this.date;

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return (_get2 = _get(_getPrototypeOf(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
	    }
	    /** Checks if date is exists */

	  }, {
	    key: "isDateExist",
	    value: function isDateExist(str) {
	      return this.format(this.parse(str)) === str;
	    }
	    /** Parsed Date */

	  }, {
	    key: "date",
	    get: function get() {
	      return this.isComplete ? this.parse(this.value) : null;
	    },
	    set: function set(date) {
	      this.value = this.format(date);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "typedValue",
	    get: function get() {
	      return this.date;
	    },
	    set: function set(value) {
	      this.date = value;
	    }
	  }]);

	  return MaskedDate;
	}(MaskedPattern);
	MaskedDate.DEFAULTS = {
	  pattern: 'd{.}`m{.}`Y',
	  format: function format(date) {
	    var day = String(date.getDate()).padStart(2, '0');
	    var month = String(date.getMonth() + 1).padStart(2, '0');
	    var year = date.getFullYear();
	    return [day, month, year].join('.');
	  },
	  parse: function parse(str) {
	    var _str$split = str.split('.'),
	        _str$split2 = _slicedToArray(_str$split, 3),
	        day = _str$split2[0],
	        month = _str$split2[1],
	        year = _str$split2[2];

	    return new Date(year, month - 1, day);
	  }
	};

	MaskedDate.GET_DEFAULT_BLOCKS = function () {
	  return {
	    d: {
	      mask: MaskedRange,
	      from: 1,
	      to: 31,
	      maxLength: 2
	    },
	    m: {
	      mask: MaskedRange,
	      from: 1,
	      to: 12,
	      maxLength: 2
	    },
	    Y: {
	      mask: MaskedRange,
	      from: 1900,
	      to: 9999
	    }
	  };
	};

	/**
	  Generic element API to use with mask
	  @interface
	*/
	var MaskElement =
	/*#__PURE__*/
	function () {
	  function MaskElement() {
	    _classCallCheck(this, MaskElement);
	  }

	  _createClass(MaskElement, [{
	    key: "select",

	    /** Safely sets element selection */
	    value: function select(start, end) {
	      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

	      try {
	        this._unsafeSelect(start, end);
	      } catch (e) {}
	    }
	    /** Should be overriden in subclasses */

	  }, {
	    key: "_unsafeSelect",
	    value: function _unsafeSelect(start, end) {}
	    /** Should be overriden in subclasses */

	  }, {
	    key: "bindEvents",

	    /** Should be overriden in subclasses */
	    value: function bindEvents(handlers) {}
	    /** Should be overriden in subclasses */

	  }, {
	    key: "unbindEvents",
	    value: function unbindEvents() {}
	  }, {
	    key: "selectionStart",

	    /** */

	    /** */

	    /** */

	    /** Safely returns selection start */
	    get: function get() {
	      var start;

	      try {
	        start = this._unsafeSelectionStart;
	      } catch (e) {}

	      return start != null ? start : this.value.length;
	    }
	    /** Safely returns selection end */

	  }, {
	    key: "selectionEnd",
	    get: function get() {
	      var end;

	      try {
	        end = this._unsafeSelectionEnd;
	      } catch (e) {}

	      return end != null ? end : this.value.length;
	    }
	  }, {
	    key: "isActive",
	    get: function get() {
	      return false;
	    }
	  }]);

	  return MaskElement;
	}();

	/** Bridge between HTMLElement and {@link Masked} */

	var HTMLMaskElement =
	/*#__PURE__*/
	function (_MaskElement) {
	  _inherits(HTMLMaskElement, _MaskElement);

	  /** Mapping between HTMLElement events and mask internal events */

	  /** HTMLElement to use mask on */

	  /**
	    @param {HTMLInputElement|HTMLTextAreaElement} input
	  */
	  function HTMLMaskElement(input) {
	    var _this;

	    _classCallCheck(this, HTMLMaskElement);

	    _this = _possibleConstructorReturn(this, _getPrototypeOf(HTMLMaskElement).call(this));
	    _this.input = input;
	    _this._handlers = {};
	    return _this;
	  }
	  /**
	    Is element in focus
	    @readonly
	  */


	  _createClass(HTMLMaskElement, [{
	    key: "_unsafeSelect",

	    /**
	      Sets HTMLElement selection
	      @override
	    */
	    value: function _unsafeSelect(start, end) {
	      this.input.setSelectionRange(start, end);
	    }
	    /**
	      HTMLElement value
	      @override
	    */

	  }, {
	    key: "bindEvents",

	    /**
	      Binds HTMLElement events to mask internal events
	      @override
	    */
	    value: function bindEvents(handlers) {
	      var _this2 = this;

	      Object.keys(handlers).forEach(function (event) {
	        return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
	      });
	    }
	    /**
	      Unbinds HTMLElement events to mask internal events
	      @override
	    */

	  }, {
	    key: "unbindEvents",
	    value: function unbindEvents() {
	      var _this3 = this;

	      Object.keys(this._handlers).forEach(function (event) {
	        return _this3._toggleEventHandler(event);
	      });
	    }
	    /** */

	  }, {
	    key: "_toggleEventHandler",
	    value: function _toggleEventHandler(event, handler) {
	      if (this._handlers[event]) {
	        this.input.removeEventListener(event, this._handlers[event]);
	        delete this._handlers[event];
	      }

	      if (handler) {
	        this.input.addEventListener(event, handler);
	        this._handlers[event] = handler;
	      }
	    }
	  }, {
	    key: "isActive",
	    get: function get() {
	      return this.input === document.activeElement;
	    }
	    /**
	      Returns HTMLElement selection start
	      @override
	    */

	  }, {
	    key: "_unsafeSelectionStart",
	    get: function get() {
	      return this.input.selectionStart;
	    }
	    /**
	      Returns HTMLElement selection end
	      @override
	    */

	  }, {
	    key: "_unsafeSelectionEnd",
	    get: function get() {
	      return this.input.selectionEnd;
	    }
	  }, {
	    key: "value",
	    get: function get() {
	      return this.input.value;
	    },
	    set: function set(value) {
	      this.input.value = value;
	    }
	  }]);

	  return HTMLMaskElement;
	}(MaskElement);
	HTMLMaskElement.EVENTS_MAP = {
	  selectionChange: 'keydown',
	  input: 'input',
	  drop: 'drop',
	  click: 'click',
	  focus: 'focus',
	  commit: 'blur'
	};

	/** Listens to element events and controls changes between element and {@link Masked} */

	var InputMask =
	/*#__PURE__*/
	function () {
	  /**
	    View element
	    @readonly
	  */

	  /**
	    Internal {@link Masked} model
	    @readonly
	  */

	  /**
	    @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
	    @param {Object} opts
	  */
	  function InputMask(el, opts) {
	    _classCallCheck(this, InputMask);

	    this.el = el instanceof MaskElement ? el : new HTMLMaskElement(el);
	    this.masked = createMask(opts);
	    this._listeners = {};
	    this._value = '';
	    this._unmaskedValue = '';
	    this._saveSelection = this._saveSelection.bind(this);
	    this._onInput = this._onInput.bind(this);
	    this._onChange = this._onChange.bind(this);
	    this._onDrop = this._onDrop.bind(this);
	    this._onFocus = this._onFocus.bind(this);
	    this.alignCursor = this.alignCursor.bind(this);
	    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

	    this._bindEvents(); // refresh


	    this.updateValue();

	    this._onChange();
	  }
	  /** Read or update mask */


	  _createClass(InputMask, [{
	    key: "_bindEvents",

	    /**
	      Starts listening to element events
	      @protected
	    */
	    value: function _bindEvents() {
	      this.el.bindEvents({
	        selectionChange: this._saveSelection,
	        input: this._onInput,
	        drop: this._onDrop,
	        click: this.alignCursorFriendly,
	        focus: this._onFocus,
	        commit: this._onChange
	      });
	    }
	    /**
	      Stops listening to element events
	      @protected
	     */

	  }, {
	    key: "_unbindEvents",
	    value: function _unbindEvents() {
	      this.el.unbindEvents();
	    }
	    /**
	      Fires custom event
	      @protected
	     */

	  }, {
	    key: "_fireEvent",
	    value: function _fireEvent(ev) {
	      var listeners = this._listeners[ev];
	      if (!listeners) return;
	      listeners.forEach(function (l) {
	        return l();
	      });
	    }
	    /**
	      Current selection start
	      @readonly
	    */

	  }, {
	    key: "_saveSelection",

	    /**
	      Stores current selection
	      @protected
	    */
	    value: function _saveSelection()
	    /* ev */
	    {
	      if (this.value !== this.el.value) {
	        console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
	      }

	      this._selection = {
	        start: this.selectionStart,
	        end: this.cursorPos
	      };
	    }
	    /** Syncronizes model value from view */

	  }, {
	    key: "updateValue",
	    value: function updateValue() {
	      this.masked.value = this.el.value;
	      this._value = this.masked.value;
	    }
	    /** Syncronizes view from model value, fires change events */

	  }, {
	    key: "updateControl",
	    value: function updateControl() {
	      var newUnmaskedValue = this.masked.unmaskedValue;
	      var newValue = this.masked.value;
	      var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
	      this._unmaskedValue = newUnmaskedValue;
	      this._value = newValue;
	      if (this.el.value !== newValue) this.el.value = newValue;
	      if (isChanged) this._fireChangeEvents();
	    }
	    /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

	  }, {
	    key: "updateOptions",
	    value: function updateOptions(opts) {
	      var mask = opts.mask,
	          restOpts = _objectWithoutProperties(opts, ["mask"]);

	      this.mask = mask;
	      if (!objectIncludes(this.masked, restOpts)) this.masked.updateOptions(restOpts);
	      this.updateControl();
	    }
	    /** Updates cursor */

	  }, {
	    key: "updateCursor",
	    value: function updateCursor(cursorPos) {
	      if (cursorPos == null) return;
	      this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

	      this._delayUpdateCursor(cursorPos);
	    }
	    /**
	      Delays cursor update to support mobile browsers
	      @private
	    */

	  }, {
	    key: "_delayUpdateCursor",
	    value: function _delayUpdateCursor(cursorPos) {
	      var _this = this;

	      this._abortUpdateCursor();

	      this._changingCursorPos = cursorPos;
	      this._cursorChanging = setTimeout(function () {
	        if (!_this.el) return; // if was destroyed

	        _this.cursorPos = _this._changingCursorPos;

	        _this._abortUpdateCursor();
	      }, 10);
	    }
	    /**
	      Fires custom events
	      @protected
	    */

	  }, {
	    key: "_fireChangeEvents",
	    value: function _fireChangeEvents() {
	      this._fireEvent('accept');

	      if (this.masked.isComplete) this._fireEvent('complete');
	    }
	    /**
	      Aborts delayed cursor update
	      @private
	    */

	  }, {
	    key: "_abortUpdateCursor",
	    value: function _abortUpdateCursor() {
	      if (this._cursorChanging) {
	        clearTimeout(this._cursorChanging);
	        delete this._cursorChanging;
	      }
	    }
	    /** Aligns cursor to nearest available position */

	  }, {
	    key: "alignCursor",
	    value: function alignCursor() {
	      this.cursorPos = this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT);
	    }
	    /** Aligns cursor only if selection is empty */

	  }, {
	    key: "alignCursorFriendly",
	    value: function alignCursorFriendly() {
	      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

	      this.alignCursor();
	    }
	    /** Adds listener on custom event */

	  }, {
	    key: "on",
	    value: function on(ev, handler) {
	      if (!this._listeners[ev]) this._listeners[ev] = [];

	      this._listeners[ev].push(handler);

	      return this;
	    }
	    /** Removes custom event listener */

	  }, {
	    key: "off",
	    value: function off(ev, handler) {
	      if (!this._listeners[ev]) return this;

	      if (!handler) {
	        delete this._listeners[ev];
	        return this;
	      }

	      var hIndex = this._listeners[ev].indexOf(handler);

	      if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
	      return this;
	    }
	    /** Handles view input event */

	  }, {
	    key: "_onInput",
	    value: function _onInput() {
	      this._abortUpdateCursor(); // fix strange IE behavior


	      if (!this._selection) return this.updateValue();
	      var details = new ActionDetails( // new state
	      this.el.value, this.cursorPos, // old state
	      this.value, this._selection);
	      var oldRawValue = this.masked.rawInputValue;
	      var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
	      // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

	      var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
	      var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
	      this.updateControl();
	      this.updateCursor(cursorPos);
	    }
	    /** Handles view change event and commits model value */

	  }, {
	    key: "_onChange",
	    value: function _onChange() {
	      if (this.value !== this.el.value) {
	        this.updateValue();
	      }

	      this.masked.doCommit();
	      this.updateControl();

	      this._saveSelection();
	    }
	    /** Handles view drop event, prevents by default */

	  }, {
	    key: "_onDrop",
	    value: function _onDrop(ev) {
	      ev.preventDefault();
	      ev.stopPropagation();
	    }
	    /** Restore last selection on focus */

	  }, {
	    key: "_onFocus",
	    value: function _onFocus(ev) {
	      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

	      if (this._selection) this.cursorPos = this._selection.end;
	      this.alignCursorFriendly();
	    }
	    /** Unbind view events and removes element reference */

	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this._unbindEvents(); // $FlowFixMe why not do so?


	      this._listeners.length = 0;
	      delete this.el;
	    }
	  }, {
	    key: "mask",
	    get: function get() {
	      return this.masked.mask;
	    },
	    set: function set(mask) {
	      if (mask == null || mask === this.masked.mask || mask === Date && this.masked instanceof MaskedDate) return;

	      if (this.masked.constructor === maskedClass(mask)) {
	        this.masked.updateOptions({
	          mask: mask
	        });
	        return;
	      }

	      var masked = createMask({
	        mask: mask
	      });
	      masked.unmaskedValue = this.masked.unmaskedValue;
	      this.masked = masked;
	    }
	    /** Raw value */

	  }, {
	    key: "value",
	    get: function get() {
	      return this._value;
	    },
	    set: function set(str) {
	      this.masked.value = str;
	      this.updateControl();
	      this.alignCursor();
	    }
	    /** Unmasked value */

	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this._unmaskedValue;
	    },
	    set: function set(str) {
	      this.masked.unmaskedValue = str;
	      this.updateControl();
	      this.alignCursor();
	    }
	    /** Typed unmasked value */

	  }, {
	    key: "typedValue",
	    get: function get() {
	      return this.masked.typedValue;
	    },
	    set: function set(val) {
	      this.masked.typedValue = val;
	      this.updateControl();
	      this.alignCursor();
	    }
	  }, {
	    key: "selectionStart",
	    get: function get() {
	      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
	    }
	    /** Current cursor position */

	  }, {
	    key: "cursorPos",
	    get: function get() {
	      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
	    },
	    set: function set(pos) {
	      if (!this.el.isActive) return;
	      this.el.select(pos, pos);

	      this._saveSelection();
	    }
	  }]);

	  return InputMask;
	}();

	/** Pattern which validates enum values */

	var MaskedEnum =
	/*#__PURE__*/
	function (_MaskedPattern) {
	  _inherits(MaskedEnum, _MaskedPattern);

	  function MaskedEnum() {
	    _classCallCheck(this, MaskedEnum);

	    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedEnum).apply(this, arguments));
	  }

	  _createClass(MaskedEnum, [{
	    key: "_update",

	    /**
	      @override
	      @param {Object} opts
	    */
	    value: function _update(opts) {
	      // TODO type
	      if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

	      _get(_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, opts);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate() {
	      var _this = this,
	          _get2;

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return this.enum.some(function (e) {
	        return e.indexOf(_this.unmaskedValue) >= 0;
	      }) && (_get2 = _get(_getPrototypeOf(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
	    }
	  }]);

	  return MaskedEnum;
	}(MaskedPattern);

	/**
	  Number mask
	  @param {Object} opts
	  @param {string} opts.radix - Single char
	  @param {string} opts.thousandsSeparator - Single char
	  @param {Array<string>} opts.mapToRadix - Array of single chars
	  @param {number} opts.min
	  @param {number} opts.max
	  @param {number} opts.scale - Digits after point
	  @param {boolean} opts.signed - Allow negative
	  @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
	  @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
	*/
	var MaskedNumber =
	/*#__PURE__*/
	function (_Masked) {
	  _inherits(MaskedNumber, _Masked);

	  /** Single char */

	  /** Single char */

	  /** Array of single chars */

	  /** */

	  /** */

	  /** Digits after point */

	  /** */

	  /** Flag to remove leading and trailing zeros in the end of editing */

	  /** Flag to pad trailing zeros after point in the end of editing */
	  function MaskedNumber(opts) {
	    _classCallCheck(this, MaskedNumber);

	    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedNumber).call(this, Object.assign({}, MaskedNumber.DEFAULTS, {}, opts)));
	  }
	  /**
	    @override
	  */


	  _createClass(MaskedNumber, [{
	    key: "_update",
	    value: function _update(opts) {
	      _get(_getPrototypeOf(MaskedNumber.prototype), "_update", this).call(this, opts);

	      this._updateRegExps();
	    }
	    /** */

	  }, {
	    key: "_updateRegExps",
	    value: function _updateRegExps() {
	      // use different regexp to process user input (more strict, input suffix) and tail shifting
	      var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
	      var midInput = '(0|([1-9]+\\d*))?';
	      var mid = '\\d*';
	      var end = (this.scale ? '(' + escapeRegExp(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
	      this._numberRegExpInput = new RegExp(start + midInput + end);
	      this._numberRegExp = new RegExp(start + mid + end);
	      this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(escapeRegExp).join('') + ']', 'g');
	      this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
	    }
	    /** */

	  }, {
	    key: "_removeThousandsSeparators",
	    value: function _removeThousandsSeparators(value) {
	      return value.replace(this._thousandsSeparatorRegExp, '');
	    }
	    /** */

	  }, {
	    key: "_insertThousandsSeparators",
	    value: function _insertThousandsSeparators(value) {
	      // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
	      var parts = value.split(this.radix);
	      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
	      return parts.join(this.radix);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doPrepare",
	    value: function doPrepare(str) {
	      var _get2;

	      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      return (_get2 = _get(_getPrototypeOf(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix))].concat(args));
	    }
	    /** */

	  }, {
	    key: "_separatorsCount",
	    value: function _separatorsCount(to) {
	      var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      var count = 0;

	      for (var pos = 0; pos < to; ++pos) {
	        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
	          ++count;
	          if (extendOnSeparators) to += this.thousandsSeparator.length;
	        }
	      }

	      return count;
	    }
	    /** */

	  }, {
	    key: "_separatorsCountFromSlice",
	    value: function _separatorsCountFromSlice() {
	      var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
	      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "extractInput",
	    value: function extractInput() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
	      var flags = arguments.length > 2 ? arguments[2] : undefined;

	      var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

	      var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);

	      fromPos = _this$_adjustRangeWit2[0];
	      toPos = _this$_adjustRangeWit2[1];
	      return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "_appendCharRaw",
	    value: function _appendCharRaw(ch) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      if (!this.thousandsSeparator) return _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
	      var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

	      var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

	      this._value = this._removeThousandsSeparators(this.value);

	      var appendDetails = _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

	      this._value = this._insertThousandsSeparators(this._value);
	      var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

	      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

	      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
	      return appendDetails;
	    }
	    /** */

	  }, {
	    key: "_findSeparatorAround",
	    value: function _findSeparatorAround(pos) {
	      if (this.thousandsSeparator) {
	        var searchFrom = pos - this.thousandsSeparator.length + 1;
	        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
	        if (separatorPos <= pos) return separatorPos;
	      }

	      return -1;
	    }
	  }, {
	    key: "_adjustRangeWithSeparators",
	    value: function _adjustRangeWithSeparators(from, to) {
	      var separatorAroundFromPos = this._findSeparatorAround(from);

	      if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

	      var separatorAroundToPos = this._findSeparatorAround(to);

	      if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
	      return [from, to];
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "remove",
	    value: function remove() {
	      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

	      var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

	      var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);

	      fromPos = _this$_adjustRangeWit4[0];
	      toPos = _this$_adjustRangeWit4[1];
	      var valueBeforePos = this.value.slice(0, fromPos);
	      var valueAfterPos = this.value.slice(toPos);

	      var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

	      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

	      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

	      return new ChangeDetails({
	        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
	      });
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos(cursorPos, direction) {
	      if (!this.thousandsSeparator) return cursorPos;

	      switch (direction) {
	        case DIRECTION.NONE:
	        case DIRECTION.LEFT:
	        case DIRECTION.FORCE_LEFT:
	          {
	            var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

	            if (separatorAtLeftPos >= 0) {
	              var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

	              if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
	                return separatorAtLeftPos;
	              }
	            }

	            break;
	          }

	        case DIRECTION.RIGHT:
	        case DIRECTION.FORCE_RIGHT:
	          {
	            var separatorAtRightPos = this._findSeparatorAround(cursorPos);

	            if (separatorAtRightPos >= 0) {
	              return separatorAtRightPos + this.thousandsSeparator.length;
	            }
	          }
	      }

	      return cursorPos;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate(flags) {
	      var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

	      var valid = regexp.test(this._removeThousandsSeparators(this.value));

	      if (valid) {
	        // validate as number
	        var number = this.number;
	        valid = valid && !isNaN(number) && ( // check min bound for negative values
	        this.min == null || this.min >= 0 || this.min <= this.number) && ( // check max bound for positive values
	        this.max == null || this.max <= 0 || this.number <= this.max);
	      }

	      return valid && _get(_getPrototypeOf(MaskedNumber.prototype), "doValidate", this).call(this, flags);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doCommit",
	    value: function doCommit() {
	      if (this.value) {
	        var number = this.number;
	        var validnum = number; // check bounds

	        if (this.min != null) validnum = Math.max(validnum, this.min);
	        if (this.max != null) validnum = Math.min(validnum, this.max);
	        if (validnum !== number) this.unmaskedValue = String(validnum);
	        var formatted = this.value;
	        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
	        if (this.padFractionalZeros) formatted = this._padFractionalZeros(formatted);
	        this._value = formatted;
	      }

	      _get(_getPrototypeOf(MaskedNumber.prototype), "doCommit", this).call(this);
	    }
	    /** */

	  }, {
	    key: "_normalizeZeros",
	    value: function _normalizeZeros(value) {
	      var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


	      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
	        return sign + num;
	      }); // add leading zero

	      if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

	      if (parts.length > 1) {
	        parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

	        if (!parts[1].length) parts.length = 1; // remove fractional
	      }

	      return this._insertThousandsSeparators(parts.join(this.radix));
	    }
	    /** */

	  }, {
	    key: "_padFractionalZeros",
	    value: function _padFractionalZeros(value) {
	      if (!value) return value;
	      var parts = value.split(this.radix);
	      if (parts.length < 2) parts.push('');
	      parts[1] = parts[1].padEnd(this.scale, '0');
	      return parts.join(this.radix);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
	    },
	    set: function set(unmaskedValue) {
	      _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
	    }
	    /** Parsed Number */

	  }, {
	    key: "number",
	    get: function get() {
	      return Number(this.unmaskedValue);
	    },
	    set: function set(number) {
	      this.unmaskedValue = String(number);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "typedValue",
	    get: function get() {
	      return this.number;
	    },
	    set: function set(value) {
	      this.number = value;
	    }
	    /**
	      Is negative allowed
	      @readonly
	    */

	  }, {
	    key: "allowNegative",
	    get: function get() {
	      return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
	    }
	  }]);

	  return MaskedNumber;
	}(Masked);
	MaskedNumber.DEFAULTS = {
	  radix: ',',
	  thousandsSeparator: '',
	  mapToRadix: ['.'],
	  scale: 2,
	  signed: false,
	  normalizeZeros: true,
	  padFractionalZeros: false
	};

	/** Masking by RegExp */

	var MaskedRegExp =
	/*#__PURE__*/
	function (_Masked) {
	  _inherits(MaskedRegExp, _Masked);

	  function MaskedRegExp() {
	    _classCallCheck(this, MaskedRegExp);

	    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedRegExp).apply(this, arguments));
	  }

	  _createClass(MaskedRegExp, [{
	    key: "_update",

	    /**
	      @override
	      @param {Object} opts
	    */
	    value: function _update(opts) {
	      if (opts.mask) opts.validate = function (value) {
	        return value.search(opts.mask) >= 0;
	      };

	      _get(_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, opts);
	    }
	  }]);

	  return MaskedRegExp;
	}(Masked);

	/** Masking by custom Function */

	var MaskedFunction =
	/*#__PURE__*/
	function (_Masked) {
	  _inherits(MaskedFunction, _Masked);

	  function MaskedFunction() {
	    _classCallCheck(this, MaskedFunction);

	    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedFunction).apply(this, arguments));
	  }

	  _createClass(MaskedFunction, [{
	    key: "_update",

	    /**
	      @override
	      @param {Object} opts
	    */
	    value: function _update(opts) {
	      if (opts.mask) opts.validate = opts.mask;

	      _get(_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, opts);
	    }
	  }]);

	  return MaskedFunction;
	}(Masked);

	/** Dynamic mask for choosing apropriate mask in run-time */
	var MaskedDynamic =
	/*#__PURE__*/
	function (_Masked) {
	  _inherits(MaskedDynamic, _Masked);

	  /** Currently chosen mask */

	  /** Compliled {@link Masked} options */

	  /** Chooses {@link Masked} depending on input value */

	  /**
	    @param {Object} opts
	  */
	  function MaskedDynamic(opts) {
	    var _this;

	    _classCallCheck(this, MaskedDynamic);

	    _this = _possibleConstructorReturn(this, _getPrototypeOf(MaskedDynamic).call(this, Object.assign({}, MaskedDynamic.DEFAULTS, {}, opts)));
	    _this.currentMask = null;
	    return _this;
	  }
	  /**
	    @override
	  */


	  _createClass(MaskedDynamic, [{
	    key: "_update",
	    value: function _update(opts) {
	      _get(_getPrototypeOf(MaskedDynamic.prototype), "_update", this).call(this, opts);

	      if ('mask' in opts) {
	        // mask could be totally dynamic with only `dispatch` option
	        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
	          return createMask(m);
	        }) : [];
	      }
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "_appendCharRaw",
	    value: function _appendCharRaw() {
	      var details = this._applyDispatch.apply(this, arguments);

	      if (this.currentMask) {
	        var _this$currentMask;

	        details.aggregate((_this$currentMask = this.currentMask)._appendChar.apply(_this$currentMask, arguments));
	      }

	      return details;
	    }
	  }, {
	    key: "_applyDispatch",
	    value: function _applyDispatch() {
	      var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
	      var inputValue = this.rawInputValue;
	      var insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
	      flags._beforeTailState._rawInputValue : inputValue;
	      var tailValue = inputValue.slice(insertValue.length);
	      var prevMask = this.currentMask;
	      var details = new ChangeDetails();
	      var prevMaskState = prevMask && prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

	      this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

	      if (this.currentMask) {
	        if (this.currentMask !== prevMask) {
	          // if mask changed reapply input
	          this.currentMask.reset(); // $FlowFixMe - it's ok, we don't change current mask above

	          var d = this.currentMask.append(insertValue, {
	            raw: true
	          });
	          details.tailShift = d.inserted.length - prevValueBeforeTail.length;

	          if (tailValue) {
	            // $FlowFixMe - it's ok, we don't change current mask above
	            details.tailShift += this.currentMask.append(tailValue, {
	              raw: true,
	              tail: true
	            }).tailShift;
	          }
	        } else {
	          // Dispatch can do something bad with state, so
	          // restore prev mask state
	          this.currentMask.state = prevMaskState;
	        }
	      }

	      return details;
	    }
	  }, {
	    key: "_appendPlaceholder",
	    value: function _appendPlaceholder() {
	      var details = this._applyDispatch.apply(this, arguments);

	      if (this.currentMask) {
	        details.aggregate(this.currentMask._appendPlaceholder());
	      }

	      return details;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doDispatch",
	    value: function doDispatch(appended) {
	      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      return this.dispatch(appended, this, flags);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doValidate",
	    value: function doValidate() {
	      var _get2, _this$currentMask2;

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return (_get2 = _get(_getPrototypeOf(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask2 = this.currentMask).doValidate.apply(_this$currentMask2, args));
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "reset",
	    value: function reset() {
	      if (this.currentMask) this.currentMask.reset();
	      this.compiledMasks.forEach(function (m) {
	        return m.reset();
	      });
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "remove",

	    /**
	      @override
	    */
	    value: function remove() {
	      var details = new ChangeDetails();

	      if (this.currentMask) {
	        var _this$currentMask3;

	        details.aggregate((_this$currentMask3 = this.currentMask).remove.apply(_this$currentMask3, arguments)) // update with dispatch
	        .aggregate(this._applyDispatch());
	      }

	      return details;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "extractInput",

	    /**
	      @override
	    */
	    value: function extractInput() {
	      var _this$currentMask4;

	      return this.currentMask ? (_this$currentMask4 = this.currentMask).extractInput.apply(_this$currentMask4, arguments) : '';
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "extractTail",
	    value: function extractTail() {
	      var _this$currentMask5, _get3;

	      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      return this.currentMask ? (_this$currentMask5 = this.currentMask).extractTail.apply(_this$currentMask5, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "doCommit",
	    value: function doCommit() {
	      if (this.currentMask) this.currentMask.doCommit();

	      _get(_getPrototypeOf(MaskedDynamic.prototype), "doCommit", this).call(this);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "nearestInputPos",
	    value: function nearestInputPos() {
	      var _this$currentMask6, _get4;

	      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }

	      return this.currentMask ? (_this$currentMask6 = this.currentMask).nearestInputPos.apply(_this$currentMask6, args) : (_get4 = _get(_getPrototypeOf(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
	    }
	  }, {
	    key: "value",
	    get: function get() {
	      return this.currentMask ? this.currentMask.value : '';
	    },
	    set: function set(value) {
	      _set(_getPrototypeOf(MaskedDynamic.prototype), "value", value, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "unmaskedValue",
	    get: function get() {
	      return this.currentMask ? this.currentMask.unmaskedValue : '';
	    },
	    set: function set(unmaskedValue) {
	      _set(_getPrototypeOf(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "typedValue",
	    get: function get() {
	      return this.currentMask ? this.currentMask.typedValue : '';
	    } // probably typedValue should not be used with dynamic
	    ,
	    set: function set(value) {
	      var unmaskedValue = String(value); // double check it

	      if (this.currentMask) {
	        this.currentMask.typedValue = value;
	        unmaskedValue = this.currentMask.unmaskedValue;
	      }

	      this.unmaskedValue = unmaskedValue;
	    }
	    /**
	      @override
	    */

	  }, {
	    key: "isComplete",
	    get: function get() {
	      return !!this.currentMask && this.currentMask.isComplete;
	    }
	  }, {
	    key: "state",
	    get: function get() {
	      return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic.prototype), "state", this), {
	        _rawInputValue: this.rawInputValue,
	        compiledMasks: this.compiledMasks.map(function (m) {
	          return m.state;
	        }),
	        currentMaskRef: this.currentMask,
	        currentMask: this.currentMask && this.currentMask.state
	      });
	    },
	    set: function set(state) {
	      var compiledMasks = state.compiledMasks,
	          currentMaskRef = state.currentMaskRef,
	          currentMask = state.currentMask,
	          maskedState = _objectWithoutProperties(state, ["compiledMasks", "currentMaskRef", "currentMask"]);

	      this.compiledMasks.forEach(function (m, mi) {
	        return m.state = compiledMasks[mi];
	      });

	      if (currentMaskRef != null) {
	        this.currentMask = currentMaskRef;
	        this.currentMask.state = currentMask;
	      }

	      _set(_getPrototypeOf(MaskedDynamic.prototype), "state", maskedState, this, true);
	    }
	  }]);

	  return MaskedDynamic;
	}(Masked);
	MaskedDynamic.DEFAULTS = {
	  dispatch: function dispatch(appended, masked, flags) {
	    if (!masked.compiledMasks.length) return;
	    var inputValue = masked.rawInputValue; // simulate input

	    var inputs = masked.compiledMasks.map(function (m, index) {
	      m.reset();
	      m.append(inputValue, {
	        raw: true
	      });
	      m.append(appended, flags);
	      var weight = m.rawInputValue.length;
	      return {
	        weight: weight,
	        index: index
	      };
	    }); // pop masks with longer values first

	    inputs.sort(function (i1, i2) {
	      return i2.weight - i1.weight;
	    });
	    return masked.compiledMasks[inputs[0].index];
	  }
	};

	/**
	 * Applies mask on element.
	 * @constructor
	 * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
	 * @param {Object} opts - Custom mask options
	 * @return {InputMask}
	 */

	function IMask(el) {
	  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  // currently available only for input-like elements
	  return new InputMask(el, opts);
	}
	/** {@link InputMask} */

	IMask.InputMask = InputMask;
	/** {@link Masked} */

	IMask.Masked = Masked;
	/** {@link MaskedPattern} */

	IMask.MaskedPattern = MaskedPattern;
	/** {@link MaskedEnum} */

	IMask.MaskedEnum = MaskedEnum;
	/** {@link MaskedRange} */

	IMask.MaskedRange = MaskedRange;
	/** {@link MaskedNumber} */

	IMask.MaskedNumber = MaskedNumber;
	/** {@link MaskedDate} */

	IMask.MaskedDate = MaskedDate;
	/** {@link MaskedRegExp} */

	IMask.MaskedRegExp = MaskedRegExp;
	/** {@link MaskedFunction} */

	IMask.MaskedFunction = MaskedFunction;
	/** {@link MaskedDynamic} */

	IMask.MaskedDynamic = MaskedDynamic;
	/** {@link createMask} */

	IMask.createMask = createMask;
	/** {@link MaskElement} */

	IMask.MaskElement = MaskElement;
	/** {@link HTMLMaskElement} */

	IMask.HTMLMaskElement = HTMLMaskElement;
	g.IMask = IMask;

	return IMask;

}));
//# sourceMappingURL=imask.js.map

(function($) {
    "use strict"
    $(function() {
        
        if($('.banner').length > 0) {
            var listItem = '<li data-id="%id"><a class="banner__footer__list__block"><div class="banner__footer__list__block__title is--typer_fb--on">%title</div><div class="banner__footer__list__block__price is--typer_fb--tw">%price ₽</div></a></li>';
            var listTotal = $('.banner__content__list__item');
            var currentSlider = 1
            var isSlide = true

            for(var i = 0; i < listTotal.length; i++) {
                $(listTotal[i]).removeClass('is--active')

                var thisPrice = $(listTotal[i]).data('price')
                var thisTitle = $(listTotal[i]).data('name')
                var thisId = $(listTotal[i]).data('id')

                var finalListItem = listItem.replace('%title', thisTitle)
                    finalListItem = finalListItem.replace('%price', thisPrice)
                    finalListItem = finalListItem.replace('%id', thisId)


                $('.banner__footer__list ul').append(finalListItem)
            }

            $(listTotal[currentSlider - 1]).addClass('is--active');

            function setSlide(id) {
                if(isSlide) {
                    isSlide = false
                    currentSlider = id

                    $('.banner__content__list__item').removeClass('is--active');
                    $('.banner__content__list__item:not([data-id="' + id + '"])').addClass('is--clos');
                    $('.banner__content__list__item[data-id="' + id + '"]').addClass('is--active')

                    $('.banner__footer__list li').removeClass('is--active')
                    $('.banner__footer__list li[data-id="' + currentSlider + '"]').addClass('is--active is--clos animated fadeInRight')
                    $('.banner__footer__list li[data-id="' + (currentSlider + 1) + '"]').addClass('is--active is--clos animated fadeInRight')
                    

                    if(currentSlider >= $('.banner__content__list__item').length) {
                        $('.banner__footer__list li[data-id="' + 1 + '"]').addClass('is--active animated fadeInRight')
                    }

                    setTimeout(function() {
                        $('.banner__content__list__item').removeClass('is--clos')
                        $('.banner__footer__list li').removeClass('is--clos animated fadeInRight')
                        setTimeout(function() {
                            isSlide = true
                        }, 600)
                    }, 1500)
                }
            }

            setSlide(1)

            var carouselTimer = setInterval(function() {
                
                setSlide(currentSlider)
                currentSlider++;

                if(currentSlider > $('.banner__content__list__item').length) currentSlider = 1

            }, 4000)

            $('.banner__footer__next__block__inner').on('click', function() {
                
                setSlide(currentSlider)
                currentSlider++;

                if(currentSlider > $('.banner__content__list__item').length) currentSlider = 1

            })
        }

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        var colors = [
            'data:image/png;base64,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',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAGmCAYAAAA0z7tHAAAACXBIWXMAAAsTAAALEwEAmpwYAAA4JmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTktMDktMjNUMDk6NTg6NDQrMDM6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxOS0wOS0yM1QxMDozMjoxNiswMzowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTktMDktMjNUMTA6MzI6MTYrMDM6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6YmQxZmIzYzQtZjFlOC05MzQyLTk2MGItYmRhN2MxM2I4MzE2PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOmJkMWZiM2M0LWYxZTgtOTM0Mi05NjBiLWJkYTdjMTNiODMxNjwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOmJkMWZiM2M0LWYxZTgtOTM0Mi05NjBiLWJkYTdjMTNiODMxNjwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpiZDFmYjNjNC1mMWU4LTkzNDItOTYwYi1iZGE3YzEzYjgzMTY8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTktMDktMjNUMDk6NTg6NDQrMDM6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MjA2PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjQyMjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAg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',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAGmCAYAAAA0z7tHAAAACXBIWXMAAAsTAAALEwEAmpwYAAA57mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTktMDktMjNUMDk6NTg6NDQrMDM6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxOS0wOS0yM1QxMDo0MTo1NyswMzowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTktMDktMjNUMTA6NDE6NTcrMDM6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6M2VjMjE0NDktYjViNC1kMTQzLWFlYTctYzY0OWRiNTRiMDc3PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD5hZG9iZTpkb2NpZDpwaG90b3Nob3A6OGFlN2Q2YmUtZGRkNS0xMWU5LWEzMWEtODk2ZDY0NzY5ZTgyPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6YThkYWYyYTctNjI2Mi01ODQwLWFhNTMtZDE5Y2E1MDg5MDQ3PC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmE4ZGFmMmE3LTYyNjItNTg0MC1hYTUzLWQxOWNhNTA4OTA0Nzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxOS0wOS0yM1QwOTo1ODo0NCswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDozZWMyMTQ0OS1iNWI0LWQxNDMtYWVhNy1jNjQ5ZGI1NGIwNzc8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTktMDktMjNUMTA6NDE6NTcrMDM6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MjA2PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjQyMjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+F4p8cwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAB7aUlEQVR42uy9eZQm2VUf+Lv3RXxLblVZe3V1V69q7RJCEg2SLGSwGQx4GTBjzsHY4NF4mMHHG41B9hzDeDzTHlsGG2/Yxx6bY7xgM2P7+Ix3xpYBoUYCtPZevVXXmlm5Z35LxHt3/njvRbyIL74ls7K6s1rv9smuqsz8toj4xb33d+/9XRIRRDsa9uQnP4HHHn+CXvvNJ//NtS88+a2bm1v41aeexQPH5p9/9MzyjwD4VwDw2ONPxIP1BhvHQ3A0jYjAikHxUETgRJvdRATGiAOR/SMelQicaDN4HCJAsQITA0CMqSNwok0yYzSMEYgRaKMLLMUjE4ETbZK3YQYTAURgYjgCJ3qcCJxoEz2O1iQQQARMBBOZzwicaLPlN8YIjAiYi1Ok45GJwIk2wWxoJqg5mniuInCiTfE5QkRgtsxazHEicKLN5nMIsDRa4HUiqxaBE22qz/E4EYkeJwIn2n4IAlQZ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',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAGmCAYAAAA0z7tHAAAACXBIWXMAAAsTAAALEwEAmpwYAAA57mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTktMDktMjNUMDk6NTg6NDQrMDM6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxOS0wOS0yM1QxMDo1NzoxMiswMzowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTktMDktMjNUMTA6NTc6MTIrMDM6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6NzhmODNjZDItNGIyZi1iODQ2LTkxODEtMmVmNTI0MDk5NjI0PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD5hZG9iZTpkb2NpZDpwaG90b3Nob3A6Nzk0ZmRjYWQtZGRkNy0xMWU5LWEzMWEtODk2ZDY0NzY5ZTgyPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6NjBkOWNkNDYtOWY3Yi0zYzQxLWJkNTktNTFlNmZiY2MzNGI1PC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjYwZDljZDQ2LTlmN2ItM2M0MS1iZDU5LTUxZTZmYmNjMzRiNTwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxOS0wOS0yM1QwOTo1ODo0NCswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo3OGY4M2NkMi00YjJmLWI4NDYtOTE4MS0yZWY1MjQwOTk2MjQ8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTktMDktMjNUMTA6NTc6MTIrMDM6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MjA2PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjQyMjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+YwmK2QAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAB8TElEQVR42uz9eZxs2XEeBn4R596bmbW+pd7e+76h0QAIEiBAihQFbhaHWs2hKFsejmjZIi1yJFkGZdOmZFuAPdZMazwaSZQ5osyfxpK1+Df6SSNKY0KiQA4pmASxEOi9+71++1p75XbPifnjnHPvuUtmZdWrt3TjBFl4r+tlZWXevN+JiC8iviARQbT7yuhLv/W1f/wbv/Zbv/fGzZt4/fWvY2nx8OcW5478KIBzAPCZlz8dr9I9No6X4D5EDkEIBCYCiPy3TbwyETjRppgISAgoogEq0RMtAifaNK8jABGDmaCYASCCJwIn2lSPAyNGDIwYGBNz0AicaLN5GzAxMxgEIkIkcCJwos1gRgwEgEBARDDR7UTgRJvB4xBEjA3TmCnmNxE40WbKcYyQiFh6zWJGIngicKLtnuQIEYGst4GI8eCJFoETbbLLsd6FiCARLxE40fbgcZgtQSCIrFoETrRZPQ4VSU0ETQROtNkcDpOACESM6GwicKLt1fGIARHFVrUInGiz2KA/fENEIGJZgpjjROBE28V++qc+K2+9fu7zFjUE5vgRReBEmzFEE/HehphgoseJwIk2w4fCiojZkgNGYstABE60WY1ghz+NIwiiReBE28WM0S5UI1D8iCJwos2a47jOTpGiXy1aBE603cI01+QJii3RETjR9kQOwPWoEcWPKAIn2uxeh23LTSQGInCi7TnXEdc1ENETgRNthhyHxOU6DjJiJQiiReBE283bWI8T6HRErxOBE22XEM1JDXh5qAiaCJxos30wRICTh5I4lROBE21GrwPAiMDYDgKKoVoETrRdTGuN0Mk4Sjp6nQicaNNMKQX2hU/xkh3RInCizRCqWawwM5hVvCARONF2MyKyLsY5GmN0DNUicKLtZnmek+0aiJ/V/WpJvAT3s+cBWDGYVPQ40eNEm4Uc8M2dEjsHInCi7YUdEPeHlHxBtAicaLt8MMRhU3QsgEbgRNvNjNEibmWBEeO9TvQ4ETjRpn4orMh1eYKtBG4ETQROtN1Maw2BHWIzgjgFGoETbRbzrBoTRwncCJxoezW7+DNGaRE40faGGliVG2NMZNUicKLNZAS3WEo8ORBdTwROtJmcTqFyE71NBE60mUED2LECCfpuokXgRJtgRowBbA3HqXnGzykCJ9putr66ua219EGAsRiSGK5F4ETbxS5fvLYxGo5uithQDVFzIAIn2mwpjhFDEIkF0AicaHswgkBYWa0Bjr1qETjRZvM4FjxOkDCK3ETgRJvN41i8SGzwvE8tag7c7ycbMyARPBE40WZ1OcRKQYxAInJiqBZtNjMuTCPFoEhFR+BE2wtFIFH9NgIn2p4+GLKTOK5zIFrMcaLNFKoZ1xZNUTs6epxoMwdpzIUkISR6nQicaDMZGRHAad1QLOZE4ESbETmAEBGIGVrryBDEHCfaLKGaZaMJBAIojhREjxNtD/CxvTcU53EicKLtDz/xKkTgRJspxSlA0/LXaDHHiTb9ZFMMZWKoFj1OtJkjNMuomehxInCi7S1cs1iJZZwInGh78jmChDmy0RE40WbHjOscYI51nAicaLPihpmEiO1Kw5jfROBEmy2/EQGJCIwx0d1E4ESb1ePYThu7ZCpaBE602aEjUuY60elE4ESbJVQD2SZPuzyXY44TgRNtNuRYQoCYwBwdTgROtNnBY71NvBARONH29OEQwRgDE/dKReBEm40a8KMEkReIwIm2lyjNj04TI2InAifazMixG6eZKdZyInCizWqj4WhD4PrVosuJwIm2uxljZHNj+zocJR3340TgRJuRHCAip+Up0FpHlxOBE22WFAewdDRAYFbR5UTgRJvZ7UBgO6R1vBgRONFmdzsEZhVZtQicaLPyA3C1T2X71GKOE4ETbZbPRURExG5mM7HnJgIn2p4TnWgRONH2ABcCbA0n1nEicKLNygsArmsg7seJwIm2F3JAxBgQMdI0i1ckAifazB4HdgJ0u7/2IZDEzyoCJ9puwHEGEUCLiaFaBE60PbueSA5E4ESbOccp5nGiReBEm/FzkYCDzsd5vCIRONH2kOe4PaDxYkTgRJs1tRFb/IzNAxE40fbBDACm3MoWLQIn2hSTMl5DJAgicKLtBTieHiBmAmIBNAIn2kxBmp2cJijFiw8+duyj8bJE4ETbDTlEboOhIM9zGo9HMV6LwIk2U7wWdAzoqDsQgRNtxhwHgJioqxaBE20v3qaYwhExUBwFOyJwos1kxghAEnfkROBEm5UbcK4GRgCtdfm9aBE40abmOEERlKBUVPOMwIk2m8cJgMNRlDACJ9qs8CGIsX1qWdQdiMCJNrvXIbYLpqIMbgROtNnzHDDZOo4jCKJF4ETbHToCrY0rgEpk1SJwok39UJil2+ssC4SICNoYABRZtQicaLt9LnPz3eOekGaKC3QjcKLNFqQJAKKiuVMkhmoRONF2MxLnbkQEAokF0AicaDMhx2nbiAgIiAt0I3CizRqu+b8YIyCK5EAETrSZsWPVPFmY40cVgRNtZoZAjIExZvPmtfWvxysSgRNthjTHK3Yolcj1q2sb8ZJE4ESbyeP4HEcDEudxInCi7YkcsP4nKuFG4ESbPVaLy3MjcKLtPVRjZrBK4sWIwIk2q7chsvFZ/JAicKLN6myk+B+AOJIDETjRZnE4IkJGDIwx4LhZKgIn2t6SHCNiO6QjqxaBE213yIAgzIy4GicCJ9qeuAH7/yZS0RE40fZKENgdoBR5gQicaDOHamSLnwbjfBSvSAROtFlCNR+wiQjc2vbodiJwou36wRALEwPkmj0jqxaBE213M2Ls9LSRsk06WgROtF2SHCOAGOQ6j8xaBE60vWU6BGMMiIBOpxuvRwROtBnoAbHEgPuIoq5aBE603SM1y0YLmMmGbVHlJgIn2kweh5gYo1Gs4UTgRNtDoAbf3AlW8WOKwIk2Ky9gcxwQoqZaBE60WT4UxUiSZI5gNxVEzYEInGgz2NPPPXY6y9Ij5LqjmeOKjwicaLt/KMR29ye86Dpt6jyPbicCJ9o0ExESsSsMRQSJ6r6R5zoCJwIn2q7gqSEpXpEInGgzGrmNbGLHDGLnQAROtF1Bg3JbAVkHFL1OBE60WQO2GKRF4ESbPUSTKnhig+f9ZlGU+H70MyIkItBaY5zngCLEUC16nGi7fShMJkARQCyRHIjAibaL5XlOvvgZmegInGizJzkCAEopMHMETwROtFlMsSII7Ng0x+7oCJxoMzocCLOteeZ5DuaoIB2BE21XG49zFhEYo2G0rtHT0SJworWHakqh2Cllpz9jy00ETrTZzDoZ0cb/R/Q6ETjRds9zCICAOO4qiMCJNpNpm9cAEDCp6GoicKLNasbEfdMRONH2nuGIlb41MPFiROBEmy2/sUqeDkFginWcCJxoM3gbEJz0rdYmttxE4ETbm+uxumrMsQAagRNtVszUKzcxXIvAiTYVNG4eR2paN/HKROBEm5bjGGHjl+ZSdDQRONH2FqrBbiyQuHE6AifaDKAhK6UmIlDEYOZhvCoRONFmyXLI9qt1OnODhd7hc/GaROBEm2KfefnT9MTTD3/SqncSjGgQUWwfiMCJtpv15npPkds47fmCeFUicKLtTgw4Cc9C5SZ+ThE40XYzbQwBsCIdkU+LwIk2mylm8fM4CaeBI4oWgRNtoglAtju68vFEgiACJ9rUD4UJWozl1QjI9XAhXpUInGi7mDG2VYCJMM7H3f5w60wM1SJwou2W4yglLmSzoZul1iJwInCiTc1xxLJqBCCxGmuEWMuJwIk2Q6hGBCIGEUHERNBE4ETb9UMhsrEZWcF1ipoDETjRZvA4IgQREAFKFUvzIngicKLtZkRUZDXGhmoxXIvAidZmP/1Tn3XsgN3GRsxIlIKK+3HuO4vLc+8jwHzm5U/z5UuXv1Ob/IzWGgDQ6XTBilfm5nvJzna/CjD7M/ECRo/zjWufefnTdO3atb+8szP4h1cuXXtpe3sHeT7G/MIiDh1aevHEgwt/d2FF/qPeIXMqXq3ocaI5++/+q7+Rfdt3ffSpt14/t3z96g0Y53EIQH9niNdfeeWjW5s3vqnX7f3+kydf/P61W+uDeNUicL7hbXNja+mdN949efXKDRijSyaACKPhGGur67hx/QYtLi4+0u2sHQHoUrxqMVT7hjcj0t3e7vfsKraCI7DYYXZctGA0ynsQLMYrFoETDQBESGtTfB7F7kKvG00EImVFpQEVL1gETrQGhgQS6HiKMQAIxARld4LGmk4ETjSUAKG2zQTEDCYGl6qesYsgAifarh+S3wdKZQAXr0oETrSSIJi4z8OIcd6HoseJwInWCMuKPx2PZgSAAVMCQho9TgROtNBUkrDPYciKRxdIKqgCArQez3M2PBOvWARONADf+m0fPjO3MPc4iJwIoRSep/hPAbTW8wQdgROBEw0AtNHEHHgcKT2OJ9MEAkhUibofLLbc3EfWRkWLlDVQX99B3JcTPU60gBhwrsUDqCCfYSAAtLZaa1p0JAcicKI50LSAgQB2YZs28GKeFFm1CJxoRRhGXNv3SVSSzxq27UYEYFLxc4s5TrRKqObyGApAZAk1BUMJhABNHD1O9DjRCuB4Vs2VP4v/ZYbfCSpGYNwakGgRONHqoRsA47ukHVkgRW0nbi6Iodo3gIXiGnX7wEvPqEefeIi63c7R1VvrJCIwYmC0hjEGRhuIERATEqXACePQ4UOP/v4/+L97ZjzM1/+7/+pv3Op2O+bIyiHz1S+9qqe9jijscYDRQVvtINqBAcMzygyAnnrmMd7a2lYf+NATj6VZ9tj29k5GkA+D6IXxOP/o66+8fXJ9dQMGBqIdBW00xBgYY6B1DpUoPP7kI3Ls+IoQ0db29vb/r9vt5r1e952tre1/Pb8wt9PfHnxxuCO3PvDSs/rFDz1jfvqnPisRSBE49ztQksWl+TRJknQ4GM0//PipZ7q97pOj4Wh+6dD8v7u1udPJ8/z4eDQ6PB7nyHNN4/EYo9EYg8EQRmuIKYfYfFe0GFOEbEoxmBlCthKqlEKapSCGdLsd6WSd1+YWeoPlQ0t9o/XfBOTVL37hlS9+5+/+Xfkv//NfNdEjReDc0zDLeZIEQJZm6cKp0yuPzi/1PqaYXyKmj/V3Btl4PD4yHo0Xh6MR8rEmYzREBMaI9SR+SW6R3Nh9bF5n3X8+RgQipvi+MboAldEOXDBOyJCQpSmSVKHX68r8wtyNXq93sdvrfrnT7fyjxcX5V379V7/4jh6oPIZ2ETh3Ayg+9ErSLD0sImfOPHj8O0aj8ZOdTvJdudYnjTELw8GI8tzmKCKlp7AY8Qm/S/dFXG+ab6exwIGIa7cpH2PEFJ7HuF4cgRTf02VvjvVcYpxWgSXh0izF/HxPlpcXby4tL54lVi/Pz3dWr15e+19/8s/8iXEM6SJwDho4BCDNOtniyrHlp+YX5j7V7w8+ISIvap2fGI3GpLWBMdp2MyMASsiHOToZRRgmAYdGFmSuEU1ECqChxrCJcd4HIRA9gGyDjmgDEV0ydO7fIAIhO1WaZqksLM5haWnxleVDS/+y2+38i6yTvPK//+EferMNRBFAETgzh2Irx47MP/uBx75jfW3zaWPMH15f33iivzM4nOearIiGv5LeS1SpY6v2VPae+RsZNWB4LyRiip8WI8G/owzrCgC6v3ug+TBQyjDPChtab1RZs+NCP+NAmyQKhw4vyfETR64sLS/9Ypqpn3vzzTffGax2Yk4UgTNbOHb8xNH05JmVx9I0/Z7hcPgj21s7L25ubmdaa4IUkKj8UHgZPaBK8FQ3EfqQrPIzYoIuaNN4jA/ZCpiJBOGcKQHkwOMBa7QpxhEkfJ7g5/xrMtqASLB0aElOnjx+dml54TUQ/bW16zv/4tb1rRFa6kffqOB5XwNnF4DUTc3N9+aef/GJj+Ra/6Gd7Z0/vLG2eWw4GpfXaMK1Km9m53hMu+dpBY4nAwrgSDHIVngdn7cETyIBeIwxFXLB50KAy4sAF7qZ4r8Rfi/MuYzAGBviZVmKTq87XFpcfDXLun97aXn+V37jV7/4lYceeExjQqPpNwqQvtGBwwCSuYXukZc+/Pzv29nZ+cMbG1uf2NzY6hitiwQcQd9YYxmnSOW/J4HMBKd7I1yreJ3QS1VDtmCZbovnCb5q39fBUI8P3XzoZ7S2YEPgiYwNF20h1o5sE4CFhflbS8uHPrewsPD5rbXRP9O5uQxgGwfYrf1eAd77EjizAGZuvjf/zPOPfbPR5lNGzL9769bayf52316PYuRSMG3dc3gjU+B5PLyqyb2pYUka4JE6uFrA43+DVIBkWsHjw8bwOS1YSu9jPNFQeDSxYIHLgXzYGeRSSqnx/Nz81cX5Q/9ANP/i1vbWqwvzizvfSMBJ3sM3/36MDx1eWnrhpaf+oBHzH66tbrywtb7V2dnpl96lcqxQCZpAitb/NwUwARFILCfmVNBAVIKQDSPwExCx/Bso8GESiHSUytH2cUwo2OrA81mgM0ACuPAMMOWPMxdsnhFjG0iZIIbAYIANjGH3MxLwHG55L0ugeeDANtbprdXhA+vraz/Zm5v7sZWjRz/X6ST/xWuvvP7Vhx54LP9GCNW+UXrVEgCHTpxa+diJU0c/e+HcxScHw1E2HrV8xvWZGE8vO9aszqK17VGXSmDnvuNA2Orh/XOTAwn8jVudBhW0vQz/DSpAAsOQAgj2eSxGAvEpYvsjRiAMQBOYCKZwmKVYCMhBnggkgJB9Tm0MbW1tzff7Oz8wPz/33U88/cjf3F4f/aU0ya7ifd6I+n4GDrn3t5yk6kMnTq38ZJ7r77x08eocJLjpgpuZiAuP4H1NuIuzUqBE9eaVwOvUA7KCNPDPKrA3o1Dxu4TayYe6cIf9wz8nFaGUf5wV+xQwyI6+eVBReSgoAMLk8hoGw0CT80BwZIF79f79E9ktCkwMXREMEeg8x8b6Rmdrc+snjqys/GC3Q/+3hBZ+fjgYrr9fAXTf5ji3GaolAA6nafLCqQeO/eR4nH9qPB7PTUthp12H4uYOAFVkGA2glDkPgsG0SsRXtNUELJcvbAa/q8qyVetBpSC7VAgF8blSWCQN2DYEeZWIQBsDMdo1k5a1HZsHocx1fIEVtt3Htw35+NEENaxuJ5OVYyc+N99d+ou3bq7/5sL8Yh8HPO59r3Oh96PHmc+y9LkHHj75ZweD4b+1vb0zT15jacr4FwUFzMr0pQTep+aFwhAuvEGpEfJRlbguQrwACEQgtnkORIIOBCqfquJ6pBLl+ZuWiWDAAGn7OA8qohL0bhV8Jflj60kIDBYDYQZctwFReGyI8zq68lqK1iAA/cGQLl44/13zC/OfPH785N8e98efTVR6AcA4hmr3n2UAHjj1wPF/D5A/urmx+ahNpPcwLOnJgIAAqId0lTDO3072jm9l3aR6m9uQx+ciAagKRWhy0mnu5rYPq9AQjd/Vpo4DZog2wVupvhL/65kJBgowGolix7oBBA0pwtQqSMtrJS35nfVmWgzW1tc7O9s7P3rk6Mp3Huqu/Nntrf6vdDu9DbwPxEbeDxOgBOCoUvypleOHfiHPR58ej8ePGhPc9LQ38JThjNRyIHLKmqVXCkFELum2iTeV8k7h3/2vYft4dok2UfksxY3pVnsQlQDxeRiFYC9SmMAjFp6Kan7PjmL752QiMPsXQMX1Ivf3tkvn++n8qHelLOu8nw/dhqNhcvXq5SfPX3z776hO/jfSHj7wfjiwk/c4YDIAjxw6vPjvEPMfBeRhEXandQkYmsh6TUx4Kid5/bil/QCxlUQrJDqd53Lf58DjkRuUrrBpnvBGEYZZ8qustVhwKttqYyyb7clqOGYsZM6ISibOXrqSBhfN9ufZQLRn2orW1ICc8OtIylzOF1m3drYWBuf7P3TkyJGXDh8+8vJgS/9PnWzuPet93qsehwEcZaZvW1ic+4+TTP1ppfBwGEagftPvC5pUfa6gRX8q7iDBTTkJ8wFAKvlT6L3cF3tPFjBdKL+K0997NnKezDGFpTdDWdQlAitVeBXvAYufZwYXYiGWz2b3XN7zUu1aU41sCYNLnecYjce4dv360xcuXng56elfyubxzKtvfFVF4Ny913wqTZPvO3nm+F/pzXX+GAQ9H2ZQcGvSFFeFlsdRnSUTaT6ulu9UYntIS9Q/ATSEChgpSN65hVjwgEJIUAT+0xc2i+cLHxOGcFQq6NifseBhlOEaUxCy+bPDgceCOPxC8TOoh3aeNBGXa4mB0Tk2N9Y7b79z9mPXblz61Q9/9Pk/u7FzsxtDtTtrCsDDJ0+t/HjaSX580B92KjdGCzDaKON6juB4+aIW0waaSpBENHlLjViyQOpMWP33oAxr4GswjbAtZM9srYcBW6QMOgtsziHVFA22plQv0HrwS8mNFxGhYoaG7bC2OGD3eqUa5NaqsLaOxWAGtA5fLwXv15pt8QGMGeHKpatHtja3Pnvq9IkfIjHfJZpXo8c5eEsBPHf4yNJ/IcB/1PegqXuXWciAlsdIQCXTjM9DQegWJvVtIKU6czchkAufLyQFKqSCD72Iq4zahFqUDcs48BLc8hoCT0hl+Ff1LNI8ekJyorgmJc1RB43t2bNj31prbKxv4u23zn1ofevav5k7hD+C98i2ufvO40wofKZZlr507MThvzwe5x/TRqeTkvDiw5py01eSamBqwk9TQGPbt0wlyZ8I1NrpXwZa/oZ1XJXYOokEdLVvvSnyC2JfInU9b+S8SBM8ZedB0b5Qef0EgBWXczueZicGibbMng9FXUeCwMCw7b+znQYln87MMFpQl8Iuak0iVW8Hwmg4wqVLl5/c3tn+xZMnTi1QPvfzAHT0OLcJ7qyTffDUA8f+x9E4/zYRSXfLXWgGxmxa2Nagj6mkXaUNQAF1HSb7hCqxgBZvVqEH/GnPZc7DE1g5BDmRp8DLAmc1SS98GFGFkCif2/5urrx/qngP6+24BG6dPg/9LlFLgNtGotiRbiMG43yM1VurfPHShb/GneH/gVPT2e2AvUONwO8L4CRJmnzgxKmj/8+d7Z1nimA8SF4RJLz1G7T+1RZK0ST6eBePJS0hW9sXBzd04zkn0OV10iBkCyUIh8qkv/5a2oiHEjxhAFmEV8xNZrARskr1YKBaGIlmXkcTrqX4AbzgT20M1tbW+cLFd38u7Y0/99jTZ+5b0uBAQrU7hPykN9d94diJI3+93+9/QGbpAQhv+mme5R5b5TashHGEtm0fRZt/NSOreg0SVAcOTFEDCpV0JvAfxc8qdt0Dhh0bY8MyEbJjD1IrLBctRvWuAtcQStLoKq/Xm8Q3kYKQKMbNm2tkxHyr1uZz6XzyHePtdBRDtRlf17d88qXf9dSzj3xuMBh+MwSNgmbDm0w7veukAB0whGreDzMCvN0L0gwvnWrbDKpSUpUxiIDwKH5ri6eqnDuO2g5785gZqgj1ymeTkCQJaG8K/qyHylXdAxQDcyIGuZO1unljFe+8fe7jWkafy5ZGaQTODLfV9/3gd3yIFf3dq1duHDbG7O41ZgHNtLSnLQ/ab9d4rVVHWobjptWHwr4whO0vjXyiDjqp0Q1+HKd2g4fewhc6CxatZN4KkBAHv4oroWBYrK285hoqaWrk6zusTQGgPM9hjGB1dR3n3jn/idF4+K/S+XEWgTMFNJ/6t77tzNrqxp8/987FFZ3r9hi55YRvnNm1in/lOWpV/QqVOiOhMA3M9dM3JAt2DziDjoDiLdY7FqQYaiu/bUEQEgXFvwdkBweJf4WudqtEMKE3rk5M2KJnWRCtEATF65UCjMX7qpcB6gVnJ48FCLR2nufNd791p7/1S0vHklP3C0lwXwHnD/3I95/s9jp/+cqla79/PBw3gEFTkv9Jt9/MYVkdZLcb1tUaRKcBX2okwyxZUv29Fad/vdWIyo4C/3euNXQ2bviAkLAhW8n2MSjoJEDQOcAt5AiXzGLI0FGtgdTN9hRf2jgN7RxGDDY2NnDu7PnvvHHj2t9P5/Tj90O6et8A59//U3/kmFLqv3nr9bN/eHNzmxqA2WNIRnt4rITh2QEM9knLlGgbVR36oL3fCdUu6mqTf60oC1RudlQ8D9dCKq69zipQq+FarWhayYEmh2hU804h1S9wjaFioJ2+ts5zbG1u49zZ859YW7/5PyVd/WT9kt1tr3NfAOdP//kfOzrOx5956/Wzf/T61Zu0Wz1GZr15696n7dSv/ZtMyczbpmEobF8JGadaS0r9a1pvW3jrhXlKWNup1FcqTZpUzUdC7xQo6vhG0KIwCjTCt6Je6h7LQc5VzPMEIxTtYW15jZmpcbWrHlkaZIE22nmiHFtb2zj7zrmP3ly99veSrn7qXoLnngPnMy9/mvs7/f/yzVfP/ui7Zy9Sa12mLWS7XRbsdn5OmiPMrUBjnrGbGg3w7eZJ66d3WNwk2uUtNHKSoHnTg46p6oWCbgbyMzyVCVVqDZMrORpx7bXRlFTSy1bZsW3rfTSGwwHOn7/w0rXrl/9nzvQH7tU9fM+Bc+nC5U+dfefCH3z91berFYyW/OJ2WDO5zee4kyBtsF37SKe89pppkbethlpN9ZxwKjT0ivX8iYmCATx2tw8FRARXi9JU9mG3dWg3DwIptbN95GzE9rYZjdytMxkOBrh8+fKLN25d+cW657lbZME9Bc6f+nP/3rEbN279/Ne+8trxYmIT7W3/NOHE3de9fBBgmCZWGORLYsxsdz72O9HlgKDtyVzetzyZbAibU1vaY0LfHib3IFvLKbTiVBUwBWtHVbKhDYwI86QGeMq+NuN3CTmR+HGeQ0QwGAxw6dKlF9c2bvxiZ0E/2Ma2vS+B813f84nk2pWbP/PlL75ypt8fVm/oKeCojDFP+lDQbAWZBMj6wNtuoSDV2likhYKun7qTetlacwJfVXc3UUgpt7N0UmHLfP5RTd7L9pri9bJnz6Scv6k9bzm0Vh4G9XfRlMriCSWCslbErjubauKOQHVsvbJ1wYS7gWx/22g4xLvnL3xkdW3tPz10ZPmutufcK+BQb77zqXNnL/74jeurE0FDU5LrA3sh+/VK015DoB9tN6Sx7QWj8mYtbibPYgV9XbXZzsavM60a0cV5HVDTs7OPlRyFyppL2PfmiQFmql2GcvgtrImFoWGFeQsH6ggTJ2ulFmb79+13/RhjsLO9TVcuX/5jV2+e/YmjK4c7d8vr3BPg/MiP/uAn+v3BL7z7zgWuDHrVazQHDJK7aoEWGjU8irSDcELVvfGhhY2b4Xg1NwuWux0BlXpYOOtTyUdCFq8EvaqIglQpZuKWEJBq06xBHjStRBCKfxgHHOO14ARYXb3VuXL1yl+8sX7xh+v39J0Cz10Hzg//sR/MdnYGL7/5+rnjo3HeOG3acpmDqEfedUIgpG49YFwLPQeKoeEMTMHUFeFaE2TVMWtqjFL4nMM4bTae4YLpYI1iqQZKJeNG4cFW6iWE/1Zl9YI2nvBnGkMIqA3K1Q6YcHZHTEUc3oduxuQwAty8cbN39erl/0xl+rm7wQHdVeB89q/8NHXnss+8/srbHxn0B+15yIRYfpb6ZJMNotYZGkyp6WCKOs6kJLvCFLXqKUklPAtrMoSa2mctVKtkXbOeGoHgoCn0o+vBXwmQohjKVRq6PPuDjoFCsiqcVKXGrSQi1fdCYR4YdiiEjF6L3wkAI74lx4NHbFuOMTnyPMfVq9cev37r0t+aW+aH617noD3PXQXO66+++Ymzb53/Ezeu3doVANPIgftOtnfS6wn111ppXqr2g9X28YQkQXij18cDJnBte3CO1My5amRMPR9iamfDQo2E6kHUfh284OKESZByZscDxYVpYnRJHjjp3tFohMtXrnzk5q0bf/L4iaPZ+8LjvPDBp7O11c2XX3/l7fn35TKrykhwcy/N7nWcQJ62duo2liTAy93y7UclbdOtNaWcaktbs7bmwVfJvVAdgaDa+2ziajKZIaHXlnIpFlyHgS563TT6O326cOH8n7q+duEnHn3ioeRO5Tt3S3OAnnr2kd/3+mtvf3g0zt+7CT8mf7Bt3dlGTEuy3u6hwlCtWpykQv6m0uYSAkl2w7QJPJsvMlbDOuXD2kmUc6isU2wwCFYRNHJVquQxcFrURb4Uah8Uc0M0+VCqvS5y3sif/oYIBIaG3Zzw7rnz/wlJ+jkg+QruwMaEu+JxXvrI83Nbm9v/2fWrt6hCWaK9uFm2abSVRqh5Ck4J9ZhmDFrqSdRu4K6HMPVQzI1NFzWK8PlreVwh7F6n3Gtvsv6S2mZ9fG9b2NDZ9vNt+ZivkaCSF1XO/eC9SwuN3BSCrK5frOZb9TKEPy7qKxsrGxc8KRAybcYOv+XGbmnI9RjXrl09fv3mlb9OLIt3wuvcceB89q/8NH3wI8/8xXNnL35AjJk5sLhXTklu93FEk/vXan/SZOS3XIDJfWiVxJ8me6FQQlcmeL7Knp068wWqMG7eSxDCboESQO1jH81R6gaI6m+0MmotldWNYW0HYqCNgdYGuc5x5dKlD/fHG3/gTtzndxw4ly5ePnb92s0fW721UYmn7/d8ZbqE7eyEQUipSr0NZ8bToXFrhR4OVEnKq/tLpWyJmbEgKoE34XAILRAIaQ0/C6Ucbm5UaavXNPKd6th1GDmE189/NEUngfM+oeiH//t2fye9efP6p7kzevg9BZzPvPxpHg3H/9c3Xz+7eFs34XuWL5DG30Pp3ImrDSd4q0Z+XijpVHOLdk8mASMpE6nzUPHGN49WvEQQbtYbNuseWSYdAw31nWaI3SDFg+tm3N/9Ju8wdNM6L8YSjNa4eu3Kkxub63/iAy89ow4yXLujwLl+7cYTly9f+6G11c1aDxYa1GQre9PWIb1HPXXZy4aBFtkptORkE59vQmOnMbqdQatdB67R0tQaTk0S2igVbuqCjH7is/AmCDdmV7UJqgl5me+EU6GONmzuxgm3vgFQRd8aNeAkoYQUUTDKEE7FTiZRCs/jPVFAW2sn+KFFMBoO6crVS//x629/9ZPvCY/TPTzk9fWNP/PK77yhGuqSs4T0d9vqmgR7nQitdzjXhs/Cm6tey0HQCBp2IwsmravaPRm0RBZPr+cEhdKQtaLaCIDFySykCRWDbdYzmIJIqHQ71OjptiE42jXDLL9MEAb7kM6vaMyNweqtNb52/drPdg8P+aC8zh0Dzn/wH/yHj125fP2HN9Y2Gyf31IT4HqCo8rr2U2OqgaZ+43Ew0BY2Zk66Efc6Ul1J3NHcVNAkcmlmfexZDx2mch1IOJ1a8Tgt0UMzf6oKkLRFEPVzrdKGE3gg7cio8XiMyxcv/y6j5d//zMufpoMAzx0Dzvbmzg+dfevCopEqJXxfN24G4aRMjdOnsGwtpIKEIUnbAkDnhcKR6l2ZtykUfHEm+yRapoeXYfeA1DfR1bsUptB1bSF0OFlaXQFPLeQCo7nGpO1XVdVwfP5W5DxB7qN1DiOC9fVNunzpys/8pb/0maP3baj2k//JH882Nrf+7OrNNVuoakmSGznNfsKjfSTn0xw/JtSYWoEUhAUVrxUq14Sj1rV+NZH2rdXe1whkchgYag3U2nAaH3Cgnda6Q7Rd1rOiylnmRbUuhgoFX4LHvz8/dyPBCpVmJ3WVgWwqaofkRgudbYz9KnraTNAUqt1GONvLdvHi5dOrt9b/5EF4nTvjcSj/ifNnLy3nuZ4ppdhvhHRP6eoJ3ohm8ArUsmcU00iHGdOzMPkvbmKud5nXaA4/y9MAuWnQwG35EjNVBN/t72Gw4uY1EanyZUXNqLoHiKYWrcseN7ve3rgVjMZ9v6Sn7WNMUSTd2tzGlUuXf/ynP/2fHrvvPM5nXv40ra1ufvf5c5fpdhU233fmqd6afO3MP1sLDMO5/GoYPKVTuy6fK02KG40dOjWQBh3OFOzHCUOpSnhY6xynFt2o1pSPJnc/lHS0p80FMH64zxS5ZCn2YZtDL1+5enxjbfMnbtfrHDhwLpy/+NErl659ajwaTzyVv6GxM8F7zcz41Vd5BANz1aerykIVYWBNe7roNDAynaIPQrXwxjci1d9ZyXO4tkW7bR6nyTQCk0mLkBAoXpMHCYwDDyqDbxJsQxgNx7h1a+2P/Myf/4un7iuPs7mx9W+//eZ5llDsu9Fa32TTQrXJRs6z7wO+TfCuJWfZ5+9qy4Fa8zWq+Ypge0BYha+Ips/6elq0zkppvzJBb+K05pWCBN636deyHjv1yYw2OWw4vemqjsHuBEa1hkeNHKqy9a5BzhXz4tW6jtHF0GBBGphSq+3K1auPbWxs/PCv/ptf3jc9faDA+fBHX+jevLH6Y5vrWwdWU9kvdkRkttmdg0iu9ljr2dfz1zumw3/2XcJElTyGMD3saYZJ7drOEjR9FuKHXnCjxkgWOXtwCFS2Xu/j8GvQBFUNw5rXkWJVPALqGrCeZ5znGA0HdPnK5T/9zd/8TWfuC4/z8GOnf+Dddy4tmv3WQg6IVXtfzvtMu7lci4wJV2jUhDzqeYUdLZhB8w2lQKEPfaiW6IsAJhwDDze2hTJV9aG2fYW3UmHZxHtI499vKaMrwci1NkGHAYBrV6+dHgz7P/pd3/PJfXmd2wZO8MvU6q3133fr5hrdDxTZXusw9zupgCnvx3uchreZytCVPWsVVq5OSxcgK8doyu9JUDepKiD4HTtcW+te8SQ0S+Nps64jtWnT6ustwVNITEnZYeA9T65z3Lp184//yuc/d/Keepynnn3s8Obm9g/lWrdSqjRhmVGbyk0992mjrndzTo3eMrRrq03qWJD6a2qbp0EgsB7qjgU/F/Zu7RpWuv+riADWztlG5OXzpeAEbnQbe34gaLGphz5SXytPXNlAAKnVcNj2TCpmsFJuk5txy4Q9oENlGje1ylybeG3Lf8LXUo4UNHQojACiQTAgMYDR9ksMKKjliNhRa6sIaltxjM5x/cb1MxvrW8/cdeCEru0DLz31n9+8vqoItPdTvn5T3uvOgpqIeEVEpCVXoUqS3iB/D4SJm+5zAolaqo4ZSO2G9x6iyS94YfVSsKNs8pzMCpq6uHwLeaCIA63pSfR2S5g9ocG11XkG3ga+cyAgDsJTVkRgtEZ/Z4durV7/mVCfYNZw7UA8zkc//lK6trr+nYP+IHCNs7FB96vmkwQJr29ZB7WJVNQ0wILwyYsR3otX37ZlztQ3AyDs/RJoaW8pDcVBqgqkVbUbRpW6Lm5SD9RWsqa5bCvUFti1u12q77hBDkCKnAdBXcfT0zdu3vj2dy+/8eI9CdWuX705v7a6+ZxxL5j3c7OEo4v3OEeSGotVnPgik7sFJnqcg8vXpu1qCBNiqUfCEwDhv89ME4qdk9+NTHhFTDXPUhsnp9bFo5NDUpnhfpCAlq6zbAjev8DXdExxiGxtbfH2zubP7LUgeiDAee7Fx7/n1s1Vql/siWJzswJogoeqtMK3fO1GEDRuv1rC5EOzSg5D04py0rghKdCNxoTwY9aG12o9TFrDLyaGqq8VmfEQMkZATM2fh1/poQrP6bsEmLnR+SwAtLFsHZOqtQI1w1YCak2mVLn2s1DpBSVdV0gtOhhKz1XqFDgOUGvoXOP6jZsf+TP/pz93/G57HBoMRt/X7w/fN9o1lbUgrW3/aIpqhDfrHQ5DKwdSS1dzW4oglQEyaR8r8DNB9cOupfu59GRSsGxlzcblRxM8cH2lySSvuJ+SRpVVc+/clN+vA22cj7F2a/X0YCd/ZlL+fkeAc+LUsbnN9a1PWjaFKnHp+9XqGmRt9HD4NZFF25e4IlX7woIwxBTNmNW8RsI7Zho/UwlngrwAtTmY+k3kett4X2u/pJKh7CebE1QT/3I3UDkqHoZw/n3ZeR1Cv9+njc3V/3wvIoa3DZzRcHRifW3jUZmhqLXnkG1fP9iMyKnlpp9W46k04E+YP6nc+CKtr3Vfs0fTgCS1myz0EK2LFidfmcYGuNakHQ21zonkQTga4AVCwnyrUouSXXMXmsYEtHyC4Q7RhjhKMQZehnC+m9q4AumNmzc+cuXG+YfuOHCcK+OnnnvkR7Y2d5haGBAJW9JvJ2KZULhpjCDv8gHIbXiUCdMsE4E9aS/OJFAJ2t9XRV+5/o5aNqcV191Ia+MnUBVYrzNu5eut97W0rNFyr80YaaGXqRjdnkYyoFDgaargVKAiTlpMDFhs3YYKWr26T7UkB0ylplPWedz70TlI7Pe2NzeXtrc2v3VWTNyux0n6O8OPa6MRLbwXeCqY20ASdhHXh9xo2uh5pUs5FNYwe3bWprVrQCrvqdKA6rfSESp7FywodZXCbswdYYIQy17DPWmEwE3fVO0mCCWl/NdoOKRrN679yaMrh9NZ8pzbAs6x40cX+v3+N01sST9QivjAB0Tv7Iv1HqGFmg8lbE0hT0vV6c9wOdUMv6vB8s5485W5zT5C1oJ+bnvOoOEy8B6NTrW24TtCU5ttWo5TC5lD8FQ7ztGej7orcOvWrecvXD77+CwkwW0BZzweL4wG45Vpx9qd1hfYLY+QXePmvZ5re6DUJ+Qs4U3IxLv/zjBJb7nNw7aeAnQBYzW9ZU2mV+vrKjcBMCrUeKCq6YHbeKqWHHC360hT8z5pK/yU11iajFvodYpNb27kYGd7c37U3/7ddyxU8yjMc708HI0m3hhhf1rDU+zmQgqNMtl3J45MAM8sAnptj5u6uTo88YxpjDRWdKJn1KWmtptoQqgm0gaIarW/Og5dhmdtS4Aboh0T/BJNUKhpnbsKQtnK66rpCLTjhKrsoLRwhU23u8tlrm5A0FrT1VtX/xRYDt/JHIee/+ATv88Yec+Vb+pr8qQlJGkFUUtlflqO03Z6z1TwdNpks1L79X2fbWPIrQqeBSPXvMF9acGLKbatb59OiPLsO3pANU3ttohFKgdCI/RqYQj9oVuXIQ4pbKnRCzduXH8i1/3fvRs2bitUM9p8eNZY9L5K3iewZfWT3U+x7ms8IQzVdhGgkErhscxxdh8N2CW/CnImaVFSlbabMyQZAnB572RMuyedhU2ffJ3aethr+nANOh6tXdOCJr1e6hSUSV04s+RZSCOC4XBI/cH2vzM335u/U8BR62tbh0Rmv6nudmsB7eaxw+r1hMe26aXtifMJFkXJLBeh1m40qyBh1atVFW68kkx9jaGX7jJ+BboOCp/B0t+iYRXB+pApntdX7KcPNNKe74vqeDrgx7kDRYQAPFXNNZGWI0MQrJEs5YuvXb/63Gg4OjLt8u8bOHPzvd5oND49aVVEeJLOVMeZWKtpeuJJN+j0j2d6ok8Tcp2p+3LCXKTWY1fvjvYSRZPCN6/a0nqx/DzMBOiW750qskumYIwQeBGa+J7C1eslDa2a156o0CyTCWeRBDWWqYXOaft/UC6PqvAB9efzCxbcV2WUwHVCVN+EVMc0inxaAxBsbW+eAQbP3xGP0+t1F5XiJ/A+6VCT/TyWJm8QCwfAihu4HlYECixFWLWXWKdF4L38/VVmq5Er1N6RFw2RcJaldpQYlGPKjfOjJk27v7htNvq5msu0vFJpE3OUykFe2R5RmRQFNtbXeutb2ysHChzPqA2Ho8XxcPy+k0zb8xz8JLq5tlWZiStdxlKhRwM6edeJUR9+tHtZCZJiVFaA0MzvWlDNAbzsUxm66WAFvb3hDCpH/ex6cfs44Opr7MM2m7b6l4R0tDTDt5CE0UZjnI9IpfJJAOrAPc6DD596fpzne4u/77FHmTXJv91X3NYKJJPi1Zo+2CwndTkG3WTpCC63cTdRa57R2phasmfT8rj6prYwIQ/lqVpD6ynvf1oMIAg1o1Hb/rD3SKKckK1uOQg12FZXVx8B0D1o4NDKiSN/yIjQtALfRJ2BGVKcvXQJTApvZA/5VD3HmcZoTVu5177Tp1oMlYpAIE+e80G9FlVd246GIqeEc1u1U3/y52Tn8aWm612V6dXBFm1q2XZd1xAIX0E4ARpS47vmok0dKPeWJWCnd6kFYlKNqvoSwsZTYwwGg8EDaZYuHLjH2VzfXLqfxwdkUrJ/V1+ENG+ElmsWLpTavfVlb0x46QFmuxKVga9w5bwjHMr8ptrmEqrJSEvI5JtOTVAcljrQ5aAuezXHkXq4VjmGpNJl4HcgbG2vP52mycqBAuf4iaPpoD96CPe73StgV9rZm1KtEz/oKWsBp7XwTPfqbT5r9uvmi40VGSnnkznI10p3EIiiT7om7lsliPY/jzPRi05sI6p6vdaOC6OxublBw+Hw8KSodV/ASZKkJzDP328eppHH3OYcz0HmQtQiSlENaGY5Qdv7juorQfzDuVFcnPC6qaqjE+YpdiFui6AGBFqXU56lN5LJ6UzAhFXletGQn9rvZ0XNsyKM9IqEqXycBJOjpT7caDiCGBw6UOCsr20eGQ7H2M+gzV5EcCblMG0TlDTla2r41BYWUa3IN+VFU40ClUouQJURg0kNqZMAVdfeDmsiNCV7r3qG3W+0ivImgvl/9z2v1BkwCZXRh/oK0XCPTv01lKqjJqCwTaEFUDBexndPuC+Cm8GRBuBcImW/3AQseVAU35OixlM0jroZHbsmRIIhPDj1T710kKEajcfjldFwRAfBQB0YjTzlxpzVW7XlRDTraRDcGNTWOHZQYWdtTn+3PJOonW4uQV+lw0sR+KZa5q7DqZWfQ2UKs3rgTWG6wlysfmBUasxSrfrPxA5Ju6eu5X9Ga/+fnYP0OGSMOW2cm76fwHMQeckkRc5dw8I6szYVqNX/m+W1FTycX8nhVfj3kBfIBBBWWDkpVf6JXEvOLtV/QZUYCDfFTfrd9WZZ/1BjpD3CqN1pfjNBHdCTR91rVHkx3FbFpi8oG2Owvnn9kUmo3A9wUmPkzP3GqJmQDcIMdZs66KfIzYY/I7vElW0f+m45z643PzVbTYsN1VN+ZlpeVaFrGw2bVaHBykYCv/msNT9zrUNaaqKCdXJCWsPu9qIlKh7WyO78z+7gqZIXJTBL8UQjhtY3rr80CSP7AU4PkJXKhZmS1HrXbIxMbfvajRDbTRVmak4zheOXWWjk3cK2ug5C7b/rr7syhz/lPdVmI8v1fQ31muBGCHIgaamVtFV2mrtSqx8U10QFQ/Zp0iWWSh7TZLLKTQJVSrpKnwfXNFQenXDHTbyOTeosyMWqgwX+EBYItEWpOSjgzAmw8J4NxyaQLlNDN9QKowfyUtwHVS821n4X1cCAWlG5bL2R1pdv6kXL4ORtLKqtreHwPW/VRbpVQfrqkJupPLe0HHxhaOeJgXqhs/QGMnXZllQYOZn5Fgi7ENpjcBPkTwfncRII5t+LoJE20MxA89EBJ/oUbmlGFTSTtl2HNC+x2ySA5qa3ogmzspmgPbKsz+OYcASiABjZkQPTvsE72PtWO71rST+qQG8O6QVtOiIgCSVs20ox0tLkKbOiJmD90Oi2KMJCrSd6nGQfnzv3ep3lSYnn+4IomNBTJXfh/RFxtdFTJnUil3MzBT8mLTQ31RLoWogYbiTgWpE1HIMu6d9A2tcl85X9M8WNaSZQ9+06dCLVZbekGKLzIpyiyvttegvBbLllncCphvhSXE6pOhdzEB6HF5bmz+z1HqKW9YS79aO19U/NTDe3PHFrfWfCJGP4HA1t6FnCsAkdAqF6v891Qs/R2KfTsiEa1E4qVHrYguQ+HC2gWqLcPm5Qgi2c+PS7QRufK01puvTv2Y1WVDelhdeqTNCJgDRJCpYPYlpen52dkQmecOazsZjhkQAeFkCj0eCBV9/46oGxambWmsjBRlqzS8ZOWxg1kYE6wC7uUHBddqFxJy2ektqNV2HHKyLmVLnREayzkMoUpkyguKvX2NSEB8MEuhLs1sRJwsG1cBxZaqxWcXgYcUufwlpPAFKEDFqzhekgbzKpe2n3XgfD/ge+//d+b3pQwGFqucv2oxp8X4ZoBwGgCQqds3jFMF+pV+XrD+X6siuRioZ0Y2iuIiNVJQfCUCnMH9gLhxgpgNqcY2kyXQ1iICyWtB6KZduOMQaD/qDc6SnNsWk5oJyz3kMoQa5ljKHzF84eWI5jRFq0fGo1jkp1esp4dZubJZquHEy7nRz14tqUE2YWPnzqz0+huid9UG3E6GT2T5peBaECaLWQV+8BK4AQeieiithSSVi0ORQ/Qk0QPYkKZjABOliPHuZQtqhYZcv8PWO0QWU/J2rFzTYP19Isa/M5NEmXtvvJdXrX9FSCw6QYLyCTkzowjzNTqHSbYVlr+DMjaIDJdZ29gmamf58SFlLrMqZACmnqc08nzhvF1glysK3vf8IodXGdubbbqFbxD7Wpm0zb5EtWwL2o0odjCqYxXyO1bQsi7Yo99dfRRhaITL7WUhP2EAjG4xyTNnPuO8e5n/oG9rSE6IDyrT1Vc/cC1InLq9A+rtDqbeqevdbztVcd4XrHtfMkpZ6blOtBMNlT+1YeqXmXql5BQBT475uaDoLc5p0y8/sXiKEDq+PQoD+43n563Uv0yB0DT72Fh2oSt7vtw5n1+ae+NZGJ8bmv30yu29SV/6fcf37Yy0g19xAD45RtwgTe/1u7h21uvqvmUkClmTSs71TEA4ORALQXQ2/7wG3zENqASA7M44w2N3bOh1T3pFaO6dpbk9cPtoYhbUr6mK1l5nbCtElNnNQaolRF7iaRA7N88DLFiZbr2aWqbLkbpT/DtagnyiaUT/JsmAnWhIhUxgiqkrxBJ0RtkhRw8lXBSEG5BMqGcARTYwlNlX0rWnjcvxUb4YK7w80SUDFrEM4W1K6K3zDuckdigggdWHf0kAg7ITBkWoIse+/elf2cFBOop92U+GliUj45bytmbtxNU982sCujJjKVZZsYirdR3C0dzn6xEzWaQ6mxKGoSsMr3GizwcDlPvUeubY1H9apJVYmmroYQgN/OzYjdfRP0s4UAKgbRHLQNzOQDyj2moqVGaAWPoJznYQBMEGI5sF61LYBWq3PcdyePOcgaUeP5JvSxtQ6eBas7Zl6ngdsYrK83jYZACDTUwpfKxVzQ1JVYzfpI/eYuurClUOrZbftbUYetkyQhdS0ykZr3Xs+PVlejEIEAuBt33fHDJ39ND5LxgYVqRHSRqVSNpLsAmruRH7VR2K0MX3DS0wyr6W8LNA2vItUbNxQrL+osPgyqKtbsVvuYNGg2qQWo3odWAWIozhEeVnWvWu83C+aB6iH97VzC/d13Mph0++2njiNK8TlmghGaqQFyt9Cn7TETB8Qm7G/ZbYBMpj1H3fOENan6f6O6rIhqvVuCCXMyu7XtSHNeJSTu6gRBa2vLVDmoyTtwfH9cdQltcH2llslSPcPF1PDUh2FMBMMMaN2giMPNabvH6i2vs+Xa75UjolAYt/zYDyzHkSRNrjPz1LUX+5KU3U/CPnUB7OSca6p8VEjZevrVs2a15UmTvNL0D6j8HbQLmMRUe7qIKGijoda3GI5LS/0z8us7wh4yMY2Dwcvd2lCQKweViIGWpmrntKMzUYxur+O2J1S3Q7d9lSEbSnJA2lRsZFfg7jcCIaKJMN6XWMehQ0s3kiSROnt20HnI1BtvVop3H7Tl5MGyUrJWIFNPrTtFtYezN5MWN01l8Vq8TT1Ma8rLBrmFcSPbxtQG08J8CUF+ZPMtpRR0niPXeY2Rqx5j4bJcH+55ABkxjbxU9nl/TA2pXXirkmRn0mP3BZzhcDQwIheLpa77keq8bfTQRI8hM4SPU586zFuC/TaVGRhpbjmeRCa0elg/CLaHD7X+O+rCf5Na7ahx+atDLnV/4d9j2DUgFS9JwQqRquep51FGrIxUfzDEcDiyawOlNnkpwabsGoBLscD2BlNI83UfxNnFzPLwA8//ywMFzs0bq7kYuRr25u7a5FlrS5EmUbo7PRt+0LXWmlZvV2+F2UsTZ/j4SS02aDmdaxu/IBPW7k2ju6Xak1bZZjBFfcaPEOwWOkpIAReJfzDagGqdJpRsksb+0SBPqQ+mYTKIASnH6aXZulMs15KylsOVbMgS0aDwe6W8lJ1GNaXklP9MyP4bUNLdoQcX2NUsAoEQDQ8UOACk0836bbJKtAsIJn1J7c8DyYtm8XB7aNKUmV6X7F6raWOz6rdvSx+a7KLKOamDSyZEcrYfjRtShMXNPaEwbbzuGZr/Hv4aY0yFfq4qzZjGq3bjcDUBjxZvM10UCpiYddfDVC85FXRd+L8wA4LtgwYO5ua629X5CDmQmg4dVGv/7VLZd3U3/GyVicrYcY3waEJPWoU3mjkO2ovYQVuMKcIoEzRDNrWwG3WxsNcMaAhzVFYR+vdg6pR1+DlMlhGe9Jk3RFEqHQ5V1QUiBjNDBEiSNCfCzUm/I9nvRz2/MLfNQSW7oX5JNPUGnrjR+aCaJ99Tmm80IyfUErYGLfhs5S5hl0iYmQiHigi6yz/q3issdIfjBlLrM2sk7OEmuXp9KBiDLgFS05ybMDYehumyp6OpTllTVSDY3c/MhFPHH3qXWV09MFbtMy9/2nqc+d4OMzV7y2r6ZCG7gl3yGar9jKCpfSUtec1UgNQ9R/2iT9mVOGnqlGr/V/0waSp9TvXfF95AMpuqcP2fmSbpszUlfMP/Nca0LtSVgoKmQkegRRKwMsfSCNOkKaZRTq82QdSg+aXtpveMF+8hXwzahULio0KA+FmkMkdixX0A13CABVAAkDRN3kzSBFqPJp72k1guaes2CDxEq3eapApZ23zW6AKoNWXOnOdMyW8Esw+qNXKNttdY+RBL6pWJK6IcxYFSk8Ftvo1gQtNUQWMqe1kJ9ZlEqpHDxgQNnr6WYqoNpgi7mE1JJpjKikCZ1mUzeSR6VnXbCWF/KLLIjRXp9TlYCy2llCwvHXkFwMaBkwO/+Ru/8z9mWWawy6m990i/PYyrfIUx8CRqkqi2NaxZb5o4uixVdmzmzK0m0ti2iFcaoGkpxUpYtwjqNj6c0KaSc5R5R8kkSShkQVQZc0ZbEbFeGA5kcCtHmGOsTGWuppqnVMYCivym7Vip58XNqc/K7tSa95tF9aVsvp38kVFQuyGy60t6nbkvARgceI6TJGqnk2XYbDkFGO3V+Eoe07KCb9K6v0p1vRb2tVHV7ad6y+sJc7Np7BhRY5XGxFNwysrCSY0+DW9ZnNBhBF5Swmbijp2wv6vqJU249MkKUDdIgXC2B17qVqaf882kn9DQIAgOoro+WzV/qo5lhCsS650Nsx7Qs9Z2KOg9TJI0T7LOl2CldA4WOEqpoUrVhgCHyMXLzFzLUUIHGPQ8kcCQX02euPpEXmqA1QI2y+Bzy01cuneSqsv1Hx+J/Xki5T5TA0A7Tt9Y5p8YQuxuJoOy08IuiVVGgcMrT9VwRgk1dY4rxc5mDFrcZCKAhNWwMKcy7iCioNwgYFevMEXohqKVpbgW7k871cLuveTBi0jcXzVExq1dS/YELqWdWu9Xd/hIIPtktK4ModUPiMoUaOgFgxUcZanKAKTLfKlFH64CAHcZK/tvasjx4xZEZD9X35RGDAhw9MiJC52099Vp5+6+gXPp4tXNw0cXf0OM+V5iBitVXkRjAqFwd6NzHxBlb2KQLWzB3/CqjBpbs30BMAru2+oHQmBA0mZEUTxJDvhalh9sQrlpDCJQpuzpssk2A+J2uSCDCWc2qPTx9mc84CgompgQ11X2qBAKtJ+wqRfFG6EcFxMnxl2vYK+ZA7z3JmUuY1+O+wWkAdHuRgRAukjWJSQ9qMxFTOtKjt0kr8JlulKRhYJMWKkoYb3HVGR16xu5p4XNZVcHAuTQhEpTrSHUH7mKodJk9fCRwc3NjRQHDhwAZvnQ0leuXL72vcXSUTFgVq2XMkcXBAaD7Y1uDBh+UZCxXbOYsJXLKABp5fkouDgCgfBoWnyHSp+B4QowGNXZJhb/7/Yu1EnuPKT1VjYm9lAyMJzBGCv4yO6JKCjw+WtTVKZdyELs6WBUesQKPTK/Qlw4ODIAEbLDW8Z+3ApcgNXVzCFkcyTCGMTj4r2LYZAo54ndo4NCpV/z3mC1wi6CcMwZVV00aZOYrXufYGo0ZC5JxDaPOv2CRngobUG83HZ/YNETSwTFSg4fPvoPNjcWB1NTldv5hb/1b37n55IO/u1xPn4kTVJ0sk5x0lB9ukUnxWktbkrRwEDYjTzIXOARai6HdRBu+pNVgtAOkGIlfS1mJ9Q2cTXrJobGEHYPMsYFR8HMoMlAHvAEkGgHOA8KDco1RLQNa0wOMRrGjGHc9/N8DJBA5zkEOYzooshoTKmFVpCmfpubAMYDudj2zNZzM0ExQzHAnNjXSwSwArGydLKvkCOxPyeqCNEMxhAtFabNbiBo20RXD7dmIClrzJsx5fsNTkXrF/wIdbjRDsYeM17Ns4VyrffV7VGDJFg/7xo7WaGTdX4Fuwhv3hZwhsPRNS38D2/euvbjWnQ3YYVOt4u53hw6WYZUKagktR+uARi5A44CqAtDChoKIO1iTXuaopa0S7CRy4YaUjt0CBBlw4xwe1dx7GUgSd0N73uVtIOGwIgCiQJEQyQHkEMkhzYjGJ0DZgQyYxidW1DIGEaPAKNhZAyNqyAMAZO7rt4cJDlgjJuEdLmKsre8YoKQAbEN77KMkKWMLFXIUkaaMFhZD5aPgZ0RYWtrjO2+wXBsoHPYLyFoncCYJYgwBAmIMhB3Ac5AlIK4C8PLIBpZoCkCJQLFBlA5SBKQZFUiRKSpa+Y+HyIqb/zwccaPKLRpLTR34BSPFQOYanhGqIp1YEq5Myxo1kuJBKqNR1MDKN7TeEZtefnwpfneoa/sSo7dZsl7Ox+Zf7Iwv/x969urz43zMfrrfayt3YQiIFEKzIROmmK5u45uV5BkCbLsEAiHYLCEJO2AmaCCeos0CmDsPtySNrAgcfGxEFgC8T3ydQRAtIaRbYiMIGYMrUcQGcLoAbQeQpscyPuAHsGYIYwZIEnHSBONbqahlAGlI6RKkCSETmbQTQlpIuh2GIkSpCQ2BGUgcR3UZLj0SlAAlWISpBAInQtUIuh2gCwlJIoceLngKMdCMNKBNow8ZwxHBuMcGOUa41zQNzsYjYCdPrC2DqxvABubgo2tHMNhBzkdBlEC5i7yZA5CXQAplOqAVI6ENThJ3B4crlDihYBFI29sspmVpL/oQqiGaRL0nlV60RoFYePbIvalCU0tJXcKSEqvnxDuKhIBDi8feeXcu2f7zzz5gYMHzmde/jR++qc+62mfVxLu/PJCd+nY1mDjWEIE0WPAaOTjEfJ8jI3RFrKjX8MTD6c4fGSAlDOIWYGWw9CcANxBxmegWEEpZd8mB67U+vJCt8uIhs7HGOsxjDYQswPGmovp3Y0JDaNzaK0hGAPQYDZQpGEkh5IRIAYqATKtkHKCRAGJEnRSjSzLkSYaTAJRPRcmOaEIMiC2Hs3mRAoiutjQ7NZDBOv5cvtvTgfAslAMcSEfsS/O2ZCUasVeFvtznnzTxagDw5CGph0olcJohjEZtE6w0yesbya4tT7EtdWLuH5D4+YqYXs4D8FxsDqORPdgCNBkgDwHkgSKmsVDU8k9qWjz8vlQ2PBZNIH6vNdITRYqkJwCagKDAXMmLWG3zJqzTKGgqdb/wVT0RyZKycrR0//L8tIxc6c9DgDcEpF/2snmXhSSbxoOd+bBlv5kAGJS5EmC/s2nsX1pAy+e3Mbh+R0ofRPABowawKgxtOpVFCK5soDWxubM4fiul1q1HkdJx/5aMhBo532M/W+x5AKLfV4WACYFieX4RukIY95xm40JzAlYMnvaAUjE2Jucyu3LDIaBsWFFYopkXRNZ0KOkaEWFYYKAWEGEQEjch+cjIYFAw7YyaVT23rJnyzS001AzBBAUEr0EGCBhDVAOqCG6qcbRZeCJkyl41MF2brA60Li2Psal6zdx5eY61je66I9Pg2gFKknArFx4w/Y6sUCEobWxntm6SJCm1jpN2VZTrwlLTcut2W5UCdnCUQbsrVF3lrpNRW7EsY8Mwtzc/CBh9fW2FrM7AZwxgN8UI7/Uy+ZOMJmnx+Mx2RNLA+gCmaDfWcArV8/jxLsbeO6ZdaCXwZh5zOshEupDqGPfTNJ8k4KSzQppaDaWCCb3IRc3mpFKHkRkABlanSyyuQElZaWEwEgoLS+4ERjoInTMSSoDbcUp7G4yezhSsWajmJ8pmi4lWIFu6foiVCD7u3w8Xva/cbCWg4quYRbnncQiR2DArF1uCEtVS2LJDCEgYZiU0QVwaplx/LjCs48zRkPG1vYQ129cwNl3r+PK6iEMzWloNYdc2euXsALYem0zIOgRwWggNwm0jJGTcexcEyhlg6cvtBpLPIh2fwpI8sD7UHEkuU/VXi8x4GJ1oylLYrWFumXfnJRljmJ7XZV2LnIbiMs5EwgDhw4dvXDoyIlXxqOx3A2PAwC3APzPRuNMt7OwrNTglMCuvTZioACoLAP6x/HKxW0cPWZw4mQfHbUFEgWjFwBFde9cCoE3+DL35lnAUnqggsyhphILMRUaaJXHohkTN7vSglXhIajdpCjVnqfajUAVITwRAVfm6qg5LyNuS4DzwMQ2clDENhUOlG0ECkIBMH2x2P3dHzkWhAoJKaSk0O0QFhcTnDzewwvPz+HqZh+vnX0bZ8+vYGdwCtpkENiDTykAPQ2TjjAY9pGPcog2YJe7EZojAqiFa82VhKY2TCFo0AoSDKhVXFazO5qo5nUadZzyryUTR8VmbcWJnDz+4D8dj8Ybs9zw+57HqbkwAfAugF+A4c9naWebiJAkCZIkhVKMlAnp3DGsjp7EK+cewvZ6ikRuwp63R1p7jmQGznMvy6b2uwMnXGo1y1fjIjMF+U3z+cLcJ/x78Xxk8yAwQMpNgZILm5hBqgNKOpZJUx1ApQBnEM4ASsGUgCkFqwxEia38UAqmFJQOgfQ6Tp8Y4ds+yviuT2zimUfPYXn+GuYVkEkXSubAnIGzFL3FOfQWe0izBEqcdwz6AsN5qsp6j6L+U9aswlHpcuzANHrgGjoIAXtWfIUBGDVjtaJnLVi4heIaKvR684NOd+FXAQxnajnDwVkO4Ktam7/Gwktpkn2b1vm8TTYVSAhjMtB8DJc3gPPnb2C5cx1JdwCtlpsIDlo5SmnTWo/TjKAIb+h6R/Cs7adFfhJIuGLCYpP27UHNrXJt/w1Up7VZkZ9GDCSbbAsRga20E3Ws9yEBc2K/Z8jO5ZDAuM8AQThkkNgEn2y1nEYZumLwxIkdPLAywDsX+3jr3CpubT6JjW2FkdaASkCUopt0kSUjbG9sYDAcQthACxeTlJbIoGIDd0UwHrVWmxBUMI2mUyKytbXWa96kqIvWLvKyV1LUvZv5j/XCRIQjyyuXlhePfFVrbXbLbw4aOHB9MV8wRv52YtRhVvLNIoZsl0cCqAGMEvTHy3jz6gmsHFrDyukBKNuCi0YmrPhoAmFag2b9+1QT9Nurt2l4kFp7egjGVmCSKUKvsF2HgoIv1VYqFhJPfguyB4mQ9SDKFjKFFIgze1ModsVbtjs0hQIquAzfbD5mOycYPYhJwLQGJWNg1EEXHTz+gMbJ09dx7iJw8dpJnL/E2BnNQcw8iBhpmiFdZmztbGNrewvGjMFE0EFzaVnoDLyGhM2dQbHcMaIlOWCqTamVHaRS60psY82Cz6+QBuYynGayhw8pMCdy4sQD/0RrfWnmJufbQYlHpKOmve0A+GWt5UHF6pSGeYiVguT2RFKkYRRjbfwIvvTuDj6ydBGHlocAJdNvvn2GXQexopDqVBG1dSaHLE1zkZGvHfgTsOJ1Qk8qAva5k/s54dS1B3mNgNQBCSDOoClznQWWVBAPMlf54mJplO06IFaWjARg0AdoDCMKhpZA0oOAkdAISx3Bs48DJ49vY76T4J13Fba2E+SSgRWD0gwLiwqsUmxurWEwGNjfRYxcjwtioD5YJkEbUo2bdp0D2rbcVHKiKeiYzDkDtQ3bhffxu3+YsXL01PWjR07/fXfv3nngTLGbIvIP9ZjOgPkPaOQPMgkSnUKIoZkwSA7h0vYTWHh7Ax986hayeSe250d5p2xsOyhAzI4cdyrWvMTEhzPXb5cg1Kt25zq3URlBr4ZvDOHEMbbOo1DqQgwGcwZDnkZ2zbKGCklcAUHYRz5cfrH1TInatJS9PoYcXQiNAdoC6wTcPw2VbWFlYYxvfq6Ho/NDvHUeuHpriJ1xBiQ9KJVjcSFBmiisb25ga2vD9eVRdbSjHmoHXdGhOHqpJkqYSTyLZnlIC6sGt/KeFA4fWfn6aDR6Ncs6M+9o4YO4r1piQQPgrIj8Aoz6PBPfEhqCdQqV9wAkGKkEQzqK81dWcPWiwXA4dIk03x/7dlqaAKkxQYjiNYdfYTNqdXS4JbfxLfmOolZKVckBJihKQO4LokBQUNwBcwZCavMaTsCUgKAAso+xJIACc4ZEdZEkGZIkg0oyKJVBqQTKnIIaPwZROUbZLQySLQwxB6EeWA2htEIyYiyoIZ59eIRvemGA555hrBzrQYsDr2J0Oj0cPbyCI4ePIks7IGZXF6qmJvUkvxxU882uppITefJhv0tmK3lN2P5I9oBbXFgcnDrx0P+QZZ21vTzvgXmcoJsgBM/XReRvkSTHQfLxHMN5YgZrg8y9mw31AXzx2jLSzudx6tg8uukASTqEQQfGdCHJBoS2ofRiJcluS+Cb/ILM5qGkPrNfJQPqoVXrSRbkKM0cq2TUjJ//oHIUQLEUeyWIlaWYxZEClMJIz3adsxt3YAW7KMyTBJmN34txCJf1OxfJldPezeqwsoBl+0VYQFZMjDJI2aZ025htgZ0kwJlThLmlIQ4vZXj7/BzeudiFRg5WA6QkOLx0GAnP4cbaFWzTLeihbQsswnCnNy5Fqc138hECZxM0imr3uFLMo+2zqyT8lbyR3Wdp3M6bgCxihYXlYxd63aUvaK31Xu539bM/+7MHdjL/nu/9JH75l341/JYGcE0EmwR1hhSOGdEZOy0vIgKrFKNBD6OtBOhcwcLSEAoZ2DAIW5b1kQWbPNZO7L0cQ1OBU2v0ozAGhq27hOAJ849yV2Y7WxY+n/G0sl9y5CW8xA7SMaUgyhxIMoBTsOqAVQ+gBEqlUGkHnGSuUdbmF8wdkErsn5QClAAqAziBCjwRBX8y+68UxCkUJ1CUIuHM/p0TECkYSgF0wZLZTgcidHsdzC12QehDk8LOdh9ibIMpCMi6KbqdDowmjPO8WOdupBz5Llk2O9Zgu8q1403c6DhMMYk6te259rn41icblqly7YjzMtYLM9KsJ888/eGfy5LOLyEc+NqFUbuTOU5oWwD+hRg5SZJkTPIiYOalGHoTEC/g4vqLWH9zCznewBMngPmEwDSGGXfdjZDfsRcYeokyBzGBt5B24FScK1XAVq/jGELJrLH1CFLUHxIbOiADKVdvAcOQDcMgHUc9E8jf0J5hYgVIB37sgNjOPNl8Jyi+ins8aiqhJim1CdAUz7DTtylE2M4Y8QBGD9DNBI89msHwZWS8iLPnCLlOYFQOwQCdboZjh89AcYIbN65Aaw3SeWucYHyI5nsyBJi2e6fqcOraaOHnU9aYfFJipYztdTx29NSlQ4tH/r/GyM5eQHNHgNMSsgHAGoB/ICJHCQlrjF4AMC+udyyHgXTnsDH4CN48n2Iu+yoeOGowR4fszZbsuJmUO5zLVFRyncunyavmw65aX7xsIzKEfYcxO7Cwq824JFh13fdSkEoh3AVEQbFyBcsumBWEyA2x2VwIsJ6K0C1CNftn4rTV7JsyUts+5juImEGKilJAJcQtyArjANkDG9gTXPVhyICTEZ5/bBFzPAKhi7fP59AGIOpAETDXBThZARNw/cZV9E0Ok9ciIj+VWpHjLTcZzBJPUM3zVMmAcLOEo+NZQbGShx56+l8ZI69jirbAXfU4E8BzBcAviqDHkpHw6HkizNuAW0MnYyR8BGtbH8Qr54YQeRtnVnJ0EgPlGi8BQGsdJOCzs2t+wVFl0VLQoVCu//MtNqaoNVTo4ZqHkmAPpTHS6B4oH8tuXIJt7QUKULaOQJK55D+11X7Yyr/tdUlA3HW9W+xOWAcYcsQBOtYL+VEKcd5H2ZCEXaVTRCq9XWWsWGO7vMadCKC2IBjDUBecpyA1D0UJYPJiovfJR+eBbBuDXHDxchd5nkIoB2gHaZrg8OGjAAjXrl2CaAPkBrk21d2hbvTctO0JCoFRG7qhScW+GtVPRURgqfqFxSPbWZL+rwBu7Ocev2Oh2gSy4G0Af8MewpmA8hcEZp6ZwBjD8A5GZh6Xb34TBB1Q9hpOLyl0qAdO7aFgT9qD8jBUo4BL0FTrN9UdMc32Gq600tR/h3ENm8wZiC0zJpSCXQGOVAdCCpAEBJvbCGVgso8n7hT5HIld6AW/45NSCHWK6U/7KFvLsZmwDdtCfTEvShGyf/50F1MWIgmA4rG9HpQBnMFAXPsOoHUCaDuC8fRjGZJkB8g1Ll8ljI0G2HqSLM1w7NhxsAKuXLqA7e0cSjG0BqoraKR2u+ye01RAFMzXlL6nJEiIbSirVIoTJx76HZV2/+WsLTb3Isepg+cdAH9TBCCTgFT+QZ3rbkpdSDJErgCmI7i68SLmLnYg/bN44Kigm07rAJB9M9jstA7INUpKhT4uvUXdu9W9Hk068YggpGy1301lCqcuYbf1GEM+J0kBSkFqzoGs60ai2QUdtvaiBDAFU5e5bmgCfLuNAw+5nMdAuU0GpUJnea8aEEqwKK5tqiblmmJ7bkZqDGHj6iAdUJoDPEZicjz5wBEkegu/iXWcv6yRm66tzLvw9MjyUSgQLl9+F5ubm2DOi61+xAwU3S67g4aCHKf1sy8OEccqknLvnTE/t7R94tjpv5Oo5OIMpZW7D5wJnQUePP+DCFLSSZawelbl3M2ZIKpvwTM+hps3juJQYjCf/iaW0UGv12ttb9kvaKpMWJ0sQJHw+xymQUcXtZbqIFfI7liGxzFbLkQjTh1oUusRmO2/cwpBx0pmcQalUjCnyI1VuiEhGLKEALsOANuXltpbhBlEiRsmdh0CxIW0VSlJFcpRWeBU8wmnkCMCkg5IUrsYgzSEDQzlECGoRMFgDKIMSd5BihxPPtrDCJvY1oJr13swZmQPIACcMJaXD4MAXDBnofMxtJ/toZayArUPr1GN2QzzGiKq9Qf6iMANqyUJjh1/4J0k6fwz2P5KvBc8TkhTvwXgr4qgA0OiU/OcCHXVuAsiQGMLN7RgsPEx7GSP4vHBv4aszEP1BqDuFphHtjg3PgwyBpKslw2NZLXQEkmg8gSaDbQyE3MionAW3RXufA5jvN6WIwsEIJagobE8/YtZfSKbzBfjD3M2FFMZhFIIJSDq2KZJKADzABIYTp1mQAaiDJpSaGNvLKWScp0L2YKnuBoIK0dNc+LAaGdytDEgSZ2QiSl2w/gKfTE/VMv3iso/2X6zIuyhFEAG5Xrh7DWagxHBqIPiRH/88dPQ+ix+4zdew/rOIWhZhFBqQ75kBwuH5nFSHoDOE+RjA6MI+XgADgcFhd0Mjg5wIFMr+GUvmipCNM0M5byPIqDb6Q2Or5z+x0ol5/frbe4acCaQBT7n+a9F8Puh+QdB8pRAHrLlDnsjbm8O8dZwATj+YRy59QoeWFnFkiFkvAhDCUbJNogMsnwBhqQofhkyINKAGsIUhTBqTfL9z5Sd5lRGMzamrORAZU3APZ5L72T/IXGNmClYKRj0bN7BCkDm/j0DKHN085z90NmGaoIE4AyM1DkHAyCxE7BsqVSrWOOFTTrW+0AV9LGnpiG2tUSp1O2eMTBmXHYNu+5ldkNCXOv+tkSXLxA75R3XbOpDOfbsoMudFANPP/0YBv0c//rXL1qP6GImphSkgCOHj4GpA6EhVm9ZIRGRcnkWqBSZ3L0uRzUauqzNsSd8mECU4PiJBy/1uot/t1632XsX1l3cf90CHm9dAC8B+D+SwncYGT4CIGHFbhgO6HSAx89cwenul3CmO8BCj8FdQd7bgoDQGS3BuEEve+Fzq+xCQwCqKN6FLrxYZ86m6BJoFlmri4eo+EDK4qcuxhyUO/EzEHXAqgOVJDDUK2hQm8ynweMUBB0wqQI4QMeCg5SlnsnXve0Zy+7fPOXsOwcsweB61igtW/5c+wuKOompCf1REJp6BpKKHKhUYKViUrPYrMBlVd+HtdoYEDFGwxH++S9/GV//+k0kahkGqRtYtO8mz3NsbazizbdewerqdRidI8+HEG1gjHbSWHpCKaAOGt8Ay9VitrL1LMUKi0tHt59/9qN/Z37+8E8B6O/X2xxYr9pt9LR5GwD4AoCfNbn8LZLObwG0bbRxCa7CUCd458JJ3Oh/Dy7sPIur/Qw7ug8aayRaA2oHoAEI2tYeiuidg7Z0+7F7JoechyI0Nx36A8UOoYkNz9i2bDBJKfJQFEltfkGqA07mwOk8lFoAeAGQHojnwbwEVktQvATwEsDzEMxB8QKYF8A8574ygDqOWevASAogBXMXzD0IMuu5OAOpHsDd4nvkHsMqg0o64MSC0hfrIY7iprT4YlZFg6gdRfAHEFnv57oR7N/9VwpWDuiUlQeC60RgTtHp9PDxb3kWh5YVTL4NkhxkCAwbxiIhzC0u4sEHHsH8/KJDIQcj6lLrvtidYCs6n1HO5th+uhTHjz1wtddb/vt10Nz3HmdG77ME4AeJ6ccE4xdBZtnmsWypWRg8/FCC44tvYyV9FSe6l9DtjaBTWIENsd3DtmUDYMVQVE60t8/qmCAca3odVrUFrUSVleg6YM2EeiA1B8IciDsgTgHJAGW7AIQysOq4vMMyZozUeh52MlisoF29RzGXLBElABG08XrYNiwkSRz7xa4PTqEqZSrtM8beWUhzj2klb/A1IDedamAHxMLRcVsrE+sp/LVjhuQj/PaX3sI//6XfRpoegqYuhBSEBYbGYE0Yj0a4evUS3nnnVfS3t6D1EKLHxf6ekLRhpmC7S6DjIOLma8h1jatiLD1JEiwsrmy/8PzH/tlcb/EnAFy9HW9z1z3OjC92A8DfEyN/AZL8KiR9m5CIMgkEI4xojDfO5zh79Tlsmm/Hje0HsNafw864ixyJe0cDsBohUQKGcnP4bTsgy5yF2Y8uN/vNypqbzRsIytZiDEMMI6EOFHfB1ANzD4p79qRXHUB1gXQOoAyGOgB3AOpCuAfwHEh1wWz7z5g60AC0eAJAWVVOlYG5a+dyXG5kQZdZEUKVWaKBfTgYJmGl+qf9UgWjR57+DrqvCWkxVs2BV4L/u7Kd1UnStV6NO84TZmCVQiUdqCSzOm1KQWVdPP3MQ3js8ePoD2+BzNC27hhjpYaZkCQpThw/jTOnH0HW6QUspql4mmqYVu1TDMfMOSh8KqWQpb38xIkHr/W68/8QVh/jtu2eAWcX8IwA/CsI/gIM/RpBnTMwOYxB4rYDXL26ja+/M4+NzndjzXwM66vHsbOzBG06tjYhORRysDipKN8+Q867sP3vokboQBMWPcvwjh1T4/Wm2dUx/M3Vsd5FdcDcgfiwhjOwyqCNV9m0YYxx3saGPBk4sWyala51IwKJrfyDFIwk0KIgWkEbhhGGuJCJSJUJu89jChEcp01g40sLKlcc9V82NCpDMApegyUhlM2REheaQRWAFLguCHYUO9kQjR2NTo4MmZvv4Vs+/iQWFxTG+RZYtNM/8foJBJWkOHnyDE6fegBpYnvnVTDXRDVFzkm9N+xem5WztUT80qGVjYceePpfE/Hnb4eCvmPd0fux3/O9n2zrqvYxxjUAXxHBEhF1IQpksMhiE/+dYY4rqx0sHnoay5nCcLADxhAJ98HsxATBRS5TxMBMRRzNCE4pN/9C7Kcryd0j7EvPBWjIdyYrCxw4AImXoKUOhBOIuNmZxN5MtoUms39XqZtZSdw0pg0x7PMmRaMmI7MFUGJ3I9vTPOEUKknKEYIyyK/dYlR6He81vW5Bo5ObK19WezpxrycYZVBJtQXIFSMlaFq3njqDUkCnq5GPgIvnr1mvG+SeftRBKYX5bg+jYR+bm6uNOg5VpWwqoVoZopErKdj3mWW9/JFHnn9rfn75vwfw2/WwYz9h2n0BnBBALeAxrkH0NQDHAFoQQh+MeQEngMJ4NMa1G0Os9k8DySISlUNhE6xyCAO5UrCNLALDhDyxE6jCCRKkSChxav+Ovg1VZZTYLxL3OTPACYzqgNI5mKQHwx2I6kIS+yfUHKDmINwD0TyYu7aJ0yXP4LCWY2dvcu5AF/1p1nNZQsACD44ttJ6EwcqJB7IX7FDFl9/CYDWhnSa23w/kh9zIgg/M7s/U/Wm/hBRAifNsKURljvFz/+YEFe01q+ovw5MKfkyb7FaKLOlgbm4O169u4NbqOhRngMmKrgVy/XfMCbKsg7WNVYzGI6s3XmSX7jCpAIYrs0hEbA8TIrDKcOjoA6uPPvzMPyCi/9ftMmn3JXCmeB8BsO7AM0/gEyK0aRlRs8jE0MZgsz/ErdUxdvo9JMkKEpqD5ALF2m3fyUDSgUKGFCkUDJj7oGTL1W+UA0xJsdnKvL3hbA6QuVYYW6Ak1/ZPKgM7dslSwx37WGUfr1TH3Wh2ZACOgfOhFjiFUgqsAspcQurcMU0+hArYJ/hiH8I2eqrIIRF7IsF5G1ZW1J0YrTJKfoQdKAA6cSiQptdZGKV0VLfThUoyXDh/HaORdiEeygE9x3N3uxlIDNZWbzr5YP/eVLEyrMxnuFCwsd66pJ/TTjd//NEXvjbXW/zLrltF6vfbe61zYD89bu8C+DkAVwn8AxDuE3jTQJ9AgnkNk+zoBVy4tYib60fx9MMP48GVS5iXt6Gza8jSETokSERBMQHK7uQRcdOT0M7joKDA4esCRWhjPQVzBwLX0ayU+7tVmwG6Nt+hrv1y4ZpBYmlYSVwFPnE3Agf9cDbMKFcYBkshyXmZolbl+9fCVLWc+gyLgAhWh0gpnOB+jzQGwUzYNuQ6IJr0b7BXo8FUolywJSVAk1ThscdP48lzq/jSl161IapkhVAksZMW1owTx89gbf0Wrlx+B0abQO8BgfA+FbkSu2lDxQpGAE4SPHjmqXePHj7+9wB8Hbus7XhPkQN7JA2My3n+DoCfBfBLEH6XJX2FNF9gI9tgxggZNvIuvvy2xv/2xmGc3/wQ1s0T6MsSdjSgsQPQOiADIE+hx4chJgt+hTvNhB3z1AFTF4SurZ1I5gbLbK2F0XXb4OzjmC1BYPvRFEQUBAkUWxoanBaigJ4gIHJST8V2umAjnLgmzcLrlHoC5SY7qnzZzC1xXyVNXdDVsB3WQWWr+NJ2QYBtPHWHRwk8LsPBMG/yo9pCBZHiZap8c6rAkgXzSwt44QOPYHFhDkDfKdrUnBcRsu4cTp9+GL25BadlzSjGn1FGBlzkp5YkERBUkmBh4dD2qVOPfAGgXwKwfdD36H0Vqs2Q8wBWq/oqgC8C+CqAZRJeYOEtSN4Tpbu2GZGwNSRcuZFA6AwWF46DOIWWATS2gcQAzK5z2VgiQcLCJruiY+o8iWOQqGNVZRxDZvMBF8KRZdSArPx3z1qBbU2HfEFRFSwWK1XS3G5mBy438WBhlRThinE5mRSxfXATuz99Bb3IPdgXFksghUk1aotqvaJo6K3CfrB6I2sDvBS09wu75XaO7UoYly5cw/r6OoS6xcIu2+1cSt0mKsFoNMTa+loBGOX1od0vVq6zXKnECb0wVNbFIw8/++rh5eP/d1dY17fTl/ae8TgzvDnj6j1fAPBfA/jrEDrHkrzCenyBaDAUEmh00M97ePXtBP/mSydwdfNj2Em+FVt4Hpvjo+iPxT2NdhsNqKr8SGU4IE44w3c4F/Rt4TlUcbrWtbz8yW6CekQRj5MqPEtYbykEPhAkvpwUSbcEIPEgLGZvHKjKr7LXzIuZF06i8DblDI/3Kr6DoCIrhXag1oFTAshpX5N9rwJCt5Pi+LFD6KR2pSIRWz2CoNGWOIFSHawcP4Vub85er4J7LCVvfS4Hx+qpJMXKkRPXV46c/Psi8mttPWm3C5r72uPMQFd76wN4HcCXASyQJIssapNEegTTYbKznNsDjUs3NAajY5hffBzd7DCQG3A+AAwV+2eKJbgglwK6hb+snIiGcg2XSSHLBE7A3gM45srPxsB9L8ybhBhQCkxsFyuERcqiTlSq44A9bVzWUCgocgaTJyXL5JsunTBIAZhQbkloIjlQbc9v11poCDW2llacImfxuu0Crp2tHVx89wr6Y3/NbAOr3/Tg96AyA5tb69jZWrd1nUIyyusr+B+1RE5vfjF/8vEX/3Gvu/hXAVy4E6C57z3OHt7w0CWA/xcA/2cI/w5J+nU26lWYwcBgB7nqY3skeOXtPv7Vrw3w5ddOYWv0UWj+GIY4hZHuIs8VoAHSBqQ1jNbQogHJwcjd7mfAsG9rUSBx6zSK07lsDxEYCGlbc5PcNUy67c9eybKWs5byfCgT/7DmUsn8LWjY7bMJ24DCDQlVD+B/0eRCYnlwtN0eMqEGWXqzMn6jSguQJyaYGceOHcbC4hKM1n5TqX19/umZoFSCJM2wcvQEWCVlY6qnv2FZNe+9VZri2LHTZxfnD/9VAGext9U67y+PswfvI877vAXgN62LplOQZEeQapFkkQBiJRjpEa6uDfHOjQzb3WfRW1pBRyUQnUDlBkoP7dMxISdC1+RIIdDC0CqFYdt0qUSBjVWjKZok4b2Kv8lMMZrgzyoi5TZfK1ebKPMJ3wVthTedmIYPn3yeIU7U3CfkxdJdKYfCSIp8gQI5ruo+Gf8zqPSmlV/KYazsvChg7SWuinCxHKsIvV4YxhW/nRhjTTh77jo2124CxPaail3XxTAQIuQkti3HCG6tXoceD4I6m/UwCoBK7eh5b+GQvPD8h/8CSfLP0DISfVDe5j3lcfZwATSAcwB+HsDPAPTrLHxOiXoVYja0zq2ktwG2N4f42pfP4lc+b/DF1z+AS1vfjnX+JLbwFIbmMExukOgNjHWGYb4A0R2wNkhlBKIdaLWDPNmxqxJl7Lo57OJdct7Ehx5ePF1EQxu7dZrEdjSIawvyAuT2v+/EYVnPQcpKS1Wrrvoztt1owhfxhDUnVPVchUiiDUWzLEOv10OWdOwGPuZCTKTYUOHA1u10MdebD7oeVNDloWCMQZJkeObp5/5pr7P0i9iDBvT7vY4zETxTuqz7AP43AG8C+A4I/gBTuimiDxmjT0JkUTGRNsCNdcbNjRG+fnaMMyeP4LlHP4JTy9ch5jI6w02MlAGzQJkhkpzAkgNJDwYdaErAMrIrNmDsKU+W0oUBlAoYKwcKi+3capUZBO30qO1wOUATqhViBGFncVUltdbCMyXioVoRtakAZNAmA6yUQpYlSNMUA50Hzdvu9TgtArhOiV5vDutcLoalonOCkKQdnHngwWtPPPHMn7t+eWNtH4ftNw5wZgSQAXATwP8C4Nch+DiEf1CxespAH9ZiTsBIFzTuADk2BwavvzvCleuMJx48g6dOP4qj3TGS9HcArIHN2ApKsAEbARK2/WbkPI7Y/jiQgugc4pRKnSZlKYbOVhLLyNiKAbJX2LQeQLnWeRFjt1crVG/iSQrAFCy2LYqF1ARNIcDeBpZy23VZGzUzeDFg6u6ahhYAu24Jqz2dG2PJFzHVKqebOu12e65FSTs2wGkuMGN+cVE+9E3f8jPXL2+8djdA874ATnhxpngfA+ASgH9ERP9SBN9KUL+HRD1LhEPGDE6A8hPgrKslxeoO8Nuv93H2Yo5HzhzFkw99CCeWdkC0CdGrYLMFphGINkC0AcEyjBabCyTGyqEhBQnD5LnLkcVRyAaQvKx8+1ShWNdnOwSM229qxOrIlZtuPA0blNENSo2yAgTBHlLHsHnVTKCNOUOQi5QdCGFngrRswZPaotxKa2lY86kzd66uxMR2ibHrhCbj+54EWnzGR1AqtWGaiGMn7XvqdObzZ5/54MsZL/0CcNPcrfvtng2y3UmbAqDwc5wD8DSA3wXg4wR5SCM/aYATnKouoMGkwWSwkHbw0InDeOKRJRw/MkRHXUfCV8Dqhu3ElhOuLceqwFCSuFED23ZjZ2jsvL1wWowFsLIyUQK77JaVHXQjJLZa4Wo7xuk/e1qaKbE6CuKSfrH5gYEPY7hsYyHbRQBQIVjob7xgBK2kwMEVIEm4B7VGWVsZqdLbWDljKtYPMlOwea36szvbQ/zyv/gCzr55Fpv9MXKagzGwYbDkMCCMBYA20PkQ16+cw1tvfq30fiqDSlI89+wLX3vs0Q9/+8b61q275W3eVx5nj/mPwLZh+O6D/7eAPslIv08RHtP5+LTAnNRsEsOC1b7Bxrl1vH5lCydW5vDQmRWcObqIlYXjmFNbgBlYjQNlCiFxVp5mzWHYKmoKaYiwuxltCGVISobLkCUYlB0vBpNtfzFi64dAYx+sBMc+oTlfbPXUqjlNvRugiAXr4wkNto0m506B9JQvt9p/qzoBdm8kzzU2N3egtakIbEiwH6loTAUjt9q6rjhqD4dTpx86d/zk4z8yCTSRHLhzAAJsC8/bsE2knxfB72Wk3w3ghJjxKW3MSSGdGDLQoxTnLm/i4pV1LPcYD52Yx2MPncGZI2vIOgMQ+oD0ofTIBjxiwDRC7hoqScS1omUADHJj17Sz5DYv4rGNvHJAKVeA9fJURjvxiXCdeS3H8Pt2/PeLvjTvAdjJVpU/50ujUslMaGKu0pT3dUyYx4qTlvKehwoxdQaQWOleEWxubGHY38E497ehOHUhG6ZZUXkDbTRENMbjkW3DSVPkAiwtHx099/xzf2m8o75yNz3N+zpUu40QDrCKO48C+CSA7wDkMSFZFoxPC8wSERO7ORQCIctSnDjCePD0Ik6f7OLI8hg9tYlUtpHRGKkChjy2PXEqAyUdkMqgRdnmTWakxrXue/1osY8FJ4CxYZ0Rq5/GiW31KRR9SEGZtDj8BVzszSS2TaMiXMl1bBuRB44p9dOK+kvofQLh+YD1q69vDNU/K4VC0W6JbwahDEoRdD7Ab/36b+NLX/w6rq8bq2FQhHt2W4ERA53n0EYjH/Vx9u1XcevmVRgRLC4fHT/51Av/7aMPP/tf3ryxOrzboHnfe5xpF3QKiAYAXgHwBoD/D0AfJ6HvZuo8Y2BWBPq0NvkSGSIiwnBocP6y4NLVLcz3FE6enMNjDy/j1LHjWJ5jMBlk5opN8A2BctjBOdFQMCBN0GoOEJsoCxiikqIPmBWDva4zBMbY73lWjKUat1mFHwoE46kQaJ80dmyMF4z39HnN4XhioFj6JDPvaxW3MtD2rI4AEWxsrOPs2asYjHQxY+PrWNW5H0ARY6g1hkNb/Ox15/NHHnjs508df/SzbaCJ5MD944UYwBEA3wTgu4joQyBzykh+TGAOg5AIMidMaKBYI0kIRw4t4KEHT+CBB47iVPcmmAVZCiTJCAnnYIxAyMGKMErny/Uc7LwOZU6sg2FTp3IQjlQKiHIEQbAcF+RWgaDoRrAd2QoS5CF1jyMQaGPcwqVqviMT6jCh8idqjFnlv42yetScQ2OEfKzxxd98E1/8whvY2R5gqK3n1EaXS6fcbzTaepxbN6/inbdfhdE5Hnvkia8/89zHv+1ukwEROPsP4RhWq/YpG8Lhm4nwqEAv5aBTgCwCYieulbJnLQO9bg+H5gSdFDh5bBFPPXEUR5YJHTUCyRCEHJS6EMnPv3ACUqkbIgMgCYzYUWClnIYZij2DINaWNfOz/wjGiSn1qoEu566Hai4UK2o93ACOFRBsCsu3hWehGL0FTgomA0M7GIy28Nabl/Hrn38NW5s5RiODsRU1gA42svntbeM8h+QjvHvhLK5fu4jTp8688dQzL/1APlCv3UvQRODsD0AEoAPgBICniPAtRPQxY8wpsJwyks+LmEVLCtl5EYGCUgQmg8WFBI8+dBQPnlnG/BwjVQZL6RDzCx1LCPh1FEWfJMMkczAg5xEshe1HGgQGYJtHGF/Y9CMGXuCDk/aOAKFgpWLLv9VznBYPUwdS0+MkEBj0+6t47dV38Nu//SY2N8cYDQnauN5pEauhJm6loVh9Nm0MBjubePW1r2FhYenys88++70sS1/FhFaGCJz3Dog8mXAawDcD+HYiPA+SFUAvAfpEng9TUXOuKp5DKQKJRpIwslQhUYSVpRQPPriC06cOYb6n0Okw5rsKacpgAsas3AQkOdkjH1IRBBoGGoBy9ZkEAlUMxQnZnKkBnGK57p0Fjhhgc30LX/nSa3j9tXfR74/QH+bQUDCGiy5xux/UwIjYLQYiMFrj8qWz2N7evvb0U8/9QCc9/IV7DZgInIMHkAJwyIVynwDwMRBOMckhLWbJyPC0MYa9mAT5UQAwwAapUpjrplha7ODYygKOH53H8mIHiwsZFhZTdDoJlLI/o9jLKtnOghwaCWdIUqs5bUw5dWqBo0oFGkENOD46O3jgaG1w7eot/PZvvoKL565hNNbIc8FQGwgxxtpvfjNOI9zmOOPxGCDC2tpNbKzfvPTUYx/+foC+ggOSdorAuT8BRAAyAGcAfATAdwJ4loh6RGYx16MlME4bbdglBa6fDWBoKEVIFIFhkCYJFhd7OHFiCWfOHMWJ40tY6KXIUkCM641TBJW6eRSVui4BdmKCZEe5OQnT+3InOigQ9KgunKIi1JNC30wq+zSLWKygkEWM3c4ghO2tHZx95xK+8uW3sbq6iXyUQ9sxJGhjOxi0bzWCYDweFaAcj3MMh33kZvjayqEHvhOGr6JWSb2XoInAufMgYgDLAJ4D8CkHpCNEpIhlUWCWtMmXjOSLZIsupTCi7+cCQbEgVYylxR6OH19GNyWYfIw0IRw6PIeVE0tYXJhDp9tFJ0uRJmkhNUUux2pjv5h9LagkBPzDfGhoYKrDJ1Kd4GFyS2+JYYxgNMpx4+YmvvY7b+Hc25ewM9TItUDnLvF3rTkivm/OIB+P3NSFRm4MjB5Lkqp/dGLlgT++enNz7X4JzyJw7g2h0AXwAIAXAHwYwLMAjgPeRZjDxuRzRvRhgZ5jlZCf+FScuGZODcUCJkGiFBJlSYcsI3S6KZaXF3Dk6BKOHj2EI0eX0O1kYEWuY1uQpgmSxIpaKFXO0RTdZNLsRrACJr5dx1HewT2jDWE0NBjnBhsb2zh/7hreeOMC1je2oMc5RrkJ1oJY0GjXySBGoM3Y1nCMcXUr0b1e78+Md9Rfw4QdNvcaNBE495aVOwrbofAhAM8AOAbgMIA5QDqG9AkxOhHoE3bkgEj5Jk/XzsJ+VSJrKFZIEgWVMNI0RZIoZJmtoSgFdHsdHDq8gJWVZRw6tIg0TWwhVbTV2mZCojKbR7neOgBuO5u96bU20FoXucxoNMbVa1u4cnkNa2tb2NzoY3t7gPE4R240jC6jP+thLESN2/VpxMDo3Deoytx8921let8/GuZvtDFn9wNgInDuj1AOAFLY1SaHATwI4HlHMJwG5DAR90Qk1WZ0EkBHYFacRC/ZxbTsNsJ5TThAsQ3DWNl/S9xWbGZGkiZIlAONG6wj0khUgjTNkCYpenNdZFnqvIuB0Qb5eIztnQHGo9y28ohgNB5juz/CODdF94EWWDkoI0WoZxxDZvvY2NVp7PcMDDpZdm1+fuH/sb0x+u8hdE8LmxE47z0A+ZxozuVFR1xo9xyADwI4BaBHREpgugZ6RSAdI3pFkbI6Mr4/TYwFjctdOJBeL8TKi+VLtlHT09vMdidPOVtTrnMX4+osxX/bnavFLJA4uSnvXYgcceCaNYMCJzNDJbw211v8R8O+ftloeQO23em+B00Ezv0NIk9xzwFYAfCwC+2eAfCkC/USIlI21MlXQNIhKGiMTxAksZsQirXZtvrPZQu/I8MLurlYmsUM0eLCQSpFOfzKRr8k2D2Pp5ELzQAPLDdaYPvZ7L+nqZLeXHZNcfqL+UD9fL8/eNcBxrwXABOB894DkduKi3kHmuMOUEddfnTK/TlHRD0RSQAoLflDgKTMBIP8CCCJFTmUDhBuNkPZbuPZMynX5lbHC6RRD/I9b/ZftW1IFWNF7hM1TjrJYGF+/gv5UP6b4WD85dEwX4VVN7nnXQARON9YQArJBqu7a71TzzF4y7BtQSfdn8fc35dFpAPKT3uNAi16Wcgsk9j4TQROkopgjCHAdMKwrZzl0RBdUtRMPLRaggasYBaWlvKVI4ff1pr+9vqN7X9ChCvb2/0d7CKAfr+DJgLn/Qmk0EM5fd4CWD3Y7oYjjpDoACAi6gpkCYJlAIvOqykAxIrm04wfNWIynZueMSZFdTZBRExOxBpC70L4LRBeT9P0K71e51yn29m4fvVmH3W5m/coYCJwvrFAVPdQoRB0+L1gjUIBPu9qlAPeHCoBHUYOFGNYEcCB+3OEGVZrvJfAEoETLdoBuPNo0aJF4ESLFoETLVoETrRoETjRokXgRIsWLQInWrQInGjRInCiRYvAiRYtAidatGgRONGiReBEixaBEy1aBE60aBE40aJFi8CJFi0CJ1q0CJxo0SJwokWLwIkWLVoETrRod8b+/wMAjsFufS5m7rcAAAAASUVORK5CYII=',
        ]
        
        var current = 0
        
        $('.in-td__left__img img').attr('src', colors[current]);

        $('.in-td__left__inner .btn').on('click', function(e) {
            e.preventDefault()
            if(current <= colors.length - 2) {
                current++
            }else {
                current = 0
            }
            $('.in-td__left__img img').attr('src', colors[current]);
        })

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        var params = {
            min: 1,
            max: 9999
        }
        
        function plus(container, field) {
            var thisValue = parseInt($(field).val())

            if(thisValue < params.max) {
                $(field).val(thisValue + 1)
            }

        }
        
        function minus(container, field) {
            var thisValue = parseInt($(field).val())

            if(thisValue > params.min) {
                $(field).val(thisValue - 1)
            }
        }

        $('.counter button').on('click', function() {

            var thisContainer = $(this).parent('.counter')
            var thisField = $(this).siblings('input[type="number"]')

            if($(this).data('action') == 'minus') minus(thisContainer, thisField)
            else if($(this).data('action') == 'plus') plus(thisContainer, thisField)

        })
        

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        var _classes = {
            open: "is--open"
        }

        function openDropdown(container) {
            $(container).addClass('is--open')
        }

        function closeDropdown() {
            $('.dropdown').removeClass(_classes.open)
        }

        function toggleDropdown(container) {
            if($(container).hasClass(_classes.open)) {
                closeDropdown()
            }else {
                openDropdown(container)
            }
        }
        
        $('.dropdown__title').on('click', function() {
            var thisContainer = $(this).parent('.dropdown')
            toggleDropdown(thisContainer)
        })

        $(document).on('click', function(e) {
            var targets = $(e.target).closest('.dropdown')
            if(targets.length <= 0) closeDropdown()
        })
        
    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {
        
        function setPaddings() {

            var classes = {
                paddingLeft: '.is--c-pl',
                paddingRight: '.is--c-pr',
                height100Per: '.is--h100'
            }

            var padding = document.getElementsByClassName('navbar__inner')[0].getBoundingClientRect()
            var height = $('.navbar').innerHeight() + $('.footer').innerHeight()

            $(classes.paddingLeft).css({
                paddingLeft: padding.left + 30
            })
            $(classes.paddingRight).css({
                paddingRight: padding.left + 30
            })
            $(classes.height100Per).css({
                minHeight: 'calc(100vh - ' + height + 'px)'
            })
            $('main').css({
                minHeight: 'calc(100vh - ' + height + 'px)'
            })

        }

        setPaddings()

        $(window).resize(function() {
            setPaddings()
        })

        $('.anchor').on('click', function(e) {
            e.preventDefault();
            var _this = $(this)
            var aid = _this.attr("href");
            if(!aid) {
                aid = _this.data('target')
            }
            $('html,body').animate({scrollTop: $(aid).offset().top - 100},'slow');
        })

        $('.item-carousel__items').slick({
            prevArrow: '.item-carousel__controls button.is--prev',
            nextArrow: '.item-carousel__controls button.is--next',
            swipe: false
        })

        $('.production-carousel__right__list').slick({
            prevArrow: '.production-carousel__left__arrows button.is--prev',
            nextArrow: '.production-carousel__left__arrows button.is--next',
            swipe: false
        })

        $('.production-carousel__right__list').on('afterChange', function() {
            setCarouselDatas()
        })

        function setCarouselDatas() {
            var _this = $('.production-carousel__right__list__item.slick-active'),
            _thisTitle = $(_this).data('title'),
            _thisDesc = $(_this).data('desc'),
            _thisLink = $(_this).data('link')

            $('.production-carousel__left__heading').html(_thisTitle)
            $('.production-carousel__left__desc').html(_thisDesc)
            $('.production-carousel__left__btn .btn').attr('href', _thisLink)
        }

        $('form').parsley()

        var phoneInputs = document.getElementsByClassName('input-phone');

        if(phoneInputs.length) {
            for(var i = 0; i < phoneInputs.length; i++) {
                new IMask(
                    phoneInputs[i], {
                    mask: '+{7}(900)000-00-00'
                });
            }
        }

        console.log($('.is--file-form input[type="file"]'))

        $('.is--file-form input[type="file"]').change(function() {
            var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
            $(this).parent().find('.is--label').html(filename)
       });
        
    })
})(jQuery);
function openModal(modalID) {
    $(modalID).modal({
        fadeDuration: 100,
        showClose: false,
    })
}

(function($) {
    "use strict"
    $(function() {

        $('a.modal-open').on('click', function(e) {
            e.preventDefault()
            var thisModalId = $(this).attr('href')
            openModal(thisModalId)
            return false;
        })

        // openModal('#modal_form')

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        var isMoved = false;
        var items = document.querySelectorAll('.navbar__aside .is--ml');
        var isMoved = false;

        function openSearchPanel() {
            $('.navbar').addClass('is--search')
        }

        function closeSearchPanel() {
            $('.navbar').removeClass('is--search')
        }

        function openMobileSearchPanel() {
            $('.navbar__aside__btns__search').addClass('is--open')
        }

        function closeMobileSearchPanel() {
            $('.navbar__aside__btns__search').removeClass('is--open')
        }

        function toggleShowItemsMenu() {
            isMoved = !isMoved;

            for ( var i= items.length - 1; i >= 0; i-- ) {
              var toggleItemMove = getToggleItemMove( i );
              var delay = isMoved ? ( 0 + i) : i;
              delay *= 150;
              setTimeout( toggleItemMove, delay );
            }
        }

        function getToggleItemMove( i ) {
            var item = items[i];
            return function() {
              item.classList.toggle('is--moved');

            }
        }

        function openMobileMenu() {
            $('.navbar__mobile button').addClass('is-active')
            $('.navbar__aside').addClass('is--open')
            $('body').addClass('is--menu-open')
        }

        function closeMobileMenu() {
            $('.navbar__mobile button').removeClass('is-active')
            $('.navbar__aside').removeClass('is--open')
            $('body').removeClass('is--menu-open')
        }

        function toggleNavbar() {
            if($('.navbar__mobile button').hasClass('is-active')) {
                closeMobileMenu()
            }else {
                openMobileMenu()
            }
            toggleShowItemsMenu()
        }

        setNavbarDefaultMode($(document).scrollTop())

        function setNavbarDefaultMode(height) {
            if(height > 10) {
                $('.navbar').addClass('is--scroll')
            }else {
                $('.navbar').removeClass('is--scroll')
            }
        }

        $('#openSearch').on('click', function() {
            openSearchPanel()
        })

        $('#openMobileSearch').on('click', function() {
            openMobileSearchPanel();
        })

        $(document).on('click', function(e) {
            var targets = $(e.target).closest('.navbar')
            if(targets.length <= 0) closeSearchPanel()
        })

        $(document).on('click', function(e) {
            var targets = $(e.target).closest('.navbar__aside__btns')
            if(targets.length <= 0) closeMobileSearchPanel()
        })

        $('.navbar__mobile button').on('click', function() {
            toggleNavbar()
        })

        $(document).scroll(function() {
            setNavbarDefaultMode($(document).scrollTop())
        })
        
    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        function closeTabs() {
            $('.tab-item').removeClass('is--active')
            $('.tabs-menu ul li').removeClass('is--active')
        }

        function openTab(id, name) {

            closeTabs()

            $('.tabs-container[data-tabname="' + name + '"] .tab-item[data-tabid="' + id + '"]').addClass('is--active')
            $('.tabs-menu ul[data-tabname="' + name + '"] li[data-tabid="' + id + '"]').addClass('is--active')

        }

        $('.tabs-menu ul li').on('click', function() {
            var name = $(this).parent('ul').data('tabname')
            var thisId = $(this).data('tabid')

            openTab(thisId, name)

        })
        
    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5qcyIsImNoYW5nZUNvbG9yM2QuanMiLCJjb3VudGVyLmpzIiwiZHJvcGRvd24uanMiLCJtYWluLmpzIiwibW9kYWxzLmpzIiwibmF2YmFyLmpzIiwidGFicy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuICAgICAgICBpZigkKCcuYmFubmVyJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgbGlzdEl0ZW0gPSAnPGxpIGRhdGEtaWQ9XCIlaWRcIj48YSBjbGFzcz1cImJhbm5lcl9fZm9vdGVyX19saXN0X19ibG9ja1wiPjxkaXYgY2xhc3M9XCJiYW5uZXJfX2Zvb3Rlcl9fbGlzdF9fYmxvY2tfX3RpdGxlIGlzLS10eXBlcl9mYi0tb25cIj4ldGl0bGU8L2Rpdj48ZGl2IGNsYXNzPVwiYmFubmVyX19mb290ZXJfX2xpc3RfX2Jsb2NrX19wcmljZSBpcy0tdHlwZXJfZmItLXR3XCI+JXByaWNlIOKCvTwvZGl2PjwvYT48L2xpPic7XHJcbiAgICAgICAgICAgIHZhciBsaXN0VG90YWwgPSAkKCcuYmFubmVyX19jb250ZW50X19saXN0X19pdGVtJyk7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2xpZGVyID0gMVxyXG4gICAgICAgICAgICB2YXIgaXNTbGlkZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0VG90YWwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICQobGlzdFRvdGFsW2ldKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNQcmljZSA9ICQobGlzdFRvdGFsW2ldKS5kYXRhKCdwcmljZScpXHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc1RpdGxlID0gJChsaXN0VG90YWxbaV0pLmRhdGEoJ25hbWUnKVxyXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNJZCA9ICQobGlzdFRvdGFsW2ldKS5kYXRhKCdpZCcpXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGZpbmFsTGlzdEl0ZW0gPSBsaXN0SXRlbS5yZXBsYWNlKCcldGl0bGUnLCB0aGlzVGl0bGUpXHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxMaXN0SXRlbSA9IGZpbmFsTGlzdEl0ZW0ucmVwbGFjZSgnJXByaWNlJywgdGhpc1ByaWNlKVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsTGlzdEl0ZW0gPSBmaW5hbExpc3RJdGVtLnJlcGxhY2UoJyVpZCcsIHRoaXNJZClcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLmJhbm5lcl9fZm9vdGVyX19saXN0IHVsJykuYXBwZW5kKGZpbmFsTGlzdEl0ZW0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQobGlzdFRvdGFsW2N1cnJlbnRTbGlkZXIgLSAxXSkuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldFNsaWRlKGlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpc1NsaWRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNsaWRlciA9IGlkXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoJy5iYW5uZXJfX2NvbnRlbnRfX2xpc3RfX2l0ZW0nKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5iYW5uZXJfX2NvbnRlbnRfX2xpc3RfX2l0ZW06bm90KFtkYXRhLWlkPVwiJyArIGlkICsgJ1wiXSknKS5hZGRDbGFzcygnaXMtLWNsb3MnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuYmFubmVyX19jb250ZW50X19saXN0X19pdGVtW2RhdGEtaWQ9XCInICsgaWQgKyAnXCJdJykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCcuYmFubmVyX19mb290ZXJfX2xpc3QgbGknKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmJhbm5lcl9fZm9vdGVyX19saXN0IGxpW2RhdGEtaWQ9XCInICsgY3VycmVudFNsaWRlciArICdcIl0nKS5hZGRDbGFzcygnaXMtLWFjdGl2ZSBpcy0tY2xvcyBhbmltYXRlZCBmYWRlSW5SaWdodCcpXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmJhbm5lcl9fZm9vdGVyX19saXN0IGxpW2RhdGEtaWQ9XCInICsgKGN1cnJlbnRTbGlkZXIgKyAxKSArICdcIl0nKS5hZGRDbGFzcygnaXMtLWFjdGl2ZSBpcy0tY2xvcyBhbmltYXRlZCBmYWRlSW5SaWdodCcpXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRTbGlkZXIgPj0gJCgnLmJhbm5lcl9fY29udGVudF9fbGlzdF9faXRlbScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuYmFubmVyX19mb290ZXJfX2xpc3QgbGlbZGF0YS1pZD1cIicgKyAxICsgJ1wiXScpLmFkZENsYXNzKCdpcy0tYWN0aXZlIGFuaW1hdGVkIGZhZGVJblJpZ2h0JylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5iYW5uZXJfX2NvbnRlbnRfX2xpc3RfX2l0ZW0nKS5yZW1vdmVDbGFzcygnaXMtLWNsb3MnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuYmFubmVyX19mb290ZXJfX2xpc3QgbGknKS5yZW1vdmVDbGFzcygnaXMtLWNsb3MgYW5pbWF0ZWQgZmFkZUluUmlnaHQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTbGlkZSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNjAwKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDE1MDApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldFNsaWRlKDEpXHJcblxyXG4gICAgICAgICAgICB2YXIgY2Fyb3VzZWxUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRTbGlkZShjdXJyZW50U2xpZGVyKVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlcisrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRTbGlkZXIgPiAkKCcuYmFubmVyX19jb250ZW50X19saXN0X19pdGVtJykubGVuZ3RoKSBjdXJyZW50U2xpZGVyID0gMVxyXG5cclxuICAgICAgICAgICAgfSwgNDAwMClcclxuXHJcbiAgICAgICAgICAgICQoJy5iYW5uZXJfX2Zvb3Rlcl9fbmV4dF9fYmxvY2tfX2lubmVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldFNsaWRlKGN1cnJlbnRTbGlkZXIpXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGVyKys7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFNsaWRlciA+ICQoJy5iYW5uZXJfX2NvbnRlbnRfX2xpc3RfX2l0ZW0nKS5sZW5ndGgpIGN1cnJlbnRTbGlkZXIgPSAxXHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIGNvbG9ycyA9IFtcclxuICAgICAgICAgICAgJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTTRBQUFHbUNBWUFBQUEwejd0SEFBQm51RWxFUVZSNDJ1eTlhNVJrMTFVbStPMTk3bzJJekhwSVZhV1NKVm5Jc2lTM0ROaVdFWjZlTlkxZkdMbHBnekUwREt6Vm1LRmhtQmtZY0h2QVRZL0JtTEVNR0RDc3hXSjE5OUFOYTJqYVBNeUFHSG9BZzl2RFlNa3Yyb050MmJKbGJObVdWTGIxcW5kVlZqNGk0dDV6OXZ3NDU5dzRjZlBjUjBSbWxsTHkyV3RGWlZaa3hJMGI5NTd2N0wyLy9RS1M3Q3NSRVZwZlgvK2RpeGN2eW9rVEorUzNmL3UzemR2Zi92WWZURmRtZndtblM3QS9oWWlnbEFJUnBZdVJnSk5rQWMwRFk0eTlTWnh1VXdKT2t0NGF4MnVkd1dDUUxrZ0NUcEl1TWNaVUQ2MTF1aUQ3VUxKMENmYmhidVpNTXlJQ015ZndKSTJUcEsvR0VSR0lDSmdaUlZHa2k1S0FrMlFSYzAwcGxTNUdBazZTUHVLMWpZaWtpNUdBazJSUlA0ZVpRVVRKeDBuQVNiS0lFRkhTT2drNFNSWUZqVGZia3NaSndFbXlBSENJcU1vZVNKS0FrNlFuYUZLZVdnSk9raVhFeDNFU0paMkFrNlRQVFdHK3p4Z2pQaENhZkp3RW5DVGRacHBvcmQ4bElwcUlrR1VwS3lvQkowbGZFMDI4cjVOU2JoSndrdlNVMFdnMHg2b2xIeWNCSjBsL2s2MENUaXBrUzhCSjBrUEc0M0hGcUNWS09nRW55V0orVGdXZUpBazRTZnJlR0dhSVNOSTRDVGhKRmlFSFFnQWxTY0JKc29ERzhYUjBrZ1NjSkF1SXJ3Sk5rb0NUWkFGSmlaNEpPRWtXRkYvQWxqUk9BazZTSmNDVGFuSVNjSklzU1E2azdPZ0VuQ1FMaU5ZNjVhb2w0Q1RwS3o3bEp0UStTUkp3a25USWFEU3F3Sks2M0NUZ0pGbEMwclNDQkp3a0Mwall5WE02bmFZTGtvQ1RwSStQNC9zTkpFbkFTYktncE1GU0NUaEpFam1RZ0pQazh2ZzRRRXE1U2NCSnN0aU5TV1hUQ1RoSkZpY0hmSjZhMWpxbDNDVGdKT25yNDNodGsxcmdKdUFrV1VEamVQOG1OZXhJd0VteW9NWmg1dFFDTndFbnlhS1NKcklsNENSWlVOSzQ5Z1NjSkV0cW05UTdPZ0VueVE0MFQ1SUVuQ1FMQWtZcGxlSTRDVGhKK2tqWWREMlphZ2s0U2ZyZUZPWUx6UHpGTk1Zd0FTZkpBbkxvMEtGenpQd0JFVUdXWlNrQW1vQ1RwSytVWlFrUlNXWmFBazZTUmNtQlBNOHJnaUJKQWs2U0JjRGpNNlNUSk9BazZTRSszU1pwbXdTY0pFdUlVaXFCSndFblNlOGI0ektqVXlGYkFrNlNCY1FZVTNXNVNaS0FreVJKQWs2U3ZUWFZVdVpBQWs2U0JjVURob2ptcGxBblNjQkowaUpLcWFwaFJ5cGtTOEJKc2dBNTREVk9JZ2dTY0pJc3FIV1l1ZXA2a3lRQkowbUgrRUkyMyswbVNRSk9rcDZTUUpPQWt5UkpBazZTSkFrNFNmWTlRWkFHU3lYZ0pGbms1akNqTE10MElSSndraXdpbmxsTEJFRUNUcElGZ1pQbmVRcUFKdUFrNlN1K3JJQ1prOGJaaDVKbVNPeGpVaUNWVGllTmsyUUpNODBZazRibkp1QWtXVVQ4dElJMFdDb0JKOG1DR3Nkcm5XU3VKZUFrV1VEaitNRzVDVGdKT0VrV3ZVSE1WVWZQSkFrNFNYcUN4bGVCSmtuQVNiS0F1V2FNU2FYVENUaEpGZ1ZPMGpnSk9FbVdKQWhTNWtBQ1RwSUYvQnVmT1pEYVF5WGdKT2twSW5LZk1VWlNsNXNFbkNUOVRUUXBpdUpkQURTQTFNMHpBU2RKWHhrT2grSTBUMm9QbFlDVFpGRnlnSWhTNlhRQ1RwSUYvUndZWXpDZFR0UEZTTUJKMHZ2bXVPRlNpVlZMd0VteW9LbVdHTFVFbkNRTHlIZzhya29MVXNwTkFrNlNKZnljSkFrNFNaWUFUb3JqSk9Ba1NYNU9BazZTdmRjMnpJekRodytuRk9rRW5DUUxhaHc2YytiTUcrKzg4ODUwcnhKd2tuUkpHTHZSV3FmN2xJQ1RaQkgvaG9nU3M1YUFrMlFaSHlkSkFrNlNuaEptUktkY3RRU2NKRWtTY0pKY0huTXRTUUpPa2lWQWt6SUhFbkNTTENocFpIc0NUcElsUlNuRjZWNGw0Q1JaVU9NTUJvTWJ2L3Fydi9vbDZXb2s0Q1Rwa05Gb1ZBVS9wOU1wVFNhVGxLK1dnSk5rVVVsajJ4TndrdlNVY0xoVWtnU2NKRDBrekJ3UWtUVFNNQUVuU1Y4eHhrQkUwc1NDQkp3a3k1aHFLUUNhZ0pOa0NVblRweE53a2lUZ0pPQWsyWHZBZURNdGRmTk13RW15Z0NpbEVxdVdnSk5rR2ExampFa0IwQVNjSkgxRlJGQ1daYXJKU2NCSjBoTXdOQmdNYmpQR01ETW5Pam9CSjhrQzRIbTF2eitKVlV2QVNiS0ExaUVpRkVXUk1nY1NjSkwwRlovWWFZeUJNU2IxajA3QVNkTHJ4cmh5YVorcmx2eWNCSndrUzJxZkpBazRTZnI1T1JBUktLVWttV29KT0VrVzBEUmFhMHluMHhNaThvbDBSUkp3a3ZRUXo2WmxXV1krL09FUFgwaFhKQUVueVFLUzBtMFNjSklrU2NCSmtpUUJKOG4rdkVITUtkMG1BU2ZKSXNSQStFaVNnSk9raDRROTFSSndFbkNTOUJRZnc5RmFwMmtGQ1RoSkZ0VTZxZm96QVNmSkVzUkE4bkVTY0pJc0FacVU0Sm1BazJSSmN5MXBuQVNjSkQzRno4WXh4c3cxWUUrU2dKT2tKM2lTeGtuQVNiS0FqOFBNcVRWVUFrNlNSY1FIUHROZ3FRU2NKQXVJMWhyR0dFeW4wd1NjQkp3a2kvbzR2a25IVzk3eWxuUkJFbkNTTEdLdUpVbkFTYklBT1FETXBoVWtTY0JKMHROTVkyWnNiVzJsaTVHQWs2U3ZoSk1LVWlGYkFrNlNCVFNPTWFhSzV5Ukp3RW5TQXpmTWZJTTMxNUlrNENUcEllUHgrRVlSZVNrelYxb255ZjZTWkR6dlR6T05nTm1rQXEzMUZ3RWthaTFwbkNSOXlBSDNrSzJ0clhjU1VRSk9BazZTUHNEeFA4dXlUS0JKd0VteWdNbVcrZzBrNENSWlJ1dWtnVklKT0VtVzlIT1NKT0FrV1VLUzFrbkFTYktBdGluTEV1UHhPUFVjU01CSnNneUEwaGpEQkp3a1BXUThIbGNsMDZuNk13RW55WUtTWlJteUxFcytUZ0pPa2o0eUdvMEFvTXBUR3d3RzZhSWs0Q1RwZFdOY2E2anBkSW84ejlNRlNjQkowdGZIMFZxaktJcEVEaVRnSk9scnF2bmdad0pOQWs2U0JjUm5EQ1JpSUFFbnlSSStUaXBpUzhCSnNvQ1A0OXZmSmxNdEFTZkpBcEpLcGhOd2tpd0puRFNSTFFFbnlZTGlXOStLU0lyakpPQWtXUVE0ZnVKMFl0WVNjSklzZW9PWWs4Wkp3RW15cUttV0pBRW55WUtTeXFZVGNKSXNBUm9pU3BvbkFTZkpNdHFtTE10RVNTZmdKRm5FeHpIR1FDa2xBQzZrSzVLQWs2UWJOT1FuRll4R280ZnZ2dnZ1djBoWEpRRW5TYnVKUmtxcFY0dUljc056NWZqeDQ0a2wyR2VTcGhYc1Q0MXpHeEZSQ253bTRDUlpnaGp3blc2U0pGTXRTUS94WUVrbEJRazRTUmE1S2N4VlBjNXdPRXdYSkFFblNVOGZCMm4rWndKT2tpVTBqaWNHbUpsdnYvMzJaNldya29DVHBJZVA0elZPV1pZM0dtTmVtcTVLQWs2U0hob250TnlNTVNsaExRRW55U0tTNTNtaXBCTndraXhxcWpFemlxSklGeVVCSjhraUpsdVdaYWtDTkFFblNWL3g5VGdKTkFrNFNSWVFYOEJHUk1sVTI0ZVNjdFgycWJZQmJNcE5udWNwZXlCcG5DUWRnT0dUSjA5K280dmRBQUFPSFRxRW0yNjY2VFlSU1lscis4a2lTSmRnMzRDR0xsNjgrQ3RhNng4U2tTdkxzcVRKWklMMTlYV2NPM2RPenB3NTg5NHZmT0VMZjFBVXhaKy82VTF2T3B1dVdOSTRTV1orelZWWmxoM3hGYURleHhua0F5b21hOThrMHd1L1BiNTQramRGSkcxNENUaEpZb1NBOTNPSUNFWWJHRjFpT3AzU1pEbys4dGEzdmpVQkp3RW5TUitTZ0loQkJDRDFXa3ZBU1JJSGl0YzBvZVpoSWpBcnNFcEVhQUpPa2tZQUdXUG14eGtTUVNtRlFaYUFrNENUcEZYcmVGRktJVk1Lck5MdFNzQkowdjhtQmZOQVUwdmMvU0ZKNys4amFTc2ZxQ3BDTTRWVVpKQTBUcEthZUkzaWk5bHNpWUdHNGdFWVF5Q0ZjQkp3a3N4anhyZURtby9qQUVZTUJPSkFSVGNPaDdneFhhNEVuQ1FBeHVQeGpRQmU2MEZUQVFka1F6ZmlpQU9pRzFFbTRDVGdKQUVBVENhVEtzOG0xRGdncTNVRUZqaVN5cWdUY0pKMGk0aDlFSnpKbGpJSEVuQ1NOSUZsbHFkR0FNUVlHQkdVcFlZQUtIV1pMbElDVHBKR3RvQUl4QXdqQXFNMWpOSFcyVW1TZ0pOa0hpamJnQU9MRlcwTUFJSVJJRXY1YWdrNFNiYWJhVDVMd0tFSEJnUk5HVFFQVU5JQUpWSXhhQUpPa3JpSkZqekM2UVVpZ2pSd0tnRW5TWXZtTWNiTVpVa25SaTBCSjhrTUlDUWlSRVJIdGRac2pJSFdHbVZaVmc5akRKZ1plWjVqTUJqZzJtdXZ2ZW5reVpNM3I2MnRIZlB2VCtYVWw5a3FTSmZnc29LRUFlQnpuL3ZjalVxcFp6bFF2SkNJYnN1eTdDVUFidkphUm1zTkVVRlpsdEJhUTJ1TjZYU0s2WFNLMFdoa0RoNDhLTWFZOHhzYkczK1paWm5rZWY3RjlmWDE5ek96QVhEZmkxLzg0b3YrWTRrb3Fhb0VuS2VHRnZIWDFvSGtSaUppRVhtajFwcUo2RVlBTi9wRUFhMDFoY1RBdGlJMllNNXM4MW5VeGhpVVplbTdmc3AwT2hWampBRDRBQkdaTE10TVVSVC92aWlLaC83dTcvN3V2cmU4NVMwSlJBazQrdzhzano3NjZOSHhlSHdiRWQzR3pLOTJEdjJOZ00wdEV4SDJpOTZESkh6NDU0bG9EaHdoY1B6L3ZTYnl2M3VRaGFhZDFockd2dUdFaUp3UWtVOHk4MS9rZVg3aVF4LzYwSWs3Nzd3ejVlOGs0RHc1V3VXeHh4NTdJWUNqeHBnZkFmQkNBTThPTlU2b0lXSmc4VUFKTlUzSW9JWFBPU0JzMHo2aGVlYy9Kd1NXWitLY3RoRUhwSWNBdkYxcnJTZVR5ZnUvKzd1LzJ5UnRsSUN6WjJENTdHYy9lL1RRb1VPM0FiaE5LZlZxTnkyTlJZVERSZThYYkIwd1liRmFDQ2l2WmZ5SUR3OE1mNHdZV09yZzhuNlJCMUVkT0hYQWFxMk5NVVpFNVAxRTlINGllcjh4NXNSM2ZkZDNQWnhBbElDelk0ZitzY2NlZTZGUzZvaUlmSy9US3JjNW9GVFhyMTRPRVA3MEFQR1pBVTBtV2dpQ3VxL1Q5TGZ3LzZGR3F2dEEvbS9COTZxRFVSeUlUb2pJNzVabCtYdWYvL3pua3ptWGdMTzR2eklhalc0cnkvTDdpT2cxSW5MRXBmMVR1T0REaFJqVEpQNy9ZVHBOWFp1RXo5VzFTL2hjazZrWHZ0NER4UC9OQXljR3VoQmtvWGxIUklhSTd0TmFQMlNNK1kwc3k5NzNQZC96UFNucW1vRFRESmhUcDA3ZFJFUXZJNklmTmNhOFVFU1ltYWtPampwb1FuOGxGclNNZ1NUMm5oZ282cHFyZmd4dmhvVm1tUU5BOVRjUHFQQzFvWVlLUDgrRERZQm9yYzhEdUVkci9lK3lMSHZvdGE5OTdjTkltYVlKT0FCdzk5MTNaeTk4NFF0ZlVoVEZhNWo1dndOdzFBVVZxNFZkTjhucW9HblNOdUh6ZFZNcDl0NFlrVkRYUGswQWEvSi9RckI0VU5SQlV0ZGE0WHNkZ0FUQWZTTHllOFBoOE9OS3FROThKV3VocjFqZ2VPMlNaZGtMQWZ5VWlIeWRDMUJTM1JkcGFzbFVOOFhxTEZuTTFJb0JwMjZpeFY1VDEyS3hZOGRNc1BveFBWaENBcUhPMUVXQUV4N2JpTWdGQVBjUTBTK2VPSEhpNDNmZWVhZDhwV2toK2dvRURKODhlZkxsZVo3L21JaDhJeEZkV2ZkYllrQ3AvNjIraUp1QUUvTmhZZ3UvU2VOMGtRbHRXcWNPcXRCOEMwMDRENTZZUHhSajZ2enpTaWtONEdGanpCOFlZLzd0RC8vd0Q1LzlTZ0hRVjFSKyt0cmEyckdOalkzZlZVcTlrWWkrRHNCS2ZmT0kxY1IwL1d6U1NqNjdlZUhkck9GWXNjOXBPcSs2cVJpYmhPQWJIY1plMy9ULzJtYkFJbktVbVY4RzRMOS96V3RlYzNvMEduM3E3Ly8rNzUvMjRQbUswRGdmL2VoSDgyYy8rOW5meDh4dkVwR2I2OSs3YnBLRnY0Y0xMVVlydHkyc2NNZXZtMitobG1EbWJaa0JNV3E3VGhSNDdlSFBLUllValptQjRlczhreGJTMXFFV0NnbUhNTkFhWS80QW1Dekw3dDdZMlBpbDE3Lys5ZTk5T3NlQzZDc0VNRDh0SXJlMGZkKzJsUDF3NGNkTXRmcHIvYUlPTXdKaUlBMGQ5NmJNZ1poSlZ3ZHpIV3d4NElSMVBIVnlRR3VOb2lqbTNsY25FY0p6clROMGRmTXV5ekl0SXIvQXpFOWI4KzFwQ1J3UlVlZk9uZnQrWnY1cHJmVXR6RXg5VEtZWUdSQURWQ3pZV1FkU25XQ29MOWd3VTZDTkxJaHBuRENYclU1SGg0QnNBazZvZVlxaWlQbzRvZGFwczNNaDRQeHgvR3VERFVZQW5GVksvYXYzdnZlOXYzZlhYWGZwQkp4OUxLZFBuNzQ5eTdMWEdXTitJRVJMWDEranJsVmkvNi83QnJFMG03cjJhVXEvaVRGdDlaaE9Fd0JqN3dtMVhBaW9lc3BPbmE2dWc4SURJOVJDOWJ5NE9uRVF5MllBY0NIUDg3OFpEQVkvOG5UU1B2UTAwako4N3R5NWYwNUV2d0xnbUNzT20xdmtDeDV2MjZDbnVrYnBNdTlpd0trbmJjYk1QcC90WEQrTy85elkrK29nYkRPbFlzeGJVUlRiZ05ORVdjZVl0dnJ6NFdjeHM0aklRMFQwdndONHh4dmU4SVp6aVZYYkIzTHk1TW1iaTZMNFdSSDVSV1krQUJlTGFYcjBBVTNJaXRYZnQ1TlJHM1VOMVhUY0pyYXNEMnNYc21heDQ4WG84amF6czIxRDZkS0VEbFRFekVjQi9HT3Q5VCs0NDQ0N1RoMDVjdVRMVDJYMjdTbXRjVVNFMXRiV2J0WmF2OXV6WmVGaXFTK1VQa1JBekU5cEloRzZVbkJpL3cvOW02NzBuRmlBTTVhWjBKVmhFR3FDcHF6ck9wc1crakYxMGlCbXN0VzFUdDEwYzNFZk1MTUFPTS9NZDR2SWovemtULzdrVTlKOFUwOWgwT1FYTGx6NFZRRC9Sa1N1OXlQT1BYREMzYmdwOWhGN1hWdjhvMDRheEZpMnBYZXc0TmloZWRrVnYyblRMbTNzWDB5VDFyOVRDT29tQ3I0dEtCc0NQdkM5eUJpeklpSmZMU0wvN2JkKzY3ZGVQSHo0OEZNdTl2T1VCTTZGQ3hkZU5KbE1Qa1pFM3dSZzFkL1lFRFI5Rm1wOThmaEYwd1NzUHNjT2U2TDFPVTdNM0dvakpHSUFhZ0o3bDc4VytrY2grTHBTZStwL2F3SnFVNEtyT3c0Qk9HS00rZlpycjczMnhTOSs4WXZmZWM4OTk1Z0VuRDBFallpOEc4RHhzTHQvMjBKczh3MWlDN1NQZjlGMG5Oam5OMm0vUGhrQzlkL3IyaWdHakM1L3B3NlFlcTVka3prYXNuUWhyZDBFbWpwcDBjQytFVFBmcEpSNjhhdGYvZXBIM3ZPZTl6ejhWRmlIVDVuMlVDS2l6cDgvLytNQTNnM2dxallORXRNb1hVUUJNNlB1SDdXQkptd1MyRVUrTklHbTZYenFabGVvd2Z4NStzLzN6eW1sT2dtRTJPLyt2WFhmemgvZi96MTgrTS8zdjllYko4Wm1sY1pvY0E4a3graTlZaktadk9mbmYvN243MGprd0M2QzV0eTVjNy9GekQvb3RVd3MzYjhyY0ZrM3BXTFVjcDMxQ3YvZTlGd1hMZDNrYnpTVldNZElBNy9RZkhwT1V5bDJ2VGFuclV5aFRnN1VNd1pDY2lEMk0wWW9oSDNoZkhBMUZ1c0p6OW5mRHdmTWtvaGVOWmxNM3J1ZnEwLzVLUUFhdm5EaHdxOFMwUTk2QWlEY0VXT2FwbWxIN3lJSytwaG5NYitpVGFQRlRMOCtueFVlb3c3dzhMdkhpSVV1clZ2L1cwemIxaW41K2lZUXZyZUpzR2pUd2swcFBFVlJaRnJyOTZ5dXJyN243cnZ2M3JmZDVkVStCMDIydHJiMlpoRjVJeEZ4bS8vU0JvNjJ1RWRmSW1IUjl5enFZeTFDYURRdDdEcjlIbXJXR05oakdyRUplREVOMThhcXhWaTJXRlpGM1lSVFNzRVlRMXJybXg1Ly9QRi85SktYdk9RUDl5TnBzRytCYy9IaXhWdTJ0cmIrVmtTK2s0aDRrWjIwRDVPMm04QlpOTURhQnBxbTJGSHNlN2F4WC9YNm9EWWlJbmFNSnRLaHFXSTFsdEFhTW5GTk5IWDlOZjdjWGZiRVRVcXBmL1N5bDcxczM0Rm5Yd0xud29VTE40bklmd2J3SEFSWkFHMW1UUjhRZEMyZUp2K29yM2xYOTFQYUVrU2J0RWlkTWV0RFc4Y2FHcmI5M3FiQjZsb3JSaTMzemFPckIyemJHbzdFa2xHZEtYZ1RFZTA3OFBBK0JNMFJFZmtCQURjMzdlSmRtcWJKbm8vWjczVjd2U3Rib0s5R2F2TzVGb2t2ZFFVcXcrT0hqRmZNQjJ4aXZVSldyczd1TldWaTFCbStKdDhzZGk1dDVFbTlRODk0UElhSTNBSGdqMzd0MTM3dGFOSTRjZlBzS0JIOWJ5THlyK28rVFJmZDNNZWZXZFI4NnFLWGQrTHpORG4vZlRSZ2x5blhwTkZDWjc0cjdsTXZZWWlWaHpjMUptbUw3WFRGZTVxMGtGTHF1Y2FZNTl4eHh4MS84emQvOHpkYkNUZ0JhQUQ4ckRIbTlYYXo0eDA3MG4xZnUyaTZUQmR3Nm9IS0xxMFNNL2U2emkrV2lsUGZ2ZXNncXBNRlRVQUxPNHFHUGtnZk1EU1JBazJ6ZnByYVlFVXlGb2lJbmd2Z09hOTg1U3VmZFBDby9RUWFFWGw5cUdtNmNzeVdZYkc2V0xpbVJkb1dDRzFMYVdreXYvcWFmL1V5N3ZyUG1Oa1plMDk5b1h2enFhNDFtdnEzMVdOWFRkV3FiV1JBVE11MHZUNlc1eVlpenlXaUp4MDhUenB3UklTM3RyWitBY0QvQW9EYlRMSmxUTEMrSkVIZjk5WDlpemFndFgxT24zNEZmWWlLVU1NdDQ0ODE5VmVJSGF1dWVjcXlqSUtwaVVTb2E1UVk2OWIyWGdEUVdoTXpQMWRyL1p4di91WnZmdExBdy90QTI3eWNtYi9kZzJhbk1aZW1SZHBXS3JDWDB1Znp3dlNXWmM0dnRvUFhOVVdkQUluMUwvQWdxcDlIakZob1NyZnBJamU2VE5TbW50ZytFd0VBdHJhMnlCanpUNmZUNlcvOTRpLys0ckd2T0kyenRyWjJ6Qmp6NTU1QjZ5SUJkbVBoNzFSanRSV2l0YjErdHpST2t4WU0vWkpGTWlWaVRGMVRES2RPRm5RVnRQV2hxTnNxVkdOYVRtdnRaLzhRTXorWG1aOFVzKzFKMHpnaXdscnIxd0c0YVJIbnY2azZzMC9OelRMUHhiUkR1UFBXZlliWXVjVVdZVk1kVDJ4MlRsTzhwYTRsWW9tblRReGUrTnFtcE16WXhPc214cTZ1UFp2dWdVOFViU3ZuaUJFRzljYUpiclFqRlVYeEhlUHgrUHN2OXd6VUp3MDRGeTlldkIzQW0zMUQ4N1lvK2pMbHp6czFwWllKcGpheFR2VllSajBMdWVrN05pM0NldU9NV0FCMDJTeUdOdGF2bmszZFpNYTFtVzF0NWx5VEZvd2xwSHBnYld4c01EUC96SnZmL09idnVKemdlVkpNdGRPblQ5L096SCtrbExvcURMYjFqZEhzTmdHd0cvNVBtd2tVTHJTMmZ0UXhpam5XUVNkV0VsSFhLb3YyVnVneUpXUE9mQnN4RVBvc1hlTWJtN3J2eEV5OSt2R1pHVVZSck9aNWZzY0hQL2pCajkxenp6MFBQeTJCSXlMWmREcDlCek4vZlIwd2kreUEreGs0VFhsbG9RYXFMODY2Um1sYU1GMTVaLzd2UGwyL2pmb094MzNFUml2V2ZacW1jMnFyOW96OXZTa1ZKMWF2MC9VWi9ucTZjdXdiWHZXcVY3M3Jjdmc3bDl0VW83VzF0Wjhob2xlMHBXcDAyZjU5SGY4bS82THRmWXNRRVRFVHBjM2thREkvNjM5dlNvOVpwamRjblRCb01yL3E2VE4xL3lOay91cXZheXBMYURQVDZxQ09hY211c1kzZTN5bUtBa1ZSVUZFVUwxOWZYLyt0eTVHYWMxbUJjK0hDaGR0RjVGOTR2MlpaLzJHbmpUSDJRSXQyTHVBMk1pTFVRREZtcXlrbHB5c1R2SyttOUovZlZwZmoveDYrSnhaY2Jkc2dZdS90aW9uVk8velVDK2hxdmc5cHJiL2ovUG56ZSs3djhHVmNYQXpnN1FDTzRXa29YZk53K21xOCt0akRwc3JUbUptN0V4T3pTZXYxb2JkakpkMng0elQxYytneXc1c3lDa0tHemNkNnlyTGtvaWgrNVpkLytaZjNGRHlYRFRnWEwxNTh1WnRIYzltRGtKZGI0OVNkOUw2TEkvUXBZbVpRVzBPUk5nbTcyRFNaVkdGQU0vWmRtbnk0dG9LNk9yRGE2cUZDM3k5MmJXSk1ZcXl2VzFFVUtNdnkyTWJHeHMvODBpLzkwcDZaYk9veUxheHNNcG44SmpQZjNFUkh4b2lCcmtZVGZhamtSZnlDdHZoRVh6TXM5dG4xaE0rNm1kSm0wcldaWmszT2N0ajZOelQvd3VlYVdralZPOW0wVGNQdTg0ajFSNGcxY1cvNzJUUjVPM1pQZ3A0TTF3STQvb3BYdk9KZDk5eHpqendWTlE1ZHVIRGhad0M4WXE5WXNjdmhyL1I5WFZ2K1d0T20wRVZ5TkxHTlRYUjAwem5Fa2pXN0tQRzIrRXVUUnUxVFM5UkV6TVR1ZjFzRmFhelRxQ01NYURLWmZQdDRQUDY2cDZUR1dWdGJ1OG9ZODd2TWZLQWUyZTVhWFBzQldHMm1WWmROWHRjcXNTRGxJbHF3NmJ5YVNweGpDN3R0cmsrOW0wN1QyTWFtM1QvV3VyY3R2U2JtczNTTmFHelN0ZzFyWjBVcGRmVXJYL25Ldjc3bm5udTJuaklheDZYVnZKMklqdTJHSS90VTluMWlpNjlQZVVHVHRvcXhjazErVEd5aHQ4V0R3ajVyVFhsbmRTM1VsLzFzcTBUdGF2ZFZKMTdxVStKOGo3YUFMS0N5TEw5OVBCN3ZPbEd3cCsxMzF0YldiZ0x3L2N4TWJlWkxsMi9TdGZQMnFVRHNXd1BUTitMZXREaGp6SmdmV3R2MHZjSy8xYk9hNjhjS05YYWRLbTRLWW9hakVwdTBRMXNEd1pqNUYyTU42eE91WGNlYUtITVhFaUNoLzlXVzN4Yzc3NjY0M21ReVlXYis5Mjk3MjlzK0NlQ2orMTdqM0hubm5XeU0rVkVpVW4yN3hEeVowbVpUTDZKZG11SVlUU1plZmFGMEpZZjJxYzhKTlVkWFRLeXR3WHFkSnU4VE93cTFTRjNEZGVXcHRXMlFUZFIvVTVBMExFV1lUcWY1eFlzWDMzVG5uWGZ5dmdmT2ovLzRqOS9vdFUwZk9uYXZramdYamFNc080U3FEVFRoQW00S0ZPN2tXalFsVThZMDdWNGt6TWJpT0gyblJpemE2cXVwWXJScDRCVVIrY3lDMXhEUlA5OHRrMjNQZ0tPMS9nNW1QaG9MZk8xWFg2ZXRiZEd5NEttVEFVM05PSnJTYjVwaUcxMW1iNHhlYnV2WlZvOFZ4Znl4cG8ybGJVaFdyQVNqaVRYc0U1OXFxOStKdGVJTmZCNjF2cjYrYTdFZDNxTUZtQlBSVC9tV3RURTJKS2FtRjEyc3l6am5iVGVqYWZkcmM1THJ0bm9zUXptbVpicm0xclFWdXJYVjJjU282bnB3czZ1alo1TnYyTlJiSVFhS2tKbXIrMHBOMzdYcE5XM3JRNHllUFVSRFRBbUlCa1REbUhMT1pKdE1KamV0cjYvdlN1M09uZ0RuM0xselA4ck1WeTI2UXo3VjJMSStoRWNiTzlaVzRMYU1mMVozMkdPOW5aczJyRmdSV2F5b2JsczhJNUp4d016SXNpeTYrR01qRmV1alMvb0V0MmZuT0h1Z1BxcmViRXNHcFkyTmpSOTcwNXZlZEhUZkFjZWgrV1ZlMjF6T21NdCtsNmJreUdYOXNMclc2NU9wdmRQbWpGMStTVk5pYWxmRGxhNlpxTTNBQ2NCdEJDS21BcFNSK2VrSkRqdzNiVzV1dm5hbldtZlhnWFBtekpuYkFieW1Qbk1seWZLYXRzbDBhZnZabGs4V1c4VDFuczlOZ0syYlU3R21JS0UyNnBNZEhvNzY2UEtEbXp2aWVLRDR6Y1FDcWU3enVGR0svL1N0YjMzcmtmMW1xbjBiTTZ2WXhlcEtyVy9idVhhRExldnpXT2I0WGUyTjJucExod3RtbWZOcHlncW85MURyOGpIRFk5UmpQcUdabFdWWm8xL21nZExVeDZDcnIwRVRBMWl2RVlwdEhqUEFoSW1mNWJiWlAwNzd2R1J6Yy9QbDJNRjhxRjBGam9nb0l2clJzRlI0dDJJcU8ySEkraElJdTBGQzdNVm54VXlmT2tYckFkSVUwVitrQVVxTS9vMFZzelUxalBmdnE1TUNPL0hmMmpxVzlrMCtOY1pnTXBsZ09wMnE4WGo4cHAvNGlaODRzaStBYy9iczJaZGxXWFpzSjczQmRvTlYrMG96RC8yT1hFKzliMHV4cVdjazlJblJoQzJvNm9SQ3FLSHFsWjVOdnRjeUNiOHgveTcyZlkzeEQ3TnRhcHlJWUR3ZTN3N2cyNWYxZFhZVk9FVDBNbWJtL2JCd2Q1dmEzZzkrVWRQM3FkZnY5TzBrMnRTV3FmNjZldlBDZXVKbHFGbnFKbFpzQ2tJZjlxeEw0OWp6bEpiNzN0d0F4UHM2WlZtK2JsbGZKOXZGaFRvNGYvNzhHeGNaSUJ2ajdwdDZJZS9Fb1c3YXRkcTZ1OVNiYXJUTi8yeWJkbWFNUVpmcDJoVThqWDNuMk9TQVdET1Erc3pRV0s1YkRCeDF2Nmp1OHlpbFVKWWxzaXlyenRjSEcwTU5HUG9kSWZOWDcxbmRkSDlpVFFxOWFHMmdSSVBDNjBNRTh2NFZHUWd4QkF3RDEzc0JCb1lFbWdUVEtkOTI3dHk1WXdET1BXa2E1OXk1YzI5VVNnM2J1dlQzMFE3N0pXOHQxcXlpTGZiU3B6SGlUcytuVFlPR1psRmJDWGM5RWJQK1hoK1hpYjAzOW4zQ1kvbjMxOS9qbXhEMmFXamZGclR1cXA2dGE1dTJkbFJsV2FLWVRsUlJGRCs5akxuR3U2UnRXRVJlWHMvdTdjc0c3Y2M0VDNpeHc3eW5XT0prVzYrd3Zpa3plM0h1VFNaWDNVZW9hNFUreEVTc1cyaTl6THNPMUxaTnArdDZ4dGVJTlBSeXE1RUNjelIxVVBTbURZd3gzL2VHTjd6aDVpZEw0M0NXWlMveHUrSXlyRnFmWGZWeVNWUEQ4cTRhazczU09IMjBjUnVOM0pSZjVwOXZ5cUx1YSs3V3N3YmFLank3TXVPYkN1ejZtcnBSTFdPa0FsbElFamp6TWpmRy9OU2lXbWRYZkp5VEowKytkRFFhcVhyTW9NMVA2ZU1JdDlHcGkxTE5YY2RxQTNIWDRvL1ZuTlRUOGR2T3FXK2RFQkZ0NndsUTk4ZEN6ZEYzRS9KK1NTd1E2clZJcUhXOTVnMDFsTDllZnZTSHI4VUp2MS9vMjRUdmlaRWEvVW9NbW1lblZtQ0NRSUs2SnV2NzJOZnBzb0JTR1RZMk5yN3VEVzk0dzVGRmZKMWQwVGhLcVpmNmdWQlBCMmtLSHNaOGdsZ0t6VjZib1gzaUtFMytRbE16OXpiTjF1VEF4Mklvc1VhSXNVMmdublM2bkpYUjNyQStGdC94Yi9PbW01c3hldHZtNXVaQ2JjdDRGeFlaWjFuMjB2MWthbDFPWURYVmpJU1BOdjlwMld5RitubkVGbTlUVCtlMjc5UVVGMms3NTZaTlpGRmZjdWVCYnVsMTdqNlhyU3kxcnhKVlJMU1F1YllicHBwaTVoZjNDV290TTh4MkozNUMxNXpNUHVaaUxGRFkxTk81YnBZdUd3anUyd1NrNzB5YjJQZHJtdXZaQk5DbWF4Y2pSYnhHaWRVQ05mbGkvZGFLekg2S2dCRFJxSkRxWldLTXRlYkl2cEtZQWY4NlkwQ0tvSFVKb2d5VHllUmxMbXY2N0dYUk9HZlBubjAxRVdXeEJkT1ZrcjdUWGFrUHVKYkpSRzVyNWRxWEp1MURIL2ZwcTFDZjA5blcwQ0kwazJLYUpzeEZpMm1ySnBBMDNVTi92THF2RS9wQlhUbHJUZFBvNnRmYUdBT0NnRVNEVFFtV0VtUTBRQUtCcVI0V091Ny9vZ0dqUVdJQW95RzZoT2dTTVBaNUtRdXdLVUc2Z0lLKzhkS2xjOCsrYkthYVV1bzJTblVEMjB5WFBuR0hPakRyR2l1V3d0SzBDT3NUMmZyMENJaVptRTBVZGoyT0ZRc0FoNzk3TURVVjJyWDVQOHRNbW9ocDVMZ3Y1alhlUEJVL21VelYxdGIwZis1cnJ1MElPQ0tpakRHdnZodyt6VjVVaU83bHVZWWtRaE93Nms1MHpFL3MrcjVOWnVFaUhVeTdhUFkyYmQzVTdhZkpsR3lxMytsRDdjZnBBV2tjQXhJbkIyVE83SnVaa3dKZDZwZTk3bld2TzdybndBRkFTcWtYN0paZnM2d2YwM2U2ODA3TnhXVWQrTFpqdFFWSW0wYWN4OW95aGIvSEZtc2ZzN1ROREkwRlQ1dWFaalNGSUJiSjJHN1RWbk0ranpSZnMvQnZUVjF4UEhoMHFXR012ckhjV252MlpRRk9XNzVYYkxCU1h3MFNvem1YWVd4aTRPblRRSzl2bFdMcy9iRldTMjF6WVBwb2thNGN3SzVPbnVGNXhjNjFxYTlhWDYzVVZlWFpORUd1RDNqbjFwRFhNeUtvMk9XbSswTGQ2eU84SmxwckpkbmdwL3Uwa2RvUmNNNmVQZnRxN0hGVHc3MDIrMkx4aHlhd05lMzRUZVpMSDd1KzZmM2g1eTJxZFdNTEtiWUJ0VFhIQ0FPYWRjM1k5VDBXSFQzZkQzQVZTaURTUHRtNittbmFZenB6NzRITmNkUGFmRnRabHMvZVUrQW9wVzd6ZmRPZVN0SjFvK3BCdkdYakxVMTJmUk9RbTVvVEx1dGZ0WFhwaVFFc1hGd3hVeS9NU3VqcWpyT1RleEh2WmVET0Q2R21hWjhQS2owMnpKbnBab21ENldTYURRYURiK3NpQ1hZcnlYUGgyTXpsQWtnWFZkMVV6dEJrN2kzRCt2VDFOMksrd2FJTjZHTk5DV1BnRGRtM3BtS3ZHR1BYbGlVZU03UDdubk9QS3htWVp6TkhuMERXSXF0cm5PRGhzNldERTZ4aVFiTnNhZ01ZQTZNMW5UejV4RzE3cG5GRWhKajVXVzB0a2hhSjQzVEZhdnF5UzMzQTJ1ZWMrL28xc2QwOU5JM0NoUmJMTTR1WmdVM3hraVl0MUhRZTRlZkZla0MzcGNPRUNhQ3hlK0pCMXZSOTJqS2ltMWk1TmorcmNscXE0OUhNalhFNElQZUFhOVRoQVNMR1FJd0d4TGlncWZnc054dmpFZnNhb3pVSUFtWjZ5YS8vOGk4L3EyMjk3c1EvVVVUMHZVK24vTFJsektFK1dxWnVWemVORDF6bVBKcUlsVmc4cDJzZ2t3ZERqTkVMTlUvWHB0Y254V2ZKdXpSSEsxZWFwWDRQUllESTlmVDNJdHdZREFCMjhSMGlBNEZnL2RLbEd6LzNwUy94bnJKcWVKckpvblh3WFFzM0RHS0dSV0pObFkxZFpFQWZOckxlWUtQcmUzVk5lNjZiZWVGNDk5aXNtNzJNdFFta2thR3RURE9ndGV2UU5oOG5NT2ZLc3NSME91WHJyNy8yNVhzQ25MVzF0UnY3dkgrL2FLUkZXeTd0RnZpNi9KczJWcWpydTdUMVlHN3pNMkxuVVkvMGQ2VXcxZjJkcHJqVE1tWnpURlBZc0l5TnpUUldqUHBIQjdYZEdvZlNHaUtHVHAwNnZUZW1takhtdFZtV3FhWVlRQi9uZkNkc1ROK0x2NGlQMDlkMGFwdmowNVczRm1zUTJIL3h0UGNrYURPVjJwcDhoQ1phQ0lxbTZ0QjZYVTNUOVlyTi9td3lNWnV5ekVOZDQwRWprRWFROWlGenRwbDB0VzZnV2h0b2JaNGxJa1JFc3R1bTJyNDIwL3FtckZ4T3Y2bnBYTHFZcWtYSGtEUzF5dTN6M2xqbi94RDg5UUc0ZFRLa3JUbDlPSXFqYmRIdjVuVnZLNHVRdWI4N3NEcFFacG42WjJnWjljbExuaGd4ODdPZVRnNy9YcG1GZlJadkY5VmRKeFFXTVM4WG1XRFd0dkJpZ1ZOZkl0OFVYTzNLRkFsOXBkM2E0THBNM3lyM1lPNXpQWXdzSTZlMXhzV0xGK2llZSs3WmRSK0hBWHp2ZmdOSnZ3WVB1MDhROUgxdG4yenBCck80RTFneHJkWTBiNmF0N3I5dDFtZjluSHlaZEN5cm9pMHRxUzBoTTBZSHRQMmZnb2V0MGNHTWFSUDNleFcyRVV0WGg2OFRBYXF1T1BhbklrSXhtV0t2NkdoYXBzNm03NktPelUzcDhsSDY3cUJ0ZmxEZHZ1L1RENkJ0dG1XZllycXVFZTkxVTY3Tk4rcUtlN1dSQ1hXL3F4NEFEVUVUQTFnTXZMRnEwZEJrcTFlZGJtUDBJR0J5RHpFdy9qd2hJT2VUd0FoRW04cHZZU0xuRHduRVdEZkdnc3Y2TTBSa0czaVFRRWdBWnBBd3hBQ2NLYkJ0MUliM3ZlOTllMFpIN3h2V2JDYzEvbTFwL0lzU0c4dU84VmgwdytscjNuUUZUT3VnaU5IbGZiNUxrNG0waUxuYVpESE13T2w4ZWRNVU42cWZTNGZQdWMxc3M4OFhSZEdkajdqVGhicWZ3TE9icGw1YnJsaWJYYjZUTEltKzlITTlkcktNL1I5ajUvd3h5N0tjNnhEYTlUbE4xNjJ0STJuVEJoWDdMS2xsQzNpbjNrZzlPNkU5ZHJNTnZETFBzSVhraDlhYUgzbms0ZHYyVE9Qc0YybHIwdEFWajJpaWVOdk14eWF0MnpmcGNSR21yS2tzb3l1bzJiZFdLWmF2MTFReTNsWmlIYWI2ZExGc2RSWXZWczVkMXliMnRUV0d1cVBlcVZsN3hoSkNKV3l0cGNxcGZ2V2VBS2RyY1RZVllDMFQxK2tEaExhdWtGMjdiOWRuOTJHdVl1Q0tMZnFteGRobVF0WWQ4S2JHZzdIWm5VM25GcnNHc2ZzVWR1Z016N3V0ZjF2OVhHUHJJUWFZWm0wMDM5NTJFWklsYm5MS3RuaVFDYWwxQ01yUzBGNlFBMDlKY3l6Y3JSZEpHbTFxc0w3VFRhZXJqTGhPT01UbzZUN2RaOEl4SFUxVHNHT2xDUFcvTjVtTlhjQ050Y0x0MmdDYVl6QVM5VkVXRDFIVXRIWlZwbURuaHhvWWZNVURwNjF1bzBzTDduYS91S2JreXliMkxUYkN2V3NLZGgvVHN2N2RtenFTZXArbmphVnN5b2p1Vy9uYm1FOVdqU1RjYnJiRmtqejdtcWJpS09tNUVnUlhhbUQ4TEZGWHhMZHJ3TGw0OGVLTlhDdVczMm5zWkQ5Skd5R3cxOSt2bnM3U1pyS0cycU1yamFXdGFLMnBhMmxvcXRWcDlsZ1FzNTVKMEdjRGlwM1BuQlp6bFprMHAyMjJBMmFSZ3JxNVBuaXVub2RtS2lmS3lPMEtjRVRrSldoSlIraGFqTXVvMVVYZjN5ZUdFUzY2cHNhRFhYR2dSV0pWYlhsVTRVS3N4NVhhK3FOMTljU3VhN2Q2TThJbTRxSHVmNFUxT0lzQ1BUWXBMaGF6YWRLZzR1cGt2R2F3TlRVYUpCcmFMS1p4NWtnUDM5aFFmRnpIcmVwS0M5RUxIS1prdDhnQjZtc1M3UVZkdkVoTXArL1VyOTBjeDlHM0hYQVhNUkJidlBWU2hhYWh1VEhIdk9zK3hjQVljKzdydjlmcmVHSUVSb3dZcUZlY05zZDdhdWFkU0d3WTJ3N1dWcml3ZzQyTThLMTMzMzIzMmpXTkV4dmpzVXdoMWxQQlJGdjJPSDI2MnJScHB0ajc2OGVxWnpqRWR1MjIzTEVZUU9vZzhSV2dzV2FIMFlibURYNVEzK0JuYSs5cUJGazB1ekVyMXFPR3BNb29tTy9UQm1yS0hsZ0tPRnJyQ2p4TkxFb2JMZHBteHZTaGZmdE81dXJ6V1l1YWlYMU10MlhZdXJidjBXU3V4YlJRL1dlZFJXdEsyV2xxRkJocXQ1aXBGdnBHZFEwU2FwVW01aTFXQ0JmN0huT0ZhaTMrWEZOcnJkakc1cC8ydjR0RFpSOVFabnUxYysrMHZtYlJ6cFI5V2JKbC9hTzI4K3U3Q1d4amRYb2tiSGJGSnhZQmRCTkpVQWRCdlZkQ0RNeHRUZHY3WklESGVpSzA5WDJiRVFVMlk2Q2VUUkR6VzdkZmU4TGNKUmVwUEJqN2VtbWRPYm9iUHM2K01zbDJxMXZuTXRUMmJrMWM2Nk50dXlMeGZXcDVsa25ocjJ1ZXV1a1dqbnhzK3k3OVIzQTBQZWZOcStXTnMwVytQelB0cnNZaG92c0FHQkhoL1RMRHMyblV4bTREczJreDdzUlg2bHNxM1VRdWhBdTVUM1ZyVjlaRWZiWlBhSFkxbVZsTkdqYm1SelZsRS9RS2ZtNEQvL0tqVkxyZWJZenNyc2E1NG9vcjdpTWkzV1NhOWFtKzdHcVMxOFhMOXlrTTJ3MHpyU21KczYxVXVFc0w5Tm4xMm5idTJMaU9QdWttZlNqOU9oTlcvNHdtbjZVdGV6czJEcjd1RXhuZndnbFNqZVlnMGJWYUdUdWVBekJCTHpVejY0c0c3N2Y0UGxHem4wU1k5WStxK2tpNVJsRXpaOGVXTVFCZ0NGb1V6dTdrcWpXMURGclVwRnVrV1VWZlZxOVB6K00rbjE5dkp4c3VuaWJxZTltY3FyWmN1VGJpSTFaODFqUTFPbmIvbXVyKzIzb2t0S1VoTllHby9oMW0xM0kyQTRjOFNMem1DNW9Mem1JNWRoYU9FVzFuNDh5QlF1Ym01WUJtb0pxQnkwZFdnclhqWmxHeGZjTHNpWTl6T2NkdTdQWm5kVFY1YUpzQjJ0WkViNmViUWgvdEV5TVo2cUFJaHpwMXRiTHFTbjlwYW9pNFNNSnRXeXZlbUs5V0wzYXJ0QjhrbW02ekoxSVdiNy96emp2TFhRWE9YZytJdlp4RVJGT0t2TjhOMnh6dVBvSFRuVGFqYVBJYnRrWENJNHhWbHo4VzB5NXRZMFNrUjZwTDB3elVKdG81bGd3YWJ3SmlpOWd1bzk4c2UwSkg5NjBwV1RTTzArWmJ0UEgzZmViQU5Ka1ZUWm5Uc2ZmRXpMU3VnR2RmdWphbUJkdlNZcG9XOFNKVWRUMXp1aWxlRkx0M2ZXSmtUVnFtS2JPZytmclVZanFSNzdXVDJiSDJYbUp2NHpqMXVaUk5lVks3eFNvMUhYdVowdDR1Mjd5cm5xYkxyK3B6ZzhJUmdVMEpwUDc1ZWsrQXNIbGduK2tETVJENlJSdlcxRFRSeHZVa1Q5K2d2Vzk3cDdhYW5DNFd6V2RGMjlmT1FGTnBzaVVxY1B1dXh6WnJJdHVwSnR0dDZuZFIwMld2ZklxdXJwdGRnNTcyeWxSdEt1dHUrOXkyMHVlNnRta2RteEg0SG0zc1dsdk1xVDFGYVB2b2pmcHpDTVozeEVaNTdOenZ0ZkViSWhKV09ML2I1SUFCOEpmaHhPRExUU2EwMmUwNzlTbkM3eE11MHJBUlI1T2QzaGZVM1dQNm1tbGxmMzUxVTZjTnpGMEx1bTJnYjR3c2FCdW0yeFplaU1XSTVvRVNQdXE1YXUxQjM5M2N0SmlvUEhqaTBkL1lWZUFRa1lqSUoyUDVUMzNKaEQ0OTBQcjA0R282WHV3ekZ5RXlZaFdTWGI1ZDMxMjNEd0hReEp4MURZanFNOFd0S2I0UzgrSDZ6Qjl0Ry9IZUJ1SVlHYkZ0c29NeDlpRUdLcGpwSVJBWTBiQWRhaDN0TEFhQUNYNXFHL3ZCTE5ialh5OHdnQmhBU3Z0K0VoQURRZ0xLRkxRSVBuZm8wTjZRQTEzMjlUSitUTjlKWkgyci9icDJveWJmWXBFRzRZdG91OWl4WXcwSCt6ajNmV05XVFNaMVRIT0ZQbGpzTSt2K1Q5UDlid0pnbTg4akFoZ3hjMzVOdlRyVEJ6cWwrcmMyNnJENnZYNy8vTjluYzNXSTNHQXFNaUJpLzZUOWU2YjJoaHdJYjNqb3ZPNVVaZTVtWGN4T25NWEw2YmYxdlhaOU5YQmJENENtQmg1TnRISU1MRjFtV1I4U0lLcWg0VXFseFd4citSVCszbWN1NnJickdZei9tTE0rWkZhRFE4UlFXV1p4U25UaCtQSGplMGRIK3dzYjZ6YTVpQWJZYWI1WDA3azlGVXE1RjVrNkZ3Tk51SUhGWWk5dFlBM3p6K29GYVcwOXl2cjRTMjNORTZQSE1OdjltOWpJZGN4dEJqMDNwK2phbkdWTGg3VkdTaW1JTWI5NTExMTM2ZDBtQjdaVkZzWnM1YVltRkcyTnhadHVTRlBzcEU4WlFSc3QyMFV5Tk8zU01YOHRSaEhYTjRVdXA3cnZuTkNZbG00Ny82Ykt6YVkrWjU0STZkSVdUYU1SWS81TG00KzIvUnJHdm9lNzlnM2Z0OGxmck4remJSdHJkVjZ6Yzg2eVRPK0pxYWExL3FKU1NtSWpwL3ZVN2pmVjIzUTU0MDMrVUZPanZENCsweklkL0pjNVZwK2l0TkM4Q1ZQNDJ4WmNXNnlxTFdteksrOHNUSHVwRjZqMUtRdUlVZFo5TkdoZlg3R1BKcTllUndUZXRnNkNXYUxrMm5iWUtRemFHUE9CVnBkaVdlQWNQMzc4OXdHVWk1Z2FmU25YcGtCZ0g1czUzSVg3MEtaOUozWXRjdjV0UGtBYndKdUt4ZXE3WnF4V3Y2a3BScHZmMDVhdEVCdmtHN0oyVFQ1UFZ5T09OazNUTnRtdGw0L1Vsc3pidHBuNTE3RmRMNndVVENFUDd4VTVJRzBSMXk3R0o2WnhZcDFtWXNCc01nZmJkdlcrSUczU2FuMnJLOXNZdVNZVHJtdGlXV3pCdGgwL1ZpZFQxelN4MTlRWGZ4OU4yMlJteG83YjlIbUwrRTJMYnRCejJyejVWZTUxQkxZdEFjNnIxZFVMZXdtY0w0cklMWDRYREVkN1c1YUVLK3BQQ1dDRTdYTmtvTWszOWg2QVNFRXdockJ6Qm4wQk9JV0tNYXZZUktuMTFoSXhVTVovRmdIQ3JpTFd6a014VUNESzNWbHJDQW9JU29BTURBU2FGUXl4cmYyQUJzSEdBZXhyZ1lISndCSlF4VlIxUVlHSUlEZHM3V1A0Qml6c3pzMGVDV3kvVXJqZVJWdzZ1eGpBS0FpWjZ2OWlYTHpCVWE4c2FqWitYRno4Z2Z6UVY0RVFRT0Rxa2loaEdBTTd1Z0lNTFFwQUFjSEVwZG9UUUxrN2h3SWlrMFp6MnQvYnJpYnpzZTQxTVQrMVVWTTQvNEloMENFSlFObytNSHZOREJCY2pmZW9uUHpaUUE5N28yYmVmOFUyRXpGSXhHb1k0bGxSR3lsN1RVaTk2NjY3N2pxL0o4QWhJbjM2OU9rL1lPYTNFQkd5TEpzYisyMi9tSEVUNVFVbXV3U1JEQUszQ0VVREFyQzRIUW9aL0p4SENTNkV4NmhnUEplNE1PdDVBcEFvaUl5Q2MvT1ljcHFQSmdCdHVsb05WL0RrQUVjQTJBaHl0emdGZ0NKbEw0MWpkVFNOb1AzQ2hCMjRJc2FBMkM1ZVE5b0c0NWp0NFluczU3aUJyK0xtclJpMjJiM0UvdjEySm91aEdYc2tBSXhyOCtVbmhXVmdhQmdZQWJRd1FPejZIRnNLbDR3R29PMXo1TUo3Wk54MVlJak9BQ29nVWdMUVZXMEs4M3lWWXozZzJ6NDVvTm4wYWN0TGk2Yi9WTVZvQXFtMG5mMSt4aGUzWWRacm9MNS9iMk5RcTNIdEV0VXUxYnJCZHNLS0ZZT3p6QVFUMy9ja0FIcWlMRXREUk93djlIenJLRmR3UklJSkRvQ2hvQ1FEUVFHbGhvSUdpN2E3UEt2cU93ZHhLb2VURE1Cb3B1ajh6WE9SWkNFTnpadWg0bldhQ1ZYd1RHQjNZSUJoVnpBRG9nQ3hQZWlZQURFRU1ZQ2l6UDNkZ21VNm5LRGtFaEM3UUJrQ3NIYjZWS05RS3pCUUFBeVlySjZ4RzhPc000czJKWmdKQWcwWVYrb01nakVhcmpiTExRdzMvd1d6MkVXaHAwNUxXQTBtaHFDTmdSaDc2ek1vQzJaWXJXZWdvUWt3b3NFMGhzckhkdmZWRERFS0xMbFRtMWFyR2xPMHNub0xsemYzOEZNcWpXUjBCUm9TWTcrWDA3cmQ4M2wycDZ6RmFpRUNySStqUWZMT1ZzdHVwOEE1ZnZ6NDc5NS8vLzB2emJMc0IwZWpFUTRlUEJnNFhESm5sb2dad2JpRkphNEt6MUNKa2pic3JpbUhMU1pvKzI0Z2JBQk1aOXJIUjVMSkJlZ0FHT1F6WUFWdGYwQjJjaGZOY0dZWFRhVzVnRkpOSU1ydFpzWmdBZ1pYNWhSZzlBcVV6aXBWejZJQkF6QVp3QmhvWGFLY0ZqQzZnREVscEN4Z3lpbktZZ0pkRkRCNml1bDBDcERCZERxQmtTbTBMbTEvWWxPaUxFMDF3c0orTlpjVFIyekJoUXpNbWQxY2lDSElJR0tkMkN4VEdHU0FVcmsxTjFrQm5JR3pIQ0JDQ1lGbUEyQUlTQVl4R2JRQUlpVzBUR0RzaE9XNWJPa3VJUFJsRnB1SWczay94NEhHYUFzVzl4TWlZQmlJTnhVYmVpckU4dXI2Yi94ZXF6aVRqUmtFa3NGZzllR3U5KzQwQUdyKzZxLys2bTJUeWVTbEFHN084eHlIRGgzQ2tTdXZ3SUVEcXhnTmNneUdRK1FxdzZBY1ExRUJZc0JJQmxJSFVWS09nZ2NRbXRwZDA1a3lxTzE2eHJjcVpWZk5Tck9lV0Ziek1zaGt0cjJQaXo0VG9mSXp5QXhCWm1TMUFBeUFFaVNsOHhVTUlMazFaNlNFMFJNUXB0QXlSVmxzb2l5bm9ISVRLQ2NvaXpGME1ZRXBKNWlPTjFCT3hwaE1OakdXTDhDVUd6RGxGR0kwZERFQm93UzBkbWtkMXZSUW1UVmZzNHhzRHBVRFBydWJSOGFwU1dFWThSRjdRa2tLWmFGUmFsUWF4MmlHSVFJd2d0RlhXeCtPaDJDMUNwVWRBdFFLbUllZzdCQzB1Z2JNbStCTVFlVUVOUlJrZVFtb0tWaHlLRm1aODFkaTVFQVlCNmszOGFoVDF6RlNvYzZ3ZVQrSXhBRCtmVEliWHdoeElBdm9aTFNrRXpYUisrVG1HRmErRDhWamNWVXplOEw3aTZMNDRwNENCd0MrNVZ1KzVjRy8vdXUvZnR2Nnh0Yi9NUjZQZVcxdERZOCs4aVVvQWthREhJb0pLOE1jeDBhUDRjQkJnOUZxanRIcU5XQzZEbHBkQmF3ZWdGS0N6RXhBSEJTbFNjaWNLVUNHZ0JZUWxEVzdlT1pVd2hDVXNYNkdUOWdUWTZCTkNWMlcwSG9Da1Uzb2NnS3R0MkRNRnNyaUVvcnBCc3B5Q3BtdUFjVW1wdE5OVENackFHMkNNSUhRQkNJbGhMWkEwRzZCbDFDdUxqN0xHQ3RrY0lnRVBHRFFDTWdkeVVCRzJ4d28zL2lPWm5ZN1oyU0pCM0YrQ01UUjV3enlmbGtWS1dDVXJuMEVLd1dDZ2hHZzFBYWwwVEF5UlVHWFVKYUU4WVF3bVNoTWl3elRxY0prSXBqS1lVelZNOEZxZ0R3L0JCcGNBVU9IUUx3Q2xSMkF5Z3NNY28wOHo4SE1jNDBtWXlVTWJURzZ1aThUMDE2eGJBRkFLdE1NNHZwRXV5Uk1XWERxWExUd3JvclZ6SVBHbFE4RTZ3NnlNaGkrLzUxL2ZKZlpjK0FBd0IxMzNQR085NzczN3Blc1hicjBnME1pbE1VRTBBVW00MDFNeG1NOHZuNEdGL0sveE5WWGF4dzR0SUdCR2tMME0yQndEQVhiblhMSU55QlRHWlJTOW90eTNaMXpGOUZseFpiRkZJVXVvRXNOTVJ0Z25Lc1NBSzI3cEtGMTZVeWlBcUFTekFhS05FUUtzRXpCTUdBbEdPb01HV1U0cUFCYU5TQVVBQW9RbFFBRW1rYldSUEpOdjhsMmRDQVhBMkJSVlRkSUpvTFJHczd0Y0x0eDZaenhXUThBNjQrNGdqUW1NQWxBWmZYL3VSQ2RNOTNFTjgrRElNOElBMkpMVFBBbW1IT0lZWWdNUU1oaERLTTBoRUt2WWF3ZnhjYW00TkxHQUZ2all3RGZnaXkvR1RrT1F6T2cyWDV1bnVjVmNEekpVeWNKWWhINGVxbHozMkNwSCtZa1FTK0J5bjgxM1JNSjJzQkRRTlM3bjArM2NYRWJCeDZsMkxEUUg2Qkg1N1pkQVE0Um1RY2VlT0IvZmZ5Sms3ZHRyRis2WGZJTVpLWlFCSmlWRlV5SFEyU1BmU00ySjUvR3NXZWV3dUdWRFNqOUtJQlRNR29Nb3dwb3RXTDNZK2NZODl6QUg0YUljZzNpdk9wMk15REYwcXRLaG1DMk83dkE3dVpnQXloak5SWnlzSnRJekZJcEpyQm1UUE14Q3JkNElBVGlEQ3lacFlrQmpNUzFMaUpVcGdNVHc4QjJaVUZtWUdDZGRVMFc5SUlnNktoQ00wRkFiR2xQUW1hemM5bjUvaEFJZEVVaVVFaVNzR1BjWElkKzZ5TUNCQVdsRHp1ZlM3dVk5QVRNR3JrQ0Rxa2NBejJDV1FVbXg2ZllNZ1V1Ykc3Z3d2cURLTXFqSVAxOHFOSE5HQXdHeUxJTVpDUG44RXlwMWhwbFdhSW9pc2JSN1cyZGN0cWFyM3NONHpVT2pPdVRFS25GV1RpcHM3UEVKZlNEclkrVEtYV0N5L0o4bjgvWnRSYTR0OTU2NjVsUGZlcFRiMU5NZnp3ZWp4WHpBUmhkMnFWeDRFcHNIamlLalM5ckRNK2VRbmJkUldBMGdERUhjRUJQb0xBRmc2RlZNbW9iYitKaUR6b2dFajBOYmZkdElnSXBtYWtuTSt1YlpTK1VBV1FDTURtcWwwQXFKTzhZeXBNTDd2MEd1dUwrUzVMS2s2d0NmSmJpY002NkE1eGpENnlkN3UzcmtLbHkycWJxZ21sVDJ3MTB4UVNTbjlqaXRFd1ZqekQySnJPUUcwZHVrU013WU5hV3lCQjdBVVV5RUJna0JNT01zWExuQ01aUUtWeHplSUpuSE5Rb2l2T1lUQjdIeHFWam1QRE55QSs5RUdibEdLWURBZGhBc1FMbFV4VFRBc1Vhbzl4Z2xJVmQ2NlVJQ3FXdGk5aFFvUnBxSzFzMVdrQk1DZEVGeUdpd0tXRzhjcWthUGpHTWxCQmlSeG9ac0c4ZDVjSUhjNFZ0dFo0VHNiekFldmJETEp0QW9GQWdVemtzeTYvZTk0NjcvdlRjNy9aZzZYYTFkL1R6bnZlOC8vVHBUMy82MzJ4c2JQeTRpS0FzUzJpdGtST1FIVnlCNGhmZzRoY2Z4Y3BhZ1NQSE5qRlU2eUJSTVBvZ29HaGJlOU42dEZmcWtWNFdzTXcwVUZWU1MvTkRVdTB1VDQ3Tm8vblgxdXpnK2MrWkRWWDFmZXZDOC9ISmhsUTd6dnl1UzdQbWVNNGNZVUkxZW53V2ZKdW5lNWhjcXBBUkVOdmRYQkZEd3VPVHZmVkNBVENkUCtSLzkxdU9YU2dLaWhTSUZLQUlLaU1NaDR3cmowNnhWbndLWnk0OWlHTDllVmc1K0YrQkIxZUFvQUVjUWo0QTZFaUpZclNKU3h0cm1HNFdNTk1TQ2huQXhwRVUyL3ZOYlRQWGZQYXptZmt1SmdpQUdnbXZPU0s5MURBM1hHcnV1a2ZBMFpSY0hQNWtKaGdSWkNyWEl2cmZFWkZjVm8zalRrUWVlT0NCdHgwNGNPREZtNXViTHhvT2gzYW5NVFpta3gyL0dlWDBIK1B4eHdYRC9INGN1L0kwQk1kZ2NCU1F0VzNrZW11bThCSzltNWZsKzVzYzQ3WXk1Zm5zWmJ1by9VM2Z4dVlRYjN2LzNMRnBmb0tZbUpuMkl6REFtUXZLdXVpM04yOWRCZ1BEUmNzNWMxUThnMGxaZnpHZlFOTUdEaDhjNGVCQjRNTGFwM0RoMG1PZzdMbTQ0b3F2aGRCUmxFcEIxQ2Jra01FVmh4aDhpV0hPcldPeVVVSmp2clE4Yk95eDNhY3hEYkVjc3kyRFlDNG8ybEx4R2t2TGlsWHUxcldQWjl1Z0ZFaGxJRlluSm9ZZjdyc21kbjFhd2EyMzNucm1nUWNlZU5YS3lzcC9uazZuWDgvTXlDUUhDMk9MTlVaZjlUVW94bXM0YytwUkhCNmNSallhUTZzcnRtZWJ6cWxlbWR1UlkwMGErcFJ0Tnkzc1B0bEZzeTZRWWNwN1RCOVN4THltUnNjNm51bys4NHRadVJCLzZDc1RnMGhaYzR3WVFrTUxIQkliN3lHMndWeXh6OW5aeWNxQzE1bHNCcGtORWhOQWlrSFRBUVppY00zQmk3anEwRHBPWHppRGkyYy9nOUdoYjBKKzRGcm9qRUg1QUlxSHVHSndFQWRHV3pqNytFbGMydGlvb3YxaEkvWllxZmYyU1FNT0lBajlIYUNLQ00vbDZVblZ1cWx0a3dvM0hwOHpPVTlKQjljWlhHbmhnY3JlOTMvK3laK2M2N3U1N3NtWWoxdHZ2ZlhNNXovLytmL0pHUFAvR1dNeUdJRE5FSlJmZ3NrTmpqMzcrVGh6NFZNNGUrRWNycmg2Q3pSWUI1dm1STUw2ZDZFT2JkU21HWlpwNWJRdHBkenZWcEViR0FVbW1abFc4ZkVsZndpS2w1ejd3SnhqVEFBUEVpRXdaVFlaVVFBaEJlS0JYUlRLbW1rRUJpbjcybG1MaTVuNVp2MHhteG5CV0lHWURFd1hvS1FBcGtOa0dPTFlJWTJEVjN3T3A4K3RZMXg4TlE0ZGV3N0lYQWV0ajRDVndzcnFLbGF1VnpoOTVoek9uRHNIcmZWY3E2dW0zRFFJNWxvL21Tby9UVmRwVUtoQVpBSVEwUHcyMUdZRlJPNE5HYnRCekV3MEJxc01ySEtReXNwQ0Y3M050QjJWRlhUSkxiZmM4b2tzeTk0R3dLZ3NBNkRBWktCVUFUb3d4RE51L1dZOHNuNHJMbTZ1d3VoSm93cmVxZG0xR3hXZzI0NUI4VWg1M1ZTWTB5Z1UwTXcwdThHeFRwc2hrVUJNQU9jQTVRQmxJTTVCUEFDUWd5Z0g4d2hDQXdnTklUeUEwQUNHQnU2NUhFSkRNSThzdU1nK1dJMEFEQ0RJWUxBRm9YTXdJQmc2RE1FUkNBNGlveFdzcWl2d3pLdW5PSGJ3Qk5aUGZRVFoxaU5ZTWV0UVpRbkZqSHkwZ3F1dmVRYXV2ZlphSERod29HTGt3aUZVWGNOL3lUT2pqazB6V3NQb0VzWmxDMFRMQnJvSy9SRHhkMUNQNFRqeWhUTmtsUC9GYzU5Lys3MkxySWs5RzlkT1JFWkVmdTRUbi9nRWluTDZzNWtTSGhZalpLUlFNQU5YUFJzSGIvaG1QUDdJR1F6VlNReFdnMEd2a1F5NzNTNnRYdXpMK0p5N2VTM1IrSExtR3JybUczNlRTMEQwUHlFVWJlQU81NXNJWjg2cWNScUZjaEFVaUJqTUF4aHlzUzlTTGhlUEhDTklscTNpV2RKcjlXQ3JtVEoxeVZMNCtqaEtqQ0JVQUxRTzFobDQ2enFvd1RxdUhFMXdnTWM0Yy82am9PRlpyQng1RHNiVHc2RGhGY2dHVXh3L2ZoekQ0UkJQUFBFRVRwMDZoYklzbzZVbE0zOWZab21jeGdUa2dIYWRhV3dpTGJzOGo1MXVqSEZXelFhVW1YUEpWMGJ2di9QT08yVmZBQ2NFejMzM2ZmejV4bXg4cDVwZUNZVlZGS01KdG5MQzZyVXZnRGw3THk2ZU9ZbkJNeVlZalVhTkYvekpGQXExUkV4dFJ4dU1OTGRHcXRlSWlKRXFXOW9ISUt2WHNEWE5qUE50eEJDSUZCUVBIVGh5OS9tV05iTit6UXcwVEFSaDVkaTJBRHppekJaekxXQVVpdndpQ25VT1dnaWtWekVpQlZZVGtGWWdiVERnTWZJckp6aXovbGxjT0xPT2xlTXZ3cVE4Z3RWY1FXV0VRNGNPWVRRYVlXVmxCWTgrK2lpMDFzaXliRnZ0a01CVS9vM3ZaZ1BIc3RuTllaWXpTSkdOWkdsVG03YXphWW9WaHNQOG9RTlg1citIQmNkVlhaWnQrNU9mL09STldwZC9YRTdOMTdOU01OQzJLa1FFZXJxQlJ6N3paN2pHL044NGZ2UTRSdmtZS3AvQVlBZ2pJMGkyQnFFTktIMm81bVIzTDlUZW5YZmNJZ3BKNnBBTUlKYTVkSTF0SmdHMTk3QW1rdXFjalFjTUJTMkVmV28vVzFOTW9Lelh6bGE3aUt5QVdjRlBieUcyMnNacUh3WEJ3TFUzc24rM01SMXljU2JVaUJYWDJZV1UyK2t6Q0JRTW1aa21kZlZNWEYwYUFSc1hRK0VCem04TWNISGpLcXdjZmg3TTZIbEFYb0Q1TEVnYlNEbkU2VE9iZVBCTG44TzV0UzlqNjFLSnlkWVVSVkZBbDFPVTB3SzZtRUNYSmNxaWhERUZpbUlLWFJRb3k4SW13Wm9TUmp2SzJoUlY1cmozaitadVhkM1g4ZkV4MkEwR1pITVlRUWJLVjNpeVFwWU5rQTFYUWNORC8rR2Q3M3puLzdDSWY3UG5Hc2ZMQzE3d2dvY2VlT0NCZjdLSnpYY1hSZkVpcFJUSW1XUDU2aFc0L3VaL2d2T2ZPb2ZKaFkvaG1WZFBzR0tHTHRCM0Fkb1FDRWNnVXRiQVFxMmdXZFFVODZISDdZU0VWTTkyeFFTYXlRbVhtaExReW5NT0xHekNKaU9yTkloQkJpRUc4UUJNSTRnUUZETklaUUFwYU8zT21UTXdoZ0RiVEFRUnNnRkZGK0hsaW84SVFzZk9WTEdpSUZCVjNMbE9wSlFnVzM0QmNSRWh3WkhET2ZJVmpTZE9mUUxaNFFLckI2OEJaQVRGQStpOHhQSHJEaUZmdlFVUG5janhlUGtZVEhuSmhpVnFkMjgySE1vUkJjYk0zUWNUanZJUWFkWGsvbm11TjU3MFFHTHZaMXJnS0dZTThsRmhsUHFsUlVGejJUU09sd2NlZU9DcTlmWDFkNHZJaTBKN1hwa2N4Y21MT1BHbFg4Zmg0Y2R3dzlFY0J6SUNjWUZTandCYUFkUjRlOWJySEhDVzF6Z1d3eHdzY2xUV3RmMHMyV2FxelIvUHROYUZzTXRZcVA3T1ZGVnVBZ1RXbWF2aUhJQlVEbFlERzBHbkhNeVpUWENGYzJaVkJpS0YwdGlNQW1hWEFFdnN0STZ2c2xWendWY0p5aWxtUGpaQlRCWWQyVmQxd2dFRHlLRTBnOFVBMlJnYUJVdzJ4RlFQOE9pcExZeFdic1ZvOWZrd2ZBUm1VTURnRWtnVU5pNFF2dlRJNS9IUWc1L0grdm82SnVOTkZKT3B5ekMzR3FmVUUwemNjMlZaMnFUYnFvcFVBNmFjWStpMm5XZHQ0L0ptcy8zSmpoVHhRV1JCbG1WUUtrZWVyU0RQaHIvempydis5SWVXQVU1Mk9ZSGpZendYTDE1OE40QVhpUWlVVXBpS2hyN3FPTDVxK0QvaXNRY1ZUcTc5TGE2OTBtQ1ZyclEwYnJZSkk3em41MGNVQXNjRFJqb0RvcjV0VVdPYkp2WU5JWGhXNXN5ejhtcFNJL2RjRGxJNWhFZUFLSnZ5UXJhSWoxbEJ5TVptRE1qNVFteTFFa2FWcVdaL1dzM2pHdXRWbGFIVlh1a3ppSmhCaXFwUXdCeG9LckxDV0ZEeUN0Z0ZXRWx0d1pBQloxUGNkTzBJanozK01EYkxJWVpIdmhiYURLQjRGWXFBSTRlQTdPWWJ3UXc4K0lVdlFPc0M1YVNvZlpZdERyVGtpSjVsYkZRbEJvc0hxTU40R0ZkWkJ2NzZLREJuWU01ME9lQ2x0TTFsQjQ0SHowYy8rdEZYaWNpN2llaEZOZ2x5aW1Jd3hxSHMyYmpocHUvSGx4L2FoTWluY2MyUkVzUE1RQW5ablJlbzRnV0xzbXR0YldaOVpqTVJCMlB1VEpVQ1ZJODZiNjhCRVZlVUp0RldWbFY5dk10QkU3TGxBVkEyL1lWa0FLTE0rak9PYWdZUEFHVkx1SWxIem1Ca3Q4TTZ3QkJCVVFiQ0VFVEtsbkdMTFpjR01jaFJ3K3dpbmVHd1dmdlZhUzRvRVRiOHE4dzd0UTVCQVVNamNKbUQxQUZiSVd0S0VCZ014ZzNYS1h6eDlFTTRmM29UaDQ5OVBVQ0hJVFNGcUF0WUdRM3hyQnR1QUJQaGN3OThGbEtVZ0pTWWxtVmxvbmtBVlZuakZmVzh2U1pvVzhpaUpaNURSRlhYaXhrRnJVQ2NJUitNN2xPRm5OMFJZZlJreUFNUFBIRFZ4c2JHdTQweEw0SVNUR2tUdVl5UVRRZVluSHNFajM3eEhUaDY4RjVjYzBoaFNDdmdYTGNFTjd0TnRiWTVtRjYxVjluWFpPYU9UWE0rd2ZaOEtHdXFvZEZjTTFXcnFvRkxlMUVReXUxTkpBWGlvZlZKSkFNd0FEaUgwS0I2UGZHdzhncXNEK09xUTRsc0FSc0ZmM2RJc09hYVRZR0JKd0txUmNTMTdBZHA3TGdEWHJQWFF4OEV6TUFTQmU3NmFKMkJ0VVkyTEZFeThOanBBbXVYcnNYaG84K0RaQUFOMWlHeUFoaWJaWDNpNFFmeDk1KzZIMmZQbk1KMFBNSFc1aVpLdllIcHRFQTVuVUlibTRVdDJsaVRyY3FVbnU4RE4zZi9Hakl4MkdtWERMbk5hVlFFOG1iYThJQm9VVC8waDMveUovOXhXUWM1ZTdLQTQ4MjJqWTJOLzFKTzlTMHJmQkFtMzhBa0Y2aXJic0cxMmZmajFNTTV6TlpuOE15amdsSGVsZ0VnV0Rhc1k3V0pWTXhYbU14RE5OTVdkZERXdFY1VDNwcGwwSlNOOXZQQWFaVWNUSllJSUxnT08yUkxIMEE1U0swNjBJekFuTGx1UVk1UkE5dU9RUlZ3Qmk0Ym1pd3I1N0sxZlRvT01kc3VQL0NMam1jWkNTNjloVERMT2xaY2IyT3JYRkxzaW1XeHBYQ2w3QXltSVNndkFTNlFtUkxYSHh2aHBEbUhjK2MraXRXak44SFFsVkJaQm1ZQ2krQ3J2dW9HS0JBK2ZmOG5jZWJrS1V3bkUyakRWYTJTTmpPZnNhOVpoaWJmTXVpbnhtUjlRVnQ2cmtDRWo2K0MvbXduckJMalNaUmJiNzMxekdBd2VOVkFqYjZRVHcrQXpTR1lmSUxKYUEwclYzNHRubjM5NnlENkZweGZPNDNOemMxb3A1U2R4SHphcDBWTG8vMDhIdzlndTV1eGdOaHBLekxWLzRuRjI5UXV2MHlCT1FmVEFFd0RFT2NBNTJBZVFPVURjRFp5V21ZQXBYSW9OYkNnSXR2a1JJZ0JsZHRqcUtFUDRybU1BbmRzSGtEeEFFb05RVHgwejJYMmRaUzVPaURsZnRvSFpQNy9UTG45WFE2QnpURVFWbTEyZ2xMUWJGQ1NRRElGclFTR0IyQnpBRU5SdVA0WkNnZFduOERaOHlkZzVCQ0tBbFVaUlo1bmVPYjExK1A1ejM4QmpoNDdpc0ZnWU9OTXJpeCtHMmpJZElJbnBtM21uNGNMRkNzUU13YURnV2ptMy8vdGp2WlArMWJqZUhuZTg1NzNoZnZ2di85VnBTci95bWk2SlI4ZkpHYWdrTFBBVlFyRFF6K0dVdy9lQWpuMUhzaFZCNkJXeHFEUk9waW5VRm9oSzQ2QWpJRmtGMmNKalFRb281QkpCbFZtMEd5Z1ZmTkk4akF1UkhBWDJmc3d4akZ1NHNnQ2dZdnJTRVVrK04zZnA4bkQ3WEJWQ1FDdldsTk0rVFNZREVSRFFMbU9QemdBSUlQaDNLYkZ1UFFZVFRtMHNWcFFxYXhxcTJaVGJ6TDRiZ2FzN0U3S2JMV1lOYzB5YUdOQTR1SkN2bkxQellieERWUGdnN0JobTF3eFZVcVFNVklOeHJDOTZRWlFMaGZPWHFOVkdCRk1oNmhpUzlkZGR4M284U2N3UHZNdUhManFCZEQ2T0lSWElFb0RvL000L2xWSDhEWG0rWmhPaHBpTVMrUTVZYkoxQ2N3QXU1SVBGb1l4QkhGTldpcmZjODdEc0dtYVBxWm1UVjhiQ0daSEJoU0trU3NHRTVBUm9FQVBaenpja2JaNVVuMmNpRCtTM1h2dmZmOUM2L0pYbVcxWXdiTXM1ZVpwckozNGYyQW1IOFYxeDA3aWNFNFk4QUVZeWpETnhpQXlHSlFqR0JMYm84enRWZ29hYkd5OWlIZW02MDYrZFJoblJYQld0Zk5jZXlueXRlbHphVE0yTmtCVmtORE5taEVDS0hPSm1MbHRwNG9WMjB1QWxjMFJvd3hNQTRBSGptNCtZQmVkeTBrVFpBQVBRY2pkb2paT1kxbWppaml6Zm94eitKbUhOaWdLNVh5YkhJRHJ2U2JXajFKS09jZmJWTzJnZk1KcGxlSGtmSVBRL3hFeld5WUMxL0RjSlp2YWEya3Ewc0Z1TUpaNEtIV0pKeDQvaVV2VGcxZzU5Q3dJSGJSTVlsWkF6Qmk2QUI3OTBtbDg3TzgraUMrZmVBamp5U1dVeFJqRlpBeFRHdWpTMks0L1ZYZWpkcTFEVkFPT08wL0tiZDhMeFlROEgwbytITDcxUDd6elQzOXVwOERKOWd0d2lLZ1VrVisvNzc1UFhTaUt5YThBdUNyTE1wUmxDWXl1d2hYUC9VNXNQcjZLMDJmdWdScHNnVllZUE5JZ05ha1lKN2lxUjd0bmxUQmtJS29FNEZQd0VXUWZCUHNHemRmSmlJdkxjSlZzS1JXNFpnc01zQXd3MmM2VE1MQ0pyRGxBQXhBTlFUUzB3S0FWUnpjckN3ektuV1p3WFV6SnNtSWVPSVNoQlFjcEdCQXlnaS9TZGhveGMxcUZYS0wxd0FLVFhNWUJsRHVPUFVlN2xTdG5uaG5Yd05ITVpSUE1LSGhVZ1VpYjVXTjgxTlJwSndwbWNMb1BvRmtYU1FHZ3hZQ3pBYTY3L3BsNCtNdG5zSFhwQ1J3NGVEMjBHZG9nTFkrUTVZSnJycjhhLzVEK0lTYVRMWHo1UzF0Z3pnRXFYT05JVy9DbnBadDYzbGJiUkxNRVdWSTJvTW9xaDhvR0h4Zmc5NENkanc3ZGo4Tmo2TjU3NzcxS2EvMVhBRjVFWk92NERUTldpa3Nvem53YWE0OS9BQWZ6QjNIRjRRc1lEcWMyN3doREdNa0FHZGhlZXpBUUtrQTB0VDJ6cWxMazdXbm5QbDR6WThvd3g3UVI2Um5HZkN2Vm9QYmVWSXNwQi9FSXhDc2dIa0hSQ0ZBWmpCbUFsZlZid0RtQTNQYUJJd1VJUS9HS0E0NXkya0k1azg1M3ZiRkpqN1pwb3pjQmxhT21GU0M1VzdpT3BhTU1ZSjZwVU5mbzBOZWt5RFlXVW9McVc1bTFaTEswVlJYSmx3bzhNN0RKZkJRWkJFQWJXMFloWWxCcWpRY2ZQb2s4dXhyWjRDb2dXd0V5b0VTQlVxWW9OOGY0MGtNUDRZUHZmeC9PbkhvQzR5M2Jac3VVTGtPNjhubHFFOVdxZ0dlUVNVNk9mcWVzR2dkaW1iUU0yWEJrOGl6N3lkOTU1Ly8xNjdzQm5Hd2ZBa2R1di8zMjB3ODg4TUNyMXRmWC8xQkVYcUdNY0NhQXlhOENqdjgzV0QxNE5jNC9lamVtNjUvQ004ckhNRnFab3NnM3dSZ0FtRnBidkFyeWpjQnpHcU9ienZhMUg5Vjd1SmFmUnZNUmVFTmNzV1pDSTVCYXNjNDBEMTNxdndVTWNXWnBaalYwdmszbW1ESkxUUXN6U0FZQUs5ZG4yeTRFcWxnaVcrbXBEV0RBN2x5Y1ErK2FGY0t4ZUhNai9nSXFYZW8rWGkzL3F3NHFZcDdGZ05qM1dYYkJXM2R1Vlh0SEk5QkdXMjFJQkZLTW9TcHh3MWRkalljZk9vM0R3eFZvd3pCbFpzMWJKUmdNVjNEOURUZmk5aGR0NFc4LytINlUweEtsMGJDOXJzMWN1YncxUzJrdWhPQUptbnJEL3FxOEFZQlNqSXl6VDR5dU9QeG51d0dhL2FweFFyK0hQLzd4KzM2QVN2NHRaWlNhRHJjd1lZR1lITm42R3ZUWkQ0TFgvaG9IVnArQVdqRVlaWXlNYlB0Wm05cHZuVmtiZDNDdGwrYktsQVBhbVowaHhEUWJZRlRWMHBnZ1FFcXpwTkFxTjNOa1dTMGFRbmdGckZZQkhybi9Ed0FhdWFSTlcwdkRQSUloNzhqRHRnVld0cE5QYWNTeGFBUEFsU0o3TnM2NFVtbnRDeVRKZ2tYeG9OcnR4ZlVsbUdXRCtVYnQvc3R5a0NudGxZeVpTeithYi94Z2dXTkVYS2JCcktlQkVGei9POXRvY2RiYmVhYkJJUUl4SlU2ZlBvc25UbTdnMEtFYklOa2gyd0FsTS9iVUNvM0oxaFkrL3BHUDRHTi85MkdjUC9zNHlCU1lGbHNBWmR2aWNDR2o2UUZrUWVXNjlMQnRjMFZNNER4SG5vL08wV0QwYy8veDkvL29YKzhXY0xMOURCeFhsdkE3bjd6M2djT2xtYjRacGp3NkpKQmdCQjRleGVvMTM0RGkwQlZZTy84eDhQblB3eHlZNHNES0ZqS3MyKzRvUkJDeHRmVVdHS2dGTnhGMG13bkxmVTF0ZCtHZys4d3Nyc1BrU3dDR2pnNjJmbzFRNWlMK0E3QWFvQ2h0alQrVHBZMk4wemFnekFZcGxUUEJxbm9mWllIazZtdU1XRElBaG1ESUpuRlc1ZFBPSkJIWWNnSmZYZW83WnJ2aEZlN0FUbnZVb3hCem0wbTk4TXkydTJLWEN5Y3pSOC85enM0WFZIWTZkSldtWkgrS1pnZzBycjdtTURhMjFqSGVQSWVWQXlQbmM1RnRxOFdFZkxpQzUzN04xMkl5M3NSSC9zdEZURFl2WUtBVUNxSEc0R2MwVTRCVjFmdEEyZTQrUWtyZHZURXgvM2EzUUxQdk5VNmdlZWorKysrL2FUbzJyeU90WDYrNFpIQUpRNFRDWk1nbnA2RE92aGRiRzUvQmdkRXBIQmllUTVacEtGWXdNbklNbU13eWc3MWQ3T2xNOHAxbnlIWERRVUFXb01vRDh3dlBsekg3K243UXlHbVRrWFgwMVFxRVJvQ3kvZ3pUeUNWbkJveFpGUWhsMjlEUU5ucXFtbW9RS3hqWUNEL0owS2JXSTBpM1laZHVvK3pFZ3pDclM4S0tSeURvbGMzVnVjOXBwSmIxWkh1NEtiQlMxUmdUeXdDeXJhZng1cXNyMHBiSzQvUHBPd013aldIa0lreEplT0F6cHpCYXVRRW1HMEV5VjJKaUNGSWFTRG5GMnZreitPRGQveTgrK1lrUEExS2kxTlhRQ0lRMUVqWm9TaTdSMVFkUmN5aGx6V2FsRkVncFpJUEJ1YW1VMy8ySGQ3Mzd2YnU1SnJPbkFuQmNJdDZESXZJdlAvS1JqM3pBTUw4ZEdOenNPaG5Eako0SlB2N1BrSy84TGJZdWZRZ1lUN0d5c200YklpckJVQWk1Q0FvbUZKbmRtUmtaQmtiQjczc1NaaDk0TTRPTm05a2pnWW1qWUp5ZlVuTHU0anNEQjR3aGlGWUF0c0FoR2xsSGxRY3V3WFBHcWduWjNtZEdGRW9ldWw0QzdJS1lHWXdKT3VNRVFCQTMvSWg4dG9IckgwQUlYbSt3elJ3am9xb1AzT3lCQUVEYlU1V01NUkIyTkhxWXdPcFRqY2hycUtBc1Erb3pVVzB2Z1l3T2duTGcrdXVQNDB1UG5NYnE2alV3ZWdDVmw0N1N6MUF5WS9Yd2NUei85djhhanp6K0tNNmVlaFM1MlVRcFZNMDRNdDRuSllHUXVIWlhWSDAvQTBZK3NEM3kxR0FrWm5qNDduSThmdDl1cjhtbkJIQkMwdzNBbjM3b1F4KzZiekFZdk00WTgzcWxGQnNZVEVjWlZnYlBnMUVacG10WHcyeWRRRVluTVZ6WmhMREEwQkFzR1FaZzF6bXpBUE1Hb0tZUU03Sk9lVUEzMjBXUkJaU0FLMWwyRDhCU3lzUU1zRTNTRk1yZEpYWFJkN2J4R2xaRFIvRmFvc0Q0TW1jSEhodG5zVDhiRFFQQ0xMZk5CUnA5WGhxRlBrMDF0bytxRVpjejg4YVZUSk55bXRVeGlBM0RwS3JVb2lXcWNpbG96T2k3VElvQVI0NGV4Zm1MSmJiR0c4Z0dXUkRsbjdXWHV1NloxK0gyMjIvSFBlODlpNkljV3gvR3pITFFKTFFHZ2xFZnBCVHlQSWNJa0dVWldQRTV5ckxmYUpzZS9SVUJIQy9mOEEzZjhLQ0kvTXQ3NzczMy9WcnJIOE1ndTMwQ2ZhU1VaMkRsOERYSThoZGdvTCtBY3YxZWJHMTlGam8vaFVFK3haQUVtU2dvSmtBWkdIYTlsb2tCT0VMQmt3Q09wYUpxc2JscVRNckFQSFJWbHhsSStRcE01WnBvakp5dll6VU9jUVlSWlVkMStDNmJIbUJWaXlkQzJJVkc1a3dyNzV0bExxT0JxMHJRTUtselpwaFJHRml2L0pHcWkraXNjWUw3blBuK0R1VExFRHlJWEFaRW5WQUpacWxzNnc5UkVaV2VTS2xNUSt0MVhYdmR0Zmo4Rjc2SUFYSVlXYTAwSWlsTGxHako4QStlK3pWNDlORXY0ek9mK2hqS1Fyc1M4dGwrSU42MGRwUHlsTEpNbnNweUdBSHl3Y0J3cG43aCttYzk2NTY5V0lOUFNlQUUydWMvaWNpZmYvaVRIL2t4TnZnQjR1enJ0akFFandZQU1neFhWbEZzWElmTnliM1E4aVZvczRrRDJTWVVsYmFxc1Z5QnBsVW9OUUZSNGZLa3FHTE95T2RyK1NZWWNCbk1NblJaeVRrWW1SMFZTRG1ZaGdEWi9EQzRoaG9pLzM5N1Z4ZGpWM1dkdjdYMjN2Zk1IYytNUFRZbVlHZ0pCcEdxYVFoSldpdXRCSmptQVZVbFZZU0VLeEdsZmFsUUVEUlNIcElvYWFYUU5rU3RoQlJWRUNsOXlFdnpScVNTNURtQUZhUkVNcklCT3c0bXBZVFdUUUlFZTRhWjhkenpzL2RhZmRoN24zUHUrTnBTbWhnYmZKWTBzdWZ2eXRiZDYrejE4LzNFbThWd2hMTkxHaDlyT3lESWt6cTArNW4ycWtncUczSGN6ZDB1UjdyRTJRcEI2UmlVL1JIMDlCQkFVOUxvakRZM3BNcFVjdE9mMEFCVG9GWHQ5MFU4ZldPMU81OE9xcU9KREJmM1lZVHh2TVhPNVFWc2JxNURaQVNCaFRHOUhHZkd3dUlPL01FSFBvUmYvUHhWblByVktWaG1oQ0F3SEcvYXFGc1N1VVNaMVlrRVE3SWpCekx1dVdMSmYrdWhoeDZTQzNIK0dPL3dJS0x3MFp2LzZORWk4RDNzenp5cHZDYU4zY1RFRmRnb3JvTmYraE1VeTNjRG96OUZpZC9EdXQrT2RTK29xRUhnSnFxNnhDT2JMQ2N5MEZDaHlva25NMG83RndPaUVTUWxFWkdORTdJa3V4UWxsMUt5SUM0MDgrMmdhYU5QTUdtYWxuNG1FNnVNYmFkMHJWdGNvZ1prRGttbUMwaG1ldWFQckdhRC9tM1U5VEtVRGFjbzgvQjcyL1V0bEluY2lMZmk2bWRKZGszZllQMVNhL3A3M1BHYmxDRWdoR1NJcFZDOFovZDJzRVk0RFN0RnJXNW9yR0JOVElJcnI3b1dOOTcwK3pFaFZHRklZWHJZQlVvN04yWURZeHlzalhzdVY0eGx0RzNoNjQ4OTloK25MOVM1czNnWFJEYzhlUHpPSHoxMzFkOHhtNzlXek8xdGRCNmVsOEQyQ3N5TnJ3WHNmNkwyeDFEN244STFyMkhFWjFDNE5RQno2V2JRbHRTV1M0NzJOdUQ4MU93Zi90aWpLR3hMVmRZVzJvTXQrdFNKUHQwK3VYTmljZjlLNkVxMmZKaVRhazJrQWVjRTVONUltWHFsVUg3Q3A5ZHB6N0YybS84OFJLRCtkZFFiVWRQVTZyVDNiNW8xaUtYMmxqN1haSTZTQ0lpMmZVNEFpV0N1Y0pnZlc2eFhnQnFPZ0ZTT1UwUW1BekdFVVRHUEcyNTZIMTU4OFFTcXRWVmt4WGZPcFcyNmlkdGJqZ2lqWWs2ZEczMW56dk4zLzcvc3pzdml4cGwra3c2RVAvN1FyZjlVQkxyVEJIblNoQ1pZYXRDUXg2WmJoTi8yQWREQ25lQnRud0RzZm5oL0EveGtHM3pKa0JCZHNVV3lsbkZJZ01qb0NrWnBPUXBPbWx5WkxNV21SUXByTDJHMFpaSnVhUW1TdWEweWVwS3UxQjNRN0ZPS0RJZnZEdzM2dDBpTE5KMzYvZnlrN3dUWWFTcHBwb2JQZXZaRWJSYk40amRjSnFCRlppY0J3RHloV3hqUElXUnJEK3JnUE9DMHErSVJsbmZ0eHRWNzlrQlY0S3p0VXI4UDZrd0xhaVpHTVRkL2VqdzM5L0RYdnZuTjB4ZnlyRm04eXlJOVpWNVcxVHVQUHZmcy9pWk12aUVVYnZDV2ljSWlERjJMc2RzTmEzZkQyQ3NoMWM5UTRWVklXQVZyQmNzaFBTVURoQUxVQkpqMkNCb0VBTUxVM2p5a0dmckMwN3NVemR3Y0FPcFREV1FBaEpRZ0Z0SStyYzBVNUdXcUdlK1hhNVJsbjZiN21kYlpvSitoMUwvditpVVVXbHVTYzYzeE9yd2V6VTRFbWozNWE0blpORFVIN3cweU1qVWpKdm5DOW1YSXI5Wmg3U2dkUlFJbGtYaGpHQmc1RkRxUHZYdHZ4TW1YZndwcHFsNjF5RDArbElGeERxWVl3eFhGOTNiczN2UDhoVDVuNzdyRTZmYytBSjQ4ZE9qUW5RSHpmNFdHL3Q2UUduWU5TZzJvNkNydzNHNm9maFR6L2dob2NoeFV2d0Z1M2dTYU5jQUZrR3ZnbFZGSUF3dUhoZ25pOGk0aE5hWWFTNDE0VTZReVNSVkt2aFhVaTZRZWs2cWFpSHhXTDNGN25sRE9yWHNiT24yM2JLbk9VeVBsNkpFamZmZVFuaXBvOXZYcFNKN1VzVmFvVzVSMlcvaXRBdmI1NXVwUUZOSWpsMm52eHhUYUpXQi9tRWZVZXdpNFhrb243V2dZTkdTQXdtRnMzb0RBd3RNU05FU0JMRklQTllSS0ZaYTNZZmZ1UFZqWXZveTFOMy9aVWp3TUozMDVLRWJGUER3c2ltMDcvTzllZjlOam4vLzg1K1ZDbnkvR3V6ejI3ZHYzeWtmLzhKWi9MS3k3VThRL1ZUZDFVQUFpUUFnTXdnaktINEdNUDRFd2Z4Zkt1ZHV4Z1p0UXlUTEVDMnhZUXhOR3FQd0NOQlRnSUhCYWcyZ1R3V3pDMjAwb0drQWJSRHljanhwd0dyMncyMTFHRWs5WERRamlJUnBTWW1sYkZtYmoyUGo1aFNqUHR6YngzUjVvdXNtZi9oMkNPZmNIOFRtWXRQM1hTMzJjZHZTUC9ER2VtNGVveEhGeUtsczd5OGo0UUZsYVdzTHlqcDNneEN2S0FFNWlCaHNIN3dOY01hZTdyN3ppNGM5OTduUFB2UjNueXVJeWlEUzZmdkxvMGFOSHlySzhJL2p3QUJTM1cydU1xT0pNMkkxTlhBVmJYQWxYWEkzeCtCcUU1aFZvL1hNVTFUcHFJMkJXR0tsZ1BZSFZBM1lNUVlGQUZxeDF0TmlBUkZNcmlpNWprRlJ5dENBZWJlV1FZb0p4aE00UnQ4MTgzNWpxdDRxSDBxMFdmOXJ0ZG5ycU45TVRNcHkzOGM5OUdEQkwxUWM5cFpwejY5dU41OGM0czFhM2QxcmVJM1hzMmFpNnVYMzdEdnpDMm5oN0o2Y0JzZzZHR0c1dUhqdVdsNC9jOHVGOWoxN0lnY0JsbHpnNWJyNzU1aFVBVC96NHh6OCt1TG01dWQ4SHZWOFZlNGtuMTRPSWFoZ1lmZy9VYmtmQjE4THBLV2o5Rm9pUEFsZ0ZTd09FNkMzS29vQk4vSDlLTjQ2R1pJSnJvTUZIYUk5eFFDNTJzaGc2YSt5aHRJa2pjRTRhQUFtSWFSSkNXMVZBd3IwV2lNN2RZNlIrZ25wTHd0WVRabXZTdEFMc3M1S2xwekd0MCtLTTU3L0ZzQ1hCdGlRYzBZeXBYTnJ3MjRBUUFveXhFZG1lclRvU0xvNnN4ZUwySlpDeDBOQWtKcW1Cc1E1c0xPWVhsdno3UC95Ukw5eDk5OTJuM3JhSE1TN2pVRlU2Y2VMRXpyZFcvdmRUeHJnSFlSZjJlbkpKeXJ6Qk5tcFF3R01PL3dYcjN3RDhLdGl2Z0xFQmRqWElTWHIwYklja2dYTlloakZGSktvaFdteEUvV0tHSW1IVWVKUjBCMXhMUEdzZDAyQkJ4a0ZDVk5Fa01OaEdWUnp0VGN1a1IyOGdvVjQrNU9sVVQ5WktPMlJ6NkxFNXo1NmNFYVloUEIzS3VydEJ0bXJUWVhvZ2dxMXFSREp6K0pCL2ZuUGxMYnkrc29tU2wwQ3dNRkpEUTRWYUZST3ZvQ0FJNVNaZWZPRVFmdlNEcDZOanVIWHhnV1VMekJYamxhdjNYUE0zWC83cUkwKzhYYmZOWlhmam5HTUNkMHBWLy9YRW9VUGZXcW5xVHdudzRHanM5bnFBTnBnd0lXQSt2QTl6ZkFQTWFCM3MzZ0Q4TDJIb2wyQjlFelpNd0dvVFhDZEFmVUJBM1hxdlJJT2t5UGRuaXFXY1NCTjlPMDF5bWxha3d4MzVOQWdCQ2s3K3BsRU9WcE9iOWRhRkphSERoV2xxdnM4bTYzR3ZkMGprdEtsK1Jyb1IrTXd5clc5THNoVkIwTHR0TkpMK05Pa1laSGJtMWxLdHo3SnRYWitaRWJ5QVU2L0h4R0RXckZJUFl4M0lNRGpwTUJBYkdPdjA2ajNYUFAzbHJ6N3luYmN6YVM3N3hKbVpRQ2RPZkd0MWRlMXZpZlVCYjJSWE1FU1ZPRmpkQnV1V01PSmRjS09yTUFwWFlTU3ZnY0piZ0pRQWVaQ0pERE9GZ0UxSUdqUWVramdpU3FIZG5Hc3FvWVMwSmM1RmlSNFBHQUxEdFBzTWtaeGt2WFBjTDQ2MG01K2RoUnZMUU01ZVQ5UGYvTWN3TS9ZNlp5ZmZ6TjFPZjNtVi9rL3RYYVYwVnBuSHZmOUlORmdPTU53dFh5V3o5SkxXbXFZSFJlTkQzR3NCSUd2QTF1cjg0c0ozUjR1NzdrczlMSWJFdWZnSjlBK0hEeDkrTElUd29HLzBBYkhOVG0rRWpZeFEweGhPSGVaNUNjQTFFQzR4eHY4ZzZBYWdtNEJPWUVJZG0zd1ZNTlh3Q1J0R3FzbUtjd1JBNENYYXRMUDYyQmR4RTNmeEhqQ0c0dHVUNWFra0pDQWtKMG94bmQxajlKZUlQWEVOYVc4QVRySlYzZS9wVnZkbVRITjdadDBZMDRNQWJYYzR5SDFaNWpXcGdsUjZRTlJZYnNhaXNZRkJ3S1JXS0kwQVZaZ0VyczJVYVEwQndYdEk4SmhzYmdKS2NITnphSVF3WGxvK3ZmZW1HeDc5N0dlL2RPcWluSlVoWGM3ZkF4MDZkR2duRWQwU1F2Z2lnUDBtUmt2YnRkWmlHNjNDNkNZWVoyQ3dDaE5XNGZRTVJ0VEFHYURpSnFwNW1oSElGaUF6UWxBVE9TYk1jQkpWSm5QZm94cC9GbXdCWVNoWmlFYjlOTFlSNmlNWm8wWUdSbHo3OEkrNE9PMFI5a3pDM1BVeFpOU0Qya2lubjlhaUR2cTNUMDk0dmpmMTJ5b3Z2TlVaT29mUmtNeXVvcjJpTVFSb0E1WVNVbS9pNWRjRUFuT1dFM1VJQVhVZGZYV3F6WFVjZXVacC9QY3JMeU9JWW1IbkZhZUsrUjMzUGZLMXJ6M3hkcGRvdzQzemE5eEFBSjVVMVlQUFB2dnNmZ0Jmck90NlB6T2J6SFZmd3hpV0hLd1pZMlFXVUxqZEFCcW8xaWpGWXlTdnhiMkRFTWdEQmd4b2dJR0FBaUdZK2Noa1RCWWRhbXppVVJMWXhGNG5yeXBGNHRmeVZJeDF1bTZMVlF2MUJPUDdtbkt6MFFMUk1UcGk5SXpobVkvVzNCK0J0a3JrbnQvRld4SHhaQkd6V2tlMHR3WVFHT3ViUGxMT2xhWlVXdnUzbXpVRzYzV0Y5WTBOZ0JuajhYaEZKdlY5ai96YnhVdWFJWEYrdlNRS09ZR09IajI2djY3clQ0ckl4MVYxWjhDWW1RcFluVU1wODNBaUtDekRHWUt4Q3RlTW8vdUJlcWlmUU1XRFVZUGd3UVlJaGxydFpxVm9LQnNab29oN29keUV0MUpOQkpZOFdZdFlyY3pCMUxiWW9wNENKMDMzUWpPZG1tZnorYWNwQkppWmRMTW1adDBMMkFTbjh3aGFBd29FSWRRMVliUHFLQXRicFkyNzEvZFlYVjNGbWNrRXhvMTBjWEg3MC8veTZEZStjekdUWmtpYzN5eUJuanAyN05qMVpWbmVFa1FlVk5KYlExQmpqU0hWQXJXUHdNUENqU0QwTzdBSXNNYkRVQW5SVFJpZGdMUUNCWitBbk5rekJ3QXJ5RWlpT2tpMEcweTNCMU5uVThpU3dhQWhFY0F6TjRhN1dWZFB0VVlWTTBmUWNZcHV6M05yNk5SaTludzN6ZGxKR2VWM1ZSdW9SdkZJRVlleUl2aGdXL1hRVHFrbVNqMkZFS0w5WVZQajlkZGVSeERWWXJ6dGlSMTdycnNvdzRBaGNYNjdaZHdycXZxejQ4ZVBIOXpZYUhZNWgvdWJwcjZsYXFyYmlHRFlHQ0FFVEhRT3poRXNlVGhUWUR4YXhJZ2JHRzdBOEhCK0xSN1FrSGo4eWhFVFJBSWlodGdpbVVyRlhvVFQxek02TFI3TXJNN1Q3MU1BcFpBUTNUTU1hQlZUL2N2MCtMbWJ5azN6ZGM3dC9qMnp6OUhzK0txQVJGbmVTZWx4WmtKb0VwVWpsb3JTS3h1bDFVazdzNzZPa3lkUElxaDVhbUhYdHZ1KzlLV0xNd3dZaGdNWGVKaHc3Tml4SGVyOWgxWDhiU3J5NmJLZVhDRm1CenRuQVczZ0xBRVMveXhHc1p4YnREV1FxRjZjc0c2V3BBVjRObXdTQWpvREhFMWtQSUtnQ0lrRWxtMHNFdUVPNmZzVWU2YXplcHdXbktrelJEdG85bkFBNTNlSG1DbmZwTEdBaEFTSUNzb3lZSFc5UXFNV1FXeWlia1RrUUxRdkZGUlZoUkFDdlBjNC9zSVJ2UERDODArT0YrMWZmdjNyLzM3cWtubHdEc2Y5Z2lhU2VlbjQwZHZYTnNQdHdaZGZDTUU3YXgwckNNYllpUEFsQnJGZ1pBM21Sb1RDQ3VhY3dzS0RFY0FVQVBLZGVpVkZBZkc4QnhFTjhBaXdQSUoxRVhrdHdrbklMekZFaldrVHAvT2c3YUdhK2NJbGptcmtOMGt0YUJwRldRVnMxZ0dCTENvZlJ5Q1NraVNYYUdVWi9WNVBuanlKUXo5ODV2dTczclBueng1NjZDRi9TVlVjdy9GKzI1TEl2blQ4NkcyblY5KzYzYnJ4RjVyR093Qk1iR0NLT1JBVUJnSE9Fa1lXWUFRVXpxRW9ESnlOR0RpR2dNU0RFRUR3VVBHeC96QVJLV3hNMUVpSWJGR2JiaHlidVBpOXQ3eFBubXNGUGFZTnAxcTBRUllZMUI3ZFlVcDhPOW1xcHgxTzFGL3IrcCtnaEtvTXFFc1A3eFZCZ01ZcmdnSmVvc29ub0poTUp1M3ZsR1dKbFpVVlBQLzg4OTgzeGx4eVNUTWt6c1ZNb3BkZXVtMHltZHhXMS9XdElZUmJPWnFja2ttM0E3Znl0d1JqRkphQmtRR0sxQ3NWQmxFSFUzMDBPY2pXN2NRd3lYa3NKNERDek94TnVGVUE3ZEcwczZ4dlNoeUJUSk5QZEpyQnc1VHdhTWtlTVFzbktnRHZBOHFHVWRlQ3B2RVE2VWJmSW9BRWhjS2pxc3AyZDlNMERkYlcxdnlMTDc3NDhMNTkrNzV5eHgxMytFdnhQUndTNStJbkVSOCtmTmdRMFYxbFdYNVFWZTlTMVE4NjUyeWV0am5qSW80dGVGaFdXRllVem1BMGNuQVdzS1BZV0ROMzFJUnVTYXRROVcyejNiYzE3NFQ4K3F6UTZiSXR1cVZwTzMwRHRpdy9ZU0FCRWZtUXBtaEJnS3B1ME5RZWt6cEFra2hoQ0pyS3Nadzhpcm91b1pyd2VLbzRkZXBVZGZMa3licys4NW5QZlArU0hnNE5SL2ZTaXNjZmY5emNlT09OTyt1NnZyOXBtcDJHemYwRXgweGtuYk94eHpIUlFpUCtIYkRHdzlxVVNDTUxhMDJ5SjFGQUExU2E5cGJnczJ3YkF5UjRnQWpXdUpoczJrTSswN1MvNnRiSm1WY0xrU1NScTR5NjlxZ3FqNnB1RUVKR015QWxTa1lGZE12T3BxbnpRRURlZlBQTnA1ajV6dzhjT0ZCZjhsUFY0YWhlMnUrUHFwcm5ubmx1ZVVNMjcyYzIxeFBUdlNBeXpHellXbGhtV0FZeVlZd1lzSlpnTGNNNkM4c0VSNTFkZVZUeDUzYjA2NXNTd1Zjd3hzTFpFWXl4TFp5bzFScE1TOUJzYThpRzI0TmZCVVVUWWpKNEwvQUJnQnFFcUF5UG9BRWlYZlBmMzlONDcrRzkxN0lzRDY2dHJYM2xKei81eWNFTHBZTTJKTTVsUHU0R1lJNGNPZkxlcWduM2l1SjZxTnpyakNNUnRkWVN4VU1kWUoySnFHTUZiSTlkaXFRR0UyMFlLWTdBV1pQS3YwblRQZ09SRG91UWJVRHlnVmNvZ28ralkwbXFQUkZJU3Frc0k0UVE1WjVDOEZBTmFCcWYvcTRJY2VtclpWa2VLY3ZxNGNsazhyMERCdzZFZDlRVGJUaU83L3hFT256NE1GVlY4MGxtZnErMUl6Uyt2cDhJeTlaWk1OaXFDRkdyQ3RQbjFIQXkzY29LcHR3Nk5JY2dVRkdZWFBLQmtpNENVazhpN1FtU1pMZ3JFcDNqSk4xR0FnVko0dHFFZ0JBOFF2QytMTSs4c0xHeDhmRGRkOS96dllURWVPZVZBc1B4ZTFjbWxEbDQ4Q0F0TGk3U3hrYjFhV3RwMlRsSFFacS9ZTVlPaWxDQzkvWk5nQUdpdm41QW5wQlJtcTMxNlFXWnFKYlJBQUJGVXltRWhMVDJrRVNiTUZJb1ZGZXJ1anpkTlBWM1ZmV2ZOelkyVHIvVGJwZ2hjUzd6d1FNQXJLeXM4UHZmZjlPOUZFay9DSUxiQU54cWtvc0JrQzFIR0JvQ0EzbzllcHJSZVprcUVpQWVMZnVVbVY0bG90QTBGWUo2RUZrNE16cGFWZjZ4ajMzczloOEFrSXNOemh3U1o0amZhc24zN1c5L2U2WlUySFhYWGJkRFJENmVQODhOZnYvenNpd0JBRlZWUGJPeHNmRXFBTnh6enozdHkxOEtvTXdoaGhoaWlDR0dHR0tJSVlZWVlvZ2hoaGhpaUNHR0dHS0lJWVlZWW9naGhoaGlpQ0dHR0dLSUlZWVlZb2doaGhoaWlDR0dHR0tJSVlZWVlvZ2hoaGhpaUNHR0dHS0lJWVlZWW9naGhoaGlpQ0dHR0dLSUlZWVlZb2doaGhoaWlDR200LzhBaEVwQlZGYXVUZkVBQUFBQVNVVk9SSzVDWUlJPScsXHJcbiAgICAgICAgICAgICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU00QUFBR21DQVlBQUFBMHo3dEhBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBNEptbFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNMdnU3OGlJR2xrUFNKWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FpUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVFXUnZZbVVnV0UxUUlFTnZjbVVnTlM0MkxXTXhNVEVnTnprdU1UVTRNekkxTENBeU1ERTFMekE1THpFd0xUQXhPakV3T2pJd0lDQWdJQ0FnSUNBaVBnb2dJQ0E4Y21SbU9sSkVSaUI0Yld4dWN6cHlaR1k5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1pUGdvZ0lDQWdJQ0E4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBpSWdvZ0lDQWdJQ0FnSUNBZ0lDQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpQ2lBZ0lDQWdJQ0FnSUNBZ0lIaHRiRzV6T21SalBTSm9kSFJ3T2k4dmNIVnliQzV2Y21jdlpHTXZaV3hsYldWdWRITXZNUzR4THlJS0lDQWdJQ0FnSUNBZ0lDQWdlRzFzYm5NNmNHaHZkRzl6YUc5d1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM0JvYjNSdmMyaHZjQzh4TGpBdklnb2dJQ0FnSUNBZ0lDQWdJQ0I0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlLSUNBZ0lDQWdJQ0FnSUNBZ2VHMXNibk02YzNSRmRuUTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpVVjJaVzUwSXlJS0lDQWdJQ0FnSUNBZ0lDQWdlRzFzYm5NNmRHbG1aajBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5MGFXWm1MekV1TUM4aUNpQWdJQ0FnSUNBZ0lDQWdJSGh0Ykc1ek9tVjRhV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdlpYaHBaaTh4TGpBdklqNEtJQ0FnSUNBZ0lDQWdQSGh0Y0RwRGNtVmhkRzl5Vkc5dmJENUJaRzlpWlNCUWFHOTBiM05vYjNBZ1EwTWdNakF4TlNBb1YybHVaRzkzY3lrOEwzaHRjRHBEY21WaGRHOXlWRzl2YkQ0S0lDQWdJQ0FnSUNBZ1BIaHRjRHBEY21WaGRHVkVZWFJsUGpJd01Ua3RNRGt0TWpOVU1EazZOVGc2TkRRck1ETTZNREE4TDNodGNEcERjbVZoZEdWRVlYUmxQZ29nSUNBZ0lDQWdJQ0E4ZUcxd09rMXZaR2xtZVVSaGRHVStNakF4T1Mwd09TMHlNMVF4TURvek1qb3hOaXN3TXpvd01Ed3ZlRzF3T2sxdlpHbG1lVVJoZEdVK0NpQWdJQ0FnSUNBZ0lEeDRiWEE2VFdWMFlXUmhkR0ZFWVhSbFBqSXdNVGt0TURrdE1qTlVNVEE2TXpJNk1UWXJNRE02TURBOEwzaHRjRHBOWlhSaFpHRjBZVVJoZEdVK0NpQWdJQ0FnSUNBZ0lEeGtZenBtYjNKdFlYUSthVzFoWjJVdmNHNW5QQzlrWXpwbWIzSnRZWFErQ2lBZ0lDQWdJQ0FnSUR4d2FHOTBiM05vYjNBNlEyOXNiM0pOYjJSbFBqTThMM0JvYjNSdmMyaHZjRHBEYjJ4dmNrMXZaR1UrQ2lBZ0lDQWdJQ0FnSUR4NGJYQk5UVHBKYm5OMFlXNWpaVWxFUG5odGNDNXBhV1E2WW1ReFptSXpZelF0WmpGbE9DMDVNelF5TFRrMk1HSXRZbVJoTjJNeE0ySTRNekUyUEM5NGJYQk5UVHBKYm5OMFlXNWpaVWxFUGdvZ0lDQWdJQ0FnSUNBOGVHMXdUVTA2Ukc5amRXMWxiblJKUkQ1NGJYQXVaR2xrT21Ka01XWmlNMk0wTFdZeFpUZ3RPVE0wTWkwNU5qQmlMV0prWVRkak1UTmlPRE14Tmp3dmVHMXdUVTA2Ukc5amRXMWxiblJKUkQ0S0lDQWdJQ0FnSUNBZ1BIaHRjRTFOT2s5eWFXZHBibUZzUkc5amRXMWxiblJKUkQ1NGJYQXVaR2xrT21Ka01XWmlNMk0wTFdZeFpUZ3RPVE0wTWkwNU5qQmlMV0prWVRkak1UTmlPRE14Tmp3dmVHMXdUVTA2VDNKcFoybHVZV3hFYjJOMWJXVnVkRWxFUGdvZ0lDQWdJQ0FnSUNBOGVHMXdUVTA2U0dsemRHOXllVDRLSUNBZ0lDQWdJQ0FnSUNBZ1BISmtaanBUWlhFK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4eVpHWTZiR2tnY21SbU9uQmhjbk5sVkhsd1pUMGlVbVZ6YjNWeVkyVWlQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YzNSRmRuUTZZV04wYVc5dVBtTnlaV0YwWldROEwzTjBSWFowT21GamRHbHZiajRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOMFJYWjBPbWx1YzNSaGJtTmxTVVErZUcxd0xtbHBaRHBpWkRGbVlqTmpOQzFtTVdVNExUa3pOREl0T1RZd1lpMWlaR0UzWXpFellqZ3pNVFk4TDNOMFJYWjBPbWx1YzNSaGJtTmxTVVErQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRFVjJkRHAzYUdWdVBqSXdNVGt0TURrdE1qTlVNRGs2TlRnNk5EUXJNRE02TURBOEwzTjBSWFowT25kb1pXNCtDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh6ZEVWMmREcHpiMlowZDJGeVpVRm5aVzUwUGtGa2IySmxJRkJvYjNSdmMyaHZjQ0JEUXlBeU1ERTFJQ2hYYVc1a2IzZHpLVHd2YzNSRmRuUTZjMjltZEhkaGNtVkJaMlZ1ZEQ0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5eVpHWTZiR2srQ2lBZ0lDQWdJQ0FnSUNBZ0lEd3ZjbVJtT2xObGNUNEtJQ0FnSUNBZ0lDQWdQQzk0YlhCTlRUcElhWE4wYjNKNVBnb2dJQ0FnSUNBZ0lDQThkR2xtWmpwUGNtbGxiblJoZEdsdmJqNHhQQzkwYVdabU9rOXlhV1Z1ZEdGMGFXOXVQZ29nSUNBZ0lDQWdJQ0E4ZEdsbVpqcFlVbVZ6YjJ4MWRHbHZiajQzTWpBd01EQXZNVEF3TURBOEwzUnBabVk2V0ZKbGMyOXNkWFJwYjI0K0NpQWdJQ0FnSUNBZ0lEeDBhV1ptT2xsU1pYTnZiSFYwYVc5dVBqY3lNREF3TUM4eE1EQXdNRHd2ZEdsbVpqcFpVbVZ6YjJ4MWRHbHZiajRLSUNBZ0lDQWdJQ0FnUEhScFptWTZVbVZ6YjJ4MWRHbHZibFZ1YVhRK01qd3ZkR2xtWmpwU1pYTnZiSFYwYVc5dVZXNXBkRDRLSUNBZ0lDQWdJQ0FnUEdWNGFXWTZRMjlzYjNKVGNHRmpaVDQyTlRVek5Ud3ZaWGhwWmpwRGIyeHZjbE53WVdObFBnb2dJQ0FnSUNBZ0lDQThaWGhwWmpwUWFYaGxiRmhFYVcxbGJuTnBiMjQrTWpBMlBDOWxlR2xtT2xCcGVHVnNXRVJwYldWdWMybHZiajRLSUNBZ0lDQWdJQ0FnUEdWNGFXWTZVR2w0Wld4WlJHbHRaVzV6YVc5dVBqUXlNand2WlhocFpqcFFhWGhsYkZsRWFXMWxibk5wYjI0K0NpQWdJQ0FnSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGdvZ0lDQThMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW84UDNod1lXTnJaWFFnWlc1a1BTSjNJajgrNmtIbVVRQUFBQ0JqU0ZKTkFBQjZKUUFBZ0lNQUFQbi9BQUNBNkFBQVVnZ0FBUlZZQUFBNmx3QUFGMi9YV2grUUFBQitma2xFUVZSNDJ1ejllWnhsMlZVZWlINXI3WFB1RUdOR3psbVZXVlhLR2xSU29Ra29EUWdaSVlNUkF0dy9KdHU0QWJ0YmJUZFlhcmVmNlhZL3YrWTF2QWFERGMrMGJhVG11WnZKdk1jejV0bTB1OXNHcTdFUkRUWWxSakZJS3BWcW5uTE9tT05PNSt5OTNoOTc3M1AyR2U2Tkc1bVJXVmxWZTlYdlZrWkdSdHk0Y2U3NTlscnJXMnQ5aTBRRTBlNG9vKzFyR3o5MytiY2YvL1lYZnY5emVPeUpQOGE1Wk9XUEgxbzYvVkVBdndrQTcvbjRSK05WZW9XTjR5VzRROUZEQkdZR1Vid1dFVGpSNWpZamdpSWFJQklBSmw2VkNKeG9NMHlNSVhhdVJoRkRFY2YzS2dJbjJyN2V4aGdZTVJBUmFJbU9KZ0luMmx5bWtrU1kyT1k1UkRBaU1kT0p3SWsybjhleE9RNFRRNnpYaWZSbkJFNjAvWEljRVFzZTV1SXRpbDRuQWlmYVRPQ0lRRXpKcW9uMU50SGpST0JFMjgrSTJkWnhRQjVBMGVORTRFVGJGemhra1NJUUVMa1BvMFhnUkp2cGJZU2NneEd4ajJnUk9OSG1JQWRBQkNLQzJIcU94RkF0QWlmYXZtR2FyZDhFZjQraDJoMW1TYndFZDJhb1psMFBRTVRlMVVTUEV6MU90Sm1oV200K280MFI0MWpvbU9ORTRFVGJ4eDc3eU1ka2VIbmpWeUFpSklCaTlqbE9oRThFVHJTWkhrZU0rRnlIeWw2MUdLcEY0RVNiWmIxK3o5TFJaTHNJaUtLM2ljQ0pOZzg5RUhvYlVIUTJFVGpSOXJmUmNFaStNNW9zaUNKeUluQ2l6WlhudVArSUkyWWljS0xOOTZZb0pYWU9SMnlUV3BRaWlzQ0p0cjkxT21uQkJyaEowT2gySW5DaTdXZEdDNVdqMC9FdGlzQ0pkakFBbGFJZE1WU0x3SW0yZjQ1RFpRRVVCRHVkRTNYVkluQ2l6V0hXeVJnN3lCYmZxd2ljYVBQa09BQkNWaTFlbEFpY2FQT1k3eHhnWXBnSW5BaWNhQWZ4UEpZY2lHeDBCRTYwT1d3eUdTTWNsbmJUb05IdFJPQkVtMldkVHJjUUloUkluTWVKd0lrMnYxbWNLRkpRekJUZnF3aWNhUFBBUnFSd01ZNGNpQjRuQWlmYUxNdDFMaEl1bHJJV0dZSUluR2l6ekdoTmdLV2tGVmVsb3FKRjRFU2JRUTU0Q2pyR1p4RTQwZVo5VXhRVlVWcFEvSXdZaXNDSk5qdFVFMkoyU2dNU2M1d0luR2h6bVMyQUNvZ0lXalFjdnhZOVRnUk90SDF6SFBpV2FBWkFVWFE5QWlmYVBCNEhaUE1iZ1lCanMxb0VUclE1UFk3YldKQW9GUzlJQkU2MHVjM3YvNHdqQlJFNDBRNk1HekFSak1TcDZRaWNhSE9aRnlLTUVyZ1JPTkZ1MFBQRWRlMFJPTkhtQm93YksyQ0tlVTRFVHJSNXpCZEFtYTNlZ0tPalk3d1dnUk50bHBudDBTYTBXUmNSYUJPSmdRaWNhSFBacFYvK3ZVMHpuRHd0SWtpVThwM1NNVjZMd0ltMm4ybXQ3UnRFN01tQkdLcEY0RVNieHhLVk9QQkV6RVRnUk52WC9NNVBjVFVjc2N0em8wWGdSSnRsVHZtV0JBSld4VnNVYzV3SW5Hanptcko3Y2lKb0luQ2l6ZlhHRUVHUmdyYjdjV0lkSndJbjJqeG1BQ0d5SGlkYUJFNjBlY21CMkdZVGdSUHQ0T1FBRTVFSW9PTklRUVJPdEFPRWFxNnprd0FvamxPZ0VUalI1bnRqbVAwS3c5aXZkZ2RhRWkvQkhlcHhqTEV5dUNCdzVOT2l4NGsyZjZxam1LMjJtdEh4YWtUZ1JKdVBJQkFTOFNGYmREa1JPTkhtTnI5QU4xb0VUclQ1UVNNUk14RTQwVzRvWEl2WElBSW4yZ0c4amUyRUpnSVVNemkyM1VUZ1JEdkltOFBJN1NSb2xJZUt3SWsyUjRqbVJBYkU1enV4T3pvQ0o5cStvUnFUOGNCSlM3R09hQkU0MFdaNkhDTmNkQTVRRk1DTndJazJOem5BekZDc29LaG84SXo0aWNDSk5sZXFZeVRjVkJBN1BTTndvczNuZWdBVkYwdEY0RVNiMTlXNHNFd0FNUkxKZ1R2UTRsakJuZXh3bUt3OEZGSE1jU0p3b3MxRER2Z3BOZ1lCdG5NZ0FpZUdhdEgyRGRYc2VnL3ZiV0xuUVBRNDBlYW5CZ2dpQmlLR0luQ2l4NGsycCtPeHhVOEtnQlF0QWlmYTdCekh0YWhSbE1DTm9WcTArWE1jWmhZUmdXSUdzWXFoV3ZRNDBlYXhiR2Q0UVl3QkVYeTRGa08xQ0p4b3N5emZHOG5naGF1ZmhSdG9NekRSMjBUZ1JKdnJqWEY1alFpZ3RZbmVKZ0luMmp4cGpxTUppdkhwYUJFNDBmWTNOL0VwTUNJd0VrTzFPODBpcTNZSGV4MGlSc0lLWWxtMWFOSGpSSnNuVkNNaWNBelRJbkNpelIrcUdURWlJaEFJVE54V0VJRVQ3VUI1VGxRbGpNQ0pkc0JnalR4dUpJSW5BaWZhQWQwT3dVK0FSdlJFNEVTYkkxQVRFUUVSSTAyVENKb0luR2h6QldvRmZnaFA3VjU1d0VEaWV4V0JFMjNmTjRiS0JZYU9WWXUxbkFpY2FQc0dhaWdYUzBsTWJ5SndvczBmcnRrY0o0NFVST0JFbTl1OGRqUUE1SGtlWFU0RVRyUWJDOXlpUmVCRU8waThCdGh0b05IclJPQkUydzh2NFIvYWpoVkV2eE9CRTIzZjRJeUNEdW1vSFIyQkUyMU9qeU9saDJGbTBwQ0luZ2ljYVBON0hFQ1Q5TmRQcFcrTmx5VUNKOW8rSHNldWFDZUlBTG5XcEhVZXIwb0VUclNEbWpaUjZTWUNKOXIrb1pvVDZ4Q0pFNkFST05IbXRsRFpSaUJRekxHT0U0RVRiVDd3U01nVXhGQXRBaWZhL3ZRQVNNU0dhbHBpcUJhQkUrMEdFaDRDczRxaFdnUk90UDM5VFRBRmFtVndZNmdXZ1JOdExrOURCT1BDdEtnN0VJRVRiWjdvekw5QnhCQkJWUFNNd0lrMmQ3QUdnTmg2bmJqcUl3SW4ycnpZRVlIV2VSVHpqTUNKTm84bGl6M3FuVmk5eSt1cUdkSHhva1RnUkp2SDBoTXJqL2hjaDBCZ0ZUc0hJbkNpeldZRy9FZ0JDTG5PQVNLUXhNNkJDSnhvKytRMnRtc0FzRzAzSWdZVXl6Z1JPTkgyOXpoT1R3MGlBSUVSdHhsRzRFU2J5K3VVbzlJbTlxcEY0RVNiTDFRaklydVBUUVRNTERGVWk4Q0pOcWNaTVRDaWtRZ05lOWZHVDhVckVvRVRiWjhjeC81cHZZeGlsbVEzMjQxWEpnSW4ya0U4angyZGp1eEFCRTYwL1hLY3FndUsxeVFDSjlwODRER0JBS0ZFK0VUZ1JKc3owZkg1RHNlUmdnaWNhUE9TQTBSVXROMVFkRFlST05FT2x1T0lHRHM3SGNtQkNKeG8rNXN4aHJReDBHTDh0b0xvZGlKd29zMFRxb2tJeEFpMDBkSGpST0JFbXpkVVk3WmJwd25SNDBUZ1JKc1RQU0FJeFFiUENKeG9Cd3JWbUlUSTZnNVEzTWdXZ1JQdEFPaHgvMDN5TE9ZNEVUalI1c3B4UkloQXp1TWc1amdST05IbWVtT0lDakhDYUJFNDBlWTBJeUxlNDVpSW5naWNhUE9HYXdJRGcwem5NQ1p1bkk3QWlUWXZjSWhBMEdKQWdLZ2tpUmNsQWlmYUxQT2RBOGFDSnRJQ0VUalI1dk0ySUYrN3NRUkJ6SEVpY0tMTjdYaVlHT044VXVBcFhwSUluR2h6T0o3Y2FFQUVpbFVFVGdST3RIbHlIQkRCR0x1dGdLMm9Xbnl2SW5DaXpUTFY2M0xTVGRlSWJJNkRXQWFOd0ltMnY1MzlsaSs3aDN1ZEI5aHRZME5VOFl6QWlUWWZMVUF1VkJNeDZDSVp3a1RWOVFpY2FQc3pBMFlnWWhtQjA5MlZseVgyM1VUZ1JKc0RPSTVFRXhIQWJpNkl3SW5BaVRaWHhFWkFidUwrendpY2FBZnpPbExvUmlONm5BaWNhQWNJMTRMTUpyNVhFVGpSNW9yVENzOGowZU5FNEVTYnk5czRQYlZ4UGtGdXc3Vll6SW5BaVRaUG9PYnpuS2dkSFlFVGJRNmJUTVlRRVRjMmJRQ0tOWndJbkdoem0yS0ZoRlhNY1NKd29zMWp2WDVQaUd5ZkdoTkJ4ZTdvQ0p4bys1dlJRa1JXNFdhaWM3OVlLbnFjQ0p4bysrYzRnQkZCcm5QQUxabUtGb0VUYllaMU9sMEFBakVHaWhVb1V0RVJPTkhtTTRFQVJOQkdRMktZRm9FVGJUNGpXSFViSm80ZUp3SW4yanlXNjl5dCtFRGNPQjJCRTIxZU0xcVRpSUNySTlNeFhJdkFpYll2ZUl5QnA2U0w2QzFhQkU2MC9aSWNpeE8za1MxNm13aWNhSE85TVVRd3hsaFdUYUszaWNDSk5wZjVFSTJJd05IalJPQkVtK05OVVVyaXd0d0luR2dISlFhMEpvQ0tzV21LS0lyQWlUYWZ4NEdWajQ2cjJpTndvdDFJanFPMWlmdHhJbkNpeld0MkhrZkFUTkpobGNVckVvRVRiVDl2WTRRQlMwbXZkQmRHOXkyY3VCeXZTZ1JPdEJuMm5vOS9sUHFuMXI0V0JDZThiaUxERm9FVGJSNVRxWG9MRVpFMnhqZW94U1FuQWlmYVBNU0EzVlFnbmhpSW91c1JPTkgyTTJPTTNmMUo4ZTJKd0lrMi81dkNER0piQU8yb3hIODZKam9ST05GbUdSSFpwYmx4aFdFRVRyU0RlUnpqVnJVVE1lM2tvMzY4S2hFNDBlYkpjVUJnWmd6MHVIZHB0SGtzWHBVSW5HaHplSnlBUkNPM050ZkVLeE9CRTIxT1MxVUNnWkg0WGtYZ1JKc2pWTE1FQVJVOWE5RWljS0x0WThRc1BtUlR6T0RZY2hPQkUyMCtFeEVRQ0dsWng0bHVKd0luMnI1ZXgzbVpJRlNMYnVjT3NpUmVnanZESHZ2SXh3QUE3L240UjUwZ0ljREVTRGhCd3ByYXZ0Wi9mYlFJbk5lMVBmVGhENnFYbm56MnF6c3FPVy95SEFDdzJPdkI2TWt5cHdtYkxJL05ubmRLUkJESGN1K2M5Mkw5MHRVZjIzbis4b2QzTDF4YkdsemJvcDFMMTdBM0htSjd1QWM2dnZUWjliMnRuMTh3eWMrL2FXdmhSUStnNkhGaWp2TzZ0OG5tN3RudHo3KzR2UFAwUlpxc2IxczBnWkNRd3RWbm5ubmt4YzkvOW9kZXZQVGNQMHVYZW92eGFzVlFMWnF6Zkh2WW0yenVBY2JBYUxzVmgwQVFJOGl6REtQQkVDeDhabTloc05JQjc4WXJGajFPTkFCNk9FbE5yb3UvK3pDYW1XRC9BMFNFQU9oNHRTSndvbm1QTXh5bEtLUnZMUlV0amd0Z3NnVlJUcE5zekNaNm13aWNhTjdNUkN2cmFlemlYTzl4akxGckRaa1lhWnJvWjVhR28zaTFJbkJlOStick1tYVNKVzBzSjdNbENKZ0pFS0hMM1Vta1FpTndvaFVlSjlPdFpBMFJRK0QyZ1ZJVUlvakFpVllGVHA3enRMcWFOdHFES0xiZVJPQkU4L2Jpdi80ZEVpUEZZZ0l1TnJJWkVBd1VwV0FrZ0pFSW5BaWNhTjRXemh3bHYySGFiNXkyZjNINmFoQVFFY1k2WDF0SzZQNTR4U0p3b2dGWWVQRE1mZW5hMGp2STdjWHhORFNCaXVZMEVjRllaNnM4a2pmR0t4YUJFdzNBZUR3bWRucFFaQ3VkSlRrQTI1Z21BSFNXSTlIVWlWZnNsYlhZY25PSEdLVktTRFhQTVE4WWdxM3RHSzFCUmxTOFl0SGpSUE52UnFwY1NPYkFSSzdOeGhnWUFYSmpJRVpnakk3dld3Uk90TUxySktxNm1KMEFBa05FWUl5R2lBYkVRR25FVUMwQ0o1bzMxVTJyUUhLTm5YQmhHa0RRUnRBeEtvNFZST0JFSzREVFNkMktEMEhSSUVBRUE0SWhCVTBKY2tsQWhxSWtiZ1JPTkQvRnlaMEVZSytuNXRnMVdPMEJWOUN4TkxXV2JyeHFyNnhGVm0wZkM0VXhicVc5K1llK0E2cWJnaFZENTdyU0llM2JjQVEyQlRLRXpCZDNidGZybXdiMkNKd0lqbGZxQmlRQTJGcmZQQ1lKRTZVSnpIQU1iWEpvcmFHTmhoRURKa0xDQ21uYVFmZkkwcW03dittckh1bUExNjk4NHRQWFZLOGpLdy9lYlY3NjVkK0ordEszeVY1WFloMnZJRUFJQUs4OGNGZWFEOFpLUFhyUGVlNm01N085VVNxSzNpNkVMMUtKK3RKOGxOMTkvVFBQWXJJOWdCSHJkWEtqb1kyQkVZTXN6NUFiZ3lQblRzbVJVOGVGRXQ3THhwUGY2aXoxeDUyRi9qT2p2ZUZ2OEhKdndFWisvOHMvOUZYcjdtZkxZeC81bU56bXd5QUNKd0xuNE5mMDdJZmVTY09MMTVQQnhmVU9QWExtalVUMFpyMHpYSlVqL2Y4MDJ4MTJkSmFmMW5sKzFJd3k2UEdFc3RFRWttdVlYTU1ZQXhGVDFISzBzVTdFaU1DSVhYSG9WK3FLQ0xRWWtHSndKd1c2U25peEo5MkYzbWZUcGY2d3M3STRsanovbnpYa2llZCs3N08vLzEwLzlMZk43UWJSYXhWSXIxbmczR2J2UXYzVGEybi9IZmVlenJyOFR0SG1VV1BreitSYnU5MXNNRG1WVHlacmVwUkJaeG5wU1E3UnhnRWt5RjhxZVF6QnVLMGU0bmQ4aUxIZ2NYL1hvbUcwS1Q0R0FLME5jamQrd0owRWxDandRa2U2aXd2WGtvWHV5MG0vODhmZHBQTXYwOFhlNDAvKy9wODgrYmF0NVZkVXUrRFZES2lZNDl5Z0hYdkhBMnJ2NVdzTEMrKzYvOHYwN3VqZVBLRy92TGU5KytCNFozQXMyeHVTR1dlUW90SnZDbkRZVGRJV0lnWHFpaEdDc0QrdDFCc1FzVU5zSWdaRUZrUUVnQlZEaklEQjluTmt0YVpGQlBra2h4bE5nTDBoamE5dW5UQ0VFNnFUdmoxWjZINUhiMlhwMm9semQ3K3djVi95WS9seVp6MjVzdmZ2UHZSZi9xWDhsZkJHMGVPOERyekxzWGM4b0FaSGtydDdDLzMzVGJiMzNxK0gyVmVPOWdadnlBY2owbGxPWXFReUV1QnZmRWdKR2lObC9tNEtiMk9wWjJOOERZZGd4Tmp2RDNRSGpIOE9JemFjY3o5QjNQZDV6Mk9NRGVHMExoMktkbUdlZUsrbUZOQlJrcTR1U245bDZZKzdTNzNmVUozT3J3cmp5VWZHUjU2Ni91bW5icXMzZXJWNW4xY2xjRzVuR1BiUWh6K285cnJ5Nk9UaXh2bkphUHlYQnBjMzNqclozanVWanlZa3ByeXhpYWdBaHdlREI0OFB0MExQWWoxUDllczlLUHpYR0pqaWlTdzliU3BmNTRGbEFXazltLzJhRW15NTBmYTVnczlYbjA4Z0JGQ3FvSlo2MGx0ZHV0cnY5LytYYms0LzFYOXg5N01yZVRMQ2Jkb0c5Mm9DVHd6Vld1enNoOTdKK1puRkUwcmp2ZGZYMXo4OHZMcjUvc0dsOWI0WloyVHpraURFOGxWSzV5a0k1TUltNTBsc3cxbDExNENnRXBLRjNvbVpDdkFRQ01XOHAxdjdBUkpBQ015QWlBdm4zTTlqWnNDZ3lJK1lBWGE5YnJCclJSMGdCUVFCQ1VISXRjZE5jb3l2YnRQZ3l1WkpsYWkvdXJpNCtFM3A2c0tMZzVSLzV2ZzZmaW1abUhVQVkwVHQ2Z2ljdXZmdEhsM3VMcjNyZ2JjTjlQZy95cC9lK2ZhOXE1dG5KOXNEb2xyb1JZU2dpOHg1Q3lwakxuSTNkQUdlUUIrdGJwNE1DSityQUtWVWY2WUhvczF6WUVIa0J0L0lmUThwQmRJRUxkcHRPN0RmcDRrS1FzSVAvUkRCdmxheFBCMHpBWWFSNXpsdGJXNmV3T2JtaWV2RVgzUjllZm12cnkwdi9VSzMxL3YzM1pkMmYyZXAyOS9CNjF3VThZNE4xVzRYZFF4QW1TTzlJNmZlL2VZL094b012elhiRzc1L3ZMbmJNMWtHTWMwYkc3VjlBV1d5NzI5ODAwajBmVDVURFpYS2NDMzhHbE5uMllLUXJRai9BcExCL3hsUzFUN244VG1WejUwQUZLR2JaK3EwZHJtU1krMUVMRXZuR1Q5ZHNucXl1TEM0dnJheThzbkZJeXYveDdGMSthVjBxTGNBNUsvSEVPNzE2bkdvZDN5MXMvam8rYmViY2ZiVld1dS91dm5TNWJQWjdvREVHT2MrYkZoRVFzMlZUbFNHWEo3OUtrZ0JGNjdaa0tvS2pDcitxSmhRYXp1OGZNNUVSR0JoR0RMQkVMWC9YazlkTzJZTkJpeUFZWnVWRklCblUveHdaa0p1TEIxT1FpNDBCSVRLb05IL3p2YlhjU0VraUFhRHZXTzdnOTF2VGpldWY4UFZZMGUrKzlpSjVSOWR1NjUvNWJFbi8zam5BL2UvNDNYbGdWNTN3RG4yanZzN3ladnYrZ1laWlg5amNIbmpTMGJYdC90Nk1MWmhUREhuSDl6Y1ZBdlR3cHpFZVo4aWRIUDVoeDE5dHZsSm9WcGpUS0FkQUpkYlVLVm1ReWpIY1NwNGMrQVJrZ0trRnBma3FHcnZCSjMrbWhnTEhnQnN1TWk3UEdYTklBaFJrUk9CRFdBWTJrVmYvbmRrRy84NXp3Ym5sUXlOQnNQdVlHL3ZIZXVML1o5Zk9yRjI5ZlJYdnUwWG4xSHE3Mzd5Ri8vVnhROC8rcld2aTdhZk95SlV1MDFoV1hMOFR6MXlubzR2LzlUZ3dyVXZIVi9mN3VsSjFnaC9xT1plL01uZm1vOEVkUmJ2ZWRvdVo4RisxVUlzU0ROc004SFBFa0V0bERPMTUwTWxyQXZwYWlQYTNleFMwT0VoWGUxL1RxN3pJcHp6SVpyOWQxT3dkWEFobTRpQk51WG54UWlJQ2VsU0h3c25WM2RXRjVaL2VQWFp2Zi94VkxxOGU1ZzVVQXpWWHFIRGdZNHZuVmg3Ky9udkdXN3QvcFhSSDE1ZUUyMGFTYmM5WWJrRVFyR0RzL1JCczhBRkNieE9MYmNwU0FQUHFEblBKRlRlZkRCb0pSQkM0TlpCUzB4Rjk0Qmw5RXFQUjJCQWpIZUhnTEVNbXcvZEdKYTk4MTVIU0VOQlFVUGI4RXhRRUFsQzVFSTJBaE5CaDJBMkJxT3RYWXkzOTVhM3V1bmZPYnA2NUQvYjdhaWZlREJmL1NkbWtsMTdyYkp3cjJuZzBMMUhWNCsvNVEzZk03cTIvWkd0Wnk0Y05WcFBRVlkxQVNHcU1XWUIxUnpXWXNMcXZ2OTJFcnZzMW9kdkRoUEZEL0xnWVhiaEU3a0NKcVFDWmh2bnRYc3dKaTZET2xXMjVYamdrbnNkRlNhRENhU3AvSDRSUzFlN0VOQ2ZJT1RBWVVEdTUwamxkeVhIR2hLcVFOZEdRdzgxWFJwZVBIODlTWDlrdEhiaTYrL3VyMzMvOE1ybXA4NHNIeDFGNEx3S1FyUFRYL0dXYm5MZjhmOWljR0g5YjEzLy9Bc25KTXRCbFVIa2R2RDQ4Q2pBVFVFbmg0RHlRS3VBSjZDczYzUjF2VmJqdjc1T1BSYzNhb1hLcnJFS0RaNkNLdXljOVpvR1FyQytVVW9mVlFGOTRNa0FRQkZEazNZa0E2QVVDc2F0ZUFuT20zRzVDYnR5ZUJqWE9UR1paUFQ4MVF0ZmNiRno3ZC9jZStydW45M2NHZjdmanlUOTE1VDNlVVZ5bkZzSm5MTi81YXUvUEx1Kzg3MmJUNy84TmRubVhpT3AzOC9DVUt3T0pPOTltS21TWDlUem9PREpDdTlUYWNPUk1wK3BmMzFSNVE5em9lQm5oM1IyOFJvREN0cS9GaU5TNUNNb0VudHhyOGxVOGlwdEJOcUVGTFN4ODBBdTEvRmY3eWwxWTR4dDZUR21lTDZDOXZhSEF1elhLVmJaaVdQSG4zbmp5dW4vL05MekwvL1d3eWZPWmErRnZPYzFFNnFkZk84amFYTC9pYit4ODh5Rjc5dDk5dktpenJVN0hSa0hPUnpxb0NtOVR1aHBVQ2x1VnJ4Um1BLzVzQ25JZlFvdnd3d3lHbDY1RTNCTUd4R2d5MEtub0d6SDhTUFY5bVF2UFo0N0FndlA1UE9kWmhIVmVnZFBYWHVnS2E1S1VwTmowNWdCMFRUMWNHSGlzcWN1OEtRaE1ET2RwNWV1WG43ajV2Yld2ejV6K3VTL2Vta3grKy9PYnFkUDQxVmVRRTFlQTk2Rzd2ckxYL21JM2g1KzM3VlBQL1V0K2ZhZ0VTNkZPVXQ0V3MveU9tVkloa1pJUWdlUVBXLzFkRUUrNFc5NkNXcENCVWtSakJnd210MEh4ZThsdmc1VFplSVVFNHdBeGdBZ2RxMDVqaWJYMVp5T3FRUVRpQnk0dFBXdXh0V0lBR2lwNWxMdzNRZW81a0ZTRkZNTnRBQXlIaTQrOC9MemYzNXI4Y2c3OTQ0ZC94OVBEcEtmWFVzV3JyOWF3emQrTllObThkeUo5T1FIdi9pOWd4ZXVmdkxxSHo3NUxaT3R2ZUptYmNzeERvekk0TC9pNzNNOFZkaTgyWW9iLzN6TU5ZTEMvUXkyRHlZT0hsUjRwL3BCUU81R0w5cG9IQkI4b2w4UUc2NkU2ajFOd2trQlV2OTE5cVlnc0dLUTNjZFR2QWJ2OFppNXZETEI5MVZ5UTFRWnlFbWVJZGNHVjNjMjN2Q0ZsNTc5TzU5TE52L3R5NHVUdC83VTcvNEtSK0RjUHREUXlvTjNIMXY4NGpmODA5M0wxMzkxNittWGo0czJ4VTFUaEN0VDd2THc4OVUzdm5xcVMyMW14dCtBMDNJT3FYY0t6UEpBNGVzc2JrSVVOM0h3RGNIUER3QTJDenhNdFd0UlpmV0lBbkN5QXlaWGdjREJrZUZEM2dMQXJuanF2Ym9QMjRpcVhSWkZTNUF4Ym51MkhYVVlqY2VkU3k5ZmVOdG4xbC84NUJkLzNWZjh6VS90UGYrcUUxaDhOZVk0eWVrLys4NnZuVXdtUDcveHVlZVdUYVliSVZrak5KdFNINm5leUtqa0ROSXlhQll5WUdGT1VmOVpURnhoMmFvL3B4cVd3UVBYbCtmRGZ5Y0oyR1F1dWdSTW96OU9tamtXb2VpQXJnek5vYVNTSlNBa0FDQngydFYraVpWdHh5bVpqZW9HaGVBNW1jQ0dLeDdHZ3REVnE0THJVeFJwdFdENzZ2cmFlREwrMGRXN1R2eTVDNVB4Vjk0MTd1NUY0QnkrcHlFQS9TUHZldWpQNzF5NCt2SFIxZTArV2s3ZnRodC9GZ0ZRRDY5ODZESlA1QjJ5Ylkxa3ZmN0szWFA2L0tBQ25oWjZ1V2piQ1Y5VEFTQmpjd3pmRGlQVkFibTIzOWZtTzdaaDFQYkptYkp0S1B5NXFQWEpnUUVxbTBmcnYxVFpYaVJGNzVzMlpiM0hvRHE0NTRrRElvSm93WEJqQi9sZzlLZytmZkszcjk1MTRudmZkcUg3ditFMnpmKzhhbktjbTNtZG5iV2wwMnZ2ZS9QSGg3dDdQekc4dXRWdnUrSENBaVhOK3E4V2R2a2JrbHZXYTA0TDkzd09FVEp1MDhMRDBLdUZvQXRESFlRNVJpMVVDejJwRDVlWXl2QXV6R25hWGo4RjBXRVlLcEw3V1lwVmhUUXBRakZZSURBcE1ET1UrOVBtWC9iN09NaXJpakN2NVRvVWczdU9OREFCMVQwWlRYRDl4UXVQdlBUTWMvL2k5eGMydnYzVkVBbTlHb0NUcEV2OWUzdGZkUGIvdDNQeDJsL085MGJkL1hJWG1wSEJ6eE8yTlpMZWtHSVdhU1BJR2hYK09qaEQ4RlFJaCtERTkrQWhuM3hURFVUaGM0YzVFZHNidkNodzFqeHBBVEFIaFBKNXVBTE95cUhqL3g1OFhpa0dnd3V3b0lXRUtiNTNTaWRHbFVTQjA0NHptR1E1ZGk1djhFdVhML3pNSHk1dGZjZTF6cVI3bTluWjF4UndVdTZtNTdzUG5mNjUzWmV1dmxkeVhVMUdhMTRrUE5UREU3QU5CTlBlMU1hTlBnV2dGV0VObXY0SWIrakd6d1pOcGJlclRGaVFXNGlVREZmTGE2MTRIcXA2MXdwRkgvekh6bU8xVWZaVUNVa3JMZHZsMUdrdEpDMDlWM2tnTkVGalhDT3FhMGgxQmRXOTlTMSs1cVhuZitwenkzdS9scjM3WE9kT0JjK2Q3QkxUZEtuL1FPZSs0eDhmWHQ5K2I5Ry92MDhTNVArVWZkaTBWOVNtelBQNFVZUzJVSzhvanRieXI4SWpTZUNCdk9vTkNJYXQwazZsV2JSRlZjZDdRcVg4cURYYlk5VTFuekxFalRXWUVsQW82emRoNzFwQld4UERrRzZNU0FCbHVCYldxNGdNRWtvdzNOeWxLMCsrOEdYL3daaGY2eDFOdnZMZDY2dlpuWFp6M3BLV20wTTRDWktqNzMzVFYwN3k3QmVHbHphT290NzcxWnBIVkdNbm1YRy8rbnN2WktQYXJrT2RSWkthTUVmNHBzOEtCMFBxT2l3VWhpQ29kQ3FnT2dSbmFxL05WK2kxMFpYV25GRG9vM3pPSURrM3BiQ0hmMHBqZEVQc3czOXRxSlRqUDg2MUxyb0Z0RGFGUkc5UjdQVC83c1lUTXAxRGk0RXh1aHhYY0NSQktMYm9yN1BOblJnR2d2N3FFdGJ1UC91YnBzTWYrRE5YanUwN2FYbzcyM0Q0RGdRTkgzdmZtNzg4MC9rdkRDOXRISjFhTFo4R21oc3dhYmt4NVFZTDJ2VlduVWJ1VTJmU3FEenRLNkNyaEptbzFIQmFHVUpwWGlNSnZMUm4vc0tha1EyMVZMUFE2VWtCVUNVVUMrczlaWWpLamR5d2plbWNGdnI2YTFUMDE0bkJST2N3eG1DOHRZZk5wMTkrSHczelgvL1UwYTAwa2dNelBPRHEyOS93OEhCOSsvc0hGOWVQRmtsckl6ZW9QaHFnOFlXKzJ0ZUgzcVpPSmt4amcvYWp0bHZ6SkdybUwvVmNheFoxSERKdElHcmVlT0dvUTFEa1ZNelZ2SzdDMkpVNUYwOWpGS2w2OHpNM2N4K3FrQk11UHdvN0lGQWxLVGk4cnJSZmphMWszYnh1OXU3R0Z0YWZldkc5Tzd1Ny8rYnhNOWtaQUJTQlU3UGo3My9MZWVtb254Z1BSbitxeVQ1UnNST3pOU052SzdMUS9NMDJWWkJSbzkzbVJqeFAzUk8wZ2FQUUhuRDVDcy9qTlZzT2xEWVdya2orWFVlQkJaRHpHbFJ0SWFxMzU5UnpLQUpjUndJWCtVdDVNRkFKRUM2N0NNSTJuZW9CVUwrMkxrd3NIblpMZ3hXYkY0eDJCcmoyekVzZnVIVGx5cjk0Y25uNGhtbmd1WjFrd2FIbE9EZjdvdS82NWk4N083eTYrZFBiTDE3NUtqR0d5amVHYmlna0MxdjUwUWpGbXFGYWRYaE5wb0NnUGNjSk83QjlxQmJPck94blJmSFM1eDIxU3IwWVUzbnU4dk9sV2swOVIyckxkOHBjelJUaGtjQ1BSWmZxb0ZxYllzeGFSRERKODBLVHdSaUJOam1NV0xGRFkwd2xQekpTZnI4eHhvMG9hT1N1M2Nibk4vN3IvZWlDNzFidzNkeGU3OEdEVHpHajArM2kxTm03Zi92ZTVlUC84UU83L1dlbWNFQzNKZGU1SXp6T3ZSLys2dFA1ZVBLeDNZdlh2Z29pdEc4OVpvNGJzdklsTFY2SmF0VDFOTkRVNnhQMXIvR2dxVTl3Vmx0Mm1vOVp2VzFoY1JTMWRocnZWWHd6cUgvOTdEeEJXTnVwaDIyVjEraHFQNVhCdmJZT0RBbERXUzY4UjNVemRuaHRNSlhlNXltOWJKVVFGR1d1RTRKVEc0UHhhSXlMTDd6NHJ1ZUgxLzdKNDZ1RGM2L3JVTzNzaHg1Tjh2SDQvN24xN01VL2F6Sk5iWFdaUmk1ems3UXkzZkQzVlJQNGVqMm5FU0xSZk4zVVR0QjVMbEppV2gwcTdIeWdmU1pHS3dCeFFQVDVqQWRrR0lwWlVxRDBxZ3lHWWdyeXJOcFZEWE1sQ3NKQTVobzdPajJYOUFOenBXZXliTjE0UE1ibDV5Kzg5OFhCK3MvODdzbmRVNi9YT2c3SmF1K2J0eDUvOGV2enZSRlZZL1lwOGRlTjBXWlRZcmpiVWJLaHVjaUZJandSSEpqUnE0Z1BCcnJSRFlBNTcrRkRKZS9WS2lLSXJqUGFCTVV3QWhxRlZJWUNrdzRZUUNucU5nVm9KT2hDY0JSNnBUV3AxcS9uU3dUMTlZMHc1U0dWcUFTRHZUMWNlK0hDQjlCVlAvdnJaK1hiMy8vUzh2VnBhY090Q3R0ZVVZOXora05mY3QvZ3l1YkhodGUzVitza1FHdWNnNXQyTmppTUp3bnJPdE5ZT1AvZlBIbE92YVp6VVBkSlpDVnZqWlJhYldHbzF1b1JPYnplVFc4WmVnMFBHRCtDNEw5ZWNURHpFN0JzWWRRUWVySXE4VUd0M2twcVkrVitCTnpuVXBNOGc0aGdzTE9MNjg5ZCtLQWVUSDcyMTgvdUhIdmRoR3JIM25GL0p6Zm1CM2FldTNTOE1SWXdoL05veXh1bVlxUHRpMXBZTndMMnBZekQ0Ykl3Vk9ONlBTT29sMHpyWld1anVrczl0YUFPUXpUMTYvMnBYYzdLaEpYNEp1MGVobHVnb0lVSDFIemV3TVBVNVhveDVWcUZ3S29YclMzNFZKbVBCYXhhbFdPckhqb0NWNHoxK1k0WUdHMHdXTi9HeGdzWHYyNnlPL3l3MzZYYVJscmRDcmJ0bFFJT3FkT3JYN2Q3NGRxM1FjdDAwQkROQlpKYjRYM21xYmZzUzBVSERGdDRFb2VKZFNVdkNTamlrQVNvdjg1aUc3VUpoVDJDWFR1MXZyUjVhbEROZ3diTmJ2T0FKS2pYcklocjlhT2dSNjlzSWtXem05clQwM084cVY1YlcydGRpSUdzdjN5Wnh1czczL3Q5Zi90N3YyVWFlRjR6SHVldTcveUtyeGp2RG45Uzc0NjRUZ0pVdk1GaGcrUTJXa1hsazZqbVVXUXE4OVE4cWR1OFhpMkVxbzFZSHlRcURSbThJcnhEdlRtVUtuTTZWU2F2WHV1aUp1aUI1Z2k2ZThkOVRXbHE3aGFRQkFWOUxnYTUxblp0b3dndVAvM0M4bWhqNXlkLzZQditIMTl6cThvbHJ6aHdUbjdabXhmeTdlRS9IRnk0ZmxTTUZETWhiVjZtUVFmZlJFSHl0cnJUV3RlMlZKWS9TZEhhSHliQjRlbnNlOG5DN1FWTmFoeU5XWjN5aGk1RkVlY3BxUHBDWTFWODBUMC9VeXZ0WEJRNmkzOHJmMVlCNEZxaHRqbHUwS1Q2cTZ4YU1MOFQ1anFGUEpYcm5kTWE2ODlmV05tN3N2bkR0NHRwdTYzQSthbmYvUlh1UG5UNlI3YWZ1ZmhXTXRJRVRKQ29pa3hQdVBjN1BTc1liRXN3V3VocDJxZStNdzBnWVg5WFczdFFHTExWUXlOL3FsY2FTR3VoR3RkdXZIbTluZitlUWxXMFJZdkJVOVBoY0p3SE5aVnE4NlUzZ2hQcWNNeWIvMFhhV25Pa2xpT1Z4Y3hxKzFGZGY3ditlMWlTd0JTY2ZYR29tTExPazJ1TnlYaUNxeTljZVB1VjY5ZCsvbmZQWjhkdXRkZTVyY0Q1L2gvL2thL2NlZUh5ZjZKM1J6ZE1lczJCZzFjc0xHdTlnV2xmZnFJaUIxVVJSSlJha2JCMnMrMm5URHEzZCtSeThwUm5TR2t4MTlxZnFPMXdxRXBvdFEzMFVVQWdTQURzdHVzb1JhZDEyWTVqUkJlVXVqMGM3TWZaY0l6MWx5OS9ZT2ZTK25mZTZuem50Z0ZuNmI1VC9mSHU0TWQyWDdpNjhGcVU0YTd2OUF4YjkrZmhKeXBkQ2JVYnNsNkhrcUMzN1dZajE0b0FZM2pUdHd3QnRvSFZRNExCRllLZ2tkZTBUSmxXdzdkWkhkUmxHRmwwVXB1eXZjZUhjYm5SR0c3dDByVkxsMy9nNy8vQUQvK0ZOdkFjRnN0MnU0RERpMTkwN2kvc1BIZjVMY2dONkxVR21sYWFOaGhibmlOSEMwTzFjSUtTWFdObTZJSjR5dlRuVkRiS2xQdEYyN3FUclpnSHQ5UFMxS0pURjR4VlY0YlgybGhIUW0wOG9sazNLaWhwbWpWNlVFcndsZ0N5VTZRV1BQYVI1em0ycjZ3dnJsKzYrdjEvL3dmKzd2Rlh0Y2RaT0hQMCtIaDc3MjlubTN2RTAyYU1VUlBsbzNZbXBpRnlzVStZUWp3Zk5TZkJZNzlhVWowOEt3dDgxYllYNWtEWk12aXZQa05UelFkYXhnS214Rit0Q2psU3l0UE9vdERiOGpGeFBXS2UwdWFXWFVBaHFlRTl6YlRucE5vb3JnbTJJVFQ3RVVNVjBPQ25Tdm11Q0x3eWFOQW82bllCYVdPS0lidkplSXlyTDF4NGFHZHIrMlAveDhuci9Lb0V6dWV2dnBndVBmckEzeHRjM1h5UVpQN2crNVZpeitidEZwLzJkYUhIMkk5eW5uWXAyZzZGdG5wT3BSWlRUN3BuVExRV056OWs2dXR2emlweGhaYTJod0VDUVkvd2R3cnlHbXJ1OWFtK05KcGFNSzE0bkVBbHg3anRka2JDSGFmVmtHMjBPOEQ2UzVlK1B0bkozdnVxQk01N3YvbUQ5dyt1YmZ3NU04ckt5eUozZHBKVDhUeDA4L000OVUxc1JnNjJRYUhTTFkxbTMxaTRacVN4YVNHb2xjeno4OEkxSTh6S2VwM2F6NTRtbzBXb2htUjFFTlM5Wi9YM1FlTmpWUEl2bExVY1Z3VDFkSDBGUEk3Q3pyWEcxdFhyQzN2cjJ6LzZ1NnRicDE5VndEbjJqdnM3NnVqU1B4aGQyVnBndklxcm1UZnN2Wm9maC9vRDFiQmtmKzliYi84dkM2QlVDVTNiYm14ZkN3bC9kcXNPbTh0M0tsNUpxZ1ZkSDFMeGpBNkZXUjZ0ek4xcStjNFV4YUg2ODdsZWlhSUZ4d1NoVzY1elY1ZXkrYzdsQ3hmZXViZTk4MWZQZnVpZGZKZ2t3UzBGVHZjTko5OCt1THorMWNqZDR0Z2FsOXhJZFJvc1RFc1AyZ0VGMWNQZXR2MXZVRi94cm8xbnR6Qk1yVGZubE1aT0wwclJ5cUNoS2lWVlliaW9QWTlwKzRVSzNXWnAxa1E0SUN2cW9XYjVzNmdsSVhmdld3czR3bVhEeGVmOHRnTm5xdFpaRURKM3BnWmdUNElRWnF1eFZqcXBIWWhLOExpaE9GMU9qNDZISTNyeDBvWHYrNlhIZnZYOXJ3cVA4L1RDTU5HUS8ycDBkWk5wWmdjbTdvaU9BSnBDRk13YlZEYW1SR3MwYkhoRE5tbzVJSlNyUXFzajFXMkY0QVpnV3NNN2Nob0VzMTl6Y1pNYWFkRzVMdDhWUDZVNkszU3RGNEZOc0RDNDBUa2RFa0FVNkdYTjY4cURod2RQOFo2SndMakNhS1p6N0s1djhhVUxGMyt3VGVUd1JqM1BMUVBPVi82RmIzaDRlSFhyNjBnSDFmZ1p6V2UzcklueklFa0VicXl6dnpsYVhRVkZlQU1YVk9xTUlpWlZ4QzNtQytWSzhiOW04MmlyN2dFZFhndFRPVkxBUVhjQU4wTEMxbENzb2dqYWxERnVEd0ZyaDVzRFR6R2E3VGR2R3cwaVFwWm51SExwOHJzLzM5bjY2L1dRN1JYMU9HMkl6WWFqN3h4ZDNsaWdHaVY4SnpkdTFnZXA1bG5iMFJiNk5Ga2hxZWc4dDJrYTFFZXF3eHZ5UmxqSUlva1cwL3FhNmw2SHVCbE9oZnAwYytuUHRURG5Yc0NqV3AraTFqR1FzS0E3dGQ2RnNnQmFmNTlLaXRvVTRNbWQxTlJrTUtLTEZ5LzlWLy9MNy8zYWlUczJWTHYzbTk3YkgyL3ZmWmZrMmhiSmpMVG1IT0dKVi9PK3R5dzVuK1g2Mi9LWmNydFljekxSVDEwMm1DNVFZMlZJdlY5TlpIcm9WUWRYWFRHbmt1ZlUybkFhYnpBUkZQSFVNZTZ5SjAxYUR3SUszTERVaEI0ckZIc1lvaFp6UHU1YW1ESmNBNkdsN2xOWDlHd3ljb1ducVIxbUl0bytqSWJ6TlhaTnZXZ1llTDBDRzdKZHYzVGw1TWIyMW5jZFJqdk9MUUdPbkY3K25zR0wxNVpueFQzN3FWL2UyWFMxVEQxOVorWUF0YnkrV2RPNFFXOGNlb09hTUdGbGRnWlR0Z2pVaEF0TFlxQjZzN2I5Ymw2a01IemhYbzJ6bmtDR2gwa0JzRnJSczYwUHJ1MzYra05MZ2p3S1RxbkhleHN4WW91bGJqbndaRFRHMVV0WHZ2dUgvNXYvN3VROFVkTnRCYzU3UHY1UkdsL2YvalA1N3VpbUZUWmZheGFPR2RkUDlubnptTW9oNCs1eUx4OUZOZUcvOXZ3SmpmbWdKcGxSVmVpc2t5ajFEZ2ZVbVRPUjJxUXVOVlErcHdsMUVNMmVSUXByZ2UwYjhVd0IrbEMyeXN2M2JsNjVkbXA3YS91NzJuS2RnNERuMElGejhjbm4zajI0dlBsZW5oSUN2TzdCUXdmM3RLMzB1OVIwMCtxaFgzRERoamxJbUd1RmpLWk1XVXhGTGVGUytEa2pwZ3pUNm1LR3JGcTI1VFhaVkIvVzFjRTVOY2NKcmxvWnVuazZHalhOZ29DcU5ocjVhSUxSNXM2My9lKy8rYXMzVlJTOWFlRFVVWm9QeHQ4NnZyekIxUmk4eHB6Vmg1a3FJN1ZOeHZFUXlMSm1FaFU4RGtvOXQrVWpiZmxQdlRldHZQbWswQ0lJUTZsUVIzbGUvZW93dEttSWZnU0Yxc3JQQ0VGVUc4MzJESnl2d3RmM29SSVJFc1hOVjBYVlBhQUNGSHRJOXpzMDZtUFUxZlVwcFFCSTZHM0NmVVZBT2ZUbVA5WisvTUJvOTNkZHRPTm9ZM0QxNnJXSGRuWjJ2L1hYbnY2MHVpTnluUFBmOXY1MHRMNzlZUm5uTjNrcXQ4VGdOMEFNekFPOHcvQ0g4NzYrbXhKeXIzbU4wRHhCRWFyTjFIV2E1OUZJYUF1aFROSFFXWUtNNjFvSkxlK1RtS0NHYzFQVHUwMHF1OWx3aW1LNHJUeThhdFMxOHpwWm5tRTBITkxMMXk3OXpjNURwMC9kRWNBWmQra2JSaTllVzZZYnVEOE9rMVY3dlVXSC9pYXV0TjNYaER6cVlWUmRkMjJtUjNOdFBPVnpsUjZvekRmS2tDM2MyRmFvN3pCTjMxSTNKM2pxWHFiMHpwWk5hOUxUcUl4YW0ySkUzT0RLNVN2M2JPZWp2MWhuMkh4QmRMOTg1ekNCbzdMTnZXL0lOZ2QwUjl5M2g4MXR2OEtrUXZncjFhMmd4TEUvT2RBS2pNcXFSalJvNlhvNUlUemRDd1lyQ0JYS2tlem1XdmM2MmJIZmEyd3Rua3AxMnJUNXRwZDVqNThnOVIwR1BxelRXWTZ0alkyLzltUGYrNE0zVk5jNU5PQWNmZHY1MVh3OCtYYko4bllSdkNtRnJicE9XbXZ1ZzNZS2RXWVlWMjlEbURLNzNMb3lwS0JPMGRENnFzN1RTTEg1ckt6VlZNT2FlVTcyU200VGVJZHFialNkZ2k1YWRvS2ZEeXE5VVNnWU1sVVR3ZFM3SHRndXpaMVNKL0lMZHhVeGxMS0xkZTNKcmhzdE41N2RxdVprMU1ycWhYQW9mMjU3TWRxSUFHSkFJaUJYdTRGb2tCaVFNWUJ4REp0b0dKTkRUTzdHcm5Ob25lSDYxV3YzbWZXOSszRURjN1EzTElGYmQyWEw3MzNvLzNyOTk1NUt5QmM4RDBCQjF4VnFYL2tUSHBVV0hIOGorN29CMnBMZVNuRlRwaWJFTi9xQ0NKZzVqbEQwdktFNlpsQzg1bHJPMGpqVjdWWjJ0OExRQkFSQjgrZFVDOHRTcmQrUWFxeU9WOFFRUnJtUm9FR3p0OVB6MGxia2FvMGdRaW11d0E5SitmNUpjS1BadzB4anRMZEhGN2V1Ly9mOWg3L282NGFYTmlhMzNlTTg5T0VQcW13MCtZcDhaK2lxeFBNelhuZHFDMDVZcWRadVg0dnRPMVB0N1MyQnh5bHYwUG5rbVE3L3hiZXZLakV0M1FGRkhtU2swc1dOQnQxYlBRaDhqbE90elhDNTFicTRTVTFGbTdwMXpIemE5UXltUDlzUElLbUFwbExQQ2JvMWlrSXBVQ21RYWlPNGZPM0tCMzc5OHVlKzVLQmU1MUNBTTdod1BUVjc0eTh4V1FZQktpdkJEMG9kM3dscGlSR3BNVTFOR2FlMk43K3RNbjhvSGtjQ2hjNFpLd0ZOUzMvZHRMbVk4UE9LVlB2aHRjOThUTnZuNjJGZGMwaU4ybHpsVk9aUjVoQTlDV3RaRlZFUER5eURDbFh0d1FNQW85MEJYOXpkK0w3dTBlWHVmbEhWb1FOSDdqbnlWYU9yV3d3ampjcnZ2Sk9IYlFDYTZxR205TGMxUURlTklLaTV1WWJlZ0tOYnd4eG0xazBiaGlaaG5ZYW9YUHJVZG1QTTdXMkRmSzlZaUZ2clpmTTlhUTNWMERuOHZ4WU5Jb1pTcWtVTDJtNmlyc3ZlRnJNMlFXSFRMNlh5QXUxMWpielc3dWlpQVpZcll3YnpoZTlVUFRScWF4SEwxU20xNlZIM3NkWTVqRGJZdUh6dDdZK3Z2L1JHQU9xV2VwdzZFa25Mbjg0Mjl3aXZFZjJhOE5TZU5pWmNFVit2emRUZmF1VlJlNU54UTR5OTdiU3U1NUgxQ1ZCQ25hMXFObHEyalpGTExTd3l4alhLVXVtMVd6MHd5bFh1MVJhaUd4dm9hSkFza05xNHVxT3JCYTJlZUp4UHNMbTlmVktQSnU4RzBMOXRvZHBESC82Z1FxN2ZwNGZqUWpuenRWNUhxYmYrdDRWNjRXTVdVMzdRYTFVUitaQ3EyTG9KaHNiQ3ZDWWMyNTUrQzFabGQwM1I4OVd5czBhYWRTUXU5b1BTZ2E4bFpMNlFiSG91V3RMVDRYVVA4MVNFZ0hLMUhHMnNkeHhsWS9ycytvdmZ6WWs2T20rdWM5UEEwZU1zMVlQczdTYkw5NlhGRGhxeTNUVFRSaTFqeG5QY3RXRUlZbHA2dU1vZUtOTUl4ZHJhaVE1MmhzcnNtenNRL2FoVTVnODhSQ21OMlpzR1FHdnYyRlRGMHVDbU42YVVnS3BJKzFLVnBEQk9obXFlOTcvVnc0ZzREakc4TnFpUkFyWUIxZ09sU0JZci9XMzJnTGk0Y2UyQlMvbk9tK2RsbW04YU9PWkUveHZINjlzTTA1enZEeVZjYnlaa21YYXZ6d1d1T21odTBLTlVhZzlUdGcyME1hZXlUNW1wTmRtdU5VTFdWM2hNWTZUSytvbXAzSmoxUWJNMjBCUzlYcEFtU0thOGg1NTZEdytYc0FmTzVqbmNxaHRSZk14dVRYenQ2K3I5YU1aWUlVc1NEUklOaHEzWGVGMkdZaFlIWVNlQnZTbkoxWHZnWm5kZzdNeU9HQTJTSENRYW8vSGV3dlhoMWpzQmRPWWhDRzRXT0NRVC9hV1RqWjA0TjFCTHFHZUJ1UTBrWWJkeTg0YXZpakcyc1haRmZhYTJudkFnQjFiZHU0WVVkcUZ2SGRLOVVzN3loTm9DZnZLMEpNMm9kYkZXcXhBTEhleUliUnN0cUI4QWxieEhuS2lJOGMyczl2Y2VaeGw5N3ZxTDM4aWRaUG1XZTV6ejMvYitKQjlOdmpiYkdkNkcwb1RNdGJIZ2pzaUJnbXA0V3gwbnBPdU5rWUF4cks0RktaNUw5cjl4bXQ3Z0FOZDF5dDdSYVp1MjYvbE42KzlmaEVRQnFkQzI5S3BsK0M2Yzk1bUhIcEFnbjZuUTA2aXVSYXkyNlFTcjdsM1lkbVY3NC83bmg5Y2ZtZ2NYTndXYzRhV054SXp6QnlYWEI0eFZENU5oMnVkbkhGSmJnaHdnYzYyTWhFL3BwMm9EMGJTUXZoRzNvNlgxeEgrTHFiVUY3UmNtTitvK2JZUnZqWEt2RXdhQkJ5cGFqTm8wNHc3UXNSMkd4OU12ZmZOUWtScnAwR1RjM09zTWNndGpySWZjSFEyV05rWmJYMW9QMXc0ZE9LTnJXOTFzYzQ4YUw3Nlc2NFM5WFBQbTZFVXpZYTAxL2NESlVSdDRpR2JtTmZXY3BuRzZ6MWlZVzRSTnRSNnNxazcwbkFRQlRXSFRXa0sxMWwyaU5lTEFHR25rTjhaTTZXRnpUWkd0T1ZIOTUxT3dZNjNVV3ArYWc5YkhIdXAwOUxTZlUvRXF3ZGg1ZWEzUmp2b1oxOW4vL2lLQ1BNL3BjN3NYdjMzTVp1bFdBb2NXSDczL0c4ZnIyd3F2Tmd2bU5FeHRudDZmckcwZ0N1ZmM1OGx4MnNRRTUzRjZSVzFJNXZOMDlTSnpXL2htMnFZMFc4WU5RclZRY1dzMDZpRVpZWDk5TlhaMXBuazlkSFZNclUxRGVzcWhXeE1vckh1ZE1CZXJkbGRVVjZqNDkvYnE5dGJibmt5MjNuUXJnYU1rMDQ5bVc0TlhuNlpBa0lDMjdYOEpRUlJPZUI2MDNoS0dTdlZaL3pidldwR0lnclFxYUI0a3Y2cTJNYlcxNDlTOFZ1SGxUZlgxQjNtT050TEtlaDJRdUt5anZob01VSFdMUWZtOFVzbjUybFJ2SUUwZ05mSTVMMFlpZ2RkeG9Cb09Ccnlwc3EvZlQzL3Rwb0F6MmRoWjBxUEozRmZydHF0MUVzM01iU3BqQTFQQ3NEYTlORHBnNXpmVlJnRDJ1MFlWVDBVSHU2NXQyNkhEaHN6cUZ1bVN1dGF1SUdnQ3NZdndBUEdIeURSdjJrcmt6QmlwT0lpTWNmR3NsVGtjK3lqOFV4anpsKzdJUlJmMUtLRVM4RmxxMmxIV0pzdHg2ZEtsZDJ6OHliUHFsZ0FuWGU0blpwemYxM1p4YnFTT003VldnK2t0SlhPZGRHMDMrUXhacDhhcFBFTnhzMEVYQnpkOXZUdGF4R3BJVHd2ZmltV3hiZlVTbnlOT2FmUnNGZWdvZXJKYWFGdTBDMnFYakJhWDA1ek1yUjNOMnUyaWFlckNWZWx3WUxhM1ptcGY3VkcrVmFhUnRKU1NJYUhxVGR0RFNzSkViTzJHS3ZtUXEvSDRnVGRqYXp2RDhmQWR2ek40N3NGYkFweitxYldVRXY2eTEwb0I1eUNobU94VEk2a29jNkpzS3F6cnFKVXg5endNVXZ2cm1OYlpVQmZ3bU9VbHF3QTNCVXRXRWxjbGtkRGFSaVFTYUxCTkthSWVFdEZmdnJicE5EcW16UFRVdGRoczQ3UjdObE9HY3RldVhUdTJmWGxqOVpZQVI3UWhQUnkvNWdxZmMwdk8wbXk2dVpRK0ttbG51eTR3ekNla2NmT2JLVEpORGZadXhyaUF2em5DT3RLc1g2dE40OHk0a2VtS2lLRDdPaitRVnVZWTVaTGJVQnp3bGh4d1FUR3pnWk5RdFVqYXh4UENqUklGZUlKd1Rwc2M0OEdRMUVyM3EyY0Z5amNNbkxVLzllWjc5VGluL1crd080ZEptN2VyOG1abmFOcG8ySHE3VEQxc2FxdDY3MWQ3YWQzY1JvR3dCdHFiVE50ZWh3N3FMN00wcTZseTg5UmxtbW8zcWV4L1hhZTlIWFZQVWJKZzAxdVZ5aWhOOXZYVW9Vb3BncHpNaTdWZnUzYjlnVnZpY1pKalM5K21oNU5XWVk2Mk9zNWNKOG1VLytiQnhFSCtvVzJOUnozSG1TVjJNYTJJTjYzZVZGZmdETmtzbnFLWVdhZUcydGEyTnlTVEJGTzdtRnRyWlE0czJwUk5xLzc1dVpaYmFtMkNKYnlNYWF0YjZqTXhFb1IyclhuV2pBUFdWQ1pTUFdocWRUSEk5RmFicWU5L1diZ05Jc0RpODlvWWpNZmpOeXllTzVFY09uRHluV0hQakxNN3VsYURPdHR5dTEvQ2xIbVJ4cHNRYkFwb1BTZnF3b29IRENORkRwREQrWmI3b1B2YlA2ZGY1RlNFaEdFUnNqS3kzTnpnWm9vaE1sMGRjdzRPUnptazkybWFia0hkRTRhYWEzVlFiUTUzMzlOWlhld2RLbkRlOC9HUGtobm41MDJlNDA0MmVjVitybFJxQnBVYmEwWXVHNnJUMUgrUmFYV1QvU2pkTnJtbmcxNDNMNEpCbGIvYmlWT2czTVJXbFpxYTBZRHBQcTM5Sk9zaEtublZRVG5OMDRVYUVSTCsxc2F5bjV1YkczVDkrWXNMaHdhY3h6N3lNV3gvNFdVbFlqNG81ZzVxdG16aHMyOThqSWNPOWVzS3FuZHFBWFQyZFRUNzdNdXBoR1FJcDFkbnQrblVLZVNLbDZ6dEttMnJiMm1qSzkzUHByS0xaM3FJVkNsaVNxMm1zaitNR3prWGhmUnlOWTVEcFZvS3ArUWo0ZGVWOHpuK1AwV0V5V2dDeXZUU29YcWM0WlVOTXVPY3ZQYllqWnpHKzk1b016VEZXbXMrallXaTdSSTZzczlOVzlmODJrL0h1ZDdOYkdwSy9VeXpkNXJPQktDN0k3ajJlbWF4THRXTzVqbEFVK3pmTEd0UmpLYW9ZYWdQVjVHYWxaSityNFo3MDNJWktwaTVjZ3UzS2NUUlJVSm0wTzFsQmNBRWNHVzd0aHRrOC9OcHhzQXByb05CWUhGZmI4cGFEWW4zM25EZkozYTNEblFSb25vUWl0SEl4cE9sYWVmdkRlYzRlcHg1MGFvN2hFYStjYW1wYWhoUlgvQTdIN0ZSWE5EYUtYOVl0WXhHUFNha2Z2YzVnQnAwY3pDVldhL0wrQldFa0taQ3puNjd1Y0k4b2pXbkVKbjZSR0ZYZ0xTUUt1RnJyaXlaQ25Na3RKTXdVM1BPTUFjTW5pRFhHbVNFU0tackVOd3djTXdrZjAzdHY2bnplTlBvM21xK0l1MXJDZmZ0a2pqWXFzU3dhOEJ1dURQbG5Na0JDNmFWRzRpYVd4VDhMTDdQV1lxT2hwbUNCVlZpSUp3dnFxT3VzZTI2ZGtDRjNneU5JSzc2ZWsycCsxUXBpamJlVDZrMmM0YlVkbGdEOGtOdUFKQnBnejhhdlBpV2FlZkZqWHVjMGVUT3V2SGRCaTR4TXArdVFPME5tMmZaVTMwTnhieGg1WDQ1ejM3Z2FSM0xxSWRIVXp6TlBMTktqWFdHNGY0Y3FpNjA4aFJ4VytMdDVaNjBrYVl3SUtTVldTeENNMVBkZkJOcXBKVzRFMGlkb1pZNUNKRTYvWXpxL0Z6b3M0cmZUd3c5dTNmdHl3L1Y0K3c4YzBucGNVYXlEOTBiOXFxMXphZ2NtTXFWZlhyU3B1UTBzMUxPV2N0Z202RU43ZnRhSzN0cTBLNDlVTDhacHdJbmVQSCtwaFJqR3VvMWpjUWJhRzNmYWV3V2JjbERUQ1dQS01IaktYTUtwSUYxQWFMMmExYmtMS1pKOTFhRk5LUzV1cU1oZ09JOXhmU3hqdW5GVkxScTI0WFhYcHhpZ1FPTi9iZGN1b2NLSERQT3FGQzFlVldGWTAzS2NwN1FMUXl2NkpEQ1VuK2FWcEo1ZjlQNmg4dFU2NFhQOEtZdVQ5T1djRERVREdqWkt0MDRaL3k0QlUxSjdOSGNtdWFwNkxJUExBQnBDRWd4bGVWUElUSFFFQVpwQ2F2YVNCcEJNNithbDMxdFBiQnFoVkJsWk9GUXlZRnNkNmhFbTFjZGFCb2t3SndzSDgzUlNuOVFJcVB1eFFyUWhQeXFWTjlNLzgzY3NrVmFLcXY3ek14Y3F6NlZXdjdkMUZaKzJPZlEycFF0T2ZVREp3ajNLbWY2dE9zcnpTM2M0VUZTcWEvNC9qZlQxSFdyZTloNTNwOUtUbGtIWi8xblE4RGFMR0RLR1BVTkFlZkkrOTUwSGlMVUdrdTlCb3hhL3BzbkZ6a01xNHRmU010Y2VzV2JDQ3BibmR2cU00MTVuY3FhRWdtbVE2dFRtOFZjRHdmclVHbzFIVzJDOFdNVDB2S20vY0NvQWFaTy9WZkVCSU5EamlwZVJSb1N3QWNKN2V0NVdWZ0hDbHVjV0tnUElHMTduMjVvelFmMU91ODMydEJCVDltRFVyVFRkRGJtdVg4Ris5Y3dpdDB5N3FTZXR0aDI1dXFKR2ErN1NRTTNjeWEvdVN6VUQ2dHJEZFJGQTR2YVVVT3JtNm9DRlk1QU1EWHZWaWxVdGhBUElRTVc1a3grcTFrRjZFd3dCcGlpYTFqcDFpNjNRQWU1bWlrbk1DczVoNTlHOWZwb3dTZmRiMkVEUlZONzNUUTdiNjd1UEpWQ3V4cWh6b1A3T1J1anZUTzdrK0hoQVVmdkRQc3c1bUIzelNIa0JBZEJLVFVvemYwWUtEclVVR3llMXl4MSthU1dGMXlJckFjSlNiR2VuV25xalY1UC9FVmFLR1MwejlXRTk1Rm52T29qNUNFaG9FVlhCdGVNRzZBelV1c1FrUEwzOFNEeUg5Y1ZhNlNoSWhDeWJvZnIrVU84aFlOeGx3YnI5eTRjTzNKb29ScVpTZDRSUFhzRHdLczVSRHVNNTVuSFEwM05yK3A1d0JRa2NtV05lbE5DeWt6cEZmTlBWZGVoTm9WNGV2bnovVVkzSTFMUmZTdnA2U2JWVzQ4cUtyTXdNcTFPRmVSb0FhRENBVUJwaEdGeTA0Q3A1MXZoTUo0UllERFlvMFB6T0NiUDJidFBDWkhhMXNjK1phcHhXaGd6MDFudDU4MXFHNGRuaFdnSG9jTm5mWC9yTU5uTUVXOXBCVWw3aUZpR0Y0MXdMUndkcG1aeE05UnlubGJqcWJ3VTU2Vjk1aW8xU1Z3bWdwNVNzR1hpZ2wwckY5VGE1OUNpVzlSbXl2RFBNM0dtRUhodlp6NExUeVB0RkQ2QklOUmU4bWhWUHcwMjZ4V2IzQVFBeVZ3elBUZEVEcEJTZW5ic2MzT245bFNnemZKcVVtMjdJS0taMm1nSHFTSHQ5Kyt6MW5xMHJlbXJVTW8wL2JuM0cwRnVTNGluZVpqRzd6K2xuNDBEb1ErYXR1MFpRYUc1SlJTZTVrWHJZYkVKTkJIZ0YvTFd1c29ybTdSUjNTS0hHVDluR2xrdzdZSlZkNDJpTWtkMFdNQVJTcFVXdWNNNm8rc3g2aTMrY1FjcDVoN0l1Mkg2d1ZDdnhsZnFPSmd1NU5jYUhoNVFZNkc2ME5heFpxR3VnYlRVWkdxL2ltL2tOSGJBUDhqSnBES1FGcDc1MWZIc204OXVCUE8zT3MwQ3g0MkVhcFJkMzNtY21NU0kwRUZGc205bG5TWk04T1JRZ2RKTzg0WjFnSnR5dUxJL1VtWGFuaDFUNWdZTmFhbndacDh5SmRrYTk1c3FDRHhRd2o0eTIzNFVrQUFWNEpjSlE3MGRTWUxRckZxL1FXWHZaMVVMRHVVSUFLcnJDbThVUFBOMXIwdy9pMjhvVk52NGpjODl3VW5TN0N0cEM1djJhOGRwV3orSU9YcStaaEQxTW05K01WZjQwOTdFMmRhNkg3N1JiYkpNMVJQOEFISlhMYU1BamExak1vdTVrNWF3Y2NyWG0ycjlKSlNJTGNJa1U1dlpyNHhTVkRzVXdnVzJSYzdyMlRoVGVxQktjNmV4TWs0a0dsNkhwbHpib1JITzNUUUtvVlM3RXlpWUR3b0gvY25mbzRHNm50aHhCVVk1eWlDQVBqVGdnR0JVSjUzcDltVE93M1JLb2VQQVNkQzB2VXJUWGg5Tm05dWZjck9IWDJmQ2JjM1MzRGF3SDFCbjVTeXR6Rk5ZdjRGTURlM0NMbXE3SVkzMllmekt0cGRwWWFLcEE2L2U3K2JYZkdCNjgydDFnRTBhelpsbGlPWjB6OFFBYmtZR0poQnlseEtvVkpua05DZ0djeHJVZFJuMEZjTnVGZTQ1TEg5S01hOURKYTkxaU4zUlJCcUtHeXpKclU4c0RxODdvYkdlcjJYdHQyZU1taXpTYkJHOVdkN3VSbXBGOVVxM0JGUm1xS0VXM3ZpS2VLNVY4VVVZMUZLSkw0ZlVLR2pCd2I1ZDNRVkpRdlZ3c1pyWE5BNFRxWG8rN2J3TFFtL1hPb0Z6YSt6aDFic2VXOUhKOFBESUFhYU13cW5CVzEyL3VjWEFiRzJSbjdIS01KeU1uTy9tdkRtQnZycFhESFhJUzFxYXFpS0lnWXd0MWVvOVU4c01VeUtJc0Z0QXBwQWs0ZTlxcENiOEY3ejI1a3I1NmpPVTIrU3FteDlDd2NQYlpSb3l3cFJRN2NaYWJwaXprRnJjRi9zSExlUzAvRjJtSlAzVVFnNU1aNFprYWdJZDN0eVY5WUcxdi9zM3QraHVycTJYbjlaQjNkYlNNcXQyVTdrRzdnZk1xaCsxTlUzTyszNFFzWk9BbGFrZDBXSGhrd2kxMFFQWmw0cHVLNUthZXVQbXJOd3ZHTkdzREtZMU5LRVBIZzFVUENXVm9aMG1HYmdZOEhDQW8zcWRFUkl1WTN5MDEwdm1mdUd5WDkwRVU1OWI1aVNuNmt4U09PRzRIejA4cmVJOWE3Wi9uM2VvbWpkSSs5NmNva3NYWEtHL2RaRm9vNlZOeGRlSHFvcVhJUnRtQW1FTlU2aHkxanlES1dlb21MbndPb1JTaDYydTJqa3Jwek10b3dLbVRyRlhoTktyNUVTb1IxRFZvNVlaL09yTnNhaVprcDFEOVRpZHRhV3hXdTVKY2ZOQmJxc1dFOTNpOEdqYThxZTZGMnBOdm05QjJOcndOTzdlQ0wwbnpTRGhaNFZvM3R1WUtlUGNqY0tuQ0l4b0sxRG9aM0drU2hIWHhSRXJ6MUc1OGFWV2h5cWZyNWp0YVJRa0Q5WndlL0FhanlWV21CaVUwQVVjSnF1Vzc0MG16UHhwWDExdVM2QmI2d1BBb2JYbzBRelc3R1p6Q3FZV2RVNUNoYW1xZHZJMjE1THZkekdLQkhwK25jQ1dmVFpWNW1oYXIxM0l4Z2xhS0hNMDkzRFdyM0h4SHJyZXVYSXdEdlZGNlRPblRFMmhHbHBseWhvQWhEUUxwQzBDaTlXMy92QU9MVlpzdnY3b1cvOHhEcE5WMjN2eGFrNktIeWN1bS83MjJ4dER0VWVESld2TkM2cDlaOVZOVzFWYXVlMjBwQ24velIzdjFsWjNORmdqVEZPS2JKbTMzNGVmcjhzclZRZkVxcmxVZzRFS0ZXQXd1MVdreXBwSjJiSlBJUmxRYlhFcEhpMmlIV0trdFlvd2ZmVmhzUDNabUpZVmwxVUZHeEl2OFdTZ3FBcFZBd09pOWk3cVluV0htS0FXNUltVmtCclhSUnBEQkFnSmlObU9ock9hdXR6MlJzVTZKRjN1RDl2YzhEUUF5WDRQZDhHTXpPY25aTjZiWTc5QzR3R2FOT2VhQTVLRDlaZVZTWElWUUcyYnp1cGgvY3l2cWVlRWFOOStUY0hheE1yTmpmYSt1Yktac3oya3EvZTNWVHhjNERGTXpZdUZxOVJOQWF4YWpOSWkzdEc4dzZhZFR0Vll4NVp3L0lGa2lrMXd4ZDZkTkVFbWVuVFl3RUd5MUIvQmRiZldUN0diY3BHSDNNSnpvNi9uZHE2R24xcjRiSTNCcFNGd0VYNXZkYWxYUzZHMFJZQ3g3WDJyS05xRTYwaW1hRVRYdll3MDFtaEl5OTdPK3RoQVdRZ3RxNlFTZEpEYngzNnJVRm85ZVcwVUlheDdoWDhtckNBQ3BKM3VTRE1HVSsvL0czMnpWYitUY1NlQmpDenZIcTdOYXp2aDJoUXpXLys5RmwvZmVBNUV0eXhaUDNTeVkwYmZXeXV0VzJNSFRTQjVDN0dNbWpIN3pkLzdzS3hzZFBjakFQVzhyWEpqaDVSNUtDSVk1aHlWWEd6YVBoOXBFZVpvT1JnYUhRYWg0empBU3NuZ3F0VkZSd29ndWJranhZU3pxOGMvY1NaZDJUdDBqOE1MblVteTJBc0tWYWJkVllzWHFkdG5aVjJ0UWwwWDF3Z0xhdlc4WmhaQUdtbzFxSTRmejFxVk9LMVpJV3pYcWJmQnRFNlNUcHV4cjRlVEluUHRjNi8vcmp5REZtOXVCS2lEcHBuTUcxTU9zSVh2QlJxaGVVMTRwTExsMnN5V2VXcUVlVklCbkxUVXFBUjFvVVBaaHpxcXA5QmhqaHNlck5Tb0krVXByazlqMUc3SzR3alJNK25LZ295dmI5TzBFM1JxM0MvdEdzYjFRbHZsUm0yYkRRbVdwNXBwclRNenFPUDljcHBwK2MzTXFjNlppcGVveUQzVlZXYUtuaS9uUmJoWUVTL1ZObnhwcDVrYlk5TmU3VkxDM0tMc3NXdE9zeldMdWNXZ1daaDcrS0d6Rm9XWXNLdmE2Z21ZV3F0Tk0vU3MwdDVvL2Z2KzFUMU1JU0xLTzR4bmJQNHV0ekVRRXBYS1F0TDk1RXpIY2FQQVdlYmV6M1dXRjB3ajFMaUpuR0NhZGxuZGhZZHZmdmdUcXhyT1hOMjhMTkthSTB4YlJUaHR4Zms4dWNvMDdyMHVSbEc1MmV2NVFTZzZLTlVEeE03NGh5TGxwYWN3Z1pSU0lSRWI5b25WWkYvTHFLazJPZXJiWG1xUlFxVkR1bEtMUVUwd3ZhU2R3K3ZTM0tBMm8xOFFMZStaTlBmK3pIcWZTcVdmNmZlYzE0anpXN1ZWbXFCTG5jOGZLbkRlOC9HUEFnQVc3anBxVkw4NzE0M2ZpR0duell6TTJBZ1FoamoxRHVTMlhTajdMU3ZhTDU5b2U1NDJtbm1hbU42MG45ZW9ueUJZV0d0TW9mNFN6djM3ZDkydVZkZWxoTktVMm9rUlY1d01aSUhEbTdpUWFacWlTMkFDWWdEN0tQelVkMnNXMncxcS9ULzFUdXdxZmQvVVRhaGZwemJaM0FQbnVsT2pqbEp0aUpqUjZYV0c2SFl1elNUSGJzUXpPUENJNmlhWElMZ2JaR2NybEZ2dFhWNEVMcUpKSllBQnUrWnVnVWJ1SXBmRVZxOHhzZlB1WVZNYWhUR3JxcTNMQ3dhYllLQ0V5d3NsWlIyZHhBb0pFU1h1eTdXdFVDTUh5SjdKaGhpbStBN2paalVNdkZCeElnb3NvV3l0THdUYU56QVZxaWJPUVJIZnVlVEdpV2ZmZDErWVlRajVKL1FuZmNrcXNTaUlpRnR6SWNXOGZGSHRKNERBNWFKZXNOMmlMUFpXTm1EM2UyZkJxbk1GUVdJL0wxbWpWaGJHLzhib3lzM2ZPTEdwSEtvTFoydnEzZlBHU09zaEtrRUhOTVBMOEVyNWZnUWpBdzBoUjFNclBEc3ZhY3MxbGVKWVdVTWt0dk0rUkdCd2tWUFpUUTJFWTh0SGYrZmNYdmNLanR5Q1VPMnhqM3hNRzhZdmliSTNUY0txQ0pFS2RxWkk2QTBNRHlBOGd2QVloQXdNRFNVYWllUlF4b0JOQW1VVWxDaXcrN044RUZnbTdwRkJTUWFXSEF6M0VBMFJLaDRsdStOYjhETUFld0R0QVRRRWFBU2lIRUFPUWc0U2pZNHhTTFZCb29HdUpuUjFncTVKMGRVcElEMW85SkJMRDdsMG9hVUhMVjBZNlVDamd3a3BqTUhJU0VHVGdvR0NJWUloZ3JnL0xVQWRiQWt3SkFBRHdvRG04dmJRNUw1T2dGeUFYT3lVU2c1Q0pzQUVoSndZbVRBMDdNUG1JQm9hT1RSeTVNaVIwUVNhTTJqS1lVUkRKTGQ3WUtBQlpDQ2FnREYyMXlFTUJWSHhYSmk2T1dCNnVHcW1TTmdDMHpZc21FcEJ0bXl0Q1FxMG1CYXR0SWpQUzF0QnRKa2ZVWnRuWWtiZTRlMlAvTXQvcE1NSTY5RElBUURvSGwvNVRQZk1tb3hldWtiK1JGSE1OWlRiMDNPQ0xnZ0tTaGdFQm96MVB5eldBOENodmYzZFlKU0NpdEpRaGhFeTBEU3VGYmZjNWFHQWhoUXZ4c3p1TkZLQUFBcHUyczhCVFlHRHJ3T3lKSU5tVTFTWnZTQ2UvVTAxY3U3Q0dDNCs1N2RsaGh1L0xHVlB4UklqWXdURVpFTWlRVm44YmVrU3pvMHUzSllCSUlhS1FySDlMYmh3MC9ZbmEyaGk5ek1uVUdwaWYxL0RFR0V3RW51b09LOXFSRmZXK2pYSUhkUll6b1pxRFZvRUJhZm9Qd2YwdFQ5Y1BXVkc0c1loQWhKRVp2YW1IYzVJUzhIVUVTRlJpYXoxRnYvcFl4LzVjVG4wVU0zYm1UZmM4NU12UC9uYzEydytPL3ltSkJmMHU3M0FXOVpqMGc3Q3JpWUNJSlFqbzdIN2U3OXlvU29zR2hHQXZId2JxVm9KdHFlMUtvSFZzbWkyYlBVSlhiaHhyUlU1aEUxeFUwd3N0QVB2MVFGckJZSnl6Mk52ZG5iZzBFWkQ2eHhpdEV1Y2M0akpvWFZ1TjQ5Qkk5TTVRSUpjWnpDU1Fidnd4NURWN3dLNStVY2pnQXNmaUJXSUNkb3d5RGtMZXdPemEwWmtLR0lrQ2xDY3dKRGJYMFlLckJJVWdTbUplNnNWUkpSYlJxWmhKQ3Zrbkd3WE1xckxiZHRZcm5tNktNSVduRXB6YUNsRVdNK3I3Q3YxclQybW1QTDBaTWlzYnZaSzZIWWdFWkp3TTdvamsxSWxpNzJseisvYkFIQ2pvSG5QeHorS3h6N3lNYlA5bmpQZmR6bmIvb3FkQzllT0paeGdzZGZEU244Ui9VNFgzVVFoU1ZLa3BKQ2FDUlJwSjhtcVFOeERqZ1E1cFJCa1VGQkJ1MzIxZ09ySlR3ci9uV29uanlndlpsdElaaFVnTkIyUXBQYUd0N2RITWM5dVM5c0tZam91M3M5QnlLQWxoOVpqYUpPRHpBUXdHYlNlUUpzY0lqbHlQWWFSSExsa3lKS0xnSm9BcEVGS0lKUWhTUTJvSTFBcGtIUUF4WUJLQ0tuUlNCS3lQNXNOYkwrZi9SMk16ODBNQjJKOGhCd0trMEdPOGRBZ254aVlETkNaSFEvUTR3U1R6V1dZakNBbUFWRUh6SDJBT21CS1Fhb1BUV3RnSGx1eDlvU2dsRUFsQnFBTUpBa1V1bzFhV2ltbVVaWHJKZHM2MWlpK0dqSDJNR2p6RHJYdVpqOW9aOFQyb0tIWWFWUUNwbEQ4ckNqMzdTK3FIb0lvTEVNVS82ZmdJQTNXTmZxMWsydkxxMDg5MGpuMWhWc0dIRzhyajExODNKdy8rbk03dlBrM3h0bUVka2NEWE42OEJpYWd5d3FLZ1c2U1lLMnpnU05uZXVndmRkRlJSNEI4RGF3WGthZ09DQXlWYXpjZzVXb1lma2M1MlJNVzZMbFQySDZldUhUN0VFYyt1SVkrci85cllKRG5PWVFHRUJuQm1Cd2FFNEF5R0JraGx6RU1HeENHVUpRaHh3U1ozZ040QktZSnBKc0JwQ0VZZ2NpQUNVZ1NqVFFCV0Jta1hRV1ZDRklHRkRNNEFUcUpBcEVWbWlCeWRBZ0JvRExCNVlRQTBYWTdnR080bU5uMWpiRzdBYmhJUTNNbkgwR2NnRVRCR0VHdWdjeG9HQTFNWkFmakFURFlFZXh0RWZZMkJYc2Jnc0YyanZHNGh3a2RBNU5Db2haQWFnR0craFpncWd2Rk9WSmxrQ2hsZ2NWY09nMEptVEtwZEFPMHBoTXVYUGQ1VGhoMmhRMndhSVNqb1dDN0NRVFF6WUhLQVhYUU5NcWhWR1ZwaTkybndSY2NYVG55MkNmLytIZEc1eC85MmxzTEhBRDYrTVhzZnhpdUhmdmFDOWV2UEV4RXlFMEdtQnlUUEVlV1R6QWE3MkMzOC92b1A5akQwcjFqS05XRjVDZVJ5RkZNS0lXUkZDbWZBd3ZiSEVuSVJoeE13VmxqZ3FWS0dqclBrT2tNT3RjUU13RFRoa3NrQmZhOTE5Qkd3NWpjTW1pY3U1dGNBNVJEMFFRTUE1VUl1aVpCeWlrVXc3MXhHWUFNekRrZ2dweDZibTdGZXpzTFRwS0pYZTdxV0M5L2FobXRLMHlQTWJrYlMrQ2cyOEM0Wk4zK25rd0N1RVM5MElRdW1FSEgvQVJVWVNjaGRJbGhTTVB3QUh3c3RaN0tkRUFtUVRZbWpIWUl1OWNIMkxxK2c2M3JPYlozRklhVFpVQ2ZobEtua0dEQmtoR2lrV3NnVVphUnMzQ2w0clFYQ2M5OXFxeHU5Nkx1bFJZZ0YvNGgzRHlBZGpWUDQ1ZEYxVUk3bUdaQ2Z4QUttaXBVVzN2WFJSVThCSlVtY203eDJNKys3OUgzbUZuRXdHRUJCL2x3Zk9tdTN2Si9QMW1hL01UV2NHZTFZeGdrQ2t5QTBSMHNKaDJvN2JkZzU5bDFuRHUraDlYRlBTaHpFY0ExR0I3QkpCbTA2aGVhWGxhem1DcmtnSWdDcStDMFMzM1RvUUdFb0tSckFVUDJocFRDK3hpSUtBQXAyRlhqdVdDZExSMDU2WTZSc1cxTElpRXdKMkJKYkFoSFFGOE14T2lDQXZic29mR3FMSW12bXhBMFdkQUxndlloUlVHdFFFQ3NJRUtXaWdjVnZJZ05VVFNZTFlrUUxubXl6Mmx2Y20zY0ZnS0NKVnowaW8zOFNFTnhEdkFZU21uMEY0SGp4MUlra3k1eUtBeTF3ZTVnZ3V2cjEzRGw1VTNzclQ4UE03NGJSS2VScWdSS0tiZldvMnkzVWNhR1lMbDI0QWREazJuVWQwekxlRUtkZXE0UURRaklBYTlVNHp4TUdYTFB0eUM0dFd0bGpoR1hrazYzdisvcTh0TG1TRStlbnVmbkhBcHdBR1N5TWZqVk04ZVAvdHRjOURlTnN3a3g5MkMwaGtvSTFERVlkWlp3OGVyVFdIbCtDK25EVzBDdkEyTVdzYWpIVUJqQ29HdlBPdFc4RUxaYlZnY0Jnd3NiWExHT2lFQXEwTlV5VXRIUUlqS0FqQUVtU3dVTGdWVDRQak9VWiszYzl4dm9vaDZRVTlsRFZvaDRlSXFEMklVMVZNajBWc2JKS1N3S08yOWpUSmt6a1AxWlhoV21ISERqa2g0V2NpU2RnSVhLWms1anJ3MnpwZVB0QzFFUVNXeXlLd1JKR1ZuSHZzWXVHT21xd3RwcHd2bUhnUEZnRDd2cnorSHEwNWV3Y2ZVSVNPNkJwTXZJRW52OW1CUkk1Y2h6ald6RTBCTkF1N05xTEJreU5wYTBhUFJ1QnJVZGQvUGJQVHE1QllmT1FXSkFSZ2VMczhnSHNxNHpoTjA4amdFTG9BdXlZTXBTcVhBYTJiMk80dkNsMmlhNVFtaEd3TWloT0lFUXNMSnk1SGUrK1YxZmMzSDd5WmR2RzNBQVlMMjdQdnFIcDVaVzM3YWU3RDBnSXREYXNrd3BBYXJiUlVKMzQ0VXZiR0R4aU1iSmN5TjAxYTZOMmZVU29LaXlNcnU5MmE5R1E3S0FpNGF2b1BXRzZqRzRwWDZMcm9Qd2ExdjY2OXJVbTBIbG5FcnhLcGdiYVd1ekw4NWwxRUVCajZtNm1ibXg5VjZrYkJVeUFtSjdtaXV5QldTaXNMZE4yZUVyRDh4Q1RzOSs3SThjZTZNb0tGSWdVa0JLU0h1TXhTTTluTDUvQWRjM3QvSFNNNS9ENXN1bjBKM2NBNkJ2RHh6MGtTUkFmMUVqVDhmWW13eVJUWEtJTm83UU1URHVBaGdqZ1pBSktxMDNUVm82bUIyMW9VYVpzN2IxTkx2V0dBbHFQSlhyVHJYbFdmNjZ0dVkvNWRmNWZzQk9weWRyQzh2L2NQdkpsK2ZhMGNrM2c1UmFER2pFeUtlWGN2VS9MU2U5TFNaQ0owbVJKaWtVS2ZTSTBGMDZEY0tiOGNTblQyTDdpa0lpMTJIUDI2T3QwcDc3clFpdnQrUE1temdlbk9lbkF6MGFGNWtweUcrYXp4Zm1QdUhIeGZPUnkzc1lJRmR3RnJMRkoySUdxUzRvNlFMY0Fha3VvRktBT3hEdUFKU0NLUUZUQ2xZZDIwRUJaZjlPS1NnZHc2UlhjZnl1REc5NXI4SWpIOWpHNmtOUFF5MjhqRDdsNkpvZUVsa0FVd2VxMjhIeThnSVdsL3JvcEFxSmNIR1RlaEZFMnlQWTdDNXZUTVpLaTFoSFpmekFUTzFCazlwN1h6QmpRWHROL1Yzd2MxN2hObTJib0ZyNmZuRjErZG9RK01PNXB3Tnd1TGFMd2VSZkhCbnlMeXdtdlcwaVJzSUowcVNEbnVyREpBbTZSODRpRzk2SFovNmdoOUdtUUdnRXJhaDFJclRLODZNV1U4dmNUWmpoRFgxajRCRlhsd3BIZGNOMmtPcURTQ3FQU2pMSzNBcU9FRFFja0FPc0NLeTQrcnFKUVpTQWtEaFFkTjJqQStZdUV0V0g0cDc5SEhjdG1MZ0hJSVVnZ1NDQlFRcWhEb1Q2SUxVS21peWpPeUhjZld3WGIzdDBIZWNmZlFuSnVjZUIzalVvMmdGaEFsSUpPRjNBOHVKUm5GbzlnYVZ1RndrckozN0lwWU90cklxWDJoQ2ExTmF3bE40SXRjMXIxY1pTbVRLbTBCTGExMmxwZi9nMDdnSHJuUk5TV0YxZWVld2YvYk9mdVRURktUUk1mZi8zZi85TkllWGMxNzBUTC8zeTcxVEFRMGEyT3B5Y0hTWG1RUkNJaGFDUUlrOHlhQ1ZZVEpld2Vma2FFZ3pSUDJHQUxxQmtsdnhzTlpRSkwwRGJLVi8vL1A1Z29hbGRDNTUrSmFveE1UemRZelJlQXhrM3Btd2JKQWp1VHlwRHpIb0JyNXc3SVVkbHN3Mnh3R0JLb1ZScWU2czRBWEhYQW9nN0lFcEJTRUdjMm84NWdWQUNvaFNnQk9TL2hoUDdkYlFNWUFrS1F5U1NnWFFYclB2b3J3cFc3N3FHTEIxZ25Hc2tCb0JPSWJJQWhSUTkxY0ZDeDBiNkU1MWJ5U3FuSStESERuSlhUTlh1YzBaMDBjOEdzUXQ1RFF4SVROQVA1OWxUVXl6UERYT1Q4dHB3blVPclh2ZmFqZVBETXV0azJDMGdaaWlWSU8zM3pjbmp4eit5K3VzWG5nM3Y2OXVWNHhSRUFZRGZUOGJtcDVmVDdodTJNSHFUVW9va1p4QUptSE5RSjhYUlkyL0hFMC91UVIyOWh0UDNqNUdxcEhKU3pPTkZibVY0MWdhZVptR2dXZXhyN1E0UFRqd1JhWngrZGNXZUVIeVdKMGhkMjVIWENFZ2RrQURpRGpSMVhNZUFKUlVFN0JwbmJTYkFQbGUwOFoxbDlZejNtVU5YMTFJd3RBS1NQZ1NNaENaWTZnck9QMHpZUERYQXhXYzF1dGU2bUd5T2tac09PQ0drYVFkSFY5YVFKQjFjMzluQTdtaG93elZoNURwcmp4WlFIVlNrMnFpMGNmSlRZblRyUUdQckc5QnlERFk2Q2xBZHpTZ1BOb1hUYXljLy9UV252L1F4NVBQZkU0eGJZN3Rpekw5YjNEVS90Q1RwNDduSkJaU2hvMU4wOHhSQ0NjemlLWFFYMzRZdmZMcUw3WXVtdW1leVpiK29IQ0EwTzNUellSZTcwSXZNekFleFdJL2lIMVFOOWRoOXp2OVpIOG1vaEcya3dOd0JldzhCNTBuUUFWRVBpbnZXdTdEekpxcFRlaGRLQVVvaHp1c0lwZmFCeE9WRFBTU3BJRWtNb0k0aVQ0NWkwazJROVFZd0FHaDRGeExkeC9FMWpUZStPY0dSKzlleGVHNGJDd3U3eVBNaERIZVJKQ21PTHEzZ3pOb0pyQzJ1Qk42WHA2NG04YjE2VHBBZzBFOXovWUNPd2VRNUQ3VlorV1U5bnFqa1JNeGdsV0R4eU1xdi9ZdkhmblY4c0Z2aUVHL0N4ejd5c2ZxblZvbjU2emVXemQ4YjZ1SGRTaThDSUF5VERCTWlKTmtJZzR1L2hyVWpqK09oZHpGV1RpNjB0MDRRR3UwV2g2c2xVQTNWNmhyU3pOcUJwLzFuTXUvM0Zwdkt1SGZvVVFSQXJ1MWhRY3hRU2xWL2QyWVFkMjJoMERERUVKaFRLTzQ2ZWp4RnJqeUxwb29PY1J2cnUrMENTb0dDVG9TaUxSc0FtUjVnRkxKMEM1bWFRQXVCOUFKNlJpSFZjQnNFREpoVFREVGh5bWFLOWZXakdGODVqcTByQ2ZvcUIwT1E2eHlaMXJpK3U0bkxtOWV4TnhwZ25HWEl0UzJFYTZPaFRZWkpuc05vMnlPWEd3M29ITVpvWlA1ejJ2WHh1WDYxSEhXcDNQMlhFVkh3YnlVbGJWbEpQOXlvbEVKQ0NZNGRPN241NVc5Nis3dmV5bWUvTUc5K2M2dEN0ZEMyeEpoL3ZjTDlNeHI0YjRkbWRJU0lvWXhCRnpaT1hUcjFQcngwdFl2a2ozNFBEN3pqR0paV0pralNNUXk2TUtZSFNiWWh0QWVsbDRHWkFod3oxdmJ0QnpTaEN2bU1RSDlyZW1LSlJtdzlMVlR6QlRZaTExQkNCS0d5bFY2eEZBdFppSldsbUlVYzQ1UENTQi9NeXJad2d3RldNTVJGM21POWowK2FYT2VGN3dRbjkyM0ZOYkdjdWkzQ0NvVHRnN0NFanEvV0U0TVVZSlRIbHdWMmtnQm56aEI2SzN1NHRxRFFTVmV4ZldrSldzWmdOVVNYQkdkV2pxTExpM2hoNDJYa2RCMzV1UHBlc0t2WGtBQXNmdWs2eXA3eVlJN0pocGZhamlhNXh0cHBFd1FVN3U2Z3NDekFCYUZERkpRQ1FJQktzTEM2OXVsMzNmV1c1NGFYTmc1MFk5ODBPYkFQVVFBQUl4cmxuMTlJT3R0Wll0NDlNVm5QS29EYVh6Wk5PdWduYTlpNE5NQ2V2b0tWVXhsUzFRVWJCbUhYaWJZc0FXSWFwTUNzcFA1QXVZNHJYRkxRdTFUMk1ObUxEV29SSEhFMGNSc1pRUzNQWnp5dDdKY2N1YWRqWVFqWnBOODJhU3FBT3dDbllOVUZxejVBQ1pSS29kSXVPT2xBb0Z3WGRPcVlzOFQrNmNJMHFBN0FDUlJiNW8yZ0hCTm4vMlQyRDBza0tFNmdLRVhDSGZzeEp5QlNNSlFDNklHbDQ0WU9DYjErRjkzbEhuYk5McWpYQWUyTklia0NjdzhnUWIrZllxSGJoVGFFY1phNXJuR2J1OWpSYmgyc1pqU1dQTkRHOWJhWm9sNWpDZ2lGalFwdG93Vm90TkZ3QVI0dVdXZllBME1SSTJHRlhuL1J2UDNjdzMvbHpLVDM5RUc4emUzd09FVnhGSHVUWHp6YTdaelFpWHozQkhyVng3SEdDTHJkTmFnamZ4b1hudjlsOE1KemVQaE5oS1VPZ1NtRHlYcnVSc2h2MllzTHZVVEpacG5BVzBnN2NJSlFES0FLMk9wMUhFUEJyaDIySGtHS1RvSEV2ZEVka0hMMUZqQU1wV0JPQU9rV2JlL2tiMmpmcmNBS2tLNGpCOWpHN1c2MG9GSjhkZU1VVkR1bHhTVEZGR1Y0ZzVZdE1uWVdTb1J0SnpPUFlQUUl2WTdnbnZNZHZOQjVCcDNPS1F5ZTZTTWJLcGdFTUJoZ3NkL0RQV3Zua0xMQ2kxY3ZJdE42eXVTL3A2akwrYVhaKzI5b1NxUkdUUW82ZVAvSU5kbGFSdFEyeko0OWV2SjMzMy9ta1U5bDI0TUQ1eXVIRGh5UDJKWjg1d0tOODU4OVlUcXJsOVh3UDg1WVZpQUNJb1VNQm1icENFNmtmeHFYbi9zTkxDNC9nZnZ1QXhib2lMM1prZ0dNOEMxSE4xSElZSklEelBUdGJPRzJncENLYmpCSjdCY3ljVEhtRE9aaS9wcFV6MzB1QmFrVXdqMUFGQlFyVjdEc2dWbEJ5T1l0QnVSeUlldXBDTDBpVkxOL0pzVlFIcHhXV0tWRjJIY1FNWU1VZ1UxTGlGdVFGY1lCc2c4MnNLR2hHc0tRQVNjVFBIanZJbDdpVFFBOTdMMUFHQTBFVEYwb0FsWjZnRXBPZ2doNDhlcEY3QXh6NUhsZWh3Mkt3UkhSbFlaT0w2UXhYNDdhMWhrQUJOeGljYmd4Rk5La0l3K2R2Ty92WmR1RDRZM2NLN2ZNNDdoNUhkU081YWNvMC8vNGhPa3VYTzFNdmpGbldiRlZjSTFjWlZqZ1V6Z3VYNDduUGpNRzZHWGNjMitPYm1MczZEUzd3U3l0SzhuNHZDUkJzYWFpdG1pcDlEaitkUEl0TnFab0FhclF3elVQVmFydmw4eGdYVXpFeDlyaWV0Q0U3RkFjbEcxL0liRVZmYUxVVnZ0aEsvOVFDa0FDNHA1ck1HRTMxT2NBUXdSRkNRaGQ2NFZFM0dpTDh6NUsyWnFGMDJFUUtadFFSSUpiakt2TVphVzlSZTFDa01GUUQ1eW5JTFVJUlFsZ2N0Z1dXY1o5OXlnODExbkhVQmJRZlhrVjJiYUJTQTd3SG5wcGlydldUb0JCZU83S3l4QnRnWkxwaVN0cytwOXRISG1pcTF2Ynd1Rkdha3FOeTVTOHQreG9LR3M5bGloUUlGWTRldlQ0QlJINTQ5Q3R6UnVtM2ZKUXJRVThHc0RubEphUG44cTZ1TmJOdm5FTXZjSk1VSmhBOHg1VS95aFd6QWZ3OUIvL0pndzlqM3ZQcGVoeEg1emEwOGl6VG9mallhcUM4U0ZvcXZVYkNRcHViWVZYYnQwQjZyL1dpTzhJNklBNEFVUkJLTFZObEtSQXFnc2hCVWdDZ3MxdGhEcGc2amlhdVZ2a2N5UjI0QTBPT0tBVVFsM1hjT3JhU3V4UWVzQ0hxOEFMT3E5VXlSbkswMTFNbVdNUUFNV1pvOWs3QUhkZ0lLNTlCOUE2QWJSR3A1UGovTDBkZExzVFhLRU15Y3M5akRhSEFOdUV2cDkyY2MrSk0waVk4TlNGRjdDMW04RW9oVnpuZHB3QzBxSnlKRE1qZzJrUkFJVi9PaktpaUNiY3hHemE2V0Z0WmUybmVUdC9Ic3MzZHUvY3JoeW5YaUQ5QThyTkQ1NUl1czllNldYLzlYaVNMWGJSaDFFalRGaWdGcy9neU9oOWVQN1RqSHo3Q2g1NEVPaW5tTEdZVm5DajdMVDFKcjQ5cHZybUVaWGVvbjZxMWIzZXRGMDVkbzVHVlNyN3dxbEwyRk1RSEVOR2R2UUJsSUxVZ2dOWkQ4eUp5ek5zTHkrQjdkQmV3ZFIxWERjMDJTNENWL2drVndRbFpoaW9vaFhGSzdtVUJLTGx0VHhZRk5mWGxpalgzZEMzaEoxa0VEYXVnNkVMU25PQU15UW14N21UUGFReXhzVmtCOEtNd1hvWHJCU1lBVGFFVTBlT2cwRjQ2cUpnWTNzTEdlY3cyazFmRnV6YWZLQUp4d2Rhb3c0S2dlUjE5aXdqdVhaMDlZWFRDNnMvK2NVckQ5NXc0bnpMRTRjcDdrOERlQnFqL0IrYzdDNy9yY1grMGs1cWVtRHBRMVNHU1RwQXQzY1dwN3BmZyt1Zlg4TkxUMTNHM3U2Z2tCMEtWM3ZmVEIxcVd2Rk1BaFhBWnJKWlpjK1lHYXpJRlQybFZnUzFEODlna1F2Um1GUGJWMFlkRUtlV1BlTU9WTm9CSjcyaW1LbFVDcVU2RmxTT0VSTmlRS1gyT1pTL01WMkxEYnZuNWc0VWQ2QlUxN2JqY0ZveWFLN0h6ZW9uSk1VRFV2MDdVMm8vbG1Xd09RYkNndlZzU2tHelFVNENTUlMwRWhqdWdNMGl1cUp3N2t5Q28zZnZ3SndqSkVkUElkZXV3eHVFVkNVNGVlUVlIcnJyUHF3dUxpRk5WTGtNbU1PSTNyOUJaa3BHMC9KZUJHMDU5UTUxKzNjckw5YnQ5OUJiWGZsL1AvSEUweS9kWEUzOE5sWGhXOGdDYjR1NGEvWFBiK1NqZnpBY0RKYU5NVzZxMEE1NlRQSUpkbmYrR0EvZC96aE8zYitLWkhFRTZ1MkNlUUtsRlpKc0RTUUdrbXhCeUVvdmdXQ2xwa3dDbFNmUWJLQ1ZhWStGaVZwNzRhb01HcGRrQVZCMEVCUzFtYUNkeGhoWDlXYUZjdnhoeVlWa0hSZGFKU0RxQXNyZXdNQWlDQW1FTFIxdCs4azZFRXFkR28xQXFRUWlkaDdHQWlzcGFoOU1qcHAyM1FVMk5FdWdqUUVodGRSMW9CZm5lOEFvbUpRTER5SmpURVczckp6WHAySUdpZGczbnVwQ29wZGNiVWxyZ3dzdlhjRDZzMWN4Zks2UHliRG5Ha29OdE94QzZ3bXVybS9pODg5ZndPV3RpOGowRUpQSkNCb1o4andEakNEWG5tM0xad0NucmkvQTVWWWpkbDZhN1ZSeFFveUVHV3QzbmI2OGVQVEUrNzdqeUtOUHpuSEF2L0xBMlFjOFBkWHJmUEgySXYzd3htajNmV1ZGMHQ3c090dkdlUHdaTE4zMUFzNC91SUcxUlVhSEYyRW93U1N4ZWdDZHZHY1ZZendMUmdZS0dteU0wemZqRmpiTXovcExXRHV6VEI2VmMvZGxyYVlNQzhuWGNPQ0xoUGJJdFBtSDYxcFdLVmdwR1BSdDNzRUtRQWRDQ2RqbERKWnVYblJoaEd1UlFRSncxOTMwTm5HMkhzc0dWUlkwN0pnenNmVWJ0dDdNNWphMmw4M2UwRGFQVWtvVmpaUEdaRVhQSEFMeGRGOXBEMnNtWWdKdytSdVN1RkFBSWpJRjZlQnpKeEVnMXprdXZIQUJGNzR3eFBEcEhNWjA3QTlSR21JbTBCcTRzcm1OenozM09DNnVYOEk0SDBMckNmSjhZbGUxRzdITkExTWF5TUttMjVJSThPU082OVltc3ZVdDE3N1RXMXJBcWZ2dS90SC8xeS84OC8vbXQvN2FqOHVOZ3VhMkEyY2ZBQ1drK0lIUmlmN2Z1YjY3K2ZYR21JNVNESzAxN0NLS0RObm9qN0N3L0FRZXVNL2d5TkVFM0JQay9WMElDTjNKQ293YjlMS3lzVG1JSmlBYVd5YkZGZThRbkZhZVJyYURZdEpheEN4em5lQU44d1UyQnloZExNTlM3c1R2Z0tocnhUQ1N4SXBqdUlvL1hMOVkrWFVLZ3E3MUdnNDRRTmVDZzVTbG5sM0hnYSs5cy9zM1R6bjd6Z0ZMTUpBTDdkSVNFTXpPQXlMd09LYlNUVkJTOEo2QnBDSUhLZ1Rxbk1jcGwwRTVPVHhJSWFSdnZhSnhJREo0NnFsTHVQcTVIZVF2NWNpMWxic3laSCtiU1o1alkrczZmdStweitEU3htVVluV0dTanlGR1EyczdIYXBGVHdWTW5UMmo0bkNzQVFkQWtpUTRjZmRkVDNXTzlMLzJMNjIrNzZtYjhUYTNKY2M1Z09XaXpSUG14WTIvZGxvVy9tYUhrMDJ0VFRGN0FyV0E1ZDQ3Z0owdnh4ZWVQSXVYcmlyczVVTlFwcEZvRGFpQlZlaUVkc1V1Mzg3QndYNXhOMzRidEdBUVNTQVYxTnlJWm9mUUpNaFpBS2JTQzVWRk5qY2pvN3JnWkFHY0xrS3BKWUNYQU9tRGVCSE1LMkMxQXNVckFLOEF2QWpCQWhRdmdYa0p6QXZ1MFFHbzY1aTFMb3lrQUZJdzk4RGNoNkFEb09NYU5mc0E5NHJQa2ZzYVZoMm9wQXRPTENnTFVVNXhGRGVseFlOWk9YTENlVEg0QTRpczkzUGRDUFpqLzBqQnlnR2RPdVdCNFBJdG4zZTk0ZjY3c0hwK0FaMFRLUmdhSkFRRmV5QlFBcXd1citCTjk1ekg2dUtLclcwaDdPT1R5dnZTeWdHMGZNNFhtc3U4aDVFdUxraDNxZjh6Ly9qbmYvSHB3N2haWHhHUE0wZm90b1NsN25kZW8rSDNqMHgrM0RvREJuRUtZM0tZL0RJbTlBV2NQbmNCOTV5NWlvWGxERG9GV0RwdVZqOTFzckFBSzRZaUtjN3J0aHpIaTNwTWE1MWhWUnVlSXFya0J6cGd6ZXhnMkFJSUN5RHUydVJmT2k2aFR5d1lWTmZsSFlsYnhwNWF6OE1Na2c3QUN0clZld3BsVkhMNjEwUjI3aCtlams1QWtyamtsMTBmbkFyS2dOWGRNODJkOE0ydDF0VWVQeTVyUUM2dk1VN0NLaHdkdDdXeWN2MDd1UW85UzQ3ZHZSRWUvNzFuTWY3Q0NLTmRxM2RxU0dBNEEybkNaRExHYzVkZnhCOCsvVmxzNysxQTZ6RkVUNnhLVWEwdmpia3NJUlN0Vzh5dVNWYTVVRHVCY25KYmhnaWROTUd4YzJlZldMcjcyTmY5UlhySDAzTVNXSGV1eDVueGduZXhPLzZGRTN2cSs5WjA1NDhVRWtsTkFvTXhNcFVqNzV4Q2FyNFVHOCs5Q1M4OGN3THIyMzBNTWl0d2FIK2pFVmhOa0NnQnczY0dOeldFdzV6RmI1VDIwNWVWeFZFU05Hc3kyNFJlbE90V1ppVFVkUk9YZlREM29iaHZUM3JWQlZRUFNCY0E2c0JRRitBdVFEMEk5d0ZlQUtrZW1HMy9HVlBYcWpzTDNOQ1pBdGlTQ3N3OU81ZERIZnRBQWtFSGdzU1NEaXF4TnpLcjRJam1RRnJZbithcUhFL3c5RGNsNVFOcE1WYk5nVmVDLzFoMW9GUUhTZEt6WG8yN3poTjJ3Q3FGU3JwUVNRZWNKR0NsQU5YQjR0SUM3bm40SkhCS3dCaURuZnRqc1VEdkpCM2NkK29jM25qMy9WanM5Z3ZhWElLdTh0YThwazd5MUd0c0JDU0tzYng2WkpBczkzL3FZei94MDg4Y1dnM3dsZlE0YzNpZU15QjgwMTR2K2MrM01YbFk4emkxd09pQk5KREtEb3k4alBUb0pheWN2SVMxNHhwTEMwTWsyTFcxQTBvaDBuV2JoUFVNZWxrcUJVeGp6QXc5Z2FDdTR5UjVLRmtBcWRRV0txa1BjZUJnMVFlcERySThzWE0xeXM3TENEckZqUWhpcEt3QTJQNHpiUUNRQXFuRWRSZ3dSSktpNjFtSW5HU3U2NHdtZ2xKcFVRQ0ZpRzNOUVNsV1VYWU5jVEhNTnFOenI5WitROFhJcXE4UitVMnp4dFdMZk91K3pZMms3SThqZ1dpR01VT3dtdURKenoyUGx4KzdCbk9OTUNGbE83Q0xYVHZBN3Q0T25uanhTWHptdWM5aE10a0RKRWN1WE5GczQ2QVF6Y0hvaFEvUmlOd29OeXNvSWxBbndZbjd6djJibGU3eGIvaldJMi9OYjhiTHZOSUYwSVAwdDEyQzRKOHRqdlRWWHBwOHk3YWhkdzVaMzZOb1RDQURUU2x5T1Erc0g4ZGdKNFhldlFxY3piRzhDQkJweDR4NXZlZHk4dDBxM2xUWHJsZVdDeWtWa0FXbElMY0VONTcxUG9uckRiTTVDTHdIb0E2RU9yYXdhUWlKU2tIS3RkUkF1ZTlMSUp5QXlXckcyVFpIdHZvQ2JMMk5jWnNJR0phSzl0clF0a25SdGRzb0xwa3ZDU1A3K2tjK3dlZXlDQXBDdTVwLzJLcGsrd2xacWFJRnlUS0FEREtoOXFaQTJIbUpzR0dVVXFoRXc4Z1E1eDg4aTYyWFI5alpHWURIWHUvT0J6NEdpNzArSHJyN1B1d050dkRFeTE5d25SSmx1eWNSQnkwMi91V0h2eXNYVzljc3VjWllQckcyazNIMll5Rm9Ec01PZGF6Z1ptM0tXTUlBd05PczVROFhoQzh6MDlFUjQyaE9uRm9STm9Id0lreCtOOGFid0dpUVFhVkRKRjBOVVVDdUZHd2ppOEF3SVU4WW1nbkNDUktrU0NpeGF2OHVERU9vS3FPY3RxNWJ5ZUZuL0kzcWd0SUZtS1FQdzEySTZrRVMreWZVQXFBV0lOd0gwU0tZZTdhSjB5WFA0STZieEV3Y282YVFjeGU2NkUrejRocVdFRWpzemVWdkdJSWRQMUFKbUpXTDZiM25VWVVtQVlSdDNpTUtKQXFsWG9FbEFZZ1V3SWxOeGpteGJCNG54VU5jd2RVSTI5ZXFPbzd4Yy8vbUJCWHROYVBLV0FZOHFWQWNNTVlxcGxLS1JIWFFXK3poMnRWTm1LMGNNQW5ZcTVtNmZFOGxLWHFkSGk1dnJtT1VqYUdRRmFCbkpMWUE3RmRic3ZNeW5ncDNSRkNTMkZ5d2QyUkZlcWZ1L3NUUTBOOTl6K0s5Y2xqZTVvNER6Z3p3NUFDdVEvRFpqcWFMWGMybkJFZ25yRmVZbEMzcktVYUhlOGkyR1R0WHV0QjZBWlFvcEttMmF6elFBVWtYQ2gya1NLRmd3RHdFSmJ1dWZxUDhnVnprQ01TcXVPRnNEdEJ4clRDMlFFbXU3WitVRlRnSGRSdzEzSFhhelBicmxlcTZHODJPREJSTW9RTVBPSVZTZHNOQUVRNUtTSjI3bThVVlBzT2JCSzZkcHZBZ2xib0dGVWs2VVZDNFpBVlczTHBhSlF4WDdhR3RpcUczMXNaYW10NlY0YnI0Z2swUmpJWGxaWXkwd2M2VkhjaEVPOW1yOHJYRENCYTdIUkFNTG01ZWhkWjVVSUJXalMzUmpPb29kT0lLdzJtM2crWFR4N2JTcGVYditXdXI3Mzc2TUVGeng0UnFjNW9BMkFYd2lZNGhPcG9sZjdFbnZMNmo4bnV5aEpiSFpGSXRxK2gyamdENXZkaCsvakltTzVkdzVKNHJXRHk2am01bmdpNEpFbEZRVElBeU1Nd1FjZE9UME03amVCSkF1YzFkTGl3aHg5YVJIUmdUdUk1bXBkekhDc1FkbTM5eEYwUTkrK0RFcmRaSXdGNWxrNnczQWFsaXppWVVFUlFKNVlzOE0rRzhURkdyS2pmeGxEbExPZlZaL3JVRUZSV1ZmL3VQNHNXb2EzTkdKdFF0WXdXcFRMcldFTk95SmJ0Zy81MTRTQWxRcTM1Nno0TnZ3SlZucm1DNHN3a2phYUh5UXhDd1loZ3c3ajExRHBlM3J1R1pDMDlCYTFQcE80T0wwS3kycE5kMHM1M2p0dEJMV0R5Mkl2M0YzZytldWZlZVQrTEs0ZCtNZDV6SDhWNW5pdWZ4M3VjRkFDK2xobnBMV2swTUdSZ3lYZUZ1VjZNRHpWMFFkMkJHS1FZYlBVeUlvUHBXZUQzaEVSUVBYU0d3QzIxVzNPbGx5b0UxOWw3R2ltSXdkd29HQ2tnZEtHd2RSZmttUzdMTUZ6bVdpZnozdURxSTdTM3J1TGFheElWTjN1UDRibVhuaVlwRTNoTUN5cDM4cnZncDdPanNFbXhCMWNLQ0VhcG85S3l5YkY2Mmw0TzlaT1hERnpjTnlvR3YwUE5SeFV0UjQyTUtYZzhGWHRCM2tJTVpuVzRINDcwaHRwNjdBRzBTVjRCVmdhYTBRVWNsU0pYQ2xhMnJHRTB5Sk13RkhSMFVhSnpIc2JROWsvV09uYVVGckp3OC9pZWRvL3IvOG8xN2p3d08yOXZjYVFYUWc5RFZBd0MvQmVESElQaW5SOGJKSDV3YWR2Nm9sMDNXaFFlUzh4Z2psV0tRbk1Bd1A0K2RaOTZNSzMveU1EYXV2Z0Zib3hYczVBWmp5cUE1ZzFEbW0wbUNTVWduQkM1Y2hHaVcvbFVnNnJpOWF6WjhNMUN1QTZEanlBSGxrbDZYQ3pqdklPTERLdVVLaUdYT3daell2TVVMV2d1N1FpV1g3Smx2c3dHN2JtbzdreU1VRml0RGIxU09GZml1WUJCVjZqMGxXOGlWV29tZzNLd0FxZGUvcWg2c09jWk9SZnROTWQ4a2RzZXFSbUtYWXBIZzd2dE9JdTJYZTF0Tk1YR0x3dHNmWFRtT2UwN2M0M0lxQVJlL0lTck1tbFVRZGFMeGlyRjA2cGpwSGxuNWh4LzcyQyt0MzZwNzg0NzBPSE42SHdOZ0c4QVhBRHl1aFBTU1ptTXc2V2lWOVlVNE5lakFvQS9HS21Td2dyMnJIWXduQ3pEZEhrUUpCQmtTTmJJbkZWU2hBMENLWFJLZHVBRTZoampoREtiRVZ0N1pkamJiL3JCT01kSXNydjVDQlRoOFFaTHQ0SnJmYzhNSlNKWGhHb0lKRWx2RTVmS0daQWRnbjVUN2VScy9jZUthUEN1MW00cW5RZEZyNW5Pak1vVXFFL29pUjZMYTZ3bGVYN1A1RlMwZUtBU1E5ZVRpQWV1RTFEdUp3c1lMRnpIY05KYUljRFdiWWgrUDJPS21Vc0NGOWFzd09yTkM3WVdPdDcwK0NhblNFekpqWVhVWnE2ZFAvTzg5Skg5djVSTXZERytGdDdualBjNmMzbWNJNEU4QS9FOFEvT2pSU2ZmblR3OTduK3Juc3E2TUZrVTVNdElZcVQ0eU9vdWRpL2ZqMm1mZWdyM3JqeUlibjBjK1hFUStZaGdOR0dFckptR01tMFEweGE0WHI0ME10amNXRjRxZTlwUXI5dGNnM0pZbzFYc0tmdkdBUUx4K1lER1ZXWUttYkR2eGNya0JiVnQ0a1NEOENzZTJnbkNxQkdTNWM3bENQZ3ROSlFjT1QzNHIyT1R0Q0E0d2d4UEdzYnVPRnN1bnFPaUZLMDlGUUdGbGNSVW5WdFlBRVNSS1ZXRkpxbGlQNG92WXk4ZU9iaTh1TFB6QXQzYmZ2bjRyNzhkWERYRDJBWThBMkFMd0tRaCtQTlg4UDV3Y2RmL1g0MlArZmRhamdjRWVKbXFJRVJSR09JYng0RzVzUFhVM1J1dHZ3MlR5cFJpWk01am9IdkpjQVJvZ2JVQmF3Mmh0bXd5TERkZDJuTnF3OXlMS0xuMlNZRFFhWmErYndFQkkyN1JNY3Rjd3FRdlJ2V0tEWE9VWHFTK2o1MHF4azJvVDlYWWttTjJDcEFDaEZZM3IwQU5NQjAyVkVadFdLSlVwNGtKVnIxV1FFa0VMVUVoTUVDdXNuVDFkNkxZVmVaUmIyYzVNVUVtQ1R0ckZ1ZU5uYkpFM0xOYTdEblltZ21LRlJDbjBsNWF3dEhia1Z4NVl2ZmZUTjl0Uzg2b1AxUTVJSElqTGY1NEY4Tm5FVU5hVEpCVkpNYVpralFCU1NwQ1R4aWhQc0xtK2dLM1JQVUN5QXNVcEJDa1NiYUQwR0c3QkNuSWk5RXlPRkFJdERLMVNHTFlrZ1YwdGI5Vm9paVpKdUxwTE9JWXRFZ3hsT1E5aWZQdExVbm9RTjR0WmdNYUxhUkFYZzFqMjVySWRCT1QwMDJ5RVNTWHN2Q2Exbng4SzVMaEN6UUUvR2w0Umx5VU9Ic3Boekh1TUFOWkZTMElaL25rdldDVVJnakFQNVQ0aUF3VmpHQmYvOFBPMkM1bzdFUEdERWZiNU13QktMRFYrY2VNeXhwTmg2UkU1c2N1REFYUTZmVWpTd1pGelovVWJIMzdrcjM3SnRhVVhieVZvWG5VZTV3Q25TQWJnU1FEL2M2cnBCNDltNmhkUFpjbHZKOGFzWnpvVGdSV0t6Q2NHbzh1N3VQcEhpN2p3UjIvRStzdnZ4SGIySHV5WUJ6RTJhekM1UWFLM2tla094dmtTUkhmQjJpQ1ZDWWdHMEdxQVBCbEFrQUdTT2NMUEx0Y2w1MDJLTUtUWUFhT2hUUTRqR2lTMk85dUhoY1UyTXRHM1NPYTNub09VbFpacWtsLzlIb0thL2lDZU1rbGJhMUVxUkJKTDRvSmNzZE80SGFoZVFDUVU1d0FCUzcwRnJQU1hpeDJsUlpnTUJsTUNJNEtsVTBmbDNQbDdmdVJ2L0xkLzY3ZHZ4LzJYNEZWc00xcDF2UGZaQnZCYkVQbGNMOE4vT0dVNmYyNUkrVnQzay95ZUNjdWFJaVlqZ29GZXdYQ0RzTFV6eE9LVkJNZlBMV1A1NkRYME9sZlEwN3VZS0FObWdUSmpKRG1CSlFlU1BneTYwSlNBWlFJaHNhR2NJeGlNQysyVkttc3g0a0JoSjhkenk5b1pGM2FBYXdxVTgwb3R6cHRxMUxlVFNWbmJDZFJ2bWtLUHM3YzlVNjJJMmxRQU1wWHZyNUFMQXZUU0R2WkdveUpnSmFlMUowRU9wMVNLNWQ0aXJyQ3k0YTdMKzBqWnZyVCswVldjdnVmdVAzcnJPOS8xOXgvN3lNZmtWbnViVnoxdzVnU1FCbkFkd0NkWXkyZjZ3aC9zbTk3WEREay92NXZvY3ptaGIyamNCeEV5VFJodEpCaHRBNHVMcDdCMitpNnNIQlYwMXI2QUZGdGdrOWt1VERaZ0kwRGk1di9KZVJ6UmJnbXVndWdjUW1SblZqelphc3FOMlNBTkk1bWx3TmtyYkZvUG9KamNvSmdCR1E3V094SmFkV0JSRmh5THhnT2dBR0lETklJZ2hLcURKZENZTG1xYlpnNHZoaHJBNmhzZXFORnFJTWJ0WkZVTVk0elZrUXNVVzMyakRSRmpzZDkzNHdQdVJTbTdva04xVWh3NWMxSy81ZEZILyt2VC8vYmw2N2Zybm1POGhteWZFeVlIOER3VC9Sd2IrY0hGWFAzQ3FWSG4xODZNdTU5YW5tUlBKR1l3WkJob1NiQ2Q5M0YxYXdFdlA1M2l4U2VXc2ZIaXc1anNmREZ5ODFaTXpIMlk1RWVSNXd6UjJ5QnpCYUlOZEthaEp6bnlmQXpSSXdBWlNEUk1ia1hGU1RTSzVWTml3em52ZVVoeUJ6eExJRERaNWtZNy82OHJBb0ZGa2RFM00zSkFLZ1FTVUQ3SUtyY2ZCTUlZYU92MnJoZFE2Ly9PaGFBN2d2NjRxcmVwQWluTWxkZzl3aHBQTVlGYmtlaWlRdExKYUZQUTFLbEt3YkRkRTRsS3JZQTZNNVpQSE51Nys4emQzL0dkZi9uRC8rNTIzbXNKWG1PMmovZng5UFduSFlId0NCdjg2U09tLy9ZVkxSZTNWSDVtaDgwOTFPVytCckJyQktPdFBleHVKZGg0WVJGSDdyc0x5M2RwcE4zclNPZ1NXSzRoMFVPd3VGa1kwcEJjUTJOU0pMQVFEY0RPK3pQWlVNNll6STQ2S0JmUkMxenR4alp4UW1zNzRPWkNIYTIxRFYwWWpZS2xUL29MRVQ5QnErZzcvS1l5cCtDSlNqNWpTZ3E4TlV6enk3V3FzMHBoaUZlTVQ3UGZ0dTJxL0RYUEU4NDRpWGJUaG00b3plcEsyd3lIUVhZZ1ZOdlh5aXF4UkFrUzErSE82QjFabG52ZitNQ3YvZDkrNUVmLzJlMEswVjZ6d0RsQS9yTUI0Rk1BbmdEd2RoYjZxclU4ZmZNcTQ4S21aUGZ1SmZxY1pwTWFCc2FHc2JjbHVQNjVJUmF2ZEhEcy9EbXNuamlPdnJvRzB0dUFHVm1OQTJYY0Rrc0RWdHJSckRrTUs5ZExwVzNsM0crc0ZvSWhLUmt1UTlZeEtpdlRDcmF6TjhaNGtBWDNjUmdjRlZ2TG12UEZwWmVSV3NJZUp2S3FoYUp1Mzdnd05YZnkza2FvcUJ6WmY2dUdlZXgvRVJIb2NlNUVDY3MxaU1WTWo4Ky8zRUdSTysxcHU1bWMwVm5zNDlTOWQzMml2M2J5UDMzc0l4OHp0eE0wcjJuZ3pBbWdITUJWQUo5MFJkUXZab01QSERYcDNtcWVQTCtkNXZkdXN6NlhjNTVvTXBUbkNjWlhEUFkyeGxnOTFzT3hNMmV4ZEx5RGxhWExrR1FJeUFDUUlaU2UyRkJIREpnbXlGMURKWW5ZZTVRNkFPeCtHSUlqRzBoQk9MUGI0bk5BS2JKdmozRWV3MmkzbHQ3T3ZFaGJ2eGlGUmNSU1hNTVVIc0FPZUlVOWFsTGYzZ3pVbWxwb2FuSXY0dlVieW8zaFhzcldleDV5YXcydFI3TmpBYlpMYmdLenZZdFJMbGJMd01rdGtsTWROUzRITWlhSDBScWpiQXpBMW5ZME1kYnV1WHZyL0pzZi9QdVBQcjEwN1pXNHJ4aXZFNXNqLzdrRTRCTUFmaHpBLzFjSlBiazJTWjg0Tys3Kyt6UGp6aC8wSjFoSE5oRmtZMlRERE9zWGR2SFVwNi9qOGYrd2lTLzhRUitYWHo2TG5leGhUTlFia2RFOTBQb29KTytEVFJkazdLb0xpTGFkWkJ5cThtdXdhRHVYSXRVY1NKQ0RZR1d1eEV3Z1poelEzaHBDT1F3YjI1YlBCR0VuVUZMc25TRm9rTzF0VXdxR25GcG1PTHJnZXRPTUcwb1RvcUFWaHl1ZUtjeWpDdWxncHFMR0ExZnZzVEpVTnFkakdMQ0lhMm15SW9jaUFMSU1neGN1WVd4U2FDU3VmbU1jYSswbWE0MkdHSVBjWkpoTXhraVVndGJBOGJ2dTJqdHk3UFIzL2ZXLytiMy83cFc2bis2STBlbmJiVFB5SDMvSGRBSGNBK0RMQUx3WHdOMGdwQVBXYXp1cGZzTUllbzNZbGhXWkZSZ0dxUkwwMXpvNGNzOGlqdHpWeDhKcWdrNXF3ZEl4bDRxcFRXSkFKV3lYemJwRVg2c0YxK3pwVncrbU5pOWlOM0x0Tncrd0hWMWdsUlpTV0FRN3RGYUpsbnlCbE1oSjZLb216U3plNDdqRnRzYk8rU3VWVk1NMktyV2xRNC9UdHErMTdWNWlzWElrb3BTYmtyQ0VSMzU5RjUvNzU3K0pLNXNhSWdSdDdLSXRiZncrSElOY2F4Z3gyTjdieE84LzhZZlkydHZDOHVMSzVOUzVzOS85ZC84L1AvMHp0enV2ZVYyRmFqZVkvNHhnbTBkZkJQRHZBWHdKQk85ZTBPcjhnbEhybzBTTzdrbCtac2o2aERaNWtxRkxFd09Ncmhuc1hOL0M1Yy92WU9YVUVSeTU3d1FXankvaFNOcEJvdXdhQzhtSEVKT0RNUUVodCtMbGlncnRaaUc3aFZrb2NaUEJVcXdEZ1pTdCtyWmp3WDNPYlZhZ291MUZLa1BoVkN6UG5hSDBNMlZWWXlnSDNHYW10cSsxOFJ5U3VIYTZIRm9tdGt0QUE5ZWV1WUs5bmJ5eURjOFlDVGRJT2NyYVlHZXdoMEUyZ1VvU25MbnYzRzkvejMvNXQvOUpDSnJvY2U0ODcrT3RDK0NvODBKZkRPRHRBTTdrQ2tmR3BGYzJGWjNMbEt4QmhCUUJpYktTczh5RS92SVMxbzRwTEo5YXh2THBSZlNXZ1NRWlE4a1FKR01RY2xBYXR2NjdGZXdxZFVOazl1WXpRbFpWeHN2b1FwVjdQRmtEVGtOT2ZMWlFkRWVuWGpYUWtSQitYQ0JRWWlBSmFqM2M4RWkybjZ6WitObTJ5TGkrRDVWTUNpWURRd05vR1ZsUmpndERQUHVKeDdGOWJSZGpWMy9TV2tPYjZwYTJTWjVCNndrKzk4SlRlT0hLUzdqbnpOMmZlZU9iMy9haFJ6WVhYanhBR0I2QmN3Y0FpQUlRblFQd0ZnQmZiQmozNTVERnZkU2NIVUV2VDZEWDdNUXlJeUVydXBFbWpFNlhzSFJpQVVmdk9ZTFYwMzMwVmhJa3FTRFYyNWFLOWkzenpFR2ZKTU1rQ3pEd0c2amRhSU1YWVljQjJJWTd4aGMyS1NtNnBzVURzYTBqUUNoWXFkanliMFhCVldvZXFOMWE5NStheE9VK1EraHNqTzJYMXZIQ2J6eU5yU3RENU1MUUVJZ1I1RWJiQVRxallTQU9TQm83ZTF0NDdJay93a3AvNmFYM1BQeEZIN3cvUC83WlZ4bzBFVGczRHFBdzFEME80RzBBL2lNQTl4dENaNkprZWNMNTJsRHBzeU05VGcwdlVxSVVJQnFKQWtnME92MFVTMnVMV0RxNWltTW5Pa2hYdXVnc3BVaTdCSkJHUXNaSlhBRVpLMGZaMmxOZnNTcEUzUVVhQnJaV1pBZkFYRTREVlFCSFZESTF4N25Wd0xIaHBVRHlIRHN2WE1FTC8rZm5zWDU5Qjdrb2FOZ1dHbVBzL2s5dHJEVHZKTTlnSEppZXZ2QU1ObmEyWG43ZitiZCt5MzNxK0cvWDQ4WUluRmMzaUJTQXN3RCtESUQzQXpqbWFuaVVKYksyUzdLMlE2UDdjdEdrT0hIS1JhcFFhR0VsNkhSVExLMHVZUFhNTW83Y3ZZckZZejEwRnhLb3hPcGdGNUs4UkZZendTWHNSalJ5YUNUY1FaSmF6V2xqbk5keG05dEVsZVJBOFhZSFc2bHRkSFpyZ0NOR29DY1pkcDY1aW91ZmVncTdHN3NZYWdNRGhZbGJZdVZYdC91dGR1UE1GcEF2YlYzRHBZM0x6Ly9aYysvOFVGZlU0M2NLYUNKd0RqK002d0M0QzhBakFONEY0STBBVml5SWlMTEVyRzNMZUczWW9mdXkzTGlpUDRHVFRqSDRuQ3Fna3hDU1hvTGw0NnRZUHIySzVWT0w2QjliUkpJUzlONFFKRG5TQlFZbjVEb1FiUHVKVXBidUJVcXRBQ0VuK1JTK3pIQjRybERBcUM2Y0tyb05QTlVjcmhRTTZ6eGszT0NmMjZyZ3hESkVCS0lOQnVzRFhQM01pMWovL0FWTWhoTm9BK1FpMEFLWDAxaDVxSEUyS1VBNXpqUHNqQWU0TXRwNjhnUExEMzV0VDlTemFHbVlpOEI1YlhxaFBvQzdBZHdQNEdFSHBqT0FYUzJRcFZnYnNGNGJJajh5bG56TnkxSXFsOVNIdzJsS0VicUxYZlI2Q1ZTZUkxRUdLeWVXc1h6UFVYU085dEJadFZzUjdFb0xoaXBFMUwySW4ycDRDcjhVUzN3ZTVMeVEveklmR2hxWWFyVlBxaE04VEJZd2NMMW5JbmJWU1RZY1krT0psM0g1TXhjdzJOaERwclZkMnlHV2JoRGphMGNhRTUwVmUzbHlyVEhJeDVKQi82c3ZXVGozVVJwa0w3YlJlcThrYUNKd2JtOG90K3BBOUlnRDBuM09HeVVDMERBeEo0Yklsd2VVSDUrUVhrNVVRbjdtSkdIYk9TM0dJQ0dCSWtFblVlaWtDWHBMWFN5Y1hFQm5kUUhkNVFVa1MxMTBsaGZRVzExQTB1MjRrQzZ2eVBwNjlxdm9HL04zcGpTN0VheTR1bStCQVlxZXR3SkhDa2JiaGIxNmtpRWY1QmhjMjhIMUw3eU03UmV1WWpqSllaeG91eWtZTS91eE1VRHVsdWphZFI2RW5jbkFySFlXLzg0Ykpvdi9BTFl0U21hVkZDSndYaDlrZ3I4cmV5NFBlZ0RBRjduSGFRQTlBWlFocEZ0SmRqWVhuUTZWT1F1cmdreUpVbUFDRkxNTmk5eWVIcVVNRWlha1NZSzBrNks3MkVQdjZCSzZxMzJvZmdMVlUwZ1dVaVJMUGFUZEZLcWJGaHB5SWhwRzUxWUJVNldXVHBaZ016VlY5NnVXbTZrQmsydU1kbklNcmcwd3ViNkwwZlU5RERaMk1kd1pZalNaMkEzWTVReWYxWW4ySVpxVGdjcDFEaU1HV1o2TEpseDRHR3YvbWRMNFAyR2JjZTg0d0VUZ3ZITEFxVnNYd0xKajUrNTJlZEViQWR3dGtFVWlWaHJTMmFEeDJaeXBQMko5V29pSWlZaWNzSGppbHp1NWRFVXBDN1ZFV2ZIRmxCbWNKT2dzZE5GWjdpTmRXb0RxSkxhQ24wOGdwSkgydXVqMGVraTdYYVQ5THBLRnJnMmxKaGxFYTVoY0l4OW5NT01ja3VYSWh4T010d2ZZM2RqRGVKVFpmemNHdWJFTzFyZzh5b2l0L3VmYXVENDJDM290dHV0Ymk0SFN1TGJTV2ZqbmEyUDFqNVRRVTBDaGUzdEhnaVlDNTg0RWxRS3dBT0NVQTlKNUFHOEdjQytBWlJBbEdabitqc3BQVDBqNlE5S25sVXBJakpCaTMxeHBrQ2c3RUFlQjA4WXVXV2V2SHVvYWZzQWtUc3pQNWtlS0ZjUU4wNUYxRllCanY3U3grL0dNMXE0MDZsUjdJTVc4amdpZ0hjUG1LZWJjNkdLMnlJaHg0dkxxK2dyM2ZubHRRRC9CQnArQlZXcVZPeDAwRVRpdkhzL1VBWERTZWFKSFhHaFhFQTBpZ20yVm45RXNmU2FGYmNyT0NrdXE3UEFhRlEyWmZzWUZ3V1lHeDR5VncyMVc5dGVJTFV3cTM4UUpjcG9KS0c1K2J3YXdPWXZydnhQWWozM0h0SjIxc1Y1R3lFalNTNi8yMHU3UDNqM28vV1MrTjdvSVlPL1ZBcGdJbkZjdmlBakFFZGoybjRlY1Z6cnRQTlFSQUYwUUV0K1d0czZUc3lDa3JCZ0R5azRJSXlVUU5LRmZrWllHVmZRRHdoYTFVcjZwMUU0b1VPRm9iQXNVNC9EbHF2OHdZRW1oaURJREdmZlN6dWVQbWU2UEpabjhlelV4bDJEYnZLZmVnSGNxYUNKd1hodEFTZ0FzQWxoemoxTU9WUGM1VUIyQlhkNmpBdUVvN0tqSkdaLzFEMG12alVrZnNTcWpnYnd0Q0NLR05FbS94RTBwc2k3R3VNM1E5dk1KZUVoRVlrUUxla3FucTh2NTR1TGlzOGxXL2k5WHJvOC9DWkhuVEthdlRNdGhYaTJnaWNCNWJRS0tIZUd3QkV1QnJ3YkV3ejN1ODE1SlBYVmZxNlFxUEtEYzEzUU1TWGN2TlNlSktiZTNpNVRDaDdZOVRtc3hHZ1RUeS9ueFhrNS9JSVNuTzczdWhYUjU0YXJxZDRhN3oxMzJnZ3Q2bG9kNU5RQW1BdWYxeGR4NUNuekI1VXROTVlDNndFQUp3STd6RUdQM2IyNnZJcmoySExuTFZiYmMxODU5WTcxYXdCS0JFeTNhVFJySFN4QXRXZ1JPdEdnUk9OR2lSZUJFaXhhQkV5MWFCRTYwYU5FaWNLSkZpOENKRmkwQ0oxcTBDSnhvMFNKd29rV0xGb0VUTFZvRVRyUm9FVGpSb2tYZ1JJc1dnUk10V3JRSW5HalJJbkNpUll2QWlSWXRBaWRhdEFpY2FOR2lSZUJFaTNiTDdQOC9BTG1HNlBoVFlveW5BQUFBQUVsRlRrU3VRbUNDJyxcclxuICAgICAgICAgICAgJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTTRBQUFHbUNBWUFBQUEwejd0SEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUE1N21sVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU0x2dTc4aUlHbGtQU0pYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUWlQejRLUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpUVdSdlltVWdXRTFRSUVOdmNtVWdOUzQyTFdNeE1URWdOemt1TVRVNE16STFMQ0F5TURFMUx6QTVMekV3TFRBeE9qRXdPakl3SUNBZ0lDQWdJQ0FpUGdvZ0lDQThjbVJtT2xKRVJpQjRiV3h1Y3pweVpHWTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1Rrdk1ESXZNakl0Y21SbUxYTjViblJoZUMxdWN5TWlQZ29nSUNBZ0lDQThjbVJtT2tSbGMyTnlhWEIwYVc5dUlISmtaanBoWW05MWREMGlJZ29nSUNBZ0lDQWdJQ0FnSUNCNGJXeHVjenA0YlhBOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOGlDaUFnSUNBZ0lDQWdJQ0FnSUhodGJHNXpPbVJqUFNKb2RIUndPaTh2Y0hWeWJDNXZjbWN2WkdNdlpXeGxiV1Z1ZEhNdk1TNHhMeUlLSUNBZ0lDQWdJQ0FnSUNBZ2VHMXNibk02Y0dodmRHOXphRzl3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzQm9iM1J2YzJodmNDOHhMakF2SWdvZ0lDQWdJQ0FnSUNBZ0lDQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SUtJQ0FnSUNBZ0lDQWdJQ0FnZUcxc2JuTTZjM1JGZG5ROUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlVWMlpXNTBJeUlLSUNBZ0lDQWdJQ0FnSUNBZ2VHMXNibk02ZEdsbVpqMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzkwYVdabUx6RXVNQzhpQ2lBZ0lDQWdJQ0FnSUNBZ0lIaHRiRzV6T21WNGFXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2WlhocFppOHhMakF2SWo0S0lDQWdJQ0FnSUNBZ1BIaHRjRHBEY21WaGRHOXlWRzl2YkQ1QlpHOWlaU0JRYUc5MGIzTm9iM0FnUTBNZ01qQXhOU0FvVjJsdVpHOTNjeWs4TDNodGNEcERjbVZoZEc5eVZHOXZiRDRLSUNBZ0lDQWdJQ0FnUEhodGNEcERjbVZoZEdWRVlYUmxQakl3TVRrdE1Ea3RNak5VTURrNk5UZzZORFFyTURNNk1EQThMM2h0Y0RwRGNtVmhkR1ZFWVhSbFBnb2dJQ0FnSUNBZ0lDQThlRzF3T2sxdlpHbG1lVVJoZEdVK01qQXhPUzB3T1MweU0xUXhNRG8wTVRvMU55c3dNem93TUR3dmVHMXdPazF2WkdsbWVVUmhkR1UrQ2lBZ0lDQWdJQ0FnSUR4NGJYQTZUV1YwWVdSaGRHRkVZWFJsUGpJd01Ua3RNRGt0TWpOVU1UQTZOREU2TlRjck1ETTZNREE4TDNodGNEcE5aWFJoWkdGMFlVUmhkR1UrQ2lBZ0lDQWdJQ0FnSUR4a1l6cG1iM0p0WVhRK2FXMWhaMlV2Y0c1blBDOWtZenBtYjNKdFlYUStDaUFnSUNBZ0lDQWdJRHh3YUc5MGIzTm9iM0E2UTI5c2IzSk5iMlJsUGpNOEwzQm9iM1J2YzJodmNEcERiMnh2Y2sxdlpHVStDaUFnSUNBZ0lDQWdJRHg0YlhCTlRUcEpibk4wWVc1alpVbEVQbmh0Y0M1cGFXUTZNMlZqTWpFME5Ea3RZalZpTkMxa01UUXpMV0ZsWVRjdFl6WTBPV1JpTlRSaU1EYzNQQzk0YlhCTlRUcEpibk4wWVc1alpVbEVQZ29nSUNBZ0lDQWdJQ0E4ZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDVoWkc5aVpUcGtiMk5wWkRwd2FHOTBiM05vYjNBNk9HRmxOMlEyWW1VdFpHUmtOUzB4TVdVNUxXRXpNV0V0T0RrMlpEWTBOelk1WlRneVBDOTRiWEJOVFRwRWIyTjFiV1Z1ZEVsRVBnb2dJQ0FnSUNBZ0lDQThlRzF3VFUwNlQzSnBaMmx1WVd4RWIyTjFiV1Z1ZEVsRVBuaHRjQzVrYVdRNllUaGtZV1l5WVRjdE5qSTJNaTAxT0RRd0xXRmhOVE10WkRFNVkyRTFNRGc1TURRM1BDOTRiWEJOVFRwUGNtbG5hVzVoYkVSdlkzVnRaVzUwU1VRK0NpQWdJQ0FnSUNBZ0lEeDRiWEJOVFRwSWFYTjBiM0o1UGdvZ0lDQWdJQ0FnSUNBZ0lDQThjbVJtT2xObGNUNEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BISmtaanBzYVNCeVpHWTZjR0Z5YzJWVWVYQmxQU0pTWlhOdmRYSmpaU0krQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRFVjJkRHBoWTNScGIyNCtZM0psWVhSbFpEd3ZjM1JGZG5RNllXTjBhVzl1UGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMzUkZkblE2YVc1emRHRnVZMlZKUkQ1NGJYQXVhV2xrT21FNFpHRm1NbUUzTFRZeU5qSXROVGcwTUMxaFlUVXpMV1F4T1dOaE5UQTRPVEEwTnp3dmMzUkZkblE2YVc1emRHRnVZMlZKUkQ0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BITjBSWFowT25kb1pXNCtNakF4T1Mwd09TMHlNMVF3T1RvMU9EbzBOQ3N3TXpvd01Ed3ZjM1JGZG5RNmQyaGxiajRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOMFJYWjBPbk52Wm5SM1lYSmxRV2RsYm5RK1FXUnZZbVVnVUdodmRHOXphRzl3SUVORElESXdNVFVnS0ZkcGJtUnZkM01wUEM5emRFVjJkRHB6YjJaMGQyRnlaVUZuWlc1MFBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwzSmtaanBzYVQ0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhKa1pqcHNhU0J5WkdZNmNHRnljMlZVZVhCbFBTSlNaWE52ZFhKalpTSStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh6ZEVWMmREcGhZM1JwYjI0K2MyRjJaV1E4TDNOMFJYWjBPbUZqZEdsdmJqNEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE4wUlhaME9tbHVjM1JoYm1ObFNVUStlRzF3TG1scFpEb3paV015TVRRME9TMWlOV0kwTFdReE5ETXRZV1ZoTnkxak5qUTVaR0kxTkdJd056YzhMM04wUlhaME9tbHVjM1JoYm1ObFNVUStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh6ZEVWMmREcDNhR1Z1UGpJd01Ua3RNRGt0TWpOVU1UQTZOREU2TlRjck1ETTZNREE4TDNOMFJYWjBPbmRvWlc0K0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpkRVYyZERwemIyWjBkMkZ5WlVGblpXNTBQa0ZrYjJKbElGQm9iM1J2YzJodmNDQkRReUF5TURFMUlDaFhhVzVrYjNkektUd3ZjM1JGZG5RNmMyOW1kSGRoY21WQloyVnVkRDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOMFJYWjBPbU5vWVc1blpXUStMend2YzNSRmRuUTZZMmhoYm1kbFpENEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXlaR1k2YkdrK0NpQWdJQ0FnSUNBZ0lDQWdJRHd2Y21SbU9sTmxjVDRLSUNBZ0lDQWdJQ0FnUEM5NGJYQk5UVHBJYVhOMGIzSjVQZ29nSUNBZ0lDQWdJQ0E4ZEdsbVpqcFBjbWxsYm5SaGRHbHZiajR4UEM5MGFXWm1Pazl5YVdWdWRHRjBhVzl1UGdvZ0lDQWdJQ0FnSUNBOGRHbG1aanBZVW1WemIyeDFkR2x2Ymo0M01qQXdNREF2TVRBd01EQThMM1JwWm1ZNldGSmxjMjlzZFhScGIyNCtDaUFnSUNBZ0lDQWdJRHgwYVdabU9sbFNaWE52YkhWMGFXOXVQamN5TURBd01DOHhNREF3TUR3dmRHbG1aanBaVW1WemIyeDFkR2x2Ymo0S0lDQWdJQ0FnSUNBZ1BIUnBabVk2VW1WemIyeDFkR2x2YmxWdWFYUStNand2ZEdsbVpqcFNaWE52YkhWMGFXOXVWVzVwZEQ0S0lDQWdJQ0FnSUNBZ1BHVjRhV1k2UTI5c2IzSlRjR0ZqWlQ0Mk5UVXpOVHd2WlhocFpqcERiMnh2Y2xOd1lXTmxQZ29nSUNBZ0lDQWdJQ0E4WlhocFpqcFFhWGhsYkZoRWFXMWxibk5wYjI0K01qQTJQQzlsZUdsbU9sQnBlR1ZzV0VScGJXVnVjMmx2Ymo0S0lDQWdJQ0FnSUNBZ1BHVjRhV1k2VUdsNFpXeFpSR2x0Wlc1emFXOXVQalF5TWp3dlpYaHBaanBRYVhobGJGbEVhVzFsYm5OcGIyNCtDaUFnSUNBZ0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBnb2dJQ0E4TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvOFAzaHdZV05yWlhRZ1pXNWtQU0ozSWo4K0Y0cDhjd0FBQUNCalNGSk5BQUI2SlFBQWdJTUFBUG4vQUFDQTZBQUFVZ2dBQVJWWUFBQTZsd0FBRjIvWFdoK1FBQUI3YVVsRVFWUjQydXk5ZVpRbTJWVWYrTHYzUlh4TGJsVlplM1YxVjY5cTdSSkNFZzJTTEdTd0dReDRHVEJqenNIWTRORjRtTUhIRzQxQjloekRlRHpUSGxzR0cyL1l4eDZiWTd4Z00yUDcrSXgzeHBZQm9VWUN0UFpldlZYWG1sbTVaMzVMeEh0My9uanZSYnlJTDc0bHM3SzZzMXJ2OXNtdXFzejh0b2o0eGIzM2QrLzlYUklSUkRzYTl1UW5QNEhISG4rQ1h2dk5KLy9OdFM4OCthMmJtMXY0MWFlZXhRUEg1cDkvOU16eWp3RDRWd0R3Mk9OUHhJUDFCaHZIUTNBMGpZakFpa0h4VUVUZ1JKdmRSQVRHaUFPUi9TTWVsUWljYURONEhDSkFzUUlUQTBDTXFTTndvazB5WXpTTUVZZ1JhS01MTE1VakU0RVRiWkszWVFZVEFVUmdZamdDSjNxY0NKeG9FejJPMWlRUVFBUk1CQk9aendpY2FMUGxOOFlJakFpWWkxT2s0NUdKd0lrMndXeG9KcWc1bW5pdUluQ2lUZkU1UWtSZ3RzeGF6SEVpY0tMTjVuTUlzRFJhNEhVaXF4YUJFMjJxei9FNEVZa2VKd0luMm40SUFsUVp0ZWh4SW5DaVRRTU5vV2kxaVJhQkUyMm1ETWQ1R1JHQWlhejNpUmFCRTIwS2NBYURTOGJsTmhJQUtWb0VUclF4OXVRblB5RTdyMTM2akVDRUFDaFZuQ0lUajA0RVRyUkpIc2VORS9oZXRkaHlFNEVUYlFaVGJvQ05DREJpWW80VGdSTnRWaU5IQ2hnamtZZU93SWsyaTJsdElDSmc0a2hKUitCRTIxZWVBOHVtQmQzUjBTSndvazJCRFRNUkJGSzIza1NMd0lrMmhSeGdKYjdESmdqVklvSWljS0pOSndkc295ZVh5SW1jZEFST3RGbk1pSWsxbkFpY2FQdjNPcFUrdFlpZ0NKeG9VOGdCOGhOc2djZUp3SW5BaVRZVGZNUVdQeVdlcXdpY2FET0dhY3hXUDVvb2RrZEg0RVNieWRONGNrQmJjaUQycWtYZ1JKdkJqREVWTHhOaEU0RVRiWmFUd3V5RjFpTWpFSUVUYmViOEp2aTdJb3I5YWhFNDBXYk5jUVJTNWpyR0FIRUNOQUluMmd3NVRpM1BpWGEwTEltSDRBaDZIQkVTbE9zTVk2UVdQVTYwR1V5eEFqTjVFTVVERW9FVGJVWjJvTUNMRSs2STZJbkFpVGJUaWFHUkViWll6b25BaVRiSnROL0lSZ1J0aFFrSmtWV0x3SWsyUGNmeC9pWks0RWJnUkp2WjQrVGtpUUVSaVVvM0VUalJadkk0U3RuUmFTSW94WkJJRGtUZ1JKdkZTQUM0TllZQVJXSWdBaWZhTENZazR0WjhNTUhZTWRBSW5naWNhRk45RGpudGFGUE00OFJ3TFFJbjJtU0hJeFQ4UFI2UENKeG9NN3Fib25PQUZjZTJtd2ljYUxPWUw0QXljUmlxUll2QWlUWVJPTDNkSFRKbUlCQS9peE10QWlmYU5CdHVydTFJbm0rS2lGMWw2QnFsNDVHSndJazJ4WXdZaU5qMm0yZ1JPTkZtTTRFQWliS2dpYXMrSW5DaXpXWUZVb2dRcUE5RWk4Q0pOaFU2SWdKRjhSUkY0RVRiL3dsaTlxRmFqTmNpY0tKTjh6ZE1CTVZzRlc4UXg2Y2pjS0xOWkY0ek9oQWpqTUNKd0lrV0xRSW4ydUdiK1BVZXNYTWdBaWZhZmtJMUt3c0ZJaUN4UmRDSW9BaWNhTlBPQzNNcDBxR3QxNG1zV2dST3RHbWhXcm43czFqWkhzbUJDSnhvVTR6Z3hxYVoyWHVjZUs0aWNLSk5kVGtvY3h3WHBNVWNKd0luMm5TWFkzT2NPTVFXZ1JNdFdnUk90RHNicVRWMFJFZHlJQUluMnF6blJUSDVEdWtZczBYZ1JKdGl0bkJEaEZ4SFRpQUNKOXJNNXlXYytvd0VRUVJPdEZtVEhOaE5CWWxTRVRnUk9ORm1ad2VDc1lLSW15Tm5jZXYwa1kzVkdFSlVMTkVGb09OUmlSNG4ybVFqZ2NDNHhWTE9vazVVQkU2MGFaR2E3eHhRY1FJMEFpZmEvc2tCSXdLT1NVNEVUclFaWXpVM1RxQ1kvUTdRaUo0SW5HaFRjUU83STRlSlFEWmNpK1JBQkU2MHFaR2FCMDBwZ0J2UDFSR3lTRWNmWGFjalJBUWpCckNEYkpFY2lCNG4yZ3hPaCtJOFRnUk90SVA0SEhKNkExRnpJSVpxMFdiRmpOVlZZMlpQRGtUWEV6MU90S21CV3A3dEdtUGMydmFJbVFpY2FET2dSbGozZTJzK1BITmROekZVaTZGYXRDbW12WmNSQWJUUjhTWVhQVTYwV2MrTFpkWGdSNmZqS0dqME9ORm1pOWhzcjVxUmlKa0luR2l6bUcyM1lZWmlCYmFpNjVFaGlLRmF0Q2xXaUhYRXNZSUluR2o3OERqaWh0aWtETldpeDRuQWlUWnpudFA0MTJnUk9OSEc1amdoUVJBOVRnUk90SDA0bXFKZkxYcWNDSnhvczNrY0VRRVRJVTJTQ0p3SW5HajdRaEFCejkxY3Y4OUlETlVpY0tMTkFKZ1NKM0h6ZEFST3RQMkNod2dTZzdRSW5HaXo0OGJuT05FaWNLTE5EcHJDejJTMk96b2lLQUluMmhTVEJxREVSQ2NDSjlvTTU4VU5zVWtJcG1nUk9ORW1tUEU1RGdCSTNNb1dnUk50WCtHYUhXYmplSm9pY0tMdC95UVJrUmFKYXo0aWNLTE5jRjRJN244RzZLeDFsdDhkRDBzRVRyUXA1bFU4QmNBdzE4aDFIdW5vQ0p4bzAzQlQvNFkySmdJbkFpZmFUT3hBTUFGS29FaXRSZUJFbTJKR3BEcjdTUndkVGdST3RGblI0em5wZURBaWNLTE5lbDY4L20wY0s0akFpWFpBcG9CWnhaYWJDSnhvTTJDbC9BY1JWSnd2aU1DSk5qdDZ0TEdPSmszU2VFQWljS0xOYW9yZGdpbkZNVlNMd0lrMnU5c2hLN3dlQ1lJSW5HaXptUURRMmtUTmdRaWNhRE42R2VLME5TOGl4SDVsZTVTSGlzQ0pOdDNaVUt1OVhKSUVGSE9jQ0p4b3MvZ2MzM0tUNjl3M0RrU1BFNEVUYmFyTGNmN0ZPTkgxdUhrNkFpZmFUR2xPeVJBUUNCSVpnZ2ljYU5NZFR2Z1B0K1lqOHRFUk9OR21PWnd5WkJNb0p1RW8yQkdCRTIwMk04WkFHd05GMU8vc2JUNGZqMGdFVHJTWjhoenJlQkxGU0FaN3UvR0lST0JFbXpGVUF3QnQyMjBpT3hDQkUyMC81RUFUbUtKRjRFU0xGb0VUN1hEUEN4TkRNY2RRTFFJbjJxekVnUDJ5QmRBSW5LTmxTVHdFUnpUSkVZSEF0OXZFSENjQ0o5cU13QUdNMkRwTzFGU0xvVnEwR1hGVGdrZWdkYVNqSTNDaXpaVGlGSG1PK3krR2FqRlVpemFEeDdHa0FHSlhkUFE0MGZicmNXeDhKbEVCTndJbjJveG1pTWptT0VZd3lQT1k0MFRnUkp2MXZCRFpVQzA2bkFpY2FET0dhZ1NDbmNHSmppWUNKOXJzN0lBRGpFZ2tDQ0p3b3MyTUcyUHNOcllzMXpBUk54RTQwV1lMMVd5OFJvWDBiWklrVVhNZ0FpZmFMR2FNQ2Fub3lCRkU0RVNiZ1Iyd0o0aVZ6M0Zpd0hhRUxIWU9IRm5nRUpnWS9lRXdIb3dJbkdnenN3TWkwRVpESUZDS0laQVlIY1JRTGRvc0hzY1lBUk9EYmJObkpBY2ljS0pORGRPVWF0dHd6U1k3MGVORTRFU2JZcDJUWjg5QXRaYkliV056NHdXUkhJZzVUclJwTHNlUEZCZ3hhQ2ZjbDdqTE1IcWNhTE9RQTA1M1FBVDNMTTNmRUluQWlSNG4yblRnQkwxcUpqYXJSWThUYmJaZ3paTUVPanFhQ0p4byszQTRQc2N4QmhUYmJTSndvdTB2V0l0UldnUk90QU5hekhFaWNLTE42bThFMEVaamtHVXh6NG5BaWJZZmNzQW5PMFN4K0JtQkUyMTZhR2JIUDJHTVFPejRaeVFISW5DaXpSQ29NUUFrU3RuTzZKamlST0JFbStHa3NES1dGREMyT3pydXg0bkFpVFlUTThERTdNUTY4cUpET3RyUnNkaHljeFJ6SEJIeEtwNjUxbjc3ZEVSUDlEalJKb2RxRExnR1Q2YmlGTVZRTFFJbjJwUlFyZUNmalJpQUlBQmlNU2NDSjlvVUl5KzZUc1NBbFkrT29Wb0VUclRKT1k0Ukl0dXRwcGk4eDRrV3lZRm9reU0xa00xdm9wT0pIaWZhUHIyT0ZFbzNrUnlJd0lrMmU1SlRvSVVqSFIyQkUyMUc0TURXY2JUUnNlVW1BaWZhYk42bURNdllTZUhHVUMwQ0o5b001RUREeHR3WXFrWGdSSnNKUUZVbkV6MU9CRTYwR2QxT2REUVJPTkgyNTIycytZMEYwU0p3b3MxQ0VNRDJxU1hNYUNtVnh5Tnl0Q3gyRGh4RjBEaGlnSW14MkczM0h6eTV0QnFQU3ZRNDBTYllZNDgvUVhQbkw3NFBJa1JrYXpsUnJDTUNKOW9zWVVCMzduN2lFZm5iT0ZZUWdSTnRJakVnWXJjVndQYXNSWXZBaVRZTGNKeW5VUlJQVHdST3RObkpBV2I0ZVp4V1V2QTNzYUFUZ1JOdEluRHM2c0k0anhPQkUyMWZKNFVJZm5NaEVkSDJJT3ZFb3hLQkUyMktHU3MyQUNiQzNuRFl2cmE1dXh5UFNnUk90QmxDdFlJb1FMRWpKOUpyRVRqUkpnSW4rSHVxa3RpckZvRVRiUmJUZG4waGlNbnFEa2pjV0JDQkUyMjJVSTFzcjFxaVZHVFhJbkNpeldxV0h5QW9GVTlSQkU2MHFmYmFwLzhUaVVneE9VMFUyMjRpY0tLTnRTYy8rUWtBUUcvMUpzSDFxakVSVXBYNDFwdUluaU5rY1I3bkNObGpqei9CMTY5ZC9kajJzMTg4NHlXaDVqcHRVTTRMS20yeHpvWVZrTG5IeEFNWFBjNVhOV2hvWTMzOUwwcC83Ly9lM1Z4L2E2OC93RERQc2J5NEFOV2R1L2k4V3ZyN3Z6YnMvc2xmejdybjQ5R0t3SWtXMkdCOTVmNmJ2L0hwWTNzM3JoWkZVQ0pDQXNMMUY3N3lyaXZQZnVFdnIxeS8vRSs3SjgrMDR0R0tvVm8wWjd0WFhqazEyTGhsTzZOZHFFWms2em9teTlEYjJRWVo4NWF0MVp2blVzS3I4WWhGanhNTndIQjdZNzRpZCt2K3Jsd2hGQVFnejlvTXhIQXRBaWVhTjZOTmNUNHNVTWhqQitTYVBwbVlBS2g0dENKd29wVm9zZDJjSXJaMjQxQ2pqZTJXVnNSSVdBRkFsSXVLd0lsV25Jd2swVTNGR3NVRVJRUlc1T00zSFk5V0JFNDBENUJPZDlEVWxjYkVFTGg5b0xhbklCWkRJM0NpRlpGYWt1YmpFT0VuUW0ya0Z0blFDSnhvUWFpVzVzVHN2SXoxUFhhbG9RR1RBaU1CRElpQVdNZUp3SW5tSFU3YTdtaXJjRU5sSFFkbGt5Y1JZVytZZGE0TzlZVjR1Q0p3b2dIbzkvc1BVSnIrZGhpeGdvUWVUVUZDSXlMb1pYbG5hMmp1aVVjc0FpY2FnTUZnUUNZYkVzUlVQQTZvQkk5QUlHSWdvQ3dlc1FpY2FONGFtQUV2aFVzb3BYRk5wS01qY0tJRklISE1XZWx0N0U0Mk1iWWdtbXZqQ0lPb3Z4NkJFNjFrQjdoNk9vaXNZSWVCUUxRNHdNUVNUZ1JPdENwUTZ2LzI4OU1DYURFQUNFWUFKaFZkVGdST3ROREZlQUZDRGtRSEJBUkRDb1lVTkNYUXhOSHRST0JFcXpJQllrWFhuZkE2d1l1dyt4OExNaVBEZUxBaWNLTFZFeHY0RG1uamFqcmlJallCbEpJQkpkdnhRTDJ4Rm51ZVhrY0xSVGE4UGZiNEV3NHA1bVNlWjJ5TWdURUcyaGhvYlpCckN4NWlRcUlTVUR2QnNUUG56ei93bmQvMVNLZWRiZ0M0RlR4L1l3Z1hCVDN1d1AxTm9tYlhIUWRIY0FIejJyTmZwRlZKSDFCSmN2K3d0NmQwbHI5ZmRQNCtKdnFHelplZnYyL2psUmRneEVDN0RnSnROSXdXYURISWNnM3F6T0hNbysrVVl5ZE9DS2wwc3o4Yy9JZTBPejlzdGRzdjcrN3Nmb3FWTWlENi9FYys4cEZOSHdBMkFTcUNLUUxueUlIRWVSRmFlL2FMdEpMemcwejBrT2dzTlNKL2FyaXozZGJEd2NXODN6K1g5L2VROTNacHNMY0hQZXhEOTN2UWVRNGpVdFJ5VEZEYk1VWWdCSUFWVk5vQ0pTa2thU0hwZEpIT3pZc21CcmZha3JUYW4xR3Q5akJ0ZDNRMkhQNU1sdWN2L3RwblAvdjVILy94SDVkeFhpbUNLUUxuRFF1NVhuM2h1Vk1ETGUrRnp0NHZ4bnlIM3QxdVo3M2QrNFo3dTJlSE8xdklkcmNwNi9kaHNpR01MZ0VpbmhpQWw3NjFhOXFCc3NGVHhOamZkOS9QWFRnSGxDTHRCZ3doQnFVcDJndEw0TzRDVktjclNhdDloVnZweTZ6U3o2c2srVmVwVWkrLzhPdS8rdExYdERNZEFSU0I4N3A2bFJPUHZsdDFUNTRodWVlaDkrVTdteGUwNEgvTStudnZ6bmEyNyttdHI5SndleE42MElmT2hqQkdBeEp1a3k0Qkk0NUZFdzhpQnh6UG9CVWoxRzVMbS9jOFJvemRTdTFDT2lOaVg4ZUJUeHNiN3JGS3dHa0thblhRV2x5UzFzSVMwbmJuQ3FldGx4VHpYOVFxM1J0azJhZSsrN3UvMjBSdkZJRnpSOERTUFhtbXBVK2N2Nit6dVBSYmpERWZCUEN4UWEvM3RteDNpN0s5WGNvR0E4Qm9pRlJiWjhRaXBMalF2Zm5XR2QrTFZvUm9SSkJhbDdRWTUzRWdSUXVPQk04cGtBSkU0bklrLzFvQ2dkSEdzbkxFNEhZSFNXY08zSjJUZEg1SmtrNzN5YVRWL3BSaStwUUlMbjN3dmxPWHJuejZGMDBFVUFUT2JTWDBMMzNwTno4MFdMbjZ0cXpYKzRQOXJjMjNab1BlcVh6UUo2TjFFV0o1SzhEaUtlUWd2Q3FVMUFOdjR4L3V2WkFKUWpjTGlQSjVSVXpwc1V6VmU1bkNFMGtsTDlMR1BzWVlYUkZ2RjloaUsxaEJ0VHRRYy9PaU9uTklPdDFyclRUOTU0bVl2eWMzWDN2bXZsUm5FVUFST0xNQWhyb256NlN0aTQvZTArck0vWmJlM3U0ZjZtL2UrdnJlK2xwYmRPNEUwVWQzcElYSHNRNGVZOHJ0QTlaN1NMaWlzTWhsQ2tJZ0NOdkM3OEY3SEFjWUJPR2NmNHdKdlZFQm5QSzVpaStVWUN1OGtnQlFLWkpPUitibkY2NGw4NHN2ZGpydHYzWXkyL25YYzNzYnZSakdmWlVEWjFMZWdtT25QcEQzOTM3ZnNMZjNQWHZydDg1bC9aNVZNc09JYzZrQXBTbGZxWHVlSnVBVVpJQlU4NTdRNi9od3puZFBGK0J5NFBIZzhMK25qU25BcXJWdERDM29iVjAyaW1ydm9hUUtMbTFzL3NTc2tMVGFnOFVUSjUrYW41djdtMnArOGNsblAvWHZuL3JtOTd6dHE1NVUrS29CenFSd3JQZUIveVo1NnoxbmY4ZjJqZGUrZi9mbTFXL3JyZC9xbUZ6YnkxNkE2a0swcXNoTTZCVkNGcXh1Umt3bHZ3bkR0ZkN4SllzMkdySVZ2OXZnZVlvOHAvaDk5MzFIR3ZpSCt0RE5oMzY1RCtYOCt4T0JGdjlZVTRSOWhwUXNuVGh4WTJuNXhDKzBqNS82OThmeTNmOXdiUFA2OEtzVlFGKzF3TG53b1c5bXZ2RHdJMnowMXcxM3R2LzB4aXZQdjIzNzJtc2tXb2VwU0pDNk4vcWFJQlNqNG1JdkpqYWxTZ1JVdzdsUjhJVEFHUWVld25zRnJUaEdtc0hqZnpkOFR0K1Y0TDJQY1RSM3dkU0ovUjMvdnJRMndYc1JDTEYwbG80UGxrNmQrZHo4M054UEpCczMvK3QzLytuL1BmL01YL3F4cjZvaTY1c2VPSFhBUFBiNEUzejExVmQrbTRMNW8vMk45WTl1WDNsNWNlZmFaZWhzR01qTk5vVmpJL2w5QVo0NmhSeUNxQUtDSUh5ckVBTlNBakJrMnNMd0M3V2NSMm9BQ25PWUVJQWVUQjRFNUdqdG9nWVVnQ2ZYdXBvTE9hQjVna083VGdhQVlBQjA1aGRsL3NUcG01MmxZLzlVcGEwbmZ1Qi8vaU0zdjFvQTlLWUZUbE5vOXZEMy9PQ1pQTXYvcjczVjY5KzRmZVhsaGIzVm01Q2k5dEVVbHFFeS8xLy9lWGpoaDhCcDhrdFNDY0dxd0FrOVR6MVVxMUxTb3o4TDMwaElWK3ZBYS9pUXJpaXFCZ3liMWphVTArNHhSa3hKZHdlQU45cUNTenZQNll1eFJBVFZicU83ZkdyMzVLblRmNzUzK2NXZmV0KzVZNE0zTzVId3BnTk9FMkQ0YlIvbzNQUElXMzl3c0xuMm81dXZYam8zMkZ3ZlljRzhwMENRNU5lQjR5ODhhaVFMcEpGQU1NRnpONExIMkFaT01kS2M0OVJBNTEvRGlOamFqeWNNaUVxNnVsWWtMVHpQQ0d0bm0waU5zWjZrTEp3YTUybEtxbHpyRWpEYUFhK2t4SzJwZGx0TzMzdnhLMG03OCtNZmU4dkZmN1gyM0pkMEJNNWRDQmoxbmcrMzczbm9rVDg4M0Z6L3NZMlhuNytudjNHcndreU5vNU9iZnVZdi9CQmN6VXliRkRtUDkwS21nYXIyZjlmR1ZJcWpBZ0dCUnJvTEtvLzFUMXlFZDFYU3dGL1VwaEllb2dqUEVIZ2diVFNNRWVTNUxvQnJ4QlJBS1R5aFkrckVlUjNqdkpBSGp2Z2NqaGh6eDAvSXFUTm5mdmI0WFBmUFBmKzVUNy9heE1MZDdRQjZVd0xuN2IvdjQwbWZXdi85Y0h2ano2eTkrTXg5dlp2WFlQTFpGSlZDY0l3RDFBamxMS01lSi9SSzliekV2MGFGYVdzb2lvYjVUc2pZVVEyNEhueWg1ekVtWU5jS2tGWUJhUE9hdlBoZDczVUtyK0pCNlJrMjdkcDhSSkFiRFZPSWg1VGhuejgyckJTNmk4ZDc5NTQ5OVRQM21ONG5GOXZKRFRTbzg5eXRBTHFyZ2RQa1pSNzYzai82QWNtSGYzTHoxVXZmcy9uU2M1VDFkbS9yTmVwZVJrVEF6QlV2VU0rRG1yelBTRkkvZ1drenRaNjJjV1JCQ015d3B3MVNkaENFSURSaElkUVJDc2JsTmNhVS85YkdGTUR3anlsL1J5ckFzdjhPOHFhZ0o4K0lRWklrK1prVHk1ZmZlZjdFSjJqUSt3OExuZllHR2hSSDdqWUF2V21BODlqalQvRHF6WnMvTU54YyswdXJUMzkrZWZmR2xaRWM1U0NnQ2IxTStMMXB6eHNXRklQSXFwTHpGSzB4dFNLcHA0QUxZRUFxM2tiWFNBSHZKYW9nTkVIdkdvcDhKM3hmSmhoZHlMVXVRajl0dE0xOUFzOFZBc2NTRDFLRWE3YTRXZ1dXZlMrZWNDSE10VnU5QzJkUC85TDU0NHYvNnluV253VndWN2Z5Skc4R1QvUGdIL2dURDkrNmNlT1A3OTY0OGtPclgvNGNEWGUzUjBLcldmT1pTWStiOXYzbTM4WFlVQzlVc1JFRVlZNEhLZnlJQWNEaFhsQi95L1lFQmdRa1Brd3JGMUl4VzFVY0dBR0RZYnhLS0xsbFZlRzJONmFTL0lEOXR4aWJweEhaeDRNTmpIYnZXOXpydWx6T1NvNksrejRWSGsyTEFRVFlHd3k2ejc5NjVWdldOaGZmZWVITXFiOS9Oc0hmV213bjF3SGNsWW85ZDVYSGFhakowT2I2MmlOWnYvL3YxbDk2OXNHMVo3OUU5VnltRUxvNEFIRDI0NUdhdkUwWXNvVWV4M2RDVDJ2UENlbnVlbjJtNGwzY0w0L3JNS2lNSHNob0RjbDNGL2lPYWwrN3NUTS9PaUFhNEdvOUFZbGdMSmhNalRBd29pc2hwOVlDcGV3NnhqUko4bE1uVDc3NDZOa1RIOTladmZua2cyZFBEZTgyejNOWEFLY3BsM25QOS8reDFwNm1UdzYzMXY3QTZqTmZQTFo3NDBvaisxVzVRemRjOUhVS2V0enhHR1hUcEpGbHE5ZDQ2c0NwNUNrTkxKdG4xWHdWdnpMVVZxT1lSOFRaNjcxdGpuSU9xZVB3OFFnZW94MUl3bHduTjdyb2UwT1IyMVJETnUxSWd5TFBLVUk3QzBRTDNOSGp5UXpNejgzdlhyeDQ4V2VPNTNzL2NkOVNkK2R1QXM5ZHFYTHo2UGYvOE5mdERySXJteTg5KzBldWZ2YS9IdHU5L3RwSTdXVzB3aklLQk8rTmFFck9VZ0ZoOEJwTkladVA2ZDN1MjBySVpyK291TkRyeitNbG9RUlZPcnY4UGJ1ZExYeFZDaGk1a2M5RlhtQ3ErbG1ZeXU5S0VDWXFWbUNtNG4xeTdmRXlKdndrSmpDNWpYSEY1M2JQVTN0OVMydHI1TG5COXM3dS9EUFBQZmZEeisvcXoyMXBPbzFhYjlPay9zTG9jZmJMbW4zUEQzNG8yOXY5ZjlkZWVPcjQzbzByTUxyS2NOSUVzRFQ5RHRXcDNnWVBNaTFIcXRkWkpyRnNUUlIxL1RtTm1BSkFsY0UzWTNPVWVqZDB5SjZoNW8zOEFGem9YWHczdGdsR0R3cVBWdlN5V1ErU0Z3WFJzcmZORjI1ejMya0F1RzRGS2J5T0w2SnFNWVhIOFF5ZTk2UUVDM0tsR0NkUG5yeDgrdUpEZi9LOXZQMExkd05wa053dGdIbnd0LytlVkpaTy9xbnRxNWQvZFAyRnB4YXozZTNLclkvcWlmY3NTWDl3dGJGVDBkd1BRVkFQMXlZUkJQYWx5cUJ4NUQwRVlHUGlBSVJ3REZ3cFZNaE8zZE4yUUlmZVNVWUxzdVFnNk80U2hVQ29nNllsQzdoQ2pWT3hadFMrRnBqZGN3Z2c5cjBaR0Nnd1lGejRSOTV6TTRnTnlGQkQzaGZTN083M0laQmNzTEt5ZXQvV1h1K2Y1UmN2ZnZ6OUMvaFpIUEdOREhjRnEzYjJmZC9RenRvTC8zRHJoYWQvNy9hVmw4amtlV1BQY2xPYnpFZ29OZVp4SG16Rnp4dHlwRW5GMFBHQWt4SHd1SzNzUlZoWEFMMkJiU01pMU1mbWlndGI3TStLdFllb05wUDZGNkdDOFNLQXk1NDNKcyswQVNRRVpvWXV1c05keUNjKzJCSXdrd1ZLRVFhV0RGc0JjaEJJUnNQVXB0TWhRWjFMYXdPenZVMHZ2bmpwNzdZZmZtanhiRWY5ekdsbEJ2V2I2Vkh4UEVjcVZHdnlORXYzUHRoWmVNZjcvODdHcTVlK2IrL21WV0JNeTB5WU84Z1VGcXlwSjIxY2MyWVRjUFpiR3hyWFpURENuSTBoS1h4RnYrNmRmSmpsZjc5b3pLejFwWVVNbTAvOGdXcGR5VGQ1YXEyTEM5cVlrbHpJZFRtT1VEekd0ZVZrVHJISER0VjVMVGhMTm5pQ3dEYVRCcm9KTllDSHNyOXB1eTNuSG56a056Nzg5b2Mva2w1N3NYOFV3N2FqN0hGbzRaNkx4enYzditXbmJqMy9sZC9mWDErdGhHU1RjaGVhUUFnY2tZOVdRTlBmamFuOHk1ajNMWUU4YnNEdUVCZFA2WWtPWVh0L0lhc1paUy9xNExiZm5NZlpMNldVQlJiN09Sd0ZHQU5tM3lGUTFuckM5eDYyQVpFakRFZ1lSTHJ5ZnUxSHFlZHZVcEFKaVVvd0hQVHA2cVZuMy85TFJuN3B4SHo3dzEvVHpvNmNWdmFSOFRnMWI4Tm5QL3d0WDZkQi8yTGo1ZWZQNVZNS21rMDVqa3k0WEVPNjlvM3dPTlhRcFprd3FKTUZUWFVpVHdxRWdoMzFPbENsd1RTbytLTXlFVm9WKzZncjVmZ216OXdZNUY0d0VZRFcyaEVHenFzWUE2MUxMMlcwN1VqUVlxb2VSNlE2WFdxazRuV1VZaGhqMEdwM2NQcitoMzc5MGVQZDMvSkFxbnRIeWZQd0VRUU5uZnZJdDM1dHJzMi9YTC8wekxuaHpsWUZCTk5BY3hBYlljbHdlK3ViNnJXZVpxSWdmUGVFSUswWnBjQ0QvNXFJaHdvN0Yzd3pKRW04N0ZUeFBNNDlLV1pMY1FmRUF6T0JXVms2bWxBaFVJaXI5RG1QME9tak55blBualVmSzhjTUZtUGVCbG1XMndKc05zVEtLNWZlLyt6cTFtZFdjbHFLSG1kQ1huUDY2ejUyY2RqYis2dmJONi85SGozb2o1NEVvc1p3YlJ4bDNFUUd5SVFBU2pCZU4yQ2N4eG5uZ2NZVlZTdmFBOEc3cW4rL2FSNm5DSEVDcitxOWh1MjRybExQWWY0VWVwNVE3TU8vcHp4bzFQUVhzUkdEUERlRnQ2ZzNmeFpqQ2U2eHZuY05FR1NaTHRpNjNPVlA0WmgyTWFwUUN6OXR2YW9FYmF2ZHdlbDdMMzdtNGozbnZ1dnRzbjMxS0hnZVBrcWd1ZjkzZmQ5WnNQcnA3WnZYZnJjZTlJdVl2Wm84MXY0OXBoQlovLzFac3c1cStNSWhlSis2bHdpLy9OVnI3L1RUWDVFSXhYN1E2ZzJGeW9WVXdlc3dsNFZlNnpXNExFNVM3V0oxM3l1cGNRcUtyMlJ6S2lwZnh4OWpKaTQ4a3YwWmdSWFZpc0hsOHhPVlI3Zm92blpmMm9lRjJvSnNPQmhnNWJWWHYvN2E2dHJQUDVuTm56MEtIdWZJZEE1Yy9MYnZPZGZmdlBYWDExNTU0WGZsL1I0MVZ0YjNFWktONnlJWW00TWNRb2cyQ1N5Tm9DNCsyLzRoV3RaanlndmUrNVdtNCtRYk9jdC9zd05DOVhjVTE3c2txTklKNEVNNWg3eWdWb1FDdU9VeXVUSGhKYWhTb3dyRDJxSUk2MWs1eCtnTkIzMWNlK1dsajJ4dmJmN1R6Mlp6NStvMzROZTd5eUE1S3A2bXY3biswMnVYbnYydXZMZEgweTc2V1lxT2swWUNxcndXcGcrdUJWZHJFNDA2bXNmUVZETERHRE1WOUtncDFCUmR5YjYyNDJveS9xNWVEbmhLcGFCcnc5V3EyQWNUUVloczU0VW43UUx3TVpQN2ZlUCt6ZTY0YTN2aCsrOFRRMGdYcktBMEFWeDh4elVYT3RwMVFpU2s2bzBiU1NBaEdLT2hGQ1BYRE5uZHhiV1hMbjFNN24vdzUzLzkrTEh2ZVgvYXUvWlY2M0V1Zk1NM0o4UGRuWjljZittNTM1dnRiRkhZTzRhR2tHbGNhSFlRTXZoMkh6ZU5YWnY5dlpheks5TlNUaHBWRXhueEtKTmVrMFpDdkRMcFo2YVJoQitnb245TmduRUZWbHdra05RVU5nYjljcjREd1M3VnBoR3YyWlI5ZWtiUTUxcStKdFRiM2NYMVYxNzg2T3JxclgvK20xbjNuamZLODd6dXdLbC9NSmsvOXAyYkx6LzNIY090ZFJybG1nNm5EaE42aWFOVHkwRkRTRVE0eU52ek16aWxObHBWYjhCM0pmajE3eUdKUUtDcVdnOUdtenM5SzhiTXhjOVVrU2U1OXg4MmoxYStqOHJuS25JZWpJSzhITWlyeXZYNjRteXVjd0RBM3U0dWJseCs1Y01yYTJzL1h3L2J2aW84em9Wdi90MzM3bTJzL28yOXRaV2xjWGZwT2dGd0dCZitZWUZudnlIaitOK1p4dmROem5WczQ2Y1VnMnFoMTJnbVRsRFphajNheFUyVmJ1NlF5R0JXeGU4emMzQitQRDNObGVHMk1vK3E1bE9nNWk3eUVEUUFLdXliRWNFd3p5QWk2UFgyY08zVmx6K3l1ZG1jODd5cGdCTitvQk9QdnF1VkRZYy9zZm5LcFZQMWlqYk5jQ0hXRSt4SmVVWFQ3elN4YmpSRGVNVzFpM0thSjZPR3ZLaWFkelhVTlFKQndQcjdhWnI3SVI4K0VUc1BJcU1NcEVkRkVHNzVrUVJ5anh0OVhoLyswY2c4VVFHeWh1TXpqcHdna0J0bTQwcHRKeHpGS0c4aG9UaWpWTWE0dGJia3dXQ3ZoeHVYWC83b3p2YldIei94Nkx2VjZ3bWVOOHJqVU91ZUI3NTVkL1hHRDRqcnBtZ0NUWDMyWlJMOWZOamVaMnJIOHo2OVV0UEZYODFMU3VhcTRqVWEzazh4LzI4YUpLVDhMQTltUEU1RUkvbUdiNmNCVlJrd0JBQU5IMDhqM3NjVlNsSHRRU3ZyTTJHNFJoVjJyU25Fcm91YjJERUlDNmJ0elUyNmRmM2FIL3VGSjcvd0I0dEZ4SzhEZUY2M0FtajRJZTc3Yi8vUU4vUlhyLzJMdGFlL2NOYm92REpudjE4cWVSS1ROdXRuTS9WWi9obkRyRm5hY0l3eFVFcFZXMmhjWTJiVDZ6VE44WmlHVG9Td0VJcUEwZkw1VFpNMm05U2V1S0pIN1dabnZFcE5YaFFuM1J5T0NUU20vWXhPb0hianQyUkR5amtkcmN2dDJmNkNOMkxyTTlxMTRoaGprT2VXZHRaYVY1WUdRMFp2TkFoQ1FtWXFPaDlPbkx0bjc5Ujk5My8zYjUwZi9wdW1jM1hZUlZKK3ZVSHpydS83b1ZUeTdDZTNYcjEwVnVkWlVZZVlCSm83NVcxZXI4UmZLdFY4QTdiMDBoalNna1kwQWhwclFJVlhvRkYyeldtMjJVUi8raW11U3p1VmpGak5Rd1Q1U0NWa1JSaldsWVZTS3QxV1kxMkhRSlhQVTc4clZiYk91YzVyTVY2TzF3TGJxL0dzMzd3MnQ3MTY0Lzk4dmNpQzF6VlUrL29mK1F2VU4vUy9ibDkrOGJGOGUzTUVNQ0V3bXFZc20zS0ZTZlR2dVB5aUtleWlwci9QRUs1eEVGSk4rdjA2UUtpU0oyRmtjSzNvRzl0SDkwTWxQL0V6T21LQ01XcFVydjRTSUZ5Q29FWnBGOU9hUVY3aXc3TGk0dWRSTnRDdVRheCtUbTRnSGFwQ0phTjVsdTloOC85NWNSNFBIaTlsbFdVNWJseCs5VjAzYjk3NCtTL3k4YlBUMk53akQ1endEZDlhdWZtQjNaVnJQN1J6NVdXYUJvQlpxT1dqWWpKRERqV0pvUEIzNmxCVHNIS3pHQ0VVcGxQcnM4S05ndTZCZWlkQmVVSFhQNHZQYVViRFZxbTlmbkVqS3F2SWxUcVIxNTJqTWNNZ0lrNGkyQmpiWTJlMEc4bVdRa25VZStkc09NU055Ni8rbG8yVmxSK3Nrd1YzcmNkNTdQRW5PTi9kL3FtMVo3KzhOS3NjN2QxazBwQ3I3RWUvclFvS0d2dTg0VVNvRFlkdU41UXNBVkpjOW9FZVFQRmZBNGxRQVgvZ2lhbzNDMVFKZzFvb1htL3JHWHV6QktvYkZJeFYxdkd0T1Q3dkd2VDI2UElyci96WXYvM0Nzejl3NFVQZnpIZks2OXl4bHB2Nm03eng0Z3ZmdHZIcUN4OGFicTJEM215Z3FjdFIrVENwUmdMTVFteUU0VXVvQ1JjQ0tNeGJaaUZCdklhYmI4TXh0VFlYNi9WVUlHWllwWnlieDgxOThkUUVucVYyRENUc0hIQWoxNmpYamV3bkZMR01uVGJOTnlXZjk0V2hudC9PQURCQTlsam4ybUJuYTdOei9lcHJmL2IvKzlRdi9lSmJVN3gwMTNxY0M5L3dUWjMrK3NxZjIzN2xCYUlKOVBJNCtua2NKVDBMbFJ6RzQxTTlCcXJEYTdPR1oxeDBDTlBJYTA4S3FlcjYwMFQxejRtR2kydzg2MGRCNk5QVVpVMjFTdWZJMjNLYkNQeXdLZGVxK3FONVZPMTE2dSszOWhuRktleFVHa0VEdXJ1VUM2NHY0S3B1WE5DK2xsTXdmZlo3ZVc0WjJtR2U0OGFWcS9lOXNycjJNeHVhdXZVYittRjRuanNPbksvL2tiOUE2dlNGLzJQajVlZmZaL0pzNWp2d0c4V2V6UnBlamRWZ3cyRkk3RGFFUkJNZTQzdkowRkNZYmZScTdzcHZlcHRoQVRWa3dyakdmaFZqMDhXb0FGVklDQnFUMTQzMDQ0WEtPM1hVVlI0akl5RmJLVm5scDA3ZFZLclJHR1lEM0x4NjlSc3ZiUTIrSFRqOElPZU9BQ2RFOUkwWG5qNjNmZjNLL3pEWXVGV2RSanpxK2NvaEFiZzZOaTBIK3Z6alpvc0tBY01BQkUxQ2c3T3dmaUVaNE5NczVYdlRQS3ZzNTNLWXhvQzluTmVwSzZsU3JjMmczcTlHTllvNjlFYVZJbS9SbDJjS3VyNEtIcmVSVGh0c2JtNjByNjNjK29tbiszei9ZYk5zZDlUalBQYjRFNXhyK2F0YmwxOWNJT0N1cThFY3B2ZHFHcWVldFVoYnZ5T1B6Tm1FT1ErUFVSaEZ0UzZDTVEybDVBYlFxaVVBMUVZQk1KTDh6OHArRmoxdkRmV2JVY2F4VGhBRUhRU29OclQ2MEMzWFhnUGJGbDZ2WEwvMmp0V043Zi9wc0ZtMk93cWNsVmN1dlczMzVwWHZNdjI5eWxLbGtUdHBZMDR6Sm1ScG9IUm5TN3BuR0g0TDhwWEtWOFA3NHpFWFo1UCtXamg3MDFTckttbHBybDJjTkJKT2pRdlp5dFovdVA2ek1BZmpJb1NVV3RKU2lDbzJmQmhUOU11aE1oVmFQbHhHU0loUVdFU3hxdVk5VWwxM1V2RlVYQjJDa3pHaFpDaE03MFUvUXJFUkhjaFNhYU14R0F6cDBtdXZQZjd2dnZETWJ6M1N3UEV1OE4vdGRqanI5Mzk0NThvclBDMjJQd29kQVRTR0tKZzFxSkp4Q1h0RG4xb1Q4RU5WMEhDa3VrbElaTmJ3VGpGUHJPZFVDNlVTVEpBR3hjMEcxbS95amFla3lFM1J3dU9lamFreVFoM1MzWFVDWW5JdHIvcFZ5UElHREp3eEdscGJ3bUIzYTVPdlhydit2NjFvYmg5V3VIYkhQTTRQZmZ3UFBiSjNhK1cveTNlM1IrN2NreExpSmk5engwRVRlb0VENWtSTjNxM3dUZ0d6TjFNblF6QlNQZXVZT0lYelBEWFBYU2xpb2phZlE0ZHgvQUxOQWFvV1ZhdXl1MDJmczNoREZRWFJjU0F0MXM4ajdDWW94VC9LalhFV1BFU0VMTTl4NCtxVng1N2VNWC9zc0VLMlF3Vk9pT0RCenRiMzdsNTdaUUZ1OWQ4MGxmOGpRd29FclQzN0tXSk9HcCt1aDJUakpIUHJMVUxqOG9lWkdMcEE2WE5TdUZyVWNZb2JSN0EzRktPZEFJM2hVOU1hZ3lDazlYbVhqTWxmU3ZDTjB0U05vWnE0eWUwZ0xEREJaelVCZUhKdFZYa0d2VDI2ZXVXMUgvbVZyeng3NzJGNG5UdmljUjc2MXUvcURMWTIvdmh3YTdPeXNxL3BJZ3A3b3NLdk81V2NUMksreHRXWW1vQWtxRXBKVFp1YnFYLzJTU3RGNmordno4TFFoSHhwNUFRVGw5cHBEZUZlWFpldGlicXV5dlRLU0lBYmVyWHcvZnRHVHovK1FDTUVnSHNPcVlheFRiV3JrbFdyWGgrK0ZRZmVFNGtHUkFPQllvNlg5cjExODhhcDYyc2JQM3dZWG9mdmhMZlJDOHQvWXZmNjVTVXhldVk3NU4yMEdVNG12T2RwOC83anZOR3NaTWVrNS9WTG9TcU1HemNQNzFHdFJrSzFCQzlrNEx3WGFxd2hFWStPV2pzMXpxYUxIK0cyQkpmSCtVYlhldGc1S1JrVmtXclk1bnJhVExIZjFCUmoxOGFOT2d3SEExeCs3Ylh2KzlYZi9NSWp0K3QxRHQzam5IajAzV3F3c2ZZdGcvVmJ0NjJ3K1dhMGcrOGp4VWdlVnZlQ3pGUXRobzY1N3NhRmtXRVN4T1BHcmxIdmNLYmFOR2M1bmxDRVhOUlVxMm0rSFZYSERwcnA4aUtNOUtTQVp3dE5XUWdGeXJxT25SaTFjcjNyYTJ2SFgxMWQvK0g1c3hmU0k4V3F6YjM5YTcrK3Q3SDJVVGhoaGJ0NXEvWHJBNXpaUUZPL21FYlpOaGxsdndveDlQQ0NyUlpEL2NWdkpuUkNWQXVSVXQzUzVtb3FUVG1acW1uaWpaUVMvSWFjRWFaeGtyZVh5b0xnOEFaZ1VFN0ZHb05DM3FvY3dOTXdXbVB0MXEzdmVPclZLNC9lanRjNWRPQ0kwZC9aWDczT0NFYUdKN2ZXQjJxVEZMYlUzMzYrVTg4QnhuN2hZR0tFVFRuUXJIbFhrUWN3amVSYTVVcjEvZERwMVMxdzRWcVErbXVneHF4VkFDSUlsdVdPTm9NcVZxUDdlcHdIVWF4Y1U2b2xoRVlSTURxeU1KSlAxc2NZR21TdkpubmVRcm8zMkNSbktxdEtCTmR2M1RwM1kyUDdEN3gwWTdWMUpEek8yMy9meHhQUjVnZnEyd1VPUW0vV0w2YURFQU96UFBadThJY2oxZm94WVBUSmVCaXV6WFFYbDhwbXFDcjk2NzFNY1hNcmhkbnJNcmIxOGZEUjJ0UUI4amVNYWxHTUxoeXVGcDZMOHg3dTRuR2ZaWmhsR0E0emV2NjFxMzlvMEYxNjZLQmU1MUNBNDE5dzBKci8ySER6MW5FZnBoM2s0amdNVnUyckxUd01wejJMaFZBMUlZODZXMldtckh1c0VBdytuSE90TEw2aklaemxNWldRalFKTmFTb3A2U0prbTB3NVR3eHZwVm82S01Pd3FwY3NKa2ROV1JBTjllYXVyNnlldXJhMTkvR0RNbXlIRzZybCtwdjJibHdoY3dRdTNQM1dZWTQyTUNaNzM3cHF6aVJ5b0VhZVZSc3lnNzA1bGR4aFpEZG9HRTZXRjJObDZyTlFCK1ZxY1RiMEpUTjRvYWJPYVlGTVhGVXBVaXFqK21XOTRhcDYzOHQyNWVicTkvN1NGNzl5N3hzQ25HQTNZMHNQK3orY2JXMDA5bkdOWGFVdTFWeW5PZmVoc2FDWVZnK1pPcnFNNXMwRVJkMmhkcUZKTFVFZnQ0RTZERm4yQS9MUnRwdnB0TFhQRGNxdDBuWGx6TEtEdWttR0t3UUhBakVPRlNoM29oYUsrYnhES1lXRUdZbFN0bDRTTHVzeXdSSXBONkZtbCt2U3hERndDWWFpd3BHQytob1VZd1JrREZnTXlHaEEyeThTVnlGMVh5SWE0cVpFeGVTT0pNaXhlbXZsck43YmVmZEJ3clZEOHpocmEycy9PbGhmYVlsemlRY04wOTZJbHB0SmxLMmdWbGx2RkJZZjMzUjZPRlI4V1htWENibUFsMHdLR3lUcjRCNm5uT1BYZnloM1laZjVEU1ltK09HTmdabWdHb3E3aWhWWWNmUDhUME1YOUxnRWROeWhyRyt5RTljakI5UnVzSUUrbTkyQU1LRG5yNjMrNlhSK2NlNE5DZFVlZS93SjF0bndtM3EzYnNKb1BWUEMvVWIycHMwYzZyay9mZldaQU5jNE9UNm5xaWVvYjBRTlN3UU5kRzExSmFMWFdKTlFpcXFoWUIxMkM5UTdQY0pReXdPWHVPcEp3bzVwYVVCRE9KZlRSSzBMSm5XM1Z6czUvSjkrek5wSG5vVTZUcTFBbW12QmxSczNIL3ZWeXpjL3VGK3ZjMWdlaDFua3c4UDFXeEIzY1Iwa2ppYzYzSmFiZzVxcEtjdVVWT24wYm9FNzQzRmtKSFJzcW05NGNnQWpvaUhONlBMZlo4VmppNTJUMk03eTh3WGo0c1FqVFRsVlpvd2F6L3RZWW1mYysyOWlSa1Vxd295bHB5bmhhTFF1d0FNQS9kNGVYNzYxOWI5MFQ1N1pGelY5S01DNWZ2M2FOdzUzdGxUVzI1bW9sYlpmQUkzM1VKTnJNOU1JZ3BHK01veE9mWEt3QW4zYTZxY21qek9wb1hQYys1Z1dxakZUWlNBdGZFM2JrNmFxTlJ2TWRoTXkycmljUm8yNGZ5WkNVbXZTaGR0V1VFM2VuWGZXdXBERVJkQTRHdVpGSVRDTGtZTlFjd0Uwb2xFOVBxaEcwZEFxalhsanRYblhlMWE3aHRGcUZLeXRycnozY3krK2R2OSt2TTZoQUllSnZyRy90c0l5UXlKOE4xaWxqV1VNMGNFamUyUmVQMnQ2N1dsRVJUWDhRZU5ZZ1EvZjZyMWkwdUNCQktGVXI1VHpQSFc5dERHelY5WEZ2SExBZ3Rwb09GcUVvS2l1UDZsRUMwN29FQUFHV1lhTnpjMVR5QVpmdXg4ODNEWndIbnY4Q1dhUmovVnUzU2luRE4va2RSU3A3NTZad3BMdDkrY3pFeGMxWVBqR1JsQjF0NlkwWmhmTjc4bUVLd1VkZlNzU05sTktRNTdDZ2V6dC92T3hjdVg4d2FBak5RQ0hvVmhSQ0EwOGtuR3NXNjd0VGFMWEg5Q3oxMjg5bm5UbjVsOFg0RGgzcGlRZmZrTzJ1VDQxcHQ5dnlEYmRWVTk3anVadTVGbXA3T0lnTjV3c00wYmIrV0NoMkNnOVAvWWlxekY3cGRZelRYMThKY0NwdGZWSVk4aE1OZHA2MGswQ0JRWGRLTzBiL241UnJNUUJyeFZwelBIQ1RtNEpPN3pGUUV5MXV1NXZBTnBvQ0FUWFYxYmYvdkxhOXJzd295TE9iWHVjVzdkdWZZZnU3YWw4MkIvaDVPdTFpZHRoaVpxNkNtYlJIcGcySXpPclI1bGw5cVgrdXJPQ3MvNmM5VjYraXY3YURNUkU0VG5xalo4VnlyWkc0eHJURUlLRkxGM3pEVXhxT2dNSWFtTktqWTRjMU4yMFQ0WEdiYU1MMlRseUUyd3NRZTJtbkFPRndIamZhNy9jcUlHdjY0alc5blA2R28vV3hmUHM3ZTNNYmUvdS9IWUE2ZXNDSEVYME5kbnVOb25XaURiZTA0M0xQVWJGR0VkWGZkVEZDcHVaUU9PS24vYTZOQWRZM1NoaUdrRFJkRE9zYnBFTFY0cDQ1VThUVkxiRDZjK1FHQmg5YXdkZjV4amVZQ3MzQUVnbDcvSHRTS2Jpa1FTRFlVWlB2WGI5ZTFTcnRUZ0xRWEJnNER6NXlVL2dzY2VmVUViazIvdWI2M2VjUTc2ZHZPQW9nS2pLM1plSDNjdmtqazZjb3BKODcvZDFadTBES3p2RVphSlhGSXp6bkR6eFhDSHdrbExwbUIrOTJNdjNQVHNiVy9HZ05XOVpkRk5VZGdOSkpkenpOUjhBdUxHNi9zQ2xXOXVQemhLdTNhN0hJU1o2ejJEajFxSGtOUWU5TUdkWnIzRzc3K1V3d1ZwdFhlR3BzWHdacGtwak5iOVMyRFNCcEJPbTd5bVZrYmlzT2FxcUV4Rmh1Q2RoWDVnWlB4NCsydGxOVTVPeGNEcDBsblNuQWg1cHlBL2R6VXBNZWJQdzR3ZWJlNzNPOXU3T1IxK1BVSTN5L2g1bHRUR0NKclVYYVpqdm1OUU5YVFRtR1dsY0I3aWZDN1JKeTIxU1hqUHU5MmJWYUp2VWlEbmJ3dDNSQzJ0YVEyVFRidEE2Y1dBS2hpbDRQOGFNREtlVkxGMm80WXp4TFROaHcyYTRONGVhcHpucmkzMWxoSTV1YnZTcDVsMEJRZEl3UFRvTEx2MkllTEdGVHVmMGxXdXIzLy81UWNwM0ZEaTNWbGQvWjdhN3JjeHdlUGZSeWFpcVc5Wlp0Q1lRTlJVZjkrdGxad0YvMGVHTTJjTFNrYnBMQThCTmc0Sm44VytNanBqNkltVHVTQU1tR3Z0NnpWSEFQaFI2S2x2YmFsZDhvM29QS3ZNMndLZzZUK2xscE9JVnBkNVpVSG1NNE9ycStxT2JBLzIyT3dvY3hmemViSHVUNmtubDNaQjMwQmpQRXRaSi9IcU13OGlySm5uTWFsZDBtT1BzUDFFT2xacTgyRjlsM0xoSitTZmNnTzI4ZktpK1dYZ3N0OE1UdFZCd1pqNTlUTmtoN0Q0Z1ZEdEVTbzJCMFE2UE1MK3B2M3hUMWxiVWlvSjZsZmM2ZG1ZSDZQZDZiSWkreXkvaUhVY1EzQlp3ak00NTI5bkNyQjBEcjNlVmZScTdSUTB4L0xqd1RHYk1xWnBBc1I4YWUvVGFvMzBkMTNDMm41bXE3NkcreHJEWU1XT0tSYlpGNFZORzZlMXFsL2o0ejFOTVhFNjZMbWgvbnhFSWk1aFNFUU54enJsS3FFaVoyRFRQNzRTRlVTbitiYlRHeXJVcmo3MzI2ZjlFZDhUalBQYjRFMFJpSGh3MGpFa2ZwSTR6clZZejdhNC9xVjR5eSsrT2U1MVo5dVZNeXBrcUY5K1lDOGw3R2YvekpyRytVTVpwWEhkMlZhRERDZlNoV2dPcWluYzBoMWkyVWJQc0w2dGZlRVErOXpSbzZ2MnZMQXlld2dueWhGcGNNU0lRQXF6b3E2bTFqQXBBN2d1T2NpNmFPLzE3RlFOQ3JUN25WeVVXeDEvUTYrMTk4UC81cjUrNy8wNkZhZ3JFMzIwR2Zid1piRCtoMkt3RjBIQXpXNzNvMkhSajJjK0srWWxFQkVhYkpTZEovSXFVRjdBUnFRQ2xVaHNSMDlndEVlWVBFR2xjT1g5SVoybGt3ak1NeUtyZDBLUGVXeERvVEVzNWJ1RDEySHpPZEd0MTVkVHpsMS9sUXdlT2ovdEU1Mnl5SWQ1TWRoaUxyNXE2cFprWlNuR2pOdzRuRyt0VGpvMTFpMGtlMkRjMStzMXNyczVDVS9LTSt2czNnZUJmbWVpSHdvZGhXMHN3b2d5TUhiODROUENNNllRdUlxNWFLRm1sem10MHVtY1BIV2kwTnVqdDd0Rjk1ODk4eXgzeE9GdGJXdy9vYkVqVEZ1RWVGVEhDL1JSUGIvYzlqMnVEbVpUUHlEN3UxREpHZHRlandFNkJqZzZ2alFOS0NGaWFVbnlzTElPcUYwZUR4cmNtN1RQUXRIeHVqS2NJWm1vZzQ5dW95ckJRcHBZR1pGeU56QmdZbldQdHh2VjMzaEhnR0dPK1YzU3VkSlpOUExHelhvaVRkTThPR2pwTkZIUkE4K2ExU3VoMFNNQ2FWQThxcWVkSjd4U05hOXRIangrcW9SSkdjN1hLT1pTeWV1Ni9QRGc0NEt6dDNobGRBMnd6b0VZdTVMQ1hUZXBBR0gxODVUTlZ2Sytnck93R3packFTQXRRNlpuR0hIL1VnUzBWWFdwdEJLYTM5Njc2MXVyRHlYR01ZVDNvNDZoUzBVMGIwSTVxSGhVdWxHcSt4UGZmWUZwbkJFVmtwcEVYUDU0UUt2OFhCRVZZRkpVcUZWeU1JS0E2SWpBaTQrUityM3JuUDlpS3gxbFl5Y3IrVU1HSWNINDlqek1PUkJzN094K1pPM2ttT1ZUZ1BQYjRFMFNFQi9LOVhSemw1azQ1QWtDcEEzaXl2Tk80YkVTbTFuUEcxb2pxeDJJV0Q5NzRHYWppVmF3Q0VRYzVUMjFLdHY1WlpUUTNDNldiRGpxUE16NzBCZERVNlYzeDVlRjdESWJjak1IR3hqbzk5Zm5mcE1QMk9Dd2kzNVB0N1J5cHUzbjk0anhvcG5Jbk5tTlBLNEJPZHU2VFAwODlKS3NvZXphbEZ3MHJyZXNGemNyeTNZYVY5OGF0Q2l5SWczb2YzYmh3TXN5QlVJbVd4bkYrRS85ZEhXc1hVQTBFNGQ5RnhOTFZVczRrRmZVY3h4cENCQXdnR3d4Qmc5N2hoMnFpTldYOTNyNHZ6b01rNkUwandTTWdHYk5QdENtK25YVFJWcGNzVmR0enhyM1BKb3E1RHBaSitndmpBV2d2aWFLUU9jTmpxdEpXTXBWQ3E2eGlKMVRHbW4wUFdyMmVJclVMUDV3NlJTMS9xQjlmZjJ4dEtCaUVjVzRzb3RvTzR4OERFTm01R3FwMFVvdVg3QXhZTlNsOG95K01rcXRoc2F2eCtGb1AvSkFiVEtINFl6YzEyQjYrdGF1WGswTUhqdEU1OUtCL1pGaXpnd2lEVEFxcGJvY0l1QlBIUkdSOERqZjEvWXg1TXIrbElLekxWRG9EYXVIVHhDeXB6cWlGNFZDZFNoN0xkTlYwc212RVJ5SGtZbW8wODBnY0pqUDRxdEU5Ui83ZnVUYUFHRktRTzBBT2lKQ3Y0YndaOXQvVW1iWkpja3kzT3h1MGY5WVFsWTFtbFJ4aFA1bGNmVUN1Z1pYenF2NitZOW9XYjgza2tXNUloUmp3N1QxTlF1a3k4cWpxRGFycE00MCtzbHpyVWZWd1VxWEdhM0pSbFNoQ3FpQXYybThjS0hOdDhJdXZYSC8zNFlkcVJzTU1CMGZtd3ZlckhVS1YvSW1qeTdVVFJqUGtIRFRESFg2YUpHNlRaNXJ1TlVaYlYwS3Q1bkdQSWREa3JkTjFLam5jYzRPcUhGUTlSQU5HS1c5L2ZJdzJvMTNJVXFQTmF6Y1JUekJVUEg4TjdCS28wOVM5MjdpY3J3QUYwRERXTXRvV3BGM2JreEdocmIzaDc3Z1RPUTUwbGsyOE9LdlZjVFB6UE11MHZHWS9vWnBNU1RuSHRhdzBzMTc3YTdnTWM2QnhzejZUbWlYRGQwLzE0MW03TTB0d2R5MWV0MGxEdGtsMUZGV0pYS2sxNkRXUkE3N2VNUzV2TGQ5ak5iUkNVSzIzeTUrcWxIUVlKdFp2Y29McVo1d0ttTnJqMEFENXBtNXEvMW1HZW53YngyMEJ4eHhnbmNkUm9LZG55UTlHV3RnUFdkSzJmRDVVUURRcTcwNk5oYnhxODZnMDVrQmg4WkdEN1d6akNwbEZVaDJPRkJEVjZQSlFNNjJrb3FYaHVjZHBWamR0T3FoN2dxcUVMV3FoVlczdVpscisxWFFEYmpyL1JRSFphazhiaks5UjNoWTVjRGNKRUVvRENUREpJelY1a2NNaTNxc1hZeDAwSWNFYXJOU29lU3RMTmROSU9GTHN4NUhweWorVlBaMHV2NkRhMm5ZTERsTWR6MjRRT3FUNmhWd0RTZld4TXRKeFhYcVprR1F3RlcxckNYOEdHZGxLTXNzU3NhYWJaempVVmh4RE1VQ214K0lqT2NpSjM5emNmTUJrdzRweXB4eEFWZVdvR2swQTNwMytmTXhVYWZTY3hLYVZjelBOSVY4NFdUbnFOVkRVWHZ6VnhEWGhqVXFlVTFuSEVoQVUybFJuK2FYME1FMkFyZXVwMVhmL21HQmp0QVQxRmZJZHpQVyt1Q0N4bnlWc0MyOVBGUzliSUpMYzlJSWdaZWtjcXNjUll6NXE4b3ozY3crZUpBbzRMVWM2Q04zYzVFbWE2anVFOFNjNkhLK2U5YTQyTHVhdkpzSm03R2Vxeit4TUVpUVgwNlNKWFp1cXJJOFdqQWdGVXROMVdGeDhPcGdSYWhvYjk1dld4aVBkUDg0NFdTWlQ1RGVGOG1hbGZqTjY3TVU0VFRWVSs4dklQZGU0bDU3RTZSYzBmVkFVcmVSQjJzQU04dy84NGhlZlVZY1hxb21RSGc0YjMrbWQ2ZzNiYjNmenVJVlI0endNSDZJbnFTL1ZuZlNaeGs5SmxteVNHZE1OVFV5VmZEL1VQUE9oVFhYRlJ2Mm1NSHFYdHVGYTgvbXN5MWI1dit0YS8xZjUyakpDQTVkZ3NZdHNtNVlGTjg4dWhhOHBoM3h0b1pHSTJOclorZERIUHZxTjNVTURqbElLOVhFQ2VvTUV5QTg3UktNN0FQako5Wmt4UEpCVWxXcWFucXNJcmNMaVlhQWhYZmVVOVgrSG9vRCtRdGNtckhIQXpSQ1YrZ3QxWlZFL2FUbVpocCs4U1R0azFrVEtpYzFTODB5cSt0Y3lZWDNKZnZQZWVrNFdNSlE2RzlMT3JadWRROHR4dE5id3hVOFpVK01ZeDY2TW8yMW5xZFpQeTZORzcyN1RYMnNhQTNmUXg4OE9wQ1pHREpWYUJqVWt0ZUZDSnlHTXRMaUVBdU5Tb3h2cWVVb1o2NWZOcEtaV2YyRWk2SVoxZ2o2TVl6QzA2REpIY2FHa05tVWVGZW82RitHZnk1Rk0wSUxUU0pVSDFGcFRRNmpmVDlwMGpUU3B1WGxtRUVIdWFudFpwVmcvWXJRQmozRXVCL0k0Um9SRTYzM04rZC91WFhwYWpqTk9WT04yUVhNWVlkczQ0RGQxUTQvcjVKM2xPRFdPRVkrSlMyaE1YaEJxbmpGVGpmV3JobHUxWnBxSng3Z2lydUdheUVJYVBRd3ZtOG9BaldMcVRlTHJNdjdZeUlRVDNSUW1pakhJZ2Z6UWdNTkVSMHFFdG5ybmZIMWY3OUJqYkpyK21pTzArb1M2Vk5pckZ2YUN5VDdmWHluZXdjWEZTNjZ0dW1pQk1UTEYwNXVTREFqb1p3bjNkWnBSL2JPeXErQVFpaEpUbW5icnhFY21sQjFhcUdhTS9pS0lSRVNJaUhBVU1wc3F4WGk0WG1QU3h1ZFpmajdidTk4L1VNVXJ1QURGdHVseDRHa0NXT01kRzZXbWdBL0xCQkxVaDZUQ3NxR3BLVmFxSVJEcVhrVnFBM0dvdGVTRTRvR1ZFRThheUFNNjJKM0tBWjRtaHd2WUU4b1BEVGo1bFJlLzRLcWZxaW1QcVlSTlkyb2ZreWpvcGd0ZzFoNncvWVEyc3p4MlVqamF0RHB4M09jWlpRajM0VVhyK1FqUmFCcytaaGdmRHlpNGNaL0xtUHA2a09wRlhSaytxL1dqVlVQQTZzU2xxZFNSbkdhek5nWERaZ0dsL1p0d293Qk9maXBRb0lIWTFSNWwzY1dNNUUzbEc2bjEwUldET09WM0pjeUJwTnoyd0JDb05KRU53L3JRZ0dONWJsMEF3elFnVnhvOHdheDM5cWxDNFRKK2lmaXNmV1pOdVlkTXVOZ3JXbUgxL1p0amhOT25DWFRNSEo5UEFHZWRPQkNYcHpDcU5haUNNYVRxbEtUM0ptR0NYY3RucTdVMG9Vb3JpajlXNDBnREJLMHlvUVoxVXo1V2RxUWJDeG94Z0FNVkFvMW5lLzFMaFExc0NuTTlLQXFsbnNvVjZXZUlxT3FJZ20zYVNxVm16NUFjV280ejNOa2lNV1o4ejg4ZHlpc09zMFpVZjc1eGZXdzhaZkJzNW9Mc0lXbU5oYzJiUGdvcWhjL0w5NktZaS80MG11U0pwYXE3SEtRQ2hiY0p0NnVGbmRQalBrc1RNVk0rUjVQSWV2M0dVZTc3cWVnLzExWXIzc25WTWtTRWM0dHovK1JEM2VIaGtRT3RoU1ZCa04vYzZmck5uUWFtVEtERXpUN1hzOTlKMElUMWwrSU9HZHpkZmZ0SW9lSlozL0l3SlVRMEFYczEzdU5Wci9TbXdxcXY5cGRxbndoeUpUT3l5eVo4VGxQMHB3V3ZMZFUxanErWGFTTmp0YytTMjBJbFptdUEzRzhkcDVsT2JFNzZhY2FRc0trbXNxL1huMUdCVThibWRKT3pzSHJ0cGg1bVRuOS9rK1dnWk1LcnM1OEVOVktWY0FyU29wR2RyTkpNeEV4ZUZ0eDBUa1pIRGdUalptekMzVGNORWxqMTk0bjlUdStXYWo1MlVBNTYzS1Y5TzdwcUU5ZGVIS2FrN0tTRVhXYW9kelRWUlBZckh6Vk81K0JnSHBHQ08rMDB3VUlaQVdwOVkwQlRQa2QxNnJvQ0JCLzJXTTlVUDRmZVV4Z1o3YkwyYkpwZE9qdmFDVDJXemc0MXpGRGRjRjM1cjVJUFNhVVFHN2JjbURGYmZ3L0ZJWlhIY2F5RTA0R0Ewemx4U29pVmpJNmp2ajZyQnZjbGNIZ0FhbnJhUlZ5dlY5d2VGWDJRM0t3cFpKeittS1pheUlobU5HU01keTB2V0Yxc05aQ0thbWRWWHJZNlRoM1MwV0hMVExYL3pSVHNtVEVsdzFkZkpTOHpFL243eDR1NDFncG1ScExTeHFFQ1ordnlTd2Fpdit5VFQ1NTFWeU53b0F0NVhKZzR6bVBJR0xHRzJ3Rm1YU1pwVkp0NFAyTVZFblF3enppQUZZUXdYdlhHMDlGbG1ES21zeUtnemlYWXlvWXg0OHhoTzA4VCtFSWlJcHlMYVJZOXI0WlU0ZGhBZUJ6OVF0c3lDcE9DUkFoblpTYmxYSWQ1ejFMRThwMXZlK0FmanNzQURnU2NLNS8rUlFQQnBUQytuOWJrV2U5V0hoZjJOSUt0Z2ZtcXQ5WTBlVHNhODNYN0hxOTVzZExvdUVSVFIrOTBUMVUvTGtWRFpyQWtTaG91VGo5Q1lLYUd2dFZRcUg3UmlUUWw4S050Tmo1a0g1ZHZOSmNOS0JBR0dWMFRFbm9aVjQxMXNsQUNSZFdNeDNaeTEzS2Zpb3BvclhsVXFuS0VkbTI3UzJOSVFPekdjWmhnQ0pJeDl3L1Y0d0JBMHVuMm0yU1Z4dTdZblBMbG14SE5yRkt0TTA3N0haYUhteldYbWNhZ05YMi9XcEducVI1SHBQbkp4cFpCeHhBV3hLV21XbjJaMVdnalphQXo3VDJHTk9kWElRRHJZVmtsWkVOMVZMcmNqaFowYzRjWGU2RHZOam9XTVd1Mkc5NnN2T2VYZWtrSG5DYllHMmJiaDA0T2NOcktLcTBUT0J5NmtBKzVoZWR1V08wKzY3RXIybUJxd2h5aGQ2ajJwVWxsdFdIVEpWVjRhOGpZaE41WDlvMDBKZkJvOUpUMWRTVGhMczZxa0h6Rkx6VHV2Z2t4S3RoZkRrMGowRzlROGduK1ZLd2dBcVN0ZG45WFkvZnc2V2d4Rk5ZNjZ1cVhOT1VDSGt0SE44ZzEzVTRPZERmTUNOVXY5b2xrVDBQWVdncHljTEZ5elV6dDZmRzFpbElFM2Zham1ZYThweVpZSGhhK2F3U01WRUpIVlBLZ0VTVWJxWXEzandCTXhoTWpKZWozY1hNU3B4WkhvNFIxT0d2RVRMai85UEtuSGoyeGNQaWhtb0gxYjZVNDNxaStjY2l1VENzYUNxcjlYNk1DM1RKbXlleTBFS2ZaaWMreS9Xd2NTMWdmd2E2b1R6YWV6TkhDYXVYQ3FkMmRhYnJDZXMxTDgwaU9VYnpxbU9uS0FqUWpuMCtLaThjTGRVakRMQTBDNmR0eFlacWdZWjlwUThzTmFvMmVZV01vVUYwRU5TNi9ISnN2aHZsdW9PcFQwVk1nakFoMmFGSzNKc1Y4Qi9VNHBJZURxMk1acUhGeC80U1lteVpjMERSQkZkS0hwbVpNNjh4aDBjUXlvKzdBWkRBS1FybW4rcDJad2haOU1YWVhaOUJZNmUvdU5GRkJwbnFjcTh4YldiL3hoTVBvSEEwMTVET2xlZzVxSVJ2cXdvUEJXSURScHRJVTJsU1dsZXA2Z1JFV2JyKzdqK3JYbEFULzRNYmdMZEQyZGxkVG1pUXkxMm4vNHNTVTRxQVgwczVUbi91WHhFcEdRbzNicmxHTTZ5YXU4ZmtZRlVTWGVxNVVVOHNVek5iemRwRGxWcFU2d0JocW9ubkNzZm5ZaGFLREVpUXFCTGY0eUVpMTlvSlN1OHpVVmlSU0dGWlZGSmpDU3Z3b0NWQlhDeTBVUlNYWWF3bzBTQ3RKcFRoZVh4MVlKMHBHamttRG1tZlRjdVdxQnB1TWJmNHRHenlienpXRnYwY0UxV29Ed2wrWVNJNGQ5Qm9ub2kxU0NnaEVDY045bDAwdE0yRWUwN1R4MkRUa1J0WHdaalRzR3dHUEgwdVkwVHRNblNnVlZPYnNKekZtWlZQa09GQkpZd0JuR2xWTHE0bHNjUmMzMHJpZXNOS3FZNlJCWXlDZ21Na3hzUTA2Qk9GZXp5YUt1ZmwxcFNLd2FKbmVCcEZCVk1WSkJMV3dmS1JtSkkyRXdINUlxRENmbWVTYnZOUXZNNkhWYnZjR0tyMTZSendPcVhSRHFXUTNaRjdxRjdoeERlSUNnaEk3bDA1UUFBZ2FCaG9hR29BaEJVMEd3Z2FHRERUWm54bHkvNFp4djJmbjZ3MEJoZ1JDbG5jM2tHSlZOOE8ydnJQNFB4bVFCSVEySUMwQUtleTBCUUFTR0dqa0pCZ1NNQ1RCZ0RReTFzaVZSczRaY3BVQlpNQXdZQkl3Q1JRTG1BeVlEWWdNVWdnU01WQWlTRVRBQXJBUnNBRjhCNzYvNjVYcko5eWJGd0RDbFgrTGNmVUpzYlVHTnZiNXlJaDlIeEQzQ2F3Z3VvR3h6MnUvQlhhZld3bURSUUdTQWtpcTR1WEVFS1FBVkpYcVJsMUNpY3I2VGFOK1dkQXQ3WXFZSmhEYUNEMm1HUkVCckJJSDl1NGZlQ1p4SDZpOHhRUTNFM2V4dXpVZnZ0WkRmaTI3NjBLb1NJRzY1MmRIdU52bFdGUjRVbnRNQ0tlT0hmdmNULytEbjd0NUp6d09odHNiYStuaThTK0l5SWVGQ0lxNW1BVXhEUWZYY0I4Q0JRR0QvVHlGdTlDdDNDaFhDbGwxbnlUQjZEZlZsZTZGSUpKV1F3b1hSTm9FTmdjd0JHaFVpOWxmY0MwaHVMSkRvQjZqM09sS29PRmw1RXlSRUJOOHRkdGR2TjZURXRrbmxXcHR4VkFZVmtzUis1aDZPRWZGK2haYnhYWWpYUVlDTFNFUjROUTJSZXg3Y005dEF6empqZ083dTc5MkY1NjkrTWp0Z1RFaGx0eThUUm5DTlc4T21DajJGeWorajdKeDQxWXFtaEprQmpYcFhGTzhxbW5zN3BhYWhrTVFKbFFsVjhiQXZmcFRab1pKMGgwUjRNbFAzZ0hnQUJpMjVoZS90THUxOVdFaUtaUktxa05kWlF0dGhyWmRZaVFLQkFhTWdZSUJ1NVBqWFdWekFZK2RweWdvR0FjSWQzTEl3TkF3UEpSQnhoMU9vN3I3dlZCNWx3ZWNEN1EvSndHVS80NzdlWjVrMEt5TE82QVh4M09ML0pDckZFWmI0TnR1R0Z2dERvTnhJOXFGa0FiazdzcjJibTZLSE1PSU5LejJFMlRDQ01ld1JKd1hNUGE3Q3VUdWxoNU9CdFpIR2pCbFlKVTdUMFlRc1Y2ZmhBcVBWb1J4VXNyZVlndzdPdHBuRnRSaHd2V0JrRm80Vmgxa0t6eFN3ZXpCcVhVNnNKcW1GU2JTR0dMZGJzV0Jna1JJSlltY1dPajhreWMvK1dOeVJ6d09BUFJlZlBwbjl6VDk3Z3gwdnAybTZMYmJRZTVReVlpY1J6REZ3U1FBaGd4eUdyaC9keEJTOTlXSEMwS3hFYUZxNG0wdloxVWUzSWJKclhCRGx3ZUVQNzJhY3dqN3hObkFCcFhCUWxXVGdnMjdCSktMTUlCZDI0WTJ4bTVsTmhyR2FIc3g2Qnk1enQzM2MyUzVCa2lRNVpsYlRxc0xRT2tpSnduZUgxa3drSU1va1FLeHY3a29DS3grdEZLTVZBR0tHSVlZWUFhSXdhd0FBbklJaUl3OTFhSWczbU9KZ1piY3p1NW9FK1FndFhuL2tVM3NNaTNScS9XaGxaNm5MS1NhZXZJTDhySzNmcXVGV3ltb1VTcUJOZzJGRlBUeUFUclZ5M3lVYkJwQkJKV2swbTdQZjNuYVkyOExPRWJuTnpvR24zMXBaZU5iaHRwMFVwVmdydFBHc2ZrNWROc3Ayb2xDa2lSSW1KRm9RSkhkR1duQUlHNGpSeHVhRkFRYUNsenc2WFhnbUVvSTF0UlNUeURoWXE3Y2gyQitBb2VNQWtucWFGd1hyaFN6NjJJdktNUDI3bXR5RUhLYmYrVkRhSk9EekJEUUdybk9vUFBjQWlFYlFtY1pCdmtRUTdrSm80Y1FZeTlFazJmdWVZMkxvKzJOSkVrWnJJQ2tSVkFrSUNXMjdVWDVrKzZEYmJhaHU3RmVSUk1qMXdiYXVFRExFSXl4K1NPeUZuUytCQmlHMWdSbzU1MDVCVk1DY0J1R2o0RjVDR0lGcFFDVkFDclJBT2RnVVdEbnphdTFIbE1CaW85OHZKY3NibGorNzZiZXZEbGhBMEdsMGRNRXF3ajlHWlBLbXBBR2Nybmg0bStTMzNLM1M4TElMbFJDZmRVa1FNdzRjWHpwMHBtNTlLazdDaHdBYXgzR2IxNDh0dkRPRjlaM0h4NWtHWFo2UGR4Y1gwZENqRlFSRkJIYXFjTHhkQVBkanFEZFVtaTFGc0YwSElZWGdGWUxyQUJsZ0VDWXNsYTNzUW0rdmRDVlBiZ2NTQ01KUVJWM01zc1NpTCtiYXdOamNvZ01ZVXp1N3JJNWpBeVE1ME5vTVlEdWc4d1FXWjVobVBVQUhvS1FBWlJEWUNDVWdjazR1bExEWno3dERxRkRncFNCSkZIZ2hOQk9GRGhoS0Jhb2hLQVVJVWtKcW0wdldFNEFUdGdCMXhTRFU3Ynpta0h3akNRWC9FME90bDVRS1JBVWpBQzVCbktqWVFUSWFBOVpSdWoxZ0wxdFlHZkRZR3Mxdzg3bUVJT3NqWXlXUUt5UXFBNG82Y0tnRGFJV1ZOSUNzMGFhQ0ZKbFg3L1lOeHFFaTU0a0dCVzdHTlUvTXdFNHRJd1dUMGQwQnlUY3lPQnVOcWh0U1pQOWhGMDBVcmVqaGxwaHFSc1hQRWFBNVdQSGYrbFAvSlcvazMzbUwvMFlBT0N4eDUrNEk4RFpBZkQweVU1eWJXK3B1M1IxYSs5MEM0QTJPY1JvRERPRExNc3c2Tytndi9BTUx0eXZrTXoxa2FzV1JDL0R5QktHQTRiUmpNU2NoSEowWUtpeVg5NXJncGx6MkZBbk56Wk1FdE9Ib3AxQzJKdklLcVlZRjc5VEl1QlVrSFlJN1E1QnBSb0pheWcyWUNWb213UUpKN2I3Vm93RkRYSXcyL0JRVXhzZzVVNHNnY25ZOEFuaWhERVVpQVNzQ0VveHhPVXpSZnUvNU1WNmMzdlNUT1d1YnBzdEFaQUdvTjJKMU1XRnFjUStUdHhOVjR0QXBZUU9NUXhwR040RGN3b3hESkVXU0ZMa21jSmcwTUh1Vm82TnRSVnNyQTZ4c1VIWTY4OUI1QlNVT29VMDcwQ25zR0VqZ0ZUNWpLOWhaV0lvK2tHbGVpaWhSbDhId3VwbHZhZGVQd3RyY3FNYUF1RnFRbFNDYXRrWGVKb282UEJuNWJKZzYzRlVtc2p5L1B6UGZPWXYvWmpjYVkrakFYd0p3TWFGK2ZZcm1hRzV6VjV2WG93Q2liMVBTcHBpbUNUZ3JVZGd0Z2U0OE1BZWpzM3RRdWs5QUJtTTZrTlRocHhmYzdtcVBZaVZHUjloaUNoM0lVcVI5QnRIUFZxUDB3WXpBREl3b2kxZ3lJQ1VnU0FCVVFvV1l5OTBJY0FrSUxHWC96QWRJdU5Cd2RBeEoyRHAyQkFDUU9JdkhNZDIyUnlDYmNJUEFaUmwxY1FRUUtZSUtuSi9zYmlRd2MvZkVDdUlFQWlKSFJaZ0gxRUlCQnJNQklGR1JlaVRmV2hrY3lKeXREeEJRZWtsUzBPVHRya2dEY0F0alhZYk9MR1E0cUhUYldTUEp0Z2RhbXp2Q2xiV3RyQzZzb2U5cldzUWZSYkVKNUVxNVhTaXlhWkp4QkJoS0xlV1BkTWE0cXJ2cHM1WTFZVGhtN29ER3ZmbEZEbWwrNTR2dWpxbXNzTEk3ZFBqVEtyYmhNdXovT0FhRWVIWTRzTFd4bTd2bFZsZTUzYUJBd0F2QWZnQ1EwNmVYMmhmeVlHM0RMT01pRnBPZW8xQTdTNTY3VGxjWFYvQjB2VnRwQTlzQXAwV2pKbkh2QjRnNFI1RXRZTUxwZXp4THR0Q3NpREtsZUR1WnF2YnpJUGlvV1JDRXBpYzFOQUFzSE1XTUVJZ0ZSNWVodktzbmIyRjJzcVJvNWR6WDFNSlltSy9YdGF5V1k2UmMyZWtGRFNuSW15a0Fqems2alJVdExRYjZNTExGbnM3blpjcGFqNk9wbVZ4NitSZFFVdGd3S3lEL0VoQkpBR0JyWlFUTXdZZCt4NDdYVVpyU2VIVVBRbzZWK2p2NXRpNGVRMHJyNjVnZTNjSmpIUFE2VHp5eElhN1RBcWtjdVFhU1BZWWVnRGtCaENkUTRzZ2N6bnJhRHRTV1FnMUFlbWczUTFOakM1ckxVQTV3T1pPZ0gyTXBRWklCQnlFYk9SYWpnb3ZOYUwvSEhRL056UU0xM01iQlcwN29obFlQbjc4Q3ovOWovL1p5cE9mL01UVWkxNzl4RS84eEw2UmN1K0hmaHV1ZkxwbzVjbGR4djNobENSUFdxMUVFeThtU3RtWW5BaEpvcEIwVTdTRjBSc0l1Z3VDYnRlZ3BYSW9VUkNqSUVxaFBtNDJ2citNUU1URmhWeFFrb0h5dm4rYUFqN3NMc3hhSlZLSy9KRW1MSnVWOHJIaHUyRDNIc0kxUlRUNnhjSGVHb2lsck1zdmdwQlVWcFA0eGswdi9rM3M2Ry8zUFNZci9jUmsyVFo3SE96Zm1STHJNVm1CT1lFUVF4TURyRUNVZ0pYOVVnbWoxVlZZWEo3SDJRY1cwVDNaeDE1K0M0TmVoaFNMU0xpRGhBaUsyMGk0ZzNhcmhTUWhhTXFSU1k1TVRQSFp3NFZRQmMwc1pXdVFOcnFpQkdxTWNaeUFjYUxzTnNUVzRudmhURVcvV1Vaa1NBU2xLT0ZvTDJLNDhEZHN0L0hIMklmTTVmRm5wSzJPUEhMeDNqOCsvOXpubnFsZjYzZks0d0RBNXdIOENvQnZYaVJ6Sld1M2xuWUd3M21WSk5CczQxMEZBN1Z3QW9OZWdsZXZkdEJwUFkrVHgxY2dPQW1ERTRCc2paRHJFenVGRDdBQjdxQ05uazBKNTlnRzE0WW1WZlkwY25FM3JnT0xSeDVmZVc2UzZuWUNVM28vQWx2R2dXd0JsMGc1RDJqN0N6eXRTOFFnVHR5ZGdzRStaMnNOWVdnUDV4N280TlNGZWF4Y3ozSHQxYXZZVzV0SEc4dUFtWU5taGxBRzZRZ1dPZ3p1RTh6T0VObEFROE1VTnhWN0VaYTVXRVdFRUxYNW04b1lkNmgxWUlwQ2MzMmF0azUzajl1SjZzUGk4REZjTzRjRnRwaEJpckc0ZEd4ak02TmZDOC9iT0dMZ3RscHVhays2Q2VEbkFGeGlTSDZDOWRQenJYU1hpWkFxaFpaSzBGVnRtRFFCenkyanQzc09ONjhkUTdZSENQV2hGWTFPaGNxMGpjYXpOMkZXYWNlRGdFZmNpRzQ0cWh0UTI3VXZPMUZZZm9Ydmc1a0RrcUFHSUg4bjVQSTlzaUt3cW0xOUpnWlJBa0ppUFF5MTNWY0x6RzBrcWd2Rkhmczlib05VRytBT1lKdURJRWhna0VLb0JhRXVTQjBEWjR2b1NvSUhMZ3p4L3EvdjQrR3YyUUl0dkl4Y3I0QmxCMFJEa0ZKUWFSc0xDOGR3ZHZrNEZqcXA4MHJzRW13S1F0SndQRUNDM1QxbFIwWEJuSTEwbWtxbG0yR3NDT0ZZc1VndkpobDhqMFp2Z0Q3Q1lGSTRmdno0cDMvNlovL1I5Vm12aU1QeU9BTGdlUUEvQStEUE1tUnBXY21MTjRYZlpVU0lETUFtQlpJK1JBbmEwc0d0dFhNNHZyU0I0MmQ3b05hTzdldkNPQTIyNXJ2NnRPV3dUZi9lNzBSbzAydHdyZDIydmd4MzVEWElsRjZGU3I2ZGdzNkdrWVcyaFY1dFdaUzFDVHRac0NqbFZsWXFFTGRzdUtnc2JVMndkMUdSc0RtSjNhWENMaDlqUUJpTUxzUWtZTnFBa2d6STJtaWhqWHZ1MFZnK3Q0NVhYN2lCbXkrMzBNSWlFamtHbytmQXhPaTBXdWljWUt4dDcySjlady9hR0pDdzAzOHVXM1pDYWp2Y1JsaUVkeTZiOFEyK0phTm1ndjYxNFBnVXgyM2NqYkNCa2ZVNUoxTWwvMkZYS0ZacEtzZm51My85eVU5K1l1YUxnM0Y0WmdEOEdvQy9BV0F0Z2RsZFZIUUZzQnZjQUxKTmtxeUJGaVBsYzNqeHh2M1kzSnVEMFlPeEx2aDJ3NjdEbUFBZGVZNHhlbVpoa2pxeWI5U0pRQlRuTnJnTFZwcGphMFFDTVFHY0FwUUNsSUE0QmJGdFZpVkt3ZHh4bnFNTjRSYUVXakRVY3Q5TElkUUdjOGVDaSt3WHF3NkFsdk04UFFpdDJZWmNXb0pnR1lJRkpOVEZRdnM0M3ZMT0Z0NzYvaGFvdFlsVWI2RnRCbUJqbVQrVnBqaHhmQW1ubDVjdzE3YmtEcnQ2a0RiTjRoNlZyUU91T2RNMXFObVdHeDNrU3NaVUpLWUVNdGJUakRzOXhiQmhMZjlobjNTeXdzWFRaMTc0MXJjLzlPbFp3N1RiQms3RGsyY0EvaTJBSHdkd2FaSDA1UVhHYTduT0FjN1IwZ2s2T29HaEJGbHJBY1ArdlhqbDVVVU05cWpDaWpTdGdYODlkZHRHejRRTHU5aUZYbVFtZmhGYnhaVGlpNnFoSHJ2ditUL3JvS21FYmFUQTNBSnpBa0pxdnlnRm9RV2lEaFIzSEpnU0N3N1ZBbm1Ra1FXY2NBS2h4QUhKaG12Z0ZraDFrS1NDSkRHQU9vRThPWUZoTzBIVzJiTkMrcjE3a09nNW5EM0xlTThIVG1IeHpCREFDbHJZUXA3M0lkU0NVaW1XRnhkeC91UUpMQy9PQndUR21MSG1tdEE3Z3RxT3NXMnNCZlUvMjhVNVhjT0lVSk1LZG1RUXM4MzFsazh1Ly9MYTJ0cGdQNWRFY2djdXN3ekFyd1A0Y3dCKzlMZ1M1RUp6ZlRNOG9mSXVGRnJJMGh3RFJVaVNZOWk5c1lpVmRBV3RCek4wT3AzR1daNDMyaWowRWsxM244WnRCZVAzMUlTeHRsLzVKOGFBbUoxM0R1Snd0cUdaOFczdmhrQ2tvTGp0V0szVXZUN1pyZ3F4Q2JwYlRHZ3ZZSGFOdGNXOWtsM2pMRURtUEdBVXNuUVRtVnFERmdMcE9YUklnZFVBcEJWSUU5cnpCcDEzdEhIdGh1RHE1UjU0bUdCZ0NCMWxjNXo1VGh2dDB5ZlJhYlZ3WTMwRHBxZHR4N3h1MkJwWDJlb1dnQ2RjNTJHa0tMQlMwTXNzK3h5VkRNZHhLcm1OeXlWUEhWL2FlZWU5cC8vR3ZjY1dzdjNkU3cvcEltM2d2aG5BQXdCK0pCZDY3SmJHby8xTTVwa0lCbjQxaU1Ea1E2eHZ2WUMzM2Y5RlhMaHdGcDFXSHlvZHdLQU5JeDFJc2dXaFhTaTlXS0dwUjYvaHlUSzhFME0ycWMvc1MxbXNKSEtlcG9IMkJJMmNsT1lWSWVYaVdWTlUza3RSRFBKM1g3YWhtRURaWUo0WlJDbEV1bUJXOE5Na3hNcm1LSzc1VTlBcTZIa0J1NW9PRlYzaVZjMDBjaE1OeWwyc0NRUUtoa3lSYjhIMS9YRnhhQVJzWEdHWFcxaGRaN3oyZ3NaZ0xVRm1UZ0FxQjlHdXJaK1pCT3ZiUTF5K2RST2JlK3ZvOXcyeVlZNU1heGl0a2VzY0pzL3QxdW5jRnFzem5jTm9BNjF6WkhsZUNxOGJVM1NMbUNCZlFyVi91SFl1cUFDYVBRK3FpQklVMjl5T2lhQTRnVXBidVBqZ0kvL2xEMy9zQTkrZTdXN3Z6UnFtM1NtUEUrWThMd0g0eVlUa2gwOG5sSytBM3RITDlMeGlkdWVJa0xRN09ENzNBRjUrWmdzOXVZR0hIOUxvbXJZcjlHMUFHd0poR2VMYVZwb2pXYm50VUF5MUdnNEY0bmMwdGxZd3BqZHFCRGh1d2pXZ2xhc0pMTU1RZ1pFVUhzVEExbUNJVzJEcVFNVGUyVWtsQUNsbzdkNHpKMkMwQWJhZENIYmt3SklHSlNWUUc5VjJkUjlYeW9PNFFZb21JaVVIdWJra085TkRFSnc2MVVGcnZvc1h2cnlDd2NvdEpKSUFra0JSQXEwTWxvOTNrTFJPNDdVVmhSV3pVUzdSaFc0K2U0R2VHZ0xoeGZHTDVtczF2ZUQ3N0hQRG1xY3BpUUVxZXZLNjdhN2NkL3JrbjhsMnQzdjd2V1FPRFRnZXBUWFBJd0JlQVBBWEdmSkRweFBDVGNQdkdCck1PNkVlaUJGME9rdElGajZBbDE3NFpZaTZpa2Z1QStZVEFsTUdrM1VBU2dDVjN6R0VWOE1uZi9INExteDJkNnhKNERDb3pvYU0xbkVNQlFOeTdEeENVWGhOTEoyTEZraWxZTlZ5WUVyQm5BRFN0a3daV2FBUUtUZUFSaUJXZ0xRdFJJaEJ6SFlvZ2x4QjJkUG5ibHdoV0ZEdHVoaVNrVEZuVklCbXU2MUYzRGdGOTJGMEgzTnpna2ZmdTRUbnZuUVZ2V3NNbGhQSXFRMVJnRUVmODNNdFhEeDlEcWxTdUh6OUpuTFd5SnRHeWl1N2J5eGNRbjIxV2NrZWFxclR1RkRYOGdIbHZCU3piYXU2ZU9iVUYzL24rOS94dWQ2dG0vS0dBV2NLVmYwaWdKOWt5UEJNaTNCdG9OK1JPZkFvWW1SaW9CY1hjQ3I5T2x4OTZUZlJhYjJJaStlQk9UcHVMN1prRDBiNGpyL1JJbkVrM3dVZ1pmZ3k0U1Q1RG1LZjY0elVuVmlLV1I0TEZqYzM0NHQxcXVPK2w0SlVDdUVPSUFyS1ZmdUJqZzNWaUt4SEFibGNpSzFYUWlmb3BHQ0FyT2Z4ZlZpbTBtNWVTalFSTTBoUlVRcW9oTGdGV1dFY0lMdGdWMkFsMVlNaGc3a084TzczbnNkeldNWGFsVzB3S1JoUnRwNEVZS2tEcURNbndBUzhlbjBGMm1qb1hOZGV5d1FjdGFtUlFiUHA2OVcxcnFzN2czelVVRlE4YlM3SlN0NzkwTDEvclhmclpuYVFhK1hRZ1RQRzh3REFGUUIvblNIbVhJdmx4bERlbVF2Tml3RENHam52WVo1UFlGbmVpNWN2WlFCZHg3M25jclFUQStVYUx3RkFhMTFKeG1lbG03MUlSSjMrTFQyTzl5Nit4Y1lVRTQvKzlacnltTExiMXhRTGJPdmhqdjIzbldlSHNLMjlRQUZLMlF0UldyYWdTU25FVWMzZ0ZxQVVnQVRFSFJjd3Ntc1lkWUFoZ2lLcnAwQ2tYTnVMRzhNZ0JpbGxtU1BYV3hRdW13MVhqSUNyekNYQ21vcmFnU0NEb1E0NFQwRnFIb29Td09RZ01OS1U4WTczemVPcDFqVmNmZkVtMm5JYW9BNEVPWVI3NktRSnpwOWNCZ0Y0K1pxQmFJT2hHT1RHSUZ6WDRabTBjaTZucXZoWjFHUkdrdjVSZ2Zqd1BIUHdVd3Bhazg2Y1dON01jdnp5UWVQODE4UGoxTUh6ZHhTaGRhN05zcExoWFFNdDg0b0pDaG0wNmtITkxXRmg5LzE0NWVXblFPa3J1SEF5UVp1NjROVGVxVHpyZERnZWhtcDFseEkwMVNxMEJEbEIwNm8rTGtLOHB1S3JFZDhSMEhKdEx3cENxVzJpSkFWU2JadVRTQUpDQzJCYjFXZHFPWnE1WFhKTFFqRGlwa09KTE4xTWJVY0UrUHVxYTdjcCtIQVZlRUZmL0t6MmZoWERmNTRFY1A5V25EbWF2UVZ3eXhZc0tRVXJRT3NFMEJxZGJvNTNmZTM5NkhSdjR2SlRPMUJDQUF2OCtzeHVxNFdMNTA1RE1lSFM1YXZZMk00aHJKQkRnd25Ra0JFUndsbnJOQlZQVTJ3SUxGdUUvWGlqRFhNWnJCaUpTbkh4M0xsL2Zldld6UmR3NGNRQjArSTdTUDJPNlRKbEFPOEI4RU1HOU40YkdkNDl5RTBuSVlLb0lUSlJVS2FMdkxlS2dUeUxDL2V1NFA1emhNNWMzdGdCNEMvdVpra21hZno5MFZ4Rmlua1pDWlJVYkoyRmlsdHkrTGd3TENNeVkvdldpQWphTjErNkdvdFE2bHBtVWp1WXh1eUFZK3N1cE9ac1RZWTd0bEd6MEdYeFZESmd5TGZ0dEZ3M05MbWVOUzdUWkpmekdLZWhZTityZTY1U1M4cEpnWXhiVzJKRlRzUjBYVVNWd2NaMkRPZzJpSElMTHBORDU0eVhucjJKbDU2K0NUSXRDSGZjOEIxQmpFYWU1N2g1YXgwdnZIWVY2NXRiMk9zTmtKa0JzaXkzODFXNVJtNDBZRFJ5SGFyZXlNakd2WExOQ0kwTXJaWHFOUW9LcmgySUNhUVVRQXJuVHk1dmZkUFh2T2ViM25KNjZkZjNVL1I4M1R6T21MRE5BUGdLZ0wvTGtJK2ZUb2xYVGZwT1pLcVRNOW41SE5WSEYrZlEzWjdIMnN0UG9zdlA0OVNaRHJyZGJtTjd5MEdiQStxanM5WHdDa1hDSDI0bHE0UE8wOVVqWVVYUUVXMzd5V3hTVDFDMllPbUttWEE2QVV5ZWltNjdEZ0ZiWEdST2tSczdFVXBDTUdRSkFRNW9hVEdwdldUWTlyQzVRUXM3OTBNdVZBdkRNd25sZGl4d3FucmZVb3dMa0xSQmt0b3VQTkpPd2l1M0xGK2lZSkNCcUlVa2J5UGxISSsrNHlReTNzV2xwM3RJVFJkR0Q1R1NGU1pKbE1MWkU4dGdBcDR4R2xtZVF3OVFFd2lSU3F0U3FROHhKcWVoaHJ5R3F0LzMvV2h3bmZyMzNYUHVWN3FrdjN3NzEvYnJIYXFGUmRMZkFQQlhFOGozbldxYmJGWGhheVNuVG1yYVlBSnkyUUVXZ0R4L1A1NTk2UXowN3JNNGMvRVkxRndmMU5rQjh4QktLeVRaTXNnWVNMSUpJYkVTVEFRb281QklBcFhiRG0ydHpOaWNxS29wYlB1WGlqdWFnUXR0SEZuZzJ2ekxGUkhsM2I4UStDTXE2aTVFQlBDYzlTakt0OEVrSUxLejFGWm5iaDVBQXNPcGJZdHg3VEdhVW1oanFWbWxrakovcGdURUZpQUdzSDFycElydUFodWFKYTUvek5XRllBcmhOYzljRmZORE5XOWo5ODdZZU1jWUtTZWpLQVhRZ25LOWNQWVl6Y0dJWU5oR1VWdDY2QjMzZ1BnNVhIdnFlWkJlaEpFRis3blpBT2tlbGsvTTRXRzVnRHhMY1hONEU0a2lETE0rbUsxK25BQmdBWXlvUWhac25ESTRvMXJVaE9zWWQ5SXF5Sm1RdVBPckNEalduZXZkZStMazM3NzMxUExnb043bWRRUE9HTStUQVhnS3dGOUxZRjQ4bDhxM2J4SzllMzJJK3dVZ0poczJ0ZElVU3M3Z2xXdDcyTUJOUEhqL09vNFpRb3NYWVNqQk1Oa0ZrVUVyWDNCMUVqZnVTd1pFR2xBRE43SElEV3lZejI5S0dhdGl3eHlWb3VVZ1U4bUJxQlNoOFozcGhYZXlQM0JkeXlvRkt3V0RyczA3V0FGb3VaKzNBR281dW5uT1huU3VKODIzeERCUzV4eXNTZzI3SVI3aXhCSUVUdUtKcUcyOWo5T3RnL05reEs2Umt4aEtwVzZxMHNDWXJKVFhjdXdWdS9uaGFxdU1PS0lyQ0l1Y2lvNklQNVlLWExUeTJ6QlNjWXFIMy9GMktFN3c2bE5YZ2VHZ1hCR29VcVFKY1A3VUNTaHVReTROY1gxbHhYV002S0tHRStZcFUvdlJRdENFdzRCRVVLNW1Rd3d3S1R4eTM3a3ZQYlE4OTE5djk1cCtvenhPR0xhOUJ1QWZRK1R5TVNYZnE5cWNyMmY2QVNOSWxHSXJYWlRPbzMzc3JkamRUUEh5cFJ3UG5URllXbVJ3UjRQVW9HQ2NmRGhqNzFrNURCbUl5bTMxR0Z4MkhBT1Z2L3RhUjlrUWFJcjVFazlMRXdWZHkzNU8zZVZBV255NVRvRXBCYWhsTDJacVcyQlExOUhOeWlYelBreHIyUW8rV1ZiTUE0ZlF0dUFnQlFOQ1FxV2FtL1dJaWZNcUxveUVyZnZZUE1sV3krM3p1UElGdTBFMkoyMUlvcXByMVAzMEtzb05CY1Z4WWo4ZlE4NDdVV1V2anowSTR0ZE4yREtwR0toV0J3Kzk4KzBZb28zclQxMEc5ek1ZV0E4ckJDZ2xPTG04Z1BlKzdSRU1zd3pYVjFjYzlXMks4K0hsb1pvQVUyK2ZRUkVXYzFENEJNZ3BDREVwbkRsK2JPY3Q5NXo5MllWT2UvTjJMOXdEVFlBZTFHcVRvNkVOQWJ3TTRJVUVoaGNUNXA3QmlkeEl5OWM4akVyUjVTVkkveGpXZHdrbTZTUHQ3aUxoM041bjJhbFhnb3NETDc3cDBqVWVGc09mTkZxM2FXTEZmRDhUczNFZ0tZVTFLTmdIaXFLR2tvSlVCNnptd01rY0ZNOEJxZ09SRGxoMXdEd0hVbk5nbW9QUUhNQnRHL3J3dk90Z2JvTzQ0NW96V3hCS3dKUTZldGsyZXhLMUNnMEZ1TVpPVUxzRUM3ZmNESTZkQkNXVkZKT2tQaFF0aUFQUDZubjNHWGlXc2pWU3VTbFR0aUdmK3p1Z25IYWIrM0pGVjlzQ1pNRk5ySEQ4MURMMjhoelpkZzh5MUc1S2xXMnd5QVlwSzh3dkx1RFcrZ2I2Zzh6cTBJbFVtaitiV2pqOXNlZFFBcXBnTzdrQWxPOFNVSzBVNzMzby9pKy82OExaUDYrWU4yNG5USHREUE01amp6OHhqbTNMQUh5QmlXNEM4dUs1TnZkWGh1YURBNDFqU29CRUE2SVdvRnNkR05QRlM5ZmEyQjNld01WVHE1aGJ6SkNsZTJDMEFBenRSVlVVK1RyZ2lzZG9tdFdwVnFtNWFNK1FvdnBjb1Q2SktsVjJRK3hHbGxzUTZvQlVGNFE1Q0xkZDY3K2xtSWtUU3pPcnRzdHRFaGVscC9hQ1l3WkpDMkFGSS9aQ1plWmkvb1RJVG5wYWZUVjI3OFVPdEJHckFzQkNDaFZWeG9CS0Z4clZkNm9LbWxlUGhRMzNIQ0hqYmhaK3NoVE1sUXZhajBtRGJMR1dGS09qY2p6eWpvZngxRjZPd1pWVkRIcTVWYjkyUVVLYXBEaHovQmplK2ZCRCtJMm5uN1VGVXZFNkRHWmtXU0VINUpCZnBNVk1SUTB0UEljV29KWUJQYk80dVB2d2hYUC9ySlVrVncvak9uNWRQYzRNbmtjQWJBTjRuaUNyQzRxT01WRXkxR281RVVWYVpjaVVnZUY1SlBrU0JsdU12WjBla0dwSW1rSXBaY1gva0lHVmNSZGRXc2pTanJKaTVaK2VldVpLVHhOVjZHcFA3OXFMdm15bVZLb0Q1amFZT2lEdVFxazU2M200RFN1bzFyVWc0VmJoVlN5b09pQk9vS2dGVG14aXI4VUZLWlRhdklVdEM4ZlVzbDNPbExoa245Mk1qZ0tybHRNVUlCY09oa2xZSUpNRHNsN0JoVXprUEFqQkZ3YlplWmpRR3lWRjdrVE9nMWxOQS92KzJCVnVpWHpMai9WRXBPeWtLMGloMVVxZzJveGJxMnVRM3NBMW9KYmp6QXpDMHNJQ1RLNnhzYjJMd2JBUEpndENJcTZJYmhUbkJkWCtNdytrWWtDTkdNUldybXUrMjhuZi9kRDlUNy9qM0trL3I1aFhiOWZidktFNXpvUU9Bd0RZQXZEdkFWbGZWUGo5YURGdkQ4MUZHSjIwMkRwdlZuTkkrQUwyK2dvdlg3cUpZeWMyY2VZZXd1SmlId2wyUUU0S1NzVE8xbHZLR0xYaVprZ2JoeHZXVEMydTVrQjlwcXpyTVBrUmdMYWJpYkY1alZEaUt2NHRzR29oeSszY0IxTUs0dFRWVlJMYmcwZFdhQkF1OXJmZXhWNTQ0a0lnSTVZTWdMRjB0SmVvOG1FV3NlMUtFRDlvVCtYd2x5K0kyaWQyM3FNKzZWSXA3dGJIMU8xZ0REdGdTWm5vRlFyLzdMdVEvWllGM3g5SEF0RU1nY2I1ZTA5Zzg5WnB2TGJWQXcxTTBUZm5POVFVS3p4MDRSNWt3d3hmZXFHSGJMaUhsQW01VUtFdFh0L1gwMVJhQ09lWjJOVjU3emw1WXVQRGp6N3dVd256U3ppa1hjcU1OOWdtSUw0SDROTUFmbnBSNWYvb1ROZDhka0dsMXpoTGtPWkRLT3BCSzRXOGRSK0FSOUc3ZGhKWG4wK3dzY0xJTTdnUjNneTJ2MWNYUXVsaVZ5UTRkWnR5QzFmeEg1RXQyakc1THhlcXNWVkRrYUlxbjlpR3pLVHRhRnBMMWRyOHd6Sm1oaGphRUJLVlFxVXRzTEpyTllqdFhSdE9jY1pPWXRyd3l5clFwRkFxY1RtRW5jY2gxMllEVndkaWxTQlJLWkswaGFxa1R5aXRWZjhiRld5YjlXU0orNU9ETDFYNUVzOFNxdFI1TStlRmxDM2lDckVUZUNjSU13eDd3UTdiNFNDVVFpVXRDQms4OHZhSHNYRHVSQ0h4NU1GanZiZkJYTGVEUisrL2dBZlBuL1AwcHBzcVF0RndLLzQ3TkRvaTdTYzdmVDRyUkpqdmR2SzNYenovWHhMbWYrdlNBZHkxb2RvK1FqY0RZQlhBVnhpNDJXVjBtQ1h0Q3kxb214bTdHK1ljb000aTJ6UFlYdTlEOUFCcFI0TVNRcDRvMkVZV2dXRkNuakEwRTRRVEpFaVJVT0owcTdtUWV5ckduSlhZTDd0NHgxSEdDWXhxZzlJNW1LUUx3MjJJNmtBUyt5ZlVIS0RtSU53RmtVdjZWYWZvR0FDSHRSemIwcDl6Rzdyb1Q3UGlHc2J2dEJGVjdHMnhEcytDaS8zRmpUQ3NjaUdjTUVnU2tDaVFLUGk1SGZqUWpKVFQ0blVLT1p4NmJWNkFFK3ZwS0xGNUZxVVExWEtNbi91WkUxU0VDNGM4NDFKdW5DQkhWelBJN1JaU2xDSk4ydWd1TE9ENnRadEFid0F4aWUyNkFKeTByNlhOTyswV2JxNXZvRDhjUW9rdU5NQVp0cUJiamdwNEdTMHVPaUpBakRTMXVhQktVbHc0ZisvMWo3NzF3UjlNbUY4Y2QrM2R0Y0R4SDJBTWdBVEFMb0JMQUY1c01hakRhQXNoNld1enFKaXR5S0JpcEVrYk1reXdzNjdRMzJyREdFYTdMVWlZd0dpQnBBMkZGbEtrZHNVSTkwREpqaU5sbEQvdVJZNWdLL1BLeGYzV2s5aCtNeisvbnpybXFsWFMwUEJVdEEzVG1GdFFxdTB1TkRzeTRGVnE0TUFEZHZtWlNrcE5NQW0xd1J4cng0a2JLM0N0Tno1RXFuaVUwbk1XZjNvR01QQTJyTGpDcE5WREh0OFU2d0U2ZGlpUUpuY3NjL0R1SUl5NXhTWDBod2FiTjFadHU0OFhtSU1IbldDK2t3SmljSDExRFZybkZWQjRrY2VpTEJEVzUxZ2hTU3d4b2xoaHJ0dk8zdmZvVy83dXhlTUx2NEJ3M2NWdDVqZEhDamd6ZUo4Y3dEVUFYMUdFdFRtbXVWUVJaOGFraGprWmtIQ09PYWprSkpoT1F2SXU5allJdzc0QnQzSWd6WkVBU0FSSVJhQklBeXl1eTFqWisyUWhXdWpvVkVyQXNIa0pjMnFUZlhaaUY5U3g3Zk9xQlZESFZmeDl3dDhCYzlmOWFUMkhjVkpPb0xRQUZyRU5keXhiNVpKeUtEZDJTVVZDVHo1Y1loKysrWXVlQzhvWVFkdDhoV1Buc3RtVC9JaTFtNFFVR2VYbE9lZ2tJQ0tRU3NQcVNVMWkxcTh3cUF0Smx1d2pGV1FEQ204MHQ3aU1tOWV1UXZaMjNINDVGUG1UZlVhRGhVNEx1LzArTnJhM3JUNkJ5NldLZ3JYL2VDNS9VKzZ6SllsOXY1MTJpdmUvNWFIUFB2YlF2WCtXQ1RjTzA5c2NTZURNeXJvQmVLRkZTQmNUSmtPR0RTUVZhclZ5cE5BdUtWZmN3dDVPaXAxZEEyNEpLTkZJa3o0VTkyeGFLbTFvcytTdUdWT2VFUFpleG9waU1MZGN3ZExtTXVTQUFtNUIrU1pMYWhXMW1FSlZCcWtqQVJ6d1ZBdml3UUlWZUJ3dTFudlluNkVJdWV6QW0yT3EyQlUvSFZWZGtYeXFUT2U3NVZFK2hLbXpiRlF1UTZ5TFhSVExjVjJYZ08xU0tEMGZWYndVamZ5ZGd2ZERnUmYwSGVSZ1JydlRScFpsMkxweEJWcmJYQ2hjT1M4aVNKVkNtaVM0c2I2R3dUQkhvZ2pHV0FVc0NyYmRLcGZYTVBzeENnV1ZLSncrZm56N28rOSt5NTlmU05OZnJudWJ4eDUvNHJaQWMyU0JNeVYwOHpXZmE2NWxaN2RMMUowajBwazI4MFBXSFVNYVJoRzA2a0I0Q1pRdllMQ1ZJamRkUzEyclBTQXhnT3RLWnJMN1BVWEUzWTM5M1Q1MXRHdkxKckNrUU5TR0lRY3FUbDArNE1CVk1HcXQ4dWVPU0xBRFZLbGowbEpYT0V4YzJLUUNtdHR2aTFPRjk3Qy9reFIwc25FNW1SRFg3dmFscDZMQTgxREp0eGZGektwOGNIV05wS0NVaVMwQVFVSFlXT3Z4SXhvRllFa2J3ODBnb2VqeUJoTVdGN3BZdWZ3cStudTUxV05qSU5oTEFRQm9xUVQ5NFFBMzF6ZWNRSDRwTWlndXowbmNaMG9TNWVodlFydlR3ZGUrOWVILzhQWjd6djlsTVhyck1EM05rUWZPak41bkM4QnpBRjVTQkxXb1FJSTgxWlMzRFRneFNHSFFCdE1TT0Y5RWJ6dEJmOWlGU2VjaENTRElrS2krbll1QnNpUUFBYVM0WUkvWTk0V3hyWnR3UURYYkxtY25sdUZHbXNXQndlWXdycDNmSiszS2VRR2Zxemo5Z0tySGNNazlCUmV1NjNyMld3N2dtVDBQRWwrOUw3d0tCOTZGQWszdE1wUXJVNmd5b1M5eUpLcTluK0Q5VmV0Z1hHK0VhUUNROWVSU2RCelk3V3Z0ZG9ydDlUVnMzdGdDaUsxdU5JZjdYKzF6SjRwd2RXVU5SbHNCOWxKeHlCNGpSYTVZd0xiREpFMWJlT2o4dWF0ZmMvKzluNWhQNkN0MSt2bDI4cHFqMUt0MkdEV2ZYVmdoeEpjQWZPU2tVdCsrSkhqWHJSeHZHV2k5eEN5VUMyQlVHNHl6MEZzTEdQYVdrWjg3ajZYak42SGFONEJFa0tTd2NZRFJJR1BjcmhwamsyUUtsQ0RKYm4valFtaFFGUmU1VU5BWTc5WjIxTGNhaVZza1pSa2gxMzFNWEEzUEtxR1IzY3BkL055SFBVWFBHQWRFQWxYSWhYTFRRMW5ScVZ4RlFvM2tRRm5ET1l5U2h3VGRDejRVelFIUk9IbjJORjVXVnlCYWlpWk5LVVlhYkJmNHNjVUZuRm8raGl0WGQ1RXFMa2dMcVJBaFVuUjFMSGJuOHZjOWZQSG56aTEyZmczbE1yOUR0eVB2Y2ZiaGZYWmdoVUcrb2dnN0N3bmxIUmJUTjlteFhMSkVLdzB0S1l6TWdYUVhlaHN3L1M0NE9RbTBDTVIyQlFWRFF6bU5DeU4rbnNWaWlrbkJVQUxEU2NHcTJmREs5V2dGa2swMmh5a3FtaTRrVjBHU3JZb0tSZmo5aWc2L2E1RVhWdFlyTWdmZWdRc0FjY0UyQmFXNVVHSzNFbkxWUFVOeklYRTBmd202TFNxU1RCSzg5N0lyR1VHRHJEOHU0aWRsZlE5M3E0V1huM3NGa21XdVhrUjJQWDFJUkpDQnlUV3VyYXlXUXBVRTEwWEJsakZWQ29sS2tiWmFlT1RpaFpjKytNQ0ZQODJFSzNmSzI5eDF3SmtDSHNBMjA2N0JEc285bFJCV3Uwa2lvS1RieTVJbEpwQktCSm9NQnB4aU4rdGl2WGNTU0plUnR1WUF0S0Z5QTZVSDlwZ3pJU2RDeCtSSTNhcDByVklZdGlTQkVnVTJWbzNHTnpyYVJralhpK1hIc0tVY3h5NkFaVnd4RTBsSnM5cmU1Ykpiekl0cEJPczhMQmFjNktCcitTRXBMK0p5eFltNEpjUE9jNkc2L3FJY3pxdEsvUGtReUxmZFdNZmtPcFlwMEFMd2UrNkQ4SzlzN1E5SmhDRE1RN21QeUpBQ3BSM2NlUFpwWkwwOWFFNGhobXozbmdpRWdhRUFMQVRSQnRkdjNjSncyQzkxbnoxWkFxRGRzbmxuZDJGSnZ2Rjk3L2tMSjFMK2QvVmk1MkdDNXE0SjFmWVp1bm52OHdVQXo2WmkvdU9waEQ4NG42YmZ2OVlmdm4rUTY2VkVFY0V0b2tWL2lMV1hHTm5xQlJ3Ny94WXNMRzBnbFJmUk1xdEk4aDBrMkVJbXA2QmwzdlZwR1NnYXdyQ0JkdTB6VmpwSjRMZFYyZFhqTHZRUUw1WUIxMkNpWVV4dXgzb2xBYkhkVlZvbTlWNThqMEdIZnVTYXZBeFhROHJHaVg0MStTbkgvS0JjdFVHaEpsWEZ1ODB2TEdCcmRSMktHWmtwVnVjV2k3b0l3TUpjQjR0ejg5amQyWGJrZ0dzdmNrSWt1VFpJTzIxODRCMlAvc2NIbDdyL3dHVEQvcDIrQnU5SzRNd0lJQU5nRDhBekl1YkZqZ3grN2Z4Yyt2dDJNL285MjhQODRZR1J4WVNaakFoNmVnNjlkY0w2VGc4THkzTTRjKzVkV0Z4Y1J3czMwZEU3R0NvRFpvRXlBeVE1Z1NVSDNCSmFUUWxZaGhBU01JeTl5L3VWaHdaUUttQ3NJSzRWeUs0Y0ZHSHJpSXFDWnFoQWljTUZUbGl6S2U0dkZJeWkxelkxVjhLMDhia08xWXFvb3dwQXB2TDRlbmQ2dDlzRkV4VnpOMjRoWHNHYWdSbUtFeXpPZGJIQ3F0aU14OHJTK0FxTXBOWEMvZmZkZC8yOWp6N3lZMlp2NDlaaEZqcVBiSy9hSGU1Mzh6WUU4Q3psMlYvcFN2NzQyVzc2ODZkYTZoa0YyUlNEUVU1RDVEVEVuamE0dFRiQUs4LzI4TXJUODdqNTZxTllXL3NBaHZvMERGb1FvK3d6RFF4NEtPQ013ZHJ1Rm9Wa2dBekJjQnVxVFE0WXZ5L2FXTEFZRFloMjlTSU5JeG0wR1VMRUpzcytVRk9PT0JBeHRmU1d4dC9sQmFpS0lxSVVVYXlEUmhDRVVLalIwdHpJN28zN0dwOHZqZXhtcVZIbnJ0SEdqUjlvWTJ3UnN5YlpTKzduODkyT2E0bENzYzVPcVFUY1NuSHM1R256ZFYvLzJDY1c5amErZUNjSmdUZU54OW1IOS9HMnBaZy9CYU9mV1ZENDdRdUtmNjhCbmR2TWhxZDN0VG1yMGU1a29yQ1ZKK2h0YW14dkRkQldoR1BIbG5IODFDbk1MUUh0MWg0U3RRZW1JWWkyUUxRRndURVk3UWJuRW1QbDBKQ0NoR0h5M0YwTWZxK2xBU1IzMWZKeVRiaGI4Z2s3SXEzczZqL1lNTTZPUjBqUnMwVmhrdTlFUi8zbXMvTGlEUGFRdXJFQnQ1KzJVbWRwb3BQTHdpV0MzVHJOU2tIVlRXbW9kUkJ3STR6S3h4cVlQTE90Z0VTVmtXZTRqZFZ3eWp4cDRtZU94RTNBMnRHQnhXUEwvWGU5L2EwLyt1NHp5eiszZFhsRHZ4N2U1azBGbktZRE5RWkVHc0JWQUQ4UDRFc00rZmh5bXI3M1dJS1ZqZHljM3N4d2xsTHU1QUQyQ09pYkhJTzFGalp2Q1RwempLVXpwekYvUE1mY3NXMmt5VG9TM1FOTDR1NkdHcEpyYUF3THVWcUlodFZuTm5iTk80bWQrU2V4cFJkL3dRdTdqbDRHdExaVGxDN1UwVnE3bUI2Qlp3Z3VkYjhleFVuZGpnN3JlVWtvTHpiQ1ZYb01wZ0FITllacHBUWlpDSnd3eFBNeXU4UlVxSEF5MDBpb1Z6N1dBazBQK3E0bWFuZnFrSHVQWE52cmFnVlVyR0tRbmFwZ3RPYm04ZEJiMy9ZcjMvckI5LzN0elplZXkxL1A2K3hOQjV4OWVLRStyTkxPbndYd2JVejR6aE1wWjhkVFdsa2I2bk03eHB6TElRa3B3dEFyNXZRRkc2OWw2S3hvSER1NWdKTm5GN0V3bnlQbERLUTBTQm1uUW1uQVNqc05taHlHYlZWYlNFT0VuZSt3SVpRaEtSa3VRN2JHb1d3bk1Oak8zaGpqUVJaY3gyR0VKbVVkbzY2VlZZNU5TN1hPVXlsbXFvYTZ6aWo0R2xWVDY4VXJDVVRRaFVZaUp3NCtTTjd2b2JlekMwVmtlMklJVHNmYWRVTTdqUU1pUXU0bVBCa0NVZ3lWcHJody8zMi9mT0wwK2QrLytkSnpnd09HOEYvZE9jNXQ1a0NyQVA0eGdCOEI4QXNNdVhhcVJhL2UxMWFmUDZiVWE1SlJub3ZHZ0RQMFJiQnJFbXoyVXF4Y01YajF5d2F2dlhBTTZ6Zm1zYk43SElQOEpESlpodEVkaUZZZ2JjQm1DR09HMEhvQXJUTVl5ZUQzaCtaR1F4c0RtQnd3eG9yOVNRYVRaeTVuc25rUlFleWZZcGRXU1NIeFZHNWtsaUNQa0RMQnNSSlNZcmNGQUZSSVgxR3RJRnJkd0VtVjllbE5kWjdTKzBoMTQ3ZlRnaVoyeFV5M2JjMVdmdDA0QlJSZ05QbzNybUIzcjI5VmZTQzJ6enNZbUJNak1GckRHSVBCMEU2T0pxbFZBVm8rZjgvdXcrOTQyeE1mVFBldXZ4SFhGQjIxSlU1MzJxYmtRQ25zVHA5dmNsL250YUF6TUxLd1BwUjcra2FXRkJNcGRuTW9zS081Yzl4SHA1Tmc4ZXd4TEo1SzBlME0wV2xsNktnY2FVSVljR1o3NGxRTGxMUkJxZ1V0Q2dhMkZwRWFQelRtOUtQRmowTW5nR0VJSlRCaTlkTTRzZU1JeGc5MWtZSXlhWEh6dC90eDNGWnF0cDNUSWx6SmRVckN3Q3I2SU9oZ0tNSkFDYnVmUS9rc0d0bHpPbWxUbmhMdGxsMjEzQVkzQWlSRHRuRURWMzcxVTNqbXhWWFhjQ3JsaW5ZUmFHT1FhYXZ1T1J3TzhLVm5uc1cxbFJWb0E1dzhjMmJ3NEZ2ZS9pZi96RS8rdGIvVnRMZnpUbnFhcjFyZ3pBQWVENkJ6QU40RzRHc0JmQWpBNlQwdHh6ZHp1V2N2bHlWbUluWWJsd2tDUlFZSmEzUzZqTVZqYmN3Zlg4RGk4WG0wRnJxWWE2MEhVNldBU2hoYVRKR0lhelhuVkd6ODZrRTdLU3FjMkpGcnYzbUFsUnZIVGd2Z0VPelFXaVZhOGdWU0lpZWhxMFpwNWdBNHBoQ01aeWlWVklGRHBiWjBOYkVmWFJiY2RDMnhDQmdNVWNwdHFoTG9QTVBtODgvaXhjOThHcmQ2dGp2YUdPczlqZHZnWnNRZzE3YmxhV3RuQzcvK2xXZXd0YjJGdWZuNTdEMFBQL0tUdisxcjMva1RnNjJOL2hzQm1xOWE0T3dEUUFRcnMvbDI1NEUrQk9CMFgrallkbTVPNzJsWkZrR2kwUUlUa0xBbEFCSVd0QldqMVdsaC9zUkpuRDlEbUZ0ZVF0SldJQjVDY1E3R0VJUWNyQWpEZEw1Y3o4SE82MURMc2tqTXNLbFRPUWhIS2dWRVdhRkZLV2RvZkdGUUNrMENjaDNacXRpOFVPUTJBWEFFOWc3UGJueWhEcXltT3N3NHNJd1FFMFpCTVNDY1EyTUlDTkRiM01IbFgvNVZyRnk1aHIzY2psMXJvMjFvRmp4dnJnMXluZUhheWlxKzhPenowRnJqclE4Ly9PWGY4LzUzZm12ZTcxM0ZIV3lwaWNBNUhBQXhnRVVYeG4wSXdEY0F1RDhYTFBZTjV0WXpQajhRTEVLRUVnWVNaU1ZuQ1VBclNUQ2ZHc3dmVzhMU21aTllPRG1QZHBmUVRqV1lNeEJ5VU9wQ0pEK2t4bTZtbi8wRm45aVpGZFdDVWkybjlxbktQWjVzT3cvOFVKaFU1bkRTUW96RFJuRDFVTTJGWWhKb3hOV0FZL1hxUmpjeE5JVm45WDJvWkZJd0dSamFnNVkrdERaWWZlWmx2UFliWDhUZVhvNkJlMTF0dE4wMDdXU0VjMjJRNVJtMHp2SDBpNi9nMVJzM2NQK0ZlNTcrMER2Zi9nZlBwL0licUdrVnZwNmdpY0RaUDRBQW9BdmdYaGZDZlJEQVd3M29WRzZrdldQb1hDL1g4d010aTFhemtKRXdRNFNoRWtMS2dsYUxzYkRZd2NLeGVYU1BkZEh1dGpEZkZiUVg1a0dKS3dBeUIvVkNoa25tck5TaUMrZllqMTA3bWh1c2l4V0c4UE0vbm9MMlFHenFDQkFxUmlrYWYxYlBjVEM1WTdweC82bEpuRHBuRDBZUHNiMjZpaGQvNWJQWXVyV0RUTE9yVlRrOU5nRzBNZmJmMmlEWEdqczcyL2pNVjU3RjR2SGw1ei82cm9lKys4RzV6bGZRTUpnV3lZRzdKNFJMQVp4d1h1Z0Q3dXVpQWVhSEJvc0RMWXU3MnB6dDVWa3ExSFZlU0NOUkFJeEdvZ2p0eENyNEw3WUo3Y1VGZEpZVzBWbnNvck84aExtRk9TUXRCU1lnWStVbUpPMWRYN0VQcWNqMnZzSFdpbXlCME9VMGZyVUhNVVFsWTNPY093MGNTMDliVnJDL3RZR1huM3dTTnk1ZlJTWU1ZeHdwWUF5MEdCaHRCZCtIdVlZeEdyazJ1SFQ1TmF6M0JwZmU5K2pGYjN2dmlXTXZvS0V6SUFMbjd2UkFES0FENElMTGhUNE11LzluQ1FBUGhKWjJjeXh0RExON3RER3NYUGlsV05sMkU3SkxtRksyUUdvcG9OdEpNSDk4Q1l1blQySCs1SEcwbCtiQVRybkZFaEpVSk94R05ISm9KTnhDa2xyTmFXUEtxVk1MbkpJY0tQZmlCTkt4Zk9lQUl5TFF3eUYycjkzQTFTOThIbHVydDlETERUUXBaTm9TMzhZWWFHMUpDbTBFd3l3REVYQjliUk0zMWpkZS9vNnZlZXRINWhsWERsaHVpTUE1NGdEeWJOeHhBRzl4QUhvTXdCbFk0UUVlQ0JhM2gvblNydUY3TW0zOHRpcW9KTFhNSEFTSkFoSzJBd3F0UktIVGFhRzcyTVhjaVJOWVBIMEtuYVVGdExwdHFBUVFrOXRhaVhKN0xWVnF4eFJRYWdVSU9jbW4wRmtXRmY5UVROdjFxQlZOekQ3VWswSlVYUkFVV3N0WXpLMVZ0elVjVm02dHZGaFBzcmUrZ2V0Zi9ncldMcitLZkpCQkM1QnA2emEwOFUydlFIK1lGYzgvekRKczcvV3h1amU4OUxHSHpuNTBubkgxS0lFbUF1Zk9BY2l6Y1ErNFhPaHJBVHppUUtVQW9nRm9zYWRsYVMvWFM3M2NMSks3VlZ0Nm05eEdNU3FFYWhRQkxVWG9kdHZvTHM3aDJNa1RtRnRlUnJvMGo5WmkxNEtQRTd2U3c0dWh3NnZIcUViMml3c0YwSklROEwvbVEwTURVeTJUUzNXQ3AyaEdKUzdhYUxMaEVQM05EYXk5ZEFtckwxL0dvRGRBcHJYYlQyclhzaHV4QlU2QnhqRFAzZmNGdWM3UnowV0d4UC9xQS9lZS9qanZiZDA2YXFDSndMbnpJQ0lBTFFDbkFOd1A0SjBBM2d2Z1FSZktLYmdzWTA5anVaZWJ1VjF0bGdkYTVoTEZ4SzR2TFhGa2dXZ0R4WUFpUjNlM1VyVG4ycGhiWGtUbitETFNiaGVxM1ViUzZxQTFONGUwMDBIU2FnRUtsVjJubnYwcTE1cjQxcDFSOVJvcllPTGJkUnpsSFZ3elJoaDVmNGg4a0NIcjdXS3dzWW50RzlleGVmTTZocjBCK3JteFBkOEZZR3hvWnNUdTNobm0xdE1ZWTNzZzlqU1poZm51NDI5Sjg3OEpZSERVQUJPQjg4YUFxQVBnSklEekFCNTFJZDBETHB4YmdOTU9OWUprSXpObk15UEpiaTVuN2Q0ZG9sVFo0VFpXYk1YOGlLQUlVR3lRS0t0Z21TWUtLbUdvSkVIU2JpR2RzMFZZMVhHZ1NoSXJ4NXNrSUdWWk9UR1d6azVVNGhZOGhWT2k0cHVWaTZXNlBnekxlbnZZM2R4QmIyMEwyZDQyOHQ0QWc4RVF3MkdPb1RZd3BtemxNV0kzYzR2cnZTdHBaMjAzdXVVNUtHMi8rdWhTKzNlbUp2c0tSbGZqUk9ERVVBNXdubWdSd0RIM2RkcDVwVWVkUnpvaGdqWVJLUzJTM0Jyb3MxcW92YWZsbEd0OEpGYU1oQWlLZ2FLempLdytnbEtXc1ZOa0YxUDUwRXlwVWl2YTZqdmJPbzFLVXFUS2hucCtZMFBSZkNwbE5kOUtveEYwbGlQcjl6SEljdVRHOXNKcEk4aU45VnpHWFZaYWJCNWprMzhCaysrZE0vWkxheWppOWVXRnVYKzJSUG1mYXhHdVlZb3dlZ1JPQkZDVFIxcDBZZHdwQUc4RjhCRUFEN3VmRVVDVWliUTNNem1WQ2RxN3VUbVZzSUkyb0VUWmkxcEVvSlJiV1NKQVVtd3JLSmN4V1FsbXNtWFRZSTZmSGQxdDFYMjRiTkowVTYxR2ErdEJqRzNUTWVRMkRvaTRobEp5TlNXNzBNc1lLNEtTdWZZWmdVQnJOMk5rek02SnVmYXZMNmY4VXd6NXo3QnlYMGNXTEJFNFJ4OUVJVXQzemdIb0cxeU9kQVpBRzZXY0RRa0VtNW1jeWdWdEpzWkdwczhDZGhVa2c4aXZ4L0JDNVo0WnN5SWVkdDE4MFFEcVpMQ01zVG1JSDdxMFBrMktSVlE2WElYb1F6RVRBRXdNakV2ZzdLeU5vNXUxRmpiNTNuSW5mZTdNZk9mdmlUSC9Gc0NyYU5CMlBxcWdpY0M1ZTBERUxnYzY3NERrUTdvSFhNN1VjU0FySkdYOFdiMDFNR2NGU0pnSnU3bFp0aDJoQkMzVUxsWTdoc3QvQXhVY3YxKzNwc2Jtdkl1bjJOaUZjUkowV2p2UElnWXNDUmpJdGM3ek9ZWDFjL1B0bHhLbXp4THdjd0MrRERzWGhic0pOQkU0ZHllWWZOZkNJb0JsQjZpdSsvdVMrL01FYkZ2UXZTNS9TaEQwQ0lnSXRuSnp5ai9obnBhbG5wWkZGZWpBZWNGRk1ZWnlRYnNVcWltTG5ONHJlU0MxRkEwcytaZERPeGF2bXlSN3h4Syt0dGhTcjBMa3l3RCtNNERQQXJnMUtaYzVxb0NKd0huemhuZCtmY0dDQyt2dUIvQU9BTytDN1c1WVFIVzlnZmNkamFJNlJxQjJjbGxHRUs2RkJWRGZXUTBBODRxMzJ3bjNMVDFBQm9ROUFDOUQ1RmNkV0Y1emVjeFVRWTBJbkdodkZJQ2FQTlFwQjZhVHpqdk51ejlQdUo5MTNXTVNZSUw0UVBXNS9mYzFyQnp4VFFBdnd1bzZYSE4vcm1ER2JXaEhIVEFST0YrZElCb0hyRllBcENUSWw1b0FVcmNRT0FQWU5TeGJzRUphTTE5Y2R3dGdJbkNpUmJzTjQzZ0lva1dMd0lrV0xRSW5XclFJbkdqUkluQ2lSWXZBaVJZdFdnUk90R2dST05HaVJlQkVpeGFCRXkxYUJFNjBhTkVpY0tKRmk4Q0pGaTBDSjFxMENKeG8wU0p3b2tXTEZvRVRMVm9FVHJSb0VUalJva1hnUklzV2dSTXRXclRaN1A4ZkFNUUdrK3FrMkdKSUFBQUFBRWxGVGtTdVFtQ0MnLFxyXG4gICAgICAgICAgICAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNNEFBQUdtQ0FZQUFBQTB6N3RIQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQTU3bWxVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NEtQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlRV1J2WW1VZ1dFMVFJRU52Y21VZ05TNDJMV014TVRFZ056a3VNVFU0TXpJMUxDQXlNREUxTHpBNUx6RXdMVEF4T2pFd09qSXdJQ0FnSUNBZ0lDQWlQZ29nSUNBOGNtUm1PbEpFUmlCNGJXeHVjenB5WkdZOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2TURJdk1qSXRjbVJtTFhONWJuUmhlQzF1Y3lNaVBnb2dJQ0FnSUNBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwaUlnb2dJQ0FnSUNBZ0lDQWdJQ0I0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUNpQWdJQ0FnSUNBZ0lDQWdJSGh0Ykc1ek9tUmpQU0pvZEhSd09pOHZjSFZ5YkM1dmNtY3ZaR012Wld4bGJXVnVkSE12TVM0eEx5SUtJQ0FnSUNBZ0lDQWdJQ0FnZUcxc2JuTTZjR2h2ZEc5emFHOXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNCb2IzUnZjMmh2Y0M4eExqQXZJZ29nSUNBZ0lDQWdJQ0FnSUNCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJS0lDQWdJQ0FnSUNBZ0lDQWdlRzFzYm5NNmMzUkZkblE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVVYyWlc1MEl5SUtJQ0FnSUNBZ0lDQWdJQ0FnZUcxc2JuTTZkR2xtWmowaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTBhV1ptTHpFdU1DOGlDaUFnSUNBZ0lDQWdJQ0FnSUhodGJHNXpPbVY0YVdZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZaWGhwWmk4eExqQXZJajRLSUNBZ0lDQWdJQ0FnUEhodGNEcERjbVZoZEc5eVZHOXZiRDVCWkc5aVpTQlFhRzkwYjNOb2IzQWdRME1nTWpBeE5TQW9WMmx1Wkc5M2N5azhMM2h0Y0RwRGNtVmhkRzl5Vkc5dmJENEtJQ0FnSUNBZ0lDQWdQSGh0Y0RwRGNtVmhkR1ZFWVhSbFBqSXdNVGt0TURrdE1qTlVNRGs2TlRnNk5EUXJNRE02TURBOEwzaHRjRHBEY21WaGRHVkVZWFJsUGdvZ0lDQWdJQ0FnSUNBOGVHMXdPazF2WkdsbWVVUmhkR1UrTWpBeE9TMHdPUzB5TTFReE1EbzFOem94TWlzd016b3dNRHd2ZUcxd09rMXZaR2xtZVVSaGRHVStDaUFnSUNBZ0lDQWdJRHg0YlhBNlRXVjBZV1JoZEdGRVlYUmxQakl3TVRrdE1Ea3RNak5VTVRBNk5UYzZNVElyTURNNk1EQThMM2h0Y0RwTlpYUmhaR0YwWVVSaGRHVStDaUFnSUNBZ0lDQWdJRHhrWXpwbWIzSnRZWFErYVcxaFoyVXZjRzVuUEM5a1l6cG1iM0p0WVhRK0NpQWdJQ0FnSUNBZ0lEeHdhRzkwYjNOb2IzQTZRMjlzYjNKTmIyUmxQak04TDNCb2IzUnZjMmh2Y0RwRGIyeHZjazF2WkdVK0NpQWdJQ0FnSUNBZ0lEeDRiWEJOVFRwSmJuTjBZVzVqWlVsRVBuaHRjQzVwYVdRNk56aG1PRE5qWkRJdE5HSXlaaTFpT0RRMkxUa3hPREV0TW1WbU5USTBNRGs1TmpJMFBDOTRiWEJOVFRwSmJuTjBZVzVqWlVsRVBnb2dJQ0FnSUNBZ0lDQThlRzF3VFUwNlJHOWpkVzFsYm5SSlJENWhaRzlpWlRwa2IyTnBaRHB3YUc5MGIzTm9iM0E2TnprMFptUmpZV1F0WkdSa055MHhNV1U1TFdFek1XRXRPRGsyWkRZME56WTVaVGd5UEM5NGJYQk5UVHBFYjJOMWJXVnVkRWxFUGdvZ0lDQWdJQ0FnSUNBOGVHMXdUVTA2VDNKcFoybHVZV3hFYjJOMWJXVnVkRWxFUG5odGNDNWthV1E2TmpCa09XTmtORFl0T1dZM1lpMHpZelF4TFdKa05Ua3ROVEZsTm1aaVkyTXpOR0kxUEM5NGJYQk5UVHBQY21sbmFXNWhiRVJ2WTNWdFpXNTBTVVErQ2lBZ0lDQWdJQ0FnSUR4NGJYQk5UVHBJYVhOMGIzSjVQZ29nSUNBZ0lDQWdJQ0FnSUNBOGNtUm1PbE5sY1Q0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhKa1pqcHNhU0J5WkdZNmNHRnljMlZVZVhCbFBTSlNaWE52ZFhKalpTSStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh6ZEVWMmREcGhZM1JwYjI0K1kzSmxZWFJsWkR3dmMzUkZkblE2WVdOMGFXOXVQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YzNSRmRuUTZhVzV6ZEdGdVkyVkpSRDU0YlhBdWFXbGtPall3WkRsalpEUTJMVGxtTjJJdE0yTTBNUzFpWkRVNUxUVXhaVFptWW1Oak16UmlOVHd2YzNSRmRuUTZhVzV6ZEdGdVkyVkpSRDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOMFJYWjBPbmRvWlc0K01qQXhPUzB3T1MweU0xUXdPVG8xT0RvME5Dc3dNem93TUR3dmMzUkZkblE2ZDJobGJqNEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE4wUlhaME9uTnZablIzWVhKbFFXZGxiblErUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESURJd01UVWdLRmRwYm1SdmQzTXBQQzl6ZEVWMmREcHpiMlowZDJGeVpVRm5aVzUwUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDNKa1pqcHNhVDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSEprWmpwc2FTQnlaR1k2Y0dGeWMyVlVlWEJsUFNKU1pYTnZkWEpqWlNJK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpkRVYyZERwaFkzUnBiMjQrYzJGMlpXUThMM04wUlhaME9tRmpkR2x2Ymo0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BITjBSWFowT21sdWMzUmhibU5sU1VRK2VHMXdMbWxwWkRvM09HWTRNMk5rTWkwMFlqSm1MV0k0TkRZdE9URTRNUzB5WldZMU1qUXdPVGsyTWpROEwzTjBSWFowT21sdWMzUmhibU5sU1VRK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpkRVYyZERwM2FHVnVQakl3TVRrdE1Ea3RNak5VTVRBNk5UYzZNVElyTURNNk1EQThMM04wUlhaME9uZG9aVzQrQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRFVjJkRHB6YjJaMGQyRnlaVUZuWlc1MFBrRmtiMkpsSUZCb2IzUnZjMmh2Y0NCRFF5QXlNREUxSUNoWGFXNWtiM2R6S1R3dmMzUkZkblE2YzI5bWRIZGhjbVZCWjJWdWRENEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE4wUlhaME9tTm9ZVzVuWldRK0x6d3ZjM1JGZG5RNlkyaGhibWRsWkQ0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5eVpHWTZiR2srQ2lBZ0lDQWdJQ0FnSUNBZ0lEd3ZjbVJtT2xObGNUNEtJQ0FnSUNBZ0lDQWdQQzk0YlhCTlRUcElhWE4wYjNKNVBnb2dJQ0FnSUNBZ0lDQThkR2xtWmpwUGNtbGxiblJoZEdsdmJqNHhQQzkwYVdabU9rOXlhV1Z1ZEdGMGFXOXVQZ29nSUNBZ0lDQWdJQ0E4ZEdsbVpqcFlVbVZ6YjJ4MWRHbHZiajQzTWpBd01EQXZNVEF3TURBOEwzUnBabVk2V0ZKbGMyOXNkWFJwYjI0K0NpQWdJQ0FnSUNBZ0lEeDBhV1ptT2xsU1pYTnZiSFYwYVc5dVBqY3lNREF3TUM4eE1EQXdNRHd2ZEdsbVpqcFpVbVZ6YjJ4MWRHbHZiajRLSUNBZ0lDQWdJQ0FnUEhScFptWTZVbVZ6YjJ4MWRHbHZibFZ1YVhRK01qd3ZkR2xtWmpwU1pYTnZiSFYwYVc5dVZXNXBkRDRLSUNBZ0lDQWdJQ0FnUEdWNGFXWTZRMjlzYjNKVGNHRmpaVDQyTlRVek5Ud3ZaWGhwWmpwRGIyeHZjbE53WVdObFBnb2dJQ0FnSUNBZ0lDQThaWGhwWmpwUWFYaGxiRmhFYVcxbGJuTnBiMjQrTWpBMlBDOWxlR2xtT2xCcGVHVnNXRVJwYldWdWMybHZiajRLSUNBZ0lDQWdJQ0FnUEdWNGFXWTZVR2w0Wld4WlJHbHRaVzV6YVc5dVBqUXlNand2WlhocFpqcFFhWGhsYkZsRWFXMWxibk5wYjI0K0NpQWdJQ0FnSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGdvZ0lDQThMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW84UDNod1lXTnJaWFFnWlc1a1BTSjNJajgrWXdtSzJRQUFBQ0JqU0ZKTkFBQjZKUUFBZ0lNQUFQbi9BQUNBNkFBQVVnZ0FBUlZZQUFBNmx3QUFGMi9YV2grUUFBQjhURWxFUVZSNDJ1ejllWnhzMlhFZUJuNFI1OTZibWJXK3BkN2UrNzZoMFFBSUVpQkFpaFFGYmhhSFdzMmhLRnNlam1qWklpMXlKRmtHWmRPbVpGdUFQZFpNYXp3YVNaUTVvc3lmeHBLMStEZjZTU05LWTBLaVFBNHBtQVN4RU9pOSs3MSsrMXA3NVhiUGlmbmpuSFB2dVV0bVpkV3J0M1RqQkZsNHIrdGxaV1hldk4rSmlDOGl2aUFSUWJUN3l1aEx2L1cxZi93YnYvWmJ2L2ZHelp0NC9mV3ZZMm54OE9jVzU0NzhLSUJ6QVBDWmx6OGRyOUk5Tm82WDRENUVEa0VJQkNZQ2lQeTNUYnd5RVRqUnBwZ0lTQWdvb2dFcTBSTXRBaWZhTks4akFCR0RtYUNZQVNDQ0p3SW4ybFNQQXlOR0RJd1lHQk56MEFpY2FMTjVHekF4TXhnRUlrSWtjQ0p3b3MxZ1Jnd0VnRUJBUkREUjdVVGdSSnZCNHhCRWpBM1RtQ25tTnhFNDBXYktjWXlRaUZoNnpXSkdJbmdpY0tMdG51UUlFWUdzdDRHSThlQ0pGb0VUYmJMTHNkNkZpQ0FSTHhFNDBmYmdjWmd0UVNDSXJGb0VUclJaUFE0VlNVMEVUUVJPdE5rY0RwT0FDRVNNNkd3aWNLTHQxZkdJQVJIRlZyVUluR2l6MktBL2ZFTkVJR0paZ3BqalJPQkUyOFYrK3FjK0syKzlmdTd6RmpVRTV2Z1JSZUJFbXpGRUUvSGVocGhnb3NlSndJazJ3NGZDaW9qWmtnTkdZc3RBQkU2MFdZMWdoeitOSXdpaVJlQkUyOFdNMFM1VUkxRDhpQ0p3b3MyYTQ3ak9UcEdpWHkxYUJFNjAzY0kwMStRSmlpM1JFVGpSOWtRT3dQV29FY1dQS0FJbjJ1eGVoMjNMVFNRR0luQ2k3VG5YRWRjMUVORVRnUk50aGh5SHhPVTZEakppSlFpaVJlQkUyODNiV0k4VDZIUkVyeE9CRTIyWEVNMUpEWGg1cUFpYUNKeG9zMzB3UklDVGg1STRsUk9CRTIxR3J3UEFpTURZRGdLS29Wb0VUclJkVEd1TjBNazRTanA2blFpY2FOTk1LUVgyaFUveGtoM1JJbkNpelJDcVdhd3dNNWhWdkNBUk9ORjJNeUt5THNZNUdtTjBETlVpY0tMdFpubWVrKzBhaUovVi9XcEp2QVQzcytjQldER1lWUFE0MGVORW00VWM4TTJkRWpzSEluQ2k3WVVkRVBlSGxIeEJ0QWljYUx0OE1NUmhVM1FzZ0ViZ1JOdk5qTkVpYm1XQkVlTzlUdlE0RVRqUnBuNG9yTWgxZVlLdEJHNEVUUVJPdE4xTWF3MkJIV0l6Z2pnRkdvRVRiUmJ6ckJvVFJ3bmNDSnhvZXpXNytETkdhUkU0MGZhR0dsaVZHMk5NWk5VaWNLTE5aQVMzV0VvOE9SQmRUd1JPdEptY1RxRnlFNzFOQkU2MG1VRUQyTEVDQ2ZwdW9rWGdSSnRnUm93QmJBM0hxWG5HenlrQ0o5cHV0cjY2dWEyMTlFR0FzUmlTR0s1RjRFVGJ4UzVmdkxZeEdvNXVpdGhRRFZGeklBSW4ybXdwamhGREVJa0YwQWljYUhzd2drQllXYTBCanIxcUVUalJadk00Rmp4T2tEQ0szRVRnUkp2TjQxaThTR3p3dkU4dGFnN2M3eWNiTXlBUlBCRTQwV1oxT2NSS1FZeEFJbkppcUJadE5qTXVUQ1BGb0VoRlIrQkUyd3RGSUZIOU5nSW4ycDQrR0xLVE9LNXpJRnJNY2FMTkZLb1oxeFpOVVRzNmVweG9Nd2RweklVa0lTUjZuUWljYURNWkdSSEFhZDFRTE9aRTRFU2JFVG1BRUJHSUdWcnJ5QkRFSENmYUxLR2FaYU1KQkFJb2poUkVqeE50RC9DeHZUY1U1M0VpY0tMdER6L3hLa1RnUkpzcHhTbEEwL0xYYURISGlUYjlaRk1NWldLb0ZqMU90SmtqTk11b21laHhJbkNpN1MxY3MxaUpaWndJbkdoNzhqbUNoRG15MFJFNDBXYkhqT3NjWUk1MW5BaWNhTFBpaHBtRWlPMUt3NWpmUk9CRW15Mi9FUUdKQ0l3eDBkMUU0RVNiMWVQWVRodTdaQ3BhQkU2MDJhRWpVdVk2MGVsRTRFU2JKVlFEMlNaUHV6eVhZNDRUZ1JOdE51UllRb0NZd0J3ZFRnUk90Tm5CWTcxTnZCQVJPTkgyOU9FUXdSZ0RFL2RLUmVCRW00MGE4S01Fa1JlSXdJbTJseWpOajA0VEkySW5BaWZhek1peEc2ZVpLZFp5SW5DaXpXcWo0V2hENFByVm9zdUp3SW0ydXhsalpITmorem9jSlIzMzQwVGdSSnVSSENBaXArVXAwRnBIbHhPQkUyMldGQWV3ZERSQVlGYlI1VVRnUkp2WjdVQmdPNlIxdkJnUk9ORm1kenNFWmhWWnRRaWNhTFB5QTNDMVQyWDcxR0tPRTRFVGJaYlBSVVJFeEc1bU03SG5KZ0luMnA0VG5XZ1JPTkgyQUJjQ2JBMG4xbkVpY0tMTnlnc0FybXNnN3NlSndJbTJGM0pBeEJnUU1kSTBpMWNrQWlmYXpCNEhkZ0owdTcvMklaREV6eW9DSjlwdXdIRUdFVUNMaWFGYUJFNjBQYnVlU0E1RTRFU2JPY2NwNW5HaVJlQkVtL0Z6a1lDRHpzZDV2Q0lST05IMmtPZTRQYUR4WWtUZ1JKczF0UkZiL0l6TkF4RTQwZmJCREFDbTNNb1dMUUluMmhTVE1sNURKQWdpY0tMdEJUaWVIaUJtQW1JQk5BSW4ya3hCbXAyY0ppakZpdzgrZHV5ajhiSkU0RVRiRFRsRWJvT2hJTTl6R285SE1WNkx3SWsyVTd3V2RBem9xRHNRZ1JOdHhod0hnSmlvcXhhQkUyMHYzcWFZd2hFeFVCd0ZPeUp3b3Mxa3hnaEFFbmZrUk9CRW01VWJjSzRHUmdDdGRmbTlhQkU0MGFibU9FRVJsS0JVVlBPTXdJazJtOGNKZ01OUmxEQUNKOXFzOENHSXNYMXFXZFFkaU1DSk5ydlhJYllMcHFJTWJnUk90Tm56SEREWk9vNGpDS0pGNEVUYkhUb0NyWTByZ0VwazFTSndvazM5VUppbDIrc3NDNFNJQ05vWUFCUlp0UWljYUx0OUxuUHozZU9la0dhS0MzUWpjS0xORnFRSkFLS2l1Vk1raG1vUk9ORjJNeExuYmtRRUFva0YwQWljYURNaHgybmJpQWdJaUF0MEkzQ2l6UnF1K2I4WUl5Q0s1RUFFVHJTWnNXUFZQRm1ZNDBjVmdSTnRab1pBaklFeFp2UG10Zld2eHlzU2dSTnRoalRISzNZb2xjajFxMnNiOFpKRTRFU2J5ZVA0SEVjREV1ZHhJbkNpN1lrY3NQNG5LdUZHNEVTYlBWYUx5M01qY0tMdFBWUmpackJLNHNXSXdJazJxN2Noc3ZGWi9KQWljS0xONm15aytCK0FPSklERVRqUlpuRTRJa0pHREl3eDRMaFpLZ0luMnQ2U0hDTmlPNlFqcXhhQkUyMTN5SUFnekl5NEdpY0NKOXFldUFINy95WlMwUkU0MGZaS0VOZ2RvQlI1Z1FpY2FET0hhbVNMbndiamZCU3ZTQVJPdEZsQ05SK3dpUWpjMnZib2RpSndvdTM2d1JBTEV3UGttajBqcXhhQkUyMTNNMkxzOUxTUnNrMDZXZ1JPdEYyU0hDT0FHT1E2ajh4YUJFNjB2V1U2QkdNTWlJQk9weHV2UndST3RCbm9BYkhFZ1B1SW9xNWFCRTYwM1NNMXkwWUxtTW1HYlZIbEpnSW4ya3dlaDVnWW8xR3M0VVRnUk50RG9BYmYzQWxXOFdPS3dJazJLeTlnY3h3UW9xWmFCRTYwV1Q0VXhVaVNaSTVnTnhWRXpZRUluR2d6Mk5QUFBYWTZ5OUlqNUxxam1lT0tqd2ljYUx0L0tNUjI5eWU4NkRwdDZqeVBiaWNDSjlvMEV4RVNzU3NNUlFTSjZyNlI1em9DSndJbjJxN2dxU0VwWHBFSW5HZ3pHcm1OYkdMSERHTG5RQVJPdEYxQmczSmJBVmtIRkwxT0JFNjBXUU8yR0tSRjRFU2JQVVNUS25oaWcrZjlabEdVK0g3ME15SWtJdEJhWTV6bmdDTEVVQzE2bkdpN2ZTaE1Ka0FSUUN5UkhJakFpYmFMNVhsT3Z2Z1ptZWdJbkdpekp6a0NBRW9wTUhNRVR3Uk90RmxNc1NJSTdOZzB4KzdvQ0p4b016b2NDTE90ZWVaNUR1YW9JQjJCRTIxWEc0OXpGaEVZbzJHMHJ0SFQwU0p3b3JXSGFrcWgyQ2xscHo5ankwMEVUclRaekRvWjBjYi9SL1E2RVRqUmRzOXpDSUNBT080cWlNQ0pOcE5wbTljQUVEQ3A2R29pY0tMTmFzYkVmZE1ST05IMm51R0lsYjQxTVBGaVJPQkVteTIvc1VxZURrRmdpbldjQ0p4b00zZ2JFSnowcmRZbXR0eEU0RVRibSt1eHVtck1zUUFhZ1JOdFZzelVLemN4WEl2QWlUWVZORzRlUjJwYU4vSEtST0JFbTViakdHSGpsK1pTZERRUk9OSDJGcXJCYml5UXVIRTZBaWZhREtBaEs2VW1JbERFWU9aaHZDb1JPTkZteVhMSTlxdDFPbk9EaGQ3aGMvR2FST0JFbTJLZmVmblQ5TVRURDMvU3FuY1NqR2dRVVd3ZmlNQ0p0cHYxNW5wUGtkczQ3Zm1DZUZVaWNLTHRUZ3c0Q2M5QzVTWitUaEU0MFhZemJRd0JzQ0lka1UrTHdJazJteWxtOGZNNENhZUJJNG9XZ1JOdG9nbEF0anU2OHZGRWdpQUNKOXJVRDRVSldvemwxUWpJOVhBaFhwVUluR2k3bURHMlZZQ0pNTTdIM2Y1dzYwd00xU0p3b3UyVzR5Z2xMbVN6b1p1bDFpSndJbkNpVGMxeHhMSnFCQ0N4R211RVdNdUp3SWsyUTZoR0JDSUdFVUhFUk5CRTRFVGI5VU1oc3JFWldjRjFpcG9ERVRqUlp2QTRJZ1FSRUFGS0ZVdnpJbmdpY0tMdFprUlVaRFhHaG1veFhJdkFpZFptUC8xVG4zWHNnTjNHUnN4SWxJS0srM0h1TzR2TGMrOGp3SHptNVUvejVVdVh2MU9iL0l6V0dnRFE2WFRCaWxmbTVudkp6bmEvQ2pEN00vRUNSby96ald1ZmVmblRkTzNhdGIrOHN6UDRoMWN1WFh0cGUzc0hlVDdHL01JaURoMWFldkhFZ3d0L2QyRkYvcVBlSVhNcVhxM29jYUk1KysvK3E3K1JmZHQzZmZTcHQxNC90M3o5NmcwWTUzRUlRSDluaU5kZmVlV2pXNXMzdnFuWDdmMytreWRmL1A2MVcrdURlTlVpY0w3aGJYTmphK21kTjk0OWVmWEtEUmlqU3lhQUNLUGhHR3VyNjdoeC9RWXRMaTQrMHUyc0hRSG9VcnhxTVZUN2hqY2owdDNlN3Zmc0tyYUNJN0RZWVhaY3RHQTB5bnNRTE1ZckZvRVREUUJFU0d0VGZCN0Y3a0t2RzAwRUltVkZwUUVWTDFnRVRyUUdoZ1FTNkhpS01RQUl4QVJsZDRMR21rNEVUalNVQUtHMnpRVEVEQ1lHbDZxZXNZc2dBaWZhcmgrUzN3ZEtaUUFYcjBvRVRyU1NJSmk0ejhPSWNkNkhvc2VKd0luV0NNdUtQeDJQWmdTQUFWTUNRaG85VGdST3ROQlVrckRQWWNpS1J4ZElLcWdDQXJRZXozTTJQQk92V0FST05BRGYrbTBmUGpPM01QYzRpSndJb1JTZXAvaFBBYlRXOHdRZGdST0JFdzBBdE5IRUhIZ2NLVDJPSjlNRUFraFVpYm9mTExiYzNFZldSa1dMbERWUVg5OUIzSmNUUFU2MGdCaHdyc1VEcUNDZllTQUF0TFphYTFwMEpBY2ljS0k1MExTQWdRQjJZWnMyOEdLZUZGbTFDSnhvUlJoR1hOdjNTVlNTenhxMjdVWUVZRkx4YzRzNVRyUktxT2J5R0FwQVpBazFCVU1KaEFCTkhEMU85RGpSQ3VCNFZzMlZQNHYvWlliZkNTcEdZTndha0dnUk9OSHFvUnNBNDd1a0hWa2dSVzBuYmk2SW9kbzNnSVhpR25YN3dFdlBxRWVmZUlpNjNjN1IxVnZySkNJd1ltQzBoakVHUmh1SUVSQVRFcVhBQ2VQUTRVT1AvdjQvK0w5N1pqek0xLys3LytwdjNPcDJPK2JJeWlIejFTKzlxcWU5amlqc2NZRFJRVnZ0SU5xQkFjTXp5Z3lBbm5ybU1kN2EybFlmK05BVGo2Vlo5dGoyOWs1R2tBK0Q2SVh4T1AvbzY2KzhmWEo5ZFFNR0JxSWRCVzAweEJnWVk2QjFEcFVvUFA3a0kzTHMrSW9RMGRiMjl2Yi9yOXZ0NXIxZTk1MnRyZTEvUGI4d3Q5UGZIbnh4dUNPM1B2RFNzL3JGRHoxamZ2cW5QaXNSU0JFNDl6dFFrc1dsK1RSSmtuUTRHTTAvL1BpcFo3cTk3cE9qNFdoKzZkRDh2N3UxdWRQSjgvejRlRFE2UEI3bnlITk40L0VZbzlFWWc4RVFSbXVJS1lmWWZGZTBHRk9FYkVveG1CbEN0aEtxbEVLYXBTQ0dkTHNkNldTZDErWVdlb1BsUTB0OW8vWGZCT1RWTDM3aGxTOSs1Ky8rWGZrdi8vTmZOZEVqUmVEYzB6RExlWklFUUpabTZjS3AweXVQemkvMVBxYVlYeUttai9WM0J0bDRQRDR5SG8wWGg2TVI4ckVtWXpSRUJNYUk5U1IrU1c2UjNOaDliRjVuM1g4K1JnUWlwdmkrTWJvQWxkRU9YREJPeUpDUXBTbVNWS0hYNjhyOHd0eU5YcTkzc2R2cmZyblQ3ZnlqeGNYNVYzNzlWNy80amg2b1BJWjJFVGgzQXlnKzlFclNMRDBzSW1mT1BIajhPMGFqOFpPZFR2SmR1ZFlualRFTHc4R0k4dHptS0NLbHA3QVk4UW0vUy9kRlhHK2FiNmV4d0lHSWE3Y3BIMlBFRko3SHVGNGNnUlRmMDJWdmp2VmNZcHhXZ1NYaDBpekYvSHhQbHBjWGJ5NHRMNTRsVmkvUHozZFdyMTVlKzE5LzhzLzhpWEVNNlNKd0RobzRCQ0ROT3RuaXlySGxwK1lYNWo3Vjd3OCtJU0l2YXAyZkdJM0dwTFdCTWRwMk15TUFTc2lIT1RvWlJSZ21BWWRHRm1TdUVVMUVDcUNoeHJDSmNkNEhJUkE5Z0d5RGptZ0RFVjB5ZE83ZklBSWhPMVdhWnFrc0xNNWhhV254bGVWRFMvK3kyKzM4aTZ5VHZQSy8vK0VmZXJNTlJCRkFFVGd6aDJJcng0N01QL3VCeDc1amZXM3phV1BNSDE1ZjMzaWl2ek00bk9lYXJJaUd2NUxlUzFTcFk2djJWUGFlK1JzWk5XQjRMeVJpaXA4V0k4Ry9vd3pyQ2dDNnYzdWcrVEJReWpEUENodGFiMVJacytOQ1ArTkFteVFLaHc0dnlmRVRSNjRzTFMvOVlwcXBuM3Z6elRmZkdheDJZazRVZ1ROYk9IYjh4TkgwNUptVng5STAvWjdoY1BnajIxczdMMjV1Ym1kYWE0SVVrS2o4VUhnWlBhQks4RlEzRWZxUXJQSXpZb0l1YU5ONGpBL1pDcGlKQk9HY0tRSGt3T01CYTdRcHhoRWtmSjdnNS94ck10cUFTTEIwYUVsT25qeCtkbWw1NFRVUS9iVzE2enYvNHRiMXJSRmE2a2ZmcU9CNVh3Tm5GNERVVGMzTjkrYWVmL0dKaitSYS82R2Q3WjAvdkxHMmVXdzRHcGZYYU1LMUttOW01M2hNdStkcEJZNG5Bd3JnU0RISVZuZ2RuN2NFVHlJQmVJd3hGWExCNTBLQXk0c0FGN3FaNHI4UmZpL011WXpBR0J2aVpWbUtUcTg3WEZwY2ZEWEx1bjk3YVhuK1YzN2pWNy80bFljZWVFeGpRcVBwTndxUXZ0R0J3d0NTdVlYdWtaYysvUHp2MjluWitjTWJHMXVmMk56WTZoaXRpd1FjUWQ5WVl4bW5TT1cvSjRITUJLZDdJMXlyZUozUVMxVkR0bUNaYm92bkNiNXEzOWZCVUk4UDNYem9aN1MyWUVQZ2lZd05GMjBoMW81c0U0Q0ZoZmxiUzh1SFByZXdzUEQ1cmJYUlA5TzV1UXhnR3dmWXJmMWVBZDc3RWppekFHWnV2amYvelBPUGZiUFI1bE5Hekw5NzY5YmF5ZjUyMzE2UFl1UlNNRzNkYzNnalUrQjVQTHlxeWIycFlVa2E0SkU2dUZyQTQzK0RWSUJrV3NIanc4YndPUzFZU3U5alBORlFlRFN4WUlITGdYellHZVJTU3FueC9OejgxY1g1US85QU5QL2kxdmJXcXd2eml6dmZTTUJKM3NNMy8zNk1EeDFlV25yaHBhZitvQkh6SDY2dGJyeXd0YjdWMmRucGw5NmxjcXhRQ1pwQWl0Yi9Od1V3QVJGSUxDZm1WTkJBVklLUURTUHdFeEN4L0JzbzhHRVNpSFNVeXRIMmNVd28yT3JBODFtZ00wQUN1UEFNTU9XUE14ZHNuaEZqRzBpWklJYkFZSUFOakdIM014THdIRzU1TDB1Z2VlREFOdGJwcmRYaEErdnJhei9abTV2N3NaV2pSei9YNlNUL3hXdXZ2UDdWaHg1NExQOUdDTlcrVVhyVkVnQ0hUcHhhK2RpSlUwYy9lK0hjeFNjSHcxRTJIclY4eHZXWkdFOHZPOWFzenFLMTdWR1hTbURudnVOQTJPcmgvWE9UQXduOGpWdWRCaFcwdlF6L0RTcEFBc09RQWdqMmVTeEdBdkVwWXZzalJpQU1RQk9ZQ0tad21LVllDTWhCbmdna2dKQjlUbTBNYlcxdHpmZjdPejh3UHovMzNVODgvY2pmM0Y0Zi9hVTB5YTdpZmQ2SStuNEdEcm4zdDV5azZrTW5UcTM4Wko3cjc3eDA4ZW9jSkxqcGdwdVppQXVQNEgxTnVJdXpVcUJFOWVhVndPdlVBN0tDTlBEUEtyQTNvMUR4dTRUYXlZZTZjSWY5d3o4bkZhR1VmNXdWK3hRd3lJNitlVkJSZVNnb0FNTGs4aG9HdzBDVDgwQndaSUY3OWY3OUU5a3RDa3dNWFJFTUVlZzh4OGI2Um1kcmMrc25qcXlzL0dDM1EvKzNoQlorZmpnWXJyOWZBWFRmNWppM0dhb2xBQTZuYWZMQ3FRZU8vZVI0bkg5cVBCN1BUVXRocDEySDR1WU9BRlZrR0EyZ2xEa1Bnc0cwU3NSWHROVUVMSmN2YkFhL3E4cXlWZXRCcFNDN1ZBZ0Y4YmxTV0NRTjJEWUVlWldJUUJzRE1kbzFrNWExSFpzSG9jeDFmSUVWdHQzSHR3MzUrTkVFTmF4dUo1T1ZZeWMrTjk5ZCtvdTNicTcvNXNMOFloOEhQTzU5cjNPaDk2UEhtYyt5OUxrSEhqNzVad2VENGIrMXZiMHpUMTVqYWNyNEZ3VUZ6TXIwcFFUZXArYUZ3aEF1dkVHcEVmSlJsYmd1UXJ3QUNFUWd0bmtPUklJT0JDcWZxdUo2cEJMbCtadVdpV0RBQUduN09BOHFvaEwwYmhWOEpmbGo2MGtJREJZRFlRWmN0d0ZSZUd5STh6cTY4bHFLMWlBQS9jR1FMbDQ0LzEzekMvT2ZQSDc4NU44ZTk4ZWZUVlI2QWNBNGhtcjNuMlVBSGpqMXdQRi9ENUEvdXJteCthaE5wUGN3TE9uSmdJQUFxSWQwbFRETzMwNzJqbTlsM2FSNm05dVF4K2NpQWFnS1JXaHkwbW51NXJZUHE5QVFqZC9WcG80RFpvZzJ3VnVwdmhMLzY1a0pCZ293R29saXg3b0JCQTBwd3RRcVNNdHJKUzM1bmZWbVdnelcxdGM3TzlzN1Azcms2TXAzSHVxdS9ObnRyZjZ2ZER1OURid1B4RWJlRHhPZ0JPQ29VdnlwbGVPSGZpSFBSNThlajhlUEdoUGM5TFEzOEpUaGpOUnlJSExLbXFWWENrRkVMdW0yaVRlVjhrN2gzLzJ2WWZ0NGRvazJVZmtzeFkzcFZuc1FsUUR4ZVJpRllDOVNtTUFqRnA2S2FuN1BqbUw3NTJRaU1Qc1hRTVgxSXZmM3Rrdm4rK244cUhlbExPdThudy9kaHFOaGN2WHE1U2ZQWDN6Nzc2aE8vamZTSGo3d2ZqaXdrL2M0WURJQWp4dzZ2UGp2RVBNZkJlUmhFWGFuZFFrWW1zaDZUVXg0S2lkNS9iaWwvUUN4bFVRckpEcWQ1M0xmNThEamtSdVVyckJwbnZCR0VZWlo4cXVzdFZod0t0dHFZeXliN2NscU9HWXNaTTZJU2liT1hycVNCaGZOOXVmWlFMUm4yb3JXMUlDYzhPdEl5bHpPRjFtM2RyWVdCdWY3UDNUa3lKR1hEaDgrOHZKZ1MvOVBuV3p1UGV0OTNxc2Vod0VjWmFadlcxaWMrNCtUVFAxcHBmQndHRWFnZnRQdkM1cFVmYTZnUlg4cTdpREJUVGtKOHdGQUt2bFQ2TDNjRjN0UEZqQmRLTCtLMDk5N05uS2V6REdGcFRkRFdkUWxBaXRWZUJYdkFZdWZad1lYWWlHV3oyYjNYTjd6VXUxYVU0MXNDWU5MbmVjWWpjZTRkdjM2MHhjdVhuZzU2ZWxmeXVieHpLdHZmRlZGNE55OTEzd3FUWlB2TzNubStGL3B6WFgrR0FROUgyWlFjR3ZTRkZlRmxzZFJuU1VUYVQ2dWx1OVVZbnRJUzlRL0FUU0VDaGdwU042NWhWandnRUpJVUFUKzB4YzJpK2NMSHhPR2NGUXE2Tmlmc2VCaGxPRWFVeEN5K2JQRGdjZUNPUHhDOFRPb2gzYWVOQkdYYTRtQjBUazJOOVk3Yjc5ejltUFhibHo2MVE5LzlQay91N0Z6c3h0RHRUdHJDc0RESjArdC9IamFTWDU4MEI5MktqZEdDekRhS09ONmp1QjQrYUlXMHdhYVNwQkVOSGxMalZpeVFPcE1XUDMzb0F4cjRHc3dqYkF0Wk05c3JZY0JXNlFNT2d0c3ppSFZGQTIycGxRdjBIcndTOG1ORnhHaFlvYUc3YkMyT0dEM2VxVWE1TmFxc0xhT3hXQUd0QTVmTHdYdjE1cHQ4UUdNR2VIS3BhdEh0amEzUG52cTlJa2ZJakhmSlpwWG84YzVlRXNCUEhmNHlOSi9JY0IvMVBlZ3FYdVhXY2lBbHNkSVFDWFRqTTlEUWVnV0p2VnRJS1U2Y3pjaGtBdWZMeVFGS3FTQ0Q3MklxNHphaEZxVURjczQ4QkxjOGhvQ1QwaGwrRmYxTE5JOGVrSnlvcmdtSmMxUkI0M3QyYk5qMzFwcmJLeHY0dTIzem4xb2ZldmF2NWs3aEQrQzk4aTJ1ZnZPNDB3b2ZLWlpscjUwN01UaHZ6d2U1eC9UUnFlVGt2RGl3NXB5MDFlU2FtQnF3azlUUUdQYnQwd2x5WjhJMU5ycFh3WmEvb1oxWEpYWU9va0VkTFZ2dlNueUMySmZJblU5YitTOFNCTThaZWRCMGI1UWVmMEVnQldYY3p1ZVppY0dpYmJNbmc5RlhVZUN3TUN3N2Irem5RWWxuODdNTUZwUWw4SXVhazBpVlc4SHdtZzR3cVZMbDUvYzN0bit4Wk1uVGkxUVB2ZnpBSFQwT0xjSjdxeVRmZkRVQThmK3g5RTQvellSU1hmTFhXZ0d4bXhhMk5hZ2o2bWtYYVVOUUFGMUhTYjdoQ3F4Z0JadlZxRUgvR25QWmM3REUxZzVCRG1ScDhETEFtYzFTUzk4R0ZHRmtDaWYyLzV1cnJ4L3FuZ1A2KzI0Qkc2ZFBnLzlMbEZMZ050R290aVJiaU1HNDN5TTFWdXJmUEhTaGIvR25lSC9nVlBUMmUyQXZVT053TzhMNENSSm1uemd4S21qLzgrZDdaMW5pbUE4U0Y0UkpMejFHN1QrMVJaSzBTVDZlQmVQSlMwaFc5c1hCemQwNHprbjBPVjEwaUJrQ3lVSWg4cWt2LzVhMm9pSEVqeGhBRm1FVjh4TlpyQVJza3IxWUtCYUdJbG1Ya2NUcnFYNEFiemdUMjBNMXRiVytjTEZkMzh1N1kwLzk5alRaKzViMHVCQVFyVTdoUHlrTjlkOTRkaUpJMys5Mys5L1FHYnBBUWh2K21tZTVSNWI1VGFzaEhHRXRtMGZSWnQvTlNPcmVnMFNWQWNPVEZFRENwVjBKdkFmeGM4cWR0MERoaDBiWThNeUViSmpEMUlyTEJjdFJ2V3VBdGNRU3RMb0txL1htOFEza1lLUUtNYk5tMnRreEh5cjF1Wno2WHp5SGVQdGRCUkR0UmxmMTdkODhxWGY5ZFN6ajN4dU1CaCtNd1NOZ21iRG0wdzd2ZXVrQUIwd2hHcmVEek1Ddk4wTDBnd3ZuV3JiREtwU1VwVXhpSUR3S0g1cmk2ZXFuRHVPMmc1Nzg1Z1pxZ2oxeW1lVGtDUUphRzhLL3F5SHlsWGRBeFFEY3lJR3VaTzF1bmxqRmUrOGZlN2pXa2FmeTVaR2FRVE9ETGZWOS8zZ2QzeUlGZjNkcTFkdUhEYkc3TzQxWmdITnRMU25MUS9hYjlkNHJWVkhXb2JqcHRXSHdyNHdoTzB2alh5aURqcXAwUTErSEtkMmc0ZmV3aGM2Q3hhdFpONEtrQkFIdjRvcm9XQllySzI4NWhvcWFXcms2enVzVFFHZ1BNOWhqR0IxZFIzbjNqbi9pZEY0K0svUytYRVdnVE1GTkovNnQ3N3R6TnJxeHA4Lzk4N0ZGWjNyOWhpNTVZUnZuTm0xaW4vbE9XcFYvUXFWT2lPaE1BM005ZE0zSkF0MkR6aURqb0RpTGRZN0ZxUVlhaXUvYlVFUUVnWEZ2d2RrQndlSmY0V3VkcXRFTUtFM3JrNU0yS0puV1JDdEVBVEY2NVVDak1YN3FwY0I2Z1ZuSjQ4RkNMUjJudWZOZDc5MXA3LzFTMHZIa2xQM0MwbHdYd0huRC8zSTk1L3M5anAvK2NxbGE3OS9QQnczZ0VGVGt2OUp0OS9NWVZrZFpMY2IxdFVhUktjQlgyb2t3eXhaVXYyOUZhZC92ZFdJeW80Qy8zZXVOWFEyYnZpQWtMQWhXOG4yTVNqb0pFRFFPY0F0NUFpWHpHTEkwRkd0Z2RUTjloUmYyamdON1J4R0REWTJObkR1N1BudnZISGoydDlQNS9UajkwTzZldDhBNTkvL1UzL2ttRkxxdjNucjliTi9lSE56bXhxQTJXTklSbnQ0cklUaDJRRU05a25MbEdnYlZSMzZvTDNmQ2RVdTZtcVRmNjBvQzFSdWRsUThEOWRDS3E2OXppcFFxK0ZhcldoYXlZRW1oMmhVODA0aDFTOXdqYUZpb0oyK3RzNXpiRzF1NDl6Wjg1OVlXNy81UHlWZC9XVDlrdDF0cjNOZkFPZFAvL2tmT3pyT3g1OTU2L1d6Zi9UNjFadTBXejFHWnIxNTY5Nm43ZFN2L1p0TXljemJwbUVvYkY4SkdhZGFTMHI5YTFwdlczanJoWGxLV051cDFGY3FUWnBVelVkQzd4UW82dmhHMEtJd0NqVEN0NkplNmg3TFFjNVZ6UE1FSXhUdFlXMTVqWm1wY2JXckhsa2FaSUUyMm5taUhGdGIyemo3enJtUDNseTk5dmVTcm43cVhvTG5uZ1BuTXk5L212czcvZi95elZmUC91aTdaeTlTYTEybUxXUzdYUmJzZG41T21pUE1yVUJqbnJHYkdnM3c3ZVpKNjZkM1dOd2sydVV0TkhLU29IblRnNDZwNm9XQ2JnYnlNenlWQ1ZWcURaTXJPUnB4N2JYUmxGVFN5MWJac1czcmZUU0d3d0hPbjcvdzByWHJsLzluenZRSDd0VTlmTStCYytuQzVVK2RmZWZDSDN6OTFiZXJGWXlXL09KMldETzV6ZWU0a3lCdHNGMzdTS2U4OXBwcGtiZXRobHBOOVp4d0tqVDBpdlg4aVltQ0FUeDJ0dzhGUkFSWGk5SlU5bUczZFdnM0R3SXB0Yk45NUd6RTlyWVpqZHl0TXhrT0JyaDgrZktMTjI1ZCtjVzY1N2xiWk1FOUJjNmYrblAvM3JFYk4yNzkvTmUrOHRyeFltSVQ3VzMvTk9IRTNkZTlmQkJnbUNaV0dPUkxZc3hzZHo3Mk85SGxnS0R0eVZ6ZXR6eVpiQWliVTF2YVkwTGZIaWIzSUZ2TEtiVGlWQlV3Qld0SFZiS2hEWXdJODZRR2VNcStOdU4zQ1RtUitIR2VRMFF3R0F4dzZkS2xGOWMyYnZ4aVowRS8yTWEydlMrQjgxM2Y4NG5rMnBXYlAvUGxMNzV5cHQ4ZlZtL29LZUNvakRGUCtsRFFiQVdaQk1qNndOdHVvU0RWMmxpa2hZS3VuN3FUZXRsYWN3SmZWWGMzVVVncHQ3TjBVbUhMZlA1UlRkN0w5cHJpOWJKbno2U2N2Nms5YnptMFZoNEc5WGZSbE1yaUNTV0NzbGJFcmp1YmF1S09RSFZzdmJKMXdZUzdnV3gvMjJnNHhMdm5MM3hrZFczdFB6MTBaUG11dHVmY0srQlFiNzd6cVhObkwvNzRqZXVyRTBGRFU1THJBM3NoKy9WSzAxNURvQjl0TjZTeDdRV2o4bVl0YmliUFlnVjlYYlhaenNhdk02MGEwY1Y1SFZEVHM3T1BsUnlGeXBwTDJQZm1pUUZtcWwyR2N2Z3RySW1Gb1dHRmVRc0g2Z2dUSjJ1bEZtYjc5KzEzL1JoanNMTzlUVmN1WC81alYyK2UvWW1qSzRjN2Q4dnIzQlBnL01pUC91QW4rdjNCTDd6N3pnV3VESHJWYXpRSERKSzdhb0VXR2pVOGlyU0RjRUxWdmZHaGhZMmI0WGcxTnd1V3V4MEJsWHBZT090VHlVZENGcThFdmFxSWdsUXBadUtXRUpCcTA2eEJIalN0UkJDS2Z4Z0hIT08xNEFSWVhiM1Z1WEwxeWwrOHNYN3hoK3YzOUowQ3oxMEh6Zy8vc1IvTWRuWUdMNy81K3Juam8zSGVPRzNhY3BtRHFFZmVkVUlncEc0OVlGd0xQUWVLb2VFTVRNSFVGZUZhRTJUVk1XdHFqRkw0bk1NNGJUYWU0WUxwWUkxaXFRWktKZU5HNGNGVzZpV0UvMVpsOVlJMm52Qm5Ha01JcUEzSzFRNlljSFpIVEVVYzNvZHV4dVF3QXR5OGNiTjM5ZXJsLzB4bCtybTd3UUhkVmVCODlxLzhOSFhuc3MrOC9zcmJIeG4wQisxNXlJUllmcGI2WkpNTm90WVpHa3lwNldDS09zNmtKTHZDRkxYcUtVa2xQQXRyTW9TYTJtY3RWS3RrWGJPZUdvSGdvQ24wbyt2Qlh3bVFvaGpLVlJxNlBQdURqb0ZDc2lxY1ZLWEdyU1FpMWZkQ1lSNFlkaWlFakY2TDN3a0FJNzRseDROSGJGdU9NVG55UE1mVnE5Y2V2MzdyMHQrYVcrYUg2MTdub0QzUFhRWE82NisrK1ltemI1My9FemV1M2RvVkFOUElnZnRPdG5mUzZ3bjExMXBwWHFyMmc5WDI4WVFrUVhpajE4Y0RKbkJ0ZTNDTzFNeTVhbVJNUFI5aWFtZkRRbzJFNmtIVWZoMjg0T0tFU1pCeVpzY0R4WVZwWW5SSkhqanAzdEZvaE10WHJuems1cTBiZi9MNGlhUForOExqdlBEQnA3TzExYzJYWDMvbDdmbjM1VEtyeWtod2N5L043bldjUUo2MmR1bzJsaVRBeTkzeTdVY2xiZE90TmFXY2FrdGJzN2Jtd1ZmSnZWQWRnYURhKzJ6aWFqS1pJYUhYbG5JcEZseUhnUzU2M1RUNk8zMjZjT0g4bjdxK2R1RW5IbjNpb2VSTzVUdDNTM09Bbm5yMmtkLzMrbXR2ZjNnMHp0KzdDVDhtZjdCdDNkbEdURXV5M3U2aHdsQ3RXcHlrUXY2bTB1WVNBa2wydzdRSlBKc3ZNbGJET3VYRDJrbVVjNmlzVTJ3d0NGWVJOSEpWcXVReGNGclVSYjRVYWg4VWMwTTArVkNxdlM1eTNzaWYvb1lJQklhRzNaenc3cm56L3dsSitqa2crUXJ1d01hRXUrSnhYdnJJODNOYm05di8yZldydDZoQ1dhSzl1Rm0yYWJTVlJxaDVDazRKOVpobURGcnFTZFJ1NEs2SE1QVlF6STFORnpXSzhQbHJlVndoN0Y2bjNHdHZzdjZTMm1aOWZHOWIyTkRaOXZOdCtaaXZrYUNTRjFYTy9lQzlTd3VOM0JTQ3JLNWZyT1piOVRLRVB5N3FLeHNyR3hjOEtSQXliY1lPditYR2Jtbkk5UmpYcmwwOWZ2M21sYjlPTEl0M3d1dmNjZUI4OXEvOE5IM3dJOC84eFhObkwzNUFqSms1c0xoWFRrbHU5M0ZFay92WGFuL1NaT1MzWElESmZXaVZ4SjhtZTZGUVFsY21lTDdLbnAwNjh3V3FNRzdlU3hEQ2JvRVNRTzFqSDgxUjZnYUk2bSswTW1vdGxkV05ZVzBIWXFDTmdkWUd1YzV4NWRLbEQvZkhHMy9nVHR6bmR4dzRseTVlUG5iOTJzMGZXNzIxVVltbjcvZDhaYnFFN2V5RVFVaXBTcjBOWjhiVG9YRnJoUjRPVkVuS3EvdExwV3lKbWJFZ0tvRTM0WEFJTFJBSWFRMC9DNlVjYm01VWFhdlhOUEtkNnRoMUdEbUUxODkvTkVVbmdmTStvZWlILy90MmZ5ZTllZlA2cDdremV2ZzlCWnpQdlB4cEhnM0gvOWMzWHorN2VGczM0WHVXTDVERzMwUHAzSW1yRFNkNHEwWitYaWpwVkhPTGRrOG1BU01wRTZuelVQSEdONDlXdkVRUWJ0WWJOdXNlV1NZZEF3MzFuV2FJM1NERmcrdG0zTi85SnU4d2ROTTZMOFlTak5hNGV1M0treHViNjMvaUF5ODlvdzR5WEx1andMbCs3Y1lUbHk5Zis2RzExYzFhRHhZYTFHUXJlOVBXSWIxSFBYWFp5NGFCRnRrcHRPUmtFNTl2UW1Pbk1icWRRYXRkQjY3UjB0UWFUazBTMmlnVmJ1cUNqSDdpcy9BbUNEZG1WN1VKcWdsNW1lK0VVNkdPTm16dXhnbTN2Z0ZRUmQ4YU5lQWtvWVFVVVRES0VFN0ZUaVpSQ3MvalBWRkFXMnNuK0tGRk1Cb082Y3JWUy8veDYyOS85WlB2Q1kvVFBUems5ZldOUC9QSzc3eWhHdXFTczRUMGQ5dnFtZ1I3blFpdGR6alhocy9DbTZ0ZXkwSFFDQnAySXdzbXJhdmFQUm0wUkJaUHIrY0VoZEtRdGFMYUNJREZ5U3lrQ1JXRGJkWXptSUpJcUhRNzFPanB0aUU0MmpYRExMOU1FQWI3a002dmFNeU53ZXF0TmI1Mi9kclBkZzhQK2FDOHpoMER6bi93SC95SGoxMjVmUDJITjlZMkd5ZjMxSVQ0SHFDbzhycjJVMk9xZ2FaKzQzRXcwQlkyWms2NkVmYzZVbDFKM05IY1ZOQWtjbWxtZmV4WkR4Mm1jaDFJT0oxYThUZ3QwVU16ZjZvS2tMUkZFUFZ6cmRLR0UzZ2c3Y2lvOFhpTXl4Y3YveTZqNWQvL3pNdWZwb01BengwRHp2Ym16ZytkZmV2Q29wRXFKWHhmTjI0RzRhUk1qZE9uc0d3dHBJS0VJVW5iQWtEbmhjS1I2bDJadHlrVWZIRW0reVJhcG9lWFlmZUExRGZSMWJzVXB0QjFiU0YwT0ZsYVhRRlBMZVFDbzduR3BPMVhWZFZ3ZlA1VzVEeEI3cU4xRGlPQzlmVk51bnpweXMvOHBiLzBtYVAzYmFqMmsvL0pIODgyTnJmKzdPck5OVnVvYWttU0d6bk5mc0tqZlNUbjB4dy9KdFNZV29FVWhBVVZyeFVxMTRTajFyVitOWkgycmRYZTF3aGtjaGdZYWczVTJuQWFIM0NnbmRhNlE3UmQxck9peWxubVJiVXVoZ29GWDRMSHZ6OC9keVBCQ3BWbUozV1ZnV3dxYW9ma1JndWRiWXo5S25yYVROQVVxdDFHT052TGR2SGk1ZE9ydDliLzVFRjRuVHZqY1NqL2lmTm5MeTNudVo0cHBkaHZoSFJQNmVvSjNvaG04QXJVc21jVTAwaUhHZE96TVBrdmJtS3VkNW5YYUE0L3k5TUF1V25Rd0czNUVqTlZCTi90NzJHdzR1WTFFYW55WlVYTnFMb0hpS1lXcmNzZU43dmUzcmdWak1aOXY2U243V05NVVNUZDJ0ekdsVXVYZi95blAvMmZIcnZ2UE01blh2NDByYTF1ZnZmNWM1ZnBkaFUyMzNmbXFkNmFmTzNNUDFzTERNTzUvR29ZUEtWVHV5NmZLMDJLRzQwZE9qV1FCaDNPRk96SENVT3BTbmhZNnh5bkZ0Mm8xcFNQSm5jL2xIUzBwODBGTUg2NHp4UzVaQ24yWVp0REwxKzVlbnhqYmZNbmJ0ZnJIRGh3THB5LytORXJsNjU5YWp3YVR6eVZ2Nkd4TThGN3pjejQxVmQ1QkFOejFhZXJ5a0lWWVdCTmU3cm9OREF5bmFJUFFyWHd4amNpMWQ5WnlYTzR0a1c3YlI2bnlUUUNrMG1Ma0JBb1hwTUhDWXdERHlxRGJ4SnNReGdOeDdoMWErMlAvTXlmLzR1bjdpdVBzN214OVcrLy9lWjVsbERzdTlGYTMyVFRRclhKUnM2ejd3TytUZkN1SldmWjUrOXF5NEZhOHpXcStZcGdlMEJZaGErSXBzLzZlbHEwemtwcHZ6SkJiK0swNXBXQ0JONjM2ZGV5SGp2MXlZdzJPV3c0dmVtcWpzSHVCRWExaGtlTkhLcXk5YTVCemhYejR0VzZqdEhGMEdCQkdwaFNxKzNLMWF1UGJXeHMvUEN2L3B0ZjNqYzlmYURBK2ZCSFgramV2TEg2WTV2cld3ZFdVOWt2ZGtSa3R0bWRnMGl1OWxqcjJkZnoxenVtdzMvMlhjSkVsVHlHTUQzc2FZWko3ZHJPRWpSOUZ1S0hYbkNqeGtnV09YdHdDRlMyWHUvajhHdlFCRlVOdzVyWGtXSlZQQUxxR3JDZVo1em5HQTBIZFBuSzVULzl6ZC84VFdmdUM0L3o4R09uZitEZGR5NHRtdjNXUWc2SVZYdGZ6dnRNdTdsY2k0d0pWMmpVaER6cWVZVWRMWmhCOHcybFFLRVBmYWlXNklzQUpod0REemUyaFRKVjlhRzJmWVczVW1IWnhIdEk0OTl2S2FNcndjaTFOa0dIQVlCclY2K2RIZ3o3UC9wZDMvUEpmWG1kMndaTzhNdlU2cTMxMzNmcjVocmREeFRaWHVzdzl6dXBnQ252eDN1Y2hyZVp5dENWUFdzVlZxNU9TeGNnSzhkb3l1OUpVRGVwS2lENEhUdGNXK3RlOFNRMFMrTnBzNjRqdFduVDZ1c3R3Vk5JVEVuWlllQTlUNjV6M0xwMTg0Ly95dWMvZC9LZWVweW5ubjNzOE9ibTlnL2xXcmRTcWpSaG1WR2J5azA5OTJtanJuZHpUbzNlTXJScnEwM3FXSkQ2YTJxYnAwRWdzQjdxamdVL0YvWnU3UnBXdXYrcmlBRFd6dGxHNU9YenBlQUViblFiZTM0Z2FMR3BoejVTWHl0UFhObEFBS25WY05qMlRDcG1zRkp1azV0eHk0UTlvRU5sR2plMXlseWJlRzNMZjhMWFVvNFVOSFFvakFDaVFUQWdNWURSOWtzTUtLamxpTmhSYTZzSWFsdHhqTTV4L2NiMU14dnJXOC9jZGVDRXJ1MERMejMxbjkrOHZxb0l0UGRUdm41VDN1dk9ncHFJZUVWRXBDVlhvVXFTM2lCL0Q0U0ptKzV6QW9sYXFvNFpTTzJHOXg2aXlTOTRZZlZTc0tOczhwek1DcHE2dUh3TGVhQ0lBNjNwU2ZSMlM1ZzlvY0cxMVhrRzNnYStjeUFnRHNKVFZrUmd0RVovWjRkdXJWNy9tVkNmWU5adzdVQTh6a2MvL2xLNnRycituWVArSUhDTnM3RkI5NnZta3dRSnIyOVpCN1dKVk5RMHdJTHd5WXNSM290WDM3Wmx6dFEzQXlEcy9SSm9hVzhwRGNWQnFncWtWYlViUnBXNkxtNVNEOVJXc3FhNWJDdlVGdGkxdTEycTc3aEJEa0NLbkFkQlhjZlQwemR1M3ZqMmR5Ky84ZUk5Q2RXdVg3MDV2N2E2K1p4eEw1ajNjN09FbzR2M09FZVNHb3RWblBnaWs3c0ZKbnFjZzh2WHB1MXFDQk5pcVVmQ0V3RGh2ODlNRTRxZGs5K05USGhGVERYUFVoc25wOWJGbzVORFVwbmhmcENBbHE2emJBamV2OERYZEV4eGlHeHRiZkgyenViUDdMVWdlaURBZWU3Rng3L24xczFWcWwvc2lXSnpzd0pvZ29lcXRNSzNmTzFHRURSdXYxckM1RU96U2c1RDA0cHkwcmdoS2RDTnhvVHdZOWFHMTJvOVRGckRMeWFHcXE4Vm1mRVFNa1pBVE0yZmgxL3BvUXJQNmJzRW1MblIrU3dBdExGc0haT3F0UUkxdzFZQ2FrMm1WTG4yczFEcEJTVmRWMGd0T2hoS3oxWHFGRGdPVUd2b1hPUDZqWnNmK1RQL3B6OTMvRzU3SEJvTVJ0L1g3dy9mTjlvMWxiVWdyVzMvYUlwcWhEZnJIUTVES3dkU1MxZHpXNG9nbFFFeWFSOHI4RE5COWNPdXBmdTU5R1JTc0d4bHpjYmxSeE04Y0gybHlTU3Z1SitTUnBWVmMrL2NsTit2QTIyY2o3RjJhL1gwWUNkL1psTCtma2VBYytMVXNibk45YTFQV2phRktuSHArOVhxR21SdDlIRDROWkZGMjVlNElsWDd3b0l3eEJUTm1OVzhSc0k3WmhvL1V3bG5ncndBdFRtWStrM2tldHQ0WDJ1L3BKS2g3Q2ViRTFRVC8zSTNVRGtxSG9ady9uM1plUjFDdjkrbmpjM1YvM3d2SW9hM0RaelJjSFJpZlczalVabWhxTFhua0cxZlA5aU15S25scHA5VzQ2azA0RStZUDZuYytDS3RyM1ZmczBmVGdDUzFteXowRUsyTEZpZGZtY1lHdU5ha0hRMjF6b25rUVRnYTRBVkN3bnlyVW91U1hYTVhtc1lFdEh5QzRRN1JoamhLTVFaZWhuQyttOXE0QXVtTm16YytjdVhHK1lmdU9IQ2NLK09ubm52a1I3WTJkNWhhR0JBSlc5SnZKMktaVUxocGpDRHY4Z0hJYlhpVUNkTXNFNEU5YVMvT0pGQUoydDlYUlYrNS9vNWFOcWNWMTkxSWErTW5VQlZZcnpOdTVldXQ5N1cwck5GeXI4MFlhYUdYcVJqZG5rWXlvRkRnYWFyZ1ZLQWlUbHBNREZoczNZWUtXcjI2VDdVa0IweWxwbFBXZWR6NzBUbEk3UGUyTnplWHRyYzJ2M1ZXVE55dXgwbjZPOE9QYTZNUkxid1hlQ3FZMjBBU2RoSFhoOXhvMnVoNXBVczVGTll3ZTNiV3ByVnJRQ3J2cWRLQTZyZlNFU3A3Rnl3b2RaWENic3dkWVlJUXkxN0RQV21Fd0UzZlZPMG1DQ1dsL05kb09LUnJONjc5eWFNcmg5Tlo4cHpiQXM2eDQwY1grdjMrTjAxc1NUOVFpdmpBQjBUdjdJdjFIcUdGbWc4bGJFMGhUMHZWNmM5d09kVU12NnZCOHM1NDg1VzV6VDVDMW9KK2Judk9vT0V5OEI2TlRyVzI0VHRDVTV0dFdvNVRDNWxEOEZRN3p0R2VqN29yY092V3JlY3ZYRDc3K0N3a3dXMEJaendlTDR3RzQ1VnB4OXFkMWhmWUxZK1FYZVBtdlo1cmU2RFVKK1FzNFUzSXhMdi96akJKYjduTnc3YWVBblFCWXpXOVpVMm1WK3ZyS2pjQk1DclVlS0NxNllIYmVLcVdISEMzNjBoVDh6NXBLL3lVMTFpYWpGdm9kWXBOYjI3a1lHZDdjMzdVMy83ZGR5eFU4eWpNYzcwOEhJMG0zaGhoZjFyRFUrem1RZ3FOTXRsM0o0NU1BTThzQW5wdGo1dTZ1VG84OFl4cGpEUldkS0puMUtXbXRwdG9RcWdtMGdhSWFyVy9PZzVkaG1kdFM0QWJvaDBUL0JKTlVLaHBuYnNLUXRuSzY2cnBDTFRqaEtyc29MUndoVTIzdTh0bHJtNUEwRnJUMVZ0WC94UllEdC9KSEllZS8rQVR2ODhZZWMrVmIrcHI4cVFsSkdrRlVVdGxmbHFPMDNaNnoxVHdkTnBrczFMNzlYMmZiV1BJclFxZUJTUFh2TUY5YWNHTEtiYXRiNTlPaVBMc08zcEFOVTN0dG9oRktnZENJL1JxWVFqOW9WdVhJUTRwYktuUkN6ZHVYSDhpMS8zZnZSczJiaXRVTTlwOGVOWlk5TDVLM2lld1pmV1QzVSt4N21zOElRelZkaEdna0VyaHNjeHhkaDhOMkNXL0NuSW1hVkZTbGJhYk15UVpBbkI1NzJSTXV5ZWRoVTJmZkozYWV0aHIrbkFOT2g2dFhkT0NKcjFlNmhTVVNWMDRzK1JaU0NPQzRYQkkvY0gydnpNMzM1dS9VOEJSNjJ0YmgwUm12Nm51ZG1zQjdlYXh3K3IxaE1lMjZhWHRpZk1KRmtYSkxCZWgxbTQwcXlCaDFhdFZGVzY4a2t4OWphR1g3akorQmJvT0NwL0IwdCtpWVJYQitwQXBudGRYN0tjUE5OS2U3NHZxZURyZ3g3a0RSWVFBUEZYTk5aR1dJME1RckpFczVZdXZYYi82M0dnNE9qTHQ4dThiT0hQenZkNW9ORDQ5YVZWRWVKTE9WTWVaV0t0cGV1SkpOK2owajJkNm9rOFRjcDJwKzNMQ1hLVFdZMWZ2anZZU1JaUENONi9hMG5xeC9Eek1CT2lXNzUwcXNrdW1ZSXdRZUJHYStKN0MxZXNsRGEyYTE1Nm8wQ3lUQ1dlUkJEV1dxWVhPYWZ0L1VDNlBxdkFCOWVmekN4YmNWMldVd0hWQ1ZOK0VWTWMwaW54YUF4QnNiVytlQVFiUDN4R1AwK3QxRjVYaUovQSs2VkNUL1R5V0ptOFFDd2ZBaWh1NEhsWUVDaXhGV0xXWFdLZEY0TDM4L1ZWbXE1RXIxTjZSRncyUmNKYWxkcFFZbEdQS2pmT2pKazI3djdodE52cTVtc3UwdkZKcEUzT1V5a0ZlMlI1Um1SUUZOdGJYZXV0YjJ5c0hDaHpQcUEySG84WHhjUHkrazB6Yjh4ejhKTHE1dGxXWmlTdGR4bEtoUndNNmVkZUpVUjkrdEh0WkNaSmlWRmFBME16dldsRE5BYnpzVXhtNjZXQUZ2YjNoRENwSC9leDZjZnM0NE9wcjdNTTJtN2I2bDRSMHREVER0NUNFMFVaam5JOUlwZkpKQU9yQVBjNkRENTk2ZnB6bmU0dS83N0ZIbVRYSnY5MVgzTllLSkpQaTFabysyQ3duZFRrRzNXVHBDQzYzY1RkUmE1N1IycGhhc21mVDhyajZwcll3SVEvbHFWcEQ2eW52ZjFvTUlBZzFvMUhiL3JEM1NLS2NrSzF1T1FnMTJGWlhWeDhCMEQxbzROREtpU04veUlqUXRBTGZSSjJCR1ZLY3ZYUUpUQXB2WkEvNVZEM0htY1pvVFZ1NTE3N1RwMW9NbFlwQUlFK2U4MEc5RmxWZDI0NkdJcWVFYzF1MVUzL3k1MlRuOGFXbTYxMlY2ZFhCRm0xcTJYWmQxeEFJWDBFNEFScFM0N3Ztb2swZEtQZVdKV0NuZDZrRllsS05xdm9Td3NaVFl3d0dnOEVEYVpZdUhMakgyVnpmWExxZnh3ZGtVckovVjErRU5HK0VsbXNXTHBUYXZmVmxiMHg0NlFGbXV4S1ZnYTl3NWJ3akhNcjhwdHJtRXFySlNFdkk1SnRPVFZBY2xqclE1YUF1ZXpYSGtYcTRWam1HcE5KbDRIY2diRzJ2UDUybXljcUJBdWY0aWFQcG9EOTZDUGU3M1N0Z1Y5clptMUt0RXovb0tXc0JwN1h3VFBmcWJUNXI5dXZtaTQwVkdTbm5rem5JMTBwM0VJaWlUN29tN2xzbGlQWS9qelBSaTA1c0k2cDZ2ZGFPQzZPeHVibEJ3K0h3OEtTb2RWL0FTWktrSnpEUDMyOGVwcEhIM09ZY3owSG1RdFFpU2xFTmFHWTVRZHY3anVvclFmekR1VkZjblBDNnFhcWpFK1lwZGlGdWk2QUdCRnFYVTU2bE41TEo2VXpBaEZYbGV0R1FuOXJ2WjBYTnN5S005SXFFcVh5Y0JKT2pwVDdjYURpQ0dCdzZVT0NzcjIwZUdRN0gyTStnelY1RWNDYmxNRzBUbERUbGEycjQxQllXVWEzSU4rVkZVNDBDbFVvdVFKVVJnMGtOcVpNQVZkZmVEbXNpTkNWN3IzcUczVyswaXZJbWd2bC85ejJ2MUJrd0NaWFJoL29LMFhDUFR2MDFsS3FqSnFDd1RhRUZVREJleG5kUHVDK0NtOEdSQnVCY0ltVy8zQVFzZVZBVTM1T2l4bE0wanJvWkhic21SSUloUERqMVQ3MTBrS0VhamNmamxkRndSQWZCUUIwWWpUemx4cHpWVzdYbFJEVHJhUkRjR05UV09IWlFZV2R0VG4rM1BKT29uVzR1UVYrbHcwc1IrS1phNXE3RHFaV2ZRMlVLczNyZ1RXRzZ3bHlzZm1CVWFzeFNyZnJQeEE1SnU2ZXU1WDlHYS8rZm5ZUDBPR1NNT1cyY203NmZ3SE1RZWNra1JjNWR3OEk2c3pZVnFOWC9tK1cxRlR5Y1g4bmhWZmoza0JmSUJCQldXRGtwVmY2SlhFdk9MdFYvUVpVWUNEZkZUZnJkOVdaWi8xQmpwRDNDcU4xcGZqTkJIZENUUjkxclZIa3gzRmJGcGk4b0cyT3d2bm45a1VtbzNBOXdVbVBrelAzR3FKbVFEY0lNZFpzNjZLZkl6WVkvSTd2RWxXMGYrbTQ1ejY0M1B6VmJUWXNOMVZOK1pscGVWYUZyR3cyYlZhSEJ5a1lDdi9tc05UOXpyVU5hYXFLQ2RYSkNXc1B1OXFJbEtoN1d5Tzc4eis3Z3FaSVhKVEJMOFVRamh0WTNycjgwQ1NQN0FVNFBrSlhLaFptUzFIclhiSXhNYmZ2YWpSRGJUUlZtYWs0emhlT1hXV2prM2NLMnVnNUM3Yi9ycjdzeWh6L2xQZFZtSTh2MWZRMzFtdUJHQ0hJZ2FhbVZ0RlYybXJ0U3F4OFUxMFFGUS9acDBpV1dTaDdUWkxMS1RRSlZTcnBLbndmWE5GUWVuWERIVGJ5T1Rlb3N5TVdxZ3dYK0VCWUl0RVdwT1NqZ3pBbXc4SjROeHlhUUxsTkROOVFLb3dmeVV0d0hWUzgyMW40WDFjQ0FXbEc1YkwyUjFwZHY2a1hMNE9SdExLcXRyZUh3UFcvVlJicFZRZnJxa0p1cFBMZTBISHhoYU9lSmdYcWhzL1FHTW5YWmxsUVlPWm41RmdpN0VOcGpjQlBrVHdmbmNSSUk1dCtMb0pFMjBNeEE4OUVCSi9vVWJtbEdGVFNUdGwySE5DK3gyeVNBNXFhM29nbXpzcG1nUGJLc3orT1ljQVNpQUJqWmtRUFR2c0U3MlB0V083MXJTVCtxUUc4TzZRVnRPaUlnQ1NWczIwb3gwdExrS2JPaUptRDkwT2kyS01KQ3JTZDZuR1Fmbnp2M2VwM2xTWW5uKzRJb21OQlRKWGZoL1JGeHRkRlRKblVpbDNNekJUOG1MVFEzMVJMb1dvZ1liaVRnV3BFMUhJTXU2ZDlBMnRjbDg1WDlNOFdOYVNaUTkrMDZkQ0xWWmJla0dLTHpJcHlpeXZ0dGVndkJiTGxsbmNDcGh2aFNYRTZwT2hkekVCNkhGNWJteit6MUhxS1c5WVM3OWFPMTlVL05URGUzUEhGcmZXZkNKR1A0SEExdDZGbkNzQWtkQXFGNnY4OTFRcy9SMktmVHNpRWExRTRxVkhyWWd1UStIQzJnV3FMY1BtNVFnaTJjK1BTN1FSdWZLMDFwdXZUdjJZMVdWRGVsaGRlcVROQ0pnRFJKQ3BZUFlscGVuNTJka1FtZWNPYXpzWmpoa1FBZUZrQ2owZUNCVjkvNDZvR3hhbWJXbXNqQlJscXpTOFpPV3hnMWtZRTZ3Qzd1VUhCZGRxRnhKeTJla3RxTlYySEhLeUxtVkxuUkVheXprTW9VcGt5Z3VLdlgyTlNFQjhNRXVoTHMxc1JKd3NHMWNCeFphcXhXY1hnWWNVdWZ3bHBQQUZLRURGcXpoZWtnYnpLcGUybjNYZ2ZEL2dlKy8vZCtiM3BRd0dGcXVjdjJveHA4WDRab0J3R2dDUXFkczNqRk1GK3BWK1hyRCtYNnNpdVJpb1owWTJpdUlpTlZKUWZDVUNuTUg5Z0xoeGdwZ05xY1kya3lYUTFpSUN5V3RCNktaZHVPTVFhRC9xRGM2U25Oc1drNW9KeXoza01vUWE1bGpLSHpGODRlV0k1alJGcTBmR28xamtwMWVzcDRkWnViSlpxdUhFeTduUnoxNHRxVUUyWVdQbnpxejAraHVpZDlVRzNFNkdUMlQ1cGVCYUVDYUxXUVYrOEJLNEFRZWllaWl0aFNTVmkwT1JRL1FrMFFQWWtLWmpBQk9saVBIdVpRdHFoWVpjdjhQV08wUVdVL0oyckZ6VFlQMTlJc2EvTTVORW1YdHZ2SmRYclg5RlNDdzZRWUx5Q1Rrem93anpOVHFIU2JZVmxyK0RNamFJREpkWjI5Z21hbWY1OFNGbExyTXFaQUNtbnFjMDhuemh2RjFnbHlzSzN2ZjhJb2RYR2R1YmJicUZieEQ3V3BtMHpiNUV0V3dMMm8wb2RqQ3FZeFh5TzFiUXNpN1lvOTlkZlJSaGFJVEw3V1VoUDJFQWpHNHh5VE5uUHVPOGU1bi9vRzlyU0U2SUR5clQxVmMvY0MxSW5McTlBK3J0RHFiZXFldmRienRWY2Q0WHJIdGZNa3BaNmJsT3RCTU5sVCsxWWVxWG1YcWw1QlFCVDQ3NXVhRG9MYzVwMHk4L3NYaUtFRHErUFFvRCs0M241NjNVdjB5QjBEVDcyRmgyb1N0N3Z0dzVuMSthZStOWkdKOGJtdjMweXUyOVNWLzZmY2YzN1l5MGcxOXhBRDQ1UnR3Z1RlLzF1N2gyMXV2cXZtVWtDbG1UU3M3MVRFQTRPUkFMUVhRMi83d0czekVOcUFTQTdNNDR3Mk4zYk9oMVQzcEZhTzZkcGJrOWNQdG9ZaGJVcjZtSzFsNW5iQ3RFbE5uTlFhb2xSRjdpYVJBN044OERMRmlaYnIyYVdxYkxrYnBUL0R0YWdueWlhVVQvSnNtQW5XaEloVXhnaXFrcnhCSjBSdGtoUnc4bFhCU0VHNUJNcUdjQVJUWXdsTmxYMHJXbmpjdnhVYjRZSzd3ODBTVURGckVNNFcxSzZLM3pEdWNrZGlnZ2dkV0hmMGtBZzdJVEJrV29Jc2UrL2VsZjJjRkJPb3A5MlUrR2xpVWo0NWJ5dG1idHhOVTk4MnNDdWpKaktWWlpzWWlyZFIzQzBkem42eEV6V2FRNm14S0dvU3NNcjNHaXp3Y0RsUHZVZXViWTFIOWFwSlZZbW1yb1lRZ04vT3pZamRmUlAwczRVQUtnYlJITFFOek9RRHlqMm1vcVZHYUFXUG9Kem5ZUUJNRUdJNXNGNjFMWUJXcTNQY2R5ZVBPY2dhVWVQNUp2U3h0UTZlQmFzN1psNm5nZHNZcks4M2pZWkFDRFRVd3BmS3hWelExSlZZemZwSS9lWXV1ckNsVU9yWmJmdGJVWWV0a3lRaGRTMHlrWnIzWHMrUFZsZWpFSUVBdUJ0MzNmSERKMzlORDVMeGdZVnFSSFNScVZTTnBMc0FtcnVSSDdWUjJLME1YM0RTMHd5cjZXOExOQTJ2SXRVYk54UXJMK29zUGd5cUt0YnNWdnVZTkdnMnFRV28zb2RXQVdJb3poRWVWbld2V3U4M0MrYUI2aUg5N1Z6Qy9kMTNNcGgwKysybmppTks4VGxtZ2hHYXFRRnl0OUNuN1RFVEI4UW03Ry9aYllCTXBqMUgzZk9FTmFuNmY2TzZySWhxdlZ1Q0NYTXl1N1h0U0hOZUpTVHU2Z1JCYTJ2TFZEbW95VHR3Zkg5Y2RRbHRjSDJsbHNsU1BjUEYxUERVaDJGTUJNTU1hTjJnaU1QTmFidkg2aTJ2cytYYTc1VWpvbEFZdC96WUR5ekhrU1JOcmpQejFMVVgrNUtVM1UvQ1BuVUI3T1NjYTZwOFZFalpldnJWczJhMTVVbVR2TkwwRDZqOEhiUUxtTVJVZTdxSUtHaWpvZGEzR0k1TFMvMHo4dXM3d2g0eU1ZMkR3Y3ZkMmxDUUt3ZVZpSUdXcG1ybnRLTXpVWXh1citPMkoxUzNRN2Q5bFNFYlNuSkEybFJzWkZmZzdqY0NJYUtKTU42WFdNZWhRMHMza2lTUk9udDIwSG5JMUJ0dlZvcDNIN1RsNU1HeVVySldJRk5QclR0RnRZZXpONU1XTjAxbDhWcThUVDFNYThyTEJybUZjU1BieHRRRzA4SjhDVUYrWlBNdHBSUjBuaVBYZVkyUnF4NWo0YkpjSCs1NUFCa3hqYnhVOW5sL1RBMnBYWGlya21SbjBtUDNCWnpoY0RRd0loZUxwYTc3a2VxOGJmVFFSSThoTTRTUFU1ODZ6RnVDL1RhVkdSaHBiam1lUkNhMGVsZy9DTGFIRDdYK08rckNmNU5hN2FoeCthdERMblYvNGQ5ajJEVWdGUzlKd1FxUnF1ZXA1MUZHckl4VWZ6REVjRGl5YXdPbE5ua3B3YWJzR29CTHNjRDJCbE5JODNVZnhObkZ6UEx3QTgvL3l3TUZ6czBicTdrWXVScjI1dTdhNUZsclM1RW1VYm83UFJ0KzBMWFdtbFp2VjIrRjJVc1RaL2o0U1MwMmFEbWRheHUvSUJQVzdrMmp1NlhhazFiWlpqQkZmY2FQRU93V09rcElBUmVKZnpEYWdHcWRKcFJza3NiKzBTQlBxUSttWVRLSUFTbkg2YVhadWxNczE1S3lsc09WYk1nUzBhRHdlNlc4bEoxR05hWGtsUDlNeVA0YlVOTGRvUWNYMk5Vc0FvRVFEUThVT0FDazA4MzZiYkpLdEFzSUpuMUo3YzhEeVl0bThYQjdhTktVbVY2WDdGNnJhV096NnJkdlN4K2E3S0xLT2FtRFN5WkVjcllmalJ0U2hNWE5QYUV3YmJ6dUdaci9IdjRhWTB5RmZxNHF6WmpHcTNiamNEVUJqeFp2TTEwVUNwaVlkZGZEVkM4NUZYUmQrTDh3QTRMdGd3WU81dWE2MjlYNUNEbVFtZzRkVkd2LzdWTFpkM1UzL0d5VmljclljWTN3YUVKUFdvVTNtamtPMm92WVFWdU1LY0lvRXpSRE5yV3dHM1d4c05jTWFBaHpWRllSK3ZkZzZwUjErRGxNbGhHZTlKazNSRkVxSFE1VjFRVWlCak5EQkVpU05DZkN6VW0vSTludlJ6Mi9NTGZOUVNXN29YNUpOUFVHbnJqUithQ2FKOTlUbW04MEl5ZlVFcllHTGZoczVTNWhsMGlZbVFpSGlnaTZ5ei9xM2lzc2RJZmpCbExyTTJzazdPRW11WHA5S0JpRExnRlMwNXliTURZZWh1bXlwNk9wVGxsVFZTRFkzYy9NaEZQSEgzcVhXVjA5TUZidE15OS8ybnFjK2Q0T016Vjd5MnI2WkNHN2dsM3lHYXI5aktDcGZTVXRlYzFVZ05ROVIvMmlUOW1WT0ducWxHci9WLzB3YVNwOVR2WGZGOTVBTXB1cWNQMmZtU2Jwc3pVbGZNUC9OY2EwTHRTVmdvS21Ra2VnUlJLd01zZlNDTk9rS2FaUlRxODJRZFNnK2FYdHB2ZU1GKzhoWHd6YWhVTGlvMEtBK0Zta01rZGl4WDBBMTNDQUJWQUFrRFJOM2t6U0JGcVBKcDcyazFndWFlczJDRHhFcTNlYXBBcFoyM3pXNkFLb05XWE9uT2RNeVc4RXN3K3FOWEtOdHRkWStSQkw2cFdKSzZJY3hZRlNrOEZ0dm8xZ1F0TlVRV01xZTFrSjlabEVxcEhEeGdRTm5yNldZcW9OcGdpN21FMUpKcGpLaWtDWjFtVXplU1I2Vm5YYkNXRi9LTExJalJYcDlUbFlDeTJsbEN3dkhYa0Z3TWFCa3dPLytSdS84ejltV1dhd3k2bTk5MGkvUFl5cmZJVXg4Q1Jxa3FpMk5heFpiNW80dWl4VmRtem16SzBtMHRpMmlGY2FvR2tweFVwWXR3anFOajZjMEthU2M1UjVSOGtrU1Noa1FWUVpjMFpiRWJGZUdBNWtjQ3RIbUdPc1RHV3VwcHFuVk1ZQ2l2eW03VmlwNThYTnFjL0s3dFNhOTV0RjlhVnN2cDM4a1ZGUXV5R3k2MHQ2bmJrdkFSZ2NlSTZUSkdxbmsyWFliRGtGR08zVitFb2UwN0tDYjlLNnYwcDF2UmIydFZIVjdhZDZ5K3NKYzdOcDdCaFJZNVhHeEZOd3lzckNTWTArRFc5Wm5OQmhCRjVTd21iaWpwMnd2NnZxSlUyNDlNa0tVRGRJZ1hDMkIxN3FWcWFmODgya245RFFJQWdPb3JvK1d6Vi9xbzVsaENzUzY1ME5zeDdRczlaMktPZzlUSkkwVDdMT2wyQ2xkQTRXT0VxcG9VclZoZ0NIeU1YTHpGekxVVUlIR1BROGtjQ1FYMDJldVBwRVhtcUExUUkyeStCenkwMWN1bmVTcXN2MUh4K0ovWGtpNVQ1VEEwQTdUdDlZNXA4WVF1eHVKb095MDhJdWlWVkdnY01yVDlWd1JnazFkWTRyeGM1bURGcmNaQ0tBaE5Xd01LY3k3aUNpb053Z1lGZXZNRVhvaHFLVnBiZ1c3azg3MWNMdXZlVEJpMGpjWHpWRXhxMWRTL1lFTHFXZFd1OVhkL2hJSVB0a3RLNE1vZFVQaU1vVWFPZ0ZneFVjWmFuS0FLVExmS2xGSDY0Q0FIY1pLL3R2YXNqeDR4WkVaRDlYMzVSR0RBaHc5TWlKQzUyMDk5VnA1KzYrZ1hQcDR0WE53MGNYZjBPTStWNWlCaXRWWGtSakFxRndkNk56SHhCbGIyS1FMV3pCMy9DcWpCcGJzMzBCTUFydTIrb0hRbUJBMG1aRVVUeEpEdmhhbGg5c1FybHBEQ0pRcHV6cHNzazJBK0oydVNDRENXYzJxUFR4OW1jODRDZ29tcGdRMTFYMnFCQUt0Sit3cVJmRkc2RWNGeE1ueGwydllLK1pBN3ozSm1VdVkxK08rd1drQWRIdVJnUkF1a2pXSlNROXFNeEZUT3RLanQwa3I4Smx1bEtSaFlKTVdLa29ZYjNIVkdSMTZ4dTVwNFhOWlZjSEF1VFFoRXBUclNIVUg3bUtvZEprOWZDUndjM05qUlFIRGh3QVp2blEwbGV1WEw3MnZjWFNVVEZnVnEyWE1rY1hCQWFEN1kxdURCaCtVWkN4WGJPWXNKWExLQUJwNWZrb3VEZ0NnZkJvV255SFNwK0I0UW93R05YWkpoYi83L1l1MUVudVBLVDFWalltOWxBeU1KekJHQ3Y0eU82SktDancrV3RUVktaZHlFTHM2V0JVZXNRS1BUSy9RbHc0T0RJQUViTERXOForM0FwY2dOWFZ6Q0ZrY3lUQ0dNVGo0cjJMWVpBbzU0bmRvNE5DcFYvejNtQzF3aTZDY013WlZWMDBhWk9Zclh1ZllHbzBaQzVKeERhUE92MkNSbmdvYlVHODNIWi9ZTkVUU3dURlNnNGZQdm9QTmpjV0IxTlRsZHY1aGIvMWIzN241NUlPL3UxeFBuNGtUVkowc2s1eDBsQjl1a1VueFdrdGJrclJ3RURZalR6SVhPQVJhaTZIZFJCdStwTlZndEFPa0dJbGZTMW1KOVEyY1RYckpvYkdFSFlQTXNZRlI4SE1vTWxBSHZBRWtHZ0hPQThLRGNvMVJMUU5hMHdPTVJyR2pHSGM5L044REpCQTV6a0VPWXpvb3Nob1RLbUZWcENtZnB1YkFNWUR1ZGoyek5aek0wRXhRekhBbk5qWFN3U3dBckd5ZExLdmtDT3hQeWVxQ05FTXhoQXRGYWJOYmlCbzIwUlhEN2RtSUNscnpKc3g1ZnNOVGtYckYvd0lkYmpSRHNZZU0xN05zNFZ5cmZmVjdWR0RKRmcvN3hvN1dhR1RkWDRGdXdodjNoWndoc1BSTlMzOEQyL2V1dmJqV25RM1lZVk90NHU1M2h3NldZWlVLYWdrdFIrdUFSaTVBNDRDcUF0RENob0tJTzFpVFh1YW9wYTBTN0NSeTRZYVVqdDBDQkJsdzR4d2UxZHg3R1VnU2QwTjczdVZ0SU9Hd0lnQ2lRSkVReVFIa0VNa2h6WWpHSjBEWmdReVl4aWRXMURJR0VhUEFLTmhaQXlOcXlBTUFaTzdydDRjSkRsZ2pKdUVkTG1Lc3JlOFlvS1FBYkVONzdLTWtLV01MRlhJVWthYU1GaFpENWFQZ1owUllXdHJqTzIrd1hCc29IUFlMeUZvbmNDWUpZZ3dCQW1JTWhCM0FjNUFsSUs0QzhQTElCcFpvQ2tDSlFMRkJsQTVTQktRWkZVaVJLU3BhK1krSHlJcWIvendjY2FQS0xScExUUjM0QlNQRlFPWWFuaEdxSXAxWUVxNU15eG8xa3VKQktxTlIxTURLTjdUZUVadGVmbndwZm5lb2Evc1NvN2Rac2w3T3grWmY3SXd2L3g5Njl1cno0M3pNZnJyZmF5dDNZUWlJRkVLeklST21tSzV1NDV1VjVCa0NiTHNFQWlIWUxDRUpPMkFtYUNDZW9zMENtRHNQdHlTTnJBZ2NmR3hFRmdDOFQzeWRRUkF0SWFSYllpTUlHWU1yVWNRR2NMb0FiUWVRcHNjeVB1QUhzR1lJWXdaSUVuSFNCT05icWFobEFHbEk2UktrQ1NFVG1iUVRRbHBJdWgyR0lrU3BDUTJCR1VnY1IzVVpMajBTbEFBbFdJU3BCQUluUXRVSXVoMmdDd2xKSW9jZUxuZ0tNZENNTktCTm93OFp3eEhCdU1jR09VYTQxelFOenNZallDZFByQzJEcXh2QUJ1YmdvMnRITU5oQnprZEJsRUM1aTd5WkE1Q1hRQXBsT3FBVkk2RU5UaEozQjRjcmxEaWhZQkZJMjlzc3BtVnBML29RcWlHYVJMMG5sVjYwUm9GWWVQYkl2YWxDVTB0SlhjS1NFcXZueER1S2hJQkRpOGZlZVhjdTJmN3p6ejVnWU1Iem1kZS9qUisrcWMrNjJtZlZ4THUvUEpDZCtuWTFtRGpXRUlFMFdQQWFPVGpFZko4akkzUkZyS2pYOE1URDZjNGZHU0FsRE9JV1lHV3c5Q2NBTnhCeG1lZ1dFRXBaZDhtQjY3VSt2SkN0OHVJaHM3SEdPc3hqRFlRc3dQR21vdnAzWTBKRGFOemFLMGhHQVBRWURaUXBHRWtoNUlSSUFZcUFUS3RrSEtDUkFHSkVuUlNqU3pMa1NZYVRBSlJQUmNtT2FFSU1pQzJIczNtUkFvaXV0alE3TlpEQk92NWN2dHZUZ2ZBc2xBTWNTRWZzUy9PMlpDVWFzVmVGdnR6bm56VHhhZ0R3NUNHcGgwb2xjSm9oakVadEU2dzB5ZXNieWE0dFQ3RXRkV0x1SDVENCtZcVlYczREOEZ4c0RxT1JQZGdDTkJrZ0R3SGtnU0ttc1ZEVThrOXFXano4dmxRMlBCWk5JSDZ2TmRJVFJZcWtKd0NhZ0tEQVhNbUxXRzN6SnF6VEtHZ3FkYi93VlQwUnlaS3ljclIwLy9MOHRJeGM2YzlEZ0RjRXBGLzJzbm1YaFNTYnhvT2QrYkJsdjVrQUdKUzVFbUMvczJuc1gxcEF5K2UzTWJoK1Iwb2ZSUEFCb3dhd0tneHRPcFZGQ0s1c29EV3h1Yk00Zml1bDFxMUhrZEp4LzVhTWhCbzUzMk0vVyt4NUFLTGZWNFdBQ1lGaWVYNFJ1a0lZOTV4bTQwSnpBbFlNbnZhQVVqRTJKdWN5dTNMRElhQnNXRkZZb3BrWFJOWjBLT2thRVdGWVlLQVdFR0VRRWpjaCtjaklZRkF3N1l5YVZUMjNySm55elMwMDFBekJCQVVFcjBFR0NCaERWQU9xQ0c2cWNiUlplQ0preWw0MU1GMmJyQTYwTGkyUHNhbDZ6ZHg1ZVk2MWplNjZJOVBnMmdGS2tuQXJGeDR3L1k2c1VDRW9iV3hudG02U0pDbTFqcE4yVlpUcndsTFRjdXQyVzVVQ2RuQ1VRYnNyVkYzbHJwTlJXN0VzWThNd3R6Yy9DQmg5ZlcyRnJNN0Fad3hnTjhVSTcvVXkrWk9NSm1ueCtNeDJSTkxBK2dDbWFEZldjQXJWOC9qeExzYmVPNlpkYUNYd1poNXpPc2hFdXBEcUdQZlROSjhrNEtTelFwcGFEYVdDQ2IzSVJjM21wRktIa1JrQUJsYW5TeXl1UUVsWmFXRXdFZ29MUys0RVJqb0luVE1TU29EYmNVcDdHNHllemhTc1dham1KOHBtaTRsV0lGdTZmb2lWQ0Q3dTN3OFh2YS9jYkNXZzRxdVlSYm5uY1FpUjJEQXJGMXVDRXRWUzJMSkRDRWdZWmlVMFFWd2FwbHgvTGpDczQ4elJrUEcxdllRMTI5Y3dObDNyK1BLNmlFTXpXbG9OWWRjMmV1WHNBTFllbTB6SU9nUndXZ2dOd20wakpHVGNleGNFeWhsZzZjdnRCcExQSWgyZndwSThzRDdVSEVrdVUvVlhpOHg0R0oxb3lsTFlyV0Z1bVhmbkpSbGptSjdYWlYyTG5JYmlNczVFd2dEaHc0ZHZYRG95SWxYeHFPeDNBMlBBd0MzQVB6UFJ1Tk10N093ck5UZ2xNQ3V2VFppb0FDb0xBUDZ4L0hLeFcwY1BXWnc0bVFmSGJVRkVnV2pGd0JGZGU5Y0NvRTMrREwzNWxuQVVucWdnc3locGhJTE1SVWFhSlhIb2hrVE43dlNnbFhoSWFqZHBDalZucWZhalVBVklUd1JBVmZtNnFnNUx5TnVTNER6d01RMmNsREVOaFVPbEcwRUNrSUJNSDJ4MlAzZEh6a1doQW9KS2FTazBPMFFGaGNUbkR6ZXd3dlB6K0hxWmgrdm5YMGJaOCt2WUdkd0N0cGtFTmlEVHlrQVBRMlRqakFZOXBHUGNvZzJZSmU3RVpvakFxaUZhODJWaEtZMlRDRm8wQW9TREtoVlhGYXpPNXFvNW5VYWRaenlyeVVUUjhWbWJjV0puRHorNEQ4ZGo4WWJzOXp3KzU3SHFia3dBZkF1Z0YrQTRjOW5hV2ViaUpBa0NaSWtoVktNbEFucDNER3NqcDdFSytjZXd2WjZpa1J1d3A2M1IxcDdqbVFHem5Ndnk2YjJ1d01uWEdvMXkxZmpJak1GK1UzeitjTGNKL3g3OFh4azh5QXdRTXBOZ1pJTG01aEJxZ05LT3BaSlV4MUFwUUJuRU00QVNzR1VnQ2tGcXd4RWlhMzhVQXFtRkpRT2dmUTZUcDhZNGRzK3l2aXVUMnppbVVmUFlYbitHdVlWa0VrWFN1YkFuSUd6RkwzRk9mUVdlMGl6QkVxY2R3ejZBc041cXNwNmo2TCtVOWFzd2xIcGN1ekFOSHJnR2pvSUFYdFdmSVVCR0RWanRhSm5MVmk0aGVJYUt2UjY4NE5PZCtGWEFReG5ham5Ed1ZrTzRLdGFtNy9Hd2t0cGtuMmIxdm04VFRZVlNBaGpNdEI4REpjM2dQUG5iMkM1Y3gxSmR3Q3RscHNJRGxvNVNtblRXby9UaktBSWIraDZSL0NzN2FkRmZoSkl1R0xDWXBQMjdVSE5yWEp0L3cxVXA3VlprWjlHRENTYmJBc1JnYTIwRTNXczl5RUJjMksvWjhqTzVaREF1TThBUVRoa2tOZ0VuMnkxbkVZWnVtTHd4SWtkUExBeXdEc1grM2pyM0NwdWJUNkpqVzJGa2RhQVNrQ1VvcHQwa1NVamJHOXNZREFjUXRoQUN4ZVRsSmJJb0dJRGQwVXdIclZXbXhCVU1JMm1VeUt5dGJYV2E5NmtxSXZXTHZLeVYxTFV2WnY1ai9YQ1JJUWp5eXVYbGhlUGZGVnJiWGJMYnc0YU9IQjlNVjh3UnY1Mll0UmhWdkxOSW9ac2wwY0NxQUdNRXZUSHkzano2Z21zSEZyRHl1a0JLTnVDaTBZbXJQaG9BbUZhZzJiOSsxUVQ5TnVydDJsNGtGcDdlZ2pHVm1DU0tVS3ZzRjJIZ29JdjFWWXFGaEpQZmd1eUI0bVE5U0RLRmpLRkZJZ3plMU1vZHNWYnRqczBoUUlxdUF6ZmJENW1PeWNZUFloSndMUUdKV05nMUVFWEhUeitnTWJKMDlkeDdpSnc4ZHBKbkwvRTJCbk5RY3c4aUJocG1pRmRabXp0YkdOcmV3dkdqTUZFMEVGemFWbm9ETHlHaE0yZFFiSGNNYUlsT1dDcVRhbVZIYVJTNjBwc1k4MkN6NitRQnVZeW5HYXlodzhwTUNkeTRzUUQvMFJyZldubUp1ZmJRWWxIcEtPbXZlMEErR1d0NVVIRjZwU0dlWWlWZ3VUMlJGS2tZUlJqYmZ3SXZ2VHVEajZ5ZEJHSGxvY0FKZE52dm4yR1hRZXhvcERxVkJHMWRTYUhMRTF6a1pHdkhmZ1RzT0oxUWs4cUF2YTVrL3M1NGRTMUIzbU5nTlFCQ1NET29DbHpuUVdXVkJBUE1sZjU0bUpwbE8wNklGYVdqQVJnMEFkb0RDTUtocFpBMG9PQWtkQUlTeDNCczQ4REo0OXZZNzZUNEoxM0ZiYTJFK1NTZ1JXRDBnd0xpd3FzVW14dXJXRXdHTmpmUll4Y2p3dGlvRDVZSmtFYlVvMmJkcDBEMnJiY1ZIS2lLZWlZekRrRHRRM2JoZmZ4dTMrWXNYTDAxUFdqUjA3L2ZYZnYzbm5nVExHYkl2SVA5WmpPZ1BrUGFPUVBNZ2tTblVLSW9aa3dTQTdoMHZZVFdIaDdBeDk4NmhheWVTZTI1MGQ1cDJ4c095aEF6STRjZHlyV3ZNVEVoelBYYjVjZzFLdDI1enEzVVJsQnI0WnZET0hFTWJiT28xRHFRZ3dHY3daRG5rWjJ6YktHQ2tsY0FVSFlSejVjZnJIMVRJbmF0SlM5UG9ZY1hRaU5BZG9DNndUY1B3MlZiV0ZsWVl4dmZxNkhvL05EdkhVZXVIcHJpSjF4QmlROUtKVmpjU0ZCbWlpc2IyNWdhMnZEOWVWUmRiU2pIbW9IWGRHaE9IcXBKa3FZU1R5TFpubElDNnNHdC9LZUZBNGZXZm42YURSNk5jczZNKzlvNFlPNHIxcGlRUVBncklqOEFvejZQQlBmRWhxQ2RRcVY5d0FrR0trRVF6cUs4MWRXY1BXaXdYQTRkSWswM3gvN2RscWFBS2t4UVlqaU5ZZGZZVE5xZFhTNEpiZnhMZm1Pb2xaS1Zja0JKaWhLUU80TG9rQlFVTndCY3daQ2F2TWFUc0NVZ0tBQXNvK3hKSUFDYzRaRWRaRWtHWklrZzBveUtKVkJxUVRLbklJYVB3WlJPVWJaTFF5U0xRd3hCNkVlV0EyaHRFSXlZaXlvSVo1OWVJUnZlbUdBNTU1aHJCenJRWXNEcjJKME9qMGNQYnlDSTRlUElrczdJR1pYRjZxbUp2VWt2eHhVODgydXBwSVRlZkpodjB0bUszbE4yUDVJOW9CYlhGZ2NuRHJ4MFArUVpaMjF2VHp2Z1htY29Kc2dCTS9YUmVSdmtTVEhRZkx4SE1ONVlnWnJnOHk5bXczMUFYengyakxTenVkeDZ0Zzh1dWtBU1RxRVFRZkdkQ0hKQm9TMm9mUmlKY2x1UytDYi9JTE01cUdrUHJOZkpRUHFvVlhyU1Jia0tNMGNxMlRVakovL29ISVVRTEVVZXlXSWxhV1l4WkVDbE1KSXozYWRzeHQzWUFXN0tNeVRCSm1OMzR0eENKZjFPeGZKbGRQZXplcXdzb0JsKzBWWVFGWk1qREpJMmFaMDI1aHRnWjBrd0psVGhMbWxJUTR2WlhqNy9CemV1ZGlGUmc1V0E2UWtPTHgwR0FuUDRjYmFGV3pUTGVpaGJRc3N3bkNuTnk1RnFjMTM4aEVDWnhNMGltcjN1RkxNbysyenF5VDhsYnlSM1dkcDNNNmJnQ3hpaFlYbFl4ZDYzYVV2YUszMVh1NTM5Yk0vKzdNSGRqTC9udS85Skg3NWwzNDEvSllHY0UwRW13UjFoaFNPR2RFWk95MHZJZ0tyRktOQkQ2T3RCT2hjd2NMU0VBb1oyREFJVzViMWtRV2JQTlpPN0wwY1ExT0JVMnYwb3pBR2hxMjdoT0FKODQ5eVYyWTdXeFkrbi9HMHNsOXk1Q1c4eEE3U01hVWd5aHhJTW9CVHNPcUFWUStnQkVxbFVHa0huR1N1VWRibUY4d2RrRXJzbjVRQ2xBQXFBemlCQ2p3UkJYOHkrNjhVeENrVUoxQ1VJdUhNL3AwVEVDa1lTZ0Ywd1pMWlRnY2lkSHNkekMxMlFlaERrOExPZGg5aWJJTXBDTWk2S2JxZERvd21qUE84V09kdXBCejVMbGsyTzlaZ3U4cTE0MDNjNkRoTU1ZazZ0ZTI1OXJuNDFpY2JscWx5N1lqek10WUxNOUtzSjg4OC9lR2Z5NUxPTHlFYytOcUZVYnVUT1U1b1d3RCtoUmc1U1pKa1RQSWlZT2FsR0hvVEVDL2c0dnFMV0g5ekN6bmV3Qk1uZ1BtRXdEU0dHWGZkalpEZnNSY1llb2t5QnpHQnQ1QjI0RlNjSzFYQVZxL2pHRUxKckxIMUNGTFVIeEliT2lBREtWZHZBY09RRGNNZ0hVYzlFOGpmMEo1aFlnVklCMzdzZ05qT1BObDhKeWkraW5zOGFpcWhKaW0xQ2RBVXo3RFR0eWxFMk00WThRQkdEOUROQkk4OW1zSHdaV1M4aUxQbkNMbE9ZRlFPd1FDZGJvWmpoODlBY1lJYk42NUFhdzNTZVd1Y1lIeUk1bnN5QkppMmU2ZnFjT3JhYU9IblU5YVlmRkppcFl6dGRUeDI5TlNsUTR0SC9yL0d5TTVlUUhOSGdOTVNzZ0hBR29CL0lDSkhDUWxyakY0QU1DK3VkeXlIZ1hUbnNESDRDTjQ4bjJJdSt5b2VPR293UjRmc3paYnN1Sm1VTzV6TFZGUnluY3VueWF2bXc2NWFYN3hzSXpLRWZZY3hPN0N3cTgyNEpGaDEzZmRTa0VvaDNBVkVRYkZ5QmNzdW1CV0V5QTJ4MlZ3SXNKNkswQzFDTmZ0bjRyVFY3SnN5VXRzKzVqdUltRUdLaWxKQUpjUXR5QXJqQU5rREc5Z1RYUFZoeUlDVEVaNS9iQkZ6UEFLaGk3ZlA1OUFHSU9wQUVURFhCVGhaQVJOdy9jWlY5RTBPazljaUlqK1ZXcEhqTFRjWnpCSlBVTTN6Vk1tQWNMT0VvK05aUWJHU2h4NTYrbDhaSTY5amlyYkFYZlU0RThCekJjQXZpcURIa3BIdzZIa2l6TnVBVzBNbll5UjhCR3RiSDhRcjU0WVFlUnRuVm5KMEVnUGxHaThCUUdzZEpPQ3pzMnQrd1ZGbDBWTFFvVkN1Ly9NdE5xYW9OVlRvNFpxSGttQVBwVEhTNkI0b0g4dHVYSUp0N1FVS1VMYU9RSks1NUQrMTFYN1l5ci90ZFVsQTNIVzlXK3hPV0FjWWNzUUJPdFlMK1ZFS2NkNUgyWkNFWGFWVFJDcTlYV1dzV0dPN3ZNYWRDS0MySUJqRFVCZWNweUExRDBVSllQSmlvdmZKUitlQmJCdURYSER4Y2hkNW5rSW9CMmdIYVpyZzhPR2pBQWpYcmwyQ2FBUGtCcmsyMWQyaGJ2VGN0TzBKQ29GUkc3cWhTY1crR3RWUFJVUmdxZnFGeFNQYldaTCtyd0J1N09jZXYyT2gyZ1N5NEcwQWY4TWV3cG1BOGhjRVpwNlp3QmpEOEE1R1poNlhiMzRUQkIxUTlocE9MeWwwcUFkTzdhRmdUOXFEOGpCVW80QkwwRlRyTjlVZE1jMzJHcTYwMHRSL2gzRU5tOHdaaUMwekpwU0NYUUdPVkFkQ0NwQUVCSnZiQ0dWZ3NvOG43aFQ1SElsZDZBVy80NU5TQ0hXSzZVLzdLRnZMc1ptd0RkdENmVEV2U2hHeWYvNTBGMU1XSWdtQTRyRzlIcFFCbk1GQVhQc09vSFVDYUR1QzhmUmpHWkprQjhnMUxsOGxqSTBHMkhxU0xNMXc3Tmh4c0FLdVhMcUE3ZTBjU2pHMEJxb3JhS1IydSt5ZTAxUkFGTXpYbEw2bkpFaUliU2lyVklvVEp4NzZIWlYyLytXc0xUYjNJc2VwZytjZEFIOVRCQ0NUZ0ZUK1FaM3Jia3BkU0RKRXJnQ21JN2k2OFNMbUxuWWcvYk40NEtpZ20wN3JBSkI5TTlqc3RBN0lOVXBLaFQ0dXZVWGR1OVc5SGswNjhZZ2dwR3kxMzAxbENxY3VZYmYxR0VNK0owa0JTa0Zxem9HczYwYWkyUVVkdHZhaUJEQUZVNWU1Ym1nQ2ZMdU5Bdys1bk1kQXVVMEdwVUpuZWE4YUVFcXdLSzV0cWlibG1tSjdia1pxREdIajZpQWRVSm9EUEVaaWNqejV3QkVrZWd1L2lYV2N2NnlSbTY2dHpMdnc5TWp5VVNnUUxsOStGNXVibTJET2k2MSt4QXdVM1M2N2c0YUNIS2Yxc3k4T0VjY3Frbkx2blRFL3Q3Ujk0dGpwdjVPbzVPSU1wWlc3RDV3Sm5RVWVQUCtEQ0ZMU1NaYXdlbGJsM00yWklLcHZ3VE0raHBzM2p1SlFZakNmL2lhVzBVR3YxMnR0YjlrdmFLcE1XSjBzUUpIdyt4eW1RVWNYdFpicUlGZkk3bGlHeHpGYkxrUWpUaDFvVXVzUm1PMi9jd3BCeDBwbWNRYWxVakNueUkxVnVpRWhHTEtFQUxzT0FOdVhsdHBiaEJsRWlSc21kaDBDeElXMFZTbEpGY3BSV2VCVTh3bW5rQ01Da2c1SVVyc1lnelNFRFF6bEVDR29STUZnREtJTVNkNUJpaHhQUHRyRENKdlkxb0pyMTNzd1ptUVBJQUNjTUphWEQ0TUFYREJub2ZNeHRKL3RvWmF5QXJVUHIxR04yUXp6R2lLcTlRZjZpTUFOcXlVSmpoMS80SjBrNmZ3ejJQNUt2QmM4VGtoVHZ3WGdyNHFnQTBPaVUvT2NDSFhWdUFzaVFHTUxON1Jnc1BFeDdHU1A0dkhCdjRhc3pFUDFCcUR1RnBoSHRqZzNQZ3d5QnBLc2x3Mk5aTFhRRWttZzhnU2FEYlF5RTNNaW9uQVczUlh1ZkE1anZONldJd3NFSUphZ29iRTgvWXRaZlNLYnpCZmpEM00yRkZNWmhGSUlKU0RxMktaSktBRHpBQklZVHAxbVFBYWlESnBTYUdOdkxLV1NjcDBMMllLbnVCb0lLMGROYytMQWFHZHl0REVnU1oyUWlTbDJ3L2dLZlRFL1ZNdjNpc28vMlg2ekl1eWhGRUFHNVhyaDdEV2FneEhCcUlQaVJILzg4ZFBRK2l4KzR6ZGV3L3JPSVdoWmhGQnFRNzVrQnd1SDVuRlNIb0RPRStSakE2TUkrWGdBRGdjRmhkME1qZzV3SUZNcitHVXZtaXBDTk0wTTVieVBJcURiNlEyT3I1eit4MG9sNS9mcmJlNGFjQ2FRQlQ3bithOUY4UHVoK1FkQjhwUkFIckxsRG5zamJtOE84ZFp3QVRqK1lSeTU5UW9lV0ZuRmtpRmt2QWhEQ1ViSk5vZ01zbndCaHFRb2Zoa3lJTktBR3NJVWhUQnFUZkw5ejVTZDVsUkdNemFtck9SQVpVM0FQWjVMNzJUL0lYR05tQ2xZS1JqMGJON0JDa0RtL2owREtITjA4NXo5ME5tR2FvSUU0QXlNMURrSEF5Q3hFN0JzcVZTcldPT0ZUVHJXKzBBVjlMR25waUcydFVTcDFPMmVNVEJtWEhZTnUrNWxka05DWE92K3RrU1hMeEE3NVIzWGJPcERPZmJzb011ZEZBTlBQLzBZQnYwYy8vclhMMXFQNkdJbXBoU2tnQ09IajRHcEE2RWhWbTlaSVJHUmNua1dxQlNaM0wwdVJ6VWF1cXpOc1NkOG1FQ1U0UGlKQnkvMXVvdC90MTYzMlhzWDFsM2NmOTBDSG05ZEFDOEIrRCtTd25jWUdUNENJR0hGYmhnTzZIU0F4ODljd2VudWwzQ21POEJDajhGZFFkN2Jnb0RRR1MzQnVFRXZlK0Z6cSt4Q1F3Q3FLTjZGTHJ4WVo4Nm02QkpvRmxtcmk0ZW8rRURLNHFjdXhoeVVPL0V6RUhYQXFnT1ZKRERVSzJoUW04eW53ZU1VQkIwd3FRSTRRTWVDZzVTbG5zblh2ZTBaeSs3ZlBPWHNPd2Nzd2VCNjFpZ3RXLzVjK3d1S09vbXBDZjFSRUpwNkJwS0tIS2hVWUtWaVVyUFlyTUJsVmQrSHRkb1lFREZHd3hIKytTOS9HVi8vK2swa2Foa0dxUnRZdE84bXozTnNiYXppemJkZXdlcnFkUmlkSTgrSEVHMWdqSGJTV0hwQ0thQU9HdDhBeTlWaXRyTDFMTVVLaTB0SHQ1OS85cU4vWjM3KzhFOEI2Ty9YMnh4WXI5cHQ5TFI1R3dENEFvQ2ZOYm44TFpMT2J3RzBiYlJ4Q2E3Q1VDZDQ1OEpKM09oL0R5N3NQSXVyL1F3N3VnOGFheVJhQTJvSG9BRUkydFllaXVpZGc3WjArN0Y3Sm9lY2h5STBOeDM2QThVT29Za056OWkyYkRCSktmSlFGRWx0ZmtHcUEwN213T2s4bEZvQWVBR1FIb2pud2J3RVZrdFF2QVR3RXNEekVNeEI4UUtZRjhBODU3NHlnRHFPV2V2QVNBb2dCWE1YekQwSU11dTVPQU9wSHNEZDRudmtIc01xZzBvNjRNU0MwaGZySVk3aXByVDRZbFpGZzZnZFJmQUhFRm52NTdvUjdOLzlWd3BXRHVpVWxRZUM2MFJnVHRIcDlQRHhiM2tXaDVZVlRMNE5raHhrQ0F3YnhpSWh6QzB1NHNFSEhzSDgvS0pESVFjajZsTHJ2dGlkWUNzNm4xSE81dGgrdWhUSGp6MXd0ZGRiL3Z0MTBOejNIbWRHNzdNRTRBZUo2Y2NFNHhkQlp0bm1zV3lwV1JnOC9GQ0M0NHR2WXlWOUZTZTZsOUR0amFCVFdJRU5zZDNEdG1VRFlNVlFWRTYwdDgvcW1DQWNhM29kVnJVRnJVU1ZsZWc2WU0yRWVpQTFCOEljaURzZ1RnSEpBR1c3QUlReXNPcTR2TU15Wm96VWVoNTJNbGlzb0YyOVJ6R1hMQkVsQUJHMDhYcllOaXdrU1J6N3hhNFBUcUVxWlNydE04YmVXVWh6ajJrbGIvQTFJRGVkYW1BSHhNTFJjVnNyRStzcC9MVmpodVFqL1BhWDNzSS8vNlhmUnBvZWdxWXVoQlNFQlliR1lFMFlqMGE0ZXZVUzNubm5WZlMzdDZEMUVLTEh4ZjZla0xSaHBtQzdTNkRqSU9MbWE4aDFqYXRpTEQxSkVpd3NybXkvOFB6SC90bGNiL0VuQUZ5OUhXOXoxejNPakM5MkE4RGZFeU4vQVpMOEtpUjltNUNJTWdrRUk0eG9qRGZPNXpoNzlUbHNtbS9IamUwSHNOYWZ3ODY0aXh5SmUwY0RzQm9oVVFLR2NuUDRiVHNneTV5RjJZOHVOL3ZOeXBxYnpSc0l5dFppREVNTUk2RU9GSGZCMUFOekQ0cDc5cVJYSFVCMWdYUU9vQXlHT2dCM0FPcEN1QWZ3SEVoMXdXejd6NWc2MEFDMGVBSkFXVlZPbFlHNWErZHlYRzVrUVpkWkVVS1ZXYUtCZlRnWUptR2wrcWY5VWdXalI1NytEcnF2Q1dreFZzMkJWNEwvdTdLZDFVblN0VjZOTzg0VFptQ1ZRaVVkcUNTek9tMUtRV1ZkUFAzTVEzanM4ZVBvRDIrQnpOQzI3aGhqcFlhWmtDUXBUaHcvalRPbkgwSFc2UVVzcHFsNG1tcVlWdTFURE1mTU9TaDhLcVdRcGIzOHhJa0hyL1c2OC84UVZoL2p0dTJlQVdjWDhJd0EvQ3NJL2dJTS9ScEJuVE13T1l4QjRyWURYTDI2amErL000K056bmRqelh3TTY2dkhzYk96QkcwNnRqWWhPUlJ5c0RpcEtOOCtRODY3c1Azdm9rYm9RQk1XUGN2d2poMVQ0L1dtMmRVeC9NM1ZzZDVGZGNEY2dmaXdoak93eXFDTlY5bTBZWXh4M3NhR1BCazRzV3lhbGE1MUl3S0pyZnlERkl3azBLSWdXa0ViaGhHR3VKQ0pTSlVKdTg5akNoRWNwMDFnNDBzTEtsY2M5VjgyTkNwRE1BcGVneVVobE0yUkVoZWFRUldBRkxndUNIWVVPOWtRalIyTlRvNE1tWnZ2NFZzKy9pUVdGeFRHK1JaWXROTS84Zm9KQkpXa09IbnlERTZmZWdCcFludm5WVERYUkRWRnprbTlOK3hlbTVXenRVVDgwcUdWalljZWVQcGZFL0huYjRlQ3ZtUGQwZnV4My9POW4yenJxdll4eGpVQVh4SEJFaEYxSVFwa3NNaGlFLytkWVk0cnF4MHNIbm9heTVuQ2NMQUR4aEFKOThIc3hBVEJSUzVUeE1CTVJSek5DRTRwTi85QzdLY3J5ZDBqN0V2UEJXaklkeVlyQ3h3NEFJbVhvS1VPaEJPSXVObVp4TjVNdG9VbXMzOVhxWnRaU2R3MHBnMHg3UE1tUmFNbUk3TUZVR0ozSTl2VFBPRVVLa25LRVlJeXlLL2RZbFI2SGU4MXZXNUJvNU9iSzE5V2V6cHhyeWNZWlZCSnRRWElGU01sYUZxM25qcURVa0NucTVHUGdJdm5yMW12RytTZWZ0UkJLWVg1YmcrallSK2JtNnVOT2c1VnBXd3FvVm9ab3BFcktkajNtV1c5L0pGSG5uOXJmbjc1dndmdzIvV3dZejloMm4wQm5CQkFMZUF4cmtIME5RREhBRm9RUWgrTWVRRW5nTUo0Tk1hMUcwT3M5azhEeVNJU2xVTmhFNnh5Q0FPNVVyQ05MQUxEaER5eEU2akNDUktrU0NoeGF2K092ZzFWWlpUWUx4TDNPVFBBQ1l6cWdOSTVtS1FId3gySTZrSVMreWZVSEtEbUlOd0QwVHlZdTdhSjB5WFA0TENXWTJkdmN1NUFGLzFwMW5OWlFzQUNENDR0dEo2RXdjcUpCN0lYN0ZERmw5L0NZRFdoblNhMjN3L2toOXpJZ2cvTTdzL1UvV20vaEJSQWlmTnNLVVJsanZGei8rWUVGZTAxcStvdnc1TUtma3liN0ZhS0xPbGdibTRPMTY5dTROYnFPaFJuZ01tS3JnVnkvWGZNQ2JLc2c3V05WWXpHSTZzM1htU1g3akNwQUlZcnMwaEViQThUSXJES2NPam9BNnVQUHZ6TVB5Q2kvOWZ0TW1uM0pYQ21lQjhCc083QU0wL2dFeUswYVJsUnM4akUwTVpnc3ovRXJkVXhkdm85Sk1rS0VwcUQ1QUxGMm0zZnlVRFNnVUtHRkNrVURKajdvR1RMMVcrVUEweEpzZG5LdkwzaGJBNlF1VllZVzZBazEvWlBLZ003ZHNsU3d4MzdXR1VmcjFUSDNXaDJaQUNPZ2ZPaEZqaUZVZ3FzQXNwY1F1cmNNVTAraEFyWUovaGlIOEkyZXFySUlSRjdJc0Y1RzFaVzFKMFlyVEpLZm9RZEtBQTZjU2lRcHRkWkdLVjBWTGZUaFVveVhEaC9IYU9SZGlFZXlnRTl4M04zdXhsSUROWldienI1WVAvZVZMRXlyTXhudUZDd3NkNjZwSi9UVGpkLy9ORVh2amJYVy96THJsdEY2dmZiZTYxellEODlidThDK0RrQVZ3bjhBeER1RTNqVFFKOUFnbmtOayt6b0JWeTR0WWliNjBmeDlNTVA0OEdWUzVpWHQ2R3phOGpTRVRva1NFUkJNUUhLN3VRUmNkT1QwTTdqb0tEQTRlc0NSV2hqUFFWekJ3TFgwYXlVKzd0Vm13RzZOdCtocnYxeTRacEJZbWxZU1Z3RlBuRTNBZ2Y5Y0RiTUtGY1lCa3NoeVhtWm9sYmwrOWZDVkxXYytneUxnQWhXaDBncG5PQitqelFHd1V6WU51UTZJSnIwYjdCWG84RlVvbHl3SlNWQWsxVGhzY2RQNDhsenEvalNsMTYxSWFwa2hWQWtzWk1XMW93VHg4OWdiZjBXcmx4K0IwYWJRTzhCZ2ZBK0Zia1N1MmxEeFFwR0FFNFNQSGptcVhlUEhqNys5d0I4SGJ1czdYaFBrUU43SkEyTXkzbitEb0NmQmZCTEVINlhKWDJGTkY5Z0k5dGd4Z2daTnZJdXZ2eTJ4di8yeG1HYzMvd1ExczBUNk1zU2RqU2dzUVBRT2lBRElFK2h4NGNoSmd0K2hUdk5oQjN6MUFGVEY0U3VyWjFJNWdiTGJLMkYwWFhiNE96am1DMUJZUHZSRkVRVUJBa1VXeG9hbkJhaWdKNGdJSEpTVDhWMnVtQWpuTGdtemNMcmxIb0M1U1k3cW56WnpDMXhYeVZOWGREVnNCM1dRV1dyK05KMlFZQnRQSFdIUndrOExzUEJNRy95bzlwQ0JaSGlaYXA4YzZyQWtnWHpTd3Q0NFFPUFlIRmhEa0RmS2RyVW5CY1JzdTRjVHA5K0dMMjVCYWRselNqR24xRkdCbHprcDVZa0VSQlVrbUJoNGREMnFWT1BmQUdnWHdLd2ZkRDM2SDBWcXMyUTh3QldxL29xZ0M4QytDcUFaUkplWU9FdFNONFRwYnUyR1pHd05TUmN1WkZBNkF3V0Y0NkRPSVdXQVRTMmdjUUF6SzV6MlZnaVFjTENKcnVpWStvOGlXT1FxR05WWlJ4RFp2TUJGOEtSWmRTQXJQeDN6MXFCYlUySGZFRlJGU3dXSzFYUzNHNW1CeTQzOFdCaGxSVGhpbkU1bVJTeGZYQVR1ejk5QmIzSVBkZ1hGa3NnaFVrMWFvdHF2YUpvNkszQ2ZyQjZJMnNEdkJTMDl3dTc1WGFPN1VvWWx5NWN3L3I2T29TNnhjSXUyKzFjU3QwbUtzRm9OTVRhK2xvQkdPWDFvZDB2VnE2elhLbkVDYjB3Vk5iRkl3OC8rK3JoNWVQL2QxZFkxN2ZUbC9hZThUZ3p2RG5qNmoxZkFQQmZBL2pyRURySGtyekNlbnlCYURBVUVtaDAwTTk3ZVBYdEJQL21TeWR3ZGZOajJFbStGVnQ0SHB2am8raVB4VDJOZGhzTnFLcjhTR1U0SUU0NHczYzRGL1J0NFRsVWNicld0Yno4eVc2Q2VrUVJqNU1xUEV0WWJ5a0VQaEFrdnB3VVNiY0VJUEVnTEdadkhLaktyN0xYekl1WkYwNmk4RGJsREkvM0tyNkRvQ0lyaFhhZzFvRlRBc2hwWDVOOXJ3SkN0NVBpK0xGRDZLUjJwU0lSV3oyQ29OR1dPSUZTSGF3Y1A0VnViODVlcjRKN0xDVnZmUzRIeCtxcEpNWEtrUlBYVjQ2Yy9Qc2k4bXR0UFdtM0M1cjcydVBNUUZkNzZ3TjRIY0NYQVN5UUpJc3NhcE5FZWdUVFliS3puTnNEalVzM05BYWpZNWhmZkJ6ZDdEQ1FHM0ErQUF3VisyZUtKYmdnbHdLNmhiK3NuSWlHY2cyWFNTSExCRTdBM2dNNDVzclB4c0I5TDh5YmhCaFFDa3hzRnl1RVJjcWlUbFNxNDRBOWJWeldVQ2dvY2dhVEp5WEw1SnN1blRCSUFaaFFia2xvSWpsUWJjOXYxMXBvQ0RXMmxsYWNJbWZ4dXUwQ3JwMnRIVng4OXdyNlkzL05iQU9yMy9UZzk2QXlBNXRiNjlqWldyZDFuVUl5eXVzcitCKzFSRTV2ZmpGLzh2RVgvM0d2dS9oWEFWeTRFNkM1N3ozT0h0N3cwQ1dBL3hjQS8yY0kvdzVKK25VMjZsV1l3Y0JnQjducVkzc2tlT1h0UHY3VnJ3M3c1ZGRPWVd2MFVXaitHSVk0aFpIdUlzOFZvQUhTQnFRMWpOYlFvZ0hKd2NqZDdtZkFzRzlyVVNCeDZ6U0swN2xzRHhFWUNHbGJjNVBjTlV5NjdjOWV5YktXczVieWZDZ1QvN0RtVXNuOExXalk3Yk1KMjREQ0RRbFZEK0IvMGVSQ1lubHd0TjBlTXFFR1dYcXpNbjZqU2d1UUp5YVlHY2VPSGNiQzRoS00xbjVUcVgxOS91bVpvRlNDSk0yd2N2UUVXQ1ZsWTZxbnYyRlpOZSs5VlpyaTJMSFRaeGZuRC85VkFHZXh0OVU2N3krUHN3ZnZJODc3dkFYZ042MkxwbE9RWkVlUWFwRmtrUUJpSlJqcEVhNnVEZkhPalF6YjNXZlJXMXBCUnlVUW5VRGxCa29QN2RNeElTZEMxK1JJSWREQzBDcUZZZHQwcVVTQmpWV2pLWm9rNGIyS3Y4bE1NWnJnenlvaTVUWmZLMWViS1BNSjN3VnRoVGVkbUlZUG4zeWVJVTdVM0Nma3hkSmRLWWZDU0lwOGdRSTVydW8rR2Y4enFQU21sVi9LWWF6c3ZDaGc3U1d1aW5DeEhLc0l2VjRZeGhXL25SaGpUVGg3N2pvMjEyNEN4UGFhaWwzWHhUQVFJdVFrdGkzSENHNnRYb2NlRDRJNm0vVXdDb0JLN2VoNWIrR1F2UEQ4aC84Q1NmTFAwRElTZlZEZTVqM2xjZlp3QVRTQWN3QitIc0RQQVBUckxIeE9pWG9WWWphMHpxMmt0d0cyTjRmNDJwZlA0bGMrYi9ERjF6K0FTMXZmam5YK0pMYndGSWJtTUV4dWtPZ05qSFdHWWI0QTBSMndOa2hsQktJZGFMV0RQTm14cXhKbDdMbzU3T0pkY3Q3RWh4NWVQRjFFUXh1N2RackVkalNJYXd2eUF1VDJ2Ky9FWVZuUFFjcEtTMVdycnZvenR0MW93aGZ4aERVblZQVmNoVWlpRFVXekxFT3YxME9XZE93R1B1WkNUS1RZVU9IQTF1MTBNZGViRDdvZVZORGxvV0NNUVpKa2VPYnA1LzVwcjdQMGk5aURCdlQ3dlk0ekVUeFR1cXo3QVA0M0FHOEMrQTRJL2dCVHVpbWlEeG1qVDBKa1VUR1JOc0NOZGNiTmpSRytmbmFNTXllUDRMbEhQNEpUeTljaDVqSTZ3MDJNbEFHelFKa2hrcHpBa2dOSkR3WWRhRXJBTXJJck5tRHNLVStXMG9VQmxBb1lLd2NLaSszY2FwVVpCTzMwcU8xd09VQVRxaFZpQkdGbmNWVWx0ZGJDTXlYaW9Wb1J0YWtBWk5BbUE2eVVRcFlsU05NVUE1MEh6ZHZ1OVRndEFyaE9pVjV2RHV0Y0xvYWxvbk9Da0tRZG5Ibmd3V3RQUFBITW43dCtlV050SDRmdE53NXdaZ1NRQVhBVHdQOEM0TmNoK0RpRWYxQ3hlc3BBSDlaaVRzQklGelR1QURrMkJ3YXZ2enZDbGV1TUp4NDhnNmRPUDRxajNUR1M5SGNBcklITjJBcEtzQUViQVJLMi9XYmtQSTdZL2ppUWd1Z2M0cFJLblNabEtZYk9WaExMeU5pS0FiSlgyTFFlUUxuV2VSRmp0MWNyVkcvaVNRckFGQ3kyTFlxRjFBUk5JY0RlQnBaeTIzVlpHelV6ZURGZzZ1NmFoaFlBdTI0SnF6MmRHMlBKRnpIVktxZWJPdTEyZTY1RlNUczJ3R2t1TUdOK2NWRSs5RTNmOGpQWEwyKzhkamRBODc0QVRuaHhwbmdmQStBU2dIOUVSUDlTQk45S1VMK0hSRDFMaEVQR0RFNkE4aFBncktzbHhlb084TnV2OTNIMllvNUh6aHpGa3c5OUNDZVdka0MwQ2RHcllMTUZwaEdJTmtDMEFjRXlqQmFiQ3lUR3lxRWhCUW5ENUxuTGtjVlJ5QWFRdkt4OCsxU2hXTmRuT3dTTTIyOXF4T3JJbFp0dVBBMGJsTkVOU28yeUFnVEJIbExIc0huVlRLQ05PVU9RaTVRZENHRm5nclJzd1pQYW90eEthMmxZODZremQ2NnV4TVIyaWJIcmhDYmorNTRFV256R1IxQXF0V0dhaUdNbjdYdnFkT2J6WjUvNTRNc1pMLzBDY05QY3JmdnRuZzJ5M1VtYkFxRHdjNXdEOERTQTN3WGc0d1I1U0NNL2FZQVRuS291b01Ha3dXU3drSGJ3MEluRGVPS1JKUncvTWtSSFhVZkNWOERxaHUzRWxoT3VMY2Vxd0ZDU3VGRUQyM1pqWjJqc3ZMMXdXb3dGc0xJeVVRSzc3SmFWSFhRakpMWmE0V283eHVrL2UxcWFLYkU2Q3VLU2ZySDVnWUVQWTdoc1l5SGJSUUJRSVZqb2I3eGdCSzJrd01FVklFbTRCN1ZHV1ZzWnFkTGJXRGxqS3RZUE1sT3dlYTM2c3p2YlEvenl2L2dDenI1NUZwdjlNWEthZ3pHd1liRGtNQ0NNQllBMjBQa1ExNitjdzF0dmZxMzBmaXFEU2xJODkrd0xYM3ZzMFE5Lys4YjYxcTI3NVczZVZ4NW5qL21Qd0xaaCtPNkQvN2VBUHNsSXYwOFJIdFA1K0xUQW5OUnNFc09DMWI3QnhybDF2SDVsQ3lkVzV2RFFtUldjT2JxSWxZWGptRk5iZ0JsWWpRTmxDaUZ4VnA1bXpXSFlLbW9LYVlpd3V4bHRDR1ZJU29iTGtDVVlsQjB2QnBOdGZ6Rmk2NGRBWXgrc0JNYytvVGxmYlBYVXFqbE52UnVnaUFYcjR3a050bzBtNTA2QjlKUXZ0OXAvcXpvQmRtOGt6elUyTjNlZ3Rha0liRWl3SDZsb1RBVWp0OXE2cmpocUQ0ZFRweDg2ZC96azR6OHlDVFNSSExoekFBSnNDOC9ic0Uya254ZkI3MldrM3czZ2hKanhLVzNNU1NHZEdETFFveFRuTG0vaTRwVjFMUGNZRDUyWXgyTVBuY0daSTJ2SU9nTVErb0Qwb2ZUSUJqeGl3RFJDN2hvcVNjUzFvbVVBREhKajE3U3o1RFl2NHJHTnZISkFLVmVBOWZKVVJqdnhpWENkZVMzSDhQdDIvUGVMdmpUdkFkakpWcFUvNTB1alVzbE1hR0t1MHBUM2RVeVl4NHFUbHZLZWh3b3hkUWFRV09sZUVXeHViR0hZMzhFNDk3ZWhPSFVoRzZaWlVYa0RiVFJFTk1iamtXM0RTVlBrQWl3dEh4MDk5L3h6ZjJtOG83NXlOejNOK3pwVXU0MFFEckNLTzQ4QytDU0E3d0RrTVNGWkZveFBDOHdTRVJPN09SUUNJY3RTbkRqQ2VQRDBJazZmN09MSThoZzl0WWxVdHBIUkdLa0NoankyUFhFcUF5VWRrTXFnUmRubVRXYWt4clh1ZS8xb3NZOEZKNEN4WVowUnE1L0dpVzMxS1JSOVNFR1p0RGo4QlZ6c3pTUzJUYU1pWE1sMWJCdVJCNDRwOWRPSytrdm9mUUxoK1lEMXE2OXZETlUvSzRWQzBXNkpid2FoREVvUmREN0FiLzM2YitOTFgvdzZycThicTJGUWhIdDJXNEVSQTUzbjBFWWpIL1Z4OXUxWGNldm1WUmdSTEM0ZkhULzUxQXYvN2FNUFAvdGYzcnl4T3J6Ym9IbmZlNXhwRjNRS2lBWUFYZ0h3Qm9EL0QwQWZKNkh2WnVvOFkyQldCUHEwTnZrU0dTSWl3bkJvY1A2eTROTFZMY3ozRkU2ZW5NTmpEeS9qMUxIaldKNWpNQmxrNW9wTjhBMkJjdGpCT2RGUU1DQk4wR29PRUpzb0N4aWlrcUlQbUJXRHZhNHpCTWJZNzNsV2pLVWF0MW1GSHdvRTQ2a1FhSjgwZG15TUY0ejM5SG5ONFhoaW9GajZKRFB2YXhXM010RDJySTRBRVd4c3JPUHMyYXNZakhReFkrUHJXTlc1SDBBUlk2ZzFoa05iL094MTUvTkhIbmpzNTA4ZGYvU3piYUNKNU1EOTQ0VVl3QkVBM3dUZ3U0am9ReUJ6eWtoK1RHQU9nNUFJTWlkTWFLQllJMGtJUnc0dDRLRUhUK0NCQjQ3aVZQY21tQVZaQ2lUSkNBbm5ZSXhBeU1HS01Fcm55L1VjN0x3T1pVNnNnMkZUcDNJUWpsUUtpSElFUWJBY0YrUldnYURvUnJBZDJRb1M1Q0YxanlNUWFHUGN3cVZxdmlNVDZqQ2g4aWRxakZubHY0MnlldFNjUTJPRWZLenh4ZDk4RTEvOHdodlkyUjVncUszbjFFYVhTNmZjYnpUYWVweGJONi9pbmJkZmhkRTVIbnZraWE4Lzg5ekh2KzF1a3dFUk9Qc1A0UmhXcS9ZcEc4TGhtNG53cUVBdjVhQlRnQ3dDWWlldWxiSm5MUU85YmcrSDVnU2RGRGg1YkJGUFBYRVVSNVlKSFRVQ3lSQ0VISlM2RU1uUHYzQUNVcWtiSWdNZ0NZellVV0NsbklZWmlqMkRJTmFXTmZPei93akdpU24xcW9FdTU2NkhhaTRVSzJvOTNBQ09GUkJzQ3N1M2hXZWhHTDBGVGdvbUEwTTdHSXkyOE5hYmwvSHJuMzhOVzVzNVJpT0RzUlUxZ0E0MnN2bnRiZU04aCtRanZIdmhMSzVmdTRqVHA4Njg4ZFF6TC8xQVBsQ3YzVXZRUk9Ec0QwQUVvQVBnQklDbmlQQXRSUFF4WTh3cHNKd3lrcytMbUVWTEN0bDVFWUdDVWdRbWc4V0ZCSTgrZEJRUG5sbkcvQndqVlFaTDZSRHpDeDFMQ1BoMUZFV2ZKTU1rY3pBZzV4RXNoZTFIR2dRR1lKdEhHRi9ZOUNNR1h1Q0RrL2FPQUtGZ3BXTEx2OVZ6bkJZUFV3ZFMwK01rRUJqMCs2dDQ3ZFYzOE51Ly9TWTJOOGNZRFFuYXVONXBFYXVoSm02bG9WaDlObTBNQmp1YmVQVzFyMkZoWWVueXM4OCsrNzBzUzEvRmhGYUdDSnozRG9nOG1YQWF3RGNEK0hZaVBBK1NGVUF2QWZwRW5nOVRVWE91S3A1REtRS0pScEl3c2xRaFVZU1ZwUlFQUHJpQzA2Y09ZYjZuME9rdzVyc0thY3BnQXNhczNBUWtPZGtqSDFJUkJCb0dHb0J5OVprRUFsVU14UW5abktrQm5HSzU3cDBGamhoZ2MzMExYL25TYTNqOXRYZlI3NC9RSCtiUVVEQ0dpeTV4dXgvVXdJallMUVlpTUZyajhxV3oyTjdldnZiMFU4LzlRQ2M5L0lWN0RaZ0luSU1Ia0FKd3lJVnlud0R3TVJCT01ja2hMV2JKeVBDME1ZYTltQVQ1VVFBd3dBYXBVcGpycGxoYTdPRFl5Z0tPSDUzSDhtSUhpd3NaRmhaVGREb0psTEkvbzlqTEt0bk9naHdhQ1dkSVVxczViVXc1ZFdxQm8wb0ZHa0VOT0Q0Nk8zamdhRzF3N2VvdC9QWnZ2b0tMNTY1aE5OYkljOEZRR3dneHh0cHZmak5PSTl6bU9PUHhHQ0RDMnRwTmJLemZ2UFRVWXgvK2ZvQytnZ09TZG9yQXVUOEJSQUF5QUdjQWZBVEFkd0o0bG9oNlJHWXgxNk1sTUU0YmJkZ2xCYTZmRFdCb0tFVklGSUZoa0NZSkZoZDdPSEZpQ1dmT0hNV0o0MHRZNktYSVVrQ002NDFUQkpXNmVSU1Z1aTRCZG1LQ1pFZTVPUW5UKzNJbk9pZ1E5S2d1bktJaTFKTkMzMHdxK3pTTFdLeWdrRVdNM2M0Z2hPMnRIWng5NXhLKzh1VzNzYnE2aVh5VVE5c3hKR2hqT3hpMGJ6V0NZRHdlRmFBY2ozTU1oMzNrWnZqYXlxRUh2aE9HcjZKV1NiMlhvSW5BdWZNZ1lnRExBSjREOENrSHBDTkVwSWhsVVdDV3RNbVhqT1NMWklzdXBUQ2k3K2NDUWJFZ1ZZeWx4UjZPSDE5R055V1lmSXcwSVJ3NlBJZVZFMHRZWEpoRHA5dEZKMHVSSm1raE5VVXV4MnBqdjVoOUxhZ2tCUHpEZkdob1lLckRKMUtkNEdGeVMyK0pZWXhnTk1weDQrWW12dlk3YitIYzI1ZXdNOVRJdFVEbkx2RjNyVGtpdm0vT0lCK1AzTlNGUm00TWpCNUxrcXAvZEdMbGdUKytlbk56N1g0Snp5Snc3ZzJoMEFYd0FJQVhBSHdZd0xNQWpnUGVSWmpEeHVSelJ2UmhnWjVqbFpDZitGU2N1R1pPRGNVQ0prR2lGQkpsU1ljc0kzUzZLWmFYRjNEazZCS09IajJFSTBlWDBPMWtZRVd1WTF1UXBnbVN4SXBhS0ZYTzBSVGRaTkxzUnJBQ0pyNWR4MUhld1QyakRXRTBOQmpuQmhzYjJ6aC83aHJlZU9NQzFqZTJvTWM1UnJrSjFvSlkwR2pYeVNCR29NM1kxbkNNY1hVcjBiMWU3OCtNZDlSZnc0UWROdmNhTkJFNDk1YVZPd3Jib2ZBaEFNOEFPQWJnTUlBNVFEcUc5QWt4T2hIb0UzYmtnRWo1SmsvWHpzSitWU0pyS0ZaSUVnV1ZNTkkwUlpJb1pKbXRvU2dGZEhzZEhEcThnSldWWlJ3NnRJZzBUV3doVmJUVjJtWkNvaktiUjduZU9nQnVPNXU5NmJVMjBGb1h1Y3hvTk1iVmExdTRjbmtOYTJ0YjJOem9ZM3Q3Z1BFNFIyNDBqQzZqUCt0aExFU04yL1ZweE1EbzNEZW95dHg4OTIxbGV0OC9HdVp2dERGbjl3TmdJbkR1ajFBT0FGTFkxU2FIQVR3STRIbEhNSndHNURBUjkwUWsxV1owRWtCSFlGYWNSQy9aeGJUc05zSjVUVGhBc1EzRFdObC9TOXhXYkdaR2tpWklsQU9ORzZ3ajBraFVnalROa0NZcGVuTmRaRm5xdkl1QjBRYjVlSXp0blFIR285eTI4b2hnTkI1anV6L0NPRGRGOTRFV1dEa29JMFdvWnh4RFp2dlkyTlZwN1BjTUREcFpkbTErZnVIL3NiMHgrdThoZEU4TG14RTQ3ejBBK1p4b3p1VkZSMXhvOXh5QUR3STRCYUJIUkVwZ3VnWjZSU0FkSTNwRmtiSTZNcjQvVFl3RmpjdGRPSkJlTDhUS2krVkx0bEhUMDl2TWRpZFBPVnRUcm5NWDQrb3N4WC9ibmF2RkxKQTR1U252WFlnY2NlQ2FOWU1DSnpOREpidzIxMXY4UjhPK2Z0bG9lUU8yM2VtK0IwMEV6djBOSWs5eHp3RllBZkN3QysyZUFmQ2tDL1VTSWxJMjFNbFhRTkloS0dpTVR4QWtzWnNRaXJYWnR2clBaUXUvSThNTHVybFltc1VNMGVMQ1FTcEZPZnpLUnI4azJEMlBwNUVMelFBUExEZGFZUHZaN0wrbnFaTGVYSFpOY2ZxTCtVRDlmTDgvZU5jQnhyd1hBQk9CODk0RGtkdUtpM2tIbXVNT1VFZGRmblRLL1RsSFJEMFJTUUFvTGZsRGdLVE1CSVA4Q0NDSkZUbVVEaEJ1TmtQWmJ1UFpNeW5YNWxiSEM2UlJEL0k5Yi9aZnRXMUlGV05GN2hNMVRqckpZR0YrL2d2NVVQNmI0V0Q4NWRFd1g0VlZON25uWFFBUk9OOVlRQXJKQnF1N2E3MVR6ekY0eTdCdFFTZmRuOGZjMzVkRnBBUEtUM3VOQWkxNldjZ3NrOWo0VFFST2tvcGdqQ0hBZE1Ld3JaemwwUkJkVXRSTVBMUmFnZ2FzWUJhV2x2S1ZJNGZmMXByKzl2cU43WDlDaEN2YjIvMGQ3Q0tBZnIrREpnTG4vUW1rMEVNNWZkNENXRDNZN29ZampwRG9BQ0FpNmdwa0NZSmxBSXZPcXlrQXhJcm0wNHdmTldJeW5adWVNU1pGZFRaQlJFeE94QnBDNzBMNExSQmVUOVAwSzcxZTUxeW4yOW00ZnZWbUgzVzVtL2NvWUNKd3ZyRkFWUGRRb1JCMCtMMWdqVUlCUHU5cWxBUGVIQ29CSFVZT0ZHTllFY0NCKzNPRUdWWnJ2SmZBRW9FVExkb0J1UE5vMGFKRjRFU0xGb0VUTFZvRVRyUm9FVGpSb2tYZ1JJc1dMUUluV3JRSW5HalJJbkNpUll2QWlSWXRBaWRhdEdnUk9OR2lSZUJFaXhhQkV5MWFCRTYwYUJFNDBhSkZpOENKRmkwQ0oxcTBDSnhvMFNKd29rV0x3SWtXTFZvRVRyUm9kOGIrL3dNQWpzRnVmUzVtN3JjQUFBQUFTVVZPUks1Q1lJST0nLFxyXG4gICAgICAgIF1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgY3VycmVudCA9IDBcclxuICAgICAgICBcclxuICAgICAgICAkKCcuaW4tdGRfX2xlZnRfX2ltZyBpbWcnKS5hdHRyKCdzcmMnLCBjb2xvcnNbY3VycmVudF0pO1xyXG5cclxuICAgICAgICAkKCcuaW4tdGRfX2xlZnRfX2lubmVyIC5idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBpZihjdXJyZW50IDw9IGNvbG9ycy5sZW5ndGggLSAyKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50KytcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCcuaW4tdGRfX2xlZnRfX2ltZyBpbWcnKS5hdHRyKCdzcmMnLCBjb2xvcnNbY3VycmVudF0pO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1pbjogMSxcclxuICAgICAgICAgICAgbWF4OiA5OTk5XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHBsdXMoY29udGFpbmVyLCBmaWVsZCkge1xyXG4gICAgICAgICAgICB2YXIgdGhpc1ZhbHVlID0gcGFyc2VJbnQoJChmaWVsZCkudmFsKCkpXHJcblxyXG4gICAgICAgICAgICBpZih0aGlzVmFsdWUgPCBwYXJhbXMubWF4KSB7XHJcbiAgICAgICAgICAgICAgICAkKGZpZWxkKS52YWwodGhpc1ZhbHVlICsgMSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gbWludXMoY29udGFpbmVyLCBmaWVsZCkge1xyXG4gICAgICAgICAgICB2YXIgdGhpc1ZhbHVlID0gcGFyc2VJbnQoJChmaWVsZCkudmFsKCkpXHJcblxyXG4gICAgICAgICAgICBpZih0aGlzVmFsdWUgPiBwYXJhbXMubWluKSB7XHJcbiAgICAgICAgICAgICAgICAkKGZpZWxkKS52YWwodGhpc1ZhbHVlIC0gMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLmNvdW50ZXIgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGhpc0NvbnRhaW5lciA9ICQodGhpcykucGFyZW50KCcuY291bnRlcicpXHJcbiAgICAgICAgICAgIHZhciB0aGlzRmllbGQgPSAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJylcclxuXHJcbiAgICAgICAgICAgIGlmKCQodGhpcykuZGF0YSgnYWN0aW9uJykgPT0gJ21pbnVzJykgbWludXModGhpc0NvbnRhaW5lciwgdGhpc0ZpZWxkKVxyXG4gICAgICAgICAgICBlbHNlIGlmKCQodGhpcykuZGF0YSgnYWN0aW9uJykgPT0gJ3BsdXMnKSBwbHVzKHRoaXNDb250YWluZXIsIHRoaXNGaWVsZClcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF9jbGFzc2VzID0ge1xyXG4gICAgICAgICAgICBvcGVuOiBcImlzLS1vcGVuXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5Ecm9wZG93bihjb250YWluZXIpIHtcclxuICAgICAgICAgICAgJChjb250YWluZXIpLmFkZENsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZURyb3Bkb3duKCkge1xyXG4gICAgICAgICAgICAkKCcuZHJvcGRvd24nKS5yZW1vdmVDbGFzcyhfY2xhc3Nlcy5vcGVuKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlRHJvcGRvd24oY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGlmKCQoY29udGFpbmVyKS5oYXNDbGFzcyhfY2xhc3Nlcy5vcGVuKSkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VEcm9wZG93bigpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIG9wZW5Ecm9wZG93bihjb250YWluZXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJCgnLmRyb3Bkb3duX190aXRsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgdGhpc0NvbnRhaW5lciA9ICQodGhpcykucGFyZW50KCcuZHJvcGRvd24nKVxyXG4gICAgICAgICAgICB0b2dnbGVEcm9wZG93bih0aGlzQ29udGFpbmVyKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldHMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZHJvcGRvd24nKVxyXG4gICAgICAgICAgICBpZih0YXJnZXRzLmxlbmd0aCA8PSAwKSBjbG9zZURyb3Bkb3duKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0UGFkZGluZ3MoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnLmlzLS1jLXBsJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJy5pcy0tYy1wcicsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQxMDBQZXI6ICcuaXMtLWgxMDAnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBwYWRkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2YmFyX19pbm5lcicpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKSArICQoJy5mb290ZXInKS5pbm5lckhlaWdodCgpXHJcblxyXG4gICAgICAgICAgICAkKGNsYXNzZXMucGFkZGluZ0xlZnQpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZy5sZWZ0ICsgMzBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJChjbGFzc2VzLnBhZGRpbmdSaWdodCkuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogcGFkZGluZy5sZWZ0ICsgMzBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJChjbGFzc2VzLmhlaWdodDEwMFBlcikuY3NzKHtcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJ2NhbGMoMTAwdmggLSAnICsgaGVpZ2h0ICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIGhlaWdodCArICdweCknXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0UGFkZGluZ3MoKVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRQYWRkaW5ncygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmFuY2hvcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgIHZhciBhaWQgPSBfdGhpcy5hdHRyKFwiaHJlZlwiKTtcclxuICAgICAgICAgICAgaWYoIWFpZCkge1xyXG4gICAgICAgICAgICAgICAgYWlkID0gX3RoaXMuZGF0YSgndGFyZ2V0JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoYWlkKS5vZmZzZXQoKS50b3AgLSAxMDB9LCdzbG93Jyk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLml0ZW0tY2Fyb3VzZWxfX2l0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcuaXRlbS1jYXJvdXNlbF9fY29udHJvbHMgYnV0dG9uLmlzLS1wcmV2JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnLml0ZW0tY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tbmV4dCcsXHJcbiAgICAgICAgICAgIHN3aXBlOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5wcm9kdWN0aW9uLWNhcm91c2VsX19yaWdodF9fbGlzdCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgcHJldkFycm93OiAnLnByb2R1Y3Rpb24tY2Fyb3VzZWxfX2xlZnRfX2Fycm93cyBidXR0b24uaXMtLXByZXYnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcucHJvZHVjdGlvbi1jYXJvdXNlbF9fbGVmdF9fYXJyb3dzIGJ1dHRvbi5pcy0tbmV4dCcsXHJcbiAgICAgICAgICAgIHN3aXBlOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5wcm9kdWN0aW9uLWNhcm91c2VsX19yaWdodF9fbGlzdCcpLm9uKCdhZnRlckNoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRDYXJvdXNlbERhdGFzKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRDYXJvdXNlbERhdGFzKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSAkKCcucHJvZHVjdGlvbi1jYXJvdXNlbF9fcmlnaHRfX2xpc3RfX2l0ZW0uc2xpY2stYWN0aXZlJyksXHJcbiAgICAgICAgICAgIF90aGlzVGl0bGUgPSAkKF90aGlzKS5kYXRhKCd0aXRsZScpLFxyXG4gICAgICAgICAgICBfdGhpc0Rlc2MgPSAkKF90aGlzKS5kYXRhKCdkZXNjJyksXHJcbiAgICAgICAgICAgIF90aGlzTGluayA9ICQoX3RoaXMpLmRhdGEoJ2xpbmsnKVxyXG5cclxuICAgICAgICAgICAgJCgnLnByb2R1Y3Rpb24tY2Fyb3VzZWxfX2xlZnRfX2hlYWRpbmcnKS5odG1sKF90aGlzVGl0bGUpXHJcbiAgICAgICAgICAgICQoJy5wcm9kdWN0aW9uLWNhcm91c2VsX19sZWZ0X19kZXNjJykuaHRtbChfdGhpc0Rlc2MpXHJcbiAgICAgICAgICAgICQoJy5wcm9kdWN0aW9uLWNhcm91c2VsX19sZWZ0X19idG4gLmJ0bicpLmF0dHIoJ2hyZWYnLCBfdGhpc0xpbmspXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdmb3JtJykucGFyc2xleSgpXHJcblxyXG4gICAgICAgIHZhciBwaG9uZUlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lucHV0LXBob25lJyk7XHJcblxyXG4gICAgICAgIGlmKHBob25lSW5wdXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcGhvbmVJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG5ldyBJTWFzayhcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZUlucHV0c1tpXSwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6ICcrezd9KDkwMCkwMDAtMDAtMDAnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJCgnLmlzLS1maWxlLWZvcm0gaW5wdXRbdHlwZT1cImZpbGVcIl0nKSlcclxuXHJcbiAgICAgICAgJCgnLmlzLS1maWxlLWZvcm0gaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBmaWxlbmFtZSA9ICQodGhpcykudmFsKCkucmVwbGFjZSgvQzpcXFxcZmFrZXBhdGhcXFxcL2ksICcnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuaXMtLWxhYmVsJykuaHRtbChmaWxlbmFtZSlcclxuICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCJmdW5jdGlvbiBvcGVuTW9kYWwobW9kYWxJRCkge1xyXG4gICAgJChtb2RhbElEKS5tb2RhbCh7XHJcbiAgICAgICAgZmFkZUR1cmF0aW9uOiAxMDAsXHJcbiAgICAgICAgc2hvd0Nsb3NlOiBmYWxzZSxcclxuICAgIH0pXHJcbn1cclxuXHJcbihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnYS5tb2RhbC1vcGVuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgdmFyIHRoaXNNb2RhbElkID0gJCh0aGlzKS5hdHRyKCdocmVmJylcclxuICAgICAgICAgICAgb3Blbk1vZGFsKHRoaXNNb2RhbElkKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gb3Blbk1vZGFsKCcjbW9kYWxfZm9ybScpXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBpc01vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhcl9fYXNpZGUgLmlzLS1tbCcpO1xyXG4gICAgICAgIHZhciBpc01vdmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5TZWFyY2hQYW5lbCgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcicpLmFkZENsYXNzKCdpcy0tc2VhcmNoJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlU2VhcmNoUGFuZWwoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXInKS5yZW1vdmVDbGFzcygnaXMtLXNlYXJjaCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuTW9iaWxlU2VhcmNoUGFuZWwoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2FzaWRlX19idG5zX19zZWFyY2gnKS5hZGRDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VNb2JpbGVTZWFyY2hQYW5lbCgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fYXNpZGVfX2J0bnNfX3NlYXJjaCcpLnJlbW92ZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVTaG93SXRlbXNNZW51KCkge1xyXG4gICAgICAgICAgICBpc01vdmVkID0gIWlzTW92ZWQ7XHJcblxyXG4gICAgICAgICAgICBmb3IgKCB2YXIgaT0gaXRlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKSB7XHJcbiAgICAgICAgICAgICAgdmFyIHRvZ2dsZUl0ZW1Nb3ZlID0gZ2V0VG9nZ2xlSXRlbU1vdmUoIGkgKTtcclxuICAgICAgICAgICAgICB2YXIgZGVsYXkgPSBpc01vdmVkID8gKCAwICsgaSkgOiBpO1xyXG4gICAgICAgICAgICAgIGRlbGF5ICo9IDE1MDtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCB0b2dnbGVJdGVtTW92ZSwgZGVsYXkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0VG9nZ2xlSXRlbU1vdmUoIGkgKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLS1tb3ZlZCcpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3Blbk1vYmlsZU1lbnUoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX21vYmlsZSBidXR0b24nKS5hZGRDbGFzcygnaXMtYWN0aXZlJylcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fYXNpZGUnKS5hZGRDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzLS1tZW51LW9wZW4nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VNb2JpbGVNZW51KCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19tb2JpbGUgYnV0dG9uJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2FzaWRlJykucmVtb3ZlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpcy0tbWVudS1vcGVuJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZU5hdmJhcigpIHtcclxuICAgICAgICAgICAgaWYoJCgnLm5hdmJhcl9fbW9iaWxlIGJ1dHRvbicpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VNb2JpbGVNZW51KClcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3Blbk1vYmlsZU1lbnUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvZ2dsZVNob3dJdGVtc01lbnUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0TmF2YmFyRGVmYXVsdE1vZGUoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldE5hdmJhckRlZmF1bHRNb2RlKGhlaWdodCkge1xyXG4gICAgICAgICAgICBpZihoZWlnaHQgPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLmFkZENsYXNzKCdpcy0tc2Nyb2xsJylcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0tc2Nyb2xsJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnI29wZW5TZWFyY2gnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgb3BlblNlYXJjaFBhbmVsKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcjb3Blbk1vYmlsZVNlYXJjaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBvcGVuTW9iaWxlU2VhcmNoUGFuZWwoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRzID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLm5hdmJhcicpXHJcbiAgICAgICAgICAgIGlmKHRhcmdldHMubGVuZ3RoIDw9IDApIGNsb3NlU2VhcmNoUGFuZWwoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldHMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubmF2YmFyX19hc2lkZV9fYnRucycpXHJcbiAgICAgICAgICAgIGlmKHRhcmdldHMubGVuZ3RoIDw9IDApIGNsb3NlTW9iaWxlU2VhcmNoUGFuZWwoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5uYXZiYXJfX21vYmlsZSBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdG9nZ2xlTmF2YmFyKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldE5hdmJhckRlZmF1bHRNb2RlKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VUYWJzKCkge1xyXG4gICAgICAgICAgICAkKCcudGFiLWl0ZW0nKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQoJy50YWJzLW1lbnUgdWwgbGknKS5yZW1vdmVDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuVGFiKGlkLCBuYW1lKSB7XHJcblxyXG4gICAgICAgICAgICBjbG9zZVRhYnMoKVxyXG5cclxuICAgICAgICAgICAgJCgnLnRhYnMtY29udGFpbmVyW2RhdGEtdGFibmFtZT1cIicgKyBuYW1lICsgJ1wiXSAudGFiLWl0ZW1bZGF0YS10YWJpZD1cIicgKyBpZCArICdcIl0nKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQoJy50YWJzLW1lbnUgdWxbZGF0YS10YWJuYW1lPVwiJyArIG5hbWUgKyAnXCJdIGxpW2RhdGEtdGFiaWQ9XCInICsgaWQgKyAnXCJdJykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy50YWJzLW1lbnUgdWwgbGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIG5hbWUgPSAkKHRoaXMpLnBhcmVudCgndWwnKS5kYXRhKCd0YWJuYW1lJylcclxuICAgICAgICAgICAgdmFyIHRoaXNJZCA9ICQodGhpcykuZGF0YSgndGFiaWQnKVxyXG5cclxuICAgICAgICAgICAgb3BlblRhYih0aGlzSWQsIG5hbWUpXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyJdfQ==

setColor()
showColorMessage()

function changeColor() {

    var currentColor = localStorage.getItem('color-scheme');

    if(currentColor == 'white') setColor('dark')
    else if(currentColor == 'dark') setColor('white')

}

function setColor(colorMode) {

    var elements = document.getElementsByClassName('color-scheme');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }

    var theme = colorMode || localStorage.getItem('color-scheme');

    if(!theme || (theme != 'white' && theme != 'dark')) theme = 'dark';

    localStorage.setItem('color-scheme', theme);

    var link = document.createElement('link')
    link.rel = 'stylesheet';
    link.id = theme;
    link.className = 'color-scheme';

    var classList = document.body.classList;
    while (classList.length > 0) {
    classList.remove(classList.item(0));
    }

    if(theme == 'white') {
        link.href = styles.white;

        document.body.classList.add('is--white')
    }
    else if (theme == 'dark') {
        link.href = styles.dark;
        document.body.classList.add('is--dark')
    }

    document.head.append(link);
}

function showColorMessage() {
    var showIt = localStorage.getItem('color-message')

    if(!showIt) {
        var msg = document.getElementById('color-message')
        msg.style.display = 'block';
        localStorage.setItem('color-message', true)
    }
}

function closeColorMessage() {
    document.getElementById('color-message').style.display = 'none';
}