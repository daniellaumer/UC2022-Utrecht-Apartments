import{cE as a,cF as p,V as d,bi as l,aP as u,k as r,n as i,o as y}from"./vendor.5fba8a95.js";let t=class extends a(p(d)){constructor(e){super(e),this.resourceInfo=null,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,o)=>{l(()=>{const s=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let n="Unsupported layer type";s&&(n+=" "+s),o(new u("layer:unsupported-layer-type",n,{layerType:s}))})}))}read(e,o){const s={resourceInfo:e};e.id!=null&&(s.id=e.id),e.title!=null&&(s.title=e.title),super.read(s,o)}write(e){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};r([i({readOnly:!0})],t.prototype,"resourceInfo",void 0),r([i({type:["show","hide"]})],t.prototype,"listMode",void 0),r([i({json:{read:!1},readOnly:!0,value:"unsupported"})],t.prototype,"type",void 0),t=r([y("esri.layers.UnsupportedLayer")],t);const h=t;export{h as default};
