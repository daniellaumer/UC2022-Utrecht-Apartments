import{C as i,r as t,ar as s,lj as c,ln as l}from"./vendor.5fba8a95.js";function d(n,r,o,a=!1){const e=l(n,r);return i(e)?null:(e.hasZ&&!a||!t(o)||(e.z=s(c(o,e),0)),e)}function f(n,r,o){o.warnOnce(`Failed to project analysis geometry (id: '${n.id}'), projection from spatial reference (wkid: '${r.wkid}') to view spatial reference is not supported. Projection may be possible after calling projection.load().`)}export{f as a,d as n};
