/*
 Copyright (c) 2009-2012 Petr Vostrel (http://petr.vostrel.cz/)
 Dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.

 jQuery Reel
 http://jquery.vostrel.cz/reel
 Version: 1.1.3-devel
 Updated: 2012-01-16

 Requires jQuery 1.4.3 or higher
*/
jQuery.reel||function(h,Ib,Na,r){function M(e){return h.reel.instances.length?h.reel.instances.first().data(e):null}function Jb(e){return h.reel.instances.push(e[0])&&e}function Kb(e){return(h.reel.instances=h.reel.instances.not(ja(e.attr(aa))))&&e}function Lb(e){return"data:image/gif;base64,R0lGODlh"+e}function N(e){return"<"+e+"/>"}function q(e){return"."+(e||"")}function ta(e){return h.reel.cdn+e}function ua(e){return"url("+e+")"}function ba(e,a,o){return ka(e,Oa(a,o))}function Mb(e){function a(){h.fn[this]||
(h.fn[this]=function(){return this})}h.each(e,a)}function Pa(e,a){return O(e)*(a?-1:1)}function va(e){return e.originalEvent.touches[0]}function U(e){return e===r||typeof e=="string"?e:e+V}function ja(e){return"#"+e}function Nb(e){var a=[];h.each(e,function(o,g){a.push(o.replace(/([A-Z])/g,"-$1").toLowerCase()+":"+U(g))});return"{"+a.join(";")+";}"}function Ob(){var e=h().jquery.split(".");if(e=+e[0]<=1&&(+e[1]<4||+e[1]==4&&+e[2]<3))try{console.error("FATAL: jQuery Reel plug-in requires at least jQuery 1.4.3")}catch(a){}return e}
if(!Ob()){h.reel={version:"1.2alpha",def:{area:r,brake:0.23,clickfree:false,cw:false,delay:-1,directional:false,draggable:true,footage:6,entry:r,frame:1,frames:36,graph:r,hint:"",horizontal:true,image:r,images:[],indicator:0,inversed:false,klass:"",laziness:6,loops:true,monitor:r,opening:0,orbital:0,path:"",preloader:2,rebound:0.5,revolution:r,row:1,rows:0,spacing:0,speed:0,step:r,steps:r,stitched:0,suffix:"-reel",tempo:36,timeout:2,throwable:true,vertical:false,wheelable:true,annotations:r,attr:{},
cursor:r,preload:"fidelity",scrollable:true,steppable:true,sequence:"",velocity:0}};h.fn.reel=function(e){var a=h.extend({},h.reel.def,e);e=function(g){var t=[];g.filter(Qa).each(function(){var d=h(this),c=a.images.length&&a.images||a.image||a.attr.src||d.attr(lb),u=wa(a.attr.width||d.css(Ra)),p=wa(a.attr.height||d.css(mb));!c||c==P||!u||!p||t.push(d)});g.filter(q(w)).each(function(){t.push(h(this).unreel())});return h(t)}(this);var o=[];a.tooltip&&(a.hint=a.tooltip);a.hotspot&&(a.area=a.hotspot);
e.each(function(){var g=h(this),t=g.data(),d=function(i,b){t[i]=b;g.trigger("store",[i,b]);return b},c=function(i){var b=t[i];g.trigger("recall",[i,b]);return b},u={setup:function(i){if(g.hasClass(w))return p.call(i);var b=g.attr(a.attr).attr(lb),f=d(aa,g.attr(aa)||g.attr(aa,w+"-"+ +new Date).attr(aa)),j=g.attr(la),k=h.extend({},g.data()),m=h.reel.sequence_pattern.exec(d(Pb,a.sequence));m=d(ca,m?h.reel.build_sequence(m,a,c):a.images);var l=a.stitched,n=a.loops,x={x:wa(g.css(Ra)||a.attr.width),y:wa(g.css(mb)||
a.attr.height)},y=d(H,a.frame),W=d(xa,a.orbital&&a.footage||a.rows<=1&&m.length||a.frames),Qb=l?1:nb(W/a.footage);f=ja(f+a.suffix);var ob=g.attr("class")||"";y=h(N(ma),{id:f.substr(1),"class":ob+B+Rb+B+pb+y});y=g.wrap(y.addClass(a.klass)).attr({"class":w});o.push(Jb(y)[0]);y=y.parent().bind(u.instance);d(Sb,a);d(Sa,m.length?P:a.image||b.replace(/^(.*)\.(jpg|jpeg|png|gif)$/,"$1"+a.suffix+".$2"));d(Ta,[]);d(Ua,0);d(qb,a.spacing);d(I,x);d(s,0);d(Va,a.steps||a.frames);d(ya,a.revolution||l/2||x.x*2);d(Wa,
Qb);d(da,1/(W-(n&&!l?0:1)));d(Tb,1/ka(W,c(Va)));d(Xa,l);d(rb,l-(n?0:x.x));d(Ya,f);d(J,d(za,a.speed)<0);d(X,a.velocity||0);d(ea,a.vertical);d(fa,0);d(K,(a.row-1)/(a.rows-1));d(ga,Pa(1,!a.cw&&!l));d(Za,{});d(na,false);d(Aa,d($a,0));d(Ba,d(Ca,0));d(oa,false);d(sb,a.brake);d(ab,!!a.orbital);d(Q,a.tempo/(h.reel.lazy?a.laziness:1));d(Y,-1);d(bb,a.annotations)||y.unbind(".annotations");d(tb,{src:b,classes:ob,style:j||P,data:k});a.steppable||y.unbind("click.steppable");E(true,P,{width:x.x,height:x.y,overflow:cb,
position:"relative"});E(true,Z+B+q(w),{display:ub});L.bind(u.pool);p.call(i);g.trigger("setup")},instance:{teardown:function(i){var b=g.data(tb);g.parent().unbind(u.instance);c(la).remove();Kb(g.unbind(z).siblings().unbind(z).remove().end().attr({"class":b.classes,src:b.src,style:b.style}).data(b.data).unwrap());Da();L.unbind(u.pool);ha.unbind(db).unbind(eb);p.call(i)},setup:function(){var i=c(I),b=c(xa),f=ka(b,c(Va));f=d(s,1/f*((a.step||a.frame)-1));d(H,R(f*b)+1);g.attr(aa);b=g.parent();var j=!c(oa)||
a.rows<=1||!a.orbital||a.scrollable;f=d(Ub,h(a.area||b));if(h.reel.touchy){E(true,B+q(w),{WebkitUserSelect:Ea,WebkitBackgroundSize:a.images.length?"auto":c(Xa)&&U(c(Xa))+B+U(i.y)||U(i.x*a.footage)+B+U(i.y*c(Wa)*(a.rows||1)*(a.directional?2:1))});f.bind(Vb,function(l){g.trigger("down",[va(l).clientX,va(l).clientY,true])}).bind(Wb,function(l){g.trigger("pan",[va(l).clientX,va(l).clientY,true]);return!j}).bind(Xb,function(){g.trigger("up",[true]);return false}).bind(Yb,function(){g.trigger("up",[true]);
return false})}else{var k=a.cursor==vb?ua(Zb)+Z+fb:a.cursor||ua($b)+Z+fb,m=a.cursor==vb?ua(ac)+Z+fb+" !important":false;E(true,P,{cursor:k});E(true,q(gb),{cursor:bc});E(false,q(Fa)+Z+q(Fa)+" *",{cursor:m||k});f.bind(a.wheelable?cc:P,function(l,n){return!n||g.trigger("wheel",[n])&&false}).bind(a.clickfree?dc:ec,function(l){if(!(fc?!l.button:!!l.button)){g.trigger("down",[l.clientX,l.clientY]);return false}}).bind(a.clickfree?gc:P,function(){g.trigger("up");return false}).disableTextSelect()}a.hint&&
f.attr(hc,a.hint);a.monitor&&b.append(S=h(N(ma),{"class":wb}))||(S=h());E(true,B+q(wb),{position:Ga,left:0,top:0});E(true,B+q(xb),{display:Ea});E(true,B+q(yb),{position:Ga,left:0,top:i.y-a.preloader,height:a.preloader,overflow:cb,backgroundColor:zb});a.indicator&&b.append(F(Ab));a.rows>1&&a.indicator&&b.append(F(Bb))},preload:function(i){var b=c(I),f=g.parent(),j=c(Sa),k=c(ca),m=!k.length,l=c(xa),n=h.reel.preload[a.preload]||h.reel.preload[h.reel.def.preload];j=m?[j]:n(k.slice(),a,c);d(fa,m?0.5:0);
k=[];f.addClass(gb).append(v=h(N(ma),{"class":yb}));for(g.trigger("stop");j.length;){var x=a.path+j.shift();n=b.x*(!m?1:a.footage);var y=b.y*(!m?1:l/a.footage)*(!a.directional?1:2),W=h(N(Qa)).attr({"class":xb,width:n,height:y}).appendTo(f);setTimeout(function(){W.attr({src:x});g.triggerAfter("preloaded",function(){return!!W.parent().length&&W[0].complete})},k.length-j.length);k.push(x)}d(Ta,k);d(la,h("<"+la+' type="text/css">'+Cb.join("\n")+"</"+la+">").prependTo("head"));p.call(i)},preloaded:function(i){var b=
c(ca).length;if(d(fa,Oa(c(fa)+1,b))===b){g.unbind("preloaded",u.instance.preloaded);b>1||g.css({backgroundImage:ua(a.path+c(Sa))}).attr({src:ic});g.parent().removeClass(gb);g.trigger("loaded");p.call(i)}},opening:function(){if(!a.opening)return g.trigger("openingDone");var i=a.entry||a.speed,b=c(s),f=a.opening;d(s,b-i*a.opening);d(Y,f*M(Q))},openingDone:function(){if(a.delay)$=setTimeout(function(){g.trigger("play")},a.delay*1E3);else g.trigger("play")},play:function(i,b){b=d(za,b||c(za));b=d(hb,
!!b);d(ib,!b);g.trigger("frameChange");G();p.call(i)},pause:function(i){d(hb,false);A();p.call(i)},stop:function(i){var b=d(ib,true);d(hb,!b);p.call(i)},down:function(i,b,f,j){if(a.draggable){d(na,c(H));d(X,0);Ha=Ia(b,f,c(s),c(ya),c(K));A();Da();pa=false;Db.addClass(Fa);if(!j){ha.bind(eb,function(k){g.trigger("pan",[k.clientX,k.clientY]);p.call(k);return false});a.clickfree||ha.bind(db,function(k){g.trigger("up");p.call(k)})}}p.call(i)},up:function(i,b){if(!a.draggable)return p.call(i);d(na,false);
d(oa,false);var f=d(X,!a.throwable?0:O(qa[0]+qa[1])/60);T=f?1:0;f?G():A();Da();Db.removeClass(Fa);!b&&ha.unbind(db).unbind(eb);p.call(i)},pan:function(i,b,f){if(a.draggable&&jb){jb=false;A();var j={x:b-Ha.x,y:f-Ha.y};if(O(j.x)>0||O(j.y)>0){pa=true;Ha={x:b,y:f};var k=c(ya),m=c(Za),l=c(ea),n=d(s,Eb(l?f-m.y:b-m.x,c(Aa),k,c(Ba),c(Ca),c(ga),l?f-m.y:b-m.x));d(oa,c(oa)||c(H)!=c(na));(j=Fb(l?j.y:j.x||0))&&d(J,j<0);if(a.orbital&&c(ab)){d(ea,O(f-m.y)>O(b-m.x));m=Ia(b,f,n,k,c(K))}if(a.rows>1){j=c(I).y;l=c($a);
var x=-l*j;d(K,h.reel.math.envelope(f-m.y,l,j,x,x+j,-1))}!(n%1)&&!a.loops&&Ia(b,f,n,k,c(K));g.trigger("fractionChange")}}p.call(i)},wheel:function(i,b){var f=nb(jc(O(b))/2);f=Pa(f,b>0);b=0.0833*c(ya);Ia(r,r,c(s),b,c(K));d(s,Eb(f,c(Aa),b,c(Ba),c(Ca),c(ga)));f&&d(J,f<0);d(X,0);A();p.call(i);g.trigger("up");g.trigger("fractionChange");return false},fractionChange:function(i,b){b=d(s,Ja.fraction(b,a,c));var f=d(H,1+ia(b/c(da))),j=a.rows>1,k=a.orbital;d(ab,!!k&&(f<=k||f>=a.footage-k+2));if(!a.loops&&a.rebound){!C&&
!(b%1)?kb++:(kb=0);kb>=a.rebound*1E3/M(Q)&&d(J,!c(J))}g.trigger(j?"rowChange":"frameChange");p.call(i)},rowChange:function(i,b){var f=c(s)/c(da)+1;b=d(K,Ja.row(b,a,c));b=ba(0,a.rows-1,ia(b*a.rows));d(H,ia(f+b*a.frames));p.call(i);g.trigger("frameChange")},frameChange:function(i,b){var f=d(s,Ja.fraction(!b?r:c(da)*(b-1),a,c));b=Ja.frame(b,a,c);var j=c(Ta).length==1,k=a.footage;if(c(ea)){b=a.inversed?k+1-b:b;b+=k}if(b==c(Ua))D(i);else{var m=a.horizontal,l=c(ca),n=c(I);b=d(Ua,d(H,b));if(j){if(a.stitched)n=
[-R(f*c(rb))+V,0+V];else{f=b%k-1;f=f<0?k-1:f;k=ia((b-0.1)/k);k+=a.rows>1?0:c(J)?0:c(Wa);b=c(qb);k=k*((m?n.y:n.x)+b);n=f*((m?n.x:n.y)+b);n=l.length?[0,0]:m?[-n+V,-k+V]:[-k+V,-n+V]}g.css({backgroundPosition:n.join(B)})}else g.attr({src:a.path+l[b-1]})}if(a.indicator){m=c(Ya);l=a.rows>1;n=c(I);f=(c(ea)?n.y:n.x)-a.indicator;b=ba(0,f,R(h.reel.math.interpolate(c(s),-1,f+2)));b=!a.cw||a.stitched?b:f-b;h(q(Ka+q(Ab)),m).css(c(ea)?{left:0,top:b}:{left:b,top:n.y-a.indicator});if(l){n=n.y-a.indicator;n=ba(0,
n,R(h.reel.math.interpolate(c(K),-1,n+2)));h(q(Ka+q(Bb)),m).css({top:n})}}p.call(i)},stepLeft:function(){A();d(J,false);g.trigger("fractionChange",c(s)-c(da)*c(ga))},stepRight:function(){A();d(J,true);g.trigger("fractionChange",c(s)+c(da)*c(ga))},"click.steppable":function(i){if(pa)return D(i);g.trigger(i.clientX-g.offset().left>0.5*c(I).x?"stepRight":"stepLeft")},"setup.annotations":function(){c(I);var i=g.parent();h.each(c(bb),function(b,f){var j=h(N(ma),f.node).attr({id:b}).addClass(kc),k=f.image?
h(N(Qa),f.image):h(),m=f.link?h(N(lc),f.link):h();E(false,ja(b),{display:Ea,position:Ga});m.bind({"click.annotations":function(l){l.stopPropagation()}});f.image||f.link&&j.append(m);f.link||f.image&&j.append(k);f.link&&f.image&&j.append(m.append(k));j.appendTo(i)});g.trigger("frameChange.annotations")},"frameChange.annotations":function(i,b){b=b||c(H);this.className=this.className.replace(mc,pb+b);c(X)||h.each(c(bb),function(f,j){f=h(ja(f));var k=j.start||1,m=j.end,l=b-1,n=j.at?j.at[l]=="+":false;
l=j.at?l:l-k+1;var x=typeof j.x!=Gb?j.x:j.x[l],y=typeof j.y!=Gb?j.y:j.y[l];j={display:x!==r&&y!==r&&(j.at?n:l>=0&&(!m||l<=m-k))?ub:Ea,left:U(x)||0,top:U(y)||0};f.css(j)})},"setup.fu":function(){g.trigger("preload")},"loaded.fu":function(){g.trigger("opening")}},pool:{"tick.reel":function(i){var b=c(X);if(T){var f=b-c(sb)/M(Q)*T;b=d(X,f>0.1?f:(T=C=0))}S.text(c(a.monitor));b&&T++;C&&C++;Fb(0);jb=true;if(C&&!b)return D(i);if(c(na))return D(i,A());if(!(c(Y)>0)){f=c(ga)*Pa(1,c(J));b=(c(ib)?b:O(c(za))+
b)/M(Q);var j=c(s);d(s,j-b*f);p.call(i)}},"tick.reel.preload":function(){var i=c(I),b=parseInt(v.css(Ra)),f=R(1/c(ca).length*c(fa)*i.x);v.css({width:b+(f-b)/3+1});if(c(fa)===c(ca).length&&b>i.x-2){v.fadeOut(300,function(){v.remove()});L.unbind("tick.reel.preload",u.pool["tick.reel.preload"])}},"tick.reel.opening":function(i){if(a.opening){if(c(Y)<=0)return;var b=(a.entry||a.speed)/M(Q)*(a.cw?-1:1),f=c(s);d(s,f+b);b=d(Y,c(Y)-1);p.call(i);if(b>0)return;g.trigger("openingDone")}L.unbind(ra+q(La),u.pool[ra+
q(La)])},"tick.reel.fu":function(){g.trigger("fractionChange")}}},p=function(i){Hb||delete this;return i},D=function(i,b){return i.stopImmediatePropagation()||p.call(i)||b},C,T=0,G=function(){return C=0},A=function(){clearTimeout($);L.unbind(ra+q(La),u.pool[ra+q(La)]);d(Y,0);g.trigger("play");return C=-a.timeout*M(Q)},pa=false,$,S,v,F=function(i){E(true,B+q(Ka)+q(i),{position:Ga,width:a.indicator,height:a.indicator,overflow:cb,backgroundColor:zb});return h(N(ma),{"class":[Ka,i].join(B)})},Cb=[],E=
function(i,b,f){var j=c(Ya);b=b.split(Z);i&&h.each(b,function(k,m){b[k]=j+m});Cb.push(b.join(Z)+Nb(f));return f},kb=0,Ha={x:0,y:0},Fb=function(i){return qa.push(i)&&qa.shift()&&i},Da=function(){return qa=[0,0]},qa=Da(),Eb=a.graph||h.reel.math[a.loops?"hatch":"envelope"],Ja=h.reel.normal,Ia=function(i,b,f,j,k){d(Aa,f);d($a,k);d(Ba,a.loops?0:-f*j);d(Ca,a.loops?j:j-f*j);return i&&d(Za,{x:i,y:b})||r},jb=true,ha;try{ha=h.browser.opera?L:h.unique(L.add(Ib.top.document))}catch(nc){ha=L}u.setup()});Ma=Ma||
function g(){var t=+new Date,d=M(Q);if(d){L.trigger(ra);h.reel.cost=(+new Date+h.reel.cost-t)/2;return Ma=setTimeout(g,ka(4,1E3/d-h.reel.cost))}else return Ma=r}();return h(o)};h.fn.unreel=function(){return this.trigger("teardown")};h.reel.math={envelope:function(e,a,o,g,t,d){return a+ka(g,Oa(t,-e*d))/o},hatch:function(e,a,o,g,t,d){e=(e<g?t:0)+e%t;e=a+-e*d/o;return e-ia(e)},interpolate:function(e,a,o){return a+e*(o-a)}};h.reel.preload={linear:function(e){return e},fidelity:function(e,a){function o(p,
D,C){function T(F){for(;!(F>=1&&F<=$);)F+=F<1?+$:-$;return u[C+F]||(u[C+F]=!!G.push(F))}if(!p.length)return[];var G=[],A=4*D,pa=a.frame,$=p.length;D=true;for(var S=$/A,v=0;v<A;v++)T(pa+R(v*S));for(;S>1;){v=0;A=G.length;S/=2;for(D=!D;v<A;v++)T(G[v]+(D?1:-1)*R(S))}for(v=0;v<G.length;v++)G[v]=p[G[v]-1];return G}var g=a.orbital?2:a.rows||1,t=a.orbital?a.footage:a.frames,d=(a.row-1)*t,c=[].concat(e),u=new Array(e.length);e=g<2?[]:c.slice(d,d+t);return o(e,1,d).concat(o(c,g,0))}};h.reel.normal={fraction:function(e,
a,o){e=e!=r?e:o(s);return a.loops?e-ia(e):ba(0,1,e)},row:function(e,a,o){return ba(0,1,e!=r?(e-1)/(a.rows-1):o(K))},frame:function(e,a,o){e=e!=r?R(e):o(H);var g=a.orbital?2:a.rows||1;o=o(xa)*g;e=a.loops?e%o||o:ba(1,o,e);return e<0?e+o:e}};h.reel.sequence_pattern=/(^[^#|]*([#]+)[^#|]*)($|[|]([0-9]+)\.\.([0-9]+))($|[|]([0-9]+)$)/;h.reel.build_sequence=function(e,a){function o(p,D,C){for(;p.length<D;)p=C+p;return p}if(e.length<=1)return a.images;var g=[],t=e[1],d=e[2],c=+e[4]||1,u=a.orbital?2:a.rows||
1;a=a.orbital?a.footage:a.frames;u=+(e[5]||u*a);e=+e[7]||1;for(a=0;a<u;){g.push(t.replace(d,o(c+a+P,d.length,"0")));a+=e}return g};h.reel.touchy=/iphone|ipod|ipad|android/i.test(navigator.userAgent);h.reel.lazy=/iphone|ipod|android/i.test(navigator.userAgent);h.reel.cdn="http://code.vostrel.cz/";h.reel.instances=h();h.reel.cost=0;h.reel.leader=M;Mb("mousewheel disableTextSelect enableTextSelect".split(/ /));var L=h(Na),Db=h("html");Na=+h.browser.version.split(q()).slice(0,2).join(q());var Hb=h.browser.msie,
sa=navigator.userAgent;sa={linux:/linux/i.test(sa),windows:/windows/i.test(sa),mac:/macintosh/i.test(sa)};var fc=Hb&&Na<=8,Ma,w="reel",Rb=w+"-overlay",Ka=w+"-indicator",yb=w+"-preloader",xb=w+"-cached",wb=w+"-monitor",kc=w+"-annotation",Fa=w+"-panning",gb=w+"-loading",pb="frame-",mc=/frame-\d+/,R=Math.round,ia=Math.floor,nb=Math.ceil,Oa=Math.min,ka=Math.max,O=Math.abs,jc=Math.sqrt,wa=parseInt,bb="annotations",Ub="area",tb="backup",J="backwards",da="bit",sb="brake",Ta="cached",ab="center",na="clicked",
Za="clicked_location",Aa="clicked_on",$a="clicked_row",ga="cwish",I="dimensions",s="fraction",H="frame",Ua="_frame",xa="frames",Ca="hi",cb="hidden",Sa="image",ca="images",Y="opening_ticks",Ba="lo",Sb="options",hb="playing",fa="preloaded",oa="reeling",ya="revolution",K="row",Wa="rows",Pb="sequence",qb="spacing",za="speed",Ya="stage",Va="steps",Xa="stitched",rb="stitched_travel",ib="stopped",la="style",Q="tempo",X="velocity",ea="vertical",Tb="wheel_step",z=".reel",ec="mousedown"+z,dc="mouseenter"+z,
gc="mouseleave"+z,eb="mousemove"+z,db="mouseup"+z,cc="mousewheel"+z,ra="tick"+z,Yb="touchcancel"+z,Xb="touchend"+z,Vb="touchstart"+z,Wb="touchmove"+z,P="",B=" ",Z=",",Ga="absolute",lc="a",ub="block",ma="div",vb="hand",mb="height",zb=ja("000"),aa="id",Qa="img",fb="move",Ea="none",Gb="object",La="opening",V="px",lb="src",hc="title",Ra="width",Ab="x",Bb="y",ic=Lb("CAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7")||ta("blank.gif"),bc="wait",$b=ta("jquery.reel-"+(sa.mac?"black":"white")+q("cur")),
Zb=ta("jquery.reel-drag"+q("cur")),ac=ta("jquery.reel-drag-down"+q("cur"));h.fn.triggerAfter=function(e,a){function o(g){a()?g.trigger(e):setTimeout(function(){o(g)},100);return g}return o(h(this))}}}(jQuery,window,document);
