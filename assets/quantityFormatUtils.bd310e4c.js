import{lB as V,hI as X,lC as Y,lD as Z,aP as F,lv as tt,lE as v,ch as et,a_ as at,b0 as nt,b1 as st,lF as it,lG as rt,lH as G,dD as S,lI as ot,lJ as ct,lK as lt,lL as ut,lM as ht}from"./vendor.5fba8a95.js";import{b as ft}from"./Segment.eecc2c2e.js";const zt={readOnly:!0,get(){return V(this.view)}};var x;(function(t){t[t.Auto=0]="Auto",t[t.Euclidean=1]="Euclidean",t[t.Geodesic=2]="Geodesic"})(x||(x={}));function I(t){if(!t)return null;if(X(t)&&t.wkid){const e=Y[t.wkid];if(e)return e}if(t.wkt){const e=Mt(t.wkt);if(e)return e}return null}function Mt(t){const e=Z.exec(t);if(!e||e.length!==2)return null;const a=e[1].split(",");if(!a||a.length<3)return null;const n=parseFloat(a[1]),s=parseFloat(a[2]);return isNaN(n)||isNaN(s)?null:{a:n,f:s===0?0:1/s}}function pt(t){const e=I(t||et.WGS84);if(dt(e))return e;const a=e.a*(1-e.f);return Object.assign(e,{b:a,eSq:1-(a/e.a)**2,radius:(2*e.a+a)/3,densificationRatio:1e4/((2*e.a+a)/3)})}function dt(t){return"b"in t&&"eSq"in t&&"radius"in t}function mt(t){return I(t)!==null}function Rt(t,e="meters"){if(!t)throw new F("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(t.some(n=>!mt(n.spatialReference)))throw new F("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const a=[];for(let n=0;n<t.length;n++){const s=t[n],{spatialReference:m}=s,g=s.type==="polyline"?s.paths:s.rings;let r=0;for(let b=0;b<g.length;b++){const o=g[b];let f=0;for(let M=1;M<o.length;M++){const $=o[M-1][0],z=o[M][0],R=o[M-1][1],l=o[M][1];if(R!==l||$!==z){const c={distance:null};vt(c,[$,R],[z,l],m),f+=c.distance}}r+=f}r=tt(r,"meters",e),a.push(r)}return a}function vt(t,e,a,n){const s=e[0]*v,m=e[1]*v,g=a[0]*v,r=a[1]*v,{a:b,b:o,f,radius:M}=pt(n),$=g-s,z=Math.atan((1-f)*Math.tan(m)),R=Math.atan((1-f)*Math.tan(r)),l=Math.sin(z),c=Math.cos(z),_=Math.sin(R),u=Math.cos(R);let E,w,p,i,N,D,P,y,A,U,j=1e3,h=$;do{if(P=Math.sin(h),y=Math.cos(h),p=Math.sqrt(u*P*(u*P)+(c*_-l*u*y)*(c*_-l*u*y)),p===0)return t.distance=0,t.azimuth=void 0,t.reverseAzimuth=void 0,t;N=l*_+c*u*y,D=Math.atan2(p,N),A=c*u*P/p,w=1-A*A,i=N-2*l*_/w,isNaN(i)&&(i=0),U=f/16*w*(4+f*(4-3*w)),E=h,h=$+(1-U)*f*A*(D+U*p*(i+U*N*(2*i*i-1)))}while(Math.abs(h-E)>1e-12&&--j>0);if(j===0){const J=M,K=Math.acos(Math.sin(m)*Math.sin(r)+Math.cos(m)*Math.cos(r)*Math.cos(g-s))*J,k=g-s,L=Math.sin(k)*Math.cos(r),W=Math.cos(m)*Math.sin(r)-Math.sin(m)*Math.cos(r)*Math.cos(k),Q=Math.atan2(L,W);return t.azimuth=Q/v,t.distance=K,t.reverseAzimuth=void 0,t}const d=w*(b*b-o*o)/(o*o),q=d/1024*(256+d*(d*(74-47*d)-128)),T=o*(1+d/16384*(4096+d*(d*(320-175*d)-768)))*(D-q*p*(i+q/4*(N*(2*i*i-1)-q/6*i*(4*p*p-3)*(4*i*i-3)))),B=Math.atan2(u*Math.sin(h),c*_-l*u*Math.cos(h)),H=Math.atan2(c*Math.sin(h),c*_*Math.cos(h)-l*u);return t.azimuth=B/v,t.distance=T,t.reverseAzimuth=H/v,t}function wt(t,e){if(at(e,0,0,0),t.length>0){for(let a=0;a<t.length;++a)nt(e,e,t[a]);st(e,e,1/t.length)}}function Nt(t,e,a,n){n.projectToRenderScreen(t,C),n.projectToRenderScreen(e,O),it(a,bt,gt),rt(a,a)}const C=G(),gt=C,O=G(),bt=O;class Pt{constructor(e=null){this.spatialReference=e}get spatialReference(){return this._spatialReference}set spatialReference(e){e!==this._spatialReference&&(this._spatialReference=e,this._updateNormalizationFactors())}normalizeDistance(e){return e*this._metersPerDistanceUnit}normalizeElevation(e){return e*this._metersPerElevationUnit}normalizeArea(e){return e*this._squareMetersPerAreaUnit}_updateNormalizationFactors(){this._metersPerDistanceUnit=S(this._spatialReference,1),this._metersPerElevationUnit=S(this._spatialReference,1),this._squareMetersPerAreaUnit=this._metersPerDistanceUnit*this._metersPerDistanceUnit}}function yt(t,e,a,n=2,s="abbr"){return ot(t,ft(e,a).value,a,n,s)}function At(t,e,a=2,n="abbr"){return ut(t,e.value,e.unit,a,n)}function Ut(t,e,a=2,n="abbr"){return ht(t,e.value,e.unit,a,n)}function Dt(t,e,a=2,n="abbr"){return ct(t,e.value,e.unit,a,n)}function qt(t,e,a=2,n="abbr"){return lt(t,e.value,e.unit,a,n)}export{mt as M,Dt as a,At as b,wt as c,x as e,yt as g,Nt as i,qt as j,zt as r,Pt as t,Ut as w,Rt as y,vt as z};