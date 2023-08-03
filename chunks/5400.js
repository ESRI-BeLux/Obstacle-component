"use strict";(self.webpackChunkobstacle_component=self.webpackChunkobstacle_component||[]).push([[5400],{75400:(t,e,n)=>{n.r(e),n.d(e,{default:()=>l});var s=n(36663),o=n(61681),i=n(78668),d=(n(13802),n(7283),n(7753),n(70375),n(39994),n(40266)),c=n(6766),a=n(8909),r=n(56215),u=n(91917),h=n(17519),p=n(20766),g=n(76386);function _(t,e,n){const s=(0,u.c)(),o=(0,u.g)(s);return(0,c.z)(o,o,t,.5),(0,c.z)(o,o,e,.5),s[3]=(0,c.i)(o,t),(0,c.a)(o,o,n),s}let m=class{constructor(){this._idToComponent=new Map,this._components=new p.Z((t=>t.bounds)),this._edges=new p.Z((t=>t.bounds)),this._tmpLineSegment=(0,r.Ue)(),this._tmpP1=(0,a.c)(),this._tmpP2=(0,a.c)(),this._tmpP3=(0,a.c)(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),(0,i.k_)(e),await this._ensureEdgeLocations(t,e);const n=[];return this._edges.forEachNeighbor((e=>(this._addCandidates(t,e,n),n.length<1e3)),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,e){const n=[];if(this._components.forEachNeighbor((t=>{if((0,o.Wi)(t.info)){const{id:e,uid:s}=t;n.push({id:e,uid:s})}return!0}),t.bounds),!n.length)return;const s={components:n},i=await this.remoteClient.invoke("fetchAllEdgeLocations",s,(0,o.Pt)(e,{}));for(const t of i.components)this._setFetchEdgeLocations(t)}async add(t){const e=new f(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const t=[];this._edges.forEachNeighbor((n=>(n.component===e&&t.push(n),!0)),e.bounds),this._edges.remove(t),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if((0,o.Wi)(e)||t.uid!==e.uid)return;const n=g.n_.createView(t.locations),s=new Array(n.count),i=(0,a.c)(),d=(0,a.c)();for(let o=0;o<n.count;o++){n.position0.getVec(o,i),n.position1.getVec(o,d);const c=_(i,d,t.origin),a=new b(e,o,c);s[o]=a}this._edges.add(s);const{objectIds:c,origin:r}=t;e.info={locations:n,objectIds:c,origin:r}}_addCandidates(t,e,n){const{locations:s,origin:o,objectIds:i}=e.component.info,d=s.position0.getVec(e.index,this._tmpP1),a=s.position1.getVec(e.index,this._tmpP2);(0,c.a)(d,d,o),(0,c.a)(a,a,o);const r=i[s.componentIndex.get(e.index)];this._addEdgeCandidate(t,r,d,a,n),this._addVertexCandidate(t,r,d,n),this._addVertexCandidate(t,r,a,n)}_addEdgeCandidate(t,e,n,s,o){if(!(t.types&h.r.EDGE))return;const i=(0,u.g)(t.bounds),d=(0,r.zk)(n,s,this._tmpLineSegment),p=(0,r.nF)(d,i,this._tmpP3);if(!(0,u.m)(t.bounds,p))return null;o.push({type:"edge",objectId:e,target:(0,a.a)(p),distance:(0,c.i)(i,p),start:(0,a.a)(n),end:(0,a.a)(s)})}_addVertexCandidate(t,e,n,s){if(!(t.types&h.r.VERTEX))return;const o=(0,u.g)(t.bounds);if(!(0,u.m)(t.bounds,n))return null;s.push({type:"vertex",objectId:e,target:(0,a.a)(n),distance:(0,c.i)(o,n)})}};m=(0,s._)([(0,d.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],m);const l=m;class f{constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++f.uid}}f.uid=0;class b{constructor(t,e,n){this.component=t,this.index=e,this.bounds=n}}}}]);