var J=Object.defineProperty;var I=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var L=(e,s,t)=>s in e?J(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,G=(e,s)=>{for(var t in s||(s={}))U.call(s,t)&&L(e,t,s[t]);if(I)for(var t of I(s))A.call(s,t)&&L(e,t,s[t]);return e};import{bl as V,ch as O,bH as W,bO as m,ol as M,kt as D,os as q,ay as j,fv as E,sc as g,hu as S,aa as Z,nR as B,cc as Q,aZ as C,r as w,aA as F,sd as R,Z as P,k as l,n as a,cV as X,se as Y,cM as _,o as T,ri as ee,rq as te,rj as se,cD as re,cE as le,cF as oe,V as ie,kh as ae,Q as ne,U as ue,cw as ye,cI as pe,jl as he,cL as fe}from"./vendor.5fba8a95.js";const ce={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function N(e){const s=e.folders||[],t=s.slice(),r=new Map,i=new Map,p=new Map,b=new Map,v=new Map,h={esriGeometryPoint:i,esriGeometryPolyline:p,esriGeometryPolygon:b};(e.featureCollection&&e.featureCollection.layers||[]).forEach(o=>{const c=m(o);c.featureSet.features=[];const y=o.featureSet.geometryType;r.set(y,c);const k=o.layerDefinition.objectIdField;y==="esriGeometryPoint"?x(i,k,o.featureSet.features):y==="esriGeometryPolyline"?x(p,k,o.featureSet.features):y==="esriGeometryPolygon"&&x(b,k,o.featureSet.features)}),e.groundOverlays&&e.groundOverlays.forEach(o=>{v.set(o.id,o)}),s.forEach(o=>{o.networkLinkIds.forEach(c=>{const y=be(c,o.id,e.networkLinks);y&&t.push(y)})}),t.forEach(o=>{if(o.featureInfos){o.points=m(r.get("esriGeometryPoint")),o.polylines=m(r.get("esriGeometryPolyline")),o.polygons=m(r.get("esriGeometryPolygon")),o.mapImages=[];for(const c of o.featureInfos)switch(c.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const y=h[c.type].get(c.id);y&&o[ce[c.type]].featureSet.features.push(y);break}case"GroundOverlay":{const y=v.get(c.id);y&&o.mapImages.push(y);break}}o.fullExtent=$([o])}});const f=$(t);return{folders:s,sublayers:t,extent:f}}function K(e,s,t,r){const i=M&&M.findCredential(e);e=D(e,{token:i&&i.token});const p=q.kmlServiceUrl;return W(p,{query:{url:e,model:"simple",folders:"",refresh:t!==0||void 0,outSR:JSON.stringify(s)},responseType:"json",signal:r})}function z(e,s,t=null,r=[]){const i=[],p={},b=s.sublayers,v=s.folders.map(h=>h.id);return b.forEach(h=>{const f=new e;if(t?f.read(h,t):f.read(h),r.length&&v.includes(f.id)&&(f.visible=r.includes(f.id)),p[h.id]=f,h.parentFolderId!=null&&h.parentFolderId!==-1){const o=p[h.parentFolderId];o.sublayers||(o.sublayers=[]),o.sublayers.unshift(f)}else i.unshift(f)}),i}function x(e,s,t){t.forEach(r=>{e.set(r.attributes[s],r)})}function de(e,s){let t;return s.some(r=>r.id===e&&(t=r,!0)),t}function be(e,s,t){const r=de(e,t);return r&&(r.parentFolderId=s,r.networkLink=r),r}function $(e){const s=j(E),t=j(E);for(const r of e){if(r.polygons&&r.polygons.featureSet&&r.polygons.featureSet.features)for(const i of r.polygons.featureSet.features)g(s,i.geometry),S(t,s);if(r.polylines&&r.polylines.featureSet&&r.polylines.featureSet.features)for(const i of r.polylines.featureSet.features)g(s,i.geometry),S(t,s);if(r.points&&r.points.featureSet&&r.points.featureSet.features)for(const i of r.points.featureSet.features)g(s,i.geometry),S(t,s);if(r.mapImages)for(const i of r.mapImages)g(s,i.extent),S(t,s)}return V(t,E)?null:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:O.WGS84}}var d;let u=d=class extends Z.EventedMixin(B(Q)){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null}initialize(){C(()=>this.networkLink).then(()=>C(()=>this.visible===!0)).then(()=>this.load())}load(e){if(!this.networkLink||this.networkLink.viewFormat)return;const s=w(e)?e.signal:null,t=this._fetchService(this._get("networkLink").href,s).then(r=>{const i=$(r.sublayers);this.fullExtent=F.fromJSON(i),this.sourceJSON=r;const p=R(P.ofType(d),z(d,r));this.sublayers?this.sublayers.addMany(p):this.sublayers=p,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(t),Promise.resolve(this)}set sublayers(e){const s=this._get("sublayers");s&&(s.forEach(t=>{t.parent=null,t.layer=null}),this._sublayersHandles.forEach(t=>t.remove()),this._sublayersHandles=null),e&&(e.forEach(t=>{t.parent=this,t.layer=this.layer}),this._sublayersHandles=[e.on("after-add",({item:t})=>{t.parent=this,t.layer=this.layer}),e.on("after-remove",({item:t})=>{t.parent=null,t.layer=null})]),this._set("sublayers",e)}castSublayers(e){return R(P.ofType(d),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,s){return!!s.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(s=>s.layer=e)}_fetchService(e,s){return K(e,this.layer.outSpatialReference,this.layer.refreshInterval,s).then(t=>N(t.data))}};l([a()],u.prototype,"description",void 0),l([a()],u.prototype,"id",void 0),l([a({readOnly:!0,value:null})],u.prototype,"networkLink",void 0),l([a({json:{write:{allowNull:!0}}})],u.prototype,"parent",void 0),l([a({value:null,json:{write:{allowNull:!0}}})],u.prototype,"sublayers",null),l([X("sublayers")],u.prototype,"castSublayers",null),l([a({value:null,json:{read:{source:"name",reader:e=>Y(e)}}})],u.prototype,"title",void 0),l([a({value:!0})],u.prototype,"visible",null),l([_("visible",["visibility"])],u.prototype,"readVisible",null),l([a()],u.prototype,"sourceJSON",void 0),l([a({value:null})],u.prototype,"layer",null),l([a({type:F})],u.prototype,"fullExtent",void 0),u=d=l([T("esri.layers.support.KMLSublayer")],u);const H=u,ve=["kml","xml"];let n=class extends ee(te(se(re(le(oe(ie)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new ae({getCollections:()=>[this.sublayers],getChildrenFunction:s=>s.sublayers}),this.outSpatialReference=O.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.own([ne(()=>this.sublayers,(e,s)=>{s&&s.forEach(t=>{t.parent=null,t.layer=null}),e&&e.forEach(t=>{t.parent=this,t.layer=this})},ue),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(e,s){return typeof e=="string"?G({url:e},s):e}readSublayersFromItemOrWebMap(e,s){this._visibleFolders=s.visibleFolders}readSublayers(e,s,t){return z(H,s,t,this._visibleFolders)}writeSublayers(e,s){const t=[],r=e.toArray();for(;r.length;){const i=r[0];i.networkLink||(i.visible&&t.push(i.id),i.sublayers&&r.push(...i.sublayers.toArray())),r.shift()}s.visibleFolders=t}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?ye(this.url,ve)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,s=[],t=r=>{r.visible&&(s.push(r),r.sublayers&&r.sublayers.forEach(t))};return e&&e.forEach(t),s}get fullExtent(){return this._recomputeFullExtent()}load(e){const s=w(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).catch(pe).then(()=>this._fetchService(s))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const s=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:K(this.url,this.outSpatialReference,this.refreshInterval,e)),t=N(s.data);t&&this.read(t,{origin:"service"})}_recomputeFullExtent(){let e=null;w(this.extent)&&(e=this.extent.clone());const s=t=>{if(t.sublayers)for(const r of t.sublayers.items)s(r),r.visible&&r.fullExtent&&(w(e)?e.union(r.fullExtent):e=r.fullExtent.clone())};return s(this),e}};l([a({readOnly:!0})],n.prototype,"allSublayers",void 0),l([a({type:O})],n.prototype,"outSpatialReference",void 0),l([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],n.prototype,"path",void 0),l([a({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"legendEnabled",void 0),l([a({type:["show","hide","hide-children"]})],n.prototype,"listMode",void 0),l([a({type:["KML"]})],n.prototype,"operationalLayerType",void 0),l([a({})],n.prototype,"resourceInfo",void 0),l([a({type:P.ofType(H),json:{write:{ignoreOrigin:!0}}})],n.prototype,"sublayers",void 0),l([_(["web-map","portal-item"],"sublayers",["visibleFolders"])],n.prototype,"readSublayersFromItemOrWebMap",null),l([_("service","sublayers",["sublayers"])],n.prototype,"readSublayers",null),l([he("sublayers")],n.prototype,"writeSublayers",null),l([a({readOnly:!0,json:{read:!1}})],n.prototype,"type",void 0),l([a({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],n.prototype,"title",null),l([a(fe)],n.prototype,"url",void 0),l([a({readOnly:!0})],n.prototype,"visibleSublayers",null),l([a({type:F})],n.prototype,"extent",void 0),l([a()],n.prototype,"fullExtent",null),n=l([T("esri.layers.KMLLayer")],n);const Se=n;export{Se as default};