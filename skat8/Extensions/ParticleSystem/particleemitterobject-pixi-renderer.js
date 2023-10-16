var gdjs;(function(a){const d=(p,t,r)=>{const e=p.first;e.value=t,e.next=e.next||{time:1,value:0},e.next.value=r};class o{constructor(t,r,e){this.started=!1;let n=null;const i=new PIXI.Graphics;if(i.lineStyle(0,0,0),i.beginFill(a.rgbToHexNumber(255,255,255),1),e.rendererType==="Point")i.drawCircle(0,0,e.rendererParam1);else if(e.rendererType==="Line")i.drawRect(0,0,e.rendererParam1,e.rendererParam2),i.beginFill(a.rgbToHexNumber(255,255,255),.001),i.drawRect(0,0,e.rendererParam1,e.rendererParam2);else if(e.textureParticleName){const l=new PIXI.Sprite(t.getGame().getImageManager().getPIXITexture(e.textureParticleName));l.width=e.rendererParam1,l.height=e.rendererParam2,i.addChild(l)}else i.drawRect(0,0,e.rendererParam1,e.rendererParam2);i.endFill(),n=t.getGame().getRenderer().getPIXIRenderer().generateTexture(i);const g={ease:void 0,emit:void 0,lifetime:{min:e.particleLifeTimeMin,max:e.particleLifeTimeMax},frequency:e.flow<0?1e-4:1/e.flow,spawnChance:1,particlesPerWave:e.flow<0?e.maxParticleNb:1,maxParticles:e.maxParticleNb,emitterLifetime:o.computeLifetime(e.flow,e.tank),pos:{x:0,y:0},addAtBack:!1,behaviors:[{type:"alpha",config:{alpha:{isStepped:!1,list:[{time:0,value:e.particleAlpha1/255},{time:1,value:e.particleAlpha2/255}]}}},{type:"moveAcceleration",config:{accel:{x:e.particleGravityX,y:e.particleGravityY},minStart:e.emitterForceMax,maxStart:e.emitterForceMax,rotate:!0}},{type:"scale",config:{scale:{isStepped:!1,list:[{time:0,value:e.particleSize1/100*(1+e.particleSizeRandomness1/100)},{time:1,value:e.particleSize2/100*(1+e.particleSizeRandomness2/100)}]}}},{type:"color",config:{color:{isStepped:!1,list:[{time:0,value:a.rgbToHex(e.particleRed1,e.particleGreen1,e.particleBlue1)},{time:1,value:a.rgbToHex(e.particleRed2,e.particleGreen2,e.particleBlue2)}]}}},{type:"rotation",config:{accel:0,minStart:-e.emitterAngleB/2,maxStart:e.emitterAngleB/2,maxSpeed:e.particleAngle2,minSpeed:e.particleAngle1}},{type:"blendMode",config:{blendMode:e.additive?"ADD":"NORMAL"}},{type:"textureSingle",config:{texture:n}},{type:"spawnShape",config:{type:"torus",data:{affectRotation:!1,innerRadius:0,radius:e.zoneRadius,x:0,y:0}}}]};this.renderer=new PIXI.Container,this.emitter=new PIXI.particles.Emitter(this.renderer,g),this.start();const s=t.getLayer(r.getLayer());s&&s.getRenderer().addRendererObject(this.renderer,r.getZOrder())}getRendererObject(){return this.renderer}update(t){this.emitter.update(t),!this.started&&this.getParticleCount()>0&&(this.started=!0)}setPosition(t,r){this.emitter.spawnPos.x=t,this.emitter.spawnPos.y=r}setAngle(t,r){const e=this.emitter.getBehavior("rotation");e.minStart=a.toRad(t),e.maxStart=a.toRad(r)}setForce(t,r){const e=this.emitter.getBehavior("moveAcceleration");e.maxStart=r||1e-6,e.minStart=t}setZoneRadius(t){const r=this.emitter.getBehavior("spawnShape");r.shape.radius=t}setLifeTime(t,r){this.emitter.minLifetime=t,this.emitter.maxLifetime=r}setGravity(t,r){const e=this.emitter.getBehavior("moveAcceleration");e.accel.x=t,e.accel.y=r}setColor(t,r,e,n,i,u){const s=this.emitter.getBehavior("color").list.first,l=s.value;l.r=t,l.g=r,l.b=e,s.next=s.next||{time:1,value:{}};const m=s.next.value;m.r=n,m.g=i,m.b=u}setSize(t,r){const e=this.emitter.getBehavior("scale");d(e.list,t/100,r/100)}setParticleRotationSpeed(t,r){const e=this.emitter.getBehavior("rotation");e.minSpeed=a.toRad(t),e.maxSpeed=a.toRad(r)}setMaxParticlesCount(t){this.emitter.maxParticles=t}setAdditiveRendering(t){const r=this.emitter.getBehavior("blendMode");r.blendMode=t?"ADD":"NORMAL"}setAlpha(t,r){const e=this.emitter.getBehavior("alpha");d(e.list,t/255,r/255)}setFlow(t,r){this.emitter.frequency=t<0?1e-4:1/t,this.emitter.emitterLifetime=o.computeLifetime(t,r)}resetEmission(t,r){this.setFlow(t,r);const e=this.emitter.emit;this.start(),e||this.stop()}isTextureNameValid(t,r){const e=r.getGame().getImageManager().getInvalidPIXITexture(),n=r.getGame().getImageManager().getPIXITexture(t);return n.valid&&n!==e}setTextureName(t,r){const e=r.getGame().getImageManager().getInvalidPIXITexture(),n=r.getGame().getImageManager().getPIXITexture(t);if(n.valid&&n!==e){const i=this.emitter.getBehavior("textureSingle");i.texture=n}}getParticleCount(){return this.emitter.particleCount}stop(){this.emitter.emit=!1}start(){this.emitter.emit=!0}recreate(){this.emitter.cleanup()}destroy(){this.emitter.destroy()}hasStarted(){return this.started}static computeLifetime(t,r){return r<0?-1:t<0?.001:(r+.1)/t}}a.ParticleEmitterObjectPixiRenderer=o,a.ParticleEmitterObjectRenderer=o})(gdjs||(gdjs={}));
//# sourceMappingURL=particleemitterobject-pixi-renderer.js.map