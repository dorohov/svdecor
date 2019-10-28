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

        var ourWidjet = new ISDEKWidjet ({
            defaultCity: 'Москва',
            cityFrom: 'Москва',
            country: 'Россия',
            link: 'modal-map__inner',
            path: 'https://www.cdek.ru/website/edostavka/template/scripts/',
            servicepath: 'http://frontend.dorohovdesign.ru/svdecor/service.php',
            hidedelt: true,
            onChoose: function(wat) {
                console.log('сработало')
                $('#f_delivery-a').val(wat.cityName + ', ' + wat.PVZ.Address);
                $.modal.close();
            }
        });

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
            'data:image/png;base64,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',
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5qcyIsImJhc2tldC5qcyIsImNoYW5nZUNvbG9yM2QuanMiLCJjb3VudGVyLmpzIiwiZHJvcGRvd24uanMiLCJtYWluLmpzIiwibW9kYWxzLmpzIiwibmF2YmFyLmpzIiwidGFicy5qcyIsInRvdG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCQoJy5iYW5uZXInKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBsaXN0SXRlbSA9ICc8bGkgZGF0YS1pZD1cIiVpZFwiPjxhIGNsYXNzPVwiYmFubmVyX19mb290ZXJfX2xpc3RfX2Jsb2NrXCI+PGRpdiBjbGFzcz1cImJhbm5lcl9fZm9vdGVyX19saXN0X19ibG9ja19fdGl0bGUgaXMtLXR5cGVyX2ZiLS1vblwiPiV0aXRsZTwvZGl2PjxkaXYgY2xhc3M9XCJiYW5uZXJfX2Zvb3Rlcl9fbGlzdF9fYmxvY2tfX3ByaWNlIGlzLS10eXBlcl9mYi0tdHdcIj4lcHJpY2Ug4oK9PC9kaXY+PC9hPjwvbGk+JztcclxuICAgICAgICAgICAgdmFyIGxpc3RUb3RhbCA9ICQoJy5iYW5uZXJfX2NvbnRlbnRfX2xpc3RfX2l0ZW0nKTtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTbGlkZXIgPSAxXHJcbiAgICAgICAgICAgIHZhciBpc1NsaWRlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxpc3RUb3RhbC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgJChsaXN0VG90YWxbaV0pLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc1ByaWNlID0gJChsaXN0VG90YWxbaV0pLmRhdGEoJ3ByaWNlJylcclxuICAgICAgICAgICAgICAgIHZhciB0aGlzVGl0bGUgPSAkKGxpc3RUb3RhbFtpXSkuZGF0YSgnbmFtZScpXHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0lkID0gJChsaXN0VG90YWxbaV0pLmRhdGEoJ2lkJylcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZmluYWxMaXN0SXRlbSA9IGxpc3RJdGVtLnJlcGxhY2UoJyV0aXRsZScsIHRoaXNUaXRsZSlcclxuICAgICAgICAgICAgICAgICAgICBmaW5hbExpc3RJdGVtID0gZmluYWxMaXN0SXRlbS5yZXBsYWNlKCclcHJpY2UnLCB0aGlzUHJpY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxMaXN0SXRlbSA9IGZpbmFsTGlzdEl0ZW0ucmVwbGFjZSgnJWlkJywgdGhpc0lkKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkKCcuYmFubmVyX19mb290ZXJfX2xpc3QgdWwnKS5hcHBlbmQoZmluYWxMaXN0SXRlbSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChsaXN0VG90YWxbY3VycmVudFNsaWRlciAtIDFdKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0U2xpZGUoaWQpIHtcclxuICAgICAgICAgICAgICAgIGlmKGlzU2xpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1NsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGVyID0gaWRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmJhbm5lcl9fY29udGVudF9fbGlzdF9faXRlbScpLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmJhbm5lcl9fY29udGVudF9fbGlzdF9faXRlbTpub3QoW2RhdGEtaWQ9XCInICsgaWQgKyAnXCJdKScpLmFkZENsYXNzKCdpcy0tY2xvcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5iYW5uZXJfX2NvbnRlbnRfX2xpc3RfX2l0ZW1bZGF0YS1pZD1cIicgKyBpZCArICdcIl0nKS5hZGRDbGFzcygnaXMtLWFjdGl2ZScpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoJy5iYW5uZXJfX2Zvb3Rlcl9fbGlzdCBsaScpLnJlbW92ZUNsYXNzKCdpcy0tYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICAkKCcuYmFubmVyX19mb290ZXJfX2xpc3QgbGlbZGF0YS1pZD1cIicgKyBjdXJyZW50U2xpZGVyICsgJ1wiXScpLmFkZENsYXNzKCdpcy0tYWN0aXZlIGlzLS1jbG9zIGFuaW1hdGVkIGZhZGVJblJpZ2h0JylcclxuICAgICAgICAgICAgICAgICAgICAkKCcuYmFubmVyX19mb290ZXJfX2xpc3QgbGlbZGF0YS1pZD1cIicgKyAoY3VycmVudFNsaWRlciArIDEpICsgJ1wiXScpLmFkZENsYXNzKCdpcy0tYWN0aXZlIGlzLS1jbG9zIGFuaW1hdGVkIGZhZGVJblJpZ2h0JylcclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY3VycmVudFNsaWRlciA+PSAkKCcuYmFubmVyX19jb250ZW50X19saXN0X19pdGVtJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5iYW5uZXJfX2Zvb3Rlcl9fbGlzdCBsaVtkYXRhLWlkPVwiJyArIDEgKyAnXCJdJykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUgYW5pbWF0ZWQgZmFkZUluUmlnaHQnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmJhbm5lcl9fY29udGVudF9fbGlzdF9faXRlbScpLnJlbW92ZUNsYXNzKCdpcy0tY2xvcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5iYW5uZXJfX2Zvb3Rlcl9fbGlzdCBsaScpLnJlbW92ZUNsYXNzKCdpcy0tY2xvcyBhbmltYXRlZCBmYWRlSW5SaWdodCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NsaWRlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA2MDApXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTUwMClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0U2xpZGUoMSlcclxuXHJcbiAgICAgICAgICAgIHZhciBjYXJvdXNlbFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldFNsaWRlKGN1cnJlbnRTbGlkZXIpXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGVyKys7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFNsaWRlciA+ICQoJy5iYW5uZXJfX2NvbnRlbnRfX2xpc3RfX2l0ZW0nKS5sZW5ndGgpIGN1cnJlbnRTbGlkZXIgPSAxXHJcblxyXG4gICAgICAgICAgICB9LCA0MDAwKVxyXG5cclxuICAgICAgICAgICAgJCgnLmJhbm5lcl9fZm9vdGVyX19uZXh0X19ibG9ja19faW5uZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0U2xpZGUoY3VycmVudFNsaWRlcilcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZXIrKztcclxuXHJcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50U2xpZGVyID4gJCgnLmJhbm5lcl9fY29udGVudF9fbGlzdF9faXRlbScpLmxlbmd0aCkgY3VycmVudFNsaWRlciA9IDFcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKCcuaXMtLWRlbC1mb3JtJykuaGlkZSgpO1xyXG5cclxuICAgICAgICAkKCcjZl9kZWxpdmVyeScpLmNoYW5nZShmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICQoJy5pcy0tZGVsLWZvcm0nKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJyNmX2RlbGl2ZXJ5LWEnKS52YWwoJycpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHZhbCA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih2YWwgPT0gJ2QnKSB7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZSBpZih2YWwgPT0gJ3MnKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuTW9kYWwoJyNtb2RhbF9tYXAnKSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJCgnLmlzLS1kZWwtZm9ybScpLnNob3coKTtcclxuXHJcbiAgICAgICAgfSkgIFxyXG5cclxuICAgICAgICB2YXIgb3VyV2lkamV0ID0gbmV3IElTREVLV2lkamV0ICh7XHJcbiAgICAgICAgICAgIGRlZmF1bHRDaXR5OiAn0JzQvtGB0LrQstCwJyxcclxuICAgICAgICAgICAgY2l0eUZyb206ICfQnNC+0YHQutCy0LAnLFxyXG4gICAgICAgICAgICBjb3VudHJ5OiAn0KDQvtGB0YHQuNGPJyxcclxuICAgICAgICAgICAgbGluazogJ21vZGFsLW1hcF9faW5uZXInLFxyXG4gICAgICAgICAgICBwYXRoOiAnaHR0cHM6Ly93d3cuY2Rlay5ydS93ZWJzaXRlL2Vkb3N0YXZrYS90ZW1wbGF0ZS9zY3JpcHRzLycsXHJcbiAgICAgICAgICAgIHNlcnZpY2VwYXRoOiAnaHR0cDovL2Zyb250ZW5kLmRvcm9ob3ZkZXNpZ24ucnUvc3ZkZWNvci9zZXJ2aWNlLnBocCcsXHJcbiAgICAgICAgICAgIGhpZGVkZWx0OiB0cnVlLFxyXG4gICAgICAgICAgICBvbkNob29zZTogZnVuY3Rpb24od2F0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0YHRgNCw0LHQvtGC0LDQu9C+JylcclxuICAgICAgICAgICAgICAgICQoJyNmX2RlbGl2ZXJ5LWEnKS52YWwod2F0LmNpdHlOYW1lICsgJywgJyArIHdhdC5QVlouQWRkcmVzcyk7XHJcbiAgICAgICAgICAgICAgICAkLm1vZGFsLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLm1vZGFsX19waWNrZXJfX2Jsb2NrX19pbm5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgdGhpc0NvbG9yID0gJCh0aGlzKS5kYXRhKCdjb2xvcicpXHJcbiAgICAgICAgICAgIHZhciB0aGlzQ29sb3JOYW1lID0gJCh0aGlzKS5kYXRhKCdjb2xvcm5hbWUnKVxyXG5cclxuICAgICAgICAgICAgJC5tb2RhbC5jbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgJCgnLml0ZW0tYmFza2V0X19saW5lX19jb2xvciBzcGFuJykucmVtb3ZlQXR0cignY2xhc3MnKS5hZGRDbGFzcyh0aGlzQ29sb3IpXHJcbiAgICAgICAgICAgICQoJyNyYWwtY29sb3InKS52YWwodGhpc0NvbG9yTmFtZSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgY29sb3JzID0gW1xyXG4gICAgICAgICAgICAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNNEFBQUdtQ0FZQUFBQTB6N3RIQUFCbnVFbEVRVlI0MnV5OWE1UmsxMVVtK08xOTdvMkl6SHBJVmFXU0pWbklzaVMzRE5pV0VaNmVOWTFmR0xscGd6RTBES3pWbUtGaG1Ca1ljSHZBVFkvQm1MRU1HRENzeFdKMTk5QU5hMmphUE15QUdIb0FnOXZEWU1rdjJvTnQyYkpsYk5tV1ZMYjFxbmRWVmo0aTR0NXo5dnc0NTl3NGNmUGNSMFJtbGxMeTJXdEZaVlpreEkwYjk1N3Y3TDIvL1FLUzdDc1JFVnBmWC8rZGl4Y3Z5b2tUSitTM2YvdTN6ZHZmL3ZZZlRGZG1md21uUzdBL2hZaWdsQUlScFl1UmdKTmtBYzBEWTR5OVNaeHVVd0pPa3Q0YXgydWR3V0NRTGtnQ1RwSXVNY1pVRDYxMXVpRDdVTEowQ2ZiaGJ1Wk1NeUlDTXlmd0pJMlRwSy9HRVJHSUNKZ1pSVkdraTVLQWsyUVJjMDBwbFM1R0FrNlNQdUsxallpa2k1R0FrMlJSUDRlWlFVVEp4MG5BU2JLSUVGSFNPZ2s0U1JZRmpUZmJrc1pKd0VteUFIQ0lxTW9lU0pLQWs2UW5hRktlV2dKT2tpWEV4M0VTSloyQWs2VFBUV0crenhnalBoQ2FmSndFbkNUZFpwcG9yZDhsSXBxSWtHVXBLeW9CSjBsZkUwMjhyNU5TYmhKd2t2U1UwV2cweDZvbEh5Y0JKMGwvazYwQ1RpcGtTOEJKMGtQRzQzSEZxQ1ZLT2dFbnlXSitUZ1dlSkFrNFNmcmVHR2FJU05JNENUaEpGaUVIUWdBbFNjQkpzb0RHOFhSMGtnU2NKQXVJcndKTmtvQ1RaQUZKaVo0Sk9Fa1dGRi9BbGpST0FrNlNKY0NUYW5JU2NKSXNTUTZrN09nRW5DUUxpTlk2NWFvbDRDVHBLejdsSnRRK1NSSndrblRJYURTcXdKSzYzQ1RnSkZsQzByU0NCSndrQzBqWXlYTTZuYVlMa29DVHBJK1A0L3NOSkVuQVNiS2dwTUZTQ1RoSkVqbVFnSlBrOHZnNFFFcTVTY0JKc3RpTlNXWFRDVGhKRmljSGZKNmExanFsM0NUZ0pPbnI0M2h0azFyZ0p1QWtXVURqZVA4bU5leEl3RW15b01aaDV0UUNOd0VueWFLU0pySWw0Q1JaVU5LNDlnU2NKRXRxbTlRN09nRW55UTQwVDVJRW5DUUxBa1lwbGVJNENUaEora2pZZEQyWmFnazRTZnJlRk9ZTHpQekZOTVl3QVNmSkFuTG8wS0Z6elB3QkVVR1daU2tBbW9DVHBLK1VaUWtSU1daYUFrNlNSY21CUE04cmdpQkpBazZTQmNEak02U1RKT0FrNlNFKzNTWnBtd1NjSkV1SVVpcUJKd0VuU2U4YjR6S2pVeUZiQWs2U0JjUVlVM1c1U1pLQWt5UkpBazZTdlRYVlV1WkFBazZTQmNVRGhvam1wbEFuU2NCSjBpSktxYXBoUnlwa1M4QkpzZ0E1NERWT0lnZ1NjSklzcUhXWXVlcDZreVFCSjBtSCtFSTIzKzBtU1FKT2twNlNRSk9Ba3lSSkFrNlNKQWs0U2ZZOVFaQUdTeVhnSkZuazVqQ2pMTXQwSVJKd2tpd2lubGxMQkVFQ1RwSUZnWlBuZVFxQUp1QWs2U3UrcklDWms4YlpoNUptU094alVpQ1ZUaWVOazJRSk04MFlrNGJuSnVBa1dVVDh0SUkwV0NvQko4bUNHc2RybldTdUplQWtXVURqK01HNUNUZ0pPRWtXdlVITVZVZlBKQWs0U1hxQ3hsZUJKa25BU2JLQXVXYU1TYVhUQ1RoSkZnVk8wamdKT0VtV0pBaFM1a0FDVHBJRi9CdWZPWkRhUXlYZ0pPa3BJbktmTVVaU2w1c0VuQ1Q5VFRRcGl1SmRBRFNBMU0wekFTZEpYeGtPaCtJMFQyb1BsWUNUWkZGeWdJaFM2WFFDVHBJRi9Sd1lZekNkVHRQRlNNQkowdnZtdU9GU2lWVkx3RW15b0ttV0dMVUVuQ1FMeUhnOHJrb0xVc3BOQWs2U0pmeWNKQWs0U1pZQVRvcmpKT0FrU1g1T0FrNlN2ZGMyekl6RGh3K25GT2tFbkNRTGFodzZjK2JNRysrODg4NTByeEp3a25SSkdMdlJXcWY3bElDVFpCSC9ob2dTczVhQWsyUVpIeWRKQWs2U25oSm1SS2RjdFFTY0pFa1NjSkpjSG5NdFNRSk9raVZBa3pJSEVuQ1NMQ2hwWkhzQ1RwSWxSU25GNlY0bDRDUlpVT01NQm9NYnYvcXJ2L29sNldvazRDVHBrTkZvVkFVL3A5TXBUU2FUbEsrV2dKTmtVVWxqMnhOd2t2U1VjTGhVa2dTY0pEMGt6QndRa1RUU01BRW5TVjh4eGtCRTBzU0NCSndreTVocUtRQ2FnSk5rQ1VuVHB4TndraVRnSk9BazJYdkFlRE10ZGZOTXdFbXlnQ2lsRXF1V2dKTmtHYTFqakVrQjBBU2NKSDFGUkZDV1phckpTY0JKMGhNd05CZ01ialBHTURNbk9qb0JKOGtDNEhtMXZ6K0pWVXZBU2JLQTFpRWlGRVdSTWdjU2NKTDBGWi9ZYVl5Qk1TYjFqMDdBU2RMcnhyaHlhWitybHZ5Y0JKd2tTMnFmSkFrNFNmcjVPUkFSS0tVa21Xb0pPRWtXMERSYWEweW4weE1pOG9sMFJSSndrdlFRejZabFdXWSsvT0VQWDBoWEpBRW55UUtTMG0wU2NKSWtTY0JKa2lRQko4bit2RUhNS2QwbUFTZkpJc1JBK0VpU2dKT2toNFE5MVJKd0VuQ1M5QlFmdzlGYXAya0ZDVGhKRnRVNnFmb3pBU2ZKRXNSQThuRVNjSklzQVpxVTRKbUFrMlJKY3kxcG5BU2NKRDNGejhZeHhzdzFZRStTZ0pPa0ozaVN4a25BU2JLQWo4UE1xVFZVQWs2U1JjUUhQdE5ncVFTY0pBdUkxaHJHR0V5bjB3U2NCSndraS9vNHZrbkhXOTd5bG5SQkVuQ1NMR0t1SlVuQVNiSUFPUURNcGhVa1NjQkowdE5NWTJac2JXMmxpNUdBazZTdmhKTUtVaUZiQWs2U0JUU09NYWFLNXlSSndFblNBemZNZklNMzE1SWs0Q1RwSWVQeCtFWVJlU2t6VjFvbnlmNlNaRHp2VHpPTmdObWtBcTMxRndFa2FpMXBuQ1I5eUFIM2tLMnRyWGNTVVFKT0FrNlNQc0R4UDh1eVRLQkp3RW15Z01tVytnMGs0Q1JaUnV1a2dWSUpPRW1XOUhPU0pPQWtXVUtTMWtuQVNiS0F0aW5MRXVQeE9QVWNTTUJKc2d5QTBoakRCSndrUFdROEhsY2wwNm42TXdFbnlZS1NaUm15TEVzK1RnSk9rajR5R28wQW9NcFRHd3dHNmFJazRDVHBkV05jYTZqcGRJbzh6OU1GU2NCSjB0ZkgwVnFqS0lwRURpVGdKT2xycXZuZ1p3Sk5BazZTQmNSbkRDUmlJQUVueVJJK1RpcGlTOEJKc29DUDQ5dmZKbE10QVNmSkFwSktwaE53a2l3Sm5EU1JMUUVueVlMaVc5K0tTSXJqSk9Ba1dRUTRmdUowWXRZU2NKSXNlb09ZazhaSndFbXlxS21XSkFFbnlZS1N5cVlUY0pJc0FSb2lTcG9uQVNmSk10cW1MTXRFU1NmZ0pGbkV4ekhHUUNrbEFDNmtLNUtBazZRYk5PUW5GWXhHbzRmdnZ2dnV2MGhYSlFFblNidUpSa3FwVjR1SWNzTno1Zmp4NDRrbDJHZVNwaFhzVDQxekd4RlJDbndtNENSWmdoanduVzZTSkZNdFNRL3hZRWtsQlFrNFNSYTVLY3hWUGM1d09Fd1hKQUVuU1U4ZkIybitad0pPa2lVMGppY0dtSmx2di8zMlo2V3Jrb0NUcEllUDR6Vk9XWlkzR21OZW1xNUtBazZTSGhvbnROeU1NU2xoTFFFbnlTS1M1M21pcEJOd2tpeHFxakV6aXFKSUZ5VUJKOGtpSmx1V1pha0NOQUVuU1YveDlUZ0pOQWs0U1JZUVg4QkdSTWxVMjRlU2N0WDJxYllCYk1wTm51Y3BleUJwbkNRZGdPR1RKMDkrbzR2ZEFBQU9IVHFFbTI2NjZUWVJTWWxyKzhraVNKZGczNENHTGw2OCtDdGE2eDhTa1N2THNxVEpaSUwxOVhXY08zZE96cHc1ODk0dmZPRUxmMUFVeForLzZVMXZPcHV1V05JNFNXWit6VlZabGgzeEZhRGV4eG5rQXlvbWE5OGswd3UvUGI1NCtqZEZKRzE0Q1RoSllvU0E5M09JQ0VZYkdGMWlPcDNTWkRvKzh0YTN2alVCSndFblNSK1NnSWhCQkNEMVdrdkFTUklIaXRjMG9lWmhJakFyc0VwRWFBSk9ra1lBR1dQbXh4a1NRU21GUVphQWs0Q1RwRlhyZUZGS0lWTUtyTkx0U3NCSjB2OG1CZk5BVTB2Yy9TRko3KzhqYVNzZnFDcENNNFZVWkpBMFRwS2FlSTNpaTlsc2lZR0c0Z0VZUXlDRmNCSndrc3hqeHJlRG1vL2pBRVlNQk9KQVJUY09oN2d4WGE0RW5DUUF4dVB4alFCZTYwRlRBUWRrUXpmaWlBT2lHMUVtNENUZ0pBRUFUQ2FUS3M4bTFEZ2dxM1VFRmppU3lxZ1RjSkowaTRoOUVKekpsaklIRW5DU05JRmxscWRHQU1RWUdCR1VwWVlBS0hXWkxsSUNUcEpHdG9BSXhBd2pBcU0xak5IVzJVbVNnSk5rSGlqYmdBT0xGVzBNQUlJUklFdjVhZ2s0U2JhYmFUNUx3S0VIQmdSTkdUUVBVTklBSlZJeGFBSk9rcmlKRmp6QzZRVWlnalJ3S2dFblNZdm1NY2JNWlVrblJpMEJKOGtNSUNRaVJFUkh0ZFpzaklIV0dtVlpWZzlqREpnWmVaNWpNQmpnMm11dnZlbmt5Wk0zcjYydEhmUHZUK1hVbDlrcVNKZmdzb0tFQWVCem4vdmNqVXFwWnpsUXZKQ0lic3V5N0NVQWJ2SmFSbXNORVVGWmx0QmFRMnVONlhTSzZYU0swV2hrRGg0OEtNYVk4eHNiRzMrWlpabmtlZjdGOWZYMTl6T3pBWERmaTEvODRvditZNGtvcWFvRW5LZUdGdkhYMW9Ia1JpSmlFWG1qMXBxSjZFWUFOL3BFQWEwMWhjVEF0aUkyWU01czgxblV4aGlVWmVtN2ZzcDBPaFZqakFENEFCR1pMTXRNVVJUL3ZpaUtoLzd1Ny83dXZyZTg1UzBKUkFrNCt3OHNqejc2Nk5IeGVId2JFZDNHeks5MkR2Mk5nTTB0RXhIMmk5NkRKSHo0NTRsb0Rod2hjUHovdlNieXYzdVFoYWFkMWhyR3Z1R0VpSndRa1U4eTgxL2tlWDdpUXgvNjBJazc3N3d6NWU4azREdzVXdVd4eHg1N0lZQ2p4cGdmQWZCQ0FNOE9OVTZvSVdKZzhVQUpOVTNJb0lYUE9TQnMwejZoZWVjL0p3U1daK0tjdGhFSHBJY0F2RjFyclNlVHlmdS8rN3UvMnlSdGxJQ3paMkQ1N0djL2UvVFFvVU8zQWJoTktmVnFOeTJOUllURFJlOFhiQjB3WWJGYUNDaXZaZnlJRHc4TWY0d1lXT3JnOG42UkIxRWRPSFhBYXEyTk1VWkU1UDFFOUg0aWVyOHg1c1IzZmRkM1BaeEFsSUN6WTRmK3NjY2VlNkZTNm9pSWZLL1RLcmM1b0ZUWHIxNE9FUDcwQVBHWkFVMG1XZ2lDdXEvVDlMZncvNkZHcXZ0QS9tL0I5NnFEVVJ5SVRvakk3NVpsK1h1Zi8vem5rem1YZ0xPNHZ6SWFqVzRyeS9MN2lPZzFJbkxFcGYxVHVPRERoUmpUSlA3L1lUcE5YWnVFejlXMVMvaGNrNmtYdnQ0RHhQL05BeWNHdWhCa29YbEhSSWFJN3ROYVAyU00rWTBzeTk3M1BkL3pQU25xbW9EVERKaFRwMDdkUkVRdkk2SWZOY2E4VUVTWW1ha09qanBvUW44bEZyU01nU1QybmhnbzZwcXJmZ3h2aG9WbW1RTkE5VGNQcVBDMW9ZWUtQOCtERFlCb3JjOER1RWRyL2UreUxIdm90YTk5N2NOSW1hWUpPQUJ3OTkxM1p5OTg0UXRmVWhURmE1ajV2d053MUFVVnE0VmROOG5xb0duU051SHpkVk1wOXQ0WWtWRFhQazBBYS9KL1FyQjRVTlJCVXRkYTRYc2RnQVRBZlNMeWU4UGg4T05LcVE5OEpXdWhyMWpnZU8yU1pka0xBZnlVaUh5ZEMxQlMzUmRwYXNsVU44WHFMRm5NMUlvQnAyNml4VjVUMTJLeFk4ZE1zUG94UFZoQ0FxSE8xRVdBRXg3YmlNZ0ZBUGNRMFMrZU9ISGk0M2ZlZWFkOHBXa2grZ29FREo4OGVmTGxlWjcvbUloOEl4RmRXZmRiWWtDcC82MitpSnVBRS9OaFlndS9TZU4wa1FsdFdxY09xdEI4QzAwNEQ1NllQeFJqNnZ6elNpa040R0ZqekI4WVkvN3RELy93RDUvOVNnSFFWMVIrK3RyYTJyR05qWTNmVlVxOWtZaStEc0JLZmZPSTFjUjAvV3pTU2o2N2VlSGRyT0ZZc2M5cE9xKzZxUmliaE9BYkhjWmUzL1QvMm1iQUluS1VtVjhHNEw5L3pXdGVjM28wR24zcTcvLys3NS8yNFBtSzBEZ2YvZWhIODJjLys5bmZ4OHh2RXBHYjY5KzdicEtGdjRjTExVWXJ0eTJzY01ldm0yK2hsbURtYlprQk1XcTdUaFI0N2VIUEtSWVVqWm1CNGVzOGt4YlMxcUVXQ2dtSE1OQWFZLzRBbUN6TDd0N1kyUGlsMTcvKzllOTlPc2VDNkNzRU1EOHRJcmUwZmQrMmxQMXc0Y2RNdGZwci9hSU9Nd0ppSUEwZDk2Yk1nWmhKVndkekhXd3g0SVIxUEhWeVFHdU5vaWptM2xjbkVjSnpyVE4wZGZNdXl6SXRJci9BekU5YjgrMXBDUndSVWVmT25mdCtadjVwcmZVdHpFeDlUS1lZR1JBRFZDellXUWRTbldDb0w5Z3dVNkNOTElocG5EQ1hyVTVIaDRCc0FrNm9lWXFpaVBvNG9kYXBzM01oNFB4eC9HdUREVVlBbkZWSy9hdjN2dmU5djNmWFhYZnBCSng5TEtkUG43NDl5N0xYR1dOK0lFUkxYMStqcmxWaS82LzdCckUwbTdyMmFVcS9pVEZ0OVpoT0V3Qmo3d20xWEFpb2VzcE9uYTZ1ZzhJREk5UkM5Ynk0T25FUXkyWUFjQ0hQODc4WkRBWS84blRTUHZRMDBqSjg3dHk1ZjA1RXZ3TGdtQ3NPbTF2a0N4NXYyNkNudWticE11OWl3S2tuYmNiTVBwL3RYRCtPLzl6WSsrb2diRE9sWXN4YlVSVGJnTk5FV2NlWXR2cno0V2N4czRqSVEwVDB2d040eHh2ZThJWnppVlhiQjNMeTVNbWJpNkw0V1JINVJXWStBQmVMYVhyMEFVM0lpdFhmdDVOUkczVU4xWFRjSnJhc0Qyc1hzbWF4NDhYbzhqYXpzMjFENmRLRURsVEV6RWNCL0dPdDlUKzQ0NDQ3VGgwNWN1VExUMlgyN1NtdGNVU0UxdGJXYnRaYXY5dXpaZUZpcVMrVVBrUkF6RTlwSWhHNlVuQmkvdy85bTY3MG5GaUFNNWFaMEpWaEVHcUNwcXpyT3BzVytqRjEwaUJtc3RXMVR0MTBjM0VmTUxNQU9NL01kNHZJai96a1QvN2tVOUo4VTA5aDBPUVhMbHo0VlFEL1JrU3U5eVBPUFhEQzNiZ3A5aEY3WFZ2OG8wNGF4RmkycFhldzROaWhlZGtWdjJuVExtM3NYMHlUMXI5VENPb21DcjR0S0JzQ1B2Qzl5Qml6SWlKZkxTTC83YmQrNjdkZVBIejQ4Rk11OXZPVUJNNkZDeGRlTkpsTVBrWkUzd1JnMWQvWUVEUjlGbXA5OGZoRjB3U3NQc2NPZTZMMU9VN00zR29qSkdJQWFnSjdsNzhXK2tjaCtMcFNlK3AvYXdKcVU0S3JPdzRCT0dLTStmWnJyNzMyeFM5KzhZdmZlYzg5OTVnRW5EMEVqWWk4RzhEeHNMdC8yMEpzOHcxaUM3U1BmOUYwbk5qbk4ybS9QaGtDOWQvcjJpZ0dqQzUvcHc2UWVxNWRremthc25RaHJkMEVtanBwMGNDK0VUUGZwSlI2OGF0Zi9lcEgzdk9lOXp6OFZGaUhUNW4yVUNLaXpwOC8vK01BM2czZ3FqWU5FdE1vWFVRQk02UHVIN1dCSm13UzJFVStOSUdtNlh6cVpsZW93Zng1K3MvM3p5bWxPZ21FMk8vK3ZYWGZ6aC9mL3oxOCtNLzN2OWViSjhabWxjWm9jQThreCtpOVlqS1p2T2ZuZi83bjcwamt3QzZDNXR5NWM3L0Z6RC9vdFV3czNiOHJjRmszcFdMVWNwMzFDdi9lOUZ3WExkM2tielNWV01kSUE3L1FmSHBPVXlsMnZUYW5yVXloVGc3VU13WkNjaUQyTTBZb2hIM2hmSEExRnVzSno5bmZEd2ZNa29oZU5abE0zcnVmcTAvNUtRQWF2bkRod3E4UzBROTZBaURjRVdPYXBtbEg3eUlLK3Bobk1iK2lUYVBGVEw4K254VWVvdzd3OEx2SGlJVXVyVnYvVzB6YjFpbjUraVlRdnJlSnNHalR3azBwUEVWUlpGcnI5Nnl1cnI3bjdydnYzcmZkNWRVK0IwMjJ0cmIyWmhGNUl4RnhtLy9TQm82MnVFZGZJbUhSOXl6cVl5MUNhRFF0N0RyOUhtcldHTmhqR3JFSmVERU4xOGFxeFZpMldGWkYzWVJUU3NFWVExcnJteDUvL1BGLzlKS1h2T1FQOXlOcHNHK0JjL0hpeFZ1MnRyYitWa1MrazRoNGtaMjBENU8ybThCWk5NRGFCcHFtMkZIc2U3YXhYL1g2b0RZaUluYU1KdEtocVdJMWx0QWFNbkZOTkhYOU5mN2NYZmJFVFVxcGYvU3lsNzFzMzRGblh3TG53b1VMTjRuSWZ3YndIQVJaQUcxbVRSOFFkQzJlSnYrb3IzbFg5MVBhRWtTYnRFaWRNZXREVzhjYUdyYjkzcWJCNmxvclJpMzN6YU9yQjJ6YkdvN0VrbEdkS1hnVEVlMDc4UEErQk0wUkVma0JBRGMzN2VKZG1xYkpuby9aNzNWN3ZTdGJvSzlHYXZPNUZva3ZkUVVxdytPSGpGZk1CMnhpdlVKV3JzN3VOV1ZpMUJtK0p0OHNkaTV0NUVtOVE4OTRQSWFJM0FIZ2ozN3QxMzd0YU5JNGNmUHNLQkg5YnlMeXIrbytUUmZkM01lZldkUjg2cUtYZCtMek5Ebi9mVFJnbHluWHBORkNaNzRyN2xNdllZaVZoemMxSm1tTDdYVEZlNXEwa0ZMcXVjYVk1OXh4eHgxLzh6ZC84emRiQ1RnQmFBRDhyREhtOVhhejR4MDcwbjFmdTJpNlRCZHc2b0hLTHEwU00vZTZ6aStXaWxQZnZlc2dxcE1GVFVBTE80cUdQa2dmTURTUkFrMnpmcHJhWUVVeUZvaUluZ3ZnT2E5ODVTdWZkUENvL1FRYUVYbDlxR202Y3N5V1liRzZXTGltUmRvV0NHMUxhV2t5di9xYWYvVXk3dnJQbU5rWmUwOTlvWHZ6cWE0MW12cTMxV05YVGRXcWJXUkFUTXUwdlQ2VzV5WWl6eVdpSngwOFR6cHdSSVMzdHJaK0FjRC9Bb0RiVExKbFRMQytKRUhmOTlYOWl6YWd0WDFPbjM0RmZZaUtVTU10NDQ4MTlWZUlIYXV1ZWNxeWpJS3BpVVNvYTVRWTY5YjJYZ0RRV2hNelAxZHIvWnh2L3VadmZ0TEF3L3RBMjd5Y21iL2RnMmFuTVplbVJkcFdLckNYMHVmend2U1daYzR2dG9QWE5VV2RBSW4xTC9BZ3FwOUhqRmhvU3JmcElqZTZUTlNtbnRnK0V3RUF0cmEyeUJqelQ2ZlQ2Vy85NGkvKzRyR3ZPSTJ6dHJaMnpCano1NTVCNnlJQmRtUGg3MVJqdFJXaXRiMSt0elJPa3hZTS9aSkZNaVZpVEYxVERLZE9GblFWdFBXaHFOc3FWR05hVG12dFovOFFNeitYbVo4VXMrMUowemdpd2xycjF3RzRhUkhudjZrNnMwL056VExQeGJSRHVQUFdmWWJZdWNVV1lWTWRUMngyVGxPOHBhNGxZb21uVFF4ZStOcW1wTXpZeE9zbXhxNnVQWnZ1Z1U4VWJTdm5pQkVHOWNhSmJyUWpGVVh4SGVQeCtQc3Y5d3pVSncwNEZ5OWV2QjNBbTMxRDg3WW8rakxsenpzMXBaWUpwamF4VHZWWVJqMEx1ZWs3TmkzQ2V1T01XQUIwMlN5R050YXZuazNkWk1hMW1XMXQ1bHlURm93bHBIcGdiV3hzTURQL3pKdmYvT2J2dUp6Z2VWSk10ZE9uVDkvT3pIK2tsTG9xRExiMWpkSHNOZ0d3Ry81UG13a1VMclMyZnRReGlqbldRU2RXRWxIWEtvdjJWdWd5SldQT2ZCc3hFUG9zWGVNYm03cnZ4RXk5K3ZHWkdVVlJyT1o1ZnNjSFAvakJqOTF6enowUFB5MkJJeUxaZERwOUJ6Ti9mUjB3aSt5QSt4azRUWGxsb1FhcUw4NjZSbWxhTUYxNVovN3ZQbDIvamZvT3gzM0VSaXZXZlpxbWMycXI5b3o5dlNrVkoxYXYwL1VaL25xNmN1d2JYdldxVjczcmN2ZzdsOXRVbzdXMXRaOGhvbGUwcFdwMDJmNTlIZjhtLzZMdGZZc1FFVEVUcGMza2FESS82Mzl2U285WnBqZGNuVEJvTXIvcTZUTjEveU5rL3VxdmF5cExhRFBUNnFDT2FjbXVzWTNlM3ltS0FrVlJVRkVVTDE5ZlgvK3R5NUdhYzFtQmMrSENoZHRGNUY5NHYyWlovMkdualRIMlFJdDJMdUEyTWlMVVFERm1xeWtscHlzVHZLK205Si9mVnBmai94NitKeFpjYmRzZ1l1L3Rpb25WTy96VUMraHF2ZzlwcmIvai9QbnplKzd2OEdWY1hBemc3UUNPNFdrb1hmTncrbXE4K3RqRHBzclRtSm03RXhPelNldjFvYmRqSmQyeDR6VDFjK2d5dzVzeUNrS0d6Y2Q2eXJMa29paCs1WmQvK1pmM0ZEeVhEVGdYTDE1OHVadEhjOW1Ea0pkYjQ5U2Q5TDZMSS9RcFltWlFXME9STmdtNzJEU1pWR0ZBTS9aZG1ueTR0b0s2T3JEYTZxRkMzeTkyYldKTVlxeXZXMUVVS012eTJNYkd4cy84MGkvOTBwNlpiT295TGF4c01wbjhKalBmM0VSSHhvaUJya1lUZmFqa1JmeUN0dmhFWHpNczl0bjFoTSs2bWRKbTByV1paazNPY3RqNk56VC93dWVhV2tqVk85bTBUY1B1ODRqMVI0ZzFjVy83MlRSNU8zWlBncDRNMXdJNC9vcFh2T0pkOTl4emp6d1ZOUTVkdUhEaFp3QzhZcTlZc2N2aHIvUjlYVnYrV3RPbTBFVnlOTEdOVFhSMDB6bkVralc3S1BHMitFdVRSdTFUUzlSRXpNVHVmMXNGYWF6VHFDTU1hREtaZlB0NFBQNjZwNlRHV1Z0YnU4b1k4N3ZNZktBZTJlNWFYUHNCV0cybVZaZE5YdGNxc1NEbElscXc2YnlhU3B4akM3dHRyays5bTA3VDJNYW0zVC9XdXJjdHZTYm1zM1NOYUd6U3RnMXJaMFVwZGZVclgvbkt2Nzdubm51Mm5qSWF4NlhWdkoySWp1MkdJL3RVOW4xaWk2OVBlVUdUdG9xeGNrMStUR3lodDhXRHdqNXJUWGxuZFMzVWwvMXNxMFR0YXZkVkoxN3FVK0o4ajdhQUxLQ3lMTDk5UEI3dk9sR3dwKzEzMXRiV2JnTHcvY3hNYmVaTGwyL1N0ZlAycVVEc1d3UFROK0xldERoanpKZ2ZXdHYwdmNLLzFiT2E2OGNLTlhhZEttNEtZb2FqRXB1MFExc0R3Wmo1RjJNTjZ4T3VYY2VhS0hNWEVpQ2gvOVdXM3hjNzc2NjQzbVF5WVdiKzkyOTcyOXMrQ2VDaisxN2ozSG5ubld5TStWRWlVbjI3eER5WjBtWlRMNkpkbXVJWVRTWmVmYUYwSllmMnFjOEpOVWRYVEt5dHdYcWRKdThUT3dxMVNGM0RkZVdwdFcyUVRkUi9VNUEwTEVXWVRxZjV4WXNYMzNUbm5YZnl2Z2ZPai8vNGo5L290VTBmT25hdmtqZ1hqYU1zTzRTcURUVGhBbTRLRk83a1dqUWxVOFkwN1Y0a3pNYmlPSDJuUml6YTZxdXBZclJwNEJVUitjeUMxeERSUDk4dGsyM1BnS08xL2c1bVBob0xmTzFYWDZldGJkR3k0S21UQVUzTk9KclNiNXBpRzExbWI0eGVidXZaVm84VnhmeXhwbzJsYlVoV3JBU2ppVFhzRTU5cXE5K0p0ZUlOZkI2MXZyNithN0VkM3FNRm1CUFJUL21XdFRFMkpLYW1GMTJzeXpqbmJUZWphZmRyYzVMcnRub3NRem1tWmJybTFyUVZ1clhWMmNTbzZucHdzNnVqWjVOdjJOUmJJUWFLa0ptciswcE4zN1hwTlczclE0eWVQVVJEVEFtSUJrVERtSExPWkp0TUpqZXRyNi92U3UzT25nRG4zTGx6UDhyTVZ5MjZRejdWMkxJK2hFY2JPOVpXNExhTWYxWjMyR085blpzMnJGZ1JXYXlvYmxzOEk1Snh3TXpJc2l5NitHTWpGZXVqUy9vRXQyZm5PSHVnUHFyZWJFc0dwWTJOalI5NzA1dmVkSFRmQWNlaCtXVmUyMXpPbU10K2w2Ymt5R1g5c0xyVzY1T3B2ZFBtakYxK1NWTmlhbGZEbGE2WnFNM0FDY0J0QkNLbUFwU1IrZWtKRGp3M2JXNXV2bmFuV21mWGdYUG16Sm5iQWJ5bVBuTWx5ZkthdHNsMGFmdlpsazhXVzhUMW5zOU5nSzJiVTdHbUlLRTI2cE1kSG83NjZQS0RtenZpZUtENHpjUUNxZTd6dUZHSy8vU3RiMzNya2YxbXFuMGJNNnZZeGVwS3JXL2J1WGFETGV2eldPYjRYZTJOMm5wTGh3dG1tZk5weWdxbzkxRHI4akhEWTlSalBxR1psV1ZabzEvbWdkTFV4NkNycjBFVEExaXZFWXB0SGpQQWhJbWY1YmJaUDA3N3ZHUnpjL1BsMk1GOHFGMEZqb2dvSXZyUnNGUjR0MklxTzJISStoSUl1MEZDN01WbnhVeWZPa1hyQWRJVTBWK2tBVXFNL28wVnN6VTFqUGZ2cTVNQ08vSGYyanFXOWswK05jWmdNcGxnT3AycThYajhwcC80aVo4NHNpK0FjL2JzMlpkbFdYWnNKNzNCZG9OViswb3pELzJPWEUrOWIwdXhxV2NrOUluUmhDMm82b1JDcUtIcWxaNU52dGN5Q2I4eC95NzJmWTN4RDdOdGFweUlZRHdlM3c3ZzI1ZjFkWFlWT0VUME1tYm0vYkJ3ZDV2YTNnOStVZFAzcWRmdjlPMGsydFNXcWY2NmV2UENldUpscUZucUpsWnNDa0lmOXF4TDQ5anpsSmI3M3R3QXhQczZaVm0rYmxsZko5dkZoVG80Zi83OEd4Y1pJQnZqN3B0NkllL0VvVzdhdGRxNnU5U2JhclROLzJ5YmRtYU1RWmZwMmhVOGpYM24yT1NBV0RPUStzelFXSzViREJ4MXY2anU4eWlsVUpZbHNpeXJ6dGNIRzBNTkdQb2RJZk5YNzFuZGRIOWlUUXE5YUcyZ1JJUEM2ME1FOHY0VkdRZ3hCQXdEMTNzQkJvWUVtZ1RUS2Q5Mjd0eTVZd0RPUFdrYTU5eTVjMjlVU2czYnV2VDMwUTc3Slc4dDFxeWlMZmJTcHpIaVRzK25UWU9HWmxGYkNYYzlFYlArWGgrWGliMDM5bjNDWS9uMzE5L2pteEQyYVdqZkZyVHVxcDZ0YTV1MmRsUmxXYUtZVGxSUkZEKzlqTG5HdTZSdFdFUmVYcy91N2NzRzdjYzRUM2l4dzd5bldPSmtXNit3dmlremUzSHVUU1pYM1Vlb2E0VSt4RVNzVzJpOXpMc08xTFpOcCt0Nnh0ZUlOUFJ5cTVFQ2N6UjFVUFNtRFl3eDMvZUdON3poNWlkTDQzQ1daUy94dStJeXJGcWZYZlZ5U1ZQRDhxNGFrNzNTT0gyMGNSdU4zSlJmNXA5dnlxTHVhKzdXc3diYUtqeTdNdU9iQ3V6Nm1ycFJMV09rQWxsSUVqanpNamZHL05TaVdtZFhmSnlUSjArK2REUWFxWHJNb00xUDZlTUl0OUdwaTFMTlhjZHFBM0hYNG8vVm5OVFQ4ZHZPcVcrZEVCRnQ2d2xROThkQ3pkRjNFL0orU1N3UTZyVklxSFc5NWcwMWxMOWVmdlNIcjhVSnYxL28yNFR2aVpFYS9Vb01tbWVuVm1DQ1FJSzZKdXY3Mk5mcHNvQlNHVFkyTnI3dURXOTR3NUZGZkoxZDBUaEtxWmY2Z1ZCUEIya0tIc1o4Z2xnS3pWNmJvWDNpS0UzK1FsTXo5emJOMXVUQXgySW9zVWFJc1UyZ25uUzZuSlhSM3JBK0Z0L3hiL09tbTVzeGV0dm01dVpDYmN0NEZ4WVpaMW4yMHYxa2FsMU9ZRFhWaklTUE52OXAyV3lGK25uRUZtOVRUK2UyNzlRVUYyazc1NlpOWkZGZmN1ZUJidWwxN2o2WHJTeTFyeEpWUkxTUXViWWJwcHBpNWhmM0NXb3RNOHgySjM1QzE1ek1QdVppTEZEWTFOTzVicFl1R3dqdTJ3U2s3MHliMlBkcm11dlpCTkNtYXhjalJieEdpZFVDTmZsaS9kYUt6SDZLZ0JEUnFKRHFaV0tNdGViSXZwS1lBZjg2WTBDS29IVUpvZ3lUeWVSbExtdjY3R1hST0dmUG5uMDFFV1d4QmRPVmtyN1RYYWtQdUpiSlJHNXI1ZHFYSnUxREgvZnBxMUNmMDluVzBDSTBrMkthSnN4RmkybXJKcEEwM1VOL3ZMcXZFL3BCWFRsclRkUG82dGZhR0FPQ2dFU0RUUW1XRW1RMFFBS0JxUjRXT3U3L29nR2pRV0lBb3lHNmhPZ1NNUFo1S1F1d0tVRzZnSUsrOGRLbGM4KytiS2FhVXVvMlNuVUQyMHlYUG5HSE9qRHJHaXVXd3RLMENPc1QyZnIwQ0lpWm1FMFVkajJPRlFzQWg3OTdNRFVWMnJYNVA4dE1tb2hwNUxndjVqWGVQQlUvbVV6VjF0YjBmKzVycnUwSU9DS2lqREd2dmh3K3pWNVVpTzdsdVlZa1FoT3c2azUwekUvcytyNU5adUVpSFV5N2FQWTJiZDNVN2FmSmxHeXEzK2xEN2NmcEFXa2NBeEluQjJUTzdKdVprd0pkNnBlOTduV3ZPN3Jud0FGQVNxa1g3SlpmczZ3ZjAzZTY4MDdOeFdVZCtMWmp0UVZJbTBhY3g5b3loYi9IRm1zZnM3VE5ESTBGVDV1YVpqU0ZJQmJKMkc3VFZuTStqelJmcy9CdlRWMXhQSGgwcVdHTXZySGNXbnYyWlFGT1c3NVhiTEJTWHcwU296bVhZV3hpNE9uVFFLOXZsV0xzL2JGV1MyMXpZUHBva2E0Y3dLNU9udUY1eGM2MXFhOWFYNjNVVmVYWk5FR3VEM2puMXBEWE15S28yT1dtKzBMZDZ5TzhKbHBySmRuZ3AvdTBrZG9SY002ZVBmdHE3SEZUdzcwMisyTHhoeWF3TmUzNFRlWkxIN3UrNmYzaDV5MnFkV01MS2JZQnRUWEhDQU9hZGMzWTlUMFdIVDNmRDNBVlNpRFNQdG02K21uYVl6cHo3NEhOY2RQYWZGdFpscy9lVStBb3BXN3pmZE9lU3RKMW8rcEJ2R1hqTFUxMmZST1FtNW9UTHV0ZnRYWHBpUUVzWEZ3eFV5L01TdWpxanJPVGV4SHZaZURPRDZHbWFaOFBLajAyekpucFpvbUQ2V1NhRFFhRGIrc2lDWFlyeVhQaDJNemxBa2dYVmQxVXp0Qms3aTNEK3ZUMU4ySyt3YUlONkdOTkNXUGdEZG0zcG1LdkdHUFhsaVVlTTdQN25uT1BLeG1ZWnpOSG4wRFdJcXRybk9EaHM2V0RFNnhpUWJOc2FnTVlBNk0xblR6NXhHMTdwbkZFaEpqNVdXMHRraGFKNDNURmF2cXlTMzNBMnVlYysvbzFzZDA5TkkzQ2hSYkxNNHVaZ1UzeGtpWXQxSFFlNGVmRmVrQzNwY09FQ2FDeGUrSkIxdlI5MmpLaW0xaTVOaityY2xxcTQ5SE1qWEU0SVBlQWE5VGhBU0xHUUl3R3hMaWdxZmdzTnh2akVmc2FvelVJQW1aNnlhLy84aTgvcTIyOTdzUS9VVVQwdlUrbi9MUmx6S0UrV3FadVZ6ZU5EMXptUEpxSWxWZzhwMnNna3dkRGpORUxOVS9YcHRjbnhXZkp1elJISzFlYXBYNFBSWURJOWZUM0l0d1lEQUIyOFIwaUE0RmcvZEtsR3ovM3BTL3huckpxZUpySm9uWHdYUXMzREdLR1JXSk5sWTFkWkVBZk5yTGVZS1ByZTNWTmU2NmJlZUY0OTlpc203Mk10UW1ra2FHdFRET2d0ZXZRTmg4bk1PZktzc1IwT3VYcnI3LzI1WHNDbkxXMXRSdjd2SCsvYUtSRld5N3RGdmk2L0pzMlZxanJ1N1QxWUc3ek0yTG5VWS8wZDZVdzFmMmRwcmpUTW1aelRGUFlzSXlOelRSV2pQcEhCN1hkR29mU0dpS0dUcDA2dlRlbW1qSG10Vm1XcWFZWVFCL25mQ2RzVE4rTHY0aVAwOWQwYXB2ajA1VzNGbXNRMkgveHRQY2thRE9WMnBwOGhDWmFDSXFtNnRCNlhVM1Q5WXJOL213eU1adXl6RU5kNDBFamtFYVE5aUZ6dHBsMHRXNmdXaHRvYlo0bElrUkVzdHVtMnI0MjAvcW1yRnhPdjZucFhMcVlxa1hIa0RTMXl1M3ozbGpuL3hEODlRRzRkVEtrclRsOU9JcWpiZEh2NW5Wdks0dVF1Yjg3c0RwUVpwbjZaMmdaOWNsTG5oZ3g4N09lVGc3L1hwbUZmUlp2RjlWZEp4UVdNUzhYbVdEV3R2QmlnVk5mSXQ4VVhPM0tGQWw5cGQzYTRMcE0zeXIzWU81elBZd3NJNmUxeHNXTEYraWVlKzdaZFIrSEFYenZmZ05KdndZUHUwOFE5SDF0bjJ6cEJyTzRFMWd4cmRZMGI2YXQ3cjl0MW1mOW5IeVpkQ3lyb2kwdHFTMGhNMFlIdFAyZmdvZXQwY0dNYVJQM2V4VzJFVXRYaDY4VEFhcXVPUGFuSWtJeG1XS3Y2R2hhcHM2bTc2S096VTNwOGxINjdxQnRmbERkdnUvVEQ2QnR0bVdmWXJxdUVlOTFVNjdOTitxS2U3V1JDWFcvcXg0QURVRVRBMWdNdkxGcTBkQmtxMWVkYm1QMElHQnlEekV3L2p3aElPZVR3QWhFbThwdllTTG5Ed25FV0RmR2dzdjZNMFJrRzNpUVFFZ0FacEF3eEFDY0tiQnQxSWIzdmU5OWUwWkg3eHZXYkNjMS9tMXAvSXNTRzh1TzhWaDB3K2xyM25RRlRPdWdpTkhsZmI1TGs0bTBpTG5hWkRITXdPbDhlZE1VTjZxZlM0ZlB1YzFzczg4WFJkR2RqN2pUaGJxZndMT2JwbDVicmxpYlhiNlRMSW0rOUhNOWRyS00vUjlqNS93eHk3S2M2eERhOVRsTjE2MnRJMm5UQmhYN0xLbGxDM2luM2tnOU82RTlkck1OdkRMUHNJWGtoOWFhSDNuazRkdjJUT1BzRjJscjB0QVZqMmlpZU52TXh5YXQyemZwY1JHbXJLa3NveXVvMmJkV0taYXYxMVF5M2xaaUhhYjZkTEZzZFJZdlZzNWQxeWIydFRXR3VxUGVxVmw3eGhKQ0pXeXRwY3FwZnZXZUFLZHJjVFlWWUMwVDEra0RoTGF1a0YyN2I5ZG45Mkd1WXVDS0xmcW14ZGhtUXRZZDhLYkdnN0hablUzbkZyc0dzZnNVZHVnTXo3dXRmMXY5WEdQcklRYVlabTAwMzk1MkVaSWxibkxLdG5pUUNhbDFDTXJTMEY2UUEwOUpjeXpjclJkSkdtMXFzTDdUVGFlcmpMaE9PTVRvNlQ3ZFo4SXhIVTFUc0dPbENQVy9ONW1OWGNDTnRjTHQyZ0NhWXpBUzlWRVdEMUhVdEhaVnBtRG5oeG9ZZk1VRHA2MXVvMHNMN25hL3VLYmt5eWIyTFRiQ3ZXc0tkaC9Uc3Y3ZG16cVNlcCtuamFWc3lvanVXL25ibUU5V2pTVGNicmJGa2p6N21xYmlLT201RWdSWGFtRDhMRkZYeExkcndMbDQ4ZUtOWEN1VzMybnNaRDlKR3lHdzE5K3ZuczdTWnJLRzJxTXJqYVd0YUsycGEybG9xdFZwOWxnUXM1NUowR2NEaXAzUG5CWnpsWmswcDIyMkEyYVJncnE1UG5pdW5vZG1LaWZLeU8wS2NFVGtKV2hKUitoYWpNdW8xVVhmM3llR0VTNjZwc2FEWFhHZ1JXSlZiWGxVNFVLc3g1WGErcU4xOWNTdWE3ZDZNOEltNHFIdWY0VTFPSXNDUFRZcExoYXphZEtnNHVwa3ZHYXdOVFVhSkJyYUxLWng1a2dQMzloUWZGekhyZXBLQzlFTEhLWmt0OGdCNm1zUzdRVmR2RWhNcCsvVXI5MGN4OUczSFhBWE1SQmJ2UFZTaGFhaHVUSEh2T3MreGNBWWMrN3J2OWZyZUdJRVJvd1lxRmVjTnNkN2F1YWRTR3dZMnc3V1ZyaXdnNDJNOEsxMzMzMjMyaldORXh2anNVd2gxbFBCUkZ2Mk9IMjYyclJwcHRqNzY4ZXFaempFZHUyMjNMRVlRT29nOFJXZ3NXYUgwWWJtRFg1UTMrQm5hKzlxQkZrMHV6RXIxcU9HcE1vb21PL1RCbXJLSGxnS09GcnJDanhOTEVvYkxkcG14dlNoZmZ0TzV1cnpXWXVhaVgxTXQyWFl1cmJ2MFdTdXhiUlEvV2VkUld0SzJXbHFGQmhxdDVpcEZ2cEdkUTBTYXBVbTVpMVdDQmY3SG5PRmFpMytYRk5ycmRqRzVwLzJ2NHREWlI5UVpudTFjKyswdm1iUnpwUjlXYkpsL2FPMjgrdTdDV3hqZFhva2JIYkZKeFlCZEJOSlVBZEJ2VmRDRE14dFRkdjdaSURIZWlLMDlYMmJFUVUyWTZDZVRSRHpXN2RmZThMY0pSZXBQQmo3ZW1tZE9ib2JQczYrTXNsMnExdm5NdFQyYmsxYzY2TnR1eUx4ZldwNWxrbmhyMnVldXVrV2pueHMreTc5UjNBMFBlZk5xK1dOczBXK1B6UHRyc1lob3ZzQUdCSGgvVExEczJuVXhtNERzMmt4N3NSWDZsc3EzVVF1aEF1NVQzVnJWOVpFZmJaUGFIWTFtVmxOR2pibVJ6VmxFL1FLZm00RC8vS2pWTHJlYll6c3JzYTU0b29yN2lNaTNXU2E5YW0rN0dxUzE4WEw5eWtNMncwenJTbUpzNjFVdUVzTDlObjEybmJ1MkxpT1B1a21mU2o5T2hOVy80d21uNlV0ZXpzMkRyN3VFeG5md2dsU2plWWcwYlZhR1R1ZUF6QkJMelV6NjRzRzc3ZjRQbEd6bjBTWTlZK3Era2k1UmxFelo4ZVdNUUJnQ0ZvVXp1N2txalcxREZyVXBGdWtXVVZmVnE5UHorTStuMTl2SnhzdW5pYnFlOW1jcXJaY3VUYmlJMVo4MWpRMU9uYi9tdXIrMjNva3RLVWhOWUdvL2gxbTEzSTJBNGM4U0x6bUM1b0x6bUk1ZGhhT0VXMW40OHlCUXVibTVZQm1vSnFCeTBkV2dyWGpabEd4ZmNMc2lZOXpPY2R1N1BabmRUVjVhSnNCMnRaRWI2ZWJRaC90RXlNWjZxQUloenAxdGJMcVNuOXBhb2k0U01KdFd5dmVtSzlXTDNhcnRCOGttbTZ6SjFJV2I3L3p6anZMWFFYT1hnK0l2WnhFUkZPS3ZOOE4yeHp1UG9IVG5UYWphUElidGtYQ0k0eFZsejhXMHk1dFkwU2tSNnBMMHd6VUp0bzVsZ3dhYndKaWk5Z3VvOThzZTBKSDk2MHBXVFNPMCtaYnRQSDNmZWJBTkprVlRablRzZmZFekxTdWdHZGZ1amFtQmR2U1lwb1c4U0pVZFQxenVpbGVGTHQzZldKa1RWcW1LYk9nK2ZyVVlqcVI3N1dUMmJIMlhtSnY0emoxdVpSTmVWSzd4U28xSFh1WjB0NHUyN3lybnFiTHIrcHpnOElSZ1UwSnBQNzVlaytBc0hsZ24ra0RNUkQ2UlJ2VzFEVFJ4dlVrVDkrZ3ZXOTdwN2FhbkM0V3pXZEYyOWZPUUZOcHNpVXFjUHV1eHpackl0dXBKdHR0Nm5kUjAyV3ZmSXF1cnB0ZGc1NzJ5bFJ0S3V0dSs5eTIwdWU2dG1rZG14SDRIbTNzV2x2TXFUMUZhUHZvamZwekNNWjN4RVo1N056dnRmRWJJaEpXT0wvYjVJQUI4SmZoeE9ETFRTYTAyZTA3OVNuQzd4TXUwckFSUjVPZDNoZlUzV1A2bW1sbGYzNTFVNmNOekYwTHVtMmdiNHdzYUJ1bTJ4WmVpTVdJNW9FU1B1cTVhdTFCMzkzY3RKaW9QSGppMGQvWVZlQVFrWWpJSjJQNVQzM0poRDQ5MFByMDRHbzZYdXd6RnlFeVloV1NYYjVkMzEyM0R3SFF4SngxRFlqcU04V3RLYjRTOCtINnpCOXRHL0hlQnVJWUdiRnRzb014OWlFR0twanBJUkFZMGJBZGFoM3RMQWFBQ1g1cUcvdkJMTmJqWHk4d2dCaEFTdnQrRWhBRFFnTEtGTFFJUG5mbzBONlFBMTMyOVRKK1ROOUpaSDJyL2JwMm95YmZZcEVHNFl0b3U5aXhZdzBIK3pqM2ZXTldUU1oxVEhPRlBsanNNK3YrVDlQOWJ3SmdtODhqQWhneGMzNU52VHJUQnpxbCtyYzI2ckQ2dlg3Ly9OOW5jM1dJM0dBcU1pQmkvNlQ5ZTZiMmhod0liM2pvdk81VVplNW1YY3hPbk1YTDZiZjF2WFo5TlhCYkQ0Q21CaDVOdEhJTUxGMW1XUjhTSUtxaDRVcWx4V3hyK1JUKzNtY3U2cmJyR1l6L21MTStaRmFEUThSUVdXWnhTblRoK1BIamUwZEgrd3NiNnphNWlBYllhYjVYMDdrOUZVcTVGNWs2RndOTnVJSEZZaTl0WUEzenorb0ZhVzA5eXZyNFMyM05FNlBITU52OW05aklkY3h0QmowM3AramFuR1ZMaDdWR1NpbUlNYjk1MTExMzZkMG1CN1pWRnNaczVhWW1GRzJOeFp0dVNGUHNwRThaUVJzdDIwVXlOTzNTTVg4dFJoSFhONFV1cDdydm5OQ1lsbTQ3LzZiS3phWStaNTRJNmRJV1RhTVJZLzVMbTQrMi9Sckd2b2U3OWczZnQ4bGZyTit6YlJ0cmRWNnpjODZ5VE8rSnFhYTEvcUpTU21JanAvdlU3amZWMjNRNTQwMytVRk9qdkQ0KzB6SWQvSmM1VnAraXROQzhDVlA0MnhaY1c2eXFMV216Sys4c1RIdXBGNmoxS1F1SVVkWjlOR2hmWDdHUEpxOWVSd1RldGc2Q1dhTGsybmJZS1F6YUdQT0JWcGRpV2VBY1AzNzg5d0dVaTVnYWZTblhwa0JnSDVzNTNJWDcwS1o5SjNZdGN2NXRQa0Fid0p1S3hlcTdacXhXdjZrcFJwdmYwNWF0RUJ2a0c3SjJUVDVQVnlPT05rM1ROdG10bDQvVWxzemJ0cG41MTdGZEw2d1VUQ0VQN3hVNUlHMFIxeTdHSjZaeFlwMW1Zc0JzTWdmYmR2VytJRzNTYW4ycks5c1l1U1lUcm10aVdXekJ0aDAvVmlkVDF6U3gxOVFYZng5TjIyUm14bzdiOUhtTCtFMkxidEJ6MnJ6NVZlNTFCTFl0QWM2cjFkVUxld21jTDRySUxYNFhERWQ3VzVhRUsrcFBDV0NFN1hOa29NazM5aDZBU0VFd2hyQnpCbjBCT0lXS01hdllSS24xMWhJeFVNWi9GZ0hDcmlMV3prTXhVQ0RLM1ZsckNBb0lTb0FNREFTYUZReXhyZjJBQnNIR0FleHJnWUhKd0JKUXhWUjFRWUdJSURkczdXUDRCaXpzenMwZUNXeS9VcmplUlZ3NnV4akFLQWlaNnY5aVhMekJVYThzYWpaK1hGejhnZnpRVjRFUVFPRHFraWhoR0FNN3VnSU1MUXBBQWNIRXBkb1RRTGs3aHdJaWswWnoydC9icmlienNlNDFNVCsxVVZNNC80SWgwQ0VKUU5vK01Idk5EQkJjamZlb25QelpRQTk3bzJiZWY4VTJFekZJeEdvWTRsbFJHeWw3VFVpOTY2Njc3anEvSjhBaEluMzY5T2svWU9hM0VCR3lMSnNiKzIyL21IRVQ1UVVtdXdTUkRBSzNDRVVEQXJDNEhRb1ovSnhIQ1M2RXg2aGdQSmU0TU90NUFwQW9pSXlDYy9PWWNwcVBKZ0J0dWxvTlYvRGtBRWNBMkFoeXR6Z0ZnQ0psTDQxamRUU05vUDNDaEIyNElzYUEyQzVlUTlvRzQ1anQ0WW5zNTdpQnIrTG1yUmkyMmIzRS92MTJKb3VoR1hza0FJeHI4K1VuaFdWZ2FCZ1lBYlF3UU96NkhGc0tsNHdHb08xejVNSjdaTngxWUlqT0FDb2dVZ0xRVlcwSzgzeVZZejNnMno0NW9ObjBhY3RMaTZiL1ZNVm9BcW0wbmYxK3hoZTNZZFpyb0w1L2IyTlFxM0h0RXRVdTFickJkc0tLRllPenpBUVQzL2NrQUhxaUxFdERST3d2OUh6cktGZHdSSUlKRG9DaG9DUURRUUdsaG9JR2k3YTdQS3ZxT3dkeEtvZVRETUJvcHVqOHpYT1JaQ0VOelp1aDRuV2FDVlh3VEdCM1lJQmhWekFEb2dDeFBlaVlBREVFTVlDaXpQM2RnbVU2bktEa0VoQzdRQmtDc0hiNlZLTlFLekJRQUF5WXJKNnhHOE9zTTRzMkpaZ0pBZzBZVitvTWdqRWFyamJMTFF3My93V3oyRVdocDA1TFdBMG1ocUNOZ1JoNzZ6TW9DMlpZcldlZ29Ra3dvc0UwaHNySGR2ZlZEREVLTExsVG0xYXJHbE8wc25vTGx6ZjM4Rk1xaldSMEJSb1NZNytYMDdyZDgzbDJwNnpGYWlFQ3JJK2pRZkxPVnN0dXA4QTVmdno0Nzk1Ly8vMHZ6YkxzQjBlakVRNGVQQmc0WERKbmxvZ1p3YmlGSmE0S3oxQ0pramJzcmltSExTWm8rMjRnYkFCTVo5ckhSNUxKQmVnQUdPUXpZQVZ0ZjBCMmNoZk5jR1lYVGFXNWdGSk5JTXJ0WnNaZ0FnWlg1aFJnOUFxVXppcFZ6NklCQXpBWndCaG9YYUtjRmpDNmdERWxwQ3hneWluS1lnSmRGREI2aXVsMENwREJkRHFCa1NtMExtMS9ZbE9pTEUwMXdzSitOWmNUUjJ6QmhRek1tZDFjaUNISUlHS2QyQ3hUR0dTQVVyazFOMWtCbklHekhDQkNDWUZtQTJBSVNBWXhHYlFBSWlXMFRHRHNoT1c1Yk9rdUlQUmxGcHVJZzNrL3g0SEdhQXNXOXhNaVlCaUlOeFViZWlyRTh1cjZiL3hlcXppVGpSa0Vrc0ZnOWVHdTkrNDBBR3IrNnEvKzZtMlR5ZVNsQUc3Tzh4eUhEaDNDa1N1dndJRURxeGdOY2d5R1ErUXF3NkFjUTFFQllzQklCbElIVVZLT2dnY1FtdHBkMDVreXFPMTZ4cmNxWlZmTlNyT2VXRmJ6TXNoa3RyMlBpejRUb2ZJenlBeEJabVMxQUF5QUVpU2w4eFVNSUxrMVo2U0UwUk1RcHRBeVJWbHNvaXlub0hJVEtDY29pekYwTVlFcEo1aU9OMUJPeHBoTU5qR1dMOENVR3pEbEZHSTBkREVCb3dTMGRta2QxdlJRbVRWZnM0eHNEcFVEUHJ1YlI4YXBTV0VZOFJGN1Fra0taYUZSYWxRYXgyaUdJUUl3Z3RGWFd4K09oMkMxQ3BVZEF0UUttSWVnN0JDMHVnYk1tK0JNUWVVRU5SUmtlUW1vS1ZoeUtGbVo4MWRpNUVBWUI2azM4YWhUMXpGU29jNndlVCtJeEFEK2ZUSWJYd2h4SUF2b1pMU2tFelhSKytUbUdGYStEOFZqY1ZVemU4TDdpNkw0NHA0Q0J3Qys1VnUrNWNHLy91dS9mdHY2eHRiL01SNlBlVzF0RFk4KzhpVW9Ba2FESElvSks4TWN4MGFQNGNCQmc5RnFqdEhxTldDNkRscGRCYXdlZ0ZLQ3pFeEFIQlNsU2NpY0tVQ0dnQllRbERXN2VPWlV3aENVc1g2R1Q5Z1RZNkJOQ1YyVzBIb0NrVTNvY2dLdHQyRE1Gc3JpRW9ycEJzcHlDcG11QWNVbXB0Tk5UQ1pyQUcyQ01JSFFCQ0lsaExaQTBHNkJsMUN1TGo3TEdDdGtjSWdFUEdEUUNNZ2R5VUJHMnh3bzMvaU9ablk3WjJTSkIzRitDTVRSNXd6eWZsa1ZLV0NVcm4wRUt3V0NnaEdnMUFhbDBUQXlSVUdYVUphRThZUXdtU2hNaXd6VHFjSmtJcGpLWVV6Vk04RnFnRHcvQkJwY0FVT0hRTHdDbFIyQXlnc01jbzA4ejhITWM0MG1ZeVVNYlRHNnVpOFQwMTZ4YkFGQUt0TU00dnBFdXlSTVdYRHFYTFR3cm9yVnpJUEdsUThFNnc2eU1oaSsvNTEvZkpmWmMrQUF3QjEzM1BHTzk3NzM3cGVzWGJyMGcwTWlsTVVFMEFVbTQwMU14bU04dm40R0YvSy94TlZYYXh3NHRJR0JHa0wwTTJCd0RBWGJuWExJTnlCVEdaUlM5b3R5M1oxekY5Rmx4WmJGRklVdW9Fc05NUnRnbktzU0FLMjdwS0YxNlV5aUFxQVN6QWFLTkVRS3NFekJNR0FsR09vTUdXVTRxQUJhTlNBVUFBb1FsUUFFbWtiV1JQSk52OGwyZENBWEEyQlJWVGRJSm9MUkdzN3RjTHR4Nlp6eFdROEE2NCs0Z2pRbU1BbEFaZlgvdVJDZE05M0VOOCtESU04SUEySkxUUEFtbUhPSVlZZ01RTWhoREtNMGhFS3ZZYXdmeGNhbTROTEdBRnZqWXdEZmdpeS9HVGtPUXpPZzJYNXVudWNWY0R6SlV5Y0pZaEg0ZXFsejMyQ3BIK1lrUVMrQnluODEzUk1KMnNCRFFOUzduMCszY1hFYkJ4NmwyTERRSDZCSDU3WmRBUTRSbVFjZWVPQi9mZnlKazdkdHJGKzZYZklNWktaUUJKaVZGVXlIUTJTUGZTTTJKNS9Hc1dlZXd1R1ZEU2o5S0lCVE1Hb01vd3BvdFdMM1krY1k4OXpBSDRhSWNnM2l2T3AyTXlERjBxdEtobUMyTzd2QTd1WmdBeWhqTlJaeXNKdEl6RklwSnJCbVRQTXhDcmQ0SUFUaURDeVpwWWtCak1TMUxpSlVwZ01UdzhCMlpVRm1ZR0NkZFUwVzlJSWc2S2hDTTBGQWJHbFBRbWF6YzluNS9oQUlkRVVpVUVpU3NHUGNYSWQrNnlNQ0JBV2xEenVmUzd1WTlBVE1HcmtDRHFrY0F6MkNXUVVteDZmWU1nVXViRzdnd3ZxREtNcWpJUDE4cU5ITkdBd0d5TElNWkNQbjhFeXAxaHBsV2FJb2lzYlI3VzJkY3RxYXIzc040elVPak91VEVLbkZXVGlwczdQRUpmU0RyWStUS1hXQ3kvSjhuOC9adFJhNHQ5NTY2NWxQZmVwVGIxTk1mendlanhYekFSaGQycVZ4NEVwc0hqaUtqUzlyRE0rZVFuYmRSV0EwZ0RFSGNFQlBvTEFGZzZGVk1tb2JiK0ppRHpvZ0VqME5iZmR0SWdJcG1ha25NK3ViWlMrVUFXUUNNRG1xbDBBcUpPOFl5cE1MN3YwR3V1TCtTNUxLazZ3Q2ZKYmljTTY2QTV4akQ2eWQ3dTNya0tseTJxYnFnbWxUMncxMHhRU1NuOWppdEV3Vmp6RDJKck9RRzBkdWtTTXdZTmFXeUJCN0FVVXlFQmdrQk1PTXNYTG5DTVpRS1Z4emVJSm5ITlFvaXZPWVRCN0h4cVZqbVBETnlBKzlFR2JsR0tZREFkaEFzUUxsVXhUVEFzVWFvOXhnbElWZDY2VUlDcVd0aTloUW9ScHFLMXMxV2tCTUNkRUZ5R2l3S1dHOGNxa2FQakdNbEJCaVJ4b1pzRzhkNWNJSGM0VnR0WjRUc2J6QWV2YkRMSnRBb0ZBZ1V6a3N5Ni9lOTQ2Ny92VGM3L1pnNlhhMWQvVHpudmU4Ly9UcFQzLzYzMnhzYlB5NGlLQXNTMml0a1JPUUhWeUI0aGZnNGhjZnhjcGFnU1BITmpGVTZ5QlJNUG9nb0doYmU5TjZ0RmZxa1Y0V3NNdzBVRlZTUy9ORFV1MHVUNDdOby9uWDF1emcrYytaRFZYMWZldkM4L0hKaGxRN3p2eXVTN1BtZU00Y1lVSTFlbndXZkp1bmU1aGNxcEFSRU52ZFhCRkR3dU9UdmZWQ0FUQ2RQK1IvOTF1T1hTZ0tpaFNJRktBSUtpTU1oNHdyajA2eFZud0taeTQ5aUdMOWVWZzUrRitCQjFlQW9BRWNRajRBNkVpSllyU0pTeHRybUc0V01OTVNDaG5BeHBFVTIvdk5iVFBYZlBhem1ma3VKZ2lBR2dtdk9TSzkxREEzWEdydXVrZkEwWlJjSFA1a0poZ1JaQ3JYSXZyZkVaRmNWbzNqVGtRZWVPQ0J0eDA0Y09ERm01dWJMeG9PaDNhbk1UWm1reDIvR2VYMEgrUHh4d1hEL0g0Y3UvSTBCTWRnY0JTUXRXM2tlbXVtOEJLOW01ZmwrNXNjNDdZeTVmbnNaYnVvL1UzZnh1WVFiM3YvM0xGcGZvS1ltSm4ySXpEQW1Rdkt1dWkzTjI5ZEJnUERSY3M1YzFROGcwbFpmekdmUU5NR0RoOGM0ZUJCNE1MYXAzRGgwbU9nN0xtNDRvcXZoZEJSbEVwQjFDYmtrTUVWaHhoOGlXSE9yV095VVVKanZyUThiT3l4M2FjeERiRWNzeTJEWUM0bzJsTHhHa3ZMaWxYdTFyV1BaOXVnRkVobElGWW5Kb1lmN3JzbWRuMWF3YTIzM25ybWdRY2VlTlhLeXNwL25rNm5YOC9NeUNRSEMyT0xOVVpmOVRVb3htczRjK3BSSEI2Y1JqWWFRNnNydG1lYnpxbGVtZHVSWTAwYStwUnROeTNzUHRsRnN5NlFZY3A3VEI5U3hMeW1Sc2M2bnVvKzg0dFp1UkIvNkNzVGcwaFpjNHdZUWtNTEhCSWI3eUcyd1Z5eHo5blp5Y3FDMTVsc0Jwa05FaE5BaWtIVEFRWmljTTNCaTdqcTBEcE9YemlEaTJjL2c5R2hiMEorNEZyb2pFSDVBSXFIdUdKd0VBZEdXemo3K0VsYzJ0aW9vdjFoSS9aWXFmZjJTUU1PSUFqOUhhQ0tDTS9sNlVuVnVxbHRrd28zSHA4ek9VOUpCOWNaWEduaGdjcmU5My8reVorYzY3dTU3c21ZajF0dnZmWE01ei8vK2YvSkdQUC9HV015R0lETkVKUmZnc2tOamozNytUaHo0Vk00ZStFY3JyaDZDelJZQjV2bVJNTDZkNkVPYmRTbUdaWnA1YlF0cGR6dlZwRWJHQVVtbVpsVzhmRWxmd2lLbDV6N3dKeGpUQUFQRWlFd1pUWVpVUUFoQmVLQlhSVEttbWtFQmluNzJsbUxpNW41WnYweG14bkJXSUdZREV3WG9LUUFwa05rR09MWUlZMkRWM3dPcDgrdFkxeDhOUTRkZXc3SVhBZXRqNENWd3NycUtsYXVWemg5NWh6T25Ec0hyZlZjcTZ1bTNEUUk1bG8vbVNvL1RWZHBVS2hBWkFJUTBQdzIxR1lGUk80TkdidEJ6RXcwQnFzTXJIS1F5c3BDRjczTnRCMlZGWFRKTGJmYzhva3N5OTRHd0tnc0E2REFaS0JVQVRvd3hETnUvV1k4c240ckxtNnV3dWhKb3dyZXFkbTFHeFdnMjQ1QjhVaDUzVlNZMHlnVTBNdzB1OEd4VHBzaGtVQk1BT2NBNVFCbElNNUJQQUNRZ3lnSDh3aENBd2dOSVR5QTBBQ0dCdTY1SEVKRE1JOHN1TWcrV0kwQURDRElZTEFGb1hNd0lCZzZETUVSQ0E0aW94V3NxaXZ3ekt1bk9IYndCTlpQZlFUWjFpTllNZXRRWlFuRmpIeTBncXV2ZVFhdXZmWmFIRGh3b0dMa3dpRlVYY04veVRPamprMHpXc1BvRXNabEMwVExCcm9LL1JEeGQxQ1A0VGp5aFROa2xQL0ZjNTkvKzcyTHJJazlHOWRPUkVaRWZ1NFRuL2dFaW5MNnM1a1NIaFlqWktSUU1BTlhQUnNIYi9obVBQN0lHUXpWU1F4V2cwR3ZrUXk3M1M2dFh1ekwrSnk3ZVMzUitITG1HcnJtRzM2VFMwRDBQeUVVYmVBTzU1c0laODZxY1JxRmNoQVVpQmpNQXhoeXNTOVNMaGVQSENOSWxxM2lXZEpyOVdDcm1USjF5Vkw0K2poS2pDQlVBTFFPMWhsNDZ6cW93VHF1SEUxd2dNYzRjLzZqb09GWnJCeDVEc2JUdzZEaEZjZ0dVeHcvZmh6RDRSQlBQUEVFVHAwNmhiSXNvNlVsTTM5ZlpvbWN4Z1RrZ0hhZGFXd2lMYnM4ajUxdWpIRld6UWFVbVhQSlYwYnZ2L1BPTzJWZkFDY0V6MzMzZmZ6NXhteDhwNXBlQ1lWVkZLTUp0bkxDNnJVdmdEbDdMeTZlT1luQk15WVlqVWFORi96SkZBcTFSRXh0Unh1TU5MZEdxdGVJaUpFcVc5b0hJS3ZYc0RYTmpQTnR4QkNJRkJRUEhUaHk5L21XTmJOK3pRdzBUQVJoNWRpMkFEeml6Qlp6TFdBVWl2d2lDblVPV2dpa1Z6RWlCVllUa0ZZZ2JURGdNZklySnppei9sbGNPTE9PbGVNdndxUThndFZjUVdXRVE0Y09ZVFFhWVdWbEJZOCsraWkwMXNpeWJGdnRrTUJVL28zdlpnUEhzdG5OWVpZelNKR05aR2xUbTdhemFZb1Zoc1A4b1FOWDVyK0hCY2RWWFpadCs1T2YvT1JOV3BkL1hFN04xN05TTU5DMktrUUVlcnFCUno3elo3akcvTjg0ZnZRNFJ2a1lLcC9BWUFnakkwaTJCcUVOS0gybzVtUjNMOVRlblhmY0lncEo2cEFNSUphNWRJMXRKZ0cxOTdBbWt1cWNqUWNNQlMyRWZXby9XMU5Nb0t6WHpsYTdpS3lBV2NGUGJ5RzIyc1pxSHdYQndMVTNzbiszTVIxeWNTYlVpQlhYMllXVTIra3pDQlFNbVprbWRmVk1YRjBhQVJzWFErRUJ6bThNY0hIaktxd2NmaDdNNkhsQVhvRDVMRWdiU0RuRTZUT2JlUEJMbjhPNXRTOWo2MUtKeWRZVVJWRkFsMU9VMHdLNm1FQ1hKY3FpaERFRmltSUtYUlFveThJbXdab1NSanZLMmhSVjVyajNqK1p1WGQzWDhmRXgyQTBHWkhNWVFRYktWM2l5UXBZTmtBMVhRY05ELytHZDczem4vN0NJZjdQbkdzZkxDMTd3Z29jZWVPQ0JmN0tKelhjWFJmRWlwUlRJbVdQNTZoVzQvdVovZ3ZPZk9vZkpoWS9obVZkUHNHS0dMdEIzQWRvUUNFY2dVdGJBUXEyZ1dkUVU4NkhIN1lTRVZNOTJ4UVNheVFtWG1oTFF5bk1PTEd6Q0ppT3JOSWhCQmlFRzhRQk1JNGdRRkROSVpRQXBhTzNPbVRNd2hnRGJUQVFSc2dGRkYrSGxpbzhJUXNmT1ZMR2lJRkJWM0xsT3BKUWdXMzRCY1JFaHdaSERPZklWalNkT2ZRTFo0UUtyQjY4QlpBVEZBK2k4eFBIckRpRmZ2UVVQbmNqeGVQa1lUSG5KaGlWcWQyODJITW9SQmNiTTNRY1RqdklRYWRYay9ubXVONTcwUUdMdloxcmdLR1lNOGxGaGxQcWxSVUZ6MlRTT2x3Y2VlT0NxOWZYMWQ0dklpMEo3WHBrY3hjbUxPUEdsWDhmaDRjZHd3OUVjQnpJQ2NZRlNqd0JhQWRSNGU5YnJISENXMXpnV3d4d3NjbFRXdGYwczJXYXF6Ui9QdE5hRnNNdFlxUDdPVkZWdUFnVFdtYXZpSElCVURsWURHMEduSE15WlRYQ0ZjMlpWQmlLRjB0aU1BbWFYQUV2c3RJNnZzbFZ6d1ZjSnlpbG1QalpCVEJZZDJWZDF3Z0VEeUtFMGc4VUEyUmdhQlV3MnhGUVA4T2lwTFl4V2JzVm85Zmt3ZkFSbVVNRGdFa2dVTmk0UXZ2VEk1L0hRZzUvSCt2bzZKdU5ORkpPcHl6QzNHcWZVRTB6Y2MyVloycVRicW9wVUE2YWNZK2kybldkdDQvSm1zLzNKamhUeFFXUkJsbVZRS2tlZXJTRFBoci96anJ2KzlJZVdBVTUyT1lIall6d1hMMTU4TjRBWGlRaVVVcGlLaHI3cU9MNXErRC9pc1FjVlRxNzlMYTY5MG1DVnJyUTBicllKSTd6bjUwY1VBc2NEUmpvRG9yNXRVV09iSnZZTklYaFc1c3l6OG1wU0kvZGNEbEk1aEVlQUtKdnlRcmFJajFsQnlNWm1ETWo1UW15MUVrYVZxV1ovV3Mzakd1dFZsYUhWWHVremlKaEJpcXBRd0J4b0tyTENXRkR5Q3RnRldFbHR3WkFCWjFQY2RPMElqejMrTURiTElZWkh2aGJhREtCNEZZcUFJNGVBN09ZYndRdzgrSVV2UU9zQzVhU29mWll0RHJUa2lKNWxiRlFsQm9zSHFNTjRHRmRaQnY3NktEQm5ZTTUwT2VDbHRNMWxCNDRIejBjLyt0RlhpY2k3aWVoRk5nbHlpbUl3eHFIczJiamhwdS9IbHgvYWhNaW5jYzJSRXNQTVFBblpuUmVvNGdXTHNtdHRiV1o5WmpNUkIyUHVUSlVDVkk4NmI2OEJFVmVVSnRGV1ZsVjl2TXRCRTdMbEFWQTIvWVZrQUtMTStqT09hZ1lQQUdWTHVJbEh6bUJrdDhNNndCQkJVUWJDRUVUS2xuR0xMWmNHTWNoUncrd2luZUd3V2Z2VmFTNG9FVGI4cTh3N3RRNUJBVU1qY0ptRDFBRmJJV3RLRUJnTXhnM1hLWHp4OUVNNGYzb1RoNDk5UFVDSElUU0ZxQXRZR1EzeHJCdHVBQlBoY3c5OEZsS1VnSlNZbG1WbG9ua0FWVm5qRmZXOHZTWm9XOGlpSlo1RFJGWFhpeGtGclVDY0lSK003bE9Gbk4wUllmUmt5QU1QUEhEVnhzYkd1NDB4TDRJU1RHa1R1WXlRVFFlWW5Ic0VqMzd4SFRoNjhGNWNjMGhoU0N2Z1hMY0VON3ROdGJZNW1GNjFWOW5YWk9hT1RYTSt3Zlo4S0d1cW9kRmNNMVdycW9GTGUxRVF5dTFOSkFYaW9mVkpKQU13QURpSDBLQjZQZkd3OGdxc0QrT3FRNGxzQVJzRmYzZElzT2FhVFlHQkp3S3FSY1MxN0FkcDdMZ0RYclBYUXg4RXpNQVNCZTc2YUoyQnRVWTJMRkV5OE5qcEFtdVhyc1hobzgrRFpBQU4xaUd5QWhpYlpYM2k0UWZ4OTUrNkgyZlBuTUowUE1IVzVpWkt2WUhwdEVBNW5VSWJtNFV0MmxpVHJjcVVudThETjNmL0dqSXgyR21YRExuTmFWUUU4bWJhOElCb1VULzBoMy95Si85eFdRYzVlN0tBNDgyMmpZMk4vMUpPOVMwcmZCQW0zOEFrRjZpcmJzRzEyZmZqMU1NNXpOWm44TXlqZ2xIZWxnRWdXRGFzWTdXSlZNeFhtTXhETk5NV2RkRFd0VjVUM3BwbDBKU045dlBBYVpVY1RKWUlJTGdPTzJSTEgwQTVTSzA2MEl6QW5MbHVRWTVSQTl1T1FSVndCaTRibWl3cjU3SzFmVG9PTWRzdVAvQ0xqbWNaQ1M2OWhURExPbFpjYjJPclhGTHNpbVd4cFhDbDdBeW1JU2d2QVM2UW1STFhIeHZocERtSGMrYytpdFdqTjhIUWxWQlpCbVlDaStDcnZ1b0dLQkErZmY4bmNlYmtLVXduRTJqRFZhMlNOak9mc2E5WmhpYmZNdWlueG1SOVFWdDZya0NFajYrQy9td25yQkxqU1pSYmI3MzF6R0F3ZU5WQWpiNlFUdytBelNHWWZJTEphQTByVjM0dG5uMzk2eUQ2RnB4Zk80M056YzFvcDVTZHhIemFwMFZMby8wOEh3OWd1NXV4Z05ocEt6TFYvNG5GMjlRdXYweUJPUWZUQUV3REVPY0E1MkFlUU9VRGNEWnlXbVlBcFhJb05iQ2dJdHZrUklnQmxkdGpxS0VQNHJtTUFuZHNIa0R4QUVvTlFUeDB6MlgyZFpTNU9pRGxmdG9IWlA3L1RMbjlYUTZCelRFUVZtMTJnbExRYkZDU1FESUZyUVNHQjJCekFFTlJ1UDRaQ2dkV244RFo4eWRnNUJDS0FsVVpSWjVuZU9iMTErUDV6MzhCamg0N2lzRmdZT05Ncml4K0cyaklkSUlucG0zbW40Y0xGQ3NRTXdhRGdXam0zLy90anZaUCsxYmplSG5lODU3M2hmdnZ2LzlWcFNyL3ltaTZKUjhmSkdhZ2tMUEFWUXJEUXorR1V3L2VBam4xSHNoVkI2Qld4cURST3BpblVGb2hLNDZBaklGa0YyY0pqUVFvbzVCSkJsVm0wR3lnVmZOSThqQXVSSEFYMmZzd3hqRnU0c2dDZ1l2clNFVWsrTjNmcDhuRDdYQlZDUUN2V2xOTStUU1lERVJEUUxtT1B6Z0FJSVBoM0tiRnVQUVlUVG0wc1ZwUXFheHFxMlpUYnpMNGJnYXM3RTdLYkxXWU5jMHlhR05BNHVKQ3ZuTFB6WWJ4RFZQZ2c3QmhtMXd4VlVxUU1WSU54ckM5NlFaUUxoZk9YcU5WR0JGTWg2aGlTOWRkZHgzbzhTY3dQdk11SExqcUJkRDZPSVJYSUVvRG8vTTQvbFZIOERYbStaaE9ocGlNUytRNVliSjFDY3dBdTVJUEZvWXhCSEZOV2lyZmM4N0RzR21hUHFabVRWOGJDR1pIQmhTS2tTc0dFNUFSb0VBUFp6emNrYlo1VW4yY2lEK1MzWHZ2ZmY5QzYvSlhtVzFZd2JNczVlWnBySjM0ZjJBbUg4VjF4MDdpY0U0WThBRVl5akROeGlBeUdKUWpHQkxibzh6dFZnb2FiR3k5aUhlbTYwNitkUmhuUlhCV3RmTmNleW55dGVsemFUTTJOa0JWa05ETm1oRUNLSE9KbUxsdHA0b1YyMHVBbGMwUm93eE1BNEFIam00K1lCZWR5MGtUWkFBUFFjamRvalpPWTFtamlqaXpmb3h6K0ptSE5pZ0s1WHliSElEcnZTYldqMUpLT2NmYlZPMmdmTUpwbGVIa2ZJUFEveEV6V3lZQzEvRGNKWnZhYTJrcTBzRnVNSlo0S0hXSkp4NC9pVXZUZzFnNTlDd0lIYlJNWWxaQXpCaTZBQjc5MG1sODdPOCtpQytmZUFqanlTV1V4UmpGWkF4VEd1alMySzQvVlhlamRxMURWQU9PTzAvS2JkOEx4WVE4SDBvK0hMNzFQN3p6VDM5dXA4REo5Z3R3aUtnVWtWKy83NzVQWFNpS3lhOEF1Q3JMTXBSbENZeXV3aFhQL1U1c1ByNkswMmZ1Z1Jwc2dWWVlQTklnTmFrWUo3aXFSN3RubFRCa0lLb0U0RlB3RVdRZkJQc0d6ZGZKaUl2TGNKVnNLUlc0WmdzTXNBd3cyYzZUTUxDSnJEbEFBeEFOUVRTMHdLQVZSemNyQ3d6S25XWndYVXpKc21JZU9JU2hCUWNwR0JBeWdpL1NkaG94YzFxRlhLTDF3QUtUWE1ZQmxEdU9QVWU3bFN0bm5oblh3TkhNWlJQTUtIaFVnVWliNVdOODFOUnBKd3BtY0xvUG9Ga1hTUUdneFlDekFhNjcvcGw0K010bnNIWHBDUnc0ZUQyMEdkb2dMWStRNVlKcnJyOGEvNUQrSVNhVExYejVTMXRnemdFcVhPTklXL0NucFp0NjNsYmJSTE1FV1ZJMm9Nb3FoOG9HSHhmZzk0Q2RqdzdkajhOajZONTc3NzFLYS8xWEFGNUVaT3Y0RFROV2lrc296bndhYTQ5L0FBZnpCM0hGNFFzWURxYzI3d2hER01rQUdkaGVlekFRS2tBMHRUMnpxbExrN1dublBsNHpZOG93eDdRUjZSbkdmQ3ZWb1BiZVZJc3BCL0VJeENzZ0hrSFJDRkFaakJtQWxmVmJ3RG1BM1BhQkl3VUlRL0dLQTQ1eTJrSTVrODUzdmJGSmo3WnBvemNCbGFPbUZTQzVXN2lPcGFNTVlKNnBVTmZvME5la3lEWVdVb0xxVzVtMVpMSzBWUlhKbHdvOE03REpmQlFaQkVBYlcwWWhZbEJxalFjZlBvazh1eHJaNENvZ1d3RXlvRVNCVXFZb044ZjQwa01QNFlQdmZ4L09uSG9DNHkzYlpzdVVMa082OG5scUU5V3FnR2VRU1U2T2ZxZXNHZ2RpbWJRTTJYQms4aXo3eWQ5NTUvLzE2N3NCbkd3ZkFrZHV2LzMyMHc4ODhNQ3IxdGZYLzFCRVhxR01jQ2FBeWE4Q2p2ODNXRDE0TmM0L2VqZW02NS9DTThySE1GcVpvc2czd1JnQW1GcGJ2QXJ5amNCekdxT2J6dmExSDlWN3VKYWZSdk1SZUVOY3NXWkNJNUJhc2M0MEQxM3F2d1VNY1dacFpqVjB2azNtbURKTFRRc3pTQVlBSzlkbjJ5NEVxbGdpVyttcERXREE3bHljUSsrYUZjS3hlSE1qL2dJcVhlbytYaTMvcXc0cVlwN0ZnTmozV1hiQlczZHVWWHRISTlCR1cyMUlCRktNb1NweHcxZGRqWWNmT28zRHd4Vm93ekJsWnMxYkpSZ01WM0Q5RFRmaTloZHQ0VzgvK0g2VTB4S2wwYkM5cnMxY3VidzFTMmt1aE9BSm1uckQvcXE4QVlCU2pJeXpUNHl1T1B4bnV3R2EvYXB4UXIrSFAvN3grMzZBU3Y0dFpaU2FEcmN3WVlHWUhObjZHdlRaRDRMWC9ob0hWcCtBV2pFWVpZeU1iUHRabTlwdm5Wa2JkM0N0bCtiS2xBUGFtWjBoeERRYllGVFYwcGdnUUVxenBOQXFOM05rV1MwYVFuZ0ZyRllCSHJuL0R3QWF1YVJOVzB2RFBJSWg3OGpEdGdWV3RwTlBhY1N4YUFQQWxTSjdOczY0VW1udEN5VEpna1h4b05ydHhmVWxtR1dEK1VidC9zdHlrQ250bFl5WlN6K2FiL3hnZ1dORVhLYkJyS2VCRUZ6L085dG9jZGJiZWFiQklRSXhKVTZmUG9zblRtN2cwS0ViSU5raDJ3QWxNL2JVQ28zSjFoWSsvcEdQNEdOLzkyR2NQL3M0eUJTWUZsc0FaZHZpY0NHajZRRmtRZVc2OUxCdGMwVk00RHhIbm8vTzBXRDBjLy94OS8vb1grOFdjTEw5REJ4WGx2QTduN3ozZ2NPbG1iNFpwanc2SkpCZ0JCNGV4ZW8xMzREaTBCVllPLzh4OFBuUHd4eVk0c0RLRmpLczIrNG9SQkN4dGZVV0dLZ0ZOeEYwbXduTGZVMXRkK0dnKzh3c3JzUGtTd0NHamc2MmZvMVE1aUwrQTdBYW9DaHRqVCtUcFkyTjB6YWd6QVlwbFRQQnFub2ZaWUhrNm11TVdESUFobURJSm5GVzVkUE9KQkhZY2dKZlhlbzdacnZoRmU3QVRudlVveEJ6bTBtOThNeTJ1MktYQ3ljelI4Lzl6czRYVkhZNmRKV21aSCtLWmdnMHJyN21NRGEyMWpIZVBJZVZBeVBuYzVGdHE4V0VmTGlDNTM3TjEySXkzc1JIL3N0RlREWXZZS0FVQ3FIRzRHYzBVNEJWMWZ0QTJlNCtRa3JkdlRFeC8zYTNRTFB2TlU2Z2VlaisrKysvYVRvMnJ5T3RYNis0WkhBSlE0VENaTWducDZET3ZoZGJHNS9CZ2RFcEhCaWVRNVpwS0ZZd01uSU1tTXd5ZzcxZDdPbE04cDFueUhYRFFVQVdvTW9EOHd2UGx6SDcrbjdReUdtVGtYWDAxUXFFUm9DeS9nelR5Q1ZuQm94WkZRaGwyOURRTm5xcW1tb1FLeGpZQ0QvSjBLYldJMGkzWVpkdW8rekVnekNyUzhLS1J5RG9sYzNWdWM5cHBKYjFaSHU0S2JCUzFSZ1R5d0N5cmFmeDVxc3IwcGJLNC9QcE93TXdqV0hrSWt4SmVPQXpwekJhdVFFbUcwRXlWMkppQ0ZJYVNEbkYydmt6K09EZC95OCsrWWtQQTFLaTFOWFFDSVExRWpab1NpN1IxUWRSY3lobHpXYWxGRWdwWklQQnVhbVUzLzJIZDczN3ZidTVKck9uQW5CY0l0NkRJdkl2UC9LUmozekFNTDhkR056c09obkRqSjRKUHY3UGtLLzhMYll1ZlFnWVQ3R3lzbTRiSWlyQlVBaTVDQW9tRkpuZG1Sa1pCa2JCNzNzU1poOTRNNE9ObTlramdZbWpZSnlmVW5MdTRqc0RCNHdoaUZZQXRzQWhHbGxIbFFjdXdYUEdxZ25aM21kR0ZFb2V1bDRDN0lLWUdZd0pPdU1FUUJBMy9JaDh0b0hySDBBSVhtK3d6Undqb3FvUDNPeUJBRURiVTVXTU1SQjJOSHFZd09wVGpjaHJxS0FzUStvelVXMHZnWXdPZ25MZyt1dVA0MHVQbk1icTZqVXdlZ0NWbDQ3U3oxQXlZL1h3Y1R6Lzl2OGFqenorS002ZWVoUzUyVVFwVk0wNE10NG5KWUdRdUhaWFZIMC9BMFkrc0QzeTFHQWtabmo0N25JOGZ0OXVyOG1uQkhCQzB3M0FuMzdvUXgrNmJ6QVl2TTRZODNxbEZCc1lURWNaVmdiUGcxRVpwbXRYdzJ5ZFFFWW5NVnpaaExEQTBCQXNHUVpnMXptekFQTUdvS1lRTTdKT2VVQTMyMFdSQlpTQUsxbDJEOEJTeXNRTXNFM1NGTXJkSlhYUmQ3YnhHbFpEUi9GYW9zRDRNbWNISGh0bnNUOGJEUVBDTExmTkJScDlYaHFGUGswMXRvK3FFWmN6ODhhVlRKTnltdFV4aUEzRHBLclVvaVdxY2lsb3pPaTdUSW9BUjQ0ZXhmbUxKYmJHRzhnR1dSRGxuN1dYdXU2WjErSDIyMi9IUGU4OWk2SWNXeC9HekhMUUpMUUdnbEVmcEJUeVBJY0lrR1VaV1BFNXlyTGZhSnNlL1JVQkhDL2Y4QTNmOEtDSS9NdDc3NzMzL1Zyckg4TWd1MzBDZmFTVVoyRGw4RFhJOGhkZ29MK0FjdjFlYkcxOUZqby9oVUUreFpBRW1TZ29Ka0FaR0hhOWxva0JPRUxCa3dDT3BhSnFzYmxxVE1yQVBIUlZseGxJK1FwTTVacG9qSnl2WXpVT2NRWVJaVWQxK0M2YkhtQlZpeWRDMklWRzVrd3I3NXRsTHFPQnEwclFNS2x6WnBoUkdGaXYvSkdxaStpc2NZTDduUG4rRHVUTEVEeUlYQVpFblZBSlpxbHM2dzlSRVpXZVNLbE1RK3QxWFh2ZHRmajhGNzZJQVhJWVdhMDBJaWxMbEdqSjhBK2UrelY0OU5FdjR6T2YraGpLUXJzUzh0bCtJTjYwZHBQeWxMSk1uc3B5R0FIeXdjQndwbjdoK21jOTY1NjlXSU5QU2VBRTJ1Yy9pY2lmZi9pVEgva3hOdmdCNHV6cnRqQUVqd1lBTWd4WFZsRnNYSWZOeWIzUThpVm9zNGtEMlNZVWxiYXFzVnlCcGxVb05RRlI0ZktrcUdMT3lPZHIrU1lZY0JuTU1uUlp5VGtZbVIwVlNEbVloZ0RaL0RDNGhob2kvMzk3VnhkalYzV2R2N1gyM3ZmTUhjK01QVFltWUdnSkJwR3FhUWhKV2l1dEJKam1BVlVsVllTRUt4R2xmYWxRRURSU0hwSW9hYVhRTmtTdGhCUlZFQ2w5eUV2elJxU1M1RG1BRmFSRU1ySUJPdzRtcFlUV1RRSUVlNGFaOGR6enMvZGFmZGg3bjNQdStOcFNtaGdiZkpZMHN1ZnZ5dGJkNit6MTgvM0VtOFZ3aExOTEdoOXJPeURJa3pxMCs1bjJxa2dxRzNIY3pkMHVSN3JFMlFwQjZSaVUvUkgwOUJCQVU5TG9qRFkzcE1wVWN0T2YwQUJUb0ZYdDkwVThmV08xTzU4T3FxT0pEQmYzWVlUeHZNWE81UVZzYnE1RFpBU0JoVEc5SEdmR3d1SU8vTUVIUG9SZi9QeFZuUHJWS1ZobWhDQXdIRy9hcUZzU3VVU1oxWWtFUTdJakJ6THV1V0xKZit1aGh4NlNDM0grR08vd0lLTHcwWnYvNk5FaThEM3N6enlwdkNhTjNjVEVGZGdvcm9OZitoTVV5M2NEb3o5RmlkL0R1dCtPZFMrb3FFSGdKcXE2eENPYkxDY3kwRkNoeW9rbk0wbzdGd09pRVNRbEVaR05FN0lrdXhRbGwxS3lJQzQwOCsyZ2FhTlBNR21hbG40bUU2dU1iYWQwclZ0Y29nWmtEa21tQzBobWV1YVByR2FEL20zVTlUS1VEYWNvOC9CNzIvVXRsSW5jaUxmaTZtZEpkazNmWVAxU2EvcDczUEdibENFZ2hHU0lwVkM4Wi9kMnNFWTREU3RGclc1b3JHQk5USUlycjdvV045NzArekVoVkdGSVlYcllCVW83TjJZRFl4eXNqWHN1VjR4bHRHM2g2NDg5OWgrbkw5UzVzM2dYUkRjOGVQek9IejEzMWQ4eG03OVd6TzF0ZEI2ZWw4RDJDc3lOcndYc2Y2TDJ4MUQ3bjhJMXIySEVaMUM0TlFCejZXYlFsdFNXUzQ3Mk51RDgxT3dmL3RpaktHeExWZFlXMm9NdCt0U0pQdDArdVhOaWNmOUs2RXEyZkppVGFrMmtBZWNFNU41SW1YcWxVSDdDcDlkcHo3RjJtLzg4UktEK2RkUWJVZFBVNnJUM2I1bzFpS1gybGo3WFpJNlNDSWkyZlU0QWlXQ3VjSmdmVzZ4WGdCcU9nRlNPVTBRbUF6R0VVVEdQRzI1NkgxNTg4UVNxdFZWa3hYZk9wVzI2aWR0YmpnaWpZazZkRzMxbnp2TjMvNy9zenN2aXhwbCtrdzZFUC83UXJmOVVCTHJUQkhuU2hDWllhdENReDZaYmhOLzJBZERDbmVCdG53RHNmbmgvQS94a0czekprQkJkc1VXeWxuRklnTWpvQ2tacE9RcE9tbHlaTE1XbVJRcHJMMkcwWlpKdWFRbVN1YTB5ZXBLdTFCM1E3Rk9LRElmdkR3MzZ0MGlMTkozNi9meWs3d1RZYVNwcHBvYlBldlpFYlJiTjRqZGNKcUJGWmljQndEeWhXeGpQSVdSckQrcmdQT0MwcStJUmxuZnR4dFY3OWtCVjRLenRVcjhQNmt3TGFpWkdNVGQvZWp3MzkvRFh2dm5OMHhmeXJGbTh5eUk5WlY1VzFUdVBQdmZzL2laTXZpRVVidkNXaWNJaURGMkxzZHNOYTNmRDJDc2gxYzlRNFZWSVdBVnJCY3NoUFNVRGhBTFVCSmoyQ0JvRUFNTFUzanlrR2ZyQzA3c1V6ZHdjQU9wVERXUUFoSlFnRnRJK3JjMFU1R1dxR2UrWGE1UmxuNmI3bWRiWm9KK2gxTC92K2lVVVdsdVNjNjN4T3J3ZXpVNEVtajM1YTRuWk5EVUg3dzB5TWpVakp2bkM5bVhJcjlaaDdTZ2RSUUlsa1hoakdCZzVGRHFQdlh0dnhNbVhmd3BwcWw2MXlEMCtsSUZ4RHFZWXd4WEY5M2JzM3ZQOGhUNW43N3JFNmZjK0FKNDhkT2pRblFIemY0V0cvdDZRR25ZTlNnMm82Q3J3M0c2b2ZoVHovZ2hvY2h4VXZ3RnUzZ1NhTmNBRmtHdmdsVkZJQXd1SGhnbmk4aTRoTmFZYVM0MTRVNlF5U1JWS3ZoWFVpNlFlazZxYWlIeFdMM0Y3bmxET3JYc2JPbjIzYktuT1V5UGw2SkVqZmZlUW5pcG85dlhwU0o3VXNWYW9XNVIyVy9pdEF2YjU1dXBRRk5JamwybnZ4eFRhSldCL21FZlVld2k0WGtvbjdXZ1lOR1NBd21GczNvREF3dE1TTkVTQkxGSVBOWVJLRlphM1lmZnVQVmpZdm95MU4zL1pVandNSjMwNUtFYkZQRHdzaW0wNy9POWVmOU5qbi8vODUrVkNueS9HdXp6MjdkdjN5a2YvOEpaL0xLeTdVOFEvVlRkMVVBQWlRQWdNd2dqS0g0R01QNEV3ZnhmS3VkdXhnWnRReVRMRUMyeFlReE5HcVB3Q05CVGdJSEJhZzJnVHdXekMyMDBvR2tBYlJEeWNqeHB3R3IydzIxMUdFazlYRFFqaUlScFNZbWxiRm1iajJQajVoU2pQdHpieDNSNW91c21mL2gyQ09mY0g4VG1ZdFAzWFMzMmNkdlNQL0RHZW00ZW94SEZ5S2xzN3k4ajRRRmxhV3NMeWpwM2d4Q3ZLQUU1aUJoc0g3d05jTWFlN3I3emk0Yzk5N25QUHZSM255dUl5aURTNmZ2TG8wYU5IeXJLOEkvandBQlMzVzJ1TXFPSk0ySTFOWEFWYlhBbFhYSTN4K0JxRTVoVm8vWE1VMVRwcUkyQldHS2xnUFlIVkEzWU1RWUZBRnF4MXROaUFSRk1yaWk1amtGUnl0Q0FlYmVXUVlvSnhoTTRSdDgxODM1anF0NHFIMHEwV2Y5cnRkbnJxTjlNVE1weTM4Yzk5R0RCTDFRYzlwWnB6Njl1TjU4YzRzMWEzZDFyZUkzWHMyYWk2dVgzN0R2ekMybmg3SjZjQnNnNkdHRzV1SGp1V2w0L2M4dUY5ajE3SWdjQmxsemc1YnI3NTVoVUFUL3o0eHo4K3VMbTV1ZDhIdlY4VmU0a24xNE9JYWhnWWZnL1Via2ZCMThMcEtXajlGb2lQQWxnRlN3T0U2QzNLb29CTi9IOUtONDZHWklKcm9NRkhhSTl4UUM1MnNoZzZhK3lodElramNFNGFBQW1JYVJKQ1cxVkF3cjBXaU03ZFk2UitnbnBMd3RZVFptdlN0QUxzczVLbHB6R3QwK0tNNTcvRnNDWEJ0aVFjMFl5cFhOcncyNEFRQW95eEVkbWVyVG9TTG82c3hlTDJKWkN4ME5Ba0pxbUJzUTVzTE9ZWGx2ejdQL3lSTDl4OTk5Mm4zcmFITVM3alVGVTZjZUxFenJkVy92ZFR4cmdIWVJmMmVuSkp5cnpCTm1wUXdHTU8vd1hyM3dEOEt0aXZnTEVCZGpYSVNYcjBiSWNrZ1hOWWhqRkZKS29oV214RS9XS0dJbUhVZUpSMEIxeExQR3NkMDJCQnhrRkNWTkVrTU5oR1ZSenRUY3VrUjI4Z29WNCs1T2xVVDlaS08yUno2TEU1ejU2Y0VhWWhQQjNLdXJ0QnRtclRZWG9nZ3ExcVJESnorSkIvZm5QbExieStzb21TbDBDd01GSkRRNFZhRlJPdm9DQUk1U1plZk9FUWZ2U0RwNk5qdUhYeGdXVUx6QlhqbGF2M1hQTTNYLzdxSTArOFhiZk5aWGZqbkdNQ2QwcFYvL1hFb1VQZldxbnFUd253NEdqczlucUFOcGd3SVdBK3ZBOXpmQVBNYUIzczNnRDhMMkhvbDJCOUV6Wk13R29UWENkQWZVQkEzWHF2UklPa3lQZG5pcVdjU0JOOU8wMXltbGFrd3gzNU5BZ0JDazcrcGxFT1ZwT2I5ZGFGSmFIRGhXbHF2czhtNjNHdmQwamt0S2wrUnJvUitNd3lyVzlMc2hWQjBMdHROSkwrTk9rWVpIYm0xbEt0ejdKdFhaK1pFYnlBVTYvSHhHRFdyRklQWXgzSU1EanBNQkFiR092MDZqM1hQUDNscno3eW5iY3phUzc3eEptWlFDZE9mR3QxZGUxdmlmVUJiMlJYTUVTVk9GamRCdXVXTU9KZGNLT3JNQXBYWVNTdmdjSmJnSlFBZVpDSkRET0ZnRTFJR2pRZWtqZ2lTcUhkbkdzcW9ZUzBKYzVGaVI0UEdBTER0UHNNa1p4a3ZYUGNMNDYwbTUrZGhSdkxRTTVlVDlQZi9NY3dNL1k2WnlmZnpOMU9mM21WL2svdFhhVjBWcG5IdmY5SU5GZ09NTnd0WHlXejlKTFdtcVlIUmVORDNHc0JJR3ZBMXVyODRzSjNSNHU3N2tzOUxJYkV1ZmdKOUErSER4OStMSVR3b0cvMEFiSE5UbStFall4UTB4aE9IZVo1Q2NBMUVDNHh4djhnNkFhZ200Qk9ZRUlkbTN3Vk1OWHdDUnRHcXNtS2N3UkE0Q1hhdExQNjJCZHhFM2Z4SGpDRzR0dVQ1YWtrSkNBa0owb3huZDFqOUplSVBYRU5hVzhBVHJKVjNlL3BWdmRtVEhON1p0MFkwNE1BYlhjNHlIMVo1aldwZ2xSNlFOUllic2Fpc1lGQndLUldLSTBBVlpnRXJzMlVhUTBCd1h0SThKaHNiZ0pLY0hOemFJUXdYbG8rdmZlbUd4Nzk3R2UvZE9xaW5KVWhYYzdmQXgwNmRHZ25FZDBTUXZnaWdQMG1Sa3ZidGRaaUc2M0M2Q1lZWjJDd0NoTlc0ZlFNUnRUQUdhRGlKcXA1bWhISUZpQXpRbEFUT1NiTWNCSlZKblBmb3hwL0Ztd0JZU2haaUViOU5MWVI2aU1abzBZR1Jsejc4SSs0T08wUjlrekMzUFV4Wk5TRDJraW5uOWFpRHZxM1QwOTR2amYxMnlvdnZOVVpPb2ZSa015dW9yMmlNUVJvQTVZU1VtL2k1ZGNFQW5PV0UzVUlBWFVkZlhXcXpYVWNldVpwL1Bjckx5T0lZbUhuRmFlSytSMzNQZksxcnozeGRwZG93NDN6YTl4QUFKNVUxWVBQUHZ2c2ZnQmZyT3Q2UHpPYnpIVmZ3eGlXSEt3WlkyUVdVTGpkQUJxbzFpakZZeVN2eGIyREVNZ0RCZ3hvZ0lHQUFpR1krY2hrVEJZZGFtemlVUkxZeEY0bnJ5cEY0dGZ5Vkl4MXVtNkxWUXYxQk9QN21uS3owUUxSTVRwaTlJemhtWS9XM0IrQnRrcmtudC9GV3hIeFpCR3pXa2UwdHdZUUdPdWJQbExPbGFaVVd2dTNtelVHNjNXRjlZME5nQm5qOFhoRkp2VjlqL3pieFV1YUlYRit2U1FLT1lHT0hqMjZ2NjdyVDRySXgxVjFaOENZbVFwWW5VTXA4M0FpS0N6REdZS3hDdGVNby91QmVxaWZRTVdEVVlQZ3dRWUlobHJ0WnFWb0tCc1pvb2g3b2R5RXQxSk5CSlk4V1l0WXJjekIxTGJZb3A0Q0owMzNRak9kbW1meithY3BCSmlaZExNbVp0MEwyQVNuOHdoYUF3b0VJZFExWWJQcUtBdGJwWTI3MS9kWVhWM0ZtY2tFeG8xMGNYSDcwLy95NkRlK2N6R1Raa2ljM3l5Qm5qcDI3TmoxWlZuZUVrUWVWTkpiUTFCampTSFZBcldQd01QQ2pTRDBPN0FJc01iRFVBblJUUmlkZ0xRQ0JaK0FuTmt6QndBcnlFaWlPa2kwRzB5M0IxTm5VOGlTd2FBaEVjQXpONGE3V1ZkUHRVWVZNMGZRY1lwdXozTnI2TlJpOW53M3pkbEpHZVYzVlJ1b1J2RklFWWV5SXZoZ1cvWFFUcWttU2oyRkVLTDlZVlBqOWRkZVJ4RFZZcnp0aVIxN3Jyc293NEFoY1g2N1pkd3JxdnF6NDhlUEg5ellhSFk1aC91YnByNmxhcXJiaUdEWUdDQUVUSFFPemhFc2VUaFRZRHhheElnYkdHN0E4SEIrTFI3UWtIajh5aEVUUkFJaWh0Z2ltVXJGWG9UVDF6TTZMUjdNck03VDcxTUFwWkFRM1RNTWFCVlQvY3YwK0xtYnlrM3pkYzd0L2oyeno5SHMrS3FBUkZuZVNlbHhaa0pvRXBVamxvclNLeHVsMVVrN3M3Nk9reWRQSXFoNWFtSFh0dnUrOUtXTE13d1loZ01YZUpodzdOaXhIZXI5aDFYOGJTcnk2YktlWENGbUJ6dG5BVzNnTEFFUy95eEdzWnhidERXUXFGNmNzRzZXcEFWNE5td1NBam9ESEUxa1BJS2dDSWtFbG0wc0V1RU82ZnNVZTZhemVwd1duS2t6UkR0bzluQUE1M2VIbUNuZnBMR0FoQVNJQ3NveVlIVzlRcU1XUVd5aWJrVGtRTFF2RkZSVmhSQUN2UGM0L3NJUnZQREM4MCtPRisxZmZ2M3IvMzdxa25sd0RzZjlnaWFTZWVuNDBkdlhOc1B0d1pkZkNNRTdheDByQ01iWWlQQWxCckZnWkEzbVJvVENDdWFjd3NLREVjQVVBUEtkZWlWRkFmRzhCeEVOOEFpd1BJSjFFWGt0d2tuSUx6RkVqV2tUcC9PZzdhR2ErY0lsam1ya04wa3RhQnBGV1FWczFnR0JMQ29mUnlDU2tpU1hhR1VaL1Y1UG5qeUpRejk4NXZ1NzNyUG56eDU2NkNGL1NWVWN3L0YrMjVMSXZuVDg2RzJuVjkrNjNicnhGNXJHT3dCTWJHQ0tPUkFVQmdIT0VrWVdZQVFVenFFb0RKeU5HRGlHZ01TREVFRHdVUEd4L3pBUktXeE0xRWlJYkZHYmJoeWJ1UGk5dDd4UG5tc0ZQYVlOcDFxMFFSWVkxQjdkWVVwOE85bXFweDFPMUYvcitwK2doS29NcUVzUDd4VkJnTVlyZ2dKZW9zb25vSmhNSnUzdmxHV0psWlVWUFAvODg5ODN4bHh5U1RNa3pzVk1vcGRldW0weW1keFcxL1d0SVlSYk9acWNra20zQTdmeXR3UmpGSmFCa1FHSzFDc1ZCbEVIVTMwME9jalc3Y1F3eVhrc0o0REN6T3hOdUZVQTdkRzBzNnh2U2h5QlRKTlBkSnJCdzVUd2FNa2VNUXNuS2dEdkE4cUdVZGVDcHZFUTZVYmZJb0FFaGNLanFzcDJkOU0wRGRiVzF2eUxMNzc0OEw1OSs3NXl4eDEzK0V2eFBSd1M1K0luRVI4K2ZOZ1EwVjFsV1g1UVZlOVMxUTg2NTJ5ZXRqbmpJbzR0ZUZoV1dGWVV6bUEwY25BV3NLUFlXRE4zMUlSdVNhdFE5VzJ6M2JjMTc0VDgrcXpRNmJJdHVxVnBPMzBEdGl3L1lTQUJFZm1RcG1oQmdLcHUwTlFla3pwQWtraGhDSnJLc1p3OGlyb3VvWnJ3ZUtvNGRlcFVkZkxreWJzKzg1blBmUCtTSGc0TlIvZlNpc2NmZjl6Y2VPT05PK3U2dnI5cG1wMkd6ZjBFeDB4a25iT3h4ekhSUWlQK0hiREd3OXFVU0NNTGEwMnlKMUZBQTFTYTlwYmdzMndiQXlSNGdBald1SmhzMmtNKzA3Uy82dGJKbVZjTGtTU1JxNHk2OXFncWo2cHVFRUpHTXlBbFNrWUZkTXZPcHFuelFFRGVmUFBOcDVqNXp3OGNPRkJmOGxQVjRhaGUydStQcXBybm5ubHVlVU0yNzJjMjF4UFR2U0F5ekd6WVdsaG1XQVl5WVl3WXNKWmdMY002QzhzRVI1MWRlVlR4NTNiMDY1c1N3VmN3eHNMWkVZeXhMWnlvMVJwTVM5QnNhOGlHMjROZkJVVVRZako0TC9BQmdCcUVxQXlQb0FFaVhmUGYzOU40NytHOTE3SXNENjZ0clgzbEp6LzV5Y0VMcFlNMkpNNWxQdTRHWUk0Y09mTGVxZ24zaXVKNnFOenJqQ01SdGRZU3hVTWRZSjJKcUdNRmJJOWRpcVFHRTIwWUtZN0FXWlBLdjBuVFBnT1JEb3VRYlVEeWdWY29nbytqWTBtcVBSRklTcWtzSTRRUTVaNUM4RkFOYUJxZi9xNEljZW1yWlZrZUtjdnE0Y2xrOHIwREJ3NkVkOVFUYlRpTzcveEVPbno0TUZWVjgwbG1mcSsxSXpTK3ZwOEl5OVpaTU5pcUNGR3JDdFBuMUhBeTNjb0twdHc2TkljZ1VGR1lYUEtCa2k0Q1VrOGk3UW1TWkxnckVwM2pKTjFHQWdWSjR0cUVnQkE4UXZDK0xNKzhzTEd4OGZEZGQ5L3p2WVRFZU9lVkFzUHhlMWNtbERsNDhDQXRMaTdTeGtiMWFXdHAyVGxIUVpxL1lNWU9pbENDOS9aTmdBR2l2bjVBbnBCUm1xMzE2UVdacUpiUkFBQkZVeW1FaExUMmtFU2JNRklvVkZlcnVqemROUFYzVmZXZk56WTJUci9UYnBnaGNTN3p3UU1Bckt5czhQdmZmOU85RkVrL0NJTGJBTnhxa29zQmtDMUhHQm9DQTNvOWVwclJlWmtxRWlBZUxmdVVtVjRsb3RBMEZZSjZFRms0TXpwYVZmNnhqMzNzOWg4QWtJc056aHdTWjRqZmFzbjM3VzkvZTZaVTJIWFhYYmREUkQ2ZVA4OE5mdi96c2l3QkFGVlZQYk94c2ZFcUFOeHp6ejN0eTE4S29Nd2hoaGhpaUNHR0dHS0lJWVlZWW9naGhoaGlpQ0dHR0dLSUlZWVlZb2doaGhoaWlDR0dHR0tJSVlZWVlvZ2hoaGhpaUNHR0dHS0lJWVlZWW9naGhoaGlpQ0dHR0dLSUlZWVlZb2doaGhoaWlDR0dHR0tJSVlZWVlvZ2hoaGhpaUNHbTQvOEFoRXBCVkZhdVRmRUFBQUFBU1VWT1JLNUNZSUk9JyxcclxuICAgICAgICAgICAgJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTTRBQUFHbUNBWUFBQUEwejd0SEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUE0Sm1sVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU0x2dTc4aUlHbGtQU0pYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUWlQejRLUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpUVdSdlltVWdXRTFRSUVOdmNtVWdOUzQyTFdNeE1URWdOemt1TVRVNE16STFMQ0F5TURFMUx6QTVMekV3TFRBeE9qRXdPakl3SUNBZ0lDQWdJQ0FpUGdvZ0lDQThjbVJtT2xKRVJpQjRiV3h1Y3pweVpHWTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1Rrdk1ESXZNakl0Y21SbUxYTjViblJoZUMxdWN5TWlQZ29nSUNBZ0lDQThjbVJtT2tSbGMyTnlhWEIwYVc5dUlISmtaanBoWW05MWREMGlJZ29nSUNBZ0lDQWdJQ0FnSUNCNGJXeHVjenA0YlhBOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOGlDaUFnSUNBZ0lDQWdJQ0FnSUhodGJHNXpPbVJqUFNKb2RIUndPaTh2Y0hWeWJDNXZjbWN2WkdNdlpXeGxiV1Z1ZEhNdk1TNHhMeUlLSUNBZ0lDQWdJQ0FnSUNBZ2VHMXNibk02Y0dodmRHOXphRzl3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzQm9iM1J2YzJodmNDOHhMakF2SWdvZ0lDQWdJQ0FnSUNBZ0lDQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SUtJQ0FnSUNBZ0lDQWdJQ0FnZUcxc2JuTTZjM1JGZG5ROUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlVWMlpXNTBJeUlLSUNBZ0lDQWdJQ0FnSUNBZ2VHMXNibk02ZEdsbVpqMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzkwYVdabUx6RXVNQzhpQ2lBZ0lDQWdJQ0FnSUNBZ0lIaHRiRzV6T21WNGFXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2WlhocFppOHhMakF2SWo0S0lDQWdJQ0FnSUNBZ1BIaHRjRHBEY21WaGRHOXlWRzl2YkQ1QlpHOWlaU0JRYUc5MGIzTm9iM0FnUTBNZ01qQXhOU0FvVjJsdVpHOTNjeWs4TDNodGNEcERjbVZoZEc5eVZHOXZiRDRLSUNBZ0lDQWdJQ0FnUEhodGNEcERjbVZoZEdWRVlYUmxQakl3TVRrdE1Ea3RNak5VTURrNk5UZzZORFFyTURNNk1EQThMM2h0Y0RwRGNtVmhkR1ZFWVhSbFBnb2dJQ0FnSUNBZ0lDQThlRzF3T2sxdlpHbG1lVVJoZEdVK01qQXhPUzB3T1MweU0xUXhNRG96TWpveE5pc3dNem93TUR3dmVHMXdPazF2WkdsbWVVUmhkR1UrQ2lBZ0lDQWdJQ0FnSUR4NGJYQTZUV1YwWVdSaGRHRkVZWFJsUGpJd01Ua3RNRGt0TWpOVU1UQTZNekk2TVRZck1ETTZNREE4TDNodGNEcE5aWFJoWkdGMFlVUmhkR1UrQ2lBZ0lDQWdJQ0FnSUR4a1l6cG1iM0p0WVhRK2FXMWhaMlV2Y0c1blBDOWtZenBtYjNKdFlYUStDaUFnSUNBZ0lDQWdJRHh3YUc5MGIzTm9iM0E2UTI5c2IzSk5iMlJsUGpNOEwzQm9iM1J2YzJodmNEcERiMnh2Y2sxdlpHVStDaUFnSUNBZ0lDQWdJRHg0YlhCTlRUcEpibk4wWVc1alpVbEVQbmh0Y0M1cGFXUTZZbVF4Wm1Jell6UXRaakZsT0MwNU16UXlMVGsyTUdJdFltUmhOMk14TTJJNE16RTJQQzk0YlhCTlRUcEpibk4wWVc1alpVbEVQZ29nSUNBZ0lDQWdJQ0E4ZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDU0YlhBdVpHbGtPbUprTVdaaU0yTTBMV1l4WlRndE9UTTBNaTA1TmpCaUxXSmtZVGRqTVROaU9ETXhOand2ZUcxd1RVMDZSRzlqZFcxbGJuUkpSRDRLSUNBZ0lDQWdJQ0FnUEhodGNFMU5Pazl5YVdkcGJtRnNSRzlqZFcxbGJuUkpSRDU0YlhBdVpHbGtPbUprTVdaaU0yTTBMV1l4WlRndE9UTTBNaTA1TmpCaUxXSmtZVGRqTVROaU9ETXhOand2ZUcxd1RVMDZUM0pwWjJsdVlXeEViMk4xYldWdWRFbEVQZ29nSUNBZ0lDQWdJQ0E4ZUcxd1RVMDZTR2x6ZEc5eWVUNEtJQ0FnSUNBZ0lDQWdJQ0FnUEhKa1pqcFRaWEUrQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh5WkdZNmJHa2djbVJtT25CaGNuTmxWSGx3WlQwaVVtVnpiM1Z5WTJVaVBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjM1JGZG5RNllXTjBhVzl1UG1OeVpXRjBaV1E4TDNOMFJYWjBPbUZqZEdsdmJqNEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE4wUlhaME9tbHVjM1JoYm1ObFNVUStlRzF3TG1scFpEcGlaREZtWWpOak5DMW1NV1U0TFRrek5ESXRPVFl3WWkxaVpHRTNZekV6WWpnek1UWThMM04wUlhaME9tbHVjM1JoYm1ObFNVUStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh6ZEVWMmREcDNhR1Z1UGpJd01Ua3RNRGt0TWpOVU1EazZOVGc2TkRRck1ETTZNREE4TDNOMFJYWjBPbmRvWlc0K0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpkRVYyZERwemIyWjBkMkZ5WlVGblpXNTBQa0ZrYjJKbElGQm9iM1J2YzJodmNDQkRReUF5TURFMUlDaFhhVzVrYjNkektUd3ZjM1JGZG5RNmMyOW1kSGRoY21WQloyVnVkRDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzl5WkdZNmJHaytDaUFnSUNBZ0lDQWdJQ0FnSUR3dmNtUm1PbE5sY1Q0S0lDQWdJQ0FnSUNBZ1BDOTRiWEJOVFRwSWFYTjBiM0o1UGdvZ0lDQWdJQ0FnSUNBOGRHbG1aanBQY21sbGJuUmhkR2x2Ymo0eFBDOTBhV1ptT2s5eWFXVnVkR0YwYVc5dVBnb2dJQ0FnSUNBZ0lDQThkR2xtWmpwWVVtVnpiMngxZEdsdmJqNDNNakF3TURBdk1UQXdNREE4TDNScFptWTZXRkpsYzI5c2RYUnBiMjQrQ2lBZ0lDQWdJQ0FnSUR4MGFXWm1PbGxTWlhOdmJIVjBhVzl1UGpjeU1EQXdNQzh4TURBd01Ed3ZkR2xtWmpwWlVtVnpiMngxZEdsdmJqNEtJQ0FnSUNBZ0lDQWdQSFJwWm1ZNlVtVnpiMngxZEdsdmJsVnVhWFErTWp3dmRHbG1aanBTWlhOdmJIVjBhVzl1Vlc1cGRENEtJQ0FnSUNBZ0lDQWdQR1Y0YVdZNlEyOXNiM0pUY0dGalpUNDJOVFV6TlR3dlpYaHBaanBEYjJ4dmNsTndZV05sUGdvZ0lDQWdJQ0FnSUNBOFpYaHBaanBRYVhobGJGaEVhVzFsYm5OcGIyNCtNakEyUEM5bGVHbG1PbEJwZUdWc1dFUnBiV1Z1YzJsdmJqNEtJQ0FnSUNBZ0lDQWdQR1Y0YVdZNlVHbDRaV3haUkdsdFpXNXphVzl1UGpReU1qd3ZaWGhwWmpwUWFYaGxiRmxFYVcxbGJuTnBiMjQrQ2lBZ0lDQWdJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQZ29nSUNBOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBbzhQM2h3WVdOclpYUWdaVzVrUFNKM0lqOCs2a0htVVFBQUFDQmpTRkpOQUFCNkpRQUFnSU1BQVBuL0FBQ0E2QUFBVWdnQUFSVllBQUE2bHdBQUYyL1hXaCtRQUFCK2ZrbEVRVlI0MnV6OWVaeGwyVlVlaUg1cjdYUHVFR05HemxtVldWWEtHbFJTb1Frb0RRZ1pJWU1SQXR3L0p0dTRBYnRiYlRkWWFyZWY2WFkvditZMXZBYUREYyswYmFUbXVadkp2TWN6NXRtMHU5c0dxN0VSRFRZbFJqRklLcFZxbm5MT21PTk81K3k5M2g5NzczUDJHZTZORzVtUldWbFZlOVh2VmtaR1J0eTRjZTc1OWxyclcydDlpMFFFMGU0b28rMXJHejkzK2JjZi8vWVhmdjl6ZU95SlA4YTVaT1dQSDFvNi9WRUF2d2tBNy9uNFIrTlZlb1dONHlXNFE5RkRCR1lHVWJ3V0VUalI1allqZ2lJYUlCSUFKbDZWQ0p4b00weU1JWGF1UmhGREVjZjNLZ0luMnI3ZXhoZ1lNUkFSYUltT0pnSW4ybHlta2tTWTJPWTVSREFpTWRPSndJazJuOGV4T1E0VFE2elhpZlJuQkU2MC9YSWNFUXNlNXVJdGlsNG5BaWZhVE9DSVFFekpxb24xTnRIalJPQkUyOCtJMmRaeFFCNUEwZU5FNEVUYkZ6aGtrU0lRRUxrUG8wWGdSSnZwYllTY2d4R3hqMmdST05IbUlBZEFCQ0tDMkhxT3hGQXRBaWZhdm1HYXJkOEVmNCtoMmgxbVNid0VkMmFvWmwwUFFNVGUxVVNQRXoxT3RKbWhXbTQrbzQwUjQxam9tT05FNEVUYnh4Nzd5TWRrZUhualZ5QWlKSUJpOWpsT2hFOEVUclNaSGtlTStGeUh5bDYxR0twRjRFU2JaYjErejlMUlpMc0lpS0szaWNDSk5nODlFSG9iVUhRMkVUalI5cmZSY0VpK001b3NpQ0p5SW5DaXpaWG51UCtJSTJZaWNLTE45NllvSlhZT1IyeVRXcFFpaXNDSnRyOTFPbW5CQnJoSjBPaDJJbkNpN1dkR0M1V2owL0V0aXNDSmRqQUFsYUlkTVZTTHdJbTJmNDVEWlFFVUJEdWRFM1hWSW5DaXpXSFd5Umc3eUJiZnF3aWNhUFBrT0FCQ1ZpMWVsQWljYVBPWTd4eGdZcGdJbkFpY2FBZnhQSlljaUd4MEJFNjBPV3d5R1NNY2xuYlRvTkh0Uk9CRW0yV2RUcmNRSWhSSW5NZUp3SWsydjFtY0tGSlF6QlRmcXdpY2FQUEFScVJ3TVk0Y2lCNG5BaWZhTE10MUxoSXVscklXR1lJSW5HaXp6R2hOZ0tXa0ZWZWxvcUpGNEVTYlFRNTRDanJHWnhFNDBlWjlVeFFWVVZwUS9Jd1lpc0NKTmp0VUUySjJTZ01TYzV3SW5HaHptUzJBQ29nSVdqUWN2eFk5VGdST3RIMXpIUGlXYUFaQVVYUTlBaWZhUEI0SFpQTWJnWUJqczFvRVRyUTVQWTdiV0pBb0ZTOUlCRTYwdWMzdi80d2pCUkU0MFE2TUd6QVJqTVNwNlFpY2FIT1pGeUtNRXJnUk9ORnUwUFBFZGUwUk9OSG1Cb3diSzJDS2VVNEVUclI1ekJkQW1hM2VnS09qWTd3V2dSTnRscG50MFNhMFdSY1JhQk9KZ1FpY2FIUFpwVi8rdlUwem5Ed3RJa2lVOHAzU01WNkx3SW0ybjJtdDdSdEU3TW1CR0twRjRFU2J4eEtWT1BCRXpFVGdSTnZYL001UGNUVWNzY3R6bzBYZ1JKdGxUdm1XQkFKV3hWc1VjNXdJbkdqem1ySjdjaUpvSW5DaXpmWEdFRUdSZ3JiN2NXSWRKd0luMmp4bUFDR3lIaWRhQkU2MGVjbUIyR1lUZ1JQdDRPUUFFNUVJb09OSVFRUk90QU9FYXE2emt3QW9qbE9nRVRqUjVudGptUDBLdzlpdmRnZGFFaS9CSGVweGpMRXl1Q0J3NU5PaXg0azJmNnFqbUsyMm10SHhha1RnUkp1UElCQVM4U0ZiZERrUk9OSG1OcjlBTjFvRVRyVDVRU01STXhFNDBXNG9YSXZYSUFJbjJnRzhqZTJFSmdJVU16aTIzVVRnUkR2SW04UEk3U1JvbEllS3dJazJSNGptUkFiRTV6dXhPem9DSjlxK29ScVQ4Y0JKUzdHT2FCRTQwV1o2SENOY2RBNVFGTUNOd0lrMk56bkF6RkNzb0tobzhJejRpY0NKTmxlcVl5VGNWQkE3UFNOd29zM25lZ0FWRjB0RjRFU2IxOVc0c0V3QU1STEpnVHZRNGxqQm5leHdtS3c4RkZITWNTSndvczFERHZncE5nWUJ0bk1nQWllR2F0SDJEZFhzZWcvdmJXTG5RUFE0MGVhbkJnZ2lCaUtHSW5DaXg0azJwK094eFU4S2dCUXRBaWZhN0J6SHRhaFJsTUNOb1ZxMCtYTWNaaFlSZ1dJR3NZcWhXdlE0MGVheGJHZDRRWXdCRVh5NEZrTzFDSnhvc3l6Zkc4bmdoYXVmaFJ0b016RFIyMFRnUkp2cmpYRjVqUWlndFluZUpnSW4yanhwanFNSml2SHBhQkU0MGZZM04vRXBNQ0l3RWtPMU84MGlxM1lIZXgwaVJzSUtZbG0xYU5IalJKc25WQ01pY0F6VEluQ2l6UitxR1RFaUloQUlUTnhXRUlFVDdVQjVUbFFsak1DSmRzQmdqVHh1SklJbkFpZmFBZDBPd1UrQVJ2UkU0RVNiSTFBVEVRRVJJMDJUQ0pvSW5HaHpCV29GZmdoUDdWNTV3RURpZXhXQkUyM2ZONGJLQllhT1ZZdTFuQWljYVBzR2FpZ1hTMGxNYnlKd29zMGZydGtjSjQ0VVJPQkVtOXU4ZGpRQTVIa2VYVTRFVHJRYkM5eWlSZUJFTzBpOEJ0aHRvTkhyUk9CRTJ3OHY0Ui9hamhWRXZ4T0JFMjNmNEl5Q0R1bW9IUjJCRTIxT2p5T2xoMkZtMHBDSW5naWNhUE43SEVDVDlOZFBwVytObHlVQ0o5bytIc2V1YUNlSUFMbldwSFVlcjBvRVRyU0RtalpSNlNZQ0o5citvWm9UNnhDSkU2QVJPTkhtdGxEWlJpQlF6TEdPRTRFVGJUN3dTTWdVeEZBdEFpZmEvdlFBU01TR2FscGlxQmFCRSswR0VoNENzNHFoV2dST3RQMzlUVEFGYW1Wd1k2Z1dnUk50TGs5REJPUEN0S2c3RUlFVGJaN296TDlCeEJCQlZQU013SWsyZDdBR2dOaDZuYmpxSXdJbjJyellFWUhXZVJUempNQ0pObzhsaXozcW5WaTl5K3VxR2RIeG9rVGdSSnZIMGhNcmovaGNoMEJnRlRzSEluQ2l6V1lHL0VnQkNMbk9BU0tReE02QkNKeG8rK1EydG1zQXNHMDNJZ1lVeXpnUk9OSDI5emhPVHcwaUFJRVJ0eGxHNEVTYnkrdVVvOUltOXFwRjRFU2JMMVFqSXJ1UFRRVE1MREZVaThDSk5xY1pNVENpa1FnTmU5ZkdUOFVyRW9FVGJaOGN4LzVwdll4aWxtUTMyNDFYSmdJbjJrRThqeDJkanV4QUJFNjAvWEtjcWd1SzF5UUNKOXA4NERHQkFLRkUrRVRnUkpzejBmSDVEc2VSZ2dpY2FQT1NBMFJVdE4xUWREWVJPTkVPbHVPSUdEczdIY21CQ0p4bys1c3hoclF4MEdMOHRvTG9kaUp3b3MwVHFva0l4QWkwMGRIalJPQkVtemRVWTdaYnB3blI0MFRnUkpzVFBTQUl4UWJQQ0p4b0J3clZtSVRJNmc1UTNNZ1dnUlB0QU9oeC8wM3lMT1k0RVRqUjVzcHhSSWhBenVNZzVqZ1JPTkhtZW1PSUNqSENhQkU0MGVZMEl5TGU0NWlJbmdpY2FQT0dhd0lEZzB6bk1DWnVuSTdBaVRZdmNJaEEwR0pBZ0tna2lSY2xBaWZhTFBPZEE4YUNKdElDRVRqUjV2TTJJRis3c1FSQnpIRWljS0xON1hpWUdPTjhVdUFwWHBJSW5HaHpPSjdjYUVBRWlsVUVUZ1JPdEhseUhCREJHTHV0Z0syb1dueXZJbkNpelRMVjYzTFNUZGVJYkk2RFdBYU53SW0ydjUzOWxpKzdoM3VkQjlodFkwTlU4WXpBaVRZZkxVQXVWQk14NkNJWndrVFY5UWljYVBzekEwWWdZaG1CMDkyVmx5WDIzVVRnUkpzRE9JNUVFeEhBYmk2SXdJbkFpVFpYeEVaQWJ1TCt6d2ljYUFmek9sTG9SaU42bkFpY2FBY0kxNExNSnI1WEVUalI1b3JUQ3M4ajBlTkU0RVNieTlzNFBiVnhQa0Z1dzdWWXpJbkFpVFpQb09iem5LZ2RIWUVUYlE2YlRNWVFFVGMyYlFDS05ad0luR2h6bTJLRmhGWE1jU0p3b3MxanZYNVBpR3lmR2hOQnhlN29DSnhvKzV2UlFrUlc0V2FpYzc5WUtucWNDSnhvKytjNGdCRkJyblBBTFptS0ZvRVRiWVoxT2wwQUFqRUdpaFVvVXRFUk9OSG1NNEVBUk5CR1EyS1lGb0VUYlQ0aldIVWJKbzRlSndJbjJqeVc2OXl0K0VEY09CMkJFMjFlTTFxVGlJQ3JJOU14WEl2QWliWXZlSXlCcDZTTDZDMWFCRTYwL1pJY2l4TzNrUzE2bXdpY2FITzlNVVF3eGxoV1RhSzNpY0NKTnBmNUVJMkl3TkhqUk9CRW0rTk5VVXJpd3R3SW5HZ0hKUWEwSm9DS3NXbUtLSXJBaVRhZng0R1ZqNDZyMmlOd290MUlqcU8xaWZ0eEluQ2l6V3QySGtmQVROSmhsY1VyRW9FVGJUOXZZNFFCUzBtdmRCZEc5eTJjdUJ5dlNnUk90Qm4ybm85L2xQcW4xcjRXQkNlOGJpTERGb0VUYlI1VHFYb0xFWkUyeGplb3hTUW5BaWZhUE1TQTNWUWduaGlJb3VzUk9OSDJNMk9NM2YxSjhlMkp3SWsyLzV2Q0RHSmJBTzJveEg4Nkpqb1JPTkZtR1JIWnBibHhoV0VFVHJTRGVSempWclVUTWUza28zNjhLaEU0MGViSmNVQmdaZ3owdUhkcHRIa3NYcFVJbkdoemVKeUFSQ08zTnRmRUt4T0JFMjFPUzFVQ2daSDRYa1hnUkpzalZMTUVBUlU5YTlFaWNLTHRZOFFzUG1SVHpPRFljaE9CRTIwK0V4RVFDR2xaeDRsdUp3SW4ycjVleDNtWklGU0xidWNPc2lSZWdqdkRIdnZJeHdBQTcvbjRSNTBnSWNERVNEaEJ3cHJhdnRaL2ZiUUluTmUxUGZUaEQ2cVhubnoycXpzcU9XL3lIQUN3Mk92QjZNa3lwd21iTEkvTm5uZEtSQkRIY3UrYzkyTDkwdFVmMjNuKzhvZDNMMXhiR2x6Ym9wMUwxN0EzSG1KN3VBYzZ2dlRaOWIydG4xOHd5YysvYVd2aFJRK2c2SEZpanZPNnQ4bm03dG50ejcrNHZQUDBSWnFzYjFzMGdaQ1F3dFZubm5ua3hjOS85b2RldlBUY1AwdVhlb3Z4YXNWUUxacXpmSHZZbTJ6dUFjYkFhTHNWaDBBUUk4aXpES1BCRUN4OFptOWhzTklCNzhZckZqMU9OQUI2T0VsTnJvdS8rekNhbVdEL0EwU0VBT2g0dFNKd29ubVBNeHlsS0tSdkxSVXRqZ3Rnc2dWUlRwTnN6Q1o2bXdpY2FON01SQ3ZyYWV6aVhPOXhqTEZyRFprWWFacm9aNWFHbzNpMUluQmU5K2JyTW1hU0pXMHNKN01sQ0pnSkVLSEwzVW1rUWlOd29oVWVKOU90WkEwUlErRDJnVklVSW9qQWlWWUZUcDd6dExxYU50cURLTGJlUk9CRTgvYml2LzRkRWlQRllnSXVOcklaRUF3VXBXQWtnSkVJbkFpY2FONFd6aHdsdjJIYWI1eTJmM0g2YWhBUUVjWTZYMXRLNlA1NHhTSndvZ0ZZZVBETWZlbmEwanZJN2NYeE5EU0JpdVkwRWNGWVo2czhramZHS3hhQkV3M0FlRHdtZG5wUVpDdWRKVGtBMjVnbUFIU1dJOUhVaVZmc2xiWFljbk9IR0tWS1NEWFBNUThZZ3EzdEdLMUJSbFM4WXRIalJQTnZScXBjU09iQVJLN054aGdZQVhKaklFWmdqSTd2V3dST3RNTHJKS3E2bUowQUFrTkVZSXlHaUFiRVFHbkVVQzBDSjVvMzFVMnJRSEtOblhCaEdrRFFSdEF4S280VlJPQkVLNERUU2QyS0QwSFJJRUFFQTRJaEJVMEpja2xBaHFJa2JnUk9ORC9GeVowRVlLK241dGcxV08wQlY5Q3hOTFdXYnJ4cXI2eEZWbTBmQzRVeGJxVzkrWWUrQTZxYmdoVkQ1N3JTSWUzYmNBUTJCVEtFekJkM2J0ZnJtd2IyQ0p3SWpsZnFCaVFBMkZyZlBDWUpFNlVKekhBTWJYSm9yYUdOaGhFREprTENDbW5hUWZmSTBxbTd2K21ySHVtQTE2OTg0dFBYVks4akt3L2ViVjc2NWQrSit0SzN5VjVYWWgydklFQUlBSzg4Y0ZlYUQ4WktQWHJQZWU2bTU3TzlVU3FLM2k2RUwxS0ordEo4bE4xOS9UUFBZckk5Z0JIcmRYS2pvWTJCRVlNc3o1QWJneVBuVHNtUlU4ZUZFdDdMeHBQZjZpejF4NTJGL2pPanZlRnY4SEp2d0VaKy84cy85RlhyN21mTFl4LzVtTnptd3lBQ0p3TG40TmYwN0lmZVNjT0wxNVBCeGZVT1BYTG1qVVQwWnIwelhKVWovZjgwMngxMmRKYWYxbmwrMUl3eTZQR0VzdEVFa211WVhNTVlBeEZUMUhLMHNVN0VpTUNJWFhIb1YrcUtDTFFZa0dKd0p3VzZTbml4SjkyRjNtZlRwZjZ3czdJNGxqei9uelhraWVkKzc3Ty8vMTAvOUxmTjdRYlJheFZJcjFuZzNHYnZRdjNUYTJuL0hmZWV6cnI4VHRIbVVXUGt6K1JidTkxc01EbVZUeVpyZXBSQlp4bnBTUTdSeGdFa3lGOHFlUXpCdUswZTRuZDhpTEhnY1gvWG9tRzBLVDRHQUswTmNqZCt3SjBFbENqd1FrZTZpd3ZYa29YdXkwbS84OGZkcFBNdjA4WGU0MC8rL3A4OCtiYXQ1VmRVdStEVkRLaVk0OXlnSFh2SEEycnY1V3NMQysrNi84djA3dWplUEtHL3ZMZTkrK0I0WjNBczJ4dVNHV2VRb3RKdkNuRFlUZElXSWdYcWloR0NzRCt0MUJzUXNVTnNJZ1pFRmtRRWdCVkRqSURCOW5Oa3RhWkZCUGtraHhsTmdMMGhqYTl1blRDRUU2cVR2ajFaNkg1SGIyWHAyb2x6ZDcrd2NWL3lZL2x5WnoyNXN2ZnZQdlJmL3FYOGxmQkcwZU84RHJ6THNYYzhvQVpIa3J0N0MvMzNUYmIzM3ErSDJWZU85Z1p2eUFjajBsbE9ZcVF5RXVCdmZFZ0pHaU5sL200S2IyT3BaMk44RFlkZ3hOanZEM1FIakg4T0l6YWNjejlCM1BkNXoyT01EZUcwTGgyS2RtR2VlSyttRk5CUmtxNHVTbjlsNlkrN1M3M2ZVSjNPcndyanlVZkdSNTY2L3VtbmJxczNlclY1bjFjbGNHNW5HUGJRaHorbzlycnk2T1RpeHZuSmFQeVhCcGMzM2pyWjNqdVZqeVlrcHJ5eGlhZ0Fod2VEQjQ4UHQwTFBZajFQOWVzOUtQelhHSmppaVN3OWJTcGY1NEZsQVdrOW0vMmFFbXk1MGZhNWdzOVhuMDhnQkZDcW9KWjYwbHRkdXRydjkvK1hiazQvMVg5eDk3TXJlVExDYmRvRzkyb0NUd3pWV3V6c2g5N0orWm5GRTByanZkZlgxejg4dkxyNS9zR2w5YjRaWjJUemtpREU4bFZLNXlrSTVNSW01MGxzdzFsMTE0Q2dFcEtGM29tWkN2QVFDTVc4cDF2N0FSSkFDTXlBaUF2bjNNOWpac0NneUkrWUFYYTlickJyUlIwZ0JRUUJDVUhJdGNkTmNveXZidFBneXVaSmxhaS91cmk0K0UzcDZzS0xnNVIvNXZnNmZpbVptSFVBWTBUdDZnaWN1dmZ0SGwzdUxyM3JnYmNOOVBnL3lwL2UrZmE5cTV0bko5c0RvbHJvUllTZ2k4eDVDeXBqTG5JM2RBR2VRQit0YnA0TUNKK3JBS1ZVZjZZSG9zMXpZRUhrQnQvSWZROHBCZElFTGRwdE83RGZwNGtLUXNJUC9SREJ2bGF4UEIwekFZYVI1emx0Ylc2ZXdPYm1pZXZFWDNSOWVmbXZyeTB2L1VLMzEvdjMzWmQyZjJlcDI5L0I2MXdVOFk0TjFXNFhkUXhBbVNPOUk2ZmUvZVkvT3hvTXZ6WGJHNzUvdkxuYk0xa0dNYzBiRzdWOUFXV3k3Mjk4MDBqMGZUNVREWlhLY0MzOEdsTm4yWUtRclFqL0FwTEIveGxTMVQ3bjhUbVZ6NTBBRktHYlorcTBkcm1TWSsxRUxFdm5HVDlkc25xeXVMQzR2cmF5OHNuRkl5di94N0YxK2FWMHFMY0E1Sy9IRU83MTZuR29kM3kxcy9qbytiZWJjZmJWV3V1L3V2blM1YlBaN29ERUdPYytiRmhFUXMyVlRsU0dYSjc5S2tnQkY2N1prS29LakNyK3FKaFFhenU4Zk01RVJHQmhHRExCRUxYL1hrOWRPMllOQml5QVladVZGSUJuVS94d1prSnVMQjFPUWk0MEJJVEtvTkgvenZiWGNTRWtpQWFEdldPN2c5MXZUamV1ZjhQVlkwZSsrOWlKNVI5ZHU2NS81YkVuLzNqbkEvZS80M1hsZ1Y1M3dEbjJqdnM3eVp2ditnWVpaWDlqY0hualMwYlh0L3Q2TUxaaFRESG5IOXpjVkF2VHdwekVlWjhpZEhQNWh4MTl0dmxKb1ZwalRLQWRBSmRiVUtWbVF5akhjU3A0YytBUmtnS2tGcGZrcUdydkJKMyttaGdMSGdCc3VNaTdQR1hOSUFoUmtST0JEV0FZMmtWZi9uZGtHLzg1endibmxReU5Cc1B1WUcvdkhldUwvWjlmT3JGMjlmUlh2dTBYbjFIcTczN3lGLy9WeFE4LytyV3ZpN2FmT3lKVXUwMWhXWEw4VHoxeW5vNHYvOVRnd3JVdkhWL2Y3dWxKMWdoL3FPWmUvTW5mbW84RWRSYnZlZG91WjhGKzFVSXNTRE5zTThIUEVrRXRsRE8xNTBNbHJBdnBhaVBhM2V4UzBPRWhYZTEvVHE3eklwenpJWnI5ZDFPd2RYQWhtNGlCTnVYbnhRaUlDZWxTSHdzblYzZFdGNVovZVBYWnZmL3hWTHE4ZTVnNVVBelZYcUhEZ1k0dm5WaDcrL252R1c3dC9wWFJIMTVlRTIwYVNiYzlZYmtFUXJHRHMvUkJzOEFGQ2J4T0xiY3BTQVBQcURuUEpGVGVmREJvSlJCQzROWkJTMHhGOTRCbDlFcVBSMkJBakhlSGdMRU1tdy9kR0phOTgxNUhTRU5CUVVQYjhFeFFFQWxDNUVJMkFoTkJoMkEyQnFPdFhZeTM5NWEzdXVuZk9icDY1RC9iN2FpZmVEQmYvU2Rta2wxN3JiSndyMm5nMEwxSFY0Ky81UTNmTTdxMi9aR3RaeTRjTlZwUFFWWTFBU0dxTVdZQjFSeldZc0xxdnY5MkVydnMxb2R2RGhQRkQvTGdZWGJoRTdrQ0pxUUNaaHZudFhzd0ppNkRPbFcyNVhqZ2tuc2RGU2FEQ2FTcC9INFJTMWU3RU5DZklPVEFZVUR1NTBqbGR5WEhHaEtxUU5kR1F3ODFYUnBlUEg4OVNYOWt0SGJpNisvdXIzMy84TXJtcDg0c0h4MUY0THdLUXJQVFgvR1dibkxmOGY5aWNHSDliMTMvL0FzbkpNdEJsVUhrZHZENDhDakFUVUVuaDREeVFLdUFKNkNzNjNSMXZWYmp2NzVPUFJjM2FvWEtyckVLRFo2Q0t1eWM5Wm9HUXJDK1VVb2ZWUUY5NE1rQVFCRkRrM1lrQTZBVUNzYXRlQW5PbTNHNUNidHllQmpYT1RHWlpQVDgxUXRmY2JGejdkL2NlK3J1bjkzY0dmN2ZqeVQ5MTVUM2VVVnluRnNKbkxOLzVhdS9QTHUrODcyYlQ3LzhOZG5tWGlPcDM4L0NVS3dPSk85OW1LbVNYOVR6b09ESkN1OVRhY09STXArcGYzMVI1UTl6b2VCbmgzUjI4Um9EQ3RxL0ZpTlM1Q01vRW50eHI4bFU4aXB0Qk5xRUZMU3g4MEF1MS9GZjd5bDFZNHh0NlRHbWVMNkM5dmFIQXV6WEtWYlppV1BIbjNuanl1bi8vTkx6TC8vV3d5Zk9aYStGdk9jMUU2cWRmTzhqYVhML2liK3g4OHlGNzl0OTl2S2l6clU3SFJrSE9SenFvQ205VHVocFVDbHVWcnhSbUEvNXNDbklmUW92d3d3eUdsNjVFM0JNR3hHZ3kwS25vR3pIOFNQVjltUXZQWjQ3QWd2UDVQT2RaaEhWZWdkUFhYdWdLYTVLVXBOajA1Z0IwVFQxY0dIaXNxY3U4S1FoTURPZHA1ZXVYbjdqNXZiV3Z6NXordVMvZW1reCsrL09icWRQNDFWZVFFMWVBOTZHN3ZyTFgvbUkzaDUrMzdWUFAvVXQrZmFnRVM2Rk9VdDRXcy95T21WSWhrWklRZ2VRUFcvMWRFRSs0Vzk2Q1dwQ0JVa1JqQmd3bXQwSHhlOGx2ZzVUWmVJVUU0d0F4Z0FnZHEwNWppYlgxWnlPcVFRVGlCeTR0UFd1eHRXSUFHaXA1bEx3M1FlbzVrRlNGRk1OdEFBeUhpNCs4L0x6ZjM1cjhjZzc5NDRkL3g5UERwS2ZYVXNXcnI5YXd6ZCtOWU5tOGR5SjlPUUh2L2k5Z3hldWZ2THFIejc1TFpPdHZlSm1iY3N4RG96STRML2k3M004VmRpODJZb2IvM3pNTllMQy9ReTJEeVlPSGxSNHAvcEJRTzVHTDlwb0hCQjhvbDhRRzY2RTZqMU53a2tCVXY5MTlxWWdzR0tRM2NkVHZBYnY4Wmk1dkRMQjkxVnlRMVFaeUVtZUlkY0dWM2MyM3ZDRmw1NzlPNTlMTnYvdHk0dVR0LzdVNy80S1IrRGNQdERReW9OM0gxdjg0amY4MDkzTDEzOTE2K21YajRzMnhVMVRoQ3RUN3ZMdzg5VTN2bnFxUzIxbXh0K0EwM0lPcVhjS3pQSkE0ZXNzYmtJVU4zSHdEY0hQRHdBMkN6eE10V3RSWmZXSUFuQ3lBeVpYZ2NEQmtlRkQzZ0xBcm5qcXZib1AyNGlxWFJaRlM1QXhibnUySFhVWWpjZWRTeTlmZU50bjFsLzg1QmQvM1ZmOHpVL3RQZitxRTFoOE5lWTR5ZWsvKzg2dm5Vd21QNy94dWVlV1RhWWJJVmtqTkp0U0g2bmV5S2prRE5JeWFCWXlZR0ZPVWY5WlRGeGgyYW8vcHhxV3dRUFhsK2ZEZnljSjJHUXV1Z1JNb3o5T21qa1dvZWlBcmd6Tm9hU1NKU0FrQUNCeDJ0VitpWlZ0eHltWmplb0doZUE1bWNDR0t4N0dndERWcTRMclV4UnB0V0Q3NnZyYWVETCswZFc3VHZ5NUM1UHhWOTQxN3U1RjRCeStweUVBL1NQdmV1alA3MXk0K3ZIUjFlMCtXazdmdGh0L0ZnRlFENjk4NkRKUDVCMnliWTFrdmY3SzNYUDYvS0FDbmhaNnVXamJDVjlUQVNCamN3emZEaVBWQWJtMjM5Zm1PN1poMVBiSm1iSnRLUHk1cVBYSmdRRXFtMGZydjFUWlhpUkY3NXMyWmIzSG9EcTQ1NGtESW9Kb3dYQmpCL2xnOUtnK2ZmSzNyOTUxNG52ZmRxSDd2K0UyemYrOGFuS2NtM21kbmJXbDAydnZlL1BIaDd0N1B6Rzh1dFZ2dStIQ0FpWE4rcThXZHZrYmtsdldhMDRMOTN3T0VUSnUwOExEMEt1Rm9BdERIWVE1UmkxVUN6MnBENWVZeXZBdXpHbmFYajhGMFdFWUtwTDdXWXBWaFRRcFFqRllJREFwTURPVSs5UG1YL2I3T01pcmlqQ3Y1VG9VZzN1T05EQUIxVDBaVFhEOXhRdVB2UFRNYy8vaTl4YzJ2djNWRUFtOUdvQ1RwRXY5ZTN0ZmRQYi90M1B4MmwvTzkwYmQvWElYbXBIQnp4TzJOWkxla0dJV2FTUElHaFgrT2poRDhGUUloK0RFOStBaG4zeFREVVRoYzRjNUVkc2J2Q2h3MWp4cEFUQUhoUEo1dUFMT3lxSGoveDU4WGlrR2d3dXdvSVdFS2I1M1NpZEdsVVNCMDQ0em1HUTVkaTV2OEV1WEwvek1IeTV0ZmNlMXpxUjdtOW5aMXhSd1V1Nm01N3NQbmY2NTNaZXV2bGR5WFUxR2ExNGtQTlRERTdBTkJOUGUxTWFOUGdXZ0ZXRU5tdjRJYitqR3p3Wk5wYmVyVEZpUVc0aVVERmZMYTYxNEhxcDYxd3BGSC96SHptTzFVZlpVQ1VrckxkdmwxR2t0SkMwOVYza2dORUZqWENPcWEwaDFCZFc5OVMxKzVxWG5mK3B6eTN1L2xyMzdYT2RPQmMrZDdCTFRkS24vUU9lKzR4OGZYdDkrYjlHL3YwOFM1UCtVZmRpMFY5U216UFA0VVlTMlVLOG9qdGJ5cjhJalNlQ0J2T29OQ0lhdDBrNmxXYlJGVmNkN1FxWDhxRFhiWTlVMW56TEVqVFdZRWxBbzZ6ZGg3MXBCV3hQRGtHNk1TQUJsdUJiV3E0Z01Fa293M055bEswKys4R1gvd1poZjZ4MU52dkxkNjZ2Wm5YWnozcEtXbTBNNENaS2o3MzNUVjA3eTdCZUdsemFPb3Q3NzFacEhWR01ubVhHLytuc3ZaS1BhcmtPZFJaS2FNRWY0cHM4S0IwUHFPaXdVaGlDb2RDcWdPZ1JuYXEvTlYraTEwWlhXbkZEb28zek9JRGszcGJDSGYwcGpkRVBzdzM5dHFKVGpQODYxTHJvRnREYUZSRzlSN1BULzdzWVRNcDFEaTRFeHVoeFhjQ1JCS0xib3I3UE5uUmdHZ3Y3cUV0YnVQL3VicHNNZitETlhqdTA3YVhvNzIzRDREZ1FOSDN2Zm03ODgwL2t2REM5dEhKMWFMWjhHbWhzd2Fia3g1UVlMMnZWV25VYnVVMmZTcUR6dEs2Q3JoSm1vMUhCYUdVSnBYaU1KdkxSbi9zS2FrUTIxVkxQUTZVa0JVQ1VVQytzOVpZaktqZHl3amVtY0Z2cjZhMVQwMTRuQlJPY3d4bUM4dFlmTnAxOStIdzN6WC8vVTBhMDBrZ016UE9EcTI5L3c4SEI5Ky9zSEY5ZVBGa2xySXplb1BocWc4WVcrMnRlSDNxWk9Ka3hqZy9hanRsdnpKR3JtTC9WY2F4WjFIREp0SUdyZWVPR29RMURrVk16VnZLN0MySlU1RjA5akZLbDY4ek0zY3grcWtCTXVQd283SUZBbEtUaThyclJmamExazNieHU5dTdHRnRhZmV2RzlPN3U3LytieE05a1pBQlNCVTdQajczL0xlZW1vbnhnUFJuK3F5VDVSc1JPek5TTnZLN0xRL00wMlZaQlJvOTNtUmp4UDNSTzBnYVBRSG5ENUNzL2pOVnNPbERZV3JraitYVWVCQlpEekdsUnRJYXEzNTlSektBSmNSd0lYK1V0NU1GQUpFQzY3Q01JMm5lb0JVTCsyTGt3c0huWkxneFdiRjR4MkJyajJ6RXNmdUhUbHlyOTRjbm40aG1uZ3VaMWt3YUhsT0RmN291LzY1aTg3Tzd5NitkUGJMMTc1S2pHR3lqZUdiaWdrQzF2NTBRakZtcUZhZFhoTnBvQ2dQY2NKTzdCOXFCYk9yT3huUmZIUzV4MjFTcjBZVTNudTh2T2xXazA5UjJyTGQ4cGN6UlRoa2NDUFJaZnFvRnFiWXN4YVJEREo4MEtUd1JpQk5qbU1XTEZEWTB3bFB6SlNmcjh4eG8wb2FPU3UzY2JuTi83ci9laUM3MWJ3M2R4ZTc4R0RUekdqMCszaTFObTdmL3ZlNWVQLzhRTzcvV2VtY0VDM0pkZTVJenpPdlIvKzZ0UDVlUEt4M1l2WHZnb2l0Rzg5Wm80YnN2SWxMVjZKYXRUMU5ORFU2eFAxci9HZ3FVOXdWbHQybW85WnZXMWhjUlMxZGhydlZYd3pxSC85N0R4QldOdXBoMjJWMStocVA1WEJ2YllPREFsRFdTNjhSM1V6ZG5odE1KWGU1eW05YkpVUUZHV3VFNEpURzRQeGFJeUxMN3o0cnVlSDEvN0o0NnVEYzYvclVPM3NoeDVOOHZINC83bjE3TVUvYXpKTmJYV1pSaTV6azdReTNmRDNWUlA0ZWoybkVTTFJmTjNVVHRCNUxsSmlXaDBxN0h5Z2ZTWkdLd0J4UVBUNWpBZGtHSXBaVXFEMHFneUdZZ3J5ck5wVkRYTWxDc0pBNWhvN09qMlg5QU56cFdleWJOMTRQTWJsNXkrODk4WEIrcy84N3NuZFU2L1hPZzdKYXUrYnR4NS84ZXZ6dlJGVlkvWXA4ZGVOMFdaVFlyamJVYktodWNpRklqd1JISmpScTRnUEJyclJEWUE1NytGREplL1ZLaUtJcmpQYUJNVXdBaHFGVklZQ2t3NFlRQ25xTmdWb0pPaENjQlI2cFRXcDFxL25Td1QxOVkwdzVTR1ZxQVNEdlQxY2UrSENCOUJWUC92clorWGIzLy9TOHZWcGFjT3RDdHRlVVk5eitrTmZjdC9neXViSGh0ZTNWK3NrUUd1Y2c1dDJOamlNSnduck90TllPUC9mUEhsT3ZhWnpVUGRKWkNWdmpaUmFiV0dvMXVvUk9iemVUVzhaZWcwUEdEK0M0TDllY1REekU3QnNZZFFRZXJJcThVR3Qza3BxWStWK0JOem5VcE04ZzRoZ3NMT0w2ODlkK0tBZVRINzIxOC91SEh2ZGhHckgzbkYvSnpmbUIzYWV1M1M4TVJZd2gvTm95eHVtWXFQdGkxcFlOd0wycFl6RDRiSXdWT042UFNPb2wwenJaV3VqdWtzOXRhQU9RelQxNi8ycFhjN0toSlg0SnUwZWhsdWdvSVVIMUh6ZXdNUFU1WG94NVZxRndLb1hyUzM0VkptUEJheGFsV09ySGpvQ1Y0ejErWTRZR0cwd1dOL0d4Z3NYdjI2eU8veXczNlhhUmxyZENyYnRsUUlPcWRPclg3ZDc0ZHEzUWN0MDBCRE5CWkpiNFgzbXFiZnNTMFVIREZ0NEVvZUpkU1V2Q1NqaWtBU292ODVpRzdVSmhUMkNYVHUxdnJSNWFsRE5nd2JOYnZPQUpLalhySWhyOWFPZ1I2OXNJa1d6bTlyVDAzTzhxVjViVzJ0ZGlJR3N2M3laeHVzNzMvdDlmL3Q3djJVYWVGNHpIdWV1Ny95S3J4anZEbjlTNzQ2NFRnSlV2TUZoZytRMldrWGxrNmptVVdRcTg5UThxZHU4WGkyRXFvMVlIeVFxRFJtOElyeER2VG1VS25NNlZTYXZYdXVpSnVpQjVnaTZlOGQ5VFdscTdoYVFCQVY5TGdhNTFuWnRvd2d1UC8zQzhtaGo1eWQvNlB2K0gxOXpxOG9scnpod1RuN1pteGZ5N2VFL0hGeTRmbFNNRkRNaGJWNm1RUWZmUkVIeXRyclRXdGUyVkpZL1NkSGFIeWJCNGVuc2U4bkM3UVZOYWh5TldaM3loaTVGRWVjcHFQcENZMVY4MFQwL1V5dnRYQlE2aTM4cmYxWUI0RnFodGpsdTBLVDZxNnhhTUw4VDVqcUZQSlhybmRNYTY4OWZXTm03c3ZuRHQ0dHB1NjNBK2FuZi9SWHVQblQ2UjdhZnVmaFdNdElFVEpDb2lreFB1UGM3UFNzWWJFc3dXdWhwMnFlK013MGdZWDlYVzN0UUdMTFZReU4vcWxjYVNHdWhHdGR1dkhtOW5mK2VRbFcwUll2QlU5UGhjSndITlpWcTg2VTNnaFBxY015Yi8wWGFXbk9rbGlPVnhjeHErMUZkZjd2K2UxaVN3QlNjZlhHb21MTE9rMnVOeVhpQ3F5OWNlUHVWNjlkKy9uZlBaOGR1dGRlNXJjRDUvaC8va2EvY2VlSHlmNkozUnpkTWVzMkJnMWNzTEd1OWdXbGZmcUlpQjFVUlJKUmFrYkIycysyblREcTNkK1J5OHBSblNHa3gxOXFmcU8xd3FFcG90UTMwVVVBZ1NBRHN0dXNvUmFkMTJZNWpSQmVVdWowYzdNZlpjSXoxbHk5L1lPZlMrbmZlNm56bnRnRm42YjVUL2ZIdTRNZDJYN2k2OEZxVTRhN3Y5QXhiOStmaEp5cGRDYlVic2w2SGtxQzM3V1lqMTRvQVkzalR0d3dCdG9IVlE0TEJGWUtna2RlMFRKbFd3N2RaSGRSbEdGbDBVcHV5dmNlSGNiblJHRzd0MHJWTGwzL2c3Ly9BRC8rRk52QWNGc3QydTRERGkxOTA3aS9zUEhmNUxjZ042TFVHbWxhYU5oaGJuaU5IQzBPMWNJS1NYV05tNklKNHl2VG5WRGJLbFB0RjI3cVRyWmdIdDlQUzFLSlRGNHhWVjRiWDJsaEhRbTA4b2xrM0tpaHBtalY2VUVyd2xnQ3lVNlFXUFBhUjV6bTJyNnd2cmwrNit2MS8vd2YrN3ZGWHRjZFpPSFAwK0hoNzcyOW5tM3ZFMDJhTVVSUGxvM1ltcGlGeXNVK1lRandmTlNmQlk3OWFVajA4S3d0ODFiWVg1a0RaTXZpdlBrTlR6UWRheGdLbXhGK3RDamxTeXRQT290RGI4akZ4UFdLZTB1YVdYVUFocWVFOXpiVG5wTm9vcmdtMklUVDdFVU1WME9DblN2bXVDTHd5YU5BbzZuWUJhV09LSWJ2SmVJeXJMMXg0YUdkcisyUC94OG5yL0tvRXp1ZXZ2cGd1UGZyQTN4dGMzWHlRWlA3Zys1Vml6K2J0RnAvMmRhSEgySTl5bm5ZcDJnNkZ0bnBPcFJaVFQ3cG5UTFFXTno5azZ1dHZ6aXB4aFphMmh3RUNRWS93ZHdyeUdtcnU5YW0rTkpwYU1LMTRuRUFseDdqdGRrYkNIYWZWa0cyME84RDZTNWUrUHRuSjN2dXFCTTU3di9tRDl3K3ViZnc1TThyS3l5SjNkcEpUOFR4MDgvTTQ5VTFzUmc2MlFhSFNMWTFtMzFpNFpxU3hhU0dvbGN6ejg4STFJOHpLZXAzYXo1NG1vMFdvaG1SMUVOUzlaL1gzUWVOalZQSXZsTFVjVndUMWRIMEZQSTdDenJYRzF0WHJDM3ZyMnovNnU2dGJwMTlWd0RuMmp2czc2dWpTUHhoZDJWcGd2SXFybVRmc3Zab2ZoL29EMWJCa2YrOWJiLzh2QzZCVUNVM2JibXhmQ3dsL2Rxc09tOHQzS2w1SnFnVmRIMUx4akE2RldSNnR6TjFxK2M0VXhhSDY4N2xlaWFJRnh3U2hXNjV6VjVleStjN2xDeGZldWJlOTgxZlBmdWlkZkpna3dTMEZUdmNOSjk4K3VMeisxY2pkNHRnYWw5eElkUm9zVEVzUDJnRUYxY1BldHYxdlVGL3hybzFudHpCTXJUZm5sTVpPTDByUnlxQ2hLaVZWWWJpb1BZOXArNFVLM1dacDFrUTRJQ3Zxb1diNXM2Z2xJWGZ2V3dzNHdtWER4ZWY4dGdObnF0WlpFREozcGdaZ1Q0SVFacXV4VmpxcEhZaEs4TGloT0YxT2o0NkhJM3J4MG9Ydis2WEhmdlg5cndxUDgvVENNTkdRLzJwMGRaTnBaZ2NtN29pT0FKcENGTXdiVkRhbVJHczBiSGhETm1vNUlKU3JRcXNqMVcyRjRBWmdXc003Y2hvRXMxOXpjWk1hYWRHNUx0OFZQNlU2SzNTdEY0Rk5zREM0MFRrZEVrQVU2R1hONjhxRGh3ZFA4WjZKd0xqQ2FLWno3SzV2OGFVTEYzK3dUZVR3UmozUExRUE9WLzZGYjNoNGVIWHI2MGdIMWZnWnpXZTNySW56SUVrRWJxeXp2emxhWFFWRmVBTVhWT3FNSWlaVnhDM21DK1ZLOGI5bTgyaXI3Z0VkWGd0VE9WTEFRWGNBTjBMQzFsQ3NvZ2phbERGdUR3RnJoNXNEVHpHYTdUZHZHdzBpUXBabnVITHA4cnMvMzluNjYvV1E3UlgxT0cySXpZYWo3eHhkM2xpZ0dpVjhKemR1MWdlcDVsbmIwUmI2TkZraHFlZzh0MmthMUVlcXd4dnlSbGpJSW9rVzAvcWE2bDZIdUJsT2hmcDBjK25QdFREblhzQ2pXcCtpMWpHUXNLQTd0ZDZGc2dCYWY1OUtpdG9VNE1tZDFOUmtNS0tMRnkvOVYvL0w3LzNhaVRzMlZMdjNtOTdiSDIvdmZaZmsyaGJKakxUbUhPR0pWL08rdHl3NW4rWDYyL0taY3J0WWN6TFJUMTAybUM1UVkyVkl2VjlOWkhyb1ZRZFhYVEdua3VmVTJuQWFiekFSRlBIVU1lNnlKMDFhRHdJSzNMRFVoQjRyRkhzWW9oWnpQdTVhbURKY0E2R2w3bE5YOUd3eWNvV25xUjFtSXRvK2pJYnpOWFpOdldnWWVMMENHN0pkdjNUbDVNYjIxbmNkUmp2T0xRR09uRjcrbnNHTDE1Wm54VDM3cVYvZTJYUzFURDE5WitZQXRieStXZE80UVc4Y2VvT2FNR0ZsZGdaVHRnalVoQXRMWXFCNnM3YjlibDZrTUh6aFhvMnpua0NHaDBrQnNGclJzNjBQcnUzNitrTkxnandLVHFuSGV4c3hZb3VsYmpud1pEVEcxVXRYdnZ1SC81di83dVE4VWROdEJjNTdQdjVSR2wvZi9qUDU3dWltRlRaZmF4YU9HZGRQOW5uem1Nb2g0KzV5THg5Rk5lRy85dndKamZtZ0pwbFJWZWlza3lqMURnZlVtVE9SMnFRdU5WUStwd2wxRU0yZVJRcHJnZTBiOFV3QitsQzJ5c3YzYmw2NWRtcDdhL3U3Mm5LZGc0RG4wSUZ6OGNubjNqMjR2UGxlbmhJQ3ZPN0JRd2YzdEszMHU5UjAwK3FoWDNERGhqbEltR3VGaktaTVdVeEZMZUZTK0RranBnelQ2bUtHckZxMjVUWFpWQi9XMWNFNU5jY0pybG9adW5rNkdqWE5nb0NxTmhyNWFJTFI1czYzL2UrLythczNWUlM5YWVEVVVab1B4dDg2dnJ6QjFSaTh4cHpWaDVrcUk3Vk54dkVReUxKbUVoVThEa285dCtVamJmbFB2VGV0dlBtazBDSUlRNmxRUjNsZS9lb3d0S21JZmdTRjFzclBDRUZVRzgzMkRKeXZ3dGYzb1JJUkVzWE5WMFhWUGFBQ0ZIdEk5enMwNm1QVTFmVXBwUUJJNkczQ2ZVVkFPZlRtUDlaKy9NQm85M2RkdE9Ob1kzRDE2cldIZG5aMnYvWFhudjYwdWlOeW5QUGY5djUwdEw3OVlSbm5OM2txdDhUZ04wQU16QU84dy9DSDg3NitteEp5cjNtTjBEeEJFYXJOMUhXYTU5RklhQXVoVE5IUVdZS002MW9KTGUrVG1LQ0djMVBUdTAwcXU5bHdpbUs0clR5OGF0UzE4enBabm1FMEhOTEwxeTc5emM1RHAwL2RFY0FaZCtrYlJpOWVXNllidUQ4T2sxVjd2VVdIL2lhdXROM1hoRHpxWVZSZGQyMm1SM050UE9WemxSNm96RGZLa0MzYzJGYW83ekJOMzFJM0ozanFYcWIwenBaTmE5TFRxSXhhbTJKRTNPREs1U3YzYk9lanYxaG4ySHhCZEw5ODV6Q0JvN0xOdlcvSU5nZDBSOXkzaDgxdHY4S2tRdmdyMWEyZ3hMRS9PZEFLak1xcVJqUm82WG81SVR6ZEN3WXJDQlhLa2V6bVd2YzYyYkhmYTJ3dG5rcDEyclQ1dHBkNWo1OGc5UjBHUHF6VFdZNnRqWTIvOW1QZis0TTNWTmM1Tk9BY2ZkdjUxWHc4K1hiSjhuWVJ2Q21GcmJwT1dtdnVnM1lLZFdZWVYyOURtREs3M0xveXBLQk8wZEQ2cXM3VFNMSDVyS3pWVk1PYWVVNzJTbTRUZUlkcWJqU2RnaTVhZG9LZkR5cTlVU2dZTWxVVHdkUzdIdGd1eloxU0ovSUxkeFV4bExLTGRlM0pyaHN0TjU3ZHF1WmsxTXJxaFhBb2YyNTdNZHFJQUdKQUlpQlh1NEZva0JpUU1ZQnhESnRvR0pORFRPN0dybk5vbmVINjFXdjNtZlc5KzNFRGM3UTNMSUZiZDJYTDczM28vM3I5OTU1S3lCYzhEMEJCMXhWcVgva1RIcFVXSEg4ais3b0IycExlU25GVHBpYkVOL3FDQ0pnNWpsRDB2S0U2WmxDODVsck8wampWN1ZaMnQ4TFFCQVJCOCtkVUM4dFNyZCtRYXF5T1Y4UVFScm1Sb0VHenQ5UHowbGJrYW8wZ1FpbXV3QTlKK2Y1SmNLUFp3MHhqdExkSEY3ZXUvL2Y5aDcvbzY0YVhOaWEzM2VNODlPRVBxbXcwK1lwOForaXF4UE16WG5kcUMwNVlxZFp1WDR2dE8xUHQ3UzJCeHlsdjBQbmttUTcveGJldktqRXQzUUZGSG1TazBzV05CdDFiUFFoOGpsT3R6WEM1MWJxNFNVMUZtN3Axekh6YTlReW1QOXNQSUttQXBsTFBDYm8xaWtJcFVDbVFhaU80Zk8zS0IzNzk4dWUrNUtCZTUxQ0FNN2h3UFRWNzR5OHhXUVlCS2l2QkQwb2Qzd2xwaVJHcE1VMU5HYWUyTjcrdE1uOG9Ia2NDaGM0Wkt3Rk5TMy9kdExtWThQT0tWUHZodGM5OFROdm42MkZkYzBpTjJsemxWT1pSNWhBOUNXdFpGVkVQRHl5RENsWHR3UU1BbzkwQlg5emQrTDd1MGVYdWZsSFZvUU5IN2pueVZhT3JXd3dqamNydnZKT0hiUUNhNnFHbTlMYzFRRGVOSUtpNXVZYmVnS05id3h4bTFrMGJoaVpobllhb1hQclVkbVBNN1cyRGZLOVlpRnZyWmZNOWFRM1YwRG44dnhZTklvWlNxa1VMMm02aXJzdmVGck0yUVdIVEw2WHlBdTExamJ6Vzd1aWlBWllyWXdiemhlOVVQVFJxYXhITDFTbTE2Vkgzc2RZNWpEYll1SHp0N1krdnYvUkdBT3FXZXB3NkVrbkxuODQyOXdpdkVmMmE4TlNlTmlaY0VWK3Z6ZFRmYXVWUmU1TnhRNHk5N2JTdTU1SDFDVkJDbmExcU5scTJqWkZMTFN3eXhqWEtVdW0xV3owd3lsWHUxUmFpR3h2b2FKQXNrTnE0dXFPckJhMmVlSnhQc0xtOWZWS1BKdThHMEw5dG9kcERILzZnUXE3ZnA0ZmpRam56dFY1SHFiZit0NFY2NFdNV1UzN1FhMVVSK1pDcTJMb0poc2JDdkNZYzI1NStDMVpsZDAzUjg5V3lzMGFhZFNRdTlvUFNnYThsWkw2UWJIb3VXdExUNFhVUDgxU0VnSEsxSEcyc2R4eGxZL3JzK292ZnpZazZPbSt1YzlQQTBlTXMxWVBzN1NiTDk2WEZEaHF5M1RUVFJpMWp4blBjdFdFSVlscDZ1TW9lS05NSXhkcmFpUTUyaHNyc216c1EvYWhVNWc4OFJDbU4yWnNHUUd2djJGVEYwdUNtTjZhVWdLcEkrMUtWcERCT2htcWU5Ny9WdzRnNERqRzhOcWlSQXJZQjFnT2xTQllyL1czMmdMaTRjZTJCUy9uT20rZGxtbThhT09aRS94dkg2OXNNMDV6dkR5VmNieVprbVhhdnp3V3VPbWh1MEtOVWFnOVR0ZzIwTWFleVQ1bXBOZG11TlVMV1YzaE1ZNlRLK29tcDNKajFRYk0yMEJTOVhwQW1TS2E4aDU1NkR3K1hzQWZPNWpuY3FodFJmTXh1VFh6dDYrcjlhTVpZSVVzU0RSSU5ocTNYZUYyR1loWUhZU2VCdlNuSjFYdmdabmRnN015T0dBMlNIQ1Fhby9IZXd2WGgxanNCZE9ZaENHNFdPQ1FUL2FXVGpaMDROMUJMcUdlQnVRMGtZYmR5ODRhdmlqRzJzWFpGZmFhMm52QWdCMWJkdTRZVWRxRnZIZEs5VXM3eWhOb0NmdkswSk0yb2RiRldxeEFMSGV5SWJSc3RxQjhBbGJ4SG5LaUk4YzJzOXZjZVp4bDk3dnFMMzhpZFpQbVdlNXp6My9iK0pCOU52amJiR2Q2RzBvVE10YkhnanNpQmdtcDRXeDBucE91TmtZQXhySzRGS1o1TDlyOXhtdDdnQU5kMXl0N1JhWnUyNi9sTjYrOWZoRVFCcWRDMjlLcGwrQzZjOTVtSEhwQWduNm5RMDZpdVJheTI2UVNyN2wzWWRtVjc0LzduaDljZm1nY1hOd1djNGFXTnhJenpCeVhYQjR4VkQ1TmgydWRuSEZKYmdod2djNjJNaEUvcHAyb0QwYlNRdmhHM282WDF4SCtMcWJVRjdSY21OK28rYllSdmpYS3ZFd2FCQnlwYWpObzA0dzdRc1IyR3g5TXZmZk5Ra1JycDBHVGMzT3NNY2d0anJJZmNIUTJXTmtaYlgxb1AxdzRkT0tOclc5MXNjNDhhTDc2VzY0UzlYUFBtNkVVellhMDEvY0RKVVJ0NGlHYm1OZldjcG5HNnoxaVlXNFJOdFI2c3FrNzBuQVFCVFdIVFdrSzExbDJpTmVMQUdHbmtOOFpNNldGelRaR3RPVkg5NTFPd1k2M1VXcCthZzliSEh1cDA5TFNmVS9FcXdkaDVlYTNSanZvWjE5bi8vaUtDUE0vcGM3c1h2MzNNWnVsV0FvY1dINzMvRzhmcjJ3cXZOZ3ZtTkV4dG50NmZyRzBnQ3VmYzU4bHgyc1FFNTNGNlJXMUk1dk4wOVNKelcvaG0ycVkwVzhZTlFyVlFjV3MwNmlFWllYOTlOWFoxcG5rOWRIVk1yVTFEZXNxaFd4TW9ySHVkTUJlcmRsZFVWNmo0OS9icTl0YmJua3kyM25RcmdhTWswNDltVzROWG42WkFrSUMyN1g4SlFSUk9lQjYwM2hLR1N2VlovemJ2V3BHSWdyUXFhQjRrdjZxMk1iVzE0OVM4VnVIbFRmWDFCM21PTnRMS2VoMlF1S3lqdmhvTVVIV0xRZm04VXNuNTJsUnZJRTBnTmZJNUwwWWlnZGR4b0JvT0JyeXBzcS9mVDMvdHBvQXoyZGhaMHFQSjNGZnJ0cXQxRXMzTWJTcGpBMVBDc0RhOU5EcGc1emZWUmdEMnUwWVZUMFVIdTY1dDI2SERoc3pxRnVtU3V0YXVJR2dDc1l2d0FQR0h5RFJ2Mmtya3pCaXBPSWlNY2ZHc2xUa2MreWo4VXhqemwrN0lSUmYxS0tFUzhGbHEybEhXSnN0eDZkS2xkMno4eWJQcWxnQW5YZTRuWnB6ZjEzWnhicVNPTTdWV2cra3RKWE9kZEcwMytReFpwOGFwUEVOeHMwRVhCemQ5dlR0YXhHcElUd3ZmaW1XeGJmVVNueU5PYWZSc0ZlZ29lckphYUZ1MEMycVhqQmFYMDV6TXJSM04ydTJpYWVyQ1ZlbHdZTGEzWm1wZjdWRytWYWFSdEpTU0lhSHFUZHREU3NKRWJPMkdLdm1RcS9INGdUZGphenZEOGZBZHZ6TjQ3c0ZiQXB6K3FiV1VFdjZ5MTBvQjV5Q2htT3hUSTZrb2M2SnNLcXpycUpVeDl6d01VdnZybU5iWlVCZndtT1VscXdBM0JVdFdFbGNsa2REYVJpUVNhTEJOS2FJZUV0RmZ2cmJwTkRxbXpQVFV0ZGhzNDdSN05sT0djdGV1WFR1MmZYbGo5WllBUjdRaFBSeS81Z3FmYzB2TzBteTZ1WlErS21sbnV5NHd6Q2VrY2ZPYktUSk5EZlp1eHJpQXZ6bkNPdEtzWDZ0TjQ4eTRrZW1LaUtEN09qK1FWdVlZNVpMYlVCendsaHh3UVRHemdaTlF0VWpheHhQQ2pSSUZlSUp3VHBzYzQ4R1ExRXIzcTJjRnlqY01uTFUvOWVaNzlUaW4vVyt3TzRkSm03ZXI4bVpuYU5wbzJIcTdURDFzYXF0NjcxZDdhZDNjUm9Hd0J0cWJUTnRlaHc3cUw3TTBxNmx5ODlSbG1tbzNxZXgvWGFlOUhYVlBVYkpnMDF1VnlpaE45dlhVb1VvcGdwek1pN1ZmdTNiOWdWdmljWkpqUzkrbWg1TldZWTYyT3M1Y0o4bVUvK2JCeEVIK29XMk5SejNIbVNWMk1hMklONjNlVkZmZ0ROa3NucUtZV2FlRzJ0YTJOeVNUQkZPN21GdHJaUTRzMnBSTnEvNzV1WlpiYW0yQ0pieU1hYXRiNmpNeEVvUjJyWG5XakFQV1ZDWlNQV2hxZFRISTlGYWJxZTkvV2JnTklzRGk4OW9Zak1mak55eWVPNUVjT25EeW5XSFBqTE03dWxhRE90dHl1MS9DbEhtUnhwc1FiQXBvUFNmcXdvb0hEQ05GRHBERCtaYjdvUHZiUDZkZjVGU0VoR0VSc2pLeTNOemdab29oTWwwZGN3NE9Sem1rOTJtYWJrSGRFNGFhYTNWUWJRNTMzOU5aWGV3ZEtuRGU4L0dQa2hubjUwMmU0MDQyZWNWK3JsUnFCcFViYTBZdUc2clQxSCtSYVhXVC9TamROcm1uZzE0M0w0SkJsYi9iaVZPZzNNUldsWnFhMFlEcFBxMzlKT3NoS25uVlFUbk4wNFVhRVJMKzFzYXluNXViRzNUOStZc0xod2FjeHo3eU1XeC80V1VsWWo0bzVnNXF0bXpoczI5OGpJY085ZXNLcW5kcUFYVDJkVFQ3N011cGhHUUlwMWRudCtuVUtlU0tsNnp0S20ycmIybWpLOTNQcHJLTFozcUlWQ2xpU3EybXNqK01HemtYaGZSeU5ZNURwVm9LcCtRajRkZVY4em4rUDBXRXlXZ0N5dlRTb1hxYzRaVU5NdU9jdlBiWWpaekcrOTVvTXpURldtcytqWVdpN1JJNnNzOU5XOWY4MmsvSHVkN05iR3BLL1V5emQ1ck9CS0M3STdqMmVtYXhMdFdPNWpsQVUremZMR3RSakthb1lhZ1BWNUdhbFpKK3I0WjcwM0laS3BpNWNndTNLY1RSUlVKbTBPMWxCY0FFY0dXN3RodGs4L05weHNBcHJvTkJZSEZmYjhwYURZbjMzbkRmSjNhM0RuUVJvbm9RaXRISXhwT2xhZWZ2RGVjNGVweDUwYW83aEVhK2NhbXBhaGhSWC9BN0g3RlJYTkRhS1g5WXRZeEdQU2FrZnZjNWdCcDBjekNWV2EvTCtCV0VrS1pDem42N3VjSThvalduRUpuNlJHRlhnTFNRS3VGcnJpeVpDbk1rdEpNd1UzUE9NQWNNbmlEWEdtU0VTS1pyRU53d2NNd2tmMDN0djZuemVOUG8zbXErSXUxckNmZnRrampZcXNTd2E4QnV1RFBsbk1rQkM2YVZHNGlhV3hUOExMN1BXWXFPaHBtQ0JWVmlJSnd2cXFPdXNlMjZka0NGM2d5TklLNzZlazJwKzFRcGlqYmVUNmsyYzRiVWRsZ0Q4a051QUpCcGd6OGF2UGlXYWVmRmpYdWMwZVRPdXZIZEJpNHhNcCt1UU8wTm0yZlpVMzBOeGJ4aDVYNDV6MzdnYVIzTHFJZEhVenpOUExOS2pYV0c0ZjRjcWk2MDhoUnhXK0x0NVo2MGthWXdJS1NWV1N4Q00xUGRmQk5xcEpXNEUwaWRvWlk1Q0pFNi9ZenEvRnpvczRyZlR3dzl1M2Z0eXcvVjQrdzhjMG5wY1VheUQ5MGI5cXExemFnY21NcVZmWHJTcHVRMHMxTE9XY3RnbTZFTjdmdGFLM3RxMEs0OVVMOFpwd0luZVBIK3BoUmpHdW8xamNRYmFHM2ZhZXdXYmNsRFRDV1BLTUhqS1hNS3BJRjFBYUwyYTFia0xLWko5MWFGTktTNXVxTWhnT0k5eGZTeGp1bkZWTFJxMjRYWFhweGlnUU9OL2JkY3VvY0tIRFBPcUZDMWVWV0ZZMDNLY3A3UUxReXY2SkRDVW4rYVZwSjVmOVA2aDh0VTY0WFA4S1l1VDlPV2NERFVER2paS3QwNFoveTRCVTFKN05IY211YXA2TElQTEFCcENFZ3hsZVZQSVRIUUVBWnBDYXZhU0JwQk02K2FsMzF0UGJCcWhWQmxaT0ZReVlGc2Q2aEVtMWNkYUJva3dKd3NIODNSU245UUlxUHV4UXJRaFB5cVZOOU0vODNjc2tWYUtxdjd6TXhjcXo2Vld2N2QxRlorMk9mUTJwUXRPZlVESndqM0ttZjZ0T3NyelMzYzRVRlNxYS80L2pmVDFIV3JlOWg1M3A5S1Rsa0haLzFuUThEYUxHREtHUFVOQWVmSSs5NTBIaUxVR2t1OUJveGEvcHNuRnprTXE0dGZTTXRjZXNXYkNDcGJuZHZxTTQxNW5jcWFFZ21tUTZ0VG04VmNEd2ZyVUdvMUhXMkM4V01UMHZLbS9jQ29BYVpPL1ZmRUJJTkRqaXBlUlJvU3dBY0o3ZXQ1V1ZnSENsdWNXS2dQSUcxN24yNW96UWYxT3U4MzJ0QkJUOW1EVXJUVGREYm11WDhGKzljd2l0MHk3cVNldHRoMjV1cUpHYSs3U1FNM2N5YS91U3pVRDZ0ckRkUkZBNHZhVVVPcm02b0NGWTVBTURYdlZpbFV0aEFQSVFNVzVreCtxMWtGNkV3d0JwaWlhMWpwMWk2M1FBZTVtaWtuTUNzNWg1OUc5ZnBvd1NmZGIyRURSVk43M1RRN2I2N3VQSlZDdXhxaHpvUDdPUnVqdlRPN2srSGhBVWZ2RFBzdzVtQjN6U0hrQkFkQktUVW96ZjBZS0RyVVVHeWUxeXgxK2FTV0YxeUlyQWNKU2JHZW5XbnFqVjVQL0VWYUtHUzB6OVdFOTVGbnZPb2o1Q0Vob0VWWEJ0ZU1HNkF6VXVzUWtQTDM4U0R5SDljVmE2U2hJaEN5Ym9mcitVTzhoWU54bHdicjl5NGNPM0pvb1JxWlNkNFJQWHNEd0tzNVJEdU01NW5IUTAzTnIrcDV3QlFrY21XTmVsTkN5a3pwRmZOUFZkZWhOb1Y0ZXZuei9VWTNJMUxSZlN2cDZTYlZXNDhxS3JNd01xMU9GZVJvQWFEQ0FVQnBoR0Z5MDRDcDUxdmhNSjRSWUREWW8wUHpPQ2JQMmJ0UENaSGExc2MrWmFweFdoZ3owMW50NTgxcUc0ZG5oV2dIb2NObmZYL3JNTm5NRVc5cEJVbDdpRmlHRjQxd0xSd2RwbVp4TTlSeW5sYmpxYndVNTZWOTVpbzFTVndtZ3A1U3NHWGlnbDByRjlUYTU5Q2lXOVJteXZEUE0zR21FSGh2Wno0TFR5UHRGRDZCSU5SZThtaFZQdzAyNnhXYjNBUUF5Vnd6UFRkRURwQlNlbmJzYzNPbjlsU2d6ZkpxVW0yN0lLS1oybWdIcVNIdDkrK3oxbnEwcmVtclVNbzAvYm4zRzBGdVM0aW5lWmpHN3orbG40MERvUSthdHUwWlFhRzVKUlNlNWtYclliRUpOQkhnRi9MV3Vzb3JtN1JSM1NLSEdUOW5HbGt3N1lKVmQ0MmlNa2QwV01BUlNwVVd1Y002bytzeDZpMytjUWNwNWg3SXUySDZ3VkN2eGxmcU9KZ3U1TmNhSGg1UVk2RzYwTmF4WnFHdWdiVFVaR3EvaW0va05IYkFQOGpKcERLUUZwNzUxZkhzbTg5dUJQTzNPczBDeDQyRWFwUmQzM21jbU1TSTBFRkZzbTlsblNaTThPUlFnZEpPODRaMWdKdHl1TEkvVW1YYW5oMVQ1Z1lOYWFud1pwOHlKZGthOTVzcUNEeFF3ajR5MjM0VWtBQVY0SmNKUTcwZFNZTFFyRnEvUVdYdloxVUxEdVVJQUtyckNtOFVQUE4xcjB3L2kyOG9WTnY0amM4OXdVblM3Q3RwQzV2MmE4ZHBXeitJT1hxK1poRDFNbTkrTVZmNDA5N0UyZGE2SDc3UmJiSk0xUlA4QUhKWExhTUFqYTFqTW91NWs1YXdjY3JYbTJyOUpKU0lMY0lrVTV2WnI0eFNWRHNVd2dXMlJjN3IyVGhUZXFCS2M2ZXhNazRrR2w2SHBsemJvUkhPM1RRS29WUzdFeWlZRHdvSC9jbmZvNEc2bnRoeEJVWTV5aUNBUGpUZ2dHQlVKNTNwOW1UT3czUktvZVBBU2RDMHZVclRYaDlObTl1ZmNyT0hYMmZDYmMzUzNEYXdIMUJuNVN5dHpGTll2NEZNRGUzQ0xtcTdJWTMyWWZ6S3RwZHBZYUtwQTYvZTcrYlhmR0I2ODJ0MWdFMGF6WmxsaU9aMHo4UUFia1lHSmhCeWx4S29WSm5rTkNnR2N4clVkUm4wRmNOdUZlNDVMSDlLTWE5REphOTFpTjNSUkJxS0d5ekpyVThzRHE4N29iR2VyMlh0dDJlTW1pelNiQkc5V2Q3dVJtcEY5VXEzQkZSbXFLRVczdmlLZUs1VjhVVVkxRktKTDRmVUtHakJ3YjVkM1FWSlF2VndzWnJYTkE0VHFYbys3YndMUW0vWE9vRnphK3poMWJzZVc5SEo4UERJQWFhTXdxbkJXMTIvdWNYQWJHMlJuN0hLTUp5TW5PL212RG1CdnJwWERIWElTMXFhcWlLSWdZd3QxZW85VThzTVV5S0lzRnRBcHBBazRlOXFwQ2I4Rjd6MjVrcjU2ak9VMitTcW14OUN3Y1BiWlJveXdwUlE3Y1phYnBpemtGcmNGL3NITGVTMC9GMm1KUDNVUWc1TVo0WmthZ0lkM3R5VjlZRzF2L3MzdCtodXJxMlhuOVpCM2RiU01xdDJVN2tHN2dmTXFoKzFOVTNPKzM0UXNaT0FsYWtkMFdIaGt3aTEwUVBabDRwdUs1S2FldVBtck53dkdOR3NES1kxTktFUEhnMVVQQ1dWb1owbUdiZ1k4SENBbzNxZEVSSXVZM3kwMTB2bWZ1R3lYOTBFVTU5YjVpU242a3hTT09HNEh6MDhyZUk5YTdaL24zZW9tamRJKzk2Y29rc1hYS0cvZFpGb282Vk54ZGVIcW9xWElSdG1BbUVOVTZoeTFqeURLV2VvbUxud09vUlNoNjJ1MmprcnB6TXRvd0ttVHJGWGhOS3I1RVNvUjFEVm81WVovT3JOc2FpWmtwMUQ5VGlkdGFXeFd1NUpjZk5CYnFzV0U5M2k4R2phOHFlNkYycE52bTlCMk5yd05PN2VDTDBuelNEaFo0Vm8zdHVZS2VQY2pjS25DSXhvSzFEb1ozR2tTaEhYeFJFcnoxRzU4YVZXaHlxZnI1anRhUlFrRDlad2UvQWFqeVZXbUJpVTBBVWNKcXVXNzQwbXpQeHBYMTF1UzZCYjZ3UEFvYlhvMFF6VzdHWnpDcVlXZFU1Q2hhbXFkdkkyMTVMdmR6R0tCSHArbmNDV2ZUWlY1bWhhcjEzSXhnbGFLSE0wOTNEV3IzSHhIcnJldVhJd0R2VkY2VE9uVEUyaEdscGx5aG9BaERRTHBDMENpOVczL3ZBT0xWWnN2djdvVy84eERwTlYyM3Z4YWs2S0h5Y3VtLzcyMnh0RHRVZURKV3ZOQzZwOVo5Vk5XMVZhdWUyMHBDbi96UjN2MWxaM05GZ2pURk9LYkptMzM0ZWZyOHNyVlFmRXFybFVnNEVLRldBd3UxV2t5cHBKMmJKUElSbFFiWEVwSGkyaUhXS2t0WW93ZmZWaHNQM1ptSllWbDFVRkd4SXY4V1NncUFwVkF3T2k5aTdxWW5XSG1LQVc1SW1Wa0JyWFJScERCQWdKaU5tT2hyT2F1dHoyUnNVNkpGM3VEOXZjOERRQXlYNFBkOEdNek9jblpONmJZNzlDNHdHYU5PZWFBNUtEOVplVlNYSVZRRzJienVwaC9jeXZxZWVFYU45K1RjSGF4TXJOamZhK3ViS1pzejJrcS9lM1ZUeGM0REZNell1RnE5Uk5BYXhhak5JaTN0Rzh3NmFkVHRWWXg1WncvSUZraWsxd3hkNmRORUVtZW5UWXdFR3kxQi9CZGJmV1Q3R2JjcEdIM01Kem82L25kcTZHbjFyNGJJM0JwU0Z3RVg1dmRhbFhTNkcwUllDeDdYMnJLTnFFNjBpbWFFVFh2WXcwMW1oSXk5N08rdGhBV1FndHE2UVNkSkRieDM2clVGbzllVzBVSWF4N2hYOG1yQ0FDcEozdVNETUdVKy8vRzMyelZiK1RjU2VCakN6dkhxN05henZoMmhRelcvKzlGbC9mZUE1RXR5eFpQM1N5WTBiZld5dXRXMk1IVFNCNUM3R01takg3emQvN3NLeHNkUGNqQVBXOHJYSmpoNVI1S0NJWTVoeVZYR3phUGg5cEVlWm9PUmdhSFFhaDR6akFTc25ncXRWRlJ3b2d1YmtqeFlTenE4Yy9jU1pkMlR0MGo4TUxuVW15MkFzS1ZhYmRWWXNYcWR0blpWMnRRbDBYMXdnTGF2VzhaaFpBR21vMXFJNGZ6MXFWT0sxWklXelhxYmZCdEU2U1RwdXhyNGVUSW5QdGM2Ly9yanlERm05dUJLaURwcG5NRzFNT3NJWHZCUnFoZVUxNHBMTGwyc3lXZVdxRWVWSUJuTFRVcUFSMW9VUFpoenFxcDlCaGpoc2VyTlNvSStVcHJrOWoxRzdLNHdqUk0rbktnb3l2YjlPMEUzUnEzQy90R3NiMVFsdmxSbTJiRFFtV3A1cHByVE16cU9QOWNwcHArYzNNcWM2WmlwZW95RDNWVldhS25pL25SYmhZRVMvVk5ueHBwNWtiWTlOZTdWTEMzS0xzc1d0T3N6V0x1Y1dnV1poNytLR3pGb1dZc0t2YTZnbVlXcXROTS9TczB0NW8vZnYrMVQxTUlTTEtPNHhuYlA0dXR6RVFFcFhLUXRMOTVFekhjYVBBV2ViZXozV1dGMHdqMUxpSm5HQ2FkbG5kaFlkdmZ2Z1RxeHJPWE4yOExOS2FJMHhiUlRodHhmazh1Y28wN3IwdVJsRzUyZXY1UVNnNktOVUR4TTc0aHlMbHBhY3dnWlJTSVJFYjlvblZaRi9McUtrMk9lcmJYbXFSUXFWRHVsS0xRVTB3dmFTZHcrdlMzS0EybzE4UUxlK1pOUGYrekhxZlNxV2Y2ZmVjMTRqelc3VlZtcUJMbmM4ZktuRGU4L0dQQWdBVzdqcHFWTDg3MTQzZmlHR256WXpNMkFnUWhqajFEdVMyWFNqN0xTdmFMNTlvZTU0Mm1ubWFtTjYwbjllb255QllXR3RNb2Y0U3p2MzdkOTJ1VmRlbGhOS1Uyb2tSVjV3TVpJSERtN2lRYVpxaVMyQUNZZ0Q3S1B6VWQyc1cydzFxL1QvMVR1d3FmZC9VVGFoZnB6YlozQVBudWxPampsSnRpSmpSNlhXRzZIWXV6U1RIYnNRek9QQ0k2aWFYSUxnYlpHY3JsRnZ0WFY0RUxxSkpKWUFCdStadWdVYnVJcGZFVnE4eHNmUHVZVk1haFRHcnFxM0xDd2FiWUtDRXl3c2xaUjJkeEFvSkVTWHV5N1d0VUNNSHlKN0poaGltK0E3alpqVU12RkJ4SWdvc29XeXRMd1RhTnpBVnFpYk9RUkhmdWVUR2lXZmZkMStZWVFqNUovUW5mY2txc1NpSWlGdHpJY1c4ZkZIdEo0REE1YUplc04yaUxQWldObUQzZTJmQnFuTUZRV0kvTDFtalZoYkcvOGJveXMzZk9MR3BIS29MWjJ2cTNmUEdTT3NoS2tFSE5NUEw4RXI1ZmdRakF3MGhSMU1yUERzdmFjczFsZUpZV1VNa3R2TStSR0J3a1ZQWlRRMkVZOHRIZitmY1h2Y0tqdHlDVU8yeGozeE1HOFl2aWJJM1RjS3FDSkVLZHFaSTZBME1EeUE4Z3ZBWWhBd01EU1VhaWVSUXhvQk5BbVVVbENpdys3TjhFRmdtN3BGQlNRYVdIQXozRUEwUktoNGx1K05iOERNQWV3RHRBVFFFYUFTaUhFQU9RZzRTalk0eFNMVkJvb0d1Sm5SMWdxNUowZFVwSUQxbzlKQkxEN2wwb2FVSExWMFk2VUNqZ3drcGpNSElTRUdUZ29HQ0lZSWhncmcvTFVBZGJBa3dKQUFEd29EbTh2YlE1TDVPZ0Z5QVhPeVVTZzVDSnNBRWhKd1ltVEEwN01QbUlCb2FPVFJ5NU1pUjBRU2FNMmpLWVVSREpMZDdZS0FCWkNDYWdERjIxeUVNQlZIeFhKaTZPV0I2dUdxbVNOZ0MwellzbUVwQnRteXRDUXEwbUJhdHRJalBTMXRCdEprZlVadG5Za2JlNGUyUC9NdC9wTU1JNjlESUFRRG9IbC81VFBmTW1veGV1a2IrUkZITU5aVGIwM09DTGdnS1NoZ0VCb3oxUHl6V0E4Q2h2ZjNkWUpTQ2l0SlFoaEV5MERTdUZiZmM1YUdBaGhRdnhzenVORktBQUFwdTJzOEJUWUdEcndPeUpJTm1VMVNadlNDZS9VMDFjdTdDR0M0KzU3ZGxoaHUvTEdWUHhSSWpZd1RFWkVNaVFWbjhiZWtTem8wdTNKWUJJSWFLUXJIOUxiaHcwL1luYTJoaTl6TW5VR3BpZjEvREVHRXdFbnVvT0s5cVJGZlcralhJSGRSWXpvWnFEVm9FQmFmb1B3ZjB0VDljUFdWRzRzWWhBaEpFWnZhbUhjNUlTOEhVRVNGUmlhejFGdi9wWXgvNWNUbjBVTTNibVRmYzg1TXZQL25jMTJ3K08veW1KQmYwdTczQVc5WmowZzdDcmlZQ0lKUWpvN0g3ZTc5eW9Tb3NHaEdBdkh3YnFWb0p0cWUxS29IVnNtaTJiUFVKWGJoeHJSVTVoRTF4VTB3c3RBUHYxUUZyQllKeXoyTnZkbmJnMEVaRDZ4eGl0RXVjYzRqSm9YVnVONDlCSTlNNVFJSmNaekNTUWJ2d3g1RFY3d0s1K1VjamdBc2ZpQldJQ2Rvd3lEa0xld096YTBaa0tHSWtDbENjd0pEYlgwWUtyQklVZ1NtSmU2c1ZSSlJiUnFaaEpDdmtuR3dYTXFyTGJkdFlybm02S01JV25FcHphQ2xFV00rcjdDdjFyVDJtbVBMMFpNaXNidlpLNkhZZ0VaSndNN29qazFJbGk3Mmx6Ky9iQUhDam9IblB4eitLeHo3eU1iUDlualBmZHpuYi9vcWRDOWVPSlp4Z3NkZkRTbjhSL1U0WDNVUWhTVktrcEpDYUNSUnBKOG1xUU54RGpnUTVwUkJrVUZCQnUzMjFnT3JKVHdyL25Xb25qeWd2Wmx0SVpoVWdOQjJRcFBhR3Q3ZEhNYzl1UzlzS1lqb3UzczlCeUtBbGg5WmphSk9EekFRd0diU2VRSnNjSWpseVBZYVJITGxreUpLTGdKb0FwRUZLSUpRaFNRMm9JMUFwa0hRQXhZQktDS25SU0JLeVA1c05iTCtmL1IyTXo4ME1CMko4aEJ3S2swR084ZEFnbnhpWUROQ1pIUS9RNHdTVHpXV1lqQ0FtQVZFSHpIMkFPbUJLUWFvUFRXdGdIbHV4OW9TZ2xFQWxCcUFNSkFrVXVvMWFXaW1tVVpYckpkczYxaWkrR2pIMk1HanpEclh1Wmo5b1o4VDJvS0hZYVZRQ3BsRDhyQ2ozN1MrcUhvSW9MRU1VLzZmZ0lBM1dOZnExazJ2THEwODkwam4xaFZzR0hHOHJqMTE4M0p3LytuTTd2UGszeHRtRWRrY0RYTjY4QmlhZ3l3cUtnVzZTWUsyemdTTm5ldWd2ZGRGUlI0QjhEYXdYa2FnT0NBeVZhemNnNVdvWWZrYzUyUk1XNkxsVDJINmV1SFQ3RUVjK3VJWStyLzlyWUpEbk9ZUUdFQm5CbUJ3YUU0QXlHQmtobHpFTUd4Q0dVSlFoeHdTWjNnTjRCS1lKcEpzQnBDRVlnY2lBQ1VnU2pUUUJXQm1rWFFXVkNGSUdGRE00QVRxSkFwRVZtaUJ5ZEFnQm9ETEI1WVFBMFhZN2dHTzRtTm4xamJHN0FiaElRM01uSDBHY2dFVEJHRUd1Z2N4b0dBMU1aQWZqQVREWUVleHRFZlkyQlhzYmdzRjJqdkc0aHdrZEE1TkNvaFpBYWdHRytoWmdxZ3ZGT1ZKbGtDaGxnY1ZjT2cwSm1US3BkQU8wcGhNdVhQZDVUaGgyaFEyd2FJU2pvV0M3Q1FUUXpZSEtBWFhRTk1xaFZHVnBpOTJud1JjY1hUbnkyQ2YvK0hkRzV4LzkybHNMSEFENitNWHNmeGl1SGZ2YUM5ZXZQRXhFeUUwR21CeVRQRWVXVHpBYTcyQzM4L3ZvUDlqRDByMWpLTldGNUNlUnlGRk1LSVdSRkNtZkF3dmJIRW5JUmh4TXdWbGpncVZLR2pyUGtPa01PdGNRTXdEVGhrc2tCZmE5MTlCR3c1amNNbWljdTV0Y0E1UkQwUVFNQTVVSXVpWkJ5aWtVdzcxeEdZQU16RGtnZ3B4NmJtN0ZlenNMVHBLSlhlN3FXQzkvYWhtdEsweVBNYmtiUytDZzI4QzRaTjMrbmt3Q3VFUzkwSVF1bUVISC9BUlVZU2NoZElsaFNNUHdBSHdzdFo3S2RFQW1RVFltakhZSXU5Y0gyTHErZzYzck9iWjNGSWFUWlVDZmhsS25rR0RCa2hHaWtXc2dVWmFSczNDbDRyUVhDYzk5cXF4dTk2THVsUllnRi80aDNEeUFkalZQNDVkRjFVSTdtR1pDZnhBS21pcFVXM3ZYUlJVOEJKVW1jbTd4Mk0rKzc5SDNtRm5Fd0dFQkIvbHdmT211M3ZKL1AxbWEvTVRXY0dlMVl4Z2tDa3lBMFIwc0poMm83YmRnNTlsMW5EdStoOVhGUFNoekVjQTFHQjdCSkJtMDZoZWFYbGF6bUNya2dJZ0NxK0MwUzMzVG9RR0VvS1JyQVVQMmhwVEMreGlJS0FBcDJGWGp1V0NkTFIwNTZZNlJzVzFMSWlFd0oyQkpiQWhIUUY4TXhPaUNBdmJzb2ZHcUxJbXZteEEwV2RBTGd2WWhSVUd0UUVDc0lFS1dpZ2NWdklnTlVUU1lMWWtRTG5teXoybHZjbTNjRmdLQ0pWejBpbzM4U0VOeER2QVlTbW4wRjRIangxSWtreTV5S0F5MXdlNWdndXZyMTNEbDVVM3NyVDhQTTc0YlJLZVJxZ1JLS2JmV28yeTNVY2FHWUxsMjRBZERrMm5VZDB6TGVFS2RlcTRRRFFqSUFhOVU0enhNR1hMUHR5QzR0V3RsamhHWGtrNjN2Ky9xOHRMbVNFK2VudWZuSEFwd0FHU3lNZmpWTThlUC90dGM5RGVOc3dreDkyQzBoa29JMURFWWRaWnc4ZXJUV0hsK0MrbkRXMEN2QTJNV3NhakhVQmpDb0d2UE90VzhFTFpiVmdjQmd3c2JYTEdPaUVBcTBOVXlVdEhRSWpLQWpBRW1Td1VMZ1ZUNFBqT1VaKzNjOXh2b29oNlFVOWxEVm9oNGVJcUQySVUxVk1qMFZzYkpLU3dLTzI5alRKa3prUDFaWGhXbUhIRGpraDRXY2lTZGdJWEtaazVqcncyenBlUHRDMUVRU1d5eUt3UkpHVm5IdnNZdUdPbXF3dHBwd3ZtSGdQRmdEN3ZyeitIcTA1ZXdjZlVJU082QnBNdklFbnY5bUJSSTVjaHpqV3pFMEJOQXU3TnFMQmt5TnBhMGFQUnVCclVkZC9QYlBUcTVCWWZPUVdKQVJnZUxzOGdIc3E0emhOMDhqZ0VMb0F1eVlNcFNxWEFhMmIyTzR2Q2wyaWE1UW1oR3dNaWhPSUVRc0xKeTVIZSsrVjFmYzNIN3laZHZHM0FBWUwyN1B2cUhwNVpXMzdhZTdEMGdJdERhc2t3cEFhcmJSVUozNDRVdmJHRHhpTWJKY3lOMDFhNk4yZlVTb0tpeU1ydTkyYTlHUTdLQWk0YXZvUFdHNmpHNHBYNkxyb1B3YTF2NjY5clVtMEhsbkVyeEtwZ2JhV3V6TDg1bDFFRUJqNm02bWJteDlWNmtiQlV5QW1KN21pdXlCV1Npc0xkTjJlRXJEOHhDVHM5KzdJOGNlNk1vS0ZJZ1VrQktTSHVNeFNNOW5MNS9BZGMzdC9IU001L0Q1c3VuMEozY0E2QnZEeHowa1NSQWYxRWpUOGZZbXd5UlRYS0lObzdRTVREdUFoZ2pnWkFKS3EwM1RWbzZtQjIxb1VhWnM3YjFOTHZXR0FscVBKWHJUclhsV2Y2NnR1WS81ZGY1ZnNCT3B5ZHJDOHYvY1B2SmwrZmEwY2szZzVSYURHakV5S2VYY3ZVL0xTZTlMU1pDSjBtUkppa1VLZlNJMEYwNkRjS2I4Y1NuVDJMN2lrSWkxMkhQMjZPdDBwNzdyUWl2dCtQTW16Z2VuT2VuQXowYUY1a3B5RythenhmbVB1SEh4Zk9SeTNzWUlGZHdGckxGSjJJR3FTNG82UUxjQWFrdW9GS0FPeER1QUpTQ0tRRlRDbFlkMjBFQlpmOU9LU2dkdzZSWGNmeXVERzk1cjhJakg5akc2a05QUXkyOGpEN2w2Sm9lRWxrQVV3ZXEyOEh5OGdJV2wvcm9wQXFKY0hHVGVoRkUyeVBZN0M1dlRNWktpMWhIWmZ6QVRPMUJrOXA3WHpCalFYdE4vVjN3YzE3aE5tMmJvRnI2Zm5GMStkb1ErTU81cHdOd3VMYUx3ZVJmSEJueUx5d212VzBpUnNJSjBxU0RudXJESkFtNlI4NGlHOTZIWi82Z2g5R21RR2dFcmFoMUlyVEs4Nk1XVTh2Y1RaamhEWDFqNEJGWGx3cEhkY04ya09xRFNDcVBTakxLM0FxT0VEUWNrQU9zQ0t5NCtycUpRWlNBa0RoUWROMmpBK1l1RXRXSDRwNzlISGN0bUxnSElJVWdnU0NCUVFxaERvVDZJTFVLbWl5ak95SGNmV3dYYjN0MEhlY2ZmUW5KdWNlQjNqVW8yZ0ZoQWxJSk9GM0E4dUpSbkZvOWdhVnVGd2tySjM3SXBZT3RySXFYMmhDYTFOYXdsTjRJdGMxcjFjWlNtVEttMEJMYTEybHBmL2cwN2dIcm5STlNXRjFlZWV3Zi9iT2Z1VFRGS1RSTWZmLzNmLzlOSWVYYzE3MFRMLzN5NzFUQVEwYTJPcHljSFNYbVFSQ0loYUNRSWs4eWFDVllUSmV3ZWZrYUVnelJQMkdBTHFCa2x2eHNOWlFKTDBEYktWLy8vUDVnb2FsZEM1NStKYW94TVR6ZFl6UmVBeGszcG13YkpBanVUeXBEekhvQnI1dzdJVWRsc3cyeHdHQktvVlJxZTZzNEFYSFhBb2c3SUVwQlNFR2Mybzg1Z1ZBQ29oU2dCT1MvaGhQN2RiUU1ZQWtLUXlTU2dYUVhyUHZvcndwVzc3cUdMQjFnbkdza0JvQk9JYklBaFJROTFjRkN4MGI2RTUxYnlTcW5JK0RIRG5KWFROWHVjMFowMGM4R3NRdDVEUXhJVE5BUDU5bFRVeXpQRFhPVDh0cHduVU9yWHZmYWplUERNdXRrMkMwZ1ppaVZJTzMzemNuanh6K3krdXNYbmczdjY5dVY0eFJFQVlEZlQ4Ym1wNWZUN2h1Mk1IcVRVb29rWnhBSm1ITlFKOFhSWTIvSEUwL3VRUjI5aHRQM2o1R3FwSEpTek9ORmJtVjQxZ2FlWm1HZ1dleHI3UTRQVGp3UmFaeCtkY1dlRUh5V0owaGQyNUhYQ0VnZGtBRGlEalIxWE1lQUpSVUU3QnBuYlNiQVBsZTA4WjFsOVl6M21VTlgxMUl3dEFLU1BnU01oQ1pZNmdyT1AwellQRFhBeFdjMXV0ZTZtR3lPa1pzT09DR2thUWRIVjlhUUpCMWMzOW5BN21ob3d6Vmg1RHByanhaUUhWU2sycWkwY2ZKVFluVHJRR1ByRzlCeUREWTZDbEFkelNnUE5vWFRheWMvL1RXbnYvUXg1UFBmRTR4Ylk3dGl6TDliM0RVL3RDVHA0N25KQlpTaG8xTjA4eFJDQ2N6aUtYUVgzNFl2ZkxxTDdZdW11bWV5WmIrb0hDQTBPM1R6WVJlNzBJdk16QWV4V0kvaUgxUU45ZGg5enY5Wkg4bW9oRzJrd053QmV3OEI1MG5RQVZFUGludld1N0R6SnFwVGVoZEtBVW9oenVzSXBmYUJ4T1ZEUFNTcElFa01vSTRpVDQ1aTBrMlE5UVl3QUdoNEZ4TGR4L0UxalRlK09jR1IrOWV4ZUc0YkN3dTd5UE1oREhlUkpDbU9McTNnek5vSnJDMnVCTjZYcDY0bThiMTZUcEFnMEU5ei9ZQ093ZVE1RDdWWitXVTlucWprUk14Z2xXRHh5TXF2L1l2SGZuVjhzRnZpRUcvQ3h6N3lzZnFuVm9uNTZ6ZVd6ZDhiNnVIZFNpOENJQXlUREJNaUpOa0lnNHUvaHJVamorT2hkekZXVGk2MHQwNFFHdTBXaDZzbFVBM1Y2aHJTek5xQnAvMW5NdS8zRnB2S3VIZm9VUVJBcnUxaFFjeFFTbFYvZDJZUWQyMmgwRERFRUpoVEtPNDZlanhGcmp5THBvb09jUnZydSswQ1NvR0NUb1NpTFJzQW1SNWdGTEowQzVtYVFBdUI5QUo2UmlIVmNCc0VESmhUVERUaHltYUs5ZldqR0Y4NWpxMHJDZm9xQjBPUTZ4eVoxcmkrdTRuTG05ZXhOeHBnbkdYSXRTMkVhNk9oVFlaSm5zTm8yeU9YR3czb0hNWm9aUDV6MnZYeHVYNjFISFdwM1AyWEVWSHdieVVsYlZsSlA5eW9sRUpDQ1k0ZE83bjU1Vzk2Kzd2ZXltZS9NRzkrYzZ0Q3RkQzJ4SmgvdmNMOU14cjRiNGRtZElTSW9ZeEJGelpPWFRyMVByeDB0WXZrajM0UEQ3empHSlpXSmtqU01ReTZNS1lIU2JZaHRBZWxsNEdaQWh3ejF2YnRCelNoQ3ZtTVFIOXJlbUtKUm13OUxWVHpCVFlpMTFCQ0JLR3lsVjZ4RkF0WmlKV2xtSVVjNDVQQ1NCL015clp3Z3dGV01NUkYzbU85ajArYVhPZUY3d1FuOTIzRk5iR2N1aTNDQ29UdGc3Q0VqcS9XRTRNVVlKVEhsd1Yya2dCbnpoQjZLM3U0dHFEUVNWZXhmV2tKV3NaZ05VU1hCR2RXanFMTGkzaGg0MlhrZEIzNXVQcGVzS3ZYa0FBc2Z1azZ5cDd5WUk3SmhwZmFqaWE1eHRwcEV3UVU3dTZnc0N6QUJhRkRGSlFDUUlCS3NMQzY5dWwzM2ZXVzU0YVhOZzUwWTk4ME9iQVBVUUFBSXhybG4xOUlPdHRaWXQ0OU1WblBLb0RhWHpaTk91Z25hOWk0Tk1DZXZvS1ZVeGxTMVFVYkJtSFhpYllzQVdJYXBNQ3NwUDVBdVk0clhGTFF1MVQyTU5tTERXb1JISEUwY1JzWlFTM1Baenl0N0pjY3VhZGpZUWpacE44MmFTcUFPd0NuWU5VRnF6NUFDWlJLb2RJdU9PbEFvRndYZE9xWXM4VCs2Y0kwcUE3QUNSUmI1bzJnSEJObi8yVDJEMHNrS0U2Z0tFWENIZnN4SnlCU01KUUM2SUdsNDRZT0NiMStGOTNsSG5iTkxxalhBZTJOSWJrQ2N3OGdRYitmWXFIYmhUYUVjWmE1cm5HYnU5alJiaDJzWmpTV1BOREc5YmFab2w1akNnaUZqUXB0b3dWb3RORndBUjR1V1dmWUEwTVJJMkdGWG4vUnZQM2N3My9sektUMzlFRzh6ZTN3T0VWeEZIdVRYenphN1p6UWlYejNCSHJWeDdIR0NMcmROYWdqZnhvWG52OWw4TUp6ZVBoTmhLVU9nU21EeVhydVJzaHYyWXNMdlVUSlpwbkFXMGc3Y0lKUURLQUsyT3AxSEVQQnJoMjJIa0dLVG9IRXZkRWRrSEwxRmpBTXBXQk9BT2tXYmUva2IyamZyY0FLa0s0akI5akc3VzYwb0ZKOGRlTVVWRHVseFNURkZHVjRnNVl0TW5ZV1NvUnRKek9QWVBRSXZZN2dudk1kdk5CNUJwM09LUXllNlNNYktwZ0VNQmhnc2QvRFBXdm5rTExDaTFjdkl0TjZ5dVMvcDZqTCthWForMjlvU3FSR1RRbzZlUC9JTmRsYVJ0UTJ6SjQ5ZXZKMzMzL21rVTlsMjRNRDV5dUhEaHlQMkpaODV3S044NTg5WVRxcmw5WHdQODVZVmlBQ0lvVU1CbWJwQ0U2a2Z4cVhuL3NOTEM0L2dmdnVBeGJvaUwzWmtnR004QzFITjFISVlKSUR6UFR0Yk9HMmdwQ0tiakJKN0JjeWNUSG1ET1ppL3BwVXozMHVCYWtVd2oxQUZCUXJWN0RzZ1ZsQnlPWXRCdVJ5SWV1cENMMGlWTE4vSnNWUUhweFdXS1ZGMkhjUU1ZTVVnVTFMaUZ1UUZjWUJzZzgyc0tHaEdzS1FBU2NUUEhqdklsN2lUUUE5N0wxQUdBMEVURjBvQWxaNmdFcE9nZ2g0OGVwRjdBeHo1SGxlaHcyS3dSSFJsWVpPTDZReFg0N2ExaGtBQk54aWNiZ3hGTktrSXcrZHZPL3ZaZHVENFkzY0s3Zk00N2g1SGRTTzVhY28wLy80aE9rdVhPMU12akZuV2JGVmNJMWNaVmpnVXpndVg0N25Qak1HNkdYY2MyK09ibUxzNkRTN3dTeXRLOG40dkNSQnNhYWl0bWlwOURqK2RQSXROcVpvQWFyUXd6VVBWYXJ2bDh4Z1hVekV4OXJpZXRDRTdGQWNsRzEvSWJFVmZhTFVWdnRoSy85UUNrQUM0cDVyTUdFMzFPY0FRd1JGQ1FoZDY0VkUzR2lMOHo1SzJacUYwMkVRS1p0UVJJSmJqS3ZNWmFXOVJlMUNrTUZRRDV5bklMVUlSUWxnY3RnV1djWjk5eWc4MTFuSFVCYlFmWGtWMmJhQlNBN3dIbnBwaXJ2V1RvQkJlTzdLeXhCdGdaTHBpU3RzK3A5dEhIbWlxMXZid3VGR2FrcU55NVM4dCt4b0tHczlsaWhRSUZZNGV2VDRCUkg1NDlDdHpSdW0zZkpRclFVOEdzRG5sSmFQbjhxNnVOYk52bkVNdmNKTVVKaEE4eDVVL3loV3pBZnc5Qi8vSmd3OWozdlBwZWh4SDV6YTA4aXpUb2ZqWWFxQzhTRm9xdlViQ1FwdWJZVlhidDBCNnIvV2lPOEk2SUE0QVVSQktMVk5sS1JBcWdzaEJVZ0NnczF0aERwZzZqaWF1VnZrY3lSMjRBME9PS0FVUWwzWGNPcmFTdXhRZXNDSHE4QUxPcTlVeVJuSzAxMU1tV01RQU1XWm85azdBSGRnSUs1OUI5QTZBYlJHcDVQai9MMGRkTHNUWEtFTXljczlqRGFIQU51RXZwOTJjYytKTTBpWThOU0ZGN0MxbThFb2hWem5kcHdDMHFKeUpETWpnMmtSQUlWL09qS2lpQ2JjeEd6YTZXRnRaZTJuZVR0L0hzczNkdS9jcmh5blhpRDlBOHJORDU1SXVzOWU2V1gvOVhpU0xYYlJoMUVqVEZpZ0ZzL2d5T2g5ZVA3VGpIejdDaDU0RU9pbm1MR1lWbkNqN0xUMUpyNDlwdnJtRVpYZW9uNnExYjNldEYwNWRvNUdWU3I3d3FsTDJGTVFIRU5HZHZRQmxJTFVnZ05aRDh5Snl6TnNMeStCN2RCZXdkUjFYRGMwMlM0Q1YvZ2tWd1FsWmhpb29oWEZLN21VQktMbHRUeFlGTmZYbGlqWDNkQzNoSjFrRURhdWc2RUxTbk9BTXlRbXg3bVRQYVF5eHNWa0I4S013WG9YckJTWUFUYUVVMGVPZzBGNDZxSmdZM3NMR2VjdzJrMWZGdXphZktBSnh3ZGFvdzRLZ2VSMTlpd2p1WFowOVlYVEM2cy8rY1VyRDk1dzRuekxFNGNwN2s4RGVCcWovQitjN0M3L3JjWCswazVxZW1EcFExU0dTVHBBdDNjV3A3cGZnK3VmWDhOTFQxM0czdTZna0IwS1YzdmZUQjFxV3ZGTUFoWEFackpaWmMrWUdheklGVDJsVmdTMUQ4OWdrUXZSbUZQYlYwWWRFS2VXUGVNT1ZOb0JKNzJpbUtsVUNxVTZGbFNPRVJOaVFLWDJPWlMvTVYyTERidm41ZzRVZDZCVTE3YmpjRm95YUs3SHplb25KTVVEVXYwN1Uyby9sbVd3T1FiQ2d2VnNTa0d6UVU0Q1NSUzBFaGp1Z00waXVxSnc3a3lDbzNmdndKd2pKRWRQSWRldXd4dUVWQ1U0ZWVRWUhycnJQcXd1TGlGTlZMa01tTU9JM3I5QlprcEcwL0plQkcwNTlRNTErM2NyTDlidDk5QmJYZmwvUC9IRTB5L2RYRTM4TmxYaFc4Z0NiNHU0YS9YUGIrU2pmekFjREphTk1XNnEwQTU2VFBJSmRuZitHQS9kL3poTzNiK0taSEVFNnUyQ2VRS2xGWkpzRFNRR2tteEJ5RW92Z1dDbHBrd0NsU2ZRYktDVmFZK0ZpVnA3NGFvTUdwZGtBVkIwRUJTMW1hQ2R4aGhYOVdhRmN2eGh5WVZrSFJkYUpTRHFBc3Jld01BaUNBbUVMUjF0KzhrNkVFcWRHbzFBcVFRaWRoN0dBaXNwYWg5TWpwcDIzUVUyTkV1Z2pRRWh0ZFIxb0JmbmU4QW9tSlFMRHlKalRFVzNySnpYcDJJR2lkZzNudXBDb3BkY2JVbHJnd3N2WGNENnMxY3hmSzZQeWJEbkdrb050T3hDNndtdXJtL2k4ODlmd09XdGk4ajBFSlBKQ0JvWjhqd0RqQ0RYbm0zTFp3Q25yaS9BNVZZamRsNmE3VlJ4UW95RUdXdDNuYjY4ZVBURSs3N2p5S05Qem5IQXYvTEEyUWM4UGRYcmZQSDJJdjN3eG1qM2ZXVkYwdDdzT3R2R2VQd1pMTjMxQXM0L3VJRzFSVWFIRjJFb3dTU3hlZ0NkdkdjVll6d0xSZ1lLR215TTB6ZmpGamJNei9wTFdEdXpUQjZWYy9kbHJhWU1DOG5YY09DTGhQYkl0UG1INjFwV0tWZ3BHUFJ0M3NFS1FBZENDZGpsREpadVhuUmhoR3VSUVFKdzE5MzBObkcySHNzR1ZSWTA3Smd6c2ZVYnR0N001amEybDgzZTBEYVBVa29WalpQR1pFWFBIQUx4ZEY5cEQyc21ZZ0p3K1J1U3VGQUFJaklGNmVCekp4RWcxemt1dkhBQkY3NHd4UERwSE1aMDdBOVJHbUltMEJxNHNybU56ejMzT0M2dVg4STRIMExyQ2ZKOFlsZTFHN0hOQTFNYXlNS20yNUlJOE9TTzY5WW1zdlV0MTc3VFcxckFxZnZ1L3RILzF5Lzg4Ly9tdC83YWo4dU5ndWEyQTJjZkFDV2srSUhSaWY3ZnViNjcrZlhHbUk1U0RLMDE3Q0tLRE5ub2o3Q3cvQVFldU0vZ3lORUUzQlBrL1YwSUNOM0pDb3diOUxLeXNUbUlKaUFhV3liRkZlOFFuRmFlUnJhRFl0SmF4Q3h6bmVBTjh3VTJCeWhkTE1OUzdzVHZnS2hyeFRDU3hJcGp1SW8vWEw5WStYVUtncTcxR2c0NFFOZUNnNVNsbmwzSGdhKzlzL3MzVHpuN3pnRkxNSkFMN2RJU0VNek9BeUx3T0tiU1RWQlM4SjZCcENJSEtnVHFuTWNwbDBFNU9UeElJYVJ2dmFKeElESjQ2cWxMdVBxNUhlUXY1Y2kxbGJzeVpIK2JTWjVqWStzNmZ1K3B6K0RTeG1VWW5XR1NqeUZHUTJzN0hhcEZUd1ZNblQyajRuQ3NBUWRBa2lRNGNmZGRUM1dPOUwvMkw2Mis3Nm1iOFRhM0pjYzVnT1dpelJQbXhZMi9kbG9XL21hSGswMnRUVEY3QXJXQTVkNDdnSjB2eHhlZVBJdVhyaXJzNVVOUXBwRm9EYWlCVmVpRWRzVXUzODdCd1g1eE4zNGJ0R0FRU1NBVjFOeUlab2ZRSk1oWkFLYlNDNVZGTmpjam83cmdaQUdjTGtLcEpZQ1hBT21EZUJITUsyQzFBc1VyQUs4QXZBakJBaFF2Z1hrSnpBdnUwUUdvNjVpMUxveWtBRkl3OThEY2g2QURvT01hTmZzQTk0clBrZnNhVmgyb3BBdE9MQ2dMVVU1eEZEZWx4WU5aT1hMQ2VUSDRBNGlzOTNQZENQWmovMGpCeWdHZE91V0I0UEl0bjNlOTRmNjdzSHArQVowVEtSZ2FKQVFGZXlCUUFxd3VyK0JOOTV6SDZ1S0tyVzBoN09PVHl2dlN5Z0cwZk00WG1zdThoNUV1TGtoM3FmOHovL2puZi9IcHc3aFpYeEdQTTBmb3RvU2w3bmRlbytIM2oweCszRG9EQm5FS1kzS1kvREltOUFXY1BuY0I5NXk1aW9YbEREb0ZXRHB1Vmo5MXNyQUFLNFlpS2M3cnRoekhpM3BNYTUxaFZSdWVJcXJrQnpwZ3pleGcyQUlJQ3lEdTJ1UmZPaTZoVHl3WVZOZmxIWWxieHA1YXo4TU1rZzdBQ3RyVmV3cGxWSEw2MTBSMjdoK2VqazVBa3Jqa2wxMGZuQXJLZ05YZE04MmQ4TTJ0MXRVZVB5NXJRQzZ2TVU3Q0tod2R0N1d5Y3YwN3VRbzlTNDdkdlJFZS83MW5NZjdDQ0tOZHEzZHFTR0E0QTJuQ1pETEdjNWRmeEI4Ky9WbHM3KzFBNnpGRVQ2eEtVYTB2amJrc0lSU3RXOHl1U1ZhNVVEdUJjbkpiaGdpZE5NR3hjMmVmV0xyNzJOZjlSWHJIMDNNU1dIZXV4NW54Z25leE8vNkZFM3ZxKzlaMDU0OFVFa2xOQW9NeE1wVWo3NXhDYXI0VUc4KzlDUzg4Y3dMcjIzME1NaXR3YUgrakVWaE5rQ2dCdzNjR056V0V3NXpGYjVUMjA1ZVZ4VkVTTkdzeTI0UmVsT3RXWmlUVWRST1hmVEQzb2JodlQzclZCVlFQU0JjQTZzQlFGK0F1UUQwSTl3RmVBS2tlbUczL0dWUFhxanNMM05DWkF0aVNDc3c5TzVkREhmdEFBa0VIZ3NTU0RpcXhOektyNElqbVFGclluK2FxSEUvdzlEY2w1UU5wTVZiTmdWZUMvMWgxb0ZRSFNkS3pYbzI3emhOMndDcUZTcnBRU1FlY0pHQ2xBTlhCNHRJQzdubjRKSEJLd0JpRG5mdGpzVUR2SkIzY2Qrb2MzbmozL1ZqczlndmFYSUt1OHRhOHBrN3kxR3RzQkNTS3NieDZaSkFzOTMvcVl6L3gwODhjV2czd2xmUTRjM2llTXlCODAxNHYrYyszTVhsWTh6aTF3T2lCTkpES0RveThqUFRvSmF5Y3ZJUzE0eHBMQzBNazJMVzFBMG9oMG5XYmhQVU1lbGtxQlV4anpBdzlnYUN1NHlSNUtGa0FxZFFXS3FrUGNlQmcxUWVwRHJJOHNYTTF5czdMQ0RyRmpRaGlwS3dBMlA0emJRQ1FBcW5FZFJnd1JKS2k2MW1JbkdTdTY0d21nbEpwVVFDRmlHM05RU2xXVVhZTmNUSE1OcU56cjlaK1E4WElxcThSK1Uyenh0V0xmT3UrelkyazdJOGpnV2lHTVVPd211REp6ejJQbHgrN0JuT05NQ0ZsTzdDTFhUdkE3dDRPbm5qeFNYem11YzloTXRrREpFY3VYTkZzNDZBUXpjSG9oUS9SaU53b055c29JbEFud1luN3p2MmJsZTd4Yi9qV0kyL05iOGJMdk5JRjBJUDB0MTJDNEo4dGp2VFZYcHA4eTdhaGR3NVozNk5vVENBRFRTbHlPUStzSDhkZ0o0WGV2UXFjemJHOENCQnB4NHg1dmVkeTh0MHEzbFRYcmxlV0N5a1ZrQVdsSUxjRU41NzFQb25yRGJNNUNMd0hvQTZFT3Jhd2FRaUpTa0hLdGRSQXVlOUxJSnlBeVdyRzJUWkh0dm9DYkwyTmNac0lHSmFLOXRyUXRrblJ0ZHNvTHBrdkNTUDcra2Mrd2VleUNBcEN1NXAvMktwayt3bFpxYUlGeVRLQURES2g5cVpBMkhtSnNHR1VVcWhFdzhnUTV4ODhpNjJYUjlqWkdZREhYdS9PQno0R2k3MCtIcnI3UHV3TnR2REV5MTl3blJKbHV5Y1JCeTAyL3VXSHZ5c1hXOWNzdWNaWVByRzJrM0gyWXlGb0RzTU9kYXpnWm0zS1dNSUF3Tk9zNVE4WGhDOHowOUVSNDJoT25Gb1JOb0h3SWt4K044YWJ3R2lRUWFWREpGME5VVUN1Rkd3amk4QXdJVThZbWduQ0NSS2tTQ2l4YXY4dURFT29LcU9jdHE1YnllRm4vSTNxZ3RJRm1LUVB3MTJJNmtFUyt5ZlVBcUFXSU53SDBTS1llN2FKMHlYUDRJNmJ4RXdjbzZhUWN4ZTY2RSt6NGhxV0VFanN6ZVZ2R0lJZFAxQUptSldMNmIzblVZVW1BWVJ0M2lNS0pBcWxYb0VsQVlnVXdJbE54am14YkI0bnhVTmN3ZFVJMjllcU9vN3hjLy9tQkJYdE5hUEtXQVk4cVZBY01NWXFwbEtLUkhYUVcremgydFZObUswY01BbllxNW02ZkU4bEtYcWRIaTV2cm1PVWphR1FGYUJuSkxZQTdGZGJzdk15bmdwM1JGQ1MyRnl3ZDJSRmVxZnUvc1RRME45OXorSzljbGplNW80RHpnenc1QUN1US9EWmpxYUxYYzJuQkVnbnJGZVlsQzNyS1VhSGU4aTJHVHRYdXRCNkFaUW9wS20yYXp6UUFVa1hDaDJrU0tGZ3dEd0VKYnV1ZnFQOGdWemtDTVNxdU9Gc0R0QnhyVEMyUUVtdTdaK1VGVGdIZFJ3MTNIWGF6UGJybGVxNkc4Mk9EQlJNb1FNUE9JVlNkc05BRVE1S1NKMjdtOFVWUHNPYkJLNmRwdkFnbGJvR0ZVazZVVkM0WkFWVzNMcGFKUXhYN2FHdGlxRzMxc1phbXQ2VjRicjRnazBSaklYbFpZeTB3YzZWSGNoRU85bXI4clhEQ0JhN0hSQU1MbTVlaGRaNVVJQldqUzNSak9vb2RPSUt3Mm0zZytYVHg3YlNwZVh2K1d1cjczNzZNRUZ6eDRScWM1b0EyQVh3aVk0aE9wb2xmN0Vudkw2ajhudXloSmJIWkZJdHEraDJqZ0Q1dmRoKy9qSW1PNWR3NUo0cldEeTZqbTVuZ2k0SkVsRlFUSUF5TU13UWNkT1QwTTdqZUJKQXVjMWRMaXdoeDlhUkhSZ1R1STVtcGR6SENzUWRtMzl4RjBROSsrREVyZFpJd0Y1bGs2dzNBYWxpemlZVUVSUUo1WXM4TStHOFRGR3JLamZ4bERsTE9mVlovclVFRlJXVmYvdVA0c1dvYTNOR0p0UXRZd1dwVExyV0VOT3lKYnRnLzUxNFNBbFFxMzU2ejROdndKVm5ybUM0c3dramFhSHlReEN3WWhndzdqMTFEcGUzcnVHWkMwOUJhMVBwTzRPTDBLeTJwTmQwczUzanR0QkxXRHkySXYzRjNnK2V1ZmVlVCtMSzRkK01kNXpIOFY1bml1ZngzdWNGQUMrbGhucExXazBNR1JneVhlRnVWNk1EelYwUWQyQkdLUVliUFV5SW9QcFdlRDNoRVJRUFhTR3dDMjFXM09sbHlvRTE5bDdHaW1Jd2R3b0dDa2dkS0d3ZFJma21TN0xNRnptV2lmejN1RHFJN1MzcnVMYWF4SVZOM3VQNGJtWG5pWXBFM2hNQ3lwMzhydmdwN09qc0VteEIxY0tDRWFwbzlLeXliRjYybDRPOVpPWERGemNOeW9HdjBQTlJ4VXRSNDJNS1hnOEZYdEIza0lNWm5XNEg0NzBodHA2N0FHMFNWNEJWZ2FhMFFVY2xTSlhDbGEyckdFMHlKTXdGSFIwVWFKekhzYlE5ay9XT25hVUZySnc4L2llZG8vci84bzE3and3TzI5dmNhUVhRZzlEVkF3Qy9CZURISVBpblI4YkpINXdhZHY2b2wwM1doUWVTOHhnamxXS1FuTUF3UDQrZFo5Nk1LMy95TURhdXZnRmJveFhzNUFaanlxQTVnMURtbTBtQ1NVZ25CQzVjaEdpVy9sVWc2cmk5YXpaOE0xQ3VBNkRqeUFIbGtsNlhDemp2SU9MREt1VUtpR1hPd1p6WXZNVUxXZ3U3UWlXWDdKbHZzd0c3Ym1vN2t5TVVGaXREYjFTT0ZmaXVZQkJWNmowbFc4aVZXb21nM0t3QXFkZS9xaDZzT2NaT1JmdE5NZDhrZHNlcVJtS1hZcEhnN3Z0T0l1MlhlMXROTVhHTHd0c2ZYVG1PZTA3YzQzSXFBUmUvSVNyTW1sVVFkYUx4aXJGMDZwanBIbG41aHgvNzJDK3QzNnA3ODQ3ME9ITjZId05nRzhBWEFEeXVoUFNTWm1NdzZXaVY5WVU0TmVqQW9BL0dLbVN3Z3IyckhZd25DekRkSGtRSkJCa1NOYkluRlZTaEEwQ0tYUktkdUFFNmhqamhES2JFVnQ3WmRqYmIvckJPTWRJc3J2NUNCVGg4UVpMdDRKcmZjOE1KU0pYaEdvSUpFbHZFNWZLR1pBZGduNVQ3ZVJzL2NlS2FQQ3UxbTRxblFkRnI1bk9qTW9VcUUvb2lSNkxhNndsZVg3UDVGUzBlS0FTUTllVGlBZXVFMUR1SndzWUxGekhjTkphSWNEV2JZaCtQMk9LbVVzQ0Y5YXN3T3JOQzdZV090NzArQ2FuU0V6SmpZWFVacTZkUC9PODlKSDl2NVJNdkRHK0Z0N25qUGM2YzNtY0k0RThBL0U4US9PalJTZmZuVHc5N24rcm5zcTZNRmtVNU10SVlxVDR5T291ZGkvZmoybWZlZ3Izcmp5SWJuMGMrWEVRK1loZ05HR0VySm1HTW0wUTB4YTRYcjQwTXRqY1dGNHFlOXBRcjl0Y2czSllvMVhzS2Z2R0FRTHgrWURHVldZS21iRHZ4Y3JrQmJWdDRrU0Q4Q3NlMmduQ3FCR1M1YzdsQ1BndE5KUWNPVDM0cjJPVHRDQTR3Z3hQR3NidU9Gc3VucU9pRkswOUZRR0ZsY1JVblZ0WUFFU1JLVldGSnFsaVA0b3ZZeThlT2JpOHVMUHpBdDNiZnZuNHI3OGRYRFhEMkFZOEEyQUx3S1FoK1BOWDhQNXdjZGYvWDQyUCtmZGFqZ2NFZUptcUlFUlJHT0lieDRHNXNQWFUzUnV0dncyVHlwUmlaTTVqb0h2SmNBUm9nYlVCYXcyaHRtd3lMRGRkMm5OcXc5eUxLTG4yU1lEUWFaYStid0VCSTI3Uk1jdGN3cVF2UnZXS0RYT1VYcVMrajUwcXhrMm9UOVhZa21OMkNwQUNoRlkzcjBBTk1CMDJWRVp0V0tKVXA0a0pWcjFXUUVrRUxVRWhNRUN1c25UMWQ2TFlWZVpSYjJjNU1VRW1DVHRyRnVlTm5iSkUzTE5hN0RuWW1nbUtGUkNuMGw1YXd0SGJrVng1WXZmZlROOXRTODZvUDFRNUlISWpMZjU0RjhObkVVTmFUSkJWSk1hWmtqUUJTU3BDVHhpaFBzTG0rZ0szUlBVQ3lBc1VwQkNrU2JhRDBHRzdCQ25JaTlFeU9GQUl0REsxU0dMWWtnVjB0YjlWb2lpWkp1THBMT0lZdEVneGxPUTlpZlB0TFVub1FONHRaZ01hTGFSQVhnMWoyNXJJZEJPVDAwMnlFU1NYc3ZDYTFueDhLNUxoQ3pRRS9HbDRSbHlVT0hzcGh6SHVNQU5aRlMwSVovbmt2V0NVUmdqQVA1VDRpQXdWakdCZi84UE8yQzVvN0VQR0RFZmI1TXdCS0xEVitjZU15eHBOaDZSRTVzY3VEQVhRNmZValN3WkZ6Wi9VYkgzN2tyMzdKdGFVWGJ5Vm9YblVlNXdDblNBYmdTUUQvYzZycEI0OW02aGRQWmNsdko4YXNaem9UZ1JXS3pDY0dvOHU3dVBwSGk3andSMi9FK3N2dnhIYjJIdXlZQnpFMmF6QzVRYUsza2VrT3h2a1NSSGZCMmlDVkNZZ0cwR3FBUEJsQWtBR1NPY0xQTHRjbDUwMktNS1RZQWFPaFRRNGpHaVMyTzl1SGhjVTJNdEczU09hM25vT1VsWlpxa2wvOUhvS2EvaUNlTWtsYmExRXFSQkpMNG9KY3NkTzRIYWhlUUNRVTV3QUJTNzBGclBTWGl4MmxSWmdNQmxNQ0k0S2xVMGZsM1BsN2Z1UnYvTGQvNjdkdngvMlg0RlZzTTFwMXZQZlpCdkJiRVBsY0w4Ti9PR1U2ZjI1SStWdDNrL3llQ2N1YUlpWWpnb0Zld1hDRHNMVXp4T0tWQk1mUExXUDU2RFgwT2xmUTA3dVlLQU5tZ1RKakpEbUJKUWVTUGd5NjBKU0FaUUloc2FHY0l4aU1DKzJWS21zeDRrQmhKOGR6eTlvWkYzYUFhd3FVODBvdHpwdHExTGVUU1ZuYkNkUnZta0tQczdjOVU2MkkybFFBTXBYdnI1QUxBdlRTRHZaR295SmdKYWUxSjBFT3AxU0s1ZDRpcnJDeTRhN0wrMGpadnJUKzBWV2N2dWZ1UDNyck85LzE5eC83eU1ma1ZudWJWejF3NWdTUUJuQWR3Q2RZeTJmNndoL3NtOTdYRERrL3Y1dm9jem1oYjJqY0J4RXlUUmh0SkJodEE0dUxwN0IyK2k2c0hCVjAxcjZBRkZ0Z2s5a3VURFpnSTBEaTV2L0plUnpSYmdtdWd1Z2NRbVJuVmp6WmFzcU4yU0FOSTVtbHdOa3JiRm9Qb0pqY29KZ0JHUTdXT3hKYWRXQlJGaHlMeGdPZ0FHSUROSUlnaEtxREpkQ1lMbXFiWmc0dmhockE2aHNlcU5GcUlNYnRaRlVNWTR6VmtRc1VXMzJqRFJGanNkOTM0d1B1UlNtN29rTjFVaHc1YzFLLzVkRkgvK3ZULy9ibDY3ZnJubU84aG15ZkV5WUg4RHdUL1J3YitjSEZYUDNDcVZIbjE4Nk11NTlhbm1SUEpHWXdaQmhvU2JDZDkzRjFhd0V2UDUzaXhTZVdzZkhpdzVqc2ZERnk4MVpNekgyWTVFZVI1d3pSMnlCekJhSU5kS2FoSnpueWZBelJJd0FaU0RSTWJrWEZTVFNLNVZOaXd6bnZlVWh5Qnp4TElERFo1a1k3LzY4ckFvRkZrZEUzTTNKQUtnUVNVRDdJS3JjZkJNSVlhT3YycmhkUTYvL09oYUE3Z3Y2NHFyZXBBaW5NbGRnOXdocFBNWUZia2VpaVF0TEphRlBRMUtsS3diRGRFNGxLcllBNk01WlBITnU3Kzh6ZDMvR2RmL25ELys1MjNtc0pYbU8yai9meDlQV25IWUh3Q0J2ODZTT20vL1lWTFJlM1ZINW1oODA5MU9XK0JyQnJCS090UGV4dUpkaDRZUkZIN3JzTHkzZHBwTjNyU09nU1dLNGgwVU93dUZrWTBwQmNRMk5TSkxBUURjRE8relBaVU02WXpJNDZLQmZSQzF6dHhqWnhRbXM3NE9aQ0hhMjFEVjBZallLbFQvb0xFVDlCcStnNy9LWXlwK0NKU2o1alNncThOVXp6eTdXcXMwcGhpRmVNVDdQZnR1MnEvRFhQRTg0NGlYYlRobTRvemVwSzJ3eUhRWFlnVk52WHlpcXhSQWtTMStITzZCMVpsbnZmK01Ddi9kOSs1RWYvMmUwSzBWNnp3RGxBL3JNQjRGTUFuZ0R3ZGhiNnFyVThmZk1xNDhLbVpQZnVKZnFjWnBNYUJzYUdzYmNsdVA2NUlSYXZkSERzL0Rtc25qaU92cm9HMHR1QUdWbU5BMlhjRGtzRFZ0clJyRGtNSzlkTHBXM2wzRytzRm9JaEtSa3VROVl4S2l2VENyYXpOOFo0a0FYM2NSZ2NGVnZMbXZQRnBaZVJXc0llSnZLcWhhSnUzN2d3TlhmeTNrYW9xQnpaZjZ1R2VleC9FUkhvY2U1RUNjczFpTVZNajgrLzNFR1JPKzFwdTVtYzBWbnM0OVM5ZDMyaXYzYnlQMzNzSXg4enR4TTByMm5nekFtZ0hNQlZBSjkwUmRRdlpvTVBIRFhwM21xZVBMK2Q1dmR1c3o2WGM1NW9NcFRuQ2NaWERQWTJ4bGc5MXNPeE0yZXhkTHlEbGFYTGtHUUl5QUNRSVpTZTJGQkhESmdteUYxREpZblllNVE2QU94K0dJSWpHMGhCT0xQYjRuTkFLYkp2ajNFZXcyaTNsdDdPdkVoYnZ4aUZSY1JTWE1NVUhzQU9lSVU5YWxMZjNnelVtbHBvYW5JdjR2VWJ5bzNoWHNyV2V4NXlhdzJ0UjdOakFiWkxiZ0t6dll0UkxsYkx3TWt0a2xNZE5TNEhNaWFIMFJxamJBekExblkwTWRidXVYdnIvSnNmL1B1UFByMTA3Wlc0cnhpdkU1c2ovN2tFNEJNQWZoekEvMWNKUGJrMlNaODRPKzcrK3pQanpoLzBKMWhITmhGa1kyVERET3NYZHZIVXA2L2o4Zit3aVMvOFFSK1hYejZMbmV4aFROUWJrZEU5MFBvb0pPK0RUUmRrN0tvTGlMYWRaQnlxOG11d2FEdVhJdFVjU0pDRFlHV3V4RXdnWmh6UTNocENPUXdiMjViUEJHRW5VRkxzblNGb2tPMXRVd3FHbkZwbU9McmdldE9NRzBvVG9xQVZoeXVlS2N5akN1bGdwcUxHQTFmdnNUSlVOcWRqR0xDSWEybXlJb2NpQUxJTWd4Y3VZV3hTYUNTdWZtTWNhKzBtYTQyR0dJUGNaSmhNeGtpVWd0YkE4YnZ1Mmp0eTdQUjMvZlcvK2IzLzdwVzZuKzZJMGVuYmJUUHlIMy9IZEFIY0ErRExBTHdYd04wZ3BBUFdhenVwZnNNSWVvM1lsaFdaRlJnR3FSTDAxem80Y3M4aWp0elZ4OEpxZ2s1cXdkSXhsNHFwVFdKQUpXeVh6YnBFWDZzRjErenBWdyttTmk5aU4zTHROdyt3SFYxZ2xSWlNXQVE3dEZhSmxueUJsTWhKNktvbXpTemU0N2pGdHNiTytTdVZWTU0yS3JXbFE0L1R0cSsxN1Y1aXNYSWtvcFNia3JDRVIzNTlGNS83NTcrSks1c2FJZ1J0N0tJdGJmdytISU5jYXhneDJON2J4TzgvOFlmWTJ0dkM4dUxLNU5TNXM5LzlkLzgvUC8wenR6dXZlVjJGYWplWS80eGdtMGRmQlBEdkFYd0pCTzllME9yOGdsSHJvMFNPN2tsK1pzajZoRFo1a3FGTEV3T01yaG5zWE4vQzVjL3ZZT1hVRVJ5NTd3UVdqeS9oU05wQm91d2FDOG1IRUpPRE1RRWh0K0xsaWdydFppRzdoVmtvY1pQQlVxd0RnWlN0K3JaandYM09iVmFnb3UxRktrUGhWQ3pQbmFIME0yVlZZeWdIM0dhbXRxKzE4UnlTdUhhNkhGb210a3RBQTllZXVZSzluYnl5RGM4WUNUZElPY3JhWUdld2gwRTJnVW9TbkxudjNHOS96My81dC85SkNKcm9jZTQ4NytPdEMrQ284MEpmRE9EdEFNN2tDa2ZHcEZjMkZaM0xsS3hCaEJRQmliS1NzOHlFL3ZJUzFvNHBMSjlheHZMcFJmU1dnU1FaUThrUUpHTVFjbEFhdHY2N0Zld3FkVU5rOXVZelFsWlZ4c3ZvUXBWN1BGa0RUa05PZkxaUWRFZW5YalhRa1JCK1hDQlFZaUFKYWozYzhFaTJuNnpaK05tMnlMaStENVZNQ2lZRFF3Tm9HVmxSamd0RFBQdUp4N0Y5YlJkalYzL1NXa09iNnBhMlNaNUI2d2srOThKVGVPSEtTN2puek4yZmVlT2IzL2FoUnpZWFhqeEFHQjZCY3djQWlBSVFuUVB3RmdCZmJCajM1NURGdmRTY0hVRXZUNkRYN01ReUl5RXJ1cEVtakU2WHNIUmlBVWZ2T1lMVjAzMzBWaElrcVNEVjI1YUs5aTN6ekVHZkpNTWtDekR3RzZqZGFJTVhZWWNCMklZN3hoYzJLU202cHNVRHNhMGpRQ2hZcWRqeWIwWEJWV29lcU4xYTk1K2F4T1UrUStoc2pPMlgxdkhDYnp5TnJTdEQ1TUxRRUlnUjVFYmJBVHFqWVNBT1NCbzdlMXQ0N0lrL3drcC82YVgzUFB4Rkg3dy9QLzdaVnhvMEVUZzNEcUF3MUQwTzRHMEEvaU1BOXh0Q1o2SmtlY0w1MmxEcHN5TTlUZzB2VXFJVUlCcUpBa2cwT3YwVVMydUxXRHE1aW1Nbk9raFh1dWdzcFVpN0JKQkdRc1pKWEFFWkswZloybE5mc1NwRTNRVWFCclpXWkFmQVhFNERWUUJIVkRJMXg3blZ3TEhocFVEeUhEc3ZYTUVMLytmbnNYNTlCN2tvYU5nV0dtUHMvazl0ckRUdkpNOWdISmlldnZBTU5uYTJYbjdmK2JkK3kzM3ErRy9YNDhZSW5GYzNpQlNBc3dEK0RJRDNBemptYW5pVUpiSzJTN0syUTZQN2N0R2tPSEhLUmFwUWFHRWw2SFJUTEswdVlQWE1NbzdjdllyRll6MTBGeEtveE9wZ0Y1SzhSRll6d1NYc1JqUnlhQ1RjUVpKYXpXbGpuTmR4bTl0RWxlUkE4WFlIVzZsdGRIWnJnQ05Hb0NjWmRwNjVpb3VmZWdxN0c3c1lhZ01EaFlsYll1Vlh0L3V0ZHVQTUZwQXZiVjNEcFkzTHovL1pjKy84VUZmVTQzY0thQ0p3RGorTTZ3QzRDOEFqQU40RjRJMEFWaXlJaUxMRXJHM0xlRzNZb2Z1eTNMaWlQNEdUVGpING5DcWdreENTWG9MbDQ2dFlQcjJLNVZPTDZCOWJSSklTOU40UUpEblNCUVluNURvUWJQdUpVcGJ1QlVxdEFDRW4rUlMrekhCNHJsREFxQzZjS3JvTlBOVWNyaFFNNnp4azNPQ2YyNnJneERKRUJLSU5CdXNEWFAzTWkxai8vQVZNaGhOb0ErUWkwQUtYMDFoNXFIRTJLVUE1empQc2pBZTRNdHA2OGdQTEQzNXRUOVN6YUdtWWk4QjViWHFoUG9DN0Fkd1A0R0VIcGpPQVhTMlFwVmdic0Y0YklqOHlsbnpOeTFJcWw5U0h3MmxLRWJxTFhmUjZDVlNlSTFFR0t5ZVdzWHpQVVhTTzl0Qlp0VnNSN0VvTGhpcEUxTDJJbjJwNENyOFVTM3dlNUx5US96SWZHaHFZYXJWUHFoTThUQll3Y0wxbkluYlZTVFljWStPSmwzSDVNeGN3Mk5oRHByVmQyeUdXYmhEamEwY2FFNTBWZTNseXJUSEl4NUpCLzZzdldUajNVUnBrTDdiUmVxOGthQ0p3Ym04b3QrcEE5SWdEMG4zT0d5VUMwREF4SjRiSWx3ZVVINStRWGs1VVFuN21KR0hiT1MzR0lDR0JJa0VuVWVpa0NYcExYU3ljWEVCbmRRSGQ1UVVrUzExMGxoZlFXMTFBMHUyNGtDNnZ5UHA2OXF2b0cvTjNwalM3RWF5NHVtK0JBWXFldHdKSENrYmJoYjE2a2lFZjVCaGMyOEgxTDd5TTdSZXVZampKWVp4b3V5a1lNL3V4TVVEdWx1amFkUjZFbmNuQXJIWVcvODRiSm92L0FMWXRTbWFWRkNKd1hoOWtncjhyZXk0UGVnREFGN25IYVFBOUFaUWhwRnRKZGpZWG5RNlZPUXVyZ2t5SlVtQUNGTE1OaTl5ZUhxVU1FaWFrU1lLMGs2SzcyRVB2NkJLNnEzMm9mZ0xWVTBnV1VpUkxQYVRkRktxYkZocHlJaHBHNTFZQlU2V1dUcFpnTXpWVjk2dVdtNmtCazJ1TWRuSU1yZzB3dWI2TDBmVTlERFoyTWR3WllqU1oyQTNZNVF5ZjFZbjJJWnFUZ2NwMURpTUdXWjZMSmx4NEdHdi9tZEw0UDJHYmNlODR3RVRndkhMQXFWc1h3TEpqNSs1MmVkRWJBZHd0a0VVaVZoclMyYUR4Mlp5cFAySjlXb2lJaVlpY3NIamlsenU1ZEVVcEM3VkVXZkhGbEJtY0pPZ3NkTkZaN2lOZFdvRHFKTGFDbjA4Z3BKSDJ1dWowZWtpN1hhVDlMcEtGcmcybEpobEVhNWhjSXg5bk1PTWNrdVhJaHhPTXR3ZlkzZGpEZUpUWmZ6Y0d1YkVPMXJnOHlvaXQvdWZhdUQ0MkMzb3R0dXRiaTRIU3VMYlNXZmpuYTJQMWo1VFFVMENoZTN0SGdpWUM1ODRFbFFLd0FPQ1VBOUo1QUc4R2NDK0FaUkFsR1puK2pzcFBUMGo2UTlLbmxVcElqSkJpMzF4cGtDZzdFQWVCMDhZdVdXZXZIdW9hZnNBa1RzelA1a2VLRmNRTjA1RjFGWUJqdjdTeCsvR00xcTQwNmxSN0lNVzhqZ2lnSGNQbUtlYmM2R0syeUloeDR2THErZ3IzZm5sdFFEL0JCcCtCVldxVk94MDBFVGl2SHMvVUFYRFNlYUpIWEdoWEVBMGlnbTJWbjlFc2ZTYUZiY3JPQ2t1cTdQQWFGUTJaZnNZRndXWUd4NHlWdzIxVzl0ZUlMVXdxMzhRSmNwb0pLRzUrYndhd09ZdnJ2eFBZajMzSHRKMjFzVjVHeUVqU1M2LzIwdTdQM2ozby9XUytON29JWU8vVkFwZ0luRmN2aUFqQUVkajJuNGVjVnpydFBOUVJBRjBRRXQrV3RzNlRzeUNrckJnRHlrNElJeVVRTktGZmtaWUdWZlFEd2hhMVVyNnAxRTRvVU9Gb2JBc1U0L0RscXY4d1lFbWhpRElER2ZmU3p1ZVBtZTZQSlpuOGV6VXhsMkRidktmZWdIY3FhQ0p3WGh0QVNnQXNBbGh6ajFNT1ZQYzVVQjJCWGQ2akF1RW83S2pKR1ovMUQwbXZqVWtmc1Nxamdid3RDQ0tHTkVtL3hFMHBzaTdHdU0zUTl2TUplRWhFWWtRTGVrcW5xOHY1NHVMaXM4bFcvaTlYcm84L0NaSG5US2F2VE10aFhpMmdpY0I1YlFLS0hlR3dCRXVCcndiRXd6M3U4MTVKUFhWZnE2UXFQS0RjMTNRTVNYY3ZOU2VKS2JlM2k1VENoN1k5VG1zeEdnVFR5L254WGs1L0lJU25PNzN1aFhSNTRhcnFkNGE3ejEzMmdndDZsb2Q1TlFBbUF1ZjF4ZHg1Q256QjVVdE5NWUM2d0VBSndJN3pFR1AzYjI2dklyajJITG5MVmJiYzE4NTlZNzFhd0JLQkV5M2FUUnJIU3hBdFdnUk90R2dST05HaVJlQkVpeGFCRXkxYUJFNjBhTkVpY0tKRmk4Q0pGaTBDSjFxMENKeG8wU0p3b2tXTEZvRVRMVm9FVHJSb0VUalJva1hnUklzV2dSTXRXclFJbkdqUkluQ2lSWXZBaVJZdEFpZGF0QWljYU5HaVJlQkVpM2JMN1A4L0FMbUc2UGhUWW95bkFBQUFBRWxGVGtTdVFtQ0MnLFxyXG4gICAgICAgICAgICAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNNEFBQUdtQ0FZQUFBQTB6N3RIQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQTU3bWxVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTTHZ1NzhpSUdsa1BTSlhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRaVB6NEtQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU0poWkc5aVpUcHVjenB0WlhSaEx5SWdlRHA0YlhCMGF6MGlRV1J2WW1VZ1dFMVFJRU52Y21VZ05TNDJMV014TVRFZ056a3VNVFU0TXpJMUxDQXlNREUxTHpBNUx6RXdMVEF4T2pFd09qSXdJQ0FnSUNBZ0lDQWlQZ29nSUNBOGNtUm1PbEpFUmlCNGJXeHVjenB5WkdZOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2TURJdk1qSXRjbVJtTFhONWJuUmhlQzF1Y3lNaVBnb2dJQ0FnSUNBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwaUlnb2dJQ0FnSUNBZ0lDQWdJQ0I0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUNpQWdJQ0FnSUNBZ0lDQWdJSGh0Ykc1ek9tUmpQU0pvZEhSd09pOHZjSFZ5YkM1dmNtY3ZaR012Wld4bGJXVnVkSE12TVM0eEx5SUtJQ0FnSUNBZ0lDQWdJQ0FnZUcxc2JuTTZjR2h2ZEc5emFHOXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNCb2IzUnZjMmh2Y0M4eExqQXZJZ29nSUNBZ0lDQWdJQ0FnSUNCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJS0lDQWdJQ0FnSUNBZ0lDQWdlRzFzYm5NNmMzUkZkblE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVVYyWlc1MEl5SUtJQ0FnSUNBZ0lDQWdJQ0FnZUcxc2JuTTZkR2xtWmowaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTBhV1ptTHpFdU1DOGlDaUFnSUNBZ0lDQWdJQ0FnSUhodGJHNXpPbVY0YVdZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZaWGhwWmk4eExqQXZJajRLSUNBZ0lDQWdJQ0FnUEhodGNEcERjbVZoZEc5eVZHOXZiRDVCWkc5aVpTQlFhRzkwYjNOb2IzQWdRME1nTWpBeE5TQW9WMmx1Wkc5M2N5azhMM2h0Y0RwRGNtVmhkRzl5Vkc5dmJENEtJQ0FnSUNBZ0lDQWdQSGh0Y0RwRGNtVmhkR1ZFWVhSbFBqSXdNVGt0TURrdE1qTlVNRGs2TlRnNk5EUXJNRE02TURBOEwzaHRjRHBEY21WaGRHVkVZWFJsUGdvZ0lDQWdJQ0FnSUNBOGVHMXdPazF2WkdsbWVVUmhkR1UrTWpBeE9TMHdPUzB5TTFReE1EbzBNVG8xTnlzd016b3dNRHd2ZUcxd09rMXZaR2xtZVVSaGRHVStDaUFnSUNBZ0lDQWdJRHg0YlhBNlRXVjBZV1JoZEdGRVlYUmxQakl3TVRrdE1Ea3RNak5VTVRBNk5ERTZOVGNyTURNNk1EQThMM2h0Y0RwTlpYUmhaR0YwWVVSaGRHVStDaUFnSUNBZ0lDQWdJRHhrWXpwbWIzSnRZWFErYVcxaFoyVXZjRzVuUEM5a1l6cG1iM0p0WVhRK0NpQWdJQ0FnSUNBZ0lEeHdhRzkwYjNOb2IzQTZRMjlzYjNKTmIyUmxQak04TDNCb2IzUnZjMmh2Y0RwRGIyeHZjazF2WkdVK0NpQWdJQ0FnSUNBZ0lEeDRiWEJOVFRwSmJuTjBZVzVqWlVsRVBuaHRjQzVwYVdRNk0yVmpNakUwTkRrdFlqVmlOQzFrTVRRekxXRmxZVGN0WXpZME9XUmlOVFJpTURjM1BDOTRiWEJOVFRwSmJuTjBZVzVqWlVsRVBnb2dJQ0FnSUNBZ0lDQThlRzF3VFUwNlJHOWpkVzFsYm5SSlJENWhaRzlpWlRwa2IyTnBaRHB3YUc5MGIzTm9iM0E2T0dGbE4yUTJZbVV0WkdSa05TMHhNV1U1TFdFek1XRXRPRGsyWkRZME56WTVaVGd5UEM5NGJYQk5UVHBFYjJOMWJXVnVkRWxFUGdvZ0lDQWdJQ0FnSUNBOGVHMXdUVTA2VDNKcFoybHVZV3hFYjJOMWJXVnVkRWxFUG5odGNDNWthV1E2WVRoa1lXWXlZVGN0TmpJMk1pMDFPRFF3TFdGaE5UTXRaREU1WTJFMU1EZzVNRFEzUEM5NGJYQk5UVHBQY21sbmFXNWhiRVJ2WTNWdFpXNTBTVVErQ2lBZ0lDQWdJQ0FnSUR4NGJYQk5UVHBJYVhOMGIzSjVQZ29nSUNBZ0lDQWdJQ0FnSUNBOGNtUm1PbE5sY1Q0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhKa1pqcHNhU0J5WkdZNmNHRnljMlZVZVhCbFBTSlNaWE52ZFhKalpTSStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh6ZEVWMmREcGhZM1JwYjI0K1kzSmxZWFJsWkR3dmMzUkZkblE2WVdOMGFXOXVQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4YzNSRmRuUTZhVzV6ZEdGdVkyVkpSRDU0YlhBdWFXbGtPbUU0WkdGbU1tRTNMVFl5TmpJdE5UZzBNQzFoWVRVekxXUXhPV05oTlRBNE9UQTBOend2YzNSRmRuUTZhVzV6ZEdGdVkyVkpSRDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOMFJYWjBPbmRvWlc0K01qQXhPUzB3T1MweU0xUXdPVG8xT0RvME5Dc3dNem93TUR3dmMzUkZkblE2ZDJobGJqNEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE4wUlhaME9uTnZablIzWVhKbFFXZGxiblErUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESURJd01UVWdLRmRwYm1SdmQzTXBQQzl6ZEVWMmREcHpiMlowZDJGeVpVRm5aVzUwUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDNKa1pqcHNhVDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSEprWmpwc2FTQnlaR1k2Y0dGeWMyVlVlWEJsUFNKU1pYTnZkWEpqWlNJK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpkRVYyZERwaFkzUnBiMjQrYzJGMlpXUThMM04wUlhaME9tRmpkR2x2Ymo0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BITjBSWFowT21sdWMzUmhibU5sU1VRK2VHMXdMbWxwWkRvelpXTXlNVFEwT1MxaU5XSTBMV1F4TkRNdFlXVmhOeTFqTmpRNVpHSTFOR0l3TnpjOEwzTjBSWFowT21sdWMzUmhibU5sU1VRK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpkRVYyZERwM2FHVnVQakl3TVRrdE1Ea3RNak5VTVRBNk5ERTZOVGNyTURNNk1EQThMM04wUlhaME9uZG9aVzQrQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRFVjJkRHB6YjJaMGQyRnlaVUZuWlc1MFBrRmtiMkpsSUZCb2IzUnZjMmh2Y0NCRFF5QXlNREUxSUNoWGFXNWtiM2R6S1R3dmMzUkZkblE2YzI5bWRIZGhjbVZCWjJWdWRENEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE4wUlhaME9tTm9ZVzVuWldRK0x6d3ZjM1JGZG5RNlkyaGhibWRsWkQ0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5eVpHWTZiR2srQ2lBZ0lDQWdJQ0FnSUNBZ0lEd3ZjbVJtT2xObGNUNEtJQ0FnSUNBZ0lDQWdQQzk0YlhCTlRUcElhWE4wYjNKNVBnb2dJQ0FnSUNBZ0lDQThkR2xtWmpwUGNtbGxiblJoZEdsdmJqNHhQQzkwYVdabU9rOXlhV1Z1ZEdGMGFXOXVQZ29nSUNBZ0lDQWdJQ0E4ZEdsbVpqcFlVbVZ6YjJ4MWRHbHZiajQzTWpBd01EQXZNVEF3TURBOEwzUnBabVk2V0ZKbGMyOXNkWFJwYjI0K0NpQWdJQ0FnSUNBZ0lEeDBhV1ptT2xsU1pYTnZiSFYwYVc5dVBqY3lNREF3TUM4eE1EQXdNRHd2ZEdsbVpqcFpVbVZ6YjJ4MWRHbHZiajRLSUNBZ0lDQWdJQ0FnUEhScFptWTZVbVZ6YjJ4MWRHbHZibFZ1YVhRK01qd3ZkR2xtWmpwU1pYTnZiSFYwYVc5dVZXNXBkRDRLSUNBZ0lDQWdJQ0FnUEdWNGFXWTZRMjlzYjNKVGNHRmpaVDQyTlRVek5Ud3ZaWGhwWmpwRGIyeHZjbE53WVdObFBnb2dJQ0FnSUNBZ0lDQThaWGhwWmpwUWFYaGxiRmhFYVcxbGJuTnBiMjQrTWpBMlBDOWxlR2xtT2xCcGVHVnNXRVJwYldWdWMybHZiajRLSUNBZ0lDQWdJQ0FnUEdWNGFXWTZVR2w0Wld4WlJHbHRaVzV6YVc5dVBqUXlNand2WlhocFpqcFFhWGhsYkZsRWFXMWxibk5wYjI0K0NpQWdJQ0FnSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGdvZ0lDQThMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW84UDNod1lXTnJaWFFnWlc1a1BTSjNJajgrRjRwOGN3QUFBQ0JqU0ZKTkFBQjZKUUFBZ0lNQUFQbi9BQUNBNkFBQVVnZ0FBUlZZQUFBNmx3QUFGMi9YV2grUUFBQjdhVWxFUVZSNDJ1eTllWlFtMlZVZitMdjNSWHhMYmxWWmUzVjFWNjlxN1JKQ0VnMlNMR1N3R1F4NEdUQmp6c0hZNE5GNG1NSEhHNDFCOWh6RGVEelRIbHNHRzIvWXh4NmJZN3hnTTJQNytJeDN4cFlCb1VZQ3RQWmV2VlhYbWxtNVozNUx4SHQzL25qdlJieUlMNzRsczdLNnMxcnY5c211cXN6OHRvajR4YjMzZCsvOVhSSVJSRHNhOXVRblA0SEhIbitDWHZ2TkovL050Uzg4K2EyYm0xdjQxYWVleFFQSDVwOS85TXp5andENFZ3RHcyT05QeElQMUJodkhRM0EwallqQWlrSHhVRVRnUkp2ZFJBVEdpQU9SL1NNZWxRaWNhRE40SENKQXNRSVRBMENNcVNOd29rMHlZelNNRVlnUmFLTUxMTVVqRTRFVGJaSzNZUVlUQVVSZ1lqZ0NKM3FjQ0p4b0V6Mk8xaVFRUUFSTUJCT1p6d2ljYUxQbE44WUlqQWlZaTFPazQ1R0p3SWsyd1d4b0pxZzVtbml1SW5DaVRmRTVRa1JndHN4YXpIRWljS0xONW5NSXNEUmE0SFVpcXhhQkUyMnF6L0U0RVlrZUp3SW4ybjRJQWxRWnRlaHhJbkNpVFFNTm9XaTFpUmFCRTIybURNZDVHUkdBaWF6M2lSYUJFMjBLY0FhRFM4YmxOaElBS1ZvRVRyUXg5dVFuUHlFN3IxMzZqRUNFQUNoVm5DSVRqMDRFVHJSSkhzZU5FL2hldGRoeUU0RVRiUVpUYm9DTkNEQmlZbzRUZ1JOdFZpTkhDaGdqa1llT3dJazJpMmx0SUNKZzRraEpSK0JFMjFlZUE4dW1CZDNSMFNKd29rMkJEVE1SQkZLMjNrU0x3SWsyaFJ4Z0piN0RKZ2pWSW9JaWNLSk5Kd2Rzb3llWHlJbWNkQVJPdEZuTWlJazFuQWljYVB2M09wVSt0WWlnQ0p4b1U4Z0I4aE5zZ2NlSndJbkFpVFlUZk1RV1B5V2Vxd2ljYURPR2FjeFdQNW9vZGtkSDRFU2J5ZE40Y2tCYmNpRDJxa1hnUkp2QmpERVZMeE5oRTRFVGJaYVR3dXlGMWlNakVJRVRiZWI4SnZpN0lvcjlhaEU0MFdiTmNRUlM1anJHQUhFQ05BSW4yZ3c1VGkzUGlYYTBMSW1INEFoNkhCRVNsT3NNWTZRV1BVNjBHVXl4QWpONUVNVURFb0VUYlVaMm9NQ0xFKzZJNkluQWlUYlRpYUdSRWJaWXpvbkFpVGJKdE4vSVJnUnRoUWtKa1ZXTHdJazJQY2Z4L2laSzRFYmdSSnZaNCtUa2lRRVJpVW8zRVRqUlp2STRTdG5SYVNJb3haQklEa1RnUkp2RlNBQzROWVlBUldJZ0FpZmFMQ1lrNHRaOE1NSFlNZEFJbmdpY2FGTjlEam50YUZQTTQ4UndMUUluMm1TSEl4VDhQUjZQQ0p4b003cWJvbk9BRmNlMm13aWNhTE9ZTDRBeWNSaXFSWXZBaVRZUk9MM2RIVEptSUJBL2l4TXRBaWZhTkJ0dXJ1MUlubStLaUYxbDZCcWw0NUdKd0lrMnhZd1lpTmoybTJnUk9ORm1NNEVBaWJLZ2lhcytJbkNpeldZRlVvZ1FxQTlFaThDSk5oVTZJZ0pGOFJSRjRFVGIvd2xpOXFGYWpOY2ljS0pOOHpkTUJNVnNGVzhReDZjamNLTE5aRjR6T2hBampNQ0p3SWtXTFFJbjJ1R2IrUFVlc1hNZ0FpZmFma0kxS3dzRklpQ3hSZENJb0FpY2FOUE9DM01wMHFHdDE0bXNXZ1JPdEdtaFdybjdzMWpaSHNtQkNKeG9VNHpneHFhWjJYdWNlSzRpY0tKTmRUa29jeHdYcE1VY0p3SW4yblNYWTNPY09NUVdnUk10V2dST3REc2JxVFYwUkVkeUlBSW4ycXpuUlRINUR1a1lzMFhnUkp0aXRuQkRoRnhIVGlBQ0o5ck01eVdjK293RVFRUk90Rm1USE5oTkJZbFNFVGdST05GbVp3ZUNzWUtJbXlObmNldjBrWTNWR0VKVUxORUZvT05SaVI0bjJtUWpnY0M0eFZMT29rNVVCRTYwYVpHYTd4eFFjUUkwQWlmYS9za0JJd0tPU1U0RVRyUVpZelUzVHFDWS9RN1FpSjRJbkdoVGNRTzdJNGVKUURaY2krUkFCRTYwcVpHYUIwMHBnQnZQMVJHeVNFY2ZYYWNqUkFRakJyQ0RiSkVjaUI0bjJneE9oK0k4VGdST3RJUDRISEo2QTFGeklJWnEwV2JGak5WVlkyWlBEa1RYRXoxT3RLbUJXcDd0R21QYzJ2YUltUWljYURPZ1JsajNlMnMrUEhOZE56RlVpNkZhdENtbXZaY1JBYlRSOFNZWFBVNjBXYytMWmRYZ1I2ZmpLR2owT05GbWk5aHNyNXFSaUprSW5HaXptRzIzWVlaaUJiYWk2NUVoaUtGYXRDbFdpSFhFc1lJSW5Hajc4RGppaHRpa0ROV2l4NG5BaVRaem50UDQxMmdST05IRzVqZ2hRUkE5VGdST3RIMDRtcUpmTFhxY0NKeG9zM2tjRVFFVElVMlNDSndJbkdqN1FoQUJ6OTFjdjg5SUROVWljS0xOQUpnU0ozSHpkQVJPdFAyQ2h3Z1NnN1FJbkdpejQ4Ym5PTkVpY0tMTkRwckN6MlMyT3pvaUtBSW4yaFNUQnFERVJDY0NKOW9NNThVTnNVa0lwbWdST05FbW1QRTVEZ0JJM01vV2dSTnRYK0dhSFdiamVKb2ljS0x0L3lRUmtSYUphejRpY0tMTmNGNEk3bjhHNkt4MWx0OGREMHNFVHJRcDVsVThCY0F3MThoMUh1bm9DSnhvMDNCVC80WTJKZ0luQWlmYVRPeEFNQUZLb0VpdFJlQkVtMkpHcERyN1NSd2RUZ1JPdEZuUjR6bnBlREFpY0tMTmVsNjgvbTBjSzRqQWlYWkFwb0JaeFphYkNKeG9NMkNsL0FjUlZKd3ZpTUNKTmp0NnRMR09KazNTZUVBaWNLTE5hb3JkZ2luRk1WU0x3SWsydTlzaEs3d2VDWUlJbkdpem1RRFEya1ROZ1FpY2FETjZHZUswTlM4aXhINWxlNVNIaXNDSk50M1pVS3U5WEpJRUZIT2NDSnhvcy9nYzMzS1Q2OXczRGtTUEU0RVRiYXJMY2Y3Rk9OSDF1SGs2QWlmYVRHbE95UkFRQ0JJWmdnaWNhTk1kVHZnUHQrWWo4dEVST05HbU9ad3laQk1vSnVFbzJCR0JFMjAyTThaQUd3TkYxTy9zYlQ0ZmowZ0VUclNaOGh6cmVCTEZTQVo3dS9HSVJPQkVtekZVQXdCdDIyMGlPeENCRTIwLzVFQVRtS0pGNEVTTEZvRVQ3WERQQ3hORE1jZFFMUUluMnF6RWdQMnlCZEFJbktObFNUd0VSelRKRVlIQXQ5dkVIQ2NDSjlxTXdBR00yRHBPMUZTTG9WcTBHWEZUZ2tlZ2RhU2pJM0NpelpUaUZIbU8reStHYWpGVWl6YUR4N0drQUdKWGRQUTQwZmJyY1d4OEpsRUJOd0luMm94bWlNam1PRVl3eVBPWTQwVGdSSnYxdkJEWlVDMDZuQWljYURPR2FnU0NuY0dKamlZQ0o5cnM3SUFEakVna0NDSndvczJNRzJQc05yWXMxekFSTnhFNDBXWUwxV3k4Um9YMGJaSWtVWE1nQWlmYUxHYU1DYW5veUJGRTRFU2JnUjJ3SjRpVnozRml3SGFFTEhZT0hGbmdFSmdZL2VFd0hvd0luR2d6c3dNaTBFWkRJRkNLSVpBWUhjUlFMZG9zSHNjWUFST0RiYk5uSkFjaWNLSk5EZE9VYXR0d3pTWTcwZU5FNEVTYllwMlRaODlBdFpiSWJXTno0d1dSSElnNVRyUnBMc2VQRkJneGFDZmNsN2pMTUhxY2FMT1FBMDUzUUFUM0xNM2ZFSW5BaVI0bjJuVGdCTDFxSmphclJZOFRiYlpnelpNRU9qcWFDSnhvKzNBNFBzY3hCaFRiYlNKd291MHZXSXRSV2dST3RBTmF6SEVpY0tMTjZtOEUwRVpqa0dVeHo0bkFpYllmY3NBbk8wU3grQm1CRTIxNmFHYkhQMkdNUU96NFp5UUhJbkNpelJDb01RQWtTdG5PNkpqaVJPQkVtK0drc0RLV0ZEQzJPenJ1eDRuQWlUWVRNOERFN01RNjhxSkRPdHJSc2RoeWN4UnpIQkh4S3A2NTFuNzdkRVJQOURqUkpvZHFETGdHVDZiaUZNVlFMUUluMnBSUXJlQ2ZqUmlBSUFCaU1TY0NKOW9VSXkrNlRzU0FsWStPb1ZvRVRyVEpPWTRSSXR1dHBwaTh4NGtXeVlGb2t5TTFrTTF2b3BPSkhpZmFQcjJPRkVvM2tSeUl3SWsyZTVKVG9JVWpIUjJCRTIxRzRNRFdjYlRSc2VVbUFpZmFiTjZtRE12WVNlSEdVQzBDSjlvTTVFRER4dHdZcWtYZ1JKc0pRRlVuRXoxT0JFNjBHZDFPZERRUk9OSDI1MjJzK1kwRjBTSndvczFDRU1EMnFTWE1hQ21WeHlOeXRDeDJEaHhGMERoaWdJbXgyRzMzSHp5NXRCcVBTdlE0MFNiWVk0OC9RWFBuTDc0UElrUmthemxSckNNQ0o5b3NZVUIzN243aUVmbmJPRllRZ1JOdElqRWdZcmNWd1Bhc1JZdkFpVFlMY0p5blVSUlBUd1JPdE5uSkFXYjRlWnhXVXZBM3NhQVRnUk50SW5EczZzSTRqeE9CRTIxZko0VUlmbk1oRWRIMklPdkVveEtCRTIyS0dTczJBQ2JDM25EWXZyYTV1eHlQU2dST3RCbEN0WUlvUUxFako5SnJFVGpSSmdJbitIdXFrdGlyRm9FVGJSYlRkbjBoaU1ucURramNXQkNCRTIyMlVJMXNyMXFpVkdUWEluQ2l6V3FXSHlBb0ZVOVJCRTYwcWZiYXAvOFRpVWd4T1UwVTIyNGljS0tOdFNjLytRa0FRRy8xSnNIMXFqRVJVcFg0MXB1SW5pTmtjUjduQ05samp6L0IxNjlkL2RqMnMxODg0eVdoNWpwdFVNNExLbTJ4em9ZVmtMbkh4QU1YUGM1WE5XaG9ZMzM5TDBwLzcvL2UzVngvYTY4L3dERFBzYnk0QU5XZHUvaThXdnI3dnpicy9zbGZ6N3JuNDlHS3dJa1cyR0I5NWY2YnYvSHBZM3MzcmhaRlVDSkNBc0wxRjc3eXJpdlBmdUV2cjF5Ly9FKzdKOCswNHRHS29WbzBaN3RYWGprMTJMaGxPNk5kcUVaazZ6b215OURiMlFZWjg1YXQxWnZuVXNLcjhZaEZqeE1Od0hCN1k3NGlkK3Yrcmx3aEZBUWd6OW9NeEhBdEFpZWFONk5OY1Q0c1VNaGpCK1NhUHBtWUFLaDR0Q0p3b3BWb3NkMmNJcloyNDFDamplMldWc1JJV0FGQWxJdUt3SWxXbkl3azBVM0ZHc1VFUlFSVzVPTTNIWTlXQkU0MEQ1Qk9kOURVbGNiRUVMaDlvTGFuSUJaREkzQ2lGWkZha3ViakVPRW5RbTJrRnRuUUNKeG9RYWlXNXNUc3ZJejFQWGFsb1FHVEFpTUJESWlBV01lSndJbm1IVTdhN21pcmNFTmxIUWRsa3ljUllXK1lkYTRPOVlWNHVDSndvZ0hvOS9zUFVKcitkaGl4Z29RZVRVRkNJeUxvWlhsbmEyanVpVWNzQWljYWdNRmdRQ1liRXNSVVBBNm9CSTlBSUdJZ29Dd2VzUWljYU40YW1BRXZoVXNvcFhGTnBLTWpjS0lGSUhITVdlbHQ3RTQyTWJZZ21tdmpDSU9vdng2QkU2MWtCN2g2T29pc1lJZUJRTFE0d01RU1RnUk90Q3BRNnYvMjg5TUNhREVBQ0VZQUpoVmRUZ1JPdE5ERmVBRkNEa1FIQkFSRENvWVVOQ1hReE5IdFJPQkVxeklCWWtYWG5mQTZ3WXV3K3g4TE1pUERlTEFpY0tMVkV4djREbW5qYWpyaUlqWUJsSklCSmR2eFFMMnhGbnVlWGtjTFJUYThQZmI0RXc0cDVtU2VaMnlNZ1RFRzJoaG9iWkJyQ3g1aVFxSVNVRHZCc1RQbnp6L3duZC8xU0tlZGJnQzRGVHgvWXdnWEJUM3V3UDFOb21iWEhRZEhjQUh6MnJOZnBGVkpIMUJKY3Yrd3Q2ZDBscjlmZFA0K0p2cUd6WmVmdjIvamxSZGd4RUM3RGdKdE5Jd1dhREhJY2czcXpPSE1vKytVWXlkT0NLbDBzejhjL0llME96OXN0ZHN2Nys3c2ZvcVZNaUQ2L0VjKzhwRk5Id0EyQVNxQ0tRTG55SUhFZVJGYWUvYUx0Skx6ZzB6MGtPZ3NOU0ovYXJpejNkYkR3Y1c4M3orWDkvZVE5M1pwc0xjSFBleEQ5M3ZRZVE0alV0UnlURkRiTVVZZ0JJQVZWTm9DSlNra2FTSHBkSkhPellzbUJyZmFrclRhbjFHdDlqQnRkM1EySFA1TWx1Y3YvdHBuUC92NUgvL3hINWR4WGltQ0tRTG5EUXU1WG4zaHVWTURMZStGenQ0dnhueUgzdDF1WjczZCs0Wjd1MmVITzF2SWRyY3A2L2Roc2lHTUxnRWluaGlBbDc2MWE5cUJzc0ZUeE5qZmQ5L1BYVGdIbENMdEJnd2hCcVVwMmd0TDRPNENWS2NyU2F0OWhWdnB5NnpTejZzaytWZXBVaSsvOE91Lyt0TFh0RE1kQVJTQjg3cDZsUk9Qdmx0MVQ1NGh1ZWVoOStVN214ZTA0SC9NK252dnpuYTI3K210cjlKd2V4TjYwSWZPaGpCR0F4SnVreTRCSTQ1RkV3OGlCeHpQb0JVajFHNUxtL2M4Um96ZFN1MUNPaU5pWDhlQlR4c2I3ckZLd0drS2FuWFFXbHlTMXNJUzBuYm5DcWV0bHhUelg5UXEzUnRrMmFlKys3dS8yMFJ2RklGelI4RFNQWG1tcFUrY3Y2K3p1UFJiakRFZkJQQ3hRYS8zdG14M2k3SzlYY29HQThCb2lGUmJaOFFpcExqUXZmbldHZCtMVm9Sb1JKQmFsN1FZNTNFZ1JRdU9CTThwa0FKRTRuSWsvMW9DZ2RIR3NuTEU0SFlIU1djTzNKMlRkSDVKa2s3M3lhVFYvcFJpK3BRSUxuM3d2bE9Ycm56NkYwMEVVQVRPYlNYMEwzM3BOejgwV0xuNnRxelgrNFA5cmMyM1pvUGVxWHpRSjZOMUVXSjVLOERpS2VRZ3ZDcVUxQU52NHgvdXZaQUpRamNMaVBKNVJVenBzVXpWZTVuQ0Uwa2xMOUxHUHNZWVhSRnZGOWhpSzFoQnRUdFFjL09pT25OSU90MXJyVFQ5NTRtWXZ5YzNYM3ZtdmxSbkVVQVJPTE1BaHJvbno2U3RpNC9lMCtyTS9aYmUzdTRmNm0vZSt2cmUrbHBiZE80RTBVZDNwSVhIc1E0ZVk4cnRBOVo3U0xpaXNNaGxDa0lnQ052Qzc4RjdIQWNZQk9HY2Y0d0p2VkVCblBLNWlpK1VZQ3U4a2dCUUtaSk9SK2JuRjY0bDg0c3ZkanJ0djNZeTIvblhjM3NidlJqR2ZaVURaMUxlZ21PblBwRDM5Mzdmc0xmM1BYdnJ0ODVsL1o1Vk1zT0ljNmtBcFNsZnFYdWVKdUFVWklCVTg1N1E2L2h3em5kUEYrQnk0UEhnOEwrbmpTbkFxclZ0REMzb2JWMDJpbXJ2b2FRS0xtMXMvc1Nza0xUYWc4VVRKNSthbjV2N20ycCs4Y2xuUC9Ydm4vcm05N3p0cTU1VStLb0J6cVJ3clBlQi95WjU2ejFuZjhmMmpkZStmL2ZtMVcvcnJkL3FtRnpieTE2QTZrSzBxc2hNNkJWQ0ZxeHVSa3dsdnduRHRmQ3hKWXMyR3JJVnY5dmdlWW84cC9oOTkzMUhHdmlIK3RETmgzNjVEK1g4K3hPQkZ2OVlVNFI5aHBRc25UaHhZMm41eEMrMGo1LzY5OGZ5M2Y5d2JQUDY4S3NWUUYrMXdMbndvVzltdnZEd0kyejAxdzEzdHYvMHhpdlB2MjM3Mm1za1dvZXBTSkM2Ti9xYUlCU2o0bUl2SmphbFNnUlV3N2xSOElUQUdRZWV3bnNGclRoR21zSGpmemQ4VHQrVjRMMlBjVFIzd2RTSi9SMy92clEyd1hzUkNMRjBsbzRQbGs2ZCtkejgzTnhQSkJzMy8rdDMvK24vUGYvTVgvcXhyNm9pNjVzZU9IWEFQUGI0RTN6MTFWZCttNEw1by8yTjlZOXVYM2w1Y2VmYVplaHNHTWpOTm9WakkvbDlBWjQ2aFJ5Q3FBS0NJSHlyRUFOU0FqQmsyc0x3QzdXY1Iyb0FDbk9ZRUlBZVRCNEU1R2p0b2dZVWdDZlh1cG9MT2FCNWdrTzdUZ2FBWUFCMDVoZGwvc1RwbTUybFkvOVVwYTBuZnVCLy9pTTN2MW9BOUtZRlRsTm85dkQzL09DWlBNdi9yNzNWNjkrNGZlWGxoYjNWbTVDaTl0RVVscUV5LzEvL2VYamhoOEJwOGt0U0NjR3F3QWs5VHoxVXExTFNvejhMMzBoSVYrdkFhL2lRcmlpcUJneWIxamFVMCs0eFJreEpkd2VBTjlxQ1N6dlA2WXV4UkFUVmJxTzdmR3IzNUtuVGY3NTMrY1dmZXQrNVk0TTNPNUh3cGdOT0UyRDRiUi9vM1BQSVczOXdzTG4ybzV1dlhqbzMyRndmWWNHOHAwQ1E1TmVCNHk4OGFpUUxwSkZBTU1Gek40TEgyQVpPTWRLYzQ5UkE1MS9EaU5qYWp5Y01pRXE2dWxZa0xUelBDR3RubTBpTnNaNmtMSndhNTJsS3FsenJFakRhQWEra3hLMnBkbHRPMzN2eEswbTc4K01mZTh2RmY3WDIzSmQwQk01ZENCajFuZyszNzNub2tUODgzRnovc1kyWG43K252M0dyd2t5Tm81T2JmdVl2L0JCY3pVeWJGRG1QOTBLbWdhcjJmOWZHVklxakFnR0JScm9MS28vMVQxeUVkMVhTd0YvVXBoSWVvZ2pQRUhnZ2JUU01FZVM1TG9CcnhCUkFLVHloWStyRWVSM2p2SkFIanZnY2poaHp4MC9JcVRObmZ2YjRYUGZQUGYrNVQ3L2F4TUxkN1FCNlV3TG43Yi92NDBtZld2LzljSHZqejZ5OStNeDl2WnZYWVBMWkZKVkNjSXdEMUFqbExLTWVKL1JLOWJ6RXYwYUZhV3NvaW9iNVRzallVUTI0SG55aDV6RW1ZTmNLa0ZZQmFQT2F2UGhkNzNVS3IrSkI2UmsyN2RwOFJKQWJEVk9JaDVUaG56ODJyQlM2aThkNzk1NDk5VFAzbU40bkY5dkpEVFNvODl5dEFMcXJnZFBrWlI3NjNqLzZBY21IZjNMejFVdmZzL25TYzVUMWRtL3JOZXBlUmtUQXpCVXZVTStEbXJ6UFNGSS9nV2t6dFo2MmNXUkJDTXl3cHcxU2RoQ0VJRFJoSWRRUkNzYmxOY2FVLzliR0ZNRHdqeWwvUnlyQXN2OE84cWFnSjgrSVFaSWsrWmtUeTVmZmVmN0VKMmpRK3c4TG5mWUdHaFJIN2pZQXZXbUE4OWpqVC9EcXpacy9NTnhjKzB1clQzOStlZmZHbFpFYzVTQ2dDYjFNK0wxcHp4c1dGSVBJcXBMekZLMHh0U0twcDRBTFlFQXEza2JYU0FIdkphb2dORUh2R29wOEozeGZKaGhkeUxVdVFqOXR0TTE5QXM4VkFzY1NEMUtFYTdhNFdnV1dmUytlY0NITXRWdTlDMmRQLzlMNTQ0di82eW5XbndWd1Y3ZnlKRzhHVC9QZ0gvZ1REOSs2Y2VPUDc5NjQ4a09yWC80Y0RYZTNSMEtyV2ZPWlNZK2I5djNtMzhYWVVDOVVzUkVFWVk0SEtmeUlBY0RoWGxCL3kvWUVCZ1FrUGt3ckYxSXhXMVVjR0FHRFlieEtLTGxsVmVHMk42YVMvSUQ5dHhpYnB4SFp4NE1Oakhidlc5enJ1bHpPU282Syt6NFZIazJMQVFUWUd3eTZ6Nzk2NVZ2V05oZmZlZUhNcWI5L05zSGZXbXduMXdIY2xZbzlkNVhIYWFqSjBPYjYyaU5adi8vdjFsOTY5c0cxWjc5RTlWeW1FTG80QUhEMjQ1R2F2RTBZc29VZXgzZENUMnZQQ2VudWVuMm00bDNjTDQvck1LaU1Ic2hvRGNsM0YvaU9hbCs3c1RNL09pQWE0R285QVlsZ0xKaE1qVEF3b2lzaHA5WUNwZXc2eGpSSjhsTW5UNzc0Nk5rVEg5OVp2Zm5rZzJkUERlODJ6M05YQUtjcGwzblA5Lyt4MXA2bVR3NjMxdjdBNmpOZlBMWjc0MG9qKzFXNVF6ZGM5SFVLZXR6eEdHWFRwSkZscTlkNDZzQ3A1Q2tOTEp0bjFYd1Z2ekxVVnFPWVI4VFo2NzF0am5JT3FlUHc4UWdlb3gxSXdsd25ON3JvZTBPUjIxUkROdTFJZ3lMUEtVSTdDMFFMM05IanlRek16ODN2WHJ4NDhXZU81M3MvY2Q5U2QrZHVBczlkcVhMejZQZi84TmZ0RHJJcm15ODkrMGV1ZnZhL0h0dTkvdHBJN1dXMHdqSUtCTytOYUVyT1VnRmg4QnBOSVp1UDZkM3UyMHJJWnIrb3VORHJ6K01sb1FSVk9ydjhQYnVkTFh4VkNoaTVrYzlGWG1DcStsbVl5dTlLRUNZcVZtQ200bjF5N2ZFeUp2d2tKakM1alhIRjUzYlBVM3Q5UzJ0cjVMbkI5czd1L0RQUFBmZkR6Ky9xejIxcE9vMWFiOU9rL3NMb2NmYkxtbjNQRDM0bzI5djlmOWRlZU9yNDNvMHJNTHJLY05JRXNEVDlEdFdwM2dZUE1pMUhxdGRaSnJGc1RSUjEvVG1ObUFKQWxjRTNZM09VZWpkMHlKNmg1bzM4QUZ6b1hYdzN0Z2xHRHdxUFZ2U3lXUStTRndYUnNyZk5GMjV6MzJrQXVHNEZLYnlPTDZKcU1ZWEg4UXllOTZRRUMzS2xHQ2RQbnJ4OCt1SkRmL0s5dlAwTGR3TnBrTnd0Z0hud3QvK2VWSlpPL3FudHE1ZC9kUDJGcHhhejNlM0tyWS9xaWZjc1NYOXd0YkZUMGR3UFFWQVAxeVlSQlBhbHlxQng1RDBFWUdQaUFJUndERndwVk1oTzNkTjJRSWZlU1VZTHN1UWc2TzRTaFVDb2c2WWxDN2hDalZPeFp0UytGcGpkY3dnZzlyMFpHQ2d3WUZ6NFI5NXpNNGdOeUZCRDNoZlM3TzczSVpCY3NMS3lldC9XWHUrZjVSY3Zmdno5Qy9oWkhQR05ESGNGcTNiMmZkL1F6dG9MLzNEcmhhZC83L2FWbDhqa2VXUFBjbE9iekVnb05lWnhIbXpGenh0eXBFbkYwUEdBa3hId3VLM3NSVmhYQUwyQmJTTWkxTWZtaWd0YjdNK0t0WWVvTnBQNkY2R0M4U0tBeTU0M0pzKzBBU1FFWm9ZdXVzTmR5Q2MrMkJJd2t3VktFUWFXREZzQmNoQklSc1BVcHRNaFFaMUxhd096dlUwdnZuanA3N1lmZm1qeGJFZjl6R2xsQnZXYjZWSHhQRWNxVkd2eU5FdjNQdGhaZU1mNy84N0dxNWUrYisvbVZXQk15MHlZTzhnVUZxeXBKMjFjYzJZVGNQWmJHeHJYWlREQ25JMGhLWHhGdis2ZGZKamxmNzlvekt6MXBZVU1tMC84Z1dwZHlUZDVhcTJMQzlxWWtseklkVG1PVUR6R3RlVmtUckhIRHRWNUxUaExObmlDd0RhVEJyb0pOWUNIc3I5cHV5M25IbnprTno3ODlvYy9rbDU3c1g4VXc3YWo3SEZvNFo2THh6djN2K1duYmozL2xkL2ZYMSt0aEdTVGNoZWFRQWdja1k5V1FOUGZqYW44eTVqM0xZRThic0R1RUJkUDZZa09ZWHQvSWFzWlpTL3E0TGJmbk1mWkw2V1VCUmI3T1J3RkdBTm0zeUZRMW5yQzl4NjJBWkVqREVnWVJMcnlmdTFIcWVkdlVwQUppVW93SFBUcDZxVm4zLzlMUm43cHhIejd3MS9Uem82Y1Z2YVI4VGcxYjhOblAvd3RYNmRCLzJMajVlZlA1Vk1LbWswNWpreTRYRU82OW8zd09OWFFwWmt3cUpNRlRYVWlUd3FFZ2gzMU9sQ2x3VFNvK0tNeUVWb1YrNmdyNWZnbXo5d1k1RjR3RVlEVzJoRUd6cXNZQTYxTEwyVzA3VWpRWXFvZVI2UTZYV3FrNG5XVVloaGowR3AzY1ByK2gzNzkwZVBkMy9KQXFudEh5ZlB3RVFRTm5mdkl0MzV0cnMyL1hMLzB6TG5oemxZRkJOTkFjeEFiWWNsd2UrdWI2cldlWnFJZ2ZQZUVJSzBacGNDRC81cUlod283RjN3ekpFbTg3RlR4UE00OUtXWkxjUWZFQXpPQldWazZtbEFoVUlpcjlEbVAwT21qTnluUG5qVWZLOGNNRm1QZUJsbVcyd0pzTnNUS0s1ZmUvK3pxMW1kV2NscUtIbWRDWG5QNjZ6NTJjZGpiKzZ2Yk42LzlIajNvajU0RW9zWndiUnhsM0VRR3lJUUFTakJlTjJDY3h4bm5nY1lWVlN2YUE4RzdxbisvYVI2bkNIRUNyK3E5aHUyNHJsTFBZZjRVZXA1UTdNTy9wenhvMVBRWHNSR0RQRGVGdDZnM2Z4WmpDZTZ4dm5jTkVHU1pMdGk2M09WUDRaaDJNYXBRQ3o5dHZhb0ViYXZkd2VsN0wzN200ajNudnV2dHNuMzFLSGdlUGtxZ3VmOTNmZDlac1BycDdadlhmcmNlOUl1WXZabzgxdjQ5cGhCWi8vMVpzdzVxK01JaGVKKzZsd2kvL05WcjcvVFRYNUVJeFg3UTZnMkZ5b1ZVd2Vzd2w0VmU2elc0TEU1UzdXSjEzeXVwY1FxS3IyUnpLaXBmeHg5akppNDhrdjBaZ1JYVmlzSGw4eE9WUjdmb3ZuWmYyb2VGMm9Kc09CaGc1YlZYdi83YTZ0clBQNW5ObnowS0h1ZklkQTVjL0xidk9kZmZ2UFhYMTE1NTRYZmwvUjQxVnRiM0VaS042eUlZbTRNY1FvZzJDU3lOb0M0KzIvNGhXdFpqeWd2ZSs1V200K1FiT2N0L3N3TkM5WGNVMTdza3FOSUo0RU01aDd5Z1ZvUUN1T1V5dVRIaEphaFNvd3JEMnFJSTYxazV4K2dOQjMxY2UrV2xqMnh2YmY3VHoyWno1K28zNE5lN3l5QTVLcDZtdjduKzAydVhudjJ1dkxkSDB5NzZXWXFPazBZQ3Fyd1dwZyt1QlZkckU0MDZtc2ZRVkRMREdETVY5S2dwMUJSZHliNjI0Mm95L3E1ZURuaEtwYUJydzlXcTJBY1RRWWhzNTRVbjdRTHdNWlA3ZmVQK3plNjRhM3ZoKys4VFEwZ1hyS0EwQVZ4OHh6VVhPdHAxUWlTazZvMGJTU0FoR0tPaEZDUFhETm5keGJXWExuMU03bi93NTMvOStMSHZlWC9hdS9aVjYzRXVmTU0zSjhQZG5aOWNmK201MzV2dGJGSFlPNGFHa0dsY2FIWVFNdmgySHplTlhadjl2WmF6SzlOU1RocFZFeG54S0pOZWswWkN2RExwWjZhUmhCK2dvbjlOZ25FRlZsd2trTlFVTmdiOWNyNER3UzdWcGhHdjJaUjlla2JRNTFxK0p0VGIzY1gxVjE3ODZPcnFyWC8rbTFuM25qZks4N3p1d0tsL01Kay85cDJiTHovM0hjT3RkUnJsbWc2bkRoTjZpYU5UeTBGRFNFUTR5TnZ6TXppbE5scFZiOEIzSmZqMTd5R0pRS0NxV2c5R216czlLOGJNeGM5VWtTZTU5eDgyajFhK2o4cm5LbkllaklLOEhNaXJ5dlg2NG15dWN3REEzdTR1Ymx4KzVjTXJhMnMvWHcvYnZpbzh6b1Z2L3QzMzdtMnMvbzI5dFpXbGNYZnBPZ0Z3R0JmK1lZRm52eUhqK04rWnh2ZE56blZzNDZjVWcycWgxMmdtVGxEWmFqM2F4VTJWYnU2UXlHQld4ZTh6YzNCK1BEM05sZUcyTW8rcTVsT2c1aTd5RURRQUt1eWJFY0V3enlBaTZQWDJjTzNWbHoreXVkbWM4N3lwZ0JOK29CT1B2cXVWRFljL3NmbktwVlAxaWpiTmNDSFdFK3hKZVVYVDd6U3hialJEZU1XMWkzS2FKNk9HdktpYWR6WFVOUUpCd1ByN2FacjdJUjgrRVRzUElxTU1wRWRGRUc3NWtRUnlqeHQ5WGgvKzBjZzhVUUd5aHVNempwd2drQnRtNDBwdEp4ekZLRzhob1RpalZNYTR0YmJrd1dDdmh4dVhYLzdvenZiV0h6L3g2THZWNndtZU44cmpVT3VlQjc1NWQvWEdENGpycG1nQ1RYMzJaUkw5Zk5qZVoyckg4ejY5VXRQRlg4MUxTdWFxNGpVYTNrOHgvMjhhSktUOExBOW1QRTVFSS9tR2I2Y0JWUmt3QkFBTkgwOGozc2NWU2xIdFFTdnJNMkc0UmhWMnJTbkVyb3ViMkRFSUM2YnR6VTI2ZGYzYUgvdUZKNy93QjR0RnhLOERlRjYzQW1qNEllNzdiLy9RTi9SWHIvMkx0YWUvY05ib3ZESm52MThxZVJLVE51dG5NL1ZaL2huRHJGbmFjSXd4VUVwVlcyaGNZMmJUNnpUTjhaaUdUb1N3RUlxQTBmTDVUWk0ybTlTZXVLSkg3V1pudkVwTlhoUW4zUnlPQ1RTbS9ZeE9vSGJqdDJSRHlqa2RyY3Z0MmY2Q04yTHJNOXExNGhoamtPZVdkdFphVjVZR1EwWnZOQWhDUW1ZcU9oOU9uTHRuNzlSOTkzLzNiNTBmL3B1bWMzWFlSVkordlVIenJ1LzdvVlR5N0NlM1hyMTBWdWRaVVllWUJKbzc1VzFlcjhSZkt0VjhBN2IwMGhqU2drWTBBaHByUUlWWG9GRjJ6V20yMlVSLytpbXVTenVWakZqTlF3VDVTQ1ZrUlJqV2xZVlNLdDFXWTEySFFKWFBVNzhyVmJiT3VjNXJNVjZPMXdMYnEvR3MzN3cydDcxNjQvOTh2Y2lDMXpWVSsvb2YrUXZVTi9TL2JsOSs4YkY4ZTNNRU1DRXdtcVlzbTNLRlNmVHZ1UHlpS2V5aXByL1BFSzV4RUZKTit2MDZRS2lTSjJGa2NLM29HOXRIOTBNbFAvRXpPbUtDTVdwVXJ2NFNJRnlDb0VacEY5T2FRVjdpdzdMaTR1ZFJOdEN1VGF4K1RtNGdIYXBDSmFONWx1OWg4Lzk1Y1I0UEhpOWxsV1U1Ymx4KzlWMDNiOTc0K1MveThiUFQyTndqRDV6d0RkOWF1Zm1CM1pWclA3Uno1V1dhQm9CWnFPV2pZakpERGpXSm9QQjM2bEJUc0hLekdDRVVwbFByczhLTmd1NkJlaWRCZVVIWFA0dlBhVWJEVnFtOWZuRWpLcXZJbFRxUjE1MmpNY01nSWs0aTJCamJZMmUwRzhtV1FrblVlK2RzT01TTnk2LytsbzJWbFIrc2t3VjNyY2Q1N1BFbk9OL2QvcW0xWjcrOE5Lc2M3ZDFrMHBDcjdFZS9yUW9LR3Z1ODRVU29EWWR1TjVRc0FWSmM5b0VlUVBGZkE0bFFBWC9naWFvM0MxUUpnMW9vWG0vckdYdXpCS29iRkl4VjF2R3RPVDd2R3ZUMjZQSXJyL3pZdi8zQ3N6OXc0VVBmekhmSzY5eXhscHY2bTd6eDRndmZ0dkhxQ3g4YWJxMkQzbXlncWN0UitUQ3BSZ0xNUW15RTRVdW9DUmNDS014YlppRkJ2SWFiYjhNeHRUWVg2L1ZVSUdaWXBaeWJ4ODE5OGRRRW5xVjJEQ1RzSEhBajE2alhqZXduRkxHTW5UYk5OeVdmOTRXaG50L09BREJBOWxqbjJtQm5hN056L2VwcmYvYi8rOVF2L2VKYlU3eDAxM3FjQzkvd1RaMysrc3FmMjM3bEJhSUo5UEk0K25rY0pUMExsUnpHNDFNOUJxckRhN09HWjF4MENOUElhMDhLcWVyNjAwVDF6NG1HaTJ3ODYwZEI2TlBVWlUyMVN1ZkkyM0tiQ1B5d0tkZXErcU41Vk8xMTZ1KzM5aG5GS2V4VUdrRUR1cnVVQzY0djRLcHVYTkMrbGxNd2ZmWjdlVzRaMm1HZTQ4YVZxL2U5c3JyMk14dWF1dlViK21GNG5qc09uSy8va2I5QTZ2U0YvMlBqNWVmZlovSnM1anZ3RzhXZXpScGVqZFZndzJGSTdEYUVSQk1lNDN2SjBGQ1liZlJxN3NwdmVwdGhBVFZrd3JqR2ZoVmowOFdvQUZWSUNCcVQxNDMwNDRYS08zWFVWUjRqSXlGYktWbmxwMDdkVktyUkdHWUQzTHg2OVJzdmJRMitIVGo4SU9lT0FDZEU5STBYbmo2M2ZmM0svekRZdUZXZFJqenErY29oQWJnNk5pMEgrdnpqWm9zS0FjTUFCRTFDZzdPd2ZpRVo0Tk1zNVh2VFBLdnM1M0tZeG9DOW5OZXBLNmxTcmMyZzNxOUdOWW82OUVhVkltL1JsMmNLdXI0S0hyZVJUaHRzYm02MHI2M2Mrb21uKzN6L1liTnNkOVRqUFBiNEU1eHIrYXRibDE5Y0lPQ3VxOEVjcHZkcUdxZWV0VWhidnlPUHpObUVPUStQVVJoRnRTNkNNUTJsNUFiUXFpVUExRVlCTUpMOHo4cCtGajF2RGZXYlVjYXhUaEFFSFFTb05yVDYwQzNYWGdQYkZsNnZYTC8yanRXTjdmL3BzRm0yT3dxY2xWY3V2VzMzNXBYdk12Mjl5bEtsa1R0cFkwNHpKbVJwb0hSblM3cG5HSDRMOHBYS1Y4UDc0ekVYWjVQK1dqaDcwMVNyS21scHJsMmNOQkpPalF2Wnl0Wi91UDZ6TUFmaklvU1VXdEpTaUNvMmZCaFQ5TXVoTWhWYVBseEdTSWhRV0VTeHF1WTlVbDEzVXZGVVhCMkNrekdoWkNoTTcwVS9RckVSSGNoU2FhTXhHQXpwMG11dlBmN3Z2dkRNYnozU3dQRXU4Ti90ZGpqcjkzOTQ1OG9yUEMyMlB3b2RBVFNHS0pnMXFKSnhDWHREbjFvVDhFTlYwSENrdWtsSVpOYndUakZQck9kVUM2VVNUSkFHeGMwRzFtL3lqYWVreUUzUnd1T2VqYWt5UWgzUzNYVUNZbkl0ci9wVnlQSUdESnd4R2xwYndtQjNhNU92WHJ2K3Y2MW9iaDlXdUhiSFBNNFBmZndQUGJKM2ErVy95M2UzUis3Y2t4TGlKaTl6eDBFVGVvRUQ1a1JOM3Ezd1RnR3pOMU1uUXpCU1BldVlPSVh6UERYUFhTbGlvamFmUTRkeC9BTE5BYW9XVmF1eXUwMmZzM2hERlFYUmNTQXQxczhqN0NZb3hUL0tqWEVXUEVTRUxNOXg0K3FWeDU3ZU1YL3NzRUsyUXdWT2lPREJ6dGIzN2w1N1pRRnU5ZDgwbGY4alF3b0VyVDM3S1dKT0dwK3VoMlRqSkhQckxVTGo4b2VaR0xwQTZYTlN1RnJVY1lvYlI3QTNGS09kQUkzaFU5TWFneUNrOVhtWGpNbGZTdkNOMHRTTm9acTR5ZTBnTEREQlp6VUJlSEp0VlhrR3ZUMjZldVcxSC9tVnJ6eDc3MkY0blR2aWNSNzYxdS9xRExZMi92aHdhN095c3EvcElncDdvc0t2TzVXY1QySyt4dFdZbW9Ba3FFcEpUWnVicVgvMlNTdEY2ait2ejhMUWhIeHA1QVFUbDlwcERlRmVYWmV0aWJxdXl2VEtTSUFiZXJYdy9mdEdUei8rUUNNRWdIc09xWWF4VGJXcmtsV3JYaCsrRlFmZUU0a0dSQU9CWW82WDlyMTE4OGFwNjJzYlAzd1lYb2Z2aExmUkM4dC9ZdmY2NVNVeGV1WTc1TjIwR1U0bXZPZHA4Lzdqdk5Hc1pNZWs1L1ZMb1NxTUd6Y1A3MUd0UmtLMUJDOWs0THdYYXF3aEVZK09XanMxenFhTEgrRzJCSmZIK1ViWGV0ZzVLUmtWa1dyWTVucmFUTEhmMUJSajE4YU5PZ3dIQTF4KzdiWHYrOVhmL01JanQrdDFEdDNqbkhqMDNXcXdzZll0Zy9WYnQ2MncrV2EwZys4anhVZ2VWdmVDekZRdGhvNjU3c2FGa1dFU3hPUEdybEh2Y0tiYU5HYzVubENFWE5SVXEybStIVlhIRHBycDhpS005S1NBWnd0TldRZ0Z5cnFPblJpMWNyM3JhMnZIWDExZC8rSDVzeGZTSThXcXpiMzlhNysrdDdIMlVUaGhoYnQ1cS9YckE1elpRRk8vbUViWk5obGx2d294OVBDQ3JSWkQvY1Z2Sm5SQ1ZBdVJVdDNTNW1vcVRUbVpxbW5palpRUy9JYWNFYVp4a3JlWHlvTGc4QVpnVUU3RkdvTkMzcW9jd05Nd1dtUHQxcTN2ZU9yVks0L2VqdGM1ZE9DSTBkL1pYNzNPQ0VhR0o3ZldCMnFURkxiVTMzNitVODhCeG43aFlHS0VUVG5RckhsWGtRY3dqZVJhNVVyMS9kRHAxUzF3NFZxUSttdWd4cXhWQUNJSWx1V09Ob01xVnFQN2Vwd0hVYXhjVTZvbGhFWVJNRHF5TUpKUDFzY1lHbVN2Sm5uZVFybzMyQ1JuS3F0S0JOZHYzVHAzWTJQN0Q3eDBZN1YxSkR6TzIzL2Z4eFBSNWdmcTJ3VU9RbS9XTDZhREVBT3pQUFp1OEljajFmb3hZUFRKZUJpdXpYUVhsOHBtcUNyOTY3MU1jWE1yaGRuck1yYjE4ZkRSMnRRQjhqZU1hbEdNTGh5dUZwNkw4eDd1NG5HZlpaaGxHQTR6ZXY2MXEzOW8wRjE2NktCZTUxQ0E0MTl3MEpyLzJIRHoxbkVmcGgzazRqZ01WdTJyTFR3TXB6MkxoVkExSVk4NlcyV21ySHVzRUF3K25IT3RMTDZqSVp6bE1aV1FqUUpOYVNvcDZTSmttMHc1VHd4dnBWbzZLTU93cXBjc0prZE5XUkFOOWVhdXI2eWV1cmExOS9HRE1teUhHNnJsK3B2MmJsd2hjd1F1M1AzV1lZNDJNQ1o3MzdwcXppUnlvRWFlVlJzeWc3MDVsZHhoWkRkb0dFNldGMk5sNnJOUUIrVnFjVGIwSlRONG9hYk9hWUZNWEZVcFVpcWorbVc5NGFwNjM4dDI1ZWJxOS83U0Y3OXk3eHNDbkdBM1kwc1AreitjYlcwMDluR05YYVV1MVZ5bk9mZWhzYUNZVmcrWk9ycU01czBFUmQyaGRxRkpMVUVmdDRFNkRGbjJBL0xSdHB2cHRMWFBEY3F0MG5YbHpMS0R1a21HS3dRSEFqRU9GU2gzb2hhSytieERLWVdFR1lsU3RsNFNMdXN5d1JJcE42Rm1sK3ZTeERGd0NZYWl3cEdDK2hvVVl3UmtERmdNeUdoQTJ5OFNWeUYxWHlJYTRxWkV4ZVNPSk1peGVtdmxyTjdiZWZkQndyVkQ4emhyYTJzL09saGZhWWx6aVFjTjA5NklscHRKbEsyZ1ZsbHZGQllmMzNSNk9GUjhXWG1YQ2JtQWwwd0tHeVRyNEI2bm5PUFhmeWgzWVpmNURTWW0rT0dOZ1ptZ0dvcTdpaFZZY2ZQOFQwTVg5TGdFZE55aHJHK3lFOWNqQjlSdXNJRSttOTJBTUtEbnI2Mys2WFIrY2U0TkNkVWVlL3dKMXRud20zcTNic0pvUFZQQy9VYjJwczBjNnJrL2ZmV1pBTmM0T1Q2bnFpZW9iMFFOU3dRTmRHMTFKYUxYV0pOUWlxcWhZQjEyQzlRN1BjSlF5d09YdU9wSndvNXBhVUJET0pmVFJLMExKblczVnpzNS9KOSt6TnBIbm9VNlRxMUFtbXZCbFJzM0gvdlZ5emMvdUYrdmMxZ2VoMW5rdzhQMVd4QjNjUjBramljNjNKYWJnNXFwS2N1VVZPbjBib0U3NDNGa0pIUnNxbTk0Y2dBam9pSE42UExmWjhWamk1MlQyTTd5OHdYajRzUWpUVGxWWm93YXovdFlZbWZjKzI5aVJrVXF3b3lscHluaGFMUXV3QU1BL2Q0ZVg3NjE5YjkwVDU3WkZ6VjlLTUM1ZnYzYU53NTN0bFRXMjVtb2xiWmZBSTMzVUpOck05TUlncEcrTW94T2ZYS3dBbjNhNnFjbWp6T3BvWFBjKzVnV3FqRlRaU0F0ZkUzYms2YXFOUnZNZGhNeTJyaWNSbzI0ZnlaQ1VtdlNoZHRXVUUzZW5YZld1cERFUmRBNEd1WkZJVENMa1lOUWN3RTBvbEU5UHFoRzBkQXFqWGxqdFhuWGUxYTdodEZxRkt5dHJyejNjeSsrZHY5K3ZNNmhBSWVKdnJHL3RzSXlReUo4TjFpbGpXVU0wY0VqZTJSZVAydDY3V2xFUlRYOFFlTllnUS9mNnIxaTB1Q0JCS0ZVcjVUelBIVzl0REd6VjlYRnZITEFndHBvT0ZxRW9LaXVQNmxFQzA3b0VBQUdXWWFOemMxVHlBWmZ1eDg4M0Rad0hudjhDV2FSai9WdTNTaW5ETi9rZFJTcDc1Nlp3cEx0OStjekV4YzFZUGpHUmxCMXQ2WTBaaGZONzhtRUt3VWRmU3NTTmxOS1E1N0NnZXp0L3ZPeGN1WDh3YUFqTlFDSG9WaFJDQTA4a25Hc1c2N3RUYUxYSDlDejEyODlublRuNWw4WDREaDNwaVFmZmtPMnVUNDFwdDl2eURiZFZVOTdqdVp1NUZtcDdPSWdONXdzTTBiYitXQ2gyQ2c5UC9ZaXF6RjdwZFl6VFgxOEpjQ3B0ZlZJWThoTU5kcDYwazBDQlFYZEtPMGIvbjVSck1RQnJ4VnB6UEhDVG00Sk83ekZRRXkxdXU1dkFOcG9DQVRYVjFiZi92TGE5cnN3b3lMT2JYdWNXN2R1ZllmdTdhbDgyQi9oNU91MWlkdGhpWnE2Q21iUkhwZzJJek9yUjVsbDlxWCt1ck9Dcy82YzlWNitpdjdhRE1SRTRUbnFqWjhWeXJaRzR4clRFSUtGTEYzekRVeHFPZ01JYW1OS2pZNGMxTjIwVDRYR2JhTUwyVGx5RTJ3c1FlMm1uQU9Gd0hqZmE3L2NxSUd2NjRqVzluUDZHby9XeGZQczdlM01iZS91L0hZQTZlc0NIRVgwTmRudU5vbldpRGJlMDQzTFBVYkZHRWRYZmRURkNwdVpRT09Lbi9hNk5BZFkzU2hpR2tEUmRET3NicEVMVjRwNDVVOFRWTGJENmMrUUdCaDlhd2RmNXhqZVlDczNBRWdsNy9IdFNLYmlrUVNEWVVaUHZYYjllMVNydFRnTFFYQmc0RHo1eVUvZ3NjZWZVRWJrMi91YjYzZWNRNzZkdk9Bb2dLakszWmVIM2N2a2prNmNvcEo4Ny9kMVp1MERLenZFWmFKWEZJenpuRHp4WENId2tsTHBtQis5Mk12M1BUc2JXL0dnTlc5WmRGTlVkZ05KSmR6ek5SOEF1TEc2L3NDbFc5dVB6aEt1M2E3SElTWjZ6MkRqMXFIa05RZTlNR2RacjNHNzcrVXd3VnB0WGVHcHNYd1pwa3BqTmI5UzJEU0JwQk9tN3ltVmtiaXNPYXFxRXhGaHVDZGhYNWdaUHg0KzJ0bE5VNU94Y0RwMGxuU25BaDVweUEvZHpVcE1lYlB3NHdlYmU3M085dTdPUjErUFVJM3kvaDVsdFRHQ0pyVVhhWmp2bU5RTlhUVG1HV2xjQjdpZkM3Ukp5MjFTWGpQdTkyYlZhSnZVaURuYnd0M1JDMnRhUTJUVGJ0QTZjV0FLaGlsNFA4YU1ES2VWTEYybzRZenhMVE5odzJhNE40ZWFwem5yaTMxbGhJNXVidlNwNWwwQlFkSXdQVG9MTHYySWVMR0ZUdWYwbFd1cjMvLzVRY3AzRkRpM1ZsZC9aN2E3cmN4d2VQZlJ5YWlxVzlaWnRDWVFOUlVmOSt0bFp3Ri8wZUdNMmNMU2ticExBOEJOZzRKbjhXK01qcGo2SW1UdVNBTW1HdnQ2elZIQVBoUjZLbHZiYWxkOG8zb1BLdk0yd0tnNlQrbGxwT0lWcGQ1WlVIbU00T3JxK3FPYkEvMjJPd29jeGZ6ZWJIdVQ2a25sM1pCMzBCalBFdFpKL0hxTXc4aXJKbm5NYWxkMG1PUHNQMUVPbFpxODJGOWwzTGhKK1NmY2dPMjhmS2krV1hnc3Q4TVR0VkJ3Wmo1OVROa2g3RDRnVkR0RVNvMkIwUTZQTUwrcHYzeFQxbGJVaW9KNmxmYzZkbVlINlBkNmJJaSt5eS9pSFVjUTNCWndqTTQ1MjluQ3JCMERyM2VWZlJxN1JRMHgvTGp3VEdiTXFacEFzUjhhZS9UYW8zMGQxM0MybjVtcTc2Ryt4ckRZTVdPS1JiWkY0Vk5HNmUxcWwvajR6MU5NWEU2NkxtaC9ueEVJaTVoU0VRTnh6cmxLcUVpWjJEVFA3NFNGVVNuK2JiVEd5clVyajczMjZmOUVkOFRqUFBiNEUwUmlIaHcwakVrZnBJNHpyVll6N2E0L3FWNHl5KytPZTUxWjl1Vk15cGtxRjkrWUM4bDdHZi96SnJHK1VNWnBYSGQyVmFERENmU2hXZ09xaW5jMGgxaTJVYlBzTDZ0ZmVFUSs5elJvNnYydkxBeWV3Z255aEZwY01TSVFBcXpvcTZtMWpBcEE3Z3VPY2k2YU8vMTdGUU5DclQ3blZ5VVd4MS9RNisxOThQLzVyNSs3LzA2RmFnckUzMjBHZmJ3WmJEK2gyS3dGMEhBelc3M28ySFJqMmMrSytZbEVCRWFiSlNkSi9JcVVGN0FScVFDbFVoc1IwOWd0RWVZUEVHbGNPWDlJWjJsa3dqTU15S3JkMEtQZVd4RG9URXM1YnVEMTJIek9kR3QxNWRUemwxL2xRd2VPai90RTUyeXlJZDVNZGhpTHI1cTZwWmtaU25Hak53NG5HK3RUam8xMWkwa2UyRGMxK3Mxc3JzNUNVL0tNK3ZzM2dlQmZtZWlId29kaFcwc3dvZ3lNSGI4NE5QQ002WVF1SXE1YUtGbWx6bXQwdW1jUEhXaTBOdWp0N3RGOTU4OTh5eDN4T0Z0Yld3L29iRWpURnVFZUZUSEMvUlJQYi9jOWoydURtWlRQeUQ3dTFESkdkdGVqd0U2QmpnNnZqUU5LQ0ZpYVVueXNMSU9xRjBlRHhyY203VFBRdEh4dWpLY0labW9nNDl1b3lyQlFwcFlHWkZ5TnpCZ1luV1B0eHZWMzNoSGdHR08rVjNTdWRKWk5QTEd6WG9pVGRNOE9HanBORkhSQTgrYTFTdWgwU01DYVZBOHFxZWRKN3hTTmE5dEhqeCtxb1JKR2M3WEtPWlN5ZXU2L1BEZzQ0S3p0M2hsZEEyd3pvRVl1NUxDWFRlcEFHSDE4NVROVnZLK2dyT3dHelpyQVNBdFE2Wm5HSEgvVWdTMFZYV3B0QkthMzk2NzYxdXJEeVhHTVlUM280NmhTMFUwYjBJNXFIaFV1bEdxK3hQZmZZRnBuQkVWa3BwRVhQNTRRS3Y4WEJFVllGSlVxRlZ5TUlLQTZJakFpNCtSK3Izcm5QOWlLeDFsWXljcitVTUdJY0g0OWp6TU9SQnM3T3grWk8za21PVlRnUFBiNEUwU0VCL0s5WFJ6bDVrNDVBa0NwQTNpeXZOTzRiRVNtMW5QRzFvanF4MklXRDk3NEdhamlWYXdDRVFjNVQyMUt0djVaWlRRM0M2V2JEanFQTXo3MEJkRFU2VjN4NWVGN0RJYmNqTUhHeGpvOTlmbmZwTVAyT0N3aTM1UHQ3UnlwdTNuOTRqeG9wbkluTm1OUEs0Qk9kdTZUUDA4OUpLc29lemFsRncwcnJlc0Z6Y3J5M1lhVjk4YXRDaXlJZzNvZjNiaHdNc3lCVUltV3huRitFLzlkSFdzWFVBMEU0ZDlGeE5MVlVzNGtGZlVjeHhwQ0JBd2dHd3hCZzk3aGgycWlOV1g5M3I0dnpvTWs2RTBqd1NNZ0diTlB0Q20rblhUUlZwY3NWZHR6eHIzUEpvcTVEcFpKK2d2akFXZ3ZpYUtRT2NOanF0SldNcFZDcTZ4aUoxVEdtbjBQV3IyZUlyVUxQNXc2UlMxL3FCOWZmMnh0S0JpRWNXNHNvdG9PNHg4REVObTVHcXAwVW91WDdBeFlOU2w4b3krTWtxdGhzYXZ4K0ZvUC9KQWJUS0g0WXpjMTJCNit0YXVYazBNSGp0RTU5S0IvWkZpemd3aURUQXFwYm9jSXVCUEhSR1I4RGpmMS9ZeDVNcitsSUt6TFZEb0RhdUhUeEN5cHpxaUY0VkNkU2g3TGROVjBzbXZFUnlIa1ltbzA4MGdjSmpQNHF0RTlSLzdmdVRhQUdGS1FPMEFPaUpDdjRid1o5dC9VbWJaSmNreTNPeHUwZjlZUWxZMW1sUnhoUDVsY2ZVQ3VnWlh6cXY2K1k5b1diODNra1c1SWhSanc3VDFOUXVreThxanFEYXJwTTQwK3NsenJVZlZ3VXFYR2EzSlJsU2hDcWlBdjJtOGNLSE50OEl1dlhILzM0WWRxUnNNTUIwZm13dmVySFVLVi9JbWp5N1VUUmpQa0hEVERIWDZhSkc2VFo1cnVOVVpiVjBLdDVuR1BJZERrcmROMUtqbmNjNE9xSEZROVJBTkdLVzkvZkl3Mm8xM0lVcVBOYXpjUlR6QlVQSDhON0JLbzA5UzkyN2ljcndBRjBERFdNdG9XcEYzYmt4R2hyYjNoNzdnVE9RNTBsazI4T0t2VmNUUHpQTXUwdkdZL29acE1TVG5IdGF3MHMxNzdhN2dNYzZCeHN6NlRtaVhEZDAvMTQxbTdNMHR3ZHkxZXQwbER0a2wxRkZXSlhLazE2RFdSQTc3ZU1TNXZMZDlqTmJSQ1VLMjN5NStxbEhRWUp0WnZjb0xxWjV3S21OcmowQUQ1cG01cS8xbUdlbndieDIwQnh4eGduY2RSb0tkbnlROUdXdGdQV2RLMmZENVVRRFFxNzA2TmhieHE4NmcwNWtCaDhaR0Q3V3pqQ3BsRlVoMk9GQkRWNlBKUU02MmtvcVhodWNkcFZqZHRPcWg3Z3FxRUxXcWhWVzN1WmxyKzFYUURianIvUlFIWmFrOGJqSzlSM2hZNWNEY0pFRW9EQ1RESkl6VjVrY01pM3FzWFl4MDBJY0Vhck5Tb2VTdExOZE5JT0ZMc3g1SHB5aitWUFowdXY2RGEybllMRGxNZHoyNFFPcVQ2aFZ3RFNmV3hNdEp4WFhxWmtHUXdGVzFyQ1g4R0dkbEtNc3NTc2FhYlp6alVWaHhETVVDbXgrSWpPY2lKMzl6Y2ZNQmt3NHB5cHh4QVZlV29HazBBM3AzK2ZNeFVhZlNjeEthVmN6UE5JVjg0V1RucU5WRFVYdnpWeERYaGpVcWVVMW5IRWhBVTJsUm4rYVgwTUUyQXJldXAxWGYvbUdCanRBVDFGZklkelBXK3VDQ3hueVZzQzI5UEZTOWJJSkxjOUlJZ1pla2Nxc2NSWXo1cThvejNjdytlSkFvNExVYzZDTjNjNUVtYTZqdUU4U2M2SEsrZTlhNDJMdWF2SnNKbTdHZXF6K3hNRWlRWDA2U0pYWnVxckk4V2pBZ0ZVdE4xV0Z4OE9wZ1JhaG9iOTV2V3hpUGRQODQ0V1NaVDVEZUY4bWFsZmpONjdNVTRUVFZVKzh2SVBkZTRsNTdFNlJjMGZWQVVyZVJCMnNBTTh3Lzg0aGVmVVljWHFvbVFIZzRiMyttZDZnM2JiM2Z6dUlWUjR6d01INklucVMvVm5mU1p4azlKbG15U0dkTU5UVXlWZkQvVVBQT2hUWFhGUnYybU1IcVh0dUZhOC9tc3kxYjV2K3RhLzFmNTJqSkNBNWRnc1l0c201WUZOODh1aGE4cGgzeHRvWkdJMk5yWitkREhQdnFOM1VNRGpsSUs5WEVDZW9NRXlBODdSS003QVBqSjlaa3hQSkJVbFdxYW5xc0lyY0xpWWFBaFhmZVU5WCtIb29EK1F0Y21ySEhBelJDVitndDFaVkUvYVRtWmhwKzhTVHRrMWtUS2ljMVM4MHlxK3RjeVlYM0pmdlBlZWs0V01KUTZHOUxPclp1ZFE4dHh0TmJ3eFU4WlUrTVl4NjZNbzIxbnFkWlB5Nk5HNzI3VFgyc2FBM2ZReDg4T3BDWkdESlZhQmpVa3RlRkNKeUdNdExpRUF1TlNveHZxZVVvWjY1Zk5wS1pXZjJFaTZJWjFnajZNWXpDMDZESkhjYUdrTm1VZUZlbzZGK0dmeTVGTTBJTFRTSlVIMUZwVFE2amZUOXAwalRTcHVYbG1FRUh1YW50WnBWZy9ZclFCajNFdUIvSTRSb1JFNjMzTitkL3VYWHBhampOT1ZPTjJRWE1ZWWRzNDREZDFRNC9yNUozbE9EV09FWStKUzJoTVhoQnFuakZUamZXcmhsdTFacHFKeDdnaXJ1R2F5RUlhUFF3dm04b0FqV0xxVGVMck12N1l5SVFUM1JRbWlqSElnZnpRZ01ORVIwcUV0bnJuZkgxZjc5QmpiSnIrbWlPMCtvUzZWTmlyRnZhQ3lUN2ZYeW5ld2NYRlM2NnR1bWlCTVRMRjA1dVNEQWpvWnduM2RacFIvYk95cStBUWloSlRtbmJyeEVjbWxCMWFxR2FNL2lLSVJFU0lpSEFVTXBzcXhYaTRYbVBTeHVkWmZqN2J1OTgvVU1VcnVBREZ0dWx4NEdrQ1dPTWRHNldtZ0EvTEJCTFVoNlRDc3FHcEtWYXFJUkRxWGtWcUEzR290ZVNFNG9HVkVFOGF5QU02MkozS0FaNG1od3ZZRThvUERUajVsUmUvNEtxZnFpbVBxWVJOWTJvZmt5am9wZ3RnMWg2dy9ZUTJzengyVWpqYXREcHgzT2NaWlFqMzRVWHIrUWpSYUJzK1poZ2ZEeWk0Y1ovTG1QcDZrT3BGWFJrK3EvV2pWVVBBNnNTbHFkU1JuR2F6TmdYRFpnR2wvWnR3b3dCT2ZpcFFvSUhZMVI1bDNjV001RTNsRzZuMTBSV0RPT1YzSmN5QnBOejJ3QkNvTkpFTncvclFnR041YmwwQXd6UWdWeG84d2F4MzlxbEM0VEoraWZpc2ZXWk51WWRNdU5ncldtSDEvWnRqaE5PbkNYVE1ISjlQQUdlZE9CQ1hwekNxTmFpQ01hVHFsS1QzSm1HQ1hjdG5xN1Uwb1VvcmlqOVc0MGdEQksweW9RWjFVejVXZHFRYkN4b3hnQU1WQW8xbmUvMUxoUTFzQ25NOUtBcWxuc29WNldlSXFPcUlnbTNhU3FWbXo1QWNXbzR6M05raU1XWjh6ODhkeWlzT3MwWlVmNzV4Zld3OFpmQnM1b0xzSVdtTmhjMmJQZ29xaGMvTDk2S1lpLzQwbXVTSnBhcTdIS1FDaGJjSnQ2dUZuZFBqUGtzVE1WTStSNVBJZXYzR1VlNzdxZWcvMTFZcjNzblZNa1NFYzR0ei8rUkQzZUhoa1FPdGhTVkJrTi9jNmZyTm5RYW1US0RFelQ3WHM5OUowSVQxbCtJT0dkemRmZnRJb2VKWjMvSXdKVVEwQVhzMTN1TlZyL1Ntd3FxdjlwZHFud2h5SlRPeXl5WjhUbFAwcHdXdkxkVTFqcStYYVNOanRjK1MyMElsWm11QTNHOGRwNWxPYkU3NmFjYVFzS2ttc3EvWG4xR0JVOGJtZEpPenNIcnRwaDVtVG45L2srV2daTUtyczU4RU5WS1ZjQXJTb3BHZHJOSk14RXhlRnR4MFRrWkhEZ1RqWm16QzNUY05FbGoxOTRuOVR1K1dhajUyVUE1NjNLVjlPN3BxRTlkZUhLYWs3S1NFWFdhb2R6VFZSUFlySHpWTzUrQmdIcEdDTyswMHdVSVpBV3A5WTBCVFBrZDE2cm9DQkIvMldNOVVQNGZlVXhnWjdiTDJiSnBkT2p2YUNUMld6ZzQxekZEZGNGMzVyNUlQU2FVUUc3YmNtREZiZncvRklaWEhjYXlFMDRHQTB6bHhTb2lWakk2anZqNnJCdmNsY0hnQWFucmFSVnl2Vjl3ZUZYMlEzS3dwWkp6K21LWmF5SWhtTkdTTWR5MHZXRjFzTlpDS2FtZFZYclk2VGgzUzBXSExUTFgvelJUc21URWx3MWRmSlM4ekUvbjd4NHU0MWdwbVJwTFN4cUVDWit2eVN3YWl2K3lUVDU1MVZ5TndvQXQ1WEpnNHptUElHTEdHMndGbVhTWnBWSnQ0UDJNVkVuUXd6emlBRllRd1h2WEcwOUZsbURLbXN5S2d6aVhZeW9ZeDQ4eGhPMDhUK0VJaUlweUxhUlk5cjRaVTRkaEFlQno5UXRzeUNwT0NSQWhuWlNibFhJZDV6MUxFOHAxdmUrQWZqc3NBRGdTY0s1LytSUVBCcFRDK245YmtXZTlXSGhmMk5JS3RnZm1xdDlZMGVUc2E4M1g3SHE5NXNkTG91RVJUUis5MFQxVS9Ma1ZEWnJBa1Nob3VUajlDWUthR3Z0VlFxSDdSaVRRbDhLTnROajVrSDVkdk5KY05LQkFHR1YwVEVub1pWNDExc2xBQ1JkV014M1p5MTNLZmlvcG9yWGxVcW5LRWRtMjdTMk5JUU96R2NaaGdDSkl4OXcvVjR3QkEwdW4ybTJTVnh1N1luUExsbXhITnJGS3RNMDc3SFphSG16V1htY2FnTlgyL1dwR25xUjVIcFBuSnhwWkJ4eEFXeEtXbVduMloxV2dqWmFBejdUMkdOT2RYSVFEcllWa2xaRU4xVkxyY2poWjBjNGNYZTZEdk5qb1dNV3UyRzk2c3ZPZVhla2tIbkNiWUcyYmJoMDRPY05yS0txMFRPQnk2a0ErNWhlZHVXTzArNjdFcjJtQnF3aHloZDZqMnBVbGx0V0hUSlZWNGE4alloTjVYOW8wMEpmQm85SlQxZFNUaExzNnFrSHpGTHpUdXZna3hLdGhmRGswajBHOVE4Z24rVkt3Z0FxU3RkbjlYWS9mdzZXZ3hGTlk2NnVxWE5PVUNIa3RITjhnMTNVNE9kRGZNQ05VdjlvbGtUMFBZV2dweWNMRnl6VXp0NmZHMWlsSUUzZmFqbVlhOHB5WllIaGErYXdTTVZFSkhWUEtnRVNVYnFZcTNqd0JNeGhNakplajNjWE1TcHhaSG80UjFPR3ZFVExqLzlQS25IajJ4Y1BpaG1vSDFiNlU0M3FpK2NjaXVUQ3NhQ3FyOVg2TUMzVEpteWV5MEVLZlppYyt5L1d3Y1MxZ2Z3YTZvVHphZXpOSENhdVhDcWQyZGFickNlczFMODBpT1VienFtT25LQWpRam4wK0tpOGNMZFVqRExBMEM2ZHR4WVpxZ1laOXBROHNOYW8yZVlXTW9VRjBFTlM2L0hKc3Zodmx1b09wVDBWTWdqQWgyYUZLM0pzVjhCL1U0cEllRHEyTVpxSEZ4LzRTWW15WmMwRFJCRmRLSHBtWk02OHhoMGNReW8rN0FaREFLUXJtbitwMlp3aFo5TVhZWFo5Qlk2ZS91TkZGQnBucWNxOHhiV2IveGhNUG9IQTAxNURPbGVnNXFJUnZxd29QQldJRFJwdElVMmxTV2xlcDZnUkVXYnIrN2orclhsQVQvNE1iZ0xkRDJkbGRUbWlReTEybi80c1NVNHFBWDBzNVRuL3VYeEVwR1FvM2JybEdNNnlhdThma1lGVVNYZXE1VVU4c1V6TmJ6ZHBEbFZwVTZ3Qmhxb25uQ3NmblloYUtERWlRcUJMZjR5RWkxOW9KU3U4elVWaVJTR0ZaVkZKakNTdndvQ1ZCWEN5MFVSU1hZYXdvMFNDdEpwVGhlWHgxWUowcEdqa21EbW1mVGN1V3FCcHVNYmY0dEd6eWJ6eldGdjBjRTFXb0R3bCtZU0k0ZDlCb25vaTFTQ2doRUNjTjlsMDB0TTJFZTA3VHgyRFRrUnRYd1pqVHNHd0dQSDB1WTBUdE1uU2dWVk9ic0p6Rm1aVlBrT0ZCSll3Qm5HbFZMcTRsc2NSYzMwcmllc05LcVk2UkJZeUNnbU1reHNRMDZCT0ZlenlhS3VmbDFwU0t3YUpuZUJwRkJWTVZKQkxXd2ZLUm1KSTJFd0g1SXFEQ2ZtZVNidk5Rdk02SFZidmNHS3IxNlJ6d09xWFJEcVdRM1pGN3FGN2h4RGVJQ2doSTdsMDVRQUFnYUJob2FHb0FoQlUwR3dnYUdERFRabnhseS80Wnh2MmZuNncwQmhnUkNsbmMza0dKVk44TzJ2clA0UHhtUUJJUTJJQzBBS2V5MEJRQVNHR2prSkJnU01DVEJnRFF5MXNpVlJzNFpjcFVCWk1Bd1lCSXdDUlFMbUF5WURZZ01VZ2dTTVZBaVNFVEFBckFSc0FGOEI3Ni82NVhySjl5YkZ3RENsWCtMY2ZVSnNiVUdOdmI1eUloOUh4RDNDYXdndW9HeHoydS9CWGFmV3dtRFJRR1NBa2lxNHVYRUVLUUFWSlhxUmwxQ2ljcjZUYU4rV2RBdDdZcVlKaERhQ0QybUdSRUJyQklIOXU0ZmVDWnhINmk4eFFRM0UzZXh1elVmdnRaRGZpMjc2MEtvU0lHNjUyZEh1TnZsV0ZSNFVudE1DS2VPSGZ2Y1QvK0RuN3Q1Snp3T2h0c2JhK25pOFMrSXlJZUZDSXE1bUFVeERRZlhjQjhDQlFHRC9UeUZ1OUN0M0NoWENsbDFueVRCNkRmVmxlNkZJSkpXUXdvWFJOb0VOZ2N3QkdoVWk5bGZjQzBodUxKRG9CNmozT2xLb09GbDVFeVJFQk44dGR0ZHZONlRFdGtubFdwdHhWQVlWa3NSKzVoNk9FZkYraFpieFhZalhRWUNMU0VSNE5RMlJleDdjTTl0QXp6ampnTzd1NzkyRjU2OStNanRnVEVobHR5OFRSbkNOVzhPbUNqMkZ5aitqN0p4NDFZcW1oSmtCalhwWEZPOHFtbnM3cGFhaGtNUUpsUWxWOGJBdmZwVFpvWkowaDBSNE1sUDNnSGdBQmkyNWhlL3RMdTE5V0VpS1pSS3FrTmRaUXR0aHJaZFlpUUtCQWFNZ1lJQnU1UGpYV1Z6QVkrZHB5Z29HQWNJZDNMSXdOQXdQSlJCeGgxT283cjd2VkI1bHdlY0Q3US9Kd0dVLzQ3N2VaNWswS3lMTzZBWHgzT0wvSkNyRkVaYjROdHVHRnZ0RG9OeEk5cUZrQWJrN3NyMmJtNktITU9JTkt6MkUyVENDTWV3Ukp3WE1QYTdDdVR1bGg1T0J0WkhHakJsWUpVN1QwWVFzVjZmaEFxUFZvUnhVc3JlWWd3N090cG5GdFJod3ZXQmtGbzRWaDFrS3p4U3dlekJxWFU2c0pxbUZTYlNHR0xkYnNXQmdrUklKWW1jV09qOGt5Yy8rV055Unp3T0FQUmVmUHBuOXpUOTdneDB2cDJtNkxiYlFlNVF5WWljUnpERndTUUFoZ3h5R3JoL2R4QlM5OVdIQzBLeEVhRnE0bTB2WjFVZTNJYkpyWEJEbHdlRVA3MmFjd2o3eE5uQUJwWEJRbFdUZ2cyN0JKS0xNSUJkMjRZMnhtNWxOaHJHYUhzeDZCeTV6dDMzYzJTNUJraVE1WmxiVHFzTFFPa2lKd25lSDFrd2tJTW9rUUt4djdrb0NLeCt0RktNVkFHS0dJWVlZQWFJd2F3QUFuSUlpSXc5MWFJZzNtT0pnWmJjenU1b0UrUWd0WG4va1Uzc01pM1JxL1dobFo2bkxLU2FldklMOHJLM2ZxdUZXeW1vVVNxQk5nMkZGUFR5QVRyVnkzeVViQnBCQkpXazBtN1BmM25hWTI4TE9FYm5Oem9HbjMxcFplTmJodHAwVXBWZ3J0UEdzZms1ZE5zcDJvbENraVJJbUpGb1FKSGRHV25BSUc0alJ4dWFGQVFhQ2x6dzZYWGdtRW9JMXRSU1R5RGhZcTdjaDJCK0FvZU1Ba25xYUZ3WHJoU3o2Mkl2S01QMjdtdHlFSEtiZitWRGFKT0R6QkRRR3JuT29QUGNBaUViUW1jWkJ2a1FRN2tKbzRjUVl5OUVrMmZ1ZVkyTG8rMk5KRWtacklDa1JWQWtJQ1cyN1VYNWsrNkRiYmFodTdGZVJSTWoxd2JhdUVETEVJeXgrU095Rm5TK0JCaUcxZ1JvNTUwNUJWTUNjQnVHajRGNUNHSUZwUUNWQUNyUkFPZGdVV0RuemF1MUhsTUJpbzk4dkpjc2Jsais3NmJldkRsaEEwR2wwZE1FcXdqOUdaUEttcEFHY3JuaDRtK1MzM0szUzhMSUxsUkNmZFVrUU13NGNYenAwcG01OUtrN0Nod0FheDNHYjE0OHR2RE9GOVozSHg1a0dYWjZQZHhjWDBkQ2pGUVJGQkhhcWNMeGRBUGRqcURkVW1pMUZzRjBISVlYZ0ZZTHJBQmxnRUNZc2xhM3NRbSt2ZENWUGJnY1NDTUpRUlYzTXNzU2lMK2Jhd05qY29nTVlVenU3ckk1akF5UTUwTm9NWUR1Zzh3UVdaNWhtUFVBSG9LUUFaUkRZQ0NVZ2NrNHVsTERaejd0RHFGRGdwU0JKRkhnaE5CT0ZEaGhLQmFvaEtBVUlVa0pxbTB2V0U0QVR0Z0IxeFNEVTdiem1rSHdqQ1FYL0UwT3RsNVFLUkFVakFDNUJuS2pZUVRJYUE5WlJ1ajFnTDF0WUdmRFlHczF3ODdtRUlPc2pZeVdRS3lRcUE0bzZjS2dEYUlXVk5JQ3MwYWFDRkpsWDcvWU54cUVpNTRrR0JXN0dOVS9Nd0U0dEl3V1QwZDBCeVRjeU9CdU5xaHRTWlA5aEYwMFVyZWpobHBocVJzWFBFYUE1V1BIZitsUC9KVy9rMzNtTC8wWUFPQ3h4NSs0SThEWkFmRDB5VTV5YlcrcHUzUjFhKzkwQzRBMk9jUm9ERE9ETE1zdzZPK2d2L0FNTHR5dmtNejFrYXNXUkMvRHlCS0dBNGJSak1TY2hISjBZS2l5WDk1cmdwbHoyRkFuTnpaTUV0T0hvcDFDMkp2SUtxWVlGNzlUSXVCVWtIWUk3UTVCcFJvSmF5ZzJZQ1ZvbXdRSko3YjdWb3dGRFhJdzIvQlFVeHNnNVU0c2djblk4QW5paERFVWlBU3NDRW94eE9VelJmdS81TVY2YzN2U1RPV3VicHN0QVpBR29OMkoxTVdGcWNRK1R0eE5WNHRBcFlRT01ReHBHTjREY3dveERKRVdTRkxrbWNKZzBNSHVWbzZOdFJWc3JBNnhzVUhZNjg5QjVCU1VPb1UwNzBDbnNHRWpnRlQ1aks5aFpXSW8ra0dsZWlpaFJsOEh3dXBsdmFkZVB3dHJjcU1hQXVGcVFsU0NhdGtYZUpvbzZQQm41YkpnNjNGVW1zankvUHpQZk9Zdi9aamNhWStqQVh3SndNYUYrZllybWFHNXpWNXZYb3dDaWIxUFNwcGltQ1RnclVkZ3RnZTQ4TUFlanMzdFF1azlBQm1NNmtOVGhweGZjN21xUFlpVkdSOWhpQ2gzSVVxUjlCdEhQVnFQMHdZekFESXdvaTFneUlDVWdTQUJVUW9XWXk5MEljQWtJTEdYL3pBZEl1TkJ3ZEF4SjJEcDJCQUNRT0l2SE1kMjJSeUNiY0lQQVpSbDFjUVFRS1lJS25KL3NiaVF3Yy9mRUN1SUVBaUpIUlpnSDFFSUJCck1CSUZHUmVpVGZXaGtjeUp5dER4QlFla2xTME9UdHJrZ0RjQXRqWFliT0xHUTRxSFRiV1NQSnRnZGFtenZDbGJXdHJDNnNvZTlyV3NRZlJiRUo1RXE1WFNpeWFaSnhCQmhLTGVXUGRNYTRxcnZwczVZMVlUaG03b0RHdmZsRkRtbCs1NHZ1anFtc3NMSTdkUGpUS3JiaE11ei9PQWFFZUhZNHNMV3htN3ZsVmxlNTNhQkF3QXZBZmdDUTA2ZVgyaGZ5WUczRExPTWlGcE9lbzFBN1M1NjdUbGNYVi9CMHZWdHBBOXNBcDBXakpuSHZCNGc0UjVFdFlNTHBlenhMdHRDc2lES2xlRHVacXZieklQaW9XUkNFcGljMU5BQXNITVdNRUlnRlI1ZWh2S3NuYjJGMnNxUm81ZHpYMU1KWW1LL1h0YXlXWTZSYzJla0ZEU25JbXlrQWp6azZqUlV0TFFiNk1MTEZuczduWmNwYWo2T3BtVng2K1JkUVV0Z3dLeUQvRWhCSkFHQnJaUVRNd1lkK3g0N1hVWnJTZUhVUFFvNlYranY1dGk0ZVEwcnI2NWdlM2NKakhQUTZUenl4SWE3VEFxa2N1UWFTUFlZZWdEa0JoQ2RRNHNnY3pucmFEdFNXUWcxQWVtZzNRMU5qQzVyTFVBNXdPWk9nSDJNcFFaSUJCeUViT1Jhamdvdk5hTC9ISFEvTnpRTTEzTWJCVzA3b2hsWVBuNzhDei85ai8vWnlwT2YvTVRVaTE3OXhFLzh4TDZSY3UrSGZodXVmTHBvNWNsZHh2M2hsQ1JQV3ExRUV5OG1TdG1ZbkFoSm9wQjBVN1NGMFJzSXVndUNidGVncFhJb1VSQ2pJRXFoUG00MnZyK01RTVRGaFZ4UWtvSHl2bithQWo3c0xzeGFKVktLL0pFbUxKdVY4ckhodTJEM0hzSTFSVFQ2eGNIZUdvaWxyTXN2Z3BCVVZwUDR4azB2L2szczZHLzNQU1lyL2NSazJUWjdIT3pmbVJMck1WbUJPWUVRUXhNRHJFQ1VnSlg5VWdtajFWVllYSjdIMlFjVzBUM1p4MTUrQzROZWhoU0xTTGlEaEFpSzIwaTRnM2FyaFNRaGFNcVJTWTVNVFBIWnc0VlFCYzBzWld1UU5ycWlCR3FNY1p5QWNhTHNOc1RXNG52aFRFVy9XVVprU0FTbEtPRm9MMks0OERkc3QvSEgySWZNNWZGbnBLMk9QSEx4M2o4Ky85em5ucWxmNjNmSzR3REE1d0g4Q29CdlhpUnpKV3UzbG5ZR3czbVZKTkJzNDEwRkE3VndBb05lZ2xldmR0QnBQWStUeDFjZ09BbURFNEJzalpEckV6dUZEN0FCN3FDTm5rMEo1OWdHMTRZbVZmWTBjbkUzcmdPTFJ4NWZlVzZTNm5ZQ1Uzby9BbHZHZ1d3QmwwZzVEMmo3Q3p5dFM4UWdUdHlkZ3NFK1oyc05ZV2dQNXg3bzROU0ZlYXhjejNIdDFhdllXNXRIRzh1QW1ZTm1obEFHNlFnV09nenVFOHpPRU5sQVE4TVVOeFY3RVphNVdFV0VFTFg1bThvWWQ2aDFZSXBDYzMyYXRrNTNqOXVKNnNQaThERmNPNGNGdHBoQmlyRzRkR3hqTTZOZkM4L2JPR0xndGxwdWFrKzZDZURuQUZ4aVNINkM5ZFB6clhTWGlaQXFoWlpLMEZWdG1EUUJ6eTJqdDNzT042OGRRN1lIQ1BXaEZZMU9oY3EwamNhek4yRldhY2VEZ0VmY2lHNDRxaHRRMjdVdk8xRllmb1h2ZzVrRGtxQUdJSDhuNVBJOXNpS3dxbTE5SmdaUkFrSmlQUXkxM1ZjTHpHMGtxZ3ZGSGZzOWJvTlVHK0FPWUp1RElFaGdrRUtvQmFFdVNCMERaNHZvU29JSExnengvcS92NCtHdjJRSXR2SXhjcjRCbEIwUkRrRkpRYVJzTEM4ZHdkdms0RmpxcDgwcnNFbXdLUXRKd1BFQ0MzVDFsUjBYQm5JMTBta3FsbTJHc0NPRllzVWd2SmhsOGowWnZnRDdDWUZJNGZ2ejRwMy82Wi8vUjlWbXZpTVB5T0FMZ2VRQS9BK0RQTW1ScFdjbUxONFhmWlVTSURNQW1CWkkrUkFuYTBzR3R0WE00dnJTQjQyZDdvTmFPN2V2Q09BMjI1cnY2dE9Xd1RmL2U3MFJvMDJ0d3JkMjJ2Z3gzNURYSWxGNkZTcjZkZ3M2R2tZVzJoVjV0V1pTMUNUdFpzQ2psVmxZcUVMZHN1S2dzYlUyd2QxR1JzRG1KM2FYQ0xoOWpRQmlNTHNRa1lOcUFrZ3pJMm1paGpYdnUwVmcrdDQ1WFg3aUJteSszME1JaUVqa0dvK2ZBeE9pMFd1aWNZS3h0NzJKOVp3L2FHSkN3MDM4dVczWkNhanZjUmxpRWR5NmI4UTIrSmFObWd2NjE0UGdVeDIzY2piQ0JrZlU1SjFNbC8yRlhLRlpwS3NmbnUzLzl5VTkrWXVhTGczRjRaZ0Q4R29DL0FXQXRnZGxkVkhRRnNCdmNBTEpOa3F5QkZpUGxjM2p4eHYzWTNKdUQwWU94THZoMnc2N0RtQUFkZVk0eGVtWmhranF5YjlTSlFCVG5OcmdMVnBwamEwUUNNUUdjQXBRQ2xJQTRCYkZ0VmlWS3dkeHhucU1ONFJhRVdqRFVjdDlMSWRRR2M4ZUNpK3dYcXc2QWx2TThQUWl0MllaY1dvSmdHWUlGSk5URlF2czQzdkxPRnQ3Ni9oYW90WWxVYjZGdEJtQmptVCtWcGpoeGZBbW5sNWN3MTdia0RydDZrRGJONGg2VnJRT3VPZE0xcU5tV0d4M2tTc1pVSktZRU10YlRqRHM5eGJCaExmOWhuM1N5d3NYVFoxNzQxcmMvOU9sWnc3VGJCazdEazJjQS9pMkFId2R3YVpIMDVRWEdhN25PQWM3UjBnazZPb0doQkZsckFjUCt2WGpsNVVVTTlxakNpalN0Z1g4OWRkdEd6NFFMdTlpRlhtUW1maEZieFpUaWk2cWhIcnZ2K1Qvcm9LbUViYVRBM0FKekFrSnF2eWdGb1FXaURoUjNISmdTQ3c3VkFubVFrUVdjY0FLaHhBSEpobXZnRmtoMWtLU0NKREdBT29FOE9ZRmhPMEhXMmJOQytyMTdrT2c1bkQzTGVNOEhUbUh4ekJEQUNscllRcDczSWRTQ1VpbVdGeGR4L3VRSkxDL09Cd1RHbUxIbW10QTdndHFPc1cyc0JmVS8yOFU1WGNPSVVKTUtkbVFRczgzMWxrOHUvL0xhMnRwZ1A1ZEVjZ2N1c3d6QXJ3UDRjd0IrOUxnUzVFSnpmVE04b2ZJdUZGckkwaHdEUlVpU1k5aTlzWWlWZEFXdEJ6TjBPcDNHV1o0MzJpajBFazEzbjhadEJlUDMxSVN4dGwvNUo4YUFtSjEzRHVKd3RxR1o4VzN2aGtDa29ManRXSzNVdlQ3WnJncXhDYnBiVEdndllIYU50Y1c5a2wzakxFRG1QR0FVc25RVG1WcURGZ0xwT1hSSWdkVUFwQlZJRTlyekJwMTN0SEh0aHVEcTVSNTRtR0JnQ0IxbGM1ejVUaHZ0MHlmUmFiVndZMzBEcHFkdHg3eHUyQnBYMmVvV2dDZGM1MkdrS0xCUzBNc3MreHlWRE1keEtybU55eVZQSFYvYWVlZTlwLy9HdmNjV3N2M2RTdy9wSW0zZ3ZobkFBd0IrSkJkNjdKYkdvLzFNNXBrSUJuNDFpTURrUTZ4dnZZQzMzZjlGWExod0ZwMVdIeW9kd0tBTkl4MUlzZ1doWFNpOVdLR3BSNi9oeVRLOEUwTTJxYy9zUzFtc0pIS2Vwb0gyQkkyY2xPWVZJZVhpV1ZOVTNrdFJEUEozWDdhaG1FRFpZSjRaUkNsRXVtQlc4Tk1reE1ybUtLNzVVOUFxNkhrQnU1b09GVjNpVmMwMGNoTU55bDJzQ1FRS2hreVJiOEgxL1hGeGFBUnNYR0dYVzFoZFo3ejJnc1pnTFVGbVRnQXFCOUd1clorWkJPdmJRMXkrZFJPYmUrdm85dzJ5WVk1TWF4aXRrZXNjSnMvdDF1bmNGcXN6bmNOb0E2MXpaSGxlQ3E4YlUzU0xtQ0JmUXJWL3VIWXVxQUNhUFErcWlCSVUyOXlPaWFBNGdVcGJ1UGpnSS8vbEQzL3NBOStlN1c3dnpScW0zU21QRStZOEx3SDR5WVRraDA4bmxLK0EzdEhMOUx4aWR1ZUlrTFE3T0Q3M0FGNStaZ3M5dVlHSEg5TG9tcllyOUcxQUd3SmhHZUxhVnBvaldibnRVQXkxR2c0RjRuYzB0bFl3cGpkcUJEaHV3aldnbGFzSkxNTVFnWkVVSHNUQTFtQ0lXMkRxUU1UZTJVa2xBQ2xvN2Q0ekoyQzBBYmFkQ0hia3dKSUdKU1ZRRzlWMmRSOVh5b080UVlvbUlpVUh1YmtrTzlOREVKdzYxVUZydm9zWHZyeUN3Y290SkpJQWtrQlJBcTBNbG85M2tMUk80N1VWaFJXelVTN1JoVzQrZTRHZUdnTGh4ZkdMNW1zMXZlRDc3SFBEbXFjcGlRRXFldks2N2E3Y2QvcmtuOGwydDN2N3ZXUU9EVGdlcFRYUEl3QmVBUEFYR2ZKRHB4UENUY1B2R0JyTU82RWVpQkYwT2t0SUZqNkFsMTc0WllpNmlrZnVBK1lUQWxNR2szVUFTZ0NWM3pHRVY4TW5mL0g0TG14MmQ2eEo0RENvem9hTTFuRU1CUU55N0R4Q1VYaE5MSjJMRmtpbFlOVnlZRXJCbkFEU3Rrd1pXYUFRS1RlQVJpQldnTFF0UkloQnpIWW9nbHhCMmRQbmJsd2hXRkR0dWhpU2tURm5WSUJtdTYxRjNEZ0Y5MkYwSDNOemdrZmZ1NFRudm5RVnZXc01saFBJcVExUmdFRWY4M010WER4OURxbFN1SHo5Sm5MV3lKdEd5aXU3Ynl4Y1FuMjFXY2tlYXFyVHVGRFg4Z0hsdkJTemJhdTZlT2JVRjMvbis5L3h1ZDZ0bS9LR0FXY0tWZjBpZ0o5a3lQQk1pM0J0b04rUk9mQW9ZbVJpb0JjWGNDcjlPbHg5NlRmUmFiMklpK2VCT1RwdUw3WmtEMGI0anIvUkluRWszd1VnWmZneTRTVDVEbUtmNjR6VW5WaUtXUjRMRmpjMzQ0dDFxdU8rbDRKVUN1RU9JQXJLVmZ1QmpnM1ZpS3hIQWJsY2lLMVhRaWZvcEdDQXJPZnhmVmltMG01ZVNqUVJNMGhSVVFxb2hMZ0ZXV0VjSUx0Z1YyQWwxWU1oZzdrTzhPNzNuc2R6V01YYWxXMHdLUmhSdHA0RVlLa0RxRE1ud0FTOGVuMEYybWpvWE5kZXl3UWN0YW1SUWJQcDY5VzFycXM3ZzN6VVVGUThiUzdKU3Q3OTBMMS9yWGZyWm5hUWErWFFnVFBHOHdEQUZRQi9uU0htWEl2bHhsRGVtUXZOaXdEQ0dqbnZZWjVQWUZuZWk1Y3ZaUUJkeDczbmNyUVRBK1VhTHdGQWExMUp4bWVsbTcxSVJKMytMVDJPOXk2K3hjWVVFNC8rOVpyeW1MTGIxeFFMYk92aGp2MjNuV2VIc0syOVFBRksyUXRSV3JhZ1NTbkVVYzNnRnFBVWdBVEVIUmN3c21zWWRZQWhnaUtycDBDa1hOdUxHOE1nQmlsbG1TUFhXeFF1bXcxWGpJQ3J6Q1hDbW9yYWdTQ0RvUTQ0VDBGcUhvb1N3T1FnTU5LVThZNzN6ZU9wMWpWY2ZmRW0ybklhb0E0RU9ZUjc2S1FKenA5Y0JnRjQrWnFCYUlPaEdPVEdJRnpYNFptMGNpNm5xdmhaMUdSR2t2NVJnZmp3UEhQd1V3cGFrODZjV043TWN2enlRZVA4MThQajFNSHpkeFNoZGE3TnNwTGhYUU10ODRvSkNobTA2a0hOTFdGaDkvMTQ1ZVduUU9rcnVIQXlRWnU2NE5UZXFUenJkRGdlaG1wMWx4STAxU3EwQkRsQjA2bytMa0s4cHVLckVkOFIwSEp0THdwQ3FXMmlKQVZTYlp1VFNBSkNDMkJiMVdkcU9acTVYWEpMUWpEaXBrT0pMTjFNYlVjRStQdXFhN2NwK0hBVmVFRmYvS3oyZmhYRGY1NEVjUDlXbkRtYXZRVnd5eFlzS1FVclFPc0UwQnFkYm81M2ZlMzk2SFJ2NHZKVE8xQkNBQXY4K3N4dXE0V0w1MDVETWVIUzVhdlkyTTRockpCRGd3blFrQkVSd2xuck5CVlBVMndJTEZ1RS9YaWpEWE1ackJpSlNuSHgzTGwvZmV2V3pSZHc0Y1FCMCtJN1NQMk82VEpsQU84QjhFTUc5TjRiR2Q0OXlFMG5JWUtvSVRKUlVLYUx2TGVLZ1R5TEMvZXU0UDV6aE01YzN0Z0I0Qy91WmtrbWFmejkwVnhGaW5rWkNaUlViSjJGaWx0eStMZ3dMQ015WS92V2lBamFOMSs2R290UTZscG1VanVZeHV5QVkrc3VwT1pzVFlZN3RsR3owR1h4VkRKZ3lMZnR0RnczTkxtZU5TN1RaSmZ6R0tlaFlOK3JlNjVTUzhwSmdZeGJXMkpGVHNSMFhVU1Z3Y1oyRE9nMmlISUxMcE5ENTR5WG5yMkpsNTYrQ1RJdENIZmM4QjFCakVhZTU3aDVheDB2dkhZVjY1dGIyT3NOa0prQnNpeTM4MVc1Um00MFlEUnlIYXJleU1qR3ZYTE5DSTBNclpYcU5Rb0tyaDJJQ2FRVVFBcm5UeTV2ZmRQWHZPZWIzbko2NmRmM1UvUjgzVHpPbUxETkFQZ0tnTC9Ma0krZlRvbFhUZnBPWktxVE05bjVITlZIRitmUTNaN0gyc3RQb3N2UDQ5U1pEcnJkYm1ON3kwR2JBK3FqczlYd0NrWENIMjRscTRQTzA5VWpZVVhRRVczN3lXeFNUMUMyWU9tS21YQTZBVXllaW02N0RnRmJYR1JPa1JzN0VVcENNR1FKQVE1b2FUR3B2V1RZOXJDNVFRczc5ME11VkF2RE13bmxkaXh3cW5yZlVvd0xrTFJCa3RvdVBOSk93aXUzTEYraVlKQ0JxSVVrYnlQbEhJKys0eVF5M3NXbHAzdElUUmRHRDVHU0ZTWkpsTUxaRTh0Z0FwNHhHbG1lUXc5UUV3aVJTcXRTcVE4eEpxZWhocnlHcXQvMy9XaHduZnIzM1hQdVY3cWt2M3c3MS9ickhhcUZSZExmQVBCWEU4ajNuV3FiYkZYaGF5U25UbXJhWUFKeTJRRVdnRHgvUDU1OTZRejA3ck00Yy9FWTFGd2YxTmtCOHhCS0t5VFpNc2dZU0xJSkliRVNUQVFvbzVCSUFwWGJEbTJ0ek5pY3FLb3BiUHVYaWp1YWdRdHRIRm5nMnZ6TEZSSGwzYjhRK0NNcTZpNUVCUENjOVNqS3Q4RWtJTEt6MUZabmJoNUFBc09wYll0eDdUR2FVbWhqcVZtbGtqSi9wZ1RFRmlBR3NIMXJwSXJ1QWh1YUphNS96TldGWUFyaE5jOWNGZk5ETlc5ajk4N1llTWNZS1NlaktBWFFnbks5Y1BZWXpjR0lZTmhHVVZ0NjZCMzNnUGc1WEh2cWVaQmVoSkVGKzduWkFPa2Vsay9NNFdHNWdEeExjWE40RTRraURMTSttSzErbkFCZ0FZeW9RaFpzbkRJNG8xclVoT3NZZDlJcXlKbVF1UE9yQ0RqV25ldmRlK0xrMzc3MzFQTGdvTjdtZFFQT0dNK1RBWGdLd0Y5TFlGNDhsOHEzYnhLOWUzMkkrd1VnSmhzMnRkSVVTczdnbFd0NzJNQk5QSGovT280WlFvc1hZU2pCTU5rRmtVRXJYM0IxRWpmdVN3WkVHbEFETjdISURXeVl6MjlLR2F0aXd4eVZvdVVnVThtQnFCU2g4WjNwaFhleVAzQmR5eW9GS3dXRHJzMDdXQUZvdVorM0FHbzV1bm5PWG5TdUo4MjN4REJTNXh5c1NnMjdJUjdpeEJJRVR1S0pxRzI5ajlPdGcvTmt4SzZSa3hoS3BXNnEwc0NZckpUWGN1d1Z1L25oYXF1TU9LSXJDSXVjaW82SVA1WUtYTFR5MnpCU2NZcUgzL0YyS0U3dzZsTlhnZUdnWEJHb1VxUUpjUDdVQ1NodVF5NE5jWDFseFhXTTZLS0dFK1lwVS92UlF0Q0V3NEJFVUs1bVF3d3dLVHh5MzdrdlBiUTg5MTl2OTVwK296eE9HTGE5QnVBZlErVHlNU1hmcTlxY3IyZjZBU05JbEdJclhaVE9vMzNzcmRqZFRQSHlwUndQblRGWVdtUndSNFBVb0dDY2ZEaGo3MWs1REJtSXltMzFHRngySEFPVnYvdGFSOWtRYUlyNUVrOUxFd1ZkeTM1TzNlVkFXbnk1VG9FcEJhaGxMMlpxVzJCUTE5SE55aVh6UGt4cjJRbytXVmJNQTRmUXR1QWdCUU5DUXFXYW0vV0lpZk1xTG95RXJmdllQTWxXeSszenVQSUZ1MEUySjIxSW9xcHIxUDMwS3NvTkJjVnhZajhmUTg0N1VXVXZqejBJNHRkTjJES3BHS2hXQncrOTgrMFlvbzNyVDEwRzl6TVlXQThyQkNnbE9MbThnUGUrN1JFTXN3elhWMWNjOVcySzgrSGxvWm9BVTIrZlFSRVdjMUQ0Qk1ncENERXBuRGwrYk9jdDk1ejkyWVZPZS9OMkw5d0RUWUFlMUdxVG82RU5BYndNNElVRWhoY1Q1cDdCaWR4SXk5YzhqRXJSNVNWSS94aldkd2ttNlNQdDdpTGgzTjVuMmFsWGdvc0RMNzdwMGpVZUZzT2ZORnEzYVdMRmZEOFRzM0VnS1lVMUtOZ0hpcUtHa29KVUI2em13TWtjRk04QnFnT1JEbGgxd0R3SFVuTmdtb1BRSE1CdEcvcnd2T3RnYm9PNDQ1b3pXeEJLd0pRNmV0azJleEsxQ2cwRnVNWk9VTHNFQzdmY0RJNmRCQ1dWRkpPa1BoUXRpQVBQNm5uM0dYaVdzalZTdVNsVHRpR2YrenVnbkhhYiszSkZWOXNDWk1GTnJIRDgxREwyOGh6WmRnOHkxRzVLbFcyd3lBWXBLOHd2THVEVytnYjZnOHpxMElsVW1qK2JXamo5c2VkUUFxcGdPN2tBbE84U1VLMFU3MzNvL2krLzY4TFpQNitZTjI0blRIdERQTTVqano4eGptM0xBSHlCaVc0Qzh1SzVOdmRYaHVhREE0MWpTb0JFQTZJV29Gc2RHTlBGUzlmYTJCM2V3TVZUcTVoYnpKQ2xlMkMwQUF6dFJWVVUrVHJnaXNkb210V3BWcW01YU0rUW92cGNvVDZKS2xWMlEreEdsbHNRNm9CVUY0UTVDTGRkNjcrbG1Ja1RTek9ydHN0dEVoZWxwL2FDWXdaSkMyQUZJL1pDWmVaaS9vVElUbnBhZlRWMjc4VU90QkdyQXNCQ0NoVlZ4b0JLRnhyVmQ2b0ttbGVQaFEzM0hDSGpiaForc2hUTWxRdmFqMG1EYkxHV0ZLT2pjanp5am9meDFGNk93WlZWREhxNVZiOTJRVUthcERoei9CamUrZkJEK0kybm43VUZVdkU2REdaa1dTRUg1SkJmcE1WTVJRMHRQSWNXb0pZQlBiTzR1UHZ3aFhQL3JKVWtWdy9qT241ZFBjNE1ua2NBYkFONG5pQ3JDNHFPTVZFeTFHbzVFVVZhWmNpVWdlRjVKUGtTQmx1TXZaMGVrR3BJbWtJcFpjWC9rSUdWY1JkZFdzalNqckppNVorZWV1WktUeE5WNkdwUDc5cUx2bXltVktvRDVqYVlPaUR1UXFrNTYzbTREU3VvMXJVZzRWYmhWU3lvT2lCT29LZ0ZUbXhpcjhVRktaVGF2SVV0QzhmVXNsM09sTGhrbjkyTWpnS3JsdE1VSUJjT2hrbFlJSk1Ec2w3QmhVemtQQWpCRndiWmVaalFHeVZGN2tUT2cxbE5BL3YrMkJWdWlYekxqL1ZFcE95a0swaWgxVXFnMm94YnEydVEzc0Exb0pianpBekMwc0lDVEs2eHNiMkx3YkFQSmd0Q0lxNkliaFRuQmRYK013K2tZa0NOR01SV3JtdSsyOG5mL2REOVQ3L2ozS2svcjVoWGI5ZmJ2S0U1em9RT0F3RFlBdkR2QVZsZlZQajlhREZ2RDgxRkdKMjAyRHB2Vm5OSStBTDIrZ292WDdxSll5YzJjZVlld3VKaUh3bDJRRTRLU3NUTzFsdktHTFhpWmtnYmh4dldUQzJ1NWtCOXBxenJNUGtSZ0xhYmliRjVqVkRpS3Y0dHNHb2h5KzNjQjFNSzR0VFZWUkxiZzBkV2FCQXU5cmZleFY1NDRrSWdJNVlNZ0xGMHRKZW84bUVXc2UxS0VEOW9UK1h3bHkrSTJpZDIzcU0rNlZJcDd0YkgxTzFnRER0Z1Nabm9GUXIvN0x1US9aWUYzeDlIQXRFTWdjYjVlMDlnODlacHZMYlZBdzFNMFRmbk85UVVLengwNFI1a3d3eGZlcUdIYkxpSGxBbTVVS0V0WHQvWDAxUmFDT2VaMk5WNTd6bDVZdVBEano3d1V3bnpTemlrWGNxTU45Z21JTDRINE5NQWZucFI1Zi9vVE5kOGRrR2wxemhMa09aREtPcEJLNFc4ZFIrQVI5RzdkaEpYbjArd3NjTElNN2dSM2d5MnYxY1hRdWxpVnlRNGRadHlDMWZ4SDVFdDJqRzVMeGVxc1ZWRGthSXFuOWlHektUdGFGcEwxZHI4d3pKbWhoamFFQktWUXFVdHNMSnJOWWp0WFJ0T2NjWk9ZdHJ3eXlyUXBGQXFjVG1FbmNjaDEyWURWd2RpbFNCUktaSzBoYXFrVHlpdFZmOGJGV3liOVdTSis1T0RMMVg1RXM4U3F0UjVNK2VGbEMzaUNyRVRlQ2NJTXd4N3dRN2I0U0NVUWlVdENCazg4dmFIc1hEdVJDSHg1TUZqdmJmQlhMZURSKysvZ0FmUG4vUDBwcHNxUXRGd0svNDdORG9pN1NjN2ZUNHJSSmp2ZHZLM1h6ei9YeExtZit2U0FkeTFvZG8rUWpjRFlCWEFWeGk0MldWMG1DWHRDeTFvbXhtN0crWWNvTTRpMnpQWVh1OUQ5QUJwUjRNU1FwNG8yRVlXZ1dGQ25qQTBFNFFUSkVpUlVPSjBxN21RZXlyR25KWFlMN3Q0eDFIR0NZeHFnOUk1bUtRTHcyMkk2a0FTK3lmVUhLRG1JTndGa1V2NlZhZm9HQUNIdFJ6YjBwOXpHN3JvVDdQaUdzYnZ0QkZWN0cyeERzK0NpLzNGalRDc2NpR2NNRWdTa0NpUUtQaTVIZmpRakpUVDRuVUtPWng2YlY2QUUrdnBLTEY1RnFVUTFYS01uL3VaRTFTRUM0Yzg0MUp1bkNCSFZ6UEk3UlpTbENKTjJ1Z3VMT0Q2dFp0QWJ3QXhpZTI2QUp5MHI2WE5PKzBXYnE1dm9EOGNRb2t1Tk1BWnRxQmJqZ3A0R1MwdU9pSkFqRFMxdWFCS1VsdzRmKy8xajc3MXdSOU1tRjhjZCszZHRjRHhIMkFNZ0FUQUxvQkxBRjVzTWFqRGFBc2g2V3V6cUppdHlLQmlwRWtiTWt5d3M2N1EzMnJER0VhN0xVaVl3R2lCcEEyRkZsS2tkc1VJOTBESmppTmxsRC91Ulk1Z0svUEt4ZjNXazloK016Ky9uenJtcWxYUzBQQlV0QTNUbUZ0UXF1MHVORHN5NEZWcTRNQURkdm1aU2twTk1BbTF3UnhyeDRrYkszQ3ROejVFcW5pVTBuTVdmM29HTVBBMnJMakNwTlZESHQ4VTZ3RTZkaWlRSm5jc2MvRHVJSXk1eFNYMGh3YWJOMVp0dTQ4WG1JTUhuV0Mra3dKaWNIMTFEVnJuRlZCNGtjZWlMQkRXNTFnaFNTd3hvbGhocnR2TzN2Zm9XLzd1eGVNTHY0QnczY1Z0NWpkSENqZ3plSjhjd0RVQVgxR0V0VG1tdVZRUlo4YWtoamtaa0hDT09hamtKSmhPUXZJdTlqWUl3NzRCdDNJZ3paRUFTQVJJUmFCSUF5eXV5MWpaKzJRaFd1am9WRXJBc0hrSmMycVRmWFppRjlTeDdmT3FCVkRIVmZ4OXd0OEJjOWY5YVQySGNWSk9vTFFBRnJFTmR5eGI1Wkp5S0RkMlNVVkNUejVjWWgrKytZdWVDOG9ZUWR0OGhXUG5zdG1UL0lpMW00UVVHZVhsT2Vna0lDS1FTc1BxU1UxaTFxOHdxQXRKbHV3akZXUURDbTgwdDdpTW05ZXVRdloyM0g0NUZQbVRmVWFEaFU0THUvMCtOcmEzclQ2Qnk2V0tnclgvZUM1L1UrNnpKWWw5djUxMml2ZS81YUhQUHZiUXZYK1dDVGNPMDlzY1NlRE15cm9CZUtGRlNCY1RKa09HRFNRVmFyVnlwTkF1S1ZmY3d0NU9pcDFkQTI0SktORklrejRVOTJ4YUttMW9zK1N1R1ZPZUVQWmV4b3BpTUxkY3dkTG1NdVNBQW01QitTWkxhaFcxbUVKVkJxa2pBUnp3VkF2aXdRSVZlQnd1MW52WW42RUl1ZXpBbTJPcTJCVS9IVlZka1h5cVRPZTc1VkUraEttemJGUXVRNnlMWFJUTGNWMlhnTzFTS0QwZlZid1VqZnlkZ3ZkRGdSZjBIZVJnUnJ2VFJwWmwyTHB4QlZyYlhDaGNPUzhpU0pWQ21pUzRzYjZHd1RCSG9nakdXQVVzQ3JiZEtwZlhNUHN4Q2dXVktKdytmbno3bys5K3k1OWZTTk5mcm51Ynh4NS80clpBYzJTQk15VjA4eldmYTY1bFo3ZEwxSjBqMHBrMjgwUFdIVU1hUmhHMDZrQjRDWlF2WUxDVklqZGRTMTJyUFNBeGdPdEtackw3UFVYRTNZMzkzVDUxdEd2TEpyQ2tRTlNHSVFjcVRsMCs0TUJWTUdxdDh1ZU9TTEFEVktsajBsSlhPRXhjMktRQ210dHZpMU9GOTdDL2t4UjBzbkU1bVJEWDd2YWxwNkxBODFESnR4ZkZ6S3A4Y0hXTnBLQ1VpUzBBUVVIWVdPdnhJeG9GWUVrYnc4MGdvZWp5QmhNV0Y3cFl1ZndxK251NTFXTmpJTmhMQVFCb3FRVDk0UUEzMXplY1FINHBNaWd1ejBuY1owb1M1ZWh2UXJ2VHdkZSs5ZUgvOFBaN3p2OWxNWHJyTUQzTmtRZk9qTjVuQzhCekFGNVNCTFdvUUlJODFaUzNEVGd4U0dIUUJ0TVNPRjlFYnp0QmY5aUZTZWNoQ1NESWtLaStuWXVCc2lRQUFhUzRZSS9ZOTRXeHJadHdRRFhiTG1jbmx1Rkdtc1dCd2VZd3JwM2ZKKzNLZVFHZnF6ajlnS3JIY01rOUJSZXU2M3IyV3c3Z21UMFBFbCs5TDd3S0I5NkZBazN0TXBRclU2Z3lvUzl5SktxOW4rRDlWZXRnWEcrRWFRQ1E5ZVJTZEJ6WTdXdnRkb3J0OVRWczN0Z0NpSzF1TklmN1grMXpKNHB3ZFdVTlJsc0I5bEp4eUI0alJhNVl3TGJESkUxYmVPajh1YXRmYy8rOW41aFA2Q3QxK3ZsMjhwcWoxS3QyR0RXZlhWZ2h4SmNBZk9Ta1V0KytKSGpYclJ4dkdXaTl4Q3lVQzJCVUc0eXowRnNMR1BhV2taODdqNlhqTjZIYU40QkVrS1N3Y1lEUklHUGNyaHBqazJRS2xDREpibi9qUW1oUUZSZTVVTkFZNzlaMjFMY2FpVnNrWlJraDEzMU1YQTNQS3FHUjNjcGQvTnlIUFVYUEdBZEVBbFhJaFhMVFExblJxVnhGUW8za1FGbkRPWXlTaHdUZEN6NFV6UUhST0huMk5GNVdWeUJhaWlaTktVWWFiQmY0c2NVRm5GbytoaXRYZDVFcUxrZ0xxUkFoVW5SMUxIYm44dmM5ZlBIbnppMTJmZzNsTXI5RHR5UHZjZmJoZlhaZ2hVRytvZ2c3Q3dubEhSYlROOW14WExKRUt3MHRLWXpNZ1hRWGVoc3cvUzQ0T1FtMENNUjJCUVZEUXptTkN5Tituc1ZpaWtuQlVBTERTY0dxMmZESzlXZ0ZrazAyaHlrcW1pNGtWMEdTcllvS1JmajlpZzYvYTVFWFZ0WXJNZ2ZlZ1FzQWNjRTJCYVc1VUdLM0VuTFZQVU56SVhFMGZ3bTZMU3FTVEJLODk3SXJHVUdEckQ4dTRpZGxmUTkzcTRXWG4zc0ZrbVd1WGtSMlBYMUlSSkNCeVRXdXJheVdRcFVFMTBYQmxqRlZDb2xLa2JaYWVPVGloWmMrK01DRlA4MkVLM2ZLMjl4MXdKa0NIc0EyMDY3QkRzbzlsUkJXdTBraW9LVGJ5NUlsSnBCS0JKb01CcHhpTit0aXZYY1NTSmVSdHVZQXRLRnlBNlVIOXBneklTZEN4K1JJM2FwMHJWSVl0aVNCRWdVMlZvM0dOenJhUmtqWGkrWEhzS1VjeHk2QVpWd3hFMGxKczlyZTViSmJ6SXRwQk9zOExCYWM2S0JyK1NFcEwrSnl4WW00SmNQT2M2RzYvcUljenF0Sy9Qa1F5TGZkV01ma09wWXAwQUx3ZSs2RDhLOXM3UTlKaENETVE3bVB5SkFDcFIzY2VQWnBaTDA5YUU0aGhtejNuZ2lFZ2FFQUxBVFJCdGR2M2NKdzJDOTFuejFaQXFEZHNubG5kMkZKdnZGOTcva0xKMUwrZC9WaTUyR0M1cTRKMWZZWnVubnY4d1VBejZaaS91T3BoRDg0bjZiZnY5WWZ2bitRNjZWRUVjRXRva1YvaUxXWEdObnFCUnc3L3hZc0xHMGdsUmZSTXF0SThoMGsyRUltcDZCbDN2VnBHU2dhd3JDQmR1MHpWanBKNExkVjJkWGpMdlFRTDVZQjEyQ2lZVXh1eDNvbEFiSGRWVm9tOVY1OGowR0hmdVNhdkF4WFE4ckdpWDQxK1NuSC9LQmN0VUdoSmxYRnU4MHZMR0JyZFIyS0daa3BWdWNXaTdvSXdNSmNCNHR6ODlqZDJYYmtnR3N2Y2tJa3VUWklPMjE4NEIyUC9zY0hsN3Ivd0dURC9wMitCdTlLNE13SUlBTmdEOEF6SXViRmpneCs3ZnhjK3Z0Mk0vbzkyOFA4NFlHUnhZU1pqQWg2ZWc2OWRjTDZUZzhMeTNNNGMrNWRXRnhjUndzMzBkRTdHQ29EWm9FeUF5UTVnU1VIM0JKYVRRbFloaEFTTUl5OXkvdVZod1pRS21Dc0lLNFZ5SzRjRkdIcmlJcUNacWhBaWNNRlRsaXpLZTR2Rkl5aTF6WTFWOEswOGJrTzFZcW9vd3BBcHZMNGVuZDZ0OXNGRXhWek4yNGhYc0dhZ1JtS0V5ek9kYkhDcXRpTXg4clMrQXFNcE5YQy9mZmRkLzI5ano3eVkyWnY0OVpoRmpxUGJLL2FIZTUzOHpZRThDemwyVi9wU3Y3NDJXNzY4NmRhNmhrRjJSU0RRVTVENURURW5qYTR0VGJBSzgvMjhNclQ4N2o1NnFOWVcvc0Fodm8wREZvUW8rd3pEUXg0S09DTXdkcnVGb1ZrZ0F6QmNCdXFUUTRZdnkvYVdMQVlEWWgyOVNJTkl4bTBHVUxFSnNzK1VGT09PQkF4dGZTV3h0L2xCYWlLSXFJVVVheURSaENFVUtqUjB0ekk3bzM3R3A4dmpleG1xVkhucnRIR2pSOW9ZMndSc3liWlMrN244OTJPYTRsQ3NjNU9xUVRjU25IczVHbnpkVi8vMkNjVzlqYStlQ2NKZ1RlTng5bUg5L0cycFpnL0JhT2ZXVkQ0N1F1S2Y2OEJuZHZNaHFkM3RUbXIwZTVrb3JDVkoraHRhbXh2RGRCV2hHUEhsbkg4MUNuTUxRSHQxaDRTdFFlbUlZaTJRTFFGd1RFWTdRYm5FbVBsMEpDQ2hHSHkzRjBNZnErbEFTUjMxZkp5VGJoYjhnazdJcTNzNmovWU1NNk9SMGpSczBWaGt1OUVSLzNtcy9MaURQYVF1ckVCdDUrMlVtZHBvcFBMd2lXQzNUck5Ta0hWVFdtb2RSQndJNHpLeHhxWVBMT3RnRVNWa1dlNGpkVnd5anhwNG1lT3hFM0EydEdCeFdQTC9YZTkvYTAvK3U0enl6KzNkWGxEdng3ZTVrMEZuS1lETlFaRUdzQlZBRDhQNEVzTStmaHltcjczV0lLVmpkeWMzc3h3bGxMdTVBRDJDT2liSElPMUZqWnZDVHB6aktVenB6Ri9QTWZjc1cya3lUb1MzUU5MNHU2R0dwSnJhQXdMdVZxSWh0Vm5ObmJOTzRtZCtTZXhwUmQvd1F1N2psNEd0TFpUbEM3VTBWcTdtQjZCWndndWRiOGV4VW5kamc3cmVVa29MemJDVlhvTXBnQUhOWVpwcFRaWkNKd3d4UE15dThSVXFIQXkwMGlvVno3V0FrMFArcTRtYW5mcWtIdVBYTnZyYWdWVXJHS1FuYXBndE9ibThkQmIzL1lyMy9yQjkvM3R6WmVleTEvUDYreE5CNXg5ZUtFK3JOTE9ud1h3YlV6NHpoTXBaOGRUV2xrYjZuTTd4cHpMSVFrcHd0QXI1dlFGRzY5bDZLeG9IRHU1Z0pObkY3RXdueVBsREtRMFNCbW5RbW5BU2pzTm1oeUdiVlZiU0VPRW5lK3dJWlFoS1JrdVE3YkdvV3duTU5qTzNoampRUlpjeDJHRUptVWRvNjZWVlk1TlM3WE9VeWxtcW9hNnppajRHbFZUNjhVckNVVFFoVVlpSnc0K1NON3ZvYmV6QzBWa2UySUlUc2ZhZFVNN2pRTWlRdTRtUEJrQ1VneVZwcmh3LzMyL2ZPTDArZCsvK2RKemd3T0c4Ri9kT2M1dDVrQ3JBUDR4Z0I4QjhBc011WGFxUmEvZTExYWZQNmJVYTVKUm5vdkdnRFAwUmJCckVtejJVcXhjTVhqMXl3YXZ2WEFNNnpmbXNiTjdISVA4SkRKWmh0RWRpRllnYmNCbUNHT0cwSG9BclRNWXllRDNoK1pHUXhzRG1Cd3d4b3I5U1FhVFp5NW5zbmtSUWV5ZllwZFdTU0h4Vkc1a2xpQ1BrRExCc1JKU1lyY0ZBRlJJWDFHdElGcmR3RW1WOWVsTmRaN1MrMGgxNDdmVGdpWjJ4VXkzYmMxV2Z0MDRCUlJnTlBvM3JtQjNyMjlWZlNDMnp6c1ltQk1qTUZyREdJUEIwRTZPSnFsVkFWbytmOC91dys5NDJ4TWZUUGV1dnhIWEZCMjFKVTUzMnFia1FDbnNUcDl2Y2wvbnRhQXpNTEt3UHBSNytrYVdGQk1wZG5Nb3NLTzVjOXhIcDVOZzhld3hMSjVLMGUwTTBXbGw2S2djYVVJWWNHWjc0bFFMbExSQnFnVXRDZ2EyRnBFYVB6VG05S1BGajBNbmdHRUlKVEJpOWRNNHNlTUl4Zzkxa1lJeWFYSHp0L3R4M0ZacXRwM1RJbHpKZFVyQ3dDcjZJT2hnS01KQUNidWZRL2tzR3Rsek9tbFRuaEx0bGwyMTNBWTNBaVJEdG5FRFYzNzFVM2pteFZYWGNDcmxpbllSYUdPUWFhdnVPUndPOEtWbm5zVzFsUlZvQTV3OGMyYnc0RnZlL2lmL3pFLyt0Yi9WdExmelRucWFyMXJnekFBZUQ2QnpBTjRHNEdzQmZBakE2VDB0eHpkenVXY3ZseVZtSW5ZYmx3a0NSUVlKYTNTNmpNVmpiY3dmWDhEaThYbTBGcnFZYTYwSFU2V0FTaGhhVEpHSWF6WG5WR3o4NmtFN0tTcWMySkZydjNtQWxSdkhUZ3ZnRU96UVdpVmE4Z1ZTSWllaHEwWnA1Z0E0cGhDTVp5aVZWSUZEcGJaME5iRWZYUmJjZEMyeENCZ01VY3B0cWhMb1BNUG04OC9peGM5OEdyZDZ0anZhR09zOWpkdmdac1FnMTdibGFXdG5DNy8rbFdld3RiMkZ1Zm41N0QwUFAvS1R2KzFyMy9rVGc2Mk4vaHNCbXE5YTRPd0RRQVFycy9sMjU0RStCT0IwWCtqWWRtNU83MmxaRmtHaTBRSVRrTEFsQUJJV3RCV2oxV2xoL3NSSm5EOURtRnRlUXRKV0lCNUNjUTdHRUlRY3JBakRkTDVjejhITzYxRExza2pNc0tsVE9RaEhLZ1ZFV2FGRktXZG9mR0ZRQ2swQ2NoM1pxdGk4VU9RMkFYQUU5ZzdQYm55aERxeW1Pc3c0c0l3UUUwWkJNU0NjUTJNSUNORGIzTUhsWC81VnJGeTVocjNjamwxcm8yMW9Ganh2cmcxeW5lSGF5aXErOE96ejBGcmpyUTgvL09YZjgvNTNmbXZlNzEzRkhXeXBpY0E1SEFBeGdFVVh4bjBJd0RjQXVEOFhMUFlONXRZelBqOFFMRUtFRWdZU1pTVm5DVUFyU1RDZkdzd2ZXOExTbVpOWU9EbVBkcGZRVGpXWU14QnlVT3BDSkQra3htNm1uLzBGbjlpWkZkV0NVaTJuOXFuS1BaNXNPdy84VUpoVTVuRFNRb3pEUm5EMVVNMkZZaEpveE5XQVkvWHFSamN4TklWbjlYMm9aRkl3R1JqYWc1WSt0RFpZZmVabHZQWWJYOFRlWG82QmUxMXR0TjAwN1dTRWMyMlE1Um0wenZIMGk2L2cxUnMzY1ArRmU1NyswRHZmL2dmUHAvSWJxR2tWdnA2Z2ljRFpQNEFBb0F2Z1hoZkNmUkRBV3czb1ZHNmt2V1BvWEMvWDh3TXRpMWF6a0pFd1E0U2hFa0xLZ2xhTHNiRFl3Y0t4ZVhTUGRkSHV0akRmRmJRWDVrR0pLd0F5Qi9WQ2hrbm1yTlNpQytmWWoxMDdtaHVzaXhXRzhQTS9ub0wyUUd6cUNCQXFSaWthZjFiUGNUQzVZN3B4LzZsSm5EcG5EMFlQc2IyNmloZC81YlBZdXJXRFRMT3JWVGs5TmdHME1mYmYyaURYR2pzNzIvak1WNTdGNHZIbDV6LzZyb2UrKzhHNXpsZlFNSmdXeVlHN0o0UkxBWnh3WHVnRDd1dWlBZWFIQm9zRExZdTcycHp0NVZrcTFIVmVTQ05SQUl4R29nanR4Q3I0TDdZSjdjVUZkSllXMFZuc29yTzhoTG1GT1NRdEJTWWdZK1VtSk8xZFg3RVBxY2oydnNIV2lteUIwT1UwZnJVSE1VUWxZM09jT3cwY1MwOWJWckMvdFlHWG4zd1NOeTVmUlNZTVl4d3BZQXkwR0JodEJkK0h1WVl4R3JrMnVIVDVOYXozQnBmZTkrakZiM3Z2aVdNdm9LRXpJQUxuN3ZSQURLQUQ0SUxMaFQ0TXUvOW5DUUFQaEpaMmN5eHRETE43dERHc1hQaWxXTmwyRTdKTG1GSzJRR29wb050Sk1IOThDWXVuVDJIKzVIRzBsK2JBVHJuRkVoSlVKT3hHTkhKb0pOeENrbHJOYVdQS3FWTUxuSkljS1BmaUJOS3hmT2VBSXlMUXd5RjJyOTNBMVM5OEhsdXJ0OURMRFRRcFpOb1MzOFlZYUcxSkNtMEV3eXdERVhCOWJSTTMxamRlL282dmVldEg1aGxYRGxodWlNQTU0Z0R5Yk54eEFHOXhBSG9Nd0JsWTRRRWVDQmEzaC9uU3J1RjdNbTM4dGlxb0pMWE1IQVNKQWhLMkF3cXRSS0hUYWFHNzJNWGNpUk5ZUEgwS25hVUZ0THB0cUFRUWs5dGFpWEo3TFZWcXh4UlFhZ1VJT2NtbjBGa1dGZjlRVE52MXFCVk56RDdVazBKVVhSQVVXc3RZeksxVnR6VWNWbTZ0dkZoUHNyZStnZXRmL2dyV0xyK0tmSkJCQzVCcDZ6YTA4VTJ2UUgrWUZjOC96REpzNy9XeHVqZTg5TEdIem41MG5uSDFLSUVtQXVmT0FjaXpjUSs0WE9ockFUemlRS1VBb2dGb3NhZGxhUy9YUzczY0xKSzdWVnQ2bTl4R01TcUVhaFFCTFVYb2R0dm9MczdoMk1rVG1GdGVScm8wajlaaTE0S1BFN3ZTdzR1aHc2dkhxRWIyaXdzRjBKSVE4TC9tUTBNRFV5MlRTM1dDcDJoR0pTN2FhTExoRVAzTkRheTlkQW1yTDEvR29EZEFwclhiVDJyWHNodXhCVTZCeGpEUDNmY0Z1YzdSejBXR3hQL3FBL2VlL2pqdmJkMDZhcUNKd0xueklDSUFMUUNuQU53UDRKMEEzZ3ZnUVJmS0tiZ3NZMDlqdVplYnVWMXRsZ2RhNWhMRnhLNHZMWEZrZ1dnRHhZQWlSM2UzVXJUbjJwaGJYa1RuK0RMU2JoZXEzVWJTNnFBMU40ZTAwMEhTYWdFS2xWMm5udjBxMTVyNDFwMVI5Um9yWU9MYmRSemxIVnd6UmhoNWY0aDhrQ0hyN1dLd3NZbnRHOWV4ZWZNNmhyMEIrcm14UGQ4RllHeG9ac1R1M2hubTF0TVlZM3NnOWpTWmhmbnU0MjlKODc4SllIRFVBQk9CODhhQXFBUGdKSUR6QUI1MUlkMERMcHhiZ05NT05ZSmtJek5uTXlQSmJpNW43ZDRkb2xUWjRUWldiTVg4aUtBSVVHeVFLS3RnbVNZS0ttR29KRUhTYmlHZHMwVlkxWEdnU2hJcng1c2tJR1ZaT1RHV3prNVU0aFk4aFZPaTRwdVZpNlc2UGd6TGVudlkzZHhCYjIwTDJkNDI4dDRBZzhFUXcyR09vVFl3cG16bE1XSTNjNHZydlN0cFoyMDN1dVU1S0cyLyt1aFMrM2VtSnZzS1JsZmpST0RFVUE1d25tZ1J3REgzZGRwNXBVZWRSem9oZ2pZUktTMlMzQnJvczFxb3ZhZmxsR3Q4SkZhTWhBaUtnYUt6akt3K2dsS1dzVk5rRjFQNTBFeXBVaXZhNmp2Yk9vMUtVcVRLaG5wK1kwUFJmQ3BsTmQ5S294RjBsaVByOXpISWN1VEc5c0pwSThpTjlWekdYVlphYkI1amszOEJrKytkTS9aTGF5amk5ZVdGdVgrMlJQbWZheEd1WVlvd2VnUk9CRkNUUjFwMFlkd3BBRzhGOEJFQUQ3dWZFVUNVaWJRM016bVZDZHE3dVRtVnNJSTJvRVRaaTFwRW9KUmJXU0pBVW13cktKY3hXUWxtc21YVFlJNmZIZDF0MVgyNGJOSjBVNjFHYSt0QmpHM1RNZVEyRG9pNGhsSnlOU1c3ME1zWUs0S1N1ZllaZ1VCck4yTmt6TTZKdWZhdkw2ZjhVd3o1ejdCeVgwY1dMQkU0Ung5RUlVdDN6Z0hvRzF5T2RBWkFHNldjRFFrRW01bWN5Z1Z0SnNaR3BzOENkaFVrZzhpdngvQkM1WjRac3lJZWR0MTgwUURxWkxDTXNUbUlIN3EwUGsyS1JWUTZYSVhvUXpFVEFFd01qRXZnN0t5Tm81dTFGamI1M25JbmZlN01mT2Z2aVRIL0ZzQ3JhTkIyUHFxZ2ljQzVlMERFTGdjNjc0RGtRN29IWE03VWNTQXJKR1g4V2IwMU1HY0ZTSmdKdTdsWnRoMmhCQzNVTGxZN2hzdC9BeFVjdjErM3BzYm12SXVuMk5pRmNSSjBXanZQSWdZc0NSakl0Yzd6T1lYMWMvUHRseEttenhMd2N3QytERHNYaGJzSk5CRTRkeWVZZk5mQ0lvQmxCNml1Ky91UysvTUViRnZRdlM1L1NoRDBDSWdJdG5KenlqL2hucGFsbnBaRkZlakFlY0ZGTVlaeVFic1VxaW1Mbk40cmVTQzFGQTBzK1pkRE94YXZteVI3eHhLK3R0aFNyMExreXdEK000RFBBcmcxS1pjNXFvQ0p3SG56aG5kK2ZjR0NDK3Z1Qi9BT0FPK0M3VzVZUUhXOWdmY2RqYUk2UnFCMmNsbEdFSzZGQlZEZldRMEE4NHEzMnduM0xUMUFCb1E5QUM5RDVGY2RXRjV6ZWN4VVFZMEluR2h2RklDYVBOUXBCNmFUemp2TnV6OVB1SjkxM1dNU1lJTDRRUFc1L2ZjMXJCenhUUUF2d3VvNlhITi9ybURHYldoSEhUQVJPRitkSUJvSHJGWUFwQ1RJbDVvQVVyY1FPQVBZTlN4YnNFSmFNMTljZHd0Z0luQ2lSYnNONDNnSW9rV0x3SWtXTFFJbldyUUluR2pSSW5DaVJZdkFpUll0V2dST3RHZ1JPTkdpUmVCRWl4YUJFeTFhQkU2MGFORWljS0pGaThDSkZpMENKMXEwQ0p4bzBTSndva1dMRm9FVExWb0VUclJvRVRqUm9rWGdSSXNXZ1JNdFdyVFo3UDhmQU1RR2srcWsyR0pJQUFBQUFFbEZUa1N1UW1DQycsXHJcbiAgICAgICAgICAgICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU00QUFBR21DQVlBQUFBMHo3dEhBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBNTdtbFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNMdnU3OGlJR2xrUFNKWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FpUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVFXUnZZbVVnV0UxUUlFTnZjbVVnTlM0MkxXTXhNVEVnTnprdU1UVTRNekkxTENBeU1ERTFMekE1THpFd0xUQXhPakV3T2pJd0lDQWdJQ0FnSUNBaVBnb2dJQ0E4Y21SbU9sSkVSaUI0Yld4dWN6cHlaR1k5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1pUGdvZ0lDQWdJQ0E4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBpSWdvZ0lDQWdJQ0FnSUNBZ0lDQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpQ2lBZ0lDQWdJQ0FnSUNBZ0lIaHRiRzV6T21SalBTSm9kSFJ3T2k4dmNIVnliQzV2Y21jdlpHTXZaV3hsYldWdWRITXZNUzR4THlJS0lDQWdJQ0FnSUNBZ0lDQWdlRzFzYm5NNmNHaHZkRzl6YUc5d1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM0JvYjNSdmMyaHZjQzh4TGpBdklnb2dJQ0FnSUNBZ0lDQWdJQ0I0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlLSUNBZ0lDQWdJQ0FnSUNBZ2VHMXNibk02YzNSRmRuUTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpVVjJaVzUwSXlJS0lDQWdJQ0FnSUNBZ0lDQWdlRzFzYm5NNmRHbG1aajBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5MGFXWm1MekV1TUM4aUNpQWdJQ0FnSUNBZ0lDQWdJSGh0Ykc1ek9tVjRhV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdlpYaHBaaTh4TGpBdklqNEtJQ0FnSUNBZ0lDQWdQSGh0Y0RwRGNtVmhkRzl5Vkc5dmJENUJaRzlpWlNCUWFHOTBiM05vYjNBZ1EwTWdNakF4TlNBb1YybHVaRzkzY3lrOEwzaHRjRHBEY21WaGRHOXlWRzl2YkQ0S0lDQWdJQ0FnSUNBZ1BIaHRjRHBEY21WaGRHVkVZWFJsUGpJd01Ua3RNRGt0TWpOVU1EazZOVGc2TkRRck1ETTZNREE4TDNodGNEcERjbVZoZEdWRVlYUmxQZ29nSUNBZ0lDQWdJQ0E4ZUcxd09rMXZaR2xtZVVSaGRHVStNakF4T1Mwd09TMHlNMVF4TURvMU56b3hNaXN3TXpvd01Ed3ZlRzF3T2sxdlpHbG1lVVJoZEdVK0NpQWdJQ0FnSUNBZ0lEeDRiWEE2VFdWMFlXUmhkR0ZFWVhSbFBqSXdNVGt0TURrdE1qTlVNVEE2TlRjNk1USXJNRE02TURBOEwzaHRjRHBOWlhSaFpHRjBZVVJoZEdVK0NpQWdJQ0FnSUNBZ0lEeGtZenBtYjNKdFlYUSthVzFoWjJVdmNHNW5QQzlrWXpwbWIzSnRZWFErQ2lBZ0lDQWdJQ0FnSUR4d2FHOTBiM05vYjNBNlEyOXNiM0pOYjJSbFBqTThMM0JvYjNSdmMyaHZjRHBEYjJ4dmNrMXZaR1UrQ2lBZ0lDQWdJQ0FnSUR4NGJYQk5UVHBKYm5OMFlXNWpaVWxFUG5odGNDNXBhV1E2TnpobU9ETmpaREl0TkdJeVppMWlPRFEyTFRreE9ERXRNbVZtTlRJME1EazVOakkwUEM5NGJYQk5UVHBKYm5OMFlXNWpaVWxFUGdvZ0lDQWdJQ0FnSUNBOGVHMXdUVTA2Ukc5amRXMWxiblJKUkQ1aFpHOWlaVHBrYjJOcFpEcHdhRzkwYjNOb2IzQTZOemswWm1SallXUXRaR1JrTnkweE1XVTVMV0V6TVdFdE9EazJaRFkwTnpZNVpUZ3lQQzk0YlhCTlRUcEViMk4xYldWdWRFbEVQZ29nSUNBZ0lDQWdJQ0E4ZUcxd1RVMDZUM0pwWjJsdVlXeEViMk4xYldWdWRFbEVQbmh0Y0M1a2FXUTZOakJrT1dOa05EWXRPV1kzWWkwell6UXhMV0prTlRrdE5URmxObVppWTJNek5HSTFQQzk0YlhCTlRUcFBjbWxuYVc1aGJFUnZZM1Z0Wlc1MFNVUStDaUFnSUNBZ0lDQWdJRHg0YlhCTlRUcElhWE4wYjNKNVBnb2dJQ0FnSUNBZ0lDQWdJQ0E4Y21SbU9sTmxjVDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSEprWmpwc2FTQnlaR1k2Y0dGeWMyVlVlWEJsUFNKU1pYTnZkWEpqWlNJK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpkRVYyZERwaFkzUnBiMjQrWTNKbFlYUmxaRHd2YzNSRmRuUTZZV04wYVc5dVBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThjM1JGZG5RNmFXNXpkR0Z1WTJWSlJENTRiWEF1YVdsa09qWXdaRGxqWkRRMkxUbG1OMkl0TTJNME1TMWlaRFU1TFRVeFpUWm1ZbU5qTXpSaU5Ud3ZjM1JGZG5RNmFXNXpkR0Z1WTJWSlJENEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSE4wUlhaME9uZG9aVzQrTWpBeE9TMHdPUzB5TTFRd09UbzFPRG8wTkNzd016b3dNRHd2YzNSRmRuUTZkMmhsYmo0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BITjBSWFowT25OdlpuUjNZWEpsUVdkbGJuUStRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJREl3TVRVZ0tGZHBibVJ2ZDNNcFBDOXpkRVYyZERwemIyWjBkMkZ5WlVGblpXNTBQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMM0prWmpwc2FUNEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BISmtaanBzYVNCeVpHWTZjR0Z5YzJWVWVYQmxQU0pTWlhOdmRYSmpaU0krQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRFVjJkRHBoWTNScGIyNCtjMkYyWldROEwzTjBSWFowT21GamRHbHZiajRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOMFJYWjBPbWx1YzNSaGJtTmxTVVErZUcxd0xtbHBaRG8zT0dZNE0yTmtNaTAwWWpKbUxXSTRORFl0T1RFNE1TMHlaV1kxTWpRd09UazJNalE4TDNOMFJYWjBPbWx1YzNSaGJtTmxTVVErQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRFVjJkRHAzYUdWdVBqSXdNVGt0TURrdE1qTlVNVEE2TlRjNk1USXJNRE02TURBOEwzTjBSWFowT25kb1pXNCtDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh6ZEVWMmREcHpiMlowZDJGeVpVRm5aVzUwUGtGa2IySmxJRkJvYjNSdmMyaHZjQ0JEUXlBeU1ERTFJQ2hYYVc1a2IzZHpLVHd2YzNSRmRuUTZjMjltZEhkaGNtVkJaMlZ1ZEQ0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BITjBSWFowT21Ob1lXNW5aV1ErTHp3dmMzUkZkblE2WTJoaGJtZGxaRDRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzl5WkdZNmJHaytDaUFnSUNBZ0lDQWdJQ0FnSUR3dmNtUm1PbE5sY1Q0S0lDQWdJQ0FnSUNBZ1BDOTRiWEJOVFRwSWFYTjBiM0o1UGdvZ0lDQWdJQ0FnSUNBOGRHbG1aanBQY21sbGJuUmhkR2x2Ymo0eFBDOTBhV1ptT2s5eWFXVnVkR0YwYVc5dVBnb2dJQ0FnSUNBZ0lDQThkR2xtWmpwWVVtVnpiMngxZEdsdmJqNDNNakF3TURBdk1UQXdNREE4TDNScFptWTZXRkpsYzI5c2RYUnBiMjQrQ2lBZ0lDQWdJQ0FnSUR4MGFXWm1PbGxTWlhOdmJIVjBhVzl1UGpjeU1EQXdNQzh4TURBd01Ed3ZkR2xtWmpwWlVtVnpiMngxZEdsdmJqNEtJQ0FnSUNBZ0lDQWdQSFJwWm1ZNlVtVnpiMngxZEdsdmJsVnVhWFErTWp3dmRHbG1aanBTWlhOdmJIVjBhVzl1Vlc1cGRENEtJQ0FnSUNBZ0lDQWdQR1Y0YVdZNlEyOXNiM0pUY0dGalpUNDJOVFV6TlR3dlpYaHBaanBEYjJ4dmNsTndZV05sUGdvZ0lDQWdJQ0FnSUNBOFpYaHBaanBRYVhobGJGaEVhVzFsYm5OcGIyNCtNakEyUEM5bGVHbG1PbEJwZUdWc1dFUnBiV1Z1YzJsdmJqNEtJQ0FnSUNBZ0lDQWdQR1Y0YVdZNlVHbDRaV3haUkdsdFpXNXphVzl1UGpReU1qd3ZaWGhwWmpwUWFYaGxiRmxFYVcxbGJuTnBiMjQrQ2lBZ0lDQWdJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQZ29nSUNBOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBbzhQM2h3WVdOclpYUWdaVzVrUFNKM0lqOCtZd21LMlFBQUFDQmpTRkpOQUFCNkpRQUFnSU1BQVBuL0FBQ0E2QUFBVWdnQUFSVllBQUE2bHdBQUYyL1hXaCtRQUFCOFRFbEVRVlI0MnV6OWVaeHMyWEVlQm40UjU5NmJtYlcrcGQ3ZSs3NmgwUUFJRWlCQWloUUZiaGFIV3MyaEtGc2VqbWpaSWkxeUpGa0daZE9tWkZ1QVBkWk1hendhU1pRNW9zeWZ4cEsxK0RmNlNTTktZMEtpUUE0cG1BU3hFT2k5KzcxKysxcDc1WGJQaWZuam5IUHZ1VXRtWmRXcnQzVGpCRmw0cit0bFpXWGV2TitKaUM4aXZpQVJRYlQ3eXVoTHYvVzFmL3didi9aYnYvZkd6WnQ0L2ZXdlkybng4T2NXNTQ3OEtJQnpBUENabHo4ZHI5STlObzZYNEQ1RURrRUlCQ1lDaVB5M1Rid3lFVGpScHBnSVNBZ29vZ0VxMFJNdEFpZmFOSzhqQUJHRG1hQ1lBU0NDSndJbjJsU1BBeU5HREl3WUdCTnowQWljYUxONUd6QXhNeGdFSWtJa2NDSndvczFnUmd3RWdFQkFSRERSN1VUZ1JKdkI0eEJFakEzVG1Dbm1OeEU0MFdiS2NZeVFpRmg2eldKR0luZ2ljS0x0bnVRSUVZR3N0NEdJOGVDSkZvRVRiYkxMc2Q2RmlDQVJMeEU0MGZiZ2NaZ3RRU0NJckZvRVRyUlpQUTRWU1UwRVRRUk90TmtjRHBPQUNFU002R3dpY0tMdDFmR0lBUkhGVnJVSW5HaXoyS0EvZkVORUlHSlpncGpqUk9CRTI4VisrcWMrSzIrOWZ1N3pGalVFNXZnUlJlQkVtekZFRS9IZWhwaGdvc2VKd0lrMnc0ZkNpb2paa2dOR1lzdEFCRTYwV1kxZ2h6K05Jd2lpUmVCRTI4V00wUzVVSTFEOGlDSndvczJhNDdqT1RwR2lYeTFhQkU2MDNjSTAxK1FKaWkzUkVUalI5a1FPd1BXb0VjV1BLQUluMnV4ZWgyM0xUU1FHSW5DaTdUblhFZGMxRU5FVGdSTnRoaHlIeE9VNkRqSmlKUWlpUmVCRTI4M2JXSThUNkhSRXJ4T0JFMjJYRU0xSkRYaDVxQWlhQ0p4b3MzMHdSSUNUaDVJNGxST0JFMjFHcndQQWlNRFlEZ0tLb1ZvRVRyUmRUR3VOME1rNFNqcDZuUWljYU5OTUtRWDJoVS94a2gzUkluQ2l6UkNxV2F3d001aFZ2Q0FST05GMk15S3lMc1k1R21OMEROVWljS0x0Wm5tZWsrMGFpSi9WL1dwSnZBVDNzK2NCV0RHWVZQUTQwZU5FbTRVYzhNMmRFanNISW5DaTdZVWRFUGVIbEh4QnRBaWNhTHQ4TU1SaFUzUXNnRWJnUk52TmpORWlibVdCRWVPOVR2UTRFVGpScG40b3JNaDFlWUt0Qkc0RVRRUk90TjFNYXcyQkhXSXpnamdGR29FVGJSYnpyQm9UUnduY0NKeG9lelc3K0ROR2FSRTQwZmFHR2xpVkcyTk1aTlVpY0tMTlpBUzNXRW84T1JCZFR3Uk90Sm1jVHFGeUU3MU5CRTYwbVVFRDJMRUNDZnB1b2tYZ1JKdGdSb3dCYkEzSHFYbkd6eWtDSjlwdXRyNjZ1YTIxOUVHQXNSaVNHSzVGNEVUYnhTNWZ2TFl4R281dWl0aFFEVkZ6SUFJbjJtd3BqaEZERUlrRjBBaWNhSHN3Z2tCWVdhMEJqcjFxRVRqUlp2TTRGanhPa0RDSzNFVGdSSnZONDFpOFNHend2RTh0YWc3Yzd5Y2JNeUFSUEJFNDBXWjFPY1JLUVl4QUluSmlxQlp0TmpNdVRDUEZvRWhGUitCRTJ3dEZJRkg5TmdJbjJwNCtHTEtUT0s1eklGck1jYUxORktvWjF4Wk5VVHM2ZXB4b013ZHB6SVVrSVNSNm5RaWNhRE1aR1JIQWFkMVFMT1pFNEVTYkVUbUFFQkdJR1ZycnlCREVIQ2ZhTEtHYVphTUpCQUlvamhSRWp4TnREL0N4dlRjVTUzRWljS0x0RHoveEtrVGdSSnNweFNsQTAvTFhhREhIaVRiOVpGTU1aV0tvRmoxT3RKa2pOTXVvbWVoeEluQ2k3UzFjczFpSlpad0luR2g3OGptQ2hEbXkwUkU0MFdiSGpPc2NZSTUxbkFpY2FMUGlocG1FaU8xS3c1amZST0JFbXkyL0VRR0pDSXd4MGQxRTRFU2IxZVBZVGh1N1pDcGFCRTYwMmFFalV1WTYwZWxFNEVTYkpWUUQyU1pQdXp5WFk0NFRnUk50TnVSWVFvQ1l3QndkVGdST3RObkJZNzFOdkJBUk9OSDI5T0VRd1JnREUvZEtSZUJFbTQwYThLTUVrUmVJd0ltMmx5ak5qMDRUSTJJbkFpZmF6TWl4RzZlWktkWnlJbkNpeldxajRXaEQ0UHJWb3N1SndJbTJ1eGxqWkhOait6b2NKUjMzNDBUZ1JKdVJIQ0FpcCtVcDBGcEhseE9CRTIyV0ZBZXdkRFJBWUZiUjVVVGdSSnZaN1VCZ082UjF2QmdST05GbWR6c0VaaFZadFFpY2FMUHlBM0MxVDJYNzFHS09FNEVUYlpiUFJVUkV4RzVtTTdIbkpnSW4ycDRUbldnUk9OSDJBQmNDYkEwbjFuRWljS0xOeWdzQXJtc2c3c2VKd0ltMkYzSkF4QmdRTWRJMGkxY2tBaWZhekI0SGRnSjB1Ny8ySVpERXp5b0NKOXB1d0hFR0VVQ0xpYUZhQkU2MFBidWVTQTVFNEVTYk9jY3A1bkdpUmVCRW0vRnprWUNEenNkNXZDSVJPTkgya09lNFBhRHhZa1RnUkpzMXRSRmIvSXpOQXhFNDBmYkJEQUNtM01vV0xRSW4yaFNUTWw1REpBZ2ljS0x0QlRpZUhpQm1BbUlCTkFJbjJreEJtcDJjSmlqRml3OCtkdXlqOGJKRTRFVGJEVGxFYm9PaElNOXpHbzlITVY2THdJazJVN3dXZEF6b3FEc1FnUk50eGh3SGdKaW9xeGFCRTIwdjNxYVl3aEV4VUJ3Rk95SndvczFreGdoQUVuZmtST0JFbTVVYmNLNEdSZ0N0ZGZtOWFCRTQwYWJtT0VFUmxLQlVWUE9Nd0lrMm04Y0pnTU5SbERBQ0o5cXM4Q0dJc1gxcVdkUWRpTUNKTnJ2WEliWUxwcUlNYmdST3RObnpIRERaT280akNLSkY0RVRiSFRvQ3JZMHJnRXBrMVNKd29rMzlVSmlsMitzc0M0U0lDTm9ZQUJSWnRRaWNhTHQ5TG5QejNlT2VrR2FLQzNRamNLTE5GcVFKQUtLaXVWTWtobW9ST05GMk14TG5ia1FFQW9rRjBBaWNhRE1oeDJuYmlBZ0lpQXQwSTNDaXpScXUrYjhZSXlDSzVFQUVUclNac1dQVlBGbVk0MGNWZ1JOdFpvWkFqSUV4WnZQbXRmV3Z4eXNTZ1JOdGhqVEhLM1lvbGNqMXEyc2I4WkpFNEVTYnllUDRIRWNERXVkeEluQ2k3WWtjc1A0bkt1Rkc0RVNiUFZhTHkzTWpjS0x0UFZSalpyQks0c1dJd0lrMnE3Y2hzdkZaL0pBaWNLTE42bXlrK0IrQU9KSURFVGpSWm5FNElrSkdESXd4NExoWktnSW4ydDZTSENOaU82UWpxeGFCRTIxM3lJQWd6SXk0R2ljQ0o5cWV1QUg3L3laUzBSRTQwZlpLRU5nZG9CUjVnUWljYURPSGFtU0xud2JqZkJTdlNBUk90RmxDTlIrd2lRamMydmJvZGlKd291MzZ3UkFMRXdQa21qMGpxeGFCRTIxM00yTHM5TFNSc2swNldnUk90RjJTSENPQUdPUTZqOHhhQkU2MHZXVTZCR01NaUlCT3B4dXZSd1JPdEJub0FiSEVnUHVJb3E1YUJFNjAzU00xeTBZTG1NbUdiVkhsSmdJbjJrd2VoNWdZbzFHczRVVGdSTnREb0FiZjNBbFc4V09Ld0lrMkt5OWdjeHdRb3FaYUJFNjBXVDRVeFVpU1pJNWdOeFZFellFSW5HZ3oyTlBQUFhZNnk5SWo1THFqbWVPS2p3aWNhTHQvS01SMjl5ZTg2RHB0Nmp5UGJpY0NKOW8wRXhFU3NTc01SUVNKNnI2UjV6b0NKd0luMnE3Z3FTRXBYcEVJbkdnekdybU5iR0xIREdMblFBUk90RjFCZzNKYkFWa0hGTDFPQkU2MFdRTzJHS1JGNEVTYlBVU1RLbmhpZytmOVpsR1UrSDcwTXlJa0l0QmFZNXpuZ0NMRVVDMTZuR2k3ZlNoTUprQVJRQ3lSSElqQWliYUw1WGxPdnZnWm1lZ0luR2l6SnprQ0FFb3BNSE1FVHdST3RGbE1zU0lJN05nMHgrN29DSnhvTXpvY0NMT3RlZVo1RHVhb0lCMkJFMjFYRzQ5ekZoRVlvMkcwcnRIVDBTSndvcldIYWtxaDJDbGxwejlqeTAwRVRyVFp6RG9aMGNiL1IvUTZFVGpSZHM5ekNJQ0FPTzRxaU1DSk5wTnBtOWNBRURDcDZHb2ljS0xOYXNiRWZkTVJPTkgybnVHSWxiNDFNUEZpUk9CRW15Mi9zVXFlRGtGZ2luV2NDSnhvTTNnYkVKejByZFltdHR4RTRFVGJtK3V4dW1yTXNRQWFnUk50VnN6VUt6Y3hYSXZBaVRZVk5HNGVSMnBhTi9IS1JPQkVtNWJqR0dIamwrWlNkRFFST05IMkZxckJiaXlRdUhFNkFpZmFES0FoSzZVbUlsREVZT1podkNvUk9ORm15WExJOXF0MU9uT0RoZDdoYy9HYVJPQkVtMktmZWZuVDlNVFREMy9TcW5jU2pHZ1FVV3dmaU1DSnRwdjE1bnBQa2RzNDdmbUNlRlVpY0tMdFRndzRDYzlDNVNaK1RoRTQwWFl6YlF3QnNDSWRrVStMd0lrMm15bG04Zk00Q2FlQkk0b1dnUk50b2dsQXRqdTY4dkZFZ2lBQ0o5clVENFVKV296bDFRakk5WEFoWHBVSW5HaTdtREcyVllDSk1NN0gzZjV3NjB3TTFTSndvdTJXNHlnbExtU3pvWnVsMWlKd0luQ2lUYzF4eExKcUJDQ3hHbXVFV011SndJazJRNmhHQkNJR0VVSEVSTkJFNEVUYjlVTWhzckVaV2NGMWlwb0RFVGpSWnZBNElnUVJFQUZLRlV2ekluZ2ljS0x0WmtSVVpEWEdobW94WEl2QWlkWm1QLzFUbjNYc2dOM0dSc3hJbElLSyszSHVPNHZMYys4andIem01VS96NVV1WHYxT2IvSXpXR2dEUTZYVEJpbGZtNW52SnpuYS9DakQ3TS9FQ1JvL3pqV3VmZWZuVGRPM2F0Yis4c3pQNGgxY3VYWHRwZTNzSGVUN0cvTUlpRGgxYWV2SEVnd3QvZDJGRi9xUGVJWE1xWHEzb2NhSTUrKy8rcTcrUmZkdDNmZlNwdDE0L3Qzejk2ZzBZNTNFSVFIOW5pTmRmZWVXalc1czN2cW5YN2YzK2t5ZGYvUDYxVyt1RGVOVWljTDdoYlhOamErbWROOTQ5ZWZYS0RSaWpTeWFBQ0tQaEdHdXI2N2h4L1FZdExpNCswdTJzSFFIb1VyeHFNVlQ3aGpjajB0M2U3dmZzS3JhQ0k3RFlZWFpjdEdBMHluc1FMTVlyRm9FVERRQkVTR3RUZkI3RjdrS3ZHMDBFSW1WRnBRRVZMMWdFVHJRR2hnUVM2SGlLTVFBSXhBUmxkNExHbWs0RVRqU1VBS0cyelFURURDWUdsNnFlc1lzZ0FpZmFyaCtTM3dkS1pRQVhyMG9FVHJTU0lKaTR6OE9JY2Q2SG9zZUp3SW5XQ011S1B4MlBaZ1NBQVZNQ1FobzlUZ1JPdE5CVWtyRFBZY2lLUnhkSUtxZ0NBclFlejNNMlBCT3ZXQVJPTkFEZittMGZQak8zTVBjNGlKd0lvUlNlcC9oUEFiVFc4d1FkZ1JPQkV3MEF0TkhFSEhnY0tUMk9KOU1FQWtoVWlib2ZMTGJjM0VmV1JrV0xsRFZRWDk5QjNKY1RQVTYwZ0Jod3JzVURxQ0NmWVNBQXRMWmFhMXAwSkFjaWNLSTUwTFNBZ1FCMllaczI4R0tlRkZtMUNKeG9SUmhHWE52M1NWU1N6eHEyN1VZRVlGTHhjNHM1VHJSS3FPYnlHQXBBWkFrMUJVTUpoQUJOSEQxTzlEalJDdUI0VnMyVlA0di9aWWJmQ1NwR1lOd2FrR2dST05IcW9Sc0E0N3VrSFZrZ1JXMG5iaTZJb2RvM2dJWGlHblg3d0V2UHFFZWZlSWk2M2M3UjFWdnJKQ0l3WW1DMGhqRUdSaHVJRVJBVEVxWEFDZVBRNFVPUC92NC8rTDk3Wmp6TTEvKzcvK3B2M09wMk8rYkl5aUh6MVMrOXFxZTlqaWpzY1lEUlFWdnRJTnFCQWNNenlneUFubnJtTWQ3YTJsWWYrTkFUajZWWjl0ajI5azVHa0ErRDZJWHhPUC9vNjYrOGZYSjlkUU1HQnFJZEJXMDB4QmdZWTZCMURwVW9QUDdrSTNMcytJb1EwZGIyOXZiL3I5dnQ1cjFlOTUydHJlMS9QYjh3dDlQZkhueHh1Q08zUHZEU3MvckZEejFqZnZxblBpc1JTQkU0OXp0UWtzV2wrVFJKa25RNEdNMC8vUGlwWjdxOTdwT2o0V2grNmREOHY3dTF1ZFBKOC96NGVEUTZQQjdueUhOTjQvRVlvOUVZZzhFUVJtdUlLWWZZZkZlMEdGT0ViRW94bUJsQ3RoS3FsRUthcFNDR2RMc2Q2V1NkMStZV2VvUGxRMHQ5by9YZkJPVFZMMzdobFM5KzUrLytYZmt2Ly9OZk5kRWpSZURjMHpETGVaSUVRSlptNmNLcDB5dVB6aS8xUHFhWVh5S21qL1YzQnRsNFBENHlIbzBYaDZNUjhyRW1ZelJFQk1hSTlTUitTVzZSM05oOWJGNW4zWDgrUmdRaXB2aStNYm9BbGRFT1hEQk95SkNRcFNtU1ZLSFg2OHI4d3R5TlhxOTNzZHZyZnJuVDdmeWp4Y1g1VjM3OVY3LzRqaDZvUElaMkVUaDNBeWcrOUVyU0xEMHNJbWZPUEhqOE8wYWo4Wk9kVHZKZHVkWW5qVEVMdzhHSTh0em1LQ0tscDdBWThRbS9TL2RGWEcrYWI2ZXh3SUdJYTdjcEgyUEVGSjdIdUY0Y2dSVGYwMlZ2anZWY1lweFdnU1hoMGl6Ri9IeFBscGNYYnk0dEw1NGxWaS9QejNkV3IxNWUrMTkvOHMvOGlYRU02U0p3RGhvNEJDRE5PdG5peXJIbHArWVg1ajdWN3c4K0lTSXZhcDJmR0kzR3BMV0JNZHAyTXlNQVNzaUhPVG9aUlJnbUFZZEdGbVN1RVUxRUNxQ2h4ckNKY2Q0SElSQTlnR3lEam1nREVWMHlkTzdmSUFJaE8xV2FacWtzTE01aGFXbnhsZVZEUy8reTIrMzhpNnlUdlBLLy8rRWZlck1OUkJGQUVUZ3poMklyeDQ3TVAvdUJ4NzVqZlczemFXUE1IMTVmMzNpaXZ6TTRuT2VhcklpR3Y1TGVTMVNwWTZ2MlZQYWUrUnNaTldCNEx5UmlpcDhXSThHL293enJDZ0M2djN1ZytUQlF5akRQQ2h0YWIxUlpzK05DUCtOQW15UUtodzR2eWZFVFI2NHNMUy85WXBxcG4zdnp6VGZmR2F4MllrNFVnVE5iT0hiOHhOSDA1Sm1WeDlJMC9aN2hjUGdqMjFzN0wyNXVibWRhYTRJVWtLajhVSGdaUGFCSzhGUTNFZnFRclBJellvSXVhTk40akEvWkNwaUpCT0djS1FIa3dPTUJhN1FweGhFa2ZKN2c1L3hyTXRxQVNMQjBhRWxPbmp4K2RtbDU0VFVRL2JXMTZ6di80dGIxclJGYTZrZmZxT0I1WHdObkY0RFVUYzNOOSthZWYvR0pqK1JhLzZHZDdaMC92TEcyZVd3NEdwZlhhTUsxS205bTUzaE11K2RwQlk0bkF3cmdTREhJVm5nZG43Y0VUeUlCZUl3eEZYTEI1MEtBeTRzQUY3cVo0cjhSZmkvTXVZekFHQnZpWlZtS1RxODdYRnBjZkRYTHVuOTdhWG4rVjM3alY3LzRsWWNlZUV4alFxUHBOd3FRdnRHQnd3Q1N1WVh1a1pjKy9QenYyOW5aK2NNYkcxdWYyTnpZNmhpdGl3UWNRZDlZWXhtblNPVy9KNEhNQktkN0kxeXJlSjNRUzFWRHRtQ1pib3ZuQ2I1cTM5ZkJVSThQM1h6b1o3UzJZRVBnaVl3TkYyMGgxbzVzRTRDRmhmbGJTOHVIUHJld3NQRDVyYlhSUDlPNXVReGdHd2ZZcmYxZUFkNzdFaml6QUdadXZqZi96UE9QZmJQUjVsTkd6TDk3NjliYXlmNTIzMTZQWXVSU01HM2RjM2dqVStCNVBMeXF5YjJwWVVrYTRKRTZ1RnJBNDMrRFZJQmtXc0hqdzhid09TMVlTdTlqUE5GUWVEU3hZSUhMZ1h6WUdlUlNTcW54L056ODFjWDVRLzlBTlAvaTF2Yldxd3Z6aXp2ZlNNQkozc00zLzM2TUR4MWVXbnJocGFmK29CSHpINjZ0YnJ5d3RiN1YyZG5wbDk2bGNxeFFDWnBBaXRiL053VXdBUkZJTENmbVZOQkFWSUtRRFNQd0V4Q3gvQnNvOEdFU2lIU1V5dEgyY1V3bzJPckE4MW1nTTBBQ3VQQU1NT1dQTXhkc25oRmpHMGlaSUliQVlJQU5qR0gzTXhMd0hHNTVMMHVnZWVEQU50YnByZFhoQSt2cmF6L1ptNXY3c1pXalJ6L1g2U1QveFd1dnZQN1ZoeDU0TFA5R0NOVytVWHJWRWdDSFRweGErZGlKVTBjL2UrSGN4U2NIdzFFMkhyVjh4dldaR0U4dk85YXN6cUsxN1ZHWFNtRG52dU5BMk9yaC9YT1RBd244alZ1ZEJoVzB2UXovRFNwQUFzT1FBZ2oyZVN4R0F2RXBZdnNqUmlBTVFCT1lDS1p3bUtWWUNNaEJuZ2drZ0pCOVRtME1iVzF0emZmN096OHdQei8zM1U4OC9jamYzRjRmL2FVMHlhN2lmZDZJK240R0RybjN0NXlrNmtNblRxMzhaSjdyNzd4MDhlb2NKTGpwZ3B1WmlBdVA0SDFOdUl1elVxQkU5ZWFWd092VUE3S0NOUERQS3JBM28xRHh1NFRheVllNmNJZjl3ejhuRmFHVWY1d1YreFF3eUk2K2VWQlJlU2dvQU1Mazhob0d3MENUODBCd1pJRjc5Zjc5RTlrdENrd01YUkVNRWVnOHg4YjZSbWRyYytzbmpxeXMvR0MzUS8rM2hCWitmamdZcnI5ZkFYVGY1amkzR2FvbEFBNm5hZkxDcVFlTy9lUjRuSDlxUEI3UFRVdGhwMTJINHVZT0FGVmtHQTJnbERrUGdzRzBTc1JYdE5VRUxKY3ZiQWEvcThxeVZldEJwU0M3VkFnRjhibFNXQ1FOMkRZRWVaV0lRQnNETWRvMWs1YTFIWnNIb2N4MWZJRVZ0dDNIdHczNStORUVOYXh1SjVPVll5YytOOTlkK291M2JxNy81c0w4WWg4SFBPNTlyM09oOTZQSG1jK3k5TGtISGo3NVp3ZUQ0YisxdmIwelQxNWphY3I0RndVRnpNcjBwUVRlcCthRndoQXV2RUdwRWZKUmxiZ3VRcndBQ0VRZ3Rua09SSUlPQkNxZnF1SjZwQkxsK1p1V2lXREFBR243T0E4cW9oTDBiaFY4SmZsajYwa0lEQllEWVFaY3R3RlJlR3lJOHpxNjhscUsxaUFBL2NHUUxsNDQvMTN6Qy9PZlBINzg1TjhlOThlZlRWUjZBY0E0aG1yM24yVUFIamoxd1BGL0Q1QS91cm14K2FoTnBQY3dMT25KZ0lBQXFJZDBsVERPMzA3MmptOWwzYVI2bTl1UXgrY2lBYWdLUldoeTBtbnU1cllQcTlBUWpkL1ZwbzREWm9nMndWdXB2aEwvNjVrSkJnb3dHb2xpeDdvQkJBMHB3dFFxU010ckpTMzVuZlZtV2d6VzF0YzdPOXM3UDNyazZNcDNIdXF1L05udHJmNnZkRHU5RGJ3UHhFYmVEeE9nQk9Db1V2eXBsZU9IZmlIUFI1OGVqOGVQR2hQYzlMUTM4SlRoak5SeUlITEttcVZYQ2tGRUx1bTJpVGVWOGs3aDMvMnZZZnQ0ZG9rMlVma3N4WTNwVm5zUWxRRHhlUmlGWUM5U21NQWpGcDZLYW43UGptTDc1MlFpTVBzWFFNWDFJdmYzdGt2bisrbjhxSGVsTE91OG53L2RocU5oY3ZYcTVTZlBYM3o3NzZoTy9qZlNIajd3Zmppd2svYzRZRElBanh3NnZQanZFUE1mQmVSaEVYYW5kUWtZbXNoNlRVeDRLaWQ1L2JpbC9RQ3hsVVFySkRxZDUzTGY1OERqa1J1VXJyQnBudkJHRVlaWjhxdXN0Vmh3S3R0cVl5eWI3Y2xxT0dZc1pNNklTaWJPWHJxU0JoZk45dWZaUUxSbjJvclcxSUNjOE90SXlsek9GMW0zZHJZV0J1ZjdQM1RreUpHWERoOCs4dkpnUy85UG5XenVQZXQ5M3FzZWh3RWNaYVp2VzFpYys0K1RUUDFwcGZCd0dFYWdmdFB2QzVwVWZhNmdSWDhxN2lEQlRUa0o4d0ZBS3ZsVDZMM2NGM3RQRmpCZEtMK0swOTk3Tm5LZXpER0ZwVGREV2RRbEFpdFZlQlh2QVl1Zlp3WVhZaUdXejJiM1hON3pVdTFhVTQxc0NZTkxuZWNZamNlNGR2MzYweGN1WG5nNTZlbGZ5dWJ4ekt0dmZGVkY0Tnk5MTN3cVRaUHZPM25tK0YvcHpYWCtHQVE5SDJaUWNHdlNGRmVGbHNkUm5TVVRhVDZ1bHU5VVludElTOVEvQVRTRUNoZ3BTTjY1aFZqd2dFSklVQVQrMHhjMmkrY0xIeE9HY0ZRcTZOaWZzZUJobE9FYVV4Q3krYlBEZ2NlQ09QeEM4VE9vaDNhZU5CR1hhNG1CMFRrMk45WTdiNzl6OW1QWGJsejYxUTkvOVBrL3U3RnpzeHREdFR0ckNzRERKMCt0L0hqYVNYNTgwQjkyS2pkR0N6RGFLT042anVCNCthSVcwd2FhU3BCRU5IbExqVml5UU9wTVdQMzNvQXhyNEdzd2piQXRaTTlzclljQlc2UU1PZ3RzemlIVkZBMjJwbFF2MEhyd1M4bU5GeEdoWW9hRzdiQzJPR0QzZXFVYTVOYXFzTGFPeFdBR3RBNWZMd1h2MTVwdDhRR01HZUhLcGF0SHRqYTNQbnZxOUlrZklqSGZKWnBYbzhjNWVFc0JQSGY0eU5KL0ljQi8xUGVncVh1WFdjaUFsc2RJUUNYVGpNOURRZWdXSnZWdElLVTZjemNoa0F1Zkx5UUZLcVNDRDcySXE0emFoRnFVRGNzNDhCTGM4aG9DVDBobCtGZjFMTkk4ZWtKeW9yZ21KYzFSQjQzdDJiTmozMXByYkt4djR1MjN6bjFvZmV2YXY1azdoRCtDOThpMnVmdk80MHdvZktaWmxyNTA3TVRodnp3ZTV4L1RScWVUa3ZEaXc1cHkwMWVTYW1CcXdrOVRRR1BidDB3bHlaOEkxTnJwWHdaYS9vWjFYSlhZT29rRWRMVnZ2U255QzJKZkluVTliK1M4U0JNOFplZEIwYjVRZWYwRWdCV1hjenVlWmljR2liYk1uZzlGWFVlQ3dNQ3c3Yit6blFZbG44N01NRnBRbDhJdWFrMGlWVzhId21nNHdxVkxsNS9jM3RuK3haTW5UaTFRUHZmekFIVDBPTGNKN3F5VGZmRFVBOGYreDlFNC96WVJTWGZMWFdnR3hteGEyTmFnajZta1hhVU5RQUYxSFNiN2hDcXhnQlp2VnFFSC9HblBaYzdERTFnNUJEbVJwOERMQW1jMVNTOThHRkdGa0NpZjIvNXVycngvcW5nUDYrMjRCRzZkUGcvOUxsRkxnTnRHb3RpUmJpTUc0M3lNMVZ1cmZQSFNoYi9HbmVIL2dWUFQyZTJBdlVPTndPOEw0Q1JKbW56Z3hLbWovOCtkN1oxbmltQThTRjRSSkx6MUc3VCsxUlpLMFNUNmVCZVBKUzBoVzlzWEJ6ZDA0emtuME9WMTBpQmtDeVVJaDhxa3YvNWEyb2lIRWp4aEFGbUVWOHhOWnJBUnNrcjFZS0JhR0lsbVhrY1RycVg0QWJ6Z1QyME0xdGJXK2NMRmQzOHU3WTAvOTlqVForNWIwdUJBUXJVN2hQeWtOOWQ5NGRpSkkzKzkzKzkvUUdicEFRaHYrbW1lNVI1YjVUYXNoSEdFdG0wZlJadC9OU09yZWcwU1ZBY09URkVEQ3BWMEp2QWZ4YzhxZHQwRGhoMGJZOE15RWJKakQxSXJMQmN0UnZXdUF0Y1FTdExvS3EvWG04UTNrWUtRS01iTm0ydGt4SHlyMXVaejZYenlIZVB0ZEJSRHRSbGYxN2Q4OHFYZjlkU3pqM3h1TUJoK013U05nbWJEbTB3N3ZldWtBQjB3aEdyZUR6TUN2TjBMMGd3dm5XcmJES3BTVXBVeGlJRHdLSDVyaTZlcW5EdU8yZzU3ODVnWnFnajF5bWVUa0NRSmFHOEsvcXlIeWxYZEF4UURjeUlHdVpPMXVubGpGZSs4ZmU3aldrYWZ5NVpHYVFUT0RMZlY5LzNnZDN5SUZmM2RxMWR1SERiRzdPNDFaZ0hOdExTbkxRL2FiOWQ0clZWSFdvYmpwdFdId3I0d2hPMHZqWHlpRGpxcDBRMStIS2QyZzRmZXdoYzZDeGF0Wk40S2tCQUh2NG9yb1dCWXJLMjg1aG9xYVdyazZ6dXNUUUdnUE05aGpHQjFkUjNuM2puL2lkRjQrSy9TK1hFV2dUTUZOSi82dDc3dHpOcnF4cDgvOTg3RkZaM3I5aGk1NVlSdm5ObTFpbi9sT1dwVi9RcVZPaU9oTUEzTTlkTTNKQXQyRHppRGpvRGlMZFk3RnFRWWFpdS9iVUVRRWdYRnZ3ZGtCd2VKZjRXdWRxdEVNS0Uzcms1TTJLSm5XUkN0RUFURjY1VUNqTVg3cXBjQjZnVm5KNDhGQ0xSMm51Zk5kNzkxcDcvMVMwdkhrbFAzQzBsd1h3SG5ELzNJOTUvczlqcC8rY3FsYTc5L1BCdzNnRUZUa3Y5SnQ5L01ZVmtkWkxjYjF0VWFSS2NCWDJva3d5eFpVdjI5RmFkL3ZkV0l5bzRDLzNldU5YUTJidmlBa0xBaFc4bjJNU2pvSkVEUU9jQXQ1QWlYekdMSTBGR3RnZFROOWhSZjJqZ043UnhHRERZMk5uRHU3UG52dkhIajJ0OVA1L1RqOTBPNmV0OEE1OS8vVTMva21GTHF2M25yOWJOL2VITnpteHFBMldOSVJudDRySVRoMlFFTTlrbkxsR2diVlIzNm9MM2ZDZFV1Nm1xVGY2MG9DMVJ1ZGxROEQ5ZENLcTY5emlwUXErRmFyV2hheVlFbWgyaFU4MDRoMVM5d2phRmlvSjIrdHM1emJHMXU0OXpaODU5WVc3LzVQeVZkL1dUOWt0MXRyM05mQU9kUC8va2ZPenJPeDU5NTYvV3pmL1Q2MVp1MFd6MUdacjE1Njk2bjdkU3YvWnRNeWN6YnBtRW9iRjhKR2FkYVMwcjlhMXB2VzNqcmhYbEtXTnVwMUZjcVRacFV6VWRDN3hRbzZ2aEcwS0l3Q2pUQ3Q2SmU2aDdMUWM1VnpQTUVJeFR0WVcxNWpabXBjYldySGxrYVpJRTIybm1pSEZ0YjJ6ajd6cm1QM2x5OTl2ZVNybjdxWG9Mbm5nUG5NeTkvbXZzNy9mL3l6VmZQL3VpN1p5OVNhMTJtTFdTN1hSYnNkbjVPbWlQTXJVQmpuckdiR2czdzdlWko2NmQzV053azJ1VXROSEtTb0huVGc0NnA2b1dDYmdieU16eVZDVlZxRFpNck9ScHg3YlhSbEZUU3kxYlpzVzNyZlRTR3d3SE9uNy93MHJYcmwvOW56dlFIN3RVOWZNK0JjK25DNVUrZGZlZkNIM3o5MWJlckZZeVcvT0oyV0RPNXplZTRreUJ0c0YzN1NLZTg5cHBwa2JldGhscE45Wnh3S2pUMGl2WDhpWW1DQVR4MnR3OEZSQVJYaTlKVTltRzNkV2czRHdJcHRiTjk1R3pFOXJZWmpkeXRNeGtPQnJoOCtmS0xOMjVkK2NXNjU3bGJaTUU5QmM2ZituUC8zckViTjI3OS9OZSs4dHJ4WW1JVDdXMy9OT0hFM2RlOWZCQmdtQ1pXR09STFlzeHNkejcyTzlIbGdLRHR5VnpldHp5WmJBaWJVMXZhWTBMZkhpYjNJRnZMS2JUaVZCVXdCV3RIVmJLaERZd0k4NlFHZU1xK051TjNDVG1SK0hHZVEwUXdHQXh3NmRLbEY5YzJidnhpWjBFLzJNYTJ2UytCODEzZjg0bmsycFdiUC9QbEw3NXlwdDhmVm0vb0tlQ29qREZQK2xEUWJBV1pCTWo2d050dW9TRFYybGlraFlLdW43cVRldGxhY3dKZlZYYzNVVWdwdDdOMFVtSExmUDVSVGQ3TDlwcmk5YkpuejZTY3Y2azliem0wVmg0RzlYZlJsTXJpQ1NXQ3NsYkVyanViYXVLT1FIVnN2Ykoxd1lTN2dXeC8yMmc0eEx2bkwzeGtkVzN0UHoxMFpQbXV0dWZjSytCUWI3N3pxWE5uTC83NGpldXJFMEZEVTVMckEzc2grL1ZLMDE1RG9COXRONlN4N1FXajhtWXRiaWJQWWdWOVhiWFp6c2F2TTYwYTBjVjVIVkRUczdPUGxSeUZ5cHBMMlBmbWlRRm1xbDJHY3ZndHJJbUZvV0dGZVFzSDZnZ1RKMnVsRm1iNzkrMTMvUmhqc0xPOVRWY3VYLzVqVjIrZS9ZbWpLNGM3ZDh2cjNCUGcvTWlQL3VBbit2M0JMN3o3emdXdURIclZhelFIREpLN2FvRVdHalU4aXJTRGNFTFZ2ZkdoaFkyYjRYZzFOd3VXdXgwQmxYcFlPT3RUeVVkQ0ZxOEV2YXFJZ2xRcFp1S1dFSkJxMDZ4QkhqU3RSQkNLZnhnSEhPTzE0QVJZWGIzVnVYTDF5bCs4c1g3eGgrdjM5SjBDejEwSHpnLy9zUi9NZG5ZR0w3LzUrcm5qbzNIZU9HM2FjcG1EcUVmZWRVSWdwRzQ5WUZ3TFBRZUtvZUVNVE1IVUZlRmFFMlRWTVd0cWpGTDRuTU00YlRhZTRZTHBZSTFpcVFaS0plTkc0Y0ZXNmlXRS8xWmw5WUkybnZCbkdrTUlxQTNLMVE2WWNIWkhURVVjM29kdXh1UXdBdHk4Y2JOMzllcmwvMHhsK3JtN3dRSGRWZUI4OXEvOE5IWG5zcys4L3NyYkh4bjBCKzE1eUlSWWZwYjZaSk1Ob3RZWkdreXA2V0NLT3M2a0pMdkNGTFhxS1VrbFBBdHJNb1NhMm1jdFZLdGtYYk9lR29IZ29DbjBvK3ZCWHdtUW9oaktWUnE2UFB1RGpvRkNzaXFjVktYR3JTUWkxZmRDWVI0WWRpaUVqRjZMM3drQUk3NGx4NE5IYkZ1T01UbnlQTWZWcTljZXYzN3IwdCthVythSDYxN25vRDNQWFFYTzY2KysrWW16YjUzL0V6ZXUzZG9WQU5QSWdmdE90bmZTNnduMTExcHBYcXIyZzlYMjhZUWtRWGlqMThjREpuQnRlM0NPMU15NWFtUk1QUjlpYW1mRFFvMkU2a0hVZmgyODRPS0VTWkJ5WnNjRHhZVnBZblJKSGpqcDN0Rm9oTXRYcm56azVxMGJmL0w0aWFQWis4TGp2UERCcDdPMTFjMlhYMy9sN2ZuMzVUS3J5a2h3Y3kvTjduV2NRSjYyZHVvMmxpVEF5OTN5N1VjbGJkT3ROYVdjYWt0YnM3Ym13VmZKdlZBZGdhRGErMnppYWpLWklhSFhsbklwRmx5SGdTNTYzVFQ2TzMyNmNPSDhuN3ErZHVFbkhuM2lvZVJPNVR0M1MzT0FubnIya2QvMyttdHZmM2cwenQrN0NUOG1mN0J0M2RsR1RFdXkzdTZod2xDdFdweWtRdjZtMHVZU0FrbDJ3N1FKUEpzdk1sYkRPdVhEMmttVWM2aXNVMnd3Q0ZZUk5ISlZxdVF4Y0ZyVVJiNFVhaDhVYzBNMCtWQ3F2UzV5M3NpZi9vWUlCSWFHM1p6dzdybnovd2xKK2prZytRcnV3TWFFdStKeFh2ckk4M05ibTl2LzJmV3J0NmhDV2FLOXVGbTJhYlNWUnFoNUNrNEo5WmhtREZycVNkUnU0SzZITVBWUXpJMU5GeldLOFBscmVWd2g3RjZuM0d0dnN2NlMybVo5Zkc5YjJORFo5dk50K1ppdmthQ1NGMVhPL2VDOVN3dU4zQlNDcks1ZnJPWmI5VEtFUHk3cUt4c3JHeGM4S1JBeWJjWU92K1hHYm1uSTlSalhybDA5ZnYzbWxiOU9MSXQzd3V2Y2NlQjg5cS84Tkgzd0k4Lzh4WE5uTDM1QWpKazVzTGhYVGtsdTkzRkVrL3ZYYW4vU1pPUzNYSURKZldpVnhKOG1lNkZRUWxjbWVMN0tucDA2OHdXcU1HN2VTeERDYm9FU1FPMWpIODFSNmdhSTZtKzBNbW90bGRXTllXMEhZcUNOZ2RZR3VjNXg1ZEtsRC9mSEczL2dUdHpuZHh3NGx5NWVQbmI5MnMwZlc3MjFVWW1uNy9kOFpicUU3ZXlFUVVpcFNyME5aOGJUb1hGcmhSNE9WRW5LcS90THBXeUptYkVnS29FMzRYQUlMUkFJYVEwL0M2VWNibTVVYWF2WE5QS2Q2dGgxR0RtRTE4OS9ORVVuZ2ZNK29laUgvL3QyZnllOWVmUDZwN2t6ZXZnOUJaelB2UHhwSGczSC85YzNYeis3ZUZzMzRYdVdMNURHMzBQcDNJbXJEU2Q0cTBaK1hpanBWSE9MZGs4bUFTTXBFNm56VVBIR040OVd2RVFRYnRZYk51c2VXU1lkQXczMW5XYUkzU0RGZyt0bTNOLzlKdTh3ZE5NNkw4WVNqTmE0ZXUzS2t4dWI2My9pQXk4OW93NHlYTHVqd0xsKzdjWVRseTlmKzZHMTFjMWFEeFlhMUdRcmU5UFdJYjFIUFhYWnk0YUJGdGtwdE9Sa0U1OXZRbU9uTWJxZFFhdGRCNjdSMHRRYVRrMFMyaWdWYnVxQ2pIN2lzL0FtQ0RkbVY3VUpxZ2w1bWUrRVU2R09ObXp1eGdtM3ZnRlFSZDhhTmVBa29ZUVVVVERLRUU3RlRpWlJDcy9qUFZGQVcyc24rS0ZGTUJvTzZjclZTLy94NjI5LzlaUHZDWS9UUFR6azlmV05QL1BLNzd5aEd1cVNzNFQwZDl2cW1nUjduUWl0ZHpqWGhzL0NtNnRleTBIUUNCcDJJd3NtcmF2YVBSbTBSQlpQcitjRWhkS1F0YUxhQ0lERnlTeWtDUldEYmRZem1JSklxSFE3MU9qcHRpRTQyalhETEw5TUVBYjdrTTZ2YU15TndlcXROYjUyL2RyUGRnOFArYUM4emgwRHpuL3dIL3lIajEyNWZQMkhOOVkyR3lmMzFJVDRIcUNvOHJyMlUyT3FnYVorNDNFdzBCWTJaazY2RWZjNlVsMUozTkhjVk5Ba2NtbG1mZXhaRHgybWNoMUlPSjFhOFRndDBVTXpmNm9La0xSRkVQVnpyZEtHRTNnZzdjaW84WGlNeXhjdi95Nmo1ZC8vek11ZnBvTUF6eDBEenZibXpnK2RmZXZDb3BFcUpYeGZOMjRHNGFSTWpkT25zR3d0cElLRUlVbmJBa0RuaGNLUjZsMlp0eWtVZkhFbSt5UmFwb2VYWWZlQTFEZlIxYnNVcHRCMWJTRjBPRmxhWFFGUExlUUNvN25HcE8xWFZkVndmUDVXNUR4QjdxTjFEaU9DOWZWTnVuenB5cy84cGIvMG1hUDNiYWoyay8vSkg4ODJOcmYrN09yTk5WdW9ha21TR3puTmZzS2pmU1RuMHh3L0p0U1lXb0VVaEFVVnJ4VXExNFNqMXJWK05aSDJyZFhlMXdoa2NoZ1lhZzNVMm5BYUgzQ2duZGE2UTdSZDFyT2l5bG5tUmJVdWhnb0ZYNExIdno4L2R5UEJDcFZtSjNXVmdXd3Fhb2ZrUmd1ZGJZejlLbnJhVE5BVXF0MUdPTnZMZHZIaTVkT3J0OWIvNUVGNG5UdmpjU2ovaWZObkx5M251WjRwcGRodmhIUlA2ZW9KM29obThBclVzbWNVMDBpSEdkT3pNUGt2Ym1LdWQ1blhhQTQveTlNQXVXblF3RzM1RWpOVkJOL3Q3Mkd3NHVZMUVhbnlaVVhOcUxvSGlLWVdyY3NlTjd2ZTNyZ1ZqTVo5djZTbjdXTk1VU1RkMnR6R2xVdVhmL3luUC8yZkhydnZQTTVuWHY0MHJhMXVmdmY1YzVmcGRoVTIzM2ZtcWQ2YWZPM01QMXNMRE1PNS9Hb1lQS1ZUdXk2ZkswMktHNDBkT2pXUUJoM09GT3pIQ1VPcFNuaFk2eHluRnQybzFwU1BKbmMvbEhTMHA4MEZNSDY0enhTNVpDbjJZWnRETDErNWVueGpiZk1uYnRmckhEaHdMcHkvK05Fcmw2NTlhandhVHp5VnY2R3hNOEY3emN6NDFWZDVCQU56MWFlcnlrSVZZV0JOZTdyb05EQXluYUlQUXJYd3hqY2kxZDlaeVhPNHRrVzdiUjZueVRRQ2swbUxrQkFvWHBNSENZd0REeXFEYnhKc1F4Z054N2gxYSsyUC9NeWYvNHVuN2l1UHM3bXg5VysvL2VaNWxsRHN1OUZhMzJUVFFyWEpSczZ6N3dPK1RmQ3VKV2ZaNSs5cXk0RmE4eldxK1lwZ2UwQlloYStJcHMvNmVscTB6a3BwdnpKQmIrSzA1cFdDQk42MzZkZXlIanYxeVl3Mk9XdzR2ZW1xanNIdUJFYTFoa2VOSEtxeTlhNUJ6aFh6NHRXNmp0SEYwR0JCR3BoU3ErM0sxYXVQYld4cy9QQ3YvcHRmM2pjOWZhREErZkJIWCtqZXZMSDZZNXZyV3dkV1U5a3Zka1JrdHRtZGcwaXU5bGpyMmRmejF6dW13My8yWGNKRWxUeUdNRDNzYVlaSjdkck9FalI5RnVLSFhuQ2p4a2dXT1h0d0NGUzJYdS9qOEd2UUJGVU53NXJYa1dKVlBBTHFHckNlWjV6bkdBMEhkUG5LNVQvOXpkLzhUV2Z1QzQvejhHT25mK0RkZHk0dG12M1dRZzZJVlh0Znp2dE11N2xjaTR3SlYyalVoRHpxZVlVZExaaEI4dzJsUUtFUGZhaVc2SXNBSmh3RER6ZTJoVEpWOWFHMmZZVzNVbUhaeEh0STQ5OXZLYU1yd2NpMU5rR0hBWUJyVjYrZEhnejdQL3BkMy9QSmZYbWQyd1pPOE12VTZxMzEzM2ZyNWhyZER4VFpYdXN3OXp1cGdDbnZ4M3VjaHJlWnl0Q1ZQV3NWVnE1T1N4Y2dLOGRveXU5SlVEZXBLaUQ0SFR0Y1crdGU4U1EwUytOcHM2NGp0V25UNnVzdHdWTklURW5aWWVBOVQ2NXozTHAxODQvL3l1Yy9kL0tlZXB5bm5uM3M4T2JtOWcvbFdyZFNxalJobVZHYnlrMDk5Mm1qcm5kelRvM2VNclJycTAzcVdKRDZhMnFicDBFZ3NCN3FqZ1UvRi9adTdScFd1dityaUFEV3p0bEc1T1h6cGVBRWJuUWJlMzRnYUxHcGh6NVNYeXRQWE5sQUFLblZjTmoyVENwbXNGSnVrNXR4eTRROW9FTmxHamUxeWx5YmVHM0xmOExYVW80VU5IUW9qQUNpUVRBZ01ZRFI5a3NNS0tqbGlOaFJhNnNJYWx0eGpNNXgvY2IxTXh2clc4L2NkZUNFcnUwREx6MzFuOSs4dnFvSXRQZFR2bjVUM3V2T2dwcUllRVZFcENWWG9VcVMzaUIvRDRTSm0rNXpBb2xhcW80WlNPMkc5eDZpeVM5NFlmVlNzS05zOHB6TUNwcTZ1SHdMZWFDSUE2M3BTZlIyUzVnOW9jRzExWGtHM2dhK2N5QWdEc0pUVmtSZ3RFWi9aNGR1clY3L21WQ2ZZTlp3N1VBOHprYy8vbEs2dHJyK25ZUCtJSENOczdGQjk2dm1rd1FKcjI5WkI3V0pWTlEwd0lMd3lZc1Izb3RYMzdabHp0UTNBeURzL1JKb2FXOHBEY1ZCcWdxa1ZiVWJScFc2TG01U0Q5UldzcWE1YkN2VUZ0aTF1MTJxNzdoQkRrQ0tuQWRCWGNmVDB6ZHUzdmoyZHkrLzhlSTlDZFd1WDcwNXY3YTYrWnh4TDVqM2M3T0VvNHYzT0VlU0dvdFZuUGdpazdzRkpucWNnOHZYcHUxcUNCTmlxVWZDRXdEaHY4OU1FNHFkazkrTlRIaEZURFhQVWhzbnA5YkZvNU5EVXBuaGZwQ0FscTZ6YkFqZXY4RFhkRXh4aUd4dGJmSDJ6dWJQN0xVZ2VpREFlZTdGeDcvbjFzMVZxbC9zaVdKenN3Sm9nb2VxdE1LM2ZPMUdFRFJ1djFyQzVFT3pTZzVEMDRweTByZ2hLZENOeG9Ud1k5YUcxMm85VEZyREx5YUdxcThWbWZFUU1rWkFUTTJmaDEvcG9RclA2YnNFbUxuUitTd0F0TEZzSFpPcXRRSTF3MVlDYWsybVZMbjJzMURwQlNWZFYwZ3RPaGhLejFYcUZEZ09VR3ZvWE9QNmpac2YrVFAvcHo5My9HNTdIQm9NUnQvWDd3L2ZOOW8xbGJVZ3JXMy9hSXBxaERmckhRNURLd2RTUzFkelc0b2dsUUV5YVI4cjhETkI5Y091cGZ1NTlHUlNzR3hsemNibFJ4TThjSDJseVNTdnVKK1NScFZWYysvY2xOK3ZBMjJjajdGMmEvWDBZQ2QvWmxMK2ZrZUFjK0xVc2JuTjlhMVBXamFGS25IcCs5WHFHbVJ0OUhENE5aRkYyNWU0SWxYN3dvSXd4QlRObU5XOFJzSTdaaG8vVXdsbmdyd0F0VG1ZK2sza2V0dDRYMnUvcEpLaDdDZWJFMVFULzNJM1VEa3FIb1p3L24zWmVSMUN2OStuamMzVi8zd3ZJb2EzRFp6UmNIUmlmVzNqVVptaHFMWG5rRzFmUDlpTXlLbmxwcDlXNDZrMDRFK1lQNm5jK0NLdHIzVmZzMGZUZ0NTMW15ejBFSzJMRmlkZm1jWUd1TmFrSFEyMXpvbmtRVGdhNEFWQ3dueXJVb3VTWFhNWG1zWUV0SHlDNFE3UmhqaEtNUVplaG5DK205cTRBdW1ObXpjK2N1WEcrWWZ1T0hDY0srT25ubnZrUjdZMmQ1aGFHQkFKVzlKdkoyS1pVTGhwakNEdjhnSEliWGlVQ2RNc0U0RTlhUy9PSkZBSjJ0OVhSVis1L281YU5xY1YxOTFJYStNblVCVllyek51NWV1dDk3VzByTkZ5cjgwWWFhR1hxUmpkbmtZeW9GRGdhYXJnVktBaVRscE1ERmhzM1lZS1dyMjZUN1VrQjB5bHBsUFdlZHo3MFRsSTdQZTJOemVYdHJjMnYzVldUTnl1eDBuNk84T1BhNk1STGJ3WGVDcVkyMEFTZGhIWGg5eG8ydWg1cFVzNUZOWXdlM2JXcHJWclFDcnZxZEtBNnJmU0VTcDdGeXdvZFpYQ2Jzd2RZWUlReTE3RFBXbUV3RTNmVk8wbUNDV2wvTmRvT0tSck42Nzl5YU1yaDlOWjhwemJBczZ4NDBjWCt2MytOMDFzU1Q5UWl2akFCMFR2N0l2MUhxR0ZtZzhsYkUwaFQwdlY2Yzl3T2RVTXY2dkI4czU0ODVXNXpUNUMxb0orYm52T29PRXk4QjZOVHJXMjRUdENVNXR0V281VEM1bEQ4RlE3enRHZWo3b3JjT3ZXcmVjdlhENzcrQ3drd1cwQlp6d2VMNHdHNDVWcHg5cWQxaGZZTFkrUVhlUG12WjVyZTZEVUorUXM0VTNJeEx2L3pqQkpiN25OdzdhZUFuUUJZelc5WlUybVYrdnJLamNCTUNyVWVLQ3E2WUhiZUtxV0hIQzM2MGhUOHo1cEsveVUxMWlhakZ2b2RZcE5iMjdrWUdkN2MzN1UzLzdkZHl4VTh5ak1jNzA4SEkwbTNoaGhmMXJEVSt6bVFncU5NdGwzSjQ1TUFNOHNBbnB0ajV1NnVUbzg4WXhwakRSV2RLSm4xS1dtdHB0b1FxZ20wZ2FJYXJXL09nNWRobWR0UzRBYm9oMFQvQkpOVUtocG5ic0tRdG5LNjZycENMVGpoS3Jzb0xSd2hVMjN1OHRscm01QTBGclQxVnRYL3hSWUR0L0pISWVlLytBVHY4OFllYytWYitwcjhxUWxKR2tGVVV0bGZscU8wM1o2ejFUd2ROcGtzMUw3OVgyZmJXUElyUXFlQlNQWHZNRjlhY0dMS2JhdGI1OU9pUExzTzNwQU5VM3R0b2hGS2dkQ0kvUnFZUWo5b1Z1WElRNHBiS25SQ3pkdVhIOGkxLzNmdlJzMmJpdFVNOXA4ZU5aWTlMNUszaWV3WmZXVDNVK3g3bXM4SVF6VmRoR2drRXJoc2N4eGRoOE4yQ1cvQ25JbWFWRlNsYmFiTXlRWkFuQjU3MlJNdXllZGhVMmZmSjNhZXRocituQU5PaDZ0WGRPQ0pyMWU2aFNVU1YwNHMrUlpTQ09DNFhCSS9jSDJ2ek0zMzV1L1U4QlI2MnRiaDBSbXY2bnVkbXNCN2VheHcrcjFoTWUyNmFYdGlmTUpGa1hKTEJlaDFtNDBxeUJoMWF0VkZXNjhra3g5amFHWDdqSitCYm9PQ3AvQjB0K2lZUlhCK3BBcG50ZFg3S2NQTk5LZTc0dnFlRHJneDdrRFJZUUFQRlhOTlpHV0kwTVFySkVzNVl1dlhiLzYzR2c0T2pMdDh1OGJPSFB6dmQ1b05ENDlhVlZFZUpMT1ZNZVpXS3RwZXVKSk4rajBqMmQ2b2s4VGNwMnArM0xDWEtUV1kxZnZqdllTUlpQQ042L2EwbnF4L0R6TUJPaVc3NTBxc2t1bVlJd1FlQkdhK0o3QzFlc2xEYTJhMTU2bzBDeVRDV2VSQkRXV3FZWE9hZnQvVUM2UHF2QUI5ZWZ6Q3hiY1YyV1V3SFZDVk4rRVZNYzBpbnhhQXhCc2JXK2VBUWJQM3hHUDArdDFGNVhpSi9BKzZWQ1QvVHlXSm04UUN3ZkFpaHU0SGxZRUNpeEZXTFdYV0tkRjRMMzgvVlZtcTVFcjFONlJGdzJSY0phbGRwUVlsR1BLamZPakprMjd2N2h0TnZxNW1zdTB2RkpwRTNPVXlrRmUyUjVSbVJRRk50YlhldXRiMnlzSENoelBxQTJIbzhYeGNQeStrMHpiOHh6OEpMcTV0bFdaaVN0ZHhsS2hSd002ZWRlSlVSOSt0SHRaQ1pKaVZGYUEwTXp2V2xETkFienNVeG02NldBRnZiM2hEQ3BIL2V4NmNmczQ0T3ByN01NMm03YjZsNFIwdERURHQ1Q0UwVVpqbkk5SXBmSkpBT3JBUGM2REQ1OTZmcHpuZTR1Lzc3RkhtVFhKdjkxWDNOWUtKSlBpMVpvKzJDd25kVGtHM1dUcENDNjNjVGRSYTU3UjJwaGFzbWZUOHJqNnByWXdJUS9scVZwRDZ5bnZmMW9NSUFnMW8xSGIvckQzU0tLY2tLMXVPUWcxMkZaWFZ4OEIwRDFvNE5ES2lTTi95SWpRdEFMZlJKMkJHVktjdlhRSlRBcHZaQS81VkQzSG1jWm9UVnU1MTc3VHAxb01sWXBBSUUrZTgwRzlGbFZkMjQ2R0lxZUVjMXUxVTMveTUyVG44YVdtNjEyVjZkWEJGbTFxMlhaZDF4QUlYMEU0QVJwUzQ3dm1vazBkS1BlV0pXQ25kNmtGWWxLTnF2b1N3c1pUWXd3R2c4RURhWll1SExqSDJWemZYTHFmeHdka1VySi9WMStFTkcrRWxtc1dMcFRhdmZWbGIweDQ2UUZtdXhLVmdhOXc1YndqSE1yOHB0cm1FcXJKU0V2STVKdE9UVkFjbGpyUTVhQXVlelhIa1hxNFZqbUdwTkpsNEhjZ2JHMnZQNTJteWNxQkF1ZjRpYVBwb0Q5NkNQZTczU3RnVjlyWm0xS3RFei9vS1dzQnA3WHdUUGZxYlQ1cjl1dm1pNDBWR1Nubmt6bkkxMHAzRUlpaVQ3b203bHNsaVBZL2p6UFJpMDVzSTZwNnZkYU9DNk94dWJsQncrSHc4S1NvZFYvQVNaS2tKekRQMzI4ZXBwSEgzT1ljejBIbVF0UWlTbEVOYUdZNVFkdjdqdW9yUWZ6RHVWRmNuUEM2cWFxakUrWXBkaUZ1aTZBR0JGcVhVNTZsTjVMSjZVekFoRlhsZXRHUW45cnZaMFhOc3lLTTlJcUVxWHljQkpPanBUN2NhRGlDR0J3NlVPQ3NyMjBlR1E3SDJNK2d6VjVFY0NibE1HMFRsRFRsYTJyNDFCWVdVYTNJTitWRlU0MENsVW91UUpVUmcwa05xWk1BVmRmZURtc2lOQ1Y3cjNxRzNXKzBpdkltZ3ZsLzl6MnYxQmt3Q1pYUmgvb0swWENQVHYwMWxLcWpKcUN3VGFFRlVEQmV4bmRQdUMrQ204R1JCdUJjSW1XLzNBUXNlVkFVMzVPaXhsTTBqcm9aSGJzbVJJSWhQRGoxVDcxMGtLRWFqY2ZqbGRGd1JBZkJRQjBZalR6bHhwelZXN1hsUkRUcmFSRGNHTlRXT0haUVlXZHRUbiszUEpPb25XNHVRVitsdzBzUitLWmE1cTdEcVpXZlEyVUtzM3JnVFdHNndseXNmbUJVYXN4U3JmclB4QTVKdTZldTVYOUdhLytmbllQME9HU01PVzJjbTc2ZndITVFlY2trUmM1ZHc4STZzellWcU5YL20rVzFGVHljWDhuaFZmajNrQmZJQkJCV1dEa3BWZjZKWEV2T0x0Vi9RWlVZQ0RmRlRmcmQ5V1paLzFCanBEM0NxTjFwZmpOQkhkQ1RSOTFyVkhreDNGYkZwaThvRzJPd3ZubjlrVW1vM0E5d1VtUGt6UDNHcUptUURjSU1kWnM2NktmSXpZWS9JN3ZFbFcwZittNDV6NjQzUHpWYlRZc04xVk4rWmxwZVZhRnJHdzJiVmFIQnlrWUN2L21zTlQ5enJVTmFhcUtDZFhKQ1dzUHU5cUlsS2g3V3lPNzh6KzdncVpJWEpUQkw4VVFqaHRZM3JyODBDU1A3QVU0UGtKWEtoWm1TMUhyWGJJeE1iZnZhalJEYlRSVm1hazR6aGVPWFdXamszY0sydWc1QzdiL3JyN3N5aHovbFBkVm1JOHYxZlEzMW11QkdDSElnYWFtVnRGVjJtcnRTcXg4VTEwUUZRL1pwMGlXV1NoN1RaTExLVFFKVlNycEtud2ZYTkZRZW5YREhUYnlPVGVvc3lNV3Fnd1grRUJZSXRFV3BPU2pnekFtdzhKNE54eWFRTGxORE45UUtvd2Z5VXR3SFZTODIxbjRYMWNDQVdsRzViTDJSMXBkdjZrWEw0T1J0TEtxdHJlSHdQVy9WUmJwVlFmcnFrSnVwUExlMEhIeGhhT2VKZ1hxaHMvUUdNblhabGxRWU9abjVGZ2k3RU5wamNCUGtUd2ZuY1JJSTV0K0xvSkUyME14QTg5RUJKL29VYm1sR0ZUU1R0bDJITkMreDJ5U0E1cWEzb2dtenNwbWdQYktzeitPWWNBU2lBQmpaa1FQVHZzRTcyUHRXTzcxclNUK3FRRzhPNlFWdE9pSWdDU1ZzMjBveDB0TGtLYk9pSm1EOTBPaTJLTUpDclNkNm5HUWZuenYzZXAzbFNZbm4rNElvbU5CVEpYZmgvUkZ4dGRGVEpuVWlsM016QlQ4bUxUUTMxUkxvV29nWWJpVGdXcEUxSElNdTZkOUEydGNsODVYOU04V05hU1pROSswNmRDTFZaYmVrR0tMeklweWl5dnR0ZWd2QmJMbGxuY0NwaHZoU1hFNnBPaGR6RUI2SEY1Ym16K3oxSHFLVzlZUzc5YU8xOVUvTlREZTNQSEZyZldmQ0pHUDRIQTF0NkZuQ3NBa2RBcUY2djg5MVFzL1IyS2ZUc2lFYTFFNHFWSHJZZ3VRK0hDMmdXcUxjUG01UWdpMmMrUFM3UVJ1ZkswMXB1dlR2MlkxV1ZEZWxoZGVxVE5DSmdEUkpDcFlQWWxwZW41MmRrUW1lY09henNaamhrUUFlRmtDajBlQ0JWOS80Nm9HeGFtYldtc2pCUmxxelM4Wk9XeGcxa1lFNndDN3VVSEJkZHFGeEp5MmVrdHFOVjJISEt5TG1WTG5SRWF5emtNb1Vwa3lndUt2WDJOU0VCOE1FdWhMczFzUkp3c0cxY0J4WmFxeFdjWGdZY1V1ZndscFBBRktFREZxemhla2diektwZTJuM1hnZkQvZ2UrLy9kK2IzcFF3R0ZxdWN2Mm94cDhYNFpvQndHZ0NRcWRzM2pGTUYrcFYrWHJEK1g2c2l1UmlvWjBZMml1SWlOVkpRZkNVQ25NSDlnTGh4Z3BnTnFjWTJreVhRMWlJQ3lXdEI2S1pkdU9NUWFEL3FEYzZTbk5zV2s1b0p5ejNrTW9RYTVsaktIekY4NGVXSTVqUkZxMGZHbzFqa3AxZXNwNGRadWJKWnF1SEV5N25SejE0dHFVRTJZV1BuenF6MCtodWlkOVVHM0U2R1QyVDVwZUJhRUNhTFdRVis4Qks0QVFlaWVpaXRoU1NWaTBPUlEvUWswUVBZa0taakFCT2xpUEh1WlF0cWhZWmN2OFBXTzBRV1UvSjJyRnpUWVAxOUlzYS9NNU5FbVh0dnZKZFhyWDlGU0N3NlFZTHlDVGt6b3dqek5UcUhTYllWbHIrRE1qYUlESmRaMjlnbWFtZjU4U0ZsTHJNcVpBQ21ucWMwOG56aHZGMWdseXNLM3ZmOElvZFhHZHViYmJxRmJ4RDdXcG0wemI1RXRXd0wybzBvZGpDcVl4WHlPMWJRc2k3WW85OWRmUlJoYUlUTDdXVWhQMkVBakc0eHlUTm5QdU84ZTVuL29HOXJTRTZJRHlyVDFWYy9jQzFJbkxxOUErcnREcWJlcWV2ZGJ6dFZjZDRYckh0Zk1rcFo2YmxPdEJNTmxUKzFZZXFYbVhxbDVCUUJUNDc1dWFEb0xjNXAweTgvc1hpS0VEcStQUW9EKzQzbjU2M1V2MHlCMERUNzJGaDJvU3Q3dnR3NW4xK2FlK05aR0o4Ym12MzB5dTI5U1YvNmZjZjM3WXkwZzE5eEFENDVSdHdnVGUvMXU3aDIxdXZxdm1Va0NsbVRTczcxVEVBNE9SQUxRWFEyLzd3RzN6RU5xQVNBN000NHcyTjNiT2gxVDNwRmFPNmRwYms5Y1B0b1loYlVyNm1LMWw1bmJDdEVsTm5OUWFvbFJGN2lhUkE3Tjg4RExGaVpicjJhV3FiTGticFQvRHRhZ255aWFVVC9Kc21BbldoSWhVeGdpcWtyeEJKMFJ0a2hSdzhsWEJTRUc1Qk1xR2NBUlRZd2xObFgwclduamN2eFViNFlLN3c4MFNVREZyRU00VzFLNkszekR1Y2tkaWdnZ2RXSGYwa0FnN0lUQmtXb0lzZSsvZWxmMmNGQk9vcDkyVStHbGlVajQ1Ynl0bWJ0eE5VOTgyc0N1akpqS1ZaWnNZaXJkUjNDMGR6bjZ4RXpXYVE2bXhLR29Tc01yM0dpendjRGxQdlVldWJZMUg5YXBKVlltbXJvWVFnTi9PellqZGZSUDBzNFVBS2diUkhMUU56T1FEeWoybW9xVkdhQVdQb0p6bllRQk1FR0k1c0Y2MUxZQldxM1BjZHllUE9jZ2FVZVA1SnZTeHRRNmVCYXM3Wmw2bmdkc1lySzgzallaQUNEVFV3cGZLeFZ6UTFKVll6ZnBJL2VZdXVyQ2xVT3JaYmZ0YlVZZXRreVFoZFMweWtacjNYcytQVmxlakVJRUF1QnQzM2ZIREozOU5ENUx4Z1lWcVJIU1JxVlNOcExzQW1ydVJIN1ZSMkswTVgzRFMwd3lyNlc4TE5BMnZJdFViTnhRckwrb3NQZ3lxS3Ric1Z2dVlOR2cycVFXbzNvZFdBV0lvemhFZVZuV3ZXdTgzQythQjZpSDk3VnpDL2QxM01waDArKzJuamlOSzhUbG1naEdhcVFGeXQ5Q243VEVUQjhRbTdHL1piWUJNcGoxSDNmT0VOYW42ZjZPNnJJaHF2VnVDQ1hNeXU3WHRTSE5lSlNUdTZnUkJhMnZMVkRtb3lUdHdmSDljZFFsdGNIMmxsc2xTUGNQRjFQRFVoMkZNQk1NTWFOMmdpTVBOYWJ2SDZpMnZzK1hhNzVVam9sQVl0L3pZRHl6SGtTUk5yalB6MUxVWCs1S1UzVS9DUG5VQjdPU2NhNnA4VkVqWmV2clZzMmExNVVtVHZOTDBENmo4SGJRTG1NUlVlN3FJS0dpam9kYTNHSTVMUy8wejh1czd3aDR5TVkyRHdjdmQybENRS3dlVmlJR1dwbXJudEtNelVZeHVyK08ySjFTM1E3ZDlsU0ViU25KQTJsUnNaRmZnN2pjQ0lhS0pNTjZYV01laFEwczNraVNST250MjBIbkkxQnR2Vm9wM0g3VGw1TUd5VXJKV0lGTlByVHRGdFllek41TVdOMDFsOFZxOFRUMU1hOHJMQnJtRmNTUGJ4dFFHMDhKOENVRitaUE10cFJSMG5pUFhlWTJScXg1ajRiSmNIKzU1QUJreGpieFU5bmwvVEEycFhYaXJrbVJuMG1QM0JaemhjRFF3SWhlTHBhNzdrZXE4YmZUUVJJOGhNNFNQVTU4NnpGdUMvVGFWR1JocGJqbWVSQ2EwZWxnL0NMYUhEN1grTytyQ2Y1TmE3YWh4K2F0RExuVi80ZDlqMkRVZ0ZTOUp3UXFScXVlcDUxRkdySXhVZnpERWNEaXlhd09sTm5rcHdhYnNHb0JMc2NEMkJsTkk4M1VmeE5uRnpQTHdBOC8veXdNRnpzMGJxN2tZdVJyMjV1N2E1RmxyUzVFbVVibzdQUnQrMExYV21sWnZWMitGMlVzVFovajRTUzAyYURtZGF4dS9JQlBXN2syanU2WGFrMWJaWmpCRmZjYVBFT3dXT2twSUFSZUpmekRhZ0dxZEpwUnNrc2IrMFNCUHFRK21ZVEtJQVNuSDZhWFp1bE1zMTVLeWxzT1ZiTWdTMGFEd2U2VzhsSjFHTmFYa2xQOU15UDRiVU5MZG9RY1gyTlVzQW9FUURROFVPQUNrMDgzNmJiSkt0QXNJSm4xSjdjOER5WXRtOFhCN2FOS1VtVjZYN0Y2cmFXT3o2cmR2U3grYTdLTEtPYW1EU3laRWNyWWZqUnRTaE1YTlBhRXdiYnp1R1pyL0h2NGFZMHlGZnE0cXpaakdxM2JqY0RVQmp4WnZNMTBVQ3BpWWRkZkRWQzg1RlhSZCtMOHdBNEx0Z3dZTzV1YTYyOVg1Q0RtUW1nNGRWR3YvN1ZMWmQzVTMvR3lWaWNyWWNZM3dhRUpQV29VM21qa08yb3ZZUVZ1TUtjSW9FelJETnJXd0czV3hzTmNNYUFoelZGWVIrdmRnNnBSMStEbE1saEdlOUprM1JGRXFIUTVWMVFVaUJqTkRCRWlTTkNmQ3pVbS9JOW52UnoyL01MZk5RU1c3b1g1Sk5QVUducmpSK2FDYUo5OVRtbTgwSXlmVUVyWUdMZmhzNVM1aGwwaVltUWlIaWdpNnl6L3EzaXNzZElmakJsTHJNMnNrN09FbXVYcDlLQmlETGdGUzA1eWJNRFllaHVteXA2T3BUbGxUVlNEWTNjL01oRlBISDNxWFdWMDlNRmJ0TXk5LzJucWMrZDRPTXpWN3kycjZaQ0c3Z2wzeUdhcjlqS0NwZlNVdGVjMVVnTlE5Ui8yaVQ5bVZPR25xbEdyL1YvMHdhU3A5VHZYZkY5NUFNcHVxY1AyZm1TYnBzelVsZk1QL05jYTBMdFNWZ29LbVFrZWdSUkt3TXNmU0NOT2tLYVpSVHE4MlFkU2crYVh0cHZlTUYrOGhYd3phaFVMaW8wS0ErRm1rTWtkaXhYMEExM0NBQlZBQWtEUk4za3pTQkZxUEpwNzJrMWd1YWVzMkNEeEVxM2VhcEFwWjIzelc2QUtvTldYT25PZE15VzhFc3crcU5YS050dGRZK1JCTDZwV0pLNkljeFlGU2s4RnR2bzFnUXROVVFXTXFlMWtKOVpsRXFwSER4Z1FObnI2V1lxb05wZ2k3bUUxSkpwaktpa0NaMW1VemVTUjZWblhiQ1dGL0tMTElqUlhwOVRsWUN5MmxsQ3d2SFhrRndNYUJrd08vK1J1Lzh6OW1XV2F3eTZtOTkwaS9QWXlyZklVeDhDUnFrcWkyTmF4WmI1bzR1aXhWZG16bXpLMG0wdGkyaUZjYW9Ha3B4VXBZdHdqcU5qNmMwS2FTYzVSNVI4a2tTU2hrUVZRWmMwWmJFYkZlR0E1a2NDdEhtR09zVEdXdXBwcW5WTVlDaXZ5bTdWaXA1OFhOcWMvSzd0U2E5NXRGOWFWc3ZwMzhrVkZRdXlHeTYwdDZuYmt2QVJnY2VJNlRKR3FuazJYWWJEa0ZHTzNWK0VvZTA3S0NiOUs2djBwMXZSYjJ0VkhWN2FkNnkrc0pjN05wN0JoUlk1WEd4Rk53eXNyQ1NZMCtEVzlabk5CaEJGNVN3bWJpanAyd3Y2dnFKVTI0OU1rS1VEZElnWEMyQjE3cVZxYWY4ODJrbjlEUUlBZ09vcm8rV3pWL3FvNWxoQ3NTNjUwTnN4N1FzOVoyS09nOVRKSTBUN0xPbDJDbGRBNFdPRXFwb1VyVmhnQ0h5TVhMekZ6TFVVSUhHUFE4a2NDUVgwMmV1UHBFWG1xQTFRSTJ5K0J6eTAxY3VuZVNxc3YxSHgrSi9Ya2k1VDVUQTBBN1R0OVk1cDhZUXV4dUpvT3kwOEl1aVZWR2djTXJUOVZ3UmdrMWRZNHJ4YzVtREZyY1pDS0FoTld3TUtjeTdpQ2lvTndnWUZldk1FWG9ocUtWcGJnVzdrODcxY0x1dmVUQmkwamNYelZFeHExZFMvWUVMcVdkV3U5WGQvaElJUHRrdEs0TW9kVVBpTW9VYU9nRmd4VWNaYW5LQUtUTGZLbEZINjRDQUhjWksvdHZhc2p4NHhaRVpEOVgzNVJHREFodzlNaUpDNTIwOTlWcDUrNitnWFBwNHRYTncwY1hmME9NK1Y1aUJpdFZYa1JqQXFGd2Q2TnpIeEJsYjJLUUxXekIzL0NxakJwYnMzMEJNQXJ1MitvSFFtQkEwbVpFVVR4SkR2aGFsaDlzUXJscERDSlFwdXpwc3NrMkErSjJ1U0NEQ1djMnFQVHg5bWM4NENnb21wZ1ExMVgycUJBS3RKK3dxUmZGRzZFY0Z4TW54bDJ2WUsrWkE3ejNKbVV1WTErTyt3V2tBZEh1UmdSQXVraldKU1E5cU14RlRPdEtqdDBrcjhKbHVsS1JoWUpNV0trb1liM0hWR1IxNnh1NXA0WE5aVmNIQXVUUWhFcFRyU0hVSDdtS29kSms5ZkNSd2MzTmpSUUhEaHdBWnZuUTBsZXVYTDcydmNYU1VURmdWcTJYTWtjWEJBYUQ3WTF1REJoK1VaQ3hYYk9Zc0pYTEtBQnA1ZmtvdURnQ2dmQm9XbnlIU3ArQjRRb3dHTlhaSmhiLzcvWXUxRW51UEtUMVZqWW05bEF5TUp6QkdDdjR5TzZKS0NqdytXdFRWS1pkeUVMczZXQlVlc1FLUFRLL1FsdzRPRElBRWJMRFc4WiszQXBjZ05YVnpDRmtjeVRDR01UajRyMkxZWkFvNTRuZG80TkNwVi96M21DMXdpNkNjTXdaVlYwMGFaT1lyWHVmWUdvMFpDNUp4RGFQT3YyQ1JuZ29iVUc4M0haL1lORVRTd1RGU2c0ZlB2b1BOamNXQjFOVGxkdjVoYi8xYjM3bjU1SU8vdTF4UG40a1RWSjBzazV4MGxCOXVrVW54V2t0YmtyUndFRFlqVHpJWE9BUmFpNkhkUkJ1K3BOVmd0QU9rR0lsZlMxbUo5UTJjVFhySm9iR0VIWVBNc1lGUjhITW9NbEFIdkFFa0dnSE9BOEtEY28xUkxRTmEwd09NUnJHakdIYzkvTjhESkJBNXprRU9Zem9vc2hvVEttRlZwQ21mcHViQU1ZRHVkajJ6Tlp6TTBFeFF6SEFuTmpYU3dTd0FyR3lkTEt2a0NPeFB5ZXFDTkVNeGhBdEZhYk5iaUJvMjBSWEQ3ZG1JQ2xyekpzeDVmc05Ua1hyRi93SWRialJEc1llTTE3TnM0VnlyZmZWN1ZHREpGZy83eG83V2FHVGRYNEZ1d2h2M2had2hzUFJOUzM4RDIvZXV2YmpXblEzWVlWT3Q0dTUzaHc2V1laVUthZ2t0Uit1QVJpNUE0NENxQXREQ2hvS0lPMWlUWHVhb3BhMFM3Q1J5NFlhVWp0MENCQmx3NHh3ZTFkeDdHVWdTZDBONzN1VnRJT0d3SWdDaVFKRVF5UUhrRU1raHpZakdKMERaZ1F5WXhpZFcxRElHRWFQQUtOaFpBeU5xeUFNQVpPN3J0NGNKRGxnakp1RWRMbUtzcmU4WW9LUUFiRU43N0tNa0tXTUxGWElVa2FhTUZoWkQ1YVBnWjBSWVd0cmpPMit3WEJzb0hQWUx5Rm9uY0NZSllnd0JBbUlNaEIzQWM1QWxJSzRDOFBMSUJwWm9Da0NKUUxGQmxBNVNCS1FaRlVpUktTcGErWStIeUlxYi96d2NjYVBLTFJwTFRSMzRCU1BGUU9ZYW5oR3FJcDFZRXE1TXl4bzFrdUpCS3FOUjFNREtON1RlRVp0ZWZud3BmbmVvYS9zU283ZFpzbDdPeCtaZjdJd3YveDk2OXVyejQzek1mcnJmYXl0M1lRaUlGRUt6SVJPbW1LNXU0NXVWNUJrQ2JMc0VBaUhZTENFSk8yQW1hQ0Nlb3MwQ21Ec1B0eVNOckFnY2ZHeEVGZ0M4VDN5ZFFSQXRJYVJiWWlNSUdZTXJVY1FHY0xvQWJRZVFwc2N5UHVBSHNHWUlZd1pJRW5IU0JPTmJxYWhsQUdsSTZSS2tDU0VUbWJRVFFscEl1aDJHSWtTcENRMkJHVWdjUjNVWkxqMFNsQUFsV0lTcEJBSW5RdFVJdWgyZ0N3bEpJb2NlTG5nS01kQ01OS0JOb3c4Wnd4SEJ1TWNHT1VhNDF6UU56c1lqWUNkUHJDMkRxeHZBQnViZ28ydEhNTmhCemtkQmxFQzVpN3laQTVDWFFBcGxPcUFWSTZFTlRoSjNCNGNybERpaFlCRkkyOXNzcG1WcEwvb1FxaUdhUkwwbmxWNjBSb0ZZZVBiSXZhbENVMHRKWGNLU0Vxdm54RHVLaElCRGk4ZmVlWGN1MmY3enp6NWdZTUh6bWRlL2pSKytxYys2Mm1mVnhMdS9QSkNkK25ZMW1EaldFSUUwV1BBYU9UakVmSjhqSTNSRnJLalg4TVRENmM0ZkdTQWxET0lXWUdXdzlDY0FOeEJ4bWVnV0VFcFpkOG1CNjdVK3ZKQ3Q4dUloczdIR09zeGpEWVFzd1BHbW92cDNZMEpEYU56YUswaEdBUFFZRFpRcEdFa2g1SVJJQVlxQVRLdGtIS0NSQUdKRW5SU2pTekxrU1lhVEFKUlBSY21PYUVJTWlDMkhzM21SQW9pdXRqUTdOWkRCT3Y1Y3Z0dlRnZkFzbEFNY1NFZnNTL08yWkNVYXNWZUZ2dHpubnpUeGFnRHc1Q0dwaDBvbGNKb2hqRVp0RTZ3MHllc2J5YTR0VDdFdGRXTHVINUQ0K1lxWVhzNEQ4RnhzRHFPUlBkZ0NOQmtnRHdIa2dTS21zVkRVOGs5cVdqejh2bFEyUEJaTklINnZOZElUUllxa0p3Q2FnS0RBWE1tTFdHM3pKcXpUS0dncWRiL3dWVDBSeVpLeWNyUjAvL0w4dEl4YzZjOURnRGNFcEYvMnNubVhoU1NieG9PZCtiQmx2NWtBR0pTNUVtQy9zMm5zWDFwQXkrZTNNYmgrUjBvZlJQQUJvd2F3S2d4dE9wVkZDSzVzb0RXeHViTTRmaXVsMXExSGtkSngvNWFNaEJvNTMyTS9XK3g1QUtMZlY0V0FDWUZpZVg0UnVrSVk5NXhtNDBKekFsWU1udmFBVWpFMkp1Y3l1M0xESWFCc1dGRllvcGtYUk5aMEtPa2FFV0ZZWUtBV0VHRVFFamNoK2NqSVlGQXc3WXlhVlQyM3JKbnl6UzAwMUF6QkJBVUVyMEVHQ0JoRFZBT3FDRzZxY2JSWmVDSmt5bDQxTUYyYnJBNjBMaTJQc2FsNnpkeDVlWTYxamU2Nkk5UGcyZ0ZLa25BckZ4NHcvWTZzVUNFb2JXeG50bTZTSkNtMWpwTjJWWlRyd2xMVGN1dDJXNVVDZG5DVVFic3JWRjNscnBOUlc3RXNZOE13dHpjL0NCaDlmVzJGck03QVp3eGdOOFVJNy9VeStaT01KbW54K014MlJOTEErZ0NtYURmV2NBclY4L2p4THNiZU82WmRhQ1h3Wmg1ek9zaEV1cERxR1BmVE5KOGs0S1N6UXBwYURhV0NDYjNJUmMzbXBGS0hrUmtBQmxhblN5eXVRRWxaYVdFd0Vnb0xTKzRFUmpvSW5UTVNTb0RiY1VwN0c0eWV6aFNzV2FqbUo4cG1pNGxXSUZ1NmZvaVZDRDd1M3c4WHZhL2NiQ1dnNHF1WVJibm5jUWlSMkRBckYxdUNFdFZTMkxKRENFZ1laaVUwUVZ3YXBseC9MakNzNDh6UmtQRzF2WVExMjljd05sM3IrUEs2aUVNeldsb05ZZGMyZXVYc0FMWWVtMHpJT2dSd1dnZ053bTBqSkdUY2V4Y0V5aGxnNmN2dEJwTFBJaDJmd3BJOHNEN1VIRWt1VS9WWGk4eDRHSjFveWxMWXJXRnVtWGZuSlJsam1KN1haVjJMbkliaU1zNUV3Z0RodzRkdlhEb3lJbFh4cU94M0EyUEF3QzNBUHpQUnVOTXQ3T3dyTlRnbE1DdXZUWmlvQUNvTEFQNngvSEt4VzBjUFdadzRtUWZIYlVGRWdXakZ3QkZkZTljQ29FMytETDM1bG5BVW5xZ2dzeWhwaElMTVJVYWFKWEhvaGtUTjd2U2dsWGhJYWpkcENqVm5xZmFqVUFWSVR3UkFWZm02cWc1THlOdVM0RHp3TVEyY2xERU5oVU9sRzBFQ2tJQk1IMngyUDNkSHprV2hBb0pLYVNrME8wUUZoY1RuRHpld3d2UHorSHFaaCt2blgwYlo4K3ZZR2R3Q3Rwa0VOaURUeWtBUFEyVGpqQVk5cEdQY29nMllKZTdFWm9qQXFpRmE4MlZoS1kyVENGbzBBb1NES2hWWEZhek81cW81blVhZFp6eXJ5VVRSOFZtYmNXSm5Eeis0RDhkajhZYnM5encrNTdIcWJrd0FmQXVnRitBNGM5bmFXZWJpSkFrQ1pJa2hWS01sQW5wM0RHc2pwN0VLK2Nld3ZaNmlrUnV3cDYzUjFwN2ptUUd6bk12eTZiMnV3TW5YR28xeTFmaklqTUYrVTN6K2NMY0oveDc4WHhrOHlBd1FNcE5nWklMbTVoQnFnTktPcFpKVXgxQXBRQm5FTTRBU3NHVWdDa0Zxd3hFaWEzOFVBcW1GSlFPZ2ZRNlRwOFk0ZHMreXZpdVQyemltVWZQWVhuK0d1WVZrRWtYU3ViQW5JR3pGTDNGT2ZRV2UwaXpCRXFjZHd6NkFzTjVxc3A2ajZMK1U5YXN3bEhwY3V6QU5IcmdHam9JQVh0V2ZJVUJHRFZqdGFKbkxWaTRoZUlhS3ZSNjg0Tk9kK0ZYQVF4bmFqbkR3VmtPNEt0YW03L0d3a3Rwa24yYjF2bThUVFlWU0Foak10QjhESmMzZ1BQbmIyQzVjeDFKZHdDdGxwc0lEbG81U21uVFdvL1RqS0FJYitoNlIvQ3M3YWRGZmhKSXVHTENZcFAyN1VITnJYSnQvdzFVcDdWWmtaOUdEQ1NiYkFzUmdhMjBFM1dzOXlFQmMySy9aOGpPNVpEQXVNOEFRVGhra05nRW4yeTFuRVladW1Md3hJa2RQTEF5d0RzWCszanIzQ3B1YlQ2SmpXMkZrZGFBU2tDVW9wdDBrU1VqYkc5c1lEQWNRdGhBQ3hlVGxKYklvR0lEZDBVd0hyVldteEJVTUkybVV5S3l0YlhXYTk2a3FJdldMdkt5VjFMVXZadjVqL1hDUklRanl5dVhsaGVQZkZWcmJYYkxidzRhT0hCOU1WOHdSdjUyWXRSaFZ2TE5Jb1pzbDBjQ3FBR01FdlRIeTNqejZnbXNIRnJEeXVrQktOdUNpMFltclBob0FtRmFnMmI5KzFRVDlOdXJ0Mmw0a0ZwN2VnakdWbUNTS1VLdnNGMkhnb0l2MVZZcUZoSlBmZ3V5QjRtUTlTREtGaktGRklnemUxTW9kc1ZidGpzMGhRSXF1QXpmYkQ1bU95Y1lQWWhKd0xRR0pXTmcxRUVYSFR6K2dNYkowOWR4N2lKdzhkcEpuTC9FMkJuTlFjdzhpQmhwbWlGZFptenRiR05yZXd2R2pNRkUwRUZ6YVZub0RMeUdoTTJkUWJIY01hSWxPV0NxVGFtVkhhUlM2MHBzWTgyQ3o2K1FCdVl5bkdheWh3OHBNQ2R5NHNRRC8wUnJmV25tSnVmYlFZbEhwS09tdmUwQStHV3Q1VUhGNnBTR2VZaVZndVQyUkZLa1lSUmpiZndJdnZUdURqNnlkQkdIbG9jQUpkTnZ2bjJHWFFleG9wRHFWQkcxZFNhSExFMXprWkd2SGZnVHNPSjFRazhxQXZhNWsvczU0ZFMxQjNtTmdOUUJDU0RPb0Nsem5RV1dWQkFQTWxmNTRtSnBsTzA2SUZhV2pBUmcwQWRvRENNS2hwWkEwb09Ba2RBSVN4M0JzNDhESjQ5dlk3NlQ0SjEzRmJhMkUrU1NnUldEMGd3TGl3cXNVbXh1cldFd0dOamZSWXhjand0aW9ENVlKa0ViVW8yYmRwMEQycmJjVkhLaUtlaVl6RGtEdFEzYmhmZnh1MytZc1hMMDFQV2pSMDcvZlhmdjNubmdUTEdiSXZJUDlaak9nUGtQYU9RUE1na1NuVUtJb1prd1NBN2gwdllUV0hoN0F4OTg2aGF5ZVNlMjUwZDVwMnhzT3loQXpJNGNkeXJXdk1URWh6UFhiNWNnMUt0MjV6cTNVUmxCcjRadkRPSEVNYmJPbzFEcVFnd0djd1pEbmtaMnpiS0dDa2xjQVVIWVJ6NWNmckgxVEluYXRKUzlQb1ljWFFpTkFkb0M2d1RjUHcyVmJXRmxZWXh2ZnE2SG8vTkR2SFVldUhwcmlKMXhCaVE5S0pWamNTRkJtaWlzYjI1Z2EydkQ5ZVZSZGJTakhtb0hYZEdoT0hxcEprcVlTVHlMWm5sSUM2c0d0L0tlRkE0ZldmbjZhRFI2TmNzNk0rOW80WU80cjFwaVFRUGdySWo4QW96NlBCUGZFaHFDZFFxVjl3QWtHS2tFUXpxSzgxZFdjUFdpd1hBNGRJazAzeC83ZGxxYUFLa3hRWWppTllkZllUTnFkWFM0SmJmeExmbU9vbFpLVmNrQkppaEtRTzRMb2tCUVVOd0Jjd1pDYXZNYVRzQ1VnS0FBc28reEpJQUNjNFpFZFpFa0daSWtnMG95S0pWQnFRVEtuSUlhUHdaUk9VYlpMUXlTTFF3eEI2RWVXQTJodEVJeVlpeW9JWjU5ZUlSdmVtR0E1NTVockJ6clFZc0RyMkowT2owY1BieUNJNGVQSWtzN0lHWlhGNnFtSnZVa3Z4eFU4ODJ1cHBJVGVmSmh2MHRtSzNsTjJQNUk5b0JiWEZnY25EcngwUCtRWloyMXZUenZnWG1jb0pzZ0JNL1hSZVJ2a1NUSFFmTHhITU41WWdacmc4eTltdzMxQVh6eDJqTFN6dWR4NnRnOHV1a0FTVHFFUVFmR2RDSEpCb1Myb2ZSaUpjbHVTK0NiL0lMTTVxR2tQck5mSlFQcW9WWHJTUmJrS00wY3EyVFVqSi8vb0hJVVFMRVVleVdJbGFXWXhaRUNsTUpJejNhZHN4dDNZQVc3S015VEJKbU4zNHR4Q0pmMU94ZkpsZFBlemVxd3NvQmwrMFZZUUZaTWpESkkyYVowMjVodGdaMGt3SmxUaExtbElRNHZaWGo3L0J6ZXVkaUZSZzVXQTZRa09MeDBHQW5QNGNiYUZXelRMZWloYlFzc3duQ25OeTVGcWMxMzhoRUNaeE0waW1yM3VGTE1vKzJ6cXlUOGxieVIzV2RwM002YmdDeGloWVhsWXhkNjNhVXZhSzMxWHU1MzliTS8rN01IZGpML251LzlKSDc1bDM0MS9KWUdjRTBFbXdSMWhoU09HZEVaT3kwdklnS3JGS05CRDZPdEJPaGN3Y0xTRUFvWjJEQUlXNWIxa1FXYlBOWk83TDBjUTFPQlUydjBvekFHaHEyN2hPQUo4NDl5VjJZN1d4WStuL0cwc2w5eTVDVzh4QTdTTWFVZ3loeElNb0JUc09xQVZRK2dCRXFsVUdrSG5HU3VVZGJtRjh3ZGtFcnNuNVFDbEFBcUF6aUJDandSQlg4eSs2OFV4Q2tVSjFDVUl1SE0vcDBURUNrWVNnRjB3WkxaVGdjaWRIc2R6QzEyUWVoRGs4TE9kaDlpYklNcENNaTZLYnFkRG93bWpQTzhXT2R1cEJ6NUxsazJPOVpndThxMTQwM2M2RGhNTVlrNnRlMjU5cm40MWljYmxxbHk3WWp6TXRZTE05S3NKODg4L2VHZnk1TE9MeUVjK05xRlVidVRPVTVvV3dEK2hSZzVTWkprVFBJaVlPYWxHSG9URUMvZzR2cUxXSDl6Q3puZXdCTW5nUG1Fd0RTR0dYZmRqWkRmc1JjWWVva3lCekdCdDVCMjRGU2NLMVhBVnEvakdFTEpyTEgxQ0ZMVUh4SWJPaUFES1ZkdkFjT1FEY01nSFVjOUU4amYwSjVoWWdWSUIzN3NnTmpPUE5sOEp5aStpbnM4YWlxaEppbTFDZEFVejdEVHR5bEUyTTRZOFFCR0Q5RE5CSTg5bXNId1pXUzhpTFBuQ0xsT1lGUU93UUNkYm9aamg4OUFjWUliTjY1QWF3M1NlV3VjWUh5STVuc3lCSmkyZTZmcWNPcmFhT0huVTlhWWZGSmlwWXp0ZFR4MjlOU2xRNHRIL3IvR3lNNWVRSE5IZ05NU3NnSEFHb0IvSUNKSENRbHJqRjRBTUMrdWR5eUhnWFRuc0RINENONDhuMkl1K3lvZU9Hb3dSNGZzelpic3VKbVVPNXpMVkZSeW5jdW55YXZtdzY1YVg3eHNJektFZlljeE83Q3dxODI0SkZoMTNmZFNrRW9oM0FWRVFiRnlCY3N1bUJXRXlBMngyVndJc0o2SzBDMUNOZnRuNHJUVjdKc3lVdHMrNWp1SW1FR0tpbEpBSmNRdHlBcmpBTmtERzlnVFhQVmh5SUNURVo1L2JCRnpQQUtoaTdmUDU5QUdJT3BBRVREWEJUaFpBUk53L2NaVjlFME9rOWNpSWorVldwSGpMVGNaekJKUFVNM3pWTW1BY0xPRW8rTlpRYkdTaHg1NitsOFpJNjlqaXJiQVhmVTRFOEJ6QmNBdmlxREhrcEh3NkhraXpOdUFXME1uWXlSOEJHdGJIOFFyNTRZUWVSdG5WbkowRWdQbEdpOEJRR3NkSk9DenMydCt3VkZsMFZMUW9WQ3UvL010TnFhb05WVG80WnFIa21BUHBUSFM2QjRvSDh0dVhJSnQ3UVVLVUxhT1FKSzU1RCsxMVg3WXlyL3RkVWxBM0hXOVcreE9XQWNZY3NRQk90WUwrVkVLY2Q1SDJaQ0VYYVZUUkNxOVhXV3NXR083dk1hZENLQzJJQmpEVUJlY3B5QTFEMFVKWVBKaW92ZkpSK2VCYkJ1RFhIRHhjaGQ1bmtJb0IyZ0hhWnJnOE9HakFBalhybDJDYUFQa0JyazIxZDJoYnZUY3RPMEpDb0ZSRzdxaFNjVytHdFZQUlVSZ3FmcUZ4U1BiV1pMK3J3QnU3T2NldjJPaDJnU3k0RzBBZjhNZXdwbUE4aGNFWnA2WndCakQ4QTVHWmg2WGIzNFRCQjFROWhwT0x5bDBxQWRPN2FGZ1Q5cUQ4akJVbzRCTDBGVHJOOVVkTWMzMkdxNjAwdFIvaDNFTm04d1ppQzB6SnBTQ1hRR09WQWRDQ3BBRUJKdmJDR1Znc284bjdoVDVISWxkNkFXLzQ1TlNDSFdLNlUvN0tGdkxzWm13RGR0Q2ZURXZTaEd5Zi81MEYxTVdJZ21BNHJHOUhwUUJuTUZBWFBzT29IVUNhRHVDOGZSakdaSmtCOGcxTGw4bGpJMEcySHFTTE0xdzdOaHhzQUt1WExxQTdlMGNTakcwQnFvcmFLUjJ1K3llMDFSQUZNelhsTDZuSkVpSWJTaXJWSW9USng3NkhaVjIvK1dzTFRiM0lzZXBnK2NkQUg5VEJDQ1RnRlQrUVozcmJrcGRTREpFcmdDbUk3aTY4U0xtTG5ZZy9iTjQ0S2lnbTA3ckFKQjlNOWpzdEE3SU5VcEtoVDR1dlVYZHU5VzlIazA2OFlnZ3BHeTEzMDFsQ3FjdVliZjFHRU0rSjBrQlNrRnF6b0dzNjBhaTJRVWR0dmFpQkRBRlU1ZTVibWdDZkx1TkF3KzVuTWRBdVUwR3BVSm5lYThhRUVxd0tLNXRxaWJsbW1KN2JrWnFER0hqNmlBZFVKb0RQRVppY2p6NXdCRWtlZ3UvaVhXY3Y2eVJtNjZ0ekx2dzlNanlVU2dRTGw5K0Y1dWJtMkRPaTYxK3hBd1UzUzY3ZzRhQ0hLZjFzeThPRWNjcWtuTHZuVEUvdDdSOTR0anB2NU9vNU9JTXBaVzdENXdKblFVZVBQK0RDRkxTU1phd2VsYmwzTTJaSUtwdndUTStocHMzanVKUVlqQ2YvaWFXMFVHdjEydHRiOWt2YUtwTVdKMHNRSkh3K3h5bVFVY1h0WmJxSUZmSTdsaUd4ekZiTGtRalRoMW9VdXNSbU8yL2N3cEJ4MHBtY1FhbFVqQ255STFWdWlFaEdMS0VBTHNPQU51WGx0cGJoQmxFaVJzbWRoMEN4SVcwVlNsSkZjcFJXZUJVOHdtbmtDTUNrZzVJVXJzWWd6U0VEUXpsRUNHb1JNRmdES0lNU2Q1QmloeFBQdHJEQ0p2WTFvSnIxM3N3Wm1RUElBQ2NNSmFYRDRNQVhEQm5vZk14dEovdG9aYXlBclVQcjFHTjJRenpHaUtxOVFmNmlNQU5xeVVKamgxLzRKMGs2Znd6MlA1S3ZCYzhUa2hUdndYZ3I0cWdBME9pVS9PY0NIWFZ1QXNpUUdNTE43UmdzUEV4N0dTUDR2SEJ2NGFzekVQMUJxRHVGcGhIdGpnM1Bnd3lCcEtzbHcyTlpMWFFFa21nOGdTYURiUXlFM01pb25BVzNSWHVmQTVqdk42V0l3c0VJSmFnb2JFOC9ZdFpmU0tiekJmakQzTTJGRk1aaEZJSUpTRHEyS1pKS0FEekFCSVlUcDFtUUFhaURKcFNhR052TEtXU2NwMEwyWUtudUJvSUswZE5jK0xBYUdkeXRERWdTWjJRaVNsMncvZ0tmVEUvVk12M2lzby8yWDZ6SXV5aEZFQUc1WHJoN0RXYWd4SEJxSVBpUkgvODhkUFEraXgrNHpkZXcvck9JV2haaEZCcVE3NWtCd3VINW5GU0hvRE9FK1JqQTZNSStYZ0FEZ2NGaGQwTWpnNXdJRk1yK0dVdm1pcENOTTBNNWJ5UElxRGI2UTJPcjV6K3gwb2w1L2ZyYmU0YWNDYVFCVDduK2E5RjhQdWgrUWRCOHBSQUhyTGxEbnNqYm04TzhkWndBVGorWVJ5NTlRb2VXRm5Ga2lGa3ZBaERDVWJKTm9nTXNud0JocVFvZmhreUlOS0FHc0lVaFRCcVRmTDl6NVNkNWxSR016YW1yT1JBWlUzQVBaNUw3MlQvSVhHTm1DbFlLUmowYk43QkNrRG0vajBES0hOMDg1ejkwTm1HYW9JRTRBeU0xRGtIQXlDeEU3QnNxVlNyV09PRlRUclcrMEFWOUxHbnBpRzJ0VVNwMU8yZU1UQm1YSFlOdSs1bGRrTkNYT3YrdGtTWEx4QTc1UjNYYk9wRE9mYnNvTXVkRkFOUFAvMFlCdjBjLy9yWEwxcVA2R0ltcGhTa2dDT0hqNEdwQTZFaFZtOVpJUkdSY25rV3FCU1ozTDB1UnpVYXVxek5zU2Q4bUVDVTRQaUpCeS8xdW90L3QxNjMyWHNYMWwzY2Y5MENIbTlkQUM4QitEK1N3bmNZR1Q0Q0lHSEZiaGdPNkhTQXg4OWN3ZW51bDNDbU84QkNqOEZkUWQ3YmdvRFFHUzNCdUVFdmUrRnpxK3hDUXdDcUtONkZMcnhZWjg2bTZCSm9GbG1yaTRlbytFREs0cWN1eGh5VU8vRXpFSFhBcWdPVkpERFVLMmhRbTh5bndlTVVCQjB3cVFJNFFNZUNnNVNsbnNuWHZlMFp5KzdmUE9Yc093Y3N3ZUI2MWlndFcvNWMrd3VLT29tcENmMVJFSnA2QnBLS0hLaFVZS1ZpVXJQWXJNQmxWZCtIdGRvWUVERkd3eEgrK1M5L0dWLy8razBrYWhrR3FSdFl0TzhtejNOc2Jheml6YmRld2VycWRSaWRJOCtIRUcxZ2pIYlNXSHBDS2FBT0d0OEF5OVZpdHJMMUxNVUtpMHRIdDU5LzlxTi9aMzcrOEU4QjZPL1gyeHhZcjlwdDlMUjVHd0Q0QW9DZk5ibjhMWkxPYndHMGJiUnhDYTdDVUNkNDU4SkozT2gvRHk3c1BJdXIvUXc3dWc4YWF5UmFBMm9Ib0FFSTJ0WWVpdWlkZzdaMCs3RjdKb2VjaHlJME54MzZBOFVPb1lrTno5aTJiREJKS2ZKUUZFbHRma0dxQTA3bXdPazhsRm9BZUFHUUhvam53YndFVmt0UXZBVHdFc0R6RU14QjhRS1lGOEE4NTc0eWdEcU9XZXZBU0FvZ0JYTVh6RDBJTXV1NU9BT3BIc0RkNG52a0hzTXFnMG82NE1TQzBoZnJJWTdpcHJUNFlsWkZnNmdkUmZBSEVGbnY1N29SN04vOVZ3cFdEdWlVbFFlQzYwUmdUdEhwOVBEeGIza1doNVlWVEw0TmtoeGtDQXdieGlJaHpDMHU0c0VISHNIOC9LSkRJUWNqNmxMcnZ0aWRZQ3M2bjFITzV0aCt1aFRIanoxd3RkZGIvdnQxME56M0htZEc3N01FNEFlSjZjY0U0eGRCWnRubXNXeXBXUmc4L0ZDQzQ0dHZZeVY5RlNlNmw5RHRqYUJUV0lFTnNkM0R0bVVEWU1WUVZFNjB0OC9xbUNBY2Ezb2RWclVGclVTVmxlZzZZTTJFZWlBMUI4SWNpRHNnVGdISkFHVzdBSVF5c09xNHZNTXlab3pVZWg1Mk1saXNvRjI5UnpHWExCRWxBQkcwOFhyWU5pd2tTUno3eGE0UFRxRXFaU3J0TThiZVdVaHpqMmtsYi9BMUlEZWRhbUFIeE1MUmNWc3JFK3NwL0xWamh1UWovUGFYM3NJLy82WGZScG9lZ3FZdWhCU0VCWWJHWUUwWWowYTRldlVTM25ublZmUzN0NkQxRUtMSHhmNmVrTFJocG1DN1M2RGpJT0xtYThoMWphdGlMRDFKRWl3c3JteS84UHpIL3RsY2IvRW5BRnk5SFc5ejF6M09qQzkyQThEZkV5Ti9BWkw4S2lSOW01Q0lNZ2tFSTR4b2pEZk81emg3OVRsc21tL0hqZTBIc05hZnc4NjRpeHlKZTBjRHNCb2hVUUtHY25QNGJUc2d5NXlGMlk4dU4vdk55cHFielJzSXl0WmlERU1NSTZFT0ZIZkIxQU56RDRwNzlxUlhIVUIxZ1hRT29BeUdPZ0IzQU9wQ3VBZndIRWgxd1d6N3o1ZzYwQUMwZUFKQVdWVk9sWUc1YStkeVhHNWtRWmRaRVVLVldhS0JmVGdZSm1HbCtxZjlVZ1dqUjU3K0RycXZDV2t4VnMyQlY0TC91N0tkMVVuU3RWNk5PODRUWm1DVlFpVWRxQ1N6T20xS1FXVmRQUDNNUTNqczhlUG9EMitCek5DMjdoaGpwWWFaa0NRcFRody9qVE9uSDBIVzZRVXNwcWw0bW1xWVZ1MVRETWZNT1NoOEtxV1FwYjM4eElrSHIvVzY4LzhRVmgvanR1MmVBV2NYOEl3QS9Dc0kvZ0lNL1JwQm5UTXdPWXhCNHJZRFhMMjZqYSsvTTQrTnpuZGp6WHdNNjZ2SHNiT3pCRzA2dGpZaE9SUnlzRGlwS044K1E4NjdzUDN2b2tib1FCTVdQY3Z3amgxVDQvV20yZFV4L00zVnNkNUZkY0RjZ2Zpd2hqT3d5cUNOVjltMFlZeHgzc2FHUEJrNHNXeWFsYTUxSXdLSnJmeURGSXdrMEtJZ1drRWJoaEdHdUpDSlNKVUp1ODlqQ2hFY3AwMWc0MHNMS2xjYzlWODJOQ3BETUFwZWd5VWhsTTJSRWhlYVFSV0FGTGd1Q0hZVU85a1FqUjJOVG80TW1adnY0VnMrL2lRV0Z4VEcrUlpZdE5NLzhmb0pCSldrT0hueURFNmZlZ0JwWW52blZURFhSRFZGemttOU4reGVtNVd6dFVUODBxR1ZqWWNlZVBwZkUvSG5iNGVDdm1QZDBmdXgzL085bjJ6cnF2WXh4alVBWHhIQkVoRjFJUXBrc01oaUUvK2RZWTRycXgwc0hub2F5NW5DY0xBRHhoQUo5OEhzeEFUQlJTNVR4TUJNUlJ6TkNFNHBOLzlDN0tjcnlkMGo3RXZQQldqSWR5WXJDeHc0QUltWG9LVU9oQk9JdU5tWnhONU10b1VtczM5WHFadFpTZHcwcGcweDdQTW1SYU1tSTdNRlVHSjNJOXZUUE9FVUtrbktFWUl5eUsvZFlsUjZIZTgxdlc1Qm81T2JLMTlXZXpweHJ5Y1laVkJKdFFYSUZTTWxhRnEzbmpxRFVrQ25xNUdQZ0l2bnIxbXZHK1NlZnRSQktZWDViZytqWVIrYm02dU5PZzVWcFd3cW9Wb1pvcEVyS2RqM21XVzkvSkZIbm45cmZuNzV2d2Z3Mi9Xd1l6OWgybjBCbkJCQUxlQXhya0gwTlFESEFGb1FRaCtNZVFFbmdNSjROTWExRzBPczlrOER5U0lTbFVOaEU2eHlDQU81VXJDTkxBTERoRHl4RTZqQ0NSS2tTQ2h4YXYrT3ZnMVZaWlRZTHhMM09UUEFDWXpxZ05JNW1LUUh3eDJJNmtJUyt5ZlVIS0RtSU53RDBUeVl1N2FKMHlYUDRMQ1dZMmR2Y3U1QUYvMXAxbk5aUXNBQ0Q0NHR0SjZFd2NxSkI3SVg3RkRGbDkvQ1lEV2huU2EyM3cva2g5eklnZy9NN3MvVS9XbS9oQlJBaWZOc0tVUmxqdkZ6LytZRUZlMDFxK292dzVNS2ZreWI3RmFLTE9sZ2JtNE8xNjl1NE5icU9oUm5nTW1LcmdWeS9YZk1DYktzZzdXTlZZekdJNnMzWG1TWDdqQ3BBSVlyczBoRWJBOFRJckRLY09qb0E2dVBQdnpNUHlDaS85ZnRNbW4zSlhDbWVCOEJzTzdBTTAvZ0V5SzBhUmxSczhqRTBNWmdzei9FcmRVeGR2bzlKTWtLRXBxRDVBTEYybTNmeVVEU2dVS0dGQ2tVREpqN29HVEwxVytVQTB4SnNkbkt2TDNoYkE2UXVWWVlXNkFrMS9aUEtnTTdkc2xTd3gzN1dHVWZyMVRIM1doMlpBQ09nZk9oRmppRlVncXNBc3BjUXVyY01VMCtoQXJZSi9oaUg4STJlcXJJSVJGN0lzRjVHMVpXMUowWXJUSktmb1FkS0FBNmNTaVFwdGRaR0tWMFZMZlRoVW95WERoL0hhT1JkaUVleWdFOXgzTjN1eGxJRE5aV2J6cjVZUC9lVkxFeXJNeG51RkN3c2Q2NnBKL1RUamQvL05FWHZqYlhXL3pMcmx0RjZ2ZmJlNjF6WUQ4OWJ1OEMrRGtBVnduOEF4RHVFM2pUUUo5QWdua05rK3pvQlZ5NHRZaWI2MGZ4OU1NUDQ4R1ZTNWlYdDZHemE4alNFVG9rU0VSQk1RSEs3dVFSY2RPVDBNN2pvS0RBNGVzQ1JXaGpQUVZ6QndMWDBheVUrN3RWbXdHNk50K2hydjF5NFpwQlltbFlTVndGUG5FM0FnZjljRGJNS0ZjWUJrc2h5WG1ab2xibCs5ZkNWTFdjK2d5TGdBaFdoMGdwbk9CK2p6UUd3VXpZTnVRNklKcjBiN0JYbzhGVW9seXdKU1ZBazFUaHNjZFA0OGx6cS9qU2wxNjFJYXBraFZBa3NaTVcxb3dUeDg5Z2JmMFdybHgrQjBhYlFPOEJnZkErRmJrU3UybER4UXBHQUU0U1BIam1xWGVQSGo3Kzl3QjhIYnVzN1hoUGtRTjdKQTJNeTNuK0RvQ2ZCZkJMRUg2WEpYMkZORjlnSTl0Z3hnZ1pOdkl1dnZ5Mnh2LzJ4bUdjMy93UTFzMFQ2TXNTZGpTZ3NRUFFPaUFESUUraHg0Y2hKZ3QraFR2TmhCM3oxQUZURjRTdXJaMUk1Z2JMYksyRjBYWGI0T3pqbUMxQllQdlJGRVFVQkFrVVd4b2FuQmFpZ0o0Z0lISlNUOFYydW1Bam5MZ216Y0xybEhvQzVTWTdxbnpaekMxeFh5Vk5YZERWc0IzV1FXV3IrTkoyUVlCdFBIV0hSd2s4THNQQk1HL3lvOXBDQlpIaVphcDhjNnJBa2dYelN3dDQ0UU9QWUhGaERrRGZLZHJVbkJjUnN1NGNUcDkrR0wyNUJhZGx6U2pHbjFGR0JsemtwNVlrRVJCVWttQmg0ZEQycVZPUGZBR2dYd0t3ZmREMzZIMFZxczJROHdCV3Evb3FnQzhDK0NxQVpSSmVZT0V0U040VHBidTJHWkd3TlNSY3VaRkE2QXdXRjQ2RE9JV1dBVFMyZ2NRQXpLNXoyVmdpUWNMQ0pydWlZK284aVdPUXFHTlZaUnhEWnZNQkY4S1JaZFNBclB4M3oxcUJiVTJIZkVGUkZTd1dLMVhTM0c1bUJ5NDM4V0JobFJUaGluRTVtUlN4ZlhBVHV6OTlCYjNJUGRnWEZrc2doVWsxYW90cXZhSm82SzNDZnJCNkkyc0R2QlMwOXd1NzVYYU83VW9ZbHk1Y3cvcjZPb1M2eGNJdTIrMWNTdDBtS3NGb05NVGErbG9CR09YMW9kMHZWcTZ6WEtuRUNiMHdWTmJGSXc4Lysrcmg1ZVAvZDFkWTE3ZlRsL2FlOFRnenZEbmo2ajFmQVBCZkEvanJFRHJIa3J6Q2VueUJhREFVRW1oMDBNOTdlUFh0QlAvbVN5ZHdkZk5qMkVtK0ZWdDRIcHZqbytpUHhUMk5kaHNOcUtyOFNHVTRJRTQ0dzNjNEYvUnQ0VGxVY2JyV3Riejh5VzZDZWtRUmo1TXFQRXRZYnlrRVBoQWt2cHdVU2JjRUlQRWdMR1p2SEtqS3I3TFh6SXVaRjA2aThEYmxESS8zS3I2RG9DSXJoWGFnMW9GVEFzaHBYNU45cndKQ3Q1UGkrTEZENktSMnBTSVJXejJDb05HV09JRlNIYXdjUDRWdWI4NWVyNEo3TENWdmZTNEh4K3FwSk1YS2tSUFhWNDZjL1BzaThtdHRQV20zQzVyNzJ1UE1RRmQ3NndONEhjQ1hBU3lRSklzc2FwTkVlZ1RUWWJLem5Oc0RqVXMzTkFhalk1aGZmQnpkN0RDUUczQStBQXdWKzJlS0piZ2dsd0s2aGIrc25JaUdjZzJYU1NITEJFN0EzZ000NXNyUHhzQjlMOHliaEJoUUNreHNGeXVFUmNxaVRsU3E0NEE5YlZ6V1VDZ29jZ2FUSnlYTDVKc3VuVEJJQVpoUWJrbG9JamxRYmM5djExcG9DRFcybGxhY0ltZnh1dTBDcnAydEhWeDg5d3I2WTMvTmJBT3IzL1RnOTZBeUE1dGI2OWpaV3JkMW5VSXl5dXNyK0IrMVJFNXZmakYvOHZFWC8zR3Z1L2hYQVZ5NEU2QzU3ejNPSHQ3dzBDV0EveGNBLzJjSS93NUorblUyNmxXWXdjQmdCN25xWTNza2VPWHRQdjdWcnczdzVkZE9ZV3YwVVdqK0dJWTRoWkh1SXM4Vm9BSFNCcVExak5iUW9nSEp3Y2pkN21mQXNHOXJVU0J4NnpTSzA3bHNEeEVZQ0dsYmM1UGNOVXk2N2M5ZXliS1dzNWJ5ZkNnVC83RG1Vc244TFdqWTdiTUoyNERDRFFsVkQrQi8wZVJDWW5sd3ROMGVNcUVHV1hxek1uNmpTZ3VRSnlhWUdjZU9IY2JDNGhLTTFuNVRxWDE5L3VtWm9GU0NKTTJ3Y3ZRRVdDVmxZNnFudjJGWk5lKzlWWnJpMkxIVFp4Zm5ELzlWQUdleHQ5VTY3eStQc3dmdkk4Nzd2QVhnTjYyTHBsT1FaRWVRYXBGa2tRQmlKUmpwRWE2dURmSE9qUXpiM1dmUlcxcEJSeVVRblVEbEJrb1A3ZE14SVNkQzErUklJZERDMENxRllkdDBxVVNCalZXaktab2s0YjJLdjhsTU1acmd6eW9pNVRaZksxZWJLUE1KM3dWdGhUZWRtSVlQbjN5ZUlVN1UzQ2ZreGRKZEtZZkNTSXA4Z1FJNXJ1bytHZjh6cVBTbWxWL0tZYXpzdkNoZzdTV3VpbkN4SEtzSXZWNFl4aFcvblJoalRUaDc3am8yMTI0Q3hQYWFpbDNYeFRBUUl1UWt0aTNIQ0c2dFhvY2VENEk2bS9Vd0NvQks3ZWg1YitHUXZQRDhoLzhDU2ZMUDBESVNmVkRlNWozbGNmWndBVFNBY3dCK0hzRFBBUFRyTEh4T2lYb1ZZamEwenEya3R3RzJONGY0MnBmUDRsYytiL0RGMXorQVMxdmZqblgrSkxid0ZJYm1NRXh1a09nTmpIV0dZYjRBMFIyd05raGxCS0lkYUxXRFBObXhxeEpsN0xvNTdPSmRjdDdFaHg1ZVBGMUVReHU3ZFpyRWRqU0lhd3Z5QXVUMnYrL0VZVm5QUWNwS1MxV3Jydm96dHQxb3doZnhoRFVuVlBWY2hVaWlEVVd6TEVPdjEwT1dkT3dHUHVaQ1RLVFlVT0hBMXUxME1kZWJEN29lVk5EbG9XQ01RWkprZU9icDUvNXByN1AwaTlpREJ2VDd2WTR6RVR4VHVxejdBUDQzQUc4QytBNEkvZ0JUdWltaUR4bWpUMEprVVRHUk5zQ05kY2JOalJHK2ZuYU1NeWVQNExsSFA0SlR5OWNoNWpJNncwMk1sQUd6UUpraGtwekFrZ05KRHdZZGFFckFNcklyTm1Ec0tVK1cwb1VCbEFvWUt3Y0tpKzNjYXBVWkJPMzBxTzF3T1VBVHFoVmlCR0ZuY1ZVbHRkYkNNeVhpb1ZvUnRha0FaTkFtQTZ5VVFwWWxTTk1VQTUwSHpkdnU5VGd0QXJoT2lWNXZEdXRjTG9hbG9uT0NrS1FkbkhuZ3dXdFBQUEhNbjd0K2VXTnRINGZ0Tnc1d1pnU1FBWEFUd1A4QzROY2grRGlFZjFDeGVzcEFIOVppVHNCSUZ6VHVBRGsyQndhdnZ6dkNsZXVNSng0OGc2ZE9QNHFqM1RHUzlIY0FySUhOMkFwS3NBRWJBUksyL1dia1BJN1kvamlRZ3VnYzRwUktuU1psS1liT1ZoTEx5TmlLQWJKWDJMUWVRTG5XZVJGanQxY3JWRy9pU1FyQUZDeTJMWXFGMUFSTkljRGVCcFp5MjNWWkd6VXplREZnNnU2YWhoWUF1MjRKcXoyZEcyUEpGekhWS3FlYk91MTJlNjVGU1RzMndHa3VNR04rY1ZFKzlFM2Y4alBYTDIrOGRqZEE4NzRBVG5oeHBuZ2ZBK0FTZ0g5RVJQOVNCTjlLVUwrSFJEMUxoRVBHREU2QThoUGdyS3NseGVvTzhOdXY5M0gyWW81SHpoekZrdzk5Q0NlV2RrQzBDZEdyWUxNRnBoR0lOa0MwQWNFeWpCYWJDeVRHeXFFaEJRbkQ1TG5Ma2NWUnlBYVF2S3g4KzFTaFdOZG5Pd1NNMjI5cXhPcklsWnR1UEEwYmxORU5TbzJ5QWdUQkhsTEhzSG5WVEtDTk9VT1FpNVFkQ0dGbmdyUnN3WlBhb3R4S2EybFk4Nmt6ZDY2dXhNUjJpYkhyaENiais1NEVXbnpHUjFBcXRXR2FpR01uN1h2cWRPYnpaNS81NE1zWkwvMENjTlBjcmZ2dG5nMnkzVW1iQXFEd2M1d0Q4RFNBM3dYZzR3UjVTQ00vYVlBVG5Lb3VvTUdrd1dTd2tIYncwSW5EZU9LUkpSdy9Na1JIWFVmQ1Y4RHFodTNFbGhPdUxjZXF3RkNTdUZFRDIzWmpaMmpzdkwxd1dvd0ZzTEl5VVFLNzdKYVZIWFFqSkxaYTRXbzd4dWsvZTFxYUtiRTZDdUtTZnJINWdZRVBZN2hzWXlIYlJRQlFJVmpvYjd4Z0JLMmt3TUVWSUVtNEI3VkdXVnNacWRMYldEbGpLdFlQTWxPd2VhMzZzenZiUS96eXYvZ0N6cjU1RnB2OU1YS2Fnekd3WWJEa01DQ01CWUEyMFBrUTE2K2N3MXR2ZnEzMGZpcURTbEk4OSt3TFgzdnMwUTkvKzhiNjFxMjc1VzNlVng1bmovbVB3TFpoK082RC83ZUFQc2xJdjA4Ukh0UDUrTFRBbk5Sc0VzT0MxYjdCeHJsMXZINWxDeWRXNXZEUW1SV2NPYnFJbFlYam1GTmJnQmxZalFObENpRnhWcDVteldIWUttb0thWWl3dXhsdENHVklTb2JMa0NVWWxCMHZCcE50ZnpGaTY0ZEFZeCtzQk1jK29UbGZiUFhVcWpsTnZSdWdpQVhyNHdrTnRvMG01MDZCOUpRdnQ5cC9xem9CZG04a3p6VTJOM2VndGFrSWJFaXdINmxvVEFVanQ5cTZyamhxRDRkVHB4ODZkL3prNHo4eUNUU1JITGh6QUFKc0M4L2JzRTJrbnhmQjcyV2szdzNnaEpqeEtXM01TU0dkR0RMUW94VG5MbS9pNHBWMUxQY1lENTJZeDJNUG5jR1pJMnZJT2dNUStvRDBvZlRJQmp4aXdEUkM3aG9xU2NTMW9tVUFESEpqMTdTejVEWXY0ckdOdkhKQUtWZUE5ZkpVUmp2eGlYQ2RlUzNIOFB0Mi9QZUx2alR2QWRqSlZwVS81MHVqVXNsTWFHS3UwcFQzZFV5WXg0cVRsdktlaHdveGRRYVFXT2xlRVd4dWJHSFkzOEU0OTdlaE9IVWhHNlpaVVhrRGJUUkVOTWJqa1czRFNWUGtBaXd0SHgwOTkveHpmMm04bzc1eU56M04renBVdTQwUURyQ0tPNDhDK0NTQTd3RGtNU0ZaRm94UEM4d1NFUk83T1JRQ0ljdFNuRGpDZVBEMElrNmY3T0xJOGhnOXRZbFV0cEhSR0trQ2hqeTJQWEVxQXlVZGtNcWdSZG5tVFdha3hyWHVlLzFvc1k4Rko0Q3hZWjBScTUvR2lXMzFLUlI5U0VHWnREajhCVnpzelNTMlRhTWlYTWwxYkJ1UkI0NHA5ZE9LK2t2b2ZRTGgrWUQxcTY5dkROVS9LNFZDMFc2SmJ3YWhERW9SZEQ3QWIvMzZiK05MWC93NnJxOGJxMkZRaEh0Mlc0RVJBNTNuMEVZakgvVng5dTFYY2V2bVZSZ1JMQzRmSFQvNTFBdi83YU1QUC90ZjNyeXhPcnpib0huZmU1eHBGM1FLaUFZQVhnSHdCb0QvRDBBZko2SHZadW84WTJCV0JQcTBOdmtTR1NJaXduQm9jUDZ5NE5MVkxjejNGRTZlbk1OakR5L2oxTEhqV0o1ak1CbGs1b3BOOEEyQmN0akJPZEZRTUNCTjBHb09FSnNvQ3hpaWtxSVBtQldEdmE0ekJNYlk3M2xXaktVYXQxbUZId29FNDZrUWFKODBkbXlNRjR6MzlIbk40WGhpb0ZqNkpEUHZheFczTXREMnJJNEFFV3hzck9QczJhc1lqSFF4WStQcldOVzVIMEFSWTZnMWhrTmIvT3gxNS9OSEhuanM1MDhkZi9TemJhQ0o1TUQ5NDRVWXdCRUEzd1RndTRqb1F5Qnp5a2grVEdBT2c1QUlNaWRNYUtCWUkwa0lSdzR0NEtFSFQrQ0JCNDdpVlBjbW1BVlpDaVRKQ0FubllJeEF5TUdLTUVybnkvVWM3THdPWlU2c2cyRlRwM0lRamxRS2lISUVRYkFjRitSV2dhRG9SckFkMlFvUzVDRjFqeU1RYUdQY3dxVnF2aU1UNmpDaDhpZHFqRm5sdjQyeWV0U2NRMk9FZkt6eHhkOThFMS84d2h2WTJSNWdxSzNuMUVhWFM2ZmNielRhZXB4Yk42L2luYmRmaGRFNUhudmtpYTgvODl6SHYrMXVrd0VST1BzUDRSaFdxL1lwRzhMaG00bndxRUF2NWFCVGdDd0NZaWV1bGJKbkxRTzliZytINWdTZEZEaDViQkZQUFhFVVI1WUpIVFVDeVJDRUhKUzZFTW5QdjNBQ1Vxa2JJZ01nQ1l6WVVXQ2xuSVlaaWoyRElOYVdOZk96L3dqR2lTbjFxb0V1NTY2SGFpNFVLMm85M0FDT0ZSQnNDc3UzaFdlaEdMMEZUZ29tQTBNN0dJeTI4TmFibC9Icm4zOE5XNXM1UmlPRHNSVTFnQTQyc3ZudGJlTThoK1Fqdkh2aExLNWZ1NGpUcDg2ODhkUXpMLzFBUGxDdjNVdlFST0RzRDBBRW9BUGdCSUNuaVBBdFJQUXhZOHdwc0p3eWtzK0xtRVZMQ3RsNUVZR0NVZ1FtZzhXRkJJOCtkQlFQbmxuRy9Cd2pWUVpMNlJEekN4MUxDUGgxRkVXZkpNTWtjekFnNXhFc2hlMUhHZ1FHWUp0SEdGL1k5Q01HWHVDRGsvYU9BS0ZncFdMTHY5VnpuQllQVXdkUzArTWtFQmowKzZ0NDdkVjM4TnUvL1NZMk44Y1lEUW5hdU41cEVhdWhKbTZsb1ZoOU5tME1CanViZVBXMXIyRmhZZW55czg4Kys3MHNTMS9GaEZhR0NKejNEb2c4bVhBYXdEY0QrSFlpUEErU0ZVQXZBZnBFbmc5VFVYT3VLcDVES1FLSlJwSXdzbFFoVVlTVnBSUVBQcmlDMDZjT1liNm4wT2t3NXJzS2FjcGdBc2FzM0FRa09ka2pIMUlSQkJvR0dvQnk5WmtFQWxVTXhRblpuS2tCbkdLNTdwMEZqaGhnYzMwTFgvblNhM2o5dFhmUjc0L1FIK2JRVURDR2l5NXh1eC9Vd0lqWUxRWWlNRnJqOHFXejJON2V2dmIwVTgvOVFDYzkvSVY3RFpnSW5JTUhrQUp3eUlWeW53RHdNUkJPTWNraExXYkp5UEMwTVlhOW1BVDVVUUF3d0FhcFVwanJwbGhhN09EWXlnS09INTNIOG1JSGl3c1pGaFpUZERvSmxMSS9vOWpMS3RuT2dod2FDV2RJVXFzNWJVdzVkV3FCbzBvRkdrRU5PRDQ2TzNqZ2FHMXc3ZW90L1BadnZvS0w1NjVoTk5iSWM4RlFHd2d4eHRwdmZqTk9JOXptT09QeEdDREMydHBOYkt6ZnZQVFVZeC8rZm9DK2dnT1Nkb3JBdVQ4QlJBQXlBR2NBZkFUQWR3SjRsb2g2UkdZeDE2TWxNRTRiYmRnbEJhNmZEV0JvS0VWSUZJRmhrQ1lKRmhkN09IRmlDV2ZPSE1XSjQwdFk2S1hJVWtDTTY0MVRCSlc2ZVJTVnVpNEJkbUtDWkVlNU9RblQrM0luT2lnUTlLZ3VuS0lpMUpOQzMwd3ErelNMV0t5Z2tFV00zYzRnaE8ydEhaeDk1eEsrOHVXM3NicTZpWHlVUTlzeEpHaGpPeGkwYnpXQ1lEd2VGYUFjajNNTWgzM2tadmpheXFFSHZoT0dyNkpXU2IyWG9JbkF1Zk1nWWdETEFKNEQ4Q2tIcENORXBJaGxVV0NXdE1tWGpPU0xaSXN1cFRDaTcrY0NRYkVnVll5bHhSNk9IMTlHTnlXWWZJdzBJUnc2UEllVkUwdFlYSmhEcDl0RkowdVJKbWtoTlVVdXgycGp2NWg5TGFna0JQekRmR2hvWUtyREoxS2Q0R0Z5UzIrSllZeGdOTXB4NCtZbXZ2WTdiK0hjMjVld005VEl0VURuTHZGM3JUa2l2bS9PSUIrUDNOU0ZSbTRNakI1TGtxcC9kR0xsZ1QrK2VuTno3WDRKenlKdzdnMmgwQVh3QUlBWEFId1l3TE1BamdQZVJaakR4dVJ6UnZSaGdaNWpsWkNmK0ZTY3VHWk9EY1VDSmtHaUZCSmxTWWNzSTNTNktaYVhGM0RrNkJLT0hqMkVJMGVYME8xa1lFV3VZMXVRcGdtU3hJcGFLRlhPMFJUZFpOTHNSckFDSnI1ZHgxSGV3VDJqRFdFME5Cam5CaHNiMnpoLzdocmVlT01DMWplMm9NYzVScmtKMW9KWTBHalh5U0JHb00zWTFuQ01jWFVyMGIxZTc4K01kOVJmdzRRZE52Y2FOQkU0OTVhVk93cmJvZkFoQU04QU9BYmdNSUE1UURxRzlBa3hPaEhvRTNia2dFajVKay9YenNKK1ZTSnJLRlpJRWdXVk1OSTBSWklvWkptdG9TZ0ZkSHNkSERxOGdKV1ZaUnc2dElnMFRXd2hWYlRWMm1aQ29qS2JSN25lT2dCdU81dTk2YlUyMEZvWHVjeG9OTWJWYTF1NGNua05hMnRiMk56b1kzdDdnUEU0UjI0MGpDNmpQK3RoTEVTTjIvVnB4TURvM0Rlb3l0eDg5MjFsZXQ4L0d1WnZ0REZuOXdOZ0luRHVqMUFPQUZMWTFTYUhBVHdJNEhsSE1Kd0c1REFSOTBRazFXWjBFa0JIWUZhY1JDL1p4YlRzTnNKNVRUaEFzUTNEV05sL1M5eFdiR1pHa2laSWxBT05HNndqMGtoVWdqVE5rQ1lwZW5OZFpGbnF2SXVCMFFiNWVJenRuUUhHbzl5MjhvaGdOQjVqdXovQ09EZEY5NEVXV0Rrb0kwV29aeHhEWnZ2WTJOVnA3UGNNRERwWmRtMStmdUgvc2IweCt1OGhkRThMbXhFNDd6MEErWnhvenVWRlIxeG85eHlBRHdJNEJhQkhSRXBndWdaNlJTQWRJM3BGa2JJNk1yNC9UWXdGamN0ZE9KQmVMOFRLaStWTHRsSFQwOXZNZGlkUE9WdFRybk1YNCtvc3hYL2JuYXZGTEpBNHVTbnZYWWdjY2VDYU5ZTUNKek5ESmJ3MjExdjhSOE8rZnRsb2VRTzIzZW0rQjAwRXp2ME5Jazl4endGWUFmQ3dDKzJlQWZDa0MvVVNJbEkyMU1sWFFOSWhLR2lNVHhBa3Nac1FpclhadHZyUFpRdS9JOE1MdXJsWW1zVU0wZUxDUVNwRk9mektScjhrMkQyUHA1RUx6UUFQTERkYVlQdlo3TCtucVpMZVhIWk5jZnFMK1VEOWZMOC9lTmNCeHJ3WEFCT0I4OTREa2R1S2kza0htdU1PVUVkZGZuVEsvVGxIUkQwUlNRQW9MZmxEZ0tUTUJJUDhDQ0NKRlRtVURoQnVOa1BaYnVQWk15blg1bGJIQzZSUkQvSTliL1pmdFcxSUZXTkY3aE0xVGpySllHRisvZ3Y1VVA2YjRXRDg1ZEV3WDRWVk43bm5YUUFST045WVFBckpCcXU3YTcxVHp6RjR5N0J0UVNmZG44ZmMzNWRGcEFQS1QzdU5BaTE2V2Nnc2s5ajRUUVJPa29wZ2pDSEFkTUt3clp6bDBSQmRVdFJNUExSYWdnYXNZQmFXbHZLVkk0ZmYxcHIrOXZxTjdYOUNoQ3ZiMi8wZDdDS0FmcitESmdMbi9RbWswRU01ZmQ0Q1dEM1k3b1lqanBEb0FDQWk2Z3BrQ1lKbEFJdk9xeWtBeElybTA0d2ZOV0l5blp1ZU1TWkZkVFpCUkV4T3hCcEM3MEw0TFJCZVQ5UDBLNzFlNTF5bjI5bTRmdlZtSDNXNW0vY29ZQ0p3dnJGQVZQZFFvUkIwK0wxZ2pVSUJQdTlxbEFQZUhDb0JIVVlPRkdOWUVjQ0IrM09FR1ZacnZKZkFFb0VUTGRvQnVQTm8wYUpGNEVTTEZvRVRMVm9FVHJSb0VUalJva1hnUklzV0xRSW5XclFJbkdqUkluQ2lSWXZBaVJZdEFpZGF0R2dST05HaVJlQkVpeGFCRXkxYUJFNjBhQkU0MGFKRmk4Q0pGaTBDSjFxMENKeG8wU0p3b2tXTHdJa1dMVm9FVHJSb2Q4Yisvd01BanNGdWZTNW03cmNBQUFBQVNVVk9SSzVDWUlJPScsXHJcbiAgICAgICAgXVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBjdXJyZW50ID0gMFxyXG4gICAgICAgIFxyXG4gICAgICAgICQoJy5pbi10ZF9fbGVmdF9faW1nIGltZycpLmF0dHIoJ3NyYycsIGNvbG9yc1tjdXJyZW50XSk7XHJcblxyXG4gICAgICAgICQoJy5pbi10ZF9fbGVmdF9faW5uZXIgLmJ0bi5pcy0tY2gnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBpZihjdXJyZW50IDw9IGNvbG9ycy5sZW5ndGggLSAyKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50KytcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCcuaW4tdGRfX2xlZnRfX2ltZyBpbWcnKS5hdHRyKCdzcmMnLCBjb2xvcnNbY3VycmVudF0pO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1pbjogMSxcclxuICAgICAgICAgICAgbWF4OiA5OTk5XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHBsdXMoY29udGFpbmVyLCBmaWVsZCkge1xyXG4gICAgICAgICAgICB2YXIgdGhpc1ZhbHVlID0gcGFyc2VJbnQoJChmaWVsZCkudmFsKCkpXHJcblxyXG4gICAgICAgICAgICBpZih0aGlzVmFsdWUgPCBwYXJhbXMubWF4KSB7XHJcbiAgICAgICAgICAgICAgICAkKGZpZWxkKS52YWwodGhpc1ZhbHVlICsgMSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gbWludXMoY29udGFpbmVyLCBmaWVsZCkge1xyXG4gICAgICAgICAgICB2YXIgdGhpc1ZhbHVlID0gcGFyc2VJbnQoJChmaWVsZCkudmFsKCkpXHJcblxyXG4gICAgICAgICAgICBpZih0aGlzVmFsdWUgPiBwYXJhbXMubWluKSB7XHJcbiAgICAgICAgICAgICAgICAkKGZpZWxkKS52YWwodGhpc1ZhbHVlIC0gMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLmNvdW50ZXIgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGhpc0NvbnRhaW5lciA9ICQodGhpcykucGFyZW50KCcuY291bnRlcicpXHJcbiAgICAgICAgICAgIHZhciB0aGlzRmllbGQgPSAkKHRoaXMpLnNpYmxpbmdzKCdpbnB1dFt0eXBlPVwibnVtYmVyXCJdJylcclxuXHJcbiAgICAgICAgICAgIGlmKCQodGhpcykuZGF0YSgnYWN0aW9uJykgPT0gJ21pbnVzJykgbWludXModGhpc0NvbnRhaW5lciwgdGhpc0ZpZWxkKVxyXG4gICAgICAgICAgICBlbHNlIGlmKCQodGhpcykuZGF0YSgnYWN0aW9uJykgPT0gJ3BsdXMnKSBwbHVzKHRoaXNDb250YWluZXIsIHRoaXNGaWVsZClcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF9jbGFzc2VzID0ge1xyXG4gICAgICAgICAgICBvcGVuOiBcImlzLS1vcGVuXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5Ecm9wZG93bihjb250YWluZXIpIHtcclxuICAgICAgICAgICAgJChjb250YWluZXIpLmFkZENsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZURyb3Bkb3duKCkge1xyXG4gICAgICAgICAgICAkKCcuZHJvcGRvd24nKS5yZW1vdmVDbGFzcyhfY2xhc3Nlcy5vcGVuKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlRHJvcGRvd24oY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGlmKCQoY29udGFpbmVyKS5oYXNDbGFzcyhfY2xhc3Nlcy5vcGVuKSkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VEcm9wZG93bigpXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIG9wZW5Ecm9wZG93bihjb250YWluZXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJCgnLmRyb3Bkb3duX190aXRsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgdGhpc0NvbnRhaW5lciA9ICQodGhpcykucGFyZW50KCcuZHJvcGRvd24nKVxyXG4gICAgICAgICAgICB0b2dnbGVEcm9wZG93bih0aGlzQ29udGFpbmVyKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldHMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuZHJvcGRvd24nKVxyXG4gICAgICAgICAgICBpZih0YXJnZXRzLmxlbmd0aCA8PSAwKSBjbG9zZURyb3Bkb3duKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0UGFkZGluZ3MoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnLmlzLS1jLXBsJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJy5pcy0tYy1wcicsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQxMDBQZXI6ICcuaXMtLWgxMDAnXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBwYWRkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2YmFyX19pbm5lcicpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKSArICQoJy5mb290ZXInKS5pbm5lckhlaWdodCgpXHJcblxyXG4gICAgICAgICAgICAkKGNsYXNzZXMucGFkZGluZ0xlZnQpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogcGFkZGluZy5sZWZ0ICsgMzBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJChjbGFzc2VzLnBhZGRpbmdSaWdodCkuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogcGFkZGluZy5sZWZ0ICsgMzBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJChjbGFzc2VzLmhlaWdodDEwMFBlcikuY3NzKHtcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJ2NhbGMoMTAwdmggLSAnICsgaGVpZ2h0ICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJCgnbWFpbicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICdjYWxjKDEwMHZoIC0gJyArIGhlaWdodCArICdweCknXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0UGFkZGluZ3MoKVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRQYWRkaW5ncygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmFuY2hvcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgIHZhciBhaWQgPSBfdGhpcy5hdHRyKFwiaHJlZlwiKTtcclxuICAgICAgICAgICAgaWYoIWFpZCkge1xyXG4gICAgICAgICAgICAgICAgYWlkID0gX3RoaXMuZGF0YSgndGFyZ2V0JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoYWlkKS5vZmZzZXQoKS50b3AgLSAxMDB9LCdzbG93Jyk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLml0ZW0tY2Fyb3VzZWxfX2l0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcuaXRlbS1jYXJvdXNlbF9fY29udHJvbHMgYnV0dG9uLmlzLS1wcmV2JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnLml0ZW0tY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tbmV4dCcsXHJcbiAgICAgICAgICAgIHN3aXBlOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5wcm9kdWN0aW9uLWNhcm91c2VsX19yaWdodF9fbGlzdCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgcHJldkFycm93OiAnLnByb2R1Y3Rpb24tY2Fyb3VzZWxfX2xlZnRfX2Fycm93cyBidXR0b24uaXMtLXByZXYnLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICcucHJvZHVjdGlvbi1jYXJvdXNlbF9fbGVmdF9fYXJyb3dzIGJ1dHRvbi5pcy0tbmV4dCcsXHJcbiAgICAgICAgICAgIHN3aXBlOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5wcm9kdWN0aW9uLWNhcm91c2VsX19yaWdodF9fbGlzdCcpLm9uKCdhZnRlckNoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRDYXJvdXNlbERhdGFzKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRDYXJvdXNlbERhdGFzKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSAkKCcucHJvZHVjdGlvbi1jYXJvdXNlbF9fcmlnaHRfX2xpc3RfX2l0ZW0uc2xpY2stYWN0aXZlJyksXHJcbiAgICAgICAgICAgIF90aGlzVGl0bGUgPSAkKF90aGlzKS5kYXRhKCd0aXRsZScpLFxyXG4gICAgICAgICAgICBfdGhpc0Rlc2MgPSAkKF90aGlzKS5kYXRhKCdkZXNjJyksXHJcbiAgICAgICAgICAgIF90aGlzTGluayA9ICQoX3RoaXMpLmRhdGEoJ2xpbmsnKVxyXG5cclxuICAgICAgICAgICAgJCgnLnByb2R1Y3Rpb24tY2Fyb3VzZWxfX2xlZnRfX2hlYWRpbmcnKS5odG1sKF90aGlzVGl0bGUpXHJcbiAgICAgICAgICAgICQoJy5wcm9kdWN0aW9uLWNhcm91c2VsX19sZWZ0X19kZXNjJykuaHRtbChfdGhpc0Rlc2MpXHJcbiAgICAgICAgICAgICQoJy5wcm9kdWN0aW9uLWNhcm91c2VsX19sZWZ0X19idG4gLmJ0bicpLmF0dHIoJ2hyZWYnLCBfdGhpc0xpbmspXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdmb3JtJykucGFyc2xleSgpXHJcblxyXG4gICAgICAgIHZhciBwaG9uZUlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lucHV0LXBob25lJyk7XHJcblxyXG4gICAgICAgIGlmKHBob25lSW5wdXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcGhvbmVJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG5ldyBJTWFzayhcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZUlucHV0c1tpXSwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hc2s6ICcrezd9KDkwMCkwMDAtMDAtMDAnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICQoJy5pcy0tZmlsZS1mb3JtIGlucHV0W3R5cGU9XCJmaWxlXCJdJykuY2hhbmdlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZmlsZW5hbWUgPSAkKHRoaXMpLnZhbCgpLnJlcGxhY2UoL0M6XFxcXGZha2VwYXRoXFxcXC9pLCAnJyk7XHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgnLmlzLS1sYWJlbCcpLmh0bWwoZmlsZW5hbWUpXHJcbiAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsSUQpIHtcclxuICAgICQobW9kYWxJRCkubW9kYWwoe1xyXG4gICAgICAgIGZhZGVEdXJhdGlvbjogMTAwLFxyXG4gICAgICAgIHNob3dDbG9zZTogZmFsc2UsXHJcbiAgICB9KVxyXG59XHJcblxyXG4oZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJ2EubW9kYWwtb3BlbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIHZhciB0aGlzTW9kYWxJZCA9ICQodGhpcykuYXR0cignaHJlZicpXHJcbiAgICAgICAgICAgIG9wZW5Nb2RhbCh0aGlzTW9kYWxJZClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5tb2RhbF9fcGlja2VyX19ibG9ja19faW5uZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGNvbG9yID0gJCh0aGlzKS5kYXRhKCdjb2xvcicpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbG9yKTtcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgLy8gdmFyIHBpY2tyID0gUGlja3IuY3JlYXRlKHtcclxuICAgICAgICAvLyAgICAgZWw6ICcuY29sb3JfcGlja2VyX19pbm5lcicsXHJcbiAgICAgICAgLy8gICAgIHRoZW1lOiAnbmFubycsXHJcbiAgICAgICAgLy8gICAgIGNvbnRhaW5lcjogJy5jb2xvcl9waWNrZXInLFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vICAgICBzd2F0Y2hlczogbnVsbCxcclxuICAgICAgICBcclxuICAgICAgICAvLyAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIC8vICAgICAgICAgaHVlOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICAgICAgcHJldmlldzogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgICAgIGludGVyYWN0aW9uOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaW5wdXQ6IHRydWUsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgc2F2ZTogdHJ1ZVxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzdHJpbmdzOiB7XHJcbiAgICAgICAgLy8gICAgICAgICBzYXZlOiAn0JLRi9Cx0YDQsNGC0YwnLCAgLy8gRGVmYXVsdCBmb3Igc2F2ZSBidXR0b25cclxuICAgICAgICAvLyAgICAgICAgIGNsZWFyOiAn0J7Rh9C40YHRgtC40YLRjCcsIC8vIERlZmF1bHQgZm9yIGNsZWFyIGJ1dHRvblxyXG4gICAgICAgIC8vICAgICAgICAgY2FuY2VsOiAn0J7RgtC80LXQvdC40YLRjCcgLy8gRGVmYXVsdCBmb3IgY2FuY2VsIGJ1dHRvblxyXG4gICAgICAgIC8vICAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAvLyBwaWNrci5vbignY2hhbmdlJywgZnVuY3Rpb24oY29sb3IsIGluc3RhbmNlKSB7XHJcbiAgICAgICAgLy8gICAgICQoJy5jb2xvcl9waWNrZXJfcHJldiBzcGFuJykuY3NzKHtcclxuICAgICAgICAvLyAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMnICsgY29sb3IudG9IRVhBKClbMF0gKyBjb2xvci50b0hFWEEoKVsxXSArIGNvbG9yLnRvSEVYQSgpWzJdXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgLy8gJCgnYm9keScpLmFkZENsYXNzKCdpcy0tZHJvcCcpXHJcbiAgICAgICAgLy8gXHJcblxyXG4gICAgICAgIHZhciBpc01vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhcl9fYXNpZGUgLmlzLS1tbCcpO1xyXG4gICAgICAgIHZhciBpc01vdmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5TZWFyY2hQYW5lbCgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcicpLmFkZENsYXNzKCdpcy0tc2VhcmNoJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlU2VhcmNoUGFuZWwoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXInKS5yZW1vdmVDbGFzcygnaXMtLXNlYXJjaCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuTW9iaWxlU2VhcmNoUGFuZWwoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2FzaWRlX19idG5zX19zZWFyY2gnKS5hZGRDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VNb2JpbGVTZWFyY2hQYW5lbCgpIHtcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fYXNpZGVfX2J0bnNfX3NlYXJjaCcpLnJlbW92ZUNsYXNzKCdpcy0tb3BlbicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVTaG93SXRlbXNNZW51KCkge1xyXG4gICAgICAgICAgICBpc01vdmVkID0gIWlzTW92ZWQ7XHJcblxyXG4gICAgICAgICAgICBmb3IgKCB2YXIgaT0gaXRlbXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKSB7XHJcbiAgICAgICAgICAgICAgdmFyIHRvZ2dsZUl0ZW1Nb3ZlID0gZ2V0VG9nZ2xlSXRlbU1vdmUoIGkgKTtcclxuICAgICAgICAgICAgICB2YXIgZGVsYXkgPSBpc01vdmVkID8gKCAwICsgaSkgOiBpO1xyXG4gICAgICAgICAgICAgIGRlbGF5ICo9IDE1MDtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCB0b2dnbGVJdGVtTW92ZSwgZGVsYXkgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0VG9nZ2xlSXRlbU1vdmUoIGkgKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLS1tb3ZlZCcpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3Blbk1vYmlsZU1lbnUoKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX21vYmlsZSBidXR0b24nKS5hZGRDbGFzcygnaXMtYWN0aXZlJylcclxuICAgICAgICAgICAgJCgnLm5hdmJhcl9fYXNpZGUnKS5hZGRDbGFzcygnaXMtLW9wZW4nKVxyXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzLS1tZW51LW9wZW4nKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VNb2JpbGVNZW51KCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19tb2JpbGUgYnV0dG9uJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICQoJy5uYXZiYXJfX2FzaWRlJykucmVtb3ZlQ2xhc3MoJ2lzLS1vcGVuJylcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpcy0tbWVudS1vcGVuJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZU5hdmJhcigpIHtcclxuICAgICAgICAgICAgaWYoJCgnLm5hdmJhcl9fbW9iaWxlIGJ1dHRvbicpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VNb2JpbGVNZW51KClcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3Blbk1vYmlsZU1lbnUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvZ2dsZVNob3dJdGVtc01lbnUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0TmF2YmFyRGVmYXVsdE1vZGUoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldE5hdmJhckRlZmF1bHRNb2RlKGhlaWdodCkge1xyXG4gICAgICAgICAgICBpZihoZWlnaHQgPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLmFkZENsYXNzKCdpcy0tc2Nyb2xsJylcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0tc2Nyb2xsJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0UFREcm9wKCkge1xyXG4gICAgICAgICAgICAkKCcubmF2YmFyX19kcm9wJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICQoJy5uYXZiYXInKS5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBpc1Njcm9sbFxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuRHJvcCgpIHsgXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtLWRyb3AnKVxyXG5cclxuICAgICAgICAgICAgaXNTY3JvbGwgPSAkKCcubmF2YmFyLmlzLS1zY3JvbGwnKVxyXG5cclxuICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdpcy0tc2Nyb2xsJylcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHNldFBURHJvcCgpXHJcbiAgICAgICAgICAgIH0sIDEwMClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlRHJvcCgpIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpcy0tZHJvcCcpXHJcblxyXG4gICAgICAgICAgICBpZihpc1Njcm9sbC5sZW5ndGggPiAwKSAkKCcubmF2YmFyJykuYWRkQ2xhc3MoJ2lzLS1zY3JvbGwnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlRHJvcCgpIHtcclxuICAgICAgICAgICAgaWYoJCgnYm9keScpLmhhc0NsYXNzKCdpcy0tZHJvcCcpKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZURyb3AoKVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuRHJvcCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJyNvcGVuU2VhcmNoJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG9wZW5TZWFyY2hQYW5lbCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnI29wZW5Nb2JpbGVTZWFyY2gnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgb3Blbk1vYmlsZVNlYXJjaFBhbmVsKCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0cyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5uYXZiYXInKVxyXG4gICAgICAgICAgICBpZih0YXJnZXRzLmxlbmd0aCA8PSAwKSBjbG9zZVNlYXJjaFBhbmVsKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRzID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLm5hdmJhcl9fYXNpZGVfX2J0bnMnKVxyXG4gICAgICAgICAgICBpZih0YXJnZXRzLmxlbmd0aCA8PSAwKSBjbG9zZU1vYmlsZVNlYXJjaFBhbmVsKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcubmF2YmFyX19tb2JpbGUgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU5hdmJhcigpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXROYXZiYXJEZWZhdWx0TW9kZSgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuaXMtLW9wZW4tZHJvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpICBcclxuICAgICAgICAgICAgdG9nZ2xlRHJvcCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2V0UFREcm9wKClcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0UFREcm9wKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlVGFicygpIHtcclxuICAgICAgICAgICAgJCgnLnRhYi1pdGVtJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKCcudGFicy1tZW51IHVsIGxpJykucmVtb3ZlQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3BlblRhYihpZCwgbmFtZSkge1xyXG5cclxuICAgICAgICAgICAgY2xvc2VUYWJzKClcclxuXHJcbiAgICAgICAgICAgICQoJy50YWJzLWNvbnRhaW5lcltkYXRhLXRhYm5hbWU9XCInICsgbmFtZSArICdcIl0gLnRhYi1pdGVtW2RhdGEtdGFiaWQ9XCInICsgaWQgKyAnXCJdJykuYWRkQ2xhc3MoJ2lzLS1hY3RpdmUnKVxyXG4gICAgICAgICAgICAkKCcudGFicy1tZW51IHVsW2RhdGEtdGFibmFtZT1cIicgKyBuYW1lICsgJ1wiXSBsaVtkYXRhLXRhYmlkPVwiJyArIGlkICsgJ1wiXScpLmFkZENsYXNzKCdpcy0tYWN0aXZlJylcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcudGFicy1tZW51IHVsIGxpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gJCh0aGlzKS5wYXJlbnQoJ3VsJykuZGF0YSgndGFibmFtZScpXHJcbiAgICAgICAgICAgIHZhciB0aGlzSWQgPSAkKHRoaXMpLmRhdGEoJ3RhYmlkJylcclxuXHJcbiAgICAgICAgICAgIG9wZW5UYWIodGhpc0lkLCBuYW1lKVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBoZWlnaHQgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvdygpIHtcclxuICAgICAgICAgICAgJCgnLnRvLXRvcCcpLmFkZENsYXNzKCdpcy0tc2hvdycpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoaWRlKCkge1xyXG4gICAgICAgICAgICAkKCcudG8tdG9wJykucmVtb3ZlQ2xhc3MoJ2lzLS1zaG93JylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpXHJcblxyXG4gICAgICAgICAgICBpZihoZWlnaHQgPiAxMDAwKSBzaG93KClcclxuICAgICAgICAgICAgZWxzZSBpZihoZWlnaHQgPCAxMDAwKSBoaWRlKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcudG8tdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sJ3Nsb3cnKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19

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