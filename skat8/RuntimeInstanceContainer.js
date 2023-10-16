var gdjs;(function(c){const l=new c.Logger("RuntimeInstanceContainer");class d{constructor(){this._allInstancesList=[];this._allInstancesListIsUpToDate=!0;this._instancesRemoved=[];this._layersCameraCoordinates={};this._debugDrawEnabled=!1;this._debugDrawShowHiddenInstances=!1;this._debugDrawShowPointsNames=!1;this._debugDrawShowCustomPoints=!1;this._initialBehaviorSharedData=new Hashtable,this._instances=new Hashtable,this._instancesCache=new Hashtable,this._objects=new Hashtable,this._objectsCtor=new Hashtable,this._layers=new Hashtable,this._orderedLayers=[]}enableDebugDraw(e,t,s,a){this._debugDrawEnabled&&!e&&this.getDebuggerRenderer().clearDebugDraw(),this._debugDrawEnabled=e,this._debugDrawShowHiddenInstances=t,this._debugDrawShowPointsNames=s,this._debugDrawShowCustomPoints=a}isObjectRegistered(e){return this._objects.containsKey(e)&&this._instances.containsKey(e)&&this._objectsCtor.containsKey(e)}registerObject(e){this._objects.put(e.name,e),this._instances.put(e.name,[]);const t=c.getObjectConstructor(e.type);this._objectsCtor.put(e.name,t),t.supportsReinitialization&&this._instancesCache.put(e.name,[])}updateObject(e){this.isObjectRegistered(e.name)||l.warn("Tried to call updateObject for an object that was not registered ("+e.name+"). Call registerObject first."),this._objects.put(e.name,e)}unregisterObject(e){const t=this._instances.get(e);if(t){const s=t.slice();for(let a=0;a<s.length;a++)this.markObjectForDeletion(s[a]);this._cacheOrClearRemovedInstances()}this._objects.remove(e),this._instances.remove(e),this._instancesCache.remove(e),this._objectsCtor.remove(e)}createObjectsFrom(e,t,s,a){for(let n=0,r=e.length;n<r;++n){const i=e[n],h=i.name,o=this.createObject(h);o!==null&&(a&&(o.persistentUuid=i.persistentUuid||null),o.setPosition(i.x+t,i.y+s),o.setAngle(i.angle),c.RuntimeObject3D&&o instanceof c.RuntimeObject3D&&(i.z!==void 0&&o.setZ(i.z),i.rotationX!==void 0&&o.setRotationX(i.rotationX),i.rotationY!==void 0&&o.setRotationY(i.rotationY)),o.setZOrder(i.zOrder),o.setLayer(i.layer),o.getVariables().initFrom(i.initialVariables,!0),o.extraInitializationFromInitialInstance(i))}}getInitialSharedDataForBehavior(e){return this._initialBehaviorSharedData.get(e)}setInitialSharedDataForBehavior(e,t){this._initialBehaviorSharedData.put(e,t)}_setLayerDefaultZOrders(){if(this.getGame().getGameData().properties.useDeprecatedZeroAsDefaultZOrder)return;const e={},t=this.getAdhocListOfAllInstances();for(let s=0,a=t.length;s<a;++s){const n=t[s];let r=n.getLayer();const i=n.getZOrder();(e[r]===void 0||e[r]<i)&&(e[r]=i)}for(let s in e)this.getLayer(s).setDefaultZOrder(e[s]+1)}_updateLayersCameraCoordinates(e){this._layersCameraCoordinates=this._layersCameraCoordinates||{};for(const t in this._layers.items)if(this._layers.items.hasOwnProperty(t)){const s=this._layers.items[t];this._layersCameraCoordinates[t]=this._layersCameraCoordinates[t]||[0,0,0,0],this._layersCameraCoordinates[t][0]=s.getCameraX()-s.getCameraWidth()/2*e,this._layersCameraCoordinates[t][1]=s.getCameraY()-s.getCameraHeight()/2*e,this._layersCameraCoordinates[t][2]=s.getCameraX()+s.getCameraWidth()/2*e,this._layersCameraCoordinates[t][3]=s.getCameraY()+s.getCameraHeight()/2*e}}_updateLayersPreRender(){for(const e of this._orderedLayers)e.updatePreRender(this)}_updateObjectsPreRender(){const e=this.getAdhocListOfAllInstances();for(let t=0,s=e.length;t<s;++t){const a=e[t],n=a.getRendererObject();n&&(n.visible=!a.isHidden(),n.visible&&this.getGame().getEffectsManager().updatePreRender(a.getRendererEffects(),a)),a.updatePreRender(this)}}_cacheOrClearRemovedInstances(){for(let e=0,t=this._instancesRemoved.length;e<t;++e){const s=this._instancesCache.get(this._instancesRemoved[e].getName());s&&s.length<128&&s.push(this._instancesRemoved[e])}this._instancesRemoved.length=0}_constructListOfAllInstances(){let e=0;for(const t in this._instances.items)if(this._instances.items.hasOwnProperty(t)){const s=this._instances.items[t],a=e;e+=s.length;for(let n=0,r=s.length;n<r;++n)a+n<this._allInstancesList.length?this._allInstancesList[a+n]=s[n]:this._allInstancesList.push(s[n])}this._allInstancesList.length=e,this._allInstancesListIsUpToDate=!0}getInstancesOf(e){return this._instances.items[e]}getAdhocListOfAllInstances(){return this._allInstancesListIsUpToDate||this._constructListOfAllInstances(),this._allInstancesList}_updateObjectsPreEvents(){const e=this.getAdhocListOfAllInstances();for(let t=0,s=e.length;t<s;++t){const a=e[t],n=a.getElapsedTime();if(a.hasNoForces())a.update(this);else{const r=a.getAverageForce(),i=n/1e3;a.setX(a.getX()+r.getX()*i),a.setY(a.getY()+r.getY()*i),a.update(this),a.updateForces(i)}a.updateTimers(n),e[t].stepBehaviorsPreEvents(this)}this._cacheOrClearRemovedInstances()}_updateObjectsPostEvents(){this._cacheOrClearRemovedInstances();const e=this.getAdhocListOfAllInstances();for(let t=0,s=e.length;t<s;++t)e[t].stepBehaviorsPostEvents(this);this._cacheOrClearRemovedInstances()}addObject(e){this._instances.containsKey(e.name)||this._instances.put(e.name,[]),this._instances.get(e.name).push(e),this._allInstancesListIsUpToDate=!1}getObjects(e){return this._instances.containsKey(e)||(l.info('RuntimeScene.getObjects: No instances called "'+e+'"! Adding it.'),this._instances.put(e,[])),this._instances.get(e)}createObject(e){if(!this._objectsCtor.containsKey(e)||!this._objects.containsKey(e))return null;const t=this._instancesCache.get(e),s=this._objectsCtor.get(e);let a;return!t||t.length===0?a=new s(this,this._objects.get(e)):(a=t.pop(),a.reinitialize(this._objects.get(e))),this.addObject(a),a}markObjectForDeletion(e){if(this._instancesRemoved.indexOf(e)===-1&&this._instancesRemoved.push(e),this._instances.containsKey(e.getName())){const t=e.id,s=this._instances.get(e.getName());for(let a=0,n=s.length;a<n;++a)if(s[a].id==t){s.splice(a,1),this._allInstancesListIsUpToDate=!1;break}}e.onDestroyFromScene(this);for(let t=0;t<c.callbacksObjectDeletedFromScene.length;++t)c.callbacksObjectDeletedFromScene[t](this,e)}getLayer(e){return this._layers.containsKey(e)?this._layers.get(e):this._layers.get("")}hasLayer(e){return this._layers.containsKey(e)}removeLayer(e){const t=this._layers.get(e);if(!t)return;const s=this.getAdhocListOfAllInstances();for(let n=0;n<s.length;++n){const r=s[n];r.getLayer()===e&&r.setLayer("")}this._layers.remove(e);const a=this._orderedLayers.indexOf(t);this._orderedLayers.splice(a,1)}setLayerIndex(e,t){const s=this._layers.get(e);if(!s)return;const a=this._orderedLayers.indexOf(s);a!==t&&(this._orderedLayers.splice(a,1),this._orderedLayers.splice(t,0,s),this.getRenderer().setLayerIndex(s,t))}getAllLayerNames(e){this._layers.keys(e)}getInstancesCountOnScene(e){const t=this._instances.get(e);return t?t.length:0}updateObjectsForces(){for(const e in this._instances.items)if(this._instances.items.hasOwnProperty(e)){const t=this._instances.items[e];for(let s=0,a=t.length;s<a;++s){const n=t[s];if(!n.hasNoForces()){const r=n.getAverageForce(),i=n.getElapsedTime()/1e3;n.setX(n.getX()+r.getX()*i),n.setY(n.getY()+r.getY()*i),n.updateForces(i)}}}}_destroy(){this._layers=new Hashtable,this._orderedLayers=[],this._objects=new Hashtable,this._instances=new Hashtable,this._instancesCache=new Hashtable,this._objectsCtor=new Hashtable,this._allInstancesList=[],this._instancesRemoved=[]}}c.RuntimeInstanceContainer=d})(gdjs||(gdjs={}));
//# sourceMappingURL=RuntimeInstanceContainer.js.map