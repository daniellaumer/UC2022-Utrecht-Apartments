import{e as s,d as o,n as E,c4 as L,bW as N,r as F,c9 as g,t as z,jp as J,Y as D,ro as k,rC as H,rD as W,rc as Z,rB as U,rE as V,rd as K,cv as Y,cw as X,rk as ee,cx as te,M as re,rF as R,fo as se,Q as T,rG as ie,rs as oe,rH as ne,i1 as pe,aw as ae,jb as $,rJ as le,rK as ue,rI as de,rx as ce,fw as ye,fx as he,rM as fe,fv as me,rN as ge,rP as ve,cD as Se,fz as xe}from"./vendor.4451b4ce.js";import{q as we,F as C,N as j,S as be,k as Fe,T as Ie,x as Oe,I as De,j as Re}from"./ogcFeatureUtils.952adea0.js";import"./geojson.9da933e9.js";import"./clientSideDefaults.c528833a.js";import"./QueryEngineCapabilities.c2e9875c.js";let h=class extends L{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getFeatureDefinition(){const{featureDefinition:{collection:e,layerDefinition:r,spatialReference:t,supportedCrs:n},layer:{apiKey:p,capabilities:u,customParameters:a}}=this;return{capabilities:u,collection:e,layerDefinition:r,queryParameters:{apiKey:p,customParameters:a},spatialReference:t,supportedCrs:n}}queryExtent(e,r={}){return null}queryFeatureCount(e,r={}){return null}queryFeatures(e,r={}){return this.queryFeaturesJSON(e,r).then(t=>N.fromJSON(t))}queryFeaturesJSON(e,r={}){const t=this.getFeatureDefinition();return this.load(r).then(()=>we(t,e,r))}queryObjectIds(e,r={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,r){var n;const t=new RegExp(`^${r}$`,"i");return(n=e.conformsTo.some(p=>t.test(p)))!=null?n:!1}_getCapabilities(e,r){var n,p,u,a,l,d,m;const t=F(r)?(n=r.components)==null?void 0:n.parameters:null;return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:(m=(d=(u=(p=t==null?void 0:t.limit)==null?void 0:p.schema)==null?void 0:u.maximum)!=null?d:(l=(a=t==null?void 0:t.limitFeatures)==null?void 0:a.schema)==null?void 0:l.maximum)!=null?m:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getExtent(e){var l;const r=(l=e.extent)==null?void 0:l.spatial;if(!r)return null;const t=r.bbox[0],n=t.length===4,p=t[0],u=t[1],a=n?void 0:t[2];return{xmin:p,ymin:u,xmax:n?t[2]:t[3],ymax:n?t[3]:t[4],zmin:a,zmax:n?void 0:t[5],spatialReference:g.WGS84.toJSON()}}_getStorageSpatialReference(e){var n;const r=(n=e.storageCrs)!=null?n:C,t=j(r);return z(t)?g.WGS84:new g({wkid:t})}_getSupportedSpatialReferences(e,r){var a;const t="#/crs",n=(a=e.crs)!=null?a:[C],p=n.includes(t)?n.filter(l=>l!==t).concat(r.crs):n,u=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return p.filter(l=>!u.test(l))}async _loadOGCServices(e,r){const t=F(r)?r.signal:null,{apiKey:n,collectionId:p,customParameters:u,fields:a,geometryType:l,hasZ:d,objectIdField:m,timeInfo:v,url:P}=e,_={fields:a==null?void 0:a.map(y=>y.toJSON()),geometryType:J.toJSON(l),hasZ:d,objectIdField:m,timeInfo:v==null?void 0:v.toJSON()},f={apiKey:n,customParameters:u,signal:t},S=await be(P,f),[I,O]=await Promise.all([Fe(S,f),Ie(S,f)]);if(!this._conformsToType(I,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new D("ogc-feature-layer:no-geojson-support","Server does not support geojson");const c=O.collections.find(y=>y.id===p);if(!c)throw new D("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const q=this._conformsToType(I,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await Oe(S,f):null,x=await De(c,_,f),G=this._getCapabilities(x.hasZ,q),B=this._getExtent(c),Q=this._getStorageSpatialReference(c).toJSON(),M=this._getSupportedSpatialReferences(c,O),A=new RegExp(`^${Re}`,"i"),w={};for(const y of M){const b=j(y);F(b)&&(w[b]||(w[b]=y.replace(A,"")))}x.extent=B,this.featureDefinition={capabilities:G,collection:c,layerDefinition:x,queryParameters:{},spatialReference:Q,supportedCrs:w}}};s([o()],h.prototype,"featureDefinition",void 0),s([o({constructOnly:!0})],h.prototype,"layer",void 0),s([o()],h.prototype,"type",void 0),h=s([E("esri.layers.graphics.sources.OGCFeatureSource")],h);const Te=xe();let i=class extends k(H(W(Z(U(V(K(Y(X(ee(te(re))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new h({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){R(e,this.fieldsIndex),this._set("renderer",e)}on(e,r){return super.on(e,r)}createPopupTemplate(e){return se(this,e)}createQuery(){return new T}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var a;let t,n=!1;const p=(a=r==null?void 0:r.feature)==null?void 0:a.attributes,u=this.typeIdField&&(p==null?void 0:p[this.typeIdField]);return u!=null&&this.types&&(n=this.types.some(l=>{var d;return l.id==u&&(t=(d=l.domains)==null?void 0:d[e],(t==null?void 0:t.type)==="inherited"&&(t=this._getLayerDomain(e)),!0)})),n||t||(t=this._getLayerDomain(e)),t}queryFeatures(e,r){return this.load().then(()=>this.source.queryFeatures(T.from(e)||this.createQuery(),r)).then(t=>{var n;return(n=t==null?void 0:t.features)==null||n.forEach(p=>{p.layer=p.sourceLayer=this}),t})}serviceSupportsSpatialReference(e){var r,t;return(t=(r=this.source)==null?void 0:r.serviceSupportsSpatialReference(e))!=null?t:!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),R(this.renderer,this.fieldsIndex),ie(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const r of this.fields)if(r.name===e&&r.domain)return r.domain;return null}};s([o({readOnly:!0,json:{origins:{service:{read:!0}}}})],i.prototype,"capabilities",void 0),s([o({type:String,json:{write:!0}})],i.prototype,"collectionId",void 0),s([o({type:String})],i.prototype,"copyright",void 0),s([o({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),s([o({type:String})],i.prototype,"definitionExpression",void 0),s([o({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],i.prototype,"description",void 0),s([o({type:String})],i.prototype,"displayField",void 0),s([o(oe)],i.prototype,"elevationInfo",void 0),s([o(ne)],i.prototype,"featureReduction",void 0),s([o({type:[pe],json:{origins:{service:{name:"layerDefinition.fields"}}}})],i.prototype,"fields",void 0),s([o(Te.fieldsIndex)],i.prototype,"fieldsIndex",void 0),s([o({readOnly:!0,type:ae,json:{origins:{service:{name:"layerDefinition.extent"}}}})],i.prototype,"fullExtent",void 0),s([o({type:$.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:$.read}}}}})],i.prototype,"geometryType",void 0),s([o({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],i.prototype,"hasZ",void 0),s([o({type:Boolean,readOnly:!0})],i.prototype,"isTable",null),s([o({type:[le],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ue},write:!0}}}})],i.prototype,"labelingInfo",void 0),s([o(de)],i.prototype,"labelsVisible",void 0),s([o(ce)],i.prototype,"legendEnabled",void 0),s([o({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],i.prototype,"objectIdField",void 0),s([o({type:["OGCFeatureLayer"]})],i.prototype,"operationalLayerType",void 0),s([o(ye)],i.prototype,"popupEnabled",void 0),s([o({type:he,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),s([o({types:fe,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:me,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],i.prototype,"renderer",null),s([o(ge)],i.prototype,"screenSizePerspectiveEnabled",void 0),s([o({readOnly:!0})],i.prototype,"source",void 0),s([o({readOnly:!0,type:g,json:{origins:{service:{read:!0}}}})],i.prototype,"spatialReference",void 0),s([o({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],i.prototype,"title",void 0),s([o({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),s([o({type:String,readOnly:!0})],i.prototype,"typeIdField",void 0),s([o({type:[ve]})],i.prototype,"types",void 0),s([o(Se)],i.prototype,"url",void 0),i=s([E("esri.layers.OGCFeatureLayer")],i);const _e=i;export{_e as default};