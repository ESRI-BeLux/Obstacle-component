"use strict";(self.webpackChunkobstacle_component=self.webpackChunkobstacle_component||[]).push([[9420],{69420:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var i=r(36663),s=r(66341),a=r(37956),o=r(70375),n=r(53280),l=r(63592),p=r(61681),c=r(15842),h=r(78668),u=r(81977),y=(r(7753),r(7283)),d=r(34248),m=r(40266),g=r(39835),b=r(65943),f=r(91772),v=r(68577),x=r(38481),S=r(91223),_=r(81432),w=r(87232),I=r(27668),C=r(63989),O=r(43330),M=r(18241),E=r(12478),R=r(95874),T=r(80002),L=r(2030),N=r(51599),P=r(24065),j=r(23875),k=r(93698),J=r(76912);let q=class extends((0,I.h)((0,L.n)((0,R.M)((0,T.x)((0,_.O)((0,w.Y)((0,O.q)((0,M.I)((0,c.R)((0,E.Q)((0,S.V)((0,C.N)((0,n.p)(x.Z)))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=(0,p.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(h.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("PNG32")?"png32":"png24"}writeSublayers(e,t,r,i){if(!this.loaded||!e)return;const s=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let a=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=(0,b.M9)(i.origin);if(e===b.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;a=(0,k.QV)(s,e,b.s3.SERVICE)}else if(e>b.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");a=(0,k.QV)(s,e.sublayers,(0,b.M9)(e.origin))}}const o=[],n={writeSublayerStructure:a,...i};let l=a;s.forEach((e=>{const t=e.write({},n);o.push(t),l=l||"user"===e.originOf("visible")})),o.some((e=>Object.keys(e).length>1))&&(t.layers=o),l&&(t.visibleLayers=s.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,i){const s=i&&i.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const a=new P.R({layer:this,floors:i?.floors,scale:(0,v.yZ)({extent:e,width:t})*s}),o=a.toJSON();a.destroy();const n=!i||!i.rotation||this.version<10.3?{}:{rotation:-i.rotation},l=e&&e.spatialReference,p=l.wkid||JSON.stringify(l.toJSON());o.dpi*=s;const c={};if(i?.timeExtent){const{start:e,end:t}=i.timeExtent.toJSON();c.time=e&&t&&e===t?""+e:`${e??"null"},${t??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(c.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:p,imageSR:p,size:t+","+r,...o,...n,...c}}async fetchImage(e,t,r,i){return this._fetchImage("image",e,t,r,i)}async fetchImageBitmap(e,t,r,i){const s=await this._fetchImage("blob",e,t,r,i);return createImageBitmap(s)}async fetchRecomputedExtents(e={}){const t={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:r}=await(0,s.default)(this.url,t),{extent:i,fullExtent:o,timeExtent:n}=r,l=i||o;return{fullExtent:l&&f.Z.fromJSON(l),timeExtent:n&&a.Z.fromJSON({start:n[0],end:n[1]})}}loadAll(){return(0,l.G)(this,(e=>{e(this.allSublayers)}))}serviceSupportsSpatialReference(e){return(0,J.D)(this,e)}async _fetchImage(e,t,r,i,a){const n={responseType:e,signal:a?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(t,r,i,a),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";if(null!=n.query.dynamicLayers&&!this.capabilities.exportMap.supportsDynamicLayers)throw new o.Z("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:e}=await(0,s.default)(l,n);return e}catch(e){if((0,h.D_)(e))throw e;throw new o.Z("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:e})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await(0,s.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};(0,i._)([(0,u.Cb)({type:Boolean})],q.prototype,"datesInUnknownTimezone",void 0),(0,i._)([(0,u.Cb)()],q.prototype,"dpi",void 0),(0,i._)([(0,u.Cb)()],q.prototype,"gdbVersion",void 0),(0,i._)([(0,u.Cb)()],q.prototype,"imageFormat",void 0),(0,i._)([(0,d.r)("imageFormat",["supportedImageFormatTypes"])],q.prototype,"readImageFormat",null),(0,i._)([(0,u.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],q.prototype,"imageMaxHeight",void 0),(0,i._)([(0,u.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],q.prototype,"imageMaxWidth",void 0),(0,i._)([(0,u.Cb)()],q.prototype,"imageTransparency",void 0),(0,i._)([(0,u.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],q.prototype,"isReference",void 0),(0,i._)([(0,u.Cb)({json:{read:!1,write:!1}})],q.prototype,"labelsVisible",void 0),(0,i._)([(0,u.Cb)({type:["ArcGISMapServiceLayer"]})],q.prototype,"operationalLayerType",void 0),(0,i._)([(0,u.Cb)({json:{read:!1,write:!1}})],q.prototype,"popupEnabled",void 0),(0,i._)([(0,u.Cb)()],q.prototype,"sourceJSON",void 0),(0,i._)([(0,u.Cb)({json:{write:{ignoreOrigin:!0}}})],q.prototype,"sublayers",void 0),(0,i._)([(0,g.c)("sublayers",{layers:{type:[j.Z]},visibleLayers:{type:[y.z8]}})],q.prototype,"writeSublayers",null),(0,i._)([(0,u.Cb)({type:["show","hide","hide-children"]})],q.prototype,"listMode",void 0),(0,i._)([(0,u.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],q.prototype,"type",void 0),(0,i._)([(0,u.Cb)(N.HQ)],q.prototype,"url",void 0),q=(0,i._)([(0,m.j)("esri.layers.MapImageLayer")],q);const F=q}}]);