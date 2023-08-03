"use strict";(self.webpackChunkobstacle_component=self.webpackChunkobstacle_component||[]).push([[7153],{81432:(e,r,t)=>{t.d(r,{O:()=>b});var i=t(36663),s=t(66341),a=t(78668),l=t(3466),o=t(26139),n=t(81977),y=(t(7753),t(7283),t(34248)),p=t(40266),d=t(91772),u=t(14685),c=t(51599);const b=e=>{let r=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesPromise=null,this._allLayersAndTablesMap=null}readCapabilities(e,r){const t=r.capabilities&&r.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!t)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const i=this.type,s=t.includes("data"),a=t.includes("query"),l=t.includes("map"),n=!!r.exportTilesAllowed,y=t.includes("tilemap"),p="tile"!==i&&!!r.supportsDynamicLayers,d="tile"!==i&&(!r.tileInfo||p),u="tile"!==i&&(!r.tileInfo||p),c="tile"!==i,b=r.cimVersion&&o.G.parse(r.cimVersion),h=b?.since(1,4)??!1,f=b?.since(2,0)??!1;return{operations:{supportsExportMap:l,supportsExportTiles:n,supportsIdentify:a,supportsQuery:s,supportsTileMap:y},exportMap:l?{supportsArcadeExpressionForLabeling:h,supportsSublayersChanges:c,supportsDynamicLayers:p,supportsSublayerVisibility:d,supportsSublayerDefinitionExpression:u,supportsCIMSymbols:f}:null,exportTiles:n?{maxExportTilesCount:+r.maxExportTilesCount}:null}}readVersion(e,r){let t=r.currentVersion;return t||(t=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),t}async fetchSublayerInfo(e,r){return await this.fetchAllLayersAndTables(r),this._allLayersAndTablesMap?.get(e)}async fetchAllLayersAndTables(e){await this.load(e),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=(0,s.default)((0,l.mN)(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then((e=>{this._allLayersAndTablesMap=new Map;for(const r of e.data.layers)this._allLayersAndTablesMap.set(r.id,r);return{result:e.data}}),(e=>({error:e}))));const r=await this._allLayersAndTablesPromise;if((0,a.k_)(e),"result"in r)return r.result;throw r.error}};return(0,i._)([(0,n.Cb)({readOnly:!0})],r.prototype,"capabilities",void 0),(0,i._)([(0,y.r)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],r.prototype,"readCapabilities",null),(0,i._)([(0,n.Cb)({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),(0,i._)([(0,n.Cb)({type:d.Z})],r.prototype,"fullExtent",void 0),(0,i._)([(0,n.Cb)(c.id)],r.prototype,"id",void 0),(0,i._)([(0,n.Cb)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),(0,i._)([(0,n.Cb)(c.C_)],r.prototype,"popupEnabled",void 0),(0,i._)([(0,n.Cb)({type:u.Z})],r.prototype,"spatialReference",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],r.prototype,"version",void 0),(0,i._)([(0,y.r)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],r.prototype,"readVersion",null),r=(0,i._)([(0,p.j)("esri.layers.mixins.ArcGISMapService")],r),r}},80002:(e,r,t)=>{t.d(r,{x:()=>m});var i=t(36663),s=t(41831),a=t(81739),l=t(70375),o=t(13802),n=t(76868),y=t(81977),p=(t(7753),t(95620)),d=(t(7283),t(40266)),u=t(65943),c=t(23875),b=t(93698);const h=o.Z.getLogger("esri.layers.TileLayer"),f=s.Z.ofType(c.Z);function g(e,r){e&&e.forEach((e=>{r(e),e.sublayers&&e.sublayers.length&&g(e.sublayers,r)}))}const m=e=>{let r=class extends e{constructor(...e){super(...e),this.allSublayers=new a.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={[u.s3.SERVICE]:{},[u.s3.PORTAL_ITEM]:{},[u.s3.WEB_SCENE]:{},[u.s3.WEB_MAP]:{}},this.addHandles((0,n.YP)((()=>this.sublayers),((e,r)=>this._handleSublayersChange(e,r)),n.Z_))}readSublayers(e,r){if(!r||!e)return;const{sublayersSourceJSON:t}=this,i=(0,u.M9)(r.origin);if(i<u.s3.SERVICE)return;if(t[i]={context:r,visibleLayers:e.visibleLayers||t[i].visibleLayers,layers:e.layers||t[i].layers},i>u.s3.SERVICE)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:s,origin:a}=this.createSublayersForOrigin("web-document"),l=(0,p.vw)(this);l.setDefaultOrigin(a),this._set("sublayers",new f(s)),l.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find((r=>r.id===e))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const r=(0,u.M9)("web-document"===e?"web-map":e);let t=u.s3.SERVICE,i=this.sublayersSourceJSON[u.s3.SERVICE].layers,s=this.sublayersSourceJSON[u.s3.SERVICE].context,a=null;const l=[u.s3.PORTAL_ITEM,u.s3.WEB_SCENE,u.s3.WEB_MAP].filter((e=>e<=r));for(const e of l){const r=this.sublayersSourceJSON[e];(0,b.ac)(r.layers)&&(t=e,i=r.layers,s=r.context,r.visibleLayers&&(a={visibleLayers:r.visibleLayers,context:r.context}))}const o=[u.s3.PORTAL_ITEM,u.s3.WEB_SCENE,u.s3.WEB_MAP].filter((e=>e>t&&e<=r));let n=null;for(const e of o){const{layers:r,visibleLayers:t,context:i}=this.sublayersSourceJSON[e];r&&(n={layers:r,context:i}),t&&(a={visibleLayers:t,context:i})}const y=function(e,r){const t=[],i={};return e?(e.forEach((e=>{const s=new c.Z;if(s.read(e,r),i[s.id]=s,null!=e.parentLayerId&&-1!==e.parentLayerId){const r=i[e.parentLayerId];r.sublayers||(r.sublayers=[]),r.sublayers.unshift(s)}else t.unshift(s)})),t):t}(i,s),p=new Map,d=new Set;if(n)for(const e of n.layers)p.set(e.id,e);if(a)for(const e of a.visibleLayers)d.add(e);return g(y,(e=>{n&&e.read(p.get(e.id),n.context),a&&e.read({defaultVisibility:d.has(e.id)},a.context)})),{origin:(0,u.x3)(t),sublayers:new f({items:y})}}read(e,r){super.read(e,r),this.readSublayers(e,r)}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this.handles.remove("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",(e=>{h.error(new l.Z("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()})),"sublayers-owner"))}};return(0,i._)([(0,y.Cb)({readOnly:!0})],r.prototype,"allSublayers",void 0),(0,i._)([(0,y.Cb)({readOnly:!0,type:s.Z.ofType(c.Z)})],r.prototype,"serviceSublayers",void 0),(0,i._)([(0,y.Cb)({value:null,type:f,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),(0,i._)([(0,y.Cb)({readOnly:!0})],r.prototype,"sublayersSourceJSON",void 0),r=(0,i._)([(0,d.j)("esri.layers.mixins.SublayersOwner")],r),r}},23875:(e,r,t)=>{t.d(r,{Z:()=>z});var i,s=t(36663),a=(t(91957),t(80020)),l=(t(86004),t(45510),t(16192),t(71297),t(878),t(22836),t(50172),t(72043),t(72506),t(54021)),o=t(66341),n=t(4905),y=t(41831),p=t(70375),d=t(53280),u=t(86618),c=t(67134),b=t(68309),h=t(13802),f=t(61681),g=t(15842),m=t(84684),S=t(3466),v=t(81977),I=t(95620),_=t(69236),w=t(34248),E=t(40266),L=t(39835),C=t(7283),x=t(65943),O=t(20692),D=t(18160),T=t(12512),P=t(28790),F=t(26732),M=t(49341),A=t(94081),j=t(10743),N=t(81580),V=t(14136),Z=t(10171),R=t(91772),k=t(59659);function U(e){return e&&"esriSMS"===e.type}function J(e,r,t){const i=this.originIdOf(r)>=(0,x.M9)(t.origin);return{ignoreOrigin:!0,allowNull:i,enabled:!!t&&"map-image"===t.layer?.type&&(t.writeSublayerStructure||i)}}function B(e,r,t){return{enabled:!!t&&"tile"===t.layer?.type&&this._isOverridden(r)}}function $(e,r,t){return{ignoreOrigin:!0,enabled:t&&t.writeSublayerStructure||!1}}function q(e,r,t){return{ignoreOrigin:!0,enabled:!!t&&(t.writeSublayerStructure||this.originIdOf(r)>=(0,x.M9)(t.origin))}}let Q=0;const G=new Set;G.add("layer"),G.add("parent"),G.add("loaded"),G.add("loadStatus"),G.add("loadError"),G.add("loadWarnings");let W=i=class extends((0,d.p)((0,g.R)((0,u.IG)(b.Z)))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null}async load(e){return this.addResolvingPromise((async()=>{if(!this.layer&&!this.url)throw new p.Z("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let r=null;if(!this.layer||this.originIdOf("url")>x.s3.SERVICE||"data-layer"===this.source?.type)r=(await(0,o.default)(this.url,{responseType:"json",query:{f:"json"},...e})).data;else{let t=this.id;"map-layer"===this.source?.type&&(t=this.source.mapLayerId),r=await this.layer.fetchSublayerInfo(t,e)}r&&(this.sourceJSON=r,this.read({layerDefinition:r},{origin:"service"}))})()),this}readCapabilities(e,r){const t=(e=(r=r.layerDefinition||r).capabilities||e)?e.toLowerCase().split(",").map((e=>e.trim())):[],i=this.url?(0,O.Qc)(this.url):null,s=t.includes((0,f.pC)(i)&&"MapServer"===i.serverType?"data":"query");return{exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:s}}}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get fieldsIndex(){return new P.Z(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields)for(const e of r.fields)if("esriFieldTypeGlobalID"===e.type)return e.name}get id(){return this._get("id")??Q++}set id(e){this._get("id")!==e&&(!1!==this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,r,t,i){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map((e=>e.write({},i)))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((r=>r.layer=e))}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,r){return r.minScale||r.layerDefinition&&r.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,r){return r.maxScale||r.layerDefinition&&r.layerDefinition.maxScale||0}get effectiveScaleRange(){const{minScale:e,maxScale:r}=this;return{minScale:e,maxScale:r}}readObjectIdFieldFromService(e,r){if((r=r.layerDefinition||r).objectIdField)return r.objectIdField;if(r.fields)for(const e of r.fields)if("esriFieldTypeOID"===e.type)return e.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,r){const t=r.layerDefinition;return 1-.01*(null!=t.transparency?t.transparency:t.drawingInfo.transparency)}writeOpacity(e,r,t,i){r.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,r){this.parent&&this.parent!==this.layer?r.parentLayerId=(0,C.vU)(this.parent.id):r.parentLayerId=-1}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){if(e)for(const r of e.getSymbols())if((0,n.dU)(r)){h.Z.getLogger(this.declaredClass).warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new N.R({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return(0,C.se)(y.Z.ofType(i),e)}writeSublayers(e,r,t){this.get("sublayers.length")&&(r[t]=this.sublayers.map((e=>e.id)).toArray().reverse())}readTypeIdField(e,r){let t=(r=r.layerDefinition||r).typeIdField;if(t&&r.fields){t=t.toLowerCase();const e=r.fields.find((e=>e.name.toLowerCase()===t));e&&(t=e.name)}return t}get url(){const e=this.layer?.parsedUrl??this._lastParsedUrl,r=this.source;if(!e)return null;if(this._lastParsedUrl=e,"map-layer"===r?.type)return`${e.path}/${r.mapLayerId}`;const t={layer:JSON.stringify({source:this.source})};return`${e.path}/dynamicLayer?${(0,S.B7)(t)}`}set url(e){this._overrideIfSome("url",e)}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,r,t,i){r[t]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=(0,I.vw)(this),r=new i;return(0,I.vw)(r).store=e.clone(G),this.commitProperty("url"),r._lastParsedUrl=this._lastParsedUrl,r}createPopupTemplate(e){return(0,Z.eZ)(this,e)}createQuery(){return new V.Z({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){if(this.hasOwnProperty("sublayers"))return null;const e=this.layer?.parsedUrl,r=new(0,(await Promise.resolve().then(t.bind(t,12926))).default)({url:e.path});return e&&this.source&&("map-layer"===this.source.type?r.layerId=this.source.mapLayerId:r.dynamicDataSource=this.source),null!=this.layer.refreshInterval&&(r.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(r.definitionExpression=this.definitionExpression),this.floorInfo&&(r.floorInfo=(0,c.d9)(this.floorInfo)),this.originIdOf("labelingInfo")>x.s3.SERVICE&&(r.labelingInfo=(0,c.d9)(this.labelingInfo)),this.originIdOf("labelsVisible")>x.s3.DEFAULTS&&(r.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>x.s3.DEFAULTS&&(r.legendEnabled=this.legendEnabled),this.originIdOf("visible")>x.s3.DEFAULTS&&(r.visible=this.visible),this.originIdOf("minScale")>x.s3.DEFAULTS&&(r.minScale=this.minScale),this.originIdOf("maxScale")>x.s3.DEFAULTS&&(r.maxScale=this.maxScale),this.originIdOf("opacity")>x.s3.DEFAULTS&&(r.opacity=this.opacity),this.originIdOf("popupTemplate")>x.s3.DEFAULTS&&(r.popupTemplate=(0,c.d9)(this.popupTemplate)),this.originIdOf("renderer")>x.s3.SERVICE&&(r.renderer=(0,c.d9)(this.renderer)),"data-layer"===this.source?.type&&(r.dynamicDataSource=this.source.clone()),this.originIdOf("title")>x.s3.DEFAULTS&&(r.title=this.title),"map-image"===this.layer.type&&this.layer.originIdOf("customParameters")>x.s3.DEFAULTS&&(r.customParameters=this.layer.customParameters),"tile"===this.layer.type&&this.layer.originIdOf("customParameters")>x.s3.DEFAULTS&&(r.customParameters=this.layer.customParameters),r}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:r,types:t}=this;if(!r||!e)return null;const i=e.attributes?e.attributes[r]:void 0;if(null==i)return null;let s=null;return t.some((e=>{const{id:r}=e;return null!=r&&(r.toString()===i.toString()&&(s=e),!!s)})),s}getFieldDomain(e,r){const t=r&&r.feature,i=this.getFeatureType(t);if(i){const r=i.domains&&i.domains[e];if(r&&"inherited"!==r.type)return r}return this._getLayerDomain(e)}async queryFeatures(e=this.createQuery(),r){if(await this.load(),!this.capabilities?.operations?.supportsQuery)throw new p.Z("Sublayer.queryFeatures","this layer doesn't support queries.");const[{executeQuery:i},{default:s}]=await Promise.all([Promise.resolve().then(t.bind(t,28500)),Promise.resolve().then(t.bind(t,51211))]),a=await i(this.url,V.Z.from(e),this.layer?.spatialReference??null,{...r,query:{...this.layer?.customParameters,token:this.layer?.apiKey}}),l=s.fromJSON(a.data);if(l?.features)for(const e of l.features)e.sourceLayer=this;return l}toExportImageJSON(e){const r={id:this.id,source:this.source?.toJSON()||{mapLayerId:this.id,type:"mapLayer"}},t=(0,m._)(e,this.definitionExpression);(0,f.pC)(t)&&(r.definitionExpression=t);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce(((e,r)=>(e[r]=this.originIdOf(r),e)),{}),s=Object.keys(i).some((e=>i[e]>x.s3.SERVICE));if(s){const e=r.drawingInfo={};if(i.renderer>x.s3.SERVICE&&(e.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>x.s3.SERVICE&&(e.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>x.s3.SERVICE){!this.loaded&&this.labelingInfo.some((e=>!e.labelPlacement))&&h.Z.getLogger(this.declaredClass).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let r=this.labelingInfo;(0,f.pC)(this.geometryType)&&(r=(0,M.a)(this.labelingInfo,k.Mk.toJSON(this.geometryType))),e.labelingInfo=r.filter((e=>e.labelPlacement)).map((e=>e.toJSON({origin:"service",layer:this.layer}))),e.showLabels=!0}i.opacity>x.s3.SERVICE&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer)}return r}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,(e=>{e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0])}))}_forEachSimpleMarkerSymbols(e,r){if(e){const t="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[];for(const e of t)U(e.symbol)&&r(e.symbol);"symbol"in e&&U(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&U(e.defaultSymbol)&&r(e.defaultSymbol)}}_setAndNotifyLayer(e,r){const t=this.layer,i=this._get(e);let s,a;switch(e){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",a="supportsModification"}const l=(0,I.vw)(this).getDefaultOrigin();if("service"!==l){if(s&&!1===this.get(`layer.capabilities.exportMap.${s}`))return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${s}'`);if(a&&!1===this.get(`capabilities.exportMap.${a}`))return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${a}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,r),"service"!==l&&i!==r&&t&&t.emit&&t.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this.handles.removeAll()),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null})),e.on("before-changes",(e=>{const r=this.get("layer.capabilities.exportMap.supportsSublayersChanges");null==r||r||(h.Z.getLogger(this.declaredClass).error(new p.Z("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault())}))]))}_logLockedError(e,r){h.Z.getLogger(this.declaredClass).error(new p.Z("sublayer:locked",`Property '${String(e)}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:r,sublayer:this,layer:this.layer}))}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}};W.test={isMapImageLayerOverridePolicy:e=>e===$||e===J,isTileImageLayerOverridePolicy:e=>e===B},(0,s._)([(0,v.Cb)({readOnly:!0})],W.prototype,"capabilities",void 0),(0,s._)([(0,w.r)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],W.prototype,"readCapabilities",null),(0,s._)([(0,v.Cb)({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:J}}})],W.prototype,"definitionExpression",null),(0,s._)([(0,v.Cb)({type:[T.Z],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],W.prototype,"fields",void 0),(0,s._)([(0,v.Cb)({readOnly:!0})],W.prototype,"fieldsIndex",null),(0,s._)([(0,v.Cb)({type:A.Z,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:J},origins:{"web-scene":{read:!1,write:!1}}}})],W.prototype,"floorInfo",null),(0,s._)([(0,v.Cb)({type:R.Z,json:{read:{source:"layerDefinition.extent"}}})],W.prototype,"fullExtent",void 0),(0,s._)([(0,v.Cb)({type:k.Mk.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:k.Mk.read}}}}})],W.prototype,"geometryType",void 0),(0,s._)([(0,v.Cb)({type:String})],W.prototype,"globalIdField",void 0),(0,s._)([(0,w.r)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],W.prototype,"readGlobalIdFieldFromService",null),(0,s._)([(0,v.Cb)({type:C.z8,json:{write:{ignoreOrigin:!0}}})],W.prototype,"id",null),(0,s._)([(0,v.Cb)({value:null,type:[F.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:$}}})],W.prototype,"labelingInfo",null),(0,s._)([(0,L.c)("labelingInfo")],W.prototype,"writeLabelingInfo",null),(0,s._)([(0,v.Cb)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:$}}})],W.prototype,"labelsVisible",null),(0,s._)([(0,v.Cb)({value:null})],W.prototype,"layer",null),(0,s._)([(0,v.Cb)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:q}}})],W.prototype,"legendEnabled",void 0),(0,s._)([(0,v.Cb)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],W.prototype,"listMode",null),(0,s._)([(0,v.Cb)({type:Number,value:0,json:{write:{overridePolicy:$}}})],W.prototype,"minScale",null),(0,s._)([(0,w.r)("minScale",["minScale","layerDefinition.minScale"])],W.prototype,"readMinScale",null),(0,s._)([(0,v.Cb)({type:Number,value:0,json:{write:{overridePolicy:$}}})],W.prototype,"maxScale",null),(0,s._)([(0,w.r)("maxScale",["maxScale","layerDefinition.maxScale"])],W.prototype,"readMaxScale",null),(0,s._)([(0,v.Cb)({readOnly:!0})],W.prototype,"effectiveScaleRange",null),(0,s._)([(0,v.Cb)({type:String})],W.prototype,"objectIdField",void 0),(0,s._)([(0,w.r)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],W.prototype,"readObjectIdFieldFromService",null),(0,s._)([(0,v.Cb)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:$}}})],W.prototype,"opacity",null),(0,s._)([(0,w.r)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],W.prototype,"readOpacity",null),(0,s._)([(0,L.c)("opacity")],W.prototype,"writeOpacity",null),(0,s._)([(0,v.Cb)({json:{type:C.z8,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:$}}})],W.prototype,"parent",void 0),(0,s._)([(0,L.c)("parent")],W.prototype,"writeParent",null),(0,s._)([(0,v.Cb)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy:q,writer(e,r,t){r[t]=!e}}}})],W.prototype,"popupEnabled",void 0),(0,s._)([(0,v.Cb)({type:a.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:q}}})],W.prototype,"popupTemplate",void 0),(0,s._)([(0,v.Cb)({readOnly:!0})],W.prototype,"defaultPopupTemplate",null),(0,s._)([(0,v.Cb)({types:l.A,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:$},origins:{"web-scene":{types:l.o,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:$}}}}})],W.prototype,"renderer",null),(0,s._)([(0,v.Cb)({types:{key:"type",base:null,typeMap:{"data-layer":j.n,"map-layer":N.R}},cast(e){if(e){if("mapLayerId"in e)return(0,C.TJ)(N.R,e);if("dataSource"in e)return(0,C.TJ)(j.n,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:$}}})],W.prototype,"source",null),(0,s._)([(0,v.Cb)()],W.prototype,"sourceJSON",void 0),(0,s._)([(0,v.Cb)({value:null,json:{type:[C.z8],write:{target:"subLayerIds",allowNull:!0,overridePolicy:$}}})],W.prototype,"sublayers",null),(0,s._)([(0,_.p)("sublayers")],W.prototype,"castSublayers",null),(0,s._)([(0,L.c)("sublayers")],W.prototype,"writeSublayers",null),(0,s._)([(0,v.Cb)({type:String,json:{name:"name",write:{overridePolicy:q}}})],W.prototype,"title",void 0),(0,s._)([(0,v.Cb)({type:String})],W.prototype,"typeIdField",void 0),(0,s._)([(0,w.r)("typeIdField",["layerDefinition.typeIdField"])],W.prototype,"readTypeIdField",null),(0,s._)([(0,v.Cb)({type:[D.Z],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],W.prototype,"types",void 0),(0,s._)([(0,v.Cb)({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:B}}})],W.prototype,"url",null),(0,s._)([(0,v.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:$}}})],W.prototype,"visible",null),(0,s._)([(0,L.c)("visible")],W.prototype,"writeVisible",null),W=i=(0,s._)([(0,E.j)("esri.layers.support.Sublayer")],W);const z=W}}]);