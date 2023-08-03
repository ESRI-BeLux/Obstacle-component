"use strict";(self.webpackChunkobstacle_component=self.webpackChunkobstacle_component||[]).push([[7808],{68403:(e,t,n)=>{n.d(t,{Z:()=>F});var r,o=n(36663),i=n(82064),a=n(61681),s=n(81977),l=(n(7753),n(7283),n(40266)),c=n(24455),p=n(39100),u=n(10663),f=n(61044),h=n(6766),g=n(8909),m=n(67666),d=n(90472),y=n(25726),x=n(34218),w=n(81936),b=n(86717),v=n(14789);let A=r=class extends i.wq{constructor(e){super(e),this.origin=(0,g.c)(),this.translation=(0,g.c)(),this.rotation=(0,x.Ue)(),this.scale=(0,g.f)(1,1,1),this.geographic=!0}get localMatrix(){const e=(0,p.c)();return(0,u.s)(C,(0,x.ZZ)(this.rotation),(0,x.WH)(this.rotation)),(0,c.g)(e,C,this.translation,this.scale),e}get localMatrixInverse(){return(0,c.a)((0,p.c)(),this.localMatrix)}applyLocal(e,t){return(0,h.m)(t,e,this.localMatrix)}applyLocalInverse(e,t){return(0,h.m)(t,e,this.localMatrixInverse)}project(e,t){const n=new Float64Array(e.length),r=w.fP.fromTypedArray(n),o=w.fP.fromTypedArray(e);if(this.geographic){const e=(0,y.rS)(t),i=(0,p.c)();return(0,d.Bm)(t,this.origin,i,e),(0,c.m)(i,i,this.localMatrix),(0,b.t)(r,o,i),(0,d.CM)(n,e,0,n,t,0,n.length/3),n}const{localMatrix:i,origin:a}=this;(0,c.h)(i,p.I)?(0,v.c)(r,o):(0,b.t)(r,o,i);for(let e=0;e<n.length;e+=3)n[e+0]+=a[0],n[e+1]+=a[1],n[e+2]+=a[2];return n}getOriginPoint(e){const[t,n,r]=this.origin;return new m.Z({x:t,y:n,z:r,spatialReference:e})}equals(e){return(0,a.pC)(e)&&this.geographic===e.geographic&&(0,h.k)(this.origin,e.origin)&&(0,c.j)(this.localMatrix,e.localMatrix)}clone(){const e={origin:(0,g.a)(this.origin),translation:(0,g.a)(this.translation),rotation:(0,x.Ue)(this.rotation),scale:(0,g.a)(this.scale),geographic:this.geographic};return new r(e)}};(0,o._)([(0,s.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],A.prototype,"origin",void 0),(0,o._)([(0,s.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],A.prototype,"translation",void 0),(0,o._)([(0,s.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],A.prototype,"rotation",void 0),(0,o._)([(0,s.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],A.prototype,"scale",void 0),(0,o._)([(0,s.Cb)({type:Boolean,nonNullable:!0,json:{write:!0}})],A.prototype,"geographic",void 0),(0,o._)([(0,s.Cb)()],A.prototype,"localMatrix",null),(0,o._)([(0,s.Cb)()],A.prototype,"localMatrixInverse",null),A=r=(0,o._)([(0,l.j)("esri.geometry.support.MeshTransform")],A);const C=(0,f.a)(),F=A},67341:(e,t,n)=>{function r(e,t){return e.isGeographic||e.isWebMercator&&(t?.geographic??!0)}n.d(t,{h:()=>r})},91780:(e,t,n)=>{n.d(t,{FF:()=>w,I5:()=>y,Yq:()=>b,iv:()=>d,w1:()=>x});var r=n(61681),o=n(17321),i=n(34344),a=n(24455),s=n(39100),l=n(1662),c=n(90472),p=n(25726),u=n(68403),f=n(81936),h=n(86717),g=n(67341),m=n(49921);function d(e,t,n){return(0,g.h)(t.spatialReference,n)?function(e,t,n){const r=t.spatialReference,o=R(t,n,E),i=new Float64Array(e.position.length),a=function(e,t,n,r){(0,h.t)(f.fP.fromTypedArray(r),f.fP.fromTypedArray(e),t);const o=new Float64Array(e.length);return(0,m.To)(r,o,n)}(e.position,o,r,i),s=(0,l.b)(L,o);return{position:a,normal:v(a,i,e.normal,s,r),tangent:A(a,i,e.tangent,s,r)}}(e,t,n):function(e,t,n){const r=new Float64Array(e.position.length),o=e.position,i=t.x,a=t.y,s=t.z||0,{horizontal:l,vertical:c}=P(n?n.unit:null,t.spatialReference);for(let e=0;e<o.length;e+=3)r[e+0]=o[e+0]*l+i,r[e+1]=o[e+1]*l+a,r[e+2]=o[e+2]*c+s;return{position:r,normal:e.normal,tangent:e.tangent}}(e,t,n)}function y(e,t,n){const{position:o,normal:i,tangent:a}=e;if((0,r.Wi)(t))return{position:o,normal:i,tangent:a};const s=t.localMatrix;return d({position:(0,m.zZ)(o,new Float64Array(o.length),s),normal:(0,r.pC)(i)?(0,m.w9)(i,new Float32Array(i.length),s):null,tangent:(0,r.pC)(a)?(0,m.VS)(a,new Float32Array(a.length),s):null},t.getOriginPoint(n),{geographic:t.geographic})}function x(e,t,n){if(n?.useTransform){const{position:r,normal:o,tangent:i}=e;return{vertexAttributes:{position:r,normal:o,tangent:i},transform:new u.Z({origin:[t.x,t.y,t.z??0],geographic:(0,g.h)(t.spatialReference,n)})}}return{vertexAttributes:d(e,t,n),transform:null}}function w(e,t,n){return(0,g.h)(t.spatialReference,n)?F(e,t,n):C(e,t,n)}function b(e,t,n,o){if((0,r.Wi)(t))return w(e,n,o);const i=y(e,t,n.spatialReference);return n.equals(t.getOriginPoint(n.spatialReference))?C(i,n,o):(0,g.h)(n.spatialReference,o)?F(i,n,o):C(i,n,o)}function v(e,t,n,o,i){if((0,r.Wi)(n))return null;const a=new Float32Array(n.length);return(0,h.a)(f.ct.fromTypedArray(a),f.ct.fromTypedArray(n),o),(0,m.Yk)(a,e,t,i,a),a}function A(e,t,n,o,i){if((0,r.Wi)(n))return null;const a=new Float32Array(n.length);(0,h.a)(f.ct.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),f.ct.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),o);for(let e=3;e<a.length;e+=4)a[e]=n[e];return(0,m.M2)(a,e,t,i,a),a}function C(e,t,n){const r=new Float64Array(e.position.length),o=e.position,i=t.x,a=t.y,s=t.z||0,{horizontal:l,vertical:c}=P(n?n.unit:null,t.spatialReference);for(let e=0;e<o.length;e+=3)r[e+0]=(o[e+0]-i)/l,r[e+1]=(o[e+1]-a)/l,r[e+2]=(o[e+2]-s)/c;return{position:r,normal:e.normal,tangent:e.tangent}}function F(e,t,n){const r=t.spatialReference;R(t,n,E);const o=(0,a.a)(T,E),i=new Float64Array(e.position.length),s=function(e,t,n,r){const o=(0,m.XO)(e,t,r),i=f.fP.fromTypedArray(o),a=new Float64Array(o.length),s=f.fP.fromTypedArray(a);return(0,h.t)(s,i,n),a}(e.position,r,o,i),c=(0,l.b)(L,o);return{position:s,normal:M(e.normal,e.position,i,r,c),tangent:Z(e.tangent,e.position,i,r,c)}}function R(e,t,n){(0,c.Bm)(e.spatialReference,[e.x,e.y,e.z||0],n,(0,p.rS)(e.spatialReference));const{horizontal:r,vertical:o}=P(t?t.unit:null,e.spatialReference);return(0,a.k)(n,n,[r,r,o]),n}function M(e,t,n,o,i){if((0,r.Wi)(e))return null;const a=(0,m.Iz)(e,t,n,o,new Float32Array(e.length)),s=f.ct.fromTypedArray(a);return(0,h.a)(s,s,i),a}function Z(e,t,n,o,i){if((0,r.Wi)(e))return null;const a=(0,m.wi)(e,t,n,o,new Float32Array(e.length)),s=f.ct.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);return(0,h.a)(s,s,i),a}function P(e,t){if((0,r.Wi)(e))return O;const n=t.isGeographic?1:(0,o.c9)(t),i=t.isGeographic?1:(0,o._R)(t),a=(0,o.En)(1,e,"meters");return{horizontal:a*n,vertical:a*i}}const E=(0,s.c)(),T=(0,s.c)(),L=(0,i.c)(),O={horizontal:1,vertical:1}},17808:(e,t,n)=>{n.r(t),n.d(t,{meshFeatureSetFromJSON:()=>Ce});var r=n(80085),o=n(61681),i=n(91772),a=n(36663),s=n(70375),l=n(53280),c=n(68309),p=n(13802),u=n(64189),f=n(78668),h=n(76868),g=n(81977),m=(n(7753),n(7283),n(40266)),d=n(8909),y=n(20031),x=n(67666),w=n(89542),b=n(34218),v=n(77727),A=n(68403),C=n(124),F=n(35413),R=n(90472),M=n(67341),Z=n(91780);const P=p.Z.getLogger("esri.geometry.support.meshUtils.centerAt");const E=(0,d.c)(),T=(0,d.c)();var L=n(3466);function O(e){const t=(0,L.Yd)(e.url);return n=>{const r=(0,L.PF)(n,t,t),o=r?r.replace(/^ *\.\//,""):null;return(o?e.files.get(o):null)??n}}async function z(e,t){return e instanceof Blob?I.fromBlob(e):"string"==typeof e?new I(e):Array.isArray(e)?async function(e,t){const n=new Map;let r=null;const i=await(0,f.WW)(e.map((async e=>({name:e.name,source:await z(e instanceof Blob?e:e.source,t)})))),a=[];for(const e of i)e&&((0,f.Hc)(t)?e.source.dispose():a.push(e));(0,f.k_)(t);for(const{name:e,source:t}of a)((0,o.Wi)(r)||/\.(gltf|glb)/i.test(e))&&(r=t.url),n.set(e,t.url),t.files&&t.files.forEach(((e,t)=>n.set(t,e)));if((0,o.Wi)(r))throw new s.Z("mesh-load-external:missing-files","Missing files to load external mesh source");return new I(r,(()=>a.forEach((({source:e})=>e.dispose()))),n)}(e,t):async function(e,t){const{default:r}=await(0,f.Hl)(Promise.resolve().then(n.bind(n,66341)),t),o="string"==typeof e.multipart[0]?await Promise.all(e.multipart.map((async e=>(await r(e,{responseType:"array-buffer"})).data))):e.multipart;return I.fromBlob(new Blob(o))}(e,t)}class I{constructor(e,t=(()=>{}),n=new Map){this.url=e,this.dispose=t,this.files=n}static fromBlob(e){const t=URL.createObjectURL(e);return new I(t,(()=>URL.revokeObjectURL(t)))}}var _=n(1662),S=n(34344),k=n(39100),N=n(6766),j=n(25726),U=n(49921);function W(e,t){if(e)for(let n=0;n<e.length;n+=3)for(let r=0;r<3;r++)e[n+r]+=t[r]}const B=(0,d.c)(),D=(0,k.c)(),$=(0,S.c)(),G={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[3,1,2],west:[-3,-1,2],north:[-1,3,2],south:[1,-3,2],up:[1,2,3],down:[1,-2,-3]}};function Y(e,t,n){e.isPlane||function(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}(e),function(e,t){if(null==t)return;const n="number"==typeof t?[t,t,t]:[null!=t.width?t.width:1,null!=t.depth?t.depth:1,null!=t.height?t.height:1];H[0]=n[0],H[4]=n[1],H[8]=n[2];for(let t=0;t<e.position.length;t+=3){for(let n=0;n<3;n++)q[n]=e.position[t+n];(0,N.t)(q,q,H);for(let n=0;n<3;n++)e.position[t+n]=q[n]}if(n[0]!==n[1]||n[1]!==n[2]){H[0]=1/n[0],H[4]=1/n[1],H[8]=1/n[2];for(let t=0;t<e.normal.length;t+=3){for(let n=0;n<3;n++)q[n]=e.normal[t+n];(0,N.t)(q,q,H),(0,N.n)(q,q);for(let n=0;n<3;n++)e.normal[t+n]=q[n]}}}(e,n?.size);const{vertexAttributes:r,transform:o}=(0,Z.w1)(e,t,n);return{vertexAttributes:new C.Q({...r,uv:e.uv}),transform:o,components:[new v.Z({faces:e.faces,material:n&&n.material||null})],spatialReference:t.spatialReference}}const K={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},X={south:0,east:1,north:2,west:3,up:4,down:5},q=(0,d.c)(),H=(0,S.c)();var V=n(24455);const J=p.Z.getLogger("esri.geometry.support.meshUtils.rotate");function Q(e,t,n,r=d.Z){if(!(0,o.Wi)(e)){(0,V.d)(re,(0,b.WH)(t),(0,b.ZZ)(t));for(let t=0;t<e.length;t+=n){for(let n=0;n<3;n++)ee[n]=e[t+n]-r[n];(0,N.m)(ee,ee,re);for(let n=0;n<3;n++)e[t+n]=ee[n]+r[n]}}}const ee=(0,d.c)(),te=(0,d.c)(),ne=(0,b.Ue)(),re=(0,k.c)(),oe=(0,S.c)(),ie=(0,d.c)(),ae=p.Z.getLogger("esri.geometry.support.meshUtils.scale");function se(e,t,n=d.Z){if(e)for(let r=0;r<e.length;r+=3){for(let t=0;t<3;t++)le[t]=e[r+t]-n[t];(0,N.g)(le,le,t);for(let t=0;t<3;t++)e[r+t]=le[t]+n[t]}}const le=(0,d.c)(),ce=(0,d.c)(),pe=(0,d.c)();var ue;const fe="esri.geometry.Mesh";let he=ue=class extends((0,l.p)(c.Z.LoadableMixin((0,u.v)(y.Z)))){constructor(e){super(e),this.components=null,this.transform=null,this.external=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new C.Q,this.type="mesh"}initialize(){((0,o.Wi)(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when((()=>{this.handles.add((0,h.YP)((()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map((e=>e.clone()))})),(()=>this._set("external",null)),{once:!0,sync:!0}))}))}get hasExtent(){return!this.loaded&&(0,o.pC)(this.external)&&(0,o.pC)(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}get _boundingInfo(){const e=this.vertexAttributes.position,t=this.spatialReference;if(0===e.length||this.components&&0===this.components.length)return{extent:new i.Z({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t}),center:new x.Z({x:0,y:0,z:0,spatialReference:t})};const n=(0,o.pC)(this.transform)?this.transform.project(e,t):e;let r=1/0,a=1/0,s=1/0,l=-1/0,c=-1/0,p=-1/0,u=0,f=0,h=0;const g=n.length,m=1/(g/3);let d=0;for(;d<g;){const e=n[d++],t=n[d++],o=n[d++];r=Math.min(r,e),a=Math.min(a,t),s=Math.min(s,o),l=Math.max(l,e),c=Math.max(c,t),p=Math.max(p,o),u+=m*e,f+=m*t,h+=m*o}return{extent:new i.Z({xmin:r,ymin:a,zmin:s,xmax:l,ymax:c,zmax:p,spatialReference:t}),center:new x.Z({x:u,y:f,z:h,spatialReference:t})}}get anchor(){if((0,o.pC)(this.transform))return this.transform.getOriginPoint(this.spatialReference);const e=this._boundingInfo;return new x.Z({x:e.center.x,y:e.center.y,z:e.extent.zmin,spatialReference:this.spatialReference})}get origin(){return(0,o.pC)(this.transform)?this.transform.getOriginPoint(this.spatialReference):this._boundingInfo.center}get extent(){return!this.loaded&&(0,o.pC)(this.external)&&(0,o.pC)(this.external.extent)?this.external.extent.clone():this._boundingInfo.extent}addComponent(e){this.loaded?(this.components||(this.components=[]),this.components.push(v.Z.from(e)),this.notifyChange("components")):p.Z.getLogger(this.declaredClass).error("addComponent()","Mesh must be loaded before applying operations")}removeComponent(e){if(this.loaded){if(this.components){const t=this.components.indexOf(e);if(-1!==t)return this.components.splice(t,1),void this.notifyChange("components")}p.Z.getLogger(this.declaredClass).error("removeComponent()","Provided component is not part of the list of components")}else p.Z.getLogger(this.declaredClass).error("removeComponent()","Mesh must be loaded before applying operations")}rotate(e,t,n,r){return(0,b.uT)(ge.x,e,me),(0,b.uT)(ge.y,t,de),(0,b.uT)(ge.z,n,ye),(0,b.qC)(me,de,me),(0,b.qC)(me,ye,me),function(e,t,n){if(!e.vertexAttributes||!e.vertexAttributes.position||0===t[3])return;const r=e.spatialReference;if((0,o.pC)(e.transform)){null!=n?.geographic&&n.geographic!==e.transform.geographic&&J.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`);const o=n?.origin??e.transform.getOriginPoint(r);!function(e,t,n){const r=(0,N.s)(ee,n.x,n.y,n.z),o=(0,N.b)(ee,r,e.origin);e.applyLocalInverse(o,te),e.rotation=(0,b.qC)(e.rotation,t,(0,b.Ue)()),e.applyLocalInverse(o,o),(0,N.b)(o,o,te),e.translation=(0,N.a)((0,d.c)(),e.translation,o)}(e.transform,t,o)}else{const r=n?.origin??e.origin;(0,M.h)(e.spatialReference,n)?function(e,t,n){const r=e.spatialReference,i=(0,j.rS)(r),a=ie;(0,R.KC)(n,a,i)||(0,R.KC)(e.origin,a,i);const s=e.vertexAttributes.position,l=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,p=new Float64Array(s.length),u=(0,o.pC)(l)?new Float32Array(l.length):null,f=(0,o.pC)(c)?new Float32Array(c.length):null;(0,R.Bm)(i,a,re,i),(0,_.f)(oe,re);const h=ne;(0,N.t)((0,b.ZZ)(ne),(0,b.ZZ)(t),oe),h[3]=t[3],(0,U.XO)(s,r,p),(0,o.pC)(l)&&(0,o.pC)(u)&&(0,U.Iz)(l,s,p,r,u),(0,o.pC)(c)&&(0,o.pC)(f)&&(0,U.wi)(c,s,p,r,f),Q(p,h,3,a),(0,U.To)(p,s,r),(0,o.pC)(l)&&(0,o.pC)(u)&&(Q(u,h,3),(0,U.Yk)(u,s,p,r,l)),(0,o.pC)(c)&&(0,o.pC)(f)&&(Q(f,h,4),(0,U.M2)(f,s,p,r,c)),e.vertexAttributesChanged()}(e,t,r):function(e,t,n){const r=ie;if(!(0,R.KC)(n,r,e.spatialReference)){const t=e.origin;r[0]=t.x,r[1]=t.y,r[2]=t.z,J.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}Q(e.vertexAttributes.position,t,3,r),Q(e.vertexAttributes.normal,t,3),Q(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}(e,t,r)}}(this,me,r),this}offset(e,t,n,r){return this.loaded?(xe[0]=e,xe[1]=t,xe[2]=n,function(e,t,n){var r,i;e.vertexAttributes&&e.vertexAttributes.position&&((0,o.pC)(e.transform)?(null!=n?.geographic&&n.geographic!==e.transform.geographic&&p.Z.getLogger("esri.geometry.support.meshUtils.offset").warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`),function(e,t){const n=e.origin;e.origin=(0,N.a)((0,d.c)(),n,t)}(e.transform,t)):(0,M.h)(e.spatialReference,n)?function(e,t){const n=e.spatialReference,r=e.vertexAttributes.position,i=e.vertexAttributes.normal,a=e.vertexAttributes.tangent,s=new Float64Array(r.length),l=(0,o.pC)(i)?new Float32Array(i.length):null,c=(0,o.pC)(a)?new Float32Array(a.length):null,p=e.extent.center,u=B;(0,R.Bm)(n,[p.x,p.y,p.z],D,(0,j.rS)(n)),(0,_.f)($,D),(0,N.t)(u,t,$),(0,U.XO)(r,n,s),(0,o.pC)(i)&&(0,o.pC)(l)&&(0,U.Iz)(i,r,s,n,l),(0,o.pC)(a)&&(0,o.pC)(c)&&(0,U.wi)(a,r,s,n,c),W(s,u),(0,U.To)(s,r,n),(0,o.pC)(i)&&(0,o.pC)(l)&&(0,U.Yk)(l,r,s,n,i),(0,o.pC)(a)&&(0,o.pC)(c)&&(0,U.M2)(c,r,s,n,a),e.vertexAttributesChanged()}(e,t):(i=t,W((r=e).vertexAttributes.position,i),r.vertexAttributesChanged()))}(this,xe,r),this):(p.Z.getLogger(this.declaredClass).error("offset()","Mesh must be loaded before applying operations"),this)}scale(e,t){return this.loaded?(function(e,t,n){if(!e.vertexAttributes||!e.vertexAttributes.position)return;const r=e.spatialReference;if((0,o.pC)(e.transform)){null!=n?.geographic&&n.geographic!==e.transform.geographic&&ae.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`);const o=n?.origin??e.transform.getOriginPoint(r);!function(e,t,n){const r=(0,N.s)(le,n.x,n.y,n.z),o=(0,N.b)(le,r,e.origin);e.applyLocalInverse(o,ce);const i=(0,N.g)((0,d.c)(),e.scale,t);e.scale=i,e.applyLocalInverse(o,o),(0,N.b)(o,o,ce),e.translation=(0,N.a)((0,d.c)(),e.translation,o)}(e.transform,t,o)}else{const r=(0,M.h)(e.spatialReference,n),i=n&&n.origin||e.origin;r?function(e,t,n){const r=e.spatialReference,i=(0,j.rS)(r),a=pe;(0,R.KC)(n,a,i)||(0,R.KC)(e.origin,a,i);const s=e.vertexAttributes.position,l=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,p=new Float64Array(s.length),u=(0,o.pC)(l)?new Float32Array(l.length):null,f=(0,o.pC)(c)?new Float32Array(c.length):null;(0,U.XO)(s,r,p),(0,o.pC)(l)&&(0,o.pC)(u)&&(0,U.Iz)(l,s,p,r,u),(0,o.pC)(c)&&(0,o.pC)(f)&&(0,U.wi)(c,s,p,r,f),se(p,t,a),(0,U.To)(p,s,r),(0,o.pC)(l)&&(0,o.pC)(u)&&(0,U.Yk)(u,s,p,r,l),(0,o.pC)(c)&&(0,o.pC)(f)&&(0,U.M2)(f,s,p,r,c),e.vertexAttributesChanged()}(e,t,i):function(e,t,n){const r=pe;if(!(0,R.KC)(n,r,e.spatialReference)){const t=e.origin;r[0]=t.x,r[1]=t.y,r[2]=t.z,ae.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}se(e.vertexAttributes.position,t,r),e.vertexAttributesChanged()}(e,t,i)}}(this,e,t),this):(p.Z.getLogger(this.declaredClass).error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(e,t){return this.loaded?(function(e,t,n){if(!e.vertexAttributes||!e.vertexAttributes.position)return;const r=n?.origin??e.origin;(0,o.pC)(e.transform)?(null!=n?.geographic&&n.geographic!==e.transform.geographic&&P.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`),function(e,t,n){const r=t.x-n.x,o=t.y-n.y,i=t.hasZ&&n.hasZ?t.z-n.z:0,a=e.origin;e.origin=[a[0]+r,a[1]+o,a[2]+i]}(e.transform,t,r)):(0,M.h)(e.spatialReference,n)?function(e,t,n){const r=(0,Z.FF)(e.vertexAttributes,n,{geographic:!0}),{position:o,normal:i,tangent:a}=(0,Z.iv)(r,t,{geographic:!0});e.vertexAttributes.position=o,e.vertexAttributes.normal=i,e.vertexAttributes.tangent=a,e.vertexAttributesChanged()}(e,t,r):function(e,t,n){const r=T,o=E;if((0,R.KC)(t,o,e.spatialReference)){if(!(0,R.KC)(n,r,e.spatialReference)){const t=e.origin;r[0]=t.x,r[1]=t.y,r[2]=t.z,P.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}(function(e,t,n){if(e)for(let r=0;r<e.length;r+=3)for(let o=0;o<3;o++)e[r+o]+=t[o]-n[o]})(e.vertexAttributes.position,o,r),e.vertexAttributesChanged()}else P.error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid})`)}(e,t,r)}(this,e,t),this):(p.Z.getLogger(this.declaredClass).error("centerAt()","Mesh must be loaded before applying operations"),this)}load(e){return(0,o.pC)(this.external)&&this.addResolvingPromise(async function(e,t,r){const{loadGLTFMesh:i}=await(0,f.Hl)(n.e(216).then(n.bind(n,40216)),r),a=await z(t,r),s=i(new x.Z({x:0,y:0,z:0,spatialReference:e.spatialReference}),a.url,{resolveFile:O(a),useTransform:!0,signal:(0,o.pC)(r)?r.signal:null});s.then((()=>a.dispose()),(()=>a.dispose()));const{vertexAttributes:l,components:c}=await s;e.vertexAttributes=l,e.components=c}(this,this.external.source,e)),Promise.resolve(this)}updateExternalSource(e){this._set("external",e)}clone(){let e=null;if(this.components){const t=new Map,n=new Map;e=this.components.map((e=>e.cloneWithDeduplication(t,n)))}const t={components:e,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:(0,o.pC)(this.transform)?this.transform.clone():null,external:(0,o.pC)(this.external)?{source:this.external.source,extent:(0,o.pC)(this.external.extent)?this.external.extent.clone():null}:null};return new ue(t)}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const t=n.e(627).then(n.bind(n,20627)),r=this.load(),o=await Promise.all([t,r]),{toBinaryGLTF:i}=o[0];return i(this,e)}static createBox(e,t){if(!(e instanceof x.Z))return p.Z.getLogger(fe).error(".createBox()","expected location to be a Point instance"),null;const n=new ue(Y(function(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:n}=K,r=4*e.length,o=new Float64Array(3*r),i=new Float32Array(3*r),a=new Float32Array(2*r),s=new Uint32Array(2*e.length*3);let l=0,c=0,p=0,u=0;for(let r=0;r<e.length;r++){const f=e[r],h=l/3;for(const e of t)s[u++]=h+e;const g=f.corners;for(let e=0;e<4;e++){const t=g[e];let r=0;a[p++]=.25*n[e][0]+f.uvOrigin[0],a[p++]=f.uvOrigin[1]-.25*n[e][1];for(let e=0;e<3;e++)0!==f.axis[e]?(o[l++]=.5*f.axis[e],i[c++]=f.axis[e]):(o[l++]=.5*t[r++],i[c++]=0)}}return{position:o,normal:i,uv:a,faces:s}}(),e,t));return t&&t.imageFace&&"all"!==t.imageFace?function(e,t){const n=e.components[0],r=n.faces,i=X[t],a=6*i,s=new Array(6),l=new Array(r.length-6);let c=0,p=0;for(let e=0;e<r.length;e++)e>=a&&e<a+6?s[c++]=r[e]:l[p++]=r[e];if((0,o.pC)(e.vertexAttributes.uv)){const t=new Float32Array(e.vertexAttributes.uv),n=4*i*2,r=[0,1,1,1,1,0,0,0];for(let e=0;e<r.length;e++)t[n+e]=r[e];e.vertexAttributes.uv=t}return e.components=[new v.Z({faces:s,material:n.material}),new v.Z({faces:l})],e}(n,t.imageFace):n}static createSphere(e,t){return e instanceof x.Z?new ue(Y(function(e=0){const t=Math.round(8*2**e),n=2*t,r=(t-1)*(n+1)+2*n,o=new Float64Array(3*r),i=new Float32Array(3*r),a=new Float32Array(2*r),s=new Uint32Array((t-1)*n*2*3);let l=0,c=0,p=0,u=0;for(let e=0;e<=t;e++){const r=e/t*Math.PI+.5*Math.PI,f=Math.cos(r),h=Math.sin(r);q[2]=h;const g=0===e||e===t,m=g?n-1:n;for(let r=0;r<=m;r++){const h=r/m*2*Math.PI;q[0]=-Math.sin(h)*f,q[1]=Math.cos(h)*f;for(let e=0;e<3;e++)o[l]=.5*q[e],i[l]=q[e],++l;a[c++]=(r+(g?.5:0))/n,a[c++]=e/t,0!==e&&r!==n&&(e!==t&&(s[p++]=u,s[p++]=u+1,s[p++]=u-n),1!==e&&(s[p++]=u,s[p++]=u-n,s[p++]=u-n-1)),u++}}return{position:o,normal:i,uv:a,faces:s}}(t&&t.densificationFactor||0),e,t)):(p.Z.getLogger(fe).error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(e,t){return e instanceof x.Z?new ue(Y(function(e=0){const t=Math.round(16*2**e),n=4*(t+1)+2*t,r=new Float64Array(3*n),o=new Float32Array(3*n),i=new Float32Array(2*n),a=new Uint32Array(4*t*3);let s=0,l=0,c=0,p=0,u=0;for(let e=0;e<=5;e++){const n=0===e||5===e,f=e<=1||e>=4,h=2===e||4===e,g=n?t-1:t;for(let m=0;m<=g;m++){const d=m/g*2*Math.PI,y=n?0:.5;q[0]=y*Math.sin(d),q[1]=y*-Math.cos(d),q[2]=e<=2?.5:-.5;for(let t=0;t<3;t++)r[s++]=q[t],o[l++]=f?2===t?e<=1?1:-1:0:2===t?0:q[t]/y;i[c++]=(m+(n?.5:0))/t,i[c++]=e<=1?1*e/3:e<=3?1*(e-2)/3+1/3:1*(e-4)/3+2/3,h||0===e||m===t||(5!==e&&(a[p++]=u,a[p++]=u+1,a[p++]=u-t),1!==e&&(a[p++]=u,a[p++]=u-t,a[p++]=u-t-1)),u++}}return{position:r,normal:o,uv:i,faces:a}}(t&&t.densificationFactor||0),e,t)):(p.Z.getLogger(fe).error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(e,t){if(!(e instanceof x.Z))return p.Z.getLogger(fe).error(".createPlane()","expected location to be a Point instance"),null;const n=t?.facing??"up",r=function(e,t){const n="number"==typeof t?t:null!=t?t.width:1,r="number"==typeof t?t:null!=t?t.height:1;switch(e){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}(n,t?.size);return new ue(Y(function(e){const t=G.facingAxisOrderSwap[e],n=G.position,r=G.normal,o=new Float64Array(n.length),i=new Float32Array(r.length);let a=0;for(let e=0;e<4;e++){const e=a;for(let s=0;s<3;s++){const l=t[s],c=Math.abs(l)-1,p=l>=0?1:-1;o[a]=n[e+c]*p,i[a]=r[e+c]*p,a++}}return{position:o,normal:i,uv:new Float32Array(G.uv),faces:new Uint32Array(G.faces),isPlane:!0}}(n),e,{...t,size:r}))}static createFromPolygon(e,t){if(!(e instanceof w.Z))return p.Z.getLogger(fe).error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const n=(0,F.bT)(e);return new ue({vertexAttributes:new C.Q({position:n.position}),components:[new v.Z({faces:n.faces,shading:"flat",material:t?.material??null})],spatialReference:e.spatialReference})}static async createFromGLTF(e,t,r){if(!(e instanceof x.Z))throw p.Z.getLogger(fe).error(".createfromGLTF()","expected location to be a Point instance"),new s.Z("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:o}=await(0,f.Hl)(n.e(216).then(n.bind(n,40216)),r);return new ue(await o(e,t,r))}static createWithExternalSource(e,t,n){const r=n?.extent??null,o=n?.transform?.clone()??new A.Z;o.origin=[e.x,e.y,e.z??0];const i=e.spatialReference;return new ue({external:{source:t,extent:r},transform:o,spatialReference:i})}static createIncomplete(e,t){const n=t?.transform?.clone()??new A.Z;n.origin=[e.x,e.y,e.z??0];const r=e.spatialReference,o=new ue({transform:n,spatialReference:r});return o.addResolvingPromise(Promise.reject(new s.Z("mesh-incomplete","Mesh resources are not complete"))),o}};(0,a._)([(0,g.Cb)({type:[v.Z],json:{write:!0}})],he.prototype,"components",void 0),(0,a._)([(0,g.Cb)({type:A.Z,json:{write:!0}})],he.prototype,"transform",void 0),(0,a._)([(0,g.Cb)({constructOnly:!0})],he.prototype,"external",void 0),(0,a._)([(0,g.Cb)({readOnly:!0})],he.prototype,"hasExtent",null),(0,a._)([(0,g.Cb)({readOnly:!0})],he.prototype,"_boundingInfo",null),(0,a._)([(0,g.Cb)({readOnly:!0})],he.prototype,"anchor",null),(0,a._)([(0,g.Cb)({readOnly:!0})],he.prototype,"origin",null),(0,a._)([(0,g.Cb)({readOnly:!0,json:{read:!1}})],he.prototype,"extent",null),(0,a._)([(0,g.Cb)({readOnly:!0,json:{read:!1,write:!0,default:!0}})],he.prototype,"hasZ",void 0),(0,a._)([(0,g.Cb)({readOnly:!0,json:{read:!1,write:!0,default:!1}})],he.prototype,"hasM",void 0),(0,a._)([(0,g.Cb)({type:C.Q,nonNullable:!0,json:{write:!0}})],he.prototype,"vertexAttributes",void 0),he=ue=(0,a._)([(0,m.j)(fe)],he);const ge={x:(0,d.f)(1,0,0),y:(0,d.f)(0,1,0),z:(0,d.f)(0,0,1)},me=(0,b.Ue)(),de=(0,b.Ue)(),ye=(0,b.Ue)(),xe=(0,d.c)(),we=he;var be,ve,Ae=n(51211);function Ce(e,t,n){const i=n.features;n.features=[],delete n.geometryType;const a=Ae.default.fromJSON(n);if(a.geometryType="mesh",!n.assetMaps)return a;const s=function(e,t){const n=new Map;for(const e of t){const t=e.parentGlobalId;if(null==t)continue;const r=e.assetName,o=e.assetURL,i=e.conversionStatus;let a=n.get(t);if(null!=a)throw new Error("multiple asset parts not expected.");switch(a={name:r,status:be.FAILED,url:o,geographic:Re(e.flags).projectVertices},n.set(t,a),i){case"COMPLETED":case"SUBMITTED":a.status=be.COMPLETED;break;case"INPROGRESS":a.status=be.PENDING;break;default:a.status=be.FAILED}}return n}(0,n.assetMaps),l=a.spatialReference,c=n.globalIdFieldName,p=(0,o.Wi)(e.outFields)||!e.outFields.length?()=>({}):(u=e.outFields.includes("*")?null:new Set(e.outFields),({attributes:e})=>{if(!e)return{};if(!u)return e;for(const t in e)u.has(t)||delete e[t];return e});var u;for(const e of i){const n=Fe(e,c,l,t,s);(0,o.pC)(n)&&a.features.push(new r.Z({geometry:n,attributes:p(e)}))}return a}function Fe(e,t,n,r,o){const a=e.attributes[t],s=o.get(a);if(null==s||s.status===be.FAILED||null==s.url)return null;const l=function({attributes:e},t,{transformFieldRoles:n}){return new x.Z({x:e[n.originX],y:e[n.originY],z:e[n.originZ],spatialReference:t})}(e,n,r),c=i.Z.fromJSON(e.geometry);c.spatialReference=n;const p=function(e,{transformFieldRoles:t},n){return new A.Z({translation:[e[t.translationX],e[t.translationY],e[t.translationZ]],rotation:(0,b.uT)([e[t.rotationX],e[t.rotationY],e[t.rotationZ]],e[t.rotationDeg]),scale:[e[t.scaleX],e[t.scaleY],e[t.scaleZ]],geographic:n})}(e.attributes,r,s.geographic);return s.status===be.PENDING?we.createIncomplete(l,{extent:c,transform:p}):we.createWithExternalSource(l,[{name:s.name,source:s.url}],{extent:c,transform:p})}function Re(e){return{projectVertices:e.includes("PROJECT_VERTICES")}}(ve=be||(be={}))[ve.FAILED=0]="FAILED",ve[ve.PENDING=1]="PENDING",ve[ve.COMPLETED=2]="COMPLETED"}}]);