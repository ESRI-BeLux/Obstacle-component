"use strict";(self.webpackChunkobstacle_component=self.webpackChunkobstacle_component||[]).push([[7764],{27764:(e,t,r)=>{r.r(t),r.d(t,{default:()=>we});var i=r(36663),s=r(41831),n=r(70375),o=r(53280),l=r(44584),a=r(61681),u=r(15842),d=r(78668),p=r(76868),y=r(84684),c=r(3466),h=r(81977),b=(r(7753),r(7283),r(34248)),m=r(40266),f=r(65943),g=r(38481),v=r(91223),w=r(87232),_=r(27668),C=r(63989),S=r(15801),F=r(59684),O=r(43330),I=r(18241),j=r(12478),T=r(95874),x=r(2030),E=r(20692),P=r(51599),L=r(23556),Z=r(89076),G=r(14845),D=r(82064),V=r(39835),N=r(12795);let R=class extends D.wq{constructor(){super(...arguments),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(e){if(!e)return null;const t={};for(const r of Object.keys(e))t[r]=(0,N.im)(e[r]);return t}writeDomains(e,t){if(!e)return;const r={};for(const t of Object.keys(e))e[t]&&(r[t]=e[t]?.toJSON());t.domains=r}};(0,i._)([(0,h.Cb)({type:Number,json:{write:!0}})],R.prototype,"code",void 0),(0,i._)([(0,h.Cb)({type:Object,json:{write:!0}})],R.prototype,"defaultValues",void 0),(0,i._)([(0,h.Cb)({json:{write:!0}})],R.prototype,"domains",void 0),(0,i._)([(0,b.r)("domains")],R.prototype,"readDomains",null),(0,i._)([(0,V.c)("domains")],R.prototype,"writeDomains",null),(0,i._)([(0,h.Cb)({type:String,json:{write:!0}})],R.prototype,"name",void 0),R=(0,i._)([(0,m.j)("esri.layers.support.Subtype")],R);const q=R;var k=r(80020),M=r(86004),$=(r(45510),r(16192),r(71297),r(878),r(22836)),A=r(50172),U=r(72043),J=(r(72506),r(39994),r(86618)),Q=r(67134),B=r(68309),Y=r(86745),H=r(3593),z=r(34878),K=r(60822),W=r(26732),X=r(49341),ee=r(10171),te=r(5310);const re=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],ie={key:"type",base:$.Z,errorContext:"renderer",typeMap:{simple:A.Z,"unique-value":U.Z,"class-breaks":M.Z}},se=(0,Z.v)(),ne=(0,H.d)({types:ie});let oe=0;function le(e){const t=e.json.write;return"object"==typeof t?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function ae(e){switch(e){case"point":case"multipoint":return te.xA.clone();case"polyline":return te.CJ.clone();case"polygon":case"multipatch":return te.z3.clone();default:return null}}function ue(e,t){return null==e?null:t.subtypes?.find((t=>t.code===e))}function de(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const i={},s=ue(e,t);if((0,a.pC)(s)){const{defaultValues:e}=s;for(const t in e)i[t]=e[t]}return i[t.subtypeField]=e,new K.Z({name:"New Feature",drawingTool:r,prototype:{attributes:i}})}let pe=class extends((0,o.p)((0,u.R)((0,J.IG)(B.Z)))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${oe++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}writeFieldOverrides(e,t,r){const{fields:i,parent:s}=this;let n;if(i){n=[];let e=0;i.forEach((({name:t,alias:r,editable:i,visible:o})=>{if(!o)return;const l=s?.fields?.find((e=>e.name===t));if(!l)return;const a={name:t};let u=!1;r!==l.alias&&(a.alias=r,u=!0),i!==l.editable&&(a.editable=i,u=!0),n.push(a),u&&e++})),0===e&&n.length===i.length&&(n=null)}else n=(0,Q.d9)(e);n?.length&&(0,Y.RB)(r,n,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,i=e?.fields;if(!i?.length)return null;const{subtypes:s,subtypeField:n}=e,o=s.find((e=>e.code===r)),l=o?.defaultValues,a=o?.domains,u=[];for(const e of i){const i=e.clone(),{name:s}=i,o=t?.find((e=>e.name===s));if(i.visible=!t||!!o,o){const{alias:e,editable:t}=o;e&&(i.alias=e),!1===t&&(i.editable=!1)}const d=l?.[s]??null;i.defaultValue=s===n?r:d;const p=a?.[s]??null;i.domain=s===n?null:p?"inherited"===p.type?i.domain:p.clone():null,u.push(i)}return u}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,G.YN)(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&"mesh"!==e.geometryType?function(e){return new A.Z({symbol:ae(e)})}(e.geometryType):null}readRendererFromService(e,t,r){if("Table"===t.type)return null;const i=t.drawingInfo?.renderer,s=ne(i,t,r);let n;const{subtypeCode:o}=this;if(null!=o&&function(e,t){return!(!t||"unique-value"!==e?.type||"string"!=typeof e.field||e.field.toLowerCase()!==t.toLowerCase()||e.field2||e.field3||e.valueExpression)}(s,t.subtypeField)){const e=s.uniqueValueInfos?.find((({value:e})=>(e="number"==typeof e?String(e):e)===String(o)));e&&(n=new A.Z({symbol:e.symbol}))}else"simple"!==s?.type||s.visualVariables?.length||(n=s);return n}readRenderer(e,t,r){const i=t?.layerDefinition?.drawingInfo?.renderer;if(i&&!i.visualVariables?.length)return ne(i,t,r)||void 0}readTemplatesFromService(e,t){return[de(this.subtypeCode,t)]}readTitleFromService(e,t){const r=ue(this.subtypeCode,t);return(0,a.pC)(r)?r.name:null}createPopupTemplate(e){let t=this;const{parent:r,fields:i,title:s}=this;if(r){const{displayField:e,editFieldsInfo:n,objectIdField:o}=r;t={displayField:e,editFieldsInfo:n,fields:i,objectIdField:o,title:s}}return(0,ee.eZ)(t,e)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return re.some((e=>this.originIdOf(e)===f.s3.USER))}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};(0,i._)([(0,h.Cb)({json:{write:{ignoreOrigin:!0}}})],pe.prototype,"charts",void 0),(0,i._)([(0,h.Cb)({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],pe.prototype,"editingEnabled",void 0),(0,i._)([(0,h.Cb)({readOnly:!0,json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],pe.prototype,"fieldOverrides",void 0),(0,i._)([(0,V.c)("fieldOverrides")],pe.prototype,"writeFieldOverrides",null),(0,i._)([(0,h.Cb)({...se.fields,readOnly:!0,json:{read:!1}})],pe.prototype,"fields",null),(0,i._)([(0,h.Cb)(se.fieldsIndex)],pe.prototype,"fieldsIndex",void 0),(0,i._)([(0,h.Cb)({type:z.Z,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],pe.prototype,"formTemplate",void 0),(0,i._)([(0,h.Cb)({type:String,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],pe.prototype,"id",void 0),(0,i._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],pe.prototype,"type",void 0),(0,i._)([(0,h.Cb)(le((0,Q.d9)(P.iR)))],pe.prototype,"labelsVisible",void 0),(0,i._)([(0,h.Cb)({type:[W.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:X.r},write:{ignoreOrigin:!0}}})],pe.prototype,"labelingInfo",void 0),(0,i._)([(0,h.Cb)({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],pe.prototype,"layerType",void 0),(0,i._)([(0,h.Cb)(le((0,Q.d9)(P.rn)))],pe.prototype,"legendEnabled",void 0),(0,i._)([(0,h.Cb)({type:["show","hide"]})],pe.prototype,"listMode",void 0),(0,i._)([(0,h.Cb)((()=>{const e=(0,Q.d9)(P.rO);return e.json.origins.service.read=!1,le(e)})())],pe.prototype,"minScale",void 0),(0,i._)([(0,h.Cb)((()=>{const e=(0,Q.d9)(P.u1);return e.json.origins.service.read=!1,le(e)})())],pe.prototype,"maxScale",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],pe.prototype,"effectiveScaleRange",null),(0,i._)([(0,h.Cb)({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],pe.prototype,"opacity",void 0),(0,i._)([(0,h.Cb)()],pe.prototype,"parent",void 0),(0,i._)([(0,h.Cb)(le((0,Q.d9)(P.C_)))],pe.prototype,"popupEnabled",void 0),(0,i._)([(0,h.Cb)({type:k.Z,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],pe.prototype,"popupTemplate",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],pe.prototype,"defaultPopupTemplate",null),(0,i._)([(0,h.Cb)({types:ie,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],pe.prototype,"renderer",null),(0,i._)([(0,b.r)("service","renderer",["drawingInfo.renderer","subtypeField","type"])],pe.prototype,"readRendererFromService",null),(0,i._)([(0,b.r)("renderer",["layerDefinition.drawingInfo.renderer"])],pe.prototype,"readRenderer",null),(0,i._)([(0,h.Cb)({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],pe.prototype,"subtypeCode",void 0),(0,i._)([(0,h.Cb)({type:[K.Z],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],pe.prototype,"templates",void 0),(0,i._)([(0,b.r)("service","templates",["geometryType","subtypeField","subtypes","type"])],pe.prototype,"readTemplatesFromService",null),(0,i._)([(0,h.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],pe.prototype,"title",void 0),(0,i._)([(0,b.r)("service","title",["subtypes"])],pe.prototype,"readTitleFromService",null),(0,i._)([(0,h.Cb)({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],pe.prototype,"visible",void 0),pe=(0,i._)([(0,m.j)("esri.layers.support.SubtypeSublayer")],pe);const ye=pe;var ce=r(84573),he=r(76912),be=r(14136);const me="SubtypeGroupLayer";function fe(e,t){return new n.Z("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const ge=(0,Z.v)();let ve=class extends((0,F.B)((0,S.o1)((0,_.h)((0,x.n)((0,T.M)((0,j.Q)((0,w.Y)((0,O.q)((0,I.I)((0,u.R)((0,C.N)((0,v.V)((0,o.p)(g.Z)))))))))))))){constructor(...e){super(...e),this._handles=new l.Z,this._sublayersCollectionChanged=!1,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.subtypes=null,this.sublayers=new(s.Z.ofType(ye)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this.addHandles((0,p.YP)((()=>this.sublayers),((e,t)=>this._handleSublayersChange(e,t)),p.Z_))}destroy(){this.source?.destroy(),this._handles=(0,a.SC)(this._handles)}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=(0,a.pC)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(d.r9).then((async()=>{if(!this.url)throw new n.Z("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(null==this.layerId)throw new n.Z("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))})).then((()=>this.finishLoadEditablePortalLayer(e)));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get parsedUrl(){const e=(0,c.mN)(this.url);return null!=e&&null!=this.layerId&&(e.path=(0,c.v_)(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?(0,E.a7)(this.url,t):t}async addAttachment(e,t){return(0,L.JD)(this,e,t,me)}async updateAttachment(e,t,r){return(0,L.Y5)(this,e,t,r,me)}async applyEdits(e,t){return(0,L.Jj)(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await(0,d.Hl)(r.e(7469).then(r.bind(r,77469)),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=(0,L.rP)(this),t=this.sublayers.map((e=>e.subtypeCode));return e.where=(0,y._)(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return(0,L.FV)(this,e,t,me)}async fetchRecomputedExtents(e){return(0,L.Ci)(this,e,me)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}async queryAttachments(e,t){return(0,L.SU)(this,e,t,me)}async queryFeatures(e,t){const r=await this.load(),i=be.Z.from(e)??r.createQuery(),s=(0,a.Pt)(i.outFields,[]);s.includes(this.subtypeField)||(s.push(this.subtypeField),i.outFields=s);const n=await r.source.queryFeatures(i,t);if(n?.features)for(const e of n.features)e.layer=this._findSublayerForFeature(e),e.sourceLayer=this;return n}async queryObjectIds(e,t){return(0,L.tD)(this,e,t,me)}async queryFeatureCount(e,t){return(0,L.VG)(this,e,t,me)}async queryExtent(e,t){return(0,L.KE)(this,e,t,me)}async queryRelatedFeatures(e,t){return(0,L.kp)(this,e,t,me)}async queryRelatedFeaturesCount(e,t){return(0,L.C9)(this,e,t,me)}write(e,t){const{origin:r,layerContainerType:i,messages:s}=t;if(this.isTable){if("web-scene"===r||"web-map"===r&&"tables"!==i)return s?.push(fe(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===r&&"tables"===i)return s?.push(fe(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(e,t):(s?.push(new n.Z("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&(0,he.D)(this,e)}_findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.sublayers.find((e=>e.subtypeCode===r))}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new n.Z("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!this.subtypes?.length)throw new n.Z("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),(0,G.UF)(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return(0,L.gG)(this)}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||-1!==e.search(/\/FeatureServer\//i)||this.fields?.some((e=>"geometry"===e.type))||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null})),this.handles.remove("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this})),this._sublayersCollectionChanged=!1,this.handles.add([e.on("after-add",(({item:e})=>{e.parent=this})),e.on("after-remove",(({item:e})=>{e.parent=null})),e.on("after-changes",(()=>{this._sublayersCollectionChanged=!0}))],"sublayers-owner"))}};(0,i._)([(0,h.Cb)({readOnly:!0})],ve.prototype,"createQueryVersion",null),(0,i._)([(0,h.Cb)({type:Boolean,readOnly:!0})],ve.prototype,"editingEnabled",null),(0,i._)([(0,h.Cb)({...ge.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],ve.prototype,"fields",void 0),(0,i._)([(0,h.Cb)(ge.fieldsIndex)],ve.prototype,"fieldsIndex",void 0),(0,i._)([(0,h.Cb)(P.id)],ve.prototype,"id",void 0),(0,i._)([(0,h.Cb)({type:["show","hide","hide-children"]})],ve.prototype,"listMode",void 0),(0,i._)([(0,h.Cb)({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"]})],ve.prototype,"operationalLayerType",void 0),(0,i._)([(0,h.Cb)(ge.outFields)],ve.prototype,"outFields",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],ve.prototype,"parsedUrl",null),(0,i._)([(0,h.Cb)()],ve.prototype,"source",null),(0,i._)([(0,h.Cb)({type:[q],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ve.prototype,"subtypes",void 0),(0,i._)([(0,h.Cb)({type:s.Z.ofType(ye),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const i=e.map((({code:e})=>{const i=new ye({subtypeCode:e});return i.read(t,r),i}));return new(s.Z.ofType(ye))(i)}}}},name:"layers",write:{overridePolicy(e,t,r){const i=this.originOf("sublayers"),s=f.s3.PORTAL_ITEM;let n=!0;if((0,f.M9)(i)===s&&(0,f.M9)(r.origin)>s){const t=e.some((e=>e.hasUserOverrides()));n=this._sublayersCollectionChanged||t}return{enabled:n,ignoreOrigin:!0}}}}})],ve.prototype,"sublayers",void 0),(0,i._)([(0,h.Cb)({type:ce.Z})],ve.prototype,"timeInfo",void 0),(0,i._)([(0,h.Cb)({json:{origins:{"portal-item":{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],ve.prototype,"title",void 0),(0,i._)([(0,b.r)("service","title",["name"])],ve.prototype,"readTitleFromService",null),(0,i._)([(0,h.Cb)({json:{read:!1}})],ve.prototype,"type",void 0),ve=(0,i._)([(0,m.j)("esri.layers.SubtypeGroupLayer")],ve);const we=ve}}]);