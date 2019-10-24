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
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAGmCAYAAAA0z7tHAABnuElEQVR42uy9a5Rk11Um+O197o2IzHpIVaWSJVnIsiS3DNiWEZ6eNY1fGLlpgzE0DKzVmKFhmBkYcHvATY/BmLEMGDCsxWJ199ANa2jaPMyAGHoAg9vDYMkv2oNt2bJlbNmWVLb1qndVVj4i4t5z9vw459w4cfPcR0RmllLy2WtFZVZkxI0b957v7L2//QKS7CsREVpfX/+dixcvyokTJ+S3f/u3zdvf/vYfTFdmfwmnS7A/hYiglAIRpYuRgJNkAc0DY4y9SZxuUwJOkt4ax2udwWCQLkgCTpIuMcZUD611uiD7ULJ0CfbhbuZMMyICMyfwJI2TpK/GERGICJgZRVGki5KAk2QRc00plS5GAk6SPuK1jYiki5GAk2RRP4eZQUTJx0nASbKIEFHSOgk4SRYFjTfbksZJwEmyAHCIqMoeSJKAk6QnaFKeWgJOkiXEx3ESJZ2Ak6TPTWG+zxgjPhCafJwEnCTdZppord8lIpqIkGUpKyoBJ0lfE028r5NSbhJwkvSU0Wg0x6olHycBJ0l/k60CTipkS8BJ0kPG43HFqCVKOgEnyWJ+TgWeJAk4SfreGGaISNI4CThJFiEHQgAlScBJsoDG8XR0kgScJAuIrwJNkoCTZAFJiZ4JOEkWFF/AljROAk6SJcCTanIScJIsSQ6k7OgEnCQLiNY65aol4CTpKz7lJtQ+SRJwknTIaDSqwJK63CTgJFlC0rSCBJwkC0jYyXM6naYLkoCTpI+P4/sNJEnASbKgpMFSCThJEjmQgJPk8vg4QEq5ScBJstiNSWXTCThJFicHfJ6a1jql3CTgJOnr43htk1rgJuAkWUDjeP8mNexIwEmyoMZh5tQCNwEnyaKSJrIl4CRZUNK49gScJEtqm9Q7OgEnyQ40T5IEnCQLAkYpleI4CThJ+kjYdD2Zagk4SfreFOYLzPzFNMYwASfJAnLo0KFzzPwBEUGWZSkAmoCTpK+UZQkRSWZaAk6SRcmBPM8rgiBJAk6SBcDjM6STJOAk6SE+3SZpmwScJEuIUiqBJwEnSe8b4zKjUyFbAk6SBcQYU3W5SZKAkyRJAk6SvTXVUuZAAk6SBcUDhojmplAnScBJ0iJKqaphRypkS8BJsgA54DVOIggScJIsqHWYuep6kyQBJ0mH+EI23+0mSQJOkp6SQJOAkyRJAk6SJAk4SfY9QZAGSyXgJFnk5jCjLMt0IRJwkiwinllLBEECTpIFgZPneQqAJuAk6Su+rICZk8bZh5JmSOxjUiCVTieNk2QJM80Yk4bnJuAkWUT8tII0WCoBJ8mCGsdrnWSuJeAkWUDj+MG5CTgJOEkWvUHMVUfPJAk4SXqCxleBJknASbKAuWaMSaXTCThJFgVO0jgJOEmWJAhS5kACTpIF/BufOZDaQyXgJOkpInKfMUZSl5sEnCT9TTQpiuJdADSA1M0zASdJXxkOh+I0T2oPlYCTZFFygIhS6XQCTpIF/RwYYzCdTtPFSMBJ0vvmuOFSiVVLwEmyoKmWGLUEnCQLyHg8rkoLUspNAk6SJfycJAk4SZYATorjJOAkSX5OAk6Svdc2zIzDhw+nFOkEnCQLahw6c+bMG++88850rxJwknRJGLvRWqf7lICTZBH/hogSs5aAk2QZHydJAk6SnhJmRKdctQScJEkScJJcHnMtSQJOkiVAkzIHEnCSLChpZHsCTpIlRSnF6V4l4CRZUOMMBoMbv/qrv/ol6Wok4CTpkNFoVAU/p9MpTSaTlK+WgJNkUUlj2xNwkvSUcLhUkgScJD0kzBwQkTTSMAEnSV8xxkBE0sSCBJwky5hqKQCagJNkCUnTpxNwkiTgJOAk2XvAeDMtdfNMwEmygCilEquWgJNkGa1jjEkB0AScJH1FRFCWZarJScBJ0hMwNBgMbjPGMDMnOjoBJ8kC4Hm1vz+JVUvASbKA1iEiFEWRMgcScJL0FZ/YaYyBMSb1j07ASdLrxrhyaZ+rlvycBJwkS2qfJAk4Sfr5ORARKKUkmWoJOEkW0DRaa0yn0xMi8ol0RRJwkvQQz6ZlWWY+/OEPX0hXJAEnyQKS0m0ScJIkScBJkiQBJ8n+vEHMKd0mASfJIsRA+EiSgJOkh4Q91RJwEnCS9BQfw9Fap2kFCThJFtU6qfozASfJEsRA8nEScJIsAZqU4JmAk2RJcy1pnAScJD3Fz8Yxxsw1YE+SgJOkJ3iSxknASbKAj8PMqTVUAk6SRcQHPtNgqQScJAuI1hrGGEyn0wScBJwki/o4vknHW97ylnRBEnCSLGKuJUnASbIAOQDMphUkScBJ0tNMY2ZsbW2li5GAk6SvhJMKUiFbAk6SBTSOMaaK5yRJwEnSAzfMfIM315Ik4CTpIePx+EYReSkzV1onyf6SZDzvTzONgNmkAq31FwEkai1pnCR9yAH3kK2trXcSUQJOAk6SPsDxP8uyTKBJwEmygMmW+g0k4CRZRuukgVIJOEmW9HOSJOAkWUKS1knASbKAtinLEuPxOPUcSMBJsgyA0hjDBJwkPWQ8Hlcl06n6MwEnyYKSZRmyLEs+TgJOkj4yGo0AoMpTGwwG6aIk4CTpdWNca6jpdIo8z9MFScBJ0tfH0VqjKIpEDiTgJOlrqvngZwJNAk6SBcRnDCRiIAEnyRI+TipiS8BJsoCP49vfJlMtASfJApJKphNwkiwJnDSRLQEnyYLiW9+KSIrjJOAkWQQ4fuJ0YtYScJIseoOYk8ZJwEmyqKmWJAEnyYKSyqYTcJIsARoiSponASfJMtqmLMtESSfgJFnExzHGQCklAC6kK5KAk6QbNOQnFYxGo4fvvvvuv0hXJQEnSbuJRkqpV4uIcsNz5fjx44kl2GeSphXsT41zGxFRCnwm4CRZghjwnW6SJFMtSQ/xYEklBQk4SRa5KcxVPc5wOEwXJAEnSU8fB2n+ZwJOkiU0jicGmJlvv/32Z6WrkoCTpIeP4zVOWZY3GmNemq5KAk6SHhontNyMMSlhLQEnySKS53mipBNwkixqqjEziqJIFyUBJ8kiJluWZakCNAEnSV/x9TgJNAk4SRYQX8BGRMlU24eSctX2qbYBbMpNnucpeyBpnCQdgOGTJ09+o4vdAAAOHTqEm2666TYRSYlr+8kiSJdg34CGLl68+Cta6x8SkSvLsqTJZIL19XWcO3dOzpw5894vfOELf1AUxZ+/6U1vOpuuWNI4SWZ+zVVZlh3xFaDexxnkAyoma98k0wu/Pb54+jdFJG14CThJYoSA93OICEYbGF1iOp3SZDo+8ta3vjUBJwEnSR+SgIhBBCD1WkvASRIHitc0oeZhIjArsEpEaAJOkkYAGWPmxxkSQSmFQZaAk4CTpFXreFFKIVMKrNLtSsBJ0v8mBfNAU0vc/SFJ7+8jaSsfqCpCM4VUZJA0TpKaeI3ii9lsiYGG4gEYQyCFcBJwksxjxreDmo/jAEYMBOJARTcOh7gxXa4EnCQAxuPxjQBe60FTAQdkQzfiiAOiG1Em4CTgJAEATCaTKs8m1Dggq3UEFjiSyqgTcJJ0i4h9EJzJljIHEnCSNIFllqdGAMQYGBGUpYYAKHWZLlICTpJGtoAIxAwjAqM1jNHW2UmSgJNkHijbgAOLFW0MAIIRIEv5agk4SbabaT5LwKEHBgRNGTQPUNIAJVIxaAJOkriJFjzC6QUigjRwKgEnSYvmMcbMZUknRi0BJ8kMICQiRERHtdZsjIHWGmVZVg9jDJgZeZ5jMBjg2muvvenkyZM3r62tHfPvT+XUl9kqSJfgsoKEAeBzn/vcjUqpZzlQvJCIbsuy7CUAbvJaRmsNEUFZltBaQ2uN6XSK6XSK0WhkDh48KMaY8xsbG3+ZZZnkef7F9fX19zOzAXDfi1/84ov+Y4koqaoEnKeGFvHX1oHkRiJiEXmj1pqJ6EYAN/pEAa01hcTAtiI2YM5s81nUxhiUZem7fsp0OhVjjAD4ABGZLMtMURT/viiKh/7u7/7uvre85S0JRAk4+w8sjz766NHxeHwbEd3GzK92Dv2NgM0tExH2i96DJHz454loDhwhcPz/vSbyv3uQhaad1hrGvuGEiJwQkU8y81/keX7iQx/60Ik777wz5e8k4Dw5WuWxxx57IYCjxpgfAfBCAM8ONU6oIWJg8UAJNU3IoIXPOSBs0z6heec/JwSWZ+KcthEHpIcAvF1rrSeTyfu/+7u/2yRtlICzZ2D57Gc/e/TQoUO3AbhNKfVqNy2NRYTDRe8XbB0wYbFaCCivZfyIDw8Mf4wYWOrg8n6RB1EdOHXAaq2NMUZE5P1E9H4ier8x5sR3fdd3PZxAlICzY4f+sccee6FS6oiIfK/TKrc5oFTXr14OEP70APGZAU0mWgiCuq/T9Lfw/6FGqvtA/m/B96qDURyITojI75Zl+Xuf//znkzmXgLO4vzIajW4ry/L7iOg1InLEpf1TuODDhRjTJP7/YTpNXZuEz9W1S/hck6kXvt4DxP/NAycGuhBkoXlHRIaI7tNaP2SM+Y0sy973Pd/zPSnqmoDTDJhTp07dREQvI6IfNca8UESYmakOjjpoQn8lFrSMgST2nhgo6pqrfgxvhoVmmQNA9TcPqPC1oYYKP8+DDYBorc8DuEdr/e+yLHvota997cNImaYJOABw9913Zy984QtfUhTFa5j5vwNw1AUVq4VdN8nqoGnSNuHzdVMp9t4YkVDXPk0Aa/J/QrB4UNRBUtda4XsdgATAfSLye8Ph8ONKqQ98JWuhr1jgeO2SZdkLAfyUiHydC1BS3RdpaslUN8XqLFnM1IoBp26ixV5T12KxY8dMsPoxPVhCAqHO1EWAEx7biMgFAPcQ0S+eOHHi43feead8pWkh+goEDJ88efLleZ7/mIh8IxFdWfdbYkCp/62+iJuAE/NhYgu/SeN0kQltWqcOqtB8C004D56YPxRj6vzzSikN4GFjzB8YY/7tD//wD5/9SgHQV1R++tra2rGNjY3fVUq9kYi+DsBKffOI1cR0/WzSSj67eeHdrOFYsc9pOq+6qRibhOAbHcZe3/T/2mbAInKUmV8G4L9/zWtec3o0Gn3q7//+75/24PmK0Dgf/ehH82c/+9nfx8xvEpGb69+7bpKFv4cLLUYrty2scMevm2+hlmDmbZkBMWq7ThR47eHPKRYUjZmB4es8kxbS1qEWCgmHMNAaY/4AmCzL7t7Y2Pil17/+9e99OseC6CsEMD8tIre0fd+2lP1w4cdMtfpr/aIOMwJiIA0d96bMgZhJVwdzHWwx4IR1PHVyQGuNoijm3lcnEcJzrTN0dfMuyzItIr/AzE9b8+1pCRwRUefOnft+Zv5prfUtzEx9TKYYGRADVCzYWQdSnWCoL9gwU6CNLIhpnDCXrU5Hh4BsAk6oeYqiiPo4odaps3Mh4Pxx/GuDDUYAnFVK/av3vve9v3fXXXfpBJx9LKdPn749y7LXGWN+IERLX1+jrlVi/6/7BrE0m7r2aUq/iTFt9ZhOEwBj7wm1XAioespOna6ug8IDI9RC9by4OnEQy2YAcCHP878ZDAY/8nTSPvQ00jJ87ty5f05EvwLgmCsOm1vkCx5v26CnukbpMu9iwKknbcbMPp/tXD+O/9zY++ogbDOlYsxbURTbgNNEWceYtvrz4Wcxs4jIQ0T0vwN4xxve8IZziVXbB3Ly5Mmbi6L4WRH5RWY+ABeLaXr0AU3IitXft5NRG3UN1XTcJrasD2sXsmax48Xo8jazs21D6dKEDlTEzEcB/GOt9T+44447Th05cuTLT2X27SmtcUSE1tbWbtZav9uzZeFiqS+UPkRAzE9pIhG6UnBi/w/9m670nFiAM5aZ0JVhEGqCpqzrOpsW+jF10iBmstW1Tt10c3EfMLMAOM/Md4vIj/zkT/7kU9J8U09h0OQXLlz4VQD/RkSu9yPOPXDC3bgp9hF7XVv8o04axFi2pXew4NihedkVv2nTLm3sX0yT1r9TCOomCr4tKBsCPvC9yBizIiJfLSL/7bd+67dePHz48FMu9vOUBM6FCxdeNJlMPkZE3wRg1d/YEDR9Fmp98fhF0wSsPscOe6L1OU7M3GojJGIAagJ7l78W+kch+LpSe+p/awJqU4KrOw4BOGKM+fZrr732xS9+8Yvfec8995gEnD0EjYi8G8DxsLt/20Js8w1iC7SPf9F0nNjnN2m/PhkC9d/r2igGjC5/pw6Qeq5dkzkasnQhrd0Emjpp0cC+ETPfpJR68atf/epH3vOe9zz8VFiHT5n2UCKizp8//+MA3g3gqjYNEtMoXUQBM6PuH7WBJmwS2EU+NIGm6XzqZleowfx5+s/3zymlOgmE2O/+vXXfzh/f/z18+M/3v9ebJ8ZmlcZocA8kx+i9YjKZvOfnf/7n70jkwC6C5ty5c7/FzD/otUws3b8rcFk3pWLUcp31Cv/e9FwXLd3kbzSVWMdIA7/QfHpOUyl2vTanrUyhTg7UMwZCciD2M0YohH3hfHA1FusJz9nfDwfMkoheNZlM3rufq0/5KQAavnDhwq8S0Q96AiDcEWOapmlH7yIK+phnMb+iTaPFTL8+nxUeow7w8LvHiIUurVv/W0zb1in5+iYQvreJsGjTwk0pPEVRZFrr96yurr7n7rvv3rfd5dU+B022trb2ZhF5IxFxm//SBo62uEdfImHR9yzqYy1CaDQt7Dr9HmrWGNhjGrEJeDEN18aqxVi2WFZF3YRTSsEYQ1rrmx5//PF/9JKXvOQP9yNpsG+Bc/HixVu2trb+VkS+k4h4kZ20D5O2m8BZNMDaBpqm2FHse7axX/X6oDYiInaMJtKhqWI1ltAaMnFNNHX9Nf7cXfbETUqpf/Syl71s34FnXwLnwoULN4nIfwbwHARZAG1mTR8QdC2eJv+or3lX91PaEkSbtEidMetDW8caGrb93qbB6lorRi33zaOrB2zbGo7EklGdKXgTEe078PA+BM0REfkBADc37eJdmqbJno/Z73V7vStboK9GavO5FokvdQUqw+OHjFfMB2xivUJWrs7uNWVi1Bm+Jt8sdi5t5Em9Q894PIaI3AHgj37t137taNI4cfPsKBH9byLyr+o+TRfd3MefWdR86qKXd+LzNDn/fTRglynXpNFCZ74r7lMvYYiVhzc1JmmL7XTFe5q0kFLqucaY59xxxx1/8zd/8zdbCTgBaAD8rDHm9Xaz4x070n1fu2i6TBdw6oHKLq0SM/e6zi+WilPfvesgqpMFTUALO4qGPkgfMDSRAk2zfpraYEUyFoiIngvgOa985SufdPCo/QQaEXl9qGm6csyWYbG6WLimRdoWCG1LaWkyv/qaf/Uy7vrPmNkZe099oXvzqa41mvq31WNXTdWqbWRATMu0vT6W5yYizyWiJx08TzpwRIS3trZ+AcD/AoDbTLJlTLC+JEHf99X9izagtX1On34FfYiKUMMt44819VeIHauuecqyjIKpiUSoa5QY69b2XgDQWhMzP1dr/Zxv/uZvftLAw/tA27ycmb/dg2anMZemRdpWKrCX0ufzwvSWZc4vtoPXNUWdAIn1L/Agqp9HjFhoSrfpIje6TNSmntg+EwEAtra2yBjzT6fT6W/94i/+4rGvOI2ztrZ2zBjz555B6yIBdmPh71RjtRWitb1+tzROkxYM/ZJFMiViTF1TDKdOFnQVtPWhqNsqVGNaTmvtZ/8QMz+XmZ8Us+1J0zgiwlrr1wG4aRHnv6k6s0/NzTLPxbRDuPPWfYbYucUWYVMdT2x2TlO8pa4lYomnTQxe+NqmpMzYxOsmxq6uPZvugU8UbSvniBEG9caJbrQjFUXxHePx+Psv9wzUJw04Fy9evB3Am31D87Yo+jLlzzs1pZYJpjaxTvVYRj0Luek7Ni3CeuOMWAB02SyGNtavnk3dZMa1mW1t5lyTFowlpHpgbWxsMDP/zJvf/ObvuJzgeVJMtdOnT9/OzH+klLoqDLb1jdHsNgGwG/5PmwkULrS2ftQxijnWQSdWElHXKov2VugyJWPOfBsxEPosXeMbm7rvxEy9+vGZGUVRrOZ5fscHP/jBj91zzz0PPy2BIyLZdDp9BzN/fR0wi+yA+xk4TXlloQaqL866RmlaMF15Z/7vPl2/jfoOx33ERivWfZqmc2qr9oz9vSkVJ1av0/UZ/nq6cuwbXvWqV73rcvg7l9tUo7W1tZ8hole0pWp02f59Hf8m/6LtfYsQETETpc3kaDI/639vSo9ZpjdcnTBoMr/q6TN1/yNk/uqvaypLaDPT6qCOacmusY3e3ymKAkVRUFEUL19fX/+ty5Gac1mBc+HChdtF5F94v2ZZ/2GnjTH2QIt2LuA2MiLUQDFmqyklpysTvK+m9J/fVpfj/x6+JxZcbdsgYu/tionVO/zUC+hqvg9prb/j/Pnze+7v8GVcXAzg7QCO4WkoXfNw+mq8+tjDpsrTmJm7ExOzSev1obdjJd2x4zT1c+gyw5syCkKGzcd6yrLkoih+5Zd/+Zf3FDyXDTgXL158uZtHc9mDkJdb49Sd9L6LI/QpYmZQW0ORNgm72DSZVGFAM/Zdmny4toK6OrDa6qFC3y92bWJMYqyvW1EUKMvy2MbGxs/80i/90p6ZbOoyLaxsMpn8JjPf3ERHxoiBrkYTfajkRfyCtvhEXzMs9tn1hM+6mdJm0rWZZk3Octj6NzT/wueaWkjVO9m0TcPu84j1R4g1cW/72TR5O3ZPgp4M1wI4/opXvOJd99xzjzwVNQ5duHDhZwC8Yq9Yscvhr/R9XVv+WtOm0EVyNLGNTXR00znEkjW7KPG2+EuTRu1TS9REzMTuf1sFaazTqCMMaDKZfPt4PP66p6TGWVtbu8oY87vMfKAe2e5aXPsBWG2mVZdNXtcqsSDlIlqw6byaSpxjC7ttrk+9m07T2Mam3T/WurctvSbms3SNaGzStg1rZ0UpdfUrX/nKv77nnnu2njIax6XVvJ2Iju2GI/tU9n1ii69PeUGTtoqxck1+TGyht8WDwj5rTXlndS3Ul/1sq0TtavdVJ17qU+J8j7aALKCyLL99PB7vOlGwp+131tbWbgLw/cxMbeZLl2/StfP2qUDsWwPTN+LetDhjzJgfWtv0vcK/1bOa68cKNXadKm4KYoajEpu0Q1sDwZj5F2MN6xOuXceaKHMXEiCh/9WW3xc776643mQyYWb+929729s+CeCj+17j3HnnnWyM+VEiUn27xDyZ0mZTL6JdmuIYTSZefaF0JYf2qc8JNUdXTKytwXqdJu8TOwq1SF3DdeWptW2QTdR/U5A0LEWYTqf5xYsX33TnnXfyvgfOj//4j9/otU0fOnavkjgXjaMsO4SqDTThAm4KFO7kWjQlU8Y07V4kzMbiOH2nRiza6qupYrRp4BUR+cyC1xDRP98tk23PgKO1/g5mPhoLfO1XX6etbdGy4KmTAU3NOJrSb5piG11mb4xebuvZVo8Vxfyxpo2lbUhWrASjiTXsE59qq9+JteINfB61vr6+a7Ed3qMFmBPRT/mWtTE2JKamF12syzjnbTejafdrc5LrtnosQzmmZbrm1rQVurXV2cSo6npws6ujZ5Nv2NRbIQaKkJmr+0pN37XpNW3rQ4yePURDTAmIBkTDmHLOZJtMJjetr6/vSu3OngDn3LlzP8rMVy26Qz7V2LI+hEcbO9ZW4LaMf1Z32GO9nZs2rFgRWayobls8I5JxwMzIsiy6+GMjFeujS/oEt2fnOHugPqrebEsGpY2NjR9705vedHTfAceh+WVe21zOmMt+l6bkyGX9sLrW65OpvdPmjF1+SVNialfDla6ZqM3ACcBtBCKmApSR+ekJDjw3bW5uvnanWmfXgXPmzJnbAbymPnMlyfKatsl0afvZlk8WW8T1ns9NgK2bU7GmIKE26pMdHo766PKDmzvieKD4zcQCqe7zuFGK//Stb33rkf1mqn0bM6vYxepKrW/buXaDLevzWOb4Xe2N2npLhwtmmfNpygqo91Dr8jHDY9RjPqGZlWVZo1/mgdLUx6Crr0ETA1ivEYptHjPAhImf5bbZP077vGRzc/Pl2MF8qF0FjogoIvrRsFR4t2IqO2HI+hIIu0FC7MVnxUyfOkXrAdIU0V+kAUqM/o0VszU1jPfvq5MCO/Hf2jqW9k0+NcZgMplgOp2q8Xj8pp/4iZ84si+Ac/bs2ZdlWXZsJ73BdoNV+0ozD/2OXE+9b0uxqWck9InRhC2o6oRCqKHqlZ5NvtcyCb8x/y72fY3xD7NtapyIYDwe3w7g25f1dXYVOET0Mmbm/bBwd5va3g9+UdP3qdfv9O0k2tSWqf66evPCeuJlqFnqJlZsCkIf9qxL49jzlJb73twAxPs6ZVm+bllfJ9vFhTo4f/78GxcZIBvj7pt6Ie/EoW7atdq6u9SbarTN/2ybdmaMQZfp2hU8jX3n2OSAWDOQ+szQWK5bDBx1v6ju8yilUJYlsiyrztcHG0MNGPodIfNX71nddH9iTQq9aG2gRIPC60ME8v4VGQgxBAwD13sBBoYEmgTTKd927ty5YwDOPWka59y5c29USg3buvT30Q77JW8t1qyiLfbSpzHiTs+nTYOGZlFbCXc9EbP+Xh+Xib039n3CY/n319/jmxD2aWjfFrTuqp6ta5u2dlRlWaKYTlRRFD+9jLnGu6RtWEReXs/u7csG7cc4T3ixw7ynWOJkW6+wvikze3HuTSZX3Ueoa4U+xESsW2i9zLsO1LZNp+t6xteINPRyq5ECczR1UPSmDYwx3/eGN7zh5idL43CWZS/xu+IyrFqfXfVySVPD8q4ak73SOH20cRuN3JRf5p9vyqLua+7WswbaKjy7MuObCuz6mrpRLWOkAllIEjjzMjfG/NSiWmdXfJyTJ0++dDQaqXrMoM1P6eMIt9Gpi1LNXcdqA3HX4o/VnNTT8dvOqW+dEBFt6wlQ98dCzdF3E/J+SSwQ6rVIqHW95g01lL9efvSHr8UJv1/o24TviZEa/UoMmmenVmCCQIK6Juv72NfpsoBSGTY2Nr7uDW94w5FFfJ1d0ThKqZf6gVBPB2kKHsZ8glgKzV6boX3iKE3+QlMz9zbN1uTAx2IosUaIsU2gnnS6nJXR3rA+Ft/xb/Omm5sxetvm5uZCbct4FxYZZ1n20v1kal1OYDXVjISPNv9p2WyF+nnEFm9TT+e279QUF2k756ZNZFFfcueBbul17j6XrSy1rxJVRLSQubYbpppi5hf3CWotM8x2J35C15zMPuZiLFDY1NO5bpYuGwju2wSk70yb2PdrmuvZBNCmaxcjRbxGidUCNfli/daKzH6KgBDRqJDqZWKMtebIvpKYAf86Y0CKoHUJogyTyeRlLmv67GXROGfPnn01EWWxBdOVkr7TXakPuJbJRG5r5dqXJu1DH/fpq1Cf09nW0CI0k2KaJsxFi2mrJpA03UN/vLqvE/pBXTlrTdPo6tfaGAOCgESDTQmWEmQ0QAKBqR4WOu7/ogGjQWIAoyG6hOgSMPZ5KQuwKUG6gIK+8dKlc8++bKaaUuo2SnUD20yXPnGHOjDrGiuWwtK0COsT2fr0CIiZmE0Udj2OFQsAh797MDUV2rX5P8tMmohp5Lgv5jXePBU/mUzV1tb0f+5rru0IOCKijDGvvhw+zV5UiO7luYYkQhOw6k50zE/s+r5NZuEiHUy7aPY2bd3U7afJlGyq3+lD7cfpAWkcAxInB2TO7JuZkwJd6pe97nWvO7rnwAFASqkX7JZfs6wf03e6807NxWUd+LZjtQVIm0acx9oyhb/HFmsfs7TNDI0FT5uaZjSFIBbJ2G7TVnM+jzRfs/BvTV1xPHh0qWGMvrHcWnv2ZQFOW75XbLBSXw0SozmXYWxi4OnTQK9vlWLs/bFWS21zYPpoka4cwK5OnuF5xc61qa9aX63UVeXZNEGuD3jn1pDXMyKo2OWm+0Ld6yO8JlprJdngp/u0kdoRcM6ePftq7HFTw702+2LxhyawNe34TeZLH7u+6f3h5y2qdWMLKbYBtTXHCAOadc3Y9T0WHT3fD3AVSiDSPtm6+mnaYzpz74HNcdPafFtZls/eU+AopW7zfdOeStJ1o+pBvGXjLU12fROQm5oTLutftXXpiQEsXFwxUy/MSujqjrOTexHvZeDOD6GmaZ8PKj02zJnpZomD6WSaDQaDb+siCXYryXPh2MzlAkgXVd1UztBk7i3D+vT1N2K+waIN6GNNCWPgDdm3pmKvGGPXliUeM7P7nnOPKxmYZzNHn0DWIqtrnODhs6WDE6xiQbNsagMYA6M1nTz5xG17pnFEhJj5WW0tkhaJ43TFavqyS33A2uec+/o1sd09NI3ChRbLM4uZgU3xkiYt1HQe4efFekC3pcOECaCxe+JB1vR92jKim1i5Nj+rclqq49HMjXE4IPeAa9ThASLGQIwGxLigqfgsNxvjEfsaozUIAmZ6ya//8i8/q2297sQ/UUT0vU+n/LRlzKE+WqZuVzeND1zmPJqIlVg8p2sgkwdDjNELNU/XptcnxWfJuzRHK1eapX4PRYDI9fT3ItwYDAB28R0iA4Fg/dKlGz/3pS/xnrJqeJrJonXwXQs3DGKGRWJNlY1dZEAfNrLeYKPre3VNe66beeF499ism72MtQmkkaGtTDOgtevQNh8nMOfKssR0OuXrr7/25XsCnLW1tRv7vH+/aKRFWy7tFvi6/Js2Vqjru7T1YG7zM2LnUY/0d6Uw1f2dprjTMmZzTFPYsIyNzTRWjPpHB7XdGofSGiKGTp06vTemmjHmtVmWqaYYQB/nfCdsTN+Lv4iP09d0apvj05W3FmsQ2H/xtPckaDOV2pp8hCZaCIqm6tB6XU3T9YrN/mwyMZuyzENd40EjkEaQ9iFztpl0tW6gWhtobZ4lIkREstum2r420/qmrFxOv6npXLqYqkXHkDS1yu3z3ljn/xD89QG4dTKkrTl9OIqjbdHv5nVvK4uQub87sDpQZpn6Z2gZ9clLnhgx87OeTg7/XpmFfRZvF9VdJxQWMS8XmWDWtvBigVNfIt8UXO3KFAl9pd3a4LpM3yr3YO5zPYwsI6e1xsWLF+iee+7ZdR+HAXzvfgNJvwYPu08Q9H1tn2zpBrO4E1gxrdY0b6at7r9t1mf9nHyZdCyroi0tqS0hM0YHtP2fgoet0cGMaRP3exW2EUtXh68TAaquOPanIkIxmWKv6Ghaps6m76KOzU3p8lH67qBtflDdvu/TD6BttmWfYrquEe91U67NN+qKe7WRCXW/qx4ADUETA1gMvLFq0dBkq1edbmP0IGByDzEw/jwhIOeTwAhEm8pvYSLnDwnEWDfGgsv6M0RkG3iQQEgAZpAwxACcKbBt1Ib3ve99e0ZH7xvWbCc1/m1p/IsSG8uO8Vh0w+lr3nQFTOugiNHlfb5Lk4m0iLnaZDHMwOl8edMUN6qfS4fPuc1ss88XRdGdj7jThbqfwLObpl5brlibXb6TLIm+9HM9drKM/R9j5/wxy7Kc6xDa9TlN162tI2nTBhX7LKllC3in3kg9O6E9drMNvDLPsIXkh9aaH3nk4dv2TOPsF2lr0tAVj2iieNvMxyat2zfpcRGmrKksoyuo2bdWKZav11Qy3lZiHab6dLFsdRYvVs5d1yb2tTWGuqPeqVl7xhJCJWytpcqpfvWeAKdrcTYVYC0T1+kDhLaukF27b9dn92GuYuCKLfqmxdhmQtYd8KbGg7HZnU3nFrsGsfsUdugMz7utf1v9XGPrIQaYZm003952EZIlbnLKtniQCal1CMrS0F6QA09JcyzcrRdJGm1qsL7TTaerjLhOOMTo6T7dZ8IxHU1TsGOlCPW/N5mNXcCNtcLt2gCaYzAS9VEWD1HUtHZVpmDnhxoYfMUDp61uo0sL7na/uKbkyyb2LTbCvWsKdh/Tsv7dmzqSep+njaVsyojuW/nbmE9WjSTcbrbFkjz7mqbiKOm5EgRXamD8LFFXxLdrwLl48eKNXCuW32nsZD9JGyGw19+vns7SZrKG2qMrjaWtaK2pa2loqtVp9lgQs55J0GcDip3PnBZzlZk0p222A2aRgrq5PniunodmKifKyO0KcETkJWhJR+hajMuo1UXf3yeGES66psaDXXGgRWJVbXlU4UKsx5Xa+qN19cSua7d6M8Im4qHuf4U1OIsCPTYpLhazadKg4upkvGawNTUaJBraLKZx5kgP39hQfFzHrepKC9ELHKZkt8gB6msS7QVdvEhMp+/Ur90cx9G3HXAXMRBbvPVShaahuTHHvOs+xcAYc+7rv9freGIERowYqFecNsd7auadSGwY2w7WVriwg42M8K1333232jWNExvjsUwh1lPBRFv2OH262rRpptj768eqZzjEdu223LEYQOog8RWgsWaH0YbmDX5Q3+Bna+9qBFk0uzEr1qOGpMoomO/TBmrKHlgKOFrrCjxNLEobLdpmxvShfftO5urzWYuaiX1Mt2XYurbv0WSuxbRQ/WedRWtK2WlqFBhqt5ipFvpGdQ0SapUm5i1WCBf7HnOFai3+XFNrrdjG5p/2v4tDZR9QZnu1c++0vmbRzpR9WbJl/aO28+u7CWxjdXokbHbFJxYBdBNJUAdBvVdCDMxtTdv7ZIDHeiK09X2bEQU2Y6CeTRDzW7dfe8LcJRepPBj7emmdObobPs6+Msl2q1vnMtT2bk1c66NtuyLxfWp5lknhr2ueuukWjnxs+y79R3A0PefNq+WNs0W+PzPtrsYhovsAGBHh/TLDs2nUxm4Ds2kx7sRX6lsq3UQuhAu5T3VrV9ZEfbZPaHY1mVlNGjbmRzVlE/QKfm4D//KjVLrebYzsrsa54oor7iMi3WSa9am+7GqS18XL9ykM2w0zrSmJs61UuEsL9Nn12nbu2LiOPukmfSj9OhNW/4wmn6Utezs2Dr7uExnfwglSjeYg0bVaGTueAzBBLzUz64sG77f4PlGzn0SY9Y+q+ki5RlEzZ8eWMQBgCFoUzu7kqjW1DFrUpFukWUVfVq9Pz+M+n19vJxsunibqe9mcqrZcuTbiI1Z81jQ1Onb/mur+23oktKUhNYGo/h1m13I2A4c8SLzmC5oLzmI5dhaOEW1n48yBQubm5YBmoJqBy0dWgrXjZlGxfcLsiY9zOcdu7PZndTV5aJsB2tZEb6ebQh/tEyMZ6qAIhzp1tbLqSn9paoi4SMJtWyvemK9WL3artB8kmm6zJ1IWb7/zzjvLXQXOXg+IvZxERFOKvN8N2xzuPoHTnTajaPIbtkXCI4xVlz8W0y5tY0SkR6pL0wzUJto5lgwabwJii9guo98se0JH960pWTSO0+ZbtPH3febANJkVTZnTsffEzLSugGdfujamBdvSYpoW8SJUdT1zuileFLt3fWJkTVqmKbOg+frUYjqR77WT2bH2XmJv4zj1uZRNeVK7xSo1HXuZ0t4u27yrnqbLr+pzg8IRgU0JpP75ek+AsHlgn+kDMRD6RRvW1DTRxvUkT9+gvW97p7aanC4WzWdF29fOQFNpsiUqcPuuxzZrItupJttt6ndR02WvfIqurptdg572ylRtKutu+9y20ue6tmkdmxH4Hm3sWlvMqT1FaPvojfpzCMZ3xEZ57NzvtfEbIhJWOL/b5IAB8JfhxODLTSa02e079SnC7xMu0rARR5Od3hfU3WP6mmllf351U6cNzF0Lum2gb4wsaBum2xZeiMWI5oESPuq5au1B393ctJioPHji0d/YVeAQkYjIJ2P5T33JhD490Pr04Go6XuwzFyEyYhWSXb5d3123DwHQxJx1DYjqM8WtKb4S8+H6zB9tG/HeBuIYGbFtsoMx9iEGKpjpIRAY0bAdah3tLAaACX5qG/vBLNbjXy8wgBhASvt+EhADQgLKFLQIPnfo0N6QA1329TJ+TN9JZH2r/bp2oybfYpEG4Ytou9ixYw0H+zj3fWNWTSZ1THOFPljsM+v+T9P9bwJgm88jAhgxc35NvTrTBzql+rc26rD6vX7//N9nc3WI3GAqMiBi/6T9e6b2hhwIb3jovO5UZe5mXcxOnMXL6bf1vXZ9NXBbD4CmBh5NtHIMLF1mWR8SIKqh4UqlxWxr+RT+3mcu6rbrGYz/mLM+ZFaDQ8RQWWZxSnTh+PHje0dH+wsb6za5iAbYab5X07k9FUq5F5k6FwNNuIHFYi9tYA3zz+oFaW09yvr4S23NE6PHMNv9m9jIdcxtBj03p+janGVLh7VGSimIMb9511136d0mB7ZVFsZs5aYmFG2NxZtuSFPspE8ZQRst20UyNO3SMX8tRhHXN4Uup7rvnNCYlm47/6bKzaY+Z54I6dIWTaMRY/5Lm4+2/RrGvoe79g3ft8lfrN+zbRtrdV6zc86yTO+Jqaa1/qJSSmIjp/vU7jfV23Q5403+UFOjvD4+0zId/Jc5Vp+itNC8CVP42xZcW6yqLWmzK+8sTHupF6j1KQuIUdZ9NGhfX7GPJq9eRwTetg6CWaLk2nbYKQzaGPOBVpdiWeAcP3789wGUi5gafSnXpkBgH5s53IX70KZ9J3Ytcv5tPkAbwJuKxeq7ZqxWv6kpRpvf05atEBvkG7J2TT5PVyOONk3TNtmtl4/Ulszbtpn517FdL6wUTCEP7xU5IG0R1y7GJ6ZxYp1mYsBsMgfbdvW+IG3San2rK9sYuSYTrmtiWWzBth0/VidT1zSx19QXfx9N22Rmxo7b9HmL+E2LbtBz2rz5Ve51BLYtAc6r1dULewmcL4rILX4XDEd7W5aEK+pPCWCE7XNkoMk39h6ASEEwhrBzBn0BOIWKMavYRKn11hIxUMZ/FgHCriLWzkMxUCDK3VlrCAoISoAMDASaFQyxrf2ABsHGAexrgYHJwBJQxVR1QYGIIDds7WP4Bizszs0eCWy/UrjeRVw6uxjAKAiZ6v9iXLzBUa8sajZ+XFz8gfzQV4EQQODqkihhGAM7ugIMLQpAAcHEpdoTQLk7hwIik0Zz2t/bribzse41MT+1UVM4/4Ih0CEJQNo+MHvNDBBcjfeonPzZQA97o2bef8U2EzFIxGoY4llRGyl7TUi966677jq/J8AhIn369Ok/YOa3EBGyLJsb+22/mHET5QUmuwSRDAK3CEUDArC4HQoZ/JxHCS6Ex6hgPJe4MOt5ApAoiIyCc/OYcpqPJgBtuloNV/DkAEcA2AhytzgFgCJlL41jdTSNoP3ChB24IsaA2C5eQ9oG45jt4Yns57iBr+LmrRi22b3E/v12JouhGXskAIxr8+UnhWVgaBgYAbQwQOz6HFsKl4wGoO1z5MJ7ZNx1YIjOACogUgLQVW0K83yVYz3g2z45oNn0actLi6b/VMVoAqm0nf1+xhe3YdZroL5/b2NQq3HtEtUu1brBdsKKFYOzzAQT3/ckAHqiLEtDROwv9HzrKFdwRIIJDoChoCQDQQGlhoIGi7a7PKvqOwdxKoeTDMBopuj8zXORZCENzZuh4nWaCVXwTGB3YIBhVzADogCxPeiYADEEMYCizP3dgmU6nKDkEhC7QBkCsHb6VKNQKzBQAAyYrJ6xG8OsM4s2JZgJAg0YV+oMgjEarjbLLQw3/wWz2EWhp05LWA0mhqCNgRh76zMoC2ZYrWegoQkwosE0hsrHdvfVDDEKLLlTm1arGlO0snoLlzf38FMqjWR0BRoSY7+X07rd83l2p6zFaiECrI+jQfLOVstup8A5fvz4795///0vzbLsB0ejEQ4ePBg4XDJnlogZwbiFJa4Kz1CJkjbsrimHLSZo+24gbABMZ9rHR5LJBegAGOQzYAVtf0B2chfNcGYXTaW5gFJNIMrtZsZgAgZX5hRg9AqUzipVz6IBAzAZwBhoXaKcFjC6gDElpCxgyinKYgJdFDB6iul0CpDBdDqBkSm0Lm1/YlOiLE01wsJ+NZcTR2zBhQzMmd1ciCHIIGKd2CxTGGSAUrk1N1kBnIGzHCBCCYFmA2AISAYxGbQAIiW0TGDshOW5bOkuIPRlFpuIg3k/x4HGaAsW9xMiYBiINxUbeirE8ur6b/xeqziTjRkEksFg9eGu9+40AGr+6q/+6m2TyeSlAG7O8xyHDh3CkSuvwIEDqxgNcgyGQ+Qqw6AcQ1EBYsBIBlIHUVKOggcQmtpd05kyqO16xrcqZVfNSrOeWFbzMshktr2Piz4TofIzyAxBZmS1AAyAEiSl8xUMILk1Z6SE0RMQptAyRVlsoiynoHITKCcoizF0MYEpJ5iON1BOxphMNjGWL8CUGzDlFGI0dDEBowS0dmkd1vRQmTVfs4xsDpUDPrubR8apSWEY8RF7QkkKZaFRalQax2iGIQIwgtFXWx+Oh2C1CpUdAtQKmIeg7BC0ugbMm+BMQeUENRRkeQmoKVhyKFmZ81di5EAYB6k38ahT1zFSoc6weT+IxAD+fTIbXwhxIAvoZLSkEzXR++TmGFa+D8VjcVUze8L7i6L44p4CBwC+5Vu+5cG//uu/ftv6xtb/MR6PeW1tDY8+8iUoAkaDHIoJK8Mcx0aP4cBBg9FqjtHqNWC6DlpdBawegFKCzExAHBSlScicKUCGgBYQlDW7eOZUwhCUsX6GT9gTY6BNCV2W0HoCkU3ocgKtt2DMFsriEorpBspyCpmuAcUmptNNTCZrAG2CMIHQBCIlhLZA0G6Bl1CuLj7LGCtkcIgEPGDQCMgdyUBG2xwo3/iOZnY7Z2SJB3F+CMTR5wzyflkVKWCUrn0EKwWCghGg1Aal0TAyRUGXUJaE8YQwmShMiwzTqcJkIpjKYUzVM8FqgDw/BBpcAUOHQLwClR2AygsMco08z8HMc40mYyUMbTG6ui8T016xbAFAKtMM4vpEuyRMWXDqXLTwrorVzIPGlQ8E6w6yMhi+/51/fJfZc+AAwB133PGO97737pesXbr0g0MilMUE0AUm401MxmM8vn4GF/K/xNVXaxw4tIGBGkL0M2BwDAXbnXLINyBTGZRS9oty3Z1zF9FlxZbFFIUuoEsNMRtgnKsSAK27pKF16UyiAqASzAaKNEQKsEzBMGAlGOoMGWU4qABaNSAUAAoQlQAEmkbWRPJNv8l2dCAXA2BRVTdIJoLRGs7tcLtx6ZzxWQ8A64+4gjQmMAlAZfX/uRCdM93EN8+DIM8IA2JLTPAmmHOIYYgMQMhhDKM0hEKvYawfxcam4NLGAFvjYwDfgiy/GTkOQzOg2X5unucVcDzJUycJYhH4eqlz32CpH+YkQS+Byn813RMJ2sBDQNS7n0+3cXEbBx6l2LDQH6BH57ZdAQ4RmQceeOB/ffyJk7dtrF+6XfIMZKZQBJiVFUyHQ2SPfSM2J5/GsWeewuGVDSj9KIBTMGoMowpotWL3Y+cY89zAH4aIcg3ivOp2MyDF0qtKhmC2O7vA7uZgAyhjNRZysJtIzFIpJrBmTPMxCrd4IATiDCyZpYkBjMS1LiJUpgMTw8B2ZUFmYGCddU0W9IIg6KhCM0FAbGlPQmazc9n5/hAIdEUiUEiSsGPcXId+6yMCBAWlDzufS7uY9ATMGrkCDqkcAz2CWQUmx6fYMgUubG7gwvqDKMqjIP18qNHNGAwGyLIMZCPn8Eyp1hplWaIoisbR7W2dctqar3sN4zUOjOuTEKnFWTips7PEJfSDrY+TKXWCy/J8n8/ZtRa4t95665lPfepTb1NMfzwejxXzARhd2qVx4EpsHjiKjS9rDM+eQnbdRWA0gDEHcEBPoLAFg6FVMmobb+JiDzogEj0NbfdtIgIpmaknM+ubZS+UAWQCMDmql0AqJO8YypML7v0GuuL+S5LKk6wCfJbicM66A5xjD6yd7u3rkKly2qbqgmlT2w10xQSSn9jitEwVjzD2JrOQG0dukSMwYNaWyBB7AUUyEBgkBMOMsXLnCMZQKVxzeIJnHNQoivOYTB7HxqVjmPDNyA+9EGblGKYDAdhAsQLlUxTTAsUao9xglIVd66UICqWti9hQoRpqK1s1WkBMCdEFyGiwKWG8cqkaPjGMlBBiRxoZsG8d5cIHc4VttZ4TsbzAevbDLJtAoFAgUzksy6/e9467/vTc7/Zg6Xa1d/Tznve8//TpT3/632xsbPy4iKAsS2itkROQHVyB4hfg4hcfxcpagSPHNjFU6yBRMPogoGhbe9N6tFfqkV4WsMw0UFVSS/NDUu0uT47No/nX1uzg+c+ZDVX1fevC8/HJhlQ7zvyuS7PmeM4cYUI1enwWfJune5hcqpARENvdXBFDwuOTvfVCATCdP+R/91uOXSgKihSIFKAIKiMMh4wrj06xVnwKZy49iGL9eVg5+F+BB1eAoAEcQj4A6EiJYrSJSxtrmG4WMNMSChnAxpEU2/vNbTPXfPazmfkuJgiAGgmvOSK91DA3XGruukfA0ZRcHP5kJhgRZCrXIvrfEZFcVo3jTkQeeOCBtx04cODFm5ubLxoOh3anMTZmkx2/GeX0H+PxxwXD/H4cu/I0BMdgcBSQtW3kemum8BK9m5fl+5sc47Yy5fnsZbuo/U3fxuYQb3v/3LFpfoKYmJn2IzDAmQvKuui3N29dBgPDRcs5c1Q8g0lZfzGfQNMGDh8c4eBB4MLap3Dh0mOg7Lm44oqvhdBRlEpB1CbkkMEVhxh8iWHOrWOyUUJjvrQ8bOyx3acxDbEcsy2DYC4o2lLxGkvLilXu1rWPZ9ugFEhlIFYnJoYf7rsmdn1awa233nrmgQceeNXKysp/nk6nX8/MyCQHC2OLNUZf9TUoxms4c+pRHB6cRjYaQ6srtmebzqlemduRY00a+pRtNy3sPtlFsy6QYcp7TB9SxLymRsc6nuo+84tZuRB/6CsTg0hZc4wYQkMLHBIb7yG2wVyxz9nZycqC15lsBpkNEhNAikHTAQZicM3Bi7jq0DpOXziDi2c/g9Ghb0J+4FrojEH5AIqHuGJwEAdGWzj7+Elc2tioov1hI/ZYqff2SQMOIAj9HaCKCM/l6UnVuqltkwo3Hp8zOU9JB9cZXGnhgcre93/+yZ+c67u57smYj1tvvfXM5z//+f/JGPP/GWMyGIDNEJRfgskNjj37+Thz4VM4e+Ecrrh6CzRYB5vmRML6d6EObdSmGZZp5bQtpdzvVpEbGAUmmZlW8fElfwiKl5z7wJxjTAAPEiEwZTYZUQAhBeKBXRTKmmkEBin72lmLi5n5Zv0xmxnBWIGYDEwXoKQApkNkGOLYIY2DV3wOp8+tY1x8NQ4dew7IXAetj4CVwsrqKlauVzh95hzOnDsHrfVcq6um3DQI5lo/mSo/TVdpUKhAZAIQ0Pw21GYFRO4NGbtBzEw0BqsMrHKQyspCF73NtB2VFXTJLbfc8oksy94GwKgsA6DAZKBUATowxDNu/WY8sn4rLm6uwuhJowreqdm1GxWg245B8Uh53VSY0ygU0Mw0u8GxTpshkUBMAOcA5QBlIM5BPACQgygH8whCAwgNITyA0ACGBu65HEJDMI8suMg+WI0ADCDIYLAFoXMwIBg6DMERCA4ioxWsqivwzKunOHbwBNZPfQTZ1iNYMetQZQnFjHy0gquveQauvfZaHDhwoGLkwiFUXcN/yTOjjk0zWsPoEsZlC0TLBroK/RDxd1CP4TjyhTNklP/Fc59/+72LrIk9G9dOREZEfu4Tn/gEinL6s5kSHhYjZKRQMANXPRsHb/hmPP7IGQzVSQxWg0GvkQy73S6tXuzL+Jy7eS3R+HLmGrrmG36TS0D0PyEUbeAO55sIZ86qcRqFchAUiBjMAxhysS9SLhePHCNIlq3iWdJr9WCrmTJ1yVL4+jhKjCBUALQO1hl46zqowTquHE1wgMc4c/6joOFZrBx5DsbTw6DhFcgGUxw/fhzD4RBPPPEETp06hbIso6UlM39fZomcxgTkgHadaWwiLbs8j51ujHFWzQaUmXPJV0bvv/POO2VfACcEz333ffz5xmx8p5peCYVVFKMJtnLC6rUvgDl7Ly6eOYnBMyYYjUaNF/zJFAq1RExtRxuMNLdGqteIiJEqW9oHIKvXsDXNjPNtxBCIFBQPHThy9/mWNbN+zQw0TARh5di2ADzizBZzLWAUivwiCnUOWgikVzEiBVYTkFYgbTDgMfIrJziz/llcOLOOleMvwqQ8gtVcQWWEQ4cOYTQaYWVlBY8++ii01siybFvtkMBU/o3vZgPHstnNYZYzSJGNZGlTm7azaYoVhsP8oQNX5r+HBcdVXZZt+5Of/ORNWpd/XE7N17NSMNC2KkQEerqBRz7zZ7jG/N84fvQ4RvkYKp/AYAgjI0i2BqENKH2o5mR3L9TenXfcIgpJ6pAMIJa5dI1tJgG197AmkuqcjQcMBS2EfWo/W1NMoKzXzla7iKyAWcFPbyG22sZqHwXBwLU3sn+3MR1ycSbUiBXX2YWU2+kzCBQMmZkmdfVMXF0aARsXQ+EBzm8McHHjKqwcfh7M6HlAXoD5LEgbSDnE6TObePBLn8O5tS9j61KJydYURVFAl1OU0wK6mECXJcqihDEFimIKXRQoy8ImwZoSRjvK2hRV5rj3j+ZuXd3X8fEx2A0GZHMYQQbKV3iyQpYNkA1XQcND/+Gd73zn/7CIf7PnGsfLC17wgoceeOCBf7KJzXcXRfEipRTImWP56hW4/uZ/gvOfOofJhY/hmVdPsGKGLtB3AdoQCEcgUtbAQq2gWdQU86HH7YSEVM92xQSayQmXmhLQynMOLGzCJiOrNIhBBiEG8QBMI4gQFDNIZQApaO3OmTMwhgDbTAQRsgFFF+Hlio8IQsfOVLGiIFBV3LlOpJQgW34BcREhwZHDOfIVjSdOfQLZ4QKrB68BZATFA+i8xPHrDiFfvQUPncjxePkYTHnJhiVqd282HMoRBcbM3QcTjvIQadXk/nmuN570QGLvZ1rgKGYM8lFhlPqlRUFz2TSOlwceeOCq9fX1d4vIi0J7XpkcxcmLOPGlX8fh4cdww9EcBzICcYFSjwBaAdR4e9brHHCW1zgWwxwsclTWtf0s2WaqzR/PtNaFsMtYqP7OVFVuAgTWmaviHIBUDlYDG0GnHMyZTXCFc2ZVBiKF0tiMAmaXAEvstI6vslVzwVcJyilmPjZBTBYd2Vd1wgEDyKE0g8UA2RgaBUw2xFQP8OipLYxWbsVo9fkwfARmUMDgEkgUNi4QvvTI5/HQg5/H+vo6JuNNFJOpyzC3GqfUE0zcc2VZ2qTbqopUA6acY+i2nWdt4/Jms/3JjhTxQWRBlmVQKkeerSDPhr/zjrv+9IeWAU52OYHjYzwXL158N4AXiQiUUpiKhr7qOL5q+D/isQcVTq79La690mCVrrQ0brYJI7zn50cUAscDRjoDor5tUWObJvYNIXhW5syz8mpSI/dcDlI5hEeAKJvyQraIj1lByMZmDMj5Qmy1EkaVqWZ/Ws3jGutVlaHVXukziJhBiqpQwBxoKrLCWFDyCtgFWEltwZABZ1PcdO0Ijz3+MDbLIYZHvhbaDKB4FYqAI4eA7OYbwQw8+IUvQOsC5aSofZYtDrTkiJ5lbFQlBosHqMN4GFdZBv76KDBnYM50OeCltM1lB44Hz0c/+tFXici7iehFNglyimIwxqHs2bjhpu/Hlx/ahMincc2REsPMQAnZnReo4gWLsmttbWZ9ZjMRB2PuTJUCVI86b68BEVeUJtFWVlV9vMtBE7LlAVA2/YVkAKLM+jOOagYPAGVLuIlHzmBkt8M6wBBBUQbCEETKlnGLLZcGMchRw+wineGwWfvVaS4oETb8q8w7tQ5BAUMjcJmD1AFbIWtKEBgMxg3XKXzx9EM4f3oTh499PUCHITSFqAtYGQ3xrBtuABPhcw98FlKUgJSYlmVlonkAVVnjFfW8vSZoW8iiJZ5DRFXXixkFrUCcIR+M7lOFnN0RYfRkyAMPPHDVxsbGu40xL4ISTGkTuYyQTQeYnHsEj37xHTh68F5cc0hhSCvgXLcEN7tNtbY5mF61V9nXZOaOTXM+wfZ8KGuqodFcM1WrqoFLe1EQyu1NJAXiofVJJAMwADiH0KB6PfGw8gqsD+OqQ4lsARsFf3dIsOaaTYGBJwKqRcS17Adp7LgDXrPXQx8EzMASBe76aJ2BtUY2LFEy8NjpAmuXrsXho8+DZAAN1iGyAhibZX3i4Qfx95+6H2fPnMJ0PMHW5iZKvYHptEA5nUIbm4Ut2liTrcqUnu8DN3f/GjIx2GmXDLnNaVQE8mba8IBoUT/0h3/yJ/9xWQc5e7KA4822jY2N/1JO9S0rfBAm38AkF6irbsG12ffj1MM5zNZn8MyjglHelgEgWDasY7WJVMxXmMxDNNMWddDWtV5T3ppl0JSN9vPAaZUcTJYIILgOO2RLH0A5SK060IzAnLluQY5RA9uOQRVwBi4bmiwr57K1fToOMdsuP/CLjmcZCS69hTDLOlZcb2OrXFLsimWxpXCl7AymISgvAS6QmRLXHxvhpDmHc+c+itWjN8HQlVBZBmYCi+CrvuoGKBA+ff8ncebkKUwnE2jDVa2SNjOfsa9ZhibfMuinxmR9QVt6rkCEj6+C/mwnrBLjSZRbb731zGAweNVAjb6QTw+AzSGYfILJaA0rV34tnn396yD6FpxfO43Nzc1op5SdxHzap0VLo/08Hw9gu5uxgNhpKzLV/4nF29Quv0yBOQfTAEwDEOcA52AeQOUDcDZyWmYApXIoNbCgItvkRIgBldtjqKEP4rmMAndsHkDxAEoNQTx0z2X2dZS5OiDlftoHZP7/TLn9XQ6BzTEQVm12glLQbFCSQDIFrQSGB2BzAENRuP4ZCgdWn8DZ8ydg5BCKAlUZRZ5neOb11+P5z38Bjh47isFgYONMrix+G2jIdIInpm3mn4cLFCsQMwaDgWjm3//tjvZP+1bjeHne8573hfvvv/9VpSr/ymi6JR8fJGagkLPAVQrDQz+GUw/eAjn1HshVB6BWxqDROpinUFohK46AjIFkF2cJjQQoo5BJBlVm0GygVfNI8jAuRHAX2fswxjFu4sgCgYvrSEUk+N3fp8nD7XBVCQCvWlNM+TSYDERDQLmOPzgAIIPh3KbFuPQYTTm0sVpQqaxqq2ZTbzL4bgas7E7KbLWYNc0yaGNA4uJCvnLPzYbxDVPgg7Bhm1wxVUqQMVINxrC96QZQLhfOXqNVGBFMh6hiS9dddx3o8ScwPvMuHLjqBdD6OIRXIEoDo/M4/lVH8DXm+ZhOhpiMS+Q5YbJ1CcwAu5IPFoYxBHFNWirfc87DsGmaPqZmTV8bCGZHBhSKkSsGE5ARoEAPZzzckbZ5Un2ciD+S3Xvvff9C6/JXmW1YwbMs5eZprJ34f2AmH8V1x07icE4Y8AEYyjDNxiAyGJQjGBLbo8ztVgoabGy9iHem606+dRhnRXBWtfNceynytelzaTM2NkBVkNDNmhECKHOJmLltp4oV20uAlc0RowxMA4AHjm4+YBedy0kTZAAPQcjdojZOY1mjijizfoxz+JmHNigK5XybHIDrvSbWj1JKOcfbVO2gfMJpleHkfIPQ/xEzWyYC1/DcJZvaa2kq0sFuMJZ4KHWJJx4/iUvTg1g59CwIHbRMYlZAzBi6AB790ml87O8+iC+feAjjySWUxRjFZAxTGujS2K4/VXejdq1DVAOOO0/Kbd8LxYQ8H0o+HL71P7zzT39up8DJ9gtwiKgUkV+/775PXSiKya8AuCrLMpRlCYyuwhXP/U5sPr6K02fugRpsgVYYPNIgNakYJ7iqR7tnlTBkIKoE4FPwEWQfBPsGzdfJiIvLcJVsKRW4ZgsMsAww2c6TMLCJrDlAAxANQTS0wKAVRzcrCwzKnWZwXUzJsmIeOIShBQcpGBAygi/Sdhoxc1qFXKL1wAKTXMYBlDuOPUe7lStnnhnXwNHMZRPMKHhUgUib5WN81NRpJwpmcLoPoFkXSQGgxYCzAa67/pl4+MtnsHXpCRw4eD20GdogLY+Q5YJrrr8a/5D+ISaTLXz5S1tgzgEqXONIW/CnpZt63lbbRLMEWVI2oMoqh8oGHxfg94Cdjw7dj8Nj6N57771Ka/1XAF5EZOv4DTNWiksoznwaa49/AAfzB3HF4QsYDqc27whDGMkAGdheezAQKkA0tT2zqlLk7WnnPl4zY8owx7QR6RnGfCvVoPbeVIspB/EIxCsgHkHRCFAZjBmAlfVbwDmA3PaBIwUIQ/GKA45y2kI5k853vbFJj7ZpozcBlaOmFSC5W7iOpaMMYJ6pUNfo0NekyDYWUoLqW5m1ZLK0VRXJlwo8M7DJfBQZBEAbW0YhYlBqjQcfPok8uxrZ4CogWwEyoESBUqYoN8f40kMP4YPvfx/OnHoC4y3bZsuULkO68nlqE9WqgGeQSU6OfqesGgdimbQM2XBk8iz7yd955//167sBnGwfAkduv/320w888MCr1tfX/1BEXqGMcCaAya8Cjv83WD14Nc4/ejem65/CM8rHMFqZosg3wRgAmFpbvAryjcBzGqObzva1H9V7uJafRvMReENcsWZCI5Basc40D13qvwUMcWZpZjV0vk3mmDJLTQszSAYAK9dn2y4EqlgiW+mpDWDA7lycQ++aFcKxeHMj/gIqXeo+Xi3/qw4qYp7FgNj3WXbBW3duVXtHI9BGW21IBFKMoSpxw1ddjYcfOo3DwxVowzBlZs1bJRgMV3D9DTfi9hdt4W8/+H6U0xKl0bC9rs1cubw1S2kuhOAJmnrD/qq8AYBSjIyzT4yuOPxnuwGa/apxQr+HP/7x+36ASv4tZZSaDrcwYYGYHNn6GvTZD4LX/hoHVp+AWjEYZYyMbPtZm9pvnVkbd3Ctl+bKlAPamZ0hxDQbYFTV0pggQEqzpNAqN3NkWS0aQngFrFYBHrn/DwAauaRNW0vDPIIh78jDtgVWtpNPacSxaAPAlSJ7Ns64UmntCyTJgkXxoNrtxfUlmGWD+Ubt/stykCntlYyZSz+ab/xggWNEXKbBrKeBEFz/O9tocdbbeabBIQIxJU6fPosnTm7g0KEbINkh2wAlM/bUCo3J1hY+/pGP4GN/92GcP/s4yBSYFlsAZdvicCGj6QFkQeW69LBtc0VM4DxHno/O0WD0c//x9//oX+8WcLL9DBxXlvA7n7z3gcOlmb4Zpjw6JJBgBB4exeo134Di0BVYO/8x8PnPwxyY4sDKFjKs2+4oRBCxtfUWGKgFNxF0mwnLfU1td+Gg+8wsrsPkSwCGjg62fo1Q5iL+A7AaoChtjT+TpY2N0zagzAYplTPBqnofZYHk6muMWDIAhmDIJnFW5dPOJBHYcgJfXeo7ZrvhFe7ATnvUoxBzm0m98My2u2KXCyczR8/9zs4XVHY6dJWmZH+KZgg0rr7mMDa21jHePIeVAyPnc5Ftq8WEfLiC537N12Iy3sRH/stFTDYvYKAUCqHG4Gc0U4BV1ftA2e4+QkrdvTEx/3a3QLPvNU6geej++++/aTo2ryOtX6+4ZHAJQ4TCZMgnp6DOvhdbG5/BgdEpHBieQ5ZpKFYwMnIMmMwyg71d7OlM8p1nyHXDQUAWoMoD8wvPlzH7+n7QyGmTkXX01QqERoCy/gzTyCVnBoxZFQhl29DQNnqqmmoQKxjYCD/J0KbWI0i3YZduo+zEgzCrS8KKRyDolc3Vuc9ppJb1ZHu4KbBS1RgTywCyrafx5qsr0pbK4/PpOwMwjWHkIkxJeOAzpzBauQEmG0EyV2JiCFIaSDnF2vkz+ODd/y8++YkPA1Ki1NXQCIQ1EjZoSi7R1QdRcyhlzWalFEgpZIPBuamU3/2Hd737vbu5JrOnAnBcIt6DIvIvP/KRj3zAML8dGNzsOhnDjJ4JPv7PkK/8LbYufQgYT7Gysm4bIirBUAi5CAomFJndmRkZBkbB73sSZh94M4ONm9kjgYmjYJyfUnLu4jsDB4whiFYAtsAhGllHlQcuwXPGqgnZ3mdGFEoeul4C7IKYGYwJOuMEQBA3/Ih8toHrH0AIXm+wzRwjoqoP3OyBAEDbU5WMMRB2NHqYwOpTjchrqKAsQ+ozUW0vgYwOgnLg+uuP40uPnMbq6jUwegCVl47Sz1AyY/XwcTz/9v8ajzz+KM6eehS52UQpVM04Mt4nJYGQuHZXVH0/A0Y+sD3y1GAkZnj47nI8ft9ur8mnBHBC0w3An37oQx+6bzAYvM4Y83qlFBsYTEcZVgbPg1EZpmtXw2ydQEYnMVzZhLDA0BAsGQZg1zmzAPMGoKYQM7JOeUA320WRBZSAK1l2D8BSysQMsE3SFMrdJXXRd7bxGlZDR/FaosD4MmcHHhtnsT8bDQPCLLfNBRp9XhqFPk01to+qEZcz88aVTJNymtUxiA3DpKrUoiWqcilozOi7TIoAR44exfmLJbbGG8gGWRDln7WXuu6Z1+H222/HPe89i6IcWx/GzHLQJLQGglEfpBTyPIcIkGUZWPE5yrLfaJse/RUBHC/f8A3f8KCI/Mt77733/VrrH8Mgu30CfaSUZ2Dl8DXI8hdgoL+Acv1ebG19Fjo/hUE+xZAEmSgoJkAZGHa9lokBOELBkwCOpaJqsblqTMrAPHRVlxlI+QpM5ZpojJyvYzUOcQYRZUd1+C6bHmBViydC2IVG5kwr75tlLqOBq0rQMKlzZphRGFiv/JGqi+iscYL7nPn+DuTLEDyIXAZEnVAJZqls6w9REZWeSKlMQ+t1XXvdtfj8F76IAXIYWa00IilLlGjJ8A+e+zV49NEv4zOf+hjKQrsS8tl+IN60dpPylLJMnspyGAHywcBwpn7h+mc96569WINPSeAE2uc/iciff/iTH/kxNvgB4uzrtjAEjwYAMgxXVlFsXIfNyb3Q8iVos4kD2SYUlbaqsVyBplUoNQFR4fKkqGLOyOdr+SYYcBnMMnRZyTkYmR0VSDmYhgDZ/DC4hhoi/397VxdjV3Wdv7X23vfMHc+MPTYmYGgJBpGqaQhJWiutBJjmAVUlVYSEKxGlfalQEDRSHpIoaaXQNkSthBRVECl9yEvzRqSS5DmAFaREMrIBOw4mpYTWTQIEe4aZ8dzzs/dafdh7n3Pu+NpSmhgbfJY0sufvytbd6+z18/3Em8VwhLNLGh9rOyDIkzq0+5n2qkgqG3Hczd0uR7rE2QpB6RiU/RH09BBAU9LojDY3pMpUctOf0ABToFXt90U8fWO1O58OqqOJDBf3YYTxvMXO5QVsbq5DZASBhTG9HGfGwuIO/MEHPoRf/PxVnPrVKVhmhCAwHG/aqFsSuUSZ1YkEQ7IjBzLuuWLJf+uhhx6SC3H+GO/wIKLw0Zv/6NEi8D3szzypvCaN3cTEFdgoroNf+hMUy3cDoz9Fid/Dut+OdS+oqEHgJqq6xCObLCcy0FChyoknM0o7FwOiESQlEZGNE7IkuxQll1KyIC408+2gaaNPMGmaln4mE6uMbad0rVtcogZkDkmmC0hmeuaPrGaD/m3U9TKUDaco8/B72/UtlInciLfi6mdJdk3fYP1Sa/p73PGblCEghGSIpVC8Z/d2sEY4DStFrW5orGBNTIIrr7oWN970+zEhVGFIYXrYBUo7N2YDYxysjXsuV4xltG3h64899h+nL9S5s3gXRDc8ePzOHz131d8xm79WzO1tdB6el8D2CsyNrwXsf6L2x1D7n8I1r2HEZ1C4NQBz6WbQltSWS472NuD81Owf/tijKGxLVdYW2oMt+tSJPt0+uXNicf9K6Eq2fJiTak2kAecE5N5ImXqlUH7Cp9dpz7F2m/88RKD+ddQbUdPU6rT3b5o1iKX2lj7XZI6SCIi2fU4AiWCucJgfW6xXgBqOgFSOU0QmAzGEUTGPG256H1588QSqtVVkxXfOpW26idtbjgijYk6dG31nzvN3/7/szsvixpl+kw6EP/7Qrf9UBLrTBHnShCZYatCQx6ZbhN/2AdDCneBtnwDsfnh/A/xkG3zJkBBdsUWylnFIgMjoCkZpOQpOmlyZLMWmRQprL2G0ZZJuaQmSua0yepKu1B3Q7FOKDIfvDw36t0iLNJ36/fyk7wTYaSpppobPevZEbRbN4jdcJqBFZicBwDyhWxjPIWRrD+rgPOC0q+IRlnftxtV79kBV4KztUr8P6kwLaiZGMTd/ejw39/DXvvnN0xfyrFm8yyI9ZV5W1TuPPvfs/iZMviEUbvCWicIiDF2LsdsNa3fD2Csh1c9Q4VVIWAVrBcshPSUDhALUBJj2CBoEAMLU3jykGfrC07sUzdwcAOpTDWQAhJQgFtI+rc0U5GWqGe+Xa5Rln6b7mdbZoJ+h1L/v+iUUWluSc63xOrwezU4Emj35a4nZNDUH7w0yMjUjJvnC9mXIr9Zh7SgdRQIlkXhjGBg5FDqPvXtvxMmXfwppql61yD0+lIFxDqYYwxXF93bs3vP8hT5n77rE6fc+AJ48dOjQnQHzf4WG/t6QGnYNSg2o6Crw3G6ofhTz/ghochxUvwFu3gSaNcAFkGvglVFIAwuHhgni8i4hNaYaS414U6QySRVKvhXUi6Qek6qaiHxWL3F7nlDOrXsbOn23bKnOUyPl6JEjffeQnipo9vXpSJ7UsVaoW5R2W/itAvb55upQFNIjl2nvxxTaJWB/mEfUewi4Xkon7WgYNGSAwmFs3oDAwtMSNESBLFIPNYRKFZa3YffuPVjYvoy1N3/ZUjwMJ305KEbFPDwsim07/O9ef9Njn//85+VCny/Guzz27dv3ykf/8JZ/LKy7U8Q/VTd1UAAiQAgMwgjKH4GMP4EwfxfKuduxgZtQyTLEC2xYQxNGqPwCNBTgIHBag2gTwWzC200oGkAbRDycjxpwGr2w211GEk9XDQjiIRpSYmlbFmbj2Pj5hSjPtzbx3R5ousmf/h2COfcH8TmYtP3XS32cdvSP/DGem4eoxHFyKls7y8j4QFlaWsLyjp3gxCvKAE5iBhsH7wNcMae7r7zi4c997nPPvR3nyuIyiDS6fvLo0aNHyrK8I/jwABS3W2uMqOJM2I1NXAVbXAlXXI3x+BqE5hVo/XMU1TpqI2BWGKlgPYHVA3YMQYFAFqx1tNiARFMrii5jkFRytCAebeWQYoJxhM4Rt81835jqt4qH0q0Wf9rtdnrqN9MTMpy38c99GDBL1Qc9pZpz69uN58c4s1a3d1reI3Xs2ai6uX37DvzC2nh7J6cBsg6GGG5uHjuWl4/c8uF9j17IgcBllzg5br755hUAT/z4xz8+uLm5ud8HvV8Ve4kn14OIahgYfg/UbkfB18LpKWj9FoiPAlgFSwOE6C3KooBN/H9KN46GZIJroMFHaI9xQC52shg6a+yhtIkjcE4aAAmIaRJCW1VAwr0WiM7dY6R+gnpLwtYTZmvStALss5KlpzGt0+KM57/FsCXBtiQc0YypXNrw24AQAoyxEdmerToSLo6sxeL2JZCx0NAkJqmBsQ5sLOYXlvz7P/yRL9x9992n3raHMS7jUFU6ceLEzrdW/vdTxrgHYRf2enJJyrzBNmpQwGMO/wXr3wD8KtivgLEBdjXISXr0bIckgXNYhjFFJKohWmxE/WKGImHUeJR0B1xLPGsd02BBxkFCVNEkMNhGVRztTcukR28goV4+5OlUT9ZKO2Rz6LE5z56cEaYhPB3KurtBtmrTYXoggq1qRDJz+JB/fnPlLby+somSl0CwMFJDQ4VaFROvoCAI5SZefOEQfvSDp6NjuHXxgWULzBXjlav3XPM3X/7qI0+8XbfNZXfjnGMCd0pV//XEoUPfWqnqTwnw4Gjs9nqANpgwIWA+vA9zfAPMaB3s3gD8L2Hol2B9EzZMwGoTXCdAfUBA3XqvRIOkyPdniqWcSBN9O01ymlakwx35NAgBCk7+plEOVpOb9daFJaHDhWlqvs8m63Gvd0jktKl+RroR+MwyrW9LshVB0LttNJL+NOkYZHbm1lKtz7JtXZ+ZEbyAU6/HxGDWrFIPYx3IMDjpMBAbGOv06j3XPP3lrz7ynbczaS77xJmZQCdOfGt1de1vifUBb2RXMESVOFjdBuuWMOJdcKOrMApXYSSvgcJbgJQAeZCJDDOFgE1IGjQekjgiSqHdnGsqoYS0Jc5FiR4PGALDtPsMkZxkvXPcL460m5+dhRvLQM5eT9Pf/McwM/Y6ZyffzN1Of3mV/k/tXaV0VpnHvf9INFgOMNwtXyWz9JLWmqYHReND3GsBIGvA1ur84sJ3R4u77ks9LIbEufgJ9A+HDx9+LITwoG/0AbHNTm+EjYxQ0xhOHeZ5CcA1EC4xxv8g6Aagm4BOYEIdm3wVMNXwCRtGqsmKcwRA4CXatLP62BdxE3fxHjCG4tuT5akkJCAkJ0oxnd1j9JeIPXENaW8ATrJV3e/pVvdmTHN7Zt0Y04MAbXc4yH1Z5jWpglR6QNRYbsaisYFBwKRWKI0AVZgErs2UaQ0BwXtI8JhsbgJKcHNzaIQwXlo+vfemGx797Ge/dOqinJUhXc7fAx06dGgnEd0SQvgigP0mRkvbtdZiG63C6CYYZ2CwChNW4fQMRtTAGaDiJqp5mhHIFiAzQlATOSbMcBJVJnPfoxp/FmwBYShZiEb9NLYR6iMZo0YGRlz78I+4OO0R9kzC3PUxZNSD2kinn9aiDvq3T094vjf12yovvNUZOofRkMyuor2iMQRoA5YSUm/i5dcEAnOWE3UIAXUdfXWqzXUceuZp/PcrLyOIYmHnFaeK+R33PfK1rz3xdpdow43za9xAAJ5U1YPPPvvsfgBfrOt6PzObzHVfwxiWHKwZY2QWULjdABqo1ijFYySvxb2DEMgDBgxogIGAAiGY+chkTBYdamziURLYxF4nrypF4tfyVIx1um6LVQv1BOP7mnKz0QLRMTpi9IzhmY/W3B+Btkrknt/FWxHxZBGzWke0twYQGOubPlLOlaZUWvu3mzUG63WF9Y0NgBnj8XhFJvV9j/zbxUuaIXF+vSQKOYGOHj26v67rT4rIx1V1Z8CYmQpYnUMp83AiKCzDGYKxCteMo/uBeqifQMWDUYPgwQYIhlrtZqVoKBsZooh7odyEt1JNBJY8WYtYrczB1LbYop4CJ033QjOdmmfz+acpBJiZdLMmZt0L2ASn8whaAwoEIdQ1YbPqKAtbpY271/dYXV3FmckExo10cXH70//y6De+czGTZkic3yyBnjp27Nj1ZVneEkQeVNJbQ1BjjSHVArWPwMPCjSD0O7AIsMbDUAnRTRidgLQCBZ+AnNkzBwAryEiiOki0G0y3B1NnU8iSwaAhEcAzN4a7WVdPtUYVM0fQcYpuz3Nr6NRi9nw3zdlJGeV3VRuoRvFIEYeyIvhgW/XQTqkmSj2FEKL9YVPj9ddeRxDVYrztiR17rrsow4AhcX67Zdwrqvqz48ePH9zYaHY5h/ubpr6laqrbiGDYGCAETHQOzhEseThTYDxaxIgbGG7A8HB+LR7QkHj8yhETRAIihtgimUrFXoTT1zM6LR7MrM7T71MApZAQ3TMMaBVT/cv0+Lmbyk3zdc7t/j2zz9Hs+KqARFneSelxZkJoEpUjlorSKxul1Uk7s76OkydPIqh5amHXtvu+9KWLMwwYhgMXeJhw7NixHer9h1X8bSry6bKeXCFmBztnAW3gLAES/yxGsZxbtDWQqF6csG6WpAV4NmwSAjoDHE1kPIKgCIkElm0sEuEO6fsUe6azepwWnKkzRDto9nAA53eHmCnfpLGAhASICsoyYHW9QqMWQWyibkTkQLQvFFRVhRACvPc4/sIRvPDC80+OF+1ffv3r/37qknlwDsf9giaSeen40dvXNsPtwZdfCME7ax0rCMbYiPAlBrFgZA3mRoTCCuacwsKDEcAUAPKdeiVFAfG8BxEN8AiwPIJ1EXktwknILzFEjWkTp/Og7aGa+cIljmrkN0ktaBpFWQVs1gGBLCofRyCSkiSXaGUZ/V5PnjyJQz985vu73rPnzx566CF/SVUcw/F+25LIvnT86G2nV9+63brxF5rGOwBMbGCKORAUBgHOEkYWYAQUzqEoDJyNGDiGgMSDEEDwUPGx/zARKWxM1EiIbFGbbhybuPi9t7xPnmsFPaYNp1q0QRYY1B7dYUp8O9mqpx1O1F/r+p+ghKoMqEsP7xVBgMYrggJeosonoJhMJu3vlGWJlZUVPP/88983xlxySTMkzsVMopdeum0ymdxW1/WtIYRbOZqckkm3A7fytwRjFJaBkQGK1CsVBlEHU300OcjW7cQwyXksJ4DCzOxNuFUA7dG0s6xvShyBTJNPdJrBw5TwaMkeMQsnKgDvA8qGUdeCpvEQ6UbfIoAEhcKjqsp2d9M0DdbW1vyLL7748L59+75yxx13+EvxPRwS5+InER8+fNgQ0V1lWX5QVe9S1Q8652yetjnjIo4teFhWWFYUzmA0cnAWsKPYWDN31IRuSatQ9W2z3bc174T8+qzQ6bItuqVpO30Dtiw/YSABEfmQpmhBgKpu0NQekzpAkkhhCJrKsZw8irouoZrweKo4depUdfLkybs+85nPfP+SHg4NR/fSiscff9zceOONO+u6vr9pmp2Gzf0Ex0xknbOxxzHRQiP+HbDGw9qUSCMLa02yJ1FAA1Sa9pbgs2wbAyR4gAjWuJhs2kM+07S/6tbJmVcLkSSRq4y69qgqj6puEEJGMyAlSkYFdMvOpqnzQEDefPPNp5j5zw8cOFBf8lPV4ahe2u+PqprnnnlueUM272c21xPTvSAyzGzYWlhmWAYyYYwYsJZgLcM6C8sER51deVTx53b065sSwVcwxsLZEYyxLZyo1RpMS9Bsa8iG24NfBUUTYjJ4L/ABgBqEqAyPoAEiXfPf39N47+G917IsD66trX3lJz/5ycELpYM2JM5lPu4GYI4cOfLeqgn3iuJ6qNzrjCMRtdYSxUMdYJ2JqGMFbI9diqQGE20YKY7AWZPKv0nTPgORDouQbUDygVcogo+jY0mqPRFISqksI4QQ5Z5C8FANaBqf/q4IcemrZVkeKcvq4clk8r0DBw6Ed9QTbTiO7/xEOnz4MFVV80lmfq+1IzS+vp8Iy9ZZMNiqCFGrCtPn1HAy3coKptw6NIcgUFGYXPKBki4CUk8i7QmSZLgrEp3jJN1GAgVJ4tqEgBA8QvC+LM+8sLGx8fDdd9/zvYTEeOeVAsPxe1cmlDl48CAtLi7Sxkb1aWtp2TlHQZq/YMYOilCC9/ZNgAGivn5AnpBRmq316QWZqJbRAABFUymEhLT2kESbMFIoVFerujzdNPV3VfWfNzY2Tr/TbpghcS7zwQMArKys8Pvff9O9FEk/CILbANxqkosBkC1HGBoCA3o9eprReZkqEiAeLfuUmV4lotA0FYJ6EFk4MzpaVf6xj33s9h8AkIsNzhwSZ4jfasn37W9/e6ZU2HXXXbdDRD6eP88Nfv/zsiwBAFVVPbOxsfEqANxzzz3ty18KoMwhhhhiiCGGGGKIIYYYYoghhhhiiCGGGGKIIYYYYoghhhhiiCGGGGKIIYYYYoghhhhiiCGGGGKIIYYYYoghhhhiiCGGGGKIIYYYYoghhhhiiCGGGGKIIYYYYoghhhhiiCGm4/8AhEpBVFauTfEAAAAASUVORK5CYII=',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAGmCAYAAAA0z7tHAAAACXBIWXMAAAsTAAALEwEAmpwYAAA4JmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTktMDktMjNUMDk6NTg6NDQrMDM6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxOS0wOS0yM1QxMDozMjoxNiswMzowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTktMDktMjNUMTA6MzI6MTYrMDM6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6YmQxZmIzYzQtZjFlOC05MzQyLTk2MGItYmRhN2MxM2I4MzE2PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOmJkMWZiM2M0LWYxZTgtOTM0Mi05NjBiLWJkYTdjMTNiODMxNjwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOmJkMWZiM2M0LWYxZTgtOTM0Mi05NjBiLWJkYTdjMTNiODMxNjwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpiZDFmYjNjNC1mMWU4LTkzNDItOTYwYi1iZGE3YzEzYjgzMTY8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTktMDktMjNUMDk6NTg6NDQrMDM6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MjA2PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjQyMjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAg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',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAGmCAYAAAA0z7tHAAAACXBIWXMAAAsTAAALEwEAmpwYAAA57mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTktMDktMjNUMDk6NTg6NDQrMDM6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxOS0wOS0yM1QxMDo0MTo1NyswMzowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTktMDktMjNUMTA6NDE6NTcrMDM6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6M2VjMjE0NDktYjViNC1kMTQzLWFlYTctYzY0OWRiNTRiMDc3PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD5hZG9iZTpkb2NpZDpwaG90b3Nob3A6OGFlN2Q2YmUtZGRkNS0xMWU5LWEzMWEtODk2ZDY0NzY5ZTgyPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6YThkYWYyYTctNjI2Mi01ODQwLWFhNTMtZDE5Y2E1MDg5MDQ3PC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmE4ZGFmMmE3LTYyNjItNTg0MC1hYTUzLWQxOWNhNTA4OTA0Nzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxOS0wOS0yM1QwOTo1ODo0NCswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDozZWMyMTQ0OS1iNWI0LWQxNDMtYWVhNy1jNjQ5ZGI1NGIwNzc8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTktMDktMjNUMTA6NDE6NTcrMDM6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MjA2PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjQyMjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+F4p8cwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAB7aUlEQVR42uy9eZQm2VUf+Lv3RXxLblVZe3V1V69q7RJCEg2SLGSwGQx4GTBjzsHY4NF4mMHHG41B9hzDeDzTHlsGG2/Yxx6bY7xgM2P7+Ix3xpYBoUYCtPZevVXXmlm5Z35LxHt3/njvRbyIL74ls7K6s1rv9smuqsz8toj4xb33d+/9XRIRRDsa9uQnP4HHHn+CXvvNJ//NtS88+a2bm1v41aeexQPH5p9/9MzyjwD4VwDw2ONPxIP1BhvHQ3A0jYjAikHxUETgRJvdRATGiAOR/SMelQicaDN4HCJAsQITA0CMqSNwok0yYzSMEYgRaKMLLMUjE4ETbZK3YQYTAURgYjgCJ3qcCJxoEz2O1iQQQARMBBOZzwicaLPlN8YIjAiYi1Ok45GJwIk2wWxoJqg5mniuInCiTfE5QkRgtsxazHEicKLN5nMIsDRa4HUiqxaBE22qz/E4EYkeJwIn2n4IAlQZ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',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAGmCAYAAAA0z7tHAAAACXBIWXMAAAsTAAALEwEAmpwYAAA57mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMTEgNzkuMTU4MzI1LCAyMDE1LzA5LzEwLTAxOjEwOjIwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTktMDktMjNUMDk6NTg6NDQrMDM6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxOS0wOS0yM1QxMDo1NzoxMiswMzowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTktMDktMjNUMTA6NTc6MTIrMDM6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6NzhmODNjZDItNGIyZi1iODQ2LTkxODEtMmVmNTI0MDk5NjI0PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD5hZG9iZTpkb2NpZDpwaG90b3Nob3A6Nzk0ZmRjYWQtZGRkNy0xMWU5LWEzMWEtODk2ZDY0NzY5ZTgyPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6NjBkOWNkNDYtOWY3Yi0zYzQxLWJkNTktNTFlNmZiY2MzNGI1PC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjYwZDljZDQ2LTlmN2ItM2M0MS1iZDU5LTUxZTZmYmNjMzRiNTwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxOS0wOS0yM1QwOTo1ODo0NCswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo3OGY4M2NkMi00YjJmLWI4NDYtOTE4MS0yZWY1MjQwOTk2MjQ8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTktMDktMjNUMTA6NTc6MTIrMDM6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MjA2PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjQyMjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+YwmK2QAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAB8TElEQVR42uz9eZxs2XEeBn4R596bmbW+pd7e+76h0QAIEiBAihQFbhaHWs2hKFsejmjZIi1yJFkGZdOmZFuAPdZMazwaSZQ5osyfxpK1+Df6SSNKY0KiQA4pmASxEOi9+71++1p75XbPifnjnHPvuUtmZdWrt3TjBFl4r+tlZWXevN+JiC8iviARQbT7yuhLv/W1f/wbv/Zbv/fGzZt4/fWvY2nx8OcW5478KIBzAPCZlz8dr9I9No6X4D5EDkEIBCYCiPy3TbwyETjRppgISAgoogEq0RMtAifaNK8jABGDmaCYASCCJwIn2lSPAyNGDIwYGBNz0AicaLN5GzAxMxgEIkIkcCJwos1gRgwEgEBARDDR7UTgRJvB4xBEjA3TmCnmNxE40WbKcYyQiFh6zWJGIngicKLtnuQIEYGst4GI8eCJFoETbbLLsd6FiCARLxE40fbgcZgtQSCIrFoETrRZPQ4V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',
        ]
        
        var current = 0
        
        $('.in-td__left__img img').attr('src', colors[current]);

        $('.in-td__left__inner .btn.is--ch').on('click', function(e) {
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

        $('.modal__picker__block__inner').on('click', function() {
            var color = $(this).data('color')
            console.log(color);
        })

        // openModal('#modal_picker')

        // var pickr = Pickr.create({
        //     el: '.color_picker__inner',
        //     theme: 'nano',
        //     container: '.color_picker',
        
        //     swatches: null,
        
        //     components: {
        //         hue: true,
        //         preview: true,
        //         interaction: {
        //             input: true,
        //             save: true
        //         }
        //     },
        //     strings: {
        //         save: 'Выбрать',  // Default for save button
        //         clear: 'Очистить', // Default for clear button
        //         cancel: 'Отменить' // Default for cancel button
        //      }
        // });

        // pickr.on('change', function(color, instance) {
        //     $('.color_picker_prev span').css({
        //         backgroundColor: '#' + color.toHEXA()[0] + color.toHEXA()[1] + color.toHEXA()[2]
        //     })
        // })

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        // 
        // $('body').addClass('is--drop')
        // 

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

        function setPTDrop() {
            $('.navbar__drop').css({
                paddingTop: $('.navbar').innerHeight()
            })
        }
        
        var isScroll

        function openDrop() { 
            $('body').addClass('is--drop')

            isScroll = $('.navbar.is--scroll')

            $('.navbar').removeClass('is--scroll')
            setTimeout(function() {
                setPTDrop()
            }, 100)
        }

        function closeDrop() {
            $('body').removeClass('is--drop')

            if(isScroll.length > 0) $('.navbar').addClass('is--scroll')
        }

        function toggleDrop() {
            if($('body').hasClass('is--drop')) {
                closeDrop()
            }else {
                openDrop()
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

        $('.is--open-drop').on('click', function(e) {
            e.preventDefault()  
            toggleDrop()
        })

        setPTDrop()

        $(window).resize(function() {
            setPTDrop()
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
(function($) {
    "use strict"
    $(function() {

        var height = $(window).scrollTop()

        function show() {
            $('.to-top').addClass('is--show')
        }

        function hide() {
            $('.to-top').removeClass('is--show')
        }

        $(document).scroll(function() {
            height = $(window).scrollTop()

            if(height > 1000) show()
            else if(height < 1000) hide()
        })

        $('.to-top').on('click', function() {
            $('html,body').animate({scrollTop: 0},'slow');
        })

    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5qcyIsImNoYW5nZUNvbG9yM2QuanMiLCJjb3VudGVyLmpzIiwiZHJvcGRvd24uanMiLCJtYWluLmpzIiwibW9kYWxzLmpzIiwibmF2YmFyLmpzIiwidGFicy5qcyIsInRvdG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoJCgnLmJhbm5lcicpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdmFyIGxpc3RJdGVtID0gJzxsaSBkYXRhLWlkPVwiJWlkXCI+PGEgY2xhc3M9XCJiYW5uZXJfX2Zvb3Rlcl9fbGlzdF9fYmxvY2tcIj48ZGl2IGNsYXNzPVwiYmFubmVyX19mb290ZXJfX2xpc3RfX2Jsb2NrX190aXRsZSBpcy0tdHlwZXJfZmItLW9uXCI+JXRpdGxlPC9kaXY+PGRpdiBjbGFzcz1cImJhbm5lcl9fZm9vdGVyX19saXN0X19ibG9ja19fcHJpY2UgaXMtLXR5cGVyX2ZiLS10d1wiPiVwcmljZSDigr08L2Rpdj48L2E+PC9saT4nO1xyXG4gICAgICAgICAgICB2YXIgbGlzdFRvdGFsID0gJCgnLmJhbm5lcl9fY29udGVudF9fbGlzdF9faXRlbScpO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFNsaWRlciA9IDFcclxuICAgICAgICAgICAgdmFyIGlzU2xpZGUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGlzdFRvdGFsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAkKGxpc3RUb3RhbFtpXSkucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0aGlzUHJpY2UgPSAkKGxpc3RUb3RhbFtpXSkuZGF0YSgncHJpY2UnKVxyXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNUaXRsZSA9ICQobGlzdFRvdGFsW2ldKS5kYXRhKCduYW1lJylcclxuICAgICAgICAgICAgICAgIHZhciB0aGlzSWQgPSAkKGxpc3RUb3RhbFtpXSkuZGF0YSgnaWQnKVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBmaW5hbExpc3RJdGVtID0gbGlzdEl0ZW0ucmVwbGFjZSgnJXRpdGxlJywgdGhpc1RpdGxlKVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsTGlzdEl0ZW0gPSBmaW5hbExpc3RJdGVtLnJlcGxhY2UoJyVwcmljZScsIHRoaXNQcmljZSlcclxuICAgICAgICAgICAgICAgICAgICBmaW5hbExpc3RJdGVtID0gZmluYWxMaXN0SXRlbS5yZXBsYWNlKCclaWQnLCB0aGlzSWQpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICQoJy5iYW5uZXJfX2Zvb3Rlcl9fbGlzdCB1bCcpLmFwcGVuZChmaW5hbExpc3RJdGVtKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKGxpc3RUb3RhbFtjdXJyZW50U2xpZGVyIC0gMV0pLmFkZENsYXNzKCdpcy0tYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRTbGlkZShpZCkge1xyXG4gICAgICAgICAgICAgICAgaWYoaXNTbGlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZXIgPSBpZFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCcuYmFubmVyX19jb250ZW50X19saXN0X19pdGVtJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuYmFubmVyX19jb250ZW50X19saXN0X19pdGVtOm5vdChbZGF0YS1pZD1cIicgKyBpZCArICdcIl0pJykuYWRkQ2xhc3MoJ2lzLS1jbG9zJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmJhbm5lcl9fY29udGVudF9fbGlzdF9faXRlbVtkYXRhLWlkPVwiJyArIGlkICsgJ1wiXScpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmJhbm5lcl9fZm9vdGVyX19saXN0IGxpJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICQoJy5iYW5uZXJfX2Zvb3Rlcl9fbGlzdCBsaVtkYXRhLWlkPVwiJyArIGN1cnJlbnRTbGlkZXIgKyAnXCJdJykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUgaXMtLWNsb3MgYW5pbWF0ZWQgZmFkZUluUmlnaHQnKVxyXG4gICAgICAgICAgICAgICAgICAgICQoJy5iYW5uZXJfX2Zvb3Rlcl9fbGlzdCBsaVtkYXRhLWlkPVwiJyArIChjdXJyZW50U2xpZGVyICsgMSkgKyAnXCJdJykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUgaXMtLWNsb3MgYW5pbWF0ZWQgZmFkZUluUmlnaHQnKVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihjdXJyZW50U2xpZGVyID49ICQoJy5iYW5uZXJfX2NvbnRlbnRfX2xpc3RfX2l0ZW0nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmJhbm5lcl9fZm9vdGVyX19saXN0IGxpW2RhdGEtaWQ9XCInICsgMSArICdcIl0nKS5hZGRDbGFzcygnaXMtLWFjdGl2ZSBhbmltYXRlZCBmYWRlSW5SaWdodCcpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuYmFubmVyX19jb250ZW50X19saXN0X19pdGVtJykucmVtb3ZlQ2xhc3MoJ2lzLS1jbG9zJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmJhbm5lcl9fZm9vdGVyX19saXN0IGxpJykucmVtb3ZlQ2xhc3MoJ2lzLS1jbG9zIGFuaW1hdGVkIGZhZGVJblJpZ2h0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2xpZGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDYwMClcclxuICAgICAgICAgICAgICAgICAgICB9LCAxNTAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRTbGlkZSgxKVxyXG5cclxuICAgICAgICAgICAgdmFyIGNhcm91c2VsVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0U2xpZGUoY3VycmVudFNsaWRlcilcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZXIrKztcclxuXHJcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50U2xpZGVyID4gJCgnLmJhbm5lcl9fY29udGVudF9fbGlzdF9faXRlbScpLmxlbmd0aCkgY3VycmVudFNsaWRlciA9IDFcclxuXHJcbiAgICAgICAgICAgIH0sIDQwMDApXHJcblxyXG4gICAgICAgICAgICAkKCcuYmFubmVyX19mb290ZXJfX25leHRfX2Jsb2NrX19pbm5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRTbGlkZShjdXJyZW50U2xpZGVyKVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlcisrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRTbGlkZXIgPiAkKCcuYmFubmVyX19jb250ZW50X19saXN0X19pdGVtJykubGVuZ3RoKSBjdXJyZW50U2xpZGVyID0gMVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBjb2xvcnMgPSBbXHJcbiAgICAgICAgICAgICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU00QUFBR21DQVlBQUFBMHo3dEhBQUJudUVsRVFWUjQydXk5YTVSazExVW0rTzE5N28ySXpIcElWYVdTSlZuSXNpUzNETmlXRVo2ZU5ZMWZHTGxwZ3pFMERLelZtS0ZobUJrWWNIdkFUWS9CbUxFTUdEQ3N4V0oxOTlBTmEyamFQTXlBR0hvQWc5dkRZTWt2Mm9OdDJiSmxiTm1XVkxiMXFuZFZWajRpNHQ1ejl2dzQ1OXc0Y2ZQY1IwUm1sbEx5Mld0RlpWWmt4STBiOTU3djdMMi8vUUtTN0NzUkVWcGZYLytkaXhjdnlva1RKK1MzZi91M3pkdmYvdllmVEZkbWZ3bW5TN0EvaFlpZ2xBSVJwWXVSZ0pOa0FjMERZNHk5U1p4dVV3Sk9rdDRheDJ1ZHdXQ1FMa2dDVHBJdU1jWlVENjExdWlEN1VMSjBDZmJoYnVaTU15SUNNeWZ3SkkyVHBLL0dFUkdJQ0pnWlJWR2tpNUtBazJRUmMwMHBsUzVHQWs2U1B1SzFqWWlraTVHQWsyUlJQNGVaUVVUSngwbkFTYktJRUZIU09nazRTUllGalRmYmtzWkp3RW15QUhDSXFNb2VTSktBazZRbmFGS2VXZ0pPa2lYRXgzRVNKWjJBazZUUFRXRyt6eGdqUGhDYWZKd0VuQ1RkWnBwb3JkOGxJcHFJa0dVcEt5b0JKMGxmRTAyOHI1TlNiaEp3a3ZTVTBXZzB4Nm9sSHljQkowbC9rNjBDVGlwa1M4Qkowa1BHNDNIRnFDVktPZ0VueVdKK1RnV2VKQWs0U2ZyZUdHYUlTTkk0Q1RoSkZpRUhRZ0FsU2NCSnNvREc4WFIwa2dTY0pBdUlyd0pOa29DVFpBRkppWjRKT0VrV0ZGL0FsalJPQWs2U0pjQ1RhbklTY0pJc1NRNms3T2dFbkNRTGlOWTY1YW9sNENUcEt6N2xKdFErU1JKd2tuVElhRFNxd0pLNjNDVGdKRmxDMHJTQ0JKd2tDMGpZeVhNNm5hWUxrb0NUcEkrUDQvc05KRW5BU2JLZ3BNRlNDVGhKRWptUWdKUGs4dmc0UUVxNVNjQkpzdGlOU1dYVENUaEpGaWNIZko2YTFqcWwzQ1RnSk9ucjQzaHRrMXJnSnVBa1dVRGplUDhtTmV4SXdFbXlvTVpoNXRRQ053RW55YUtTSnJJbDRDUlpVTks0OWdTY0pFdHFtOVE3T2dFbnlRNDBUNUlFbkNRTEFrWXBsZUk0Q1RoSitrallkRDJaYWdrNFNmcmVGT1lMelB6Rk5NWXdBU2ZKQW5MbzBLRnp6UHdCRVVHV1pTa0Ftb0NUcEsrVVpRa1JTV1phQWs2U1JjbUJQTThyZ2lCSkFrNlNCY0RqTTZTVEpPQWs2U0UrM1NacG13U2NKRXVJVWlxQkp3RW5TZThiNHpLalV5RmJBazZTQmNRWVUzVzVTWktBa3lSSkFrNlN2VFhWVXVaQUFrNlNCY1VEaG9qbXBsQW5TY0JKMGlKS3FhcGhSeXBrUzhCSnNnQTU0RFZPSWdnU2NKSXNxSFdZdWVwNmt5UUJKMG1IK0VJMjMrMG1TUUpPa3A2U1FKT0FreVJKQWs2U0pBazRTZlk5UVpBR1N5WGdKRm5rNWpDakxNdDBJUkp3a2l3aW5sbExCRUVDVHBJRmdaUG5lUXFBSnVBazZTdStySUNaazhiWmg1Sm1TT3hqVWlDVlRpZU5rMlFKTTgwWWs0Ym5KdUFrV1VUOHRJSTBXQ29CSjhtQ0dzZHJuV1N1SmVBa1dVRGorTUc1Q1RnSk9Fa1d2VUhNVlVmUEpBazRTWHFDeGxlQkprbkFTYktBdVdhTVNhWFRDVGhKRmdWTzBqZ0pPRW1XSkFoUzVrQUNUcElGL0J1Zk9aRGFReVhnSk9rcEluS2ZNVVpTbDVzRW5DVDlUVFFwaXVKZEFEU0ExTTB6QVNkSlh4a09oK0kwVDJvUGxZQ1RaRkZ5Z0loUzZYUUNUcElGL1J3WVl6Q2RUdFBGU01CSjB2dm11T0ZTaVZWTHdFbXlvS21XR0xVRW5DUUx5SGc4cmtvTFVzcE5BazZTSmZ5Y0pBazRTWllBVG9yakpPQWtTWDVPQWs2U3ZkYzJ6SXpEaHcrbkZPa0VuQ1FMYWh3NmMrYk1HKys4ODg1MHJ4SndrblJKR0x2UldxZjdsSUNUWkJIL2hvZ1NzNWFBazJRWkh5ZEpBazZTbmhKbVJLZGN0UVNjSkVrU2NKSmNIbk10U1FKT2tpVkFreklIRW5DU0xDaHBaSHNDVHBJbFJTbkY2VjRsNENSWlVPTU1Cb01idi9xcnYvb2w2V29rNENUcGtORm9WQVUvcDlNcFRTYVRsSytXZ0pOa1VVbGoyeE53a3ZTVWNMaFVrZ1NjSkQwa3pCd1FrVFRTTUFFblNWOHh4a0JFMHNTQ0JKd2t5NWhxS1FDYWdKTmtDVW5UcHhOd2tpVGdKT0FrMlh2QWVETXRkZk5Nd0VteWdDaWxFcXVXZ0pOa0dhMWpqRWtCMEFTY0pIMUZSRkNXWmFySlNjQkowaE13TkJnTWJqUEdNRE1uT2pvQko4a0M0SG0xdnorSlZVdkFTYktBMWlFaUZFV1JNZ2NTY0pMMEZaL1lhWXlCTVNiMWowN0FTZExyeHJoeWFaK3JsdnljQkp3a1MycWZKQWs0U2ZyNU9SQVJLS1VrbVdvSk9Fa1cwRFJhYTB5bjB4TWk4b2wwUlJKd2t2UVF6NlpsV1dZKy9PRVBYMGhYSkFFbnlRS1MwbTBTY0pJa1NjQkpraVFCSjhuK3ZFSE1LZDBtQVNmSklzUkErRWlTZ0pPa2g0UTkxUkp3RW5DUzlCUWZ3OUZhcDJrRkNUaEpGdFU2cWZvekFTZkpFc1JBOG5FU2NKSXNBWnFVNEptQWsyUkpjeTFwbkFTY0pEM0Z6OFl4eHN3MVlFK1NnSk9rSjNpU3hrbkFTYktBajhQTXFUVlVBazZTUmNRSFB0TmdxUVNjSkF1STFockdHRXluMHdTY0JKd2tpL280dmtuSFc5N3lsblJCRW5DU0xHS3VKVW5BU2JJQU9RRE1waFVrU2NCSjB0Tk1ZMlpzYlcybGk1R0FrNlN2aEpNS1VpRmJBazZTQlRTT01hYUs1eVJKd0VuU0F6Zk1mSU0zMTVJazRDVHBJZVB4K0VZUmVTa3pWMW9ueWY2U1pEenZUek9OZ05ta0FxMzFGd0VrYWkxcG5DUjl5QUgza0sydHJYY1NVUUpPQWs2U1BzRHhQOHV5VEtCSndFbXlnTW1XK2cwazRDUlpSdXVrZ1ZJSk9FbVc5SE9TSk9Ba1dVS1Mxa25BU2JLQXRpbkxFdVB4T1BVY1NNQkpzZ3lBMGhqREJKd2tQV1E4SGxjbDA2bjZNd0VueVlLU1pSbXlMRXMrVGdKT2tqNHlHbzBBb01wVEd3d0c2YUlrNENUcGRXTmNhNmpwZElvOHo5TUZTY0JKMHRmSDBWcWpLSXBFRGlUZ0pPbHJxdm5nWndKTkFrNlNCY1JuRENSaUlBRW55UkkrVGlwaVM4Qkpzb0NQNDl2ZkpsTXRBU2ZKQXBKS3BoTndraXdKbkRTUkxRRW55WUxpVzkrS1NJcmpKT0FrV1FRNGZ1SjBZdFlTY0pJc2VvT1lrOFpKd0VteXFLbVdKQUVueVlLU3lxWVRjSklzQVJvaVNwb25BU2ZKTXRxbUxNdEVTU2ZnSkZuRXh6SEdRQ2tsQUM2a0s1S0FrNlFiTk9RbkZZeEdvNGZ2dnZ2dXYwaFhKUUVuU2J1SlJrcXBWNHVJY3NOejVmang0NGtsMkdlU3BoWHNUNDF6R3hGUkNud200Q1JaZ2hqd25XNlNKRk10U1EveFlFa2xCUWs0U1JhNUtjeFZQYzV3T0V3WEpBRW5TVThmQjJuK1p3Sk9raVUwamljR21KbHZ2LzMyWjZXcmtvQ1RwSWVQNHpWT1daWTNHbU5lbXE1S0FrNlNIaG9udE55TU1TbGhMUUVueVNLUzUzbWlwQk53a2l4cXFqRXppcUpJRnlVQko4a2lKbHVXWmFrQ05BRW5TVi94OVRnSk5BazRTUllRWDhCR1JNbFUyNGVTY3RYMnFiWUJiTXBObnVjcGV5QnBuQ1FkZ09HVEowOStvNHZkQUFBT0hUcUVtMjY2NlRZUlNZbHIrOGtpU0pkZzM0Q0dMbDY4K0N0YTZ4OFNrU3ZMc3FUSlpJTDE5WFdjTzNkT3pwdzU4OTR2Zk9FTGYxQVV4WisvNlUxdk9wdXVXTkk0U1daK3pWVlpsaDN4RmFEZXh4bmtBeW9tYTk4azB3dS9QYjU0K2pkRkpHMTRDVGhKWW9TQTkzT0lDRVliR0YxaU9wM1NaRG8rOHRhM3ZqVUJKd0VuU1IrU2dJaEJCQ0QxV2t2QVNSSUhpdGMwb2VaaElqQXJzRXBFYUFKT2trWUFHV1BteHhrU1FTbUZRWmFBazRDVHBGWHJlRkZLSVZNS3JOTHRTc0JKMHY4bUJmTkFVMHZjL1NGSjcrOGphU3NmcUNwQ000VlVaSkEwVHBLYWVJM2lpOWxzaVlHRzRnRVlReUNGY0JKd2tzeGp4cmVEbW8vakFFWU1CT0pBUlRjT2g3Z3hYYTRFbkNRQXh1UHhqUUJlNjBGVEFRZGtRemZpaUFPaUcxRW00Q1RnSkFFQVRDYVRLczhtMURnZ3EzVUVGamlTeXFnVGNKSjBpNGg5RUp6SmxqSUhFbkNTTklGbGxxZEdBTVFZR0JHVXBZWUFLSFdaTGxJQ1RwSkd0b0FJeEF3akFxTTFqTkhXMlVtU2dKTmtIaWpiZ0FPTEZXME1BSUlSSUV2NWFnazRTYmFiYVQ1THdLRUhCZ1JOR1RRUFVOSUFKVkl4YUFKT2tyaUpGanpDNlFVaWdqUndLZ0VuU1l2bU1jYk1aVWtuUmkwQko4a01JQ1FpUkVSSHRkWnNqSUhXR21WWlZnOWpESmdaZVo1ak1CamcybXV2dmVua3laTTNyNjJ0SGZQdlQrWFVsOWtxU0pmZ3NvS0VBZUJ6bi92Y2pVcXBaemxRdkpDSWJzdXk3Q1VBYnZKYVJtc05FVUZabHRCYVEydU42WFNLNlhTSzBXaGtEaDQ4S01hWTh4c2JHMytaWlpua2VmN0Y5ZlgxOXpPekFYRGZpMS84NG92K1k0a29xYW9FbktlR0Z2SFgxb0hrUmlKaUVYbWoxcHFKNkVZQU4vcEVBYTAxaGNUQXRpSTJZTTVzODFuVXhoaVVaZW03ZnNwME9oVmpqQUQ0QUJHWkxNdE1VUlQvdmlpS2gvN3U3Lzd1dnJlODVTMEpSQWs0K3c4c2p6NzY2Tkh4ZUh3YkVkM0d6SzkyRHYyTmdNMHRFeEgyaTk2REpIejQ1NGxvRGh3aGNQei92U2J5djN1UWhhYWQxaHJHdnVHRWlKd1FrVTh5ODEva2VYN2lReC82MElrNzc3d3o1ZThrNER3NVd1V3h4eDU3SVlDanhwZ2ZBZkJDQU04T05VNm9JV0pnOFVBSk5VM0lvSVhQT1NCczB6NmhlZWMvSndTV1orS2N0aEVIcEljQXZGMXJyU2VUeWZ1Lys3dS8yeVJ0bElDeloyRDU3R2MvZS9UUW9VTzNBYmhOS2ZWcU55Mk5SWVREUmU4WGJCMHdZYkZhQ0NpdlpmeUlEdzhNZjR3WVdPcmc4bjZSQjFFZE9IWEFhcTJOTVVaRTVQMUU5SDRpZXI4eDVzUjNmZGQzUFp4QWxJQ3pZNGYrc2NjZWU2RlM2b2lJZksvVEtyYzVvRlRYcjE0T0VQNzBBUEdaQVUwbVdnaUN1cS9UOUxmdy82RkdxdnRBL20vQjk2cURVUnlJVG9qSTc1WmwrWHVmLy96bmt6bVhnTE80dnpJYWpXNHJ5L0w3aU9nMUluTEVwZjFUdU9ERGhSalRKUDcvWVRwTlhadUV6OVcxUy9oY2s2a1h2dDREeFAvTkF5Y0d1aEJrb1hsSFJJYUk3dE5hUDJTTStZMHN5OTczUGQvelBTbnFtb0RUREpoVHAwN2RSRVF2STZJZk5jYThVRVNZbWFrT2pqcG9RbjhsRnJTTWdTVDJuaGdvNnBxcmZneHZob1ZtbVFOQTlUY1BxUEMxb1lZS1A4K0REWUJvcmM4RHVFZHIvZSt5TEh2b3RhOTk3Y05JbWFZSk9BQnc5OTEzWnk5ODRRdGZVaFRGYTVqNXZ3TncxQVVWcTRWZE44bnFvR25TTnVIemRWTXA5dDRZa1ZEWFBrMEFhL0ovUXJCNFVOUkJVdGRhNFhzZGdBVEFmU0x5ZThQaDhPTktxUTk4Sld1aHIxamdlTzJTWmRrTEFmeVVpSHlkQzFCUzNSZHBhc2xVTjhYcUxGbk0xSW9CcDI2aXhWNVQxMkt4WThkTXNQb3hQVmhDQXFITzFFV0FFeDdiaU1nRkFQY1EwUytlT0hIaTQzZmVlYWQ4cFdraCtnb0VESjg4ZWZMbGVaNy9tSWg4SXhGZFdmZGJZa0NwLzYyK2lKdUFFL05oWWd1L1NlTjBrUWx0V3FjT3F0QjhDMDA0RDU2WVB4Umo2dnp6U2lrTjRHRmp6QjhZWS83dEQvL3dENS85U2dIUVYxUisrdHJhMnJHTmpZM2ZWVXE5a1lpK0RzQktmZk9JMWNSMC9XelNTajY3ZWVIZHJPRllzYzlwT3ErNnFSaWJoT0FiSGNaZTMvVC8ybWJBSW5LVW1WOEc0TDkveld0ZWMzbzBHbjNxNy8vKzc1LzI0UG1LMERnZi9laEg4MmMvKzluZng4eHZFcEdiNjkrN2JwS0Z2NGNMTFVZcnR5MnNjTWV2bTIraGxtRG1iWmtCTVdxN1RoUjQ3ZUhQS1JZVWpabUI0ZXM4a3hiUzFxRVdDZ21ITU5BYVkvNEFtQ3pMN3Q3WTJQaWwxNy8rOWU5OU9zZUM2Q3NFTUQ4dElyZTBmZCsybFAxdzRjZE10ZnByL2FJT013SmlJQTBkOTZiTWdaaEpWd2R6SFd3eDRJUjFQSFZ5UUd1Tm9pam0zbGNuRWNKenJUTjBkZk11eXpJdElyL0F6RTliOCsxcENSd1JVZWZPbmZ0K1p2NXByZlV0ekV4OVRLWVlHUkFEVkN6WVdRZFNuV0NvTDlnd1U2Q05MSWhwbkRDWHJVNUhoNEJzQWs2b2VZcWlpUG80b2RhcHMzTWg0UHh4L0d1RERVWUFuRlZLL2F2M3Z2ZTl2M2ZYWFhmcEJKeDlMS2RQbjc0OXk3TFhHV04rSUVSTFgxK2pybFZpLzYvN0JyRTBtN3IyYVVxL2lURnQ5WmhPRXdCajd3bTFYQWlvZXNwT25hNnVnOElESTlSQzlieTRPbkVReTJZQWNDSFA4NzhaREFZLzhuVFNQdlEwMGpKODd0eTVmMDVFdndMZ21Dc09tMXZrQ3g1djI2Q251a2JwTXU5aXdLa25iY2JNUHAvdFhEK08vOXpZKytvZ2JET2xZc3hiVVJUYmdOTkVXY2VZdHZyejRXY3hzNGpJUTBUMHZ3TjR4eHZlOElaemlWWGJCM0x5NU1tYmk2TDRXUkg1UldZK0FCZUxhWHIwQVUzSWl0WGZ0NU5SRzNVTjFYVGNKcmFzRDJzWHNtYXg0OFhvOGphenMyMUQ2ZEtFRGxURXpFY0IvR090OVQrNDQ0NDdUaDA1Y3VUTFQyWDI3U210Y1VTRTF0YldidFphdjl1elplRmlxUytVUGtSQXpFOXBJaEc2VW5CaS93LzltNjcwbkZpQU01YVowSlZoRUdxQ3BxenJPcHNXK2pGMTBpQm1zdFcxVHQxMGMzRWZNTE1BT00vTWQ0dklqL3prVC83a1U5SjhVMDloME9RWExsejRWUUQvUmtTdTl5UE9QWERDM2JncDloRjdYVnY4bzA0YXhGaTJwWGV3NE5paGVka1Z2Mm5UTG0zc1gweVQxcjlUQ09vbUNyNHRLQnNDUHZDOXlCaXpJaUpmTFNMLzdiZCs2N2RlUEh6NDhGTXU5dk9VQk02RkN4ZGVOSmxNUGtaRTN3UmcxZC9ZRURSOUZtcDk4ZmhGMHdTc1BzY09lNkwxT1U3TTNHb2pKR0lBYWdKN2w3OFcra2NoK0xwU2UrcC9hd0pxVTRLck93NEJPR0tNK2ZacnI3MzJ4UzkrOFl2ZmVjODk5NWdFbkQwRWpZaThHOER4c0x0LzIwSnM4dzFpQzdTUGY5RjBuTmpuTjJtL1Boa0M5ZC9yMmlnR2pDNS9wdzZRZXE1ZGt6a2FzblFocmQwRW1qcHAwY0MrRVRQZnBKUjY4YXRmL2VwSDN2T2U5eno4VkZpSFQ1bjJVQ0tpenA4Ly8rTUEzZzNncWpZTkV0TW9YVVFCTTZQdUg3V0JKbXdTMkVVK05JR202WHpxWmxlb3dmeDUrcy8zenltbE9nbUUyTy8rdlhYZnpoL2YvejE4K00vM3Y5ZWJKOFptbGNab2NBOGt4K2k5WWpLWnZPZm5mLzduNzBqa3dDNkM1dHk1YzcvRnpEL290VXdzM2I4cmNGazNwV0xVY3AzMUN2L2U5RndYTGQza2J6U1ZXTWRJQTcvUWZIcE9VeWwydlRhbnJVeWhUZzdVTXdaQ2NpRDJNMFlvaEgzaGZIQTFGdXNKejluZkR3Zk1rb2hlTlpsTTNydWZxMC81S1FBYXZuRGh3cThTMFE5NkFpRGNFV09hcG1sSDd5SUsrcGhuTWIraVRhUEZUTDgrbnhVZW93N3c4THZIaUlVdXJWdi9XMHpiMWluNStpWVF2cmVKc0dqVHdrMHBQRVZSWkZycjk2eXVycjduN3J2djNyZmQ1ZFUrQjAyMnRyYjJaaEY1SXhGeG0vL1NCbzYydUVkZkltSFI5eXpxWXkxQ2FEUXQ3RHI5SG1yV0dOaGpHckVKZURFTjE4YXF4VmkyV0ZaRjNZUlRTc0VZUTFycm14NS8vUEYvOUpLWHZPUVA5eU5wc0crQmMvSGl4VnUydHJiK1ZrUytrNGg0a1oyMEQ1TzJtOEJaTk1EYUJwcW0yRkhzZTdheFgvWDZvRFlpSW5hTUp0S2hxV0kxbHRBYU1uRk5OSFg5TmY3Y1hmYkVUVXFwZi9TeWw3MXMzNEZuWHdMbndvVUxONG5JZndid0hBUlpBRzFtVFI4UWRDMmVKditvcjNsWDkxUGFFa1NidEVpZE1ldERXOGNhR3JiOTNxYkI2bG9yUmkzM3phT3JCMnpiR283RWtsR2RLWGdURWUwNzhQQStCTTBSRWZrQkFEYzM3ZUpkbXFiSm5vL1o3M1Y3dlN0Ym9LOUdhdk81Rm9rdmRRVXF3K09IakZmTUIyeGl2VUpXcnM3dU5XVmkxQm0rSnQ4c2RpNXQ1RW05UTg5NFBJYUkzQUhnajM3dDEzN3RhTkk0Y2ZQc0tCSDlieUx5citvK1RSZmQzTWVmV2RSODZxS1hkK0x6TkRuL2ZUUmdseW5YcE5GQ1o3NHI3bE12WVlpVmh6YzFKbW1MN1hURmU1cTBrRkxxdWNhWTU5eHh4eDEvOHpkLzh6ZGJDVGdCYUFEOHJESG05WGF6NHgwNzBuMWZ1Mmk2VEJkdzZvSEtMcTBTTS9lNnppK1dpbFBmdmVzZ3FwTUZUVUFMTzRxR1BrZ2ZNRFNSQWsyemZwcmFZRVV5Rm9pSW5ndmdPYTk4NVN1ZmRQQ28vUVFhRVhsOXFHbTZjc3lXWWJHNldMaW1SZG9XQ0cxTGFXa3l2L3FhZi9VeTd2clBtTmtaZTA5OW9YdnpxYTQxbXZxMzFXTlhUZFdxYldSQVRNdTB2VDZXNXlZaXp5V2lKeDA4VHpwd1JJUzN0clorQWNEL0FvRGJUTEpsVExDK0pFSGY5OVg5aXphZ3RYMU9uMzRGZllpS1VNTXQ0NDgxOVZlSUhhdXVlY3F5aklLcGlVU29hNVFZNjliMlhnRFFXaE16UDFkci9aeHYvdVp2ZnRMQXcvdEEyN3ljbWIvZGcyYW5NWmVtUmRwV0tyQ1gwdWZ6d3ZTV1pjNHZ0b1BYTlVXZEFJbjFML0FncXA5SGpGaG9TcmZwSWplNlROU21udGcrRXdFQXRyYTJ5Qmp6VDZmVDZXLzk0aS8rNHJHdk9JMnp0cloyekJqejU1NUI2eUlCZG1QaDcxUmp0UldpdGIxK3R6Uk9reFlNL1pKRk1pVmlURjFUREtkT0ZuUVZ0UFdocU5zcVZHTmFUbXZ0Wi84UU16K1htWjhVcysxSjB6Z2l3bHJyMXdHNGFSSG52Nms2czAvTnpUTFB4YlJEdVBQV2ZZYll1Y1VXWVZNZFQyeDJUbE84cGE0bFlvbW5UUXhlK05xbXBNell4T3NteHE2dVBadnVnVThVYlN2bmlCRUc5Y2FKYnJRakZVWHhIZVB4K1Bzdjl3elVKdzA0Rnk5ZXZCM0FtMzFEODdZbytqTGx6enMxcFpZSnBqYXhUdlZZUmowTHVlazdOaTNDZXVPTVdBQjAyU3lHTnRhdm5rM2RaTWExbVcxdDVseVRGb3dscEhwZ2JXeHNNRFAvekp2Zi9PYnZ1SnpnZVZKTXRkT25UOS9Pekgra2xMb3FETGIxamRIc05nR3dHLzVQbXdrVUxyUzJmdFF4aWpuV1FTZFdFbEhYS292MlZ1Z3lKV1BPZkJzeEVQb3NYZU1ibTdydnhFeTkrdkdaR1VWUnJPWjVmc2NIUC9qQmo5MXp6ejBQUHkyQkl5TFpkRHA5QnpOL2ZSMHdpK3lBK3hrNFRYbGxvUWFxTDg2NlJtbGFNRjE1Wi83dlBsMi9qZm9PeDMzRVJpdldmWnFtYzJxcjlvejl2U2tWSjFhdjAvVVovbnE2Y3V3Ylh2V3FWNzNyY3ZnN2w5dFVvN1cxdFo4aG9sZTBwV3AwMmY1OUhmOG0vNkx0ZllzUUVURVRwYzNrYURJLzYzOXZTbzlacGpkY25UQm9Nci9xNlROMS95TmsvdXF2YXlwTGFEUFQ2cUNPYWNtdXNZM2UzeW1LQWtWUlVGRVVMMTlmWC8rdHk1R2FjMW1CYytIQ2hkdEY1Rjk0djJaWi8yR25qVEgyUUl0Mkx1QTJNaUxVUURGbXF5a2xweXNUdksrbTlKL2ZWcGZqL3g2K0p4WmNiZHNnWXUvdGlvblZPL3pVQytocXZnOXByYi9qL1BuemUrN3Y4R1ZjWEF6ZzdRQ080V2tvWGZOdyttcTgrdGpEcHNyVG1KbTdFeE96U2V2MW9iZGpKZDJ4NHpUMWMrZ3l3NXN5Q2tLR3pjZDZ5ckxrb2loKzVaZC8rWmYzRkR5WERUZ1hMMTU4dVp0SGM5bURrSmRiNDlTZDlMNkxJL1FwWW1aUVcwT1JOZ203MkRTWlZHRkFNL1pkbW55NHRvSzZPckRhNnFGQzN5OTJiV0pNWXF5dlcxRVVLTXZ5Mk1iR3hzLzgwaS85MHA2WmJPb3lMYXhzTXBuOEpqUGYzRVJIeG9pQnJrWVRmYWprUmZ5Q3R2aEVYek1zOXRuMWhNKzZtZEptMHJXWlprM09jdGo2TnpUL3d1ZWFXa2pWTzltMFRjUHU4NGoxUjRnMWNXLzcyVFI1TzNaUGdwNE0xd0k0L29wWHZPSmQ5OXh6anp3Vk5RNWR1SERoWndDOFlxOVlzY3Zoci9SOVhWditXdE9tMEVWeU5MR05UWFIwMHpuRWtqVzdLUEcyK0V1VFJ1MVRTOVJFek1UdWYxc0ZhYXpUcUNNTWFES1pmUHQ0UFA2NnA2VEdXVnRidThvWTg3dk1mS0FlMmU1YVhQc0JXRzJtVlpkTlh0Y3FzU0RsSWxxdzZieWFTcHhqQzd0dHJrKzltMDdUMk1hbTNUL1d1cmN0dlNibXMzU05hR3pTdGcxclowVXBkZlVyWC9uS3Y3N25ubnUybmpJYXg2WFZ2SjJJanUyR0kvdFU5bjFpaTY5UGVVR1R0b3F4Y2sxK1RHeWh0OFdEd2o1clRYbG5kUzNVbC8xc3EwVHRhdmRWSjE3cVUrSjhqN2FBTEtDeUxMOTlQQjd2T2xHd3ArMTMxdGJXYmdMdy9jeE1iZVpMbDIvU3RmUDJxVURzV3dQVE4rTGV0RGhqekpnZld0djB2Y0svMWJPYTY4Y0tOWGFkS200S1lvYWpFcHUwUTFzRHdaajVGMk1ONnhPdVhjZWFLSE1YRWlDaC85V1czeGM3NzY2NDNtUXlZV2IrOTI5NzI5cytDZUNqKzE3ajNIbm5uV3lNK1ZFaVVuMjd4RHlaMG1aVEw2SmRtdUlZVFNaZWZhRjBKWWYycWM4Sk5VZFhUS3l0d1hxZEp1OFRPd3ExU0YzRGRlV3B0VzJRVGRSL1U1QTBMRVdZVHFmNXhZc1gzM1RublhmeXZnZk9qLy80ajkvb3RVMGZPbmF2a2pnWGphTXNPNFNxRFRUaEFtNEtGTzdrV2pRbFU4WTA3VjRrek1iaU9IMm5SaXphNnF1cFlyUnA0QlVSK2N5QzF4RFJQOTh0azIzUGdLTzEvZzVtUGhvTGZPMVhYNmV0YmRHeTRLbVRBVTNOT0pyU2I1cGlHMTFtYjR4ZWJ1dlpWbzhWeGZ5eHBvMmxiVWhXckFTamlUWHNFNTlxcTkrSnRlSU5mQjYxdnI2K2E3RWQzcU1GbUJQUlQvbVd0VEUySkthbUYxMnN5empuYlRlamFmZHJjNUxydG5vc1F6bW1aYnJtMXJRVnVyWFYyY1NvNm5wd3M2dWpaNU52Mk5SYklRYUtrSm1yKzBwTjM3WHBOVzNyUTR5ZVBVUkRUQW1JQmtURG1ITE9aSnRNSmpldHI2L3ZTdTNPbmdEbjNMbHpQOHJNVnkyNlF6N1YyTEkraEVjYk85Wlc0TGFNZjFaMzJHTzluWnMyckZnUldheW9ibHM4STVKeHdNeklzaXk2K0dNakZldWpTL29FdDJmbk9IdWdQcXJlYkVzR3BZMk5qUjk3MDV2ZWRIVGZBY2VoK1dWZTIxek9tTXQrbDZia3lHWDlzTHJXNjVPcHZkUG1qRjErU1ZOaWFsZkRsYTZacU0zQUNjQnRCQ0ttQXBTUitla0pEanczYlc1dXZuYW5XbWZYZ1hQbXpKbmJBYnltUG5NbHlmS2F0c2wwYWZ2WmxrOFdXOFQxbnM5TmdLMmJVN0dtSUtFMjZwTWRIbzc2NlBLRG16dmllS0Q0emNRQ3FlN3p1RkdLLy9TdGIzM3JrZjFtcW4wYk02dll4ZXBLclcvYnVYYURMZXZ6V09iNFhlMk4ybnBMaHd0bW1mTnB5Z3FvOTFEcjhqSERZOVJqUHFHWmxXVlpvMS9tZ2RMVXg2Q3JyMEVUQTFpdkVZcHRIalBBaEltZjViYlpQMDc3dkdSemMvUGwyTUY4cUYwRmpvZ29JdnJSc0ZSNHQySXFPMkhJK2hJSXUwRkM3TVZueFV5Zk9rWHJBZElVMFYra0FVcU0vbzBWc3pVMWpQZnZxNU1DTy9IZjJqcVc5azArTmNaZ01wbGdPcDJxOFhqOHBwLzRpWjg0c2krQWMvYnMyWmRsV1hac0o3M0Jkb05WKzBvekQvMk9YRSs5YjB1eHFXY2s5SW5SaEMybzZvUkNxS0hxbFo1TnZ0Y3lDYjh4L3k3MmZZM3hEN050YXB5SVlEd2UzdzdnMjVmMWRYWVZPRVQwTW1ibS9iQndkNXZhM2c5K1VkUDNxZGZ2OU8wazJ0U1dxZjY2ZXZQQ2V1SmxxRm5xSmxac0NrSWY5cXhMNDlqemxKYjczdHdBeFBzNlpWbStibGxmSjl2RmhUbzRmLzc4R3hjWklCdmo3cHQ2SWUvRW9XN2F0ZHE2dTlTYmFyVE4vMnliZG1hTVFaZnAyaFU4algzbjJPU0FXRE9RK3N6UVdLNWJEQngxdjZqdTh5aWxVSllsc2l5cnp0Y0hHME1OR1BvZElmTlg3MW5kZEg5aVRRcTlhRzJnUklQQzYwTUU4djRWR1FneEJBd0QxM3NCQm9ZRW1nVFRLZDkyN3R5NVl3RE9QV2thNTl5NWMyOVVTZzNidXZUMzBRNzdKVzh0MXF5aUxmYlNwekhpVHMrblRZT0dabEZiQ1hjOUViUCtYaCtYaWIwMzluM0NZL24zMTkvam14RDJhV2pmRnJUdXFwNnRhNXUyZGxSbFdhS1lUbFJSRkQrOWpMbkd1NlJ0V0VSZVhzL3U3Y3NHN2NjNFQzaXh3N3luV09Ka1c2K3d2aWt6ZTNIdVRTWlgzVWVvYTRVK3hFU3NXMmk5ekxzTzFMWk5wK3Q2eHRlSU5QUnlxNUVDY3pSMVVQU21EWXd4My9lR043emg1aWRMNDNDV1pTL3h1K0l5ckZxZlhmVnlTVlBEOHE0YWs3M1NPSDIwY1J1TjNKUmY1cDl2eXFMdWErN1dzd2JhS2p5N011T2JDdXo2bXJwUkxXT2tBbGxJRWpqek1qZkcvTlNpV21kWGZKeVRKMCsrZERRYXFYck1vTTFQNmVNSXQ5R3BpMUxOWGNkcUEzSFg0by9Wbk5UVDhkdk9xVytkRUJGdDZ3bFE5OGRDemRGM0UvSitTU3dRNnJWSXFIVzk1ZzAxbEw5ZWZ2U0hyOFVKdjEvbzI0VHZpWkVhL1VvTW1tZW5WbUNDUUlLNkp1djcyTmZwc29CU0dUWTJOcjd1RFc5NHc1RkZmSjFkMFRoS3FaZjZnVkJQQjJrS0hzWjhnbGdLelY2Ym9YM2lLRTMrUWxNejl6Yk4xdVRBeDJJb3NVYUlzVTJnbm5TNm5KWFIzckErRnQveGIvT21tNXN4ZXR2bTV1WkNiY3Q0RnhZWloxbjIwdjFrYWwxT1lEWFZqSVNQTnY5cDJXeUYrbm5FRm05VFQrZTI3OVFVRjJrNzU2Wk5aRkZmY3VlQmJ1bDE3ajZYclN5MXJ4SlZSTFNRdWJZYnBwcGk1aGYzQ1dvdE04eDJKMzVDMTV6TVB1WmlMRkRZMU5PNWJwWXVHd2p1MndTazcweWIyUGRybXV2WkJOQ21heGNqUmJ4R2lkVUNOZmxpL2RhS3pINktnQkRScUpEcVpXS010ZWJJdnBLWUFmODZZMENLb0hVSm9neVR5ZVJsTG12NjdHWFJPR2ZQbm4wMUVXV3hCZE9Wa3I3VFhha1B1SmJKUkc1cjVkcVhKdTFESC9mcHExQ2YwOW5XMENJMGsyS2FKc3hGaTJtckpwQTAzVU4vdkxxdkUvcEJYVGxyVGRQbzZ0ZmFHQU9DZ0VTRFRRbVdFbVEwUUFLQnFSNFdPdTcvb2dHalFXSUFveUc2aE9nU01QWjVLUXV3S1VHNmdJSys4ZEtsYzgrK2JLYWFVdW8yU25VRDIweVhQbkdIT2pEckdpdVd3dEswQ09zVDJmcjBDSWlabUUwVWRqMk9GUXNBaDc5N01EVVYyclg1UDh0TW1vaHA1TGd2NWpYZVBCVS9tVXpWMXRiMGYrNXJydTBJT0NLaWpER3Z2aHcrelY1VWlPN2x1WVlrUWhPdzZrNTB6RS9zK3I1Tlp1RWlIVXk3YVBZMmJkM1U3YWZKbEd5cTMrbEQ3Y2ZwQVdrY0F4SW5CMlRPN0p1Wmt3SmQ2cGU5N25Xdk83cm53QUZBU3FrWDdKWmZzNndmMDNlNjgwN054V1VkK0xaanRRVkltMGFjeDlveWhiL0hGbXNmczdUTkRJMEZUNXVhWmpTRklCYkoyRzdUVm5NK2p6UmZzL0J2VFYxeFBIaDBxV0dNdnJIY1dudjJaUUZPVzc1WGJMQlNYdzBTb3ptWFlXeGk0T25UUUs5dmxXTHMvYkZXUzIxellQcG9rYTRjd0s1T251RjV4YzYxcWE5YVg2M1VWZVhaTkVHdUQzam4xcERYTXlLbzJPV20rMExkNnlPOEpscHJKZG5ncC91MGtkb1JjTTZlUGZ0cTdIRlR3NzAyKzJMeGh5YXdOZTM0VGVaTEg3dSs2ZjNoNXkycWRXTUxLYllCdFRYSENBT2FkYzNZOVQwV0hUM2ZEM0FWU2lEU1B0bTYrbW5hWXpwejc0SE5jZFBhZkZ0WmxzL2VVK0FvcFc3emZkT2VTdEoxbytwQnZHWGpMVTEyZlJPUW01b1RMdXRmdFhYcGlRRXNYRnd4VXkvTVN1anFqck9UZXhIdlplRE9ENkdtYVo4UEtqMDJ6Sm5wWm9tRDZXU2FEUWFEYitzaUNYWXJ5WFBoMk16bEFrZ1hWZDFVenRCazdpM0QrdlQxTjJLK3dhSU42R05OQ1dQZ0RkbTNwbUt2R0dQWGxpVWVNN1A3bm5PUEt4bVlaek5IbjBEV0lxdHJuT0RoczZXREU2eGlRYk5zYWdNWUE2TTFuVHo1eEcxN3BuRkVoSmo1V1cwdGtoYUo0M1RGYXZxeVMzM0EydWVjKy9vMXNkMDlOSTNDaFJiTE00dVpnVTN4a2lZdDFIUWU0ZWZGZWtDM3BjT0VDYUN4ZStKQjF2UjkyaktpbTFpNU5qK3JjbHFxNDlITWpYRTRJUGVBYTlUaEFTTEdRSXdHeExpZ3FmZ3NOeHZqRWZzYW96VUlBbVo2eWEvLzhpOC9xMjI5N3NRL1VVVDB2VStuL0xSbHpLRStXcVp1VnplTkQxem1QSnFJbFZnOHAyc2drd2REak5FTE5VL1hwdGNueFdmSnV6UkhLMWVhcFg0UFJZREk5ZlQzSXR3WURBQjI4UjBpQTRGZy9kS2xHei8zcFMveG5ySnFlSnJKb25Yd1hRczNER0tHUldKTmxZMWRaRUFmTnJMZVlLUHJlM1ZOZTY2YmVlRjQ5OWlzbTcyTXRRbWtrYUd0VERPZ3RldlFOaDhuTU9mS3NzUjBPdVhycjcvMjVYc0NuTFcxdFJ2N3ZIKy9hS1JGV3k3dEZ2aTYvSnMyVnFqcnU3VDFZRzd6TTJMblVZLzBkNlV3MWYyZHByalRNbVp6VEZQWXNJeU56VFJXalBwSEI3WGRHb2ZTR2lLR1RwMDZ2VGVtbWpIbXRWbVdxYVlZUUIvbmZDZHNUTitMdjRpUDA5ZDBhcHZqMDVXM0Ztc1EySC94dFBja2FET1YycHA4aENaYUNJcW02dEI2WFUzVDlZck4vbXd5TVp1eXpFTmQ0MEVqa0VhUTlpRnp0cGwwdFc2Z1dodG9iWjRsSWtSRXN0dW0ycjQyMC9xbXJGeE92Nm5wWExxWXFrWEhrRFMxeXUzejNsam4veEQ4OVFHNGRUS2tyVGw5T0lxamJkSHY1blZ2SzR1UXViODdzRHBRWnBuNloyZ1o5Y2xMbmhneDg3T2VUZzcvWHBtRmZSWnZGOVZkSnhRV01TOFhtV0RXdHZCaWdWTmZJdDhVWE8zS0ZBbDlwZDNhNExwTTN5cjNZTzV6UFl3c0k2ZTF4c1dMRitpZWUrN1pkUitIQVh6dmZnTkp2d1lQdTA4UTlIMXRuMnpwQnJPNEUxZ3hyZFkwYjZhdDdyOXQxbWY5bkh5WmRDeXJvaTB0cVMwaE0wWUh0UDJmZ29ldDBjR01hUlAzZXhXMkVVdFhoNjhUQWFxdU9QYW5Ja0l4bVdLdjZHaGFwczZtNzZLT3pVM3A4bEg2N3FCdGZsRGR2dS9URDZCdHRtV2ZZcnF1RWU5MVU2N05OK3FLZTdXUkNYVy9xeDRBRFVFVEExZ012TEZxMGRCa3ExZWRibVAwSUdCeUR6RXcvandoSU9lVHdBaEVtOHB2WVNMbkR3bkVXRGZHZ3N2Nk0wUmtHM2lRUUVnQVpwQXd4QUNjS2JCdDFJYjN2ZTk5ZTBaSDd4dldiQ2MxL20xcC9Jc1NHOHVPOFZoMHcrbHIzblFGVE91Z2lOSGxmYjVMazRtMGlMbmFaREhNd09sOGVkTVVONnFmUzRmUHVjMXNzODhYUmRHZGo3alRoYnFmd0xPYnBsNWJybGliWGI2VExJbSs5SE05ZHJLTS9SOWo1L3d4eTdLYzZ4RGE5VGxOMTYydEkyblRCaFg3TEtsbEMzaW4za2c5TzZFOWRyTU52RExQc0lYa2g5YWFIM25rNGR2MlRPUHNGMmxyMHRBVmoyaWllTnZNeHlhdDJ6ZnBjUkdtcktrc295dW8yYmRXS1phdjExUXkzbFppSGFiNmRMRnNkUll2VnM1ZDF5YjJ0VFdHdXFQZXFWbDd4aEpDSld5dHBjcXBmdldlQUtkcmNUWVZZQzBUMStrRGhMYXVrRjI3YjlkbjkyR3VZdUNLTGZxbXhkaG1RdFlkOEtiR2c3SFpuVTNuRnJzR3Nmc1VkdWdNejd1dGYxdjlYR1BySVFhWVptMDAzOTUyRVpJbGJuTEt0bmlRQ2FsMUNNclMwRjZRQTA5SmN5emNyUmRKR20xcXNMN1RUYWVyakxoT09NVG82VDdkWjhJeEhVMVRzR09sQ1BXL041bU5YY0NOdGNMdDJnQ2FZekFTOVZFV0QxSFV0SFpWcG1Ebmh4b1lmTVVEcDYxdW8wc0w3bmEvdUtia3l5YjJMVGJDdldzS2RoL1RzdjdkbXpxU2VwK25qYVZzeW9qdVcvbmJtRTlXalNUY2JyYkZrano3bXFiaUtPbTVFZ1JYYW1EOExGRlh4TGRyd0xsNDhlS05YQ3VXMzJuc1pEOUpHeUd3MTkrdm5zN1NacktHMnFNcmphV3RhSzJwYTJsb3F0VnA5bGdRczU1SjBHY0RpcDNQbkJaemxaazBwMjIyQTJhUmdycTVQbml1bm9kbUtpZkt5TzBLY0VUa0pXaEpSK2hhak11bzFVWGYzeWVHRVM2NnBzYURYWEdnUldKVmJYbFU0VUtzeDVYYStxTjE5Y1N1YTdkNk04SW00cUh1ZjRVMU9Jc0NQVFlwTGhhemFkS2c0dXBrdkdhd05UVWFKQnJhTEtaeDVrZ1AzOWhRZkZ6SHJlcEtDOUVMSEtaa3Q4Z0I2bXNTN1FWZHZFaE1wKy9VcjkwY3g5RzNIWEFYTVJCYnZQVlNoYWFodVRISHZPcyt4Y0FZYys3cnY5ZnJlR0lFUm93WXFGZWNOc2Q3YXVhZFNHd1kydzdXVnJpd2c0Mk04SzEzMzMyMzJqV05FeHZqc1V3aDFsUEJSRnYyT0gyNjJyUnBwdGo3NjhlcVp6akVkdTIyM0xFWVFPb2c4Uldnc1dhSDBZYm1EWDVRMytCbmErOXFCRmswdXpFcjFxT0dwTW9vbU8vVEJtcktIbGdLT0ZyckNqeE5MRW9iTGRwbXh2U2hmZnRPNXVyeldZdWFpWDFNdDJYWXVyYnYwV1N1eGJSUS9XZWRSV3RLMldscUZCaHF0NWlwRnZwR2RRMFNhcFVtNWkxV0NCZjdIbk9GYWkzK1hGTnJyZGpHNXAvMnY0dERaUjlRWm51MWMrKzB2bWJSenBSOVdiSmwvYU8yOCt1N0NXeGpkWG9rYkhiRkp4WUJkQk5KVUFkQnZWZENETXh0VGR2N1pJREhlaUswOVgyYkVRVTJZNkNlVFJEelc3ZGZlOExjSlJlcFBCajdlbW1kT2JvYlBzNitNc2wycTF2bk10VDJiazFjNjZOdHV5THhmV3A1bGtuaHIydWV1dWtXam54cyt5NzlSM0EwUGVmTnErV05zMFcrUHpQdHJzWWhvdnNBR0JIaC9UTERzMm5VeG00RHMya3g3c1JYNmxzcTNVUXVoQXU1VDNWclY5WkVmYlpQYUhZMW1WbE5HamJtUnpWbEUvUUtmbTRELy9LalZMcmViWXpzcnNhNTRvb3I3aU1pM1dTYTlhbSs3R3FTMThYTDl5a00ydzB6clNtSnM2MVV1RXNMOU5uMTJuYnUyTGlPUHVrbWZTajlPaE5XLzR3bW42VXRlenMyRHI3dUV4bmZ3Z2xTamVZZzBiVmFHVHVlQXpCQkx6VXo2NHNHNzdmNFBsR3puMFNZOVkrcStraTVSbEV6WjhlV01RQmdDRm9VenU3a3FqVzFERnJVcEZ1a1dVVmZWcTlQeitNK24xOXZKeHN1bmlicWU5bWNxclpjdVRiaUkxWjgxalExT25iL211cisyM29rdEtVaE5ZR28vaDFtMTNJMkE0YzhTTHptQzVvTHptSTVkaGFPRVcxbjQ4eUJRdWJtNVlCbW9KcUJ5MGRXZ3JYalpsR3hmY0xzaVk5ek9jZHU3UFpuZFRWNWFKc0IydFpFYjZlYlFoL3RFeU1aNnFBSWh6cDF0YkxxU245cGFvaTRTTUp0V3l2ZW1LOVdMM2FydEI4a21tNnpKMUlXYjcvenpqdkxYUVhPWGcrSXZaeEVSRk9Ldk44TjJ4enVQb0hUblRhamFQSWJ0a1hDSTR4Vmx6OFcweTV0WTBTa1I2cEwwd3pVSnRvNWxnd2Fid0ppaTlndW85OHNlMEpIOTYwcFdUU08wK1pidFBIM2ZlYkFOSmtWVFpuVHNmZkV6TFN1Z0dkZnVqYW1CZHZTWXBvVzhTSlVkVDF6dWlsZUZMdDNmV0prVFZxbUtiT2crZnJVWWpxUjc3V1QyYkgyWG1KdjR6ajF1WlJOZVZLN3hTbzFIWHVaMHQ0dTI3eXJucWJMcitwemc4SVJnVTBKcFA3NWVrK0FzSGxnbitrRE1SRDZSUnZXMURUUnh2VWtUOStndlc5N3A3YWFuQzRXeldkRjI5Zk9RRk5wc2lVcWNQdXV4elpySXR1cEp0dHQ2bmRSMDJXdmZJcXVycHRkZzU3MnlsUnRLdXR1Kzl5MjB1ZTZ0bWtkbXhINEhtM3NXbHZNcVQxRmFQdm9qZnB6Q01aM3hFWjU3Tnp2dGZFYkloSldPTC9iNUlBQjhKZmh4T0RMVFNhMDJlMDc5U25DN3hNdTByQVJSNU9kM2hmVTNXUDZtbWxsZjM1MVU2Y056RjBMdW0yZ2I0d3NhQnVtMnhaZWlNV0k1b0VTUHVxNWF1MUIzOTNjdEppb1BIamkwZC9ZVmVBUWtZaklKMlA1VDMzSmhENDkwUHIwNEdvNlh1d3pGeUV5WWhXU1hiNWQzMTIzRHdIUXhKeDFEWWpxTThXdEtiNFM4K0g2ekI5dEcvSGVCdUlZR2JGdHNvTXg5aUVHS3BqcElSQVkwYkFkYWgzdExBYUFDWDVxRy92QkxOYmpYeTh3Z0JoQVN2dCtFaEFEUWdMS0ZMUUlQbmZvME42UUExMzI5VEorVE45SlpIMnIvYnAyb3liZllwRUc0WXRvdTlpeFl3MEgremozZldOV1RTWjFUSE9GUGxqc00rditUOVA5YndKZ204OGpBaGd4YzM1TnZUclRCenFsK3JjMjZyRDZ2WDcvL045bmMzV0kzR0FxTWlCaS82VDllNmIyaGh3SWIzam92TzVVWmU1bVhjeE9uTVhMNmJmMXZYWjlOWEJiRDRDbUJoNU50SElNTEYxbVdSOFNJS3FoNFVxbHhXeHIrUlQrM21jdTZyYnJHWXovbUxNK1pGYURROFJRV1daeFNuVGgrUEhqZTBkSCt3c2I2emE1aUFiWWFiNVgwN2s5RlVxNUY1azZGd05OdUlIRllpOXRZQTN6eitvRmFXMDl5dnI0UzIzTkU2UEhNTnY5bTlqSWRjeHRCajAzcCtqYW5HVkxoN1ZHU2ltSU1iOTUxMTEzNmQwbUI3WlZGc1pzNWFZbUZHMk54WnR1U0ZQc3BFOFpRUnN0MjBVeU5PM1NNWDh0UmhIWE40VXVwN3J2bk5DWWxtNDcvNmJLemFZK1o1NEk2ZElXVGFNUlkvNUxtNCsyL1JyR3ZvZTc5ZzNmdDhsZnJOK3piUnRyZFY2emM4NnlUTytKcWFhMS9xSlNTbUlqcC92VTdqZlYyM1E1NDAzK1VGT2p2RDQrMHpJZC9KYzVWcCtpdE5DOENWUDQyeFpjVzZ5cUxXbXpLKzhzVEh1cEY2ajFLUXVJVWRaOU5HaGZYN0dQSnE5ZVJ3VGV0ZzZDV2FMazJuYllLUXphR1BPQlZwZGlXZUFjUDM3ODl3R1VpNWdhZlNuWHBrQmdINXM1M0lYNzBLWjlKM1l0Y3Y1dFBrQWJ3SnVLeGVxN1pxeFd2NmtwUnB2ZjA1YXRFQnZrRzdKMlRUNVBWeU9PTmszVE50bXRsNC9VbHN6YnRwbjUxN0ZkTDZ3VVRDRVA3eFU1SUcwUjF5N0dKNlp4WXAxbVlzQnNNZ2ZiZHZXK0lHM1NhbjJySzlzWXVTWVRybXRpV1d6QnRoMC9WaWRUMXpTeDE5UVhmeDlOMjJSbXhvN2I5SG1MK0UyTGJ0Qnoycno1VmU1MUJMWXRBYzZyMWRVTGV3bWNMNHJJTFg0WERFZDdXNWFFSytwUENXQ0U3WE5rb01rMzloNkFTRUV3aHJCekJuMEJPSVdLTWF2WVJLbjExaEl4VU1aL0ZnSENyaUxXemtNeFVDREszVmxyQ0FvSVNvQU1EQVNhRlF5eHJmMkFCc0hHQWV4cmdZSEp3QkpReFZSMVFZR0lJRGRzN1dQNEJpenN6czBlQ1d5L1VyamVSVnc2dXhqQUtBaVo2djlpWEx6QlVhOHNhalorWEZ6OGdmelFWNEVRUU9EcWtpaGhHQU03dWdJTUxRcEFBY0hFcGRvVFFMazdod0lpazBaejJ0L2JyaWJ6c2U0MU1UKzFVVk00LzRJaDBDRUpRTm8rTUh2TkRCQmNqZmVvblB6WlFBOTdvMmJlZjhVMkV6Rkl4R29ZNGxsUkd5bDdUVWk5NjY2NzdqcS9KOEFoSW4zNjlPay9ZT2EzRUJHeUxKc2IrMjIvbUhFVDVRVW11d1NSREFLM0NFVURBckM0SFFvWi9KeEhDUzZFeDZoZ1BKZTRNT3Q1QXBBb2lJeUNjL09ZY3BxUEpnQnR1bG9OVi9Ea0FFY0EyQWh5dHpnRmdDSmxMNDFqZFRTTm9QM0NoQjI0SXNhQTJDNWVROW9HNDVqdDRZbnM1N2lCcitMbXJSaTIyYjNFL3YxMkpvdWhHWHNrQUl4cjgrVW5oV1ZnYUJnWUFiUXdRT3o2SEZzS2w0d0dvTzF6NU1KN1pOeDFZSWpPQUNvZ1VnTFFWVzBLODN5Vll6M2cyejQ1b05uMGFjdExpNmIvVk1Wb0FxbTBuZjEreGhlM1lkWnJvTDUvYjJOUXEzSHRFdFV1MWJyQmRzS0tGWU96ekFRVDMvY2tBSHFpTEV0RFJPd3Y5SHpyS0Zkd1JJSUpEb0Nob0NRRFFRR2xob0lHaTdhN1BLdnFPd2R4S29lVERNQm9wdWo4elhPUlpDRU56WnVoNG5XYUNWWHdUR0IzWUlCaFZ6QURvZ0N4UGVpWUFERUVNWUNpelAzZGdtVTZuS0RrRWhDN1FCa0NzSGI2VktOUUt6QlFBQXlZcko2eEc4T3NNNHMySlpnSkFnMFlWK29NZ2pFYXJqYkxMUXczL3dXejJFV2hwMDVMV0EwbWhxQ05nUmg3NnpNb0MyWllyV2Vnb1Frd29zRTBoc3JIZHZmVkRERUtMTGxUbTFhckdsTzBzbm9MbHpmMzhGTXFqV1IwQlJvU1k3K1gwN3JkODNsMnA2ekZhaUVDckkralFmTE9Wc3R1cDhBNWZ2ejQ3OTUvLy8wdnpiTHNCMGVqRVE0ZVBCZzRYREpubG9nWndiaUZKYTRLejFDSmtqYnNyaW1ITFNabysyNGdiQUJNWjlySFI1TEpCZWdBR09RellBVnRmMEIyY2hmTmNHWVhUYVc1Z0ZKTklNcnRac1pnQWdaWDVoUmc5QXFVemlwVno2SUJBekFad0Job1hhS2NGakM2Z0RFbHBDeGd5aW5LWWdKZEZEQjZpdWwwQ3BEQmREcUJrU20wTG0xL1lsT2lMRTAxd3NKK05aY1RSMnpCaFF6TW1kMWNpQ0hJSUdLZDJDeFRHR1NBVXJrMU4xa0JuSUd6SENCQ0NZRm1BMkFJU0FZeEdiUUFJaVcwVEdEc2hPVzViT2t1SVBSbEZwdUlnM2sveDRIR2FBc1c5eE1pWUJpSU54VWJlaXJFOHVyNmIveGVxemlUalJrRWtzRmc5ZUd1OSs0MEFHcis2cS8rNm0yVHllU2xBRzdPOHh5SERoM0NrU3V2d0lFRHF4Z05jZ3lHUStRcXc2QWNRMUVCWXNCSUJsSUhVVktPZ2djUW10cGQwNWt5cU8xNnhyY3FaVmZOU3JPZVdGYnpNc2hrdHIyUGl6NFRvZkl6eUF4QlptUzFBQXlBRWlTbDh4VU1JTGsxWjZTRTBSTVFwdEF5UlZsc29peW5vSElUS0Njb2l6RjBNWUVwSjVpT04xQk94cGhNTmpHV0w4Q1VHekRsRkdJMGRERUJvd1MwZG1rZDF2UlFtVFZmczR4c0RwVURQcnViUjhhcFNXRVk4UkY3UWtrS1phRlJhbFFheDJpR0lRSXdndEZYV3grT2gyQzFDcFVkQXRRS21JZWc3QkMwdWdiTW0rQk1RZVVFTlJSa2VRbW9LVmh5S0ZtWjgxZGk1RUFZQjZrMzhhaFQxekZTb2M2d2VUK0l4QUQrZlRJYlh3aHhJQXZvWkxTa0V6WFIrK1RtR0ZhK0Q4VmpjVlV6ZThMN2k2TDQ0cDRDQndDKzVWdSs1Y0cvL3V1L2Z0djZ4dGIvTVI2UGVXMXREWTgrOGlVb0FrYURISW9KSzhNY3gwYVA0Y0JCZzlGcWp0SHFOV0M2RGxwZEJhd2VnRktDekV4QUhCU2xTY2ljS1VDR2dCWVFsRFc3ZU9aVXdoQ1VzWDZHVDlnVFk2Qk5DVjJXMEhvQ2tVM29jZ0t0dDJETUZzcmlFb3JwQnNweUNwbXVBY1VtcHROTlRDWnJBRzJDTUlIUUJDSWxoTFpBMEc2QmwxQ3VMajdMR0N0a2NJZ0VQR0RRQ01nZHlVQkcyeHdvMy9pT1puWTdaMlNKQjNGK0NNVFI1d3p5ZmxrVktXQ1VybjBFS3dXQ2doR2cxQWFsMFRBeVJVR1hVSmFFOFlRd21TaE1pd3pUcWNKa0lwaktZVXpWTThGcWdEdy9CQnBjQVVPSFFMd0NsUjJBeWdzTWNvMDh6OEhNYzQwbVl5VU1iVEc2dWk4VDAxNnhiQUZBS3RNTTR2cEV1eVJNV1hEcVhMVHdyb3JWeklQR2xROEU2dzZ5TWhpKy81MS9mSmZaYytBQXdCMTMzUEdPOTc3MzdwZXNYYnIwZzBNaWxNVUUwQVVtNDAxTXhtTTh2bjRHRi9LL3hOVlhheHc0dElHQkdrTDBNMkJ3REFYYm5YTElOeUJUR1pSUzlvdHkzWjF6RjlGbHhaYkZGSVV1b0VzTk1SdGduS3NTQUsyN3BLRjE2VXlpQXFBU3pBYUtORVFLc0V6Qk1HQWxHT29NR1dVNHFBQmFOU0FVQUFvUWxRQUVta2JXUlBKTnY4bDJkQ0FYQTJCUlZUZElKb0xSR3M3dGNMdHg2Wnp4V1E4QTY0KzRnalFtTUFsQVpmWC91UkNkTTkzRU44K0RJTThJQTJKTFRQQW1tSE9JWVlnTVFNaGhES00waEVLdllhd2Z4Y2FtNE5MR0FGdmpZd0RmZ2l5L0dUa09Rek9nMlg1dW51Y1ZjRHpKVXljSlloSDRlcWx6MzJDcEgrWWtRUytCeW44MTNSTUoyc0JEUU5TN24wKzNjWEViQng2bDJMRFFINkJINTdaZEFRNFJtUWNlZU9CL2ZmeUprN2R0ckYrNlhmSU1aS1pRQkppVkZVeUhRMlNQZlNNMko1L0dzV2Vld3VHVkRTajlLSUJUTUdvTW93cG90V0wzWStjWTg5ekFINGFJY2czaXZPcDJNeURGMHF0S2htQzJPN3ZBN3VaZ0F5aGpOUlp5c0p0SXpGSXBKckJtVFBNeENyZDRJQVRpREN5WnBZa0JqTVMxTGlKVXBnTVR3OEIyWlVGbVlHQ2RkVTBXOUlJZzZLaENNMEZBYkdsUFFtYXpjOW41L2hBSWRFVWlVRWlTc0dQY1hJZCs2eU1DQkFXbER6dWZTN3VZOUFUTUdya0NEcWtjQXoyQ1dRVW14NmZZTWdVdWJHN2d3dnFES01xaklQMThxTkhOR0F3R3lMSU1aQ1BuOEV5cDFocGxXYUlvaXNiUjdXMmRjdHFhcjNzTjR6VU9qT3VURUtuRldUaXBzN1BFSmZTRHJZK1RLWFdDeS9KOG44L1p0UmE0dDk1NjY1bFBmZXBUYjFOTWZ6d2VqeFh6QVJoZDJxVng0RXBzSGppS2pTOXJETStlUW5iZFJXQTBnREVIY0VCUG9MQUZnNkZWTW1vYmIrSmlEem9nRWowTmJmZHRJZ0lwbWFrbk0rdWJaUytVQVdRQ01EbXFsMEFxSk84WXlwTUw3djBHdXVMK1M1TEtrNndDZkpiaWNNNjZBNXhqRDZ5ZDd1M3JrS2x5MnFicWdtbFQydzEweFFTU245aml0RXdWanpEMkpyT1FHMGR1a1NNd1lOYVd5QkI3QVVVeUVCZ2tCTU9Nc1hMbkNNWlFLVnh6ZUlKbkhOUW9pdk9ZVEI3SHhxVmptUEROeUErOUVHYmxHS1lEQWRoQXNRTGxVeFRUQXNVYW85eGdsSVZkNjZVSUNxV3RpOWhRb1JwcUsxczFXa0JNQ2RFRnlHaXdLV0c4Y3FrYVBqR01sQkJpUnhvWnNHOGQ1Y0lIYzRWdHRaNFRzYnpBZXZiRExKdEFvRkFnVXprc3k2L2U5NDY3L3ZUYzcvWmc2WGExZC9Uem52ZTgvL1RwVDMvNjMyeHNiUHk0aUtBc1MyaXRrUk9RSFZ5QjRoZmc0aGNmeGNwYWdTUEhOakZVNnlCUk1Qb2dvR2hiZTlONnRGZnFrVjRXc013MFVGVlNTL05EVXUwdVQ0N05vL25YMXV6ZytjK1pEVlgxZmV2QzgvSEpobFE3enZ5dVM3UG1lTTRjWVVJMWVud1dmSnVuZTVoY3FwQVJFTnZkWEJGRHd1T1R2ZlZDQVRDZFArUi85MXVPWFNnS2loU0lGS0FJS2lNTWg0d3JqMDZ4Vm53S1p5NDlpR0w5ZVZnNStGK0JCMWVBb0FFY1FqNEE2RWlKWXJTSlN4dHJtRzRXTU5NU0NobkF4cEVVMi92TmJUUFhmUGF6bWZrdUpnaUFHZ212T1NLOTFEQTNYR3J1dWtmQTBaUmNIUDVrSmhnUlpDclhJdnJmRVpGY1ZvM2pUa1FlZU9DQnR4MDRjT0RGbTV1Ykx4b09oM2FuTVRabWt4Mi9HZVgwSCtQeHh3WEQvSDRjdS9JMEJNZGdjQlNRdFcza2VtdW04Qks5bTVmbCs1c2M0N1l5NWZuc1pidW8vVTNmeHVZUWIzdi8zTEZwZm9LWW1KbjJJekRBbVF2S3V1aTNOMjlkQmdQRFJjczVjMVE4ZzBsWmZ6R2ZRTk1HRGg4YzRlQkI0TUxhcDNEaDBtT2c3TG00NG9xdmhkQlJsRXBCMUNia2tNRVZoeGg4aVdIT3JXT3lVVUpqdnJROGJPeXgzYWN4RGJFY3N5MkRZQzRvMmxMeEdrdkxpbFh1MXJXUFo5dWdGRWhsSUZZbkpvWWY3cnNtZG4xYXdhMjMzbnJtZ1FjZWVOWEt5c3Avbms2blg4L015Q1FIQzJPTE5VWmY5VFVveG1zNGMrcFJIQjZjUmpZYVE2c3J0bWVienFsZW1kdVJZMDBhK3BSdE55M3NQdGxGc3k2UVljcDdUQjlTeEx5bVJzYzZudW8rODR0WnVSQi82Q3NUZzBoWmM0d1lRa01MSEJJYjd5RzJ3Vnl4ejluWnljcUMxNWxzQnBrTkVoTkFpa0hUQVFaaWNNM0JpN2pxMERwT1h6aURpMmMvZzlHaGIwSis0RnJvakVINUFJcUh1R0p3RUFkR1d6ajcrRWxjMnRpb292MWhJL1pZcWZmMlNRTU9JQWo5SGFDS0NNL2w2VW5WdXFsdGt3bzNIcDh6T1U5SkI5Y1pYR25oZ2NyZTkzLyt5WitjNjd1NTdzbVlqMXR2dmZYTTV6Ly8rZi9KR1BQL0dXTXlHSURORUpSZmdza05qajM3K1RoejRWTTRlK0VjcnJoNkN6UllCNXZtUk1MNmQ2RU9iZFNtR1pacDViUXRwZHp2VnBFYkdBVW1tWmxXOGZFbGZ3aUtsNXo3d0p4alRBQVBFaUV3WlRZWlVRQWhCZUtCWFJUS21ta0VCaW43MmxtTGk1bjVadjB4bXhuQldJR1lERXdYb0tRQXBrTmtHT0xZSVkyRFYzd09wOCt0WTF4OE5RNGRldzdJWEFldGo0Q1Z3c3JxS2xhdVZ6aDk1aHpPbkRzSHJmVmNxNnVtM0RRSTVsby9tU28vVFZkcFVLaEFaQUlRMFB3MjFHWUZSTzROR2J0QnpFdzBCcXNNckhLUXlzcENGNzNOdEIyVkZYVEpMYmZjOG9rc3k5NEd3S2dzQTZEQVpLQlVBVG93eEROdS9XWThzbjRyTG02dXd1aEpvd3JlcWRtMUd4V2cyNDVCOFVoNTNWU1kweWdVME13MHU4R3hUcHNoa1VCTUFPY0E1UUJsSU01QlBBQ1FneWdIOHdoQ0F3Z05JVHlBMEFDR0J1NjVIRUpETUk4c3VNZytXSTBBRENESVlMQUZvWE13SUJnNkRNRVJDQTRpb3hXc3Fpdnd6S3VuT0hid0JOWlBmUVRaMWlOWU1ldFFaUW5Gakh5MGdxdXZlUWF1dmZaYUhEaHdvR0xrd2lGVVhjTi95VE9qamsweldzUG9Fc1psQzBUTEJyb0svUkR4ZDFDUDRUanloVE5rbFAvRmM1OS8rNzJMcklrOUc5ZE9SRVpFZnU0VG4vZ0Vpbkw2czVrU0hoWWpaS1JRTUFOWFBSc0hiL2htUFA3SUdRelZTUXhXZzBHdmtReTczUzZ0WHV6TCtKeTdlUzNSK0hMbUdycm1HMzZUUzBEMFB5RVViZUFPNTVzSVo4NnFjUnFGY2hBVWlCak1BeGh5c1M5U0xoZVBIQ05JbHEzaVdkSnI5V0NybVRKMXlWTDQramhLakNCVUFMUU8xaGw0Nnpxb3dUcXVIRTF3Z01jNGMvNmpvT0ZackJ4NURzYlR3NkRoRmNnR1V4dy9maHpENFJCUFBQRUVUcDA2aGJJc282VWxNMzlmWm9tY3hnVGtnSGFkYVd3aUxiczhqNTF1akhGV3pRYVVtWFBKVjBidnYvUE9PMlZmQUNjRXozMzNmZno1eG14OHA1cGVDWVZWRktNSnRuTEM2clV2Z0RsN0x5NmVPWW5CTXlZWWpVYU5GL3pKRkFxMVJFeHRSeHVNTkxkR3F0ZUlpSkVxVzlvSElLdlhzRFhOalBOdHhCQ0lGQlFQSFRoeTkvbVdOYk4relF3MFRBUmg1ZGkyQUR6aXpCWnpMV0FVaXZ3aUNuVU9XZ2lrVnpFaUJWWVRrRllnYlREZ01mSXJKeml6L2xsY09MT09sZU12d3FROGd0VmNRV1dFUTRjT1lUUWFZV1ZsQlk4KytpaTAxc2l5YkZ2dGtNQlUvbzN2WmdQSHN0bk5ZWll6U0pHTlpHbFRtN2F6YVlvVmhzUDhvUU5YNXIrSEJjZFZYWlp0KzVPZi9PUk5XcGQvWEU3TjE3TlNNTkMyS2tRRWVycUJSejd6WjdqRy9OODRmdlE0UnZrWUtwL0FZQWdqSTBpMkJxRU5LSDJvNW1SM0w5VGVuWGZjSWdwSjZwQU1JSmE1ZEkxdEpnRzE5N0Fta3VxY2pRY01CUzJFZldvL1cxTk1vS3pYemxhN2lLeUFXY0ZQYnlHMjJzWnFId1hCd0xVM3NuKzNNUjF5Y1NiVWlCWFgyWVdVMitrekNCUU1tWmttZGZWTVhGMGFBUnNYUStFQnptOE1jSEhqS3F3Y2ZoN002SGxBWG9ENUxFZ2JTRG5FNlRPYmVQQkxuOE81dFM5ajYxS0p5ZFlVUlZGQWwxT1Uwd0s2bUVDWEpjcWloREVGaW1JS1hSUW95OEltd1pvU1JqdksyaFJWNXJqM2orWnVYZDNYOGZFeDJBMEdaSE1ZUVFiS1YzaXlRcFlOa0ExWFFjTkQvK0dkNzN6bi83Q0lmN1BuR3NmTEMxN3dnb2NlZU9DQmY3S0p6WGNYUmZFaXBSVEltV1A1NmhXNC91Wi9ndk9mT29mSmhZL2htVmRQc0dLR0x0QjNBZG9RQ0VjZ1V0YkFRcTJnV2RRVTg2SEg3WVNFVk05MnhRU2F5UW1YbWhMUXluTU9MR3pDSmlPck5JaEJCaUVHOFFCTUk0Z1FGRE5JWlFBcGFPM09tVE13aGdEYlRBUVJzZ0ZGRitIbGlvOElRc2ZPVkxHaUlGQlYzTGxPcEpRZ1czNEJjUkVod1pIRE9mSVZqU2RPZlFMWjRRS3JCNjhCWkFURkEraTh4UEhyRGlGZnZRVVBuY2p4ZVBrWVRIbkpoaVZxZDI4MkhNb1JCY2JNM1FjVGp2SVFhZFhrL25tdU41NzBRR0x2WjFyZ0tHWU04bEZobFBxbFJVRnoyVFNPbHdjZWVPQ3E5ZlgxZDR2SWkwSjdYcGtjeGNtTE9QR2xYOGZoNGNkd3c5RWNCeklDY1lGU2p3QmFBZFI0ZTlickhIQ1cxemdXd3h3c2NsVFd0ZjBzMldhcXpSL1B0TmFGc010WXFQN09WRlZ1QWdUV21hdmlISUJVRGxZREcwR25ITXlaVFhDRmMyWlZCaUtGMHRpTUFtYVhBRXZzdEk2dnNsVnp3VmNKeWlsbVBqWkJUQllkMlZkMXdnRUR5S0UwZzhVQTJSZ2FCVXcyeEZRUDhPaXBMWXhXYnNWbzlma3dmQVJtVU1EZ0VrZ1VOaTRRdnZUSTUvSFFnNS9IK3ZvNkp1Tk5GSk9weXpDM0dxZlVFMHpjYzJWWjJxVGJxb3BVQTZhY1kraTJuV2R0NC9KbXMvM0pqaFR4UVdSQmxtVlFLa2VlclNEUGhyL3pqcnYrOUllV0FVNTJPWUhqWXp3WEwxNThONEFYaVFpVVVwaUtocjdxT0w1cStEL2lzUWNWVHE3OUxhNjkwbUNWcnJRMGJyWUpJN3puNTBjVUFzY0RSam9Eb3I1dFVXT2JKdllOSVhoVzVzeXo4bXBTSS9kY0RsSTVoRWVBS0p2eVFyYUlqMWxCeU1abURNajVRbXkxRWthVnFXWi9XczNqR3V0VmxhSFZYdWt6aUpoQmlxcFF3QnhvS3JMQ1dGRHlDdGdGV0VsdHdaQUJaMVBjZE8wSWp6MytNRGJMSVlaSHZoYmFES0I0RllxQUk0ZUE3T1lid1F3OCtJVXZRT3NDNWFTb2ZaWXREclRraUo1bGJGUWxCb3NIcU1ONEdGZFpCdjc2S0RCbllNNTBPZUNsdE0xbEI0NEh6MGMvK3RGWGljaTdpZWhGTmdseWltSXd4cUhzMmJqaHB1L0hseC9haE1pbmNjMlJFc1BNUUFuWm5SZW80Z1dMc210dGJXWjlaak1SQjJQdVRKVUNWSTg2YjY4QkVWZVVKdEZXVmxWOXZNdEJFN0xsQVZBMi9ZVmtBS0xNK2pPT2FnWVBBR1ZMdUlsSHptQmt0OE02d0JCQlVRYkNFRVRLbG5HTExaY0dNY2hSdyt3aW5lR3dXZnZWYVM0b0VUYjhxOHc3dFE1QkFVTWpjSm1EMUFGYklXdEtFQmdNeGczWEtYeng5RU00ZjNvVGg0OTlQVUNISVRTRnFBdFlHUTN4ckJ0dUFCUGhjdzk4RmxLVWdKU1lsbVZsb25rQVZWbmpGZlc4dlNab1c4aWlKWjVEUkZYWGl4a0ZyVUNjSVIrTTdsT0ZuTjBSWWZSa3lBTVBQSERWeHNiR3U0MHhMNElTVEdrVHVZeVFUUWVZbkhzRWozN3hIVGg2OEY1Y2MwaGhTQ3ZnWExjRU43dE50Ylk1bUY2MVY5blhaT2FPVFhNK3dmWjhLR3Vxb2RGY00xV3Jxb0ZMZTFFUXl1MU5KQVhpb2ZWSkpBTXdBRGlIMEtCNlBmR3c4Z3FzRCtPcVE0bHNBUnNGZjNkSXNPYWFUWUdCSndLcVJjUzE3QWRwN0xnRFhyUFhReDhFek1BU0JlNzZhSjJCdFVZMkxGRXk4TmpwQW11WHJzWGhvOCtEWkFBTjFpR3lBaGliWlgzaTRRZng5NSs2SDJmUG5NSjBQTUhXNWlaS3ZZSHB0RUE1blVJYm00VXQybGlUcmNxVW51OEROM2YvR2pJeDJHbVhETG5OYVZRRThtYmE4SUJvVVQvMGgzL3lKLzl4V1FjNWU3S0E0ODIyalkyTi8xSk85UzByZkJBbTM4QWtGNmlyYnNHMTJmZmoxTU01ek5abjhNeWpnbEhlbGdFZ1dEYXNZN1dKVk14WG1NeEROTk1XZGREV3RWNVQzcHBsMEpTTjl2UEFhWlVjVEpZSUlMZ09PMlJMSDBBNVNLMDYwSXpBbkxsdVFZNVJBOXVPUVJWd0JpNGJtaXdyNTdLMWZUb09NZHN1UC9DTGptY1pDUzY5aFRETE9sWmNiMk9yWEZMc2ltV3hwWENsN0F5bUlTZ3ZBUzZRbVJMWEh4dmhwRG1IYytjK2l0V2pOOEhRbFZCWkJtWUNpK0NydnVvR0tCQStmZjhuY2Via0tVd25FMmpEVmEyU05qT2ZzYTlaaGliZk11aW54bVI5UVZ0NnJrQ0VqNitDL213bnJCTGpTWlJiYjczMXpHQXdlTlZBamI2UVR3K0F6U0dZZklMSmFBMHJWMzR0bm4zOTZ5RDZGcHhmTzQzTnpjMW9wNVNkeEh6YXAwVkxvLzA4SHc5Z3U1dXhnTmhwS3pMVi80bkYyOVF1djB5Qk9RZlRBRXdERU9jQTUyQWVRT1VEY0RaeVdtWUFwWElvTmJDZ0l0dmtSSWdCbGR0anFLRVA0cm1NQW5kc0hrRHhBRW9OUVR4MHoyWDJkWlM1T2lEbGZ0b0haUDcvVExuOVhRNkJ6VEVRVm0xMmdsTFFiRkNTUURJRnJRU0dCMkJ6QUVOUnVQNFpDZ2RXbjhEWjh5ZGc1QkNLQWxVWlJaNW5lT2IxMStQNXozOEJqaDQ3aXNGZ1lPTk1yaXgrRzJqSWRJSW5wbTNtbjRjTEZDc1FNd2FEZ1dqbTMvL3RqdlpQKzFiamVIbmU4NTczaGZ2dnYvOVZwU3IveW1pNkpSOGZKR2Fna0xQQVZRckRReitHVXcvZUFqbjFIc2hWQjZCV3hxRFJPcGluVUZvaEs0NkFqSUZrRjJjSmpRUW9vNUJKQmxWbTBHeWdWZk5JOGpBdVJIQVgyZnN3eGpGdTRzZ0NnWXZyU0VVaytOM2ZwOG5EN1hCVkNRQ3ZXbE5NK1RTWURFUkRRTG1PUHpnQUlJUGgzS2JGdVBRWVRUbTBzVnBRcWF4cXEyWlRiekw0YmdhczdFN0tiTFdZTmMweWFHTkE0dUpDdm5MUHpZYnhEVlBnZzdCaG0xd3hWVXFRTVZJTnhyQzk2UVpRTGhmT1hxTlZHQkZNaDZoaVM5ZGRkeDNvOFNjd1B2TXVITGpxQmRENk9JUlhJRW9Eby9NNC9sVkg4RFhtK1poT2hwaU1TK1E1WWJKMUNjd0F1NUlQRm9ZeEJIRk5XaXJmYzg3RHNHbWFQcVptVFY4YkNHWkhCaFNLa1NzR0U1QVJvRUFQWnp6Y2tiWjVVbjJjaUQrUzNYdnZmZjlDNi9KWG1XMVl3Yk1zNWVacHJKMzRmMkFtSDhWMXgwN2ljRTRZOEFFWXlqRE54aUF5R0pRakdCTGJvOHp0VmdvYWJHeTlpSGVtNjA2K2RSaG5SWEJXdGZOY2V5bnl0ZWx6YVRNMk5rQlZrTkRObWhFQ0tIT0ptTGx0cDRvVjIwdUFsYzBSb3d4TUE0QUhqbTQrWUJlZHkwa1RaQUFQUWNqZG9qWk9ZMW1qaWppemZveHorSm1ITmlnSzVYeWJISURydlNiV2oxSktPY2ZiVk8yZ2ZNSnBsZUhrZklQUS94RXpXeVlDMS9EY0padmFhMmtxMHNGdU1KWjRLSFdKSng0L2lVdlRnMWc1OUN3SUhiUk1ZbFpBekJpNkFCNzkwbWw4N084K2lDK2ZlQWpqeVNXVXhSakZaQXhUR3VqUzJLNC9WWGVqZHExRFZBT09PMC9LYmQ4THhZUThIMG8rSEw3MVA3enpUMzl1cDhESjlndHdpS2dVa1YrLzc3NVBYU2lLeWE4QXVDckxNcFJsQ1l5dXdoWFAvVTVzUHI2SzAyZnVnUnBzZ1ZZWVBOSWdOYWtZSjdpcVI3dG5sVEJrSUtvRTRGUHdFV1FmQlBzR3pkZkppSXZMY0pWc0tSVzRaZ3NNc0F3dzJjNlRNTENKckRsQUF4QU5RVFMwd0tBVlJ6Y3JDd3pLbldad1hVekpzbUllT0lTaEJRY3BHQkF5Z2kvU2Rob3hjMXFGWEtMMXdBS1RYTVlCbER1T1BVZTdsU3RubmhuWHdOSE1aUlBNS0hoVWdVaWI1V044MU5ScEp3cG1jTG9Qb0ZrWFNRR2d4WUN6QWE2Ny9wbDQrTXRuc0hYcENSdzRlRDIwR2RvZ0xZK1E1WUpycnI4YS81RCtJU2FUTFh6NVMxdGd6Z0VxWE9OSVcvQ25wWnQ2M2xiYlJMTUVXVkkyb01vcWg4b0dIeGZnOTRDZGp3N2RqOE5qNk41Nzc3MUthLzFYQUY1RVpPdjREVE5XaWtzb3pud2FhNDkvQUFmekIzSEY0UXNZRHFjMjd3aERHTWtBR2RoZWV6QVFLa0EwdFQyenFsTGs3V25uUGw0elk4b3d4N1FSNlJuR2ZDdlZvUGJlVklzcEIvRUl4Q3NnSGtIUkNGQVpqQm1BbGZWYndEbUEzUGFCSXdVSVEvR0tBNDV5MmtJNWs4NTN2YkZKajdacG96Y0JsYU9tRlNDNVc3aU9wYU1NWUo2cFVOZm8wTmVreURZV1VvTHFXNW0xWkxLMFZSWEpsd284TTdESmZCUVpCRUFiVzBZaFlsQnFqUWNmUG9rOHV4clo0Q29nV3dFeW9FU0JVcVlvTjhmNDBrTVA0WVB2ZngvT25Ib0M0eTNiWnN1VUxrTzY4bmxxRTlXcWdHZVFTVTZPZnFlc0dnZGltYlFNMlhCazhpejd5ZDk1NS8vMTY3c0JuR3dmQWtkdXYvMzIwdzg4OE1DcjF0ZlgvMUJFWHFHTWNDYUF5YThDanY4M1dEMTROYzQvZWplbTY1L0NNOHJITUZxWm9zZzN3UmdBbUZwYnZBcnlqY0J6R3FPYnp2YTFIOVY3dUphZlJ2TVJlRU5jc1daQ0k1QmFzYzQwRDEzcXZ3VU1jV1pwWmpWMHZrM21tREpMVFFzelNBWUFLOWRuMnk0RXFsZ2lXK21wRFdEQTdseWNRKythRmNLeGVITWovZ0lxWGVvK1hpMy9xdzRxWXA3RmdOajNXWGJCVzNkdVZYdEhJOUJHVzIxSUJGS01vU3B4dzFkZGpZY2ZPbzNEd3hWb3d6QmxaczFiSlJnTVYzRDlEVGZpOWhkdDRXOC8rSDZVMHhLbDBiQzlyczFjdWJ3MVMya3VoT0FKbW5yRC9xcThBWUJTakl5elQ0eXVPUHhudXdHYS9hcHhRcitIUC83eCszNkFTdjR0WlpTYURyY3dZWUdZSE5uNkd2VFpENExYL2hvSFZwK0FXakVZWll5TWJQdFptOXB2blZrYmQzQ3RsK2JLbEFQYW1aMGh4RFFiWUZUVjBwZ2dRRXF6cE5BcU4zTmtXUzBhUW5nRnJGWUJIcm4vRHdBYXVhUk5XMHZEUElJaDc4akR0Z1ZXdHBOUGFjU3hhQVBBbFNKN05zNjRVbW50Q3lUSmdrWHhvTnJ0eGZVbG1HV0QrVWJ0L3N0eWtDbnRsWXlaU3orYWIveGdnV05FWEtiQnJLZUJFRnovTzl0b2NkYmJlYWJCSVFJeEpVNmZQb3NuVG03ZzBLRWJJTmtoMndBbE0vYlVDbzNKMWhZKy9wR1A0R04vOTJHY1AvczR5QlNZRmxzQVpkdmljQ0dqNlFGa1FlVzY5TEJ0YzBWTTREeEhuby9PMFdEMGMvL3g5Ly9vWCs4V2NMTDlEQnhYbHZBN243ejNnY09sbWI0WnBqdzZKSkJnQkI0ZXhlbzEzNERpMEJWWU8vOHg4UG5Qd3h5WTRzREtGaktzMis0b1JCQ3h0ZlVXR0tnRk54RjBtd25MZlUxdGQrR2crOHdzcnNQa1N3Q0dqZzYyZm8xUTVpTCtBN0Fhb0NodGpUK1RwWTJOMHphZ3pBWXBsVFBCcW5vZlpZSGs2bXVNV0RJQWhtRElKbkZXNWRQT0pCSFljZ0pmWGVvN1pydmhGZTdBVG52VW94QnptMG05OE15MnUyS1hDeWN6UjgvOXpzNFhWSFk2ZEpXbVpIK0taZ2cwcnI3bU1EYTIxakhlUEllVkF5UG5jNUZ0cThXRWZMaUM1MzdOMTJJeTNzUkgvc3RGVERZdllLQVVDcUhHNEdjMFU0QlYxZnRBMmU0K1FrcmR2VEV4LzNhM1FMUHZOVTZnZWVqKysrKy9hVG8ycnlPdFg2KzRaSEFKUTRUQ1pNZ25wNkRPdmhkYkc1L0JnZEVwSEJpZVE1WnBLRll3TW5JTW1Nd3lnNzFkN09sTThwMW55SFhEUVVBV29Nb0Q4d3ZQbHpINytuN1F5R21Ua1hYMDFRcUVSb0N5L2d6VHlDVm5Cb3haRlFobDI5RFFObnFxbW1vUUt4allDRC9KMEtiV0kwaTNZWmR1byt6RWd6Q3JTOEtLUnlEb2xjM1Z1YzlwcEpiMVpIdTRLYkJTMVJnVHl3Q3lyYWZ4NXFzcjBwYks0L1BwT3dNd2pXSGtJa3hKZU9BenB6QmF1UUVtRzBFeVYySmlDRklhU0RuRjJ2a3orT0RkL3k4KytZa1BBMUtpMU5YUUNJUTFFalpvU2k3UjFRZFJjeWhseldhbEZFZ3BaSVBCdWFtVTMvMkhkNzM3dmJ1NUpyT25BbkJjSXQ2REl2SXZQL0tSajN6QU1MOGRHTnpzT2huRGpKNEpQdjdQa0svOExiWXVmUWdZVDdHeXNtNGJJaXJCVUFpNUNBb21GSm5kbVJrWkJrYkI3M3NTWmg5NE00T05tOWtqZ1ltallKeWZVbkx1NGpzREI0d2hpRllBdHNBaEdsbEhsUWN1d1hQR3FnblozbWRHRkVvZXVsNEM3SUtZR1l3Sk91TUVRQkEzL0loOHRvSHJIMEFJWG0rd3pSd2pvcW9QM095QkFFRGJVNVdNTVJCMk5IcVl3T3BUamNocnFLQXNRK296VVcwdmdZd09nbkxnK3V1UDQwdVBuTWJxNmpVd2VnQ1ZsNDdTejFBeVkvWHdjVHovOXY4YWp6eitLTTZlZWhTNTJVUXBWTTA0TXQ0bkpZR1F1SFpYVkgwL0EwWStzRDN5MUdBa1puajQ3bkk4ZnQ5dXI4bW5CSEJDMHczQW4zN29ReCs2YnpBWXZNNFk4M3FsRkJzWVRFY1pWZ2JQZzFFWnBtdFh3MnlkUUVZbk1WelpoTERBMEJBc0dRWmcxem16QVBNR29LWVFNN0pPZVVBMzIwV1JCWlNBSzFsMkQ4QlN5c1FNc0UzU0ZNcmRKWFhSZDdieEdsWkRSL0Zhb3NENE1tY0hIaHRuc1Q4YkRRUENMTGZOQlJwOVhocUZQazAxdG8rcUVaY3o4OGFWVEpOeW10VXhpQTNEcEtyVW9pV3FjaWxvek9pN1RJb0FSNDRleGZtTEpiYkdHOGdHV1JEbG43V1h1dTZaMStIMjIyL0hQZTg5aTZJY1d4L0d6SExRSkxRR2dsRWZwQlR5UEljSWtHVVpXUEU1eXJMZmFKc2UvUlVCSEMvZjhBM2Y4S0NJL010Nzc3MzMvVnJySDhNZ3UzMENmYVNVWjJEbDhEWEk4aGRnb0wrQWN2MWViRzE5RmpvL2hVRSt4WkFFbVNnb0prQVpHSGE5bG9rQk9FTEJrd0NPcGFKcXNibHFUTXJBUEhSVmx4bEkrUXBNNVpwb2pKeXZZelVPY1FZUlpVZDErQzZiSG1CVml5ZEMySVZHNWt3cjc1dGxMcU9CcTByUU1LbHpacGhSR0Zpdi9KR3FpK2lzY1lMN25QbitEdVRMRUR5SVhBWkVuVkFKWnFsczZ3OVJFWldlU0tsTVErdDFYWHZkdGZqOEY3NklBWElZV2EwMElpbExsR2pKOEErZSt6VjQ5TkV2NHpPZitoaktRcnNTOHRsK0lONjBkcFB5bExKTW5zcHlHQUh5d2NCd3BuN2grbWM5NjU2OVdJTlBTZUFFMnVjL2ljaWZmL2lUSC9reE52Z0I0dXpydGpBRWp3WUFNZ3hYVmxGc1hJZk55YjNROGlWb3M0a0QyU1lVbGJhcXNWeUJwbFVvTlFGUjRmS2txR0xPeU9kcitTWVljQm5NTW5SWnlUa1ltUjBWU0RtWWhnRFovREM0aGhvaS8zOTdWeGRqVjNXZHY3WDIzdmZNSGMrTVBUWW1ZR2dKQnBHcWFRaEpXaXV0QkpqbUFWVWxWWVNFS3hHbGZhbFFFRFJTSHBJb2FhWFFOa1N0aEJSVkVDbDl5RXZ6UnFTUzVEbUFGYVJFTXJJQk93NG1wWVRXVFFJRWU0YVo4ZHp6cy9kYWZkaDduM1B1K05wU21oZ2JmSlkwc3Vmdnl0YmQ2K3oxOC8zRW04VndoTE5MR2g5ck95RElrenEwKzVuMnFrZ3FHM0hjemQwdVI3ckUyUXBCNlJpVS9SSDA5QkJBVTlMb2pEWTNwTXBVY3RPZjBBQlRvRlh0OTBVOGZXTzFPNThPcXFPSkRCZjNZWVR4dk1YTzVRVnNicTVEWkFTQmhURzlIR2ZHd3VJTy9NRUhQb1JmL1B4Vm5QclZLVmhtaENBd0hHL2FxRnNTdVVTWjFZa0VRN0lqQnpMdXVXTEpmK3VoaHg2U0MzSCtHTy93SUtMdzBadi82TkVpOEQzc3p6eXB2Q2FOM2NURUZkZ29yb05mK2hNVXkzY0RvejlGaWQvRHV0K09kUytvcUVIZ0pxcTZ4Q09iTENjeTBGQ2h5b2tuTTBvN0Z3T2lFU1FsRVpHTkU3SWt1eFFsbDFLeUlDNDA4KzJnYWFOUE1HbWFsbjRtRTZ1TWJhZDByVnRjb2daa0RrbW1DMGhtZXVhUHJHYUQvbTNVOVRLVURhY284L0I3Mi9VdGxJbmNpTGZpNm1kSmRrM2ZZUDFTYS9wNzNQR2JsQ0VnaEdTSXBWQzhaL2Qyc0VZNERTdEZyVzVvckdCTlRJSXJyN29XTjk3MCt6RWhWR0ZJWVhyWUJVbzdOMllEWXh5c2pYc3VWNHhsdEczaDY0ODk5aCtuTDlTNXMzZ1hSRGM4ZVB6T0h6MTMxZDh4bTc5V3pPMXRkQjZlbDhEMkNzeU5yd1hzZjZMMngxRDduOEkxcjJIRVoxQzROUUJ6NldiUWx0U1dTNDcyTnVEODFPd2YvdGlqS0d4TFZkWVcyb010K3RTSlB0MCt1WE5pY2Y5SzZFcTJmSmlUYWsya0FlY0U1TjVJbVhxbFVIN0NwOWRwejdGMm0vODhSS0QrZGRRYlVkUFU2clQzYjVvMWlLWDJsajdYWkk2U0NJaTJmVTRBaVdDdWNKZ2ZXNnhYZ0JxT2dGU09VMFFtQXpHRVVUR1BHMjU2SDE1ODhRU3F0VlZreFhmT3BXMjZpZHRiamdpallrNmRHMzFuenZOMy83L3N6c3ZpeHBsK2t3NkVQLzdRcmY5VUJMclRCSG5TaENaWWF0Q1F4NlpiaE4vMkFkRENuZUJ0bndEc2ZuaC9BL3hrRzN6SmtCQmRzVVd5bG5GSWdNam9Da1pwT1FwT21seVpMTVdtUlFwckwyRzBaWkp1YVFtU3VhMHllcEt1MUIzUTdGT0tESWZ2RHczNnQwaUxOSjM2L2Z5azd3VFlhU3BwcG9iUGV2WkViUmJONGpkY0pxQkZaaWNCd0R5aFd4alBJV1JyRCtyZ1BPQzBxK0lSbG5mdHh0Vjc5a0JWNEt6dFVyOFA2a3dMYWlaR01UZC9lanczOS9EWHZ2bk4weGZ5ckZtOHl5STlaVjVXMVR1UFB2ZnMvaVpNdmlFVWJ2Q1dpY0lpREYyTHNkc05hM2ZEMkNzaDFjOVE0VlZJV0FWckJjc2hQU1VEaEFMVUJKajJDQm9FQU1MVTNqeWtHZnJDMDdzVXpkd2NBT3BURFdRQWhKUWdGdEkrcmMwVTVHV3FHZStYYTVSbG42YjdtZGJab0oraDFML3YraVVVV2x1U2M2M3hPcndlelU0RW1qMzVhNG5aTkRVSDd3MHlNalVqSnZuQzltWElyOVpoN1NnZFJRSWxrWGhqR0JnNUZEcVB2WHR2eE1tWGZ3cHBxbDYxeUQwK2xJRnhEcVlZd3hYRjkzYnMzdlA4aFQ1bjc3ckU2ZmMrQUo0OGRPalFuUUh6ZjRXRy90NlFHbllOU2cybzZDcnczRzZvZmhUei9naG9jaHhVdndGdTNnU2FOY0FGa0d2Z2xWRklBd3VIaGduaThpNGhOYVlhUzQxNFU2UXlTUlZLdmhYVWk2UWVrNnFhaUh4V0wzRjdubERPclhzYk9uMjNiS25PVXlQbDZKRWpmZmVRbmlwbzl2WHBTSjdVc1Zhb1c1UjJXL2l0QXZiNTV1cFFGTklqbDJudnh4VGFKV0IvbUVmVWV3aTRYa29uN1dnWU5HU0F3bUZzM29EQXd0TVNORVNCTEZJUE5ZUktGWmEzWWZmdVBWall2b3kxTjMvWlVqd01KMzA1S0ViRlBEd3NpbTA3L085ZWY5TmpuLy84NStWQ255L0d1enoyN2R2M3lrZi84SlovTEt5N1U4US9WVGQxVUFBaVFBZ013Z2pLSDRHTVA0RXdmeGZLdWR1eGdadFF5VExFQzJ4WVF4TkdxUHdDTkJUZ0lIQmFnMmdUd1d6QzIwMG9Ha0FiUkR5Y2p4cHdHcjJ3MjExR0VrOVhEUWppSVJwU1ltbGJGbWJqMlBqNWhTalB0emJ4M1I1b3VzbWYvaDJDT2ZjSDhUbVl0UDNYUzMyY2R2U1AvREdlbTRlb3hIRnlLbHM3eThqNFFGbGFXc0x5anAzZ3hDdktBRTVpQmhzSDd3TmNNYWU3cjd6aTRjOTk3blBQdlIzbnl1SXlpRFM2ZnZMbzBhTkh5cks4SS9qd0FCUzNXMnVNcU9KTTJJMU5YQVZiWEFsWFhJM3grQnFFNWhWby9YTVUxVHBxSTJCV0dLbGdQWUhWQTNZTVFZRkFGcXgxdE5pQVJGTXJpaTVqa0ZSeXRDQWViZVdRWW9KeGhNNFJ0ODE4MzVqcXQ0cUgwcTBXZjlydGRucnFOOU1UTXB5MzhjOTlHREJMMVFjOXBacHo2OXVONThjNHMxYTNkMXJlSTNYczJhaTZ1WDM3RHZ6QzJuaDdKNmNCc2c2R0dHNXVIanVXbDQvYzh1RjlqMTdJZ2NCbGx6ZzVicjc1NWhVQVQvejR4ejgrdUxtNXVkOEh2VjhWZTRrbjE0T0lhaGdZZmcvVWJrZkIxOExwS1dqOUZvaVBBbGdGU3dPRTZDM0tvb0JOL0g5S040NkdaSUpyb01GSGFJOXhRQzUyc2hnNmEreWh0SWtqY0U0YUFBbUlhUkpDVzFWQXdyMFdpTTdkWTZSK2ducEx3dFlUWm12U3RBTHNzNUtscHpHdDArS001Ny9Gc0NYQnRpUWMwWXlwWE5ydzI0QVFBb3l4RWRtZXJUb1NMbzZzeGVMMkpaQ3gwTkFrSnFtQnNRNXNMT1lYbHZ6N1AveVJMOXg5OTkybjNyYUhNUzdqVUZVNmNlTEV6cmRXL3ZkVHhyZ0hZUmYyZW5KSnlyekJObXBRd0dNTy93WHIzd0Q4S3RpdmdMRUJkalhJU1hyMGJJY2tnWE5ZaGpGRkpLb2hXbXhFL1dLR0ltSFVlSlIwQjF4TFBHc2QwMkJCeGtGQ1ZORWtNTmhHVlJ6dFRjdWtSMjhnb1Y0KzVPbFVUOVpLTzJSejZMRTV6NTZjRWFZaFBCM0t1cnRCdG1yVFlYb2dncTFxUkRKeitKQi9mblBsTGJ5K3NvbVNsMEN3TUZKRFE0VmFGUk92b0NBSTVTWmVmT0VRZnZTRHA2Tmp1SFh4Z1dVTHpCWGpsYXYzWFBNM1gvN3FJMCs4WGJmTlpYZmpuR01DZDBwVi8vWEVvVVBmV3FucVR3bnc0R2pzOW5xQU5wZ3dJV0ErdkE5emZBUE1hQjNzM2dEOEwySG9sMkI5RXpaTXdHb1RYQ2RBZlVCQTNYcXZSSU9reVBkbmlxV2NTQk45TzAxeW1sYWt3eDM1TkFnQkNrNytwbEVPVnBPYjlkYUZKYUhEaFdscXZzOG02M0d2ZDBqa3RLbCtScm9SK013eXJXOUxzaFZCMEx0dE5KTCtOT2tZWkhibTFsS3R6N0p0WForWkVieUFVNi9IeEdEV3JGSVBZeDNJTURqcE1CQWJHT3YwNmozWFBQM2xyejd5bmJjemFTNzd4Sm1aUUNkT2ZHdDFkZTF2aWZVQmIyUlhNRVNWT0ZqZEJ1dVdNT0pkY0tPck1BcFhZU1N2Z2NKYmdKUUFlWkNKRERPRmdFMUlHalFla2pnaVNxSGRuR3Nxb1lTMEpjNUZpUjRQR0FMRHRQc01rWnhrdlhQY0w0NjBtNStkaFJ2TFFNNWVUOVBmL01jd00vWTZaeWZmek4xT2YzbVYvay90WGFWMFZwbkh2ZjlJTkZnT01Od3RYeVd6OUpMV21xWUhSZU5EM0dzQklHdkExdXI4NHNKM1I0dTc3a3M5TEliRXVmZ0o5QStIRHg5K0xJVHdvRy8wQWJITlRtK0VqWXhRMHhoT0hlWjVDY0ExRUM0eHh2OGc2QWFnbTRCT1lFSWRtM3dWTU5Yd0NSdEdxc21LY3dSQTRDWGF0TFA2MkJkeEUzZnhIakNHNHR1VDVha2tKQ0FrSjBveG5kMWo5SmVJUFhFTmFXOEFUckpWM2UvcFZ2ZG1USE43WnQwWTA0TUFiWGM0eUgxWjVqV3BnbFI2UU5SWWJzYWlzWUZCd0tSV0tJMEFWWmdFcnMyVWFRMEJ3WHRJOEpoc2JnSktjSE56YUlRd1hsbyt2ZmVtR3g3OTdHZS9kT3FpbkpVaFhjN2ZBeDA2ZEdnbkVkMFNRdmdpZ1AwbVJrdmJ0ZFppRzYzQzZDWVlaMkN3Q2hOVzRmUU1SdFRBR2FEaUpxcDVtaEhJRmlBelFsQVRPU2JNY0JKVkpuUGZveHAvRm13QllTaFppRWI5TkxZUjZpTVpvMFlHUmx6NzhJKzRPTzBSOWt6QzNQVXhaTlNEMmtpbm45YWlEdnEzVDA5NHZqZjEyeW92dk5VWk9vZlJrTXl1b3IyaU1RUm9BNVlTVW0vaTVkY0VBbk9XRTNVSUFYVWRmWFdxelhVY2V1WnAvUGNyTHlPSVltSG5GYWVLK1IzM1BmSzFyejN4ZHBkb3c0M3phOXhBQUo1VTFZUFBQdnZzZmdCZnJPdDZQek9iekhWZnd4aVdIS3daWTJRV1VMamRBQnFvMWlqRll5U3Z4YjJERU1nREJneG9nSUdBQWlHWStjaGtUQllkYW16aVVSTFl4RjRucnlwRjR0ZnlWSXgxdW02TFZRdjFCT1A3bW5LejBRTFJNVHBpOUl6aG1ZL1czQitCdGtya250L0ZXeEh4WkJHeldrZTB0d1lRR091YlBsTE9sYVpVV3Z1M216VUc2M1dGOVkwTmdCbmo4WGhGSnZWOWovemJ4VXVhSVhGK3ZTUUtPWUdPSGoyNnY2N3JUNHJJeDFWMVo4Q1ltUXBZblVNcDgzQWlLQ3pER1lLeEN0ZU1vL3VCZXFpZlFNV0RVWVBnd1FZSWhscnRacVZvS0JzWm9vaDdvZHlFdDFKTkJKWThXWXRZcmN6QjFMYllvcDRDSjAzM1FqT2RtbWZ6K2FjcEJKaVpkTE1tWnQwTDJBU244d2hhQXdvRUlkUTFZYlBxS0F0YnBZMjcxL2RZWFYzRm1ja0V4bzEwY1hINzAvL3k2RGUrY3pHVFpraWMzeXlCbmpwMjdOajFaVm5lRWtRZVZOSmJRMUJqalNIVkFyV1B3TVBDalNEME83QUlzTWJEVUFuUlRSaWRnTFFDQlorQW5Oa3pCd0FyeUVpaU9raTBHMHkzQjFOblU4aVN3YUFoRWNBek40YTdXVmRQdFVZVk0wZlFjWXB1ejNOcjZOUmk5bnczemRsSkdlVjNWUnVvUnZGSUVZZXlJdmhnVy9YUVRxa21TajJGRUtMOVlWUGo5ZGRlUnhEVllyenRpUjE3cnJzb3c0QWhjWDY3WmR3cnF2cXo0OGVQSDl6WWFIWTVoL3VicHI2bGFxcmJpR0RZR0NBRVRIUU96aEVzZVRoVFlEeGF4SWdiR0c3QThIQitMUjdRa0hqOHloRVRSQUlpaHRnaW1VckZYb1RUMXpNNkxSN01yTTdUNzFNQXBaQVEzVE1NYUJWVC9jdjArTG1ieWszemRjN3QvajJ6ejlIcytLcUFSRm5lU2VseFprSm9FcFVqbG9yU0t4dWwxVWs3czc2T2t5ZFBJcWg1YW1IWHR2dSs5S1dMTXd3WWhnTVhlSmh3N05peEhlcjloMVg4YlNyeTZiS2VYQ0ZtQnp0bkFXM2dMQUVTL3l4R3NaeGJ0RFdRcUY2Y3NHNldwQVY0Tm13U0Fqb0RIRTFrUElLZ0NJa0VsbTBzRXVFTzZmc1VlNmF6ZXB3V25La3pSRHRvOW5BQTUzZUhtQ25mcExHQWhBU0lDc295WUhXOVFxTVdRV3lpYmtUa1FMUXZGRlJWaFJBQ3ZQYzQvc0lSdlBEQzgwK09GKzFmZnYzci8zN3Frbmx3RHNmOWdpYVNlZW40MGR2WE5zUHR3WmRmQ01FN2F4MHJDTWJZaVBBbEJyRmdaQTNtUm9UQ0N1YWN3c0tERWNBVUFQS2RlaVZGQWZHOEJ4RU44QWl3UElKMUVYa3R3a25JTHpGRWpXa1RwL09nN2FHYStjSWxqbXJrTjBrdGFCcEZXUVZzMWdHQkxDb2ZSeUNTa2lTWGFHVVovVjVQbmp5SlF6OTg1dnU3M3JQbnp4NTY2Q0YvU1ZVY3cvRisyNUxJdm5UODZHMm5WOSs2M2JyeEY1ckdPd0JNYkdDS09SQVVCZ0hPRWtZV1lBUVV6cUVvREp5TkdEaUdnTVNERUVEd1VQR3gvekFSS1d4TTFFaUliRkdiYmh5YnVQaTl0N3hQbm1zRlBhWU5wMXEwUVJZWTFCN2RZVXA4TzltcXB4MU8xRi9yK3ArZ2hLb01xRXNQN3hWQmdNWXJnZ0plb3Nvbm9KaE1KdTN2bEdXSmxaVVZQUC84ODk4M3hseHlTVE1renNWTW9wZGV1bTB5bWR4VzEvV3RJWVJiT1pxY2trbTNBN2Z5dHdSakZKYUJrUUdLMUNzVkJsRUhVMzAwT2NqVzdjUXd5WGtzSjREQ3pPeE51RlVBN2RHMHM2eHZTaHlCVEpOUGRKckJ3NVR3YU1rZU1Rc25LZ0R2QThxR1VkZUNwdkVRNlViZklvQUVoY0tqcXNwMmQ5TTBEZGJXMXZ5TEw3NzQ4TDU5Kzc1eXh4MTMrRXZ4UFJ3UzUrSW5FUjgrZk5nUTBWMWxXWDVRVmU5UzFRODY1MnlldGpuaklvNHRlRmhXV0ZZVXptQTBjbkFXc0tQWVdETjMxSVJ1U2F0UTlXMnozYmMxNzRUOCtxelE2Ykl0dXFWcE8zMER0aXcvWVNBQkVmbVFwbWhCZ0twdTBOUWVrenBBa2toaENKcktzWnc4aXJvdW9acndlS280ZGVwVWRmTGt5YnMrODVuUGZQK1NIZzROUi9mU2lzY2ZmOXpjZU9PTk8rdTZ2cjlwbXAyR3pmMEV4MHhrbmJPeHh6SFJRaVArSGJER3c5cVVTQ01MYTAyeUoxRkFBMVNhOXBiZ3Myd2JBeVI0Z0FqV3VKaHMya00rMDdTLzZ0YkptVmNMa1NTUnE0eTY5cWdxajZwdUVFSkdNeUFsU2tZRmRNdk9wcW56UUVEZWZQUE5wNWo1enc4Y09GQmY4bFBWNGFoZTJ1K1BxcHJubm5sdWVVTTI3MmMyMXhQVHZTQXl6R3pZV2xobVdBWXlZWXdZc0paZ0xjTTZDOHNFUjUxZGVWVHg1M2IwNjVzU3dWY3d4c0xaRVl5eExaeW8xUnBNUzlCc2E4aUcyNE5mQlVVVFlqSjRML0FCZ0JxRXFBeVBvQUVpWGZQZjM5TjQ3K0c5MTdJc0Q2NnRyWDNsSnovNXljRUxwWU0ySk01bFB1NEdZSTRjT2ZMZXFnbjNpdUo2cU56cmpDTVJ0ZFlTeFVNZFlKMkpxR01GYkk5ZGlxUUdFMjBZS1k3QVdaUEt2MG5UUGdPUkRvdVFiVUR5Z1Zjb2dvK2pZMG1xUFJGSVNxa3NJNFFRNVo1QzhGQU5hQnFmL3E0SWNlbXJaVmtlS2N2cTRjbGs4cjBEQnc2RWQ5UVRiVGlPNy94RU9uejRNRlZWODBsbWZxKzFJelMrdnA4SXk5WlpNTmlxQ0ZHckN0UG4xSEF5M2NvS3B0dzZOSWNnVUZHWVhQS0JraTRDVWs4aTdRbVNaTGdyRXAzakpOMUdBZ1ZKNHRxRWdCQThRdkMrTE0rOHNMR3g4ZkRkZDkvenZZVEVlT2VWQXNQeGUxY21sRGw0OENBdExpN1N4a2IxYVd0cDJUbEhRWnEvWU1ZT2lsQ0M5L1pOZ0FHaXZuNUFucEJSbXEzMTZRV1pxSmJSQUFCRlV5bUVoTFQya0VTYk1GSW9WRmVydWp6ZE5QVjNWZldmTnpZMlRyL1RicGdoY1M3endRTUFyS3lzOFB2ZmY5TzlGRWsvQ0lMYkFOeHFrb3NCa0MxSEdCb0NBM285ZXByUmVaa3FFaUFlTGZ1VW1WNGxvdEEwRllKNkVGazRNenBhVmY2eGozM3M5aDhBa0lzTnpod1NaNGpmYXNuMzdXOS9lNlpVMkhYWFhiZERSRDZlUDg4TmZ2L3pzaXdCQUZWVlBiT3hzZkVxQU54enp6M3R5MThLb013aGhoaGlpQ0dHR0dLSUlZWVlZb2doaGhoaWlDR0dHR0tJSVlZWVlvZ2hoaGhpaUNHR0dHS0lJWVlZWW9naGhoaGlpQ0dHR0dLSUlZWVlZb2doaGhoaWlDR0dHR0tJSVlZWVlvZ2hoaGhpaUNHR0dHS0lJWVlZWW9naGhoaGlpQ0dtNC84QWhFcEJWRmF1VGZFQUFBQUFTVVZPUks1Q1lJST0nLFxyXG4gICAgICAgICAgICAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNNEFBQUdtQ0FZQUFBQTB6N3RIQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQTRKbWxVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NEtQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlRV1J2WW1VZ1dFMVFJRU52Y21VZ05TNDJMV014TVRFZ056a3VNVFU0TXpJMUxDQXlNREUxTHpBNUx6RXdMVEF4T2pFd09qSXdJQ0FnSUNBZ0lDQWlQZ29nSUNBOGNtUm1PbEpFUmlCNGJXeHVjenB5WkdZOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2TURJdk1qSXRjbVJtTFhONWJuUmhlQzF1Y3lNaVBnb2dJQ0FnSUNBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwaUlnb2dJQ0FnSUNBZ0lDQWdJQ0I0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUNpQWdJQ0FnSUNBZ0lDQWdJSGh0Ykc1ek9tUmpQU0pvZEhSd09pOHZjSFZ5YkM1dmNtY3ZaR012Wld4bGJXVnVkSE12TVM0eEx5SUtJQ0FnSUNBZ0lDQWdJQ0FnZUcxc2JuTTZjR2h2ZEc5emFHOXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNCb2IzUnZjMmh2Y0M4eExqQXZJZ29nSUNBZ0lDQWdJQ0FnSUNCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJS0lDQWdJQ0FnSUNBZ0lDQWdlRzFzYm5NNmMzUkZkblE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVVYyWlc1MEl5SUtJQ0FnSUNBZ0lDQWdJQ0FnZUcxc2JuTTZkR2xtWmowaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTBhV1ptTHpFdU1DOGlDaUFnSUNBZ0lDQWdJQ0FnSUhodGJHNXpPbVY0YVdZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZaWGhwWmk4eExqQXZJajRLSUNBZ0lDQWdJQ0FnUEhodGNEcERjbVZoZEc5eVZHOXZiRDVCWkc5aVpTQlFhRzkwYjNOb2IzQWdRME1nTWpBeE5TQW9WMmx1Wkc5M2N5azhMM2h0Y0RwRGNtVmhkRzl5Vkc5dmJENEtJQ0FnSUNBZ0lDQWdQSGh0Y0RwRGNtVmhkR1ZFWVhSbFBqSXdNVGt0TURrdE1qTlVNRGs2TlRnNk5EUXJNRE02TURBOEwzaHRjRHBEY21WaGRHVkVZWFJsUGdvZ0lDQWdJQ0FnSUNBOGVHMXdPazF2WkdsbWVVUmhkR1UrTWpBeE9TMHdPUzB5TTFReE1Eb3pNam94Tmlzd016b3dNRHd2ZUcxd09rMXZaR2xtZVVSaGRHVStDaUFnSUNBZ0lDQWdJRHg0YlhBNlRXVjBZV1JoZEdGRVlYUmxQakl3TVRrdE1Ea3RNak5VTVRBNk16STZNVFlyTURNNk1EQThMM2h0Y0RwTlpYUmhaR0YwWVVSaGRHVStDaUFnSUNBZ0lDQWdJRHhrWXpwbWIzSnRZWFErYVcxaFoyVXZjRzVuUEM5a1l6cG1iM0p0WVhRK0NpQWdJQ0FnSUNBZ0lEeHdhRzkwYjNOb2IzQTZRMjlzYjNKTmIyUmxQak04TDNCb2IzUnZjMmh2Y0RwRGIyeHZjazF2WkdVK0NpQWdJQ0FnSUNBZ0lEeDRiWEJOVFRwSmJuTjBZVzVqWlVsRVBuaHRjQzVwYVdRNlltUXhabUl6WXpRdFpqRmxPQzA1TXpReUxUazJNR0l0WW1SaE4yTXhNMkk0TXpFMlBDOTRiWEJOVFRwSmJuTjBZVzVqWlVsRVBnb2dJQ0FnSUNBZ0lDQThlRzF3VFUwNlJHOWpkVzFsYm5SSlJENTRiWEF1Wkdsa09tSmtNV1ppTTJNMExXWXhaVGd0T1RNME1pMDVOakJpTFdKa1lUZGpNVE5pT0RNeE5qd3ZlRzF3VFUwNlJHOWpkVzFsYm5SSlJENEtJQ0FnSUNBZ0lDQWdQSGh0Y0UxTk9rOXlhV2RwYm1Gc1JHOWpkVzFsYm5SSlJENTRiWEF1Wkdsa09tSmtNV1ppTTJNMExXWXhaVGd0T1RNME1pMDVOakJpTFdKa1lUZGpNVE5pT0RNeE5qd3ZlRzF3VFUwNlQzSnBaMmx1WVd4RWIyTjFiV1Z1ZEVsRVBnb2dJQ0FnSUNBZ0lDQThlRzF3VFUwNlNHbHpkRzl5ZVQ0S0lDQWdJQ0FnSUNBZ0lDQWdQSEprWmpwVFpYRStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHlaR1k2YkdrZ2NtUm1PbkJoY25ObFZIbHdaVDBpVW1WemIzVnlZMlVpUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMzUkZkblE2WVdOMGFXOXVQbU55WldGMFpXUThMM04wUlhaME9tRmpkR2x2Ymo0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BITjBSWFowT21sdWMzUmhibU5sU1VRK2VHMXdMbWxwWkRwaVpERm1Zak5qTkMxbU1XVTRMVGt6TkRJdE9UWXdZaTFpWkdFM1l6RXpZamd6TVRZOEwzTjBSWFowT21sdWMzUmhibU5sU1VRK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpkRVYyZERwM2FHVnVQakl3TVRrdE1Ea3RNak5VTURrNk5UZzZORFFyTURNNk1EQThMM04wUlhaME9uZG9aVzQrQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRFVjJkRHB6YjJaMGQyRnlaVUZuWlc1MFBrRmtiMkpsSUZCb2IzUnZjMmh2Y0NCRFF5QXlNREUxSUNoWGFXNWtiM2R6S1R3dmMzUkZkblE2YzI5bWRIZGhjbVZCWjJWdWRENEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXlaR1k2YkdrK0NpQWdJQ0FnSUNBZ0lDQWdJRHd2Y21SbU9sTmxjVDRLSUNBZ0lDQWdJQ0FnUEM5NGJYQk5UVHBJYVhOMGIzSjVQZ29nSUNBZ0lDQWdJQ0E4ZEdsbVpqcFBjbWxsYm5SaGRHbHZiajR4UEM5MGFXWm1Pazl5YVdWdWRHRjBhVzl1UGdvZ0lDQWdJQ0FnSUNBOGRHbG1aanBZVW1WemIyeDFkR2x2Ymo0M01qQXdNREF2TVRBd01EQThMM1JwWm1ZNldGSmxjMjlzZFhScGIyNCtDaUFnSUNBZ0lDQWdJRHgwYVdabU9sbFNaWE52YkhWMGFXOXVQamN5TURBd01DOHhNREF3TUR3dmRHbG1aanBaVW1WemIyeDFkR2x2Ymo0S0lDQWdJQ0FnSUNBZ1BIUnBabVk2VW1WemIyeDFkR2x2YmxWdWFYUStNand2ZEdsbVpqcFNaWE52YkhWMGFXOXVWVzVwZEQ0S0lDQWdJQ0FnSUNBZ1BHVjRhV1k2UTI5c2IzSlRjR0ZqWlQ0Mk5UVXpOVHd2WlhocFpqcERiMnh2Y2xOd1lXTmxQZ29nSUNBZ0lDQWdJQ0E4WlhocFpqcFFhWGhsYkZoRWFXMWxibk5wYjI0K01qQTJQQzlsZUdsbU9sQnBlR1ZzV0VScGJXVnVjMmx2Ymo0S0lDQWdJQ0FnSUNBZ1BHVjRhV1k2VUdsNFpXeFpSR2x0Wlc1emFXOXVQalF5TWp3dlpYaHBaanBRYVhobGJGbEVhVzFsYm5OcGIyNCtDaUFnSUNBZ0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBnb2dJQ0E4TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvOFAzaHdZV05yWlhRZ1pXNWtQU0ozSWo4KzZrSG1VUUFBQUNCalNGSk5BQUI2SlFBQWdJTUFBUG4vQUFDQTZBQUFVZ2dBQVJWWUFBQTZsd0FBRjIvWFdoK1FBQUIrZmtsRVFWUjQydXo5ZVp4bDJWVWVpSDVyN1hQdUVHTkd6bG1WV1ZYS0dsUlNvUWtvRFFnWklZTVJBdHcvSnR1NEFidGJiVGRZYXJlZjZYWS92K1kxdkFhRERjKzBiYVRtdVp2SnZNY3o1dG0wdTlzR3E3RVJEVFlsUmpGSUtwVnFubkxPbU9OTzUreTkzaDk3NzNQMkdlNk5HNW1SV1ZsVmU5WHZWa1pHUnR5NGNlNzU5bHJyVzJ0OWkwUUUwZTRvbysxckd6OTMrYmNmLy9ZWGZ2OXplT3lKUDhhNVpPV1BIMW82L1ZFQXZ3a0E3L240UitOVmVvV040eVc0UTlGREJHWUdVYndXRVRqUjVqWWpnaUlhSUJJQUpsNlZDSnhvTTB5TUlYYXVSaEZERWNmM0tnSW4ycjdleGhnWU1SQVJhSW1PSmdJbjJseW1ra1NZMk9ZNVJEQWlNZE9Kd0lrMm44ZXhPUTRUUTZ6WGlmUm5CRTYwL1hJY0VRc2U1dUl0aWw0bkFpZmFUT0NJUUV6SnFvbjFOdEhqUk9CRTI4K0kyZFp4UUI1QTBlTkU0RVRiRnpoa2tTSVFFTGtQbzBYZ1JKdnBiWVNjZ3hHeGoyZ1JPTkhtSUFkQUJDS0MySHFPeEZBdEFpZmF2bUdhcmQ4RWY0K2gyaDFtU2J3RWQyYW9abDBQUU1UZTFVU1BFejFPdEptaFdtNCtvNDBSNDFqb21PTkU0RVRieHg3N3lNZGtlSG5qVnlBaUpJQmk5amxPaEU4RVRyU1pIa2VNK0Z5SHlsNjFHS3BGNEVTYlpiMSt6OUxSWkxzSWlLSzNpY0NKTmc4OUVIb2JVSFEyRVRqUjlyZlJjRWkrTTVvc2lDSnlJbkNpelpYbnVQK0lJMllpY0tMTjk2WW9KWFlPUjJ5VFdwUWlpc0NKdHI5MU9tbkJCcmhKME9oMkluQ2k3V2RHQzVXajAvRXRpc0NKZGpBQWxhSWRNVlNMd0ltMmY0NURaUUVVQkR1ZEUzWFZJbkNpeldIV3lSZzd5QmJmcXdpY2FQUGtPQUJDVmkxZWxBaWNhUE9ZN3h4Z1lwZ0luQWljYUFmeFBKWWNpR3gwQkU2ME9Xd3lHU01jbG5iVG9OSHRST0JFbTJXZFRyY1FJaFJJbk1lSndJazJ2MW1jS0ZKUXpCVGZxd2ljYVBQQVJxUndNWTRjaUI0bkFpZmFMTXQxTGhJdWxySVdHWUlJbkdpenpHaE5nS1drRlZlbG9xSkY0RVNiUVE1NENqckdaeEU0MGVaOVV4UVZVVnBRL0l3WWlzQ0pOanRVRTJKMlNnTVNjNXdJbkdoem1TMkFDb2dJV2pRY3Z4WTlUZ1JPdEgxekhQaVdhQVpBVVhROUFpZmFQQjRIWlBNYmdZQmpzMW9FVHJRNVBZN2JXSkFvRlM5SUJFNjB1YzN2LzR3akJSRTQwUTZNR3pBUmpNU3A2UWljYUhPWkZ5S01FcmdST05GdTBQUEVkZTBST05IbUJvd2JLMkNLZVU0RVRyUjV6QmRBbWEzZWdLT2pZN3dXZ1JOdGxwbnQwU2EwV1JjUmFCT0pnUWljYUhQWnBWLyt2VTB6bkR3dElraVU4cDNTTVY2THdJbTJuMm10N1J0RTdNbUJHS3BGNEVTYnh4S1ZPUEJFekVUZ1JOdlgvTTVQY1RVY3NjdHpvMFhnUkp0bFR2bVdCQUpXeFZzVWM1d0luR2p6bXJKN2NpSm9JbkNpemZYR0VFR1JncmI3Y1dJZEp3SW4yanhtQUNHeUhpZGFCRTYwZWNtQjJHWVRnUlB0NE9RQUU1RUlvT05JUVFST3RBT0VhcTZ6a3dBb2psT2dFVGpSNW50am1QMEt3OWl2ZGdkYUVpL0JIZXB4akxFeXVDQnc1Tk9peDRrMmY2cWptSzIybXRIeGFrVGdSSnVQSUJBUzhTRmJkRGtST05IbU5yOUFOMW9FVHJUNVFTTVJNeEU0MFc0b1hJdlhJQUluMmdHOGplMkVKZ0lVTXppMjNVVGdSRHZJbThQSTdTUm9sSWVLd0lrMlI0am1SQWJFNXp1eE96b0NKOXErb1JxVDhjQkpTN0dPYUJFNDBXWjZIQ05jZEE1UUZNQ053SWsyTnpuQXpGQ3NvS2hvOEl6NGljQ0pObGVxWXlUY1ZCQTdQU053b3MzbmVnQVZGMHRGNEVTYjE5VzRzRXdBTVJMSmdUdlE0bGpCbmV4d21LdzhGRkhNY1NKd29zMUREdmdwTmdZQnRuTWdBaWVHYXRIMkRkWHNlZy92YldMblFQUTQwZWFuQmdnaUJpS0dJbkNpeDRrMnArT3h4VThLZ0JRdEFpZmE3QnpIdGFoUmxNQ05vVnEwK1hNY1poWVJnV0lHc1lxaFd2UTQwZWF4YkdkNFFZd0JFWHk0RmtPMUNKeG9zeXpmRzhuZ2hhdWZoUnRvTXpEUjIwVGdSSnZyalhGNWpRaWd0WW5lSmdJbjJqeHBqcU1KaXZIcGFCRTQwZlkzTi9FcE1DSXdFa08xTzgwaXEzWUhleDBpUnNJS1lsbTFhTkhqUkpzblZDTWljQXpUSW5DaXpSK3FHVEVpSWhBSVROeFdFSUVUN1VCNVRsUWxqTUNKZHNCZ2pUeHVKSUluQWlmYUFkME93VStBUnZSRTRFU2JJMUFURVFFUkkwMlRDSm9JbkdoekJXb0ZmZ2hQN1Y1NXdFRGlleFdCRTIzZk40YktCWWFPVll1MW5BaWNhUHNHYWlnWFMwbE1ieUp3b3MwZnJ0a2NKNDRVUk9CRW05dThkalFBNUhrZVhVNEVUclFiQzl5aVJlQkVPMGk4QnRodG9OSHJST0JFMnc4djRSL2FqaFZFdnhPQkUyM2Y0SXlDRHVtb0hSMkJFMjFPanlPbGgyRm0wcENJbmdpY2FQTjdIRUNUOU5kUHBXK05seVVDSjlvK0hzZXVhQ2VJQUxuV3BIVWVyMG9FVHJTRG1qWlI2U1lDSjlyK29ab1Q2eENKRTZBUk9OSG10bERaUmlCUXpMR09FNEVUYlQ3d1NNZ1V4RkF0QWlmYS92UUFTTVNHYWxwaXFCYUJFKzBHRWg0Q3M0cWhXZ1JPdFAzOVRUQUZhbVZ3WTZnV2dSTnRMazlEQk9QQ3RLZzdFSUVUYlo3b3pMOUJ4QkJCVlBTTXdJazJkN0FHZ05oNm5ianFJd0luMnJ6WUVZSFdlUlR6ak1DSk5vOGxpejNxblZpOXkrdXFHZEh4b2tUZ1JKdkgwaE1yai9oY2gwQmdGVHNISW5DaXpXWUcvRWdCQ0xuT0FTS1F4TTZCQ0p4bysrUTJ0bXNBc0cwM0lnWVV5emdST05IMjl6aE9UdzBpQUlFUnR4bEc0RVNieSt1VW85SW05cXBGNEVTYkwxUWpJcnVQVFFUTUxERlVpOENKTnFjWk1UQ2lrUWdOZTlmR1Q4VXJFb0VUYlo4Y3gvNXB2WXhpbG1RMzI0MVhKZ0luMmtFOGp4MmRqdXhBQkU2MC9YS2NxZ3VLMXlRQ0o5cDg0REdCQUtGRStFVGdSSnN6MGZINURzZVJnZ2ljYVBPU0EwUlV0TjFRZERZUk9ORU9sdU9JR0RzN0hjbUJDSnhvKzVzeGhyUXgwR0w4dG9Mb2RpSndvczBUcW9rSXhBaTAwZEhqUk9CRW16ZFVZN1picHduUjQwVGdSSnNUUFNBSXhRYlBDSnhvQndyVm1JVEk2ZzVRM01nV2dSUHRBT2h4LzAzeUxPWTRFVGpSNXNweFJJaEF6dU1nNWpnUk9OSG1lbU9JQ2pIQ2FCRTQwZVkwSXlMZTQ1aUluZ2ljYVBPR2F3SURnMHpuTUNadW5JN0FpVFl2Y0loQTBHSkFnS2draVJjbEFpZmFMUE9kQThhQ0p0SUNFVGpSNXZNMklGKzdzUVJCekhFaWNLTE43WGlZR09OOFV1QXBYcElJbkdoek9KN2NhRUFFaWxVRVRnUk90SGx5SEJEQkdMdXRnSzJvV255dkluQ2l6VExWNjNMU1RkZUliSTZEV0FhTndJbTJ2NTM5bGkrN2gzdWRCOWh0WTBOVThZekFpVFlmTFVBdVZCTXg2Q0lad2tUVjlRaWNhUHN6QTBZZ1lobUIwOTJWbHlYMjNVVGdSSnNET0k1RUV4SEFiaTZJd0luQWlUWlh4RVpBYnVMK3p3aWNhQWZ6T2xMb1JpTjZuQWljYUFjSTE0TE1KcjVYRVRqUjVvclRDczhqMGVORTRFU2J5OXM0UGJWeFBrRnV3N1ZZekluQWlUWlBvT2J6bktnZEhZRVRiUTZiVE1ZUUVUYzJiUUNLTlp3SW5HaHptMktGaEZYTWNTSndvczFqdlg1UGlHeWZHaE5CeGU3b0NKeG8rNXZSUWtSVzRXYWljNzlZS25xY0NKeG8rK2M0Z0JGQnJuUEFMWm1LRm9FVGJZWjFPbDBBQWpFR2loVW9VdEVST05IbU00RUFSTkJHUTJLWUZvRVRiVDRqV0hVYkpvNGVKd0luMmp5VzY5eXQrRURjT0IyQkUyMWVNMXFUaUlDckk5TXhYSXZBaWJZdmVJeUJwNlNMNkMxYUJFNjAvWkljaXhPM2tTMTZtd2ljYUhPOU1VUXd4bGhXVGFLM2ljQ0pOcGY1RUkySXdOSGpST0JFbStOTlVVcml3dHdJbkdnSEpRYTBKb0NLc1dtS0tJckFpVGFmeDRHVmo0NnIyaU53b3QxSWpxTzFpZnR4SW5DaXpXdDJIa2ZBVE5KaGxjVXJFb0VUYlQ5dlk0UUJTMG12ZEJkRzl5MmN1Qnl2U2dST3RCbjJubzkvbFBxbjFyNFdCQ2U4YmlMREZvRVRiUjVUcVhvTEVaRTJ4amVveFNRbkFpZmFQTVNBM1ZRZ25oaUlvdXNST05IMk0yT00zZjFKOGUySndJazIvNXZDREdKYkFPMm94SDg2SmpvUk9ORm1HUkhacGJseGhXRUVUclNEZVJ6alZyVVRNZTNrbzM2OEtoRTQwZWJKY1VCZ1pnejB1SGRwdEhrc1hwVUluR2h6ZUp5QVJDTzNOdGZFS3hPQkUyMU9TMVVDZ1pINFhrWGdSSnNqVkxNRUFSVTlhOUVpY0tMdFk4UXNQbVJUek9EWWNoT0JFMjArRXhFUUNHbFp4NGx1SndJbjJyNWV4M21aSUZTTGJ1Y09zaVJlZ2p2REh2dkl4d0FBNy9uNFI1MGdJY0RFU0RoQndwcmF2dFovZmJRSW5OZTFQZlRoRDZxWG5uejJxenNxT1cveUhBQ3cyT3ZCNk1reXB3bWJMSS9Obm5kS1JCREhjdStjOTJMOTB0VWYyM24rOG9kM0wxeGJHbHpib3AxTDE3QTNIbUo3dUFjNnZ2VFo5YjJ0bjE4d3ljKy9hV3ZoUlErZzZIRmlqdk82dDhubTd0bnR6Nys0dlBQMFJacXNiMXMwZ1pDUXd0Vm5ubm5reGM5LzlvZGV2UFRjUDB1WGVvdnhhc1ZRTFpxemZIdlltMnp1QWNiQWFMc1ZoMEFRSThpekRLUEJFQ3g4Wm05aHNOSUI3OFlyRmoxT05BQjZPRWxOcm91Lyt6Q2FtV0QvQTBTRUFPaDR0U0p3b25tUE14eWxLS1J2TFJVdGpndGdzZ1ZSVHBOc3pDWjZtd2ljYU43TVJDdnJhZXppWE85eGpMRnJEWmtZYVpyb1o1YUdvM2kxSW5CZTkrYnJNbWFTSlcwc0o3TWxDSmdKRUtITDNVbWtRaU53b2hVZUo5T3RaQTBSUStEMmdWSVVJb2pBaVZZRlRwN3p0THFhTnRxREtMYmVST0JFOC9iaXYvNGRFaVBGWWdJdU5ySVpFQXdVcFdBa2dKRUluQWljYU40V3pod2x2MkhhYjV5MmYzSDZhaEFRRWNZNlgxdEs2UDU0eFNKd29nRlllUERNZmVuYTBqdkk3Y1h4TkRTQml1WTBFY0ZZWjZzOGtqZkdLeGFCRXczQWVEd21kbnBRWkN1ZEpUa0EyNWdtQUhTV0k5SFVpVmZzbGJYWWNuT0hHS1ZLU0RYUE1ROFlncTN0R0sxQlJsUzhZdEhqUlBOdlJxcGNTT2JBUks3TnhoZ1lBWEpqSUVaZ2pJN3ZXd1JPdE1MckpLcTZtSjBBQWtORVlJeUdpQWJFUUduRVVDMENKNW8zMVUyclFIS05uWEJoR2tEUVJ0QXhLbzRWUk9CRUs0RFRTZDJLRDBIUklFQUVBNEloQlUwSmNrbEFocUlrYmdST05EL0Z5WjBFWUsrbjV0ZzFXTzBCVjlDeE5MV1dicnhxcjZ4RlZtMGZDNFV4YnFXOStZZStBNnFiZ2hWRDU3clNJZTNiY0FRMkJUS0V6QmQzYnRmcm13YjJDSndJamxmcUJpUUEyRnJmUENZSkU2VUp6SEFNYlhKb3JhR05oaEVESmtMQ0NtbmFRZmZJMHFtN3YrbXJIdW1BMTY5ODR0UFhWSzhqS3cvZWJWNzY1ZCtKK3RLM3lWNVhZaDJ2SUVBSUFLODhjRmVhRDhaS1BYclBlZTZtNTdPOVVTcUszaTZFTDFLSit0SjhsTjE5L1RQUFlySTlnQkhyZFhLam9ZMkJFWU1zejVBYmd5UG5Uc21SVThlRkV0N0x4cFBmNml6MXg1MkYvak9qdmVGdjhISnZ3RVorLzhzLzlGWHI3bWZMWXgvNW1Oem13eUFDSndMbjROZjA3SWZlU2NPTDE1UEJ4ZlVPUFhMbWpVVDBacjB6WEpVai9mODAyeDEyZEphZjFubCsxSXd5NlBHRXN0RUVrbXVZWE1NWUF4RlQxSEswc1U3RWlNQ0lYWEhvVitxS0NMUVlrR0p3SndXNlNuaXhKOTJGM21mVHBmNndzN0k0bGp6L256WGtpZWQrNzdPLy8xMC85TGZON1FiUmF4VklyMW5nM0didlF2M1RhMm4vSGZlZXpycjhUdEhtVVdQa3orUmJ1OTFzTURtVlR5WnJlcFJCWnhucFNRN1J4Z0VreUY4cWVRekJ1SzBlNG5kOGlMSGdjWC9Yb21HMEtUNEdBSzBOY2pkK3dKMEVsQ2p3UWtlNml3dlhrb1h1eTBtLzg4ZmRwUE12MDhYZTQwLysvcDg4K2JhdDVWZFV1K0RWREtpWTQ5eWdIWHZIQTJydjVXc0xDKys2Lzh2MDd1amVQS0cvdkxlOSsrQjRaM0FzMnh1U0dXZVFvdEp2Q25EWVRkSVdJZ1hxaWhHQ3NEK3QxQnNRc1VOc0lnWkVGa1FFZ0JWRGpJREI5bk5rdGFaRkJQa2toeGxOZ0wwaGphOXVuVENFRTZxVHZqMVo2SDVIYjJYcDJvbHpkNyt3Y1YveVkvbHlaejI1c3ZmdlB2UmYvcVg4bGZCRzBlTzhEcnpMc1hjOG9BWkhrcnQ3Qy8zM1RiYjMzcStIMlZlTzlnWnZ5QWNqMGxsT1lxUXlFdUJ2ZkVnSkdpTmwvbTRLYjJPcFoyTjhEWWRneE5qdkQzUUhqSDhPSXphY2N6OUIzUGQ1ejJPTURlRzBMaDJLZG1HZWVLK21GTkJSa3E0dVNuOWw2WSs3UzczZlVKM09yd3JqeVVmR1I1NjYvdW1uYnFzM2VyVjVuMWNsY0c1bkdQYlFoeitvOXJyeTZPVGl4dm5KYVB5WEJwYzMzanJaM2p1Vmp5WWtwcnl4aWFnQWh3ZURCNDhQdDBMUFlqMVA5ZXM5S1B6WEdKamlpU3c5YlNwZjU0RmxBV2s5bS8yYUVteTUwZmE1Z3M5WG4wOGdCRkNxb0paNjBsdGR1dHJ2OS8rWGJrNC8xWDl4OTdNcmVUTENiZG9HOTJvQ1R3elZXdXpzaDk3SitabkZFMHJqdmRmWDF6ODh2THI1L3NHbDliNFpaMlR6a2lERThsVks1eWtJNU1JbTUwbHN3MWwxMTRDZ0VwS0Yzb21aQ3ZBUUNNVzhwMXY3QVJKQUNNeUFpQXZuM005alpzQ2d5SStZQVhhOWJyQnJSUjBnQlFRQkNVSEl0Y2ROY295dmJ0UGd5dVpKbGFpL3VyaTQrRTNwNnNLTGc1Ui81dmc2ZmltWm1IVUFZMFR0NmdpY3V2ZnRIbDN1THIzcmdiY045UGcveXAvZStmYTlxNXRuSjlzRG9scm9SWVNnaTh4NUN5cGpMbkkzZEFHZVFCK3RicDRNQ0orckFLVlVmNllIb3MxellFSGtCdC9JZlE4cEJkSUVMZHB0TzdEZnA0a0tRc0lQL1JEQnZsYXhQQjB6QVlhUjV6bHRiVzZld09ibWlldkVYM1I5ZWZtdnJ5MHYvVUszMS92MzNaZDJmMmVwMjkvQjYxd1U4WTROMVc0WGRReEFtU085STZmZS9lWS9PeG9NdnpYYkc3NS92TG5iTTFrR01jMGJHN1Y5QVdXeTcyOTgwMGowZlQ1VERaWEtjQzM4R2xObjJZS1FyUWovQXBMQi94bFMxVDduOFRtVno1MEFGS0diWitxMGRybVNZKzFFTEV2bkdUOWRzbnF5dUxDNHZyYXk4c25GSXl2L3g3RjErYVYwcUxjQTVLL0hFTzcxNm5Hb2QzeTFzL2pvK2JlYmNmYlZXdXUvdXZuUzViUFo3b0RFR09jK2JGaEVRczJWVGxTR1hKNzlLa2dCRjY3WmtLb0tqQ3IrcUpoUWF6dThmTTVFUkdCaEdETEJFTFgvWGs5ZE8yWU5CaXlBWVp1VkZJQm5VL3h3WmtKdUxCMU9RaTQwQklUS29OSC96dmJYY1NFa2lBYUR2V083ZzkxdlRqZXVmOFBWWTBlKys5aUo1UjlkdTY1LzViRW4vM2puQS9lLzQzWGxnVjUzd0RuMmp2czd5WnZ2K2dZWlpYOWpjSG5qUzBiWHQvdDZNTFpoVERIbkg5emNWQXZUd3B6RWVaOGlkSFA1aHgxOXR2bEpvVnBqVEtBZEFKZGJVS1ZtUXlqSGNTcDRjK0FSa2dLa0ZwZmtxR3J2QkozK21oZ0xIZ0JzdU1pN1BHWE5JQWhSa1JPQkRXQVkya1ZmL25ka0cvODV6d2JubFF5TkJzUHVZRy92SGV1TC9aOWZPckYyOWZSWHZ1MFhuMUhxNzM3eUYvL1Z4UTgvK3JXdmk3YWZPeUpVdTAxaFdYTDhUejF5bm80di85VGd3clV2SFYvZjd1bEoxZ2gvcU9aZS9NbmZtbzhFZFJidmVkb3VaOEYrMVVJc1NETnNNOEhQRWtFdGxETzE1ME1sckF2cGFpUGEzZXhTME9FaFhlMS9UcTd6SXB6eklacjlkMU93ZFhBaG00aUJOdVhueFFpSUNlbFNId3NuVjNkV0Y1Wi9lUFhadmYveFZMcThlNWc1VUF6VlhxSERnWTR2blZoNysvbnZHVzd0L3BYUkgxNWVFMjBhU2JjOVlia0VRckdEcy9SQnM4QUZDYnhPTGJjcFNBUFBxRG5QSkZUZWZEQm9KUkJDNE5aQlMweEY5NEJsOUVxUFIyQkFqSGVIZ0xFTW13L2RHSmE5ODE1SFNFTkJRVVBiOEV4UUVBbEM1RUkyQWhOQmgyQTJCcU90WFl5Mzk1YTN1dW5mT2JwNjVEL2I3YWlmZURCZi9TZG1rbDE3cmJKd3IybmcwTDFIVjQrLzVRM2ZNN3EyL1pHdFp5NGNOVnBQUVZZMUFTR3FNV1lCMVJ6V1lzTHF2djkyRXJ2czFvZHZEaFBGRC9MZ1lYYmhFN2tDSnFRQ1podm50WHN3Smk2RE9sVzI1WGpna25zZEZTYURDYVNwL0g0UlMxZTdFTkNmSU9UQVlVRHU1MGpsZHlYSEdoS3FRTmRHUXc4MVhScGVQSDg5U1g5a3RIYmk2Ky91cjMzLzhNcm1wODRzSHgxRjRMd0tRclBUWC9HV2JuTGY4ZjlpY0dIOWIxMy8vQXNuSk10QmxVSGtkdkQ0OENqQVRVRW5oNER5UUt1QUo2Q3M2M1IxdlZianY3NU9QUmMzYW9YS3JyRUtEWjZDS3V5Yzlab0dRckMrVVVvZlZRRjk0TWtBUUJGRGszWWtBNkFVQ3NhdGVBbk9tM0c1Q2J0eWVCalhPVEdaWlBUODFRdGZjYkZ6N2QvY2UrcnVuOTNjR2Y3Zmp5VDkxNVQzZVVWeW5Gc0puTE4vNWF1L1BMdSs4NzJiVDcvOE5kbm1YaU9wMzgvQ1VLd09KTzk5bUttU1g5VHpvT0RKQ3U5VGFjT1JNcCtwZjMxUjVROXpvZUJuaDNSMjhSb0RDdHEvRmlOUzVDTW9FbnR4cjhsVThpcHRCTnFFRkxTeDgwQXUxL0ZmN3lsMVk0eHQ2VEdtZUw2Qzl2YUhBdXpYS1ZiWmlXUEhuM25qeXVuLy9OTHpMLy9Xd3lmT1phK0Z2T2MxRTZxZGZPOGphWEwvaWIreDg4eUY3OXQ5OXZLaXpyVTdIUmtIT1J6cW9DbTlUdWhwVUNsdVZyeFJtQS81c0NuSWZRb3Z3d3d5R2w2NUUzQk1HeEdneTBLbm9Hekg4U1BWOW1RdlBaNDdBZ3ZQNVBPZFpoSFZlZ2RQWFh1Z0thNUtVcE5qMDVnQjBUVDFjR0hpc3FjdThLUWhNRE9kcDVldVhuN2o1dmJXdno1eit1Uy9lbWt4KysvT2JxZFA0MVZlUUUxZUE5Nkc3dnJMWC9tSTNoNSszN1ZQUC9VdCtmYWdFUzZGT1V0NFdzL3lPbVZJaGtaSVFnZVFQVy8xZEVFKzRXOTZDV3BDQlVrUmpCZ3dtdDBIeGU4bHZnNVRaZUlVRTR3QXhnQWdkcTA1amliWDFaeU9xUVFUaUJ5NHRQV3V4dFdJQUdpcDVsTHczUWVvNWtGU0ZGTU50QUF5SGk0KzgvTHpmMzVyOGNnNzk0NGQveDlQRHBLZlhVc1dycjlhd3pkK05ZTm04ZHlKOU9RSHYvaTlneGV1ZnZMcUh6NzVMWk90dmVKbWJjc3hEb3pJNEwvaTczTThWZGk4MllvYi8zek1OWUxDL1F5MkR5WU9IbFI0cC9wQlFPNUdMOXBvSEJCOG9sOFFHNjZFNmoxTndra0JVdjkxOXFZZ3NHS1EzY2RUdkFidjhaaTV2RExCOTFWeVExUVp5RW1lSWRjR1YzYzIzdkNGbDU3OU81OUxOdi90eTR1VHQvN1U3LzRLUitEY1B0RFF5b04zSDF2ODRqZjgwOTNMMTM5MTYrbVhqNHMyeFUxVGhDdFQ3dkx3ODlVM3ZucXFTMjFteHQrQTAzSU9xWGNLelBKQTRlc3Nia0lVTjNId0RjSFBEd0EyQ3p4TXRXdFJaZldJQW5DeUF5WlhnY0RCa2VGRDNnTEFybmpxdmJvUDI0aXFYUlpGUzVBeGJudTJIWFVZamNlZFN5OWZlTnRuMWwvODVCZC8zVmY4elUvdFBmK3FFMWg4TmVZNHllay8rODZ2blV3bVA3L3h1ZWVXVGFZYklWa2pOSnRTSDZuZXlLamtETkl5YUJZeVlHRk9VZjlaVEZ4aDJhby9weHFXd1FQWGwrZkRmeWNKMkdRdXVnUk1vejlPbWprV29laUFyZ3pOb2FTU0pTQWtBQ0J4MnRWK2laVnR4eW1aamVvR2hlQTVtY0NHS3g3R2d0RFZxNExyVXhScHRXRDc2dnJhZURMKzBkVzdUdnk1QzVQeFY5NDE3dTVGNEJ5K3B5RUEvU1B2ZXVqUDcxeTQrdkhSMWUwK1drN2Z0aHQvRmdGUUQ2OTg2REpQNUIyeWJZMWt2ZjdLM1hQNi9LQUNuaFo2dVdqYkNWOVRBU0JqY3d6ZkRpUFZBYm0yMzlmbU83WmgxUGJKbWJKdEtQeTVxUFhKZ1FFcW0wZnJ2MVRaWGlSRjc1czJaYjNIb0RxNDU0a0RJb0pvd1hCakIvbGc5S2crZmZLM3I5NTE0bnZmZHFIN3YrRTJ6Zis4YW5LY20zbWRuYldsMDJ2dmUvUEhoN3Q3UHpHOHV0VnZ1K0hDQWlYTitxOFdkdmtia2x2V2EwNEw5M3dPRVRKdTA4TEQwS3VGb0F0REhZUTVSaTFVQ3oycEQ1ZVl5dkF1ekduYVhqOEYwV0VZS3BMN1dZcFZoVFFwUWpGWUlEQXBNRE9VKzlQbVgvYjdPTWlyaWpDdjVUb1VnM3VPTkRBQjFUMFpUWEQ5eFF1UHZQVE1jLy9pOXhjMnZ2M1ZFQW05R29DVHBFdjllM3RmZFBiL3QzUHgybC9POTBiZC9YSVhtcEhCenhPMk5aTGVrR0lXYVNQSUdoWCtPamhEOEZRSWgrREU5K0FobjN4VERVVGhjNGM1RWRzYnZDaHcxanhwQVRBSGhQSjV1QUxPeXFIai94NThYaWtHZ3d1d29JV0VLYjUzU2lkR2xVU0IwNDR6bUdRNWRpNXY4RXVYTC96TUh5NXRmY2UxenFSN205bloxeFJ3VXU2bTU3c1BuZjY1M1pldXZsZHlYVTFHYTE0a1BOVERFN0FOQk5QZTFNYU5QZ1dnRldFTm12NEliK2pHendaTnBiZXJURmlRVzRpVURGZkxhNjE0SHFwNjF3cEZIL3pIem1PMVVmWlVDVWtyTGR2bDFHa3RKQzA5VjNrZ05FRmpYQ09xYTBoMUJkVzk5UzErNXFYbmYrcHp5M3UvbHIzN1hPZE9CYytkN0JMVGRLbi9RT2UrNHg4Zlh0OStiOUcvdjA4UzVQK1VmZGkwVjlTbXpQUDRVWVMyVUs4b2p0YnlyOElqU2VDQnZPb05DSWF0MGs2bFdiUkZWY2Q3UXFYOHFEWGJZOVUxbnpMRWpUV1lFbEFvNnpkaDcxcEJXeFBEa0c2TVNBQmx1QmJXcTRnTUVrb3czTnlsSzArKzhHWC93WmhmNngxTnZ2TGQ2NnZablhaejNwS1dtME00Q1pLajczM1RWMDd5N0JlR2x6YU9vdDc3MVpwSFZHTW5tWEcvK25zdlpLUGFya09kUlpLYU1FZjRwczhLQjBQcU9pd1VoaUNvZENxZ09nUm5hcS9OVitpMTBaWFduRkRvbzN6T0lEazNwYkNIZjBwamRFUHN3Mzl0cUpUalA4NjFMcm9GdERhRlJHOVI3UFQvN3NZVE1wMURpNEV4dWh4WGNDUkJLTGJvcjdQTm5SZ0dndjdxRXRidVAvdWJwc01mK0ROWGp1MDdhWG83MjNENERnUU5IM3ZmbTc4ODAva3ZEQzl0SEoxYUxaOEdtaHN3YWJreDVRWUwydlZXblVidVUyZlNxRHp0SzZDcmhKbW8xSEJhR1VKcFhpTUp2TFJuL3NLYWtRMjFWTFBRNlVrQlVDVVVDK3M5WllqS2pkeXdqZW1jRnZyNmExVDAxNG5CUk9jd3htQzh0WWZOcDE5K0h3M3pYLy9VMGEwMGtnTXpQT0RxMjkvdzhIQjkrL3NIRjllUEZrbHJJemVvUGhxZzhZVysydGVIM3FaT0preGpnL2FqdGx2ekpHcm1ML1ZjYXhaMUhESnRJR3JlZU9Hb1ExRGtWTXpWdks3QzJKVTVGMDlqRktsNjh6TTNjeCtxa0JNdVB3bzdJRkFsS1RpOHJyUmZqYTFrM2J4dTl1N0dGdGFmZXZHOU83dTcvK2J4TTlrWkFCU0JVN1BqNzMvTGVlbW9ueGdQUm4rcXlUNVJzUk96TlNOdks3TFEvTTAyVlpCUm85M21SanhQM1JPMGdhUFFIbkQ1Q3Mvak5Wc09sRFlXcmtqK1hVZUJCWkR6R2xSdElhcTM1OVJ6S0FKY1J3SVgrVXQ1TUZBSkVDNjdDTUkybmVvQlVMKzJMa3dzSG5aTGd4V2JGNHgyQnJqMnpFc2Z1SFRseXI5NGNubjRobW5ndVoxa3dhSGxPRGY3b3UvNjVpODdPN3k2K2RQYkwxNzVLakdHeWplR2JpZ2tDMXY1MFFqRm1xRmFkWGhOcG9DZ1BjY0pPN0I5cUJiT3JPeG5SZkhTNXgyMVNyMFlVM251OHZPbFdrMDlSMnJMZDhwY3pSVGhrY0NQUlpmcW9GcWJZc3hhUkRESjgwS1R3UmlCTmptTVdMRkRZMHdsUHpKU2ZyOHh4bzBvYU9TdTNjYm5OLzdyL2VpQzcxYnczZHhlNzhHRFR6R2owKzNpMU5tN2YvdmU1ZVAvOFFPNy9XZW1jRUMzSmRlNUl6ek92Ui8rNnRQNWVQS3gzWXZYdmdvaXRHODlabzRic3ZJbExWNkphdFQxTk5EVTZ4UDFyL0dncVU5d1ZsdDJtbzladlcxaGNSUzFkaHJ2Vlh3enFILzk3RHhCV051cGgyMlYxK2hxUDVYQnZiWU9EQWxEV1M2OFIzVXpkbmh0TUpYZTV5bTliSlVRRkdXdUU0SlRHNFB4YUl5TEw3ejRydWVIMS83SjQ2dURjNi9yVU8zc2h4NU44dkg0LzduMTdNVS9hekpOYlhXWlJpNXprN1F5M2ZEM1ZSUDRlajJuRVNMUmZOM1VUdEI1TGxKaVdoMHE3SHlnZlNaR0t3QnhRUFQ1akFka0dJcFpVcUQwcWd5R1lncnlyTnBWRFhNbENzSkE1aG83T2oyWDlBTnpwV2V5Yk4xNFBNYmw1eSs4OThYQitzLzg3c25kVTYvWE9nN0phdStidHg1Lzhldnp2UkZWWS9ZcDhkZU4wV1pUWXJqYlViS2h1Y2lGSWp3UkhKalJxNGdQQnJyUkRZQTU3K0ZESmUvVktpS0lyalBhQk1Vd0FocUZWSVlDa3c0WVFDbnFOZ1ZvSk9oQ2NCUjZwVFdwMXEvblN3VDE5WTB3NVNHVnFBU0R2VDFjZStIQ0I5QlZQL3ZyWitYYjMvL1M4dlZwYWNPdEN0dGVVWTl6K2tOZmN0L2d5dWJIaHRlM1Yrc2tRR3VjZzV0Mk5qaU1Kd25yT3ROWU9QL2ZQSGxPdmFaelVQZEpaQ1Z2alpSYWJXR28xdW9ST2J6ZVRXOFplZzBQR0QrQzRMOWVjVER6RTdCc1lkUVFlcklxOFVHdDNrcHFZK1YrQk56blVwTThnNGhnc0xPTDY4OWQrS0FlVEg3MjE4L3VISHZkaEdySDNuRi9KemZtQjNhZXUzUzhNUll3aC9Ob3l4dW1ZcVB0aTFwWU53TDJwWXpENGJJd1ZPTjZQU09vbDB6clpXdWp1a3M5dGFBT1F6VDE2LzJwWGM3S2hKWDRKdTBlaGx1Z29JVUgxSHpld01QVTVYb3g1VnFGd0tvWHJTMzRWSm1QQmF4YWxXT3JIam9DVjR6MStZNFlHRzB3V04vR3hnc1h2MjZ5Ty95dzM2WGFSbHJkQ3JidGxRSU9xZE9yWDdkNzRkcTNRY3QwMEJETkJaSmI0WDNtcWJmc1MwVUhERnQ0RW9lSmRTVXZDU2ppa0FTb3Y4NWlHN1VKaFQyQ1hUdTF2clI1YWxETmd3Yk5idk9BSktqWHJJaHI5YU9nUjY5c0lrV3ptOXJUMDNPOHFWNWJXMnRkaUlHc3YzeVp4dXM3My90OWYvdDd2MlVhZUY0ekh1ZXU3L3lLcnhqdkRuOVM3NDY0VGdKVXZNRmhnK1EyV2tYbGs2am1VV1FxODlROHFkdThYaTJFcW8xWUh5UXFEUm04SXJ4RHZUbVVLbk02VlNhdlh1dWlKdWlCNWdpNmU4ZDlUV2xxN2hhUUJBVjlMZ2E1MW5adG93Z3VQLzNDOG1oajV5ZC82UHYrSDE5enE4b2xyemh3VG43Wm14Znk3ZUUvSEZ5NGZsU01GRE1oYlY2bVFRZmZSRUh5dHJyVFd0ZTJWSlkvU2RIYUh5YkI0ZW5zZThuQzdRVk5haHlOV1ozeWhpNUZFZWNwcVBwQ1kxVjgwVDAvVXl2dFhCUTZpMzhyZjFZQjRGcWh0amx1MEtUNnE2eGFNTDhUNWpxRlBKWHJuZE1hNjg5ZldObTdzdm5EdDR0cHU2M0ErYW5mL1JYdVBuVDZSN2FmdWZoV010SUVUSkNvaWt4UHVQYzdQU3NZYkVzd1d1aHAycWUrTXcwZ1lYOVhXM3RRR0xMVlF5Ti9xbGNhU0d1aEd0ZHV2SG05bmYrZVFsVzBSWXZCVTlQaGNKd0hOWlZxODZVM2doUHFjTXliLzBYYVduT2tsaU9WeGN4cSsxRmRmN3YrZTFpU3dCU2NmWEdvbUxMT2sydU55WGlDcXk5Y2VQdVY2OWQrL25mUFo4ZHV0ZGU1cmNENS9oLy9rYS9jZWVIeWY2SjNSemRNZXMyQmcxY3NMR3U5Z1dsZmZxSWlCMVVSUkpSYWtiQjJzKzJuVERxM2QrUnk4cFJuU0dreDE5cWZxTzF3cUVwb3RRMzBVVUFnU0FEc3R1c29SYWQxMlk1alJCZVV1ajBjN01mWmNJejFseTkvWU9mUytuZmU2bnpudGdGbjZiNVQvZkh1NE1kMlg3aTY4RnFVNGE3djlBeGI5K2ZoSnlwZENiVWJzbDZIa3FDMzdXWWoxNG9BWTNqVHR3d0J0b0hWUTRMQkZZS2drZGUwVEpsV3c3ZFpIZFJsR0ZsMFVwdXl2Y2VIY2JuUkdHN3QwclZMbDMvZzcvL0FELytGTnZBY0ZzdDJ1NEREaTE5MDdpL3NQSGY1TGNnTjZMVUdtbGFhTmhoYm5pTkhDME8xY0lLU1hXTm02SUo0eXZUblZEYktsUHRGMjdxVHJaZ0h0OVBTMUtKVEY0eFZWNGJYMmxoSFFtMDhvbGszS2locG1qVjZVRXJ3bGdDeVU2UVdQUGFSNXptMnI2d3ZybCs2K3YxLy93Zis3dkZYdGNkWk9IUDArSGg3NzI5bm0zdkUwMmFNVVJQbG8zWW1waUZ5c1UrWVFqd2ZOU2ZCWTc5YVVqMDhLd3Q4MWJZWDVrRFpNdml2UGtOVHpRZGF4Z0tteEYrdENqbFN5dFBPb3REYjhqRnhQV0tlMHVhV1hVQWhxZUU5emJUbnBOb29yZ20ySVRUN0VVTVYwT0NuU3ZtdUNMd3lhTkFvNm5ZQmFXT0tJYnZKZUl5ckwxeDRhR2RyKzJQL3g4bnIvS29FenVldnZwZ3VQZnJBM3h0YzNYeVFaUDdnKzVWaXorYnRGcC8yZGFISDJJOXlubllwMmc2RnRucE9wUlpUVDdwblRMUVdOejlrNnV0dnppcHhoWmEyaHdFQ1FZL3dkd3J5R21ydTlhbStOSnBhTUsxNG5FQWx4N2p0ZGtiQ0hhZlZrRzIwTzhENlM1ZStQdG5KM3Z1cUJNNTd2L21EOXcrdWJmdzVNOHJLeXlKM2RwSlQ4VHgwOC9NNDlVMXNSZzYyUWFIU0xZMW0zMWk0WnFTeGFTR29sY3p6ODhJMUk4ektlcDNhejU0bW8wV29obVIxRU5TOVovWDNRZU5qVlBJdmxMVWNWd1QxZEgwRlBJN0N6clhHMXRYckMzdnIyei82dTZ0YnAxOVZ3RG4yanZzNzZ1alNQeGhkMlZwZ3ZJcXJtVGZzdlpvZmgvb0QxYkJrZis5YmIvOHZDNkJVQ1UzYmJteGZDd2wvZHFzT204dDNLbDVKcWdWZEgxTHhqQTZGV1I2dHpOMXErYzRVeGFINjg3bGVpYUlGeHdTaFc2NXpWNWV5K2M3bEN4ZmV1YmU5ODFmUGZ1aWRmSmdrd1MwRlR2Y05KOTgrdUx6KzFjamQ0dGdhbDl4SWRSb3NURXNQMmdFRjFjUGV0djF2VUYveHJvMW50ekJNclRmbmxNWk9MMHJSeXFDaEtpVlZZYmlvUFk5cCs0VUszV1pwMWtRNElDdnFvV2I1czZnbElYZnZXd3M0d21YRHhlZjh0Z05ucXRaWkVESjNwZ1pnVDRJUVpxdXhWanFwSFloSzhMaWhPRjFPajQ2SEkzcngwb1h2KzZYSGZ2WDlyd3FQOC9UQ01OR1EvMnAwZFpOcFpnY203b2lPQUpwQ0ZNd2JWRGFtUkdzMGJIaERObW81SUpTclFxc2oxVzJGNEFaZ1dzTTdjaG9FczE5emNaTWFhZEc1THQ4VlA2VTZLM1N0RjRGTnNEQzQwVGtkRWtBVTZHWE42OHFEaHdkUDhaNkp3TGpDYUtaejdLNXY4YVVMRjMrd1RlVHdSajNQTFFQT1YvNkZiM2g0ZUhYcjYwZ0gxZmdaeldlM3JJbnpJRWtFYnF5enZ6bGFYUVZGZUFNWFZPcU1JaVpWeEMzbUMrVks4YjltODJpcjdnRWRYZ3RUT1ZMQVFYY0FOMExDMWxDc29namFsREZ1RHdGcmg1c0RUekdhN1Rkdkd3MGlRcFpudUhMcDhycy8zOW42Ni9XUTdSWDFPRzJJellhajd4eGQzbGlnR2lWOEp6ZHUxZ2VwNWxuYjBSYjZORmtocWVnOHQya2ExRWVxd3h2eVJsaklJb2tXMC9xYTZsNkh1QmxPaGZwMGMrblB0VERuWHNDaldwK2kxakdRc0tBN3RkNkZzZ0JhZjU5S2l0b1U0TW1kMU5Sa01LS0xGeS85Vi8vTDcvM2FpVHMyVkx2M205N2JIMi92ZlpmazJoYkpqTFRtSE9HSlYvTyt0eXc1bitYNjIvS1pjcnRZY3pMUlQxMDJtQzVRWTJWSXZWOU5aSHJvVlFkWFhUR25rdWZVMm5BYWJ6QVJGUEhVTWU2eUowMWFEd0lLM0xEVWhCNHJGSHNZb2haelB1NWFtREpjQTZHbDdsTlg5R3d5Y29XbnFSMW1JdG8rakliek5YWk52V2dZZUwwQ0c3SmR2M1RsNU1iMjFuY2RSanZPTFFHT25GNytuc0dMMTVabnhUMzdxVi9lMlhTMVREMTlaK1lBdGJ5K1dkTzRRVzhjZW9PYU1HRmxkZ1pUdGdqVWhBdExZcUI2czdiOWJsNmtNSHpoWG8yem5rQ0doMGtCc0ZyUnM2MFBydTM2K2tOTGdqd0tUcW5IZXhzeFlvdWxiam53WkRURzFVdFh2dnVILzV2Lzd1UThVZE50QmM1N1B2NVJHbC9mL2pQNTd1aW1GVFpmYXhhT0dkZFA5bm56bU1vaDQrNXlMeDlGTmVHLzl2d0pqZm1nSnBsUlZlaXNreWoxRGdmVW1UT1IycVF1TlZRK3B3bDFFTTJlUlFwcmdlMGI4VXdCK2xDMnlzdjNibDY1ZG1wN2EvdTcybktkZzREbjBJRno4Y25uM2oyNHZQbGVuaElDdk83QlF3ZjN0SzMwdTlSMDArcWhYM0REaGpsSW1HdUZqS1pNV1V4RkxlRlMrRGtqcGd6VDZtS0dyRnEyNVRYWlZCL1cxY0U1TmNjSnJsb1p1bms2R2pYTmdvQ3FOaHI1YUlMUjVzNjMvZSsvK2FzM1ZSUzlhZURVVVpvUHh0ODZ2cnpCMVJpOHhwelZoNWtxSTdWTnh2RVF5TEptRWhVOERrbzl0K1VqYmZsUHZUZXR2UG1rMENJSVE2bFFSM2xlL2Vvd3RLbUlmZ1NGMXNyUENFRlVHODMyREp5dnd0ZjNvUklSRXNYTlYwWFZQYUFDRkh0STl6czA2bVBVMWZVcHBRQkk2RzNDZlVWQU9mVG1QOVorL01CbzkzZGR0T05vWTNEMTZyV0hkbloydi9YWG52NjB1aU55blBQZjl2NTB0TDc5WVJubk4za3F0OFRnTjBBTXpBTzh3L0NIODc2K214SnlyM21OMER4QkVhck4xSFdhNTlGSWFBdWhUTkhRV1lLTTYxb0pMZStUbUtDR2MxUFR1MDBxdTlsd2ltSzRyVHk4YXRTMTh6cFpubUUwSE5MTDF5Nzl6YzVEcDAvZEVjQVpkK2tiUmk5ZVc2WWJ1RDhPazFWN3ZVV0gvaWF1dE4zWGhEenFZVlJkZDIybVIzTnRQT1Z6bFI2b3pEZktrQzNjMkZhbzd6Qk4zMUkzSjNqcVhxYjB6cFpOYTlMVHFJeGFtMkpFM09ESzVTdjNiT2VqdjFobjJIeEJkTDk4NXpDQm83TE52Vy9JTmdkMFI5eTNoODF0djhLa1F2Z3IxYTJneExFL09kQUtqTXFxUmpSbzZYbzVJVHpkQ3dZckNCWEtrZXptV3ZjNjJiSGZhMnd0bmtwMTJyVDV0cGQ1ajU4ZzlSMEdQcXpUV1k2dGpZMi85bVBmKzRNM1ZOYzVOT0FjZmR2NTFYdzgrWGJKOG5ZUnZDbUZyYnBPV212dWczWUtkV1lZVjI5RG1ESzczTG95cEtCTzBkRDZxczdUU0xINXJLelZWTU9hZVU3MlNtNFRlSWRxYmpTZGdpNWFkb0tmRHlxOVVTZ1lNbFVUd2RTN0h0Z3V6WjFTSi9JTGR4VXhsTEtMZGUzSnJoc3RONTdkcXVaazFNcnFoWEFvZjI1N01kcUlBR0pBSWlCWHU0Rm9rQmlRTVlCeERKdG9HSk5EVE83R3JuTm9uZUg2MVd2M21mVzkrM0VEYzdRM0xJRmJkMlhMNzMzby8zcjk5NTVLeUJjOEQwQkIxeFZxWC9rVEhwVVdISDhqKzdvQjJwTGVTbkZUcGliRU4vcUNDSmc1amxEMHZLRTZabEM4NWxyTzBqalY3VloydDhMUUJBUkI4K2RVQzh0U3JkK1FhcXlPVjhRUVJybVJvRUd6dDlQejBsYmthbzBnUWltdXdBOUorZjVKY0tQWncweGp0TGRIRjdldS8vZjloNy9vNjRhWE5pYTMzZU04OU9FUHFtdzArWXA4WitpcXhQTXpYbmRxQzA1WXFkWnVYNHZ0TzFQdDdTMkJ4eWx2MFBua21RNy94YmV2S2pFdDNRRkZIbVNrMHNXTkJ0MWJQUWg4amxPdHpYQzUxYnE0U1UxRm03cDF6SHphOVF5bVA5c1BJS21BcGxMUENibzFpa0lwVUNtUWFpTzRmTzNLQjM3OTh1ZSs1S0JlNTFDQU03aHdQVFY3NHk4eFdRWUJLaXZCRDBvZDN3bHBpUkdwTVUxTkdhZTJONyt0TW44b0hrY0NoYzRaS3dGTlMzL2R0TG1ZOFBPS1ZQdmh0Yzk4VE52bjYyRmRjMGlOMmx6bFZPWlI1aEE5Q1d0WkZWRVBEeXlEQ2xYdHdRTUFvOTBCWDl6ZCtMN3UwZVh1ZmxIVm9RTkg3am55VmFPcld3d2pqY3J2dkpPSGJRQ2E2cUdtOUxjMVFEZU5JS2k1dVliZWdLTmJ3eHhtMWswYmhpWmhuWWFvWFByVWRtUE03VzJEZks5WWlGdnJaZk05YVEzVjBEbjh2eFlOSW9aU3FrVUwybTZpcnN2ZUZyTTJRV0hUTDZYeUF1MTFqYnpXN3VpaUFaWXJZd2J6aGU5VVBUUnFheEhMMVNtMTZWSDNzZFk1akRiWXVIenQ3WSt2di9SR0FPcVdlcHc2RWtuTG44NDI5d2l2RWYyYThOU2VOaVpjRVYrdnpkVGZhdVZSZTVOeFE0eTk3YlN1NTVIMUNWQkNuYTFxTmxxMmpaRkxMU3d5eGpYS1V1bTFXejB3eWxYdTFSYWlHeHZvYUpBc2tOcTR1cU9yQmEyZWVKeFBzTG05ZlZLUEp1OEcwTDl0b2RwREgvNmdRcTdmcDRmalFqbnp0VjVIcWJmK3Q0VjY0V01XVTM3UWExVVIrWkNxMkxvSmhzYkN2Q1ljMjU1K0MxWmxkMDNSODlXeXMwYWFkU1F1OW9QU2dhOGxaTDZRYkhvdVd0TFQ0WFVQODFTRWdISzFIRzJzZHh4bFkvcnMrb3ZmellrNk9tK3VjOVBBMGVNczFZUHM3U2JMOTZYRkRocXkzVFRUUmkxanhuUGN0V0VJWWxwNnVNb2VLTk1JeGRyYWlRNTJoc3JzbXpzUS9haFU1Zzg4UkNtTjJac0dRR3Z2MkZURjB1Q21ONmFVZ0twSSsxS1ZwREJPaG1xZTk3L1Z3NGc0RGpHOE5xaVJBcllCMWdPbFNCWXIvVzMyZ0xpNGNlMkJTL25PbStkbG1tOGFPT1pFL3h2SDY5c00wNXp2RHlWY2J5WmttWGF2endXdU9taHUwS05VYWc5VHRnMjBNYWV5VDVtcE5kbXVOVUxXVjNoTVk2VEsrb21wM0pqMVFiTTIwQlM5WHBBbVNLYThoNTU2RHcrWHNBZk81am5jcWh0UmZNeHVUWHp0NityOWFNWllJVXNTRFJJTmhxM1hlRjJHWWhZSFlTZUJ2U25KMVh2Z1puZGc3TXlPR0EyU0hDUWFvL0hld3ZYaDFqc0JkT1loQ0c0V09DUVQvYVdUalowNE4xQkxxR2VCdVEwa1liZHk4NGF2aWpHMnNYWkZmYWEybnZBZ0IxYmR1NFlVZHFGdkhkSzlVczd5aE5vQ2Z2SzBKTTJvZGJGV3F4QUxIZXlJYlJzdHFCOEFsYnhIbktpSThjMnM5dmNlWnhsOTd2cUwzOGlkWlBtV2U1enozL2IrSkI5TnZqYmJHZDZHMG9UTXRiSGdqc2lCZ21wNFd4MG5wT3VOa1lBeHJLNEZLWjVMOXI5eG10N2dBTmQxeXQ3UmFadTI2L2xONis5ZmhFUUJxZEMyOUtwbCtDNmM5NW1ISHBBZ242blEwNml1UmF5MjZRU3I3bDNZZG1WNzQvN25oOWNmbWdjWE53V2M0YVdOeEl6ekJ5WFhCNHhWRDVOaDJ1ZG5IRkpiZ2h3Z2M2Mk1oRS9wcDJvRDBiU1F2aEczbzZYMXhIK0xxYlVGN1JjbU4rbytiWVJ2alhLdkV3YUJCeXBhak5vMDR3N1FzUjJHeDlNdmZmTlFrUnJwMEdUYzNPc01jZ3RqcklmY0hRMldOa1piWDFvUDF3NGRPS05yVzkxc2M0OGFMNzZXNjRTOVhQUG02RVV6WWEwMS9jREpVUnQ0aUdibU5mV2Nwbkc2ejFpWVc0Uk50UjZzcWs3MG5BUUJUV0hUV2tLMTFsMmlOZUxBR0dua044Wk02V0Z6VFpHdE9WSDk1MU93WTYzVVdwK2FnOWJISHVwMDlMU2ZVL0Vxd2RoNWVhM1Jqdm9aMTluLy9pS0NQTS9wYzdzWHYzM01adWxXQW9jV0g3My9HOGZyMndxdk5ndm1ORXh0bnQ2ZnJHMGdDdWZjNThseDJzUUU1M0Y2UlcxSTV2TjA5U0p6Vy9obTJxWTBXOFlOUXJWUWNXczA2aUVaWVg5OU5YWjFwbms5ZEhWTXJVMURlc3FoV3hNb3JIdWRNQmVyZGxkVVY2ajQ5L2JxOXRiYm5reTIzblFyZ2FNazA0OW1XNE5YbjZaQWtJQzI3WDhKUVJST2VCNjAzaEtHU3ZWWi96YnZXcEdJZ3JRcWFCNGt2NnEyTWJXMTQ5UzhWdUhsVGZYMUIzbU9OdExLZWgyUXVLeWp2aG9NVUhXTFFmbThVc241MmxSdklFMGdOZkk1TDBZaWdkZHhvQm9PQnJ5cHNxL2ZUMy90cG9BejJkaFowcVBKM0ZmcnRxdDFFczNNYlNwakExUENzRGE5TkRwZzV6ZlZSZ0QydTBZVlQwVUh1NjV0MjZIRGhzenFGdW1TdXRhdUlHZ0NzWXZ3QVBHSHlEUnYya3JrekJpcE9JaU1jZkdzbFRrYyt5ajhVeGp6bCs3SVJSZjFLS0VTOEZscTJsSFdKc3R4NmRLbGQyejh5YlBxbGdBblhlNG5acHpmMTNaeGJxU09NN1ZXZytrdEpYT2RkRzAzK1F4WnA4YXBQRU54czBFWEJ6ZDl2VHRheEdwSVR3dmZpbVd4YmZVU255Tk9hZlJzRmVnb2VySmFhRnUwQzJxWGpCYVgwNXpNclIzTjJ1MmlhZXJDVmVsd1lMYTNabXBmN1ZHK1ZhYVJ0SlNTSWFIcVRkdERTc0pFYk8yR0t2bVFxL0g0Z1RkamF6dkQ4ZkFkdnpONDdzRmJBcHorcWJXVUV2NnkxMG9CNXlDaG1PeFRJNmtvYzZKc0txenJxSlV4OXp3TVV2dnJtTmJaVUJmd21PVWxxd0EzQlV0V0VsY2xrZERhUmlRU2FMQk5LYUllRXRGZnZyYnBORHFtelBUVXRkaHM0N1I3TmxPR2N0ZXVYVHUyZlhsajlaWUFSN1FoUFJ5LzVncWZjMHZPMG15NnVaUStLbWxudXk0d3pDZWtjZk9iS1RKTkRmWnV4cmlBdnpuQ090S3NYNnRONDh5NGtlbUtpS0Q3T2orUVZ1WVk1WkxiVUJ6d2xoeHdRVEd6Z1pOUXRVamF4eFBDalJJRmVJSndUcHNjNDhHUTFFcjNxMmNGeWpjTW5MVS85ZVo3OVRpbi9XK3dPNGRKbTdlcjhtWm5hTnBvMkhxN1REMXNhcXQ2NzFkN2FkM2NSb0d3QnRxYlROdGVodzdxTDdNMHE2bHk4OVJsbW1vM3FleC9YYWU5SFhWUFViSmcwMXVWeWloTjl2WFVvVW9wZ3B6TWk3VmZ1M2I5Z1Z2aWNaSmpTOSttaDVOV1lZNjJPczVjSjhtVS8rYkJ4RUgrb1cyTlJ6M0htU1YyTWEySU42M2VWRmZnRE5rc25xS1lXYWVHMnRhMk55U1RCRk83bUZ0clpRNHMycFJOcS83NXVaWmJhbTJDSmJ5TWFhdGI2ak14RW9SMnJYbldqQVBXVkNaU1BXaHFkVEhJOUZhYnFlOS9XYmdOSXNEaTg5b1lqTWZqTnl5ZU81RWNPbkR5bldIUGpMTTd1bGFET3R0eXUxL0NsSG1SeHBzUWJBcG9QU2Zxd29vSERDTkZEcEREK1piN29QdmJQNmRmNUZTRWhHRVJzakt5M056Z1pvb2hNbDBkY3c0T1J6bWs5Mm1hYmtIZEU0YWFhM1ZRYlE1MzM5TlpYZXdkS25EZTgvR1BraG5uNTAyZTQwNDJlY1YrcmxScUJwVWJhMFl1RzZyVDFIK1JhWFdUL1NqZE5ybW5nMTQzTDRKQmxiL2JpVk9nM01SV2xacWEwWURwUHEzOUpPc2hLbm5WUVRuTjA0VWFFUkwrMXNheW41dWJHM1Q5K1lzTGh3YWN4ejd5TVd4LzRXVWxZajRvNWc1cXRtemhzMjk4akljTzllc0txbmRxQVhUMmRUVDc3TXVwaEdRSXAxZG50K25VS2VTS2w2enRLbTJyYjJtaks5M1BwcktMWjNxSVZDbGlTcTJtc2orTUd6a1hoZlJ5Tlk1RHBWb0twK1FqNGRlVjh6bitQMFdFeVdnQ3l2VFNvWHFjNFpVTk11T2N2UGJZalp6Rys5NW9NelRGV21zK2pZV2k3Ukk2c3M5Tlc5Zjgyay9IdWQ3TmJHcEsvVXl6ZDVyT0JLQzdJN2oyZW1heEx0V081amxBVSt6ZkxHdFJqS2FvWWFnUFY1R2FsWkorcjRaNzAzSVpLcGk1Y2d1M0tjVFJSVUptME8xbEJjQUVjR1c3dGh0azgvTnB4c0Fwcm9OQllIRmZiOHBhRFluMzNuRGZKM2EzRG5RUm9ub1FpdEhJeHBPbGFlZnZEZWM0ZXB4NTBhbzdoRWErY2FtcGFoaFJYL0E3SDdGUlhORGFLWDlZdFl4R1BTYWtmdmM1Z0JwMGN6Q1ZXYS9MK0JXRWtLWkN6bjY3dWNJOG9qV25FSm42UkdGWGdMU1FLdUZycml5WkNuTWt0Sk13VTNQT01BY01uaURYR21TRVNLWnJFTnd3Y013a2YwM3R2Nm56ZU5QbzNtcStJdTFyQ2ZmdGtqallxc1N3YThCdXVEUGxuTWtCQzZhVkc0aWFXeFQ4TEw3UFdZcU9ocG1DQlZWaUlKd3ZxcU91c2UyNmRrQ0YzZ3lOSUs3NmVrMnArMVFwaWpiZVQ2azJjNGJVZGxnRDhrTnVBSkJwZ3o4YXZQaVdhZWZGalh1YzBlVE91dkhkQmk0eE1wK3VRTzBObTJmWlUzME54YnhoNVg0NXozN2dhUjNMcUlkSFV6ek5QTE5LalhXRzRmNGNxaTYwOGhSeFcrTHQ1WjYwa2FZd0lLU1ZXU3hDTTFQZGZCTnFwSlc0RTBpZG9aWTVDSkU2L1l6cS9Gem9zNHJmVHd3OXUzZnR5dy9WNCt3OGMwbnBjVWF5RDkwYjlxcTF6YWdjbU1xVmZYclNwdVEwczFMT1djdGdtNkVON2Z0YUszdHEwSzQ5VUw4WnB3SW5lUEgrcGhSakd1bzFqY1FiYUczZmFld1diY2xEVENXUEtNSGpLWE1LcElGMUFhTDJhMWJrTEtaSjkxYUZOS1M1dXFNaGdPSTl4ZlN4anVuRlZMUnEyNFhYWHB4aWdRT04vYmRjdW9jS0hEUE9xRkMxZVZXRlkwM0tjcDdRTFF5djZKRENVbithVnBKNWY5UDZoOHRVNjRYUDhLWXVUOU9XY0REVURHalpLdDA0Wi95NEJVMUo3TkhjbXVhcDZMSVBMQUJwQ0VneGxlVlBJVEhRRUFacENhdmFTQnBCTTYrYWwzMXRQYkJxaFZCbFpPRlF5WUZzZDZoRW0xY2RhQm9rd0p3c0g4M1JTbjlRSXFQdXhRclFoUHlxVk45TS84M2Nza1ZhS3F2N3pNeGNxejZWV3Y3ZDFGWisyT2ZRMnBRdE9mVURKd2ozS21mNnRPc3J6UzNjNFVGU3FhLzQvamZUMUhXcmU5aDUzcDlLVGxrSFovMW5ROERhTEdES0dQVU5BZWZJKzk1MEhpTFVHa3U5Qm94YS9wc25GemtNcTR0ZlNNdGNlc1diQ0NwYm5kdnFNNDE1bmNxYUVnbW1RNnRUbThWY0R3ZnJVR28xSFcyQzhXTVQwdkttL2NDb0FhWk8vVmZFQklORGppcGVSUm9Td0FjSjdldDVXVmdIQ2x1Y1dLZ1BJRzE3bjI1b3pRZjFPdTgzMnRCQlQ5bURVclRUZERibXVYOEYrOWN3aXQweTdxU2V0dGgyNXVxSkdhKzdTUU0zY3lhL3VTelVENnRyRGRSRkE0dmFVVU9ybTZvQ0ZZNUFNRFh2VmlsVXRoQVBJUU1XNWt4K3Exa0Y2RXd3QnBpaWExanAxaTYzUUFlNW1pa25NQ3M1aDU5RzlmcG93U2ZkYjJFRFJWTjczVFE3YjY3dVBKVkN1eHFoem9QN09SdWp2VE83aytIaEFVZnZEUHN3NW1CM3pTSGtCQWRCS1RVb3pmMFlLRHJVVUd5ZTF5eDErYVNXRjF5SXJBY0pTYkdlblducWpWNVAvRVZhS0dTMHo5V0U5NUZudk9vajVDRWhvRVZYQnRlTUc2QXpVdXNRa1BMMzhTRHlIOWNWYTZTaEloQ3lib2ZyK1VPOGhZTnhsd2JyOXk0Y08zSm9vUnFaU2Q0UlBYc0R3S3M1UkR1TTU1bkhRMDNOcitwNXdCUWtjbVdOZWxOQ3lrenBGZk5QVmRlaE5vVjRldm56L1VZM0kxTFJmU3ZwNlNiVlc0OHFLck13TXExT0ZlUm9BYURDQVVCcGhHRnkwNENwNTF2aE1KNFJZRERZbzBQek9DYlAyYnRQQ1pIYTFzYytaYXB4V2hnejAxbnQ1ODFxRzRkbmhXZ0hvY05uZlgvck1Obk1FVzlwQlVsN2lGaUdGNDF3TFJ3ZHBtWnhNOVJ5bmxianFid1U1NlY5NWlvMVNWd21ncDVTc0dYaWdsMHJGOVRhNTlDaVc5Um15dkRQTTNHbUVIaHZaejRMVHlQdEZENkJJTlJlOG1oVlB3MDI2eFdiM0FRQXlWd3pQVGRFRHBCU2VuYnNjM09uOWxTZ3pmSnFVbTI3SUtLWjJtZ0hxU0h0OSsrejFucTByZW1yVU1vMC9ibjNHMEZ1UzRpbmVaakc3eitsbjQwRG9RK2F0dTBaUWFHNUpSU2U1a1hyWWJFSk5CSGdGL0xXdXNvcm03UlIzU0tIR1Q5bkdsa3c3WUpWZDQyaU1rZDBXTUFSU3BVV3VjTTZvK3N4NmkzK2NRY3A1aDdJdTJINndWQ3Z4bGZxT0pndTVOY2FIaDVRWTZHNjBOYXhacUd1Z2JUVVpHcS9pbS9rTkhiQVA4akpwREtRRnA3NTFmSHNtODl1QlBPM09zMEN4NDJFYXBSZDMzbWNtTVNJMEVGRnNtOWxuU1pNOE9SUWdkSk84NFoxZ0p0eXVMSS9VbVhhbmgxVDVnWU5hYW53WnA4eUpka2E5NXNxQ0R4UXdqNHkyMzRVa0FBVjRKY0pRNzBkU1lMUXJGcS9RV1h2WjFVTER1VUlBS3JyQ204VVBQTjFyMHcvaTI4b1ZOdjRqYzg5d1VuUzdDdHBDNXYyYThkcFd6K0lPWHErWmhEMU1tOStNVmY0MDk3RTJkYTZINzdSYmJKTTFSUDhBSEpYTGFNQWphMWpNb3U1azVhd2NjclhtMnI5SkpTSUxjSWtVNXZacjR4U1ZEc1V3Z1cyUmM3cjJUaFRlcUJLYzZleE1rNGtHbDZIcGx6Ym9SSE8zVFFLb1ZTN0V5aVlEd29IL2NuZm80RzZudGh4QlVZNXlpQ0FQalRnZ0dCVUo1M3A5bVRPdzNSS29lUEFTZEMwdlVyVFhoOU5tOXVmY3JPSFgyZkNiYzNTM0Rhd0gxQm41U3l0ekZOWXY0Rk1EZTNDTG1xN0lZMzJZZnpLdHBkcFlhS3BBNi9lNytiWGZHQjY4MnQxZ0UwYXpabGxpT1owejhRQWJrWUdKaEJ5bHhLb1ZKbmtOQ2dHY3hyVWRSbjBGY051RmU0NUxIOUtNYTlESmE5MWlOM1JSQnFLR3l6SnJVOHNEcTg3b2JHZXIyWHR0MmVNbWl6U2JCRzlXZDd1Um1wRjlVcTNCRlJtcUtFVzN2aUtlSzVWOFVVWTFGS0pMNGZVS0dqQndiNWQzUVZKUXZWd3NaclhOQTRUcVhvKzdid0xRbS9YT29GemEremgxYnNlVzlISjhQRElBYWFNd3FuQlcxMi91Y1hBYkcyUm43SEtNSnlNbk8vbXZEbUJ2cnBYREhYSVMxcWFxaUtJZ1l3dDFlbzlVOHNNVXlLSXNGdEFwcEFrNGU5cXBDYjhGN3oyNWtyNTZqT1UyK1NxbXg5Q3djUGJaUm95d3BSUTdjWmFicGl6a0ZyY0Yvc0hMZVMwL0YybUpQM1VRZzVNWjRaa2FnSWQzdHlWOVlHMXYvczN0K2h1cnEyWG45WkIzZGJTTXF0MlU3a0c3Z2ZNcWgrMU5VM08rMzRRc1pPQWxha2QwV0hoa3dpMTBRUFpsNHB1SzVLYWV1UG1yTnd2R05Hc0RLWTFOS0VQSGcxVVBDV1ZvWjBtR2JnWThIQ0FvM3FkRVJJdVkzeTAxMHZtZnVHeVg5MEVVNTliNWlTbjZreFNPT0c0SHowOHJlSTlhN1ovbjNlb21qZEkrOTZjb2tzWFhLRy9kWkZvbzZWTnhkZUhxb3FYSVJ0bUFtRU5VNmh5MWp5REtXZW9tTG53T29SU2g2MnUyamtycHpNdG93S21UckZYaE5LcjVFU29SMURWbzVZWi9Pck5zYWlaa3AxRDlUaWR0YVd4V3U1SmNmTkJicXNXRTkzaThHamE4cWU2RjJwTnZtOUIyTnJ3Tk83ZUNMMG56U0RoWjRWbzN0dVlLZVBjamNLbkNJeG9LMURvWjNHa1NoSFh4UkVyejFHNThhVldoeXFmcjVqdGFSUWtEOVp3ZS9BYWp5VldtQmlVMEFVY0pxdVc3NDBtelB4cFgxMXVTNkJiNndQQW9iWG8wUXpXN0daekNxWVdkVTVDaGFtcWR2STIxNUx2ZHpHS0JIcCtuY0NXZlRaVjVtaGFyMTNJeGdsYUtITTA5M0RXcjNIeEhycmV1WEl3RHZWRjZUT25URTJoR2xwbHlob0FoRFFMcEMwQ2k5VzMvdkFPTFZac3Z2N29XLzh4RHBOVjIzdnhhazZLSHljdW0vNzIyeHREdFVlREpXdk5DNnA5WjlWTlcxVmF1ZTIwcENuL3pSM3YxbFozTkZnalRGT0tiSm0zMzRlZnI4c3JWUWZFcXJsVWc0RUtGV0F3dTFXa3lwcEoyYkpQSVJsUWJYRXBIaTJpSFdLa3RZb3dmZlZoc1AzWm1KWVZsMVVGR3hJdjhXU2dxQXBWQXdPaTlpN3FZbldIbUtBVzVJbVZrQnJYUlJwREJBZ0ppTm1PaHJPYXV0ejJSc1U2SkYzdUQ5dmM4RFFBeVg0UGQ4R016T2NuWk42Ylk3OUM0d0dhTk9lYUE1S0Q5WmVWU1hJVlFHMmJ6dXBoL2N5dnFlZUVhTjkrVGNIYXhNck5qZmErdWJLWnN6MmtxL2UzVlR4YzRERk16WXVGcTlSTkFheGFqTklpM3RHOHc2YWRUdFZZeDVady9JRmtpazF3eGQ2ZE5FRW1lblRZd0VHeTFCL0JkYmZXVDdHYmNwR0gzTUp6bzYvbmRxNkduMXI0YkkzQnBTRndFWDV2ZGFsWFM2RzBSWUN4N1gycktOcUU2MGltYUVUWHZZdzAxbWhJeTk3Tyt0aEFXUWd0cTZRU2RKRGJ4MzZyVUZvOWVXMFVJYXg3aFg4bXJDQUNwSjN1U0RNR1UrLy9HMzJ6VmIrVGNTZUJqQ3p2SHE3TmF6dmgyaFF6Vy8rOUZsL2ZlQTVFdHl4WlAzU3lZMGJmV3l1dFcyTUhUU0I1QzdHTW1qSDd6ZC83c0t4c2RQY2pBUFc4clhKamg1UjVLQ0lZNWh5VlhHemFQaDlwRWVab09SZ2FIUWFoNHpqQVNzbmdxdFZGUndvZ3Via2p4WVN6cThjL2NTWmQyVHQwajhNTG5VbXkyQXNLVmFiZFZZc1hxZHRuWlYydFFsMFgxd2dMYXZXOFpoWkFHbW8xcUk0ZnoxcVZPSzFaSVd6WHFiZkJ0RTZTVHB1eHI0ZVRJblB0YzYvL3JqeURGbTl1QktpRHBwbk1HMU1Pc0lYdkJScWhlVTE0cExMbDJzeVdlV3FFZVZJQm5MVFVxQVIxb1VQWmh6cXFwOUJoamhzZXJOU29JK1Vwcms5ajFHN0s0d2pSTStuS2dveXZiOU8wRTNScTNDL3RHc2IxUWx2bFJtMmJEUW1XcDVwcHJUTXpxT1A5Y3BwcCtjM01xYzZaaXBlb3lEM1ZWV2FLbmkvblJiaFlFUy9WTm54cHA1a2JZOU5lN1ZMQzNLTHNzV3RPc3pXTHVjV2dXWmg3K0tHekZvV1lzS3ZhNmdtWVdxdE5NL1NzMHQ1by9mdisxVDFNSVNMS080eG5iUDR1dHpFUUVwWEtRdEw5NUV6SGNhUEFXZWJlejNXV0Ywd2oxTGlKbkdDYWRsbmRoWWR2ZnZnVHF4ck9YTjI4TE5LYUkweGJSVGh0eGZrOHVjbzA3cjB1UmxHNTJldjVRU2c2S05VRHhNNzRoeUxscGFjd2daUlNJUkViOW9uVlpGL0xxS2syT2VyYlhtcVJRcVZEdWxLTFFVMHd2YVNkdyt2UzNLQTJvMThRTGUrWk5QZit6SHFmU3FXZjZmZWMxNGp6VzdWVm1xQkxuYzhmS25EZTgvR1BBZ0FXN2pwcVZMODcxNDNmaUdHbnpZek0yQWdRaGpqMUR1UzJYU2o3TFN2YUw1OW9lNTQybW5tYW1ONjBuOWVvbnlCWVdHdE1vZjRTenYzN2Q5MnVWZGVsaE5LVTJva1JWNXdNWklIRG03aVFhWnFpUzJBQ1lnRDdLUHpVZDJzVzJ3MXEvVC8xVHV3cWZkL1VUYWhmcHpiWjNBUG51bE9qamxKdGlKalI2WFdHNkhZdXpTVEhic1F6T1BDSTZpYVhJTGdiWkdjcmxGdnRYVjRFTHFKSkpZQUJ1K1p1Z1VidUlwZkVWcTh4c2ZQdVlWTWFoVEdycXEzTEN3YWJZS0NFeXdzbFpSMmR4QW9KRVNYdXk3V3RVQ01IeUo3SmhoaW0rQTdqWmpVTXZGQnhJZ29zb1d5dEx3VGFOekFWcWliT1FSSGZ1ZVRHaVdmZmQxK1lZUWo1Si9RbmZja3FzU2lJaUZ0ekljVzhmRkh0SjREQTVhSmVzTjJpTFBaV05tRDNlMmZCcW5NRlFXSS9MMW1qVmhiRy84Ym95czNmT0xHcEhLb0xaMnZxM2ZQR1NPc2hLa0VITk1QTDhFcjVmZ1FqQXcwaFIxTXJQRHN2YWNzMWxlSllXVU1rdHZNK1JHQndrVlBaVFEyRVk4dEhmK2ZjWHZjS2p0eUNVTzJ4ajN4TUc4WXZpYkkzVGNLcUNKRUtkcVpJNkEwTUR5QThndkFZaEF3TURTVWFpZVJReG9CTkFtVVVsQ2l3KzdOOEVGZ203cEZCU1FhV0hBejNFQTBSS2g0bHUrTmI4RE1BZXdEdEFUUUVhQVNpSEVBT1FnNFNqWTR4U0xWQm9vR3VKblIxZ3E1SjBkVXBJRDFvOUpCTEQ3bDBvYVVITFYwWTZVQ2pnd2twak1ISVNFR1Rnb0dDSVlJaGdyZy9MVUFkYkFrd0pBQUR3b0RtOHZiUTVMNU9nRnlBWE95VVNnNUNKc0FFaEp3WW1UQTA3TVBtSUJvYU9UUnk1TWlSMFFTYU0yaktZVVJESkxkN1lLQUJaQ0NhZ0RGMjF5RU1CVkh4WEppNk9XQjZ1R3FtU05nQzB6WXNtRXBCdG15dENRcTBtQmF0dElqUFMxdEJ0SmtmVVp0bllrYmU0ZTJQL010L3BNTUk2OURJQVFEb0hsLzVUUGZNbW94ZXVrYitSRkhNTlpUYjAzT0NMZ2dLU2hnRUJvejFQeXpXQThDaHZmM2RZSlNDaXRKUWhoRXkwRFN1RmJmYzVhR0FoaFF2eHN6dU5GS0FBQXB1MnM4QlRZR0Ryd095SklObVUxU1p2U0NlL1UwMWN1N0NHQzQrNTdkbGhodS9MR1ZQeFJJall3VEVaRU1pUVZuOGJla1N6bzB1M0pZQklJYUtRckg5TGJodzAvWW5hMmhpOXpNblVHcGlmMS9ERUdFd0VudW9PSzlxUkZmVytqWElIZFJZem9acURWb0VCYWZvUHdmMHRUOWNQV1ZHNHNZaEFoSkVadmFtSGM1SVM4SFVFU0ZSaWF6MUZ2L3BZeC81Y1RuMFVNM2JtVGZjODVNdlAvbmMxMncrTy95bUpCZjB1NzNBVzlaajBnN0NyaVlDSUpRam83SDdlNzl5b1Nvc0doR0F2SHdicVZvSnRxZTFLb0hWc21pMmJQVUpYYmh4clJVNWhFMXhVMHdzdEFQdjFRRnJCWUp5ejJOdmRuYmcwRVpENnh4aXRFdWNjNGpKb1hWdU40OUJJOU01UUlKY1p6Q1NRYnZ3eDVEVjd3SzUrVWNqZ0FzZmlCV0lDZG93eURrTGV3T3phMFprS0dJa0NsQ2N3SkRiWDBZS3JCSVVnU21KZTZzVlJKUmJScVpoSkN2a25Hd1hNcXJMYmR0WXJubTZLTUlXbkVwemFDbEVXTStyN0N2MXJUMm1tUEwwWk1pc2J2Wks2SFlnRVpKd003b2prMUlsaTcybHorL2JBSENqb0huUHh6K0t4ejd5TWJQOW5qUGZkem5iL29xZEM5ZU9KWnhnc2RmRFNuOFIvVTRYM1VRaFNWS2twSkNhQ1JScEo4bXFRTnhEamdRNXBSQmtVRkJCdTMyMWdPckpUd3Ivbldvbmp5Z3ZabHRJWmhVZ05CMlFwUGFHdDdkSE1jOXVTOXNLWWpvdTNzOUJ5S0FsaDlaamFKT0R6QVF3R2JTZVFKc2NJamx5UFlhUkhMbGt5SktMZ0pvQXBFRktJSlFoU1Eyb0kxQXBrSFFBeFlCS0NLblJTQkt5UDVzTmJMK2YvUjJNejgwTUIySjhoQndLazBHTzhkQWdueGlZRE5DWkhRL1E0d1NUeldXWWpDQW1BVkVIekgyQU9tQktRYW9QVFd0Z0hsdXg5b1NnbEVBbEJxQU1KQWtVdW8xYVdpbW1VWlhySmRzNjFpaStHakgyTUdqekRyWHVaajlvWjhUMm9LSFlhVlFDcGxEOHJDajM3UytxSG9Jb0xFTVUvNmZnSUEzV05mcTFrMnZMcTA4OTBqbjFoVnNHSEc4cmoxMTgzSncvK25NN3ZQazN4dG1FZGtjRFhONjhCaWFneXdxS2dXNlNZSzJ6Z1NObmV1Z3ZkZEZSUjRCOERhd1hrYWdPQ0F5VmF6Y2c1V29ZZmtjNTJSTVc2TGxUMkg2ZXVIVDdFRWMrdUlZK3IvOXJZSkRuT1lRR0VCbkJtQndhRTRBeUdCa2hsekVNR3hDR1VKUWh4d1NaM2dONEJLWUpwSnNCcENFWWdjaUFDVWdTalRRQldCbWtYUVdWQ0ZJR0ZETTRBVHFKQXBFVm1pQnlkQWdCb0RMQjVZUUEwWFk3Z0dPNG1ObjFqYkc3QWJoSVEzTW5IMEdjZ0VUQkdFR3VnY3hvR0ExTVpBZmpBVERZRWV4dEVmWTJCWHNiZ3NGMmp2RzRod2tkQTVOQ29oWkFhZ0dHK2haZ3FndkZPVkpsa0NobGdjVmNPZzBKbVRLcGRBTzBwaE11WFBkNVRoaDJoUTJ3YUlTam9XQzdDUVRRellIS0FYWFFOTXFoVkdWcGk5Mm53UmNjWFRueTJDZi8rSGRHNXgvOTJsc0xIQUQ2K01Yc2Z4aXVIZnZhQzlldlBFeEV5RTBHbUJ5VFBFZVdUekFhNzJDMzgvdm9QOWpEMHIxaktOV0Y1Q2VSeUZGTUtJV1JGQ21mQXd2YkhFbklSaHhNd1ZsamdxVktHanJQa09rTU90Y1FNd0RUaGtza0JmYTkxOUJHdzVqY01taWN1NXRjQTVSRDBRUU1BNVVJdWlaQnlpa1V3NzF4R1lBTXpEa2dncHg2Ym03RmV6c0xUcEtKWGU3cVdDOS9haG10SzB5UE1ia2JTK0NnMjhDNFpOMytua3dDdUVTOTBJUXVtRUhIL0FSVVlTY2hkSWxoU01Qd0FId3N0WjdLZEVBbVFUWW1qSFlJdTljSDJMcStnNjNyT2JaM0ZJYVRaVUNmaGxLbmtHREJraEdpa1dzZ1VaYVJzM0NsNHJRWENjOTlxcXh1OTZMdWxSWWdGLzRoM0R5QWRqVlA0NWRGMVVJN21HWkNmeEFLbWlwVVczdlhSUlU4QkpVbWNtN3gyTSsrNzlIM21GbkV3R0VCQi9sd2ZPbXUzdkovUDFtYS9NVFdjR2UxWXhna0NreUEwUjBzSmgybzdiZGc1OWwxbkR1K2g5WEZQU2h6RWNBMUdCN0JKQm0wNmhlYVhsYXptQ3JrZ0lnQ3ErQzBTMzNUb1FHRW9LUnJBVVAyaHBUQyt4aUlLQUFwMkZYanVXQ2RMUjA1Nlk2UnNXMUxJaUV3SjJCSmJBaEhRRjhNeE9pQ0F2YnNvZkdxTEltdm14QTBXZEFMZ3ZZaFJVR3RRRUNzSUVLV2lnY1Z2SWdOVVRTWUxZa1FMbm15ejJsdmNtM2NGZ0tDSlZ6MGlvMzhTRU54RHZBWVNtbjBGNEhqeDFJa2t5NXlLQXkxd2U1Z2d1dnIxM0RsNVUzc3JUOFBNNzRiUktlUnFnUktLYmZXbzJ5M1VjYUdZTGwyNEFkRGsyblVkMHpMZUVLZGVxNFFEUWpJQWE5VTR6eE1HWExQdHlDNHRXdGxqaEdYa2s2M3YrL3E4dExtU0UrZW51Zm5IQXB3QUdTeU1malZNOGVQL3R0YzlEZU5zd2t4OTJDMGhrb0kxREVZZFpadzhlclRXSGwrQytuRFcwQ3ZBMk1Xc2FqSFVCakNvR3ZQT3RXOEVMWmJWZ2NCZ3dzYlhMR09pRUFxME5VeVV0SFFJaktBakFFbVN3VUxnVlQ0UGpPVVorM2M5eHZvb2g2UVU5bERWb2g0ZUlxRDJJVTFWTWowVnNiSktTd0tPMjlqVEpremtQMVpYaFdtSEhEamtoNFdjaVNkZ0lYS1prNWpydzJ6cGVQdEMxRVFTV3l5S3dSSkdWbkh2c1l1R09tcXd0cHB3dm1IZ1BGZ0Q3dnJ6K0hxMDVld2NmVUlTTzZCcE12SUVudjltQlJJNWNoempXekUwQk5BdTdOcUxCa3lOcGEwYVBSdUJyVWRkL1BiUFRxNUJZZk9RV0pBUmdlTHM4Z0hzcTR6aE4wOGpnRUxvQXV5WU1wU3FYQWEyYjJPNHZDbDJpYTVRbWhHd01paE9JRVFzTEp5NUhlKytWMWZjM0g3eVpkdkczQUFZTDI3UHZxSHA1WlczN2FlN0QwZ0l0RGFza3dwQWFyYlJVSjM0NFV2YkdEeGlNYkpjeU4wMWE2TjJmVVNvS2l5TXJ1OTJhOUdRN0tBaTRhdm9QV0c2akc0cFg2THJvUHdhMXY2NjlyVW0wSGxuRXJ4S3BnYmFXdXpMODVsMUVFQmo2bTZtYm14OVY2a2JCVXlBbUo3bWl1eUJXU2lzTGROMmVFckQ4eENUczkrN0k4Y2U2TW9LRklnVWtCS1NIdU14U005bkw1L0FkYzN0L0hTTTUvRDVzdW4wSjNjQTZCdkR4ejBrU1JBZjFFalQ4Zlltd3lSVFhLSU5vN1FNVER1QWhnamdaQUpLcTAzVFZvNm1CMjFvVWFaczdiMU5MdldHQWxxUEpYclRyWGxXZjY2dHVZLzVkZjVmc0JPcHlkckM4di9jUHZKbCtmYTBjazNnNVJhREdqRXlLZVhjdlUvTFNlOUxTWkNKMG1SSmlrVUtmU0kwRjA2RGNLYjhjU25UMkw3aWtJaTEySFAyNk90MHA3N3JRaXZ0K1BNbXpnZW5PZW5BejBhRjVrcHlHK2F6eGZtUHVISHhmT1J5M3NZSUZkd0ZyTEZKMklHcVM0bzZRTGNBYWt1b0ZLQU94RHVBSlNDS1FGVENsWWQyMEVCWmY5T0tTZ2R3NlJYY2Z5dURHOTVyOElqSDlqRzZrTlBReTI4akQ3bDZKb2VFbGtBVXdlcTI4SHk4Z0lXbC9yb3BBcUpjSEdUZWhGRTJ5UFk3QzV2VE1aS2kxaEhaZnpBVE8xQms5cDdYekJqUVh0Ti9WM3djMTdoTm0yYm9GcjZmbkYxK2RvUStNTzVwd053dUxhTHdlUmZIQm55THl3bXZXMGlSc0lKMHFTRG51ckRKQW02Ujg0aUc5NkhaLzZnaDlHbVFHZ0VyYWgxSXJUSzg2TVdVOHZjVFpqaERYMWo0QkZYbHdwSGRjTjJrT3FEU0NxUFNqTEszQXFPRURRY2tBT3NDS3k0K3JxSlFaU0FrRGhRZE4yakErWXVFdFdINHA3OUhIY3RtTGdISUlVZ2dTQ0JRUXFoRG9UNklMVUttaXlqT3lIY2ZXd1hiM3QwSGVjZmZRbkp1Y2VCM2pVbzJnRmhBbElKT0YzQTh1SlJuRm85Z2FWdUZ3a3JKMzdJcFlPdHJJcVgyaENhMU5hd2xONEl0YzFyMWNaU21US20wQkxhMTJscGYvZzA3Z0hyblJOU1dGMWVlZXdmL2JPZnVUVEZLVFJNZmYvM2YvOU5JZVhjMTcwVEwvM3k3MVRBUTBhMk9weWNIU1htUVJDSWhhQ1FJazh5YUNWWVRKZXdlZmthRWd6UlAyR0FMcUJrbHZ4c05aUUpMMERiS1YvLy9QNWdvYWxkQzU1K0phb3hNVHpkWXpSZUF4azNwbXdiSkFqdVR5cER6SG9CcjV3N0lVZGxzdzJ4d0dCS29WUnFlNnM0QVhIWEFvZzdJRXBCU0VHYzJvODVnVkFDb2hTZ0JPUy9oaFA3ZGJRTVlBa0tReVNTZ1hRWHJQdm9yd3BXNzdxR0xCMWduR3NrQm9CT0liSUFoUlE5MWNGQ3gwYjZFNTFieVNxbkkrREhEbkpYVE5YdWMwWjAwYzhHc1F0NURReElUTkFQNTlsVFV5elBEWE9UOHRwd25VT3JYdmZhamVQRE11dGsyQzBnWmlpVklPMzN6Y25qeHoreSt1c1huZzN2Njl1VjR4UkVBWURmVDhibXA1ZlQ3aHUyTUhxVFVvb2taeEFKbUhOUUo4WFJZMi9IRTAvdVFSMjlodFAzajVHcXBISlN6T05GYm1WNDFnYWVabUdnV2V4cjdRNFBUandSYVp4K2RjV2VFSHlXSjBoZDI1SFhDRWdka0FEaURqUjFYTWVBSlJVRTdCcG5iU2JBUGxlMDhaMWw5WXozbVVOWDExSXd0QUtTUGdTTWhDWlk2Z3JPUDB6WVBEWEF4V2MxdXRlNm1HeU9rWnNPT0NHa2FRZEhWOWFRSkIxYzM5bkE3bWhvd3pWaDVEcHJqeFpRSFZTazJxaTBjZkpUWW5UclFHUHJHOUJ5RERZNkNsQWR6U2dQTm9YVGF5Yy8vVFdudi9ReDVQUGZFNHhiWTd0aXpMOWIzRFUvdENUcDQ3bkpCWlNobzFOMDh4UkNDY3ppS1hRWDM0WXZmTHFMN1l1bXVtZXlaYitvSENBME8zVHpZUmU3MEl2TXpBZXhXSS9pSDFRTjlkaDl6djlaSDhtb2hHMmt3TndCZXc4QjUwblFBVkVQaW52V3U3RHpKcXBUZWhkS0FVb2h6dXNJcGZhQnhPVkRQU1NwSUVrTW9JNGlUNDVpMGsyUTlRWXdBR2g0RnhMZHgvRTFqVGUrT2NHUis5ZXhlRzRiQ3d1N3lQTWhESGVSSkNtT0xxM2d6Tm9KckMydUJONlhwNjRtOGIxNlRwQWcwRTl6L1lDT3dlUTVEN1ZaK1dVOW5xamtSTXhnbFdEeHlNcXYvWXZIZm5WOHNGdmlFRy9DeHo3eXNmcW5Wb241NnplV3pkOGI2dUhkU2k4Q0lBeVREQk1pSk5rSWc0dS9oclVqaitPaGR6RldUaTYwdDA0UUd1MFdoNnNsVUEzVjZoclN6TnFCcC8xbk11LzNGcHZLdUhmb1VRUkFydTFoUWN4UVNsVi9kMllRZDIyaDBEREVFSmhUS080NmVqeEZyanlMcG9vT2NSdnJ1KzBDU29HQ1RvU2lMUnNBbVI1Z0ZMSjBDNW1hUUF1QjlBSjZSaUhWY0JzRURKaFRURFRoeW1hSzlmV2pHRjg1anEwckNmb3FCME9RNnh5WjFyaSt1NG5MbTlleE54cGduR1hJdFMyRWE2T2hUWVpKbnNObzJ5T1hHdzNvSE1ab1pQNXoydlh4dVg2MUhIV3AzUDJYRVZId2J5VWxiVmxKUDl5b2xFSkNDWTRkTzduNTVXOTYrN3ZleW1lL01HOStjNnRDdGRDMnhKaC92Y0w5TXhyNGI0ZG1kSVNJb1l4QkZ6Wk9YVHIxUHJ4MHRZdmtqMzRQRDd6akdKWldKa2pTTVF5Nk1LWUhTYllodEFlbGw0R1pBaHd6MXZidEJ6U2hDdm1NUUg5cmVtS0pSbXc5TFZUekJUWWkxMUJDQktHeWxWNnhGQXRaaUpXbG1JVWM0NVBDU0IvTXlyWndnd0ZXTU1SRjNtTzlqMCthWE9lRjd3UW45MjNGTmJHY3VpM0NDb1R0ZzdDRWpxL1dFNE1VWUpUSGx3VjJrZ0JuemhCNkszdTR0cURRU1ZleGZXa0pXc1pnTlVTWEJHZFdqcUxMaTNoaDQyWGtkQjM1dVBwZXNLdlhrQUFzZnVrNnlwN3lZSTdKaHBmYWppYTV4dHBwRXdRVTd1NmdzQ3pBQmFGREZKUUNRSUJLc0xDNjl1bDMzZldXNTRhWE5nNTBZOTgwT2JBUFVRQUFJeHJsbjE5SU90dFpZdDQ5TVZuUEtvRGFYelpOT3VnbmE5aTROTUNldm9LVlV4bFMxUVViQm1IWGliWXNBV0lhcE1Dc3BQNUF1WTRyWEZMUXUxVDJNTm1MRFdvUkhIRTBjUnNaUVMzUFp6eXQ3SmNjdWFkallRalpwTjgyYVNxQU93Q25ZTlVGcXo1QUNaUktvZEl1T09sQW9Gd1hkT3FZczhUKzZjSTBxQTdBQ1JSYjVvMmdIQk5uLzJUMkQwc2tLRTZnS0VYQ0hmc3hKeUJTTUpRQzZJR2w0NFlPQ2IxK0Y5M2xIbmJOTHFqWEFlMk5JYmtDY3c4Z1FiK2ZZcUhiaFRhRWNaYTVybkdidTlqUmJoMnNaalNXUE5ERzliYVpvbDVqQ2dpRmpRcHRvd1ZvdE5Gd0FSNHVXV2ZZQTBNUkkyR0ZYbi9SdlAzY3czL2x6S1QzOUVHOHplM3dPRVZ4Rkh1VFh6emE3WnpRaVh6M0JIclZ4N0hHQ0xyZE5hZ2pmeG9YbnY5bDhNSnplUGhOaEtVT2dTbUR5WHJ1UnNodjJZc0x2VVRKWnBuQVcwZzdjSUpRREtBSzJPcDFIRVBCcmgyMkhrR0tUb0hFdmRFZGtITDFGakFNcFdCT0FPa1diZS9rYjJqZnJjQUtrSzRqQjlqRzdXNjBvRko4ZGVNVVZEdWx4U1RGRkdWNGc1WXRNbllXU29SdEp6T1BZUFFJdlk3Z252TWR2TkI1QnAzT0tReWU2U01iS3BnRU1CaGdzZC9EUFd2bmtMTENpMWN2SXRONnl1Uy9wNmpMK2FYWisyOW9TcVJHVFFvNmVQL0lOZGxhUnRRMnpKNDlldkozMzMvbWtVOWwyNE1ENXl1SERoeVAySlo4NXdLTjg1ODlZVHFybDlYd1A4NVlWaUFDSW9VTUJtYnBDRTZrZnhxWG4vc05MQzQvZ2Z2dUF4Ym9pTDNaa2dHTThDMUhOMUhJWUpJRHpQVHRiT0cyZ3BDS2JqQko3QmN5Y1RIbURPWmkvcHBVejMwdUJha1V3ajFBRkJRclY3RHNnVmxCeU9ZdEJ1UnlJZXVwQ0wwaVZMTi9Kc1ZRSHB4V1dLVkYySGNRTVlNVWdVMUxpRnVRRmNZQnNnODJzS0doR3NLUUFTY1RQSGp2SWw3aVRRQTk3TDFBR0EwRVRGMG9BbFo2Z0VwT2dnaDQ4ZXBGN0F4ejVIbGVodzJLd1JIUmxZWk9MNlF4WDQ3YTFoa0FCTnhpY2JneEZOS2tJdytkdk8vdlpkdUQ0WTNjSzdmTTQ3aDVIZFNPNWFjbzAvLzRoT2t1WE8xTXZqRm5XYkZWY0kxY1pWamdVemd1WDQ3blBqTUc2R1hjYzIrT2JtTHM2RFM3d1N5dEs4bjR2Q1JCc2FhaXRtaXA5RGorZFBJdE5xWm9BYXJRd3pVUFZhcnZsOHhnWFV6RXg5cmlldENFN0ZBY2xHMS9JYkVWZmFMVVZ2dGhLLzlRQ2tBQzRwNXJNR0UzMU9jQVF3UkZDUWhkNjRWRTNHaUw4ejVLMlpxRjAyRVFLWnRRUklKYmpLdk1aYVc5UmUxQ2tNRlFENXluSUxVSVJRbGdjdGdXV2NaOTl5ZzgxMW5IVUJiUWZYa1YyYmFCU0E3d0hucHBpcnZXVG9CQmVPN0t5eEJ0Z1pMcGlTdHMrcDl0SEhtaXExdmJ3dUZHYWtxTnk1Uzh0K3hvS0dzOWxpaFFJRlk0ZXZUNEJSSDU0OUN0elJ1bTNmSlFyUVU4R3NEbmxKYVBuOHE2dU5iTnZuRU12Y0pNVUpoQTh4NVUveWhXekFmdzlCLy9KZ3c5ajN2UHBlaHhINXphMDhpelRvZmpZYXFDOFNGb3F2VWJDUXB1YllWWGJ0MEI2ci9XaU84STZJQTRBVVJCS0xWTmxLUkFxZ3NoQlVnQ2dzMXRoRHBnNmppYXVWdmtjeVIyNEEwT09LQVVRbDNYY09yYVN1eFFlc0NIcThBTE9xOVV5Um5LMDExTW1XTVFBTVdabzlrN0FIZGdJSzU5QjlBNkFiUkdwNVBqL0wwZGRMc1RYS0VNeWNzOWpEYUhBTnVFdnA5MmNjK0pNMGlZOE5TRkY3QzFtOEVvaFZ6bmRwd0MwcUp5SkRNamcya1JBSVYvT2pLaWlDYmN4R3phNldGdFplMm5lVHQvSHNzM2R1L2NyaHluWGlEOUE4ck5ENTVJdXM5ZTZXWC85WGlTTFhiUmgxRWpURmlnRnMvZ3lPaDllUDdUakh6N0NoNTRFT2lubUxHWVZuQ2o3TFQxSnI0OXB2cm1FWlhlb242cTFiM2V0RjA1ZG81R1ZTcjd3cWxMMkZNUUhFTkdkdlFCbElMVWdnTlpEOHlKeXpOc0x5K0I3ZEJld2RSMVhEYzAyUzRDVi9na1Z3UWxaaGlvb2hYRks3bVVCS0xsdFR4WUZOZlhsaWpYM2RDM2hKMWtFRGF1ZzZFTFNuT0FNeVFteDdtVFBhUXl4c1ZrQjhLTXdYb1hyQlNZQVRhRVUwZU9nMEY0NnFKZ1kzc0xHZWN3MmsxZkZ1emFmS0FKeHdkYW93NEtnZVIxOWl3anVYWjA5WVhUQzZzLytjVXJEOTV3NG56TEU0Y3A3azhEZUJxai9CK2M3QzcvcmNYKzBrNXFlbURwUTFTR1NUcEF0M2NXcDdwZmcrdWZYOE5MVDEzRzN1NmdrQjBLVjN2ZlRCMXFXdkZNQWhYQVpySlpaYytZR2F6SUZUMmxWZ1MxRDg5Z2tRdlJtRlBiVjBZZEVLZVdQZU1PVk5vQko3MmltS2xVQ3FVNkZsU09FUk5pUUtYMk9aUy9NVjJMRGJ2bjVnNFVkNkJVMTdiamNGb3lhSzdIemVvbkpNVURVdjA3VTJvL2xtV3dPUWJDZ3ZWc1NrR3pRVTRDU1JTMEVoanVnTTBpdXFKdzdreUNvM2Z2d0p3akpFZFBJZGV1d3h1RVZDVTRlZVFZSHJyclBxd3VMaUZOVkxrTW1NT0kzcjlCWmtwRzAvSmVCRzA1OVE1MSszY3JMOWJ0OTlCYlhmbC9QL0hFMHkvZFhFMzhObFhoVzhnQ2I0dTRhL1hQYitTamZ6QWNESmFOTVc2cTBBNTZUUElKZG5mK0dBL2QvemhPM2IrS1pIRUU2dTJDZVFLbEZaSnNEU1FHa214QnlFb3ZnV0NscGt3Q2xTZlFiS0NWYVkrRmlWcDc0YW9NR3Bka0FWQjBFQlMxbWFDZHhoaFg5V2FGY3Z4aHlZVmtIUmRhSlNEcUFzcmV3TUFpQ0FtRUxSMXQrOGs2RUVxZEdvMUFxUVFpZGg3R0Fpc3BhaDlNanBwMjNRVTJORXVnalFFaHRkUjFvQmZuZThBb21KUUxEeUpqVEVXM3JKelhwMklHaWRnM251cENvcGRjYlVscmd3c3ZYY0Q2czFjeGZLNlB5YkRuR2tvTnRPeEM2d211cm0vaTg4OWZ3T1d0aThqMEVKUEpDQm9aOGp3RGpDRFhubTNMWndDbnJpL0E1VllqZGw2YTdWUnhRb3lFR1d0M25iNjhlUFRFKzc3anlLTlB6bkhBdi9MQTJRYzhQZFhyZlBIMkl2M3d4bWozZldWRjB0N3NPdHZHZVB3WkxOMzFBczQvdUlHMVJVYUhGMkVvd1NTeGVnQ2R2R2NWWXp3TFJnWUtHbXlNMHpmakZqYk16L3BMV0R1elRCNlZjL2RscmFZTUM4blhjT0NMaFBiSXRQbUg2MXBXS1ZncEdQUnQzc0VLUUFkQ0NkamxESlp1WG5SaGhHdVJRUUp3MTkzME5uRzJIc3NHVlJZMDdKZ3pzZlVidHQ3TTVqYTJsODNlMERhUFVrb1ZqWlBHWkVYUEhBTHhkRjlwRDJzbVlnSncrUnVTdUZBQUlqSUY2ZUJ6SnhFZzF6a3V2SEFCRjc0d3hQRHBITVowN0E5UkdtSW0wQnE0c3JtTnp6MzNPQzZ1WDhJNEgwTHJDZko4WWxlMUc3SE5BMU1heU1LbTI1SUk4T1NPNjlZbXN2VXQxNzdUVzFyQXFmdnUvdEgvMXkvODgvL210Lzdhajh1Tmd1YTJBMmNmQUNXaytJSFJpZjdmdWI2NytmWEdtSTVTREswMTdDS0tETm5vajdDdy9BUWV1TS9neU5FRTNCUGsvVjBJQ04zSkNvd2I5TEt5c1RtSUppQWFXeWJGRmU4UW5GYWVScmFEWXRKYXhDeHpuZUFOOHdVMkJ5aGRMTU5TN3NUdmdLaHJ4VENTeElwanVJby9YTDlZK1hVS2dxNzFHZzQ0UU5lQ2c1U2xubDNIZ2ErOXMvczNUem43emdGTE1KQUw3ZElTRU16T0F5THdPS2JTVFZCUzhKNkJwQ0lIS2dUcW5NY3BsMEU1T1R4SUlhUnZ2YUp4SURKNDZxbEx1UHE1SGVRdjVjaTFsYnN5WkgrYlNaNWpZK3M2ZnUrcHorRFN4bVVZbldHU2p5RkdRMnM3SGFwRlR3Vk1uVDJqNG5Dc0FRZEFraVE0Y2ZkZFQzV085TC8yTDYyKzc2bWI4VGEzSmNjNWdPV2l6UlBteFkyL2Rsb1cvbWFIazAydFRURjdBcldBNWQ0N2dKMHZ4eGVlUEl1WHJpcnM1VU5RcHBGb0RhaUJWZWlFZHNVdTM4N0J3WDV4TjM0YnRHQVFTU0FWMU55SVpvZlFKTWhaQUtiU0M1VkZOamNqbzdyZ1pBR2NMa0twSllDWEFPbURlQkhNSzJDMUFzVXJBSzhBdkFqQkFoUXZnWGtKekF2dTBRR282NWkxTG95a0FGSXc5OERjaDZBRG9PTWFOZnNBOTRyUGtmc2FWaDJvcEF0T0xDZ0xVVTV4RkRlbHhZTlpPWExDZVRINEE0aXM5M1BkQ1Baai8wakJ5Z0dkT3VXQjRQSXRuM2U5NGY2N3NIcCtBWjBUS1JnYUpBUUZleUJRQXF3dXIrQk45NXpINnVLS3JXMGg3T09UeXZ2U3lnRzBmTTRYbXN1OGg1RXVMa2gzcWY4ei8vam5mL0hwdzdoWlh4R1BNMGZvdG9TbDduZGVvK0gzajB4KzNEb0RCbkVLWTNLWS9ESW05QVdjUG5jQjk1eTVpb1hsRERvRldEcHVWajkxc3JBQUs0WWlLYzdydGh6SGkzcE1hNTFoVlJ1ZUlxcmtCenBnemV4ZzJBSUlDeUR1MnVSZk9pNmhUeXdZVk5mbEhZbGJ4cDVhejhNTWtnN0FDdHJWZXdwbFZITDYxMFIyN2grZWprNUFrcmprbDEwZm5BcktnTlhkTTgyZDhNMnQxdFVlUHk1clFDNnZNVTdDS2h3ZHQ3V3ljdjA3dVFvOVM0N2R2UkVlLzcxbk1mN0NDS05kcTNkcVNHQTRBMm5DWkRMR2M1ZGZ4QjgrL1ZsczcrMUE2ekZFVDZ4S1VhMHZqYmtzSVJTdFc4eXVTVmE1VUR1QmNuSmJoZ2lkTk1HeGMyZWZXTHI3Mk5mOVJYckgwM01TV0hldXg1bnhnbmV4Ty82RkUzdnErOVowNTQ4VUVrbE5Bb014TXBVajc1eENhcjRVRzgrOUNTODhjd0xyMjMwTU1pdHdhSCtqRVZoTmtDZ0J3M2NHTnpXRXc1ekZiNVQyMDVlVnhWRVNOR3N5MjRSZWxPdFdaaVRVZFJPWGZURDNvYmh2VDNyVkJWUVBTQmNBNnNCUUYrQXVRRDBJOXdGZUFLa2VtRzMvR1ZQWHFqc0wzTkNaQXRpU0NzdzlPNWRESGZ0QUFrRUhnc1NTRGlxeE56S3I0SWptUUZyWW4rYXFIRS93OURjbDVRTnBNVmJOZ1ZlQy8xaDFvRlFIU2RLelhvMjd6aE4yd0NxRlNycFFTUWVjSkdDbEFOWEI0dElDN25uNEpIQkt3QmlEbmZ0anNVRHZKQjNjZCtvYzNuajMvVmpzOWd2YVhJS3U4dGE4cGs3eTFHdHNCQ1NLc2J4NlpKQXM5My9xWXoveDA4OGNXZzN3bGZRNGMzaWVNeUI4MDE0ditjKzNNWGxZOHppMXdPaUJOSkRLRG95OGpQVG9KYXljdklTMTR4cExDME1rMkxXMUEwb2gwbldiaFBVTWVsa3FCVXhqekF3OWdhQ3U0eVI1S0ZrQXFkUVdLcWtQY2VCZzFRZXBEckk4c1hNMXlzN0xDRHJGalFoaXBLd0EyUDR6YlFDUUFxbkVkUmd3UkpLaTYxbUluR1N1NjR3bWdsSnBVUUNGaUczTlFTbFdVWFlOY1RITU5xTnpyOVorUThYSXFxOFIrVTJ6eHRXTGZPdSt6WTJrN0k4amdXaUdNVU93bXVESnp6MlBseCs3Qm5PTk1DRmxPN0NMWFR2QTd0NE9ubmp4U1h6bXVjOWhNdGtESkVjdVhORnM0NkFRemNIb2hRL1JpTndvTnlzb0lsQW53WW43enYyYmxlN3hiL2pXSTIvTmI4Ykx2TklGMElQMHQxMkM0Sjh0anZUVlhwcDh5N2FoZHc1WjM2Tm9UQ0FEVFNseU9RK3NIOGRnSjRYZXZRcWN6Ykc4Q0JCcHg0eDV2ZWR5OHQwcTNsVFhybGVXQ3lrVmtBV2xJTGNFTjU3MVBvbnJEYk01Q0x3SG9BNkVPcmF3YVFpSlNrSEt0ZFJBdWU5TElKeUF5V3JHMlRaSHR2b0NiTDJOY1pzSUdKYUs5dHJRdGtuUnRkc29McGt2Q1NQNytrYyt3ZWV5Q0FwQ3U1cC8yS3BrK3dsWnFhSUZ5VEtBRERLaDlxWkEySG1Kc0dHVVVxaEV3OGdRNXg4OGk2MlhSOWpaR1lESFh1L09CejRHaTcwK0hycjdQdXdOdHZERXkxOXduUkpsdXljUkJ5MDIvdVdIdnlzWFc5Y3N1Y1pZUHJHMmszSDJZeUZvRHNNT2RhemdabTNLV01JQXdOT3M1UThYaEM4ejA5RVI0MmhPbkZvUk5vSHdJa3grTjhhYndHaVFRYVZESkYwTlVVQ3VGR3dqaThBd0lVOFltZ25DQ1JLa1NDaXhhdjh1REVPb0txT2N0cTVieWVGbi9JM3FndElGbUtRUHcxMkk2a0VTK3lmVUFxQVdJTndIMFNLWWU3YUoweVhQNEk2YnhFd2NvNmFRY3hlNjZFK3o0aHFXRUVqc3plVnZHSUlkUDFBSm1KV0w2YjNuVVlVbUFZUnQzaU1LSkFxbFhvRWxBWWdVd0lsTnhqbXhiQjRueFVOY3dkVUkyOWVxT283eGMvL21CQlh0TmFQS1dBWThxVkFjTU1ZcXBsS0tSSFhRVyt6aDJ0Vk5tSzBjTUFuWXE1bTZmRThsS1hxZEhpNXZybU9VamFHUUZhQm5KTFlBN0ZkYnN2TXluZ3AzUkZDUzJGeXdkMlJGZXFmdS9zVFEwTjk5eitLOWNsamU1bzREemd6dzVBQ3VRL0RaanFhTFhjMm5CRWduckZlWWxDM3JLVWFIZThpMkdUdFh1dEI2QVpRb3BLbTJhenpRQVVrWENoMmtTS0Znd0R3RUpidXVmcVA4Z1Z6a0NNU3F1T0ZzRHRCeHJUQzJRRW11N1orVUZUZ0hkUncxM0hYYXpQYnJsZXE2RzgyT0RCUk1vUU1QT0lWU2RzTkFFUTVLU0oyN204VVZQc09iQks2ZHB2QWdsYm9HRlVrNlVWQzRaQVZXM0xwYUpReFg3YUd0aXFHMzFzWmFtdDZWNGJyNGdrMFJqSVhsWll5MHdjNlZIY2hFTzltcjhyWERDQmE3SFJBTUxtNWVoZFo1VUlCV2pTM1JqT29vZE9JS3cybTNnK1hUeDdiU3BlWHYrV3VyNzM3Nk1FRnp4NFJxYzVvQTJBWHdpWTRoT3BvbGY3RW52TDZqOG51eWhKYkhaRkl0cStoMmpnRDV2ZGgrL2pJbU81ZHc1SjRyV0R5NmptNW5naTRKRWxGUVRJQXlNTXdRY2RPVDBNN2plQkpBdWMxZExpd2h4OWFSSFJnVHVJNW1wZHpIQ3NRZG0zOXhGMFE5KytERXJkWkl3RjVsazZ3M0FhbGl6aVlVRVJRSjVZczhNK0c4VEZHcktqZnhsRGxMT2ZWWi9yVUVGUldWZi91UDRzV29hM05HSnRRdFl3V3BUTHJXRU5PeUpidGcvNTE0U0FsUXEzNTZ6NE52d0pWbnJtQzRzd2tqYWFIeVF4Q3dZaGd3N2oxMURwZTNydUdaQzA5QmExUHBPNE9MMEt5MnBOZDBzNTNqdHRCTFdEeTJJdjNGM2crZXVmZWVUK0xLNGQrTWQ1ekg4VjVuaXVmeDN1Y0ZBQytsaG5wTFdrME1HUmd5WGVGdVY2TUR6VjBRZDJCR0tRWWJQVXlJb1BwV2VEM2hFUlFQWFNHd0MyMVczT2xseW9FMTlsN0dpbUl3ZHdvR0NrZ2RLR3dkUmZrbVM3TE1Gem1XaWZ6M3VEcUk3UzNydUxhYXhJVk4zdVA0Ym1YbmlZcEUzaE1DeXAzOHJ2Z3A3T2pzRW14QjFjS0NFYXBvOUt5eWJGNjJsNE85Wk9YREZ6Y055b0d2MFBOUnhVdFI0Mk1LWGc4Rlh0QjNrSU1ablc0SDQ3MGh0cDY3QUcwU1Y0QlZnYWEwUVVjbFNKWENsYTJyR0UweUpNd0ZIUjBVYUp6SHNiUTlrL1dPbmFVRnJKdzgvaWVkby9yLzhvMTdqd3dPMjl2Y2FRWFFnOURWQXdDL0JlREhJUGluUjhiSkg1d2FkdjZvbDAzV2hRZVM4eGdqbFdLUW5NQXdQNCtkWjk2TUszL3lNRGF1dmdGYm94WHM1QVpqeXFBNWcxRG1tMG1DU1VnbkJDNWNoR2lXL2xVZzZyaTlhelo4TTFDdUE2RGp5QUhsa2w2WEN6anZJT0xES3VVS2lHWE93WnpZdk1VTFdndTdRaVdYN0psdnN3RzdibW83a3lNVUZpdERiMVNPRmZpdVlCQlY2ajBsVzhpVldvbWczS3dBcWRlL3FoNnNPY1pPUmZ0Tk1kOGtkc2VxUm1LWFlwSGc3dnRPSXUyWGUxdE5NWEdMd3RzZlhUbU9lMDdjNDNJcUFSZS9JU3JNbWxVUWRhTHhpckYwNnBqcEhsbjVoeC83MkMrdDM2cDc4NDcwT0hONkh3TmdHOEFYQUR5dWhQU1NabU13NldpVjlZVTROZWpBb0EvR0ttU3dncjJySFl3bkN6RGRIa1FKQkJrU05iSW5GVlNoQTBDS1hSS2R1QUU2aGpqaERLYkVWdDdaZGpiYi9yQk9NZElzcnY1Q0JUaDhRWkx0NEpyZmM4TUpTSlhoR29JSkVsdkU1ZktHWkFkZ241VDdlUnMvY2VLYVBDdTFtNHFuUWRGcjVuT2pNb1VxRS9vaVI2TGE2d2xlWDdQNUZTMGVLQVNROWVUaUFldUUxRHVKd3NZTEZ6SGNOSmFJY0RXYlloK1AyT0ttVXNDRjlhc3dPck5DN1lXT3Q3MCtDYW5TRXpKallYVVpxNmRQL084OUpIOXY1Uk12REcrRnQ3bmpQYzZjM21jSTRFOEEvRThRL09qUlNmZm5Udzk3bitybnNxNk1Ga1U1TXRJWXFUNHlPb3VkaS9majJtZmVncjNyanlJYm4wYytYRVErWWhnTkdHRXJKbUdNbTBRMHhhNFhyNDBNdGpjV0Y0cWU5cFFyOXRjZzNKWW8xWHNLZnZHQVFMeCtZREdWV1lLbWJEdnhjcmtCYlZ0NGtTRDhDc2UyZ25DcUJHUzVjN2xDUGd0TkpRY09UMzRyMk9UdENBNHdneFBHc2J1T0ZzdW5xT2lGSzA5RlFHRmxjUlVuVnRZQUVTUktWV0ZKcWxpUDRvdll5OGVPYmk4dUxQekF0M2Jmdm40cjc4ZFhEWEQyQVk4QTJBTHdLUWgrUE5YOFA1d2NkZi9YNDJQK2ZkYWpnY0VlSm1xSUVSUkdPSWJ4NEc1c1BYVTNSdXR2dzJUeXBSaVpNNWpvSHZKY0FSb2diVUJhdzJodG13eUxEZGQybk5xdzl5TEtMbjJTWURRYVphK2J3RUJJMjdSTWN0Y3dxUXZSdldLRFhPVVhxUytqNTBxeGsyb1Q5WFlrbU4yQ3BBQ2hGWTNyMEFOTUIwMlZFWnRXS0pVcDRrSlZyMVdRRWtFTFVFaE1FQ3VzblQxZDZMWVZlWlJiMmM1TVVFbUNUdHJGdWVObmJKRTNMTmE3RG5ZbWdtS0ZSQ24wbDVhd3RIYmtWeDVZdmZmVE45dFM4Nm9QMVE1SUhJakxmNTRGOE5uRVVOYVRKQlZKTWFaa2pRQlNTcENUeGloUHNMbStnSzNSUFVDeUFzVXBCQ2tTYmFEMEdHN0JDbklpOUV5T0ZBSXRESzFTR0xZa2dWMHRiOVZvaWlaSnVMcExPSVl0RWd4bE9ROWlmUHRMVW5vUU40dFpnTWFMYVJBWGcxajI1cklkQk9UMDAyeUVTU1hzdkNhMW54OEs1TGhDelFFL0dsNFJseVVPSHNwaHpIdU1BTlpGUzBJWi9ua3ZXQ1VSZ2pBUDVUNGlBd1ZqR0JmLzhQTzJDNW83RVBHREVmYjVNd0JLTERWK2NlTXl4cE5oNlJFNXNjdURBWFE2ZlVqU3daRnpaL1ViSDM3a3IzN0p0YVVYYnlWb1huVWU1d0NuU0FiZ1NRRC9jNnJwQjQ5bTZoZFBaY2x2Sjhhc1p6b1RnUldLekNjR284dTd1UHBIaTdqd1IyL0Urc3Z2eEhiMkh1eVlCekUyYXpDNVFhSzNrZWtPeHZrU1JIZkIyaUNWQ1lnRzBHcUFQQmxBa0FHU09jTFBMdGNsNTAyS01LVFlBYU9oVFE0akdpUzJPOXVIaGNVMk10RzNTT2Ezbm9PVWxaWnFrbC85SG9LYS9pQ2VNa2xiYTFFcVJCSkw0b0pjc2RPNEhhaGVRQ1FVNXdBQlM3MEZyUFNYaXgybFJaZ01CbE1DSTRLbFUwZmwzUGw3ZnVSdi9MZC82N2R2eC8yWDRGVnNNMXAxdlBmWkJ2QmJFUGxjTDhOL09HVTZmMjVJK1Z0M2sveWVDY3VhSWlZamdvRmV3WENEc0xVenhPS1ZCTWZQTFdQNTZEWDBPbGZRMDd1WUtBTm1nVEpqSkRtQkpRZVNQZ3k2MEpTQVpRSWhzYUdjSXhpTUMrMlZLbXN4NGtCaEo4ZHp5OW9aRjNhQWF3cVU4MG90enB0cTFMZVRTVm5iQ2RSdm1rS1BzN2M5VTYySTJsUUFNcFh2cjVBTEF2VFNEdlpHb3lKZ0phZTFKMEVPcDFTSzVkNGlyckN5NGE3TCswalp2clQrMFZXY3Z1ZnVQM3JyTzkvMTl4Lzd5TWZrVm51YlZ6MXc1Z1NRQm5BZHdDZFl5MmY2d2gvc205N1hERGsvdjV2b2N6bWhiMmpjQnhFeVRSaHRKQmh0QTR1THA3QjIraTZzSEJWMDFyNkFGRnRnazlrdVREWmdJMERpNXYvSmVSelJiZ211Z3VnY1FtUm5WanpaYXNxTjJTQU5JNW1sd05rcmJGb1BvSmpjb0pnQkdRN1dPeEphZFdCUkZoeUx4Z09nQUdJRE5JSWdoS3FESmRDWUxtcWJaZzR2aGhyQTZoc2VxTkZxSU1idFpGVU1ZNHpWa1FzVVczMmpEUkZqc2Q5MzR3UHVSU203b2tOMVVodzVjMUsvNWRGSC8rdlQvL2JsNjdmcm5tTzhobXlmRXlZSDhEd1QvUndiK2NIRlhQM0NxVkhuMTg2TXU1OWFubVJQSkdZd1pCaG9TYkNkOTNGMWF3RXZQNTNpeFNlV3NmSGl3NWpzZkRGeTgxWk16SDJZNUVlUjV3elIyeUJ6QmFJTmRLYWhKem55ZkF6Ukl3QVpTRFJNYmtYRlNUU0s1Vk5pd3pudmVVaHlCenhMSUREWjVrWTcvNjhyQW9GRmtkRTNNM0pBS2dRU1VEN0lLcmNmQk1JWWFPdjJyaGRRNi8vT2hhQTdndjY0cXJlcEFpbk1sZGc5d2hwUE1ZRmJrZWlpUXRMSmFGUFExS2xLd2JEZEU0bEtyWUE2TTVaUEhOdTcrOHpkMy9HZGYvbkQvKzUyM21zSlhtTzJqL2Z4OVBXbkhZSHdDQnY4NlNPbS8vWVZMUmUzVkg1bWg4MDkxT1crQnJCckJLT3RQZXh1SmRoNFlSRkg3cnNMeTNkcHBOM3JTT2dTV0s0aDBVT3d1RmtZMHBCY1EyTlNKTEFRRGNETyt6UFpVTTZZekk0NktCZlJDMXp0eGpaeFFtczc0T1pDSGEyMURWMFlqWUtsVC9vTEVUOUJxK2c3L0tZeXArQ0pTajVqU2dxOE5Venp5N1dxczBwaGlGZU1UN1BmdHUycS9EWFBFODQ0aVhiVGhtNG96ZXBLMnd5SFFYWWdWTnZYeWlxeFJBa1MxK0hPNkIxWmxudmYrTUN2L2Q5KzVFZi8yZTBLMFY2endEbEEvck1CNEZNQW5nRHdkaGI2cXJVOGZmTXE0OEttWlBmdUpmcWNacE1hQnNhR3NiY2x1UDY1SVJhdmRIRHMvRG1zbmppT3Zyb0cwdHVBR1ZtTkEyWGNEa3NEVnRyUnJEa01LOWRMcFczbDNHK3NGb0loS1JrdVE5WXhLaXZUQ3Jhek44WjRrQVgzY1JnY0ZWdkxtdlBGcFplUldzSWVKdktxaGFKdTM3Z3dOWGZ5M2thb3FCelpmNnVHZWV4L0VSSG9jZTVFQ2NzMWlNVk1qOCsvM0VHUk8rMXB1NW1jMFZuczQ5UzlkMzJpdjNieVAzM3NJeDh6dHhNMHIybmd6QW1nSE1CVkFKOTBSZFF2Wm9NUEhEWHAzbXFlUEwrZDV2ZHVzejZYYzU1b01wVG5DY1pYRFBZMnhsZzkxc094TTJleGRMeURsYVhMa0dRSXlBQ1FJWlNlMkZCSERKZ215RjFESlluWWU1UTZBT3grR0lJakcwaEJPTFBiNG5OQUtiSnZqM0VldzJpM2x0N092RWhidnhpRlJjUlNYTU1VSHNBT2VJVTlhbExmM2d6VW1scG9hbkl2NHZVYnlvM2hYc3JXZXg1eWF3MnRSN05qQWJaTGJnS3p2WXRSTGxiTHdNa3RrbE1kTlM0SE1pYUgwUnFqYkF6QTFuWTBNZGJ1dVh2ci9Kc2YvUHVQUHIxMDdaVzRyeGl2RTVzai83a0U0Qk1BZmh6QS8xY0pQYmsyU1o4NE8rNysrelBqemgvMEoxaEhOaEZrWTJURERPc1hkdkhVcDYvajhmK3dpUy84UVIrWFh6NkxuZXhoVE5RYmtkRTkwUG9vSk8rRFRSZGs3S29MaUxhZFpCeXE4bXV3YUR1WEl0VWNTSkNEWUdXdXhFd2daaHpRM2hwQ09Rd2IyNWJQQkdFblVGTHNuU0Zva08xdFV3cUduRnBtT0xyZ2V0T01HMG9Ub3FBVmh5dWVLY3lqQ3VsZ3BxTEdBMWZ2c1RKVU5xZGpHTENJYTJteUlvY2lBTElNZ3hjdVlXeFNhQ1N1Zm1NY2ErMG1hNDJHR0lQY1pKaE14a2lVZ3RiQThidnUyanR5N1BSMy9mVy8rYjMvN3BXNm4rNkkwZW5iYlRQeUgzL0hkQUhjQStETEFMd1h3TjBncEFQV2F6dXBmc01JZW8zWWxoV1pGUmdHcVJMMDF6bzRjczhpanR6Vng4SnFnazVxd2RJeGw0cXBUV0pBSld5WHpicEVYNnNGMSt6cFZ3K21OaTlpTjNMdE53K3dIVjFnbFJaU1dBUTd0RmFKbG55QmxNaEo2S29telN6ZTQ3akZ0c2JPK1N1VlZNTTJLcldsUTQvVHRxKzE3VjVpc1hJa29wU2JrckNFUjM1OUY1Lzc1NytKSzVzYUlnUnQ3S0l0YmZ3K0hJTmNheGd4Mk43YnhPOC84WWZZMnR2Qzh1TEs1TlM1czkvOWQvOC9QLzB6dHp1dmVWMkZhamVZLzR4Z20wZGZCUER2QVh3SkJPOWUwT3I4Z2xIcm8wU083a2wrWnNqNmhEWjVrcUZMRXdPTXJobnNYTi9DNWMvdllPWFVFUnk1N3dRV2p5L2hTTnBCb3V3YUM4bUhFSk9ETVFFaHQrTGxpZ3J0WmlHN2hWa29jWlBCVXF3RGdaU3Qrclpqd1gzT2JWYWdvdTFGS2tQaFZDelBuYUgwTTJWVll5Z0gzR2FtdHErMThSeVN1SGE2SEZvbXRrdEFBOWVldVlLOW5ieXlEYzhZQ1RkSU9jcmFZR2V3aDBFMmdVb1NuTG52M0c5L3ozLzV0LzlKQ0pyb2NlNDg3K090QytDbzgwSmZET0R0QU03a0NrZkdwRmMyRlozTGxLeEJoQlFCaWJLU3M4eUUvdklTMW80cExKOWF4dkxwUmZTV2dTUVpROGtRSkdNUWNsQWF0djY3RmV3cWRVTms5dVl6UWxaVnhzdm9RcFY3UEZrRFRrTk9mTFpRZEVlblhqWFFrUkIrWENCUVlpQUphajNjOEVpMm42elorTm0yeUxpK0Q1Vk1DaVlEUXdOb0dWbFJqZ3REUFB1Sng3RjliUmRqVjMvU1drT2I2cGEyU1o1QjZ3ays5OEpUZU9IS1M3am56TjJmZWVPYjMvYWhSellYWGp4QUdCNkJjd2NBaUFJUW5RUHdGZ0JmYkJqMzU1REZ2ZFNjSFVFdlQ2RFg3TVF5SXlFcnVwRW1qRTZYc0hSaUFVZnZPWUxWMDMzMFZoSWtxU0RWMjVhSzlpM3p6RUdmSk1Na0N6RHdHNmpkYUlNWFlZY0IySVk3eGhjMktTbTZwc1VEc2EwalFDaFlxZGp5YjBYQlZXb2VxTjFhOTUrYXhPVStRK2hzak8yWDF2SENienlOclN0RDVNTFFFSWdSNUViYkFUcWpZU0FPU0JvN2UxdDQ3SWsvd2twLzZhWDNQUHhGSDd3L1AvN1pWeG8wRVRnM0RxQXcxRDBPNEcwQS9pTUE5eHRDWjZKa2VjTDUybERwc3lNOVRnMHZVcUlVSUJxSkFrZzBPdjBVUzJ1TFdEcTVpbU1uT2toWHV1Z3NwVWk3QkpCR1FzWkpYQUVaSzBmWjJsTmZzU3BFM1FVYUJyWldaQWZBWEU0RFZRQkhWREkxeDduVndMSGhwVUR5SERzdlhNRUwvK2Zuc1g1OUI3a29hTmdXR21Qcy9rOXRyRFR2Sk05Z0hKaWV2dkFNTm5hMlhuN2YrYmQreTMzcStHL1g0OFlJbkZjM2lCU0Fzd0QrRElEM0F6am1hbmlVSmJLMlM3SzJRNlA3Y3RHa09ISEtSYXBRYUdFbDZIUlRMSzB1WVBYTU1vN2N2WXJGWXoxMEZ4S294T3BnRjVLOFJGWXp3U1hzUmpSeWFDVGNRWkpheldsam5OZHhtOXRFbGVSQThYWUhXNmx0ZEhacmdDTkdvQ2NaZHA2NWlvdWZlZ3E3RzdzWWFnTURoWWxiWXVWWHQvdXRkdVBNRnBBdmJWM0RwWTNMei8vWmMrLzhVRmZVNDNjS2FDSndEaitNNndDNEM4QWpBTjRGNEkwQVZpeUlpTExFckczTGVHM1lvZnV5M0xpaVA0R1RUakg0bkNxZ2t4Q1NYb0xsNDZ0WVByMks1Vk9MNkI5YlJKSVM5TjRRSkRuU0JRWW41RG9RYlB1SlVwYnVCVXF0QUNFbitSUyt6SEI0cmxEQXFDNmNLcm9OUE5VY3JoUU02enhrM09DZjI2cmd4REpFQktJTkJ1c0RYUDNNaTFqLy9BVk1oaE5vQStRaTBBS1gwMWg1cUhFMktVQTV6alBzakFlNE10cDY4Z1BMRDM1dFQ5U3phR21ZaThCNWJYcWhQb0M3QWR3UDRHRUhwak9BWFMyUXBWZ2JzRjRiSWo4eWxuek55MUlxbDlTSHcybEtFYnFMWGZSNkNWU2VJMUVHS3llV3NYelBVWFNPOXRCWnRWc1I3RW9MaGlwRTFMMkluMnA0Q3I4VVMzd2U1THlRL3pJZkdocVlhclZQcWhNOFRCWXdjTDFuSW5iVlNUWWNZK09KbDNINU14Y3cyTmhEcHJWZDJ5R1diaERqYTBjYUU1MFZlM2x5clRISXg1SkIvNnN2V1RqM1VScGtMN2JSZXE4a2FDSndibThvdCtwQTlJZ0QwbjNPR3lVQzBEQXhKNGJJbHdlVUg1K1FYazVVUW43bUpHSGJPUzNHSUNHQklrRW5VZWlrQ1hwTFhTeWNYRUJuZFFIZDVRVWtTMTEwbGhmUVcxMUEwdTI0a0M2dnlQcDY5cXZvRy9OM3BqUzdFYXk0dW0rQkFZcWV0d0pIQ2tiYmhiMTZraUVmNUJoYzI4SDFMN3lNN1JldVlqakpZWnhvdXlrWU0vdXhNVUR1bHVqYWRSNkVuY25BckhZVy84NGJKb3YvQUxZdFNtYVZGQ0p3WGg5a2dyOHJleTRQZWdEQUY3bkhhUUE5QVpRaHBGdEpkallYblE2Vk9RdXJna3lKVW1BQ0ZMTU5pOXllSHFVTUVpYWtTWUswazZLNzJFUHY2Qks2cTMyb2ZnTFZVMGdXVWlSTFBhVGRGS3FiRmhweUlocEc1MVlCVTZXV1RwWmdNelZWOTZ1V202a0JrMnVNZG5JTXJnMHd1YjZMMGZVOUREWjJNZHdaWWpTWjJBM1k1UXlmMVluMklacVRnY3AxRGlNR1daNkxKbHg0R0d2L21kTDRQMkdiY2U4NHdFVGd2SExBcVZzWHdMSmo1KzUyZWRFYkFkd3RrRVVpVmhyUzJhRHgyWnlwUDJKOVdvaUlpWWljc0hqaWx6dTVkRVVwQzdWRVdmSEZsQm1jSk9nc2RORlo3aU5kV29EcUpMYUNuMDhncEpIMnV1ajBla2k3WGFUOUxwS0ZyZzJsSmhsRWE1aGNJeDluTU9NY2t1WEloeE9NdHdmWTNkakRlSlRaZnpjR3ViRU8xcmc4eW9pdC91ZmF1RDQyQzNvdHR1dGJpNEhTdUxiU1dmam5hMlAxajVUUVUwQ2hlM3RIZ2lZQzU4NEVsUUt3QU9DVUE5SjVBRzhHY0MrQVpSQWxHWm4ranNwUFQwajZROUtubFVwSWpKQmkzMXhwa0NnN0VBZUIwOFl1V1dldkh1b2Fmc0FrVHN6UDVrZUtGY1FOMDVGMUZZQmp2N1N4Ky9HTTFxNDA2bFI3SU1XOGpnaWdIY1BtS2ViYzZHSzJ5SWh4NHZMcStncjNmbmx0UUQvQkJwK0JWV3FWT3gwMEVUaXZIcy9VQVhEU2VhSkhYR2hYRUEwaWdtMlZuOUVzZlNhRmJjck9Da3VxN1BBYUZRMlpmc1lGd1dZR3g0eVZ3MjFXOXRlSUxVd3EzOFFKY3BvSktHNStid2F3T1l2cnZ4UFlqMzNIdEoyMXNWNUd5RWpTUzYvMjB1N1AzajNvL1dTK043b0lZTy9WQXBnSW5GY3ZpQWpBRWRqMm40ZWNWenJ0UE5RUkFGMFFFdCtXdHM2VHN5Q2tyQmdEeWs0SUl5VVFOS0Zma1pZR1ZmUUR3aGExVXI2cDFFNG9VT0ZvYkFzVTQvRGxxdjh3WUVtaGlESURHZmZTenVlUG1lNlBKWm44ZXpVeGwyRGJ2S2ZlZ0hjcWFDSndYaHRBU2dBc0FsaHpqMU1PVlBjNVVCMkJYZDZqQXVFbzdLakpHWi8xRDBtdmpVa2ZzU3FqZ2J3dENDS0dORW0veEUwcHNpN0d1TTNROXZNSmVFaEVZa1FMZWtxbnE4djU0dUxpczhsVy9pOVhybzgvQ1pIblRLYXZUTXRoWGkyZ2ljQjViUUtLSGVHd0JFdUJyd2JFd3ozdTgxNUpQWFZmcTZRcVBLRGMxM1FNU1hjdk5TZUpLYmUzaTVUQ2g3WTlUbXN4R2dUVHkvbnhYazUvSUlTbk83M3VoWFI1NGFycWQ0YTd6MTMyZ2d0NmxvZDVOUUFtQXVmMXhkeDVDbnpCNVV0Tk1ZQzZ3RUFKd0k3ekVHUDNiMjZ2SXJqMkhMbkxWYmJjMTg1OVk3MWF3QktCRXkzYVRSckhTeEF0V2dST3RHZ1JPTkdpUmVCRWl4YUJFeTFhQkU2MGFORWljS0pGaThDSkZpMENKMXEwQ0p4bzBTSndva1dMRm9FVExWb0VUclJvRVRqUm9rWGdSSXNXZ1JNdFdyUUluR2pSSW5DaVJZdkFpUll0QWlkYXRBaWNhTkdpUmVCRWkzYkw3UDgvQUxtRzZQaFRZb3luQUFBQUFFbEZUa1N1UW1DQycsXHJcbiAgICAgICAgICAgICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU00QUFBR21DQVlBQUFBMHo3dEhBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBNTdtbFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNMdnU3OGlJR2xrUFNKWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FpUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVFXUnZZbVVnV0UxUUlFTnZjbVVnTlM0MkxXTXhNVEVnTnprdU1UVTRNekkxTENBeU1ERTFMekE1THpFd0xUQXhPakV3T2pJd0lDQWdJQ0FnSUNBaVBnb2dJQ0E4Y21SbU9sSkVSaUI0Yld4dWN6cHlaR1k5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1pUGdvZ0lDQWdJQ0E4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBpSWdvZ0lDQWdJQ0FnSUNBZ0lDQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpQ2lBZ0lDQWdJQ0FnSUNBZ0lIaHRiRzV6T21SalBTSm9kSFJ3T2k4dmNIVnliQzV2Y21jdlpHTXZaV3hsYldWdWRITXZNUzR4THlJS0lDQWdJQ0FnSUNBZ0lDQWdlRzFzYm5NNmNHaHZkRzl6YUc5d1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM0JvYjNSdmMyaHZjQzh4TGpBdklnb2dJQ0FnSUNBZ0lDQWdJQ0I0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlLSUNBZ0lDQWdJQ0FnSUNBZ2VHMXNibk02YzNSRmRuUTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpVVjJaVzUwSXlJS0lDQWdJQ0FnSUNBZ0lDQWdlRzFzYm5NNmRHbG1aajBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5MGFXWm1MekV1TUM4aUNpQWdJQ0FnSUNBZ0lDQWdJSGh0Ykc1ek9tVjRhV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdlpYaHBaaTh4TGpBdklqNEtJQ0FnSUNBZ0lDQWdQSGh0Y0RwRGNtVmhkRzl5Vkc5dmJENUJaRzlpWlNCUWFHOTBiM05vYjNBZ1EwTWdNakF4TlNBb1YybHVaRzkzY3lrOEwzaHRjRHBEY21WaGRHOXlWRzl2YkQ0S0lDQWdJQ0FnSUNBZ1BIaHRjRHBEY21WaGRHVkVZWFJsUGpJd01Ua3RNRGt0TWpOVU1EazZOVGc2TkRRck1ETTZNREE4TDNodGNEcERjbVZoZEdWRVlYUmxQZ29nSUNBZ0lDQWdJQ0E4ZUcxd09rMXZaR2xtZVVSaGRHVStNakF4T1Mwd09TMHlNMVF4TURvME1UbzFOeXN3TXpvd01Ed3ZlRzF3T2sxdlpHbG1lVVJoZEdVK0NpQWdJQ0FnSUNBZ0lEeDRiWEE2VFdWMFlXUmhkR0ZFWVhSbFBqSXdNVGt0TURrdE1qTlVNVEE2TkRFNk5UY3JNRE02TURBOEwzaHRjRHBOWlhSaFpHRjBZVVJoZEdVK0NpQWdJQ0FnSUNBZ0lEeGtZenBtYjNKdFlYUSthVzFoWjJVdmNHNW5QQzlrWXpwbWIzSnRZWFErQ2lBZ0lDQWdJQ0FnSUR4d2FHOTBiM05vYjNBNlEyOXNiM0pOYjJSbFBqTThMM0JvYjNSdmMyaHZjRHBEYjJ4dmNrMXZaR1UrQ2lBZ0lDQWdJQ0FnSUR4NGJYQk5UVHBKYm5OMFlXNWpaVWxFUG5odGNDNXBhV1E2TTJWak1qRTBORGt0WWpWaU5DMWtNVFF6TFdGbFlUY3RZelkwT1dSaU5UUmlNRGMzUEM5NGJYQk5UVHBKYm5OMFlXNWpaVWxFUGdvZ0lDQWdJQ0FnSUNBOGVHMXdUVTA2Ukc5amRXMWxiblJKUkQ1aFpHOWlaVHBrYjJOcFpEcHdhRzkwYjNOb2IzQTZPR0ZsTjJRMlltVXRaR1JrTlMweE1XVTVMV0V6TVdFdE9EazJaRFkwTnpZNVpUZ3lQQzk0YlhCTlRUcEViMk4xYldWdWRFbEVQZ29nSUNBZ0lDQWdJQ0E4ZUcxd1RVMDZUM0pwWjJsdVlXeEViMk4xYldWdWRFbEVQbmh0Y0M1a2FXUTZZVGhrWVdZeVlUY3ROakkyTWkwMU9EUXdMV0ZoTlRNdFpERTVZMkUxTURnNU1EUTNQQzk0YlhCTlRUcFBjbWxuYVc1aGJFUnZZM1Z0Wlc1MFNVUStDaUFnSUNBZ0lDQWdJRHg0YlhCTlRUcElhWE4wYjNKNVBnb2dJQ0FnSUNBZ0lDQWdJQ0E4Y21SbU9sTmxjVDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSEprWmpwc2FTQnlaR1k2Y0dGeWMyVlVlWEJsUFNKU1pYTnZkWEpqWlNJK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpkRVYyZERwaFkzUnBiMjQrWTNKbFlYUmxaRHd2YzNSRmRuUTZZV04wYVc5dVBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjM1JGZG5RNmFXNXpkR0Z1WTJWSlJENTRiWEF1YVdsa09tRTRaR0ZtTW1FM0xUWXlOakl0TlRnME1DMWhZVFV6TFdReE9XTmhOVEE0T1RBME56d3ZjM1JGZG5RNmFXNXpkR0Z1WTJWSlJENEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE4wUlhaME9uZG9aVzQrTWpBeE9TMHdPUzB5TTFRd09UbzFPRG8wTkNzd016b3dNRHd2YzNSRmRuUTZkMmhsYmo0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BITjBSWFowT25OdlpuUjNZWEpsUVdkbGJuUStRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJREl3TVRVZ0tGZHBibVJ2ZDNNcFBDOXpkRVYyZERwemIyWjBkMkZ5WlVGblpXNTBQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMM0prWmpwc2FUNEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BISmtaanBzYVNCeVpHWTZjR0Z5YzJWVWVYQmxQU0pTWlhOdmRYSmpaU0krQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRFVjJkRHBoWTNScGIyNCtjMkYyWldROEwzTjBSWFowT21GamRHbHZiajRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOMFJYWjBPbWx1YzNSaGJtTmxTVVErZUcxd0xtbHBaRG96WldNeU1UUTBPUzFpTldJMExXUXhORE10WVdWaE55MWpOalE1WkdJMU5HSXdOemM4TDNOMFJYWjBPbWx1YzNSaGJtTmxTVVErQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRFVjJkRHAzYUdWdVBqSXdNVGt0TURrdE1qTlVNVEE2TkRFNk5UY3JNRE02TURBOEwzTjBSWFowT25kb1pXNCtDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh6ZEVWMmREcHpiMlowZDJGeVpVRm5aVzUwUGtGa2IySmxJRkJvYjNSdmMyaHZjQ0JEUXlBeU1ERTFJQ2hYYVc1a2IzZHpLVHd2YzNSRmRuUTZjMjltZEhkaGNtVkJaMlZ1ZEQ0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BITjBSWFowT21Ob1lXNW5aV1ErTHp3dmMzUkZkblE2WTJoaGJtZGxaRDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzl5WkdZNmJHaytDaUFnSUNBZ0lDQWdJQ0FnSUR3dmNtUm1PbE5sY1Q0S0lDQWdJQ0FnSUNBZ1BDOTRiWEJOVFRwSWFYTjBiM0o1UGdvZ0lDQWdJQ0FnSUNBOGRHbG1aanBQY21sbGJuUmhkR2x2Ymo0eFBDOTBhV1ptT2s5eWFXVnVkR0YwYVc5dVBnb2dJQ0FnSUNBZ0lDQThkR2xtWmpwWVVtVnpiMngxZEdsdmJqNDNNakF3TURBdk1UQXdNREE4TDNScFptWTZXRkpsYzI5c2RYUnBiMjQrQ2lBZ0lDQWdJQ0FnSUR4MGFXWm1PbGxTWlhOdmJIVjBhVzl1UGpjeU1EQXdNQzh4TURBd01Ed3ZkR2xtWmpwWlVtVnpiMngxZEdsdmJqNEtJQ0FnSUNBZ0lDQWdQSFJwWm1ZNlVtVnpiMngxZEdsdmJsVnVhWFErTWp3dmRHbG1aanBTWlhOdmJIVjBhVzl1Vlc1cGRENEtJQ0FnSUNBZ0lDQWdQR1Y0YVdZNlEyOXNiM0pUY0dGalpUNDJOVFV6TlR3dlpYaHBaanBEYjJ4dmNsTndZV05sUGdvZ0lDQWdJQ0FnSUNBOFpYaHBaanBRYVhobGJGaEVhVzFsYm5OcGIyNCtNakEyUEM5bGVHbG1PbEJwZUdWc1dFUnBiV1Z1YzJsdmJqNEtJQ0FnSUNBZ0lDQWdQR1Y0YVdZNlVHbDRaV3haUkdsdFpXNXphVzl1UGpReU1qd3ZaWGhwWmpwUWFYaGxiRmxFYVcxbGJuTnBiMjQrQ2lBZ0lDQWdJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQZ29nSUNBOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBbzhQM2h3WVdOclpYUWdaVzVrUFNKM0lqOCtGNHA4Y3dBQUFDQmpTRkpOQUFCNkpRQUFnSU1BQVBuL0FBQ0E2QUFBVWdnQUFSVllBQUE2bHdBQUYyL1hXaCtRQUFCN2FVbEVRVlI0MnV5OWVaUW0yVlVmK0x2M1JYeExibFZaZTNWMVY2OXE3UkpDRWcyU0xHU3dHUXg0R1RCanpzSFk0TkY0bU1ISEc0MUI5aHpEZUR6VEhsc0dHMi9ZeHg2Ylk3eGdNMlA3K0l4M3hwWUJvVVlDdFBaZXZWWFhtbG01WjM1THhIdDMvbmp2UmJ5SUw3NGxzN0s2czFydjlzbXVxc3o4dG9qNHhiMzNkKy85WFJJUlJEc2E5dVFuUDRISEhuK0NYdnZOSi8vTnRTODgrYTJibTF2NDFhZWV4UVBINXA5LzlNenlqd0Q0VndEdzJPTlB4SVAxQmh2SFEzQTBqWWpBaWtIeFVFVGdSSnZkUkFUR2lBT1IvU01lbFFpY2FETjRIQ0pBc1FJVEEwQ01xU053b2sweVl6U01FWWdSYUtNTExNVWpFNEVUYlpLM1lRWVRBVVJnWWpnQ0ozcWNDSnhvRXoyTzFpUVFRQVJNQkJPWnp3aWNhTFBsTjhZSWpBaVlpMU9rNDVHSndJazJ3V3hvSnFnNW1uaXVJbkNpVGZFNVFrUmd0c3hhekhFaWNLTE41bk1Jc0RSYTRIVWlxeGFCRTIycXovRTRFWWtlSndJbjJuNElBbFFadGVoeEluQ2lUUU1Ob1dpMWlSYUJFMjJtRE1kNUdSR0FpYXozaVJhQkUyMEtjQWFEUzhibE5oSUFLVm9FVHJReDl1UW5QeUU3cjEzNmpFQ0VBQ2hWbkNJVGowNEVUclJKSHNlTkUvaGV0ZGh5RTRFVGJRWlRib0NOQ0RCaVlvNFRnUk50VmlOSENoZ2prWWVPd0lrMmkybHRJQ0pnNGtoSlIrQkUyMWVlQTh1bUJkM1IwU0p3b2syQkRUTVJCRksyM2tTTHdJazJoUnhnSmI3REpnalZJb0lpY0tKTkp3ZHNveWVYeUltY2RBUk90Rm5NaUlrMW5BaWNhUHYzT3BVK3RZaWdDSnhvVThnQjhoTnNnY2VKd0luQWlUWVRmTVFXUHlXZXF3aWNhRE9HYWN4V1A1b29ka2RINEVTYnlkTjRja0JiY2lEMnFrWGdSSnZCakRFVkx4TmhFNEVUYlphVHd1eUYxaU1qRUlFVGJlYjhKdmk3SW9yOWFoRTQwV2JOY1FSUzVqckdBSEVDTkFJbjJndzVUaTNQaVhhMExJbUg0QWg2SEJFU2xPc01ZNlFXUFU2MEdVeXhBak41RU1VREVvRVRiVVoyb01DTEUrNkk2SW5BaVRiVGlhR1JFYlpZem9uQWlUYkp0Ti9JUmdSdGhRa0prVldMd0lrMlBjZngvaVpLNEViZ1JKdlo0K1RraVFFUmlVbzNFVGpSWnZJNFN0blJhU0lveFpCSURrVGdSSnZGU0FDNE5ZWUFSV0lnQWlmYUxDWWs0dFo4TU1IWU1kQUluZ2ljYUZOOURqbnRhRlBNNDhSd0xRSW4ybVNISXhUOFBSNlBDSnhvTTdxYm9uT0FGY2UybXdpY2FMT1lMNEF5Y1JpcVJZdkFpVFlST0wzZEhUSm1JQkEvaXhNdEFpZmFOQnR1cnUxSW5tK0tpRjFsNkJxbDQ1R0p3SWsyeFl3WWlOajJtMmdST05GbU00RUFpYktnaWFzK0luQ2l6V1lGVW9nUXFBOUVpOENKTmhVNklnSkY4UlJGNEVUYi93bGk5cUZhak5jaWNLSk44emRNQk1Wc0ZXOFF4NmNqY0tMTlpGNHpPaEFqak1DSndJa1dMUUluMnVHYitQVWVzWE1nQWlmYWZrSTFLd3NGSWlDeFJkQ0lvQWljYU5QT0MzTXAwcUd0MTRtc1dnUk90R21oV3JuN3MxalpIc21CQ0p4b1U0emd4cWFaMlh1Y2VLNGljS0pOZFRrb2N4d1hwTVVjSndJbjJuU1hZM09jT01RV2dSTXRXZ1JPdERzYnFUVjBSRWR5SUFJbjJxem5SVEg1RHVrWXMwWGdSSnRpdG5CRGhGeEhUaUFDSjlyTTV5V2Mrb3dFUVFST3RGbVRITmhOQllsU0VUZ1JPTkZtWndlQ3NZS0lteU5uY2V2MGtZM1ZHRUpVTE5FRm9PTlJpUjRuMm1RamdjQzR4VkxPb2s1VUJFNjBhWkdhN3h4UWNRSTBBaWZhL3NrQkl3S09TVTRFVHJRWll6VTNUcUNZL1E3UWlKNEluR2hUY1FPN0k0ZUpRRFpjaStSQUJFNjBxWkdhQjAwcGdCdlAxUkd5U0VjZlhhY2pSQVFqQnJDRGJKRWNpQjRuMmd4T2grSThUZ1JPdElQNEhISjZBMUZ6SUlacTBXYkZqTlZWWTJaUERrVFhFejFPdEttQldwN3RHbVBjMnZhSW1RaWNhRE9nUmxqM2UycytQSE5kTnpGVWk2RmF0Q21tdlpjUkFiVFI4U1lYUFU2MFdjK0xaZFhnUjZmaktHajBPTkZtaTloc3I1cVJpSmtJbkdpem1HMjNZWVppQmJhaTY1RWhpS0ZhdENsV2lIWEVzWUlJbkdqNzhEamlodGlrRE5XaXg0bkFpVFp6bnRQNDEyZ1JPTkhHNWpnaFFSQTlUZ1JPdEgwNG1xSmZMWHFjQ0p4b3Mza2NFUUVUSVUyU0NKd0luR2o3UWhBQno5MWN2ODlJRE5VaWNLTE5BSmdTSjNIemRBUk90UDJDaHdnU2c3UUluR2l6NDhibk9ORWljS0xORHByQ3oyUzJPem9pS0FJbjJoU1RCcURFUkNjQ0o5b001OFVOc1VrSXBtZ1JPTkVtbVBFNURnQkkzTW9XZ1JOdFgrR2FIV2JqZUpvaWNLTHQveVFSa1JhSmF6NGljS0xOY0Y0STduOEc2S3gxbHQ4ZEQwc0VUclFwNWxVOEJjQXcxOGgxSHVub0NKeG8wM0JULzRZMkpnSW5BaWZhVE94QU1BRktvRWl0UmVCRW0ySkdwRHI3U1J3ZFRnUk90Rm5SNHpucGVEQWljS0xOZWw2OC9tMGNLNGpBaVhaQXBvQlp4WmFiQ0p4b00yQ2wvQWNSVkp3dmlNQ0pOanQ2dExHT0prM1NlRUFpY0tMTmFvcmRnaW5GTVZTTHdJazJ1OXNoSzd3ZUNZSUluR2l6bVFEUTJrVE5nUWljYURONkdlSzBOUzhpeEg1bGU1U0hpc0NKTnQzWlVLdTlYSklFRkhPY0NKeG9zL2djMzNLVDY5dzNEa1NQRTRFVGJhckxjZjdGT05IMXVIazZBaWZhVEdsT3lSQVFDQklaZ2dpY2FOTWRUdmdQdCtZajh0RVJPTkdtT1p3eVpCTW9KdUVvMkJHQkUyMDJNOFpBR3dORjFPL3NiVDRmajBnRVRyU1o4aHpyZUJMRlNBWjd1L0dJUk9CRW16RlVBd0J0MjIwaU94Q0JFMjAvNUVBVG1LSkY0RVNMRm9FVDdYRFBDeE5ETWNkUUxRSW4ycXpFZ1AyeUJkQUluS05sU1R3RVJ6VEpFWUhBdDl2RUhDY0NKOXFNd0FHTTJEcE8xRlNMb1ZxMEdYRlRna2VnZGFTakkzQ2l6WlRpRkhtTyt5K0dhakZVaXphRHg3R2tBR0pYZFBRNDBmYnJjV3g4SmxFQk53SW4yb3htaU1qbU9FWXd5UE9ZNDBUZ1JKdjF2QkRaVUMwNm5BaWNhRE9HYWdTQ25jR0pqaVlDSjlyczdJQURqRWdrQ0NKd29zMk1HMlBzTnJZczF6QVJOeEU0MFdZTDFXeThSb1gwYlpJa1VYTWdBaWZhTEdhTUNhbm95QkZFNEVTYmdSMndKNGlWejNGaXdIYUVMSFlPSEZuZ0VKZ1kvZUV3SG93SW5HZ3pzd01pMEVaRElGQ0tJWkFZSGNSUUxkb3NIc2NZQVJPRGJiTm5KQWNpY0tKTkRkT1VhdHR3elNZNzBlTkU0RVNiWXAyVFo4OUF0WmJJYldOejR3V1JISWc1VHJScExzZVBGQmd4YUNmY2w3akxNSHFjYUxPUUEwNTNRQVQzTE0zZkVJbkFpUjRuMm5UZ0JMMXFKamFyUlk4VGJiWmd6Wk1FT2pxYUNKeG8rM0E0UHNjeEJoVGJiU0p3b3UwdldJdFJXZ1JPdEFOYXpIRWljS0xONm04RTBFWmprR1V4ejRuQWliWWZjc0FuTzBTeCtCbUJFMjE2YUdiSFAyR01RT3o0WnlRSEluQ2l6UkNvTVFBa1N0bk82SmppUk9CRW0rR2tzREtXRkRDMk96cnV4NG5BaVRZVE04REU3TVE2OHFKRE90clJzZGh5Y3hSekhCSHhLcDY1MW43N2RFUlA5RGpSSm9kcURMZ0dUNmJpRk1WUUxRSW4ycFJRcmVDZmpSaUFJQUJpTVNjQ0o5b1VJeSs2VHNTQWxZK09vVm9FVHJUSk9ZNFJJdHV0cHBpOHg0a1d5WUZva3lNMWtNMXZvcE9KSGlmYVByMk9GRW8za1J5SXdJazJlNUpUb0lVakhSMkJFMjFHNE1EV2NiVFJzZVVtQWlmYWJONm1ETXZZU2VIR1VDMENKOW9NNUVERHh0d1lxa1hnUkpzSlFGVW5FejFPQkU2MEdkMU9kRFFST05IMjUyMnMrWTBGMFNKd29zMUNFTUQycVNYTWFDbVZ4eU55dEN4MkRoeEYwRGhpZ0lteDJHMzNIenk1dEJxUFN2UTQwU2JZWTQ4L1FYUG5MNzRQSWtSa2F6bFJyQ01DSjlvc1lVQjM3bjdpRWZuYk9GWVFnUk50SWpFZ1lyY1Z3UGFzUll2QWlUWUxjSnluVVJSUFR3Uk90Tm5KQVdiNGVaeFdVdkEzc2FBVGdSTnRJbkRzNnNJNGp4T0JFMjFmSjRVSWZuTWhFZEgySU92RW94S0JFMjJLR1NzMkFDYkMzbkRZdnJhNXV4eVBTZ1JPdEJsQ3RZSW9RTEVqSjlKckVUalJKZ0luK0h1cWt0aXJGb0VUYlJiVGRuMGhpTW5xRGtqY1dCQ0JFMjIyVUkxc3IxcWlWR1RYSW5DaXpXcVdIeUFvRlU5UkJFNjBxZmJhcC84VGlVZ3hPVTBVMjI0aWNLS050U2MvK1FrQVFHLzFKc0gxcWpFUlVwWDQxcHVJbmlOa2NSN25DTmxqanovQjE2OWQvZGoyczE4ODR5V2g1anB0VU00TEttMnh6b1lWa0xuSHhBTVhQYzVYTldob1kzMzlMMHAvNy8vZTNWeC9hNjgvd0REUHNieTRBTldkdS9pOFd2cjd2emJzL3NsZno3cm40OUdLd0lrVzJHQjk1ZjZidi9IcFkzczNyaFpGVUNKQ0FzTDFGNzd5cml2UGZ1RXZyMXkvL0UrN0o4KzA0dEdLb1ZvMFo3dFhYamsxMkxobE82TmRxRVprNnpvbXk5RGIyUVlaODVhdDFadm5Vc0tyOFloRmp4TU53SEI3WTc0aWQrditybHdoRkFRZ3o5b014SEF0QWllYU42Tk5jVDRzVU1oakIrU2FQcG1ZQUtoNHRDSndvcFZvc2QyY0lyWjI0MUNqamUyV1ZzUklXQUZBbEl1S3dJbFduSXdrMFUzRkdzVUVSUVJXNU9NM0hZOVdCRTQwRDVCT2Q5RFVsY2JFRUxoOW9MYW5JQlpESTNDaUZaRmFrdWJqRU9FblFtMmtGdG5RQ0p4b1FhaVc1c1Rzdkl6MVBYYWxvUUdUQWlNQkRJaUFXTWVKd0lubUhVN2E3bWlyY0VObEhRZGxreWNSWVcrWWRhNE85WVY0dUNKd29nSG85L3NQVUpyK2RoaXhnb1FlVFVGQ0l5TG9aWGxuYTJqdWlVY3NBaWNhZ01GZ1FDWWJFc1JVUEE2b0JJOUFJR0lnb0N3ZXNRaWNhTjRhbUFFdmhVc29wWEZOcEtNamNLSUZJSEhNV2VsdDdFNDJNYllnbW12akNJT292eDZCRTYxa0I3aDZPb2lzWUllQlFMUTR3TVFTVGdST3RDcFE2di8yODlNQ2FERUFDRVlBSmhWZFRnUk90TkRGZUFGQ0RrUUhCQVJEQ29ZVU5DWFF4Tkh0Uk9CRXF6SUJZa1hYbmZBNndZdXcreDhMTWlQRGVMQWljS0xWRXh2NERtbmphanJpSWpZQmxKSUJKZHZ4UUwyeEZudWVYa2NMUlRhOFBmYjRFdzRwNW1TZVoyeU1nVEVHMmhob2JaQnJDeDVpUXFJU1VEdkJzVFBuenovd25kLzFTS2VkYmdDNEZUeC9Zd2dYQlQzdXdQMU5vbWJYSFFkSGNBSHoyck5mcEZWSkgxQkpjdit3dDZkMGxyOWZkUDQrSnZxR3paZWZ2Mi9qbFJkZ3hFQzdEZ0p0Tkl3V2FESEljZzNxek9ITW8rK1VZeWRPQ0tsMHN6OGMvSWUwT3o5c3Rkc3Y3KzdzZm9xVk1pRDYvRWMrOHBGTkh3QTJBU3FDS1FMbnlJSEVlUkZhZS9hTHRKTHpnMHowa09nc05TSi9hcml6M2RiRHdjVzgzeitYOS9lUTkzWnBzTGNIUGV4RDkzdlFlUTRqVXRSeVRGRGJNVVlnQklBVlZOb0NKU2trYVNIcGRKSE96WXNtQnJmYWtyVGFuMUd0OWpCdGQzUTJIUDVNbHVjdi90cG5QL3Y1SC8veEg1ZHhYaW1DS1FMbkRRdTVYbjNodVZNRExlK0Z6dDR2eG55SDN0MXVaNzNkKzRaN3UyZUhPMXZJZHJjcDYvZGhzaUdNTGdFaW5oaUFsNzYxYTlxQnNzRlR4TmpmZDkvUFhUZ0hsQ0x0Qmd3aEJxVXAyZ3RMNE80Q1ZLY3JTYXQ5aFZ2cHk2elN6NnNrK1ZlcFVpKy84T3UvK3RMWHRETWRBUlNCODdwNmxST1B2bHQxVDU0aHVlZWg5K1U3bXhlMDRIL00rbnZ2em5hMjcrbXRyOUp3ZXhONjBJZk9oakJHQXhKdWt5NEJJNDVGRXc4aUJ4elBvQlVqMUc1TG0vYzhSb3pkU3UxQ09pTmlYOGVCVHhzYjdyRkt3R2tLYW5YUVdseVMxc0lTMG5ibkNxZXRseFR6WDlRcTNSdGsyYWUrKzd1LzIwUnZGSUZ6UjhEU1BYbW1wVStjdjYrenVQUmJqREVmQlBDeFFhLzN0bXgzaTdLOVhjb0dBOEJvaUZSYlo4UWlwTGpRdmZuV0dkK0xWb1JvUkpCYWw3UVk1M0VnUlF1T0JNOHBrQUpFNG5Jay8xb0NnZEhHc25MRTRIWUhTV2NPM0oyVGRINUprazczeWFUVi9wUmkrcFFJTG4zd3ZsT1hybno2RjAwRVVBVE9iU1gwTDMzcE56ODBXTG42dHF6WCs0UDlyYzIzWm9QZXFYelFKNk4xRVdKNUs4RGlLZVFndkNxVTFBTnY0eC91dlpBSlFqY0xpUEo1UlV6cHNVelZlNW5DRTBrbEw5TEdQc1lZWFJGdkY5aGlLMWhCdFR0UWMvT2lPbk5JT3QxcnJUVDk1NG1ZdnljM1gzdm12bFJuRVVBUk9MTUFocm9uejZTdGk0L2UwK3JNL1piZTN1NGY2bS9lK3ZyZStscGJkTzRFMFVkM3BJWEhzUTRlWThydEE5WjdTTGlpc01obENrSWdDTnZDNzhGN0hBY1lCT0djZjR3SnZWRUJuUEs1aWkrVVlDdThrZ0JRS1pKT1IrYm5GNjRsODRzdmRqcnR2M1l5Mi9uWGMzc2J2UmpHZlpVRFoxTGVnbU9uUHBEMzkzN2ZzTGYzUFh2cnQ4NWwvWjVWTXNPSWM2a0FwU2xmcVh1ZUp1QVVaSUJVODU3UTYvaHd6bmRQRitCeTRQSGc4TCtualNuQXFyVnREQzNvYlYwMmltcnZvYVFLTG0xcy9zU3NrTFRhZzhVVEo1K2FuNXY3bTJwKzhjbG5QL1h2bi9ybTk3enRxNTVVK0tvQnpxUndyUGVCL3laNTZ6MW5mOGYyamRlK2YvZm0xVy9ycmQvcW1GemJ5MTZBNmtLMHFzaE02QlZDRnF4dVJrd2x2d25EdGZDeEpZczJHcklWdjl2Z2VZbzhwL2g5OTMxSEd2aUgrdEROaDM2NUQrWDgreE9CRnY5WVU0UjlocFFzblRoeFkybjV4QyswajUvNjk4ZnkzZjl3YlBQNjhLc1ZRRisxd0xud29XOW12dkR3STJ6MDF3MTN0di8weGl2UHYyMzcybXNrV29lcFNKQzZOL3FhSUJTajRtSXZKamFsU2dSVXc3bFI4SVRBR1FlZXduc0ZyVGhHbXNIamZ6ZDhUdCtWNEwyUGNUUjN3ZFNKL1IzL3ZyUTJ3WHNSQ0xGMGxvNFBsazZkK2R6ODNOeFBKQnMzLyt0My8rbi9QZi9NWC9xeHI2b2k2NXNlT0hYQVBQYjRFM3oxMVZkK200TDVvLzJOOVk5dVgzbDVjZWZhWmVoc0dNak5Ob1ZqSS9sOUFaNDZoUnlDcUFLQ0lIeXJFQU5TQWpCazJzTHdDN1djUjJvQUNuT1lFSUFlVEI0RTVHanRvZ1lVZ0NmWHVwb0xPYUI1Z2tPN1RnYUFZQUIwNWhkbC9zVHBtNTJsWS85VXBhMG5mdUIvL2lNM3Yxb0E5S1lGVGxObzl2RDMvT0NaUE12L3I3M1Y2OSs0ZmVYbGhiM1ZtNUNpOXRFVWxxRXkvMS8vZVhqaGg4QnA4a3RTQ2NHcXdBazlUejFVcTFMU296OEwzMGhJVit2QWEvaVFyaWlxQmd5YjFqYVUwKzR4Umt4SmR3ZUFOOXFDU3p2UDZZdXhSQVRWYnFPN2ZHcjM1S25UZjc1MytjV2ZldCs1WTRNM081SHdwZ05PRTJENGJSL28zUFBJVzM5d3NMbjJvNXV2WGpvMzJGd2ZZY0c4cDBDUTVOZUI0eTg4YWlRTHBKRkFNTUZ6TjRMSDJBWk9NZEtjNDlSQTUxL0RpTmphanljTWlFcTZ1bFlrTFR6UENHdG5tMGlOc1o2a0xKd2E1MmxLcWx6ckVqRGFBYStreEsycGRsdE8zM3Z4SzBtNzgrTWZlOHZGZjdYMjNKZDBCTTVkQ0JqMW5nKzM3M25va1Q4ODNGei9zWTJYbjcrbnYzR3J3a3lObzVPYmZ1WXYvQkJjelV5YkZEbVA5MEttZ2FyMmY5ZkdWSXFqQWdHQlJyb0xLby8xVDF5RWQxWFN3Ri9VcGhJZW9nalBFSGdnYlRTTUVlUzVMb0JyeEJSQUtUeWhZK3JFZVIzanZKQUhqdmdjamhoengwL0lxVE5uZnZiNFhQZlBQZis1VDcvYXhNTGQ3UUI2VXdMbjdiL3Y0MG1mV3YvOWNIdmp6Nnk5K014OXZadlhZUExaRkpWQ2NJd0QxQWpsTEtNZUovUks5YnpFdjBhRmFXc29pb2I1VHNqWVVRMjRIbnloNXpFbVlOY0trRllCYVBPYXZQaGQ3M1VLcitKQjZSazI3ZHA4UkpBYkRWT0loNVRobno4MnJCUzZpOGQ3OTU0OTlUUDNtTjRuRjl2SkRUU284OXl0QUxxcmdkUGtaUjc2M2ovNkFjbUhmM0x6MVV2ZnMvblNjNVQxZG0vck5lcGVSa1RBekJVdlVNK0RtcnpQU0ZJL2dXa3p0WjYyY1dSQkNNeXdwdzFTZGhDRUlEUmhJZFFSQ3NibE5jYVUvOWJHRk1Ed2p5bC9SeXJBc3Y4TzhxYWdKOCtJUVpJaytaa1R5NWZmZWY3RUoyalErdzhMbmZZR0doUkg3allBdldtQTg5ampUL0RxelpzL01OeGMrMHVyVDM5K2VmZkdsWkVjNVNDZ0NiMU0rTDFwenhzV0ZJUElxcEx6RksweHRTS3BwNEFMWUVBcTNrYlhTQUh2SmFvZ05FSHZHb3A4SjN4ZkpoaGR5TFV1UWo5dHRNMTlBczhWQXNjU0QxS0VhN2E0V2dXV2ZTK2VjQ0hNdFZ1OUMyZFAvOUw1NDR2LzZ5bldud1Z3VjdmeUpHOEdUL1BnSC9nVEQ5KzZjZU9QNzk2NDhrT3JYLzRjRFhlM1IwS3JXZk9aU1krYjl2M20zOFhZVUM5VXNSRUVZWTRIS2Z5SUFjRGhYbEIveS9ZRUJnUWtQa3dyRjFJeFcxVWNHQUdEWWJ4S0tMbGxWZUcyTjZhUy9JRDl0eGlicHhIWng0TU5qSGJ2Vzl6cnVsek9TbzZLK3o0VkhrMkxBUVRZR3d5Nno3OTY1VnZXTmhmZmVlSE1xYjkvTnNIZldtd24xd0hjbFlvOWQ1WEhhYWpKME9iNjJpTlp2Ly92MWw5NjlzRzFaNzlFOVZ5bUVMbzRBSEQyNDVHYXZFMFlzb1VleDNkQ1QydlBDZW51ZW4ybTRsM2NMNC9yTUtpTUhzaG9EY2wzRi9pT2FsKzdzVE0vT2lBYTRHbzlBWWxnTEpoTWpUQXdvaXNocDlZQ3BldzZ4alJKOGxNblQ3NzQ2TmtUSDk5WnZmbmtnMmRQRGU4MnozTlhBS2NwbDNuUDkvK3gxcDZtVHc2MzF2N0E2ak5mUExaNzQwb2orMVc1UXpkYzlIVUtldHp4R0dYVHBKRmxxOWQ0NnNDcDVDa05MSnRuMVh3VnZ6TFVWcU9ZUjhUWjY3MXRqbklPcWVQdzhRZ2VveDFJd2x3bk43cm9lME9SMjFSRE51MUlneUxQS1VJN0MwUUwzTkhqeVF6TXo4M3ZYcng0OFdlTzUzcy9jZDlTZCtkdUFzOWRxWEx6NlBmLzhOZnREcklybXk4OSswZXVmdmEvSHR1OS90cEk3V1cwd2pJS0JPK05hRXJPVWdGaDhCcE5JWnVQNmQzdTIwcklacitvdU5EcnorTWxvUVJWT3J2OFBidWRMWHhWQ2hpNWtjOUZYbUNxK2xtWXl1OUtFQ1lxVm1DbTRuMXk3ZkV5SnZ3a0pqQzVqWEhGNTNiUFUzdDlTMnRyNUxuQjlzN3UvRFBQUGZmRHorL3F6MjFwT28xYWI5T2svc0xvY2ZiTG1uM1BEMzRvMjl2OWY5ZGVlT3I0M28wck1McktjTklFc0RUOUR0V3AzZ1lQTWkxSHF0ZFpKckZzVFJSMS9UbU5tQUpBbGNFM1kzT1VlamQweUo2aDVvMzhBRnpvWFh3M3RnbEdEd3FQVnZTeVdRK1NGd1hSc3JmTkYyNXozMmtBdUc0RktieU9MNkpxTVlYSDhReWU5NlFFQzNLbEdDZFBucng4K3VKRGYvSzl2UDBMZHdOcGtOd3RnSG53dC8rZVZKWk8vcW50cTVkL2RQMkZweGF6M2UzS3JZL3FpZmNzU1g5d3RiRlQwZHdQUVZBUDF5WVJCUGFseXFCeDVEMEVZR1BpQUlSd0RGd3BWTWhPM2ROMlFJZmVTVVlMc3VRZzZPNFNoVUNvZzZZbEM3aENqVk94WnRTK0ZwamRjd2dnOXIwWkdDZ3dZRno0Ujk1ek00Z055RkJEM2hmUzdPNzNJWkJjc0xLeWV0L1dYdStmNVJjdmZ2ejlDL2haSFBHTkRIY0ZxM2IyZmQvUXp0b0wvM0RyaGFkLzcvYVZsOGprZVdQUGNsT2J6RWdvTmVaeEhtekZ6eHR5cEVuRjBQR0FreEh3dUszc1JWaFhBTDJCYlNNaTFNZm1pZ3RiN00rS3RZZW9OcFA2RjZHQzhTS0F5NTQzSnMrMEFTUUVab1l1dXNOZHlDYysyQkl3a3dWS0VRYVdERnNCY2hCSVJzUFVwdE1oUVoxTGF3T3p2VTB2dm5qcDc3WWZmbWp4YkVmOXpHbGxCdldiNlZIeFBFY3FWR3Z5TkV2M1B0aFplTWY3Lzg3R3E1ZStiKy9tVldCTXkweVlPOGdVRnF5cEoyMWNjMllUY1BaYkd4clhaVERDbkkwaEtYeEZ2KzZkZkpqbGY3OW96S3oxcFlVTW0wLzhnV3BkeVRkNWFxMkxDOXFZa2x6SWRUbU9VRHpHdGVWa1RySEhEdFY1TFRoTE5uaUN3RGFUQnJvSk5ZQ0hzcjlwdXkzbkhuemtOejc4OW9jL2tsNTdzWDhVdzdhajdIRm80WjZMeHp2M3YrV25iajMvbGQvZlgxK3RoR1NUY2hlYVFBZ2NrWTlXUU5QZmphbjh5NWozTFlFOGJzRHVFQmRQNllrT1lYdC9JYXNaWlMvcTRMYmZuTWZaTDZXVUJSYjdPUndGR0FObTN5RlExbnJDOXg2MkFaRWpERWdZUkxyeWZ1MUhxZWR2VXBBSmlVb3dIUFRwNnFWbjMvOUxSbjdweEh6N3cxL1R6bzZjVnZhUjhUZzFiOE5uUC93dFg2ZEIvMkxqNWVmUDVWTUttazA1amt5NFhFTzY5bzN3T05YUXBaa3dxSk1GVFhVaVR3cUVnaDMxT2xDbHdUU28rS015RVZvVis2Z3I1Zmdtejl3WTVGNHdFWURXMmhFR3pxc1lBNjFMTDJXMDdValFZcW9lUjZRNlhXcWs0bldVWWhoajBHcDNjUHIraDM3OTBlUGQzL0pBcW50SHlmUHdFUVFObmZ2SXQzNXRyczIvWEwvMHpMbmh6bFlGQk5OQWN4QWJZY2x3ZSt1YjZyV2VacUlnZlBlRUlLMFpwY0NELzVxSWh3bzdGM3d6SkVtODdGVHhQTTQ5S1daTGNRZkVBek9CV1ZrNm1sQWhVSWlyOURtUDBPbWpOeW5QbmpVZks4Y01GbVBlQmxtVzJ3SnNOc1RLSzVmZS8renExbWRXY2xxS0htZENYblA2Nno1MmNkamIrNnZiTjYvOUhqM29qNTRFb3Nad2JSeGwzRVFHeUlRQVNqQmVOMkNjeHhubmdjWVZWU3ZhQThHN3FuKy9hUjZuQ0hFQ3IrcTlodTI0cmxMUFlmNFVlcDVRN01PL3B6eG8xUFFYc1JHRFBEZUZ0NmczZnhaakNlNnh2bmNORUdTWkx0aTYzT1ZQNFpoMk1hcFFDejl0dmFvRWJhdmR3ZWw3TDM3bTRqM252dXZ0c24zMUtIZ2VQa3FndWY5M2ZkOVpzUHJwN1p2WGZyY2U5SXVZdlpvODF2NDlwaEJaLy8xWnN3NXErTUloZUorNmx3aS8vTlZyNy9UVFg1RUl4WDdRNmcyRnlvVlV3ZXN3bDRWZTZ6VzRMRTVTN1dKMTN5dXBjUXFLcjJSektpcGZ4eDlqSmk0OGt2MFpnUlhWaXNIbDh4T1ZSN2Zvdm5aZjJvZUYyb0pzT0JoZzViVlh2LzdhNnRyUFA1bk5uejBLSHVmSWRBNWMvTGJ2T2RmZnZQWFgxMTU1NFhmbC9SNDFWdGIzRVpLTjZ5SVltNE1jUW9nMkNTeU5vQzQrMi80aFd0Wmp5Z3ZlKzVXbTQrUWJPY3Qvc3dOQzlYY1UxN3NrcU5JSjRFTTVoN3lnVm9RQ3VPVXl1VEhoSmFoU293ckQycUlJNjFrNXgrZ05CMzFjZStXbGoyeHZiZjdUejJaejUrbzM0TmU3eXlBNUtwNm12N24rMDJ1WG52MnV2TGRIMHk3NldZcU9rMFlDcXJ3V3BnK3VCVmRyRTQwNm1zZlFWRExER0RNVjlLZ3AxQlJkeWI2MjQyb3kvcTVlRG5oS3BhQnJ3OVdxMkFjVFFZaHM1NFVuN1FMd01aUDdmZVAremU2NGEzdmgrKzhUUTBnWHJLQTBBVng4eHpVWE90cDFRaVNrNm8wYlNTQWhHS09oRkNQWERObmR4YldYTG4xTTduL3c1My85K0xIdmVYL2F1L1pWNjNFdWZNTTNKOFBkblo5Y2YrbTUzNXZ0YkZIWU80YUdrR2xjYUhZUU12aDJIemVOWFp2OXZaYXpLOU5TVGhwVkV4bnhLSk5lazBaQ3ZETHBaNmFSaEIrZ29uOU5nbkVGVmx3a2tOUVVOZ2I5Y3I0RHdTN1ZwaEd2MlpSOWVrYlE1MXErSnRUYjNjWDFWMTc4Nk9ycXJYLyttMW4zbmpmSzg3enV3S2wvTUprLzlwMmJMei8zSGNPdGRScmxtZzZuRGhONmlhTlR5MEZEU0VRNHlOdnpNemlsTmxwVmI4QjNKZmoxN3lHSlFLQ3FXZzlHbXpzOUs4Yk14YzlVa1NlNTl4ODJqMWErajhybktuSWVqSUs4SE1pcnl2WDY0bXl1Y3dEQTN1NHVibHgrNWNNcmEycy9Ydy9idmlvOHpvVnYvdDMzN20ycy9vMjl0WldsY1hmcE9nRndHQmYrWVlGbnZ5SGorTitaeHZkTnpuVnM0NmNVZzJxaDEyZ21UbERaYWozYXhVMlZidTZReUdCV3hlOHpjM0IrUEQzTmxlRzJNbytxNWxPZzVpN3lFRFFBS3V5YkVjRXd6eUFpNlBYMmNPM1Zseit5dWRtYzg3eXBnQk4rb0JPUHZxdVZEWWMvc2ZuS3BWUDFpamJOY0NIV0UreEplVVhUN3pTeGJqUkRlTVcxaTNLYUo2T0d2S2lhZHpYVU5RSkJ3UHI3YVpyN0lSOCtFVHNQSXFNTXBFZEZFRzc1a1FSeWp4dDlYaC8rMGNnOFVRR3lodU16anB3Z2tCdG00MHB0Snh6RktHOGhvVGlqVk1hNHRiYmt3V0N2aHh1WFgvN296dmJXSHoveDZMdlY2d21lTjhyalVPdWVCNzU1ZC9YR0Q0anJwbWdDVFgzMlpSTDlmTmplWjJySDh6NjlVdFBGWDgxTFN1YXE0alVhM2s4eC8yOGFKS1Q4TEE5bVBFNUVJL21HYjZjQlZSa3dCQUFOSDA4ajNzY1ZTbEh0UVN2ck0yRzRSaFYyclNuRXJvdWIyREVJQzZidHpVMjZkZjNhSC91Rko3L3dCNHRGeEs4RGVGNjNBbWo0SWU3N2IvL1FOL1JYci8yTHRhZS9jTmJvdkRKbnYxOHFlUktUTnV0bk0vVlovaG5EckZuYWNJd3hVRXBWVzJoY1kyYlQ2elROOFppR1RvU3dFSXFBMGZMNVRaTTJtOVNldUtKSDdXWm52RXBOWGhRbjNSeU9DVFNtL1l4T29IYmp0MlJEeWprZHJjdnQyZjZDTjJMck05cTE0aGhqa09lV2R0WmFWNVlHUTBadk5BaENRbVlxT2g5T25MdG43OVI5OTMvM2I1MGYvcHVtYzNYWVJWSit2VUh6cnUvN29WVHk3Q2UzWHIxMFZ1ZFpVWWVZQkpvNzVXMWVyOFJmS3RWOEE3YjAwaGpTZ2tZMEFocHJRSVZYb0ZGMnpXbTIyVVIvK2ltdVN6dVZqRmpOUXdUNVNDVmtSUmpXbFlWU0t0MVdZMTJIUUpYUFU3OHJWYmJPdWM1ck1WNk8xd0xicS9HczM3dzJ0NzE2NC85OHZjaUMxelZVKy9vZitRdlVOL1MvYmw5KzhiRjhlM01FTUNFd21xWXNtM0tGU2ZUdnVQeWlLZXlpcHIvUEVLNXhFRkpOK3YwNlFLaVNKMkZrY0szb0c5dEg5ME1sUC9Fek9tS0NNV3BVcnY0U0lGeUNvRVpwRjlPYVFWN2l3N0xpNHVkUk50Q3VUYXgrVG00Z0hhcENKYU41bHU5aDgvOTVjUjRQSGk5bGxXVTVibHgrOVYwM2I5NzQrUy95OGJQVDJOd2pENXp3RGQ5YXVmbUIzWlZyUDdSejVXV2FCb0JacU9XallqSkREaldKb1BCMzZsQlRzSEt6R0NFVXBsUHJzOEtOZ3U2QmVpZEJlVUhYUDR2UGFVYkRWcW05Zm5FaktxdklsVHFSMTUyak1jTWdJazRpMkJqYlkyZTBHOG1XUWtuVWUrZHNPTVNOeTYvK2xvMlZsUitza3dWM3JjZDU3UEVuT04vZC9xbTFaNys4TktzYzdkMWswcENyN0VlL3JRb0tHdnU4NFVTb0RZZHVONVFzQVZKYzlvRWVRUEZmQTRsUUFYL2dpYW8zQzFRSmcxb29YbS9yR1h1ekJLb2JGSXhWMXZHdE9UN3ZHdlQyNlBJcnIvell2LzNDc3o5dzRVUGZ6SGZLNjl5eGxwdjZtN3p4NGd2ZnR2SHFDeDhhYnEyRDNteWdxY3RSK1RDcFJnTE1RbXlFNFV1b0NSY0NLTXhiWmlGQnZJYWJiOE14dFRZWDYvVlVJR1pZcFp5Yng4MTk4ZFFFbnFWMkRDVHNISEFqMTZqWGpld25GTEdNblRiTk55V2Y5NFdobnQvT0FEQkE5bGpuMm1CbmE3TnovZXByZi9iLys5UXYvZUpiVTd4MDEzcWNDOS93VFozKytzcWYyMzdsQmFJSjlQSTQrbmtjSlQwTGxSekc0MU05QnFyRGE3T0daMXgwQ05QSWEwOEtxZXI2MDBUMXo0bUdpMnc4NjBkQjZOUFVaVTIxU3VmSTIzS2JDUHl3S2RlcStxTjVWTzExNnUrMzlobkZLZXhVR2tFRHVydVVDNjR2NEtwdVhOQytsbE13ZmZaN2VXNFoybUdlNDhhVnEvZTlzcnIyTXh1YXV2VWIrbUY0bmpzT25LLy9rYjlBNnZTRi8yUGo1ZWZmWi9KczVqdndHOFdlelJwZWpkVmd3MkZJN0RhRVJCTWU0M3ZKMEZDWWJmUnE3c3B2ZXB0aEFUVmt3cmpHZmhWajA4V29BRlZJQ0JxVDE0MzA0NFhLTzNYVVZSNGpJeUZiS1ZubHAwN2RWS3JSR0dZRDNMeDY5UnN2YlEyK0hUajhJT2VPQUNkRTlJMFhuajYzZmYzSy96RFl1RldkUmp6cStjb2hBYmc2TmkwSCt2empab3NLQWNNQUJFMUNnN093ZmlFWjROTXM1WHZUUEt2czUzS1l4b0M5bk5lcEs2bFNyYzJnM3E5R05ZbzY5RWFWSW0vUmwyY0t1cjRLSHJlUlRodHNibTYwcjYzYytvbW4rM3ovWWJOc2Q5VGpQUGI0RTV4cithdGJsMTljSU9DdXE4RWNwdmRxR3FlZXRVaGJ2eU9Qek5tRU9RK1BVUmhGdFM2Q01RMmw1QWJRcWlVQTFFWUJNSkw4ejhwK0ZqMXZEZldiVWNheFRoQUVIUVNvTnJUNjBDM1hYZ1BiRmw2dlhMLzJqdFdON2YvcHNGbTJPd3FjbFZjdXZXMzM1cFh2TXYyOXlsS2xrVHRwWTA0ekptUnBvSFJuUzdwbkdINEw4cFhLVjhQNzR6RVhaNVArV2poNzAxU3JLbWxwcmwyY05CSk9qUXZaeXRaL3VQNnpNQWZqSW9TVVd0SlNpQ28yZkJoVDlNdWhNaFZhUGx4R1NJaFFXRVN4cXVZOVVsMTNVdkZVWEIyQ2t6R2haQ2hNNzBVL1FyRVJIY2hTYWFNeEdBenAwbXV2UGY3dnZ2RE1iejNTd1BFdThOL3RkampyOTM5NDU4b3JQQzIyUHdvZEFUU0dLSmcxcUpKeENYdERuMW9UOEVOVjBIQ2t1a2xJWk5id1RqRlByT2RVQzZVU1RKQUd4YzBHMW0veWphZWt5RTNSd3VPZWpha3lRaDNTM1hVQ1luSXRyL3BWeVBJR0RKd3hHbHBid21CM2E1T3ZYcnYrdjYxb2JoOVd1SGJIUE00UGZmd1BQYkozYStXL3kzZTNSKzdja3hMaUppOXp4MEVUZW9FRDVrUk4zcTN3VGdHek4xTW5RekJTUGV1WU9JWHpQRFhQWFNsaW9qYWZRNGR4L0FMTkFhb1dWYXV5dTAyZnMzaERGUVhSY1NBdDFzOGo3Q1lveFQvS2pYRVdQRVNFTE05eDQrcVZ4NTdlTVgvc3NFSzJRd1ZPaU9EQnp0YjM3bDU3WlFGdTlkODBsZjhqUXdvRXJUMzdLV0pPR3ArdWgyVGpKSFByTFVMajhvZVpHTHBBNlhOU3VGclVjWW9iUjdBM0ZLT2RBSTNoVTlNYWd5Q2s5WG1Yak1sZlN2Q04wdFNOb1pxNHllMGdMRERCWnpVQmVISnRWWGtHdlQyNmV1VzFIL21Wcnp4NzcyRjRuVHZpY1I3NjF1L3FETFkyL3Zod2E3T3lzcS9wSWdwN29zS3ZPNVdjVDJLK3h0V1ltb0FrcUVwSlRadWJxWC8yU1N0RjZqK3Z6OExRaEh4cDVBUVRsOXBwRGVGZVhaZXRpYnF1eXZUS1NJQWJlclh3L2Z0R1R6LytRQ01FZ0hzT3FZYXhUYldya2xXclhoKytGUWZlRTRrR1JBT0JZbzZYOXIxMTg4YXA2MnNiUDN3WVhvZnZoTGZSQzh0L1l2ZjY1U1V4ZXVZNzVOMjBHVTRtdk9kcDgvN2p2TkdzWk1lazUvVkxvU3FNR3pjUDcxR3RSa0sxQkM5azRMd1hhcXdoRVkrT1dqczF6cWFMSCtHMkJKZkgrVWJYZXRnNUtSa1ZrV3JZNW5yYVRMSGYxQlJqMThhTk9nd0hBMXgrN2JYdis5WGYvTUlqdCt0MUR0M2puSGowM1dxd3NmWXRnL1ZidDYydytXYTBnKzhqeFVnZVZ2ZUN6RlF0aG82NTdzYUZrV0VTeE9QR3JsSHZjS2JhTkdjNW5sQ0VYTlJVcTJtK0hWWEhEcHJwOGlLTTlLU0Fad3ROV1FnRnlycU9uUmkxY3IzcmEydkhYMTFkLytINXN4ZlNJOFdxemIzOWE3Kyt0N0gyVVRoaGhidDVxL1hyQTV6WlFGTy9tRWJaTmhsbHZ3b3g5UENDclJaRC9jVnZKblJDVkF1UlV0M1M1bW9xVFRtWnFtbmlqWlFTL0lhY0VhWnhrcmVYeW9MZzhBWmdVRTdGR29OQzNxb2N3Tk13V21QdDFxM3ZlT3JWSzQvZWp0YzVkT0NJMGQvWlg3M09DRWFHSjdmV0IycVRGTGJVMzM2K1U4OEJ4bjdoWUdLRVRUblFySGxYa1Fjd2plUmE1VXIxL2REcDFTMXc0VnFRK211Z3hxeFZBQ0lJbHVXT05vTXFWcVA3ZXB3SFVheGNVNm9saEVZUk1EcXlNSkpQMXNjWUdtU3ZKbm5lUXJvMzJDUm5LcXRLQk5kdjNUcDNZMlA3RDd4MFk3VjFKRHpPMjMvZnh4UFI1Z2ZxMndVT1FtL1dMNmFERUFPelBQWnU4SWNqMWZveFlQVEplQml1elhRWGw4cG1xQ3I5NjcxTWNYTXJoZG5yTXJiMThmRFIydFFCOGplTWFsR01MaHl1RnA2TDh4N3U0bkdmWlpobEdBNHpldjYxcTM5bzBGMTY2S0JlNTFDQTQxOXcwSnIvMkhEejFuRWZwaDNrNGpnTVZ1MnJMVHdNcHoyTGhWQTFJWTg2VzJXbXJIdXNFQXcrbkhPdExMNmpJWnpsTVpXUWpRSk5hU29wNlNKa20wdzVUd3h2cFZvNktNT3dxcGNzSmtkTldSQU45ZWF1cjZ5ZXVyYTE5L0dETW15SEc2cmwrcHYyYmx3aGN3UXUzUDNXWVk0Mk1DWjczN3BxemlSeW9FYWVWUnN5ZzcwNWxkeGhaRGRvR0U2V0YyTmw2ck5RQitWcWNUYjBKVE40b2FiT2FZRk1YRlVwVWlxaittVzk0YXA2Mzh0MjVlYnE5LzdTRjc5eTd4c0NuR0EzWTBzUCt6K2NiVzAwOW5HTlhhVXUxVnluT2ZlaHNhQ1lWZytaT3JxTTVzMEVSZDJoZHFGSkxVRWZ0NEU2REZuMkEvTFJ0cHZwdExYUERjcXQwblhsekxLRHVrbUdLd1FIQWpFT0ZTaDNvaGFLK2J4REtZV0VHWWxTdGw0U0x1c3l3UklwTjZGbWwrdlN4REZ3Q1lhaXdwR0MraG9VWXdSa0RGZ015R2hBMnk4U1Z5RjFYeUlhNHFaRXhlU09KTWl4ZW12bHJON2JlZmRCd3JWRDh6aHJhMnMvT2xoZmFZbHppUWNOMDk2SWxwdEpsSzJnVmxsdkZCWWYzM1I2T0ZSOFdYbVhDYm1BbDB3S0d5VHI0QjZubk9QWGZ5aDNZWmY1RFNZbStPR05nWm1nR29xN2loVlljZlA4VDBNWDlMZ0VkTnlockcreUU5Y2pCOVJ1c0lFK205MkFNS0RucjYzKzZYUitjZTROQ2RVZWUvd0oxdG53bTNxM2JzSm9QVlBDL1ViMnBzMGM2cmsvZmZXWkFOYzRPVDZucWllb2IwUU5Td1FOZEcxMUphTFhXSk5RaXFxaFlCMTJDOVE3UGNKUXl3T1h1T3BKd281cGFVQkRPSmZUUkswTEpuVzNWenM1L0o5K3pOcEhub1U2VHExQW1tdkJsUnMzSC92Vnl6Yy91Rit2YzFnZWgxbmt3OFAxV3hCM2NSMGtqaWM2M0phYmc1cXBLY3VVVk9uMGJvRTc0M0ZrSkhSc3FtOTRjZ0Fqb2lITjZQTGZaOFZqaTUyVDJNN3k4d1hqNHNRalRUbFZab3dhei90WVltZmMrMjlpUmtVcXdveWxweW5oYUxRdXdBTUEvZDRlWDc2MTliOTBUNTdaRnpWOUtNQzVmdjNhTnc1M3RsVFcyNW1vbGJaZkFJMzNVSk5yTTlNSWdwRytNb3hPZlhLd0FuM2E2cWNtanpPcG9YUGMrNWdXcWpGVFpTQXRmRTNiazZhcU5Sdk1kaE15MnJpY1JvMjRmeVpDVW12U2hkdFdVRTNlblhmV3VwREVSZEE0R3VaRklUQ0xrWU5RY3dFMG9sRTlQcWhHMGRBcWpYbGp0WG5YZTFhN2h0RnFGS3l0cnJ6M2N5Kytkdjkrdk02aEFJZUp2ckcvdHNJeVF5SjhOMWlsaldVTTBjRWplMlJlUDJ0NjdXbEVSVFg4UWVOWWdRL2Y2cjFpMHVDQkJLRlVyNVR6UEhXOXRER3pWOVhGdkhMQWd0cG9PRnFFb0tpdVA2bEVDMDdvRUFBR1dZYU56YzFUeUFaZnV4ODgzRFp3SG52OENXYVJqL1Z1M1NpbkROL2tkUlNwNzU2WndwTHQ5K2N6RXhjMVlQakdSbEIxdDZZMFpoZk43OG1FS3dVZGZTc1NObE5LUTU3Q2dlenQvdk94Y3VYOHdhQWpOUUNIb1ZoUkNBMDhrbkdzVzY3dFRhTFhIOUN6MTI4OW5uVG41bDhYNERoM3BpUWZma08ydVQ0MXB0OXZ5RGJkVlU5N2p1WnU1Rm1wN09JZ041d3NNMGJiK1dDaDJDZzlQL1lpcXpGN3BkWXpUWDE4SmNDcHRmVklZOGhNTmRwNjBrMENCUVhkS08wYi9uNVJyTVFCcnhWcHpQSENUbTRKTzd6RlFFeTF1dTV2QU5wb0NBVFhWMWJmL3ZMYTlyc3dveUxPYlh1Y1c3ZHVmWWZ1N2FsODJCL2g1T3UxaWR0aGlacTZDbWJSSHBnMkl6T3JSNWxsOXFYK3VyT0NzLzZjOVY2K2l2N2FETVJFNFRucWpaOFZ5clpHNHhyVEVJS0ZMRjN6RFV4cU9nTUlhbU5Lalk0YzFOMjBUNFhHYmFNTDJUbHlFMndzUWUybW5BT0Z3SGpmYTcvY3FJR3Y2NGpXOW5QNkdvL1d4ZlBzN2UzTWJlL3UvSFlBNmVzQ0hFWDBOZG51Tm9uV2lEYmUwNDNMUFViRkdFZFhmZFRGQ3B1WlFPT0tuL2E2TkFkWTNTaGlHa0RSZERPc2JwRUxWNHA0NVU4VFZMYkQ2YytRR0JoOWF3ZGY1eGplWUNzM0FFZ2w3L0h0U0tiaWtRU0RZVVpQdlhiOWUxU3J0VGdMUVhCZzREejV5VS9nc2NlZlVFYmsyL3ViNjNlY1E3NmR2T0FvZ0tqSzNaZUgzY3Zrams2Y29wSjg3L2QxWnUwREt6dkVaYUpYRkl6em5EenhYQ0h3a2xMcG1CKzkyTXYzUFRzYlcvR2dOVzlaZEZOVWRnTkpKZHp6TlI4QXVMRzYvc0NsVzl1UHpoS3UzYTdISVNaNnoyRGoxcUhrTlFlOU1HZFpyM0c3NytVd3dWcHRYZUdwc1h3WnBrcGpOYjlTMkRTQnBCT203eW1Wa2Jpc09hcXFFeEZodUNkaFg1Z1pQeDQrMnRsTlU1T3hjRHAwbG5TbkFoNXB5QS9kelVwTWViUHc0d2ViZTczTzl1N09SMStQVUkzeS9oNWx0VEdDSnJVWGFaanZtTlFOWFRUbUdXbGNCN2lmQzdSSnkyMVNYalB1OTJiVmFKdlVpRG5id3QzUkMydGFRMlRUYnRBNmNXQUtoaWw0UDhhTURLZVZMRjJvNFl6eExUTmh3MmE0TjRlYXB6bnJpMzFsaEk1dWJ2U3A1bDBCUWRJd1BUb0xMdjJJZUxHRlR1ZjBsV3VyMy8vNVFjcDNGRGkzVmxkL1o3YTdyY3h3ZVBmUnlhaXFXOVpadENZUU5SVWY5K3RsWndGLzBlR00yY0xTa2JwTEE4Qk5nNEpuOFcrTWpwajZJbVR1U0FNbUd2dDZ6VkhBUGhSNktsdmJhbGQ4bzNvUEt2TTJ3S2c2VCtsbHBPSVZwZDVaVUhtTTRPcnErcU9iQS8yMk93b2N4ZnplYkh1VDZrbmwzWkIzMEJqUEV0WkovSHFNdzhpckpubk1hbGQwbU9Qc1AxRU9sWnE4MkY5bDNMaEorU2ZjZ08yOGZLaStXWGdzdDhNVHRWQndaajU5VE5raDdENGdWRHRFU28yQjBRNlBNTCtwdjN4VDFsYlVpb0o2bGZjNmRtWUg2UGQ2YklpK3l5L2lIVWNRM0Jad2pNNDUyOW5DckIwRHIzZVZmUnE3UlEweC9MandUR2JNcVpwQXNSOGFlL1RhbzMwZDEzQzJuNW1xNzZHK3hyRFlNV09LUmJaRjRWTkc2ZTFxbC9qNHoxTk1YRTY2TG1oL254RUlpNWhTRVFOeHpybEtxRWlaMkRUUDc0U0ZVU24rYmJUR3lyVXJqNzMyNmY5RWQ4VGpQUGI0RTBSaUhodzBqRWtmcEk0enJWWXo3YTQvcVY0eXkrK09lNTFaOXVWTXlwa3FGOStZQzhsN0dmL3pKckcrVU1acFhIZDJWYUREQ2ZTaFdnT3FpbmMwaDFpMlViUHNMNnRmZUVRKzl6Um82djJ2TEF5ZXdnbnloRnBjTVNJUUFxem9xNm0xakFwQTdndU9jaTZhTy8xN0ZRTkNyVDduVnlVV3gxL1E2KzE5OFAvNXI1KzcvMDZGYWdyRTMyMEdmYndaYkQraDJLd0YwSEF6VzczbzJIUmoyYytLK1lsRUJFYWJKU2RKL0lxVUY3QVJxUUNsVWhzUjA5Z3RFZVlQRUdsY09YOUlaMmxrd2pNTXlLcmQwS1BlV3hEb1RFczVidUQxMkh6T2RHdDE1ZFR6bDEvbFF3ZU9qL3RFNTJ5eUlkNU1kaGlMcjVxNnBaa1pTbkdqTnc0bkcrdFRqbzExaTBrZTJEYzErczFzcnM1Q1UvS00rdnMzZ2VCZm1laUh3b2RoVzBzd29neU1IYjg0TlBDTTZZUXVJcTVhS0ZtbHptdDB1bWNQSFdpME51anQ3dEY5NTg5OHl4M3hPRnRiV3cvb2JFalRGdUVlRlRIQy9SUlBiL2M5ajJ1RG1aVFB5RDd1MURKR2R0ZWp3RTZCamc2dmpRTktDRmlhVW55c0xJT3FGMGVEeHJjbTdUUFF0SHh1aktjSVptb2c0OXVveXJCUXBwWUdaRnlOekJnWW5XUHR4dlYzM2hIZ0dHTytWM1N1ZEpaTlBMR3pYb2lUZE04T0dqcE5GSFJBOCthMVN1aDBTTUNhVkE4cXFlZEo3eFNOYTl0SGp4K3FvUkpHYzdYS09aU3lldTYvUERnNDRLenQzaGxkQTJ3em9FWXU1TENYVGVwQUdIMTg1VE5WdksrZ3JPd0d6WnJBU0F0UTZabkdISC9VZ1MwVlhXcHRCS2EzOTY3NjF1ckR5WEdNWVQzbzQ2aFMwVTBiMEk1cUhoVXVsR3EreFBmZllGcG5CRVZrcHBFWFA1NFFLdjhYQkVWWUZKVXFGVnlNSUtBNklqQWk0K1IrcjNyblA5aUt4MWxZeWNyK1VNR0ljSDQ5anpNT1JCczdPeCtaTzNrbU9WVGdQUGI0RTBTRUIvSzlYUnpsNWs0NUFrQ3BBM2l5dk5PNGJFU20xblBHMW9qcXgySVdEOTc0R2FqaVZhd0NFUWM1VDIxS3R2NVpaVFEzQzZXYkRqcVBNejcwQmREVTZWM3g1ZUY3REliY2pNSEd4am85OWZuZnBNUDJPQ3dpMzVQdDdSeXB1M245NGp4b3BuSW5ObU5QSzRCT2R1NlRQMDg5Sktzb2V6YWxGdzBycmVzRnpjcnkzWWFWOThhdENpeUlnM29mM2Jod01zeUJVSW1XeG5GK0UvOWRIV3NYVUEwRTRkOUZ4TkxWVXM0a0ZmVWN4eHBDQkF3Z0d3eEJnOTdoaDJxaU5XWDkzcjR2em9NazZFMGp3U01nR2JOUHRDbStuWFRSVnBjc1ZkdHp4cjNQSm9xNURwWkorZ3ZqQVdndmlhS1FPY05qcXRKV01wVkNxNnhpSjFUR21uMFBXcjJlSXJVTFA1dzZSUzEvcUI5ZmYyeHRLQmlFY1c0c290b080eDhERU5tNUdxcDBVb3VYN0F4WU5TbDhveStNa3F0aHNhdngrRm9QL0pBYlRLSDRZemMxMkI2K3RhdVhrME1IanRFNTlLQi9aRml6Z3dpRFRBcXBib2NJdUJQSFJHUjhEamYxL1l4NU1yK2xJS3pMVkRvRGF1SFR4Q3lwenFpRjRWQ2RTaDdMZE5WMHNtdkVSeUhrWW1vMDgwZ2NKalA0cXRFOVIvN2Z1VGFBR0ZLUU8wQU9pSkN2NGJ3Wjl0L1VtYlpKY2t5M094dTBmOVlRbFkxbWxSeGhQNWxjZlVDdWdaWHpxdjYrWTlvV2I4M2trVzVJaFJqdzdUMU5RdWt5OHFqcURhcnBNNDArc2x6clVmVndVcVhHYTNKUmxTaENxaUF2Mm04Y0tITnQ4SXV2WEgvMzRZZHFSc01NQjBmbXd2ZXJIVUtWL0ltank3VVRSalBrSERUREhYNmFKRzZUWjVydU5VWmJWMEt0NW5HUElkRGtyZE4xS2puY2M0T3FIRlE5UkFOR0tXOS9mSXcybzEzSVVxUE5hemNSVHpCVVBIOE43QktvMDlTOTI3aWNyd0FGMEREV010b1dwRjNia3hHaHJiM2g3N2dUT1E1MGxrMjhPS3ZWY1RQelBNdTB2R1kvb1pwTVNUbkh0YXcwczE3N2E3Z01jNkJ4c3o2VG1pWERkMC8xNDFtN00wdHdkeTFldDBsRHRrbDFGRldKWEtrMTZEV1JBNzdlTVM1dkxkOWpOYlJDVUsyM3k1K3FsSFFZSnRadmNvTHFaNXdLbU5yajBBRDVwbTVxLzFtR2Vud2J4MjBCeHh4Z25jZFJvS2RueVE5R1d0Z1BXZEsyZkQ1VVFEUXE3MDZOaGJ4cTg2ZzA1a0JoOFpHRDdXempDcGxGVWgyT0ZCRFY2UEpRTTYya29xWGh1Y2RwVmpkdE9xaDdncXFFTFdxaFZXM3VabHIrMVhRRGJqci9SUUhaYWs4YmpLOVIzaFk1Y0RjSkVFb0RDVERKSXpWNWtjTWkzcXNYWXgwMEljRWFyTlNvZVN0TE5kTklPRkxzeDVIcHlqK1ZQWjB1djZEYTJuWUxEbE1kejI0UU9xVDZoVndEU2ZXeE10SnhYWHFaa0dRd0ZXMXJDWDhHR2RsS01zc1NzYWFiWnpqVVZoeERNVUNteCtJak9jaUozOXpjZk1Ca3c0cHlweHhBVmVXb0drMEEzcDMrZk14VWFmU2N4S2FWY3pQTklWODRXVG5xTlZEVVh2elZ4RFhoalVxZVUxbkhFaEFVMmxSbithWDBNRTJBcmV1cDFYZi9tR0JqdEFUMUZmSWR6UFcrdUNDeG55VnNDMjlQRlM5YklKTGM5SUlnWmVrY3FzY1JZejVxOG96M2N3K2VKQW80TFVjNkNOM2M1RW1hNmp1RThTYzZISytlOWE0Mkx1YXZKc0ptN0dlcXoreE1FaVFYMDZTSlhadXFySThXakFnRlV0TjFXRng4T3BnUmFob2I5NXZXeGlQZFA4NDRXU1pUNURlRjhtYWxmak42N01VNFRUVlUrOHZJUGRlNGw1N0U2UmMwZlZBVXJlUkIyc0FNOHcvODRoZWZVWWNYcW9tUUhnNGIzK21kNmczYmIzZnp1SVZSNHp3TUg2SW5xUy9WbmZTWnhrOUpsbXlTR2RNTlRVeVZmRC9VUFBPaFRYWEZSdjJtTUhxWHR1RmE4L21zeTFiNXYrdGEvMWY1MmpKQ0E1ZGdzWXRzbTVZRk44OHVoYThwaDN4dG9aR0kyTnJaK2RESFB2cU4zVU1EamxJSzlYRUNlb01FeUE4N1JLTTdBUGpKOVpreFBKQlVsV3FhbnFzSXJjTGlZYUFoWGZlVTlYK0hvb0QrUXRjbXJISEF6UkNWK2d0MVpWRS9hVG1aaHArOFNUdGsxa1RLaWMxUzgweXErdGN5WVgzSmZ2UGVlazRXTUpRNkc5TE9yWnVkUTh0eHROYnd4VThaVStNWXg2Nk1vMjFucWRaUHk2Tkc3MjdUWDJzYUEzZlF4ODhPcENaR0RKVmFCalVrdGVGQ0p5R010TGlFQXVOU294dnFlVW9aNjVmTnBLWldmMkVpNklaMWdqNk1ZekMwNkRKSGNhR2tObVVlRmVvNkYrR2Z5NUZNMElMVFNKVUgxRnBUUTZqZlQ5cDBqVFNwdVhsbUVFSHVhbnRacFZnL1lyUUJqM0V1Qi9JNFJvUkU2MzNOK2QvdVhYcGFqak5PVk9OMlFYTVlZZHM0NERkMVE0L3I1SjNsT0RXT0VZK0pTMmhNWGhCcW5qRlRqZldyaGx1MVpwcUp4N2dpcnVHYXlFSWFQUXd2bThvQWpXTHFUZUxyTXY3WXlJUVQzUlFtaWpISWdmelFnTU5FUjBxRXRucm5mSDFmNzlCamJKcittaU8wK29TNlZOaXJGdmFDeVQ3Zlh5bmV3Y1hGUzY2dHVtaUJNVExGMDV1U0RBam9ad24zZFpwUi9iT3lxK0FRaWhKVG1uYnJ4RWNtbEIxYXFHYU0vaUtJUkVTSWlIQVVNcHNxeFhpNFhtUFN4dWRaZmo3YnU5OC9VTVVydUFERnR1bHg0R2tDV09NZEc2V21nQS9MQkJMVWg2VENzcUdwS1ZhcUlSRHFYa1ZxQTNHb3RlU0U0b0dWRUU4YXlBTTYySjNLQVo0bWh3dllFOG9QRFRqNWxSZS80S3FmcWltUHFZUk5ZMm9ma3lqb3BndGcxaDZ3L1lRMnN6eDJVamphdERweDNPY1paUWozNFVYcitRalJhQnMrWmhnZkR5aTRjWi9MbVBwNmtPcEZYUmsrcS9XalZVUEE2c1NscWRTUm5HYXpOZ1hEWmdHbC9adHdvd0JPZmlwUW9JSFkxUjVsM2NXTTVFM2xHNm4xMFJXRE9PVjNKY3lCcE56MndCQ29OSkVOdy9yUWdHTjVibDBBd3pRZ1Z4bzh3YXgzOXFsQzRUSitpZmlzZldaTnVZZE11TmdyV21IMS9adGpoTk9uQ1hUTUhKOVBBR2VkT0JDWHB6Q3FOYWlDTWFUcWxLVDNKbUdDWGN0bnE3VTBvVW9yaWo5VzQwZ0RCSzB5b1FaMVV6NVdkcVFiQ3hveGdBTVZBbzFuZS8xTGhRMXNDbk05S0FxbG5zb1Y2V2VJcU9xSWdtM2FTcVZtejVBY1dvNHozTmtpTVdaOHo4OGR5aXNPczBaVWY3NXhmV3c4WmZCczVvTHNJV21OaGMyYlBnb3FoYy9MOTZLWWkvNDBtdVNKcGFxN0hLUUNoYmNKdDZ1Rm5kUGpQa3NUTVZNK1I1UElldjNHVWU3N3FlZy8xMVlyM3NuVk1rU0VjNHR6LytSRDNlSGhrUU90aFNWQmtOL2M2ZnJOblFhbVRLREV6VDdYczk5SjBJVDFsK0lPR2R6ZGZmdElvZUpaMy9Jd0pVUTBBWHMxM3VOVnIvU213cXF2OXBkcW53aHlKVE95eXlaOFRsUDBwd1d2TGRVMWpxK1hhU05qdGMrUzIwSWxabXVBM0c4ZHA1bE9iRTc2YWNhUXNLa21zcS9YbjFHQlU4Ym1kSk96c0hydHBoNW1UbjkvaytXZ1pNS3JzNThFTlZLVmNBclNvcEdkck5KTXhFeGVGdHgwVGtaSERnVGpabXpDM1RjTkVsajE5NG45VHUrV2FqNTJVQTU2M0tWOU83cHFFOWRlSEthazdLU0VYV2FvZHpUVlJQWXJIelZPNStCZ0hwR0NPKzAwd1VJWkFXcDlZMEJUUGtkMTZyb0NCQi8yV005VVA0ZmVVeGdaN2JMMmJKcGRPanZhQ1QyV3pnNDF6RkRkY0YzNXI1SVBTYVVRRzdiY21ERmJmdy9GSVpYSGNheUUwNEdBMHpseFNvaVZqSTZqdmo2ckJ2Y2xjSGdBYW5yYVJWeXZWOXdlRlgyUTNLd3BaSnorbUtaYXlJaG1OR1NNZHkwdldGMXNOWkNLYW1kVlhyWTZUaDNTMFdITFRMWC96UlRzbVRFbHcxZGZKUzh6RS9uN3g0dTQxZ3BtUnBMU3hxRUNaK3Z5U3dhaXYreVRUNTUxVnlOd29BdDVYSmc0em1QSUdMR0cyd0ZtWFNacFZKdDRQMk1WRW5Rd3p6aUFGWVF3WHZYRzA5RmxtREttc3lLZ3ppWFl5b1l4NDh4aE8wOFQrRUlpSXB5TGFSWTlyNFpVNGRoQWVCejlRdHN5Q3BPQ1JBaG5aU2JsWElkNXoxTEU4cDF2ZStBZmpzc0FEZ1NjSzUvK1JRUEJwVEMrbjlia1dlOVdIaGYyTklLdGdmbXF0OVkwZVRzYTgzWDdIcTk1c2RMb3VFUlRSKzkwVDFVL0xrVkRackFrU2hvdVRqOUNZS2FHdnRWUXFIN1JpVFFsOEtOdE5qNWtINWR2TkpjTktCQUdHVjBURW5vWlY0MTFzbEFDUmRXTXgzWnkxM0tmaW9wb3JYbFVxbktFZG0yN1MyTklRT3pHY1poZ0NKSXg5dy9WNHdCQTB1bjJtMlNWeHU3WW5QTGxteEhOckZLdE0wNzdIWmFIbXpXWG1jYWdOWDIvV3BHbnFSNUhwUG5KeHBaQnh4QVd4S1dtV24yWjFXZ2paYUF6N1QyR05PZFhJUURyWVZrbFpFTjFWTHJjamhaMGM0Y1hlNkR2TmpvV01XdTJHOTZzdk9lWGVra0huQ2JZRzJiYmgwNE9jTnJLS3EwVE9CeTZrQSs1aGVkdVdPMCs2N0VyMm1CcXdoeWhkNmoycFVsbHRXSFRKVlY0YThqWWhONVg5bzAwSmZCbzlKVDFkU1RoTHM2cWtIekZMelR1dmdreEt0aGZEazBqMEc5UThnbitWS3dnQXFTdGRuOVhZL2Z3NldneEZOWTY2dXFYTk9VQ0hrdEhOOGcxM1U0T2REZk1DTlV2OW9sa1QwUFlXZ3B5Y0xGeXpVenQ2ZkcxaWxJRTNmYWptWWE4cHlaWUhoYSthd1NNVkVKSFZQS2dFU1VicVlxM2p3Qk14aE1qSmVqM2NYTVNweFpIbzRSMU9HdkVUTGovOVBLbkhqMnhjUGlobW9IMWI2VTQzcWkrY2NpdVRDc2FDcXI5WDZNQzNUSm15ZXkwRUtmWmljK3kvV3djUzFnZndhNm9UemFlek5IQ2F1WENxZDJkYWJyQ2VzMUw4MGlPVWJ6cW1PbktBalFqbjArS2k4Y0xkVWpETEEwQzZkdHhZWnFnWVo5cFE4c05hbzJlWVdNb1VGMEVOUzYvSEpzdmh2bHVvT3BUMFZNZ2pBaDJhRkszSnNWOEIvVTRwSWVEcTJNWnFIRngvNFNZbXlaYzBEUkJGZEtIcG1aTTY4eGgwY1F5bys3QVpEQUtRcm1uK3AyWndoWjlNWFlYWjlCWTZlL3VORkZCcG5xY3E4eGJXYi94aE1Qb0hBMDE1RE9sZWc1cUlSdnF3b1BCV0lEUnB0SVUybFNXbGVwNmdSRVdicis3aityWGxBVC80TWJnTGREMmRsZFRtaVF5MTJuLzRzU1U0cUFYMHM1VG4vdVh4RXBHUW8zYnJsR002eWF1OGZrWUZVU1hlcTVVVThzVXpOYnpkcERsVnBVNndCaHFvbm5Dc2ZuWWhhS0RFaVFxQkxmNHlFaTE5b0pTdTh6VVZpUlNHRlpWRkpqQ1N2d29DVkJYQ3kwVVJTWFlhd28wU0N0SnBUaGVYeDFZSjBwR2prbURtbWZUY3VXcUJwdU1iZjR0R3p5Ynp6V0Z2MGNFMVdvRHdsK1lTSTRkOUJvbm9pMVNDZ2hFQ2NOOWwwMHRNMkVlMDdUeDJEVGtSdFh3WmpUc0d3R1BIMHVZMFR0TW5TZ1ZWT2JzSnpGbVpWUGtPRkJKWXdCbkdsVkxxNGxzY1JjMzByaWVzTktxWTZSQll5Q2dtTWt4c1EwNkJPRmV6eWFLdWZsMXBTS3dhSm5lQnBGQlZNVkpCTFd3ZktSbUpJMkV3SDVJcURDZm1lU2J2TlF2TTZIVmJ2Y0dLcjE2Unp3T3FYUkRxV1EzWkY3cUY3aHhEZUlDZ2hJN2wwNVFBQWdhQmhvYUdvQWhCVTBHd2dhR0REVFpueGx5LzRaeHYyZm42dzBCaGdSQ2xuYzNrR0pWTjhPMnZyUDRQeG1RQklRMklDMEFLZXkwQlFBU0dHamtKQmdTTUNUQmdEUXkxc2lWUnM0WmNwVUJaTUF3WUJJd0NSUUxtQXlZRFlnTVVnZ1NNVkFpU0VUQUFyQVJzQUY4Qjc2LzY1WHJKOXliRndEQ2xYK0xjZlVKc2JVR052YjV5SWg5SHhEM0Nhd2d1b0d4ejJ1L0JYYWZXd21EUlFHU0FraXE0dVhFRUtRQVZKWHFSbDFDaWNyNlRhTitXZEF0N1lxWUpoRGFDRDJtR1JFQnJCSUg5dTRmZUNaeEg2aTh4UVEzRTNleHV6VWZ2dFpEZmkyNzYwS29TSUc2NTJkSHVOdmxXRlI0VW50TUNLZU9IZnZjVC8rRG43dDVKendPaHRzYmErbmk4UytJeUllRkNJcTVtQVV4RFFmWGNCOENCUUdEL1R5RnU5Q3QzQ2hYQ2xsMW55VEI2RGZWbGU2RklKSldRd29YUk5vRU5nY3dCR2hVaTlsZmNDMGh1TEpEb0I2ajNPbEtvT0ZsNUV5UkVCTjh0ZHRkdk42VEV0a25sV3B0eFZBWVZrc1IrNWg2T0VmRitoWmJ4WFlqWFFZQ0xTRVI0TlEyUmV4N2NNOXRBenpqamdPN3U3OTJGNTY5K01qdGdURWhsdHk4VFJuQ05XOE9tQ2oyRnlqK2o3Sng0MVlxbWhKa0JqWHBYRk84cW1uczdwYWFoa01RSmxRbFY4YkF2ZnBUWm9aSjBoMFI0TWxQM2dIZ0FCaTI1aGUvdEx1MTlXRWlLWlJLcWtOZFpRdHRoclpkWWlRS0JBYU1nWUlCdTVQalhXVnpBWStkcHlnb0dBY0lkM0xJd05Bd1BKUkJ4aDFPbzdyN3ZWQjVsd2VjRDdRL0p3R1UvNDc3ZVo1azBLeUxPNkFYeDNPTC9KQ3JGRVpiNE50dUdGdnREb054STlxRmtBYms3c3IyYm02S0hNT0lOS3oyRTJUQ0NNZXdSSndYTVBhN0N1VHVsaDVPQnRaSEdqQmxZSlU3VDBZUXNWNmZoQXFQVm9SeFVzcmVZZ3c3T3RwbkZ0Umh3dldCa0ZvNFZoMWtLenhTd2V6QnFYVTZzSnFtRlNiU0dHTGRic1dCZ2tSSUpZbWNXT2o4a3ljLytXTnlSendPQVBSZWZQcG45elQ5N2d4MHZwMm02TGJiUWU1UXlZaWNSekRGd1NRQWhneHlHcmgvZHhCUzk5V0hDMEt4RWFGcTRtMHZaMVVlM0liSnJYQkRsd2VFUDcyYWN3ajd4Tm5BQnBYQlFsV1RnZzI3QkpLTE1JQmQyNFkyeG01bE5ockdhSHN4NkJ5NXp0MzNjMlM1QmtpUTVabGJUcXNMUU9raUp3bmVIMWt3a0lNb2tRS3h2N2tvQ0t4K3RGS01WQUdLR0lZWVlBYUl3YXdBQW5JSWlJdzkxYUlnM21PSmdaYmN6dTVvRStRZ3RYbi9rVTNzTWkzUnEvV2hsWjZuTEtTYWV2SUw4ckszZnF1Rld5bW9VU3FCTmcyRkZQVHlBVHJWeTN5VWJCcEJCSldrMG03UGYzbmFZMjhMT0Vibk56b0duMzFwWmVOYmh0cDBVcFZncnRQR3NmazVkTnNwMm9sQ2tpUkltSkZvUUpIZEdXbkFJRzRqUnh1YUZBUWFDbHp3NlhYZ21Fb0kxdFJTVHlEaFlxN2NoMkIrQW9lTUFrbnFhRndYcmhTejYySXZLTVAyN210eUVIS2JmK1ZEYUpPRHpCRFFHcm5Pb1BQY0FpRWJRbWNaQnZrUVE3a0pvNGNRWXk5RWsyZnVlWTJMbysyTkpFa1pySUNrUlZBa0lDVzI3VVg1ays2RGJiYWh1N0ZlUlJNajF3YmF1RURMRUl5eCtTT3lGblMrQkJpRzFnUm81NTA1QlZNQ2NCdUdqNEY1Q0dJRnBRQ1ZBQ3JSQU9kZ1VXRG56YXUxSGxNQmlvOTh2SmNzYmxqKzc2YmV2RGxoQTBHbDBkTUVxd2o5R1pQS21wQUdjcm5oNG0rUzMzSzNTOExJTGxSQ2ZkVWtRTXc0Y1h6cDBwbTU5S2s3Q2h3QWF4M0diMTQ4dHZET0Y5WjNIeDVrR1haNlBkeGNYMGRDakZRUkZCSGFxY0x4ZEFQZGpxRGRVbWkxRnNGMEhJWVhnRllMckFCbGdFQ1lzbGEzc1FtK3ZkQ1ZQYmdjU0NNSlFSVjNNc3NTaUwrYmF3Tmpjb2dNWVV6dTdySTVqQXlRNTBOb01ZRHVnOHdRV1o1aG1QVUFIb0tRQVpSRFlDQ1VnY2s0dWxMRFp6N3REcUZEZ3BTQkpGSGdoTkJPRkRoaEtCYW9oS0FVSVVrSnFtMHZXRTRBVHRnQjF4U0RVN2J6bWtId2pDUVgvRTBPdGw1UUtSQVVqQUM1Qm5LallRVElhQTlaUnVqMWdMMXRZR2ZEWUdzMXc4N21FSU9zall5V1FLeVFxQTRvNmNLZ0RhSVdWTklDczBhYUNGSmxYNy9ZTnhxRWk1NGtHQlc3R05VL013RTR0SXdXVDBkMEJ5VGN5T0J1TnFodFNaUDloRjAwVXJlamhscGhxUnNYUEVhQTVXUEhmK2xQL0pXL2szM21MLzBZQU9DeHg1KzRJOERaQWZEMHlVNXliVytwdTNSMWErOTBDNEEyT2NSb0RET0RMTXN3Nk8rZ3YvQU1MdHl2a016MWthc1dSQy9EeUJLR0E0YlJqTVNjaEhKMFlLaXlYOTVyZ3BsejJGQW5OelpNRXRPSG9wMUMySnZJS3FZWUY3OVRJdUJVa0hZSTdRNUJwUm9KYXlnMllDVm9td1FKSjdiN1Zvd0ZEWEl3Mi9CUVV4c2c1VTRzZ2NuWThBbmloREVVaUFTc0NFb3h4T1V6UmZ1LzVNVjZjM3ZTVE9XdWJwc3RBWkFHb04ySjFNV0ZxY1ErVHR4TlY0dEFwWVFPTVF4cEdONERjd294REpFV1NGTGttY0pnME1IdVZvNk50UlZzckE2eHNVSFk2ODlCNUJTVU9vVTA3MENuc0dFamdGVDVqSzloWldJbytrR2xlaWloUmw4SHd1cGx2YWRlUHd0cmNxTWFBdUZxUWxTQ2F0a1hlSm9vNlBCbjViSmc2M0ZVbXNqeS9QelBmT1l2L1pqY2FZK2pBWHdKd01hRitmWXJtYUc1elY1dlhvd0NpYjFQU3BwaW1DVGdyVWRndGdlNDhNQWVqczN0UXVrOUFCbU02a05UaHB4ZmM3bXFQWWlWR1I5aGlDaDNJVXFSOUJ0SFBWcVAwd1l6QURJd29pMWd5SUNVZ1NBQlVRb1dZeTkwSWNBa0lMR1gvekFkSXVOQndkQXhKMkRwMkJBQ1FPSXZITWQyMlJ5Q2JjSVBBWlJsMWNRUVFLWUlLbkovc2JpUXdjL2ZFQ3VJRUFpSkhSWmdIMUVJQkJyTUJJRkdSZWlUZldoa2N5Snl0RHhCUWVrbFMwT1R0cmtnRGNBdGpYWWJPTEdRNHFIVGJXU1BKdGdkYW16dkNsYld0ckM2c29lOXJXc1FmUmJFSjVFcTVYU2l5YVpKeEJCaEtMZVdQZE1hNHFydnBzNVkxWVRobTdvREd2ZmxGRG1sKzU0dnVqcW1zc0xJN2RQalRLcmJoTXV6L09BYUVlSFk0c0xXeG03dmxWbGU1M2FCQXdBdkFmZ0NRMDZlWDJoZnlZRzNETE9NaUZwT2VvMUE3UzU2N1RsY1hWL0IwdlZ0cEE5c0FwMFdqSm5IdkI0ZzRSNUV0WU1McGV6eEx0dENzaURLbGVEdVpxdmJ6SVBpb1dSQ0VwaWMxTkFBc0hNV01FSWdGUjVlaHZLc25iMkYyc3FSbzVkelgxTUpZbUsvWHRheVdZNlJjMmVrRkRTbklteWtBanprNmpSVXRMUWI2TUxMRm5zN25aY3BhajZPcG1WeDYrUmRRVXRnd0t5RC9FaEJKQUdCclpRVE13WWQreDQ3WFVaclNlSFVQUW82VitqdjV0aTRlUTBycjY1Z2UzY0pqSFBRNlR6eXhJYTdUQXFrY3VRYVNQWVllZ0RrQmhDZFE0c2djem5yYUR0U1dRZzFBZW1nM1ExTmpDNXJMVUE1d09aT2dIMk1wUVpJQkJ5RWJPUmFqZ292TmFML0hIUS9OelFNMTNNYkJXMDdvaGxZUG43OEN6LzlqLy9aeXBPZi9NVFVpMTc5eEUvOHhMNlJjdStIZmh1dWZMcG81Y2xkeHYzaGxDUlBXcTFFRXk4bVN0bVluQWhKb3BCMFU3U0YwUnNJdWd1Q2J0ZWdwWElvVVJDaklFcWhQbTQydnIrTVFNVEZoVnhRa29IeXZuK2FBajdzTHN4YUpWS0svSkVtTEp1VjhySGh1MkQzSHNJMVJUVDZ4Y0hlR29pbHJNc3ZncEJVVnBQNHhrMHYvazNzNkcvM1BTWXIvY1JrMlRaN0hPemZtUkxyTVZtQk9ZRVFReE1EckVDVWdKWDlVZ21qMVZWWVhKN0gyUWNXMFQzWngxNStDNE5laGhTTFNMaURoQWlLMjBpNGczYXJoU1FoYU1xUlNZNU1UUEhadzRWUUJjMHNaV3VRTnJxaUJHcU1jWnlBY2FMc05zVFc0bnZoVEVXL1dVWmtTQVNsS09Gb0wySzQ4RGRzdC9ISDJJZk01ZkZucEsyT1BITHgzajgrLzl6bm5xbGY2M2ZLNHdEQTV3SDhDb0J2WGlSekpXdTNsbllHdzNtVkpOQnM0MTBGQTdWd0FvTmVnbGV2ZHRCcFBZK1R4MWNnT0FtREU0QnNqWkRyRXp1RkQ3QUI3cUNObmswSjU5Z0cxNFltVmZZMGNuRTNyZ09MUng1ZmVXNlM2bllDVTNvL0FsdkdnV3dCbDBnNUQyajdDenl0UzhRZ1R0eWRnc0UrWjJzTllXZ1A1eDdvNE5TRmVheGN6M0h0MWF2WVc1dEhHOHVBbVlObWhsQUc2UWdXT2d6dUU4ek9FTmxBUThNVU54VjdFWmE1V0VXRUVMWDVtOG9ZZDZoMVlJcENjMzJhdGs1M2o5dUo2c1BpOERGY080Y0Z0cGhCaXJHNGRHeGpNNk5mQzgvYk9HTGd0bHB1YWsrNkNlRG5BRnhpU0g2QzlkUHpyWFNYaVpBcWhaWkswRlZ0bURRQnp5Mmp0M3NPTjY4ZFE3WUhDUFdoRlkxT2hjcTBqY2F6TjJGV2FjZURnRWZjaUc0NHFodFEyN1V2TzFGWWZvWHZnNWtEa3FBR0lIOG41UEk5c2lLd3FtMTlKZ1pSQWtKaVBReTEzVmNMekcwa3FndkZIZnM5Ym9OVUcrQU9ZSnVESUVoZ2tFS29CYUV1U0IwRFo0dm9Tb0lITGd6eC9xL3Y0K0d2MlFJdHZJeGNyNEJsQjBSRGtGSlFhUnNMQzhkd2R2azRGanFwODByc0Vtd0tRdEp3UEVDQzNUMWxSMFhCbkkxMG1rcWxtMkdzQ09GWXNVZ3ZKaGw4ajBadmdEN0NZRkk0ZnZ6NHAzLzZaLy9SOVZtdmlNUHlPQUxnZVFBL0ErRFBNbVJwV2NtTE40WGZaVVNJRE1BbUJaSStSQW5hMHNHdHRYTTR2clNCNDJkN29OYU83ZXZDT0EyMjVydjZ0T1d3VGYvZTcwUm8wMnR3cmQyMnZneDM1RFhJbEY2RlNyNmRnczZHa1lXMmhWNXRXWlMxQ1R0WnNDamxWbFlxRUxkc3VLZ3NiVTJ3ZDFHUnNEbUozYVhDTGg5alFCaU1Mc1FrWU5xQWtnekkybWloalh2dTBWZyt0NDVYWDdpQm15KzMwTUlpRWprR28rZkF4T2kwV3VpY1lLeHQ3Mko5WncvYUdKQ3cwMzh1VzNaQ2FqdmNSbGlFZHk2YjhRMitKYU5tZ3Y2MTRQZ1V4MjNjamJDQmtmVTVKMU1sLzJGWEtGWnBLc2ZudTMvOXlVOStZdWFMZzNGNFpnRDhHb0MvQVdBdGdkbGRWSFFGc0J2Y0FMSk5rcXlCRmlQbGMzanh4djNZM0p1RDBZT3hMdmgydzY3RG1BQWRlWTR4ZW1aaGtqcXliOVNKUUJUbk5yZ0xWcHBqYTBRQ01RR2NBcFFDbElBNEJiRnRWaVZLd2R4eG5xTU40UmFFV2pEVWN0OUxJZFFHYzhlQ2krd1hxdzZBbHZNOFBRaXQyWVpjV29KZ0dZSUZKTlRGUXZzNDN2TE9GdDc2L2hhb3RZbFViNkZ0Qm1Cam1UK1Zwamh4ZkFtbmw1Y3cxN2JrRHJ0NmtEYk40aDZWclFPdU9kTTFxTm1XR3gza1NzWlVKS1lFTXRiVGpEczl4YkJoTGY5aG4zU3l3c1hUWjE3NDFyYy85T2xadzdUYkJrN0RrMmNBL2kyQUh3ZHdhWkgwNVFYR2E3bk9BYzdSMGdrNk9vR2hCRmxyQWNQK3ZYamw1VVVNOXFqQ2lqU3RnWDg5ZGR0R3o0UUx1OWlGWG1RbWZoRmJ4WlRpaTZxaEhydnYrVC9yb0ttRWJhVEEzQUp6QWtKcXZ5Z0ZvUVdpRGhSM0hKZ1NDdzdWQW5tUWtRV2NjQUtoeEFISmhtdmdGa2gxa0tTQ0pER0FPb0U4T1lGaE8wSFcyYk5DK3IxN2tPZzVuRDNMZU04SFRtSHh6QkRBQ2xyWVFwNzNJZFNDVWltV0Z4ZHgvdVFKTEMvT0J3VEdtTEhtbXRBN2d0cU9zVzJzQmZVLzI4VTVYY09JVUpNS2RtUVFzODMxbGs4dS8vTGEydHBnUDVkRWNnY3Vzd3pBcndQNGN3Qis5TGdTNUVKemZUTThvZkl1RkZySTBod0RSVWlTWTlpOXNZaVZkQVd0QnpOME9wM0dXWjQzMmlqMEVrMTNuOFp0QmVQMzFJU3h0bC81SjhhQW1KMTNEdUp3dHFHWjhXM3Zoa0Nrb0xqdFdLM1V2VDdacmdxeENicGJUR2d2WUhhTnRjVzlrbDNqTEVEbVBHQVVzblFUbVZxREZnTHBPWFJJZ2RVQXBCVklFOXJ6QnAxM3RISHRodURxNVI1NG1HQmdDQjFsYzV6NVRodnQweWZSYWJWd1kzMERwcWR0eDd4dTJCcFgyZW9XZ0NkYzUyR2tLTEJTME1zcyt4eVZETWR4S3JtTnl5VlBIVi9hZWVlOXAvL0d2Y2NXc3YzZFN3L3BJbTNndmhuQUF3QitKQmQ2N0piR28vMU01cGtJQm40MWlNRGtRNnh2dllDMzNmOUZYTGh3RnAxV0h5b2R3S0FOSXgxSXNnV2hYU2k5V0tHcFI2L2h5VEs4RTBNMnFjL3NTMW1zSkhLZXBvSDJCSTJjbE9ZVkllWGlXVk5VM2t0UkRQSjNYN2FobUVEWllKNFpSQ2xFdW1CVzhOTWt4TXJtS0s3NVU5QXE2SGtCdTVvT0ZWM2lWYzAwY2hNTnlsMnNDUVFLaGt5UmI4SDEvWEZ4YUFSc1hHR1hXMWhkWjd6MmdzWmdMVUZtVGdBcUI5R3VyWitaQk92YlExeStkUk9iZSt2bzl3MnlZWTVNYXhpdGtlc2NKcy90MXVuY0Zxc3puY05vQTYxelpIbGVDcThiVTNTTG1DQmZRclYvdUhZdXFBQ2FQUStxaUJJVTI5eU9pYUE0Z1VwYnVQamdJLy9sRDMvc0E5K2U3Vzd2elJxbTNTbVBFK1k4THdINHlZVGtoMDhubEsrQTN0SEw5THhpZHVlSWtMUTdPRDczQUY1K1pnczl1WUdISDlMb21yWXI5RzFBR3dKaEdlTGFWcG9qV2JudFVBeTFHZzRGNG5jMHRsWXdwamRxQkRodXdqV2dsYXNKTE1NUWdaRVVIc1RBMW1DSVcyRHFRTVRlMlVrbEFDbG83ZDR6SjJDMEFiYWRDSGJrd0pJR0pTVlFHOVYyZFI5WHlvTzRRWW9tSWlVSHVia2tPOU5ERUp3NjFVRnJ2b3NYdnJ5Q3djb3RKSklBa2tCUkFxME1sbzkza0xSTzQ3VVZoUld6VVM3UmhXNCtlNEdlR2dMaHhmR0w1bXMxdmVENzdIUERtcWNwaVFFcWV2SzY3YTdjZC9ya244bDJ0M3Y3dldRT0RUZ2VwVFhQSXdCZUFQQVhHZkpEcHhQQ1RjUHZHQnJNTzZFZWlCRjBPa3RJRmo2QWwxNzRaWWk2aWtmdUErWVRBbE1HazNVQVNnQ1YzekdFVjhNbmYvSDRMbXgyZDZ4SjREQ296b2FNMW5FTUJRTnk3RHhDVVhoTkxKMkxGa2lsWU5WeVlFckJuQURTdGt3WldhQVFLVGVBUmlCV2dMUXRSSWhCekhZb2dseEIyZFBuYmx3aFdGRHR1aGlTa1RGblZJQm11NjFGM0RnRjkyRjBIM056Z2tmZnU0VG52blFWdldzTWxoUElxUTFSZ0VFZjgzTXRYRHg5RHFsU3VIejlKbkxXeUp0R3lpdTdieXhjUW4yMVdja2VhcXJUdUZEWDhnSGx2QlN6YmF1NmVPYlVGMy9uKzkveHVkNnRtL0tHQVdjS1ZmMGlnSjlreVBCTWkzQnRvTitST2ZBb1ltUmlvQmNYY0NyOU9seDk2VGZSYWIySWkrZUJPVHB1TDdaa0QwYjRqci9SSW5FazN3VWdaZmd5NFNUNURtS2Y2NHpVblZpS1dSNExGamMzNDR0MXF1TytsNEpVQ3VFT0lBcktWZnVCamczVmlLeEhBYmxjaUsxWFFpZm9wR0NBck9meGZWaW0wbTVlU2pRUk0waFJVUXFvaExnRldXRWNJTHRnVjJBbDFZTWhnN2tPOE83M25zZHpXTVhhbFcwd0tSaFJ0cDRFWUtrRHFETW53QVM4ZW4wRjJtam9YTmRleXdRY3RhbVJRYlBwNjlXMXJxczdnM3pVVUZROGJTN0pTdDc5MEwxL3JYZnJabmFRYStYUWdUUEc4d0RBRlFCL25TSG1YSXZseGxEZW1Rdk5pd0RDR2pudllaNVBZRm5laTVjdlpRQmR4NzNuY3JRVEErVWFMd0ZBYTExSnhtZWxtNzFJUkozK0xUMk85eTYreGNZVUU0Lys5WnJ5bUxMYjF4UUxiT3ZoanYyM25XZUhzSzI5UUFGSzJRdFJXcmFnU1NuRVVjM2dGcUFVZ0FURUhSY3dzbXNZZFlBaGdpS3JwMENrWE51TEc4TWdCaWxsbVNQWFd4UXVtdzFYaklDcnpDWENtb3JhZ1NDRG9RNDRUMEZxSG9vU3dPUWdNTktVOFk3M3plT3AxalZjZmZFbTJuSWFvQTRFT1lSNzZLUUp6cDljQmdGNCtacUJhSU9oR09UR0lGelg0Wm0wY2k2bnF2aFoxR1JHa3Y1UmdmandQSFB3VXdwYWs4NmNXTjdNY3Z6eVFlUDgxOFBqMU1IemR4U2hkYTdOc3BMaFhRTXQ4NG9KQ2htMDZrSE5MV0ZoOS8xNDVlV25RT2tydUhBeVFadTY0TlRlcVR6cmREZ2VobXAxbHhJMDFTcTBCRGxCMDZvK0xrSzhwdUtyRWQ4UjBISnRMd3BDcVcyaUpBVlNiWnVUU0FKQ0MyQmIxV2RxT1pxNVhYSkxRakRpcGtPSkxOMU1iVWNFK1B1cWE3Y3ArSEFWZUVGZi9LejJmaFhEZjU0RWNQOVduRG1hdlFWd3l4WXNLUVVyUU9zRTBCcWRibzUzZmUzOTZIUnY0dkpUTzFCQ0FBdjgrc3h1cTRXTDUwNURNZUhTNWF2WTJNNGhySkJEZ3duUWtCRVJ3bG5yTkJWUFUyd0lMRnVFL1hpakRYTVpyQmlKU25IeDNMbC9mZXZXelJkdzRjUUIwK0k3U1AyTzZUSmxBTzhCOEVNRzlONGJHZDQ5eUUwbklZS29JVEpSVUthTHZMZUtnVHlMQy9ldTRQNXpoTTVjM3RnQjRDL3Vaa2ttYWZ6OTBWeEZpbmtaQ1pSVWJKMkZpbHR5K0xnd0xDTXlZL3ZXaUFqYU4xKzZHb3RRNmxwbVVqdVl4dXlBWStzdXBPWnNUWVk3dGxHejBHWHhWREpneUxmdHRGdzNOTG1lTlM3VFpKZnpHS2VoWU4rcmU2NVNTOHBKZ1l4YlcySkZUc1IwWFVTVndjWjJET2cyaUhJTExwTkQ1NHlYbnIySmw1NitDVEl0Q0hmYzhCMUJqRWFlNTdoNWF4MHZ2SFlWNjV0YjJPc05rSmtCc2l5MzgxVzVSbTQwWURSeUhhcmV5TWpHdlhMTkNJME1yWlhxTlFvS3JoMklDYVFVUUFyblR5NXZmZFBYdk9lYjNuSjY2ZGYzVS9SODNUek9tTEROQVBnS2dML0xrSStmVG9sWFRmcE9aS3FUTTluNUhOVkhGK2ZRM1o3SDJzdFBvc3ZQNDlTWkRycmRibU43eTBHYkErcWpzOVh3Q2tYQ0gyNGxxNFBPMDlVallVWFFFVzM3eVd4U1QxQzJZT21LbVhBNkFVeWVpbTY3RGdGYlhHUk9rUnM3RVVwQ01HUUpBUTVvYVRHcHZXVFk5ckM1UVFzNzkwTXVWQXZETXdubGRpeHdxbnJmVW93TGtMUkJrdG91UE5KT3dpdTNMRitpWUpDQnFJVWtieVBsSEkrKzR5UXkzc1dscDN0SVRSZEdENUdTRlNaSmxNTFpFOHRnQXA0eEdsbWVRdzlRRXdpUlNxdFNxUTh4SnFlaGhyeUdxdC8zL1dod25mcjMzWFB1Vjdxa3YzdzcxL2JySGFxRlJkTGZBUEJYRThqM25XcWJiRlhoYXlTblRtcmFZQUp5MlFFV2dEeC9QNTU5NlF6MDdyTTRjL0VZMUZ3ZjFOa0I4eEJLS3lUWk1zZ1lTTElKSWJFU1RBUW9vNUJJQXBYYkRtMnR6TmljcUtvcGJQdVhpanVhZ1F0dEhGbmcydnpMRlJIbDNiOFErQ01xNmk1RUJQQ2M5U2pLdDhFa0lMS3oxRlpuYmg1QUFzT3BiWXR4N1RHYVVtaGpxVm1sa2pKL3BnVEVGaUFHc0gxcnBJcnVBaHVhSmE1L3pOV0ZZQXJoTmM5Y0ZmTkROVzlqOTg3WWVNY1lLU2VqS0FYUWduSzljUFlZemNHSVlOaEdVVnQ2NkIzM2dQZzVYSHZxZVpCZWhKRUYrN25aQU9rZWxrL000V0c1Z0R4TGNYTjRFNGtpRExNK21LMStuQUJnQVl5b1FoWnNuREk0bzFyVWhPc1lkOUlxeUptUXVQT3JDRGpXbmV2ZGUrTGszNzczMVBMZ29ON21kUVBPR00rVEFYZ0t3RjlMWUY0OGw4cTNieEs5ZTMySSt3VWdKaHMydGRJVVNzN2dsV3Q3Mk1CTlBIai9PbzRaUW9zWFlTakJNTmtGa1VFclgzQjFFamZ1U3daRUdsQURON0hJRFd5WXoyOUtHYXRpd3h5Vm91VWdVOG1CcUJTaDhaM3BoWGV5UDNCZHl5b0ZLd1dEcnMwN1dBRm91WiszQUdvNXVubk9YblN1SjgyM3hEQlM1eHlzU2cyN0lSN2l4QklFVHVLSnFHMjlqOU90Zy9Oa3hLNlJreGhLcFc2cTBzQ1lySlRYY3V3VnUvbmhhcXVNT0tJckNJdWNpbzZJUDVZS1hMVHkyekJTY1lxSDMvRjJLRTd3NmxOWGdlR2dYQkdvVXFRSmNQN1VDU2h1UXk0TmNYMWx4WFdNNktLR0UrWXBVL3ZSUXRDRXc0QkVVSzVtUXd3d0tUeHkzN2t2UGJRODkxOXY5NXArb3p4T0dMYTlCdUFmUStUeU1TWGZxOXFjcjJmNkFTTklsR0lyWFpUT28zM3NyZGpkVFBIeXBSd1BuVEZZV21Sd1I0UFVvR0NjZkRoajcxazVEQm1JeW0zMUdGeDJIQU9Wdi90YVI5a1FhSXI1RWs5TEV3VmR5MzVPM2VWQVdueTVUb0VwQmFobEwyWnFXMkJRMTlITnlpWHpQa3hyMlFvK1dWYk1BNGZRdHVBZ0JRTkNRcVdhbS9XSWlmTXFMb3lFcmZ2WVBNbFd5KzN6dVBJRnUwRTJKMjFJb3FwcjFQMzBLc29OQmNWeFlqOGZRODQ3VVdVdmp6MEk0dGROMkRLcEdLaFdCdys5OCswWW9vM3JUMTBHOXpNWVdBOHJCQ2dsT0xtOGdQZSs3UkVNc3d6WFYxY2M5VzJLOCtIbG9ab0FVMitmUVJFV2MxRDRCTWdwQ0RFcG5EbCtiT2N0OTV6OTJZVk9lL04yTDl3RFRZQWUxR3FUbzZFTkFid000SVVFaGhjVDVwN0JpZHhJeTljOGpFclI1U1ZJL3hqV2R3a202U1B0N2lMaDNONW4yYWxYZ29zREw3N3AwalVlRnNPZk5GcTNhV0xGZkQ4VHMzRWdLWVUxS05nSGlxS0drb0pVQjZ6bXdNa2NGTThCcWdPUkRsaDF3RHdIVW5OZ21vUFFITUJ0Ry9yd3ZPdGdib080NDVveld4Qkt3SlE2ZXRrMmV4SzFDZzBGdU1aT1VMc0VDN2ZjREk2ZEJDV1ZGSk9rUGhRdGlBUFA2bm4zR1hpV3NqVlN1U2xUdGlHZit6dWduSGFiKzNKRlY5c0NaTUZOckhEODFETDI4aHpaZGc4eTFHNUtsVzJ3eUFZcEs4d3ZMdURXK2diNmc4enEwSWxVbWorYldqajlzZWRRQXFwZ083a0FsTzhTVUswVTczM28vaSsvNjhMWlA2K1lOMjRuVEh0RFBNNWpqejh4am0zTEFIeUJpVzRDOHVLNU52ZFhodWFEQTQxalNvQkVBNklXb0ZzZEdOUEZTOWZhMkIzZXdNVlRxNWhiekpDbGUyQzBBQXp0UlZVVStUcmdpc2RvbXRXcFZxbTVhTStRb3ZwY29UNkpLbFYyUSt4R2xsc1E2b0JVRjRRNUNMZGQ2NytsbUlrVFN6T3J0c3R0RWhlbHAvYUNZd1pKQzJBRkkvWkNaZVppL29USVRucGFmVFYyNzhVT3RCR3JBc0JDQ2hWVnhvQktGeHJWZDZvS21sZVBoUTMzSENIamJoWitzaFRNbFF2YWowbURiTEdXRktPamNqenlqb2Z4MUY2T3daVlZESHE1VmI5MlFVS2FwRGh6L0JqZStmQkQrSTJubjdVRlV2RTZER1prV1NFSDVKQmZwTVZNUlEwdFBJY1dvSllCUGJPNHVQdndoWFAvckpVa1Z3L2pPbjVkUGM0TW5rY0FiQU40bmlDckM0cU9NVkV5MUdvNUVVVmFaY2lVZ2VGNUpQa1NCbHVNdlowZWtHcElta0lwWmNYL2tJR1ZjUmRkV3NqU2pySmk1WitlZXVaS1R4TlY2R3BQNzlxTHZteW1WS29ENWphWU9pRHVRcWs1NjNtNERTdW8xclVnNFZiaFZTeW9PaUJPb0tnRlRteGlyOFVGS1pUYXZJVXRDOGZVc2wzT2xMaGtuOTJNamdLcmx0TVVJQmNPaGtsWUlKTURzbDdCaFV6a1BBakJGd2JaZVpqUUd5VkY3a1RPZzFsTkEvdisyQlZ1aVh6TGovVkVwT3lrSzBpaDFVcWcyb3hicTJ1UTNzQTFvSmJqekF6QzBzSUNUSzZ4c2IyTHdiQVBKZ3RDSXE2SWJoVG5CZFgrTXcra1lrQ05HTVJXcm11KzI4bmYvZEQ5VDcvajNLay9yNWhYYjlmYnZLRTV6b1FPQXdEWUF2RHZBVmxmVlBqOWFERnZEODFGR0oyMDJEcHZWbk5JK0FMMitnb3ZYN3FKWXljMmNlWWV3dUppSHdsMlFFNEtTc1RPMWx2S0dMWGlaa2diaHh2V1RDMnU1a0I5cHF6ck1Qa1JnTGFiaWJGNWpWRGlLdjR0c0dvaHkrM2NCMU1LNHRUVlZSTGJnMGRXYUJBdTlyZmV4VjU0NGtJZ0k1WU1nTEYwdEplbzhtRVdzZTFLRUQ5b1QrWHdseStJMmlkMjNxTSs2VklwN3RiSDFPMWdERHRnU1pub0ZRci83THVRL1pZRjN4OUhBdEVNZ2NiNWUwOWc4OVpwdkxiVkF3MU0wVGZuTzlRVUt6eDA0UjVrd3d4ZmVxR0hiTGlIbEFtNVVLRXRYdC9YMDFSYUNPZVoyTlY1N3psNVl1UERqejd3VXduelN6aWtYY3FNTjlnbUlMNEg0Tk1BZm5wUjVmL29UTmQ4ZGtHbDF6aExrT1pES09wQks0VzhkUitBUjlHN2RoSlhuMCt3c2NMSU03Z1IzZ3kydjFjWFF1bGlWeVE0ZFp0eUMxZnhINUV0MmpHNUx4ZXFzVlZEa2FJcW45aUd6S1R0YUZwTDFkcjh3ekptaGhqYUVCS1ZRcVV0c0xKck5ZanRYUnRPY2NaT1l0cnd5eXJRcEZBcWNUbUVuY2NoMTJZRFZ3ZGlsU0JSS1pLMGhhcWtUeWl0VmY4YkZXeWI5V1NKKzVPREwxWDVFczhTcXRSNU0rZUZsQzNpQ3JFVGVDY0lNd3g3d1E3YjRTQ1VRaVV0Q0JrODh2YUhzWER1UkNIeDVNRmp2YmZCWExlRFIrKy9nQWZQbi9QMHBwc3FRdEZ3Sy80N05Eb2k3U2M3ZlQ0clJKanZkdkszWHp6L1h4TG1mK3ZTQWR5MW9kbytRamNEWUJYQVZ4aTQyV1YwbUNYdEN5MW9teG03RytZY29NNGkyelBZWHU5RDlBQnBSNE1TUXA0bzJFWVdnV0ZDbmpBMEU0UVRKRWlSVU9KMHE3bVFleXJHbkpYWUw3dDR4MUhHQ1l4cWc5STVtS1FMdzIySTZrQVMreWZVSEtEbUlOd0ZrVXY2VmFmb0dBQ0h0UnpiMHA5ekc3cm9UN1BpR3NidnRCRlY3RzJ4RHMrQ2kvM0ZqVENzY2lHY01FZ1NrQ2lRS1BpNUhmalFqSlRUNG5VS09aeDZiVjZBRSt2cEtMRjVGcVVRMVhLTW4vdVpFMVNFQzRjODQxSnVuQ0JIVnpQSTdSWlNsQ0pOMnVndUxPRDZ0WnRBYndBeGllMjZBSnkwcjZYTk8rMFdicTV2b0Q4Y1Fva3VOTUFadHFCYmpncDRHUzB1T2lKQWpEUzF1YUJLVWx3NGYrLzFqNzcxd1I5TW1GOGNkKzNkdGNEeEgyQU1nQVRBTG9CTEFGNXNNYWpEYUFzaDZXdXpxSml0eUtCaXBFa2JNa3l3czY3UTMyckRHRWE3TFVpWXdHaUJwQTJGRmxLa2RzVUk5MERKamlObGxEL3VSWTVnSy9QS3hmM1drOWgrTXorL256cm1xbFhTMFBCVXRBM1RtRnRRcXUwdU5Ec3k0RlZxNE1BRGR2bVpTa3BOTUFtMXdSeHJ4NGtiSzNDdE56NUVxbmlVMG5NV2Yzb0dNUEEyckxqQ3BOVkRIdDhVNndFNmRpaVFKbmNzYy9EdUlJeTV4U1gwaHdhYk4xWnR1NDhYbUlNSG5XQytrd0ppY0gxMURWcm5GVkI0a2NlaUxCRFc1MWdoU1N3eG9saGhydHZPM3Zmb1cvN3V4ZU1MdjRCdzNjVnQ1amRIQ2pnemVKOGN3RFVBWDFHRXRUbW11VlFSWjhha2hqa1prSENPT2Fqa0pKaE9Rdkl1OWpZSXc3NEJ0M0lnelpFQVNBUklSYUJJQXl5dXkxalorMlFoV3Vqb1ZFckFzSGtKYzJxVGZYWmlGOVN4N2ZPcUJWREhWZng5d3Q4QmM5ZjlhVDJIY1ZKT29MUUFGckVOZHl4YjVaSnlLRGQyU1VWQ1R6NWNZaCsrK1l1ZUM4b1lRZHQ4aFdQbnN0bVQvSWkxbTRRVUdlWGxPZWdrSUNLUVNzUHFTVTFpMXE4d3FBdEpsdXdqRldRRENtODB0N2lNbTlldVF2WjIzSDQ1RlBtVGZVYURoVTRMdS8wK05yYTNyVDZCeTZXS2dyWC9lQzUvVSs2ekpZbDl2NTEyaXZlLzVhSFBQdmJRdlgrV0NUY08wOXNjU2VETXlyb0JlS0ZGU0JjVEprT0dEU1FWYXJWeXBOQXVLVmZjd3Q1T2lwMWRBMjRKS05GSWt6NFU5MnhhS20xb3MrU3VHVk9lRVBaZXhvcGlNTGRjd2RMbU11U0FBbTVCK1NaTGFoVzFtRUpWQnFrakFSendWQXZpd1FJVmVCd3UxbnZZbjZFSXVlekFtMk9xMkJVL0hWVmRrWHlxVE9lNzVWRStoS216YkZRdVE2eUxYUlRMY1YyWGdPMVNLRDBmVmJ3VWpmeWRndmREZ1JmMEhlUmdScnZUUnBabDJMcHhCVnJiWENoY09TOGlTSlZDbWlTNHNiNkd3VEJIb2dqR1dBVXNDcmJkS3BmWE1Qc3hDZ1dWS0p3K2ZuejdvKzkreTU5ZlNOTmZybnVieHg1LzRyWkFjMlNCTXlWMDh6V2ZhNjVsWjdkTDFKMGowcGsyODBQV0hVTWFSaEcwNmtCNENaUXZZTENWSWpkZFMxMnJQU0F4Z090S1pyTDdQVVhFM1kzOTNUNTF0R3ZMSnJDa1FOU0dJUWNxVGwwKzRNQlZNR3F0OHVlT1NMQURWS2xqMGxKWE9FeGMyS1FDbXR0dmkxT0Y5N0Mva3hSMHNuRTVtUkRYN3ZhbHA2TEE4MURKdHhmRnpLcDhjSFdOcEtDVWlTMEFRVUhZV092eEl4b0ZZRWtidzgwZ29lanlCaE1XRjdwWXVmd3ErbnU1MVdOaklOaExBUUJvcVFUOTRRQTMxemVjUUg0cE1pZ3V6MG5jWjBvUzVlaHZRcnZUd2RlKzllSC84UFo3enY5bE1YcnJNRDNOa1FmT2pONW5DOEJ6QUY1U0JMV29RSUk4MVpTM0RUZ3hTR0hRQnRNU09GOUVienRCZjlpRlNlY2hDU0RJa0tpK25ZdUJzaVFBQWFTNFlJL1k5NFd4clp0d1FEWGJMbWNubHVGR21zV0J3ZVl3cnAzZkorM0tlUUdmcXpqOWdLckhjTWs5QlJldTYzcjJXdzdnbVQwUEVsKzlMN3dLQjk2RkFrM3RNcFFyVTZneW9TOXlKS3E5bitEOVZldGdYRytFYVFDUTllUlNkQnpZN1d2dGRvcnQ5VFZzM3RnQ2lLMXVOSWY3WCsxeko0cHdkV1VOUmxzQjlsSnh5QjRqUmE1WXdMYkRKRTFiZU9qOHVhdGZjLys5bjVoUDZDdDErdmwyOHBxajFLdDJHRFdmWFZnaHhKY0FmT1NrVXQrK0pIalhyUnh2R1dpOXhDeVVDMkJVRzR5ejBGc0xHUGFXa1o4N2o2WGpONkhhTjRCRWtLU3djWURSSUdQY3JocGprMlFLbENESmJuL2pRbWhRRlJlNVVOQVk3OVoyMUxjYWlWc2taUmtoMTMxTVhBM1BLcUdSM2NwZC9OeUhQVVhQR0FkRUFsWEloWExUUTFuUnFWeEZRbzNrUUZuRE9ZeVNod1RkQ3o0VXpRSFJPSG4yTkY1V1Z5QmFpaVpOS1VZYWJCZjRzY1VGbkZvK2hpdFhkNUVxTGtnTHFSQWhVblIxTEhibjh2YzlmUEhuemkxMmZnM2xNcjlEdHlQdmNmYmhmWFpnaFVHK29nZzdDd25sSFJiVE45bXhYTEpFS3cwdEtZek1nWFFYZWhzdy9TNDRPUW0wQ01SMkJRVkRRem1OQ3lOK25zVmlpa25CVUFMRFNjR3EyZkRLOVdnRmtrMDJoeWtxbWk0a1YwR1NyWW9LUmZqOWlnNi9hNUVYVnRZck1nZmVnUXNBY2NFMkJhVzVVR0szRW5MVlBVTnpJWEUwZndtNkxTcVNUQks4OTdJckdVR0RyRDh1NGlkbGZROTNxNFdYbjNzRmttV3VYa1IyUFgxSVJKQ0J5VFd1cmF5V1FwVUUxMFhCbGpGVkNvbEtrYlphZU9UaWhaYysrTUNGUDgyRUszZksyOXgxd0prQ0hzQTIwNjdCRHNvOWxSQld1MGtpb0tUYnk1SWxKcEJLQkpvTUJweGlOK3RpdlhjU1NKZVJ0dVlBdEtGeUE2VUg5cGd6SVNkQ3grUkkzYXAwclZJWXRpU0JFZ1UyVm8zR056cmFSa2pYaStYSHNLVWN4eTZBWlZ3eEUwbEpzOXJlNWJKYnpJdHBCT3M4TEJhYzZLQnIrU0VwTCtKeXhZbTRKY1BPYzZHNi9xSWN6cXRLL1BrUXlMZmRXTWZrT3BZcDBBTHdlKzZEOEs5czdROUpoQ0RNUTdtUHlKQUNwUjNjZVBacFpMMDlhRTRoaG16M25naUVnYUVBTEFUUkJ0ZHYzY0p3MkM5MW56MVpBcURkc25sbmQyRkp2dkY5Ny9rTEoxTCtkL1ZpNTJHQzVxNEoxZlladW5udjh3VUF6NlppL3VPcGhEODRuNmJmdjlZZnZuK1E2NlZFRWNFdG9rVi9pTFdYR05ucUJSdzcveFlzTEcwZ2xSZlJNcXRJOGgwazJFSW1wNkJsM3ZWcEdTZ2F3ckNCZHUwelZqcEo0TGRWMmRYakx2UVFMNVlCMTJDaVlVeHV4M29sQWJIZFZWb205VjU4ajBHSGZ1U2F2QXhYUThyR2lYNDErU25IL0tCY3RVR2hKbFhGdTgwdkxHQnJkUjJLR1prcFZ1Y1dpN29Jd01KY0I0dHo4OWpkMlhia2dHc3Zja0lrdVRaSU8yMTg0QjJQL3NjSGw3ci93R1REL3AyK0J1OUs0TXdJSUFOZ0Q4QXpJdWJGamd4KzdmeGMrdnQyTS9vOTI4UDg0WUdSeFlTWmpBaDZlZzY5ZGNMNlRnOEx5M000Yys1ZFdGeGNSd3MzMGRFN0dDb0Rab0V5QXlRNWdTVUgzQkphVFFsWWhoQVNNSXk5eS91Vmh3WlFLbUNzSUs0VnlLNGNGR0hyaUlxQ1pxaEFpY01GVGxpektlNHZGSXlpMXpZMVY4SzA4YmtPMVlxb293cEFwdkw0ZW5kNnQ5c0ZFeFZ6TjI0aFhzR2FnUm1LRXl6T2RiSENxdGlNeDhyUytBcU1wTlhDL2ZmZGQvMjlqejd5WTJadjQ5WmhGanFQYksvYUhlNTM4ellFOEN6bDJWL3BTdjc0Mlc3Njg2ZGE2aGtGMlJTRFFVNUQ1RFRFbmphNHRUYkFLOC8yOE1yVDg3ajU2cU5ZVy9zQWh2bzBERm9Rbyt3ekRReDRLT0NNd2RydUZvVmtnQXpCY0J1cVRRNFl2eS9hV0xBWURZaDI5U0lOSXhtMEdVTEVKc3MrVUZPT09CQXh0ZlNXeHQvbEJhaUtJcUlVVWF5RFJoQ0VVS2pSMHR6STdvMzdHcDh2amV4bXFWSG5ydEhHalI5b1kyd1JzeWJaUys3bjg5Mk9hNGxDc2M1T3FRVGNTbkhzNUduemRWLy8yQ2NXOWphK2VDY0pnVGVOeDltSDkvRzJwWmcvQmFPZldWRDQ3UXVLZjY4Qm5kdk1ocWQzdFRtcjBlNWtvckNWSitodGFteHZEZEJXaEdQSGxuSDgxQ25NTFFIdDFoNFN0UWVtSVlpMlFMUUZ3VEVZN1FibkVtUGwwSkNDaEdIeTNGME1mcStsQVNSMzFmSnlUYmhiOGdrN0lxM3M2ai9ZTU02T1IwalJzMFZoa3U5RVIvM21zL0xpRFBhUXVyRUJ0NSsyVW1kcG9wUEx3aVdDM1RyTlNrSFZUV21vZFJCd0k0ekt4eHFZUExPdGdFU1ZrV2U0amRWd3lqeHA0bWVPeEUzQTJ0R0J4V1BML1hlOS9hMC8rdTR6eXorM2RYbER2eDdlNWswRm5LWUROUVpFR3NCVkFEOFA0RXNNK2ZoeW1yNzNXSUtWamR5YzNzeHdsbEx1NUFEMkNPaWJISU8xRmpadkNUcHpqS1V6cHpGL1BNZmNzVzJreVRvUzNRTkw0dTZHR3BKcmFBd0x1VnFJaHRWbk5uYk5PNG1kK1NleHBSZC93UXU3amw0R3RMWlRsQzdVMFZxN21CNkJad2d1ZGI4ZXhVbmRqZzdyZVVrb0x6YkNWWG9NcGdBSE5ZWnBwVFpaQ0p3d3hQTXl1OFJVcUhBeTAwaW9WejdXQWswUCtxNG1hbmZxa0h1UFhOdnJhZ1ZVckdLUW5hcGd0T2JtOGRCYjMvWXIzL3JCOS8zdHpaZWV5MS9QNit4TkI1eDllS0Urck5MT253WHdiVXo0emhNcFo4ZFRXbGtiNm5NN3hwekxJUWtwd3RBcjV2UUZHNjlsNkt4b0hEdTVnSk5uRjdFd255UGxES1EwU0JtblFtbkFTanNObWh5R2JWVmJTRU9FbmUrd0laUWhLUmt1UTdiR29Xd25NTmpPM2hqalFSWmN4MkdFSm1VZG82NlZWWTVOUzdYT1V5bG1xb2E2emlqNEdsVlQ2OFVyQ1VUUWhVWWlKdzQrU043dm9iZXpDMFZrZTJJSVRzZmFkVU03alFNaVF1NG1QQmtDVWd5VnByaHcvMzIvZk9MMCtkKy8rZEp6Z3dPRzhGL2RPYzV0NWtDckFQNHhnQjhCOEFzTXVYYXFSYS9lMTFhZlA2YlVhNUpSbm92R2dEUDBSYkJyRW16MlVxeGNNWGoxeXdhdnZYQU02emZtc2JON0hJUDhKREpaaHRFZGlGWWdiY0JtQ0dPRzBIb0FyVE1ZeWVEM2grWkdReHNEbUJ3d3hvcjlTUWFUWnk1bnNua1JRZXlmWXBkV1NTSHhWRzVrbGlDUGtETEJzUkpTWXJjRkFGUklYMUd0SUZyZHdFbVY5ZWxOZFo3UyswaDE0N2ZUZ2laMnhVeTNiYzFXZnQwNEJSUmdOUG8zcm1CM3IyOVZmU0MyenpzWW1CTWpNRnJER0lQQjBFNk9KcWxWQVZvK2Y4L3V3Kzk0MnhNZlRQZXV2eEhYRkIyMUpVNTMycWJrUUNuc1RwOXZjbC9udGFBek1MS3dQcFI3K2thV0ZCTXBkbk1vc0tPNWM5eEhwNU5nOGV3eExKNUswZTBNMFdsbDZLZ2NhVUlZY0daNzRsUUxsTFJCcWdVdENnYTJGcEVhUHpUbTlLUEZqME1uZ0dFSUpUQmk5ZE00c2VNSXhnOTFrWUl5YVhIenQvdHgzRlpxdHAzVElsekpkVXJDd0NyNklPaGdLTUpBQ2J1ZlEva3NHdGx6T21sVG5oTHRsbDIxM0FZM0FpUkR0bkVEVjM3MVUzam14VlhYY0NybGluWVJhR09RYWF2dU9Sd084S1ZubnNXMWxSVm9BNXc4YzJidzRGdmUvaWYvekUvK3RiL1Z0TGZ6VG5xYXIxcmd6QUFlRDZCekFONEc0R3NCZkFqQTZUMHR4emR6dVdjdmx5Vm1JbllibHdrQ1JRWUphM1M2ak1WamJjd2ZYOERpOFhtMEZycVlhNjBIVTZXQVNoaGFUSkdJYXpYblZHejg2a0U3S1NxYzJKRnJ2M21BbFJ2SFRndmdFT3pRV2lWYThnVlNJaWVocTBacDVnQTRwaENNWnlpVlZJRkRwYlowTmJFZlhSYmNkQzJ4Q0JnTVVjcHRxaExvUE1QbTg4L2l4Yzk4R3JkNnRqdmFHT3M5amR2Z1pzUWcxN2JsYVd0bkM3LytsV2V3dGIyRnVmbjU3RDBQUC9LVHYrMXIzL2tUZzYyTi9oc0JtcTlhNE93RFFBUXJzL2wyNTRFK0JPQjBYK2pZZG01TzcybFpGa0dpMFFJVGtMQWxBQklXdEJXajFXbGgvc1JKbkQ5RG1GdGVRdEpXSUI1Q2NRN0dFSVFjckFqRGRMNWN6OEhPNjFETHNrak1zS2xUT1FoSEtnVkVXYUZGS1dkb2ZHRlFDazBDY2gzWnF0aThVT1EyQVhBRTlnN1BibnloRHF5bU9zdzRzSXdRRTBaQk1TQ2NRMk1JQ05EYjNNSGxYLzVWckZ5NWhyM2NqbDFybzIxb0ZqeHZyZzF5bmVIYXlpcSs4T3p6MEZyanJROC8vT1hmOC81M2ZtdmU3MTNGSFd5cGljQTVIQUF4Z0VVWHhuMEl3RGNBdUQ4WExQWU41dFl6UGo4UUxFS0VFZ1lTWlNWbkNVQXJTVENmR3N3Zlc4TFNtWk5ZT0RtUGRwZlFUaldZTXhCeVVPcENKRCtreG02bW4vMEZuOWlaRmRXQ1VpMm45cW5LUFo1c093LzhVSmhVNW5EU1FvekRSbkQxVU0yRlloSm94TldBWS9YcVJqY3hOSVZuOVgyb1pGSXdHUmphZzVZK3REWllmZVpsdlBZYlg4VGVYbzZCZTExdHROMDA3V1NFYzIyUTVSbTB6dkgwaTYvZzFSczNjUCtGZTU3KzBEdmYvZ2ZQcC9JYnFHa1Z2cDZnaWNEWlA0QUFvQXZnWGhmQ2ZSREFXdzNvVkc2a3ZXUG9YQy9YOHdNdGkxYXprSkV3UTRTaEVrTEtnbGFMc2JEWXdjS3hlWFNQZGRIdXRqRGZGYlFYNWtHSkt3QXlCL1ZDaGtubXJOU2lDK2ZZajEwN21odXNpeFdHOFBNL25vTDJRR3pxQ0JBcVJpa2FmMWJQY1RDNVk3cHgvNmxKbkRwbkQwWVBzYjI2aWhkLzViUFl1cldEVExPclZUazlOZ0cwTWZiZjJpRFhHanM3Mi9qTVY1N0Y0dkhsNXovNnJvZSsrOEc1emxmUU1KZ1d5WUc3SjRSTEFaeHdYdWdEN3V1aUFlYUhCb3NETFl1NzJwenQ1VmtxMUhWZVNDTlJBSXhHb2dqdHhDcjRMN1lKN2NVRmRKWVcwVm5zb3JPOGhMbUZPU1F0QlNZZ1krVW1KTzFkWDdFUHFjajJ2c0hXaW15QjBPVTBmclVITVVRbFkzT2NPdzBjUzA5YlZyQy90WUdYbjN3U055NWZSU1lNWXh3cFlBeTBHQmh0QmQrSHVZWXhHcmsydUhUNU5hejNCcGZlOStqRmIzdnZpV012b0tFeklBTG43dlJBREtBRDRJTExoVDRNdS85bkNRQVBoSloyY3l4dERMTjd0REdzWFBpbFdObDJFN0pMbUZLMlFHb3BvTnRKTUg5OENZdW5UMkgrNUhHMGwrYkFUcm5GRWhKVUpPeEdOSEpvSk54Q2tsck5hV1BLcVZNTG5KSWNLUGZpQk5LeGZPZUFJeUxRd3lGMnI5M0ExUzk4SGx1cnQ5RExEVFFwWk5vUzM4WVlhRzFKQ20wRXd5d0RFWEI5YlJNMzFqZGUvbzZ2ZWV0SDVobFhEbGh1aU1BNTRnRHliTnh4QUc5eEFIb013QmxZNFFFZUNCYTNoL25TcnVGN01tMzh0aXFvSkxYTUhBU0pBaEsyQXdxdFJLSFRhYUc3Mk1YY2lSTllQSDBLbmFVRnRMcHRxQVFRazl0YWlYSjdMVlZxeHhSUWFnVUlPY21uMEZrV0ZmOVFUTnYxcUJWTnpEN1VrMEpVWFJBVVdzdFl6SzFWdHpVY1ZtNnR2RmhQc3JlK2dldGYvZ3JXTHIrS2ZKQkJDNUJwNnphMDhVMnZRSCtZRmM4L3pESnM3L1d4dWplODlMR0h6bjUwbm5IMUtJRW1BdWZPQWNpemNRKzRYT2hyQVR6aVFLVUFvZ0Zvc2FkbGFTL1hTNzNjTEpLN1ZWdDZtOXhHTVNxRWFoUUJMVVhvZHR2b0xzN2gyTWtUbUZ0ZVJybzBqOVppMTRLUEU3dlN3NHVodzZ2SHFFYjJpd3NGMEpJUThML21RME1EVXkyVFMzV0NwMmhHSlM3YWFMTGhFUDNORGF5OWRBbXJMMS9Hb0RkQXByWGJUMnJYc2h1eEJVNkJ4akRQM2ZjRnVjN1J6MFdHeFAvcUEvZWUvamp2YmQwNmFxQ0p3TG56SUNJQUxRQ25BTndQNEowQTNndmdRUmZLS2Jnc1kwOWp1WmVidVYxdGxnZGE1aExGeEs0dkxYRmtnV2dEeFlBaVIzZTNVclRuMnBoYlhrVG4rRExTYmhlcTNVYlM2cUExTjRlMDAwSFNhZ0VLbFYybm52MHExNXI0MXAxUjlSb3JZT0xiZFJ6bEhWd3pSaGg1ZjRoOGtDSHI3V0t3c1ludEc5ZXhlZk02aHIwQitybXhQZDhGWUd4b1pzVHUzaG5tMXRNWVkzc2c5alNaaGZudTQyOUo4NzhKWUhEVUFCT0I4OGFBcUFQZ0pJRHpBQjUxSWQwRExweGJnTk1PTllKa0l6Tm5NeVBKYmk1bjdkNGRvbFRaNFRaV2JNWDhpS0FJVUd5UUtLdGdtU1lLS21Hb0pFSFNiaUdkczBWWTFYR2dTaElyeDVza0lHVlpPVEdXems1VTRoWThoVk9pNHB1Vmk2VzZQZ3pMZW52WTNkeEJiMjBMMmQ0Mjh0NEFnOEVRdzJHT29UWXdwbXpsTVdJM2M0dnJ2U3RwWjIwM3V1VTVLRzIvK3VoUyszZW1KdnNLUmxmalJPREVVQTV3bm1nUndESDNkZHA1cFVlZFJ6b2hnallSS1MyUzNCcm9zMXFvdmFmbGxHdDhKRmFNaEFpS2dhS3pqS3crZ2xLV3NWTmtGMVA1MEV5cFVpdmE2anZiT28xS1VxVEtobnArWTBQUmZDcGxOZDlLb3hGMGxpUHI5ekhJY3VURzlzSnBJOGlOOVZ6R1hWWmFiQjVqazM4QmsrK2RNL1pMYXlqaTllV0Z1WCsyUlBtZmF4R3VZWW93ZWdST0JGQ1RSMXAwWWR3cEFHOEY4QkVBRDd1ZkVVQ1VpYlEzTXptVkNkcTd1VG1Wc0lJMm9FVFppMXBFb0pSYldTSkFVbXdyS0pjeFdRbG1zbVhUWUk2ZkhkMXQxWDI0Yk5KMFU2MUdhK3RCakczVE1lUTJEb2k0aGxKeU5TVzcwTXNZSzRLU3VmWVpnVUJyTjJOa3pNNkp1ZmF2TDZmOFV3ejV6N0J5WDBjV0xCRTRSeDlFSVV0M3pnSG9HMXlPZEFaQUc2V2NEUWtFbTVtY3lnVnRKc1pHcHM4Q2RoVWtnOGl2eC9CQzVaNFpzeUllZHQxODBRRHFaTENNc1RtSUg3cTBQazJLUlZRNlhJWG9RekVUQUV3TWpFdmc3S3lObzV1MUZqYjUzbkluZmU3TWZPZnZpVEgvRnNDcmFOQjJQcXFnaWNDNWUwREVMZ2M2NzREa1E3b0hYTTdVY1NBckpHWDhXYjAxTUdjRlNKZ0p1N2xadGgyaEJDM1VMbFk3aHN0L0F4VWN2MSszcHNibXZJdW4yTmlGY1JKMFdqdlBJZ1lzQ1JqSXRjN3pPWVgxYy9QdGx4S216eEx3Y3dDK0REc1hoYnNKTkJFNGR5ZVlmTmZDSW9CbEI2aXUrL3VTKy9NRWJGdlF2UzUvU2hEMENJZ0l0bkp6eWovaG5wYWxucFpGRmVqQWVjRkZNWVp5UWJzVXFpbUxuTjRyZVNDMUZBMHMrWmRET3hhdm15Ujd4eEsrdHRoU3IwTGt5d0QrTTREUEFyZzFLWmM1cW9DSndIbnpobmQrZmNHQ0MrdnVCL0FPQU8rQzdXNVlRSFc5Z2ZjZGphSTZScUIyY2xsR0VLNkZCVkRmV1EwQTg0cTMyd24zTFQxQUJvUTlBQzlENUZjZFdGNXplY3hVUVkwSW5HaHZGSUNhUE5RcEI2YVR6anZOdXo5UHVKOTEzV01TWUlMNFFQVzUvZmMxckJ6eFRRQXZ3dW82WEhOL3JtREdiV2hISFRBUk9GK2RJQm9IckZZQXBDVElsNW9BVXJjUU9BUFlOU3hic0VKYU0xOWNkd3RnSW5DaVJic040M2dJb2tXTHdJa1dMUUluV3JRSW5HalJJbkNpUll2QWlSWXRXZ1JPdEdnUk9OR2lSZUJFaXhhQkV5MWFCRTYwYU5FaWNLSkZpOENKRmkwQ0oxcTBDSnhvMFNKd29rV0xGb0VUTFZvRVRyUm9FVGpSb2tYZ1JJc1dnUk10V3JUWjdQOGZBTVFHaytxazJHSklBQUFBQUVsRlRrU3VRbUNDJyxcclxuICAgICAgICAgICAgJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTTRBQUFHbUNBWUFBQUEwejd0SEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUE1N21sVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU0x2dTc4aUlHbGtQU0pYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUWlQejRLUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpUVdSdlltVWdXRTFRSUVOdmNtVWdOUzQyTFdNeE1URWdOemt1TVRVNE16STFMQ0F5TURFMUx6QTVMekV3TFRBeE9qRXdPakl3SUNBZ0lDQWdJQ0FpUGdvZ0lDQThjbVJtT2xKRVJpQjRiV3h1Y3pweVpHWTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1Rrdk1ESXZNakl0Y21SbUxYTjViblJoZUMxdWN5TWlQZ29nSUNBZ0lDQThjbVJtT2tSbGMyTnlhWEIwYVc5dUlISmtaanBoWW05MWREMGlJZ29nSUNBZ0lDQWdJQ0FnSUNCNGJXeHVjenA0YlhBOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOGlDaUFnSUNBZ0lDQWdJQ0FnSUhodGJHNXpPbVJqUFNKb2RIUndPaTh2Y0hWeWJDNXZjbWN2WkdNdlpXeGxiV1Z1ZEhNdk1TNHhMeUlLSUNBZ0lDQWdJQ0FnSUNBZ2VHMXNibk02Y0dodmRHOXphRzl3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzQm9iM1J2YzJodmNDOHhMakF2SWdvZ0lDQWdJQ0FnSUNBZ0lDQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SUtJQ0FnSUNBZ0lDQWdJQ0FnZUcxc2JuTTZjM1JGZG5ROUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlVWMlpXNTBJeUlLSUNBZ0lDQWdJQ0FnSUNBZ2VHMXNibk02ZEdsbVpqMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzkwYVdabUx6RXVNQzhpQ2lBZ0lDQWdJQ0FnSUNBZ0lIaHRiRzV6T21WNGFXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2WlhocFppOHhMakF2SWo0S0lDQWdJQ0FnSUNBZ1BIaHRjRHBEY21WaGRHOXlWRzl2YkQ1QlpHOWlaU0JRYUc5MGIzTm9iM0FnUTBNZ01qQXhOU0FvVjJsdVpHOTNjeWs4TDNodGNEcERjbVZoZEc5eVZHOXZiRDRLSUNBZ0lDQWdJQ0FnUEhodGNEcERjbVZoZEdWRVlYUmxQakl3TVRrdE1Ea3RNak5VTURrNk5UZzZORFFyTURNNk1EQThMM2h0Y0RwRGNtVmhkR1ZFWVhSbFBnb2dJQ0FnSUNBZ0lDQThlRzF3T2sxdlpHbG1lVVJoZEdVK01qQXhPUzB3T1MweU0xUXhNRG8xTnpveE1pc3dNem93TUR3dmVHMXdPazF2WkdsbWVVUmhkR1UrQ2lBZ0lDQWdJQ0FnSUR4NGJYQTZUV1YwWVdSaGRHRkVZWFJsUGpJd01Ua3RNRGt0TWpOVU1UQTZOVGM2TVRJck1ETTZNREE4TDNodGNEcE5aWFJoWkdGMFlVUmhkR1UrQ2lBZ0lDQWdJQ0FnSUR4a1l6cG1iM0p0WVhRK2FXMWhaMlV2Y0c1blBDOWtZenBtYjNKdFlYUStDaUFnSUNBZ0lDQWdJRHh3YUc5MGIzTm9iM0E2UTI5c2IzSk5iMlJsUGpNOEwzQm9iM1J2YzJodmNEcERiMnh2Y2sxdlpHVStDaUFnSUNBZ0lDQWdJRHg0YlhCTlRUcEpibk4wWVc1alpVbEVQbmh0Y0M1cGFXUTZOemhtT0ROalpESXROR0l5WmkxaU9EUTJMVGt4T0RFdE1tVm1OVEkwTURrNU5qSTBQQzk0YlhCTlRUcEpibk4wWVc1alpVbEVQZ29nSUNBZ0lDQWdJQ0E4ZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDVoWkc5aVpUcGtiMk5wWkRwd2FHOTBiM05vYjNBNk56azBabVJqWVdRdFpHUmtOeTB4TVdVNUxXRXpNV0V0T0RrMlpEWTBOelk1WlRneVBDOTRiWEJOVFRwRWIyTjFiV1Z1ZEVsRVBnb2dJQ0FnSUNBZ0lDQThlRzF3VFUwNlQzSnBaMmx1WVd4RWIyTjFiV1Z1ZEVsRVBuaHRjQzVrYVdRNk5qQmtPV05rTkRZdE9XWTNZaTB6WXpReExXSmtOVGt0TlRGbE5tWmlZMk16TkdJMVBDOTRiWEJOVFRwUGNtbG5hVzVoYkVSdlkzVnRaVzUwU1VRK0NpQWdJQ0FnSUNBZ0lEeDRiWEJOVFRwSWFYTjBiM0o1UGdvZ0lDQWdJQ0FnSUNBZ0lDQThjbVJtT2xObGNUNEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BISmtaanBzYVNCeVpHWTZjR0Z5YzJWVWVYQmxQU0pTWlhOdmRYSmpaU0krQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRFVjJkRHBoWTNScGIyNCtZM0psWVhSbFpEd3ZjM1JGZG5RNllXTjBhVzl1UGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMzUkZkblE2YVc1emRHRnVZMlZKUkQ1NGJYQXVhV2xrT2pZd1pEbGpaRFEyTFRsbU4ySXRNMk0wTVMxaVpEVTVMVFV4WlRabVltTmpNelJpTlR3dmMzUkZkblE2YVc1emRHRnVZMlZKUkQ0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BITjBSWFowT25kb1pXNCtNakF4T1Mwd09TMHlNMVF3T1RvMU9EbzBOQ3N3TXpvd01Ed3ZjM1JGZG5RNmQyaGxiajRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOMFJYWjBPbk52Wm5SM1lYSmxRV2RsYm5RK1FXUnZZbVVnVUdodmRHOXphRzl3SUVORElESXdNVFVnS0ZkcGJtUnZkM01wUEM5emRFVjJkRHB6YjJaMGQyRnlaVUZuWlc1MFBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwzSmtaanBzYVQ0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhKa1pqcHNhU0J5WkdZNmNHRnljMlZVZVhCbFBTSlNaWE52ZFhKalpTSStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh6ZEVWMmREcGhZM1JwYjI0K2MyRjJaV1E4TDNOMFJYWjBPbUZqZEdsdmJqNEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE4wUlhaME9tbHVjM1JoYm1ObFNVUStlRzF3TG1scFpEbzNPR1k0TTJOa01pMDBZakptTFdJNE5EWXRPVEU0TVMweVpXWTFNalF3T1RrMk1qUThMM04wUlhaME9tbHVjM1JoYm1ObFNVUStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh6ZEVWMmREcDNhR1Z1UGpJd01Ua3RNRGt0TWpOVU1UQTZOVGM2TVRJck1ETTZNREE4TDNOMFJYWjBPbmRvWlc0K0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpkRVYyZERwemIyWjBkMkZ5WlVGblpXNTBQa0ZrYjJKbElGQm9iM1J2YzJodmNDQkRReUF5TURFMUlDaFhhVzVrYjNkektUd3ZjM1JGZG5RNmMyOW1kSGRoY21WQloyVnVkRDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOMFJYWjBPbU5vWVc1blpXUStMend2YzNSRmRuUTZZMmhoYm1kbFpENEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BDOXlaR1k2YkdrK0NpQWdJQ0FnSUNBZ0lDQWdJRHd2Y21SbU9sTmxjVDRLSUNBZ0lDQWdJQ0FnUEM5NGJYQk5UVHBJYVhOMGIzSjVQZ29nSUNBZ0lDQWdJQ0E4ZEdsbVpqcFBjbWxsYm5SaGRHbHZiajR4UEM5MGFXWm1Pazl5YVdWdWRHRjBhVzl1UGdvZ0lDQWdJQ0FnSUNBOGRHbG1aanBZVW1WemIyeDFkR2x2Ymo0M01qQXdNREF2TVRBd01EQThMM1JwWm1ZNldGSmxjMjlzZFhScGIyNCtDaUFnSUNBZ0lDQWdJRHgwYVdabU9sbFNaWE52YkhWMGFXOXVQamN5TURBd01DOHhNREF3TUR3dmRHbG1aanBaVW1WemIyeDFkR2x2Ymo0S0lDQWdJQ0FnSUNBZ1BIUnBabVk2VW1WemIyeDFkR2x2YmxWdWFYUStNand2ZEdsbVpqcFNaWE52YkhWMGFXOXVWVzVwZEQ0S0lDQWdJQ0FnSUNBZ1BHVjRhV1k2UTI5c2IzSlRjR0ZqWlQ0Mk5UVXpOVHd2WlhocFpqcERiMnh2Y2xOd1lXTmxQZ29nSUNBZ0lDQWdJQ0E4WlhocFpqcFFhWGhsYkZoRWFXMWxibk5wYjI0K01qQTJQQzlsZUdsbU9sQnBlR1ZzV0VScGJXVnVjMmx2Ymo0S0lDQWdJQ0FnSUNBZ1BHVjRhV1k2VUdsNFpXeFpSR2x0Wlc1emFXOXVQalF5TWp3dlpYaHBaanBRYVhobGJGbEVhVzFsYm5OcGIyNCtDaUFnSUNBZ0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBnb2dJQ0E4TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvOFAzaHdZV05yWlhRZ1pXNWtQU0ozSWo4K1l3bUsyUUFBQUNCalNGSk5BQUI2SlFBQWdJTUFBUG4vQUFDQTZBQUFVZ2dBQVJWWUFBQTZsd0FBRjIvWFdoK1FBQUI4VEVsRVFWUjQydXo5ZVp4czJYRWVCbjRSNTk2Ym1iVytwZDdlKzc2aDBRQUlFaUJBaWhRRmJoYUhXczJoS0ZzZWptalpJaTF5SkZrR1pkT21aRnVBUGRaTWF6d2FTWlE1b3N5ZnhwSzErRGY2U1NOS1kwS2lRQTRwbUFTeEVPaTkrNzErKzFwNzVYYlBpZm5qbkhQdnVVdG1aZFdydDNUakJGbDRyK3RsWldYZXZOK0ppQzhpdmlBUlFiVDd5dWhMdi9XMWYvd2J2L1pidi9mR3padDQvZld2WTJueDhPY1c1NDc4S0lCekFQQ1psejhkcjlJOU5vNlg0RDVFRGtFSUJDWUNpUHkzVGJ3eUVUalJwcGdJU0Fnb29nRXEwUk10QWlmYU5LOGpBQkdEbWFDWUFTQ0NKd0luMmxTUEF5TkdESXdZR0JOejBBaWNhTE41R3pBeE14Z0VJa0lrY0NKd29zMWdSZ3dFZ0VCQVJERFI3VVRnUkp2QjR4QkVqQTNUbUNubU54RTQwV2JLY1l5UWlGaDZ6V0pHSW5naWNLTHRudVFJRVlHc3Q0R0k4ZUNKRm9FVGJiTExzZDZGaUNBUkx4RTQwZmJnY1pndFFTQ0lyRm9FVHJSWlBRNFZTVTBFVFFST3ROa2NEcE9BQ0VTTTZHd2ljS0x0MWZHSUFSSEZWclVJbkdpejJLQS9mRU5FSUdKWmdwampST0JFMjhWKytxYytLMis5ZnU3ekZqVUU1dmdSUmVCRW16RkVFL0hlaHBoZ29zZUp3SWsydzRmQ2lvalprZ05HWXN0QUJFNjBXWTFnaHorTkl3aWlSZUJFMjhXTTBTNVVJMUQ4aUNKd29zMmE0N2pPVHBHaVh5MWFCRTYwM2NJMDErUUppaTNSRVRqUjlrUU93UFdvRWNXUEtBSW4ydXhlaDIzTFRTUUdJbkNpN1RuWEVkYzFFTkVUZ1JOdGhoeUh4T1U2RGpKaUpRaWlSZUJFMjgzYldJOFQ2SFJFcnhPQkUyMlhFTTFKRFhoNXFBaWFDSnhvczMwd1JJQ1RoNUk0bFJPQkUyMUdyd1BBaU1EWURnS0tvVm9FVHJSZFRHdU4wTWs0U2pwNm5RaWNhTk5NS1FYMmhVL3hraDNSSW5DaXpSQ3FXYXd3TTVoVnZDQVJPTkYyTXlLeUxzWTVHbU4wRE5VaWNLTHRabm1layswYWlKL1YvV3BKdkFUM3MrY0JXREdZVlBRNDBlTkVtNFVjOE0yZEVqc0hJbkNpN1lVZEVQZUhsSHhCdEFpY2FMdDhNTVJoVTNRc2dFYmdSTnZOak5FaWJtV0JFZU85VHZRNEVUalJwbjRvck1oMWVZS3RCRzRFVFFST3ROMU1hdzJCSFdJemdqZ0ZHb0VUYlJienJCb1RSd25jQ0p4b2V6VzcrRE5HYVJFNDBmYUdHbGlWRzJOTVpOVWljS0xOWkFTM1dFbzhPUkJkVHdST3RKbWNUcUZ5RTcxTkJFNjBtVUVEMkxFQ0NmcHVva1hnUkp0Z1Jvd0JiQTNIcVhuR3p5a0NKOXB1dHI2NnVhMjE5RUdBc1JpU0dLNUY0RVRieFM1ZnZMWXhHbzV1aXRoUURWRnpJQUluMm13cGpoRkRFSWtGMEFpY2FIc3dna0JZV2EwQmpyMXFFVGpSWnZNNEZqeE9rRENLM0VUZ1JKdk40MWk4U0d6d3ZFOHRhZzdjN3ljYk15QVJQQkU0MFdaMU9jUktRWXhBSW5KaXFCWnROak11VENQRm9FaEZSK0JFMnd0RklGSDlOZ0luMnA0K0dMS1RPSzV6SUZyTWNhTE5GS29aMXhaTlVUczZlcHhvTXdkcHpJVWtJU1I2blFpY2FETVpHUkhBYWQxUUxPWkU0RVNiRVRtQUVCR0lHVnJyeUJERUhDZmFMS0dhWmFNSkJBSW9qaFJFanhOdEQvQ3h2VGNVNTNFaWNLTHREei94S2tUZ1JKc3B4U2xBMC9MWGFESEhpVGI5WkZNTVpXS29GajFPdEprak5NdW9tZWh4SW5DaTdTMWNzMWlKWlp3SW5HaDc4am1DaERteTBSRTQwV2JIak9zY1lJNTFuQWljYUxQaWhwbUVpTzFLdzVqZlJPQkVteTIvRVFHSkNJd3gwZDFFNEVTYjFlUFlUaHU3WkNwYUJFNjAyYUVqVXVZNjBlbEU0RVNiSlZRRDJTWlB1enlYWTQ0VGdSTnROdVJZUW9DWXdCd2RUZ1JPdE5uQlk3MU52QkFST05IMjlPRVF3UmdERS9kS1JlQkVtNDBhOEtNRWtSZUl3SW0ybHlqTmowNFRJMkluQWlmYXpNaXhHNmVaS2RaeUluQ2l6V3FqNFdoRDRQclZvc3VKd0ltMnV4bGpaSE5qK3pvY0pSMzM0MFRnUkp1UkhDQWlwK1VwMEZwSGx4T0JFMjJXRkFld2REUkFZRmJSNVVUZ1JKdlo3VUJnTzZSMXZCZ1JPTkZtZHpzRVpoVlp0UWljYUxQeUEzQzFUMlg3MUdLT0U0RVRiWmJQUlVSRXhHNW1NN0huSmdJbjJwNFRuV2dST05IMkFCY0NiQTBuMW5FaWNLTE55Z3NBcm1zZzdzZUp3SW0yRjNKQXhCZ1FNZEkwaTFja0FpZmF6QjRIZGdKMHU3LzJJWkRFenlvQ0o5cHV3SEVHRVVDTGlhRmFCRTYwUGJ1ZVNBNUU0RVNiT2NjcDVuR2lSZUJFbS9GemtZQ0R6c2Q1dkNJUk9OSDJrT2U0UGFEeFlrVGdSSnMxdFJGYi9Jek5BeEU0MGZiQkRBQ20zTW9XTFFJbjJoU1RNbDVESkFnaWNLTHRCVGllSGlCbUFtSUJOQUluMmt4Qm1wMmNKaWpGaXc4K2R1eWo4YkpFNEVUYkRUbEVib09oSU05ekdvOUhNVjZMd0lrMlU3d1dkQXpvcURzUWdSTnR4aHdIZ0ppb3F4YUJFMjB2M3FhWXdoRXhVQndGT3lKd29zMWt4Z2hBRW5ma1JPQkVtNVViY0s0R1JnQ3RkZm05YUJFNDBhYm1PRUVSbEtCVVZQT013SWsybThjSmdNTlJsREFDSjlxczhDR0lzWDFxV2RRZGlNQ0pOcnZYSWJZTHBxSU1iZ1JPdE5uekhERFpPbzRqQ0tKRjRFVGJIVG9DclkwcmdFcGsxU0p3b2szOVVKaWwyK3NzQzRTSUNOb1lBQlJadFFpY2FMdDlMblB6M2VPZWtHYUtDM1FqY0tMTkZxUUpBS0tpdVZNa2htb1JPTkYyTXhMbmJrUUVBb2tGMEFpY2FETWh4Mm5iaUFnSWlBdDBJM0NpelJxdStiOFlJeUNLNUVBRVRyU1pzV1BWUEZtWTQwY1ZnUk50Wm9aQWpJRXhadlBtdGZXdnh5c1NnUk50aGpUSEszWW9sY2oxcTJzYjhaSkU0RVNieWVQNEhFY0RFdWR4SW5DaTdZa2NzUDRuS3VGRzRFU2JQVmFMeTNNamNLTHRQVlJqWnJCSzRzV0l3SWsycTdjaHN2RlovSkFpY0tMTjZteWsrQitBT0pJREVUalJabkU0SWtKR0RJd3g0TGhaS2dJbjJ0NlNIQ05pTzZRanF4YUJFMjEzeUlBZ3pJeTRHaWNDSjlxZXVBSDcveVpTMFJFNDBmWktFTmdkb0JSNWdRaWNhRE9IYW1TTG53YmpmQlN2U0FST3RGbENOUit3aVFqYzJ2Ym9kaUp3b3UzNndSQUxFd1BrbWowanF4YUJFMjEzTTJMczlMU1JzazA2V2dST3RGMlNIQ09BR09RNmo4eGFCRTYwdldVNkJHTU1pSUJPcHh1dlJ3Uk90Qm5vQWJIRWdQdUlvcTVhQkU2MDNTTTF5MFlMbU1tR2JWSGxKZ0luMmt3ZWg1Z1lvMUdzNFVUZ1JOdERvQWJmM0FsVzhXT0t3SWsyS3k5Z2N4d1FvcVphQkU2MFdUNFV4VWlTWkk1Z054VkV6WUVJbkdnejJOUFBQWFk2eTlJajVMcWptZU9LandpY2FMdC9LTVIyOXllODZEcHQ2anlQYmljQ0o5bzBFeEVTc1NzTVJRU0o2cjZSNXpvQ0p3SW4ycTdncVNFcFhwRUluR2d6R3JtTmJHTEhER0xuUUFST3RGMUJnM0piQVZrSEZMMU9CRTYwV1FPMkdLUkY0RVNiUFVTVEtuaGlnK2Y5WmxHVStINzBNeUlrSXRCYVk1em5nQ0xFVUMxNm5HaTdmU2hNSmtBUlFDeVJISWpBaWJhTDVYbE92dmdabWVnSW5HaXpKemtDQUVvcE1ITUVUd1JPdEZsTXNTSUk3TmcweCs3b0NKeG9Nem9jQ0xPdGVlWjVEdWFvSUIyQkUyMVhHNDl6RmhFWW8yRzBydEhUMFNKd29yV0hha3FoMkNsbHB6OWp5MDBFVHJUWnpEb1owY2IvUi9RNkVUalJkczl6Q0lDQU9PNHFpTUNKTnBOcG05Y0FFRENwNkdvaWNLTE5hc2JFZmRNUk9OSDJudUdJbGI0MU1QRmlST0JFbXkyL3NVcWVEa0ZnaW5XY0NKeG9NM2diRUp6MHJkWW10dHhFNEVUYm0rdXh1bXJNc1FBYWdSTnRWc3pVS3pjeFhJdkFpVFlWTkc0ZVIycGFOL0hLUk9CRW01YmpHR0hqbCtaU2REUVJPTkgyRnFyQmJpeVF1SEU2QWlmYURLQWhLNlVtSWxERVlPWmh2Q29ST05GbXlYTEk5cXQxT25PRGhkN2hjL0dhUk9CRW0yS2ZlZm5UOU1UVEQzL1NxbmNTakdnUVVXd2ZpTUNKdHB2MTVucFBrZHM0N2ZtQ2VGVWljS0x0VGd3NENjOUM1U1orVGhFNDBYWXpiUXdCc0NJZGtVK0x3SWsybXlsbThmTTRDYWVCSTRvV2dSTnRvZ2xBdGp1Njh2RkVnaUFDSjlyVUQ0VUpXb3psMVFqSTlYQWhYcFVJbkdpN21ERzJWWUNKTU03SDNmNXc2MHdNMVNKd291Mlc0eWdsTG1Tem9adWwxaUp3SW5DaVRjMXh4TEpxQkNDeEdtdUVXTXVKd0lrMlE2aEdCQ0lHRVVIRVJOQkU0RVRiOVVNaHNyRVpXY0YxaXBvREVUalJadkE0SWdRUkVBRktGVXZ6SW5naWNLTHRaa1JVWkRYR2htb3hYSXZBaWRabVAvMVRuM1hzZ04zR1JzeElsSUtLKzNIdU80dkxjKzhqd0h6bTVVL3o1VXVYdjFPYi9JeldHZ0RRNlhUQmlsZm01bnZKem5hL0NqRDdNL0VDUm8vempXdWZlZm5UZE8zYXRiKzhzelA0aDFjdVhYdHBlM3NIZVQ3Ry9NSWlEaDFhZXZIRWd3dC9kMkZGL3FQZUlYTXFYcTNvY2FJNSsrLytxNytSZmR0M2ZmU3B0MTQvdDN6OTZnMFk1M0VJUUg5bmlOZGZlZVdqVzVzM3Zxblg3ZjMra3lkZi9QNjFXK3VEZU5VaWNMN2hiWE5qYSttZE45NDllZlhLRFJpalN5YUFDS1BoR0d1cjY3aHgvUVl0TGk0KzB1MnNIUUhvVXJ4cU1WVDdoamNqMHQzZTd2ZnNLcmFDSTdEWVlYWmN0R0EweW5zUUxNWXJGb0VURFFCRVNHdFRmQjdGN2tLdkcwMEVJbVZGcFFFVkwxZ0VUclFHaGdRUzZIaUtNUUFJeEFSbGQ0TEdtazRFVGpTVUFLRzJ6UVRFRENZR2w2cWVzWXNnQWlmYXJoK1Mzd2RLWlFBWHIwb0VUclNTSUppNHo4T0ljZDZIb3NlSndJbldDTXVLUHgyUFpnU0FBVk1DUWhvOVRnUk90TkJVa3JEUFljaUtSeGRJS3FnQ0FyUWV6M00yUEJPdldBUk9OQURmK20wZlBqTzNNUGM0aUp3SW9SU2VwL2hQQWJUVzh3UWRnUk9CRXcwQXROSEVISGdjS1QyT0o5TUVBa2hVaWJvZkxMYmMzRWZXUmtXTGxEVlFYOTlCM0pjVFBVNjBnQmh3cnNVRHFDQ2ZZU0FBdExaYWExcDBKQWNpY0tJNTBMU0FnUUIyWVpzMjhHS2VGRm0xQ0p4b1JSaEdYTnYzU1ZTU3p4cTI3VVlFWUZMeGM0czVUclJLcU9ieUdBcEFaQWsxQlVNSmhBQk5IRDFPOURqUkN1QjRWczJWUDR2L1pZYmZDU3BHWU53YWtHZ1JPTkhxb1JzQTQ3dWtIVmtnUlcwbmJpNklvZG8zZ0lYaUduWDd3RXZQcUVlZmVJaTYzYzdSMVZ2ckpDSXdZbUMwaGpFR1JodUlFUkFURXFYQUNlUFE0VU9QL3Y0LytMOTdaanpNMS8rNy8rcHYzT3AyTytiSXlpSHoxUys5cXFlOWppanNjWURSUVZ2dElOcUJBY016eWd5QW5ucm1NZDdhMmxZZitOQVRqNlZaOXRqMjlrNUdrQStENklYeE9QL282Nis4ZlhKOWRRTUdCcUlkQlcwMHhCZ1lZNkIxRHBVb1BQN2tJM0xzK0lvUTBkYjI5dmIvcjl2dDVyMWU5NTJ0cmUxL1BiOHd0OVBmSG54eHVDTzNQdkRTcy9yRkR6MWpmdnFuUGlzUlNCRTQ5enRRa3NXbCtUUkprblE0R00wLy9QaXBaN3E5N3BPajRXaCs2ZEQ4djd1MXVkUEo4L3o0ZURRNlBCN255SE5ONC9FWW85RVlnOEVRUm11SUtZZllmRmUwR0ZPRWJFb3htQmxDdGhLcWxFS2FwU0NHZExzZDZXU2QxK1lXZW9QbFEwdDlvL1hmQk9UVkwzN2hsUzkrNSsvK1hma3YvL05mTmRFalJlRGMwekRMZVpJRVFKWm02Y0twMHl1UHppLzFQcWFZWHlLbWovVjNCdGw0UEQ0eUhvMFhoNk1SOHJFbVl6UkVCTWFJOVNSK1NXNlIzTmg5YkY1bjNYOCtSZ1FpcHZpK01ib0FsZEVPWERCT3lKQ1FwU21TVktIWDY4cjh3dHlOWHE5M3NkdnJmcm5UN2Z5anhjWDVWMzc5VjcvNGpoNm9QSVoyRVRoM0F5Zys5RXJTTEQwc0ltZk9QSGo4TzBhajhaT2RUdkpkdWRZbmpURUx3OEdJOHR6bUtDS2xwN0FZOFFtL1MvZEZYRythYjZleHdJR0lhN2NwSDJQRUZKN0h1RjRjZ1JUZjAyVnZqdlZjWXB4V2dTWGgwaXpGL0h4UGxwY1hieTR0TDU0bFZpL1B6M2RXcjE1ZSsxOS84cy84aVhFTTZTSndEaG80QkNETk90bml5ckhscCtZWDVqN1Y3dzgrSVNJdmFwMmZHSTNHcExXQk1kcDJNeU1BU3NpSE9Ub1pSUmdtQVlkR0ZtU3VFVTFFQ3FDaHhyQ0pjZDRISVJBOWdHeURqbWdERVYweWRPN2ZJQUloTzFXYVpxa3NMTTVoYVdueGxlVkRTLyt5MiszOGk2eVR2UEsvLytFZmVyTU5SQkZBRVRnemgySXJ4NDdNUC91Qng3NWpmVzN6YVdQTUgxNWYzM2lpdnpNNG5PZWFySWlHdjVMZVMxU3BZNnYyVlBhZStSc1pOV0I0THlSaWlwOFdJOEcvb3d6ckNnQzZ2M3VnK1RCUXlqRFBDaHRhYjFSWnMrTkNQK05BbXlRS2h3NHZ5ZkVUUjY0c0xTLzlZcHFwbjN2enpUZmZHYXgyWWs0VWdUTmJPSGI4eE5IMDVKbVZ4OUkwL1o3aGNQZ2oyMXM3TDI1dWJtZGFhNElVa0tqOFVIZ1pQYUJLOEZRM0VmcVFyUEl6WW9JdWFOTjRqQS9aQ3BpSkJPR2NLUUhrd09NQmE3UXB4aEVrZko3ZzUveHJNdHFBU0xCMGFFbE9uangrZG1sNTRUVVEvYlcxNnp2LzR0YjFyUkZhNmtmZnFPQjVYd05uRjREVVRjM045K2FlZi9HSmorUmEvNkdkN1owL3ZMRzJlV3c0R3BmWGFNSzFLbTltNTNoTXUrZHBCWTRuQXdyZ1NESElWbmdkbjdjRVR5SUJlSXd4RlhMQjUwS0F5NHNBRjdxWjRyOFJmaS9NdVl6QUdCdmlaVm1LVHE4N1hGcGNmRFhMdW45N2FYbitWMzdqVjcvNGxZY2VlRXhqUXFQcE53cVF2dEdCd3dDU3VZWHVrWmMrL1B6djI5blorY01iRzF1ZjJOelk2aGl0aXdRY1FkOVlZeG1uU09XL0o0SE1CS2Q3STF5cmVKM1FTMVZEdG1DWmJvdm5DYjVxMzlmQlVJOFAzWHpvWjdTMllFUGdpWXdORjIwaDFvNXNFNENGaGZsYlM4dUhQcmV3c1BENXJiWFJQOU81dVF4Z0d3ZllyZjFlQWQ3N0VqaXpBR1p1dmpmL3pQT1BmYlBSNWxOR3pMOTc2OWJheWY1MjMxNlBZdVJTTUczZGMzZ2pVK0I1UEx5cXliMnBZVWthNEpFNnVGckE0MytEVklCa1dzSGp3OGJ3T1MxWVN1OWpQTkZRZURTeFlJSExnWHpZR2VSU1NxbngvTno4MWNYNVEvOUFOUC9pMXZiV3F3dnppenZmU01CSjNzTTMvMzZNRHgxZVducmhwYWYrb0JIekg2NnRicnl3dGI3VjJkbnBsOTZsY3F4UUNacEFpdGIvTndVd0FSRklMQ2ZtVk5CQVZJS1FEU1B3RXhDeC9Cc284R0VTaUhTVXl0SDJjVXdvMk9yQTgxbWdNMEFDdVBBTU1PV1BNeGRzbmhGakcwaVpJSWJBWUlBTmpHSDNNeEx3SEc1NUwwdWdlZURBTnRicHJkWGhBK3ZyYXovWm01djdzWldqUnovWDZTVC94V3V2dlA3Vmh4NTRMUDlHQ05XK1VYclZFZ0NIVHB4YStkaUpVMGMvZStIY3hTY0h3MUUySHJWOHh2V1pHRTh2Tzlhc3pxSzE3VkdYU21EbnZ1TkEyT3JoL1hPVEF3bjhqVnVkQmhXMHZRei9EU3BBQXNPUUFnajJlU3hHQXZFcFl2c2pSaUFNUUJPWUNLWndtS1ZZQ01oQm5nZ2tnSkI5VG0wTWJXMXR6ZmY3T3o4d1B6LzMzVTg4L2NqZjNGNGYvYVUweWE3aWZkNkkrbjRHRHJuM3Q1eWs2a01uVHEzOFpKN3I3N3gwOGVvY0pManBncHVaaUF1UDRIMU51SXV6VXFCRTllYVZ3T3ZVQTdLQ05QRFBLckEzbzFEeHU0VGF5WWU2Y0lmOXd6OG5GYUdVZjV3Vit4UXd5STYrZVZCUmVTZ29BTUxrOGhvR3cwQ1Q4MEJ3WklGNzlmNzlFOWt0Q2t3TVhSRU1FZWc4eDhiNlJtZHJjK3NuanF5cy9HQzNRLyszaEJaK2ZqZ1lycjlmQVhUZjVqaTNHYW9sQUE2bmFmTENxUWVPL2VSNG5IOXFQQjdQVFV0aHAxMkg0dVlPQUZWa0dBMmdsRGtQZ3NHMFNzUlh0TlVFTEpjdmJBYS9xOHF5VmV0QnBTQzdWQWdGOGJsU1dDUU4yRFlFZVpXSVFCc0RNZG8xazVhMUhac0hvY3gxZklFVnR0M0h0dzM1K05FRU5heHVKNU9WWXljK045OWQrb3UzYnE3LzVzTDhZaDhIUE81OXIzT2g5NlBIbWMreTlMa0hIajc1WndlRDRiKzF2YjB6VDE1amFjcjRGd1VGek1yMHBRVGVwK2FGd2hBdXZFR3BFZkpSbGJndVFyd0FDRVFndG5rT1JJSU9CQ3FmcXVKNnBCTGwrWnVXaVdEQUFHbjdPQThxb2hMMGJoVjhKZmxqNjBrSURCWURZUVpjdHdGUmVHeUk4enE2OGxxSzFpQUEvY0dRTGw0NC8xM3pDL09mUEg3ODVOOGU5OGVmVFZSNkFjQTRobXIzbjJVQUhqajF3UEYvRDVBL3VybXgrYWhOcFBjd0xPbkpnSUFBcUlkMGxURE8zMDcyam05bDNhUjZtOXVReCtjaUFhZ0tSV2h5MG1udTVyWVBxOUFRamQvVnBvNERab2cyd1Z1cHZoTC82NWtKQmdvd0dvbGl4N29CQkEwcHd0UXFTTXRySlMzNW5mVm1XZ3pXMXRjN085czdQM3JrNk1wM0h1cXUvTm50cmY2dmREdTlEYndQeEViZUR4T2dCT0NvVXZ5cGxlT0hmaUhQUjU4ZWo4ZVBHaFBjOUxRMzhKVGhqTlJ5SUhMS21xVlhDa0ZFTHVtMmlUZVY4azdoMy8ydllmdDRkb2syVWZrc3hZM3BWbnNRbFFEeGVSaUZZQzlTbU1BakZwNkthbjdQam1MNzUyUWlNUHNYUU1YMUl2ZjN0a3ZuKytuOHFIZWxMT3U4bncvZGhxTmhjdlhxNVNmUFgzejc3NmhPL2pmU0hqN3dmaml3ay9jNFlESUFqeHc2dlBqdkVQTWZCZVJoRVhhbmRRa1ltc2g2VFV4NEtpZDUvYmlsL1FDeGxVUXJKRHFkNTNMZjU4RGprUnVVcnJCcG52QkdFWVpaOHF1c3RWaHdLdHRxWXl5YjdjbHFPR1lzWk02SVNpYk9YcnFTQmhmTjl1ZlpRTFJuMm9yVzFJQ2M4T3RJeWx6T0YxbTNkcllXQnVmN1AzVGt5SkdYRGg4Kzh2SmdTLzlQbld6dVBldDkzcXNlaHdFY1phWnZXMWljKzQrVFRQMXBwZkJ3R0VhZ2Z0UHZDNXBVZmE2Z1JYOHE3aURCVFRrSjh3RkFLdmxUNkwzY0YzdFBGakJkS0wrSzA5OTdObktlekRHRnBUZERXZFFsQWl0VmVCWHZBWXVmWndZWFlpR1d6MmIzWE43elV1MWFVNDFzQ1lOTG5lY1lqY2U0ZHYzNjB4Y3VYbmc1NmVsZnl1Ynh6S3R2ZkZWRjROeTkxM3dxVFpQdk8zbm0rRi9welhYK0dBUTlIMlpRY0d2U0ZGZUZsc2RSblNVVGFUNnVsdTlVWW50SVM5US9BVFNFQ2hncFNONjVoVmp3Z0VKSVVBVCsweGMyaStjTEh4T0djRlFxNk5pZnNlQmhsT0VhVXhDeStiUERnY2VDT1B4QzhUT29oM2FlTkJHWGE0bUIwVGsyTjlZN2I3OXo5bVBYYmx6NjFROS85UGsvdTdGenN4dER0VHRyQ3NEREowK3QvSGphU1g1ODBCOTJLamRHQ3pEYUtPTjZqdUI0K2FJVzB3YWFTcEJFTkhsTGpWaXlRT3BNV1AzM29BeHI0R3N3amJBdFpNOXNyWWNCVzZRTU9ndHN6aUhWRkEyMnBsUXYwSHJ3UzhtTkZ4R2hZb2FHN2JDMk9HRDNlcVVhNU5hcXNMYU94V0FHdEE1Zkx3WHYxNXB0OFFHTUdlSEtwYXRIdGphM1BudnE5SWtmSWpIZkpacFhvOGM1ZUVzQlBIZjR5TkovSWNCLzFQZWdxWHVYV2NpQWxzZElRQ1hUak05RFFlZ1dKdlZ0SUtVNmN6Y2hrQXVmTHlRRktxU0NENzJJcTR6YWhGcVVEY3M0OEJMYzhob0NUMGhsK0ZmMUxOSThla0p5b3JnbUpjMVJCNDN0MmJOajMxcHJiS3h2NHUyM3puMW9mZXZhdjVrN2hEK0M5OGkydWZ2TzQwd29mS1pabHI1MDdNVGh2endlNXgvVFJxZVRrdkRpdzVweTAxZVNhbUJxd2s5VFFHUGJ0MHdseVo4STFOcnBYd1phL29aMVhKWFlPb2tFZExWdnZTbnlDMkpmSW5VOWIrUzhTQk04WmVkQjBiNVFlZjBFZ0JXWGN6dWVaaWNHaWJiTW5nOUZYVWVDd01DdzdiK3puUVlsbjg3TU1GcFFsOEl1YWswaVZXOEh3bWc0d3FWTGw1L2MzdG4reFpNblRpMVFQdmZ6QUhUME9MY0o3cXlUZmZEVUE4Zit4OUU0L3pZUlNYZkxYV2dHeG14YTJOYWdqNm1rWGFVTlFBRjFIU2I3aENxeGdCWnZWcUVIL0duUFpjN0RFMWc1QkRtUnA4RExBbWMxU1M5OEdGR0ZrQ2lmMi81dXJyeC9xbmdQNisyNEJHNmRQZy85TGxGTGdOdEdvdGlSYmlNRzQzeU0xVnVyZlBIU2hiL0duZUgvZ1ZQVDJlMkF2VU9Od084TDRDUkptbnpneEttai84K2Q3WjFuaW1BOFNGNFJKTHoxRzdUKzFSWkswU1Q2ZUJlUEpTMGhXOXNYQnpkMDR6a24wT1YxMGlCa0N5VUloOHFrdi81YTJvaUhFanhoQUZtRVY4eE5ackFSc2tyMVlLQmFHSWxtWGtjVHJxWDRBYnpnVDIwTTF0YlcrY0xGZDM4dTdZMC85OWpUWis1YjB1QkFRclU3aFB5a045ZDk0ZGlKSTMrOTMrOS9RR2JwQVFodittbWU1UjViNVRhc2hIR0V0bTBmUlp0L05TT3JlZzBTVkFjT1RGRURDcFYwSnZBZnhjOHFkdDBEaGgwYlk4TXlFYkpqRDFJckxCY3RSdld1QXRjUVN0TG9LcS9YbThRM2tZS1FLTWJObTJ0a3hIeXIxdVp6Nlh6eUhlUHRkQlJEdFJsZjE3ZDg4cVhmOWRTemozeHVNQmgrTXdTTmdtYkRtMHc3dmV1a0FCMHdoR3JlRHpNQ3ZOMEwwZ3d2bldyYkRLcFNVcFV4aUlEd0tINXJpNmVxbkR1TzJnNTc4NWdacWdqMXltZVRrQ1FKYUc4Sy9xeUh5bFhkQXhRRGN5SUd1Wk8xdW5sakZlKzhmZTdqV2thZnk1WkdhUVRPRExmVjkvM2dkM3lJRmYzZHExZHVIRGJHN080MVpnSE50TFNuTFEvYWI5ZDRyVlZIV29ianB0V0h3cjR3aE8wdmpYeWlEanFwMFExK0hLZDJnNGZld2hjNkN4YXRaTjRLa0JBSHY0b3JvV0JZcksyODVob3FhV3JrNnp1c1RRR2dQTTloakdCMWRSM24zam4vaWRGNCtLL1MrWEVXZ1RNRk5KLzZ0Nzd0ek5ycXhwOC85ODdGRlozcjloaTU1WVJ2bk5tMWluL2xPV3BWL1FxVk9pT2hNQTNNOWRNM0pBdDJEemlEam9EaUxkWTdGcVFZYWl1L2JVRVFFZ1hGdndka0J3ZUpmNFd1ZHF0RU1LRTNyazVNMktKbldSQ3RFQVRGNjVVQ2pNWDdxcGNCNmdWbko0OEZDTFIybnVmTmQ3OTFwNy8xUzB2SGtsUDNDMGx3WHdIbkQvM0k5NS9zOWpwLytjcWxhNzkvUEJ3M2dFRlRrdjlKdDkvTVlWa2RaTGNiMXRVYVJLY0JYMm9rd3l4WlV2MjlGYWQvdmRXSXlvNEMvM2V1TlhRMmJ2aUFrTEFoVzhuMk1Tam9KRURRT2NBdDVBaVh6R0xJMEZHdGdkVE45aFJmMmpnTjdSeEdERFkyTm5EdTdQbnZ2SEhqMnQ5UDUvVGo5ME82ZXQ4QTU5Ly9VMy9rbUZMcXYzbnI5Yk4vZUhOem14cUEyV05JUm50NHJJVGgyUUVNOWtuTGxHZ2JWUjM2b0wzZkNkVXU2bXFUZjYwb0MxUnVkbFE4RDlkQ0txNjl6aXBRcStGYXJXaGF5WUVtaDJoVTgwNGgxUzl3amFGaW9KMit0czV6YkcxdTQ5elo4NTlZVzcvNVB5VmQvV1Q5a3QxdHIzTmZBT2RQLy9rZk96ck94NTk1Ni9XemYvVDYxWnUwV3oxR1pyMTU2OTZuN2RTdi9adE15Y3picG1Fb2JGOEpHYWRhUzByOWExcHZXM2pyaFhsS1dOdXAxRmNxVFpwVXpVZEM3eFFvNnZoRzBLSXdDalRDdDZKZTZoN0xRYzVWelBNRUl4VHRZVzE1alptcGNiV3JIbGthWklFMjJubWlIRnRiMnpqN3pybVAzbHk5OXZlU3JuN3FYb0xubmdQbk15OS9tdnM3L2YveXpWZlAvdWk3Wnk5U2ExMm1MV1M3WFJic2RuNU9taVBNclVCam5yR2JHZzN3N2VaSjY2ZDNXTndrMnVVdE5IS1NvSG5UZzQ2cDZvV0NiZ2J5TXp5VkNWVnFEWk1yT1JweDdiWFJsRlRTeTFiWnNXM3JmVFNHd3dIT243L3cwclhybC85bnp2UUg3dFU5Zk0rQmMrbkM1VStkZmVmQ0gzejkxYmVyRll5Vy9PSjJXRE81emVlNGt5QnRzRjM3U0tlODlwcHBrYmV0aGxwTjlaeHdLalQwaXZYOGlZbUNBVHgydHc4RlJBUlhpOUpVOW1HM2RXZzNEd0lwdGJOOTVHekU5cllaamR5dE14a09Ccmg4K2ZLTE4yNWQrY1c2NTdsYlpNRTlCYzZmK25QLzNyRWJOMjc5L05lKzh0cnhZbUlUN1czL05PSEUzZGU5ZkJCZ21DWldHT1JMWXN4c2R6NzJPOUhsZ0tEdHlWemV0enlaYkFpYlUxdmFZMExmSGliM0lGdkxLYlRpVkJVd0JXdEhWYktoRFl3STg2UUdlTXErTnVOM0NUbVIrSEdlUTBRd0dBeHc2ZEtsRjljMmJ2eGlaMEUvMk1hMnZTK0I4MTNmODRuazJwV2JQL1BsTDc1eXB0OGZWbS9vS2VDb2pERlArbERRYkFXWkJNajZ3TnR1b1NEVjJsaWtoWUt1bjdxVGV0bGFjd0pmVlhjM1VVZ3B0N04wVW1ITGZQNVJUZDdMOXByaTliSm56NlNjdjZrOWJ6bTBWaDRHOVhmUmxNcmlDU1dDc2xiRXJqdWJhdUtPUUhWc3ZiSjF3WVM3Z1d4LzIyZzR4THZuTDN4a2RXM3RQejEwWlBtdXR1ZmNLK0JRYjc3enFYTm5MLzc0amV1ckUwRkRVNUxyQTNzaCsvVkswMTVEb0I5dE42U3g3UVdqOG1ZdGJpYlBZZ1Y5WGJYWnpzYXZNNjBhMGNWNUhWRFRzN09QbFJ5RnlwcEwyUGZtaVFGbXFsMkdjdmd0ckltRm9XR0ZlUXNINmdnVEoydWxGbWI3OSsxMy9SaGpzTE85VFZjdVgvNWpWMitlL1ltaks0YzdkOHZyM0JQZy9NaVAvdUFuK3YzQkw3ejd6Z1d1REhyVmF6UUhESks3YW9FV0dqVThpclNEY0VMVnZmR2hoWTJiNFhnMU53dVd1eDBCbFhwWU9PdFR5VWRDRnE4RXZhcUlnbFFwWnVLV0VKQnEwNnhCSGpTdFJCQ0tmeGdISE9PMTRBUllYYjNWdVhMMXlsKzhzWDd4aCt2MzlKMEN6MTBIemcvL3NSL01kbllHTDcvNStybmpvM0hlT0czYWNwbURxRWZlZFVJZ3BHNDlZRndMUFFlS29lRU1UTUhVRmVGYUUyVFZNV3RxakZMNG5NTTRiVGFlNFlMcFlJMWlxUVpLSmVORzRjRlc2aVdFLzFabDlZSTJudkJuR2tNSXFBM0sxUTZZY0haSFRFVWMzb2R1eHVRd0F0eThjYk4zOWVybC8weGwrcm03d1FIZFZlQjg5cS84TkhYbnNzKzgvc3JiSHhuMEIrMTV5SVJZZnBiNlpKTU5vdFlaR2t5cDZXQ0tPczZrSkx2Q0ZMWHFLVWtsUEF0ck1vU2EybWN0Vkt0a1hiT2VHb0hnb0NuMG8rdkJYd21Rb2hqS1ZScTZQUHVEam9GQ3NpcWNWS1hHclNRaTFmZENZUjRZZGlpRWpGNkwzd2tBSTc0bHg0TkhiRnVPTVRueVBNZlZxOWNldjM3cjB0K2FXK2FINjE3bm9EM1BYUVhPNjYrKytZbXpiNTMvRXpldTNkb1ZBTlBJZ2Z0T3RuZlM2d24xMTFwcFhxcjJnOVgyOFlRa1FYaWoxOGNESm5CdGUzQ08xTXk1YW1STVBSOWlhbWZEUW8yRTZrSFVmaDI4NE9LRVNaQnlac2NEeFlWcFluUkpIampwM3RGb2hNdFhybnprNXEwYmYvTDRpYVBaKzhManZQREJwN08xMWMyWFgzL2w3Zm4zNVRLcnlraHdjeS9ON25XY1FKNjJkdW8ybGlUQXk5M3k3VWNsYmRPdE5hV2Nha3RiczdibXdWZkp2VkFkZ2FEYSsyemlhaktaSWFIWGxuSXBGbHlIZ1M1NjNUVDZPMzI2Y09IOG43cStkdUVuSG4zaW9lUk81VHQzUzNPQW5ucjJrZC8zK210dmYzZzB6dCs3Q1Q4bWY3QnQzZGxHVEV1eTN1Nmh3bEN0V3B5a1F2Nm0wdVlTQWtsMnc3UUpQSnN2TWxiRE91WEQya21VYzZpc1Uyd3dDRllSTkhKVnF1UXhjRnJVUmI0VWFoOFVjME0wK1ZDcXZTNXkzc2lmL29ZSUJJYUczWnp3N3Juei93bEoramtnK1FydXdNYUV1K0p4WHZySTgzTmJtOXYvMmZXcnQ2aENXYUs5dUZtMmFiU1ZScWg1Q2s0SjlaaG1ERnJxU2RSdTRLNkhNUFZRekkxTkZ6V0s4UGxyZVZ3aDdGNm4zR3R2c3Y2UzJtWjlmRzliMk5EWjl2TnQrWml2a2FDU0YxWE8vZUM5U3d1TjNCU0NySzVmck9aYjlUS0VQeTdxS3hzckd4YzhLUkF5YmNZT3YrWEdibW5JOVJqWHJsMDlmdjNtbGI5T0xJdDN3dXZjY2VCODlxLzhOSDN3STgvOHhYTm5MMzVBakprNXNMaFhUa2x1OTNGRWsvdlhhbi9TWk9TM1hJREpmV2lWeEo4bWU2RlFRbGNtZUw3S25wMDY4d1dxTUc3ZVN4RENib0VTUU8xakg4MVI2Z2FJNm0rME1tb3RsZFdOWVcwSFlxQ05nZFlHdWM1eDVkS2xEL2ZIRzMvZ1R0em5keHc0bHk1ZVBuYjkyczBmVzcyMVVZbW43L2Q4WmJxRTdleUVRVWlwU3IwTlo4YlRvWEZyaFI0T1ZFbktxL3RMcFd5Sm1iRWdLb0UzNFhBSUxSQUlhUTAvQzZVY2JtNVVhYXZYTlBLZDZ0aDFHRG1FMTg5L05FVW5nZk0rb2VpSC8vdDJmeWU5ZWZQNnA3a3pldmc5Qlp6UHZQeHBIZzNILzljM1h6KzdlRnMzNFh1V0w1REczMFBwM0ltckRTZDRxMForWGlqcFZIT0xkazhtQVNNcEU2bnpVUEhHTjQ5V3ZFUVFidFliTnVzZVdTWWRBdzMxbldhSTNTREZnK3RtM04vOUp1OHdkTk02TDhZU2pOYTRldTNLa3h1YjYzL2lBeTg5b3c0eVhMdWp3TGwrN2NZVGx5OWYrNkcxMWMxYUR4WWExR1FyZTlQV0liMUhQWFhaeTRhQkZ0a3B0T1JrRTU5dlFtT25NYnFkUWF0ZEI2N1IwdFFhVGswUzJpZ1ZidXFDakg3aXMvQW1DRGRtVjdVSnFnbDVtZStFVTZHT05tenV4Z20zdmdGUVJkOGFOZUFrb1lRVVVUREtFRTdGVGlaUkNzL2pQVkZBVzJzbitLRkZNQm9PNmNyVlMvL3g2MjkvOVpQdkNZL1RQVHprOWZXTlAvUEs3N3loR3VxU3M0VDBkOXZxbWdSN25RaXRkempYaHMvQ202dGV5MEhRQ0JwMkl3c21yYXZhUFJtMFJCWlByK2NFaGRLUXRhTGFDSURGeVN5a0NSV0RiZFl6bUlKSXFIUTcxT2pwdGlFNDJqWERMTDlNRUFiN2tNNnZhTXlOd2VxdE5iNTIvZHJQZGc4UCthQzh6aDBEem4vd0gveUhqMTI1ZlAySE45WTJHeWYzMUlUNEhxQ284cnIyVTJPcWdhWis0M0V3MEJZMlprNjZFZmM2VWwxSjNOSGNWTkFrY21sbWZleFpEeDJtY2gxSU9KMWE4VGd0MFVNemY2b0trTFJGRVBWenJkS0dFM2dnN2NpbzhYaU15eGN2L3k2ajVkLy96TXVmcG9NQXp4MER6dmJtemcrZGZldkNvcEVxSlh4Zk4yNEc0YVJNamRPbnNHd3RwSUtFSVVuYkFrRG5oY0tSNmwyWnR5a1VmSEVtK3lSYXBvZVhZZmVBMURmUjFic1VwdEIxYlNGME9GbGFYUUZQTGVRQ283bkdwTzFYVmRWd2ZQNVc1RHhCN3FOMURpT0M5ZlZOdW56cHlzLzhwYi8wbWFQM2JhajJrLy9KSDg4Mk5yZis3T3JOTlZ1b2FrbVNHem5OZnNLamZTVG4weHcvSnRTWVdvRVVoQVVWcnhVcTE0U2oxclYrTlpIMnJkWGUxd2hrY2hnWWFnM1UybkFhSDNDZ25kYTZRN1JkMXJPaXlsbm1SYlV1aGdvRlg0TEh2ejgvZHlQQkNwVm1KM1dWZ1d3cWFvZmtSZ3VkYll6OUtucmFUTkFVcXQxR09OdkxkdkhpNWRPcnQ5Yi81RUY0blR2amNTai9pZk5uTHkzbnVaNHBwZGh2aEhSUDZlb0ozb2htOEFyVXNtY1UwMGlIR2RPek1Qa3ZibUt1ZDVuWGFBNC95OU1BdVduUXdHMzVFak5WQk4vdDcyR3c0dVkxRWFueVpVWE5xTG9IaUtZV3Jjc2VON3ZlM3JnVmpNWjl2NlNuN1dOTVVTVGQydHpHbFV1WGYveW5QLzJmSHJ2dlBNNW5YdjQwcmExdWZ2ZjVjNWZwZGhVMjMzZm1xZDZhZk8zTVAxc0xETU81L0dvWVBLVlR1eTZmSzAyS0c0MGRPaldRQmgzT0ZPekhDVU9wU25oWTZ4eW5GdDJvMXBTUEpuYy9sSFMwcDgwRk1INjR6eFM1WkNuMlladERMMSs1ZW54amJmTW5idGZySERod0xweS8rTkVybDY1OWFqd2FUenlWdjZHeE04Rjd6Y3o0MVZkNUJBTnoxYWVyeWtJVllXQk5lN3JvTkRBeW5hSVBRclh3eGpjaTFkOVp5WE80dGtXN2JSNm55VFFDazBtTGtCQW9YcE1IQ1l3RER5cURieEpzUXhnTng3aDFhKzJQL015Zi80dW43aXVQczdteDlXKy8vZVo1bGxEc3U5RmEzMlRUUXJYSlJzNno3d08rVGZDdUpXZlo1KzlxeTRGYTh6V3ErWXBnZTBCWWhhK0lwcy82ZWxxMHprcHB2ekpCYitLMDVwV0NCTjYzNmRleUhqdjF5WXcyT1d3NHZlbXFqc0h1QkVhMWhrZU5IS3F5OWE1QnpoWHo0dFc2anRIRjBHQkJHcGhTcSszSzFhdVBiV3hzL1BDdi9wdGYzamM5ZmFEQStmQkhYK2pldkxINlk1dnJXd2RXVTlrdmRrUmt0dG1kZzBpdTlsanIyZGZ6MXp1bXczLzJYY0pFbFR5R01EM3NhWVpKN2RyT0VqUjlGdUtIWG5DanhrZ1dPWHR3Q0ZTMlh1L2o4R3ZRQkZVTnc1clhrV0pWUEFMcUdyQ2VaNXpuR0EwSGRQbks1VC85emQvOFRXZnVDNC96OEdPbmYrRGRkeTR0bXYzV1FnNklWWHRmenZ0TXU3bGNpNHdKVjJqVWhEenFlWVVkTFpoQjh3MmxRS0VQZmFpVzZJc0FKaHdERHplMmhUSlY5YUcyZllXM1VtSFp4SHRJNDk5dkthTXJ3Y2kxTmtHSEFZQnJWNitkSGd6N1AvcGQzL1BKZlhtZDJ3Wk84TXZVNnEzMTMzZnI1aHJkRHhUWlh1c3c5enVwZ0NudngzdWNocmVaeXRDVlBXc1ZWcTVPU3hjZ0s4ZG95dTlKVURlcEtpRDRIVHRjVyt0ZThTUTBTK05wczY0anRXblQ2dXN0d1ZOSVRFblpZZUE5VDY1ejNMcDE4NC8veXVjL2QvS2VlcHlubm4zczhPYm05Zy9sV3JkU3FqUmhtVkdieWswOTkybWpybmR6VG8zZU1yUnJxMDNxV0pENmEycWJwMEVnc0I3cWpnVS9GL1p1N1JwV3V2K3JpQURXenRsRzVPWHpwZUFFYm5RYmUzNGdhTEdwaHo1U1h5dFBYTmxBQUtuVmNOajJUQ3Btc0ZKdWs1dHh5NFE5b0VObEdqZTF5bHliZUczTGY4TFhVbzRVTkhRb2pBQ2lRVEFnTVlEUjlrc01LS2psaU5oUmE2c0lhbHR4ak01eC9jYjFNeHZyVzgvY2RlQ0VydTBETHozMW45Kzh2cW9JdFBkVHZuNVQzdXZPZ3BxSWVFVkVwQ1ZYb1VxUzNpQi9ENFNKbSs1ekFvbGFxbzRaU08yRzl4Nml5Uzk0WWZWU3NLTnM4cHpNQ3BxNnVId0xlYUNJQTYzcFNmUjJTNWc5b2NHMTFYa0czZ2ErY3lBZ0RzSlRWa1JndEVaL1o0ZHVyVjcvbVZDZllOWnc3VUE4emtjLy9sSzZ0cnIrbllQK0lIQ05zN0ZCOTZ2bWt3UUpyMjlaQjdXSlZOUTB3SUx3eVlzUjNvdFgzN1psenRRM0F5RHMvUkpvYVc4cERjVkJxZ3FrVmJVYlJwVzZMbTVTRDlSV3NxYTViQ3ZVRnRpMXUxMnE3N2hCRGtDS25BZEJYY2ZUMHpkdTN2ajJkeSsvOGVJOUNkV3VYNzA1djdhNitaeHhMNWozYzdPRW80djNPRWVTR290Vm5QZ2lrN3NGSm5xY2c4dlhwdTFxQ0JOaXFVZkNFd0Rodjg5TUU0cWRrOStOVEhoRlREWFBVaHNucDliRm81TkRVcG5oZnBDQWxxNnpiQWpldjhEWGRFeHhpR3h0YmZIMnp1YlA3TFVnZWlEQWVlN0Z4Ny9uMXMxVnFsL3NpV0p6c3dKb2dvZXF0TUszZk8xR0VEUnV2MXJDNUVPelNnNUQwNHB5MHJnaEtkQ054b1R3WTlhRzEybzlURnJETHlhR3FxOFZtZkVRTWtaQVRNMmZoMS9wb1FyUDZic0VtTG5SK1N3QXRMRnNIWk9xdFFJMXcxWUNhazJtVkxuMnMxRHBCU1ZkVjBndE9oaEt6MVhxRkRnT1VHdm9YT1A2alpzZitUUC9wejkzL0c1N0hCb01SdC9YN3cvZk45bzFsYlVnclczL2FJcHFoRGZySFE1REt3ZFNTMWR6VzRvZ2xRRXlhUjhyOEROQjljT3VwZnU1OUdSU3NHeGx6Y2JsUnhNOGNIMmx5U1N2dUorU1JwVlZjKy9jbE4rdkEyMmNqN0YyYS9YMFlDZC9abEwrZmtlQWMrTFVzYm5OOWExUFdqYUZLbkhwKzlYcUdtUnQ5SEQ0TlpGRjI1ZTRJbFg3d29Jd3hCVE5tTlc4UnNJN1poby9Vd2xuZ3J3QXRUbVkrazNrZXR0NFgydS9wSktoN0NlYkUxUVQvM0kzVURrcUhvWncvbjNaZVIxQ3Y5K25qYzNWLzN3dklvYTNEWnpSY0hSaWZXM2pVWm1ocUxYbmtHMWZQOWlNeUtubHBwOVc0NmswNEUrWVA2bmMrQ0t0cjNWZnMwZlRnQ1MxbXl6MEVLMkxGaWRmbWNZR3VOYWtIUTIxem9ua1FUZ2E0QVZDd255clVvdVNYWE1YbXNZRXRIeUM0UTdSaGpoS01RWmVobkMrbTlxNEF1bU5temMrY3VYRytZZnVPSENjSytPbm5udmtSN1kyZDVoYUdCQUpXOUp2SjJLWlVMaHBqQ0R2OGdISWJYaVVDZE1zRTRFOWFTL09KRkFKMnQ5WFJWKzUvbzVhTnFjVjE5MUlhK01uVUJWWXJ6TnU1ZXV0OTdXMHJORnlyODBZYWFHWHFSamRua1l5b0ZEZ2FhcmdWS0FpVGxwTURGaHMzWVlLV3IyNlQ3VWtCMHlscGxQV2VkejcwVGxJN1BlMk56ZVh0cmMydjNWV1ROeXV4MG42TzhPUGE2TVJMYndYZUNxWTIwQVNkaEhYaDl4bzJ1aDVwVXM1Rk5Zd2UzYldwclZyUUNydnFkS0E2cmZTRVNwN0Z5d29kWlhDYnN3ZFlZSVF5MTdEUFdtRXdFM2ZWTzBtQ0NXbC9OZG9PS1JyTjY3OXlhTXJoOU5aOHB6YkFzNng0MGNYK3YzK04wMXNTVDlRaXZqQUIwVHY3SXYxSHFHRm1nOGxiRTBoVDB2VjZjOXdPZFVNdjZ2QjhzNTQ4NVc1elQ1QzFvSitibnZPb09FeThCNk5UclcyNFR0Q1U1dHRXbzVUQzVsRDhGUTd6dEdlajdvcmNPdldyZWN2WEQ3NytDd2t3VzBCWnp3ZUw0d0c0NVZweDlxZDFoZllMWStRWGVQbXZaNXJlNkRVSitRczRVM0l4THYvempCSmI3bk53N2FlQW5RQll6VzlaVTJtVit2cktqY0JNQ3JVZUtDcTZZSGJlS3FXSEhDMzYwaFQ4ejVwSy95VTExaWFqRnZvZFlwTmIyN2tZR2Q3YzM3VTMvN2RkeXhVOHlqTWM3MDhISTBtM2hoaGYxckRVK3ptUWdxTk10bDNKNDVNQU04c0FucHRqNXU2dVRvODhZeHBqRFJXZEtKbjFLV210cHRvUXFnbTBnYUlhclcvT2c1ZGhtZHRTNEFib2gwVC9CSk5VS2hwbmJzS1F0bks2NnJwQ0xUamhLcnNvTFJ3aFUyM3U4dGxybTVBMEZyVDFWdFgveFJZRHQvSkhJZWUvK0FUdjg4WWVjK1ZiK3ByOHFRbEpHa0ZVVXRsZmxxTzAzWjZ6MVR3ZE5wa3MxTDc5WDJmYldQSXJRcWVCU1BYdk1GOWFjR0xLYmF0YjU5T2lQTHNPM3BBTlUzdHRvaEZLZ2RDSS9ScVlRajlvVnVYSVE0cGJLblJDemR1WEg4aTEvM2Z2UnMyYml0VU05cDhlTlpZOUw1SzNpZXdaZldUM1UreDdtczhJUXpWZGhHZ2tFcmhzY3h4ZGg4TjJDVy9DbkltYVZGU2xiYWJNeVFaQW5CNTcyUk11eWVkaFUyZmZKM2FldGhyK25BTk9oNnRYZE9DSnIxZTZoU1VTVjA0cytSWlNDT0M0WEJJL2NIMnZ6TTMzNXUvVThCUjYydGJoMFJtdjZudWRtc0I3ZWF4dytyMWhNZTI2YVh0aWZNSkZrWEpMQmVoMW00MHF5QmgxYXRWRlc2OGtreDlqYUdYN2pKK0Jib09DcC9CMHQraVlSWEIrcEFwbnRkWDdLY1BOTktlNzR2cWVEcmd4N2tEUllRQVBGWE5OWkdXSTBNUXJKRXM1WXV2WGIvNjNHZzRPakx0OHU4Yk9IUHp2ZDVvTkQ0OWFWVkVlSkxPVk1lWldLdHBldUpKTitqMGoyZDZvazhUY3AycCszTENYS1RXWTFmdmp2WVNSWlBDTjYvYTBucXgvRHpNQk9pVzc1MHFza3VtWUl3UWVCR2ErSjdDMWVzbERhMmExNTZvMEN5VENXZVJCRFdXcVlYT2FmdC9VQzZQcXZBQjllZnpDeGJjVjJXVXdIVkNWTitFVk1jMGlueGFBeEJzYlcrZUFRYlAzeEdQMCt0MUY1WGlKL0ErNlZDVC9UeVdKbThRQ3dmQWlodTRIbFlFQ2l4RldMV1hXS2RGNEwzOC9WVm1xNUVyMU42UkZ3MlJjSmFsZHBRWWxHUEtqZk9qSmsyN3Y3aHROdnE1bXN1MHZGSnBFM09VeWtGZTJSNVJtUlFGTnRiWGV1dGIyeXNIQ2h6UHFBMkhvOFh4Y1B5K2swemI4eHo4SkxxNXRsV1ppU3RkeGxLaFJ3TTZlZGVKVVI5K3RIdFpDWkppVkZhQTBNenZXbEROQWJ6c1V4bTY2V0FGdmIzaERDcEgvZXg2Y2ZzNDRPcHI3TU0ybTdiNmw0UjB0RFREdDVDRTBVWmpuSTlJcGZKSkFPckFQYzZERDU5NmZwem5lNHUvNzdGSG1UWEp2OTFYM05ZS0pKUGkxWm8rMkN3bmRUa0czV1RwQ0M2M2NUZFJhNTdSMnBoYXNtZlQ4cmo2cHJZd0lRL2xxVnBENnludmYxb01JQWcxbzFIYi9yRDNTS0tja0sxdU9RZzEyRlpYVng4QjBEMW80TkRLaVNOL3lJalF0QUxmUkoyQkdWS2N2WFFKVEFwdlpBLzVWRDNIbWNab1RWdTUxNzdUcDFvTWxZcEFJRStlODBHOUZsVmQyNDZHSXFlRWMxdTFVMy95NTJUbjhhV202MTJWNmRYQkZtMXEyWFpkMXhBSVgwRTRBUnBTNDd2bW9rMGRLUGVXSldDbmQ2a0ZZbEtOcXZvU3dzWlRZd3dHZzhFRGFaWXVITGpIMlZ6ZlhMcWZ4d2RrVXJKL1YxK0VORytFbG1zV0xwVGF2ZlZsYjB4NDZRRm11eEtWZ2E5dzVid2pITXI4cHRybUVxckpTRXZJNUp0T1RWQWNsanJRNWFBdWV6WEhrWHE0VmptR3BOSmw0SGNnYkcydlA1Mm15Y3FCQXVmNGlhUHBvRDk2Q1BlNzNTdGdWOXJabTFLdEV6L29LV3NCcDdYd1RQZnFiVDVyOXV2bWk0MFZHU25ua3puSTEwcDNFSWlpVDdvbTdsc2xpUFkvanpQUmkwNXNJNnA2dmRhT0M2T3h1YmxCdytIdzhLU29kVi9BU1pLa0p6RFAzMjhlcHBISDNPWWN6MEhtUXRRaVNsRU5hR1k1UWR2N2p1b3JRZnpEdVZGY25QQzZxYXFqRStZcGRpRnVpNkFHQkZxWFU1NmxONUxKNlV6QWhGWGxldEdRbjlydlowWE5zeUtNOUlxRXFYeWNCSk9qcFQ3Y2FEaUNHQnc2VU9Dc3IyMGVHUTdIMk0rZ3pWNUVjQ2JsTUcwVGxEVGxhMnI0MUJZV1VhM0lOK1ZGVTQwQ2xVb3VRSlVSZzBrTnFaTUFWZGZlRG1zaU5DVjdyM3FHM1crMGl2SW1ndmwvOXoydjFCa3dDWlhSaC9vSzBYQ1BUdjAxbEtxakpxQ3dUYUVGVURCZXhuZFB1QytDbThHUkJ1QmNJbVcvM0FRc2VWQVUzNU9peGxNMGpyb1pIYnNtUklJaFBEajFUNzEwa0tFYWpjZmpsZEZ3UkFmQlFCMFlqVHpseHB6Vlc3WGxSRFRyYVJEY0dOVFdPSFpRWVdkdFRuKzNQSk9vblc0dVFWK2x3MHNSK0taYTVxN0RxWldmUTJVS3MzcmdUV0c2d2x5c2ZtQlVhc3hTcmZyUHhBNUp1NmV1NVg5R2EvK2ZuWVAwT0dTTU9XMmNtNzZmd0hNUWVja2tSYzVkdzhJNnN6WVZxTlgvbStXMUZUeWNYOG5oVmZqM2tCZklCQkJXV0RrcFZmNkpYRXZPTHRWL1FaVVlDRGZGVGZyZDlXWlovMUJqcEQzQ3FOMXBmak5CSGRDVFI5MXJWSGt4M0ZiRnBpOG9HMk93dm5uOWtVbW8zQTl3VW1Qa3pQM0dxSm1RRGNJTWRaczY2S2ZJellZL0k3dkVsVzBmK200NXo2NDNQelZiVFlzTjFWTitabHBlVmFGckd3MmJWYUhCeWtZQ3YvbXNOVDl6clVOYWFxS0NkWEpDV3NQdTlxSWxLaDdXeU83OHorN2dxWklYSlRCTDhVUWpodFkzcnI4MENTUDdBVTRQa0pYS2habVMxSHJYYkl4TWJmdmFqUkRiVFJWbWFrNHpoZU9YV1dqazNjSzJ1ZzVDN2IvcnI3c3loei9sUGRWbUk4djFmUTMxbXVCR0NISWdhYW1WdEZWMm1ydFNxeDhVMTBRRlEvWnAwaVdXU2g3VFpMTEtUUUpWU3JwS253ZlhORlFlblhESFRieU9UZW9zeU1XcWd3WCtFQllJdEVXcE9Tamd6QW13OEo0Tnh5YVFMbE5ETjlRS293ZnlVdHdIVlM4MjFuNFgxY0NBV2xHNWJMMlIxcGR2NmtYTDRPUnRMS3F0cmVId1BXL1ZSYnBWUWZycWtKdXBQTGUwSEh4aGFPZUpnWHFocy9RR01uWFpsbFFZT1puNUZnaTdFTnBqY0JQa1R3Zm5jUklJNXQrTG9KRTIwTXhBODlFQkovb1VibWxHRlRTVHRsMkhOQyt4MnlTQTVxYTNvZ216c3BtZ1BiS3N6K09ZY0FTaUFCalprUVBUdnNFNzJQdFdPNzFyU1QrcVFHOE82UVZ0T2lJZ0NTVnMyMG94MHRMa0tiT2lKbUQ5ME9pMktNSkNyU2Q2bkdRZm56djNlcDNsU1lubis0SW9tTkJUSlhmaC9SRnh0ZEZUSm5VaWwzTXpCVDhtTFRRMzFSTG9Xb2dZYmlUZ1dwRTFISU11NmQ5QTJ0Y2w4NVg5TThXTmFTWlE5KzA2ZENMVlpiZWtHS0x6SXB5aXl2dHRlZ3ZCYkxsbG5jQ3BodmhTWEU2cE9oZHpFQjZIRjVibXorejFIcUtXOVlTNzlhTzE5VS9OVERlM1BIRnJmV2ZDSkdQNEhBMXQ2Rm5Dc0FrZEFxRjZ2ODkxUXMvUjJLZlRzaUVhMUU0cVZIcllndVErSEMyZ1dxTGNQbTVRZ2kyYytQUzdRUnVmSzAxcHV2VHYyWTFXVkRlbGhkZXFUTkNKZ0RSSkNwWVBZbHBlbjUyZGtRbWVjT2F6c1pqaGtRQWVGa0NqMGVDQlY5LzQ2b0d4YW1iV21zakJSbHF6UzhaT1d4ZzFrWUU2d0M3dVVIQmRkcUZ4SnkyZWt0cU5WMkhIS3lMbVZMblJFYXl6a01vVXBreWd1S3ZYMk5TRUI4TUV1aExzMXNSSndzRzFjQnhaYXF4V2NYZ1ljVXVmd2xwUEFGS0VERnF6aGVrZ2J6S3BlMm4zWGdmRC9nZSsvL2QrYjNwUXdHRnF1Y3Yyb3hwOFg0Wm9Cd0dnQ1FxZHMzakZNRitwVitYckQrWDZzaXVSaW9aMFkyaXVJaU5WSlFmQ1VDbk1IOWdMaHhncGdOcWNZMmt5WFExaUlDeVd0QjZLWmR1T01RYUQvcURjNlNuTnNXazVvSnl6M2tNb1FhNWxqS0h6Rjg0ZVdJNWpSRnEwZkdvMWprcDFlc3A0ZFp1YkpacXVIRXk3blJ6MTR0cVVFMllXUG56cXowK2h1aWQ5VUczRTZHVDJUNXBlQmFFQ2FMV1FWKzhCSzRBUWVpZWlpdGhTU1ZpME9SUS9RazBRUFlrS1pqQUJPbGlQSHVaUXRxaFlaY3Y4UFdPMFFXVS9KMnJGelRZUDE5SXNhL001TkVtWHR2dkpkWHJYOUZTQ3c2UVlMeUNUa3pvd2p6TlRxSFNiWVZscitETWphSURKZFoyOWdtYW1mNThTRmxMck1xWkFDbW5xYzA4bnpodkYxZ2x5c0szdmY4SW9kWEdkdWJiYnFGYnhEN1dwbTB6YjVFdFd3TDJvMG9kakNxWXhYeU8xYlFzaTdZbzk5ZGZSUmhhSVRMN1dVaFAyRUFqRzR4eVROblB1TzhlNW4vb0c5clNFNklEeXJUMVZjL2NDMUluTHE5QStydERxYmVxZXZkYnp0VmNkNFhySHRmTWtwWjZibE90Qk1ObFQrMVllcVhtWHFsNUJRQlQ0NzV1YURvTGM1cDB5OC9zWGlLRURxK1BRb0QrNDNuNTYzVXYweUIwRFQ3MkZoMm9TdDd2dHc1bjErYWUrTlpHSjhibXYzMHl1MjlTVi82ZmNmMzdZeTBnMTl4QUQ0NVJ0d2dUZS8xdTdoMjF1dnF2bVVrQ2xtVFNzNzFURUE0T1JBTFFYUTIvN3dHM3pFTnFBU0E3TTQ0dzJOM2JPaDFUM3BGYU82ZHBiazljUHRvWWhiVXI2bUsxbDVuYkN0RWxObk5RYW9sUkY3aWFSQTdOODhETEZpWmJyMmFXcWJMa2JwVC9EdGFnbnlpYVVUL0pzbUFuV2hJaFV4Z2lxa3J4QkowUnRraFJ3OGxYQlNFRzVCTXFHY0FSVFl3bE5sWDByV25qY3Z4VWI0WUs3dzgwU1VERnJFTTRXMUs2SzN6RHVja2RpZ2dnZFdIZjBrQWc3SVRCa1dvSXNlKy9lbGYyY0ZCT29wOTJVK0dsaVVqNDVieXRtYnR4TlU5ODJzQ3VqSmpLVlpac1lpcmRSM0MwZHpuNnhFeldhUTZteEtHb1NzTXIzR2l6d2NEbFB2VWV1YlkxSDlhcEpWWW1tcm9ZUWdOL096WWpkZlJQMHM0VUFLZ2JSSExRTnpPUUR5ajJtb3FWR2FBV1BvSnpuWVFCTUVHSTVzRjYxTFlCV3EzUGNkeWVQT2NnYVVlUDVKdlN4dFE2ZUJhczdabDZuZ2RzWXJLODNqWVpBQ0RUVXdwZkt4VnpRMUpWWXpmcEkvZVl1dXJDbFVPclpiZnRiVVlldGt5UWhkUzB5a1pyM1hzK1BWbGVqRUlFQXVCdDMzZkhESjM5TkQ1THhnWVZxUkhTUnFWU05wTHNBbXJ1Ukg3VlIySzBNWDNEUzB3eXI2VzhMTkEydkl0VWJOeFFyTCtvc1BneXFLdGJzVnZ1WU5HZzJxUVdvM29kV0FXSW96aEVlVm5Xdld1ODNDK2FCNmlIOTdWekMvZDEzTXBoMCsrMm5qaU5LOFRsbWdoR2FxUUZ5dDlDbjdURVRCOFFtN0cvWmJZQk1wajFIM2ZPRU5hbjZmNk82cklocXZWdUNDWE15dTdYdFNITmVKU1R1NmdSQmEydkxWRG1veVR0d2ZIOWNkUWx0Y0gybGxzbFNQY1BGMVBEVWgyRk1CTU1NYU4yZ2lNUE5hYnZINmkydnMrWGE3NVVqb2xBWXQvellEeXpIa1NSTnJqUHoxTFVYKzVLVTNVL0NQblVCN09TY2E2cDhWRWpaZXZyVnMyYTE1VW1Udk5MMEQ2ajhIYlFMbU1SVWU3cUlLR2lqb2RhM0dJNUxTLzB6OHVzN3doNHlNWTJEd2N2ZDJsQ1FLd2VWaUlHV3Btcm50S016VVl4dXIrTzJKMVMzUTdkOWxTRWJTbkpBMmxSc1pGZmc3amNDSWFLSk1ONlhXTWVoUTBzM2tpU1JPbnQyMEhuSTFCdHZWb3AzSDdUbDVNR3lVckpXSUZOUHJUdEZ0WWV6TjVNV04wMWw4VnE4VFQxTWE4ckxCcm1GY1NQYnh0UUcwOEo4Q1VGK1pQTXRwUlIwbmlQWGVZMlJxeDVqNGJKY0grNTVBQmt4amJ4VTlubC9UQTJwWFhpcmttUm4wbVAzQlp6aGNEUXdJaGVMcGE3N2tlcThiZlRRUkk4aE00U1BVNTg2ekZ1Qy9UYVZHUmhwYmptZVJDYTBlbGcvQ0xhSEQ3WCtPK3JDZjVOYTdhaHgrYXRETG5WLzRkOWoyRFVnRlM5SndRcVJxdWVwNTFGR3JJeFVmekRFY0RpeWF3T2xObmtwd2Fic0dvQkxzY0QyQmxOSTgzVWZ4Tm5GelBMd0E4Ly95d01GenMwYnE3a1l1UnIyNXU3YTVGbHJTNUVtVWJvN1BSdCswTFhXbWxadlYyK0YyVXNUWi9qNFNTMDJhRG1kYXh1L0lCUFc3azJqdTZYYWsxYlpaakJGZmNhUEVPd1dPa3BJQVJlSmZ6RGFnR3FkSnBSc2tzYiswU0JQcVErbVlUS0lBU25INmFYWnVsTXMxNUt5bHNPVmJNZ1MwYUR3ZTZXOGxKMUdOYVhrbFA5TXlQNGJVTkxkb1FjWDJOVXNBb0VRRFE4VU9BQ2swODM2YmJKS3RBc0lKbjFKN2M4RHlZdG04WEI3YU5LVW1WNlg3RjZyYVdPejZyZHZTeCthN0tMS09hbURTeVpFY3JZZmpSdFNoTVhOUGFFd2JienVHWnIvSHY0YVkweUZmcTRxelpqR3EzYmpjRFVCanhadk0xMFVDcGlZZGRmRFZDODVGWFJkK0w4d0E0THRnd1lPNXVhNjI5WDVDRG1RbWc0ZFZHdi83VkxaZDNVMy9HeVZpY3JZY1kzd2FFSlBXb1UzbWprTzJvdllRVnVNS2NJb0V6UkROcld3RzNXeHNOY01hQWh6VkZZUit2ZGc2cFIxK0RsTWxoR2U5SmszUkZFcUhRNVYxUVVpQmpOREJFaVNOQ2ZDelVtL0k5bnZSejIvTUxmTlFTVzdvWDVKTlBVR25yalIrYUNhSjk5VG1tODBJeWZVRXJZR0xmaHM1UzVobDBpWW1RaUhpZ2k2eXovcTNpc3NkSWZqQmxMck0yc2s3T0VtdVhwOUtCaURMZ0ZTMDV5Yk1EWWVodW15cDZPcFRsbFRWU0RZM2MvTWhGUEhIM3FYV1YwOU1GYnRNeTkvMm5xYytkNE9NelY3eTJyNlpDRzdnbDN5R2FyOWpLQ3BmU1V0ZWMxVWdOUTlSLzJpVDltVk9HbnFsR3IvVi8wd2FTcDlUdlhmRjk1QU1wdXFjUDJmbVNicHN6VWxmTVAvTmNhMEx0U1Znb0ttUWtlZ1JSS3dNc2ZTQ05Pa0thWlJUcTgyUWRTZythWHRwdmVNRis4aFh3emFoVUxpbzBLQStGbWtNa2RpeFgwQTEzQ0FCVkFBa0RSTjNrelNCRnFQSnA3MmsxZ3VhZXMyQ0R4RXEzZWFwQXBaMjN6VzZBS29OV1hPbk9kTXlXOEVzdytxTlhLTnR0ZFkrUkJMNnBXSks2SWN4WUZTazhGdHZvMWdRdE5VUVdNcWUxa0o5WmxFcXBIRHhnUU5ucjZXWXFvTnBnaTdtRTFKSnBqS2lrQ1oxbVV6ZVNSNlZuWGJDV0YvS0xMSWpSWHA5VGxZQ3kybGxDd3ZIWGtGd01hQmt3Ty8rUnUvOHo5bVdXYXd5Nm05OTBpL1BZeXJmSVV4OENScWtxaTJOYXhaYjVvNHVpeFZkbXptekswbTB0aTJpRmNhb0drcHhVcFl0d2pxTmo2YzBLYVNjNVI1Ujhra1NTaGtRVlFaYzBaYkViRmVHQTVrY0N0SG1HT3NUR1d1cHBxblZNWUNpdnltN1ZpcDU4WE5xYy9LN3RTYTk1dEY5YVZzdnAzOGtWRlF1eUd5NjB0Nm5ia3ZBUmdjZUk2VEpHcW5rMlhZYkRrRkdPM1YrRW9lMDdLQ2I5SzZ2MHAxdlJiMnRWSFY3YWQ2eStzSmM3TnA3QmhSWTVYR3hGTnd5c3JDU1kwK0RXOVpuTkJoQkY1U3dtYmlqcDJ3djZ2cUpVMjQ5TWtLVURkSWdYQzJCMTdxVnFhZjg4MmtuOURRSUFnT29ybytXelYvcW81bGhDc1M2NTBOc3g3UXM5WjJLT2c5VEpJMFQ3TE9sMkNsZEE0V09FcXBvVXJWaGdDSHlNWEx6RnpMVVVJSEdQUThrY0NRWDAyZXVQcEVYbXFBMVFJMnkrQnp5MDFjdW5lU3FzdjFIeCtKL1hraTVUNVRBMEE3VHQ5WTVwOFlRdXh1Sm9PeTA4SXVpVlZHZ2NNclQ5VndSZ2sxZFk0cnhjNW1ERnJjWkNLQWhOV3dNS2N5N2lDaW9Od2dZRmV2TUVYb2hxS1ZwYmdXN2s4NzFjTHV2ZVRCaTBqY1h6VkV4cTFkUy9ZRUxxV2RXdTlYZC9oSUlQdGt0SzRNb2RVUGlNb1VhT2dGZ3hVY1phbktBS1RMZktsRkg2NENBSGNaSy90dmFzang0eFpFWkQ5WDM1UkdEQWh3OU1pSkM1MjA5OVZwNSs2K2dYUHA0dFhOdzBjWGYwT00rVjVpQml0VlhrUmpBcUZ3ZDZOekh4QmxiMktRTFd6QjMvQ3FqQnBiczMwQk1BcnUyK29IUW1CQTBtWkVVVHhKRHZoYWxoOXNRcmxwRENKUXB1enBzc2syQStKMnVTQ0RDV2MycVBUeDltYzg0Q2dvbXBnUTExWDJxQkFLdEord3FSZkZHNkVjRnhNbnhsMnZZSytaQTd6M0ptVXVZMStPK3dXa0FkSHVSZ1JBdWtqV0pTUTlxTXhGVE90S2p0MGtyOEpsdWxLUmhZSk1XS2tvWWIzSFZHUjE2eHU1cDRYTlpWY0hBdVRRaEVwVHJTSFVIN21Lb2RKazlmQ1J3YzNOalJRSERod0Fadm5RMGxldVhMNzJ2Y1hTVVRGZ1ZxMlhNa2NYQkFhRDdZMXVEQmgrVVpDeFhiT1lzSlhMS0FCcDVma291RGdDZ2ZCb1dueUhTcCtCNFFvd0dOWFpKaGIvNy9ZdTFFbnVQS1QxVmpZbTlsQXlNSnpCR0N2NHlPNkpLQ2p3K1d0VFZLWmR5RUxzNldCVWVzUUtQVEsvUWx3NE9ESUFFYkxEVzhaKzNBcGNnTlhWekNGa2N5VENHTVRqNHIyTFlaQW81NG5kbzROQ3BWL3ozbUMxd2k2Q2NNd1pWVjAwYVpPWXJYdWZZR28wWkM1SnhEYVBPdjJDUm5nb2JVRzgzSFovWU5FVFN3VEZTZzRmUHZvUE5qY1dCMU5UbGR2NWhiLzFiMzduNTVJTy91MXhQbjRrVFZKMHNrNXgwbEI5dWtVbnhXa3Ria3JSd0VEWWpUeklYT0FSYWk2SGRSQnUrcE5WZ3RBT2tHSWxmUzFtSjlRMmNUWHJKb2JHRUhZUE1zWUZSOEhNb01sQUh2QUVrR2dIT0E4S0RjbzFSTFFOYTB3T01SckdqR0hjOS9OOERKQkE1emtFT1l6b29zaG9US21GVnBDbWZwdWJBTVlEdWRqMnpOWnpNMEV4UXpIQW5OalhTd1N3QXJHeWRMS3ZrQ094UHllcUNORU14aEF0RmFiTmJpQm8yMFJYRDdkbUlDbHJ6SnN4NWZzTlRrWHJGL3dJZGJqUkRzWWVNMTdOczRWeXJmZlY3VkdESkZnLzd4bzdXYUdUZFg0RnV3aHYzaFp3aHNQUk5TMzhEMi9ldXZialduUTNZWVZPdDR1NTNodzZXWVpVS2Fna3RSK3VBUmk1QTQ0Q3FBdERDaG9LSU8xaVRYdWFvcGEwUzdDUnk0WWFVanQwQ0JCbHc0eHdlMWR4N0dVZ1NkME43M3VWdElPR3dJZ0NpUUpFUXlRSGtFTWtoellqR0owRFpnUXlZeGlkVzFESUdFYVBBS05oWkF5TnF5QU1BWk83cnQ0Y0pEbGdqSnVFZExtS3NyZThZb0tRQWJFTjc3S01rS1dNTEZYSVVrYWFNRmhaRDVhUGdaMFJZV3Ryak8yK3dYQnNvSFBZTHlGb25jQ1lKWWd3QkFtSU1oQjNBYzVBbElLNEM4UExJQnBab0NrQ0pRTEZCbEE1U0JLUVpGVWlSS1NwYStZK0h5SXFiL3p3Y2NhUEtMUnBMVFIzNEJTUEZRT1lhbmhHcUlwMVlFcTVNeXhvMWt1SkJLcU5SMU1ES043VGVFWnRlZm53cGZuZW9hL3NTbzdkWnNsN094K1pmN0l3di94OTY5dXJ6NDN6TWZycmZheXQzWVFpSUZFS3pJUk9tbUs1dTQ1dVY1QmtDYkxzRUFpSFlMQ0VKTzJBbWFDQ2VvczBDbURzUHR5U05yQWdjZkd4RUZnQzhUM3lkUVJBdElhUmJZaU1JR1lNclVjUUdjTG9BYlFlUXBzY3lQdUFIc0dZSVl3WklFbkhTQk9OYnFhaGxBR2xJNlJLa0NTRVRtYlFUUWxwSXVoMkdJa1NwQ1EyQkdVZ2NSM1VaTGowU2xBQWxXSVNwQkFJblF0VUl1aDJnQ3dsSklvY2VMbmdLTWRDTU5LQk5vdzhad3hIQnVNY0dPVWE0MXpRTnpzWWpZQ2RQckMyRHF4dkFCdWJnbzJ0SE1OaEJ6a2RCbEVDNWk3eVpBNUNYUUFwbE9xQVZJNkVOVGhKM0I0Y3JsRGloWUJGSTI5c3NwbVZwTC9vUXFpR2FSTDBubFY2MFJvRlllUGJJdmFsQ1UwdEpYY0tTRXF2bnhEdUtoSUJEaThmZWVYY3UyZjd6eno1Z1lNSHptZGUvalIrK3FjKzYybWZWeEx1L1BKQ2QrblkxbURqV0VJRTBXUEFhT1RqRWZKOGpJM1JGcktqWDhNVEQ2YzRmR1NBbERPSVdZR1d3OUNjQU54QnhtZWdXRUVwWmQ4bUI2N1UrdkpDdDh1SWhzN0hHT3N4akRZUXN3UEdtb3ZwM1kwSkRhTnphSzBoR0FQUVlEWlFwR0VraDVJUklBWXFBVEt0a0hLQ1JBR0pFblJTalN6TGtTWWFUQUpSUFJjbU9hRUlNaUMySHMzbVJBb2l1dGpRN05aREJPdjVjdnR2VGdmQXNsQU1jU0Vmc1MvTzJaQ1Vhc1ZlRnZ0em5uelR4YWdEdzVDR3BoMG9sY0pvaGpFWnRFNncweWVzYnlhNHRUN0V0ZFdMdUg1RDQrWXFZWHM0RDhGeHNEcU9SUGRnQ05Ca2dEd0hrZ1NLbXNWRFU4azlxV2p6OHZsUTJQQlpOSUg2dk5kSVRSWXFrSndDYWdLREFYTW1MV0czekpxelRLR2dxZGIvd1ZUMFJ5Wkt5Y3JSMC8vTDh0SXhjNmM5RGdEY0VwRi8yc25tWGhTU2J4b09kK2JCbHY1a0FHSlM1RW1DL3MybnNYMXBBeStlM01iaCtSMG9mUlBBQm93YXdLZ3h0T3BWRkNLNXNvRFd4dWJNNGZpdWwxcTFIa2RKeC81YU1oQm81MzJNL1creDVBS0xmVjRXQUNZRmllWDRSdWtJWTk1eG00MEp6QWxZTW52YUFVakUySnVjeXUzTERJYUJzV0ZGWW9wa1hSTlowS09rYUVXRllZS0FXRUdFUUVqY2grY2pJWUZBdzdZeWFWVDIzckpueXpTMDAxQXpCQkFVRXIwRUdDQmhEVkFPcUNHNnFjYlJaZUNKa3lsNDFNRjJickE2MExpMlBzYWw2emR4NWVZNjFqZTY2STlQZzJnRktrbkFyRng0dy9ZNnNVQ0VvYld4bnRtNlNKQ20xanBOMlZaVHJ3bExUY3V0Mlc1VUNkbkNVUWJzclZGM2xycE5SVzdFc1k4TXd0emMvQ0JoOWZXMkZyTTdBWnd4Z044VUk3L1V5K1pPTUptbngrTXgyUk5MQStnQ21hRGZXY0FyVjgvanhMc2JlTzZaZGFDWHdaaDV6T3NoRXVwRHFHUGZUTko4azRLU3pRcHBhRGFXQ0NiM0lSYzNtcEZLSGtSa0FCbGFuU3l5dVFFbFphV0V3RWdvTFMrNEVSam9JblRNU1NvRGJjVXA3RzR5ZXpoU3NXYWptSjhwbWk0bFdJRnU2Zm9pVkNEN3UzdzhYdmEvY2JDV2c0cXVZUmJubmNRaVIyREFyRjF1Q0V0VlMyTEpEQ0VnWVppVTBRVndhcGx4L0xqQ3M0OHpSa1BHMXZZUTEyOWN3TmwzcitQSzZpRU16V2xvTllkYzJldVhzQUxZZW0weklPZ1J3V2dnTndtMGpKR1RjZXhjRXlobGc2Y3Z0QnBMUEloMmZ3cEk4c0Q3VUhFa3VVL1ZYaTh4NEdKMW95bExZcldGdW1YZm5KUmxqbUo3WFpWMkxuSWJpTXM1RXdnRGh3NGR2WERveUlsWHhxT3gzQTJQQXdDM0FQelBSdU5NdDdPd3JOVGdsTUN1dlRaaW9BQ29MQVA2eC9IS3hXMGNQV1p3NG1RZkhiVUZFZ1dqRndCRmRlOWNDb0UzK0RMMzVsbkFVbnFnZ3N5aHBoSUxNUlVhYUpYSG9oa1RON3ZTZ2xYaElhamRwQ2pWbnFmYWpVQVZJVHdSQVZmbTZxZzVMeU51UzREendNUTJjbERFTmhVT2xHMEVDa0lCTUgyeDJQM2RIemtXaEFvSkthU2swTzBRRmhjVG5EemV3d3ZQeitIcVpoK3ZuWDBiWjgrdllHZHdDdHBrRU5pRFR5a0FQUTJUampBWTlwR1Bjb2cyWUplN0Vab2pBcWlGYTgyVmhLWTJUQ0ZvMEFvU0RLaFZYRmF6TzVxbzVuVWFkWnp5cnlVVFI4Vm1iY1dKbkR6KzREOGRqOFliczl6dys1N0hxYmt3QWZBdWdGK0E0YzluYVdlYmlKQWtDWklraFZLTWxBbnAzREdzanA3RUsrY2V3dlo2aWtSdXdwNjNSMXA3am1RR3puTXZ5NmIydXdNblhHbzF5MWZqSWpNRitVM3orY0xjSi94NzhYeGs4eUF3UU1wTmdaSUxtNWhCcWdOS09wWkpVeDFBcFFCbkVNNEFTc0dVZ0NrRnF3eEVpYTM4VUFxbUZKUU9nZlE2VHA4WTRkcyt5dml1VDJ6aW1VZlBZWG4rR3VZVmtFa1hTdWJBbklHekZMM0ZPZlFXZTBpekJFcWNkd3o2QXNONXFzcDZqNkwrVTlhc3dsSHBjdXpBTkhyZ0dqb0lBWHRXZklVQkdEVmp0YUpuTFZpNGhlSWFLdlI2ODROT2QrRlhBUXhuYWpuRHdWa080S3RhbTcvR3drdHBrbjJiMXZtOFRUWVZTQWhqTXRCOERKYzNnUFBuYjJDNWN4MUpkd0N0bHBzSURsbzVTbW5UV28vVGpLQUliK2g2Ui9DczdhZEZmaEpJdUdMQ1lwUDI3VUhOclhKdC93MVVwN1Zaa1o5R0RDU2JiQXNSZ2EyMEUzV3M5eUVCYzJLL1o4ak81WkRBdU04QVFUaGtrTmdFbjJ5MW5FWVp1bUx3eElrZFBMQXl3RHNYKzNqcjNDcHViVDZKalcyRmtkYUFTa0NVb3B0MGtTVWpiRzlzWURBY1F0aEFDeGVUbEpiSW9HSURkMFV3SHJWV214QlVNSTJtVXlLeXRiWFdhOTZrcUl2V0x2S3lWMUxVdlp2NWovWENSSVFqeXl1WGxoZVBmRlZyYlhiTGJ3NGFPSEI5TVY4d1J2NTJZdFJoVnZMTklvWnNsMGNDcUFHTUV2VEh5M2p6Nmdtc0hGckR5dWtCS051Q2kwWW1yUGhvQW1GYWcyYjkrMVFUOU51cnQybDRrRnA3ZWdqR1ZtQ1NLVUt2c0YySGdvSXYxVllxRmhKUGZndXlCNG1ROVNES0ZqS0ZGSWd6ZTFNb2RzVmJ0anMwaFFJcXVBemZiRDVtT3ljWVBZaEp3TFFHSldOZzFFRVhIVHorZ01iSjA5ZHg3aUp3OGRwSm5ML0UyQm5OUWN3OGlCaHBtaUZkWm16dGJHTnJld3ZHak1GRTBFRnphVm5vREx5R2hNMmRRYkhjTWFJbE9XQ3FUYW1WSGFSUzYwcHNZODJDejYrUUJ1WXluR2F5aHc4cE1DZHk0c1FELzBScmZXbm1KdWZiUVlsSHBLT212ZTBBK0dXdDVVSEY2cFNHZVlpVmd1VDJSRktrWVJSamJmd0l2dlR1RGo2eWRCR0hsb2NBSmROdnZuMkdYUWV4b3BEcVZCRzFkU2FITEUxemtaR3ZIZmdUc09KMVFrOHFBdmE1ay9zNTRkUzFCM21OZ05RQkNTRE9vQ2x6blFXV1ZCQVBNbGY1NG1KcGxPMDZJRmFXakFSZzBBZG9EQ01LaHBaQTBvT0FrZEFJU3gzQnM0OERKNDl2WTc2VDRKMTNGYmEyRStTU2dSV0QwZ3dMaXdxc1VteHVyV0V3R05qZlJZeGNqd3Rpb0Q1WUprRWJVbzJiZHAwRDJyYmNWSEtpS2VpWXpEa0R0UTNiaGZmeHUzK1lzWEwwMVBXalIwNy9mWGZ2M25uZ1RMR2JJdklQOVpqT2dQa1BhT1FQTWdrU25VS0lvWmt3U0E3aDB2WVRXSGg3QXg5ODZoYXllU2UyNTBkNXAyeHNPeWhBekk0Y2R5cld2TVRFaHpQWGI1Y2cxS3QyNXpxM1VSbEJyNFp2RE9IRU1iYk9vMURxUWd3R2N3WkRua1oyemJLR0NrbGNBVUhZUno1Y2ZySDFUSW5hdEpTOVBvWWNYUWlOQWRvQzZ3VGNQdzJWYldGbFlZeHZmcTZIby9ORHZIVWV1SHByaUoxeEJpUTlLSlZqY1NGQm1paXNiMjVnYTJ2RDllVlJkYlNqSG1vSFhkR2hPSHFwSmtxWVNUeUxabmxJQzZzR3QvS2VGQTRmV2ZuNmFEUjZOY3M2TSs5bzRZTzRyMXBpUVFQZ3JJajhBb3o2UEJQZkVocUNkUXFWOXdBa0dLa0VRenFLODFkV2NQV2l3WEE0ZElrMDN4LzdkbHFhQUtreFFZamlOWWRmWVROcWRYUzRKYmZ4TGZtT29sWktWY2tCSmloS1FPNExva0JRVU53QmN3WkNhdk1hVHNDVWdLQUFzbyt4SklBQ2M0WkVkWkVrR1pJa2cwb3lLSlZCcVFUS25JSWFQd1pST1ViWkxReVNMUXd4QjZFZVdBMmh0RUl5WWl5b0laNTllSVJ2ZW1HQTU1NWhyQnpyUVlzRHIySjBPajBjUGJ5Q0k0ZVBJa3M3SUdaWEY2cW1KdlVrdnh4VTg4MnVwcElUZWZKaHYwdG1LM2xOMlA1STlvQmJYRmdjbkRyeDBQK1FaWjIxdlR6dmdYbWNvSnNnQk0vWFJlUnZrU1RIUWZMeEhNTjVZZ1pyZzh5OW13MzFBWHp4MmpMU3p1ZHg2dGc4dXVrQVNUcUVRUWZHZENISkJvUzJvZlJpSmNsdVMrQ2IvSUxNNXFHa1ByTmZKUVBxb1ZYclNSYmtLTTBjcTJUVWpKLy9vSElVUUxFVWV5V0lsYVdZeFpFQ2xNSkl6M2Fkc3h0M1lBVzdLTXlUQkptTjM0dHhDSmYxT3hmSmxkUGV6ZXF3c29CbCswVllRRlpNakRKSTJhWjAyNWh0Z1owa3dKbFRoTG1sSVE0dlpYajcvQnpldWRpRlJnNVdBNlFrT0x4MEdBblA0Y2JhRld6VExlaWhiUXNzd25Dbk55NUZxYzEzOGhFQ1p4TTBpbXIzdUZMTW8rMnpxeVQ4bGJ5UjNXZHAzTTZiZ0N4aWhZWGxZeGQ2M2FVdmFLMzFYdTUzOWJNLys3TUhkakwvbnUvOUpINzVsMzQxL0pZR2NFMEVtd1IxaGhTT0dkRVpPeTB2SWdLckZLTkJENk90Qk9oY3djTFNFQW9aMkRBSVc1YjFrUVdiUE5aTzdMMGNRMU9CVTJ2MG96QUdocTI3aE9BSjg0OXlWMlk3V3hZK24vRzBzbDl5NUNXOHhBN1NNYVVneWh4SU1vQlRzT3FBVlErZ0JFcWxVR2tIbkdTdVVkYm1GOHdka0Vyc241UUNsQUFxQXppQkNqd1JCWDh5KzY4VXhDa1VKMUNVSXVITS9wMFRFQ2tZU2dGMHdaTFpUZ2NpZEhzZHpDMTJRZWhEazhMT2RoOWliSU1wQ01pNkticWREb3dtalBPOFdPZHVwQno1TGxrMk85Wmd1OHExNDAzYzZEaE1NWWs2dGUyNTlybjQxaWNibHFseTdZanpNdFlMTTlLc0o4ODgvZUdmeTVMT0x5RWMrTnFGVWJ1VE9VNW9Xd0QraFJnNVNaSmtUUElpWU9hbEdIb1RFQy9nNHZxTFdIOXpDem5ld0JNbmdQbUV3RFNHR1hmZGpaRGZzUmNZZW9reUJ6R0J0NUIyNEZTY0sxWEFWcS9qR0VMSnJMSDFDRkxVSHhJYk9pQURLVmR2QWNPUURjTWdIVWM5RThqZjBKNWhZZ1ZJQjM3c2dOak9QTmw4SnlpK2luczhhaXFoSmltMUNkQVV6N0RUdHlsRTJNNFk4UUJHRDlETkJJODltc0h3WldTOGlMUG5DTGxPWUZRT3dRQ2Rib1pqaDg5QWNZSWJONjVBYXczU2VXdWNZSHlJNW5zeUJKaTJlNmZxY09yYWFPSG5VOWFZZkZKaXBZenRkVHgyOU5TbFE0dEgvci9HeU01ZVFITkhnTk1Tc2dIQUdvQi9JQ0pIQ1FscmpGNEFNQyt1ZHl5SGdYVG5zREg0Q040OG4ySXUreW9lT0dvd1I0ZnN6WmJzdUptVU81ekxWRlJ5bmN1bnlhdm13NjVhWDd4c0l6S0VmWWN4TzdDd3E4MjRKRmgxM2ZkU2tFb2gzQVZFUWJGeUJjc3VtQldFeUEyeDJWd0lzSjZLMEMxQ05mdG40clRWN0pzeVV0cys1anVJbUVHS2lsSkFKY1F0eUFyakFOa0RHOWdUWFBWaHlJQ1RFWjUvYkJGelBBS2hpN2ZQNTlBR0lPcEFFVERYQlRoWkFSTncvY1pWOUUwT2s5Y2lJaitWV3BIakxUY1p6QkpQVU0zelZNbUFjTE9FbytOWlFiR1NoeDU2K2w4Wkk2OWppcmJBWGZVNEU4QnpCY0F2aXFESGtwSHc2SGtpek51QVcwTW5ZeVI4Qkd0Ykg4UXI1NFlRZVJ0blZuSjBFZ1BsR2k4QlFHc2RKT0N6czJ0K3dWRmwwVkxRb1ZDdS8vTXROcWFvTlZUbzRacUhrbUFQcFRIUzZCNG9IOHR1WElKdDdRVUtVTGFPUUpLNTVEKzExWDdZeXIvdGRVbEEzSFc5Vyt4T1dBY1ljc1FCT3RZTCtWRUtjZDVIMlpDRVhhVlRSQ3E5WFdXc1dHTzd2TWFkQ0tDMklCakRVQmVjcHlBMUQwVUpZUEppb3ZmSlIrZUJiQnVEWEhEeGNoZDVua0lvQjJnSGFacmc4T0dqQUFqWHJsMkNhQVBrQnJrMjFkMmhidlRjdE8wSkNvRlJHN3FoU2NXK0d0VlBSVVJncWZxRnhTUGJXWkwrcndCdTdPY2V2Mk9oMmdTeTRHMEFmOE1ld3BtQThoY0VacDZad0JqRDhBNUdaaDZYYjM0VEJCMVE5aHBPTHlsMHFBZE83YUZnVDlxRDhqQlVvNEJMMEZUck45VWRNYzMyR3E2MDB0Ui9oM0VObTh3WmlDMHpKcFNDWFFHT1ZBZENDcEFFQkp2YkNHVmdzbzhuN2hUNUhJbGQ2QVcvNDVOU0NIV0s2VS83S0Z2THNabXdEZHRDZlRFdlNoR3lmLzUwRjFNV0lnbUE0ckc5SHBRQm5NRkFYUHNPb0hVQ2FEdUM4ZlJqR1pKa0I4ZzFMbDhsakkwRzJIcVNMTTF3N05oeHNBS3VYTHFBN2UwY1NqRzBCcW9yYUtSMnUreWUwMVJBRk16WGxMNm5KRWlJYlNpclZJb1RKeDc2SFpWMi8rV3NMVGIzSXNlcGcrY2RBSDlUQkNDVGdGVCtRWjNyYmtwZFNESkVyZ0NtSTdpNjhTTG1MbllnL2JONDRLaWdtMDdyQUpCOU05anN0QTdJTlVwS2hUNHV2VVhkdTlXOUhrMDY4WWdncEd5MTMwMWxDcWN1WWJmMUdFTStKMGtCU2tGcXpvR3M2MGFpMlFVZHR2YWlCREFGVTVlNWJtZ0NmTHVOQXcrNW5NZEF1VTBHcFVKbmVhOGFFRXF3S0s1dHFpYmxtbUo3YmtacURHSGo2aUFkVUpvRFBFWmljano1d0JFa2VndS9pWFdjdjZ5Um02NnR6THZ3OU1qeVVTZ1FMbDkrRjV1Ym0yRE9pNjEreEF3VTNTNjdnNGFDSEtmMXN5OE9FY2Nxa25Mdm5URS90N1I5NHRqcHY1T281T0lNcFpXN0Q1d0puUVVlUFArRENGTFNTWmF3ZWxibDNNMlpJS3B2d1RNK2hwczNqdUpRWWpDZi9pYVcwVUd2MTJ0dGI5a3ZhS3BNV0owc1FKSHcreHltUVVjWHRaYnFJRmZJN2xpR3h6RmJMa1FqVGgxb1V1c1JtTzIvY3dwQngwcG1jUWFsVWpDbnlJMVZ1aUVoR0xLRUFMc09BTnVYbHRwYmhCbEVpUnNtZGgwQ3hJVzBWU2xKRmNwUldlQlU4d21ua0NNQ2tnNUlVcnNZZ3pTRURRemxFQ0dvUk1GZ0RLSU1TZDVCaWh4UFB0ckRDSnZZMW9KcjEzc3dabVFQSUFDY01KYVhENE1BWERCbm9mTXh0Si90b1pheUFyVVByMUdOMlF6ekdpS3E5UWY2aU1BTnF5VUpqaDEvNEowazZmd3oyUDVLdkJjOFRraFR2d1hncjRxZ0EwT2lVL09jQ0hYVnVBc2lRR01MTjdSZ3NQRXg3R1NQNHZIQnY0YXN6RVAxQnFEdUZwaEh0amczUGd3eUJwS3NsdzJOWkxYUUVrbWc4Z1NhRGJReUUzTWlvbkFXM1JYdWZBNWp2TjZXSXdzRUlKYWdvYkU4L1l0WmZTS2J6QmZqRDNNMkZGTVpoRklJSlNEcTJLWkpLQUR6QUJJWVRwMW1RQWFpREpwU2FHTnZMS1dTY3AwTDJZS251Qm9JSzBkTmMrTEFhR2R5dERFZ1NaMlFpU2wydy9nS2ZURS9WTXYzaXNvLzJYNnpJdXloRkVBRzVYcmg3RFdhZ3hIQnFJUGlSSC84OGRQUStpeCs0emRldy9yT0lXaFpoRkJxUTc1a0J3dUg1bkZTSG9ET0UrUmpBNk1JK1hnQURnY0ZoZDBNamc1d0lGTXIrR1V2bWlwQ05NME01YnlQSXFEYjZRMk9yNXoreDBvbDUvZnJiZTRhY0NhUUJUN24rYTlGOFB1aCtRZEI4cFJBSHJMbERuc2pibThPOGRad0FUaitZUnk1OVFvZVdGbkZraUZrdkFoRENVYkpOb2dNc253QmhxUW9maGt5SU5LQUdzSVVoVEJxVGZMOXo1U2Q1bFJHTXphbXJPUkFaVTNBUFo1TDcyVC9JWEdObUNsWUtSajBiTjdCQ2tEbS9qMERLSE4wODV6OTBObUdhb0lFNEF5TTFEa0hBeUN4RTdCc3FWU3JXT09GVFRyVyswQVY5TEducGlHMnRVU3AxTzJlTVRCbVhIWU51KzVsZGtOQ1hPdit0a1NYTHhBNzVSM1hiT3BET2Zic29NdWRGQU5QUC8wWUJ2MGMvL3JYTDFxUDZHSW1waFNrZ0NPSGo0R3BBNkVoVm05WklSR1JjbmtXcUJTWjNMMHVSelVhdXF6TnNTZDhtRUNVNFBpSkJ5LzF1b3QvdDE2MzJYc1gxbDNjZjkwQ0htOWRBQzhCK0QrU3duY1lHVDRDSUdIRmJoZ082SFNBeDg5Y3dlbnVsM0NtTzhCQ2o4RmRRZDdiZ29EUUdTM0J1RUV2ZStGenEreENRd0NxS042RkxyeFlaODZtNkJKb0ZsbXJpNGVvK0VESzRxY3V4aHlVTy9FekVIWEFxZ09WSkREVUsyaFFtOHlud2VNVUJCMHdxUUk0UU1lQ2c1U2xuc25YdmUwWnkrN2ZQT1hzT3djc3dlQjYxaWd0Vy81Yyt3dUtPb21wQ2YxUkVKcDZCcEtLSEtoVVlLVmlVclBZck1CbFZkK0h0ZG9ZRURGR3d4SCsrUzkvR1YvLytrMGthaGtHcVJ0WXRPOG16M05zYmF6aXpiZGV3ZXJxZFJpZEk4K0hFRzFnakhiU1dIcENLYUFPR3Q4QXk5Vml0ckwxTE1VS2kwdEh0NTkvOXFOL1ozNys4RThCNk8vWDJ4eFlyOXB0OUxSNUd3RDRBb0NmTmJuOExaTE9id0cwYmJSeENhN0NVQ2Q0NThKSjNPaC9EeTdzUEl1ci9Rdzd1ZzhhYXlSYUEyb0hvQUVJMnRZZWl1aWRnN1owKzdGN0pvZWNoeUkwTngzNkE4VU9vWWtOejlpMmJEQkpLZkpRRkVsdGZrR3FBMDdtd09rOGxGb0FlQUdRSG9qbndid0VWa3RRdkFUd0VzRHpFTXhCOFFLWUY4QTg1NzR5Z0RxT1dldkFTQW9nQlhNWHpEMElNdXU1T0FPcEhzRGQ0bnZrSHNNcWcwbzY0TVNDMGhmcklZN2lwclQ0WWxaRmc2Z2RSZkFIRUZudjU3b1I3Ti85VndwV0R1aVVsUWVDNjBSZ1R0SHA5UER4YjNrV2g1WVZUTDROa2h4a0NBd2J4aUloekMwdTRzRUhIc0g4L0tKRElRY2o2bExydnRpZFlDczZuMUhPNXRoK3VoVEhqejF3dGRkYi92dDEwTnozSG1kRzc3TUU0QWVKNmNjRTR4ZEJadG5tc1d5cFdSZzgvRkNDNDR0dll5VjlGU2U2bDlEdGphQlRXSUVOc2QzRHRtVURZTVZRVkU2MHQ4L3FtQ0FjYTNvZFZyVUZyVVNWbGVnNllNMkVlaUExQjhJY2lEc2dUZ0hKQUdXN0FJUXlzT3E0dk1NeVpvelVlaDUyTWxpc29GMjlSekdYTEJFbEFCRzA4WHJZTml3a1NSejd4YTRQVHFFcVpTcnRNOGJlV1Voemoya2xiL0ExSURlZGFtQUh4TUxSY1ZzckUrc3AvTFZqaHVRai9QYVgzc0kvLzZYZlJwb2VncVl1aEJTRUJZYkdZRTBZajBhNGV2VVMzbm5uVmZTM3Q2RDFFS0xIeGY2ZWtMUmhwbUM3UzZEaklPTG1hOGgxamF0aUxEMUpFaXdzcm15LzhQekgvdGxjYi9FbkFGeTlIVzl6MXozT2pDOTJBOERmRXlOL0FaTDhLaVI5bTVDSU1na0VJNHhvakRmTzV6aDc5VGxzbW0vSGplMEhzTmFmdzg2NGl4eUplMGNEc0JvaFVRS0djblA0YlRzZ3k1eUYyWTh1Ti92TnlwcWJ6UnNJeXRaaURFTU1JNkVPRkhmQjFBTnpENHA3OXFSWEhVQjFnWFFPb0F5R09nQjNBT3BDdUFmd0hFaDF3V3o3ejVnNjBBQzBlQUpBV1ZWT2xZRzVhK2R5WEc1a1FaZFpFVUtWV2FLQmZUZ1lKbUdsK3FmOVVnV2pSNTcrRHJxdkNXa3hWczJCVjRML3U3S2QxVW5TdFY2Tk84NFRabUNWUWlVZHFDU3pPbTFLUVdWZFBQM01RM2pzOGVQb0QyK0J6TkMyN2hoanBZYVprQ1FwVGh3L2pUT25IMEhXNlFVc3BxbDRtbXFZVnUxVERNZk1PU2g4S3FXUXBiMzh4SWtIci9XNjgvOFFWaC9qdHUyZUFXY1g4SXdBL0NzSS9nSU0vUnBCblRNd09ZeEI0cllEWEwyNmphKy9NNCtOem5kanpYd002NnZIc2JPekJHMDZ0alloT1JSeXNEaXBLTjgrUTg2N3NQM3Zva2JvUUJNV1BjdndqaDFUNC9XbTJkVXgvTTNWc2Q1RmRjRGNnZml3aGpPd3lxQ05WOW0wWVl4eDNzYUdQQms0c1d5YWxhNTFJd0tKcmZ5REZJd2swS0lnV2tFYmhoR0d1SkNKU0pVSnU4OWpDaEVjcDAxZzQwc0xLbGNjOVY4Mk5DcERNQXBlZ3lVaGxNMlJFaGVhUVJXQUZMZ3VDSFlVTzlrUWpSMk5UbzRNbVp2djRWcysvaVFXRnhURytSWll0Tk0vOGZvSkJKV2tPSG55REU2ZmVnQnBZbnZuVlREWFJEVkZ6a205Tit4ZW01V3p0VVQ4MHFHVmpZY2VlUHBmRS9IbmI0ZUN2bVBkMGZ1eDMvTzluMnpycXZZeHhqVUFYeEhCRWhGMUlRcGtzTWhpRS8rZFlZNHJxeDBzSG5vYXk1bkNjTEFEeGhBSjk4SHN4QVRCUlM1VHhNQk1SUnpOQ0U0cE4vOUM3S2NyeWQwajdFdlBCV2pJZHlZckN4dzRBSW1Yb0tVT2hCT0l1Tm1aeE41TXRvVW1zMzlYcVp0WlNkdzBwZzB4N1BNbVJhTW1JN01GVUdKM0k5dlRQT0VVS2tuS0VZSXl5Sy9kWWxSNkhlODF2VzVCbzVPYksxOVdlenB4cnljWVpWQkp0UVhJRlNNbGFGcTNuanFEVWtDbnE1R1BnSXZucjFtdkcrU2VmdFJCS1lYNWJnK2pZUitibTZ1Tk9nNVZwV3dxb1ZvWm9wRXJLZGozbVdXOS9KRkhubjlyZm43NXZ3ZncyL1d3WXo5aDJuMEJuQkJBTGVBeHJrSDBOUURIQUZvUVFoK01lUUVuZ01KNE5NYTFHME9zOWs4RHlTSVNsVU5oRTZ4eUNBTzVVckNOTEFMRGhEeXhFNmpDQ1JLa1NDaHhhditPdmcxVlpaVFlMeEwzT1RQQUNZenFnTkk1bUtRSHd4Mkk2a0lTK3lmVUhLRG1JTndEMFR5WXU3YUoweVhQNExDV1kyZHZjdTVBRi8xcDFuTlpRc0FDRDQ0dHRKNkV3Y3FKQjdJWDdGREZsOS9DWURXaG5TYTIzdy9raDl6SWdnL003cy9VL1dtL2hCUkFpZk5zS1VSbGp2RnovK1lFRmUwMXErb3Z3NU1LZmt5YjdGYUtMT2xnYm00TzE2OXU0TmJxT2hSbmdNbUtyZ1Z5L1hmTUNiS3NnN1dOVll6R0k2czNYbVNYN2pDcEFJWXJzMGhFYkE4VElyREtjT2pvQTZ1UFB2ek1QeUNpLzlmdE1tbjNKWENtZUI4QnNPN0FNMC9nRXlLMGFSbFJzOGpFME1aZ3N6L0VyZFV4ZHZvOUpNa0tFcHFENUFMRjJtM2Z5VURTZ1VLR0ZDa1VESmo3b0dUTDFXK1VBMHhKc2RuS3ZMM2hiQTZRdVZZWVc2QWsxL1pQS2dNN2RzbFN3eDM3V0dVZnIxVEgzV2gyWkFDT2dmT2hGamlGVWdxc0FzcGNRdXJjTVUwK2hBcllKL2hpSDhJMmVxcklJUkY3SXNGNUcxWlcxSjBZclRKS2ZvUWRLQUE2Y1NpUXB0ZFpHS1YwVkxmVGhVb3lYRGgvSGFPUmRpRWV5Z0U5eDNOM3V4bElETlpXYnpyNVlQL2VWTEV5ck14bnVGQ3dzZDY2cEovVFRqZC8vTkVYdmpiWFcvekxybHRGNnZmYmU2MXpZRDg5YnU4QytEa0FWd244QXhEdUUzalRRSjlBZ25rTmsrem9CVnk0dFlpYjYwZng5TU1QNDhHVlM1aVh0Nkd6YThqU0VUb2tTRVJCTVFISzd1UVJjZE9UME03am9LREE0ZXNDUldoalBRVnpCd0xYMGF5VSs3dFZtd0c2TnQraHJ2MXk0WnBCWW1sWVNWd0ZQbkUzQWdmOWNEYk1LRmNZQmtzaHlYbVpvbGJsKzlmQ1ZMV2MrZ3lMZ0FoV2gwZ3BuT0IranpRR3dVellOdVE2SUpyMGI3QlhvOEZVb2x5d0pTVkFrMVRoc2NkUDQ4bHpxL2pTbDE2MUlhcGtoVkFrc1pNVzFvd1R4ODlnYmYwV3JseCtCMGFiUU84QmdmQStGYmtTdTJsRHhRcEdBRTRTUEhqbXFYZVBIajcrOXdCOEhidXM3WGhQa1FON0pBMk15M24rRG9DZkJmQkxFSDZYSlgyRk5GOWdJOXRneGdnWk52SXV2dnkyeHYvMnhtR2MzL3dRMXMwVDZNc1NkalNnc1FQUU9pQURJRStoeDRjaEpndCtoVHZOaEIzejFBRlRGNFN1cloxSTVnYkxiSzJGMFhYYjRPemptQzFCWVB2UkZFUVVCQWtVV3hvYW5CYWlnSjRnSUhKU1Q4VjJ1bUFqbkxnbXpjTHJsSG9DNVNZN3Fuelp6QzF4WHlWTlhkRFZzQjNXUVdXcitOSjJRWUJ0UEhXSFJ3azhMc1BCTUcveW85cENCWkhpWmFwOGM2ckFrZ1h6U3d0NDRRT1BZSEZoRGtEZktkclVuQmNSc3U0Y1RwOStHTDI1QmFkbHpTakduMUZHQmx6a3A1WWtFUkJVa21CaDRkRDJxVk9QZkFHZ1h3S3dmZEQzNkgwVnFzMlE4d0JXcS9vcWdDOEMrQ3FBWlJKZVlPRXRTTjRUcGJ1MkdaR3dOU1JjdVpGQTZBd1dGNDZET0lXV0FUUzJnY1FBeks1ejJWZ2lRY0xDSnJ1aVkrbzhpV09RcUdOVlpSeERadk1CRjhLUlpkU0FyUHgzejFxQmJVMkhmRUZSRlN3V0sxWFMzRzVtQnk0MzhXQmhsUlRoaW5FNW1SU3hmWEFUdXo5OUJiM0lQZGdYRmtzZ2hVazFhb3RxdmFKbzZLM0NmckI2STJzRHZCUzA5d3U3NVhhTzdVb1lseTVjdy9yNk9vUzZ4Y0l1MisxY1N0MG1Lc0ZvTk1UYStsb0JHT1gxb2QwdlZxNnpYS25FQ2Iwd1ZOYkZJdzgvKytyaDVlUC9kMWRZMTdmVGwvYWU4VGd6dkRuajZqMWZBUEJmQS9qckVEckhrcnpDZW55QmFEQVVFbWgwME05N2VQWHRCUC9tU3lkd2RmTmoyRW0rRlZ0NEhwdmpvK2lQeFQyTmRoc05xS3I4U0dVNElFNDR3M2M0Ri9SdDRUbFVjYnJXdGJ6OHlXNkNla1FSajVNcVBFdFlieWtFUGhBa3Zwd1VTYmNFSVBFZ0xHWnZIS2pLcjdMWHpJdVpGMDZpOERibERJLzNLcjZEb0NJcmhYYWcxb0ZUQXNocFg1Tjlyd0pDdDVQaStMRkQ2S1IycFNJUld6MkNvTkdXT0lGU0hhd2NQNFZ1Yjg1ZXI0SjdMQ1Z2ZlM0SHgrcXBKTVhLa1JQWFY0NmMvUHNpOG10dFBXbTNDNXI3MnVQTVFGZDc2d040SGNDWEFTeVFKSXNzYXBORWVnVFRZYkt6bk5zRGpVczNOQWFqWTVoZmZCemQ3RENRRzNBK0FBd1YrMmVLSmJnZ2x3SzZoYitzbklpR2NnMlhTU0hMQkU3QTNnTTQ1c3JQeHNCOUw4eWJoQmhRQ2t4c0Z5dUVSY3FpVGxTcTQ0QTliVnpXVUNnb2NnYVRKeVhMNUpzdW5UQklBWmhRYmtsb0lqbFFiYzl2MTFwb0NEVzJsbGFjSW1meHV1MENycDJ0SFZ4ODl3cjZZMy9OYkFPcjMvVGc5NkF5QTV0YjY5alpXcmQxblVJeXl1c3IrQisxUkU1dmZqRi84dkVYLzNHdnUvaFhBVnk0RTZDNTd6M09IdDd3MENXQS94Y0EvMmNJL3c1SituVTI2bFdZd2NCZ0I3bnFZM3NrZU9YdFB2N1ZydzN3NWRkT1lXdjBVV2orR0lZNGhaSHVJczhWb0FIU0JxUTFqTmJRb2dISndjamQ3bWZBc0c5clVTQng2elNLMDdsc0R4RVlDR2xiYzVQY05VeTY3YzlleWJLV3M1YnlmQ2dULzdEbVVzbjhMV2pZN2JNSjI0RENEUWxWRCtCLzBlUkNZbmx3dE4wZU1xRUdXWHF6TW42alNndVFKeWFZR2NlT0hjYkM0aEtNMW41VHFYMTkvdW1ab0ZTQ0pNMndjdlFFV0NWbFk2cW52MkZaTmUrOVZacmkyTEhUWnhmbkQvOVZBR2V4dDlVNjd5K1Bzd2Z2STg3N3ZBWGdONjJMcGxPUVpFZVFhcEZra1FCaUpSanBFYTZ1RGZIT2pRemIzV2ZSVzFwQlJ5VVFuVURsQmtvUDdkTXhJU2RDMStSSUlkREMwQ3FGWWR0MHFVU0JqVldqS1pvazRiMkt2OGxNTVpyZ3p5b2k1VFpmSzFlYktQTUozd1Z0aFRlZG1JWVBuM3llSVU3VTNDZmt4ZEpkS1lmQ1NJcDhnUUk1cnVvK0dmOHpxUFNtbFYvS1lhenN2Q2hnN1NXdWluQ3hIS3NJdlY0WXhoVy9uUmhqVFRoNzdqbzIxMjRDeFBhYWlsM1h4VEFRSXVRa3RpM0hDRzZ0WG9jZUQ0STZtL1V3Q29CSzdlaDViK0dRdlBEOGgvOENTZkxQMERJU2ZWRGU1ajNsY2Zad0FUU0Fjd0IrSHNEUEFQVHJMSHhPaVhvVllqYTB6cTJrdHdHMk40ZjQycGZQNGxjK2IvREYxeitBUzF2ZmpuWCtKTGJ3RklibU1FeHVrT2dOakhXR1liNEEwUjJ3TmtobEJLSWRhTFdEUE5teHF4Smw3TG81N09KZGN0N0VoeDVlUEYxRVF4dTdkWnJFZGpTSWF3dnlBdVQydisvRVlWblBRY3BLUzFXcnJ2b3p0dDFvd2hmeGhEVW5WUFZjaFVpaURVV3pMRU92MTBPV2RPd0dQdVpDVEtUWVVPSEExdTEwTWRlYkQ3b2VWTkRsb1dDTVFaSmtlT2JwNS81cHI3UDBpOWlEQnZUN3ZZNHpFVHhUdXF6N0FQNDNBRzhDK0E0SS9nQlR1aW1pRHhtalQwSmtVVEdSTnNDTmRjYk5qUkcrZm5hTU15ZVA0TGxIUDRKVHk5Y2g1akk2dzAyTWxBR3pRSmtoa3B6QWtnTkpEd1lkYUVyQU1ySXJObURzS1UrVzBvVUJsQW9ZS3djS2krM2NhcFVaQk8zMHFPMXdPVUFUcWhWaUJHRm5jVlVsdGRiQ015WGlvVm9SdGFrQVpOQW1BNnlVUXBZbFNOTVVBNTBIemR2dTlUZ3RBcmhPaVY1dkR1dGNMb2Fsb25PQ2tLUWRuSG5nd1d0UFBQSE1uN3QrZVdOdEg0ZnROdzV3WmdTUUFYQVR3UDhDNE5jaCtEaUVmMUN4ZXNwQUg5WmlUc0JJRnpUdUFEazJCd2F2dnp2Q2xldU1KeDQ4ZzZkT1A0cWozVEdTOUhjQXJJSE4yQXBLc0FFYkFSSzIvV2JrUEk3WS9qaVFndWdjNHBSS25TWmxLWWJPVmhMTHlOaUtBYkpYMkxRZVFMbldlUkZqdDFjclZHL2lTUXJBRkN5MkxZcUYxQVJOSWNEZUJwWnkyM1ZaR3pVemVERmc2dTZhaGhZQXUyNEpxejJkRzJQSkZ6SFZLcWViT3UxMmU2NUZTVHMyd0drdU1HTitjVkUrOUUzZjhqUFhMMis4ZGpkQTg3NEFUbmh4cG5nZkErQVNnSDlFUlA5U0JOOUtVTCtIUkQxTGhFUEdERTZBOGhQZ3JLc2x4ZW9POE51djkzSDJZbzVIemh6Rmt3OTlDQ2VXZGtDMENkR3JZTE1GcGhHSU5rQzBBY0V5akJhYkN5VEd5cUVoQlFuRDVMbkxrY1ZSeUFhUXZLeDgrMVNoV05kbk93U00yMjlxeE9ySWxadHVQQTBibE5FTlNvMnlBZ1RCSGxMSHNIblZUS0NOT1VPUWk1UWRDR0ZuZ3JSc3daUGFvdHhLYTJsWTg2a3pkNjZ1eE1SMmliSHJoQ2JqKzU0RVduekdSMUFxdFdHYWlHTW43WHZxZE9ielo1LzU0TXNaTC8wQ2NOUGNyZnZ0bmcyeTNVbWJBcUR3YzV3RDhEU0Ezd1hnNHdSNVNDTS9hWUFUbktvdW9NR2t3V1N3a0hidzBJbkRlT0tSSlJ3L01rUkhYVWZDVjhEcWh1M0VsaE91TGNlcXdGQ1N1RkVEMjNaaloyanN2TDF3V293RnNMSXlVUUs3N0phVkhYUWpKTFphNFdvN3h1ay9lMXFhS2JFNkN1S1Nmckg1Z1lFUFk3aHNZeUhiUlFCUUlWam9iN3hnQksya3dNRVZJRW00QjdWR1dWc1pxZExiV0Rsakt0WVBNbE93ZWEzNnN6dmJRL3p5di9nQ3pyNTVGcHY5TVhLYWd6R3dZYkRrTUNDTUJZQTIwUGtRMTYrY3cxdHZmcTMwZmlxRFNsSTg5K3dMWDN2czBROS8rOGI2MXEyNzVXM2VWeDVuai9tUHdMWmgrTzZELzdlQVBzbEl2MDhSSHRQNStMVEFuTlJzRXNPQzFiN0J4cmwxdkg1bEN5ZFc1dkRRbVJXY09icUlsWVhqbUZOYmdCbFlqUU5sQ2lGeFZwNW16V0hZS21vS2FZaXd1eGx0Q0dWSVNvYkxrQ1VZbEIwdkJwTnRmekZpNjRkQVl4K3NCTWMrb1RsZmJQWFVxamxOdlJ1Z2lBWHI0d2tOdG8wbTUwNkI5SlF2dDlwL3F6b0JkbThrenpVMk4zZWd0YWtJYkVpd0g2bG9UQVVqdDlxNnJqaHFENGRUcHg4NmQvems0ejh5Q1RTUkhMaHpBQUpzQzgvYnNFMmtueGZCNzJXazN3M2doSmp4S1czTVNTR2RHRExRb3hUbkxtL2k0cFYxTFBjWUQ1Mll4Mk1QbmNHWkkydklPZ01RK29EMG9mVElCanhpd0RSQzdob3FTY1Mxb21VQURISmoxN1N6NURZdjRyR052SEpBS1ZlQTlmSlVSanZ4aVhDZGVTM0g4UHQyL1BlTHZqVHZBZGpKVnBVLzUwdWpVc2xNYUdLdTBwVDNkVXlZeDRxVGx2S2Vod294ZFFhUVdPbGVFV3h1YkdIWTM4RTQ5N2VoT0hVaEc2WlpVWGtEYlRSRU5NYmprVzNEU1ZQa0Fpd3RIeDA5OS94emYybThvNzV5TnozTit6cFV1NDBRRHJDS080OEMrQ1NBN3dEa01TRlpGb3hQQzh3U0VSTzdPUlFDSWN0U25EakNlUEQwSWs2ZjdPTEk4aGc5dFlsVXRwSFJHS2tDaGp5MlBYRXFBeVVka01xZ1Jkbm1UV2FreHJYdWUvMW9zWThGSjRDeFlaMFJxNS9HaVczMUtSUjlTRUdadERqOEJWenN6U1MyVGFNaVhNbDFiQnVSQjQ0cDlkT0sra3ZvZlFMaCtZRDFxNjl2RE5VL0s0VkMwVzZKYndhaERFb1JkRDdBYi8zNmIrTkxYL3c2cnE4YnEyRlFoSHQyVzRFUkE1M24wRVlqSC9WeDl1MVhjZXZtVlJnUkxDNGZIVC81MUF2LzdhTVBQL3RmM3J5eE9yemJvSG5mZTV4cEYzUUtpQVlBWGdId0JvRC9EMEFmSjZIdlp1bzhZMkJXQlBxME52a1NHU0lpd25Cb2NQNnk0TkxWTGN6M0ZFNmVuTU5qRHkvajFMSGpXSjVqTUJsazVvcE44QTJCY3RqQk9kRlFNQ0JOMEdvT0VKc29DeGlpa3FJUG1CV0R2YTR6Qk1iWTczbFdqS1VhdDFtRkh3b0U0NmtRYUo4MGRteU1GNHozOUhuTjRYaGlvRmo2SkRQdmF4VzNNdEQyckk0QUVXeHNyT1BzMmFzWWpIUXhZK1ByV05XNUgwQVJZNmcxaGtOYi9PeDE1L05ISG5qczUwOGRmL1N6YmFDSjVNRDk0NFVZd0JFQTN3VGd1NGpvUXlCenlraCtUR0FPZzVBSU1pZE1hS0JZSTBrSVJ3NHQ0S0VIVCtDQkI0N2lWUGNtbUFWWkNpVEpDQW5uWUl4QXlNR0tNRXJueS9VYzdMd09aVTZzZzJGVHAzSVFqbFFLaUhJRVFiQWNGK1JXZ2FEb1JyQWQyUW9TNUNGMWp5TVFhR1Bjd3FWcXZpTVQ2akNoOGlkcWpGbmx2NDJ5ZXRTY1EyT0VmS3p4eGQ5OEUxLzh3aHZZMlI1Z3FLM24xRWFYUzZmY2J6VGFlcHhiTjYvaW5iZGZoZEU1SG52a2lhOC84OXpIdisxdWt3RVJPUHNQNFJoV3EvWXBHOExobTRud3FFQXY1YUJUZ0N3Q1lpZXVsYkpuTFFPOWJnK0g1Z1NkRkRoNWJCRlBQWEVVUjVZSkhUVUN5UkNFSEpTNkVNblB2M0FDVXFrYklnTWdDWXpZVVdDbG5JWVppajJESU5hV05mT3ovd2pHaVNuMXFvRXU1NjZIYWk0VUsybzkzQUNPRlJCc0NzdTNoV2VoR0wwRlRnb21BME03R0l5MjhOYWJsL0hybjM4Tlc1czVSaU9Ec1JVMWdBNDJzdm50YmVNOGgrUWp2SHZoTEs1ZnU0alRwODY4OGRRekwvMUFQbEN2M1V2UVJPRHNEMEFFb0FQZ0JJQ25pUEF0UlBReFk4d3BzSnd5a3MrTG1FVkxDdGw1RVlHQ1VnUW1nOFdGQkk4K2RCUVBubG5HL0J3alZRWkw2UkR6Q3gxTENQaDFGRVdmSk1Na2N6QWc1eEVzaGUxSEdnUUdZSnRIR0YvWTlDTUdYdUNEay9hT0FLRmdwV0xMdjlWem5CWVBVd2RTMCtNa0VCajArNnQ0N2RWMzhOdS8vU1kyTjhjWURRbmF1TjVwRWF1aEptNmxvVmg5Tm0wTUJqdWJlUFcxcjJGaFllbnlzODgrKzcwc1MxL0ZoRmFHQ0p6M0RvZzhtWEFhd0RjRCtIWWlQQStTRlVBdkFmcEVuZzlUVVhPdUtwNURLUUtKUnBJd3NsUWhVWVNWcFJRUFByaUMwNmNPWWI2bjBPa3c1cnNLYWNwZ0FzYXMzQVFrT2RrakgxSVJCQm9HR29CeTlaa0VBbFVNeFFuWm5La0JuR0s1N3AwRmpoaGdjMzBMWC9uU2Ezajl0WGZSNzQvUUgrYlFVRENHaXk1eHV4L1V3SWpZTFFZaU1Gcmo4cVd6Mk43ZXZ2YjBVOC85UUNjOS9JVjdEWmdJbklNSGtBSnd5SVZ5bndEd01SQk9NY2toTFdiSnlQQzBNWWE5bUFUNVVRQXd3QWFwVXBqcnBsaGE3T0RZeWdLT0g1M0g4bUlIaXdzWkZoWlRkRG9KbExJL285akxLdG5PZ2h3YUNXZElVcXM1YlV3NWRXcUJvMG9GR2tFTk9ENDZPM2pnYUcxdzdlb3QvUFp2dm9LTDU2NWhOTmJJYzhGUUd3Z3h4dHB2ZmpOT0k5em1PT1B4R0NEQzJ0cE5iS3pmdlBUVVl4Lytmb0MrZ2dPU2RvckF1VDhCUkFBeUFHY0FmQVRBZHdKNGxvaDZSR1l4MTZNbE1FNGJiZGdsQmE2ZkRXQm9LRVZJRklGaGtDWUpGaGQ3T0hGaUNXZk9ITVdKNDB0WTZLWElVa0NNNjQxVEJKVzZlUlNWdWk0QmRtS0NaRWU1T1FuVCszSW5PaWdROUtndW5LSWkxSk5DMzB3cSt6U0xXS3lna0VXTTNjNGdoTzJ0SFp4OTV4Sys4dVczc2JxNmlYeVVROXN4Skdoak94aTBieldDWUR3ZUZhQWNqM01NaDMza1p2amF5cUVIdmhPR3I2SldTYjJYb0luQXVmTWdZZ0RMQUo0RDhDa0hwQ05FcElobFVXQ1d0TW1Yak9TTFpJc3VwVENpNytjQ1FiRWdWWXlseFI2T0gxOUdOeVdZZkl3MElSdzZQSWVWRTB0WVhKaERwOXRGSjB1Ukpta2hOVVV1eDJwanY1aDlMYWdrQlB6RGZHaG9ZS3JESjFLZDRHRnlTMitKWVl4Z05NcHg0K1ltdnZZN2IrSGMyNWV3TTlUSXRVRG5MdkYzclRraXZtL09JQitQM05TRlJtNE1qQjVMa3FwL2RHTGxnVCsrZW5OejdYNEp6eUp3N2cyaDBBWHdBSUFYQUh3WXdMTUFqZ1BlUlpqRHh1UnpSdlJoZ1o1amxaQ2YrRlNjdUdaT0RjVUNKa0dpRkJKbFNZY3NJM1M2S1phWEYzRGs2QktPSGoyRUkwZVgwTzFrWUVXdVkxdVFwZ21TeElwYUtGWE8wUlRkWk5Mc1JyQUNKcjVkeDFIZXdUMmpEV0UwTkJqbkJoc2IyemgvN2hyZWVPTUMxamUyb01jNVJya0oxb0pZMEdqWHlTQkdvTTNZMW5DTWNYVXIwYjFlNzgrTWQ5UmZ3NFFkTnZjYU5CRTQ5NWFWT3dyYm9mQWhBTThBT0FiZ01JQTVRRHFHOUFreE9oSG9FM2JrZ0VqNUprL1h6c0orVlNKcktGWklFZ1dWTU5JMFJaSW9aSm10b1NnRmRIc2RIRHE4Z0pXVlpSdzZ0SWcwVFd3aFZiVFYybVpDb2pLYlI3bmVPZ0J1TzV1OTZiVTIwRm9YdWN4b05NYlZhMXU0Y25rTmEydGIyTnpvWTN0N2dQRTRSMjQwakM2alArdGhMRVNOMi9WcHhNRG8zRGVveXR4ODkyMWxldDgvR3VadnRERm45d05nSW5EdWoxQU9BRkxZMVNhSEFUd0k0SGxITUp3RzVEQVI5MFFrMVdaMEVrQkhZRmFjUkMvWnhiVHNOc0o1VFRoQXNRM0RXTmwvUzl4V2JHWkdraVpJbEFPTkc2d2owa2hVZ2pUTmtDWXBlbk5kWkZucXZJdUIwUWI1ZUl6dG5RSEdvOXkyOG9oZ05CNWp1ei9DT0RkRjk0RVdXRGtvSTBXb1p4eERadnZZMk5WcDdQY01ERHBaZG0xK2Z1SC9zYjB4K3U4aGRFOExteEU0N3owQStaeG96dVZGUjF4bzl4eUFEd0k0QmFCSFJFcGd1Z1o2UlNBZEkzcEZrYkk2TXI0L1RZd0ZqY3RkT0pCZUw4VEtpK1ZMdGxIVDA5dk1kaWRQT1Z0VHJuTVg0K29zeFgvYm5hdkZMSkE0dVNudlhZZ2NjZUNhTllNQ0p6TkRKYncyMTF2OFI4TytmdGxvZVFPMjNlbStCMDBFenYwTklrOXh6d0ZZQWZDd0MrMmVBZkNrQy9VU0lsSTIxTWxYUU5JaEtHaU1UeEFrc1pzUWlyWFp0dnJQWlF1L0k4TUx1cmxZbXNVTTBlTENRU3BGT2Z6S1JyOGsyRDJQcDVFTHpRQVBMRGRhWVB2WjdMK25xWkxlWEhaTmNmcUwrVUQ5Zkw4L2VOY0J4cndYQUJPQjg5NERrZHVLaTNrSG11TU9VRWRkZm5USy9UbEhSRDBSU1FBb0xmbERnS1RNQklQOENDQ0pGVG1VRGhCdU5rUFpidVBaTXluWDVsYkhDNlJSRC9JOWIvWmZ0VzFJRldORjdoTTFUanJKWUdGKy9ndjVVUDZiNFdEODVkRXdYNFZWTjdublhRQVJPTjlZUUFySkJxdTdhNzFUenpGNHk3QnRRU2ZkbjhmYzM1ZEZwQVBLVDN1TkFpMTZXY2dzazlqNFRRUk9rb3BnakNIQWRNS3dyWnpsMFJCZFV0Uk1QTFJhZ2dhc1lCYVdsdktWSTRmZjFwcis5dnFON1g5Q2hDdmIyLzBkN0NLQWZyK0RKZ0xuL1FtazBFTTVmZDRDV0QzWTdvWWpqcERvQUNBaTZncGtDWUpsQUl2T3F5a0F4SXJtMDR3Zk5XSXluWnVlTVNaRmRUWkJSRXhPeEJwQzcwTDRMUkJlVDlQMEs3MWU1MXluMjltNGZ2Vm1IM1c1bS9jb1lDSnd2ckZBVlBkUW9SQjArTDFnalVJQlB1OXFsQVBlSENvQkhVWU9GR05ZRWNDQiszT0VHVlpydkpmQUVvRVRMZG9CdVBObzBhSkY0RVNMRm9FVExWb0VUclJvRVRqUm9rWGdSSXNXTFFJbldyUUluR2pSSW5DaVJZdkFpUll0QWlkYXRHZ1JPTkdpUmVCRWl4YUJFeTFhQkU2MGFCRTQwYUpGaThDSkZpMENKMXEwQ0p4bzBTSndva1dMd0lrV0xWb0VUclJvZDhiKy93TUFqc0Z1ZlM1bTdyY0FBQUFBU1VWT1JLNUNZSUk9JyxcclxuICAgICAgICBdXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGN1cnJlbnQgPSAwXHJcbiAgICAgICAgXHJcbiAgICAgICAgJCgnLmluLXRkX19sZWZ0X19pbWcgaW1nJykuYXR0cignc3JjJywgY29sb3JzW2N1cnJlbnRdKTtcclxuXHJcbiAgICAgICAgJCgnLmluLXRkX19sZWZ0X19pbm5lciAuYnRuLmlzLS1jaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnQgPD0gY29sb3JzLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQrK1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoJy5pbi10ZF9fbGVmdF9faW1nIGltZycpLmF0dHIoJ3NyYycsIGNvbG9yc1tjdXJyZW50XSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWluOiAxLFxyXG4gICAgICAgICAgICBtYXg6IDk5OTlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gcGx1cyhjb250YWluZXIsIGZpZWxkKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGlzVmFsdWUgPSBwYXJzZUludCgkKGZpZWxkKS52YWwoKSlcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXNWYWx1ZSA8IHBhcmFtcy5tYXgpIHtcclxuICAgICAgICAgICAgICAgICQoZmllbGQpLnZhbCh0aGlzVmFsdWUgKyAxKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBtaW51cyhjb250YWluZXIsIGZpZWxkKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGlzVmFsdWUgPSBwYXJzZUludCgkKGZpZWxkKS52YWwoKSlcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXNWYWx1ZSA+IHBhcmFtcy5taW4pIHtcclxuICAgICAgICAgICAgICAgICQoZmllbGQpLnZhbCh0aGlzVmFsdWUgLSAxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcuY291bnRlciBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciB0aGlzQ29udGFpbmVyID0gJCh0aGlzKS5wYXJlbnQoJy5jb3VudGVyJylcclxuICAgICAgICAgICAgdmFyIHRoaXNGaWVsZCA9ICQodGhpcykuc2libGluZ3MoJ2lucHV0W3R5cGU9XCJudW1iZXJcIl0nKVxyXG5cclxuICAgICAgICAgICAgaWYoJCh0aGlzKS5kYXRhKCdhY3Rpb24nKSA9PSAnbWludXMnKSBtaW51cyh0aGlzQ29udGFpbmVyLCB0aGlzRmllbGQpXHJcbiAgICAgICAgICAgIGVsc2UgaWYoJCh0aGlzKS5kYXRhKCdhY3Rpb24nKSA9PSAncGx1cycpIHBsdXModGhpc0NvbnRhaW5lciwgdGhpc0ZpZWxkKVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgX2NsYXNzZXMgPSB7XHJcbiAgICAgICAgICAgIG9wZW46IFwiaXMtLW9wZW5cIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlbkRyb3Bkb3duKGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAkKGNvbnRhaW5lcikuYWRkQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlRHJvcGRvd24oKSB7XHJcbiAgICAgICAgICAgICQoJy5kcm9wZG93bicpLnJlbW92ZUNsYXNzKF9jbGFzc2VzLm9wZW4pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVEcm9wZG93bihjb250YWluZXIpIHtcclxuICAgICAgICAgICAgaWYoJChjb250YWluZXIpLmhhc0NsYXNzKF9jbGFzc2VzLm9wZW4pKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZURyb3Bkb3duKClcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3BlbkRyb3Bkb3duKGNvbnRhaW5lcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAkKCcuZHJvcGRvd25fX3RpdGxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGlzQ29udGFpbmVyID0gJCh0aGlzKS5wYXJlbnQoJy5kcm9wZG93bicpXHJcbiAgICAgICAgICAgIHRvZ2dsZURyb3Bkb3duKHRoaXNDb250YWluZXIpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0cyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5kcm9wZG93bicpXHJcbiAgICAgICAgICAgIGlmKHRhcmdldHMubGVuZ3RoIDw9IDApIGNsb3NlRHJvcGRvd24oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBzZXRQYWRkaW5ncygpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBjbGFzc2VzID0ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICcuaXMtLWMtcGwnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAnLmlzLS1jLXByJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDEwMFBlcjogJy5pcy0taDEwMCdcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhZGRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXZiYXJfX2lubmVyJylbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICAgICAgdmFyIGhlaWdodCA9ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpICsgJCgnLmZvb3RlcicpLmlubmVySGVpZ2h0KClcclxuXHJcbiAgICAgICAgICAgICQoY2xhc3Nlcy5wYWRkaW5nTGVmdCkuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBwYWRkaW5nLmxlZnQgKyAzMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKGNsYXNzZXMucGFkZGluZ1JpZ2h0KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nLmxlZnQgKyAzMFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKGNsYXNzZXMuaGVpZ2h0MTAwUGVyKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnY2FsYygxMDB2aCAtICcgKyBoZWlnaHQgKyAncHgpJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKCdtYWluJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJ2NhbGMoMTAwdmggLSAnICsgaGVpZ2h0ICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRQYWRkaW5ncygpXHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldFBhZGRpbmdzKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuYW5jaG9yJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9ICQodGhpcylcclxuICAgICAgICAgICAgdmFyIGFpZCA9IF90aGlzLmF0dHIoXCJocmVmXCIpO1xyXG4gICAgICAgICAgICBpZighYWlkKSB7XHJcbiAgICAgICAgICAgICAgICBhaWQgPSBfdGhpcy5kYXRhKCd0YXJnZXQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogJChhaWQpLm9mZnNldCgpLnRvcCAtIDEwMH0sJ3Nsb3cnKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuaXRlbS1jYXJvdXNlbF9faXRlbXMnKS5zbGljayh7XHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJy5pdGVtLWNhcm91c2VsX19jb250cm9scyBidXR0b24uaXMtLXByZXYnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcuaXRlbS1jYXJvdXNlbF9fY29udHJvbHMgYnV0dG9uLmlzLS1uZXh0JyxcclxuICAgICAgICAgICAgc3dpcGU6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLnByb2R1Y3Rpb24tY2Fyb3VzZWxfX3JpZ2h0X19saXN0Jykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcucHJvZHVjdGlvbi1jYXJvdXNlbF9fbGVmdF9fYXJyb3dzIGJ1dHRvbi5pcy0tcHJldicsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJy5wcm9kdWN0aW9uLWNhcm91c2VsX19sZWZ0X19hcnJvd3MgYnV0dG9uLmlzLS1uZXh0JyxcclxuICAgICAgICAgICAgc3dpcGU6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLnByb2R1Y3Rpb24tY2Fyb3VzZWxfX3JpZ2h0X19saXN0Jykub24oJ2FmdGVyQ2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldENhcm91c2VsRGF0YXMoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldENhcm91c2VsRGF0YXMoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9ICQoJy5wcm9kdWN0aW9uLWNhcm91c2VsX19yaWdodF9fbGlzdF9faXRlbS5zbGljay1hY3RpdmUnKSxcclxuICAgICAgICAgICAgX3RoaXNUaXRsZSA9ICQoX3RoaXMpLmRhdGEoJ3RpdGxlJyksXHJcbiAgICAgICAgICAgIF90aGlzRGVzYyA9ICQoX3RoaXMpLmRhdGEoJ2Rlc2MnKSxcclxuICAgICAgICAgICAgX3RoaXNMaW5rID0gJChfdGhpcykuZGF0YSgnbGluaycpXHJcblxyXG4gICAgICAgICAgICAkKCcucHJvZHVjdGlvbi1jYXJvdXNlbF9fbGVmdF9faGVhZGluZycpLmh0bWwoX3RoaXNUaXRsZSlcclxuICAgICAgICAgICAgJCgnLnByb2R1Y3Rpb24tY2Fyb3VzZWxfX2xlZnRfX2Rlc2MnKS5odG1sKF90aGlzRGVzYylcclxuICAgICAgICAgICAgJCgnLnByb2R1Y3Rpb24tY2Fyb3VzZWxfX2xlZnRfX2J0biAuYnRuJykuYXR0cignaHJlZicsIF90aGlzTGluaylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ2Zvcm0nKS5wYXJzbGV5KClcclxuXHJcbiAgICAgICAgdmFyIHBob25lSW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5wdXQtcGhvbmUnKTtcclxuXHJcbiAgICAgICAgaWYocGhvbmVJbnB1dHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwaG9uZUlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbmV3IElNYXNrKFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lSW5wdXRzW2ldLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFzazogJyt7N30oOTAwKTAwMC0wMC0wMCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgJCgnLmlzLS1maWxlLWZvcm0gaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBmaWxlbmFtZSA9ICQodGhpcykudmFsKCkucmVwbGFjZSgvQzpcXFxcZmFrZXBhdGhcXFxcL2ksICcnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuaXMtLWxhYmVsJykuaHRtbChmaWxlbmFtZSlcclxuICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCJmdW5jdGlvbiBvcGVuTW9kYWwobW9kYWxJRCkge1xyXG4gICAgJChtb2RhbElEKS5tb2RhbCh7XHJcbiAgICAgICAgZmFkZUR1cmF0aW9uOiAxMDAsXHJcbiAgICAgICAgc2hvd0Nsb3NlOiBmYWxzZSxcclxuICAgIH0pXHJcbn1cclxuXHJcbihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnYS5tb2RhbC1vcGVuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgdmFyIHRoaXNNb2RhbElkID0gJCh0aGlzKS5hdHRyKCdocmVmJylcclxuICAgICAgICAgICAgb3Blbk1vZGFsKHRoaXNNb2RhbElkKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLm1vZGFsX19waWNrZXJfX2Jsb2NrX19pbm5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgY29sb3IgPSAkKHRoaXMpLmRhdGEoJ2NvbG9yJylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY29sb3IpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIG9wZW5Nb2RhbCgnI21vZGFsX3BpY2tlcicpXHJcblxyXG4gICAgICAgIC8vIHZhciBwaWNrciA9IFBpY2tyLmNyZWF0ZSh7XHJcbiAgICAgICAgLy8gICAgIGVsOiAnLmNvbG9yX3BpY2tlcl9faW5uZXInLFxyXG4gICAgICAgIC8vICAgICB0aGVtZTogJ25hbm8nLFxyXG4gICAgICAgIC8vICAgICBjb250YWluZXI6ICcuY29sb3JfcGlja2VyJyxcclxuICAgICAgICBcclxuICAgICAgICAvLyAgICAgc3dhdGNoZXM6IG51bGwsXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAvLyAgICAgICAgIGh1ZTogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgICAgIHByZXZpZXc6IHRydWUsXHJcbiAgICAgICAgLy8gICAgICAgICBpbnRlcmFjdGlvbjoge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlucHV0OiB0cnVlLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHNhdmU6IHRydWVcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc3RyaW5nczoge1xyXG4gICAgICAgIC8vICAgICAgICAgc2F2ZTogJ9CS0YvQsdGA0LDRgtGMJywgIC8vIERlZmF1bHQgZm9yIHNhdmUgYnV0dG9uXHJcbiAgICAgICAgLy8gICAgICAgICBjbGVhcjogJ9Ce0YfQuNGB0YLQuNGC0YwnLCAvLyBEZWZhdWx0IGZvciBjbGVhciBidXR0b25cclxuICAgICAgICAvLyAgICAgICAgIGNhbmNlbDogJ9Ce0YLQvNC10L3QuNGC0YwnIC8vIERlZmF1bHQgZm9yIGNhbmNlbCBidXR0b25cclxuICAgICAgICAvLyAgICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgLy8gcGlja3Iub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGNvbG9yLCBpbnN0YW5jZSkge1xyXG4gICAgICAgIC8vICAgICAkKCcuY29sb3JfcGlja2VyX3ByZXYgc3BhbicpLmNzcyh7XHJcbiAgICAgICAgLy8gICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjJyArIGNvbG9yLnRvSEVYQSgpWzBdICsgY29sb3IudG9IRVhBKClbMV0gKyBjb2xvci50b0hFWEEoKVsyXVxyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIC8vIFxyXG4gICAgICAgIC8vICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtLWRyb3AnKVxyXG4gICAgICAgIC8vIFxyXG5cclxuICAgICAgICB2YXIgaXNNb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXJfX2FzaWRlIC5pcy0tbWwnKTtcclxuICAgICAgICB2YXIgaXNNb3ZlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuU2VhcmNoUGFuZWwoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnaXMtLXNlYXJjaCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZVNlYXJjaFBhbmVsKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyJykucmVtb3ZlQ2xhc3MoJ2lzLS1zZWFyY2gnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3Blbk1vYmlsZVNlYXJjaFBhbmVsKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19hc2lkZV9fYnRuc19fc2VhcmNoJykuYWRkQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlTW9iaWxlU2VhcmNoUGFuZWwoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2FzaWRlX19idG5zX19zZWFyY2gnKS5yZW1vdmVDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlU2hvd0l0ZW1zTWVudSgpIHtcclxuICAgICAgICAgICAgaXNNb3ZlZCA9ICFpc01vdmVkO1xyXG5cclxuICAgICAgICAgICAgZm9yICggdmFyIGk9IGl0ZW1zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICkge1xyXG4gICAgICAgICAgICAgIHZhciB0b2dnbGVJdGVtTW92ZSA9IGdldFRvZ2dsZUl0ZW1Nb3ZlKCBpICk7XHJcbiAgICAgICAgICAgICAgdmFyIGRlbGF5ID0gaXNNb3ZlZCA/ICggMCArIGkpIDogaTtcclxuICAgICAgICAgICAgICBkZWxheSAqPSAxNTA7XHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dCggdG9nZ2xlSXRlbU1vdmUsIGRlbGF5ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldFRvZ2dsZUl0ZW1Nb3ZlKCBpICkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdpcy0tbW92ZWQnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5Nb2JpbGVNZW51KCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19tb2JpbGUgYnV0dG9uJykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2FzaWRlJykuYWRkQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpcy0tbWVudS1vcGVuJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlTW9iaWxlTWVudSgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fbW9iaWxlIGJ1dHRvbicpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19hc2lkZScpLnJlbW92ZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXMtLW1lbnUtb3BlbicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVOYXZiYXIoKSB7XHJcbiAgICAgICAgICAgIGlmKCQoJy5uYXZiYXJfX21vYmlsZSBidXR0b24nKS5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlTW9iaWxlTWVudSgpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIG9wZW5Nb2JpbGVNZW51KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b2dnbGVTaG93SXRlbXNNZW51KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE5hdmJhckRlZmF1bHRNb2RlKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXROYXZiYXJEZWZhdWx0TW9kZShoZWlnaHQpIHtcclxuICAgICAgICAgICAgaWYoaGVpZ2h0ID4gMTApIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnaXMtLXNjcm9sbCcpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5yZW1vdmVDbGFzcygnaXMtLXNjcm9sbCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldFBURHJvcCgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fZHJvcCcpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgaXNTY3JvbGxcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlbkRyb3AoKSB7IFxyXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzLS1kcm9wJylcclxuXHJcbiAgICAgICAgICAgIGlzU2Nyb2xsID0gJCgnLm5hdmJhci5pcy0tc2Nyb2xsJylcclxuXHJcbiAgICAgICAgICAgICQoJy5uYXZiYXInKS5yZW1vdmVDbGFzcygnaXMtLXNjcm9sbCcpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRQVERyb3AoKVxyXG4gICAgICAgICAgICB9LCAxMDApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZURyb3AoKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXMtLWRyb3AnKVxyXG5cclxuICAgICAgICAgICAgaWYoaXNTY3JvbGwubGVuZ3RoID4gMCkgJCgnLm5hdmJhcicpLmFkZENsYXNzKCdpcy0tc2Nyb2xsJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZURyb3AoKSB7XHJcbiAgICAgICAgICAgIGlmKCQoJ2JvZHknKS5oYXNDbGFzcygnaXMtLWRyb3AnKSkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VEcm9wKClcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3BlbkRyb3AoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcjb3BlblNlYXJjaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBvcGVuU2VhcmNoUGFuZWwoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJyNvcGVuTW9iaWxlU2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG9wZW5Nb2JpbGVTZWFyY2hQYW5lbCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldHMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubmF2YmFyJylcclxuICAgICAgICAgICAgaWYodGFyZ2V0cy5sZW5ndGggPD0gMCkgY2xvc2VTZWFyY2hQYW5lbCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0cyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5uYXZiYXJfX2FzaWRlX19idG5zJylcclxuICAgICAgICAgICAgaWYodGFyZ2V0cy5sZW5ndGggPD0gMCkgY2xvc2VNb2JpbGVTZWFyY2hQYW5lbCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLm5hdmJhcl9fbW9iaWxlIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0b2dnbGVOYXZiYXIoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0TmF2YmFyRGVmYXVsdE1vZGUoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmlzLS1vcGVuLWRyb3AnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKSAgXHJcbiAgICAgICAgICAgIHRvZ2dsZURyb3AoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNldFBURHJvcCgpXHJcblxyXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldFBURHJvcCgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZVRhYnMoKSB7XHJcbiAgICAgICAgICAgICQoJy50YWItaXRlbScpLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgJCgnLnRhYnMtbWVudSB1bCBsaScpLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5UYWIoaWQsIG5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgIGNsb3NlVGFicygpXHJcblxyXG4gICAgICAgICAgICAkKCcudGFicy1jb250YWluZXJbZGF0YS10YWJuYW1lPVwiJyArIG5hbWUgKyAnXCJdIC50YWItaXRlbVtkYXRhLXRhYmlkPVwiJyArIGlkICsgJ1wiXScpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgJCgnLnRhYnMtbWVudSB1bFtkYXRhLXRhYm5hbWU9XCInICsgbmFtZSArICdcIl0gbGlbZGF0YS10YWJpZD1cIicgKyBpZCArICdcIl0nKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLnRhYnMtbWVudSB1bCBsaScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgbmFtZSA9ICQodGhpcykucGFyZW50KCd1bCcpLmRhdGEoJ3RhYm5hbWUnKVxyXG4gICAgICAgICAgICB2YXIgdGhpc0lkID0gJCh0aGlzKS5kYXRhKCd0YWJpZCcpXHJcblxyXG4gICAgICAgICAgICBvcGVuVGFiKHRoaXNJZCwgbmFtZSlcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgaGVpZ2h0ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNob3coKSB7XHJcbiAgICAgICAgICAgICQoJy50by10b3AnKS5hZGRDbGFzcygnaXMtLXNob3cnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGlkZSgpIHtcclxuICAgICAgICAgICAgJCgnLnRvLXRvcCcpLnJlbW92ZUNsYXNzKCdpcy0tc2hvdycpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGhlaWdodCA9ICQod2luZG93KS5zY3JvbGxUb3AoKVxyXG5cclxuICAgICAgICAgICAgaWYoaGVpZ2h0ID4gMTAwMCkgc2hvdygpXHJcbiAgICAgICAgICAgIGVsc2UgaWYoaGVpZ2h0IDwgMTAwMCkgaGlkZSgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLnRvLXRvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCdzbG93Jyk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyJdfQ==

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