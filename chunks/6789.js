"use strict";(self.webpackChunkobstacle_component=self.webpackChunkobstacle_component||[]).push([[6789],{80657:(t,e,i)=>{i.d(e,{q:()=>a});var r,s,n,o={exports:{}};r=o,s=function(){function t(i,r,s,n,o){for(;n>s;){if(n-s>600){var a=n-s+1,l=r-s+1,p=Math.log(a),h=.5*Math.exp(2*p/3),c=.5*Math.sqrt(p*h*(a-h)/a)*(l-a/2<0?-1:1);t(i,r,Math.max(s,Math.floor(r-l*h/a+c)),Math.min(n,Math.floor(r+(a-l)*h/a+c)),o)}var u=i[r],d=s,g=n;for(e(i,s,r),o(i[n],u)>0&&e(i,s,n);d<g;){for(e(i,d,g),d++,g--;o(i[d],u)<0;)d++;for(;o(i[g],u)>0;)g--}0===o(i[s],u)?e(i,s,g):e(i,++g,n),g<=r&&(s=g+1),r<=g&&(n=g-1)}}function e(t,e,i){var r=t[e];t[e]=t[i],t[i]=r}function i(t,e){return t<e?-1:t>e?1:0}return function(e,r,s,n,o){t(e,r,s||0,n||e.length-1,o||i)}},void 0!==(n=s())&&(r.exports=n);const a=o.exports},33480:(t,e,i)=>{i.d(e,{Y:()=>n});var r=i(61681);function s(t,e){return t?e?4:3:e?3:2}function n(t,e,i,n,l){if((0,r.Wi)(e)||!e.lengths.length)return null;const p="upperLeft"===l?.originPosition?-1:1;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const h=t.coords,c=[],u=i?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:d,coords:g}=e,y=s(i,n);let b=0;for(const t of d){const e=o(u,g,b,t,i,n,p);e&&c.push(e),b+=t*y}if(c.sort(((t,e)=>{let r=p*t[2]-p*e[2];return 0===r&&i&&(r=t[4]-e[4]),r})),c.length){let t=6*c[0][2];h[0]=c[0][0]/t,h[1]=c[0][1]/t,i&&(t=6*c[0][4],h[2]=0!==t?c[0][3]/t:0),(h[0]<u[0]||h[0]>u[1]||h[1]<u[2]||h[1]>u[3]||i&&(h[2]<u[4]||h[2]>u[5]))&&(h.length=0)}if(!h.length){const t=e.lengths[0]?a(g,0,d[0],i,n):null;if(!t)return null;h[0]=t[0],h[1]=t[1],i&&t.length>2&&(h[2]=t[2])}return t}function o(t,e,i,r,n,o,a=1){const l=s(n,o);let p=i,h=i+l,c=0,u=0,d=0,g=0,y=0;for(let i=0,s=r-1;i<s;i++,p+=l,h+=l){const i=e[p],r=e[p+1],s=e[p+2],o=e[h],a=e[h+1],l=e[h+2];let b=i*a-o*r;g+=b,c+=(i+o)*b,u+=(r+a)*b,n&&(b=i*l-o*s,d+=(s+l)*b,y+=b),i<t[0]&&(t[0]=i),i>t[1]&&(t[1]=i),r<t[2]&&(t[2]=r),r>t[3]&&(t[3]=r),n&&(s<t[4]&&(t[4]=s),s>t[5]&&(t[5]=s))}if(g*a>0&&(g*=-1),y*a>0&&(y*=-1),!g)return null;const b=[c,u,.5*g];return n&&(b[3]=d,b[4]=.5*y),b}function a(t,e,i,r,n){const o=s(r,n);let a=e,u=e+o,d=0,g=0,y=0,b=0;for(let e=0,s=i-1;e<s;e++,a+=o,u+=o){const e=t[a],i=t[a+1],s=t[a+2],n=t[u],o=t[u+1],C=t[u+2],f=r?p(e,i,s,n,o,C):l(e,i,n,o);if(f)if(d+=f,r){const t=c(e,i,s,n,o,C);g+=f*t[0],y+=f*t[1],b+=f*t[2]}else{const t=h(e,i,n,o);g+=f*t[0],y+=f*t[1]}}return d>0?r?[g/d,y/d,b/d]:[g/d,y/d]:i>0?r?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function l(t,e,i,r){const s=i-t,n=r-e;return Math.sqrt(s*s+n*n)}function p(t,e,i,r,s,n){const o=r-t,a=s-e,l=n-i;return Math.sqrt(o*o+a*a+l*l)}function h(t,e,i,r){return[t+.5*(i-t),e+.5*(r-e)]}function c(t,e,i,r,s,n){return[t+.5*(r-t),e+.5*(s-e),i+.5*(n-i)]}},70023:(t,e,i)=>{i.r(e),i.d(e,{default:()=>d});var r=i(36663),s=i(53443),n=i(86618),o=i(61681),a=i(81977),l=(i(7753),i(7283),i(40266)),p=i(95484);const h=t=>{let e=class extends((0,n.IG)(t)){constructor(){super(...arguments),this.graphics=null,this.renderer=null}};return(0,r._)([(0,a.Cb)()],e.prototype,"graphics",void 0),(0,r._)([(0,a.Cb)()],e.prototype,"renderer",void 0),(0,r._)([(0,a.Cb)()],e.prototype,"updating",void 0),(0,r._)([(0,a.Cb)()],e.prototype,"view",void 0),e=(0,r._)([(0,l.j)("esri.views.layers.GraphicsView")],e),e};let c=class extends(h(s.Z)){constructor(t){super(t),this.processor=null,this.slicePlaneEnabled=!1,this.layer=new u}initialize(){this._set("processor",new p.D({owner:this}))}destroy(){this._set("processor",(0,o.SC)(this.processor))}get graphics(){return this.view.graphics}get loadedGraphics(){return this.graphics}get updating(){return!!this.processor?.updating}get symbolUpdateType(){return this.processor.graphicsCore.symbolUpdateType}getHit(t){return this.processor.getHit(t)}whenGraphicBounds(t,e){return this.processor.whenGraphicBounds(t,e)}graphicChanged(t){this.processor.graphicsCore.graphicUpdateHandler(t)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}async queryGraphics(){return this.loadedGraphics}async fetchPopupFeatures(t,e){return(0,o.pC)(e)?e.clientGraphics:null}highlight(t){return this.processor.highlight(t)}maskOccludee(t){return this.processor.maskOccludee(t)}};(0,r._)([(0,a.Cb)({readOnly:!0})],c.prototype,"graphics",null),(0,r._)([(0,a.Cb)()],c.prototype,"loadedGraphics",null),(0,r._)([(0,a.Cb)({readOnly:!0})],c.prototype,"updating",null),(0,r._)([(0,a.Cb)({constructOnly:!0})],c.prototype,"view",void 0),(0,r._)([(0,a.Cb)()],c.prototype,"processor",void 0),(0,r._)([(0,a.Cb)({type:Boolean})],c.prototype,"slicePlaneEnabled",void 0),(0,r._)([(0,a.Cb)()],c.prototype,"layer",void 0),c=(0,r._)([(0,l.j)("esri.views.3d.layers.GraphicsView3D")],c);class u extends n.Ej{constructor(){super(),this.type="graphics-view-3d-dummy",this.id=this.uid}}const d=c},95484:(t,e,i)=>{i.d(e,{D:()=>S});var r=i(36663),s=i(80085),n=i(41831),o=i(53280),a=i(23148),l=i(61681),p=i(78668),h=i(76868),c=i(81977),u=(i(7753),i(7283),i(40266)),d=i(27281),g=i(38481),y=i(45043),b=i(67905),C=i(14136),f=i(43977),m=i(9423),_=i(83927),I=i(93694),v=i(93760),w=i(82404),E=i(31153),V=i(14923),G=i(70984);let S=class extends o.r{constructor(t){super(t),this.type="graphics-3d",this.graphicsCore=null,this.drapeSourceType=f.L.Features,this.scaleVisibilityEnabled=!1,this.frustumVisibilityEnabled=!1,this._suspendResumeExtent=null}initialize(){const{layer:t}=this,e="effectiveScaleRange"in t?t:null,i=this.scaleVisibilityEnabled&&(0,l.pC)(e),r=new _.w({owner:this,layer:this.owner.layer,preferredUpdatePolicy:G.jq.SYNC,graphicSymbolSupported:!0,componentFactories:{elevationAlignment:(t,e)=>new I.Z({graphicsCoreOwner:this,graphicsCore:t,queryGraphicUIDsInExtent:e,elevationProvider:this.view.elevationProvider}),scaleVisibility:i?(t,i)=>new E.Z({graphicsCoreOwner:this,layer:e,queryGraphicUIDsInExtent:i,graphicsCore:t,basemapTerrain:this.owner.view.basemapTerrain}):null,objectStates:t=>new w.d(t)}});if(this._set("graphicsCore",r),this.frustumVisibilityEnabled&&this._set("frustumVisibility",new v.Z({graphicsCoreOwner:this})),"fullOpacity"in this.owner){const t=this.owner;this.updatingHandles.add((()=>t.fullOpacity),(()=>this.graphicsCore.opacityChange()))}if("elevationInfo"in t){const e=t;this.updatingHandles.add((()=>e.elevationInfo),((t,e)=>{(0,d.Hg)(t,e)&&this.updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())}))}this._set("initializePromise",this._initializeAsync()),this.updatingHandles.addPromise(this.initializePromise)}async _initializeAsync(){try{await this.graphicsCore.initializePromise}catch(t){if((0,p.D_)(t))return;throw t}this.destroyed||(this.handles.add((0,h.YP)((()=>this.view.clippingArea),(()=>this._updateClippingExtent()),h.Z_)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("frustumVisibility",(0,l.SC)(this.frustumVisibility)),this._set("graphicsCore",(0,l.SC)(this.graphicsCore))}get layer(){return this.owner.layer}get view(){return this.owner.view}get scaleVisibility(){return this.graphicsCore?.scaleVisibility}get elevationAlignment(){return this.graphicsCore?.elevationAlignment}get objectStates(){return this.graphicsCore?.objectStates}get scaleVisibilitySuspended(){return!(!(0,l.pC)(this.scaleVisibility)||!this.scaleVisibility.suspended)}get frustumVisibilitySuspended(){return(0,l.pC)(this.frustumVisibility)&&this.frustumVisibility.suspended}get suspended(){return this.owner.suspended??!1}get updating(){return!!(this.graphicsCore?.updating||(0,l.pC)(this.scaleVisibility)&&this.scaleVisibility.updating||(0,l.pC)(this.frustumVisibility)&&this.frustumVisibility.updating||this.updatingHandles.updating)}get graphics3DGraphics(){return this.graphicsCore?.graphics3DGraphics}get graphics3DGraphicsByObjectID(){return this.graphicsCore?.graphics3DGraphicsByObjectID}get loadedGraphics(){return this.owner.loadedGraphics}get fullOpacity(){return this.owner.fullOpacity??1}get slicePlaneEnabled(){return this.owner.slicePlaneEnabled}get updatePolicy(){return this.owner.updatePolicy}notifyGraphicGeometryChanged(t){this.graphicsCore.notifyGraphicGeometryChanged(t)}notifyGraphicVisibilityChanged(t){this.graphicsCore.notifyGraphicVisibilityChanged(t)}getRenderingInfo(t,e,i){const r=(0,b.Kb)(t,{renderer:e,arcade:i});if((0,l.pC)(r)&&r.color){const t=r.color;t[0]=t[0]/255,t[1]=t[1]/255,t[2]=t[2]/255}return r}getRenderingInfoAsync(t,e,i,r){return(0,b.xn)(t,{renderer:e,arcade:i,...r})}getHit(t){if(this.owner.loadedGraphics){const e=this.owner.loadedGraphics.find((e=>e.uid===t));if(e){const t=this.layer instanceof g.Z?this.layer:null,i=(0,y.mW)(e,t);return{type:"graphic",graphic:i,layer:i.layer}}}return null}whenGraphicBounds(t,e){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(t,e):Promise.reject()}computeAttachmentOrigin(t,e){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(t,e):null}getSymbolLayerSize(t,e){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(t,e):null}maskOccludee(t){const{set:e,handle:i}=this.objectStates.acquireSet(G.V_.MaskOccludee,null);return this.objectStates.setUid(e,t.uid),i}highlight(t){if(t instanceof C.Z)return N;if("number"==typeof t)return this.highlight([t]);if(t instanceof s.Z)return this.highlight([t]);if(t instanceof n.Z&&(t=t.toArray()),Array.isArray(t)&&t.length>0){if(t[0]instanceof s.Z){const e=t.map((t=>t.uid)),{set:i,handle:r}=this.objectStates.acquireSet(G.V_.Highlight,null);return this.objectStates.setUids(i,e),r}if("number"==typeof t[0]){const e=t,{set:i,handle:r}=this.objectStates.acquireSet(G.V_.Highlight,null);return this.objectStates.setObjectIds(i,e),r}}return N}_setupSuspendResumeExtent(){const{scaleVisibility:t,frustumVisibility:e}=this;if((0,l.Wi)(t)&&(0,l.Wi)(e))return;const i=({computedExtent:i,extentPadding:r})=>{this._suspendResumeExtent=(0,V.Go)(i,this._suspendResumeExtent,m.Z,r),(0,l.pC)(t)&&t.setExtent(this._suspendResumeExtent),(0,l.pC)(e)&&e.setExtent(this._suspendResumeExtent)};this.handles.add((0,h.YP)((()=>({computedExtent:this.graphicsCore?.computedExtent,extentPadding:this.graphicsCore?.extentPadding})),(t=>i(t)),h.tX))}_updateClippingExtent(){const t=this.view.clippingArea;this.graphicsCore.setClippingExtent(t,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}};(0,r._)([(0,c.Cb)()],S.prototype,"type",void 0),(0,r._)([(0,c.Cb)({constructOnly:!0})],S.prototype,"owner",void 0),(0,r._)([(0,c.Cb)()],S.prototype,"layer",null),(0,r._)([(0,c.Cb)()],S.prototype,"view",null),(0,r._)([(0,c.Cb)({constructOnly:!0})],S.prototype,"graphicsCore",void 0),(0,r._)([(0,c.Cb)()],S.prototype,"scaleVisibility",null),(0,r._)([(0,c.Cb)({constructOnly:!0})],S.prototype,"frustumVisibility",void 0),(0,r._)([(0,c.Cb)()],S.prototype,"elevationAlignment",null),(0,r._)([(0,c.Cb)()],S.prototype,"objectStates",null),(0,r._)([(0,c.Cb)()],S.prototype,"scaleVisibilitySuspended",null),(0,r._)([(0,c.Cb)({readOnly:!0})],S.prototype,"frustumVisibilitySuspended",null),(0,r._)([(0,c.Cb)()],S.prototype,"suspended",null),(0,r._)([(0,c.Cb)({readOnly:!0})],S.prototype,"updating",null),(0,r._)([(0,c.Cb)()],S.prototype,"loadedGraphics",null),(0,r._)([(0,c.Cb)()],S.prototype,"fullOpacity",null),(0,r._)([(0,c.Cb)()],S.prototype,"slicePlaneEnabled",null),(0,r._)([(0,c.Cb)()],S.prototype,"drapeSourceType",void 0),(0,r._)([(0,c.Cb)()],S.prototype,"updatePolicy",null),(0,r._)([(0,c.Cb)({constructOnly:!0})],S.prototype,"scaleVisibilityEnabled",void 0),(0,r._)([(0,c.Cb)({constructOnly:!0})],S.prototype,"frustumVisibilityEnabled",void 0),(0,r._)([(0,c.Cb)()],S.prototype,"initializePromise",void 0),S=(0,r._)([(0,u.j)("esri.views.3d.layers.graphics.GraphicsProcessor")],S);const N=(0,a.kB)()}}]);