"use strict";(self.webpackChunkobstacle_component=self.webpackChunkobstacle_component||[]).push([[9895],{29895:(e,s,t)=>{t.r(s),t.d(s,{I3STreeDebugger:()=>y});var l=t(36663),i=(t(91957),t(61681)),o=t(81977),r=(t(7753),t(7283),t(40266)),n=t(24455),a=t(39100),h=t(6766),c=t(8909),p=t(90472),b=t(49939),u=t(89542);let y=class extends b.q{constructor(e){super(e)}getTiles(){const e=this.lv.getVisibleNodes(),s=this.view.renderSpatialReference,t=this.nodeSR;return e.map((e=>function(e,s,t){const l=e.serviceObb;if((0,i.Wi)(l)||(0,i.Wi)(s))return null;(0,n.D)(d,l.quaternion),(0,h.c)(g,l.center),(0,p.CM)(g,t,0,g,s,0,1),d[12]=g[0],d[13]=g[1],d[14]=g[2];const o=[[],[],[]];(0,h.c)(g,l.halfSize),(0,h.m)(g,g,d),(0,p.CM)(g,s,0,g,t,0,1),o[0].push([g[0],g[1]]),(0,h.c)(g,l.halfSize),g[0]=-g[0],(0,h.m)(g,g,d),(0,p.CM)(g,s,0,g,t,0,1),o[0].push([g[0],g[1]]),(0,h.c)(g,l.halfSize),g[0]=-g[0],g[1]=-g[1],(0,h.m)(g,g,d),(0,p.CM)(g,s,0,g,t,0,1),o[0].push([g[0],g[1]]),(0,h.c)(g,l.halfSize),g[1]=-g[1],(0,h.m)(g,g,d),(0,p.CM)(g,s,0,g,t,0,1),o[0].push([g[0],g[1]]),o[1].push(o[0][0]),o[1].push(o[0][1]),(0,h.c)(g,l.halfSize),g[0]=-g[0],g[2]=-g[2],(0,h.m)(g,g,d),(0,p.CM)(g,s,0,g,t,0,1),o[1].push([g[0],g[1]]),(0,h.c)(g,l.halfSize),g[2]=-g[2],(0,h.m)(g,g,d),(0,p.CM)(g,s,0,g,t,0,1),o[1].push([g[0],g[1]]),o[2].push(o[0][0]),o[2].push(o[0][3]),(0,h.c)(g,l.halfSize),g[1]=-g[1],g[2]=-g[2],(0,h.m)(g,g,d),(0,p.CM)(g,s,0,g,t,0,1),o[2].push([g[0],g[1]]),o[2].push(o[1][3]);const r=new u.Z({rings:o,spatialReference:t});return{lij:[e.level,e.childCount,0],label:e.id,geometry:r}}(e,s,t))).sort(((e,s)=>e.lij[0]===s.lij[0]?e.label>s.label?-1:1:e.lij[0]-s.lij[0]))}};(0,l._)([(0,o.Cb)({constructOnly:!0})],y.prototype,"lv",void 0),(0,l._)([(0,o.Cb)({constructOnly:!0})],y.prototype,"nodeSR",void 0),y=(0,l._)([(0,r.j)("esri.views.3d.layers.support.I3STreeDebugger")],y);const d=(0,a.c)(),g=(0,c.c)()},49939:(e,s,t)=>{t.d(s,{q:()=>g});var l=t(36663),i=t(30936),o=t(80085),r=t(53443),n=t(19431),a=t(61681),h=t(81977),c=(t(7753),t(7283),t(40266)),p=t(60378),b=t(43411),u=t(27624),y=t(69996);const d=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let g=class extends r.Z{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=d.map((e=>new b.Z({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}}))),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=this.getTiles(),s=new Array,t=new Set((this._labels.size,this._labels.keys()));e.forEach(((l,r)=>{const h=l.lij.toString();t.delete(h);const c=l.lij[0],b=l.geometry;if(this.enablePolygons&&!this._polygons.has(h)){const e=new o.Z({geometry:b,symbol:this._symbols[c%this._symbols.length]});this._polygons.set(h,e),s.push(e)}if(this.enableLabels){const t=(e=>{if((0,a.pC)(e.label))return e.label;let s=e.lij.toString();return(0,a.pC)(e.loadPriority)&&(s+=` (${e.loadPriority})`),s})(l),c=r/(e.length-1),d=(0,n.t7)(0,200,c),g=(0,n.t7)(20,6,c)/.75,_=(0,a.pC)(l.loadPriority)&&l.loadPriority>=e.length,m=new i.Z([d,_?0:d,_?0:d]),w="3d"===this.view.type?()=>new p.Z({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new y.Z({text:t,halo:{color:"white",size:1/.75},material:{color:m},size:g})]}):()=>new u.Z({text:t,haloColor:"white",haloSize:1/.75,color:m,size:g});if(this._labels.has(h)){const e=this._labels.get(h),s=w();((0,a.Wi)(e.symbol)||JSON.stringify(s)!==JSON.stringify(e.symbol))&&(e.symbol=s)}else{const e=new o.Z({geometry:b.extent.center,symbol:w()});this._labels.set(h,e),s.push(e)}}}));const l=new Array;t.forEach((e=>{this._polygons.has(e)&&(l.push(this._polygons.get(e)),this._polygons.delete(e)),this._labels.has(e)&&(l.push(this._labels.get(e)),this._labels.delete(e))})),this.view.graphics.removeMany(l),this.view.graphics.addMany(s)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};(0,l._)([(0,h.Cb)({constructOnly:!0})],g.prototype,"view",void 0),(0,l._)([(0,h.Cb)({readOnly:!0})],g.prototype,"updating",void 0),(0,l._)([(0,h.Cb)()],g.prototype,"enabled",null),g=(0,l._)([(0,c.j)("esri.views.support.TileTreeDebugger")],g)}}]);