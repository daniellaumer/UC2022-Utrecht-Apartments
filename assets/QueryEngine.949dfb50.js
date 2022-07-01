var pe=Object.defineProperty,ye=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var H=(n,e,t)=>e in n?pe(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,q=(n,e)=>{for(var t in e||(e={}))me.call(e,t)&&H(n,t,e[t]);if(V)for(var t of V(e))ge.call(e,t)&&H(n,t,e[t]);return n},J=(n,e)=>ye(n,de(e));import{hq as xe,hr as Se,hs as j,ht as L,a9 as W,hu as T,hv as _e,hw as we,Y as _,hx as k,bY as Re,hy as Ie,au as oe,hz as Fe,fm as Qe,aJ as Y,z as K,t as S,fA as be,fB as Ae,hA as Ee,dv as M,hB as b,bI as X,ca as ee,r as R,aH as te,bG as ie,br as ve,bq as $e,hC as Ge,gB as se,hD as Te,bc as qe,b9 as Pe}from"./vendor.4451b4ce.js";import{J as G,f as C,x as O,U as A,v as d,g as v,E as Ce,P as re,l as je,M as ke,c as $,o as Be,a as ze,b as Me}from"./QueryEngineResult.bb7bb36b.js";import{t as Oe}from"./QueryEngineCapabilities.c2e9875c.js";function Ne(n){return n==="mesh"?xe:Se(n)}function ue(n,e){return n?e?4:3:e?3:2}function Ze(n,e,t,i){return le(n,e,t,i.coords[0],i.coords[1])}function De(n,e,t,i,s,r){const a=ue(s,r),{coords:o,lengths:u}=i;if(!u)return!1;for(let l=0,c=0;l<u.length;l++,c+=a)if(!le(n,e,t,o[c],o[c+1]))return!1;return!0}function le(n,e,t,i,s){if(!n)return!1;const r=ue(e,t),{coords:a,lengths:o}=n;let u=!1,l=0;for(const c of o)u=Ue(u,a,r,l,c,i,s),l+=c*r;return u}function Ue(n,e,t,i,s,r,a){let o=n,u=i;for(let l=i,c=i+s*t;l<c;l+=t){u=l+t,u===c&&(u=i);const h=e[l],p=e[l+1],m=e[u],g=e[u+1];(p<a&&g>=a||g<a&&p>=a)&&h+(a-p)/(g-p)*(m-h)<r&&(o=!o)}return o}const N="feature-store:unsupported-query",Ve={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},D={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function He(n){return D.spatialRelationship[n]===!0}function Je(n){return D.queryGeometry[Re(n)]===!0}function Le(n){return D.layerGeometry[n]===!0}function We(){return import("./geometryEngineJSON.2762c1dd.js")}function P(n,e,t,i,s){if(j(e)&&t==="esriGeometryPoint"&&(n==="esriSpatialRelIntersects"||n==="esriSpatialRelContains")){const r=L(new W,e,!1,!1);return Promise.resolve(a=>Ze(r,!1,!1,a))}if(j(e)&&t==="esriGeometryMultipoint"){const r=L(new W,e,!1,!1);if(n==="esriSpatialRelContains")return Promise.resolve(a=>De(r,!1,!1,a,i,s))}if(T(e)&&t==="esriGeometryPoint"&&(n==="esriSpatialRelIntersects"||n==="esriSpatialRelContains"))return Promise.resolve(r=>_e(e,G(t,i,s,r)));if(T(e)&&t==="esriGeometryMultipoint"&&n==="esriSpatialRelContains")return Promise.resolve(r=>we(e,G(t,i,s,r)));if(T(e)&&n==="esriSpatialRelIntersects"){const r=Ne(t);return Promise.resolve(a=>r(e,G(t,i,s,a)))}return We().then(r=>{const a=r[Ve[n]].bind(null,e.spatialReference,e);return o=>a(G(t,i,s,o))})}async function ae(n,e,t){const{spatialRel:i,geometry:s}=n;if(s){if(!He(i))throw new _(N,"Unsupported query spatial relationship",{query:n});if(k(s.spatialReference)&&k(t)){if(!Je(s))throw new _(N,"Unsupported query geometry type",{query:n});if(!Le(e))throw new _(N,"Unsupported layer geometry type",{query:n});if(n.outSR)return C(n.geometry&&n.geometry.spatialReference,n.outSR)}}}function ne(n){if(T(n))return!0;if(j(n)){for(const e of n.rings)if(e.length!==5||e[0][0]!==e[1][0]||e[0][0]!==e[4][0]||e[2][0]!==e[3][0]||e[0][1]!==e[3][1]||e[0][1]!==e[4][1]||e[1][1]!==e[2][1])return!1;return!0}return!1}function Ye(n,e){if(!n)return null;const t=e.featureAdapter,{startTimeField:i,endTimeField:s}=n;let r=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(i&&s)e.forEach(o=>{const u=t.getAttribute(o,i),l=t.getAttribute(o,s);u==null||isNaN(u)||(r=Math.min(r,u)),l==null||isNaN(l)||(a=Math.max(a,l))});else{const o=i||s;e.forEach(u=>{const l=t.getAttribute(u,o);l==null||isNaN(l)||(r=Math.min(r,l),a=Math.max(a,l))})}return{start:r,end:a}}function Ke(n,e,t){if(!e||!n)return null;const{startTimeField:i,endTimeField:s}=n;if(!i&&!s)return null;const{start:r,end:a}=e;return r===null&&a===null?null:r===void 0&&a===void 0?tt():i&&s?Xe(t,i,s,r,a):et(t,i||s,r,a)}function Xe(n,e,t,i,s){return i!=null&&s!=null?r=>{const a=n.getAttribute(r,e),o=n.getAttribute(r,t);return(a==null||a<=s)&&(o==null||o>=i)}:i!=null?r=>{const a=n.getAttribute(r,t);return a==null||a>=i}:s!=null?r=>{const a=n.getAttribute(r,e);return a==null||a<=s}:void 0}function et(n,e,t,i){return t!=null&&i!=null&&t===i?s=>n.getAttribute(s,e)===t:t!=null&&i!=null?s=>{const r=n.getAttribute(s,e);return r>=t&&r<=i}:t!=null?s=>n.getAttribute(s,e)>=t:i!=null?s=>n.getAttribute(s,e)<=i:void 0}function tt(){return()=>!1}function it(n){return n.every(e=>e.statisticType!=="exceedslimit")}const F="feature-store:unsupported-query",st=new Ie(2e6);let rt=0;class ct{constructor(e){this.capabilities={query:Oe},this.geometryType=e.geometryType,this.hasM=e.hasM,this.hasZ=e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",()=>this.clearCache()),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new Fe(rt+++"$$",st)),this.fieldsIndex=new Qe(e.fields),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=Y(this._frameTask),this.clearCache(),K(this._geometryQueryCache),this._changeHandle=Y(this._changeHandle),K(this.fieldsIndex)}get featureAdapter(){return this.featureStore.featureAdapter}get fullExtent(){const e=this.featureStore.fullBounds;return S(e)?null:{xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:O(this.spatialReference)}}get timeExtent(){return this.timeInfo?(this._timeExtent||(this._timeExtent=Ye(this.timeInfo,this.featureStore)),this._timeExtent):null}clearCache(){var e;(e=this._geometryQueryCache)==null||e.clear(),this._allItems=null,this._timeExtent=null}async executeQuery(e,t){try{return(await this._executeQuery(e,{},t)).createQueryResponse()}catch(i){if(i!==A)throw i;return new d([],e,this).createQueryResponse()}}async executeQueryForCount(e={},t){try{return(await this._executeQuery(e,{returnGeometry:!1,returnCentroid:!1,outSR:null},t)).createQueryResponseForCount()}catch(i){if(i!==A)throw i;return 0}}async executeQueryForExtent(e,t){const i=e.outSR;try{const s=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),r=s.size;if(!r)return{count:0,extent:null};be(w,Ae),this.featureStore.forEachBounds(s.items,u=>Ee(w,u),at);const a={xmin:w[0],ymin:w[1],xmax:w[3],ymax:w[4],spatialReference:O(this.spatialReference)};this.hasZ&&isFinite(w[2])&&isFinite(w[5])&&(a.zmin=w[2],a.zmax=w[5]);const o=v(a,s.spatialReference,i);if(o.spatialReference=O(i||this.spatialReference),o.xmax-o.xmin==0){const u=M(o.spatialReference);o.xmin-=u,o.xmax+=u}if(o.ymax-o.ymin==0){const u=M(o.spatialReference);o.ymin-=u,o.ymax+=u}if(this.hasZ&&o.zmin!=null&&o.zmax!=null&&o.zmax-o.zmin==0){const u=M(o.spatialReference);o.zmin-=u,o.zmax+=u}return{count:r,extent:o}}catch(s){if(s===A)return{count:0,extent:null};throw s}}async executeQueryForIds(e,t){return this.executeQueryForIdSet(e,t).then(i=>Array.from(i))}async executeQueryForIdSet(e,t){try{const i=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},t),s=i.items,r=new Set;return await this._reschedule(()=>{for(const a of s)r.add(i.featureAdapter.getObjectId(a))},t),r}catch(i){if(i===A)return new Set;throw i}}async executeQueryForSnapping(e,t){const{point:i,distance:s,types:r}=e;if(r===Ce.NONE)return{candidates:[]};const a=await this._reschedule(()=>this._checkQuerySupport(e.query),t),o=!b(i.spatialReference,this.spatialReference);o&&await C(i.spatialReference,this.spatialReference);const u=typeof s=="number"?s:s.x,l=typeof s=="number"?s:s.y,c={xmin:i.x-u,xmax:i.x+u,ymin:i.y-l,ymax:i.y+l,spatialReference:i.spatialReference},h=o?v(c,this.spatialReference):c;if(!h)return{candidates:[]};const p=(await X(ee(i),null,{signal:t}))[0],m=(await X(ee(h),null,{signal:t}))[0];if(S(p)||S(m))return{candidates:[]};const g=new d(this._searchFeatures(this._getQueryBBoxes(m.toJSON())),a,this);await this._reschedule(()=>this._executeObjectIdsQuery(g),t),await this._reschedule(()=>this._executeTimeQuery(g),t),await this._reschedule(()=>this._executeAttributesQuery(g),t);const f=p.toJSON(),I=o?v(f,this.spatialReference):f,x=o?Math.max(h.xmax-h.xmin,h.ymax-h.ymin)/2:s;return g.createSnappingResponse(J(q({},e),{point:I,distance:x}),i.spatialReference)}async executeQueryForLatestObservations(e,t){if(!this.timeInfo||!this.timeInfo.trackIdField)throw new _(F,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});try{const i=await this._executeQuery(e,{},t);return await this._reschedule(()=>this._filterLatest(i),t),i.createQueryResponse()}catch(i){if(i!==A)throw i;return new d([],e,this).createQueryResponse()}}async executeQueryForSummaryStatistics(e={},t,i){const{field:s,normalizationField:r,valueExpression:a}=t;return(await this._getQueryEngineResultForStats(e,{field:s,normalizationField:r,valueExpression:a},i)).createSummaryStatisticsResponse(t)}async executeQueryForUniqueValues(e={},t,i){const{field:s,valueExpression:r}=t;return(await this._getQueryEngineResultForStats(e,{field:s,valueExpression:r},i)).createUniqueValuesResponse(t)}async executeQueryForClassBreaks(e={},t,i){const{field:s,normalizationField:r,valueExpression:a}=t;return(await this._getQueryEngineResultForStats(e,{field:s,normalizationField:r,valueExpression:a},i)).createClassBreaksResponse(t)}async executeQueryForHistogram(e={},t,i){const{field:s,normalizationField:r,valueExpression:a}=t;return(await this._getQueryEngineResultForStats(e,{field:s,normalizationField:r,valueExpression:a},i)).createHistogramResponse(t)}async _schedule(e,t){return R(this._frameTask)?this._frameTask.schedule(e,t):e(te)}async _reschedule(e,t){return R(this._frameTask)?this._frameTask.reschedule(e,t):e(te)}_getAll(e){return S(this._allItems)&&(this._allItems=this.featureStore.toArray()),new d(this._allItems,e,this)}async _executeQuery(e,t,i){e=ie(e),e=await this._schedule(()=>re(e,this.definitionExpression,this.spatialReference),i),e=await this._reschedule(()=>this._checkQuerySupport(e),i),e=q(q({},e),t);const s=await this._reschedule(()=>this._executeSceneFilterQuery(e,i),i),r=await this._reschedule(()=>this._executeGeometryQuery(e,s,i),i);return await this._reschedule(()=>this._executeAggregateIdsQuery(r),i),await this._reschedule(()=>this._executeObjectIdsQuery(r),i),await this._reschedule(()=>this._executeTimeQuery(r),i),await this._reschedule(()=>this._executeAttributesQuery(r),i),r}async _executeSceneFilterQuery(e,t){if(S(e.sceneFilter))return null;const{outSR:i,returnGeometry:s,returnCentroid:r}=e,a=this.featureStore.featureSpatialReference,o=e.sceneFilter.geometry,u=S(a)||b(a,o.spatialReference)?o:v(o,a);if(!u)return null;const l=s||r,c=k(i)&&!b(this.spatialReference,i)&&l?async f=>this._project(f,i):f=>f,h=this.featureAdapter,p=this._searchFeatures(this._getQueryBBoxes(u));if(e.sceneFilter.spatialRelationship==="disjoint"){if(!p.length)return null;const f=new Set;for(const E of p)f.add(h.getObjectId(E));const I=await this._reschedule(()=>this.featureStore.toArray(),t),x=await this._reschedule(async()=>{const E=await P("esriSpatialRelDisjoint",u,this.geometryType,this.hasZ,this.hasM),B=Q=>!f.has(h.getObjectId(Q))||E(h.getGeometry(Q)),y=await this._runSpatialFilter(I,B,t);return new d(y,e,this)},t);return c(x)}if(!p.length)return new d([],e,this);if(this._canExecuteSinglePass(u,e))return c(new d(p,e,this));const m=await P("esriSpatialRelContains",u,this.geometryType,this.hasZ,this.hasM),g=await this._runSpatialFilter(p,f=>m(h.getGeometry(f)),t);return c(new d(g,e,this))}async _executeGeometryQuery(e,t,i){if(R(t)&&t.items.length===0)return t;e=R(t)?t.query:e;const{geometry:s,outSR:r,spatialRel:a,returnGeometry:o,returnCentroid:u}=e,l=this.featureStore.featureSpatialReference,c=!s||S(l)||b(l,s.spatialReference)?s:v(s,l),h=o||u,p=k(r)&&!b(this.spatialReference,r),m=this._geometryQueryCache&&S(t)?p&&h?JSON.stringify({originalFilterGeometry:s,spatialRelationship:a,outSpatialReference:r}):JSON.stringify({originalFilterGeometry:s,spatialRelationship:a}):null,g=m?this._geometryQueryCache.get(m):null;if(R(g))return new d(g,e,this);const f=async y=>(p&&h&&await this._project(y,r),m&&this._geometryQueryCache.put(m,y.items,y.items.length+1),y);if(!c)return f(R(t)?t:this._getAll(e));const I=this.featureAdapter;let x=this._searchFeatures(this._getQueryBBoxes(s));if(a==="esriSpatialRelDisjoint"){if(!x.length)return f(R(t)?t:this._getAll(e));const y=new Set;for(const z of x)y.add(I.getObjectId(z));const Q=R(t)?t.items:await this._reschedule(()=>this.featureStore.toArray(),i),ce=await this._reschedule(async()=>{const z=await P(a,c,this.geometryType,this.hasZ,this.hasM),he=U=>!y.has(I.getObjectId(U))||z(I.getGeometry(U)),fe=await this._runSpatialFilter(Q,he,i);return new d(fe,e,this)},i);return f(ce)}if(R(t)){const y=new ve;x=x.filter(Q=>$e(t.items,Q,t.items.length,y)>=0)}if(!x.length){const y=new d([],e,this);return m&&this._geometryQueryCache.put(m,y.items,1),y}if(this._canExecuteSinglePass(c,e))return f(new d(x,e,this));const E=await P(a,c,this.geometryType,this.hasZ,this.hasM),B=await this._runSpatialFilter(x,y=>E(I.getGeometry(y)),i);return f(new d(B,e,this))}_executeAggregateIdsQuery(e){if(e.items.length===0||!e.query.aggregateIds||!e.query.aggregateIds.length||S(this.aggregateAdapter))return;const t=new Set;for(const s of e.query.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(s).forEach(r=>t.add(r));const i=this.featureAdapter.getObjectId;e.items=e.items.filter(s=>t.has(i(s)))}_executeObjectIdsQuery(e){if(e.items.length===0||!e.query.objectIds||!e.query.objectIds.length)return;const t=new Set(e.query.objectIds),i=this.featureAdapter.getObjectId;e.items=e.items.filter(s=>t.has(i(s)))}_executeTimeQuery(e){if(e.items.length===0)return;const t=Ke(this.timeInfo,e.query.timeExtent,this.featureAdapter);S(t)||(e.items=e.items.filter(t))}_executeAttributesQuery(e){if(e.items.length===0)return;const t=je(e.query.where,this.fieldsIndex);if(t){if(!t.isStandardized)throw new TypeError("Where clause is not standardized");e.items=e.items.filter(i=>t.testFeature(i,this.featureAdapter))}}async _runSpatialFilter(e,t,i){if(!t)return e;if(S(this._frameTask))return e.filter(o=>t(o));let s=0;const r=new Array,a=async o=>{for(;s<e.length;){const u=e[s++];t(u)&&(r.push(u),o.madeProgress()),o.done&&await this._reschedule(l=>a(l),i)}};return this._reschedule(o=>a(o),i).then(()=>r)}_filterLatest(e){const{trackIdField:t,startTimeField:i,endTimeField:s}=this.timeInfo,r=s||i,a=new Map,o=this.featureAdapter.getAttribute;for(const u of e.items){const l=o(u,t),c=o(u,r),h=a.get(l);(!h||c>o(h,r))&&a.set(l,u)}e.items=Array.from(a.values())}_canExecuteSinglePass(e,t){const{spatialRel:i}=t;return ne(e)&&(i==="esriSpatialRelEnvelopeIntersects"||this.geometryType==="esriGeometryPoint"&&(i==="esriSpatialRelIntersects"||i==="esriSpatialRelContains"||i==="esriSpatialRelWithin"))}async _project(e,t){if(!t||b(this.spatialReference,t))return e;const i=this.featureAdapter,s=await ke(e.items.map(r=>G(this.geometryType,this.hasZ,this.hasM,i.getGeometry(r))),this.spatialReference,t);return e.items=s.map((r,a)=>i.cloneWithGeometry(e.items[a],Ge(r,this.hasZ,this.hasM))),e}_getQueryBBoxes(e){if(ne(e)){if(T(e))return[se(e.xmin,e.ymin,e.xmax,e.ymax)];if(j(e))return e.rings.map(t=>se(Math.min(t[0][0],t[2][0]),Math.min(t[0][1],t[2][1]),Math.max(t[0][0],t[2][0]),Math.max(t[0][1],t[2][1])))}return[Te(qe(),e)]}_searchFeatures(e){for(const i of e)this.featureStore.forEachInBounds(i,s=>Z.add(s));const t=Array.from(Z.values());return Z.clear(),t}async _checkStatisticsSupport(e,t){if(e.distance<0||e.geometryPrecision!=null||e.multipatchOption||e.pixelSize||e.relationParam||e.text||e.outStatistics||e.groupByFieldsForStatistics||e.having||e.orderByFields)throw new _(F,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),Promise.all([this._checkStatisticsParamsSupport(t),ae(e,this.geometryType,this.spatialReference),C(this.spatialReference,e.outSR)]).then(()=>e)}async _checkStatisticsParamsSupport(e){let t=[];if(e.valueExpression){const{arcadeUtils:i}=await Pe();t=i.extractFieldNames(e.valueExpression)}if(e.field&&t.push(e.field),e.normalizationField&&t.push(e.normalizationField),!t.length)throw new _(F,"params should have at least a field or valueExpression",{params:e});$(this.fieldsIndex,t,"params contains missing fields")}async _checkQuerySupport(e){if(e.distance<0||e.geometryPrecision!=null||e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new _(F,"Unsupported query options",{query:e});return this._checkAttributesQuerySupport(e),this._checkStatisticsQuerySupport(e),Promise.all([ae(e,this.geometryType,this.spatialReference),C(this.spatialReference,e.outSR)]).then(()=>e)}_checkAttributesQuerySupport(e){const{outFields:t,orderByFields:i,returnDistinctValues:s,outStatistics:r}=e,a=r?r.map(o=>o.outStatisticFieldName&&o.outStatisticFieldName.toLowerCase()).filter(Boolean):[];if(i&&i.length>0){const o=" asc",u=" desc",l=i.map(c=>{const h=c.toLowerCase();return h.includes(o)?h.split(o)[0]:h.includes(u)?h.split(u)[0]:c}).filter(c=>!a.includes(c));$(this.fieldsIndex,l,"orderByFields contains missing fields")}if(t&&t.length>0)$(this.fieldsIndex,t,"outFields contains missing fields");else if(s)throw new _(F,"outFields should be specified for returnDistinctValues",{query:e});Be(this.fieldsIndex,e.where)}_checkStatisticsQuerySupport(e){const{outStatistics:t,groupByFieldsForStatistics:i,having:s}=e,r=i&&i.length,a=t&&t.length;if(s){if(!r||!a)throw new _(F,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});ze(this.fieldsIndex,s,t)}if(a){if(!it(t))return;const o=t.map(u=>u.onStatisticField).filter(Boolean);$(this.fieldsIndex,o,"onStatisticFields contains missing fields"),r&&$(this.fieldsIndex,i,"groupByFieldsForStatistics contains missing fields");for(const u of t){const{onStatisticField:l,statisticType:c}=u;if((c==="percentile_disc"||c==="percentile_cont")&&"statisticParameters"in u){const{statisticParameters:h}=u;if(!h)throw new _(F,"statisticParamters should be set for percentile type",{definition:u,query:e})}else if(c!=="count"&&l&&Me(l,this.fieldsIndex))throw new _(F,"outStatistics contains non-numeric fields",{definition:u,query:e})}}}async _getQueryEngineResultForStats(e,t,i){e=ie(e);try{e=await this._schedule(()=>re(e,this.definitionExpression,this.spatialReference),i),e=await this._reschedule(()=>this._checkStatisticsSupport(e,t),i);const s=await this._reschedule(()=>this._executeSceneFilterQuery(e,i),i),r=await this._reschedule(()=>this._executeGeometryQuery(e,s,i),i);return await this._reschedule(()=>this._executeAggregateIdsQuery(r),i),await this._reschedule(()=>this._executeObjectIdsQuery(r),i),await this._reschedule(()=>this._executeTimeQuery(r),i),await this._reschedule(()=>this._executeAttributesQuery(r),i),r}catch(s){if(s!==A)throw s;return new d([],e,this)}}}const at=oe(),w=oe(),Z=new Set;export{ct as Y,Ke as n,P as v};