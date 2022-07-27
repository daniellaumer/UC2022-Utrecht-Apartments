import{da as h,dP as l,d9 as f,cZ as F,dd as m,dc as s}from"./vendor.5fba8a95.js";import{n as d}from"./arcadeUtils.602ddc11.js";import{WhereClause as g}from"./WhereClause.7b12305d.js";async function c(t,e,u,n,a,r){if(n.length===1){if(f(n[0]))return d(t,n[0],s(n[1],-1));if(m(n[0]))return d(t,n[0].toArray(),s(n[1],-1))}else if(n.length===2){if(f(n[0]))return d(t,n[0],s(n[1],-1));if(m(n[0]))return d(t,n[0].toArray(),s(n[1],-1));if(l(n[0])){const o=await n[0].load(),i=await y(g.create(n[1],o.getFieldsIndex()),r,a);return n[0].calculateStatistic(t,i,s(n[2],1e3),e.abortSignal)}}else if(n.length===3&&l(n[0])){const o=await n[0].load(),i=await y(g.create(n[1],o.getFieldsIndex()),r,a);return n[0].calculateStatistic(t,i,s(n[2],1e3),e.abortSignal)}return d(t,n,-1)}async function y(t,e,u){const n=t.getVariables();if(n.length>0){const a=[];for(let o=0;o<n.length;o++){const i={name:n[o]};a.push(await e.evaluateIdentifier(u,i))}const r={};for(let o=0;o<n.length;o++)r[n[o]]=a[o];return t.parameters=r,t}return t}function p(t){t.mode==="async"&&(t.functions.stdev=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){return c("stdev",n,a,r,e,t)})},t.functions.variance=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){return c("variance",n,a,r,e,t)})},t.functions.average=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){return c("mean",n,a,r,e,t)})},t.functions.mean=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){return c("mean",n,a,r,e,t)})},t.functions.sum=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){return c("sum",n,a,r,e,t)})},t.functions.min=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){return c("min",n,a,r,e,t)})},t.functions.max=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){return c("max",n,a,r,e,t)})},t.functions.count=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){if(h(r,1,1),l(r[0]))return r[0].count(n.abortSignal);if(f(r[0])||F(r[0]))return r[0].length;if(m(r[0]))return r[0].length();throw new Error("Invalid Parameters for Count")})})}export{p as registerFunctions};