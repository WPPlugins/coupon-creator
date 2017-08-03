/*!
	Colorbox 1.5.14
	license: MIT
	http://www.jacklmoore.com/colorbox
	Coding added to resizing iFrame from Ed Pitt
	http://dot-net-web-developer-bristol.blogspot.com/2011/02/jquery-colorbox-resizing-iframe-to.html
*/
(function(e,t,n){function Q(n,r,i){var o=t.createElement(n);if(r){o.id=s+r}if(i){o.style.cssText=i}return e(o)}function G(){return n.innerHeight?n.innerHeight:e(n).height()}function Y(t,n){if(n!==Object(n)){n={}}this.cache={};this.el=t;this.value=function(t){var i;if(this.cache[t]===undefined){i=e(this.el).attr("data-cbox-"+t);if(i!==undefined){this.cache[t]=i}else if(n[t]!==undefined){this.cache[t]=n[t]}else if(r[t]!==undefined){this.cache[t]=r[t]}}return this.cache[t]};this.get=function(t){var n=this.value(t);return e.isFunction(n)?n.call(this.el,this):n}}function Z(e){var t=E.length,n=(I+e)%t;return n<0?t+n:n}function et(e,t){return Math.round((/%/.test(e)?(t==="x"?S.width():G())/100:1)*parseInt(e,10))}function tt(e,t){return e.get("photo")||e.get("photoRegex").test(t)}function nt(e,t){return e.get("retinaUrl")&&n.devicePixelRatio>1?t.replace(e.get("photoRegex"),e.get("retinaSuffix")):t}function rt(e){if("contains"in d[0]&&!d[0].contains(e.target)&&e.target!==p[0]){e.stopPropagation();d.focus()}}function it(e){if(it.str!==e){d.add(p).removeClass(it.str).addClass(e);it.str=e}}function st(t){I=0;if(t&&t!==false&&t!=="nofollow"){E=e("."+o).filter(function(){var n=e.data(this,i);var r=new Y(this,n);return r.get("rel")===t});I=E.index(P.el);if(I===-1){E=E.add(P.el);I=E.length-1}}else{E=e(P.el)}}function ot(n){e(t).trigger(n);D.triggerHandler(n)}function at(n){var r;if(!z){r=e(n).data(i);P=new Y(n,r);st(P.get("rel"));if(!R){R=U=true;it(P.get("className"));d.css({visibility:"hidden",display:"block",opacity:""});x=Q(V,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden");m.css({width:"",height:""}).append(x);H=g.height()+w.height()+m.outerHeight(true)-m.height();B=y.width()+b.width()+m.outerWidth(true)-m.width();j=x.outerHeight(true);F=x.outerWidth(true);var s=et(P.get("initialWidth"),"x");var o=et(P.get("initialHeight"),"y");var a=P.get("maxWidth");var f=P.get("maxHeight");P.w=(a!==false?Math.min(s,et(a,"x")):s)-F-B;P.h=(f!==false?Math.min(o,et(f,"y")):o)-j-H;x.css({width:"",height:P.h});X.position();ot(u);P.get("onOpen");_.add(C).hide();d.focus();if(P.get("trapFocus")){if(t.addEventListener){t.addEventListener("focus",rt,true);D.one(c,function(){t.removeEventListener("focus",rt,true)})}}if(P.get("returnFocus")){D.one(c,function(){e(P.el).focus()})}}var l=parseFloat(P.get("opacity"));p.css({opacity:l===l?l:"",cursor:P.get("overlayClose")?"pointer":"",visibility:"visible"}).show();if(P.get("closeButton")){M.html(P.get("close")).appendTo(m)}else{M.appendTo("<div/>")}ct()}}function ft(){if(!d){K=false;S=e(n);d=Q(V).attr({id:i,"class":e.support.opacity===false?s+"IE":"",role:"dialog",tabindex:"-1"}).hide();p=Q(V,"Overlay").hide();N=e([Q(V,"LoadingOverlay")[0],Q(V,"LoadingGraphic")[0]]);v=Q(V,"Wrapper");m=Q(V,"Content").append(C=Q(V,"Title"),k=Q(V,"Current"),O=e('<button type="button"/>').attr({id:s+"Previous"}),A=e('<button type="button"/>').attr({id:s+"Next"}),L=Q("button","Slideshow"),N);M=e('<button type="button"/>').attr({id:s+"Close"});v.append(Q(V).append(Q(V,"TopLeft"),g=Q(V,"TopCenter"),Q(V,"TopRight")),Q(V,false,"clear:left").append(y=Q(V,"MiddleLeft"),m,b=Q(V,"MiddleRight")),Q(V,false,"clear:left").append(Q(V,"BottomLeft"),w=Q(V,"BottomCenter"),Q(V,"BottomRight"))).find("div div").css({"float":"left"});T=Q(V,false,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;");_=A.add(O).add(k).add(L)}if(t.body&&!d.parent().length){e(t.body).append(p,d.append(v,T))}}function lt(){function n(e){if(!(e.which>1||e.shiftKey||e.altKey||e.metaKey||e.ctrlKey)){e.preventDefault();at(this)}}if(d){if(!K){K=true;A.click(function(){X.next()});O.click(function(){X.prev()});M.click(function(){X.close()});p.click(function(){if(P.get("overlayClose")){X.close()}});e(t).bind("keydown."+s,function(e){var t=e.keyCode;if(R&&P.get("escKey")&&t===27){e.preventDefault();X.close()}if(R&&P.get("arrowKey")&&E[1]&&!e.altKey){if(t===37){e.preventDefault();O.click()}else if(t===39){e.preventDefault();A.click()}}});if(e.isFunction(e.fn.on)){e(t).on("click."+s,"."+o,n)}else{e("."+o).live("click."+s,n)}}return true}return false}function ct(){var t,r,i=X.prep,o,u=++$;U=true;q=false;ot(h);ot(a);P.get("onLoad");P.h=P.get("height")?et(P.get("height"),"y")-j-H:P.get("innerHeight")&&et(P.get("innerHeight"),"y");P.w=P.get("width")?et(P.get("width"),"x")-F-B:P.get("innerWidth")&&et(P.get("innerWidth"),"x");P.mw=P.w;P.mh=P.h;if(P.get("maxWidth")){P.mw=et(P.get("maxWidth"),"x")-F-B;P.mw=P.w&&P.w<P.mw?P.w:P.mw}if(P.get("maxHeight")){P.mh=et(P.get("maxHeight"),"y")-j-H;P.mh=P.h&&P.h<P.mh?P.h:P.mh}t=P.get("href");W=setTimeout(function(){N.show()},100);if(P.get("inline")){var f=e(t);o=e("<div>").hide().insertBefore(f);D.one(h,function(){o.replaceWith(f)});i(f)}else if(P.get("iframe")){i(" ")}else if(P.get("html")){i(P.get("html"))}else if(tt(P,t)){t=nt(P,t);q=new Image;e(q).addClass(s+"Photo").bind("error",function(){i(Q(V,"Error").html(P.get("imgError")))}).one("load",function(){if(u!==$){return}setTimeout(function(){var t;e.each(["alt","longdesc","aria-describedby"],function(t,n){var r=e(P.el).attr(n)||e(P.el).attr("data-"+n);if(r){q.setAttribute(n,r)}});if(P.get("retinaImage")&&n.devicePixelRatio>1){q.height=q.height/n.devicePixelRatio;q.width=q.width/n.devicePixelRatio}if(P.get("scalePhotos")){r=function(){q.height-=q.height*t;q.width-=q.width*t};if(P.mw&&q.width>P.mw){t=(q.width-P.mw)/q.width;r()}if(P.mh&&q.height>P.mh){t=(q.height-P.mh)/q.height;r()}}if(P.h){q.style.marginTop=Math.max(P.mh-q.height,0)/2+"px"}if(E[1]&&(P.get("loop")||E[I+1])){q.style.cursor="pointer";q.onclick=function(){X.next()}}q.style.width=q.width+"px";q.style.height=q.height+"px";i(q)},1)});q.src=t}else if(t){T.load(t,P.get("data"),function(t,n){if(u===$){i(n==="error"?Q(V,"Error").html(P.get("xhrError")):e(this).contents())}})}}var r={html:false,photo:false,iframe:false,inline:false,transition:"elastic",speed:300,fadeOut:300,width:false,initialWidth:"600",innerWidth:false,maxWidth:false,height:false,initialHeight:"450",innerHeight:false,maxHeight:false,scalePhotos:true,scrolling:true,opacity:.9,preloading:true,className:false,overlayClose:true,escKey:true,arrowKey:true,top:false,bottom:false,left:false,right:false,fixed:false,data:undefined,closeButton:true,fastIframe:true,open:false,reposition:true,loop:true,slideshow:false,slideshowAuto:true,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:false,retinaUrl:false,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:true,trapFocus:true,onOpen:false,onLoad:false,onComplete:false,onCleanup:false,onClosed:false,rel:function(){return this.rel},href:function(){return e(this).attr("href")},title:function(){return this.title}},i="colorbox",s="cbox",o=s+"Element",u=s+"_open",a=s+"_load",f=s+"_complete",l=s+"_cleanup",c=s+"_closed",h=s+"_purge",p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D=e("<a/>"),P,H,B,j,F,I,q,R,U,z,W,X,V="div",$=0,J={},K;var ut=function(){function i(){clearTimeout(r)}function o(){if(P.get("loop")||E[I+1]){i();r=setTimeout(X.next,P.get("slideshowSpeed"))}}function u(){L.html(P.get("slideshowStop")).unbind(n).one(n,c);D.bind(f,o).bind(a,i);d.removeClass(t+"off").addClass(t+"on")}function c(){i();D.unbind(f,o).unbind(a,i);L.html(P.get("slideshowStart")).unbind(n).one(n,function(){X.next();u()});d.removeClass(t+"on").addClass(t+"off")}function h(){e=false;L.hide();i();D.unbind(f,o).unbind(a,i);d.removeClass(t+"off "+t+"on")}var e,t=s+"Slideshow_",n="click."+s,r;return function(){if(e){if(!P.get("slideshow")){D.unbind(l,h);h()}}else{if(P.get("slideshow")&&E[1]){e=true;D.one(l,h);if(P.get("slideshowAuto")){u()}else{c()}L.show()}}}}();if(e[i]){return}e(ft);X=e.fn[i]=e[i]=function(t,n){var r;var s=this;t=t||{};if(e.isFunction(s)){s=e("<a/>");t.open=true}if(!s[0]){return s}ft();if(lt()){if(n){t.onComplete=n}s.each(function(){var n=e.data(this,i)||{};e.data(this,i,e.extend(n,t))}).addClass(o);r=new Y(s[0],t);if(r.get("open")){at(s[0])}}return s};X.position=function(t,n){function l(){g[0].style.width=w[0].style.width=m[0].style.width=parseInt(d[0].style.width,10)-B+"px";m[0].style.height=y[0].style.height=b[0].style.height=parseInt(d[0].style.height,10)-H+"px"}var r,i=0,o=0,u=d.offset(),a,f;S.unbind("resize."+s);d.css({top:-9e4,left:-9e4});a=S.scrollTop();f=S.scrollLeft();if(P.get("fixed")){u.top-=a;u.left-=f;d.css({position:"fixed"})}else{i=a;o=f;d.css({position:"absolute"})}if(P.get("right")!==false){o+=Math.max(S.width()-P.w-F-B-et(P.get("right"),"x"),0)}else if(P.get("left")!==false){o+=et(P.get("left"),"x")}else{o+=Math.round(Math.max(S.width()-P.w-F-B,0)/2)}if(P.get("bottom")!==false){i+=Math.max(G()-P.h-j-H-et(P.get("bottom"),"y"),0)}else if(P.get("top")!==false){i+=et(P.get("top"),"y")}else{i+=Math.round(Math.max(G()-P.h-j-H,0)/2)}d.css({top:u.top,left:u.left,visibility:"visible"});v[0].style.width=v[0].style.height="9999px";r={width:P.w+F+B,height:P.h+j+H,top:i,left:o};if(t){var c=0;e.each(r,function(e){if(r[e]!==J[e]){c=t;return}});t=c}J=r;if(!t){d.css(r)}d.dequeue().animate(r,{duration:t||0,complete:function(){l();U=false;v[0].style.width=P.w+F+B+"px";v[0].style.height=P.h+j+H+"px";if(P.get("reposition")){setTimeout(function(){S.bind("resize."+s,X.position)},1)}if(e.isFunction(n)){n()}},step:l})};X.myResize=function(e,t){if(!R){return}if(P.scrolling){return}var n=P.transition==="none"?0:P.speed;S.unbind("resize."+s);P.w=e;P.h=t;x.css({width:P.w,height:P.h});X.position(n)};X.resize=function(e){var t;if(R){e=e||{};if(e.width){P.w=et(e.width,"x")-F-B}if(e.innerWidth){P.w=et(e.innerWidth,"x")}x.css({width:P.w});if(e.height){P.h=et(e.height,"y")-j-H}if(e.innerHeight){P.h=et(e.innerHeight,"y")}if(!e.innerHeight&&!e.height){t=x.scrollTop();x.css({height:"auto"});P.h=x.height()}x.css({height:P.h});if(t){x.scrollTop(t)}X.position(P.get("transition")==="none"?0:P.get("speed"))}};X.prep=function(n){function u(){P.w=P.w||x.width();P.w=P.mw&&P.mw<P.w?P.mw:P.w;return P.w}function a(){P.h=P.h||x.height();P.h=P.mh&&P.mh<P.h?P.mh:P.h;return P.h}if(!R){return}var r,o=P.get("transition")==="none"?0:P.get("speed");x.remove();x=Q(V,"LoadedContent").append(n);x.hide().appendTo(T.show()).css({width:u(),overflow:P.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(m);T.hide();e(q).css({"float":"none"});it(P.get("className"));r=function(){function a(){if(e.support.opacity===false){d[0].style.removeAttribute("filter")}}var n=E.length,r,u;if(!R){return}u=function(){clearTimeout(W);N.hide();ot(f);P.get("onComplete")};C.html(P.get("title")).show();x.show();if(n>1){if(typeof P.get("current")==="string"){k.html(P.get("current").replace("{current}",I+1).replace("{total}",n)).show()}A[P.get("loop")||I<n-1?"show":"hide"]().html(P.get("next"));O[P.get("loop")||I?"show":"hide"]().html(P.get("previous"));ut();if(P.get("preloading")){e.each([Z(-1),Z(1)],function(){var n,r=E[this],s=new Y(r,e.data(r,i)),o=s.get("href");if(o&&tt(s,o)){o=nt(s,o);n=t.createElement("img");n.src=o}})}}else{_.hide()}if(P.get("iframe")){r=t.createElement("iframe");if("frameBorder"in r){r.frameBorder=0}if("allowTransparency"in r){r.allowTransparency="true"}if(!P.get("scrolling")){r.scrolling="no"}e(r).attr({src:P.get("href"),name:(new Date).getTime(),"class":s+"Iframe",allowFullScreen:true}).one("load",u).appendTo(x);D.one(h,function(){r.src="//about:blank"});if(P.get("fastIframe")){e(r).trigger("load")}}else{u()}if(P.get("transition")==="fade"){d.fadeTo(o,1,a)}else{a()}};if(P.get("transition")==="fade"){d.fadeTo(o,0,function(){X.position(0,r)})}else{X.position(o,r)}};X.next=function(){if(!U&&E[1]&&(P.get("loop")||E[I+1])){I=Z(1);at(E[I])}};X.prev=function(){if(!U&&E[1]&&(P.get("loop")||I)){I=Z(-1);at(E[I])}};X.close=function(){if(R&&!z){z=true;R=false;ot(l);P.get("onCleanup");S.unbind("."+s);p.fadeTo(P.get("fadeOut")||0,0);d.stop().fadeTo(P.get("fadeOut")||0,0,function(){d.hide();p.hide();ot(h);x.remove();setTimeout(function(){z=false;ot(c);P.get("onClosed")},1)})}};X.remove=function(){if(!d){return}d.stop();e[i].close();d.stop(false,true).remove();p.remove();z=false;d=null;e("."+o).removeData(i).removeClass(o);e(t).unbind("click."+s).unbind("keydown."+s)};X.element=function(){return e(P.el)};X.settings=r})(jQuery,document,window)