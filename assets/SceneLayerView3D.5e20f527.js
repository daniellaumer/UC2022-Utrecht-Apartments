import{am as m,C as d,i2 as _,r as o,i as h,f3 as c,F as v,Y as u,aN as I,f8 as w,q as b,gs as E,k as s,n,e0 as C,f9 as x,o as S}from"./vendor.5fba8a95.js";import{WhereClause as q}from"./WhereClause.7b12305d.js";import{p as O,u as A,L as Q,I as p}from"./I3SMeshView3D.ece2f166.js";import{n as L}from"./LayerView3D.40797f9b.js";import{c as j,i as D,a as R,b as N,g as $}from"./SceneLayerView.e8d70b73.js";import{C as y,p as H,f as U,n as G}from"./I3SQueryFeatureStore.1b6ae197.js";import{n as g}from"./I3SNode.d13a68db.js";import{p as P}from"./DefinitionExpressionSceneLayerView.63a6acfe.js";import{c as V}from"./PopupSceneLayerView.8eb8c7c7.js";import"./I3SAttributeOverrides.4edb8c1d.js";import"./Graphics3DScaleVisibility.fa0d5632.js";import"./optimizedFeatureQueryEngineAdapter.9bc24d47.js";import"./centroid.f6cbbffc.js";import"./PooledRBush.1e9643d9.js";import"./quickselect.03306040.js";import"./SceneLayerWorker.5b164f93.js";import"./attributeUtils.99d8ee08.js";import"./LayerView.dee8c675.js";import"./QueryEngine.d7035a1d.js";import"./QueryEngineResult.b127d9f3.js";import"./utils.6eccf1e5.js";import"./ClassBreaksDefinition.413c77e2.js";import"./json.d1a0fa35.js";import"./QueryEngineCapabilities.c2e9875c.js";import"./popupUtils.e73d7fcc.js";const M=m.getLogger("esri.views.3d.layers.SceneLayerView3D"),f=N();let i=class extends O(P(V(L($)))){constructor(){super(...arguments),this.type="scene-layer-3d",this.lodFactor=1,this.progressiveLoadFactor=1,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!0,this._interactiveEditingSessions=new Map,this._queryEngine=null}get filter(){return this._get("filter")}set filter(e){this._set("filter",y.checkSupport(e)?e:null)}get viewFilter(){const e=this.filter;if(d(e)&&d(this.layerFilter))return null;const t=this._get("viewFilter");return d(t)?new y({layerFilter:this.layerFilter,viewFilter:e,layerFieldsIndex:this.layer.fieldsIndex,loadAsyncModule:r=>this._loadAsyncModule(r),applyFilters:()=>this._applyFilters(!0),addSqlFilter:(r,a)=>this.addSqlFilter(r,a,this.logError)}):(t.viewFilter=this.filter,t.layerFilter=this.layerFilter,this.notifyChange("viewFilter"),t)}get requiredFields(){var e,t;return(t=(e=this.fieldsHelper)==null?void 0:e.requiredFields)!=null?t:[]}get floorFilterClause(){const e=_(this);return o(e)?q.create(e,this.layer.fieldsIndex):null}get excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds;return e.length?e.toArray().sort((t,r)=>t-r):null}get lodCrossfadeinDuration(){var e,t;return(t=(e=this.view)==null?void 0:e.qualitySettings.sceneService["3dObject"].lodCrossfadeinDuration)!=null?t:0}get lodCrossfadeoutDuration(){var e,t;return(t=(e=this.view)==null?void 0:e.qualitySettings.sceneService["3dObject"].lodCrossfadeoutDuration)!=null?t:0}get lodCrossfadeUncoveredDuration(){var e,t;return(t=(e=this.view)==null?void 0:e.qualitySettings.sceneService["3dObject"].lodCrossfadeUncoveredDuration)!=null?t:0}initialize(){this.fieldsHelper=new j({layerView:this}),this.updatingHandles.add(()=>this.layer.rangeInfos,e=>this._rangeInfosChanged(e),h),this.updatingHandles.add(()=>this.layer.renderer,e=>this.updatingHandles.addPromise(this._rendererChange(e)),h),this.updatingHandles.add(()=>[this.parsedDefinitionExpression,this.filter,this.layer.filter,this.floorFilterClause,this.excludeObjectIdsSorted,c(this.viewFilter,e=>[e.parsedWhereClause,e.parsedGeometry,e.sortedObjectIds])],()=>this._filterChange()),this.updatingHandles.add(()=>[this.filter,c(this.viewFilter,e=>e.parsedGeometry)],()=>this._geometryFilterChange()),this.handles.add(this.layer.on("apply-edits",e=>this.updatingHandles.addPromise(e.result))),this.handles.add(this.layer.on("edits",e=>this._handleEdits(e)))}destroy(){this.fieldsHelper=v(this.fieldsHelper)}_rangeInfosChanged(e){e!=null&&e.length>0&&M.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}createQuery(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return o(this.filter)?this.filter.createQuery(e):new u(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),t==null?void 0:t.signal).then(r=>{if(!(r==null?void 0:r.features))return r;const a=this.layer;for(const l of r.features)l.layer=a,l.sourceLayer=a;return r})}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),t==null?void 0:t.signal)}_ensureQueryEngine(){return this._queryEngine||(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=A(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new H({layerView:this,priority:I.FEATURE_QUERY_ENGINE,spatialIndex:new U({featureAdapter:new G({objectIdField:this.layer.objectIdField,attributeStorageInfo:this.layer.attributeStorageInfo,getFeatureExtent:e}),toArray:()=>{const t=new Array;return this._forAllFeatures((r,a,l)=>(t.push({id:r,index:a,meta:l}),Q.CONTINUE),null,p.ALL_IN_CLIPPING_AREA),t},forAllFeatures:(t,r)=>this._forAllFeatures((a,l,F)=>t({id:a,index:l,meta:F}),r,p.ALL_IN_CLIPPING_AREA),getFeatureExtent:e,sourceSpatialReference:w(this.layer),viewSpatialReference:this.view.spatialReference})})}highlight(e){const t=this._highlights;if(e instanceof u){const{set:r,handle:a}=t.acquireSet();return this.queryObjectIds(e).then(l=>t.setFeatureIds(r,l)),a}return super.highlight(e)}createInteractiveEditSession(e){return D(this.attributeEditingContext,e)}_createLayerGraphic(e){const t=new b(null,null,e);return t.layer=this.layer,t.sourceLayer=this.layer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}getFilters(){const e=super.getFilters(),t=this.excludeObjectIdsSorted;return o(t)&&e.push(r=>E(t,!1,r)),this.floorFilterClause&&this.addSqlFilter(e,this.floorFilterClause,this.logError),this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),o(this.viewFilter)&&this.viewFilter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}isUpdating(){return super.isUpdating()||this.layerFilterUpdating}_ensureQuery(e){return this._addDefinitionExpressionToQuery(d(e)?this.createQuery():u.from(e))}get attributeEditingContext(){return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:this._getObjectIdField(),forEachNode:e=>this._forAllNodes(t=>o(t)?e(t.node,t.featureIds):null),attributeStorageInfo:this.i3slayer.attributeStorageInfo,attributeOverrides:this.attributeOverrides,getAttributeData:e=>this.getAttributeData(e),setAttributeData:(e,t)=>this.setAttributeData(e,t),clearMemCache:()=>this.clearMemCache()}}_handleEdits(e){R(this.attributeEditingContext,e)}get hasGeometryFilter(){const e=this.viewFilter;return o(e)&&o(e.parsedGeometry)}computeNodeFiltering(e){const t=this.viewFilter;return d(t)||t.isMBSGeometryVisible(e,this.view.spatialReference,this._controller.crsIndex)?g.Unmodified:g.Culled}};s([n({aliasOf:"layer"})],i.prototype,"i3slayer",void 0),s([n(C)],i.prototype,"updatingProgress",void 0),s([n({type:x})],i.prototype,"filter",null),s([n({readOnly:!0})],i.prototype,"viewFilter",null),s([n(f.requiredFields)],i.prototype,"requiredFields",null),s([n(f.availableFields)],i.prototype,"availableFields",void 0),s([n()],i.prototype,"fieldsHelper",void 0),s([n()],i.prototype,"floorFilterClause",null),s([n()],i.prototype,"excludeObjectIdsSorted",null),s([n({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.3dObject.lodFactor"})],i.prototype,"lodFactor",void 0),s([n({readOnly:!0,aliasOf:"_controller.updatingProgress"})],i.prototype,"updatingProgressValue",void 0),i=s([S("esri.views.3d.layers.SceneLayerView3D")],i);const ge=i;export{ge as default};
