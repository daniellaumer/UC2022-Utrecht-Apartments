import{jc as a,i as o,q as s,C as n,k as e,n as r,e0 as d,o as l}from"./vendor.5fba8a95.js";import{p}from"./I3SMeshView3D.ece2f166.js";import{n as c}from"./LayerView3D.40797f9b.js";import{u as h}from"./LayerView.dee8c675.js";import"./I3SAttributeOverrides.4edb8c1d.js";import"./I3SNode.d13a68db.js";import"./Graphics3DScaleVisibility.fa0d5632.js";import"./optimizedFeatureQueryEngineAdapter.9bc24d47.js";import"./centroid.f6cbbffc.js";import"./PooledRBush.1e9643d9.js";import"./quickselect.03306040.js";import"./SceneLayerWorker.5b164f93.js";import"./attributeUtils.99d8ee08.js";const m=.2;let t=class extends p(c(h)){constructor(){super(...arguments),this.type="integrated-mesh-3d",this.lodFactor=1,this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this.drapeTargetType=a.WithoutRasterImage}get progressiveLoadFactor(){return this.lodFactor>=1?m:1}initialize(){this.updatingHandles.add(()=>this.layer.modifications,()=>this._loadModifications(),o),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){const i=new s;return i.layer=this.layer,i.sourceLayer=this.layer,i}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.handles.remove("modifications"),n(this.layer.modifications))return void(this._modifications=[]);const i=this.layer.modifications;this.handles.add(this.updatingHandles.addOnCollectionChange(()=>i,()=>this._modifications=i.toArray(),o),"modifications")}};e([r()],t.prototype,"layer",void 0),e([r({aliasOf:"layer"})],t.prototype,"i3slayer",void 0),e([r(d)],t.prototype,"updatingProgress",void 0),e([r({readOnly:!0,aliasOf:"_controller.updatingProgress"})],t.prototype,"updatingProgressValue",void 0),e([r({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.integratedMesh.lodFactor"})],t.prototype,"lodFactor",void 0),e([r({readOnly:!0})],t.prototype,"progressiveLoadFactor",null),t=e([l("esri.views.3d.layers.SceneLayerView3D")],t);const C=t;export{C as default};