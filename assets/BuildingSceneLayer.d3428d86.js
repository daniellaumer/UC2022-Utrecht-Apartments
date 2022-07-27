var ee=Object.defineProperty,te=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var q=(e,t,i)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,V=(e,t)=>{for(var i in t||(t={}))se.call(t,i)&&q(e,i,t[i]);if(P)for(var i of P(t))ie.call(t,i)&&q(e,i,t[i]);return e},K=(e,t)=>te(e,re(t));import{k as r,n as s,o as n,hW as u,bO as p,Z as x,fs as oe,rr as le,rs as ne,am as G,cc as ae,e3 as pe,r as X,bH as ye,rt as ue,cC as de,cD as ce,cE as he,rj as ve,cF as fe,ru as ge,V as me,kh as be,aP as C,c3 as Se,cI as we,ro as $e,rv as U,rw as xe,cM as H,rx as Oe,fg as je,ch as Be,ry as Ie}from"./vendor.5fba8a95.js";import{E as J}from"./BuildingComponentSublayer.21ee07bd.js";import{d}from"./BuildingGroupSublayer.d07b257b.js";let m=class extends u{constructor(){super(...arguments),this.type=null}};r([s({type:String,readOnly:!0,json:{write:!0}})],m.prototype,"type",void 0),m=r([n("esri.layers.support.BuildingFilterAuthoringInfo")],m);const Z=m;var I;let h=I=class extends u{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new I({filterType:this.filterType,filterValues:p(this.filterValues)})}};r([s({type:String,json:{write:!0}})],h.prototype,"filterType",void 0),r([s({type:[String],json:{write:!0}})],h.prototype,"filterValues",void 0),h=I=r([n("esri.layers.support.BuildingFilterAuthoringInfoType")],h);const Fe=h;var F;const Te=x.ofType(Fe);let b=F=class extends u{clone(){return new F({filterTypes:p(this.filterTypes)})}};r([s({type:Te,json:{write:!0}})],b.prototype,"filterTypes",void 0),b=F=r([n("esri.layers.support.BuildingFilterAuthoringInfoBlock")],b);const Ae=b;var T;const ke=x.ofType(Ae);let v=T=class extends Z{constructor(){super(...arguments),this.type="checkbox"}clone(){return new T({filterBlocks:p(this.filterBlocks)})}};r([s({type:["checkbox"]})],v.prototype,"type",void 0),r([s({type:ke,json:{write:!0}})],v.prototype,"filterBlocks",void 0),v=T=r([n("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],v);const W=v;let S=class extends u{};r([s({readOnly:!0,json:{read:!1}})],S.prototype,"type",void 0),S=r([n("esri.layers.support.BuildingFilterMode")],S);const O=S;var A;let w=A=class extends O{constructor(){super(...arguments),this.type="solid"}clone(){return new A}};r([s({type:["solid"],readOnly:!0,json:{write:!0}})],w.prototype,"type",void 0),w=A=r([n("esri.layers.support.BuildingFilterModeSolid")],w);const k=w;var E;let f=E=class extends O{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new E({edges:p(this.edges)})}};r([oe({wireFrame:"wire-frame"})],f.prototype,"type",void 0),r([s(le)],f.prototype,"edges",void 0),f=E=r([n("esri.layers.support.BuildingFilterModeWireFrame")],f);const z=f;var _;let $=_=class extends O{constructor(){super(...arguments),this.type="x-ray"}clone(){return new _}};r([s({type:["x-ray"],readOnly:!0,json:{write:!0}})],$.prototype,"type",void 0),$=_=r([n("esri.layers.support.BuildingFilterModeXRay")],$);const D=$;var L;const Ee={nonNullable:!0,types:{key:"type",base:O,typeMap:{solid:k,"wire-frame":z,"x-ray":D}},json:{read:e=>{switch(e&&e.type){case"solid":return k.fromJSON(e);case"wireFrame":return z.fromJSON(e);case"x-ray":return D.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let c=L=class extends u{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new k,this.title=""}clone(){return new L({filterExpression:this.filterExpression,filterMode:p(this.filterMode),title:this.title})}};r([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"filterExpression",void 0),r([s(Ee)],c.prototype,"filterMode",void 0),r([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"title",void 0),c=L=r([n("esri.layers.support.BuildingFilterBlock")],c);const _e=c;var M;const Le=x.ofType(_e);let y=M=class extends u{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=ne(),this.name=null}clone(){return new M({description:this.description,filterBlocks:p(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:p(this.filterAuthoringInfo)})}};r([s({type:String,json:{write:!0}})],y.prototype,"description",void 0),r([s({type:Le,json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"filterBlocks",void 0),r([s({types:{key:"type",base:Z,typeMap:{checkbox:W}},json:{read:e=>(e&&e.type)==="checkbox"?W.fromJSON(e):null,write:!0}})],y.prototype,"filterAuthoringInfo",void 0),r([s({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"id",void 0),r([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"name",void 0),y=M=r([n("esri.layers.support.BuildingFilter")],y);const Me=y,Ne=G.getLogger("esri.layers.support.BuildingSummaryStatistics");let a=class extends u{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};r([s({type:String})],a.prototype,"fieldName",void 0),r([s({type:String})],a.prototype,"modelName",void 0),r([s({type:String})],a.prototype,"label",void 0),r([s({type:Number})],a.prototype,"min",void 0),r([s({type:Number})],a.prototype,"max",void 0),r([s({json:{read:e=>Array.isArray(e)&&(e.every(t=>typeof t=="string")||e.every(t=>typeof t=="number"))?e.slice():null}})],a.prototype,"mostFrequentValues",void 0),r([s({type:[Number]})],a.prototype,"subLayerIds",void 0),a=r([n("esri.layers.support.BuildingFieldStatistics")],a);let g=class extends ae.LoadableMixin(pe(u)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(Ne.error("building summary statistics are not loaded"),null)}load(e){const t=X(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await ye(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};r([s({constructOnly:!0,type:String})],g.prototype,"url",void 0),r([s({readOnly:!0,type:[a],json:{read:{source:"summary"}}})],g.prototype,"fields",null),g=r([n("esri.layers.support.BuildingSummaryStatistics")],g);const Q=g,B=G.getLogger("esri.layers.BuildingSceneLayer"),Y=x.ofType(Me),N=p(d.sublayersProperty);N.json.origins["web-scene"]={type:[J],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},N.json.origins["portal-item"]={type:[J],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let o=class extends ue(de(ce(he(ve(fe(ge(me))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new be({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.type==="building-group"?t.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new Y,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,t,i){const l=d.readSublayers(e,t,i);return d.forEachSublayer(l,j=>j.layer=this),this.sublayerOverrides&&(this.applySublayerOverrides(l,this.sublayerOverrides),this.sublayerOverrides=null),l}applySublayerOverrides(e,{overrides:t,context:i}){d.forEachSublayer(e,l=>l.read(t.get(l.id),i))}readSublayerOverrides(e,t){const i=new Map;for(const l of e)l!=null&&typeof l=="object"&&typeof l.id=="number"?i.set(l.id,l):t.messages.push(new C("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:l}));return{overrides:i,context:t}}writeSublayerOverrides(e,t,i){const l=[];d.forEachSublayer(this.sublayers,j=>{const R=j.write({},i);Object.keys(R).length>1&&l.push(R)}),l.length>0&&(t.sublayers=l)}writeUnappliedOverrides(e,t){t.sublayers=[],e.overrides.forEach(i=>{t.sublayers.push(p(i))})}write(e,t){return e=super.write(e,t),!t||t.origin!=="web-scene"&&t.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,t):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,t){if(super.read(e,t),t&&(t.origin==="web-scene"||t.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const i=this.readSublayerOverrides(e.sublayers,t);this.sublayers?this.applySublayerOverrides(this.sublayers,i):this.sublayerOverrides=i}}readSummaryStatistics(e,t){if(typeof t.statisticsHRef=="string"){const i=Se(this.parsedUrl.path,t.statisticsHRef);return new Q({url:i})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const t=X(e)?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(we).then(()=>this._fetchService(t)).then(()=>this._fetchAssociatedFeatureService(t));return this.addResolvingPromise(i),Promise.resolve(this)}loadAll(){return $e(this,e=>{d.forEachSublayer(this.sublayers,t=>{t.type!=="building-group"&&e(t)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,t){return this._debouncedSaveOperations(U.SAVE_AS,K(V({},t),{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"}),e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(U.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new C("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&B.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&B.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}async _fetchAssociatedFeatureService(e){const t=new xe(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedFeatureServiceItem=await t.fetchPortalItem()}catch(i){B.warn("Associated feature service item could not be loaded",i)}}};r([s({type:["BuildingSceneLayer"]})],o.prototype,"operationalLayerType",void 0),r([s({readOnly:!0})],o.prototype,"allSublayers",void 0),r([s(N)],o.prototype,"sublayers",void 0),r([H("service","sublayers")],o.prototype,"readSublayers",null),r([s({type:Y,nonNullable:!0,json:{write:!0}})],o.prototype,"filters",void 0),r([s({type:String,json:{write:!0}})],o.prototype,"activeFilterId",void 0),r([s({readOnly:!0,type:Q})],o.prototype,"summaryStatistics",void 0),r([H("summaryStatistics",["statisticsHRef"])],o.prototype,"readSummaryStatistics",null),r([s({type:[String],json:{read:!1}})],o.prototype,"outFields",void 0),r([s(Oe)],o.prototype,"fullExtent",void 0),r([s({type:["show","hide","hide-children"]})],o.prototype,"listMode",void 0),r([s(je(Be))],o.prototype,"spatialReference",void 0),r([s(Ie)],o.prototype,"elevationInfo",null),r([s({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),r([s()],o.prototype,"associatedFeatureServiceItem",void 0),o=r([n("esri.layers.BuildingSceneLayer")],o);const Ke=o;export{Ke as default};