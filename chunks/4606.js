"use strict";(self.webpackChunkobstacle_component=self.webpackChunkobstacle_component||[]).push([[4606],{42557:(e,t,r)=>{r.d(t,{B:()=>f});var i=r(71760),s=r(3466),o=r(12173),n=r(41610),a=r(65943),l=r(81977);function p(e){return d[function(e){return e instanceof Blob?e.type:function(e){const t=(0,s.Ml)(e);return y[t]||c}(e.url)}(e)]||u}const d={},c="text/plain",u=d[c],y={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const e in y)d[y[e]]=e;var h=r(16641);function f(e){const t=e?.origins??[void 0];return(r,o)=>{const d=function(e,t,r){if("resource"===e?.type)return function(e,t,r){const o=(0,n.VZ)(t,r);return{type:String,read:(e,t,r)=>{const i=(0,h.r)(e,t,r);return o.type===String?i:"function"==typeof o.type?new o.type({url:i}):void 0},write:{writer(t,n,l,d){if(!d||!d.resources)return"string"==typeof t?void(n[l]=(0,h.t)(t,d)):void(n[l]=t.write({},d));const c=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),u=(0,h.t)(c,{...d,verifyItemRelativeUrls:d&&d.verifyItemRelativeUrls?{writtenUrls:d.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},h.M.NO),y=o.type!==String&&(!(0,i.l)(this)||d&&d.origin&&this.originIdOf(r)>(0,a.M9)(d.origin)),f={object:this,propertyName:r,value:t,targetUrl:u,dest:n,targetPropertyName:l,context:d,params:e};d&&d.portalItem&&u&&!(0,s.YP)(u)?y?function(e){const{context:t,targetUrl:r,params:i,value:o,dest:n,targetPropertyName:a}=e;if(!t.portalItem)return;const l=t.portalItem.resourceFromPath(r),d=b(o,r,t),c=p(d),u=(0,s.Ml)(l.path),y=i?.compress??!1;c===u?(t.resources&&m({...e,resource:l,content:d,compress:y,updates:t.resources.toUpdate}),n[a]=r):g(e)}(f):function({context:e,targetUrl:t,dest:r,targetPropertyName:i}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(t),compress:!1}),r[i]=t)}(f):d&&d.portalItem&&(null==u||null!=(0,h.i)(u)||(0,s.jc)(u)||y)?g(f):n[l]=u}}}}(e,t,r);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=h.a;return{read:e,write:t}}}}(e,r,o);for(const e of t){const t=(0,l.CJ)(r,e,o);for(const e in d)t[e]=d[e]}}}function g(e){const{targetUrl:t,params:i,value:n,context:a,dest:l,targetPropertyName:d}=e;if(!a.portalItem)return;const c=(0,h.p)(t),u=c?.filename??(0,o.D)(),y=i?.prefix??c?.prefix,f=b(n,t,a),g=(0,s.v_)(y,u),v=`${g}.${p(f)}`,w=a.portalItem.resourceFromPath(v);(0,s.jc)(t)&&a.resources&&a.resources.pendingOperations.push(async function(e){const t=(await Promise.resolve().then(r.bind(r,66341))).default,{data:i}=await t(e,{responseType:"blob"});return i}(t).then((e=>{w.path=`${g}.${p(e)}`,l[d]=w.itemRelativeUrl})).catch((()=>{})));const I=i?.compress??!1;a.resources&&m({...e,resource:w,content:f,compress:I,updates:a.resources.toAdd}),l[d]=w.itemRelativeUrl}function m({object:e,propertyName:t,updates:r,resource:i,content:s,compress:o}){r.push({resource:i,content:s,compress:o,finish:r=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function b(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}},74606:(e,t,r)=>{r.r(t),r.d(t,{default:()=>he});var i=r(36663),s=r(80085),o=r(80020),n=(r(86004),r(45510),r(16192),r(71297),r(878),r(22836),r(50172),r(72043),r(72506),r(54021)),a=r(66341),l=r(41831),p=r(70375),d=r(13802),c=r(61681),u=r(15842),y=r(78668),h=r(76868),f=r(3466),g=r(81977),m=(r(7753),r(95620)),b=(r(7283),r(34248)),v=r(40266),w=r(65943),I=r(38481),_=r(91223),C=r(87232),L=r(15801),S=r(43330),j=r(18241),F=r(95874),x=r(6393),O=r(31484),P=r(51599),E=r(48257),R=r(69766),T=r(31906),N=r(89076),Z=r(28790),A=r(14845),D=r(97304),U=r(26732),q=r(49341),Q=r(94081),k=r(82064);let V=class extends k.wq{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};(0,i._)([(0,g.Cb)({type:String,json:{read:!0,write:!0}})],V.prototype,"name",void 0),(0,i._)([(0,g.Cb)({type:String,json:{read:!0,write:!0}})],V.prototype,"field",void 0),(0,i._)([(0,g.Cb)({type:[Number],json:{read:!0,write:!0}})],V.prototype,"currentRangeExtent",void 0),(0,i._)([(0,g.Cb)({type:[Number],json:{read:!0,write:!0}})],V.prototype,"fullRangeExtent",void 0),(0,i._)([(0,g.Cb)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],V.prototype,"type",void 0),V=(0,i._)([(0,v.j)("esri.layers.support.RangeInfo")],V);var G,J=r(44584),W=r(67134),M=r(42557),z=r(96863),$=(r(39994),r(89542)),K=r(90472);let B=G=class extends((0,k.eC)(l.Z.ofType($.Z))){constructor(e){super(e)}clone(){return new G(this.items.map((e=>e.clone())))}write(e,t){return this.toJSON(t)}toJSON(e){const t=e?.layer?.spatialReference;return t?this.toArray().map((r=>{if(!t.equals(r.spatialReference)){if(!(0,K.Up)(r.spatialReference,t))return e&&e.messages&&e.messages.push(new z.Z("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const i=new $.Z;(0,K.Wt)(r,i,t),r=i}const i=r.toJSON(e);return delete i.spatialReference,i})).filter((e=>null!=e)):(e?.messages&&e.messages.push(new z.Z("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map((t=>t.toJSON(e))))}static fromJSON(e,t){const r=new G;return e.forEach((e=>r.add($.Z.fromJSON(e,t)))),r}};B=G=(0,i._)([(0,v.j)("esri.layers.support.PolygonCollection")],B);const Y=B;var H,X=r(16641);let ee=H=class extends k.wq{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new Y,this._geometriesSource=null,this._handles=new J.Z}initialize(){this._handles.add((0,h.on)((()=>this.geometries),"after-changes",(()=>this.geometries=this.geometries),h.Z_))}destroy(){this._handles.destroy()}readGeometries(e,t,r){this._geometriesSource={url:(0,X.f)(e,r),context:r}}async loadGeometries(e,t){if((0,c.Wi)(this._geometriesSource))return;const{url:r,context:i}=this._geometriesSource,s=await(0,a.default)(r,{responseType:"json",signal:(0,c.U2)(t,"signal")}),o=e.toJSON(),n=s.data.map((e=>({...e,spatialReference:o})));this.geometries=Y.fromJSON(n,i),this._geometriesSource=null}clone(){return new H({geometries:(0,W.d9)(this.geometries),spatialRelationship:this.spatialRelationship})}};(0,i._)([(0,g.Cb)({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],ee.prototype,"spatialRelationship",void 0),(0,i._)([(0,g.Cb)({type:Y,nonNullable:!0,json:{write:!0}}),(0,M.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],ee.prototype,"geometries",void 0),(0,i._)([(0,b.r)(["web-scene","portal-item"],"geometries")],ee.prototype,"readGeometries",null),ee=H=(0,i._)([(0,v.j)("esri.layers.support.SceneFilter")],ee);const te=ee;var re=r(16603),ie=r(14136),se=r(51622),oe=r(10171),ne=r(78565),ae=r(59439),le=r(78621);const pe=["3DObject","Point"],de=(0,N.v)();let ce=class extends((0,L.o1)((0,x.Vt)((0,C.Y)((0,S.q)((0,j.I)((0,F.M)((0,u.R)((0,_.V)(I.Z))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new l.Z,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return null!=e&&(0,c.pC)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return(0,c.pC)(this.associatedLayer)?this.associatedLayer.types??[]:[]}get typeIdField(){return(0,c.pC)(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return(0,c.pC)(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new Z.Z(this.fields)}readNodePages(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:D.U4.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return ye[this.profile]||"mesh"}set renderer(e){(0,A.YN)(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){const e=(0,c.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:O.C,{query:t,editing:{supportsGlobalId:r,supportsRollbackOnFailure:i,supportsUploadWithItemId:s,supportsReturnServiceEditsInSourceSpatialReference:o},data:{supportsZ:n,supportsM:a,isVersioned:l,supportsAttachment:p},operations:{supportsEditing:d,supportsAdd:u,supportsUpdate:y,supportsDelete:h,supportsQuery:f,supportsQueryAttachments:g}}=e,m=e.operations.supportsChangeTracking,b=(0,se.Rx)();return{query:t,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:o,supportsRollbackOnFailure:i,supportsGeometryUpdate:!1,supportsUploadWithItemId:s},data:{supportsAttachment:p,supportsZ:n,supportsM:a,isVersioned:l},operations:{supportsQuery:f,supportsQueryAttachments:g,supportsEditing:d&&m,supportsAdd:b&&u&&m,supportsDelete:b&&h&&m,supportsUpdate:y&&m}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){return(0,c.pC)(this.associatedLayer)?this.associatedLayer.infoFor3D:null}get defaultPopupTemplate(){return(0,c.pC)(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){return(0,c.pC)(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const r=t.store.profile;return null!=r&&ue[r]?ue[r]:(d.Z.getLogger(this.declaredClass).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=(0,c.pC)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(y.r9).then((()=>this._fetchService(t))).then((()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),(0,c.pC)(this.filter)?this.filter.loadGeometries(this.spatialReference):null]))).then((()=>this._validateElevationInfo())).then((()=>this._applyAssociatedLayerOverrides())).then((()=>this._populateFieldUsageInfo())).then((()=>(0,re.y)(this,{origin:"service"},t))).then((()=>(0,A.YN)(this.renderer,this.fieldsIndex))).then((()=>this.finishLoadEditablePortalLayer(e)));return this.addResolvingPromise(r),Promise.resolve(this)}async beforeSave(){(0,c.pC)(this.filter)&&await this.load()}createQuery(){const e=new ie.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}async queryCachedAttributes(e,t){const r=(0,A.Lk)(this.fieldsIndex,await(0,ae.e)(this,(0,ae.V)(this)));return(0,ne.xe)(this.parsedUrl.path,this.attributeStorageInfo,e,t,r)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||0===r.length)throw new p.Z("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const i=new s.Z;return i.attributes=r[0],i.layer=this,i.sourceLayer=this,i}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryAttachments(e,t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(d.Z.getLogger(this.declaredClass).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return(0,oe.eZ)(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return(0,c.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),(0,c.Wi)(this.associatedLayer))throw new p.Z("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new p.Z("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new p.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new p.Z("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const e of this.statisticsInfo)if(e.name===r.name){const r=(0,f.v_)(this.parsedUrl.path,e.href);return(0,a.default)(r,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new p.Z("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(x.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(x.xp.SAVE,e)}async applyEdits(e,t){const i=await r.e(3580).then(r.bind(r,13580));if(await this.load(),(0,c.Wi)(this.associatedLayer))throw new p.Z(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),i.applyEdits(this,this.associatedLayer.source,e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&!pe.includes(e.layerType))throw new p.Z("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new p.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});!function(e,t){let r=!1,i=!1;if(null==e)r=!0,i=!0;else{const s=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,i=s;break;case"vertex-reference-frame":r=!0,i=!s;break;default:r=!1}}if(!r)throw new p.Z("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!i)throw new p.Z("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new p.Z("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((t=>t.name===e.name))),r=!!((0,c.pC)(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some((t=>t&&e.name===t.name))),i={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=i}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if((0,c.Wi)(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if((0,c.Wi)(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=(0,m.vw)(this);for(let r=0;r<e.length;r++){const i=e[r],s=this.originIdOf(i),o=this.associatedLayer.originIdOf(i);s<o&&(o===w.s3.SERVICE||o===w.s3.PORTAL_ITEM)&&t.setAtOrigin(i,this.associatedLayer[i],o)}}async _setAssociatedFeatureLayer(e){if(!["mesh-pyramids","points"].includes(this.profile))return;const t=new T.W(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await t.fetch()}catch(e){(0,y.D_)(e)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await(0,h.N1)((()=>this.popupEnabled&&null!=this.popupTemplate));const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?d.Z.getLogger(this.declaredClass).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):d.Z.getLogger(this.declaredClass).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"relative-to-scene"===e.mode&&d.Z.getLogger(this.declaredClass).warn(".elevationInfo=","Mesh scene layers don't support relative-to-scene elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&d.Z.getLogger(this.declaredClass).warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};(0,i._)([(0,g.Cb)({types:{key:"type",base:E.B,typeMap:{selection:R.Z}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],ce.prototype,"featureReduction",void 0),(0,i._)([(0,g.Cb)({type:[V],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],ce.prototype,"rangeInfos",void 0),(0,i._)([(0,g.Cb)({json:{read:!1}})],ce.prototype,"associatedLayer",void 0),(0,i._)([(0,g.Cb)({type:["show","hide"]})],ce.prototype,"listMode",void 0),(0,i._)([(0,g.Cb)({type:["ArcGISSceneServiceLayer"]})],ce.prototype,"operationalLayerType",void 0),(0,i._)([(0,g.Cb)({json:{read:!1},readOnly:!0})],ce.prototype,"type",void 0),(0,i._)([(0,g.Cb)({...de.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ce.prototype,"fields",void 0),(0,i._)([(0,g.Cb)()],ce.prototype,"types",null),(0,i._)([(0,g.Cb)()],ce.prototype,"typeIdField",null),(0,i._)([(0,g.Cb)()],ce.prototype,"formTemplate",null),(0,i._)([(0,g.Cb)({readOnly:!0})],ce.prototype,"fieldsIndex",null),(0,i._)([(0,g.Cb)({type:Q.Z,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],ce.prototype,"floorInfo",void 0),(0,i._)([(0,g.Cb)(de.outFields)],ce.prototype,"outFields",void 0),(0,i._)([(0,g.Cb)({type:D.U4,readOnly:!0,json:{read:!1}})],ce.prototype,"nodePages",void 0),(0,i._)([(0,b.r)("service","nodePages",["nodePages","pointNodePages"])],ce.prototype,"readNodePages",null),(0,i._)([(0,g.Cb)({type:[D.QI],readOnly:!0})],ce.prototype,"materialDefinitions",void 0),(0,i._)([(0,g.Cb)({type:[D.Yh],readOnly:!0})],ce.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,g.Cb)({type:[D.H3],readOnly:!0})],ce.prototype,"geometryDefinitions",void 0),(0,i._)([(0,g.Cb)({readOnly:!0})],ce.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,g.Cb)({readOnly:!0})],ce.prototype,"attributeStorageInfo",void 0),(0,i._)([(0,g.Cb)({readOnly:!0})],ce.prototype,"statisticsInfo",void 0),(0,i._)([(0,g.Cb)({type:l.Z.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],ce.prototype,"excludeObjectIds",void 0),(0,i._)([(0,g.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ce.prototype,"definitionExpression",void 0),(0,i._)([(0,g.Cb)({type:te,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],ce.prototype,"filter",void 0),(0,i._)([(0,g.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],ce.prototype,"path",void 0),(0,i._)([(0,g.Cb)(P.PV)],ce.prototype,"elevationInfo",null),(0,i._)([(0,g.Cb)({type:String})],ce.prototype,"geometryType",null),(0,i._)([(0,g.Cb)(P.iR)],ce.prototype,"labelsVisible",void 0),(0,i._)([(0,g.Cb)({type:[U.Z],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:q.r},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:q.r},write:!0}})],ce.prototype,"labelingInfo",void 0),(0,i._)([(0,g.Cb)(P.rn)],ce.prototype,"legendEnabled",void 0),(0,i._)([(0,g.Cb)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){if("number"==typeof e&&e>=0&&e<=1)return e;const r=t.layerDefinition?.drawingInfo?.transparency;return void 0!==r?(0,le.b)(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],ce.prototype,"opacity",void 0),(0,i._)([(0,g.Cb)({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ce.prototype,"priority",void 0),(0,i._)([(0,g.Cb)({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ce.prototype,"semantic",void 0),(0,i._)([(0,g.Cb)({types:n.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],ce.prototype,"renderer",null),(0,i._)([(0,g.Cb)({json:{read:!1}})],ce.prototype,"cachedDrawingInfo",void 0),(0,i._)([(0,b.r)("service","cachedDrawingInfo")],ce.prototype,"readCachedDrawingInfo",null),(0,i._)([(0,g.Cb)({readOnly:!0,json:{read:!1}})],ce.prototype,"capabilities",null),(0,i._)([(0,g.Cb)({type:Boolean,json:{read:!1}})],ce.prototype,"editingEnabled",null),(0,i._)([(0,g.Cb)({readOnly:!0,json:{write:!1,read:!1}})],ce.prototype,"infoFor3D",null),(0,i._)([(0,g.Cb)(P.C_)],ce.prototype,"popupEnabled",void 0),(0,i._)([(0,g.Cb)({type:o.Z,json:{name:"popupInfo",write:!0}})],ce.prototype,"popupTemplate",void 0),(0,i._)([(0,g.Cb)({readOnly:!0,json:{read:!1}})],ce.prototype,"defaultPopupTemplate",null),(0,i._)([(0,g.Cb)({type:String,json:{read:!1}})],ce.prototype,"objectIdField",void 0),(0,i._)([(0,b.r)("service","objectIdField",["objectIdField","fields"])],ce.prototype,"readObjectIdField",null),(0,i._)([(0,g.Cb)({type:String,json:{read:!1}})],ce.prototype,"globalIdField",void 0),(0,i._)([(0,b.r)("service","globalIdField",["globalIdField","fields"])],ce.prototype,"readGlobalIdField",null),(0,i._)([(0,g.Cb)({readOnly:!0,type:String,json:{read:!1}})],ce.prototype,"displayField",null),(0,i._)([(0,g.Cb)({type:String,json:{read:!1}})],ce.prototype,"profile",void 0),(0,i._)([(0,b.r)("service","profile",["store.profile"])],ce.prototype,"readProfile",null),(0,i._)([(0,g.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],ce.prototype,"normalReferenceFrame",void 0),(0,i._)([(0,g.Cb)(P.YI)],ce.prototype,"screenSizePerspectiveEnabled",void 0),ce=(0,i._)([(0,v.j)("esri.layers.SceneLayer")],ce);const ue={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},ye={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},he=ce}}]);