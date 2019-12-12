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

        $('.is--del-form').hide();

        $('#f_delivery').change(function(e) {
            $('.is--del-form').hide();
            $('#f_delivery-a').val('');
            
            var val = e.target.value
            
            if(val == 'd') {

            }else if(val == 's') {
                openModal('#modal_map')                
            }

            $('.is--del-form').show();

        })  

        // var ourWidjet = new ISDEKWidjet ({
        //     defaultCity: 'Москва',
        //     cityFrom: 'Москва',
        //     country: 'Россия',
        //     link: 'modal-map__inner',
        //     path: 'https://www.cdek.ru/website/edostavka/template/scripts/',
        //     servicepath: 'http://frontend.dorohovdesign.ru/svdecor/service.php',
        //     hidedelt: true,
        //     onChoose: function(wat) {
        //         $('#f_delivery-a').val(wat.cityName + ', ' + wat.PVZ.Address);
        //         $.modal.close();
        //     }
        // });

        $('.modal__picker__block__inner').on('click', function() {
            var thisColor = $(this).data('color')
            var thisColorName = $(this).data('colorname')

            $.modal.close();

            $('.item-basket__line__color span').removeAttr('class').addClass(thisColor)
            $('#ral-color').val(thisColorName)
        })

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        var colors = [
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAGmCAYAAAA0z7tHAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAg3aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMTItMDJUMTA6MjI6MjErMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMTItMDJUMTA6MjI6MjErMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTEyLTAyVDEwOjIyOjIxKzAzOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdkZmIxNTMyLTlmMGQtNjM0Zi04ZmFjLWM5NWQxMjk5MDBkNCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmY5NGE4M2Y3LWYzN2ItN2E0Ny04MTQ0LWIzMDc0ZmIyZjc1MyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiOWFiZmJiLWU2MjktMDU0Mi1hMzZkLWIwMjdmMDI4MTc1ZSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmJiOWFiZmJiLWU2MjktMDU0Mi1hMzZkLWIwMjdmMDI4MTc1ZSIgc3RFdnQ6d2hlbj0iMjAxOS0xMi0wMlQxMDoyMjoyMSswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ZGZiMTUzMi05ZjBkLTYzNGYtOGZhYy1jOTVkMTI5OTAwZDQiIHN0RXZ0OndoZW49IjIwMTktMTItMDJUMTA6MjI6MjErMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjBiYjY3MDlkLTEyN2ItMTFlYS05MmE0LWFhYTZiOGNmNTNlNTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxYzg1YjkzYy0xMjdiLTExZWEtOTJhNC1hYWE2YjhjZjUzZTU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MmE5NjA4ZWItMTI3Yi0xMWVhLTkyYTQtYWFhNmI4Y2Y1M2U1PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjU2NzEyYzY1LTEyN2EtMTFlYS05MmE0LWFhYTZiOGNmNTNlNTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiNWZjNjViZi0xMjdhLTExZWEtOTJhNC1hYWE2YjhjZjUzZTU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDMzM2E1M2QtMTI3YS0xMWVhLTkyYTQtYWFhNmI4Y2Y1M2U1PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmY3YmEyYjAyLTEyN2EtMTFlYS05MmE0LWFhYTZiOGNmNTNlNTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Puw1Xh8AAL6ySURBVHic7P15mC3JdR8G/s6JzLxL7W9fekc31iZAEADBVSQxlkiQpiSKGksayxqatD9Sn0YkZ8b2fCPL4/nG1owsyuKIsj7RtiRKHkuUNDZpjWhQIkSACwhwEcAGiKU3oNHb6+631qv13syMOPNHxImIvFXV3a9Rr1++unX6e1335s0lIjJ+Z4tzTpCI4Fbo6b/wA7d0/ptK4iBtC3vvW2GWllE880XQu78J02e/DDp7ETh5FphO7nQrDyY2gGtP8qVnXy5sUzx9YxO/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',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAGmCAYAAAA0z7tHAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAg3aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMTItMDJUMTA6MjI6MzMrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMTItMDJUMTA6MjI6MzMrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTEyLTAyVDEwOjIyOjMzKzAzOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc5MGUyZmFkLTg2Y2MtZmI0Ny1iYTg2LWZiNTcxZTc2MTVjNyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmMwNjJmM2Q4LWI5MTAtYWY0ZC05MGU4LWY5OTg3YWQ3YTkxMyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjhmYzFiYzNiLTQzMTQtZGM0MC1iZjg0LTU4NWQ0YWE5YjNiYiIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjhmYzFiYzNiLTQzMTQtZGM0MC1iZjg0LTU4NWQ0YWE5YjNiYiIgc3RFdnQ6d2hlbj0iMjAxOS0xMi0wMlQxMDoyMjozMyswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3OTBlMmZhZC04NmNjLWZiNDctYmE4Ni1mYjU3MWU3NjE1YzciIHN0RXZ0OndoZW49IjIwMTktMTItMDJUMTA6MjI6MzMrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjBiYjY3MDlkLTEyN2ItMTFlYS05MmE0LWFhYTZiOGNmNTNlNTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxYzg1YjkzYy0xMjdiLTExZWEtOTJhNC1hYWE2YjhjZjUzZTU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MmE5NjA4ZWItMTI3Yi0xMWVhLTkyYTQtYWFhNmI4Y2Y1M2U1PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjU2NzEyYzY1LTEyN2EtMTFlYS05MmE0LWFhYTZiOGNmNTNlNTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiNWZjNjViZi0xMjdhLTExZWEtOTJhNC1hYWE2YjhjZjUzZTU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDMzM2E1M2QtMTI3YS0xMWVhLTkyYTQtYWFhNmI4Y2Y1M2U1PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmY3YmEyYjAyLTEyN2EtMTFlYS05MmE0LWFhYTZiOGNmNTNlNTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtZ4iMkAAJikSURBVHic7P15vC3JVR6IfmtFZu7xDPfcoW7VrblKKqEBkBAINADCAwgMGGgG/2RjGtsPD8+A/bC7bdOv+2c33R6ezcPdbQPt2Rjc7gaDGwuwHkggIYxB81CaqlTzdMcz7r0zM2K9PyIiM3LY+5xz61TdPGefVbXv2TszMjIycn2xhlixgkQEh6Gf+PofO1T5l5PECHSucfE1lzBYG+LpDz+OB776IVz+/PNYv+ss1m5fQzbNbnUz5xIrhsnN2auPXH5Op1mU6hw3rl7/oJ7mb2TmW928hSQk4JyhJgDuTxBf7EOezpA9OwHdmcAogDcN+FICfT0DxQTkACICegRc19C5Bu8KMAPQkcf9oV/7G63Ho5e5HS87EROICNe+cBmTqzsw2tzqJu1HEQCwUoDJAWBFZQxFDKFb27B9SSyAut7Mo6ATDxwxAhHBuQduw9rt68jSDkscZhht9OXPPod8moEsC2YgQDoyAp+SpRMPHC9xXvjMs9h85jqkwxJHICCigYoUqUghS3NAIMKAqFvdusUkEJAm0OE0/2NLJx44gH2pyTBBf2UAk+tb3Zy5JBCwYqVTDZ1qEAEg5EICQdc5UrAUOpqjpQAOgZDNMkR7MxjTYYljBKoXRUwMiABCQIQ8G2goRqehIyyIpox4bznQc+KBQ0wAAVc+/zyYGXYY7yYZbaAS1bvtoTtIxQrIM1jlhzoNGkt0KnFOIqkkgopUp1+uGAERXRNjpoAaggAYKE4JrDrccAAgAeXLA56lAQ6RdRJ0+sUSQExp0UgiQEhYd2ZaYz4RgbqrBR85LQ1wjhExIN4xAIj0OGdw5/3RAhg6ncc5pVtGCQGKiKyDAG46p/Pc2HFpfsR0CpzuUU9A5EOhBJKLEgh32z0gJGBQt11/R0inwOke9awf2okZspOfXdfUxHnQO97MI6NT4HSPtgAYKqBDGsfA6CbB0kgbYImAI0ZsgGeH9XAxAhJaAxBbPhQAiDgHuPMhN9arJkti6iwHcASI+hHiXoxDrqJ4WUlEQEQvgGhLjKyDCARiq691mx2JxHkxOtzBR0jLARx4idNtfUKMAEw3yK5IAQkgjK18oMFddw4woFJCNO02wI+KlgM4BOSzHCYzoA5br8YImGksIqNistbI7WrGY1a8c6vbt5AIIH2qqp0YEgFEC1YurGKwOoDu8LICR7ukeFeMGQsACNZUxsK6++xoZ526LRmPik48cPwMfLqXArB2RGdJADGSqTi6EsXRbWzDhK4Ykl3h7gOnw1rwkdOJBw4AiFtKkAx7nV6PAzgHAdOWSLECZxXAAILJLW3YQegUOCeLiBkm15htTyHSXVVNxAInGfUib+IIY2hiGYBk0nXjgQxA+a1uxctDSwEc0QZxP8bw3LjbEseN2BwpMUYAAZhoN1Nywy3L6SwJBEwE1eVGHiEtBXA4VpjtzqCfunarm7KQRARiBGfuOptESQTJABGMOaVzzPRCt3nydFnBiSOTayTDHlYurEJ3WeIAgAhUrDKbVEQAiHURSMcDKMk71LrcyKOjpQCOGEGUROitDaBn3U0PVZAgEyOwKwooF5KZdFxVA+wkaIenyY6UlgI4qhdh57Gr2L260+kJUBGBMYJz918Y9VcHwCSDCBQbSrjrq1cBJ2xOJc6JoXySYfXiGs7edwE667DbRwTEDJ3pqU3VSyCmhASDrmMGQKfjAI+algI4pAj5LMdkcw8m7y5wPONFSaSUYucBlOtZ3zzV8dTRNtRGA1F+HCD+4mkpgMNKIZ2k2Lm8XUyGdpEEAhhgdG5FJYMYJhPrVcvpHBM933VV7dSrdsJIZxr9lT7O3LXRba+auGw8TGmeZtZTRRirjG47DsCBFGuITjwtBXBUrLC9NcG1x650O1YNgM41xufGMlgdIdc5AFwzEb7QeXeVzQEH6vC4dJS0FMDxNo7JdjudyRMAsjRDf9yf8RmGc6MZicQcB3f0MiW6WQrgWBXIqkHoeJSxczt/QSBfI1b3GVGGDSLsdp4ruy3Mj5SWBDgCUoyoF9/qluxPZHdmEyPW2Ga6ZsZ4Eh3POQACkANqdqsb8vLQUgBHxG7aFPXjzts4pNgCx+VaItC6mvAdzPzMrW7bQnI2zrK41pYCOKQIeZbD3NjrvBKepzl6455mxW4iXmLKpH8s9p/p9ph0pLQUwPFuXhV3Xd/xC9mcxLH/ayGkRS7pLpMAOPWqnRzSaY7+ygAb956DTjv+Zq1n6kbZTlEgJLe0TafUoKUATkHG7gLQaY3CCDiJIjEueaKA4FOWnVJnaCmAY3KNeJBg7fYz0Fp3HDmAznKzfXnb/iDKAaS3tEGn1KClAI7NOZBhtjeFzrqvqulMGyKyEhIgUJcXQywnLQVwxAg4YiTDHnTa3ehowDoxMsqQ7qYeLwmJDDs/Ld9xKX7UtBTAYcVId1LsXt3uvsQBbJIOxcjtEogdIVzpvFdtedJGA1gS4ICsmzfP9LEAjt2v1OHEJo6JOw0a4BQ4J5mYGabjycst/4lY04YAQQTj3NFdB88S0dIAR0Sgc93tvGqOFLMiVawI1QDSY7EPaLfHpCOlpQAOKYbONCY39uzmUh0mMQa9cT/qjfpeV4sgGN7qdu1LSwQaYEmA4zN5rty2eiwiByCSijZ2fxxIjhjTYyFxDIBuOy2PjJYCOCDAGAM9y6CzbkscQEBEMUc+rk62AbxwK1t0Sk1aCuCoOMJse4rnP/1s51eA6lmGwcb48tl7z0PyDARaQYY7ADzW6eXTp6raySM7Aaow2hjDrarsLIk2iAbxZ2DELsAjGoJpFUC3VbVTd/TJI51rxL0IZ+7agDEGXd7+nJhgcr2rc2Pd0cCMtGzj2GTyXA5aCuAwM0xuMN2c2P1xOvyCRQSseKASu0O2AGL6kK4nJCyy3Oze6oa8PLQUwPErQDefu4FOowYuB9zqoLd28QwoIxBTHzG9AqDHbnXbFpL3+lG3VeGjoqUAjhiBihRGZ0YwHc85INogSqLdYuc4BnhPYsoFnU7YIcHfrquUR0BLARwigtEG0+0puj4cmlxDRv1xf3VgR28DGMaOUuj+HhqnS6dPFpEi6Fxj7/ouuj6RqGc5QHSJmMHEtq2MQeedAz7LTdbtgemoaCmAUyTriFS3mQ+wS6cVb0F8rJqAhFIY6bbEEXRdmB8pLQdwjh+dA1DukK3IBnl2PAuptW+WAz2nwOkYObbT8Cl7AUBkBV3fAxRYKqlzCpxuEpfuKQIyGUKj26oasDSgAU6B0zlykSu6EsOiSEPoeABnSbxqXX8Vy0oM2Ow8IECMOU0P1TE6BU436Yy1F8Q5ATvuFFhCOgVON2kS2jhEp++pa7RUNk7Xt/gAbHgQRF7wfgERUwqeU+oMLQ1wjstuBbDR0TviXLtMDCKs3OpmnVKVlgI4YgTEhGTY6/yuyCpXUL14S0TK8CCbeL3btERzOMCSAIc4CPLsuNKj0xys+BK7bRWMAFBum7OuWzqC02QdJ4nc4jD0Rt2XOCZRUEmcFnFqEEAhOjbzOKchNyeInIOKFHdf5xGAmZR1ZBBIMZBhHWnHgzyBpVLXlgI4pAg609i9sn0sVLXh2fF45cIqkANsCGYgL2DQ8WUFjngTSwGepQDOsVpWIG5ZAZxfgAASWhLL4fjQcgDn+JGNHCCCQEBTGXN+TGwcg+4PTkdAp8DpGhHB5OYZY8Rt90EQggbjeABnSegUON0km2TJRToQwMdiJO9wvrqjpqUCzrEIuREJ2un2yFE0haD7EodxOo9zEulYOAcAcKQuW4cGYHfTxQoyAVTHG9/9cenIaKmAA8BxY5ffMIGA3LeRAEBBIT4mzoFTiXPySGe68xJHZxo6iex7IbJqm8J1AY5Fsg46jRw4gdRxviuIwCACjLFtzjCg7DRyoEu0HMBxE6CD1SFIUaedBEYLol6U+TYSEQjoHQuvWne79chpOYADQCAwxlgLosMvWLSBGHGxqN6rxjPEx8Q5oDvcuUdIywEc5w+Ybu55fuws6VSjvzLA6oVgLykCdz7w2Pdpl9t4hLQUwBE3C796cR0cs12e3FFyu8elxq2XtmaDjAgC6TDgPXV8p8gjo6UADoXDYXcxY8muw4mK7DZGIJH0JEKnJSUAG+KQA7QEEQRLARy/DDkeJFCxgum0Hi4gIm2bbD1plOISzQDqesoEAZCh+96/I6ClAE6RHjPNIUZgOqyquWUFwpFyCyoJiNyygq7P4xCsc6DD3XtUtBzAcaSzHEak4zaOgYojismqmEQEMD0LlmOhqi0LLRVwiAnMBNPpIZFKA5sAYYBm5iztANT1t2UAMThV1U4Klc4BP4fT9aGR7IyNADACo5DTsPs2jgjAUyzF8oKlAI7Hic40jJFORw6INiDnl3IZomyWHqHOMySdhtycLBJj7YP+av9YeNVAZIqdC0UAAyHTdSkZ0DFq6s3SUgDHk4ojqCQC6Q4P3dYDaMTYqBtihmJORCRQObtJcgz8F0dFSwEcYoIYwY2nrtvvHdYnTG4QD5L+2u3rVvgwASDV+c1zcaqqnTxyw6DRpvMv1+QaYkxh48AIRImmPh2PeRxzOo9z8kgEHfYLAHD5OQR9CMr9cg1y5N2XOABO00OdRCJ2o3aHwUMsABEjTNwpy7Kz5vGhpQKOCEDHQeSI7FaOkewei7xqQGXP35NMSwWcfJpBqNvbm+WphopVr5jEASBGzrLh7qtAHbcfj5KWCjhRL+o88xEzVBJxmYyQIBF9kWZxHrbukkDssoJb3ZCXgZYCOKIt061fOgNOIpguz+MAIGBPjAERQ4wBWPrMHY+3gcuPwMshcpYCOOQcAns39kCKOx9yE/VijDZGRZAnUunTpPteNRJA8uWYBV0K4NjdmwV713eL310lneborQz6o7NjAC5AlWkiqvvJOkSWY/UnsCTA8TkH1m5fB0cKbn6xkyQiUJHKbHydXY/DzDlYur+ev9zs98TTUgDHb2UYD2JwHEE6bOPYbXEoLfIjEACDFcoBdNzMIb8ep+sAPwJaCuCQsrFqm8/ccLFq3SWTaSTD3srapTPuAGBYpujjGDCkgCYdT2N1RLQUwBHtVLU7zkAdA68agC2rXsIJHknFq0FdJjpND3WyiAAwYbK513nmM1oQJQrDjTEsJwrISEQ5dZ4pXVzdUtDSAIdgV4BKx5Vwk2tw1H8FE/mAT0BRJtz94VxIQDlOnQMnhtyLZCZI1y1sEbCidZD1Brqmd9wRbYm8S+04NPZF0lIAR0RAitFbHViJ0+ERUYxAJep5MUXeaCAXphk6PwEKgZU4p8A5GSRiQ27ifmzncDoMHEBAzLoa3UDssqzdslYdhCT496TTUgCHiCDaYLYzteE2HX63xhhEvbjXHyu7wsA2VrHpvluN5HhsUHwUtBTAcTsAYLA+PAYSBwAw89EOZAiGZS8dapvVs8MkJFC7BHUctlV4kbQUwCGyE6D5NIPpuMQRESilhlEvQrBFuyJNoK7bOB3ftOsoaSmAwxEjTzPceOo6pOPT2ibVGKwPV9cvbcDkBgIBaYyilI+FcwBaliJ0YCmAI2LVHo4Vuj4kkgCk+IqUcWoAS2qUdF7iiPOqnXxFbUmAAwFYMfor/c4br0YbRP2YfDsFAhHEXbdvADc/uwTSBlgS4BARjDaYbLoIxA6/W5Np9NcGl2h9BHGpeknoM/bLrWzZIajD/XtUtBTAAduRPN2Zdd5O0LMMqh8nRAS/Ya4ofCqPzPHwqqXL4SBYCuCIFqhIYbA27HT6WwCQXCMe9Z8RlxHTzTuNSTofquZjUo+PZHwRtBTAAQAQgaNu5xsAbAZZZmLAZR0lgDTWOUfnpSUBp5k8TxL5yIF0Z9b5Lc91psGKhyACyEAIYEOiUu78ClAIdXqbyKOkpQCOT9aRzbLOj4Y6zaEHSVTYMwKIkm0zQOclDgTAdDkca0sBHJ1pxMMEFx68DbrjITcEQARP6jS3zRQBiPpdBzyAYt3TMtBSAAew8Wr5LIfp+LICtyeOsFIeNCCNDUpxPCTOqY1zckjFCvk0w+XPPd/5l6rTHION0evO3nMeeZZ5L+DM7uvT8cafRkefYOo47wEAASMAVvoIYFgyHZnubywFmyKq+6188bRUwCHuvhJOTCCiVYL1BkIIJpEnTU+OxQRorBk4Thv93iQtB3Dc+n2d5p0ftXWaw2iT+W3awYBK6XbWfCx2KyCNpXCrLQVwTGrQX+lj7Y516Lzj+YvsMu+Jzt0mbASw5nE0JUjX53GM313hVjfkpaelAA7Ixqrl07zzyQiNMUhG/Q1mgtawBneEGyZB94EjApqh217LI6KlAY6IQGe60wnXAQtwn9vaJvgTCMvU9NB9GwcAsqXQ1JYEOAIwMyKf5abDJMaAFE1Lry5BIJnBcYjyBFTXvS9HREsBHJusg9Eb91DYDt0m7XNHCwnY8G2c4likJSRzmpDw5JD3qmV5550DIgJWykSxDRyAEUgk1yXuPjcKAZwtx+ZSSwEclUSYbk/w3Kemnff45LMMG3efu2P90gbSyQwQwIhxCQe6bTzIcggbAEsCHJPl6I36WL1t7Rh41QTxIN7WaW5BQwLK6Iwy3Z+8FcDN49zqlrz0tBTAISZobTDbnXU+lsruVsDjZJBAHFaI8DlhdJ8hvcTpejuPgJYDOEohn6bYmmTHQlXjJFofbYxBmQYMoGO5LKrbgPdEUzp1R58YcrsVRHH3H5eYwIondiWlQCDglFaiY6CqAac5B04UiTaI4gjDjbENCekwGdvWG6aYBBVAup5/1NFyJPEEsCzAgZ11Z8WdD9xlAFE/2iGyXiqx+aMJx2UkPw5tPAJaDuAcowlQMYIoiYz3YRABds+C48KRyyFylgI4US/C7rVdTLb20PUhMU8znLv3Qm/90hnoPIcxAjHQJN1fALpMtBTAmVzfxaUvuRt3f+l9yPLsVjdnISli7Fzbuf/aY5dBiuwaF8EQOTqfdB1+s98loKUATjbJsHpxDfd91Ssw2d271c1ZSP1BH5/9rU/dMduZorfWt7sXRJRTxF0XlnYJRK6XAjxLAZyVi2t45H2fwZMfeQwm67hXzRiMz45nqxfXMJukABE0mykpcyz4setLho6KlgI4O5e3cM9XPIDXfv2XYjqd3urmLKQkSfD4hx7FUx96DMm4BwJBCEaj24D3xHR83BgvhpYCOBwppHszbF3eRDpNb3VzFlIcR8gnKThSbmdAgTJkN8/tOkeezuOcMPI7sjGDVbctbGIuFqxZl7S4+ZxjsJDNbT3U8VYeCS0FcGa7Kc7cdRYPvuUhTKezW92chdTr9TDdneCpDz+GQX/sk/wRgY+FjbMstBTAiXsRdq/u4LnPPou048CJ4xh713cR9WJYaSMgoeMxhXMaHX2ySMUK0+0Jbjx7Hdmkw8AhQKkI082JqMS+GhvmKWw6vhyipCVADZYGOBGmWxNcf/wK8qy7E6AiQBQp5JkmpRjGxaoxaKDkGKhqNovirW7Fy0JLAZz+2gBPfehxPPPxJzttX4sRGBFceu1d0cqFNext74EA6Ei2EXV7019PKl0Oz9pSACdPc5y5+ywGq8NOrwAVm2AAcT/p5amVjMYIWChWmrqNG4JzR3e6lUdGJx44Pmf07a+9Cxfuvw1p2l1VjQhgZnr2U0+tTq7vwcDYhWyGZmwYx2NVznFo44unEw8cEEHFEa4++gKmWxOYrNvLCkBEorVSiYJONSCCHPpxw91mSL+1fCTcaXX4qOjkAwcACNBZjnwvhTYdBo7djU1xpBRAIBcOLSRx151VRACWZG8cYEmAI0YQDxL01wfI0+4Cx43UWT7NUnFJyogZKmeKoLpvdXe8eUdJJx44RABHjK2nb2ByY6/T24mLDQ3qrd621leJAnLbVjLUZwGk6zqQFP+ceDrxwAEAAsHkBjrTnZ5ncMBhEWEihhGBMRqKqOMuteWjkw8cAsDA3o1dEAjU4cTlRhuwYlq5bY2IbbYOEoYk2Ol6khF4GyfHUgidEw8ckwtggPu+8kEMz4yhdX6rmzSXiAhihCabkyifZTYXc0SAFoUMnU+mWCyd7jrIj4BOPHB8oGQy6mGwOkCedxs4AM6mu+laNkmdWilgooRtMtxb28ADkFB3nS9HSSceOGJsqMrGPeewcec5pLPuLmTjSMHkerb93JYWIxExAQaQVFiEOm2fAThN1nGSSEUKpAgf+8UPIupFnX6vog1UEg3W7linqBcjn2q7CjQ3WrQcA1VtOZZNA0sAHGMMxAguvuYSxhsryLts4wjAseKdKzvIdmeFwc0DNVV8DKKjDSDbuvOC8SjoxAOHiEBEmG1PoVhB6w7r4Ha4jnWagxVD7+VQ/Qj3/5EvkniQQKfdBb3qRci3Uzz2bx5GNutuO4+KlgI4IGDnhS3MdqadnwBlpulgfQSO2C5hM4JsOyVkdtfsrpKZaeS72fHIjXAEdOKBI2KdA9EgRjLqFVuhd5h24VYYqFjB7Gk899uPQynV6SURYAJyuz82H4PtVF4snfgnFLHu6HP3X8DK+bVOrwAlZog2fP3JazCZRj7LEfUivPIbX4u4n9ho6Y6S6kfItmf49L/+CNIOt/Oo6MQDx6tqe9f3QKBu71ZgM11EgNt+MdXgocJdb7kfvXEf2aS7oI/HPUyu7OBzP/dx6A4PTkdFJx84bJ0DT3/0cXCQs6yLZLRG1Iv6tz10B6k4gooVsjzH5U89J71xH/m0uwwZDWLMNqc2bCjqut/8xdOJB46nuJ9AxarTk+9uN7Ye3K5Sqq9gtjU++TMfVKSp08sKiAkmt6tto/7JZ6uT/4THjaj8X6caEhHWXnWOWAgi3XVsUMQwU43LVyY2PvCE09IAR0TQ9dl3MQIxcgkAwyXuiJhx4bW362TU6/Y8Tj9CujXD1f/yLLIu25FHREsDHACdVtMC2vIpmKN+jL3tCR5918NQSqHLSQlJESQ10KmGT6Z4kunkP+HxowFswgEIATrX2c6Tm9uMY7CxlLFSs8trno6KToHTPTLFAgKbqyw3eyYrEzN3mKRYGnHi6RQ4XSNB3/6BXxQ2wYBeEOr+/jhkAHR7364jo6UBjjO8O818RhtIXKaCclu1KxKJSLoPnKUIi3a0NMCJ+7EzWrv7clXGSFYGCSt2wagEEFhEFHV4DkfcvyS8NOA58cARp3fHgwRFAgzuZtIYZoaK1cDrac5cyA1LZrefvqXNaycDMMhFZHS0jS8BnXzgaI2oFyMexFi5sAajDdKdKZJxH1ESFcnCO0EEQGSSTzOIyzHAzFrEpAR0q50gm9eaGCw2rMl0OUvqEdPJB47TeKJ+jMHZEc7dfx7ZXobnH34Gu1e30V8dIB72IKYbs/JEzKC8zBYjiJXhPhPv3dLR3LeHAGgUHUuxgrjk8MtEJx44nkyqMduZIR4muO21d+LOL78XT3/4cTzym5/G9aeuYXR2DFZ8a9e8iIAUQymFQsIQjUnRvRC6dquAQwBEAaLc1GwW7pK7XIDxtDTA8Wr4bGeKybVd3PXl9+LSl96D0bkVfP43PoW9q7swEUNFDL5Vi8asUaNFBAQCCwEKanJRD9gz7S0gIYFKCfELbNPyKiyNLTOPlgc4jor1OVd3kU5SwAi+5LvehEd+82F85lc/gTzNYXINTqLC3n25KJ9lGG6sDG971e2AEYAJRgS8JXZDtlvBrEZAPQLnDGgHmlNaPuAU5EAx25lh9ZJCf3WAe978IO550/145iNPgSBQvRhxP35ZHAgCgJlgcj29+uhlmNyAmMAgRJtEkZvHEeME00sNIve8RAzOFASCHDmWJwHUYlpe4DiyKy1zTG7sIhkleOUfeg3iQQ/XvnAZz3z0CXCkXpa1b0bbaGjVjwhEdgGedmlxIyERa37TgCAaEI2XFjxOXUQMGGXbdkolLT1wPBEz8mmGrWc3sfn0NfQ3Rrjzjffi9//VBzDbniDqxS/JfX0ykf76AESEZNQzZ+7cgDHkfAMEnZk1xQqcMKjHkIl56dUmH6lwipdWOgVOGxmrNp255xx6K30YrRG/RMAxbp3Q6oU1jC+uYuuZG9s2NIjsQlBjMFgfxJFRyKDtmqIlSWzeZToFThs5ppxc34XOcsSDBKxemuGdIIAWGG3ezEp9V9SP35alOYjsjtOD/gCDteHfnW5Nvinbnvw6gX5u2eZMukinwJlDkxt7uOuN9+Kr/h9vxzMffQLDjdFLoraoSGG6M/2Wa49e/qW9q7uIejFMrp1JIej1e5hsTh5M89mDRuV/ioT+GxL6JgBPH31rAjqVaAvpFDhzKJtkOHvfeexd28X1x68i3ZkBIBitjzRTDgEQI1/MkV0tDSPFmhYRG8bCioAU0FkGAb4kRvINIPzTI2sEyl0dSLmMB3avnqO8xYmiU+DMIVaMbJphemMPw40xrj12BWIEUT8uUk4dhcokWhD3461klBTMa5Otu/0/iYqwIXsBAUfoFrDOBw2TGSQrCUTL0oXP3AydAueApLPcJnBnwnRzD95l/GLJZBpEw35vpQ+pB0k6j5udtrGhD2QjGo5skx+daXDEOP+Vd2DvmR3sPbEFio7BMu1bTKfAOQCJiI1jAxAPYuRpjL0rO5avtQ9wvDlO09MMUaJ6rNZgcl2M9QJbpZ+/AWx6ZkMMHNF786rY4PwQa686i92ndyDaWOCc0kI6Bc5hyK3lGawNkW7Pii0SiRk36zkwuUFvpb9ngmTw1TA5qnxnu6DtxeWJEpvVXfUUEDHAhGwr9YuXXlTVy0KnwDksiVvibAQcMfqrA5vZpVDdDgcgMQIVR7NwF4XCnCnCXujIGFq0XSDHMYOTCMboUyfATdApcG6WCMizHCJ25N56+gYAu4+njW4+GOlMY3BmOE6Gq+X+Nw5/NnLAl7QMf/CaayRW7YuGMQCBSU1hQ53S4ekUOC+GjJUG/fUhon6E3cs7mG1NnfpGB1qaoBIFFausMur7dANuEhTwiy4JsAvuDv7eCJDMQLRADSJE6wn0bgaZLM9qzZeCToHzYsgZ73qaIxn10V8bIttLsfPsFsQIBmeGBePPJREQ88zooJyXOMWhmu3hUkjt2zxnu3DC6N8+gt7LIbnpfLaf40CnwDkKIiCbZuivDpCs9LDW28DeCzvYfm4LpGhhkj6Ta/RWBkl8ZmQnVwO3mt20wAZ7+sVtRX61fRx5xITZ9SmGt42w8eW3I92cYvMTV6CGp6/8KOi0F4+IiAiiDfau7eDV3/6lgBB+88d+FaPzY/TGvblqmxiBSiKp7ERQNz3EzuNY17QARHsLjRMB0hszDC+NcenrHwApwuT5nVN75gjp1GF/xEREyCYZdJrj7Ksu4Nwrb0O2l4IVgxWDah9WDGYyFaYu3GplnX5LRndytf3m1muW7aRIzvRw/i2XoAYKs+tLkl7zZaRTiXPURFaK5LMM8TDB+ddexOXPPYcrj76AuJ801CuTaYzOjnsrF9ehM22TLnkQkVvyWeQr82E+0hzwiKCnOSQz2HjDbVDjGDrV0LvZkUQ4nFKVToHzUhERst0UUT/GmQfOI9/L3NoeY3e+dnaPyTVUEmXiAVIhlyNTUHoK7J9GyI1JbTDo6msu4MzrL2DzM1ety/l0QvMloVPgvIREbAMo9SwHKcJsdwoVReiNejAuj5tEDI6YQlyU8CmTC1jsFECYhPfI9+zeoBfefCeSswPrPcvMqefsJaRT4LxM5PeN0VmOfMYViRMZCVYph9+9Z6345T7o+Z/Z1gwrD5xBcmYAowX5JEMUN1XCUzpaOgXOy0jEhGwvhdHGqWwCk+UgRf3BxhgIw24acznuoP2tAEBya/GsPHgGEGD6wi6ilZdmifcpVekUOC8nuRgalUSImLz+hbifTMpYtdo6nyBMzbqjbdJCGAHHhP65AWAEeqpPnQAvI526o19mEhGY3ICZQQTsXdtFupdu2TRUVHzcFh/ODQ0YY6CNhjYaJjfPm8zYdQZEZQKPU3rZ6FTivJREgEoiEBNMbvyM/4gjPkuK1sD8YH998JZ4mHxjnmbQuS62ZBdjJzvFCJgZvV4fcRzDGANK8Idyzm6oXrQLwhOkaId7aoumBO4pqEFkIxbU0Sy2O6UmnQLnJaDeat/aH1pW093ZJZOb1yWr/a+NetGDgw16g4qjDbgt1jiyid5ne9PAdSwV7wATIVKqMHwM5AdkxfwAFMFkRk+e3Z2QoidNph/be2r76d4k+4KZmd+RXJ4mRU+qfjQhRZDcnEqmI6JT4NwkeZVLjF3cxooUR/yQStRXPP1fHnujCB7UWf5VT7z/kVXRBsOzo/JaYwqj3y8lsIvhfAFYJTrAjxFj50LdESvFBERQ2W46JsEXgemLZlspps/vgWNGvp1h9tzeNU74d/VEPxav9T4Nwrsh+IJomZ6uw7l5OgXOQUncHqLFXyTxIH6bStSDIvLl2ST7+jzN7zSpxjMffgrEhP5aH/kss2l0jRT2SlBpuLt0KQzmZHsn51UTuJS5LtJTxcrVK4j6kW2j2EnR6W66AcE7OFGIVhO7NJrjFzhW7xMjvyRZ/h4AT0UDv8nWKZgOQqfAmUeCwj7w+QZI8V1g+jqVRF+7ftfGO1SiboOLTfOgYsUYrA/gLHtESWTXi9UYkuC2UyS/+EZAFRvfgsfO45S/i7MEQPyWjATA2FqDhW9QBKXswjURsaoaAYj4gkr4O2DkO/SMMhA+sPvM9i/A4LcA+ojkp3kH9qNT4NRJ7Mge9SMM1oeIR70H0t3ZN4zOr34/RF5Piq3PK4kAY6yxTtYQr47WdU9XCQR/2h5dsB9pYNf7JQYlulz+M5+M3aWRKlYceHc3UADMX+6lpgDghGNjzNdc/ejzX6OSCMmFwWdMav5vSfVPy8x8DgTQ6dYeDToFjiM/sz/cGEH1IuQ7s2//nZ96z5/eenbzHdkkRTxKAL/lOxDsd1nlbqIwSDPIGxD8W/C943S/ZAB+qU0NSXXNrZgcLeqpHXTfQ6nGRX42K9lC/ZCIoBJly/XVQ2qoHpIs+hE91e+W3PxfAH5VcnnC5iug06gEnAIHYgTJMEFv3MPOlZ2zlz///B975qNP/IWdKzuv2ru6jWTcswk5vE3hmKbCOw3J4g6Kt0uk4GdvixTlWhaklTgJ6iqEjW9AHTn+ewA+Eu+8swvh/P2LagNEOrCJFkguABPUWP0h0fyHxCBDan4ZhH8rmfw7yaXI+LmstLTAESOI+zHG51ew9ezmlxsjf/rGE9e++wP/6DfWxAhUL8LK7WdKZwCAxkIZ/5Vqf+GkCEl5WT18poI2Kdbc+PL+0npWzXocG+BUuLp15A4R+aSgZdu9JGrLRVqASwSSF22OaaC+LRrwt0kmP2b29C+bqf5fJJdHl1WNWzrgiMuNtnbnGUw3J1/x7Kee/gvPfPjx7yXFiHoRTG4QDZRltkpwZSVoLPgqqEuN5kDsVScUXF3ycnh9mzetdq/ilkGd7hu5+oosO97uIQpqZieRJEAYaipmmCfOSlrn+gYiepDXoh/mofqzZk//lOTyDyWXRylaLvGzNK4Tq6oQ+msD9FcHt33uNx7+iff8vV/53S+8/7PfS0xQsZ3h51gVm49VWWEBY4R7C7qvVVUrLFJXcVp+B8cWt4EsdCpVBCE7DkwlaEobhVxbwuuqllh4lEoTShubNUehz2vRD6nV6PM8jn4awCsll6XZuW1pJA4xAQS+/vi1/+6p33/s//X8p59dISKs3LZaJjsPvVLhtaEx3qy55YpQjaqXs9/JSSp7Zag6tRg9LbcsVTlfX9Xl3eZAKOSTlG3wils1ClvCptbW0Lnv2tpDxEQ04j9DCf0ZxPT3ZMf8bQGuNS44YXSiJY6IzbYJEQzWh+9Md2afffL3Hv0frj56eWV4ZoTh2bEz+gOqG+othjs1ii1m9OpY7hAanAuVovJbVVpVJUPLLQlgouA+/o+XYFR5Fqu+eYlkryMKri2qrbcjlFiwURCpgRDAK9Ff4fXosyD6Y5QwKKYTK4FOLnDcMJlP86/kSP26zs3P6DR/IBn20FsZuHkOqfJJwG81e7pRpm7TNJWcRrGgTHlFCBbLvFQya4jQukbnwdBywzYAFKfJSt9Ca3So9JLPzVJVVLxKfW11k3W2mMwAMc7yjvlZ83z2YZOZb0N8Mlns5D1VoGKsXFz7W9efuPo7+Sz7OjFu2XHpE0aFM2t2SkXSVM2O4j4hruaOq638Wy9dNaqq8qiK1DaAUuVLteHkwVHRvcrzPgsuBfduywNXPdKUkb4XxDknsuemX6p3819Qq/G7ALnwkm70ewvoxAHHaA3R5qwY+cVkkPwoyMZ1EQWPWjCYZ/l9bIrwvC8e4q1SpEWZozZwSXB9YNC3OiaazSiPOcnl3N2h6hXeqw6G0lngy/u1QNWbNYAq4dGwzSHyAMQEUQKBvINS+hTtyfeDCFC0YJQ5PnQygONUBZ3mGG2Mv4eIHpluTr7V7gSgAqapu5drDB5WCCpcteEkobRUE0KltBWCelAKO3u0KsLI1VmcD06XrZPiYEP9m2eINX5UVcASMPVrZM6lLfcJ/0oJYPuDoI2BmemztGP+KRjvRy5fAoYNrTvGdPyBQ4BONYw2965d2vj3Z+4593MgWjPGBTSa/aQJMHcIpPC4RQl5ZITgCauo63PN5tZUMZQSSVBdeFYwblW9ChlcHOpCLVTmSK0S1OW8zjy1sJA0lZEivH1dCtWeW+A8hFZ9MwqQzLzFPJd9BEx/ESvHm/WOvTtaz3KoXvyH1+8884u9lf5Ap9qGzjvVrDo37lyvBZO0ASZEwhzQhdGUtUvaN4UKChPmREGXkQPVwE/nRHZBm+KY0gPANsVLwqaHkIrDBLCVAt757U8WLmnvIiABiFGEChVuc9d3lQeY14cOlqFpRYDMNEjTPwTR18DgT4DLVFfHiY417LNphmTU++/OPXDh13qj3iCfZvBOgNbRFsFcRuXoQaVSqFu1X9qe/0+qXxsaT6nOVepH9bdUGL68UrwUcFKH3JnQrrGCqar4Ne9BBSA941PwyBT0a0UdLW9a1O6HgEKquRS+oiyQzZXsO7BnPgPgmxCRXxVxbOjYAiefZhisDf/O2fvO/01WhGyWl7YD2sfBeV7lKrOHDoM2f9k8KVRqNc0A4ibCwiMN1a1yfo4K5VS0QpOisGyBtOKa0nNWBpzaS4qzhYMivFsRFErNdlKtLIXtqz1ZSAIDiQTGmLtkS/8yds0/wJCOld1z7IAjIsinGYZnx/94477zfxUg6FQXo+uiQcuDxJsohfkQ6PEl+Op6WF1S+Qbtc7/6kdDyn1dmzoNUPeaOyT1GKqOCNCoOvfBciCf7AG2SpNjlurhXWaACi4YAr76H0s3tVTcptTgSmKmGuZ7/JWTybtLSOy4et+MDHCo8Z+srF9d+a+Pus39WjIHJdVVktDEcarJDggG64LG6elcffUNqebuhlHGonDfetnmt5ilRzcdpSlRq1NF6ifvq7afawOBAZCWmB3jg6gvhQuFvakjYhgD3XwvMSOEMAQNiDMyO/oOI+JMgev1xkDzHAzhkd2c2mb5z7Y4zH1y748zb8lzb3cXqTCMtL5EQjHwlhaO0oHne/6aW4wXXuxuEKs0CoVEt0FZV+wGEY3/VpCjnYPZDTiXQ1F9biF33HKg6VLwX0WMpVOcoBBWVrSybT8Fj1N6KePhaz6AhAUQekAF9CH36fyLHQml+q6nzwCEimMzA5ObC+t0b71+5uHa/TvMi/WurCVK8ZCxgpvnnS42jDUa+RPV4u1Og0qSWo83aq5KvVJdKYDelVUWCtGNyTqvKb9Unq8leQuG9q58t+qmFyb3yi0ZfuhYXyUukyBpkIMCY/hes0D+HoLN2T7eBQ3BJ+mR1456zHxqdXbknn+bFasag2CIOKctRUDagUNoUTOS2DmxKmyYDNBodVlY7PKdlRfsWnA7Ytq1gKQkqoo8CBq6UphoAypv4EB0KRhbfD8VG1XUJWdPoGpPOla4Kl9D5DbPcb2OgtYH08X04w7+OiEBTAeUtj3wLqbvA8epZblbP3H32vaNzK5fyWRa8uUAyzGO4Nv2r/j1Q46vvfkESjbbG1hmaaqea9nqtoPteV/P83E7BkOG5lvpajpXqXSgxpP7ANYjUpU7TBizslEJW1toRhANVgVZ7Md5ZACuBrC1rIApfJ2N6l76DoVeBQ7yQl5w6CxyxGzBtbNx99neGZ0avT/fSQ47itXJtTjKqnQvOt9s8IevXGyPBp/XiOQ2bf7dKEf891IpqSGzdZ9Tz5tzrAjBR+av+txBgVDoDqrev3bu+xKEoEYisoF0F/gLpIzMDEXmHbPC/1GMDqTz8raVOAkdEoFONtTvO/P+G51Zenc3sxkkNpt+P2kA2h7dCFe5g7+agqF1QA6HBXHU8Uv2hKwzflApevJTFAuWtWLJg9Te/rLqUrlTeovgbdkpNohairNq2QtKgDAVqSKQKlb42H10NERgIjDHgZ8z3qim/i5g6Y/N0Ejh6lmP19vX3jC+svj6fZqU69aJGm7oO5EhQVfcClarOmjXNJmhQmyikSp0h3zViTtva1wBxORLXVaYmhKr6aOleds0KmyfBOqBw9PCQbsGKu6ws1fYclT4J7l3V2cpWhgJbvBPEfjQZAPQOGdMHoNAJ8HQOONk0w/Dc+J+v3L72tTrVxYsF8CIH+Tmo26/OKv8Hfz1jhPpe+F2qdYRFpFnn4qbVYBzynpRmNoVlQyCUhasPvODZK9ImuD1xbfkBVVeehm1uTErXNa1qF1WUXZ/91H+M1jBKvkpW6IMAxrQnoG0BMtwSLu4UcHSaY7g+/KtnLm18n8ntrmUHU8va5MPRUoti1FJqH5FYxxeVmk6NxQom80pPo/5Qpdrv0SvGjXc2cFFJWWu7OlVpW4sp17yoVk/RxupQUHvc4JtT3YJc2yKwS7Qhb5AVep9+KEL+pgRygUG3YDf6bgCHLGjiYfJ9Z+4593dEAJMZUGvrDguOQ4Kqro9Jk0+KE3VVrbBwWy+o1FuE//uRteWCqna6kFOLw42lOVTFarX99qJSk5NSpZwbcRoesrVWvGaN+7epfvPeRdnZpY9A7J5Bro9MbmCUfKnp4SfMSIBMwtjVl406sazA5AbE/Mr1Sxv/HETQab5wQrGkeqFQFanbHwcwkILLFyftD9LLhheFDEUtFcwpWmbUrEqUaoacoBIp71y5AOWEYjgCkGtLmLzdrxYtjjnut/nV6n0YHpdSDaxkKK31cfjTnSNCsVXJPJVN6oel1kUkQG5AT8sP8nN0g6/hv5cIL7vdc+uBIxY4Z+7e+I1k1EM2zRaoHgtGwf1uchOl2yBYlqmP43MAGlZWjLZt7anfbUHLAvBJADrxzI/qBGP90jCXZ5vkLJMTVttqGdjV7u0aadypcg9bjTduyDe6KFMio/7oNVkrNYASQEL/b3OGbiCXH6904ctAt1xVy9Mc4/Mr/3Z0duWSnuX76+sLKXzR8yqqHa/r7FKWmK8cNUNC28rUbfHyhsFtZV4Ratjmbc9UHBfXKqrxX0vjSk1MStWJwiKlhGjGo6GQaraZ1dZVKgqurXrnmvcrv3tdDTUwlREGAoFxDgPdl3+Qn8XX8BSgGQB9xJ85dMskDhEhm2bojXv/fO329e82mS7TsjZLH/HdA3DVVaqWn3U5Vx1Zy19Sv6qIMEblimJUd0UbSQipvEvTdW3LlmEqVd2vPFJrT0U186xaTUQo/mgRsVq2IXQ/t8rLoJ3185XhLFAP/VrcwsILCrYJH3ut7z+rvtHEgDP+teklc4m3cZUzQF4GcXBrgENW0sT96Ac27j73fQKUHrSwUPuQvX/lBS16hcH5Oeg4iPK0uH11meXvJ5URt2DYRhvL71VGmt8iamO8oCrPuP5eVFwQDANhE1pu5VUmz8gVW4kEfnm2X5RtKgD0ZcJ2VZXL+iDhv0uR59r9dgOISk0Pit4Nxht4Bpj4pdfabomqJlogRs6uXdr4u1E/tvtgtuorR/X4+0AgPC21Y7VioRrXXlubXKJmkUDnn/+UpcpSHVPKOZqqejWPAqnU0mivAJXV19Wz+qhSNCMUjiXwi0emhW+x9LBJ0MR6jKAESHeDSDG/Y+wcDwnUZbwewD/OR3YMMBAYwov+zKNbInF0prF6+/q7BquD1Wya1jxo85SBg5z15F9XncX3uXrO6faZ/kWXtks278kqinhghHwttXIL7tRahAK7KVCxwh9FDZWkI4HqJM0n8FqneAlBsG7i4kYonArhBg7l+ECFbUROMoW/xYGjvK6q+Pov5EDmJZ59DIF1q/GfRR+/E2X8r0w/6N+XgF5e4FCRK+BHVy+ufUWezbO+Fo7BB7vRzdIikFQYsWSmKoWgDSsK1KKwWPBbfJ0HVBIbJUI+aWlbkdTDj96eoQtVquDEltrr51AyPMJT5fP6WDURqtTZUMl8W+t/K3zvVVZyO9CF7nF7Dc0MIPQvJ/eYD8UT/sRLOcHzsgLH5AYqVrev3nHmb4kRSKtd81JSC7ce8LLiHQcjerup0cYF4b28eJHW4o3R3h9HCxYobEfI/G36WHA/V85rQKHxXzwjgMr8i/g2O2VKak8UXkNSA1jYE16e+HIB87dIumrfobzWSTi4exbgzwG6Lr/G1+RStMuQl4jDX1Ybx+QGKxfW/mMyiJFn+YFB03aG5hzfv6QEn4NRveT+6mLA7Y121O9NjQdp1E1t96w/U7WeyjICL12oLF3+48FQv3ugUwpqo0R5r/JpWlJyOUR5da3yaTxD/Xf4MKjErtlZVCnUWr/cQACIFqg9usMM6CclgU1HFd38Zx69PMAhIJ/l6K8O/uX4/Mrr81l+aNnyUsuigup80/KzVBrmvuqWSueBVYo/VbumJh0PLJmlVlf4QOGYXz1WBx0hUN2ochE80zabQcG3FnWzgqAWNbB21PdzvddKHJf6nF+OIOT2MSX5AT2Sb20L4DgKelmAY3IDjvjNq7evfS8Q7qnp6fCwuDmZ0RjymhXWkRAM5NWrqFEz6udb473a7+/5oAz6rI743mHQ1obG6sxWbTRoaQNUUqhJZR0t0qAFx207G9SpPezNqYEtZaUh4WrkztclTiGFYCBaoCP5WVFgegnCcV4m4GisXlz7id6ojzxtcz2/XBTCrUWk1AdCr6qHLz5gsLaRcP796qXaINB2iZQ8W9f+GuVb4FvM7FfVxOoYTy14duWcuuWjCOa0GoUErod+NFBTl0DNYxReF5Zx6lophdx3fzwEjxaIyDAfmB8HADLB4x/mM4cObTrpuZ6wdsrTHKOz4x8cn195Y57mWCSm96P9bYv9rgxfXothUT9NsPZwrbn1wbC1XYVPOQBK4SduuX+Nrxr1zXt4z18BwxWMVFxSXljcmQASqp6XoB6g4TQoRvfgZNls11lSbWo411lC1n1j65Uj8dJ7waiEej3hM5cxCIU6SALkAhPzD+qB/B+c4gOi5vThTdChgTM+t3LgsgJAZzlWzq38RNWLdnAIHEY4LejzlppauN//reO6/sZaijXqDkUEBaP6vPsf5Mzcm5ZO5dJZR5AiIXM4ehcFaqAKVKcCjPvL1LBdXsWS4lgNTOWtywGotU8JgKmbVbVSZet995aRBQGAMiDrm5+PhW9XKcGoo0HO4VU1OtjH+/DP3nvhx+NhAp2GXrRgSN/nNiHP7vfI7WVkzvcF1CKM/PFwaiAsNvdJive8SFzMu7h5otlr9gYCVAM8yYKnqigFEiIEkTtgeY2K8xUDv0CDP9+EXXlfVF9czZ6p3JqoXjU8fxTHK9QUyWX3+nNlplARA8pxMU/MXxEDqJTB2cE/8+jQEufaFy4fqFyeaYzOjr945cLqD0tjKny+plyn+rnDq2t1/WvB1W0apDQBUgdoO3sH9ww4qeyKGgIDDgxH52aBdgodYPXBuTjWEMlt9UpRn0j9aJ2qywPIIVeK+RlTXl2EHjh5QuXhxlqe/Z7Yg6SextWJHztJ6he4ESgXSA8/lvfN/1dlnAm/eKlzaODc8SV371vGRz5zxP8rgJoXbX/lq6o8VAejm3/kQ0LuAE1ub5Ng0TN6UFDdT1rTpkqGOsi9S6YMfgWHwjZZ9anUJJ0ECSYtS8CU63KKoM0KoJy0c4Ge5QmvopV/S7VPytOVZ215KgKMKX+jcrZ8LnLGTlGfv9iVNABUxrGJ5O+BzA/fxOjboEOrahyphR8VKxhtMDo7fuvo7PhteeqdCYtVs0V0EDXtRdNifl94WflNakdboEX129T6xb/4gHkbxdHWJ6VqU8F8RbrN4xjZt4Ori0Kr0rLpRAhb16YzlPU0gR0eb7azCtpSTQ07RACYIhAUgAiMFujY/JBOzCXOCKQBMvt/5tGhJc4zH31i4XkxBiLA2fvO/+PxhVWoiFuMzNo1wfe6bVO3c14ctTGOF/f14Rqo8XNhhIbH6nXXAuRb7hfUURkiG7dstlmqElhQMm2ZTolKdgrUoQY2KtKo9ti+zpbHqLN49Y5OmjlJVq4kLZ+lcGJQKIXKu4fPZfcIo6r9UqHymavtCn6JXa0KMlAzBjH9k7xn3hH2z83QoYETD5OF5/NZjjN3bfyplYvrr82naXBm/yF93tn68YM/60FKzmHsygiKysrUVkZ0F5av39fdZLOFbZv7MksVK3QZVxamNTqQigHB37l9EAp1p5bDhdu53PAQoXpVu9bHyxlTwsres2TWenuaemYIrmAQ8PUUl5QDXxHD5n5DyIXCOXBpgYnlG2avxJdTn3+PDjezUqFDAycZzAEOAWIErHjcG/f/geShigaEo8Ocyxf+9nQ0KltoPc2pNShSj5ssr2x7nnAUrYuvqjrSyqxS+VPIsWqjWhivMgGDYG6k/nhljRWQN6SLd00HI3etkcWKzKIxUoDCe+XEl4EFggeT53AqpCVV6zWuknrH19pY9IW3p4Lf3m7zUsswQDkwfDr+Zwni12FqbjqA+iacA3e1HhcBojgCGN+89cyN1fbFaSXVx+HKiVYmvRkKAXJIyM1pQ3XErh8NwdKCCK+DtFV8oAa5cb9QzwIq+XuRQlr+KlQqVz5odjnElQc9S1ZUrNpNiJwi5p0FCMpWGhCKp1o9xc2DBwrqkXnXQRB62SrvTFA4Y4QI5lr2WnW2/2eTi6OfNPnNiZ1DA2f32u78k0aQjHp/jpWqGYjAIg6Z16dtasXhIdB2RbvCMrdRNeyV6gLNuaAuaer3qt13DoAqakl4XaPZZQPDNAcFuBsry8rjjRG/UM8ABDaKlz6WCS1nmmqHNNpWlY3hSfdkFRSYskShXgEVm7F2Hyt0nPSkQDY76VNGFgCVlFeGsMeTv76zkf8kMnPoMRW4mciB8+2RA+6ZHti5vPM2GAPixUNpna0WnV/AcgesfQHc6kzbwu/FaSrfabXGeU9BC39Wmhfeu/3nHGpeVD5SbWSvFWwa3QQRG21A7lRhnFOZfqoo7USV917ZHNVSHLNMXTJxWZ8U10utic1nlmb3FGC3lYQADf/1V/uFb/6wxAS9nd1FD+tvj2f8C+YmIjYPDZzPv+fTzYNkV3aeuWvjf1y7tAGdS/UpWxhrP8DUy96clDmALhS+lUDdL6ZZXFV1jaOaYGMe+sJKWlS4OYNxMf4Xw29QwJ0szaMW1W9eZ0n1S2WuyHF2wdhe1WqT1sVo75+omA0q6vXqVonNcLSpzQdJ+VBVsy9c8Bbcv6Jb1p7XqYsU1Gm/+eOAIQPKCRGpv5uk0S+YVPsdhQ9MhwZOmyQxucZgfXRhfGH1e8TcnOgD2i+rs+ThQTRPdtWIal/n9GPIm4vbcciW1u/fuOsiapME9ZpqSp/jv7YJTfstTN9UO+8Hk+J+zttmgmKVeqvtDzPfFIBBvR3+m3O0F7euTaZWqpZaV9RGQ1ePl6Zmlj8QPbDyjmgQ/4o5ZNT+oYET9ZqX5ERYu7T+x+NBgnSvnnyjSW0WAOb8vnk6iJLXwtxt+np90AtGTs8lrQw27x5hMf8lFGl1fmhpX5tKEwonaV5SKdq81i+JrsgOLJKS9WcucsXNazSqwailtK62q1wi4O4uvrwPXK0+ZHXYsM9QmjRubi1os5/b0dMcaZT9UPL61V/BTLesE5tPhwbOK//waxvH4l6MzaevffvOC1uIevGB6qkDpC5Z2srvP8rXa7zJMnUtwI/OCF4kAKm+LjRGOCrPLLx9y4O3ArHEaVXzqdUptQMFJgkV+wIoNDTUjWmILxvK2Gpb6/fxKlS4NqZapFZHmRDa2knBFdVf7hpTh1r9LdQ6oS09UTG3Y0AxY/bU3tfTUN0juTzeHojbTocGzpu+/6urFfQiiDHnfuPvvuuN+TQ/MHDqtAg0C0fPfWs9hLpULxpKmn0ER3s2zvBLy8Wh5PJCR0JVq6Ux/ldFFVpArlk+9KTatmZl1fxqCGwgfxnBzDHuqzcNv5YqXx1PQZxDcMy3udYRPvy7bf4LDuhEZR3hK5GwY93BGMi2Ugwfz//iyp1nfiRPs7aHaaVDA+epDz9WPgeAeJBg+7nNr9t5fquXjHotV9CCX1XaT+ocnKT294BUV3XCy+dW1aaeLBAl8+5Zu7y9zprkqVQSjsZBWa+i1BlRamXJRRSHzUdNMrVIuoIVvffNeeUKo2We1lpDSpmBtC6lQmEjtWvdE1QD5RB62hil6lk8HxxgXQBpFus/pS4mf12ZOD2ounZo4Hz8F36/+G5yQX9tANHmL+pUIxkmB5Z2hwFJWK4yiOxbc4sI2Q9M4aAc2hNVPpzTwsa4uaCl1WsqA2JraxcZP1UpgVrUQKWv23BXuYXlYm9TVC4I+sLjwl8ogT4YMqhU6m4+euVxCG5VahNd1csX2FKuYZUdr32/1IoKBNxjTC7vre89svWO/kr/l3SxSnkxHRo4X/5fv634Hg8S7F3ZvuvDP/df3uqXwRat2odCxqwcc9TG/tS8ZF7Nc6iNsetqRbN46whbfA/vVxtS7VDccq553zbNTipXzemolvbOkT2ojOfFwUU9Ku7/ZrvbA3fDDrN3DkEEOAeCqd03BFC9OY1A0bBQS5/6Kgvw2HKFd9qeLK8mAliw+/zWO6eP7/ySnuUHck0fPufALC++K6WQ7qXfLLkGR/vPIh1GDVtU9gBy4wA1t4y79ZuG76apQQTF54zhlUMLKgjK1d3Ec59z3w4IDZAS6lSbE6lAPZjgbGNkqR1ox05NLNf7TxBMwVSHhCIiOwS11F3itdst6IjS5Kk+V9m88gWk0/Qbx+vj80m/f9no/dPiHBo47/5b/6H4bjKD0bnxV43Pr8IYfSBursikeRqMNA+1XX9z4Jkz6oeHAoauhpyEl5TTftULF0iWkALbYV4QaUPaeCkk9ZL19lbvWZl797gJwVBUQ8VobH+VSpEfwcvlBsHZgrn9v+5+rdIClQZQtWnBM7fK2raKFlKxmwLgAkGrV/uoglznI7UW/6nh+vhvH8RJcBNZblxMkQ2r4XiQfF27l6MCkdYj0vZ9n75oEwDNLj6MbGteFoKljanDwlV1baFYqt3LXRkEl1XdxvWRUQJVo3bcHavAtQJI96O1b20hCeY7fPxayd8U3CpMiYsAaKUuZBpoKSoNvjoJEHR2k42k9biXWFWAze/swNlm20seMP562+6953f+K9nVf9t4B8cCOjRw7n3zA7a5tiWX9q7t3qFnOUiFqlrbQ1gK+bAu0cOrw2MHlywVxeOAZX0vBmcCNakiaaRgs6J15ZUt92vMI5QAKBm+REhxr0aN9SGmCeA6fEMtsAqAKhcSPCO62f8aKIuczIV8qetu5T451fOB3Ap2JmiTQOV0UYiIajsrl3kAIwAewhi4JmeFUjSsR8hnZBWkWfZlSTy4i0k9uZ937dDAecUfeDUAIB7EmG5N3/zJf/9hGCNQyjfy4Gy+Hx20phrbH/DKGhOEl9e+1tX2+XXVv9cPSXUGu3a/usSbSw1tsDLmwwOkVNtq+lAF+OXEZ3P9qgOFEfiwmFKahFxt66MCPH7UCXQBDzLMsUqc9GpTJULlseicBpLmvaHmoOMnQf34JRCb440M8uuzb1O79A/NPuk/Dx0Xevvr7sTtX3wn7v2KV4AIb9u9sg2O1AEeoKT9SlDwQe37/lTv+UV3Dl5CHT/1vm7UU3/9obogtePBlcW9Wp5I5oEmGMXnlqnduSI52lrTUIqK4pah/I3snEjDUdF41TU9wQOh3gqiskibmtG8ona9IIyBDgeAcuARVL1+EjxP8Lv24k1moHP9dh4r8DACD+fLlUMDhxSBmMBgXH/s6pfm0xTE9Wrmq2khhWPXvEG2LvgXU+3lzQNRG19T0LfSONW4LDzSkqe/enVNqpSeniYdbpCoXVTU21wtBLRLzrnSLWBCcsxOCJi9TVL6n36deShBm93QdLzU6w16Q1CqZf7f8gw1mGRBFxdUWZDnvhuWd5ipXtWbGfTOfCfBoYEzvTHBbHOKnRtbw8n1va9QvRjFbPGCV97GWjX2Kp8hKCe4SWZqhWlLT7aoZkXxFqqqDW1PEF5cr4TaD/sB0RdpPGxT3s1pXKVMKdi88T+/hmLcFqCMsqlKDHESr1AHKwNMdVvFtkBfqyWW0qKRHnrewxR3dJ3kJ3gX6LTl8FF97/VrPAhtXxHyLO9Rj78sWeshHs3Pr3H46OgkQjLsYffqzqUbT1yN28NsmtQGkMODoUltStOBLmr7HVQWqi7VEC+qnLNl21qwQFa2PHhl1F2krlX/FNR0ZIUbQJUGekUFFf+lNlsv4bAmQf3VuxYjv9g+8PkFypS07jxVIwvCuZm5j7zwxR78jc+NHJhTON2bYvTFl9588aE73jPdns4temjgfPo/fQIqiTDd3LuQpzminsJ82RH+bmknmkBqK72fGneQo/ueq77XyvGQhahyQchgDVZuOVe7d8tDhyCtj/dhO6sFyonNums8/PdggaFlm4uNbMOLvKAJI6e9p07CFZ/NhoZNLjHrjpbiERaMc9wIFYbxjTncPh5lVIFtsxCVYJ8aTM3sa+T++Mfo+vx8BIcGzuO//XmAgDzVr4kTBYrUggGAWn+1QWoR9ObR/iJ+n3MtYq/VXdr6PQRFHTR1oEi7iK1rdzSPuetisBzNF1HFtewMnELlKn80y1eXZ5ZFnMhqZI4rBp1wSYG3Y+qBo/U2O4kn1f6bK8VDI19q7VtA9RCc2slC5Mf9HjYfv/bGz3/m8/OXF+EmbJyoHyMeJBiuD14H9h085yHrja81W2rH/VXzalxMdcY9ALUgOXD6NIpSUbgdSgsh32YChdWVA2CtyH49YVtW8ms52lecEK1d0la3AMbxZyEJgicTse7pQkLUV2/WWZmqtkwIqpZBov3NtXFKcHzeQNNazwL7SATUJ8iuPjN77/W70vfemFPPTQDnmY8/iSd+71HsXt75ori/ODnhYekobJ6btHqA8CqqHmvKTWoWbIV8/Xy1pnmxaPv1Q1XquW/kgVIm2milijEVFKw8fDiStMrPdqU0VM8KbM0HbtEjInMcBQsG5bmvWGp/W04tICGBTA2iOHpzcmk4t9yhgRP3YvRXB3E8TF55mJxUB7Ffbk7StN3hkBAMBMU8Y3K+WlgHR/17KIUWjP7udBX2oSo457qi4f5CCeyQ8qLGTmmV8zWdhKrPH+ZKs58WyVo5FIbh1KRKU0M88DuvXjNHWi6oUIrG+HYFPR2K+ggwqXkLnjtCG+e2L7oDAGLRZj1Pc5e8o035qo2uLaWAFyMfbpLmNQSlah96nxZDsH62jR2o2R3ud0XllsZVkDqMpG5RNcfn9rPOzezastiGDBsk9QYVDOuzbfrSpjHq2TPV/HpSqaMYR0oTDI0l060NbWH4m6TQUSAAiASGCLRr3iTb6dzrDi1xJpt7yLP8PIBRcHtUv8/XVBex2osjCT4HKBqS48aq27md5p8LOayGklDXmd89lXtUWd/W6Rmr9Qnn2TB+0lAwRyUKwFEwtMDnSqvMW1UvLEaXgtkr/ViVvl4CVhPp1lf6hBK2+pT1/QtaB7YaRtvs7/JwvbA7JgAbYCbZbemqnouPQwNn8+kb2Hl+ax0AV1NF1Tr4ltI88FDzvdSM8lCjabNgqsfbENgG3gV6XzGSN14jGo2lcI81DyWqlPYVkD/i1+CH6mjFCCJvaBT3q2KjvKcNa3HfxY/WQGPQL+oLJl2ljT8CMLa8sgKADaG9P48dZkAu1yH5Fy9ALufVjEbzrjk0cGbbE0S9+K0ch27oOoDmj/x1njkamIUPXq+xBdx19aNN0ki1rXWmpsYV9VGyReoseOA2E6RKtk/njsnSfB1tPVEyYBMg1cvr3rBgnY0U/5Rt982Q4L5Fm2qjfnF9ebYiCRpek6Zy2QCrtMUJhE/dRlQr4+sgEGFgWM7OufDwwLn0hnsw3Bg+lE2zfV70/uPDARWrA1Ab07aL/MrpWvtq/DCXWtvdGFFbRtjgUIV3/Kh9iM4IWa4YMEOisAwF1/gRtlZT+PChdPLHCcGWGcHVXioU7fdM39wcav5QKs1fFLa6JhGCYUxqf/254toChLV2w/WDDwGS4DonTaeUvqq1ybgZr1o/BhHFUlleWn+wY0Jt6kHL72axRSyx4Fz43ts0l1aaN36Wo3J1sZ1HYntt3mVdv3VpRXlg1WUsysVfXqLVdMOGxKPq9ZX6Akk/lxp9M6ezpMl9IXz2p3rkgb06Z33fvCsODZxP/fJHcO3xqxvJuB6jNn/IbBsQj4bqL1daPnMum9Oo8F0fvM1+eGzR39vuTbWzgjkTr7VGzlF9qsXmKWhl0XnNChQVVCUGVbSnipTxEi9sY32Ebx2g5iQSRFX1q0iyutRo1Fu1ASuna3XM1YKKd0+ItJpr4xzaHX3nl92LuJ/08+nBk7cBh9JCbqLGUHsPuWjesFs9PU9etCt7bSNo2/32ufci+2oOhU/YuEhqXwjNXOUUMluVsYt6w/YQ4BMShllAW+Hr6/DqnNR6w1de3MTesYygKS+oz/tUoxIqp1p7uVTxqipqJZE+wu4rJa2X3jk0Bqb/QEv1AG5C4oAIpLhfv/XLq6bN664DyLZ6z2O+klmOT21wCn63eoz2aUML/qRRIGCNOsgdwzVDdNqUllZxVpGSlnf99/b4srlevKLFUkqjmmlHlS+2zyrOaEFF5/TaYjGnJghsEpR/W3qt3qrao6KUrdXnK3/5LRvlIcyhQwPn+mNXkO2l96koqt3wkMyDm7WK2kb8gxwLDgV/20bvZpvmjW1t9z0AUVnaq2iep6psKW2XlX+DehptkHlXF3cuRn/i0uFcuvcCtqp0Z+ld2/dpQ/2OykPeA9ZsffiCAmBJvZw/HHj6guvKG4aWGw4xrtro7Jz00XnVOFaKCHxgJjlyotrHUw0VdeyEneZHsPCKlsfZH9Suov0We7TgOBxg63imGjs0q6AKb1eM9Bpj+pq8BtU2zhoTVhQ0lKrA9mN3pVtr3ihfs8dMIbFrwqVOhbQKhMq88lKMOPWo6kIBnC+HpPGlxgD2L4OgocskgjU6NHBUpM5zEt1u5mYBqY4ai2j/Eovqn0cNBbb9qloxqZ2rXr5oqJonjZr3CruGgnP1uLB5/dJSTXshogrDV5/ADTh1tzKaTxh4awMP2TwJX/0XCJ5LAmYOY8Va2lK0oygmDQlVkSDFF4NSBlVTuTf+DequR3L7nwYGStTcKObDSxzFoyhSQyxMn3PU9k7bizoA7NrUr+rwaQ/VgNLmrWmpslrRgmsqP9u0jzpqa7eoTCoWFwTboNfHKmkyjEdrpR+CryGjNUbj4FMNp3F5caS+NNs3HJVai+/FbUy5XieoUxp1hM0qN+it3q3UQKo11qMt6pKmqrWEfUpA+76duAngiIgWkbzaS/PUpltB/t5zwOuHtJp9EB6uafiVv+W/wRg9TyDNEb5e0/A83lQrQlTPe5ISTaHFUcNOpWHhmp2Sg8kNtFKU8X99NHTRo9TMJSDS0lOeIecI47Kl/gE8EMoOk0q5+h3qVOe/ttIHMW7qkm/+NTexbSjmL8Q+cqp25oEBWesEAIVGUGUqV1xaBVFtJKwerRhMrf1bZf6G9Gs2b/71jbZVJWDRQzTvCvckjaaGFlDZLxT8Frh4NGrvVqvGBfpmcV5agNqmGEsFx9V3Qyh3TJAKwCsNrvRINTtcPSS27BXf3uZ5AIiFMVWpwhy6GeBcgp//CTppPlMfguEbRLW/h7ys1oQ64/jf9YGxvbVtbQklz82ppwszvdQEW2sLw2cK34e0lC0uKS+qZ7Jp+jkctKReGlUVERZATYlWbYUHatVRUVUUq1dURXWpjNWfK7xXW2/azgxDVhvlqyITEMzdJe1mgPOW4ttRmzILab+bLThfU82qxmdrsQPUegAVYoGqIsCcHNFNw6xp41Qrq8vA5r3D8bhRfShqijLhINNQ+0SK/TL96N5mdxDqql3LArcKgKT6QDVlTYIi1VrnD837vr/KSOrP2AGAF+Dj0MDRuf58PsuBRhLCg9IiybTomnBkb2PxVvZpFKl6sEqaB5iDy8p9SrZpbtI4dejaw9GyUYaKfypqUCNdYdgnLZLF3z9MkO49d0VdEl7Vrr5WY+CC56ogI9jifS4i2g7WldDF51vrFP9uBAIDFjU3fc7hud/gc8YYWdyMRWcXnauNPHNZ+5Cq35yq2pZHe5aaf4c6gGv115s+R9tsamHtqsnc+xdAoNpIX7+xvZNQXVUNPVzls4RqX/tqTCkAEE7kU6VPZa49WZUmpUQpIrx93WFH1hwQdehV+5CKo9S4KnyzdXBX+csmY6e5SQNvIuQGX03hWtOWAs3fFRN2zvc2ayOketmWcuHwFTLwPCEVNPfAUKxwQzgCV+trVNqCh+ZTVAu1D7iLYd1oRKiRSHC+0ra66Ktfv98IXwZ61mPvivi4cO1DBQ8BgGqCMKQi3KalkFRedPPo3Ha3sZCrn4Whkd9ob83N2TifqagxjZvXm3uQ74uOtdGCcrU+lPo51PhemswrYeF65XU9q41cmXk49kXa219l6uYIVeVMr43V2aYwwptPgPIZKzW6emwry3fsmTq8ogRvXWoXcqum6/q+aGCzeBeBVPHzUHO62HY/zQGGNMtWzjWvqszzOLGsySCSaLe9BTcJHCEUuzi2UiuY2mieGDjo+TnFg0G5YQnJojG7zhw32Sb3bvZTSqsg8kiotWxBJRXFY065uYwdHKjYHn5grxQIWl2oU+5IjQ/tT19BsGLVDzZhOFBYNfmqy3YsjmQS2GiBQ/BH+EzBn2qd/hRBSI7QqybySqONKW48T/2pdOhB7Zq2su1jZvVriwFRv7IhWdDQWNofqO3+bTeYT82Rs03GNcRMcS01O3TucoRKfoCwfKWGINO/uFFWHNPO0fsr0qzgeFdP3eOyrzJRJgPxz+LnjKplUC0QXOvvPZ+zqnrDolfViG0QgA0hJz2Zd83NSJwdGEkFNb226LC2R5nX7LbHmve95fA8e8KdK0bk2rk6297Uvev3D85L8EaLEbfeuHn3aYz47QK8rukgYLzWe4XjjYQ9P++BAmYlCro8UJHCmxdVhEmtCOHygQamfIBoox8DRTGQUPWn8+H/YV31OqpTvOGbkNo1gkrdJIhMdIReNeBpAAUSi0EqZJZ2bmmhA4rZ/XBXl0It1bZibe4wFL6q2mg/T88LblDco8XOotoF9a316m1s1jCH3EuwLS07IRzZG21o6b9wYrL4t2F/uGNUbjoVyqYDCJzKe2ourQnlZU38to2CAsyfSa6DY7+Rz5ImjVjU5+edv9mQm1k99L0QOtIWvdrQiQJaAJ55wy4Ff8O+aHsZlUvbGhGO3WHFi0Hd6gFG7VhLGw6iQLSBvO35pX4A4ehdsl0VrMEITQiS8dlz1jZue18lqv3AKGKCJ/JiLHy2dqaVSpOlWtYjsaBqbosDDCEtNOd9Uv1oWTuDocl8bl6Nhw/yBHaMNpf9wzee3x2vjiIyhw9bRpCQqPa3jd+o/iJQeQfzVaR5VG/PHBGG8tGK+7fwwKHuVnu/jXPhdfWOr436xYeq43dRbzHAeEC48oKKehQOfiJB+fp5aem5OpaC9jaFRyktxV9cFG8DYeXS4Hv1XAnV9usbCReLAYdAwFXMoZuROARBFK5fL1iLUKyFKtS3OVUspP0Ew7xrKPjbUrxdyypk/T4NCs6756zkE5em8FtMnrkXlWw5JyUfhdq7/2NquWjbJyClds69TGmZ+yiET23ZQGO08o1reYyWYmiAs2UQLRpIkNBwrNfdcJUH18/Vx8sR18tcUAEYaNLAgmn+mwGOCHCj+IGW19+m/YQXzOvgRrlaxW26YXh4Af/bNh5EBtT1v5Z21N7HvCYemOYiriZy53VbOIA19WSUuQJq8jcc3VzfVa/3oy9QGPk16VGFGlXffQDQRrxboFJXpFIhQOe8qxDcxZjXNJaKR2vpDwTnqn1TfhgRcjafbG/EzWyeS4R8lj9ptHHpUYNumwdwCT5tg2wwioYPVbk+/BtU58tX+Fqql5e3nMfWB1lFXz1Xr79Z475WUrXOUKC16r/1Y6VKE3o4Kwk1RGoeK6kwbNmv4fEy00t5VTkilfdsaVrr8wQ38hc1RVfwktybEt9If004ELT1bfPdlWtBW6jlVRfc7ACVcvrR9otvTuIAxlyVmqOuMnjVByZqYYHa8xTX10b24mvbgBGUD99Tm5Cbz8R1yLSVptZDxTNVB9EF8AtHj0YTipG2dZa+uIwqx/2A0Li359XK6F0dYfzYXSgB9fsGA2GFjyv6ePW+oVeueb867S+2ixbW7Jzimdo6XWp5ERrfyuGlZX2qhRvJdU3mSqPJjm4OOIxHwqa0MW2h8Ej1eOWCkI9qEqYIEgzqq5drk24twumANAex4e+wMcEz1dvqizZfWHDxnOqrKZio2hdtoyS1C/Gy2rJHJJhTCdtT4pGK5yl5XgIwuCOuQQ0HUPBy/HLqIuk7Sry1TQhXlL5w4C36uT5L1fLUtYnYoMW1a6UwX5oDKsGQAYl65Ey6enTJOkCAGPkIxFRd58Hg0jbiS3D9woKF7tlepLW+2v3bZMacQPnge+1ui04vfl8LqNqqNpd2FWzidZb26iqnFgHfVdXozNqY6wfxeXZBpV3l+YIp27xfNZRUJVOz7qr89/KGELJqe4019aNoX5i+o6S2rigUdhJEEn0klvn5Og+frIMZEDxZb6PUXnybIAHQqsY1KCwTgrOFh8L5uFoVc34tYu3gXNtQLtX2+2eshr/Mu1dTFobpoSqtqoWjhA0p9q0JjGSpdGp53lbupBYCFbDg+zJ8JbzWd2opK4J2NB/Dt6IKinq/FXWUdS90erl7S3lzd6hS2cFfbcugVVm64CsgAoFBwHOL6jt80vVBDBB9Qef6ajPJr/1bMFSjyW5sKvS4at2+P0KJ4d9X2yVNAbBgdJ475tSR7KuQ6rsJG1UT84ttm8bTNG9V+WW5um6gN0tXX7oHUMGcBSjn9EdD7S3va4rnbpMitZYUwK42uCozUKunJbrAvfw5tyufo3gZ4Ul/EYVdWJM0dc4pc2QDVSuRQIhEvbttTPd0aODkaY7Z9lTPdqa/yRGj1JrblauqVl2Kj2rHt11ZPd/2+qVxplXG1Y7VIFicLu2JEBgClHODUhVE1XG25SkWjYDSKI2wf9rPz6m4UG0X3bCqS1c2uq3dm4JJuiofN95ks01BEyR4yaWQmDfceS4KOaa8u5eQ8+5eaRjNW4tT3rEc8zlQ6whgQBnOKKWPGD2/hkMnXYcArBjTrclPDjdG364iBaNNRV2pjoOtVVS+++0j2qRuqAq1U8HebVeGdwlkYdvl4ShdZafAxoVIvQ5qPCsR29/ElXLF6EZUq9NeX4zMBQ+LGz3LDiIWFF4jp641stZKk/1CsrcIMsGEzN7oGFSSt5d/w6euQ6tkdlO3caS+PYxUGhB+s09dfZb51CZZWt53WLQOLyJQDmBEn5hd0Fs4UuAA4IiR7WXv3r68/cTo/Phu0QaKFVgxAIIYg3JuYZ6orLF1pY2+y6q/q+fr1BTF7eel5M06tiq3o4IpC2Hut24UBsAFA4swTM7QOcNoghFAjH3dxghEw6lRBgIDu47ZZZ7UHq12ua4I+7vB7gxmXL8KiA2YARUZEGmQYjBZfDIHD0Io5tjcExfKCQAQSUUaVCe+AtYvxpJgRGnt+5qa1lrOM2kpzZrng79taF9Ivm4qGz5PMlVGRv/D9pcCI431b2RJZkE0h24KOACgYsbk6u43GzYfVYMIyAxUpKCiGMwMxQxiBjPBGIU0TaCUhlI5AFMzStufrm0HlcXXBGWKYqXeVTAjE0gUxP0WwwAZGK2QZwyjuTBcjQbEGIA0AA07qZgBNAErDYgGkCEa7CAZ7SGKpyAyUCqDMQJmAxWnICPgZBfEDBJGMtqGmAjZpA+OcjBrCGmIEEyWwAjBaEY660OnfRARslkfWRphtteDzhIYo6B1BBGFPOtBoEASgRUh7mskPXEgE4R7XJSJBcu+qTojyi8ViVJivPwRSK26l7AEbMsblMrlbvJcCp6XRsFGDQEFiUOC9lMreKjSFyWI3EATEWRmfpku28Tr8+imgeOynHwsuz77MRWrv6FJkE6mAE3BRGBWdiSUCIPhHlbGGbZvnMXuZAjiEQAFkAIrQLEGkYDc3+a9YEd38Q/oEtUZ2IFfxEqBUEURqyaYnAERGBgAlvktEGYgTsFsEMczmCyG6m9htLKDpJ9DqRlENLg3gYpmiJMMg5Vd6JlC0psiTqZQKgMpA+YcyWAP/WGKKDIQMVCRAGCwstKA2alZzA64/o25iGTlLHMIxHj1zyDPFXRmo3UFEbRmTHd6yDIFrRnZtIc8J0z3+khTwc7VNezdOIudzVXsbA4x2xtBmz5YRUj6hN4wA6nM8YptCxNX7LmgaSgkWB0YhfpEwTd/tGal+Gv9j6KULxT6t6SUGnNVtDocW5ZOtHtXEMhdeOPQ55kzBCjivTOz4Xtb1KAK3TxwAFBEMKn50eza7JW924bfycQw2jKm1jkkF2Rphp1rO/jKb/gl3H7/FJefegDTvTG0DKHzGJOdPibTMSAjmFkMraPCuCuJrWoC+zAkGqAciASixT6fmkAwQxxFYCIQNMAZBqMtgAgqyqCSXcRxCpMDUX8HSTKDYkJ/NINJY8TDPQxHU8SxBtiO0io2ILajDyuGGM9PChB2qhVbSZUPIWBoraFzy5BZbp+EFYPAMKKt6WOcWkEOUFQuBGZmq9K5Fw0RGKeOqUSwen4KUhrsmIPZgCOxKnIuyLXC3u4Qu9cH2Lq6gs0XzmP7+gjbN9Zw9fnbMdtbR39kMFidAaJtm4iLJQYVlvMakDtBUsKjql15yRO8uZrKJo1f8/WH4uxBFIyAqnNQTYnRBJR/ZoFChD01+79vxDvgffI4vSjgQACOGdkk+y6+Mft4vNF/LWZOQLv7RjGwnd6BT33oK3DxwV/Aq79yF7OJgjEGRAZZSsiyHoxEkNSqHsT1ZxYwkwUIGxA0BAYCQGttGSqyilek3IsV20kqmYFdhcxU2AsiChDl1DEF8C50rqDzAbQQJLfdmadN9brwrpEBEUPEJwJ391QMrQ3EqxACiIEFPRjkbEB2G3cLM5gMyJhCjRKUqgYJ2+kYAfKZICeb1s62i8FsXBv8/QySXobR3ddx6RVXAHoSOosx3Yvw/BfW8cKzZ/HC43fj+UcfQK7PYHwmRTKYOuFCFs8CSKH/19jdaQAeCoTmLprFNU2EVVAZrOG06hWqbF27APMA4RVx/72NSquvtP4qliABQ93/uVhH86yjgl4ccBxxRJjdmL5V9dSz0Sge6FSX7RNg7VyOq8+9Fb/1i7t46x/9DQx7Z5HOnJqiDJQiy/Cx1fUBcZ4cCUYIK1rtiMYQURARGKMgwogiBhGgjbGAgB398slq0e/MDBEddF61e2yAY3jMuHv668Uxtl+b4tvj1r8zWQeA1chAJDAGbjR3tgas80AxW6kGWFQRQSll7ynGShM/4HLZUqVsv1inAkDKiwTj3MgEMQKTJZimPUx3GcIRwIwoEtz/JVt45ZsuY/fG5/D0Zz6FZx69A098+kFcffoOjNYYw5U9OzCJdTwAgDEGRhuY0P5wwPYTiYWNEhpM/rx/zIpkKr6WGlxQt/3TBsl2aFVV/Dngauxl6B0JTk0m7PR0/K6B9OYqiZ6OBDggAlg2p1cn3z/qxz8X92LozIPHMtX6hRQvPP21+OyHH8Hr3/wkovgi8lxDNMOAIIYAJNBFpXZUrqfu8cxNRHbtiXt2nbsXJ6qQ1yJcMjaV21EAAHMJiLB+ex3gO9/eS9yLCV+IB5mXcPZ8WC8ROQBRBWQMAhNgCtUoVJXI2Y8WAJXBHWIjN4AC9yK5bSeza29kR15igCJAbPvFMEzK2DMrMNsRVJzigS/fxKu+6gouP/EMHvvkBXzh43fi+Sfux3BlhOHaHsQYa1EqBrNYFVTrqjpWNMa4rggjCEJ0BIAp7BcJ9LeahBJvrZb9PY+oUoRaMVO2M/zl3jEAYSCS6FfYqMyQbr06pJvNY9usKGKY3Pzb6eXdHyMiqEhZ9YoYIEIUpxivDPH5D38znvhCD3Fvx42wljxTG2PcYixrE7RRCQDbwcyBtCCgUCEChi/090BieAqlTJmlUty5cjQjNy/jlwwThZmAS0O//O29V8bVY9VFpdjZC7Z9SvlK7HMXbWKyP8W3u7RD/OjJnIBVD6R6oKgPcA8cDQHuARRBSIEpgVIDe956bKB1gu3r53H1+UtYuzjAm7/teXzLn/99fPW3vw+93mO48mQPOhuC3DjEzIjjGEkSQxU6ZvncUjxz8CglgkopBdQwUEpsX0XjdA00FaWAGl9aqT3VFMHvtEBQUIb/xSKAhnRkwPH2Trqb/uj02t67VKwso7gXDiEMxtuAfggfe9/bceP6DURRZvX8cAKsYFz3aE7Pb9wuuMaYUqLUG0VkpYAV+S6rlbN5PADDjwWbZ1SBMbq4hogdUMpyVVDY7rQqnesUiHUyKCo+5FW0YnCkQtr4F2y0dp3KUEqBmQOJa+tmjsDRCFADgGIIIpAagqIRWA3B3IdSfQj3AE4gYGhDYPSgEIO5BxX1sLcd4YUnz8Co83jDN2zi23/o9/Dl73gfJtuXcf25VVjFxPadUhF6/R7iJAGKPqcS0MEzhFpb25Jrqv4MiIIPKoMcvMva9TkCVTCYdKtUNY+HivpJEEE9SuB35aztfJr7zKOjA46vMGZMr0++J92aPq2SyKkdznQzwGhjC9tXvhof++0vRq4vO9vEd1AIIGsrGNPUab3UaKPweKlKVVroJJoOmD8s61WeqlpYDqFUSFLLzOx+h2WdoarEDvCkYEic90ys55ztprUebOEzeenCrApw2va6cxyDoyGIIhgBmHpQPEKkhhBSVhlUVspYwMQgFUFxD8wDEDkJhQhEsdVTIJhtG1x+cgjVH+Or/6vn8Ed+4AO4/f6P4trzQDoZghXgfdVJkqDXS0ppKV718Z3fzh9lFEA9Li00eHwSEI+uoGDllfpBrv1eZX1B/ShBFw5aLPwukrnNbtCRA4eYQITt3Rd23qpnueaIKqYBYYaVDcbjn/yj+PRHz4Piy4iUV4GqkqNUq9oAgKJM2/f5FL6tqvuOyBui1TrLev2LYmdjBaFGbAppQAwgAhQD7CVMIX3ts3jQUfGdiglAgEoVyVnOVj200o2pB6YBhGMQK4AVSPXAagSm2Kq4pCAcgVUfUdQHpA9SIzD3ASg7V2QEMMb5JiIQJ+AowmQvwgtPX8AdD63hj/7QI3jLt38A6fQ6Np9fcQ9n56qiKEK/30ccx1b6oGTiilMA5bESGMG7kMLSQJg5p7wofHcHea/lW5zHEn7uBgywKMRp/K4oU1AZVz7z6MiBAwEoYoiRx3ae2/5akxsbrxQY3nGyi9HaBj7xvu/AI5/sI+5vFozky4SGvD9WfpcGyJpqWjuVUqatRwV+E1YApSGOUnWTxou0YTSsAjcy2wHEnjZWVWOGkHVW2BAZ6zgoPE9O3YSbLLVvRoM4AserYF4BJAZBAW4ylHkApcYg6lkHi7C1eaK+AwiDOQLBgokMQEIgjgDuQ6kRiAfgeAUUD0FxH4gGQNQHVILrV/rY3b0Nb/xGjW/+8x/ExqWHcfW5GDrrg8gOFMyMXi9Bv9cDE6O+qfL+5kipmtffcXk+vGj+IFoel+BfL5K8NPfHXFEDcKyewwb9WnbWIN9A5TOPjh44rsUcMfK99P0AvX14boR8mrv2EowGBuMtML8aH3/fN+CFZ3cRxROn8vhQ8NIG8XaFacmrGEqEEGyhqlVpWuW9mhoQFOA8RGFdpe1TSkbA2dkKUIrtxKCyL4SsluYbCIaPXhBAsYsisNeysrF9MGJ9AZEDDwRMDFEJhMjaM6oPGCuBWfXBNACoD5AFClEEIAZJYkNvoAATgdQAlAwhyRCcDMDxAKwGIGVtH6LEXaNAmu1HbOhUOjG48uQabn/FGN/6Q5/F697+AWxem2CyMyptNQBxEmMwHCKO48JzVlWyQ1SEL4Ia5yuvpKFuNyVLE0zhgoGqioZaKWIGCP8gN7nJTI689plHLw1wfMMixvbTm+81qf6O/nofembBIxDo3GD13BZmu2/F773nrdjevow4NlbVY29geqO9bGr48AeRNqYNbQVxA1h2jsjeux7FbO/vriE72lo7hBxAXCuJYIggRCBWlvFJrOrmn8+/VidpKALAAiIFQgRID6KsHUMYQHgAUgNwb91+1NjZKTEU9aDUABwNLSDYOguI+xZgUR/MPbDEABIAsbWP4FQ0iiBQMJSAoh5IDe010dB66FSCG1fWIHIX/sA7gbf/sY9gNr2K7Svj0pkhAqUUhsMBer2e7bsag0uwmlVQhUAVRgHkBGiApVJtE1SLNfZA2jCgWCFKo39Cu4Dao8ZnHh3NPM4cUpFCujvD1c+88Au3femlH6KIf2J2fWLVGAJEUqyeneDqU9+MD773Ot74tR/HYHA7hKxU8o4FnyustHfCUYTmShn7286q+8lPOzkZSg4KgGL/ll44lFKQfHnjVK2qU8Pvfylk1TT2prKIGwjc5KaTJIbERlALoCJyNlIEQQyOYtj5KOv5sgZ+BObIDTwKJApGchArEPVBHAPEMG7+g7zKRORMCu+aj2x7Y6f2GQEpFUhIG1bkI8FJBCwMCLA3jZFfW8fr//AEZ27/LH7tn93AjRfux9qFmbOVDIgZ/X4fzIzpdII81yUM6r4DKQfGYEPEoEQ1Cq56cUg16SZhmTITkwAuTMkdJ0ZO+p9qyPUDmccBvaQSR0SQjHrI9zK88NFn/mE+zX/EaBdfxgwYAvEEaxuMJz/9PfjI796DHE9BsXvyFrvGmGpAXwiaNvISoa57WwoNUdu1zHAfG4nAgfTzhn/hCq3dn5jt3IuLRmanjhHDBZnaORzvCWImRBE5eyGGUkMoNXRzMQNwbF3LxD0wRSD0odQqWI2tpBKyXjLuWaCZCESJdTWrobWN4hVwsgKKxlDJKlSyAhWvgHiAKHIqm1iAMiWAscG3YthGJ2iydpoIiCPoNMOVZ4a453WX8C1/+Wn0x4/iyhN9EMXOBjQgAL1eguFwiChSaF0HVVBp+zbkzzxFQub+CKss6y7gFzp9bOBsLNFPsveytXzm0UsqcQDLWPEoQT7NcfmDT//9O772vqlK1P+68+QmWCnAEDjaxurGOp751Dvxsfif4TVf8Tz6/duQzexoySpkVM+43qCsGaOtto2fJC0lh/duiQ9Vgb+HOHUMTrrB2Zd+1p4b9y06mcQ7s4OR0nt3yvaIuJB1sg9HNIBCD0KAioaAWLsGHAFIoKgHAcOQgoGy7YtXABgI9ayNwmwlVKRcxIGd1BPDMMoAxtjfLpLAGowxWBEg2qlqbp0PEfzqR6VKiayIQWxgTI7nn4pw9tIr8G0/ch2/9tMP44VH78OZO3ogNSu8Z3GcYDRi7O3tYTab+t5CVYkTkIsSaQNEKHeKAkRFH1f3UQjKBH3fprsREWKJPxHr5PdtXF6jyEJ6yYEDWD1eJQoYxth7dvt/U71owEx/jyOCye1Cr6R/A0y34XP/5c9jtvdv8Iav+yx6yUXkqTPznGoD2LkdP3fS7okBvKfGRuWwmyStRgFb8pOW9hpmb3vA+YINmJ0nq6ZvlBEIVjoaCJRzOxuGNfph7SJmgkAD6FkXqAsJEESAGoAlgSG2LmbEYCgQJxA1tl4xUiARiMxgJ1t7ACWAsqO9cVLRAoJBxvrEbQApW0+nWECJMeCIbL94GwUAi0BB7GDFxgXiuikBbeziJNUDKwHpDDeeYWzccR++80efx6/+s0/jc799LzZuWwFHM9hlIAaRUhiNRiAA09nUuZvb3AZSHK4pZmV/BzCp2k8VIxRV0ARXu/euYDWDL6w+8z9NoxTKHF7xelmAU9xsFGP78Rsw2vx/RreNd3prg39stAHHCkYDUe8GRmdX8djH/ziYfgZv/LqHEcW3Q5vISZpQrAO+i6s2TRiXFsS+GgIpFdgqoRRwIzSV68/9IqyqS7q8t7d7KCivvO0GAQtBAjvIiAFxH4r7MMapf8xgshORJuqB0LPBkswgSsA0sk4BxG6U1YC4SU8ogAcARa7tEQQMMbmVcNEYwgQiDXb9YPsjsisixEpRJQZarBeP2AWPslhbgHIADJgcpBRE9co+UkOAJrjx/AwrFx/EN//lZ/GryeP4xH+6H+fuGoBVCr8+ipkxGo1BRJhM9mBcUGv5Il1ckfss0tAo+F4/Vq7mrJ8J1C7ysomv9bPk56KcrQ13SHpZgSNaEA1jiBFMru795Mp9Gw8nK71f3/7CdUWKreRJNrF6bg1PfOKPQ0X/Cq99y2fRiy5CoODXr3iDv+7xKu4jvtPKToxirthHoVPBu4etgV/GodmRXRX2lTWaSwkC2Ng6+53chlIuOFMMKHL3F2O9Wzx2jJTAsA1dJx4CSoGEnTeNwBSDkxEMVkAcu7bmABKIKLCBnex3aprdWpwA7kFHAtLaXqcUiC3Q7EhvowpAXEyoQgTsnCYAg1g7BrT3ARmIzp2jxrrVhQyIhoh4BGNm2N2aYWRuxzv+7BBm9iQ+9VsXcf6uEYizQjVkBkajEUCEyd7uPt7OduhQ7XuzVGDDhKAJSrAQdCQwkfmTl3YuNBTHg9LLChxPRASOFXaf3vpNuWP8lmgl+c9mYn3mYoC4t4XR2VV8/iPfD+Gfwmve9DkMkrvtSw/CzEs7xYe4V1U1CtbwG5M37QwnNawNZdUyFGBquqrtUvDSwwdQ4UQQH4Ov7ZIAidgCBnZG3ruIQWTdxBw5oDAgdtQj7kESG1MmGIN7K3aw0ABRVtguVj2LbHQB+nYKVgyYE0TMENZWhvLQBXmyVXPJTUYjSI3EbD1wZL16hKzoZ/IAiiKrAboZfxLrQRPq2ecwGjvXMwzpNnzTX+pD60/hM++/ExfuGwOSAWKtGCK2ahsRdne2SxUNpZYACVl5MUNXIFF5VW7gDKSM55cYCTaj3Q8+P7j6y9yn+oUHplsCHBCgEoXdZ7aw/cT1311/xbk/HA+T/2RSDSGCaEDFN7C6sY7HPvZnIPpn8NBXfAwrw9sB6RV2CIBA6lRtD3uubTmAV7McQIgKXbhIJB94VCpes8jOzYgxIDF2gRwBFFljVRsbT6YIyEVA1ANIgVQCQQKCAnPs1KsExH2AImu4c2QjmtXIzv5TD0Zz8VyKhjCk7S/Vc8/DTqEksLL1kY+Lc7adgJyKRtYRw7DOAKfKugPW4QGxHjaBi3LIbQdzVEKNLZgEDKUSMDPybAalDNK9AaJkFd/4wwaTq4/h8U8qXHywb9VHKQe44WAAMRq729vu/XkJ6B5LqABp1dSfz0/zynhrp3AyMGElG/0jlUXW1rkJaQPcKuDAOgyiYQxIhO3Hb7x7cHH8rcPzo39hZvqMdVkTouQGhmvreOIT/zV2bvxHfMnb3oeNjTUQjSHQ0Lpq93i1uRopHXa9OPXLlyEIlaHuYcBlaSvZeqNIWZeyWLAxUIa6uTCeSAiiBAbOdonGIJU49YtANACQQMiAKQFJHxINQMqqUTbKeQhSfZDkUNKDRmZVJx4BrB2oLSPbRWsARzGIExgwjBCIYgAEYzQIBqRikEqsnWU0xGiANFQUA0bDwKl2BOeIEBhiUJYDpK13z1iJZud3lFtolwNkg0etFGPsbWusnnsI3/rXVvDzf+thvPDYBjbu7MMuICQ3hhGG4zEAwvb2ZuH0KXk49JQtYux5sCJnEyKQOoQYCjvR3uWU8n/d04ndA+cm6ZYBpyAiUMTItmf/YXuavykZJr+WrPXvM5ldlxNFNzA8M8CVJ74bH3nfCr7ka34RG6szgDegIgOjpQKW0jFQdqp1OUuhVgFeI3MSyY9yVJ8c9dEBAKDdvIm7HmRVPMfAIDvlKaRsHBj3waoH4RFAPcv0iAGjrLqnhpZJhR1YIiAa2IHWKIgaQYhBkltGBoGR2GdlO3lp497YTZC6+RLysiFyy0XFBm8qy9zGaCtRJLeucOOch16zcaN/BIHhvj1oDBTbpeCW760yZQzbfiHnpndG+NYLU6xfugvf9T8T/u1/+0lceeIczl5KbFCsNVJBRBiNxzAQ7G7ecPGMsJ5Da8HPEQbhCapJm5rooRqkFIHAP2Ig2Uylh2bVkG49cACoWMFkBvkk/1y2PXuV1uanBxvDP2lyY9U2nmLtgsHm5a/HB3/9LF7zpl/EbXc8A9IXoCIVuDjZOQ6qXjM/iVmaLE76sEERf1YoIyiutYvM7G8RAiKGFm0DNCl8O5a5DMUuQrkH4cSqahyDEIEwhHACUQrgyKouYJDqA9yHJgZDgXkAob51IyMHUd+yieSwWYEiCEcQia09QIARZZ8HNrwH8QCM2PYFygWCRARFTspKbJ+aw8VlBG/n2XuagkeF/AAUg0QB0Nb5IO6+QvYYC8CCzWdmWLvzIXzLfyv42b/6MLavXMT4HFA61KyUHo3GEG2wu70Jn4YXRXvmSRsCWlTw4tUCDuKBt4wBAT29Pl39V2dlsRw7CL2kkQMHJXFhKSpRIMXp9Mru9+0+t/XfgwCOfeBlitHKJnaufBU+8ls/gKefuAtankeeTezI7Nb41yc/lfKRyMGjurUxHjS2nApUNav6K2XD/hUTlAIIxtlEbtQLdxKgGEqNwDwGqbFdYBaNYMNhbEi/qD6gxuDoDFS0BkQrELdaU5FdKwM1tPdHbhOLEKxrWq2A4zEQ9SGIIMJOJYtBHEHFI/tRQ+t0cOt5lItFs/3slkEY6yET2KBQa5C7FbdCzmERgUm5kJ4IgLI2merZHAYUu5Wnfbv2JxmCohgiCoQhVNTH1nMznLn31fiGP3cvZntXkU4ilBHm7l0BGK+uYjhegbe15lKBcAuY8L/yvNMCQscO2ZjBnk5+RBlGmIxq/087dQI4IRETWCmkm7O/Obm8+weNFnDikgdKjpX152Bmd+DDv/Hn8dmPvB0G2yBzw6ZMgzVI/GrMYnk++bUz1YVP3iVaetD8cuhSpSMim5/Nx64V6W3F9W1s17lEKyAaQKIElAxAagSSGKSGQDyCcAKFBIoTgBIYHkGpVSjYtTWs1uy8jGSAzKwUlRikxpDIMSxiwFiwwEkAqD4otuogqZ5T4yzIDQyMaLj1BLAotBEG1ttI1klBA4gkgAsuJYqc7RYB6JXR1jwAcx8c23sy90FRbJ0VLnqbVc96H+MYKlHYeSHDA29/Pd76PQNcf+YqpL51htg5o5XVVfQHo0LKeYcNvPfvQOSXYDs4+UsVoKA+SML/Nlc5NJsDf+ZR54ADwM6sJwrp9uzXd57a/KrZ1vTjHLEL1CT0RzcQKcJnfv/b8NHf+RPY2h4jy56DzgWRUgVAABT2TjEDTn6JgAdXuYzaSiZCNb+xG3eKKGjLexAGjLKqi4vzIhUDHAOIwDqygImGjhfEGv+qDyMEEQVgBIrX3DoYx1A6A1QfEq3AqCHESRWb1Yetq1i8XWID6xRFIBhrgJNXURk2UDSC1cj999j9jp0jwAagkrJLr+2iuKSQNAwFYYCSHsDKaXRu1Ssrq5JyDBv+I0CcQOIEUJGz+4Bsr4+v/BNfhvvfMMO1JycuRRfgjRAxVmUer60jSawXrpTktZGfUJUmFalARZ3hMSYGC/+ZXGnkyhzqs4BFu0scMUSb/7z77PYX7z2/87PiVDdjCL3BHkarm3jy4S/D7/7KD+DZp78EKn4Wkm8iNCBLzxhZ9Qw28LNU36xez+zfRxkxYB0H2uYJcNIIIhBjHQAcjawbWCKABxDVtxLExEA8BGgAyhkEq2qJGsAuNuuB4gEQKRcUGltvhRAkHgPR2C4boNgtNbBA8KolgcFqaIM2OYLAuvFDA8Gm1orglymQc4eTMKzaFQMcWU8cbIAqqQgUObuM7GI2IrFZbuKBTaqoIoCUdVdDgWGXxwvFEAc0hl2fRLDRGpOtbUBdwjf85Tdi5fx1bF8xZV86N7iIQRzFWF0/AxXF1iZDDQOOqJAswTGvQhdODlsSCogleV+SJh+Ockacq0N95vLmobn5ZSZSDBUrzDan79x5evM78ll+1dniIM4xXruMva0z+Nj7/yQ++cHvxmQyQKSeg84z2Jlw6/0CmUINs8QoJkCLCGiriqnIBjPalWVsJSDHsN0VgXlsV16qoY1MVj0IxWAeWTslHkCrHsSwVV+SkZ2jEdhEGdwHQTmpFUG0ndw0agjqrVm7oZgcVW6QdWmZKIGKR4CKIWwjmYFy6YO1XaxktqokF+o6kbLOCQcALj42hNuGJLn1QiqBZ1GORoDEAMXw63eIEjdzHLnjykowjiAUQcMCCxCQEmxf2cHqHV+Mr/nT92C2e9llbPWDle18EYOkP8DK2hk3t+PVy6pFE3CH+1PzpjnIEQOKoizO4neSC6w97GcedR44AOzAkSjkk/wXtp/afJAj9X9F/di6YgUYrW2CZIKH//PX4gO/+mfw9CNvRa83heAadFZOrJGE0QDenkEFNESwKgcrcMQgVeZ8Y14BJ2Mb8i8JSA0g7HR9lbgMnQmER9bYTgZAzzoFRABGAlYDmEJNUhAoEA+g4hGiaASSBDARLKczSCK7JEJgjXWy6pEN9zbWVhFn9yCx36Wsn+AfUkEocmmkVPngSlm1SiWAj3ejyLmbMyAZWi+fMOx6IS77D+QkpVtnxAzjJhWJTJElRnEPUIzJ1gSvevub8Oq3j3DtyR03J+RjGCzQxWgMR2OMRit2vgkmsHcChqh8Dya/CysHADMiif6aIfNkHmlodfjPPDoewHGkEgWT6hsE+s58L/tenenPchIBYMTJDGsbl7F57Qx+593fgY/95+9FNrsLUfwsTLoLaJ990zoQQilTLguAnZxkBrmRHBKDyUoWUn0w9SEcwcR9CPVBagzwCIoGNpI56tv5Hupb9czEkNwa4cw9FwFto63BBGGBqB6E+wCpUtlyM/+OA+zygWgEFfdcCSeV4O2ZyH7gbBbnESukgvKTpgbiFxXBusSdcmr/cgyhGMak4Khv3eVFAg1fzjeSYBOcmKAdNmqBxdlVbrUpI4LJMgDn8IZveR0Gq5vIplaqFJ5w8vNrhPHqGuKkB6PDxB41chIrgF4heaEIkUSfjfLo7wO4KWlz/CVOQFYCCPJJ9q8nl3dfN72+94tgG/smAoxXd9AbbOGTv/ca/NYvfR+e+NwfhEoUIr4KrWfwqziNEZd6CigNUWNHdTe5CLHZYRAPwarvtrQhu1YfbHV51Qc4gXXdrFhdn5W1Z4wAosEcQ0UWcBByMZTW3UNkI47FkGNQFw8GO3lpxACcQKnYTUA6J4K40Bdiu4TBnSXH/F56QNn0t8RcpnKyKQ4gXiKJPWhTWRHYZDYGjfsuxo2c2urVQd9f2k1W2sGrWNvEEYRjsCQAxzAujx2xwmRzExdf/SBe+eYL2Hx+p7ArgZLpjdGI4hjD0ap71Lb5mtDdXFX57GlGrJPvYc1gIbDhm/rMo2MHHAC2oyIGgHTv8u637Tyz+ReySZ5xz8VQRRqrZy5j+wbjd9/9rfjdX/8B3LjxZegPJhB9HdnUeW1c1EAZnWP1YiuZYislop5lLuOiAqgP0tbDBRWBNEC5QLhvw/IFACVuDQ9gbSkFgVWFSCU2b7QIhHt2jgcJysQhzvYRsUsh4BwHfiQtVq1qZ8coFyDKECYLOxErzbyzw3vafIaQIqu9dYwUS9JFQYzNMk/RCH7j3Wq+MQLEJSUnBSBydpX3ZnnVyQBsMwCFLG/yFMAKHvyKVyJSExiX+sv2ub3eTuoKBsMRkl6/WNdkb+9tHn87H1oTqOGKEEn8j1nThw3biQRDclOfeXQ8geOImKBihXwv+0c7T28+tPfCzr8TEXBk1azhyhSD0XU8/ukLeO9/+E589HfeCdGvxGi4i2x2FXmaObB44xQwuc2gadf3O5UOCoIeQENnDBOU6oPQcx4lBePW/BO8e9tl4gRDmD0WACiI6oN44CYWHaMVTOfd5pbxiRRYJTZezHvViIMR1mbREeNyMxRGm5/gLRnbiJUOVqraMBmr7jm3vGi7Y4IaWlc2AsAY+4+XNt4B4aPKicoogzKIzxT7ABVrppiR7m3jvjddxF2vXcXe9TwAlpM8bjRTUYTBcOw8Zm1JOEpXgV8PCkWIJdnqp70fJNc36kV85lEnQm5eLFk1Tb4wvbr33Xqmf2x0cfy/keK3AgDDYLx2A+k0xkc/8Go88+gDeOgNn8N9r/0YlP4ksj0GJSNwHIGIoAVQIi5GLHEqm5T2AgCouGR6juySAeeosAyjvdIEgoYx1ga3k6YuXivqgYwUYSYEnyzeWPuKGEBul0Ow9VZREYNHxUjrU1zYPG4WEKT8qF8u6IONPrOMHADP7kYnduIVOaD6Tgq7OSEX+iIQt/MSQwqQGBSLBUVbSUnWBS1CED2zwBT4igAA2TRFsrGBi190AY9+6AsYb6y5sYOC+XorvXv9AaI4hs4z5+wI1DY/eDht03sVM+TfmkU7ISKPnI61xAmJiGyEQW4+tvvs9tt2nt16Zz7NHreesQhJL8faxg1cv5LjA7/2JfjNX/gePP34t6G/di+G/RQ63YVOJ3afGjIgyaDzqZ1PEMDOvhv48HyvxoBcJk14XdxKCZjMGb4CMjNInoLFRVSaGVhnlkGKyVa7ZkaMTSwoxoDRszP1ELts2b8uYRixNg8Dzti320cCPt81u4+x0gs5GNZLJZLZ9TTGetysakQArFvdq3vlrhiljWOTcbg0VkWcnwtAYzvyS05Wejlby3J07NoJF9GR4LYHLqA3cFuhACUegh9RHCNJekHQrr1jUNxdw1DW6fHjLPxeKrITvbjPPDoREickUnZM0jvpz+6m+f8ZD5K/2Vvr/yWVqJ51HuQw5iqe/HyCZx77ctz32i/GK1/3GVy6++PQ6RNIJylylSJKemBltw+hKAJpDZgIppgTsx1rYCCSFx4uEQGLs0Eot+5mJz1yn2oWDCNTiPJLn4FSXbMuWTvfZFdwUhD6QYiLMdeumXFAFYEh4ySfFMGu1iTwaqMtK+ImLYXBMDAmA6MHEMO4OGwXQo1S7bKgA3lvk6CSOKiIkHaxcWScRDTWweHb6ewZIxkuvnINaxcGmEwFSd87KYqng1c3k94Ak8leEIcYqKrk3wWQR3hkkPb+8gLT5MjoxEickOwKUwYzZ7PN6V/bfmrzFdOt6Y8LBIgUKGKsbqQYjG7g8x8x+NWfex3e88vfju3pd2J09rXo9RKY2Qw62wX0Dky+DWNmEDOF38DJjuIEmBTIJ27ps53wy/PchvYUaxBsJhe7/2gGbXILMPgXYN80u7S5Nk7NLlE2VC6bsMROLfFGsfXG+TkRAFDsHAqwq2pt1Iqyk5ZwqaTAsMvVDQBvP/ncC8697NzW9n4K3nFhM9JIaQe5CVEbDa5cQlQuhCn5JRdIbR8QIdvLMTrXx+rtCtme9ja/IymBIYIodluLFO3zL9pew8QwMQFE38Gab9r1fBh39ImTOBUiQPUUTKqf1LP8L09n+c+S4r+SrPW/K0oiEAtWz06hsyk+/7E+nn3sftz3RXfila//Uly842GY7ClMd7eh9Ta4T3ZLekmtOg8C8cgtDxCQySBO2pFoINcwEYN5CDIGWqY21F9ZBoBowFjjXChxYe92hLVaoJ2PUSqGiLa2iNtuw24uUI7KgAvdMTYbjXZmC9s14c7TRzDQFmSwXiu7ItT2g0BDjEukWEgaNy9DFlxWBRUIG4AUlHjPHQAol4QDpVewkKLOzoFdwcpEMGkGHo1w/oE1PPbBF2BtMCdtguUFAoCVgooi6FQH6lw5UIgSxHny93tZ8lHDLtXUS0wnGziAVRHYSiA90b+fXdv77mwn/SfxSu9PJyu9b48SFRELVuMp0skUH/9AD4986l7c99pLuOehq7jznicw6j+P3a2rSKdbYOXAkNjdAIDIAgNTQBGUizvTmkCcg1jbnddE2dzROrMTrIhgdAohbWPECu+THbTFCKBze60PMPXTJ1Iu+RWxSypgjB0lVc+CwM/KezvLuWvtbE+Gwusm7HKuwUlRAH55gbe6UaqTFq8u2JPFAr9geAc0m48ZggwiORRiq0YigVIJAECLBjDCmdvWwOrZwhWN2h+BHQCiKEaazsr36oFDAoXovb209yPk3/XLoEidfOB4Emv/cKIgRt49vbr37nRrem8y7v25ZCX5QdWL+/0x0BukyGYzfPL9CT77wXO49OB5PPiaKR589bNYX/8cdq4/D50ZsNorFpqBezA6h5ppUDSEUYlV3bSBsAaRNeRt+IhxTKWcCkUAZdamoMQ11toUxhiwtr9JOUPfcixKmyXI9E8EdqO6BZrNRWdzHrBdgEY5RFIXEWDrsZlvnFMELn8c+aBSceqZ27DY2A2I7XIL4yDjs566tpI9JsQgxPBLrQVhumGr5kV9ZRPNuzk0601zbffr1gEbhIrQvrG9RBztJnnvmwiAYZ+n4FTivCTkF82JkcdmNyb/Tbo9+4fxMP6T8UrvT8eD+L54pLDez6CzDE9+ivDYJyI8/MADePWb7sK9r9rD2vgJpNNHMNvL7DxGnNvkgYag0x1wbwximwbL6Knbqt2tKYJ1ddsVnS4toViHgJ247MOi3O5eIDpzLuyBZXhENpCyeBop/ohot4EVu8lTuBxtDKIIxuSAnoI5hkjsOsPXo1zkjA/zIYdPm0jRiAZg1Tq/BSWJX+dkinCmMt+Dk2gkMBJk1YFf0mF/Z6lxGwz7h/COj/LRvCPGeeHtACGENMkRiXpzlKs9zTefP+BmaCmB44n8mhKRp9Pt2f+U7qT/czSIfjBZ7f+deJT0VJ+xEmkYk+K5x1I884UeLt53AZfuX8E9D13C7XdfhpKr2NmaAsyQKLOgyBQQC8AJKJ/BaIKKB9ZghoboDGQMTGQ3eWKxQCHkICaIXycDBQ07P2LnVfx8TWMfAOsiFtglASCIySBRAiCxYNUTkEldhpxe6VAgAomxhj7BLU9w0s3PM7ldsMntRFffJaKedtgvHPRSBWLTUhERosiqdjZwVmPzmT2I8YkibTbUYlrT14dy1ajtJ4YooGf6f0Tp6GOGgsiCl4mWGjieiAgUKwCQfJL/RL63/Z5oEP+NZKX3djWMz6tYYeWsQPIUV594Hk9/JsYnP7CG+754Ha96w/2466EpSJ7DZOsF5HkOne/ZeK/ehmVMPYGGBkc2rk0ogyAF5RrgHogG1swnA+QpxK7btk4B2DklSGyjGQqmkkLVAhzDEyxoAi+cnbjMIXrilkEMnMs5sL4liGAoD1q3dOBV8zs3tG2vwsptKmUX2Fg7Q6w08otlixwQREAvgkl3cPnz24j7ib0zUekFtxNjhZnl80oQGMIChfgnhtPRfwSsG36RB+yloFPg1IhtDNzH8mn+3fkkG6pe9PXxMPnRaBS/IRrEGG0whkaQz3bx8AcIj350gHteew53PbSGSw/cg9X1TUTRJvLZBNPUxpMpNhCTQouCglsIJi7JiJnCsI2etis9c2vzOOOcnN5C+czaGJECUwbr8/VU+mftViYGih0YZWY9ZdEQmvtgJ7kEzt1K3uYSFBMzBabcUgGxRniojlXySjtbyiXqthIOGoC2ThGxy+EVlzkHkqSHa488hStP7iAZ9VHe0XnYiyNwO5HbpPEggii8D1p+eBrvwbAEKt3LR6fAmUMOQHsmM/9+em3v39M2vzMexN8WjZI/EPXj9WiosDYQ5NM9fOZ3tvC53x/g3KURNs4nuPOhC7h4r+D83TMgmmF2fQuSGpBSANntCZ0CArhYMdG5tQkiBmQG0cotLCsTvkue24TnrGw2TefhKtyynu+JITS1gapkV3rCTXZ6A6K0OWKQmSDPd6B6F8EEaGNDZaz6JDYWTmz+a8Aa6o3tJKWw4JykkQL8SimoOAKMjYgwOgeQ4fEPPYvtaxpn7qCK9HIKIHyqK53nNuRGAUxqL8njdxgYl6GnMgH0stEpcPYhUj72Sv5Nuj37N+lOek711DdFw/iPx6PeH4z6Ec5cUjBZjs3L1/DCE4TPfCjCeDXGA29Yxb2vjXH+vrswvksgOy9gujtBns+g2G4OJZHjL5ew3U58uk1xi4BRqzZxocqQc197m8C1NQgREa1ByiY8tBOqBuRyThMEIGO9aWJXakbcByS37m24iSB3byGBaKfesZU28JJHjA0ocOqVd6v75eA2iNwvkcigtaA3EGSbT+Lh9z2FXiFtPPAtGPy2H0QEnWfQRoOjCEne+zqVq91FW6m/HHQKnANSYAddMan+l7NJ/i+zrdlb1TD+zrgff5caxBcHazGGa4DJBdlsio/8xi4+/psxzt87wv2vH+Pe192Hs3cMMRheg966jNn2HpBrAKldmUkuPxn5kBibxILY7Qwd9ax9IijWuISeJ6fYOO/TwALSpGCxWyt6w1vIx7JZF7lQDFIDCxxvLwisakhwC/NcQkKxgZa2HgJpl2yJfRsQqHDWnvF53WwqXA2V9PDwrzyP5z63izOXxkEvO7A6Z4C3bWbZFESMfj78Btb8u2ZB9pmXi06BcxNEimHDw+T92Vb6/mxr9tdVor5UDePvjQfJH1X96EIyVIj7dtHdtadu4NnPXsXH3rOKjUtj3PWqFdz7hlfhwr0JYHZgdq5htrsDocyqVfkexDg1i5TNQEkErd3u1rDbJlg1itwEf249dXDLq5FZDJncASMpxYL0imcRaCdhMjviB0Y2+cgBEGyWHG+5O7yacEc78nxfzMF4l7KVUFaFG6wLJs9v4/d++Vn0V2zaXZ+mq3BPuNswK0xnu8jTFAM9+g4l6tduhQetjU6B8yLISiECgF2j5bf19elvZ9vpX0pWe+/gmN+p+tHbWan14ZkEgzVBNt3DM5/cxGMfFHziN8/i0hedxcUHV3DHK+/D2TsE3JsCu9vIdrZgcgNRYn0AubG7VUsGkxogXgEZu7cmlAD5zIFpAMvA4qRVz+WMFsBoNxfiowPKCdRgBtWGEDlhROK9VX63IP/dSiP2IHMxdlTYNag4GHysXn99AGCGd//vH8TmMzdw5s5xsDTak5v3IQBkMJ3uIU57360o/gXzInI9HzWdAueIiNipckx7JjM/n27Nfj5eSVa5r76FQN+p4ujtUY9X4n4fY2akO1v41K+/gE+9J8bq+VXc/tBZnL93Dbfdt45zd96G4UYM0BRIc+S7KbJ8z95DCNCp9QlogaQTGMmgkjUbxQ3LwD6bp5BbPwOyoTDGraUhF5tGBEN2wyoLrEJswEC75OqA26IOcIGsTN4OKl3iBShDjzkpKJkhWVeY7hr85k99DI/8zlNYvzi22yX6C8RtZ+/tHKUwmewCO/jhGMm/6xJogFPgvCREipxXjrZMbn4m381+RkV8lhP1zZxEX8NM3xUNouHqYAwCkKd7+Oz7r+Hh9wpGGys4c+cZrF8c4vy9Y9zxqvM4e/s5DNYFSCfINyfQWWq3FNGZm9RMIGJdvTAEkthNZIrdZQCwa2mMDT4Vtkn6hAAtcNHNpUubABswishmqrGxLQDswkDvLauY54G55dbjgQD0xwTwGI9/6Em856c+ghtPb2LttjHIOxm8A8JPcIqdE8qyFNm12Y9EOv4JUZU7dYJOgfNSEsHldWNA5KpJzb8wOvsX+W76V+Nh8gfj1d7XEuHrWdE9qxctiHSmcfXRZ/HMJzJwFGOwPsTZe9Zw4X6r1l28fwWjMxvoxQTZvYFspi33i4HJciiKrRcMynnIjIskSP2UphvgbWRCsRyBGAK7zycJ20VpRHbRHpy0IZ+Rxk3zO3D6yVRx26AoZsRrAwCMK194AQ//1pP45H96BPnuHs7cPnIhRsFMTeGKtvFqudaYXZn8D5Ty3+8qh3a0WSeQiOySZpsp5rKeZj/Hg+jnzCyHaHmzSqK3cUx/gCP1lmQcD/vrfRAR8kmKZz7+FL7wnx9Db3WAc/eewZlLazh33wbO372KtdtWsHJ+AI5mICiYPQ2d2YV1WtyybRiQsZHFovp27sfnWijSYGmQZEWAZ2HvmAw+zIVIwYh2a43cQudi4lOQ9Hvg3iogKZ78yNP4/O8+gUd+90lsP7uF8dkBBretwGjtBYub6ykdAsyENM8wvbL3A5jJTxdbQXaQToFzK4hstLONYCaINh/IdtIPUIy/A6Hzqh99NYA3KsXfrwbxhdH5EcYXCJIbXH/iKp5/+DmACf3VAVYvrmHj7jPojxhn7z2Hi6+4gJUzK0iGCnHkbBKzDZkmyF1Yvt+WkACYfBdG74IF4GgNYBfqow0gUwAM4j6MTEC5hkEPigWKNUgJ1LAHRD0AfUy2czz2gc/gc7/9KJ78yFOY7cwwPjvCmbvWIMZA5+VK1EIz82YSAXvp5Ppkc++dccq/4rIYdZZOgXOryalzRGRd3Jm5LEZ+Xk/yn59Nsr+p+tGbOFFfF/Wj17DityWj5Hx/vQ8YgckFm09fxeXPPmt3Uk8irN62itHZMcbnRzj/wDn0BzGiWGPltjGG6yPEcYzeMILqRTD5HijNEYOg4jEoGjoQxABmAMbuu136bT8RoAWz3RR71yfYvnwdV5/bxZVHt3Dl0Su4/MgLEC0YnxtheGZgjX6ty4BQBLFuzsttphpTlf74Lvb+VpTTdVLdBg1wCpzukZs85IhhIp6YmXmvnur35pMcEBnFK727CXgLJ+orVcyvjxL1hmQ0LpYap5MJdj+7iWc+ofG591j3s4ojDNYH6I97iAc99Fd6SMY9RD0CK8JgPEA0mID4MlQUg4WhYkCnBnma2gBOIejcQGcZtp7dxs61PUy2pti9uofZzhQmz5EMY4zPjsAuaaRfD2TVMgB+YtMIKGYYbTaz7fT/0JvZT+VD/SGs+0V5t/IFHIxOgdNxIjf5SRFDcrMrIg/nu9nD0TD6J3pKyCfZK5Jx7x7uqa8C8FoIXtcb976or7iQZGIMdJph87kJRBvkqVXFyK3VAbMLw3GxBG7bDRGByY21zfykpgHYeQ2j5P/f3r3rRg0FYQD+Z+bY7AYicUeiSMOtQKLKC+QZeQwaKipEBUICiSJSQCgtiItEQ0I2a/ucofBllw6mSRb9X7leWW5+WeecmXFCNUu4eHU2nV46HDmPW95ra5TikLqvVZNK3zY/l8/ycfu4ZP8heRiIfhbVmkEMziYRTG8jMR3WCH6Y23wIleel6dCdtBDVRzB5oJXuWZXuismu1Xal3qoAAWa26qLEMMhwrOKfrLVyjyc706Xxl7Hsf1jkr1ozpe9oHe5TssPVX6HpXrjjqW2nd+W0Q1kW6Jb166kzrj37VwzOhps+y6HDhoMpSlf20fl+XuBJiwYQbGvSHTHZhchDq+ySVnZLFPcl6R2tdN7fZ5xL0LcT9GU1Y0XAsIU8FKT2w3VkGBncv4nGhrPSluzF33hX3ucmv4TgdX1j9nHx9QTVvIaVNDzr+vTPzcLg/Iemz2esWnaO3P3AGz8AHHnRrf6b5Fqap+sQ2SlNvqe1zQVyU0xuA6i11iQqJkkv6wWT3GRIiyN3PwZQl2U5heGLmH7Iv9rPpS3fvfg3MflU2r7LVGudDjbHccObTv6ckEhEf+P87/sRnUMMDlEAg0MUwOAQBTA4RAEMDlEAg0MUwOAQBTA4RAEMDlEAg0MUwOAQBTA4RAEMDlEAg0MUwOAQBTA4RAEMDlEAg0MUwOAQBTA4RAEMDlEAg0MUwOAQBTA4RAG/AV8eiqxtwe5sAAAAAElFTkSuQmCC',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAGmCAYAAAA0z7tHAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAg3aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMTItMDJUMTA6MjI6NTErMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMTItMDJUMTA6MjI6NTErMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTEyLTAyVDEwOjIyOjUxKzAzOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQyZmYxMjVjLTQ4OGItNGY0Ni1hMDU4LTA1NTA4NTAxZGI2OCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmQ2NDgyZjAxLTQ1ZjEtNDA0Mi1hODJiLWY3MGRlYWRlNDM5ZCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjM1MWQ0NjEwLTFmODQtNWQ0Yi1hZDkxLWQ1MGUyMTM1NDhlNyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjM1MWQ0NjEwLTFmODQtNWQ0Yi1hZDkxLWQ1MGUyMTM1NDhlNyIgc3RFdnQ6d2hlbj0iMjAxOS0xMi0wMlQxMDoyMjo1MSswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MmZmMTI1Yy00ODhiLTRmNDYtYTA1OC0wNTUwODUwMWRiNjgiIHN0RXZ0OndoZW49IjIwMTktMTItMDJUMTA6MjI6NTErMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjBiYjY3MDlkLTEyN2ItMTFlYS05MmE0LWFhYTZiOGNmNTNlNTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxYzg1YjkzYy0xMjdiLTExZWEtOTJhNC1hYWE2YjhjZjUzZTU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MmE5NjA4ZWItMTI3Yi0xMWVhLTkyYTQtYWFhNmI4Y2Y1M2U1PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjU2NzEyYzY1LTEyN2EtMTFlYS05MmE0LWFhYTZiOGNmNTNlNTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiNWZjNjViZi0xMjdhLTExZWEtOTJhNC1hYWE2YjhjZjUzZTU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDMzM2E1M2QtMTI3YS0xMWVhLTkyYTQtYWFhNmI4Y2Y1M2U1PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmY3YmEyYjAyLTEyN2EtMTFlYS05MmE0LWFhYTZiOGNmNTNlNTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk2zqxUAAJYjSURBVHic7f13vCXLVR4MP6uqw04nTw53bpaupKt4JUABRUvIGDBgwDY28BGM/bONwcYJ4/Daxi8YGww2CGNsw4tBxhiRFBAKSKDAlVDWlW7OYfKcuPfuULW+P6qrc+9zztwzMz1n7yXNPXv37q6q7q6n1lpPrVpFzIzdyIuf/+27Ov9qitYaURTjxS+5HUvL8/jEn96DN3/NK/DlLz2Gm24+ihMnD2M8Gl/rZjaKlBJxHK/c++XHT49GocNQOH/uwqeGW+FdQohr3byJ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',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAGmCAYAAAA0z7tHAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAg3aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMTItMDJUMTA6MjI6NTcrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMTItMDJUMTA6MjI6NTcrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTEyLTAyVDEwOjIyOjU3KzAzOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmVkYjE1OTRmLTZkOWYtYWU0OS05NzM5LTM2ZDY0ZDJjYjgwZCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmVmNDM3MjhlLWNjOTgtNDc0Ny1iMTVhLThhY2Y1MzY5YmUxNyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmE3NjEzMThiLTU5YjUtNTM0Yy04YjFlLWRiNTNlNDk1ZTMxNyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3NjEzMThiLTU5YjUtNTM0Yy04YjFlLWRiNTNlNDk1ZTMxNyIgc3RFdnQ6d2hlbj0iMjAxOS0xMi0wMlQxMDoyMjo1NyswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplZGIxNTk0Zi02ZDlmLWFlNDktOTczOS0zNmQ2NGQyY2I4MGQiIHN0RXZ0OndoZW49IjIwMTktMTItMDJUMTA6MjI6NTcrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjBiYjY3MDlkLTEyN2ItMTFlYS05MmE0LWFhYTZiOGNmNTNlNTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxYzg1YjkzYy0xMjdiLTExZWEtOTJhNC1hYWE2YjhjZjUzZTU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MmE5NjA4ZWItMTI3Yi0xMWVhLTkyYTQtYWFhNmI4Y2Y1M2U1PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjU2NzEyYzY1LTEyN2EtMTFlYS05MmE0LWFhYTZiOGNmNTNlNTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiNWZjNjViZi0xMjdhLTExZWEtOTJhNC1hYWE2YjhjZjUzZTU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDMzM2E1M2QtMTI3YS0xMWVhLTkyYTQtYWFhNmI4Y2Y1M2U1PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmY3YmEyYjAyLTEyN2EtMTFlYS05MmE0LWFhYTZiOGNmNTNlNTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmibMvgAAJPVSURBVHic7f153C3LWReKf5+q6l7jO+55OPOQnAxkTshkSAhDQBkSEe8Hr3JBr/rxCngvykfEn168XBUHBBQQQeWKBFGiIAZiggEhgSQkhEzn5Mwn++yzz9njO6+1urvq+f1RVb2qe3Wvd9jv3rv3+67n83nftVZ3dVV19/OtZ6inniJmxm7oNd/3nbsqfzPJsEGaabzyrvuw1JvDx598BF/1stfikfPP4O5jJ3F2+TgG6ehWd7OWpBDItD7yxeeffX6YJoozjUtXr3xy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',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAGmCAYAAAA0z7tHAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAg3aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMTItMDJUMTA6MjM6MDQrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMTItMDJUMTA6MjM6MDQrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTEyLTAyVDEwOjIzOjA0KzAzOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRjMmE4OWFiLWY5NDMtMDk0NS05M2M2LWM2NDA5NjJkMGEzMSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmVmMjZlZTg5LWRkNTctMWQ0NC04ZDczLTA2YTNiNzBmYmQ2MiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjM2ZGYyNWRjLTlkMzQtNGY0Ni04YjI3LTI4ZmM2ZDE5NTk1MSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjM2ZGYyNWRjLTlkMzQtNGY0Ni04YjI3LTI4ZmM2ZDE5NTk1MSIgc3RFdnQ6d2hlbj0iMjAxOS0xMi0wMlQxMDoyMzowNCswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0YzJhODlhYi1mOTQzLTA5NDUtOTNjNi1jNjQwOTYyZDBhMzEiIHN0RXZ0OndoZW49IjIwMTktMTItMDJUMTA6MjM6MDQrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjBiYjY3MDlkLTEyN2ItMTFlYS05MmE0LWFhYTZiOGNmNTNlNTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxYzg1YjkzYy0xMjdiLTExZWEtOTJhNC1hYWE2YjhjZjUzZTU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MmE5NjA4ZWItMTI3Yi0xMWVhLTkyYTQtYWFhNmI4Y2Y1M2U1PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjU2NzEyYzY1LTEyN2EtMTFlYS05MmE0LWFhYTZiOGNmNTNlNTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiNWZjNjViZi0xMjdhLTExZWEtOTJhNC1hYWE2YjhjZjUzZTU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDMzM2E1M2QtMTI3YS0xMWVhLTkyYTQtYWFhNmI4Y2Y1M2U1PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmY3YmEyYjAyLTEyN2EtMTFlYS05MmE0LWFhYTZiOGNmNTNlNTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Puzp0U8AAIatSURBVHic7f17uC1LVheI/saIyMz5WGvt53nVeVRRVVAgVEFBAc37oTxKGhVQwEt/yKd2o1dF8AP70+a23dp0i4qIdgvNxat0qwg2KFeFCwiCIIJCCTRFWVRRVeecOnXqnP1ezzlnZsS4f0REZuRrrrnWXnvvXGvOcc7ac87MyIiRmfGL8YgRI0hEcBL6yZ/8wROVf5gkIhCx2Nm5iiTJcPfuTVy79hQODu5hPN7CaDSBMeZRs9lLRAQRuXZ0tPdha41eLBa4d+/erwLyNiIC0aPmsJ+sFWitMJlkuHXrAHku2NrKkGWMvb0ZisJiOs2wtzdHkrAvzzBGYIzFeJzAWovRKEGSKFh7sn75oOgLv/CrOo/rh8zHQ6fQ4Q4P95Dnc4jYR83SEiIAogECEcOPadujUQpmfrSsrUAiGEyHf9B04YHjpBCwvX0JWTaFtcWjZqmXiBjWWnNwcBfWWpATMbm1AiLBSbWDh02O3wGLxTOkCw+cIHF2d+9A6/1z0PkwZlbkJI4AgFhrB883IGBmaD18yXgWdOGBE0ipBFqnA1fVACJSIg4oRICIFO47DR48jr2NxLlARLDWwJhi4J1PwKy0A4kFM0NEit3dQyg17JHcGfgZxuP0UbPyUOjCA8fbCdjfv1t+HyqJCJg529m5WqpqROT0NRk27+tGFx44gZh58J4pD5TbIjIjwkQEIGKVZcngebeWobUauEQ/O1ob4Djd+zyM2rRwn64DEkG0ZjCrR8jT8STCUKp0oV94WiPgnBvyosWBnAhZkiSDVzMBnAsHxlnRBjjDoxSAckARiJwLMbk2kibQBjjDowylTkkQkaIoDIiGbeOICJRiEK1Hl1qPuzxfVAInaGdFYTFw34B3n58L4XgmtAHO8GgXgI0cGYaZBt8pRfhc2GFnRWsDHBezNmxF3PN3CUDi7RsQkdaaz4WqNnSX+VnS2gBHKQWlNIKbd4jk53FeBbArIpcBgIjYxdsNezQnQggRetSsPBRaG+CIYPBxar7T3QVoDgDMBGtld39/PvjR3FqLLEuQZcmjZuWh0NoAx1oDETv4xWDMtAXI1M2JAER4ajxOtoh4/1Hzdxwx82Y9zsUhZ9uMRmMkSTpoVcID5YCIDgDZ8qrbpSxLZOiqmnedD/r5niWtAXDcepyicAvYhvxevY2QE/FNZvWEX0t001o5GDxuSttx8IyeCa0BcCqDVankHNg5ABHtBp5FsANgzExHQwb9utFaAMepERZFsRi8KiECJInWQCmBJvN5PtZaHQ2ZdxHnzBiNNs6BC0MuHEQjTUeDBw4gIGJxnwQiOlgs8rtu+fSj5q2fRAClGKNRMmgHzFnRWgCHmZHnOawdtpoGOJBPJtup1mWKpK0sS64rpV4dOuiDJ3DgbJ4JrQVwRCy01hiNJufAxhEwUx6BhJRicmtd1qBHnhNaE+C4cJAkSWHtcBMSRpSHZB0ACmPsPLh7h0zDd5mfHa0FcJgV5vM9LBbzwevf1gq2ti5N3ZwTAEBprVKl1mdZ8nmgtQCOMQXG4wmm08uDTkjoiCFiZkEyElFKRGMH+IGjfo1oLYBDxCiKHHk+PxeqmlJKETGYCSJyZ3//6INDX8/vPJcK29ujwUv1s6A1AQ7BGIP5/OgcqDuCNB0rrXXDq8avDJl1Hy608apdJBKxSJIEk8n24CWOD7NZGGPCMoOtLNNPDB04wHoAJtBaAIeIkecLHBzcw5DX4wAhPH8sSTICUQ5Abi8WxfuHrqoBTuIkyVp0qXUBjlPVhj6HAwDGGGidzrOMwoSiNcb4udvhIieE3KTrkQF3PYADnJ8tKHyYzfsB+Rxvj02TRF1l5oNHzdsyim2cdaC1Ao5Sw86GCYQlyAS3Jw4BoNuHh7MXh78C1O3Ilqbr0aXW4i7DNhlDTyPrqMov4NWfy5NJ9hpm/tAjZmwFoo3EuUjkRnCDPB/+W7W2QJIkJkonm2itRm7Lj0fNXT+tk5oGrAlwHBGG3vkAeKlYqWUiYqzFwm1l+Oj4Oo6imNRHycZDo7UAjrUGSZJiOt0+F0sLiOhuNN+k4PJJb2hANGyL84HQ8EdEItYhV4JPuj58pteM1kTiWCilMR6fj8gBaws7mx353ygALB4tVxtq0loAJzgHjFnAmPMAHGujrJgEDDz/7RrSWgDHr+OHUgmGrp06V3SBoshDvuiUSCYbbW1YtBbACcsKZrOjwatqzrYJk58CAPsiuDn8qGPBOoF7LYDjSCByPuLVqg5IICIlgvXIuXSOaI2AAzg1bdDDNnxuAQmhNyKi3SrQR83XcTR4Bs+U1go4IvZcLGQjIhUl5zDYeNUGR2sBnOBVWyzmg1fVRARapzpJnHZGRJqIJucjg8zQB6Wzo7UAjksPpTAej89F5IAIFiE9lNs8187cTgCPmrPl5AJpHzUXD4fWAjiOBNaacwEcgBKiMq5uD8Crj5afDTVpLYDDrJDnOe7du/OoWTmWrDVI09GNra1LAAAi2taaX6MUf2DoEmejql0wcmoPI8uGn3Td2Tj63a4TCgBMRGTnPKhq60RrAhwDpRQmk+3BOwf8liQHLjUUgYjmzNjz2W8GTesE7LUADkCw1iLP54OXOABARGOlVHAOyGJhZPhriVy0w2bz3AtEzAoiFrPZwcA7X8gBl2Zab4UsNyNj7EcCNHAbp0wSP3jJeBa0FsBxu00zkmSEoRuw3nV+4EKE3LEsS5Ik0edCWgLrobKtBXDirQyHTtZaaJ1sAakfuQXGyD7zeYh6ALQ+DwlR7p/WAjhO5bFYLOaPmpVjyVoDInraOQM4xKuNhx8dvV60FsBx5JJ1DJ/E7zrtvgMAERbD3+Zjs6xgQ4+erjtPYCliFtbK4FU1IsHQFwqeFW2AM0wy1bICgAjbw5c460Ub4AyTONoDFMw02WyeOyzaAGeYZBrpZM3GOTAsWg+F9PwREwHMDCLAWhm+H33NaAOcYdIVJ2FCvNqjZmdDTdoAZ5h0FIewbPKqDY/WysaJDe6hkncARAvXBIAMnOv1o7UCznmYAGUGiGgfCLucMQDZfsRsbahBawGcsLGU1sngPVPMBsxqt66qbSZwhkZrAZywSVOeD9855WLV+OmAFRfZDbtxRw+L1gI4scQZOlnLYFaLavkDwVqro6XUGxoArQVwHFV7aw6ZfES0qn4TiOjyJnJgWLQWwHGqmsF8PnvUrBxLPin8FjDxecoYR0ezV/N86MniHU2nWZww/sLSWgDH0flaVlAJRwGA4hwIy7WiNQLOuaIrQSuzVpCmeivLknOhqkW7ZV9o2gBncESw1n4oODRc3msxIhKvzxksnQuhfga0Ac4w6cAFdwJedePzkFdtnWgNgTP0UbvOn8shLbOiGHoiRUdqPXJ1rBdwnLdn2MO2V89u+JWfAABm3tZ6444eEq0VcBwNGzjBixZ+eRtHGWPPReTAxsa5gHQetviw1kKENVDlHLDW3jGGzgVwkkRt5nEuGrlczI+ai5WIgcCrQCken69MnueDz/uhtQEOESFJMjhVbbgv1qfAzcNvb/Nkmyw3w6K1AY7bX2b4gZKeTwmjNjOjKDA/PzbOerjV1gY4APw2H4+ai+VkrUWSJCCaREeFh873utFaACfMwo9Gk8FHSPvd4xYBKH4ntmm8e8GQaR3sG2BNgDN0sLRJyvdCBCwWRZbnw78PawXMGZiHbUeeBa0FcMIoqJSG29ls8C+1XEPggzyfTtPz4VXTWp2LmLr7pbUATiA3RzJsB4GLGCAJRraPNi6KYvjrcURCEsWNxLlQ5PeewZBfqndHU9hT0+/9+fI5EDbnQiKeFa0VcEKY/pDfbz0KmvwObXxtPE4HrwKFuaah83kWtBbAGbpR3UEqTNQSEYrCFEdHi0EDHnASJ8uStYhXWwvgBLLWngtVDVA+qI6COxrMw5aUjtZnzdBaACfo3kmS+g449B5INmwN6NP2yjnxBg5eFT4rWgvgBGLm8+KOdms/RQLP6ZClZKDhP9azo7UATkggcXS0/6hZOZasFSilR+PxtDS2mUmdBzvtHLB4ZrQWwAlk7XnYrcBCRKKFQwJjxBAZDD062klIGrwdeRa0VsBx8V5D73wAICP3y/FKhMLP5wyawtL0c6AK3zetFXDOh7pDICJuSBcz9HVE60ZrBZw4AcZwSSAiB0RSAl1EDpwK94hZW4mGrw6fBa0VcKwtBg8eYyyYOYtBIiLXzoO0dLRxR184Oh+rEwnMqpx7d1lu7MfM5/myiwZBbs4p3TgHLgqFhWzj8dZ5mcc5rCZALayVkfNWPWq2jqPzsZXKWdBaACe8zDyfDz4puI+ORpaNy99K8Wg6zQbNd6BzMjDdN60FcADXAReL+aNm41iy1kDrdJRlLueAS4GLozwvjrny0ZMIkAx/07szobUATpxzYOgjog+zycPW8t497VEzdDXIPdd10NbWAjiBlErOQZSxgIgWRGGyVkBE21qrgfPtaBPkeYEo2DWz2T6GPpForUBrvT2ZbPkjBGPsbDZbYOgSJ6zH2XjVLghVqtp08Kqap93AMwCI2IW1w++MVdLHi09rAZxAeb4YfP7osJQg9qoRkdZ6+HNQIVnH0AF+FrRWwBExGPqGBSIWzMlHBnXHq5m586oNX1XTepPl5gISg2joL5RAxJerzJ0CgNTQQVPRxjlwoYiIkSTnYedmAbN6xfFJXnUDZ5k+Fx1SqWFPMJ8VrQVwgqGtlDonL5V99kEHHoCYaPjS0j3a8yIZ74/WAjjOTrAoinzwo7aIhVI6Y04BSFi1qs7LHqAub/TFp7UAjt8BAElyPuK9AMxD5IDbH8cc7u4eYOijuYjFZDLynrXhp+y9H1oL4DgSGGMwdG+PB/lEKfdqXNgNlFJq8KEs1tI5Sb91/7QWwGFmGGPOSZYbgzQd7WjtHBnWWjDzdDw+H9JSqfOhUt4vrQVwAMQJzAdNzAAR3YyPWSuL8xEdLSDahNxcGApeNTeKP2pullPYrSDYOH5bkuSchAp5Oi98np7WAjghyDPPF4+alWPJWgsgezpNK1uBmd/tk3g8WuZWpo3EuTBUbSo1bLK2gFI6DY4Av1vBbx0enodFeILtbcY6LJ9eC+CEwMk0zc6BqmahdfIhETeh6NXMLTc/MvQOGVJDDfwhnwGtBXCAalOp4ROBCD7LjficA+ry+Qi5kXPhgDkLWgvgBBunKAoMfTR0e/jwJPz2EccyGg1/RzagetYXndYCOAD8nMjwQ/Nd0sREhyhjIoIxZm82Ox87sqXpxh19YchaC6U0trcvnZfR8EURF+XgVlXS6FEztKE6rQVwAp0Pz5oACNu1uzU5SvHVNE28q3rYtAm5uUDkQm4K7O3dfdSsHEvWGmTZ6M3T6SUYY+FXgc5dhxz2rrQhndU60FoAJ6bz8V5pWn4jgjFFPpsNf2XlJsvNBaXzMBp6Hnf8LyjFmM+LF4+O8sGvdTHG4vLl6eD5PAtaG+A4r9rwtwO01kDE+q0JJHiqnkrT8zGPo7X23suLTWsBHGstkiTFeDw9FwY2EY4Cn9YKkkRvTSaZt3mGS0Gin4dnfL+0FsAJUcbGGNT2pR0guQnP5KrbF6fcH+fufJ6fC2+V1mpj41wsEj8SDvuF+l2n4fh0vBpjZ3luzgVwmDd51S4UnZ8sNwwimsVHjLH58PkOkQP6XDhh7pfWAjghWYdbyDZsVc2TCeE2rjOqJ5LkPDgHNkunLxy50BVzDgIlBURsq/U4QJ6bO9bK4IHjlm9k52Su7P5oLYDDrJDnC+zunocVoAaTyc5rJpMtFIXbot1aEWD4ktINSiGJ4sWmtQCOiEWSJBiNJudC4iil91xcXXCl85UsOx/LCs5XboTT01oAByBYe34yeRLxltYEorBHDr3HqWrDZj7YZetAawEcv6YFs9nho2blWLLWgFldJhrBrwbFfJ7fGPo2Hw40QJatx+65awEcIHZHP2pOlpNf4n0UpIsxFqNRsu2WFQyceWyWFVwo8uv2kaajwb9Ut7GUuhvzaS3oPKhqQHD9P2ouHjytBXCqbcTPwxtlMKt9oExGCBE5N8BxtIkcuBAUT4CehwBEZvZMupRQRLBOBRo+8M/H4HT/tBbAUUpjsbiHPJ9jyAY24JJ1bG1dzlwkt/FeNjJK8bmwcQCcI8l4eloL4CwWc1y+fB3Xrz81+DS4zArz+dHrDw52w+QnmHmyDovDzhOtBXCMKTAaTXH9+lOYzY4eNTtLKUlGeOWV519TFDmYNVyaKFtYK+dG4qyDtrYWwBmNxrhx4yXcvv0qhh66ImKRZZP5aDRBnrvl0otFPgvpcIdKYR4nSRQ2zoELQvP5DNeuPYlnnnkD5vPZ8Rc8QkqSFLduvYw7d26AWfvJW7Ei52M58oCxfaa0FsBxGf9zzGYHWCyGbeMYU8AY4/fRDHF2WmmtHjFnyylInHVQ04A1AQ5QJV0nGnpusrjnhUyeYT7nUXF1PA2ZtwdBawGcosgxmWzj8cefHbyqlmUjLBZz3LlzA0mSwc/jUIhbGzINnb+zpLUAjlIK8/kMu7u3MJ8PW1VLkgSLxQxKhRS4FkQkQ19ZGVQ15wUcLp9nRWsBHGZGUcxxcLA/+HmcPFfI84XPHV1uLsXnIeTGsReWQgyb1/ultQAOESPPcxwc7MKYYXunlFKw1hIzoShcVh6l1Fjr85BoZLM/zoWiJMlw584N3L17Y/CxVNYKrly5rkejCYw5AhFhPs/38tw8atZWok1etQtE1lpMp9tI09Gggzxd4kRAKZUZ44BijIVSlLgsN8PvjAMfl86M1gA4Lmf0pUvXsbNzBUWRP2qGlhCBiGh399bOYjEv9/NJUz0f+kK2kC11o6pdIGJm7O/fQ1EsBi1xfMcjEVFKKRRFEZZOPz90VS3s7J0kG1XtQpG1BsYUgwaOJ8WsVJz4QkSSoY/iYaJ2o6pdMFJKI0nSwWf8B5BbaxZVfjJCmibk0kMNnXfC0Nc7nRWtAXBcqM3R0YFfyDZc8lIlG42mozjPtVI80pph7fnolEOXjmdBawAcIMxmu50AHjUv/eRtHAaEg7Htknck5wMxa0RrAhy3ChQY9pp4n4yQRqMJBe+Um7w1+yGz51BJBGAGxuNN7ugLQSGy+Nq1p5Bl2TmwE4TyfKGNMZGLF2roW5QEV/S60IUHTgjH11ojSTK/D+hQiQDgWlEUl6wtSqAwc+qCPB8pcyvTeeHzfujCAycEHk6nO5hOdwY9AcrMsNbOZ7MDIwIdHBvMA19EtIZ04YHjttZjfPCDvwOlht3//CTieDzeIqUUiIpw3AS1bUPDoAsPnDAxd+nSNWTZsGPVAICIeLGYwZgcYfZdBLOiqPYEHSJV63HWgy48cICwq9nCx1ENGzgAEmsNiLj0qmXZVVFKD5x3BmBBtI8hA/ysaC2AAwDz+RGKYoEhv1QfZjNL08wn6wi5Biy5OaghA0fggDPc53uWtDbAUUpB63OxAe0BQN6ccXM5eb4HY9xS6qFSUNXSNITdDJfXs6ALD5xgUE+nlzAajQftjvaTnnx4eAARC2stmBWuXn0NtNaDts+IGNYaHB296iXjxTZ4LjxwwqRcns9BhIF3PgCAduv2QyQBYTq95gNUh7vsWymNoljg6OiGB86w88DdL60JcOhcLJt27mg12tm5QszVupb5fE+MSQYuLRWsDcAe9nM+C7rwwAnErDH82XcBM2fBRnCd0eLu3ZfU0NNDBSJyWUjNcDF+JrQ2wAk0ZKET4YKcY8B4oztzQdODNriDq3/YCR/PitYIOOchL5lARJ4mQhnioJTCaLRjzoNzQMRgPp97AA07SuN+aY2Ac25oVwRCBGJWsNbg4OAGXILC4QI/jElaWxANm9ezoA1whkdjeJ+GXxKRW7vYIxr2soJAIhdb0gTaAGd4ZIGQ+hYApFCKcub1CNc/L7QBzvBoBFR7zYjgaLEoXmUevleNiDAabSTOhaJqn5nhkucvqTx/BCJWzKyr2LXhUiUlLz6tDXCU0uUuZ0MlEQulktSF3pRSh0VEDXljqTAouTVEA/b3nyGtAXDcWnitq1sd6su1lqCUGsfbZYhIYYzJhygtXYIOKgck91iHx+eDoAsPHGtdalZmhdFoAmsFxuTQOkG8B80QyHvSjkQM3IQiwKwMkSyGBPbqeVWDkgsXGq5UPGu68MAJIyCzQpKkmE4vwRiDvb07WCxm0DqBWyQ2jDdOxOyCO8sohyRNk5FS6nAIPIZsNgHH1laBs+u0CnQNgONIxKIoCjArbG9fxaVL17G7exO3br2M2WwfSTIagArnVny6Wfjy2JYIXgfg9qPiym0Zb2GMi9ZWqpI6A8DyI6G1AU4gY3IsFnNcunQdly49hjQd4+bNl5DnM4gwmKlctvzwiQCICaO6251N1Ic+dHPsAPVogG2tRZYluH79ErQmGLOmaIlo7YATQt7zfA5rDUQETz31Bty69SG8+uoLfk8a67d1f7grGa01SNPxZGfnSqnyiAim0xGyLEEVqvYweHL3LlIBh3kDmkBrCJw6FUWO0WgLWie4cuVJXLnyBPb3bwEg71TQ5U5pD5p8MpHZwcFuuYmUUozxeEqjUQJjHv42Go4nKlekbsjR2gOHiGCtQZ7PoZTG448/gyTRODzcxb17t7zkedA8VHMhzJrCMX8WRVFQnjOMseUGTg8aQPH26zGfG3K09sAJFAA0mx3i8HAfSqW4dOkxvPDCu2FM/kAnT0WAJEkBELRO7GSyhZCsw4345pLbfZpRFLbm1XpQFGLj1tX4P442wOkhZkaWbUPrBG5l5oNbQy9iMRpNkGUTzGYHe2F+BHD2RZqmCbNGnhcPzeTaAGY5bYCzhPJ87sNg1ANV2dzIbj+diL6SWX1W2HHaOQYmSNPsrxVF/iXWLn6aiX/ggTGyoZVpA5weWiwWuHz5Ol73uo/F7u4tpGn2QEZhZkZRLH7fwcHujy4Wcyil/HaLLhlhlmVYLPI3zmazNxaL+R9jpf7bkc6+hAgvbaTCo6MNcHrI2gKTyQ4WizkOD/f8Lgdnn0LXe+zeEmyo+qa5zkXtMhAApihgjPn4bJR9MRH9vXWJCxsibYDTQ8FZUBRzJEmKw8NdiLgcAM5oP5t2XFSx3g3xXq5t+Dkbb+uU++iGRkWdbQqmkNB92NHjQ6INcFakag5DoSjmqDxe9zfq+6yXoyRJWnXFXi0CofJT0+K+Gq234u9jDCAHUGAd8qLdL22AsyKFNTIuDEb5EJ3737PGmALMOuvqrM09cYgoKGdn9t5c9RpEGazNN3M1K9IGOCcm8uloc79FYoL7Cc0RsdA6Oaxsp77Q/FrUwBnmwg2VbqICTkIb4JyC3Cw//FqUJDpzmuFawKzmlWSpQFiqaUTAA3GHX/xdBR4UbYBzH2SthbVuyfB8fuiPngw8LrBztJVlY29HhYTrvjaqS4T7j5AuHQz3Wc960wY490ku/D/BaLSFPHdbECq1uvrmAkk5j9WzKN9AGexJCGlvANzHexOhtdn86UHSBjj3TRKSbEDrFCIGi8UMIgKtUxwHHq/yzeP5oSBx4iXKDkkIB0er8xf2qrn42TUfJm2Ac0ZkrYHWCYg00nSMophjPj86VrVyzoEsTVNVShd3PADIe9LEgsAQGO9pW0VlsyDSEMkgUoAoX/G6DR1HG+CcIYkIimKGa9eeAwC8+OI7kSQjKNX/mP2eOC4WuiVpAED8/35NjDt42K6pSRYiCkq5SGu3i/WGzoo2U8VnTi7iwFqL0Wgbk8k2rC38UoD2n1uqDRt71arVn/5IcBYIwjToznIe3G4BIiOIEDau5rOnjcR5IOTsHpeSahv7+3cxmx35cJ06+eXS2Xg8qWWLib1rghAwQBBXpmfAC+DLYG1wTmzsmgdBG+A8QLK2ALPGeLwNkXtQKoVToarO7HO+5UsDEARAPYXvor2cO8S5ZRDJAMyxAc2Dow1wHijV1+oXxQJKKSiVlFHWIgyiys/c7uw+UtpvjOXPHjWi2gAAzBO/zUZYlrBxBDwo2gDnIRIRYIwpN/QFQpBnl2Qgf41T+yrvAQAgC6WcSpiCKLzKDWAeBm2A81CJYG2BPA/SRmCtARGP0rQeaV33sFH5n5c53lgSP1Hq8hW4ELaLvU36UGgDnIdMzpOmogwyCZjVUV+UdSScIJVkMn5falR+go3n7GHSxh39CMivwQEALBZzWFvsupRPwU0NBLe0eLFjrYUxBoUxEJFXNob/o6WNxHnAFDKCVhJFpszqGkCXALxR6+QzmNXvLYrCZxF1LuSwAjTstpBlGRKdwLrkIV8gIncBOgDkBQD7AO36FrGxcR48bYDzAEjrBNYKRGTH2uJpEftmpfTnEvEbidJPJOKrAMjlU8sgIlgscsRSJJ78JGIopcvwHWPM1wPy9X4hnQGKI4BeFLEfAIqXAH4/Ef69CF4C6EWAjnytD/U5XGTaAOc+KEgHv4xaEfGbiPhT7t279TZA3ihiP+3evRs7LuAzK8uG61z0c1guAFSetiohYLU2x5ZSKOIARFAidgugjwHwMSIuHo2ZIGJg7eFtgH6ZCB8A1H8G8FMA3g9g9oAfz4WmDXBOQJG6BUBSZvVZROqNgHyytfaLROwzxhjM57fLRW4OGPHitMq+CRSCOatJzHhJQny8Khf7EsLuCg58HHnjBCL2KpG83R1nf4xeJZKfB/CjgPwbAB/cmLsnow1wllBQjUIyQmZ6FsDnE6nPHY223k7ETwAodz3wV/l0tvDXNLcMoeizWg5dgaLJQ3y86a5ulhfPa4gyoBKEcQYdEXlcBF8B0FeIUA7YXwQWPwLg3wL4tZUf0BrTBjg9xKygdQqlkjcYk39xmo7/qIh9K8DkljuHPGjVysymR7n6XZca1bnlqzHjFQluIrQudeorRetAcqpakHIUlYn5EwCUiMjniBx9jlMj+d1E8i+I8L0A3rPKs1pH2gDHU9jMKUkyKKVRFIsvf/753/rjs9nB24uigNYa1nLZgbtyBDhDnhqjO6JyZWvluUq9sq2o6PLKlirXBk8lWWLAVWXCNY7/KiohlAvqnQjeRERvIsI3A/JTRPi/APz/iPDCw9ru5DzQ2gPHJwSE1gkWi9m1g4N7f3h39+afms1mH53nR9HKzrpaVa+j2/1bSYjqui6p1L2Uub70uqmyxb9jALjvVNbrwFLnpRug8ZLq4A7HF/i/nBn/khn/BMAPbQC0xhahA4xClo0xnx9+sgj+96Oj/d/5wAfe+XeOjg4+mgjIskm5W0F/PagBqlLBqAW0ZZ0tXilalxidpctyzT1s4nOh3rpaGH+vS8H4Hqq6BSKSGCNfVhTyg8bgPdbiO4nw+nXOwbaGwHEq2Xi8BWvtp+zt3f7+l156z3/Y3b393zCrSyH5RrWVYTyh2PzdHsXb1C4fA6tfnWsfqzpzV1lqnK/Ut6BCur+wlyjVQNe+rl2vi62zbywK+caikHdai7+1rgBaO+BonUHr5ImbN1/6rve+99d++datl7/WxY9x2bH6aRUjvrtzx8eb5+sdry6t4mNtXrquB6roa4q+x3ZYU1K1B4Q6/81PgTEyynP7Z4tC3mutfC8RPuphbHg1FFor4BARHx3t/6WXX37/e1544V3fcHi4hyyblJtG9alSbXVolba6ANGsMxyPO23Xqs36sS5+YrDU669LuWD/xJKkyWdVvnvP0WpiVmCMUJ7b/zrP7bvz3P41EVxtX3Hx6MIDJ6gdaZp9jTHFb9+58+r/cHh4bztJMr/njTTKN6+v/er5voyOs6L7FrDFPDTVxTbw2gCol6mkQTzJSg3p1Nl6o77QVuAjREAI8tx+y2JhfxvAH3YhR8tU2PNNFxw4Amvtf0HEP22t/ENrzRu01tA6jV58Vbqv49Vn6ePPdoduUxNsXepQLE3qUqPdXj+/zU7dxVdIEFLVT41n0LR/pNZ2/0DiyhWFuZZlyT8ej5P/RIQvu6gbVV9o4GTZ5K8cHu7/e2vN53cFULZH0+r7st/1Our1NKndueP5n/h3NxB6au0839WpKyB13X/dVX48OJrUrVI6j6T6BGb5kaKwPwbg8Thn3EWgCwccEQsRuSYi/1wp/a3BGxRT1TG61/cvr7/b0G8b213txe3EKlP12RVt0F1PvZOHCcy6Wldy3ZBCzTorta0tSRs1dQwYTdvQWoExBsZYWCtv11r9VpbpPxq2pL8IdGGA412lSNPRVwP0O3k+//1xaExFXapSe/R3dTZKNlS3uiu5qq9PrWqCK7ZBqk7fLFvvxHXQx/FoFf/t6+v36s5L43e77uWqYn3BXbiHpjSz1oIZ10aj5O+J4BeI6ONDlMZ5pgsBHJ/l/3Xj8fSfTSY7P0CES6ETrTbAVZ0opq53G1SfuorTVHlCnatRXEewP6q26vVX5WOJIzW+usDcvrZ7sGiCtXvwqNs27TRV8THxjoMCRPiM6TT9NRH8mfn8DLf4eQR07oHjRjT+wslk57eybPwHKnUg7hz9qscqXq3WFRIlC5R2B1+mjvTZD+3jdX4doKrOXAdwfyePPWl14dtUy+q8uAyjsdet7x4Cdd2z1IBsrfX2j/7bo5H+v4hofF5Vt3MNHGMMtE7+X9Pp5Z/QOhm78P7gxolH1GZAZlt9qco2qd1LYvWl2xPX7oyB6i7auqOgaTc1j8dtdEmgOj+xCud4WUUSNSVKuz6qlW+rev22kcutbQAIRiP9FVrzu4noS6w9f6rbuQWOtQZJkn77ZLL9l5n9tuYt47zL6xNTd8dcfk1PKak+V+8DywDbLBP/rruQqzbrZZsxal3xcDG42tKFSum6/J76BwrPSa3dACAReTZJ+F8mifqbXpU7N3TugCPiPDZpOvru6fTSnwcoWmUJNF9887M9b9HlKVpWR5Of4zjuMqibUqVbXWrVVFO96qBvSqCmmhZ7F+s8SKtcndcuvirAN59lv8QKNmelvhkTVDf1TUT8U8yU4ZzQuQKOe+j28mg0+bfj8fafcK7n+lLkbtdvsx53vA6apsp2suGvWwI0eWi7l1cbZfsKrSIxY5UtXNMeGOrreboAXue73f7xA0vsMAh/1jpvqNb0e0TwTgBvPQ9q27kBjgfNM+Px9FfH4+lniZjaGpmqXPvavg7aLS367Jzlal7sJOh/790qTfuaLkA0Var6ueNsDFdfPeymaqNp/8QSLd6WpF+1a0qqOvDaA1IMIqdFWIjIGxaL4h15bv60C7rtvZVHTucCOB40j4/H27+QZZPXu/xj4Vy9bNx5jxvR+8/H6lyfLrY8xq2rzr5r+8u1VZ3uuZq4/Co22XL1szlQVGpeu3xdVewaYJrPph7BUL3HCkCzWf535vP871deveHR4IHjH+jOZLL9jiwbvdYY55Vp0ipqT7/6EdcXRsQulzY6vvfxXW+nz5PWxV/38bakilpr8Fb9NdWqerl223Vp0b7/pp3Uvp46rm07KmJ1LaTLCs/MWovFIv+6w8PFT1srSFMNpYbVVYfFTYO8pNmZTLZ+Nk1HTzvPWbch3H09WuWb3+MZ+zo1jx03ki/viN22VP91oVxzYrW+00G7jpMsjeh2VPRdHwOoUr362osHjrpK3W6jkjz1+orCfP5stvixmzf3sL8/a/DxaGmwwPGguTqZbP/7NB291UmavlF8OcUdt9mhm161pg0QnYk+uyf72vdwLGfHnG97rZYNGstm8GOQ1a+j2vH6fVaVV8/r+Hi2uqRDo5x0DGQVr5X0Ked23n5wMP/+g4PZoOLcBgoc8Xtobv3rNB3/rgCaQKt6o7pAtuzZ99fZnEA9G+oahfs9cs1rmudiAz6cq9sIcXtx1EO9jvizGuHbc0IxkKg8Vn1WKlsbkH1Ugcbx5xLNX7ky/drRKP2xmJ9HTYMEjrUW4/Hk34xG47ca42KamqPtaanLCxcDsa2Ld9ayQpk2WJuqUd096+rt9kb10WoPpOle7rrfvsGoj4+21Dhe3V12bwHIsdoWqCgKENHbZ7P8F91GWo8ePIMDjjEF0nT097Ns+rm2sQrqQQw2qzkUKp2+oqbzYHkdAfinHwCakqNp59TLVUDoXv5c1dOsP1bd6nURxTFs8b1RRz11ydfFa/90QKW2xdKnKOynHR7mvwpgK8sSjMcplGpmSn04NKi8am4H5uzPj8dbX+fX1TwQsJyemgCKwXP8y4vB06y3Ocq2+0Lb/R0SDLaviflppocKXrE491rfhG/TWycNqVC/r26qv8P2dXU3e3xdJQ2r/HDWmk88PFz8/MHB3ltnsxyXL09w6dLEx8A9PBqMxLHWQKnk6yaTnW+vjMOT1LCs8OoVdatTTUnTJInKovW9q/66anI2I2aXutXv7IjLtMOQlqmKbc9ftby63X5dknUNGjHFz6TytIU/t19qUZhPmM+L7zo8nK+3xPEelI8aj7f+PkBoqmgr1nLKczEfy5wIzVE5jOpVweM8fl3SphqtuyRKP5991NWJ2gZ+nIcatXNVitz2vcW2Wj3Vb1ti1usmABZEhK4l1P3StZ6uV4RgjIAZuHJl8g2XL4/vbm2N/pJbrvBwU1MNBDgWk8n2z2it0eV2fvTUZ+McT/XOdtI2utvpU3268lnXy3WplvF3d74OnjqPYeVoUBHbDo64TvcZ1xdUzC6Q9ds8dbXUjasGzPzf7+8f3WXm76zUvofTcR45cKw1yLLxP0nT8dPGHBdavpotcRJazWDt4qNVU2fdxzkDuuyP2NPXtZVHm5fYHuhur1lXrJJWydjj+qUhqapRPwZodV0FlsomkdrAEZdrA6gu5brm1qrJ6mqrx/m8+JtFUbzj8ccv/1xYrvAwXNaPFDjGGCRJ8vdHo62vClEBq9HZAajLPb283Sb1jfLVCNnv5u3v5MeVOy4fXJOfNohjwMXHuuomVAsEa1yU1/VLoKZTYrn913WurhJW4HQ5JhSShH/ipZduPT2dZreSRD8Um+eRAcdaC6XU108mO18XRprjB4oudeD+KbY9lnXoOh9dzDbVnuPbq9e32j3VR/j69zYQ6h22CZ52h0dNGtRVvGZdlWOgbiPFbccqWVw+2D19Ur9LgscDUZA8FkqpDG6Lxk8cjVLk+YPPZ/BIvGo+rOLaZLL119yOZcc5A6jxF7+Q+PjpqOnpio/5M0ALtE1qlqm1ULum3tGa9XV7mao2ml6v1dTGervHlas8Yf2DWbWsoJ+/5dS3LKFJTfsn9rpZ69Szy5enbwXw3QcHR7DWntlfHz0S4LhwmumPaZ3uLFfR+joGNT5XPbec+icKl3eg49tyoOrX2+ud7eSaRt3QbnfGrnqbcWzVgNSlbtXdzVSTHpW0DkCqv4P2JGnMmyCAr0/SxPxXLupQNl7Pgz+R5+ZrkyTxC+ScLXQ/f3300FU1N8mZfutoNPmU5ZKmzyg+DjT3p771d96m4S2RG7aLnzYfTW9Yl3esLoG6HAF9x9vAbN5D895ilcfdT9g/tMV6i8/QbmxPdM15BYC11cs6H7Ea2fay1RmqOx4qe0drhjH4/hdeePUdW1vj3zxLdb5JDxU4brs+fmo02vorx2d1bNoRzU5DHWWA9jX3/+C6O2RX1pgu/rqp7tXq6izN9pr1x0BoH+u7h1g6hI7ebKOql2rnY6A1AdSUoE1PW3vgq3vW2te07zc+FnvYApBcqjDCZJL+xJUr06e3t8fI8wcTUfBQVTVrBaPR5F9prY+xa5apP8uA0fz+YEab7rbax7o8Vl3UtqfqddXP96unbQkmtXPd5+M6up5XM8lhbKB3Ud2Wa7bftn+Of0eh/SqCQGrHg7oWjk8mo9fM58X35Lnx6Xjtqf/66KEBx6dz+v4sG7+1uUygTqvYJv3G9P1St3PgfqhPvWq3u6zN5eBpqjJNNayzxVpdcSevOy6qzl5JhCa/XYNI+77j66syfQPhcfcYBsa6rRY6uzH26/f3Z7//QUVSPxTg+JCaTx+Pp1+7uiQ4jcSo9PX6sVV4bHfe471DfXZX6Ix96mQ/D+31K928xdRcphx36LbUa9Zfjd71OlutlOpYu1x8320m667+5apslcY3fo+NcqXkiSVOfC8upm2xyP+xMZbb+cPvnx4ScCxGo+l3aZ0cE4e2bDTqrR2nBUut5dqo6mtudNj2BGJoP/6kjmOrU5+dE841662X7+q04Tl2DSr1NvrBEs4fr0I3Qd8/i9/thGg6Ljrd0GV7lcRpBoW68jI5OJh9J4Boq8qT/fXRiZ0DJw3AdF600Tdk2fht/SraWYvT44zLjiuk3kFjIHU7B5qSpH4PXarMcqlRXVevs7IpukBbdxBUbuK6WtQ1sleGecxzHO/VHkgq4HUZ812evG4HiqufOXT4rvvpt7kqwAQ+pTwe80QE5HnxDUdH8x9MU/2LLgHi2fS1EwMny8YnKu9j0b7rdKrXKtR8EMv0+iW1dEqV+u9Vjf24vqbEuh9yvPSpfrF9EiguW3cdd6ldoVzbW7esE9uSr3iQCcCM49W6nmu/Y7XeX9rOjOp305MXPyelGPv7Rz+8szN9Kk213zXh/sHzAN3RjvHp9NJ3AstnYc+e+kfala4+kVSIqd2pY+AtcxW3PU3LOmv8vQ6GZsdtX9N9D00eu89Xz7Uu/QK/tgGILnWMasfjidR2u3XgtRiKHlr1s+4SdyE5/OTBwdG3pOn2Xx+PszPpiycGzuHh7krljDHIsvFbRqPxNy4veRaiM+6wp5dq3XMZJ223Wy2K22gCqA2uvjmirrYrtSSqsTwW20XL76kO+ua13eWb9xGvKm2fi+2PeG6oX53r7uBl+bKuStrWJb3jQymF+Tz/tsPD2d/KsiRf5mZelU4MnEuXrq9UzhgDZvpfgVjkPwg6uT2zUq0dIGrTMjWxX2XsA0/zfKXnd9XVHii6pUQ/kOv3WKlyTYM8tiv67Jg+FbeSQN2ScRl4+ha+NalLYsVOCmMMRqM0WSyKv26tfONZmDkn9qod74lwS1mzbPSZaTr+rIenot0faJYZ7svbWva9XeFxbXTbU8uuD1InPh930vr59rXN9roldxtslQOh7ijoqqtNTcdCbIt1tV+/rn2uaS9VnrbK6zafL/7sbLZ4Ok0TKMUr/fXRiSXOvXs3l5wNo5ZgOt357iyb9BhiZ+PZqOpqPvyTg6jLOdBkvQLXMvWMeo632zrO9olarpVv1lVPeFFX3+rSa3ld4XwoH0d3tNvo+pTW82t79wJvzTU+9fqIXKRJvyrX5rvdTqWyeakDAN93cDB7+/1qQScGjlLJ0vPWGozHW39sPJ5+XMiJ9uCp2ZHv3znQHL3CyFo/335RVfun42WZbdGlYtVVoJNLuMBj2y7pCtCMz1XPoHlt4KPat6hLTWs+M2mc7/9elq+NV7G086qbEFBbtk0oiuKLn3/+xicbI//xfqIKTgGcZZcIiGhL6+Rv1keTro70oOhs6o9H6/5RbxX7qss2aXeSsrR0lz2G25qe35Qwy438Zpm27eOOCYJUqc6hBFbTvdx2DbdtljqIUDtubd+zCQ00cCNSe/XOG+0KhXaKwoCZ8cwzj/1/ptPRm7VWK9lQXXRi4OzsXOs950Ib6Evn84Odum2zOmhWF81Naorq+6PjvWnAah27KhPUhriN0xiq7VG7PRHazwsQS5NwPEiNbuDGnb1aeNjvOatU2lC2us/6s+uS7k3vWFdbzQsdTrp03yonm4hbo5Nl6uO01n+COfmePs/dcXRi4OT5rPecCKC1/pNhXcdp6PSq56qj84q1NUav+nvqauv07fcDqLu+PgMZQOkSjvkKoIgnBmNbJu7MMYC6VDB3PLRRgaLewfueTV1CL3OAtB0MtsZvZXJVYCnvwkuf6lScPMQ5se7c2f2Lt27tf89p49hODJw0XRo58IbFYvZZYUTzbKN6YMtGw7Ogk3feZqdtDlpNF6s7Ft9H3Cm62q+rJjVuqf7Z7kjL7qdburbsgFbb1CjbvL66t3jAqDshQp0hINO21NrgyaqDsQoJ6pI23dSW7hXfQT2LnRTtXlYNAuQdBRZE8uz161tfPp2Of2R5tH43nRg4N29+qHUsMDMeb/1Pk8kUp1XTTkf3p6LVJ8yiWiMAVSrMKmpQ37k2b10qSRcPXdccf667Pf+tbCvYQlVnrttLXRTq75cYoY5YOjTTRTXnjfqjBLrniKJnGnv8Oh9oNKiJm9dRipEk6V/b3p78SG90whI6MXC6HqiIIEnSx7Ns/NX36eU7Izq55OmTBv314wRtHF+u3d7ppXO9Y/WDtirbWUvHdU0VL6hq7ngYLyvJ02y/u86uTDt1KVKXTrVy0hia/ejRKXUA52hDAK59w+7u/O3M+seJ7InAc2LgMKvWMWsJo9H0v1JKw9qH5YIOj+ZsJVnXC2q6iLvsiDpPq72BZRKurQp28dJd33EdoH2+yv18HIgqKdmU9PUE8HHdXc+ky9MXP/f4fPM3QSANt1qtF0TggYjX5iowVZLO4uDg6M8eHMiPV89gNToxcB577NnWMaUUjo4OvjzPjzqB9WDUtLrnpE73J/a6PD1xm/2gqT5X8Zh1OoHapWrll7vHmx0yqEqhY1edJgZZU/3rV0+bnavORJBE1dxPvWy//VjZPe26K4kTJJpE/ER36UtT5WGrMevnlLzICVEFSUJfNBrhtQCeP0k/PTFwXvvaj679ZlYQsdff+95ff5uLT+sCzoOmunF4WuA0X3ZsL7SlTHlV1G5fB+umvs66bH6jfm3ffTbBFq+qbAI1dk1L43il8sVSsJ1Zs8lrU4rUpU63SlYv0/UMyvb6hLoAQtH7iL+G5woL8pFmLoG74Pr17T+TJONvdimYVwPPiYFz9+6N6Bf5yNPDz18sjjKt+6IKTq+vL6f7kyxN6p87OC5a+fR8dNuMVbtd9dcH02WqYXNStNlGs1O6Y21PYjNjZ9xukAhB0tSlW3twaIOnbpN1q3Q1AIY60Oa3LBLuvywXX+eOEzueDw9nfyxNk79IhMWqoTgnBs7LL78vuimB1ikA+TMiBswJul/igwBNqLd7pDsttV9o+/vq7a9u77S9ZbGq0s1fV/2xp6zVqXqvjzt7uyNXE4iuzi5bqi6F2pOKzWfprumy345/ZlQqZh3PoLwJp7ahsUq0hHrEkDH5Za3t25Mk+9FVc5ifGDjPPlupaswKi8Xs2Zdfft9nnqSTBFrNj39sLY12T6+uLe9kx7XfZQCvprK1R/hmB2p3sOX19OgxMdfl6N890ld1dr/X+sgcP/N6VEJb/Y3DbvqkT//vSl70vJxSRAEI3rryd6OMb8BaQZ7PviZJ5EdXjSQ48bSptab8AwTWmi/1iQYbJR+UlOkiiv7uoxaq/4VjwCogahc4fi6k3m44Xqli/YNAlw0U1dho43jQufJt6dlfvtu+aUq0+vPrmiOqX1s/v8qCvn4qcxKg+0lJ1F/yfPF789w+ZgzDGCr/+ujEEuc973lH+d1aiywbfVqWTdAf1AnU4R4d7bibk0mhpjrTrd6chGL7oW6gUuN3yfGp2ok71Kr33La92nUep6NXdVSdPr7nPvsqTGhW3rZQpm8ZNXomNOuqXH2SNK4D6O7uzd617H59vWEQqhmHlTFEBBSFmRYF/liWpX91FXXtFBInZHI3AMBK6c8/Xi1avXPdv+oGnFRNq3eG6nd75D8hFx1sNNtqSrbwvW9QqY/WlZSNvWbhd73O+MI+CRYnlw/2TThejf5dPNfVtKa6U+Vkqz/PeDvE9v12HydI6xk4BU5ag3X1lcoBwJV1P215jQhg7eIPGjOHMYvyr49OLHGuXn0iYlieLorFa9yD6noxDXQPlJovp0/P7laP+kG6Smdod/Bm3cueW/P8cardsh3U3HVtwHbbWXVQLQ9ZiZ9nXbK4fhMvTYjL1FXNOhCColWTsAEUFD8Vqi4pf4XJ0RjQhMV88UmAepaZXjxOcp8YONevPw3AOQaKIv/0V155vhTjD5d6Rpf7pOXu4VrJldttqn997VUdZ7nK2fS+NY3nqkwb5G27p0tNqtp3E4+CelhMvd7YfqmrdlWd/YCM+e0esGLeyvZreOkYKPy/lZUTnRFXOfnvAgIzUJgCI8aXbW2lf/u47d9PrKptb1/F9vZVXLnyJAD6rMVi1uEYqLN/ttKmr877s2va3p/qXHc7p7u3rra6z3VLj2XXx9dVUmVVp0lQtdx1XapfzbIoB4M6AEoueuzBuuOl4qv/OUf3BKC2nqnvEo9fin906eNo/7TWfF6eC4wBlgVNnypZB0BgZhwd7X3C8bFpZycNzqqdrucXj3jH21knA21TqhwvnPtVrq5ydU9g3zXLUs62T9SdF10bS1U81O2iChBNB0iT9wrcXRK5Q0XslVpoaXPVvbmT0voWDQwipdZUFObtRLKjFEEtCYI5MXCKIocxBRaLo0lRLD6FqFn7w1DZ4od6f+0dPyfSbDdWR2JearX2tdZZdwzWNgDux7ESVKzjwubrToamgyCur3/Qrku3+nqs7uvbIOnmqaZCxiytMFkaisdN1cDTKG9MkYngk5RSSzSpUwBHKYU0TZHn86ePjvaTdphNk5WzBtIq9a0uAeLfbRB1JfqLzM6aa3MVqvT5ZXx1u2a7eGyqUvVyzsPleI69WvVt2OuDQdW5+zt8nbfK7ght1I37+jPs9lK2H0gA/H1rLMdWUT9ZFDmKgj89y64gSXZ6rzqxc+CVV14AMyPPF49ba5bmnjp726ZrFOsre8LaGypb83hbyjVVifhY1+DR5imM7k0vW3VN+/o6n9Xx5XNBlQp1vKMjvp+GQY4uB0as5sa89EmROkC7bcl6PoRy3Q+AKJoIaDyDZeTiDUJjgJD/Hb47AwqKCfv7h5+T59m3Af1GzomBc/v2K97TYj9WKYXu0aMu3s8OQF3qy+lHpC7du61+LOOh3sGWtNTZVpdbuup0bSDWAb2svbjD1+uP66vAV6+zHS0tHXVUbVUJOdpLCtqu5Zi6JGb8XIEqBMYf93ptmItZDTZxlR39MTqkkwSzo8O3vfTSbaLuBUau3CptxuR0P4JS9OaH6xiIh5rm6I/GsdXabY52/Z60ZvvxsZO1Feo/WdvHUywV4t2g43X/PVei2ZFcLFkM1ure22tt3PUu7Kpbde2bx3H7dvbx1KxHWm++rgzE99E1wIYaKvyUUqcsIDBGoDRdefKJybNKqxe6uANOYePs7t7CnTuvYrE4+pjuHGv3A5aTXnsGOnAHdRutzZfRBNDJ6eTOhT5eKpumXndHzaWN0ehU0nW87THrp7p61bRvuu26ytZq25LLabnzJv7d/7N+lTvpdzeAUvrTF/2BAycHDrOC1mmitf6oB5tMHWjfaZft0G0LnITi0b4pAep1N9ttqlQnay+udxU3eOwC7ur4/dKrOUFdSab4d1U2gLBtj/TtVFZvs34jcTvHu+IFbQAAfWDqnPxcrjVX9Ut0ffSsjLEgxmfs7PRndDpFQsKrAJAActnFqy17EquOxLGtcBpaveP2G6SxkdsFnBgkJ+OzWV/dnjnOsK9f1+ap73f8TGvb+0X8d9mj3W02oxWcnRuX61fh2vXFamBcd5eTYplk7j/cLtTzzuL+EA4Zi8lEf+r2dtpb4ykSEs6hlH6MiKerqRQnBUPzxYZjTeoa6VcDULMjHx8lEH9vvtzjqCu38kpcLjnePeK3PUztRITxSs+yVM/vPukRq1/tXd7QSCsbeOqq7zjgL3mjHa+/yylR2XbVc6ufizLi+ONaMw4PZ08UhWX0LNA5sap2dHSI2ezo8mmu7aeTgOt+JFN9pA+/gfrv1Wb2V1XRlqsS3dKmu972HE73s4jtlWoWv9+e6LcvgopH0e+qDVdX28Xd5SRYJlHramrVnoj/Rc0zZ0yNXROsFSimx8bjdNp3ySkiBxZQSn3mslnVBlcnqL2rbN+xk9sy5dUNFaHrpR7nPj0p1cNi+s9HR9DdVZqSr672tIHQy1Ht+q7OHh+LwVifOG2roV3f43bbiUGq8s29RGvn42uWSJtVKbrT+hEiCGRcFEVvovQTA+fSpetIkuxNq67Nbr/4ZXdYH93qKtEyta3r+iWllnTg4yYRK75im+dkNkp71I4B3NXOMn6aUqTZmbs6aMx/nbfq2vqitbp7u31PMf9NF/Zy6rrPLifCsnfbfGbhCgFqIGy0I5UKK2FuyLciAuztHdRTOkV0Cq+aBkBJV0KG1en0I3dFXQ/xZJLo+M4ujc8um2d1Ws17t3rd3YZ7/VyzrrpnrrvdNoCrOuNBJ/a8ddmM3Q6WaqCp89wl8bq46yDp6w3UcV1fv2n8FsF8XnxEX5MnBs4rrzyPo6O9q/2poI5j6rRa6lmAzdcUjfT1+ttqT/XZdFjUaTX1qKvd5rH+duojZ9f19/OMugadasBoe8OoJm1iXrqdDV3tdbVPLdWvlGTNK1oVt6VSCf+eZ9c6JoAVASvGaHSGNs7ly48hTUej1VW1BmMAlqtvy15gfP3pO0nTQVDVeVzvb6sUp2k7/uzT91dR0dq2BXWeC+frqlazY9c9TrFjoau+5nOoS9Bq3816G92SsXmu3wMZogcqlaqLm3Ck5cIpH3XPM48eTb4osL09eUO7kKNTecaIeHSa65bU2PO9j04PmuPdwn0jIdD3qk5qmHZ5kXr18J42Qh3do26tJPocBlUUQaizMVq3Runj7JZ4OXWTh7pkrTsY4li+UDbep8ffp7gLqaygelYEoPnsnNUSAkSdPteQ1fHd185YsRDgTT03enLgHB7uwpj8I1b3qnXRstHUvegHQd0jm3/wS0fUrt+BTm/r1L93gbOvPYqurXvH2upmH58VWKu9MCXqvHU1bbk9Eo/r1bVdtly3x6xPA6lAVLdWKDpLtSviOt1/5dPqVJObFOpxGWoXZ+dVY1aKToWa44bl4zrOyTpo8wXFD62tpjXX3TfbXdb28WEkfe7VLj7626xXUF0bz7Us246wSzq5Th4mLFvGOHV1tBgksWuZGs+7Mba3JGpd1Yt5Py4ntnOEderbEX8h702V9zN4y5o1dr0DZkK+KHqjmE+zdPoxIn7qdHFqsURpj5KNljquXZ2O68zd3qW4AzWPU/R5MmpOsjbVxXZ7nbVEvPQ/t+75ojbv7b1C2/cWq0ptSdTdfpOXalBqSsKYl1qrqEs59yUuQoEPf6E7ayN+upwEMapj1juQBMAUBkmiemNuTgOcKRFNTtqR/dVojljt80BTVTgt9en1zVG5ucy360Uex8tx40hXWE+Xylhvt0taNe3BatSvRux2PRUPsZpX745dzzy2NfrUrCrZeuMOWodi8PQtUWj8rjkYGp2/xXOXDdY83qyjdrf+XwEEYKLt1k15Oo2hYgA6g92juhwCXb3vNADtp/oIurSk/4ylY3PErdfZdTx8NjtRf3xcvY1lfC47d9zI3naSNDt1eE4UlWs7Gbrm8+orQau6/dmO++gCkHSWbqYdXHVgXa5stxuyIiDuv+o0wJmtOmfRpqaa0dUZ7x8ox9kTXR6qjis6eOu+8VXUwi73cLu9Vaj/+dQdDe3ne9xsfNXJg73kro1Vtdh17eqkCFDN1Z+xtOi7B1k6wJRtSYctWRZuSpWms8KVCcvWpFZvvbQ7QxiNU+ztHfbmuTkNcJ4GRNf4PjF1SZtVy69QuqOTdkmF4+Ym6u2fXmVcRsdJjeM8QbH61W1LdF7VG5JTV1u7pFUkDRoD0SoL6brV4aZUjylK7STl1S25c9zgW60fpbKO+FysuUqJYOqd5T8NcD6jriefhLpUsq5Ro+v36alvxF8+6nfpzIKT8NTp9Dn2PNXOB177qK0KVe+m/7r6iabLuPldGiO7SLx0oBqvu+5llYGhj58unrvf2/IRnNA1XxNuOjpeosfdI1M/Pk4MHBH7Xrcv/FmPwF0jSFPc3mcLx4ze3bw0HRqnb7t9rDmAHMdcFw912ySmvtCVJtWlVteo3626UaOjxde1nQ/SUXe35CrLtlDS7A9B8ix/bpVq1m9L19m33qumewMyTwEcvEdOvWb6uMvOBiCtWhvPvz8IsbeGcCU6H7rUX378e7W2utWMZeqOa6NrpO++qNvt3ZcvrQ9A0mo3BlNoJ+Zp+XxO/XivlJSuIJsu6gdRuStBfJC6f/hhAsSU9bV0GlXts4lA1ShzFnQ20qvpNYpthD5PWldoSLNzxcf6PGRdAOnzYlX1xvZE3FYXGLrB1f3sum2N4753S8Umr91t9dXR3lOnObhI+dfUCGpdXaILa89N0EohFV/X4JTia6V+LlwmIChWKPLibs9Nn2YeB+9e3Qhdlc5O0iwzqJsvt1t9aT74uFNLLwBjanuhOkst5f+4a9pzMqvV311Gonq67jtIjjbQ+55FOyat/n3ZpHAtpzPabyT86JdC3Q+wvYdOyW3lPCACCMiLAlmWHXTf3ekkzruJlm+UeHIwnY0jIJYsfTysotY0rjgxH8s7f1fdVeGmBOyWiG3qjj7oM87rHb/ZuZuDSSwZXPn6uXr55oAqNT66wBN/r0ATDvrtOGq1d/9ahWpOgj7Q+6attWfnVRPBR4mIDQ9j1dn5Y2rFaTvoqse7jrUTg/cbjydpP2qhp1w8qneoFOUzrWf0X63tUGefelc/7qRzZTN1hyKF30HC1dX0bifEcn6rqAHpBmslUio1Lfxo2V9dvC6j2OHjB4S4ZQESpTGbz4/6ajiNxNkXwQKll6R6WGdn8yynpuEdHwvUPieNv/Js9Nm8gfYN9XWY+PxqkQndVH+OPSpHh9Ssd7zlQOuSEI3SiNXMaqVnY7yv/exWG/tV4Uq6tD1wUdmaulZl3qzLoL7OJ4ifRRwrXel6cX3VQFZYi9EoOzuvGoCXADkKrMSdOBbH99N5mnRSydJv8NcfXFOdWIX61MAuMPfff9wRuw35qGasIgH7VLoKiMvAVD2j7pizis9KSlRJDvv5bv4WhD4Tv6e2nSOtGgK2pPk8hNxfTVkI/FJ1bY2HPgrwEeR5jtEoe29fyVOF3ACY9zbdGtna31elvutjD1Y8Qne9jKZxXx1rqmfx8eNBdNy9dUvgZRKviypejpN0q5xrAqoei+ZVFqoDpHlteObuM45IjgM9V+icLaBT+bUtUZvO5FVUsUZ7XVz12n8ErRQW8/w9fS2cZl3NvojcaBqecUfpigs7jfTpnxvoL9M8v2JLWGVU76LmPd+PytqW0hXIusOF6kDo6glVOek4HvNfAaZ/8GtHQXe9kwrs0nHO8dOOjC7PNCoOrC/ZDooi4NUSEFagq0M6BmATjO43KwYRbrU5dHQaiUMAdJfK0vRo3Y+e32q0JUna18SjIVqPqylJ+kb/41WjLs/dcruhUlNWp24e6uCM9Hf/tR4K035eMZ/V9/b2HKGO+jvsUnPrvC57d817aPPUZNZWRyTYKC0WS2A1DnRWGVs88bmwtDrc82KRQ+n+vQxPAxwB5G4vZ2jbOrWLO0eojkaWSJdwvKtTdL/oiPXys2EoHkPNF72c/2a9ywHTVDfb9XSda3ZW9y6q+48Ld6ugcdm6XdoeQCrbpsV9Z52xvdIFyrr7OTrvH4bU3lXcnNTAVBuPpHHPVH00ZU11LsDRHQgOBK0TzGaLdzbvNtApgEOw1rxobdgPpW7cLtP3Y6nQdx5oqyzHga0bnE3bpXmsfV/3T806Vq+z7lQIvaHrhuuStN6h2++jb16o3zaUlru5yUc/iLrvp34dOsFNzduNbrP1OlemjsGi3XTjrHsYxISDg8Nf76v5NJEDEMGt9l32q1N9cz09dVe19nzvK99XruPKUDq+cvkVvTbGcTkH6h19Wd31DtnurMvbqd9TBYouyYFa2dBm3X5phso0U0AtA8dy1a2TJHpSrXoDIx3vy6tX9VMVCut4bF8vtW+2EmCCO0Vhbvaxe9pUNb/jHuwyVSIc699SL5ZCq0yi9Umifmo+7OOOH1Nb1HHiEb5bfemrv93b2upZlxQPhnmXurWKytkNyNBm87k21biq/vYS7W6gt2PPlk2M10z4WJ+SavFZBYU6P9FtVMdqVXV1pvYhd5hgrYHS6neeeeaps0vW4TH8a/VZ5ngEXsah1KREl4p1svmf43b8Kvnt4W1Jza2OcTKJ2s0Hanx0S9Q6r/3PtdkJw5dmx6rK9rqAyzLUaLP/mbX5ai8taIOu63iTYvng3N1tTtF5pHaqdrMU/Vsdo/gbEQIcrBWMRtmvjce9wdEn3x8HAETwYpPTVUXy8k4njbrq+naX16db9Qhg6Xq4qzHaBZK+e+zuvD2qRaONPpuw73x3wnSJeK6McXd9xUv9OXbtGtDs0JWi07zmOBuo67nVee/elaCuWvlfNXwKEO+/I/5Y+R0NcgerqIGqrNT2RWXvWWOACEz04WZNqJU+ISmlQUTvF7ENH7c0PpvHq99LRXaXVO18GNLxvatcWUtPma7O2T4ej9jLpEC73VVIEN9H3d3d7A3N+46linSArpuXttrb3HDXXbusDndd8z66763PtipLhH8k2CsS4FUv2ddEvbmIqOeEf9alNKpeulKMNEt/is8yWYe1BkWxMHm++Ll6DFOsm3eBqCrTP4o3GV0mybrcMMd9b1OfzVVrKepQ3SAOn/EzWC6Fu89RjY/4WFe5mL82P+3fdVA1y1Vt1224VZ5l3SbrA8sy8NT4LGHSHNF6mm+yEtlndYuxXq6UQkQljEQESZLkSaJ/bdn7O5WqRkQoisX3WJt9OTM3HABNNaU5WnYbx9UoHr+s6mX2Xbs6xXVGygBV7S9TnYIRXhno/Wog+RfBrYSnFP6HeIO8vLdIyjl3dDxfIQhAZPYqDipmy1mBqA9K637balf9d1M6V4vDuhf8rjZQ1R0atruu6JisWO/JqHFtx+Dn12ZCKYU8L37zpZdu7C6zXU8JHIa15qdms6MXtM6eYyYwM5SqjCv3kLoY71I9+kbnJpDO4kF2qTN1wEgkdhwIBACDmSEQuAzADBBXuj8lsKJgpRpIRNwzsOG7FUCM7/TWtxX0eHFl/AhY6eQWXALDgljAYgAYMFWAJwodvQJv+yl7yDYkTl2StiVU/bl1DUAx0LqkWRNM6CCJ/sIHNX6vQCVLvl8h9DaqlwkDNYVz7k9rhTt3Dn7m7r0DaN2vkJ0KOIADT1EsvjQvil+HJRADWikorcHMYFZgJhAxBBoGGQgGjIXvPBI9jBhMyx/6qlSNqoFfOMPPfydWAJQvwxBrIaRhRUPACDmHxRKsWEAMIIVjxy4gMgMkd8ftAjC7IHMPbA/BLGA7gxCByIDMzHUBs+djoBhU3AY4hagpYHMQFbBF4SQOj2E9X4a3IDwFicDQFMYmyDGFpQwiGhYJQAoWIwglIE5ABGgqoJUBkwVgHFjgzWSiUoKG51HflRqdg163bVqVb+dRiwe++qAX6ikdGxLX3QRLfY/ONlEFhHiMJUF9KUFVvPwSdT0iwBoLpflfXro0WZqQ8NTA8Q39BkG+TZj/O1MUKPLcqygEZgVigDlBij1keoYFP4Uj2YbS2yDSACmwApgKkFiIGJR6abA7WncbbpZLaSAGADMIHLZncNcaC4H2ALCAFHD7+lhIfgSRQxAKKMxBKoOY29DmLhJagOwRBAYkh4A9grIzaN4FKAXLAZQ9BNkZiCwIOdjuQeMIigzEWCiy7v4YABkoJicVWAEMsPXZvMjfr3ZSRiAQCRLYwkLDWnJqH6ewpFDYMQoksFbByAjGMgqZYj4X5OYxmOQpzM1VzGY7yLED0ATEjEQLFM9AsnBSjRjEBI4iQJwXsz1t4Hhapkb1D3wBIHXQecCAvKQtIei/xGE3TenWMbg2tTGK6uu1E6kCFxGsEaSpPnzuuSs/y8yN3bPrdF/A8Tfxrcz2oyhJ/pC11qskFsYUkEJgTI4jM8NrDr8bj23vYjZ6Mwq5DMsTWGRYmCly2QGSbZAaQ6BhIbDGuhtigEgBtkBQaYgMxBYwRQFigkoIxXwftpgh1QmUJicdzALK3nYdBHOg2IXC3Eme4g6UHEFpRsIHIDUCyx4S2YeiAoAFSMBsAXa8cFDNiBxPUB7mChYKgi0ABGOcysVMTiMjwCoHdCsWxIABIawjIY7T5bnI3LCvC9xiW1gCiC0UCbTaB1Hhno9YEFkwi5NYFrAqQS7bmOXbmJmrWNAzOCou46i4igO8DqIeh+YcCR9CbAFLgpCRs1JbKkkSexMr9zY1pFNdYsUqcXVnHelyezSKOoia9RzTJdGGVvM81Q64t5ikGrfv7P2LF198BdoHeH7BF3RXc5/AcQ2L2K9k5v+bSH2cMQCpii2lBQt5Fh8++AJM7v4dPPGaOyhsAmsEgEGREwqMITYBUwIrCUACsV7v9moFeVelwIDZwhoDU1gILFQBECyYBEoA5P6FEIFxBILrtJQSWLHTC0iDSDsbBAqwdyBIYGkCgBGm3WzT/grOBDi7gojdaOxfMhFBJQrGWMe7qo+0BAZZC4GAlVdimMFkEeL/3GgZ7A52ACQAUCiMgCgBlxLBXSuWIEwgBYgxUFhgJ/swrvKLAL0TVlLkRYp7i6ewmz+JffPROLBvgahryPQhFA7LG3S5nMk7KYBmh207UbrUMX9lRw8WiYARX9MoXNUaqYA19a+PQp6CJsia1k5QXkPNgiuXt39gMh4dO6l9BsBxrFhrPpOZXlZKjaXqJYAAIzrE/Ikvwfs+tAt59Qdw5cnXYLHwSM8sUuXZlxxEC3e8xrjAix6UHiYkAASmEFghJIkGkThVTZQbzWFhcaV8xsyMQvwWjGHlYHULTkWpPexgwIfrq5HZgaGaEHQmFJUOAWY4fqyzBx3IPBgFUMwAB13egUwp5doU69Sn0MG4etlK+VdsfCdQvoOID7oV32Vo5FQ6YQhrV38ieDx9GU/I72BR/CrumV/CndnrcffoE7CvX49RJkhpF2ILf5/B2WOdFK15yOqJPqrBoZJEwXaqO2Ai+6V8l92uapGmlOoHKFr9pYNqE55Umkbib0Qs7W9f3vqxK1o51X4JnRFwAEDuWVv8Ua2zH6g9THKm9iQ5wP7jfwAvv/DrmI7fDX3pORR5AbEMW6oJKjLu3KhMtZEu6N+uvLUCKNf/rMB7rbjULUR01bGpvh0Fc9uT1179GAxpKV3E9Y5TqTWhnbheIvIAohrIGAQmwAbPHYwHV9C7PTitnwQsB1gBs/f0+KIihePTGVMg0qhmwDUgQYIwRBi53oGQBmVzPMYv4Ynp+3CYvws3Dj8CNw8+Gvv6zcgyjZR24Tqt85YyC4wpYIzpcU9XQOlX22LPXISmBqCkfAntdjplTWRekbdbulQ66vgWfhkBJuPsx7VWuSmO39/2fvYjbLElIv/EmPzbmJ3niL3hScRgmWG6PcXB438cL9+cgvK7ULrCbejU1lpvlDljv4sqALhhjhkloErvCqTW4QMoYolRch6JtyqkpBo1g8oSRuCwZJjISZZw/3VJ6Xq2+219Pc7uUYq9Xer4C278UrIGntjZeEEFrMCFcvRkTsEqA6kMpEcAZ2A9ATgDSENIgSmFUmN3nhhCAosMM/sUDu3rMZ4k+MjHfwsff/1H8frkn4KP3ov9xSUIb7tnCCetkyRBmqZgVjUJ090XKkndmieS2kf9XLO6LoxS9/em3dJ7TXSIvD+fWSFJ9D8Q8YohdV8T6AwlDrwUKL7VWn4rc/p7JagPAACBNrcxevwtuHHwVZi+/D24/uwYolTV6REAAK9jNw3SiuJRz9pKotQpgKcu8skb+c25DHcujFbkVS1b67RE1reHst4gKYI0cJOUkVpBAsUcGdoStJRS664b4IA1xgOHoaJnUz0fAXMCUmN3Z9Y7JNQYRApsq8lG8ZJIxMBaQHHmFCROABDmhWCGp5COgI8YfQBPzl/Ei3tvwEu7nwE1fRZjvQuYhVcnNZRi5HmBPM9r2yAGIIX9boiAoPFIEzcikbugKV2q7QeriV6p1VN6XePf5aBZaQKhYNO6QfTbWotsNHqfUurH8jzv1fRiOkOJ41khhjH5V4sULznJU80ZiAhSexP6qS/Bh8zn4fD2h5DoahStd2Q/eWjboKk8QF3tU+N7s1xwMxoPqmbZoPLU1cLq5VI5PxVLVmp4pggCKHEueVLOc8UORMKAsNu4KIAtvqcAVGZVSqwwF0NEIE7AegIiDSsAUwbFU2g1gZByyqByUgacQpCAlIbiDMxjEHkJBQ2ixKm31mIxA3bnl8HJBG+6+pt486UfwnT+i9g7UDBe+jhpy0jTFFmWldKyrfaWb7Lx/BsgiOymSouz1VsrwVD9Dq5miX5XhRviqEvjo2bfICilfozDTDNFfz10phInkAj2imL+mUnC7wVIAZHkMDOMsgz7r/lv8OIHn8frk5eQXH4WRW7KjlrvsKi5RJsUS5o+MDW4Q/Uk6+OGm313wAllKtUuVvkqozlIC2ILEQcikLNLlB8wIAIhCloXgqvaa+TlRJu13gXvvXHk1XXn7wnqHoMpAyiBpQJECmAFQuqkii38A1NOTUPiVVkFUgpsnREhNjxv63wTrJ1NRIKF0VjQs7h2pcCV6c/hA3d+Bx88+D0oJk9hxHddG2BoP9m9WCyQ53n5nqrJTdSeZSk4yo7sbbgSPLZUg0MRkup7XSb1vVvUS3UaReF9u0+tNLa2Jz+WZSlWsW+ABwQc39E+UBTzz9U6+/maKgYC2z1Mt6/i3rU/jQ/e/Kt4XXYDPLoOyV2JypCUTvDEQIlnvFcBTuVi7SorCAYxgMoQRwCQ9XxQVN4H5ChywQVwUsbpKQKIBdgl8RbfYUmFSceog5U2moCJIAxADIhTkBpBjIHYhX8GLhqDOQFxCgE7ySMM5tQ/KAVrjbNHggfOwiGaFQQJFBScW5ydWgguFSSAsDcfIUm28YbX3MaVuz+K3771SdjLPh5bYwOYA4gPQ8qyDMwK8/kcxpheaVP24agzlzNYJaBiAyieBF1qcnRQpJxR9LumYQQJzh8+2J//xMHebBUtDcADUNUCOXvH/AJAn6d15kdnACCnZ9vbGD/+Vtza+iN49UMHYHMAVt6L5UVu0Old/xV0eQjrkklaoGqCqa5SNIMOQwiOrdUlEmwlLn8DcGqYApRiUBAxXkqoEp8EBgMibmGuYudp89eyIuf6tOJMGk0AO08kE0NU6qQVa7AaAdZ56FiNwDQGaATQCMwjEGkACUhSkGgwFGA1SI1B6QSSTsDpGJyMnS2kMoBTEKX+GgUy7P5sAiZGvhDsHT2GK5cSfMJjP4NrR/8Me3tzFLyDChiENE0wmYyRJEnkWYuffWzkSKMM1epqO26Og0yHitY6J6XmVoHISXeB/M08z+18sUC+yGt/ffRAJE7MdJ7PfpZZfYVS+oeNKXzncyDI6Abwmi/Ci7/zAegP/hCuP/c6FKy8w8iP5hKcA+66ygitpMyy7XqqpCJdxB0qIKMM/aEQkRzdEQU3lyDYcIHbysFGsFRFSLtPW74oYjigIUz0OtUMLK7zCwHCEJ14MIyclx0WpMaAmoBpAsAAosCkPZM+skHcPZCf5IVK3dM0lYrqBKLx9TuJJcRg7a4n9m5973Q4zKfItrfxlulNPP/hf4X3730e0umTyOiufxdurdZkwpjNCPP5HM2NdSUEpHWM67GrIBypPqRZeCmWKrd4eQRBLS5/Ot0ASZIgG2XfV6mMq9EDBY73smE+3/+R0WjnzwL0XcbkVWezC2R6F/lzfwQvvPcG+IM/h8vPvBZCBGvgOhmFaOvQketKa9PGiaWM+23dCM2uMzkgxJKjWvIbPF7O/nAv0Rn+FL0M62Pw6k6NsJRAyNksfj2hU8E4hOg4/Z2JYX10hAigNHkbSUOQgHUCiAIoAXPmDXwNZu1HTQUSBSsFiBWIRiBOAGJYceoNhTgr8mE/CK55N7dFSQKCAqyAlIokJHubxz9DEbAwIMCR0UiTq3jj6+5h68ZP4zdffQvMzsdgog/KqQRmwmg0BjNjNpuhiG2GEgT+HQbnQJgC6OhDlYSoOwiapeISlTotjVJu4CPvbWNizGaLv1fk9g6fUPd6wBIH3udvMZvt/m2txwmAv+HOOLkpxQGmowT7r/8GfOC3b+P1L78DO0++0XnTRMqHFMdFxQ6P4xwDYc4huJDr1HYGOKAAbvQOIAJKYJUOlwo0ZftEEB/jBnizwd+qFWf4K1Xp3sQBkBYiCZQaQzh1Iz8lXo0aAXCqIGEEViksCHZxCPLuZ1DqpZRyoBULURoIQBNArI9GgHKAZYJm5UKfRJyEEXGDFDnTDOXkpHeCsIbJc+yay3ji8QkIv4R33iAcbL0Z03QXMEXpEMiyEZgZh4eHyPN+lQfhyXdIol4BsILEKR98dEGl0DnvDWvGOEm+x23NeTJ64MABHMpFLBaLve/IskszIv5frZ27cUIYlN/F1vQ6Dl7/5/DC+74Nz/H7sfPEMyhyN1qyijtq6LhdKY36bJswSVpJjqA7x3NNYZRyczZBRYQHS5i1b88BlXYWSXBm13VpoMaPiDhVzUdLE42hkDlPnJ4A4uwapzelUJQ5BwC5YFIiBiXbACyEMmejMDsJpZWPOCAQlIvMUBaw1v0OMWjWAkjAiuCWeShYsiAyTlPwap1SlURWxCBYWFvg7tEYV594Az5p/D78xgsH2B+9BdNpAikOEebJkiTBdDrF4eEh5vOQbrwuCST6tylyqm7fAFXHINm1j0HTIRB+i7hJ58lk/Jvj6eRX2qrd8fRQgAME2wAwZvG/ATRm5r8ezlkBeHET00tP4vAj/xc8//x34Dn5Jew88RyM8RLBqzaAm9sJcye1ibXazbtzbgBlL3Hi0JZAwYPmrgkSxk1XONWMWaG0H1pqIhCkp4VAkfOYWUYZ7xTmegQGQOaWFXibTaABNQZLCksM4QSEBAzlPGZqC4QERMq5ZmUOF4GQOUmjRiBKYL2a6QDBIMsAtA8gZZB2EpTgnBGsyT0X/yjc7Yrzs1m4QNpy8pcgxgLWACoDKwGZHIeHY2xfvoJPTl7Gf3rfz+Ne/jZcujSBmCP/PpzdM51uAYC3ezqVL9TtV2//1XtQV7dCNTh5MdQAVQyaMDCmaQJjLH7+59/xP+/uHiBJ+mHwuz//D3Yef2jAAQAiBWPmAORviKT7SunvDiO8QED5TYynV3H42m/Gi8//dbzuw7+I6ROvcwvMbF3q+BoRbB9XfyVtnFesMgjFEkipmuEYu5XdAq8QTentBDRd0lXbwe6hqLwKczgQsBAksoPccoIRFI9grVcH2c3JEDSszkDI3LwNM4hSME0hPAYhcfYeDCB+0hMK4DFA2vPuF+DZwkk4veWipcmAQ24yIRA0RAXJLVBiYcQv3WMfPMrOJQ5y8zWwBUgpiMqqZ6QmMPkRDo4sJtc+Gm+bPI9f+61fwa29T8POdgaYGYJDh5mxNd0CEePo6LBUwYMmXmUGkA649C08CBTFM/bEqFWgqb4z69uXLm39wHiU+uDakxGdVET95E/+4Ikb6SIRiyzb/hxm/dNFMVPVIxRIchWzgyMkH/h2PD39FWw/8SxcAKjrmLGnrAqpCfXGbs0KGG5hki07euxUYA62TVgHUwFL+ZAg8fq+yx7kJzpRGcSAn3vx8zcsAmjfIcS69T685QGZwrL2wJwASkGEQdCAJZBKwOkUFtt+RSfBBXNqiCiQhW/LqWkCCxYCOINhARk3/wOlQOyA5kSok5zOiWBBsN6OMX5AYADGp01S3rSxEFN4/djZQUIWRBPAFLB2DmiFSZaA8pt4x7sWuGF+Fy5tpxA7R+y5FAEODw9xeHgAsU6iBde0+KDeylWNcpSqQ6dSf6V5pIWZKmol9BFmgjGC3NgvffLJx/7lcWraF3/xH+48/giBI1AqAXPyqQB+qVK73HyGJFdxeLiAfu9fwlPZr+DKM28EsYZIiBWLR5H2OvqqnTBf33ZLB6nhbKjgYQtg4rKNKkbMRQmH8+E+iABhb9cYZ4SLcoBhJM7zpdyci5uTGUFYO6CI68gkDOLMzduAwWoHlO24wcIAQO5VVYabu9EgBRBGsHAdjzkDBe8hCMQuBIfA7lqysMEI9x5CEIOsi0wQ0SDksGD3vErJ7OfQSvey9wBSAhIDEoPCGowmE6jiFn7lN2/iNn0CLm37SIaaZkA4PDzEwf4erCmqQQnieLMBKNax2YAHOn+h0+4J5kEJHgbG4zFeeunGr/7n//y+tynVVNvb9J1/6+92Hn+oqlpMRARjFiiK2S8nyfgLifRPhjHECoDFLUwm13D4hv8eH/7A30Dx/L/Ftaefhcqm5fw2UDkLmraHO9e1HCAAJni+vKAnt948gKXLa0aaIORsBBLrljMTymXPxrpZc0VAIQKiDCAFUikEKQgKzIlXr1IQOwDAWhfywhmgpi7imTJYw+V9KZrAknG/VObvh0s1h5Wrj0JcnLftxEteAgHWLXNwEsYHorK3tXwnJUnAAgixk3IiAOtSISJ20kjAUCp1a5zyuVP57AR6vIO3fqzgV971PuwefCR2phV4gno4Ho8h1mB/b698gfEarnK65/heVPuoH20Dwjk8CE88ef3vjicjaH367v/IgAPAG+qMopj/FLP9/Vqn/wCgK6XreX4Tk+l1zN/wF/HhDz4L+dA/w/XHDZKty7C2gDF1uyfYIPVJ0XjEEq/fhjIE8WHzkEqK1G0lV6/WCtaPgkx+wUPwZPtgUS0EUQILb7voLZByrmK3vGIMIIWQBVMKkhFEj0HKq1FqDNAEpEYgKaAkg0HuehJPATYe1Np7JL3XUbvQGwuGFQKRi3q21sBNmiYglTr1zBqINQAZKJ0A1sDClEk+nCNCYIlBeQGQcd49a8Gc+vkd5RfaFQC54FGnZjNmhcVk+6PxyR/3YfyHdz2P/cNnsDVWcJPK1fOcbjmHwd7ervf4uZdX87KV7635LVBTGgUFrlLbgrQBAaMsw41Xb984nM3/z+2tKebzxeqdtUGPFDgVEUTs/zfP55+qlPoJZv0Rbm6SIfObSPUUizf8abzy/A6KF78Hjz81R3LpMShtYY3UwBKrVlHdpTs51rcdkIKF6h5ufXJUfMYeADAgoTKKwIXww79wp/8TBEIK8E4AVhmEpwBlrtMjAaxy6p6auE4q7MGiAT122pBVEDWFEIOkcB0ZBEbq7pXd5KWE+RdO4f1hqDK7aL9cVEB+zY6zyYyTKFI4V7j1zsPg6PBTBxoCyyNvs1kott4C9c8aAmudTRTSZYWWj+YG052n8SkfI/jF33gB+7PXYWtU5aQL72uytQUBsH/vrlPTCJWo8aNgbMu0TX8vnhDbPAE0kX3jebYiIFbfbIzNd/cOOt0Iq9IggBPWtYjgPUVhPlop+V6lkj/i1AcG2UOM6BUsnvtq3EqfgL35vbiWP4/s8jNQmr3b16suUsWfxQZhPGlaSh+2pR7ctdrULTJzv0UI0AwjplygV9blO5elBKymYMognDpVjRMQNAgTN7mpFMAaJOTuTY0AHsEQg6HAPIbQyLmRUYBo5DqEFHBZgTSENUQSwM9LWVHufqDc/E8yBiMpDe4wq09EUOSlrLil58KVxHXPxVYjv9iy1wqFASgBiQJgnJdSfLtC7hi7AefgwGJn5034pI95D37pt17GkXoGY5174DnnEIgwnW7BGov9vXsOKOS9bFG4TmcHL5mOJVKptweIl2WtFbDQS88+99T/kaZ6aQabVWgQwHFULuZaGJN/nYh9n1Lp/1hOVJoZUnUT9PQX4+74GciH/xau5O/B+MoTUKOxe1B+5jtW1VzHp9oxUD1o05WrXJIBZMwMgpMyznz2NlAY38phjgBKoHgK4i0QZyCVABzWvKQuVxorgDKwGoNFUADlvI0C+7CZCUgsCAVI+fAXuOtJKRcgYJ3Tg8m9PmIGqxTVXJMCiMu8BdYb22XsmLil1jZ4HaUI47Ir42MDmaxftu2lOafO3rEAhF1UtcA/owTWzmALuBWnDOzNDK4+/lF4y+zdeMf7byGZXoOiReXt9O9ja2cHIhb7e3cjAMeypuwi0aEOS6Y2mMVn3f1u70y/OctSnCZSoEkDAk5FrpObv1wUi3+ndfKv3Uw0Q0wBbZ8HX/4I7I7+Kswr/xDXbv4LTK6MkUyuQchnlin/KskTorPDehkA3pXMpQctRBE4dc1W14p1dYN90Kat1DtJQHrkR+IMolOwHgPIQJYAPQaUSx6ooABOAUphSUORciigDMQj5wa2OSAFXDxa5lZ4EpeGfpWZ1nnSSE8cSENgprWAC8pxgCnDlsSrlM5GqSYiE4AS5/Ag8VLM+HvUAHzQrRgvHZWbGRDyqqkLNHVAHTk+EObMCHsz4JnXvgH37v0a3nNT49LlHZ/qy5GI809s7+ygKHIcHe5XYKgBpa2o9R0tIeVftbUW6Sj7Va31P4knYe+HBgkcRwTA/HRR2E9jTr6XWb0Z3k3KxQ0k2Q4On/1/Qm5/FC7d+X6M91/E6NproBMNY0wVAdBQ24TEx5BRBBI3ooaATgegihM3xaHKQcxNQDNgnZQgzsDQACd+ObIGGw1JRxA1gvNiiI9sTt0EKBSIpqDETyiSBkzu/pIxhEewnILgopfrQRG29Hy5pdUaIs61i1IicqNXOdeze4ZcPuFyYZ7ymV0YIFKA5I5HYVg2bgkClFe12D9DFwbkgkBzB/wkdUqvt1EYgoXdwRvf+BG4tfse7B5NMR1RKW3coOak//aly7BFgfnssApJbwqe8n7czXWCplTX3L+sGFqr//roaH7fKlqgAQMH8E/tl4xZvEVE/SOl0v9HORtd7CFRM8yufyEWkzdh58b34eqNfwu6fB00uoxYYrhRjQAKUsfZBJVKYKPgzjhiwMJl4WTYMA8h4iYhVeYWkpECxIXNCCdQyMA2AZKJkyQFwbmkJxA1dp2JM0CNAFK+D2uvfxEk2QLpsRu94eZeSLxL2dsGBHbGvs68TWCcbVN2Ix/5QM6OQTQR7NJHKTffE+ZOEJ6PXyQkFmQVwAQyuVMFk7H3wPmBBuLUNW+gCxLnMKm0YUeKMZsdYLr1HD7+Y2f4pV9/GXP9LDIVVDZnE4kIEp1g+/IVFDdzFMXCBejW+kK9b8TWTbCNhKLgWjhNY7q9/fM7O1v/qSh6N1g7MT2whWxnR+RHJfM1RTH7CmvtLQl9vsih8w9Cxk/i3tN/ATemfwoHeyOY3RdgihwIKV4VXAekOISmyodQgcatn1GaQexWbrqwArj5F7j4L+YtKLUFUhMQZ04VowTMUzCPgWQMozKIZbfgLJ26ORoBGBkUj0BQXmppiHGTm1ZNQNkl544Ok6OivGTwaZkohUqmgEogrBz4UC19cNEPLkmi65Mc+iaIlHNOKAYpDS7/nKoV1Cticm50kAODngLiVLqwxoco9TPH2h9XICRukpo0DBgC77Rgi6PZES499bvwkc9NsNh7FUJp5LAJ2oFFNhpj+9IVdx/R3E71pcu2Ce+u7ioABEma5tPp+GsA1OboVv3ro4FLnIq85+1HjJn9TJJM/t8A/UHyW17o4gasmmD3+lfh6PATcX3/n+Py3s+hGBP06LoHDvzsfDX6hs4WiENUNAmIVeV6NnAuXU4ARSBkYNEQnToj3atoZC1EpQBPnZ6fjp2LGQQp3NwNqzEstAOO7+TEvgPTyEU6eFe5iyggt+4GAPs8AsIp3CI2lxvb2RhwN+m9B2XsnbglBBByUQRKe8nL8NGc4e5RhruQO2dtDk4nEBr5Wekw7+WQSKhyMQTXvZNgBkTOfU3isuoYAg6PDF7/ho/FjZu/ilcP59gax+O2r8saTKZbWMxn2N+7A1ZJaU7GZetU6aTByUFwdliaZn/BGPPiYr4AlgDhpHQOJE5MDBF7l5n+kIj9Wmvtb7ugQwaZI6TmgyjGr8HL174Br259C/L5szD3noeZ7wMmWg5AVJMy1bIAuMlJZqeCwRn/TBPvKRu5zs0aNhlBaARSWwBPoWjsIpn1yM330AistiE2gRQEQgrmzEdA+5gxJggLRGUQdqpbCWs/8w9vSwhlID2FSsK+lF4qlfaMdn8gN/qTcjsyBKmgwqSpdbZR8FaW0Qf+kxO3ZYldgPXIOQQkxO+FcoFJgktwYiM+XNQCi3MsAE5KMTSkyIHR43j9G14Lzm+6nSFKWwdeFQ2etktIU5drAahkTayQhouonIl2x8JEeDoa/fZkOvoOCMBKlY6gk/z10bmROBWFZHf2/zSm+EER+4NKJX8guJsTexsGCW5OPhv7yZtwdf+HcPnw56CyD8OkV6A4dR4n60Zk5jBiOhuISYGg3GQZRq4zJplz/RqnvpHOvH7PzlYJhrja9p3SRwH4fYKYEzCnkJBZE/ApcJRXe9hFb1PooOxVOeuiFTh1yT5AcK/MeGSpMpMvWSlNfmHtzJnQjp8YZqCMB7MEr16FwcStbCUQxCxcLB2PfIxb0IHCSqPgofN7/ZDy0iosD3eR2mwJYPERF84BcLh/gMeeeBpPXr+BD92bYzri8vmXkeTWIklSTKY7uLe4WU5s17uBU8Uo8p6V4BEATJhuTb5aaw1D9+9+btI5kzgV+Qe5MCb/sjyf/Slrbe7Aw2ApkNkPYqFHePnyn8RL2/8jDsyngg7uoTi8hWLhdz7wUQNVdA6FAGCIJE5K6My9HOujAmgEMi6aGUqDDECFQHiEoDqCUu+AAJwtpSBI4QIzU5c3WgTCzg1NSFElDvG2j4gDExKEOBV3ywFcxtsxzqtFzBAm5xIRcdIsODvIP69g/FMZK4QQ/BrqErtwnVxPEfbjDMEV/skDoj2OFAAPfFTggp83Aruk+HGXF5sDegevec0zYJ8pJ7AcSx8rFqPJFGmW1fM4lyAOgx1Fx/2EMIDxZPLdWqv/5JIm2lP/9dE5lDh18u7jv1sUsx9n1n9VKf2VoSMksg/hI+ymH4kD9edwbf5LeKz4CaiDd2OREPToCjhNEfJviAC2MCDFfn2/36pDQsdPyhek1AiEDCDnpRJ2WWFIgnvbwKkqCsJc9idnoCd+BWhQtcJkqtfPicqNyjlWucr0uKGzufIMgrHek8bVUvAQChPsDfGpoRhhsCAvQ3zOa2tA1gJqWkUChAdtAXAAGUoHRJViuIoyqMZj65fIcNS/CbOjIzx2dRtXdjTuzSyypO0xgwBaa4wnW8gXC39t7Jmuu6KDxBERjMfj3cuXd77BJSNR5dmzpHMPHKCUPu+3Nv8qEfttSqX/GxF9JogBa5DgVVga4cOTz8a++QRcN7+My+YXQAfvRLFIweMtsNYgIhgBlIiPEUvdKOhinHznBaBC9hly4TM8hg8vcMdgghIBgk87q+CG7rBdoc5cOL+foHTOgiABglQoYG3h54q0XwFajbQOHgEw5D1w7LdZ8cZ8iIJ20WduqUDZkQli2fOVAyi8mxwO+IQy45BAnH6n2E0GC+CkpO/AYhAS3pNyIThi5s4OE6DyTwO2yKG3L+Hy5Uu4+cIuRskYYTq2goZ4O2UMnSQwReFd7hLZOJWQc/NLbhg5Opz9/jy/UZzVnE0XnVtVrYt86qbfMGbxWcbMv8Za87wz/BVY5sjMDRxC4QPJF+H58bdgb/S1UPIM9OwAxewAJp/5NE4WJDlMMXMxXgKArLMDQK4DBXdvmUkzVjUUYHPXaSEgO4cUC7D4iEo7B5vcO8+COuDWzIh16qZYC0YG5pEzx61B+bqEYcXPmwDermKnAkL8rnNhotO6ODMUYPjd6CR3WzdaAjikiiIAzq0e1L0qdyN517yfHIZ4B0SI87O+jHM3SEFwyRTdEgrXoxPPpx8TkOHS9iVoNlUwBMWfDiQ6SZGmmV94V4dW7C4gcvt3gug7VaJ/1pZIus+/HroQEqdO7mZF7D8uisU/Zea/zKy/iYgzIiCVQ4g9xB1McE/9PlxNPh2P4z/iUvFLsLMPwhQLFHoBnWRgBZgCIK1BxgBWw6qqHadSWYgUpYdLxK/+hIGQD53x0qOwcM4AMKzM3IQo6cBxZdta4z06bgUncRzwmJT+LaGQyN0Z55a8e9kb6mGRHcHliQO8qiiuM4swGN7tjAwgdvF4YPgQalRrJxzoQFTmhKsN6GWEtM/lRtZ3cuv3UEWpNokAeWFwaTvDJNPIhaCoHtEe+GUiJNkIXC659mChah2VEzmE+bz4navXr/y54FV7kHQBgROIQES5teYvWGv+rlL6m4j0N7nATcFIDmAxw02zhVv8xbimPglPJ/83puY/wizeC2vnkDQHUe6crWrL6fPsNlUtZ+rtwq0n0ZcAH9pfFAU40X41JrxHyUJgINbVx6wjcV/N3lsDN6oLQdi6ECEf+eA6g4uVo3h4FuvbcscUJ7C2gOvsyi8Mc7aSIA2+bhdEWhReKjhp5eZ/nApWuqyDbealrATbRRRAhQeKA7qUYoFdgg9CNZ+EhbOpSMMWFqnWSFWBo1ygk2CzBZupchjoxHkVC1uAw8R1uHe4AN35PAcr9RVhC8KziEdbRhcYOI58ZpMXrZU/B+T/2Fr6Fmb9leyN5BH2YGUfN3EJu+azcY0/Do+n/xnb5h3A4oMo1AzW7oOYoViBZeFzRBOIp355gIBsDlE+mF0MUBhYzWCegKyFkZkL9Vc+3EeMi3WDhlDqPdo+cQn5+klBqQQixtki0ACszytddTK3u5ZTIcVYGG+2sFsT7j19BOsnTQnBLe1S67o9SA3E+kSKpaThEvTOe+YSGApbgBSUBM8dACgnWTxo4NVU18O9nQPjPcUEawqMRiNsT0e4fXMBJCliuyyOKFBKQ2kNswh5qavIdiJCURSYTMffceny9q8XhTmzeLRldOGBE8jP8/yKcyCY77NW/XGl9JcTkSYBRrgHA4UPmUu4ic/EVf4YXOHncYXejTG9jEV+D0Wx6yfGJqBUufkSaAcMzABFUOTcx8YQiAsQG7fzmigXrWxyv1xBw5oFhAxIab++v8qBIFZcMgx/gCKXEpV5FAARdoO9dVKKVOZAEHZDCHYWhV26CYIcZefzW3w41S/kg+PSw+cOVOqkw6uPIWNxwA/KowcMeS+iIIdIAYXEqZFIoVQKAC45uxpja2sKvnEHIql/UwE00btjcqtVF1FuNi8NrbVI0uxnL1+59M1EzglziqQ1J6a1AU4gL4F+ytrip0TM64jUn2RW30DMIwXBWPZgDeEVs41X6eNxmT4KT9BNPMbvwVjehUV+C4YFrA/BuVtoBs5gTQE1NyA9gVWpC+8xFsIGRIn3BfnMMgRn+whcB6Xc2RQUOo+zKay1YON+k/KGvlfXKpslJGYEQAT2o3oZkGrF5zxgtwCNCogsfESAq0fAziYhZ99I6UIOfnp2YIRzKHC0g7aDjHMwuIl2Kr1bQgxCgrDUWlAlN3R2mUt4WM7BwJ0L91Nu9wIq10aVkdfwlyl9sLUz/RIiQp4Xy+z5M6W1A46jMtzmA9YW/62I+dvW8h9h1n+ciD+CiTDCPgSEu3mK2/lr8LJ+Ck+lH41r2Q2M7Ptg5h+AUbmrJylc8kBLMIt9cLYF4sQFbpqZ62h+a3eXEKOAW9HJ5ZyKWB8NwCEq2mf7Mbl3YY9dh4d2gZTlvUj5IWL8BlY+EgHwOdoYRNrZPWbmYuskCY/CU0gHFcJ8yOPTJVK0YgA4tS4s+iNxI37YBKyeBN9LNBIfhVH5xMjPj4EJRSGxX6S00+KsR/6AFzTu3Slm7O8fIhuPP308Gh0uFouHBhpgbYFTkR+9XrLW/M/Wmv+Fmb+BWX87kcqICCnmAObYzTXu5Y9jO3sGV/g5XFUv4ZK8AJZbWMwMoBmicgeKXAGJAJyCijmsIahkDBfUaSAmB1kLq0cAlPPCkYBQOMcDEj/SKhi4+RE3rxLma5pJ+hwkSeCXahPE5hCdAkgdWM0RyC58hpzMOxT8SC8WIVDUOT28dAvzTH4XbAq55ySoiVI+w2aye7dUO6w7d2mpnMvYqXZukzGLo6PCp8ryEUqxs7lEgp9LC/dJCsZYbF/a+S+TNPmNoliem/pB0NoDJ5B/SWKt/S5r5/+GSP13zPrziPgxIkJKBYgMDueHuCdTfEh9LK6lz+HJ7B6uZrdA5mXkxW0YspDiEGxzcHbVdUxzBAMD1iOAUwjlzsNUGLe8mtwEoJAFioWLNFAuM4zzYOWAJC6aIYzNLuUnSlsnjMilF6xUfABbQMyRXwYx9i7n4PsGQnBo1Wm9xHCr2rzqp6KFfnXgAAArv0WkCytwcXxivYcQlfoI7xxgjXyxh/1ZDq0Tb4c5iVPmqgufcJ5G8SqbMQZpNvqux564/q8ggkVeRMnxHw5tgNMgn+PgNwD7VcYsJsz8RQB/K7P6RICgiZDwDBZzvDJLcSt/GtdGT+Ny8hwuq9uY8C0kcheFzJHnboGZIguxCxhRUNAAKRfGIxawM1h20dNAApHC2Txl+A0AIVAxdzaGVmDK4cJ5Sq7LT7eViYViD0aZO0+ZnsDwCOwllwv5J7iJ3QAwqVXnQnF8boIoyX0lUSogiZWQqNuBAAZh/x4rBFYKirVXwQSJUtg72MP+0QJajRGD1tuh/pdTY0sJJoC18vPWmm+8ffM2TFHgoeponjbA6SUCEQ5F7D9zf+ZriPjLiNTvJuLLRMCIF7B2gQ/vAa/wNrbTK5iqp3ElPcKl7AhbaheKjjAvDt2cjSjAGpd8ECErsl8aHTbd0gzIHGKUX1hWJXyXonAJz1mBxJYertDTy3VfxBCaQSQBUQKwWxTHUa6EyuZIQPYIRbEPlT0JJsBYFyoTRn327Vsf5eDmjAQ1m0ZKC85LGinBr5SCSjRgXUSEsQapnuPmrV3MCsY0qXh3FFRA9x5MUaAoXCQGc3J46fL224uigDUmCqZ9uLQBzrFUOhL+kbXmHxGZ6wB/CRH/V8zq9xAxxhoQOcLhAtgVhQ8fTTFS23h863FcHeXYTheY6gWK/BbyYg7LczC7zaHEb8BWLl8Ucally6BOr7rAZa1xE/pUpqf1kW+O02jkFeOSa4geO8kmtsw57dIoWedNE7dSU/MIkMK5t+EngnzbQgIxXr1jKnM+B89auSUQoXSrw7vlXRC5j2yQHMYIElVgce82Xr55FzpJK54bk5Y+yBumKGByt4nW1qXtzx+N0gNj+iOXHwZtgHMC8h3zJmC/31r7/SLmM4n4DxHxVzKrJ50aZwGZwxjg+TuEF1ljO5vi+mSKa9Pr2B4nSPAq8vy2G9kLA2Dhtk8Ps/MUQmJc3jdivzO0zpx9IoANSwPKvhbUmzBbP3aAtAuwuK0V/ZpMl5mmDKWxDqhq7IDjcxyECAGnpZFLFQUXKU5lPQQyfvcaDjwgUuGcPRPyuoktQGSRKMEHXj3EvSOL6TjugpGKFuwoCGazQxAzrly7+sVJmvxynp9d7oDT0gY4p6JSCv2C2yDY/EVri08g4q8lUn+AmB9nIoyUAJTjYLbA3QPgg7tjbI0YV8aP4/r209iZCNjswRT3UOSHEC7c7F1xCLFezSLllmsTwRjrNhj2GWucGkV+gr9wnjo49U6QOwzZwgMjrcSCZOWdCIyXMLkPD6LoLv2EJgguV5uUOpUAPhWVlKXDPCi8GheCG5yEcj/GvMDhbYMP3DxCknaFx1SZWFlpHB3swxQFrly/9hVpmv7EWSbcuB/aAOc+yUuhA0D+nbXm3wHmm1j024noawD6PCK+nCiCZsCaQ9zZ3cfNe4yX7k5xZTrFzuQyLk+exFY2R8IHMLn7A1tIyA9SWLdbteSwCwsk2yDr18ooAYq5B9MYrgOH1ZiZzxktzrbyE41R13fxd9UMqo+Rg1e7bLXJbzQP43xufmsRwOlT4tW0aBc7RKWJLEZao9jP8RvvfwlHi0NMsrQjpqyynaw1mB0dYmtn+6vSLPuR4pgtER8mbYBzZlRKoUMR+8PWyg8T8Y6I/X3M+EPM6vMI2E61M+aLfB8funkXH+IEo3SMS9Mptsdb2El3sD1mjFIAcgTALZ8ujNsikIQAs3A+ASOQxRGs5FDpJRfFDfi0tC7wUsivnwFVCQsFAPnYNCJYchtWOWCVYgMWpswG6reoA3zmGqZgB1Uu8RKUkcccfklHShaHBwne9f5XcftgrwRNwE2Y7KySfzBmhwdIR+k3ZuPRDw0JNMAGOA+IShDtAvYfGiP/UMReA+hLAfocZv5KJp5kiUuRZM0RXrm9h5cFyJIRJpMtTNIE26MEl7d2sJUlGOkCJHPkxQLG5m6r9SL3k5opRJyrF5ZAkpSLvmBdJjT4FZ4oXBwb+2BSI4DLe1C5tAlwAaPQLskgAX4RjfPMeW+Z1G+5Utp800xAwhZkNT70ym28+6VXMFscYZI5h0C8IXIFGFfBYrEAsXzzKBt/18MI2jwpbYDzwKkE0S1A/oG19h8AxZ8H1O8h4s8F8EXM/NqR9y4JDA72b+OeMfgwJ0iTBNPRBNvTCXayBJdGE6RZgkwJjN2F5W2/xY2FzQsoSpwXDGGXN+sjCRZhStNrcy4ygXwwKEJqX2tcECl7NdQ6BwK8p81JFKcOBoRUUWbO06VASHQKGODW7Xt4+dY9vHznJsTOMcmyCCiO6utwACddzP+Qpsl3LFv3/yhpA5yHSiWIbgD2BwD6ARfrZT6diD8LoN9NRJ+hmCdauXkUY3Lc3buFm3dehdYjTMdjTEdjbE2n2MqmmGQpRkkCohk0Ka+JGaeqwbpl27Ag6yKLRY3c3I+QD7kJabAMSPIywLO0d6zbn4d80hErxued8xlvLPzEp4VWCXQyQTEv8MrNO3jl1i3cuHMXi3yGLNVQSRapZ1L7Hjxxs9kcEPP1OuHvfdCL0e6HNsB5ZFS5bgH5RRHziyL4dgCPEfFnA3gbEf9RZn481QlS7fa3OZrtY+/gHnCLkCQpRtkEk/EEqRJMJ9u4tLWDcTaCVoBWbk0Pin1YKBizcLqZ9Qa7ADY/gLUHbrGcvgSwD/UxFhC3AS7xCFaOQIWBpQwK1kVhi4VSbrcFqClmC+Cll1/GjTs3ceveHRhTIEtTTEZZ6ZIOVIHCz0dZwdHR4Z3FYv41W1vjH39or+GUtAHOYCiWRvhha+0PE5m/LEKfCvDnA/SxzPRZivmxII1cZ9vF/sFtQBhEH8ZoNEaWTZAmKbYnW0gTBYbrwFkygVYaml3u6Dw/hF3MwFIAyZYLLuUMCSewMocgc6tJwd7dXfjccECeF5gvFpjNjrC32MPB4Rz7h3vY298FkSBLM1CiS3d0faOvZpAosLe3/5137tz7K1evbt95BA//xLQBzkDJh88fAfKzgPlZEcAYTInUc0T0GUT0XwD0VsX0ibrcExQoigXm80NYK7jhQ1aINdIkgdbuL1EKSvnFaSJIdQalcoBuQ+kUitjFlFnAIneTmWAYK7CmwGw+w2wxR1EUmC/myAu3TEIphVGW1QJBw2a91RKB2CFg71lrflAp/O+AfYcbPB5+3NlpaAOcwVNQ6QAABwDeJWLeJcLf53aDlo9k1q8F6NMA+TiA3qyV/hgKW8XDxxOYHLN87lUmv4SZubJnKMzBSM1wtyLl7H+cBJ2JwKyglEKWKIRVoeXW68F3gBgILhrCWvxHwPwYkfwdwN5ykdfH7wA9JNoA51xSPDLLe0Tse4j4X4uEKGJ6C0BvIqLPA+iNRPQ2Ir6ilIIIoHVS1RSkQ7yqwNWLakKm6v7x4jInTPwUp1TOtnB9NUcjsNb+O0B+BsA/NwbvYPYbWeH8gCWmDXAuBEVzMM7Z8BuA/Ia1+Kf+xDYRPQfQ2wB8LBFtAfQEgI8i4jf4kIPaiB9izcoI//KUjzAIkQE1t7I7LyJGRP4DIL8FyC8A+PfG4N1E1gW3EuG8AibQBjgXkmrqHQDsAXgnYN8JVBE2XkJcA/g6gOcA+UiAx0R4XASvASglF4KgRHAZALnQft4DZF9EUiLMRORlEXoXkbwEyKsAXgHwwbCVJMq9iM43WGKiB51/akMbuoh0oVLgbmhDD4s2wNnQhk5BG+BsaEOnoA1wNrShU9AGOBva0CloA5wNbegUtAHOhjZ0CtoAZ0MbOgVtgLOhDZ2CNsDZ0IZOQRvgbGhDp6ANcDa0oVPQBjgb2tApaAOcDW3oFLQBzoY2dAraAGdDGzoFbYCzoQ2dgjbA2dCGTkEb4GxoQ6egDXA2tKFT0AY4G9rQKWgDnA1t6BS0Ac6GNnQK2gBnQxs6BW2As6ENnYL+/5DOx1HDQH/8AAAAAElFTkSuQmCC',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAGmCAYAAAA0z7tHAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAg3aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMTItMDJUMTA6MjM6MTArMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMTItMDJUMTA6MjM6MTArMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTEyLTAyVDEwOjIzOjEwKzAzOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmZjMDdlNzc1LWZkODAtNzg0Zi1iZTMwLTU0ZDk3YWQwZjExYSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjdiN2FmNzY1LWNiM2UtZDc0MS05ZmI5LTNlNTM3M2NjZDk1YyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmQzZjRjMjFhLTczOTEtMzQ0MC04MjNlLWJjZmViYzQ5N2VhZiIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmQzZjRjMjFhLTczOTEtMzQ0MC04MjNlLWJjZmViYzQ5N2VhZiIgc3RFdnQ6d2hlbj0iMjAxOS0xMi0wMlQxMDoyMzoxMCswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmYzA3ZTc3NS1mZDgwLTc4NGYtYmUzMC01NGQ5N2FkMGYxMWEiIHN0RXZ0OndoZW49IjIwMTktMTItMDJUMTA6MjM6MTArMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjBiYjY3MDlkLTEyN2ItMTFlYS05MmE0LWFhYTZiOGNmNTNlNTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxYzg1YjkzYy0xMjdiLTExZWEtOTJhNC1hYWE2YjhjZjUzZTU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MmE5NjA4ZWItMTI3Yi0xMWVhLTkyYTQtYWFhNmI4Y2Y1M2U1PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjU2NzEyYzY1LTEyN2EtMTFlYS05MmE0LWFhYTZiOGNmNTNlNTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiNWZjNjViZi0xMjdhLTExZWEtOTJhNC1hYWE2YjhjZjUzZTU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDMzM2E1M2QtMTI3YS0xMWVhLTkyYTQtYWFhNmI4Y2Y1M2U1PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmY3YmEyYjAyLTEyN2EtMTFlYS05MmE0LWFhYTZiOGNmNTNlNTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvEO7n8AAJqtSURBVHic7P15vCXJVR+If8+JXO7yttq7q7p6UbfUaiGBJIQEAiHAEiAwYAxG+McMZrAx9mAwtsGMMR6wPdjGGDwCLxhjA7YBg41sDAg0MjtICCyQkEBSL+pNvdT6qt52l8yI8/sjIjIjl3vfe9WvqrLqvlOfW+/ezMjIyMjzjbPEiRMkItgPPfStP7+v8jeSjAiyXPDqe1dxdJjgPY9dxltecRJ//Mwm7j8xwF1HBxhP9c1u5kxSTMiNHPuT57afH+cmknyCC5evvm87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',
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAGmCAYAAAA0z7tHAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAg3aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMTItMDJUMTA6MjM6MTYrMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMTItMDJUMTA6MjM6MTYrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTEyLTAyVDEwOjIzOjE2KzAzOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmEyMGM3YWMxLWY3OTktZTI0NS1iZTUzLWExZWYyZjQxNGEwMyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE0YTliNjFjLWU0ODYtMjc0OS05YzNlLTRiYzEwZjQ3MWI5MCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmRlZTcyZTQ5LTE0MTMtZWU0Zi1hYThmLTdiMmE1ZjMwNGUxZCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmRlZTcyZTQ5LTE0MTMtZWU0Zi1hYThmLTdiMmE1ZjMwNGUxZCIgc3RFdnQ6d2hlbj0iMjAxOS0xMi0wMlQxMDoyMzoxNiswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphMjBjN2FjMS1mNzk5LWUyNDUtYmU1My1hMWVmMmY0MTRhMDMiIHN0RXZ0OndoZW49IjIwMTktMTItMDJUMTA6MjM6MTYrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjBiYjY3MDlkLTEyN2ItMTFlYS05MmE0LWFhYTZiOGNmNTNlNTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxYzg1YjkzYy0xMjdiLTExZWEtOTJhNC1hYWE2YjhjZjUzZTU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MmE5NjA4ZWItMTI3Yi0xMWVhLTkyYTQtYWFhNmI4Y2Y1M2U1PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjU2NzEyYzY1LTEyN2EtMTFlYS05MmE0LWFhYTZiOGNmNTNlNTwvcmRmOmxpPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiNWZjNjViZi0xMjdhLTExZWEtOTJhNC1hYWE2YjhjZjUzZTU8L3JkZjpsaT4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDMzM2E1M2QtMTI3YS0xMWVhLTkyYTQtYWFhNmI4Y2Y1M2U1PC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmY3YmEyYjAyLTEyN2EtMTFlYS05MmE0LWFhYTZiOGNmNTNlNTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvUA8ocAAJatSURBVHic7P13vCXLVR+Kf1dVh51OmjM53Jx0pSvpKgdElkGIjAk27wcY2z+w+ZGc3sc2z+/ZPGxjsHlgG7CMTXhkLBlMFAIUUZZQuAo3x7n3Tj5xh+6uWr8/qqp3de/ufc6ZOTPTc/ZZ9+45e3dXV1V317dWrFXEzNgJ/f0jr9tR+WtJWmuoJMVtr34xesuLeOi9H8P9X/ulePqTD+LI3bfg4M0nMBoMrnc3a0lICZ2p5dOffuj5pD8MFDQunD3/sXRj8AohBEDXu4dT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'
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

        // openModal('#modal_form')


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
            $('.navbar').addClass('is--menu-open')
            $('body').css({
                overflow: 'hidden'
            })
        }

        function closeMobileMenu() {
            $('.navbar__mobile button').removeClass('is-active')
            $('.navbar__aside').removeClass('is--open')
            $('.navbar').removeClass('is--menu-open')
            $('body').css({
                overflow: 'auto'
            })
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5qcyIsImJhc2tldC5qcyIsImNoYW5nZUNvbG9yM2QuanMiLCJjb3VudGVyLmpzIiwiZHJvcGRvd24uanMiLCJtYWluLmpzIiwibW9kYWxzLmpzIiwibmF2YmFyLmpzIiwidGFicy5qcyIsInRvdG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoJCgnLmJhbm5lcicpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdmFyIGxpc3RJdGVtID0gJzxsaSBkYXRhLWlkPVwiJWlkXCI+PGEgY2xhc3M9XCJiYW5uZXJfX2Zvb3Rlcl9fbGlzdF9fYmxvY2tcIj48ZGl2IGNsYXNzPVwiYmFubmVyX19mb290ZXJfX2xpc3RfX2Jsb2NrX190aXRsZSBpcy0tdHlwZXJfZmItLW9uXCI+JXRpdGxlPC9kaXY+PGRpdiBjbGFzcz1cImJhbm5lcl9fZm9vdGVyX19saXN0X19ibG9ja19fcHJpY2UgaXMtLXR5cGVyX2ZiLS10d1wiPiVwcmljZSDigr08L2Rpdj48L2E+PC9saT4nO1xyXG4gICAgICAgICAgICB2YXIgbGlzdFRvdGFsID0gJCgnLmJhbm5lcl9fY29udGVudF9fbGlzdF9faXRlbScpO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFNsaWRlciA9IDFcclxuICAgICAgICAgICAgdmFyIGlzU2xpZGUgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGlzdFRvdGFsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAkKGxpc3RUb3RhbFtpXSkucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0aGlzUHJpY2UgPSAkKGxpc3RUb3RhbFtpXSkuZGF0YSgncHJpY2UnKVxyXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNUaXRsZSA9ICQobGlzdFRvdGFsW2ldKS5kYXRhKCduYW1lJylcclxuICAgICAgICAgICAgICAgIHZhciB0aGlzSWQgPSAkKGxpc3RUb3RhbFtpXSkuZGF0YSgnaWQnKVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBmaW5hbExpc3RJdGVtID0gbGlzdEl0ZW0ucmVwbGFjZSgnJXRpdGxlJywgdGhpc1RpdGxlKVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsTGlzdEl0ZW0gPSBmaW5hbExpc3RJdGVtLnJlcGxhY2UoJyVwcmljZScsIHRoaXNQcmljZSlcclxuICAgICAgICAgICAgICAgICAgICBmaW5hbExpc3RJdGVtID0gZmluYWxMaXN0SXRlbS5yZXBsYWNlKCclaWQnLCB0aGlzSWQpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICQoJy5iYW5uZXJfX2Zvb3Rlcl9fbGlzdCB1bCcpLmFwcGVuZChmaW5hbExpc3RJdGVtKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKGxpc3RUb3RhbFtjdXJyZW50U2xpZGVyIC0gMV0pLmFkZENsYXNzKCdpcy0tYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRTbGlkZShpZCkge1xyXG4gICAgICAgICAgICAgICAgaWYoaXNTbGlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZXIgPSBpZFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCcuYmFubmVyX19jb250ZW50X19saXN0X19pdGVtJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuYmFubmVyX19jb250ZW50X19saXN0X19pdGVtOm5vdChbZGF0YS1pZD1cIicgKyBpZCArICdcIl0pJykuYWRkQ2xhc3MoJ2lzLS1jbG9zJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmJhbm5lcl9fY29udGVudF9fbGlzdF9faXRlbVtkYXRhLWlkPVwiJyArIGlkICsgJ1wiXScpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmJhbm5lcl9fZm9vdGVyX19saXN0IGxpJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICQoJy5iYW5uZXJfX2Zvb3Rlcl9fbGlzdCBsaVtkYXRhLWlkPVwiJyArIGN1cnJlbnRTbGlkZXIgKyAnXCJdJykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUgaXMtLWNsb3MgYW5pbWF0ZWQgZmFkZUluUmlnaHQnKVxyXG4gICAgICAgICAgICAgICAgICAgICQoJy5iYW5uZXJfX2Zvb3Rlcl9fbGlzdCBsaVtkYXRhLWlkPVwiJyArIChjdXJyZW50U2xpZGVyICsgMSkgKyAnXCJdJykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUgaXMtLWNsb3MgYW5pbWF0ZWQgZmFkZUluUmlnaHQnKVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihjdXJyZW50U2xpZGVyID49ICQoJy5iYW5uZXJfX2NvbnRlbnRfX2xpc3RfX2l0ZW0nKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmJhbm5lcl9fZm9vdGVyX19saXN0IGxpW2RhdGEtaWQ9XCInICsgMSArICdcIl0nKS5hZGRDbGFzcygnaXMtLWFjdGl2ZSBhbmltYXRlZCBmYWRlSW5SaWdodCcpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuYmFubmVyX19jb250ZW50X19saXN0X19pdGVtJykucmVtb3ZlQ2xhc3MoJ2lzLS1jbG9zJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmJhbm5lcl9fZm9vdGVyX19saXN0IGxpJykucmVtb3ZlQ2xhc3MoJ2lzLS1jbG9zIGFuaW1hdGVkIGZhZGVJblJpZ2h0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2xpZGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDYwMClcclxuICAgICAgICAgICAgICAgICAgICB9LCAxNTAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRTbGlkZSgxKVxyXG5cclxuICAgICAgICAgICAgdmFyIGNhcm91c2VsVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0U2xpZGUoY3VycmVudFNsaWRlcilcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZXIrKztcclxuXHJcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50U2xpZGVyID4gJCgnLmJhbm5lcl9fY29udGVudF9fbGlzdF9faXRlbScpLmxlbmd0aCkgY3VycmVudFNsaWRlciA9IDFcclxuXHJcbiAgICAgICAgICAgIH0sIDQwMDApXHJcblxyXG4gICAgICAgICAgICAkKCcuYmFubmVyX19mb290ZXJfX25leHRfX2Jsb2NrX19pbm5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRTbGlkZShjdXJyZW50U2xpZGVyKVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlcisrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRTbGlkZXIgPiAkKCcuYmFubmVyX19jb250ZW50X19saXN0X19pdGVtJykubGVuZ3RoKSBjdXJyZW50U2xpZGVyID0gMVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJy5pcy0tZGVsLWZvcm0nKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICQoJyNmX2RlbGl2ZXJ5JykuY2hhbmdlKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgJCgnLmlzLS1kZWwtZm9ybScpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI2ZfZGVsaXZlcnktYScpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgdmFsID0gZS50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHZhbCA9PSAnZCcpIHtcclxuXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHZhbCA9PSAncycpIHtcclxuICAgICAgICAgICAgICAgIG9wZW5Nb2RhbCgnI21vZGFsX21hcCcpICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKCcuaXMtLWRlbC1mb3JtJykuc2hvdygpO1xyXG5cclxuICAgICAgICB9KSAgXHJcblxyXG4gICAgICAgIC8vIHZhciBvdXJXaWRqZXQgPSBuZXcgSVNERUtXaWRqZXQgKHtcclxuICAgICAgICAvLyAgICAgZGVmYXVsdENpdHk6ICfQnNC+0YHQutCy0LAnLFxyXG4gICAgICAgIC8vICAgICBjaXR5RnJvbTogJ9Cc0L7RgdC60LLQsCcsXHJcbiAgICAgICAgLy8gICAgIGNvdW50cnk6ICfQoNC+0YHRgdC40Y8nLFxyXG4gICAgICAgIC8vICAgICBsaW5rOiAnbW9kYWwtbWFwX19pbm5lcicsXHJcbiAgICAgICAgLy8gICAgIHBhdGg6ICdodHRwczovL3d3dy5jZGVrLnJ1L3dlYnNpdGUvZWRvc3RhdmthL3RlbXBsYXRlL3NjcmlwdHMvJyxcclxuICAgICAgICAvLyAgICAgc2VydmljZXBhdGg6ICdodHRwOi8vZnJvbnRlbmQuZG9yb2hvdmRlc2lnbi5ydS9zdmRlY29yL3NlcnZpY2UucGhwJyxcclxuICAgICAgICAvLyAgICAgaGlkZWRlbHQ6IHRydWUsXHJcbiAgICAgICAgLy8gICAgIG9uQ2hvb3NlOiBmdW5jdGlvbih3YXQpIHtcclxuICAgICAgICAvLyAgICAgICAgICQoJyNmX2RlbGl2ZXJ5LWEnKS52YWwod2F0LmNpdHlOYW1lICsgJywgJyArIHdhdC5QVlouQWRkcmVzcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAkLm1vZGFsLmNsb3NlKCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgJCgnLm1vZGFsX19waWNrZXJfX2Jsb2NrX19pbm5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgdGhpc0NvbG9yID0gJCh0aGlzKS5kYXRhKCdjb2xvcicpXHJcbiAgICAgICAgICAgIHZhciB0aGlzQ29sb3JOYW1lID0gJCh0aGlzKS5kYXRhKCdjb2xvcm5hbWUnKVxyXG5cclxuICAgICAgICAgICAgJC5tb2RhbC5jbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgJCgnLml0ZW0tYmFza2V0X19saW5lX19jb2xvciBzcGFuJykucmVtb3ZlQXR0cignY2xhc3MnKS5hZGRDbGFzcyh0aGlzQ29sb3IpXHJcbiAgICAgICAgICAgICQoJyNyYWwtY29sb3InKS52YWwodGhpc0NvbG9yTmFtZSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgY29sb3JzID0gW1xyXG4gICAgICAgICAgICAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNNEFBQUdtQ0FZQUFBQTB6N3RIQUFBQk4ybERRMUJCWkc5aVpTQlNSMElnS0RFNU9UZ3BBQUFva1pXUHYwckRVQlNIdnh0RnhhRldDT0xnY0NkUlVHelZ3WXhKVzRvZ1dLdERrcTFKUTVWaUVtNnVmL29Ram00ZFhOeDlBaWRId1VIeENYd0R4YW1EUTRRTUJZdmY5SjNmT1J6T0FhTmkxNTJHVVlieldLdDIwNUd1NTh2WkYyYVlBb0JPbUtWMnEzVUFFQ2R4eEJqZjd3aUExMDI3N2pURyszOHlINlpLQXlOZ3V4dGxJWWdLMEwvU3FRWXhCTXlnbjJvUUQ0Q3BUdG8xRUU5QXFaZjdHMUFLY3Y4QVNzcjFmQkJmZ05selBSK01PY0FNY2w4QlRCMWRhNEJha2c3VVdlOVV5NnBsV2RMdUprRWtqd2VaanM0enVSK0hpVW9UMWRGUkY4anZBMkF4SDJ3M0hibFd0YXk5OVgvK1BSSFg4MlZ1bjBjSVFDdzlGMWxCZUtFdWYxVVlPNVByWXNkd0dRN3ZZWHBVWkxzM2NMY0JDN2RGdGxxRjhoWThEbjhBd01aUC9mTlRQOGdBQUFBSmNFaFpjd0FBQ3hNQUFBc1RBUUNhbkJnQUFBZzNhVlJZZEZoTlREcGpiMjB1WVdSdlltVXVlRzF3QUFBQUFBQThQM2h3WVdOclpYUWdZbVZuYVc0OUl1Kzd2eUlnYVdROUlsYzFUVEJOY0VObGFHbEllbkpsVTNwT1ZHTjZhMk01WkNJL1BpQThlRHA0YlhCdFpYUmhJSGh0Ykc1ek9uZzlJbUZrYjJKbE9tNXpPbTFsZEdFdklpQjRPbmh0Y0hSclBTSkJaRzlpWlNCWVRWQWdRMjl5WlNBMUxqWXRZekUwTWlBM09TNHhOakE1TWpRc0lESXdNVGN2TURjdk1UTXRNREU2TURZNk16a2dJQ0FnSUNBZ0lDSStJRHh5WkdZNlVrUkdJSGh0Ykc1ek9uSmtaajBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeUkrSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNJaUlIaHRiRzV6T25odGNEMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMeUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wUlhaMFBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWRmRtVnVkQ01pSUhodGJHNXpPbkJvYjNSdmMyaHZjRDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5d2FHOTBiM05vYjNBdk1TNHdMeUlnZUcxc2JuTTZaR005SW1oMGRIQTZMeTl3ZFhKc0xtOXlaeTlrWXk5bGJHVnRaVzUwY3k4eExqRXZJaUI0YlhBNlEzSmxZWFJ2Y2xSdmIydzlJa0ZrYjJKbElGQm9iM1J2YzJodmNDQkRReUF5TURFNElDaFhhVzVrYjNkektTSWdlRzF3T2tOeVpXRjBaVVJoZEdVOUlqSXdNVGt0TVRJdE1ESlVNVEE2TWpJNk1qRXJNRE02TURBaUlIaHRjRHBOWlhSaFpHRjBZVVJoZEdVOUlqSXdNVGt0TVRJdE1ESlVNVEE2TWpJNk1qRXJNRE02TURBaUlIaHRjRHBOYjJScFpubEVZWFJsUFNJeU1ERTVMVEV5TFRBeVZERXdPakl5T2pJeEt6QXpPakF3SWlCNGJYQk5UVHBKYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2pka1ptSXhOVE15TFRsbU1HUXROak0wWmkwNFptRmpMV001TldReE1qazVNREJrTkNJZ2VHMXdUVTA2Ukc5amRXMWxiblJKUkQwaVlXUnZZbVU2Wkc5amFXUTZjR2h2ZEc5emFHOXdPbVk1TkdFNE0yWTNMV1l6TjJJdE4yRTBOeTA0TVRRMExXSXpNRGMwWm1JeVpqYzFNeUlnZUcxd1RVMDZUM0pwWjJsdVlXeEViMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPbUppT1dGaVptSmlMV1UyTWprdE1EVTBNaTFoTXpaa0xXSXdNamRtTURJNE1UYzFaU0lnY0dodmRHOXphRzl3T2tOdmJHOXlUVzlrWlQwaU15SWdaR002Wm05eWJXRjBQU0pwYldGblpTOXdibWNpUGlBOGVHMXdUVTA2U0dsemRHOXllVDRnUEhKa1pqcFRaWEUrSUR4eVpHWTZiR2tnYzNSRmRuUTZZV04wYVc5dVBTSmpjbVZoZEdWa0lpQnpkRVYyZERwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09tSmlPV0ZpWm1KaUxXVTJNamt0TURVME1pMWhNelprTFdJd01qZG1NREk0TVRjMVpTSWdjM1JGZG5RNmQyaGxiajBpTWpBeE9TMHhNaTB3TWxReE1Eb3lNam95TVNzd016b3dNQ0lnYzNSRmRuUTZjMjltZEhkaGNtVkJaMlZ1ZEQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElESXdNVGdnS0ZkcGJtUnZkM01wSWk4K0lEeHlaR1k2YkdrZ2MzUkZkblE2WVdOMGFXOXVQU0p6WVhabFpDSWdjM1JGZG5RNmFXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEbzNaR1ppTVRVek1pMDVaakJrTFRZek5HWXRPR1poWXkxak9UVmtNVEk1T1RBd1pEUWlJSE4wUlhaME9uZG9aVzQ5SWpJd01Ua3RNVEl0TURKVU1UQTZNakk2TWpFck1ETTZNREFpSUhOMFJYWjBPbk52Wm5SM1lYSmxRV2RsYm5ROUlrRmtiMkpsSUZCb2IzUnZjMmh2Y0NCRFF5QXlNREU0SUNoWGFXNWtiM2R6S1NJZ2MzUkZkblE2WTJoaGJtZGxaRDBpTHlJdlBpQThMM0prWmpwVFpYRStJRHd2ZUcxd1RVMDZTR2x6ZEc5eWVUNGdQSEJvYjNSdmMyaHZjRHBFYjJOMWJXVnVkRUZ1WTJWemRHOXljejRnUEhKa1pqcENZV2MrSUR4eVpHWTZiR2srWVdSdlltVTZaRzlqYVdRNmNHaHZkRzl6YUc5d09qQmlZalkzTURsa0xURXlOMkl0TVRGbFlTMDVNbUUwTFdGaFlUWmlPR05tTlRObE5Ud3ZjbVJtT214cFBpQThjbVJtT214cFBtRmtiMkpsT21SdlkybGtPbkJvYjNSdmMyaHZjRG94WXpnMVlqa3pZeTB4TWpkaUxURXhaV0V0T1RKaE5DMWhZV0UyWWpoalpqVXpaVFU4TDNKa1pqcHNhVDRnUEhKa1pqcHNhVDVoWkc5aVpUcGtiMk5wWkRwd2FHOTBiM05vYjNBNk1tRTVOakE0WldJdE1USTNZaTB4TVdWaExUa3lZVFF0WVdGaE5tSTRZMlkxTTJVMVBDOXlaR1k2YkdrK0lEeHlaR1k2YkdrK1lXUnZZbVU2Wkc5amFXUTZjR2h2ZEc5emFHOXdPalUyTnpFeVl6WTFMVEV5TjJFdE1URmxZUzA1TW1FMExXRmhZVFppT0dObU5UTmxOVHd2Y21SbU9teHBQaUE4Y21SbU9teHBQbUZrYjJKbE9tUnZZMmxrT25Cb2IzUnZjMmh2Y0RwaU5XWmpOalZpWmkweE1qZGhMVEV4WldFdE9USmhOQzFoWVdFMllqaGpaalV6WlRVOEwzSmtaanBzYVQ0Z1BISmtaanBzYVQ1aFpHOWlaVHBrYjJOcFpEcHdhRzkwYjNOb2IzQTZaRE16TTJFMU0yUXRNVEkzWVMweE1XVmhMVGt5WVRRdFlXRmhObUk0WTJZMU0yVTFQQzl5WkdZNmJHaytJRHh5WkdZNmJHaytZV1J2WW1VNlpHOWphV1E2Y0dodmRHOXphRzl3T21ZM1ltRXlZakF5TFRFeU4yRXRNVEZsWVMwNU1tRTBMV0ZoWVRaaU9HTm1OVE5sTlR3dmNtUm1PbXhwUGlBOEwzSmtaanBDWVdjK0lEd3ZjR2h2ZEc5emFHOXdPa1J2WTNWdFpXNTBRVzVqWlhOMGIzSnpQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QdXcxWGg4QUFMNnlTVVJCVkhpYzdQMTVtQzNKZFI4Ry9zNkp6THhMN1c5ZmVrYzMxaVpBRUFEQlZTUXhsa2lRcGlTS0drc2F5eHFhdEQ5U24wWWtaOGIyZkNQTDQvbkcxb3dzeXVLSXNqN1J0aVJLSGt1VU5EWnBqV2hRSWtTQUN3aHdFY0FHaUtVM29OSGI2KzYzMXF2MTNzeU1PUE5IeEltSXZGWFYzYTlScjErK3VuWDZlMTMzNXMwbElqSitaNHR6VHBDSTRGYm82Yi93QTdkMC9wdEs0aUJ0QzN2dlcyR1dsbEU4ODBYUXU3OEowMmUvRERwN0VUaDVGcGhPN25RckR5WTJnR3RQOHFWblh5NXNVeng5WXhPLzhjV25QMzJod3ZzSFpRRjNhNi9xVGFYdHh1S1JsUkhldldqd0wyVVZhL2MraVBhRnIrQXQ5VTE4b1ZyREJJeHo3VGJXVDk2REU1TU5QTGZiNHVYMW0yaTV3QWNmdkFleWZnVy84WlVYOGQxbkYvSCtFMlBjcU8yZDdoSUE0T0cvL1l2N0hpL2U1SGE4NlNURUFCSGNwV2ZoMXErQlhEOWV5RUVrZ3FJeUJHR0Q3YWJGeXFCYyt0NTdsbEVZUnR0ajVCQVJBTUhPN2k2RTczUnJiajhkZWVEQU9VQUU1YjBQZ1U2Y2hUVFRPOTJpQTRuWVFOcld5b3RmQnBvYUpUT0UwS3pYTGFyQzlCbzRBbURBQkhPbkcvSW0wZEVIRG51Slk1OTlDcmp5RXRCbmlTT0FFSTI0TUVSRkFRSmhwMjdraGEwcHlyS0F2VVcxK3MyazJnbk9EZ3VjTTNTbm0vS20wTkVIVHBoczVYZ0J0TFFNMlBZT04ralZTWWlOcTZkd2JZdUNDUUpxMStzR2xYTzl0bkYyVzRlbGdzQUZlL0Z6eE9ub0E0YzhCNVI2Q3Buc0FyYlBFc2RCaXFvUVlqaHhxQml3Yk5ySGRoeEdoZlI2UHQ2b0hjeEE4SzRSTUE4eVp6NkFRd1Q3d2xjZ3pDRHFzZVhxTE1TVUEzUGZXOGh5QVFKUVd5dFBYdHZFcUN4NlBTRmZualI0WUFCVUo1YUFmZ3YxUTZHakQ1eEFWRmFnb2tDdithRTRFUEYxaUV3Y1pPeEFHRENaaDBZR283SkFuMlhPc2hHY0tobE5mNXQ0cURRM3dGSEowMnZnZ0FDaTJuOGlXQkVNRE1zOXEyTU1xeEt1eDg2QjdkYmgvTGhDYmQyZGJzcWJRdk1Ebkx1SFdBUW9tTkFJTUdRYXZHZHRBWU9lZTlXc0FBdUdNWFVOcE0rODZaRG9HRGo5bzRvSWhwZ2hJbWljbzlvSnlFbXYxM0ZhQVFZc3ZaYm5oMG5Id09rZkRVQWdFWUVoUW0ybGZYNTdpa0ZoWVh0czQweGFoM3NYQmxnYjByRTcrcGp1Q0ExRVFJWUlBOE5vUlBETTFoVERzcyt3QVRacWkzRmg4UFpSTlJkUzV4ZzQvYU1OQUE0QW5BZ0tJbnRxVUdKWUZyMTJEZ3lac1ZpYVh0dGhoMG56QXh4eElkeW14K3M0NGdEQ0NrUktKNExhQ1VZRkY0OHNseGdVQmRvZXo4bFdCR3VWUWVQc3NYUGd5SkFJVUE2QXF1cTMvaTBDRUYwRzhZWnpzZ29BSlRPUEMwWlY5SnViV3hGVXpIQjlqZ1U4UkpvUDRCQUZpZVB1QnVDc0UySHFJRmlwQ2x5djdjWi8vK1Ixakt2cVRyZnVWZW5xcE1GM25sdkdENTVmQk0wQmR1WURPQURRMUVGVjY3RWVJUTRnWGhTUkJjT01YZXV3WU9qOGh5K2VXQnlXeFpidE1laW4xdUg4dU1TMnRlaXhZRHcwT3ZyQUVRR2NnNnljaEl5WCtwMVc0R21ibWJkWjNPS09kUmdYdlBJZDUxYWtLZ3lhSHMvSWdnaFRhM0ZqYXh2emtKUno5SUVUUW0xb09na3FXMzhuSHdTQXVFYUs4cW9VNWRtS0dVUjBkYjF1dHN1ZUw0QUNnQ0hBVUk4bCtpSFMwUWNPNEtPT0NYRFZzTitwMCtML1I4UWI0aHdJUU9OazJSQ054Z1h2MWozVzFZaThFandIZ2RFQTVnVTR6RURiQXJ2Yi9aWTRnTGR6aHVOQ2lERXFERFpiTy82dHl4dWoxZUZndDgrcVdtTUZLeFhqNFNHRDUwRHF6QWR3bkFPcUlXUjVEV2g3TEhGQzRvQmhJM0FXRlJPWWVQc0w2MXZyaTFYVGE0ZmdUdXR3WVZUaWtlRUMrT2pqWms2QVl3eG9zb1B5ZWdQcDgrcWNDQWdPT0hXK2txckNyclVvaUJhLzdmVHlxZFZSZGJucHNZMWpSVEEyREJIWDYvV213Nkw1QUk2MWtPRUlidVZrNzJzT0FBSlRsQTJjUldNZENFS25oeFd0RFN0TVhiOXpYVW9HcEtsN3J3MGZCczBIY0p3RGloSXlXZ1RhK2s2MzVqV0lBRUlESjZpTUFZamFTN3YxZEZjSWpmUVhPTllKeGdYalFvRmpWZTNJVURVQVhYa0JabXNkdlk5VkV3YzVkLzhDeG90b25RTUQ1c0dsWVhWaVdHSGFZMVVOOE81b081MzB1aHJQWWRGOEFHZTZDNXc0QTV5N0QyaWFPOTJhVnljbXNHMG5kanFGZ0ZBWXJzWUZqMFlGZzNzOEl6VXBmUnY5am1vNkxKb1A0TEFCSmp1UXJaczlMdy9sL3lkVlpkZ3dGa3JHVG10di9QMG5YM2xoWEpXOW5wQzdyY1dGY1lYdk83dUFjZzUwdGZrQWpqRmU2dHk4N3UyZHZwSUFnQU5XVGhvTWh0aHBMQXl3K01IVFM2ZVdCOVVyYlkrdDd0WUpGZ3VmN3QzbnZLSERvdmtBVHR1QUZwWmdUbCtBOU5tckpnQXhJTVMxcTJzMHptRm96T0kzblZrNGUySll2VExwY2VRQUU4R0p3K1dOTGZTNG1ZZEc4d0VjVTBMV3I4SzU1M3V2Z0V2YmdGWk9DQzh1b1dCR0kzTDljemQybmxrZU5HaDZMQ3lkQ0VhR2NZSjY3WDQ1TkpvVDRCaWdtVUpzZzk2LzFtWUtHaTFNd2F1b21HRUI5OVRHeEMxVkZqMjJ6akMxRGljSEJVNHVGY2NoTjBlR1JPRFhSeGk5enNjQmRIZUZaOFRoTzZiV3drQVczckU4UExFNnJMYjdIS3ZtZlBGRWlMVEhOczZSSVJIdldhc0d2VmZWUUFRWUErY3NSb2JSQ0YzL2g4OWNlMzVRK20wLytrcWJqY1dEaXdQOHlIMUxLSTY5YWtlSW1DRmx6MnNPQUw2ZGJDRGlNSFdDY1dGVy8zY1BucnF3TkNndnRUMjJjWHlzR2tHa1JaKzlmNGRGOHdFY1l1OVoyOTVBNzFXMXBnYU5GaXd2cnFDMkRvWlF2bU5sT0Z5dHlsNUhEdmlkREFYcjIrMXg1TURSSVFrcVVIbW5HL0xhSkFKaTc4QmdJclRPMlp1MXJVR011dWN6VWpkajZ6bHJPaFNhRCtDMERUQmVoSnk1ZUJkRVJ3TkN2TTV0cll1SmhvQitsN2laUTVvTDRBaUN3Q0Y0cjFXUGlVUkFSVkZZYTJHWUlRS1MrV0RpZHhYTkJYRFF0cURCQ01XcGM1QSt4Nm9oMUJOcEdpZlhyMEpFd0VRdElIM1BoWmc3bWcvZ01BRk5pM1pueDZ0dGZTWWlrRzBkTWNHS0F4R0llcjMvNG56U2ZBQkhCREFHUEJ3QnR0OWRKaUpJUFFVbU95aU5nU0dxR0RRMlJPajdUdWlHcE5mUkRZZEovWjVGaDBSa0ROek9EdHo2dGJ2Q09jQUVFUHVxZmc3WTJtN3QxY0tZWG52VkJJS1NhVDRtRk9ZRU9BQUJUaUJ0ZTFjQVIxalR3Z1JFWkp5Z2RKQmViNTdyMFAvS1c0ZEpjd0ljK0huSURNaGRZUzRJRVlHSklVNktwWUtyNWFMZkVnY0FtQVIxLy9uU29kRDhBRWZFUzV1ZWU5VUFBWXd4UkJRNHVGZ0xxVnVSM29leXpFSEo2RWp6QVJ3MjNwdTJ2ZEh2REZEQUY0VWZMeFl5V2dBZ0tJd3BSb2JINDRKUjlEaER6R2NTQ0xidmRFUGVKSm9MNEloclFkVVFXRDNsUytIMm1iem5yQ2JuRjBDbnJXMmYzblNUcGJyZkVrY0xFcDRtQmRIUnBya0FqbmNPT0ZCVDN4V3FHakdYS1B5ckVaRk5nQzdmNFVZZDB3ek5CWENvcUNDN1c4QUxYMGJ2bzFmYUJsaGF1WUp6OTZHMkRvUENMRDI4VkYxWUhWWmZ2UnQySzlqYWFlZkN1ellYd0lHemdER1FwYlZ3b01kdjFqcGdPSHlDNEVBRU1OTjRZckc4MDdyZWU5WDZ2a0I3bURRZndMR3QzenozOUlYZ0hPanhCQ1FDbk4yR3RXQWlHS0xwYXNXYksxVy8zZEc2OG5SOU9oL3JPZk1CSEdiQVdkRE9waTh6MjJjU0FiRVpvUnFnWk1LMGRmSWJsemRsV0pib2M4dXRFNHdLd3RzR2hMSTQrcUpuVG9CamZPbmI2M2VCalcxYllMdzR3T2dzQm9ZeEVReWYyV2tlT1RmbXIvYTVXRWZqQkF1VzhVaGwrbDVINkZCb1BvRGpIRkFZWUdrMTZCSDluWUJ3RGxKVzIrSWNXdWVESmo5OGZybjgraE1MdU5uam9nTmVWUk5jM2RyR3hBb1c3M1NEYmpQTkIzQ1l2QnQ2ZDZ2WG1BSGdKYzVvdk1pTFN5QUF6anBjblRaYmwzWWJiUFlZT0lEQUVJRUZNSE1nY3VZRU9NWURaL05tLzFmbm1ob2d1Z2hpVkVXQjBqQTJHanU2MmxqczlCZzRUb0NLQ2F2by94QWZCczBIY0NRVTZ5Z0s5SDRkeDllQTJ4QklMR0ErS3JoZU5OenJsb3NBQlFQVUhudlZqdW5PMFNrR29RbFJEbHRXNnN1VEZwTWV1Nk85eEFIT01ZNUw0QjdUblNFQ0xCRlFHQWFCVUJHV1JnVkRiSDlWTlFtcUdzVDJPbS9vc09nWU9EMGtBZGlyT3dRTHdkbUJHVCt5V09GbWo3Y3JJUGg4bk8yZDVuaWJqMk82WTJRQm40N01JRFFDdTkwNjdQWlk0Z0ErNUNhVXR6L3lOQWVPdzd1U0dBQUdoVThOcTYydGFRN3NocnVKamlWT1Aybk5RZUFFTU56LzZqYnpTTWNTcDRja0lyc1FnRUVnSDYvUE1nOCszcnVJNWt2aTNBMlR6N2Z4c3E5eEF6VFd3WW5Rc2FyV0w1b2Y0QkFCNWk1WUFJV0FqTm55RVhXQ3lqQU15ZEt4eE9rWHpRZHd4QUhFa01Ib1RyZmt0Y2tXUUZGdVFBU0dLZVRrQ0RINWtMdStFc0Y3MWZxZW1INVlOQi9Bb1pDUE05bEc3eVZPMndCY1hDVDJ2dDNXT1d4WmNWdXRZTHZ0dDlReEJKVG8vUWdmQ3MwSGNFVDhGb0dEOFoxdXlXdFRVUUpsVlVNRUVJRVZZTDF4eGNRSmRuc2NjaVB3d0ZtUzR5RFBvME1hNUdsTS94MEVZZ0FtSTA1QVJHRERPRGZBNnR1WEtseXYrNjBJR1FKdWJOWG9jUkQzb2RGOEFNY1l2MGZPeGpYMDNnUGYxSUNzTGNyYUtSaG1uQmlVK09qTFZ5Ny85cldkWGtlQXRTSXdJSHo0OUJCTEN6MGY0ME9nK1FCT2xEaDNnVmN0cEJVd2ZFYWxDRkF5dFFORGNEMXV1eEdCZ1phS1AvbzBIOEM1KzJqTngzZ1NOcG9XSHp3eFh2ejJjeXU0Y1Jlb2F0UGRYV3kzRHNNNzNaamJUTWZBNlJzUkFiYTlKTTZCbVZFYXhrN3I3STNhWXFQcEwzRFVPVkJKdjkzbWgwWEh3T2tuYlRNUm5CTllKMWdvRGErVXB2ZCtEVU5BZlp3QmVnVHBibmlqc1FxUGdBZ1lsd1hXcDVQSk0xdFQ3UFE0clVBbHpocGtMb0pTNXdzNHBnamJPdC9waHJ3S0VRQTJWNXdJbUJnT3dNbUJXWHBvb2VwMWVTakFBMmV5YTlIemRkcERvZmtDamxLdk9TSUJvRll6d2dvbXJFK2NlWGEzNlhXVkc1VTRLeUtZZzBLZWN3WWMyd0JDL1FaTzJ3SkZXY0RYalFhSjRPcTB2ZkhzZHQzcjJ0RU9ma2UyOFFBd2N4QTZNRi9Bd1YydzY1RnZIZ09laTArZDRMNXhNZnJBaVZHdmF3NEFJWFc2bnZZYTRJZEY4d0djc0FBcTQ2V3dnZTZkYnRDcmtMTkFXVFhxeUNpTndZak1ZR1FNZW8wYkg4V04zYnJmdzN0WU5CL0FDVVRpK3IrdnVMTVFjU0lRRUFTandtQmpWNlpmM2E3dmlpRFBGWm1QZlhMbUF6aEVIaXpiRytpM2dRTWZVemRhQU5aT1I2Mnlkc0xXT2ZUWUd3Mkh0Q3ZiUE5COEFFZWNWOVZPblBGMXBQc3NjVVFBWTJxSVg4ZHBSZEMyZHFFVjlIcnpYQkhBUVZDVE82N2tlZFNvdjlNdUp3R0F3cXRxaExFaC9NNk5uY0dYMW5kaHVOOVJ4eHVOeGZlY0dtQmwwZHdsWS8zR2FUNkFFNXdEVkEzOUltaWZkMlh6YmJVVVBsNmZ0bmovaWZIRlAzUm1xZmNMb0V5QWFhYjRSTjFpN2JWUHY2dHBQb0JESWRpOWJUeG9YSThub0FqSUdKR2lCSkZnb1RDNDNyajJzWnNUVEh2Y2JBQm9SUEJRNlRDcytpMFpENFBtQXpqd1lUYlMxSUF6dnJSK1gwa2NJQ1ZKV0VnY0ZBYTdUbDdhdGE3M29TeTFFOWhDZXI5VWRoZzBKOEFCSUFBUis4SWQzR1BXTFF3Sk00K0pjS051OFk2bHdjbnZ2MzhOYmE4WGNvRENFRjVaMzhSanRjVzVPOTJZMjB6ekF4eksva20vV1NLRnFyY0NZR3dJejY5UDIzLzEzRG9tUGZhcUFVRHJCUGVWZ3VVRmM2ZWJjdHRwZm9BRCtQMDFRL1dZM3BKekFIbGxrdUIzYzI2ZHc0bUJ3VTdQOTg5d0VGU3dzSDBlMzBPaStRQ08rR2tvbzBYdlZldXpjOERybE03bjR4QWFLeGd5eVpsaGlmV2VxMnBFZ3FweHg4QTVPaVNlZlJlbC8rZjZtNEljZEVrSEFheDFHSllHdzBGVnRVNzZ2OU9aM0MxclpWODd6UWR3bUFGeDRHc3ZlK2RBbjErdnRjQmdPTVNKTXhBaUdHYU1DMk9XUzlQN3lHN0RRT3VvMTA3THc2TDVBRTV3UjN0SjAyOTFCN2Ixb2daaG8yd0FsM1liKzltYnU1ajB2ZWtDWERRV2cvSHhPczdSSXBHN29QQ1hBTURRNnoyRVJnUUxodG9MbzdMM3RhTUJ3Y2c1dEhNZ2N1WUVPT0ZGc2kvejErc1FYbUdBaUFrVXl5TVF4RkwvRVovUjNkTE9OMDV6QXB5QWxMdkcyeVBiQUVCRU1BQjJyV3h2TmhiYlBYZEhDd1FWNURnNitzaFJQYjNUTFhodHNpMWd6RUNJUUNDZmQrZmN5WEhCc0gyM3owQW9oZTRlL3ZRMTBId0JwNnpRYnowTlBsK29yTmpYalJZc0ZnYlBUcHAzZk96bG03QTlqM2pZdFJidlhqQVluZWJlRC9QWFN2TUJIR2NCWnJpVDU0R2k1MEdlZnVGekI4NkJES0d4RnRjYk8xd2NWcjEzUnp0TkE1MERtZy9nRVB0dy9lMmIvVi9IY1E0b0tzaktLa0NFbTQzRkE2TnkrT2NmUG8zTnh2YTU1U2lac0xXemc0L1VMVTcxdWFHSFFITUNIRjl6Z0xiVzc0NjZhcU9GSVZiV1lBVVlHSU1iVG5hZnVMblQrM1VjZ1dCa1c1U0Q0M1djbzBGYWMyRHRiUDkzWlJNSG1LSWhjU0FCQmdXak1LYWRPS0R1Y2JNQkw4Y3J6SWUyTmlmQUNSdExWVU9nNkgrUUp4SFgvcE9Qamg0WlhucGthWUJ0Mis5b3RaS0J5YTVEMDJzYjhuQm9Qb0REQm5BT2RPTVY5RnRQZzQ5Vkc0Nlc2TlJaQUlRaEU1N2VyU2NmZmVrbUxLalh3S210d3dPVllMeHk3RlU3R3VRc3dBUjM0dXhkSUhFQUFtM0FPWUFaVElTSnRmWGxTWU8rejhZZDYzQ1dHV1lPZHBhYUQrQ1FULzJrV0pDd3gzemJPVkJSQXN0ckFBZ1RhN0ZndUhqbnlnaE56OFAyclJPY1pJc3IxcUhxYzBNUGdlWURPSm96M1RiOW5ua0FZRnVJTVk4SWU3ZjVrQmszVzlmODlyV2QzaHZkVzYzREJ4WU5Sc2VxMmxHaExNaXo3OEFSQTdCWkJRQVJnWU9BUWVadVVIOE1VYXcyZk5ScFBvRGpCTUlHTWx6TXRncnNLWW1BaXZLVlVIc0EyNDNEYWtuOFBlZVdNT201VncwUWpGMkRUN2NPSy8xdTZOZE04d0VjQ1NYMEI4UGdHT2p4V3hXQURGc1JnUVFPYnBoNGFMai9xZE1BQ3ZRN3V1R3dhRDZBd3dSWUI5cmRDcGpwOGF0MURxZ0dBeG92UUFTWVdvZVJNZWEreFNHMm1uN0hSMWRNMk5xeGFIdnV0VHdNbWcvZ09BY1lBMWxZNmIvRUFTQ0VLVHNISnNaYVZlQVBOblozL2wrZmV4N1VjKy9BVm1QeHphc1YxaTZlT25ZT0hBa2k4cUVzelRSRVJ2Y1pPQUl5Wmt6VkFBQkJpREF5Yk81ZkhNQkp2eGRBSjlaaXVXUmNjNEtqWHBKd1BvQmpDbERkZ0s2OTFQc3FuckFOc0xDOFRLZlBBODdoNXJUQnFXR3g4SDMzbk1CMjYzb05IRU9BblU3d1hHTXg2SE5ERDRIbUF6aTZCNmdwNzNSTFhoK3h1U29pWVBqSnVGbmIrc21OWFV4NzdsVno0aGRBcStNcU4wZUVSQUJteUhDaC80c01sUVdWQTRJSUNFRHJIRVNrSEJnREovMldPRTRFQkhkWGVQKytWcG9QNEJBQnpvSjNOOUY3cTdWdGdERXVnbFpnblFVQk9ERXNuMmlkWU5wemIxVXJ3UExSRHhvQU1DL0FZZmJldE1sT3lBRHRNVFUxcUJwVVFnUW13a0poOE5qbTVJc3ZUOXJlZTlVMkdvdC8rOHdZU3l2SFd4a2VEWElXS0FySWVPbE90K1MxeVZySWNIeUp4UUVpcUszRjBQRGlhbFgwZWcwSDhQdjVsQXhNY2ZTbHpud0FSd0NBUXZibm5XN01heE14TWNQYkREdXR3MzBMMWVvSFR5OWhxK2VWUEswNG5ER0NWMXFIeFR2ZG1OdE04d0djWU9QUWRMZi93TEV0eUppeGVzMTNyZURoeGFGODg0VTFiRSthTzl1MjE2Q0JJVnplMk1Kdk4vWVlPRWVDTkdTM3ZndVVpTGFCRElhRjdpNDFOb1NuYmt3MlAvN2lPclo3dnV0MDZ4enVLUVNMeHp1eUhSRnFHOGhnQkRsLy8xMFFja01neVBQVXRoQnhHdmMxdENLOTM3QkpSN2Juck9sUWFENkFBL2lRbTdhNUM0QURnRmk0S0dDSk1IWEFQZVBxeERlZFhNUzF1cjNUTFh0VktnaVlUbmF4YXgzR2Q3b3h0NW5tQXpoRkNhcW5vSmVlQWRCemQzUmJBNHVyWHlmbjdvRk1wN0FpR0JxZUxnNkszbS9YWGhuZ2VzMnd4MVZ1amhyZERVb0VBY0FDaGJrM01vUm5ONmJOYjcyMGpxMmU3MVpnbmNPNVFqQWVIOXM0UjR0STkydnZNUkVCUk10YUp1SDBzTVQvOHZURzgvL3JpK3NZRmYyZWtOY21EWDdzb1RXY1dpc3d1ZE9OdWMwMEg4QUphUVhVTnYyUEhHZ2J3TmxHNE0yeW00M0ZCMDh2bjMvUHlZWGViOWR1bmNNOXBlQ0phWHRzNHh3SmFodkljQkgyeEptZTd6Z05YM09BZWJkc3ZTTmdvM0Y0ejlwNDhkOTY0Q1RhU2MrZEE0Ynd5dm9tZnEreHg4QTVHcFFsc2ttLzEwSmdIVEFhbjNEczY3K05EZU9GblhyOUM2OXNZcVBuNnpnUXdaSzBHQjhYWFQ4aVJQQ3FtbTM3bjFaZ0xjaHZOQU1yZ29JRUwrMDJrOSs3dG9PbTUyMmZXb2QzTHpDRzQ1N2JrWWRBOHdFY0VZQU1wQnowWDFVekJZaDVRdUxMZHBiTXVERnRtdHE2M2tkSGJ6VXRIcXBHS1B0dVJ4NEN6UTl3akFHTkZ2d2VtejBuQVN6RXdUQmpxN0Y0KzhyNDdQdE9MZlErNUVZRVdFV0x4MXFMdXlBTy9XdWkrUUNPRnV0b203c0NPRERHZ1FvQUZrTW1QSDV6OThhbFNRUHB1Y1RaYml6K055Y0dXRnpzdDl2OE1HZytnRk9Vb0owdDBPN1QvWGRIMTFQZ3pNVUxPSDBPYUJvUWdLMm05ZFpOejRHeldiZG9iSGxYVkJyK1dtaytnTk8yd0dnTXJKM3UvUllmRUFlcWhwdHNXd2dJMTZjMTNyVXlYUHVtc3l2WWJQcmJkaUtnc1lKVGJQR2x4bUxoVGpmb050TjhBSWZJYjlnMDJia0x2R290d0dZUnd4RkVIQWFHQWFLbnJreGFUSHNjQStaQ2NaSHpRenI2NGdiekFoeGp2QXAwNDhwZG9hcEpVYTFpWlEyR0dXUEQrTFhMbTFjK2RYVWJSWTkzTEdpc3dERHc0dytkd0xEbm9VR0hRZk1CbkZBZUNtV0p1eUZXVFl6WmRjN0JpZURHdE1GM25GMWVlcytwSld6MTJLc21JakFFTEJlQzdkWmkrVTQzNkRiVGZBREhPYUNzZ0tXVlVBSzN4K1FzWUlwMXNnNEVILy9WT0VlVDFtSnErd3djWDl0ZURQV2ROUjBLelFkd0VIYWRaZ1AwdmxZTVFOVmdpNWhpeHVkVzYranF0TVdreDBHZUxraWMrOG9DM0hQdjMySFFmQUJIQkdBREdZNjlrNkRQSkFJdUt3Y1JjS2l0TmpUc1ZnWWx5aDZyYWc2KzBEb1R3ZlhkQVhNSU5CZkFvYktDMjFpSDNicUp2aXNTMHRRb0w5dy93Sm56b0dtTjNhYkZ5WUx0cVVHQlRlNHY2QVcrenJVaDIzdkg1V0hRWEFESGJxeGo0YTJQWXZUMmQ4TTEvWTRjWUNaTTE2OC8xRng2Rm5VcnFLM0RpVkV4dmpncWNjUDAyeU5vQ0tERzliNm95R0hRWEFCSHBydWdrMmRoM3ZrK1lIZm5UamZuVlltSEk4aG5mdXVDN0d5akxZY29HTGhhdS9iSjdhYlhzV3JlcTBhNDF3aUtvdDlTL1RCb0xvQlRuRHlEN2MvOEZ0WS8veG1mV3RCamNzNWhzSFp5T2p4NUJtWnpDd3RGZ1MvY3VEbDV1YmE5TG9KaHd6YXJmL3pNQ0lQaE1YQ09CTFUzcm1IcDBmZGo5RTBmZ3B2ME94dWVxd283ajM4V3plT2ZoYWxHcUl6QnpicDFPM2EzMTk2cXhnbVlnT2JVRU16OVZpa1BnK1lDT0dRTTNHUUg3ZlVyY1BYMFRqZm5WWW1MMHF1V1JRRVJ3VTdUNHVIbGtibTRPRUxUNHpnN2xUZ2p3Nml0Ty9JVDY2ajNMeEVSaUUxWXkra3hNWU9DNzg4Nlg3MlR4QUhpSUgwMnVrVzNrNUtlK3kwUGgrWUNPSFozRzROejkyRGxHNzRaYmM5VnRXSTR3UHBrQjF0UGZnNDBXdlk1ZUNBYUdrYWZGMitkRUpnQW9uNXY4SHRZTkJmQTRXcUFadjA2ZHI3NkZPeTAzOEF4WllWMjR3YW9Ha0FFbUZxTDVZTGw1S0RFZHR2ZmRSd251bzZENHdYUW8wSlVsTERiVzVoY2ZnbXUxOEFoY0dIUWJtNEtseVZjS3hBUjFNN3hkdE5pdDhleGFnb2NrYUwzdFJFT2crWUdPTEt6Q2Z2S0MzQk5qL2VZRVlFVUJXQnJZbE9nbWRhb3JjV1poV3Iwd05JSW0wMS9KWTdBeDZvVjdIcnROajhzbWd2ZzhNSXltcWMvaDhuVG4rOTN5STBJSUE3bFc5NVpETlpPdzB5dVlWd1lmT0x5eHVhbjF5ZDliamthNTRIejc5KzNqUEh4ZHUxSGc2U3RVWjI3RjlYaVV2L1RDaUNRb2hyWVpnb2l3bmJkNHN5d0t1OWZXZWoxcnROV0JBYUVpaG10a3lNL3NZNTYvd0RuSUUwTjg5QTdVRnk4SDFMWGQ3cEZCeE14aUptYVp4NWZsczExN05RTmFtdng3aFBqNmJ0T0xtR3J4M0YydXFGVXhTMGFKeGplNlFiZFpqcjZ3Q0VDRlNYcUY1OUJzM2tUMHVPMEFnSWdCR0xuREpjVm5PeWlZT0N6VnphZWZXWnowdXZneWFsMVdDa0wvT0RGUlpoajU4QlJJUUszTGFpZVFIcXM3b1NDNjBiWUdCQ2hNZ1pNaEcxcnk2SjFjRDFlSVpsWWg0SHhZenNIdUprVDRJaURxd2JBZU1rWEpld3RFVUJvcUs1cmNRNGdnZ1BoZzJlV3lhdHEvWldXVG9BQkV5cDJxSzFnZEtjYmRKdnA2QU9IQ0RBRmNQMWx5TlpHdjh0RGlRQkVBenB4ZW9paWhBMEZPeTZPcXVFamkwT3M5M2dQVUlIZkE5VFYwMTZybElkRlJ4ODRTdGIyUHFVQXpnSE1EQkUyaGpGdFcwd2JpMEZSa0FDOUxvRWI3TE81b1RrQURnSE1jRnMzL2R2dGMxMDFEeHppMVZNRVlqZ0Job2J3NmV2YlcxK2R0R2g2SERuUU9NRkN5ZmptcFFMVmNTTGJFU0JuQWVkZzN2ayswT0pxdjR1dSsrTHdKTnViaFoxT0FlZFFWQlhPTEF6TmhZSEJwTWRyVURhQW5Pa3VXQ283QkRyNndJRUFJaWhIQytDbFpVamZnUU9jYktlN0syNDZRZXQ4K01ycW9Lek9qa3RzOTdnOGxBQW9DU0NwZSszOU95dzYrc0J4QWtCUW5yOFA1dXdGU0k4VDJhZ29JRzA3YmE5ZHR1UmN3Y2JBV1l1aFdGNHFoeUQwMTZzbUVCUkVvTHRnMDd2RG9LTVBuS0lBMkdEajEzNEpxS3ArRndSM0ZpaXJVWEh5TFBGZ2lJSjNJQUFxT0x0RURvNzZhK01BZ0NHQlJiK0grTERvNkFQSCtlekowY1B2QUsrc1FYcWMwd0lJeUJROHZYNFZicm9MQWpCa3doL2NuRTZlbndyYUhyUHl4Z2tXRE9NRFN3WEtZK2ZBVVNHQzNkNkNFRUY2N0pueTRjOVV1cmFCWVFNNzJVVTFIdVBDRC81WldWaGFoSjMyVjgxc3l3cWo2UTdvRTcvUTg1eW53NkdqRHh4bUFJVDYyaXR3bXpkQlBlYmFFSUVRVDhxVlZYQlJvQlZCM1ZyUTdpWVo0M29kb0dxYUN0enNJdGJwUHVKMDlJRWozamtnMVJBWUxFQ2t6Nm9hQUdCYkJPSkVRR1VGTkRVMmZ2ZlhJY01CMmg0SHFMWWdOQVJJMjRMTG83NTE3bHdBeHdFaXFPNTVFTHg2Q3RMbldEVml3RmwyVnk2QmJJdDJNa0U1SE9MQjcvN2pXRmxhUkQzdHI4UnhaWVZxc2dQKzJEK0RuZlJYcFR3c092ckFBWG5WWWV1bTkvYjBtR3NIRzZlQUNJZ0lycW5oVElubEQzdzdsbGZYTU4zWnZ0TXRQSmhHQ3lnMnJvTisvUmNoN1RGdzduNWlCb2hnbi9vOGhMbmZJVGUyQmNyQmtPOTdDMGxab2FncXNOdkN6Y2YvUUdSbEJYV1BTMXRKTlVDMXU0VVYxNEpNZWFlYmM5dnA2QU1uRUEyR29LSkFyN2N5ZEJZb3FnRVJlOXVzR3NEVk5hYS85SStNSFJpMFBZNGNjQ0FRaWQ5cnRWcTkwODI1N1RRM3dQSFVZOUFBQUNpa0lBc1JBZlZrZ2lreHlvZmZSZFd3aEd2N0d5NGtwa0RaMXNDWGZoZm85VnJaNGREOEFDZFVrT2sxZUh5cDI0c0EySW5QYjFrYVZOaTU3NjJXbDFkNlhZWFVWZ01NSjl0WWVlTFQvVS9mT0FTYUgrRGNKVVNnRFJHSUlhSnlPRUl6ZlFVM1AvNUxzSU1LYlk4WGIxc2lqT0J3dnFsQng2cmFNZDBCR2pHQkRCRjJyUU8xYmZOMWRtTnoyWmFvZXd3Y0FhRWdBVUhROWxtcUh4SWRBNmQvNUJBMm9BMTd6clFucVcxV2lESHBjWkNuOTFVSzFuRWM1SGxNZDRhR0VHK0pEUXhqWXQzdXA2NVBMaTlXdmw1Wlg2bDFndVhTNEtFaEhaZUhPbElremtkSzkvbWxPZ2VJbEVUUXhWQU1pc0tjSHBiRlVsV2k3bkZwS3hHZ1lNRDFQNlRwVUdodWdDUGxBQ2hMOU5xclpsdGdPSzRjR3hnUk1CR1l3TTQ1NDNxNHNSUUJhQVZvbkVQckJHZEdKUWJFeDl0OEhBbnlKWmQ4a0tkS203NUdEeEFCWEl3QUNSeWM0QVR0ODl2VFpxR0gyNkNyZXJZNktHSEZ3UkROUmRvME1BZkFJZWRnaXhKbU1FUjU0Z3hzMjhEdGJvTkdpNkFvZ1hyeXNva0FrVjFxYXI4UVNvUmhVZGh4WWVvRlE3M3hWbGxmeGdGT0hBWkZnZnVXUnRpMkRxY0t3c1oyQS9SOHQ4akRvQ01QSElqQUFhQmlBTGUwaXVMQ0E2QjZBdnZWSitCdVhnY3RMb09IWXgvdWNzZUo0QUJHMjREaDIxMHl5dmVlV2hvdVZlWE9uYlJ4Q0VBam11bEpxSmpnQUZ4ckJPdlRGalVFSzJ4NmJVSWVKaDE5NENCWU5XMEQyZDBHRDBhb0huNFhpa2ZmaituamoySDMwNytKNXVVWHdTdHJ2dUtuM0dFRG5CZ29Demg0cjlwMjZ4WS9mZm5tQStjWEJ0ZW5keWhXalNIWWRyNll5RUpoY0c1Z3NGQXdHaWVvTGZ6ZW56MFIybThXelFWd0FIZzFpQWl5dXcxNzh6cXFSOStIaFVjZWhWdGV3Kzd2L2hwazg0YmZ5Y0NZQUtBN05CTkVMSXRBUUJnUVFFVmhQb25GMFpJZDNCSG5nQUJvQVp3dGdBOHZ0RGhkTXJhczlObzEvbWJRL0FCSEtRREliYXdEMDEySUNCYS8rMDlpK3VsUG9QbWRqNEZ0NDJ1dkZYZkEvbWxxdU1YVnNkei9NRXpZd1huYVdyeHZGWGg0eGNUTmM5K01GaEg4SnJnTTRPVmFjRzdBT0QwdzJLaXQzenJsVFdwSFgybitnSk9UQ0dSbkMzVG1BdHg0RWZUbys3SHdkZCtJK3FrL0FBdTgrM293eEpzRklHSUQxemFUNXNWbjRjU2lLQXVRQ000MVcvUTJNbGhIaTVFaE9QRnU0TnRwVG9nSWhnWERHTVlMRURqWFltSzUzK3RnYnlMTk4zQUFnQm5TMUpETm02RGhDT1VIdmhOTlVVRmVmZzd1eTE4QW1lSzJRNGFJSU5hQ0lKQ2lKTUFYV0NjQnlzSmdTNGpXcmVCR0svamlkb3N6Z3hMTEJkM1djbEVFd2xZTDdMYUNUU3NZYzY5M1QzM1Q2Umc0U3N4QVhjTmRld1gyeWt1Z3BWVVU3L2dHMVAveW44SnViL3JDR2JlRFFqRVJOMTcyTnRoZzdNcXo1OEdDNkpKdW0yYkZRRkFXQmE1dFc5d3pOamd4WUV4dW83T2dZR0JpZ1VucmpnR3pEeDBEWno5eURrUU1jKzVlMEhnQjFEU2d3VzNhMVZJY25MTW9UcDRHMWs1amV2bWxUWWpBRUtGZzhwVnQxbGJLbldxRXA2NXRvQ0tCd0J2bnQxUGlpUFBWZzQ5QnN6OGRBMmMvSWdJSWNKdnJRTnZBakViZTAzWTdTQVRrSE1UYWIybEEvMDVqeW05M3V4TnNFMUJiaS9mZGN4YXJKMDcrdGVlMk5yOXZwM1cvT2pEbTU4MXRuczB4Vk82WURxUmo0QnhBc25rVDVhUHZnL2xqUDRUZHh6OEhYbDRMaWMySFMxUVVzRHZiZjNUM2hhLzhjN2w1SGNWZ0NOdTJhSzJEQ0hEdmlWVmNXci94OEJOWHJqOThaZjNtajZ3TkIvK1hkeStmK2o0aXZIam9qUW5VMzFEUy90QXhjQTRncVNjb3pqK0E2YzBibUZ4NkZyeTE0UXRTT0l0RDVjY0VpSFB2TnFiMDBRSUNnQWtPRENLSDNhWUJNMlBJakoyZGJkVFR5WHRhZCtKN0RCVi9ENGU0ZXdHSm9LQlFXRENFMUZUSFl1ZEFPZ2JPUWNRR1VrL2dOdGRScnAwRXYvSUNXbXRCMVFCQ0RBRWRqZ1J5RGxJTk4yZzQ4dTd4Y0U4SkM0d2NrdHE4bjR2OVUwVU9MUnBNUUNqRmd0c0dtOFVRQS9Kck44ZFM1OVhwR0RpdlNlUlg3RzBMYXgwSWhISm55MHNLWW55dDZ6dGtMU3pUVUdnY3cxWUNUdUNjQThTRHAyQ0NNYXpydC9WaEtZMURXTFRNZU9LQjkyRHkwZ3Q0WjdzT291TnA4VnAwUEVLdmgwUUFacEFEbXFJQ2locUQ3WnNRZU1QZUYwdC9ZM29OMTFOSVVRenN5a21Jcy9ET2FiOEFTVVJ3TVhaT1BIajhjNzdtOTBid3F0aE9iZkZNdVlETHB4L0F5WmRlZ0JFSGU2eWl2U1lkQStkV2lRanRlQWxsdlFzU2dSMk1ndVI1WTJSZEN4a3Q3SkMxRUJGTkh3SUZJSG9RK2U4bEE0WUk0dmM5ZStOZGdDODlkYzBDbDJyQ2hCMFc2MTJ3WndWditMN3pSTWZBZVFORXp2cjFGekpvUm90Z2taa2RyVzloVW90QVREa2xjZkFia3FSL05tU0JGb1pCc1h6djF6YTFCK1R0bDIwSFhMZmU3VjRTME45eTd2MmtZK0M4WVNLZnF1QUVxQ3FZNjYvNHc4YUFSRjQzZE1pMmNBdkxpMjV3QXM2MjhicGc1a0FEWFZ3SXlUSEVQbkx1RmdVT3dRUGtVdXVsMXlvTERQbWNzejVrSXQxdGRBeWNyNVVJc0F2TGFJc1N4Y1lObU4wdDJPRTR4cHE5SmhrTE1VV0RDRGJKUU9PekxFVUF3NVRiUE1YckZUdmVhOWFpSW1CVENqeGVBL2NXd0prNXlOSzhuWFFNbksrVlJFRE5GTTFnalBLZU5iakpEcG9yTC9rYXRvc3JjWCtlVnlYbUtibTlNV0grcXVEVkkvWU9DcjlOeWV1Sy94RmlqS2Jic0VXSkwySUJDN2JHTUtobTg1d1NjQmgwREp4RElRTFZVL0I0ak4zaEdIVHVYZ3kzYjhMZHVBckhyeDZLVDg3Q0RSY3FXVndHV1l2a1E0dDNob05BckVWSmpDa3NKdGJDdkpiTG1CZ0x1eHZZWGo2Skw1NTdPeTYvOGpLK2Z1TkZGRGo2VzNDOEdYUU1uTU1pSWwrMzRNWVYwQi82Zm9oaHRQK2YveHBtOVJUY2NDRkdRZThoRWFBb2hWd09GWW5abnVybkltWllaekd4Z2xabzV5QS9uc0NuT28rbVc3aTJmQnBQditOYnNOVUNpeSsvTVBmSlo0ZEpQYTJUZEJjVGVlblQxRFcyemo0QWQvRkJGTk1ka0dHQWpVOWZtUDFIdnJZdHhjeEtpdG9ka1Y4QXRTSStJNU1JUkZqZTc5RUNRaUVPQzgwRUw2TENZeGNlaFZRakxPeHVIZ1Bta09sWTRodzZFU0FPWERlZzBSaTc5NzBONWZOZndlamw1eUhWWU05Q0tiVU43TkxxUUZaUGgyMFd2V1JTd0lpa0JWRUJvWFVPSXJLSDRRa0lBMXVqc0MyK2ZPRnRlSHpYWWRUV0dEUVRUSTZ6TmcrZGpvRnp1NGdJUEozQVZVTnNucjRITk5sRnViRHMxYm1zekpNVUphUW9HM0lPQ0VXanhTRnpTMHNNdlFsblFFUTZ5eTRpd0JBdExETyt1UFlRTHA5L0s4cG5Ia2ZsMnVNRnpkdEV4OEM1blVRRWFodVl0a0ZEQk94c295eEx5SENVd09NY2lBdWZMcTNpQmZBWUloOWk0d1N3enFHMTFnZVhFdS9xSTRRWUl6dkZidHZpaXhjZnhlWjRCVXR0alMzWEhJUG1OdEl4Y040a1loRTQ4b3VtMUJqRWJRdWRoWWhMNWF1Yzgyb2FFemlBeHpybnZXMWtRTjRDR2dBZVk4UHBOcG9MRCtKWlYySnJNc0hpWU5UL25lZU9BQjBENTgwa1lsQzlDMnN0akRnWWNaQzJoU1VlWW1rMVZST1Y1TFhSYUI1bUJwT3Y3eW1BRVFCREVtelhEWjRabjBiQmpPR2w1eUZZTzRiTW0wREh3SGxUS1JTQUx3cE00ZFd3WWdpZ0d1ekNPUjlwUU9nVUhoUUFoaGtpZ3NaWk5QNG5XeEZ3d3hFZXR4VmMwK0lVaTkrTy9wamVGRG9lNlRlWkNBTGpiRWlHQTZydERaVDFkS01vQzVRRm96U01nazFjTkJVUk5OWmkwclM0T2ExeGN6b0ZPL2ZLRWdFN3ptSFhDb2JIYi9GTnAyT0pjeHVKaUlDeUFqSERPQXNTQXhJc09EWW5XOUNLQlQyTWF2eXQxcFRmMjI3dm9tbHF0TmJCaWFDMURxMXphS3pGcUN6dzRLazFuRmdjb1c0dGJoYkRQL3hjSSt2V1ZOdEYwVDRuekZ0aXpBYUlRZFVBUEJ3QmJFQzZiblJNaDA3SHdEbEU0ckNBYVJhWFljVEJXYnRNTzlzWFhkTjgzWFk1K2s1WFZnK2pXdndHYTh5SlZrRE9DV1N3Q0lqQXJtL0FRWlBYZk9RQUU0R1pzRENvc0RvZTRuNnpDb2pneW03OW81OTE3WThTRitERndrNWZlbkczTnZ5OG0wNi9Xci8wM0l2RlpQY1phdXBQaVcxZkpHT2VwOEZ3RjJ4UW9adTZjRXh2bkk2QjgwWkpCT3dzV0FUa0RYZlRndDdXbXVJYjY4Lzk3dnNaOHZCa012bG1ldXlUeTdBV2RuRVZObmk3S0dSMU12bDBBWWlnTUJ6Q1pRQ3JjZEtDdUx2WnBMR1Fwb1VUUVVrQ01RWnQyOElRbVhaN1k1R0FkNEQ0SGRPTmRSOWtXZzVRYjkxRWUrWFNkU25LMzVISjdsZlhpOUhqZFcwL3lrVFBEQm1UaW9EcG5SbTl1NTZPZ2ZPNlNVRGl0eU1QZjZ1bUdIeDd6Y1hEMHJZZmFOdjJ1M2QzZCs1eGJRUDN5bU1BRWN6aUNtdzlCVXdCQTRHQjN5TXpYNjVoeWxMVFFtb0JJKzFzUnVTWGZIeW9qVVlPRUZwblF6WW9VRlFEV0NkZ0NLclJHTTc1dlhWY1BZWGQzandoZ2cranJQQjBVWUZGOEZ5RHkxdU9mcE1oL3h5UWp4Zk1MN2pSR0liNXRwVEFPb3AwREp3REtkUVpBTUJGQVFaQm1POTFvQTg1VTN6bjFzcVpEemVtT090QXdPNk9YMytCd0hBQlhsb05tNnRKbk5Ra0lkTW1lTTc4Rk0xeWIwSjRqWE5lWGZNZU52OHJoM3E0VGlURXNrbHdUWXV1QnNHU3I3dFRHb09XUWhuT29nQ0tFaUtDMWprWVo4RUViRm81YzYzRkR3NkpmcEJhYXFyZCtwTjA2ZGxmS0szOWpZRXhqdzNZWjRnZTA4RjBESnhaQ2tuL1hBMVJMSzJnSG8zZjBteHRmYzlrdlBMRGs5YStsOG1RRTRHVUJZd0k0Q3lJZldwem05VU1VTWJ0SjdtQ2hrQk12dnhTVU1FTWNaUXUvcENYUHBRM0J3U2hjRXdJZ0FjQW1HR2RBeE5Rd245V0lCWk1hQjJITmlnNC9lY3E1T1JZNTlCd1VVNm45WGZJNS83TmQyd1BodGd0K0lrVFJ2N0ZtWXIrdTlNRlBUVjF3TmFjNzRXekh4MERSOGs1RURPSzFSUGdhZ0MzdS9VbnJ2eXovLzQvbUY1NTZjUFQ3VzNRY0FRVURBNWMzb1dLTkJ6VUpWV3hpRDBvSkJqNjRpUVdUODhOY2lMQUJoV01tZEJhcDhFRHNUaUhCQW1UWHlqa3dTYmlsMElKSGxGTWZvY0RBUUQyT3o4YmhsZmhtRkRDZUFrWFl0NG8zS3NpUU5oQWVJamFDYjQ2bGJjOUE3eHRkVXIvMGRrU0gxMWkvRThBL2N1RmdwNWJOSDZIaE51OXhjamRRSE1QSEhFT1BCeURGeFpoYjF3OU9YbjI2VCt6OCtUbi9rSnovZXJiNnh2WFlFWUxNSXZMWGcxRHFpVmdOQVVnYUY4TzR0T2JrZXFpaVFDRllWODRYYnlONG9NMkplYTJlWEJRakUxTEtkU0lvTkFqUWNoQWhFSmhRaTk1bkhod0FCektTZ0VJZ2FLbENTa0tMSEVSVmU4RkJJa0lnbU5HQWNHaWVIZjRkaXY0UXUzK2NFWDR3eU9tNXV6QS9KSVYraWVuU3Y1bml3Yll0bko0eGQzdVFwcGY0RGdISGd4Um5qaU45dXJMSDNEVy9RZTdsNTcvVTVOLzl0K3R3RGxRV2FFNmZUNGdRd0NTV0xJSnlDWmVVS0ZZdkYzaVFrcUFBVVh2V01GK3YweElsaTZnY2lyY2t6bTRvVlhraEdNMklGUHpkTHpLSmFFQ2p2ZkVlUU5Ld2VoajNDU29pMHpBTktSbE14SGFFRGdxSWpBa2ZnZHArRndmSW9EQmNHSlJzcUJrUW1zRnU5YVZUMnk1SDNoeUd6OXd0dUsvOHRESS9OSkRJL08zMWdoZm1UcC9qM21qK1FOT0tDNVlucjBJdTduK2paT252L2dYZGg3LzdKOERHM0ExQUlrRlRBa1JiK3huRHE5ZzFDY3ZtTGZmay9jclNRMzkxUk14Ky92NmI5R2dOMnpnbkl0Wm5od3VGU1k0SnpGbVRWMEFJSWwya0JZUjlkTEZlOUdZQ2M1NUNXU0l3QVpvblplRUdyWkRSTERpZ2dySFFaV1VLTGtBRC9SV2k0UUV4bEFZdjYzSXBVbjc4UE1UKzVOUDdwZ2ZlK3ZZL0xlblMvTXp5d1Y5NVVaak1VLzRtUi9nQkt2ZExDN0RMQzZkM2Z6ZGovK2x6ZC81K0k5UG4vc0tpc1ZsVUZuNk9ESXgwSjJuY3p0RGdqcUYzQTdSZXdlMXpXbWFNM21uRmxOWWFnd1RPV1VNSlBrUkN3OUtFaFBlWGtuT2dtallCNG1tNnoxcVd4RUl6T3EyUnJSeFNMeVR3QVgxUzFWSGN1bGVSUDY1aHVGQmxCeC92bDBVb0M2K2xOVFkrSHk3Uzd2TjhNWGQ5aWZPRHN5UG54L3czNzEvYVA3NnlaS2Z2RHFkai9Uc3VRRU9NWU9JZVByeWMvL1o5aGMvODMrZVBQUEVFaEdqT25rR0NFYXo2QUxsak9WTFJINHk3MU90UnNHVmpKYVU3Z3drTHA1NzJpamsySGlRa0I2RUZRZm54TnN3ZWw4Z1NCcEs5NEczYzlTZ0l1T2RGcEp0TmE5NVBIQmVwVU9JcTlacW9ZWUl4bmNLRGdMckVJQXNFS2YyVlFBM0VKd1JDbWJCTU5TK3VqSnA2UGxkL0lmUFZlWS92Rks3bjNxb05IOTFhUGk2SVRyUzlkcU9kaUNUQ01pRUVtU0xTLzl1dTczMTVNN25QLzEvcjE5NFpxbGNXUU92ck1Yc3lyeUVrd1M5WHlWQ0Z5NyttRGZHRVNSUXNGT291emFqRWlHZUdQNUpzSU1VR01TVVRDbDFGQ0NCSk5RWjBLZjd2K3FlSm9RY0hhK09NVkgyVXRYalJqREVNS0hTS0ZHUVBQRDlLQXpIQlZaV0lSbWVwY0QySHNSd1Z5SVVZWTFyd01DcUFXN1VMVDUyYmZJZmYrVHE5TW50MXY0WkhneEFSZW1ybkI1Qk9yTEFVYUhoNnNrM2tTbCt0VzJhLzdHZFR0OVNqQlpnRnBjQVluQ1k5QkptS2pPSHduL0lWQmFLVWdQSUpZZXFXV0hCTWpQeTh6Ym9ST2RNNVdLb0c5b1B2d3QyQm9JTndwd1dSZFhnSjFMSlI5SFFOeDJRK0lsTm9GanRrL1g1d1ROSDVPMmRram1Dc1RBbVdsMU1PZmpVYzVjY0d2N2VGTmVEZEpBZGdJcUJaWEs0MnRpVFY2OWMrY2VmLzhJWGZuOWplL3NIeHFNaERCKzllSVFqQ0J4VmpRajE4c24vWXZQRlp6L2xwcE1QVVZqUFFNN3BkVUlxWjQycjh4UzVzNTZuUU5HSmlDQTF0QzVOVXZkeTJaS2tCcENDUVBPVUFVRnFEM09YdzZ0a1N6Sk1PVDlIbFpCMGdnUEp4VWVaVkNJQ0UwY0pwZWZtYTBVS0dtMXJFYllUaVpJUlNkcnNNOVN4TDFhOEo0N0VZWExwdWE5LzhmTFZYL2lOOWZvakFNNk1CaFgydThYZFNrY09PTDRpcGp0WnQrMy8wcFNEdit5OVhLN3o1aFV3a3NUSzN2c0VjQWdreEhCRmVNUjcrUE00M29BNHhaU0J5SHU2Z0xBMVIzUkFSNEFDWGpXS2hkVjF3cXMwQzFIU0tubHlFT3FFVGxKSnZXTVVKV25lRDQ3M1ZoVlBQWG4rZkdPOCtzWE1ZQ1JWbEdOUGt6WWJBVXRKS3NXMmlIZU1tR3FBbGhoZlh0LzY4SXZYYm54eGN2UG1Edy9LRWtWUmROVGl1NVdPRG5ERWdkc0dzcmp5cDFzblgyNDJOLzRZaVVOVmxwbm5DdDREUnRISmxxa2xxa1pSQkpKT21haks3V1B2QURsbjl4UE9TNDc0YTFUbGtvMlFuQWNjRUNHU01qMjFDZjY4cE03bHRwVkd3YkNxYjlIaGtOb1Myd1lGMG94OUZLOFBpbGxZd0xWQmV1cHhiVXhNN1JHS3owV1VlbUU5Q0VuTkJRUURJbXhzYko1ODhhV1gvdDZYcm05K1ltY3llYzk0T09nc0p0K05kQVNBUTZDMkJUbjNRTDEyOWhmclV4ZC9Ya0FyckFVcmdrb1NPNXE3a2NNQnB4d1RGRXZRUmdtakV6UXoydE1DNWw0UFhGU3BkRTFISDRwMG4xazFUajEyNGlUYUhLcGlNU2t3MDh2U051aHR0WTJGQ2R4ZmJhVXc4YU5xeGhScUZ5aXcvRDNNakhSaElObDY2RXBYRDlMTTdSRzdwdTN4OExIQnRkMkdQZCtsS0hCcC9lYTN2dkRVRTQ4OXY3WDdGK3Z4SW9yZzFic2I2YTRIRHJVMXBDai95T1QweFMvV3l5ZitPSXNET2VzbkNRWERQbE14b25hV0diWTVxVlN3NGo4cmg4OERZWkt6d0x1UGN4S1JZT3puNEVpU2lqUEVGT3JsQXFJQlRlUWxqNGtPQnk4UmkxQ0RPb0k4dGsxWC9LT1k3TnhUN1NvdE5SV2xJek9NYnJrVHpsWDEwVENqTkFhRllSaVRTUmRJa21hMEg5UFFKNGQxTGNuMk5BVlFGUVdhM1YxODZabG5mMmI5NnRYL3FRSkdWTnlkS3lKM05YQ29tVUlHNC85c2N2YmVmMlVINDVGcGFvaTFYcTJnTk9HalZSSzRKVVVlbWprR2dCaWxuRDBocVNIUkdFL09nblJNdjB1Y3BINWlJN1pCQjlwbUhOWWhTUVlnZ1pRb0JXSW05VXpEWkhTTko0R1NzejdvN3gxMURkMjhId2tpeUZBQ2hRblNoRFhLUVB1TUpJMEs1dGhmalNpSW5qNEZraVNncUlSdW5jQmEvODhWQlZnRTlTdVhmckRkM253Q0l0ODNHQTVRMHQyMVllOWRDeHhxcHBEeDBuOVZuN240L3hCaUZHM3RQVkRLaVNVMzVGWGFwQko5Q2g5RG1kOGdHTFk2MFZ6WW9pUEJMUGN4U0hUUkNsS1JkR1JTS3JOeW90ZXE0d0JBY2poRVd3WHFyczV0RVVxZ3BiQ1JMcXNhR2tCR0NUUnA4VFhZU0Jtb2xEZXdYeENPY1dzZ29BenJPZG9YRXlTY0FpckszTkR2Sk0wUXczbzY2MTdaV0FtY1Y5bkVxOGFOS1RCdG1udWJtOWQvNmNhMWEzOWp5d3p1cW4wVTdqN2dpSUNiR201eDllL1VwKy81VHdSQTRWcFFXTHVJazRNU3Qwek9BT1d3UUc1M3VHQU1xM3BEUVpvb0o5VVVBYjBxVjc4aU9ETzF4YXR2Z1ZObkM2WDUyZ3NIOWNvRWlRR2tlZWFRN0E0SlQvSVNqS01LNUFIYlZZdmlQVWduTTJMYnZkcnFlYnJSOVNPUjVGQkFaanNocFRzbzRIMmZKSDBYZ1lXQWxFbnArSElDVXk3VkJaNFJPUmZDZjV4REk0Q3BwL2o4azAvL0g1OTgrZXBIVjBvZUZKU3pxZjdTM1FVY2NhQzJXVzFXVHY1R2MrckNqOEZaR050MkpuVmNqNGdUSXVPVVNLdjVlcDRhdjV5OWRPV3luVWQzRmkzU1JOT3BxMjdwbkN2SGRaMEFYRkUzZENhUTlyTVRWT1BKMWJIb3BJaXVjYjhMTlZGS3QvYjJsMHJXM0s3S0pLWUNXYVZST09hRFAvM29GSVlqdU5STzRoekk1S1dMUVhCbEI1dE1CNWV6eVovYi9qNmN5TnVBVHZ4M1M0VGFXdXpjdlBGdnJiZnlCUXU4ZDZGSTd2KyswbDBESEhJT1pOdDcyaE9uUDkydW5mbDJhUnV3T0FqNXlhSWN6bVhxbUtwR0pPcTVTZ3VVUVBlbFJtZUJTRlRIMHJvRmRjN3RBRFRjelRtWFhOdXFqdTBEQ2xYdjh1L0lWRGhrOWtvK0FWTklUSWc0aUlLTVVCcnZTcDU5WmtkcUNsQ3dpUkkwT1NLNkZwOFRWZkY4VDVPVUpoUnNvQktobzFvR2JUQUN6QSs4SC92b29LQm9NMGxRZzMwNmd4L1BSZ0RuM0ZzK2NYWDdNLy9teHVUL2NIcGdlcjF6WFArQlErUjNlWGIyVEgzaS9DZnN5dW1IakEyZ0NSd3V0eWlVVStrNkNrRTZwY1c0ZStzNGFUSVRKWHFNUEJPVm9BSWlVMG5TQzAwMnlvSE5UeXBNZG82cWpOR2hFSThuQ1dpQyt6aUdCWWxrOXNkc1pFTzNQMzRpZDlzUU42blMvdVhQUVhjY2RmdEVkVnM3MGV1U3QxSnRKT3NFemlYUXFoSXA4QVZLY3VtUi8vV3Fvb01OMHFjUWgrdVRCai8vN1BXLzliRnIwNTg3TVN3eDVyUm0xU2ZxT1hBSVpGdEFaTGsrZWY0emJtbnRmbTVxMEl3cWxSWVgvV3puK0ZGQkVjSWc4eGthcm9OS291UjdTd2EwY2twNFo0S0UrNnByTm9YWHpOdzRYcUhxVGRmQkVCNFVLWGNaNjkwRXdjdVh4NHFSdXF3cDlsWHJzSG5PSHlRVnZJR2ZwSTFFdDdJK090a3FTZjBpOG10QlJmQ3FGWlJpMmt4SUNiZWkwUlNwUGJrcUZ4VFhLSkZVTmM0anl5bW9yTlpKQUoxREs0TEdDY1lNc0RqOHl4ZHYvTkEvZm5IN1Y2VW9jVzhsV09Sa3gvV0JldXhFcDdDWGpGMnVUMTM4TlZsY3ZWaTAwOHk5bkJ1ZzBSc1FSWUtFRjZ5Y1R5ZG1weTZ6R3RRRWtFUjIyVkhsY2hWT0VGNzZQazFOMHgxQWZpL0p3S04yVld4RGtrTGVUZ25kRm9RU1VZQVZseUlESU5IVFpYV2hNN3NtMm5YWmhJMzRGUGpJZ0xDMFQwRXNDMXhvdThzWVRSaEtYNXJIMnkvc00wTmROTXdjeERtNDJhSFBoeVY3RHpyT1hucTU2TDFVcHVYdkNMVGk4MzZHWXZGN2wyOSt5RHIza2JlZU8vVzlSYk9MQndzWGdIdm5xYjhTeDFtUXN5ZmFreGMrNVJhVzMwdjFKTGlHOTZjOHVES250RDFnNHF6SXpvdEdQSEkxSWlWMHFUcVlSeVdyYnA3c0RNUThsK2dBQUxLRjBOd0RsM0hlVEIwRVZNcGtiVWRtMkdjcUVrU2xMSFU2bkMvR3hra3BFcjEyMmtZQ1JXK1lDYms2M3NEM2pNRkxtQkNHa3ozRGtJOGVOeW9aS1E4dHl0WEVJSEcwajFDR2daRHhpdlE5dUtkMXE4YkdlaWtFQUNlTjRNbXI2eC8rdWVjMi8rRm5kd1NydzdLVGMzUW5xWi9BRVFIWkZzM2FtWC9kTHEyK2s1dk9CbVFSSVBua3p6bDNQRGJ6SGVIbDVQZlJhMVFkQ284SGdKaGxxUXVqaHBPZGtOczBsTjhNWFMrV1NyeWt1blZWekR4VlFBSks4NzdFZFJISjNNcmgzT1E4OEgrTlNTNWthSitZSXpCMTRqT24wSnpDK0R3ZGZSWm4vNHl1RndYMU5jOVdUYzRLanNCUXYwQWVycU1lTzYrKzZYdm8yajJBbDZ4V0JOWlp0Q0ZqdFE0T2w3WHJMLzY1bmMyTmoyeTFEcXRWMFZsRXZsUFVTK0J3MjhDdW52cTRXejd4WGdXTjV1TURhY0xsZVRESWZvdC9pZUNjNjU2UERzK0hPSW1yNElxWVBCbzVCMWNDRkNGZndGUzFRODlUYmFZRElGWGZrTGM1U0tZb1FiSlk1T3hQbmszcVBXWEtzWlBZb3h5V2xFdG1pVEZ2T280eE5vM0QrR1NMbDdrSEkxYmdtZW1UR3ZaZS9ZMFBqZi9sYXFKV0EwcnZJSjJ2L2RleGpSVklSZEE0NXlNT25LQXFTenk3dnZYaGYvVFY2NTlzaExCV21qdnVNT2dkY0tpWm9sMWMvYmwyOWZSM2ttM0JrQlFiQmV3QnlvR2szcWNZOXhJOFVwMzdKTzVPMldXemtrZ25UNnFrNlVObkNHRkJrM0xYdFQvQkJkMDl1aHoydEp1ODAwTDFPd0RFcXZNSHdPVFNxV05GSmNQYnQxa3lPMHQvRHdHZWdnUUtKTlhVNStpb2FFdWV2YnlaSnJpOXZlVHlkeThNbzJES2dLamhPdWhLTzFBYyt6ekhLS3FLY2RTMXdrNlF6UzdFK2trb21PZ3NHdXN3WnVDTE43YS8rZWRmdVBscFpsbzhSdzFXNjIxVXJ2VTczYjNKMUN2Z1VOdkFqWmYray9iazJSOGlaMEZPaTJhODFvV1UvdVdIczg5cWtIZnFBK2h2QUdRZjZhWDNJRUxRMS8zMHlwME9lbjFTMXlSZWw3ZEFyUjNOQVVwU2pXQkM0aGpDR2xMNG1MeHhrcXdqanQzTWNtYWlTcFc4WmZrL2x4ZDVEelhkaW9KamY5VHhvVjdFWE1wUmRqeFphSVJVV2pReEMxWDNjZ2Jud3VrTVJKZThxbTJxUmFpMGp6YVBFNzk5WXdDUkZZZkdDZFlLd2hldWJuekR6ejkzOHplL2NPb2gvUFo5MzRCTDQ1TVl0VjFWL3MyZ25nQ0hRRzBEcVlZLzFKeTYrRjlSc0hIeW1VL0tsUTVBMFlIWW1sSHJjcFVNNkhxZWtvUkI1L2VZcUlVRUZtUlNKbXBNb2tVMXNqV1RlSCtWY0lIN1ptc3llWFdadkMvVWZTSzBKSG9FQjdKSnJUWUlkYS9YMkxPWVJxQ2QwbnRTU0pjT0xhWHNlREwrWjhBVS9xcks2akxBZDBhVU5JbXZhOXVBOHI2cWZaZVlCVUxkdURhRTUxZ25hSjFGNHh6R0pIaDhmZnZyLys3amwvN203MjIyV0NTM0w4TzczZFFMZHpTNUZtQithM3ZpM00rQkdOVFdtVXFsSiswek9MaytEcURqUDk3SDdld3Y2YnFrczVNeWNIUXVqM0tGZzVxanBaK0lVaUcvY1BmQVJRVWtZVUxRclBvWDRydWNRaXVieDBMUTJtbE1XU1ExcGNsRlNMYU9JRWt5SXUreGltNXFDbEpVdEtaYXFMY1c2azA3NTJDSTBWSldFSjUwTFNoRUVEaVhTUldLczl1UXIvelpPT3VsRjNNb0xKOXFWK2VTSmFuRmdmSE51SlRqWndMZ2ttY3gybElSaXc2V0NLVTQ4SXRmK2ZIbFpuMzl3ZnVYLzNNM0htRm85OGEyMzA3cUFYQUVzQmJ0cWZNZmsrRUlYRThqMSt4d2tvTSt2OWJkUTAzb1BESzZ1NUNJWkdNZys1cExubURZNTRHVU9qbUp1cURWSkRJWCtpYWRXZUVWSGkwQzJPMmZxbEp4VkhRZXhlZnBjVlhaQkJRcmNZcnpISnFKWXRVY1g4RXAyUThVZ09kclZTYzBheE9kY3g1a3hLQ3dmdFJLU3JGR0RBNTF3Y1BvUVlpc2ZacEJxMjd3VnBXN29LN0ZkQW1rTVk1U0tManY5WC9KeWVCWG0weklnRy9nTTN0ZjNOajV2LzNUbDh2MUpZT2YzcHpXRUszU2VJajBJd2NjditQQW9hYUJYVG54VDl6UzZrVnU2OGl1OWtBalRNaFhIUmJsaXJNcTNUNmdpWGJEUHRLbmMybCtUUHlMandHaW9wTWhjSDBBRmttRm10MEVWNStmU3pVRldxeGJGbzdIM0p4b09QdVN1cFQxUmRzVjFpbDl6UUNpSUhVMEJrWVZSUXAxcHhIaXpqZ0dzd3FDczBOVk1QSTEwWmdKaFFDTitId2lWUWZGSmZ1TG1lQ3NKTnVHQWRnRVZpK3BBU0tHRSsvQkk1RlFwamVVQ1NhS1VrODloUjNWTlFEUlI3Y3hPQVRUVFJxSGoxL2UraHNuVjFjKzgwZEgvT3VXQ0JNVWVETnE2dHc1NEJDQjZpbGtPUDQ1dTNibVQ4SGFUQmZmZTI3bksxNC9YNW05VzV6TWtzbzY1UnBldnM2VGU4b29mRERSQ1BaL2JWZ0oxWkNVYUcrd2dEQXI2ZEk5bFRQcndwOUdCS1R6VXRSejdtblRtdEJ0ckVYZGxaNXgreERtYkwxalJqVUtBR0FDMnFDT01SUEVidzZYTWpjRk1Vbk9CcDg3cVMwbGdFWWRNSkdQTWdnOXRTb3FRN3QwcngvUFVCaEM0bXRrNXd1Mm1ZUVhTR3k3TW9Ka2dQckFYbjhSWTFUdm90em1mOVU4OHM2TGp3N2tHdW9KN01FVzc2SFJIUUlPQVcwRHFRWS9hczljL0NHSWdHMjdWeDNMN0V5Z0M1WUR3VE1qYWZiOEZtMEF2VU8zL0JKbDUwVlZKcCs0OEMvV0J6VlNCcmk4bmQ3R2lRdWE0TmdkSUxsZjFRQ1B6NUkwZ1h5Rm5EQnA5RGQ5VHZoc2dWaEZSeWY3YkYrU1l5UEZ0T24ySUZFRmd3K0RpVFliMHI0OWNiMG1HMjhHd1pHM2wxcHJvUkVHRk5SQmphN1E1K3BudytSVjU2Z1JCRVlwcVhDN3Q5V1M0MFJML2tLNjA0RWNnRkFuN3RyR3pjRkh2dkx5UjZ1ejQyOHdHemV3dytiUW9IUGZBY2Z2REhERWdrUk8yaE5uLzVvVUpYZzYyV3UzWkdKZ2o5VElQdE1CeHp1VUdiYnhlN2c2bDBCUk5kaWp2Z1ZiaFRNVlV2SjhtK3g4Q3RJa2lJWThWOGhKeHFHai9TTkpMWVBhTFZyUFRDSUlFOHdSdzJVVVFOR2pwb0JTYVJWVUxoVUdlcTRPcllidnVCQnBIaFhPVE4xU3RjZXJoTDRWRGk3YVNzNFJXcmhRN0QzMG53akNESEV1OUNoL054cnByZWY1V3RRZHNReUpyeXl2R1JIZnNmZ3hjTEFReHlqTEVuTDVoZmYrNHMzUjMzRnQrK2VMdGc1NVQxODdmTDc3Z09OM0JEalV0ckJycHovaVJndkxhT3BvZEtvMDFvSGFyOXY2KzR3d2lwS0FrVUxlMVZoUEVRSHAybndTNWhJbEgvQk9pZG84VlZMeWhMWDBWN0liNTJuYkx2emdBc2hpN0ZnbUgwUlNXNXpUd011dVRhUWxvbkpuaGtveFFsYWhSL3NkdlhGNmxyL0lrTzRscXUwUGdIQjVMZXRrZjNFQWdXYWlsc2JBT2tGakxZeGhPQ3Znc0EyS3IwRXRZZHNTaW9CbDRnaTQrQytJME56dExxR1JHaHphVlRHOVJMTWgwcGFKWU1sQndKaUlZQ0wxajczdnZuT2YrdEJhOVQ5Y2RsMDErYkRwVFFZT2dab3AzTUxTWDNhcnA3NlJiRHZ6YS9vdzZ4NklRNmpGeC9mYzJmOWZvQlUyWnpYN2ZaNkRGQzRUNS93TWFKVHljclh4R0ZIMnNoRjlFcHBtVE1FMjhPZWxnTWpjbHZFTG5La3RBTEppR2RtRVIxcGI4VnBLY201RXVTQUppS1NlQUVuY2U3YnZVVldFajFhdVRPRUx2K3R6SmFpZHlNSit5RzlCWW9JTHVnMGdKeUpZNjZKN1hqMkhoc2p2RkpmRU9UVEJUV3lYb2FsRFJiRWJsWUVvbmYyNUxMNUF2UVJRcTYxWHRUV2VldVhxUDd6NDRBYy84M0FsbjcreE85M2ZaajRFZW5PQjQxcElVWngzYTZmL0MvS3N0U05PdTMzc3loUUZVcDQzTTV2bk1nc3BQU2ZlTVZOWjR2ZnNTUWVwZXFwUytUYm1mRDY5K0dRM3BZNm9CeXZkM0xQNEtCWDEydkI4QmFVUDVKUWtIUU1nVERDVWRXTHI0cWZOdGlWUkwxOThaTFFoc3ExTGdMaTJvd3V4M2x1WVNXeWtVQ0lYM0hZUlFDRmRXN3RHVEdDaDFPNlowVFRNY05aR3U4NmhLOWtZZmt4YWNSRkVLcFZja0lTZ1pCOEpwVEh5NmlBQm9lNzM5WTB0L003bnYvU3ZQdmpneXNXSDZtMWNhNU9FUDB4NlV5TUh5RnJZNVpQL3ExUkRvRzA2NnhnZHYwQTBYZmYvTFh5WU1VSzdFaWJhQnpRRHlDQmFWRDNqN0hDNDdhdjNZZVlFblh6UnBTeHBrNlpjK2pFbGpxcjJod1ozNmxPN3daeEIxU0xxSEtmUTVoaXJwdHg1cHAwdWdBR3hUYWtldG9MRmgraExqRFZUclRhUHJ0YVViTjgzQk95bld0VDY4RHhxUVJtU3BpWUFFcU1URkh3aXMrRkZTZDJWL0dXRThYWFdoVFk0T0d2OUltN29oM1crQUtJVllMRXdlT2JGU3hkKzhibnJQN3RMSmNnVWFOaTg0WDhIMFpzRUhBSTFOZHg0OFI5aTVjUjdxV2xlN1V3QWlHc2E4VGgxejhyUFYvNFdKY2xCOTU2WlpMUExaUjNiWng4UnI1Skh3ZEs1cDZTMWpPU0pTcEhFcXRKMTJrdDZETkhlU0hNbTV4Wlp1SkIraDE2WHBFRnNZNWo4Zm5mcjBGZkt2SGphNy9CZGdSd0RMU1VyZlRVN21LVEEwekh6SVRHYUxxM0VXZWNVR0FLSkttL1VHeWhGVE9meGNkcVhmSGxBSTZlOUZISytWbHNBdEhYV1o1SUNXQzBOUHY3YzVSLzlsYXM3Zit6VXNMd3RtYU52RG5CY0N6SG1XMlR0OUovell5UUhTcHRFT28zM0VvZWY5NDZIcW0vU1BkYjltbHpJNlZEWGlaQ2Z2cWVkaWRVbXZic2pFanV1WnEveWNBYTB4R2FqbE13UUgydWpjUUtIMzhPbk8yYTZZRWtVS3M2RTZqZHFIeXFBTzFLWXNwb0RXWU9URFpRRms0YUFUSzAxbWkvNnhyUDAyWWJpT1RHM2FIWU1ZL3RuMUZGMDN6OWxXa1FNb3BWWkJpZFIycVF3STcrbVprUG9UVVdDejkvWStjZmJEcng2RzlJUTNoVGdrTFZ3cTZmL3Bnd1hnUGExcFkxKzNpZCtBTURlUVV5dk8xMjk5MVBpeG50K2dFN290SUt2cCtTMmk2cGpTU0tsOVladXV4SExOS2s0b0FBNHRUWHl1bW16VGdEU0wwSGxTd1U3ZEJKMko3L3V0RVlhZmF5U2k3VDZwdll0VS9maTkyNEVldTZKNmdSNnN1NmRreGhGVkNHeldXbVlVOUY1YldQZ0FINmlkOGVlNFBjdDdSaWNVS2FSVGxRSFFWajM5ZEluQU1oWkYxVTNuMFhxc0Znd3ZueGpZL3cvUDdmKzB3VXpUZzRLTEJSOHkvOE9vbHQyRHBBOWVPTFBuT2xIb1duZ0ZsZC9YSmJYM2svN2dJWUlCd0prdjNOZmo5U05lM0dpYS9mTWVtczZxbDFRVHpTN3NoT1FLUGs5cU9NMTYvWTNQTjhsUTl5RytDOFFna3FqWUFoY0dqTzExb0xLRm9NYnM3c3J5RlFTdVBBTWpzOU1HYUs2MDV3QzNJbGt6MHFBeUZYSU9GcWhEY3I5bGNUcGdxaktkQmVsakVwQUYzYTRuaVdDZ2xwaTlFRVJBazRORXh6VWdSQmk5bVplTmtGRG05UlprQzhBZXorVHdQbjhLQ1pZeDFnMGhJKzllUFhIeHl6LzlMMXJvMDllbnJReGorajEwdmtEanQ4eWNPelNpVnM0VzBCdEM3ZTg5amU5TEcyQmJFSytHdVYyd0t1Zmx6aTNoc0RQNnJSN0RIcnNFVGp4cER4Nk9uRjRpZURTL0pKWnNNK0NNbDlQMHNtWTFKaFVRVk8zZDAvU0kwa0ZCVWJlcnRqMkROUWVCTndKUW1VaU5NNUdlNGpEcEk2ckpncldFSGRtaUJIalBrTmptckF5NlcwZFNSdnBoamFydXN6czY2cW94OCtwMUtBb2JOSXprY2JISXRsMnFmeThNcVJ1dEhOSGd1czRpNE9qRUxGQURMaXd4a09NMWpvVWhqRUM4TnMzcHYvemc4dWo4NnNHMkhBSjlsOEwzVDUzdFBnTzJMUDMvalJzQzI2Yjd1eUtzL21BVGlSVDRIVkpHajNYZjFZd1NlZFIrcm1qdnUxM3I4eElqUUQyUCt5Skt1amVQeWxiU2QxTHlXc0lISjdCVUhGQ0RyRW9UbjdQVHRzeXdLaEhLc2FrQlc3dklJSFRwb1hOSXRRYjZDU1ZaUjNQbHhodGlCNklxZEhPeFhRQjVmUmVSVVhIT2FKamJKalFXRjJ6a3Znd1pUNnphMnI2M1RDaHRzbTluZmMvZ2lTWGVycjRITHh5SW9JV2dJR0c3d0RXT3NCd1hFTzd2cmwxN3N2VDFmLzRoKzg3OFZQVHVrRnpDUGJPcmF0cWwxOTQ3Wk1rcUhUTEo5N3RWazc4SkNHYlhVRG5zNHJ3QTUrM3h4YlpDNko4UFdmMkJlM0JxbVJBeVA0S3VoNmN1R0l2Nlk2RUdZbVUyVCt6cS9NYXNheXFxSVMyT1NjQXUxUXZPcWhNcmZWcldycURnSk1VdzVKTEcyUnRpRVkzRUxlRHo0MXVENlJNeFFOaUZFUlV5Y0xJTmM3TmpKVVc5T2phaHFyYXFXUlJvTFhPYzNnWDFEa1FJS0ZQRXRJZGhGUmFxV1R4eisvc1VFMytLU25yVkpJVWpQYU5kd0I1dGRxRGhWamlkUkRFY1NZeUdNTGhOMTY0K2xkb3V2di9YcFMybWR4Q29aeC83NERqdHd5Yzh1RjN2ZlpKUktDNnhsVHczd0RvY3VuWDByMmdPamY4NEtzb0o4U1gzVGtYa2szK3Zhd2sva2JwdmpsWTlrZ1ZwSW1XVDlTOXo2UjlqaVBaQjB5ZDhsRFJrNmoyUzI0VFNaNUFKdkdaSnF0aXFlM0xiWlI0UEV4STU5TENwUTEybURvN0ZQUUV3SkdPRGNWSnpzRWVVMjR1UU16MVVXbXI5OWV3SVZVNWJZZ2tFQnRpMDRqQUpMRHd1MEc0TU0zOXVHWmpJWjVCNkJxWGdnWGgzcXBHN0gyckFaemkyMExodmk1QWlrR3E1OEtKb0dERzF1Wm0rZFZ4OVZQZmZuNzFKOWVucjlkT1A1aHUzYXRtaWxmL1Y1UmdKM0RMYTk4bVM2dmZIcDBKYXR0azlHb1EycXZmN2oxKzhCVjdqODRxaHAyekE1ZmJEOVR4dWh6OGVYdWlyN1FMQkpGc3pVSlNlRXhVUVRQVkorcjFrbFFuZjl1a2pjZjgvS1FySlJzSGlQb2V4ZlBVL3VCWWFjYTNMYmVUa0QwclgwZ083YWNjY0FyQ29OcTU1SjNqNkRCUkJpV1JHU1Q3WnVhZHFLcUZQQmNvZVFVVk4zbXlvVW9iSFJ0QUEyMFRnRVU4Zkt3SWJGZ29iYTNGa0lGTHRmMkpWeXhmWENhSFVsN2Z2NFBvbGlWTy9kVG5YL1YzY2o0UXZEMTk4ZStZdFZNZ3MzZXoxTm5wT1N1UWNuVXNWNi8ydzBZZVZwUE12bGw5T3Z4S1djeFQxaGpKajJUcWo3cW5NNVIwWmx5dTU2dGxwWkltZi9pZTBDRFNVSmxzb1RUTWRzb2VwVjhrbnBQVUVYMkNpZExHRjdlZ1ZJODl1SXNscUVoZHg0T3FVTm9ka2pSNkNwVEd1dGdXTFd3UHArcGxVcU9ZZlp3YVVZZ2pnNWM0L25uNlR0VkpJUkFKbmkrcmtSQUVHd05BTXdZUVV6ZTZxcXFlNWNIdXdKcjNSTUVHRWw4dlhLRGxyeGlHRFhhM3R2RHA1KzNmWGF6S0QwOFA4UDdOMGg4NzRQZ3RBOGNNUjYvNk83VU42aE5uZjRUV1RqOUtlU0hCamtQZ2dHc1ArSG4yK0t5TnMxOGNHekJqczJTS25ITFZjTkVlUE9xTHlpTUxFcWRYTHVnblFMeEpmbDBvK0dlZHl6aXlmNUc2dm1GZENyNGs3dHBFMFNHQ3JncXA5YkZ6ZFM1NjJzaVhidkxqRTY2aTFFWkIxNFVkUFhkUnF1U1NocUtqQUFqMkQwSnluTE9BSUU3OFdBU0UvRm9LVVZpamNncW1GSkdnb05mTmVmVXdrdy80VENGS3VuQk1LZndvdkRWU3FRTVgrWmlEMm1jbU1pT2ZKY3F3SUVoWUZDM0Y0ZW91ZjQ5OSt6ZDhvQzRIdjFmWDllc0N6MzUwNis3b2FuandqeUlBbTBVTUYvNkcwZVI1TmJMenFuMzcwY3h2QjRGb1ArOWFmdWkxRmsyandNZ21wLzZZWTd0amdHTkdWWXZxVkxBUEVMaGZGRTRKd05wdGlvNDBiMHVvR3RLS1RvQmN0S2I3eFIzVHNqYWxzVWloUEg2aVIyekhDYWlabEtvZUdVNXU2OWpVWE1Lakc2WWpDSWx5UUtvdkVDYyt4VVZIRDhxMGVaWEFxNGt1TUJBaXdJRFJPQmZXYVJCc0ZOMWdOMGg2OHRLb0RkSFYyakNHWDdlSmhUeEVWZHVjUEVEOHVsS1FxRnFIVjJ0UFRLY29YbmpxNzMvbitSTmZSNU1kdERsbnVnVzZkYS9hVzk2NS93OENjRm1pRmZwK3VmclNNdGsyZGlyTUYrOGtvQ1NLa3o2TnBBdDM1VUdIKzhZMkFETURobkRsak9UUkUvTUpoZTduYnVlNjk0N25aQk0zTFg0bS9idmo5cVprL01mN1o5cWU3a0VLVXFNNmRVNG5ZbWM2U09jUDFDczE2N3dnVUZURmNrZUt0bzJEV01sdEU4MHV6UlBXSkR3ajFpTndtdXZ2cnl1TWR6c25aaU94VFFVRHRTV0lGb3Bub0cxZGNrcUVjenZxY3REL2N1QjVxY2NnTFdTTjJWV2Q3RDBwRXdnVmdoQWNLc3E2MkRtNEVJNWt4VWRYWEg3aCtVYzNUeTcrMklrekYzNTJlMmYzbGhkRmdUY0FITjVjUCtBWHY4WkIxZURQc3dsUnBiUEd5d3pKekUvU09kbzFMZkxiN0ZYVi9QLzM5YXBSNHFDemdQTXFmTGZPUWY0eTR1S2xmaGJORmNrNWYrSytGTmwxWm5lcFBSTkxMWVhRbWRnUVhTaEY1bjBNTENSTTdnN0RnWGZydXBDU1FjRmdqOFZCL0kyaTZwZTdwME5yb2ZJdE9pU0Nlc21TZ2xKMUxNSVFCV1dDWXk0T3lDK1Erc2dGVFcxSUxuemZka1NRYW5CbUVEU2RGOEhFYU5VaG5VbGNnbGNKMlhYVE1KeVQ2RktuWVBjSmNXZ3dBU3daVU1rWHRvekY1UWx0MitKakw5MzhTKys1OTUwL094NjJhTnd0K0tjRDNUSnczTXJKZlk4SHZmMHQ5c2FWYnkrMEl6aUFneVBud1BzL0ovKzk0NUU1U0ZvZ1RLcU1vK2xKQ2g3cW5KdnUzVkhDTXREb0EvVzZ0TFlSSmw4NkpmWXUyVDlkaVJUWEx1SllwTlgzZUUzV05wMjZIRHF3RjhEZFlNbzlRQWE2NTZrYUZOcW90b01BSWZQVFg5TnFUWURBSEl3WHJWN2xzaEpVTG0vTTZ5YkZiZXVDUGVmajRvaDFzeW1YN0JSb3JRS29XQVBnSmFIdEFMczdSL0pJYkhRdTFmOEhpSWt5RWdDT0lPeVBzNWIySWdHSkF6bUFpd3BiMTYvZnUvYk01Ly9FQXdQOHd2WHByWWZpM0hya3dHT2YzUGV3TkZPMEo4Ly9sM3pxSE1UWlRJUkt0SE55ZXIwMmpLcDUrZXltenUvN0xINEdRR1NGVitJdHV0Y2l0aTNWTDA2VFRIWHVqbWR0VC91OXR5NjFYU2N1UmZVdEdlTUpOcDE3SWZOYWRZNW1pcXVxWnBSQ2FIUnNEUkJ0RGIyOVBrRWxRVkxORW1qVUNRQUs0VElJZGtsTWs5WjFIbjk5Nit0Q3dVbktHZkpiZEtRU2d2RytBTUMrNEFjSmdVVzhNR0JmSm9xWllhM05iTEt3SmtPSTFYVnp4cElrdEhKQXIrSWxsMzBDcHdqQW9aaUhvMUNLU3FnajhWemI0UGRmZVBtdlhUeTM4QXRyYllOdUx2SnIwNjE3MWN6ZTVCNnlMZXppNmhtc25QelQ1RnlxWkhLTHRKL2hEMGxyR0g2QVoxUzNmUzdSeFRrSjl5VHFudHRSRWFOa1N4dzhqdy9MejQvM0R3VU9vNTBSbjlGdG1PS05GTVZhNEFNSU5rbnNWZXJYREpOSS9VN1NqbVorbTNYVk1pTUdRc2J5VW9Kb3R4RGdDdzJHYUdkeEVuZHhrM2lQL0xzSGtlSGtEU1NoR014cW1FRk8wRGdibitFSFJhTDZwK092U1hnMkR3Q1NWRmpFZXpNSk5veTlscDVxMDBnbEppS0k3OWtmRC9BSnRoa1JRVXdBbC9oRU55RkNTUUpEZ3FzM045K3kvYjZ2Ly9BOXAwNys4dWIyOXY2VDZRQzZaZUJzejk0OXZEMnpkdnJQbXVFUVZPOVRzV2FHOHNrL2UrcCtsMmFTUFR1bUhQeUFaMlVUY0Q5QVVuWktldGtaV0tLK2s2bUE0V1pFYVRKRzQ1cFU1UW1mbzdUUTZ5aTJXZThYVTNvSnNZSm5ycWJGOFpCTUlrcldqbXg4MUdhSkNZQmhjcXRqeFNHQkkwbW1zTmJpUXJTMlIxeW9rYWFTcml0SkpVZ1FBS0c0b0Q0djNKK1NRQkNIb080Rld5bU9yY3ZBUXJHUHl1aTB4QytDYldoakxvSXlEb0dUVUQwdE1xSmMyL0RCbnd3QkxPQk1HbHQ5UG9PeHU3T0ZqNzE4OHljZWVOczMvZkxXWUhPZjZrYkFkKzJkT2dEZUFIQ0tEOHpjU2dTb0JuQlhYL29UZFBNYVVBNzJYTE92UFVKZE1PU1NZVi9Td1kzamswdURkS2NvdHZlVFh0bVppV01sYWFOcElWM2JSUS9xaEVoT0FvRzZnTlB6bEVlN2pzY3N0WlhDK2Y2MmV0L3M5OWhkMytHNGdDZ0ptQWxVbWFzNkd5WXQ5NlRyUmZuQ3FMcW5JNE1JbmhQcklzUWpZK3VvZjFGMXBDaE5sY05UR0NLMWVScVgzQkdTOWQ5bWhUMTB6Q2xJeFNaNDB5aElRUFd1YVZzMTJpL3FXZ2p4YmVTZEovbjRDd0dGT2dhSWZDQXRXL2hxb3Q0cDVOaUJxd28zdnZMVWQ3L3IzZ3YzbnpQMDdMUjkvUXJiTFFQbjdBLysrNTN2VkEzZ3JEMTE3Ui84OVB2ZFpBTGVCemdIVVk2VFZ3Tk5SelhiVjFXanlGR1Z5KzkzcnA0dlNHblRyQnc5UEVnbkFZRE1zRTN1WlptOVYrQ2NyWk9nbzNPOHhrbTJnV3l3Y1ZSVkE1RGk1OEtFMFkyVllwS1pQaStBUUVGSzhQa3FzK3M3YVF2RkpLblNpbnJ5bHFuRTdNYXArUlJvM1lGQUZTQmZQOEhGK2dnTUg1QWFIUjZDNk5YVHFxYk9hUmlRZnhkcVczRjRUL0UvQ1JIZE5vWGFKRVkySzNzUm42ZHRpd3dFU1dYVkdhSHhlQndHMERtS2dhQU9EQllCbFJYV3IxMkYvY3JqZi9IZVI5LzFIMTJkVEYrM2srQ1dnYlA1aGQvdmZPZmhFUGJhbFErNWE2OE1hTHk0ejh5bXBFcG9MdytncVBxOFJodFVPdXhWNExMN0FIdEEwemtuT3pmd3NvNG56WitUYzd6dU5mbXAxbXZSVVhKQXNnMnQ5bW1tZ3AwQ0IxV0FVQmlncUJJaERhYytVMExmdFQxUlVvWjI2cVJOS3pNNjRicGhSR3JnNnpOOFJpcjc5QUtYUEhOeHdrdHl4Y2ZrdVV5eWM3aCsycmJSRTJlMVRHOW9wKzdTa0krSE9COGVnNWFTbmFMUG9zdzFyaThwanFFL0lKNERwSjlFdkxzK0ExVU1sSFVBa1MvY0MwY1E4bDYvejIxTWZ1VGVsYk4vcVZnNldiZlc0dlhRcmNlcS9mb3ZwUy9PZ2hlWFVUZk5YMFJUZzhlTENPeXhjODJzTGg3NnQ5ZStPZUNaK1hsNm5TOENuc2VwQlRHOW42cVZQVUFuUk9SU3MyM01MOW9qWHJydGpweFp1bHhjTmJUa3BNaUJHS3djOG9xUHgwNVF5VEo5WHptOGdpdXFSMGp0SjZKUUhza1RRN1dZTkFFQnhOQWY3VkxIOHhWVm5DU2w5TG1NNEVTSWpnRWJVZ2w4NURRa1JSZlVyUVVRMWttc1NyL1pGNUJtUUhUQlUvWlM5RGdsZ0duRVFENDNHQUk3Yzllb0Y1QmZ0MUV2blFjUndZZ3ZoK2lJWU1LNVZoek1vTUxWU3krc2JqejFoUS9mZS9iMFA5L2EyY0hyb1ZzR3p2SWZTeGtLTkJ6QjNyaDI3L1FqLytUYmpERWUwcjczcjNrZm9teml4WVBwNDM0QWlPSzhjMG53L2xDYVRPR3F6clAwUFZLNnNLT1dTWGpRZnVyZGJCdmlMUmdnUjlseGRkR3E1eXB0dFo1dXBQZnprMGduYjBkRmlGSTNxU1NTQVNHZUdnZEpBdGo4ZHdscDA3a2sxYzlwa1JUQlhaOHQ1Z2J3cW5zNXhyTUpZaWlOVjNXU3BBN3c5NEJSems4RUY3TlBVNXM5WXdoclM4bUFuRkhJOG1PSUx5K0hZYmF5bGcyb2x5WlJXd2g5MFJwd0Z0NlJvYXFid01FNVFzR0VyVmJ3aFNlZituY3YzSHo1bjdkYjI1RFhvYS9kdXNUWjNZMmZHWXhtYSt2N1lWdFEwYjNWckQwQXZDNDg3WHZ1N0wyaStvSXVXSlRaem1nRFhSRlBPb0c2ejlDRlJwL0tIS2J0UGdqeXRraTNiWHZMRDBtWU5BZ2c2QnJ4V21SQzM0L20weUM3Vi9Ma2RVTlU5RWxxdUt2ZXI1TXR1bUdSSnRGc1g1UmhTSFlka1libHAzWUkxTTV6eVRXZGRkVkpBbWc4NWxJTk4rZHNWQk5Wbll6cEI5cVd3QkNTRFpaeWloeGwwZHdIVWNaUU9uNE1CQVlXcEpsRDJHWStkTUlIdTNwbndZQUpsNjZ2Zis5TEYwNmZMcytkdkZLL1N2a3lwVnNHenRiUC9WVDY0dXNKZkxOWlBabEptNzBUUFFub0x1ZWVEWkhSNmI4bmRJYTYxK3VFVkU2VVRFbUpYRk9mTy91M280bmxFaWcvUnJQSEpIcUNORFpMc3RBVFZhMDBJY3VGV1ptdkxlUUx0VURXUmdGMGRXODJ3YTBqa1pYclptM0p4OW1INHZqellscEROcWtReGtkQjQrTHVhZjR1YVVPckJKZ1VZWURvTmZOckxTRmFtaGdXTG01Mkd3c05jdHJ1dmJYSnhvbWdEK25kQUdKZjlKWG1TdlNzclVvNkRrNGxVSkpEVWJwbTcxQVpDUWVuRFpDcGZZRzVXR0VVREZ6YTJGcllHaTc5eUI5NTlPMS85Y3JORGJ3VzNUSndwdE5wNkkwRGlMbXFoaDh5WVcrVkRtVUkyUTgwK3IyampwRU93Y0dVRzh2cFlHcVM1NTVwTUdjMG9BNklVdUNzY3Qwc2lpQStMM3VkdWFxa3dBODZvbTY4bEQ4dDdWVkRnS1N5dGtCSThoTDEvcVNKRGdvU1NMcTFldksyZEJocitLN0pjN2xFeXJRNER3UkI5R3FwcE5MeFZEdEkxU2diQWVNam0zV0hCQ0w0TFV6Q0FvNU9XQjBiWTN5aERGWE5nQlQyQTVINERJYkVwRGVFOW9XYnh4R01RTStZcEtxWkVOckRGS0xvaEo3dll2OUlud2VmMW1ERXU3eDk1RGZER0lQbm4zbm1UMzZPMnI5NmJYY2F4L1lEMko5dUdUamo5M3hUZUdzRUo3Z29HOWN1U0ZNRFdpNDBjTmdPWUlCc0l1NEYwT3puWE9SUy9qMjd6eDZBU2ZmZXVUVEpuNjg1S1ozVVY2STlBTVBNZHdXV3FoVzVMZFVCWkhpd0FEQkdIUWIrSHJxdlRKSkV2cUdxV3BGT0NxaTZtWXo0SERRS2JpdGExQnhCUlF2VmJXeHc5VkxhemJyYm4yNFFxa294VmYveTZBUWIrdXAzL2tpU0FxS0x2SVNTQ2JYWXpLT0h0QmRwOUNUb1pSTHg0ZS9sbVFRZ25kb0RVWk1JUU40cmZRUUd3VHVJRE1RaXlVa1M3dTl6amdRazNISDFreEFjK2ZpMWdTRThjZVhHKzA2Y08zL3Z5bUR3L0tSNWRlL2FyUVBuRzcvVE4zd3dndHZaL0phZGovLy9JTmFDRkRnSFdkY1p6YXB5QjU0bjJZVE0vdTVWcnhKM1JRNU03SDk5L0kyU3F6SStjOGErMlM4UEozNVNDUkUrVTlRaHd3SEpWRWprakVUaTVIVUFOSWhKSXhCc3lMemtBOVZaaE44MTM4WWowd1hPbWxJSVhBcXpVZWtUZ2UvdjBZWklZM1hXV0pla0tqSEJnTkc2dEhsVTYyeDBWQkFRODNRa0FOMnFHcVVxWmJoZlhtOHRqMVpQL2VwSzFxVEtCakRIbjhQOXNwR1puVzRoVEMyNG5tZEhYaG1YZUtudUFNY0VBOEsxYVlON1pmY0gvdTJWaFo5NWVmZlZGME52R1RpRHR6NEtnRkNjV01QV2IzM3MyKzJOYXloWDEvWUZnazd5MlluK1dzanAyQmpaUzQ3U0RQa2luZDR5dVlabm43UG4rVE50ekVWZ0ordHpUelA5VTd3RElrbURXYlZSUkZBd3pkUks4QjBScDVNUzBNSVYyUlNJRXpmUHFjbFYzVnd0VXNOYnp5R2ErUTJxam1ZTG5vRlVDa29JQXUxY1J6NTdVOE5sV2tGSWJmYi9lZnRJNGxzSVF3ZElLaFNTTHg3SExGakpQbXU3bkViczVXOHpkVHJhYzNzWW1KY2txczdOdXF6VDNQTXBGdjZBUzBYa1NRTkJnOXJKREc1clBIYnB5bmNObVg3bXhzUm5oejZBL2VtV2kzVVFzOTk3QlVCejZibXZsK2tFd3FhalcrWXp2ek9uWm1ad0xuNDdSdnZNTlh0c21uM09TL0ZOM2FiazU2a2FMZUxYQVZ3MnMyZDErOWxjSEgrLzNCYnl2K3MySG1uckRWMkp6L3FnL0RRQVNuY3FDRC9HQ2VtMVBCOWdxZXBlcm03dXgyMW0zZDBDZUM2YXFWdHBmSEoxVUNWTGx3RnhVTzIwdlUyb1JNcUJTeE9oVzVKWHgxc1NhSXRRc1VkVjRMek9kZjUrVkZxVGZna1QzQjN3SHRYVEJ3QXNBbllTVzYrS2JHZGRMOXhQSUxCNis4aDgwd2dnbExRcWlIRnBwL253S3JubGQxU0NCOHVEdWZzdEEwYzJiMEsyTnVCdXJJL2Q1dm8zb3FxeUNNV1pOWXVNWmcrblNkejlQWFUyZmZlNmU5YUc4Q3NqaWZTOUQ5UnowK1J6K2xLU0tkRTVQV2tDc3NmUVZ2SnFpVVFBeG14UFNtcFFiR1UyN2hRNGJYcHgvcCs2cW5YdFJFc2tPUjBIU21NUit6TXpvL0pqMGNrU2dZS1V2cHltcUg5R0ppMDQ3QVpuTXoxS3A2RStUdDNWRk1jK202cXFEZ1lrcGZlVm1FWnlybEQ2dTBlOVNPKzZFM1lqdWZUSUdGbm1ZZE8yS0tNVlpGRVY4WjEwNUZxc3V3M3hWWWsyZDNZR216RHZLNWRYZ2RFQ0RxSmJCZzZYRmN6U010ekc5WXZ1NWVkTE0xN3MvTjdCcU5vZVdXZXluMTRYeldwZXMwQ2hmVUZBZXpvbTJibjYwbk11bUV1bC9IbjZvMzdtTEpURytGSXFQcjhFU1VMcFJOWVhpb3hCcUdxUjFsOFFTOHZHS3BxU1FtSDAyYnJPcEUvdlNFVG91azVxdXpIc0M2Nkhsbk5XL2lZcWlKbUUxZmd6bGR4NlR4R0pBYUM2VjJuT09OSTRlU2FnMGN4NTJyWGhCSUhvQ05HeHljYWROQkVPcWpJTHFMTXRWQmhSU1lYeHU1UVdJanAxM0FWK3M5M0F0RlJ0MWI4dW5GOFFjR1A5QnI2MGZQRmJwdC82dmRoNDk3ZnQreFRnRGRnNE56N3hVVkJaUWJZM3prZ3pCWmZWZ2FMakFGa1FLZGZxOVBNZXlZUWtYanVjQ3BrYWw1MGZvNVgxTzNKOUYzc0hYQUszbmZVU1FDY0lSYTROaEhPUkNtNm92dTZmMVZYcEVDZHQySHJQcFZUbVBERXJML2NVZHcvSVZDai8vTmpjdmUxRUdyY1lTYUVjTi9PVXFMTkZ2V0hxS2N0VHgrTllrQytoYTBYaU9vM2FLSTZBcHJVenlYOHUzTXREdTNVK0JNY0RFQkQxam9VR3gvZWp6RXRGYk5ZbjdidXFsbDR4czc0alRuelpLMktRT0hRckRuWFh3OUxWbmxtNVVGS0s0dnFaYnhzQndIU0M2OVBtTzlZdlB2eFh0cXZsZlViYjA2MEhlVDcyS1FnQVk1dDNEUVlEd0ppTzRaYUVxKysxY3E4NENOaUxNZjE4a0kyaWxPQkFjZDFrMXVzME8vODdhbzdNdEE4UzJ4ZzFuT3o4L2RST0Y5Mit2dEkrV0cwYUZ6MVRQdGd5bFViS3ZVNis5VE12VmJTY2JGQ2hKRWtwVlQzMHZOVFB6R2FCUGxmVEVQenpOUWVHTWpVcDljM2ZPOVo2UmxvNFpVMTl6bXdkUk9Ea3N0V1BZZklDcHNqdzhKUllHVWNIWHlNYkVzZnpZR3lpalVpd0hTYmdvcVFpWWtCc1lrd1NjblBpbUNSdkpGSWg0TUF3SElRTWNsQUpOQnBjZ2xwTXFJWmpYSHJ5UysvLzhoTlBrT3pIVFFQZE1uQVdGaFo4VHJuZzYyUTYyVmZYSXlBV3dWTlNUcU1xaU5veXVScEQ2SDd2M2pOMVZvTWlnYVJxSmZWRzFaQzk5MGk2YnQ3U3pKQ21mTEYyZHFLRmMzV1ZuTk5LZVh5eFNHQlcxU2huQnV5WC9TTDNJOHFLWENpemdNU2V2aDVTdFVsM1JYT1NKQU1IVld3UC9BVWQyNG55ZmtPeWJRSVJ0dzhoQnRoUlZPbDBlY2JuK2xBRUQ4SEg2S2tVMUozWmRHY0NQYTVNcXNOUU11OVo3c2pQT1lqR29RTVNHWUlDVy91Z2FSV3E2bXBQTzJGUEV1cmZRYzl6UGcxa05NSms4K2JhQ3gvNS85NUx6ajZISC9uaGZjZjlsbTBjODlYSFlaNzZIUGptalhlWXdkNGFhMTJCbXlnWHBOam5Nd0FJemNxUC9VbjBodFI5V2p3Kzg4ejkycEYvanBIREtwR2tPOUNkNnlrNUF0VGd6MEdqaTNHcVlhZ1UwZ2ZxWjgzVkZ3a3U0NndueEhUQUdQcHI4N3BzMm5IL1BlM05tVXNqd01kcDVmazQyajZkdkJwcEVHc1poSEhSemFwaTJuYTR2ODBtcWc1OGtsTEowZERwbDU0ck91Nytyd3NWTytNYUV6eGtkSzhpdlN4S2xIQWt3VUFpczh6dG1nUTJmNTUwQUJRQ1dSRlNxajJYQUlpd3U3bUpodmhiaHZjOHVNOWJRTmFHV3lBcUsyQzhWR0l3Zkt2WXR1TXRlZFhyOXJGZllnZnp6L24zbWVuVDhmUW45SFR1UCtzMTJmTThwQmUrOTNlWjBkdjNrendLSHRyL3Q2QXFVZkJTWlhwci9LeGVPTDBtcW1PaFQvbktmVkx4VlZLaFk1TkVKNFIwWGZMK21ENWNVd080dytGajRsdDJuZmJmRU1melZBSnBNbDB1b2RTbVVoRG9mSWdlcnV5ZTJ0L3VpQ01EZmpjMkRvSU95Tk5MU2NPNlA2dVY3UDk3RHFldm9pcDB1amVKdzVYRzR1MUx3Mi85aWZ1WDlybTNwMXRXMWVTK1J3Q2lrdHAyMVUwbjNzdWtucVljN3RuZ3hwOHkyMFdnbnFJVTNIaWdhL2tBeXRVTC8zMDJQeWQ3dmg0VGIxVHFaRVIyWHVKNjZoVEl1YmEyUFR1bUlrVzVIYnkwSUtRb1lGV2pnT1FZeUFOQ3cxQWxiUVI1SXBwMDJ1WTBKVGxla1BvS1pSb0J2QzYyMVovV3hwRHVaR09FbHNhSkd3dDhCSWVIaEtpQ3ZPL1JzVUNFTnRodUhQYkdVWUNJU0N3NWxVY1M1SDFVc0JQZ1M1NDVEZm5QM2tWNFIxcURPb2hzZjNWa0VLK2xwVWljZTZFS1FhYU9lem1VYWtMNmtybU9ESzVjdWZ6QjNXY3REb0xPTFVzY3U3VUJXMDlQTzVHRm1IUTBLemFVWTNlYWo4QkJjbTZScVVlcG01bG9wM2dzdjV0eXAyUXY3T1c0dWZkc2o1VFpCekE1YVBKbnpGSStNZExDWnBydzZyU0lWU3VSSkVRT21qaFVXVDluT1c5c1IzcDRqTHhPNGYrSXowanFJUVhIVXdxQjZkZytXWnQxZk5VaEFYZ0FXWnYyMUZRcEMvZ2EyRkVxc2ZkWnR0WjE3bTFEOFE5ZEpFNXhjQzVFSklUbnpFaHNLL255aFVMTUU3TkVWWmNpZ01MWWhlcEJzek11VHlmWC91b3hGeWFmVndtemtSREJraEU4Y1dQNzdLK3V0d2ZpNDlaVnRXc3ZnOWF2cm9vSTc2dDc3WGNNZTIwTG12bDFQOXNqcHk2WTZNRHpnRXp3aFg5NWt6VGtJNm94VVMxTFVpRmZJL0duekQ1cGYxVk5wV2Q2SmlVcFFCUkJvNWY1MGtlcGdBWW9NWUc4M3lwbHRPMTV1MVRDNlhjUnhOSzJ6QnpYVUZRcGlIVU05b3hIOTNscWNET3pkM1Jrd0FPcCt1YnJvOFhOZTBtaktSRHFKMGhuck9Oek01VTZNc3lNNmNYZm82VHdKM0xuSm5rZk1HdHdaV09ZVC9GdTd5VklMOGwyOVBVdWM0WnJwcWRQY252Z0N1aXQ3NCt6c3dVcHEyK1Rva3pIY3FtaktzVHNZQ0g5bkYrV3o4bjloRzdpQlloL0pmcy9FT0t1cUhzL0hVdXRVQ25vVG9va1VXWnN0R2pvZDFXVXFPWmx6NHBjajBLU0ZMQm5FeWRkTzFCcGxKWWtjN1VzZ1RPMlQvdVREVnhhUytxR3ZIaUprb0FmQzVIbzg4TmZ5dDZUZmxTVlVuZkJKaVF3cFdpSHJKWTBVaEtkcXFCeC81M1l4dEFYcC9aT3BvNVQySEFyMXc0a2VRTlRlb1NrZHV1NGhFS0pxcW9wZXhOSjd5WXZMUlZIT1Vjc3FEdVhoQUJISVFJaHpBVWlUSzBidmJKVDcxKzJGbThrY3VDdDd3WVdWOStHNlc3bTFkbUhEVkI2RVYxd1pKK2xlMmx1NXlSRnh4L243UGgrai9KTU5vbHhuZGllVSs1VmVUb2hLcDAyN1gyQ3ZwRDRlM2hSNm1vVmtZNGRFemwyN0xORVNlU1FjVHBKbXEyV2RKcmxQM203S1B1c2s3RXpxWU02b2thOElKUzB6VHFhTTRXY29lajNaTVNINk8yOGJKTktGbFhCUU5GZExaVGFvNEIza0pDMGxyTzZOQmFTL2E0UjBHa3NFOUJqYTdPSmxPd2szMGFQcGFSMGVaN29RQ0ZsSVkxckVxMFN3Z3VFVWtvRlFDZ0FURnVMejkzWWVUc09vRnVQVlNzck9LS1NzaXkrMk5JRDFMUTk5N2pWaCthUDJlZFR1dTllVTdFcnFicTJ6a0hld0k0N090TzFjMWUwaXBzb1lGV2ZDSGRYNHo0R0p0TCs0VWQ3L0F6QWdZd20ya282MFRJcG94TVdRQ3FVamxCbGs5Sk9CcFNGRE9XSmV3Sy9nS2x4Y3hvNzUxM01la0VlUjZiZ3lpUnlOc2JFRk5heUtFcmF5TVJVMnFsYWk5eWxuNyt4cnFZUTB5UHlkK1dITmtyM3lIaEZ3aDRJaWVYbVdhNWRHemlBWDU4cURqZW5OUzZ1TFQrSUEralcxM0YrOTJPZ1YxNDRRYU9GanFHL2gwVm1IWXZxRGJyVC9kWUExRDA3bjZkN3VIVDJkNFpSaFlHUitMSTdrYzh6N1kvT2ovQkNWSXluZXlXVlNvTXpsU05yUjRuOHErTXNMRklqQkxyajB4MGQ1ZkE1ME5Vb1QzWlV1Z2VRSXE1amNMSUlERlQxQ3lXZG5Nc21hNWVadEZuK2pxRVVyYTJsYjhVaEFMQmJLem8zOGtYRTM4ZTUrR0lzdWhKQ1FhTmJIZG9nMVZ6WTBTSDFLNTJyN3l3eXZDRDF3ODRldnQ5Qk0rbG9OZnQ4U2dwYldyVFZTZU41SW1GVU1KNjdldVB3Ykp6ZEI5NEJXVm9ib3BsbUQzMTEwc21ScXdUNVgrbDBieitwMFQyaVlTbnhmdnVBc3FORkhxU3FaWWJyN01TZEplV1NvcUUxbE5TZXlDTWxBNFJJWndMTTlsUGIxNm1nR1k4bll6MGZwMXpLYUd5VlNrWGZIa2tNSS9USkJ6R0dNY2pVWnh0ckRxUm41S2FxOTVvbERxOHhnRUY4UmlCREphdkxtVkR5NHVsWStJL1orcFJLSFplcGJwSDNTcnhQNGxOZXQwcGI4NGd2OFJ0VXZIeDBmV3lCZzRtcUlTQWhxWkFGSUpmR0w5NDlWai8xWTd4ZU81d3A4UlljUUxldXFoSEJNUTMzckxtOFRqVnRQMG9HYlBxOC8zbWhEZnVwV0JUZjZmN2luRjVkUFlPZUkrbWw2Yk9pU3NTSlYrV2hOdm5rN2ZRcHZ3ZXlHS2xNT0t2MFVmdEVqZU44WEhMWHRQNjFnZE9ybjBqZHpubnNXcTdpZEdHYjJzZE1YZmMzcFhUdlRDUDFCVGk0NjRIVCs4WTFKMVg1c255aTFPNWd1MlFNelRxWDl1NVJSaVBTQVpCSzhNUUFBdVBTM3ltRlgya0tkcExtRHVJM1RveHlTQ09oSlFpY1BDMDdCOW5HdE1HcDhmQnRPSUJ1R1RpamF5L0IxTk1IblRHWkRZQURWYlg5cUNNcHNzbVdkdjdhSHp6S2xUcjY2VDZQZFFjZXk5cUtuSVB1aC90Y0VxRVRBS242Zks2aks2Tk1Fak9USkpua1NZWjdjdGQ2NTRDL2s3cDdRVWxWeVNVbC9FL1JkZ0VRdlZlK25TNUtwaWdOUmFMblM3dXNLUUphNDlySHpVbHNtMjdkenZBT2dCUStrOWxTSXAxM21EODNyaU5KWGxQVHZ3ZmRPeWRLdDB5Q1NUaEgxN3lpZEFHZ05hTzFnTDJGUlNwOFRKMnh6OWx3OGk0bUNNMjY1WFZhYUltcWs2TVN2MzlsNC9DOGFzNFVoa2dUVUdjZS9pb09najJObkwxdkhONVpSUTdkNHhTNGRQWW9uUkI2WTdVUHRFNE0wRldkY2hVdGNrcFIxYUQ3L0tBNUpYVXI0LzY2dmdGS0wzKy8vblg1UytMOEpsc2ZTZjFNdW5wK3AxeE5BNlV0MGtVRWJFTGltS1FyVW9oTTZFZldad0FkYjFjVEZpVk5SMFhVOFlySjBaRko1SjJjTmk0VzZWQ25pWFA3U0c1NERxQ0x4MTRTZHR1cm94eWp5ZU43a1ZpV1Z4MHV2clVjN0MwUEJjM2xrZmhjVGcyZGVUTUtyMlEzeFpFQkNGaXJTang1WS92QXdnTzN2bzVqekdscml2UEl3dVk3SXhUYnQ1ZnQ1N3dBeUNYRDNnamVXWXREOGxtQi9ZWWlYRWZabEpmMHpGbkszYTc3UENYWlNPRW02bkhhZTUvOTJwVDBsRHd1VGFWSGpPd09ONGlHdW1oU1ZTWjVLYTNYNUhrN3VTM281MnY0TGRnbWhoUDA0cHBQNXBXSzM3T0djN1JwdEtDZ1grUTBsR2QwSnFrQzh1cy8rdHg4U21yeGVOKytNTmtsU2U1OHNtcFdyWjVMR1NlTUsvM2s3K3B0RTRudnhTOVl1dmpQdDU0RDg4eTlaUzdPTis5cnkyUlU5bG85ZmgydTdFeng4TXFvMnZQQ0E5MjZqY05tQWFZWSsxbVpEMkkrTy9hWE9nb0d5YjZqOHoycE5NbGdwbjB4aWIyNDdQNk9OREUwZ1lxUU9HOE9BaTJRbmk4UTV2Zmk2SU9sRHREeXJFc05LZEU0cm1oVGFUK2lPcE4wZnVXeStweklWQ1NwTFhHZFJ0c1lUbll1MlNlUksyZlNVOGRWcjdjNW94TkV1MEZFSW1BMEd4UVNNa1AxZnVFZHROYWxLamloUTFxRVF5ZC9FRHFRN0ppbVlzUjdob3c2RFI1TjQ1a1dNS00weUFJeFZlSjVYaHVLNkVXalNWVTRRRUxwam1UdDZTZVhXWDZBSTE5TE9tZEgvaHRoYWgyR2hnK004cngxaVNOaUdXZ0R5MG92SXdkTDBuc092QTExUGlmQTVPU1FWTGo5cnZQWGRLV0s2c1ZKOHFRbjZNdWdHUUIwSlZiaWtucXRaRWdWMFZYdXBES21WZnVVYndOUU5nRm0yNXYydWVtdWttZnRSd0t4cWtIeDlRWmdkaDBRYWExRUhRYzVRMG9KZFpxVkdXd1J0WFZDWTYwNFRla0hrdyszc1VFZEtneDNYb0NJb0xaMkR5T3lyanZHT2FNVVVVK2FEK0ZYZGRObDU2UTR2OGhsb0ZrNGJsK09xZlpNcm1aTE5pOG8rNWRWTUJYNE5TRHB6aUdkUHdjeFp1Q05iTmNPVEE3NkxYSk1aRTgrWUlMS3ZrZG53RE1yUXJ2dG1IbGVkcjRJWERhTTBRYkp4SDgrQTJJaVczNy9XWnRBdkZvU25RVFpCYnBLbjBKQWtvVEREUDlRM3BkTEdGWFpKRHVvekRRdmpENHJxY05sc1owYW83WW4ra0dTSXdMdzI1S29wSW5YQmFtbDA4OGhSVExvbW82Mno0OU5WbHdrRkZ4MzFpWVhOSkswRXlSZ0t1UHdnYWgrRXV2ZVJONlowR1Y0T3RsaEpXdzRGUlhVYks3NE5HaUZpbytDenMzL3BPdW9jNEFBSHl1dDI3ekhBZmVYTGJIZzVjYnQzYmN6UHZFV1NZQ0xBaW5pQzlLTzdHUFQ0SURqKzBtYi9TaXRJWFRQaVlNOWN6QnlMVktCNjMrSW5oNmlDQWhDbm5hY21wcWEzWkZEeVJHUkNWZmxua21GSTJDbVA2L21wWmZ3c25ReWRScURwTDZsVm5UYkp0clhURXJxK1pxeUxCbG9ZaEFtRUF1UU8wMWxEbURWdFJ1UjdrTlZBaVRQR2FKVFFEMXVKdXlOR2lNSzBKV2NvQlRGTFZFZFRKSW9xbVlJNnAxRGVsWTJNQ0l1VStuOGJKQnNCN2Y5UzNtb3E1ckRacnBwNDkzT3BtU2hIYVVoVEZwWDduTWpBRzhrT2hyNDFpN0hTd094WHhqK3pMVUFaaVdQQ2xQcWdJaG1KbUYrNi8xOEpjb3NraVJLbWl0bGs2YWJxSmJKUGRrN3lkTjFLY28zWCtjZ0lIN3ZNZ1A5TGR3MzYzbFNTaVZqQ0JUUHB5Q211bTNiWDNKSGg0SkdBMlNJenAwZmVhaE92djZrOTlJcW0rcVNCbEtRSjZEQVNJWFVuUWdhbTJ3bXRYSHl5QWJmaGxsRklGWFJTZi9Tc1J5VS92eGcwTU12YUVaRFhnQ0ptNDBxdzhpa2ZUWjJlelFKSGJkVXFTRDhFR0FrRGtLRXFRTVdDanJFdEFKcm41YW04WEZBMUoyY09SMm9IaDZnT09hZDk5Y25QcXdEbTNQN2pra1ZydGZzUkgwWktrOG9QU1NCYnFhOVhST3R5d1NVTWFRWG1rMUFlSm1oTHpoZHNkOVlKTmR1M3U1OFFzUTJVN2ROMkVkVjYwZ2t5VUpmOW1FTU9XaHlhUktobTNuWXJJYStJRTAwSnc2TmRWbFlUMWFkTS9SRjFURkNKdEd5TVl1THRsRXlTRWR5U0dpN09pVzhucXFTRXgwZldlcWZsNkYrTndKOUkybThRKytSKzlGbTg0RFMrSVQraXZVN01UVHQvbFdvOEVhY0E1Q240SUkvS0xDTm5LUHNQM1hDNzhBZXRwNUxvVFF4OTJwNGtabGk3L0RFTyttOFlVYWFnbDB1RkRtd3BKRCtWKzF0enIwb0xSZ2FUclBPdHoxdHhwUnY4ZWZuVDRLTDVIMVI5VEhyVitLb0IybSt5dFh6dFJoL3c5bDZBYk1ldGdnT2FISEJkTngvaUc4UzZoVkxFOXZmcjNVMmVOWkNNR2lvcHBOTFpDQVY3RUQyZisyN0FzN2owL2RlMTl6VUF5ZFp3MFVyOXVoM0pFQUJBZzJUVVUzREgrNXFNUG41Nkw2TitITnNuNzhjRm5MZ2hyWnZBRGo0UTBSRVhRNnRiZW1LZy8zV1BUb3pJcUk4ODg0cDZxRUdIQ0luaENCdUZlNC9CeU0zbkJkZHdoSjgvUjNBNkgxMFZxWW02ZjF6Y09YZi9UbVprcFhtVi9MUmtMcTBFNWZXQXpseklDUm5oQW1ybHA3TDVVaVIrUHdVZ3AvdWx5UmVHS1VJVmdWTllodTZlS2pqeUtBTXpKTDFNMG1MckFueFdVbksrWE5uMThIVXNSRFhVaVQ5N2x4WUpPMzBTVzJtQk01WVJWUzFqWmh5NEdVRnE3UVM3VW1RUkNFTVJ5c0xlZlhhSmlrV2daWXp3WmxrUmMxWUZjQ0JJZUpRR0Y3SEFmUkdnUE9FMm5zcDVDU2JvSDRVOTRKbWxvWE9TQ29jZE4wc2RiaDFVczNTc3hHbGlYNGxVR1NtZ2l6amN1YjVBc1FWNms3RUwzS3BvYXFFL3lWUFRFdE5UQy9CL3k5UDdZMXNQbldvTXl5NTBldnZGVjNIUUJ4REJRZUZXNmlOb3BPYUtkV2dCcVg2QnJvYm5MWVNTTFVDMUdXZHQwZmQ0OWJab0o2bHJUSkVRamZFanhzaE9YS1VnZVM1TnprRFNQRjVZV280alZiUDZ4UWdxYkpBRm5GTjhHczJtYTZwekdSbWZTZjlYeVhNM21DYitFNGhzV3pXWnV0d3NpcTJjUUM5SWVDUVh6dEtlZTZaZDBxUVRiclgwSU55cnRWVjUvWDY3ZzFVOTZYdzIyeFVtMC96cGM0TDBsSkMrYjFubzViMTdnak1MSmNZS2lWMDNtdS85KzhneFd0eWpoNzFMMjFUNXRGU05xK2VyUTZJa0lKQU84NE9iVmVtQnZwQ2dmNkhQQnRVUnlnUGFZb0plUDdCTVVJWjJTVFBoeTNJbUdCSHBsMElkQUlqSyt2bHQzMVA5UXIwR3NQK2Vtc1RZOUp4MEhtdUVpN1RJZjBmUDZuVTJnbi85d0djK1ZncHVUMXFXVTRweGsvSEk5MURkNXJ6VWRTTzZQQzhhaEI1SzV4MUNoaHZPSWJPWkp3eHpoZGdMd0JtT1Q0eURzdmRqc1hmYy9ZVTMyaDRmY3dSc0xPZXNxN3dSMVNkL0NTanlIMjFtWlMxcFdNMzZmV1o0T3k2TTJaYm5OU0IyYk5jVUNWQkd2Q280NVpKQ0ozd09sa3pxYTZCSlptY2pXM2hVQUpLQzJnUWdrY3dGdFRzZXExMFBVZkV4NnpsTVcrNnpxTVZlZlE5bXBpNjdlTDlZd1VmcEVIdnNDV1h0SVNZZXEwQWpOSkMrNWlrakVycU5LOVUxWE9nem1wZGVwcEszbnprOThvWWxUTzZaVW1tTFRuQnlhckFWemNudXppQTNvakUyUkludFJhZjB3bXBrekxHSitVTnpvRkNhUzBselgrSkwzWlduY3YvYXZhaWsreFkrRDNmc2lNZVIxSTFWRnBGcnc1MWJ0MEZ1cVFYTml0VDhoWHVaUGZNVUljeENQUkZkYnFHcEo3bzk1Z3ZyK3BKWkw3SjQ2UG41WDJQdW5rbWFhRDJvb0kzVTNtc3VPakFjT0pCbXErL1dLVEpyZXFYVDZGT1RpWnJ2VXJrZ0pndW9OTXhibnNZMnF1T0NLaUVESjIydWwxanhtQzBaeUpJVVFXU2hlSUlaKy9NZEJaY2RWQlUvMG5MdWFxYkdDUkcwM1dZaFpFTDdST3NOeGFQTEk4TzA2dUdGMEhZVmU0YlBKZXBBWkt0Y2N3Yzc0Q0lNaEV2bXRPZXBGRjgyUUdjd2FYVnVhdWU0N0xyOC9VVnlzRVJRdEx6d0VQRStSV0dPRlBQSXBIR1VDbi8wanlZR1RrU0pTSEJGd3JMUnlBOVMrSG02NDV4aWtHamRLNnFaUlJ1b2E3MldjOVNISmRNYlZidTdCMkxFaVdhZGs0Qm4zUHFuSkZZSjlFR3RDNDVIWEp3K3BnMWw5cVNDV2pTOTZidlhPOGQraDRMZUNpd3N1MFIwOS9ndW82eUFFaFdpRXQ5eitaQjZuMVlWNk5aMEFBK2dqbzl3NDl4V2hYVTl3TUExNmNOM250cStXa2NRRzhFT0JNQTA5bjhid0ppU01SKzlrRTNGRU1ITFZ3N281b3BxKzBNVGdSUXVtYkdKUEFkQ3I5cjZEcmkvd1hxTkloeEJhS2ZvM0lWN2gzdUlha1BuUlpTQW5qcUtXYk9FdVN0aTBhLzVKSTZxVTNhT1VGdWord1prdEJIaW5GcEFLSzNDc2o2RSs2bitUMisvNmxGYWwvRjZqd2hFOVVRb2N3OFR0b0xaWWg2ekJjazlOZW9tOTQ1TFNlYmxLUVl3ak9qUm5kR0tRZVBWcHRSbVJBa25aOURYU1UxUFFXWlVabzRlWlRXR1pOUUd5b3hrSHlNMDg0TlowWVZ2bkJqKzZrOURRNzBobFExV0h2RmR5RExxUWhpTzdsOXRhbmhRWGxCc2F3RHMrclY3TUxqbm1CQkJXQjJYY1l3bzlqWGRPRU93TE1tNUFQRzJmMTB3bVVDb0N1VmNsNHQ2dllPSFZjNDdOUEd6aE16em94c0V0QStaM2ZjNlZrL29vR3U2aWVTV3RhNWgwN3F3TUdqaEFrc1FlK2plK21vN2RIZDhyMHJiVlU5alBhdElKTURzK0JJak1JN0RiUUFpSXRDT2w0aFNaMG1wMEJYSnBxenNQMFlWWG9lSkkydFNIb3Z1VDNvYnlWd29TSUNrUzdvTzVBUWhvWXhhWnRyK3p3QXdCc0REaEZRUk5VS2lQcHJUQU1PZllxVFE1SW5EQ0tkU2lzQzVjWitNR0tLYk83NWtxNHRFQnVDcnAyaHoxTlpwRncydWw4elVFYXVKaGxINnJML0FOeDBmZmY1U2VKUjRCUXBxMUU2UU5SalhUQnFlL0xwSmgydllDZmtQbXRCM09nSjVKMWFSREhEczdVcEFoclFtRFYxbXlkN0IzSGNmVS9hdU5QY1RFQXBaZTV3ZFVNRE1XSTZEcHVrdnlvTUk2RGpXRko4eDZvTzZ2eVJjSzR5UEFBZ3NXSDNBZ0xFRnp6SkdVM3FaMkxBMVBHakNqaTRueVgrWDk4WHB3a01Ba1MzbVBlNVBGZnJCbi9rd1hNNGlHNDVPdHIzVTlaVi9Db2cxUHREbWZqcy9KVTBRVmd5L3FGZ0FwQzdPNE9pR2dkbk5yNHMzb3ZoZDl0Q3psUFNnNTFLUU1vQ0dzT1pCRUJEL1VJejB0OXdpK2d4em5kU0NDODZGbGJQU1BYa09Da3pUTzdSU09POThtc1RUKzB1THVZTGhJbEJhUjkwOHMxNnRmM1lwUUxxM2pUeDZ6RXU1cWZzRnlHZUsxdlpla3ltTW1zNVhIMFF3V3NXK2VxL2owRFFmS0J1SC9OVTZ6ZzdsSUZDNGdKb1B2QWlXWjBDVmEyekZpc3JNdUNZSGdFZ0FaQ3ljU0lLcVNCeHBFQmd0Q0pZR3d6QnhlQUxPSUJ1WGVJUWdkdm1lYkUyVnBUVVIzcWpMdW1PZXlZZ2NoVWxnVWFRN0lsOElDZ0hTU2FWNHNRSTdFclhBL3doaXBOZ1R6NElKVFVyNzNndXVaUnk0eitQOWxVTk82MUJaWjluYTVidHNRTzdxUTBwVENTbEpzeDZ6Q1FnTHBkK3VYZlFpY1Fkb29rb3VZcUR1cFZDVUhMd0NteG54N1JncDhCTEVnM3BFZkdMam5yTVAxY2prWkVtTmFYN3E5VEpqWEFkRHdWVXJqemwwazFjdW9tL3pEdFo5RjFJQnBrNFJ2SHhzeTREZmFmNW01Yk9OYk56d2RzM0RnVVRLbVB3Uzg5ZStTd09vRGVpcWdGT3JxVVY3dnhsKzZab0VUdTFmL0xjOHBqR2k2N2FwUXVQTWQrQzBoYUIvcEZkQ1pha1NIZzVrZTBrYnFMY1Y0R3N6MHpxVUxibWhBUmdoTjRnZTQ3K3lXME9kWmVxR3BhYWtOeXZ1dGl0ZlFNeW9HV1BTaXBMMTVGQ2dVTW1kUk9kYXowWWtob2FQWXlDK04wcCtDalpKSUNQb0loSmJ4SWtXcFIrU2RwRlZVcXk4WXZNeVRkVTI1OXNyOVRJeE9TeTczcnZyQjlPRUxNeU94ZEFJTER4a0w0SE54dEdvMitiT0ZQNU1xY1M2Zmd6ZEhiRjZCY0tUQUhlYVQwbytNWkxPNU9yT0lEZUVIQWM4R1hwakFyaUlPcEU4eTlKc3hHenhDOEpjVk9aTHUwNXJxN3ZoR2M0aVZ3UDRkNno0UzBTWDA2U0xEbTRjaW1WVktvVUt4WDFDNlRKblhPa09PaGg1UE4yQXJPVEs3MUFrZTZITlBFRnhuQ0hPV2hqUmRESm00bkd2cVN4MFBSblpOY1MwbGk2bUlPVDMxcHRPZTlDbHR6bzBQdUU5bko0WnlKKzlUeDNLMnRsR2tLS05NakJrcFlFa2lQQTJqREdvVDM1NXJ1S0xXMmpqazhjeTF5QzZSam1ZemJ6cm4xaHdqQW1Pb2ZpT1FwUVZkL2NmdDMzNzRlQXE5TWFENjB1ZnZtblAvaklJUmJyQUVEaUhoT3hYWjJkZ2h1VlpyTWpLYTJEWkZ3clhOSjk4YUtwQVZuak9xcE9MdUtUeE1qbWYvd04rcGZ5RUpGMFE5OG1GMVhLeU4wNy8vazc1bkcrRWw5dTNxNThRaWpIenpoaEJCdDE3QlMzNXo2WnZaSXYvb1hXNUl3bGdUSGRTMXVTTko3RTlpV0FQODk5aWNHc1NHMVdhYTBPaUc0SWZsREhWWFVLNnp4UjFYUHBmQUVDQjFjMU1GTXhrYjI3MUVKOVF0cWlFQzVtb3ViN2lPdVpDTy9WZS9oeTZ6ck1JWlV3VVJLcG9nMmtxWi9xYkd2SjNxa0QzckkwZk95ZThZRVJOMi9BT2VEMStPY2pGeWJmY09WQWhoTEhtelcwWThmank4b21ISExWSkhFS0xXa3FJbkZUVmZXY3BkVjRpZmZVd1ZDZFgrK3JiZExqbWx3NzI2NWNwaVhWTEhWQ044L1ZLUmtUMmNKZjYxeTIvVjlxcjc5WmVyblJOYUhPRUcwRC9JU0xLL3BJZGdvaGxhbFZDZStBYURzd0I0YWdoZjRTdysrb2FJQ3V3N2l3Y1ZSYTNJeVNPbXRsWElxa0ZBWGdXNS9hbkQwdWh0SW9BRlZ0VXRXUWdrcml4R1hoUnVIOUNaQ1BFZ0tBSkQ1SG9IYXhMZ1ZJU0VLVFRMWEpoYXFIbmVxVWZpS28xZVRQWVRDWjZCV3VpZ0lyZy9MbHhsb2NCSjFiMzFpcUhFQ0FaOWkyMTF5bTVrRDh6V0xrc1NRT25hdERnclR0M2Q3WU1vRU5Oa0hZcEtzVENhQ2psL3Z1VXJSdkRqakVGeEdGTkZIMlRZS1VvazVFZ0w2Y0tHRXlmVjJicVpWbGxIRkUxVElDTEUzQ3ZXN2NHV2tUQUI2cmNXYm54MjNuSlFXVjV1TWxTSklsdmh1bmhRUjFiREs3UlpKRVVZYWtEQThJNlJqaE9hbGNVeGhCSFpndTl1S1k2K0o3N3ZqSUEwZGRxQ1d0N3pXcFpJbXBPWDNaU0lxVXZ1ZjRkaVQ3cGtWRnZIZ091M3luTkJSZmhJTlN4YytZNlVuZ3NMWkR3UjVLREFLb25jT3BZWVYzbjFyKzZNZ2NXSExnRFd6ejBiWW9wenVXcDd1LzNzSmtXL1pSMWdBMXRQTmhsdWpWRWlTdlRUN1JPN1VGS0t2TE5YT3Z4SVdUcXFNY01YS3VUQ1ZMaHJ0T3lHd1ZYRmVqMWVaUzlRMVoyN0txbHhxNm94TndkcjFtMW5qWGM1T2poS0o2cWJhZXYxN2liOUcyQ0V3bWQ5c21KclJYWll5U1NOOVY2TGVPWFl4SUlFS3IvZWFVK3EyMzB2VG9xSnFGaWpUNXVra3VCVW1TeXBjNXhtYlV0aTdqaUpwQy9GMk5yendyTk5NSk9vaGxYOFJlQWt3b1ZCaWltR0N0MWFJaWd3VGc4N1JFb0J0NGVZWnN3anNJOWhzWXF5VTMxOVkzSHZ2dDUxL0JRZlFHMW5FRXdnYTh1L216YnJUMEo0cXFBSW5FMWVBMEhHbG90WWlJaHQzcGNLbjlFOVVneVg0UGtnVlI1WmxWK1B3OUl4Q0E2T0VKbzlTeGRXelVkNU5LRWRYRmNGN1FwaUtScWxlU3ZsdG5VdzNwT0d2VGk5QjZad0NoaU5IRnZ1ZU16TGtnYWRMYW9MTDQrL3NKbEtTTFIzbFVMVVhYT0RRU09VbTB0RThNZGNPZlFvZnpuQ1FtU3RWdHNnRk5jWExkYk5JOG9CZVNGUU1CTUtzMUtBTmhFSnFZUStQblNHUHpqUU5WM1ZKcEFGaXJUb2pjVzhzQVdtamRPcDFmRFBGZU9CR1lPTjltWldJWHNQcWU0NkFva01KNzRiYkJZT25rNXo4OU9Ma3hyV3Q4ODU2N2VYb2pDNkFRTmhpMDlVYzMxNjg5OTh4ZzhiNVRKV004cUxBd3FFQkVxTnMyaExXcmhweFBQdkVpTkRiZmMvRXNFem5KQ3hKSUNQM1B2UitxOXFqbkxuL3gvaG5kNGRPWEhYRWwwZ0dJdHdORW1aY1B3R1NLZ3lraVlHTmd5TUNKbGt2S0Fqa0ZtTllPVFczUnRwNURONjJGY3c1TjYxQTNEVnJuYzBkYTI4VG5pM05vMnpCSm5FTWpBZ0VINlpTWVNsRVVIbXdNR01QZ3dqZTBMQmpHTUVyREtJelhtUng4YWtEQjdETW1uVVJWeXFqVUVFRWJ4MFBRT0JjOVVyckpMaUVWNlZCMXpVc1VGMFI0c0NsQ1d4WHdBdGQxdWtUMUtnMjRTbE1GblU4K2MzSEJzNlB5ZytEM0Y0a0tXNXhIRXFTVU1pSXQyUmdaNzR6MEYwcU1RZWVKTG9FekNuK2VDTzQ5ZS9aajk5OXpFVGUzRDh4amUyUEFBUURIQlU0M1c5Ly81WTJkejM2cEJrNlVoT1hSRUt2akVVWlZpWEZWb0NvS0RLb0tqVFdZVG9DeUlMQnhjSzZCaU12S0F3VjlQd3lrSHdkS0hCZVpsSkNrUmlXL0NLS2hyRC9xcEdCVklRbEk2YzBtY0xGZ2V6Z0NpTkMyUURQMTZ3VjFhOUU0UWRNMG9WNVlqZFkxSUxGbzBLQ3hOWWdkNm5ZSzUycndVQ0FEQ3pZdHJOUWdZOUZLRFZRV0dBbmdMTXpBZ2xoQXpxRllORDUrZjZjR0ZRYkVEaVV4UkFqU0FGWUlycldvcDRSSnpSQXEwT3dLN0M2ajNTRk1HOEJhQXljRkdDVnNXNENvQUZNSlUxWVlqd2NZRGd1VUZZTU5RT1J0R01Qc3czTW9rNGdJam9JdzFscTdHVkZOVEJOTmd0NUZJRmpvSXFzZmF3VVBJUlZGOUpPYXZGUU4zTjN2Wm8ybzNvRzg4ZTZDdlJJWHZnUEhjOUpDSUw2QVJyWjd0cGRzeWFzV2tpVXlSNEMrOHlDNVJMMmJYbkpSa0RoRVBzeW1ZRUk1SHVPeno3LzBTMCs5Y2hYV1d2eklBZlAvRFFPbkJWQXlmKzREQy94WGZoUDBuNzYwUGNIbHpXMDRBUVlGWTNGUW9UQ01FUnRjV0tteHNFaTRmblVJMTR3d0xwZFFGQU13RlRBRkFZWDNuNE1Bd3dpZW5xUW01RWFrVjNmODBEanJJTXplamhIeTliTENTMnhGL08rdDUyTFQxc0pLRGVzYU5FME5oeFpXV2pDMzRLSUZtZ1p0TVlVTUhLb0JnSUVIaHh2WEtFdUhvZ1RLQlF1WlRsRlVEb3VsZ0kwRDJNSVloK0dDd1dEQm9DajhpeW1LVUU3Sk1FeGhZSmg4cElVeEFHdGJDVVNWQjdYaHFGYWx5U3F3cmFCdDJsQ1RnTkJhaTNyTG9wNDYxQzFodWd1MExURFpFdXpXaE8wcmdwMGJncTMxQWxjdk02WTdGY1NOUWVVWUMwc2pWRXNseVBpOVk0cWlRR2tNQm9XSktpUVRoYnhLaVJLREF5TnpqbURBYU9FaWcvTnFXNjRXQi9zMnV0MmxVMGd3YXA4SXdCTFA4ZlIzZFpUNDBsQzZZNEpYVk9NNmppaUR6Wld6SkNuOWFRcm5aQStyWFFvZ2VENHBxcTBBb1JGZ3JTcDJIaWp0cjdYTlpFOGxwSnplTUhBSXdLNFFGc245NVE4dUZtLzlCQy84YjV1bUJXeUR0cW14dVR0QmJSMXVidTdpNmUwdjQwTi9jb0p6SHppSmplY0x5SFFNeDRzZ0RERFpZVXpxSVF3V2dOb0JOWVVBdEpBSktzNFBYQkROWkJpdW1YZ09WeFJvNmluUTd2cWVVSXV5S0FCcHdXd2hoUVZXZkR5V014WlNOREJGQzVsT2dFR0xxaElVUmpCWUVLQnBVWTZCYXNHRG1Rc0drOEJVSnFwdGhTa0FDWFc0aGFGRkl5Q01wclp3MWs5dWEyM3doakZjQTdoR1lJMlBnM0xpUUQ0dlYzVUgvejFJVElLdkZaRENJd1dRQW1BQ0djQVV3SGlCc0dSOFBXa0N3T3hnQ3ZZVHRHM1JXb3ZwcHNYbU5Zc2JsN2V3K2NvT05xOGJyTjhZNGRybEVackpJc2JMaXloUEROQzZCclp1VUJtRHNnaHVXYWF3ZUNsUnNqdW9jeWRUbTUzTzR5VG1YY2c4OVlKSlFvbm41RlJ3d1I2T1RoVVgxRFNvODBWU3YrSGk5ZEc3ZDhCYzFMK1VGY2Z2cUdYd1lEUGM5YUlSRldBSWlMeWRXVmZqZjJGUG5vSnIyMzJzcFVSdkdEamFtQzBocktMOWQ5NDlLdi9nOTFFOHluQW9lQWdoWUN6QXl1SUNYbnB4Z0UvLzlsZnhmZThTUFB4dEZTWmIyN0IyQXdLTFppcG9tZ0lPREc0Y2JFcys1b3NOTkxXVkJLbmtFd3ZFTlo0ekVjTTFOY2kwS0Fydmg4OTNUeVltY09VbnZTR0dNUWJHTUlnTGtGUVE4ZEpLTEx4SHBnVmNHL2hYOEtDNTNhUnYxNkhmYXZ4NjlTZlQ0OVVvTmliRWo2a3VqckJpSDlRS2pXNDJnYnN5ZzhtQlltRjA0eWVicjM4TEVoOEZEUWMwallCcWdXVkF4QUpnTUFmM0xBaEVCVVFNZUFDY2ZCQTQvNDVRLzdrUmJHOVp2UFQwZFZ4NWNSUFhueHZoMmxlWEFEcUJwZE5qbEpVRGl3M1NoUUgyWGloeERxM0xiQVpCV0FmenBYU1RkeElobHlaT1V3REI4WkdkRTJlaklBQW1PUjBFRXZiVlNYWXAwSTNmaTR1NmxOMHIvS3FCVkNrS1BuY1lpQjlYNFRDdTZxeFN1OWFDVFlFLytlRHBuNys0dW9TTlNiT2ZQeXJTMXdRYzdjeVdFTzdsOXRzMmg5VkxYNkhCYUJ5MFRjWDFndytmd1F0UEd2enIvL0ZMK0s0L1N4aVZDMmltdmpOc0JPUEtxekVZdWVENlRkVk1pQXlTaGFNaWVoUmVsSU56SlVRWVJjSFI2d1V4M2xhQUEycC9xeGFBWTBZdE5tdDVUdElSLzJFNG9YWVFBREFuNzR0WFk1SWRwa0RWQUVobUR4cS94UjhIa1BsK09BazdKTERPS00rNmpUR2g3NjVieUNLcmRXNU00TUJoTlpoTUdCdGRoeEh5Um5iRG1OYUU2UlpCdUFDWVVSYUV0NzUvR2UvNE5zSFd0UzI4OUtXWDhmSlhOdkh5azR1NGVYVU5xNmZYVUM0N3NLdEJVc1RsZ04ybXhVN2RvR2x0WEN1cGRTSFlwVFFIRFJueXpvRVVRR3FEdHk5R2NGRHlEQUlVVXJWZEtuNU9OdlNkSUdJalJnUUF5UGNQUkpGcCtiY2wwUWoya2lSL3Z5RUNIZ0xBZXFudTVRd1lGbUNEMWdyT2pFWmJhK3crWWpkdm9yU3ZKbThPQVRpQW4xNFQ1MjQrek0wUFQwYmpuOTl5d0VEOGxoQVdnaEVEYjNucmVUenpqT0R6bjNvU0gveFFqY0tXYUMwZ05teSs0SUJrN3ZzSmxQVFRNRW5VS3hRbXIzT0o4OWcyaUg4dG9nM3BUdXk0VGhOc3AzMVRBaFNjZ0lMVlAwdTVmd0p3NG14Qmx3N1B5ZTlMUkFGQTFHa0x3M3NSSGFsMHRBRmM0WDRLVGpXOEkzZE4yMzNvc0lpMHZwMnFnbEFSSmhFRFZBRGkyeStPWVd2RzlzWUE3aWJEbENNODlNMkNSNzdONHVvelV6ejNoVmR3Nll2WGNmWFpOYXljT29YRkZZR3pEUXd6Qm1XQmhVR0p6Y2tVVzVNYWpWVjd3dWNCT1NhMFlYTk9YY1FWeWFJVkpFVThpQ0J0MFU2SThYVzVwU0wrNGlpTmRJempNQkQ4TnV5ZHRjUHcydldkNWNjRGJPSTZJYWs3Q3JIazFYcGo4ZjNuMW43NS9XZlhtaGUySnAyd3NmM29VSUJEQUJvd2hzNytrNGZONU5Fbnk4WC9WSnhENFJ4YThRMGNEQjBldlBjK2ZQa3pXemgxejR0NDVCMXJrQjJDYlRVd1ViSy93WkJPZktaRCtmb0pKT1dBcEhpbE1OekJHSlRnT2ZISGNuQWdIdXMrSHhsQWtkMHZySHRuaTZaRWlEa3VnSWJmNjNjS2dOTmNkMTBNWmErMkJXK0hWcVpCdENoQ1h6ajFNUzR3YTF0Sng2a0NpTDE2UlF5SUFUT25CVXlFbmQrNDlNWnUrR2N0WS9NNkE0NndlczlwbkgrSHc4MVhOdkRNNzk3QWx6OTVEYTg4Y3habjd6c05OaFBBQ2NxeXhMQW9zRGdZNE1ybU5uYW1EYlFZWTFSUmlhSkhUb0M0SGFJUEN0RFVhb2t1OGJpQTYvejNhTldKZHdXUXFNMlNGa0lKcWVRdWtCYVdVMTVYdmdnZjJDNTFnNE4xcEEybFJmYmw0UUQzTDQvL3dkUmFGVnl2U29jQ0hOOGhZQUxHUWx2LzVZdkY1TDFmNWZIM0R0RmlHSXhlWngxT3JRSE43dHZ3Mks5ZXhja3pON0d5dkJvOU41MmtMZkpxa0w3bmxQNmFkVHpyV1FUTm50NUtrQmFxZG9XMkVzZm56dDVQMVNtZDlDN2FIU0gzaU5KaVpYUnRoa210MHNEYkhKbUNRUklxK2VkZ1JsVFZGVkQrK2Y2bE9XdERYU2FPZFFGVVlxcUt3bHlDek1qM3pJWDFDRE1Da1FIbnU1eEYyOGZDT2NEd3dOdVBYQUpNMk5sb3NiM09HQ3lkeFh1K1QvREFlNi9pOFU5Y3dsYyt0WTZGNGIxWVBWUEJ1aHFHR1N1aklSWUhKYTV1N2VLVmpVM1VWdFUzZ3BDWGlBSUhzVjV0YThURzZHNGZXNml1YUFGclVscFlwMUdHNDIwOGVGVmJBYVl6SUo3RFFlSUdEUUtJcVNrNkg5UGFuR29PczJQdFAydzFMZDU1K3NSWHpvNEhIL25pOWUxT2xNcDdzRCs5c1h5Y0E0Z0FUSWh4MnU3KzZmT29YMnhORVNzL0dzT3diWXR6NTRjdzIrL0FwLy8xQkZaMm9tMEN6RTVrRjhUNlh0RGsrU2Q3MnBBZFQ2cFVUaHhjcFRhQWF2WmNWWG02YW1IU3NpbDQyVGdrOG5ING5wOGJERlhqRngrWkRCeEo4SjZKZDhpeGVPZEZWdVVtVDFmdzl6V2hmUzYwTi96R0piZ1lnNmdJS1JzREdGNUFZY1lRTWw0Wk5CV01HUUZjUVZDQ1RBSERBekNQUURRQW1RRUlCWWhLQk5HRzZjWVVWNSt2VVMyZXhRZi8xSVA0NWg5cVVaNTZDcGRmV0VkYkQwREd1OE1OTTg2dkxPTCtrNnRZR0ZTQkNhVTVBQ0RZcWhRWUNLQXlBQUFjQll0SXNpZ0ZQU000SkNpN1dhNUZKSklnWVFLejhXOW01bjFyckpyYVhHbTYreUltM2drbElOeTNOUDdJUW1GQ0Vodkhmd2ZSb1VrY0pRZENJN0o1b2QzNnRwMXk1ZWxOSVRNS2s4cTdKM2R4N3dNWDhlUVREK01QZnZzcHZQY1BEV0NFWUcyU1BOMEppNHhUNzZWYzBod0VwaTdsTDZFN01FUU9LVXd3M1RNOVE2VlhxTyttQzM0RUVEdUljTnFxbkx3cUVOZ2lKSGlpd2wxaVdBNEJXU3hjS0xCSEJESkJxb2xPT1UwOVpqQU5BQ3JocUFXUkNSN0l5a3NWMTRZQk14QXlZSlJnQmtRTXlCaXdGc0Z3Tm95emQva1NGd0FWSUJMc2JyZlkzU2x3MzZQdnhQbTNiK0JMdi9ZS3Z2S3hiVFE3WjdGMHlxQjFGa3lNMWZFSXc2TEV5eHViZU9ubWxzLytEUkxUMnBRdXJXTnAxYjBZM00raS8zTmVsUlpZV0dtZzIzdDRnWk0wQlkyS3owRkVRVVhPV0c3OHhWQlM5VVNOSVBJQU1rRmlPUUdXcWdyZmQrK0pqenk2TXNDVjZ2WE1vZHNBSEFMUUVvT2QrK3E5N2ZaM1BzM2ozNXpXTFFhRENnU3Y5NDRHRFI1ODRKMzQ0c2V2WTJIcE10N3h2dk9ZYnZ1SkY5V1lhSnZzQlU4T2xGbWI1RFhiUjJsZzk1SnE1S3B5emFaQ3E0dVpzdlBEV29jaDc5WkdDSEdoOEZiRUFVd3diSUluMElKTVh0OHRUU0FLU0dHMWI4U0N1QUtaSWNSYWlLdkRHREFFaFZmVnVJTEF1OVZaT05nOEJNQjRGeXViNUlIelB2ekFaVXNZZUxjM0d3N0dndWJmQ3lDRUcxZGFWT05Wdk9mN1YzSDZ2dWZ3dVgveFBLNWVPb2NUcDhlUXNvRjFoUEdneEgwblZqR3VLang3YlIwYmswbDRMOTJxYUFpakdqUERISUxVOFRrM2ZtM0hMMzhtcUhTTElISjRmMGxsMHplWnZ3OTBudXQ1RjBjWGs5bzczcVZPMkcxYXZPM2lxWmUzbDAvOXE5K2F0R2lsR3hGOWRwOVpBdHdHNENBMHNDYkd1SjErNHQ2VHA3N3JHYWsrM2w1L0JXWXdCQk9qYVJxc3JBNXc5dVQ3OE5pdmZncHJaNjdqOUxsVnlEVFlOdUUreVFPR1VMY3I2YWZ4V1RQNmYzNDhsMkNJOTh5dmRzR1cwcHVxNjl0Rkd5WEdxckZ5cndUb2tQZms5VzBSU0VoRzh0bUlpQ3ZkRElhbUQ1RGhjSzlrdjdXMTlkY1VCQlQrSG41Ump1R01Cd0p6QVNHR3RGTXZ2WW9oQ0F5aEVnanhiUlFLa1d2VU1BT0FLMENtQWpnb0t5cU5IQVdidy9rejFTYUwxVWtLRUF2cW5SbzNuaTl4N3UwUFkrWGVxM2pzbDYvaTVkL1p4b2tUSnpGWVN1clN1WlZGTEE0cVBIWDVHaTV2YnZ1SlNZdzJiQmVyTmc2am0wRkt3a0dlQm1lQU1DQTIyanRNSmxiVVlWVmJCYUh2eWV1V0JkWjR0U3p6Z3VyQ3JYbzhpUU9EWW9PaU5IaGdkZkZ2dkxTeDVhN3VUUGQ0MDc3cmdEbCtxRFpPVGdSZ1Y0RFZyV3UvZHQrby9NSEphQkYyT29FUTBEaUhuZDFkWExoL0NhdkZOK0pUdjB5NHVibU5zdUtnOWlSdlZncWRWMXNnUFdQV0U3WWZKWGZuZnJTM1RqV1FQRndwU1Mzcmw3cU5neUhzN1JBS0FOR3NWWjgzTDBRZ05uNmlrOEJ3eU9maExNZzFPRGFvQU1CK2tZNVFBREtBR0cvSEVFWVFIb0hNQ0R4WTlmL01ZckJUU2hnYXdKZ1J1Qmg3NXdDUEFDcEJQQVNiSWJnWWdua0FsaEpBQmFEMDloSGc3MDhGQkFhT0tsQXhBSm14djZZWWc0c0Z3QXl3ZWRXZzRMUDRsai96ZHJ6amp3THI2eTlpKzZwUExoVDQyTDZsMFFEdnVuQUc5NTljaWFwNXROc1FaTFBrNVpyMEdBRFIrdGpKeTBxU0lnNDBlRlNqTld4d0hLUTZuUHIvc0wzOEhvMGl0U09HMkRqQithVVJ2dUhFd3QrOVFBMGVHUWplVW5YL0hVUzNSZUtrdTVkb3RqYXhiTC82QytjdnZQVW5ycTVYZjFPMmJnYlBDOURXMjdoNC95b2VmK3JyOGNsZi9sMTgrL2NDbytHaTU4NFdYdGNualh2U2lUeWo0ODdZT0xuS0ZsVUdvZUR5RGFFd3JHNWx6NUVTVVB4ZjFrVllwTVExOVdRQnp0dVVXWEg0S05rUVBEdE1NWE1WSW9FUmhNVk4rTkszVG9NZEJUQUZCUnVwZ0tBRUZ5VWdCcUFTeklOZzRCZGdMcnpKQkFNU0F5Y3RpQTJJaGlBdUFlSzR5RWl4ckpDdWtTa1hMbng3eXhJRTQrMExZMkNpQnN2QjVnbGpLQUlXWDROc1orTFF1bVc4KzN0T1lmbmM0L2czLytoWk5LL2NnN1d6RmFpMW1EWXRCb1hCVzgrZXdxZ3M4ZlRsNjdpNU8wa3F0bGZPUEhNTTk0NmFnbWhDdGwrNDFqZWdxUVFFZGUwSG9CRjdXMG5FMjVOQlFWTXdSZ3N5T29EODJKVEdNenJEUHZmR21lTHZmZmJhMWcxcjdSNzNBM0N3eExtOXdCRkJPeHpEVEhady8rVXYvNHhaUEYyKzFEUi92U3dLY0ZtRm5KSWR2T1doaTNqOFMrL0U3Mzc4cy9qVzd5MVFtQUZDOWFMa1dZblNKYWs1K2ZHRDdCc090b1c2a0x1MDF4bkFVZHB4VU5HUy9xeU90K1NLbm5rK2hXaUZZRWZGU3lsTkFHTVM1MHNwMWc0aUpZd1pRYmlDRUlPcEJMZ0MwUkFBaDFTTUlkaFVjQ0M0ZXNlclBtWUVVT1VSSzhhRFZoekVGSUFDVFFCeFd0N1ZlTUF5b1dBVDR1dkVMNkNLMXBsR2RCbERkSnk4TjgvV05XNWNLbkgvMTc4WDFlb0FuL3hiVCtQcU0rZHc2b0VWd0RWb3JIY2MzSDlpQmNPeXdCKzgrQXF1Yk83RXNTY2tkWm5pLy96NEpudEdEZjRrUjVEWmxycENveHFCbC9TcEtoS3B5emw0UTJQeVduRDArT1V4eHZLd3dvTkxvNSs5dmp0QmExM2VtTmVrMndzY2VLN2lCbU5NZDNady9zYVgvdXZOQjk4N3VkN0lmek84OWlMS3N2SVJ0N3lEUjk3eVZqejN0T0F6SDMwTTcvbk9reGdPRjlCTUxjUlJDSXZ2T2dsaUROaU1tallyZFR4SjhDd2x5YUZ1WThsU2h0WHRyR0htMFpVYW51Y2wxZDQxb09nQkpOMzVUSU1MTTVCazdmRnFDSGxyblEySVJqQVllTTVaakFHcC9HSWxGd0FxR0JwNEJ3QVpPQmpmdm5JSmdJUFFBRVNWbi9oVWdnc1RJZzRJQkFOeERHY2M0SnovSGlJSi9LcHRDVFlVdUwyQkl3Y2k2OVdzRUhKaVRKTEloaGpFRHM2MXVQcmlOazdmLzNYNGpyKzRoRS8rM0dPNCtteURFL2VjZ2tNVG1BZmgzUElTcXNMZ0QxNTRCYzlmdnhuR1FzMzBVSjRKOEpxQWYwUWNOM1dDK1hNRUhPSnhIQWdnQTliVWdDQzlYREQ2VlZVR3FWcG1vRXd2Ymx2Q0lYS2pxVDgvYk90L3MxZ3ltdGRhOFp5aDJ3NGNBSUE0MktLRXlCRDMxQnQvZThGaWRJWDRweHd6eURrMGpXQXduT0NCZTkrSlozNi9SYnZ6ZVh6RDl6R0cxUkJ0SGFTQ0prN0JyKzNvMmtuZTN5NklOT3pEbTQ1ZTR1U2hMVXJxUWZQWHhCSkdEaUdXeklIWklMZDlsRHBSQXVKZnNLR3dWd3g3THUvUDR4RHhiQUVNZkxSQU1HY0ZCV0JHWUtuZ2lDRmNnbENDWWJ6SHpDeUNVSHJiUndRaVU4ODFlZUFsalJtQ3FJUUxhcVlIQklNY0F5aENBQ21EQ283dVhIRU9YSGhUWGV0RytPNktWM21jajdoT2k3OEVzUTV3RmpBRHNCR1FiYkQ1d2c1TzN2OGUvT0gvNnpsODRoLzhKbDc2N01zNGMrRU1VTFFRQjFoWW5CaVA4Tjc3em9PSThKV3IxMkFSMW5VQnIxQkpxSlFUMXFtaWtFUHlWM0JVUFZMTW1RYmdjT2dEcTBSU0pDRjUwS0xpUmo3QXN3TEJNdVBxMlFmK243OUlGWnE2N3FidFovUi9PbUJLdnpuQUNXUUhJd3d2djREN1NQNzZ3bWgxNjZ0TiszZmdXaFRWQUcxclVWWTd1UGZoUi9IYzQ0VEgrUE40Ly9lZVJGRU8wOHB6Sm5VOHFZVEliWm84TGkzejBEa0NHWlBaS3JrVVVOR3YwWlFTWDAzWEpaMnBHWlFpRy9SODNWQlhJR0FoU0dZSCtYU0NJUXdQazNlUS9ab01vWUFyQmlBTS9Mb05NNGdxTUMxNHB3QktiKy9CQWhJV1BXRUFIbm52RjBKa0FCamlXajlOaWtVSUU0Z3NPSXlESDQ4Q1lsUnlDMHhJS0dUNEJWcXhmaGI2QmNJV0FBT3VCUmtETVlNMFJtWU1TN3ZZZVBrNkZzL2RoKy82eVQrS1QvenRqK0R5SnkvaHpJTVhJZHpBTUdIYVdpeFVGZDUvL3dXVWh2SEVTNWZSV0YzWDgyMDFYTVFpSStxU3p0Tzg0eWRLTVdqNi90UGlnZG8vaEpqeUdxNWhjRmlJOWd4cm8yN3c5UmRQWC8rdTl6NzA4OXRXQUp0MmRudTk5S1lDaDV4RFV3M2hJQmp2M1B4WlB2MldMN1hEaFYrVlY1NHpwaWpRTmkwRzVRNGVlT1JkdVBSVWljLzh5dWZ3NkllV01Dckcza3NTWWlyVTREOW9ZVFNHbmlmWW9DZzVsbEVDdWs2RmtQNFREUHp3NG9JZDQyMGtYZEhXODhKQ0ozeElUcXhCRVBScWNRSVNCeXJVRUhQZXU4V0xIbFJjd1hFUjdKd3hZQXhJT0hqVENFd2x1RnFBd3hLSXk5RFdGa0FGRVFOMjhPczhRVTBUT0YrNWhRZXdoWUNzOWRjWkErSWlGTkJ3OENhMDc2ei9IanhUMGYzTElMWkJSL0xQQVRtSWJZT2pKcmpkeVlGb2pJSVg0TndVMnh2YldKQWwvS0VmL2FQNHRja3Y0T1hQUEk5ekQ5NERKdzJJZlBablpReSs0ZDRMS0pqeCtSZGZ3YlN1bzJxc0xtMm9KT3FzQWFrSFRqTTdWZElnSG8rTHhrQk1pZmVDUjlkc3ZKckpZUVRLd1JqbHd1TC9IaTkrRlZJM2Iyd3V2NW9yZHo5NitpLzh3QnQ2VU9laEFHemJvRmxjUTMzeS9BZWZ2M2I5dDgxMGdqSlV1YXpLQW5VenhyTmZlUUtuM3ZWWlBQb2RTMWdvRi8xN0pvbXhhUjJKa1VtU25IUlJOY1dVWmUwSVVzUGJVT3BoVXpCeGZFWmF1L0c1TC9xN3YzOTROZ2U3eG5vajNLL3BPREJLNy9reUk0Q0czalhOUXdnWEFTZ2hhVThZeEFPSThRdWFiSlpCZzJXRWZjTUJORUZWWllDR1h0SVlnRENNYmx6bWdkL1dVYXlmVHV4RGNBZ2M2Z080Vk1ZcWVBaEJIUEtEdkZlUDBNQ0ZWU2lLa3RtblI2UnQ4NElIa01xd280QkZheHVNVDV5Q0dVN3dLei8xOTdIK1dlRGNJdzhBYmdyRERPdThSMHNnK053THIrQ3hyenlQU1ZPamRmNWFFVUp0V3pncmNHTGpnbWdlSVoyaUJqSU5vZnRDSTY5azhqbFkrbzROTXdwaWxPSlFyNXo2OUkybGsrKy91YnNiNHdBUG9rLy94bS9zZS94TmxUaEtEb0NwQmhodFhnUGZmT1YzcGlzWC9zamxvdndWYVJzd00rckdBbVlMOXozd1ZseDZzc0lYNVRFODhxMFd5d3NySUNzZDlTbEpuYTd0NFgvYkx4MUFBYU9lTDRyY3p0bWswKy9uTmFQQ3I4MkljeUJ4aU51REYvNmxXdWYxZEVQd1VlRTBBTWlBVEFXdldSc3dsMEc5cWtEc0FRRG5mTWdMRHdDekFPWUtUQU00bTViMURJM2hLQmpSWmhENncxRi9aK1B2UnhvWEYydzdBUVVWalFEbjB4ejhBbU1JUk9VVXJlRVR5VXFmMWszc3Bad0l3SVh5ZFI5dkZ5U1hNUldZR1cwemhURU85UTVqWEozRmgzN3kzOE92L09kL0Z5OC85Und1dlBVK1g1T0JDSTIxTUVSNDE0VXphSm9HbjNubU9UZ24vLy8yempUV3N1eXE3NysxOXpubkRtOGVhNjdxR3JyYjdnRnMweVkyTm9OdHhHeUNNZUFreG5FVUdaRkVDc0tJSklLQWxJQWc0Z05pRXBBQUg0Q0FtV1JBa1dMRVpEZkNiUnZzZHR2RzdxYmRjNDFkdzZ0NjQ1M08yWHZsdzlybjNOdU95OWlQdHJ2YjNDWGRxbnFuM3J2MzNYdjIybnV0Ly9xdi84SzduRkd3UXFtS1JSWlcxYW0xZlpwWGY4WjlUbmVUWnpoVHV1YWI2NjVCTjRNSW1jKzVvK3QvcWNqNlZOM1BQVVJyWHZXNU9IR2VZYXEwdFdLanUvU3RqMnY3MTMwNVhNcWRVWE15N3lETTh2U0Y4L2lsKzducmEyRnRkY25RSVNJaFREcEJmZXJVTkgzOWxCTm9uQS9WbFh0TnZUdHVNcXBqN0hpVEJkQXM4M1hYK3hpOWNjWUlyc004UXIwL2VndWpzbG1yMm12dGpCMmdRQ1dtM0thTDVwMFVxWHZ3SFZTNmlHL2p0QUp0RVNnQnhidDVJaUdGVEZsS3JLMUc0ektqM2tSTTdFTmNudjR2SUVURUY0Z3ZySUFZZy9IVVlzRDVIR0lnYWtndEJ5UWdRb25pb0t4QUFxUWN4THNpMVhkOCtnQXJrSXh4TTU4amhJcTUxVlg2R3cvelp6L3hxNVFiQzZ3Y1cwZEQyWHl1THJFWTduL3lBaDk4N0FsQ1ZhRUlvMnBrVTk1aUlNUmdqdk1NaUZvbmI5UEVmWEpObUNZQ0diNkoxT3RKNUE1Qk5MSzBkdURxUFNjT0grbkVzaXcvVTIwODJmZit6cnMrN2ZYbjNuRUFGd05TdE9pcjNIbzF1ais5N3RzbjIvVitJMHFJYmE2ZjM4YXZQc2p0cjkxa2ZhbHJSRWVYQ3FXTVQ1MVBQU2tzL0VvcWoyN014SzVOWEtyUHBQenBVME13Qzg5SUNGN2FzVW5McEQ2djA4NHRRWW5pSVlFQXpyZFFOd1BTQWhjc3lZL2VkbTNmdGE4MUEya2pQb09zazZLaE52ZzJLZzYwc3RjbVM5UWRFSjhEUHIxSEI2NEFQTFZRckJON1hyVVpoemhmNExLV29WY3hwTkdIbFVIaDQyWmIreHhTL2lPb3lYdUoySW1vOVNTaE9oYzBNUlQ3ek90YW1IVnNhZ2dzSEQxSWIvTkovdVJIZnBucWVvZmxvNnRJQ0UwdWtubEhGZUZEVDU3amc1OThqS29LcUNobHFJaGFUMi9UMUtkVDM3VFk1RmwyejhmTWNpZDJXaGtJYi8vMkx0MDdiR3pIYnFVY1BYRGdyZXRMQzcrNVBSajlnODFxQUQvL3J2ZDgydXZQQzhkUkVWd0l0RVJSa2VLY3RIL2xvbXUvdFNOWWtnM2tlWWZOamNpZytDUW43em5Mb2VPQzF5NCs4OVQ2V3ZhSVBCTTFxeW4va3loYTJyMWNaTnljVnA5R2t5aWFUUmV3L3djeXl4K3NEdUFtbnN2eUdTWEgrUm1jdEZCWDRGM0xrQ2dLUytKZFlUbUh5eEt2ekZtNDV0cEVTVUlaZEZCcEc3SkdaU2dZdHRCRk1zUmxxTXRRemROSkJsRnJqcDJwV2JxOGd5TnZjZ1MwcmsybHo2ZEdueVl5Q0dwWWZRTDIvOVMxWVJ0UWpxaEhDVGEwUzVXNlBnVEJUaWlVV0FrTFIwOXc3ZkcvNFU5LzlIL1NLWTR5dTl4SjBsU21qT1BGYUM4ZmVQUUpQdnpZRXlaeWtvUkNxaGlzQlp6SlFOdmVvNFhXZHJVV2NxbEh4dHY5Sm0yVXZqbHR0aXZseGV2TEY5NXd5L3JSdlg1L3doay9zNzNoblgvMWFhOC9Kem5PcDVxb29zN1JCekowZEN3Ty9rMFdxc2ZQKys1Lzk4N1JSZ2xod09KeXp2YjEyM25xQTR1RTZna09uZGdsTHd0Y1h0anVvV1Bnb0w3cEp2OHJ6N2hHYW9XZVRDNzloRTd3K0lNM2hXWG5iSW5GQkRBMFNXb1RjZ3RJam5jemlKdEZYTXRPQlZmM3ZCU0k2eENkaFhET2QzQ3FWTkRVYlR3dTBXYTZhYk9vRUovb0w5alBpL2RKeU5CQUR5ZDIrOFE1bkM4WTE1bzhwRDRvdENiZFR6Q05WUkRua21Ba2RxbzFKOGFZRCthazFtZE9NTDhyTE4rSmdEcGpWU3ZwTThxSmNVQ3N3RW1CejVUdHA2K3hldVpWdlBKdEYzamZ6LzhmMnJPM1FUN3VraTBUSXZubHAwOFNRdUNEanp3SzFEMUlOS2VUa0lvN01ybXAxVTd5VEhoYTBzbGpJUm9Kb1JaOG52SEcwd2QvOExVbjF0anVEZmU5Vm10N1hqaE9iUUpVS1dZNEt0V1BoZEM3N3pLZHZ4aGtPWVVHSkpiTUxnbDU3eURuM3o5TGIrTXBUcjdrS2gzZkIrbVFlbTBuRXZ6eHlWT1RQZXQrR1NCQnlhNUIwR29XZ1owNjQvYm9xQkZOdlRvMitpN1NCTldhSTFrNzdjUXROQ3R3V1Fkb0lWRWc2NEJ2b1pyaDhSWldTVUdVREMvZXZFQmFpR3RiYUJWTDBBcmpvN1dzdzFOY2sraVBlU1dHT2tuV05TZFZaK3dCVXkrbmx1ZXoyQTVvYWh5V280eEZMbktRM0FBUDBYU0toZlFlTThBbkNZZUErTFpCa0o0RU9HZ1MxcWdkdFcyL0IrT2EyZTdWNjV4NjNYZHcvYWx6UFBqSG4rREE2VE5vTE5QR1pQZWxrMlc4L014SmJ1ejErUHR6RjVJMFY2MHVWR2VVZ1hGVVVlZXlZNWhhRzEwSWFSQTFVREluYkpTQmU0NnMzditsYXd1LysraDE2eHY2YkczK0p0Yy9iK3pvL1ZvNjhPbmhPT0txdjd4VDkxNDVXL2IvcmhlRktvblhGZDBCQzdNdGRoNitsU2YrOWs0MnQyWVpETGVJbFFFS2pWZ2VURURKNmRScFRodHBuTVoyV21NTnVLUlVNMmxXNHFoWjBHbmpVMmY1aXVTSWErR2tTS2RNRG1TNGtFRStnMmJkUmhzTTN3SGZKcXFnNm9FWkpGOUE4alprYVE4THBlVTMyUnpSZDFQYlFJNnFTUnNwdHN1N2VnZDJEaStab1ZBYVVxNlNGcHY2dFBqTkFlemZlZm82VDBDQUVWREY1eWladlU5ZkpQSm9oc01iWWw2MFVoK1B2YTZ4dkQzcUNqc3BpZWI0ZVlIbWhRbkFpVWMwVXZZaVgvcmRiMkhsOWhtMnpsMUNmTmI0czNPT2ZsWFN6ak5lY2ZzWmpxd3NNUm9OcWNFZW1tQnQ4dC9qK3l2cGorYVFTdmRRc0J5b1FwaHJGM3pkeVVQZnM2T09MWFhzOGRrL2JtYlBPOGVadEJHT0Z2cUIyN1QzSmNmQzdqc0dJVEtRNUR6dHlNS3FNRGkveXVQdnVZMHI1NDhRL0pCWTlkSlBqMDhiVGF3RGNUVWJ3Q2NucVpQYTJDQnROWEpqcDVDQ0JMeXZlendBVlRRYUFPQ3lHWU9CTlFQWFFYMGJUd3NYYzhpN0lCMmtjZ2dGenMraHZtTWhsbXNoZVFjeVUvVkVjdHRDVmRCOEZySlpheHVRUExVYW1DTTB5VEFPNTd2NFloN3ZNcFNFaWpYTEp6RWZKS051VTVBRWgxdXZqcmZGN2t6UExtS2htL2dNeVZyZ2NrVGE0QXZiWkx5enZNbmI5MWgzcWNORzFHWWdna3FPSmtkekRTbFZFSi9SMzc1T1hoem1LLzdqMjVEWkhyM3JleUJwYWxzUzl4aVZKV3V6WFY1OXgrMHNkTHYwUjZPVVN5YW90Q2wveHRTcmxFSTRVcWdvZHVvaDloc0lrSHZIeHJEa05VZlgvL3ByMW1ZZkNJTStDd1RtUDRmSHpleDU3VGdBUTRSU1BFZWxldk50Y2ZlTldhZzJlcVVKUUlSWTBab2Y0c3BaTG4va0xzNTk1RTcyZGp2ZzlnaFZDVmp2aS9PQWpKRTFzM0Z4Yk15SUJpY09ueG1ac1JiTHdHSDFGNHovNWR3czNzOGl2b3U0bG9WaWt1UGNETTUxSU84UWZBdU56aGdEeFl6VmFCUWNMYnhyRy9hakRtS0dCaXR1UnQ5RldndUliOU1VUjlXbjNkTnFMMGlCejJmQTU2anpJSjRtMWs4b29DWlkyalpuMTJ6VUloNzFIcElEdU9aaGkwNFM1VjZjR0l4T2FuN0xaa0F0cEt2N2QwU0tWRG5PMG5Wdko1akxVTWtJbUdPQkloNTJybDVtNmZoWGMvZGJ2b205N1F0MmdxWTdJU204S3F2QThaVmxYdkhpRjFINGpGQ2FCaHBTdHhVNHhObG1NNlowMWpVM0F4czh0a2w2Si9US3dNbkZoZktOcHcrOUdaUk81cG41SEI4M3MrZFZqdlBwek00REM5MldKZjVocTlwKzk3bTVBNys2VllidktFTEFhYVF6RjZoR3lyV1ByN04xdHNPUnU2K3dmdVlxVmR3aks3dTRQSVZZNnBvK2t4cTZub1NuWGMyS0ZrV2NIMFBQQWNRVjVqeGVFRm80emRDc1NDZElia2wraktndndNM1lqUzQ2QmpFamFCVnhVdUI4aDBobWpwTVd1YmkwZ0tWdFRBZTEzODhZQldOT2wwczZBdW9LSUNRa0wwc2hXZnEwRW5yUVZOYlZXZ2hRTVVUUFoxQnJLeGliczM3MzlyMXFyMnZEbWtwYzBVV2xUVDA2b1o1K1JpbzQxalVjMEFsWnFvQklrcVJVVTlVSkF2M3RLN3pvZFcvaTh2MFBjLzc5NTFnK2NZaE1rczRhVmxndXE1SzdqaDNoOHNaMVB2VG9JN1NkNVN2MTJUSTJxeHNsYkIwUmwrU2VYQXJEaFdFWnVXdDk4WWN1OTRmblBycXhmVk1pNTJleTE5L2srdlBlY1NadEQwY2VocHUzTHM5LzU4WHJtMis1UEJ6OVNDamF0emxWeEZmTXJrVDZPMTBlZjk4SnlxMmpyTDM0U1Z6M0xEcks4Rm0zbWVBbENYRnA0dVNKZ0ZrbHNhSHJ4alBOeHIweHpzYVlSUEZFMXdic0dpblJqNzdBWmUyRVdyVVJQNGZHdWhCWjRGekxHTkNTUWlhWGRPQmMyNlNhU0F4b1VrNHY5Y0t3YVFVdTYxaENyUUJ0cEVtWUhlZzQ3SlQ2RkhLMWpyTFlheWxXajBsb0lUcFdLV3VHTzdvRWY4Y2RhOC8yYldORzF4OFF4dksycUZiR0oySHplMVNKdFpDbDBaTjJpamtnbGtQZ01MZC8wOWZ4OUFPL2FKcmFXZDIrUm9Lbkk3bUhlODZjNHR5MUsxeloycUhiYWhOY3pSNmdxU1c1QkgrNlQ0a2VuSU90VWVCbGgxWSsrVzIzclAvMDFxaGtwWjAzUC85czJBdktjUVFUQW9sbHhZSlcvN3NkKzcrM1ZjYmYyL0R0YnhQeGRGWHB6RVY4R2JuNFlJZXRjNmRadjd2Rnl1bXJpR3dUUW1IVmIySmlLTmZjczdvQ0dISGlFWHdhY3RXMkFtVnVreFVJRnI1SjFqSTRGZ2ZlR3MyTU1EQm5SVXN4RmtBdDFlSmNqbk1GV2l0clFwTEE4U25zY2NiZU5qVU5MSjQzeEMwU3dSVW05b0ZndHl3a3owcnd0SURFdW8xWVRQSTJJYmoxVU5abThhcEN4R293a29ncHFoYktwbUtoaHBGeDZWdzdjZHpxN0Z1YTA4WmUxRGh4aUUrblZlSURKcWEyUzN6L21NaWs0akw2VzVjNGVOZFhjZXpMNytYOGZZOHpjM2dOMUhUbnZIY0VWUWJERVd2ejg5eDEvQVR2L3ZqSENabzJzNXBIS0RWUFRaR2tMTlFjbkNKVVVjbnpqTzg0Yy9oZjNEcmY0WExmUDRzdVkvYUNjcHphRkJnZ2VKSFJTZTIvWWFFcS84TVYzL25aUFZma1dRemtYaWdXQi9SM2xYUHZ2NFhkUzhjNWVQY0ZabGZQVVkxMmNWV2JyTWdUZkYzdjd0aWlUdmRIeVEwcHkzSkFUREJQUENJdEpIaWpwR1JacXZlcFVXZWNjYjRzclBPTnJLOEo3QldHTWpuZkxHQ2o2ZWRwdDY4TTRoV2Z3aTF0NkRPcU5jd09kZnMxQkN1Q1dna3duVjRrWnJaaHRYVXo4Ymo0TzNhQThTTlF0NlFMRGxVVDI1WnNwb0crbXlpdy9rb3poSUNLNVdsV2hJM05aMGlxRzlVbmFuMEZJRllqWUlaajkzdzVGKzc3TytBZ3p0a0xoWHFnVjdUaFpMY2RQc3duTDF6Zy9JMU5ab3lKYTY0N29WUlVkOUZtMUFnamJJeVUxNTg1K011bjVqb1BQTFM1TjNFaWZ1NTI2Q2JYbi9mZ3dNMU1nQklZaVdkRndpL2RHblp2UDFqdC9uNFZJd01WUW9UT25LT1lyN2h4Vm5qNEwwOXk0ZjZYNHFvelpDM0hjTGhKS0VjcHJCclhCbUpsbFcvcjc2K2hUWS9TQXVtbVpGand2bzNRU29pU0o2YWUvL0hBcXJyMzI2SE9XWTZlaXBQcTIxYlFsQ3k5RTMzR2dqYllYRkxaeFZ0eDAyWFVCY0M2UTdYK2ZvY1ZTbU5NeFkyVUxOdXVuRTQwSkZGb3NuU3FXamVya0FFSmx0ZGdFeE44MS9JbUpwYWJ5WVUydGJFYWdCaEwvTWF4ZHpBUk5xWkYyL0RLbkREc1hlWHd5NytNdGR0UFVtN3QybmZxbU1XUU9ZZkd3TUpNbDl1UEhzVW5MWVd4WDZhY1NtcnROTk1keUp4all4aTRZMlYrKzErZVB2QjlPOE1oR2tLYS9SbjM5YmladlNCUG5OcnFuYXlQSXhPZU9LSERON1ZpK0lsTDJmd3ZEcFZYZXhWeVVmTFpFZFdvNU94SEMzYk9uK1RBWGNkWXZ2VUd4SWVvOWpaeHJRNHV0NXBHVVBDcWlGYUlGTFpicVNZMEo2RXNQaDh2ZXBlWnFveXJrM3JieGNkODNpUTc2MG41aWlYQ1pDMmo4NmVDaHRURXlUcEhFUWRVeEZoWmI0M0xHbkVMR3FTcEJwN1ZuRi9OSWNUWG44eTRvUTh5dEY3SUU0Nm5zYzZqU3FDeTBGTVkxNFFTVUtHb3hYZmVXVEZZb1pIWEFrTlExSnhXZkpvV0VZWUpIYVIrSWtDb0JqMWF5OGRZdk8wMEZ6LytibHFMdDlobkpUU2ZoNnBTeGNqUjFWV1daMmU0MGV2aGZaNzJsNFQyT1JMMXlVN2tmbFd4MU9udytqdE8vZk5pYnE2NjBSdVN0NTd0SU0zc0JlMDR0ZGxTaFlGNFprVS9kcXJhL2NxaDZyKzZLSzJmN0xuOGhCZEh1MUN5SXJDOVZYTGp2UjBPUEhrTEIxNDB6K0l0VjNGY1lEVHM0Y1NSRlFVaUVkR1NVQTF3MGpIaFBvbVdCNmhwa2pVTVFWY3JhZHJOdGdYZzBWaW04QXdrRGxFVnZDK0lYaUVPVTh0dlJ0TWRoMHV0MW1Kb200YWtjR056Z29qQlRqdHNnY1owNnh5a3ZFcWFuZGtZRVZuNjN5cUZWQlV1MWRsVlU3VWZHLzloem0xb29VcE9yZG5jSk5NVE9VNU5BSzNCRTlOMWpzMzNpQ3BhaVpGYVhWTHJJWURrQ1ZTb1JVTXlWazZlcHRXK040MDlvVG14ZkhJTU5MSThOOHZocFVVMjluYWJNRkFUOFhaeStvQjNOa2w3ZGJiek01ZTM5Kzc5elNzM21yWHhqN0VYM2VUNkY0WGpUTm93ZmVCcmhIZDBZdmlEN1pqOTJGWFhldnZBK1ZiTENlMDVUeFVHWEQ2N3k4YUZXUTdkZGpjSGJ6M0I3SkduaWVWWlFuK1h5by9JaWhiT1E2aEFzc3lZdlRFak50QytoUitSYUFSTUd3bG5ESVFFeWFvazZrdzZQYXFJZ1FFNG9nNVFYN2Mrd3poY3d5ai9yaTVVWmxaVGFsNDFiMUFvbFZySTNSS3pLQWxlVG9sNncvQ21EaHVUVTJzcVdxckRrV0JuV2lBMmZGZHdSazJvMmRmTjFtUU9JbWtCTjlNS1llejhXSjBIcWNmZTEzcG9OR2lmS2xTNngrTHBVOHl0ckRBYVZXakxOL054bXNuY0tMbHpIRnBlNXBGTGwxRWRhMFo0WjNPbVhRcXJlNVZ5eS9xQng5NXk1dUFQYlBiN3JQcjhXVjliay9aRjV6Z3AyS0Z2VE9IeU1PVVByY2Z5bHg0THJiZGZjOFhiOHl3akYwZG5QZ2NkY3ZIQkMxejVaSXUxVzA5eDlPVjNNYlA0Sk5YZ0llSm9CODFHaUN1VEF1ZXN4Zk91aXpnWlYrcmp5R2ozMlFLMXVsZFZWYmc4UzNBd0NkV0tWdUZQMCtTY3l5WVN6SVFXT1NFR2JGZFhRWjNSV0p5bUhoYmovbGpJTmJIYm9qRzlsbDN6TGlmR0NsdnNhVUdxQVJOS1FjMTNFZS9RcWtwNVd3MUxHN3FuRGE5Tkd1ZXNpNnIxbER5ckgxWEpVVkpqY28wNXFETVlXeGpYa3hpbDVENGo5SWEwVnBiSTErZnBQWDZEdkwyQUVwUElSOUlraUFwUldabWJZNjdUWXJzL29NaE5BaXRwbHVLZHRXWlhXWnRYSEQzd3h1TXpCYXN0LzB5bi9qellGNTNqMUdZT1pJWFRHYWZuT2xYMUEwZEM5UTR2MlgrNlF2RmRRNS9SRW1ndFFnaERMajE4aFJ2bjV6aHc1aGdIN2p6QjdQcGxZdmtVb1grTkdIYVF0dTF5VGtkSkkxb1FONVBhQXhTSkplcHJXYU1BVlNCbUR1ZTZTSXdFSFJqVjM2Y1dBQTBRTFRsWEtSS2liUW05clU5RDJMelByY2NscWRaQVRMclNkUjZqUUtMdVJGT2pDU2x0Y1FtSnNyUklyQkV1dFdrWUxHM1N1dUkwT1hVU1VteE9HdGM0dllFTUptQ29Mb0o0ZkQxaUVRQ2ZScmxEallSb2M0cW1QSWZRbkNoeE5LU3p0TXpDeVZ2WWVQQWl5anhScmFtd1FkZlNxZFB0dEpudmROanFEeHZSRFM4KzFYRmdwNEp2T1gzZ3AxKzU0RC82Mk9hdVZabWVwZFRtdHB0Yy82SjFuTm9FRS9vZWltT2UrS0VqMm4vVGtvNStiWVBpYlZ0U2ZQdWUrTXlKcHpXdmxNTk5ubnhna3l1UEw3RjY1aURMcDQ2eWVIaUhkdXNhbzcyTGhNRVcwWHR6aHNKYnZZVE1ISU1CZU1FbjNsa0lncmdLY2NFbXIybHFOQXRsYWxmSWlHR0VTakNPV0lNK1dkcWtVU0ZVOXJNMXdUVHRvcUxqaEVEVkZGeXMyVXdRM3pJbnFLY2hxRFlPS1ZLTEsxbFhxWjBFTG1tdVlVZ2VZQTZUamc3RjNxTzlXdkxYUkpkeGFvNWZCNC9KWVV6akRaUVMxUXBQYm1Fa0JkN2I4T0dnQWVneWYvQWczaWRIbDNwQUdBMDVGNEZXbmpNL000dmIzRXozMUFpbW1SY3U3UFI1MVluRDkzN1BpNDcrNEhBMG9yMllQVnMrOHhudGk5NXhhalA0V2hpSXB3Vi9maXdPL255TjBTMGJrdi83RzVKLzM0QzhUVjVRdEpSeXRNblpEMTNuNlUvTXNISmltWU8zbm1ibHpHbnl1YWNZYnAwbGxCSG5lemdxUk5yZ1dzUlE0WWNCeWJwRVh4aTlKMFRVQlVUeVZNMHd1cjh0cXBxdUx5Q2w1UlJTVFB5MndaTDhZRitMdDFhSE9sd2I1eXkxTUNOWUZUMDBsWFVqcEdyU1BIQklDcTFVUjlZaVVFK0h3RmxPSXBiZjJIUFZwTkxFWExCUnVVa2cwcHl3SHFjdXVGUzFUNytyMkRVVmgyQ01DRmM3YlVMcDZ0bXVlVHZINXdhdXVGci9nTmlNQ2ZIZStvcUtQQ2NYYnlUU1ZMdlpIWlc4K01EcTNsdnZPUDdOdzNMRTFXRzVMMXJOZnV5ZmpPTk1Xb2tSUnozNjVCRkcvMlZkeTUvZmp2bGJOeVIvMjNiSVRtcWUwMWxTSkl5NC9NaFRYSG5ZczNMaU1JZGZjaHZMcDE5SzNybENOZndrY1RCRXBBOTVaZUtCVVFpalhWeHIxZ3FYVVlsaFlBc05uM1o3ZzdxdFh6L0pFcW9CQXRaazBzWXlhUXRiTkpRSnd1N1lnaWQxZ1RidlJwdS9WRU1hWUpXWUNKQTAyaHdpbWVVOVlXRGNPazNKODBTb1pjbWNheEMwQk5taG1DNEJXRmhYTi8ySlNwcm5tY1lYNm1RVG9UYVVvZGdnZEhWOWFUd2ZLSXdpa29ERldpTzg3bXl0Ry9HY0NONkIxTFViNXlFR3pnMGozM3JzNEZlY21pbDZaM2Y3WHpDbmdYK2lqbE5iUUFpR0lWMVkxdEZQTHVub2YyeVRmZDhHeFU5dFNkNnF4SkhQdG5Bb1Y4K2ZaZVBjSlJhUG4yRHBXSnZWazEvQzNPRVNweHNNZDdjTU1NaEtjNHJTUTY3R2I2dUd4Q0Q0dkdNd004R0VLMklrWm0zQXA5RWJpbERaODlSOU1uaENncCt0cmxMWGEzVENjWURra3FKWVN3QmljSGhXQUlVNWErZ2pjWlFVY2xvSlVFajFJSTNVUkZHdGUzbUlTUlRlYWsrdVprMUx6WCtqK2Z2VGlkMmJDbWlDSURVMmt3dXl6RUk3alhZQzcxMjZPbVl0RUpvQnUwQ1M1N1gzRzZPRmljNERxZ3h3dk9tMnc5OXlJSk9QbmQvdGt6dWZHdCsrTVBaUDJuRnFpOERRZWpoMGdlcm5Ga0w1bm0zSi91dUdGSy9aSkZ2YnhWSE10R2s1WWV2Q28xeC9EQzU5ZUo3VjJ3OXc2SzR6TEo3cW92RUsxZTVaUWh5aDFSNHVscmpXc2kzTTBDY1FqQURxQ2xSS1E1aXFBSzZGU01mU2ZJbFFqVkRud0hzREJiQ2FFcHFuMmt5TnBta1RhZ0VUS2pYai9pTWdGUzRyTlBSVEcwUW5RYzQxOWczb0JJTmhmTkcyRktrRk9ueVRzSCs2OFNyT3B4R1J4bGN5SHAvR2hCQXlEaDlKdVV5cm9CcHNzSHYyTEZtbms0QUJTVUdxL1VBSWx1K0VHS21xa0VBQng0MVMrZllYbmZpNWYvZVNrLytYNFlpckF4TVYvTUtkTjFQSGVZWXBOZ0JZaEkvTkV0ODBIL3ZkdnZpdnZ5N1pqOXlJMmN2MnlLSFRvVDFqU055NUR6L0MxYjkvbXRYYmIySHAxRHlMeDE5R1ozNkE5M3VVbzIycTBzNDA1eUlhUndUMWVGSWptQ2FSa1RnZ09rSFMzQnJWeW5LZWxKdzNITHBxYURsRzVuRlNZa093YXBQbWJ4dGxFdkV1T2FQYWxxQlpsK0RhdUhSeUdlVmZzRGlwZGpCOXh0T1o2bWpTSnBnUXVSK2ZLR05IMGdRZDE4OWx0U01ydEVZVm5QZDRsNldjVENtS0dYWWUreVM5aTAvak96UFVYZDlSVFhXelN2bFRWR1V3S3VtTmhoUytZQlJncVBMWEQyOXNmZitQdnVlamJKVVYvLzhzbkdmUGZ2WW0xNmVPOHlsVzM0TFNDaEM5Z3ZoSHgzVDRSK3VNM3J3WnNqZHNrcjF1TDJhTFBmRVVDMTFDSEhIdS92dTUrTkV1aTRjUE1iOWNzSFJxbGNXakoya2ZhaU4rUkxsMUZWZU9qSGNqd2NRSFU3NUQ0b3BwcUN3bnlCem9FQTArTlphTkJkKzFxa3p3M0ZsTGNvMXcxYjkxZlFBWXBEMUFOY2U2U0swcHprMW9KWXh6amh5SmZhcHFGOTg2bU9CZ284clU2Rll0U3hVVGQ2dHVWM2hHVHFOTkJrYzl0NloyZnU4OVBzOGdHanNpaElvQzJQaTdCK2x0RHVnY1hHaG1CVUZ5WW1xOU84ZDJ2ODlPdjhkV0dUbTJPTmY3aHNNcjMzaHhwODl1RmVoa245OUM1ODFzNmpqL2dGV1dlZURRMzE2bi9PMDF5dFdlK20rK0d2eDNiN244YTNzdVJ4Y1hjRVJ1WEQzUHh2bUtpeDkvZ3RuNVdkYnZPczNTcllmb0hMMkQ3bXFic25lUnNyY0ZESEhPaGtOcGx0WlhMU0tpYXRLeWFVSkN6VVlRa3JDZVlqbEJXbVdKK1FhTVF5SEF5STIraldZZE85blVrbkJOU1RaaVNwbUdtSGt5MXdhdERONnVHOFRTYTZzb0dsSjRsd1EycUU4ZWpVWW9TSWgwRGF2WDdlRHF3R2VKMmFBbElTaDUyMUZ0UHNMRkQ5NlBuNW5ETyt2RHFWRzYrcjJvR25GenQ5ZmowbllQelZwODk1MG5YdnVhSTh0N0cvM1JGMllCM01TbWp2TlpXa1FZMkJLOTFpYit4a2tYZm1OSStlcnJJZnZPYmNtK3F5Zlp3WDdlb21pM1VZR3RVWjhiNy8wUTdmZm56QjA3eU1vZHAxbDUwU2xtMTErTWIrOVM3bHcwZ21rVmdKR05KYXlyODFKVFlrejNUVnlhREoyMXFHZGx4bG9Fc0VrejZoeWxydFozekNIakNLYzJXakgxWkpveXpRU0RXU1UzYld1dFVMRjZVTTBRc0NoTlRDb0tFeG1SNW5rRUNlbDhjUFh2d0VRSVovbU1KdjZjeGdyUmlyeTF5dGwzdjRldHB5N1JPckJ1SUdKTnMwa24yYWd5b0tDS2dVOWN1a0lyTC9qaFY5NzVEWGV0elAvTlk1dDdQSXMxenM5b0t6ZTVQbldjZlZpSlVOcSsvTjZEVXI3M0FPVVA5OVc5NUliNmY3MFZzMi9yK1h3OWVFOXJmb1lnd3JYekY3ank2T1BNdk84QWM0Y09zSExtQk10MzNzYnNrWmZoNGk3VjNoVkMvem9xcFlWVlZRK05LY3dTYiszYUlvUVFjVjVTTFNoTmpFdXdzV3BsU0IwVzNpbWwrVkNza21NVTQyTkJXODE3MFJwWGxETFJnOGJMVVdybUFJS3A1TlFGbytTdnNlNE5nc2FKNjFOVDYySXA2WVN5RUs0ejM2TC85R1dlK01zUDRHYzZPSkpxWnh3amRER3BlSFpiTFQ1ODlpS0RmbzhmZi9YZGI3eGpaZkZQeisvMkVqdGpZczk0RG16cU9QOElpeGlZQU93VjZIM0hwYnl2cCtYYkwxWFZOdzV3Yjk3QnZ5WjR2K2htWnBDWkRyM2hEbnNQWGVIaVJ4OWcvZ1BIV1RsekcvTW5qckJ3NmhabTEwK1JGU09xM2laeDd6cFVBZlZxZDZpSzRCMU9TK0lvUWo2SHhOUys3QldxWVhLbURyYUE2MjdNVnRLTVZvaldzRmFqWkpNRjFJa0thdUxJa2NLdTJCQTZkYUlPWXhsSUdpMENGbVpxQ3RNbXB0Z3g4ZDFDb0wyd1FCV1VqNzNqTitoZnVVRDM0QUhLRUdycUhBQlZWSVpWSUhPT3plR0loeTgremZmZWZlcE5kNjh0L2VFVFc3dGprZnpuMkthTzh5eFpoUkFSZ3RCcmEzem5JYW5lZVNINCtjc2ovZGJDKysvMGVmNmFnZmk1WW40QkVXRjNlNE90di9venNxeWdzN0xPNHVsYm1UOTJoUG1qaDVrN2RDdXRoUm1RQVpSRFlxOUhWZTJZaEpNS2hGRmk2eXM2NmhPMXhCY0x4dUtHSkV0cnhFdVYxRCtEakFVTEZaREVUUk1oaWcyc3FzY3gxZzRTQ1UwUk1vMm9veDVwNzJvOWhBa1dRK09VRTRnNTRuRnhTREUzUTI4MzhQQnZ2NFBySC9rUW5iVTFRb2pOS2FXcWx1Y2tTSHVvOE5ERnk3eis2TkwzZjluaDFkOS9hbnZ2QzFyZy9JZHM2ampQc2lubVJLVTR2TWgycHVHM0RoSitpeEJXTm9POGZxOXlYNTA1LzExVlZuVGo0aExpSElQQkR1Yys4RmZvZlpIdThpcXpoNDh5dTdiRzNORkRMSncrdzl6NlVUcnpCWlI3bER0YmhMSnY0dW1oVEVYTkFsV0Rlb21DYUo0S21RclJwdDNnVERTRXluaHNMcEZKZzJLdERzMmlURHQ2RkpRazNKN1FMY0NRdVlTV1BTTlVta2kzckIvUHdzaXMyOEpsSzF4ODRNTTgrcnZ2b0hmNUFwM1ZWYUpJcXMwSUlVYktZRG1OUTZqRWNmN0dOaS92eWc5KzFlRURQN2N4S0pzbzhQbGlVOGY1UEZyRWhycEdFUXBoWTFiaXIyc0l2MzdjamY3ejFkSjk3VmJXK1JwUi9mcmczSW13dUV6dUhHV291UEg0dzF4LzhDTmtSWXQ4Zm9uWkk4ZVlQWDZDK2VOSFdUaHhqUGJpUWRxNVVPMWRKNDZHdUZoWmRiNnM4SkliQ29aUENGbE1USUpSWGRKTU83d3hFNlNlY1ZKTCs4YVFGSGdTU3BjcS9DU2t6VTRVQ3dlcFc3UnJPQnc3UVp6ekZBdExLSjdOSngvbjZiOTlGNWYrK2oxb2I1dnUydnBFVGlORU5VNGFhZzFzZ3dpWGQzdTh0QjMvMjVjdUxQejB0V0ZGVUgxZU9RMU1IZWNMWmhFREZWU0UzT3ZWYmhWK1o2YVQvVTRXU3JiMmVsOFI4OVpYOWl0NVhWOTVsV3UxdTdFelEzQkNMQWNNSHZ3SUYrOS9QNzQ3eitMeFc1ZzVkSWpaWXllWVAzS0VtYlZWV2l1TE9EL0M0NG1ESVZvTkVUVUJrQmdGVDBTaUNZMnJiMXZ0cDlaYVNNMWxhRUMwYkFpZVRiNFR5MFFITXRFUm02V2pUVThNVWEwRlhKU3MxU1ZycjFLRklkYysvbkd1Zk9SK3JqN3dBTU9yRnlrV0YyRmxqU3FOOFlneEVxSzFSeHZJQWFNUXViQzl4MTE1OWIxM3o3ZC9aYlBTNTZYVHdOUnhuaE1MQ3BXWVdGK20wQkxlTjB2MXZvMFFmMnBKWkcycmNsOGxJdmNnN3QvdXVXdzl6Q3lRelMrREJyYlBQOEhtb3crQzg3VG5GK2lzSFdUMnlER0tib3Z1MFZ0WU9IbUc3c0l5V2FkRlhwaUNEdFUyY2RnbmpQcUF3d1RQN0NTS1ZZOFlkcTFaTGxzQWw2ZytJWUlPQUJ0RkVyV1BWSUZJZ1hmZ1JGRVBydDAxS285dk05anVjZW4rZTduNndmZHg3Uk1mbytydFVTd3VVUnc0YktkTVdWcjBpS2FCeUpiUGpLTFNyd0xYZS8wYmc2M05ONTg4dHZnbmZiVUd0ZWVqMDhEVWNaNXpVNHhzT2tLSTRtZzVyclpWM2psRCtjNTFweisyby82ZjdhcDc3WFp3ZDBibnZuTFlhcS9GN2l5WndDZ0UrdWVmWk91eGg0dzVVeFIwMXcvU1dWeW1XRjFqN3ZncGlsYUJ6eDNGMmhyRjNDSjVYcEIxT3BEblZGV2ZPS3BNMVNhZk00SDRyRVh1YzFTSEtPQWtSeE1CVTdRMEVmaXlwT3oxR1cxdE03aitGRHRYcjlJN2U1N2RzMCt3L2VRalNJeGtTOHRrOHd1VzlKY2xaYXpWUmExUlRWRUdWYVFYSXExUXNoUGR6MnlwLy9FMXg0MjlDUFBQMDVPbXRxbmpQTThzTWJ3WTRvaWkvVVduOXk0VDd0MG9TOW9xTXhkamZqelQ4bFY5Y2E4WTRGN2FhclZlTm1wM3JkQW9zTFYxZzYwcmwvQVBWWGd4WVhuSld1VHpDK1F6cytUdE5uNTJqbnhtRnNrTHhEbGFzL05JcTQxNHlMT1c1VUZlMERKQTJVZTk4ZFZDVmFIbGlPSFZLL1J2WEtmYTNXRnc0d2FodjBNc1IwaTdRNzY0M09nZW9Fb1ZJa0ZqT21FQ2xjVnBqSnpIeGJpMUZBYS9kOHBYLyt0R3Uvdmh2eWo5WnozdzZibTJxZU04VDYzbUFZelUwS3RTSEIyUnZVeDRhRlhLaHpZMCs3VU9GUWNrM25xTjRzUldrRmNDZCtWZTd1N1B6TDQ0NEJoZ3JHbFJKZS90SVR0YnhwUWVsUWpSTkpuRmpZZHFTVktZaVpGQTZoNE5sWEhqaUZSUlRSL2JlYUp6K0tJZ2I3ZGcxcWJJMUFvN01aZ292a3Z3ZEZEVFlSaUtKeGRoNVAwSGw4TGdYYWR5Zm1GQTNKaDFqbUhkbVBRQ3Nhbmp2SUFzcHNjSVY2czNrNGs4MGlFODBzZjl4UXlCVlNLanlKZVV5TzFEM0d0NnVETkI1SjZoOTB1bGJ4Rm9FZHFPbUpyQ2NqRnFwazhidlFtVGp1c3lNRzRKcU9ta1ZZeTRsS3NNWS8xVHBtbHQ2Z1ZRQmhzMW5JdUJFK3I4Zld1NWYvZmgyZllmUHpUZ3c4V05MYnA1eG5VY1hZMlVMeHlmQWFhTzg0SzN3TGo0V2lVcVVDSHhZMTMwWTQ3d0IxYTNaMjZrN3ZoSTVaNVN1WE1vYm5hRU96Q0MyMHJjNmI1S1oxanp5NHlEZ0lwQnhXMDNQb1ZhMlBqRmlKQTVSNGlSdldEemFsck9CbjlwakdURVVHajgyNjdqd1M3eHZkNjU5OS9vemoxOGVMREZ2TzlBREZUaUtLbTFxRjk0Tm5XY0wwSUxhZkZQbEF4M0hQcUpydWdubklDYkdKZzBWRm01aGwrTlVZL1BPNzExVjExSGhQVkJsTU5lcExnKzFHd1U4VVdyV0x5bVRyUWNNWmU1bmQwUWQ4c1FpOVdjd2RZb1h0cFVIcnFseFlVRkwxY2t4c3VWeVBrNUp3eWpVbUpDaVVPRTBlZGJ0K2tMWkovejFPbXBUVzFxTDJEUjlhbE43Ym0wcWVOTWJXcjdzS25qVEcxcSs3Q3A0MHh0YXZ1d3FlTk1iV3I3c0tualRHMXErN0NwNDB4dGF2dXdxZU5NYldyN3NLbmpURzFxKzdDcDQweHRhdnV3cWVOTWJXcjdzS25qVEcxcSs3Q3A0MHh0YXZ1d3FlTk1iV3I3c0tualRHMXErN0NwNDB4dGF2dXdxZU5NYldyN3NLbmpURzFxKzdDcDQweHRhdnV3cWVOTWJXcjdzS25qVEcxcSs3Q3A0MHh0YXZ1d3FlTk1iV3I3c0tualRHMXErN0NwNDB4dGF2dXcvd2NzOGg2SFFvam1Bd0FBQUFCSlJVNUVya0pnZ2c9PScsXHJcbiAgICAgICAgICAgICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU00QUFBR21DQVlBQUFBMHo3dEhBQUFCTjJsRFExQkJaRzlpWlNCU1IwSWdLREU1T1RncEFBQW9rWldQdjByRFVCU0h2eHRGeGFGV0NPTGdjQ2RSVUd6VndZeEpXNG9nV0t0RGtxMUpRNVZpRW02dWYvb1FqbTRkWE54OUFpZEh3VUh4Q1h3RHhhbURRNFFNQll2ZjlKM2ZPUnpPQWFOaTE1MkdVWWJ6V0t0MjA1R3U1OHZaRjJhWUFvQk9tS1YycTNVQUVDZHh4QmpmN3dpQTEwMjc3alRHKzM4eUg2WktBeU5ndXh0bElZZ0swTC9TcVFZeEJNeWduMm9RRDRDcFR0bzFFRTlBcVpmN0cxQUtjdjhBU3NyMWZCQmZnTmx6UFIrTU9jQU1jbDhCVEIxZGE0QmFrZzdVV2U5VXk2cGxXZEx1SmtFa2p3ZVpqczR6dVIrSGlVb1QxZEZSRjhqdkEyQXhIMnczSGJsV3RheTk5WC8rUFJIWDgyVnVuMGNJUUN3OUYxbEJlS0V1ZjFVWU81UHJZc2R3R1E3dllYcFVaTHMzY0xjQkM3ZEZ0bHFGOGhZOERuOEF3TVpQL2ZOVFA4Z0FBQUFKY0VoWmN3QUFDeE1BQUFzVEFRQ2FuQmdBQUFnM2FWUllkRmhOVERwamIyMHVZV1J2WW1VdWVHMXdBQUFBQUFBOFAzaHdZV05yWlhRZ1ltVm5hVzQ5SXUrN3Z5SWdhV1E5SWxjMVRUQk5jRU5sYUdsSWVuSmxVM3BPVkdONmEyTTVaQ0kvUGlBOGVEcDRiWEJ0WlhSaElIaHRiRzV6T25nOUltRmtiMkpsT201ek9tMWxkR0V2SWlCNE9uaHRjSFJyUFNKQlpHOWlaU0JZVFZBZ1EyOXlaU0ExTGpZdFl6RTBNaUEzT1M0eE5qQTVNalFzSURJd01UY3ZNRGN2TVRNdE1ERTZNRFk2TXprZ0lDQWdJQ0FnSUNJK0lEeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5SStJRHh5WkdZNlJHVnpZM0pwY0hScGIyNGdjbVJtT21GaWIzVjBQU0lpSUhodGJHNXpPbmh0Y0QwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x5SWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBSWFowUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZGZG1WdWRDTWlJSGh0Ykc1ek9uQm9iM1J2YzJodmNEMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzl3YUc5MGIzTm9iM0F2TVM0d0x5SWdlRzFzYm5NNlpHTTlJbWgwZEhBNkx5OXdkWEpzTG05eVp5OWtZeTlsYkdWdFpXNTBjeTh4TGpFdklpQjRiWEE2UTNKbFlYUnZjbFJ2YjJ3OUlrRmtiMkpsSUZCb2IzUnZjMmh2Y0NCRFF5QXlNREU0SUNoWGFXNWtiM2R6S1NJZ2VHMXdPa055WldGMFpVUmhkR1U5SWpJd01Ua3RNVEl0TURKVU1UQTZNakk2TXpNck1ETTZNREFpSUhodGNEcE5aWFJoWkdGMFlVUmhkR1U5SWpJd01Ua3RNVEl0TURKVU1UQTZNakk2TXpNck1ETTZNREFpSUhodGNEcE5iMlJwWm5sRVlYUmxQU0l5TURFNUxURXlMVEF5VkRFd09qSXlPak16S3pBek9qQXdJaUI0YlhCTlRUcEpibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPamM1TUdVeVptRmtMVGcyWTJNdFptSTBOeTFpWVRnMkxXWmlOVGN4WlRjMk1UVmpOeUlnZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDBpWVdSdlltVTZaRzlqYVdRNmNHaHZkRzl6YUc5d09tTXdOakptTTJRNExXSTVNVEF0WVdZMFpDMDVNR1U0TFdZNU9UZzNZV1EzWVRreE15SWdlRzF3VFUwNlQzSnBaMmx1WVd4RWIyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09qaG1ZekZpWXpOaUxUUXpNVFF0WkdNME1DMWlaamcwTFRVNE5XUTBZV0U1WWpOaVlpSWdjR2h2ZEc5emFHOXdPa052Ykc5eVRXOWtaVDBpTXlJZ1pHTTZabTl5YldGMFBTSnBiV0ZuWlM5d2JtY2lQaUE4ZUcxd1RVMDZTR2x6ZEc5eWVUNGdQSEprWmpwVFpYRStJRHh5WkdZNmJHa2djM1JGZG5RNllXTjBhVzl1UFNKamNtVmhkR1ZrSWlCemRFVjJkRHBwYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2pobVl6RmlZek5pTFRRek1UUXRaR00wTUMxaVpqZzBMVFU0TldRMFlXRTVZak5pWWlJZ2MzUkZkblE2ZDJobGJqMGlNakF4T1MweE1pMHdNbFF4TURveU1qb3pNeXN3TXpvd01DSWdjM1JGZG5RNmMyOW1kSGRoY21WQloyVnVkRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESURJd01UZ2dLRmRwYm1SdmQzTXBJaTgrSUR4eVpHWTZiR2tnYzNSRmRuUTZZV04wYVc5dVBTSnpZWFpsWkNJZ2MzUkZkblE2YVc1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRvM09UQmxNbVpoWkMwNE5tTmpMV1ppTkRjdFltRTROaTFtWWpVM01XVTNOakUxWXpjaUlITjBSWFowT25kb1pXNDlJakl3TVRrdE1USXRNREpVTVRBNk1qSTZNek1yTURNNk1EQWlJSE4wUlhaME9uTnZablIzWVhKbFFXZGxiblE5SWtGa2IySmxJRkJvYjNSdmMyaHZjQ0JEUXlBeU1ERTRJQ2hYYVc1a2IzZHpLU0lnYzNSRmRuUTZZMmhoYm1kbFpEMGlMeUl2UGlBOEwzSmtaanBUWlhFK0lEd3ZlRzF3VFUwNlNHbHpkRzl5ZVQ0Z1BIQm9iM1J2YzJodmNEcEViMk4xYldWdWRFRnVZMlZ6ZEc5eWN6NGdQSEprWmpwQ1lXYytJRHh5WkdZNmJHaytZV1J2WW1VNlpHOWphV1E2Y0dodmRHOXphRzl3T2pCaVlqWTNNRGxrTFRFeU4ySXRNVEZsWVMwNU1tRTBMV0ZoWVRaaU9HTm1OVE5sTlR3dmNtUm1PbXhwUGlBOGNtUm1PbXhwUG1Ga2IySmxPbVJ2WTJsa09uQm9iM1J2YzJodmNEb3hZemcxWWprell5MHhNamRpTFRFeFpXRXRPVEpoTkMxaFlXRTJZamhqWmpVelpUVThMM0prWmpwc2FUNGdQSEprWmpwc2FUNWhaRzlpWlRwa2IyTnBaRHB3YUc5MGIzTm9iM0E2TW1FNU5qQTRaV0l0TVRJM1lpMHhNV1ZoTFRreVlUUXRZV0ZoTm1JNFkyWTFNMlUxUEM5eVpHWTZiR2srSUR4eVpHWTZiR2srWVdSdlltVTZaRzlqYVdRNmNHaHZkRzl6YUc5d09qVTJOekV5WXpZMUxURXlOMkV0TVRGbFlTMDVNbUUwTFdGaFlUWmlPR05tTlRObE5Ud3ZjbVJtT214cFBpQThjbVJtT214cFBtRmtiMkpsT21SdlkybGtPbkJvYjNSdmMyaHZjRHBpTldaak5qVmlaaTB4TWpkaExURXhaV0V0T1RKaE5DMWhZV0UyWWpoalpqVXpaVFU4TDNKa1pqcHNhVDRnUEhKa1pqcHNhVDVoWkc5aVpUcGtiMk5wWkRwd2FHOTBiM05vYjNBNlpETXpNMkUxTTJRdE1USTNZUzB4TVdWaExUa3lZVFF0WVdGaE5tSTRZMlkxTTJVMVBDOXlaR1k2YkdrK0lEeHlaR1k2YkdrK1lXUnZZbVU2Wkc5amFXUTZjR2h2ZEc5emFHOXdPbVkzWW1FeVlqQXlMVEV5TjJFdE1URmxZUzA1TW1FMExXRmhZVFppT0dObU5UTmxOVHd2Y21SbU9teHBQaUE4TDNKa1pqcENZV2MrSUR3dmNHaHZkRzl6YUc5d09rUnZZM1Z0Wlc1MFFXNWpaWE4wYjNKelBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1B0WjRpTWtBQUppa1NVUkJWSGljN1AxNXZDM0pWUjZJZm10Rlp1N3hEUGZjb1c3VnJibEtLcUVCa0JBSU5BRENBd2dNR0dnRy8yUmpHdHNQRDgrQS9iQzdiZE92KzJjMzNSNmV6Y1BkYlFQdDJSamM3Z2FER3d1d0hrZ2dJWXhCODFDYXFsVHpkTWN6N3Iwek0ySzlQeUlpTTNMWSs1eHo2MVRkUEdlZlZiWHYyVHN6TWpJeWNuMnhobGl4Z2tRRWg2R2YrUG9mTzFUNWw1UEVDSFN1Y2ZFMWx6QllHK0xwRHorT0I3NzZJVnorL1BOWXYrc3MxbTVmUXpiTmJuVXo1eElyaHNuTjJhdVBYSDVPcDFtVTZodzNybDcvb0o3bWIyVG1XOTI4aFNRazRKeWhKZ0R1VHhCZjdFT2V6cEE5T3dIZG1jQW9nRGNOK0ZJQ2ZUMER4UVRrQUNJQ2VnUmMxOUM1QnU4S01BUFFrY2Y5b1YvN0c2M0hvNWU1SFM4N0VST0lDTmUrY0JtVHF6c3cydHpxSnUxSEVRQ3dVb0RKQVdCRlpReEZES0ZiMjdCOVNTeUF1dDdNbzZBVER4d3hBaEhCdVFkdXc5cnQ2OGpTRGtzY1poaHQ5T1hQUG9kOG1vRXNDMllnUURveUFwK1NwUk1QSEM5eFh2ak1zOWg4NWpxa3d4SkhJQ0NpZ1lvVXFVZ2hTM05BSU1LQXFGdmR1c1VrRUpBbTBPRTAvMk5MSng0NGdIMnB5VEJCZjJVQWsrdGIzWnk1SkJDd1lxVlREWjFxRUFFZzVFSUNRZGM1VXJBVU9wcWpwUUFPZ1pETk1rUjdNeGpUWVlsakJLb1hSVXdNaUFCQ1FJUThHMmdvUnFlaEl5eUlwb3g0YnpuUWMrS0JRMHdBQVZjKy96eVlHWFlZN3lZWmJhQVMxYnZ0b1R0SXhRcklNMWpsaHpvTkdrdDBLbkZPSXFra2dvcFVwMSt1R0FFUlhSTmpwb0FhZ2dBWUtFNEpyRHJjY0FBZ0FlWExBNTZsQVE2UmRSSjArc1VTUUV4cDBVZ2lRRWhZZDJaYVl6NFJnYnFyQlI4NUxRMXdqaEV4SU40eEFJajBPR2R3NS8zUkFoZzZuY2M1cFZ0R0NRR0tpS3lEQUc0NnAvUGMySEZwZnNSMENwenVVVTlBNUVPaEJKS0xFZ2gzMnowZ0pHQlF0MTEvUjBpbndPa2U5YXdmMm9rWnNwT2ZYZGZVeEhuUU85N01JNk5UNEhTUHRnQVlLcUJER3NmQTZDYkIwa2diWUltQUkwWnNnR2VIOVhBeEFoSmFBeEJiUGhRQWlEZ0h1UE1oTjlhckprdGk2aXdIY0FTSStoSGlYb3hEcnFKNFdVbEVRRVF2Z0doTGpLeURDQVJpcTY5MW14Mkp4SGt4T3R6QlIwakxBUng0aWROdGZVS01BRXczeUs1SUFRa2dqSzE4b01GZGR3NHdvRkpDTk8wMndJK0tsZ000Qk9TekhDWXpvQTVicjhZSW1Ha3NJcU5pc3RiSTdXckdZMWE4YzZ2YnQ1QUlJSDJxcXAwWUVnRkVDMVl1ckdLd09vRHU4TElDUjd1a2VGZU1HUXNBQ05aVXhzSzYrK3hvWjUyNkxSbVBpazQ4Y1B3TWZMcVhBckIyUkdkSkFER1NxVGk2RXNYUmJXekRoSzRZa2wzaDdnT253MXJ3a2RPSkJ3NEFpRnRLa0F4N25WNlBBemdIQWRPV1NMRUNaeFhBQUlMSkxXM1lRZWdVT0NlTGlCa20xNWh0VHlIU1hWVk54QUluR2ZVaWIrSUlZMmhpR1lCazBuWGpnUXhBK2ExdXhjdERTd0VjMFFaeFA4YnczTGpiRXNlTjJCd3BNVVlBQVpob04xTnl3eTNMNlN3SkJFd0UxZVZHSGlFdEJYQTRWcGp0enFDZnVuYXJtN0tRUkFSaUJHZnVPcHRFU1FUSkFCR01PYVZ6elBSQ3QzbnlkRm5CaVNPVGF5VERIbFl1ckVKM1dlSUFnQWhVckRLYlZFUUFpSFVSU01jREtNazcxTHJjeUtPanBRQ09HRUdVUk9pdERhQm4zVTBQVlpBZ0V5T3dLd29vRjVLWmRGeFZBK3drYUllbnlZNlVsZ0k0cWhkaDU3R3IyTDI2MCtrSlVCR0JNWUp6OTE4WTlWY0h3Q1NEQ0JRYlNyanJxMWNCSjJ4T0pjNkpvWHlTWWZYaUdzN2Vkd0U2NjdEYlJ3VEVESjNwcVUzVlN5Q21oQVNEcm1NR1FLZmpBSSthbGdJNHBBajVMTWRrY3c4bTd5NXdQT05GU2FTVVl1Y0JsT3RaM3p6VjhkVFJOdFJHQTFGK0hDRCs0bWtwZ01OS0laMmsyTG04WFV5R2RwRUVBaGhnZEc1RkpZTVlKaFByVmN2cEhCTTkzM1ZWN2RTcmRzSklaeHI5bFQ3TzNMWFJiYSthdUd3OFRHbWVadFpUUlJpcmpHNDdEc0NCRkd1SVRqd3RCWEJVckxDOU5jRzF4NjUwTzFZTmdNNDF4dWZHTWxnZElkYzVBRnd6RWI3UWVYZVZ6UUVINnZDNGRKUzBGTUR4Tm83SmRqdWR5Uk1Bc2pSRGY5eWY4Um1HYzZNWmljUWNCM2YwTWlXNldRcmdXQlhJcWtIb2VKU3hjenQvUVNCZkkxYjNHVkdHRFNMc2RwNHJ1eTNNajVTV0JEZ0NVb3lvRjkvcWx1eFBaSGRtRXlQVzJHYTZac1o0RWgzUE9RQUNrQU5xZHFzYjh2TFFVZ0JIeEc3YUZQWGp6dHM0cE5nQ3grVmFJdEM2bXZBZHpQek1yVzdiUW5JMnpySzQxcFlDT0tRSWVaYkQzTmpydkJLZXB6bDY0NTVteFc0aVhtTEtwSDhzOXAvcDlwaDBwTFFVd1BGdVhoVjNYZC94QzltY3hMSC9heUdrUlM3cExwTUFPUFdxblJ6U2FZNyt5Z0FiOTU2RFRqditacTFuNmtiWlRsRWdKTGUwVGFmVW9LVUFUa0hHN2dMUWFZM0NDRGlKSWpFdWVhS0E0Rk9XblZKbmFDbUFZM0tOZUpCZzdmWXowRnAzSERtQXpuS3pmWG5iL2lES0FhUzN0RUduMUtDbEFJN05PWkJodGplRnpycXZxdWxNR3lLeUVoSWdVSmNYUXl3bkxRVnd4QWc0WWlUREhuVGEzZWhvd0RveE1zcVE3cVllTHdtSkREcy9MZDl4S1g3VXRCVEFZY1ZJZDFMc1h0M3V2c1FCYkpJT3hjanRFb2dkSVZ6cHZGZHRlZEpHQTFnUzRJQ3NtemZQOUxFQWp0MnYxT0hFSm82Sk93MGE0QlE0SjVtWUdhYmp5Y3N0LzRsWTA0WUFRUVRqM05GZEI4OFMwZElBUjBTZ2M5M3R2R3FPRkxNaVZhd0kxUURTWTdFUGFMZkhwQ09scFFBT0tZYk9OQ1kzOXV6bVVoMG1NUWE5Y1QvcWpmcGVWNHNnR043cWR1MUxTd1FhWUVtQTR6TjVydHkyZWl3aUJ5Q1NpaloyZnh4SWpoalRZeUZ4RElCdU95MlBqSllDT0NEQUdBTTl5NkN6YmtzY1FFQkVNVWMrcms2MkFieHdLMXQwU2sxYUN1Q29PTUpzZTRyblAvMXM1MWVBNmxtR3djYjQ4dGw3ejBQeURBUmFRWVk3QUR6VzZlWFRwNnJheVNNN0Fhb3cyaGpEcmFyc0xJazJpQWJ4WjJERUxzQWpHb0pwRlVDM1ZiVlRkL1RKSTUxcnhMMElaKzdhZ0RFR1hkNytuSmhnY3IycmMyUGQwY0NNdEd6ajJHVHlYQTVhQ3VBd00weHVNTjJjMlAxeE92eUNSUVNzZUtBU3UwTzJBR0w2a0s0bkpDeXkzT3plNm9hOFBMUVV3UEVyUURlZnU0Rk9vd1l1Qjl6cW9MZDI4UXdvSXhCVEh6RzlBcURIYm5YYkZwTDMrbEczVmVHam9xVUFqaGlCaWhSR1owWXdIYzg1SU5vZ1NxTGRZdWM0Qm5oUFlzb0ZuVTdZSWNIZnJxdVVSMEJMQVJ3aWd0RUcwKzBwdWo0Y21seERSdjF4ZjNWZ1IyOERHTWFPVXVqK0hocW5TNmRQRnBFaTZGeGo3L291dWo2UnFHYzVRSFNKbU1IRXRxMk1RZWVkQXo3TFRkYnRnZW1vYUNtQVV5VHJpRlMzbVErd1M2Y1ZiMEY4ckpxQWhGSVk2YmJFRVhSZG1COHBMUWR3amgrZEExRHVrSzNJQm5sMlBBdXB0VytXQXoybndPa1lPYmJUOENsN0FVQmtCVjNmQXhSWUtxbHpDcHh1RXBmdUtRSXlHVUtqMjZvYXNEU2dBVTZCMHpseWtTdTZFc09pU0VQb2VBQm5TYnhxWFg4Vnkwb00yT3c4SUVDTU9VMFAxVEU2QlU0MzZZeTFGOFE1QVR2dUZGaENPZ1ZPTjJrUzJqaEVwKytwYTdSVU5rN1h0L2dBYkhnUVJGN3dmZ0VSVXdxZVUrb01MUTF3anN0dUJiRFIwVHZpWEx0TURDS3MzT3BtblZLVmxnSTRZZ1RFaEdUWTYveXV5Q3BYVUwxNFMwVEs4Q0NiZUwzYnRFUnpPTUNTQUljNENQTHN1TktqMHh5cytCSzdiUldNQUZCdW03T3VXenFDMDJRZEo0bmM0akQwUnQyWE9DWlJVRW1jRm5GcUVFQWhPamJ6T0tjaE55ZUluSU9LRkhkZjV4R0FtWlIxWkJCSU1aQmhIV25IZ3p5QnBWTFhsZ0k0cEFnNjA5aTlzbjBzVkxYaDJmRjQ1Y0lxa0FOc0NHWWdMMkRROFdVRmpuZ1RTd0dlcFFET3NWcFdJRzVaQVp4ZmdBQVNXaExMNGZqUWNnRG4rSkdOSENDQ1FFQlRHWE4rVEd3Y2crNFBUa2RBcDhEcEdoSEI1T1laWThSdDkwRVFnZ2JqZUFCblNlZ1VPTjBrbTJUSlJUb1F3TWRpSk85d3ZycWpwcVVDenJFSXVSRUoydW4yeUZFMGhhRDdFb2R4T285ekV1bFlPQWNBY0tRdVc0Y0dZSGZUeFFveUFWVEhHOS85Y2VuSWFLbUFBOEJ4WTVmZk1JR0EzTGVSQUVCQklUNG16b0ZUaVhQeVNHZTY4eEpIWnhvNmlleDdJYkpxbThKMUFZNUZzZzQ2alJ3NGdkUnh2aXVJd0NBQ2pMRnR6akNnN0RSeW9FdTBITUJ4RTZDRDFTRklVYWVkQkVZTG9sNlUrVFlTRVFqb0hRdXZXbmU3OWNocE9ZQURRQ0F3eGxnTG9zTXZXTFNCR0hHeHFONnJ4alBFeDhRNW9EdmN1VWRJeXdFYzV3K1lidTU1ZnV3czZWU2p2ekxBNm9WZ0x5a0Nkejd3MlBkcGw5dDRoTFFVd0JFM0M3OTZjUjBjczEyZTNGRnl1OGVseHEyWHRtYURqQWdDNlREZ1BYVjhwOGdqbzZVQURvWERZWGN4WThtdXc0bUs3RFpHSUpIMEpFS25KU1VBRytLUUE3UUVFUVJMQVJ5L0REa2VKRkN4Z3VtMEhpNGdJbTJiYkQxcGxPSVN6UURxZXNvRUFaQ2grOTYvSTZDbEFFNlJIalBOSVVaZ09xeXF1V1VGd3BGeUN5b0ppTnl5Z3E3UDR4Q3NjNkREM1h0VXRCekFjYVN6SEVhazR6YU9nWW9qaXNtcW1FUUVNRDBMbG1PaHFpMExMUlZ3aUFuTUJOUHBJWkZLQTVzQVlZQm01aXp0QU5UMXQyVUFNVGhWMVU0S2xjNEJQNGZUOWFHUjdJeU5BREFDbzVEVHNQczJqZ2pBVXl6RjhvS2xBSTdIaWM0MGpKRk9SdzZJTmlEbmwzSVpvbXlXSHFIT015U2RodHljTEJKajdZUCthdjlZZU5WQVpJcWRDMFVBQXlIVGRTa1owREZxNnMzU1VnREhrNG9qcUNRQzZRNFAzZFlEYU1UWXFCdGlobUpPUkNSUU9idEpjZ3o4RjBkRlN3RWNZb0lZd1kybnJ0dnZIZFluVEc0UUQ1TCsydTNyVnZnd0FTRFYrYzF6Y2FxcW5UeHl3NkRScHZNdjErUWFZa3hoNDhBSVJJbW1QaDJQZVJ4ek9vOXo4a2dFSGZZTEFIRDVPUVI5Q01yOWNnMXk1TjJYT0FCTzAwT2RSQ0oybzNhSHdVTXNBQkVqVE53cHk3S3o1dkdocFFLT0NFREhRZVNJN0ZhT2tld2VpN3hxUUdYUDM1Tk1Td1djZkpwQnFOdmJtK1dwaG9wVnI1akVBU0JHenJMaDdxdEFIYmNmajVLV0NqaFJMK284OHhFelZCSnhtWXlRSUJGOWtXWnhIcmJ1a2tEc3NvSmIzWkNYZ1pZQ09LSXQwNjFmT2dOT0lwZ3V6K01BSUdCUGpBRVJRNHdCV1ByTUhZKzNnY3VQd01zaGNwWUNPT1FjQW5zMzlrQ0tPeDl5RS9WaWpEWkdSWkFuVXVuVHBQdGVOUkpBOHVXWUJWMEs0TmpkbXdWNzEzZUwzMTBsbmVib3JRejZvN05qQUM1QWxXa2lxdnZKT2tTV1kvVW5zQ1RBOFRrSDFtNWZCMGNLYm42eGt5UWlVSkhLYkh5ZFhZL0R6RGxZdXIrZXY5enM5OFRUVWdESGIyVVlEMkp3SEVFNmJPUFliWEVvTGZJakVBQ0RGY29CZE56TUliOGVwK3NBUHdKYUN1Q1FzckZxbTgvY2NMRnEzU1dUYVNURDNzcmFwVFB1QUdCWXB1ampHRENrZ0NZZFQyTjFSTFFVd0JIdFZMVTd6a0FkQTY4YWdDMnJYc0lKSGtuRnEwRmRKanBORDNXeWlBQXdZYks1MTNubU0xb1FKUXJEalRFc0p3cklTRVE1ZFo0cFhWemRVdERTQUlkZ1Y0Qkt4NVZ3azJ0dzFIOEZFL21BVDBCUkp0ejk0VnhJUURsT25RTW5odHlMWkNaSTF5MXNFYkNpZFpEMUJycW1kOXdSYlltOFMrMDROUFpGMGxJQVIwUkFpdEZiSFZpSjArRVJVWXhBSmVwNU1VWGVhQ0FYcGhrNlB3RUtnWlU0cDhBNUdTUmlRMjdpZm16bmNEb01IRUJBekxvYTNVRHNzcXpkc2xZZGhDVDQ5NlRUVWdDSGlDRGFZTFl6dGVFMkhYNjN4aGhFdmJqWEh5dTd3c0EyVnJIcHZsdU41SGhzVUh3VXRCVEFjVHNBWUxBK1BBWVNCd0F3ODlFT1pBaUdaUzhkYXB2VnM4TWtKRkM3QkhVY3RsVjRrYlFVd0NHeUU2RDVOSVBwdU1RUkVTaWxobEV2UXJCRnV5Sk5vSzdiT0IzZnRPc29hU21Bd3hFalR6UGNlT282cE9QVDJpYlZHS3dQVjljdmJjRGtCZ0lCYVl5aWxJK0Zjd0JhbGlKMFlDbUFJMkxWSG80VnVqNGtrZ0NrK0lxVWNXb0FTMnFVZEY3aWlQT3FuWHhGYlVtQUF3RllNZm9yL2M0YnIwWWJSUDJZZkRzRkFoSEVYYmR2QURjL3V3VFNCbGdTNEJBUmpEYVliTG9JeEE2L1c1TnA5TmNHbDJoOUJIR3Bla25vTS9iTHJXelpJYWpEL1h0VXRCVEFBZHVSUE4yWmRkNU8wTE1NcWg4blJBUy9ZYTRvZkNxUHpQSHdxcVhMNFNCWUN1Q0lGcWhJWWJBMjdIVDZXd0NRWENNZTlaOFJseEhUelR1TlNUb2ZxdVpqVW8rUFpId1J0QlRBQVFBUWdhTnU1eHNBYkFaWlptTEFaUjBsZ0RUV09VZm5wU1VCcDVrOFR4TDV5SUYwWjliNUxjOTFwc0dLaHlBQ3lFQUlZRU9pVXU3OENsQUlkWHFieUtPa3BRQ09UOWFSemJMT2o0WTZ6YUVIU1ZUWU13S0lrbTB6UU9jbERnVEFkRGtjYTBzQkhKMXB4TU1FRng2OERicmpJVGNFUUFSUDZqUzN6UlFCaVBwZEJ6eUFZdDNUTXRCU0FBZXc4V3I1TElmcCtMSUN0eWVPc0ZJZU5DQ05EVXB4UENUT3FZMXpja2pGQ3ZrMHcrWFBQZC81bDZyVEhJT04wZXZPM25NZWVaWjVMK0RNN3V2VDhjYWZSa2VmWU9vNDd3RUFBU01BVnZvSVlGZ3lIWm51Ynl3Rm15S3ErNjE4OGJSVXdDSHV2aEpPVENDaVZZTDFCa0lJSnBFblRVK094UVJvckJrNFRodjkzaVF0QjNEYytuMmQ1cDBmdFhXYXcyaVQrVzNhd1lCSzZYYldmQ3gyS3lDTnBYQ3JMUVZ3VEdyUVgrbGo3WTUxNkx6aitZdnNNdStKenQwbWJBU3c1bkUwSlVqWDUzR00zMTNoVmpma3BhZWxBQTdJeHFybDA3enp5UWlOTVVoRy9RMW1ndGF3Qm5lRUd5WkI5NEVqQXBxaDIxN0xJNktsQVk2SVFHZTYwd25YQVF0d245dmFKdmdUQ012VTlOQjlHd2NBc3FYUTFKWUVPQUl3TXlLZjVhYkRKTWFBRkUxTHJ5NUJJSm5CY1lqeUJGVFh2UzlIUkVzQkhKdXNnOUViOTFEWUR0MG03WE5IQ3duWThHMmM0bGlrSlNSem1wRHc1SkQzcW1WNTU1MERJZ0pXeWtTeERSeUFFVWdrMXlYdVBqY0tBWnd0eCtaU1N3RWNsVVNZYmsvdzNLZW1uZmY0NUxNTUczZWZ1MlA5MGdiU3lRd1F3SWh4Q1FlNmJUekljZ2diQUVzQ0hKUGw2STM2V0wxdDdSaDQxUVR4SU43V2FXNUJRd0xLNkl3eTNaKzhGY0RONDl6cWxyejB0QlRBSVNab2JURGJuWFUrbHNydVZzRGpaSkJBSEZhSThEbGhkSjhodmNUcGVqdVBnSllET0VvaG42YlltbVRIUWxYakpGb2ZiWXhCbVFZTW9HTzVMS3JiZ1BkRVV6cDFSNThZY3JzVlJISDNINWVZd0lvbmRpV2xRQ0RnbEZhaVk2Q3FBYWM1QjA0VWlUYUk0Z2pEamJFTkNla3dHZHZXRzZhWUJCVkF1cDUvMU5GeUpQRUVzQ3pBZ1oxMVo4V2REOXhsQUZFLzJpR3lYaXF4K2FNSngyVWtQdzV0UEFKYUR1QWNvd2xRTVlJb2lZejNZUkFCZHMrQzQ4S1J5eUZ5bGdJNFVTL0M3clZkVExiMjBQVWhNVTh6bkx2M1FtLzkwaG5vUEljeEFqSFFKTjFmQUxwTXRCVEFtVnpmeGFVdnVSdDNmK2w5eVBMc1ZqZG5JU2xpN0Z6YnVmL2FZNWRCaXV3YUY4RVFPVHFmZEIxK3M5OGxvS1VBVGpiSnNIcHhEZmQ5MVNzdzJkMjcxYzFaU1AxQkg1LzlyVS9kTWR1Wm9yZld0N3NYUkpSVHhGMFhsbllKUks2WEFqeExBWnlWaTJ0NDVIMmZ3Wk1mZVF3bTY3aFh6UmlNejQ1bnF4ZlhNSnVrQUJFMG15a3BjeXo0c2V0TGhvNktsZ0k0TzVlM2NNOVhQSURYZnYyWFlqcWQzdXJtTEtRa1NmRDRoeDdGVXg5NkRNbTRCd0pCQ0VhajI0RDN4SFI4M0JndmhwWUNPQndwcEhzemJGM2VSRHBOYjNWekZsSWNSOGduS1RoU2JtZEFnVEprTjgvdE9rZWV6dU9jTVBJN3NqR0RWYmN0YkdJdUZxeFpsN1M0K1p4anNKRE5iVDNVOFZZZUNTMEZjR2E3S2M3Y2RSWVB2dVVoVEtlelc5MmNoZFRyOVREZG5lQ3BEeitHUVgvc2svd1JnWStGamJNc3RCVEFpWHNSZHEvdTRMblBQb3UwNDhDSjR4aDcxM2NSOVdKWWFTTWdvZU14aFhNYUhYMnlTTVVLMCswSmJqeDdIZG1rdzhBaFFLa0kwODJKcU1TK0dodm1LV3c2dmh5aXBDVkFEWllHT0JHbVd4TmNmL3dLOHF5N0U2QWlRQlFwNUprbXBSakd4YW94YUtEa0dLaHFOb3Zpclc3RnkwSkxBWnorMmdCUGZlaHhQUFB4Snp0dFg0c1JHQkZjZXUxZDBjcUZOZXh0NzRFQTZFaTJFWFY3MDE5UEtsME96OXBTQUNkUGM1eTUreXdHcThOT3J3QVZtMkFBY1QvcDVhbVZqTVlJV0NoV21ycU5HNEp6UjNlNmxVZEdKeDQ0UG1mMDdhKzlDeGZ1dncxcDJsMVZqUWhnWm5yMlUwK3RUcTd2d2NEWWhXeUdabXdZeDJOVnpuRm80NHVuRXc4Y0VFSEZFYTQrK2dLbVd4T1lyTnZMQ2tCRW9yVlNpWUpPTlNDQ0hQcHh3OTFtU0wrMWZDVGNhWFg0cU9qa0F3Y0FDTkJaam53dmhUWWRCbzdkalUxeHBCUkFJQmNPTFNSeDE1MVZSQUNXWkc4Y1lFbUFJMFlRRHhMMDF3ZkkwKzRDeDQzVVdUN05VbkZKeW9nWkttZUtvTHB2ZFhlOGVVZEpKeDQ0UkFCSGpLMm5iMkJ5WTYvVDI0bUxEUTNxcmQ2MjFsZUpBbkxiVmpMVVp3R2s2enFRRlArY2VEcnh3QUVBQXNIa0JqclRuWjVuY01CaEVXRWloaEdCTVJxS3FPTXV0ZVdqa3c4Y0FzREEzbzFkRUFqVTRjVGxSaHV3WWxxNWJZMkliYllPRW9ZazJPbDZraEY0R3lmSFVnaWRFdzhja3d0Z2dQdSs4a0VNejR5aGRYNnJtelNYaUFoaWhDYWJreWlmWlRZWGMwU0FGb1VNblUrbVdDeWQ3anJJajRCT1BIQjhvR1F5Nm1Hd09rQ2VkeHM0QU02bXUrbGFOa21kV2lsZ29vUnRNdHhiMjhBRGtGQjNuUzlIU1NjZU9HSnNxTXJHUGVld2NlYzVwTFB1TG1UalNNSGtlcmI5M0pZV0l4RXhBUWFRVkZpRU9tMmZBVGhOMW5HU1NFVUtwQWdmKzhVUEl1cEZuWDZ2b2cxVUVnM1c3bGlucUJjam4ycTdDalEzV3JRY0ExVnRPWlpOQTBzQUhHTU14QWd1dnVZU3hoc3J5THRzNHdqQXNlS2RLenZJZG1lRndjMEROVlY4REtLakRTRGJ1dk9DOFNqb3hBT0hpRUJFbUcxUG9WaEI2dzdyNEhhNGpuV2FneFZENytWUS9RajMvNUV2a25pUVFLZmRCYjNxUmNpM1V6ejJieDVHTnV0dU80K0tsZ0k0SUdEbmhTM01kcWFkbndCbHB1bGdmUVNPMkM1aE00SnNPeVZrZHRmc3JwS1phZVM3MmZISWpYQUVkT0tCSTJLZEE5RWdSakxxRlZ1aGQ1aDI0VllZcUZqQjdHazg5OXVQUXluVjZTVVJZQUp5dXo4Mkg0UHRWRjRzbmZnbkZMSHU2SFAzWDhESytiVk9yd0FsWm9nMmZQM0phekNaUmo3TEVmVWl2UEliWDR1NG45aG82WTZTNmtmSXRtZjQ5TC8rQ05JT3QvT282TVFEeDZ0cWU5ZjNRS0J1NzFaZ00xMUVnTnQrTWRYZ29jSmRiN2tmdlhFZjJhUzdvSS9IUFV5dTdPQnpQL2R4NkE0UFRrZEZKeDg0YkowRFQzLzBjWENRczZ5TFpMUkcxSXY2dHoxMEI2azRnb29Wc2p6SDVVODlKNzF4SC9tMHV3d1pEV0xNTnFjMmJDanF1dC84eGRPSkI0Nm51SjlBeGFyVGsrOXVON1llM0s1U3FxOWd0alUrK1RNZlZLU3AwOHNLaUFrbXQ2dHRvLzdKWjZ1VC80VEhqYWo4WDZjYUVoSFdYbldPV0FnaTNYVnNVTVF3VTQzTFZ5WTJQdkNFMDlJQVIwVFE5ZGwzTVFJeGNna0F3eVh1aUpoeDRiVzM2MlRVNi9ZOFRqOUN1alhEMWYveUxMSXUyNUZIUkVzREhBQ2RWdE1DMnZJcG1LTitqTDN0Q1I1OTE4TlFTcUhMU1FsSkVTUTEwS21HVDZaNGt1bmtQK0h4b3dGc3dnRUlBVHJYMmM2VG05dU1ZN0N4bExGU3M4dHJubzZLVG9IVFBUTEZBZ0ticXl3M2V5WXJFek4zbUtSWUduSGk2UlE0WFNOQjMvNkJYeFEyd1lCZUVPcisvamhrQUhSNzM2NGpvNlVCampPOE84MThSaHRJWEthQ2NsdTFLeEtKU0xvUG5LVUlpM2EwTk1DSis3RXpXcnY3Y2xYR1NGWUdDU3Qyd2FnRUVGaEVGSFY0RGtmY3Z5UzhOT0E1OGNBUnAzZkhnd1JGQWd6dVp0SVlab2FLMWNEcmFjNWN5QTFMWnJlZnZxWE5heWNETU1oRlpIUzBqUzhCblh6Z2FJMm9GeU1leEZpNXNBYWpEZEtkS1pKeEgxRVNGY25DTzBFRVFHU1NUek9JeXpIQXpGckVwQVIwcTUwZ205ZWFHQ3cyck1sME9VdnFFZFBKQjQ3VGVLSitqTUhaRWM3ZGZ4N1pYb2JuSDM0R3UxZTMwVjhkSUI3MklLWWJzL0pFektDOHpCWWppSlhoUGhQdjNkTFIzTGVIQUdnVUhVdXhncmprOE10RUp4NDRua3lxTWR1WklSNG11TzIxZCtMT0w3OFhUMy80Y1R6eW01L0c5YWV1WVhSMkRGWjhhOWU4aUlBVVF5bUZRc0lRalVuUnZSQzZkcXVBUXdCRUFhTGMxR3dXN3BLN1hJRHh0RFRBOFdyNGJHZUt5YlZkM1BYbDkrTFNsOTZEMGJrVmZQNDNQb1c5cTdzd0VVTkZETDVWaThhc1VhTkZCQVFDQ3dFS2FuSlJEOWd6N1MwZ0lZRktDZkVMYk5QeUtpeU5MVE9QbGdjNGpvcjFPVmQza1U1U3dBaSs1THZlaEVkKzgyRjg1bGMvZ1R6TllYSU5UcUxDM24yNUtKOWxHRzZzREc5NzFlMkFFWUFKUmdTOEpYWkR0bHZCckVaQVBRTG5ER2dIbWxOYVB1QVU1RUF4MjVsaDlaSkNmM1dBZTk3OElPNTUwLzE0NWlOUGdTQlF2Umh4UDM1WkhBZ0NnSmxnY2oyOSt1aGxtTnlBbU1BZ1JKdEVrWnZIRWVNRTAwc05JdmU4UkF6T0ZBU0NIRG1XSndIVVlscGU0RGl5S3kxelRHN3NJaGtsZU9VZmVnM2lRUS9Ydm5BWnozejBDWENrWHBhMWIwYmJhR2pWandoRWRnR2VkbWx4SXlFUmEzN1RnQ0FhRUkyWEZqeE9YVVFNR0dYYmRrb2xMVDF3UEJFejhtbUdyV2Mzc2ZuME5mUTNScmp6amZmaTkvL1ZCekRibmlEcXhTL0pmWDB5a2Y3NkFFU0VaTlF6Wis3Y2dESGtmQU1FblprMXhRcWNNS2pIa0lsNTZkVW1INmx3aXBkV09nVk9HeG1yTnAyNTV4eDZLMzBZclJHL1JNQXhicDNRNm9VMWpDK3VZdXVaRzlzMk5JanNRbEJqTUZnZnhKRlJ5S0R0bXFJbFNXemVaVG9GVGhzNXBweGMzNFhPY3NTREJLeGVtdUdkSUlBV0dHM2V6RXA5VjlTUDM1YWxPWWpzanRPRC9nQ0R0ZUhmblc1TnZpbmJudnc2Z1g1dTJlWk11a2lud0psRGt4dDd1T3VOOStLci9oOXZ4ek1mZlFMRGpkRkxvcmFvU0dHNk0vMldhNDllL3FXOXE3dUllakZNcnAxSkllajFlNWhzVGg1TTg5bURSdVYvaW9UK0d4TDZKZ0JQSDMxckFqcVZhQXZwRkRoektKdGtPSHZmZWV4ZDI4WDF4NjhpM1prQklCaXRqelJURGdFUUkxL01rVjB0RFNQRm1oWVJHOGJDaW9BVTBGa0dBYjRrUnZJTklQelRJMnNFeWwwZFNMbU1CM2F2bnFPOHhZbWlVK0RNSVZhTWJKcGhlbU1QdzQweHJqMTJCV0lFVVQ4dVVrNGRoY29rV2hEMzQ2MWtsQlRNYTVPdHUvMC9pWXF3SVhzQkFVZm9GckRPQncyVEdTUXJDVVRMMG9YUDNBeWRBdWVBcExQY0puQm53blJ6RDk1bC9HTEpaQnBFdzM1dnBRK3BCMGs2ajV1ZHRyR2hEMlFqR281c2t4K2RhWERFT1ArVmQyRHZtUjNzUGJFRmlvN0JNdTFiVEtmQU9RQ0ppSTFqQXhBUFl1UnBqTDByTzVhdnRROXd2RGxPMDlNTVVhSjZyTlpnY2wyTTlRSmJwWisvQVd4NlprTU1ITkY3ODZyWTRQd1FhNjg2aTkybmR5RGFXT0NjMGtJNkJjNWh5SzNsR2F3TmtXN1BpaTBTaVJrMzZ6a3d1VUZ2cGI5bmdtVHcxVEE1cW54bnU2RHR4ZVdKRXB2VlhmVVVFREhBaEd3cjlZdVhYbFRWeTBLbndEa3NpVnZpYkFRY01mcXJBNXZacFZEZERnY2dNUUlWUjdOd0Y0WENuQ25DWHVqSUdGcTBYU0RITVlPVENNYm9VeWZBVGRBcGNHNldDTWl6SENKMjVONTYrZ1lBdTQrbmpXNCtHT2xNWTNCbU9FNkdxK1grTnc1L05uTEFsN1FNZi9DYWF5Ulc3WXVHTVFDQlNVMWhRNTNTNGVrVU9DK0dqSlVHL2ZVaG9uNkUzY3M3bUcxTm5mcEdCMXFhb0JJRkZhdXNNdXI3ZEFOdUVoVHdpeTRKc0F2dUR2N2VDSkRNUUxSQURTSkU2d24wYmdhWkxNOXF6WmVDVG9IellzZ1o3M3FhSXhuMTBWOGJJdHRMc2ZQc0ZzUUlCbWVHQmVQUEpSRVE4OHpvb0p5WE9NV2htdTNoVWtqdDJ6eG51M0RDNk44K2d0N0xJYm5wZkxhZjQwQ253RGtLSWlDYlp1aXZEcENzOUxEVzI4RGVDenZZZm00THBHaGhrajZUYS9SV0JrbDhabVFuVndPM210MjB3QVo3K3NWdFJYNjFmUng1eElUWjlTbUd0NDJ3OGVXM0k5MmNZdk1UVjZDR3A2LzhLT2kwRjQrSWlBaWlEZmF1N2VEVjMvNmxnQkIrODhkK0ZhUHpZL1RHdmJscW14aUJTaUtwN0VSUU56M0V6dU5ZMTdRQVJIc0xqUk1CMGhzekRDK05jZW5ySHdBcHd1VDVuVk43NWdqcDFHRi94RVJFeUNZWmRKcmo3S3N1NE53cmIwTzJsNElWZ3hXRGFoOVdER1l5RmFZdTNHcGxuWDVMUm5keXRmM20xbXVXN2FSSXp2UncvaTJYb0FZS3MrdExrbDd6WmFSVGlYUFVSRmFLNUxNTThUREIrZGRleE9YUFBZY3JqNzZBdUo4MDFDdVRhWXpPam5zckY5ZWhNMjJUTG5rUWtWdnlXZVFyODJFKzBoendpS0NuT1NRejJIakRiVkRqR0RyVjBMdlprVVE0bkZLVlRvSHpVaEVSc3QwVVVUL0dtUWZPSTkvTDNOb2VZM2UrZG5hUHlUVlVFbVhpQVZJaGx5TlRVSG9LN0o5R3lJMUpiVERvNm1zdTRNenJMMkR6TTFldHkvbDBRdk1sb1ZQZ3ZJUkViQU1vOVN3SEtjSnNkd29WUmVpTmVqQXVqNXRFREk2WVFseVU4Q21UQzFqc0ZFQ1loUGZJOSt6ZW9CZmVmQ2VTc3dQclBjdk1xZWZzSmFSVDRMeE01UGVOMFZtT2ZNWVZpUk1aQ1ZZcGg5KzlaNjM0NVQ3bytaL1oxZ3dyRDV4QmNtWUFvd1g1SkVNVU4xWENVenBhT2dYT3kwakVoR3d2aGRIR3FXd0NrK1VnUmYzQnhoZ0l3MjRhY3pudW9QMnRBRUJ5YS9Hc1BIZ0dFR0Q2d2k2aWxaZG1pZmNwVmVrVU9DOG51UmdhbFVTSW1MeitoYmlmVE1wWXRkbzZueUJNemJxamJkSkNHQUhIaFA2NUFXQUVlcXBQblFBdkk1MjZvMTltRWhHWTNJQ1pRUVRzWGR0RnVwZHUyVFJVVkh6Y0ZoL09EUTBZWTZDTmhqWWFKamZQbTh6WWRRWkVaUUtQVTNyWjZGVGl2SlJFZ0VvaUVCTk1idnlNLzRnalBrdUsxc0Q4WUg5OThKWjRtSHhqbm1iUXVTNjJaQmRqSnp2RkNKZ1p2VjRmY1J6REdBTks4SWR5em02b1hyUUx3aE9rYUlkN2FvdW1CTzRwcUVGa0l4YlUwU3kyTzZVbW5RTG5KYURlYXQvYUgxcFcwOTNaSlpPYjF5V3IvYStOZXRHRGd3MTZnNHFqRGJndDFqaXlpZDVuZTlQQWRTd1Y3d0FUSVZLcU1Id001QWRreGZ3QUZNRmtSaytlM1oyUW9pZE5waC9iZTJyNzZkNGsrNEtabWQrUlhKNG1SVStxZmpRaFJaRGNuRXFtSTZKVDROd2tlWlZMakYzY3hvb1VSL3lRU3RSWFBQMWZIbnVqQ0I3VVdmNVZUN3ova1ZYUkJzT3pvL0phWXdxajN5OGxzSXZoZkFGWUpUckFqeEZqNTBMZEVTdkZCRVJRMlc0NkpzRVhnZW1MWmxzcHBzL3ZnV05HdnAxaDl0emVOVTc0ZC9WRVB4YXY5VDROd3JzaCtJSm9tWjZ1dzdsNU9nWE9RVW5jSHFMRlh5VHhJSDZiU3RTREl2TGwyU1Q3K2p6Tjd6U3B4ak1mZmdyRWhQNWFIL2tzczJsMGpSVDJTbEJwdUx0MEtRem1aSHNuNTFVVHVKUzVMdEpUeGNyVks0ajZrVzJqMkVuUjZXNjZBY0U3T0ZHSVZoTzdOSnJqRnpoVzd4TWp2eVJaL2g0QVQwVUR2OG5XS1pnT1FxZkFtVWVDd2o3dytRWkk4VjFnK2pxVlJGKzdmdGZHTzFTaWJvT0xUZk9nWXNVWXJBL2dMSHRFU1dUWGk5VVlrdUMyVXlTLytFWkFGUnZmZ3NmTzQ1Uy9pN01FUVB5V2pBVEEyRnFEaFc5UUJLWHN3alVSc2FvYUFZajRna3I0TzJEa08vU01NaEErc1B2TTlpL0E0TGNBK29qa3Aza0g5cU5UNE5SSjdNZ2U5U01NMW9lSVI3MEgwdDNaTjR6T3IzNC9SRjVQaXEzUEs0a0FZNnl4VHRZUXI0N1dkVTlYQ1FSLzJoNWRzQjlwWU5mN0pRWWx1bHorTTUrTTNhV1JLbFljZUhjM1VBRE1YKzZscGdEZ2hHTmp6TmRjL2Vqelg2T1NDTW1Gd1dkTWF2NXZTZlZQeTh4OERnVFE2ZFllRFRvRmppTS9zei9jR0VIMUl1UTdzMi8vblo5Nno1L2VlbmJ6SGRra1JUeEtBTC9sT3hEc2QxbmxicUl3U0RQSUd4RDhXL0M5NDNTL1pBQitxVTBOU1hYTnJaZ2NMZXFwSFhUZlE2bkdSWDQySzlsQy9aQ0lvQkpseS9YVlEycW9IcElzK2hFOTFlK1czUHhmQUg1VmNubkM1aXVnMDZnRW5BSUhZZ1RKTUVGdjNNUE9sWjJ6bHovLy9COTc1cU5QL0lXZEt6dXYycnU2aldUY3N3azV2RTNobUtiQ093M0o0ZzZLdDB1azRHZHZpeFRsV2hha2xUZ0o2aXFFalc5QUhUbitld0ErRXUrOHN3dmgvUDJMYWdORU9yQ0pGa2d1QUJQVVdQMGgwZnlIeENCRGFuNFpoSDhybWZ3N3lhWEkrTG1zdExUQUVTT0krekhHNTFldzllem1seHNqZi9yR0U5ZSsrd1AvNkRmV3hBaFVMOExLN1dkS1p3Q0F4a0laLzVWcWYrR2tDRWw1V1QxOHBvSTJLZGJjK1BMKzBucFd6WG9jRytCVXVMcDE1QTRSK2FTZ1pkdTlKR3JMUlZxQVN3U1NGMjJPYWFDK0xScnd0MGttUDJiMjlDK2JxZjVmSkpkSGwxV05XenJnaU11TnRuYm5HVXczSjEveDdLZWUvZ3ZQZlBqeDd5WEZpSG9SVEc0UURaUmx0a3B3WlNWb0xQZ3FxRXVONWtEc1ZTY1VYRjN5Y25oOW16ZXRkcS9pbGtHZDdodTUrb29zTzk3dUlRcHFaaWVSSkVBWWFpcG1tQ2ZPU2xybitnWWllcERYb2gvbW9mcXpaay8vbE9UeUR5V1hSeWxhTHZHek5LNFRxNm9RK21zRDlGY0h0MzN1Tng3K2lmZjh2Vi81M1MrOC83UGZTMHhRc1ozaDUxZ1ZtNDlWV1dFQlk0UjdDN3F2VlZVckxGSlhjVnArQjhjV3Q0RXNkQ3BWQkNFN0Rrd2xhRW9iaFZ4Ynd1dXFsbGg0bEVvVFNodWJOVWVoejJ2UkQ2blY2UE04am40YXdDc2xsNlhadVcxcEpBNHhBUVMrL3ZpMS8rNnAzMy9zLy9YOHA1OWRJU0tzM0xaYUpqc1B2VkxodGFFeDNxeTU1WXBRamFxWHM5L0pTU3A3WmFnNnRSZzlMYmNzVlRsZlg5WGwzZVpBS09TVGxHM3dpbHMxQ2x2Q3B0YlcwTG52MnRwRHhFUTA0ajlEQ2YwWnhQVDNaTWY4YlFHdU5TNDRZWFNpSlk2SXpiWUpFUXpXaCs5TWQyYWZmZkwzSHYwZnJqNTZlV1Y0Wm9UaDJiRXorZ09xRytvdGhqczFpaTFtOU9wWTdoQWFuQXVWb3ZKYlZWcFZKVVBMTFFsZ291QSsvbytYWUZSNUZxdStlWWxrcnlNS3JpMnFyYmNqbEZpd1VSQ3BnUkRBSzlGZjRmWG9zeUQ2WTVRd0tLWVRLNEZPTG5EY01KbFA4Ni9rU1AyNnpzM1A2RFIvSUJuMjBGc1p1SGtPcWZKSndHODFlN3BScG03VE5KV2NSckdnVEhsRkNCYkx2RlF5YTRqUXVrYm53ZEJ5d3pZQUZLZkpTdDlDYTNTbzlKTFB6VkpWVkx4S2ZXMTFrM1cybU13QU1jN3lqdmxaODN6MllaT1piME44TWxuczVEMVZvR0tzWEZ6N1c5ZWZ1UG83K1N6N09qRnUyWEhwRTBhRk0ydDJTa1hTVk0yTzRqNGhydWFPcTYzOFd5OWROYXFxOHFpSzFEYUFVdVZMdGVIa3dWSFJ2Y3J6UGdzdUJmZHV5d05YUGRLVWtiNFh4RGtuc3VlbVg2cDM4MTlRcS9HN0FMbndrbTcwZXd2b3hBSEhhQTNSNXF3WStjVmtrUHdveU1aMUVRV1BXakNZWi9sOWJJcnd2QzhlNHExU3BFV1pvelp3U1hCOVlOQzNPaWFhelNpUE9jbmwzTjJoNmhYZXF3NkcwbG5neS91MVFOV2JOWUFxNGRHd3pTSHlBTVFFVVFLQnZJTlMraFR0eWZlRENGQzBZSlE1UG5ReWdPTlVCWjNtR0cyTXY0ZUlIcGx1VHI3VjdnU2dBcWFwdTVkckRCNVdDQ3BjdGVFa29iUlVFMEtsdEJXQ2VsQUtPM3UwS3NMSTFWbWNEMDZYclpQaVlFUDltMmVJTlg1VVZjQVNNUFZyWk02bExmY0ovMG9KWVB1RG9JMkJtZW16dEdQK0tSanZSeTVmQW9ZTnJUdkdkUHlCUTRCT05ZdzI5NjVkMnZqM1orNDU5M01nV2pQR0JUU2EvYVFKTUhjSXBQQzRSUWw1WklUZ0NhdW82M1BONXRaVU1aUVNTVkJkZUZZd2JsVzlDaGxjSE9wQ0xWVG1TSzBTMU9XOHpqeTFzSkEwbFpFaXZIMWRDdFdlVytBOGhGWjlNd3FRekx6RlBKZDlCRXgvRVN2SG0vV092VHRhejNLb1h2eUgxKzg4ODR1OWxmNUFwOXFHemp2VnJEbzM3bHl2QlpPMEFTWkV3aHpRaGRHVXRVdmFONFVLQ2hQbVJFR1hrUVBWd0UvblJIWkJtK0tZMGdQQU5zVkx3cWFIa0lyREJMQ1ZBdDc1N1U4V0xtbnZJaUFCaUZHRUNoVnVjOWQzbFFlWTE0Y09scUZwUllETU5FalRQd1RSMThEZ1Q0RExWRmZIaVk0MTdMTnBobVRVKysvT1BYRGgxM3FqM2lDZlp2Qk9nTmJSRnNGY1J1WG9RYVZTcUZ1MVg5cWUvMCtxWHhzYVQ2bk9WZXBIOWJkVUdMNjhVcndVY0ZLSDNKblFyckdDcWFyNE5lOUJCU0E5NDFQd3lCVDBhMFVkTFc5YTFPNkhnRUtxdVJTK29peVF6WlhzTzdCblBnUGdteENSWHhWeGJPallBaWVmWmhpc0RmL08yZnZPLzAxV2hHeVdsN1lEMnNmQmVWN2xLck9IRG9NMmY5azhLVlJxTmMwQTRpYkN3aU1OMWExeWZvNEs1VlMwUXBPaXNHeUJ0T0thMG5OV0JwemFTNHF6aFlNaXZGc1JGRXJOZGxLdExJWHRxejFaU0FJRGlRVEdtTHRrUy84eWRzMC93SkNPbGQxejdJQWpJc2luR1labngvOTQ0Nzd6ZnhVZzZGUVhvK3VpUWN1RHhKc29oZmtRNlBFbCtPcDZXRjFTK1FidGM3LzZrZER5bjFkbXpvTlVQZWFPeVQxR0txT0NOQ29PdmZCY2lDZjdBRzJTcE5qbHVyaFhXYUFDaTRZQXI3NkgwczN0VlRjcHRUZ1NtS21HdVo3L0pXVHlidExTT3k0ZXQrTURIQ284WitzckY5ZCthK1B1czM5V2pJSEpkVlZrdERFY2FySkRnZ0c2NExHNmVsY2ZmVU5xZWJ1aGxIR29uRGZldG5tdDVpbFJ6Y2RwU2xScTFORjZpZnZxN2FmYXdPQkFaQ1dtQjNqZzZndmhRdUZ2YWtqWWhnRDNYd3ZNU09FTUFRTmlETXlPL29PSStKTWdldjF4a0R6SEF6aGtkMmMybWI1ejdZNHpIMXk3NDh6YjhsemIzY1hxVENNdEw1RVFqSHdsaGFPMG9IbmUvNmFXNHdYWHV4dUVLczBDb1ZFdDBGWlYrd0dFWTMvVnBDam5ZUFpEVGlYUTFGOWJpRjMzSEtnNlZMd1gwV01wVk9jb0JCV1ZyU3liVDhGajFONktlUGhhejZBaEFVUWVrQUY5Q0gzNmZ5TEhRbWwrcTZuendDRWltTXpBNU9iQyt0MGI3MSs1dUhhL1R2TWkvV3VyQ1ZLOFpDeGdwdm5uUzQyakRVYStSUFY0dTFPZzBxU1dvODNhcTVLdlZKZEtZRGVsVlVXQ3RHTnlUcXZLYjlVbnE4bGVRdUc5cTU4dCtxbUZ5YjN5aTBaZnVoWVh5VXVreUJwa0lNQ1kvaGVzMEQrSG9MTjJUN2VCUTNCSittUjE0NTZ6SHhxZFhia25uK2JGYXNhZzJDSU9LY3RSVURhZ1VOb1VUT1MyRG14S215WUROQm9kVmxZN1BLZGxSZnNXbkE3WXRxMWdLUWtxb284Q0JxNlVwaG9BeXB2NEVCMEtSaGJmRDhWRzFYVUpXZFBvR3BQT2xhNEtsOUQ1RGJQY2IyT2d0WUgwOFgwNHc3K09pRUJUQWVVdGozd0xxYnZBOGVwWmJsYlAzSDMydmFOeks1ZnlXUmE4dVVBeXpHTzROdjJyL2oxUTQ2dnZma0VTamJiRzFobWFhcWVhOW5xdG9QdGVWL1A4M0U3QmtPRzVsdnBhanBYcVhTZ3hwUDdBTllqVXBVN1RCaXpzbEVKVzF0b1JoQU5WZ1ZaN01kNVpBQ3VCckMxcklBcGZKMk42bDc2RG9WZUJRN3lRbDV3NkN4eXhHekJ0Yk54OTluZUdaMGF2VC9mU1E0N2l0WEp0VGpLcW5Rdk90OXM4SWV2WEd5UEJwL1hpT1EyYmY3ZEtFZjg5MUlwcVNHemRaOVR6NXR6ckFqQlIrYXYrdHhCZ1ZEb0RxcmV2M2J1K3hLRW9FWWlzb0YwRi9nTHBJek1ERVhtSGJQQy8xR01EcVR6OHJhVk9Ba2RFb0ZPTnRUdk8vUCtHNTFaZW5jM3N4a2tOcHQrUDJrQTJoN2RDRmU1ZzcrYWdxRjFRQTZIQlhIVThVdjJoS3d6ZmxBcGV2SlRGQXVXdFdMSmc5VGUvckxxVXJsVGVvdmdiZGtwTm9oYWlyTnEyUXRLZ0RBVnFTS1FLbGI0MkgxME5FUmdJakRIZ1o4ejNxaW0vaTVnNlkvTjBFamg2bG1QMTl2WDNqQytzdmo2ZlpxVTY5YUpHbTdvTzVFaFFWZmNDbGFyT21qWE5KbWhRbXlpa1NwMGgzelZpVHR2YTF3QnhPUkxYVmFZbWhLcjZhT2xlZHMwS215ZkJPcUJ3OVBDUWJzR0t1NndzMWZZY2xUNEo3bDNWMmNwV2hnSmJ2QlBFZmpRWkFQUU9HZE1Ib05BSjhIUU9PTmswdy9EYytKK3YzTDcydFRyVnhZc0Y4Q0lIK1RtbzI2L09LdjhIZnoxamhQcGUrRjJxZFlSRnBGbm40cWJWWUJ6eW5wUm1Ob1ZsUXlDVWhhc1B2T0RaSzlJbXVEMXhiZmtCVlZlZWhtMXVURXJYTmExcUYxV1VYWi85MUgrTTFqQkt2a3BXNklNQXhyUW5vRzBCTXR3U0x1NFVjSFNhWTdnKy9LdG5MbTE4bjhudHJtVUhVOHZhNU1QUlVvdGkxRkpxSDVGWXh4ZVZtazZOeFFvbTgwcFBvLzVRcGRydjBTdkdqWGMyY0ZGSldXdTdPbFZwVzRzcDE3eW9Way9SeHVwUVVIdmM0SnRUM1lKYzJ5S3dTN1FoYjVBVmVwOStLRUwrcGdSeWdVRzNZRGY2YmdDSExHamlZZko5Wis0NTkzZEVBSk1aVUd2ckRndU9RNEtxcm85SmswK0tFM1ZWcmJCd1d5K28xRnVFLy91UnRlV0NxbmE2a0ZPTHc0MmxPVlRGYXJYOTlxSlNrNU5TcFp3YmNSb2VzclZXdkdhTis3ZXBmdlBlUmRuWnBZOUE3SjVCcm85TWJtQ1VmS25wNFNmTVNJQk13dGpWbDQwNnNhekE1QWJFL01yMVN4di9IRVRRYWI1d1FyR2tlcUZRRmFuYkh3Y3drSUxMRnlmdEQ5TExoaGVGREVVdEZjd3BXbWJVckVxVWFvYWNvQklwNzF5NUFPV0VZamdDa0d0TG1MemRyeFl0ampudXQvblY2bjBZSHBkU0RheGtLSzMxY2ZqVG5TTkNzVlhKUEpWTjZvZWwxa1VrUUc1QVQ4c1A4bk4wZzYvaHY1Y0lMN3ZkYyt1Qkl4WTRaKzdlK0kxazFFTTJ6UmFvSGd0R3dmMXVjaE9sMnlCWWxxbVA0M01BR2xaV2pMWnQ3YW5mYlVITEF2QkpBRHJ4ekkvcUJHUDkwakNYWjV2a0xKTVRWdHRxR2RqVjd1MGFhZHlwY2c5YmpUZHV5RGU2S0ZNaW8vN29OVmtyTllBU1FFTC9iM09HYmlDWEg2OTA0Y3RBdDF4Vnk5TWM0L01yLzNaMGR1V1NudVg3NitzTEtYelI4eXFxSGEvcjdGS1dtSzhjTlVOQzI4clViZkh5aHNGdFpWNFJhdGptYmM5VUhCZlhLcXJ4WDB2alNrMU1TdFdKd2lLbGhHakdvNkdRYXJhWjFkWlZLZ3F1clhybm12Y3J2M3RkRFRVd2xSRUdBb0Z4RGdQZGwzK1FuOFhYOEJTZ0dRQjl4Sjg1ZE1za0RoRWhtMmJvalh2L2ZPMzI5ZTgybVM3VHNqWkxIL0hkQTNEVlZhcVduM1U1VngxWnkxOVN2NnFJTUVibGltSlVkMFViU1FpcHZFdlRkVzNMbG1FcVZkMnZQRkpyVDBVMTg2eGFUVVFvL21nUnNWcTJJWFEvdDhyTG9KMzE4NVhoTEZBUC9WcmN3c0lMQ3JZSkgzdXQ3eitydnRIRWdEUCt0ZWtsYzRtM2NaVXpRRjRHY1hCcmdFTlcwc1Q5NkFjMjdqNzNmUUtVSHJTd1VQdVF2WC9sQlMxNmhjSDVPZWc0aVBLMHVIMTFtZVh2SjVVUnQyRFlSaHZMNzFWR210OGlhbU84b0NyUHVQNWVWRndRREFOaEUxcHU1VlVtejhnVlc0a0Vmbm0yWDVSdEtnRDBaY0oyVlpYTCtpRGh2MHVSNTlyOWRnT0lTazBQaXQ0TnhodDRCcGo0cGRmYWJvbXFKbG9nUnM2dVhkcjR1MUUvdHZ0Z3R1b3JSL1g0KzBBZ1BDMjFZN1Zpb1JyWFhsdWJYS0pta1VEbm4vK1VwY3BTSFZQS09acXFlaldQQXFuVTBtaXZBSlhWMTlXeitxaFNOQ01VamlYd2kwZW1oVyt4OUxCSjBNUjZqS0FFU0hlRFNERy9ZK3djRHduVVpid2V3RC9PUjNZTU1CQVl3b3YrektOYkluRjBwckY2Ky9xN0JxdUQxV3lhMWp4bzg1U0JnNXoxNUY5WG5jWDN1WHJPNmZhWi9rV1h0a3MyNzhrcWluaGdoSHd0dFhJTDd0UmFoQUs3S1ZDeHdoOUZEWldrSTRIcUpNMG44RnFuZUFsQnNHN2k0a1lvbkFyaEJnN2wrRUNGYlVST01vVy94WUdqdks2cStQb3Y1RURtSlo1OURJRjFxL0dmUlIrL0UyWDhyMHcvNk4rWGdGNWU0RkNSSytCSFZ5K3VmVVdlemJPK0ZvN0JCN3ZSemRJaWtGUVlzV1NtS29XZ0RTc0sxS0t3V1BCYmZKMEhWQkliSlVJK2FXbGJrZFREajk2ZW9RdFZxdURFbHRycjUxQXlQTUpUNWZQNldEVVJxdFRaVU1sOFcrdC9LM3p2VlZaeU85Q0Y3bkY3RGMwTUlQUXZKL2VZRDhVVC9zUkxPY0h6c2dMSDVBWXFWcmV2M25IbWI0a1JTS3RkODFKU0M3Y2U4TExpSFFjamVydXAwY1lGNGIyOGVKSFc0bzNSM2g5SEN4WW9iRWZJL0czNldIQS9WODVyUUtIeFh6d2pnTXI4aS9nMk8yVkthazhVWGtOU0ExallFMTZlK0hJQjg3ZEl1bXJmb2J6V1NUaTRleGJnendHNkxyL0cxK1JTdE11UWw0akRYMVlieCtRR0t4ZlcvbU15aUpGbitZRkIwM2FHNWh6ZnY2UUVuNE5SdmVUKzZtTEE3WTEyMU85TmpRZHAxRTF0OTZ3L1U3V2V5aklDTDEyb0xGMys0OEZRdjN1Z1V3cHFvMFI1ci9KcFdsSnlPVVI1ZGEzeWFUeEQvWGY0TUtqRXJ0bFpWQ25VV3IvY1FBQ0lGcWc5dXNNTTZDY2xnVTFIRmQzOFp4NjlQTUFoSUovbDZLOE8vdVg0L01ycjgxbCthTm55VXN1aWd1cDgwL0t6VkJybXZ1cVdTdWVCVllvL1ZidW1KaDBQTEptbFZsZjRRT0dZWHoxV0J4MGhVTjJvY2hFODB6YWJRY0czRm5XemdxQVdOYkIyMVBkenZkZEtISmY2bkYrT0lPVDJNU1g1QVQyU2IyMEw0RGdLZWxtQVkzSURqdmpOcTdldmZTOFE3cW5wNmZDd3VEbVowUmp5bWhYV2tSQU01TldycUZFejZ1ZGI0NzNhNysvNW9BejZySTc0M21IUTFvYkc2c3hXYlRSb2FRTlVVcWhKWlIwdDBxQUZ4MjA3RzlTcFBlek5xWUV0WmFVaDRXcmt6dGNsVGlHRllDQmFvQ1A1V1ZGZ2VnbkNjVjRtNEdpc1hsejdpZDZvanp4dGN6Mi9YQlRDclVXazFBZENyNnFITHo1Z3NMYVJjUDc5NnFYYUlOQjJpWlE4VzlmK0d1VmI0RnZNN0ZmVnhPb1lUeTE0ZHVXY3V1V2pDT2EwR29VRXJvZCtORkJUbDBETll4UmVGNVp4NmxvcGhkeDNmendFanhhSXlEQWZtQjhIQURMQjR4L21NNGNPYlRycHVaNndkc3JUSEtPejR4OGNuMTk1WTU3bVdDU205NlA5Yll2OXJneGZYb3RoVVQ5TnNQWndyYm4xd2JDMVhZVlBPUUJLNFNkdXVYK05yeHIxelh0NHoxOEJ3eFdNVkZ4U1hsamNtUUFTcXA2WG9CNmc0VFFvUnZmZ1pObHMxMWxTYldvNDExbEMxbjFqNjVVajhkSjd3YWlFZWozaE01Y3hDSVU2U0FMa0FoUHpEK3FCL0IrYzRnT2k1dlRoVGRDaGdUTSt0M0xnc2dKQVp6bFd6cTM4Uk5XTGRuQUlIRVk0TGVqemxwcGF1Ti8vcmVPNi9zWmFpalhxRGtVRUJhUDZ2UHNmNU16Y201Wk81ZEpaUjVBaUlYTTRlaGNGYXFBS1ZLY0NqUHZMMUxCZFhzV1M0bGdOVE9XdHl3R290VThKZ0ttYlZiVlNaZXQ5OTVhUkJRR0FNaURybTUrUGhXOVhLY0dvbzBITzRWVTFPdGpIKy9EUDNudmh4K05oQXAyR1hyUmdTTi9uTmlIUDd2Zkk3V1ZrenZjRjFDS00vUEZ3YWlBc052ZEppdmU4U0Z6TXU3aDVvdGxyOWdZQ1ZBTTh5WUtucWlnRkVpSUVrVHRnZVkySzh4VUR2MENEUDkrRVhYbGZWRjljelo2cDNKcW9YalU4ZnhUSEs5UVV5V1gzK25ObHBsQVJBOHB4TVUvTVh4RURxSlRCMmNFLzgralFFdWZhRnk0ZnFGeWVhWXpPanI5NDVjTHFEMHRqS255K3BseW4rcm5EcTJ0MS9XdkIxVzBhcERRQlVnZG9PM3NIOXd3NHFleUtHZ0lERGd4SDUyYUJkZ29kWVBYQnVUaldFTWx0OVVwUm4wajlhSjJxeXdQSUlWZUsrUmxUWGwyRUhqaDVRdVhoeGxxZS9aN1lnNlNleHRXSkh6dEo2aGU0RVNnWFNBOC9sdmZOLzFkbG5BbS9lS2x6YU9EYzhTVjM3MXZHUno1enhQOHJnSm9YYlgvbHE2bzhWQWVqbTMva1EwTHVBRTF1YjVOZzBUTjZVRkRkVDFyVHBrcUdPc2k5UzZZTWZnV0h3alpaOWFuVUpKMEVDU1l0UzhDVTYzS0tvTTBLb0p5MGM0R2U1UW12b3BWL1M3VlB5dE9WWjIxNUtnS01LWCtqY3JaOExuTEdUbEdmdjlpVk5BQlV4ckdKNU8rQnpBL2Z4T2pib0VPcmFoeXBoUjhWS3hodE1EbzdmdXZvN1BodGVlcWRDWXRWczBWMEVEWHRSZE5pZmw5NFdmbE5ha2Rib0VYMTI5VDZ4Yi80Z0hrYnhkSFdKNlZxVThGOFJick40eGpadDRPcmkwS3IwckxwUkFoYjE2WXpsUFUwZ1IwZWI3YXpDdHBTVFEwN1JBQ1lJaEFVZ0FpTUZ1alkvSkJPekNYT0NLUUJNdnQvNXRHaEpjNHpIMzFpNFhreEJpTEEyZnZPLytQeGhWV29pRnVNek5vMXdmZTZiVk8zYzE0Y3RUR09GL2YxNFJxbzhYTmhoSWJINm5YWEF1UmI3aGZVVVJraUc3ZHN0bG1xRWxoUU1tMlpUb2xLZGdyVW9RWTJLdEtvOXRpK3pwYkhxTE40OVk1T21qbEpWcTRrTForbGNHSlFLSVhLdTRmUFpmY0lvNnI5VXFIeW1hdnRDbjZKWGEwS01sQXpCakg5azd4bjNoSDJ6ODNRb1lFVEQ1T0Y1L05aampOM2JmeXBsWXZycjgybmFYQm0veUY5M3RuNjhZTS82MEZLem1Ic3lnaUt5c3JVVmtaMEY1YXYzOWZkWkxPRmJadjdNa3NWSzNRWlZ4YW1OVHFRaWdIQjM3bDlFQXAxcDViRGhkdTUzUEFRb1hwVnU5Ykh5eGxUd3NyZXMyVFdlbnVhZW1ZSXJtQVE4UFVVbDVRRFh4SEQ1bjVEeUlYQ09YQnBnWW5sRzJhdnhKZFRuMytQRGplelVxRkRBeWNaekFFT0FXSUVySGpjRy9mL2dlU2hpZ2FFbzhPY3l4Zis5blEwS2x0b1BjMnBOU2hTajVzc3IyeDdubkFVcll1dnFqclN5cXhTK1ZQSXNXcWpXaGl2TWdHRFlHNmsvbmhsalJXUU42U0xkMDBISTNldGtjV0t6S0l4VW9EQ2UrWEVsNEVGZ2dlVDUzQXFwQ1ZWNnpXdWtuckgxOXBZOUlXM3A0TGYzbTd6VXNzd1FEa3dmRHIrWnduaTEyRnFianFBK2lhY0EzZTFIaGNCb2pnQ0dOKzg5Y3lOMWZiRmFTWFZ4K0hLaVZZbXZSa0tBWEpJeU0xcFEzWEVyaDhOd2RLQ0NLK0R0RlY4b0FhNWNiOVF6d0lxK1h1UlFscitLbFFxVno1b2RqbkVsUWM5UzFaVXJOcE5pSndpNXAwRkNNcFdHaENLcDFvOXhjMkRCd3Jxa1huWFFSQjYyU3J2VEZBNFk0UUk1bHIyV25XMi8yZVRpNk9mTlBuTmlaMURBMmYzMnU3OGswYVFqSHAvanBXcUdZakFJZzZaMTZkdGFzWGhJZEIyUmJ2Q01yZFJOZXlWNmdMTnVhQXVhZXIzcXQxM0RvQXFha2w0WGFQWlpRUEROQWNGdUJzcnk4cmpqUkcvVU04QUJEYUtsejZXQ1Mxbm1tcUhOTnBXbFkzaFNmZGtGUlNZc2tTaFhnRVZtN0YySHl0MG5QU2tRRFk3NlZOR0ZnQ1ZsRmVHc01lVHY3NnprZjhrTW5Qb01SVzRtY2lCOCsyUkErNlpIdGk1dlBNMkdBUGl4VU5wbmEwV25WL0FjZ2VzZlFIYzZremJ3dS9GYVNyZmFiWEdlVTlCQzM5V21oZmV1LzNuSEdwZVZENVNiV1N2Rld3YTNRUVJHMjFBN2xSaG5GT1pmcW9vN1VTVjkxN1pITlZTSExOTVhUSnhXWjhVMTB1dGljMW5sbWIzRkdDM2xZUUFEZi8xVi91RmIvNnd4QVM5bmQxRkQrdHZqMmY4QytZbUlqWVBEWnpQditmVHpZTmtWM2FldVd2amYxeTd0QUdkUy9VcFd4aHJQOERVeTk2Y2xEbUFMaFMrbFVEZEw2WlpYRlYxamFPYVlHTWUrc0pLV2xTNE9ZTnhNZjRYdzI5UXdKMHN6YU1XMVc5ZVowbjFTMld1eUhGMndkaGUxV3FUMXNWbzc1K29tQTBxNnZYcVZvbk5jTFNwelFkSitWQlZzeTljOEJiY3Y2SmIxcDdYcVlzVTFHbS8rZU9BSVFQS0NSR3B2NXVrMFMrWVZQc2RoUTlNaHdaT215UXh1Y1pnZlhSaGZHSDFlOFRjbk9nRDJpK3JzK1RoUVRSUGR0V0lhbC9uOUdQSW00dmJjY2lXMXUvZnVPc2lhcE1FOVpwcVNwL2p2N1lKVGZzdFROOVVPKzhIaytKK3p0dG1nbUtWZXF2dER6UGZGSUJCdlIzK20zTzBGN2V1VGFaV3FwWmFWOVJHUTFlUGw2Wm1sajhRUGJEeWptZ1EvNG81Wk5UK29ZRVQ5WnFYNUVSWXU3VCt4K05CZ25Tdm5ueWpTVzBXQU9iOHZuazZpSkxYd3R4dCtucDkwQXRHVHM4bHJRdzI3eDVoTWY4bEZHbDFmbWhwWDV0S0V3b25hVjVTS2RxODFpK0pyc2dPTEpLUzlXY3Vjc1hOYXpTcXdhaWx0SzYycTF3aTRPNHV2cndQWEswK1pIWFlzTTlRbWpSdWJpMW9zNS9iMGRNY2FaVDlVUEw2MVYvQlRMZXNFNXRQaHdiT0svL3dheHZINGw2TXphZXZmZnZPQzF1SWV2R0I2cWtEcEM1WjJzcnZQOHJYYTd6Sk1uVXR3SS9PQ0Y0a0FLbStMalJHT0NyUExMeDl5NE8zQXJIRWFWWHpxZFVwdFFNRkpna1Yrd0lvTkRUVWpXbUlMeHZLMkdwYjYvZnhLbFM0TnFaYXBGWkhtUkRhMmtuQkZkVmY3aHBUaDFyOUxkUTZvUzA5VVRHM1kwQXhZL2JVM3RmVFVOMGp1VHplSG9qYlRvY0d6cHUrLzZ1ckZmUWlpREhuZnVQdnZ1dU4rVFEvTUhEcXRBZzBDMGZQZldzOWhMcFVMeHBLbW4wRVIzczJ6dkJMeThXaDVQSkNSMEpWcTZVeC9sZEZGVnBBcmxrKzlLVGF0bVpsMWZ4cUNHd2dmeG5CekRIdXF6Y052NVlxWHgxUFFaeERjTXkzdWRZUlB2eTdiZjRMRHVoRVpSM2hLNUd3WTkzQkdNaTJVZ3dmei8vaXlwMW5maVJQczdhSGFhVkRBK2VwRHo5V1BnZUFlSkJnKzduTnI5dDVmcXVYakhvdFY5Q0NYMVhhVCtvY25LVDI5NEJVVjNYQ3krZFcxYWFlTEJBbDgrNVp1N3k5enBya3FWUVNqc1pCV2EraTFCbFJhbVhKUlJTSHpVZE5NclZJdW9JVnZmZk5lZVVLbzJXZTFscERTcG1CdEM2bFFtRWp0V3ZkRTFRRDVSQjYyaGlsNmxrOEh4eGdYUUJwRnVzL3BTNG1mMTJaT0Qyb3VuWm80SHo4RjM2LytHNXlRWDl0QU5IbUwrcFVJeGttQjVaMmh3RkpXSzR5aU94YmM0c0kyUTlNNGFBYzJoTlZQcHpUd3NhNHVhQ2wxV3NxQTJKcmF4Y1pQMVVwZ1ZyVVFLV3YyM0JYdVlYbFltOVRWQzRJK3NMandsOG9nVDRZTXFoVTZtNCtldVZ4Q0c1VmFoTmQxY3NYMkZLdVlaVWRyMzIvMUlvS0JOeGpUQzd2cmU4OXN2V08va3IvbDNTeFNua3hIUm80WC81ZnY2MzRIZzhTN0YzWnZ1dkRQL2RmM3VxWHdSYXQyb2RDeHF3Y2M5VEcvdFM4WkY3TmM2aU5zZXRxUmJONDZ3aGJmQS92Vnh0UzdWRGNjcTU1M3piTlRpcFh6ZW1vbHZiT2tUMm9qT2ZGd1VVOUt1Ny9acnZiQTNmRERyTjNEa0VFT0FlQ3FkMDNCRkM5T1kxQTBiQlFTNS82S2d2dzJIS0ZkOXFlTEs4bUFsaXcrL3pXTzZlUDcveVNudVVIY2swZlB1ZkFMQysrSzZXUTdxWGZMTGtHUi92UEloMUdEVnRVOWdCeTR3QTF0NHk3OVp1Rzc2YXBRUVRGNTR6aGxVTUxLZ2pLMWQzRWM1OXozdzRJRFpBUzZsU2JFNmxBUFpqZ2JHTmtxUjFveDA1TkxOZjdUeEJNd1ZTSGhDSWlPd1MxMUYzaXRkc3Q2SWpTNUtrK1Y5bTg4Z1drMC9RYngrdmo4MG0vZjluby9kUGlIQm80Ny81Yi82SDRiaktEMGJueFY0M1ByOElZZlNCdXJzaWtlUnFNTkErMVhYOXo0Smt6Nm9lSEFvYXVocHlFbDVUVGZ0VUxGMGlXa0FMYllWNFFhVVBhZUNrazlaTDE5bGJ2V1psNzk3Z0p3VkJVUThWb2JIK1ZTcEVmd2N2bEJzSFpncm45dis1K3JkSUNsUVpRdFduQk03ZksycmFLRmxLeG13TGdBa0dyVi91b2dsem5JN1VXLzZuaCt2aHZIOFJKY0JOWmJseE1rUTJyNFhpUWZGMjdsNk1Da2RZajB2WjluNzVvRXdETkxqNk1iR3RlRm9LbGphbkR3bFYxYmFGWXF0M0xYUmtFbDFYZHh2V1JVUUpWbzNiY0hhdkF0UUpJOTZPMWIyMGhDZVk3ZlB4YXlkOFUzQ3BNaVlzQWFLVXVaQnBvS1NvTnZqb0pFSFIyazQyazliaVhXRldBemUvc3dObG0yMHNlTVA1NjIrNjk1M2YrSzluVmY5dDRCOGNDT2pSdzduM3pBN2E1dGlXWDlxN3QzcUZuT1VpRnFscmJRMWdLK2JBdTBjT3J3Mk1IbHl3VnhlT0FaWDB2Qm1jQ05ha2lhYVJnczZKMTVaVXQ5MnZNSTVRQUtCbStSRWh4cjBhTjlTR21DZUE2ZkVNdHNBcUFLaGNTUENPNjJmOGFLSXVjeklWOHFldHU1VDQ1MWZPQjNBcDJKbWlUUU9WMFVZaUlhanNybDNrQUl3QWV3aGk0Sm1lRlVqU3NSOGhuWkJXa1dmWmxTVHk0aTBrOXVaOTM3ZERBZWNVZmVEVUFJQjdFbUc1TjMvekpmLzloR0NOUXlqZnk0R3krSHgyMHBocmJIL0RLR2hPRWw5ZSsxdFgyK1hYVnY5Y1BTWFVHdTNhL3VzU2JTdzF0c0RMbXd3T2tWTnRxK2xBRitPWEVaM1A5cWdPRkVmaXdtRkthaEZ4dDY2TUNQSDdVQ1hRQkR6TE1zVXFjOUdwVEpVTGxzZWljQnBMbXZhSG1vT01uUWYzNEpSQ2I0NDBNOHV1emIxTzc5QS9OUHVrL0R4MFhldnZyN3NUdFgzd243djJLVjRBSWI5dTlzZzJPMUFFZW9LVDlTbER3UWUzNy9sVHYrVVYzRGw1Q0hULzF2bTdVVTMvOW9ib2d0ZVBCbGNXOVdwNUk1b0VtR01YbmxxbmR1U0k1MmxyVFVJcUs0cGFoL0kzc25FakRVZEY0MVRVOXdRT2gzZ3Fpc2tpYm10RzhvbmE5SUl5QkRnZUFjdUFSVkwxK0VqeFA4THYyNGsxbW9IUDlkaDRyOERBQ0QrZkxsVU1EaHhTQm1NQmdYSC9zNnBmbTB4VEU5V3JtcTJraGhXUFh2RUcyTHZnWFUrM2x6UU5SRzE5VDBMZlNPTlc0TER6U2txZS9lblZOcXBTZW5pWWRicENvWFZUVTIxd3RCTFJMenJuU0xXQkNjc3hPQ0ppOVRWTDZuMzZkZVNoQm05M1FkTHpVNncxNlExQ3FaZjdmOGd3MW1HUkJGeGRVV1pEbnZodVdkNWlwWHRXYkdmVE9mQ2ZCb1lFenZUSEJiSE9LblJ0Ync4bjF2YTlRdlJqRmJQR0NWOTdHV2pYMktwOGhLQ2U0U1dacWhXbExUN2FvWmtYeEZxcXFEVzFQRUY1Y3I0VGFEL3NCMFJkcFBHeFQzczFwWEtWTUtkaTg4VCsvaG1MY0ZxQ01zcWxLREhFU3IxQUhLd05NZFZ2RnRrQmZxeVdXMHFLUkhucmV3eFIzZEoza0ozZ1g2TFRsOEZGOTcvVnJQQWh0WHhIeUxPOVJqNzhzV2VzaEhzM1ByM0g0Nk9na1FqTHNZZmZxenFVYlQxeU4yOE5zbXRRR2tNT0RvVWx0U3RPQkxtcjdIVlFXcWk3VkVDK3FuTE5sMjFxd1FGYTJQSGhsMUYya3JsWC9GTlIwWklVYlFKVUdla1VGRmYrbE5sc3Y0YkFtUWYzVnV4WWp2OWcrOFBrRnlwUzA3anhWSXd2Q3VabTVqN3p3eFI3OGpjK05ISmhUT04yYll2VEZsOTU4OGFFNzNqUGRuczR0ZW1qZ2ZQby9mUUlxaVREZDNMdVFwem1pbnNKODJSSCtibWtubWtCcUs3MmZHbmVRby91ZXE3N1h5dkdRaGFoeVFjaGdEVlp1T1ZlN2Q4dERoeUN0ai9kaE82c0Z5b25OdW1zOC9QZGdnYUZsbTR1TmJNT0x2S0FKSTZlOXAwN0NGWi9OaG9aTkxqSHJqcGJpRVJhTWM5d0lGWWJ4alRuY1BoNWxWSUZ0c3hDVllKOGFUTTNzYStUKytNZm8rdng4QkljR3p1Ty8vWG1BZ0R6VnI0a1RCWXJVZ2dHQVduKzFRV29SOU9iUi9pSituM010WXEvVlhkcjZQUVJGSFRSMW9FaTdpSzFyZHpTUHVldGlzQnpORjFIRnRld01uRUxsS244MHkxZVhaNVpGbk1ocVpJNHJCcDF3U1lHM1krcUJvL1UyTzRrbjFmNmJLOFZESTE5cTdWdEE5UkNjMnNsQzVNZjlIallmdi9iR3ozL204L09YRitFbWJKeW9IeU1lSkJpdUQxNEg5aDA4NXlIcmphODFXMnJIL1ZYemFseE1kY1k5QUxVZ09YRDZOSXBTVWJnZFNnc2gzMllDaGRXVkEyQ3R5SDQ5WVZ0VzhtczUybGVjRUsxZDBsYTNBTWJ4WnlFSmdpY1RzZTdwUWtMVVYyL1dXWm1xdGt3SXFwWkJvdjNOdFhGS2NIemVRTk5hendMN1NBVFVKOGl1UGpONzcvVzcwdmZlbUZQUFRRRG5tWTgvaVNkKzcxSHNYdDc1b3JpL09EbmhZZWtvYko2YnRIcUE4Q3FxSG12S1RXb1diSVY4L1h5MXBubXhhUHYxUTFYcXVXL2tnVkltMm1pbGlqRVZGS3c4ZkRpU3RNclBkcVUwVk04S2JNMEhidEVqSW5NY0JRc0c1Ym12V0dwL1cwNHRJQ0dCVEEyaU9IcHpjbWs0dDl5aGdSUDNZdlJYQjNFOFRGNTVtSnhVQjdGZmJrN1N0TjNoa0JBTUJNVThZM0srV2xnSFIvMTdLSVVXalA3dWRCWDJvU280NTdxaTRmNUNDZXlROHFMR1RtbVY4eldkaEtyUEgrWktzNThXeVZvNUZJYmgxS1JLVTBNODhEdXZYak5IV2k2b1VJckcrSFlGUFIySytnZ3dxWGtMbmp0Q0crZTJMN29EQUdMUlpqMVBjNWU4bzAzNXFvMnVMYVdBRnlNZmJwTG1OUVNsYWg5Nm54WkRzSDYyalIybzJSM3VkMFhsbHNaVmtEcU1wRzVSTmNmbjlyUE96ZXphc3RpR0RCc2s5UVlWRE91emJmclNwakhxMlRQVi9IcFNxYU1ZUjBvVERJMGwwNjBOYldING02VFFVU0FBaUFTR0NMUnIzaVRiNmR6ckRpMXhKcHQ3eUxQOFBJQlJjSHRVdjgvWFZCZXgyb3NqQ1Q0SEtCcVM0OGFxMjdtZDVwOExPYXlHa2xEWG1kODlsWHRVV2QvVzZSbXI5UW5uMlRCKzBsQXdSeVVLd0ZFd3RNRG5TcXZNVzFVdkxFYVhndGtyL1ZpVnZsNENWaFBwMWxmNmhCSzIrcFQxL1F0YUI3WWFSdHZzNy9Kd3ZiQTdKZ0FiWUNiWmJlbXFub3VQUXdObjgra2IySGwrYXgwQVYxTkYxVHI0bHRJODhGRHp2ZFNNOGxDamFiTmdxc2ZiRU5nRzNnVjZYekdTTjE0akdvMmxjSTgxRHlXcWxQWVZrRC9pMStDSDZtakZDQ0p2YUJUM3EyS2p2S2NOYTNIZnhZL1dRR1BRTCtvTEpsMmxqVDhDTUxhOHNnS0FEYUc5UDQ4ZFprQXUxeUg1Rnk5QUx1ZlZqRWJ6cmprMGNHYmJFMFM5K0swY2gyN29Pb0Rtai94MW5qa2FtSVVQWHEreEJkeDE5YU5OMGtpMXJYV21wc1lWOVZHeVJlb3NlT0EyRTZSS3RrL25qc25TZkIxdFBWRXlZQk1nMWN2cjNyQmduWTBVLzVSdDk4MlE0TDVGbTJxamZuRjllYllpQ1JwZWs2WnkyUUNydE1VSmhFL2RSbFFyNCtzZ0VHRmdXTTdPdWZEd3dMbjBobnN3M0JnK2xFMnpmVjcwL3VQREFSV3JBMUFiMDdhTC9NcnBXdnRxL0RDWFd0dmRHRkZiUnRqZ1VJVjMvS2g5aU00SVdhNFlNRU9pc0F3RjEvZ1J0bFpUK1BDaGRQTEhDY0dXR2NIVlhpb1U3ZmRNMzl3Y2F2NVFLczFmRkxhNkpoR0NZVXhxZi8yNTR0b0NoTFYydy9XRER3R1M0RG9uVGFlVXZxcTF5YmdacjFvL0JoSEZVbGxlV24rd1kwSnQ2a0hMNzJheFJTeXg0Rno0M3RzMGwxYWFOMzZXbzNKMXNaMUhZbnR0M21WZHYzVnBSWGxnMVdVc3lzVmZYcUxWZE1PR3hLUHE5Wlg2QWtrL2x4cDlNNmV6cE1sOUlYejJwM3JrZ2IwNlozM2Z2Q3NPRFp4UC9mSkhjTzN4cXh2SnVCNmpObi9JYkJzUWo0YnFMMWRhUG5NdW05T284RjBmdk0xK2VHelIzOXZ1VGJXemdqa1RyN1ZHemxGOXFzWG1LV2hsMFhuTkNoUVZWQ1VHVmJTbmlwVHhFaTlzWTMyRWJ4Mmc1aVFTUkZYMXEwaXl1dFJvMUZ1MUFTdW5hM1hNMVlLS2QwK0l0SnByNHh6YUhYM25sOTJMdUovMDgrbkJrN2NCaDlKQ2JxTEdVSHNQdVdqZXNGczlQVTlldEN0N2JTTm8yLzMydWZjaSsyb09oVS9ZdUVocVh3ak5YT1VVTWx1VnNZdDZ3L1lRNEJNU2hsbEFXK0hyNi9EcW5OUjZ3MWRlM01UZXNZeWdLUytvei90VW94SXFwMXA3dVZUeHFpcHFKWkUrd3U0ckphMlgzamswQnFiL1FFdjFBRzVDNG9BSXBMaGZ2L1hMcTZiTjY2NER5TFo2ejJPK2tsbU9UMjF3Q242M2VvejJhVU1ML3FSUklHQ05Pc2dkd3pWRGROcVVsbFp4VnBHU2xuZjk5L2I0c3JsZXZLTEZVa3FqbW1sSGxTKzJ6eXJPYUVGRjUvVGFZakduSmdoc0VwUi9XM3F0M3FyYW82S1VyZFhuSzMvNUxSdmxJY3loUXdQbittTlhrTzJsOTZrb3F0M3drTXlEbTdXSzJrYjhneHdMRGdWLzIwYnZacHZtalcxdDl6MEFVVm5hcTJpZXA2cHNLVzJYbFgrRGVocHRrSGxYRjNjdVJuL2kwdUZjdXZjQ3RxcDBaK2xkMi9kcFEvMk95a1BlQTlac2ZmaUNBbUJKdlp3L0hIajZndXZLRzRhV0d3NHhydHJvN0p6MDBYblZPRmFLQ0h4Z0pqbHlvdHJIVXcwVmRleUVuZVpIc1BDS2xzZlpIOVN1b3YwV2U3VGdPQnhnNjNpbUdqczBxNkFLYjFlTTlCcGorcHE4QnRVMnpob1RWaFEwbEtyQTltTjNwVnRyM2loZnM4ZE1JYkZyd3FWT2hiUUtoTXE4OGxLTU9QV282a0lCbkMrSHBQR2x4Z0QyTDRPZ29jc2tnalU2TkhCVXBNNXpFdDF1NW1ZQnFZNGFpMmovRW92cW4wY05CYmI5cWxveHFaMnJYcjVvcUpvbmpacjNDcnVHZ25QMXVMQjUvZEpTVFhzaG9nckRWNS9BRFRoMXR6S2FUeGg0YXdNUDJUd0pYLzBYQ0o1TEFtWU9ZOFZhMmxLMG95Z21EUWxWa1NERkY0TlNCbFZUdVRmK0RlcXVSM0w3bndZR1N0VGNLT2JEU3h6Rm95aFNReXhNbjNQVTlrN2Jpem9BN05yVXIrcndhUS9WZ05MbXJXbXBzbHJSZ21zcVA5dTBqenBxYTdlb1RDb1dGd1Rib05mSEtta3lqRWRycFIrQ3J5R2pOVWJqNEZNTnAzRjVjYVMrTk5zM0hKVmFpKy9GYlV5NVhpZW9VeHAxaE0wcU4raXQzcTNVUUtvMTFxTXQ2cEttcXJXRWZVcEErNzZkdUFuZ2lJZ1drYnphUy9QVXBsdEIvdDV6d091SHRKcDlFQjZ1YWZpVnYrVy93Umc5VHlETkViNWUwL0E4M2xRclFsVFBlNUlTVGFIRlVjTk9wV0hobXAyU2c4a050RktVOFg5OU5IVFJvOVRNSlNEUzBsT2VJZWNJNDdLbC9nRThFTW9PazBxNStoM3FWT2UvdHRJSE1XN3FrbS8rTlRleGJTam1MOFErY3FwMjVvRUJXZXNFQUlWR1VHVXFWMXhhQlZGdEpLd2VyUmhNcmYxYlpmNkc5R3MyYi83MWpiWlZKV0RSUXpUdkN2Y2tqYWFHRmxEWkx4VDhGcmg0TkdydlZxdkdCZnBtY1Y1YWdOcW1HRXNGeDlWM1F5aDNUSkFLd0NzTnJ2UklOVHRjUFNTMjdCWGYzdVo1QUlpRk1WV3B3aHk2R2VCY2dwLy9DVHBwUGxNZmd1RWJSTFcvaDd5czFvUTY0L2pmOVlHeHZiVnRiUWtsejgycHB3c3p2ZFFFVzJzTHcyY0szNGUwbEMwdUtTK3FaN0pwK2prY3RLUmVHbFVWRVJaQVRZbFdiWVVIYXRWUlVWVVVxMWRVUlhXcGpOV2ZLN3hYVzIvYXpneERWaHZscXlJVEVNemRKZTFtZ1BPVzR0dFJteklMYWIrYkxUaGZVODJxeG1kcnNRUFVlZ0FWWW9HcUlzQ2NITkZOdzZ4cDQxUXJxOHZBNXIzRDhiaFJmU2hxaWpMaElOTlErMFNLL1RMOTZONW1keERxcWwzTEFyY0tnS1Q2UURWbFRZSWkxVnJuRDgzN3ZyL0tTT3JQMkFHQUYrRGowTURSdWY1OFBzdUJSaExDZzlJaXliVG9tbkJrYjJQeFZ2WnBGS2w2c0VxYUI1aUR5OHA5U3JacGJ0STRkZWphdzlHeVVZYUtmeXBxVUNOZFlkZ25MWkxGM3o5TWtPNDlkMFZkRWw3VnJyNVdZK0NDNTZvZ0k5amlmUzRpMmc3V2xkREY1MXZyRlA5dUJBSURGalUzZmM3aHVkL2djOFlZV2R5TVJXY1huYXVOUEhOWis1Q3EzNXlxMnBaSGU1YWFmNGM2Z0d2MTE1cytSOXRzYW1IdHFzbmMreGRBb05wSVg3K3h2Wk5RWFZVTlBWemxzNFJxWC90cVRDa0FFRTdrVTZWUFphNDlXWlVtcFVRcElyeDkzV0ZIMWh3UWRlaFYrNUNLbzlTNEtueXpkWEJYK2NzbVk2ZTVTUU52SXVRR1gwM2hXdE9XQXMzZkZSTjJ6dmMyYXlPa2V0bVdjdUh3RlRMd1BDRVZOUGZBVUt4d1F6Z0NWK3RyVk5xQ2grWlRWQXUxRDdpTFlkMW9SS2lSU0hDKzByYTY2S3Rmdjk4SVh3WjYxbVB2aXZpNGNPMURCUThCZ0dxQ01LUWkzS2Fsa0ZSZWRQUG8zSGEzc1pDcm40V2hrZDlvYjgzTjJUaWZxYWd4alp2WG0zdVE3NHVPdGRHQ2NyVStsUG81MVBoZW1zd3JZZUY2NVhVOXE0MWNtWGs0OWtYYTIxOWw2dVlJVmVWTXI0M1YyYVl3d3B0UGdQSVpLelc2ZW13cnkzZnNtVHE4b2dSdlhXb1hjcXVtNi9xK2FHQ3plQmVCVlBIelVITzYySFkvelFHR05NdFd6ald2cXN6ek9MR3N5U0NTYUxlOUJUY0pIQ0VVdXppMlVpdVkybWllR0RqbytUbkZnMEc1WVFuSm9qRzd6aHczMlNiM2J2WlRTcXNnOGtpb3RXeEJKUlhGWTA2NXVZd2RIS2pZSG41Z3J4UUlXbDJvVSs1SWpRL3RUMTlCc0dMVkR6WmhPRkJZTmZtcXkzWXNqbVFTMkdpQlEvQkgrRXpCbjJxZC9oUkJTSTdRcXlieVNxT05LVzQ4VC8ycGRPaEI3WnEyc3Uxalp2VnJpd0ZSdjdJaFdkRFFXTm9mcU8zK2JUZVlUODJSczAzR05jUk1jUzAxTzNUdWNvUktmb0N3ZktXR0lOTy91RkZXSE5QTzBmc3IwcXpnZUZkUDNlT3lyekpSSmdQeHorTG5qS3BsVUMwUVhPdnZQWit6cW5yRG9sZlZpRzBRZ0EwaEp6MlpkODNOU0p3ZEdFa0ZOYjIyNkxDMlI1blg3TGJIbXZlOTVmQThlOEtkSzBiazJyazYyOTdVdmV2M0Q4NUw4RWFMRWJmZXVIbjNhWXo0N1FLOHJ1a2dZTHpXZTRYampZUTlQKytCQW1ZbENybzhVSkhDbXhkVmhFbXRDT0h5Z1FhbWZJQm9veDhEUlRHUVVQV244K0gvWVYzMU9xcFR2T0dia05vMWdrcmRKSWhNZElSZU5lQnBBQVVTaTBFcVpKWjJibW1oQTRyWi9YQlhsMEl0MWJaaWJlNHdGTDZxMm1nL1Q4OExibERjbzhYT290b0Y5YTMxNm0xczFqQ0gzRXV3TFMwN0lSelpHMjFvNmI5d1lyTDR0MkYvdUdOVWJqb1Z5cVlEQ0p6S2Uyb3VyUW5sWlUzOHRvMkNBc3lmU2E2RFk3K1J6NUltalZqVTUrZWR2OW1RbTFrOTlMMFFPdElXdmRyUWlRSmFBSjU1d3k0RmY4TythSHNabFV2YkdoR08zV0hGaTBIZDZnRkc3VmhMR3c2aVFMU0J2TzM1cFg0QTRlaGRzbDBWck1FSVRRaVM4ZGx6MWpadWUxOGxxdjNBS0dLQ0ovSmlMSHkyZHFhVlNwT2xXdFlqc2FCcWJvc0REQ0V0Tk9kOVV2MW9XVHVEb2NsOGJsNk5ody95QkhhTU5wZjl3emVlM3gydmppSXlodzliUnBDUXFQYTNqZCtvL2lKUWVRZnpWYVI1VkcvUEhCR0c4dEdLKzdmd3dLSHVWbnUvalhQaGRmV09yNDM2eFllcTQzZFJiekhBZUVDNDhvS0tlaFFPZmlKQitmcDVhZW01T3BhQzlqYUZSeWt0eFY5Y0ZHOERZZVhTNEh2MVhBblY5dXNiQ1JlTEFZZEF3RlhNb1p1Uk9BUkJGSzVmTDFpTFVLeUZLdFMzT1ZVc3BQMEV3N3hyS1BqYlVyeGR5eXBrL1Q0TkNzNjc1NnprRTVlbThGdE1ucmtYbFd3NUp5VWZoZHE3LzJOcXVXamJKeUNsZHM2OVRHbVoreWlFVDIzWlFHTzA4bzFyZVl5V1ltaUFzMlVRTFJwSWtOQndyTmZkY0pVSDE4L1Z4OHNSMTh0Y1VBRVlhTkxBZ21uK213R09DSENqK0lHVzE5K20vWVFYek92Z1JybGF4VzI2WVhoNEFmL2JOaDVFQnRUMXY1WjIxTjdIdkNZZW1PWWlyaVp5NTNWYk9JQTE5V1NVdVFKcThqY2MzVnpmVmEvM295OVFHUGsxNlZHRkdsWGZmUURRUnJ4Ym9GSlhwRkloUU9lOHF4RGN4WmpYTkphS1IydnBEd1RucW4xVGZoZ1JjamFmYkcvRXpXeWVTNFI4bGo5cHRISHBVWU51bXdkd0NUNXRnMnd3aW9ZUFZiaysvQnRVNTh0WCtGcXFsNWUzbk1mV0IxbEZYejFYcjc5WjQ3NVdVclhPVUtDMTZyLzFZNlZLRTNvNEt3azFSR29lSzZrd2JObXY0ZkV5MDB0NVZUa2lsZmRzYVZycjh3UTM4aGMxUlZmd2t0eWJFdDlJZjAwNEVMVDFiZlBkbFd0Qlc2amxWUmZjN0FDVmN2clI5b3R2VHVJQXhseVZtcU91TW5qVkJ5WnFZWUhhOHhUWDEwYjI0bXZiZ0JHVUQ5OVRtNUNiejhSMXlMU1ZwdFpEeFROVkI5RUY4QXRIajBZVGlwRzJkWmErdUl3cXgvMkEwTGkzNTlYSzZGMGRZZnpZWFNnQjlmc0dBMkdGanl2NmVQVytvVmV1ZWI4NjdTKzJpeGJXN0p6aW1kbzZYV3A1RVJyZnl1R2xaWDJxaFJ2SmRVM21TcVBKam00T09JeEh3cWEwTVcyaDhFajFlT1dDa0k5cUVxWUlFZ3pxcTVkcmsyNHR3dW1BTkFleDRlK3dNY0V6MWR2cWl6WmZXSER4bk9xcktaaW8yaGR0b3lTMUMvR3kyckpISkpoVENkdFQ0cEdLNXlsNVhnSXd1Q091UVEwSFVQQnkvSExxSXVrN1NyeTFUUWhYbEw1dzRDMzZ1VDVMMWZMVXRZbllvTVcxYTZVd1g1b0RLc0dRQVlsNjVFeTZlblRKT2tDQUdQa0l4RlJkNThIZzBqYmlTM0Q5d29LRjd0bGVwTFcrMnYzYlpNYWNRUG5nZSsxdWkwNHZmbDhMcU5xcU5wZDJGV3ppZFpiMjZpcW5GZ0hmVmRYb3pOcVk2d2Z4ZVhaQnBWM2wrWUlwMjd4Zk5aUlVKVk96N3FyODkvS0dFTEpxZTQwMTlhTm9YNWkrbzZTMnJpZ1VkaEpFRW4wa2x2bjVPZytmcklNWkVEeFpiNlBVWG55YklBSFFxc1kxS0N3VGdyT0ZoOEw1dUZvVmMzNHRZdTNnWE50UUx0WDIrMmVzaHIvTXUxZFRGb2Jwb1NxdHFvV2poQTBwOXEwSmpHU3BkR3A1M2xidXBCWUNGYkRnK3pKOEpieldkMm9wSzRKMk5CL0R0NklLaW5xL0ZYV1VkUzkwZXJsN1MzbHpkNmhTMmNGZmJjdWdWVm02NENzZ0FvRkJ3SE9MNmp0ODB2VkJEQkI5UWVmNmFqUEpyLzFiTUZTanlXNXNLdlM0YXQyK1AwS0o0ZDlYMnlWTkFiQmdkSjQ3NXRTUjdLdVE2cnNKRzFVVDg0dHRtOGJUTkc5VitXVzV1bTZnTjB0WFg3b0hVTUdjQlNqbjlFZEQ3UzN2YTRybmJwTWl0WllVd0s0MnVDb3pVS3VuSmJyQXZmdzV0eXVmbzNnWjRVbC9FWVZkV0pNMGRjNHBjMlFEVlN1UlFJaEV2YnR0VFBkMGFPRGthWTdaOWxUUGRxYS95UkdqMUpyYmxhdXFWbDJLajJySHQxMVpQZC8yK3FWeHBsWEcxWTdWSUZpY0x1MkpFQmdDbEhPRFVoVkUxWEcyNVNrV2pZRFNLSTJ3ZjlyUHo2bTRVRzBYM2JDcVMxYzJ1cTNkbTRKSnVpb2ZOOTVrczAxQkV5UjR5YVdRbURmY2VTNEtPYWE4dTVlUTgrNWVhUmpOVzR0VDNyRWM4emxRNndoZ1FCbk9LS1dQR0QyL2hrTW5YWWNBckJqVHJjbFBEamRHMzY0aUJhTk5SVjJwam9PdFZWUysrKzBqMnFSdXFBcTFVOEhlYlZlR2R3bGtZZHZsNFNoZFphZkF4b1ZJdlE1cVBDc1IyOS9FbFhMRjZFWlVxOU5lWDR6TUJRK0xHejNMRGlJV0ZGNGpwNjQxc3RaS2svMUNzcmNJTXNHRXpON29HRlNTdDVkL3c2ZXVRNnRrZGxPM2NhUytQWXhVR2hCK3MwOWRmWmI1MUNaWld0NTNXTFFPTHlKUURtQkVuNWhkMEZzNFV1QUE0SWlSN1dYdjNyNjgvY1RvL1BodTBRYUtGVmd4QUlJWWczSnVZWjZvckxGMXBZMit5NnEvcStmcjFCVEY3ZWVsNU0wNnRpcTNvNElwQzJIdXQyNFVCc0FGQTRzd1RNN1FPY05vZ2hGQWpIM2R4Z2hFdzZsUkJnSUR1NDdaWlo3VUhxMTJ1YTRJKzd2QjdneG1YTDhLaUEyWUFSVVpFR21RWWpCWmZESUhEMElvNXRqY0V4ZktDUUFRU1VVYVZDZStBdFl2eHBKZ1JHbnQrNXFhMWxyT00ya3B6WnJuZzc5dGFGOUl2bTRxR3o1UE1sVkdSdi9EOXBjQ0k0MzFiMlJKWmtFMGgyNEtPQUNnWXNiazZ1NDNHellmVllNSXlBeFVwS0NpR013TXhReGlCalBCR0lVMFRhQ1VobEk1QUZNelN0dWZybTBIbGNYWEJHV0tZcVhlVlRBakUwZ1V4UDBXd3dBWkdLMlFad3lqdVRCY2pRYkVHSUEwQUEwN3FaZ0JOQUVyRFlnR2tDRWE3Q0FaN1NHS3B5QXlVQ3FETVFKbUF4V25JQ1BnWkJmRURCSkdNdHFHbUFqWnBBK09jakJyQ0dtSUVFeVd3QWpCYUVZNjYwT25mUkFSc2xrZldScGh0dGVEemhJWW82QjFCQkdGUE90Qm9FQVNnUlVoN21za1BYRWdFNFI3WEpTSkJjdStxVG9qeWk4VmlWSml2UHdSU0syNmw3QUViTXNibE1ybGJ2SmNDcDZYUnNGR0RRRUZpVU9DOWxNcmVLalNGeVdJM0VBVEVXUm1mcGt1MjhUcjgraW1nZU95bkh3c3V6NzdNUldydjZGSmtFNm1BRTNCUkdCV2RpU1VDSVBoSGxiR0diWnZuTVh1WkFqaUVRQUZrQUlyUUxFR2tZRGMzK2E5WUVkMzhRL29FdFVaMklGZnhFcUJVRVVScXlhWW5BRVJHQmdBbHZrdEVHWWdUc0ZzRU1jem1DeUc2bTlodExLRHBKOURxUmxFTkxnM2dZcG1pSk1NZzVWZDZKbEMwcHNpVHFaUUtnTXBBK1ljeVdBUC9XR0tLRElRTVZDUkFHQ3dzdEtBMmFsWnpBNjQvbzI1aUdUbExITUl4SGoxenlEUEZYUm1vM1VGRWJSbVRIZDZ5RElGclJuWnRJYzhKMHozK2toVHdjN1ZOZXpkT0l1ZHpWWHNiQTR4Mnh0Qm16NVlSVWo2aE40d0E2bk04WXB0Q3hOWDdMbWdhU2drV0IwWWhmcEV3VGQvdEdhbCtHdjlqNktVTHhUNnQ2U1VHbk5WdERvY1c1Wk90SHRYRU1oZGVPUFE1NWt6QkNqaXZUT3o0WHRiMUtBSzNUeHdBRkJFTUtuNTBlemE3Slc5MjRiZnljUXcyakttMWpra0YyUnBocDFyTy9qS2IvZ2wzSDcvRkplZmVnRFR2VEcwREtIekdKT2RQaWJUTVNBam1Ga01yYVBDdUN1SnJXb0MrekFrR3FBY2lBU2l4VDZmbWtBd1F4eEZZQ0lRTk1BWkJxTXRnQWdxeXFDU1hjUnhDcE1EVVg4SFNUS0RZa0ovTklOSlk4VERQUXhIVThTeEJ0aU8waW8ySUxhakR5dUdHTTlQQ2hCMnFoVmJTWlVQSVdCb3JhRnp5NUJaYnArRUZZUEFNS0t0NldPY1drRU9VRlF1QkdabXE5SzVGdzBSR0tlT3FVU3dlbjRLVWhyc21JUFpnQ094S25JdXlMWEMzdTRRdTljSDJMcTZnczBYem1QNytnamJOOVp3OWZuYk1kdGJSMzlrTUZpZEFhSnRtNGlMSlFZVmx2TWFrRHRCVXNLanFsMTV5Uk84dVpyS0pvMWY4L1dINHV4QkZJeUFxbk5RVFluUkJKUi9ab0ZDaEQwMSs3OXZ4RHZnZmZJNHZTamdRQUNPR2Rrayt5NitNZnQ0dk5GL0xXWk9RTHY3UmpHd25kNkJUMzNvSzNEeHdWL0FxNzl5RjdPSmdqRUdSQVpaU3NpeUhveEVrTlNxSHNUMVp4WXdrd1VJR3hBMEJBWUNRR3R0R1NxeWlsZWszSXNWMjBrcW1ZRmRoY3hVMkFzaUNoRGwxREVGOEM1MHJxRHpBYlFRSkxmZG1hZE45YnJ3cnBFQkVVUEVKd0ozOTFRTXJRM0VxeEFDaUlFRlBSamtiRUIyRzNjTE01Z015SmhDalJLVXFnWUoyK2tZQWZLWklDZWIxczYyaThGc1hCdjgvUXlTWG9iUjNkZHg2UlZYQUhvU09vc3gzWXZ3L0JmVzhjS3paL0hDNDNmaitVY2ZRSzdQWUh3bVJUS1lPdUZDRnM4Q1NLSC8xOWpkYVFBZUNvVG1McHJGTlUyRVZWQVpyT0cwNmhXcWJGMjdBUE1BNFJWeC83Mk5TcXV2dFA0cWxpQUJROTMvdVZoSDg2eWpnbDRjY0J4eFJKamRtTDVWOWRTejBTZ2U2RlNYN1JOZzdWeU9xOCs5RmIvMWk3dDQ2eC85RFF4N1o1SE9uSnFpREpRaXkvQ3gxZlVCY1o0Y0NVWUlLMXJ0aU1ZUVVSQVJHS01nd29naUJoR2dqYkdBZ0IzOThzbHEwZS9NREJFZGRGNjFlMnlBWTNqTXVIdjY2OFV4dGwrYjR0dmoxcjh6V1FlQTFjaEFKREFHYmpSM3RnYXM4MEF4VzZrR1dGUVJRU2xsN3luR1NoTS80SExaVXFWc3YxaW5Ba0RLaXdUajNNZ0VNUUtUSlppbVBVeDNHY0lSd0l3b0V0ei9KVnQ0NVpzdVkvZkc1L0QwWno2Rlp4NjlBMDk4K2tGY2Zmb09qTllZdzVVOU96Q0pkVHdBZ0RFR1JodVkwUDV3d1BZVGlZV05FaHBNL3J4L3pJcGtLcjZXR2x4UXQvM1RCc2wyYUZWVi9EbmdhdXhsNkIwSlRrMG03UFIwL0s2QjlPWXFpWjZPQkRnZ0FsZzJwMWNuM3ovcXh6OFg5MkxveklQSE10WDZoUlF2UFAyMStPeUhIOEhyMy93a292Z2k4bHhETk1PQUlJWUFKTkJGcFhaVXJxZnU4Y3hOUkhidGlYdDJuYnNYSjZxUTF5SmNNamFWMjFFQUFITUppTEIrZXgzZ085L2VTOXlMQ1YrSUI1bVhjUFo4V0M4Uk9RQlJCV1FNQWhOZ0N0VW9WSlhJMlk4V0FKWEJIV0lqTjRBQzl5SzViU2V6YTI5a1IxNWlnQ0pBYlB2Rk1FeksyRE1yTU5zUlZKemlnUy9meEt1KzZnb3VQL0VNSHZ2a0JYemg0M2ZpK1NmdXgzQmxoT0hhSHNRWWExRXFCck5ZRlZUcnFqcFdOTWE0cmdnakNFSjBCSUFwN0JjSjlMZWFoQkp2clpiOVBZK29Vb1JhTVZPMk0vemwzakVBWVNDUzZGZllxTXlRYnIwNnBKdk5ZOXVzS0dLWTNQemI2ZVhkSHlNaXFFaFo5WW9ZSUVJVXB4aXZEUEg1RDM4em52aENEM0Z2eDQyd2xqeFRHMlBjWWl4ckU3UlJDUURid2N5QnRDQ2dVQ0VDaGkvMDkwQmllQXFsVEptbFV0eTVjalFqTnkvamx3d1RoWm1BUzBPLy9PMjlWOGJWWTlWRnBkalpDN1o5U3ZsSzdITVhiV0t5UDhXM3U3UkQvT2pKbklCVkQ2UjZvS2dQY0E4Y0RRSHVBUlJCU0lFcGdWSURlOTU2YktCMWd1M3I1M0gxK1V0WXV6akFtNy90ZVh6TG4vOTlmUFczdncrOTNtTzQ4bVFQT2h1QzNEakV6SWpqR0VrU1F4VTZadm5jVWp4ejhDZ2xna29wQmRRd1VFcHNYMFhqZEEwMEZhV0FHbDlhcVQzVkZNSHZ0RUJRVUliL3hTS0FoblJrd1BIMlRycWIvdWowMnQ2N1ZLd3NvN2dYRGlFTXh0dUFmZ2dmZTkvYmNlUDZEVVJSWnZYOGNBS3NZRnozYUU3UGI5d3V1TWFZVXFMVUcwVmtwWUFWK1M2cmxiTjVQQUREandXYloxU0JNYnE0aG9nZFVNcHlWVkRZN3JRcW5lc1VpSFV5S0NvKzVGVzBZbkNrUXRyNEYyeTBkcDNLVUVxQm1RT0phK3RtanNEUkNGQURnR0lJSXBBYWdxSVJXQTNCM0lkU2ZRajNBRTRnWUdoRFlQU2dFSU81QnhYMXNMY2Q0WVVuejhDbzgzakROMnppMjMvbzkvRGw3M2dmSnR1WGNmMjVWVmpGeFBhZFVoRjYvUjdpSkFHS1BxY1MwTUV6aEZwYjI1SnJxdjRNaUlJUEtvTWN2TXZhOVRrQ1ZUQ1lkS3RVTlkrSGl2cEpFRUU5U3VCMzVhenRmSnI3ektPakE0NnZNR1pNcjArK0o5MmFQcTJTeUtrZHpuUXp3R2hqQzl0WHZob2YrKzB2UnE0dk85dkVkMUFJSUdzckdOUFVhYjNVYUtQd2VLbEtWVnJvSkpvT21EOHM2MVdlcWxwWURxRlVTRkxMek94K2gyV2RvYXJFRHZDa1lFaWM5MHlzNTV6dHByVWViT0V6ZWVuQ3JBcHcydmE2Y3h5RG95R0lJaGdCbUhwUVBFS2toaEJTVmhsVVZzcFl3TVFnRlVGeEQ4d0RFRGtKaFFoRXNkVlRJSmh0RzF4K2NnalZIK09yLzZ2bjhFZCs0QU80L2Y2UDR0cnpRRG9aZ2hYZ2ZkVkprcURYUzBwcEtWNzE4WjNmemg5bEZFQTlMaTAwZUh3U0VJK3VvR0RsbGZwQnJ2MWVaWDFCL1NoQkZ3NWFMUHd1a3JuTmJ0Q1JBNGVZUUlUdDNSZDIzcXBudWVhSUtxWUJZWWFWRGNiam4veWorUFJIejRQaXk0aVVWNEdxa3FOVXE5b0FnS0pNMi9mNUZMNnRxdnVPeUJ1aTFUckxldjJMWW1kakJhRkdiQXBwUUF3Z0FoUUQ3Q1ZNSVgzdHMzalFVZkdkaWdsQWdFb1Z5Vm5PVmoyMDBvMnBCNllCaEdNUUs0QVZTUFhBYWdTbTJLcTRwQ0FjZ1ZVZlVkUUhwQTlTSXpEM0FTZzdWMlFFTU1iNUppSVFKK0Fvd21RdndndFBYOEFkRDYzaGovN1FJM2pMdDM4QTZmUTZOcDlmY1E5bjU2cWlLRUsvMzBjY3gxYjZvR1RpaWxNQTViRVNHTUc3a01MU1FKZzVwN3dvZkhjSGVhL2xXNXpIRW43dUJneXdLTVJwL0s0b1UxQVpWejd6Nk1pQkF3RW9Zb2lSeDNhZTIvNWFreHNicnhRWTNuR3lpOUhhQmo3eHZ1L0FJNS9zSSs1dkZvemt5NFNHdkQ5V2ZwY0d5SnBxV2p1VlVxYXRSd1YrRTFZQXBTR09VbldUeG91MFlUU3NBamN5Mn
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