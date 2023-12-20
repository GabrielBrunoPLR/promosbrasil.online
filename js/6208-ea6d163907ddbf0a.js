"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6208],{66208:function(a,b,c){function d(a){if(null==a)return window;if("[object Window]"!==a.toString()){var b=a.ownerDocument;return b&&b.defaultView||window}return a}function e(a){var b=d(a).Element;return a instanceof b||a instanceof Element}function f(a){var b=d(a).HTMLElement;return a instanceof b||a instanceof HTMLElement}function g(a){if("undefined"==typeof ShadowRoot)return!1;var b=d(a).ShadowRoot;return a instanceof b||a instanceof ShadowRoot}c.d(b,{fi:function(){return an}});var h=Math.max,i=Math.min,j=Math.round;function k(){var a=navigator.userAgentData;return null!=a&&a.brands?a.brands.map(function(a){return a.brand+"/"+a.version}).join(" "):navigator.userAgent}function l(){return!/^((?!chrome|android).)*safari/i.test(k())}function m(a,b,c){void 0===b&&(b=!1),void 0===c&&(c=!1);var g=a.getBoundingClientRect(),h=1,i=1;b&&f(a)&&(h=a.offsetWidth>0&&j(g.width)/a.offsetWidth||1,i=a.offsetHeight>0&&j(g.height)/a.offsetHeight||1);var k=(e(a)?d(a):window).visualViewport,m=!l()&&c,n=(g.left+(m&&k?k.offsetLeft:0))/h,o=(g.top+(m&&k?k.offsetTop:0))/i,p=g.width/h,q=g.height/i;return{width:p,height:q,top:o,right:n+p,bottom:o+q,left:n,x:n,y:o}}function n(a){var b=d(a),c=b.pageXOffset,e=b.pageYOffset;return{scrollLeft:c,scrollTop:e}}function o(a){return a?(a.nodeName||"").toLowerCase():null}function p(a){return((e(a)?a.ownerDocument:a.document)||window.document).documentElement}function q(a){return m(p(a)).left+n(a).scrollLeft}function r(a){return d(a).getComputedStyle(a)}function s(a){var b=r(a),c=b.overflow,d=b.overflowX,e=b.overflowY;return/auto|scroll|overlay|hidden/.test(c+e+d)}function t(a){var b=m(a),c=a.offsetWidth,d=a.offsetHeight;return 1>=Math.abs(b.width-c)&&(c=b.width),1>=Math.abs(b.height-d)&&(d=b.height),{x:a.offsetLeft,y:a.offsetTop,width:c,height:d}}function u(a){return"html"===o(a)?a:a.assignedSlot||a.parentNode||(g(a)?a.host:null)||p(a)}function v(a){return["html","body","#document"].indexOf(o(a))>=0?a.ownerDocument.body:f(a)&&s(a)?a:v(u(a))}function w(a,b){void 0===b&&(b=[]);var c,e=v(a),f=e===(null==(c=a.ownerDocument)?void 0:c.body),g=d(e),h=f?[g].concat(g.visualViewport||[],s(e)?e:[]):e,i=b.concat(h);return f?i:i.concat(w(u(h)))}function x(a){return["table","td","th"].indexOf(o(a))>=0}function y(a){return f(a)&&"fixed"!==r(a).position?a.offsetParent:null}function z(a){for(var b=d(a),c=y(a);c&&x(c)&&"static"===r(c).position;)c=y(c);return c&&("html"===o(c)||"body"===o(c)&&"static"===r(c).position)?b:c||function(a){var b=/firefox/i.test(k());if(/Trident/i.test(k())&&f(a)&&"fixed"===r(a).position)return null;var c=u(a);for(g(c)&&(c=c.host);f(c)&&0>["html","body"].indexOf(o(c));){var d=r(c);if("none"!==d.transform||"none"!==d.perspective||"paint"===d.contain|| -1!==["transform","perspective"].indexOf(d.willChange)||b&&"filter"===d.willChange||b&&d.filter&&"none"!==d.filter)return c;c=c.parentNode}return null}(a)||b}var A="top",B="bottom",C="right",D="left",E="auto",F=[A,B,C,D],G="start",H="viewport",I="popper",J=F.reduce(function(a,b){return a.concat([b+"-"+G,b+"-end"])},[]),K=[].concat(F,[E]).reduce(function(a,b){return a.concat([b,b+"-"+G,b+"-end"])},[]),L=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],M={placement:"bottom",modifiers:[],strategy:"absolute"};function N(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return!b.some(function(a){return!(a&&"function"==typeof a.getBoundingClientRect)})}var O={passive:!0};function P(a){return a.split("-")[0]}function Q(a){return a.split("-")[1]}function R(a){return["top","bottom"].indexOf(a)>=0?"x":"y"}function S(a){var b,c=a.reference,d=a.element,e=a.placement,f=e?P(e):null,g=e?Q(e):null,h=c.x+c.width/2-d.width/2,i=c.y+c.height/2-d.height/2;switch(f){case A:b={x:h,y:c.y-d.height};break;case B:b={x:h,y:c.y+c.height};break;case C:b={x:c.x+c.width,y:i};break;case D:b={x:c.x-d.width,y:i};break;default:b={x:c.x,y:c.y}}var j=f?R(f):null;if(null!=j){var k="y"===j?"height":"width";switch(g){case G:b[j]=b[j]-(c[k]/2-d[k]/2);break;case"end":b[j]=b[j]+(c[k]/2-d[k]/2)}}return b}var T={top:"auto",right:"auto",bottom:"auto",left:"auto"};function U(a){var b,c,e=a.popper,f=a.popperRect,g=a.placement,h=a.variation,i=a.offsets,k=a.position,l=a.gpuAcceleration,m=a.adaptive,n=a.roundOffsets,o=a.isFixed,q=i.x,s=void 0===q?0:q,t=i.y,u=void 0===t?0:t,v="function"==typeof n?n({x:s,y:u}):{x:s,y:u};s=v.x,u=v.y;var w=i.hasOwnProperty("x"),x=i.hasOwnProperty("y"),y=D,E=A,F=window;if(m){var G=z(e),H="clientHeight",I="clientWidth";if(G===d(e)&&(G=p(e),"static"!==r(G).position&&"absolute"===k&&(H="scrollHeight",I="scrollWidth")),g===A||(g===D||g===C)&&"end"===h){E=B;var J=o&&G===F&&F.visualViewport?F.visualViewport.height:G[H];u-=J-f.height,u*=l?1:-1}if(g===D||(g===A||g===B)&&"end"===h){y=C;var K=o&&G===F&&F.visualViewport?F.visualViewport.width:G[I];s-=K-f.width,s*=l?1:-1}}var L,M,N,O,P,Q=Object.assign({position:k},m&&T),R=!0===n?(M=(L={x:s,y:u}).x,N=L.y,O=window,P=O.devicePixelRatio||1,{x:j(M*P)/P||0,y:j(N*P)/P||0}):{x:s,y:u};return(s=R.x,u=R.y,l)?Object.assign({},Q,((c={})[E]=x?"0":"",c[y]=w?"0":"",c.transform=1>=(F.devicePixelRatio||1)?"translate("+s+"px, "+u+"px)":"translate3d("+s+"px, "+u+"px, 0)",c)):Object.assign({},Q,((b={})[E]=x?u+"px":"",b[y]=w?s+"px":"",b.transform="",b))}var V={left:"right",right:"left",bottom:"top",top:"bottom"};function W(a){return a.replace(/left|right|bottom|top/g,function(a){return V[a]})}var X={start:"end",end:"start"};function Y(a){return a.replace(/start|end/g,function(a){return X[a]})}function Z(a,b){var c=b.getRootNode&&b.getRootNode();if(a.contains(b))return!0;if(c&&g(c)){var d=b;do{if(d&&a.isSameNode(d))return!0;d=d.parentNode||d.host}while(d)}return!1}function $(a){return Object.assign({},a,{left:a.x,top:a.y,right:a.x+a.width,bottom:a.y+a.height})}function _(a,b,c){var f,g,i,j,k,o,s,t,u,v,w,x;return b===H?$(function(a,b){var c=d(a),e=p(a),f=c.visualViewport,g=e.clientWidth,h=e.clientHeight,i=0,j=0;if(f){g=f.width,h=f.height;var k=l();(k|| !k&&"fixed"===b)&&(i=f.offsetLeft,j=f.offsetTop)}return{width:g,height:h,x:i+q(a),y:j}}(a,c)):e(b)?(f=b,(i=m(f,!1,"fixed"===(g=c))).top=i.top+f.clientTop,i.left=i.left+f.clientLeft,i.bottom=i.top+f.clientHeight,i.right=i.left+f.clientWidth,i.width=f.clientWidth,i.height=f.clientHeight,i.x=i.left,i.y=i.top,i):$((j=p(a),o=p(j),s=n(j),t=null==(k=j.ownerDocument)?void 0:k.body,u=h(o.scrollWidth,o.clientWidth,t?t.scrollWidth:0,t?t.clientWidth:0),v=h(o.scrollHeight,o.clientHeight,t?t.scrollHeight:0,t?t.clientHeight:0),w=-s.scrollLeft+q(j),x=-s.scrollTop,"rtl"===r(t||o).direction&&(w+=h(o.clientWidth,t?t.clientWidth:0)-u),{width:u,height:v,x:w,y:x}))}function aa(){return{top:0,right:0,bottom:0,left:0}}function ab(a){return Object.assign({},aa(),a)}function ac(a,b){return b.reduce(function(b,c){return b[c]=a,b},{})}function ad(a,b){void 0===b&&(b={});var c,d,g,j,k,l,n,q,s,t,v=b,x=v.placement,y=void 0===x?a.placement:x,D=v.strategy,E=void 0===D?a.strategy:D,G=v.boundary,J=v.rootBoundary,K=v.elementContext,L=void 0===K?I:K,M=v.altBoundary,N=v.padding,O=void 0===N?0:N,P=ab("number"!=typeof O?O:ac(O,F)),Q=a.rects.popper,R=a.elements[void 0!==M&&M?L===I?"reference":I:L],T=(c=e(R)?R:R.contextElement||p(a.elements.popper),d=void 0===G?"clippingParents":G,g=void 0===J?H:J,j=E,s=(q=[].concat("clippingParents"===d?(l=w(u(k=c)),n=["absolute","fixed"].indexOf(r(k).position)>=0&&f(k)?z(k):k,e(n)?l.filter(function(a){return e(a)&&Z(a,n)&&"body"!==o(a)}):[]):[].concat(d),[g]))[0],t=q.reduce(function(a,b){var d=_(c,b,j);return a.top=h(d.top,a.top),a.right=i(d.right,a.right),a.bottom=i(d.bottom,a.bottom),a.left=h(d.left,a.left),a},_(c,s,j)),t.width=t.right-t.left,t.height=t.bottom-t.top,t.x=t.left,t.y=t.top,t),U=m(a.elements.reference),V=S({reference:U,element:Q,strategy:"absolute",placement:y}),W=$(Object.assign({},Q,V)),X=L===I?W:U,Y={top:T.top-X.top+P.top,bottom:X.bottom-T.bottom+P.bottom,left:T.left-X.left+P.left,right:X.right-T.right+P.right},aa=a.modifiersData.offset;if(L===I&&aa){var ad=aa[y];Object.keys(Y).forEach(function(a){var b=[C,B].indexOf(a)>=0?1:-1,c=[A,B].indexOf(a)>=0?"y":"x";Y[a]+=ad[c]*b})}return Y}function ae(a,b,c){return h(a,i(b,c))}function af(a,b,c){return void 0===c&&(c={x:0,y:0}),{top:a.top-b.height-c.y,right:a.right-b.width+c.x,bottom:a.bottom-b.height+c.y,left:a.left-b.width-c.x}}function ag(a){return[A,C,B,D].some(function(b){return a[b]>=0})}var ah,ai,aj,ak,al,am,an=(ah={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(a){var b=a.state,c=a.instance,e=a.options,f=e.scroll,g=void 0===f||f,h=e.resize,i=void 0===h||h,j=d(b.elements.popper),k=[].concat(b.scrollParents.reference,b.scrollParents.popper);return g&&k.forEach(function(a){a.addEventListener("scroll",c.update,O)}),i&&j.addEventListener("resize",c.update,O),function(){g&&k.forEach(function(a){a.removeEventListener("scroll",c.update,O)}),i&&j.removeEventListener("resize",c.update,O)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(a){var b=a.state,c=a.name;b.modifiersData[c]=S({reference:b.rects.reference,element:b.rects.popper,strategy:"absolute",placement:b.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(a){var b=a.state,c=a.options,d=c.gpuAcceleration,e=c.adaptive,f=c.roundOffsets,g=void 0===f||f,h={placement:P(b.placement),variation:Q(b.placement),popper:b.elements.popper,popperRect:b.rects.popper,gpuAcceleration:void 0===d||d,isFixed:"fixed"===b.options.strategy};null!=b.modifiersData.popperOffsets&&(b.styles.popper=Object.assign({},b.styles.popper,U(Object.assign({},h,{offsets:b.modifiersData.popperOffsets,position:b.options.strategy,adaptive:void 0===e||e,roundOffsets:g})))),null!=b.modifiersData.arrow&&(b.styles.arrow=Object.assign({},b.styles.arrow,U(Object.assign({},h,{offsets:b.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:g})))),b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-placement":b.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(a){var b=a.state;Object.keys(b.elements).forEach(function(a){var c=b.styles[a]||{},d=b.attributes[a]||{},e=b.elements[a];f(e)&&o(e)&&(Object.assign(e.style,c),Object.keys(d).forEach(function(a){var b=d[a];!1===b?e.removeAttribute(a):e.setAttribute(a,!0===b?"":b)}))})},effect:function(a){var b=a.state,c={popper:{position:b.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(b.elements.popper.style,c.popper),b.styles=c,b.elements.arrow&&Object.assign(b.elements.arrow.style,c.arrow),function(){Object.keys(b.elements).forEach(function(a){var d=b.elements[a],e=b.attributes[a]||{},g=Object.keys(b.styles.hasOwnProperty(a)?b.styles[a]:c[a]),h=g.reduce(function(a,b){return a[b]="",a},{});f(d)&&o(d)&&(Object.assign(d.style,h),Object.keys(e).forEach(function(a){d.removeAttribute(a)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(a){var b=a.state,c=a.options,d=a.name,e=c.offset,f=void 0===e?[0,0]:e,g=K.reduce(function(a,c){var d,e,g,h,i,j,k,l;return a[c]=(d=c,e=b.rects,g=f,i=[D,A].indexOf(h=P(d))>=0?-1:1,k=(j="function"==typeof g?g(Object.assign({},e,{placement:d})):g)[0],l=j[1],k=k||0,l=(l||0)*i,[D,C].indexOf(h)>=0?{x:l,y:k}:{x:k,y:l}),a},{}),h=g[b.placement],i=h.x,j=h.y;null!=b.modifiersData.popperOffsets&&(b.modifiersData.popperOffsets.x+=i,b.modifiersData.popperOffsets.y+=j),b.modifiersData[d]=g}},{name:"flip",enabled:!0,phase:"main",fn:function(a){var b=a.state,c=a.options,d=a.name;if(!b.modifiersData[d]._skip){for(var e=c.mainAxis,f=void 0===e||e,g=c.altAxis,h=void 0===g||g,i=c.fallbackPlacements,j=c.padding,k=c.boundary,l=c.rootBoundary,m=c.altBoundary,n=c.flipVariations,o=void 0===n||n,p=c.allowedAutoPlacements,q=b.options.placement,r=P(q),s=i||(r!==q&&o?function(a){if(P(a)===E)return[];var b=W(a);return[Y(a),b,Y(b)]}(q):[W(q)]),t=[q].concat(s).reduce(function(a,c){var d,e,f,g,h,i,m,n,q,r,s,t,u,v;return a.concat(P(c)===E?(d=b,e={placement:c,boundary:k,rootBoundary:l,padding:j,flipVariations:o,allowedAutoPlacements:p},g=(f=e).placement,h=f.boundary,i=f.rootBoundary,m=f.padding,n=f.flipVariations,q=f.allowedAutoPlacements,r=void 0===q?K:q,s=Q(g),t=s?n?J:J.filter(function(a){return Q(a)===s}):F,u=t.filter(function(a){return r.indexOf(a)>=0}),0===u.length&&(u=t),v=u.reduce(function(a,b){return a[b]=ad(d,{placement:b,boundary:h,rootBoundary:i,padding:m})[P(b)],a},{}),Object.keys(v).sort(function(a,b){return v[a]-v[b]})):c)},[]),u=b.rects.reference,v=b.rects.popper,w=new Map,x=!0,y=t[0],z=0;z<t.length;z++){var H=t[z],I=P(H),L=Q(H)===G,M=[A,B].indexOf(I)>=0,N=M?"width":"height",O=ad(b,{placement:H,boundary:k,rootBoundary:l,altBoundary:m,padding:j}),R=M?L?C:D:L?B:A;u[N]>v[N]&&(R=W(R));var S=W(R),T=[];if(f&&T.push(O[I]<=0),h&&T.push(O[R]<=0,O[S]<=0),T.every(function(a){return a})){y=H,x=!1;break}w.set(H,T)}if(x)for(var U=o?3:1,V=function(a){var b=t.find(function(b){var c=w.get(b);if(c)return c.slice(0,a).every(function(a){return a})});if(b)return y=b,"break"},X=U;X>0&&"break"!==V(X);X--);b.placement!==y&&(b.modifiersData[d]._skip=!0,b.placement=y,b.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(a){var b,c=a.state,d=a.options,e=a.name,f=d.mainAxis,g=d.altAxis,j=d.boundary,k=d.rootBoundary,l=d.altBoundary,m=d.padding,n=d.tether,o=void 0===n||n,p=d.tetherOffset,q=void 0===p?0:p,r=ad(c,{boundary:j,rootBoundary:k,padding:m,altBoundary:l}),s=P(c.placement),u=Q(c.placement),v=!u,w=R(s),x="x"===(b=w)?"y":"x",y=c.modifiersData.popperOffsets,E=c.rects.reference,F=c.rects.popper,H="function"==typeof q?q(Object.assign({},c.rects,{placement:c.placement})):q,I="number"==typeof H?{mainAxis:H,altAxis:H}:Object.assign({mainAxis:0,altAxis:0},H),J=c.modifiersData.offset?c.modifiersData.offset[c.placement]:null,K={x:0,y:0};if(y){if(void 0===f||f){var L,M="y"===w?A:D,N="y"===w?B:C,O="y"===w?"height":"width",S=y[w],T=S+r[M],U=S-r[N],V=o?-F[O]/2:0,W=u===G?E[O]:F[O],X=u===G?-F[O]:-E[O],Y=c.elements.arrow,Z=o&&Y?t(Y):{width:0,height:0},$=c.modifiersData["arrow#persistent"]?c.modifiersData["arrow#persistent"].padding:aa(),_=$[M],ab=$[N],ac=ae(0,E[O],Z[O]),af=v?E[O]/2-V-ac-_-I.mainAxis:W-ac-_-I.mainAxis,ag=v?-E[O]/2+V+ac+ab+I.mainAxis:X+ac+ab+I.mainAxis,ah=c.elements.arrow&&z(c.elements.arrow),ai=ah?"y"===w?ah.clientTop||0:ah.clientLeft||0:0,aj=null!=(L=null==J?void 0:J[w])?L:0,ak=S+af-aj-ai,al=S+ag-aj,am=ae(o?i(T,ak):T,S,o?h(U,al):U);y[w]=am,K[w]=am-S}if(void 0!==g&&g){var an,ao,ap,aq,ar,as="x"===w?A:D,at="x"===w?B:C,au=y[x],av="y"===x?"height":"width",aw=au+r[as],ax=au-r[at],ay=-1!==[A,D].indexOf(s),az=null!=(an=null==J?void 0:J[x])?an:0,aA=ay?aw:au-E[av]-F[av]-az+I.altAxis,aB=ay?au+E[av]+F[av]-az-I.altAxis:ax,aC=o&&ay?(ao=aA,ap=au,(ar=ae(ao,ap,aq=aB))>aq?aq:ar):ae(o?aA:aw,au,o?aB:ax);y[x]=aC,K[x]=aC-au}c.modifiersData[e]=K}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(a){var b,c=a.state,d=a.name,e=a.options,f=c.elements.arrow,g=c.modifiersData.popperOffsets,h=P(c.placement),i=R(h),j=[D,C].indexOf(h)>=0,k=j?"height":"width";if(f&&g){var l,m,n=(l=e.padding,m=c,ab("number"!=typeof(l="function"==typeof l?l(Object.assign({},m.rects,{placement:m.placement})):l)?l:ac(l,F))),o=t(f),p=c.rects.reference[k]+c.rects.reference[i]-g[i]-c.rects.popper[k],q=g[i]-c.rects.reference[i],r=z(f),s=r?"y"===i?r.clientHeight||0:r.clientWidth||0:0,u=n["y"===i?A:D],v=s-o[k]-n["y"===i?B:C],w=s/2-o[k]/2+(p/2-q/2),x=ae(u,w,v),y=i;c.modifiersData[d]=((b={})[y]=x,b.centerOffset=x-w,b)}},effect:function(a){var b=a.state,c=a.options.element,d=void 0===c?"[data-popper-arrow]":c;if(null!=d&&("string"!=typeof d||(d=b.elements.popper.querySelector(d))))Z(b.elements.popper,d)&&(b.elements.arrow=d)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(a){var b=a.state,c=a.name,d=b.rects.reference,e=b.rects.popper,f=b.modifiersData.preventOverflow,g=ad(b,{elementContext:"reference"}),h=ad(b,{altBoundary:!0}),i=af(g,d),j=af(h,e,f),k=ag(i),l=ag(j);b.modifiersData[c]={referenceClippingOffsets:i,popperEscapeOffsets:j,isReferenceHidden:k,hasPopperEscaped:l},b.attributes.popper=Object.assign({},b.attributes.popper,{"data-popper-reference-hidden":k,"data-popper-escaped":l})}}]},ak=void 0===(aj=(ai=ah).defaultModifiers)?[]:aj,al=ai.defaultOptions,am=void 0===al?M:al,function(a,b,c){void 0===c&&(c=am);var g={placement:"bottom",orderedModifiers:[],options:Object.assign({},M,am),modifiersData:{},elements:{reference:a,popper:b},attributes:{},styles:{}},h=[],i=!1,k={state:g,setOptions:function(c){var d,f,h,i,j="function"==typeof c?c(g.options):c;r(),g.options=Object.assign({},am,g.options,j),g.scrollParents={reference:e(a)?w(a):a.contextElement?w(a.contextElement):[],popper:w(b)};var m=(i=function(a){var b=new Map,c=new Set,d=[];function e(a){c.add(a.name),[].concat(a.requires||[],a.requiresIfExists||[]).forEach(function(a){if(!c.has(a)){var d=b.get(a);d&&e(d)}}),d.push(a)}return a.forEach(function(a){b.set(a.name,a)}),a.forEach(function(a){c.has(a.name)||e(a)}),d}(h=Object.keys(f=(d=[].concat(ak,g.options.modifiers)).reduce(function(a,b){var c=a[b.name];return a[b.name]=c?Object.assign({},c,b,{options:Object.assign({},c.options,b.options),data:Object.assign({},c.data,b.data)}):b,a},{})).map(function(a){return f[a]})),L.reduce(function(a,b){return a.concat(i.filter(function(a){return a.phase===b}))},[]));return g.orderedModifiers=m.filter(function(a){return a.enabled}),l(),k.update()},forceUpdate:function(){if(!i){var a,b,c,e,h,l,r,u,v,w,x,y,A,B,C,D=g.elements,E=D.reference,F=D.popper;if(N(E,F)){g.rects={reference:(c=E,e=z(F),h="fixed"===g.options.strategy,l=f(e),x=f(e)&&(v=j((u=(r=e).getBoundingClientRect()).width)/r.offsetWidth||1,w=j(u.height)/r.offsetHeight||1,1!==v||1!==w),y=p(e),A=m(c,x,h),B={scrollLeft:0,scrollTop:0},C={x:0,y:0},(l|| !l&&!h)&&(("body"!==o(e)||s(y))&&(B=(a=e,a!==d(a)&&f(a)?{scrollLeft:(b=a).scrollLeft,scrollTop:b.scrollTop}:n(a))),f(e)?(C=m(e,!0),C.x+=e.clientLeft,C.y+=e.clientTop):y&&(C.x=q(y))),{x:A.left+B.scrollLeft-C.x,y:A.top+B.scrollTop-C.y,width:A.width,height:A.height}),popper:t(F)},g.reset=!1,g.placement=g.options.placement,g.orderedModifiers.forEach(function(a){return g.modifiersData[a.name]=Object.assign({},a.data)});for(var G=0;G<g.orderedModifiers.length;G++){if(!0===g.reset){g.reset=!1,G=-1;continue}var H=g.orderedModifiers[G],I=H.fn,J=H.options,K=void 0===J?{}:J,L=H.name;"function"==typeof I&&(g=I({state:g,options:K,name:L,instance:k})||g)}}}},update:function(a){var b;return function(){return b||(b=new Promise(function(c){Promise.resolve().then(function(){b=void 0,c(a())})})),b}}(function(){return new Promise(function(a){k.forceUpdate(),a(g)})}),destroy:function(){r(),i=!0}};if(!N(a,b))return k;function l(){g.orderedModifiers.forEach(function(a){var b=a.name,c=a.options,d=a.effect;if("function"==typeof d){var e=d({state:g,name:b,instance:k,options:void 0===c?{}:c}),f=function(){};h.push(e||f)}})}function r(){h.forEach(function(a){return a()}),h=[]}return k.setOptions(c).then(function(a){!i&&c.onFirstUpdate&&c.onFirstUpdate(a)}),k})}}])
//# sourceMappingURL=6208-ea6d163907ddbf0a.js.map