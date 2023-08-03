"use strict";(self.webpackChunkobstacle_component=self.webpackChunkobstacle_component||[]).push([[627],{20627:(e,t,s)=>{s.r(t),s.d(t,{toBinaryGLTF:()=>Y});var i,r=s(3466),n=s(78668),a=s(67666);!function(e){e[e.JSON=1313821514]="JSON",e[e.BIN=5130562]="BIN"}(i||(i={}));class o{constructor(e,t){if(!e)throw new Error("GLB requires a JSON gltf chunk");this._length=o.HEADER_SIZE,this._length+=o.CHUNK_HEADER_SIZE;const s=this._textToArrayBuffer(e);if(this._length+=this._alignTo(s.byteLength,4),t&&(this._length+=o.CHUNK_HEADER_SIZE,this._length+=t.byteLength,t.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const r=this._writeChunk(s,12,i.JSON,32);t&&this._writeChunk(t,r,i.BIN)}_writeHeader(){this._outView.setUint32(0,o.MAGIC,!0),this._outView.setUint32(4,o.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(e,t,s,i=0){const r=this._alignTo(e.byteLength,4);for(this._outView.setUint32(t,r,!0),this._outView.setUint32(t+=4,s,!0),this._writeArrayBuffer(this._outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)i&&this._outView.setUint8(t,i),t++;return t}_writeArrayBuffer(e,t,s,i,r){new Uint8Array(e,s,r).set(new Uint8Array(t,i,r),0)}_textToArrayBuffer(e){return(new TextEncoder).encode(e).buffer}_alignTo(e,t){return t*Math.ceil(e/t)}}o.HEADER_SIZE=12,o.CHUNK_HEADER_SIZE=8,o.MAGIC=1179937895,o.VERSION=2;var h,c,f,u,l,d,_,p,g=s(13802),m=s(86114),w=s(61681),E=s(10663),A=s(61044),T=s(6766),y=s(8909),b=s(1680),R=s(91780);(p=h||(h={}))[p.External=0]="External",p[p.DataURI=1]="DataURI",p[p.GLB=2]="GLB",function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(c||(c={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(f||(f={})),function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(u||(u={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(l||(l={})),function(e){e.OPAQUE="OPAQUE",e.MASK="MASK",e.BLEND="BLEND"}(d||(d={})),function(e){e[e.NoColor=0]="NoColor",e[e.FaceColor=1]="FaceColor",e[e.VertexColor=2]="VertexColor"}(_||(_={}));var x=s(91907);class N{constructor(e,t,s,i,r){this._buffer=e,this._componentType=s,this._dataType=i,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,t.bufferViews||(t.bufferViews=[]),this.index=t.bufferViews.length,this._bufferView={buffer:e.index,byteLength:-1,target:r};const n=this._getElementSize();n>=4&&r!==f.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=n),t.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(e){const t=this._data.length;if(this._data.push(e),this._accessorIndex>=0){const s=t%this._numComponentsForDataType,i=this._accessorMin[s];this._accessorMin[s]="number"!=typeof i?e:Math.min(i,e);const r=this._accessorMax[s];this._accessorMax[s]="number"!=typeof r?e:Math.max(r,e)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){return e=this.dataSize,4*Math.ceil(e/4);var e}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(e,t){switch(this._componentType){case x.g.BYTE:return new Int8Array(e,t);case x.g.FLOAT:return new Float32Array(e,t);case x.g.SHORT:return new Int16Array(e,t);case x.g.UNSIGNED_BYTE:return new Uint8Array(e,t);case x.g.UNSIGNED_INT:return new Uint32Array(e,t);case x.g.UNSIGNED_SHORT:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this._createTypedArray(e,t).set(this._data)}writeAsync(e){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=e.then((e=>{const t=new Uint8Array(e);for(let e=0;e<t.length;++e)this._data.push(t[e]);delete this._asyncWritePromise})),this._asyncWritePromise}startAccessor(e){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=e;const t=this._numComponentsForDataType;this._accessorMin=new Array(t),this._accessorMax=new Array(t)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this._getElementSize(),t=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let e=0;e<this._accessorMin.length;++e)"number"!=typeof this._accessorMin[e]&&(this._accessorMin[e]=0),"number"!=typeof this._accessorMax[e]&&(this._accessorMax[e]=0);const i={byteOffset:e*(this._accessorIndex/t),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case x.g.UNSIGNED_BYTE:case x.g.UNSIGNED_SHORT:i.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,i}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise((e=>this._finalizedPromiseResolve=e))}finalize(){const e=this._bufferView;return new Promise((e=>{const t=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&t.push(this._asyncWritePromise),e((0,n.as)(t))})).then((()=>{this._isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()}))}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case x.g.BYTE:case x.g.UNSIGNED_BYTE:return 1;case x.g.SHORT:case x.g.UNSIGNED_SHORT:return 2;case x.g.UNSIGNED_INT:case x.g.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case u.SCALAR:return 1;case u.VEC2:return 2;case u.VEC3:return 3;case u.VEC4:case u.MAT2:return 4;case u.MAT3:return 9;case u.MAT4:return 16}}}class C{constructor(e){this._gltf=e,this._bufferViews=[],this._isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const t={byteLength:-1};e.buffers.push(t),this._buffer=t}addBufferView(e,t,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const i=new N(this,this._gltf,e,t,s);return this._bufferViews.push(i),i}getByteOffset(e){let t=0;for(const s of this._bufferViews){if(s===e)return t;t+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const t=[];for(const s of this._bufferViews){if(e&&s===e)return t;t.push(s.finalized)}return t}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this._getTotalSize(),t=new ArrayBuffer(e);let s=0;for(const e of this._bufferViews)e.writeOutToBuffer(t,s),s+=e.byteSize;return t}finalize(){if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=new Promise((e=>{e((0,n.as)(this.getViewFinalizePromises()))})).then((()=>{this._isFinalized=!0;const e=this.getArrayBuffer();this._buffer.byteLength=e.byteLength,this._buffer.uri=e})),this._gltf.extras?.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let e=0;for(const t of this._bufferViews)e+=t.byteSize;return e}}function O(e,t){if(e.components)for(const s of e.components)s.faces&&"smooth"===s.shading&&M(s,t)}function M(e,t){(0,w.Wi)(t.normal)&&(t.normal=new Float32Array(t.position.length));const s=e.faces,{position:i,normal:r}=t,n=s.length/3;for(let e=0;e<n;++e){const t=3*s[3*e+0],n=3*s[3*e+1],a=3*s[3*e+2],o=(0,T.s)(S,i[t+0],i[t+1],i[t+2]),h=(0,T.s)(I,i[n+0],i[n+1],i[n+2]),c=(0,T.s)(B,i[a+0],i[a+1],i[a+2]),f=(0,T.b)(h,h,o),u=(0,T.b)(c,c,o),l=(0,T.f)(f,f,u);r[t+0]+=l[0],r[t+1]+=l[1],r[t+2]+=l[2],r[n+0]+=l[0],r[n+1]+=l[1],r[n+2]+=l[2],r[a+0]+=l[0],r[a+1]+=l[1],r[a+2]+=l[2]}for(let e=0;e<r.length;e+=3)(0,T.s)(L,r[e],r[e+1],r[e+2]),(0,T.n)(L,L),r[e+0]=L[0],r[e+1]=L[1],r[e+2]=L[2]}const S=(0,y.c)(),I=(0,y.c)(),B=(0,y.c)(),L=(0,y.c)();var z=s(29573);const V=g.Z.getLogger("gltf");class F{constructor(e,t,s){this.params={},this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras,s=t.options.bufferOutputType===h.GLB||t.options.imageOutputType===c.GLB;s&&(t.binChunkBuffer=new C(this.gltf)),e.forEachScene((e=>{this._addScene(e)})),s&&t.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode((e=>{t.nodes||(t.nodes=[]);const s=this._addNode(e);t.nodes.push(s)})),this.gltf.scenes.push(t)}_addNode(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;(0,T.k)(s,y.Z)||(t.translation=(0,y.a)(s));const i=e.rotation;(0,E.j)(i,A.I)||(t.rotation=(0,A.b)(i));const r=e.scale;(0,T.k)(r,y.O)||(t.scale=(0,y.a)(r)),e.mesh&&e.mesh.vertexAttributes.position?t.mesh=this._addMesh(e.mesh):e.forEachNode((e=>{t.children||(t.children=[]);const s=this._addNode(e);t.children.push(s)}));const n=this.gltf.nodes.length;return this.gltf.nodes.push(t),n}_addMesh(e){this.gltf.meshes||(this.gltf.meshes=[]);const t={primitives:[]},s=this.gltf.extras,i=s.options.bufferOutputType===h.GLB;let r;r=i?s.binChunkBuffer:new C(this.gltf),this.params.origin||(this.params.origin=function(e){if((0,w.pC)(e.transform))return e.transform.getOriginPoint(e.spatialReference);const t=e.extent.xmax-e.extent.width/2,s=e.extent.ymax-e.extent.height/2,i=e.extent.zmin;return new a.Z({x:t,y:s,z:i,spatialReference:e.extent.spatialReference})}(e));const n=(0,R.Yq)(e.vertexAttributes,e.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});O(e,n),this._flipYZAxis(n);const o=r.addBufferView(x.g.FLOAT,u.VEC3,f.ARRAY_BUFFER);let c,l,d,_;n.normal&&(c=r.addBufferView(x.g.FLOAT,u.VEC3,f.ARRAY_BUFFER)),e.vertexAttributes.uv&&(l=r.addBufferView(x.g.FLOAT,u.VEC2,f.ARRAY_BUFFER)),n.tangent&&(d=r.addBufferView(x.g.FLOAT,u.VEC4,f.ARRAY_BUFFER)),e.vertexAttributes.color&&(_=r.addBufferView(x.g.UNSIGNED_BYTE,u.VEC4,f.ARRAY_BUFFER)),o.startAccessor("POSITION"),c&&c.startAccessor("NORMAL"),l&&l.startAccessor("TEXCOORD_0"),d&&d.startAccessor("TANGENT"),_&&_.startAccessor("COLOR_0");const p=n.position.length/3,{position:g,normal:m,tangent:E}=n,{color:A,uv:T}=e.vertexAttributes;for(let e=0;e<p;++e)o.push(g[3*e+0]),o.push(g[3*e+1]),o.push(g[3*e+2]),c&&(0,w.pC)(m)&&(c.push(m[3*e+0]),c.push(m[3*e+1]),c.push(m[3*e+2])),l&&(0,w.pC)(T)&&(l.push(T[2*e+0]),l.push(T[2*e+1])),d&&(0,w.pC)(E)&&(d.push(E[4*e+0]),d.push(E[4*e+1]),d.push(E[4*e+2]),d.push(E[4*e+3])),_&&(0,w.pC)(A)&&(_.push(A[4*e+0]),_.push(A[4*e+1]),_.push(A[4*e+2]),_.push(A[4*e+3]));const y=o.endAccessor(),b=this._addAccessor(o.index,y);let N,M,S,I,B;if(c){const e=c.endAccessor();N=this._addAccessor(c.index,e)}if(l){const e=l.endAccessor();M=this._addAccessor(l.index,e)}if(d){const e=d.endAccessor();S=this._addAccessor(d.index,e)}if(_){const e=_.endAccessor();I=this._addAccessor(_.index,e)}e.components&&e.components.length>0&&e.components[0].faces?(B=r.addBufferView(x.g.UNSIGNED_INT,u.SCALAR,f.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(B,e.components,t,b,N,M,S,I)):this._addMeshVertexNonIndexed(e.components,t,b,N,M,S,I),o.finalize(),c&&c.finalize(),l&&l.finalize(),d&&d.finalize(),B&&B.finalize(),_&&_.finalize(),i||r.finalize();const L=this.gltf.meshes.length;return this.gltf.meshes.push(t),L}_flipYZAxis({position:e,normal:t,tangent:s}){this._flipYZBuffer(e,3),this._flipYZBuffer(t,3),this._flipYZBuffer(s,4)}_flipYZBuffer(e,t){if(!(0,w.Wi)(e))for(let s=1,i=2;s<e.length;s+=t,i+=t){const t=e[s],r=e[i];e[s]=r,e[i]=-t}}_addMaterial(e){if(null===e)return;const t=this._materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=d.MASK;break;case"auto":case"blend":s.alphaMode=d.BLEND}.5!==e.alphaCutoff&&(s.alphaCutoff=e.alphaCutoff),e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const i=e=>e**2.1,r=e=>{const t=e.toRgba();return t[0]=i(t[0]/255),t[1]=i(t[1]/255),t[2]=i(t[2]/255),t};if((0,w.pC)(e.color)&&(s.pbrMetallicRoughness.baseColorFactor=r(e.color)),(0,w.pC)(e.colorTexture)&&(s.pbrMetallicRoughness.baseColorTexture={index:this._addTexture(e.colorTexture)}),(0,w.pC)(e.normalTexture)&&(s.normalTexture={index:this._addTexture(e.normalTexture)}),e instanceof b.Z){if((0,w.pC)(e.emissiveTexture)&&(s.emissiveTexture={index:this._addTexture(e.emissiveTexture)}),(0,w.pC)(e.emissiveColor)){const t=r(e.emissiveColor);s.emissiveFactor=[t[0],t[1],t[2]]}(0,w.pC)(e.occlusionTexture)&&(s.occlusionTexture={index:this._addTexture(e.occlusionTexture)}),(0,w.pC)(e.metallicRoughnessTexture)&&(s.pbrMetallicRoughness.metallicRoughnessTexture={index:this._addTexture(e.metallicRoughnessTexture)}),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,V.warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const n=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(e),n}_addTexture(e){const t=this.gltf.textures??[];return this.gltf.textures=t,(0,m.s1)(this._textureMap,e,(()=>{const s={sampler:this._addSampler(e),source:this._addImage(e)},i=t.length;return t.push(s),i}))}_addImage(e){const t=this._imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{const t=e.data;s.extras=t;for(let e=0;e<this.gltf.images.length;++e)if(t===this.gltf.images[e].extras)return e;const i=this.gltf.extras;switch(i.options.imageOutputType){case c.GLB:{const e=i.binChunkBuffer.addBufferView(x.g.UNSIGNED_BYTE,u.SCALAR),r=(0,z.lW)(t).then((({data:e,type:t})=>(s.mimeType=t,e)));e.writeAsync(r).then((()=>{e.finalize()})),s.bufferView=e.index;break}case c.DataURI:s.uri=(0,z.$e)(t);break;default:i.promises.push((0,z.lW)(t).then((({data:e,type:t})=>{s.uri=e,s.mimeType=t})))}}const i=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(e,i),i}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=x.e8.REPEAT,s=x.e8.REPEAT;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=x.e8.CLAMP_TO_EDGE,s=x.e8.CLAMP_TO_EDGE;break;case"mirror":t=x.e8.MIRRORED_REPEAT,s=x.e8.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":s=x.e8.CLAMP_TO_EDGE;break;case"mirror":s=x.e8.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=x.e8.CLAMP_TO_EDGE;break;case"mirror":t=x.e8.MIRRORED_REPEAT}}const i={wrapS:t,wrapT:s};for(let e=0;e<this.gltf.samplers.length;++e)if(JSON.stringify(i)===JSON.stringify(this.gltf.samplers[e]))return e;const r=this.gltf.samplers.length;return this.gltf.samplers.push(i),r}_addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const i=this.gltf.accessors.length;return this.gltf.accessors.push(s),i}_addMeshVertexIndexed(e,t,s,i,r,n,a,o){for(const h of t){e.startAccessor("INDICES");for(let t=0;t<h.faces.length;++t)e.push(h.faces[t]);const t=e.endAccessor(),c={attributes:{POSITION:i},indices:this._addAccessor(e.index,t),material:this._addMaterial(h.material)};r&&"flat"!==h.shading&&(c.attributes.NORMAL=r),n&&(c.attributes.TEXCOORD_0=n),a&&"flat"!==h.shading&&(c.attributes.TANGENT=a),o&&(c.attributes.COLOR_0=o),s.primitives.push(c)}}_addMeshVertexNonIndexed(e,t,s,i,r,n,a){const o={attributes:{POSITION:s}};i&&(o.attributes.NORMAL=i),r&&(o.attributes.TEXCOORD_0=r),n&&(o.attributes.TANGENT=n),a&&(o.attributes.COLOR_0=a),e&&(o.material=this._addMaterial(e[0].material)),t.primitives.push(o)}}var D=s(7753);class P{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){(0,D.Od)(this._scenes,e)}forEachScene(e){this._scenes.forEach(e)}}class U{constructor(e){this.mesh=e,this.name="",this.translation=(0,y.c)(),this.rotation=(0,A.a)(),this.scale=(0,y.a)(y.O),this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}set rotationAngles(e){(0,E.k)(this.rotation,e[0],e[1],e[2])}}const G="model.glb";class v{constructor(){this.name="",this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}}class k{constructor(e,t){this._file={type:"model/gltf-binary",data:e},this.origin=t}buffer(){return Promise.resolve(this._file)}download(e){(0,r.io)(new Blob([this._file.data],{type:this._file.type}),e)}}function Y(e,t){const s=new P,i=new v;return s.addScene(i),i.addNode(new U(e)),function(e,t){return function(e,t,s){const i=new F(e,t=t||{},s);let r=i.params;r?r.origin||(r.origin=new a.Z({x:-1,y:-1,z:-1})):r={origin:new a.Z({x:-1,y:-1,z:-1})};const f=r.origin,u=i.gltf,l=u.extras?.promises??[];let d=1,_=1,p=null;return(0,n.as)(l).then((()=>{const e={origin:f};delete u.extras;const s="number"==typeof t.jsonSpacing?t.jsonSpacing:4,i=JSON.stringify(u,((s,i)=>{if("extras"!==s){if(i instanceof ArrayBuffer){if((0,z.$7)(i))switch(t.imageOutputType){case c.DataURI:case c.GLB:break;case c.External:default:{const t=`img${_}.png`;return _++,e[t]=i,t}}switch(t.bufferOutputType){case h.DataURI:return(0,z.N5)(i);case h.GLB:if(p)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(p=i);case h.External:default:{const t=`data${d}.bin`;return d++,e[t]=i,t}}}return i}}),s);return t.bufferOutputType===h.GLB||t.imageOutputType===c.GLB?e[G]=new o(i,p).buffer:e["model.gltf"]=i,e}))}(e,{bufferOutputType:h.GLB,imageOutputType:c.GLB,jsonSpacing:0},t)}(s,t).then((e=>new k(e[G],e.origin)))}},29573:(e,t,s)=>{s.d(t,{$7:()=>f,$e:()=>a,E0:()=>h,N5:()=>c,lW:()=>o}),s(39994);var i=s(70375),r=s(61681),n=s(3466);function a(e){const t=h(e);return(0,r.pC)(t)?t.toDataURL():""}async function o(e){const t=h(e);if((0,r.Wi)(t))throw new i.Z("imageToArrayBuffer","Unsupported image type");const s=await async function(e){if(!(e instanceof HTMLImageElement))return"image/png";const t=e.src;if((0,n.HK)(t)){const e=(0,n.sJ)(t);return"image/jpeg"===e?.mediaType?e.mediaType:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}(e),a=await new Promise((e=>t.toBlob(e,s)));if(!a)throw new i.Z("imageToArrayBuffer","Failed to encode image");return{data:await a.arrayBuffer(),type:s}}function h(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");return e instanceof HTMLImageElement?s.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&s.putImageData(e,0,0),t}function c(e){const t=[],s=new Uint8Array(e);for(let e=0;e<s.length;e++)t.push(String.fromCharCode(s[e]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function f(e){if(e.byteLength<8)return!1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}}}]);