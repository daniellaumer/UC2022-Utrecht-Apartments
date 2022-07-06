var A=Object.defineProperty,B=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var $=(a,e,n)=>e in a?A(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,M=(a,e)=>{for(var n in e||(e={}))U.call(e,n)&&$(a,n,e[n]);if(C)for(var n of C(e))W.call(e,n)&&$(a,n,e[n]);return a},k=(a,e)=>B(a,R(e));import{l as L,q6 as x,iV as g,q7 as O,q8 as T,q9 as H,aP as G,qa as j,qb as I,qc as J,l2 as K}from"./vendor.5fba8a95.js";function N(a){let{r:e,g:n,b:s,a:i}=a;return i<1&&(e=Math.round(i*e+255*(1-i)),n=Math.round(i*n+255*(1-i)),s=Math.round(i*s+255*(1-i))),new L({r:e,g:n,b:s})}function F(a){const{r:e,g:n,b:s}=N(a);return .2126*e+.7152*n+.0722*s}const V="picture-fill",Q="picture-marker",X="simple-fill",Y="simple-line",_="simple-marker",ee="text",ae="Aa",ne=x.size,z=x.maxSize,D=x.maxOutlineSize,se=x.lineWidth,E=225,le=document.createElement("canvas");function te(a,e){const n=le.getContext("2d"),s=[];return e&&(e.weight&&s.push(e.weight),e.size&&s.push(e.size+"px"),e.family&&s.push(e.family)),n.font=s.join(" "),n.measureText(a).width}const oe=7.2/2.54,ie=72/2.54;function ce(a){if(a.length===0)return 0;if(a.length>2){const e=K(1),n=parseFloat(a);switch(a.slice(-2)){case"px":return n;case"pt":return n*e;case"in":return 72*n*e;case"pc":return 12*n*e;case"mm":return n*oe*e;case"cm":return n*ie*e}}return parseFloat(a)}function Z(a){const e=a==null?void 0:a.size;return{width:e!=null&&typeof e=="object"&&"width"in e?g(e.width):null,height:e!=null&&typeof e=="object"&&"height"in e?g(e.height):null}}async function re(a,e){const n=e.fill,s=a.color;if((n==null?void 0:n.type)==="pattern"&&s&&a.type!==V){const i=await J(n.src,s.toCss(!0));n.src=i,e.fill=n}}function P(a,e){return a>e?"dark":"light"}function ue(a,e){var q;const n=typeof(e==null?void 0:e.size)=="number"?e==null?void 0:e.size:null,s=n!=null?g(n):null,i=(e==null?void 0:e.maxSize)!=null?g(e.maxSize):null,h=(e==null?void 0:e.rotation)!=null?e.rotation:"angle"in a?a.angle:null,f=O(a);let m=T(a);me(a,245)!=="dark"||(e==null?void 0:e.ignoreWhiteSymbols)||(m=k(M({width:.75},m),{color:"#bdc3c7"}));const u={shape:null,fill:f,stroke:m,offset:[0,0]};(m==null?void 0:m.width)&&(m.width=Math.min(m.width,D));const p=(m==null?void 0:m.width)||0;let y=(e==null?void 0:e.size)!=null&&((e==null?void 0:e.scale)==null||(e==null?void 0:e.scale)),l=0,t=0,w=!1;switch(a.type){case _:{const c=a.style,r=Math.min(s!=null?s:g(a.size),i||z);switch(l=r,t=r,c){case"circle":u.shape={type:"circle",cx:0,cy:0,r:.5*r},y||(l+=p,t+=p);break;case"cross":u.shape={type:"path",path:[{command:"M",values:[0,.5*t]},{command:"L",values:[l,.5*t]},{command:"M",values:[.5*l,0]},{command:"L",values:[.5*l,t]}]};break;case"diamond":u.shape={type:"path",path:[{command:"M",values:[0,.5*t]},{command:"L",values:[.5*l,0]},{command:"L",values:[l,.5*t]},{command:"L",values:[.5*l,t]},{command:"Z",values:[]}]},y||(l+=p,t+=p);break;case"square":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,0]},{command:"L",values:[l,t]},{command:"L",values:[0,t]},{command:"Z",values:[]}]},y||(l+=p,t+=p),h&&(w=!0);break;case"triangle":u.shape={type:"path",path:[{command:"M",values:[.5*l,0]},{command:"L",values:[l,t]},{command:"L",values:[0,t]},{command:"Z",values:[]}]},y||(l+=p,t+=p),h&&(w=!0);break;case"x":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,t]},{command:"M",values:[l,0]},{command:"L",values:[0,t]}]},h&&(w=!0);break;case"path":u.shape={type:"path",path:a.path||""},y||(l+=p,t+=p),h&&(w=!0),y=!0}break}case Y:{const{width:c,height:r}=Z(e),o=r!=null?r:Math.min(s!=null?s:p,i||D),d=c!=null?c:se;m.width=o,l=d,t=o;const v=((q=u==null?void 0:u.stroke)==null?void 0:q.cap)||"butt",b=v==="round";y=!0,u.stroke.cap=v==="butt"?"square":v,u.shape={type:"path",path:[{command:"M",values:[b?o/2:0,t/2]},{command:"L",values:[b?l-o/2:l,t/2]}]};break}case V:case X:{const c=typeof(e==null?void 0:e.symbolConfig)=="object"&&(e==null?void 0:e.symbolConfig.isSquareFill),{width:r,height:o}=Z(e);l=c&&r!=null?r:s!=null?s:ne,t=c&&o!=null?o:l,y||(l+=p,t+=p),y=!0,u.shape=c?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,0]},{command:"L",values:[l,t]},{command:"L",values:[0,t]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:H.fill[0];break}case Q:{let c=g(a.width),r=g(a.height);const o=s!=null?s:Math.max(c,r),d=c/r;c=d<=1?Math.ceil(o*d):o,r=d<=1?o:Math.ceil(o/d),l=Math.min(c,i||z),t=Math.min(r,i||z),u.shape={type:"image",x:-Math.round(l/2),y:-Math.round(t/2),width:l,height:t,src:a.url||""},h&&(w=!0);break}case ee:{const c=a,r=c.text||ae,o=c.font,d=Math.min(s!=null?s:g(o.size),i||z),v=te(r,{weight:o.weight,size:d,family:o.family}),b=/[\uE600-\uE6FF]/.test(r);l=b?d:v,t=d;let S=.25*ce((o?d:0).toString());b&&(S+=5),u.shape={type:"text",text:r,x:c.xoffset||0,y:c.yoffset||S,align:"middle",alignBaseline:c.verticalAlignment,decoration:o&&o.decoration,rotated:c.rotated,kerning:c.kerning},u.font=o&&{size:d,style:o.style,decoration:o.decoration,weight:o.weight,family:o.family};break}}return{shapeDescriptor:u,size:[l,t],renderOptions:{node:e==null?void 0:e.node,scale:y,opacity:e==null?void 0:e.opacity,rotation:h,useRotationSize:w,effectView:e==null?void 0:e.effectView}}}async function de(a,e){const{shapeDescriptor:n,size:s,renderOptions:i}=ue(a,e);if(!n.shape)throw new G("symbolPreview: renderPreviewHTML2D","symbol not supported.");await re(a,n);const h=[[n]];if(typeof(e==null?void 0:e.symbolConfig)=="object"&&(e==null?void 0:e.symbolConfig.applyColorModulation)){const f=.6*s[0];h.unshift([k(M({},n),{offset:[-f,0],fill:j(n.fill,-.3)})]),h.push([k(M({},n),{offset:[f,0],fill:j(n.fill,.3)})]),s[0]+=2*f,i.scale=!1}return I(h,s,i)}function me(a,e=E){const n=O(a),s=T(a),i=!n||"type"in n?null:new L(n),h=(s==null?void 0:s.color)?new L(s==null?void 0:s.color):null,f=i?P(F(i),e):null,m=h?P(F(h),e):null;return m?f?f===m?f:e>=E?"light":"dark":m:f}export{me as getContrastingBackgroundTheme,ue as getRenderSymbolParameters,de as previewSymbol2D};
