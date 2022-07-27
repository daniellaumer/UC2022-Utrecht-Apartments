var Pt=Object.defineProperty,bt=Object.defineProperties;var St=Object.getOwnPropertyDescriptors;var it=Object.getOwnPropertySymbols;var kt=Object.prototype.hasOwnProperty,Et=Object.prototype.propertyIsEnumerable;var st=(t,n,e)=>n in t?Pt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,J=(t,n)=>{for(var e in n||(n={}))kt.call(n,e)&&st(t,e,n[e]);if(it)for(var e of it(n))Et.call(n,e)&&st(t,e,n[e]);return t},X=(t,n)=>bt(t,St(n));import{km as V,gu as Nt,aA as Y,cz as O,C as N,r as S,dD as A,v as Gt,b2 as k,ba as Tt,aP as vt,kx as T,ky as G,kz as rt,kA as Ct,kB as _t,ch as zt,kC as at}from"./vendor.5fba8a95.js";var Q;function pt(t,n,e){return!Tt(t,n,e)}function W(t,n,e){const s=pt(t,n,e);if(s&&!V())throw new vt("rasterprojectionhelper-project","projection engine is not loaded");return s}(function(t){t[t.None=0]="None",t[t.North=1]="North",t[t.South=2]="South",t[t.Both=3]="Both"})(Q||(Q={}));const lt=(t,n,e,s=0)=>{if(e[0]===1)return[0,0];let r=1,o=-1,i=1,f=-1;for(let c=0;c<t.length;c+=2)isNaN(t[c])||(r=r>t[c]?t[c]:r,o=o>t[c]?o:t[c],i=i>t[c+1]?t[c+1]:i,f=f>t[c+1]?f:t[c+1]);const{cols:a,rows:l}=n,u=(o-r)/a/e[0],w=(f-i)/l/e[1],g=2*s;let m=0,x=!1,p=[0,0];for(let c=0;c<a-3;c++){for(let M=0;M<l-3;M++){const y=c*l*2+2*M,h=(t[y]+t[y+4]+t[y+4*l]+t[y+4*l+4])/4,d=(t[y+1]+t[y+5]+t[y+4*l+1]+t[y+4*l+5])/4,R=Math.abs((h-t[y+2*l+2])/u),P=Math.abs((d-t[y+2*l+3])/w);if(R+P>m&&(m=R+P,p=[R,P]),g&&m>g){x=!0;break}}if(x)break}return p},Ot={3395:20037508342789244e-9,3410:17334193943686873e-9,3857:20037508342788905e-9,3975:17367530445161372e-9,4087:20037508342789244e-9,4088:20015108787169147e-9,6933:17367530445161372e-9,32662:20037508342789244e-9,53001:2001508679602057e-8,53002:1000754339801029e-8,53003:2001508679602057e-8,53004:2001508679602057e-8,53016:14152803599503474e-9,53017:17333573624304302e-9,53034:2001508679602057e-8,53079:20015114352186374e-9,53080:20015114352186374e-9,54001:20037508342789244e-9,54002:10018754171394624e-9,54003:20037508342789244e-9,54004:20037508342789244e-9,54016:14168658027268292e-9,54017:1736753044516137e-8,54034:20037508342789244e-9,54079:20037508342789244e-9,54080:20037508342789244e-9,54100:20037508342789244e-9,54101:20037508342789244e-9},B=32,I=4,K=I,D=new Map,U=new Map;async function Jt(){if(V())return null;await Nt()}function Xt(t,n,e){return W(t.spatialReference,n)?e?at(n,t.spatialReference,t):at(t.spatialReference,n,t):null}function Kt(t,n,e,s=null){const r=t.spatialReference;if(r.equals(n))return t;W(r,n,s);const o=e.center,i=new Y({xmin:o.x-t.x/2,xmax:o.x+t.x/2,ymin:o.y-t.y/2,ymax:o.y+t.y/2,spatialReference:r}),f=O(i,n,s),a=v(n);let l;if(N(f)||S(a)&&f.width>=a){const u=A(r)/A(n);l={x:t.x*u,y:t.y*u}}else l={x:f.width,y:f.height};return l}function E(t,n=.01){return A(t)?n/A(t):0}function ct(t,n,e=null,s=!0){const r=t.spatialReference;if(r.equals(n))return t;W(r,n,e);const o=O(t,n,e);if(!s||!o)return o;const i=j(r,!0),f=j(n,!0),a=E(r);return a&&S(i)&&S(f)&&(o.x>0&&Math.abs(t.x-i[0])<a?o.x-=f[1]-f[0]:o.x<0&&Math.abs(t.x-i[1])<a&&(o.x+=f[1]-f[0])),o}function Wt(t){const{inSR:n,outSR:e,datumTransformation:s,preferPE:r}=t;if(n.equals(e)){const{points:o}=Z(t,null);return o}if(n.isWebMercator&&e.isWGS84||n.isWGS84&&e.isWebMercator)return At(t);if(W(n,e,s)&&r){if(n.isGeographic)return ft(t);const o=z(n);if(S(o))return ft(t)}return $t(t)}function $t(t){const{points:n}=Z(t,null),e=n.map(s=>new k(s[0],s[1],t.inSR));return O(e,t.outSR,t.datumTransformation).map(s=>s?[s.x,s.y]:[NaN,NaN])}function ft(t){const{inSR:n,outSR:e,datumTransformation:s}=t,r=z(n),{points:o,mask:i}=Z(t,r);if(!n.isGeographic){const a=n.wkid?T.coordsys(n.wkid):T.fromString(n.isGeographic?G.PE_TYPE_GEOGCS:G.PE_TYPE_PROJCS,n.wkt);rt.projToGeog(a,o.length,o)}if(S(s)&&s.steps.length&&s.steps.forEach(a=>{const l=a.wkid?T.geogtran(a.wkid):T.fromString(G.PE_TYPE_GEOGTRAN,a.wkt);Ct.geogToGeog(l,o.length,o,null,a.isInverse?G.PE_TRANSFORM_2_TO_1:G.PE_TRANSFORM_1_TO_2)}),!e.isGeographic){const a=z(e,!0),l=S(a)&&a.isEnvelope?[a.bbox[1],a.bbox[3]]:[-90,90];Lt(o,l);const u=e.wkid?T.coordsys(e.wkid):T.fromString(e.isGeographic?G.PE_TYPE_GEOGCS:G.PE_TYPE_PROJCS,e.wkt);rt.geogToProj(u,o.length,o)}let f=o;if(i&&o.length!==i.length){f=[];for(let a=0,l=0;a<i.length;a++)i[a]?f.push(o[l++]):f.push([NaN,NaN])}return f}function At(t){const{cols:n,rows:e,xres:s,yres:r,usePixelCenter:o,inSR:i,outSR:f}=t;let{xmin:a,ymax:l}=t;o&&(a+=s/2,l-=r/2);const u=[],w=[],g=Math.max(n,e);for(let x=0;x<g;x++){const p=a+s*Math.min(n,x),c=l-r*Math.min(e,x),M=O(new k({x:p,y:c,spatialReference:i}),f);x<=n&&u.push(M.x),x<=e&&w.push(M.y)}const m=[];for(let x=0;x<n;x++)for(let p=0;p<e;p++)m.push([u[x],w[p]]);return m}function z(t,n=!1){let e=t.wkid||t.wkt;if(!e||t.isGeographic)return null;if(e=String(e),D.has(e)){const i=D.get(e);return n?i==null?void 0:i.gcs:i==null?void 0:i.pcs}const s=t.wkid?T.coordsys(t.wkid):T.fromString(t.isGeographic?G.PE_TYPE_GEOGCS:G.PE_TYPE_PROJCS,t.wkt),r=ut(s,E(t,1e-4)),o=ut(s,0,!0);return D.set(e,{pcs:r,gcs:o}),n?o:r}function ut(t,n=0,e=!1){const s=_t.generate(t),r=e?t.horizonGcsGenerate():t.horizonPcsGenerate();if(!(r==null?void 0:r.length))return null;let o=!1,i=r.find(c=>c.getInclusive()===1&&c.getKind()===1);if(!i){if(i=r.find(c=>c.getInclusive()===1&&c.getKind()===0),!i)return null;o=!0}const f=e?0:(s.getNorthPoleLocation()===2?1:0)|(s.getSouthPoleLocation()===2?2:0),a=s.isPannableRectangle(),l=i.getCoord();if(o)return{isEnvelope:o,isPannable:a,vertices:l,coef:null,bbox:[l[0][0]-n,l[0][1]-n,l[1][0]+n,l[1][1]+n],poleLocation:f};let u=0;const w=[];let[g,m]=l[0],[x,p]=l[0];for(let c=0,M=l.length;c<M;c++){u++,u===M&&(u=0);const[y,h]=l[c],[d,R]=l[u];if(R===h)w.push([y,d,h,R,2]);else{const P=(d-y)/(R-h||1e-4),C=y-P*h;h<R?w.push([P,C,h,R,0]):w.push([P,C,R,h,1])}g=g<y?g:y,m=m<h?m:h,x=x>y?x:y,p=p>h?p:h}return{isEnvelope:!1,isPannable:a,vertices:l,coef:w,bbox:[g,m,x,p],poleLocation:f}}function Z(t,n){const e=[],{cols:s,rows:r,xres:o,yres:i,usePixelCenter:f}=t;let{xmin:a,ymax:l}=t;if(f&&(a+=o/2,l-=i/2),N(n)){for(let m=0;m<s;m++)for(let x=0;x<r;x++)e.push([a+o*m,l-i*x]);return{points:e}}const u=new Uint8Array(s*r);if(n.isEnvelope){const{bbox:[m,x,p,c]}=n;for(let M=0,y=0;M<s;M++){const h=a+o*M,d=n.isPannable||h>=m&&h<=p;for(let R=0;R<r;R++,y++){const P=l-i*R;d&&P>=x&&P<=c&&(e.push([h,P]),u[y]=1)}}return{points:e,mask:u}}const{coef:w}=n,g=[];for(let m=0;m<r;m++){const x=l-i*m,p=[],c=[];for(let y=0;y<w.length;y++){const[h,d,R,P,C]=w[y];if(x===R&&R===P)p.push(h),p.push(d),c.push(2),c.push(2);else if(x>=R&&x<=P){const L=h*x+d;p.push(L),c.push(C)}}let M=p;if(p.length>2){let y=c[0]===2?0:c[0],h=p[0];M=[];for(let d=1;d<c.length;d++)c[d]===2&&d!==c.length-1||(c[d]!==y&&(M.push(y===0?Math.min(h,p[d-1]):Math.max(h,p[d-1])),y=c[d],h=p[d]),d===c.length-1&&M.push(c[d]===0?Math.min(h,p[d]):Math.max(h,p[d])));M.sort((d,R)=>d-R)}else p[0]>p[1]&&(M=[p[1],p[0]]);g.push(M)}for(let m=0,x=0;m<s;m++){const p=a+o*m;for(let c=0;c<r;c++,x++){const M=l-i*c,y=g[c];if(y.length===2)p>=y[0]&&p<=y[1]&&(e.push([p,M]),u[x]=1);else if(y.length>2){let h=!1;for(let d=0;d<y.length;d+=2)if(p>=y[d]&&p<=y[d+1]){h=!0;break}h&&(e.push([p,M]),u[x]=1)}}}return{points:e,mask:u}}function Lt(t,n){const[e,s]=n;for(let r=0;r<t.length;r++){const o=t[r][1];(o<e||o>s)&&(t[r]=[NaN,NaN])}}function gt(t){const n=v(t[0].spatialReference);if(t.length<2||N(n))return t[0];let{xmin:e,xmax:s,ymin:r,ymax:o}=t[0];for(let i=1;i<t.length;i++){const f=t[i];s=f.xmax+n*i,r=Math.min(r,f.ymin),o=Math.max(o,f.ymax)}return new Y({xmin:e,xmax:s,ymin:r,ymax:o,spatialReference:t[0].spatialReference})}function Bt(t,n,e=null,s=!0){const r=t.spatialReference;if(r.equals(n))return t;const o=jt(t),i=v(r,!0),f=v(n);if(o===0||N(i)||N(f)){const l=xt(t,n,e,s);if(N(i)&&S(f)&&Math.abs(l.width-f)<E(n)&&V()){const u=z(r);if(S(u)&&u.poleLocation===Q.None&&t.width<(u.bbox[2]-u.bbox[0])/2)return It(t,n)||l}return l}const a=t.clone().normalize();if(a.length===1&&t.xmax<i&&t.xmax-i/2>E(r)){const{xmin:l,xmax:u}=t;for(let w=0;w<=o;w++){const g=w===0?l:-i/2,m=w===o?u-i*w:i/2;a[w]=new Y({xmin:g,xmax:m,ymin:t.ymin,ymax:t.ymax,spatialReference:r})}}return gt(a.map(l=>xt(l,n,e,s)).filter(l=>!!l))}function It(t,n){const e=v(n);if(N(e))return null;let{xmin:s,ymin:r,xmax:o,ymax:i}=t;const f=t.spatialReference,a=new Gt({spatialReference:f,rings:[[[s,r],[o,r],[o,i],[s,i],[s,r]]]}),l=O(a,n);if(l.rings.length!==2||!l.rings[0].length||!l.rings[1].length)return null;const{rings:u}=l,w=E(f),g=new Y({spatialReference:n});for(let m=0;m<2;m++){s=o=u[m][0][0],r=i=u[m][0][1];for(let x=0;x<u[m].length;x++)s=s>u[m][x][0]?u[m][x][0]:s,o=o<u[m][x][0]?u[m][x][0]:o,r=r>u[m][x][1]?u[m][x][1]:r,i=i<u[m][x][1]?u[m][x][1]:i;if(m===0)g.ymin=r,g.ymax=i,g.xmin=s,g.xmax=o;else if(g.ymin=Math.min(g.ymin,r),g.ymax=Math.max(g.ymax,i),Math.abs(o-e/2)<w)g.xmin=s,g.xmax=g.xmax+e;else{if(!(Math.abs(s+e/2)<w))return null;g.xmax=o+e}}return g}function xt(t,n,e=null,s=!0,r=!0){const o=t.spatialReference;if(o.equals(n))return t;W(o,n,e);const i=O(t,n,e);if(r&&n.isWebMercator&&i&&(i.ymax=Math.min(20037508342787e-6,i.ymax),i.ymin=Math.max(-20037508342787e-6,i.ymin),i.ymin>=i.ymax))return null;if(!s||!i)return i;const f=j(o,!0),a=j(n,!0);if(N(f)||N(a))return i;const l=E(o,.001),u=E(o,500),w=E(n,.001);if(Math.abs(i.xmin-a[0])<w&&Math.abs(i.xmax-a[1])<w){const g=Math.abs(t.xmin-f[0]),m=Math.abs(f[1]-t.xmax);if(g<l&&m>u){i.xmin=a[0];const x=[];x.push(new k(t.xmax,t.ymin,o)),x.push(new k(t.xmax,(t.ymin+t.ymax)/2,o)),x.push(new k(t.xmax,t.ymax,o));const p=x.map(c=>ct(c,n,e)).filter(c=>!isNaN(c==null?void 0:c.x)).map(c=>c.x);i.xmax=Math.max.apply(null,p)}if(m<l&&g>u){i.xmax=a[1];const x=[];x.push(new k(t.xmin,t.ymin,o)),x.push(new k(t.xmin,(t.ymin+t.ymax)/2,o)),x.push(new k(t.xmin,t.ymax,o));const p=x.map(c=>ct(c,n,e)).filter(c=>!isNaN(c==null?void 0:c.x)).map(c=>c.x);i.xmin=Math.min.apply(null,p)}}else{const g=E(n,.001);Math.abs(i.xmin-a[0])<g&&(i.xmin=a[0]),Math.abs(i.xmax-a[1])<g&&(i.xmax=a[1])}return i}function v(t,n=!1){const e=n?20037508342787e-6:20037508342788905e-9;return t.isWebMercator?2*e:t.wkid&&t.isGeographic?360:2*Ot[t.wkid]||null}function j(t,n=!1){if(t.isGeographic)return[-180,180];const e=v(t,n);return S(e)?[-e/2,e/2]:null}function mt(t,n,e,s){let r=(t-n)/e;return r-Math.floor(r)!=0?r=Math.floor(r):s&&(r-=1),r}function jt(t,n=!1){const e=v(t.spatialReference);if(N(e))return 0;const s=n?0:-(e/2),r=E(t.spatialReference),o=!n&&Math.abs(t.xmax-e/2)<r?e/2:t.xmax,i=!n&&Math.abs(t.xmin+e/2)<r?-e/2:t.xmin;return mt(o,s,e,!0)-mt(i,s,e,!1)}function Dt(t){const n=t.storageInfo.origin.x,e=v(t.spatialReference,!0);if(N(e))return{originX:n,halfWorldWidth:null,pyramidsInfo:null};const s=e/2,{nativePixelSize:r,storageInfo:o,extent:i}=t,{maximumPyramidLevel:f,blockWidth:a,pyramidScalingFactor:l}=o;let u=r.x;const w=[],g=S(t.transform)&&t.transform.type==="gcs-shift",m=n+(g?0:s),x=g?e-n:s-n;for(let p=0;p<=f;p++){const c=(i.xmax-n)/u/a,M=c-Math.floor(c)==0?c:Math.ceil(c),y=x/u/a,h=y-Math.floor(y)==0?y:Math.ceil(y),d=Math.floor(m/u/a),R=Math.round(m/u)%a,P=(a-Math.round(x/u)%a)%a;w.push({resolutionX:u,blockWidth:a,datsetColumnCount:M,worldColumnCountFromOrigin:h,leftMargin:R,rightPadding:P,originColumnOffset:d}),u*=l}return{originX:n,halfWorldWidth:s,pyramidsInfo:w,hasGCSSShiftTransform:g}}function Yt(t){if(!t||t.isGeographic)return t;const n=String(t.wkid||t.wkt);let e;return U.has(n)?e=U.get(n):(e=(t.wkid?T.coordsys(t.wkid):T.fromString(G.PE_TYPE_PROJCS,t.wkt)).getGeogcs().getCode(),U.set(n,e)),new zt({wkid:e})}function Ut(t){const n=t.isAdaptive&&t.spacing==null;let e=t.spacing||[B,B],s=H(t),r={cols:s.size[0]+1,rows:s.size[1]+1};const o=s.outofBoundPointCount>0&&s.outofBoundPointCount<s.offsets.length/2;let i=s.outofBoundPointCount===s.offsets.length/2||n&&o?[0,0]:lt(s.offsets,r,e,K);const f=(i[0]+i[1])/2,a=t.projectedExtent.spatialReference,l=t.srcBufferExtent.spatialReference;if(n&&(o||f>K)&&(pt(a,l,t.datumTransformation)&&(a.isGeographic||S(z(a))),e=[I,I],s=H(X(J({},t),{spacing:e})),r={cols:s.size[0]+1,rows:s.size[1]+1},i=lt(s.offsets,r,e,K)),s.error=i,e[0]>1&&(s.coefficients=ht(s.offsets,r,o)),t.includeGCSGrid&&!a.isGeographic&&!a.isWebMercator)if(l.isGeographic)s.gcsGrid={offsets:s.offsets,coefficients:s.coefficients,spacing:e};else{const u=z(a);if(S(u)&&!u.isEnvelope){const w=Yt(a),g=Bt(t.projectedExtent,w),{offsets:m}=H(X(J({},t),{srcBufferExtent:g,spacing:e})),x=ht(m,r,o);s.gcsGrid={offsets:m,coefficients:x,spacing:e}}}return s}function H(t){const{projectedExtent:n,srcBufferExtent:e,pixelSize:s,datumTransformation:r,rasterTransform:o}=t,i=n.spatialReference,f=e.spatialReference,a=W(i,f),{xmin:l,ymin:u,xmax:w,ymax:g}=n,m=v(f),x=S(m)&&(t.hasWrapAround||(o==null?void 0:o.type)==="gcs-shift"),p=t.spacing||[B,B],c=p[0]*s.x,M=p[1]*s.y,y=p[0]===1,h=Math.ceil((w-l)/c-.1/p[0])+(y?0:1),d=Math.ceil((g-u)/M-.1/p[1])+(y?0:1),R=Wt({cols:h,rows:d,xmin:l,ymax:g,xres:c,yres:M,inSR:i,outSR:f,datumTransformation:r,preferPE:p[0]<=I,usePixelCenter:y}),P=[];let C,L=0;const tt=y?-1:NaN,{xmin:nt,xmax:F,ymax:yt,width:dt,height:wt}=e,Mt=E(f,500),Rt=S(m)&&nt>0&&F>m/2;let et=!1;if(a){const _=z(i);et=S(_)&&_.poleLocation>0}for(let _=0;_<h;_++){const q=[];for(let $=0;$<d;$++){let b=R[_*d+$];if(x&&b[0]>F&&b[0]>m/2-Mt?b[0]-=m:x&&_===0&&b[0]<0&&Rt&&!o&&(b[0]+=m),!b||isNaN(b[0])||isNaN(b[1]))P.push(tt),P.push(tt),q.push(null),L++;else{if(o){const ot=o.inverseTransform(new k({x:b[0],y:b[1],spatialReference:f}));b=[ot.x,ot.y]}q.push(b),_>0&&x&&C[$]&&b[0]<C[$][0]&&(b[0]+=m,et&&b[0]>F&&b[0]>m&&(b[0]-=m)),P.push((b[0]-nt)/dt),P.push((yt-b[1])/wt)}}C=q}return{offsets:P,error:null,coefficients:null,outofBoundPointCount:L,spacing:p,size:y?[h,d]:[h-1,d-1]}}function ht(t,n,e){const{cols:s,rows:r}=n,o=new Float32Array((s-1)*(r-1)*2*6),i=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),f=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let a=0;a<s-1;a++){for(let l=0;l<r-1;l++){let u=a*r*2+2*l;const w=t[u],g=t[u+1],m=t[u+2],x=t[u+3];u+=2*r;const p=t[u],c=t[u+1],M=t[u+2],y=t[u+3];let h=0,d=12*(l*(s-1)+a);for(let R=0;R<3;R++)o[d++]=i[h++]*w+i[h++]*m+i[h++]*M;h=0;for(let R=0;R<3;R++)o[d++]=i[h++]*g+i[h++]*x+i[h++]*y;h=0;for(let R=0;R<3;R++)o[d++]=f[h++]*w+f[h++]*p+f[h++]*M;h=0;for(let R=0;R<3;R++)o[d++]=f[h++]*g+f[h++]*c+f[h++]*y}if(e)for(let l=0;l<o.length;l++)isNaN(o[l])&&(o[l]=-1)}return o}function Ht(t){const n=t.clone().normalize();return n.length===1?n[0]:gt(n)}function Qt(t,n,e){const{storageInfo:s,pixelSize:r}=n;let o,i=!1;const{pyramidResolutions:f}=s;if(S(f)&&f.length){const g=(t.x+t.y)/2,m=f[f.length-1],x=(m.x+m.y)/2,p=(r.x+r.y)/2;if(g<=p)o=0;else if(g>=x)o=f.length,i=g/x>8;else{let M,y=p;for(let h=1;h<=f.length;h++){if(M=(f[h-1].x+f[h-1].y)/2,g<=M){g===M?o=h:e==="down"?(o=h-1,i=g/y>8):o=e==="up"||g-y>M-g||g/y>2?h:h-1;break}y=M}}const c=o===0?r:f[o-1];return i&&Math.min(c.x,c.y)*A(n.spatialReference)>19567&&(i=!1),{pyramidLevel:o,pyramidResolution:new k({x:c.x,y:c.y,spatialReference:n.spatialReference}),excessiveReading:i}}const a=Math.log(t.x/r.x)/Math.LN2,l=Math.log(t.y/r.y)/Math.LN2,u=n.storageInfo.maximumPyramidLevel||0;o=e==="down"?Math.floor(Math.min(a,l)):e==="up"?Math.ceil(Math.max(a,l)):Math.round((a+l)/2),o<0?o=0:o>u&&(i=o>u+3,o=u);const w=2**o;return{pyramidLevel:o,pyramidResolution:new k({x:w*n.nativePixelSize.x,y:w*n.nativePixelSize.y,spatialReference:n.spatialReference}),excessiveReading:i}}export{jt as D,Bt as F,Dt as H,pt as M,Xt as T,Ut as V,v as X,ct as _,Ht as e,Jt as k,Qt as t,Kt as v};