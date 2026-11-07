import{a as sn}from"./c-chunk-ZB4MCRAC.js";function vn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function ke(i,t,e){return Math.max(t,Math.min(e,i))}function bl(i,t){return(i%t+t)%t}function Cp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ip(i,t,e){return i!==t?(e-i)/(t-i):0}function cr(i,t,e){return(1-e)*i+e*t}function Pp(i,t,e,n){return cr(i,t,1-Math.exp(-e*n))}function Lp(i,t=1){return t-Math.abs(bl(i,t*2)-t)}function Dp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Hp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Up(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Np(i,t){return i+Math.random()*(t-i)}function Fp(i){return i*(.5-Math.random())}function Bp(i){i!==void 0&&(Sh=i);let t=Sh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Op(i){return i*ar}function zp(i){return i*Ps}function kp(i){return(i&i-1)===0&&i!==0}function Gp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function Sd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xp(){let i=fr("canvas");return i.style.display="block",i}function rr(i){i in Rh||(Rh[i]=!0,console.warn(i))}function qp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Yp(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zp(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function ga(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Di.fromArray(i,r);let a=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),l=t.dot(Di),c=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function Ca(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function o0(i,t,e,n,s,r,o,a){let l;if(t.side===Qe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Bn,a),l===null)return null;$r.copy(a),$r.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo($r);return c<e.near||c>e.far?null:{distance:c,point:$r.clone(),object:i}}function Jr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Xr),i.getVertexPosition(l,qr),i.getVertexPosition(c,Yr);let h=o0(i,t,e,n,Xr,qr,Yr,Wh);if(h){let u=new C;_i.getBarycoord(Wh,Xr,qr,Yr,u),s&&(h.uv=_i.getInterpolatedAttribute(s,a,l,c,u,new rt)),r&&(h.uv1=_i.getInterpolatedAttribute(r,a,l,c,u,new rt)),o&&(h.normal=_i.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new C,materialIndex:0};_i.getNormal(Xr,qr,Yr,d.normal),h.face=d,h.barycoord=u}return h}function Ls(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function on(i){let t={};for(let e=0;e<i.length;e++){let n=Ls(i[e]);for(let s in n)t[s]=n[s]}return t}function a0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ad(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}function Cd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function d0(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function Yg(i,t,e,n,s,r,o){let a=new At(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function x(v){let y=!1,_=g(v);_===null?p(a,l):_&&_.isColor&&(p(_,1),y=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){let _=g(y);_&&(_.isCubeTexture||_.mapping===Yo)?(h===void 0&&(h=new H(new te(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Ls(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ni.copy(y.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qg.makeRotationFromEuler(Ni)),h.material.toneMapped=fe.getTransfer(_.colorSpace)!==ve,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new H(new Jt(2,2),new an({name:"BackgroundMaterial",uniforms:Ls(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=fe.getTransfer(_.colorSpace)!==ve,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(Qr,Ad(i)),n.buffers.color.setClear(Qr.r,Qr.g,Qr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:x,addToRenderList:m}}function Zg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(E,P,O,F,U){let X=!1,N=u(F,O,P);r!==N&&(r=N,c(r.object)),X=f(E,F,O,U),X&&g(E,F,O,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,_(E,P,O,F),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function u(E,P,O){let F=O.wireframe===!0,U=n[E.id];U===void 0&&(U={},n[E.id]=U);let X=U[P.id];X===void 0&&(X={},U[P.id]=X);let N=X[F];return N===void 0&&(N=d(l()),X[F]=N),N}function d(E){let P=[],O=[],F=[];for(let U=0;U<e;U++)P[U]=0,O[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:F,object:E,attributes:{},index:null}}function f(E,P,O,F){let U=r.attributes,X=P.attributes,N=0,Z=O.getAttributes();for(let G in Z)if(Z[G].location>=0){let et=U[G],ot=X[G];if(ot===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(ot=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(ot=E.instanceColor)),et===void 0||et.attribute!==ot||ot&&et.data!==ot.data)return!0;N++}return r.attributesNum!==N||r.index!==F}function g(E,P,O,F){let U={},X=P.attributes,N=0,Z=O.getAttributes();for(let G in Z)if(Z[G].location>=0){let et=X[G];et===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(et=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(et=E.instanceColor));let ot={};ot.attribute=et,et&&et.data&&(ot.data=et.data),U[G]=ot,N++}r.attributes=U,r.attributesNum=N,r.index=F}function x(){let E=r.newAttributes;for(let P=0,O=E.length;P<O;P++)E[P]=0}function m(E){p(E,0)}function p(E,P){let O=r.newAttributes,F=r.enabledAttributes,U=r.attributeDivisors;O[E]=1,F[E]===0&&(i.enableVertexAttribArray(E),F[E]=1),U[E]!==P&&(i.vertexAttribDivisor(E,P),U[E]=P)}function v(){let E=r.newAttributes,P=r.enabledAttributes;for(let O=0,F=P.length;O<F;O++)P[O]!==E[O]&&(i.disableVertexAttribArray(O),P[O]=0)}function y(E,P,O,F,U,X,N){N===!0?i.vertexAttribIPointer(E,P,O,U,X):i.vertexAttribPointer(E,P,O,F,U,X)}function _(E,P,O,F){x();let U=F.attributes,X=O.getAttributes(),N=P.defaultAttributeValues;for(let Z in X){let G=X[Z];if(G.location>=0){let j=U[Z];if(j===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(j=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(j=E.instanceColor)),j!==void 0){let et=j.normalized,ot=j.itemSize,yt=t.get(j);if(yt===void 0)continue;let Et=yt.buffer,$=yt.type,ut=yt.bytesPerElement,St=$===i.INT||$===i.UNSIGNED_INT||j.gpuType===xl;if(j.isInterleavedBufferAttribute){let dt=j.data,Nt=dt.stride,qt=j.offset;if(dt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<G.locationSize;Yt++)p(G.location+Yt,dt.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Yt=0;Yt<G.locationSize;Yt++)m(G.location+Yt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let Yt=0;Yt<G.locationSize;Yt++)y(G.location+Yt,ot/G.locationSize,$,et,Nt*ut,(qt+ot/G.locationSize*Yt)*ut,St)}else{if(j.isInstancedBufferAttribute){for(let dt=0;dt<G.locationSize;dt++)p(G.location+dt,j.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let dt=0;dt<G.locationSize;dt++)m(G.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let dt=0;dt<G.locationSize;dt++)y(G.location+dt,ot/G.locationSize,$,et,ot*ut,ot/G.locationSize*dt*ut,St)}}else if(N!==void 0){let et=N[Z];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(G.location,et);break;case 3:i.vertexAttrib3fv(G.location,et);break;case 4:i.vertexAttrib4fv(G.location,et);break;default:i.vertexAttrib1fv(G.location,et)}}}}v()}function S(){I();for(let E in n){let P=n[E];for(let O in P){let F=P[O];for(let U in F)h(F[U].object),delete F[U];delete P[O]}delete n[E]}}function w(E){if(n[E.id]===void 0)return;let P=n[E.id];for(let O in P){let F=P[O];for(let U in F)h(F[U].object),delete F[U];delete P[O]}delete n[E.id]}function R(E){for(let P in n){let O=n[P];if(O[E.id]===void 0)continue;let F=O[E.id];for(let U in F)h(F[U].object),delete F[U];delete O[E.id]}}function I(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function $g(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Jg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let I=R===$i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ti&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ln&&!I)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:S,maxSamples:w}}function Kg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new In,a=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,y=v*4,_=p.clippingState||null;l.value=_,_=h(g,d,y,f);for(let S=0;S!==y;++S)_[S]=e[S];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Qg(i){let t=new WeakMap;function e(o,a){return a===ic?o.mapping=Rs:a===sc&&(o.mapping=As),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ic||a===sc)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Bc(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}function jg(i){let t=[],e=[],n=[],s=i,r=i-vs+1+Yh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-vs?l=Yh[o-i+vs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*f),y=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let w=0;w<f;w++){let R=w%3*2/3-1,I=w>2?0:-1,T=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];v.set(T,x*g*w),y.set(d,m*g*w);let E=[w,w,w,w,w,w];_.set(E,p*g*w)}let S=new me;S.setAttribute("position",new Ne(v,x)),S.setAttribute("uv",new Ne(y,m)),S.setAttribute("faceIndex",new Ne(_,p)),t.push(S),s>vs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jh(i,t,e){let n=new Dn(i,t,e);return n.texture.mapping=Yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function tx(i,t,e){let n=new Float32Array(zi),s=new C(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Kh(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Qh(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Al(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ex(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ic||l===sc,h=l===Rs||l===As;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Co(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Co(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function nx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&rr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ix(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let y=0,_=v.length;y<_;y+=3){let S=v[y+0],w=v[y+1],R=v[y+2];d.push(S,w,w,R,R,S)}}else if(g!==void 0){let v=g.array;x=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let S=y+0,w=y+1,R=y+2;d.push(S,w,w,R,R,S)}}else return;let m=new(Sd(d)?bo:wo)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function sx(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*x[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ox(i,t,e){let n=new WeakMap,s=new le;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*S*4*u),R=new To(w,_,S,u);R.type=Ln,R.needsUpdate=!0;let I=y*4;for(let E=0;E<u;E++){let P=m[E],O=p[E],F=v[E],U=_*S*4*E;for(let X=0;X<P.count;X++){let N=X*I;f===!0&&(s.fromBufferAttribute(P,X),w[U+N+0]=s.x,w[U+N+1]=s.y,w[U+N+2]=s.z,w[U+N+3]=0),g===!0&&(s.fromBufferAttribute(O,X),w[U+N+4]=s.x,w[U+N+5]=s.y,w[U+N+6]=s.z,w[U+N+7]=0),x===!0&&(s.fromBufferAttribute(F,X),w[U+N+8]=s.x,w[U+N+9]=s.y,w[U+N+10]=s.z,w[U+N+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new rt(_,S)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ax(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}function ks(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=tu[s];if(r===void 0&&(r=new Float32Array(s),tu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Jo(i,t){let e=eu[t];e===void 0&&(e=new Int32Array(t),eu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function dx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,n))return;su.set(n),i.uniformMatrix2fv(this.addr,!1,su),Ve(e,n)}}function fx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,n))return;iu.set(n),i.uniformMatrix3fv(this.addr,!1,iu),Ve(e,n)}}function px(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,n))return;nu.set(n),i.uniformMatrix4fv(this.addr,!1,nu),Ve(e,n)}}function mx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function gx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function xx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function _x(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function Ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function Tx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(jh.compareFunction=bd,r=jh):r=Id,e.setTexture2D(t||r,s)}function wx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ld,s)}function bx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Dd,s)}function Sx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Pd,s)}function Rx(i){switch(i){case 5126:return cx;case 35664:return lx;case 35665:return hx;case 35666:return ux;case 35674:return dx;case 35675:return fx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return gx;case 35668:case 35672:return xx;case 35669:case 35673:return yx;case 5125:return _x;case 36294:return Mx;case 36295:return vx;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Sx}}function Ax(i,t){i.uniform1fv(this.addr,t)}function Cx(i,t){let e=ks(t,this.size,2);i.uniform2fv(this.addr,e)}function Ix(i,t){let e=ks(t,this.size,3);i.uniform3fv(this.addr,e)}function Px(i,t){let e=ks(t,this.size,4);i.uniform4fv(this.addr,e)}function Lx(i,t){let e=ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Dx(i,t){let e=ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Hx(i,t){let e=ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ux(i,t){i.uniform1iv(this.addr,t)}function Nx(i,t){i.uniform2iv(this.addr,t)}function Fx(i,t){i.uniform3iv(this.addr,t)}function Bx(i,t){i.uniform4iv(this.addr,t)}function Ox(i,t){i.uniform1uiv(this.addr,t)}function zx(i,t){i.uniform2uiv(this.addr,t)}function kx(i,t){i.uniform3uiv(this.addr,t)}function Gx(i,t){i.uniform4uiv(this.addr,t)}function Vx(i,t,e){let n=this.cache,s=t.length,r=Jo(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Id,r[o])}function Wx(i,t,e){let n=this.cache,s=t.length,r=Jo(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ld,r[o])}function Xx(i,t,e){let n=this.cache,s=t.length,r=Jo(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Dd,r[o])}function qx(i,t,e){let n=this.cache,s=t.length,r=Jo(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Pd,r[o])}function Yx(i){switch(i){case 5126:return Ax;case 35664:return Cx;case 35665:return Ix;case 35666:return Px;case 35674:return Lx;case 35675:return Dx;case 35676:return Hx;case 5124:case 35670:return Ux;case 35667:case 35671:return Nx;case 35668:case 35672:return Fx;case 35669:case 35673:return Bx;case 5125:return Ox;case 36294:return zx;case 36295:return kx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return Vx;case 35679:case 36299:case 36307:return Wx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return qx}}function ru(i,t){i.seq.push(t),i.map[t.id]=t}function Zx(i,t,e){let n=i.name,s=n.length;for(Ba.lastIndex=0;;){let r=Ba.exec(n),o=Ba.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ru(e,c===void 0?new Oc(a,i,t):new zc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new kc(a),ru(e,u)),e=u}}}function ou(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}function Kx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Qx(i){fe._getMatrix(au,fe.workingColorSpace,i);let t=`mat3( ${au.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(i)){case Zo:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Kx(i.getShaderSource(t),o)}else return s}function jx(i,t){let e=Qx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ty(i,t){let e;switch(t){case lp:e="Linear";break;case hp:e="Reinhard";break;case up:e="Cineon";break;case dp:e="ACESFilmic";break;case pp:e="AgX";break;case mp:e="Neutral";break;case fp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ey(){fe.getLuminanceCoefficients(to);let i=to.x.toFixed(4),t=to.y.toFixed(4),e=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ny(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function iy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function or(i){return i!==""}function lu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Gc(i){return i.replace(ry,ay)}function ay(i,t){let e=oe[t];if(e===void 0){let n=oy.get(t);if(n!==void 0)e=oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gc(e)}function uu(i){return i.replace(cy,ly)}function ly(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function du(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function uy(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rs:case As:t="ENVMAP_TYPE_CUBE";break;case Yo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dy(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===As&&(t="ENVMAP_MODE_REFRACTION"),t}function fy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ud:t="ENVMAP_BLENDING_MULTIPLY";break;case ap:t="ENVMAP_BLENDING_MIX";break;case cp:t="ENVMAP_BLENDING_ADD";break}return t}function py(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function my(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=hy(e),c=uy(e),h=dy(e),u=fy(e),d=py(e),f=ny(e),g=iy(r),x=s.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),p.length>0&&(p+=`
`)):(m=[du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),p=[du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?oe.tonemapping_pars_fragment:"",e.toneMapping!==Ti?ty("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,jx("linearToOutputTexel",e.outputColorSpace),ey(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),o=Gc(o),o=lu(o,e),o=hu(o,e),a=Gc(a),a=lu(a,e),a=hu(a,e),o=uu(o),a=uu(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=v+m+o,_=v+p+a,S=ou(s,s.VERTEX_SHADER,y),w=ou(s,s.FRAGMENT_SHADER,_);s.attachShader(x,S),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(P){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(S).trim(),U=s.getShaderInfoLog(w).trim(),X=!0,N=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,w);else{let Z=cu(s,S,"vertex"),G=cu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+Z+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||U==="")&&(N=!1);N&&(P.diagnostics={runnable:X,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(S),s.deleteShader(w),I=new bs(s,x),T=sy(s,x)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,$x)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}function xy(i,t,e,n,s,r,o){let a=new pr,l=new Vc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,E,P,O,F){let U=O.fog,X=F.geometry,N=T.isMeshStandardMaterial?O.environment:null,Z=(T.isMeshStandardMaterial?e:t).get(T.envMap||N),G=Z&&Z.mapping===Yo?Z.image.height:null,j=g[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let et=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ot=et!==void 0?et.length:0,yt=0;X.morphAttributes.position!==void 0&&(yt=1),X.morphAttributes.normal!==void 0&&(yt=2),X.morphAttributes.color!==void 0&&(yt=3);let Et,$,ut,St;if(j){let ye=Nn[j];Et=ye.vertexShader,$=ye.fragmentShader}else Et=T.vertexShader,$=T.fragmentShader,l.update(T),ut=l.getVertexShaderID(T),St=l.getFragmentShaderID(T);let dt=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),qt=F.isInstancedMesh===!0,Yt=F.isBatchedMesh===!0,ue=!!T.map,k=!!T.matcap,K=!!Z,D=!!T.aoMap,mt=!!T.lightMap,ct=!!T.bumpMap,xt=!!T.normalMap,lt=!!T.displacementMap,Lt=!!T.emissiveMap,Rt=!!T.metalnessMap,L=!!T.roughnessMap,b=T.anisotropy>0,q=T.clearcoat>0,nt=T.dispersion>0,ht=T.iridescence>0,it=T.sheen>0,Ut=T.transmission>0,Mt=b&&!!T.anisotropyMap,It=q&&!!T.clearcoatMap,ce=q&&!!T.clearcoatNormalMap,ft=q&&!!T.clearcoatRoughnessMap,Dt=ht&&!!T.iridescenceMap,$t=ht&&!!T.iridescenceThicknessMap,jt=it&&!!T.sheenColorMap,Ht=it&&!!T.sheenRoughnessMap,de=!!T.specularMap,re=!!T.specularColorMap,we=!!T.specularIntensityMap,z=Ut&&!!T.transmissionMap,vt=Ut&&!!T.thicknessMap,tt=!!T.gradientMap,at=!!T.alphaMap,bt=T.alphaTest>0,Tt=!!T.alphaHash,ne=!!T.extensions,Ue=Ti;T.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Ue=i.toneMapping);let $e={shaderID:j,shaderType:T.type,shaderName:T.name,vertexShader:Et,fragmentShader:$,defines:T.defines,customVertexShaderID:ut,customFragmentShaderID:St,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Yt,batchingColor:Yt&&F._colorsTexture!==null,instancing:qt,instancingColor:qt&&F.instanceColor!==null,instancingMorph:qt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:zs,alphaToCoverage:!!T.alphaToCoverage,map:ue,matcap:k,envMap:K,envMapMode:K&&Z.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:mt,bumpMap:ct,normalMap:xt,displacementMap:d&&lt,emissiveMap:Lt,normalMapObjectSpace:xt&&T.normalMapType===vp,normalMapTangentSpace:xt&&T.normalMapType===wd,metalnessMap:Rt,roughnessMap:L,anisotropy:b,anisotropyMap:Mt,clearcoat:q,clearcoatMap:It,clearcoatNormalMap:ce,clearcoatRoughnessMap:ft,dispersion:nt,iridescence:ht,iridescenceMap:Dt,iridescenceThicknessMap:$t,sheen:it,sheenColorMap:jt,sheenRoughnessMap:Ht,specularMap:de,specularColorMap:re,specularIntensityMap:we,transmission:Ut,transmissionMap:z,thicknessMap:vt,gradientMap:tt,opaque:T.transparent===!1&&T.blending===Ei&&T.alphaToCoverage===!1,alphaMap:at,alphaTest:bt,alphaHash:Tt,combine:T.combine,mapUv:ue&&x(T.map.channel),aoMapUv:D&&x(T.aoMap.channel),lightMapUv:mt&&x(T.lightMap.channel),bumpMapUv:ct&&x(T.bumpMap.channel),normalMapUv:xt&&x(T.normalMap.channel),displacementMapUv:lt&&x(T.displacementMap.channel),emissiveMapUv:Lt&&x(T.emissiveMap.channel),metalnessMapUv:Rt&&x(T.metalnessMap.channel),roughnessMapUv:L&&x(T.roughnessMap.channel),anisotropyMapUv:Mt&&x(T.anisotropyMap.channel),clearcoatMapUv:It&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:ce&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&x(T.sheenRoughnessMap.channel),specularMapUv:de&&x(T.specularMap.channel),specularColorMapUv:re&&x(T.specularColorMap.channel),specularIntensityMapUv:we&&x(T.specularIntensityMap.channel),transmissionMapUv:z&&x(T.transmissionMap.channel),thicknessMapUv:vt&&x(T.thicknessMap.channel),alphaMapUv:at&&x(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(xt||b),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(ue||at),fog:!!U,useFog:T.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Nt,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:yt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:ue&&T.map.isVideoTexture===!0&&fe.getTransfer(T.map.colorSpace)===ve,decodeVideoTextureEmissive:Lt&&T.emissiveMap.isVideoTexture===!0&&fe.getTransfer(T.emissiveMap.colorSpace)===ve,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Qt,flipSided:T.side===Qe,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ne&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&T.extensions.multiDraw===!0||Yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function p(T){let E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(let P in T.defines)E.push(P),E.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(v(E,T),y(E,T),E.push(i.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function v(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function y(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function _(T){let E=g[T.type],P;if(E){let O=Nn[E];P=Rl.clone(O.uniforms)}else P=T.uniforms;return P}function S(T,E){let P;for(let O=0,F=h.length;O<F;O++){let U=h[O];if(U.cacheKey===E){P=U,++P.usedTimes;break}}return P===void 0&&(P=new my(i,E,T,r),h.push(P)),P}function w(T){if(--T.usedTimes===0){let E=h.indexOf(T);h[E]=h[h.length-1],h.pop(),T.destroy()}}function R(T){l.remove(T)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:S,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:I}}function yy(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _y(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function fu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||_y),n.length>1&&n.sort(d||fu),s.length>1&&s.sort(d||fu)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function My(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new pu,i.set(n,[o])):s>=r.length?(o=new pu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function vy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new At};break;case"SpotLight":e={position:new C,direction:new C,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Ey(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}function wy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function by(i){let t=new vy,e=Ey(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new Wt,o=new Wt;function a(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,v=0,y=0,_=0,S=0,w=0,R=0;c.sort(wy);for(let T=0,E=c.length;T<E;T++){let P=c[T],O=P.color,F=P.intensity,U=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*F,u+=O.g*F,d+=O.b*F;else if(P.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(P.sh.coefficients[N],F);R++}else if(P.isDirectionalLight){let N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,G=e.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=N,f++}else if(P.isSpotLight){let N=t.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(O).multiplyScalar(F),N.distance=U,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,n.spot[x]=N;let Z=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,Z.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[x]=Z.matrix,P.castShadow){let G=e.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=X,_++}x++}else if(P.isRectAreaLight){let N=t.get(P);N.color.copy(O).multiplyScalar(F),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=N,m++}else if(P.isPointLight){let N=t.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){let Z=P.shadow,G=e.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=N,g++}else if(P.isHemisphereLight){let N=t.get(P);N.skyColor.copy(P.color).multiplyScalar(F),N.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=N,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==v||I.numPointShadows!==y||I.numSpotShadows!==_||I.numSpotMaps!==S||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+S-w,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,I.directionalLength=f,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=v,I.numPointShadows=y,I.numSpotShadows=_,I.numSpotMaps=S,I.numLightProbes=R,n.version=Ty++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let y=c[p];if(y.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function mu(i){let t=new by(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Sy(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new mu(i),t.set(s,[a])):r>=o.length?(a=new mu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Cy(i,t,e){let n=new mr,s=new rt,r=new rt,o=new le,a=new Xc({depthPacking:Mp}),l=new qc,c={},h=e.maxTextureSize,u={[Bn]:Qe,[Qe]:Bn,[Qt]:Qt},d=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Ry,fragmentShader:Ay}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new me;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new H(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hd;let p=this.type;this.render=function(w,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let T=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(vi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let F=p!==Kn&&this.type===Kn,U=p===Kn&&this.type!==Kn;for(let X=0,N=w.length;X<N;X++){let Z=w[X],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let j=G.getFrameExtents();if(s.multiply(j),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,G.mapSize.y=r.y)),G.map===null||F===!0||U===!0){let ot=this.type!==Kn?{minFilter:pn,magFilter:pn}:{};G.map!==null&&G.map.dispose(),G.map=new Dn(s.x,s.y,ot),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let et=G.getViewportCount();for(let ot=0;ot<et;ot++){let yt=G.getViewport(ot);o.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),O.viewport(o),G.updateMatrices(Z,ot),n=G.getFrustum(),_(R,I,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===Kn&&v(G,I),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,E,P)};function v(w,R){let I=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Dn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,I,f,x,null)}function y(w,R,I,T){let E=null,P=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)E=P;else if(E=I.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let O=E.uuid,F=R.uuid,U=c[O];U===void 0&&(U={},c[O]=U);let X=U[F];X===void 0&&(X=E.clone(),U[F]=X,R.addEventListener("dispose",S)),E=X}if(E.visible=R.visible,E.wireframe=R.wireframe,T===Kn?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let O=i.properties.get(E);O.light=I}return E}function _(w,R,I,T,E){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Kn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);let F=t.update(w),U=w.material;if(Array.isArray(U)){let X=F.groups;for(let N=0,Z=X.length;N<Z;N++){let G=X[N],j=U[G.materialIndex];if(j&&j.visible){let et=y(w,j,T,E);w.onBeforeShadow(i,w,R,I,F,et,G),i.renderBufferDirect(I,null,F,et,w,G),w.onAfterShadow(i,w,R,I,F,et,G)}}}else if(U.visible){let X=y(w,U,T,E);w.onBeforeShadow(i,w,R,I,F,X,null),i.renderBufferDirect(I,null,F,X,w,null),w.onAfterShadow(i,w,R,I,F,X,null)}}let O=w.children;for(let F=0,U=O.length;F<U;F++)_(O[F],R,I,T,E)}function S(w){w.target.removeEventListener("dispose",S);for(let I in c){let T=c[I],E=w.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}function Py(i,t){function e(){let z=!1,vt=new le,tt=null,at=new le(0,0,0,0);return{setMask:function(bt){tt!==bt&&!z&&(i.colorMask(bt,bt,bt,bt),tt=bt)},setLocked:function(bt){z=bt},setClear:function(bt,Tt,ne,Ue,$e){$e===!0&&(bt*=Ue,Tt*=Ue,ne*=Ue),vt.set(bt,Tt,ne,Ue),at.equals(vt)===!1&&(i.clearColor(bt,Tt,ne,Ue),at.copy(vt))},reset:function(){z=!1,tt=null,at.set(-1,0,0,0)}}}function n(){let z=!1,vt=!1,tt=null,at=null,bt=null;return{setReversed:function(Tt){if(vt!==Tt){let ne=t.get("EXT_clip_control");vt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT);let Ue=bt;bt=null,this.setClear(Ue)}vt=Tt},getReversed:function(){return vt},setTest:function(Tt){Tt?dt(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(Tt){tt!==Tt&&!z&&(i.depthMask(Tt),tt=Tt)},setFunc:function(Tt){if(vt&&(Tt=Iy[Tt]),at!==Tt){switch(Tt){case Ja:i.depthFunc(i.NEVER);break;case Ka:i.depthFunc(i.ALWAYS);break;case Qa:i.depthFunc(i.LESS);break;case Ss:i.depthFunc(i.LEQUAL);break;case ja:i.depthFunc(i.EQUAL);break;case tc:i.depthFunc(i.GEQUAL);break;case ec:i.depthFunc(i.GREATER);break;case nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}at=Tt}},setLocked:function(Tt){z=Tt},setClear:function(Tt){bt!==Tt&&(vt&&(Tt=1-Tt),i.clearDepth(Tt),bt=Tt)},reset:function(){z=!1,tt=null,at=null,bt=null,vt=!1}}}function s(){let z=!1,vt=null,tt=null,at=null,bt=null,Tt=null,ne=null,Ue=null,$e=null;return{setTest:function(ye){z||(ye?dt(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(ye){vt!==ye&&!z&&(i.stencilMask(ye),vt=ye)},setFunc:function(ye,bn,Vn){(tt!==ye||at!==bn||bt!==Vn)&&(i.stencilFunc(ye,bn,Vn),tt=ye,at=bn,bt=Vn)},setOp:function(ye,bn,Vn){(Tt!==ye||ne!==bn||Ue!==Vn)&&(i.stencilOp(ye,bn,Vn),Tt=ye,ne=bn,Ue=Vn)},setLocked:function(ye){z=ye},setClear:function(ye){$e!==ye&&(i.clearStencil(ye),$e=ye)},reset:function(){z=!1,vt=null,tt=null,at=null,bt=null,Tt=null,ne=null,Ue=null,$e=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,S=null,w=null,R=new At(0,0,0),I=0,T=!1,E=null,P=null,O=null,F=null,U=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,Z=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=Z>=2);let j=null,et={},ot=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),Et=new le().fromArray(ot),$=new le().fromArray(yt);function ut(z,vt,tt,at){let bt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(z,Tt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<tt;ne++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,at,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(vt+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return Tt}let St={};St[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),dt(i.DEPTH_TEST),o.setFunc(Ss),ct(!1),xt(xh),dt(i.CULL_FACE),D(vi);function dt(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Nt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function qt(z,vt){return u[z]!==vt?(i.bindFramebuffer(z,vt),u[z]=vt,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function Yt(z,vt){let tt=f,at=!1;if(z){tt=d.get(vt),tt===void 0&&(tt=[],d.set(vt,tt));let bt=z.textures;if(tt.length!==bt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,ne=bt.length;Tt<ne;Tt++)tt[Tt]=i.COLOR_ATTACHMENT0+Tt;tt.length=bt.length,at=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,at=!0);at&&i.drawBuffers(tt)}function ue(z){return g!==z?(i.useProgram(z),g=z,!0):!1}let k={[Oi]:i.FUNC_ADD,[Wf]:i.FUNC_SUBTRACT,[Xf]:i.FUNC_REVERSE_SUBTRACT};k[qf]=i.MIN,k[Yf]=i.MAX;let K={[Zf]:i.ZERO,[$f]:i.ONE,[Jf]:i.SRC_COLOR,[Za]:i.SRC_ALPHA,[np]:i.SRC_ALPHA_SATURATE,[tp]:i.DST_COLOR,[Qf]:i.DST_ALPHA,[Kf]:i.ONE_MINUS_SRC_COLOR,[$a]:i.ONE_MINUS_SRC_ALPHA,[ep]:i.ONE_MINUS_DST_COLOR,[jf]:i.ONE_MINUS_DST_ALPHA,[ip]:i.CONSTANT_COLOR,[sp]:i.ONE_MINUS_CONSTANT_COLOR,[rp]:i.CONSTANT_ALPHA,[op]:i.ONE_MINUS_CONSTANT_ALPHA};function D(z,vt,tt,at,bt,Tt,ne,Ue,$e,ye){if(z===vi){x===!0&&(Nt(i.BLEND),x=!1);return}if(x===!1&&(dt(i.BLEND),x=!0),z!==Vf){if(z!==m||ye!==T){if((p!==Oi||_!==Oi)&&(i.blendEquation(i.FUNC_ADD),p=Oi,_=Oi),ye)switch(z){case Ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xe:i.blendFunc(i.ONE,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _h:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xe:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _h:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}v=null,y=null,S=null,w=null,R.set(0,0,0),I=0,m=z,T=ye}return}bt=bt||vt,Tt=Tt||tt,ne=ne||at,(vt!==p||bt!==_)&&(i.blendEquationSeparate(k[vt],k[bt]),p=vt,_=bt),(tt!==v||at!==y||Tt!==S||ne!==w)&&(i.blendFuncSeparate(K[tt],K[at],K[Tt],K[ne]),v=tt,y=at,S=Tt,w=ne),(Ue.equals(R)===!1||$e!==I)&&(i.blendColor(Ue.r,Ue.g,Ue.b,$e),R.copy(Ue),I=$e),m=z,T=!1}function mt(z,vt){z.side===Qt?Nt(i.CULL_FACE):dt(i.CULL_FACE);let tt=z.side===Qe;vt&&(tt=!tt),ct(tt),z.blending===Ei&&z.transparent===!1?D(vi):D(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let at=z.stencilWrite;a.setTest(at),at&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Lt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(z){E!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),E=z)}function xt(z){z!==zf?(dt(i.CULL_FACE),z!==P&&(z===xh?i.cullFace(i.BACK):z===kf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),P=z}function lt(z){z!==O&&(N&&i.lineWidth(z),O=z)}function Lt(z,vt,tt){z?(dt(i.POLYGON_OFFSET_FILL),(F!==vt||U!==tt)&&(i.polygonOffset(vt,tt),F=vt,U=tt)):Nt(i.POLYGON_OFFSET_FILL)}function Rt(z){z?dt(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function L(z){z===void 0&&(z=i.TEXTURE0+X-1),j!==z&&(i.activeTexture(z),j=z)}function b(z,vt,tt){tt===void 0&&(j===null?tt=i.TEXTURE0+X-1:tt=j);let at=et[tt];at===void 0&&(at={type:void 0,texture:void 0},et[tt]=at),(at.type!==z||at.texture!==vt)&&(j!==tt&&(i.activeTexture(tt),j=tt),i.bindTexture(z,vt||St[z]),at.type=z,at.texture=vt)}function q(){let z=et[j];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function It(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Dt(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $t(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function jt(z){Et.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Et.copy(z))}function Ht(z){$.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),$.copy(z))}function de(z,vt){let tt=c.get(vt);tt===void 0&&(tt=new WeakMap,c.set(vt,tt));let at=tt.get(z);at===void 0&&(at=i.getUniformBlockIndex(vt,z.name),tt.set(z,at))}function re(z,vt){let at=c.get(vt).get(z);l.get(vt)!==at&&(i.uniformBlockBinding(vt,at,z.__bindingPointIndex),l.set(vt,at))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,et={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,S=null,w=null,R=new At(0,0,0),I=0,T=!1,E=null,P=null,O=null,F=null,U=null,Et.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:dt,disable:Nt,bindFramebuffer:qt,drawBuffers:Yt,useProgram:ue,setBlending:D,setMaterial:mt,setFlipSided:ct,setCullFace:xt,setLineWidth:lt,setPolygonOffset:Lt,setScissorTest:Rt,activeTexture:L,bindTexture:b,unbindTexture:q,compressedTexImage2D:nt,compressedTexImage3D:ht,texImage2D:Dt,texImage3D:$t,updateUBOMapping:de,uniformBlockBinding:re,texStorage2D:ce,texStorage3D:ft,texSubImage2D:it,texSubImage3D:Ut,compressedTexSubImage2D:Mt,compressedTexSubImage3D:It,scissor:jt,viewport:Ht,reset:we}}function gu(i,t,e,n){let s=Ly(n);switch(e){case gd:return i*t;case yd:return i*t;case _d:return i*t*2;case Ml:return i*t/s.components*s.byteLength;case vl:return i*t/s.components*s.byteLength;case Md:return i*t*2/s.components*s.byteLength;case El:return i*t*2/s.components*s.byteLength;case xd:return i*t*3/s.components*s.byteLength;case Mn:return i*t*4/s.components*s.byteLength;case Tl:return i*t*4/s.components*s.byteLength;case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xo:case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ac:case lc:return Math.max(i,16)*Math.max(t,8)/4;case oc:case cc:return Math.max(i,8)*Math.max(t,8)/2;case hc:case uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case mc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case gc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case _c:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case vc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case bc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _o:case Rc:case Ac:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vd:case Cc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ic:case Pc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ly(i){switch(i){case ti:case fd:return{byteLength:1,components:1};case dr:case pd:case $i:return{byteLength:2,components:1};case yl:case _l:return{byteLength:2,components:4};case Wi:case xl:case Ln:return{byteLength:4,components:1};case md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Dy(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,b){return f?new OffscreenCanvas(L,b):fr("canvas")}function x(L,b,q){let nt=1,ht=Rt(L);if((ht.width>q||ht.height>q)&&(nt=q/Math.max(ht.width,ht.height)),nt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let it=Math.floor(nt*ht.width),Ut=Math.floor(nt*ht.height);u===void 0&&(u=g(it,Ut));let Mt=b?g(it,Ut):u;return Mt.width=it,Mt.height=Ut,Mt.getContext("2d").drawImage(L,0,0,it,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+it+"x"+Ut+")."),Mt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(L,b,q,nt,ht=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let it=b;if(b===i.RED&&(q===i.FLOAT&&(it=i.R32F),q===i.HALF_FLOAT&&(it=i.R16F),q===i.UNSIGNED_BYTE&&(it=i.R8)),b===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.R8UI),q===i.UNSIGNED_SHORT&&(it=i.R16UI),q===i.UNSIGNED_INT&&(it=i.R32UI),q===i.BYTE&&(it=i.R8I),q===i.SHORT&&(it=i.R16I),q===i.INT&&(it=i.R32I)),b===i.RG&&(q===i.FLOAT&&(it=i.RG32F),q===i.HALF_FLOAT&&(it=i.RG16F),q===i.UNSIGNED_BYTE&&(it=i.RG8)),b===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.RG8UI),q===i.UNSIGNED_SHORT&&(it=i.RG16UI),q===i.UNSIGNED_INT&&(it=i.RG32UI),q===i.BYTE&&(it=i.RG8I),q===i.SHORT&&(it=i.RG16I),q===i.INT&&(it=i.RG32I)),b===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.RGB8UI),q===i.UNSIGNED_SHORT&&(it=i.RGB16UI),q===i.UNSIGNED_INT&&(it=i.RGB32UI),q===i.BYTE&&(it=i.RGB8I),q===i.SHORT&&(it=i.RGB16I),q===i.INT&&(it=i.RGB32I)),b===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),q===i.UNSIGNED_INT&&(it=i.RGBA32UI),q===i.BYTE&&(it=i.RGBA8I),q===i.SHORT&&(it=i.RGBA16I),q===i.INT&&(it=i.RGBA32I)),b===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),b===i.RGBA){let Ut=ht?Zo:fe.getTransfer(nt);q===i.FLOAT&&(it=i.RGBA32F),q===i.HALF_FLOAT&&(it=i.RGBA16F),q===i.UNSIGNED_BYTE&&(it=Ut===ve?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function _(L,b){let q;return L?b===null||b===Wi||b===Cs?q=i.DEPTH24_STENCIL8:b===Ln?q=i.DEPTH32F_STENCIL8:b===dr&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Wi||b===Cs?q=i.DEPTH_COMPONENT24:b===Ln?q=i.DEPTH_COMPONENT32F:b===dr&&(q=i.DEPTH_COMPONENT16),q}function S(L,b){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==pn&&L.minFilter!==Fn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function w(L){let b=L.target;b.removeEventListener("dispose",w),I(b),b.isVideoTexture&&h.delete(b)}function R(L){let b=L.target;b.removeEventListener("dispose",R),E(b)}function I(L){let b=n.get(L);if(b.__webglInit===void 0)return;let q=L.source,nt=d.get(q);if(nt){let ht=nt[b.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&T(L),Object.keys(nt).length===0&&d.delete(q)}n.remove(L)}function T(L){let b=n.get(L);i.deleteTexture(b.__webglTexture);let q=L.source,nt=d.get(q);delete nt[b.__cacheKey],o.memory.textures--}function E(L){let b=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(b.__webglFramebuffer[nt]))for(let ht=0;ht<b.__webglFramebuffer[nt].length;ht++)i.deleteFramebuffer(b.__webglFramebuffer[nt][ht]);else i.deleteFramebuffer(b.__webglFramebuffer[nt]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[nt])}else{if(Array.isArray(b.__webglFramebuffer))for(let nt=0;nt<b.__webglFramebuffer.length;nt++)i.deleteFramebuffer(b.__webglFramebuffer[nt]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let nt=0;nt<b.__webglColorRenderbuffer.length;nt++)b.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[nt]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let q=L.textures;for(let nt=0,ht=q.length;nt<ht;nt++){let it=n.get(q[nt]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(q[nt])}n.remove(L)}let P=0;function O(){P=0}function F(){let L=P;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),P+=1,L}function U(L){let b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function X(L,b){let q=n.get(L);if(L.isVideoTexture&&lt(L),L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){let nt=L.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(q,L,b);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+b)}function N(L,b){let q=n.get(L);if(L.version>0&&q.__version!==L.version){$(q,L,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+b)}function Z(L,b){let q=n.get(L);if(L.version>0&&q.__version!==L.version){$(q,L,b);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+b)}function G(L,b){let q=n.get(L);if(L.version>0&&q.__version!==L.version){ut(q,L,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+b)}let j={[Vi]:i.REPEAT,[ki]:i.CLAMP_TO_EDGE,[rc]:i.MIRRORED_REPEAT},et={[pn]:i.NEAREST,[xp]:i.NEAREST_MIPMAP_NEAREST,[Hr]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[ua]:i.LINEAR_MIPMAP_NEAREST,[Gi]:i.LINEAR_MIPMAP_LINEAR},ot={[Ep]:i.NEVER,[Ap]:i.ALWAYS,[Tp]:i.LESS,[bd]:i.LEQUAL,[wp]:i.EQUAL,[Rp]:i.GEQUAL,[bp]:i.GREATER,[Sp]:i.NOTEQUAL};function yt(L,b){if(b.type===Ln&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Fn||b.magFilter===ua||b.magFilter===Hr||b.magFilter===Gi||b.minFilter===Fn||b.minFilter===ua||b.minFilter===Hr||b.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,j[b.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,j[b.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,j[b.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,et[b.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,et[b.minFilter]),b.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ot[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===pn||b.minFilter!==Hr&&b.minFilter!==Gi||b.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Et(L,b){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",w));let nt=b.source,ht=d.get(nt);ht===void 0&&(ht={},d.set(nt,ht));let it=U(b);if(it!==L.__cacheKey){ht[it]===void 0&&(ht[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ht[it].usedTimes++;let Ut=ht[L.__cacheKey];Ut!==void 0&&(ht[L.__cacheKey].usedTimes--,Ut.usedTimes===0&&T(b)),L.__cacheKey=it,L.__webglTexture=ht[it].texture}return q}function $(L,b,q){let nt=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(nt=i.TEXTURE_3D);let ht=Et(L,b),it=b.source;e.bindTexture(nt,L.__webglTexture,i.TEXTURE0+q);let Ut=n.get(it);if(it.version!==Ut.__version||ht===!0){e.activeTexture(i.TEXTURE0+q);let Mt=fe.getPrimaries(fe.workingColorSpace),It=b.colorSpace===yi?null:fe.getPrimaries(b.colorSpace),ce=b.colorSpace===yi||Mt===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let ft=x(b.image,!1,s.maxTextureSize);ft=Lt(b,ft);let Dt=r.convert(b.format,b.colorSpace),$t=r.convert(b.type),jt=y(b.internalFormat,Dt,$t,b.colorSpace,b.isVideoTexture);yt(nt,b);let Ht,de=b.mipmaps,re=b.isVideoTexture!==!0,we=Ut.__version===void 0||ht===!0,z=it.dataReady,vt=S(b,ft);if(b.isDepthTexture)jt=_(b.format===Is,b.type),we&&(re?e.texStorage2D(i.TEXTURE_2D,1,jt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,jt,ft.width,ft.height,0,Dt,$t,null));else if(b.isDataTexture)if(de.length>0){re&&we&&e.texStorage2D(i.TEXTURE_2D,vt,jt,de[0].width,de[0].height);for(let tt=0,at=de.length;tt<at;tt++)Ht=de[tt],re?z&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Ht.width,Ht.height,Dt,$t,Ht.data):e.texImage2D(i.TEXTURE_2D,tt,jt,Ht.width,Ht.height,0,Dt,$t,Ht.data);b.generateMipmaps=!1}else re?(we&&e.texStorage2D(i.TEXTURE_2D,vt,jt,ft.width,ft.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft.width,ft.height,Dt,$t,ft.data)):e.texImage2D(i.TEXTURE_2D,0,jt,ft.width,ft.height,0,Dt,$t,ft.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){re&&we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,jt,de[0].width,de[0].height,ft.depth);for(let tt=0,at=de.length;tt<at;tt++)if(Ht=de[tt],b.format!==Mn)if(Dt!==null)if(re){if(z)if(b.layerUpdates.size>0){let bt=gu(Ht.width,Ht.height,b.format,b.type);for(let Tt of b.layerUpdates){let ne=Ht.data.subarray(Tt*bt/Ht.data.BYTES_PER_ELEMENT,(Tt+1)*bt/Ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,Tt,Ht.width,Ht.height,1,Dt,ne)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,Ht.width,Ht.height,ft.depth,Dt,Ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,jt,Ht.width,Ht.height,ft.depth,0,Ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,Ht.width,Ht.height,ft.depth,Dt,$t,Ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,jt,Ht.width,Ht.height,ft.depth,0,Dt,$t,Ht.data)}else{re&&we&&e.texStorage2D(i.TEXTURE_2D,vt,jt,de[0].width,de[0].height);for(let tt=0,at=de.length;tt<at;tt++)Ht=de[tt],b.format!==Mn?Dt!==null?re?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,Ht.width,Ht.height,Dt,Ht.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,jt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?z&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Ht.width,Ht.height,Dt,$t,Ht.data):e.texImage2D(i.TEXTURE_2D,tt,jt,Ht.width,Ht.height,0,Dt,$t,Ht.data)}else if(b.isDataArrayTexture)if(re){if(we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,jt,ft.width,ft.height,ft.depth),z)if(b.layerUpdates.size>0){let tt=gu(ft.width,ft.height,b.format,b.type);for(let at of b.layerUpdates){let bt=ft.data.subarray(at*tt/ft.data.BYTES_PER_ELEMENT,(at+1)*tt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,ft.width,ft.height,1,Dt,$t,bt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Dt,$t,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,jt,ft.width,ft.height,ft.depth,0,Dt,$t,ft.data);else if(b.isData3DTexture)re?(we&&e.texStorage3D(i.TEXTURE_3D,vt,jt,ft.width,ft.height,ft.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Dt,$t,ft.data)):e.texImage3D(i.TEXTURE_3D,0,jt,ft.width,ft.height,ft.depth,0,Dt,$t,ft.data);else if(b.isFramebufferTexture){if(we)if(re)e.texStorage2D(i.TEXTURE_2D,vt,jt,ft.width,ft.height);else{let tt=ft.width,at=ft.height;for(let bt=0;bt<vt;bt++)e.texImage2D(i.TEXTURE_2D,bt,jt,tt,at,0,Dt,$t,null),tt>>=1,at>>=1}}else if(de.length>0){if(re&&we){let tt=Rt(de[0]);e.texStorage2D(i.TEXTURE_2D,vt,jt,tt.width,tt.height)}for(let tt=0,at=de.length;tt<at;tt++)Ht=de[tt],re?z&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Dt,$t,Ht):e.texImage2D(i.TEXTURE_2D,tt,jt,Dt,$t,Ht);b.generateMipmaps=!1}else if(re){if(we){let tt=Rt(ft);e.texStorage2D(i.TEXTURE_2D,vt,jt,tt.width,tt.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,$t,ft)}else e.texImage2D(i.TEXTURE_2D,0,jt,Dt,$t,ft);m(b)&&p(nt),Ut.__version=it.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ut(L,b,q){if(b.image.length!==6)return;let nt=Et(L,b),ht=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+q);let it=n.get(ht);if(ht.version!==it.__version||nt===!0){e.activeTexture(i.TEXTURE0+q);let Ut=fe.getPrimaries(fe.workingColorSpace),Mt=b.colorSpace===yi?null:fe.getPrimaries(b.colorSpace),It=b.colorSpace===yi||Ut===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let ce=b.isCompressedTexture||b.image[0].isCompressedTexture,ft=b.image[0]&&b.image[0].isDataTexture,Dt=[];for(let at=0;at<6;at++)!ce&&!ft?Dt[at]=x(b.image[at],!0,s.maxCubemapSize):Dt[at]=ft?b.image[at].image:b.image[at],Dt[at]=Lt(b,Dt[at]);let $t=Dt[0],jt=r.convert(b.format,b.colorSpace),Ht=r.convert(b.type),de=y(b.internalFormat,jt,Ht,b.colorSpace),re=b.isVideoTexture!==!0,we=it.__version===void 0||nt===!0,z=ht.dataReady,vt=S(b,$t);yt(i.TEXTURE_CUBE_MAP,b);let tt;if(ce){re&&we&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,de,$t.width,$t.height);for(let at=0;at<6;at++){tt=Dt[at].mipmaps;for(let bt=0;bt<tt.length;bt++){let Tt=tt[bt];b.format!==Mn?jt!==null?re?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,bt,0,0,Tt.width,Tt.height,jt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,bt,de,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,bt,0,0,Tt.width,Tt.height,jt,Ht,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,bt,de,Tt.width,Tt.height,0,jt,Ht,Tt.data)}}}else{if(tt=b.mipmaps,re&&we){tt.length>0&&vt++;let at=Rt(Dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,de,at.width,at.height)}for(let at=0;at<6;at++)if(ft){re?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Dt[at].width,Dt[at].height,jt,Ht,Dt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,de,Dt[at].width,Dt[at].height,0,jt,Ht,Dt[at].data);for(let bt=0;bt<tt.length;bt++){let ne=tt[bt].image[at].image;re?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,bt+1,0,0,ne.width,ne.height,jt,Ht,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,bt+1,de,ne.width,ne.height,0,jt,Ht,ne.data)}}else{re?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,jt,Ht,Dt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,de,jt,Ht,Dt[at]);for(let bt=0;bt<tt.length;bt++){let Tt=tt[bt];re?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,bt+1,0,0,jt,Ht,Tt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,bt+1,de,jt,Ht,Tt.image[at])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),it.__version=ht.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function St(L,b,q,nt,ht,it){let Ut=r.convert(q.format,q.colorSpace),Mt=r.convert(q.type),It=y(q.internalFormat,Ut,Mt,q.colorSpace),ce=n.get(b),ft=n.get(q);if(ft.__renderTarget=b,!ce.__hasExternalTextures){let Dt=Math.max(1,b.width>>it),$t=Math.max(1,b.height>>it);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,it,It,Dt,$t,b.depth,0,Ut,Mt,null):e.texImage2D(ht,it,It,Dt,$t,0,Ut,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),xt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,ht,ft.__webglTexture,0,ct(b)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,ht,ft.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(L,b,q){if(i.bindRenderbuffer(i.RENDERBUFFER,L),b.depthBuffer){let nt=b.depthTexture,ht=nt&&nt.isDepthTexture?nt.type:null,it=_(b.stencilBuffer,ht),Ut=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=ct(b);xt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,it,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,it,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,it,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,L)}else{let nt=b.textures;for(let ht=0;ht<nt.length;ht++){let it=nt[ht],Ut=r.convert(it.format,it.colorSpace),Mt=r.convert(it.type),It=y(it.internalFormat,Ut,Mt,it.colorSpace),ce=ct(b);q&&xt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,It,b.width,b.height):xt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,It,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,It,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let nt=n.get(b.depthTexture);nt.__renderTarget=b,(!nt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X(b.depthTexture,0);let ht=nt.__webglTexture,it=ct(b);if(b.depthTexture.format===Ts)xt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(b.depthTexture.format===Is)xt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function qt(L){let b=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){let nt=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),nt){let ht=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,nt.removeEventListener("dispose",ht)};nt.addEventListener("dispose",ht),b.__depthDisposeCallback=ht}b.__boundDepthTexture=nt}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Nt(b.__webglFramebuffer,L)}else if(q){b.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[nt]),b.__webglDepthbuffer[nt]===void 0)b.__webglDepthbuffer[nt]=i.createRenderbuffer(),dt(b.__webglDepthbuffer[nt],L,!1);else{let ht=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=b.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,it)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),dt(b.__webglDepthbuffer,L,!1);else{let nt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(L,b,q){let nt=n.get(L);b!==void 0&&St(nt.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&qt(L)}function ue(L){let b=L.texture,q=n.get(L),nt=n.get(b);L.addEventListener("dispose",R);let ht=L.textures,it=L.isWebGLCubeRenderTarget===!0,Ut=ht.length>1;if(Ut||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=b.version,o.memory.textures++),it){q.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[Mt]=[];for(let It=0;It<b.mipmaps.length;It++)q.__webglFramebuffer[Mt][It]=i.createFramebuffer()}else q.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)q.__webglFramebuffer[Mt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let Mt=0,It=ht.length;Mt<It;Mt++){let ce=n.get(ht[Mt]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&xt(L)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Mt=0;Mt<ht.length;Mt++){let It=ht[Mt];q.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Mt]);let ce=r.convert(It.format,It.colorSpace),ft=r.convert(It.type),Dt=y(It.internalFormat,ce,ft,It.colorSpace,L.isXRRenderTarget===!0),$t=ct(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,Dt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,q.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(q.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),yt(i.TEXTURE_CUBE_MAP,b);for(let Mt=0;Mt<6;Mt++)if(b.mipmaps&&b.mipmaps.length>0)for(let It=0;It<b.mipmaps.length;It++)St(q.__webglFramebuffer[Mt][It],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,It);else St(q.__webglFramebuffer[Mt],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let Mt=0,It=ht.length;Mt<It;Mt++){let ce=ht[Mt],ft=n.get(ce);e.bindTexture(i.TEXTURE_2D,ft.__webglTexture),yt(i.TEXTURE_2D,ce),St(q.__webglFramebuffer,L,ce,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),m(ce)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Mt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,nt.__webglTexture),yt(Mt,b),b.mipmaps&&b.mipmaps.length>0)for(let It=0;It<b.mipmaps.length;It++)St(q.__webglFramebuffer[It],L,b,i.COLOR_ATTACHMENT0,Mt,It);else St(q.__webglFramebuffer,L,b,i.COLOR_ATTACHMENT0,Mt,0);m(b)&&p(Mt),e.unbindTexture()}L.depthBuffer&&qt(L)}function k(L){let b=L.textures;for(let q=0,nt=b.length;q<nt;q++){let ht=b[q];if(m(ht)){let it=v(L),Ut=n.get(ht).__webglTexture;e.bindTexture(it,Ut),p(it),e.unbindTexture()}}}let K=[],D=[];function mt(L){if(L.samples>0){if(xt(L)===!1){let b=L.textures,q=L.width,nt=L.height,ht=i.COLOR_BUFFER_BIT,it=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(L),Mt=b.length>1;if(Mt)for(let It=0;It<b.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let It=0;It<b.length;It++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[It]);let ce=n.get(b[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,q,nt,0,0,q,nt,ht,i.NEAREST),l===!0&&(K.length=0,D.length=0,K.push(i.COLOR_ATTACHMENT0+It),L.depthBuffer&&L.resolveDepthBuffer===!1&&(K.push(it),D.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let It=0;It<b.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[It]);let ce=n.get(b[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,ce,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){let b=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ct(L){return Math.min(s.maxSamples,L.samples)}function xt(L){let b=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function lt(L){let b=o.render.frame;h.get(L)!==b&&(h.set(L,b),L.update())}function Lt(L,b){let q=L.colorSpace,nt=L.format,ht=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==zs&&q!==yi&&(fe.getTransfer(q)===ve?(nt!==Mn||ht!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function Rt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=N,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=Yt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=xt}function Hy(i,t){function e(n,s=yi){let r,o=fe.getTransfer(s);if(n===ti)return i.UNSIGNED_BYTE;if(n===yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===md)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fd)return i.BYTE;if(n===pd)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===xl)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===$i)return i.HALF_FLOAT;if(n===gd)return i.ALPHA;if(n===xd)return i.RGB;if(n===Mn)return i.RGBA;if(n===yd)return i.LUMINANCE;if(n===_d)return i.LUMINANCE_ALPHA;if(n===Ts)return i.DEPTH_COMPONENT;if(n===Is)return i.DEPTH_STENCIL;if(n===Ml)return i.RED;if(n===vl)return i.RED_INTEGER;if(n===Md)return i.RG;if(n===El)return i.RG_INTEGER;if(n===Tl)return i.RGBA_INTEGER;if(n===mo||n===go||n===xo||n===yo)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oc||n===ac||n===cc||n===lc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hc||n===uc||n===dc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===hc||n===uc)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===dc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fc||n===pc||n===mc||n===gc||n===xc||n===yc||n===_c||n===Mc||n===vc||n===Ec||n===Tc||n===wc||n===bc||n===Sc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_c)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ec)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_o||n===Rc||n===Ac)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_o)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vd||n===Cc||n===Ic||n===Pc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}function Oy(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ad(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),y=v.envMap,_=v.envMapRotation;y&&(m.envMap.value=y,Fi.copy(_),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(By.makeRotationFromEuler(Fi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zy(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let _=y.program;n.uniformBlockBinding(v,_)}function c(v,y){let _=s[v.id];_===void 0&&(g(v),_=h(v),s[v.id]=_,v.addEventListener("dispose",m));let S=y.program;n.updateUBOMapping(v,S);let w=t.render.frame;r[v.id]!==w&&(d(v),r[v.id]=w)}function h(v){let y=u();v.__bindingPointIndex=y;let _=i.createBuffer(),S=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,S,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=s[v.id],_=v.uniforms,S=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,R=_.length;w<R;w++){let I=Array.isArray(_[w])?_[w]:[_[w]];for(let T=0,E=I.length;T<E;T++){let P=I[T];if(f(P,w,T,S)===!0){let O=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],U=0;for(let X=0;X<F.length;X++){let N=F[X],Z=x(N);typeof N=="number"||typeof N=="boolean"?(P.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,O+U,P.__data)):N.isMatrix3?(P.__data[0]=N.elements[0],P.__data[1]=N.elements[1],P.__data[2]=N.elements[2],P.__data[3]=0,P.__data[4]=N.elements[3],P.__data[5]=N.elements[4],P.__data[6]=N.elements[5],P.__data[7]=0,P.__data[8]=N.elements[6],P.__data[9]=N.elements[7],P.__data[10]=N.elements[8],P.__data[11]=0):(N.toArray(P.__data,U),U+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,_,S){let w=v.value,R=y+"_"+_;if(S[R]===void 0)return typeof w=="number"||typeof w=="boolean"?S[R]=w:S[R]=w.clone(),!0;{let I=S[R];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return S[R]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(v){let y=v.uniforms,_=0,S=16;for(let R=0,I=y.length;R<I;R++){let T=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,P=T.length;E<P;E++){let O=T[E],F=Array.isArray(O.value)?O.value:[O.value];for(let U=0,X=F.length;U<X;U++){let N=F[U],Z=x(N),G=_%S,j=G%Z.boundary,et=G+j;_+=j,et!==0&&S-et<Z.storage&&(_+=S-et),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=Z.storage}}}let w=_%S;return w>0&&(_+=S-w),v.__size=_,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}function io(i,t,e,n,s,r){_s.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(js.x=r*_s.x-s*_s.y,js.y=s*_s.x+r*_s.y):js.copy(_s),i.copy(t),i.x+=js.x,i.y+=js.y,i.applyMatrix4(Hd)}function ao(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Do.fromBufferAttribute(o,s),Ho.fromBufferAttribute(o,r),e.distanceSqToSegment(Do,Ho,Ga,Du)>n)return;Ga.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ga);if(!(l<t.near||l>t.far))return{distance:l,point:Du.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}function Ou(i,t,e,n,s,r,o){let a=Qc.distanceSqToPoint(i);if(a<e){let l=new C;Qc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}function Cl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}function zu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Wy(i,t){let e=1-i;return e*e*t}function Xy(i,t){return 2*(1-i)*i*t}function qy(i,t){return i*i*t}function hr(i,t,e,n){return Wy(i,t)+Xy(i,e)+qy(i,n)}function Yy(i,t){let e=1-i;return e*e*e*t}function Zy(i,t){let e=1-i;return 3*e*e*i*t}function $y(i,t){return 3*(1-i)*i*i*t}function Jy(i,t){return i*i*i*t}function ur(i,t,e,n,s){return Yy(i,t)+Zy(i,e)+$y(i,n)+Jy(i,s)}function Ud(i,t,e,n,s){let r,o;if(s===f_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=ku(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=ku(r,i[r],i[r+1],o);return o&&Ko(o,o.next)&&(Mr(o),o=o.next),o}function Yi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ko(e,e.next)||De(e.prev,e,e.next)===0)){if(Mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&a_(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?jy(i,n,s,r):Qy(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Mr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=t_(Yi(i),t,e),yr(i,t,e,n,s,r,2)):o===2&&e_(i,t,e,n,s,r):yr(Yi(i),t,e,n,s,r,1);break}}}function Qy(i){let t=i.prev,e=i,n=i.next;if(De(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Es(s,a,r,l,o,c,g.x,g.y)&&De(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jy(i,t,e,n){let s=i.prev,r=i,o=i.next;if(De(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=il(f,g,t,e,n),v=il(x,m,t,e,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Es(a,h,l,u,c,d,y.x,y.y)&&De(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Es(a,h,l,u,c,d,_.x,_.y)&&De(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Es(a,h,l,u,c,d,y.x,y.y)&&De(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Es(a,h,l,u,c,d,_.x,_.y)&&De(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function t_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Ko(s,r)&&Nd(s,n,n.next,r)&&_r(s,r)&&_r(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Mr(n),Mr(n.next),n=i=r),n=n.next}while(n!==i);return Yi(n)}function e_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&h_(o,a)){let l=Fd(o,a);o=Yi(o,o.next),l=Yi(l,l.next),yr(o,t,e,n,s,r,0),yr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function n_(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Ud(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(l_(c));for(s.sort(i_),r=0;r<s.length;r++)e=s_(s[r],e);return e}function i_(i,t){return i.x-t.x}function s_(i,t){let e=r_(i,t);if(!e)return t;let n=Fd(e,i);return Yi(n,n.next),Yi(e,e.next)}function r_(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Es(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),_r(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&o_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function o_(i,t){return De(i.prev,i,t.prev)<0&&De(t.next,i,i.next)<0}function a_(i,t,e,n){let s=i;do s.z===0&&(s.z=il(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,c_(s)}function c_(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function il(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function l_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Es(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function h_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!u_(i,t)&&(_r(i,t)&&_r(t,i)&&d_(i,t)&&(De(i.prev,i,t.prev)||De(i,t.prev,t))||Ko(i,t)&&De(i.prev,i,i.next)>0&&De(t.prev,t,t.next)>0)}function De(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ko(i,t){return i.x===t.x&&i.y===t.y}function Nd(i,t,e,n){let s=fo(De(i,t,e)),r=fo(De(i,t,n)),o=fo(De(e,n,i)),a=fo(De(e,n,t));return!!(s!==r&&o!==a||s===0&&uo(i,e,t)||r===0&&uo(i,n,t)||o===0&&uo(e,i,n)||a===0&&uo(e,t,n))}function uo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function fo(i){return i>0?1:i<0?-1:0}function u_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Nd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function _r(i,t){return De(i.prev,i,i.next)<0?De(i,t,i.next)>=0&&De(i,i.prev,t)>=0:De(i,t,i.prev)<0||De(i,i.next,t)<0}function d_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Fd(i,t){let e=new sl(i.i,i.x,i.y),n=new sl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ku(i,t,e,n){let s=new sl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function f_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function Gu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Vu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}function m_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function g_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}function po(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function x_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function y_(i){function t(s,r){return i[s]-i[r]}let e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Yu(i,t,e){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let l=0;l!==t;++l)s[o++]=i[a+l]}return s}function Bd(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}function __(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ns;case"vector":case"vector2":case"vector3":case"vector4":return Bs;case"color":return qo;case"quaternion":return Fs;case"bool":case"boolean":return Ri;case"string":return Ai}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function M_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=__(i.type);if(i.times===void 0){let e=[],n=[];Bd(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}function od(){return performance.now()}function ld(i,t){return i.distance-t.distance}function gl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)gl(r[o],t,e,!0)}}var zf,xh,kf,hd,Gf,Kn,Bn,Qe,Qt,vi,Ei,Xe,yh,_h,Vf,Oi,Wf,Xf,qf,Yf,Zf,$f,Jf,Kf,Za,$a,Qf,jf,tp,ep,np,ip,sp,rp,op,Ja,Ka,Qa,Ss,ja,tc,ec,nc,ud,ap,cp,Ti,lp,hp,up,dp,fp,pp,mp,Mh,gp,dd,Rs,As,ic,sc,Yo,Vi,ki,rc,pn,xp,Hr,Fn,ua,Gi,ti,fd,pd,dr,xl,Wi,Ln,$i,yl,_l,Cs,md,gd,xd,Mn,yd,_d,Ts,Is,Ml,vl,Md,El,Tl,mo,go,xo,yo,oc,ac,cc,lc,hc,uc,dc,fc,pc,mc,gc,xc,yc,_c,Mc,vc,Ec,Tc,wc,bc,Sc,_o,Rc,Ac,vd,Cc,Ic,Pc,Mo,Lc,da,vh,Eh,Th,yp,Ed,Td,wl,_p,Mp,wd,vp,yi,Ye,zs,Zo,ve,ns,wh,Ep,Tp,wp,bd,bp,Sp,Rp,Ap,Dc,$o,bh,Qn,vo,bi,Je,Sh,ar,Ps,Sl,rt,se,fa,Rh,fe,Ah,Ch,Ih,Ph,Lh,is,Hc,$p,Eo,Jp,qe,le,Uc,Dn,To,Nc,je,C,ma,Dh,On,Xn,Rn,Ur,ss,rs,os,di,fi,Li,Zs,Nr,Fr,Di,Kp,$s,xa,Hn,qn,ya,Br,pi,_a,Or,Ma,Xi,Wt,as,An,Qp,jp,mi,zr,dn,Hh,Uh,tn,pr,t0,Nh,cs,Yn,kr,Js,e0,n0,Fh,Bh,Oh,zh,i0,ls,va,Zt,Cn,Zn,Ea,$n,hs,us,kh,Ta,wa,ba,Sa,Ra,Aa,_i,Rd,gi,Gr,At,Ke,s0,zn,Ie,Be,Vr,Ne,wo,bo,Xt,r0,_n,Ia,ds,fn,Ks,We,me,Gh,Hi,Wr,Vh,Xr,qr,Yr,Pa,Zr,Wh,$r,H,te,Rl,c0,l0,an,So,xi,Xh,qh,Ze,fs,ps,Fc,Ro,Bc,La,h0,u0,In,Ui,Kr,mr,Jt,f0,p0,m0,g0,x0,y0,_0,M0,v0,E0,T0,w0,b0,S0,R0,A0,C0,I0,P0,L0,D0,H0,U0,N0,F0,B0,O0,z0,k0,G0,V0,W0,X0,q0,Y0,Z0,$0,J0,K0,Q0,j0,tm,em,nm,im,sm,rm,om,am,cm,lm,hm,um,dm,fm,pm,mm,gm,xm,ym,_m,Mm,vm,Em,Tm,wm,bm,Sm,Rm,Am,Cm,Im,Pm,Lm,Dm,Hm,Um,Nm,Fm,Bm,Om,zm,km,Gm,Vm,Wm,Xm,qm,Ym,Zm,$m,Jm,Km,Qm,jm,tg,eg,ng,ig,sg,rg,og,ag,cg,lg,hg,ug,dg,fg,pg,mg,gg,xg,yg,_g,Mg,vg,Eg,Tg,wg,bg,Sg,Rg,Ag,Cg,Ig,Pg,Lg,Dg,Hg,Ug,Ng,Fg,Bg,Og,zg,kg,Gg,Vg,Wg,Xg,oe,_t,Nn,Qr,Ni,qg,Ao,vs,Yh,zi,Da,Zh,Ha,Ua,Na,Fa,Bi,ms,$h,Co,Io,Id,jh,Pd,Ld,Dd,tu,eu,nu,iu,su,Oc,zc,kc,Ba,bs,$x,Jx,au,to,ry,oy,cy,gy,Vc,Wc,Ty,Xc,qc,Ry,Ay,Iy,Yc,Ct,Uy,lr,Ny,Fy,Zc,$c,Fi,By,xu,yu,_u,Po,rn,gr,hn,gs,Qs,xs,ys,_s,js,Hd,eo,tr,no,Mu,Oa,vu,mn,Eu,Tu,wu,ky,bu,so,za,Su,ka,Ru,Jc,Lo,Au,Gy,Cu,ei,Ms,Iu,ro,Pu,Vy,er,nr,Vt,Kc,Do,Ho,Lu,ir,oo,Ga,Du,Uo,Hu,Uu,Nu,Fu,qi,Bu,Qc,co,lo,Ds,No,En,xr,jc,ho,Va,Wa,Xa,gn,Fo,tl,Bo,el,Oo,Hs,zo,ko,nl,ni,ii,si,Pe,gt,cn,Go,Vo,Si,Ky,wi,Wo,p_,ri,Wu,Xo,kt,Fe,xn,Xu,Y,qu,Us,rl,ol,al,Tn,Ri,qo,Ns,cl,Fs,Ai,Bs,Zu,Mi,ll,v_,Zi,Jn,hl,$u,ul,Ju,Os,Ku,qa,Qu,ju,vr,dl,td,ed,sr,Ya,fl,Ci,pl,nd,id,sd,rd,Il,E_,Pl,T_,w_,b_,S_,R_,A_,C_,ml,Ce,VM,ad,cd,wn=sn(()=>{zf=0,xh=1,kf=2,hd=1,Gf=2,Kn=3,Bn=0,Qe=1,Qt=2,vi=0,Ei=1,Xe=2,yh=3,_h=4,Vf=5,Oi=100,Wf=101,Xf=102,qf=103,Yf=104,Zf=200,$f=201,Jf=202,Kf=203,Za=204,$a=205,Qf=206,jf=207,tp=208,ep=209,np=210,ip=211,sp=212,rp=213,op=214,Ja=0,Ka=1,Qa=2,Ss=3,ja=4,tc=5,ec=6,nc=7,ud=0,ap=1,cp=2,Ti=0,lp=1,hp=2,up=3,dp=4,fp=5,pp=6,mp=7,Mh="attached",gp="detached",dd=300,Rs=301,As=302,ic=303,sc=304,Yo=306,Vi=1e3,ki=1001,rc=1002,pn=1003,xp=1004,Hr=1005,Fn=1006,ua=1007,Gi=1008,ti=1009,fd=1010,pd=1011,dr=1012,xl=1013,Wi=1014,Ln=1015,$i=1016,yl=1017,_l=1018,Cs=1020,md=35902,gd=1021,xd=1022,Mn=1023,yd=1024,_d=1025,Ts=1026,Is=1027,Ml=1028,vl=1029,Md=1030,El=1031,Tl=1033,mo=33776,go=33777,xo=33778,yo=33779,oc=35840,ac=35841,cc=35842,lc=35843,hc=36196,uc=37492,dc=37496,fc=37808,pc=37809,mc=37810,gc=37811,xc=37812,yc=37813,_c=37814,Mc=37815,vc=37816,Ec=37817,Tc=37818,wc=37819,bc=37820,Sc=37821,_o=36492,Rc=36494,Ac=36495,vd=36283,Cc=36284,Ic=36285,Pc=36286,Mo=2300,Lc=2301,da=2302,vh=2400,Eh=2401,Th=2402,yp=2500,Ed=0,Td=1,wl=2,_p=3200,Mp=3201,wd=0,vp=1,yi="",Ye="srgb",zs="srgb-linear",Zo="linear",ve="srgb",ns=7680,wh=519,Ep=512,Tp=513,wp=514,bd=515,bp=516,Sp=517,Rp=518,Ap=519,Dc=35044,$o=35048,bh="300 es",Qn=2e3,vo=2001,bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sh=1234567,ar=Math.PI/180,Ps=180/Math.PI;Sl={DEG2RAD:ar,RAD2DEG:Ps,generateUUID:vn,clamp:ke,euclideanModulo:bl,mapLinear:Cp,inverseLerp:Ip,lerp:cr,damp:Pp,pingpong:Lp,smoothstep:Dp,smootherstep:Hp,randInt:Up,randFloat:Np,randFloatSpread:Fp,seededRandom:Bp,degToRad:Op,radToDeg:zp,isPowerOfTwo:kp,ceilPowerOfTwo:Gp,floorPowerOfTwo:Vp,setQuaternionFromProperEuler:Wp,normalize:_e,denormalize:Pn},rt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},se=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],y=s[4],_=s[7],S=s[2],w=s[5],R=s[8];return r[0]=o*x+a*v+l*S,r[3]=o*m+a*y+l*w,r[6]=o*p+a*_+l*R,r[1]=c*x+h*v+u*S,r[4]=c*m+h*y+u*w,r[7]=c*p+h*_+u*R,r[2]=d*x+f*v+g*S,r[5]=d*m+f*y+g*w,r[8]=d*p+f*_+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fa.makeScale(t,e)),this}rotate(t){return this.premultiply(fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},fa=new se;Rh={};fe={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ve&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ve&&(i.r=ws(i.r),i.g=ws(i.g),i.b=ws(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yi?Zo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};Ah=[.64,.33,.3,.6,.15,.06],Ch=[.2126,.7152,.0722],Ih=[.3127,.329],Ph=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);fe.define({[zs]:{primaries:Ah,whitePoint:Ih,transfer:Zo,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:Ch,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:Ah,whitePoint:Ih,transfer:ve,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:Ch,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}});Hc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{is===void 0&&(is=fr("canvas")),is.width=t.width,is.height=t.height;let n=is.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=is}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=jn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$p=0,Eo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pa(s[o].image)):r.push(pa(s[o]))}else r=pa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};Jp=0,qe=class i extends bi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ki,s=ki,r=Fn,o=Gi,a=Mn,l=ti,c=i.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=vn(),this.name="",this.source=new Eo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vi:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case rc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vi:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case rc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=dd;qe.DEFAULT_ANISOTROPY=1;le=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,_=(f+1)/2,S=(p+1)/2,w=(h+d)/4,R=(u+x)/4,I=(g+m)/4;return y>_&&y>S?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=R/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=I/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=R/r,s=I/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Uc=class extends bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Eo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends Uc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},To=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Nc=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},je=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*x,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let S=Math.sqrt(y),w=Math.atan2(S,p*v);m=Math.sin(m*w)/S,a=Math.sin(a*w)/S}let _=a*v;if(l=l*m+d*_,c=c*m+f*_,h=h*m+g*_,u=u*m+x*_,m===1-a){let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ma.copy(this).projectOnVector(t),this.sub(ma)}reflect(t){return this.sub(ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ma=new C,Dh=new je,On=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)),Ur.applyMatrix4(t.matrixWorld),this.union(Ur)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),Nr.subVectors(this.max,Zs),ss.subVectors(t.a,Zs),rs.subVectors(t.b,Zs),os.subVectors(t.c,Zs),di.subVectors(rs,ss),fi.subVectors(os,rs),Li.subVectors(ss,os);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Li.z,Li.y,di.z,0,-di.x,fi.z,0,-fi.x,Li.z,0,-Li.x,-di.y,di.x,0,-fi.y,fi.x,0,-Li.y,Li.x,0];return!ga(e,ss,rs,os,Nr)||(e=[1,0,0,0,1,0,0,0,1],!ga(e,ss,rs,os,Nr))?!1:(Fr.crossVectors(di,fi),e=[Fr.x,Fr.y,Fr.z],ga(e,ss,rs,os,Nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Xn=[new C,new C,new C,new C,new C,new C,new C,new C],Rn=new C,Ur=new On,ss=new C,rs=new C,os=new C,di=new C,fi=new C,Li=new C,Zs=new C,Nr=new C,Fr=new C,Di=new C;Kp=new On,$s=new C,xa=new C,Hn=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Kp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);let e=$s.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector($s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(xa)),this.expandByPoint($s.copy(t.center).sub(xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},qn=new C,ya=new C,Br=new C,pi=new C,_a=new C,Or=new C,Ma=new C,Xi=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ya.copy(t).add(e).multiplyScalar(.5),Br.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(ya);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Br),a=pi.dot(this.direction),l=-pi.dot(Br),c=pi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ya).addScaledVector(Br,d),f}intersectSphere(t,e){qn.subVectors(t.center,this.origin);let n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,s,r){_a.subVectors(e,t),Or.subVectors(n,t),Ma.crossVectors(_a,Or);let o=this.direction.dot(Ma),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,t);let l=a*this.direction.dot(Or.crossVectors(pi,Or));if(l<0)return null;let c=a*this.direction.dot(_a.cross(pi));if(c<0||l+c>o)return null;let h=-a*pi.dot(Ma);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wt=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,x,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/as.setFromMatrixColumn(t,0).length(),r=1/as.setFromMatrixColumn(t,1).length(),o=1/as.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qp,t,jp)}lookAt(t,e,n){let s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),mi.crossVectors(n,dn),mi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),mi.crossVectors(n,dn)),mi.normalize(),zr.crossVectors(dn,mi),s[0]=mi.x,s[4]=zr.x,s[8]=dn.x,s[1]=mi.y,s[5]=zr.y,s[9]=dn.y,s[2]=mi.z,s[6]=zr.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],y=n[7],_=n[11],S=n[15],w=s[0],R=s[4],I=s[8],T=s[12],E=s[1],P=s[5],O=s[9],F=s[13],U=s[2],X=s[6],N=s[10],Z=s[14],G=s[3],j=s[7],et=s[11],ot=s[15];return r[0]=o*w+a*E+l*U+c*G,r[4]=o*R+a*P+l*X+c*j,r[8]=o*I+a*O+l*N+c*et,r[12]=o*T+a*F+l*Z+c*ot,r[1]=h*w+u*E+d*U+f*G,r[5]=h*R+u*P+d*X+f*j,r[9]=h*I+u*O+d*N+f*et,r[13]=h*T+u*F+d*Z+f*ot,r[2]=g*w+x*E+m*U+p*G,r[6]=g*R+x*P+m*X+p*j,r[10]=g*I+x*O+m*N+p*et,r[14]=g*T+x*F+m*Z+p*ot,r[3]=v*w+y*E+_*U+S*G,r[7]=v*R+y*P+_*X+S*j,r[11]=v*I+y*O+_*N+S*et,r[15]=v*T+y*F+_*Z+S*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,y=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,_=h*x*c-g*u*c+g*a*f-o*x*f-h*a*p+o*u*p,S=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,w=e*v+n*y+s*_+r*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return t[0]=v*R,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*R,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*R,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*R,t[4]=y*R,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*R,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*R,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*R,t[8]=_*R,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*R,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*p+e*a*p)*R,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*R,t[12]=S*R,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*R,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,v=l*c,y=l*h,_=l*u,S=n.x,w=n.y,R=n.z;return s[0]=(1-(x+p))*S,s[1]=(f+_)*S,s[2]=(g-y)*S,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(d+p))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+y)*R,s[9]=(m-v)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=as.set(s[0],s[1],s[2]).length(),o=as.set(s[4],s[5],s[6]).length(),a=as.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],An.copy(this);let c=1/r,h=1/o,u=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,e.setFromRotationMatrix(An),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Qn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(a===Qn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===vo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Qn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h,g,x;if(a===Qn)g=(o+r)*u,x=-2*u;else if(a===vo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},as=new C,An=new Wt,Qp=new C(0,0,0),jp=new C(1,1,1),mi=new C,zr=new C,dn=new C,Hh=new Wt,Uh=new je,tn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uh.setFromEuler(this),this.setFromQuaternion(Uh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};tn.DEFAULT_ORDER="XYZ";pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},t0=0,Nh=new C,cs=new je,Yn=new Wt,kr=new C,Js=new C,e0=new C,n0=new je,Fh=new C(1,0,0),Bh=new C(0,1,0),Oh=new C(0,0,1),zh={type:"added"},i0={type:"removed"},ls={type:"childadded",child:null},va={type:"childremoved",child:null},Zt=class i extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new tn,n=new je,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Wt},normalMatrix:{value:new se}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(Fh,t)}rotateY(t){return this.rotateOnAxis(Bh,t)}rotateZ(t){return this.rotateOnAxis(Oh,t)}translateOnAxis(t,e){return Nh.copy(t).applyQuaternion(this.quaternion),this.position.add(Nh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fh,t)}translateY(t){return this.translateOnAxis(Bh,t)}translateZ(t){return this.translateOnAxis(Oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Js,kr,this.up):Yn.lookAt(kr,Js,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(Yn),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zh),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(i0),va.child=t,this.dispatchEvent(va),va.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zh),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,e0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,n0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Zt.DEFAULT_UP=new C(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Cn=new C,Zn=new C,Ea=new C,$n=new C,hs=new C,us=new C,kh=new C,Ta=new C,wa=new C,ba=new C,Sa=new le,Ra=new le,Aa=new le,_i=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),Zn.subVectors(n,e),Ea.subVectors(t,e);let o=Cn.dot(Cn),a=Cn.dot(Zn),l=Cn.dot(Ea),c=Zn.dot(Zn),h=Zn.dot(Ea),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Sa.setScalar(0),Ra.setScalar(0),Aa.setScalar(0),Sa.fromBufferAttribute(t,e),Ra.fromBufferAttribute(t,n),Aa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Sa,r.x),o.addScaledVector(Ra,r.y),o.addScaledVector(Aa,r.z),o}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),Zn.subVectors(t,e),Cn.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Cn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;hs.subVectors(s,n),us.subVectors(r,n),Ta.subVectors(t,n);let l=hs.dot(Ta),c=us.dot(Ta);if(l<=0&&c<=0)return e.copy(n);wa.subVectors(t,s);let h=hs.dot(wa),u=us.dot(wa);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(hs,o);ba.subVectors(t,r);let f=hs.dot(ba),g=us.dot(ba);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(us,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return kh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(kh,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(hs,o).addScaledVector(us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Gr={h:0,s:0,l:0};At=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=fe.workingColorSpace){if(t=bl(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ca(o,r,t+1/3),this.g=Ca(o,r,t),this.b=Ca(o,r,t-1/3)}return fe.toWorkingColorSpace(this,s),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){let n=Rd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return fe.fromWorkingColorSpace(Ke.copy(this),t),Math.round(ke(Ke.r*255,0,255))*65536+Math.round(ke(Ke.g*255,0,255))*256+Math.round(ke(Ke.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(Ke.copy(this),e);let n=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Ye){fe.fromWorkingColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,s=Ke.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(Gr);let n=cr(gi.h,Gr.h,e),s=cr(gi.s,Gr.s,e),r=cr(gi.l,Gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new At;At.NAMES=Rd;s0=0,zn=class extends bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=vn(),this.name="",this.blending=Ei,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=$a,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Za&&(n.blendSrc=this.blendSrc),this.blendDst!==$a&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ie=class extends zn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Be=new C,Vr=new rt,Ne=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dc,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vr.fromBufferAttribute(this,e),Vr.applyMatrix3(t),this.setXY(e,Vr.x,Vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dc&&(t.usage=this.usage),t}},wo=class extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}},bo=class extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}},Xt=class extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},r0=0,_n=new Wt,Ia=new Zt,ds=new C,fn=new On,Ks=new On,We=new C,me=class i extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sd(t)?bo:wo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return Ia.lookAt(t),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(fn.min,Ks.min),fn.expandByPoint(We),We.addVectors(fn.max,Ks.max),fn.expandByPoint(We)):(fn.expandByPoint(Ks.min),fn.expandByPoint(Ks.max))}fn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)We.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(t,c),We.add(ds)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new C,l[I]=new C;let c=new C,h=new C,u=new C,d=new rt,f=new rt,g=new rt,x=new C,m=new C;function p(I,T,E){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,E),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,E),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[I].add(x),a[T].add(x),a[E].add(x),l[I].add(m),l[T].add(m),l[E].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,T=v.length;I<T;++I){let E=v[I],P=E.start,O=E.count;for(let F=P,U=P+O;F<U;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let y=new C,_=new C,S=new C,w=new C;function R(I){S.fromBufferAttribute(s,I),w.copy(S);let T=a[I];y.copy(T),y.sub(S.multiplyScalar(S.dot(T))).normalize(),_.crossVectors(w,T);let P=_.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,P)}for(let I=0,T=v.length;I<T;++I){let E=v[I],P=E.start,O=E.count;for(let F=P,U=P+O;F<U;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ne(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gh=new Wt,Hi=new Xi,Wr=new Hn,Vh=new C,Xr=new C,qr=new C,Yr=new C,Pa=new C,Zr=new C,Wh=new C,$r=new C,H=class extends Zt{constructor(t=new me,e=new Ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Zr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Pa.fromBufferAttribute(u,t),o?Zr.addScaledVector(Pa,h):Zr.addScaledVector(Pa.sub(e),h))}e.add(Zr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(r),Hi.copy(t.ray).recast(t.near),!(Wr.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(Wr,Vh)===null||Hi.origin.distanceToSquared(Vh)>(t.far-t.near)**2))&&(Gh.copy(r).invert(),Hi.copy(t.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,S=y;_<S;_+=3){let w=a.getX(_),R=a.getX(_+1),I=a.getX(_+2);s=Jr(this,p,t,n,c,h,u,w,R,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=Jr(this,o,t,n,c,h,u,v,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,S=y;_<S;_+=3){let w=_,R=_+1,I=_+2;s=Jr(this,p,t,n,c,h,u,w,R,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=m,y=m+1,_=m+2;s=Jr(this,o,t,n,c,h,u,v,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};te=class i extends me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function g(x,m,p,v,y,_,S,w,R,I,T){let E=_/R,P=S/I,O=_/2,F=S/2,U=w/2,X=R+1,N=I+1,Z=0,G=0,j=new C;for(let et=0;et<N;et++){let ot=et*P-F;for(let yt=0;yt<X;yt++){let Et=yt*E-O;j[x]=Et*v,j[m]=ot*y,j[p]=U,c.push(j.x,j.y,j.z),j[x]=0,j[m]=0,j[p]=w>0?1:-1,h.push(j.x,j.y,j.z),u.push(yt/R),u.push(1-et/I),Z+=1}}for(let et=0;et<I;et++)for(let ot=0;ot<R;ot++){let yt=d+ot+X*et,Et=d+ot+X*(et+1),$=d+(ot+1)+X*(et+1),ut=d+(ot+1)+X*et;l.push(yt,Et,ut),l.push(Et,$,ut),G+=6}a.addGroup(f,G,T),f+=G,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};Rl={clone:Ls,merge:on},c0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends zn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c0,this.fragmentShader=l0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=a0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},So=class extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xi=new C,Xh=new rt,qh=new rt,Ze=class extends So{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,Xh,qh),e.subVectors(qh,Xh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ar*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},fs=-90,ps=1,Fc=class extends Zt{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(fs,ps,t,e);s.layers=this.layers,this.add(s);let r=new Ze(fs,ps,t,e);r.layers=this.layers,this.add(r);let o=new Ze(fs,ps,t,e);o.layers=this.layers,this.add(o);let a=new Ze(fs,ps,t,e);a.layers=this.layers,this.add(a);let l=new Ze(fs,ps,t,e);l.layers=this.layers,this.add(l);let c=new Ze(fs,ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ro=class extends qe{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Rs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Bc=class extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ro(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new te(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:vi});r.uniforms.tEquirect.value=e;let o=new H(s,r),a=e.minFilter;return e.minFilter===Gi&&(e.minFilter=Fn),new Fc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},La=new C,h0=new C,u0=new se,In=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=La.subVectors(n,e).cross(h0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(La),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||u0.getNormalMatrix(t),s=this.coplanarPoint(La).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ui=new Hn,Kr=new C,mr=class{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,o=new In){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],v=s[13],y=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,m-f,_-p).normalize(),n[1].setComponents(l+r,d+c,m+f,_+p).normalize(),n[2].setComponents(l+o,d+h,m+g,_+v).normalize(),n[3].setComponents(l-o,d-h,m-g,_-v).normalize(),n[4].setComponents(l-a,d-u,m-x,_-y).normalize(),e===Qn)n[5].setComponents(l+a,d+u,m+x,_+y).normalize();else if(e===vo)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Kr.x=s.normal.x>0?t.max.x:t.min.x,Kr.y=s.normal.y>0?t.max.y:t.min.y,Kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Jt=class i extends me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let v=p*d-o;for(let y=0;y<c;y++){let _=y*u-r;g.push(_,-v,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let y=v+c*p,_=v+c*(p+1),S=v+1+c*(p+1),w=v+1+c*p;f.push(y,_,w),f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},f0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,m0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,M0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,E0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,S0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,R0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,N0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,F0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,B0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V0="gl_FragColor = linearToOutputTexel( gl_FragColor );",W0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Y0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,J0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,am=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,um=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Em=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Um=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Km=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,og=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ag=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ug=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_g=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:f0,alphahash_pars_fragment:p0,alphamap_fragment:m0,alphamap_pars_fragment:g0,alphatest_fragment:x0,alphatest_pars_fragment:y0,aomap_fragment:_0,aomap_pars_fragment:M0,batching_pars_vertex:v0,batching_vertex:E0,begin_vertex:T0,beginnormal_vertex:w0,bsdfs:b0,iridescence_fragment:S0,bumpmap_pars_fragment:R0,clipping_planes_fragment:A0,clipping_planes_pars_fragment:C0,clipping_planes_pars_vertex:I0,clipping_planes_vertex:P0,color_fragment:L0,color_pars_fragment:D0,color_pars_vertex:H0,color_vertex:U0,common:N0,cube_uv_reflection_fragment:F0,defaultnormal_vertex:B0,displacementmap_pars_vertex:O0,displacementmap_vertex:z0,emissivemap_fragment:k0,emissivemap_pars_fragment:G0,colorspace_fragment:V0,colorspace_pars_fragment:W0,envmap_fragment:X0,envmap_common_pars_fragment:q0,envmap_pars_fragment:Y0,envmap_pars_vertex:Z0,envmap_physical_pars_fragment:rm,envmap_vertex:$0,fog_vertex:J0,fog_pars_vertex:K0,fog_fragment:Q0,fog_pars_fragment:j0,gradientmap_pars_fragment:tm,lightmap_pars_fragment:em,lights_lambert_fragment:nm,lights_lambert_pars_fragment:im,lights_pars_begin:sm,lights_toon_fragment:om,lights_toon_pars_fragment:am,lights_phong_fragment:cm,lights_phong_pars_fragment:lm,lights_physical_fragment:hm,lights_physical_pars_fragment:um,lights_fragment_begin:dm,lights_fragment_maps:fm,lights_fragment_end:pm,logdepthbuf_fragment:mm,logdepthbuf_pars_fragment:gm,logdepthbuf_pars_vertex:xm,logdepthbuf_vertex:ym,map_fragment:_m,map_pars_fragment:Mm,map_particle_fragment:vm,map_particle_pars_fragment:Em,metalnessmap_fragment:Tm,metalnessmap_pars_fragment:wm,morphinstance_vertex:bm,morphcolor_vertex:Sm,morphnormal_vertex:Rm,morphtarget_pars_vertex:Am,morphtarget_vertex:Cm,normal_fragment_begin:Im,normal_fragment_maps:Pm,normal_pars_fragment:Lm,normal_pars_vertex:Dm,normal_vertex:Hm,normalmap_pars_fragment:Um,clearcoat_normal_fragment_begin:Nm,clearcoat_normal_fragment_maps:Fm,clearcoat_pars_fragment:Bm,iridescence_pars_fragment:Om,opaque_fragment:zm,packing:km,premultiplied_alpha_fragment:Gm,project_vertex:Vm,dithering_fragment:Wm,dithering_pars_fragment:Xm,roughnessmap_fragment:qm,roughnessmap_pars_fragment:Ym,shadowmap_pars_fragment:Zm,shadowmap_pars_vertex:$m,shadowmap_vertex:Jm,shadowmask_pars_fragment:Km,skinbase_vertex:Qm,skinning_pars_vertex:jm,skinning_vertex:tg,skinnormal_vertex:eg,specularmap_fragment:ng,specularmap_pars_fragment:ig,tonemapping_fragment:sg,tonemapping_pars_fragment:rg,transmission_fragment:og,transmission_pars_fragment:ag,uv_pars_fragment:cg,uv_pars_vertex:lg,uv_vertex:hg,worldpos_vertex:ug,background_vert:dg,background_frag:fg,backgroundCube_vert:pg,backgroundCube_frag:mg,cube_vert:gg,cube_frag:xg,depth_vert:yg,depth_frag:_g,distanceRGBA_vert:Mg,distanceRGBA_frag:vg,equirect_vert:Eg,equirect_frag:Tg,linedashed_vert:wg,linedashed_frag:bg,meshbasic_vert:Sg,meshbasic_frag:Rg,meshlambert_vert:Ag,meshlambert_frag:Cg,meshmatcap_vert:Ig,meshmatcap_frag:Pg,meshnormal_vert:Lg,meshnormal_frag:Dg,meshphong_vert:Hg,meshphong_frag:Ug,meshphysical_vert:Ng,meshphysical_frag:Fg,meshtoon_vert:Bg,meshtoon_frag:Og,points_vert:zg,points_frag:kg,shadow_vert:Gg,shadow_frag:Vg,sprite_vert:Wg,sprite_frag:Xg},_t={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Nn={basic:{uniforms:on([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:on([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new At(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:on([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:on([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:on([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new At(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:on([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:on([_t.points,_t.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:on([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:on([_t.common,_t.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:on([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:on([_t.sprite,_t.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:on([_t.common,_t.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:on([_t.lights,_t.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Nn.physical={uniforms:on([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};Qr={r:0,b:0,g:0},Ni=new tn,qg=new Wt;Ao=class extends So{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vs=4,Yh=[.125,.215,.35,.446,.526,.582],zi=20,Da=new Ao,Zh=new At,Ha=null,Ua=0,Na=0,Fa=!1,Bi=(1+Math.sqrt(5))/2,ms=1/Bi,$h=[new C(-Bi,ms,0),new C(Bi,ms,0),new C(-ms,0,Bi),new C(ms,0,Bi),new C(0,Bi,-ms),new C(0,Bi,ms),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Co=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ha=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ha,Ua,Na),this._renderer.xr.enabled=Fa,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rs||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ha=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:$i,format:Mn,colorSpace:zs,depthBuffer:!1},s=Jh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jg(r)),this._blurMaterial=tx(r,t,e)}return s}_compileMaterial(t){let e=new H(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,n,s){let a=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Zh),h.toneMapping=Ti,h.autoClear=!1;let f=new Ie({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new H(new te,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Zh),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;jr(s,v*y,p>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Rs||t.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new H(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Da)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$h[(s-r-1)%$h.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new H(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);let p=[],v=0;for(let R=0;R<zi;++R){let I=R/x,T=Math.exp(-I*I/2);p.push(T),R===0?v+=T:R<m&&(v+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let _=this._sizeLods[s],S=3*_*(s>y-vs?s-y+vs:0),w=4*(this._cubeSize-_);jr(e,S,w,3*_,2*_),l.setRenderTarget(e),l.render(u,Da)}};Io=class extends qe{constructor(t,e,n,s,r,o,a,l,c,h=Ts){if(h!==Ts&&h!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ts&&(n=Wi),n===void 0&&h===Is&&(n=Cs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Id=new qe,jh=new Io(1,1),Pd=new To,Ld=new Nc,Dd=new Ro,tu=[],eu=[],nu=new Float32Array(16),iu=new Float32Array(9),su=new Float32Array(4);Oc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rx(e.type)}},zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yx(e.type)}},kc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ba=/(\w+)(\])?(\[|\.)?/g;bs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Zx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};$x=37297,Jx=0;au=new se;to=new C;ry=/^[ \t]*#include +<([\w\d./]+)>/gm;oy=new Map;cy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;gy=0,Vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Wc(t),e.set(t,n)),n}},Wc=class{constructor(t){this.id=gy++,this.code=t,this.usedTimes=0}};Ty=0;Xc=class extends zn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qc=class extends zn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ry=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ay=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;Iy={[Ja]:Ka,[Qa]:ec,[ja]:nc,[Ss]:tc,[Ka]:Ja,[ec]:Qa,[nc]:ja,[tc]:Ss};Yc=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ct=class extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Uy={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Uy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ny=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Zc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new an({vertexShader:Ny,fragmentShader:Fy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new H(new Jt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$c=class extends bi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new Zc,m=e.getContextAttributes(),p=null,v=null,y=[],_=[],S=new rt,w=null,R=new Ze;R.viewport=new le;let I=new Ze;I.viewport=new le;let T=[R,I],E=new Yc,P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ut=y[$];return ut===void 0&&(ut=new lr,y[$]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function($){let ut=y[$];return ut===void 0&&(ut=new lr,y[$]=ut),ut.getGripSpace()},this.getHand=function($){let ut=y[$];return ut===void 0&&(ut=new lr,y[$]=ut),ut.getHandSpace()};function F($){let ut=_.indexOf($.inputSource);if(ut===-1)return;let St=y[ut];St!==void 0&&(St.update($.inputSource,$.frame,c||o),St.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",X);for(let $=0;$<y.length;$++){let ut=_[$];ut!==null&&(_[$]=null,y[$].disconnect(ut))}P=null,O=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,v=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",U),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(S),s.renderState.layers===void 0){let ut={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Dn(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ut=null,St=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=m.stencil?Is:Ts,St=m.stencil?Cs:Wi);let Nt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Nt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Dn(d.textureWidth,d.textureHeight,{format:Mn,type:ti,depthTexture:new Io(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Et.setContext(s),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X($){for(let ut=0;ut<$.removed.length;ut++){let St=$.removed[ut],dt=_.indexOf(St);dt>=0&&(_[dt]=null,y[dt].disconnect(St))}for(let ut=0;ut<$.added.length;ut++){let St=$.added[ut],dt=_.indexOf(St);if(dt===-1){for(let qt=0;qt<y.length;qt++)if(qt>=_.length){_.push(St),dt=qt;break}else if(_[qt]===null){_[qt]=St,dt=qt;break}if(dt===-1)break}let Nt=y[dt];Nt&&Nt.connect(St)}}let N=new C,Z=new C;function G($,ut,St){N.setFromMatrixPosition(ut.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);let dt=N.distanceTo(Z),Nt=ut.projectionMatrix.elements,qt=St.projectionMatrix.elements,Yt=Nt[14]/(Nt[10]-1),ue=Nt[14]/(Nt[10]+1),k=(Nt[9]+1)/Nt[5],K=(Nt[9]-1)/Nt[5],D=(Nt[8]-1)/Nt[0],mt=(qt[8]+1)/qt[0],ct=Yt*D,xt=Yt*mt,lt=dt/(-D+mt),Lt=lt*-D;if(ut.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Lt),$.translateZ(lt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Nt[10]===-1)$.projectionMatrix.copy(ut.projectionMatrix),$.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{let Rt=Yt+lt,L=ue+lt,b=ct-Lt,q=xt+(dt-Lt),nt=k*ue/L*Rt,ht=K*ue/L*Rt;$.projectionMatrix.makePerspective(b,q,nt,ht,Rt,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function j($,ut){ut===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ut.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ut=$.near,St=$.far;x.texture!==null&&(x.depthNear>0&&(ut=x.depthNear),x.depthFar>0&&(St=x.depthFar)),E.near=I.near=R.near=ut,E.far=I.far=R.far=St,(P!==E.near||O!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,O=E.far),R.layers.mask=$.layers.mask|2,I.layers.mask=$.layers.mask|4,E.layers.mask=R.layers.mask|I.layers.mask;let dt=$.parent,Nt=E.cameras;j(E,dt);for(let qt=0;qt<Nt.length;qt++)j(Nt[qt],dt);Nt.length===2?G(E,R,I):E.projectionMatrix.copy(R.projectionMatrix),et($,E,dt)};function et($,ut,St){St===null?$.matrix.copy(ut.matrixWorld):($.matrix.copy(St.matrixWorld),$.matrix.invert(),$.matrix.multiply(ut.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ut.projectionMatrix),$.projectionMatrixInverse.copy(ut.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ps*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let ot=null;function yt($,ut){if(h=ut.getViewerPose(c||o),g=ut,h!==null){let St=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let dt=!1;St.length!==E.cameras.length&&(E.cameras.length=0,dt=!0);for(let qt=0;qt<St.length;qt++){let Yt=St[qt],ue=null;if(f!==null)ue=f.getViewport(Yt);else{let K=u.getViewSubImage(d,Yt);ue=K.viewport,qt===0&&(t.setRenderTargetTextures(v,K.colorTexture,d.ignoreDepthValues?void 0:K.depthStencilTexture),t.setRenderTarget(v))}let k=T[qt];k===void 0&&(k=new Ze,k.layers.enable(qt),k.viewport=new le,T[qt]=k),k.matrix.fromArray(Yt.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(Yt.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(ue.x,ue.y,ue.width,ue.height),qt===0&&(E.matrix.copy(k.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),dt===!0&&E.cameras.push(k)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){let qt=u.getDepthInformation(St[0]);qt&&qt.isValid&&qt.texture&&x.init(t,qt,s.renderState)}}for(let St=0;St<y.length;St++){let dt=_[St],Nt=y[St];dt!==null&&Nt!==void 0&&Nt.update(dt,ut,c||o)}ot&&ot($,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),g=null}let Et=new Cd;Et.setAnimationLoop(yt),this.setAnimationLoop=function($){ot=$},this.dispose=function(){}}},Fi=new tn,By=new Wt;xu=class{constructor(t={}){let{canvas:e=Xp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ye,this.toneMapping=Ti,this.toneMappingExposure=1;let _=this,S=!1,w=0,R=0,I=null,T=-1,E=null,P=new le,O=new le,F=null,U=new At(0),X=0,N=e.width,Z=e.height,G=1,j=null,et=null,ot=new le(0,0,N,Z),yt=new le(0,0,N,Z),Et=!1,$=new mr,ut=!1,St=!1,dt=new Wt,Nt=new Wt,qt=new C,Yt=new le,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},k=!1;function K(){return I===null?G:1}let D=n;function mt(A,V){return e.getContext(A,V)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),D===null){let V="webgl2";if(D=mt(V,A),D===null)throw mt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ct,xt,lt,Lt,Rt,L,b,q,nt,ht,it,Ut,Mt,It,ce,ft,Dt,$t,jt,Ht,de,re,we,z;function vt(){ct=new nx(D),ct.init(),re=new Hy(D,ct),xt=new Jg(D,ct,t,re),lt=new Py(D,ct),xt.reverseDepthBuffer&&d&&lt.buffers.depth.setReversed(!0),Lt=new rx(D),Rt=new yy,L=new Dy(D,ct,lt,Rt,xt,re,Lt),b=new Qg(_),q=new ex(_),nt=new d0(D),we=new Zg(D,nt),ht=new ix(D,nt,Lt,we),it=new ax(D,ht,nt,Lt),jt=new ox(D,xt,L),ft=new Kg(Rt),Ut=new xy(_,b,q,ct,xt,we,ft),Mt=new Oy(_,Rt),It=new My,ce=new Sy(ct),$t=new Yg(_,b,q,lt,it,f,l),Dt=new Cy(_,it,xt),z=new zy(D,Lt,xt,lt),Ht=new $g(D,ct,Lt),de=new sx(D,ct,Lt),Lt.programs=Ut.programs,_.capabilities=xt,_.extensions=ct,_.properties=Rt,_.renderLists=It,_.shadowMap=Dt,_.state=lt,_.info=Lt}vt();let tt=new $c(_,D);this.xr=tt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(N,Z,!1))},this.getSize=function(A){return A.set(N,Z)},this.setSize=function(A,V,J=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,Z=V,e.width=Math.floor(A*G),e.height=Math.floor(V*G),J===!0&&(e.style.width=A+"px",e.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(N*G,Z*G).floor()},this.setDrawingBufferSize=function(A,V,J){N=A,Z=V,G=J,e.width=Math.floor(A*J),e.height=Math.floor(V*J),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(ot)},this.setViewport=function(A,V,J,Q){A.isVector4?ot.set(A.x,A.y,A.z,A.w):ot.set(A,V,J,Q),lt.viewport(P.copy(ot).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(yt)},this.setScissor=function(A,V,J,Q){A.isVector4?yt.set(A.x,A.y,A.z,A.w):yt.set(A,V,J,Q),lt.scissor(O.copy(yt).multiplyScalar(G).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(A){lt.setScissorTest(Et=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){et=A},this.getClearColor=function(A){return A.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(A=!0,V=!0,J=!0){let Q=0;if(A){let W=!1;if(I!==null){let pt=I.texture.format;W=pt===Tl||pt===El||pt===vl}if(W){let pt=I.texture.type,wt=pt===ti||pt===Wi||pt===dr||pt===Cs||pt===yl||pt===_l,Ft=$t.getClearColor(),Bt=$t.getClearAlpha(),ee=Ft.r,ie=Ft.g,Ot=Ft.b;wt?(g[0]=ee,g[1]=ie,g[2]=Ot,g[3]=Bt,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=ee,x[1]=ie,x[2]=Ot,x[3]=Bt,D.clearBufferiv(D.COLOR,0,x))}else Q|=D.COLOR_BUFFER_BIT}V&&(Q|=D.DEPTH_BUFFER_BIT),J&&(Q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),It.dispose(),ce.dispose(),Rt.dispose(),b.dispose(),q.dispose(),it.dispose(),we.dispose(),z.dispose(),Ut.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",lh),tt.removeEventListener("sessionend",hh),Pi.stop()};function at(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let A=Lt.autoReset,V=Dt.enabled,J=Dt.autoUpdate,Q=Dt.needsUpdate,W=Dt.type;vt(),Lt.autoReset=A,Dt.enabled=V,Dt.autoUpdate=J,Dt.needsUpdate=Q,Dt.type=W}function Tt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ne(A){let V=A.target;V.removeEventListener("dispose",ne),Ue(V)}function Ue(A){$e(A),Rt.remove(A)}function $e(A){let V=Rt.get(A).programs;V!==void 0&&(V.forEach(function(J){Ut.releaseProgram(J)}),A.isShaderMaterial&&Ut.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,J,Q,W,pt){V===null&&(V=ue);let wt=W.isMesh&&W.matrixWorld.determinant()<0,Ft=Ff(A,V,J,Q,W);lt.setMaterial(Q,wt);let Bt=J.index,ee=1;if(Q.wireframe===!0){if(Bt=ht.getWireframeAttribute(J),Bt===void 0)return;ee=2}let ie=J.drawRange,Ot=J.attributes.position,pe=ie.start*ee,be=(ie.start+ie.count)*ee;pt!==null&&(pe=Math.max(pe,pt.start*ee),be=Math.min(be,(pt.start+pt.count)*ee)),Bt!==null?(pe=Math.max(pe,0),be=Math.min(be,Bt.count)):Ot!=null&&(pe=Math.max(pe,0),be=Math.min(be,Ot.count));let Re=be-pe;if(Re<0||Re===1/0)return;we.setup(W,Q,Ft,J,Bt);let ln,ge=Ht;if(Bt!==null&&(ln=nt.get(Bt),ge=de,ge.setIndex(ln)),W.isMesh)Q.wireframe===!0?(lt.setLineWidth(Q.wireframeLinewidth*K()),ge.setMode(D.LINES)):ge.setMode(D.TRIANGLES);else if(W.isLine){let zt=Q.linewidth;zt===void 0&&(zt=1),lt.setLineWidth(zt*K()),W.isLineSegments?ge.setMode(D.LINES):W.isLineLoop?ge.setMode(D.LINE_LOOP):ge.setMode(D.LINE_STRIP)}else W.isPoints?ge.setMode(D.POINTS):W.isSprite&&ge.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ge.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))ge.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let zt=W._multiDrawStarts,Wn=W._multiDrawCounts,xe=W._multiDrawCount,Sn=Bt?nt.get(Bt).bytesPerElement:1,es=Rt.get(Q).currentProgram.getUniforms();for(let un=0;un<xe;un++)es.setValue(D,"_gl_DrawID",un),ge.render(zt[un]/Sn,Wn[un])}else if(W.isInstancedMesh)ge.renderInstances(pe,Re,W.count);else if(J.isInstancedBufferGeometry){let zt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Wn=Math.min(J.instanceCount,zt);ge.renderInstances(pe,Re,Wn)}else ge.render(pe,Re)};function ye(A,V,J){A.transparent===!0&&A.side===Qt&&A.forceSinglePass===!1?(A.side=Qe,A.needsUpdate=!0,Dr(A,V,J),A.side=Bn,A.needsUpdate=!0,Dr(A,V,J),A.side=Qt):Dr(A,V,J)}this.compile=function(A,V,J=null){J===null&&(J=A),p=ce.get(J),p.init(V),y.push(p),J.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),A!==J&&A.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();let Q=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let pt=W.material;if(pt)if(Array.isArray(pt))for(let wt=0;wt<pt.length;wt++){let Ft=pt[wt];ye(Ft,J,W),Q.add(Ft)}else ye(pt,J,W),Q.add(pt)}),y.pop(),p=null,Q},this.compileAsync=function(A,V,J=null){let Q=this.compile(A,V,J);return new Promise(W=>{function pt(){if(Q.forEach(function(wt){Rt.get(wt).currentProgram.isReady()&&Q.delete(wt)}),Q.size===0){W(A);return}setTimeout(pt,10)}ct.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let bn=null;function Vn(A){bn&&bn(A)}function lh(){Pi.stop()}function hh(){Pi.start()}let Pi=new Cd;Pi.setAnimationLoop(Vn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(A){bn=A,tt.setAnimationLoop(A),A===null?Pi.stop():Pi.start()},tt.addEventListener("sessionstart",lh),tt.addEventListener("sessionend",hh),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(V),V=tt.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,V,I),p=ce.get(A,y.length),p.init(V),y.push(p),Nt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),$.setFromProjectionMatrix(Nt),St=this.localClippingEnabled,ut=ft.init(this.clippingPlanes,St),m=It.get(A,v.length),m.init(),v.push(m),tt.enabled===!0&&tt.isPresenting===!0){let pt=_.xr.getDepthSensingMesh();pt!==null&&ha(pt,V,-1/0,_.sortObjects)}ha(A,V,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(j,et),k=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,k&&$t.addToRenderList(m,A),this.info.render.frame++,ut===!0&&ft.beginShadows();let J=p.state.shadowsArray;Dt.render(J,A,V),ut===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=m.opaque,W=m.transmissive;if(p.setupLights(),V.isArrayCamera){let pt=V.cameras;if(W.length>0)for(let wt=0,Ft=pt.length;wt<Ft;wt++){let Bt=pt[wt];dh(Q,W,A,Bt)}k&&$t.render(A);for(let wt=0,Ft=pt.length;wt<Ft;wt++){let Bt=pt[wt];uh(m,A,Bt,Bt.viewport)}}else W.length>0&&dh(Q,W,A,V),k&&$t.render(A),uh(m,A,V);I!==null&&(L.updateMultisampleRenderTarget(I),L.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(_,A,V),we.resetDefaultState(),T=-1,E=null,y.pop(),y.length>0?(p=y[y.length-1],ut===!0&&ft.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function ha(A,V,J,Q){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$.intersectsSprite(A)){Q&&Yt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Nt);let wt=it.update(A),Ft=A.material;Ft.visible&&m.push(A,wt,Ft,J,Yt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$.intersectsObject(A))){let wt=it.update(A),Ft=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Yt.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Yt.copy(wt.boundingSphere.center)),Yt.applyMatrix4(A.matrixWorld).applyMatrix4(Nt)),Array.isArray(Ft)){let Bt=wt.groups;for(let ee=0,ie=Bt.length;ee<ie;ee++){let Ot=Bt[ee],pe=Ft[Ot.materialIndex];pe&&pe.visible&&m.push(A,wt,pe,J,Yt.z,Ot)}}else Ft.visible&&m.push(A,wt,Ft,J,Yt.z,null)}}let pt=A.children;for(let wt=0,Ft=pt.length;wt<Ft;wt++)ha(pt[wt],V,J,Q)}function uh(A,V,J,Q){let W=A.opaque,pt=A.transmissive,wt=A.transparent;p.setupLightsView(J),ut===!0&&ft.setGlobalState(_.clippingPlanes,J),Q&&lt.viewport(P.copy(Q)),W.length>0&&Lr(W,V,J),pt.length>0&&Lr(pt,V,J),wt.length>0&&Lr(wt,V,J),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function dh(A,V,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new Dn(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?$i:ti,minFilter:Gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));let pt=p.state.transmissionRenderTarget[Q.id],wt=Q.viewport||P;pt.setSize(wt.z,wt.w);let Ft=_.getRenderTarget();_.setRenderTarget(pt),_.getClearColor(U),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),k&&$t.render(J);let Bt=_.toneMapping;_.toneMapping=Ti;let ee=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),ut===!0&&ft.setGlobalState(_.clippingPlanes,Q),Lr(A,J,Q),L.updateMultisampleRenderTarget(pt),L.updateRenderTargetMipmap(pt),ct.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Ot=0,pe=V.length;Ot<pe;Ot++){let be=V[Ot],Re=be.object,ln=be.geometry,ge=be.material,zt=be.group;if(ge.side===Qt&&Re.layers.test(Q.layers)){let Wn=ge.side;ge.side=Qe,ge.needsUpdate=!0,fh(Re,J,Q,ln,ge,zt),ge.side=Wn,ge.needsUpdate=!0,ie=!0}}ie===!0&&(L.updateMultisampleRenderTarget(pt),L.updateRenderTargetMipmap(pt))}_.setRenderTarget(Ft),_.setClearColor(U,X),ee!==void 0&&(Q.viewport=ee),_.toneMapping=Bt}function Lr(A,V,J){let Q=V.isScene===!0?V.overrideMaterial:null;for(let W=0,pt=A.length;W<pt;W++){let wt=A[W],Ft=wt.object,Bt=wt.geometry,ee=Q===null?wt.material:Q,ie=wt.group;Ft.layers.test(J.layers)&&fh(Ft,V,J,Bt,ee,ie)}}function fh(A,V,J,Q,W,pt){A.onBeforeRender(_,V,J,Q,W,pt),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(_,V,J,Q,A,pt),W.transparent===!0&&W.side===Qt&&W.forceSinglePass===!1?(W.side=Qe,W.needsUpdate=!0,_.renderBufferDirect(J,V,Q,W,A,pt),W.side=Bn,W.needsUpdate=!0,_.renderBufferDirect(J,V,Q,W,A,pt),W.side=Qt):_.renderBufferDirect(J,V,Q,W,A,pt),A.onAfterRender(_,V,J,Q,W,pt)}function Dr(A,V,J){V.isScene!==!0&&(V=ue);let Q=Rt.get(A),W=p.state.lights,pt=p.state.shadowsArray,wt=W.state.version,Ft=Ut.getParameters(A,W.state,pt,V,J),Bt=Ut.getProgramCacheKey(Ft),ee=Q.programs;Q.environment=A.isMeshStandardMaterial?V.environment:null,Q.fog=V.fog,Q.envMap=(A.isMeshStandardMaterial?q:b).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,ee===void 0&&(A.addEventListener("dispose",ne),ee=new Map,Q.programs=ee);let ie=ee.get(Bt);if(ie!==void 0){if(Q.currentProgram===ie&&Q.lightsStateVersion===wt)return mh(A,Ft),ie}else Ft.uniforms=Ut.getUniforms(A),A.onBeforeCompile(Ft,_),ie=Ut.acquireProgram(Ft,Bt),ee.set(Bt,ie),Q.uniforms=Ft.uniforms;let Ot=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ot.clippingPlanes=ft.uniform),mh(A,Ft),Q.needsLights=Of(A),Q.lightsStateVersion=wt,Q.needsLights&&(Ot.ambientLightColor.value=W.state.ambient,Ot.lightProbe.value=W.state.probe,Ot.directionalLights.value=W.state.directional,Ot.directionalLightShadows.value=W.state.directionalShadow,Ot.spotLights.value=W.state.spot,Ot.spotLightShadows.value=W.state.spotShadow,Ot.rectAreaLights.value=W.state.rectArea,Ot.ltc_1.value=W.state.rectAreaLTC1,Ot.ltc_2.value=W.state.rectAreaLTC2,Ot.pointLights.value=W.state.point,Ot.pointLightShadows.value=W.state.pointShadow,Ot.hemisphereLights.value=W.state.hemi,Ot.directionalShadowMap.value=W.state.directionalShadowMap,Ot.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ot.spotShadowMap.value=W.state.spotShadowMap,Ot.spotLightMatrix.value=W.state.spotLightMatrix,Ot.spotLightMap.value=W.state.spotLightMap,Ot.pointShadowMap.value=W.state.pointShadowMap,Ot.pointShadowMatrix.value=W.state.pointShadowMatrix),Q.currentProgram=ie,Q.uniformsList=null,ie}function ph(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=bs.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function mh(A,V){let J=Rt.get(A);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function Ff(A,V,J,Q,W){V.isScene!==!0&&(V=ue),L.resetTextureUnits();let pt=V.fog,wt=Q.isMeshStandardMaterial?V.environment:null,Ft=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:zs,Bt=(Q.isMeshStandardMaterial?q:b).get(Q.envMap||wt),ee=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ie=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ot=!!J.morphAttributes.position,pe=!!J.morphAttributes.normal,be=!!J.morphAttributes.color,Re=Ti;Q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Re=_.toneMapping);let ln=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ge=ln!==void 0?ln.length:0,zt=Rt.get(Q),Wn=p.state.lights;if(ut===!0&&(St===!0||A!==E)){let yn=A===E&&Q.id===T;ft.setState(Q,A,yn)}let xe=!1;Q.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Wn.state.version||zt.outputColorSpace!==Ft||W.isBatchedMesh&&zt.batching===!1||!W.isBatchedMesh&&zt.batching===!0||W.isBatchedMesh&&zt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&zt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&zt.instancing===!1||!W.isInstancedMesh&&zt.instancing===!0||W.isSkinnedMesh&&zt.skinning===!1||!W.isSkinnedMesh&&zt.skinning===!0||W.isInstancedMesh&&zt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&zt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&zt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&zt.instancingMorph===!1&&W.morphTexture!==null||zt.envMap!==Bt||Q.fog===!0&&zt.fog!==pt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==ft.numPlanes||zt.numIntersection!==ft.numIntersection)||zt.vertexAlphas!==ee||zt.vertexTangents!==ie||zt.morphTargets!==Ot||zt.morphNormals!==pe||zt.morphColors!==be||zt.toneMapping!==Re||zt.morphTargetsCount!==ge)&&(xe=!0):(xe=!0,zt.__version=Q.version);let Sn=zt.currentProgram;xe===!0&&(Sn=Dr(Q,V,W));let es=!1,un=!1,qs=!1,Ae=Sn.getUniforms(),Un=zt.uniforms;if(lt.useProgram(Sn.program)&&(es=!0,un=!0,qs=!0),Q.id!==T&&(T=Q.id,un=!0),es||E!==A){lt.buffers.depth.getReversed()?(dt.copy(A.projectionMatrix),Yp(dt),Zp(dt),Ae.setValue(D,"projectionMatrix",dt)):Ae.setValue(D,"projectionMatrix",A.projectionMatrix),Ae.setValue(D,"viewMatrix",A.matrixWorldInverse);let hi=Ae.map.cameraPosition;hi!==void 0&&hi.setValue(D,qt.setFromMatrixPosition(A.matrixWorld)),xt.logarithmicDepthBuffer&&Ae.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ae.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,un=!0,qs=!0)}if(W.isSkinnedMesh){Ae.setOptional(D,W,"bindMatrix"),Ae.setOptional(D,W,"bindMatrixInverse");let yn=W.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Ae.setValue(D,"boneTexture",yn.boneTexture,L))}W.isBatchedMesh&&(Ae.setOptional(D,W,"batchingTexture"),Ae.setValue(D,"batchingTexture",W._matricesTexture,L),Ae.setOptional(D,W,"batchingIdTexture"),Ae.setValue(D,"batchingIdTexture",W._indirectTexture,L),Ae.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null&&Ae.setValue(D,"batchingColorTexture",W._colorsTexture,L));let Ys=J.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0)&&jt.update(W,J,Sn),(un||zt.receiveShadow!==W.receiveShadow)&&(zt.receiveShadow=W.receiveShadow,Ae.setValue(D,"receiveShadow",W.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Un.envMap.value=Bt,Un.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&V.environment!==null&&(Un.envMapIntensity.value=V.environmentIntensity),un&&(Ae.setValue(D,"toneMappingExposure",_.toneMappingExposure),zt.needsLights&&Bf(Un,qs),pt&&Q.fog===!0&&Mt.refreshFogUniforms(Un,pt),Mt.refreshMaterialUniforms(Un,Q,G,Z,p.state.transmissionRenderTarget[A.id]),bs.upload(D,ph(zt),Un,L)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(bs.upload(D,ph(zt),Un,L),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ae.setValue(D,"center",W.center),Ae.setValue(D,"modelViewMatrix",W.modelViewMatrix),Ae.setValue(D,"normalMatrix",W.normalMatrix),Ae.setValue(D,"modelMatrix",W.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let yn=Q.uniformsGroups;for(let hi=0,ui=yn.length;hi<ui;hi++){let gh=yn[hi];z.update(gh,Sn),z.bind(gh,Sn)}}return Sn}function Bf(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Of(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,V,J){Rt.get(A.texture).__webglTexture=V,Rt.get(A.depthTexture).__webglTexture=J;let Q=Rt.get(A);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){let J=Rt.get(A);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,J=0){I=A,w=V,R=J;let Q=!0,W=null,pt=!1,wt=!1;if(A){let Bt=Rt.get(A);if(Bt.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(D.FRAMEBUFFER,null),Q=!1;else if(Bt.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Bt.__hasExternalTextures)L.rebindTextures(A,Rt.get(A.texture).__webglTexture,Rt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ot=A.depthTexture;if(Bt.__boundDepthTexture!==Ot){if(Ot!==null&&Rt.has(Ot)&&(A.width!==Ot.image.width||A.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}let ee=A.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(wt=!0);let ie=Rt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ie[V])?W=ie[V][J]:W=ie[V],pt=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?W=Rt.get(A).__webglMultisampledFramebuffer:Array.isArray(ie)?W=ie[J]:W=ie,P.copy(A.viewport),O.copy(A.scissor),F=A.scissorTest}else P.copy(ot).multiplyScalar(G).floor(),O.copy(yt).multiplyScalar(G).floor(),F=Et;if(lt.bindFramebuffer(D.FRAMEBUFFER,W)&&Q&&lt.drawBuffers(A,W),lt.viewport(P),lt.scissor(O),lt.setScissorTest(F),pt){let Bt=Rt.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+V,Bt.__webglTexture,J)}else if(wt){let Bt=Rt.get(A.texture),ee=V||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Bt.__webglTexture,J||0,ee)}T=-1},this.readRenderTargetPixels=function(A,V,J,Q,W,pt,wt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Ft=Ft[wt]),Ft){lt.bindFramebuffer(D.FRAMEBUFFER,Ft);try{let Bt=A.texture,ee=Bt.format,ie=Bt.type;if(!xt.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-Q&&J>=0&&J<=A.height-W&&D.readPixels(V,J,Q,W,re.convert(ee),re.convert(ie),pt)}finally{let Bt=I!==null?Rt.get(I).__webglFramebuffer:null;lt.bindFramebuffer(D.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(A,V,J,Q,W,pt,wt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Ft=Ft[wt]),Ft){let Bt=A.texture,ee=Bt.format,ie=Bt.type;if(!xt.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=A.width-Q&&J>=0&&J<=A.height-W){lt.bindFramebuffer(D.FRAMEBUFFER,Ft);let Ot=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ot),D.bufferData(D.PIXEL_PACK_BUFFER,pt.byteLength,D.STREAM_READ),D.readPixels(V,J,Q,W,re.convert(ee),re.convert(ie),0);let pe=I!==null?Rt.get(I).__webglFramebuffer:null;lt.bindFramebuffer(D.FRAMEBUFFER,pe);let be=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await qp(D,be,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ot),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pt),D.deleteBuffer(Ot),D.deleteSync(be),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,V=null,J=0){A.isTexture!==!0&&(rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1]);let Q=Math.pow(2,-J),W=Math.floor(A.image.width*Q),pt=Math.floor(A.image.height*Q),wt=V!==null?V.x:0,Ft=V!==null?V.y:0;L.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,J,0,0,wt,Ft,W,pt),lt.unbindTexture()},this.copyTextureToTexture=function(A,V,J=null,Q=null,W=0){A.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,A=arguments[1],V=arguments[2],W=arguments[3]||0,J=null);let pt,wt,Ft,Bt,ee,ie,Ot,pe,be,Re=A.isCompressedTexture?A.mipmaps[W]:A.image;J!==null?(pt=J.max.x-J.min.x,wt=J.max.y-J.min.y,Ft=J.isBox3?J.max.z-J.min.z:1,Bt=J.min.x,ee=J.min.y,ie=J.isBox3?J.min.z:0):(pt=Re.width,wt=Re.height,Ft=Re.depth||1,Bt=0,ee=0,ie=0),Q!==null?(Ot=Q.x,pe=Q.y,be=Q.z):(Ot=0,pe=0,be=0);let ln=re.convert(V.format),ge=re.convert(V.type),zt;V.isData3DTexture?(L.setTexture3D(V,0),zt=D.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(L.setTexture2DArray(V,0),zt=D.TEXTURE_2D_ARRAY):(L.setTexture2D(V,0),zt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);let Wn=D.getParameter(D.UNPACK_ROW_LENGTH),xe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Sn=D.getParameter(D.UNPACK_SKIP_PIXELS),es=D.getParameter(D.UNPACK_SKIP_ROWS),un=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Re.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Re.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Bt),D.pixelStorei(D.UNPACK_SKIP_ROWS,ee),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ie);let qs=A.isDataArrayTexture||A.isData3DTexture,Ae=V.isDataArrayTexture||V.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let Un=Rt.get(A),Ys=Rt.get(V),yn=Rt.get(Un.__renderTarget),hi=Rt.get(Ys.__renderTarget);lt.bindFramebuffer(D.READ_FRAMEBUFFER,yn.__webglFramebuffer),lt.bindFramebuffer(D.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let ui=0;ui<Ft;ui++)qs&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Rt.get(A).__webglTexture,W,ie+ui),A.isDepthTexture?(Ae&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Rt.get(V).__webglTexture,W,be+ui),D.blitFramebuffer(Bt,ee,pt,wt,Ot,pe,pt,wt,D.DEPTH_BUFFER_BIT,D.NEAREST)):Ae?D.copyTexSubImage3D(zt,W,Ot,pe,be+ui,Bt,ee,pt,wt):D.copyTexSubImage2D(zt,W,Ot,pe,be+ui,Bt,ee,pt,wt);lt.bindFramebuffer(D.READ_FRAMEBUFFER,null),lt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ae?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(zt,W,Ot,pe,be,pt,wt,Ft,ln,ge,Re.data):V.isCompressedArrayTexture?D.compressedTexSubImage3D(zt,W,Ot,pe,be,pt,wt,Ft,ln,Re.data):D.texSubImage3D(zt,W,Ot,pe,be,pt,wt,Ft,ln,ge,Re):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,W,Ot,pe,pt,wt,ln,ge,Re.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,W,Ot,pe,Re.width,Re.height,ln,Re.data):D.texSubImage2D(D.TEXTURE_2D,W,Ot,pe,pt,wt,ln,ge,Re);D.pixelStorei(D.UNPACK_ROW_LENGTH,Wn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Sn),D.pixelStorei(D.UNPACK_SKIP_ROWS,es),D.pixelStorei(D.UNPACK_SKIP_IMAGES,un),W===0&&V.generateMipmaps&&D.generateMipmap(zt),lt.unbindTexture()},this.copyTextureToTexture3D=function(A,V,J=null,Q=null,W=0){return A.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,A=arguments[2],V=arguments[3],W=arguments[4]||0),rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,V,J,Q,W)},this.initRenderTarget=function(A){Rt.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),lt.unbindTexture()},this.resetState=function(){w=0,R=0,I=null,lt.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}},yu=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},_u=class extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Po=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Dc,this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},rn=new C,gr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hn=class extends zn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qs=new C,xs=new C,ys=new C,_s=new rt,js=new rt,Hd=new Wt,eo=new C,tr=new C,no=new C,Mu=new rt,Oa=new rt,vu=new rt,mn=class extends Zt{constructor(t=new hn){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Po(e,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new gr(n,3,0,!1)),gs.setAttribute("uv",new gr(n,2,3,!1))}this.geometry=gs,this.material=t,this.center=new rt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xs.setFromMatrixScale(this.matrixWorld),Hd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xs.multiplyScalar(-ys.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;io(eo.set(-.5,-.5,0),ys,o,xs,s,r),io(tr.set(.5,-.5,0),ys,o,xs,s,r),io(no.set(.5,.5,0),ys,o,xs,s,r),Mu.set(0,0),Oa.set(1,0),vu.set(1,1);let a=t.ray.intersectTriangle(eo,tr,no,!1,Qs);if(a===null&&(io(tr.set(-.5,.5,0),ys,o,xs,s,r),Oa.set(0,1),a=t.ray.intersectTriangle(eo,no,tr,!1,Qs),a===null))return;let l=t.ray.origin.distanceTo(Qs);l<t.near||l>t.far||e.push({distance:l,point:Qs.clone(),uv:_i.getInterpolation(Qs,eo,tr,no,Mu,Oa,vu,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};Eu=new C,Tu=new le,wu=new le,ky=new C,bu=new Wt,so=new C,za=new Hn,Su=new Wt,ka=new Xi,Ru=class extends H{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mh,this.bindMatrix=new Wt,this.bindMatrixInverse=new Wt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,so),this.boundingBox.expandByPoint(so)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,so),this.boundingSphere.expandByPoint(so)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),za.copy(this.boundingSphere),za.applyMatrix4(s),t.ray.intersectsSphere(za)!==!1&&(Su.copy(s).invert(),ka.copy(t.ray).applyMatrix4(Su),!(this.boundingBox!==null&&ka.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ka)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new le,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Mh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;Tu.fromBufferAttribute(s.attributes.skinIndex,t),wu.fromBufferAttribute(s.attributes.skinWeight,t),Eu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let o=wu.getComponent(r);if(o!==0){let a=Tu.getComponent(r);bu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(ky.copy(Eu).applyMatrix4(bu),o)}}return e.applyMatrix4(this.bindMatrixInverse)}},Jc=class extends Zt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Lo=class extends qe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=pn,h=pn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Au=new Wt,Gy=new Wt,Cu=class i{constructor(t=[],e=[]){this.uuid=vn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Wt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Wt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:Gy;Au.multiplyMatrices(a,e[r]),Au.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Lo(e,t,t,Mn,Ln);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Jc),this.bones.push(o),this.boneInverses.push(new Wt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let o=e[s];t.bones.push(o.uuid);let a=n[s];t.boneInverses.push(a.toArray())}return t}},ei=class extends Ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ms=new Wt,Iu=new Wt,ro=[],Pu=new On,Vy=new Wt,er=new H,nr=new Hn,Vt=class extends H{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ei(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Vy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new On),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),Pu.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(Pu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),nr.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),t.ray.intersectsSphere(nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ms),Iu.multiplyMatrices(n,Ms),er.matrixWorld=Iu,er.raycast(t,ro);for(let o=0,a=ro.length;o<a;o++){let l=ro[o];l.instanceId=r,l.object=this,e.push(l)}ro.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ei(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Lo(new Float32Array(s*this.count),s,this.count,Ml,Ln));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},Kc=class extends zn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Do=new C,Ho=new C,Lu=new Wt,ir=new Xi,oo=new Hn,Ga=new C,Du=new C,Uo=class extends Zt{constructor(t=new me,e=new Kc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Do.fromBufferAttribute(e,s-1),Ho.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Do.distanceTo(Ho);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,t.ray.intersectsSphere(oo)===!1)return;Lu.copy(s).invert(),ir.copy(t.ray).applyMatrix4(Lu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),v=h.getX(x+1),y=ao(this,t,ir,l,p,v);y&&e.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=ao(this,t,ir,l,x,m);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=ao(this,t,ir,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=ao(this,t,ir,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Hu=new C,Uu=new C,Nu=class extends Uo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Hu.fromBufferAttribute(e,s),Uu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Hu.distanceTo(Uu);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Fu=class extends Uo{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},qi=class extends zn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bu=new Wt,Qc=new Xi,co=new Hn,lo=new C,Ds=class extends Zt{constructor(t=new me,e=new qi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),co.radius+=r,t.ray.intersectsSphere(co)===!1)return;Bu.copy(s).invert(),Qc.copy(t.ray).applyMatrix4(Bu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);lo.fromBufferAttribute(u,m),Ou(lo,m,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)lo.fromBufferAttribute(u,g),Ou(lo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};No=class extends qe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new rt:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,s=[],r=[],o=[],a=new C,l=new Wt;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ke(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ke(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},xr=class extends En{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},jc=class extends xr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};ho=new C,Va=new Cl,Wa=new Cl,Xa=new Cl,gn=class extends En{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ho.subVectors(s[0],s[1]).add(s[0]),c=ho);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ho.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ho),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Va.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Wa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Xa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Wa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Xa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Va.calc(l),Wa.calc(l),Xa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};Fo=class extends En{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(t,s.x,r.x,o.x,a.x),ur(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},tl=class extends En{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(t,s.x,r.x,o.x,a.x),ur(t,s.y,r.y,o.y,a.y),ur(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Bo=class extends En{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},el=class extends En{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oo=class extends En{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(hr(t,s.x,r.x,o.x),hr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hs=class extends En{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(hr(t,s.x,r.x,o.x),hr(t,s.y,r.y,o.y),hr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zo=class extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(zu(a,l.x,c.x,h.x,u.x),zu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new rt().fromArray(s))}return this}},ko=Object.freeze({__proto__:null,ArcCurve:jc,CatmullRomCurve3:gn,CubicBezierCurve:Fo,CubicBezierCurve3:tl,EllipseCurve:xr,LineCurve:Bo,LineCurve3:el,QuadraticBezierCurve:Oo,QuadraticBezierCurve3:Hs,SplineCurve:zo}),nl=class extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ko[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ko[s.type]().fromJSON(s))}return this}},ni=class extends nl{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Bo(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Oo(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Fo(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new zo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new xr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ii=class i extends me{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ke(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new C,d=new rt,f=new C,g=new C,x=new C,m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let v=0;v<=e;v++){let y=n+v*h*s,_=Math.sin(y),S=Math.cos(y);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*_,u.y=t[w].y,u.z=t[w].x*S,o.push(u.x,u.y,u.z),d.x=v/e,d.y=w/(t.length-1),a.push(d.x,d.y);let R=l[3*w+0]*_,I=l[3*w+1],T=l[3*w+0]*S;c.push(R,I,T)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){let _=y+v*t.length,S=_,w=_+t.length,R=_+t.length+1,I=_+1;r.push(S,w,I),r.push(R,I,w)}this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("uv",new Xt(a,2)),this.setAttribute("normal",new Xt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},si=class i extends ii{constructor(t=1,e=1,n=4,s=8){let r=new ni;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},Pe=class i extends me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new C,h=new rt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},gt=class i extends me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function v(){let _=new C,S=new C,w=0,R=(e-t)/n;for(let I=0;I<=r;I++){let T=[],E=I/r,P=E*(e-t)+t;for(let O=0;O<=s;O++){let F=O/s,U=F*l+a,X=Math.sin(U),N=Math.cos(U);S.x=P*X,S.y=-E*n+m,S.z=P*N,u.push(S.x,S.y,S.z),_.set(X,R,N).normalize(),d.push(_.x,_.y,_.z),f.push(F,1-E),T.push(g++)}x.push(T)}for(let I=0;I<s;I++)for(let T=0;T<r;T++){let E=x[T][I],P=x[T+1][I],O=x[T+1][I+1],F=x[T][I+1];(t>0||T!==0)&&(h.push(E,P,F),w+=3),(e>0||T!==r-1)&&(h.push(P,O,F),w+=3)}c.addGroup(p,w,0),p+=w}function y(_){let S=g,w=new rt,R=new C,I=0,T=_===!0?t:e,E=_===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),g++;let P=g;for(let O=0;O<=s;O++){let U=O/s*l+a,X=Math.cos(U),N=Math.sin(U);R.x=T*N,R.y=m*E,R.z=T*X,u.push(R.x,R.y,R.z),d.push(0,E,0),w.x=X*.5+.5,w.y=N*.5*E+.5,f.push(w.x,w.y),g++}for(let O=0;O<s;O++){let F=S+O,U=P+O;_===!0?h.push(U,U+1,F):h.push(U+1,U,F),I+=3}c.addGroup(p,I,_===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},cn=class i extends gt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Go=class i extends me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new C,_=new C,S=new C;for(let w=0;w<e.length;w+=3)f(e[w+0],y),f(e[w+1],_),f(e[w+2],S),l(y,_,S,v)}function l(v,y,_,S){let w=S+1,R=[];for(let I=0;I<=w;I++){R[I]=[];let T=v.clone().lerp(_,I/w),E=y.clone().lerp(_,I/w),P=w-I;for(let O=0;O<=P;O++)O===0&&I===w?R[I][O]=T:R[I][O]=T.clone().lerp(E,O/P)}for(let I=0;I<w;I++)for(let T=0;T<2*(w-I)-1;T++){let E=Math.floor(T/2);T%2===0?(d(R[I][E+1]),d(R[I+1][E]),d(R[I][E])):(d(R[I][E+1]),d(R[I+1][E+1]),d(R[I+1][E]))}}function c(v){let y=new C;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(v),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){let v=new C;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let _=m(v)/2/Math.PI+.5,S=p(v)/Math.PI+.5;o.push(_,1-S)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let y=o[v+0],_=o[v+2],S=o[v+4],w=Math.max(y,_,S),R=Math.min(y,_,S);w>.9&&R<.1&&(y<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),S<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,y){let _=v*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function g(){let v=new C,y=new C,_=new C,S=new C,w=new rt,R=new rt,I=new rt;for(let T=0,E=0;T<r.length;T+=9,E+=6){v.set(r[T+0],r[T+1],r[T+2]),y.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),w.set(o[E+0],o[E+1]),R.set(o[E+2],o[E+3]),I.set(o[E+4],o[E+5]),S.copy(v).add(y).add(_).divideScalar(3);let P=m(S);x(w,E+0,v,P),x(R,E+2,y,P),x(I,E+4,_,P)}}function x(v,y,_,S){S<0&&v.x===1&&(o[y]=v.x-1),_.x===0&&_.z===0&&(o[y]=S/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Vo=class i extends Go{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Si=class extends ni{constructor(t){super(t),this.uuid=vn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ni().fromJSON(s))}return this}},Ky={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Ud(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=n_(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return yr(r,o,e,a,l,f,0),o}};wi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Gu(t),Vu(n,t);let o=t.length;e.forEach(Gu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Vu(n,e[l]);let a=Ky.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Wo=class i extends me{constructor(t=new Si([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Xt(s,3)),this.setAttribute("uv",new Xt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:p_,y,_=!1,S,w,R,I;p&&(y=p.getSpacedPoints(h),_=!0,d=!1,S=p.computeFrenetFrames(h,!1),w=new C,R=new C,I=new C),d||(m=0,f=0,g=0,x=0);let T=a.extractPoints(c),E=T.shape,P=T.holes;if(!wi.isClockWise(E)){E=E.reverse();for(let k=0,K=P.length;k<K;k++){let D=P[k];wi.isClockWise(D)&&(P[k]=D.reverse())}}let F=wi.triangulateShape(E,P),U=E;for(let k=0,K=P.length;k<K;k++){let D=P[k];E=E.concat(D)}function X(k,K,D){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(K,D)}let N=E.length,Z=F.length;function G(k,K,D){let mt,ct,xt,lt=k.x-K.x,Lt=k.y-K.y,Rt=D.x-k.x,L=D.y-k.y,b=lt*lt+Lt*Lt,q=lt*L-Lt*Rt;if(Math.abs(q)>Number.EPSILON){let nt=Math.sqrt(b),ht=Math.sqrt(Rt*Rt+L*L),it=K.x-Lt/nt,Ut=K.y+lt/nt,Mt=D.x-L/ht,It=D.y+Rt/ht,ce=((Mt-it)*L-(It-Ut)*Rt)/(lt*L-Lt*Rt);mt=it+lt*ce-k.x,ct=Ut+Lt*ce-k.y;let ft=mt*mt+ct*ct;if(ft<=2)return new rt(mt,ct);xt=Math.sqrt(ft/2)}else{let nt=!1;lt>Number.EPSILON?Rt>Number.EPSILON&&(nt=!0):lt<-Number.EPSILON?Rt<-Number.EPSILON&&(nt=!0):Math.sign(Lt)===Math.sign(L)&&(nt=!0),nt?(mt=-Lt,ct=lt,xt=Math.sqrt(b)):(mt=lt,ct=Lt,xt=Math.sqrt(b/2))}return new rt(mt/xt,ct/xt)}let j=[];for(let k=0,K=U.length,D=K-1,mt=k+1;k<K;k++,D++,mt++)D===K&&(D=0),mt===K&&(mt=0),j[k]=G(U[k],U[D],U[mt]);let et=[],ot,yt=j.concat();for(let k=0,K=P.length;k<K;k++){let D=P[k];ot=[];for(let mt=0,ct=D.length,xt=ct-1,lt=mt+1;mt<ct;mt++,xt++,lt++)xt===ct&&(xt=0),lt===ct&&(lt=0),ot[mt]=G(D[mt],D[xt],D[lt]);et.push(ot),yt=yt.concat(ot)}for(let k=0;k<m;k++){let K=k/m,D=f*Math.cos(K*Math.PI/2),mt=g*Math.sin(K*Math.PI/2)+x;for(let ct=0,xt=U.length;ct<xt;ct++){let lt=X(U[ct],j[ct],mt);dt(lt.x,lt.y,-D)}for(let ct=0,xt=P.length;ct<xt;ct++){let lt=P[ct];ot=et[ct];for(let Lt=0,Rt=lt.length;Lt<Rt;Lt++){let L=X(lt[Lt],ot[Lt],mt);dt(L.x,L.y,-D)}}}let Et=g+x;for(let k=0;k<N;k++){let K=d?X(E[k],yt[k],Et):E[k];_?(R.copy(S.normals[0]).multiplyScalar(K.x),w.copy(S.binormals[0]).multiplyScalar(K.y),I.copy(y[0]).add(R).add(w),dt(I.x,I.y,I.z)):dt(K.x,K.y,0)}for(let k=1;k<=h;k++)for(let K=0;K<N;K++){let D=d?X(E[K],yt[K],Et):E[K];_?(R.copy(S.normals[k]).multiplyScalar(D.x),w.copy(S.binormals[k]).multiplyScalar(D.y),I.copy(y[k]).add(R).add(w),dt(I.x,I.y,I.z)):dt(D.x,D.y,u/h*k)}for(let k=m-1;k>=0;k--){let K=k/m,D=f*Math.cos(K*Math.PI/2),mt=g*Math.sin(K*Math.PI/2)+x;for(let ct=0,xt=U.length;ct<xt;ct++){let lt=X(U[ct],j[ct],mt);dt(lt.x,lt.y,u+D)}for(let ct=0,xt=P.length;ct<xt;ct++){let lt=P[ct];ot=et[ct];for(let Lt=0,Rt=lt.length;Lt<Rt;Lt++){let L=X(lt[Lt],ot[Lt],mt);_?dt(L.x,L.y+y[h-1].y,y[h-1].x+D):dt(L.x,L.y,u+D)}}}$(),ut();function $(){let k=s.length/3;if(d){let K=0,D=N*K;for(let mt=0;mt<Z;mt++){let ct=F[mt];Nt(ct[2]+D,ct[1]+D,ct[0]+D)}K=h+m*2,D=N*K;for(let mt=0;mt<Z;mt++){let ct=F[mt];Nt(ct[0]+D,ct[1]+D,ct[2]+D)}}else{for(let K=0;K<Z;K++){let D=F[K];Nt(D[2],D[1],D[0])}for(let K=0;K<Z;K++){let D=F[K];Nt(D[0]+N*h,D[1]+N*h,D[2]+N*h)}}n.addGroup(k,s.length/3-k,0)}function ut(){let k=s.length/3,K=0;St(U,K),K+=U.length;for(let D=0,mt=P.length;D<mt;D++){let ct=P[D];St(ct,K),K+=ct.length}n.addGroup(k,s.length/3-k,1)}function St(k,K){let D=k.length;for(;--D>=0;){let mt=D,ct=D-1;ct<0&&(ct=k.length-1);for(let xt=0,lt=h+m*2;xt<lt;xt++){let Lt=N*xt,Rt=N*(xt+1),L=K+mt+Lt,b=K+ct+Lt,q=K+ct+Rt,nt=K+mt+Rt;qt(L,b,q,nt)}}}function dt(k,K,D){l.push(k),l.push(K),l.push(D)}function Nt(k,K,D){Yt(k),Yt(K),Yt(D);let mt=s.length/3,ct=v.generateTopUV(n,s,mt-3,mt-2,mt-1);ue(ct[0]),ue(ct[1]),ue(ct[2])}function qt(k,K,D,mt){Yt(k),Yt(K),Yt(mt),Yt(K),Yt(D),Yt(mt);let ct=s.length/3,xt=v.generateSideWallUV(n,s,ct-6,ct-3,ct-2,ct-1);ue(xt[0]),ue(xt[1]),ue(xt[3]),ue(xt[1]),ue(xt[2]),ue(xt[3])}function Yt(k){s.push(l[k*3+0]),s.push(l[k*3+1]),s.push(l[k*3+2])}function ue(k){r.push(k.x),r.push(k.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return m_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ko[s.type]().fromJSON(s)),new i(n,t.options)}},p_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new rt(r,o),new rt(a,l),new rt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new rt(o,1-l),new rt(c,1-u),new rt(d,1-g),new rt(x,1-p)]:[new rt(a,1-l),new rt(h,1-u),new rt(f,1-g),new rt(m,1-p)]}};ri=class i extends Go{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Wu=class i extends me{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new C,g=new rt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let v=p+m,y=v,_=v+n+1,S=v+n+2,w=v+1;a.push(y,_,w),a.push(_,S,w)}}this.setIndex(a),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Xo=class i extends me{constructor(t=new Si([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Xt(s,3)),this.setAttribute("normal",new Xt(r,3)),this.setAttribute("uv",new Xt(o,2));function c(h){let u=s.length/3,d=h.extractPoints(e),f=d.shape,g=d.holes;wi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let v=g[m];wi.isClockWise(v)===!0&&(g[m]=v.reverse())}let x=wi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){let v=f[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=x.length;m<p;m++){let v=x[m],y=v[0]+u,_=v[1]+u,S=v[2]+u;n.push(y,_,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return g_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};kt=class i extends me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,d=new C,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let v=[],y=p/n,_=0;p===0&&o===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){let w=S/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+_,1-y),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let y=h[p][v+1],_=h[p][v],S=h[p+1][v],w=h[p+1][v+1];(p!==0||o>0)&&f.push(y,_,w),(p!==n-1||l<Math.PI)&&f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Fe=class i extends me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(x,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},xn=class i extends me{constructor(t=new Hs(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new rt,h=new C,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function x(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),v(),p()}function m(y){h=t.getPointAt(y/e,h);let _=o.normals[y],S=o.binormals[y];for(let w=0;w<=s;w++){let R=w/s*Math.PI*2,I=Math.sin(R),T=-Math.cos(R);l.x=T*_.x+I*S.x,l.y=T*_.y+I*S.y,l.z=T*_.z+I*S.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let _=1;_<=s;_++){let S=(s+1)*(y-1)+(_-1),w=(s+1)*y+(_-1),R=(s+1)*y+_,I=(s+1)*(y-1)+_;g.push(S,w,I),g.push(w,R,I)}}function v(){for(let y=0;y<=e;y++)for(let _=0;_<=s;_++)c.x=y/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ko[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Xu=class extends an{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},Y=class extends zn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wd,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},qu=class extends Y{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new At(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new At(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new At(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};Us=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rl=class extends Us{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vh,endingEnd:vh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Eh:r=t,a=2*e-n;break;case Th:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Eh:o=t,l=2*n-e;break;case Th:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+v*o[c+S]+y*o[l+S]+_*o[u+S];return r}},ol=class extends Us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},al=class extends Us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=po(e,this.TimeBufferType),this.values=po(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:po(t.times,Array),values:po(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new rl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Mo:e=this.InterpolantFactoryMethodDiscrete;break;case Lc:e=this.InterpolantFactoryMethodLinear;break;case da:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mo;case this.InterpolantFactoryMethodLinear:return Lc;case this.InterpolantFactoryMethodSmooth:return da}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&x_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===da,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=Lc;Ri=class extends Tn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Mo;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;qo=class extends Tn{};qo.prototype.ValueTypeName="color";Ns=class extends Tn{};Ns.prototype.ValueTypeName="number";cl=class extends Us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)je.slerpFlat(r,0,o,c-a,o,c,l);return r}},Fs=class extends Tn{InterpolantFactoryMethodLinear(t){return new cl(this.times,this.values,this.getValueSize(),t)}};Fs.prototype.ValueTypeName="quaternion";Fs.prototype.InterpolantFactoryMethodSmooth=void 0;Ai=class extends Tn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Mo;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;Bs=class extends Tn{};Bs.prototype.ValueTypeName="vector";Zu=class{constructor(t="",e=-1,n=[],s=yp){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=vn(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(M_(n[o]).scale(s));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Tn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){let r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=y_(l);l=Yu(l,1,h),c=Yu(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ns(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){let c=t[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,x){if(f.length!==0){let m=[],p=[];Bd(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode,l=t.length||-1,c=t.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){let y=d[g];m.push(y.time),p.push(y.morphTarget===x?1:0)}s.push(new Ns(".morphTargetInfluence["+x+"]",m,p))}l=f.length*o}else{let f=".bones["+e[u].name+"]";n(Bs,f+".position",d,"pos",s),n(Fs,f+".quaternion",d,"rot",s),n(Bs,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let t=this.tracks,e=0;for(let n=0,s=t.length;n!==s;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};Mi={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ll=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},v_=new ll,Zi=class{constructor(t){this.manager=t!==void 0?t:v_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Zi.DEFAULT_MATERIAL_NAME="__DEFAULT";Jn={},hl=class extends Error{constructor(t,e){super(t),this.response=e}},$u=class extends Zi{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Mi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Jn[t]!==void 0){Jn[t].push({onLoad:e,onProgress:n,onError:s});return}Jn[t]=[],Jn[t].push({onLoad:e,onProgress:n,onError:s});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Jn[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){v();function v(){u.read().then(({done:y,value:_})=>{if(y)p.close();else{x+=_.byteLength;let S=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let w=0,R=h.length;w<R;w++){let I=h[w];I.onProgress&&I.onProgress(S)}p.enqueue(_),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new hl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Mi.add(t,c);let h=Jn[t];delete Jn[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Jn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Jn[t];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}},ul=class extends Zi{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Mi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=fr("img");function l(){h(),Mi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}},Ju=class extends Zi{constructor(t){super(t)}load(t,e,n,s){let r=new qe,o=new ul(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Os=class extends Zt{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ku=class extends Os{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},qa=new Wt,Qu=new C,ju=new C,vr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Qu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qu),ju.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ju),e.updateMatrixWorld(),qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},dl=class extends vr{constructor(){super(new Ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Ps*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},td=class extends Os{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new dl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ed=new Wt,sr=new C,Ya=new C,fl=class extends vr{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),sr.setFromMatrixPosition(t.matrixWorld),n.position.copy(sr),Ya.copy(n.position),Ya.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ya),n.updateMatrixWorld(),s.makeTranslation(-sr.x,-sr.y,-sr.z),ed.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed)}},Ci=class extends Os{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new fl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},pl=class extends vr{constructor(){super(new Ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nd=class extends Os{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new pl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},id=class{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},sd=class extends Zi{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Mi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Mi.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),Mi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Mi.add(t,l),r.manager.itemStart(t)}},rd=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=od(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=od();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};Il="\\[\\]\\.:\\/",E_=new RegExp("["+Il+"]","g"),Pl="[^"+Il+"]",T_="[^"+Il.replace("\\.","")+"]",w_=/((?:WC+[\/:])*)/.source.replace("WC",Pl),b_=/(WCOD+)?/.source.replace("WCOD",T_),S_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pl),R_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pl),A_=new RegExp("^"+w_+b_+S_+R_+"$"),C_=["material","materials","bones","map"],ml=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(E_,"")}static parseTrackName(t){let e=A_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);C_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=ml;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];VM=new Float32Array(1),ad=new Wt,cd=class{constructor(t,e,n=0,s=1/0){this.ray=new Xi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ad.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ad),this}intersectObject(t,e=!0,n=[]){return gl(t,this,n,e),n.sort(ld),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)gl(t[s],this,n,e);return n.sort(ld),n}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170")});function en(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new me,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Od(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=Od(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Od(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ne(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function XM(i,t){if(t===Ed)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===wl||t===Td){let e=i.getIndex();if(e===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=e.count-2,s=[];if(t===wl)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}var Er=sn(()=>{wn()});function YM(i){Ul=i}function ZM(i){Gd=i}function Gs(i){let t=(window.TEX||{})[i];return t||(I_?"assets/"+i+(Gd&&P_[i]?"@s":"")+".webp"+(window.ASSET_V?"?v="+window.ASSET_V:""):null)}function Hl(){if(!(Ki>0||Qi>0||Object.keys(Ji).length))for(;wr.length;)wr.shift()(!0)}function Vd(i,t){let e=new Image;e.decoding="async",Ki++,e.onload=()=>{i.image=e,i.needsUpdate=!0;for(let n of i.userData.clones||[])n.needsUpdate=!0;Dl.loaded++,Ki--,!jo[i.userData.name]&&--Qi===0&&setTimeout(zd,600),Hl(),kd()},e.onerror=()=>{Ki--,!jo[i.userData.name]&&--Qi===0&&setTimeout(zd,600),Hl(),kd()},e.src=t}function Wd(i){for(let t in Ji)if(!i||jo[t]===i){let e=Ji[t];delete Ji[t];let n=Gs(t);e.forEach(s=>Vd(s,n))}Hl()}function zd(){Ll||(Ll=!0,(window.requestIdleCallback||setTimeout)(()=>Wd(null)))}function $M(){Ll=!0,Wd(null)}function JM(i=12e3){return new Promise(t=>{if(Ki<=0&&Qi<=0&&!Object.keys(Ji).length)return t(!0);let e=setTimeout(()=>{let s=wr.indexOf(n);s>=0&&wr.splice(s,1),t(!1)},i);function n(s){clearTimeout(e),t(s)}wr.push(n)})}function kd(){if(!(Ki>0||Qi>0))for(;br.length;)br.shift()(!0)}function KM(i=4e3){return new Promise(t=>{if(Ki<=0&&Qi<=0)return t(!0);let e=setTimeout(()=>{let s=br.indexOf(n);s>=0&&br.splice(s,1),t(!1)},i);function n(s){clearTimeout(e),t(s)}br.push(n)})}function QM(){let i=[];for(let t in Tr){let e=Tr[t];e&&e.isTexture&&i.push(e)}for(let t in ta){let e=ta[t];e&&e.isTexture&&i.push(e);for(let n of e.userData.clones||[])n&&n.isTexture&&i.push(n)}return i}function Kt(i,t=1,e=1,n=!0){let s=i+"|"+t+"|"+e;if(Tr[s])return Tr[s];let r=Gs(i);if(!r)return null;let o,a=ta[i];return a?(o=new qe,o.source=a.source,a.userData.clones.push(o),a.image&&(o.needsUpdate=!0)):(o=new qe,o.userData={name:i,clones:[]},ta[i]=o,jo[i]&&!r.startsWith("data:")?(Dl.lazy++,(Ji[i]=Ji[i]||[]).push(o)):(Dl.core++,Qi++,Vd(o,r))),o.wrapS=o.wrapT=Vi,o.repeat.set(t,e),o.anisotropy=Ul,n&&(o.colorSpace=Ye),Tr[s]=o}function Me(i,t,e,n={}){let s=new Y(Object.assign({map:Kt(i,t,e),normalMap:Kt(i+"-n",t,e,!1),roughnessMap:Kt(i+"-r",t,e,!1),roughness:1,metalness:0},n));return n.normalScale&&(s.normalScale=new rt(n.normalScale,n.normalScale)),s}function He(i,t,e,n=!0){let s=document.createElement("canvas");s.width=i,s.height=t;let r=s.getContext("2d");e(r,i,t);let o=new No(s);return Qo&&(o.userData.text=Qo,Qo=null),n&&(o.colorSpace=Ye),o.anisotropy=Ul,o}function Vs(i="rgba(255,220,150,1)",t="rgba(255,140,40,0)"){return He(128,128,(e,n)=>{let s=e.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,i),s.addColorStop(.25,i.replace(/[\d.]+\)$/,"0.55)")),s.addColorStop(1,t),e.fillStyle=s,e.fillRect(0,0,n,n)})}function Xd(){return He(128,128,i=>{for(let e=0;e<26;e++){let n=64+(Math.random()-.5)*50,s=64+(Math.random()-.5)*50,r=14+Math.random()*26,o=i.createRadialGradient(n,s,0,n,s,r);o.addColorStop(0,"rgba(255,255,255,0.10)"),o.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=o,i.fillRect(0,0,128,128)}i.globalCompositeOperation="destination-in";let t=i.createRadialGradient(64,64,10,64,64,62);t.addColorStop(0,"rgba(0,0,0,1)"),t.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=t,i.fillRect(0,0,128,128)})}function ea(){return He(64,128,i=>{let t=i.createRadialGradient(32,92,2,32,80,40);t.addColorStop(0,"rgba(255,255,240,1)"),t.addColorStop(.25,"rgba(255,214,120,0.95)"),t.addColorStop(.6,"rgba(255,130,30,0.5)"),t.addColorStop(1,"rgba(255,80,0,0)"),i.fillStyle=t,i.beginPath(),i.moveTo(32,6),i.bezierCurveTo(52,50,54,92,32,118),i.bezierCurveTo(10,92,12,50,32,6),i.fill()})}function Oe(i,t={}){Qo=[].concat(i).join(" / ");let e=Math.max(2,Math.min(2,typeof devicePixelRatio=="number"?devicePixelRatio:2)),n=t.w||1024,s=t.h||256,r=Math.round(n*e),o=Math.round(s*e),a=Object.assign({},t,{size:(t.size||s*.42)*e,pad:t.pad!=null?t.pad*e:t.pad});return He(r,o,l=>{if(t=a,t.bg&&t.mirror4){let v=t.bg,y=r/2,_=o/2;[[1,1],[-1,1],[1,-1],[-1,-1]].forEach(([S,w])=>{l.save(),l.translate(y,_),l.scale(S,w),l.drawImage(v,-y,-_,y,_),l.restore()})}else if(t.bg){let v=t.bg;l.drawImage(v,0,0,r,o)}else t.fill&&(l.fillStyle=t.fill,l.fillRect(0,0,r,o));l.textAlign="center",l.textBaseline="middle";let c='"Cormorant Garamond", "Times New Roman", serif',h=t.weight||700,u=t.vertical||Array.isArray(i)?i:[i],d=t.size||o*.42;l.font=`${h} ${d}px ${c}`;let f=t.area||null,g=f?r*Math.max(f[0],1-f[2]):t.pad!=null?t.pad:r*(t.bg?.15:.06),x=f?o*Math.max(f[1],1-f[3]):o*.06,m=f?o*(f[1]+f[3])/2:o/2;if(t.vertical){let v=o/(u.length+1),y=Math.max(1,...u.map(_=>l.measureText(_).width));d=Math.min(d,d*(r-g*2)/(y*1.06),v*.98)}else{let v=Math.max(1,...u.map(_=>l.measureText(String(_)).width)),y=t.stroke?d*.09:0;d=Math.min(d,d*(r-g*2)/(v+y+d*.1),(o-x*2)/(u.length*1.1))}d=Math.max(8,Math.floor(d)),l.font=`${h} ${d}px ${c}`;let p=l.createLinearGradient(0,o*.2,0,o*.8);if(p.addColorStop(0,"#fff3c4"),p.addColorStop(.5,t.color||"#e8b84a"),p.addColorStop(1,"#a8741c"),l.shadowColor="rgba(0,0,0,0.6)",l.shadowBlur=d*.08,l.shadowOffsetY=d*.04,l.fillStyle=p,t.stroke&&(l.lineJoin="round",l.lineWidth=d*.09,l.strokeStyle=t.stroke),t.vertical){let v=i,y=o/(v.length+1);v.forEach((_,S)=>{t.stroke&&l.strokeText(_,r/2,y*(S+1)),l.fillText(_,r/2,y*(S+1))})}else{let v=Array.isArray(i)?i:[i];v.forEach((y,_)=>{let S=m+(_-(v.length-1)/2)*d*1.1+d*.04;t.stroke&&l.strokeText(y,r/2,S),l.fillText(y,r/2,S)})}})}var Tr,Ul,I_,Gd,P_,jo,Ji,Qi,Ll,Ki,Dl,wr,ta,br,Qo,ai=sn(()=>{wn();Tr={},Ul=8;I_=/^https?:$/.test(location.protocol),Gd=!1;P_={"tex-stone":1,"tex-roof":1,"tex-lacquer":1,"tex-carved":1,"tex-floor":1,mural:1};jo={mural:"chanhdien","tex-carved":"chanhdien","tex-carved-n":"chanhdien","tex-carved-r":"chanhdien","tex-pebble":"vuonthien","tex-pebble-n":"vuonthien","tex-pebble-r":"vuonthien",forest:"chanhdien"},Ji={},Qi=0,Ll=!1,Ki=0,Dl={core:0,lazy:0,loaded:0},wr=[];ta={};br=[];Qo=null});var L_,D_,qd=sn(()=>{L_=[["\u0110\u1EA1i c\xE1t","M\xE2y tan tr\u0103ng hi\u1EC7n gi\u1EEFa tr\u1EDDi<br>L\xF2ng an c\u1EA3nh c\u0169ng r\u1EA1ng ng\u1EDDi b\xECnh y\xEAn","Gi\u1EEF t\xE2m hi\u1EC1n h\xF2a, vi\u1EC7c l\u1EDBn s\u1EBD hanh th\xF4ng."],["Th\u01B0\u1EE3ng c\xE1t","Gieo h\u1EA1t l\xE0nh gi\u1EEFa m\xF9a xu\xE2n<br>Tr\u1ED5 hoa th\u01A1m ng\xE1t mu\xF4n ph\u1EA7n an vui","Vi\u1EC7c thi\u1EC7n nh\u1ECF h\xF4m nay s\u1EBD th\xE0nh qu\u1EA3 ng\u1ECDt mai sau."],["\u0110\u1EA1i c\xE1t","Thuy\u1EC1n xu\xF4i gi\xF3 thu\u1EADn s\xF4ng d\xE0i<br>B\u1EBFn b\u1EDD \u0111ang \u0111\u1EE3i ng\xE0y mai r\u1EA1ng h\u1ED3ng","Ki\xEAn nh\u1EABn th\xEAm ch\xFAt n\u1EEFa, \u0111i\u1EC1u mong c\u1EA7u \u0111ang \u0111\u1EBFn g\u1EA7n."],["Th\u01B0\u1EE3ng c\xE1t","Sen v\u01B0\u01A1n kh\u1ECFi b\xF9n m\xE0 th\u01A1m<br>Gian nan r\xE8n ch\xED, t\xE2m c\xF2n s\xE1ng trong","Kh\xF3 kh\u0103n hi\u1EC7n t\u1EA1i l\xE0 b\xE0i h\u1ECDc qu\xFD gi\xE1."],["Trung c\xE1t","Ch\u1EADm m\xE0 ch\u1EAFc, b\u01B0\u1EDBc m\xE0 v\u1EEFng<br>\u0110\u01B0\u1EDDng xa c\u0169ng t\u1EDBi, ch\u1EB3ng ng\u1EEBng ch\xE2n \u0111i","\u0110\u1EEBng v\u1ED9i v\xE0ng, c\u1EE9 \u0111\u1EC1u \u0111\u1EB7n ti\u1EBFn b\u01B0\u1EDBc."],["\u0110\u1EA1i c\xE1t","Nh\xE0 vui ti\u1EBFng n\xF3i ti\u1EBFng c\u01B0\u1EDDi<br>Thu\u1EADn h\xF2a tr\xEAn d\u01B0\u1EDBi, \u0111\u1EA5t tr\u1EDDi ch\u1EDF che","Gia \u0111\u1EA1o b\xECnh an. H\xE3y d\xE0nh th\u1EDDi gian cho ng\u01B0\u1EDDi th\xE2n."],["Th\u01B0\u1EE3ng c\xE1t","M\u01B0a qua c\u1EA7u v\u1ED3ng hi\u1EC7n ra<br>Sau c\u01A1n th\u1EED th\xE1ch, n\u1EDF hoa an l\xE0nh","\u0110i\u1EC1u \u0111ang lo l\u1EAFng s\u1EBD s\u1EDBm qua \u0111i."],["Th\u01B0\u1EE3ng c\xE1t","Bi\u1EBFt \u0111\u1EE7 l\xE0 \u0111\u1EE7 th\u1EA3nh th\u01A1i<br>L\xF2ng kh\xF4ng tham v\u1ECDng, cu\u1ED9c \u0111\u1EDDi nh\u1EB9 t\xEAnh","Tr\xE2n tr\u1ECDng nh\u1EEFng g\xEC \u0111ang c\xF3, ni\u1EC1m vui s\u1EBD t\u1EF1 \u0111\u1EBFn."],["\u0110\u1EA1i c\xE1t","Qu\xFD nh\xE2n xu\u1EA5t hi\u1EC7n b\xEAn \u0111\u01B0\u1EDDng<br>Gi\xFAp ng\u01B0\u1EDDi ng\u01B0\u1EDDi gi\xFAp, y\xEAu th\u01B0\u01A1ng \u0111ong \u0111\u1EA7y","M\u1EDF l\xF2ng k\u1EBFt n\u1ED1i, b\u1EA1n s\u1EBD g\u1EB7p ng\u01B0\u1EDDi h\u1ED7 tr\u1EE3."],["Trung c\xE1t","N\u01B0\u1EDBc trong nh\u1EDD l\u1EAFng ph\xF9 sa<br>T\xE2m y\xEAn \xFD s\xE1ng m\u1EDBi ra l\u1ED1i v\u1EC1","Tr\u01B0\u1EDBc quy\u1EBFt \u0111\u1ECBnh l\u1EDBn, h\xE3y t\u0129nh l\u1EB7ng suy x\xE9t."],["Th\u01B0\u1EE3ng c\xE1t","C\xE2y ngay ch\u1EB3ng s\u1EE3 ch\u1EBFt \u0111\u1EE9ng<br>Gi\u1EEF l\xF2ng ch\xE2n th\u1EADt, v\u1EEFng v\xE0ng tr\u01B0\u1EDBc sau","S\u1ED1ng ngay th\u1EB3ng, m\u1ECDi vi\u1EC7c t\u1EF1 s\xE1ng t\u1ECF."],["\u0110\u1EA1i c\xE1t","Xu\xE2n v\u1EC1 c\xE0nh mai tr\u1ED5 b\xF4ng<br>Duy\xEAn l\xE0nh \u0111\u1EBFn ng\xF5, \u1EA5m n\u1ED3ng t\xECnh th\xE2n","T\xECnh c\u1EA3m thu\u1EADn l\u1EE3i, h\xE3y lu\xF4n ch\xE2n th\xE0nh."],["Th\u01B0\u1EE3ng c\xE1t","H\u1ECDc th\xEAm m\u1ED9t ch\u1EEF h\xF4m nay<br>Ng\xE0y mai tr\xED s\xE1ng nh\u01B0 ng\xE0y tr\u0103ng r\u1EB1m","H\u1ECDc h\xE0nh, thi c\u1EED ti\u1EBFn b\u1ED9 n\u1EBFu chuy\xEAn c\u1EA7n."],["Trung c\xE1t","M\u1ED9t l\u1EDDi \xE1i ng\u1EEF d\u1ECBu d\xE0ng<br>H\xF3a tan gi\u1EADn d\u1ED7i, mu\xF4n ng\xE0n b\u1EA5t an","N\xF3i l\u1EDDi h\xF2a nh\xE3, m\xE2u thu\u1EABn s\u1EBD tan."],["\u0110\u1EA1i c\xE1t","Ru\u1ED9ng \u0111\u1ED3ng l\xFAa ch\xEDn v\xE0ng \u01B0\u01A1m<br>C\xF4ng lao vun x\u1EDBi, \u0111\u1EA7y v\u01B0\u1EDDn \u1EA5m no","C\xF4ng vi\u1EC7c l\xE0m \u0103n c\xF3 k\u1EBFt qu\u1EA3 t\u1ED1t \u0111\u1EB9p."],["Th\u01B0\u1EE3ng c\xE1t","H\u01A1i th\u1EDF nh\u1EB9, b\u01B0\u1EDBc ch\xE2n an<br>B\xECnh minh trong d\u1EA1, mu\xF4n v\xE0n th\u1EA3nh th\u01A1i","Ch\u0103m s\xF3c s\u1EE9c kh\u1ECFe: ng\u1EE7 \u0111\u1EE7, th\u1EDF s\xE2u, \u0111i b\u1ED9 nh\u1EB9 nh\xE0ng."],["Th\u01B0\u1EE3ng c\xE1t","Bu\xF4ng tay chi\u1EBFc l\xE1 v\xE0ng r\u01A1i<br>C\xE2y xanh l\u1ED9c m\u1EDBi \u0111\xF3n tr\u1EDDi sang xu\xE2n","Bu\xF4ng b\u1ECF chuy\u1EC7n c\u0169 \u0111\u1EC3 \u0111\xF3n \u0111i\u1EC1u m\u1EDBi."],["Trung c\xE1t","\u0110\xE8n nh\u1ECF th\u1EAFp gi\u1EEFa \u0111\xEAm s\xE2u<br>Soi \u0111\u01B0\u1EDDng m\u1ED9t b\u01B0\u1EDBc, b\u01B0\u1EDBc sau s\u1EBD t\u01B0\u1EDDng","Ch\u01B0a th\u1EA5y h\u1EBFt con \u0111\u01B0\u1EDDng c\u0169ng kh\xF4ng sao, c\u1EE9 \u0111i t\u1EEBng b\u01B0\u1EDBc."],["\u0110\u1EA1i c\xE1t","Tr\u0103m s\xF4ng \u0111\u1ED5 v\u1EC1 bi\u1EC3n kh\u01A1i<br>R\u1ED9ng l\xF2ng bao dung, \u0111\u1EA5t tr\u1EDDi m\xEAnh m\xF4ng","Tha th\u1EE9 cho ng\u01B0\u1EDDi c\u0169ng l\xE0 gi\u1EA3i tho\xE1t cho m\xECnh."],["Th\u01B0\u1EE3ng c\xE1t","Chim v\u1EC1 t\u1ED5 l\xFAc chi\u1EC1u bu\xF4ng<br>Ng\u01B0\u1EDDi \u0111i xa s\u1EBD b\xECnh an tr\u1EDF v\u1EC1","Tin vui t\u1EEB ph\u01B0\u01A1ng xa, chuy\u1EBFn \u0111i thu\u1EADn l\u1EE3i."],["Th\u01B0\u1EE3ng c\xE1t","Chu\xF4ng ch\xF9a ng\xE2n gi\u1EEFa s\u1EDBm mai<br>T\u1EC9nh ra phi\u1EC1n mu\u1ED9n, nh\u1EB9 ho\xE0i t\xE2m t\u01B0","M\u1ED7i s\xE1ng d\xE0nh v\xE0i ph\xFAt t\u0129nh l\u1EB7ng cho m\xECnh."],["Trung c\xE1t","C\xF3 c\xF4ng m\xE0i s\u1EAFt n\xEAn kim<br>B\u1EC1n l\xF2ng ch\u1EB3ng n\u1EA3n, \u1EAFt t\xECm th\u1EA5y c\xF4ng","M\u1EE5c ti\xEAu c\u1EA7n th\u1EDDi gian, \u0111\u1EEBng b\u1ECF cu\u1ED9c."],["\u0110\u1EA1i c\xE1t","Hoa th\u01A1m b\u01B0\u1EDBm l\u01B0\u1EE3n quanh v\u01B0\u1EDDn<br>\u0110\u1EE9c d\xE0y ph\xFAc l\u1EDBn, y\xEAu th\u01B0\u01A1ng t\xECm v\u1EC1","L\xE0m vi\u1EC7c thi\u1EC7n, ph\xFAc l\xE0nh theo \u0111\u1EBFn."],["Th\u01B0\u1EE3ng c\xE1t","Gi\xF3 hiu hiu th\u1ED5i \u0111\u1ED3ng xanh<br>Vi\u1EC7c tr\xF2n \xFD \u0111\u1EB9p, m\u1ECDi th\xE0nh nh\u01B0 m\u01A1","K\u1EBF ho\u1EA1ch c\u1EE7a b\u1EA1n \u0111ang \u0111i \u0111\xFAng h\u01B0\u1EDBng."],["Th\u01B0\u1EE3ng c\xE1t","R\xF3t tr\xE0 m\u1EDDi b\u1EA1n hi\u1EC1n l\xE0nh<br>M\u1ED9t t\xECnh tri k\u1EF7, ng\u1ECDt thanh tr\u1ECDn \u0111\u1EDDi","Tr\xE2n tr\u1ECDng nh\u1EEFng ng\u01B0\u1EDDi b\u1EA1n ch\xE2n th\xE0nh."],["Trung c\xE1t","Tr\u0103ng khuy\u1EBFt r\u1ED3i l\u1EA1i tr\u0103ng tr\xF2n<br>V\u01A1i \u0111\u1EA7y l\xE0 l\u1EBD, l\xF2ng c\xF2n v\u1EEFng tin","Th\u0103ng tr\u1EA7m l\xE0 l\u1EBD th\u01B0\u1EDDng, h\xE3y gi\u1EEF v\u1EEFng ni\u1EC1m tin."],["\u0110\u1EA1i c\xE1t","M\u1EB7t tr\u1EDDi r\u1EA1ng r\u1EE1 ph\u01B0\u01A1ng \u0111\xF4ng<br>Kh\u1EDFi \u0111\u1EA7u thu\u1EADn l\u1EE3i, th\xE0nh c\xF4ng trong t\u1EA7m","Th\u1EDDi \u0111i\u1EC3m t\u1ED1t \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u vi\u1EC7c m\u1EDBi."],["Th\u01B0\u1EE3ng c\xE1t","L\xF2ng t\u1EEB nh\u01B0 su\u1ED1i m\xE1t trong<br>T\u01B0\u1EDBi cho ng\u01B0\u1EDDi kh\xE1c, t\u01B0\u1EDBi l\xF2ng m\xECnh t\u01B0\u01A1i","Gi\xFAp \u0111\u1EE1 ng\u01B0\u1EDDi kh\xE1c, b\u1EA1n s\u1EBD th\u1EA5y m\xECnh h\u1EA1nh ph\xFAc."],["Th\u01B0\u1EE3ng c\xE1t","Ng\u1ED3i y\xEAn nghe ti\u1EBFng m\u01B0a r\u01A1i<br>Bi\u1EBFt m\xECnh \u0111ang s\u1ED1ng, tuy\u1EC7t v\u1EDDi bi\u1EBFt bao","S\u1ED1ng ch\u1EADm l\u1EA1i, t\u1EADn h\u01B0\u1EDFng gi\xE2y ph\xFAt hi\u1EC7n t\u1EA1i."],["\u0110\u1EA1i c\xE1t","Ph\u01B0\u1EDBc l\xE0nh nh\u01B0 n\u01B0\u1EDBc ngu\u1ED3n xa<br>Ch\u1EA3y ho\xE0i kh\xF4ng c\u1EA1n, \xF4ng b\xE0 \u0111\u1EC3 cho","Hi\u1EBFu th\u1EA3o v\u1EDBi cha m\u1EB9, ph\xFAc \u0111\u1EE9c d\xE0i l\xE2u."]],D_=["Ma Ha B\xE1t Nh\xE3 Ba La M\u1EADt \u0110a T\xE2m Kinh","Qu\xE1n T\u1EF1 T\u1EA1i B\u1ED3 T\xE1t","h\xE0nh th\xE2m B\xE1t nh\xE3 Ba la m\u1EADt \u0111a th\u1EDDi,","chi\u1EBFu ki\u1EBFn ng\u0169 u\u1EA9n giai kh\xF4ng,","\u0111\u1ED9 nh\u1EA5t thi\u1EBFt kh\u1ED5 \xE1ch.","X\xE1 L\u1EE3i T\u1EED! S\u1EAFc b\u1EA5t d\u1ECB kh\xF4ng,","kh\xF4ng b\u1EA5t d\u1ECB s\u1EAFc,","s\u1EAFc t\u1EE9c th\u1ECB kh\xF4ng, kh\xF4ng t\u1EE9c th\u1ECB s\u1EAFc,","th\u1ECD, t\u01B0\u1EDFng, h\xE0nh, th\u1EE9c di\u1EC7c ph\u1EE5c nh\u01B0 th\u1ECB.","X\xE1 L\u1EE3i T\u1EED! Th\u1ECB ch\u01B0 ph\xE1p kh\xF4ng t\u01B0\u1EDBng,","b\u1EA5t sanh b\u1EA5t di\u1EC7t, b\u1EA5t c\u1EA5u b\u1EA5t t\u1ECBnh,","b\u1EA5t t\u0103ng b\u1EA5t gi\u1EA3m.","Th\u1ECB c\u1ED1 kh\xF4ng trung v\xF4 s\u1EAFc,","v\xF4 th\u1ECD, t\u01B0\u1EDFng, h\xE0nh, th\u1EE9c,","v\xF4 nh\xE3n, nh\u0129, t\u1EF7, thi\u1EC7t, th\xE2n, \xFD,","v\xF4 s\u1EAFc, thanh, h\u01B0\u01A1ng, v\u1ECB, x\xFAc, ph\xE1p,","v\xF4 nh\xE3n gi\u1EDBi, n\xE3i ch\xED v\xF4 \xFD th\u1EE9c gi\u1EDBi,","v\xF4 v\xF4 minh, di\u1EC7c v\xF4 v\xF4 minh t\u1EADn,","n\xE3i ch\xED v\xF4 l\xE3o t\u1EED, di\u1EC7c v\xF4 l\xE3o t\u1EED t\u1EADn,","v\xF4 kh\u1ED5, t\u1EADp, di\u1EC7t, \u0111\u1EA1o,","v\xF4 tr\xED di\u1EC7c v\xF4 \u0111\u1EAFc.","D\u0129 v\xF4 s\u1EDF \u0111\u1EAFc c\u1ED1, B\u1ED3 \u0111\u1EC1 t\xE1t \u0111\u1ECFa","y B\xE1t nh\xE3 Ba la m\u1EADt \u0111a c\u1ED1,","t\xE2m v\xF4 qu\xE1i ng\u1EA1i, v\xF4 qu\xE1i ng\u1EA1i c\u1ED1,","v\xF4 h\u1EEFu kh\u1EE7ng b\u1ED1,","vi\u1EC5n ly \u0111i\xEAn \u0111\u1EA3o m\u1ED9ng t\u01B0\u1EDFng,","c\u1EE9u c\xE1nh Ni\u1EBFt b\xE0n.","Tam th\u1EBF ch\u01B0 Ph\u1EADt","y B\xE1t nh\xE3 Ba la m\u1EADt \u0111a c\u1ED1,","\u0111\u1EAFc A n\u1EADu \u0111a la Tam mi\u1EC7u Tam b\u1ED3 \u0111\u1EC1.","C\u1ED1 tri B\xE1t nh\xE3 Ba la m\u1EADt \u0111a","th\u1ECB \u0111\u1EA1i th\u1EA7n ch\xFA, th\u1ECB \u0111\u1EA1i minh ch\xFA,","th\u1ECB v\xF4 th\u01B0\u1EE3ng ch\xFA, th\u1ECB v\xF4 \u0111\u1EB3ng \u0111\u1EB3ng ch\xFA,","n\u0103ng tr\u1EEB nh\u1EA5t thi\u1EBFt kh\u1ED5,","ch\xE2n th\u1EADt b\u1EA5t h\u01B0.","C\u1ED1 thuy\u1EBFt B\xE1t nh\xE3 Ba la m\u1EADt \u0111a ch\xFA,","t\u1EE9c thuy\u1EBFt ch\xFA vi\u1EBFt:","Y\u1EBFt \u0111\u1EBF, y\u1EBFt \u0111\u1EBF, ba la y\u1EBFt \u0111\u1EBF,","ba la t\u0103ng y\u1EBFt \u0111\u1EBF, b\u1ED3 \u0111\u1EC1 t\xE1t b\xE0 ha.","(3 l\u1EA7n)","Nam m\xF4 B\u1ED5n S\u01B0 Th\xEDch Ca M\xE2u Ni Ph\u1EADt."]});var ev,nv,iv,sv,rv,ov,av,cv,Yd=sn(()=>{qd();ev="chuaTamAn_v2",nv=[["#8d8f93","X\xE1m tro"],["#6b4a33","N\xE2u s\u1ED3ng"],["#3f6fb0","Lam"],["#d9a441","V\xE0ng ngh\u1EC7"],["#f1ece1","Tr\u1EAFng"],["#7d5ba6","T\xEDm"],["#4f7d5a","Xanh r\xEAu"],["#b4553f","\u0110\u1ECF son"]],iv=["Nam m\xF4 A Di \u0110\xE0 Ph\u1EADt","Nam m\xF4 \u0110\u1EA1i T\u1EEB \u0110\u1EA1i Bi Qu\xE1n Th\u1EBF \xC2m B\u1ED3 T\xE1t","Nam m\xF4 B\u1ED5n S\u01B0 Th\xEDch Ca M\xE2u Ni Ph\u1EADt"],sv=["\u{1F64F} A Di \u0110\xE0 Ph\u1EADt","Ch\xE0o \u0111\u1EA1o h\u1EEFu","T\xF9y h\u1EF7 c\xF4ng \u0111\u1EE9c \u{1FAB7}","Ch\xFAc b\xECnh an","C\xF9ng ng\u1ED3i thi\u1EC1n nh\xE9","C\u1EA3m \u01A1n \u{1F64F}"],rv=[["lay","L\u1EA1y Ph\u1EADt 3 l\u1EA1y"],["huong","Th\u1EAFp m\u1ED9t n\xE9n t\xE2m h\u01B0\u01A1ng"],["hoa","D\xE2ng hoa l\xEAn \u0110\u1EE9c Ph\u1EADt"],["chuong","Th\u1EC9nh chu\xF4ng 3 ti\u1EBFng"],["mo","G\xF5 m\xF5 108 ti\u1EBFng"],["thien","Ng\u1ED3i thi\u1EC1n \xEDt nh\u1EA5t 1 ph\xFAt"],["ca","Cho c\xE1 Koi \u0103n"],["nen","Th\u1EAFp m\u1ED9t ng\u1ECDn n\u1EBFn"],["que","Xin m\u1ED9t qu\u1EBB \u0111\u1EA7u ng\xE0y"],["kinh","T\u1EE5ng tr\u1ECDn B\xE1t Nh\xE3 T\xE2m Kinh"],["den","Th\u1EA3 m\u1ED9t ng\u1ECDn hoa \u0111\u0103ng"],["hat","L\u1EA7n m\u1ED9t v\xF2ng tr\xE0ng h\u1EA1t"]],ov=[["Kohaku","Tr\u1EAFng \u2013 \u0111\u1ECF"],["Sanke","Tr\u1EAFng \u2013 \u0111\u1ECF \u2013 \u0111en"],["Ogon","V\xE0ng \xE1nh kim"],["Showa","\u0110en \u2013 \u0111\u1ECF \u2013 tr\u1EAFng"],["Chagoi","N\xE2u \u0111\u1ED3ng"],["Tancho","Tr\u1EAFng, \u0111\u1ED1m \u0111\u1ECF tr\xEAn \u0111\u1EA7u"],["Hi Utsuri","\u0110en \u2013 cam"],["Platinum","B\u1EA1ch kim"]],av=[{id:"chua",name:"V\u0103n kh\u1EA5n l\u1EC5 Ph\u1EADt t\u1EA1i ch\xF9a",note:"\u0110\u1ECDc sau khi d\xE2ng h\u01B0\u01A1ng, hoa qu\u1EA3 l\xEAn ban Tam B\u1EA3o.",text:`Nam m\xF4 A Di \u0110\xE0 Ph\u1EADt! (3 l\u1EA7n)

\u0110\u1EC7 t\u1EED con th\xE0nh t\xE2m k\xEDnh l\u1EA1y:
\u2013 M\u01B0\u1EDDi ph\u01B0\u01A1ng ch\u01B0 Ph\u1EADt, ch\u01B0 v\u1ECB B\u1ED3 T\xE1t, ch\u01B0 Hi\u1EC1n Th\xE1nh T\u0103ng.
\u2013 \u0110\u1EE9c B\u1ED5n S\u01B0 Th\xEDch Ca M\xE2u Ni Ph\u1EADt.
\u2013 \u0110\u1EE9c \u0110\u1EA1i T\u1EEB \u0110\u1EA1i Bi Qu\xE1n Th\u1EBF \xC2m B\u1ED3 T\xE1t.

H\xF4m nay l\xE0 ng\xE0y [ ] th\xE1ng [ ] n\u0103m [ ],
\u0111\u1EC7 t\u1EED con l\xE0 [h\u1ECD t\xEAn], ng\u1EE5 t\u1EA1i [\u0111\u1ECBa ch\u1EC9],
th\xE0nh t\xE2m \u0111\u1EBFn ch\xF9a, d\xE2ng n\xE9n t\xE2m h\u01B0\u01A1ng, l\u1EC5 b\xE1i Tam B\u1EA3o.

C\xFAi xin ch\u01B0 Ph\u1EADt, ch\u01B0 B\u1ED3 T\xE1t t\u1EEB bi ch\u1EE9ng gi\xE1m l\xF2ng th\xE0nh,
gia h\u1ED9 cho \u0111\u1EC7 t\u1EED c\xF9ng gia quy\u1EBFn th\xE2n t\xE2m an l\u1EA1c,
t\u0103ng tr\u01B0\u1EDFng thi\u1EC7n c\u0103n, ph\xFAc tu\u1EC7 \u0111\u1EE7 \u0111\u1EA7y,
bi\u1EBFt s\u1ED1ng hi\u1EC1n h\xF2a, l\xE0m l\xE0nh l\xE1nh d\u1EEF,
m\u1ECDi vi\u1EC7c hanh th\xF4ng, gia \u0111\u1EA1o b\xECnh an.

Nguy\u1EC7n \u0111em c\xF4ng \u0111\u1EE9c n\xE0y h\u1ED3i h\u01B0\u1EDBng kh\u1EAFp t\u1EA5t c\u1EA3,
\u0111\u1EC7 t\u1EED v\xE0 ch\xFAng sinh \u0111\u1EC1u tr\u1ECDn th\xE0nh Ph\u1EADt \u0111\u1EA1o.

Nam m\xF4 A Di \u0110\xE0 Ph\u1EADt! (3 l\u1EA7n)`},{id:"ram",name:"V\u0103n kh\u1EA5n ng\xE0y R\u1EB1m, m\xF9ng M\u1ED9t (t\u1EA1i gia)",note:"D\xF9ng khi th\u1EAFp h\u01B0\u01A1ng ban th\u1EDD Ph\u1EADt, gia ti\xEAn ng\xE0y R\u1EB1m v\xE0 m\xF9ng M\u1ED9t \xE2m l\u1ECBch.",text:`Nam m\xF4 A Di \u0110\xE0 Ph\u1EADt! (3 l\u1EA7n)

Con k\xEDnh l\u1EA1y ch\xEDn ph\u01B0\u01A1ng Tr\u1EDDi, m\u01B0\u1EDDi ph\u01B0\u01A1ng ch\u01B0 Ph\u1EADt, ch\u01B0 Ph\u1EADt m\u01B0\u1EDDi ph\u01B0\u01A1ng.
Con k\xEDnh l\u1EA1y Ho\xE0ng thi\xEAn, H\u1EADu th\u1ED5, ch\u01B0 v\u1ECB T\xF4n th\u1EA7n.
Con k\xEDnh l\u1EA1y c\xE1c c\u1EE5 T\u1ED5 ti\xEAn, n\u1ED9i ngo\u1EA1i h\u1ECD [ ].

H\xF4m nay l\xE0 ng\xE0y R\u1EB1m (m\xF9ng M\u1ED9t) th\xE1ng [ ] n\u0103m [ ],
t\xEDn ch\u1EE7 con l\xE0 [h\u1ECD t\xEAn], ng\u1EE5 t\u1EA1i [\u0111\u1ECBa ch\u1EC9],
th\xE0nh t\xE2m s\u1EEDa bi\u1EC7n h\u01B0\u01A1ng hoa, tr\xE0 qu\u1EA3, th\u1EAFp n\xE9n t\xE2m h\u01B0\u01A1ng d\xE2ng l\xEAn tr\u01B0\u1EDBc \xE1n.

C\xFAi xin ch\u01B0 v\u1ECB ch\u1EE9ng gi\xE1m l\xF2ng th\xE0nh,
ph\xF9 h\u1ED9 \u0111\u1ED9 tr\xEC cho c\u1EA3 gia \u0111\xECnh ch\xFAng con
ng\u01B0\u1EDDi ng\u01B0\u1EDDi kh\u1ECFe m\u1EA1nh, tr\xEAn thu\u1EADn d\u01B0\u1EDBi h\xF2a,
c\xF4ng vi\u1EC7c thu\u1EADn l\u1EE3i, l\u1ED9c t\xE0i v\u1EEFng b\u1EC1n,
m\u1ECDi \u0111i\u1EC1u t\u1ED1t l\xE0nh, tai qua n\u1EA1n kh\u1ECFi.

Ch\xFAng con l\u1EC5 b\u1EA1c t\xE2m th\xE0nh, c\xFAi xin ch\u1EE9ng gi\xE1m.

Nam m\xF4 A Di \u0110\xE0 Ph\u1EADt! (3 l\u1EA7n)`},{id:"cauan",name:"V\u0103n kh\u1EA5n c\u1EA7u an",note:"C\u1EA7u b\xECnh an, s\u1EE9c kh\u1ECFe cho b\u1EA3n th\xE2n ho\u1EB7c ng\u01B0\u1EDDi th\xE2n.",text:`Nam m\xF4 \u0110\u1EA1i T\u1EEB \u0110\u1EA1i Bi Qu\xE1n Th\u1EBF \xC2m B\u1ED3 T\xE1t! (3 l\u1EA7n)

\u0110\u1EC7 t\u1EED con th\xE0nh t\xE2m k\xEDnh l\u1EA1y \u0110\u1EE9c Qu\xE1n Th\u1EBF \xC2m B\u1ED3 T\xE1t,
\u0110\u1EA5ng c\u1EE9u kh\u1ED5 c\u1EE9u n\u1EA1n, t\u1EA7m thanh c\u1EE9u kh\u1ED5.

\u0110\u1EC7 t\u1EED con l\xE0 [h\u1ECD t\xEAn], h\xF4m nay th\xE0nh t\xE2m d\xE2ng h\u01B0\u01A1ng,
xin c\u1EA7u an cho [t\xEAn ng\u01B0\u1EDDi th\xE2n] \u0111ang [ho\xE0n c\u1EA3nh: \u1ED1m \u0111au / \u0111i xa / g\u1EB7p kh\xF3 kh\u0103n].

C\xFAi xin B\u1ED3 T\xE1t r\u1EE7 l\xF2ng t\u1EEB bi,
gia h\u1ED9 cho [t\xEAn] th\xE2n t\xE2m an \u1ED5n, b\u1EC7nh kh\u1ED5 ti\xEAu tr\u1EEB,
g\u1EB7p \u0111\u01B0\u1EE3c th\u1EA7y hay thu\u1ED1c t\u1ED1t, c\xF3 ng\u01B0\u1EDDi t\u1ED1t gi\xFAp \u0111\u1EE1,
s\u1EDBm v\u01B0\u1EE3t qua kh\xF3 kh\u0103n, tr\u1EDF v\u1EC1 b\xECnh an.

\u0110\u1EC7 t\u1EED nguy\u1EC7n s\u1ED1ng hi\u1EC1n l\xE0nh, l\xE0m nhi\u1EC1u vi\u1EC7c thi\u1EC7n,
h\u1ED3i h\u01B0\u1EDBng c\xF4ng \u0111\u1EE9c cho ng\u01B0\u1EDDi th\xE2n \u0111\u01B0\u1EE3c an vui.

Nam m\xF4 \u0110\u1EA1i T\u1EEB \u0110\u1EA1i Bi Qu\xE1n Th\u1EBF \xC2m B\u1ED3 T\xE1t! (3 l\u1EA7n)`},{id:"giatien",name:"V\u0103n kh\u1EA5n gia ti\xEAn ng\xE0y gi\u1ED7, ng\xE0y T\u1EBFt",note:"T\u01B0\u1EDFng nh\u1EDB \xF4ng b\xE0, cha m\u1EB9 v\xE0 t\u1ED5 ti\xEAn.",text:`Nam m\xF4 A Di \u0110\xE0 Ph\u1EADt! (3 l\u1EA7n)

Con k\xEDnh l\u1EA1y ch\xEDn ph\u01B0\u01A1ng Tr\u1EDDi, m\u01B0\u1EDDi ph\u01B0\u01A1ng ch\u01B0 Ph\u1EADt.
Con k\xEDnh l\u1EA1y T\u1ED5 ti\xEAn, c\xE1c c\u1EE5 n\u1ED9i ngo\u1EA1i, \xF4ng b\xE0, cha m\u1EB9
c\xF9ng h\u01B0\u01A1ng linh [t\xEAn ng\u01B0\u1EDDi \u0111\xE3 khu\u1EA5t] (n\u1EBFu l\xE0 ng\xE0y gi\u1ED7).

H\xF4m nay l\xE0 ng\xE0y [ ] th\xE1ng [ ] n\u0103m [ ],
con ch\xE1u ch\xFAng con l\xE0 [h\u1ECD t\xEAn], c\xF9ng to\xE0n gia
th\xE0nh t\xE2m d\xE2ng h\u01B0\u01A1ng hoa, l\u1EC5 v\u1EADt, t\u01B0\u1EDFng nh\u1EDB c\xF4ng \u01A1n sinh th\xE0nh d\u01B0\u1EE1ng d\u1EE5c.

C\xFAi xin h\u01B0\u01A1ng linh T\u1ED5 ti\xEAn v\u1EC1 ch\u1EE9ng gi\xE1m,
ph\xF9 h\u1ED9 con ch\xE1u m\u1EA1nh kh\u1ECFe, hi\u1EBFu th\u1EA3o, thu\u1EADn h\xF2a,
h\u1ECDc h\xE0nh t\u1EA5n t\u1EDBi, l\xE0m \u0103n ch\xE2n ch\xEDnh, gia \u0111\u1EA1o h\u01B0ng long.

Con ch\xE1u nguy\u1EC7n gi\u1EEF g\xECn n\u1EBFp nh\xE0, s\u1ED1ng t\u1EED t\u1EBF,
\u0111\u1EC3 b\xE1o \u0111\xE1p c\xF4ng \u01A1n c\u1EE7a ng\u01B0\u1EDDi \u0111i tr\u01B0\u1EDBc.

Nam m\xF4 A Di \u0110\xE0 Ph\u1EADt! (3 l\u1EA7n)`},{id:"vulan",name:"V\u0103n kh\u1EA5n Vu Lan b\xE1o hi\u1EBFu",note:"R\u1EB1m th\xE1ng B\u1EA3y \u2014 t\u01B0\u1EDFng nh\u1EDB v\xE0 b\xE1o \u01A1n cha m\u1EB9.",text:`Nam m\xF4 \u0110\u1EA1i Hi\u1EBFu M\u1EE5c Ki\u1EC1n Li\xEAn B\u1ED3 T\xE1t! (3 l\u1EA7n)

\u0110\u1EC7 t\u1EED con th\xE0nh t\xE2m k\xEDnh l\u1EA1y ch\u01B0 Ph\u1EADt m\u01B0\u1EDDi ph\u01B0\u01A1ng,
k\xEDnh l\u1EA1y \u0110\u1EE9c M\u1EE5c Ki\u1EC1n Li\xEAn B\u1ED3 T\xE1t, t\u1EA5m g\u01B0\u01A1ng hi\u1EBFu h\u1EA1nh.

Nh\xE2n ng\xE0y R\u1EB1m th\xE1ng B\u1EA3y, m\xF9a Vu Lan b\xE1o hi\u1EBFu,
\u0111\u1EC7 t\u1EED con l\xE0 [h\u1ECD t\xEAn] th\xE0nh t\xE2m d\xE2ng h\u01B0\u01A1ng,
c\u1EA7u cho cha m\u1EB9 hi\u1EC7n ti\u1EC1n th\xE2n t\xE2m kh\u1ECFe m\u1EA1nh, s\u1ED1ng l\xE2u an vui;
c\u1EA7u cho \xF4ng b\xE0, cha m\u1EB9 \u0111\xE3 khu\u1EA5t \u0111\u01B0\u1EE3c si\xEAu sinh t\u1ECBnh \u0111\u1ED9.

Con nguy\u1EC7n s\u1ED1ng sao cho x\u1EE9ng \u0111\xE1ng v\u1EDBi c\xF4ng \u01A1n sinh th\xE0nh,
bi\u1EBFt th\u01B0\u01A1ng y\xEAu, ch\u0103m s\xF3c v\xE0 l\u1EAFng nghe cha m\u1EB9 m\u1ED7i ng\xE0y.

Nam m\xF4 A Di \u0110\xE0 Ph\u1EADt! (3 l\u1EA7n)`}],cv=["H\xE3y \u0111\u1EC3 t\xE2m nh\u01B0 m\u1EB7t h\u1ED3 ph\u1EB3ng l\u1EB7ng \u2014 tr\u0103ng t\u1EF1 soi b\xF3ng.","M\u1ED9t n\u1EE5 c\u01B0\u1EDDi, m\u1ED9t h\u01A1i th\u1EDF nh\u1EB9 \u2014 \u0111\xF3 \u0111\xE3 l\xE0 m\u1ED9t ng\xF4i ch\xF9a nh\u1ECF.","Gieo m\u1ED9t \xFD l\xE0nh, g\u1EB7t m\u1ED9t ng\xE0y an.","\u0110i ch\u1EADm l\u1EA1i m\u1ED9t ch\xFAt, b\u1EA1n s\u1EBD th\u1EA5y hoa n\u1EDF b\xEAn \u0111\u01B0\u1EDDng.","Ng\u01B0\u1EDDi bi\u1EBFt \u0111\u1EE7 th\xEC lu\xF4n \u0111\u1EE7 \u0111\u1EA7y.","Th\u01B0\u01A1ng ng\u01B0\u1EDDi nh\u01B0 th\u1EC3 th\u01B0\u01A1ng th\xE2n.","L\u1EDDi n\xF3i ch\u1EB3ng m\u1EA5t ti\u1EC1n mua, l\u1EF1a l\u1EDDi m\xE0 n\xF3i cho v\u1EEBa l\xF2ng nhau.","U\u1ED1ng n\u01B0\u1EDBc nh\u1EDB ngu\u1ED3n."]});function Bl(i,t=2.6,e=.7,n=110){let s=new Ct,r=Oe(i,{w:1024,h:Math.round(1024*e/t),size:n,fill:"#4a1c10",stroke:"#2a0a04"}),o=new Y({map:r,roughness:.6}),a=new H(new te(t,e,.08),[M.mats.beam,M.mats.beam,M.mats.beam,M.mats.beam,o,o]);a.castShadow=!0,s.add(a);let l=new H(new te(t+.12,e+.12,.06),M.mats.goldDim);return s.add(l),s}function Ws(i,t,e,n,s,r=2.4){let o=new Ct;o.position.set(t,0,e),o.rotation.y=n,i.add(o),[-r/2+.15,r/2-.15].forEach(l=>B(o,st(.12,2.1,.12,M.mats.beam),l,1.05,0));let a=Bl(s,r,.62,96);a.position.y=1.75,o.add(a);{let l=Math.cos(n),c=Math.sin(n),h=r/2+.05,u=Math.abs(l)*h+Math.abs(c)*.22,d=Math.abs(c)*h+Math.abs(l)*.22;Gt(t-u,t+u,e-d,e+d)}return o}function H_(i){let t=Me("tex-stone",1,1,{color:13814461,roughness:.9}),e=(n,s,r,o)=>{let a=s-n,l=o-r,c=t.clone();c.map=Kt("tex-stone",a/2,l/2);let h=new H(new Jt(a,l),c);h.rotation.x=-Math.PI/2,h.position.set((n+s)/2,.02,(r+o)/2),h.receiveShadow=!0,i.add(h)};e(-25.3,-5.2,-11.5,-9.9),e(-25.3,-23.7,-22.8,-11.5),e(-28,-25.3,-22.8,-21.2),e(5.2,35.3,-11.5,-9.9),e(33.7,35.3,-14.2,-11.5)}function U_(i){M.benches=[];let t=Me("tex-stone",1,.4,{color:12235686,roughness:.85});Fl.benches.forEach(([e,n,s])=>{let r=new Ct;r.position.set(e,0,n),r.rotation.y=s>0?Math.PI/2:-Math.PI/2,i.add(r);let o=new H(new te(1.8,.11,.5),t);B(r,o,0,.44,0),[-.65,.65].forEach(l=>{B(r,st(.16,.4,.44,t),l,.2,0)}),o.userData.act="ghe",M.acts.push(o),Gt(e-.32,e+.32,n-.98,n+.98);let a=s>0?Math.PI/2:-Math.PI/2;M.benches.push({x:e,z:n,face:a,taken:null,front:[e+s*.8,n]})})}function Kd(){Xs||(Xs=new kt(1,14,10,0,Math.PI*2,0,Math.PI/2),Xs.scale(.07,.17,.035),Xs.translate(0,0,.035)),na||(na=new Y({color:16289968,emissive:16732280,emissiveIntensity:.45,roughness:.5,side:Qt}),Nl=new Y({color:16773344,emissive:16756848,emissiveIntensity:1.1,roughness:.5,side:Qt}),$d=new Y({color:5212741,emissive:1849876,roughness:.6}),Jd=new gt(.26,.2,.03,20),M.lotusMats=[na,Nl])}function Zd(i,t,e,n,s=1,r=!1,o=null){Kd();let a=new Ct;a.position.set(t,e,n),a.scale.setScalar(s),i.add(a),r?(B(a,new H(new gt(.22,.3,.12,16),M.mats.goldDim),0,.06,0),B(a,new H(new gt(.045,.06,.95,10),M.mats.lacquer),0,.55,0),B(a,new H(new gt(.2,.08,.08,16),M.mats.gold),0,1.04,0),a.userData.top=1.08):a.userData.top=0;let l=a.userData.top,c=new Zt;for(let u=0;u<3;u++){let d=8+u*2;for(let f=0;f<d;f++){let g=f/d*Math.PI*2+u*.3,x=.13-u*.035;c.position.set(t+Math.cos(g)*x*s,e+(l+.02+u*.025)*s,n+Math.sin(g)*x*s),c.rotation.order="YXZ",c.rotation.set(-(1.15-u*.38),-g+Math.PI/2,0);let m=s*(1.15-u*.18);c.scale.setScalar(m),c.updateMatrix(),o&&o.push({mat:u===2?1:0,matrix:c.matrix.clone()})}}B(a,new H(Jd,$d),0,l+.01,0,!1);let h=new C;return a.updateWorldMatrix(!0,!1),a.localToWorld(h.set(0,l+.16,0)),M.glows.push({pos:h.clone(),size:.75*s,color:16756896,flame:!0,fs:.07*s}),a}function N_(i){let{H0:t}=he,e=new Ct;i.add(e);let n=[];[[-4.5,-32.4],[4.5,-32.4],[-2.75,-30.8],[2.75,-30.8]].forEach(([h,u],d)=>Zd(e,h,t+(d<2?1.22:2.22),u,1.25,!1,n)),[[-2.35,-26.7],[2.35,-26.7],[-5.6,-22],[5.6,-22],[-5.6,-17],[5.6,-17]].forEach(([h,u])=>{Zd(e,h,t,u,1,!0,n),Se(h,u,.4)}),Kd();let s=n.filter(h=>h.mat===0).length,r=n.length-s,o=new Vt(Xs,na,Math.max(1,s)),a=new Vt(Xs,Nl,Math.max(1,r)),l=0,c=0;n.forEach(h=>{h.mat===0?o.setMatrixAt(l++,h.matrix):a.setMatrixAt(c++,h.matrix)}),o.count=l,a.count=c,i.add(o,a)}function F_(i){let{H0:t,bowSpot:e}=he,n=new Ct;i.add(n);let s=e[1]-.25,r=He(1024,512,(c,h,u)=>{c.fillStyle="#7a1410",c.fillRect(0,0,h,u),c.strokeStyle="#d9a642",c.lineWidth=18,c.strokeRect(22,22,h-44,u-44),c.lineWidth=5,c.strokeRect(52,52,h-104,u-104),c.fillStyle="rgba(217,166,66,0.55)";for(let d=0;d<18;d++){let f=80+d*48;c.beginPath(),c.arc(f,37,6,0,7),c.fill(),c.beginPath(),c.arc(f,u-37,6,0,7),c.fill()}c.strokeStyle="rgba(217,166,66,0.35)",c.lineWidth=3;for(let d=0;d<3;d++){let f=h/2+(d-1)*300;c.beginPath();for(let g=0;g<8;g++){let x=g/8*6.283;c.moveTo(f,u/2),c.quadraticCurveTo(f+Math.cos(x+.4)*90,u/2+Math.sin(x+.4)*90,f+Math.cos(x)*110,u/2+Math.sin(x)*110)}c.stroke()}}),o=new H(new te(4.2,.03,2.3),new Y({map:r,roughness:.9}));B(n,o,0,t+.015,s,!1);let a=new Y({color:12092970,roughness:.85,map:Kt("tex-floor",.4,.4)}),l=new Y({color:9181716,roughness:.8});M.bowMats=[],[-1.25,0,1.25].forEach(c=>{let h=new H(new te(.9,.09,.62),a);B(n,h,c,t+.075,s-.15),B(n,new H(new te(.96,.05,.68),l),c,t+.045,s-.15,!1),M.bowMats.push([c,s+.35])})}function B_(i){let t=Fl.lib,e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,s=4,r=.3,o=new Ct;i.add(o),M.libGroup=o,B(o,st(t.x1-t.x0+.8,.14,t.z1-t.z0+.8,M.mats.stoneS),e,.07,n,!1);let a=Me("tex-floor",4,5,{roughness:.7,color:11569256}),l=new H(new Jt(t.x1-t.x0-.4,t.z1-t.z0-.4),a);l.rotation.x=-Math.PI/2,B(o,l,e,.145,n,!1);let c=M.mats.plaster,h=N=>(M.camOcc.push(N),N),u=(N,Z,G,j)=>{let et=h(st(G,s,j,c));B(o,et,N,s/2,Z);let ot=st(G+.02,.5,j+.02,M.mats.carvedT);B(o,ot,N,s-.25,Z,!1);let yt=st(G+.03,.5,j+.03,M.mats.darkwood);B(o,yt,N,.25,Z,!1)};u(t.x0,n,r,t.z1-t.z0),u(e,t.z0,t.x1-t.x0,r),u(e,t.z1,t.x1-t.x0,r);let[d,f]=t.door;u(t.x1,(t.z0+d)/2,r,d-t.z0),u(t.x1,(f+t.z1)/2,r,t.z1-f),B(o,st(r,s-3,f-d,c),t.x1,3+(s-3)/2,(d+f)/2),Gt(t.x0-.3,t.x0+.3,t.z0-.3,t.z1+.3),Gt(t.x0-.3,t.x1+.3,t.z0-.3,t.z0+.3),Gt(t.x0-.3,t.x1+.3,t.z1-.3,t.z1+.3),Gt(t.x1-.3,t.x1+.3,t.z0,d),Gt(t.x1-.3,t.x1+.3,f,t.z1),[t.z0,t.z1].forEach(N=>{for(let Z=0;Z<2;Z++){let G=e-2.3+Z*4.6,j=st(2.2,1.6,.36,M.mats.beam);B(o,j,G,2.2,N,!1);let et=st(2,1.4,.38,new Y({color:16770736,emissive:16760944,emissiveIntensity:.25,roughness:.8}));B(o,et,G,2.2,N,!1);let ot=[];for(let Et=-6;Et<=6;Et++){let $=new te(.05,1.4,.42);$.translate(Et*.16,0,0),ot.push($)}let yt=new H(en(ot),M.mats.beam);yt.position.set(G,2.2,N),o.add(yt)}}),[d-.25,f+.25].forEach(N=>ji(o,t.x1+.05,N,0,s,!1)),[[t.x1+1,t.z0+.6],[t.x1+1,t.z1-.6],[t.x1+1,d-.3],[t.x1+1,f+.3]].forEach(([N,Z])=>ji(o,N,Z,0,s,!0));let g=nn(7.4,6.6,2.4,1.1,0);g.rotation.y=Math.PI/2,g.position.set(e+.5,s+.05,n),o.add(g),g.traverse(N=>{N.isMesh&&N.material===M.mats.roof&&M.camOcc.push(N)}),M.interiors.push({name:"thuvien",x0:t.x0+.15,x1:t.x1-.15,z0:t.z0+.15,z1:t.z1-.15,ceil:s-.35,roofs:[g],pmax:.48});let x=new H(new Jt(t.x1-t.x0,t.z1-t.z0),new Y({color:5913126,roughness:.8,map:Kt("tex-floor",4,4),side:Qt}));x.rotation.x=Math.PI/2,B(o,x,e,s-.02,n,!1,!1);let m=Bl("TH\u01AF VI\u1EC6N PH\u1EACT PH\xC1P",3.6,.72,104);m.position.set(t.x1+.2,3.45,(d+f)/2),m.rotation.y=Math.PI/2,o.add(m);let p=Me("tex-floor",1,1,{color:5911586,roughness:.6}),v=[],y=(N,Z,G,j)=>{let et=new Ct;et.position.set(N,.14,Z),et.rotation.y=G,o.add(et),B(et,st(j,.06,.5,p),0,2.9,0),[-j/2,j/2].forEach(ot=>B(et,st(.06,2.9,.5,p),ot,1.45,0)),B(et,st(j,2.9,.04,p),0,1.45,-.23);for(let ot=0;ot<5;ot++){let yt=.1+ot*.58;B(et,st(j,.05,.48,p),0,yt,0,!1);let Et=-j/2+.08;for(;Et<j/2-.12;){let $=.05+Math.random()*.07,ut=.32+Math.random()*.16;if(Math.random()<.08){Et+=.12;continue}v.push({s:et,x:Et+$/2,y:yt+.025+ut/2,w:$,h:ut,tilt:Math.random()<.06?.2:0}),Et+=$+.01}}};for(let N=0;N<3;N++)y(t.x0+.45,t.z0+2.1+N*3.9,Math.PI/2,3.4);[t.z0+.45,t.z1-.45].forEach((N,Z)=>y(t.x0+3.2,N,Z?Math.PI:0,3.2)),Gt(t.x0,t.x0+.9,t.z0,t.z1),Gt(t.x0,t.x0+5,t.z0,t.z0+.9),Gt(t.x0,t.x0+5,t.z1-.9,t.z1);let _=[8003094,9067038,4074010,5909024,10517050,3029546,6965802,12623968],S=new te(1,1,.36),w=new Y({roughness:.75,map:Kt("tex-lacquer",.3,.3)}),R=new Vt(S,w,v.length),I=new Wt,T=new je,E=new At;v.forEach((N,Z)=>{N.s.updateMatrixWorld(!0);let G=new C(N.x,N.y,.02),j=new Wt().compose(G,T.setFromEuler(new tn(0,0,N.tilt)),new C(N.w,N.h,1));I.multiplyMatrices(N.s.matrixWorld,j),R.setMatrixAt(Z,I),R.setColorAt(Z,E.setHex(_[Z%_.length]).offsetHSL(0,0,(Math.random()-.5)*.08))}),R.castShadow=!0,i.add(R);let P=new Y({color:15984328,roughness:.9,map:He(256,128,(N,Z,G)=>{N.fillStyle="#f3e6c8",N.fillRect(0,0,Z,G),N.fillStyle="rgba(60,40,20,0.55)";for(let j=0;j<2;j++)for(let et=0;et<12;et++)N.fillRect(j*128+16,12+et*9,96-Math.random()*20,3);N.fillStyle="rgba(0,0,0,0.25)",N.fillRect(126,0,4,G)})});[[e+.8,n-2.6],[e+.8,n+2.6]].forEach(([N,Z])=>{let G=new Ct;G.position.set(N,.14,Z),o.add(G),B(G,st(1.8,.07,.9,M.mats.lacquerB),0,.42,0),[[-.8,-.38],[.8,-.38],[-.8,.38],[.8,.38]].forEach(([ot,yt])=>B(G,st(.08,.4,.08,M.mats.lacquerB),ot,.2,yt));let j=new H(new te(.62,.02,.42),P);B(G,j,-.2,.47,0,!1),j.rotation.y=.15;let et=new H(new gt(.05,.08,.12,12),M.mats.gold);B(G,et,.6,.52,-.2),M.glows.push({pos:new C(N+.6,.14+.66,Z-.2),size:.7,flame:!0,fs:.06}),[-.5,.5].forEach(ot=>{let yt=new H(new gt(.3,.32,.12,20),M.mats.redCloth);B(o,yt,N+ot,.2,Z+(Z<n?.75:-.75))}),Gt(N-.95,N+.95,Z-.5,Z+.5)});let O=new Ct;O.position.set(t.x0+2.4,.14,n),O.rotation.y=Math.PI/2,o.add(O),B(O,st(1.1,.9,.6,M.mats.lacquer),0,.45,0);let F=st(1.2,.06,.8,M.mats.goldDim);F.rotation.x=-.35,B(O,F,0,1,0);let U=new H(new te(.9,.03,.6),P);U.rotation.x=-.35,B(O,U,0,1.05,.02),Gt(t.x0+1.9,t.x0+2.9,n-.7,n+.7),U.userData.act="thuvien",F.userData.act="thuvien",M.acts.push(U,F),M.libLectern=O;let X=new Y({color:13772830,emissive:16726546,emissiveIntensity:.4,roughness:.6});[d-.25,f+.25].forEach(N=>{let Z=new H(new kt(.3,16,12),X);Z.scale.y=1.2,Z.position.set(t.x1+.6,3.3,N),o.add(Z),M.glows.push({pos:Z.position.clone(),size:1.1,color:16738874,nightBoost:!0})}),M.night.push({mat:X,on:2.2,off:.4}),M.libCenter=[e,n]}function O_(i){let t=Fl.zen,e=new Ct;i.add(e);let n=t.sx1-t.sx0,s=t.sz1-t.sz0,r=(t.sx0+t.sx1)/2,o=(t.sz0+t.sz1)/2,a=[[-3.2,-2.2,1],[2.6,1.6,1.3],[.6,-4.4,.7],[-1.8,3.6,.8],[4.4,-3.4,.6]],l=72,c=He(Math.round(n*l),Math.round(s*l),(U,X,N)=>{U.fillStyle="#e2dccd",U.fillRect(0,0,X,N);for(let G=0;G<9e3;G++)U.fillStyle=`rgba(${Math.random()<.5?"120,110,95":"255,255,250"},${.12+Math.random()*.15})`,U.fillRect(Math.random()*X,Math.random()*N,1.5,1.5);let Z=a.map(([G,j,et])=>[X/2+G*l,N/2+j*l,et*l*1.25]);U.lineWidth=3;for(let G=6;G<N;G+=13){U.beginPath();let j=!1;for(let et=0;et<=X;et+=4){if(Z.some(([yt,Et,$])=>Math.hypot(et-yt,G-Et)<$+91)){j=!1;continue}j?U.lineTo(et,G):(U.moveTo(et,G),j=!0)}U.strokeStyle="rgba(150,140,120,0.55)",U.stroke(),U.strokeStyle="rgba(255,255,250,0.5)",U.save(),U.translate(0,-3),U.stroke(),U.restore()}Z.forEach(([G,j,et])=>{for(let ot=1;ot<=7;ot++)U.beginPath(),U.arc(G,j,et+ot*13,0,Math.PI*2),U.strokeStyle="rgba(150,140,120,0.55)",U.stroke(),U.beginPath(),U.arc(G,j-2.5,et+ot*13,0,Math.PI*2),U.strokeStyle="rgba(255,255,250,0.45)",U.stroke()})}),h=new H(new Jt(n,s),new Y({map:c,roughness:1,normalMap:Kt("tex-pebble-n",n/2,s/2,!1),normalScale:new rt(.35,.35)}));h.rotation.x=-Math.PI/2,B(e,h,r,.05,o,!1),M.ground.push(h);let u=M.mats.beam;[[r,t.sz0,n+.3,.15],[r,t.sz1,n+.3,.15]].forEach(([U,X,N,Z])=>B(e,st(N,.14,Z,u),U,.07,X)),[[t.sx0,o],[t.sx1,o]].forEach(([U,X])=>B(e,st(.15,.14,s,u),U,.07,X)),Gt(t.sx0-.1,t.sx1+.1,t.sz0-.1,t.sz1+.1);let d=new Y({color:7828844,roughness:.95,map:Kt("tex-stone",1,1),normalMap:Kt("tex-stone-n",1,1,!1)}),f=new Y({color:6191668,roughness:1,map:Kt("tex-grass",1,1)});a.forEach(([U,X,N],Z)=>{let G=new ri(N,2),j=G.attributes.position;for(let yt=0;yt<j.count;yt++){let Et=new C().fromBufferAttribute(j,yt),$=1+.18*Math.sin(Et.x*3.1+Z)*Math.cos(Et.z*2.7)+.1*Math.sin(Et.y*5);Et.multiplyScalar($),Et.y<0&&(Et.y*=.3),j.setXYZ(yt,Et.x,Et.y*.7,Et.z)}G.computeVertexNormals();let et=new H(G,d);B(e,et,r+U,.05,o+X),et.rotation.y=Z;let ot=new H(new Pe(N*1.25,20),f);ot.rotation.x=-Math.PI/2,B(e,ot,r+U,.055,o+X,!1)});let g=Me("tex-floor",6,1,{color:10122582,roughness:.75}),x=t.deckZ;B(e,st(n+1.4,.16,2.6,g),r,.08,x),[-1,1].forEach(U=>B(e,st(n+1.4,.05,.08,M.mats.beam),r,.17,x+U*1.3,!1)),M.zenCushions=[];let m=new Y({color:14207920,roughness:.95,normalMap:Kt("tex-grass-n",2,2,!1),normalScale:new rt(.3,.3)});for(let U=0;U<5;U++){let X=r-4.8+U*2.4,N=new H(new gt(.36,.38,.18,24),m);B(e,N,X,.25,x-.3),N.userData.act="vuonthien",M.acts.push(N),M.zenCushions.push({x:X,z:x-.15,taken:null})}[t.sx0-.4,t.sx1+.4].forEach(U=>ji(e,U,x+1.1,.16,3,!0));let p=nn(n/2+1.4,1.6,.8,.5,0,{dragons:!1});p.position.set(r,3.15,x+.4),e.add(p);let v=t.sx1+1.2,y=t.sz1+.6,_=new H(Le([[0,0],[.55,0],[.62,.3],[.58,.55],[.46,.56],[.44,.4],[0,.38]],28),d);B(e,_,v,0,y);let S=new H(new Pe(.44,24),new Y({color:2703434,roughness:.05,metalness:.3}));S.rotation.x=-Math.PI/2,B(e,S,v,.5,y,!1),M.zenWater=S;let w=new Y({color:9282126,roughness:.6}),R=new H(new gt(.07,.07,1.1,10),w);B(e,R,v+.75,.55,y);let I=new H(new gt(.045,.045,.8,10),w);I.rotation.z=Math.PI/2-.15,B(e,I,v+.4,.98,y);let T=new H(new gt(.012,.02,.42,6),new Y({color:13625584,transparent:!0,opacity:.6,roughness:.1}));B(e,T,v+.02,.73,y,!1),B(e,new H(new gt(.02,.02,.5,6),M.mats.trunk),v-.45,.7,y+.1).rotation.z=1.2,Se(v,y,.9),_.userData.act="vuonthien",M.acts.push(_),[[t.sx0+1,t.sz0-1.6],[r-2,t.sz0-2.2],[r+3,t.sz0-1.8],[t.sx1+1.6,t.sz0+1.5],[t.sx1+1.8,o+1],[t.sx1+1.7,t.sz1-3.5]].forEach(([U,X])=>Ol(i,U,X,11)),ia(i,t.sx0-1,t.sz0+1.2),ia(i,t.sx0-1,t.sz1-1);let E=new Y({color:10127957,roughness:.8}),P=(U,X,N,Z)=>{let G=Math.hypot(N-U,Z-X),j=Math.floor(G/.16),et=new gt(.035,.035,.9,6),ot=new Vt(et,E,j),yt=new Wt;for(let Et=0;Et<j;Et++){let $=Et/j;yt.makeTranslation(U+(N-U)*$,.45+Et%2*.05,X+(Z-X)*$),ot.setMatrixAt(Et,yt)}ot.castShadow=!0,e.add(ot),[.3,.75].forEach(Et=>{let $=st(G,.04,.04,M.mats.beam);$.position.set((U+N)/2,Et,(X+Z)/2),$.rotation.y=-Math.atan2(Z-X,N-U),e.add($)})};P(t.sx0-1.8,t.sz0-.6,t.sx0-1.8,x+1.4),P(t.sx0-1.8,x+1.4,33,x+1.4),P(36.4,x+1.4,t.sx1+2.6,x+1.4),Gt(t.sx0-1.95,t.sx0-1.65,t.sz0-.6,x+1.5),Gt(t.sx0-1.9,33,x+1.3,x+1.5),Gt(36.4,t.sx1+2.6,x+1.3,x+1.5);let O=Bl("V\u01AF\u1EDCN THI\u1EC0N",2.4,.66,120),F=new Ct;F.position.set(34.7,0,x+1.45),i.add(F),[-1.5,1.5].forEach(U=>B(F,st(.14,2.8,.14,M.mats.beam),U,1.4,0)),B(F,st(3.5,.12,.2,M.mats.beam),0,2.75,0),O.position.set(0,2.3,.08),F.add(O),M.zenCenter=[r,o]}function z_(i){Ws(i,-13.6,-9,0,"\u2190 TH\u01AF VI\u1EC6N PH\u1EACT PH\xC1P",3),Ws(i,13.6,-9,0,"V\u01AF\u1EDCN THI\u1EC0N \u2192",2.6),Ws(i,-2.6,-6.2,0,"KHU TH\u1EAEP H\u01AF\u01A0NG",2.6),Ws(i,4.6,27,0,"S\xC2N CH\xD9A",2),Ws(i,-27.6,12.6,0,"\u2190 B\u1EBEP CHAY \xB7 TRAI \u0110\u01AF\u1EDCNG",3.4),Ws(i,16.4,-11,0,"H\u1ED2 HOA \u0110\u0102NG \u2191",2.6),k_(i,1.9,-1)}function k_(i,t,e){let n=new Ct;n.position.set(t,0,e),i.add(n);let s=new H(Le([[0,0],[.3,0],[.3,.06],[.12,.14],[.06,.3],[.05,.9],[.09,.95],[.22,1],[.24,1.04],[0,1.04]],20),M.mats.bronze);s.castShadow=!0,n.add(s);let r=new H(new gt(.07,.07,.3,14),new Y({color:13116442,roughness:.5}));r.position.y=1.19,n.add(r),M.glows.push({pos:new C(t,1.4,e),size:.7,color:16756816,flame:!0,fs:.14}),s.userData.act="thaphuong",M.acts.push(s),Se(t,e,.65),M.candleStand=new C(t,1.38,e)}function Qd(i){H_(i),U_(i),N_(i),F_(i),B_(i),O_(i),z_(i)}var Fl,Xs,na,Nl,$d,Jd,jd=sn(()=>{wn();Er();Ii();ai();Fl={lib:{x0:-38,x1:-28,z0:-28,z1:-16,door:[-23.8,-20.2]},zen:{sx0:28.5,sx1:41,sz0:-31.5,sz1:-17.5,deckZ:-15.3},benches:[[7.4,3,1],[-7.4,1.5,-1],[6.8,19.5,1],[-7.6,17.5,-1]]};Xs=null,na=null,Nl=null,$d=null,Jd=null});function ef(){return He(256,256,i=>{i.fillStyle="#8a6438",i.fillRect(0,0,256,256);for(let t=0;t<256;t+=16)for(let e=0;e<256;e+=16)i.fillStyle=(e+t)/16%2?"#a77b46":"#6f4c28",i.fillRect(e+1,t+1,14,14)})}function V_(i,t,e,n,s){let r=Le([[0,0],[.22,0],[.3,.12],[.36,.36],[.33,.6],[.2,.74],[.17,.8],[.19,.84],[0,.84]].map(([l,c])=>[l*n,c*n]),24),o=new H(r,new Y({color:s,roughness:.32,metalness:.05}));B(i,o,t,Gl.floor,e);let a=new H(new gt(.2*n,.21*n,.04*n,20),M.mats.darkwood);return B(i,a,t,Gl.floor+.85*n,e),o}function zl(i,t,e,n,s=1,r){let o=new Ct;o.position.set(t,e,n),i.add(o);let a=new H(Le([[0,0],[.25,.01],[.36,.1],[.4,.26],[.38,.4],[.4,.42],[.37,.43]].map(([l,c])=>[l*s,c*s]),28),r||M.mats.bronze);return a.castShadow=!0,o.add(a),[-1,1].forEach(l=>{let c=new H(new Fe(.06*s,.015*s,6,12),M.mats.bronze);c.position.set(l*.41*s,.36*s,0),c.rotation.y=Math.PI/2,o.add(c)}),o}function kl(i,t,e,n,s){let r=new Ct;r.position.set(t,e,n),i.add(r);let o=new Y({map:ef(),roughness:.9}),a=new H(Le([[0,0],[.24,0],[.3,.16],[.31,.18],[0,.18]],20),o);a.castShadow=!0,r.add(a);let l={carrot:15234590,pumpkin:14191142,greens:4164142,mush:14272680,tofu:15920344,cabbage:10274666}[s],c=new Y({color:l,roughness:.7});for(let h=0;h<9;h++){let u=h*2.4,d=.05+h%3*.07,f;s==="carrot"?(f=new H(new cn(.035,.24,8),c),f.rotation.z=Math.PI/2,f.rotation.y=u):s==="greens"?(f=new H(new cn(.06,.3,6),c),f.rotation.x=.4,f.rotation.y=u):s==="tofu"?(f=new H(new te(.1,.06,.1),c),f.rotation.y=u):s==="mush"?f=new H(new kt(.05,10,6,0,6.3,0,1.6),c):(f=new H(new kt(s==="pumpkin"?.1:.09,12,8),c),f.scale.y=.8),f.position.set(Math.cos(u)*d,.2+(h>5?.06:0),Math.sin(u)*d),f.castShadow=!0,r.add(f)}return r}function nf(i){let t=Gl,e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,s=3.4,r=.3,o=t.floor,a=new Ct;i.add(a),M.kitGroup=a,M.updaters=M.updaters||[],M.smokeEmit=M.smokeEmit||[],B(a,st(t.x1-t.x0+.8,o,t.z1-t.z0+.8,M.mats.stoneS),e,o/2,n,!1);let l=new H(new Jt(t.x1-t.x0-.3,t.z1-t.z0-.3),new Y({color:11561546,roughness:.85,map:He(512,512,k=>{k.fillStyle="#8c4a32",k.fillRect(0,0,512,512);for(let K=0;K<8;K++)for(let D=0;D<8;D++){let mt=150+Math.random()*40|0;k.fillStyle=`rgb(${mt},${mt*.55|0},${mt*.4|0})`,k.fillRect(D*64+2,K*64+2,60,60)}})}));l.material.map.wrapS=l.material.map.wrapT=Vi,l.material.map.repeat.set(1.25,1.25),l.rotation.x=-Math.PI/2,B(a,l,e,o+.005,n,!1);let c=(k,K,D,mt,ct=s,xt=0)=>{let lt=G_(st(D,ct,mt,M.mats.plaster));if(B(a,lt,k,xt+ct/2,K),!xt){let Lt=st(D+.03,.45,mt+.03,M.mats.darkwood);B(a,Lt,k,.22,K,!1)}},[h,u]=t.door;c(t.x0,n,r,t.z1-t.z0),c(e,t.z0,t.x1-t.x0,r),c(t.x0+1.8,t.z1,3.6,r),c(t.x1-2.6,t.z1,5.2,r),c(t.x0+4.4,t.z1,1.6,r,1),c(t.x0+4.4,t.z1,1.6,r,.6,s-.6),c(t.x1,(t.z0+h)/2,r,h-t.z0),c(t.x1,(u+t.z1)/2,r,t.z1-u),c(t.x1,(h+u)/2,r,u-h,s-2.6,2.6),Gt(t.x0-.3,t.x0+.3,t.z0-.3,t.z1+.3),Gt(t.x0-.3,t.x1+.3,t.z0-.3,t.z0+.3),Gt(t.x0-.3,t.x1+.3,t.z1-.3,t.z1+.3),Gt(t.x1-.3,t.x1+.3,t.z0,h),Gt(t.x1-.3,t.x1+.3,u,t.z1);{let k=[];for(let D=-4;D<=4;D++){let mt=new te(.05,1.6,.34);mt.translate(D*.17,0,0),k.push(mt)}let K=new H(en(k),M.mats.beam);K.position.set(t.x0+4.4,1.8,t.z1),a.add(K)}[[t.x1+1.1,t.z0+.5],[t.x1+1.1,h-.2],[t.x1+1.1,u+.2],[t.x1+1.1,t.z1-.5]].forEach(([k,K])=>ji(a,k,K,0,s,!0));let d=nn(6.6,6.2,2.3,.9,0,{dragons:!1});d.rotation.y=Math.PI/2,d.position.set(e+.55,s+.04,n),a.add(d),d.traverse(k=>{k.isMesh&&k.material===M.mats.roof&&M.camOcc.push(k)}),M.interiors.push({name:"bepchay",x0:t.x0+.15,x1:t.x1-.15,z0:t.z0+.15,z1:t.z1-.15,ceil:s-.3,roofs:[d],pmax:.48});let f=new H(new Jt(t.x1-t.x0,t.z1-t.z0),new Y({color:4861984,roughness:.85,map:Kt("tex-floor",4,4),side:Qt}));f.rotation.x=Math.PI/2,B(a,f,e,s-.02,n,!1,!1);for(let k=0;k<5;k++)B(a,st(.18,.22,t.z1-t.z0,M.mats.beam),t.x0+1+k*2.1,s-.14,n,!1);B(a,st(.7,2.2,.7,M.mats.plaster),t.x0+.9,s+1.6,t.z0+2.4),B(a,st(.9,.15,.9,M.mats.darkwood),t.x0+.9,s+2.75,t.z0+2.4),M.smokeEmit.push({pos:new C(t.x0+.9,s+2.9,t.z0+2.4),rate:3,big:3.2,op:.22,color:12104878});{let k=Oe("B\u1EBEP CHAY \xB7 TRAI \u0110\u01AF\u1EDCNG",{w:1024,h:160,size:84,fill:"#4a1c10",stroke:"#2a0a04"}),K=new H(new te(3.4,.55,.08),[M.mats.beam,M.mats.beam,M.mats.beam,M.mats.beam,new Y({map:k,roughness:.6}),M.mats.beam]);K.position.set(t.x1+.18,2.95,(h+u)/2),K.rotation.y=Math.PI/2,a.add(K)}let g=t.x0+.75,x=t.z0+1.3,m=new Y({color:10115646,roughness:.95,map:Kt("tex-stone",2,1)});B(a,st(1.3,.8,4.2,m),g,o+.4,x+2.1),Gt(g-.7,g+.7,x,x+4.2),M.kitFires=[],[.7,2.1,3.5].forEach((k,K)=>{let D=x+k,mt=new H(new Jt(.42,.32),new Ie({color:16742944}));mt.position.set(g+.66,o+.28,D),mt.rotation.y=Math.PI/2,a.add(mt),M.glows.push({pos:new C(g+.72,o+.32,D),size:.9,color:16742954,flame:!0,fs:.16});for(let xt=0;xt<3;xt++){let lt=new H(new gt(.035,.04,.7,6),M.mats.trunk);lt.rotation.z=Math.PI/2,lt.rotation.y=(xt-1)*.25,lt.position.set(g+.85,o+.12+xt*.03,D+(xt-1)*.08),a.add(lt)}let ct=K===1?null:zl(a,g,o+.8,D,1.1);M.kitFires.push(new C(g+.7,o+.3,D)),M.smokeEmit.push({pos:new C(g,o+1.35,D),rate:1.6,big:1.4,op:.18,color:16052974,kitchen:!0})});{let k=x+2.1;zl(a,g,o+.8,k,.9);let K=new Y({map:ef(),roughness:.85,color:15255696}),D=new H(new gt(.3,.3,.42,20,1,!0),K);B(a,D,g,o+1.37,k);let mt=new H(new kt(.31,18,8,0,6.3,0,1.2),K);B(a,mt,g,o+1.56,k)}let p=new Ci(16747066,6,7,1.6);p.position.set(g+1,o+.6,x+2.1),a.add(p),M.updaters.push((k,K)=>{p.intensity=5+Math.sin(K*11)*.8+Math.sin(K*23.7)*.6}),B(a,st(2.6,.06,.4,M.mats.darkwood),t.x0+3.3,2.1,t.z0+.32,!1),B(a,st(2.6,.06,.4,M.mats.darkwood),t.x0+3.3,1.6,t.z0+.32,!1);for(let k=0;k<6;k++){let K=new H(new gt(.11,.07,.08,14),new Y({color:[15327952,7047848,15327952][k%3],roughness:.3}));B(a,K,t.x0+2.3+k*.4,2.17,t.z0+.32);let D=K.clone();B(a,D,t.x0+2.3+k*.4,1.67,t.z0+.32)}[[t.x0+2,t.z0+.75,1,5911584],[t.x0+2.8,t.z0+.7,.85,4086330],[t.x0+3.55,t.z0+.72,.95,7029798],[t.x0+4.3,t.z0+.66,.72,4864554],[t.x0+4.9,t.z0+.62,.6,8015920]].forEach(([k,K,D,mt])=>{V_(a,k,K,D,mt),Se(k,K,.36*D)});let v=t.x0+3,y=t.z0+4.4,_=st(2.2,.08,1,M.mats.darkwood);B(a,_,v,o+.82,y),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([k,K])=>B(a,st(.08,.8,.08,M.mats.beam),v+k*1,o+.41,y+K*.42)),Gt(v-1.15,v+1.15,y-.55,y+.55),_.userData.act="bepchay",M.acts.push(_);let S=st(.5,.04,.32,new Y({color:13146722,roughness:.7}));B(a,S,v+.4,o+.88,y);let w=st(.26,.01,.05,new Y({color:13685976,metalness:.9,roughness:.3}));B(a,w,v+.42,o+.91,y+.05),kl(a,v-.6,o+.86,y-.15,"greens"),kl(a,v-.15,o+.86,y+.2,"carrot"),[["pumpkin",t.x0+.9,t.z1-.7],["cabbage",t.x0+1.6,t.z1-.6],["mush",t.x0+2.3,t.z1-.7],["tofu",t.x0+.9,t.z1-1.4],["greens",t.x0+1.6,t.z1-1.4]].forEach(([k,K,D])=>kl(a,K,o,D,k)),Gt(t.x0,t.x0+2.7,t.z1-1.8,t.z1);let R=t.x0+3,I=t.z0+7.3;M.bigPot={x:R,z:I};let T=new H(new Fe(.62,.12,8,20),new Y({color:7827560,roughness:1,map:Kt("tex-stone",2,1)}));T.rotation.x=Math.PI/2,B(a,T,R,o+.12,I);for(let k=0;k<3;k++){let K=k*2.094,D=new H(new gt(.03,.03,.7,6),M.mats.bronze);D.position.set(R+Math.cos(K)*.5,o+.33,I+Math.sin(K)*.5),D.rotation.set(Math.sin(K)*.18,0,-Math.cos(K)*.18),a.add(D)}M.glows.push({pos:new C(R,o+.2,I),size:1.1,color:16742954,flame:!0,fs:.2});let E=zl(a,R,o+.52,I,1.6);E.children[0].userData.act="noichung",M.acts.push(E.children[0]);let P=new H(new Pe(.56,24),new Y({color:13146698,roughness:.25,emissive:2757636}));P.rotation.x=-Math.PI/2,P.position.set(R,o+.52+.58,I),a.add(P),M.potSoup=P,P.userData.act="noichung",M.acts.push(P),M.smokeEmit.push({pos:new C(R,o+1.2,I),rate:2.4,big:2,op:.2,color:16316144,kitchen:!0}),Se(R,I,.8),M.potItems=[],M.potGroup=new Ct,M.potGroup.position.set(R,o+1.1,I),a.add(M.potGroup);let O=t.x1-4.7,F=t.x1-.9,U=t.z0+1.8,X=F-O,N=(O+F)/2,Z=st(X,.08,1.2,new Y({color:8014378,roughness:.55,map:Kt("tex-floor",3,1)}));B(a,Z,N,o+.76,U),Z.userData.act="traiduong",M.acts.push(Z);for(let k=0;k<4;k++)B(a,st(.1,.74,.1,M.mats.beam),O+.2+(k>1?X-.4:0),o+.38,U+(k%2?.5:-.5));[-1,1].forEach(k=>{B(a,st(X,.06,.36,M.mats.darkwood),N,o+.45,U+k*.92);for(let K=0;K<3;K++)B(a,st(.06,.42,.06,M.mats.beam),O+.3+K*(X-.6)/2,o+.22,U+k*.92)}),Gt(O,F,U-1.15,U+1.15),M.tableSlots=[];for(let k=0;k<8;k++)M.tableSlots.push(new C(O+.45+(k>>1)*(X-.9)/3,o+.8,U+(k%2?.28:-.28)));M.tableDishes=new Ct,a.add(M.tableDishes),M.tablePos=[N,U+1.5];for(let k=0;k<5;k++){let K=O+.35+k*(X-.7)/4;[-1,1].forEach(D=>{let mt=new H(new gt(.07,.045,.06,12),new Y({color:15525074,roughness:.35}));B(a,mt,K,o+.83,U+D*.5)})}[O+1,F-1].forEach(k=>{let K=new H(new kt(.22,14,10),new Y({color:16769184,emissive:16756816,emissiveIntensity:1.2}));K.scale.y=1.2,B(a,K,k,s-.6,U,!1),M.glows.push({pos:new C(k,s-.6,U),size:1.3,color:16758880})});let G=new Ci(16763015,5,9,1.4);G.position.set(e+1,s-.7,n),a.add(G);let j=t.x0+.4,et=t.x1-.6,ot=t.z1+1.2,yt=t.z1+4.6,Et=2.3,$=new Y({color:11045458,roughness:.8});{let k=new gt(.05,.06,Et,7),K=[],D=new Zt;for(let lt=j;lt<=et+.01;lt+=(et-j)/4)[ot,yt].forEach(Lt=>{K.push([lt,Et/2,Lt]),Se(lt,Lt,.12)});let mt=new Vt(k,$,K.length);K.forEach(([lt,Lt,Rt],L)=>{D.position.set(lt,Lt,Rt),D.rotation.set(0,0,0),D.scale.set(1,1,1),D.updateMatrix(),mt.setMatrixAt(L,D.matrix)}),a.add(mt);let ct=[];for(let lt=j;lt<=et+.01;lt+=.6){let Lt=new gt(.025,.025,yt-ot,5);Lt.rotateX(Math.PI/2),Lt.translate(lt-(j+et)/2,0,0),ct.push(Lt)}for(let lt=ot;lt<=yt+.01;lt+=.6){let Lt=new gt(.025,.025,et-j,5);Lt.rotateZ(Math.PI/2),Lt.translate(0,0,lt-(ot+yt)/2),ct.push(Lt)}let xt=new H(en(ct),$);xt.position.set((j+et)/2,Et,(ot+yt)/2),a.add(xt)}let ut=new Pe(.22,7),St=new Y({color:5016114,roughness:.8,side:Qt}),dt=420,Nt=new Vt(ut,St,dt),qt=new Zt;for(let k=0;k<dt;k++)qt.position.set(j+Math.random()*(et-j),Et+.02+Math.random()*.12,ot+Math.random()*(yt-ot)),qt.rotation.set(-Math.PI/2+(Math.random()-.5)*.9,Math.random()*6,(Math.random()-.5)*.9),qt.scale.setScalar(.7+Math.random()*.7),qt.updateMatrix(),Nt.setMatrixAt(k,qt.matrix);Nt.castShadow=!0,a.add(Nt);let Yt=new Y({color:9418842,roughness:.55}),ue=new Y({color:6261306,roughness:.6});for(let k=0;k<16;k++){let K=j+.4+Math.random()*(et-j-.8),D=ot+.3+Math.random()*(yt-ot-.6),mt=k%3===0,ct=new H(mt?new si(.06,.45,4,10):Le([[0,0],[.1,.03],[.13,.12],[.07,.24],[.06,.34],[.03,.4],[0,.42]],14),mt?ue:Yt);B(a,ct,K,Et-(mt?.36:.48),D);let xt=new H(new gt(.008,.008,.12,4),St);B(a,xt,K,Et-.06,D,!1)}M.kitCenter=new C(e,1,n)}function _v(i,t){if(!M.tableDishes)return null;let e=M.tableSlots[t%M.tableSlots.length],n=new Ct;n.position.copy(e);let s=new H(new gt(.2,.15,.04,22),new Y({color:15920352,roughness:.3}));s.position.y=.02,n.add(s);let[r,o]=tf[i]||tf[0],a=new Y({color:r,roughness:.5}),l=new Y({color:o,roughness:.5});if(i===2){let c=new H(new kt(.13,16,10,0,6.3,0,1.4),a);c.position.y=.04,n.add(c)}else if(i===4)for(let c=0;c<5;c++){let h=new H(new si(.025,.14,4,8),a);h.rotation.z=Math.PI/2,h.rotation.y=c*.3,h.position.set(0,.07,(c-2)*.055),n.add(h)}else{let c=new H(Le([[0,0],[.09,0],[.15,.06],[.17,.12],[.16,.125]],20),new Y({color:15525074,roughness:.35,side:Qt}));c.position.y=.03,n.add(c);let h=new H(new Pe(.15,18),a);h.rotation.x=-Math.PI/2,h.position.y=.14,n.add(h);for(let u=0;u<6;u++){let d=new H(new te(.04,.03,.04),l);d.position.set((Math.random()-.5)*.18,.155,(Math.random()-.5)*.18),n.add(d)}}for(M.tableDishes.add(n);M.tableDishes.children.length>8;)M.tableDishes.remove(M.tableDishes.children[0]);return n}function Mv(i){M.potSoup&&M.potSoup.material.color.setHSL(.09,.5+i*.05,.42+i*.03)}var Gl,G_,tf,sf=sn(()=>{wn();Er();Ii();ai();Gl={x0:-40.5,x1:-30.5,z0:2,z1:12,door:[5.4,8.8],floor:.12},G_=i=>(M.camOcc.push(i),i);tf=[[9067050,15128240],[14196816,5937722],[13116442,13116442],[10467402,15786672],[14195264,14195264],[13146698,8034874]]});var Sr,rf=sn(()=>{wn();Sr=class i extends H{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.camera=new Ze;let n=this,s=e.color!==void 0?new At(e.color):new At(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||i.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,h=new In,u=new C,d=new C,f=new C,g=new Wt,x=new C(0,0,-1),m=new le,p=new C,v=new C,y=new le,_=new Wt,S=this.camera,w=new Dn(r,o,{samples:c,type:$i}),R=new an({name:l.name!==void 0?l.name:"unspecified",uniforms:Rl.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});R.uniforms.tDiffuse.value=w.texture,R.uniforms.color.value=s,R.uniforms.textureMatrix.value=_,this.material=R,this.onBeforeRender=function(I,T,E){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(E.matrixWorld),g.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),p.subVectors(d,f),p.dot(u)>0)return;p.reflect(u).negate(),p.add(d),g.extractRotation(E.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(f),v.subVectors(d,x),v.reflect(u).negate(),v.add(d),S.position.copy(p),S.up.set(0,1,0),S.up.applyMatrix4(g),S.up.reflect(u),S.lookAt(v),S.far=E.far,S.updateMatrixWorld(),S.projectionMatrix.copy(E.projectionMatrix),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(S.projectionMatrix),_.multiply(S.matrixWorldInverse),_.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,d),h.applyMatrix4(S.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let P=S.projectionMatrix;y.x=(Math.sign(m.x)+P.elements[8])/P.elements[0],y.y=(Math.sign(m.y)+P.elements[9])/P.elements[5],y.z=-1,y.w=(1+P.elements[10])/P.elements[14],m.multiplyScalar(2/m.dot(y)),P.elements[2]=m.x,P.elements[6]=m.y,P.elements[10]=m.z+1-a,P.elements[14]=m.w,n.visible=!1;let O=I.getRenderTarget(),F=I.xr.enabled,U=I.shadowMap.autoUpdate;I.xr.enabled=!1,I.shadowMap.autoUpdate=!1,I.setRenderTarget(w),I.state.buffers.depth.setMask(!0),I.autoClear===!1&&I.clear(),I.render(T,S),I.xr.enabled=F,I.shadowMap.autoUpdate=U,I.setRenderTarget(O);let X=E.viewport;X!==void 0&&I.state.viewport(X),n.visible=!0},this.getRenderTarget=function(){return w},this.dispose=function(){w.dispose(),n.material.dispose()}}};Sr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`}});function W_(i=1916214){return new an({transparent:!0,depthWrite:!1,uniforms:{t:{value:0},deep:{value:new At(i)},sky:{value:new At(12375264)},sun:{value:new C(.4,.8,.3).normalize()},night:{value:0},rip:{value:Array.from({length:8},()=>new le(0,0,-99,0))},skyMap:{value:Kt("sky",1,1)}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float t; uniform vec3 deep; uniform vec3 sky; uniform vec3 sun; uniform vec4 rip[8]; uniform sampler2D skyMap; uniform float night; varying vec3 vW;
      void main(){
        vec2 p = vW.xz; float h=0.; vec2 g=vec2(0.);
        g += vec2(cos(p.x*1.7+t*1.3), cos(p.y*1.3-t*1.1))*0.05;
        g += vec2(cos(p.x*3.9-p.y*2.1+t*2.1), cos(p.y*4.3+p.x*1.7+t*1.7))*0.025;
        g += vec2(cos(p.x*9.0+t*3.0+p.y*3.), sin(p.y*8.0-t*2.6))*0.012;
        for(int i=0;i<8;i++){ vec4 r=rip[i]; float age=t-r.z; if(age<0.||age>3.5) continue; vec2 d=p-r.xy; float dist=length(d); float front=age*1.15; float k=exp(-pow((dist-front)*5.,2.))*(1.-age/3.5)*r.w; g += normalize(d+1e-4)*k*0.6*sin((dist-front)*30.); }
        vec3 n = normalize(vec3(-g.x,1.,-g.y));
        vec3 v = normalize(cameraPosition - vW);
        float fres = 0.04 + 0.96*pow(1.-max(dot(n,v),0.),5.);
        vec3 r = reflect(-v,n);
        vec2 suv = vec2(atan(r.x,r.z)/6.2832+0.5, clamp(r.y,0.,1.)*0.5+0.4);
        vec3 refl = mix(sky, texture2D(skyMap,suv).rgb, 0.7) * (1.-night*0.85);
        float spec = pow(max(dot(r, normalize(sun)),0.), 220.)*(1.-night*0.7);
        vec3 col = mix(deep, refl, clamp(fres*1.25,0.,1.));
        col += vec3(1.,0.95,0.8)*spec*2.;
        float a = mix(0.55, 0.95, fres);
        gl_FragColor = vec4(col, a);
        #include <colorspace_fragment>
      }`})}function sa(i,t,e,n=1,s){i.uniforms.rip.value[X_++%8].set(t,e,s,n)}function of(i,t,e,n,s,r,o){let a=new Ct;a.position.set(t,0,e),i.add(a);let l=new Si;l.absellipse(0,0,n+.55,s+.55,0,Math.PI*2);let c=new ni;c.absellipse(0,0,n,s,0,Math.PI*2,!0),l.holes.push(c);let h=new H(new Wo(l,{depth:.5,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:2,curveSegments:64}),new Y({color:12432806,roughness:.95,map:Kt("tex-stone",.4,.4),normalMap:Kt("tex-stone-n",.4,.4,!1)}));h.rotation.x=-Math.PI/2,h.castShadow=h.receiveShadow=!0,a.add(h);let u=new H(new Pe(1,48),M.mats.pebble.clone());u.material.color.set(6974040),u.scale.set(n,s,1),u.rotation.x=-Math.PI/2,u.position.y=.04,u.receiveShadow=!0,a.add(u);let d=W_(o),f=new H(new Pe(1,64),d);f.scale.set(n,s,1),f.rotation.x=-Math.PI/2,f.position.y=.42,f.renderOrder=2,a.add(f),f.userData.act=r?"hoadang":"hoca",M.acts.push(f),M.waters=(M.waters||[]).concat(d);for(let w=0;w<9;w++){let R=(w/8-.5)*2*(n-Math.min(n,s)*.6),I=s*Math.sqrt(Math.max(0,1-(R/n)**2));M.circles.push({x:t+R,z:e,r:Math.max(I,.1)+.7})}let g=He(256,256,w=>{let R=w.createRadialGradient(128,128,10,128,128,128);R.addColorStop(0,"#6f9a3c"),R.addColorStop(1,"#3e6a2a"),w.fillStyle=R,w.beginPath(),w.moveTo(128,128),w.arc(128,128,126,.12,Math.PI*2-.12),w.closePath(),w.fill(),w.strokeStyle="rgba(190,220,140,0.35)",w.lineWidth=2;for(let I=0;I<18;I++){let T=.2+I/18*6;w.beginPath(),w.moveTo(128,128),w.lineTo(128+Math.cos(T)*120,128+Math.sin(T)*120),w.stroke()}}),x=new Y({map:g,transparent:!0,alphaTest:.5,roughness:.6,side:Qt}),m=[],p=r?22:9,v=new Pe(1,24),y=new Vt(v,x,p);y.receiveShadow=!0;let _=new Zt;for(let w=0;w<p;w++){let R=Math.random()*6.28,I=.25+Math.random()*.7,T=.35+Math.random()*.45,E=Math.cos(R)*I*n*.9,P=Math.sin(R)*I*s*.9,O=.44+w*6e-4;_.position.set(E,O,P),_.rotation.set(-Math.PI/2,0,Math.random()*6),_.scale.set(T,T,T),_.updateMatrix(),y.setMatrixAt(w,_.matrix),m.push({position:{x:E,y:O,z:P}})}a.add(y);let S=r?9:3;for(let w=0;w<S;w++){let R=m[w],I=ts(w%3===0?16642800:15966392);I.position.set(R.position.x+.1,.48+Math.random()*.25,R.position.z),I.scale.setScalar(.8+Math.random()*.4),a.add(I)}return{g:a,water:f,wm:d,pads:m,cx:t,cz:e,rx:n,rz:s}}function q_(){return Rr||(Rr=new kt(.12,10,8,0,Math.PI*2,0,Math.PI/2),Rr.scale(.55,1.3,.2),Rr.translate(0,0,.03)),Rr}function Y_(i){return Vl.has(i)||Vl.set(i,new Y({color:i,roughness:.55,side:Qt,emissive:i,emissiveIntensity:.06})),Vl.get(i)}function ts(i=16098232){let t=new Ct,e=Y_(i),n=q_(),s=0;for(let c=0;c<3;c++)s+=8-c*2;let r=new Vt(n,e,s);r.castShadow=!0;let o=new Zt,a=0;for(let c=0;c<3;c++){let h=8-c*2;for(let u=0;u<h;u++){let d=u/h*6.28+c*.4;o.position.set(Math.cos(d)*.04*(3-c),0,Math.sin(d)*.04*(3-c)),o.rotation.order="YXZ",o.rotation.set(.9-c*.32,-d+Math.PI/2,0),o.scale.set(1,1,1),o.updateMatrix(),r.setMatrixAt(a++,o.matrix)}}t.add(r),Wl||(Wl=new Y({color:15255616,roughness:.6}));let l=new H(new gt(.04,.03,.04,10),Wl);return l.position.y=.04,t.add(l),t}function Z_(i){return He(256,256,(t,e)=>{let n=i.base,s=i.spots;t.fillStyle=n,t.fillRect(0,0,e,e);let r=(a,l)=>a+Math.random()*(l-a);for(let a=0;a<i.n;a++){let l=s[a%s.length];t.fillStyle=l,t.beginPath();let c=r(.28,.72)*e,h=r(.12,.85)*e;t.ellipse(c,h,r(18,46),r(20,52),r(0,3),0,7),t.fill()}let o=t.createLinearGradient(0,0,e,0);o.addColorStop(0,"rgba(255,250,240,0.85)"),o.addColorStop(.22,"rgba(255,250,240,0)"),o.addColorStop(.78,"rgba(255,250,240,0)"),o.addColorStop(1,"rgba(255,250,240,0.85)"),t.fillStyle=o,t.fillRect(0,0,e,e),t.globalAlpha=.12,t.strokeStyle="#000";for(let a=10;a<e;a+=9)for(let l=a/9%2*6;l<e;l+=12)t.beginPath(),t.arc(l,a,6,.2,Math.PI-.2),t.stroke();t.globalAlpha=1,i.tancho&&(t.fillStyle="#e02a18",t.beginPath(),t.arc(e*.5,e*.12,22,0,7),t.fill()),i.metal&&(t.globalAlpha=.25,t.fillStyle="#fff",t.fillRect(e*.45,0,e*.1,e),t.globalAlpha=1)})}function $_(i){let t=new ri(i,4),e=t.attributes.position,n=Math.random()*10;for(let s=0;s<e.count;s++){let r=new C().fromBufferAttribute(e,s),o=1+Math.sin(r.x*7/i+n)*Math.cos(r.y*5/i)*.12+Math.sin(r.z*11/i+r.x*3)*.06-Math.max(0,Math.sin(r.y*4/i+n))*.08;r.multiplyScalar(o),e.setXYZ(s,r.x,r.y,r.z)}return t.computeVertexNormals(),t}function Av(){return ze.mineFish}function Cv(){return ze.lastFeed}function J_(i,t){let e=new Ct,n=[[.001,.36],[.05,.33],[.085,.24],[.1,.12],[.095,0],[.075,-.15],[.045,-.3],[.025,-.38],[.001,-.4]].map(x=>new rt(x[0],x[1])),s=new ii(n,18);s.rotateX(Math.PI/2),s.scale(1,.78,1);let r={bend:{value:0},ph:{value:Math.random()*6}},o=new Y({map:Z_(i),roughness:i.metal?.25:.4,metalness:i.metal?.5:.05});cf(o,r);let a=new H(s,o);a.castShadow=!0,e.add(a);let l=new At(i.fin||"#ffffff"),c=new Y({color:l,transparent:!0,opacity:.8,side:Qt,roughness:.5});cf(c,r);let h=new me,u=[0,0,-.37,-.13,.02,-.6,-.04,0,-.52,0,0,-.37,-.04,0,-.52,.04,0,-.52,0,0,-.37,.04,0,-.52,.13,.02,-.6];h.setAttribute("position",new Xt(u,3)),h.computeVertexNormals();let d=new H(h,c);e.add(d),[-1,1].forEach(x=>{let m=new me;m.setAttribute("position",new Xt([x*.08,-.03,.14,x*.2,-.05,.02,x*.08,-.03,.04],3)),m.computeVertexNormals();let p=new H(m,c);e.add(p)});let f=new me;f.setAttribute("position",new Xt([0,.07,.1,0,.12,-.05,0,.06,-.2],3)),f.computeVertexNormals(),e.add(new H(f,c));let g=new Y({color:1118481,roughness:.2});return[-1,1].forEach(x=>{let m=new H(new kt(.014,6,6),g);m.position.set(x*.062,.025,.25),e.add(m)}),e.scale.setScalar(t*1.35),{g:e,uni:r}}function Iv(i){let[t,e,n,s]=he.lotus;M.lotusPond=of(i,t,e,n,s,!0,2112048);let[r,o,a,l]=he.koi,c=of(i,r,o,a,l,!1,1718848);M.koiPond=c,ze.pond=c;let h=new Y({color:8157808,roughness:1,map:Kt("tex-stone",1,1),normalMap:Kt("tex-stone-n",1,1,!1),normalScale:new rt(2,2),flatShading:!0}),u=new Ct;u.position.set(r-a*.55,0,o-l*.2),i.add(u),[[0,.9,0,.9],[.5,.5,.3,.6],[-.4,.45,.2,.55],[.1,1.7,-.1,.55],[0,2.3,.05,.32]].forEach(([f,g,x,m])=>{let p=new H($_(m),h);p.position.set(f,g,x),p.scale.set(1,1.3,.9),p.rotation.set(Math.random(),Math.random(),0),p.castShadow=p.receiveShadow=!0,u.add(p)});let d=new H(K_(.5),new Y({color:5208628,roughness:.9,flatShading:!0}));d.position.set(.15,2.65,0),u.add(d),M.fountain=new C(r-a*.55+.45,1.9,o-l*.2+.5);for(let f=0;f<13;f++)Q_(f,.6+Math.random()*.45);return c}function K_(i){let t=new ri(i,1),e=t.attributes.position;for(let n=0;n<e.count;n++){let s=.8+Math.random()*.4;e.setXYZ(n,e.getX(n)*s,e.getY(n)*s*.7,e.getZ(n)*s)}return t.computeVertexNormals(),t}function Q_(i,t=1,e,n){let s=ze.pond,r=af[i%af.length],{g:o,uni:a}=J_(r,t),l=Math.random()*6.28,c={g:o,uni:a,x:s.cx+Math.cos(l)*s.rx*.5,z:s.cz+Math.sin(l)*s.rz*.5,vx:Math.cos(l+1.6)*.3,vz:Math.sin(l+1.6)*.3,y:.2+Math.random()*.12,speed:.25+Math.random()*.2,wan:Math.random()*6,scale:t,wish:e};if(o.position.set(c.x,c.y,c.z),s.g.parent.add(o),ze.fish.push(c),e){let h=new mn(new hn({map:Vs("rgba(255,236,170,1)","rgba(255,200,80,0)"),transparent:!0,depthWrite:!1,blending:Xe,opacity:.55}));h.scale.setScalar(.9),o.add(h),c.glow=h}if((n||e)&&(ze.mineFish=c),ze.fish.length>26){let h=ze.fish.splice(13,1)[0];h.g.removeFromParent(),ze.mineFish===h&&(ze.mineFish=c)}return c}function Pv(i,t,e){let n=ze.pond,s=new kt(.025,6,4),r=new Y({color:9067050,roughness:.8});ze.lastFeed={x:i,z:t,t:e};for(let o=0;o<9;o++){let a=i+(Math.random()-.5)*.7,l=t+(Math.random()-.5)*.7;if((a-n.cx)**2/n.rx**2+(l-n.cz)**2/n.rz**2>.85)continue;let h=new H(s,r);h.position.set(a,1+Math.random()*.3,l),n.g.parent.add(h),ze.food.push({mesh:h,x:a,z:l,vy:0,life:22,land:!1})}}function Lv(i,t,e){let n=ze.pond;if(!n)return;ze.time=t;let s=ze.fish;for(let r of ze.food)r.life-=i,r.land?(r.mesh.position.y=.44+Math.sin(t*3+r.x)*.005,r.x+=Math.sin(t*.5+r.z)*i*.02,r.mesh.position.x=r.x):(r.vy-=9*i,r.mesh.position.y+=r.vy*i,r.mesh.position.y<=.44&&(r.mesh.position.y=.44,r.land=!0,sa(n.wm,r.x,r.z,.35,t)));for(let r of s){let o=0,a=0,l=null,c=9;for(let w of ze.food){if(!w.land||w.dead)continue;let R=Math.hypot(w.x-r.x,w.z-r.z);R<c&&(c=R,l=w)}let h=r.speed,u=r.y0||(r.y0=r.y);l?(o+=(l.x-r.x)/c*2.2,a+=(l.z-r.z)/c*2.2,h*=2.2,u=.36,c<.12*r.scale+.06&&(l.dead=!0,l.mesh.removeFromParent(),sa(n.wm,l.x,l.z,.6,t),e&&e(l.x,l.z),r.gulp=.4)):(r.wan+=i*.6,o+=Math.cos(r.wan+Math.sin(r.wan*.37)*2)*.5,a+=Math.sin(r.wan*.9)*.5);for(let w of s)if(w!==r){let R=r.x-w.x,I=r.z-w.z,T=R*R+I*I;T<.2?(o+=R/(T+.02)*.12,a+=I/(T+.02)*.12):T<1.6&&!l&&(o+=w.vx*.08,a+=w.vz*.08)}let d=(r.x-n.cx)/(n.rx*.8),f=(r.z-n.cz)/(n.rz*.78),g=d*d+f*f;g>.7&&(o-=d*(g-.7)*6,a-=f*(g-.7)*6);let x=r.x-(n.cx-n.rx*.55),m=r.z-(n.cz-n.rz*.2),p=Math.hypot(x,m);p<1.2&&(o+=x/p*3,a+=m/p*3),r.vx+=o*i,r.vz+=a*i;let v=Math.hypot(r.vx,r.vz)||.001,y=h;v>y&&(r.vx*=y/v,r.vz*=y/v),v<h*.4&&(r.vx*=1.02,r.vz*=1.02),r.x+=r.vx*i,r.z+=r.vz*i,r.y+=(u-r.y)*i*1.5;let S=Math.atan2(r.vx,r.vz)-r.g.rotation.y;for(;S>Math.PI;)S-=6.283;for(;S<-Math.PI;)S+=6.283;r.g.rotation.y+=S*Math.min(1,i*4),r.uni.ph.value+=i*(4+v*9),r.uni.bend.value=Sl.lerp(r.uni.bend.value,Sl.clamp(-S*.6,-.25,.25)+.06*Math.sin(t*2+r.wan),.1),r.g.position.set(r.x,r.y+(r.gulp>0?.04:0),r.z),r.gulp>0&&(r.gulp-=i),r.glow&&(r.glow.material.opacity=.35+Math.sin(t*2+r.wan)*.15)}ze.food=ze.food.filter(r=>(r.life<=0&&!r.dead&&r.mesh.removeFromParent(),!r.dead&&r.life>0))}var X_,Vl,Rr,Wl,af,ze,cf,Xl=sn(()=>{wn();ai();Ii();Yd();X_=0;Vl=new Map,Rr=null,Wl=null;af=[{base:"#f7f3ea",spots:["#e0381c","#d8301a"],n:7,fin:"#fff6ee"},{base:"#f7f3ea",spots:["#e0381c","#1a1a1a","#e0381c"],n:9,fin:"#fff6ee"},{base:"#f2b733",spots:["#ffd65a"],n:4,fin:"#ffd65a",metal:!0},{base:"#1c1c1c",spots:["#e0441c","#f4f0e6","#e0441c"],n:9,fin:"#2a2a2a"},{base:"#8a6038",spots:["#9a6e42"],n:3,fin:"#a07a50"},{base:"#f8f6f0",spots:["#f8f6f0"],n:1,fin:"#ffffff",tancho:!0},{base:"#1e1a18",spots:["#f07a1a","#f07a1a"],n:8,fin:"#f08a2a"},{base:"#e8e8e4",spots:["#ffffff"],n:3,fin:"#f4f4f0",metal:!0}],ze={fish:[],food:[],pond:null,time:0,mineFish:null,lastFeed:null};cf=(i,t)=>{i.onBeforeCompile=e=>{e.uniforms.bend=t.bend,e.uniforms.ph=t.ph,e.vertexShader=`uniform float bend; uniform float ph;
`+e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
    float s = clamp((0.25 - transformed.z)/0.75, 0., 1.6); transformed.x += sin(ph - transformed.z*6.5) * bend * s*s*0.9 + bend*0.25*s;`)}}});var Hv,Uv,Nv,Fv,Bv,ql,lf=sn(()=>{Hv=[{k:"tudieude",t:"T\u1EE9 Di\u1EC7u \u0110\u1EBF",s:"B\u1ED1n s\u1EF1 th\u1EADt cao qu\xFD",p:["Kh\u1ED5 \u0111\u1EBF: cu\u1ED9c s\u1ED1ng c\xF3 nh\u1EEFng \u0111i\u1EC1u kh\xF4ng nh\u01B0 \xFD \u2014 sinh, gi\xE0, b\u1EC7nh, ch\u1EBFt, xa ng\u01B0\u1EDDi th\u01B0\u01A1ng, g\u1EB7p \u0111i\u1EC1u gh\xE9t, mong c\u1EA7u m\xE0 kh\xF4ng \u0111\u01B0\u1EE3c.","T\u1EADp \u0111\u1EBF: nguy\xEAn nh\xE2n c\u1EE7a kh\u1ED5 l\xE0 l\xF2ng tham mu\u1ED1n, s\xE2n gi\u1EADn v\xE0 si m\xEA; ta b\xE1m ch\u1EB7t v\xE0o nh\u1EEFng g\xEC v\u1ED1n lu\xF4n thay \u0111\u1ED5i.","Di\u1EC7t \u0111\u1EBF: kh\u1ED5 c\xF3 th\u1EC3 ch\u1EA5m d\u1EE9t. Khi tham, s\xE2n, si l\u1EAFng xu\u1ED1ng, t\xE2m \u0111\u01B0\u1EE3c an vui, nh\u1EB9 nh\xE0ng \u2014 \u0111\xF3 l\xE0 Ni\u1EBFt-b\xE0n ngay trong hi\u1EC7n t\u1EA1i.","\u0110\u1EA1o \u0111\u1EBF: con \u0111\u01B0\u1EDDng \u0111\u01B0a \u0111\u1EBFn h\u1EBFt kh\u1ED5 l\xE0 B\xE1t Ch\xE1nh \u0110\u1EA1o \u2014 s\u1ED1ng t\u1EC9nh th\u1EE9c, hi\u1EC1n thi\u1EC7n v\xE0 s\xE1ng su\u1ED1t m\u1ED7i ng\xE0y.","Th\u1EF1c h\xE0nh: khi bu\u1ED3n phi\u1EC1n, h\xE3y d\u1EEBng l\u1EA1i, th\u1EDF s\xE2u v\xE0 t\u1EF1 h\u1ECFi: \u201C\u0110i\u1EC1u g\xEC \u0111ang l\xE0m m\xECnh kh\u1ED5? M\xECnh c\xF3 th\u1EC3 bu\xF4ng b\u1EDBt \u0111i\u1EC1u g\xEC?\u201D"]},{k:"batchanhdao",t:"B\xE1t Ch\xE1nh \u0110\u1EA1o",s:"T\xE1m con \u0111\u01B0\u1EDDng ch\xE2n ch\xEDnh",p:["Ch\xE1nh ki\u1EBFn \u2014 hi\u1EC3u \u0111\xFAng v\u1EC1 nh\xE2n qu\u1EA3 v\xE0 v\xF4 th\u01B0\u1EDDng. Ch\xE1nh t\u01B0 duy \u2014 suy ngh\u0129 thi\u1EC7n l\xE0nh, kh\xF4ng \xE1c \xFD.","Ch\xE1nh ng\u1EEF \u2014 n\xF3i l\u1EDDi ch\xE2n th\u1EADt, h\xF2a nh\xE3, c\xF3 \xEDch. Ch\xE1nh nghi\u1EC7p \u2014 h\xE0nh \u0111\u1ED9ng kh\xF4ng l\xE0m h\u1EA1i ai.","Ch\xE1nh m\u1EA1ng \u2014 s\u1ED1ng b\u1EB1ng ngh\u1EC1 l\u01B0\u01A1ng thi\u1EC7n. Ch\xE1nh tinh t\u1EA5n \u2014 si\xEAng n\u0103ng l\xE0m l\xE0nh, b\u1ECF d\u1EEF.","Ch\xE1nh ni\u1EC7m \u2014 bi\u1EBFt r\xF5 m\xECnh \u0111ang l\xE0m g\xEC, ngh\u0129 g\xEC trong hi\u1EC7n t\u1EA1i. Ch\xE1nh \u0111\u1ECBnh \u2014 t\xE2m v\u1EEFng v\xE0ng, an t\u0129nh.","T\xE1m \u0111i\u1EC1u n\xE0y n\xE2ng \u0111\u1EE1 l\u1EABn nhau nh\u01B0 t\xE1m nan c\u1EE7a b\xE1nh xe ph\xE1p. B\u1EAFt \u0111\u1EA7u t\u1EEB m\u1ED9t \u0111i\u1EC1u nh\u1ECF: h\xF4m nay n\xF3i m\u1ED9t l\u1EDDi t\u1EED t\u1EBF."]},{k:"ngugioi",t:"Ng\u0169 Gi\u1EDBi",s:"N\u0103m \u0111i\u1EC1u gi\u1EEF g\xECn c\u1EE7a ng\u01B0\u1EDDi Ph\u1EADt t\u1EED",p:["1. Kh\xF4ng s\xE1t sinh \u2014 t\xF4n tr\u1ECDng v\xE0 b\u1EA3o v\u1EC7 s\u1EF1 s\u1ED1ng.","2. Kh\xF4ng tr\u1ED9m c\u1EAFp \u2014 kh\xF4ng l\u1EA5y nh\u1EEFng g\xEC kh\xF4ng \u0111\u01B0\u1EE3c cho; bi\u1EBFt chia s\u1EBB.","3. Kh\xF4ng t\xE0 d\xE2m \u2014 chung th\u1EE7y, gi\u1EEF g\xECn h\u1EA1nh ph\xFAc gia \u0111\xECnh.","4. Kh\xF4ng n\xF3i d\u1ED1i \u2014 n\xF3i l\u1EDDi th\u1EADt, kh\xF4ng n\xF3i l\u1EDDi chia r\u1EBD, \u0111\u1ED9c \xE1c.","5. Kh\xF4ng d\xF9ng ch\u1EA5t say \u2014 gi\u1EEF t\xE2m t\u1EC9nh t\xE1o, s\xE1ng su\u1ED1t.","N\u0103m gi\u1EDBi kh\xF4ng ph\u1EA3i l\xE0 s\u1EF1 tr\xF3i bu\u1ED9c m\xE0 l\xE0 h\xE0ng r\xE0o che ch\u1EDF cho m\xECnh, gia \u0111\xECnh v\xE0 x\xE3 h\u1ED9i \u0111\u01B0\u1EE3c b\xECnh an."]},{k:"tubi",t:"T\u1EEB Bi H\u1EF7 X\u1EA3",s:"B\u1ED1n t\xE2m v\xF4 l\u01B0\u1EE3ng",p:["T\u1EEB: mong mu\u1ED1n mang ni\u1EC1m vui \u0111\u1EBFn cho ng\u01B0\u1EDDi kh\xE1c. Bi: mong gi\xFAp ng\u01B0\u1EDDi b\u1EDBt kh\u1ED5.","H\u1EF7: vui m\u1EEBng tr\u01B0\u1EDBc h\u1EA1nh ph\xFAc, th\xE0nh c\xF4ng c\u1EE7a ng\u01B0\u1EDDi kh\xE1c, kh\xF4ng ganh t\u1ECB.","X\u1EA3: bu\xF4ng b\u1ECF h\u1EDDn gi\u1EADn, kh\xF4ng ph\xE2n bi\u1EC7t th\xE2n s\u01A1, \u0111\u1ED1i x\u1EED b\xECnh \u0111\u1EB3ng v\u1EDBi m\u1ECDi ng\u01B0\u1EDDi.","Th\u1EF1c h\xE0nh m\u1ED7i s\xE1ng: \u201CNguy\u1EC7n cho con \u0111\u01B0\u1EE3c an vui. Nguy\u1EC7n cho ng\u01B0\u1EDDi th\xE2n \u0111\u01B0\u1EE3c an vui. Nguy\u1EC7n cho t\u1EA5t c\u1EA3 ch\xFAng sinh \u0111\u1EC1u \u0111\u01B0\u1EE3c an vui.\u201D"]},{k:"nhanqua",t:"Nh\xE2n Qu\u1EA3",s:"Gieo g\xEC g\u1EB7t n\u1EA5y",p:["M\u1ECDi vi\u1EC7c ta l\xE0m, n\xF3i v\xE0 ngh\u0129 \u0111\u1EC1u l\xE0 h\u1EA1t gi\u1ED1ng (nh\xE2n). Khi \u0111\u1EE7 \u0111i\u1EC1u ki\u1EC7n (duy\xEAn), h\u1EA1t gi\u1ED1ng s\u1EBD cho ra k\u1EBFt qu\u1EA3 (qu\u1EA3).","Gieo h\u1EA1t l\xE0nh \u2014 l\u1EDDi t\u1EED t\u1EBF, vi\u1EC7c gi\xFAp ng\u01B0\u1EDDi \u2014 s\u1EBD g\u1EB7t ni\u1EC1m vui. Gieo h\u1EA1t d\u1EEF s\u1EBD g\u1EB7t kh\u1ED5 \u0111au.","Hi\u1EC3u nh\xE2n qu\u1EA3 gi\xFAp ta s\u1ED1ng c\xF3 tr\xE1ch nhi\u1EC7m, kh\xF4ng \u0111\u1ED5 l\u1ED7i, v\xE0 bi\u1EBFt r\u1EB1ng t\u01B0\u01A1ng lai n\u1EB1m trong tay m\xECnh.","H\xF4m nay, h\xE3y gieo m\u1ED9t h\u1EA1t gi\u1ED1ng t\u1ED1t: m\u1ED9t l\u1EDDi c\u1EA3m \u01A1n, m\u1ED9t n\u1EE5 c\u01B0\u1EDDi, m\u1ED9t vi\u1EC7c gi\xFAp \u0111\u1EE1 nh\u1ECF."]},{k:"vothuong",t:"V\xF4 Th\u01B0\u1EDDng",s:"M\u1ECDi th\u1EE9 lu\xF4n \u0111\u1ED5i thay",p:["Kh\xF4ng c\xF3 g\xEC \u0111\u1EE9ng y\xEAn m\xE3i: m\xE2y tr\xF4i, hoa n\u1EDF r\u1ED3i t\xE0n, tu\u1ED5i tr\u1EBB qua \u0111i, n\u1ED7i bu\u1ED3n c\u0169ng s\u1EBD qua.","Hi\u1EC3u v\xF4 th\u01B0\u1EDDng kh\xF4ng ph\u1EA3i \u0111\u1EC3 bi quan, m\xE0 \u0111\u1EC3 tr\xE2n qu\xFD t\u1EEBng gi\xE2y ph\xFAt hi\u1EC7n t\u1EA1i v\xE0 nh\u1EEFng ng\u01B0\u1EDDi \u0111ang \u1EDF b\xEAn ta.","Khi g\u1EB7p kh\xF3 kh\u0103n, nh\u1EDB r\u1EB1ng: \u201CR\u1ED3i \u0111i\u1EC1u n\xE0y c\u0169ng s\u1EBD qua.\u201D Khi \u0111ang h\u1EA1nh ph\xFAc, h\xE3y s\u1ED1ng tr\u1ECDn v\u1EB9n v\u1EDBi n\xF3.","Th\u1EF1c h\xE0nh: nh\xECn m\u1ED9t b\xF4ng hoa, m\u1ED9t ch\xE9n tr\xE0 \u2014 th\u1EA5y n\xF3 \u0111ang thay \u0111\u1ED5i t\u1EEBng ch\xFAt \u2014 v\xE0 m\u1EC9m c\u01B0\u1EDDi."]},{k:"chanhniem",t:"Ch\xE1nh Ni\u1EC7m",s:"S\u1ED1ng tr\u1ECDn v\u1EB9n gi\xE2y ph\xFAt hi\u1EC7n t\u1EA1i",p:["Ch\xE1nh ni\u1EC7m l\xE0 bi\u1EBFt r\xF5 \u0111i\u1EC1u \u0111ang x\u1EA3y ra: \u0111ang th\u1EDF v\xE0o th\xEC bi\u1EBFt th\u1EDF v\xE0o, \u0111ang b\u01B0\u1EDBc \u0111i th\xEC bi\u1EBFt b\u01B0\u1EDBc \u0111i.","Khi \u0103n, ch\u1EC9 \u0103n; khi r\u1EEDa ch\xE9n, ch\u1EC9 r\u1EEDa ch\xE9n. T\xE2m kh\xF4ng ch\u1EA1y v\u1EC1 qu\xE1 kh\u1EE9 hay lo l\u1EAFng t\u01B0\u01A1ng lai.","B\xE0i t\u1EADp ba h\u01A1i th\u1EDF: d\u1EEBng l\u1EA1i, h\xEDt v\xE0o th\u1EADt ch\u1EADm, th\u1EDF ra th\u1EADt d\xE0i, ba l\u1EA7n. T\xE2m s\u1EBD l\u1EAFng d\u1ECBu.","Ti\u1EBFng chu\xF4ng ch\xF9a l\xE0 l\u1EDDi nh\u1EAFc tr\u1EDF v\u1EC1: m\u1ED7i khi nghe chu\xF4ng, h\xE3y d\u1EEBng l\u1EA1i v\xE0 th\u1EDF."]},{k:"bothi",t:"B\u1ED1 Th\xED",s:"H\u1EA1nh cho \u0111i",p:["T\xE0i th\xED: chia s\u1EBB v\u1EADt ch\u1EA5t cho ng\u01B0\u1EDDi thi\u1EBFu th\u1ED1n. Ph\xE1p th\xED: chia s\u1EBB hi\u1EC3u bi\u1EBFt, l\u1EDDi khuy\xEAn t\u1ED1t.","V\xF4 \xFAy th\xED: \u0111em l\u1EA1i s\u1EF1 an t\xE2m, kh\xF4ng s\u1EE3 h\xE3i cho ng\u01B0\u1EDDi kh\xE1c \u2014 m\u1ED9t l\u1EDDi \u0111\u1ED9ng vi\xEAn, m\u1ED9t b\xE0n tay n\xE2ng \u0111\u1EE1.","Cho \u0111i v\u1EDBi t\xE2m vui v\u1EBB, kh\xF4ng mong \u0111\u1EC1n \u0111\xE1p, kh\xF4ng khoe khoang, th\xEC ph\u01B0\u1EDBc \u0111\u1EE9c c\xE0ng l\u1EDBn.","Kh\xF4ng c\u1EA7n nhi\u1EC1u ti\u1EC1n m\u1EDBi b\u1ED1 th\xED \u0111\u01B0\u1EE3c: n\u1EE5 c\u01B0\u1EDDi, s\u1EF1 l\u1EAFng nghe, th\u1EDDi gian gi\xFAp \u0111\u1EE1 c\u0169ng l\xE0 m\xF3n qu\xE0 qu\xFD."]},{k:"samhoi",t:"S\xE1m H\u1ED1i",s:"Nh\u1EADn l\u1ED7i v\xE0 l\xE0m m\u1EDBi",p:["Ai c\u0169ng c\xF3 l\xFAc l\u1EA7m l\u1ED7i. S\xE1m h\u1ED1i l\xE0 th\xE0nh th\u1EADt nh\xECn l\u1EA1i, nh\u1EADn l\u1ED7i v\xE0 nguy\u1EC7n kh\xF4ng t\xE1i ph\u1EA1m.","S\xE1m h\u1ED1i kh\xF4ng ph\u1EA3i t\u1EF1 tr\xE1ch m\xECnh m\xE3i, m\xE0 l\xE0 g\u1ED9t r\u1EEDa t\xE2m \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u l\u1EA1i nh\u1EB9 nh\xE0ng h\u01A1n.","N\u1EBFu \u0111\xE3 l\xE0m ai bu\u1ED3n, h\xE3y xin l\u1ED7i h\u1ECD ch\xE2n th\xE0nh. N\u1EBFu kh\xF4ng th\u1EC3 g\u1EB7p, h\xE3y l\xE0m \u0111i\u1EC1u thi\u1EC7n \u0111\u1EC3 chuy\u1EC3n h\xF3a.","L\u1EDDi nguy\u1EC7n: \u201CNh\u1EEFng l\u1ED7i l\u1EA7m con \u0111\xE3 g\xE2y ra t\u1EEB th\xE2n, mi\u1EC7ng, \xFD, nay con xin th\xE0nh t\xE2m s\xE1m h\u1ED1i.\u201D"]},{k:"hieudao",t:"Hi\u1EBFu \u0110\u1EA1o",s:"B\xE1o hi\u1EBFu cha m\u1EB9",p:["C\xF4ng cha nh\u01B0 n\xFAi Th\xE1i S\u01A1n, ngh\u0129a m\u1EB9 nh\u01B0 n\u01B0\u1EDBc trong ngu\u1ED3n ch\u1EA3y ra. Hi\u1EBFu th\u1EA3o l\xE0 n\u1EC1n t\u1EA3ng c\u1EE7a \u0111\u1EA1o l\xE0m ng\u01B0\u1EDDi.","B\xE1o hi\u1EBFu l\xE0 ch\u0103m s\xF3c cha m\u1EB9 khi gi\xE0 y\u1EBFu, n\xF3i l\u1EDDi d\u1ECBu d\xE0ng, d\xE0nh th\u1EDDi gian \u1EDF b\xEAn, l\u1EAFng nghe c\xE1c c\u1EE5.","B\xE1o hi\u1EBFu s\xE2u xa h\u01A1n l\xE0 s\u1ED1ng t\u1ED1t, l\xE0m l\xE0nh, \u0111\u1EC3 cha m\u1EB9 an l\xF2ng; v\xE0 gi\xFAp cha m\u1EB9 bi\u1EBFt \u0111\u1EBFn \u0111i\u1EC1u thi\u1EC7n.","H\xF4m nay h\xE3y g\u1ECDi \u0111i\u1EC7n h\u1ECFi th\u0103m cha m\u1EB9, \xF4ng b\xE0 \u2014 d\xF9 ch\u1EC9 v\xE0i ph\xFAt."]}],Uv=[{k:"dauhu",n:"\u0110\u1EADu h\u0169 kho n\u1EA5m",ic:"\u{1F372}",time:"30 ph\xFAt",serve:"3\u20134 ng\u01B0\u1EDDi",ing:["3 b\xECa \u0111\u1EADu h\u0169 tr\u1EAFng","200 g n\u1EA5m r\u01A1m ho\u1EB7c n\u1EA5m \u0111\xF4ng c\xF4 (ng\xE2m n\u1EDF)","3 mu\u1ED7ng canh n\u01B0\u1EDBc t\u01B0\u01A1ng","1 mu\u1ED7ng canh \u0111\u01B0\u1EDDng (ho\u1EB7c \u0111\u01B0\u1EDDng th\u1ED1t n\u1ED1t)","1/2 mu\u1ED7ng c\xE0 ph\xEA h\u1EA1t n\xEAm chay","1 ch\xE9n n\u01B0\u1EDBc d\u1EEBa t\u01B0\u01A1i (ho\u1EB7c n\u01B0\u1EDBc l\u1ECDc)","Ti\xEAu, \u1EDBt, v\xE0i c\u1ECDng ng\xF2","2 mu\u1ED7ng canh d\u1EA7u \u0103n"],steps:["\u0110\u1EADu h\u0169 c\u1EAFt mi\u1EBFng v\u1EEBa \u0103n, \u0111\u1EC3 r\xE1o, chi\xEAn v\xE0ng c\xE1c m\u1EB7t.","N\u1EA5m r\u1EEDa s\u1EA1ch, c\u1EAFt \u0111\xF4i; n\u1EA5m \u0111\xF4ng c\xF4 v\u1EAFt r\xE1o.","Phi n\xF3ng ch\xFAt d\u1EA7u, cho \u0111\u01B0\u1EDDng v\xE0o th\u1EAFng v\xE0ng nh\u1EA1t, th\xEAm n\u01B0\u1EDBc t\u01B0\u01A1ng, n\u01B0\u1EDBc d\u1EEBa v\xE0 h\u1EA1t n\xEAm.","Cho n\u1EA5m v\xE0 \u0111\u1EADu h\u0169 v\xE0o, kho l\u1EEDa nh\u1ECF 15 ph\xFAt cho th\u1EA5m, th\u1EC9nh tho\u1EA3ng tr\u1EDF nh\u1EB9.","N\u01B0\u1EDBc s\xE1nh l\u1EA1i th\xEC t\u1EAFt b\u1EBFp, r\u1EAFc ti\xEAu, \u1EDBt, ng\xF2. \u0102n v\u1EDBi c\u01A1m n\xF3ng."],game:[["nhat","Nh\u1EB7t n\u1EA5m"],["rua","R\u1EEDa s\u1EA1ch"],["thai","C\u1EAFt \u0111\u1EADu h\u0169"],["chien","Chi\xEAn v\xE0ng"],["cho","Cho v\xE0o n\u1ED3i"],["nem","N\xEAm n\u01B0\u1EDBc t\u01B0\u01A1ng"],["dao","\u0110\u1EA3o nh\u1EB9, kho liu riu"]]},{k:"canh",n:"Canh rau c\u1EE7",ic:"\u{1F963}",time:"35 ph\xFAt",serve:"4 ng\u01B0\u1EDDi",ing:["1 c\u1EE7 c\xE0 r\u1ED1t","1 c\u1EE7 khoai t\xE2y","1 tr\xE1i su su","1/4 b\u1EAFp c\u1EA3i","100 g n\u1EA5m b\xE0o ng\u01B0","1 l\xEDt n\u01B0\u1EDBc d\xF9ng rau c\u1EE7 (ninh t\u1EEB c\u1EE7 c\u1EA3i tr\u1EAFng, b\u1EAFp ng\u1ECDt)","Mu\u1ED1i, h\u1EA1t n\xEAm chay, ti\xEAu","Ng\xF2 r\xED"],steps:["Ninh c\u1EE7 c\u1EA3i tr\u1EAFng v\xE0 b\u1EAFp ng\u1ECDt kho\u1EA3ng 20 ph\xFAt \u0111\u1EC3 c\xF3 n\u01B0\u1EDBc d\xF9ng ng\u1ECDt thanh.","G\u1ECDt v\u1ECF, r\u1EEDa s\u1EA1ch v\xE0 c\u1EAFt kh\xFAc c\xE0 r\u1ED1t, khoai t\xE2y, su su; b\u1EAFp c\u1EA3i c\u1EAFt mi\u1EBFng.","Cho c\xE0 r\u1ED1t, khoai t\xE2y v\xE0o n\u1ED3i tr\u01B0\u1EDBc; 5 ph\xFAt sau th\xEAm su su.","Khi rau c\u1EE7 g\u1EA7n ch\xEDn, cho b\u1EAFp c\u1EA3i v\xE0 n\u1EA5m v\xE0o, n\xEAm mu\u1ED1i, h\u1EA1t n\xEAm v\u1EEBa \u0103n.","T\u1EAFt b\u1EBFp, r\u1EAFc ti\xEAu v\xE0 ng\xF2."],game:[["nhat","Nh\u1EB7t rau"],["rua","R\u1EEDa rau c\u1EE7"],["thai","Th\xE1i rau c\u1EE7"],["cho","Cho v\xE0o n\u1ED3i"],["nem","N\xEAm v\u1EEBa \u0103n"],["dao","Khu\u1EA5y \u0111\u1EC1u"]]},{k:"xoigac",n:"X\xF4i g\u1EA5c",ic:"\u{1F35A}",time:"1 gi\u1EDD (ng\xE2m n\u1EBFp 6 ti\u1EBFng)",serve:"4\u20135 ng\u01B0\u1EDDi",ing:["500 g g\u1EA1o n\u1EBFp c\xE1i hoa v\xE0ng","1/2 tr\xE1i g\u1EA5c ch\xEDn","3 mu\u1ED7ng canh \u0111\u01B0\u1EDDng","1/2 mu\u1ED7ng c\xE0 ph\xEA mu\u1ED1i","3 mu\u1ED7ng canh n\u01B0\u1EDBc c\u1ED1t d\u1EEBa","1 mu\u1ED7ng canh d\u1EA7u \u0103n"],steps:["Vo s\u1EA1ch n\u1EBFp, ng\xE2m 6\u20138 ti\u1EBFng r\u1ED3i \u0111\u1EC3 r\xE1o, tr\u1ED9n v\u1EDBi ch\xFAt mu\u1ED1i.","L\u1EA5y th\u1ECBt g\u1EA5c (b\u1ECF h\u1EA1t), b\xF3p nhuy\u1EC5n r\u1ED3i tr\u1ED9n \u0111\u1EC1u v\u1EDBi n\u1EBFp cho th\u1EA5m m\xE0u \u0111\u1ECF.","Cho n\u1EBFp v\xE0o ch\xF5, h\u1EA5p 25\u201330 ph\xFAt.","X\u1EDBi x\xF4i ra, tr\u1ED9n \u0111\u01B0\u1EDDng, n\u01B0\u1EDBc c\u1ED1t d\u1EEBa v\xE0 d\u1EA7u \u0103n, h\u1EA5p th\xEAm 10 ph\xFAt cho b\xF3ng d\u1EBBo.","C\xF3 th\u1EC3 \xE9p khu\xF4n h\xECnh hoa \u0111\u1EC3 d\xE2ng c\xFAng."],game:[["nhat","L\u1EF1a n\u1EBFp"],["rua","Vo n\u1EBFp"],["thai","B\xF3p g\u1EA5c"],["cho","Cho v\xE0o ch\xF5"],["hap","H\u1EA5p x\xF4i"],["nem","Tr\u1ED9n \u0111\u01B0\u1EDDng, n\u01B0\u1EDBc d\u1EEBa"],["dao","X\u1EDBi \u0111\u1EC1u"]]},{k:"che",n:"Ch\xE8 \u0111\u1EADu xanh",ic:"\u{1F375}",time:"45 ph\xFAt",serve:"5 ng\u01B0\u1EDDi",ing:["200 g \u0111\u1EADu xanh c\xE0 v\u1ECF","150 g \u0111\u01B0\u1EDDng ph\xE8n","1,2 l\xEDt n\u01B0\u1EDBc","2 l\xE1 d\u1EE9a","100 ml n\u01B0\u1EDBc c\u1ED1t d\u1EEBa","M\u1ED9t nh\xFAm mu\u1ED1i"],steps:["Vo s\u1EA1ch \u0111\u1EADu xanh, ng\xE2m 2 ti\u1EBFng.","N\u1EA5u \u0111\u1EADu v\u1EDBi n\u01B0\u1EDBc v\xE0 l\xE1 d\u1EE9a, l\u1EEDa v\u1EEBa kho\u1EA3ng 25 ph\xFAt \u0111\u1EBFn khi \u0111\u1EADu m\u1EC1m n\u1EDF.","Cho \u0111\u01B0\u1EDDng ph\xE8n v\xE0o, khu\u1EA5y nh\u1EB9 \u0111\u1EBFn khi tan.","\u0110un n\xF3ng n\u01B0\u1EDBc c\u1ED1t d\u1EEBa v\u1EDBi ch\xFAt mu\u1ED1i.","M\xFAc ch\xE8 ra ch\xE9n, chan n\u01B0\u1EDBc c\u1ED1t d\u1EEBa. D\xF9ng n\xF3ng ho\u1EB7c l\u1EA1nh."],game:[["nhat","Nh\u1EB7t \u0111\u1EADu"],["rua","Vo \u0111\u1EADu"],["cho","Cho v\xE0o n\u1ED3i"],["nem","Th\xEAm \u0111\u01B0\u1EDDng ph\xE8n"],["dao","Khu\u1EA5y \u0111\u1EC1u"]]},{k:"nem",n:"Nem chay",ic:"\u{1F962}",time:"50 ph\xFAt",serve:"20 cu\u1ED1n",ing:["20 b\xE1nh tr\xE1ng","1 c\u1EE7 khoai m\xF4n nh\u1ECF","1 c\u1EE7 c\xE0 r\u1ED1t","1 c\u1EE7 s\u1EAFn (c\u1EE7 \u0111\u1EADu)","30 g n\u1EA5m m\xE8o (m\u1ED9c nh\u0129)","1 b\xF3 mi\u1EBFn nh\u1ECF","2 b\xECa \u0111\u1EADu h\u0169","Mu\u1ED1i, \u0111\u01B0\u1EDDng, ti\xEAu, h\u1EA1t n\xEAm chay","D\u1EA7u \u0111\u1EC3 chi\xEAn"],steps:["Ng\xE2m n\u1EA5m m\xE8o, mi\u1EBFn cho m\u1EC1m r\u1ED3i c\u1EAFt ng\u1EAFn.","Khoai m\xF4n, c\xE0 r\u1ED1t, c\u1EE7 s\u1EAFn b\xE0o s\u1EE3i; \u0111\u1EADu h\u0169 b\xF3p v\u1EE5n.","Tr\u1ED9n t\u1EA5t c\u1EA3, n\xEAm mu\u1ED1i, \u0111\u01B0\u1EDDng, ti\xEAu, h\u1EA1t n\xEAm chay cho v\u1EEBa.","L\xE0m m\u1EC1m b\xE1nh tr\xE1ng, cho nh\xE2n v\xE0o, cu\u1ED9n ch\u1EB7t tay.","Chi\xEAn l\u1EEDa v\u1EEBa \u0111\u1EBFn khi v\xE0ng gi\xF2n. \u0102n k\xE8m rau s\u1ED1ng v\xE0 n\u01B0\u1EDBc ch\u1EA5m chay (n\u01B0\u1EDBc t\u01B0\u01A1ng, chanh, \u0111\u01B0\u1EDDng, \u1EDBt)."],game:[["nhat","Nh\u1EB7t rau c\u1EE7"],["rua","R\u1EEDa s\u1EA1ch"],["thai","B\xE0o s\u1EE3i"],["nem","N\xEAm nh\xE2n"],["cuon","Cu\u1ED9n nem"],["chien","Chi\xEAn v\xE0ng"]]}],Nv={nhat:"\u{1F9FA}",rua:"\u{1F4A7}",thai:"\u{1F52A}",cho:"\u{1F958}",nem:"\u{1F9C2}",dao:"\u{1F944}",chien:"\u{1F373}",hap:"\u2668\uFE0F",cuon:"\u{1F32F}"},Fv=[["\u{1F344}","N\u1EA5m"],["\u{1F955}","C\xE0 r\u1ED1t"],["\u{1F383}","B\xED \u0111\u1ECF"],["\u{1F96C}","Rau c\u1EA3i"],["\u{1F33D}","B\u1EAFp ng\u1ECDt"],["\u2B1C","\u0110\u1EADu h\u0169"],["\u{1F954}","Khoai"],["\u{1F33F}","Rau th\u01A1m"]],Bv=[["Th\u1EE9 Hai","C\u01A1m g\u1EA1o l\u1EE9t \xB7 \u0110\u1EADu h\u0169 kho n\u1EA5m \xB7 Canh b\xED \u0111\u1ECF \xB7 Rau lu\u1ED9c ch\u1EA5m t\u01B0\u01A1ng"],["Th\u1EE9 Ba","B\xFAn ri\xEAu chay (c\xE0 chua, \u0111\u1EADu h\u0169) \xB7 Chu\u1ED1i tr\xE1ng mi\u1EC7ng"],["Th\u1EE9 T\u01B0","C\u01A1m \xB7 N\u1EA5m x\xE0o s\u1EA3 \u1EDBt \xB7 Canh rau ng\xF3t \xB7 D\u01B0a leo"],["Th\u1EE9 N\u0103m","Ph\u1EDF chay (n\u01B0\u1EDBc d\xF9ng rau c\u1EE7) \xB7 \u0110\u1EADu ph\u1EE5 s\u1ED1t c\xE0 chua"],["Th\u1EE9 S\xE1u","C\u01A1m \xB7 Nem chay \xB7 Canh rau c\u1EE7 \xB7 \u0110\u1EADu que lu\u1ED9c"],["Th\u1EE9 B\u1EA3y","M\xEC Qu\u1EA3ng chay \xB7 Ch\xE8 \u0111\u1EADu xanh"],["Ch\u1EE7 nh\u1EADt","X\xF4i g\u1EA5c \xB7 Canh n\u1EA5m h\u1EA1t sen \xB7 Rau c\u1EE7 x\xE0o th\u1EADp c\u1EA9m"]],ql=[{n:"Sen h\u1ED3ng",ic:"\u{1F338}",kind:"lotus",c:16098232},{n:"Sen tr\u1EAFng",ic:"\u{1F90D}",kind:"lotus",c:16642278},{n:"Sen v\xE0ng",ic:"\u{1F49B}",kind:"lotus",c:16241514},{n:"\u0110\xE8n gi\u1EA5y \u0111\u1ECF",ic:"\u{1F3EE}",kind:"box",c:14696490},{n:"\u0110\xE8n gi\u1EA5y v\xE0ng",ic:"\u{1F7E8}",kind:"box",c:15908938},{n:"Thuy\u1EC1n hoa",ic:"\u26F5",kind:"boat",c:15764026}]});function j_(i,t){let e=(i-Ee.cx)/Ee.rx,n=(t-Ee.cz)/Ee.rz;return e*e+n*n<1}function Yv(i,t){let e=Ee;return t>=e.prom?Math.abs(i)<42.2?.02:null:Math.abs(i)<e.bridge-.25&&t>e.isl.z0?.45:Math.abs(i)<e.isl.x-.4&&t<=e.isl.z0&&t>e.isl.z1+.4?t>e.isl.z0-1.6?Math.abs(i)<e.bridge-.25?.45+(e.isl.z0-t)/1.6*.55:null:e.isl.y:i>e.steps.x0+.3&&i<e.steps.x1-.3&&t>e.steps.z1?-.26*Math.min(1,(e.prom-t)/(e.prom-e.steps.z1)):null}function eM(){return He(1024,512,i=>{let t=i.createLinearGradient(0,0,0,512);t.addColorStop(0,"#1d2c5c"),t.addColorStop(.25,"#36508e"),t.addColorStop(.4,"#6f78b4"),t.addColorStop(.47,"#c48aa8"),t.addColorStop(.5,"#f4a77a"),t.addColorStop(.53,"#f6c08a"),t.addColorStop(.62,"#8e7c98"),t.addColorStop(1,"#3a3550"),i.fillStyle=t,i.fillRect(0,0,1024,512);let e=7,n=()=>(e=e*16807%2147483647)/2147483647;for(let s=0;s<70;s++){let r=n()*1024,o=60+n()*190,a=40+n()*120,l=8+n()*18,c=o>190,h=i.createRadialGradient(r,o,0,r,o,a);h.addColorStop(0,c?"rgba(250,170,150,0.42)":"rgba(120,140,200,0.45)"),h.addColorStop(1,"rgba(120,140,200,0)"),i.save(),i.translate(r,o),i.scale(1,l/a),i.translate(-r,-o),i.fillStyle=h,i.beginPath(),i.arc(r,o,a,0,7),i.fill(),i.restore()}for(let s=0;s<60;s++)i.fillStyle=`rgba(255,255,255,${.3+n()*.5})`,i.fillRect(n()*1024,n()*90,1.5,1.5)})}function hf(){return He(256,256,i=>{i.fillStyle="#ffd08a",i.fillRect(0,0,256,256);let t=i.createRadialGradient(128,128,10,128,128,180);t.addColorStop(0,"rgba(255,240,200,0.9)"),t.addColorStop(1,"rgba(230,140,50,0.4)"),i.fillStyle=t,i.fillRect(0,0,256,256),i.strokeStyle="#5a1a12",i.lineWidth=7;for(let e=0;e<=256;e+=32)i.beginPath(),i.moveTo(e,0),i.lineTo(e,256),i.stroke(),i.beginPath(),i.moveTo(0,e),i.lineTo(256,e),i.stroke();i.lineWidth=3;for(let e=0;e<256;e+=64)for(let n=0;n<256;n+=64)i.beginPath(),i.arc(e+32,n+32,14,0,7),i.stroke();i.lineWidth=16,i.strokeRect(0,0,256,256)})}function nM(){return He(64,256,i=>{i.clearRect(0,0,64,256),i.strokeStyle="#2f6a26",i.lineWidth=3,i.beginPath(),i.moveTo(32,256),i.lineTo(32,0),i.stroke();for(let t=8;t<250;t+=6){let e=30*Math.sin(Math.PI*(t/256))+3;i.strokeStyle=t%12?"#3d7d2c":"#4f9036",i.lineWidth=3,i.beginPath(),i.moveTo(32,t),i.lineTo(32-e,t-10),i.moveTo(32,t),i.lineTo(32+e,t-10),i.stroke()}})}function ci(i,t,e,n,s,r,o={}){let a=n-t,l=s-e,c=Math.hypot(a,l),h=a/c,u=l/c,d=Math.atan2(-l,a),f=st(c,.1,.18,M.lakeMats.white);f.position.set((t+n)/2,r+.82,(e+s)/2),f.rotation.y=d,i.add(f);let g=st(c,.12,.22,M.lakeMats.white);g.position.set((t+n)/2,r+.06,(e+s)/2),g.rotation.y=d,g.receiveShadow=!0,i.add(g);let x=Math.max(1,Math.round(c/2.2));for(let m=0;m<=x;m++){let p=m/x*c;kn.post.push([t+h*p,r,e+u*p,d]),o.lamp&&m%o.lamp===0&&kn.lamp.push([t+h*p-u*(o.side||0)*0,r,e+u*p])}for(let m=.2;m<c-.1;m+=.24)Math.abs(m%(c/x))<.18||kn.bal.push([t+h*m,r+.12,e+u*m])}function iM(i){let t=new Wt,e=new je,n=new tn,s=new C(1,1,1),r=Le([[0,0],[.06,0],[.06,.04],[.035,.1],[.07,.32],[.04,.5],[.03,.58],[.05,.62],[.05,.66],[0,.66]],8),o=new Vt(r,M.lakeMats.white,kn.bal.length);kn.bal.forEach(([y,_,S],w)=>{t.makeTranslation(y,_,S),o.setMatrixAt(w,t)}),o.castShadow=!0,i.add(o);let a=new te(.26,1,.26);a.translate(0,.5,0);let l=new kt(.12,10,6);l.translate(0,1.08,0);let c=new Vt(a,M.lakeMats.white,kn.post.length),h=new Vt(l,M.lakeMats.white,kn.post.length);kn.post.forEach(([y,_,S,w],R)=>{n.set(0,w,0),e.setFromEuler(n),t.compose(new C(y,_,S),e,s),c.setMatrixAt(R,t),h.setMatrixAt(R,t)}),c.castShadow=!0,i.add(c,h);let u=new Y({color:2301982,roughness:.5,metalness:.6}),d=new gt(.05,.08,2.4,8);d.translate(0,2.2,0);let f=new gt(.16,.12,.38,6);f.translate(0,3.55,0);let g=new cn(.26,.2,6);g.translate(0,3.84,0);let x=kn.lamp.length,m=new Vt(d,u,x),p=new Vt(f,M.lakeMats.lampGlass,x),v=new Vt(g,u,x);kn.lamp.forEach(([y,_,S],w)=>{t.makeTranslation(y,_,S),m.setMatrixAt(w,t),p.setMatrixAt(w,t),v.setMatrixAt(w,t),M.glows.push({pos:new C(y,_+3.55,S),size:1.5,color:16761466,lake:!0})}),i.add(m,p,v)}function Yl(i,t,e,n=7,s=.3){let r=new Ct;r.position.set(t,0,e),r.rotation.y=Math.random()*6.28,i.add(r);let o=[];for(let f=0;f<=8;f++){let g=f/8;o.push(new C(Math.sin(g*1.4)*s*n*.25,g*n,0))}let a=new gn(o),l=new xn(a,16,.17,8,!1),c=new H(l,M.lakeMats.palmTrunk);c.castShadow=!0,r.add(c);let h=o[8],u=new Jt(.9,3.6,1,8);u.translate(0,1.8,0);let d=u.attributes.position;for(let f=0;f<d.count;f++){let g=d.getY(f);d.setZ(f,-.09*g*g)}u.computeVertexNormals(),u.rotateX(-Math.PI/2+.25);{let f=[];for(let x=0;x<11;x++){let m=u.clone(),p=x/11*6.28+Math.random()*.3,v=(Math.random()-.5)*.3;m.rotateY(p),m.rotateX(v),m.translate(h.x,h.y,h.z),f.push(m)}let g=new H(en(f),M.lakeMats.frond);g.castShadow=!0,r.add(g)}return r}function sM(i){let t=new Ct;t.position.set(0,Ee.isl.y,-93),i.add(t);let e=M.mats.lacquer,n=M.lakeMats.lattice,s=new H(new te(14,.25,9.6),M.lakeMats.paveL);B(t,s,0,.12,0,!1,!0),[[-5.4,4],[-1.8,4],[1.8,4],[5.4,4],[-5.4,-4],[-1.8,-4],[1.8,-4],[5.4,-4],[-5.4,0],[5.4,0]].forEach(([m,p])=>{let v=new H(new gt(.2,.22,3.6,14),e);B(t,v,m,.25+1.8,p,!0),Se(m,-93+p,.3);let y=new H(new gt(.3,.32,.25,12),M.mats.stone);B(t,y,m,.37,p)});let r=new H(new Jt(10.8,3.2),n);r.position.set(0,1.95,-3.9),t.add(r),[-1,1].forEach(m=>{let p=new H(new Jt(7.8,3.2),n);p.position.set(m*5.35,1.95,0),p.rotation.y=-m*Math.PI/2,t.add(p)}),Gt(-5.6,5.6,-97.3,-96.7),Gt(-5.7,-5.1,-97,-89),Gt(5.1,5.7,-97,-89);let o=st(2.6,.9,.9,M.mats.lacquer);B(t,o,0,.7,-3.1,!0),Gt(-1.4,1.4,-96.6,-95.6);let a=ts(16233668);a.scale.setScalar(2.4),a.position.set(0,1.17,-3.1),t.add(a),M.glows.push({pos:new C(0,Ee.isl.y+1.6,-96.1),size:1.6,color:16764808,lake:!0});let l=new Ci(16757606,9,16,1.5);l.position.set(0,3,0),t.add(l),[-3.6,0,3.6].forEach(m=>{let p=new H(new kt(.32,14,10),M.lakeMats.redLamp);p.scale.y=1.25,p.position.set(m,3.25,4),t.add(p),M.glows.push({pos:new C(m,Ee.isl.y+3.25,-89),size:1.3,color:16738874,lake:!0})});let c=nn(7.6,5.8,1.7,1.1,.5);c.position.set(0,3.85,0),t.add(c);let h=new H(new te(8.4,2.3,5.4),[n,n,M.mats.roofUnder,M.mats.roofUnder,n,n]);h.position.set(0,3.85+1.7+1,0),t.add(h),[[-4.2,2.7],[4.2,2.7],[-4.2,-2.7],[4.2,-2.7],[-1.4,2.7],[1.4,2.7]].forEach(([m,p])=>{let v=new H(new gt(.15,.15,2.4,10),e);v.position.set(m,6.55,p),t.add(v)});let u=st(8.9,.22,5.9,M.mats.lacquer);u.position.set(0,5.5,0),t.add(u);let d=nn(5.6,4,2.4,1,0);d.position.set(0,7.75,0),t.add(d),M.interiors.push({name:"hoagac",x0:-5.4,x1:5.4,z0:-97,z1:-89,ceil:Ee.isl.y+3.4,roofs:[c,d],pmax:.7,open:!0});let f=new H(Le([[0,0],[.22,0],[.26,.2],[.14,.4],[.2,.6],[.06,.95],[0,1.1]],16),M.mats.gold);f.position.set(0,7.75+2.4,0),t.add(f);let g=new Ci(16754768,5,10,1.6);g.position.set(0,6.6,0),t.add(g);let x=new H(new Jt(2.6,.6),new Y({map:Oe(["HOA \u0110\u0102NG C\xC1C"],{w:512,h:118,size:64,fill:"#5a1610",stroke:"#2a0a04"}),roughness:.6,emissive:3807752,emissiveIntensity:.6}));x.position.set(0,3.45,4.12),t.add(x);{let m=x.clone();m.rotation.y=Math.PI,m.position.z=4.08,t.add(m)}M.pavilion=t}function rM(i){let t=Ee,e=t.prom,n=t.isl.z0,s=e-n,r=t.bridge,o=st(r*2,.3,s,M.lakeMats.paveL);B(i,o,0,.3,(e+n)/2,!0,!0);let a=st(r*2+.1,.5,s,M.lakeMats.white);B(i,a,0,-.05,(e+n)/2);for(let l=e-4;l>n+1;l-=5.6){let c=st(r*2+.3,1.4,.9,M.lakeMats.white);B(i,c,0,-.75,l);let h=new H(new Fe(1.4,.18,6,16,Math.PI),M.lakeMats.white);h.rotation.y=Math.PI/2,h.position.set(r+.05,-.5,l-2.8),i.add(h);let u=h.clone();u.position.x=-r-.05,i.add(u)}[-1,1].forEach(l=>ci(i,l*(r-.12),e,l*(r-.12),n,.45,{lamp:2}))}function oM(i){let e=new Pe(.5,16,.25,Math.PI*2-.5);e.rotateX(-Math.PI/2);let n=new Y({color:4160053,roughness:.6,side:Qt}),s=new Vt(e,n,340),r=new Wt,o=new je,a=new At,l=0,c=11,h=()=>(c=c*16807%2147483647)/2147483647,u=[];for(;l<340;){let d=h()*6.28,f=.55+Math.pow(h(),.5)*.43,g=Math.cos(d)*f*Ee.rx,x=Ee.cz+Math.sin(d)*f*Ee.rz;if(!(Math.abs(g)<4.5||Math.abs(g)<13&&x<-81&&x>-103||x>-60&&g>-12&&g<-2))for(let m=0;m<6&&l<340;m++){let p=g+(h()-.5)*3.5,v=x+(h()-.5)*3.5;if(!j_(p/.97,Ee.cz+(v-Ee.cz)/.97))continue;let y=.6+h()*.9;o.setFromAxisAngle(new C(0,1,0),h()*6.28),r.compose(new C(p,Ee.wy+.03,v),o,new C(y,1,y)),s.setMatrixAt(l,r),a.setHSL(.27+h()*.06,.45,.28+h()*.12),s.setColorAt(l,a),l++,h()<.08&&u.length<26&&u.push([p+.1,v])}}s.receiveShadow=!0,i.add(s),u.forEach(([d,f],g)=>{let x=ts(g%3?16098232:16508911);x.scale.setScalar(1.6),x.position.set(d,Ee.wy+.05,f),i.add(x)})}function aM(i){let t=5,e=()=>(t=t*16807%2147483647)/2147483647;for(let n=0;n<2;n++)for(let s=0;s<9;s++){let r=-1.2+(s+n*.5)/8.5*2.4,o=n?150:118+e()*10,a=(n?26:14)+e()*(n?18:12),l=30+e()*18,c=new kt(1,40,14,0,Math.PI*2,0,Math.PI/2),h=c.attributes.position,u=e()*9,d=e()*9,f=Math.sin(r)*o,g=-3-(n?2:0),x=-Math.cos(r)*o-8,m=Math.cos(r),p=Math.sin(r);for(let _=0;_<h.count;_++){let S=h.getX(_),w=h.getY(_),R=h.getZ(_),I=Math.atan2(R,S),T=1+.12*Math.sin(I*3+u)+.06*Math.sin(I*7+d)+.03*Math.sin(I*13+u),E=Math.pow(w,1.35)*(1+.18*Math.sin(I*2+d)),P=S*l*1.5*T*(1.15-w*.25),O=R*l*T*(1.15-w*.25),F=E*a,U=f+P*m+O*p,X=x-P*p+O*m;if(Math.abs(U)<48){let N=-1.2+Math.max(0,-103-X)*1.4;g+F>N&&(F=Math.max(0,N-g))}h.setXYZ(_,P,F,O)}c.computeVertexNormals();let v=new Y({color:n?7039120:4606572,roughness:1,fog:!0}),y=new H(c,v);y.rotation.y=r,y.position.set(Math.sin(r)*o,-3-(n?2:0),-Math.cos(r)*o-8),i.add(y)}}function cM(i){let[t,e]=Ee.gate,n=(t+e)/2,s=Me("tex-stone",2,12,{color:14209220,roughness:.9}),r=new H(new Jt(3.2,24.6),s);r.rotation.x=-Math.PI/2,r.position.set(n,.024,-23.6),r.receiveShadow=!0,i.add(r),[-1,1].forEach(c=>{let h=st(.7,3.2,.7,M.mats.plaster);B(i,h,n+c*2.95,1.6,-36,!0);let u=st(.95,.25,.95,M.mats.roof);B(i,u,n+c*2.95,3.3,-36)});let o=nn(3.6,.9,.8,.35,0,{dragons:!1});o.position.set(n,3.3,-36),i.add(o);let a=new H(new Jt(3.2,.55),new Y({map:Oe(["H\u1ED2 HOA \u0110\u0102NG"],{w:512,h:88,size:56,fill:"#6a1d12",stroke:"#2a0a04"}),roughness:.6}));a.position.set(n,2.85,-35.6),i.add(a);let l=a.clone();l.rotation.y=Math.PI,l.position.z=-36.4,l.material=a.material.clone(),l.material.map=Oe(["V\u1EC0 CH\xD9A"],{w:512,h:88,size:56,fill:"#6a1d12",stroke:"#2a0a04"}),i.add(l)}function pf(i){M.updaters=M.updaters||[],M.lakeMats={white:new Y({color:15789284,roughness:.55}),paveL:Me("tex-stone",3,3,{color:14998994,roughness:.8}),lampGlass:new Y({color:16769712,emissive:16758880,emissiveIntensity:2.2}),redLamp:new Y({color:14168092,emissive:16730656,emissiveIntensity:1.6,roughness:.5}),lattice:new Y({map:hf(),emissive:16777215,emissiveMap:hf(),emissiveIntensity:1.1,roughness:.7,side:Qt}),palmTrunk:new Y({color:8021584,roughness:.95}),frond:new Y({map:nM(),alphaTest:.4,side:Qt,roughness:.8,color:12112032})},M.lakeMats.lattice.emissiveMap.colorSpace=Ye;let t=Ee;M.twilight=eM();let e=new Pe(1,96);e.scale(t.rx+.8,t.rz+.8,1);let s=typeof location<"u"&&/[?&]q=low/.test(location.search)||typeof navigator<"u"&&(navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4||navigator.deviceMemory&&navigator.deviceMemory<=4)?256:/[?&]q=high/.test(location.search)?1024:512,r=new Sr(e,{clipBias:.003,textureWidth:s,textureHeight:s,color:12107984,shader:tM,multisample:0});r.rotation.x=-Math.PI/2,r.position.set(t.cx,t.wy,t.cz),r.visible=!1,i.add(r),M.lake=r;let o=new H(e,new Y({color:3820126,roughness:.15,metalness:.3}));o.rotation.x=-Math.PI/2,o.position.set(t.cx,t.wy-.02,t.cz),i.add(o),M.lakeUnder=o;let a=new H(new gt(1,1,1,96,1,!0),Me("tex-stone",40,1,{color:11577496,roughness:.9,side:Qt}));a.scale.set(t.rx+.7,1,t.rz+.7),a.position.set(t.cx,t.wy-.3,t.cz),i.add(a);let l=new H(new Jt(84.4,-36.4-t.prom),Me("tex-stone",20,4,{color:14077890,roughness:.85}));l.rotation.x=-Math.PI/2,l.position.set(0,.018,(t.prom-36.4)/2),l.receiveShadow=!0,i.add(l),M.ground.push(l);let c=st(84.4,.5,.5,M.lakeMats.white);B(i,c,0,-.2,t.prom-.1),ci(i,-42,t.prom,t.steps.x0,t.prom,.02,{lamp:3}),ci(i,t.steps.x1,t.prom,-t.bridge,t.prom,.02,{lamp:2}),ci(i,t.bridge,t.prom,42,t.prom,.02,{lamp:3});let h=M.lakeMats.paveL;for(let S=0;S<5;S++){let w=t.prom-.25-S*.5,R=st(t.steps.x1-t.steps.x0,.12,.5,h);B(i,R,(t.steps.x0+t.steps.x1)/2,-.06-S*.055,w,!1,!0)}[t.steps.x0,t.steps.x1].forEach(S=>{let w=st(.3,.6,2.7,M.lakeMats.white);B(i,w,S,0,t.prom-1.35)});let u=new H(new Jt(2.4,.5),new Y({map:Oe(["B\u1EBEN TH\u1EA2 \u0110\xC8N"],{w:512,h:104,size:56,fill:"#6a1d12",stroke:"#2a0a04"}),roughness:.6}));u.position.set(-7,1.3,t.prom+.35),i.add(u),M.camOcc.push(u);{let S=u.clone();S.rotation.y=Math.PI,S.position.z=t.prom+.33,i.add(S),M.camOcc.push(S)}let d=st(.12,1.2,.12,M.mats.darkwood);B(i,d,-8.1,.6,t.prom+.35);let f=d.clone();f.position.x=-5.9,i.add(f);let g=new H(new te(4,1.6,3),new Ie({visible:!1}));g.position.set(-7,.6,t.prom-1),g.userData.act="thaden",i.add(g),M.acts.push(g),rM(i);let x=st(t.isl.x*2,1.6,t.isl.z0-t.isl.z1,M.lakeMats.white);B(i,x,0,t.isl.y-.8,(t.isl.z0+t.isl.z1)/2,!1,!0);let m=new H(new Jt(t.isl.x*2-.2,t.isl.z0-t.isl.z1-.2),M.lakeMats.paveL);m.rotation.x=-Math.PI/2,m.position.set(0,t.isl.y+.005,(t.isl.z0+t.isl.z1)/2),m.receiveShadow=!0,i.add(m);let p=st(t.isl.x*2+.4,.2,t.isl.z0-t.isl.z1+.4,M.mats.stone);B(i,p,0,t.isl.y-.1,(t.isl.z0+t.isl.z1)/2);for(let S=0;S<4;S++){let w=st(t.bridge*2,.14,.4,h);B(i,w,0,.45+S*.14,t.isl.z0-.2-S*.4,!1,!0)}ci(i,-t.isl.x+.15,t.isl.z0-.15,-t.bridge,t.isl.z0-.15,t.isl.y,{lamp:2}),ci(i,t.bridge,t.isl.z0-.15,t.isl.x-.15,t.isl.z0-.15,t.isl.y,{lamp:2}),ci(i,-t.isl.x+.15,t.isl.z0-.15,-t.isl.x+.15,t.isl.z1+.15,t.isl.y,{lamp:3}),ci(i,t.isl.x-.15,t.isl.z0-.15,t.isl.x-.15,t.isl.z1+.15,t.isl.y,{lamp:3}),ci(i,-t.isl.x+.15,t.isl.z1+.15,t.isl.x-.15,t.isl.z1+.15,t.isl.y,{}),sM(i),iM(i),oM(i),aM(i),cM(i);let v=3,y=()=>(v=v*16807%2147483647)/2147483647;for(let S=0;S<30;S++){let w=Math.PI*(.05+y()*.9),R=1.12+y()*.35,I=Math.cos(w)*t.rx*R,T=t.cz-Math.sin(w)*t.rz*R;T>-56||Yl(i,I,T,6+y()*4,.2+y()*.5)}[[-36,-56],[36,-57],[-27,-55.5],[27,-55.8]].forEach(([S,w])=>Yl(i,S,w,7+y()*2,.3));for(let S=0;S<26;S++){let w=y()*Math.PI,R=1.5+y()*.6,I=Math.cos(w)*t.rx*R,T=t.cz-Math.sin(w)*t.rz*R;Ar(i,I,T,1.8+y()*1.2,[4090412,4878388,3497768][S%3])}[-1,1].forEach(S=>{for(let w=0;w<4;w++)Yl(i,S*(t.isl.x-1.2),t.isl.z0-2-w*4.1,4.5+y()*1.5,.15)}),M.lakeLanterns=[],[{id:"amb0",name:"Minh",w:"An l\xE0nh",s:0,col:16756936,t:Date.now()-45e3},{id:"amb1",name:"H\u1EA1nh",w:"B\xECnh an",s:2,col:16765562,t:Date.now()-9e4},{id:"amb2",name:"T\xE2m",w:"T\u1EEB bi",s:1,col:16769712,t:Date.now()-12e4},{id:"amb3",name:"Lan",w:"May m\u1EAFn",s:3,col:16764762,t:Date.now()-6e4},{id:"amb4",name:"Ph\xFAc",w:"H\u1EA1nh ph\xFAc",s:0,col:16752752,t:Date.now()-15e4},{id:"amb5",name:"An",w:"Nam m\xF4",s:4,col:16761048,t:Date.now()-3e4}].forEach(S=>uM(S,i,!1)),M.updaters.push((S,w)=>{if(r.visible){let R=r.material.uniforms;R.time.value=w}fM(S,w)})}function ff(i){let t=2166136261,e=String(i);for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return(t>>>0)/4294967295}function lM(i){let[t,e]=Ee.release,n=Math.sin(i),s=-Math.cos(i),r=0,o=!1;for(;r<80;r+=.5){let a=t+n*r,l=e+s*r,c=(a-Ee.cx)/(Ee.rx*.88),h=(l-Ee.cz)/(Ee.rz*.88),u=c*c+h*h>1;if(u||(o=!0),u&&(o||r>8)||Math.abs(a)<3.2||Math.abs(a)<11.5&&l<-83&&l>-101.5)break}return Math.max(2.5,r-1.5)}function hM(i,t){let e=new Ct,n=ql[i%ql.length],s=new At(t??n.c),r=new Y({color:s,emissive:s,emissiveIntensity:.28,roughness:.55,transparent:!0,opacity:.92,side:Qt});if(n.kind==="lotus"){let u=ts(s.getHex());u.scale.setScalar(1.95),u.traverse(f=>{f.material&&(f.material=f.material.clone(),f.material.emissive=s.clone(),f.material.emissiveIntensity=.12,f.material.roughness=.55,f.material.metalness=.02)}),e.add(u);let d=new H(new Pe(.36,18),new Y({color:4160053,side:Qt,emissive:1718802,emissiveIntensity:.15}));d.rotation.x=-Math.PI/2,e.add(d)}else if(n.kind==="box"){let u=st(.5,.06,.5,M.mats.darkwood);u.position.y=.02,e.add(u);let d=new H(new te(.32,.36,.32),r);d.position.y=.24,e.add(d);let f=new H(new te(.36,.04,.36),M.mats.darkwood);f.position.y=.44,e.add(f);let g=f.clone();g.position.y=.06,e.add(g)}else{let u=new H(new gt(.22,.22,.75,14,1,!1,0,Math.PI),new Y({color:9067054,roughness:.8,side:Qt}));u.rotation.set(0,0,Math.PI/2),u.rotation.order="ZYX",u.rotateX(Math.PI/2),u.position.y=.12,e.add(u);let d=new H(new gt(.09,.12,.28,10,1,!0),r);d.position.y=.32,e.add(d)}let o=new mn(new hn({map:uf||(uf=Vs()),color:16760944,transparent:!0,depthWrite:!1,blending:Xe,opacity:.4}));o.scale.setScalar(.55),o.position.y=.22,e.add(o);let a=new mn(new hn({map:o.material.map,color:16752704,transparent:!0,depthWrite:!1,blending:Xe,opacity:.12}));a.scale.setScalar(.95),a.position.y=.2,e.add(a);let l=new mn(new hn({map:df||(df=ea()),transparent:!0,depthWrite:!1,blending:Xe}));l.scale.set(.07,.16,1),l.center.set(.5,.1),l.position.y=n.kind==="box"?.14:.3,e.add(l);let c=new H(new Pe(.55,20),new Ie({color:s,transparent:!0,opacity:.28,blending:Xe,depthWrite:!1,side:Qt}));c.rotation.x=-Math.PI/2,c.position.y=.02,e.add(c);let h=new H(new kt(.55,8,6),new Ie({visible:!1}));return h.position.y=.3,h.userData.act="hdlabel",e.add(h),M.acts.push(h),e.scale.setScalar(1.15),e.userData={glow:o,glow2:a,fl:l,refl:c,hit:h},e}function uM(i,t,e){if(t||(t=M.lake&&M.lake.parent),!t||!i.prem&&i.t&&Date.now()+(M.clockSkew||0)-i.t>M.OFFER.lantern.lifeMin*6e4)return;let n=i.id||i.t+":"+(i.name||"");if(M.lakeLanterns.some(c=>c.userData.id===n))return;let s=hM(i.s||0,i.col),r=ff(n),o=ff(n+"b"),a=e?-.15+r*.45:-1.15+r*1.55,l=Math.min(lM(a),e?10+o*14:5+o*24);for(Object.assign(s.userData,{id:n,item:i,phi:a,D:l,r1:r,r2:o,t0:i.t||Date.now(),mine:!!e,showcase:!!e}),s.userData.hit.userData.lantern=s,t.add(s),M.lakeLanterns.push(s);M.lakeLanterns.filter(c=>!c.userData.item.prem).length>M.OFFER.lantern.cap;){let c=M.lakeLanterns.findIndex(d=>!d.userData.item.prem);if(c<0)break;let h=M.lakeLanterns.splice(c,1)[0];t.remove(h);let u=M.acts.indexOf(h.userData.hit);u>=0&&M.acts.splice(u,1),h.userData.label&&t.remove(h.userData.label)}return mf(s,performance.now()/1e3,0),e&&(s.scale.setScalar(1),setTimeout(()=>{try{pM(s,8)}catch{}},5500)),s}function dM(i){let t=(M.lakeLanterns||[]).findIndex(s=>s.userData.id===i);if(t<0)return;let e=M.lakeLanterns.splice(t,1)[0];e.parent&&e.parent.remove(e);let n=M.acts.indexOf(e.userData.hit);n>=0&&M.acts.splice(n,1),e.userData.label&&e.userData.label.parent&&e.userData.label.parent.remove(e.userData.label)}function mf(i,t,e){let n=i.userData,s=Math.max(0,(Date.now()-n.t0)/1e3),[r,o]=Ee.release,a=Math.sin(n.phi),l=-Math.cos(n.phi),c=n.showcase?s<4?.035:.11:.12,h=Math.min(s*c,n.D),u=h/Math.max(n.D,.01),d=Math.sin(s*.07+n.r2*6.28)*1.4*Math.min(1,s/20),f=s*c,g=f>n.D?(f-n.D)*.02:0,x=r+a*h+-l*d+Math.cos(g+n.r1*6)*Math.min(g*3,1.2)*.8,m=o+l*h+a*d+Math.sin(g+n.r1*6)*Math.min(g*3,1.2)*.8;i.position.set(x,Ee.wy+.04+Math.sin(t*1.5+n.r1*9)*.03,m),i.rotation.set(Math.sin(t*1.1+n.r2*5)*.05,s*.05+n.r1*6,Math.cos(t*.9+n.r1*5)*.05);let p=n.item.prem?1e12:M.OFFER.lantern.lifeMin*60,v=Math.max(0,Math.min(1,(p-s)/90));if(v<=0){n.dead=!0;return}let y=n.mine?1:1.05;v<1?i.scale.setScalar(y*(.55+.45*v)):i.scale.setScalar(y);let _=.85+Math.sin(t*7+n.r1*20)*.1+Math.sin(t*13.3)*.05;n.glow.material.opacity=.32*_*v,n.glow2&&(n.glow2.material.opacity=.12*_*v),n.refl&&(n.refl.material.opacity=.26*_*v),n.fl.scale.set(.14,.28+Math.sin(t*15+n.r2*9)*.04,1),n.tick&&n.tick(t),n.label&&(n.label.position.set(x,Ee.wy+(n.ly||1.55),m),n.labelT&&t>n.labelT&&(n.label.parent&&n.label.parent.remove(n.label),n.label=null))}function fM(i,t){(M.lakeLanterns||[]).forEach(n=>mf(n,t,i)),(M.lakeLanterns||[]).filter(n=>n.userData.dead).forEach(n=>dM(n.userData.id))}function Zv(){let i=M.lakeLanterns||[];for(let t=i.length-1;t>=0;t--)if(i[t].userData&&i[t].userData.mine)return i[t];return null}function pM(i,t=8){let e=i.userData,n=e.item||{};n.prem&&(t=1e9);let s=[(n.prem?"\u2728 ":"")+(n.name||"M\u1ED9t Ph\u1EADt t\u1EED")+" \u{1FAB7}"],r=String(n.w||n.text||"").trim();if(r){let h=r.split(/\s+/),u="";h.forEach(d=>{(u+" "+d).length>26?(s.push(u),u=d):u=u?u+" "+d:d}),u&&s.push(u)}let o=s.slice(0,4);e.label&&e.label.parent&&e.label.parent.remove(e.label);let a=Oe(o,n.prem?{w:512,h:60+o.length*52,size:38,fill:"rgba(92,40,6,0.82)",color:"#ffe39a",weight:700,stroke:"#f3c35a"}:{w:512,h:60+o.length*52,size:38,fill:"rgba(40,24,40,0.72)",color:"#fff8e6",weight:600}),l=new mn(new hn({map:a,transparent:!0,depthWrite:!1})),c=(60+o.length*52)/512;l.scale.set(1.8,1.8*c,1),l.renderOrder=20,i.parent.add(l),e.label=l,e.labelT=performance.now()/1e3+t}var Ee,tM,kn,uf,df,gf=sn(()=>{wn();Er();rf();Ii();ai();Xl();lf();Ee={cx:0,cz:-86,rx:44,rz:34,wy:-.3,prom:-51.2,gate:[17.2,22.8],bridge:1.8,isl:{x:10,z0:-84.5,z1:-100,y:1},steps:{x0:-9,x1:-5,z1:-53.8},release:[-7,-54.6]};tM={name:"LakeShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},time:{value:0},deep:{value:new At(1911360)},fogColor:{value:new At(10128040)},camPos:{value:new C}},vertexShader:`uniform mat4 textureMatrix; varying vec4 vUv; varying vec3 vW;
  void main(){ vUv = textureMatrix * vec4(position,1.0); vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform vec3 color; uniform sampler2D tDiffuse; uniform float time; uniform vec3 deep; uniform vec3 fogColor; uniform vec3 camPos; varying vec4 vUv; varying vec3 vW;
  void main(){
    vec2 p = vW.xz;
    float w1 = sin(p.x*1.7 + time*1.1) * cos(p.y*1.3 - time*0.8);
    float w2 = sin(p.x*4.1 - p.y*3.3 + time*2.2) * 0.5;
    float w3 = sin(dot(p, vec2(0.6,-0.8))*7.0 + time*3.1) * 0.25;
    vec2 d = vec2(w1 + w3, w2 + w1*0.5) * 0.012;
    vec4 uv = vUv; uv.xy += d * uv.w;
    vec3 refl = texture2DProj(tDiffuse, uv).rgb;
    vec3 V = normalize(camPos - vW); float fres = 0.35 + 0.65 * pow(1.0 - max(V.y, 0.0), 3.0);
    vec3 col = mix(deep, refl * color, clamp(fres + 0.25, 0.0, 1.0));
    float dist = length(camPos - vW); col = mix(col, fogColor, clamp(1.0 - exp(-dist*dist*0.000012), 0.0, 0.55));
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`};kn={bal:[],post:[],lamp:[]}});function mM(){let i=new gt(.22,.28,.55,12,1,!0);return i.translate(0,.28,0),i}function _f(i){ae.scene=i;let t=2.2,e=-40.2,n=new Ct;n.position.set(t,0,e),i.add(n);let s=new H(new gt(1.1,1.25,.18,20),M.mats.stoneS);s.position.y=.09,s.receiveShadow=!0,n.add(s),B(n,st(.12,2,.12,M.mats.beam),0,1,-.55);let r=Oe("TH\u1EA2 \u0110\xC8N TR\u1EDCI",{w:1024,h:256,size:110,fill:"#4a1c10",stroke:"#2a0a04"}),o=new Y({map:r,roughness:.6}),a=new H(new te(2.4,.55,.08),[M.mats.beam,M.mats.beam,M.mats.beam,M.mats.beam,o,o]);a.position.set(0,1.85,-.55),n.add(a);let l=new H(new te(2.52,.67,.06),M.mats.goldDim);l.position.copy(a.position),n.add(l);let c=new H(new gt(1.4,1.4,.06,16),new Ie({visible:!1}));c.position.y=.05,n.add(c),c.userData.act="dentroi",M.acts.push(c),Se(t,e,1.05),ae.pad={x:t,z:e,g:n};let h=new Y({color:16769712,emissive:16748576,emissiveIntensity:.75,roughness:.55,metalness:.05,side:Qt,vertexColors:!0}),u=new Vt(mM(),h,Zl);return u.instanceMatrix.setUsage($o),u.count=0,u.castShadow=!1,u.frustumCulled=!1,u.instanceColor=new ei(new Float32Array(Zl*3),3),i.add(u),ae.im=u,M.skyLanterns=ae,M.updaters=M.updaters||[],M.updaters.push((d,f)=>gM(d,f)),n}function $l(i,t){let e=ae.o;e.position.set(t.x,t.y,t.z),e.rotation.set(t.tiltX||0,t.yaw||0,t.tiltZ||0),e.scale.setScalar(t.sc||1),e.updateMatrix(),ae.im.setMatrixAt(i,e.matrix),ae.im.setColorAt(i,new At(t.color||16769712))}function jv(i,t){if(!ae.im||!ae.scene)return null;let e=xf[i.s|0]||xf[0],n=ae.pad||{x:2.2,z:-40.2},s=Math.random()*Math.PI*2,r={id:i.id||"sk"+Date.now().toString(36)+Math.random().toString(36).slice(2,5),name:i.name||"",text:String(i.text||"Nguy\u1EC7n b\xECnh an").slice(0,60),s:i.s|0,color:e.color,emissive:e.emissive,t0:i.t||Date.now(),age:i.age||0,ph:Math.random()*6.28,x:t?n.x+.4:n.x+Math.cos(s)*(.5+Math.random()*1.4),z:t?n.z-5.5:n.z+Math.sin(s)*(.5+Math.random()*1.4)-Math.random()*2,y:t?7.2:1.2,ty:t?17+Math.random()*4:14+Math.random()*10,sc:t?1.05:.9+Math.random()*.25,yaw:Math.random()*6,tiltX:0,tiltZ:0,mine:!!t,showcase:!!t};for(;ae.items.length>=Zl;)Mf(0);let o=ae.items.length;ae.items.push(r),$l(o,r),ae.im.count=ae.items.length,ae.im.instanceMatrix.needsUpdate=!0,ae.im.instanceColor&&(ae.im.instanceColor.needsUpdate=!0);let a=Gn(t?1.15:.85,e.emissive);a.position.set(r.x,r.y+.25,r.z),a.material.opacity=t?.7:.6,ae.scene.add(a);let l=new H(new kt(.45,8,6),new Ie({visible:!1}));if(l.position.copy(a.position),ae.scene.add(l),l.userData.act="skylamp",l.userData.sky=r,M.acts.push(l),r.hit=l,r.glow=a,t){let c=new Ct,h=new Y({color:e.color,emissive:e.emissive,emissiveIntensity:.42,roughness:.55,side:Qt}),u=new H(new gt(.22,.28,.62,14,1,!0),h);u.position.y=.34,c.add(u);let d=new H(new cn(.24,.12,12),new Y({color:5909008,roughness:.7}));d.position.y=.7,c.add(d);let f=new H(new Fe(.24,.025,6,16),new Y({color:5909008,roughness:.7}));f.rotation.x=Math.PI/2,f.position.y=.66,c.add(f);let g=f.clone();g.position.y=.04,c.add(g);let x=Gn(.22,16760944);x.position.y=.16,x.material.opacity=.95,c.add(x);let m=Gn(.95,e.emissive);m.position.y=.38,m.material.opacity=.4,c.add(m),c.position.set(r.x,r.y,r.z),c.scale.setScalar(1.35),ae.scene.add(c),r.mesh=c,r.flame=x,r.halo=m,r.sc=.001}return r}function Mf(i){let t=ae.items[i];if(t){if(t.glow&&(t.glow.removeFromParent(),t.glow.material&&t.glow.material.dispose()),t.mesh&&t.mesh.removeFromParent(),t.hit){let e=M.acts.indexOf(t.hit);e>=0&&M.acts.splice(e,1),t.hit.removeFromParent()}ae.items.splice(i,1),ae.items.forEach((e,n)=>$l(n,e)),ae.im.count=ae.items.length,ae.im.instanceMatrix.needsUpdate=!0,ae.im.instanceColor&&(ae.im.instanceColor.needsUpdate=!0)}}function gM(i,t){if(!(!ae.im||!ae.items.length)){for(let e=ae.items.length-1;e>=0;e--){let n=ae.items[e];n.age+=i;let s=480;if(n.age>s){Mf(e);continue}n.yaw+=i*.25,n.tiltX=Math.sin(t*.7+n.ph)*.12,n.tiltZ=Math.cos(t*.55+n.ph*1.3)*.1;let r=n.showcase?7.2:1.2,o=n.showcase?16:18,a=Math.min(1,n.age/o);n.y=r+(n.ty-r)*(1-Math.pow(1-a,1.55));let l=n.showcase&&n.age<4?.35:1;if(n.x+=Math.sin(t*.2+n.ph)*i*.08*l,n.z+=Math.cos(t*.18+n.ph)*i*.06*l,n.mine&&n.mesh&&(n.sc=.001),$l(e,n),n.glow){n.glow.position.set(n.x,n.y+.25,n.z);let c=.65+Math.sin(t*5+n.ph)*.12,h=n.age>s-40?Math.max(0,(s-n.age)/40):1,u=n.mine?.7:.6;n.glow.material.opacity=u*c*h,n.glow.scale.setScalar((n.mine?1.15:.85)+c*.2)}if(n.mesh){n.mesh.position.set(n.x,n.y,n.z),n.mesh.rotation.set(n.tiltX||0,n.yaw||0,n.tiltZ||0);let c=.7+Math.sin(t*6+n.ph)*.15;n.halo&&(n.halo.material.opacity=.5*c),n.flame&&n.flame.scale.setScalar(.2+c*.08)}n.hit&&n.hit.position.set(n.x,n.y+.2,n.z)}ae.im.instanceMatrix.needsUpdate=!0,ae.im.instanceColor&&(ae.im.instanceColor.needsUpdate=!0),ae.im.material&&(ae.im.material.emissiveIntensity=.7+Math.sin(t*2.2)*.1)}}function tE(){let i=ae.items||[];for(let t=i.length-1;t>=0;t--)if(i[t].mine)return i[t];return null}var Zl,xf,ae,vf=sn(()=>{wn();Ii();ai();yf();Zl=20,xf=[{id:"basic",n:"\u0110\xE8n gi\u1EA5y th\u01B0\u1EDDng",ic:"\u2601\uFE0F",color:16769712,emissive:16748576,free:!0,hint:"Mi\u1EC5n ph\xED 1 l\u1EA7n/ng\xE0y"},{id:"hong",n:"H\u1ED3ng an l\xE0nh",ic:"\u{1F338}",color:16756936,emissive:16728168,xu:5},{id:"vang",n:"V\xE0ng c\xE1t t\u01B0\u1EDDng",ic:"\u{1F49B}",color:16765562,emissive:16752672,xu:5},{id:"ngoc",n:"Ng\u1ECDc thanh t\u1ECBnh",ic:"\u{1FA75}",color:12118271,emissive:4235519,xu:8},{id:"sen",n:"Sen h\u1ED3ng v\u1EBD",ic:"\u{1FAB7}",color:16761048,emissive:16736400,xu:10}],ae={im:null,items:[],o:new Zt,scene:null,pad:null}});function xM(){return new Y({color:13144110,side:Qt,roughness:.85,metalness:0})}function Tf(i){Te.scene=i;let{x:t,z:e}=Cr,n=new Ct;n.position.set(t-1.6,0,e+1.4),i.add(n),B(n,st(.12,1.9,.12,M.mats.beam),0,.95,0);let s=Oe("G\xD3C QU\xC9T L\xC1",{w:1024,h:256,size:120,fill:"#4a1c10",stroke:"#2a0a04"}),r=new Y({map:s,roughness:.6}),o=new H(new te(2.2,.5,.08),[M.mats.beam,M.mats.beam,M.mats.beam,M.mats.beam,r,r]);o.position.set(0,1.75,0),n.add(o);let a=new H(new te(2.32,.62,.06),M.mats.goldDim);a.position.copy(o.position),n.add(a);let l=new H(new gt(1.8,1.8,.05,16),new Ie({visible:!1}));l.position.set(t,.03,e),i.add(l),l.userData.act="quetla",M.acts.push(l),Se(t-1.6,e+1.4,.4);let c=new Jt(.14,.08),h=xM(),u=new Vt(c,h,ra);u.instanceMatrix.setUsage($o),u.castShadow=!1,u.receiveShadow=!0,u.frustumCulled=!1,u.instanceColor=new ei(new Float32Array(ra*3),3),i.add(u),Te.im=u;let d=new At;for(let x=0;x<ra;x++){let m=wf(x,!0);Te.items.push(m),oa(x,m),d.set(Ef[x%Ef.length]),u.setColorAt(x,d)}u.count=ra,u.instanceMatrix.needsUpdate=!0,u.instanceColor&&(u.instanceColor.needsUpdate=!0);let f=new kt(.55,10,6);f.scale(1,.35,1);let g=new H(f,new Y({color:11565096,roughness:.9}));return g.position.set(t+1.4,.08,e+.6),g.scale.setScalar(.15),g.visible=!1,i.add(g),Te.pile=g,M.leafCorner=Te,M.updaters=M.updaters||[],M.updaters.push(x=>yM(x)),n}function wf(i,t){let{x:e,z:n}=Cr,s=Math.random()*6.28,r=.6+Math.random()*2.4;return{x:e+Math.cos(s)*r,z:n+Math.sin(s)*r,y:.03+Math.random()*.02,yaw:Math.random()*6,tilt:(Math.random()-.5)*.5,sc:.7+Math.random()*.6,state:"ground",age:t?Math.random()*30:0,tx:0,tz:0,ty:0}}function oa(i,t){let e=Te.o;e.position.set(t.x,t.y,t.z),e.rotation.set(Math.PI/2+t.tilt,t.yaw,0),e.scale.setScalar(t.state==="piled"?.001:t.sc),e.updateMatrix(),Te.im.setMatrixAt(i,e.matrix)}function sE(i,t){if(!Te.im)return 0;let e=Math.sin(t),n=Math.cos(t),s=i.x+e*.55,r=i.z+n*.55,o=0,a=Te.pile.position;for(let l=0;l<Te.items.length;l++){let c=Te.items[l];c.state!=="ground"||Math.hypot(c.x-s,c.z-r)>1.35||(c.state="flying",c.tx=a.x+(Math.random()-.5)*.5,c.tz=a.z+(Math.random()-.5)*.5,c.ty=.12+Math.random()*.1,c.flyT=0,o++)}return o}function yM(i){if(!Te.im)return;let t=!1,e=0;for(let n=0;n<Te.items.length;n++){let s=Te.items[n];if(s.state==="flying"){s.flyT=(s.flyT||0)+i;let r=Math.min(1,s.flyT/.55),o=1-Math.pow(1-r,2);if(s.x+=(s.tx-s.x)*Math.min(1,i*5),s.z+=(s.tz-s.z)*Math.min(1,i*5),s.y=.04+Math.sin(o*Math.PI)*.45,s.yaw+=i*8,r>=1&&(s.state="piled",s.y=s.ty,s.x=s.tx,s.z=s.tz,Te.pileN++,Te.pile)){Te.pile.visible=!0;let a=Math.min(1.15,.2+Te.pileN*.035);Te.pile.scale.setScalar(a)}oa(n,s),t=!0}else if(s.state==="piled"){if(e++,s.age=(s.age||0)+i,s.age>14+n%7*1.8){let r=wf(n,!1);if(Object.assign(s,r),s.state="ground",Te.pileN=Math.max(0,Te.pileN-1),Te.pile){let o=Math.min(1.15,.2+Te.pileN*.035);Te.pile.scale.setScalar(Math.max(.12,o)),Te.pileN<=0&&(Te.pile.visible=!1)}oa(n,s),t=!0}}else s.age=(s.age||0)+i,(n+(s.age*2|0))%40===0&&(s.yaw+=(Math.random()-.5)*.08,oa(n,s),t=!0)}t&&(Te.im.instanceMatrix.needsUpdate=!0)}var Cr,ra,Te,Ef,bf=sn(()=>{wn();Ii();ai();Cr={x:10.6,z:11.2},ra=48,Te={im:null,pile:null,items:[],o:new Zt,scene:null,pileN:0},Ef=[13144110,11563040,9071146,13934656,8018472]});function pE(i){if(i)for(let t in M.OFFER)Object.assign(M.OFFER[t],i[t]||{})}function _M(){let i=M.mats;i.floor=Me("tex-floor",7,5,{roughness:.75,envMapIntensity:.6}),i.floor.map.rotation=i.floor.normalMap.rotation=i.floor.roughnessMap.rotation=Math.PI/2,i.lacquer=Me("tex-lacquer",1,3,{color:14196880,roughness:.55,envMapIntensity:.9}),i.lacquerB=Me("tex-lacquer",3,1,{color:13144706,roughness:.55}),i.carved=Me("tex-carved",1,1,{color:13281408,roughness:.6,metalness:.25,normalScale:1.4}),i.carvedT=Me("tex-carved",4,1,{color:12098168,roughness:.6,metalness:.2,normalScale:1.4}),i.darkwood=Me("tex-floor",1,1,{color:6965813,roughness:.7}),i.beam=Me("tex-floor",4,1,{color:6044200,roughness:.65}),i.roof=Me("tex-roof",6,4,{roughness:.95,normalScale:1.6,side:Bn}),i.roofUnder=new Y({color:3810328,roughness:.85,side:Qe,map:Kt("tex-floor",6,6)}),i.stone=Me("tex-stone",17,10,{roughness:1,normalScale:1.3}),i.stoneS=Me("tex-stone",2,1,{color:12104360,roughness:1}),i.grass=Me("tex-grass",24,24,{roughness:1,color:11978650}),i.pebble=Me("tex-pebble",3,2,{roughness:.9,color:10132106}),i.gold=new Y({color:14723132,metalness:1,roughness:.28,envMapIntensity:1.4}),i.goldDim=new Y({color:12159546,metalness:.9,roughness:.42}),i.bronze=new Y({color:7035450,metalness:.85,roughness:.45,map:Kt("tex-stone",1,1)}),i.patina=new Y({color:6257254,metalness:.6,roughness:.55,map:Kt("tex-pebble",2,2)}),i.plaster=new Y({color:15326402,roughness:.95,map:Kt("tex-stone",3,2),normalMap:Kt("tex-stone-n",3,2,!1),normalScale:new rt(.25,.25)}),i.cushion=new Y({color:16777215,roughness:.95,normalMap:Kt("tex-grass-n",2,2,!1),normalScale:new rt(.3,.3)}),i.mat=new Y({color:9071166,roughness:.95,normalMap:Kt("tex-grass-n",3,3,!1),normalScale:new rt(.2,.2)}),i.redCloth=new Y({color:10231576,roughness:.8}),i.yellowCloth=new Y({color:14723372,roughness:.8}),i.leaf=new Y({color:5208629,roughness:.9,map:Kt("tex-grass",1,1),side:Qt}),i.trunk=new Y({color:7166794,roughness:1,map:Kt("tex-stone",1,3),normalMap:Kt("tex-stone-n",1,3,!1)})}function B(i,t,e,n,s,r=!0,o=!0){return t.position.set(e,n,s),t.castShadow=r,t.receiveShadow=o,i.add(t),t}function MM(i,t,e,n,s=0,r=40){let o=[],a=[],l=[],c=Math.max(0,i-t),h=r;for(let d=0;d<=h;d++)for(let f=0;f<=h;f++){let g=f/h*2-1,x=d/h*2-1,m=g*i,p=x*t,v=Math.max(0,(Math.abs(m)-c)/t),y=Math.abs(p)/t,_=Math.min(1,Math.max(v,y)),S=s>0?Math.max(0,(_-s)/(1-s)):_,w=e*Math.pow(1-S,1.45),R=Math.min(1,v);w+=n*Math.pow(R*y,3.2)+n*.12*Math.pow(S,4),o.push(m,w,p),a.push(v>y?p/1.6:m/1.6,S*t/1.1)}for(let d=0;d<h;d++)for(let f=0;f<h;f++){let g=d*(h+1)+f,x=g+1,m=g+h+1,p=m+1;if(s>0){let v=(f+.5)/h*2-1,y=(d+.5)/h*2-1,_=v*i,S=y*t;if(Math.max(Math.max(0,(Math.abs(_)-c)/t),Math.abs(S)/t)<s)continue}l.push(g,m,x,x,m,p)}let u=new me;return u.setAttribute("position",new Xt(o,3)),u.setAttribute("uv",new Xt(a,2)),u.setIndex(l),u.computeVertexNormals(),u}function Rf(i,t,e,n,s,r,o){let a=Math.max(0,i-t),l=Math.max(0,(Math.abs(r)-a)/t),c=Math.abs(o)/t,h=Math.min(1,Math.max(l,c)),u=s>0?Math.max(0,(h-s)/(1-s)):h;return e*Math.pow(1-u,1.45)+n*Math.pow(Math.min(1,l)*c,3.2)+n*.12*Math.pow(u,4)}function nn(i,t,e,n,s=0,r={}){let o=new Ct,a=MM(i,t,e,n,s),l=new H(a,M.mats.roof);l.castShadow=!0,l.receiveShadow=!0,o.add(l),M.occ.push(l),M.camOcc.push(l),o.userData.roofShell={Wd:i,D:t,h:e,lift:n};let c=new H(a,M.mats.roofUnder);c.position.y=-.06,o.add(c);let h=r.ridgeMat||new Y({color:7033926,roughness:.9}),u=Math.max(0,i-t);if(!s){let f=st(u*2+.6,.38,.42,h);B(o,f,0,e+.15,0)}if([[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([f,g])=>{let x=[],p=s?f*(u+s*t):f*u,v=s?g*s*t:0;for(let w=0;w<=12;w++){let R=w/12,I=p+(f*i-p)*R,T=v+(g*t-v)*R;x.push(new C(I,Rf(i,t,e,n,s,I,T)+.16,T))}let y=x[x.length-1];x.push(new C(y.x+f*.35,y.y+.45,y.z+g*.35)),x.push(new C(y.x+f*.4,y.y+1,y.z+g*.4)),x.push(new C(y.x+f*.2,y.y+1.25,y.z+g*.2));let _=new xn(new gn(x),40,.13,7,!1),S=new H(_,h);S.castShadow=!0,o.add(S)}),!s&&r.dragons!==!1){let f=new H(new kt(.32,20,14),M.mats.gold);B(o,f,0,e+.75,0);let g=new H(new Fe(.42,.06,8,24),M.mats.goldDim);B(o,g,0,e+.75,0),[-1,1].forEach(x=>{let m=[];for(let y=0;y<=14;y++){let _=y/14;m.push(new C(x*(.6+_*Math.min(u,3.2)),e+.38+Math.sin(_*Math.PI*2.2)*.32+_*.15,Math.sin(_*9)*.05))}m.push(new C(x*.55,e+.95,0));let p=new H(new xn(new gn(m.slice(0,15)),40,.1,6),M.mats.patina);p.castShadow=!0,o.add(p);let v=new H(new kt(.2,10,8),M.mats.patina);v.scale.set(1.4,1,.8),B(o,v,x*.75,e+.7,0)})}return o}function ji(i,t,e,n,s,r=!0){let o=new H(Kl,M.mats.lacquer);return o.scale.y=s,B(i,o,t,n+s/2,e),M.camOcc.push(o),B(i,new H(Af,M.mats.stoneS),t,n+.16,e),B(i,new H(Ql,M.mats.goldDim),t,n+.45,e,!1),B(i,new H(Ql,M.mats.goldDim),t,n+s-.3,e,!1),r&&Se(t,e,.5),o}function vM(i,t){let e=t.length,n=new Zt,s=new Vt(Kl,M.mats.lacquer,e);s.castShadow=!0,s.receiveShadow=!0;let r=new Vt(Af,M.mats.stoneS,e);r.castShadow=!0,r.receiveShadow=!0;let o=new Vt(Ql,M.mats.goldDim,e*2);return t.forEach((a,l)=>{let{x:c,z:h,y0:u,hgt:d}=a;n.position.set(c,u+d/2,h),n.scale.set(1,d,1),n.rotation.set(0,0,0),n.updateMatrix(),s.setMatrixAt(l,n.matrix),n.position.set(c,u+.16,h),n.scale.set(1,1,1),n.updateMatrix(),r.setMatrixAt(l,n.matrix),n.position.set(c,u+.45,h),n.updateMatrix(),o.setMatrixAt(l*2,n.matrix),n.position.set(c,u+d-.3,h),n.updateMatrix(),o.setMatrixAt(l*2+1,n.matrix),a.collide!==!1&&Se(c,h,.5),M._colOccMat||(M._colOccMat=new Ie({visible:!1}));let f=new H(Kl,M._colOccMat);f.castShadow=!1,f.scale.y=d,f.position.set(c,u+d/2,h),i.add(f),M.camOcc.push(f),M.columns.push(f)}),i.add(s,r,o),s}function EM(i){let t=new Si;t.moveTo(-200,-200),t.lineTo(200,-200),t.lineTo(200,200),t.lineTo(-200,200),t.lineTo(-200,-200);let e=new ni;e.absellipse(0,86,44.6,34.6,0,Math.PI*2,!0),t.holes.push(e);let n=Me("tex-grass",.1,.1,{roughness:1,color:M.mats.grass.color.getHex()}),s=new H(new Xo(t,64),n);s.rotation.x=-Math.PI/2,s.receiveShadow=!0,i.add(s);let r=new H(new Jt(88,66),M.mats.stone);r.rotation.x=-Math.PI/2,r.position.set(0,.012,-2),r.receiveShadow=!0,i.add(r),M.ground.push(r,s);let o=Me("tex-stone",2,12,{color:14209220,roughness:.9}),a=new H(new Jt(4.2,40),o);a.rotation.x=-Math.PI/2,a.position.set(0,.022,10),a.receiveShadow=!0,i.add(a),M.ground.push(a);let l=M.mats.plaster,c=(h,u,d,f)=>{let g=st(d,1.7,f,l);B(i,g,h,.85,u);let x=st(d+.3,.22,f+.3,new Y({color:7028012,roughness:.9,map:Kt("tex-roof",d/2,1)}));B(i,x,h,1.8,u)};c(-44,-3,.5,66),c(44,-3,.5,66),c(-13.5,-36,61,.5),c(33.5,-36,21,.5),c(-25.7,30,36.6,.5),c(25.7,30,36.6,.5),Gt(-45,-43.5,-37,31),Gt(43.5,45,-37,31),Gt(-45,17.1,-37,-35.2),Gt(22.9,45,-37,-35.2),Gt(-45,-7.4,29.6,31),Gt(7.4,45,29.6,31),Gt(-14.6,14.6,-35.2,-33.4),Gt(-14.6,-5,-12.35,-11.9),Gt(5,14.6,-12.35,-11.9)}function TM(i){let{H0:t}=he,e=new Ct;i.add(e),M.hallGroup=e;let n=st(29,t,23,Me("tex-stone",6,5,{color:13156532}));B(e,n,0,t/2,-23),Gt(-14.6,-5.25,-11.95,-11.4),Gt(5.25,14.6,-11.95,-11.4);for(let T=0;T<3;T++){let E=st(10+(2-T)*0,t/3,.7,M.mats.stoneS);B(e,E,0,t/6+T*t/3-0,-10.35-T*.62),E.scale.y=1,E.position.y=(T+1)*t/3-t/6}[-1,1].forEach(T=>{let E=st(.5,1,2.4,M.mats.stoneS);B(e,E,T*5.3,.5,-11),E.rotation.x=.28,Gt(T*5.3-.3,T*5.3+.3,-12.3,-9.8)});let s=new H(new Jt(26.4,20.9),M.mats.floor);s.rotation.x=-Math.PI/2,s.position.set(0,t+.01,-22.75),s.receiveShadow=!0,e.add(s),M.ground.push(s);let r=new H(new Jt(10,2.6),new Ie({visible:!1}));r.rotation.x=-Math.PI/2+Math.atan2(t,2),r.position.set(0,t/2,-11),e.add(r),M.ground.push(r);let o=15.6,a=12.4,l=3,c=1.3,h=.5,u=(T,E)=>5.6+Rf(o,a,l,c,h,T,E+23),d=[-13.2,-18,-22.8,-27.6,-32.4];M.columns=[];{let T=[];d.forEach(E=>{[-5.8,5.8].forEach(P=>T.push({x:P,z:E,y0:t,hgt:Math.min(8.6,u(P,E)+.1)})),[-12.7,12.7].forEach(P=>T.push({x:P,z:E,y0:t,hgt:u(P,E)+.1}))}),vM(e,T)}d.forEach(T=>{let E=Math.min(8.6,u(5.8,T));if(T>-32){let P=st(11.2,.5,.4,M.mats.carvedT);B(e,P,0,t+E-.55,T)}[-1,1].forEach(P=>{let O=st(6.6,.42,.34,M.mats.beam);B(e,O,P*9.25,t+u(12.7,T)-.45,T)})}),[-5.8,5.8].forEach(T=>{let E=st(.4,.5,12.4,M.mats.beam);B(e,E,T,t+8.3,-23)});let f=new H(new Jt(18.8,12.4),Me("tex-carved",4,3,{color:10122832,roughness:.7,metalness:.2}));f.rotation.x=Math.PI/2,f.position.set(0,t+8.55,-23),e.add(f);let g=st(26.8,6.3,.4,M.mats.darkwood);B(e,g,0,t+3.15,-33.6);let x=new H(new Jt(10.2,5.74),new Y({map:Kt("mural",1,1),roughness:.85,emissive:2759176,emissiveIntensity:.25,emissiveMap:Kt("mural",1,1)}));B(e,x,0,t+3.85,-33.38,!1,!0);let m=M.mats.gold;[[0,2.94,10.6,.16],[0,-2.94,10.6,.16],[-5.2,0,.16,6.04],[5.2,0,.16,6.04]].forEach(([T,E,P,O])=>B(e,st(P,O,.12,m),T,t+3.85+E,-33.32)),[-1,1].forEach(T=>{let E=new H(new Jt(6.4,4.6),M.mats.carved);B(e,E,T*9.3,t+2.9,-33.38,!1)}),Gt(-14,14,-34.2,-33.1),[-1,1].forEach(T=>{let E=T*13.55,P=st(.4,1.1,21.6,M.mats.darkwood);B(e,P,E,t+.55,-22.8);let O=st(.4,2.1,21.6,M.mats.carved.clone());O.material.map=Kt("tex-carved",6,1),B(e,O,E,t+5.2,-22.8);for(let X=0;X<4;X++){let N=-15.6-X*4.8,Z=[];for(let ot=-6;ot<=6;ot++){let yt=new te(.08,3.05,.07);yt.translate(0,0,ot*.33),Z.push(yt)}let G=new H(en(Z),M.mats.beam);G.position.set(E,t+2.6,N),e.add(G);let j=st(.5,.12,4.2,M.mats.beam);B(e,j,E,t+1.12,N);let et=st(.5,.12,4.2,M.mats.beam);B(e,et,E,t+4.12,N)}Gt(T>0?13.2:-14.6,T>0?14.6:-13.2,-34,-12);let F=new Ie({map:Kt("forest",1,1),fog:!1,toneMapped:!0,color:16777215}),U=new H(new Jt(30,14),F);U.position.set(T*21,t+4,-22.8),U.rotation.y=-T*Math.PI/2,e.add(U),M.forestPlanes=(M.forestPlanes||[]).concat(U)}),[-1,1].forEach(T=>{let E=T*6.1,P=T*13.6,O=Math.abs(P-E),F=(E+P)/2,U=st(O,1.1,.25,M.mats.lacquerB);B(e,U,F,t+.55,-12.45);for(let N=0;N<4;N++){let Z=E+T*(N+.5)*O/4,G=st(O/4-.15,3.4,.12,M.mats.carved);B(e,G,Z,t+2.85,-12.45)}let X=st(O,1.7,.3,M.mats.carvedT);B(e,X,F,t+5.4,-12.45),Gt(Math.min(E,P)-.1,Math.max(E,P)+.1,-12.75,-12.15)});let p=st(12.6,1,.35,M.mats.carvedT);B(e,p,0,t+5.6,-12.45),[-1,1].forEach(T=>{for(let E=0;E<2;E++){let P=st(1.4,5,.1,M.mats.lacquerB);B(e,P,T*(6.3+.08*E),t+2.6,-12+E*.12),P.rotation.y=T*1.45}});let v=nn(o,a,l,c,h);v.position.set(0,t+5.6,-23),e.add(v);let y=st(18.8,1.45,12.4,M.mats.carvedT);B(e,y,0,t+9.3,-23),y.material=y.material.clone(),y.material.map=Kt("tex-carved",8,1);let _=nn(10.8,7.4,3.4,1,0);_.position.set(0,t+10,-23),e.add(_),M.interiors.push({name:"chanhdien",x0:-13.4,x1:13.4,z0:-33.4,z1:-12.2,ceil:t+6,roofs:[v,_,y],pmax:.62});let S=new Image;S.src=Gs("hoanhphi");let w=()=>Oe("CH\xD9A T\xC2M AN",{w:1024,h:506,size:150,bg:S,stroke:"#3a0a06",mirror4:!0,area:[.19,.29,.81,.71]}),R=new Y({roughness:.5,metalness:.2});S.onload=()=>{R.map=w(),R.needsUpdate=!0};let I=new H(new Jt(2.8,1.38),R);return B(e,I,0,t+9.33,-16.77,!1,!1),e}function Le(i,t=40){return new ii(i.map(e=>new rt(e[0],e[1])),t)}function wM(){let i=new Ct,t=M.mats.gold,e=(c,h,u,d,f=1,g=1,x=1,m=t)=>{let p=new H(c,m);return p.position.set(h,u,d),p.scale.set(f,g,x),p.castShadow=!0,p.receiveShadow=!0,i.add(p),p};e(Le([[0,0],[1.25,0],[1.3,.1],[1.15,.22],[1,.3],[.95,.42],[1.05,.5],[0,.5]]),0,0,0,1,1,.82,M.mats.goldDim);let n=new kt(.32,14,10);for(let c=0;c<2;c++)for(let h=0;h<16;h++){let u=h/16*Math.PI*2+c*.2,d=1.05-c*.12,f=e(n,Math.cos(u)*d,.62+c*.12,Math.sin(u)*d*.82,.62,1.05,.28);f.rotation.y=-u+Math.PI/2,f.rotation.x=-.35-c*.15,f.lookAt(Math.cos(u)*4,2.2+c,Math.sin(u)*4*.82)}let s=new Ct;i.add(s),M.buddhaBody=s;let r=i;{let c=s,h=(p,v,y,_,S=1,w=1,R=1,I=t)=>{let T=new H(p,I);return T.position.set(v,y,_),T.scale.set(S,w,R),T.castShadow=!0,T.receiveShadow=!0,c.add(T),T};h(new kt(1,32,18),0,.98,.12,.98,.32,.62),h(new si(.2,1,8,16),0,1.06,.42,1,1,.9).rotation.z=Math.PI/2,h(Le([[0,0],[.62,0],[.66,.25],[.6,.62],[.55,.9],[.52,1.08],[.36,1.22],[.17,1.3],[0,1.31]]),0,1.05,0,1,1,.66),h(new Fe(.62,.07,8,30,Math.PI*.9),.05,1.7,.08,1,1.25,.75).rotation.set(0,0,-2.2),[-1,1].forEach(p=>{let v=h(new si(.15,.55,6,12),p*.6,1.72,.05);v.rotation.z=p*.38,v.rotation.x=.3,h(new si(.13,.5,6,12),p*.42,1.32,.38).rotation.set(1.25,0,p*-1)}),h(new kt(.2,16,10),0,1.24,.5,1.6,.45,1),h(new gt(.16,.2,.2,16),0,2.4,0);let d=h(new kt(.34,32,24),0,2.78,.02,.92,1.08,.98);h(new kt(.34,24,16,0,Math.PI*2,0,Math.PI*.5),0,2.86,-.01,.95,.8,.98);let f=new kt(.035,6,5),g=new Vt(f,M.mats.goldDim,220),x=0,m=new Zt;for(let p=0;p<220;p++){let v=Math.acos(1-Math.random()*.85),y=Math.random()*Math.PI*2;Math.sin(y)>.35&&v>.75||(m.position.set(Math.sin(v)*Math.cos(y)*.315,2.88+Math.cos(v)*.28,Math.sin(v)*Math.sin(y)*.31),m.updateMatrix(),g.setMatrixAt(x++,m.matrix))}g.count=x,g.castShadow=!0,c.add(g),h(new kt(.15,18,12),0,3.2,-.01,1,.9,1),[-1,1].forEach(p=>{h(new kt(.07,10,8),p*.32,2.66,0,.5,2,.8)}),h(new cn(.045,.14,8),0,2.76,.33).rotation.x=-.25,h(new kt(.018,8,6),0,2.92,.315,1,1,1,new Y({color:16769184,emissive:16760928,emissiveIntensity:.6}))}let o=He(512,512,(c,h)=>{let u=h/2;c.translate(u,u);let d=c.createRadialGradient(0,0,40,0,0,u);d.addColorStop(0,"rgba(255,230,160,0.9)"),d.addColorStop(.35,"rgba(240,180,70,0.6)"),d.addColorStop(.75,"rgba(200,120,40,0.25)"),d.addColorStop(1,"rgba(160,80,20,0)"),c.fillStyle=d,c.beginPath(),c.arc(0,0,u,0,7),c.fill(),c.strokeStyle="rgba(255,220,140,0.85)",c.lineWidth=6,[.42,.7,.93].forEach(f=>{c.beginPath(),c.arc(0,0,u*f,0,7),c.stroke()});for(let f=0;f<48;f++)c.rotate(Math.PI*2/48),c.fillStyle="rgba(255,214,120,0.55)",c.beginPath(),c.moveTo(u*.72,-6),c.quadraticCurveTo(u*.86,0,u*.72,6),c.quadraticCurveTo(u*.92,0,u*.72,-6),c.fill()}),a=new H(new Pe(1.5,48),new Ie({map:o,transparent:!0,depthWrite:!1,blending:Xe,opacity:.85}));a.position.set(0,2.25,-.6),i.add(a),M.halo=a;let l=new H(new Fe(.52,.035,8,40),M.mats.gold);return l.position.set(0,2.8,-.4),i.add(l),M.haloRing=l,i}function bM(i){let t=new Ct;i.add(t);let{H0:e,altarZ:n}=he,s=st(10,1.2,3.6,M.mats.lacquer);B(t,s,0,e+.6,n-1.6);let r=new H(new Jt(9.6,.95),M.mats.carvedT);B(t,r,0,e+.6,n+.21,!1);let o=st(6.4,1,2.4,M.mats.lacquer);B(t,o,0,e+1.7,n-2);let a=new H(new Jt(6.1,.8),M.mats.carvedT);B(t,a,0,e+1.7,n-.79,!1),[-1,1].forEach(F=>{let U=st(10.1,.08,3.7,M.mats.goldDim);B(t,U,0,e+1.22,n-1.6)});let l=wM();l.position.set(0,e+2.2,n-2.3),l.scale.setScalar(1.25),t.add(l),M.buddha=l;let c=n+1.5,h=st(4.2,1,1.2,M.mats.lacquer);B(t,h,0,e+.5,c);let u=new H(new Jt(4,.8),M.mats.carved);B(t,u,0,e+.5,c+.61,!1);let d=st(4.3,.04,1.3,new Y({color:15251536,metalness:.55,roughness:.32,envMapIntensity:1.3}));B(t,d,0,e+1.02,c);let f=new H(new Jt(1.4,.7),M.mats.redCloth);B(t,f,0,e+.68,c+.66,!1);let g=SM();g.position.set(0,e+1.04,c-.05),t.add(g),M.incenseBowl=new C(0,e+1.04+g.userData.top,c-.05),M.urnSticks=new C(0,e+1.04+g.userData.top-.04,c-.05);let x=new Y({color:13639706,roughness:.42,emissive:3802114,emissiveIntensity:.4});[-1,1].forEach(F=>{let U=new H(Le([[0,0],[.15,0],[.15,.03],[.07,.1],[.04,.16],[.06,.2],[.035,.26],[.035,.5],[.06,.54],[.12,.58],[.13,.61],[0,.61]],24),M.mats.gold);B(t,U,F*.95,e+1.04,c-.05);let X=new H(new gt(.055,.058,.42,16),x);B(t,X,F*.95,e+1.04+.61+.21,c-.05),M.glows.push({pos:new C(F*.95,e+1.04+.61+.5,c-.05),size:.75,flame:!0,fs:.1});let N=new H(Le([[0,0],[.09,0],[.1,.03],[.17,.14],[.16,.26],[.09,.4],[.07,.48],[.1,.54],[.1,.56],[0,.56]],28),new Y({color:16184300,roughness:.12,metalness:0,envMapIntensity:1.2}));B(t,N,F*1.65,e+1.04,c-.05),Sf(t,F*1.65,e+1.04+.54,c-.05,.85,3,2);let Z=new H(Le([[0,0],[.12,0],[.12,.05],[.3,.09],[.32,.11],[0,.07]],28),M.mats.gold);B(t,Z,F*.48,e+1.04,c+.3);let G=[[0,0,0],[.13,0,0],[-.13,0,0],[0,0,.13],[0,0,-.13],[.1,0,.1],[-.1,0,-.1],[.1,0,-.1],[-.1,0,.1],[.05,1,.04],[-.05,1,-.04],[.04,1,-.06],[-.04,1,.06],[0,2,0]];{M._fruitGeo||(M._fruitGeo=new kt(.075,14,10),M._fruitMats=[14165530,15761948,13119518,15245344].map($=>new Y({color:$,roughness:.35})));let yt=[[],[],[],[]];G.forEach(([$,ut,St],dt)=>yt[dt%4].push([F*.48+$,e+1.04+.14+ut*.11,c+.3+St]));let Et=new Zt;yt.forEach(($,ut)=>{if(!$.length)return;let St=new Vt(M._fruitGeo,M._fruitMats[ut],$.length);$.forEach((dt,Nt)=>{Et.position.set(dt[0],dt[1],dt[2]),Et.scale.set(1,.9,1),Et.updateMatrix(),St.setMatrixAt(Nt,Et.matrix)}),t.add(St)})}let j=new H(Le([[0,0],[.2,0],[.22,.04],[.36,.3],[.33,.6],[.2,.86],[.15,.98],[.2,1.06],[.21,1.1],[0,1.1]],32),new Y({color:2050714,roughness:.12,envMapIntensity:1.3}));B(t,j,F*3.8,e+1.2,n-.6),Sf(t,F*3.8,e+1.2+1.08,n-.6,1.5,5,4);let et=new H(Le([[0,0],[.2,0],[.2,.04],[.07,.12],[.045,.3],[.07,.36],[.04,.42],[.04,1.4],[.08,1.44],[.2,1.5],[.22,1.55],[0,1.55]],20),M.mats.gold);B(t,et,F*2.6,e+1.2,n-.4);let ot=new H(new gt(.05,.05,.3,14),x);B(t,ot,F*2.6,e+1.2+1.55+.15,n-.4),M.glows.push({pos:new C(F*2.6,e+1.2+1.55+.37,n-.4),size:.8,flame:!0,fs:.1})});let m=new Image;m.src=Gs("hoanhphi");let p=new Y({roughness:.7,metalness:0});m.onload=()=>{p.map=Oe("T\u1EEA BI H\u1EF6 X\u1EA2",{w:1024,h:506,size:150,bg:m,stroke:"#3a0a06",mirror4:!0,area:[.19,.29,.81,.71]}),p.needsUpdate=!0};let v=new H(new Jt(4.8,2.37),p);v.position.set(0,e+6.75,-27.35),t.add(v);let y=[["T\u1EEB","bi","r\u1ED9ng","m\u1EDF","mu\xF4n","nh\xE0","an","l\u1EA1c"],["Tr\xED","tu\u1EC7","s\xE1ng","soi","kh\u1EAFp","ch\u1ED1n","b\xECnh","y\xEAn"]];[-1,1].forEach((F,U)=>{let X=Oe(y[U],{w:160,h:1024,size:60,vertical:!0,fill:"#3a0d08"}),N=new H(new te(.55,4.4,.06),[M.mats.goldDim,M.mats.goldDim,M.mats.goldDim,M.mats.goldDim,new Y({map:X,roughness:.5}),M.mats.goldDim]);B(t,N,F*5.8,e+4.2,-27.6+.36,!1,!1)}),Gt(-5.1,5.1,-33.2,n+.3),Gt(-2.3,2.3,c-.7,c+.7);let _=new Ct;_.position.set(he.moSpot[0],e,he.moSpot[1]-1.1),t.add(_);let S=new H(new gt(.5,.52,.22,24),M.mats.redCloth);B(_,S,0,.42,0);let w=st(.9,.32,.9,M.mats.lacquer);B(_,w,0,.16,0);let R=new H(new kt(.42,28,20),new Y({color:10107420,roughness:.45,map:Kt("tex-floor",1,1)}));R.scale.set(1,.82,1.08),B(_,R,0,.82,0);let I=st(.62,.035,.08,new Y({color:1706501}));B(_,I,0,.8,.44,!1);let T=new Ct;T.position.set(.5,1.1,.25),_.add(T),B(T,new H(new gt(.025,.025,.55,8),M.mats.beam),0,0,0).rotation.z=.9,B(T,new H(new kt(.075,12,10),M.mats.redCloth),-.22,-.17,0),R.userData.noMerge=T.userData.noMerge=1,M.mo={group:_,mesh:R,mallet:T,hit:0},Se(he.moSpot[0],he.moSpot[1]-1.1,.75);let E=new Ct;E.position.set(he.khanhSpot[0],e,he.khanhSpot[1]-1.1),t.add(E),B(E,st(.9,.32,.9,M.mats.lacquer),0,.16,0),B(E,new H(new gt(.42,.44,.18,24),M.mats.redCloth),0,.41,0),B(E,new H(Le([[0,0],[.36,.02],[.42,.2],[.43,.4],[.38,.42],[.36,.25],[0,.22]],32),M.mats.bronze),0,.5,0),Se(he.khanhSpot[0],he.khanhSpot[1]-1.1,.75);let P=new Ct;P.position.set(he.drum[0],e,he.drum[1]),t.add(P);let O=new H(new gt(.8,.8,1,32,1,!0),M.mats.lacquer);return O.rotation.x=Math.PI/2,B(P,O,0,1.5,0),[-1,1].forEach(F=>{let U=new H(new Pe(.8,32),new Y({color:14205082,roughness:.8,side:Qt}));B(P,U,0,1.5,F*.5,!1)}),[-1,1].forEach(F=>B(P,st(.14,2.4,.14,M.mats.beam),F*.95,1.2,0)),B(P,st(2.1,.14,.14,M.mats.beam),0,2.4,0),Se(he.drum[0],he.drum[1],1.2),t}function Sf(i,t,e,n,s=1,r=3,o=2){if(!li){let x=new kt(1,14,10,0,Math.PI*2,0,Math.PI/2);x.scale(.07,.16,.035),x.translate(0,0,.03);let m=x.attributes.position,p=new Float32Array(m.count*3);for(let _=0;_<m.count;_++){let S=Math.min(1,m.getY(_)/.13),w=new At(16770284).lerp(new At(15220858),Math.pow(S,.7));p.set([w.r,w.g,w.b],_*3)}x.setAttribute("color",new Ne(p,3));let v=new Pe(.16,22),y=v.attributes.position;for(let _=0;_<y.count;_++){let S=Math.hypot(y.getX(_),y.getY(_));y.setZ(_,S*S*2.2+Math.sin(Math.atan2(y.getY(_),y.getX(_))*7)*.006*S/.16)}v.computeVertexNormals(),li={pg:x,lg:v,pm:new Y({vertexColors:!0,roughness:.55,side:Qt,emissive:4198432,emissiveIntensity:.35}),sm:new Y({color:4880940,roughness:.7}),lm:new Y({color:4160050,roughness:.6,side:Qt}),cm:new Y({color:15913034,roughness:.5,emissive:4206592})}}let a=new Ct;a.position.set(t,e,n),a.scale.setScalar(s),i.add(a);let l=(x,m,p)=>{let v=new Hs(new C(0,0,0),new C(x*.3,m*.6,p*.3),new C(x,m,p)),y=new H(new xn(v,8,.008,5),li.sm);a.add(y)},c=0;for(let x=0;x<r;x++)x%3!==2&&(c+=24);let h=c?new Vt(li.pg,li.pm,c):null,u=0,d=new Zt,f=new Zt;for(let x=0;x<r;x++){let m=x/r*Math.PI*2+.4,p=x===0?.02:.12+x%2*.05,v=x===0?.5:.32+x%3*.07,y=Math.cos(m)*p,_=Math.sin(m)*p+.03;if(l(y,v,_),f.position.set(y,v,_),f.rotation.set(_*1.2,0,-y*1.2),f.updateMatrix(),x%3===2){let w=new H(new kt(.05,12,10),li.pm);w.scale.set(1,1.7,1),w.position.set(y,v+.06,_),w.rotation.copy(f.rotation),a.add(w);continue}[[10,.07,.75],[8,.045,.45],[6,.02,.2]].forEach(([w,R,I],T)=>{for(let E=0;E<w;E++){let P=E/w*Math.PI*2+T*.35;d.position.set(Math.cos(P)*R,.01+T*.012,Math.sin(P)*R),d.rotation.order="YXZ",d.rotation.set(-I,-P+Math.PI/2,0),d.scale.setScalar(1-T*.15),d.updateMatrix(),h.setMatrixAt(u++,f.matrix.clone().multiply(d.matrix))}});let S=new H(new gt(.03,.022,.025,12),li.cm);S.position.set(y,v+.03,_),S.rotation.copy(f.rotation),a.add(S)}h&&a.add(h);let g=o?new Vt(li.lg,li.lm,o):null;for(let x=0;x<o;x++){let m=x/o*Math.PI*2+1.2,p=Math.cos(m)*.2,v=Math.sin(m)*.2,y=.18+x%2*.12;l(p,y,v),d.position.set(p,y,v),d.rotation.set(-Math.PI/2+Math.sin(m)*.5,0,Math.cos(m)*.5),d.scale.set(1,1,1),d.updateMatrix(),g&&g.setMatrixAt(x,d.matrix)}return g&&(g.castShadow=!0,a.add(g)),a}function SM(){let i=new Ct,t=new Y({color:11042878,metalness:.95,roughness:.34,envMapIntensity:1.4,map:Kt("tex-carved",2,1),normalMap:Kt("tex-carved-n",2,1,!1),normalScale:new rt(.8,.8)}),e=new Y({color:5914656,metalness:.9,roughness:.45}),n=M.mats.gold,s=new H(Le([[0,0],[.36,0],[.38,.03],[.3,.06],[0,.06]],36),e);i.add(s);for(let c=0;c<3;c++){let h=c/3*Math.PI*2+Math.PI/2,u=new H(Le([[0,0],[.06,0],[.04,.06],[.05,.12],[.04,.16],[0,.16]],12),e);u.position.set(Math.cos(h)*.24,.05,Math.sin(h)*.24),i.add(u)}let r=new H(Le([[0,.18],[.2,.18],[.36,.24],[.44,.34],[.46,.44],[.42,.52],[.36,.56],[.38,.6],[.43,.62],[.43,.65],[.34,.65],[.34,.6],[0,.6]],48),t);r.castShadow=!0,i.add(r);let o=new H(new Fe(.455,.014,8,48),n);o.rotation.x=Math.PI/2,o.position.y=.44,i.add(o);let a=new H(new Fe(.43,.016,8,48),n);a.rotation.x=Math.PI/2,a.position.y=.65,i.add(a);let l=new H(new Pe(.34,32),new Y({color:9077368,roughness:1}));return l.rotation.x=-Math.PI/2,l.position.y=.6,i.add(l),[-1,1].forEach(c=>{let h=[[.4,.46,0],[.56,.5,0],[.64,.64,0],[.6,.8,0],[.5,.86,0],[.46,.8,0]].map(([x,m,p])=>new C(c*x,m,p)),u=new H(new xn(new gn(h),30,.035,8),t);u.castShadow=!0,i.add(u);let d=new H(new kt(.065,14,10),t);d.scale.set(1.5,.9,.9),d.position.set(c*.53,.88,0),d.rotation.z=c*.4,i.add(d);let f=new H(new cn(.035,.12,8),t);f.rotation.z=c*Math.PI/2,f.position.set(c*.44,.86,0),i.add(f),[-1,1].forEach(x=>{let m=new H(new cn(.014,.1,6),n);m.position.set(c*.58,.95,x*.03),m.rotation.z=-c*.7,i.add(m)}),[.6,.72].forEach(x=>{let m=new H(new cn(.03,.08,4),n);m.position.set(c*.66,x,0),m.rotation.z=-c*1.2,i.add(m)});let g=new H(new kt(.012,6,5),n);g.position.set(c*.55,.91,.05),i.add(g)}),i.userData.top=.6,i}function RM(i){let{H0:t}=he,e=[],n=[-4.65,-3.1,-1.55,1.55,3.1,4.65,-10.4,-8.85,-7.3,7.3,8.85,10.4];for(let c=0;c<7;c++)for(let h of n)e.push([h,-14.9-c*1.55]);let s=new gt(.36,.38,.16,24);s.translate(0,.08,0);let r=s.attributes.position;for(let c=0;c<r.count;c++)if(r.getY(c)>.15){let u=r.getX(c),d=r.getZ(c),f=Math.hypot(u,d);r.setY(c,.16+.03*(1-f/.36))}s.computeVertexNormals();let o=new Vt(s,M.mats.cushion,e.length);o.castShadow=!0,o.receiveShadow=!0;let a=new Vt(new te(1,.025,1.15),M.mats.mat,e.length);a.receiveShadow=!0;let l=new Zt;e.forEach(([c,h],u)=>{l.position.set(c,t+.03,h),l.rotation.set(0,0,0),l.updateMatrix(),o.setMatrixAt(u,l.matrix),l.position.y=t+.012,l.updateMatrix(),a.setMatrixAt(u,l.matrix),M.cushions.push({x:c,z:h,y:t+.19,taken:null}),o.setColorAt(u,new At((u*7+(u>>3))%5===0?13207850:9316894))}),i.add(o,a),o.userData.act="thien",M.acts.push(o)}function AM(i){let{H0:t}=he,[e,n]=he.candleWall,s=new Ct;s.position.set(e,t,n),i.add(s);for(let u=0;u<4;u++){let d=st(4.2,.08,.5,M.mats.beam);B(s,d,0,.5+u*.42,.42-u*.3);let f=st(4.2,.5+u*.42,.06,M.mats.darkwood);B(s,f,0,(.5+u*.42)/2,.66-u*.3)}B(s,st(4.4,2.6,.15,M.mats.carved),0,1.3,-.75);let r=[];for(let u=0;u<4;u++)for(let d=0;d<18;d++)r.push(new C(e-1.95+d*.23+u%2*.1,t+.54+u*.42,n+.42-u*.3));let o=new gt(.06,.05,.1,10);o.translate(0,.05,0);let a=new Vt(o,new Y({color:15784096,roughness:.3,transparent:!0,opacity:.85,emissive:16751152,emissiveIntensity:0}),r.length);a.count=0,i.add(a),M.candles={slots:r,cups:a,lit:[],n:0};let l=[];for(let u=0;u<4;u++)for(let d=0;d<17;d+=2)l.push(new C(e-1.95+d*.23+u%2*.1+.115,t+.54+u*.42,n+.42-u*.3));let c=new Vt(o,new Y({color:13119530,roughness:.35,emissive:16732192,emissiveIntensity:.35}),l.length),h=new Zt;return l.forEach((u,d)=>{h.position.copy(u),h.updateMatrix(),c.setMatrixAt(d,h.matrix),M.glows.push({pos:u.clone().setY(u.y+.13),size:.28,color:16752704,flame:d%4===0,fs:.05})}),i.add(c),Gt(e-2.4,e+2.4,n-.9,n+.9),s}function CM(i){let[t,e]=he.urn,n=new Ct;n.position.set(t,0,e),i.add(n);let s=new Y({color:13146684,metalness:.85,roughness:.3,envMapIntensity:1.3}),r=new Y({color:11051930,roughness:.95,flatShading:!0}),o=m=>(m=m.index?m.toNonIndexed():m,["uv","uv1"].forEach(p=>m.getAttribute(p)&&m.deleteAttribute(p)),m),a=(m,p,v,y,_=0,S=0,w=0,R=1,I=1,T=1)=>(m.applyMatrix4(new Wt().compose(new C(p,v,y),new je().setFromEuler(new tn(_,S,w)),new C(R,I,T))),o(m)),l=[a(new gt(2.3,2.45,.3,28),0,.15,0),a(new gt(1.7,1.8,.22,28),0,.41,0)];for(let m=0;m<16;m++){let p=m/16*Math.PI*2+.1;l.push(a(new Vo(.28,0),Math.cos(p)*2.2,.38,Math.sin(p)*2.2,m,m*2,0,1.2+m%3*.15,.7,1))}[-1,1].forEach(m=>{let p=m*3.4,v=.4;[[new te(.7,.35,.7),0,.17,0],[new gt(.22,.3,.55,7),0,.62,-.05,-.25],[new kt(.26,8,6),0,1,.08],[new kt(.16,7,5),0,.97,.3,0,0,0,1,.8,1],[new Fe(.22,.08,5,10),0,.92,.02,.3],[new gt(.07,.08,.4,6),.14,.52,.22],[new gt(.07,.08,.4,6),-.14,.52,.22],[new kt(.1,6,5),m*-.1,.48,-.32]].forEach(([_,S,w,R,I=0,T=0,E=0,P=1,O=1,F=1])=>l.push(a(_,p+S,w,v+R,I,T,E,P,O,F))),Se(t+p,e+v,.72)});let c=new H(en(l),r);c.receiveShadow=!0,c.castShadow=!0,n.add(c);let h=1,u=[[0,0],[.55,0],[.82,.1],[.98,.32],[1.04,.55],[.98,.8],[.86,.95],[.84,1.02],[.95,1.08],[.98,1.14],[.86,1.16],[.8,1.04],[0,1.04]],d=[a(new ii(u.map(([m,p])=>new rt(m,p)),36),0,h,0)];d.push(a(new Fe(1.045,.03,6,40),0,h+.55,0,Math.PI/2),a(new Fe(.88,.025,6,40),0,h+.93,0,Math.PI/2));for(let m=0;m<18;m++){let p=m/18*Math.PI*2;d.push(a(new kt(.055,6,4),Math.cos(p)*.93,h+.82,Math.sin(p)*.93)),d.push(a(new kt(.05,6,4),Math.cos(p+.17)*1,h+.36,Math.sin(p+.17)*1))}for(let m=0;m<4;m++){let p=m/4*Math.PI*2+Math.PI/4,v=Math.cos(p),y=Math.sin(p),_=new gn([new C(v*.6,h+.15,y*.6),new C(v*.95,h-.1,y*.95),new C(v*.9,h-.4,y*.9),new C(v*1.02,.58,y*1.02)]);d.push(o(new xn(_,10,.1,7))),d.push(a(new kt(.16,8,6),v*1.08,.6,y*1.08,0,0,0,1,.55,1)),[-.35,0,.35].forEach(S=>d.push(a(new kt(.06,6,4),Math.cos(p+S*.25)*1.24,.57,Math.sin(p+S*.25)*1.24))),d.push(a(new kt(.12,7,5),v*.97,h-.1,y*.97))}[-1,1].forEach(m=>{let p=new gn([new C(m*.92,h+1.06,0),new C(m*1.25,h+1.3,0),new C(m*1.3,h+1.75,0),new C(m*1.08,h+1.95,0)]);d.push(o(new xn(p,14,.06,7))),d.push(a(new kt(.11,8,6),m*1.04,h+1.98,0))});let f=new H(en(d),s);f.castShadow=!0,n.add(f);let g=new H(new Pe(.8,32),new Y({color:9340796,roughness:1}));g.rotation.x=-Math.PI/2,g.position.y=h+.98,n.add(g);let x=new H(new gt(1.3,1.3,2.4,10),new Ie({transparent:!0,opacity:0,depthWrite:!1}));x.position.y=1.2,n.add(x),x.userData.act="huong",M.acts.push(x),Se(t,e,2.75),M.urnTop=new C(t,h+.98,e),M.urnTop.__sc=2.3,M.urnTop.__r=.72}function IM(i){let[t,e]=he.bell,n=new Ct;n.position.set(t,0,e),i.add(n),B(n,st(6,.6,6,M.mats.stoneS),0,.3,0),M.bellBase=n,[[-2.2,-2.2],[2.2,-2.2],[-2.2,2.2],[2.2,2.2]].forEach(([h,u])=>ji(n,h,u,.6,4.6,!1)),[-2.2,2.2].forEach(h=>{B(n,st(4.9,.36,.3,M.mats.carvedT),0,5,h),B(n,st(.3,.36,4.9,M.mats.carvedT),h,5,0)});let s=nn(3.8,3.8,1.6,.9,.45,{dragons:!1});s.position.y=5.2,n.add(s),B(n,st(3,.9,3,M.mats.carvedT),0,6.3,0);let r=nn(2.8,2.8,1.9,.8,0,{dragons:!1});r.position.y=6.7,n.add(r),M.interiors.push({name:"gacchuong",x0:t-2.4,x1:t+2.4,z0:e-2.4,z1:e+2.4,ceil:4.7,roofs:[s,r],pmax:.75,open:!0}),B(n,new H(new kt(.22,12,10),M.mats.gold),0,8.75,0);let o=new Ct;o.position.set(0,4.75,0),n.add(o);let a=new H(Le([[0,.1],[.5,.05],[.62,-.25],[.66,-.9],[.74,-1.55],[.82,-1.68],[.76,-1.72],[.66,-1.6],[0,-1.6]],48),M.mats.patina);a.castShadow=!0,o.add(a);for(let h=0;h<3;h++)B(o,new H(new Fe(.665+h*.03,.022,6,48),M.mats.bronze),0,-.55-h*.4,0,!1).rotation.x=Math.PI/2;B(o,new H(new Fe(.15,.05,8,16),M.mats.bronze),0,.2,0,!1);let l=new Ct;l.position.set(1.7,3.95,0),n.add(l);let c=new H(new gt(.17,.17,1.6,16),M.mats.trunk);c.rotation.z=Math.PI/2,c.position.y=-.85,l.add(c),[-.5,.5].forEach(h=>{let u=new H(new gt(.015,.015,.85,4),new Y({color:13150320}));u.position.set(h,-.42,0),l.add(u)}),Gt(t-3.1,t+3.1,e-3.1,e+3.1),l.userData.noMerge=1,M.bell={group:o,log:l,hit:0,swing:0},a.userData.act="chuong",M.acts.push(a)}function PM(i){let t=he.gate,e=new Ct;e.position.set(0,0,t),i.add(e);let n=Me("tex-stone",1,3,{color:11578012});[-7,-3.2,3.2,7].forEach(g=>{B(e,st(1,5.2,1,n),g,2.6,0),B(e,st(1.3,.4,1.3,M.mats.stoneS),g,5.3,0),Gt(g-.6,g+.6,t-.6,t+.6)}),B(e,st(6.4,1.2,.8,M.mats.carvedT),0,6.1,0),[-1,1].forEach(g=>{B(e,st(2.8,.8,.7,M.mats.carvedT),g*5.1,4.6,0)});let s=nn(5.2,2.4,1.4,.8,.45,{dragons:!1});s.position.set(0,6.6,0),e.add(s),B(e,st(4.2,1,2,M.mats.carvedT),0,7.4,0);let r=nn(3.6,1.9,1.5,.7,0);r.position.set(0,7.9,0),e.add(r),M.interiors.push({name:"cong",x0:-2.7,x1:2.7,z0:t-.6,z1:t+.6,ceil:4.5,roofs:[s,r],pmax:.7,open:!0}),[-1,1].forEach(g=>{let x=nn(2.3,1.6,.9,.5,0,{dragons:!1});x.position.set(g*5.1,5,0),e.add(x)});let o=new Image;o.src=Gs("hoanhphi");let a=new Y({roughness:.5}),l=g=>Oe("T\xC2M AN T\u1EF0",g?{w:1024,h:400,size:210,bg:g,stroke:"#3a0a06",mirror4:!0,area:[.17,.27,.83,.73]}:{w:1024,h:400,size:210,fill:"#5a1610",stroke:"#2a0a04",pad:70});a.map=l(null),a.emissive=new At(2757638),a.emissiveIntensity=.5,o.onload=()=>{a.map=l(o),a.needsUpdate=!0};let c=4.4,h=1.72,u=5.72,d=st(c+.24,h+.24,.9,M.mats.goldDim||M.mats.carvedT);B(e,d,0,u,0,!1),[1,-1].forEach(g=>{let x=new H(new Jt(c,h),a);x.position.set(0,u,g*.47),g<0&&(x.rotation.y=Math.PI),e.add(x)});let f=[["C\u1EEDa","Ph\u1EADt","r\u1ED9ng","m\u1EDF"],["L\xF2ng","ng\u01B0\u1EDDi","an","vui"]];[-1,1].forEach((g,x)=>{let m=Oe(f[x],{w:160,h:640,size:62,vertical:!0,fill:"#2b0a06"}),p=new H(new Jt(.62,2.5),new Y({map:m,roughness:.6}));B(e,p,g*3.2,2.8,.51,!1)})}function LM(i){let t=M.mats.grass,e=M.mats.stoneS;[[-10.4,-4.6,6.2,12.4],[4.6,9.4,12.6,17.6],[-12.6,-8.2,-9.4,-5.2],[8.2,12.6,-9.4,-5.2]].forEach(([o,a,l,c])=>{let h=a-o,u=c-l,d=(o+a)/2,f=(l+c)/2,g=new H(new te(h,.16,u),t);B(i,g,d,.08,f),g.castShadow=!1,[[h+.3,.3,d,l],[h+.3,.3,d,c]].forEach(([y,_,S,w])=>B(i,st(y,.26,_,e),S,.13,w)),[[o,f],[a,f]].forEach(([y,_])=>B(i,st(.3,.26,u,e),y,.13,_));let x=Math.round(h*u/5);M._bushGeo||(M._bushGeo=Ir(.4,4880944),M._bushIM={},M._bushCount={});let m=[[],[],[]],p={},v=new Zt;for(let y=0;y<x;y++){let _=o+.6+Math.random()*(h-1.2),S=l+.6+Math.random()*(u-1.2),w=.35+Math.random()*.3;if(m[y%3].push([_,.16+w*.6,S,w/.4,.75]),la(_,.35+w*.7,S,.55+w*.9),y%2===0){let R=[15223402,16105536,15790320,14174880][y%4];p[R]||(p[R]=[]);for(let I=0;I<5;I++){let T=Math.random()*6.28,E=Math.random()*1.2;p[R].push([_+Math.cos(T)*Math.sin(E)*w,.16+w*.6+Math.cos(E)*w*.75,S+Math.sin(T)*Math.sin(E)*w])}}}m.forEach((y,_)=>{if(!y.length)return;M._bushIM[_]||(M._bushIM[_]=new Vt(M._bushGeo,ca(),500),M._bushIM[_].castShadow=!0,M._bushCount[_]=0,i.add(M._bushIM[_]));let S=M._bushIM[_],w=M._bushCount[_];y.forEach(([R,I,T,E,P])=>{v.position.set(R,I,T),v.scale.set(E,P*E,E),v.rotation.set(0,0,0),v.updateMatrix(),S.setMatrixAt(w++,v.matrix)}),M._bushCount[_]=w,S.count=w,S.instanceMatrix.needsUpdate=!0}),M._flGeo||(M._flGeo=new kt(.05,5,3),M._flMats={});for(let y of Object.keys(p)){let _=p[y],S=+y;M._flMats[S]||(M._flMats[S]=new Y({color:S,roughness:.6}));let w=new Vt(M._flGeo,M._flMats[S],_.length);_.forEach((R,I)=>{v.position.set(R[0],R[1],R[2]),v.scale.set(1,1,1),v.updateMatrix(),w.setMatrixAt(I,v.matrix)}),i.add(w)}Gt(o-.15,a+.15,l-.15,c+.15)});let s=new Y({color:2969446,roughness:.35,metalness:.05}),r=new Y({color:9062954,roughness:.7});[[-2.9,9],[2.9,9],[-2.9,19],[2.9,19]].forEach(([o,a],l)=>{let c=new H(new ii([[0,0],[.32,0],[.4,.1],[.46,.5],[.5,.56],[.42,.58],[0,.58]].map(([u,d])=>new rt(u,d)),20),l%2?s:r);B(i,c,o,0,a);let h=new H(new gt(.04,.08,.9,6),M.mats.trunk);B(i,h,o,.95,a),h.rotation.z=.25;{M._gateBushGeo||(M._gateBushGeo=Ir(.35,4025898));let u=[[0,1.45,0,.42],[.3,1.2,.1,.3],[-.25,1.3,-.1,.32]];M._gateBushIM||(M._gateBushIM=new Vt(M._gateBushGeo,ca(),24),M._gateBushN=0,i.add(M._gateBushIM));let d=new Zt;u.forEach(([f,g,x,m])=>{d.position.set(o+f,g,a+x),d.scale.set(m/.35,.6*m/.35,m/.35),d.updateMatrix(),M._gateBushIM.setMatrixAt(M._gateBushN++,d.matrix)}),M._gateBushIM.count=M._gateBushN,M._gateBushIM.instanceMatrix.needsUpdate=!0}Se(o,a,.55)})}function Ir(i,t){let e=new ri(i,2),n=e.attributes.position,s=new At(t),r=[];for(let o=0;o<n.count;o++){let a=new C().fromBufferAttribute(n,o),l=1+Math.sin(a.x*5.1)*Math.cos(a.y*4.3)*Math.sin(a.z*3.7)*.22+(Math.random()-.5)*.1;a.multiplyScalar(l),n.setXYZ(o,a.x,a.y,a.z);let c=.75+Math.random()*.4+a.y/i*.15;r.push(s.r*c,s.g*c,s.b*c)}return e.setAttribute("color",new Xt(r,3)),e.computeVertexNormals(),e}function DM(){return aa||(aa=He(256,256,(i,t,e)=>{for(let n=0;n<110;n++){let s=Math.random()*6.28,r=Math.sqrt(Math.random())*108,o=128+Math.cos(s)*r,a=128+Math.sin(s)*r,l=16+Math.random()*14,c=s+(Math.random()-.5)*1.2,h=Math.random();i.save(),i.translate(o,a),i.rotate(c),i.fillStyle=`hsl(${88+h*30},${42+h*20}%,${22+h*26}%)`,i.beginPath(),i.moveTo(-l/2,0),i.quadraticCurveTo(0,-l*.36,l/2,0),i.quadraticCurveTo(0,l*.36,-l/2,0),i.fill(),i.strokeStyle="rgba(20,40,10,0.45)",i.lineWidth=1,i.beginPath(),i.moveTo(-l/2,0),i.lineTo(l/2,0),i.stroke(),i.restore()}}),aa)}function la(i,t,e,n){M.foliage.push({x:i,y:t,z:e,r:n})}function HM(){let i=new Set;for(let t of M.interiors||[]){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,s=Math.max(1.2,(t.x1-t.x0)/2+.9),r=Math.max(1.2,(t.z1-t.z0)/2+.9),o=(t.ceil||4)+.55,a=1.35,l=t.name||e+","+n;if(!i.has(l)){i.add(l),M.foliage.push({x:e,y:o,z:n,r:Math.max(s,r)*.72,rx:s,ry:a,rz:r,kind:"roof",ceil:t.ceil});for(let c of t.roofs||[])c&&(c.traverse&&c.traverse(h=>{h.isMesh&&h.material===M.mats.roof&&!M.camOcc.includes(h)&&M.camOcc.push(h)}),c.isMesh&&!M.camOcc.includes(c)&&M.camOcc.push(c))}}}function Ar(i,t,e,n=1,s=5012019){let r=new Ct;r.position.set(t,0,e),r.scale.setScalar(n),i.add(r);let o=new H(new gt(.16,.34,3.8,10),M.mats.trunk);B(r,o,0,1.9,0);for(let d=0;d<4;d++){let f=d*1.6+Math.random(),g=new H(new gt(.05,.1,1.6,6),M.mats.trunk);g.position.set(Math.cos(f)*.5,3.6,Math.sin(f)*.5),g.rotation.set(Math.sin(f)*.9,0,-Math.cos(f)*.9),g.castShadow=!0,r.add(g)}let a=ca(),l=[];for(let d=0;d<7;d++){let f=Math.random()*6.28,g=d?.6+Math.random()*.9:0,x=Math.cos(f)*g,m=3.9+Math.random()*1.5+(d?0:.8),p=Math.sin(f)*g,v=1+Math.random()*.5,y=new H(Ir(v*.82,s),a);B(r,y,x,m,p);for(let _=0;_<16;_++){let S=new Jt(1.5,1.5),w=Math.random()*6.28,R=Math.acos(2*Math.random()-1),I=new C(Math.sin(R)*Math.cos(w),Math.cos(R)*.8,Math.sin(R)*Math.sin(w)),T=new je().setFromUnitVectors(new C(0,0,1),I.clone().normalize());S.applyQuaternion(T),S.translate(x+I.x*v*.85,m+I.y*v*.85,p+I.z*v*.85),l.push(S)}}M._leafCardMats||(M._leafCardMats={});let c=s|0;M._leafCardMats[c]||(M._leafCardMats[c]=new Y({map:DM(),alphaTest:.45,side:Qt,roughness:.8,color:new At(s).lerp(new At(16777215),.55)}));let h=M._leafCardMats[c],u=new H(en(l),h);return u.castShadow=!0,u.receiveShadow=!0,r.add(u),n<1.6&&(M.camOcc.push(u),M.camOcc.push(o)),la(t,4.3*n,e,2.35*n),M.foliage.push({x:t,y:1.9*n,z:e,r:.85*n,rx:.55*n,ry:2.1*n,rz:.55*n,kind:"trunk"}),Se(t,e,.5*n),r}function Ol(i,t,e,n=9){let s=new Ct;s.position.set(t,0,e),i.add(s),M._bamSm||(M._bamSm=new Y({color:8362565,roughness:.6}),M._bamLm=new Y({color:6261306,roughness:.8,side:Qt}),M._bamStem=new gt(.05,.065,1,6),M._bamLeaf=new Jt(.5,.09));let r=new Vt(M._bamStem,M._bamSm,n);r.castShadow=!0;let o=new Vt(M._bamLeaf,M._bamLm,n*5);o.castShadow=!1;let a=new Zt,l=0;for(let c=0;c<n;c++){let h=5+Math.random()*3,u=(Math.random()-.5)*1.6,d=(Math.random()-.5)*1.6;a.position.set(u,h/2,d),a.scale.set(1,h,1),a.rotation.set(0,0,(Math.random()-.5)*.12),a.updateMatrix(),r.setMatrixAt(c,a.matrix);for(let f=0;f<5;f++)a.position.set(u+(Math.random()-.5)*.9,h*(.55+Math.random()*.45),d+(Math.random()-.5)*.9),a.scale.set(1,1,1),a.rotation.set(Math.random(),Math.random()*6,Math.random()-.5),a.updateMatrix(),o.setMatrixAt(l++,a.matrix)}o.count=l,s.add(r,o),Se(t,e,1.1),la(t,4,e,1.85)}function UM(i){let[t,e]=he.bodhi,n=new Ct;n.position.set(t,0,e),i.add(n),M.bodhiG=n;let s=M.mats.trunk,r=[],o=7;for(let y=0;y<o;y++){let _=y/o*6.28,S=[new C(Math.cos(_)*1.6,0,Math.sin(_)*1.6),new C(Math.cos(_)*.8,.6,Math.sin(_)*.8),new C(Math.cos(_)*.3,2.2,Math.sin(_)*.3),new C(0,4.5,0)];r.push(new xn(new gn(S),20,.32,8))}r.push(new gt(.55,.85,5,12).translate(0,2.5,0));let a=new H(en(r),s);a.castShadow=!0,n.add(a);let l=ca(),c=[],h=[];for(let y=0;y<7;y++){let _=y/7*6.28+.3,S=3+Math.random()*1.6,w=new C(Math.cos(_)*S,6.2+Math.random()*1.6,Math.sin(_)*S);c.push(new xn(new gn([new C(0,4.4,0),new C(Math.cos(_)*S*.4,5.6,Math.sin(_)*S*.4),w]),16,.2,6));for(let R=0;R<3;R++){let I=Ir(1.5+Math.random()*.7,5933622);I.translate(w.x+(Math.random()-.5)*1.6,w.y+.6+Math.random(),w.z+(Math.random()-.5)*1.6),h.push(I)}for(let R=0;R<4;R++){let I=Ir(2,6131514);I.translate((Math.random()-.5)*2,8.6+Math.random(),(Math.random()-.5)*2),h.push(I)}}let u=new H(en(c),s);u.castShadow=!0,n.add(u);let d=new H(en(h),l);d.castShadow=!0,n.add(d),M.camOcc.push(d),M.camOcc.push(a),la(t,7.2,e,5.5),M.foliage.push({x:t,y:2.4,z:e,r:2.2,rx:1.8,ry:2.8,rz:1.8,kind:"trunk"});let f=new H(new Fe(2.3,.25,8,32),M.mats.stoneS);f.rotation.x=Math.PI/2,B(n,f,0,.25,0),Se(t,e,2.6);let[g,x]=he.plaques,m=new Ct;m.position.set(g,0,x),i.add(m),[-1.6,1.6].forEach(y=>B(m,st(.14,2.2,.14,M.mats.beam),y,1.1,0)),[1.4,1.95].forEach(y=>B(m,st(3.4,.08,.08,M.mats.beam),0,y,0));let p=st(3.8,.1,.8,new Y({color:5910560,map:Kt("tex-roof",3,1)}));B(m,p,0,2.3,0),M.plaqueRack={group:m,n:0},Gt(g-1.8,g+1.8,x-.4,x+.4);let v=st(3.4,2,.6,new Ie({visible:!1}));B(m,v,0,1.2,0),v.userData.act="caunguyen",M.acts.push(v)}function NM(i){let t=M.plaqueRack;if(!t||t.n>=34)return;let e=t.n++,n=e%2,s=Math.floor(e/2);t.im||(t.pMat=new Y({color:13146714,roughness:.7,map:Kt("tex-floor",.2,.3)}),t.rMat=new Y({color:12591130,side:Qt}),t.im=new Vt(new te(.16,.24,.02),t.pMat,34),t.rim=new Vt(new Jt(.03,.3),t.rMat,34),t.group.add(t.im,t.rim),t.im.count=0,t.rim.count=0);let r=new Zt,o=-1.55+s*.19,a=n?1.7:1.15;r.position.set(o,a,.06),r.rotation.set(0,0,(Math.random()-.5)*.2),r.scale.set(1,1,1),r.updateMatrix(),t.im.setMatrixAt(e,r.matrix),t.im.count=e+1,t.im.instanceMatrix.needsUpdate=!0,r.position.set(o,a+.1,.07),r.rotation.set(0,0,0),r.updateMatrix(),t.rim.setMatrixAt(e,r.matrix),t.rim.count=e+1,t.rim.instanceMatrix.needsUpdate=!0}function ia(i,t,e){if(M._slanternLamp||(M._slanternLamp=new Y({color:16767392,emissive:16751168,emissiveIntensity:0,roughness:.6})),!M._slBodyIM){let r=[],o=new te(.6,.2,.6);o.translate(0,.1,0),r.push(o),o=new gt(.12,.15,.9,8),o.translate(0,.65,0),r.push(o),o=new te(.5,.1,.5),o.translate(0,1.15,0),r.push(o),o=new cn(.42,.32,4),o.rotateY(Math.PI/4),o.translate(0,1.72,0),r.push(o),M._slBodyIM=new Vt(en(r),M.mats.stoneS,16),M._slBodyIM.castShadow=!0,M._slBodyIM.receiveShadow=!0,M._slBodyN=0,i.add(M._slBodyIM),M._slLampIM=new Vt(new te(.36,.36,.36),M._slanternLamp,16),M._slLampN=0,i.add(M._slLampIM),M.night.push({mat:M._slanternLamp,on:2.2})}let n=M._slBodyN++,s=new Zt;s.position.set(t,0,e),s.scale.set(1,1,1),s.rotation.set(0,0,0),s.updateMatrix(),M._slBodyIM.setMatrixAt(n,s.matrix),M._slBodyIM.count=M._slBodyN,M._slBodyIM.instanceMatrix.needsUpdate=!0,s.position.set(t,1.38,e),s.updateMatrix(),M._slLampIM.setMatrixAt(M._slLampN++,s.matrix),M._slLampIM.count=M._slLampN,M._slLampIM.instanceMatrix.needsUpdate=!0,M.glows.push({pos:new C(t,1.38,e),size:1,nightOnly:!0}),Se(t,e,.5)}function FM(i){let t=new Y({color:13772830,emissive:16726546,emissiveIntensity:.35,roughness:.6}),e=[[-4.5,-12.2],[4.5,-12.2],[-2.2,-12.2],[2.2,-12.2]],n=new Vt(new kt(.34,16,12),t,e.length),s=new Vt(new gt(.16,.16,.08,12),M.mats.gold,e.length),r=new Vt(new gt(.02,.06,.4,6),new Y({color:15251504}),e.length),o=new Zt;e.forEach(([a,l],c)=>{o.position.set(a,he.H0+5.6,l+.35),o.scale.set(1,1.2,1),o.rotation.set(0,0,0),o.updateMatrix(),n.setMatrixAt(c,o.matrix),o.position.set(a,he.H0+6.05,l+.35),o.scale.set(1,1,1),o.updateMatrix(),s.setMatrixAt(c,o.matrix),o.position.set(a,he.H0+4.95,l+.35),o.updateMatrix(),r.setMatrixAt(c,o.matrix),M.glows.push({pos:new C(a,he.H0+5.6,l+.35),size:1.3,color:16738874,nightBoost:!0})}),i.add(n,s,r),M.night.push({mat:t,on:2.2,off:.35})}function mE(i){_M(),EM(i),TM(i),bM(i),RM(i),AM(i),CM(i),IM(i),PM(i),UM(i),FM(i),LM(i);for(let e=0;e<14;e++)NM("");[[-3.4,4],[3.4,4],[-3.4,14],[3.4,14],[-3.4,24],[3.4,24],[-6.5,-8.5],[6.5,-8.5]].forEach(([e,n])=>ia(i,e,n)),[[-42,-32,1.3],[-20.5,-30,1.1],[-42,-6,1.2],[-22,8,1],[-27,-3,1.1],[-36,18,1.1],[42,-6,1.3],[25.4,-33.2,1],[22,12,1],[30,6,1.1],[36,20,1.2],[-9,26,.9],[9,26,.9],[-22,26,1.1],[22,27,1],[-41,27,1],[41,27,1.1]].forEach(([e,n,s],r)=>Ar(i,e,n,s,[4880944,5603125,4156972][r%3])),[[-23.5,20],[-20,28],[23.5,-1],[-42,-14],[19.5,28.2],[-42,10],[42,8],[-30,27.5],[30,27.5]].forEach(([e,n])=>Ol(i,e,n)),Qd(i),nf(i),pf(i),_f(i),Ar(i,Cr.x+1.35,Cr.z-1.55,1.35,4880944),Tf(i);for(let e=0;e<46;e++){let n=e/46*6.28,s=56+Math.random()*16;Math.sin(n)*s*.85-4<-30||Ar(i,Math.cos(n)*s*1.05,Math.sin(n)*s*.85-4,1.6+Math.random()*1.2,4090412)}HM()}var he,M,st,Gt,Se,Kl,Af,Ql,li,Jl,ca,aa,Ii=sn(()=>{wn();Er();ai();jd();sf();gf();vf();bf();he={H0:.9,hall:{x0:-14,x1:14,z0:-34,z1:-12},inner:{x0:-13.1,x1:13.1,z0:-33.1,z1:-12.4},door:{x0:-6,x1:6},steps:{x0:-5,x1:5,z0:-12,z1:-10},urn:[0,-3.5],bell:[-15.5,3],lotus:[15,5,6.2,4.4],koi:[-14.5,17,5.2,3.7],bodhi:[15.5,20],gate:30,altarZ:-29.6,bowSpot:[0,-25.6],moSpot:[-3.4,-25.4],khanhSpot:[3.4,-25.4],candleWall:[10.6,-32.4],drum:[-10.6,-31.6],plaques:[11.6,22]},M={mats:{},colliders:[],circles:[],ground:[],occ:[],acts:[],anim:[],cushions:[],lights:{},night:[],day:[],glows:[],camOcc:[],foliage:[],interiors:[],OFFER:{incense:{lifeMin:20,capSticks:30},candle:{lifeMin:60,cap:72},lotusLamp:{lifeMin:60,cap:30},lantern:{lifeMin:45,cap:40}}};st=(i,t,e,n)=>new H(new te(i,t,e),n);Gt=(i,t,e,n)=>M.colliders.push({x0:i,x1:t,z0:e,z1:n}),Se=(i,t,e)=>M.circles.push({x:i,z:t,r:e});Kl=new gt(.3,.33,1,20,1),Af=new gt(.46,.52,.32,8),Ql=new gt(.335,.335,.22,20);li=null;Jl=null,ca=()=>(Jl||(Jl=new Y({vertexColors:!0,roughness:.85,map:Kt("tex-grass",2,2),normalMap:Kt("tex-grass-n",2,2,!1),normalScale:new rt(1.5,1.5),flatShading:!1})),Jl),aa=null});function ME(i,t){Pt.scene=i,Pt.q=t,window.__FX=Pt,Pr=Vs(),Pf=Xd(),Lf=ea();let e=0,n=t==="low"?12:t==="high"?28:18,s=new Map;M.glows.forEach(d=>{if(d.flame&&e<n&&(Hf(d.pos,d.fs||.09),e++),d.nightOnly){let g=Gn(d.size,d.color);g.position.copy(d.pos),g.material.opacity=0,i.add(g),Pt.nightGlows.push(g),g.userData.base=.8,g.userData.boost=d.nightBoost;return}let f=(d.color|0)+":"+(d.size>=1?"L":d.size>=.5?"M":"S");s.has(f)||s.set(f,{color:d.color|0,size:d.size,pts:[]}),s.get(f).pts.push(d.pos.x,d.pos.y,d.pos.z)}),Pt.glowPoints=[];for(let d of s.values()){let f=new me;f.setAttribute("position",new Xt(d.pts,3));let g=new qi({size:d.size*1.15,map:Pr,transparent:!0,depthWrite:!1,blending:Xe,color:d.color,opacity:.8,sizeAttenuation:!0}),x=new Ds(f,g);i.add(x),Pt.glowPoints.push(x),Pt.glowSprites.push({material:g,userData:{base:.8,boost:!1},isPoints:!0})}let r=t==="low"?80:t==="high"?320:160,o=new me,a=new Float32Array(r*3);for(let d=0;d<r;d++)a[d*3]=(Math.random()-.5)*24,a[d*3+1]=he.H0+Math.random()*7,a[d*3+2]=-13-Math.random()*20;o.setAttribute("position",new Ne(a,3)),Pt.dust=new Ds(o,new qi({size:.035,map:Pr,transparent:!0,opacity:.5,depthWrite:!1,blending:Xe,color:16770736})),i.add(Pt.dust);let l=He(64,256,(d,f,g)=>{let x=d.createLinearGradient(0,0,0,g);x.addColorStop(0,"rgba(255,240,200,0)"),x.addColorStop(.25,"rgba(255,236,190,0.55)"),x.addColorStop(1,"rgba(255,230,180,0)"),d.fillStyle=x,d.fillRect(0,0,f,g);let m=d.createLinearGradient(0,0,f,0);m.addColorStop(0,"rgba(0,0,0,1)"),m.addColorStop(.5,"rgba(0,0,0,0)"),m.addColorStop(1,"rgba(0,0,0,1)"),d.globalCompositeOperation="destination-out",d.fillStyle=m,d.fillRect(0,0,f,g)}),c=new Ie({map:l,transparent:!0,opacity:.16,depthWrite:!1,blending:Xe,side:Qt,fog:!1});for(let d=0;d<4;d++){let f=-15.6-d*4.8,g=new H(new Jt(3.4,9),c);g.position.set(9.5,he.H0+1.4,f),g.rotation.set(0,Math.PI/2,.85),i.add(g),Pt.shafts.push(g)}let h=new me,u=new Float32Array(360);for(let d=0;d<120;d++)u[d*3]=(Math.random()-.5)*48,u[d*3+1]=.5+Math.random()*3,u[d*3+2]=-8+Math.random()*36;h.setAttribute("position",new Ne(u,3)),Pt.fire=new Ds(h,new qi({size:.16,map:Pr,transparent:!0,depthWrite:!1,blending:Xe,color:14221194,opacity:0})),i.add(Pt.fire);for(let d=0;d<5;d++)BM(M.urnTop,!0,d);zM(M.urnSticks||M.incenseBowl,30)}function Df(i=16760944){let t=i|0;return jl.has(t)||jl.set(t,new hn({map:Pr,color:t,transparent:!0,depthWrite:!1,blending:Xe,opacity:.8})),jl.get(t)}function Gn(i=.6,t=16760944){let e=new mn(Df(t));return e.scale.setScalar(i),e}function Hf(i,t=.08){if(Pt.flames.length>=(Pt.q==="low"?14:32))return null;th||(th=new hn({map:Lf,transparent:!0,depthWrite:!1,blending:Xe,color:16777215}));let e=new mn(th);return e.scale.set(t*.6,t*1.4,1),e.center.set(.5,.1),e.position.copy(i),Pt.scene.add(e),Pt.flames.push({s:e,h:t,ph:Math.random()*9}),e}function BM(i,t,e=0,n={}){let s=Math.max(1,Math.min(9,n.n||3));t||(e=i.__k=(i.__k||0)+1);let r=new Ct;r.position.copy(i),Pt.scene.add(r);let o=[],a=[],l=i.__sc||1;l!==1&&r.scale.setScalar(l);for(let u=0;u<s;u++){let d=e*1.3+u*.4+(i.__r?e*2.39996:0),f=i.__r?.06+(e*.618+u*.13)%1*(i.__r/l-.08):.05+e%3*.06,g=new H(new gt(.006,.006,.42,4),new Y(n.k?{color:14263594,metalness:.6,roughness:.35,emissive:5913088}:{color:10496028,roughness:.8}));g.position.set(Math.cos(d)*f,.2,Math.sin(d)*f),g.rotation.set((Math.random()-.5)*.12,0,(Math.random()-.5)*.12),r.add(g),a.push(g);let x=Gn(.07,16734752);x.position.set(g.position.x,.42,g.position.z),r.add(x),o.push(x)}let c=t?1e9:n.life||M.OFFER.incense.lifeMin*60,h={g:r,tips:o,sticks:a,life:c,t:Math.max(0,n.age||0),base:i,n:s,k:n.k};if(h.t>=c)return r.removeFromParent(),r;if(Pt.sticks.push(h),Uf(h),!t){let u=Pt.sticks.filter(f=>f.base===i&&f.life<1e8),d=u.reduce((f,g)=>f+g.n,0);for(;d>M.OFFER.incense.capSticks&&u.length;){let f=u.shift();d-=f.n,Nf(f)}}return r}function Uf(i){let t=1-.78*Math.min(1,i.t/i.life);i.sticks.forEach((e,n)=>{e.scale.y=t,e.position.y=.21*t-.01,i.tips[n].position.y=.42*t-.01})}function Nf(i){let t=Pt.sticks.indexOf(i);t>=0&&Pt.sticks.splice(t,1),i.g.removeFromParent(),i.g.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}function OM(){let i={};return Pt.sticks.forEach(t=>{if(t.life<1e8){let e=t.base===M.urnTop?"urn":"bowl";i[e]=(i[e]||0)+t.n}}),{sticks:i,pond:Pt.lanterns.length}}function zM(i,t=30){let e=new Ct;e.position.copy(i),Pt.scene.add(e);let n=[],s=new gt(.006,.007,1,5),r=new Y({color:12067866,roughness:.7}),o=new Y({color:6965802,roughness:.9}),a=new Vt(s,r,t),l=new Vt(s,o,t),c=new Zt;for(let h=0;h<t;h++){let u=h*2.39996,d=Math.sqrt(h/t)*.13,f=.5+Math.random()*.12,g=d*1.1,x=Math.cos(u)*d,m=Math.sin(u)*d,p=Math.sin(u)*g,v=-Math.cos(u)*g;c.position.set(x,f*.2,m),c.rotation.set(p,0,v),c.scale.set(1,f*.4,1),c.updateMatrix(),a.setMatrixAt(h,c.matrix),c.position.set(x,f*.7,m),c.scale.set(.85,f*.6,.85),c.updateMatrix(),l.setMatrixAt(h,c.matrix);let y=Gn(.05,16734752);y.position.set(x,f,m),y.userData.k=h,e.add(y),n.push(y)}return e.add(a,l),Pt.sticks.push({g:e,tips:n,life:1e9,t:0,bundle:!0}),e}function If(i){let t=(i||15262940)|0,e=Cf.get(t);return e||(e=new hn({map:Pf,transparent:!0,depthWrite:!1,opacity:0,color:t}),Cf.set(t,e)),e}function eh(i,t=1,e,n){if(Pt.smokes.length>(Pt.q==="low"?80:260))return;let s=ah.pop();s?s.material=If(n):s=new mn(If(n)),s.position.copy(i),s.scale.setScalar(.08*t),s.material.opacity=0,Pt.scene.add(s),Pt.smokes.push({s,life:0,max:5+Math.random()*3,vx:(Math.random()-.5)*.05,ph:Math.random()*6,big:t,op:e})}function vE(i,t){let e=M.lotusPond;if(!e)return;let n=new Ct,s=ts(i.k?16762426:i.c===1?16642278:i.c===2?16241514:16098232);i.k&&s.traverse(g=>{g.isMesh&&g.material&&(g.material=g.material.clone(),g.material.emissive&&g.material.emissive.set(9067008),g.material.metalness=.5)}),s.scale.setScalar(1.5),n.add(s);let r=new H(new gt(.05,.04,.05,10),new Y({color:16115392,emissive:16752704,emissiveIntensity:.6}));r.position.y=.07,n.add(r);let o=Gn(.9,16756816);o.position.y=.16,n.add(o);let a=i.a!=null?i.a:Math.random()*6.28,l=i.r!=null?i.r:.2+Math.random()*.55,c=Math.cos(a)*l*e.rx*.85,h=Math.sin(a)*l*e.rz*.85;n.position.set(t?e.rx*0:c,.43,t?e.rz*.85:h),e.g.add(n);let u=Hf(new C,.07);u&&(Pt.scene.remove(u),u.position.y=.1,n.add(u));let d=i.t?Math.max(0,(Date.now()+(M.clockSkew||0)-i.t)/1e3):0,f=M.OFFER.lotusLamp.lifeMin*60;if(d>=f)return n.removeFromParent(),n;for(Pt.lanterns.push({g:n,tx:c,tz:h,ph:Math.random()*6,text:i.text,glow:o,age:d,life:f,flame:u});Pt.lanterns.length>M.OFFER.lotusLamp.cap;)Pt.lanterns.shift().g.removeFromParent();return n}function kM(i,t){let e=ch.pop();return e?(e.s.material=Df(i),e.s.material.opacity=1,e.s.scale.setScalar(t),e.spin=!1,e):{s:Gn(t,i),v:new C,life:0,spin:!1,pooled:!0}}function EE(i,t=16765562,e=24){e=Math.min(e,Pt.q==="low"?12:24);for(let n=0;n<e;n++){let s=.12+Math.random()*.12,r=kM(t,s);r.s.position.copy(i),r.s.material.opacity=1,r.v.set((Math.random()-.5)*1.6,.6+Math.random()*1.6,(Math.random()-.5)*1.6),r.life=1.4+Math.random(),r.spin=!1,Pt.scene.add(r.s),Pt.parts.push(r)}}function TE(i,t=20){nh||(nh=new Y({color:16164285,side:Qt,roughness:.6})),ih||(ih=new Jt(.06,.04)),t=Math.min(t,Pt.q==="low"?10:20);for(let e=0;e<t;e++){let n=new H(ih,nh);n.position.copy(i).add(new C((Math.random()-.5)*2,2+Math.random(),(Math.random()-.5)*2)),Pt.scene.add(n),Pt.parts.push({s:n,v:new C((Math.random()-.5)*.3,-.5,(Math.random()-.5)*.3),life:4,spin:!0})}}function GM(i,t,e){for(let s of Pt.flames){let r=1+Math.sin(t*13+s.ph)*.08+Math.sin(t*23+s.ph*2)*.06;s.s.scale.set(s.h*.6*(2-r),s.h*1.4*r,1)}for(let s of Pt.glowSprites){let r=s.userData.base;s.material.opacity=r*(.85+Math.sin(t*9+(s.id||0))*.08)*(s.userData.boost&&e?1.6:1)}for(let s of Pt.nightGlows)s.material.opacity+=((e?.9:0)-s.material.opacity)*i;if(sh+=i,sh>.12){sh=0;for(let s of Pt.sticks){let r=s.tips[Math.random()*s.tips.length|0],o=new C;if(r.getWorldPosition(o),Math.random()<.7&&eh(o,s.g.position.y>2?1.3:.8,void 0,s.k?16769696:void 0),s.bundle&&Math.random()<.6)for(let a=0;a<1;a++)s.tips[Math.random()*s.tips.length|0].getWorldPosition(o),eh(o,1.6)}}oh+=i;let n=oh>1;n&&(oh=0);for(let s of[...Pt.sticks]){s.t+=i;for(let r of s.tips)r.material.opacity=.7+Math.sin(t*3+r.id)*.3;n&&s.sticks&&(s.t>=s.life?Nf(s):Uf(s))}if(M.smokeEmit)for(let s of M.smokeEmit)for(s.acc=(s.acc||0)+i*s.rate*(Pt.q==="low"?.5:1);s.acc>=1;){s.acc-=1;let r=s.pos.clone();r.x+=(Math.random()-.5)*.25,r.z+=(Math.random()-.5)*.25,eh(r,s.big*(.8+Math.random()*.4),s.op,s.color)}if(Pt.smokes=Pt.smokes.filter(s=>{s.life+=i;let r=s.life/s.max,o=s.s;return o.position.y+=i*(.22+r*.1),o.position.x+=Math.sin(t*.8+s.ph+r*4)*i*.06+s.vx*i,o.scale.setScalar((.08+r*.9)*s.big),o.material.opacity=Math.sin(Math.PI*Math.min(1,r))*(s.op||(s.big>1.5?.26:.3)),o.material.rotation+=i*.2,r>=1?(o.removeFromParent(),ah.length<120&&ah.push(o),!1):!0}),Pt.dust){Pt.dust.rotation.y=Math.sin(t*.05)*.02;let s=Pt.dust.geometry.attributes.position;for(let r=0;r<s.count;r+=7)s.setY(r,s.getY(r)+Math.sin(t+r)*.002);s.needsUpdate=!0,Pt.dust.material.opacity=e?.12:.5}if(Pt.shafts.forEach((s,r)=>{s.visible=!e,s.material.opacity=.12+Math.sin(t*.3+r)*.03}),Pt.fire&&(Pt.fire.material.opacity+=((e?.9:0)-Pt.fire.material.opacity)*i,e)){let s=Pt.fire.geometry.attributes.position;for(let r=0;r<s.count;r++)s.setX(r,s.getX(r)+Math.sin(t*.7+r)*.01),s.setY(r,s.getY(r)+Math.cos(t*.9+r*2)*.006);s.needsUpdate=!0}if(Pt.lanterns.forEach(s=>{let r=s.g.position;r.x+=(s.tx-r.x)*i*.15+Math.sin(t*.2+s.ph)*i*.03,r.z+=(s.tz-r.z)*i*.15,r.y=.43+Math.sin(t*1.3+s.ph)*.01,s.g.rotation.y+=i*.05,s.age=(s.age||0)+i;let o=s.life?Math.max(0,Math.min(1,(s.life-s.age)/40)):1;s.glow.material.opacity=(e?1:.55)*(.85+Math.sin(t*7+s.ph)*.1)*o,o<1&&s.g.scale.setScalar(.4+.6*o)}),Pt.lanterns.some(s=>s.life&&s.age>=s.life)&&(Pt.lanterns=Pt.lanterns.filter(s=>s.life&&s.age>=s.life?(s.g.removeFromParent(),!1):!0)),Pt.parts=Pt.parts.filter(s=>(s.life-=i,s.v.y-=(s.spin?0:1.2)*i,s.s.position.addScaledVector(s.v,i),s.spin?(s.s.rotation.x+=i*3,s.s.rotation.z+=i*2,s.s.position.y<he.H0+.05&&s.v.set(0,0,0)):s.s.material.opacity=Math.min(1,s.life),s.life<=0?(s.s.removeFromParent(),s.pooled&&ch.length<64&&ch.push(s),!1):!0)),M.fountain&&M.koiPond&&(rh+=i,rh>.05)){rh=0;let s=Gn(.07,14217471);s.material.blending=Ei,s.material.opacity=.7,s.position.copy(M.fountain),Pt.scene.add(s),Pt.parts.push({s,v:new C(.5+Math.random()*.25,.4+Math.random()*.3,(Math.random()-.5)*.25),life:.75}),Math.random()<.2&&sa(M.koiPond.wm,M.fountain.x+.55,M.fountain.z,.25,t)}}var Pt,Pr,Pf,Lf,jl,th,Cf,ah,ch,nh,ih,sh,rh,oh,yf=sn(()=>{wn();ai();Ii();Xl();Pt={scene:null,flames:[],smokes:[],sticks:[],lanterns:[],parts:[],fire:null,dust:null,shafts:[],glowSprites:[],nightGlows:[]};jl=new Map;th=null;window.__fxStats=OM;Cf=new Map,ah=[];ch=[];nh=null,ih=null;sh=0,rh=0,oh=0;window.__FXwarm=(i=120)=>{for(let t=0;t<i;t++)GM(.06,t*.06,!1)}});export{Gf as a,Bn as b,Qe as c,Qt as d,vi as e,Xe as f,lp as g,hp as h,up as i,dp as j,pp as k,mp as l,Vi as m,ki as n,rc as o,pn as p,xp as q,Hr as r,Fn as s,ua as t,Gi as u,$i as v,Mo as w,Lc as x,Td as y,wl as z,Ye as A,zs as B,ve as C,Sl as D,rt as E,fe as F,qe as G,Dn as H,je as I,C as J,On as K,Hn as L,Wt as M,tn as N,Zt as O,At as P,zn as Q,Ie as R,Ne as S,Xt as T,me as U,H as V,te as W,Rl as X,an as Y,Ze as Z,Jt as _,Ao as $,Co as aa,Ct as ba,xu as ca,yu as da,_u as ea,Po as fa,gr as ga,hn as ha,mn as ia,Ru as ja,Jc as ka,Cu as la,ei as ma,Vt as na,Kc as oa,Uo as pa,Nu as qa,Fu as ra,qi as sa,Ds as ta,No as ua,gn as va,ii as wa,si as xa,Pe as ya,gt as za,cn as Aa,Vo as Ba,Si as Ca,Wo as Da,ri as Ea,Wu as Fa,kt as Ga,Fe as Ha,xn as Ia,Xu as Ja,Y as Ka,qu as La,Us as Ma,Ns as Na,Fs as Oa,Bs as Pa,Zu as Qa,Zi as Ra,$u as Sa,Ju as Ta,Ku as Ua,td as Va,Ci as Wa,nd as Xa,id as Ya,sd as Za,rd as _a,Ce as $a,cd as ab,wn as bb,en as cb,XM as db,Er as eb,YM as fb,ZM as gb,Wd as hb,$M as ib,JM as jb,KM as kb,QM as lb,Kt as mb,Me as nb,He as ob,Vs as pb,Oe as qb,ai as rb,Gl as sb,_v as tb,Mv as ub,sf as vb,L_ as wb,D_ as xb,ev as yb,nv as zb,iv as Ab,sv as Bb,rv as Cb,ov as Db,av as Eb,cv as Fb,Yd as Gb,sa as Hb,ts as Ib,ze as Jb,Av as Kb,Cv as Lb,Iv as Mb,Q_ as Nb,Pv as Ob,Lv as Pb,Xl as Qb,Hv as Rb,Uv as Sb,Nv as Tb,Fv as Ub,Bv as Vb,ql as Wb,lf as Xb,Ee as Yb,Yv as Zb,uM as _b,dM as $b,Zv as ac,pM as bc,gf as cc,Pt as dc,ME as ec,Gn as fc,Hf as gc,BM as hc,vE as ic,EE as jc,TE as kc,GM as lc,yf as mc,xf as nc,jv as oc,tE as pc,vf as qc,Cr as rc,sE as sc,bf as tc,he as uc,M as vc,pE as wc,st as xc,B as yc,Gt as zc,Se as Ac,Sf as Bc,Ir as Cc,HM as Dc,NM as Ec,mE as Fc,Ii as Gc};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
