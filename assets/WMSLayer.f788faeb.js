var Re=Object.defineProperty,Ue=Object.defineProperties;var Fe=Object.getOwnPropertyDescriptors;var re=Object.getOwnPropertySymbols;var $e=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable;var ne=(e,t,r)=>t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,E=(e,t)=>{for(var r in t||(t={}))$e.call(t,r)&&ne(e,r,t[r]);if(re)for(var r of re(t))Le.call(t,r)&&ne(e,r,t[r]);return e},se=(e,t)=>Ue(e,Fe(t));import{E as Ae,fe as Pe,u as Me,aA as F,sd as _e,Z as Q,k as a,n as l,cM as O,cV as je,o as ge,C as qe,aP as Te,ch as R,c6 as Ce,cb as Ve,cP as Be,ri as De,rK as We,rq as ke,rj as Ge,cD as He,cE as Xe,cF as Je,V as Qe,kh as Ye,Q as ze,U as Ke,r as W,cI as Ze,jf as ie,bH as ae,kt as et,B as tt,q as rt,sM as nt,hv as st,on as it,os as oe,bO as at,jl as k,rD as ot,ff as lt,sN as ut,cL as pt}from"./vendor.5fba8a95.js";import{o as X}from"./crsUtils.a0bfa377.js";import{l as le}from"./ExportWMSImageParameters.8b858ce8.js";var q;let dt=0,h=q=class extends Ae(Pe){constructor(e){super(e),this._sublayersHandles=new Me,this.dimensions=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.legendUrl=null,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.popupEnabled=!1,this.queryable=!1,this.spatialReferences=null}get description(){return this._get("description")}set description(e){this._set("description",e)}get fullExtent(){return this._get("fullExtent")}set fullExtent(e){this._set("fullExtent",e)}readExtent(e,t){return(e=t.extent)?F.fromJSON(e):null}get id(){const e=this._get("id");return e==null?dt++:e}set id(e){this._set("id",e)}readLegendUrl(e,t){return t?t.legendUrl||t.legendURL:null}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get name(){return this._get("name")}set name(e){this._set("name",e)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach(r=>{r.layer=null}),this._sublayersHandles.removeAll(),this._sublayersHandles=null),e&&(e.forEach(r=>{r.parent=this,r.layer=this.layer}),this._sublayersHandles.add([e.on("after-add",({item:r})=>{r.parent=this,r.layer=this.layer}),e.on("after-remove",({item:r})=>{r.parent=null,r.layer=null})])),this._set("sublayers",e)}castSublayers(e){return _e(Q.ofType(q),e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get visible(){return this._get("visible")}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new q;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents.map(t=>t.clone())),this.hasOwnProperty("featureInfoFormat")&&(e.featureInfoFormat=this.featureInfoFormat),this.hasOwnProperty("featureInfoUrl")&&(e.featureInfoUrl=this.featureInfoUrl),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map(t=>t.clone())),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences.map(t=>t)),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};a([l()],h.prototype,"description",null),a([l({readOnly:!0})],h.prototype,"dimensions",void 0),a([l({value:null})],h.prototype,"fullExtent",null),a([O("fullExtent",["extent"])],h.prototype,"readExtent",null),a([l()],h.prototype,"fullExtents",void 0),a([l()],h.prototype,"featureInfoFormat",void 0),a([l()],h.prototype,"featureInfoUrl",void 0),a([l({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],h.prototype,"id",null),a([l({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],h.prototype,"legendUrl",void 0),a([O(["web-document"],"legendUrl")],h.prototype,"readLegendUrl",null),a([l({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],h.prototype,"legendEnabled",void 0),a([l({value:null})],h.prototype,"layer",null),a([l()],h.prototype,"maxScale",void 0),a([l()],h.prototype,"minScale",void 0),a([l({readOnly:!0})],h.prototype,"effectiveScaleRange",null),a([l({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],h.prototype,"name",null),a([l()],h.prototype,"parent",void 0),a([l({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],h.prototype,"popupEnabled",void 0),a([l({type:Boolean,json:{write:{ignoreOrigin:!0}}})],h.prototype,"queryable",void 0),a([l()],h.prototype,"sublayers",null),a([je("sublayers")],h.prototype,"castSublayers",null),a([l({type:[Number],json:{read:{source:"spatialReferences"}}})],h.prototype,"spatialReferences",void 0),a([l({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],h.prototype,"title",null),a([l({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],h.prototype,"visible",null),h=q=a([ge("esri.layers.support.WMSSublayer")],h);const J=h,j={84:4326,83:4269,27:4267};function ct(e){if(!e)return null;const t={idCounter:-1};typeof e=="string"&&(e=new DOMParser().parseFromString(e,"text/xml"));const r=e.documentElement;if(r.nodeName==="ServiceExceptionReport"){const f=Array.prototype.slice.call(r.childNodes).map(v=>v.textContent).join(`\r
`);throw new Te("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",f)}const n=x("Capability",r),s=x("Service",r),o=x("Request",n);if(!n||!s||!o)return null;const i=x("Layer",n);if(!i)return null;const y=r.nodeName==="WMS_Capabilities"||r.nodeName==="WMT_MS_Capabilities"?r.getAttribute("version"):"1.3.0",u=S("Title",s,"")||S("Name",s,""),p=S("AccessConstraints",s,""),m=/^none$/i.test(p)?"":p,c=S("Abstract",s,""),b=parseInt(S("MaxWidth",s,"5000"),10),w=parseInt(S("MaxHeight",s,"5000"),10),N=pe(o,"GetMap"),$=ue(o,"GetMap"),g=P(i,y,t);let Y,V=0;if(Array.prototype.slice.call(n.childNodes).forEach(f=>{f.nodeName==="Layer"&&(V===0?Y=f:(V===1&&g.name&&(g.name="",g.sublayers.push(P(Y,y,t))),g.sublayers.push(P(f,y,t))),V++)}),!g)return null;let I,M;const Ee=g.fullExtents;if(I=g.sublayers,I||(I=[]),I.length===0&&I.push(g),M=g.extent,!M){const f=new F(I[0].extent);g.extent=f.toJSON(),M=g.extent}const Se=g.spatialReferences.length>0?g.spatialReferences:be(g),z=ue(o,"GetFeatureInfo");let _;if(z){const f=pe(o,"GetFeatureInfo");f.includes("text/html")?_="text/html":f.includes("text/plain")&&(_="text/plain")}if(!_){const f=v=>{v&&(v.queryable=!1,v.sublayers&&v.sublayers.forEach(B=>{f(B)}))};f(g)}const K=xe(I),Ne=g.minScale||0,Ie=g.maxScale||0,Z=g.dimensions,Oe=K.reduce((f,v)=>f.concat(v.dimensions),[]),ee=Z.concat(Oe).filter(ve);let te=null;if(ee.length>0){let f=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY;ee.forEach(B=>{const{extent:D}=B;ht(D)?D.forEach(L=>{f=Math.min(f,L.getTime()),v=Math.max(v,L.getTime())}):D.forEach(L=>{f=Math.min(f,L.min.getTime()),v=Math.max(v,L.max.getTime())})}),te={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[f,v]}}return{copyright:m,description:c,dimensions:Z,extent:M,fullExtents:Ee,featureInfoFormat:_,featureInfoUrl:z,mapUrl:$,maxWidth:b,maxHeight:w,maxScale:Ie,minScale:Ne,layers:K,spatialReferences:Se,supportedImageFormatTypes:N,timeInfo:te,title:u,version:y}}function mt(e){return e.length?e.filter(t=>t.popupEnabled&&t.name&&t.queryable).map(t=>t.name).join(","):""}function be(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const r=be(t);if(r.length>0)return r}return[]}function xe(e){let t=[];return e.forEach(r=>{t.push(r),r.sublayers&&r.sublayers.length&&(t=t.concat(xe(r.sublayers)),delete r.sublayers)}),t}function T(e,t,r){var n;return(n=t.getAttribute(e))!=null?n:r}function yt(e,t,r,n){const s=x(e,r);return s?T(t,s,n):n}function x(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(we(n)&&n.nodeName===e)return n}return null}function C(e,t){const r=[];for(let n=0;n<t.childNodes.length;n++){const s=t.childNodes[n];we(s)&&s.nodeName===e&&r.push(s)}return r}function S(e,t,r){const n=x(e,t);return n?n.textContent:r}function A(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),o=parseFloat(e.getAttribute("maxx")),i=parseFloat(e.getAttribute("maxy"));let y,u,p,m;r?(y=isNaN(s)?-Number.MAX_VALUE:s,u=isNaN(n)?-Number.MAX_VALUE:n,p=isNaN(i)?Number.MAX_VALUE:i,m=isNaN(o)?Number.MAX_VALUE:o):(y=isNaN(n)?-Number.MAX_VALUE:n,u=isNaN(s)?-Number.MAX_VALUE:s,p=isNaN(o)?Number.MAX_VALUE:o,m=isNaN(i)?Number.MAX_VALUE:i);const c=new R({wkid:t});return new F({xmin:y,ymin:u,xmax:p,ymax:m,spatialReference:c})}function ue(e,t){const r=x(t,e);if(r){const n=x("DCPType",r);if(n){const s=x("HTTP",n);if(s){const o=x("Get",s);if(o){let i=yt("OnlineResource","xlink:href",o,null);if(i)return i.indexOf("&")===i.length-1&&(i=i.substring(0,i.length-1)),gt(i,["service","request"])}}}}return null}function pe(e,t){const r=C("Operation",e);if(r.length===0)return C("Format",x(t,e)).map(s=>s.textContent);const n=[];return r.forEach(s=>{s.getAttribute("name")===t&&C("Format",s).forEach(o=>{n.push(o.textContent)})}),n}function de(e,t,r){const n=x(t,e);if(!n)return r;const{textContent:s}=n;if(s==null||s==="")return r;const o=Number(s);return isNaN(o)?r:o}function P(e,t,r){if(!e)return null;const n={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:e.getAttribute("queryable")==="1",spatialReferences:[],sublayers:null},s=x("LatLonBoundingBox",e),o=x("EX_GeographicBoundingBox",e);let i=null;s&&(i=A(s,4326)),o&&(i=new F(0,0,0,0,new R({wkid:4326})),i.xmin=parseFloat(S("westBoundLongitude",o,"0")),i.ymin=parseFloat(S("southBoundLatitude",o,"0")),i.xmax=parseFloat(S("eastBoundLongitude",o,"0")),i.ymax=parseFloat(S("northBoundLatitude",o,"0"))),s||o||(i=new F(-180,-90,180,90,new R({wkid:4326}))),n.minScale=de(e,"MaxScaleDenominator",0),n.maxScale=de(e,"MinScaleDenominator",0);const y=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(u=>{if(u.nodeName==="Name")n.name=u.textContent||"";else if(u.nodeName==="Title")n.title=u.textContent||"";else if(u.nodeName==="Abstract")n.description=u.textContent||"";else if(u.nodeName==="BoundingBox"){const p=u.getAttribute(y);if(p&&p.indexOf("EPSG:")===0){const c=parseInt(p.substring(5),10);c===0||isNaN(c)||i||(i=t==="1.3.0"?A(u,c,X(c)):A(u,c))}const m=p&&p.indexOf(":");if(m&&m>-1){let c=parseInt(p.substring(m+1,p.length),10);c===0||isNaN(c)||(c=j[c]?j[c]:c);const b=t==="1.3.0"?A(u,c,X(c)):A(u,c);n.fullExtents.push(b)}}else if(u.nodeName===y)u.textContent.split(" ").forEach(p=>{const m=p.includes(":")?parseInt(p.split(":")[1],10):parseInt(p,10);if(m!==0&&!isNaN(m)){const c=j[m]?j[m]:m;n.spatialReferences.includes(c)||n.spatialReferences.push(c)}});else if(u.nodeName!=="Style"||n.legendURL){if(u.nodeName==="Layer"){const p=P(u,t,r);p&&(p.parentLayerId=n.id,n.sublayers||(n.sublayers=[]),n.sublayers.push(p))}}else{const p=x("LegendURL",u);if(p){const m=x("OnlineResource",p);m&&(n.legendURL=m.getAttribute("xlink:href"))}}}),n.extent=i==null?void 0:i.toJSON(),n.dimensions=C("Dimension",e).filter(u=>u.getAttribute("name")&&u.getAttribute("units")&&u.textContent).map(u=>{const p=u.getAttribute("name"),m=u.getAttribute("units"),c=u.textContent,b=u.getAttribute("unitSymbol"),w=u.getAttribute("default"),N=T("default",u,"0")!=="0",$=T("nearestValue",u,"0")!=="0",g=T("current",u,"0")!=="0";return ve({name:p,units:m})?{name:"time",units:"ISO8601",extent:ye(c),default:ye(w),multipleValues:N,nearestValue:$,current:g}:ft({name:p,units:m})?{name:"elevation",units:m,extent:ce(c),unitSymbol:b,default:ce(w),multipleValues:N,nearestValue:$}:{name:p,units:m,extent:me(c),unitSymbol:b,default:me(w),multipleValues:N,nearestValue:$}}),n}function ht(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}function we(e){return e.nodeType===Node.ELEMENT_NODE}function ft(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function ve(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function gt(e,t){const r=[],n=Ce(e);for(const s in n.query)n.query.hasOwnProperty(s)&&(t.includes(s.toLowerCase())||r.push(s+"="+n.query[s]));return n.path+(r.length?"?"+r.join("&"):"")}function ce(e){if(!e)return null;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:parseFloat(s[0]),max:parseFloat(s[1]),resolution:s.length>=3&&s[2]!=="0"?parseFloat(s[2]):void 0}}).filter(n=>n):r.map(n=>parseFloat(n))}function me(e){if(!e)return null;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:s[0],max:s[1],resolution:s.length>=3&&s[2]!=="0"?s[2]:void 0}}).filter(n=>n):r}function ye(e){if(!e)return null;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:new Date(s[0]),max:new Date(s[1]),resolution:s.length>=3&&s[2]!=="0"?bt(s[2]):void 0}}).filter(n=>n):r.map(n=>new Date(n))}function bt(e){const t=/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i,r=e.match(t);return r?{years:U(r[1]),months:U(r[2]),days:U(r[3]),hours:U(r[4]),minutes:U(r[5]),seconds:U(r[6])}:null}function U(e){if(!e)return 0;const t=/(?:\d+(?:.|,)\d+|\d+)/,r=e.match(t);if(!r)return 0;const n=r[0].replace(",",".");return Number(n)}function G(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const he=new Set([102100,3857,102113,900913]),xt=new Set([3395,54004]);function wt(e,t){let r=e.wkid;return qe(t)?r:(!t.includes(r)&&e.latestWkid&&(r=e.latestWkid),he.has(r)?t.find(n=>he.has(n))||t.find(n=>xt.has(n))||102100:r)}const H=new Ve({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});let d=class extends Be(De(We(ke(Ge(He(Xe(Je(Qe)))))))){constructor(...e){super(...e),this.allSublayers=new Ye({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormat=null,this.featureInfoUrl=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.url=null,this.version=null;const t="wms-sublayer";this.own(ze(()=>this.sublayers,(r,n)=>{if(n){for(const s of n)s.layer=null;this.handles.remove(t)}if(r){for(const s of r)s.parent=this,s.layer=this;this.handles.add([r.on("after-add",({item:s})=>{s.parent=this,s.layer=this}),r.on("after-remove",({item:s})=>{s.parent=null,s.layer=null})],t)}},Ke))}normalizeCtorArgs(e,t){return typeof e=="string"?E({url:e},t):e}load(e){const t=W(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(Ze).then(()=>this._fetchService(t))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return new F({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]})}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new R(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference&&this.spatialReference.wkid;e&&r?(t.spatialReferences=e.filter(n=>n!==r),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return fe(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return fe(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const s=new Map,o=e.flatten(({sublayers:i})=>i&&i.toArray()).toArray();o.forEach(i=>{typeof i.parent.id=="number"&&(s.has(i.parent.id)?s.get(i.parent.id).push(i.id):s.set(i.parent.id,[i.id]))}),o.forEach(i=>{const y=E({sublayer:i},n),u=i.write({parentLayerId:typeof i.parent.id=="number"?i.parent.id:-1},y);if(s.has(i.id)&&(u.sublayerIds=s.get(i.id)),!i.sublayers&&i.name){const p=i.write({},y);delete p.id,t.layers.push(p)}}),t.visibleLayers=o.filter(i=>i.visible&&!i.sublayers).map(i=>i.name)}createExportImageParameters(e,t,r,n){const s=n&&n.pixelRatio||1,o=ie({extent:e,width:t})*s,i=new le({layer:this,scale:o}),{xmin:y,ymin:u,xmax:p,ymax:m,spatialReference:c}=e,b=wt(c,this.spatialReferences),w=this.version==="1.3.0"&&X(b)?`${u},${y},${m},${p}`:`${y},${u},${p},${m}`,N=i.toJSON();return E({bbox:w,[this.version==="1.3.0"?"crs":"srs"]:isNaN(b)?void 0:"EPSG:"+b},N)}async fetchImage(e,t,r,n){var m,c;const s=this.mapUrl,o=this.createExportImageParameters(e,t,r,n);if(!o.layers){const b=document.createElement("canvas");return b.width=t,b.height=r,b}const i=(m=n==null?void 0:n.timeExtent)==null?void 0:m.start,y=(c=n==null?void 0:n.timeExtent)==null?void 0:c.end,u=W(i)&&W(y)?i.getTime()===y.getTime()?G(i):`${G(i)}/${G(y)}`:void 0,p={responseType:"image",query:this._mixCustomParameters(E(se(E({width:t,height:r},o),{time:u}),this.refreshParameters)),signal:n==null?void 0:n.signal};return ae(s,p).then(b=>b.data)}fetchFeatureInfo(e,t,r,n,s){const o=ie({extent:e,width:t}),i=new le({layer:this,scale:o}),y=mt(i.visibleSublayers);if(!this.featureInfoUrl||!y)return null;const u=this.version==="1.3.0"?{I:n,J:s}:{x:n,y:s},p=E({query_layers:y,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r},u),m=E(E({},this.createExportImageParameters(e,t,r)),p),c=this._mixCustomParameters(m),b=et(this.featureInfoUrl,c),w=document.createElement("iframe");w.src=b,w.style.border="none",w.style.margin="0",w.style.width="100%",w.setAttribute("sandbox","");const N=new tt({title:this.title,content:w});return new rt({sourceLayer:this,popupTemplate:N})}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}findSublayerByName(e){return this.allSublayers.find(t=>t.name===e)}serviceSupportsSpatialReference(e){return nt(this.url)||this.spatialReferences.some(t=>{const r=t===900913?R.WebMercator:new R({wkid:t});return st(r,e)})}async _fetchService(e){if(!this.resourceInfo){this.parsedUrl.query&&this.parsedUrl.query.service&&(this.parsedUrl.query.SERVICE=this.parsedUrl.query.service,delete this.parsedUrl.query.service),this.parsedUrl.query&&this.parsedUrl.query.request&&(this.parsedUrl.query.REQUEST=this.parsedUrl.query.request,delete this.parsedUrl.query.request);const t=await ae(this.parsedUrl.path,{query:E(E({SERVICE:"WMS",REQUEST:"GetCapabilities"},this.parsedUrl.query),this.customParameters),responseType:"xml",signal:e});this.resourceInfo=ct(t.data)}if(this.parsedUrl){const t=new it(this.parsedUrl.path);t.scheme!=="https"||t.port&&t.port!=="443"||oe.request.httpsDomains.includes(t.host)||oe.request.httpsDomains.push(t.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t=E(E({},this.customParameters),this.customLayerParameters);for(const r in t)e[r.toLowerCase()]=t[r];return e}};function vt(e,t){return e.some(r=>{for(const n in r)if(ut(r,n,null,t))return!0;return!1})}function fe(e,t,r){const n=new Map;e.every(o=>o.id==null)&&(e=at(e)).forEach((o,i)=>o.id=i);for(const o of e){const i=new J;i.read(o,t),(r==null?void 0:r.indexOf(i.name))===-1&&(i.visible=!1),n.set(i.id,i)}const s=[];for(const o of e){const i=n.get(o.id);if(o.parentLayerId!=null&&o.parentLayerId>=0){const y=n.get(o.parentLayerId);y.sublayers||(y.sublayers=new Q),y.sublayers.unshift(i)}else s.unshift(i)}return s}a([l({readOnly:!0})],d.prototype,"allSublayers",void 0),a([l({json:{type:Object,write:!0}})],d.prototype,"customParameters",void 0),a([l({json:{type:Object,write:!0}})],d.prototype,"customLayerParameters",void 0),a([l({type:String,json:{write:!0}})],d.prototype,"copyright",void 0),a([l()],d.prototype,"description",void 0),a([l({readOnly:!0})],d.prototype,"dimensions",void 0),a([l({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],d.prototype,"fullExtent",void 0),a([O(["web-document","portal-item"],"fullExtent",["extent"])],d.prototype,"readFullExtentFromItemOrMap",null),a([k(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],d.prototype,"writeFullExtent",null),a([l()],d.prototype,"fullExtents",void 0),a([l({type:String,json:{write:{ignoreOrigin:!0}}})],d.prototype,"featureInfoFormat",void 0),a([l({type:String,json:{write:{ignoreOrigin:!0}}})],d.prototype,"featureInfoUrl",void 0),a([l({type:String,json:{origins:{"web-document":{default:"image/png",type:H.jsonValues,read:{reader:H.read,source:"format"},write:{writer:H.write,target:"format"}}}}})],d.prototype,"imageFormat",void 0),a([O("imageFormat",["supportedImageFormatTypes"])],d.prototype,"readImageFormat",null),a([l({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],d.prototype,"imageMaxHeight",void 0),a([l({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],d.prototype,"imageMaxWidth",void 0),a([l()],d.prototype,"imageTransparency",void 0),a([l(ot)],d.prototype,"legendEnabled",void 0),a([l({type:["show","hide","hide-children"]})],d.prototype,"listMode",void 0),a([l({type:String,json:{write:{ignoreOrigin:!0}}})],d.prototype,"mapUrl",void 0),a([l({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],d.prototype,"isReference",void 0),a([l({type:["WMS"]})],d.prototype,"operationalLayerType",void 0),a([l()],d.prototype,"resourceInfo",void 0),a([l({type:R,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],d.prototype,"spatialReference",void 0),a([O(["web-document","portal-item"],"spatialReference",["spatialReferences"])],d.prototype,"readSpatialReferenceFromItemOrDocument",null),a([l({type:[lt],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],d.prototype,"spatialReferences",void 0),a([k(["web-document","portal-item"],"spatialReferences")],d.prototype,"writeSpatialReferences",null),a([l({type:Q.ofType(J),json:{write:{target:"layers",overridePolicy(e,t,r){if(vt(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],d.prototype,"sublayers",void 0),a([O(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],d.prototype,"readSublayersFromItemOrMap",null),a([O("service","sublayers",["layers"])],d.prototype,"readSublayers",null),a([k("sublayers",{layers:{type:[J]},visibleLayers:{type:[String]}})],d.prototype,"writeSublayers",null),a([l({json:{read:!1},readOnly:!0,value:"wms"})],d.prototype,"type",void 0),a([l(pt)],d.prototype,"url",void 0),a([l({type:String,json:{write:{ignoreOrigin:!0}}})],d.prototype,"version",void 0),d=a([ge("esri.layers.WMSLayer")],d);const Ot=d;export{Ot as default};