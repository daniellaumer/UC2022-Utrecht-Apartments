import{q6 as C,qd as S,qe as x,qb as D,l2 as I}from"./vendor.5fba8a95.js";import{CIMSymbolRasterizer as q}from"./CIMSymbolRasterizer.b952477c.js";import"./cimAnalyzer.9e3ce2c9.js";import"./CIMSymbolHelper.703de053.js";import"./BidiEngine.4cfb7343.js";import"./enums.ba1e21c6.js";import"./number.08b65821.js";const v=new q(null,!0),V=C.maxSize;async function F(t,e={}){const{size:m,maxSize:y,node:h,opacity:f}=e,g=e.cimOptions||e,{feature:w,fieldMap:b,geometryType:M,style:z}=g,u=S(t),d=typeof m=="number"?m:null,i=Math.min(d!=null?d:u,y!=null?y:I(V));i!==u&&(t=t.clone(),x(t,i,{preserveOutlineWidth:!0}));let s=3;t&&t.data&&t.data.symbol&&t.data.symbol.type!=="CIMPointSymbol"&&(s=1);const r=await v.rasterizeCIMSymbolAsync(t,w,b,M,{scaleFactor:s,style:z}),l=document.createElement("canvas");l.width=r.imageData.width,l.height=r.imageData.height,l.getContext("2d").putImageData(r.imageData,0,0);let o=l.width/s,n=l.height/s;if(m!=null&&((e==null?void 0:e.scale)==null||(e==null?void 0:e.scale))){const a=o/n;o=a<=1?Math.ceil(i*a):i,n=a<=1?i:Math.ceil(i/a)}const c=new Image(o,n);c.src=l.toDataURL(),f!=null&&(c.style.opacity=`${f}`);let p=c;if(e.effectView!=null){const a={shape:{type:"image",x:0,y:0,width:o,height:n,src:c.src},fill:null,stroke:null,offset:[0,0]};p=D([[a]],[o,n],{effectView:e.effectView})}return h&&h.appendChild(p),p}export{F as previewCIMSymbol};