import{L as U,s as L,K as O,A as B,f as z,m as A,x,a as M,b as S,P as N,j as F,S as n,c as o,d as p,N as k,e as D,g as r,l as s,B as R}from"./vendor.5fba8a95.js";const T=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))E(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const m of t.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&E(m)}).observe(document,{childList:!0,subtree:!0});function I(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function E(e){if(e.ep)return;e.ep=!0;const t=I(e);fetch(e.href,t)}};T();const i=new U({basemap:"satellite",ground:"world-elevation"}),g=new L({url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",title:"OpenStreetMap Buildings",visible:!1,legendEnabled:!1,excludeObjectIds:[22244537,1062063544,2372497640,2777335364]});i.add(g);const y=new L({url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Trees_Realistic_v1/SceneServer",title:"OpenStreetMap Trees",visible:!1,legendEnabled:!1});i.add(y);const a=new O({url:"https://services2.arcgis.com/cFEFS0EWrhfDeVw9/arcgis/rest/services/Utrecht_Apartments_Data_WFL1/FeatureServer",title:"Utrecht Apartments",elevationInfo:{mode:"absolute-height"}});i.add(a);const h=new B({url:"https://tiles.arcgis.com/tiles/cFEFS0EWrhfDeVw9/arcgis/rest/services/Utrecht_Buildings_2021/SceneServer",title:"Integrated Mesh Utrecht"});i.add(h);const l=new z({container:"viewDiv",map:i,camera:{position:{longitude:5.10323513,latitude:52.09099549,z:244.73095},heading:109.76,tilt:61.83},environment:{atmosphere:{quality:"high"}},qualityProfile:"high"});l.ui.add(new A({view:l}),"top-left");l.ui.add(new x({view:l,content:new M({view:l}),expanded:!0}),"top-right");l.ui.add("visualization","bottom-right");l.ui.add("renderers","bottom-right");l.ui.add("filter","bottom-right");let f=document.getElementById("realistic"),v=document.getElementById("schematic");f.addEventListener("click",()=>{f.appearance="solid",v.appearance="outline",g.visible=!1,y.visible=!1,h.visible=!0,a.opacity=.65,i.basemap=S.fromId("satellite")});v.addEventListener("click",()=>{v.appearance="solid",f.appearance="outline",g.visible=!0,y.visible=!0,h.visible=!1,a.opacity=1,i.basemap=S.fromId("topo-vector")});let _=new N({visualVariables:[new F({field:"FloorHeight_display",valueUnit:"meters"})],field:"SpaceUse",valueExpressionTitle:"Space Use",defaultLabel:"Other",uniqueValueInfos:[{label:"Office",symbol:new n({symbolLayers:[new o({size:12,material:{color:[115,178,255]},edges:new p({color:[0,0,0],size:1})})]}),value:"Office"},{label:"Residential",symbol:new n({symbolLayers:[new o({size:12,material:{color:[255,238,101]},edges:new p({color:[0,0,0],size:1})})]}),value:"MF Residential"},{label:"Hotel",symbol:new n({symbolLayers:[new o({size:12,material:{color:[189,126,190]},edges:new p({color:[0,0,0],size:1})})]}),value:"Hotel"},{label:"Retail",symbol:new n({symbolLayers:[new o({size:12,material:{color:[253,127,111]},edges:new p({color:[0,0,0],size:1})})]}),value:"Retail"}]}),V=new k({visualVariables:[new F({field:"FloorHeight_display",valueUnit:"meters"}),new D({field:"Floor_area",stops:[new r({value:1450,color:new s("#feedde")}),new r({value:1500,color:new s("#fdbe85")}),new r({value:1750,color:new s("#fd8d3c")}),new r({value:1900,color:new s("#e6550d")}),new r({value:2e3,color:new s("#a63603")}),new r({value:5e3,color:new s("#501900")})]})],defaultLabel:"Other",defaultSymbol:new n({symbolLayers:[new o({size:4,material:{color:[170,170,170]}})]})});a.popupTemplate=new R({title:"{Building_name}, Level {Level_}",content:[{type:"fields",fieldInfos:[{fieldName:"SpaceUse",label:"Space Use"},{fieldName:"For_lease",label:"Availability"},{fieldName:"Floor_area",label:"Floor area [m]"}]}]});a.renderer=_;a.opacity=.65;let w=document.getElementById("spaceUse"),b=document.getElementById("floorArea");w.addEventListener("click",()=>{w.appearance="solid",b.appearance="outline",a.renderer=_});b.addEventListener("click",()=>{b.appearance="solid",w.appearance="outline",a.renderer=V});let c=document.getElementById("availability"),d=document.getElementById("floorAreaFilter");c.addEventListener("click",()=>{c.appearance=="outline"?(c.appearance="solid",a.definitionExpression="For_lease = 'yes'"):(c.appearance="outline",a.definitionExpression=""),d.appearance="outline"});d.addEventListener("click",()=>{d.appearance=="outline"?(d.appearance="solid",a.definitionExpression="Floor_area < 1800"):(d.appearance="outline",a.definitionExpression=""),c.appearance="outline"});window.view=l;
