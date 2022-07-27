var v=Object.defineProperty,E=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var y=(i,e,s)=>e in i?v(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,m=(i,e)=>{for(var s in e||(e={}))O.call(e,s)&&y(i,s,e[s]);if(u)for(var s of u(e))g.call(e,s)&&y(i,s,e[s]);return i},T=(i,e)=>E(i,M(e));import{k as x,o as C,M as I,r as R,f3 as w,td as b}from"./vendor.5fba8a95.js";import{q as D}from"./enums.ba1e21c6.js";import{p as q,l as n}from"./tileUtils.ef198ae9.js";class o{constructor(e,s){this.offset=e,this.extent=s}}function z(i){const e=i.key,s=new Map,a=256,t=D,r=i.tileInfoView.tileInfo.isWrappable;return s.set(n(e,-1,-1,r).id,new o([-t,-t],[t-a,t-a,t,t])),s.set(n(e,0,-1,r).id,new o([0,-t],[0,t-a,t,t])),s.set(n(e,1,-1,r).id,new o([t,-t],[0,t-a,a,t])),s.set(n(e,-1,0,r).id,new o([-t,0],[t-a,0,t,t])),s.set(n(e,1,0,r).id,new o([t,0],[0,0,a,t])),s.set(n(e,-1,1,r).id,new o([-t,t],[t-a,0,t,a])),s.set(n(e,0,1,r).id,new o([0,t],[0,0,t,a])),s.set(n(e,1,1,r).id,new o([t,t],[0,0,a,a])),s}let c=class extends q{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(i,e){const s=e.schema.processors[0];s.type==="heatmap"&&I(this._schema,s)&&(i.mesh=!0,this._schema=s)}onTileUpdate(i){for(const e of i.removed)this._tileKeyToFeatureSets.delete(e.key.id)}onTileClear(i){const e={clear:!0};return this._tileKeyToFeatureSets.delete(i.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:i.id,data:e})}async onTileMessage(i,e,s){this._tileKeyToFeatureSets.has(i.key.id)||this._tileKeyToFeatureSets.set(i.key.id,new Map);const a=this._tileKeyToFeatureSets.get(i.key.id);if(R(e.addOrUpdate)&&e.addOrUpdate.hasFeatures&&a.set(e.addOrUpdate.instance,e),e.end){const t=[],r=z(i);this._tileKeyToFeatureSets.forEach((f,d)=>{if(d===i.key.id)f.forEach(l=>w(l.addOrUpdate,h=>t.push(h)));else if(r.has(d)){const l=r.get(d),[h,_]=l.offset;f.forEach(F=>w(F.addOrUpdate,S=>{const U=S.transform(h,_,1,1);t.push(U)}))}});const p=b(t,this._schema.mesh,512,512),k={tileKey:i.key.id,intensityInfo:p},K=[p.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",k,T(m({},s),{transferList:K}))}}onTileError(i,e,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:i.id,error:e},s)}};c=x([C("esri.views.2d.layers.features.processors.HeatmapProcessor")],c);const W=c;export{W as default};