var x=Object.defineProperty,j=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var h=(t,r,o)=>r in t?x(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,p=(t,r)=>{for(var o in r||(r={}))R.call(r,o)&&h(t,o,r[o]);if(c)for(var o of c(r))F.call(r,o)&&h(t,o,r[o]);return t},m=(t,r)=>j(t,T(r));import{k as e,n as s,o as S,hW as O,am as P,rJ as D,ri as N,rK as E,rj as k,rq as L,cC as A,cD as _,cE as J,cF as U,rI as C,V as q,ch as I,aP as d,r as G,cI as M,rL as f,sz as V,P as z,sA as W,fj as B,Y as Q,bH as Y,rM as H,cA as K,fp as X,rN as Z,aA as ee,j6 as v,rO as te,rP as re,rQ as ie,rD as se,ff as g,sB as oe,sC as ae,fr as ne,B as le,rS as pe,fq as de,cM as b,rT as ye,cL as ue,sD as ce,sE as he,ft as me}from"./vendor.5fba8a95.js";var u;let n=u=class extends O{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new u({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([s({type:Number,json:{write:!0}})],n.prototype,"age",void 0),e([s({type:Number,json:{write:!0}})],n.prototype,"ageReceived",void 0),e([s({type:Number,json:{write:!0}})],n.prototype,"displayCount",void 0),e([s({type:Number,json:{write:!0}})],n.prototype,"maxObservations",void 0),n=u=e([S("esri.layers.support.PurgeOptions")],n);const $=n,fe=P.getLogger("esri.layers.StreamLayer"),w=me();let i=class extends D(N(E(k(L(A(_(J(U(C(q)))))))))){constructor(...t){super(...t),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new $,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=I.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(t,r){return typeof t=="string"?p({url:t},r):t}load(t){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new d("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const r=G(t)?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},t).catch(M).then(()=>this._fetchService(r))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(t){f(t,this.fieldsIndex),this._set("renderer",t)}readRenderer(t,r,o){const a=(r=r.layerDefinition||r).drawingInfo&&r.drawingInfo.renderer||void 0;if(a){const l=V(a,r,o)||void 0;return l||fe.error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:o}),l}if(r.defaultSymbol)return r.types&&r.types.length?new z({defaultSymbol:y(r.defaultSymbol,r,o),field:r.typeIdField,uniqueValueInfos:r.types.map(l=>({id:l.id,symbol:y(l.symbol,l,o)}))}):new W({symbol:y(r.defaultSymbol,r,o)})}createPopupTemplate(t){return B(this,t)}createQuery(){const t=new Q;return t.returnGeometry=!0,t.outFields=["*"],t.where=this.definitionExpression||"1=1",t}getFieldDomain(t,r){if(!this.fields)return null;let o=null;return this.fields.some(a=>(a.name===t&&(o=a.domain),!!o)),o}getField(t){return this.fieldsIndex.get(t)}serviceSupportsSpatialReference(t){return!0}async _fetchService(t){var r,o;if(this.webSocketUrl){if(!((r=this.timeInfo)==null?void 0:r.trackIdField))throw new d("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new d("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new d("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new d("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:a}=await Y(this.parsedUrl.path,{query:p(p({f:"json"},this.customParameters),this.parsedUrl.query),responseType:"json",signal:t});this.sourceJSON=a}return this.sourceJSON=m(p({},(o=this.sourceJSON)!=null?o:{}),{objectIdField:"__esri_stream_id__"}),this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),f(this.renderer,this.fieldsIndex),H(this.timeInfo,this.fieldsIndex),K(this,{origin:"service"})}};e([s({type:String})],i.prototype,"copyright",void 0),e([s({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),e([s({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),e([s({type:String})],i.prototype,"displayField",void 0),e([s({type:X})],i.prototype,"elevationInfo",void 0),e([s(Z)],i.prototype,"featureReduction",void 0),e([s(w.fields)],i.prototype,"fields",void 0),e([s(w.fieldsIndex)],i.prototype,"fieldsIndex",void 0),e([s({type:ee})],i.prototype,"geometryDefinition",void 0),e([s({type:v.apiValues,json:{read:{reader:v.read}}})],i.prototype,"geometryType",void 0),e([s(te)],i.prototype,"labelsVisible",void 0),e([s({type:[re],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:ie},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],i.prototype,"labelingInfo",void 0),e([s(se)],i.prototype,"legendEnabled",void 0),e([s({type:["show","hide"]})],i.prototype,"listMode",void 0),e([s({type:g})],i.prototype,"maxReconnectionAttempts",void 0),e([s({type:g})],i.prototype,"maxReconnectionInterval",void 0),e([s(oe)],i.prototype,"maxScale",void 0),e([s(ae)],i.prototype,"minScale",void 0),e([s({type:String})],i.prototype,"objectIdField",void 0),e([s({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],i.prototype,"operationalLayerType",void 0),e([s(ne)],i.prototype,"popupEnabled",void 0),e([s({type:le,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],i.prototype,"popupTemplate",void 0),e([s({type:$})],i.prototype,"purgeOptions",void 0),e([s({types:pe,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:de,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],i.prototype,"renderer",null),e([b("service","renderer",["drawingInfo.renderer","defaultSymbol"]),b("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],i.prototype,"readRenderer",null),e([s(ye)],i.prototype,"screenSizePerspectiveEnabled",void 0),e([s()],i.prototype,"sourceJSON",void 0),e([s({type:I,json:{origins:{service:{read:{source:"spatialReference"}}}}})],i.prototype,"spatialReference",void 0),e([s({json:{read:!1}})],i.prototype,"type",void 0),e([s(ue)],i.prototype,"url",void 0),e([s({type:Number})],i.prototype,"updateInterval",void 0),e([s({type:String})],i.prototype,"webSocketUrl",void 0),i=e([S("esri.layers.StreamLayer")],i);const y=ce({types:he}),be=i;export{be as default};
