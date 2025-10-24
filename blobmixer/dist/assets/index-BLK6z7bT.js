(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ql="159",Jd=0,Ic=1,Qd=2,qf=1,$d=2,ii=3,Ci=0,tn=1,kn=2,bi=0,Or=1,Fc=2,Oc=3,Nc=4,ep=5,Yi=100,tp=101,np=102,Bc=103,kc=104,ip=200,rp=201,ap=202,sp=203,gl=204,_l=205,op=206,lp=207,cp=208,up=209,fp=210,hp=211,dp=212,pp=213,mp=214,gp=0,_p=1,vp=2,Us=3,xp=4,yp=5,Sp=6,Mp=7,jf=0,Ep=1,bp=2,Ti=0,Tp=1,wp=2,Ap=3,Yf=4,Rp=5,Kf=300,zr=301,Vr=302,Is=303,vl=304,Zs=306,xl=1e3,dn=1001,yl=1002,Ut=1003,Gc=1004,xo=1005,Mt=1006,Cp=1007,Hr=1008,wi=1009,Pp=1010,Lp=1011,jl=1012,Zf=1013,yi=1014,zn=1015,oi=1016,Jf=1017,Qf=1018,Ji=1020,Dp=1021,Gn=1023,Up=1024,Ip=1025,Qi=1026,Wr=1027,Fp=1028,$f=1029,Op=1030,eh=1031,th=1033,yo=33776,So=33777,Mo=33778,Eo=33779,zc=35840,Vc=35841,Hc=35842,Wc=35843,nh=36196,Xc=37492,qc=37496,jc=37808,Yc=37809,Kc=37810,Zc=37811,Jc=37812,Qc=37813,$c=37814,eu=37815,tu=37816,nu=37817,iu=37818,ru=37819,au=37820,su=37821,bo=36492,ou=36494,lu=36495,Np=36283,cu=36284,uu=36285,fu=36286,ih=3e3,$i=3001,Bp=3200,rh=3201,ah=0,kp=1,En="",Rt="srgb",Kn="srgb-linear",Yl="display-p3",Js="display-p3-linear",Fs="linear",lt="srgb",Os="rec709",Ns="p3",hr=7680,hu=519,Gp=512,zp=513,Vp=514,sh=515,Hp=516,Wp=517,Xp=518,qp=519,du=35044,pu="300 es",Sl=1035,li=2e3,Bs=2001;class Qr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mu=1234567;const ba=Math.PI/180,Da=180/Math.PI;function $r(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[a&255]+Bt[a>>8&255]+Bt[a>>16&255]+Bt[a>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function It(a,e,t){return Math.max(e,Math.min(t,a))}function Kl(a,e){return(a%e+e)%e}function jp(a,e,t,i,n){return i+(a-e)*(n-i)/(t-e)}function Yp(a,e,t){return a!==e?(t-a)/(e-a):0}function Ta(a,e,t){return(1-t)*a+t*e}function Kp(a,e,t,i){return Ta(a,e,1-Math.exp(-t*i))}function Zp(a,e=1){return e-Math.abs(Kl(a,e*2)-e)}function Jp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Qp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function $p(a,e){return a+Math.floor(Math.random()*(e-a+1))}function em(a,e){return a+Math.random()*(e-a)}function tm(a){return a*(.5-Math.random())}function nm(a){a!==void 0&&(mu=a);let e=mu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function im(a){return a*ba}function rm(a){return a*Da}function Ml(a){return(a&a-1)===0&&a!==0}function am(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function ks(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function sm(a,e,t,i,n){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),c=r((e+i)/2),u=s((e+i)/2),f=r((e-i)/2),h=s((e-i)/2),p=r((i-e)/2),v=s((i-e)/2);switch(n){case"XYX":a.set(o*u,l*f,l*h,o*c);break;case"YZY":a.set(l*h,o*u,l*f,o*c);break;case"ZXZ":a.set(l*f,l*h,o*u,o*c);break;case"XZX":a.set(o*u,l*v,l*p,o*c);break;case"YXY":a.set(l*p,o*u,l*v,o*c);break;case"ZYZ":a.set(l*v,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Dr(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Ht(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const om={DEG2RAD:ba,RAD2DEG:Da,generateUUID:$r,clamp:It,euclideanModulo:Kl,mapLinear:jp,inverseLerp:Yp,lerp:Ta,damp:Kp,pingpong:Zp,smoothstep:Jp,smootherstep:Qp,randInt:$p,randFloat:em,randFloatSpread:tm,seededRandom:nm,degToRad:im,radToDeg:rm,isPowerOfTwo:Ml,ceilPowerOfTwo:am,floorPowerOfTwo:ks,setQuaternionFromProperEuler:sm,normalize:Ht,denormalize:Dr};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*n+e.x,this.y=r*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,n,r,s,o,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,s,o,l,c)}set(e,t,i,n,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],_=n[0],d=n[3],g=n[6],b=n[1],M=n[4],E=n[7],w=n[2],S=n[5],T=n[8];return r[0]=s*_+o*b+l*w,r[3]=s*d+o*M+l*S,r[6]=s*g+o*E+l*T,r[1]=c*_+u*b+f*w,r[4]=c*d+u*M+f*S,r[7]=c*g+u*E+f*T,r[2]=h*_+p*b+v*w,r[5]=h*d+p*M+v*S,r[8]=h*g+p*E+v*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-i*r*u+i*o*l+n*r*c-n*s*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*s-o*c,h=o*l-u*r,p=c*r-s*l,v=t*f+i*h+n*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(n*c-u*i)*_,e[2]=(o*i-n*s)*_,e[3]=h*_,e[4]=(u*t-n*l)*_,e[5]=(n*r-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(s*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(To.makeScale(e,t)),this}rotate(e){return this.premultiply(To.makeRotation(-e)),this}translate(e,t){return this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const To=new Ze;function oh(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ua(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function lm(){const a=Ua("canvas");return a.style.display="block",a}const gu={};function wa(a){a in gu||(gu[a]=!0,console.warn(a))}const _u=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vu=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qa={[Kn]:{transfer:Fs,primaries:Os,toReference:a=>a,fromReference:a=>a},[Rt]:{transfer:lt,primaries:Os,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[Js]:{transfer:Fs,primaries:Ns,toReference:a=>a.applyMatrix3(vu),fromReference:a=>a.applyMatrix3(_u)},[Yl]:{transfer:lt,primaries:Ns,toReference:a=>a.convertSRGBToLinear().applyMatrix3(vu),fromReference:a=>a.applyMatrix3(_u).convertLinearToSRGB()}},cm=new Set([Kn,Js]),it={enabled:!0,_workingColorSpace:Kn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!cm.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const i=Qa[e].toReference,n=Qa[t].fromReference;return n(i(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return Qa[a].primaries},getTransfer:function(a){return a===En?Fs:Qa[a].transfer}};function Nr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function wo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let dr;class lh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{dr===void 0&&(dr=Ua("canvas")),dr.width=e.width,dr.height=e.height;const i=dr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=dr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ua("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=Nr(r[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Nr(t[i]/255)*255):t[i]=Nr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let um=0;class ch{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=$r(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?r.push(Ao(n[s].image)):r.push(Ao(n[s]))}else r=Ao(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ao(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?lh.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fm=0;class zt extends Qr{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=dn,n=dn,r=Mt,s=Hr,o=Gn,l=wi,c=zt.DEFAULT_ANISOTROPY,u=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=$r(),this.name="",this.source=new ch(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===$i?Rt:En),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xl:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case yl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xl:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case yl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Rt?$i:ih}set encoding(e){wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$i?Rt:En}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Kf;zt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,i=0,n=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],_=l[2],d=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(v-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(v+d)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,E=(p+1)/2,w=(g+1)/2,S=(u+h)/4,T=(f+_)/4,y=(v+d)/4;return M>E&&M>w?M<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(M),n=S/i,r=T/i):E>w?E<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(E),i=S/n,r=y/n):w<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(w),i=T/r,n=y/r),this.set(i,n,r,t),this}let b=Math.sqrt((d-v)*(d-v)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(d-v)/b,this.y=(f-_)/b,this.z=(h-u)/b,this.w=Math.acos((c+p+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hm extends Qr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const n={width:e,height:t,depth:1};i.encoding!==void 0&&(wa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===$i?Rt:En),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new zt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ch(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ar extends hm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class uh extends zt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dm extends zt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class za{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,s,o){let l=i[n+0],c=i[n+1],u=i[n+2],f=i[n+3];const h=r[s+0],p=r[s+1],v=r[s+2],_=r[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=_;return}if(f!==_||l!==h||c!==p||u!==v){let d=1-o;const g=l*h+c*p+u*v+f*_,b=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const w=Math.sqrt(M),S=Math.atan2(w,g*b);d=Math.sin(d*S)/w,o=Math.sin(o*S)/w}const E=o*b;if(l=l*d+h*E,c=c*d+p*E,u=u*d+v*E,f=f*d+_*E,d===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,n,r,s){const o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],f=r[s],h=r[s+1],p=r[s+2],v=r[s+3];return e[t]=o*v+u*f+l*p-c*h,e[t+1]=l*v+u*h+c*f-o*p,e[t+2]=c*v+u*p+o*h-l*f,e[t+3]=u*v-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),f=o(r/2),h=l(i/2),p=l(n/2),v=l(r/2);switch(s){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(s-n)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(n+s)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(r-c)/p,this._x=(n+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(s-n)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+s*o+n*c-r*l,this._y=n*u+s*l+r*o-i*c,this._z=r*u+s*c+i*l-n*o,this._w=s*u-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,s=this._w;let o=s*e._w+i*e._x+n*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=n,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*f+this._w*h,this._x=i*f+this._x*h,this._y=n*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(r),i*Math.cos(r),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,t=0,i=0){oe.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*i),u=2*(o*t-r*n),f=2*(r*i-s*t);return this.x=t+l*c+s*f-o*u,this.y=i+l*u+o*c-r*f,this.z=n+l*f+r*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*s-i*l,this.z=i*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ro.copy(this).projectOnVector(e),this.sub(Ro)}reflect(e){return this.sub(Ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ro=new oe,xu=new za;class lr{constructor(e=new oe(1/0,1/0,1/0),t=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Fn):Fn.fromBufferAttribute(r,s),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$a.copy(i.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),es.subVectors(this.max,pa),pr.subVectors(e.a,pa),mr.subVectors(e.b,pa),gr.subVectors(e.c,pa),mi.subVectors(mr,pr),gi.subVectors(gr,mr),Bi.subVectors(pr,gr);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Bi.z,Bi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Bi.z,0,-Bi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Bi.y,Bi.x,0];return!Co(t,pr,mr,gr,es)||(t=[1,0,0,0,1,0,0,0,1],!Co(t,pr,mr,gr,es))?!1:(ts.crossVectors(mi,gi),t=[ts.x,ts.y,ts.z],Co(t,pr,mr,gr,es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Fn=new oe,$a=new lr,pr=new oe,mr=new oe,gr=new oe,mi=new oe,gi=new oe,Bi=new oe,pa=new oe,es=new oe,ts=new oe,ki=new oe;function Co(a,e,t,i,n){for(let r=0,s=a.length-3;r<=s;r+=3){ki.fromArray(a,r);const o=n.x*Math.abs(ki.x)+n.y*Math.abs(ki.y)+n.z*Math.abs(ki.z),l=e.dot(ki),c=t.dot(ki),u=i.dot(ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const pm=new lr,ma=new oe,Po=new oe;class Qs{constructor(e=new oe,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):pm.setFromPoints(e).getCenter(i);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const t=ma.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ma,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Po.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(Po)),this.expandByPoint(ma.copy(e.center).sub(Po))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new oe,Lo=new oe,ns=new oe,_i=new oe,Do=new oe,is=new oe,Uo=new oe;class mm{constructor(e=new oe,t=new oe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Lo.copy(e).add(t).multiplyScalar(.5),ns.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(Lo);const r=e.distanceTo(t)*.5,s=-this.direction.dot(ns),o=_i.dot(this.direction),l=-_i.dot(ns),c=_i.lengthSq(),u=Math.abs(1-s*s);let f,h,p,v;if(u>0)if(f=s*l-o,h=s*o-l,v=r*u,f>=0)if(h>=-v)if(h<=v){const _=1/u;f*=_,h*=_,p=f*(f+s*h+2*o)+h*(s*f+h+2*l)+c}else h=r,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-s*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(s*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=s>0?-r:r,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(Lo).addScaledVector(ns,h),p}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),n=Qn.dot(Qn)-i*i,r=e.radius*e.radius;if(n>r)return null;const s=Math.sqrt(r-n),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),i>s||r>n||((r>i||isNaN(i))&&(i=r),(s<n||isNaN(n))&&(n=s),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,i,n,r){Do.subVectors(t,e),is.subVectors(i,e),Uo.crossVectors(Do,is);let s=this.direction.dot(Uo),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;_i.subVectors(this.origin,e);const l=o*this.direction.dot(is.crossVectors(_i,is));if(l<0)return null;const c=o*this.direction.dot(Do.cross(_i));if(c<0||l+c>s)return null;const u=-o*_i.dot(Uo);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,t,i,n,r,s,o,l,c,u,f,h,p,v,_,d){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,s,o,l,c,u,f,h,p,v,_,d)}set(e,t,i,n,r,s,o,l,c,u,f,h,p,v,_,d){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=r,g[5]=s,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=p,g[7]=v,g[11]=_,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/_r.setFromMatrixColumn(e,0).length(),r=1/_r.setFromMatrixColumn(e,1).length(),s=1/_r.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=s*u,p=s*f,v=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=v+p*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,_=c*f;t[0]=h+_*o,t[4]=v*o-p,t[8]=s*c,t[1]=s*f,t[5]=s*u,t[9]=-o,t[2]=p*o-v,t[6]=_+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,_=c*f;t[0]=h-_*o,t[4]=-s*f,t[8]=v+p*o,t[1]=p+v*o,t[5]=s*u,t[9]=_-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,p=s*f,v=o*u,_=o*f;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*c,v=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=v*f+p,t[1]=f,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+v,t[10]=h-_*f}else if(e.order==="XZY"){const h=s*l,p=s*c,v=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=s*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gm,e,_m)}lookAt(e,t,i){const n=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),vi.crossVectors(i,un),vi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),vi.crossVectors(i,un)),vi.normalize(),rs.crossVectors(un,vi),n[0]=vi.x,n[4]=rs.x,n[8]=un.x,n[1]=vi.y,n[5]=rs.y,n[9]=un.y,n[2]=vi.z,n[6]=rs.z,n[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],_=i[6],d=i[10],g=i[14],b=i[3],M=i[7],E=i[11],w=i[15],S=n[0],T=n[4],y=n[8],m=n[12],x=n[1],C=n[5],A=n[9],O=n[13],P=n[2],k=n[6],F=n[10],X=n[14],J=n[3],q=n[7],V=n[11],G=n[15];return r[0]=s*S+o*x+l*P+c*J,r[4]=s*T+o*C+l*k+c*q,r[8]=s*y+o*A+l*F+c*V,r[12]=s*m+o*O+l*X+c*G,r[1]=u*S+f*x+h*P+p*J,r[5]=u*T+f*C+h*k+p*q,r[9]=u*y+f*A+h*F+p*V,r[13]=u*m+f*O+h*X+p*G,r[2]=v*S+_*x+d*P+g*J,r[6]=v*T+_*C+d*k+g*q,r[10]=v*y+_*A+d*F+g*V,r[14]=v*m+_*O+d*X+g*G,r[3]=b*S+M*x+E*P+w*J,r[7]=b*T+M*C+E*k+w*q,r[11]=b*y+M*A+E*F+w*V,r[15]=b*m+M*O+E*X+w*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],_=e[7],d=e[11],g=e[15];return v*(+r*l*f-n*c*f-r*o*h+i*c*h+n*o*p-i*l*p)+_*(+t*l*p-t*c*h+r*s*h-n*s*p+n*c*u-r*l*u)+d*(+t*c*f-t*o*p-r*s*f+i*s*p+r*o*u-i*c*u)+g*(-n*o*u-t*l*f+t*o*h+n*s*f-i*s*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],_=e[13],d=e[14],g=e[15],b=f*d*c-_*h*c+_*l*p-o*d*p-f*l*g+o*h*g,M=v*h*c-u*d*c-v*l*p+s*d*p+u*l*g-s*h*g,E=u*_*c-v*f*c+v*o*p-s*_*p-u*o*g+s*f*g,w=v*f*l-u*_*l-v*o*h+s*_*h+u*o*d-s*f*d,S=t*b+i*M+n*E+r*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=b*T,e[1]=(_*h*r-f*d*r-_*n*p+i*d*p+f*n*g-i*h*g)*T,e[2]=(o*d*r-_*l*r+_*n*c-i*d*c-o*n*g+i*l*g)*T,e[3]=(f*l*r-o*h*r-f*n*c+i*h*c+o*n*p-i*l*p)*T,e[4]=M*T,e[5]=(u*d*r-v*h*r+v*n*p-t*d*p-u*n*g+t*h*g)*T,e[6]=(v*l*r-s*d*r-v*n*c+t*d*c+s*n*g-t*l*g)*T,e[7]=(s*h*r-u*l*r+u*n*c-t*h*c-s*n*p+t*l*p)*T,e[8]=E*T,e[9]=(v*f*r-u*_*r-v*i*p+t*_*p+u*i*g-t*f*g)*T,e[10]=(s*_*r-v*o*r+v*i*c-t*_*c-s*i*g+t*o*g)*T,e[11]=(u*o*r-s*f*r-u*i*c+t*f*c+s*i*p-t*o*p)*T,e[12]=w*T,e[13]=(u*_*n-v*f*n+v*i*h-t*_*h-u*i*d+t*f*d)*T,e[14]=(v*o*n-s*_*n-v*i*l+t*_*l+s*i*d-t*o*d)*T,e[15]=(s*f*n-u*o*n+u*i*l-t*f*l-s*i*h+t*o*h)*T,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*s,0,c*l-n*o,u*l+n*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,s){return this.set(1,i,r,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,u=s+s,f=o+o,h=r*c,p=r*u,v=r*f,_=s*u,d=s*f,g=o*f,b=l*c,M=l*u,E=l*f,w=i.x,S=i.y,T=i.z;return n[0]=(1-(_+g))*w,n[1]=(p+E)*w,n[2]=(v-M)*w,n[3]=0,n[4]=(p-E)*S,n[5]=(1-(h+g))*S,n[6]=(d+b)*S,n[7]=0,n[8]=(v+M)*T,n[9]=(d-b)*T,n[10]=(1-(h+_))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=_r.set(n[0],n[1],n[2]).length();const s=_r.set(n[4],n[5],n[6]).length(),o=_r.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],On.copy(this);const c=1/r,u=1/s,f=1/o;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,t.setFromRotationMatrix(On),i.x=r,i.y=s,i.z=o,this}makePerspective(e,t,i,n,r,s,o=li){const l=this.elements,c=2*r/(t-e),u=2*r/(i-n),f=(t+e)/(t-e),h=(i+n)/(i-n);let p,v;if(o===li)p=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(o===Bs)p=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,s,o=li){const l=this.elements,c=1/(t-e),u=1/(i-n),f=1/(s-r),h=(t+e)*c,p=(i+n)*u;let v,_;if(o===li)v=(s+r)*f,_=-2*f;else if(o===Bs)v=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const _r=new oe,On=new Ct,gm=new oe(0,0,0),_m=new oe(1,1,1),vi=new oe,rs=new oe,un=new oe,yu=new Ct,Su=new za;class $s{constructor(e=0,t=0,i=0,n=$s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],s=n[4],o=n[8],l=n[1],c=n[5],u=n[9],f=n[2],h=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-It(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-It(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Su.setFromEuler(this),this.setFromQuaternion(Su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$s.DEFAULT_ORDER="XYZ";class fh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vm=0;const Mu=new oe,vr=new za,$n=new Ct,as=new oe,ga=new oe,xm=new oe,ym=new za,Eu=new oe(1,0,0),bu=new oe(0,1,0),Tu=new oe(0,0,1),Sm={type:"added"},Mm={type:"removed"};class gn extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=$r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new oe,t=new $s,i=new za,n=new oe(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Ze}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(Eu,e)}rotateY(e){return this.rotateOnAxis(bu,e)}rotateZ(e){return this.rotateOnAxis(Tu,e)}translateOnAxis(e,t){return Mu.copy(e).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eu,e)}translateY(e){return this.translateOnAxis(bu,e)}translateZ(e){return this.translateOnAxis(Tu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?as.copy(e):as.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(ga,as,this.up):$n.lookAt(as,ga,this.up),this.quaternion.setFromRotationMatrix($n),n&&($n.extractRotation(n.matrixWorld),vr.setFromRotationMatrix($n),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,xm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let r=0,s=n.length;r<s;r++){const o=n[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),h=s(e.skeletons),p=s(e.animations),v=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=n,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}gn.DEFAULT_UP=new oe(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new oe,ei=new oe,Io=new oe,ti=new oe,xr=new oe,yr=new oe,wu=new oe,Fo=new oe,Oo=new oe,No=new oe;let ss=!1;class Bn{constructor(e=new oe,t=new oe,i=new oe){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Nn.subVectors(e,t),n.cross(Nn);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Nn.subVectors(n,t),ei.subVectors(i,t),Io.subVectors(e,t);const s=Nn.dot(Nn),o=Nn.dot(ei),l=Nn.dot(Io),c=ei.dot(ei),u=ei.dot(Io),f=s*c-o*o;if(f===0)return r.set(-2,-1,-1);const h=1/f,p=(c*l-o*u)*h,v=(s*u-o*l)*h;return r.set(1-p-v,v,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ti),ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,t,i,n,r,s,o,l){return ss===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ss=!0),this.getInterpolation(e,t,i,n,r,s,o,l)}static getInterpolation(e,t,i,n,r,s,o,l){return this.getBarycoord(e,t,i,n,ti),l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(s,ti.y),l.addScaledVector(o,ti.z),l}static isFrontFacing(e,t,i,n){return Nn.subVectors(i,t),ei.subVectors(e,t),Nn.cross(ei).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Nn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,r){return ss===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ss=!0),Bn.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}getInterpolation(e,t,i,n,r){return Bn.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let s,o;xr.subVectors(n,i),yr.subVectors(r,i),Fo.subVectors(e,i);const l=xr.dot(Fo),c=yr.dot(Fo);if(l<=0&&c<=0)return t.copy(i);Oo.subVectors(e,n);const u=xr.dot(Oo),f=yr.dot(Oo);if(u>=0&&f<=u)return t.copy(n);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(i).addScaledVector(xr,s);No.subVectors(e,r);const p=xr.dot(No),v=yr.dot(No);if(v>=0&&p<=v)return t.copy(r);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(yr,o);const d=u*v-p*f;if(d<=0&&f-u>=0&&p-v>=0)return wu.subVectors(r,n),o=(f-u)/(f-u+(p-v)),t.copy(n).addScaledVector(wu,o);const g=1/(d+_+h);return s=_*g,o=h*g,t.copy(i).addScaledVector(xr,s).addScaledVector(yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},os={h:0,s:0,l:0};function Bo(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=it.workingColorSpace){if(e=Kl(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=Bo(s,r,e+1/3),this.g=Bo(s,r,e),this.b=Bo(s,r,e-1/3)}return it.toWorkingColorSpace(this,n),this}setStyle(e,t=Rt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const i=hh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}copyLinearToSRGB(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return it.fromWorkingColorSpace(kt.copy(this),e),Math.round(It(kt.r*255,0,255))*65536+Math.round(It(kt.g*255,0,255))*256+Math.round(It(kt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(kt.copy(this),t);const i=kt.r,n=kt.g,r=kt.b,s=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=u<=.5?f/(s+o):f/(2-s-o),s){case i:l=(n-r)/f+(n<r?6:0);break;case n:l=(r-i)/f+2;break;case r:l=(i-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Rt){it.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,i=kt.g,n=kt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(os);const i=Ta(xi.h,os.h,t),n=Ta(xi.s,os.s,t),r=Ta(xi.l,os.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Ke;Ke.NAMES=hh;let Em=0;class ea extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=$r(),this.name="",this.type="Material",this.blending=Or,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=_l,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gl&&(i.blendSrc=this.blendSrc),this.blendDst!==_l&&(i.blendDst=this.blendDst),this.blendEquation!==Yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=n(e.textures),s=n(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zl extends ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const si=bm();function bm(){const a=new ArrayBuffer(4),e=new Float32Array(a),t=new Uint32Array(a),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}const r=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:r,exponentTable:s,offsetTable:o}}function Tm(a){Math.abs(a)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),a=It(a,-65504,65504),si.floatView[0]=a;const e=si.uint32View[0],t=e>>23&511;return si.baseTable[t]+((e&8388607)>>si.shiftTable[t])}function wm(a){const e=a>>10;return si.uint32View[0]=si.mantissaTable[si.offsetTable[e]+(a&1023)]+si.exponentTable[e],si.floatView[0]}const ls={toHalfFloat:Tm,fromHalfFloat:wm},_t=new oe,cs=new Je;class jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=du,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)cs.fromBufferAttribute(this,t),cs.applyMatrix3(e),this.setXY(t,cs.x,cs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Dr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),n=Ht(n,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==du&&(e.usage=this.usage),e}}class dh extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ph extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Yn extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Am=0;const yn=new Ct,ko=new gn,Sr=new oe,fn=new lr,_a=new lr,At=new oe;class fi extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=$r(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oh(e)?ph:dh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return ko.lookAt(e),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Yn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new oe,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];_a.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(fn.min,_a.min),fn.expandByPoint(At),At.addVectors(fn.max,_a.max),fn.expandByPoint(At)):(fn.expandByPoint(_a.min),fn.expandByPoint(_a.max))}fn.getCenter(i);let n=0;for(let r=0,s=e.count;r<s;r++)At.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(At));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(Sr.fromBufferAttribute(e,c),At.add(Sr)),n=Math.max(n,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,r=t.normal.array,s=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let x=0;x<o;x++)c[x]=new oe,u[x]=new oe;const f=new oe,h=new oe,p=new oe,v=new Je,_=new Je,d=new Je,g=new oe,b=new oe;function M(x,C,A){f.fromArray(n,x*3),h.fromArray(n,C*3),p.fromArray(n,A*3),v.fromArray(s,x*2),_.fromArray(s,C*2),d.fromArray(s,A*2),h.sub(f),p.sub(f),_.sub(v),d.sub(v);const O=1/(_.x*d.y-d.x*_.y);isFinite(O)&&(g.copy(h).multiplyScalar(d.y).addScaledVector(p,-_.y).multiplyScalar(O),b.copy(p).multiplyScalar(_.x).addScaledVector(h,-d.x).multiplyScalar(O),c[x].add(g),c[C].add(g),c[A].add(g),u[x].add(b),u[C].add(b),u[A].add(b))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let x=0,C=E.length;x<C;++x){const A=E[x],O=A.start,P=A.count;for(let k=O,F=O+P;k<F;k+=3)M(i[k+0],i[k+1],i[k+2])}const w=new oe,S=new oe,T=new oe,y=new oe;function m(x){T.fromArray(r,x*3),y.copy(T);const C=c[x];w.copy(C),w.sub(T.multiplyScalar(T.dot(C))).normalize(),S.crossVectors(y,C);const O=S.dot(u[x])<0?-1:1;l[x*4]=w.x,l[x*4+1]=w.y,l[x*4+2]=w.z,l[x*4+3]=O}for(let x=0,C=E.length;x<C;++x){const A=E[x],O=A.start,P=A.count;for(let k=O,F=O+P;k<F;k+=3)m(i[k+0]),m(i[k+1]),m(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const n=new oe,r=new oe,s=new oe,o=new oe,l=new oe,c=new oe,u=new oe,f=new oe;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),_=e.getX(h+1),d=e.getX(h+2);n.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,d),u.subVectors(s,r),f.subVectors(n,r),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,d),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)n.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,r),f.subVectors(n,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let _=0,d=l.length;_<d;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let g=0;g<u;g++)h[v++]=c[p++]}return new jt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fi,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(n[l]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Au=new Ct,Gi=new mm,us=new Qs,Ru=new oe,Mr=new oe,Er=new oe,br=new oe,Go=new oe,fs=new oe,hs=new Je,ds=new Je,ps=new Je,Cu=new oe,Pu=new oe,Lu=new oe,ms=new oe,gs=new oe;class bn extends gn{constructor(e=new fi,t=new Zl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(r&&o){fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Go.fromBufferAttribute(f,e),s?fs.addScaledVector(Go,u):fs.addScaledVector(Go.sub(t),u))}t.add(fs)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),us.copy(i.boundingSphere),us.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(us.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(us,Ru)===null||Gi.origin.distanceToSquared(Ru)>(e.far-e.near)**2))&&(Au.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(Au),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,i){let n;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,_=h.length;v<_;v++){const d=h[v],g=s[d.materialIndex],b=Math.max(d.start,p.start),M=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let E=b,w=M;E<w;E+=3){const S=o.getX(E),T=o.getX(E+1),y=o.getX(E+2);n=_s(this,g,e,i,c,u,f,S,T,y),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=d.materialIndex,t.push(n))}}else{const v=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let d=v,g=_;d<g;d+=3){const b=o.getX(d),M=o.getX(d+1),E=o.getX(d+2);n=_s(this,s,e,i,c,u,f,b,M,E),n&&(n.faceIndex=Math.floor(d/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,_=h.length;v<_;v++){const d=h[v],g=s[d.materialIndex],b=Math.max(d.start,p.start),M=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let E=b,w=M;E<w;E+=3){const S=E,T=E+1,y=E+2;n=_s(this,g,e,i,c,u,f,S,T,y),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=d.materialIndex,t.push(n))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let d=v,g=_;d<g;d+=3){const b=d,M=d+1,E=d+2;n=_s(this,s,e,i,c,u,f,b,M,E),n&&(n.faceIndex=Math.floor(d/3),t.push(n))}}}}function Rm(a,e,t,i,n,r,s,o){let l;if(e.side===tn?l=i.intersectTriangle(s,r,n,!0,o):l=i.intersectTriangle(n,r,s,e.side===Ci,o),l===null)return null;gs.copy(o),gs.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(gs);return c<t.near||c>t.far?null:{distance:c,point:gs.clone(),object:a}}function _s(a,e,t,i,n,r,s,o,l,c){a.getVertexPosition(o,Mr),a.getVertexPosition(l,Er),a.getVertexPosition(c,br);const u=Rm(a,e,t,i,Mr,Er,br,ms);if(u){n&&(hs.fromBufferAttribute(n,o),ds.fromBufferAttribute(n,l),ps.fromBufferAttribute(n,c),u.uv=Bn.getInterpolation(ms,Mr,Er,br,hs,ds,ps,new Je)),r&&(hs.fromBufferAttribute(r,o),ds.fromBufferAttribute(r,l),ps.fromBufferAttribute(r,c),u.uv1=Bn.getInterpolation(ms,Mr,Er,br,hs,ds,ps,new Je),u.uv2=u.uv1),s&&(Cu.fromBufferAttribute(s,o),Pu.fromBufferAttribute(s,l),Lu.fromBufferAttribute(s,c),u.normal=Bn.getInterpolation(ms,Mr,Er,br,Cu,Pu,Lu,new oe),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new oe,materialIndex:0};Bn.getNormal(Mr,Er,br,f.normal),u.face=f}return u}class Va extends fi{constructor(e=1,t=1,i=1,n=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:s};const o=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,s,r,0),v("z","y","x",1,-1,i,t,-e,s,r,1),v("x","z","y",1,1,e,i,t,n,s,2),v("x","z","y",1,-1,e,i,-t,n,s,3),v("x","y","z",1,-1,e,t,i,n,r,4),v("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Yn(c,3)),this.setAttribute("normal",new Yn(u,3)),this.setAttribute("uv",new Yn(f,2));function v(_,d,g,b,M,E,w,S,T,y,m){const x=E/T,C=w/y,A=E/2,O=w/2,P=S/2,k=T+1,F=y+1;let X=0,J=0;const q=new oe;for(let V=0;V<F;V++){const G=V*C-O;for(let W=0;W<k;W++){const z=W*x-A;q[_]=z*b,q[d]=G*M,q[g]=P,c.push(q.x,q.y,q.z),q[_]=0,q[d]=0,q[g]=S>0?1:-1,u.push(q.x,q.y,q.z),f.push(W/T),f.push(1-V/y),X+=1}}for(let V=0;V<y;V++)for(let G=0;G<T;G++){const W=h+G+k*V,z=h+G+k*(V+1),H=h+(G+1)+k*(V+1),K=h+(G+1)+k*V;l.push(W,z,K),l.push(z,H,K),J+=6}o.addGroup(p,J,m),p+=J,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xr(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const n=a[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Xt(a){const e={};for(let t=0;t<a.length;t++){const i=Xr(a[t]);for(const n in i)e[n]=i[n]}return e}function Cm(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function mh(a){return a.getRenderTarget()===null?a.outputColorSpace:it.workingColorSpace}const gh={clone:Xr,merge:Xt};var Pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pm,this.fragmentShader=Lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.uniformsGroups=Cm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class _h extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Mn extends _h{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Da*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ba*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*n/l,t-=s.offsetY*i/c,n*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Tr=-90,wr=1;class Dm extends gn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Mn(Tr,wr,e,t);n.layers=this.layers,this.add(n);const r=new Mn(Tr,wr,e,t);r.layers=this.layers,this.add(r);const s=new Mn(Tr,wr,e,t);s.layers=this.layers,this.add(s);const o=new Mn(Tr,wr,e,t);o.layers=this.layers,this.add(o);const l=new Mn(Tr,wr,e,t);l.layers=this.layers,this.add(l);const c=new Mn(Tr,wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,s,o,l]=t;for(const c of t)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,s),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class vh extends zt{constructor(e,t,i,n,r,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:zr,super(e,t,i,n,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Um extends ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(wa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===$i?Rt:En),this.texture=new vh(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Va(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:Xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:bi});r.uniforms.tEquirect.value=t;const s=new bn(n,r),o=t.minFilter;return t.minFilter===Hr&&(t.minFilter=Mt),new Dm(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,n){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(r)}}const zo=new oe,Im=new oe,Fm=new Ze;class Xi{constructor(e=new oe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=zo.subVectors(i,t).cross(Im.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(zo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Fm.getNormalMatrix(e),n=this.coplanarPoint(zo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new Qs,vs=new oe;class xh{constructor(e=new Xi,t=new Xi,i=new Xi,n=new Xi,r=new Xi,s=new Xi){this.planes=[e,t,i,n,r,s]}set(e,t,i,n,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=li){const i=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],l=n[3],c=n[4],u=n[5],f=n[6],h=n[7],p=n[8],v=n[9],_=n[10],d=n[11],g=n[12],b=n[13],M=n[14],E=n[15];if(i[0].setComponents(l-r,h-c,d-p,E-g).normalize(),i[1].setComponents(l+r,h+c,d+p,E+g).normalize(),i[2].setComponents(l+s,h+u,d+v,E+b).normalize(),i[3].setComponents(l-s,h-u,d-v,E-b).normalize(),i[4].setComponents(l-o,h-f,d-_,E-M).normalize(),t===li)i[5].setComponents(l+o,h+f,d+_,E+M).normalize();else if(t===Bs)i[5].setComponents(o,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(vs.x=n.normal.x>0?e.max.x:e.min.x,vs.y=n.normal.y>0?e.max.y:e.min.y,vs.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yh(){let a=null,e=!1,t=null,i=null;function n(r,s){t(r,s),i=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(n),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function Om(a,e){const t=e.isWebGL2,i=new WeakMap;function n(c,u){const f=c.array,h=c.usage,p=f.byteLength,v=a.createBuffer();a.bindBuffer(u,v),a.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=a.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=a.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=a.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=a.SHORT;else if(f instanceof Uint32Array)_=a.UNSIGNED_INT;else if(f instanceof Int32Array)_=a.INT;else if(f instanceof Int8Array)_=a.BYTE;else if(f instanceof Uint8Array)_=a.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,u,f){const h=u.array,p=u._updateRange,v=u.updateRanges;if(a.bindBuffer(f,c),p.count===-1&&v.length===0&&a.bufferSubData(f,0,h),v.length!==0){for(let _=0,d=v.length;_<d;_++){const g=v[_];t?a.bufferSubData(f,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count):a.bufferSubData(f,g.start*h.BYTES_PER_ELEMENT,h.subarray(g.start,g.start+g.count))}u.clearUpdateRanges()}p.count!==-1&&(t?a.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):a.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(a.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,n(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,u),f.version=c.version}}return{get:s,remove:o,update:l}}class ta extends fi{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,s=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,f=e/o,h=t/l,p=[],v=[],_=[],d=[];for(let g=0;g<u;g++){const b=g*h-s;for(let M=0;M<c;M++){const E=M*f-r;v.push(E,-b,0),_.push(0,0,1),d.push(M/o),d.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<o;b++){const M=b+c*g,E=b+c*(g+1),w=b+1+c*(g+1),S=b+1+c*g;p.push(M,E,S),p.push(E,w,S)}this.setIndex(p),this.setAttribute("position",new Yn(v,3)),this.setAttribute("normal",new Yn(_,3)),this.setAttribute("uv",new Yn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bm=`#ifdef USE_ALPHAHASH
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
#endif`,km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hm=`#ifdef USE_AOMAP
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
#endif`,Wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xm=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Km=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zm=`#ifdef USE_IRIDESCENCE
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
#endif`,Jm=`#ifdef USE_BUMPMAP
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
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sg=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,og=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,lg=`vec3 transformedNormal = objectNormal;
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
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ug=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dg="gl_FragColor = linearToOutputTexel( gl_FragColor );",pg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,mg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_g=`#ifdef USE_ENVMAP
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
#endif`,vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
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
#endif`,yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bg=`#ifdef USE_GRADIENTMAP
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
}`,Tg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cg=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Pg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fg=`PhysicalMaterial material;
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
#endif`,Og=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Ng=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Bg=`#if defined( RE_IndirectDiffuse )
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
#endif`,kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jg=`#if defined( USE_POINTS_UV )
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
#endif`,Yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Qg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$g=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,e_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,t_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,n_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a_=`#ifdef USE_NORMALMAP
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
#endif`,s_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,h_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,__=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,x_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,y_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E_=`#ifdef USE_SKINNING
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
#endif`,b_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T_=`#ifdef USE_SKINNING
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
#endif`,w_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C_=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,P_=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,L_=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N_=`uniform sampler2D t2D;
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
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`#include <common>
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
}`,H_=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,W_=`#define DISTANCE
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
}`,X_=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y_=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K_=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z_=`#include <common>
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
}`,J_=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Q_=`#define LAMBERT
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
}`,$_=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,e0=`#define MATCAP
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
}`,t0=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,n0=`#define NORMAL
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
}`,i0=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,r0=`#define PHONG
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
}`,a0=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,s0=`#define STANDARD
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
}`,o0=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,l0=`#define TOON
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
}`,c0=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,u0=`uniform float size;
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
}`,f0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,h0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,d0=`uniform vec3 color;
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
}`,p0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,m0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ye={alphahash_fragment:Nm,alphahash_pars_fragment:Bm,alphamap_fragment:km,alphamap_pars_fragment:Gm,alphatest_fragment:zm,alphatest_pars_fragment:Vm,aomap_fragment:Hm,aomap_pars_fragment:Wm,batching_pars_vertex:Xm,batching_vertex:qm,begin_vertex:jm,beginnormal_vertex:Ym,bsdfs:Km,iridescence_fragment:Zm,bumpmap_pars_fragment:Jm,clipping_planes_fragment:Qm,clipping_planes_pars_fragment:$m,clipping_planes_pars_vertex:eg,clipping_planes_vertex:tg,color_fragment:ng,color_pars_fragment:ig,color_pars_vertex:rg,color_vertex:ag,common:sg,cube_uv_reflection_fragment:og,defaultnormal_vertex:lg,displacementmap_pars_vertex:cg,displacementmap_vertex:ug,emissivemap_fragment:fg,emissivemap_pars_fragment:hg,colorspace_fragment:dg,colorspace_pars_fragment:pg,envmap_fragment:mg,envmap_common_pars_fragment:gg,envmap_pars_fragment:_g,envmap_pars_vertex:vg,envmap_physical_pars_fragment:Pg,envmap_vertex:xg,fog_vertex:yg,fog_pars_vertex:Sg,fog_fragment:Mg,fog_pars_fragment:Eg,gradientmap_pars_fragment:bg,lightmap_fragment:Tg,lightmap_pars_fragment:wg,lights_lambert_fragment:Ag,lights_lambert_pars_fragment:Rg,lights_pars_begin:Cg,lights_toon_fragment:Lg,lights_toon_pars_fragment:Dg,lights_phong_fragment:Ug,lights_phong_pars_fragment:Ig,lights_physical_fragment:Fg,lights_physical_pars_fragment:Og,lights_fragment_begin:Ng,lights_fragment_maps:Bg,lights_fragment_end:kg,logdepthbuf_fragment:Gg,logdepthbuf_pars_fragment:zg,logdepthbuf_pars_vertex:Vg,logdepthbuf_vertex:Hg,map_fragment:Wg,map_pars_fragment:Xg,map_particle_fragment:qg,map_particle_pars_fragment:jg,metalnessmap_fragment:Yg,metalnessmap_pars_fragment:Kg,morphcolor_vertex:Zg,morphnormal_vertex:Jg,morphtarget_pars_vertex:Qg,morphtarget_vertex:$g,normal_fragment_begin:e_,normal_fragment_maps:t_,normal_pars_fragment:n_,normal_pars_vertex:i_,normal_vertex:r_,normalmap_pars_fragment:a_,clearcoat_normal_fragment_begin:s_,clearcoat_normal_fragment_maps:o_,clearcoat_pars_fragment:l_,iridescence_pars_fragment:c_,opaque_fragment:u_,packing:f_,premultiplied_alpha_fragment:h_,project_vertex:d_,dithering_fragment:p_,dithering_pars_fragment:m_,roughnessmap_fragment:g_,roughnessmap_pars_fragment:__,shadowmap_pars_fragment:v_,shadowmap_pars_vertex:x_,shadowmap_vertex:y_,shadowmask_pars_fragment:S_,skinbase_vertex:M_,skinning_pars_vertex:E_,skinning_vertex:b_,skinnormal_vertex:T_,specularmap_fragment:w_,specularmap_pars_fragment:A_,tonemapping_fragment:R_,tonemapping_pars_fragment:C_,transmission_fragment:P_,transmission_pars_fragment:L_,uv_pars_fragment:D_,uv_pars_vertex:U_,uv_vertex:I_,worldpos_vertex:F_,background_vert:O_,background_frag:N_,backgroundCube_vert:B_,backgroundCube_frag:k_,cube_vert:G_,cube_frag:z_,depth_vert:V_,depth_frag:H_,distanceRGBA_vert:W_,distanceRGBA_frag:X_,equirect_vert:q_,equirect_frag:j_,linedashed_vert:Y_,linedashed_frag:K_,meshbasic_vert:Z_,meshbasic_frag:J_,meshlambert_vert:Q_,meshlambert_frag:$_,meshmatcap_vert:e0,meshmatcap_frag:t0,meshnormal_vert:n0,meshnormal_frag:i0,meshphong_vert:r0,meshphong_frag:a0,meshphysical_vert:s0,meshphysical_frag:o0,meshtoon_vert:l0,meshtoon_frag:c0,points_vert:u0,points_frag:f0,shadow_vert:h0,shadow_frag:d0,sprite_vert:p0,sprite_frag:m0},Ce={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Xn={basic:{uniforms:Xt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Xt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Xt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Xt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Xt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Xt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Xt([Ce.points,Ce.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Xt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Xt([Ce.common,Ce.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Xt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Xt([Ce.sprite,Ce.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Xt([Ce.common,Ce.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Xt([Ce.lights,Ce.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Xn.physical={uniforms:Xt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const xs={r:0,b:0,g:0};function g0(a,e,t,i,n,r,s){const o=new Ke(0);let l=r===!0?0:1,c,u,f=null,h=0,p=null;function v(d,g){let b=!1,M=g.isScene===!0?g.background:null;M&&M.isTexture&&(M=(g.backgroundBlurriness>0?t:e).get(M)),M===null?_(o,l):M&&M.isColor&&(_(M,1),b=!0);const E=a.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(a.autoClear||b)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Zs)?(u===void 0&&(u=new bn(new Va(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Xr(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=it.getTransfer(M.colorSpace)!==lt,(f!==M||h!==M.version||p!==a.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,p=a.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new bn(new ta(2,2),new Pi({name:"BackgroundMaterial",uniforms:Xr(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=it.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||p!==a.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,p=a.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function _(d,g){d.getRGB(xs,mh(a)),i.buffers.color.setClear(xs.r,xs.g,xs.b,g,s)}return{getClearColor:function(){return o},setClearColor:function(d,g=1){o.set(d),l=g,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,_(o,l)},render:v}}function _0(a,e,t,i){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||r!==null,o={},l=d(null);let c=l,u=!1;function f(P,k,F,X,J){let q=!1;if(s){const V=_(X,F,k);c!==V&&(c=V,p(c.object)),q=g(P,X,F,J),q&&b(P,X,F,J)}else{const V=k.wireframe===!0;(c.geometry!==X.id||c.program!==F.id||c.wireframe!==V)&&(c.geometry=X.id,c.program=F.id,c.wireframe=V,q=!0)}J!==null&&t.update(J,a.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,y(P,k,F,X),J!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function h(){return i.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function p(P){return i.isWebGL2?a.bindVertexArray(P):r.bindVertexArrayOES(P)}function v(P){return i.isWebGL2?a.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,k,F){const X=F.wireframe===!0;let J=o[P.id];J===void 0&&(J={},o[P.id]=J);let q=J[k.id];q===void 0&&(q={},J[k.id]=q);let V=q[X];return V===void 0&&(V=d(h()),q[X]=V),V}function d(P){const k=[],F=[],X=[];for(let J=0;J<n;J++)k[J]=0,F[J]=0,X[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:F,attributeDivisors:X,object:P,attributes:{},index:null}}function g(P,k,F,X){const J=c.attributes,q=k.attributes;let V=0;const G=F.getAttributes();for(const W in G)if(G[W].location>=0){const H=J[W];let K=q[W];if(K===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),H===void 0||H.attribute!==K||K&&H.data!==K.data)return!0;V++}return c.attributesNum!==V||c.index!==X}function b(P,k,F,X){const J={},q=k.attributes;let V=0;const G=F.getAttributes();for(const W in G)if(G[W].location>=0){let H=q[W];H===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(H=P.instanceColor));const K={};K.attribute=H,H&&H.data&&(K.data=H.data),J[W]=K,V++}c.attributes=J,c.attributesNum=V,c.index=X}function M(){const P=c.newAttributes;for(let k=0,F=P.length;k<F;k++)P[k]=0}function E(P){w(P,0)}function w(P,k){const F=c.newAttributes,X=c.enabledAttributes,J=c.attributeDivisors;F[P]=1,X[P]===0&&(a.enableVertexAttribArray(P),X[P]=1),J[P]!==k&&((i.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,k),J[P]=k)}function S(){const P=c.newAttributes,k=c.enabledAttributes;for(let F=0,X=k.length;F<X;F++)k[F]!==P[F]&&(a.disableVertexAttribArray(F),k[F]=0)}function T(P,k,F,X,J,q,V){V===!0?a.vertexAttribIPointer(P,k,F,J,q):a.vertexAttribPointer(P,k,F,X,J,q)}function y(P,k,F,X){if(i.isWebGL2===!1&&(P.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const J=X.attributes,q=F.getAttributes(),V=k.defaultAttributeValues;for(const G in q){const W=q[G];if(W.location>=0){let z=J[G];if(z===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(z=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(z=P.instanceColor)),z!==void 0){const H=z.normalized,K=z.itemSize,ne=t.get(z);if(ne===void 0)continue;const $=ne.buffer,Y=ne.type,R=ne.bytesPerElement,D=i.isWebGL2===!0&&(Y===a.INT||Y===a.UNSIGNED_INT||z.gpuType===Zf);if(z.isInterleavedBufferAttribute){const N=z.data,I=N.stride,re=z.offset;if(N.isInstancedInterleavedBuffer){for(let Q=0;Q<W.locationSize;Q++)w(W.location+Q,N.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let Q=0;Q<W.locationSize;Q++)E(W.location+Q);a.bindBuffer(a.ARRAY_BUFFER,$);for(let Q=0;Q<W.locationSize;Q++)T(W.location+Q,K/W.locationSize,Y,H,I*R,(re+K/W.locationSize*Q)*R,D)}else{if(z.isInstancedBufferAttribute){for(let N=0;N<W.locationSize;N++)w(W.location+N,z.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let N=0;N<W.locationSize;N++)E(W.location+N);a.bindBuffer(a.ARRAY_BUFFER,$);for(let N=0;N<W.locationSize;N++)T(W.location+N,K/W.locationSize,Y,H,K*R,K/W.locationSize*N*R,D)}}else if(V!==void 0){const H=V[G];if(H!==void 0)switch(H.length){case 2:a.vertexAttrib2fv(W.location,H);break;case 3:a.vertexAttrib3fv(W.location,H);break;case 4:a.vertexAttrib4fv(W.location,H);break;default:a.vertexAttrib1fv(W.location,H)}}}}S()}function m(){A();for(const P in o){const k=o[P];for(const F in k){const X=k[F];for(const J in X)v(X[J].object),delete X[J];delete k[F]}delete o[P]}}function x(P){if(o[P.id]===void 0)return;const k=o[P.id];for(const F in k){const X=k[F];for(const J in X)v(X[J].object),delete X[J];delete k[F]}delete o[P.id]}function C(P){for(const k in o){const F=o[k];if(F[P.id]===void 0)continue;const X=F[P.id];for(const J in X)v(X[J].object),delete X[J];delete F[P.id]}}function A(){O(),u=!0,c!==l&&(c=l,p(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:A,resetDefaultState:O,dispose:m,releaseStatesOfGeometry:x,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:E,disableUnusedAttributes:S}}function v0(a,e,t,i){const n=i.isWebGL2;let r;function s(u){r=u}function o(u,f){a.drawArrays(r,u,f),t.update(f,r,1)}function l(u,f,h){if(h===0)return;let p,v;if(n)p=a,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](r,u,f,h),t.update(f,r,h)}function c(u,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<h;v++)this.render(u[v],f[v]);else{p.multiDrawArraysWEBGL(r,u,0,f,0,h);let v=0;for(let _=0;_<h;_++)v+=f[_];t.update(v,r,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function x0(a,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){if(T==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),h=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=a.getParameter(a.MAX_TEXTURE_SIZE),v=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),_=a.getParameter(a.MAX_VERTEX_ATTRIBS),d=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),g=a.getParameter(a.MAX_VARYING_VECTORS),b=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),M=h>0,E=s||e.has("OES_texture_float"),w=M&&E,S=s?a.getParameter(a.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:b,vertexTextures:M,floatFragmentTextures:E,floatVertexTextures:w,maxSamples:S}}function y0(a){const e=this;let t=null,i=0,n=!1,r=!1;const s=new Xi,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||n;return n=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,_=f.clipIntersection,d=f.clipShadows,g=a.get(f);if(!n||v===null||v.length===0||r&&!d)r?u(null):c();else{const b=r?0:i,M=b*4;let E=g.clippingState||null;l.value=E,E=u(v,h,M,p);for(let w=0;w!==M;++w)E[w]=t[w];g.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const _=f!==null?f.length:0;let d=null;if(_!==0){if(d=l.value,v!==!0||d===null){const g=p+_*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(d===null||d.length<g)&&(d=new Float32Array(g));for(let M=0,E=p;M!==_;++M,E+=4)s.copy(f[M]).applyMatrix4(b,o),s.normal.toArray(d,E),d[E+3]=s.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,d}}function S0(a){let e=new WeakMap;function t(s,o){return o===Is?s.mapping=zr:o===vl&&(s.mapping=Vr),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Is||o===vl)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Um(l.height/2);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class M0 extends _h{constructor(e=-1,t=1,i=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ur=4,Du=[.125,.215,.35,.446,.526,.582],Ki=20,Vo=new M0,Uu=new Ke;let Ho=null,Wo=0,Xo=0;const qi=(1+Math.sqrt(5))/2,Ar=1/qi,Iu=[new oe(1,1,1),new oe(-1,1,1),new oe(1,1,-1),new oe(-1,1,-1),new oe(0,qi,Ar),new oe(0,qi,-Ar),new oe(Ar,0,qi),new oe(-Ar,0,qi),new oe(qi,Ar,0),new oe(-qi,Ar,0)];class Fu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Ho=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ho,Wo,Xo),e.scissorTest=!1,ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zr||e.mapping===Vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ho=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:oi,format:Gn,colorSpace:Kn,depthBuffer:!1},n=Ou(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ou(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E0(r)),this._blurMaterial=b0(r,e,t)}return n}_compileMaterial(e){const t=new bn(this._lodPlanes[0],e);this._renderer.compile(t,Vo)}_sceneToCubeUV(e,t,i,n){const o=new Mn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Uu),u.toneMapping=Ti,u.autoClear=!1;const p=new Zl({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),v=new bn(new Va,p);let _=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,_=!0):(p.color.copy(Uu),_=!0);for(let g=0;g<6;g++){const b=g%3;b===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):b===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const M=this._cubeSize;ys(n,b*M,g>2?M:0,M,M),u.setRenderTarget(n),_&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===zr||e.mapping===Vr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());const r=n?this._cubemapMaterial:this._equirectMaterial,s=new bn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ys(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Vo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),s=Iu[(n-1)%Iu.length];this._blur(e,n-1,n,r,s)}t.autoClear=i}_blur(e,t,i,n,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,n,"latitudinal",r),this._halfBlur(s,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new bn(this._lodPlanes[n],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ki-1),_=r/v,d=isFinite(r)?1+Math.floor(u*_):Ki;d>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ki}`);const g=[];let b=0;for(let T=0;T<Ki;++T){const y=T/_,m=Math.exp(-y*y/2);g.push(m),T===0?b+=m:T<d&&(b+=2*m)}for(let T=0;T<g.length;T++)g[T]=g[T]/b;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=g,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=v,h.mipInt.value=M-i;const E=this._sizeLods[n],w=3*E*(n>M-Ur?n-M+Ur:0),S=4*(this._cubeSize-E);ys(t,w,S,3*E,2*E),l.setRenderTarget(t),l.render(f,Vo)}}function E0(a){const e=[],t=[],i=[];let n=a;const r=a-Ur+1+Du.length;for(let s=0;s<r;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>a-Ur?l=Du[s-a+Ur-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,_=3,d=2,g=1,b=new Float32Array(_*v*p),M=new Float32Array(d*v*p),E=new Float32Array(g*v*p);for(let S=0;S<p;S++){const T=S%3*2/3-1,y=S>2?0:-1,m=[T,y,0,T+2/3,y,0,T+2/3,y+1,0,T,y,0,T+2/3,y+1,0,T,y+1,0];b.set(m,_*v*S),M.set(h,d*v*S);const x=[S,S,S,S,S,S];E.set(x,g*v*S)}const w=new fi;w.setAttribute("position",new jt(b,_)),w.setAttribute("uv",new jt(M,d)),w.setAttribute("faceIndex",new jt(E,g)),e.push(w),n>Ur&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ou(a,e,t){const i=new ar(a,e,t);return i.texture.mapping=Zs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ys(a,e,t,i,n){a.viewport.set(e,t,i,n),a.scissor.set(e,t,i,n)}function b0(a,e,t){const i=new Float32Array(Ki),n=new oe(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Nu(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Bu(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Jl(){return`

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
	`}function T0(a){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Is||l===vl,u=l===zr||l===Vr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Fu(a)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&n(f)){t===null&&(t=new Fu(a));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function w0(a){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function A0(a,e,t,i){const n={},r=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const _=h.morphAttributes[v];for(let d=0,g=_.length;d<g;d++)e.remove(_[d])}h.removeEventListener("dispose",s),delete n[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return n[h.id]===!0||(h.addEventListener("dispose",s),n[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],a.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const _=p[v];for(let d=0,g=_.length;d<g;d++)e.update(_[d],a.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,v=f.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let M=0,E=b.length;M<E;M+=3){const w=b[M+0],S=b[M+1],T=b[M+2];h.push(w,S,S,T,T,w)}}else if(v!==void 0){const b=v.array;_=v.version;for(let M=0,E=b.length/3-1;M<E;M+=3){const w=M+0,S=M+1,T=M+2;h.push(w,S,S,T,T,w)}}else return;const d=new(oh(h)?ph:dh)(h,1);d.version=_;const g=r.get(f);g&&e.remove(g),r.set(f,d)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function R0(a,e,t,i){const n=i.isWebGL2;let r;function s(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function u(p,v){a.drawElements(r,v,o,p*l),t.update(v,r,1)}function f(p,v,_){if(_===0)return;let d,g;if(n)d=a,g="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,v,o,p*l,_),t.update(v,r,_)}function h(p,v,_){if(_===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<_;g++)this.render(p[g]/l,v[g]);else{d.multiDrawElementsWEBGL(r,v,0,o,p,0,_);let g=0;for(let b=0;b<_;b++)g+=v[b];t.update(g,r,1)}}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function C0(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(r/3);break;case a.LINES:t.lines+=o*(r/2);break;case a.LINE_STRIP:t.lines+=o*(r-1);break;case a.LINE_LOOP:t.lines+=o*r;break;case a.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function P0(a,e){return a[0]-e[0]}function L0(a,e){return Math.abs(e[1])-Math.abs(a[1])}function D0(a,e,t){const i={},n=new Float32Array(8),r=new WeakMap,s=new Et,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=v!==void 0?v.length:0;let d=r.get(u);if(d===void 0||d.count!==_){let k=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",k)};var p=k;d!==void 0&&d.texture.dispose();const M=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let m=0;M===!0&&(m=1),E===!0&&(m=2),w===!0&&(m=3);let x=u.attributes.position.count*m,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*C*4*_),O=new uh(A,x,C,_);O.type=zn,O.needsUpdate=!0;const P=m*4;for(let F=0;F<_;F++){const X=S[F],J=T[F],q=y[F],V=x*C*4*F;for(let G=0;G<X.count;G++){const W=G*P;M===!0&&(s.fromBufferAttribute(X,G),A[V+W+0]=s.x,A[V+W+1]=s.y,A[V+W+2]=s.z,A[V+W+3]=0),E===!0&&(s.fromBufferAttribute(J,G),A[V+W+4]=s.x,A[V+W+5]=s.y,A[V+W+6]=s.z,A[V+W+7]=0),w===!0&&(s.fromBufferAttribute(q,G),A[V+W+8]=s.x,A[V+W+9]=s.y,A[V+W+10]=s.z,A[V+W+11]=q.itemSize===4?s.w:1)}}d={count:_,texture:O,size:new Je(x,C)},r.set(u,d),u.addEventListener("dispose",k)}let g=0;for(let M=0;M<h.length;M++)g+=h[M];const b=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(a,"morphTargetBaseInfluence",b),f.getUniforms().setValue(a,"morphTargetInfluences",h),f.getUniforms().setValue(a,"morphTargetsTexture",d.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}else{const v=h===void 0?0:h.length;let _=i[u.id];if(_===void 0||_.length!==v){_=[];for(let E=0;E<v;E++)_[E]=[E,0];i[u.id]=_}for(let E=0;E<v;E++){const w=_[E];w[0]=E,w[1]=h[E]}_.sort(L0);for(let E=0;E<8;E++)E<v&&_[E][1]?(o[E][0]=_[E][0],o[E][1]=_[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(P0);const d=u.morphAttributes.position,g=u.morphAttributes.normal;let b=0;for(let E=0;E<8;E++){const w=o[E],S=w[0],T=w[1];S!==Number.MAX_SAFE_INTEGER&&T?(d&&u.getAttribute("morphTarget"+E)!==d[S]&&u.setAttribute("morphTarget"+E,d[S]),g&&u.getAttribute("morphNormal"+E)!==g[S]&&u.setAttribute("morphNormal"+E,g[S]),n[E]=T,b+=T):(d&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),g&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),n[E]=0)}const M=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(a,"morphTargetBaseInfluence",M),f.getUniforms().setValue(a,"morphTargetInfluences",n)}}return{update:l}}function U0(a,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(n.get(f)!==c&&(e.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;n.get(h)!==c&&(h.update(),n.set(h,c))}return f}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}class Sh extends zt{constructor(e,t,i,n,r,s,o,l,c,u){if(u=u!==void 0?u:Qi,u!==Qi&&u!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Qi&&(i=yi),i===void 0&&u===Wr&&(i=Ji),super(null,n,r,s,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mh=new zt,Eh=new Sh(1,1);Eh.compareFunction=sh;const bh=new uh,Th=new dm,wh=new vh,ku=[],Gu=[],zu=new Float32Array(16),Vu=new Float32Array(9),Hu=new Float32Array(4);function na(a,e,t){const i=a[0];if(i<=0||i>0)return a;const n=e*t;let r=ku[n];if(r===void 0&&(r=new Float32Array(n),ku[n]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function bt(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function Tt(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function eo(a,e){let t=Gu[e];t===void 0&&(t=new Int32Array(e),Gu[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function I0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function F0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;a.uniform2fv(this.addr,e),Tt(t,e)}}function O0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;a.uniform3fv(this.addr,e),Tt(t,e)}}function N0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;a.uniform4fv(this.addr,e),Tt(t,e)}}function B0(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,i))return;Hu.set(i),a.uniformMatrix2fv(this.addr,!1,Hu),Tt(t,i)}}function k0(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,i))return;Vu.set(i),a.uniformMatrix3fv(this.addr,!1,Vu),Tt(t,i)}}function G0(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,i))return;zu.set(i),a.uniformMatrix4fv(this.addr,!1,zu),Tt(t,i)}}function z0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function V0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;a.uniform2iv(this.addr,e),Tt(t,e)}}function H0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;a.uniform3iv(this.addr,e),Tt(t,e)}}function W0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;a.uniform4iv(this.addr,e),Tt(t,e)}}function X0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function q0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;a.uniform2uiv(this.addr,e),Tt(t,e)}}function j0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;a.uniform3uiv(this.addr,e),Tt(t,e)}}function Y0(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;a.uniform4uiv(this.addr,e),Tt(t,e)}}function K0(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n);const r=this.type===a.SAMPLER_2D_SHADOW?Eh:Mh;t.setTexture2D(e||r,n)}function Z0(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Th,n)}function J0(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||wh,n)}function Q0(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||bh,n)}function $0(a){switch(a){case 5126:return I0;case 35664:return F0;case 35665:return O0;case 35666:return N0;case 35674:return B0;case 35675:return k0;case 35676:return G0;case 5124:case 35670:return z0;case 35667:case 35671:return V0;case 35668:case 35672:return H0;case 35669:case 35673:return W0;case 5125:return X0;case 36294:return q0;case 36295:return j0;case 36296:return Y0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return Q0}}function ev(a,e){a.uniform1fv(this.addr,e)}function tv(a,e){const t=na(e,this.size,2);a.uniform2fv(this.addr,t)}function nv(a,e){const t=na(e,this.size,3);a.uniform3fv(this.addr,t)}function iv(a,e){const t=na(e,this.size,4);a.uniform4fv(this.addr,t)}function rv(a,e){const t=na(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function av(a,e){const t=na(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function sv(a,e){const t=na(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function ov(a,e){a.uniform1iv(this.addr,e)}function lv(a,e){a.uniform2iv(this.addr,e)}function cv(a,e){a.uniform3iv(this.addr,e)}function uv(a,e){a.uniform4iv(this.addr,e)}function fv(a,e){a.uniform1uiv(this.addr,e)}function hv(a,e){a.uniform2uiv(this.addr,e)}function dv(a,e){a.uniform3uiv(this.addr,e)}function pv(a,e){a.uniform4uiv(this.addr,e)}function mv(a,e,t){const i=this.cache,n=e.length,r=eo(t,n);bt(i,r)||(a.uniform1iv(this.addr,r),Tt(i,r));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Mh,r[s])}function gv(a,e,t){const i=this.cache,n=e.length,r=eo(t,n);bt(i,r)||(a.uniform1iv(this.addr,r),Tt(i,r));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Th,r[s])}function _v(a,e,t){const i=this.cache,n=e.length,r=eo(t,n);bt(i,r)||(a.uniform1iv(this.addr,r),Tt(i,r));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||wh,r[s])}function vv(a,e,t){const i=this.cache,n=e.length,r=eo(t,n);bt(i,r)||(a.uniform1iv(this.addr,r),Tt(i,r));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||bh,r[s])}function xv(a){switch(a){case 5126:return ev;case 35664:return tv;case 35665:return nv;case 35666:return iv;case 35674:return rv;case 35675:return av;case 35676:return sv;case 5124:case 35670:return ov;case 35667:case 35671:return lv;case 35668:case 35672:return cv;case 35669:case 35673:return uv;case 5125:return fv;case 36294:return hv;case 36295:return dv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return _v;case 36289:case 36303:case 36311:case 36292:return vv}}class yv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$0(t.type)}}class Sv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xv(t.type)}}class Mv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const o=n[r];o.setValue(e,t[o.id],i)}}}const qo=/(\w+)(\])?(\[|\.)?/g;function Wu(a,e){a.seq.push(e),a.map[e.id]=e}function Ev(a,e,t){const i=a.name,n=i.length;for(qo.lastIndex=0;;){const r=qo.exec(i),s=qo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){Wu(t,c===void 0?new yv(o,a,e):new Sv(o,a,e));break}else{let f=t.map[o];f===void 0&&(f=new Mv(o),Wu(t,f)),t=f}}}class As{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),s=e.getUniformLocation(t,r.name);Ev(r,s,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const s=e[n];s.id in t&&i.push(s)}return i}}function Xu(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const bv=37297;let Tv=0;function wv(a,e){const t=a.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=n;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}function Av(a){const e=it.getPrimaries(it.workingColorSpace),t=it.getPrimaries(a);let i;switch(e===t?i="":e===Ns&&t===Os?i="LinearDisplayP3ToLinearSRGB":e===Os&&t===Ns&&(i="LinearSRGBToLinearDisplayP3"),a){case Kn:case Js:return[i,"LinearTransferOETF"];case Rt:case Yl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[i,"LinearTransferOETF"]}}function qu(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),n=a.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+wv(a.getShaderSource(e),s)}else return n}function Rv(a,e){const t=Av(e);return`vec4 ${a}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Cv(a,e){let t;switch(e){case Tp:t="Linear";break;case wp:t="Reinhard";break;case Ap:t="OptimizedCineon";break;case Yf:t="ACESFilmic";break;case Rp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pv(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ya).join(`
`)}function Lv(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Dv(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=a.getActiveAttrib(e,n),s=r.name;let o=1;r.type===a.FLOAT_MAT2&&(o=2),r.type===a.FLOAT_MAT3&&(o=3),r.type===a.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function ya(a){return a!==""}function ju(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yu(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function El(a){return a.replace(Uv,Fv)}const Iv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Fv(a,e){let t=Ye[e];if(t===void 0){const i=Iv.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return El(t)}const Ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ku(a){return a.replace(Ov,Nv)}function Nv(a,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Zu(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bv(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===qf?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===$d?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function kv(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case zr:case Vr:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gv(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Vr:e="ENVMAP_MODE_REFRACTION";break}return e}function zv(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case jf:e="ENVMAP_BLENDING_MULTIPLY";break;case Ep:e="ENVMAP_BLENDING_MIX";break;case bp:e="ENVMAP_BLENDING_ADD";break}return e}function Vv(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Hv(a,e,t,i){const n=a.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Bv(t),c=kv(t),u=Gv(t),f=zv(t),h=Vv(t),p=t.isWebGL2?"":Pv(t),v=Lv(r),_=n.createProgram();let d,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ya).join(`
`),d.length>0&&(d+=`
`),g=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ya).join(`
`),g.length>0&&(g+=`
`)):(d=[Zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),g=[p,Zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ti?Cv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Rv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),s=El(s),s=ju(s,t),s=Yu(s,t),o=El(o),o=ju(o,t),o=Yu(o,t),s=Ku(s),o=Ku(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=b+d+s,E=b+g+o,w=Xu(n,n.VERTEX_SHADER,M),S=Xu(n,n.FRAGMENT_SHADER,E);n.attachShader(_,w),n.attachShader(_,S),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function T(C){if(a.debug.checkShaderErrors){const A=n.getProgramInfoLog(_).trim(),O=n.getShaderInfoLog(w).trim(),P=n.getShaderInfoLog(S).trim();let k=!0,F=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(k=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,_,w,S);else{const X=qu(n,w,"vertex"),J=qu(n,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Program Info Log: `+A+`
`+X+`
`+J)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(O===""||P==="")&&(F=!1);F&&(C.diagnostics={runnable:k,programLog:A,vertexShader:{log:O,prefix:d},fragmentShader:{log:P,prefix:g}})}n.deleteShader(w),n.deleteShader(S),y=new As(n,_),m=Dv(n,_)}let y;this.getUniforms=function(){return y===void 0&&T(this),y};let m;this.getAttributes=function(){return m===void 0&&T(this),m};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=n.getProgramParameter(_,bv)),x},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=S,this}let Wv=0;class Xv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qv(e),t.set(e,i)),i}}class qv{constructor(e){this.id=Wv++,this.code=e,this.usedTimes=0}}function jv(a,e,t,i,n,r,s){const o=new fh,l=new Xv,c=[],u=n.isWebGL2,f=n.logarithmicDepthBuffer,h=n.vertexTextures;let p=n.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(m){return m===0?"uv":`uv${m}`}function d(m,x,C,A,O){const P=A.fog,k=O.geometry,F=m.isMeshStandardMaterial?A.environment:null,X=(m.isMeshStandardMaterial?t:e).get(m.envMap||F),J=X&&X.mapping===Zs?X.image.height:null,q=v[m.type];m.precision!==null&&(p=n.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));const V=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,G=V!==void 0?V.length:0;let W=0;k.morphAttributes.position!==void 0&&(W=1),k.morphAttributes.normal!==void 0&&(W=2),k.morphAttributes.color!==void 0&&(W=3);let z,H,K,ne;if(q){const et=Xn[q];z=et.vertexShader,H=et.fragmentShader}else z=m.vertexShader,H=m.fragmentShader,l.update(m),K=l.getVertexShaderID(m),ne=l.getFragmentShaderID(m);const $=a.getRenderTarget(),Y=O.isInstancedMesh===!0,R=O.isBatchedMesh===!0,D=!!m.map,N=!!m.matcap,I=!!X,re=!!m.aoMap,Q=!!m.lightMap,de=!!m.bumpMap,me=!!m.normalMap,Ae=!!m.displacementMap,ae=!!m.emissiveMap,pe=!!m.metalnessMap,xe=!!m.roughnessMap,te=m.anisotropy>0,be=m.clearcoat>0,U=m.iridescence>0,L=m.sheen>0,Z=m.transmission>0,ve=te&&!!m.anisotropyMap,se=be&&!!m.clearcoatMap,fe=be&&!!m.clearcoatNormalMap,ye=be&&!!m.clearcoatRoughnessMap,_e=U&&!!m.iridescenceMap,Ee=U&&!!m.iridescenceThicknessMap,Le=L&&!!m.sheenColorMap,Ie=L&&!!m.sheenRoughnessMap,he=!!m.specularMap,we=!!m.specularColorMap,De=!!m.specularIntensityMap,Ne=Z&&!!m.transmissionMap,Be=Z&&!!m.thicknessMap,Te=!!m.gradientMap,Re=!!m.alphaMap,j=m.alphaTest>0,Pe=!!m.alphaHash,ge=!!m.extensions,ie=!!k.attributes.uv1,Se=!!k.attributes.uv2,Fe=!!k.attributes.uv3;let Ue=Ti;return m.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ue=a.toneMapping),{isWebGL2:u,shaderID:q,shaderType:m.type,shaderName:m.name,vertexShader:z,fragmentShader:H,defines:m.defines,customVertexShaderID:K,customFragmentShaderID:ne,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:R,instancing:Y,instancingColor:Y&&O.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:$===null?a.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Kn,map:D,matcap:N,envMap:I,envMapMode:I&&X.mapping,envMapCubeUVHeight:J,aoMap:re,lightMap:Q,bumpMap:de,normalMap:me,displacementMap:h&&Ae,emissiveMap:ae,normalMapObjectSpace:me&&m.normalMapType===kp,normalMapTangentSpace:me&&m.normalMapType===ah,metalnessMap:pe,roughnessMap:xe,anisotropy:te,anisotropyMap:ve,clearcoat:be,clearcoatMap:se,clearcoatNormalMap:fe,clearcoatRoughnessMap:ye,iridescence:U,iridescenceMap:_e,iridescenceThicknessMap:Ee,sheen:L,sheenColorMap:Le,sheenRoughnessMap:Ie,specularMap:he,specularColorMap:we,specularIntensityMap:De,transmission:Z,transmissionMap:Ne,thicknessMap:Be,gradientMap:Te,opaque:m.transparent===!1&&m.blending===Or,alphaMap:Re,alphaTest:j,alphaHash:Pe,combine:m.combine,mapUv:D&&_(m.map.channel),aoMapUv:re&&_(m.aoMap.channel),lightMapUv:Q&&_(m.lightMap.channel),bumpMapUv:de&&_(m.bumpMap.channel),normalMapUv:me&&_(m.normalMap.channel),displacementMapUv:Ae&&_(m.displacementMap.channel),emissiveMapUv:ae&&_(m.emissiveMap.channel),metalnessMapUv:pe&&_(m.metalnessMap.channel),roughnessMapUv:xe&&_(m.roughnessMap.channel),anisotropyMapUv:ve&&_(m.anisotropyMap.channel),clearcoatMapUv:se&&_(m.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&_(m.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&_(m.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&_(m.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&_(m.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(m.sheenRoughnessMap.channel),specularMapUv:he&&_(m.specularMap.channel),specularColorMapUv:we&&_(m.specularColorMap.channel),specularIntensityMapUv:De&&_(m.specularIntensityMap.channel),transmissionMapUv:Ne&&_(m.transmissionMap.channel),thicknessMapUv:Be&&_(m.thicknessMap.channel),alphaMapUv:Re&&_(m.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(me||te),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:ie,vertexUv2s:Se,vertexUv3s:Fe,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(D||Re),fog:!!P,useFog:m.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:W,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:a.shadowMap.enabled&&C.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ue,useLegacyLights:a._useLegacyLights,decodeVideoTexture:D&&m.map.isVideoTexture===!0&&it.getTransfer(m.map.colorSpace)===lt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===kn,flipSided:m.side===tn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionDerivatives:ge&&m.extensions.derivatives===!0,extensionFragDepth:ge&&m.extensions.fragDepth===!0,extensionDrawBuffers:ge&&m.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&m.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()}}function g(m){const x=[];if(m.shaderID?x.push(m.shaderID):(x.push(m.customVertexShaderID),x.push(m.customFragmentShaderID)),m.defines!==void 0)for(const C in m.defines)x.push(C),x.push(m.defines[C]);return m.isRawShaderMaterial===!1&&(b(x,m),M(x,m),x.push(a.outputColorSpace)),x.push(m.customProgramCacheKey),x.join()}function b(m,x){m.push(x.precision),m.push(x.outputColorSpace),m.push(x.envMapMode),m.push(x.envMapCubeUVHeight),m.push(x.mapUv),m.push(x.alphaMapUv),m.push(x.lightMapUv),m.push(x.aoMapUv),m.push(x.bumpMapUv),m.push(x.normalMapUv),m.push(x.displacementMapUv),m.push(x.emissiveMapUv),m.push(x.metalnessMapUv),m.push(x.roughnessMapUv),m.push(x.anisotropyMapUv),m.push(x.clearcoatMapUv),m.push(x.clearcoatNormalMapUv),m.push(x.clearcoatRoughnessMapUv),m.push(x.iridescenceMapUv),m.push(x.iridescenceThicknessMapUv),m.push(x.sheenColorMapUv),m.push(x.sheenRoughnessMapUv),m.push(x.specularMapUv),m.push(x.specularColorMapUv),m.push(x.specularIntensityMapUv),m.push(x.transmissionMapUv),m.push(x.thicknessMapUv),m.push(x.combine),m.push(x.fogExp2),m.push(x.sizeAttenuation),m.push(x.morphTargetsCount),m.push(x.morphAttributeCount),m.push(x.numDirLights),m.push(x.numPointLights),m.push(x.numSpotLights),m.push(x.numSpotLightMaps),m.push(x.numHemiLights),m.push(x.numRectAreaLights),m.push(x.numDirLightShadows),m.push(x.numPointLightShadows),m.push(x.numSpotLightShadows),m.push(x.numSpotLightShadowsWithMaps),m.push(x.numLightProbes),m.push(x.shadowMapType),m.push(x.toneMapping),m.push(x.numClippingPlanes),m.push(x.numClipIntersection),m.push(x.depthPacking)}function M(m,x){o.disableAll(),x.isWebGL2&&o.enable(0),x.supportsVertexTextures&&o.enable(1),x.instancing&&o.enable(2),x.instancingColor&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),m.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.useLegacyLights&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),m.push(o.mask)}function E(m){const x=v[m.type];let C;if(x){const A=Xn[x];C=gh.clone(A.uniforms)}else C=m.uniforms;return C}function w(m,x){let C;for(let A=0,O=c.length;A<O;A++){const P=c[A];if(P.cacheKey===x){C=P,++C.usedTimes;break}}return C===void 0&&(C=new Hv(a,x,m,r),c.push(C)),C}function S(m){if(--m.usedTimes===0){const x=c.indexOf(m);c[x]=c[c.length-1],c.pop(),m.destroy()}}function T(m){l.remove(m)}function y(){l.dispose()}return{getParameters:d,getProgramCacheKey:g,getUniforms:E,acquireProgram:w,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:y}}function Yv(){let a=new WeakMap;function e(r){let s=a.get(r);return s===void 0&&(s={},a.set(r,s)),s}function t(r){a.delete(r)}function i(r,s,o){a.get(r)[s]=o}function n(){a=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function Kv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Ju(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Qu(){const a=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function s(f,h,p,v,_,d){let g=a[e];return g===void 0?(g={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:_,group:d},a[e]=g):(g.id=f.id,g.object=f,g.geometry=h,g.material=p,g.groupOrder=v,g.renderOrder=f.renderOrder,g.z=_,g.group=d),e++,g}function o(f,h,p,v,_,d){const g=s(f,h,p,v,_,d);p.transmission>0?i.push(g):p.transparent===!0?n.push(g):t.push(g)}function l(f,h,p,v,_,d){const g=s(f,h,p,v,_,d);p.transmission>0?i.unshift(g):p.transparent===!0?n.unshift(g):t.unshift(g)}function c(f,h){t.length>1&&t.sort(f||Kv),i.length>1&&i.sort(h||Ju),n.length>1&&n.sort(h||Ju)}function u(){for(let f=e,h=a.length;f<h;f++){const p=a[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:u,sort:c}}function Zv(){let a=new WeakMap;function e(i,n){const r=a.get(i);let s;return r===void 0?(s=new Qu,a.set(i,[s])):n>=r.length?(s=new Qu,r.push(s)):s=r[n],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function Jv(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new oe,color:new Ke};break;case"SpotLight":t={position:new oe,direction:new oe,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new oe,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new oe,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return a[e.id]=t,t}}}function Qv(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let $v=0;function ex(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function tx(a,e){const t=new Jv,i=Qv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new oe);const r=new oe,s=new Ct,o=new Ct;function l(u,f){let h=0,p=0,v=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let _=0,d=0,g=0,b=0,M=0,E=0,w=0,S=0,T=0,y=0,m=0;u.sort(ex);const x=f===!0?Math.PI:1;for(let A=0,O=u.length;A<O;A++){const P=u[A],k=P.color,F=P.intensity,X=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*F*x,p+=k.g*F*x,v+=k.b*F*x;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],F);m++}else if(P.isDirectionalLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*x),P.castShadow){const V=P.shadow,G=i.get(P);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,n.directionalShadow[_]=G,n.directionalShadowMap[_]=J,n.directionalShadowMatrix[_]=P.shadow.matrix,E++}n.directional[_]=q,_++}else if(P.isSpotLight){const q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(k).multiplyScalar(F*x),q.distance=X,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[g]=q;const V=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,V.updateMatrices(P),P.castShadow&&y++),n.spotLightMatrix[g]=V.matrix,P.castShadow){const G=i.get(P);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=J,S++}g++}else if(P.isRectAreaLight){const q=t.get(P);q.color.copy(k).multiplyScalar(F),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[b]=q,b++}else if(P.isPointLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*x),q.distance=P.distance,q.decay=P.decay,P.castShadow){const V=P.shadow,G=i.get(P);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,G.shadowCameraNear=V.camera.near,G.shadowCameraFar=V.camera.far,n.pointShadow[d]=G,n.pointShadowMap[d]=J,n.pointShadowMatrix[d]=P.shadow.matrix,w++}n.point[d]=q,d++}else if(P.isHemisphereLight){const q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(F*x),q.groundColor.copy(P.groundColor).multiplyScalar(F*x),n.hemi[M]=q,M++}}b>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=v;const C=n.hash;(C.directionalLength!==_||C.pointLength!==d||C.spotLength!==g||C.rectAreaLength!==b||C.hemiLength!==M||C.numDirectionalShadows!==E||C.numPointShadows!==w||C.numSpotShadows!==S||C.numSpotMaps!==T||C.numLightProbes!==m)&&(n.directional.length=_,n.spot.length=g,n.rectArea.length=b,n.point.length=d,n.hemi.length=M,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=S+T-y,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=m,C.directionalLength=_,C.pointLength=d,C.spotLength=g,C.rectAreaLength=b,C.hemiLength=M,C.numDirectionalShadows=E,C.numPointShadows=w,C.numSpotShadows=S,C.numSpotMaps=T,C.numLightProbes=m,n.version=$v++)}function c(u,f){let h=0,p=0,v=0,_=0,d=0;const g=f.matrixWorldInverse;for(let b=0,M=u.length;b<M;b++){const E=u[b];if(E.isDirectionalLight){const w=n.directional[h];w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),h++}else if(E.isSpotLight){const w=n.spot[v];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),v++}else if(E.isRectAreaLight){const w=n.rectArea[_];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(g),o.identity(),s.copy(E.matrixWorld),s.premultiply(g),o.extractRotation(s),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const w=n.point[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(g),p++}else if(E.isHemisphereLight){const w=n.hemi[d];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(g),d++}}}return{setup:l,setupView:c,state:n}}function $u(a,e){const t=new tx(a,e),i=[],n=[];function r(){i.length=0,n.length=0}function s(f){i.push(f)}function o(f){n.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function nx(a,e){let t=new WeakMap;function i(r,s=0){const o=t.get(r);let l;return o===void 0?(l=new $u(a,e),t.set(r,[l])):s>=o.length?(l=new $u(a,e),o.push(l)):l=o[s],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class Ah extends ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rh extends ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rx=`uniform sampler2D shadow_pass;
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
}`;function ax(a,e,t){let i=new xh;const n=new Je,r=new Je,s=new Et,o=new Ah({depthPacking:rh}),l=new Rh,c={},u=t.maxTextureSize,f={[Ci]:tn,[tn]:Ci,[kn]:kn},h=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:ix,fragmentShader:rx}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new fi;v.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bn(v,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qf;let g=this.type;this.render=function(w,S,T){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;const y=a.getRenderTarget(),m=a.getActiveCubeFace(),x=a.getActiveMipmapLevel(),C=a.state;C.setBlending(bi),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const A=g!==ii&&this.type===ii,O=g===ii&&this.type!==ii;for(let P=0,k=w.length;P<k;P++){const F=w[P],X=F.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);const J=X.getFrameExtents();if(n.multiply(J),r.copy(X.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/J.x),n.x=r.x*J.x,X.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/J.y),n.y=r.y*J.y,X.mapSize.y=r.y)),X.map===null||A===!0||O===!0){const V=this.type!==ii?{minFilter:Ut,magFilter:Ut}:{};X.map!==null&&X.map.dispose(),X.map=new ar(n.x,n.y,V),X.map.texture.name=F.name+".shadowMap",X.camera.updateProjectionMatrix()}a.setRenderTarget(X.map),a.clear();const q=X.getViewportCount();for(let V=0;V<q;V++){const G=X.getViewport(V);s.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),C.viewport(s),X.updateMatrices(F,V),i=X.getFrustum(),E(S,T,X.camera,F,this.type)}X.isPointLightShadow!==!0&&this.type===ii&&b(X,T),X.needsUpdate=!1}g=this.type,d.needsUpdate=!1,a.setRenderTarget(y,m,x)};function b(w,S){const T=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ar(n.x,n.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,a.setRenderTarget(w.mapPass),a.clear(),a.renderBufferDirect(S,null,T,h,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,a.setRenderTarget(w.map),a.clear(),a.renderBufferDirect(S,null,T,p,_,null)}function M(w,S,T,y){let m=null;const x=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(x!==void 0)m=x;else if(m=T.isPointLight===!0?l:o,a.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const C=m.uuid,A=S.uuid;let O=c[C];O===void 0&&(O={},c[C]=O);let P=O[A];P===void 0&&(P=m.clone(),O[A]=P),m=P}if(m.visible=S.visible,m.wireframe=S.wireframe,y===ii?m.side=S.shadowSide!==null?S.shadowSide:S.side:m.side=S.shadowSide!==null?S.shadowSide:f[S.side],m.alphaMap=S.alphaMap,m.alphaTest=S.alphaTest,m.map=S.map,m.clipShadows=S.clipShadows,m.clippingPlanes=S.clippingPlanes,m.clipIntersection=S.clipIntersection,m.displacementMap=S.displacementMap,m.displacementScale=S.displacementScale,m.displacementBias=S.displacementBias,m.wireframeLinewidth=S.wireframeLinewidth,m.linewidth=S.linewidth,T.isPointLight===!0&&m.isMeshDistanceMaterial===!0){const C=a.properties.get(m);C.light=T}return m}function E(w,S,T,y,m){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&m===ii)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);const A=e.update(w),O=w.material;if(Array.isArray(O)){const P=A.groups;for(let k=0,F=P.length;k<F;k++){const X=P[k],J=O[X.materialIndex];if(J&&J.visible){const q=M(w,J,y,m);w.onBeforeShadow(a,w,S,T,A,q,X),a.renderBufferDirect(T,null,A,q,w,X),w.onAfterShadow(a,w,S,T,A,q,X)}}}else if(O.visible){const P=M(w,O,y,m);w.onBeforeShadow(a,w,S,T,A,P,null),a.renderBufferDirect(T,null,A,P,w,null),w.onAfterShadow(a,w,S,T,A,P,null)}}const C=w.children;for(let A=0,O=C.length;A<O;A++)E(C[A],S,T,y,m)}}function sx(a,e,t){const i=t.isWebGL2;function n(){let j=!1;const Pe=new Et;let ge=null;const ie=new Et(0,0,0,0);return{setMask:function(Se){ge!==Se&&!j&&(a.colorMask(Se,Se,Se,Se),ge=Se)},setLocked:function(Se){j=Se},setClear:function(Se,Fe,Ue,Xe,et){et===!0&&(Se*=Xe,Fe*=Xe,Ue*=Xe),Pe.set(Se,Fe,Ue,Xe),ie.equals(Pe)===!1&&(a.clearColor(Se,Fe,Ue,Xe),ie.copy(Pe))},reset:function(){j=!1,ge=null,ie.set(-1,0,0,0)}}}function r(){let j=!1,Pe=null,ge=null,ie=null;return{setTest:function(Se){Se?R(a.DEPTH_TEST):D(a.DEPTH_TEST)},setMask:function(Se){Pe!==Se&&!j&&(a.depthMask(Se),Pe=Se)},setFunc:function(Se){if(ge!==Se){switch(Se){case gp:a.depthFunc(a.NEVER);break;case _p:a.depthFunc(a.ALWAYS);break;case vp:a.depthFunc(a.LESS);break;case Us:a.depthFunc(a.LEQUAL);break;case xp:a.depthFunc(a.EQUAL);break;case yp:a.depthFunc(a.GEQUAL);break;case Sp:a.depthFunc(a.GREATER);break;case Mp:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}ge=Se}},setLocked:function(Se){j=Se},setClear:function(Se){ie!==Se&&(a.clearDepth(Se),ie=Se)},reset:function(){j=!1,Pe=null,ge=null,ie=null}}}function s(){let j=!1,Pe=null,ge=null,ie=null,Se=null,Fe=null,Ue=null,Xe=null,et=null;return{setTest:function(qe){j||(qe?R(a.STENCIL_TEST):D(a.STENCIL_TEST))},setMask:function(qe){Pe!==qe&&!j&&(a.stencilMask(qe),Pe=qe)},setFunc:function(qe,Qe,dt){(ge!==qe||ie!==Qe||Se!==dt)&&(a.stencilFunc(qe,Qe,dt),ge=qe,ie=Qe,Se=dt)},setOp:function(qe,Qe,dt){(Fe!==qe||Ue!==Qe||Xe!==dt)&&(a.stencilOp(qe,Qe,dt),Fe=qe,Ue=Qe,Xe=dt)},setLocked:function(qe){j=qe},setClear:function(qe){et!==qe&&(a.clearStencil(qe),et=qe)},reset:function(){j=!1,Pe=null,ge=null,ie=null,Se=null,Fe=null,Ue=null,Xe=null,et=null}}}const o=new n,l=new r,c=new s,u=new WeakMap,f=new WeakMap;let h={},p={},v=new WeakMap,_=[],d=null,g=!1,b=null,M=null,E=null,w=null,S=null,T=null,y=null,m=new Ke(0,0,0),x=0,C=!1,A=null,O=null,P=null,k=null,F=null;const X=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,q=0;const V=a.getParameter(a.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),J=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),J=q>=2);let G=null,W={};const z=a.getParameter(a.SCISSOR_BOX),H=a.getParameter(a.VIEWPORT),K=new Et().fromArray(z),ne=new Et().fromArray(H);function $(j,Pe,ge,ie){const Se=new Uint8Array(4),Fe=a.createTexture();a.bindTexture(j,Fe),a.texParameteri(j,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(j,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ue=0;Ue<ge;Ue++)i&&(j===a.TEXTURE_3D||j===a.TEXTURE_2D_ARRAY)?a.texImage3D(Pe,0,a.RGBA,1,1,ie,0,a.RGBA,a.UNSIGNED_BYTE,Se):a.texImage2D(Pe+Ue,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Se);return Fe}const Y={};Y[a.TEXTURE_2D]=$(a.TEXTURE_2D,a.TEXTURE_2D,1),Y[a.TEXTURE_CUBE_MAP]=$(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Y[a.TEXTURE_2D_ARRAY]=$(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Y[a.TEXTURE_3D]=$(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),R(a.DEPTH_TEST),l.setFunc(Us),ae(!1),pe(Ic),R(a.CULL_FACE),me(bi);function R(j){h[j]!==!0&&(a.enable(j),h[j]=!0)}function D(j){h[j]!==!1&&(a.disable(j),h[j]=!1)}function N(j,Pe){return p[j]!==Pe?(a.bindFramebuffer(j,Pe),p[j]=Pe,i&&(j===a.DRAW_FRAMEBUFFER&&(p[a.FRAMEBUFFER]=Pe),j===a.FRAMEBUFFER&&(p[a.DRAW_FRAMEBUFFER]=Pe)),!0):!1}function I(j,Pe){let ge=_,ie=!1;if(j)if(ge=v.get(Pe),ge===void 0&&(ge=[],v.set(Pe,ge)),j.isWebGLMultipleRenderTargets){const Se=j.texture;if(ge.length!==Se.length||ge[0]!==a.COLOR_ATTACHMENT0){for(let Fe=0,Ue=Se.length;Fe<Ue;Fe++)ge[Fe]=a.COLOR_ATTACHMENT0+Fe;ge.length=Se.length,ie=!0}}else ge[0]!==a.COLOR_ATTACHMENT0&&(ge[0]=a.COLOR_ATTACHMENT0,ie=!0);else ge[0]!==a.BACK&&(ge[0]=a.BACK,ie=!0);ie&&(t.isWebGL2?a.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function re(j){return d!==j?(a.useProgram(j),d=j,!0):!1}const Q={[Yi]:a.FUNC_ADD,[tp]:a.FUNC_SUBTRACT,[np]:a.FUNC_REVERSE_SUBTRACT};if(i)Q[Bc]=a.MIN,Q[kc]=a.MAX;else{const j=e.get("EXT_blend_minmax");j!==null&&(Q[Bc]=j.MIN_EXT,Q[kc]=j.MAX_EXT)}const de={[ip]:a.ZERO,[rp]:a.ONE,[ap]:a.SRC_COLOR,[gl]:a.SRC_ALPHA,[fp]:a.SRC_ALPHA_SATURATE,[cp]:a.DST_COLOR,[op]:a.DST_ALPHA,[sp]:a.ONE_MINUS_SRC_COLOR,[_l]:a.ONE_MINUS_SRC_ALPHA,[up]:a.ONE_MINUS_DST_COLOR,[lp]:a.ONE_MINUS_DST_ALPHA,[hp]:a.CONSTANT_COLOR,[dp]:a.ONE_MINUS_CONSTANT_COLOR,[pp]:a.CONSTANT_ALPHA,[mp]:a.ONE_MINUS_CONSTANT_ALPHA};function me(j,Pe,ge,ie,Se,Fe,Ue,Xe,et,qe){if(j===bi){g===!0&&(D(a.BLEND),g=!1);return}if(g===!1&&(R(a.BLEND),g=!0),j!==ep){if(j!==b||qe!==C){if((M!==Yi||S!==Yi)&&(a.blendEquation(a.FUNC_ADD),M=Yi,S=Yi),qe)switch(j){case Or:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Fc:a.blendFunc(a.ONE,a.ONE);break;case Oc:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Nc:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Or:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Fc:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Oc:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Nc:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}E=null,w=null,T=null,y=null,m.set(0,0,0),x=0,b=j,C=qe}return}Se=Se||Pe,Fe=Fe||ge,Ue=Ue||ie,(Pe!==M||Se!==S)&&(a.blendEquationSeparate(Q[Pe],Q[Se]),M=Pe,S=Se),(ge!==E||ie!==w||Fe!==T||Ue!==y)&&(a.blendFuncSeparate(de[ge],de[ie],de[Fe],de[Ue]),E=ge,w=ie,T=Fe,y=Ue),(Xe.equals(m)===!1||et!==x)&&(a.blendColor(Xe.r,Xe.g,Xe.b,et),m.copy(Xe),x=et),b=j,C=!1}function Ae(j,Pe){j.side===kn?D(a.CULL_FACE):R(a.CULL_FACE);let ge=j.side===tn;Pe&&(ge=!ge),ae(ge),j.blending===Or&&j.transparent===!1?me(bi):me(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),l.setFunc(j.depthFunc),l.setTest(j.depthTest),l.setMask(j.depthWrite),o.setMask(j.colorWrite);const ie=j.stencilWrite;c.setTest(ie),ie&&(c.setMask(j.stencilWriteMask),c.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),c.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),te(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?R(a.SAMPLE_ALPHA_TO_COVERAGE):D(a.SAMPLE_ALPHA_TO_COVERAGE)}function ae(j){A!==j&&(j?a.frontFace(a.CW):a.frontFace(a.CCW),A=j)}function pe(j){j!==Jd?(R(a.CULL_FACE),j!==O&&(j===Ic?a.cullFace(a.BACK):j===Qd?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):D(a.CULL_FACE),O=j}function xe(j){j!==P&&(J&&a.lineWidth(j),P=j)}function te(j,Pe,ge){j?(R(a.POLYGON_OFFSET_FILL),(k!==Pe||F!==ge)&&(a.polygonOffset(Pe,ge),k=Pe,F=ge)):D(a.POLYGON_OFFSET_FILL)}function be(j){j?R(a.SCISSOR_TEST):D(a.SCISSOR_TEST)}function U(j){j===void 0&&(j=a.TEXTURE0+X-1),G!==j&&(a.activeTexture(j),G=j)}function L(j,Pe,ge){ge===void 0&&(G===null?ge=a.TEXTURE0+X-1:ge=G);let ie=W[ge];ie===void 0&&(ie={type:void 0,texture:void 0},W[ge]=ie),(ie.type!==j||ie.texture!==Pe)&&(G!==ge&&(a.activeTexture(ge),G=ge),a.bindTexture(j,Pe||Y[j]),ie.type=j,ie.texture=Pe)}function Z(){const j=W[G];j!==void 0&&j.type!==void 0&&(a.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function ve(){try{a.compressedTexImage2D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function se(){try{a.compressedTexImage3D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function fe(){try{a.texSubImage2D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ye(){try{a.texSubImage3D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _e(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ee(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Le(){try{a.texStorage2D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ie(){try{a.texStorage3D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function he(){try{a.texImage2D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function we(){try{a.texImage3D.apply(a,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function De(j){K.equals(j)===!1&&(a.scissor(j.x,j.y,j.z,j.w),K.copy(j))}function Ne(j){ne.equals(j)===!1&&(a.viewport(j.x,j.y,j.z,j.w),ne.copy(j))}function Be(j,Pe){let ge=f.get(Pe);ge===void 0&&(ge=new WeakMap,f.set(Pe,ge));let ie=ge.get(j);ie===void 0&&(ie=a.getUniformBlockIndex(Pe,j.name),ge.set(j,ie))}function Te(j,Pe){const ie=f.get(Pe).get(j);u.get(Pe)!==ie&&(a.uniformBlockBinding(Pe,ie,j.__bindingPointIndex),u.set(Pe,ie))}function Re(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),i===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},G=null,W={},p={},v=new WeakMap,_=[],d=null,g=!1,b=null,M=null,E=null,w=null,S=null,T=null,y=null,m=new Ke(0,0,0),x=0,C=!1,A=null,O=null,P=null,k=null,F=null,K.set(0,0,a.canvas.width,a.canvas.height),ne.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:R,disable:D,bindFramebuffer:N,drawBuffers:I,useProgram:re,setBlending:me,setMaterial:Ae,setFlipSided:ae,setCullFace:pe,setLineWidth:xe,setPolygonOffset:te,setScissorTest:be,activeTexture:U,bindTexture:L,unbindTexture:Z,compressedTexImage2D:ve,compressedTexImage3D:se,texImage2D:he,texImage3D:we,updateUBOMapping:Be,uniformBlockBinding:Te,texStorage2D:Le,texStorage3D:Ie,texSubImage2D:fe,texSubImage3D:ye,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ee,scissor:De,viewport:Ne,reset:Re}}function ox(a,e,t,i,n,r,s){const o=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,u=n.maxTextureSize,f=n.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let _;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,L){return g?new OffscreenCanvas(U,L):Ua("canvas")}function M(U,L,Z,ve){let se=1;if((U.width>ve||U.height>ve)&&(se=ve/Math.max(U.width,U.height)),se<1||L===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){const fe=L?ks:Math.floor,ye=fe(se*U.width),_e=fe(se*U.height);_===void 0&&(_=b(ye,_e));const Ee=Z?b(ye,_e):_;return Ee.width=ye,Ee.height=_e,Ee.getContext("2d").drawImage(U,0,0,ye,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+ye+"x"+_e+")."),Ee}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function E(U){return Ml(U.width)&&Ml(U.height)}function w(U){return o?!1:U.wrapS!==dn||U.wrapT!==dn||U.minFilter!==Ut&&U.minFilter!==Mt}function S(U,L){return U.generateMipmaps&&L&&U.minFilter!==Ut&&U.minFilter!==Mt}function T(U){a.generateMipmap(U)}function y(U,L,Z,ve,se=!1){if(o===!1)return L;if(U!==null){if(a[U]!==void 0)return a[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let fe=L;if(L===a.RED&&(Z===a.FLOAT&&(fe=a.R32F),Z===a.HALF_FLOAT&&(fe=a.R16F),Z===a.UNSIGNED_BYTE&&(fe=a.R8)),L===a.RED_INTEGER&&(Z===a.UNSIGNED_BYTE&&(fe=a.R8UI),Z===a.UNSIGNED_SHORT&&(fe=a.R16UI),Z===a.UNSIGNED_INT&&(fe=a.R32UI),Z===a.BYTE&&(fe=a.R8I),Z===a.SHORT&&(fe=a.R16I),Z===a.INT&&(fe=a.R32I)),L===a.RG&&(Z===a.FLOAT&&(fe=a.RG32F),Z===a.HALF_FLOAT&&(fe=a.RG16F),Z===a.UNSIGNED_BYTE&&(fe=a.RG8)),L===a.RGBA){const ye=se?Fs:it.getTransfer(ve);Z===a.FLOAT&&(fe=a.RGBA32F),Z===a.HALF_FLOAT&&(fe=a.RGBA16F),Z===a.UNSIGNED_BYTE&&(fe=ye===lt?a.SRGB8_ALPHA8:a.RGBA8),Z===a.UNSIGNED_SHORT_4_4_4_4&&(fe=a.RGBA4),Z===a.UNSIGNED_SHORT_5_5_5_1&&(fe=a.RGB5_A1)}return(fe===a.R16F||fe===a.R32F||fe===a.RG16F||fe===a.RG32F||fe===a.RGBA16F||fe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function m(U,L,Z){return S(U,Z)===!0||U.isFramebufferTexture&&U.minFilter!==Ut&&U.minFilter!==Mt?Math.log2(Math.max(L.width,L.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?L.mipmaps.length:1}function x(U){return U===Ut||U===Gc||U===xo?a.NEAREST:a.LINEAR}function C(U){const L=U.target;L.removeEventListener("dispose",C),O(L),L.isVideoTexture&&v.delete(L)}function A(U){const L=U.target;L.removeEventListener("dispose",A),k(L)}function O(U){const L=i.get(U);if(L.__webglInit===void 0)return;const Z=U.source,ve=d.get(Z);if(ve){const se=ve[L.__cacheKey];se.usedTimes--,se.usedTimes===0&&P(U),Object.keys(ve).length===0&&d.delete(Z)}i.remove(U)}function P(U){const L=i.get(U);a.deleteTexture(L.__webglTexture);const Z=U.source,ve=d.get(Z);delete ve[L.__cacheKey],s.memory.textures--}function k(U){const L=U.texture,Z=i.get(U),ve=i.get(L);if(ve.__webglTexture!==void 0&&(a.deleteTexture(ve.__webglTexture),s.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(Z.__webglFramebuffer[se]))for(let fe=0;fe<Z.__webglFramebuffer[se].length;fe++)a.deleteFramebuffer(Z.__webglFramebuffer[se][fe]);else a.deleteFramebuffer(Z.__webglFramebuffer[se]);Z.__webglDepthbuffer&&a.deleteRenderbuffer(Z.__webglDepthbuffer[se])}else{if(Array.isArray(Z.__webglFramebuffer))for(let se=0;se<Z.__webglFramebuffer.length;se++)a.deleteFramebuffer(Z.__webglFramebuffer[se]);else a.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&a.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&a.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let se=0;se<Z.__webglColorRenderbuffer.length;se++)Z.__webglColorRenderbuffer[se]&&a.deleteRenderbuffer(Z.__webglColorRenderbuffer[se]);Z.__webglDepthRenderbuffer&&a.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let se=0,fe=L.length;se<fe;se++){const ye=i.get(L[se]);ye.__webglTexture&&(a.deleteTexture(ye.__webglTexture),s.memory.textures--),i.remove(L[se])}i.remove(L),i.remove(U)}let F=0;function X(){F=0}function J(){const U=F;return U>=l&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l),F+=1,U}function q(U){const L=[];return L.push(U.wrapS),L.push(U.wrapT),L.push(U.wrapR||0),L.push(U.magFilter),L.push(U.minFilter),L.push(U.anisotropy),L.push(U.internalFormat),L.push(U.format),L.push(U.type),L.push(U.generateMipmaps),L.push(U.premultiplyAlpha),L.push(U.flipY),L.push(U.unpackAlignment),L.push(U.colorSpace),L.join()}function V(U,L){const Z=i.get(U);if(U.isVideoTexture&&te(U),U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){const ve=U.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{R(Z,U,L);return}}t.bindTexture(a.TEXTURE_2D,Z.__webglTexture,a.TEXTURE0+L)}function G(U,L){const Z=i.get(U);if(U.version>0&&Z.__version!==U.version){R(Z,U,L);return}t.bindTexture(a.TEXTURE_2D_ARRAY,Z.__webglTexture,a.TEXTURE0+L)}function W(U,L){const Z=i.get(U);if(U.version>0&&Z.__version!==U.version){R(Z,U,L);return}t.bindTexture(a.TEXTURE_3D,Z.__webglTexture,a.TEXTURE0+L)}function z(U,L){const Z=i.get(U);if(U.version>0&&Z.__version!==U.version){D(Z,U,L);return}t.bindTexture(a.TEXTURE_CUBE_MAP,Z.__webglTexture,a.TEXTURE0+L)}const H={[xl]:a.REPEAT,[dn]:a.CLAMP_TO_EDGE,[yl]:a.MIRRORED_REPEAT},K={[Ut]:a.NEAREST,[Gc]:a.NEAREST_MIPMAP_NEAREST,[xo]:a.NEAREST_MIPMAP_LINEAR,[Mt]:a.LINEAR,[Cp]:a.LINEAR_MIPMAP_NEAREST,[Hr]:a.LINEAR_MIPMAP_LINEAR},ne={[Gp]:a.NEVER,[qp]:a.ALWAYS,[zp]:a.LESS,[sh]:a.LEQUAL,[Vp]:a.EQUAL,[Xp]:a.GEQUAL,[Hp]:a.GREATER,[Wp]:a.NOTEQUAL};function $(U,L,Z){if(Z?(a.texParameteri(U,a.TEXTURE_WRAP_S,H[L.wrapS]),a.texParameteri(U,a.TEXTURE_WRAP_T,H[L.wrapT]),(U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY)&&a.texParameteri(U,a.TEXTURE_WRAP_R,H[L.wrapR]),a.texParameteri(U,a.TEXTURE_MAG_FILTER,K[L.magFilter]),a.texParameteri(U,a.TEXTURE_MIN_FILTER,K[L.minFilter])):(a.texParameteri(U,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(U,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),(U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY)&&a.texParameteri(U,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),(L.wrapS!==dn||L.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(U,a.TEXTURE_MAG_FILTER,x(L.magFilter)),a.texParameteri(U,a.TEXTURE_MIN_FILTER,x(L.minFilter)),L.minFilter!==Ut&&L.minFilter!==Mt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),L.compareFunction&&(a.texParameteri(U,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(U,a.TEXTURE_COMPARE_FUNC,ne[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ve=e.get("EXT_texture_filter_anisotropic");if(L.magFilter===Ut||L.minFilter!==xo&&L.minFilter!==Hr||L.type===zn&&e.has("OES_texture_float_linear")===!1||o===!1&&L.type===oi&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||i.get(L).__currentAnisotropy)&&(a.texParameterf(U,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,n.getMaxAnisotropy())),i.get(L).__currentAnisotropy=L.anisotropy)}}function Y(U,L){let Z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,L.addEventListener("dispose",C));const ve=L.source;let se=d.get(ve);se===void 0&&(se={},d.set(ve,se));const fe=q(L);if(fe!==U.__cacheKey){se[fe]===void 0&&(se[fe]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,Z=!0),se[fe].usedTimes++;const ye=se[U.__cacheKey];ye!==void 0&&(se[U.__cacheKey].usedTimes--,ye.usedTimes===0&&P(L)),U.__cacheKey=fe,U.__webglTexture=se[fe].texture}return Z}function R(U,L,Z){let ve=a.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(ve=a.TEXTURE_2D_ARRAY),L.isData3DTexture&&(ve=a.TEXTURE_3D);const se=Y(U,L),fe=L.source;t.bindTexture(ve,U.__webglTexture,a.TEXTURE0+Z);const ye=i.get(fe);if(fe.version!==ye.__version||se===!0){t.activeTexture(a.TEXTURE0+Z);const _e=it.getPrimaries(it.workingColorSpace),Ee=L.colorSpace===En?null:it.getPrimaries(L.colorSpace),Le=L.colorSpace===En||_e===Ee?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,L.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,L.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ie=w(L)&&E(L.image)===!1;let he=M(L.image,Ie,!1,u);he=be(L,he);const we=E(he)||o,De=r.convert(L.format,L.colorSpace);let Ne=r.convert(L.type),Be=y(L.internalFormat,De,Ne,L.colorSpace,L.isVideoTexture);$(ve,L,we);let Te;const Re=L.mipmaps,j=o&&L.isVideoTexture!==!0&&Be!==nh,Pe=ye.__version===void 0||se===!0,ge=m(L,he,we);if(L.isDepthTexture)Be=a.DEPTH_COMPONENT,o?L.type===zn?Be=a.DEPTH_COMPONENT32F:L.type===yi?Be=a.DEPTH_COMPONENT24:L.type===Ji?Be=a.DEPTH24_STENCIL8:Be=a.DEPTH_COMPONENT16:L.type===zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===Qi&&Be===a.DEPTH_COMPONENT&&L.type!==jl&&L.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=yi,Ne=r.convert(L.type)),L.format===Wr&&Be===a.DEPTH_COMPONENT&&(Be=a.DEPTH_STENCIL,L.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=Ji,Ne=r.convert(L.type))),Pe&&(j?t.texStorage2D(a.TEXTURE_2D,1,Be,he.width,he.height):t.texImage2D(a.TEXTURE_2D,0,Be,he.width,he.height,0,De,Ne,null));else if(L.isDataTexture)if(Re.length>0&&we){j&&Pe&&t.texStorage2D(a.TEXTURE_2D,ge,Be,Re[0].width,Re[0].height);for(let ie=0,Se=Re.length;ie<Se;ie++)Te=Re[ie],j?t.texSubImage2D(a.TEXTURE_2D,ie,0,0,Te.width,Te.height,De,Ne,Te.data):t.texImage2D(a.TEXTURE_2D,ie,Be,Te.width,Te.height,0,De,Ne,Te.data);L.generateMipmaps=!1}else j?(Pe&&t.texStorage2D(a.TEXTURE_2D,ge,Be,he.width,he.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,he.width,he.height,De,Ne,he.data)):t.texImage2D(a.TEXTURE_2D,0,Be,he.width,he.height,0,De,Ne,he.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){j&&Pe&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ge,Be,Re[0].width,Re[0].height,he.depth);for(let ie=0,Se=Re.length;ie<Se;ie++)Te=Re[ie],L.format!==Gn?De!==null?j?t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ie,0,0,0,Te.width,Te.height,he.depth,De,Te.data,0,0):t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ie,Be,Te.width,Te.height,he.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?t.texSubImage3D(a.TEXTURE_2D_ARRAY,ie,0,0,0,Te.width,Te.height,he.depth,De,Ne,Te.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ie,Be,Te.width,Te.height,he.depth,0,De,Ne,Te.data)}else{j&&Pe&&t.texStorage2D(a.TEXTURE_2D,ge,Be,Re[0].width,Re[0].height);for(let ie=0,Se=Re.length;ie<Se;ie++)Te=Re[ie],L.format!==Gn?De!==null?j?t.compressedTexSubImage2D(a.TEXTURE_2D,ie,0,0,Te.width,Te.height,De,Te.data):t.compressedTexImage2D(a.TEXTURE_2D,ie,Be,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?t.texSubImage2D(a.TEXTURE_2D,ie,0,0,Te.width,Te.height,De,Ne,Te.data):t.texImage2D(a.TEXTURE_2D,ie,Be,Te.width,Te.height,0,De,Ne,Te.data)}else if(L.isDataArrayTexture)j?(Pe&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ge,Be,he.width,he.height,he.depth),t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,De,Ne,he.data)):t.texImage3D(a.TEXTURE_2D_ARRAY,0,Be,he.width,he.height,he.depth,0,De,Ne,he.data);else if(L.isData3DTexture)j?(Pe&&t.texStorage3D(a.TEXTURE_3D,ge,Be,he.width,he.height,he.depth),t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,De,Ne,he.data)):t.texImage3D(a.TEXTURE_3D,0,Be,he.width,he.height,he.depth,0,De,Ne,he.data);else if(L.isFramebufferTexture){if(Pe)if(j)t.texStorage2D(a.TEXTURE_2D,ge,Be,he.width,he.height);else{let ie=he.width,Se=he.height;for(let Fe=0;Fe<ge;Fe++)t.texImage2D(a.TEXTURE_2D,Fe,Be,ie,Se,0,De,Ne,null),ie>>=1,Se>>=1}}else if(Re.length>0&&we){j&&Pe&&t.texStorage2D(a.TEXTURE_2D,ge,Be,Re[0].width,Re[0].height);for(let ie=0,Se=Re.length;ie<Se;ie++)Te=Re[ie],j?t.texSubImage2D(a.TEXTURE_2D,ie,0,0,De,Ne,Te):t.texImage2D(a.TEXTURE_2D,ie,Be,De,Ne,Te);L.generateMipmaps=!1}else j?(Pe&&t.texStorage2D(a.TEXTURE_2D,ge,Be,he.width,he.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,De,Ne,he)):t.texImage2D(a.TEXTURE_2D,0,Be,De,Ne,he);S(L,we)&&T(ve),ye.__version=fe.version,L.onUpdate&&L.onUpdate(L)}U.__version=L.version}function D(U,L,Z){if(L.image.length!==6)return;const ve=Y(U,L),se=L.source;t.bindTexture(a.TEXTURE_CUBE_MAP,U.__webglTexture,a.TEXTURE0+Z);const fe=i.get(se);if(se.version!==fe.__version||ve===!0){t.activeTexture(a.TEXTURE0+Z);const ye=it.getPrimaries(it.workingColorSpace),_e=L.colorSpace===En?null:it.getPrimaries(L.colorSpace),Ee=L.colorSpace===En||ye===_e?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,L.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,L.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Le=L.isCompressedTexture||L.image[0].isCompressedTexture,Ie=L.image[0]&&L.image[0].isDataTexture,he=[];for(let ie=0;ie<6;ie++)!Le&&!Ie?he[ie]=M(L.image[ie],!1,!0,c):he[ie]=Ie?L.image[ie].image:L.image[ie],he[ie]=be(L,he[ie]);const we=he[0],De=E(we)||o,Ne=r.convert(L.format,L.colorSpace),Be=r.convert(L.type),Te=y(L.internalFormat,Ne,Be,L.colorSpace),Re=o&&L.isVideoTexture!==!0,j=fe.__version===void 0||ve===!0;let Pe=m(L,we,De);$(a.TEXTURE_CUBE_MAP,L,De);let ge;if(Le){Re&&j&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Pe,Te,we.width,we.height);for(let ie=0;ie<6;ie++){ge=he[ie].mipmaps;for(let Se=0;Se<ge.length;Se++){const Fe=ge[Se];L.format!==Gn?Ne!==null?Re?t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,0,0,Fe.width,Fe.height,Ne,Fe.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,Te,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,0,0,Fe.width,Fe.height,Ne,Be,Fe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,Te,Fe.width,Fe.height,0,Ne,Be,Fe.data)}}}else{ge=L.mipmaps,Re&&j&&(ge.length>0&&Pe++,t.texStorage2D(a.TEXTURE_CUBE_MAP,Pe,Te,he[0].width,he[0].height));for(let ie=0;ie<6;ie++)if(Ie){Re?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,he[ie].width,he[ie].height,Ne,Be,he[ie].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Te,he[ie].width,he[ie].height,0,Ne,Be,he[ie].data);for(let Se=0;Se<ge.length;Se++){const Ue=ge[Se].image[ie].image;Re?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,0,0,Ue.width,Ue.height,Ne,Be,Ue.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,Te,Ue.width,Ue.height,0,Ne,Be,Ue.data)}}else{Re?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ne,Be,he[ie]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Te,Ne,Be,he[ie]);for(let Se=0;Se<ge.length;Se++){const Fe=ge[Se];Re?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,0,0,Ne,Be,Fe.image[ie]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,Te,Ne,Be,Fe.image[ie])}}}S(L,De)&&T(a.TEXTURE_CUBE_MAP),fe.__version=se.version,L.onUpdate&&L.onUpdate(L)}U.__version=L.version}function N(U,L,Z,ve,se,fe){const ye=r.convert(Z.format,Z.colorSpace),_e=r.convert(Z.type),Ee=y(Z.internalFormat,ye,_e,Z.colorSpace);if(!i.get(L).__hasExternalTextures){const Ie=Math.max(1,L.width>>fe),he=Math.max(1,L.height>>fe);se===a.TEXTURE_3D||se===a.TEXTURE_2D_ARRAY?t.texImage3D(se,fe,Ee,Ie,he,L.depth,0,ye,_e,null):t.texImage2D(se,fe,Ee,Ie,he,0,ye,_e,null)}t.bindFramebuffer(a.FRAMEBUFFER,U),xe(L)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ve,se,i.get(Z).__webglTexture,0,pe(L)):(se===a.TEXTURE_2D||se>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ve,se,i.get(Z).__webglTexture,fe),t.bindFramebuffer(a.FRAMEBUFFER,null)}function I(U,L,Z){if(a.bindRenderbuffer(a.RENDERBUFFER,U),L.depthBuffer&&!L.stencilBuffer){let ve=o===!0?a.DEPTH_COMPONENT24:a.DEPTH_COMPONENT16;if(Z||xe(L)){const se=L.depthTexture;se&&se.isDepthTexture&&(se.type===zn?ve=a.DEPTH_COMPONENT32F:se.type===yi&&(ve=a.DEPTH_COMPONENT24));const fe=pe(L);xe(L)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,fe,ve,L.width,L.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,fe,ve,L.width,L.height)}else a.renderbufferStorage(a.RENDERBUFFER,ve,L.width,L.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,U)}else if(L.depthBuffer&&L.stencilBuffer){const ve=pe(L);Z&&xe(L)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,ve,a.DEPTH24_STENCIL8,L.width,L.height):xe(L)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ve,a.DEPTH24_STENCIL8,L.width,L.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,L.width,L.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,U)}else{const ve=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let se=0;se<ve.length;se++){const fe=ve[se],ye=r.convert(fe.format,fe.colorSpace),_e=r.convert(fe.type),Ee=y(fe.internalFormat,ye,_e,fe.colorSpace),Le=pe(L);Z&&xe(L)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Le,Ee,L.width,L.height):xe(L)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Le,Ee,L.width,L.height):a.renderbufferStorage(a.RENDERBUFFER,Ee,L.width,L.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function re(U,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,U),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),V(L.depthTexture,0);const ve=i.get(L.depthTexture).__webglTexture,se=pe(L);if(L.depthTexture.format===Qi)xe(L)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ve,0,se):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ve,0);else if(L.depthTexture.format===Wr)xe(L)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ve,0,se):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Q(U){const L=i.get(U),Z=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!L.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");re(L.__webglFramebuffer,U)}else if(Z){L.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(a.FRAMEBUFFER,L.__webglFramebuffer[ve]),L.__webglDepthbuffer[ve]=a.createRenderbuffer(),I(L.__webglDepthbuffer[ve],U,!1)}else t.bindFramebuffer(a.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=a.createRenderbuffer(),I(L.__webglDepthbuffer,U,!1);t.bindFramebuffer(a.FRAMEBUFFER,null)}function de(U,L,Z){const ve=i.get(U);L!==void 0&&N(ve.__webglFramebuffer,U,U.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),Z!==void 0&&Q(U)}function me(U){const L=U.texture,Z=i.get(U),ve=i.get(L);U.addEventListener("dispose",A),U.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=a.createTexture()),ve.__version=L.version,s.memory.textures++);const se=U.isWebGLCubeRenderTarget===!0,fe=U.isWebGLMultipleRenderTargets===!0,ye=E(U)||o;if(se){Z.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(o&&L.mipmaps&&L.mipmaps.length>0){Z.__webglFramebuffer[_e]=[];for(let Ee=0;Ee<L.mipmaps.length;Ee++)Z.__webglFramebuffer[_e][Ee]=a.createFramebuffer()}else Z.__webglFramebuffer[_e]=a.createFramebuffer()}else{if(o&&L.mipmaps&&L.mipmaps.length>0){Z.__webglFramebuffer=[];for(let _e=0;_e<L.mipmaps.length;_e++)Z.__webglFramebuffer[_e]=a.createFramebuffer()}else Z.__webglFramebuffer=a.createFramebuffer();if(fe)if(n.drawBuffers){const _e=U.texture;for(let Ee=0,Le=_e.length;Ee<Le;Ee++){const Ie=i.get(_e[Ee]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=a.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&U.samples>0&&xe(U)===!1){const _e=fe?L:[L];Z.__webglMultisampledFramebuffer=a.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ee=0;Ee<_e.length;Ee++){const Le=_e[Ee];Z.__webglColorRenderbuffer[Ee]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,Z.__webglColorRenderbuffer[Ee]);const Ie=r.convert(Le.format,Le.colorSpace),he=r.convert(Le.type),we=y(Le.internalFormat,Ie,he,Le.colorSpace,U.isXRRenderTarget===!0),De=pe(U);a.renderbufferStorageMultisample(a.RENDERBUFFER,De,we,U.width,U.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ee,a.RENDERBUFFER,Z.__webglColorRenderbuffer[Ee])}a.bindRenderbuffer(a.RENDERBUFFER,null),U.depthBuffer&&(Z.__webglDepthRenderbuffer=a.createRenderbuffer(),I(Z.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(se){t.bindTexture(a.TEXTURE_CUBE_MAP,ve.__webglTexture),$(a.TEXTURE_CUBE_MAP,L,ye);for(let _e=0;_e<6;_e++)if(o&&L.mipmaps&&L.mipmaps.length>0)for(let Ee=0;Ee<L.mipmaps.length;Ee++)N(Z.__webglFramebuffer[_e][Ee],U,L,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ee);else N(Z.__webglFramebuffer[_e],U,L,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);S(L,ye)&&T(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){const _e=U.texture;for(let Ee=0,Le=_e.length;Ee<Le;Ee++){const Ie=_e[Ee],he=i.get(Ie);t.bindTexture(a.TEXTURE_2D,he.__webglTexture),$(a.TEXTURE_2D,Ie,ye),N(Z.__webglFramebuffer,U,Ie,a.COLOR_ATTACHMENT0+Ee,a.TEXTURE_2D,0),S(Ie,ye)&&T(a.TEXTURE_2D)}t.unbindTexture()}else{let _e=a.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(o?_e=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,ve.__webglTexture),$(_e,L,ye),o&&L.mipmaps&&L.mipmaps.length>0)for(let Ee=0;Ee<L.mipmaps.length;Ee++)N(Z.__webglFramebuffer[Ee],U,L,a.COLOR_ATTACHMENT0,_e,Ee);else N(Z.__webglFramebuffer,U,L,a.COLOR_ATTACHMENT0,_e,0);S(L,ye)&&T(_e),t.unbindTexture()}U.depthBuffer&&Q(U)}function Ae(U){const L=E(U)||o,Z=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let ve=0,se=Z.length;ve<se;ve++){const fe=Z[ve];if(S(fe,L)){const ye=U.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,_e=i.get(fe).__webglTexture;t.bindTexture(ye,_e),T(ye),t.unbindTexture()}}}function ae(U){if(o&&U.samples>0&&xe(U)===!1){const L=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],Z=U.width,ve=U.height;let se=a.COLOR_BUFFER_BIT;const fe=[],ye=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,_e=i.get(U),Ee=U.isWebGLMultipleRenderTargets===!0;if(Ee)for(let Le=0;Le<L.length;Le++)t.bindFramebuffer(a.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,_e.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Le=0;Le<L.length;Le++){fe.push(a.COLOR_ATTACHMENT0+Le),U.depthBuffer&&fe.push(ye);const Ie=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(Ie===!1&&(U.depthBuffer&&(se|=a.DEPTH_BUFFER_BIT),U.stencilBuffer&&(se|=a.STENCIL_BUFFER_BIT)),Ee&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,_e.__webglColorRenderbuffer[Le]),Ie===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[ye]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[ye])),Ee){const he=i.get(L[Le]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,he,0)}a.blitFramebuffer(0,0,Z,ve,0,0,Z,ve,se,a.NEAREST),p&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ee)for(let Le=0;Le<L.length;Le++){t.bindFramebuffer(a.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.RENDERBUFFER,_e.__webglColorRenderbuffer[Le]);const Ie=i.get(L[Le]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,_e.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.TEXTURE_2D,Ie,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function pe(U){return Math.min(f,U.samples)}function xe(U){const L=i.get(U);return o&&U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function te(U){const L=s.render.frame;v.get(U)!==L&&(v.set(U,L),U.update())}function be(U,L){const Z=U.colorSpace,ve=U.format,se=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===Sl||Z!==Kn&&Z!==En&&(it.getTransfer(Z)===lt?o===!1?e.has("EXT_sRGB")===!0&&ve===Gn?(U.format=Sl,U.minFilter=Mt,U.generateMipmaps=!1):L=lh.sRGBToLinear(L):(ve!==Gn||se!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),L}this.allocateTextureUnit=J,this.resetTextureUnits=X,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=W,this.setTextureCube=z,this.rebindTextures=de,this.setupRenderTarget=me,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=N,this.useMultisampledRTT=xe}function lx(a,e,t){const i=t.isWebGL2;function n(r,s=En){let o;const l=it.getTransfer(s);if(r===wi)return a.UNSIGNED_BYTE;if(r===Jf)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Qf)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Pp)return a.BYTE;if(r===Lp)return a.SHORT;if(r===jl)return a.UNSIGNED_SHORT;if(r===Zf)return a.INT;if(r===yi)return a.UNSIGNED_INT;if(r===zn)return a.FLOAT;if(r===oi)return i?a.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Dp)return a.ALPHA;if(r===Gn)return a.RGBA;if(r===Up)return a.LUMINANCE;if(r===Ip)return a.LUMINANCE_ALPHA;if(r===Qi)return a.DEPTH_COMPONENT;if(r===Wr)return a.DEPTH_STENCIL;if(r===Sl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Fp)return a.RED;if(r===$f)return a.RED_INTEGER;if(r===Op)return a.RG;if(r===eh)return a.RG_INTEGER;if(r===th)return a.RGBA_INTEGER;if(r===yo||r===So||r===Mo||r===Eo)if(l===lt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===yo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===So)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Eo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===yo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===So)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Eo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zc||r===Vc||r===Hc||r===Wc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===zc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===nh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Xc||r===qc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Xc)return l===lt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===qc)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===jc||r===Yc||r===Kc||r===Zc||r===Jc||r===Qc||r===$c||r===eu||r===tu||r===nu||r===iu||r===ru||r===au||r===su)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===jc)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yc)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kc)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zc)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jc)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qc)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$c)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===eu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===nu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===iu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ru)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===au)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===su)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bo||r===ou||r===lu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===bo)return l===lt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ou)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===lu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Np||r===cu||r===uu||r===fu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===bo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===cu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===uu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ji?i?a.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:n}}class cx extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ss extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ux={type:"move"};class jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const d=t.getJointPose(_,i),g=this._getHandJoint(c,_);d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=d.radius),g.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ux)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ss;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class fx extends Qr{constructor(e,t){super();const i=this;let n=null,r=1,s=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const _=t.getContextAttributes();let d=null,g=null;const b=[],M=[],E=new Je;let w=null;const S=new Mn;S.layers.enable(1),S.viewport=new Et;const T=new Mn;T.layers.enable(2),T.viewport=new Et;const y=[S,T],m=new cx;m.layers.enable(1),m.layers.enable(2);let x=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let H=b[z];return H===void 0&&(H=new jo,b[z]=H),H.getTargetRaySpace()},this.getControllerGrip=function(z){let H=b[z];return H===void 0&&(H=new jo,b[z]=H),H.getGripSpace()},this.getHand=function(z){let H=b[z];return H===void 0&&(H=new jo,b[z]=H),H.getHandSpace()};function A(z){const H=M.indexOf(z.inputSource);if(H===-1)return;const K=b[H];K!==void 0&&(K.update(z.inputSource,z.frame,c||s),K.dispatchEvent({type:z.type,data:z.inputSource}))}function O(){n.removeEventListener("select",A),n.removeEventListener("selectstart",A),n.removeEventListener("selectend",A),n.removeEventListener("squeeze",A),n.removeEventListener("squeezestart",A),n.removeEventListener("squeezeend",A),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",P);for(let z=0;z<b.length;z++){const H=M[z];H!==null&&(M[z]=null,b[z].disconnect(H))}x=null,C=null,e.setRenderTarget(d),p=null,h=null,f=null,n=null,g=null,W.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return n},this.setSession=async function(z){if(n=z,n!==null){if(d=e.getRenderTarget(),n.addEventListener("select",A),n.addEventListener("selectstart",A),n.addEventListener("selectend",A),n.addEventListener("squeeze",A),n.addEventListener("squeezestart",A),n.addEventListener("squeezeend",A),n.addEventListener("end",O),n.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:n.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,t,H),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new ar(p.framebufferWidth,p.framebufferHeight,{format:Gn,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let H=null,K=null,ne=null;_.depth&&(ne=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=_.stencil?Wr:Qi,K=_.stencil?Ji:yi);const $={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};f=new XRWebGLBinding(n,t),h=f.createProjectionLayer($),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new ar(h.textureWidth,h.textureHeight,{format:Gn,type:wi,depthTexture:new Sh(h.textureWidth,h.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Y=e.properties.get(g);Y.__ignoreDepthValues=h.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),W.setContext(n),W.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function P(z){for(let H=0;H<z.removed.length;H++){const K=z.removed[H],ne=M.indexOf(K);ne>=0&&(M[ne]=null,b[ne].disconnect(K))}for(let H=0;H<z.added.length;H++){const K=z.added[H];let ne=M.indexOf(K);if(ne===-1){for(let Y=0;Y<b.length;Y++)if(Y>=M.length){M.push(K),ne=Y;break}else if(M[Y]===null){M[Y]=K,ne=Y;break}if(ne===-1)break}const $=b[ne];$&&$.connect(K)}}const k=new oe,F=new oe;function X(z,H,K){k.setFromMatrixPosition(H.matrixWorld),F.setFromMatrixPosition(K.matrixWorld);const ne=k.distanceTo(F),$=H.projectionMatrix.elements,Y=K.projectionMatrix.elements,R=$[14]/($[10]-1),D=$[14]/($[10]+1),N=($[9]+1)/$[5],I=($[9]-1)/$[5],re=($[8]-1)/$[0],Q=(Y[8]+1)/Y[0],de=R*re,me=R*Q,Ae=ne/(-re+Q),ae=Ae*-re;H.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ae),z.translateZ(Ae),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const pe=R+Ae,xe=D+Ae,te=de-ae,be=me+(ne-ae),U=N*D/xe*pe,L=I*D/xe*pe;z.projectionMatrix.makePerspective(te,be,U,L,pe,xe),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function J(z,H){H===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(H.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(n===null)return;m.near=T.near=S.near=z.near,m.far=T.far=S.far=z.far,(x!==m.near||C!==m.far)&&(n.updateRenderState({depthNear:m.near,depthFar:m.far}),x=m.near,C=m.far);const H=z.parent,K=m.cameras;J(m,H);for(let ne=0;ne<K.length;ne++)J(K[ne],H);K.length===2?X(m,S,T):m.projectionMatrix.copy(S.projectionMatrix),q(z,m,H)};function q(z,H,K){K===null?z.matrix.copy(H.matrixWorld):(z.matrix.copy(K.matrixWorld),z.matrix.invert(),z.matrix.multiply(H.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(H.projectionMatrix),z.projectionMatrixInverse.copy(H.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Da*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return m},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)};let V=null;function G(z,H){if(u=H.getViewerPose(c||s),v=H,u!==null){const K=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let ne=!1;K.length!==m.cameras.length&&(m.cameras.length=0,ne=!0);for(let $=0;$<K.length;$++){const Y=K[$];let R=null;if(p!==null)R=p.getViewport(Y);else{const N=f.getViewSubImage(h,Y);R=N.viewport,$===0&&(e.setRenderTargetTextures(g,N.colorTexture,h.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(g))}let D=y[$];D===void 0&&(D=new Mn,D.layers.enable($),D.viewport=new Et,y[$]=D),D.matrix.fromArray(Y.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Y.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(R.x,R.y,R.width,R.height),$===0&&(m.matrix.copy(D.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale)),ne===!0&&m.cameras.push(D)}}for(let K=0;K<b.length;K++){const ne=M[K],$=b[K];ne!==null&&$!==void 0&&$.update(ne,H,c||s)}V&&V(z,H),H.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:H}),v=null}const W=new yh;W.setAnimationLoop(G),this.setAnimationLoop=function(z){V=z},this.dispose=function(){}}}function hx(a,e){function t(d,g){d.matrixAutoUpdate===!0&&d.updateMatrix(),g.value.copy(d.matrix)}function i(d,g){g.color.getRGB(d.fogColor.value,mh(a)),g.isFog?(d.fogNear.value=g.near,d.fogFar.value=g.far):g.isFogExp2&&(d.fogDensity.value=g.density)}function n(d,g,b,M,E){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(d,g):g.isMeshToonMaterial?(r(d,g),f(d,g)):g.isMeshPhongMaterial?(r(d,g),u(d,g)):g.isMeshStandardMaterial?(r(d,g),h(d,g),g.isMeshPhysicalMaterial&&p(d,g,E)):g.isMeshMatcapMaterial?(r(d,g),v(d,g)):g.isMeshDepthMaterial?r(d,g):g.isMeshDistanceMaterial?(r(d,g),_(d,g)):g.isMeshNormalMaterial?r(d,g):g.isLineBasicMaterial?(s(d,g),g.isLineDashedMaterial&&o(d,g)):g.isPointsMaterial?l(d,g,b,M):g.isSpriteMaterial?c(d,g):g.isShadowMaterial?(d.color.value.copy(g.color),d.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(d,g){d.opacity.value=g.opacity,g.color&&d.diffuse.value.copy(g.color),g.emissive&&d.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(d.map.value=g.map,t(g.map,d.mapTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,t(g.alphaMap,d.alphaMapTransform)),g.bumpMap&&(d.bumpMap.value=g.bumpMap,t(g.bumpMap,d.bumpMapTransform),d.bumpScale.value=g.bumpScale,g.side===tn&&(d.bumpScale.value*=-1)),g.normalMap&&(d.normalMap.value=g.normalMap,t(g.normalMap,d.normalMapTransform),d.normalScale.value.copy(g.normalScale),g.side===tn&&d.normalScale.value.negate()),g.displacementMap&&(d.displacementMap.value=g.displacementMap,t(g.displacementMap,d.displacementMapTransform),d.displacementScale.value=g.displacementScale,d.displacementBias.value=g.displacementBias),g.emissiveMap&&(d.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,d.emissiveMapTransform)),g.specularMap&&(d.specularMap.value=g.specularMap,t(g.specularMap,d.specularMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest);const b=e.get(g).envMap;if(b&&(d.envMap.value=b,d.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=g.reflectivity,d.ior.value=g.ior,d.refractionRatio.value=g.refractionRatio),g.lightMap){d.lightMap.value=g.lightMap;const M=a._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=g.lightMapIntensity*M,t(g.lightMap,d.lightMapTransform)}g.aoMap&&(d.aoMap.value=g.aoMap,d.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,d.aoMapTransform))}function s(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,g.map&&(d.map.value=g.map,t(g.map,d.mapTransform))}function o(d,g){d.dashSize.value=g.dashSize,d.totalSize.value=g.dashSize+g.gapSize,d.scale.value=g.scale}function l(d,g,b,M){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.size.value=g.size*b,d.scale.value=M*.5,g.map&&(d.map.value=g.map,t(g.map,d.uvTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,t(g.alphaMap,d.alphaMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest)}function c(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.rotation.value=g.rotation,g.map&&(d.map.value=g.map,t(g.map,d.mapTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,t(g.alphaMap,d.alphaMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest)}function u(d,g){d.specular.value.copy(g.specular),d.shininess.value=Math.max(g.shininess,1e-4)}function f(d,g){g.gradientMap&&(d.gradientMap.value=g.gradientMap)}function h(d,g){d.metalness.value=g.metalness,g.metalnessMap&&(d.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,d.metalnessMapTransform)),d.roughness.value=g.roughness,g.roughnessMap&&(d.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,d.roughnessMapTransform)),e.get(g).envMap&&(d.envMapIntensity.value=g.envMapIntensity)}function p(d,g,b){d.ior.value=g.ior,g.sheen>0&&(d.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),d.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(d.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,d.sheenColorMapTransform)),g.sheenRoughnessMap&&(d.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,d.sheenRoughnessMapTransform))),g.clearcoat>0&&(d.clearcoat.value=g.clearcoat,d.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(d.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,d.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(d.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===tn&&d.clearcoatNormalScale.value.negate())),g.iridescence>0&&(d.iridescence.value=g.iridescence,d.iridescenceIOR.value=g.iridescenceIOR,d.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(d.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,d.iridescenceMapTransform)),g.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),g.transmission>0&&(d.transmission.value=g.transmission,d.transmissionSamplerMap.value=b.texture,d.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(d.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,d.transmissionMapTransform)),d.thickness.value=g.thickness,g.thicknessMap&&(d.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=g.attenuationDistance,d.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(d.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(d.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=g.specularIntensity,d.specularColor.value.copy(g.specularColor),g.specularColorMap&&(d.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,d.specularColorMapTransform)),g.specularIntensityMap&&(d.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,d.specularIntensityMapTransform))}function v(d,g){g.matcap&&(d.matcap.value=g.matcap)}function _(d,g){const b=e.get(g).light;d.referencePosition.value.setFromMatrixPosition(b.matrixWorld),d.nearDistance.value=b.shadow.camera.near,d.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function dx(a,e,t,i){let n={},r={},s=[];const o=t.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,M){const E=M.program;i.uniformBlockBinding(b,E)}function c(b,M){let E=n[b.id];E===void 0&&(v(b),E=u(b),n[b.id]=E,b.addEventListener("dispose",d));const w=M.program;i.updateUBOMapping(b,w);const S=e.render.frame;r[b.id]!==S&&(h(b),r[b.id]=S)}function u(b){const M=f();b.__bindingPointIndex=M;const E=a.createBuffer(),w=b.__size,S=b.usage;return a.bindBuffer(a.UNIFORM_BUFFER,E),a.bufferData(a.UNIFORM_BUFFER,w,S),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,M,E),E}function f(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const M=n[b.id],E=b.uniforms,w=b.__cache;a.bindBuffer(a.UNIFORM_BUFFER,M);for(let S=0,T=E.length;S<T;S++){const y=E[S];if(p(y,S,w)===!0){const m=y.__offset,x=Array.isArray(y.value)?y.value:[y.value];let C=0;for(let A=0;A<x.length;A++){const O=x[A],P=_(O);typeof O=="number"?(y.__data[0]=O,a.bufferSubData(a.UNIFORM_BUFFER,m+C,y.__data)):O.isMatrix3?(y.__data[0]=O.elements[0],y.__data[1]=O.elements[1],y.__data[2]=O.elements[2],y.__data[3]=O.elements[0],y.__data[4]=O.elements[3],y.__data[5]=O.elements[4],y.__data[6]=O.elements[5],y.__data[7]=O.elements[0],y.__data[8]=O.elements[6],y.__data[9]=O.elements[7],y.__data[10]=O.elements[8],y.__data[11]=O.elements[0]):(O.toArray(y.__data,C),C+=P.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,m,y.__data)}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function p(b,M,E){const w=b.value;if(E[M]===void 0){if(typeof w=="number")E[M]=w;else{const S=Array.isArray(w)?w:[w],T=[];for(let y=0;y<S.length;y++)T.push(S[y].clone());E[M]=T}return!0}else if(typeof w=="number"){if(E[M]!==w)return E[M]=w,!0}else{const S=Array.isArray(E[M])?E[M]:[E[M]],T=Array.isArray(w)?w:[w];for(let y=0;y<S.length;y++){const m=S[y];if(m.equals(T[y])===!1)return m.copy(T[y]),!0}}return!1}function v(b){const M=b.uniforms;let E=0;const w=16;let S=0;for(let T=0,y=M.length;T<y;T++){const m=M[T],x={boundary:0,storage:0},C=Array.isArray(m.value)?m.value:[m.value];for(let A=0,O=C.length;A<O;A++){const P=C[A],k=_(P);x.boundary+=k.boundary,x.storage+=k.storage}if(m.__data=new Float32Array(x.storage/Float32Array.BYTES_PER_ELEMENT),m.__offset=E,T>0){S=E%w;const A=w-S;S!==0&&A-x.boundary<0&&(E+=w-S,m.__offset=E)}E+=x.storage}return S=E%w,S>0&&(E+=w-S),b.__size=E,b.__cache={},this}function _(b){const M={boundary:0,storage:0};return typeof b=="number"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function d(b){const M=b.target;M.removeEventListener("dispose",d);const E=s.indexOf(M.__bindingPointIndex);s.splice(E,1),a.deleteBuffer(n[M.id]),delete n[M.id],delete r[M.id]}function g(){for(const b in n)a.deleteBuffer(n[b]);s=[],n={},r={}}return{bind:l,update:c,dispose:g}}class Ch{constructor(e={}){const{canvas:t=lm(),context:i=null,depth:n=!0,stencil:r=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;const p=new Uint32Array(4),v=new Int32Array(4);let _=null,d=null;const g=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this._useLegacyLights=!1,this.toneMapping=Ti,this.toneMappingExposure=1;const M=this;let E=!1,w=0,S=0,T=null,y=-1,m=null;const x=new Et,C=new Et;let A=null;const O=new Ke(0);let P=0,k=t.width,F=t.height,X=1,J=null,q=null;const V=new Et(0,0,k,F),G=new Et(0,0,k,F);let W=!1;const z=new xh;let H=!1,K=!1,ne=null;const $=new Ct,Y=new Je,R=new oe,D={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function N(){return T===null?X:1}let I=i;function re(B,ee){for(let le=0;le<B.length;le++){const ue=B[le],ce=t.getContext(ue,ee);if(ce!==null)return ce}return null}try{const B={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ql}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),I===null){const ee=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&ee.shift(),I=re(ee,B),I===null)throw re(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let Q,de,me,Ae,ae,pe,xe,te,be,U,L,Z,ve,se,fe,ye,_e,Ee,Le,Ie,he,we,De,Ne;function Be(){Q=new w0(I),de=new x0(I,Q,e),Q.init(de),we=new lx(I,Q,de),me=new sx(I,Q,de),Ae=new C0(I),ae=new Yv,pe=new ox(I,Q,me,ae,de,we,Ae),xe=new S0(M),te=new T0(M),be=new Om(I,de),De=new _0(I,Q,be,de),U=new A0(I,be,Ae,De),L=new U0(I,U,be,Ae),Le=new D0(I,de,pe),ye=new y0(ae),Z=new jv(M,xe,te,Q,de,De,ye),ve=new hx(M,ae),se=new Zv,fe=new nx(Q,de),Ee=new g0(M,xe,te,me,L,h,l),_e=new ax(M,L,de),Ne=new dx(I,Ae,de,me),Ie=new v0(I,Q,Ae,de),he=new R0(I,Q,Ae,de),Ae.programs=Z.programs,M.capabilities=de,M.extensions=Q,M.properties=ae,M.renderLists=se,M.shadowMap=_e,M.state=me,M.info=Ae}Be();const Te=new fx(M,I);this.xr=Te,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const B=Q.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){const B=Q.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(B){B!==void 0&&(X=B,this.setSize(k,F,!1))},this.getSize=function(B){return B.set(k,F)},this.setSize=function(B,ee,le=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=B,F=ee,t.width=Math.floor(B*X),t.height=Math.floor(ee*X),le===!0&&(t.style.width=B+"px",t.style.height=ee+"px"),this.setViewport(0,0,B,ee)},this.getDrawingBufferSize=function(B){return B.set(k*X,F*X).floor()},this.setDrawingBufferSize=function(B,ee,le){k=B,F=ee,X=le,t.width=Math.floor(B*le),t.height=Math.floor(ee*le),this.setViewport(0,0,B,ee)},this.getCurrentViewport=function(B){return B.copy(x)},this.getViewport=function(B){return B.copy(V)},this.setViewport=function(B,ee,le,ue){B.isVector4?V.set(B.x,B.y,B.z,B.w):V.set(B,ee,le,ue),me.viewport(x.copy(V).multiplyScalar(X).floor())},this.getScissor=function(B){return B.copy(G)},this.setScissor=function(B,ee,le,ue){B.isVector4?G.set(B.x,B.y,B.z,B.w):G.set(B,ee,le,ue),me.scissor(C.copy(G).multiplyScalar(X).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(B){me.setScissorTest(W=B)},this.setOpaqueSort=function(B){J=B},this.setTransparentSort=function(B){q=B},this.getClearColor=function(B){return B.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(B=!0,ee=!0,le=!0){let ue=0;if(B){let ce=!1;if(T!==null){const Oe=T.texture.format;ce=Oe===th||Oe===eh||Oe===$f}if(ce){const Oe=T.texture.type,ke=Oe===wi||Oe===yi||Oe===jl||Oe===Ji||Oe===Jf||Oe===Qf,Ge=Ee.getClearColor(),Me=Ee.getClearAlpha(),He=Ge.r,We=Ge.g,ze=Ge.b;ke?(p[0]=He,p[1]=We,p[2]=ze,p[3]=Me,I.clearBufferuiv(I.COLOR,0,p)):(v[0]=He,v[1]=We,v[2]=ze,v[3]=Me,I.clearBufferiv(I.COLOR,0,v))}else ue|=I.COLOR_BUFFER_BIT}ee&&(ue|=I.DEPTH_BUFFER_BIT),le&&(ue|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),se.dispose(),fe.dispose(),ae.dispose(),xe.dispose(),te.dispose(),L.dispose(),De.dispose(),Ne.dispose(),Z.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",et),Te.removeEventListener("sessionend",qe),ne&&(ne.dispose(),ne=null),Qe.stop()};function Re(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const B=Ae.autoReset,ee=_e.enabled,le=_e.autoUpdate,ue=_e.needsUpdate,ce=_e.type;Be(),Ae.autoReset=B,_e.enabled=ee,_e.autoUpdate=le,_e.needsUpdate=ue,_e.type=ce}function Pe(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function ge(B){const ee=B.target;ee.removeEventListener("dispose",ge),ie(ee)}function ie(B){Se(B),ae.remove(B)}function Se(B){const ee=ae.get(B).programs;ee!==void 0&&(ee.forEach(function(le){Z.releaseProgram(le)}),B.isShaderMaterial&&Z.releaseShaderCache(B))}this.renderBufferDirect=function(B,ee,le,ue,ce,Oe){ee===null&&(ee=D);const ke=ce.isMesh&&ce.matrixWorld.determinant()<0,Ge=Xa(B,ee,le,ue,ce);me.setMaterial(ue,ke);let Me=le.index,He=1;if(ue.wireframe===!0){if(Me=U.getWireframeAttribute(le),Me===void 0)return;He=2}const We=le.drawRange,ze=le.attributes.position;let st=We.start*He,Ot=(We.start+We.count)*He;Oe!==null&&(st=Math.max(st,Oe.start*He),Ot=Math.min(Ot,(Oe.start+Oe.count)*He)),Me!==null?(st=Math.max(st,0),Ot=Math.min(Ot,Me.count)):ze!=null&&(st=Math.max(st,0),Ot=Math.min(Ot,ze.count));const pt=Ot-st;if(pt<0||pt===1/0)return;De.setup(ce,ue,Ge,le,Me);let Kt,nt=Ie;if(Me!==null&&(Kt=be.get(Me),nt=he,nt.setIndex(Kt)),ce.isMesh)ue.wireframe===!0?(me.setLineWidth(ue.wireframeLinewidth*N()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(ce.isLine){let je=ue.linewidth;je===void 0&&(je=1),me.setLineWidth(je*N()),ce.isLineSegments?nt.setMode(I.LINES):ce.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else ce.isPoints?nt.setMode(I.POINTS):ce.isSprite&&nt.setMode(I.TRIANGLES);if(ce.isBatchedMesh)nt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else if(ce.isInstancedMesh)nt.renderInstances(st,pt,ce.count);else if(le.isInstancedBufferGeometry){const je=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,hi=Math.min(le.instanceCount,je);nt.renderInstances(st,pt,hi)}else nt.render(st,pt)};function Fe(B,ee,le){B.transparent===!0&&B.side===kn&&B.forceSinglePass===!1?(B.side=tn,B.needsUpdate=!0,Yt(B,ee,le),B.side=Ci,B.needsUpdate=!0,Yt(B,ee,le),B.side=kn):Yt(B,ee,le)}this.compile=function(B,ee,le=null){le===null&&(le=B),d=fe.get(le),d.init(),b.push(d),le.traverseVisible(function(ce){ce.isLight&&ce.layers.test(ee.layers)&&(d.pushLight(ce),ce.castShadow&&d.pushShadow(ce))}),B!==le&&B.traverseVisible(function(ce){ce.isLight&&ce.layers.test(ee.layers)&&(d.pushLight(ce),ce.castShadow&&d.pushShadow(ce))}),d.setupLights(M._useLegacyLights);const ue=new Set;return B.traverse(function(ce){const Oe=ce.material;if(Oe)if(Array.isArray(Oe))for(let ke=0;ke<Oe.length;ke++){const Ge=Oe[ke];Fe(Ge,le,ce),ue.add(Ge)}else Fe(Oe,le,ce),ue.add(Oe)}),b.pop(),d=null,ue},this.compileAsync=function(B,ee,le=null){const ue=this.compile(B,ee,le);return new Promise(ce=>{function Oe(){if(ue.forEach(function(ke){ae.get(ke).currentProgram.isReady()&&ue.delete(ke)}),ue.size===0){ce(B);return}setTimeout(Oe,10)}Q.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Ue=null;function Xe(B){Ue&&Ue(B)}function et(){Qe.stop()}function qe(){Qe.start()}const Qe=new yh;Qe.setAnimationLoop(Xe),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(B){Ue=B,Te.setAnimationLoop(B),B===null?Qe.stop():Qe.start()},Te.addEventListener("sessionstart",et),Te.addEventListener("sessionend",qe),this.render=function(B,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(ee),ee=Te.getCamera()),B.isScene===!0&&B.onBeforeRender(M,B,ee,T),d=fe.get(B,b.length),d.init(),b.push(d),$.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),z.setFromProjectionMatrix($),K=this.localClippingEnabled,H=ye.init(this.clippingPlanes,K),_=se.get(B,g.length),_.init(),g.push(_),dt(B,ee,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(J,q),this.info.render.frame++,H===!0&&ye.beginShadows();const le=d.state.shadowsArray;if(_e.render(le,B,ee),H===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ee.render(_,B),d.setupLights(M._useLegacyLights),ee.isArrayCamera){const ue=ee.cameras;for(let ce=0,Oe=ue.length;ce<Oe;ce++){const ke=ue[ce];Rn(_,B,ke,ke.viewport)}}else Rn(_,B,ee);T!==null&&(pe.updateMultisampleRenderTarget(T),pe.updateRenderTargetMipmap(T)),B.isScene===!0&&B.onAfterRender(M,B,ee),De.resetDefaultState(),y=-1,m=null,b.pop(),b.length>0?d=b[b.length-1]:d=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function dt(B,ee,le,ue){if(B.visible===!1)return;if(B.layers.test(ee.layers)){if(B.isGroup)le=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(ee);else if(B.isLight)d.pushLight(B),B.castShadow&&d.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||z.intersectsSprite(B)){ue&&R.setFromMatrixPosition(B.matrixWorld).applyMatrix4($);const ke=L.update(B),Ge=B.material;Ge.visible&&_.push(B,ke,Ge,le,R.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||z.intersectsObject(B))){const ke=L.update(B),Ge=B.material;if(ue&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),R.copy(B.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),R.copy(ke.boundingSphere.center)),R.applyMatrix4(B.matrixWorld).applyMatrix4($)),Array.isArray(Ge)){const Me=ke.groups;for(let He=0,We=Me.length;He<We;He++){const ze=Me[He],st=Ge[ze.materialIndex];st&&st.visible&&_.push(B,ke,st,le,R.z,ze)}}else Ge.visible&&_.push(B,ke,Ge,le,R.z,null)}}const Oe=B.children;for(let ke=0,Ge=Oe.length;ke<Ge;ke++)dt(Oe[ke],ee,le,ue)}function Rn(B,ee,le,ue){const ce=B.opaque,Oe=B.transmissive,ke=B.transparent;d.setupLightsView(le),H===!0&&ye.setGlobalState(M.clippingPlanes,le),Oe.length>0&&Cn(ce,Oe,ee,le),ue&&me.viewport(x.copy(ue)),ce.length>0&&ln(ce,ee,le),Oe.length>0&&ln(Oe,ee,le),ke.length>0&&ln(ke,ee,le),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Cn(B,ee,le,ue){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;const Oe=de.isWebGL2;ne===null&&(ne=new ar(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?oi:wi,minFilter:Hr,samples:Oe?4:0})),M.getDrawingBufferSize(Y),Oe?ne.setSize(Y.x,Y.y):ne.setSize(ks(Y.x),ks(Y.y));const ke=M.getRenderTarget();M.setRenderTarget(ne),M.getClearColor(O),P=M.getClearAlpha(),P<1&&M.setClearColor(16777215,.5),M.clear();const Ge=M.toneMapping;M.toneMapping=Ti,ln(B,le,ue),pe.updateMultisampleRenderTarget(ne),pe.updateRenderTargetMipmap(ne);let Me=!1;for(let He=0,We=ee.length;He<We;He++){const ze=ee[He],st=ze.object,Ot=ze.geometry,pt=ze.material,Kt=ze.group;if(pt.side===kn&&st.layers.test(ue.layers)){const nt=pt.side;pt.side=tn,pt.needsUpdate=!0,Vn(st,le,ue,Ot,pt,Kt),pt.side=nt,pt.needsUpdate=!0,Me=!0}}Me===!0&&(pe.updateMultisampleRenderTarget(ne),pe.updateRenderTargetMipmap(ne)),M.setRenderTarget(ke),M.setClearColor(O,P),M.toneMapping=Ge}function ln(B,ee,le){const ue=ee.isScene===!0?ee.overrideMaterial:null;for(let ce=0,Oe=B.length;ce<Oe;ce++){const ke=B[ce],Ge=ke.object,Me=ke.geometry,He=ue===null?ke.material:ue,We=ke.group;Ge.layers.test(le.layers)&&Vn(Ge,ee,le,Me,He,We)}}function Vn(B,ee,le,ue,ce,Oe){B.onBeforeRender(M,ee,le,ue,ce,Oe),B.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),ce.onBeforeRender(M,ee,le,ue,B,Oe),ce.transparent===!0&&ce.side===kn&&ce.forceSinglePass===!1?(ce.side=tn,ce.needsUpdate=!0,M.renderBufferDirect(le,ee,ue,ce,B,Oe),ce.side=Ci,ce.needsUpdate=!0,M.renderBufferDirect(le,ee,ue,ce,B,Oe),ce.side=kn):M.renderBufferDirect(le,ee,ue,ce,B,Oe),B.onAfterRender(M,ee,le,ue,ce,Oe)}function Yt(B,ee,le){ee.isScene!==!0&&(ee=D);const ue=ae.get(B),ce=d.state.lights,Oe=d.state.shadowsArray,ke=ce.state.version,Ge=Z.getParameters(B,ce.state,Oe,ee,le),Me=Z.getProgramCacheKey(Ge);let He=ue.programs;ue.environment=B.isMeshStandardMaterial?ee.environment:null,ue.fog=ee.fog,ue.envMap=(B.isMeshStandardMaterial?te:xe).get(B.envMap||ue.environment),He===void 0&&(B.addEventListener("dispose",ge),He=new Map,ue.programs=He);let We=He.get(Me);if(We!==void 0){if(ue.currentProgram===We&&ue.lightsStateVersion===ke)return Hn(B,Ge),We}else Ge.uniforms=Z.getUniforms(B),B.onBuild(le,Ge,M),B.onBeforeCompile(Ge,M),We=Z.acquireProgram(Ge,Me),He.set(Me,We),ue.uniforms=Ge.uniforms;const ze=ue.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(ze.clippingPlanes=ye.uniform),Hn(B,Ge),ue.needsLights=so(B),ue.lightsStateVersion=ke,ue.needsLights&&(ze.ambientLightColor.value=ce.state.ambient,ze.lightProbe.value=ce.state.probe,ze.directionalLights.value=ce.state.directional,ze.directionalLightShadows.value=ce.state.directionalShadow,ze.spotLights.value=ce.state.spot,ze.spotLightShadows.value=ce.state.spotShadow,ze.rectAreaLights.value=ce.state.rectArea,ze.ltc_1.value=ce.state.rectAreaLTC1,ze.ltc_2.value=ce.state.rectAreaLTC2,ze.pointLights.value=ce.state.point,ze.pointLightShadows.value=ce.state.pointShadow,ze.hemisphereLights.value=ce.state.hemi,ze.directionalShadowMap.value=ce.state.directionalShadowMap,ze.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,ze.spotShadowMap.value=ce.state.spotShadowMap,ze.spotLightMatrix.value=ce.state.spotLightMatrix,ze.spotLightMap.value=ce.state.spotLightMap,ze.pointShadowMap.value=ce.state.pointShadowMap,ze.pointShadowMatrix.value=ce.state.pointShadowMatrix),ue.currentProgram=We,ue.uniformsList=null,We}function wt(B){if(B.uniformsList===null){const ee=B.currentProgram.getUniforms();B.uniformsList=As.seqWithValue(ee.seq,B.uniforms)}return B.uniformsList}function Hn(B,ee){const le=ae.get(B);le.outputColorSpace=ee.outputColorSpace,le.batching=ee.batching,le.instancing=ee.instancing,le.instancingColor=ee.instancingColor,le.skinning=ee.skinning,le.morphTargets=ee.morphTargets,le.morphNormals=ee.morphNormals,le.morphColors=ee.morphColors,le.morphTargetsCount=ee.morphTargetsCount,le.numClippingPlanes=ee.numClippingPlanes,le.numIntersection=ee.numClipIntersection,le.vertexAlphas=ee.vertexAlphas,le.vertexTangents=ee.vertexTangents,le.toneMapping=ee.toneMapping}function Xa(B,ee,le,ue,ce){ee.isScene!==!0&&(ee=D),pe.resetTextureUnits();const Oe=ee.fog,ke=ue.isMeshStandardMaterial?ee.environment:null,Ge=T===null?M.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Kn,Me=(ue.isMeshStandardMaterial?te:xe).get(ue.envMap||ke),He=ue.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,We=!!le.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),ze=!!le.morphAttributes.position,st=!!le.morphAttributes.normal,Ot=!!le.morphAttributes.color;let pt=Ti;ue.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(pt=M.toneMapping);const Kt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,nt=Kt!==void 0?Kt.length:0,je=ae.get(ue),hi=d.state.lights;if(H===!0&&(K===!0||B!==m)){const Nt=B===m&&ue.id===y;ye.setState(ue,B,Nt)}let ot=!1;ue.version===je.__version?(je.needsLights&&je.lightsStateVersion!==hi.state.version||je.outputColorSpace!==Ge||ce.isBatchedMesh&&je.batching===!1||!ce.isBatchedMesh&&je.batching===!0||ce.isInstancedMesh&&je.instancing===!1||!ce.isInstancedMesh&&je.instancing===!0||ce.isSkinnedMesh&&je.skinning===!1||!ce.isSkinnedMesh&&je.skinning===!0||ce.isInstancedMesh&&je.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&je.instancingColor===!1&&ce.instanceColor!==null||je.envMap!==Me||ue.fog===!0&&je.fog!==Oe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ye.numPlanes||je.numIntersection!==ye.numIntersection)||je.vertexAlphas!==He||je.vertexTangents!==We||je.morphTargets!==ze||je.morphNormals!==st||je.morphColors!==Ot||je.toneMapping!==pt||de.isWebGL2===!0&&je.morphTargetsCount!==nt)&&(ot=!0):(ot=!0,je.__version=ue.version);let Pn=je.currentProgram;ot===!0&&(Pn=Yt(ue,ee,ce));let aa=!1,Ln=!1,Fi=!1;const ut=Pn.getUniforms(),Dn=je.uniforms;if(me.useProgram(Pn.program)&&(aa=!0,Ln=!0,Fi=!0),ue.id!==y&&(y=ue.id,Ln=!0),aa||m!==B){ut.setValue(I,"projectionMatrix",B.projectionMatrix),ut.setValue(I,"viewMatrix",B.matrixWorldInverse);const Nt=ut.map.cameraPosition;Nt!==void 0&&Nt.setValue(I,R.setFromMatrixPosition(B.matrixWorld)),de.logarithmicDepthBuffer&&ut.setValue(I,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&ut.setValue(I,"isOrthographic",B.isOrthographicCamera===!0),m!==B&&(m=B,Ln=!0,Fi=!0)}if(ce.isSkinnedMesh){ut.setOptional(I,ce,"bindMatrix"),ut.setOptional(I,ce,"bindMatrixInverse");const Nt=ce.skeleton;Nt&&(de.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),ut.setValue(I,"boneTexture",Nt.boneTexture,pe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ce.isBatchedMesh&&(ut.setOptional(I,ce,"batchingTexture"),ut.setValue(I,"batchingTexture",ce._matricesTexture,pe));const Oi=le.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0&&de.isWebGL2===!0)&&Le.update(ce,le,Pn),(Ln||je.receiveShadow!==ce.receiveShadow)&&(je.receiveShadow=ce.receiveShadow,ut.setValue(I,"receiveShadow",ce.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Dn.envMap.value=Me,Dn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),Ln&&(ut.setValue(I,"toneMappingExposure",M.toneMappingExposure),je.needsLights&&ra(Dn,Fi),Oe&&ue.fog===!0&&ve.refreshFogUniforms(Dn,Oe),ve.refreshMaterialUniforms(Dn,ue,X,F,ne),As.upload(I,wt(je),Dn,pe)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(As.upload(I,wt(je),Dn,pe),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&ut.setValue(I,"center",ce.center),ut.setValue(I,"modelViewMatrix",ce.modelViewMatrix),ut.setValue(I,"normalMatrix",ce.normalMatrix),ut.setValue(I,"modelMatrix",ce.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const Nt=ue.uniformsGroups;for(let Zt=0,oo=Nt.length;Zt<oo;Zt++)if(de.isWebGL2){const Ni=Nt[Zt];Ne.update(Ni,Pn),Ne.bind(Ni,Pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pn}function ra(B,ee){B.ambientLightColor.needsUpdate=ee,B.lightProbe.needsUpdate=ee,B.directionalLights.needsUpdate=ee,B.directionalLightShadows.needsUpdate=ee,B.pointLights.needsUpdate=ee,B.pointLightShadows.needsUpdate=ee,B.spotLights.needsUpdate=ee,B.spotLightShadows.needsUpdate=ee,B.rectAreaLights.needsUpdate=ee,B.hemisphereLights.needsUpdate=ee}function so(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(B,ee,le){ae.get(B.texture).__webglTexture=ee,ae.get(B.depthTexture).__webglTexture=le;const ue=ae.get(B);ue.__hasExternalTextures=!0,ue.__hasExternalTextures&&(ue.__autoAllocateDepthBuffer=le===void 0,ue.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(B,ee){const le=ae.get(B);le.__webglFramebuffer=ee,le.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(B,ee=0,le=0){T=B,w=ee,S=le;let ue=!0,ce=null,Oe=!1,ke=!1;if(B){const Me=ae.get(B);Me.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(I.FRAMEBUFFER,null),ue=!1):Me.__webglFramebuffer===void 0?pe.setupRenderTarget(B):Me.__hasExternalTextures&&pe.rebindTextures(B,ae.get(B.texture).__webglTexture,ae.get(B.depthTexture).__webglTexture);const He=B.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ke=!0);const We=ae.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(We[ee])?ce=We[ee][le]:ce=We[ee],Oe=!0):de.isWebGL2&&B.samples>0&&pe.useMultisampledRTT(B)===!1?ce=ae.get(B).__webglMultisampledFramebuffer:Array.isArray(We)?ce=We[le]:ce=We,x.copy(B.viewport),C.copy(B.scissor),A=B.scissorTest}else x.copy(V).multiplyScalar(X).floor(),C.copy(G).multiplyScalar(X).floor(),A=W;if(me.bindFramebuffer(I.FRAMEBUFFER,ce)&&de.drawBuffers&&ue&&me.drawBuffers(B,ce),me.viewport(x),me.scissor(C),me.setScissorTest(A),Oe){const Me=ae.get(B.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me.__webglTexture,le)}else if(ke){const Me=ae.get(B.texture),He=ee||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.__webglTexture,le||0,He)}y=-1},this.readRenderTargetPixels=function(B,ee,le,ue,ce,Oe,ke){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ae.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge){me.bindFramebuffer(I.FRAMEBUFFER,Ge);try{const Me=B.texture,He=Me.format,We=Me.type;if(He!==Gn&&we.convert(He)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=We===oi&&(Q.has("EXT_color_buffer_half_float")||de.isWebGL2&&Q.has("EXT_color_buffer_float"));if(We!==wi&&we.convert(We)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===zn&&(de.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=B.width-ue&&le>=0&&le<=B.height-ce&&I.readPixels(ee,le,ue,ce,we.convert(He),we.convert(We),Oe)}finally{const Me=T!==null?ae.get(T).__webglFramebuffer:null;me.bindFramebuffer(I.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(B,ee,le=0){const ue=Math.pow(2,-le),ce=Math.floor(ee.image.width*ue),Oe=Math.floor(ee.image.height*ue);pe.setTexture2D(ee,0),I.copyTexSubImage2D(I.TEXTURE_2D,le,0,0,B.x,B.y,ce,Oe),me.unbindTexture()},this.copyTextureToTexture=function(B,ee,le,ue=0){const ce=ee.image.width,Oe=ee.image.height,ke=we.convert(le.format),Ge=we.convert(le.type);pe.setTexture2D(le,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,le.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,le.unpackAlignment),ee.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ue,B.x,B.y,ce,Oe,ke,Ge,ee.image.data):ee.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ue,B.x,B.y,ee.mipmaps[0].width,ee.mipmaps[0].height,ke,ee.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,ue,B.x,B.y,ke,Ge,ee.image),ue===0&&le.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(B,ee,le,ue,ce=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Oe=B.max.x-B.min.x+1,ke=B.max.y-B.min.y+1,Ge=B.max.z-B.min.z+1,Me=we.convert(ue.format),He=we.convert(ue.type);let We;if(ue.isData3DTexture)pe.setTexture3D(ue,0),We=I.TEXTURE_3D;else if(ue.isDataArrayTexture)pe.setTexture2DArray(ue,0),We=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,ue.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,ue.unpackAlignment);const ze=I.getParameter(I.UNPACK_ROW_LENGTH),st=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ot=I.getParameter(I.UNPACK_SKIP_PIXELS),pt=I.getParameter(I.UNPACK_SKIP_ROWS),Kt=I.getParameter(I.UNPACK_SKIP_IMAGES),nt=le.isCompressedTexture?le.mipmaps[0]:le.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,nt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,B.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,B.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,B.min.z),le.isDataTexture||le.isData3DTexture?I.texSubImage3D(We,ce,ee.x,ee.y,ee.z,Oe,ke,Ge,Me,He,nt.data):le.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(We,ce,ee.x,ee.y,ee.z,Oe,ke,Ge,Me,nt.data)):I.texSubImage3D(We,ce,ee.x,ee.y,ee.z,Oe,ke,Ge,Me,He,nt),I.pixelStorei(I.UNPACK_ROW_LENGTH,ze),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,st),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ot),I.pixelStorei(I.UNPACK_SKIP_ROWS,pt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Kt),ce===0&&ue.generateMipmaps&&I.generateMipmap(We),me.unbindTexture()},this.initTexture=function(B){B.isCubeTexture?pe.setTextureCube(B,0):B.isData3DTexture?pe.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?pe.setTexture2DArray(B,0):pe.setTexture2D(B,0),me.unbindTexture()},this.resetState=function(){w=0,S=0,T=null,me.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Yl?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===Js?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Rt?$i:ih}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$i?Rt:Kn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class px extends Ch{}px.prototype.isWebGL1Renderer=!0;class mx extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class gx extends zt{constructor(e=null,t=1,i=1,n,r,s,o,l,c=Ut,u=Ut,f,h){super(null,s,o,l,c,u,n,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _x extends jt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Ql extends fi{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const r=[],s=[];o(n),c(i),u(),this.setAttribute("position",new Yn(r,3)),this.setAttribute("normal",new Yn(r.slice(),3)),this.setAttribute("uv",new Yn(s,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const M=new oe,E=new oe,w=new oe;for(let S=0;S<t.length;S+=3)p(t[S+0],M),p(t[S+1],E),p(t[S+2],w),l(M,E,w,b)}function l(b,M,E,w){const S=w+1,T=[];for(let y=0;y<=S;y++){T[y]=[];const m=b.clone().lerp(E,y/S),x=M.clone().lerp(E,y/S),C=S-y;for(let A=0;A<=C;A++)A===0&&y===S?T[y][A]=m:T[y][A]=m.clone().lerp(x,A/C)}for(let y=0;y<S;y++)for(let m=0;m<2*(S-y)-1;m++){const x=Math.floor(m/2);m%2===0?(h(T[y][x+1]),h(T[y+1][x]),h(T[y][x])):(h(T[y][x+1]),h(T[y+1][x+1]),h(T[y+1][x]))}}function c(b){const M=new oe;for(let E=0;E<r.length;E+=3)M.x=r[E+0],M.y=r[E+1],M.z=r[E+2],M.normalize().multiplyScalar(b),r[E+0]=M.x,r[E+1]=M.y,r[E+2]=M.z}function u(){const b=new oe;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];const E=d(b)/2/Math.PI+.5,w=g(b)/Math.PI+.5;s.push(E,1-w)}v(),f()}function f(){for(let b=0;b<s.length;b+=6){const M=s[b+0],E=s[b+2],w=s[b+4],S=Math.max(M,E,w),T=Math.min(M,E,w);S>.9&&T<.1&&(M<.2&&(s[b+0]+=1),E<.2&&(s[b+2]+=1),w<.2&&(s[b+4]+=1))}}function h(b){r.push(b.x,b.y,b.z)}function p(b,M){const E=b*3;M.x=e[E+0],M.y=e[E+1],M.z=e[E+2]}function v(){const b=new oe,M=new oe,E=new oe,w=new oe,S=new Je,T=new Je,y=new Je;for(let m=0,x=0;m<r.length;m+=9,x+=6){b.set(r[m+0],r[m+1],r[m+2]),M.set(r[m+3],r[m+4],r[m+5]),E.set(r[m+6],r[m+7],r[m+8]),S.set(s[x+0],s[x+1]),T.set(s[x+2],s[x+3]),y.set(s[x+4],s[x+5]),w.copy(b).add(M).add(E).divideScalar(3);const C=d(w);_(S,x+0,b,C),_(T,x+2,M,C),_(y,x+4,E,C)}}function _(b,M,E,w){w<0&&b.x===1&&(s[M]=b.x-1),E.x===0&&E.z===0&&(s[M]=w/2/Math.PI+.5)}function d(b){return Math.atan2(b.z,-b.x)}function g(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.vertices,e.indices,e.radius,e.details)}}class $l extends Ql{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $l(e.radius,e.detail)}}class vx extends ea{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xx extends vx{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const Gs={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Ph{constructor(e,t,i){const n=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&n.onStart!==void 0&&n.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,n.onProgress!==void 0&&n.onProgress(u,s,o),s===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const yx=new Ph;class Ha{constructor(e){this.manager=e!==void 0?e:yx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ha.DEFAULT_MATERIAL_NAME="__DEFAULT";const ni={};class Sx extends Error{constructor(e,t){super(e),this.response=t}}class Mx extends Ha{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Gs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:i,onError:n});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:i,onError:n});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ni[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=h?parseInt(h):0,v=p!==0;let _=0;const d=new ReadableStream({start(g){b();function b(){f.read().then(({done:M,value:E})=>{if(M)g.close();else{_+=E.byteLength;const w=new ProgressEvent("progress",{lengthComputable:v,loaded:_,total:p});for(let S=0,T=u.length;S<T;S++){const y=u[S];y.onProgress&&y.onProgress(w)}g.enqueue(E),b()}})}}});return new Response(d)}else throw new Sx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(v=>p.decode(v))}}}).then(c=>{Gs.add(e,c);const u=ni[e];delete ni[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=ni[e];if(u===void 0)throw this.manager.itemError(e),c;delete ni[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ex extends Ha{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Gs.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=Ua("img");function l(){u(),Gs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),n&&n(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class bx extends Ha{constructor(e){super(e)}load(e,t,i,n){const r=this,s=new gx,o=new Mx(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(n!==void 0)n(u);else{console.error(u);return}}c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:dn,s.wrapT=c.wrapT!==void 0?c.wrapT:dn,s.magFilter=c.magFilter!==void 0?c.magFilter:Mt,s.minFilter=c.minFilter!==void 0?c.minFilter:Mt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?s.colorSpace=c.colorSpace:c.encoding!==void 0&&(s.encoding=c.encoding),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=Hr),c.mipmapCount===1&&(s.minFilter=Mt),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c)},i,n),s}}class Tx extends Ha{constructor(e){super(e)}load(e,t,i,n){const r=new zt,s=new Ex(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}}class wx extends fi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Ax{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ef(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ef();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ef(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ql);class Rx extends bx{constructor(e){super(e),this.type=oi}parse(e){const s=function(y,m){switch(y){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(m||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(m||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(m||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(m||""))}},f=function(y,m,x){m=m||1024;let A=y.pos,O=-1,P=0,k="",F=String.fromCharCode.apply(null,new Uint16Array(y.subarray(A,A+128)));for(;0>(O=F.indexOf(`
`))&&P<m&&A<y.byteLength;)k+=F,P+=F.length,A+=128,F+=String.fromCharCode.apply(null,new Uint16Array(y.subarray(A,A+128)));return-1<O?(y.pos+=P+O+1,k+F.slice(0,O)):!1},h=function(y){const m=/^#\?(\S+)/,x=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*FORMAT=(\S+)\s*$/,O=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let k,F;for((y.pos>=y.byteLength||!(k=f(y)))&&s(1,"no header found"),(F=k.match(m))||s(3,"bad initial token"),P.valid|=1,P.programtype=F[1],P.string+=k+`
`;k=f(y),k!==!1;){if(P.string+=k+`
`,k.charAt(0)==="#"){P.comments+=k+`
`;continue}if((F=k.match(x))&&(P.gamma=parseFloat(F[1])),(F=k.match(C))&&(P.exposure=parseFloat(F[1])),(F=k.match(A))&&(P.valid|=2,P.format=F[1]),(F=k.match(O))&&(P.valid|=4,P.height=parseInt(F[1],10),P.width=parseInt(F[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||s(3,"missing format specifier"),P.valid&4||s(3,"missing image size specifier"),P},p=function(y,m,x){const C=m;if(C<8||C>32767||y[0]!==2||y[1]!==2||y[2]&128)return new Uint8Array(y);C!==(y[2]<<8|y[3])&&s(3,"wrong scanline width");const A=new Uint8Array(4*m*x);A.length||s(4,"unable to allocate buffer space");let O=0,P=0;const k=4*C,F=new Uint8Array(4),X=new Uint8Array(k);let J=x;for(;J>0&&P<y.byteLength;){P+4>y.byteLength&&s(1),F[0]=y[P++],F[1]=y[P++],F[2]=y[P++],F[3]=y[P++],(F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=C)&&s(3,"bad rgbe scanline format");let q=0,V;for(;q<k&&P<y.byteLength;){V=y[P++];const W=V>128;if(W&&(V-=128),(V===0||q+V>k)&&s(3,"bad scanline data"),W){const z=y[P++];for(let H=0;H<V;H++)X[q++]=z}else X.set(y.subarray(P,P+V),q),q+=V,P+=V}const G=C;for(let W=0;W<G;W++){let z=0;A[O]=X[W+z],z+=C,A[O+1]=X[W+z],z+=C,A[O+2]=X[W+z],z+=C,A[O+3]=X[W+z],O+=4}J--}return A},v=function(y,m,x,C){const A=y[m+3],O=Math.pow(2,A-128)/255;x[C+0]=y[m+0]*O,x[C+1]=y[m+1]*O,x[C+2]=y[m+2]*O,x[C+3]=1},_=function(y,m,x,C){const A=y[m+3],O=Math.pow(2,A-128)/255;x[C+0]=ls.toHalfFloat(Math.min(y[m+0]*O,65504)),x[C+1]=ls.toHalfFloat(Math.min(y[m+1]*O,65504)),x[C+2]=ls.toHalfFloat(Math.min(y[m+2]*O,65504)),x[C+3]=ls.toHalfFloat(1)},d=new Uint8Array(e);d.pos=0;const g=h(d),b=g.width,M=g.height,E=p(d.subarray(d.pos),b,M);let w,S,T;switch(this.type){case zn:T=E.length/4;const y=new Float32Array(T*4);for(let x=0;x<T;x++)v(E,x*4,y,x*4);w=y,S=zn;break;case oi:T=E.length/4;const m=new Uint16Array(T*4);for(let x=0;x<T;x++)_(E,x*4,m,x*4);w=m,S=oi;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:b,height:M,data:w,header:g.string,gamma:g.gamma,exposure:g.exposure,type:S}}setDataType(e){return this.type=e,this}load(e,t,i,n){function r(s,o){switch(s.type){case zn:case oi:s.colorSpace=Kn,s.minFilter=Mt,s.magFilter=Mt,s.generateMipmaps=!1,s.flipY=!0;break}t&&t(s,o)}return super.load(e,r,i,n)}}function to(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function Ms(a){throw new Error('Could not dynamically require "'+a+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Yo={exports:{}},tf;function Cx(){return tf||(tf=1,(function(a,e){(function(t){a.exports=t()})(function(){return(function t(i,n,r){function s(c,u){if(!n[c]){if(!i[c]){var f=typeof Ms=="function"&&Ms;if(!u&&f)return f(c,!0);if(o)return o(c,!0);throw new Error("Cannot find module '"+c+"'")}u=n[c]={exports:{}},i[c][0].call(u.exports,function(h){var p=i[c][1][h];return s(p||h)},u,u.exports,t,i,n,r)}return n[c].exports}for(var o=typeof Ms=="function"&&Ms,l=0;l<r.length;l++)s(r[l]);return s})({1:[function(t,i,n){(function(r,s,o,l,c,u,f,h,p){var v=t("crypto");function _(S,T){T=b(S,T);var y;return(y=T.algorithm!=="passthrough"?v.createHash(T.algorithm):new w).write===void 0&&(y.write=y.update,y.end=y.update),E(T,y).dispatch(S),y.update||y.end(""),y.digest?y.digest(T.encoding==="buffer"?void 0:T.encoding):(S=y.read(),T.encoding!=="buffer"?S.toString(T.encoding):S)}(n=i.exports=_).sha1=function(S){return _(S)},n.keys=function(S){return _(S,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},n.MD5=function(S){return _(S,{algorithm:"md5",encoding:"hex"})},n.keysMD5=function(S){return _(S,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var d=v.getHashes?v.getHashes().slice():["sha1","md5"],g=(d.push("passthrough"),["buffer","hex","binary","base64"]);function b(S,T){var y={};if(y.algorithm=(T=T||{}).algorithm||"sha1",y.encoding=T.encoding||"hex",y.excludeValues=!!T.excludeValues,y.algorithm=y.algorithm.toLowerCase(),y.encoding=y.encoding.toLowerCase(),y.ignoreUnknown=T.ignoreUnknown===!0,y.respectType=T.respectType!==!1,y.respectFunctionNames=T.respectFunctionNames!==!1,y.respectFunctionProperties=T.respectFunctionProperties!==!1,y.unorderedArrays=T.unorderedArrays===!0,y.unorderedSets=T.unorderedSets!==!1,y.unorderedObjects=T.unorderedObjects!==!1,y.replacer=T.replacer||void 0,y.excludeKeys=T.excludeKeys||void 0,S===void 0)throw new Error("Object argument required.");for(var m=0;m<d.length;++m)d[m].toLowerCase()===y.algorithm.toLowerCase()&&(y.algorithm=d[m]);if(d.indexOf(y.algorithm)===-1)throw new Error('Algorithm "'+y.algorithm+'"  not supported. supported values: '+d.join(", "));if(g.indexOf(y.encoding)===-1&&y.algorithm!=="passthrough")throw new Error('Encoding "'+y.encoding+'"  not supported. supported values: '+g.join(", "));return y}function M(S){if(typeof S=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(S))!=null}function E(S,T,y){y=y||[];function m(x){return T.update?T.update(x,"utf8"):T.write(x,"utf8")}return{dispatch:function(x){return this["_"+((x=S.replacer?S.replacer(x):x)===null?"null":typeof x)](x)},_object:function(x){var C,A=Object.prototype.toString.call(x),O=/\[object (.*)\]/i.exec(A);if(O=(O=O?O[1]:"unknown:["+A+"]").toLowerCase(),0<=(A=y.indexOf(x)))return this.dispatch("[CIRCULAR:"+A+"]");if(y.push(x),o!==void 0&&o.isBuffer&&o.isBuffer(x))return m("buffer:"),m(x);if(O==="object"||O==="function"||O==="asyncfunction")return A=Object.keys(x),S.unorderedObjects&&(A=A.sort()),S.respectType===!1||M(x)||A.splice(0,0,"prototype","__proto__","constructor"),S.excludeKeys&&(A=A.filter(function(P){return!S.excludeKeys(P)})),m("object:"+A.length+":"),C=this,A.forEach(function(P){C.dispatch(P),m(":"),S.excludeValues||C.dispatch(x[P]),m(",")});if(!this["_"+O]){if(S.ignoreUnknown)return m("["+O+"]");throw new Error('Unknown object type "'+O+'"')}this["_"+O](x)},_array:function(x,P){P=P!==void 0?P:S.unorderedArrays!==!1;var A=this;if(m("array:"+x.length+":"),!P||x.length<=1)return x.forEach(function(k){return A.dispatch(k)});var O=[],P=x.map(function(k){var F=new w,X=y.slice();return E(S,F,X).dispatch(k),O=O.concat(X.slice(y.length)),F.read().toString()});return y=y.concat(O),P.sort(),this._array(P,!1)},_date:function(x){return m("date:"+x.toJSON())},_symbol:function(x){return m("symbol:"+x.toString())},_error:function(x){return m("error:"+x.toString())},_boolean:function(x){return m("bool:"+x.toString())},_string:function(x){m("string:"+x.length+":"),m(x.toString())},_function:function(x){m("fn:"),M(x)?this.dispatch("[native]"):this.dispatch(x.toString()),S.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(x.name)),S.respectFunctionProperties&&this._object(x)},_number:function(x){return m("number:"+x.toString())},_xml:function(x){return m("xml:"+x.toString())},_null:function(){return m("Null")},_undefined:function(){return m("Undefined")},_regexp:function(x){return m("regex:"+x.toString())},_uint8array:function(x){return m("uint8array:"),this.dispatch(Array.prototype.slice.call(x))},_uint8clampedarray:function(x){return m("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(x))},_int8array:function(x){return m("int8array:"),this.dispatch(Array.prototype.slice.call(x))},_uint16array:function(x){return m("uint16array:"),this.dispatch(Array.prototype.slice.call(x))},_int16array:function(x){return m("int16array:"),this.dispatch(Array.prototype.slice.call(x))},_uint32array:function(x){return m("uint32array:"),this.dispatch(Array.prototype.slice.call(x))},_int32array:function(x){return m("int32array:"),this.dispatch(Array.prototype.slice.call(x))},_float32array:function(x){return m("float32array:"),this.dispatch(Array.prototype.slice.call(x))},_float64array:function(x){return m("float64array:"),this.dispatch(Array.prototype.slice.call(x))},_arraybuffer:function(x){return m("arraybuffer:"),this.dispatch(new Uint8Array(x))},_url:function(x){return m("url:"+x.toString())},_map:function(x){return m("map:"),x=Array.from(x),this._array(x,S.unorderedSets!==!1)},_set:function(x){return m("set:"),x=Array.from(x),this._array(x,S.unorderedSets!==!1)},_file:function(x){return m("file:"),this.dispatch([x.name,x.size,x.type,x.lastModfied])},_blob:function(){if(S.ignoreUnknown)return m("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return m("domwindow")},_bigint:function(x){return m("bigint:"+x.toString())},_process:function(){return m("process")},_timer:function(){return m("timer")},_pipe:function(){return m("pipe")},_tcp:function(){return m("tcp")},_udp:function(){return m("udp")},_tty:function(){return m("tty")},_statwatcher:function(){return m("statwatcher")},_securecontext:function(){return m("securecontext")},_connection:function(){return m("connection")},_zlib:function(){return m("zlib")},_context:function(){return m("context")},_nodescript:function(){return m("nodescript")},_httpparser:function(){return m("httpparser")},_dataview:function(){return m("dataview")},_signal:function(){return m("signal")},_fsevent:function(){return m("fsevent")},_tlswrap:function(){return m("tlswrap")}}}function w(){return{buf:"",write:function(S){this.buf+=S},end:function(S){this.buf+=S},read:function(){return this.buf}}}n.writeToStream=function(S,T,y){return y===void 0&&(y=T,T={}),E(T=b(S,T),y).dispatch(S)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(t,i,n){(function(r,s,o,l,c,u,f,h,p){(function(v){var _=typeof Uint8Array<"u"?Uint8Array:Array,d=43,g=47,b=48,M=97,E=65,w=45,S=95;function T(y){return y=y.charCodeAt(0),y===d||y===w?62:y===g||y===S?63:y<b?-1:y<b+10?y-b+26+26:y<E+26?y-E:y<M+26?y-M+26:void 0}v.toByteArray=function(y){var m,x;if(0<y.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var C=y.length,C=y.charAt(C-2)==="="?2:y.charAt(C-1)==="="?1:0,A=new _(3*y.length/4-C),O=0<C?y.length-4:y.length,P=0;function k(F){A[P++]=F}for(m=0;m<O;m+=4,0)k((16711680&(x=T(y.charAt(m))<<18|T(y.charAt(m+1))<<12|T(y.charAt(m+2))<<6|T(y.charAt(m+3))))>>16),k((65280&x)>>8),k(255&x);return C==2?k(255&(x=T(y.charAt(m))<<2|T(y.charAt(m+1))>>4)):C==1&&(k((x=T(y.charAt(m))<<10|T(y.charAt(m+1))<<4|T(y.charAt(m+2))>>2)>>8&255),k(255&x)),A},v.fromByteArray=function(y){var m,x,C,A,O=y.length%3,P="";function k(F){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(F)}for(m=0,C=y.length-O;m<C;m+=3)x=(y[m]<<16)+(y[m+1]<<8)+y[m+2],P+=k((A=x)>>18&63)+k(A>>12&63)+k(A>>6&63)+k(63&A);switch(O){case 1:P=(P+=k((x=y[y.length-1])>>2))+k(x<<4&63)+"==";break;case 2:P=(P=(P+=k((x=(y[y.length-2]<<8)+y[y.length-1])>>10))+k(x>>4&63))+k(x<<2&63)+"="}return P}})(n===void 0?this.base64js={}:n)}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(t,i,n){(function(r,s,d,l,c,u,f,h,p){var v=t("base64-js"),_=t("ieee754");function d(R,D,N){if(!(this instanceof d))return new d(R,D,N);var I,re,Q,de,me=typeof R;if(D==="base64"&&me=="string")for(R=(de=R).trim?de.trim():de.replace(/^\s+|\s+$/g,"");R.length%4!=0;)R+="=";if(me=="number")I=J(R);else if(me=="string")I=d.byteLength(R,D);else{if(me!="object")throw new Error("First argument needs to be a number, array or string.");I=J(R.length)}if(d._useTypedArrays?re=d._augment(new Uint8Array(I)):((re=this).length=I,re._isBuffer=!0),d._useTypedArrays&&typeof R.byteLength=="number")re._set(R);else if(q(de=R)||d.isBuffer(de)||de&&typeof de=="object"&&typeof de.length=="number")for(Q=0;Q<I;Q++)d.isBuffer(R)?re[Q]=R.readUInt8(Q):re[Q]=R[Q];else if(me=="string")re.write(R,0,D);else if(me=="number"&&!d._useTypedArrays&&!N)for(Q=0;Q<I;Q++)re[Q]=0;return re}function g(R,D,N,I){return d._charsWritten=z((function(re){for(var Q=[],de=0;de<re.length;de++)Q.push(255&re.charCodeAt(de));return Q})(D),R,N,I)}function b(R,D,N,I){return d._charsWritten=z((function(re){for(var Q,de,me=[],Ae=0;Ae<re.length;Ae++)de=re.charCodeAt(Ae),Q=de>>8,de=de%256,me.push(de),me.push(Q);return me})(D),R,N,I)}function M(R,D,N){var I="";N=Math.min(R.length,N);for(var re=D;re<N;re++)I+=String.fromCharCode(R[re]);return I}function E(R,D,N,Q){Q||(Y(typeof N=="boolean","missing or invalid endian"),Y(D!=null,"missing offset"),Y(D+1<R.length,"Trying to read beyond buffer length"));var re,Q=R.length;if(!(Q<=D))return N?(re=R[D],D+1<Q&&(re|=R[D+1]<<8)):(re=R[D]<<8,D+1<Q&&(re|=R[D+1])),re}function w(R,D,N,Q){Q||(Y(typeof N=="boolean","missing or invalid endian"),Y(D!=null,"missing offset"),Y(D+3<R.length,"Trying to read beyond buffer length"));var re,Q=R.length;if(!(Q<=D))return N?(D+2<Q&&(re=R[D+2]<<16),D+1<Q&&(re|=R[D+1]<<8),re|=R[D],D+3<Q&&(re+=R[D+3]<<24>>>0)):(D+1<Q&&(re=R[D+1]<<16),D+2<Q&&(re|=R[D+2]<<8),D+3<Q&&(re|=R[D+3]),re+=R[D]<<24>>>0),re}function S(R,D,N,I){if(I||(Y(typeof N=="boolean","missing or invalid endian"),Y(D!=null,"missing offset"),Y(D+1<R.length,"Trying to read beyond buffer length")),!(R.length<=D))return I=E(R,D,N,!0),32768&I?-1*(65535-I+1):I}function T(R,D,N,I){if(I||(Y(typeof N=="boolean","missing or invalid endian"),Y(D!=null,"missing offset"),Y(D+3<R.length,"Trying to read beyond buffer length")),!(R.length<=D))return I=w(R,D,N,!0),2147483648&I?-1*(4294967295-I+1):I}function y(R,D,N,I){return I||(Y(typeof N=="boolean","missing or invalid endian"),Y(D+3<R.length,"Trying to read beyond buffer length")),_.read(R,D,N,23,4)}function m(R,D,N,I){return I||(Y(typeof N=="boolean","missing or invalid endian"),Y(D+7<R.length,"Trying to read beyond buffer length")),_.read(R,D,N,52,8)}function x(R,D,N,I,re){if(re||(Y(D!=null,"missing value"),Y(typeof I=="boolean","missing or invalid endian"),Y(N!=null,"missing offset"),Y(N+1<R.length,"trying to write beyond buffer length"),K(D,65535)),re=R.length,!(re<=N))for(var Q=0,de=Math.min(re-N,2);Q<de;Q++)R[N+Q]=(D&255<<8*(I?Q:1-Q))>>>8*(I?Q:1-Q)}function C(R,D,N,I,re){if(re||(Y(D!=null,"missing value"),Y(typeof I=="boolean","missing or invalid endian"),Y(N!=null,"missing offset"),Y(N+3<R.length,"trying to write beyond buffer length"),K(D,4294967295)),re=R.length,!(re<=N))for(var Q=0,de=Math.min(re-N,4);Q<de;Q++)R[N+Q]=D>>>8*(I?Q:3-Q)&255}function A(R,D,N,I,re){re||(Y(D!=null,"missing value"),Y(typeof I=="boolean","missing or invalid endian"),Y(N!=null,"missing offset"),Y(N+1<R.length,"Trying to write beyond buffer length"),ne(D,32767,-32768)),R.length<=N||x(R,0<=D?D:65535+D+1,N,I,re)}function O(R,D,N,I,re){re||(Y(D!=null,"missing value"),Y(typeof I=="boolean","missing or invalid endian"),Y(N!=null,"missing offset"),Y(N+3<R.length,"Trying to write beyond buffer length"),ne(D,2147483647,-2147483648)),R.length<=N||C(R,0<=D?D:4294967295+D+1,N,I,re)}function P(R,D,N,I,re){re||(Y(D!=null,"missing value"),Y(typeof I=="boolean","missing or invalid endian"),Y(N!=null,"missing offset"),Y(N+3<R.length,"Trying to write beyond buffer length"),$(D,34028234663852886e22,-34028234663852886e22)),R.length<=N||_.write(R,D,N,I,23,4)}function k(R,D,N,I,re){re||(Y(D!=null,"missing value"),Y(typeof I=="boolean","missing or invalid endian"),Y(N!=null,"missing offset"),Y(N+7<R.length,"Trying to write beyond buffer length"),$(D,17976931348623157e292,-17976931348623157e292)),R.length<=N||_.write(R,D,N,I,52,8)}n.Buffer=d,n.SlowBuffer=d,n.INSPECT_MAX_BYTES=50,d.poolSize=8192,d._useTypedArrays=(function(){try{var R=new ArrayBuffer(0),D=new Uint8Array(R);return D.foo=function(){return 42},D.foo()===42&&typeof D.subarray=="function"}catch{return!1}})(),d.isEncoding=function(R){switch(String(R).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},d.isBuffer=function(R){return!(R==null||!R._isBuffer)},d.byteLength=function(R,D){var N;switch(R+="",D||"utf8"){case"hex":N=R.length/2;break;case"utf8":case"utf-8":N=G(R).length;break;case"ascii":case"binary":case"raw":N=R.length;break;case"base64":N=W(R).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":N=2*R.length;break;default:throw new Error("Unknown encoding")}return N},d.concat=function(R,D){if(Y(q(R),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),R.length===0)return new d(0);if(R.length===1)return R[0];if(typeof D!="number")for(re=D=0;re<R.length;re++)D+=R[re].length;for(var N=new d(D),I=0,re=0;re<R.length;re++){var Q=R[re];Q.copy(N,I),I+=Q.length}return N},d.prototype.write=function(R,D,N,I){isFinite(D)?isFinite(N)||(I=N,N=void 0):(Ae=I,I=D,D=N,N=Ae),D=Number(D)||0;var re,Q,de,me,Ae=this.length-D;switch((!N||Ae<(N=Number(N)))&&(N=Ae),I=String(I||"utf8").toLowerCase()){case"hex":re=(function(ae,pe,xe,te){xe=Number(xe)||0;var be=ae.length-xe;(!te||be<(te=Number(te)))&&(te=be),Y((be=pe.length)%2==0,"Invalid hex string"),be/2<te&&(te=be/2);for(var U=0;U<te;U++){var L=parseInt(pe.substr(2*U,2),16);Y(!isNaN(L),"Invalid hex string"),ae[xe+U]=L}return d._charsWritten=2*U,U})(this,R,D,N);break;case"utf8":case"utf-8":Q=this,de=D,me=N,re=d._charsWritten=z(G(R),Q,de,me);break;case"ascii":case"binary":re=g(this,R,D,N);break;case"base64":Q=this,de=D,me=N,re=d._charsWritten=z(W(R),Q,de,me);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":re=b(this,R,D,N);break;default:throw new Error("Unknown encoding")}return re},d.prototype.toString=function(R,D,N){var I,re,Q,de,me=this;if(R=String(R||"utf8").toLowerCase(),D=Number(D)||0,(N=N!==void 0?Number(N):me.length)===D)return"";switch(R){case"hex":I=(function(Ae,ae,pe){var xe=Ae.length;(!ae||ae<0)&&(ae=0),(!pe||pe<0||xe<pe)&&(pe=xe);for(var te="",be=ae;be<pe;be++)te+=V(Ae[be]);return te})(me,D,N);break;case"utf8":case"utf-8":I=(function(Ae,ae,pe){var xe="",te="";pe=Math.min(Ae.length,pe);for(var be=ae;be<pe;be++)Ae[be]<=127?(xe+=H(te)+String.fromCharCode(Ae[be]),te=""):te+="%"+Ae[be].toString(16);return xe+H(te)})(me,D,N);break;case"ascii":case"binary":I=M(me,D,N);break;case"base64":re=me,de=N,I=(Q=D)===0&&de===re.length?v.fromByteArray(re):v.fromByteArray(re.slice(Q,de));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":I=(function(Ae,ae,pe){for(var xe=Ae.slice(ae,pe),te="",be=0;be<xe.length;be+=2)te+=String.fromCharCode(xe[be]+256*xe[be+1]);return te})(me,D,N);break;default:throw new Error("Unknown encoding")}return I},d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},d.prototype.copy=function(R,D,N,I){if(D=D||0,(I=I||I===0?I:this.length)!==(N=N||0)&&R.length!==0&&this.length!==0){Y(N<=I,"sourceEnd < sourceStart"),Y(0<=D&&D<R.length,"targetStart out of bounds"),Y(0<=N&&N<this.length,"sourceStart out of bounds"),Y(0<=I&&I<=this.length,"sourceEnd out of bounds"),I>this.length&&(I=this.length);var re=(I=R.length-D<I-N?R.length-D+N:I)-N;if(re<100||!d._useTypedArrays)for(var Q=0;Q<re;Q++)R[Q+D]=this[Q+N];else R._set(this.subarray(N,N+re),D)}},d.prototype.slice=function(R,D){var N=this.length;if(R=X(R,N,0),D=X(D,N,N),d._useTypedArrays)return d._augment(this.subarray(R,D));for(var I=D-R,re=new d(I,void 0,!0),Q=0;Q<I;Q++)re[Q]=this[Q+R];return re},d.prototype.get=function(R){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(R)},d.prototype.set=function(R,D){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(R,D)},d.prototype.readUInt8=function(R,D){if(D||(Y(R!=null,"missing offset"),Y(R<this.length,"Trying to read beyond buffer length")),!(R>=this.length))return this[R]},d.prototype.readUInt16LE=function(R,D){return E(this,R,!0,D)},d.prototype.readUInt16BE=function(R,D){return E(this,R,!1,D)},d.prototype.readUInt32LE=function(R,D){return w(this,R,!0,D)},d.prototype.readUInt32BE=function(R,D){return w(this,R,!1,D)},d.prototype.readInt8=function(R,D){if(D||(Y(R!=null,"missing offset"),Y(R<this.length,"Trying to read beyond buffer length")),!(R>=this.length))return 128&this[R]?-1*(255-this[R]+1):this[R]},d.prototype.readInt16LE=function(R,D){return S(this,R,!0,D)},d.prototype.readInt16BE=function(R,D){return S(this,R,!1,D)},d.prototype.readInt32LE=function(R,D){return T(this,R,!0,D)},d.prototype.readInt32BE=function(R,D){return T(this,R,!1,D)},d.prototype.readFloatLE=function(R,D){return y(this,R,!0,D)},d.prototype.readFloatBE=function(R,D){return y(this,R,!1,D)},d.prototype.readDoubleLE=function(R,D){return m(this,R,!0,D)},d.prototype.readDoubleBE=function(R,D){return m(this,R,!1,D)},d.prototype.writeUInt8=function(R,D,N){N||(Y(R!=null,"missing value"),Y(D!=null,"missing offset"),Y(D<this.length,"trying to write beyond buffer length"),K(R,255)),D>=this.length||(this[D]=R)},d.prototype.writeUInt16LE=function(R,D,N){x(this,R,D,!0,N)},d.prototype.writeUInt16BE=function(R,D,N){x(this,R,D,!1,N)},d.prototype.writeUInt32LE=function(R,D,N){C(this,R,D,!0,N)},d.prototype.writeUInt32BE=function(R,D,N){C(this,R,D,!1,N)},d.prototype.writeInt8=function(R,D,N){N||(Y(R!=null,"missing value"),Y(D!=null,"missing offset"),Y(D<this.length,"Trying to write beyond buffer length"),ne(R,127,-128)),D>=this.length||(0<=R?this.writeUInt8(R,D,N):this.writeUInt8(255+R+1,D,N))},d.prototype.writeInt16LE=function(R,D,N){A(this,R,D,!0,N)},d.prototype.writeInt16BE=function(R,D,N){A(this,R,D,!1,N)},d.prototype.writeInt32LE=function(R,D,N){O(this,R,D,!0,N)},d.prototype.writeInt32BE=function(R,D,N){O(this,R,D,!1,N)},d.prototype.writeFloatLE=function(R,D,N){P(this,R,D,!0,N)},d.prototype.writeFloatBE=function(R,D,N){P(this,R,D,!1,N)},d.prototype.writeDoubleLE=function(R,D,N){k(this,R,D,!0,N)},d.prototype.writeDoubleBE=function(R,D,N){k(this,R,D,!1,N)},d.prototype.fill=function(R,D,N){if(D=D||0,N=N||this.length,Y(typeof(R=typeof(R=R||0)=="string"?R.charCodeAt(0):R)=="number"&&!isNaN(R),"value is not a number"),Y(D<=N,"end < start"),N!==D&&this.length!==0){Y(0<=D&&D<this.length,"start out of bounds"),Y(0<=N&&N<=this.length,"end out of bounds");for(var I=D;I<N;I++)this[I]=R}},d.prototype.inspect=function(){for(var R=[],D=this.length,N=0;N<D;N++)if(R[N]=V(this[N]),N===n.INSPECT_MAX_BYTES){R[N+1]="...";break}return"<Buffer "+R.join(" ")+">"},d.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(d._useTypedArrays)return new d(this).buffer;for(var R=new Uint8Array(this.length),D=0,N=R.length;D<N;D+=1)R[D]=this[D];return R.buffer};var F=d.prototype;function X(R,D,N){return typeof R!="number"?N:D<=(R=~~R)?D:0<=R||0<=(R+=D)?R:0}function J(R){return(R=~~Math.ceil(+R))<0?0:R}function q(R){return(Array.isArray||function(D){return Object.prototype.toString.call(D)==="[object Array]"})(R)}function V(R){return R<16?"0"+R.toString(16):R.toString(16)}function G(R){for(var D=[],N=0;N<R.length;N++){var I=R.charCodeAt(N);if(I<=127)D.push(R.charCodeAt(N));else for(var re=N,Q=(55296<=I&&I<=57343&&N++,encodeURIComponent(R.slice(re,N+1)).substr(1).split("%")),de=0;de<Q.length;de++)D.push(parseInt(Q[de],16))}return D}function W(R){return v.toByteArray(R)}function z(R,D,N,I){for(var re=0;re<I&&!(re+N>=D.length||re>=R.length);re++)D[re+N]=R[re];return re}function H(R){try{return decodeURIComponent(R)}catch{return"�"}}function K(R,D){Y(typeof R=="number","cannot write a non-number as a number"),Y(0<=R,"specified a negative value for writing an unsigned value"),Y(R<=D,"value is larger than maximum value for type"),Y(Math.floor(R)===R,"value has a fractional component")}function ne(R,D,N){Y(typeof R=="number","cannot write a non-number as a number"),Y(R<=D,"value larger than maximum allowed value"),Y(N<=R,"value smaller than minimum allowed value"),Y(Math.floor(R)===R,"value has a fractional component")}function $(R,D,N){Y(typeof R=="number","cannot write a non-number as a number"),Y(R<=D,"value larger than maximum allowed value"),Y(N<=R,"value smaller than minimum allowed value")}function Y(R,D){if(!R)throw new Error(D||"Failed assertion")}d._augment=function(R){return R._isBuffer=!0,R._get=R.get,R._set=R.set,R.get=F.get,R.set=F.set,R.write=F.write,R.toString=F.toString,R.toLocaleString=F.toString,R.toJSON=F.toJSON,R.copy=F.copy,R.slice=F.slice,R.readUInt8=F.readUInt8,R.readUInt16LE=F.readUInt16LE,R.readUInt16BE=F.readUInt16BE,R.readUInt32LE=F.readUInt32LE,R.readUInt32BE=F.readUInt32BE,R.readInt8=F.readInt8,R.readInt16LE=F.readInt16LE,R.readInt16BE=F.readInt16BE,R.readInt32LE=F.readInt32LE,R.readInt32BE=F.readInt32BE,R.readFloatLE=F.readFloatLE,R.readFloatBE=F.readFloatBE,R.readDoubleLE=F.readDoubleLE,R.readDoubleBE=F.readDoubleBE,R.writeUInt8=F.writeUInt8,R.writeUInt16LE=F.writeUInt16LE,R.writeUInt16BE=F.writeUInt16BE,R.writeUInt32LE=F.writeUInt32LE,R.writeUInt32BE=F.writeUInt32BE,R.writeInt8=F.writeInt8,R.writeInt16LE=F.writeInt16LE,R.writeInt16BE=F.writeInt16BE,R.writeInt32LE=F.writeInt32LE,R.writeInt32BE=F.writeInt32BE,R.writeFloatLE=F.writeFloatLE,R.writeFloatBE=F.writeFloatBE,R.writeDoubleLE=F.writeDoubleLE,R.writeDoubleBE=F.writeDoubleBE,R.fill=F.fill,R.inspect=F.inspect,R.toArrayBuffer=F.toArrayBuffer,R}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(t,i,n){(function(r,s,v,l,c,u,f,h,p){var v=t("buffer").Buffer,_=4,d=new v(_);d.fill(0),i.exports={hash:function(g,b,M,E){for(var w=b((function(x,C){x.length%_!=0&&(A=x.length+(_-x.length%_),x=v.concat([x,d],A));for(var A,O=[],P=C?x.readInt32BE:x.readInt32LE,k=0;k<x.length;k+=_)O.push(P.call(x,k));return O})(g=v.isBuffer(g)?g:new v(g),E),8*g.length),b=E,S=new v(M),T=b?S.writeInt32BE:S.writeInt32LE,y=0;y<w.length;y++)T.call(S,w[y],4*y,!0);return S}}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(t,i,n){(function(r,s,v,l,c,u,f,h,p){var v=t("buffer").Buffer,_=t("./sha"),d=t("./sha256"),g=t("./rng"),b={sha1:_,sha256:d,md5:t("./md5")},M=64,E=new v(M);function w(x,C){var A=b[x=x||"sha1"],O=[];return A||S("algorithm:",x,"is not yet supported"),{update:function(P){return v.isBuffer(P)||(P=new v(P)),O.push(P),P.length,this},digest:function(P){var k=v.concat(O),k=C?(function(F,X,J){v.isBuffer(X)||(X=new v(X)),v.isBuffer(J)||(J=new v(J)),X.length>M?X=F(X):X.length<M&&(X=v.concat([X,E],M));for(var q=new v(M),V=new v(M),G=0;G<M;G++)q[G]=54^X[G],V[G]=92^X[G];return J=F(v.concat([q,J])),F(v.concat([V,J]))})(A,C,k):A(k);return O=null,P?k.toString(P):k}}}function S(){var x=[].slice.call(arguments).join(" ");throw new Error([x,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}E.fill(0),n.createHash=function(x){return w(x)},n.createHmac=w,n.randomBytes=function(x,C){if(!C||!C.call)return new v(g(x));try{C.call(this,void 0,new v(g(x)))}catch(A){C(A)}};var T,y=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],m=function(x){n[x]=function(){S("sorry,",x,"is not implemented yet")}};for(T in y)m(y[T])}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(t,i,n){(function(r,s,o,l,c,u,f,h,p){var v=t("./helpers");function _(S,T){S[T>>5]|=128<<T%32,S[14+(T+64>>>9<<4)]=T;for(var y=1732584193,m=-271733879,x=-1732584194,C=271733878,A=0;A<S.length;A+=16){var O=y,P=m,k=x,F=C,y=g(y,m,x,C,S[A+0],7,-680876936),C=g(C,y,m,x,S[A+1],12,-389564586),x=g(x,C,y,m,S[A+2],17,606105819),m=g(m,x,C,y,S[A+3],22,-1044525330);y=g(y,m,x,C,S[A+4],7,-176418897),C=g(C,y,m,x,S[A+5],12,1200080426),x=g(x,C,y,m,S[A+6],17,-1473231341),m=g(m,x,C,y,S[A+7],22,-45705983),y=g(y,m,x,C,S[A+8],7,1770035416),C=g(C,y,m,x,S[A+9],12,-1958414417),x=g(x,C,y,m,S[A+10],17,-42063),m=g(m,x,C,y,S[A+11],22,-1990404162),y=g(y,m,x,C,S[A+12],7,1804603682),C=g(C,y,m,x,S[A+13],12,-40341101),x=g(x,C,y,m,S[A+14],17,-1502002290),y=b(y,m=g(m,x,C,y,S[A+15],22,1236535329),x,C,S[A+1],5,-165796510),C=b(C,y,m,x,S[A+6],9,-1069501632),x=b(x,C,y,m,S[A+11],14,643717713),m=b(m,x,C,y,S[A+0],20,-373897302),y=b(y,m,x,C,S[A+5],5,-701558691),C=b(C,y,m,x,S[A+10],9,38016083),x=b(x,C,y,m,S[A+15],14,-660478335),m=b(m,x,C,y,S[A+4],20,-405537848),y=b(y,m,x,C,S[A+9],5,568446438),C=b(C,y,m,x,S[A+14],9,-1019803690),x=b(x,C,y,m,S[A+3],14,-187363961),m=b(m,x,C,y,S[A+8],20,1163531501),y=b(y,m,x,C,S[A+13],5,-1444681467),C=b(C,y,m,x,S[A+2],9,-51403784),x=b(x,C,y,m,S[A+7],14,1735328473),y=M(y,m=b(m,x,C,y,S[A+12],20,-1926607734),x,C,S[A+5],4,-378558),C=M(C,y,m,x,S[A+8],11,-2022574463),x=M(x,C,y,m,S[A+11],16,1839030562),m=M(m,x,C,y,S[A+14],23,-35309556),y=M(y,m,x,C,S[A+1],4,-1530992060),C=M(C,y,m,x,S[A+4],11,1272893353),x=M(x,C,y,m,S[A+7],16,-155497632),m=M(m,x,C,y,S[A+10],23,-1094730640),y=M(y,m,x,C,S[A+13],4,681279174),C=M(C,y,m,x,S[A+0],11,-358537222),x=M(x,C,y,m,S[A+3],16,-722521979),m=M(m,x,C,y,S[A+6],23,76029189),y=M(y,m,x,C,S[A+9],4,-640364487),C=M(C,y,m,x,S[A+12],11,-421815835),x=M(x,C,y,m,S[A+15],16,530742520),y=E(y,m=M(m,x,C,y,S[A+2],23,-995338651),x,C,S[A+0],6,-198630844),C=E(C,y,m,x,S[A+7],10,1126891415),x=E(x,C,y,m,S[A+14],15,-1416354905),m=E(m,x,C,y,S[A+5],21,-57434055),y=E(y,m,x,C,S[A+12],6,1700485571),C=E(C,y,m,x,S[A+3],10,-1894986606),x=E(x,C,y,m,S[A+10],15,-1051523),m=E(m,x,C,y,S[A+1],21,-2054922799),y=E(y,m,x,C,S[A+8],6,1873313359),C=E(C,y,m,x,S[A+15],10,-30611744),x=E(x,C,y,m,S[A+6],15,-1560198380),m=E(m,x,C,y,S[A+13],21,1309151649),y=E(y,m,x,C,S[A+4],6,-145523070),C=E(C,y,m,x,S[A+11],10,-1120210379),x=E(x,C,y,m,S[A+2],15,718787259),m=E(m,x,C,y,S[A+9],21,-343485551),y=w(y,O),m=w(m,P),x=w(x,k),C=w(C,F)}return Array(y,m,x,C)}function d(S,T,y,m,x,C){return w((T=w(w(T,S),w(m,C)))<<x|T>>>32-x,y)}function g(S,T,y,m,x,C,A){return d(T&y|~T&m,S,T,x,C,A)}function b(S,T,y,m,x,C,A){return d(T&m|y&~m,S,T,x,C,A)}function M(S,T,y,m,x,C,A){return d(T^y^m,S,T,x,C,A)}function E(S,T,y,m,x,C,A){return d(y^(T|~m),S,T,x,C,A)}function w(S,T){var y=(65535&S)+(65535&T);return(S>>16)+(T>>16)+(y>>16)<<16|65535&y}i.exports=function(S){return v.hash(S,_,16)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(t,i,n){(function(r,s,o,l,c,u,f,h,p){i.exports=function(v){for(var _,d=new Array(v),g=0;g<v;g++)(3&g)==0&&(_=4294967296*Math.random()),d[g]=_>>>((3&g)<<3)&255;return d}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(t,i,n){(function(r,s,o,l,c,u,f,h,p){var v=t("./helpers");function _(b,M){b[M>>5]|=128<<24-M%32,b[15+(M+64>>9<<4)]=M;for(var E,w,S,T=Array(80),y=1732584193,m=-271733879,x=-1732584194,C=271733878,A=-1009589776,O=0;O<b.length;O+=16){for(var P=y,k=m,F=x,X=C,J=A,q=0;q<80;q++){T[q]=q<16?b[O+q]:g(T[q-3]^T[q-8]^T[q-14]^T[q-16],1);var V=d(d(g(y,5),(V=m,w=x,S=C,(E=q)<20?V&w|~V&S:!(E<40)&&E<60?V&w|V&S|w&S:V^w^S)),d(d(A,T[q]),(E=q)<20?1518500249:E<40?1859775393:E<60?-1894007588:-899497514)),A=C,C=x,x=g(m,30),m=y,y=V}y=d(y,P),m=d(m,k),x=d(x,F),C=d(C,X),A=d(A,J)}return Array(y,m,x,C,A)}function d(b,M){var E=(65535&b)+(65535&M);return(b>>16)+(M>>16)+(E>>16)<<16|65535&E}function g(b,M){return b<<M|b>>>32-M}i.exports=function(b){return v.hash(b,_,20,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(t,i,n){(function(r,s,o,l,c,u,f,h,p){function v(M,E){var w=(65535&M)+(65535&E);return(M>>16)+(E>>16)+(w>>16)<<16|65535&w}function _(M,E){var w,S=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),T=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),y=new Array(64);M[E>>5]|=128<<24-E%32,M[15+(E+64>>9<<4)]=E;for(var m,x,C=0;C<M.length;C+=16){for(var A=T[0],O=T[1],P=T[2],k=T[3],F=T[4],X=T[5],J=T[6],q=T[7],V=0;V<64;V++)y[V]=V<16?M[V+C]:v(v(v((x=y[V-2],g(x,17)^g(x,19)^b(x,10)),y[V-7]),(x=y[V-15],g(x,7)^g(x,18)^b(x,3))),y[V-16]),w=v(v(v(v(q,g(x=F,6)^g(x,11)^g(x,25)),F&X^~F&J),S[V]),y[V]),m=v(g(m=A,2)^g(m,13)^g(m,22),A&O^A&P^O&P),q=J,J=X,X=F,F=v(k,w),k=P,P=O,O=A,A=v(w,m);T[0]=v(A,T[0]),T[1]=v(O,T[1]),T[2]=v(P,T[2]),T[3]=v(k,T[3]),T[4]=v(F,T[4]),T[5]=v(X,T[5]),T[6]=v(J,T[6]),T[7]=v(q,T[7])}return T}var d=t("./helpers"),g=function(M,E){return M>>>E|M<<32-E},b=function(M,E){return M>>>E};i.exports=function(M){return d.hash(M,_,32,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(t,i,n){(function(r,s,o,l,c,u,f,h,p){n.read=function(v,_,d,g,C){var M,E,w=8*C-g-1,S=(1<<w)-1,T=S>>1,y=-7,m=d?C-1:0,x=d?-1:1,C=v[_+m];for(m+=x,M=C&(1<<-y)-1,C>>=-y,y+=w;0<y;M=256*M+v[_+m],m+=x,y-=8);for(E=M&(1<<-y)-1,M>>=-y,y+=g;0<y;E=256*E+v[_+m],m+=x,y-=8);if(M===0)M=1-T;else{if(M===S)return E?NaN:1/0*(C?-1:1);E+=Math.pow(2,g),M-=T}return(C?-1:1)*E*Math.pow(2,M-g)},n.write=function(v,_,d,g,b,A){var E,w,S=8*A-b-1,T=(1<<S)-1,y=T>>1,m=b===23?Math.pow(2,-24)-Math.pow(2,-77):0,x=g?0:A-1,C=g?1:-1,A=_<0||_===0&&1/_<0?1:0;for(_=Math.abs(_),isNaN(_)||_===1/0?(w=isNaN(_)?1:0,E=T):(E=Math.floor(Math.log(_)/Math.LN2),_*(g=Math.pow(2,-E))<1&&(E--,g*=2),2<=(_+=1<=E+y?m/g:m*Math.pow(2,1-y))*g&&(E++,g/=2),T<=E+y?(w=0,E=T):1<=E+y?(w=(_*g-1)*Math.pow(2,b),E+=y):(w=_*Math.pow(2,y-1)*Math.pow(2,b),E=0));8<=b;v[d+x]=255&w,x+=C,w/=256,b-=8);for(E=E<<b|w,S+=b;0<S;v[d+x]=255&E,x+=C,E/=256,S-=8);v[d+x-C]|=128*A}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(t,i,n){(function(r,s,o,l,c,u,f,h,p){var v,_,d;function g(){}(r=i.exports={}).nextTick=(_=typeof window<"u"&&window.setImmediate,d=typeof window<"u"&&window.postMessage&&window.addEventListener,_?function(b){return window.setImmediate(b)}:d?(v=[],window.addEventListener("message",function(b){var M=b.source;M!==window&&M!==null||b.data!=="process-tick"||(b.stopPropagation(),0<v.length&&v.shift()())},!0),function(b){v.push(b),window.postMessage("process-tick","*")}):function(b){setTimeout(b,0)}),r.title="browser",r.browser=!0,r.env={},r.argv=[],r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.binding=function(b){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(b){throw new Error("process.chdir is not supported")}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(Yo)),Yo.exports}var Px=Cx();const Lx=to(Px);var Ko,nf;function Lh(){return nf||(nf=1,Ko=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","uint","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"]),Ko}var Zo,rf;function Dx(){return rf||(rf=1,Zo=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"]),Zo}var Jo,af;function Dh(){return af||(af=1,Jo=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"]),Jo}var Qo,sf;function Ux(){if(sf)return Qo;sf=1;var a=Lh();return Qo=a.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"]),Qo}var $o,of;function Ix(){if(of)return $o;of=1;var a=Dh();return a=a.slice().filter(function(e){return!/^(gl\_|texture)/.test(e)}),$o=a.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]),$o}var el,lf;function Fx(){if(lf)return el;lf=1,el=E;var a=Lh(),e=Dx(),t=Dh(),i=Ux(),n=Ix(),r=999,s=9999,o=0,l=1,c=2,u=3,f=4,h=5,p=6,v=7,_=8,d=9,g=10,b=11,M=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function E(w){var S=0,T=0,y=r,m,x,C=[],A=[],O=1,P=0,k=0,F=!1,X=!1,J="",q;w=w||{};var V=t,G=a;w.version==="300 es"&&(V=n,G=i);for(var W={},z={},S=0;S<V.length;S++)W[V[S]]=!0;for(var S=0;S<G.length;S++)z[G[S]]=!0;return function(ae){return A=[],ae!==null?K(ae):ne()};function H(ae){ae.length&&A.push({type:M[y],data:ae,position:k,line:O,column:P})}function K(ae){S=0,ae.toString&&(ae=ae.toString()),J+=ae.replace(/\r\n/g,`
`),q=J.length;for(var pe;m=J[S],S<q;){switch(pe=S,y){case o:S=N();break;case l:S=D();break;case c:S=R();break;case u:S=I();break;case f:S=de();break;case b:S=Q();break;case h:S=me();break;case s:S=Ae();break;case d:S=Y();break;case r:S=$();break}if(pe!==S)switch(J[pe]){case`
`:P=0,++O;break;default:++P;break}}return T+=S,J=J.slice(S),A}function ne(ae){return C.length&&H(C.join("")),y=g,H("(eof)"),A}function $(){return C=C.length?[]:C,x==="/"&&m==="*"?(k=T+S-1,y=o,x=m,S+1):x==="/"&&m==="/"?(k=T+S-1,y=l,x=m,S+1):m==="#"?(y=c,k=T+S,S):/\s/.test(m)?(y=d,k=T+S,S):(F=/\d/.test(m),X=/[^\w_]/.test(m),k=T+S,y=F?f:X?u:s,S)}function Y(){return/[^\s]/g.test(m)?(H(C.join("")),y=r,S):(C.push(m),x=m,S+1)}function R(){return(m==="\r"||m===`
`)&&x!=="\\"?(H(C.join("")),y=r,S):(C.push(m),x=m,S+1)}function D(){return R()}function N(){return m==="/"&&x==="*"?(C.push(m),H(C.join("")),y=r,S+1):(C.push(m),x=m,S+1)}function I(){if(x==="."&&/\d/.test(m))return y=h,S;if(x==="/"&&m==="*")return y=o,S;if(x==="/"&&m==="/")return y=l,S;if(m==="."&&C.length){for(;re(C););return y=h,S}if(m===";"||m===")"||m==="("){if(C.length)for(;re(C););return H(m),y=r,S+1}var ae=C.length===2&&m!=="=";if(/[\w_\d\s]/.test(m)||ae){for(;re(C););return y=r,S}return C.push(m),x=m,S+1}function re(ae){var pe=0,xe,te;do{if(xe=e.indexOf(ae.slice(0,ae.length+pe).join("")),te=e[xe],xe===-1){if(pe--+ae.length>0)continue;te=ae.slice(0,1).join("")}return H(te),k+=te.length,C=C.slice(te.length),C.length}while(!0)}function Q(){return/[^a-fA-F0-9]/.test(m)?(H(C.join("")),y=r,S):(C.push(m),x=m,S+1)}function de(){return m==="."||/[eE]/.test(m)?(C.push(m),y=h,x=m,S+1):m==="x"&&C.length===1&&C[0]==="0"?(y=b,C.push(m),x=m,S+1):/[^\d]/.test(m)?(H(C.join("")),y=r,S):(C.push(m),x=m,S+1)}function me(){return m==="f"&&(C.push(m),x=m,S+=1),/[eE]/.test(m)||(m==="-"||m==="+")&&/[eE]/.test(x)?(C.push(m),x=m,S+1):/[^\d]/.test(m)?(H(C.join("")),y=r,S):(C.push(m),x=m,S+1)}function Ae(){if(/[^\d\w_]/.test(m)){var ae=C.join("");return z[ae]?y=_:W[ae]?y=v:y=p,H(C.join("")),y=r,S}return C.push(m),x=m,S+1}}return el}var tl,cf;function Ox(){if(cf)return tl;cf=1;var a=Fx();tl=e;function e(t,i){var n=a(i),r=[];return r=r.concat(n(t)),r=r.concat(n(null)),r}return tl}var Nx=Ox();const Bx=to(Nx);var nl,uf;function kx(){if(uf)return nl;uf=1,nl=a;function a(e){for(var t=[],i=0;i<e.length;i++)e[i].type!=="eof"&&t.push(e[i].data);return t.join("")}return nl}var Gx=kx();const ff=to(Gx);var il,hf;function zx(){if(hf)return il;hf=1,il=a;function a(i){var n=null,r=null,s=0,o=0,l=0,c=0,u=0,f=[],h,p,v;for(h=0,p;h<i.length;h++)if(v=i[h],v.data==="{"){if(s&&s++||(p=d(h,e(")"),e()),p<0)||(c=p,p=d(p,e("("),e(")")),p<0)||(u=p,p=d(p,t),p<0)||i[p].type!=="ident"||(r=i[p].data,p=d(p,t),p<0))continue;s=1,o=h,n=i[p].data,l=p;var _=d(p,t);switch(i[_]&&i[_].data){case"lowp":case"highp":case"mediump":l=_}}else if(s&&v.data==="}"){if(--s)continue;f.push({name:r,type:n,body:[o+1,h],args:[u,c+1],outer:[l,h+1]})}for(h=0;h<i.length;h++)if(v=i[h],v.data===";"){if(p=d(h,e(")"),e()),p<0||(c=p,p=d(p,e("("),e(")")),p<0)||(u=p,p=d(p,t),p<0)||i[p].type!=="ident"||(r=i[p].data,p=d(p,t),p<0)||i[p].type==="operator"||i[p].data==="return")continue;n=i[p].data,f.push({name:r,type:n,body:!1,args:[u,c+1],outer:[p,h+1]})}return f.sort(function(g,b){return g.outer[0]-b.outer[0]});function d(g,b,M){for(var E=g-1;E>=0;E--){if(b(i[E]))return E;if(M&&M(i[E]))return-1}return-1}}function e(i){return function(n){return n.type==="operator"&&(!i||n.data===i)}}function t(i){return i.type!=="whitespace"}return il}var Vx=zx();const Hx=to(Vx);function Wx(a,e){if(typeof a!="object"||a===null)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var i=t.call(a,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function Uh(a){var e=Wx(a,"string");return typeof e=="symbol"?e:String(e)}function tt(a,e,t){return e=Uh(e),e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function df(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);e&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),t.push.apply(t,i)}return t}function Rr(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?df(Object(t),!0).forEach(function(i){tt(a,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):df(Object(t)).forEach(function(i){Object.defineProperty(a,i,Object.getOwnPropertyDescriptor(t,i))})}return a}function Xx(a,e){if(a==null)return{};var t={},i=Object.keys(a),n,r;for(r=0;r<i.length;r++)n=i[r],!(e.indexOf(n)>=0)&&(t[n]=a[n]);return t}function qx(a,e){if(a==null)return{};var t=Xx(a,e),i,n;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)i=r[n],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(a,i)&&(t[i]=a[i])}return t}function jx(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function Yx(a,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,Uh(i.key),i)}}function Kx(a,e,t){return e&&Yx(a.prototype,e),Object.defineProperty(a,"prototype",{writable:!1}),a}function Ih(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function bl(a,e){return bl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,n){return i.__proto__=n,i},bl(a,e)}function Zx(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),e&&bl(a,e)}function zs(a){return zs=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},zs(a)}function Jx(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Qx(a,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ih(a)}function $x(a){var e=Jx();return function(){var i=zs(a),n;if(e){var r=zs(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Qx(this,n)}}var Ve={position:"csm_Position",positionRaw:"csm_PositionRaw",pointSize:"csm_PointSize",fragColor:"csm_FragColor",diffuseColor:"csm_DiffuseColor",normal:"csm_Normal",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",bump:"csm_Bump",depthAlpha:"csm_DepthAlpha"},$t,Cr,e1=($t={},tt($t,"".concat(Ve.normal),{"#include <beginnormal_vertex>":`
    vec3 objectNormal = `.concat(Ve.normal,`;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)}),tt($t,"".concat(Ve.position),{"#include <begin_vertex>":`
    vec3 transformed = `.concat(Ve.position,`;
  `)}),tt($t,"".concat(Ve.positionRaw),{"#include <begin_vertex>":`
    vec4 csm_internal_positionUnprojected = `.concat(Ve.positionRaw,`;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)}),tt($t,"".concat(Ve.pointSize),{"gl_PointSize = size;":`
    gl_PointSize = `.concat(Ve.pointSize,`;
    `)}),tt($t,"".concat(Ve.diffuseColor),{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = `.concat(Ve.diffuseColor,`;
  `)}),tt($t,"".concat(Ve.fragColor),{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = `.concat(Ve.fragColor,`;
  `)}),tt($t,"".concat(Ve.emissive),{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = `.concat(Ve.emissive,`;
    `)}),tt($t,"".concat(Ve.roughness),{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(Ve.roughness,`;
    `)}),tt($t,"".concat(Ve.metalness),{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(Ve.metalness,`;
    `)}),tt($t,"".concat(Ve.ao),{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(Ve.ao,`;
    `)}),tt($t,"".concat(Ve.bump),{"#include <normal_fragment_maps>":`
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(Ve.bump," - (dot(").concat(Ve.bump,`, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)}),tt($t,"".concat(Ve.depthAlpha),{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(Ve.depthAlpha,` );
    `),"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(Ve.depthAlpha,`;
    `)}),$t),t1=(Cr={},tt(Cr,"".concat(Ve.position),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(Ve.position,`, 1.0 );
  `)}),tt(Cr,"".concat(Ve.positionRaw),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = `.concat(Ve.position,`;
  `)}),tt(Cr,"".concat(Ve.diffuseColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Ve.diffuseColor,`;
  `)}),tt(Cr,"".concat(Ve.fragColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Ve.fragColor,`;
  `)}),Cr),n1=`

#ifdef IS_VERTEX
    // csm_Position & csm_PositionRaw
    #ifdef IS_UNKNOWN
        vec3 csm_Position = vec3(0.0);
        vec4 csm_PositionRaw = vec4(0.0);
        vec3 csm_Normal = vec3(0.0);
    #else
        vec3 csm_Position = position;
        vec4 csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        vec3 csm_Normal = normal;
    #endif

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        float csm_PointSize = size;
    #endif
#else
    // csm_DiffuseColor & csm_FragColor
    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL
        vec4 csm_DiffuseColor = vec4(1.0, 0.0, 1.0, 1.0);
        vec4 csm_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    #else
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            vec4 csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            vec4 csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            vec4 csm_DiffuseColor = vec4(diffuse, opacity);
            vec4 csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        vec3 csm_Emissive = emissive;
        float csm_Roughness = roughness;
        float csm_Metalness = metalness;
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        float csm_AO = 0.0;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        vec3 csm_Bump = vec3(0.0);
    #endif

    float csm_DepthAlpha = 1.0;
#endif
`,i1=`
    varying mat4 csm_internal_vModelViewMatrix;
`,r1=`
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,a1=`
    varying mat4 csm_internal_vModelViewMatrix;
`,s1=`
    
`,en,o1=(en={},tt(en,"".concat(Ve.position),"*"),tt(en,"".concat(Ve.positionRaw),"*"),tt(en,"".concat(Ve.normal),"*"),tt(en,"".concat(Ve.pointSize),["PointsMaterial"]),tt(en,"".concat(Ve.diffuseColor),"*"),tt(en,"".concat(Ve.fragColor),"*"),tt(en,"".concat(Ve.emissive),["MeshStandardMaterial","MeshPhysicalMaterial"]),tt(en,"".concat(Ve.roughness),["MeshStandardMaterial","MeshPhysicalMaterial"]),tt(en,"".concat(Ve.metalness),["MeshStandardMaterial","MeshPhysicalMaterial"]),tt(en,"".concat(Ve.ao),["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"]),tt(en,"".concat(Ve.bump),["MeshLambertMaterial","MeshMatcapMaterial","MeshNormalMaterial","MeshPhongMaterial","MeshPhysicalMaterial","MeshStandardMaterial","MeshToonMaterial","ShadowMaterial"]),tt(en,"".concat(Ve.depthAlpha),"*"),en),l1=["baseMaterial","fragmentShader","vertexShader","uniforms","patchMap","cacheKey","silent"],c1=function(e,t,i){return e.split(t).join(i)},u1=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},f1=function(e,t){return new RegExp("\\b".concat(u1(t),"\\b")).test(e)};function h1(a){try{new a}catch(e){if(e.message.indexOf("is not a constructor")>=0)return!1}return!0}function d1(a,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;Object.assign(a,e);var i=Object.getPrototypeOf(e);Object.entries(Object.getOwnPropertyDescriptors(i)).filter(function(n){var r=typeof n[1].get=="function",s=typeof n[1].set=="function",o=typeof n[1].value=="function",l=n[0]==="constructor";return(r||s||o)&&!l}).forEach(function(n){if(typeof a[n[0]]=="function"){t||console.warn("Function ".concat(n[0]," already exists on CSM, renaming to base_").concat(n[0]));var r="base_".concat(n[0]);a[r]=n[1].value.bind(a);return}Object.defineProperty(a,n[0],n[1])})}function p1(a){var e=a.toString().trim(),t=e.substring(e.indexOf("{")+1,e.lastIndexOf("}"));return t.trim().length===0}function pf(a){return a.replace(/\s/g,"")}function m1(a,e,t){var i=a.lastIndexOf(e);return i===-1?a:a.substring(0,i)+t+a.substring(i+e.length)}var g1=(function(a){Zx(t,a);var e=$x(t);function t(i){var n,r=i.baseMaterial,s=i.fragmentShader,o=i.vertexShader,l=i.uniforms,c=i.patchMap,u=i.cacheKey,f=i.silent,h=qx(i,l1);jx(this,t);var p;if(h1(r)?p=new r(h):(p=r,Object.assign(p,h)),p.type==="RawShaderMaterial")throw new Error("CustomShaderMaterial does not support RawShaderMaterial");n=e.call(this),d1(Ih(n),p,f),n.__csm={patchMap:c||{},fragmentShader:s||"",vertexShader:o||"",cacheKey:u,baseMaterial:r,instanceID:om.generateUUID(),type:p.type,isAlreadyExtended:!p1(p.onBeforeCompile),cacheHash:"",silent:f},n.uniforms=Rr(Rr({},n.uniforms||{}),l||{});{var v=n.__csm,_=v.fragmentShader,d=v.vertexShader,g=n.uniforms;n.__csm.cacheHash=n.getCacheHash(),n.generateMaterial(_,d,g)}return n}return Kx(t,[{key:"update",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.uniforms=n.uniforms||this.uniforms,Object.assign(this.__csm,n);var r=this.__csm,s=r.fragmentShader,o=r.vertexShader,l=this.uniforms,c=this.getCacheHash();this.__csm.cacheHash=c,this.generateMaterial(s,o,l)}},{key:"clone",value:function(){var n={baseMaterial:this.__csm.baseMaterial,fragmentShader:this.__csm.fragmentShader,vertexShader:this.__csm.vertexShader,uniforms:this.uniforms,silent:this.__csm.silent,patchMap:this.__csm.patchMap,cacheKey:this.__csm.cacheKey},r=new this.constructor(n);return Object.assign(this,r),r}},{key:"getCacheHash",value:function(){var n=this.__csm,r=n.fragmentShader,s=n.vertexShader,o=this.uniforms,l=Object.values(o).reduce(function(u,f){var h=f.value;return u+JSON.stringify(h)},""),c=pf(r)+pf(s)+l;return c.trim().length>0?Lx(c):this.customProgramCacheKey()}},{key:"generateMaterial",value:function(n,r,s){var o=this,l=this.parseShader(n),c=this.parseShader(r);this.uniforms=s||{},this.customProgramCacheKey=function(){return o.__csm.cacheHash};var u=function(p){try{if(l){var v=o.patchShader(l,p.fragmentShader,!0);p.fragmentShader=o.getMaterialDefine()+v}if(c){var _=o.patchShader(c,p.vertexShader);p.vertexShader=`#define IS_VERTEX;
`+_,p.vertexShader=o.getMaterialDefine()+p.vertexShader}p.uniforms=Rr(Rr({},p.uniforms),o.uniforms),o.uniforms=p.uniforms}catch(d){console.error(d)}};if(this.__csm.isAlreadyExtended){var f=this.onBeforeCompile;this.onBeforeCompile=function(h,p){f(h,p),u(h)}}else this.onBeforeCompile=u;this.needsUpdate=!0}},{key:"patchShader",value:function(n,r,s){var o=this,l=r,c=Rr(Rr({},this.getPatchMapForMaterial()),this.__csm.patchMap);Object.keys(c).forEach(function(h){Object.keys(c[h]).forEach(function(p){var v=o1[h],_=o.__csm.type;if(h==="*"||f1(n.main,h))if(!v||Array.isArray(v)&&v.includes(_)||v==="*")l=c1(l,p,c[h][p]);else throw new Error("CSM: ".concat(h," is not available in ").concat(_,". Shader cannot compile."))})}),l=l.replace("void main() {",`
        #ifndef CSM_IS_HEAD_DEFAULTS_DEFINED
          `.concat(s?a1:i1,`
          #define CSM_IS_HEAD_DEFAULTS_DEFINED 1
        #endif

        `).concat(n.header,`
        
        void main() {
          #ifndef CSM_IS_DEFAULTS_DEFINED
            `).concat(n1,`
            #define CSM_IS_DEFAULTS_DEFINED 1
          #endif
          
          #ifndef CSM_IS_MAIN_DEFAULTS_DEFINED
            `).concat(s?s1:r1,`
            #define CSM_IS_MAIN_DEFAULTS_DEFINED 1
          #endif

          // CSM_START
      `));var u=this.__csm.isAlreadyExtended,f=l.includes("// CSM_END");return u&&f?l=m1(l,"// CSM_END",`
          // CSM_END
          `.concat(n.main,`
          // CSM_END
        `)):l=l.replace("// CSM_START",`
        // CSM_START
        `.concat(n.main,`
        // CSM_END
          `)),l=n.defines+l,l}},{key:"parseShader",value:function(n){if(n){var r=n.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm,""),s=Bx(r),o=Hx(s),l=o.map(function(f){return f.name}).indexOf("main"),c=ff(s.slice(0,l>=0?o[l].outer[0]:void 0)),u=l>=0?this.getShaderFromIndex(s,o[l].body):"";return{defines:"",header:c,main:u}}}},{key:"getMaterialDefine",value:function(){var n=this.__csm.type;return n?"#define IS_".concat(n.toUpperCase(),`;
`):`#define IS_UNKNOWN;
`}},{key:"getPatchMapForMaterial",value:function(){switch(this.__csm.type){case"ShaderMaterial":return t1;default:return e1}}},{key:"getShaderFromIndex",value:function(n,r){return ff(n.slice(r[0],r[1]))}}]),t})(ea);function _1(a,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=a.getIndex(),n=a.getAttribute("position"),r=i?i.count:n.count;let s=0;const o=Object.keys(a.attributes),l={},c={},u=[],f=["getX","getY","getZ","getW"],h=["setX","setY","setZ","setW"];for(let b=0,M=o.length;b<M;b++){const E=o[b],w=a.attributes[E];l[E]=new jt(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized);const S=a.morphAttributes[E];S&&(c[E]=new jt(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized))}const p=e*.5,v=Math.log10(1/e),_=Math.pow(10,v),d=p*_;for(let b=0;b<r;b++){const M=i?i.getX(b):b;let E="";for(let w=0,S=o.length;w<S;w++){const T=o[w],y=a.getAttribute(T),m=y.itemSize;for(let x=0;x<m;x++)E+=`${~~(y[f[x]](M)*_+d)},`}if(E in t)u.push(t[E]);else{for(let w=0,S=o.length;w<S;w++){const T=o[w],y=a.getAttribute(T),m=a.morphAttributes[T],x=y.itemSize,C=l[T],A=c[T];for(let O=0;O<x;O++){const P=f[O],k=h[O];if(C[k](s,y[P](M)),m)for(let F=0,X=m.length;F<X;F++)A[F][k](s,m[F][P](M))}}t[E]=s,u.push(s),s++}}const g=a.clone();for(const b in a.attributes){const M=l[b];if(g.setAttribute(b,new jt(M.array.slice(0,s*M.itemSize),M.itemSize,M.normalized)),b in c)for(let E=0;E<c[b].length;E++){const w=c[b][E];g.morphAttributes[b][E]=new jt(w.array.slice(0,s*w.itemSize),w.itemSize,w.normalized)}}return g.setIndex(u),g}var v1=`vec4 permute(vec4 x) {\r
  return mod(((x * 34.0) + 1.0) * x, 289.0);\r
}\r
float permute(float x) {\r
  return floor(mod(((x * 34.0) + 1.0) * x, 289.0));\r
}\r
vec4 taylorInvSqrt(vec4 r) {\r
  return 1.79284291400159 - 0.85373472095314 * r;\r
}\r
float taylorInvSqrt(float r) {\r
  return 1.79284291400159 - 0.85373472095314 * r;\r
}

vec4 grad4(float j, vec4 ip) {\r
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\r
  vec4 p, s;\r
  p.xyz = floor(fract(vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\r
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\r
  s = vec4(lessThan(p, vec4(0.0)));\r
  p.xyz = p.xyz + (s.xyz * 2.0 - 1.0) * s.www;\r
  return p;\r
}

float simplexNoise4d(vec4 v) {\r
  const vec2 C = vec2(0.138196601125010504, 0.309016994374947451);\r
  vec4 i = floor(v + dot(v, C.yyyy));\r
  vec4 x0 = v - i + dot(i, C.xxxx);

  vec4 i0;

  vec3 isX = step(x0.yzw, x0.xxx);\r
  vec3 isYZ = step(x0.zww, x0.yyz);\r
  i0.x = isX.x + isX.y + isX.z;\r
  i0.yzw = 1.0 - isX;

  i0.y += isYZ.x + isYZ.y;\r
  i0.zw += 1.0 - isYZ.xy;

  i0.z += isYZ.z;\r
  i0.w += 1.0 - isYZ.z;

  vec4 i3 = clamp(i0, 0.0, 1.0);\r
  vec4 i2 = clamp(i0 - 1.0, 0.0, 1.0);\r
  vec4 i1 = clamp(i0 - 2.0, 0.0, 1.0);

  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;\r
  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;\r
  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;\r
  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

  i = mod(i, 289.0);\r
  float j0 = permute(permute(permute(permute(i.w) + i.z) + i.y) + i.x);\r
  vec4 j1 = permute(permute(permute(permute(i.w + vec4(i1.w, i2.w, i3.w, 1.0)) + i.z + vec4(i1.z, i2.z, i3.z, 1.0)) + i.y + vec4(i1.y, i2.y, i3.y, 1.0)) + i.x + vec4(i1.x, i2.x, i3.x, 1.0));

  vec4 ip = vec4(1.0 / 294.0, 1.0 / 49.0, 1.0 / 7.0, 0.0);

  vec4 p0 = grad4(j0, ip);\r
  vec4 p1 = grad4(j1.x, ip);\r
  vec4 p2 = grad4(j1.y, ip);\r
  vec4 p3 = grad4(j1.z, ip);\r
  vec4 p4 = grad4(j1.w, ip);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\r
  p0 *= norm.x;\r
  p1 *= norm.y;\r
  p2 *= norm.z;\r
  p3 *= norm.w;\r
  p4 *= taylorInvSqrt(dot(p4, p4));

  vec3 m0 = max(0.6 - vec3(dot(x0, x0), dot(x1, x1), dot(x2, x2)), 0.0);\r
  vec2 m1 = max(0.6 - vec2(dot(x3, x3), dot(x4, x4)), 0.0);\r
  m0 = m0 * m0;\r
  m1 = m1 * m1;\r
  return 49.0 * (dot(m0 * m0, vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2))) + dot(m1 * m1, vec2(dot(p3, x3), dot(p4, x4))));\r
}\r
attribute vec3 tangent;

uniform float uTime;\r
uniform float uPositionFrequency;\r
uniform float uPositionStrength;\r
uniform float uTimeFrequency;

uniform float uSmallWavePositionFrequency;\r
uniform float uSmallWavePositionStrength;\r
uniform float uSmallWaveTimeFrequency;

float getBlob(vec3 position) {\r
    vec3 wrappedPosition = position;\r
    wrappedPosition += simplexNoise4d(vec4(position * uPositionFrequency, uTime * uTimeFrequency)) * uPositionStrength;

    return simplexNoise4d(vec4(wrappedPosition * uSmallWavePositionFrequency, uTime * uSmallWaveTimeFrequency)) * uSmallWavePositionStrength;\r
}

void main() {\r
    vec3 bitangent = cross(tangent.xyz, normal);

    float shift = 0.07;\r
    vec3 A = csm_Position + shift * tangent.xyz;\r
    vec3 B = csm_Position + shift * bitangent;

    float blob = getBlob(csm_Position);\r
    csm_Position += blob * normal;

    A += getBlob(A) * normal;\r
    B += getBlob(B) * normal;

    vec3 shadowA = normalize(A - csm_Position);\r
    vec3 shadowB = normalize(B - csm_Position);

    csm_Normal = -cross(shadowA, shadowB);\r
}`,x1=`uniform float progress;\r
uniform float direction;

#define PI 3.1415926538

vec3 rotateAxis(vec3 p, vec3 axis, float angle) {\r
    return mix(dot(axis, p) * axis, p, cos(angle)) + cross(axis, p) * sin(angle);\r
}

void main() {\r
    vec3 pos = position;

    float twirlPeriod = sin(progress * PI * 2.);

    float rotateAngle = -direction * pow(sin(progress * PI), 1.5) * PI * 2.;

    float twirlAngle = -sin(uv.x - .5) * pow(twirlPeriod, 2.0) * -4.;

    float twirlRotate = rotateAngle + twirlAngle;

    pos = rotateAxis(pos, vec3(1., 0., 0.), twirlRotate);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\r
}`;function y1(){var a=Object.create(null);function e(n,r){var s=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!a[s])try{l=l.map(function(h){return h&&h.isWorkerModule&&(e(h,function(p){if(p instanceof Error)throw p}),h=a[h.id].value),h}),c=i("<"+o+">.init",c),u&&(u=i("<"+o+">.getTransferables",u));var f=null;typeof c=="function"?f=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[s]={id:s,value:f,getTransferables:u},r(f)}catch(h){h&&h.noLog||console.error(h),r(h)}}function t(n,r){var s,o=n.id,l=n.args;(!a[o]||typeof a[o].value!="function")&&r(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(s=a[o]).value.apply(s,l);c&&typeof c.then=="function"?c.then(u,function(f){return r(f instanceof Error?f:new Error(""+f))}):u(c)}catch(f){r(f)}function u(f){try{var h=a[o].getTransferables&&a[o].getTransferables(f);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),r(f,h)}catch(p){console.error(p),r(p)}}}function i(n,r){var s=void 0;self.troikaDefine=function(l){return s=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,s}self.addEventListener("message",function(n){var r=n.data,s=r.messageId,o=r.action,l=r.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:s,success:!1,error:c.stack})}})}function S1(a){var e=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,i=a.init;t=Array.isArray(t)?t.map(function(r){return r&&(r=r.onMainThread||r,r._getInitResult&&(r=r._getInitResult())),r}):[];var n=Promise.all(t).then(function(r){return i.apply(null,r)});return e._getInitResult=function(){return n},n},e}var Fh=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return Fh=function(){return a},a},M1=0,E1=0,rl=!1,Aa=Object.create(null),Ra=Object.create(null),Tl=Object.create(null);function ia(a){if((!a||typeof a.init!="function")&&!rl)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,i=a.getTransferables,n=a.workerId,r=S1(a);n==null&&(n="#default");var s="workerModule"+ ++M1,o=a.name||s,l=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(rl=!0,u=ia({workerId:n,name:"<"+o+"> function dependency: "+u.name,init:`function(){return (
`+Rs(u)+`
)}`}),rl=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function c(){for(var u=[],f=arguments.length;f--;)u[f]=arguments[f];if(!Fh())return r.apply(void 0,u);if(!l){l=mf(n,"registerModule",c.workerModuleData);var h=function(){l=null,Ra[n].delete(h)};(Ra[n]||(Ra[n]=new Set)).add(h)}return l.then(function(p){var v=p.isCallable;if(v)return mf(n,"callModule",{id:s,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:s,name:o,dependencies:e,init:Rs(t),getTransferables:i&&Rs(i)},c.onMainThread=r,c}function b1(a){Ra[a]&&Ra[a].forEach(function(e){e()}),Aa[a]&&(Aa[a].terminate(),delete Aa[a])}function Rs(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function T1(a){var e=Aa[a];if(!e){var t=Rs(y1);e=Aa[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(i){var n=i.data,r=n.messageId,s=Tl[r];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete Tl[r],s(n)}}return e}function mf(a,e,t){return new Promise(function(i,n){var r=++E1;Tl[r]=function(s){s.success?i(s.result):n(new Error("Error in worker "+e+" call: "+s.error))},T1(a).postMessage({messageId:r,action:e,data:t})})}function Oh(){var a=(function(e){function t(q,V,G,W,z,H,K,ne){var $=1-K;ne.x=$*$*q+2*$*K*G+K*K*z,ne.y=$*$*V+2*$*K*W+K*K*H}function i(q,V,G,W,z,H,K,ne,$,Y){var R=1-$;Y.x=R*R*R*q+3*R*R*$*G+3*R*$*$*z+$*$*$*K,Y.y=R*R*R*V+3*R*R*$*W+3*R*$*$*H+$*$*$*ne}function n(q,V){for(var G=/([MLQCZ])([^MLQCZ]*)/g,W,z,H,K,ne;W=G.exec(q);){var $=W[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(Y){return parseFloat(Y)});switch(W[1]){case"M":K=z=$[0],ne=H=$[1];break;case"L":($[0]!==K||$[1]!==ne)&&V("L",K,ne,K=$[0],ne=$[1]);break;case"Q":{V("Q",K,ne,K=$[2],ne=$[3],$[0],$[1]);break}case"C":{V("C",K,ne,K=$[4],ne=$[5],$[0],$[1],$[2],$[3]);break}case"Z":(K!==z||ne!==H)&&V("L",K,ne,z,H);break}}}function r(q,V,G){G===void 0&&(G=16);var W={x:0,y:0};n(q,function(z,H,K,ne,$,Y,R,D,N){switch(z){case"L":V(H,K,ne,$);break;case"Q":{for(var I=H,re=K,Q=1;Q<G;Q++)t(H,K,Y,R,ne,$,Q/(G-1),W),V(I,re,W.x,W.y),I=W.x,re=W.y;break}case"C":{for(var de=H,me=K,Ae=1;Ae<G;Ae++)i(H,K,Y,R,D,N,ne,$,Ae/(G-1),W),V(de,me,W.x,W.y),de=W.x,me=W.y;break}}})}var s="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(q,V){var G=q.getContext?q.getContext("webgl",c):q,W=l.get(G);if(!W){let de=function(te){var be=H[te];if(!be&&(be=H[te]=G.getExtension(te),!be))throw new Error(te+" not supported");return be},me=function(te,be){var U=G.createShader(be);return G.shaderSource(U,te),G.compileShader(U),U},Ae=function(te,be,U,L){if(!K[te]){var Z={},ve={},se=G.createProgram();G.attachShader(se,me(be,G.VERTEX_SHADER)),G.attachShader(se,me(U,G.FRAGMENT_SHADER)),G.linkProgram(se),K[te]={program:se,transaction:function(ye){G.useProgram(se),ye({setUniform:function(Ee,Le){for(var Ie=[],he=arguments.length-2;he-- >0;)Ie[he]=arguments[he+2];var we=ve[Le]||(ve[Le]=G.getUniformLocation(se,Le));G["uniform"+Ee].apply(G,[we].concat(Ie))},setAttribute:function(Ee,Le,Ie,he,we){var De=Z[Ee];De||(De=Z[Ee]={buf:G.createBuffer(),loc:G.getAttribLocation(se,Ee),data:null}),G.bindBuffer(G.ARRAY_BUFFER,De.buf),G.vertexAttribPointer(De.loc,Le,G.FLOAT,!1,0,0),G.enableVertexAttribArray(De.loc),z?G.vertexAttribDivisor(De.loc,he):de("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(De.loc,he),we!==De.data&&(G.bufferData(G.ARRAY_BUFFER,we,Ie),De.data=we)}})}}}K[te].transaction(L)},ae=function(te,be){$++;try{G.activeTexture(G.TEXTURE0+$);var U=ne[te];U||(U=ne[te]=G.createTexture(),G.bindTexture(G.TEXTURE_2D,U),G.texParameteri(G.TEXTURE_2D,G.TEXTURE_MIN_FILTER,G.NEAREST),G.texParameteri(G.TEXTURE_2D,G.TEXTURE_MAG_FILTER,G.NEAREST)),G.bindTexture(G.TEXTURE_2D,U),be(U,$)}finally{$--}},pe=function(te,be,U){var L=G.createFramebuffer();Y.push(L),G.bindFramebuffer(G.FRAMEBUFFER,L),G.activeTexture(G.TEXTURE0+be),G.bindTexture(G.TEXTURE_2D,te),G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,te,0);try{U(L)}finally{G.deleteFramebuffer(L),G.bindFramebuffer(G.FRAMEBUFFER,Y[--Y.length-1]||null)}},xe=function(){H={},K={},ne={},$=-1,Y.length=0};var R=de,D=me,N=Ae,I=ae,re=pe,Q=xe,z=typeof WebGL2RenderingContext<"u"&&G instanceof WebGL2RenderingContext,H={},K={},ne={},$=-1,Y=[];G.canvas.addEventListener("webglcontextlost",function(te){xe(),te.preventDefault()},!1),l.set(G,W={gl:G,isWebGL2:z,getExtension:de,withProgram:Ae,withTexture:ae,withTextureFramebuffer:pe,handleContextLoss:xe})}V(W)}function f(q,V,G,W,z,H,K,ne){K===void 0&&(K=15),ne===void 0&&(ne=null),u(q,function($){var Y=$.gl,R=$.withProgram,D=$.withTexture;D("copy",function(N,I){Y.texImage2D(Y.TEXTURE_2D,0,Y.RGBA,z,H,0,Y.RGBA,Y.UNSIGNED_BYTE,V),R("copy",s,o,function(re){var Q=re.setUniform,de=re.setAttribute;de("aUV",2,Y.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Q("1i","image",I),Y.bindFramebuffer(Y.FRAMEBUFFER,ne||null),Y.disable(Y.BLEND),Y.colorMask(K&8,K&4,K&2,K&1),Y.viewport(G,W,z,H),Y.scissor(G,W,z,H),Y.drawArrays(Y.TRIANGLES,0,3)})})})}function h(q,V,G){var W=q.width,z=q.height;u(q,function(H){var K=H.gl,ne=new Uint8Array(W*z*4);K.readPixels(0,0,W,z,K.RGBA,K.UNSIGNED_BYTE,ne),q.width=V,q.height=G,f(K,ne,0,0,W,z)})}var p=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:h});function v(q,V,G,W,z,H){H===void 0&&(H=1);var K=new Uint8Array(q*V),ne=W[2]-W[0],$=W[3]-W[1],Y=[];r(G,function(de,me,Ae,ae){Y.push({x1:de,y1:me,x2:Ae,y2:ae,minX:Math.min(de,Ae),minY:Math.min(me,ae),maxX:Math.max(de,Ae),maxY:Math.max(me,ae)})}),Y.sort(function(de,me){return de.maxX-me.maxX});for(var R=0;R<q;R++)for(var D=0;D<V;D++){var N=re(W[0]+ne*(R+.5)/q,W[1]+$*(D+.5)/V),I=Math.pow(1-Math.abs(N)/z,H)/2;N<0&&(I=1-I),I=Math.max(0,Math.min(255,Math.round(I*255))),K[D*q+R]=I}return K;function re(de,me){for(var Ae=1/0,ae=1/0,pe=Y.length;pe--;){var xe=Y[pe];if(xe.maxX+ae<=de)break;if(de+ae>xe.minX&&me-ae<xe.maxY&&me+ae>xe.minY){var te=g(de,me,xe.x1,xe.y1,xe.x2,xe.y2);te<Ae&&(Ae=te,ae=Math.sqrt(Ae))}}return Q(de,me)&&(ae=-ae),ae}function Q(de,me){for(var Ae=0,ae=Y.length;ae--;){var pe=Y[ae];if(pe.maxX<=de)break;var xe=pe.y1>me!=pe.y2>me&&de<(pe.x2-pe.x1)*(me-pe.y1)/(pe.y2-pe.y1)+pe.x1;xe&&(Ae+=pe.y1<pe.y2?1:-1)}return Ae!==0}}function _(q,V,G,W,z,H,K,ne,$,Y){H===void 0&&(H=1),ne===void 0&&(ne=0),$===void 0&&($=0),Y===void 0&&(Y=0),d(q,V,G,W,z,H,K,null,ne,$,Y)}function d(q,V,G,W,z,H,K,ne,$,Y,R){H===void 0&&(H=1),$===void 0&&($=0),Y===void 0&&(Y=0),R===void 0&&(R=0);for(var D=v(q,V,G,W,z,H),N=new Uint8Array(D.length*4),I=0;I<D.length;I++)N[I*4+R]=D[I];f(K,N,$,Y,q,V,1<<3-R,ne)}function g(q,V,G,W,z,H){var K=z-G,ne=H-W,$=K*K+ne*ne,Y=$?Math.max(0,Math.min(1,((q-G)*K+(V-W)*ne)/$)):0,R=q-(G+Y*K),D=V-(W+Y*ne);return R*R+D*D}var b=Object.freeze({__proto__:null,generate:v,generateIntoCanvas:_,generateIntoFramebuffer:d}),M="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",E="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",w="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",S=new Float32Array([0,0,2,0,0,2]),T=null,y=!1,m={},x=new WeakMap;function C(q){if(!y&&!k(q))throw new Error("WebGL generation not supported")}function A(q,V,G,W,z,H,K){if(H===void 0&&(H=1),K===void 0&&(K=null),!K&&(K=T,!K)){var ne=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!ne)throw new Error("OffscreenCanvas or DOM canvas not supported");K=T=ne.getContext("webgl",{depth:!1})}C(K);var $=new Uint8Array(q*V*4);u(K,function(N){var I=N.gl,re=N.withTexture,Q=N.withTextureFramebuffer;re("readable",function(de,me){I.texImage2D(I.TEXTURE_2D,0,I.RGBA,q,V,0,I.RGBA,I.UNSIGNED_BYTE,null),Q(de,me,function(Ae){P(q,V,G,W,z,H,I,Ae,0,0,0),I.readPixels(0,0,q,V,I.RGBA,I.UNSIGNED_BYTE,$)})})});for(var Y=new Uint8Array(q*V),R=0,D=0;R<$.length;R+=4)Y[D++]=$[R];return Y}function O(q,V,G,W,z,H,K,ne,$,Y){H===void 0&&(H=1),ne===void 0&&(ne=0),$===void 0&&($=0),Y===void 0&&(Y=0),P(q,V,G,W,z,H,K,null,ne,$,Y)}function P(q,V,G,W,z,H,K,ne,$,Y,R){H===void 0&&(H=1),$===void 0&&($=0),Y===void 0&&(Y=0),R===void 0&&(R=0),C(K);var D=[];r(G,function(N,I,re,Q){D.push(N,I,re,Q)}),D=new Float32Array(D),u(K,function(N){var I=N.gl,re=N.isWebGL2,Q=N.getExtension,de=N.withProgram,me=N.withTexture,Ae=N.withTextureFramebuffer,ae=N.handleContextLoss;if(me("rawDistances",function(pe,xe){(q!==pe._lastWidth||V!==pe._lastHeight)&&I.texImage2D(I.TEXTURE_2D,0,I.RGBA,pe._lastWidth=q,pe._lastHeight=V,0,I.RGBA,I.UNSIGNED_BYTE,null),de("main",M,E,function(te){var be=te.setAttribute,U=te.setUniform,L=!re&&Q("ANGLE_instanced_arrays"),Z=!re&&Q("EXT_blend_minmax");be("aUV",2,I.STATIC_DRAW,0,S),be("aLineSegment",4,I.DYNAMIC_DRAW,1,D),U.apply(void 0,["4f","uGlyphBounds"].concat(W)),U("1f","uMaxDistance",z),U("1f","uExponent",H),Ae(pe,xe,function(ve){I.enable(I.BLEND),I.colorMask(!0,!0,!0,!0),I.viewport(0,0,q,V),I.scissor(0,0,q,V),I.blendFunc(I.ONE,I.ONE),I.blendEquationSeparate(I.FUNC_ADD,re?I.MAX:Z.MAX_EXT),I.clear(I.COLOR_BUFFER_BIT),re?I.drawArraysInstanced(I.TRIANGLES,0,3,D.length/4):L.drawArraysInstancedANGLE(I.TRIANGLES,0,3,D.length/4)})}),de("post",s,w,function(te){te.setAttribute("aUV",2,I.STATIC_DRAW,0,S),te.setUniform("1i","tex",xe),I.bindFramebuffer(I.FRAMEBUFFER,ne),I.disable(I.BLEND),I.colorMask(R===0,R===1,R===2,R===3),I.viewport($,Y,q,V),I.scissor($,Y,q,V),I.drawArrays(I.TRIANGLES,0,3)})}),I.isContextLost())throw ae(),new Error("webgl context lost")})}function k(q){var V=!q||q===T?m:q.canvas||q,G=x.get(V);if(G===void 0){y=!0;var W=null;try{var z=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],H=A(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,q);G=H&&z.length===H.length&&H.every(function(K,ne){return K===z[ne]}),G||(W="bad trial run results",console.info(z,H))}catch(K){G=!1,W=K.message}W&&console.warn("WebGL SDF generation not supported:",W),y=!1,x.set(V,G)}return G}var F=Object.freeze({__proto__:null,generate:A,generateIntoCanvas:O,generateIntoFramebuffer:P,isSupported:k});function X(q,V,G,W,z,H){z===void 0&&(z=Math.max(W[2]-W[0],W[3]-W[1])/2),H===void 0&&(H=1);try{return A.apply(F,arguments)}catch(K){return console.info("WebGL SDF generation failed, falling back to JS",K),v.apply(b,arguments)}}function J(q,V,G,W,z,H,K,ne,$,Y){z===void 0&&(z=Math.max(W[2]-W[0],W[3]-W[1])/2),H===void 0&&(H=1),ne===void 0&&(ne=0),$===void 0&&($=0),Y===void 0&&(Y=0);try{return O.apply(F,arguments)}catch(R){return console.info("WebGL SDF generation failed, falling back to JS",R),_.apply(b,arguments)}}return e.forEachPathCommand=n,e.generate=X,e.generateIntoCanvas=J,e.javascript=b,e.pathToLineSegments=r,e.webgl=F,e.webglUtils=p,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return a}function w1(){var a=(function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},n={};i.L=1,n[1]="L",Object.keys(t).forEach(function(ae,pe){i[ae]=1<<pe+1,n[i[ae]]=ae}),Object.freeze(i);var r=i.LRI|i.RLI|i.FSI,s=i.L|i.R|i.AL,o=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,l=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,c=i.S|i.WS|i.B|r|i.PDI|l,u=null;function f(){if(!u){u=new Map;var ae=function(xe){if(t.hasOwnProperty(xe)){var te=0;t[xe].split(",").forEach(function(be){var U=be.split("+"),L=U[0],Z=U[1];L=parseInt(L,36),Z=Z?parseInt(Z,36):0,u.set(te+=L,i[xe]);for(var ve=0;ve<Z;ve++)u.set(++te,i[xe])})}};for(var pe in t)ae(pe)}}function h(ae){return f(),u.get(ae.codePointAt(0))||i.L}function p(ae){return n[h(ae)]}var v={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(ae,pe){var xe=36,te=0,be=new Map,U=pe&&new Map,L;return ae.split(",").forEach(function Z(ve){if(ve.indexOf("+")!==-1)for(var se=+ve;se--;)Z(L);else{L=ve;var fe=ve.split(">"),ye=fe[0],_e=fe[1];ye=String.fromCodePoint(te+=parseInt(ye,xe)),_e=String.fromCodePoint(te+=parseInt(_e,xe)),be.set(ye,_e),pe&&U.set(_e,ye)}}),{map:be,reverseMap:U}}var d,g,b;function M(){if(!d){var ae=_(v.pairs,!0),pe=ae.map,xe=ae.reverseMap;d=pe,g=xe,b=_(v.canonical,!1).map}}function E(ae){return M(),d.get(ae)||null}function w(ae){return M(),g.get(ae)||null}function S(ae){return M(),b.get(ae)||null}var T=i.L,y=i.R,m=i.EN,x=i.ES,C=i.ET,A=i.AN,O=i.CS,P=i.B,k=i.S,F=i.ON,X=i.BN,J=i.NSM,q=i.AL,V=i.LRO,G=i.RLO,W=i.LRE,z=i.RLE,H=i.PDF,K=i.LRI,ne=i.RLI,$=i.FSI,Y=i.PDI;function R(ae,pe){for(var xe=125,te=new Uint32Array(ae.length),be=0;be<ae.length;be++)te[be]=h(ae[be]);var U=new Map;function L(Jt,In){var Qt=te[Jt];te[Jt]=In,U.set(Qt,U.get(Qt)-1),Qt&o&&U.set(o,U.get(o)-1),U.set(In,(U.get(In)||0)+1),In&o&&U.set(o,(U.get(o)||0)+1)}for(var Z=new Uint8Array(ae.length),ve=new Map,se=[],fe=null,ye=0;ye<ae.length;ye++)fe||se.push(fe={start:ye,end:ae.length-1,level:pe==="rtl"?1:pe==="ltr"?0:Dc(ye,!1)}),te[ye]&P&&(fe.end=ye,fe=null);for(var _e=z|W|G|V|r|Y|H|P,Ee=function(Jt){return Jt+(Jt&1?1:2)},Le=function(Jt){return Jt+(Jt&1?2:1)},Ie=0;Ie<se.length;Ie++){fe=se[Ie];var he=[{_level:fe.level,_override:0,_isolate:0}],we=void 0,De=0,Ne=0,Be=0;U.clear();for(var Te=fe.start;Te<=fe.end;Te++){var Re=te[Te];if(we=he[he.length-1],U.set(Re,(U.get(Re)||0)+1),Re&o&&U.set(o,(U.get(o)||0)+1),Re&_e)if(Re&(z|W)){Z[Te]=we._level;var j=(Re===z?Le:Ee)(we._level);j<=xe&&!De&&!Ne?he.push({_level:j,_override:0,_isolate:0}):De||Ne++}else if(Re&(G|V)){Z[Te]=we._level;var Pe=(Re===G?Le:Ee)(we._level);Pe<=xe&&!De&&!Ne?he.push({_level:Pe,_override:Re&G?y:T,_isolate:0}):De||Ne++}else if(Re&r){Re&$&&(Re=Dc(Te+1,!0)===1?ne:K),Z[Te]=we._level,we._override&&L(Te,we._override);var ge=(Re===ne?Le:Ee)(we._level);ge<=xe&&De===0&&Ne===0?(Be++,he.push({_level:ge,_override:0,_isolate:1,_isolInitIndex:Te})):De++}else if(Re&Y){if(De>0)De--;else if(Be>0){for(Ne=0;!he[he.length-1]._isolate;)he.pop();var ie=he[he.length-1]._isolInitIndex;ie!=null&&(ve.set(ie,Te),ve.set(Te,ie)),he.pop(),Be--}we=he[he.length-1],Z[Te]=we._level,we._override&&L(Te,we._override)}else Re&H?(De===0&&(Ne>0?Ne--:!we._isolate&&he.length>1&&(he.pop(),we=he[he.length-1])),Z[Te]=we._level):Re&P&&(Z[Te]=fe.level);else Z[Te]=we._level,we._override&&Re!==X&&L(Te,we._override)}for(var Se=[],Fe=null,Ue=fe.start;Ue<=fe.end;Ue++){var Xe=te[Ue];if(!(Xe&l)){var et=Z[Ue],qe=Xe&r,Qe=Xe===Y;Fe&&et===Fe._level?(Fe._end=Ue,Fe._endsWithIsolInit=qe):Se.push(Fe={_start:Ue,_end:Ue,_level:et,_startsWithPDI:Qe,_endsWithIsolInit:qe})}}for(var dt=[],Rn=0;Rn<Se.length;Rn++){var Cn=Se[Rn];if(!Cn._startsWithPDI||Cn._startsWithPDI&&!ve.has(Cn._start)){for(var ln=[Fe=Cn],Vn=void 0;Fe&&Fe._endsWithIsolInit&&(Vn=ve.get(Fe._end))!=null;)for(var Yt=Rn+1;Yt<Se.length;Yt++)if(Se[Yt]._start===Vn){ln.push(Fe=Se[Yt]);break}for(var wt=[],Hn=0;Hn<ln.length;Hn++)for(var Xa=ln[Hn],ra=Xa._start;ra<=Xa._end;ra++)wt.push(ra);for(var so=Z[wt[0]],B=fe.level,ee=wt[0]-1;ee>=0;ee--)if(!(te[ee]&l)){B=Z[ee];break}var le=wt[wt.length-1],ue=Z[le],ce=fe.level;if(!(te[le]&r)){for(var Oe=le+1;Oe<=fe.end;Oe++)if(!(te[Oe]&l)){ce=Z[Oe];break}}dt.push({_seqIndices:wt,_sosType:Math.max(B,so)%2?y:T,_eosType:Math.max(ce,ue)%2?y:T})}}for(var ke=0;ke<dt.length;ke++){var Ge=dt[ke],Me=Ge._seqIndices,He=Ge._sosType,We=Ge._eosType,ze=Z[Me[0]]&1?y:T;if(U.get(J))for(var st=0;st<Me.length;st++){var Ot=Me[st];if(te[Ot]&J){for(var pt=He,Kt=st-1;Kt>=0;Kt--)if(!(te[Me[Kt]]&l)){pt=te[Me[Kt]];break}L(Ot,pt&(r|Y)?F:pt)}}if(U.get(m))for(var nt=0;nt<Me.length;nt++){var je=Me[nt];if(te[je]&m)for(var hi=nt-1;hi>=-1;hi--){var ot=hi===-1?He:te[Me[hi]];if(ot&s){ot===q&&L(je,A);break}}}if(U.get(q))for(var Pn=0;Pn<Me.length;Pn++){var aa=Me[Pn];te[aa]&q&&L(aa,y)}if(U.get(x)||U.get(O))for(var Ln=1;Ln<Me.length-1;Ln++){var Fi=Me[Ln];if(te[Fi]&(x|O)){for(var ut=0,Dn=0,Oi=Ln-1;Oi>=0&&(ut=te[Me[Oi]],!!(ut&l));Oi--);for(var Nt=Ln+1;Nt<Me.length&&(Dn=te[Me[Nt]],!!(Dn&l));Nt++);ut===Dn&&(te[Fi]===x?ut===m:ut&(m|A))&&L(Fi,ut)}}if(U.get(m))for(var Zt=0;Zt<Me.length;Zt++){var oo=Me[Zt];if(te[oo]&m){for(var Ni=Zt-1;Ni>=0&&te[Me[Ni]]&(C|l);Ni--)L(Me[Ni],m);for(Zt++;Zt<Me.length&&te[Me[Zt]]&(C|l|m);Zt++)te[Me[Zt]]!==m&&L(Me[Zt],m)}}if(U.get(C)||U.get(x)||U.get(O))for(var sa=0;sa<Me.length;sa++){var xc=Me[sa];if(te[xc]&(C|x|O)){L(xc,F);for(var qa=sa-1;qa>=0&&te[Me[qa]]&l;qa--)L(Me[qa],F);for(var ja=sa+1;ja<Me.length&&te[Me[ja]]&l;ja++)L(Me[ja],F)}}if(U.get(m))for(var lo=0,yc=He;lo<Me.length;lo++){var Sc=Me[lo],co=te[Sc];co&m?yc===T&&L(Sc,T):co&s&&(yc=co)}if(U.get(o)){var oa=y|m|A,Mc=oa|T,Ya=[];{for(var ur=[],fr=0;fr<Me.length;fr++)if(te[Me[fr]]&o){var la=ae[Me[fr]],Ec=void 0;if(E(la)!==null)if(ur.length<63)ur.push({char:la,seqIndex:fr});else break;else if((Ec=w(la))!==null)for(var ca=ur.length-1;ca>=0;ca--){var uo=ur[ca].char;if(uo===Ec||uo===w(S(la))||E(S(uo))===la){Ya.push([ur[ca].seqIndex,fr]),ur.length=ca;break}}}Ya.sort(function(Jt,In){return Jt[0]-In[0]})}for(var fo=0;fo<Ya.length;fo++){for(var bc=Ya[fo],Ka=bc[0],ho=bc[1],Tc=!1,Un=0,po=Ka+1;po<ho;po++){var wc=Me[po];if(te[wc]&Mc){Tc=!0;var Ac=te[wc]&oa?y:T;if(Ac===ze){Un=Ac;break}}}if(Tc&&!Un){Un=He;for(var mo=Ka-1;mo>=0;mo--){var Rc=Me[mo];if(te[Rc]&Mc){var Cc=te[Rc]&oa?y:T;Cc!==ze?Un=Cc:Un=ze;break}}}if(Un){if(te[Me[Ka]]=te[Me[ho]]=Un,Un!==ze){for(var ua=Ka+1;ua<Me.length;ua++)if(!(te[Me[ua]]&l)){h(ae[Me[ua]])&J&&(te[Me[ua]]=Un);break}}if(Un!==ze){for(var fa=ho+1;fa<Me.length;fa++)if(!(te[Me[fa]]&l)){h(ae[Me[fa]])&J&&(te[Me[fa]]=Un);break}}}}for(var di=0;di<Me.length;di++)if(te[Me[di]]&o){for(var Pc=di,go=di,_o=He,ha=di-1;ha>=0;ha--)if(te[Me[ha]]&l)Pc=ha;else{_o=te[Me[ha]]&oa?y:T;break}for(var Lc=We,da=di+1;da<Me.length;da++)if(te[Me[da]]&(o|l))go=da;else{Lc=te[Me[da]]&oa?y:T;break}for(var vo=Pc;vo<=go;vo++)te[Me[vo]]=_o===Lc?_o:ze;di=go}}}for(var cn=fe.start;cn<=fe.end;cn++){var Kd=Z[cn],Za=te[cn];if(Kd&1?Za&(T|m|A)&&Z[cn]++:Za&y?Z[cn]++:Za&(A|m)&&(Z[cn]+=2),Za&l&&(Z[cn]=cn===0?fe.level:Z[cn-1]),cn===fe.end||h(ae[cn])&(k|P))for(var Ja=cn;Ja>=0&&h(ae[Ja])&c;Ja--)Z[Ja]=fe.level}}return{levels:Z,paragraphs:se};function Dc(Jt,In){for(var Qt=Jt;Qt<ae.length;Qt++){var pi=te[Qt];if(pi&(y|q))return 1;if(pi&(P|T)||In&&pi===Y)return 0;if(pi&r){var Uc=Zd(Qt);Qt=Uc===-1?ae.length:Uc}}return 0}function Zd(Jt){for(var In=1,Qt=Jt+1;Qt<ae.length;Qt++){var pi=te[Qt];if(pi&P)break;if(pi&Y){if(--In===0)return Qt}else pi&r&&In++}return-1}}var D="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",N;function I(){if(!N){var ae=_(D,!0),pe=ae.map,xe=ae.reverseMap;xe.forEach(function(te,be){pe.set(be,te)}),N=pe}}function re(ae){return I(),N.get(ae)||null}function Q(ae,pe,xe,te){var be=ae.length;xe=Math.max(0,xe==null?0:+xe),te=Math.min(be-1,te==null?be-1:+te);for(var U=new Map,L=xe;L<=te;L++)if(pe[L]&1){var Z=re(ae[L]);Z!==null&&U.set(L,Z)}return U}function de(ae,pe,xe,te){var be=ae.length;xe=Math.max(0,xe==null?0:+xe),te=Math.min(be-1,te==null?be-1:+te);var U=[];return pe.paragraphs.forEach(function(L){var Z=Math.max(xe,L.start),ve=Math.min(te,L.end);if(Z<ve){for(var se=pe.levels.slice(Z,ve+1),fe=ve;fe>=Z&&h(ae[fe])&c;fe--)se[fe]=L.level;for(var ye=L.level,_e=1/0,Ee=0;Ee<se.length;Ee++){var Le=se[Ee];Le>ye&&(ye=Le),Le<_e&&(_e=Le|1)}for(var Ie=ye;Ie>=_e;Ie--)for(var he=0;he<se.length;he++)if(se[he]>=Ie){for(var we=he;he+1<se.length&&se[he+1]>=Ie;)he++;he>we&&U.push([we+Z,he+Z])}}}),U}function me(ae,pe,xe,te){var be=Ae(ae,pe,xe,te),U=[].concat(ae);return be.forEach(function(L,Z){U[Z]=(pe.levels[L]&1?re(ae[L]):null)||ae[L]}),U.join("")}function Ae(ae,pe,xe,te){for(var be=de(ae,pe,xe,te),U=[],L=0;L<ae.length;L++)U[L]=L;return be.forEach(function(Z){for(var ve=Z[0],se=Z[1],fe=U.slice(ve,se+1),ye=fe.length;ye--;)U[se-ye]=fe[ye]}),U}return e.closingToOpeningBracket=w,e.getBidiCharType=h,e.getBidiCharTypeName=p,e.getCanonicalBracket=S,e.getEmbeddingLevels=R,e.getMirroredCharacter=re,e.getMirroredCharactersMap=Q,e.getReorderSegments=de,e.getReorderedIndices=Ae,e.getReorderedString=me,e.openingToClosingBracket=E,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return a}const Nh=/\bvoid\s+main\s*\(\s*\)\s*{/g;function wl(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,n){let r=Ye[n];return r?wl(r):i}return a.replace(e,t)}const Lt=[];for(let a=0;a<256;a++)Lt[a]=(a<16?"0":"")+a.toString(16);function A1(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[a&255]+Lt[a>>8&255]+Lt[a>>16&255]+Lt[a>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toUpperCase()}const Vi=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&(a[n]=i[n])}return a},R1=Date.now(),gf=new WeakMap,_f=new Map;let C1=1e10;function Al(a,e){const t=U1(e);let i=gf.get(a);if(i||gf.set(a,i=Object.create(null)),i[t])return new i[t];const n=`_onBeforeCompile${t}`,r=function(c,u){a.onBeforeCompile.call(this,c,u);const f=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=_f[f];if(!h){const p=P1(this,c,e,t);h=_f[f]=p}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,Vi(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-R1}}),this[n]&&this[n](c)},s=function(){return o(e.chained?a:a.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:a}),Object.defineProperty(u,"id",{value:C1++}),u.uuid=A1(),u.uniforms=Vi({},c.uniforms,e.uniforms),u.defines=Vi({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=Vi({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:s},isDerivedMaterial:{value:!0},type:{get:()=>a.type,set:c=>{a.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&(Vi(this.extensions,c.extensions),Vi(this.defines,c.defines),Vi(this.uniforms,gh.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Al(a.isDerivedMaterial?a.getDepthMaterial():new Ah({depthPacking:rh}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Al(a.isDerivedMaterial?a.getDistanceMaterial():new Rh,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),a.dispose.call(this)}}};return i[t]=s,new s}function P1(a,{vertexShader:e,fragmentShader:t},i,n){let{vertexDefs:r,vertexMainIntro:s,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:f,fragmentColorTransform:h,customRewriter:p,timeUniform:v}=i;if(r=r||"",s=s||"",o=o||"",c=c||"",u=u||"",f=f||"",(l||p)&&(e=wl(e)),(h||p)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=wl(t)),p){let _=p({vertexShader:e,fragmentShader:t});e=_.vertexShader,t=_.fragmentShader}if(h){let _=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,d=>(_.push(d),"")),f=`${h}
${_.join(`
`)}
${f}`}if(v){const _=`
uniform float ${v};
`;r=_+r,c=_+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,r=`${r}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,s=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${s}
`,e=e.replace(/\b(position|normal|uv)\b/g,(_,d,g,b)=>/\battribute\s+vec[23]\s+$/.test(b.substr(0,g))?d:`troika_${d}_${n}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=vf(e,n,r,s,o),t=vf(t,n,c,u,f),{vertexShader:e,fragmentShader:t}}function vf(a,e,t,i,n){return(i||n||t)&&(a=a.replace(Nh,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),a}function L1(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let D1=0;const xf=new Map;function U1(a){const e=JSON.stringify(a,L1);let t=xf.get(e);return t==null&&xf.set(e,t=++D1),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function I1(){return typeof window>"u"&&(self.window=self),(function(a){var e={parse:function(n){var r=e._bin,s=new Uint8Array(n);if(r.readASCII(s,0,4)=="ttcf"){var o=4;r.readUshort(s,o),o+=2,r.readUshort(s,o),o+=2;var l=r.readUint(s,o);o+=4;for(var c=[],u=0;u<l;u++){var f=r.readUint(s,o);o+=4,c.push(e._readFont(s,f))}return c}return[e._readFont(s,0)]},_readFont:function(n,r){var s=e._bin,o=r;s.readFixed(n,r),r+=4;var l=s.readUshort(n,r);r+=2,s.readUshort(n,r),r+=2,s.readUshort(n,r),r+=2,s.readUshort(n,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},f={},h=0;h<l;h++){var p=s.readASCII(n,r,4);r+=4,s.readUint(n,r),r+=4;var v=s.readUint(n,r);r+=4;var _=s.readUint(n,r);r+=4,f[p]={offset:v,length:_}}for(h=0;h<c.length;h++){var d=c[h];f[d]&&(u[d.trim()]=e[d.trim()].parse(n,f[d].offset,f[d].length,u))}return u},_tabOffset:function(n,r,s){for(var o=e._bin,l=o.readUshort(n,s+4),c=s+12,u=0;u<l;u++){var f=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var h=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,f==r)return h}return 0}};e._bin={readFixed:function(n,r){return(n[r]<<8|n[r+1])+(n[r+2]<<8|n[r+3])/65540},readF2dot14:function(n,r){return e._bin.readShort(n,r)/16384},readInt:function(n,r){return e._bin._view(n).getInt32(r)},readInt8:function(n,r){return e._bin._view(n).getInt8(r)},readShort:function(n,r){return e._bin._view(n).getInt16(r)},readUshort:function(n,r){return e._bin._view(n).getUint16(r)},readUshorts:function(n,r,s){for(var o=[],l=0;l<s;l++)o.push(e._bin.readUshort(n,r+2*l));return o},readUint:function(n,r){return e._bin._view(n).getUint32(r)},readUint64:function(n,r){return 4294967296*e._bin.readUint(n,r)+e._bin.readUint(n,r+4)},readASCII:function(n,r,s){for(var o="",l=0;l<s;l++)o+=String.fromCharCode(n[r+l]);return o},readUnicode:function(n,r,s){for(var o="",l=0;l<s;l++){var c=n[r++]<<8|n[r++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,r,s){var o=e._bin._tdec;return o&&r==0&&s==n.length?o.decode(n):e._bin.readASCII(n,r,s)},readBytes:function(n,r,s){for(var o=[],l=0;l<s;l++)o.push(n[r+l]);return o},readASCIIArray:function(n,r,s){for(var o=[],l=0;l<s;l++)o.push(String.fromCharCode(n[r+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,r,s,o,l){var c=e._bin,u={},f=r;c.readFixed(n,r),r+=4;var h=c.readUshort(n,r);r+=2;var p=c.readUshort(n,r);r+=2;var v=c.readUshort(n,r);return r+=2,u.scriptList=e._lctf.readScriptList(n,f+h),u.featureList=e._lctf.readFeatureList(n,f+p),u.lookupList=e._lctf.readLookupList(n,f+v,l),u},e._lctf.readLookupList=function(n,r,s){var o=e._bin,l=r,c=[],u=o.readUshort(n,r);r+=2;for(var f=0;f<u;f++){var h=o.readUshort(n,r);r+=2;var p=e._lctf.readLookupTable(n,l+h,s);c.push(p)}return c},e._lctf.readLookupTable=function(n,r,s){var o=e._bin,l=r,c={tabs:[]};c.ltype=o.readUshort(n,r),r+=2,c.flag=o.readUshort(n,r),r+=2;var u=o.readUshort(n,r);r+=2;for(var f=c.ltype,h=0;h<u;h++){var p=o.readUshort(n,r);r+=2;var v=s(n,f,l+p,c);c.tabs.push(v)}return c},e._lctf.numOfOnes=function(n){for(var r=0,s=0;s<32;s++)(n>>>s&1)!=0&&r++;return r},e._lctf.readClassDef=function(n,r){var s=e._bin,o=[],l=s.readUshort(n,r);if(r+=2,l==1){var c=s.readUshort(n,r);r+=2;var u=s.readUshort(n,r);r+=2;for(var f=0;f<u;f++)o.push(c+f),o.push(c+f),o.push(s.readUshort(n,r)),r+=2}if(l==2){var h=s.readUshort(n,r);for(r+=2,f=0;f<h;f++)o.push(s.readUshort(n,r)),r+=2,o.push(s.readUshort(n,r)),r+=2,o.push(s.readUshort(n,r)),r+=2}return o},e._lctf.getInterval=function(n,r){for(var s=0;s<n.length;s+=3){var o=n[s],l=n[s+1];if(n[s+2],o<=r&&r<=l)return s}return-1},e._lctf.readCoverage=function(n,r){var s=e._bin,o={};o.fmt=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);return r+=2,o.fmt==1&&(o.tab=s.readUshorts(n,r,l)),o.fmt==2&&(o.tab=s.readUshorts(n,r,3*l)),o},e._lctf.coverageIndex=function(n,r){var s=n.tab;if(n.fmt==1)return s.indexOf(r);if(n.fmt==2){var o=e._lctf.getInterval(s,r);if(o!=-1)return s[o+2]+(r-s[o])}return-1},e._lctf.readFeatureList=function(n,r){var s=e._bin,o=r,l=[],c=s.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=s.readASCII(n,r,4);r+=4;var h=s.readUshort(n,r);r+=2;var p=e._lctf.readFeatureTable(n,o+h);p.tag=f.trim(),l.push(p)}return l},e._lctf.readFeatureTable=function(n,r){var s=e._bin,o=r,l={},c=s.readUshort(n,r);r+=2,c>0&&(l.featureParams=o+c);var u=s.readUshort(n,r);r+=2,l.tab=[];for(var f=0;f<u;f++)l.tab.push(s.readUshort(n,r+2*f));return l},e._lctf.readScriptList=function(n,r){var s=e._bin,o=r,l={},c=s.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=s.readASCII(n,r,4);r+=4;var h=s.readUshort(n,r);r+=2,l[f.trim()]=e._lctf.readScriptTable(n,o+h)}return l},e._lctf.readScriptTable=function(n,r){var s=e._bin,o=r,l={},c=s.readUshort(n,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var u=s.readUshort(n,r);r+=2;for(var f=0;f<u;f++){var h=s.readASCII(n,r,4);r+=4;var p=s.readUshort(n,r);r+=2,l[h.trim()]=e._lctf.readLangSysTable(n,o+p)}return l},e._lctf.readLangSysTable=function(n,r){var s=e._bin,o={};s.readUshort(n,r),r+=2,o.reqFeature=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);return r+=2,o.features=s.readUshorts(n,r,l),o},e.CFF={},e.CFF.parse=function(n,r,s){var o=e._bin;(n=new Uint8Array(n.buffer,r,s))[r=0],n[++r],n[++r],n[++r],r++;var l=[];r=e.CFF.readIndex(n,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(n,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var f=[];r=e.CFF.readIndex(n,r,f);var h=[];for(u=0;u<f.length-1;u++)h.push(e.CFF.readDict(n,r+f[u],r+f[u+1]));r+=f[f.length-1];var p=h[0],v=[];r=e.CFF.readIndex(n,r,v);var _=[];for(u=0;u<v.length-1;u++)_.push(o.readASCII(n,r+v[u],v[u+1]-v[u]));if(r+=v[v.length-1],e.CFF.readSubrs(n,r,p),p.CharStrings){r=p.CharStrings,v=[],r=e.CFF.readIndex(n,r,v);var d=[];for(u=0;u<v.length-1;u++)d.push(o.readBytes(n,r+v[u],v[u+1]-v[u]));p.CharStrings=d}if(p.ROS){r=p.FDArray;var g=[];for(r=e.CFF.readIndex(n,r,g),p.FDArray=[],u=0;u<g.length-1;u++){var b=e.CFF.readDict(n,r+g[u],r+g[u+1]);e.CFF._readFDict(n,b,_),p.FDArray.push(b)}r+=g[g.length-1],r=p.FDSelect,p.FDSelect=[];var M=n[r];if(r++,M!=3)throw M;var E=o.readUshort(n,r);for(r+=2,u=0;u<E+1;u++)p.FDSelect.push(o.readUshort(n,r),n[r+2]),r+=3}return p.Encoding&&(p.Encoding=e.CFF.readEncoding(n,p.Encoding,p.CharStrings.length)),p.charset&&(p.charset=e.CFF.readCharset(n,p.charset,p.CharStrings.length)),e.CFF._readFDict(n,p,_),p},e.CFF._readFDict=function(n,r,s){var o;for(var l in r.Private&&(o=r.Private[1],r.Private=e.CFF.readDict(n,o,o+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(n,o+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=s[r[l]-426+35])},e.CFF.readSubrs=function(n,r,s){var o=e._bin,l=[];r=e.CFF.readIndex(n,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,s.Bias=c,s.Subrs=[];for(var f=0;f<l.length-1;f++)s.Subrs.push(o.readBytes(n,r+l[f],l[f+1]-l[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,r){for(var s=0;s<n.charset.length;s++)if(n.charset[s]==r)return s;return-1},e.CFF.glyphBySE=function(n,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[r])},e.CFF.readEncoding=function(n,r,s){e._bin;var o=[".notdef"],l=n[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=n[r];r++;for(var u=0;u<c;u++)o.push(n[r+u]);return o},e.CFF.readCharset=function(n,r,s){var o=e._bin,l=[".notdef"],c=n[r];if(r++,c==0)for(var u=0;u<s;u++){var f=o.readUshort(n,r);r+=2,l.push(f)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<s;){f=o.readUshort(n,r),r+=2;var h=0;for(c==1?(h=n[r],r++):(h=o.readUshort(n,r),r+=2),u=0;u<=h;u++)l.push(f),f++}}return l},e.CFF.readIndex=function(n,r,s){var o=e._bin,l=o.readUshort(n,r)+1,c=n[r+=2];if(r++,c==1)for(var u=0;u<l;u++)s.push(n[r+u]);else if(c==2)for(u=0;u<l;u++)s.push(o.readUshort(n,r+2*u));else if(c==3)for(u=0;u<l;u++)s.push(16777215&o.readUint(n,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(n,r,s){var o=e._bin,l=n[r],c=n[r+1];n[r+2],n[r+3],n[r+4];var u=1,f=null,h=null;l<=20&&(f=l,u=1),l==12&&(f=100*l+c,u=2),21<=l&&l<=27&&(f=l,u=1),l==28&&(h=o.readShort(n,r+1),u=3),29<=l&&l<=31&&(f=l,u=1),32<=l&&l<=246&&(h=l-139,u=1),247<=l&&l<=250&&(h=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(h=256*-(l-251)-c-108,u=2),l==255&&(h=o.readInt(n,r+1)/65535,u=5),s.val=h??"o"+f,s.size=u},e.CFF.readCharString=function(n,r,s){for(var o=r+s,l=e._bin,c=[];r<o;){var u=n[r],f=n[r+1];n[r+2],n[r+3],n[r+4];var h=1,p=null,v=null;u<=20&&(p=u,h=1),u==12&&(p=100*u+f,h=2),u!=19&&u!=20||(p=u,h=2),21<=u&&u<=27&&(p=u,h=1),u==28&&(v=l.readShort(n,r+1),h=3),29<=u&&u<=31&&(p=u,h=1),32<=u&&u<=246&&(v=u-139,h=1),247<=u&&u<=250&&(v=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(v=256*-(u-251)-f-108,h=2),u==255&&(v=l.readInt(n,r+1)/65535,h=5),c.push(v??"o"+p),r+=h}return c},e.CFF.readDict=function(n,r,s){for(var o=e._bin,l={},c=[];r<s;){var u=n[r],f=n[r+1];n[r+2],n[r+3],n[r+4];var h=1,p=null,v=null;if(u==28&&(v=o.readShort(n,r+1),h=3),u==29&&(v=o.readInt(n,r+1),h=5),32<=u&&u<=246&&(v=u-139,h=1),247<=u&&u<=250&&(v=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(v=256*-(u-251)-f-108,h=2),u==255)throw v=o.readInt(n,r+1)/65535,h=5,"unknown number";if(u==30){var _=[];for(h=1;;){var d=n[r+h];h++;var g=d>>4,b=15&d;if(g!=15&&_.push(g),b!=15&&_.push(b),b==15)break}for(var M="",E=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],w=0;w<_.length;w++)M+=E[_[w]];v=parseFloat(M)}u<=21&&(p=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(p=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],h=2)),p!=null?(l[p]=c.length==1?c[0]:c,c=[]):c.push(v),r+=h}return l},e.cmap={},e.cmap.parse=function(n,r,s){n=new Uint8Array(n.buffer,r,s),r=0;var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2;var u=[];l.tables=[];for(var f=0;f<c;f++){var h=o.readUshort(n,r);r+=2;var p=o.readUshort(n,r);r+=2;var v=o.readUint(n,r);r+=4;var _="p"+h+"e"+p,d=u.indexOf(v);if(d==-1){var g;d=l.tables.length,u.push(v);var b=o.readUshort(n,v);b==0?g=e.cmap.parse0(n,v):b==4?g=e.cmap.parse4(n,v):b==6?g=e.cmap.parse6(n,v):b==12?g=e.cmap.parse12(n,v):console.debug("unknown format: "+b,h,p,v),l.tables.push(g)}if(l[_]!=null)throw"multiple tables for one platform+encoding";l[_]=d}return l},e.cmap.parse0=function(n,r){var s=e._bin,o={};o.format=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);r+=2,s.readUshort(n,r),r+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[r+c]);return o},e.cmap.parse4=function(n,r){var s=e._bin,o=r,l={};l.format=s.readUshort(n,r),r+=2;var c=s.readUshort(n,r);r+=2,s.readUshort(n,r),r+=2;var u=s.readUshort(n,r);r+=2;var f=u/2;l.searchRange=s.readUshort(n,r),r+=2,l.entrySelector=s.readUshort(n,r),r+=2,l.rangeShift=s.readUshort(n,r),r+=2,l.endCount=s.readUshorts(n,r,f),r+=2*f,r+=2,l.startCount=s.readUshorts(n,r,f),r+=2*f,l.idDelta=[];for(var h=0;h<f;h++)l.idDelta.push(s.readShort(n,r)),r+=2;for(l.idRangeOffset=s.readUshorts(n,r,f),r+=2*f,l.glyphIdArray=[];r<o+c;)l.glyphIdArray.push(s.readUshort(n,r)),r+=2;return l},e.cmap.parse6=function(n,r){var s=e._bin,o={};o.format=s.readUshort(n,r),r+=2,s.readUshort(n,r),r+=2,s.readUshort(n,r),r+=2,o.firstCode=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);r+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(s.readUshort(n,r)),r+=2;return o},e.cmap.parse12=function(n,r){var s=e._bin,o={};o.format=s.readUshort(n,r),r+=2,r+=2,s.readUint(n,r),r+=4,s.readUint(n,r),r+=4;var l=s.readUint(n,r);r+=4,o.groups=[];for(var c=0;c<l;c++){var u=r+12*c,f=s.readUint(n,u+0),h=s.readUint(n,u+4),p=s.readUint(n,u+8);o.groups.push([f,h,p])}return o},e.glyf={},e.glyf.parse=function(n,r,s,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,r){var s=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[r];if(n.loca[r]==n.loca[r+1])return null;var c={};if(c.noc=s.readShort(o,l),l+=2,c.xMin=s.readShort(o,l),l+=2,c.yMin=s.readShort(o,l),l+=2,c.xMax=s.readShort(o,l),l+=2,c.yMax=s.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(s.readUshort(o,l)),l+=2;var f=s.readUshort(o,l);if(l+=2,o.length-l<f)return null;c.instructions=s.readBytes(o,l,f),l+=f;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var p=o[l];if(l++,c.flags.push(p),(8&p)!=0){var v=o[l];l++;for(var _=0;_<v;_++)c.flags.push(p),u++}}for(c.xs=[],u=0;u<h;u++){var d=(2&c.flags[u])!=0,g=(16&c.flags[u])!=0;d?(c.xs.push(g?o[l]:-o[l]),l++):g?c.xs.push(0):(c.xs.push(s.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<h;u++)d=(4&c.flags[u])!=0,g=(32&c.flags[u])!=0,d?(c.ys.push(g?o[l]:-o[l]),l++):g?c.ys.push(0):(c.ys.push(s.readShort(o,l)),l+=2);var b=0,M=0;for(u=0;u<h;u++)b+=c.xs[u],M+=c.ys[u],c.xs[u]=b,c.ys[u]=M}else{var E;c.parts=[];do{E=s.readUshort(o,l),l+=2;var w={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(w),w.glyphIndex=s.readUshort(o,l),l+=2,1&E){var S=s.readShort(o,l);l+=2;var T=s.readShort(o,l);l+=2}else S=s.readInt8(o,l),l++,T=s.readInt8(o,l),l++;2&E?(w.m.tx=S,w.m.ty=T):(w.p1=S,w.p2=T),8&E?(w.m.a=w.m.d=s.readF2dot14(o,l),l+=2):64&E?(w.m.a=s.readF2dot14(o,l),l+=2,w.m.d=s.readF2dot14(o,l),l+=2):128&E&&(w.m.a=s.readF2dot14(o,l),l+=2,w.m.b=s.readF2dot14(o,l),l+=2,w.m.c=s.readF2dot14(o,l),l+=2,w.m.d=s.readF2dot14(o,l),l+=2)}while(32&E);if(256&E){var y=s.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<y;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,r,s,o){var l=r;r+=4;var c=e._bin.readUshort(n,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,r,s,o){return e._lctf.parse(n,r,s,o,e.GPOS.subt)},e.GPOS.subt=function(n,r,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var f=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,f+c)}if(r==1&&u.fmt==1){var h=l.readUshort(n,s);s+=2,h!=0&&(u.pos=e.GPOS.readValueRecord(n,s,h))}else if(r==2&&u.fmt>=1&&u.fmt<=2){h=l.readUshort(n,s),s+=2;var p=l.readUshort(n,s);s+=2;var v=e._lctf.numOfOnes(h),_=e._lctf.numOfOnes(p);if(u.fmt==1){u.pairsets=[];var d=l.readUshort(n,s);s+=2;for(var g=0;g<d;g++){var b=c+l.readUshort(n,s);s+=2;var M=l.readUshort(n,b);b+=2;for(var E=[],w=0;w<M;w++){var S=l.readUshort(n,b);b+=2,h!=0&&(A=e.GPOS.readValueRecord(n,b,h),b+=2*v),p!=0&&(O=e.GPOS.readValueRecord(n,b,p),b+=2*_),E.push({gid2:S,val1:A,val2:O})}u.pairsets.push(E)}}if(u.fmt==2){var T=l.readUshort(n,s);s+=2;var y=l.readUshort(n,s);s+=2;var m=l.readUshort(n,s);s+=2;var x=l.readUshort(n,s);for(s+=2,u.classDef1=e._lctf.readClassDef(n,c+T),u.classDef2=e._lctf.readClassDef(n,c+y),u.matrix=[],g=0;g<m;g++){var C=[];for(w=0;w<x;w++){var A=null,O=null;h!=0&&(A=e.GPOS.readValueRecord(n,s,h),s+=2*v),p!=0&&(O=e.GPOS.readValueRecord(n,s,p),s+=2*_),C.push({val1:A,val2:O})}u.matrix.push(C)}}}else if(r==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),u.markClassCount=l.readUshort(n,s+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,u.markClassCount);else if(r==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),u.markClassCount=l.readUshort(n,s+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,u.markClassCount);else{if(r==9&&u.fmt==1){var P=l.readUshort(n,s);s+=2;var k=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=P;else if(o.ltype!=P)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+k)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,r,s){var o=e._bin,l=[];return l.push(1&s?o.readShort(n,r):0),r+=1&s?2:0,l.push(2&s?o.readShort(n,r):0),r+=2&s?2:0,l.push(4&s?o.readShort(n,r):0),r+=4&s?2:0,l.push(8&s?o.readShort(n,r):0),r+=8&s?2:0,l},e.GPOS.readBaseArray=function(n,r,s){var o=e._bin,l=[],c=r,u=o.readUshort(n,r);r+=2;for(var f=0;f<u;f++){for(var h=[],p=0;p<s;p++)h.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,r))),r+=2;l.push(h)}return l},e.GPOS.readMarkArray=function(n,r){var s=e._bin,o=[],l=r,c=s.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=e.GPOS.readAnchorRecord(n,s.readUshort(n,r+2)+l);f.markClass=s.readUshort(n,r),o.push(f),r+=4}return o},e.GPOS.readAnchorRecord=function(n,r){var s=e._bin,o={};return o.fmt=s.readUshort(n,r),o.x=s.readShort(n,r+2),o.y=s.readShort(n,r+4),o},e.GSUB={},e.GSUB.parse=function(n,r,s,o){return e._lctf.parse(n,r,s,o,e.GSUB.subt)},e.GSUB.subt=function(n,r,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var f=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,c+f)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,s),s+=2;else if(u.fmt==2){var h=l.readUshort(n,s);s+=2,u.newg=l.readUshorts(n,s,h),s+=2*u.newg.length}}else if(r==2&&u.fmt==1){h=l.readUshort(n,s),s+=2,u.seqs=[];for(var p=0;p<h;p++){var v=l.readUshort(n,s)+c;s+=2;var _=l.readUshort(n,v);u.seqs.push(l.readUshorts(n,v+2,_))}}else if(r==4)for(u.vals=[],h=l.readUshort(n,s),s+=2,p=0;p<h;p++){var d=l.readUshort(n,s);s+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+d))}else if(r==5&&u.fmt==2){if(u.fmt==2){var g=l.readUshort(n,s);s+=2,u.cDef=e._lctf.readClassDef(n,c+g),u.scset=[];var b=l.readUshort(n,s);for(s+=2,p=0;p<b;p++){var M=l.readUshort(n,s);s+=2,u.scset.push(M==0?null:e.GSUB.readSubClassSet(n,c+M))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(p=0;p<3;p++){h=l.readUshort(n,s),s+=2;for(var E=[],w=0;w<h;w++)E.push(e._lctf.readCoverage(n,c+l.readUshort(n,s+2*w)));s+=2*h,p==0&&(u.backCvg=E),p==1&&(u.inptCvg=E),p==2&&(u.ahedCvg=E)}h=l.readUshort(n,s),s+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,s,h)}}else{if(r==7&&u.fmt==1){var S=l.readUshort(n,s);s+=2;var T=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=S;else if(o.ltype!=S)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+T)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,r){var s=e._bin.readUshort,o=r,l=[],c=s(n,r);r+=2;for(var u=0;u<c;u++){var f=s(n,r);r+=2,l.push(e.GSUB.readSubClassRule(n,o+f))}return l},e.GSUB.readSubClassRule=function(n,r){var s=e._bin.readUshort,o={},l=s(n,r),c=s(n,r+=2);r+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(s(n,r)),r+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,r,c),o},e.GSUB.readSubstLookupRecords=function(n,r,s){for(var o=e._bin.readUshort,l=[],c=0;c<s;c++)l.push(o(n,r),o(n,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(n,r){var s=e._bin,o=r,l=[],c=s.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=s.readUshort(n,r);r+=2,l.push(e.GSUB.readChainSubClassRule(n,o+f))}return l},e.GSUB.readChainSubClassRule=function(n,r){for(var s=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=s.readUshort(n,r);r+=2,c==1&&u--,o[l[c]]=s.readUshorts(n,r,u),r+=2*o[l[c]].length}return u=s.readUshort(n,r),r+=2,o.subst=s.readUshorts(n,r,2*u),r+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,r){var s=e._bin,o=r,l=[],c=s.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=s.readUshort(n,r);r+=2,l.push(e.GSUB.readLigature(n,o+f))}return l},e.GSUB.readLigature=function(n,r){var s=e._bin,o={chain:[]};o.nglyph=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);r+=2;for(var c=0;c<l-1;c++)o.chain.push(s.readUshort(n,r)),r+=2;return o},e.head={},e.head.parse=function(n,r,s){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.fontRevision=o.readFixed(n,r),r+=4,o.readUint(n,r),r+=4,o.readUint(n,r),r+=4,l.flags=o.readUshort(n,r),r+=2,l.unitsPerEm=o.readUshort(n,r),r+=2,l.created=o.readUint64(n,r),r+=8,l.modified=o.readUint64(n,r),r+=8,l.xMin=o.readShort(n,r),r+=2,l.yMin=o.readShort(n,r),r+=2,l.xMax=o.readShort(n,r),r+=2,l.yMax=o.readShort(n,r),r+=2,l.macStyle=o.readUshort(n,r),r+=2,l.lowestRecPPEM=o.readUshort(n,r),r+=2,l.fontDirectionHint=o.readShort(n,r),r+=2,l.indexToLocFormat=o.readShort(n,r),r+=2,l.glyphDataFormat=o.readShort(n,r),r+=2,l},e.hhea={},e.hhea.parse=function(n,r,s){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.ascender=o.readShort(n,r),r+=2,l.descender=o.readShort(n,r),r+=2,l.lineGap=o.readShort(n,r),r+=2,l.advanceWidthMax=o.readUshort(n,r),r+=2,l.minLeftSideBearing=o.readShort(n,r),r+=2,l.minRightSideBearing=o.readShort(n,r),r+=2,l.xMaxExtent=o.readShort(n,r),r+=2,l.caretSlopeRise=o.readShort(n,r),r+=2,l.caretSlopeRun=o.readShort(n,r),r+=2,l.caretOffset=o.readShort(n,r),r+=2,r+=8,l.metricDataFormat=o.readShort(n,r),r+=2,l.numberOfHMetrics=o.readUshort(n,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(n,r,s,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,f=0,h=0;h<o.maxp.numGlyphs;h++)h<o.hhea.numberOfHMetrics&&(u=l.readUshort(n,r),r+=2,f=l.readShort(n,r),r+=2),c.aWidth.push(u),c.lsBearing.push(f);return c},e.kern={},e.kern.parse=function(n,r,s,o){var l=e._bin,c=l.readUshort(n,r);if(r+=2,c==1)return e.kern.parseV1(n,r-2,s,o);var u=l.readUshort(n,r);r+=2;for(var f={glyph1:[],rval:[]},h=0;h<u;h++){r+=2,s=l.readUshort(n,r),r+=2;var p=l.readUshort(n,r);r+=2;var v=p>>>8;if((v&=15)!=0)throw"unknown kern table format: "+v;r=e.kern.readFormat0(n,r,f)}return f},e.kern.parseV1=function(n,r,s,o){var l=e._bin;l.readFixed(n,r),r+=4;var c=l.readUint(n,r);r+=4;for(var u={glyph1:[],rval:[]},f=0;f<c;f++){l.readUint(n,r),r+=4;var h=l.readUshort(n,r);r+=2,l.readUshort(n,r),r+=2;var p=h>>>8;if((p&=15)!=0)throw"unknown kern table format: "+p;r=e.kern.readFormat0(n,r,u)}return u},e.kern.readFormat0=function(n,r,s){var o=e._bin,l=-1,c=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2;for(var u=0;u<c;u++){var f=o.readUshort(n,r);r+=2;var h=o.readUshort(n,r);r+=2;var p=o.readShort(n,r);r+=2,f!=l&&(s.glyph1.push(f),s.rval.push({glyph2:[],vals:[]}));var v=s.rval[s.rval.length-1];v.glyph2.push(h),v.vals.push(p),l=f}return r},e.loca={},e.loca.parse=function(n,r,s,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,f=o.maxp.numGlyphs+1;if(u==0)for(var h=0;h<f;h++)c.push(l.readUshort(n,r+(h<<1))<<1);if(u==1)for(h=0;h<f;h++)c.push(l.readUint(n,r+(h<<2)));return c},e.maxp={},e.maxp.parse=function(n,r,s){var o=e._bin,l={},c=o.readUint(n,r);return r+=4,l.numGlyphs=o.readUshort(n,r),r+=2,c==65536&&(l.maxPoints=o.readUshort(n,r),r+=2,l.maxContours=o.readUshort(n,r),r+=2,l.maxCompositePoints=o.readUshort(n,r),r+=2,l.maxCompositeContours=o.readUshort(n,r),r+=2,l.maxZones=o.readUshort(n,r),r+=2,l.maxTwilightPoints=o.readUshort(n,r),r+=2,l.maxStorage=o.readUshort(n,r),r+=2,l.maxFunctionDefs=o.readUshort(n,r),r+=2,l.maxInstructionDefs=o.readUshort(n,r),r+=2,l.maxStackElements=o.readUshort(n,r),r+=2,l.maxSizeOfInstructions=o.readUshort(n,r),r+=2,l.maxComponentElements=o.readUshort(n,r),r+=2,l.maxComponentDepth=o.readUshort(n,r),r+=2),l},e.name={},e.name.parse=function(n,r,s){var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2,o.readUshort(n,r);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=r+=2,p=0;p<c;p++){var v=o.readUshort(n,r);r+=2;var _=o.readUshort(n,r);r+=2;var d=o.readUshort(n,r);r+=2;var g=o.readUshort(n,r);r+=2;var b=o.readUshort(n,r);r+=2;var M=o.readUshort(n,r);r+=2;var E,w=f[g],S=h+12*c+M;if(v==0)E=o.readUnicode(n,S,b/2);else if(v==3&&_==0)E=o.readUnicode(n,S,b/2);else if(_==0)E=o.readASCII(n,S,b);else if(_==1)E=o.readUnicode(n,S,b/2);else if(_==3)E=o.readUnicode(n,S,b/2);else{if(v!=1)throw"unknown encoding "+_+", platformID: "+v;E=o.readASCII(n,S,b),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var T="p"+v+","+d.toString(16);l[T]==null&&(l[T]={}),l[T][w!==void 0?w:g]=E,l[T]._lang=d}for(var y in l)if(l[y].postScriptName!=null&&l[y]._lang==1033)return l[y];for(var y in l)if(l[y].postScriptName!=null&&l[y]._lang==0)return l[y];for(var y in l)if(l[y].postScriptName!=null&&l[y]._lang==3084)return l[y];for(var y in l)if(l[y].postScriptName!=null)return l[y];for(var y in l){u=y;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,r,s){var o=e._bin.readUshort(n,r);r+=2;var l={};if(o==0)e["OS/2"].version0(n,r,l);else if(o==1)e["OS/2"].version1(n,r,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,r,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,r,l)}return l},e["OS/2"].version0=function(n,r,s){var o=e._bin;return s.xAvgCharWidth=o.readShort(n,r),r+=2,s.usWeightClass=o.readUshort(n,r),r+=2,s.usWidthClass=o.readUshort(n,r),r+=2,s.fsType=o.readUshort(n,r),r+=2,s.ySubscriptXSize=o.readShort(n,r),r+=2,s.ySubscriptYSize=o.readShort(n,r),r+=2,s.ySubscriptXOffset=o.readShort(n,r),r+=2,s.ySubscriptYOffset=o.readShort(n,r),r+=2,s.ySuperscriptXSize=o.readShort(n,r),r+=2,s.ySuperscriptYSize=o.readShort(n,r),r+=2,s.ySuperscriptXOffset=o.readShort(n,r),r+=2,s.ySuperscriptYOffset=o.readShort(n,r),r+=2,s.yStrikeoutSize=o.readShort(n,r),r+=2,s.yStrikeoutPosition=o.readShort(n,r),r+=2,s.sFamilyClass=o.readShort(n,r),r+=2,s.panose=o.readBytes(n,r,10),r+=10,s.ulUnicodeRange1=o.readUint(n,r),r+=4,s.ulUnicodeRange2=o.readUint(n,r),r+=4,s.ulUnicodeRange3=o.readUint(n,r),r+=4,s.ulUnicodeRange4=o.readUint(n,r),r+=4,s.achVendID=[o.readInt8(n,r),o.readInt8(n,r+1),o.readInt8(n,r+2),o.readInt8(n,r+3)],r+=4,s.fsSelection=o.readUshort(n,r),r+=2,s.usFirstCharIndex=o.readUshort(n,r),r+=2,s.usLastCharIndex=o.readUshort(n,r),r+=2,s.sTypoAscender=o.readShort(n,r),r+=2,s.sTypoDescender=o.readShort(n,r),r+=2,s.sTypoLineGap=o.readShort(n,r),r+=2,s.usWinAscent=o.readUshort(n,r),r+=2,s.usWinDescent=o.readUshort(n,r),r+=2},e["OS/2"].version1=function(n,r,s){var o=e._bin;return r=e["OS/2"].version0(n,r,s),s.ulCodePageRange1=o.readUint(n,r),r+=4,s.ulCodePageRange2=o.readUint(n,r),r+=4},e["OS/2"].version2=function(n,r,s){var o=e._bin;return r=e["OS/2"].version1(n,r,s),s.sxHeight=o.readShort(n,r),r+=2,s.sCapHeight=o.readShort(n,r),r+=2,s.usDefault=o.readUshort(n,r),r+=2,s.usBreak=o.readUshort(n,r),r+=2,s.usMaxContext=o.readUshort(n,r),r+=2},e["OS/2"].version5=function(n,r,s){var o=e._bin;return r=e["OS/2"].version2(n,r,s),s.usLowerOpticalPointSize=o.readUshort(n,r),r+=2,s.usUpperOpticalPointSize=o.readUshort(n,r),r+=2},e.post={},e.post.parse=function(n,r,s){var o=e._bin,l={};return l.version=o.readFixed(n,r),r+=4,l.italicAngle=o.readFixed(n,r),r+=4,l.underlinePosition=o.readShort(n,r),r+=2,l.underlineThickness=o.readShort(n,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,r){var s=n.cmap,o=-1;if(s.p0e4!=null?o=s.p0e4:s.p3e1!=null?o=s.p3e1:s.p1e0!=null?o=s.p1e0:s.p0e3!=null&&(o=s.p0e3),o==-1)throw"no familiar platform and encoding!";var l=s.tables[o];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var f=l.groups[u];if(f[0]<=r&&r<=f[1])return f[2]+(r-f[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,r){var s={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[r]){var o=n.SVG.entries[r];return o==null?s:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[r]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var f=0;c.FDSelect[f+2]<=r;)f+=2;u=c.FDArray[c.FDSelect[f+1]].Private}e.U._drawCFF(n.CFF.CharStrings[r],l,c,u,s)}else n.glyf&&e.U._drawGlyf(r,n,s);return s},e.U._drawGlyf=function(n,r,s){var o=r.glyf[n];o==null&&(o=r.glyf[n]=e.glyf._parseGlyf(r,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,s):e.U._compoGlyph(o,r,s))},e.U._simpleGlyph=function(n,r){for(var s=0;s<n.noc;s++){for(var o=s==0?0:n.endPts[s-1]+1,l=n.endPts[s],c=o;c<=l;c++){var u=c==o?l:c-1,f=c==l?o:c+1,h=1&n.flags[c],p=1&n.flags[u],v=1&n.flags[f],_=n.xs[c],d=n.ys[c];if(c==o)if(h){if(!p){e.U.P.moveTo(r,_,d);continue}e.U.P.moveTo(r,n.xs[u],n.ys[u])}else p?e.U.P.moveTo(r,n.xs[u],n.ys[u]):e.U.P.moveTo(r,(n.xs[u]+_)/2,(n.ys[u]+d)/2);h?p&&e.U.P.lineTo(r,_,d):v?e.U.P.qcurveTo(r,_,d,n.xs[f],n.ys[f]):e.U.P.qcurveTo(r,_,d,(_+n.xs[f])/2,(d+n.ys[f])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(n,r,s){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,f=0;f<l.crds.length;f+=2){var h=l.crds[f],p=l.crds[f+1];s.crds.push(h*u.a+p*u.b+u.tx),s.crds.push(h*u.c+p*u.d+u.ty)}for(f=0;f<l.cmds.length;f++)s.cmds.push(l.cmds[f])}},e.U._getGlyphClass=function(n,r){var s=e._lctf.getInterval(r,n);return s==-1?0:r[s+2]},e.U._applySubs=function(n,r,s,o){for(var l=n.length-r-1,c=0;c<s.tabs.length;c++)if(s.tabs[c]!=null){var u,f=s.tabs[c];if(!f.coverage||(u=e._lctf.coverageIndex(f.coverage,n[r]))!=-1){if(s.ltype==1)n[r],f.fmt==1?n[r]=n[r]+f.delta:n[r]=f.newg[u];else if(s.ltype==4)for(var h=f.vals[u],p=0;p<h.length;p++){var v=h[p],_=v.chain.length;if(!(_>l)){for(var d=!0,g=0,b=0;b<_;b++){for(;n[r+g+(1+b)]==-1;)g++;v.chain[b]!=n[r+g+(1+b)]&&(d=!1)}if(d){for(n[r]=v.nglyph,b=0;b<_+g;b++)n[r+b+1]=-1;break}}}else if(s.ltype==5&&f.fmt==2)for(var M=e._lctf.getInterval(f.cDef,n[r]),E=f.cDef[M+2],w=f.scset[E],S=0;S<w.length;S++){var T=w[S],y=T.input;if(!(y.length>l)){for(d=!0,b=0;b<y.length;b++){var m=e._lctf.getInterval(f.cDef,n[r+1+b]);if(M==-1&&f.cDef[m+2]!=y[b]){d=!1;break}}if(d){var x=T.substLookupRecords;for(p=0;p<x.length;p+=2)x[p],x[p+1]}}}else if(s.ltype==6&&f.fmt==3){if(!e.U._glsCovered(n,f.backCvg,r-f.backCvg.length)||!e.U._glsCovered(n,f.inptCvg,r)||!e.U._glsCovered(n,f.ahedCvg,r+f.inptCvg.length))continue;var C=f.lookupRec;for(S=0;S<C.length;S+=2){M=C[S];var A=o[C[S+1]];e.U._applySubs(n,r+M,A,o)}}}}},e.U._glsCovered=function(n,r,s){for(var o=0;o<r.length;o++)if(e._lctf.coverageIndex(r[o],n[s+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,r,s){for(var o={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var f=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,h=e.U.glyphToPath(n,u),p=0;p<h.crds.length;p+=2)o.crds.push(h.crds[p]+l),o.crds.push(h.crds[p+1]);for(s&&o.cmds.push(s),p=0;p<h.cmds.length;p++)o.cmds.push(h.cmds[p]);s&&o.cmds.push("X"),l+=n.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(n,u,f))}}return o},e.U.P={},e.U.P.moveTo=function(n,r,s){n.cmds.push("M"),n.crds.push(r,s)},e.U.P.lineTo=function(n,r,s){n.cmds.push("L"),n.crds.push(r,s)},e.U.P.curveTo=function(n,r,s,o,l,c,u){n.cmds.push("C"),n.crds.push(r,s,o,l,c,u)},e.U.P.qcurveTo=function(n,r,s,o,l){n.cmds.push("Q"),n.crds.push(r,s,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,r,s,o,l){for(var c=r.stack,u=r.nStems,f=r.haveWidth,h=r.width,p=r.open,v=0,_=r.x,d=r.y,g=0,b=0,M=0,E=0,w=0,S=0,T=0,y=0,m=0,x=0,C={val:0,size:0};v<n.length;){e.CFF.getCharString(n,v,C);var A=C.val;if(v+=C.size,A=="o1"||A=="o18")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(A=="o3"||A=="o23")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(A=="o4")c.length>1&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),p&&e.U.P.closePath(l),d+=c.pop(),e.U.P.moveTo(l,_,d),p=!0;else if(A=="o5")for(;c.length>0;)_+=c.shift(),d+=c.shift(),e.U.P.lineTo(l,_,d);else if(A=="o6"||A=="o7")for(var O=c.length,P=A=="o6",k=0;k<O;k++){var F=c.shift();P?_+=F:d+=F,P=!P,e.U.P.lineTo(l,_,d)}else if(A=="o8"||A=="o24"){O=c.length;for(var X=0;X+6<=O;)g=_+c.shift(),b=d+c.shift(),M=g+c.shift(),E=b+c.shift(),_=M+c.shift(),d=E+c.shift(),e.U.P.curveTo(l,g,b,M,E,_,d),X+=6;A=="o24"&&(_+=c.shift(),d+=c.shift(),e.U.P.lineTo(l,_,d))}else{if(A=="o11")break;if(A=="o1234"||A=="o1235"||A=="o1236"||A=="o1237")A=="o1234"&&(b=d,M=(g=_+c.shift())+c.shift(),x=E=b+c.shift(),S=E,y=d,_=(T=(w=(m=M+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,g,b,M,E,m,x),e.U.P.curveTo(l,w,S,T,y,_,d)),A=="o1235"&&(g=_+c.shift(),b=d+c.shift(),M=g+c.shift(),E=b+c.shift(),m=M+c.shift(),x=E+c.shift(),w=m+c.shift(),S=x+c.shift(),T=w+c.shift(),y=S+c.shift(),_=T+c.shift(),d=y+c.shift(),c.shift(),e.U.P.curveTo(l,g,b,M,E,m,x),e.U.P.curveTo(l,w,S,T,y,_,d)),A=="o1236"&&(g=_+c.shift(),b=d+c.shift(),M=g+c.shift(),x=E=b+c.shift(),S=E,T=(w=(m=M+c.shift())+c.shift())+c.shift(),y=S+c.shift(),_=T+c.shift(),e.U.P.curveTo(l,g,b,M,E,m,x),e.U.P.curveTo(l,w,S,T,y,_,d)),A=="o1237"&&(g=_+c.shift(),b=d+c.shift(),M=g+c.shift(),E=b+c.shift(),m=M+c.shift(),x=E+c.shift(),w=m+c.shift(),S=x+c.shift(),T=w+c.shift(),y=S+c.shift(),Math.abs(T-_)>Math.abs(y-d)?_=T+c.shift():d=y+c.shift(),e.U.P.curveTo(l,g,b,M,E,m,x),e.U.P.curveTo(l,w,S,T,y,_,d));else if(A=="o14"){if(c.length>0&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),c.length==4){var J=c.shift(),q=c.shift(),V=c.shift(),G=c.shift(),W=e.CFF.glyphBySE(s,V),z=e.CFF.glyphBySE(s,G);e.U._drawCFF(s.CharStrings[W],r,s,o,l),r.x=J,r.y=q,e.U._drawCFF(s.CharStrings[z],r,s,o,l)}p&&(e.U.P.closePath(l),p=!1)}else if(A=="o19"||A=="o20")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0,v+=u+7>>3;else if(A=="o21")c.length>2&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),d+=c.pop(),_+=c.pop(),p&&e.U.P.closePath(l),e.U.P.moveTo(l,_,d),p=!0;else if(A=="o22")c.length>1&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),_+=c.pop(),p&&e.U.P.closePath(l),e.U.P.moveTo(l,_,d),p=!0;else if(A=="o25"){for(;c.length>6;)_+=c.shift(),d+=c.shift(),e.U.P.lineTo(l,_,d);g=_+c.shift(),b=d+c.shift(),M=g+c.shift(),E=b+c.shift(),_=M+c.shift(),d=E+c.shift(),e.U.P.curveTo(l,g,b,M,E,_,d)}else if(A=="o26")for(c.length%2&&(_+=c.shift());c.length>0;)g=_,b=d+c.shift(),_=M=g+c.shift(),d=(E=b+c.shift())+c.shift(),e.U.P.curveTo(l,g,b,M,E,_,d);else if(A=="o27")for(c.length%2&&(d+=c.shift());c.length>0;)b=d,M=(g=_+c.shift())+c.shift(),E=b+c.shift(),_=M+c.shift(),d=E,e.U.P.curveTo(l,g,b,M,E,_,d);else if(A=="o10"||A=="o29"){var H=A=="o10"?o:s;if(c.length==0)console.debug("error: empty stack");else{var K=c.pop(),ne=H.Subrs[K+H.Bias];r.x=_,r.y=d,r.nStems=u,r.haveWidth=f,r.width=h,r.open=p,e.U._drawCFF(ne,r,s,o,l),_=r.x,d=r.y,u=r.nStems,f=r.haveWidth,h=r.width,p=r.open}}else if(A=="o30"||A=="o31"){var $=c.length,Y=(X=0,A=="o31");for(X+=$-(O=-3&$);X<O;)Y?(b=d,M=(g=_+c.shift())+c.shift(),d=(E=b+c.shift())+c.shift(),O-X==5?(_=M+c.shift(),X++):_=M,Y=!1):(g=_,b=d+c.shift(),M=g+c.shift(),E=b+c.shift(),_=M+c.shift(),O-X==5?(d=E+c.shift(),X++):d=E,Y=!0),e.U.P.curveTo(l,g,b,M,E,_,d),X+=4}else{if((A+"").charAt(0)=="o")throw console.debug("Unknown operation: "+A,n),A;c.push(A)}}}r.x=_,r.y=d,r.nStems=u,r.haveWidth=f,r.width=h,r.open=p};var t=e,i={Typr:t};return a.Typr=t,a.default=i,Object.defineProperty(a,"__esModule",{value:!0}),a})({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function F1(){return(function(a){var e=Uint8Array,t=Uint16Array,i=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(A,O){for(var P=new t(31),k=0;k<31;++k)P[k]=O+=1<<A[k-1];var F=new i(P[30]);for(k=1;k<30;++k)for(var X=P[k];X<P[k+1];++X)F[X]=X-P[k]<<5|k;return[P,F]},l=o(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var f=o(r,0)[0],h=new t(32768),p=0;p<32768;++p){var v=(43690&p)>>>1|(21845&p)<<1;v=(61680&(v=(52428&v)>>>2|(13107&v)<<2))>>>4|(3855&v)<<4,h[p]=((65280&v)>>>8|(255&v)<<8)>>>1}var _=function(A,O,P){for(var k=A.length,F=0,X=new t(O);F<k;++F)++X[A[F]-1];var J,q=new t(O);for(F=0;F<O;++F)q[F]=q[F-1]+X[F-1]<<1;{J=new t(1<<O);var V=15-O;for(F=0;F<k;++F)if(A[F])for(var G=F<<4|A[F],W=O-A[F],z=q[A[F]-1]++<<W,H=z|(1<<W)-1;z<=H;++z)J[h[z]>>>V]=G}return J},d=new e(288);for(p=0;p<144;++p)d[p]=8;for(p=144;p<256;++p)d[p]=9;for(p=256;p<280;++p)d[p]=7;for(p=280;p<288;++p)d[p]=8;var g=new e(32);for(p=0;p<32;++p)g[p]=5;var b=_(d,9),M=_(g,5),E=function(A){for(var O=A[0],P=1;P<A.length;++P)A[P]>O&&(O=A[P]);return O},w=function(A,O,P){var k=O/8|0;return(A[k]|A[k+1]<<8)>>(7&O)&P},S=function(A,O){var P=O/8|0;return(A[P]|A[P+1]<<8|A[P+2]<<16)>>(7&O)},T=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],y=function(A,O,P){var k=new Error(O||T[A]);if(k.code=A,Error.captureStackTrace&&Error.captureStackTrace(k,y),!P)throw k;return k},m=function(A,O,P){var k=A.length;if(!k||P&&!P.l&&k<5)return O||new e(0);var F=!O||P,X=!P||P.i;P||(P={}),O||(O=new e(3*k));var J,q=function(we){var De=O.length;if(we>De){var Ne=new e(Math.max(2*De,we));Ne.set(O),O=Ne}},V=P.f||0,G=P.p||0,W=P.b||0,z=P.l,H=P.d,K=P.m,ne=P.n,$=8*k;do{if(!z){P.f=V=w(A,G,1);var Y=w(A,G+1,3);if(G+=3,!Y){var R=A[(xe=((J=G)/8|0)+(7&J&&1)+4)-4]|A[xe-3]<<8,D=xe+R;if(D>k){X&&y(0);break}F&&q(W+R),O.set(A.subarray(xe,D),W),P.b=W+=R,P.p=G=8*D;continue}if(Y==1)z=b,H=M,K=9,ne=5;else if(Y==2){var N=w(A,G,31)+257,I=w(A,G+10,15)+4,re=N+w(A,G+5,31)+1;G+=14;for(var Q=new e(re),de=new e(19),me=0;me<I;++me)de[s[me]]=w(A,G+3*me,7);G+=3*I;var Ae=E(de),ae=(1<<Ae)-1,pe=_(de,Ae);for(me=0;me<re;){var xe,te=pe[w(A,G,ae)];if(G+=15&te,(xe=te>>>4)<16)Q[me++]=xe;else{var be=0,U=0;for(xe==16?(U=3+w(A,G,3),G+=2,be=Q[me-1]):xe==17?(U=3+w(A,G,7),G+=3):xe==18&&(U=11+w(A,G,127),G+=7);U--;)Q[me++]=be}}var L=Q.subarray(0,N),Z=Q.subarray(N);K=E(L),ne=E(Z),z=_(L,K),H=_(Z,ne)}else y(1);if(G>$){X&&y(0);break}}F&&q(W+131072);for(var ve=(1<<K)-1,se=(1<<ne)-1,fe=G;;fe=G){var ye=(be=z[S(A,G)&ve])>>>4;if((G+=15&be)>$){X&&y(0);break}if(be||y(2),ye<256)O[W++]=ye;else{if(ye==256){fe=G,z=null;break}var _e=ye-254;if(ye>264){var Ee=n[me=ye-257];_e=w(A,G,(1<<Ee)-1)+c[me],G+=Ee}var Le=H[S(A,G)&se],Ie=Le>>>4;if(Le||y(3),G+=15&Le,Z=f[Ie],Ie>3&&(Ee=r[Ie],Z+=S(A,G)&(1<<Ee)-1,G+=Ee),G>$){X&&y(0);break}F&&q(W+131072);for(var he=W+_e;W<he;W+=4)O[W]=O[W-Z],O[W+1]=O[W+1-Z],O[W+2]=O[W+2-Z],O[W+3]=O[W+3-Z];W=he}}P.l=z,P.p=fe,P.b=W,z&&(V=1,P.m=K,P.d=H,P.n=ne)}while(!V);return W==O.length?O:(function(we,De,Ne){(Ne==null||Ne>we.length)&&(Ne=we.length);var Be=new(we instanceof t?t:we instanceof i?i:e)(Ne-De);return Be.set(we.subarray(De,Ne)),Be})(O,0,W)},x=new e(0),C=typeof TextDecoder<"u"&&new TextDecoder;try{C.decode(x,{stream:!0})}catch{}return a.convert_streams=function(A){var O=new DataView(A),P=0;function k(){var N=O.getUint16(P);return P+=2,N}function F(){var N=O.getUint32(P);return P+=4,N}function X(N){R.setUint16(D,N),D+=2}function J(N){R.setUint32(D,N),D+=4}for(var q={signature:F(),flavor:F(),length:F(),numTables:k(),reserved:k(),totalSfntSize:F(),majorVersion:k(),minorVersion:k(),metaOffset:F(),metaLength:F(),metaOrigLength:F(),privOffset:F(),privLength:F()},V=0;Math.pow(2,V)<=q.numTables;)V++;V--;for(var G=16*Math.pow(2,V),W=16*q.numTables-G,z=12,H=[],K=0;K<q.numTables;K++)H.push({tag:F(),offset:F(),compLength:F(),origLength:F(),origChecksum:F()}),z+=16;var ne,$=new Uint8Array(12+16*H.length+H.reduce((function(N,I){return N+I.origLength+4}),0)),Y=$.buffer,R=new DataView(Y),D=0;return J(q.flavor),X(q.numTables),X(G),X(V),X(W),H.forEach((function(N){J(N.tag),J(N.origChecksum),J(z),J(N.origLength),N.outOffset=z,(z+=N.origLength)%4!=0&&(z+=4-z%4)})),H.forEach((function(N){var I,re=A.slice(N.offset,N.offset+N.compLength);if(N.compLength!=N.origLength){var Q=new Uint8Array(N.origLength);I=new Uint8Array(re,2),m(I,Q)}else Q=new Uint8Array(re);$.set(Q,N.outOffset);var de=0;(z=N.outOffset+N.origLength)%4!=0&&(de=4-z%4),$.set(new Uint8Array(de).buffer,N.outOffset+N.origLength),ne=z+de})),Y.slice(0,ne)},Object.defineProperty(a,"__esModule",{value:!0}),a})({}).convert_streams}function O1(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,r=2,s=4,o=8,l=16,c=32;let u;function f(T){if(!u){const y={R:r,L:n,D:s,C:l,U:c,T:o};u=new Map;for(let m in i){let x=0;i[m].split(",").forEach(C=>{let[A,O]=C.split("+");A=parseInt(A,36),O=O?parseInt(O,36):0,u.set(x+=A,y[m]);for(let P=O;P--;)u.set(++x,y[m])})}}return u.get(T)||c}const h=1,p=2,v=3,_=4,d=[null,"isol","init","fina","medi"];function g(T){const y=new Uint8Array(T.length);let m=c,x=h,C=-1;for(let A=0;A<T.length;A++){const O=T.codePointAt(A);let P=f(O)|0,k=h;P&o||(m&(n|s|l)?P&(r|s|l)?(k=v,(x===h||x===v)&&y[C]++):P&(n|c)&&(x===p||x===_)&&y[C]--:m&(r|c)&&(x===p||x===_)&&y[C]--,x=y[A]=k,m=P,C=A,O>65535&&A++)}return y}function b(T,y){const m=[];for(let C=0;C<y.length;C++){const A=y.codePointAt(C);A>65535&&C++,m.push(a.U.codeToGlyph(T,A))}const x=T.GSUB;if(x){const{lookupList:C,featureList:A}=x;let O;const P=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,k=[];A.forEach(F=>{if(P.test(F.tag))for(let X=0;X<F.tab.length;X++){if(k[F.tab[X]])continue;k[F.tab[X]]=!0;const J=C[F.tab[X]],q=/^(isol|init|fina|medi)$/.test(F.tag);q&&!O&&(O=g(y));for(let V=0;V<m.length;V++)(!O||!q||d[O[V]]===F.tag)&&a.U._applySubs(m,V,J,C)}})}return m}function M(T,y){const m=new Int16Array(y.length*3);let x=0;for(;x<y.length;x++){const P=y[x];if(P===-1)continue;m[x*3+2]=T.hmtx.aWidth[P];const k=T.GPOS;if(k){const F=k.lookupList;for(let X=0;X<F.length;X++){const J=F[X];for(let q=0;q<J.tabs.length;q++){const V=J.tabs[q];if(J.ltype===1){if(a._lctf.coverageIndex(V.coverage,P)!==-1&&V.pos){O(V.pos,x);break}}else if(J.ltype===2){let G=null,W=C();if(W!==-1){const z=a._lctf.coverageIndex(V.coverage,y[W]);if(z!==-1){if(V.fmt===1){const H=V.pairsets[z];for(let K=0;K<H.length;K++)H[K].gid2===P&&(G=H[K])}else if(V.fmt===2){const H=a.U._getGlyphClass(y[W],V.classDef1),K=a.U._getGlyphClass(P,V.classDef2);G=V.matrix[H][K]}if(G){G.val1&&O(G.val1,W),G.val2&&O(G.val2,x);break}}}}else if(J.ltype===4){const G=a._lctf.coverageIndex(V.markCoverage,P);if(G!==-1){const W=C(A),z=W===-1?-1:a._lctf.coverageIndex(V.baseCoverage,y[W]);if(z!==-1){const H=V.markArray[G],K=V.baseArray[z][H.markClass];m[x*3]=K.x-H.x+m[W*3]-m[W*3+2],m[x*3+1]=K.y-H.y+m[W*3+1];break}}}else if(J.ltype===6){const G=a._lctf.coverageIndex(V.mark1Coverage,P);if(G!==-1){const W=C();if(W!==-1){const z=y[W];if(E(T,z)===3){const H=a._lctf.coverageIndex(V.mark2Coverage,z);if(H!==-1){const K=V.mark1Array[G],ne=V.mark2Array[H][K.markClass];m[x*3]=ne.x-K.x+m[W*3]-m[W*3+2],m[x*3+1]=ne.y-K.y+m[W*3+1];break}}}}}}}}else if(T.kern&&!T.cff){const F=C();if(F!==-1){const X=T.kern.glyph1.indexOf(y[F]);if(X!==-1){const J=T.kern.rval[X].glyph2.indexOf(P);J!==-1&&(m[F*3+2]+=T.kern.rval[X].vals[J])}}}}return m;function C(P){for(let k=x-1;k>=0;k--)if(y[k]!==-1&&(!P||P(y[k])))return k;return-1}function A(P){return E(T,P)===1}function O(P,k){for(let F=0;F<3;F++)m[k*3+F]+=P[F]||0}}function E(T,y){const m=T.GDEF&&T.GDEF.glyphClassDef;return m?a.U._getGlyphClass(y,m):0}function w(...T){for(let y=0;y<T.length;y++)if(typeof T[y]=="number")return T[y]}function S(T){const y=Object.create(null),m=T["OS/2"],x=T.hhea,C=T.head.unitsPerEm,A=w(m&&m.sTypoAscender,x&&x.ascender,C),O={unitsPerEm:C,ascender:A,descender:w(m&&m.sTypoDescender,x&&x.descender,0),capHeight:w(m&&m.sCapHeight,A),xHeight:w(m&&m.sxHeight,A),lineGap:w(m&&m.sTypoLineGap,x&&x.lineGap),supportsCodePoint(P){return a.U.codeToGlyph(T,P)>0},forEachGlyph(P,k,F,X){let J=0;const q=1/O.unitsPerEm*k,V=b(T,P);let G=0;const W=M(T,V);return V.forEach((z,H)=>{if(z!==-1){let K=y[z];if(!K){const{cmds:ne,crds:$}=a.U.glyphToPath(T,z);let Y="",R=0;for(let Q=0,de=ne.length;Q<de;Q++){const me=t[ne[Q]];Y+=ne[Q];for(let Ae=1;Ae<=me;Ae++)Y+=(Ae>1?",":"")+$[R++]}let D,N,I,re;if($.length){D=N=1/0,I=re=-1/0;for(let Q=0,de=$.length;Q<de;Q+=2){let me=$[Q],Ae=$[Q+1];me<D&&(D=me),Ae<N&&(N=Ae),me>I&&(I=me),Ae>re&&(re=Ae)}}else D=I=N=re=0;K=y[z]={index:z,advanceWidth:T.hmtx.aWidth[z],xMin:D,yMin:N,xMax:I,yMax:re,path:Y}}X.call(null,K,J+W[H*3]*q,W[H*3+1]*q,G),J+=W[H*3+2]*q,F&&(J+=F*k)}G+=P.codePointAt(G)>65535?2:1}),J}};return O}return function(y){const m=new Uint8Array(y,0,4),x=a._bin.readASCII(m,0,4);if(x==="wOFF")y=e(y);else if(x==="wOF2")throw new Error("woff2 fonts not supported");return S(a.parse(y)[0])}}const N1=ia({name:"Typr Font Parser",dependencies:[I1,F1,O1],init(a,e,t){const i=a(),n=e();return t(i,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function B1(){return(function(a){var e=function(){this.buckets=new Map};e.prototype.add=function(M){var E=M>>5;this.buckets.set(E,(this.buckets.get(E)||0)|1<<(31&M))},e.prototype.has=function(M){var E=this.buckets.get(M>>5);return E!==void 0&&(E&1<<(31&M))!=0},e.prototype.serialize=function(){var M=[];return this.buckets.forEach((function(E,w){M.push((+w).toString(36)+":"+E.toString(36))})),M.join(",")},e.prototype.deserialize=function(M){var E=this;this.buckets.clear(),M.split(",").forEach((function(w){var S=w.split(":");E.buckets.set(parseInt(S[0],36),parseInt(S[1],36))}))};var t=Math.pow(2,8),i=t-1,n=~i;function r(M){var E=(function(S){return S&n})(M).toString(16),w=(function(S){return(S&n)+t-1})(M).toString(16);return"codepoint-index/plane"+(M>>16)+"/"+E+"-"+w+".json"}function s(M,E){var w=M&i,S=E.codePointAt(w/6|0);return((S=(S||48)-48)&1<<w%6)!=0}function o(M,E){var w;(w=M,w.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map((function(S){return S.split("-").map((function(T){return parseInt(T.trim(),16)}))}))).forEach((function(S){var T=S[0],y=S[1];y===void 0&&(y=T),E(T,y)}))}function l(M,E){o(M,(function(w,S){for(var T=w;T<=S;T++)E(T)}))}var c={},u={},f=new WeakMap,h="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function p(M){var E=f.get(M);return E||(E=new e,l(M.ranges,(function(w){return E.add(w)})),f.set(M,E)),E}var v,_=new Map;function d(M,E,w){return M[E]?E:M[w]?w:(function(S){for(var T in S)return T})(M)}function g(M,E){var w=E;if(!M.includes(w)){w=1/0;for(var S=0;S<M.length;S++)Math.abs(M[S]-E)<Math.abs(w-E)&&(w=M[S])}return w}function b(M){return v||(v=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",(function(E){v.add(E)}))),v.has(M)}return a.CodePointSet=e,a.clearCache=function(){c={},u={}},a.getFontsForString=function(M,E){E===void 0&&(E={});var w,S=E.lang;S===void 0&&(S=new RegExp("\\p{Script=Hangul}","u").test(w=M)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(w)?"ja":"en");var T=E.category;T===void 0&&(T="sans-serif");var y=E.style;y===void 0&&(y="normal");var m=E.weight;m===void 0&&(m=400);var x=(E.dataUrl||h).replace(/\/$/g,""),C=new Map,A=new Uint8Array(M.length),O={},P={},k=new Array(M.length),F=new Map,X=!1;function J(G){var W=_.get(G);return W||(W=fetch(x+"/"+G).then((function(z){if(!z.ok)throw new Error(z.statusText);return z.json().then((function(H){if(!Array.isArray(H)||H[0]!==1)throw new Error("Incorrect schema version; need 1, got "+H[0]);return H[1]}))})).catch((function(z){if(x!==h)return X||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+x+'", trying default CDN. '+z.message),X=!0),x=h,_.delete(G),J(G);throw z})),_.set(G,W)),W}for(var q=function(G){var W=M.codePointAt(G),z=r(W);k[G]=z,c[z]||F.has(z)||F.set(z,J(z).then((function(H){c[z]=H}))),W>65535&&(G++,V=G)},V=0;V<M.length;V++)q(V);return Promise.all(F.values()).then((function(){F.clear();for(var G=function(z){var H=M.codePointAt(z),K=null,ne=c[k[z]],$=void 0;for(var Y in ne){var R=P[Y];if(R===void 0&&(R=P[Y]=new RegExp(Y).test(S||"en")),R){for(var D in $=Y,ne[Y])if(s(H,ne[Y][D])){K=D;break}break}}if(!K){e:for(var N in ne)if(N!==$){for(var I in ne[N])if(s(H,ne[N][I])){K=I;break e}}}K||(console.debug("No font coverage for U+"+H.toString(16)),K="latin"),k[z]=K,u[K]||F.has(K)||F.set(K,J("font-meta/"+K+".json").then((function(re){u[K]=re}))),H>65535&&(z++,W=z)},W=0;W<M.length;W++)G(W);return Promise.all(F.values())})).then((function(){for(var G,W=null,z=0;z<M.length;z++){var H=M.codePointAt(z);if(W&&(b(H)||p(W).has(H)))A[z]=A[z-1];else{W=u[k[z]];var K=O[W.id];if(!K){var ne=W.typeforms,$=d(ne,T,"sans-serif"),Y=d(ne[$],y,"normal"),R=g((G=ne[$])===null||G===void 0?void 0:G[Y],m);K=O[W.id]=x+"/font-files/"+W.id+"/"+$+"."+Y+"."+R+".woff"}var D=C.get(K);D==null&&(D=C.size,C.set(K,D)),A[z]=D}H>65535&&(z++,A[z]=A[z-1])}return{fontUrls:Array.from(C.keys()),chars:A}}))},Object.defineProperty(a,"__esModule",{value:!0}),a})({})}function k1(a,e){const t=Object.create(null),i=Object.create(null);function n(s,o){const l=c=>{console.error(`Failure loading font ${s}`,c)};try{const c=new XMLHttpRequest;c.open("get",s,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=a(c.response);u.src=s,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(s,o){let l=t[s];l?o(l):i[s]?i[s].push(o):(i[s]=[o],n(s,c=>{c.src=s,t[s]=c,i[s].forEach(u=>u(c)),delete i[s]}))}return function(s,o,{lang:l,fonts:c=[],style:u="normal",weight:f="normal",unicodeFontsURL:h}={}){const p=new Uint8Array(s.length),v=[];s.length||b();const _=new Map,d=[];if(u!=="italic"&&(u="normal"),typeof f!="number"&&(f=f==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(E=>!E.lang||E.lang.test(l)).reverse(),c.length){let T=0;(function y(m=0){for(let x=m,C=s.length;x<C;x++){const A=s.codePointAt(x);if(T===1&&v[p[x-1]].supportsCodePoint(A)||x>0&&/\s/.test(s[x]))p[x]=p[x-1],T===2&&(d[d.length-1][1]=x);else for(let O=p[x],P=c.length;O<=P;O++)if(O===P){const k=T===2?d[d.length-1]:d[d.length]=[x,x];k[1]=x,T=2}else{p[x]=O;const{src:k,unicodeRange:F}=c[O];if(!F||M(A,F)){const X=t[k];if(!X){r(k,()=>{y(x)});return}if(X.supportsCodePoint(A)){let J=_.get(X);typeof J!="number"&&(J=v.length,v.push(X),_.set(X,J)),p[x]=J,T=1;break}}}A>65535&&x+1<C&&(p[x+1]=p[x],x++,T===2&&(d[d.length-1][1]=x))}g()})()}else d.push([0,s.length-1]),g();function g(){if(d.length){const E=d.map(w=>s.substring(w[0],w[1]+1)).join(`
`);e.getFontsForString(E,{lang:l||void 0,style:u,weight:f,dataUrl:h}).then(({fontUrls:w,chars:S})=>{const T=v.length;let y=0;d.forEach(x=>{for(let C=0,A=x[1]-x[0];C<=A;C++)p[x[0]+C]=S[y++]+T;y++});let m=0;w.forEach((x,C)=>{r(x,A=>{v[C+T]=A,++m===w.length&&b()})})})}else b()}function b(){o({chars:p,fonts:v})}function M(E,w){for(let S=0;S<w.length;S++){const[T,y=T]=w[S];if(T<=E&&E<=y)return!0}return!1}}}const G1=ia({name:"FontResolver",dependencies:[k1,N1,B1],init(a,e,t){return a(e,t())}});function z1(a,e){const i=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",r=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function s({text:v,lang:_,fonts:d,style:g,weight:b,preResolvedFonts:M,unicodeFontsURL:E},w){const S=({chars:T,fonts:y})=>{let m,x;const C=[];for(let A=0;A<T.length;A++)T[A]!==x?(x=T[A],C.push(m={start:A,end:A,fontObj:y[T[A]]})):m.end=A;w(C)};M?S(M):a(v,S,{lang:_,fonts:d,style:g,weight:b,unicodeFontsURL:E})}function o({text:v="",font:_,lang:d,sdfGlyphSize:g=64,fontSize:b=400,fontWeight:M=1,fontStyle:E="normal",letterSpacing:w=0,lineHeight:S="normal",maxWidth:T=1/0,direction:y,textAlign:m="left",textIndent:x=0,whiteSpace:C="normal",overflowWrap:A="normal",anchorX:O=0,anchorY:P=0,metricsOnly:k=!1,unicodeFontsURL:F,preResolvedFonts:X=null,includeCaretPositions:J=!1,chunkedBoundsSize:q=8192,colorRanges:V=null},G){const W=f(),z={fontLoad:0,typesetting:0};v.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),v=v.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),b=+b,w=+w,T=+T,S=S||"normal",x=+x,s({text:v,lang:d,style:E,weight:M,fonts:typeof _=="string"?[{src:_}]:_,unicodeFontsURL:F,preResolvedFonts:X},H=>{z.fontLoad=f()-W;const K=isFinite(T);let ne=null,$=null,Y=null,R=null,D=null,N=null,I=null,re=null,Q=0,de=0,me=C!=="nowrap";const Ae=new Map,ae=f();let pe=x,xe=0,te=new h;const be=[te];H.forEach(se=>{const{fontObj:fe}=se,{ascender:ye,descender:_e,unitsPerEm:Ee,lineGap:Le,capHeight:Ie,xHeight:he}=fe;let we=Ae.get(fe);if(!we){const Re=b/Ee,j=S==="normal"?(ye-_e+Le)*Re:S*b,Pe=(j-(ye-_e)*Re)/2,ge=Math.min(j,(ye-_e)*Re),ie=(ye+_e)/2*Re+ge/2;we={index:Ae.size,src:fe.src,fontObj:fe,fontSizeMult:Re,unitsPerEm:Ee,ascender:ye*Re,descender:_e*Re,capHeight:Ie*Re,xHeight:he*Re,lineHeight:j,baseline:-Pe-ye*Re,caretTop:ie,caretBottom:ie-ge},Ae.set(fe,we)}const{fontSizeMult:De}=we,Ne=v.slice(se.start,se.end+1);let Be,Te;fe.forEachGlyph(Ne,b,w,(Re,j,Pe,ge)=>{j+=xe,ge+=se.start,Be=j,Te=Re;const ie=v.charAt(ge),Se=Re.advanceWidth*De,Fe=te.count;let Ue;if("isEmpty"in Re||(Re.isWhitespace=!!ie&&new RegExp(n).test(ie),Re.canBreakAfter=!!ie&&r.test(ie),Re.isEmpty=Re.xMin===Re.xMax||Re.yMin===Re.yMax||i.test(ie)),!Re.isWhitespace&&!Re.isEmpty&&de++,me&&K&&!Re.isWhitespace&&j+Se+pe>T&&Fe){if(te.glyphAt(Fe-1).glyphObj.canBreakAfter)Ue=new h,pe=-j;else for(let et=Fe;et--;)if(et===0&&A==="break-word"){Ue=new h,pe=-j;break}else if(te.glyphAt(et).glyphObj.canBreakAfter){Ue=te.splitAt(et+1);const qe=Ue.glyphAt(0).x;pe-=qe;for(let Qe=Ue.count;Qe--;)Ue.glyphAt(Qe).x-=qe;break}Ue&&(te.isSoftWrapped=!0,te=Ue,be.push(te),Q=T)}let Xe=te.glyphAt(te.count);Xe.glyphObj=Re,Xe.x=j+pe,Xe.y=Pe,Xe.width=Se,Xe.charIndex=ge,Xe.fontData=we,ie===`
`&&(te=new h,be.push(te),pe=-(j+Se+w*b)+x)}),xe=Be+Te.advanceWidth*De+w*b});let U=0;be.forEach(se=>{let fe=!0;for(let ye=se.count;ye--;){const _e=se.glyphAt(ye);fe&&!_e.glyphObj.isWhitespace&&(se.width=_e.x+_e.width,se.width>Q&&(Q=se.width),fe=!1);let{lineHeight:Ee,capHeight:Le,xHeight:Ie,baseline:he}=_e.fontData;Ee>se.lineHeight&&(se.lineHeight=Ee);const we=he-se.baseline;we<0&&(se.baseline+=we,se.cap+=we,se.ex+=we),se.cap=Math.max(se.cap,se.baseline+Le),se.ex=Math.max(se.ex,se.baseline+Ie)}se.baseline-=U,se.cap-=U,se.ex-=U,U+=se.lineHeight});let L=0,Z=0;if(O&&(typeof O=="number"?L=-O:typeof O=="string"&&(L=-Q*(O==="left"?0:O==="center"?.5:O==="right"?1:c(O)))),P&&(typeof P=="number"?Z=-P:typeof P=="string"&&(Z=P==="top"?0:P==="top-baseline"?-be[0].baseline:P==="top-cap"?-be[0].cap:P==="top-ex"?-be[0].ex:P==="middle"?U/2:P==="bottom"?U:P==="bottom-baseline"?-be[be.length-1].baseline:c(P)*U)),!k){const se=e.getEmbeddingLevels(v,y);ne=new Uint16Array(de),$=new Uint8Array(de),Y=new Float32Array(de*2),R={},I=[1/0,1/0,-1/0,-1/0],re=[],J&&(N=new Float32Array(v.length*4)),V&&(D=new Uint8Array(de*3));let fe=0,ye=-1,_e=-1,Ee,Le;if(be.forEach((Ie,he)=>{let{count:we,width:De}=Ie;if(we>0){let Ne=0;for(let ge=we;ge--&&Ie.glyphAt(ge).glyphObj.isWhitespace;)Ne++;let Be=0,Te=0;if(m==="center")Be=(Q-De)/2;else if(m==="right")Be=Q-De;else if(m==="justify"&&Ie.isSoftWrapped){let ge=0;for(let ie=we-Ne;ie--;)Ie.glyphAt(ie).glyphObj.isWhitespace&&ge++;Te=(Q-De)/ge}if(Te||Be){let ge=0;for(let ie=0;ie<we;ie++){let Se=Ie.glyphAt(ie);const Fe=Se.glyphObj;Se.x+=Be+ge,Te!==0&&Fe.isWhitespace&&ie<we-Ne&&(ge+=Te,Se.width+=Te)}}const Re=e.getReorderSegments(v,se,Ie.glyphAt(0).charIndex,Ie.glyphAt(Ie.count-1).charIndex);for(let ge=0;ge<Re.length;ge++){const[ie,Se]=Re[ge];let Fe=1/0,Ue=-1/0;for(let Xe=0;Xe<we;Xe++)if(Ie.glyphAt(Xe).charIndex>=ie){let et=Xe,qe=Xe;for(;qe<we;qe++){let Qe=Ie.glyphAt(qe);if(Qe.charIndex>Se)break;qe<we-Ne&&(Fe=Math.min(Fe,Qe.x),Ue=Math.max(Ue,Qe.x+Qe.width))}for(let Qe=et;Qe<qe;Qe++){const dt=Ie.glyphAt(Qe);dt.x=Ue-(dt.x+dt.width-Fe)}break}}let j;const Pe=ge=>j=ge;for(let ge=0;ge<we;ge++){const ie=Ie.glyphAt(ge);j=ie.glyphObj;const Se=j.index,Fe=se.levels[ie.charIndex]&1;if(Fe){const Ue=e.getMirroredCharacter(v[ie.charIndex]);Ue&&ie.fontData.fontObj.forEachGlyph(Ue,0,0,Pe)}if(J){const{charIndex:Ue,fontData:Xe}=ie,et=ie.x+L,qe=ie.x+ie.width+L;N[Ue*4]=Fe?qe:et,N[Ue*4+1]=Fe?et:qe,N[Ue*4+2]=Ie.baseline+Xe.caretBottom+Z,N[Ue*4+3]=Ie.baseline+Xe.caretTop+Z;const Qe=Ue-ye;Qe>1&&u(N,ye,Qe),ye=Ue}if(V){const{charIndex:Ue}=ie;for(;Ue>_e;)_e++,V.hasOwnProperty(_e)&&(Le=V[_e])}if(!j.isWhitespace&&!j.isEmpty){const Ue=fe++,{fontSizeMult:Xe,src:et,index:qe}=ie.fontData,Qe=R[et]||(R[et]={});Qe[Se]||(Qe[Se]={path:j.path,pathBounds:[j.xMin,j.yMin,j.xMax,j.yMax]});const dt=ie.x+L,Rn=ie.y+Ie.baseline+Z;Y[Ue*2]=dt,Y[Ue*2+1]=Rn;const Cn=dt+j.xMin*Xe,ln=Rn+j.yMin*Xe,Vn=dt+j.xMax*Xe,Yt=Rn+j.yMax*Xe;Cn<I[0]&&(I[0]=Cn),ln<I[1]&&(I[1]=ln),Vn>I[2]&&(I[2]=Vn),Yt>I[3]&&(I[3]=Yt),Ue%q===0&&(Ee={start:Ue,end:Ue,rect:[1/0,1/0,-1/0,-1/0]},re.push(Ee)),Ee.end++;const wt=Ee.rect;if(Cn<wt[0]&&(wt[0]=Cn),ln<wt[1]&&(wt[1]=ln),Vn>wt[2]&&(wt[2]=Vn),Yt>wt[3]&&(wt[3]=Yt),ne[Ue]=Se,$[Ue]=qe,V){const Hn=Ue*3;D[Hn]=Le>>16&255,D[Hn+1]=Le>>8&255,D[Hn+2]=Le&255}}}}}),N){const Ie=v.length-ye;Ie>1&&u(N,ye,Ie)}}const ve=[];Ae.forEach(({index:se,src:fe,unitsPerEm:ye,ascender:_e,descender:Ee,lineHeight:Le,capHeight:Ie,xHeight:he})=>{ve[se]={src:fe,unitsPerEm:ye,ascender:_e,descender:Ee,lineHeight:Le,capHeight:Ie,xHeight:he}}),z.typesetting=f()-ae,G({glyphIds:ne,glyphFontIndices:$,glyphPositions:Y,glyphData:R,fontData:ve,caretPositions:N,glyphColors:D,chunkedBounds:re,fontSize:b,topBaseline:Z+be[0].baseline,blockBounds:[L,Z-U,L+Q,Z],visibleBounds:I,timings:z})})}function l(v,_){o({...v,metricsOnly:!0},d=>{const[g,b,M,E]=d.blockBounds;_({width:M-g,height:E-b})})}function c(v){let _=v.match(/^([\d.]+)%$/),d=_?parseFloat(_[1]):NaN;return isNaN(d)?0:d/100}function u(v,_,d){const g=v[_*4],b=v[_*4+1],M=v[_*4+2],E=v[_*4+3],w=(b-g)/d;for(let S=0;S<d;S++){const T=(_+S)*4;v[T]=g+w*S,v[T+1]=g+w*(S+1),v[T+2]=M,v[T+3]=E}}function f(){return(self.performance||Date).now()}function h(){this.data=[]}const p=["glyphObj","x","y","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/p.length)},glyphAt(v){let _=h.flyweight;return _.data=this.data,_.index=v,_},splitAt(v){let _=new h;return _.data=this.data.splice(v*p.length),_}},h.flyweight=p.reduce((v,_,d,g)=>(Object.defineProperty(v,_,{get(){return this.data[this.index*p.length+d]},set(b){this.data[this.index*p.length+d]=b}}),v),{data:null,index:0}),{typeset:o,measure:l}}const er=()=>(self.performance||Date).now(),no=Oh();let yf;function V1(a,e,t,i,n,r,s,o,l,c,u=!0){return u?W1(a,e,t,i,n,r,s,o,l,c).then(null,f=>(yf||(console.warn("WebGL SDF generation failed, falling back to JS",f),yf=!0),Mf(a,e,t,i,n,r,s,o,l,c))):Mf(a,e,t,i,n,r,s,o,l,c)}const Cs=[],H1=5;let Rl=0;function Bh(){const a=er();for(;Cs.length&&er()-a<H1;)Cs.shift()();Rl=Cs.length?setTimeout(Bh,0):0}const W1=(...a)=>new Promise((e,t)=>{Cs.push(()=>{const i=er();try{no.webgl.generateIntoCanvas(...a),e({timing:er()-i})}catch(n){t(n)}}),Rl||(Rl=setTimeout(Bh,0))}),X1=4,q1=2e3,Sf={};let j1=0;function Mf(a,e,t,i,n,r,s,o,l,c){const u="TroikaTextSDFGenerator_JS_"+j1++%X1;let f=Sf[u];return f||(f=Sf[u]={workerModule:ia({name:u,workerId:u,dependencies:[Oh,er],init(h,p){const v=h().javascript.generate;return function(..._){const d=p();return{textureData:v(..._),timing:p()-d}}},getTransferables(h){return[h.textureData.buffer]}}),requests:0,idleTimer:null}),f.requests++,clearTimeout(f.idleTimer),f.workerModule(a,e,t,i,n,r).then(({textureData:h,timing:p})=>{const v=er(),_=new Uint8Array(h.length*4);for(let d=0;d<h.length;d++)_[d*4+c]=h[d];return no.webglUtils.renderImageData(s,_,o,l,a,e,1<<3-c),p+=er()-v,--f.requests===0&&(f.idleTimer=setTimeout(()=>{b1(u)},q1)),{timing:p}})}function Y1(a){a._warm||(no.webgl.isSupported(a),a._warm=!0)}const K1=no.webglUtils.resizeWebGLCanvasWithoutClearing,Sa={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},Z1=new Ke;function Pr(){return(self.performance||Date).now()}const Ef=Object.create(null);function J1(a,e){a=$1({},a);const t=Pr(),i=[];if(a.font&&i.push({label:"user",src:ey(a.font)}),a.font=i,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||Sa.sdfGlyphSize,a.unicodeFontsURL=a.unicodeFontsURL||Sa.unicodeFontsURL,a.colorRanges!=null){let h={};for(let p in a.colorRanges)if(a.colorRanges.hasOwnProperty(p)){let v=a.colorRanges[p];typeof v!="number"&&(v=Z1.set(v).getHex()),h[p]=v}a.colorRanges=h}Object.freeze(a);const{textureWidth:n,sdfExponent:r}=Sa,{sdfGlyphSize:s}=a,o=n/s*4;let l=Ef[s];if(!l){const h=document.createElement("canvas");h.width=n,h.height=s*256/o,l=Ef[s]={glyphCount:0,sdfGlyphSize:s,sdfCanvas:h,sdfTexture:new zt(h,void 0,void 0,void 0,Mt,Mt),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,Q1(l)}const{sdfTexture:c,sdfCanvas:u}=l;zh(a).then(h=>{const{glyphIds:p,glyphFontIndices:v,fontData:_,glyphPositions:d,fontSize:g,timings:b}=h,M=[],E=new Float32Array(p.length*4);let w=0,S=0;const T=Pr(),y=_.map(O=>{let P=l.glyphsByFont.get(O.src);return P||l.glyphsByFont.set(O.src,P=new Map),P});p.forEach((O,P)=>{const k=v[P],{src:F,unitsPerEm:X}=_[k];let J=y[k].get(O);if(!J){const{path:z,pathBounds:H}=h.glyphData[F][O],K=Math.max(H[2]-H[0],H[3]-H[1])/s*(Sa.sdfMargin*s+.5),ne=l.glyphCount++,$=[H[0]-K,H[1]-K,H[2]+K,H[3]+K];y[k].set(O,J={path:z,atlasIndex:ne,sdfViewBox:$}),M.push(J)}const{sdfViewBox:q}=J,V=d[S++],G=d[S++],W=g/X;E[w++]=V+q[0]*W,E[w++]=G+q[1]*W,E[w++]=V+q[2]*W,E[w++]=G+q[3]*W,p[P]=J.atlasIndex}),b.quads=(b.quads||0)+(Pr()-T);const m=Pr();b.sdf={};const x=u.height,C=Math.ceil(l.glyphCount/o),A=Math.pow(2,Math.ceil(Math.log2(C*s)));A>x&&(console.info(`Increasing SDF texture size ${x}->${A}`),K1(u,n,A),c.dispose()),Promise.all(M.map(O=>kh(O,l,a.gpuAccelerateSDF).then(({timing:P})=>{b.sdf[O.atlasIndex]=P}))).then(()=>{M.length&&!l.contextLost&&(Gh(l),c.needsUpdate=!0),b.sdfTotal=Pr()-m,b.total=Pr()-t,e(Object.freeze({parameters:a,sdfTexture:c,sdfGlyphSize:s,sdfExponent:r,glyphBounds:E,glyphAtlasIndices:p,glyphColors:h.glyphColors,caretPositions:h.caretPositions,chunkedBounds:h.chunkedBounds,ascender:h.ascender,descender:h.descender,lineHeight:h.lineHeight,capHeight:h.capHeight,xHeight:h.xHeight,topBaseline:h.topBaseline,blockBounds:h.blockBounds,visibleBounds:h.visibleBounds,timings:h.timings}))})}),Promise.resolve().then(()=>{l.contextLost||Y1(u)})}function kh({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:n,contextLost:r},s){if(r)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=Sa,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),f=u%(o/i)*i,h=Math.floor(u/(o/i))*i,p=e%4;return V1(i,i,a,t,c,l,n,f,h,p,s)}function Q1(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const i=[];a.glyphsByFont.forEach(n=>{n.forEach(r=>{i.push(kh(r,a,!0))})}),Promise.all(i).then(()=>{Gh(a),a.sdfTexture.needsUpdate=!0})})}function $1(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let Es;function ey(a){return Es||(Es=typeof document>"u"?{}:document.createElement("a")),Es.href=a,Es.href}function Gh(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:i,height:n}=e,r=a.sdfCanvas.getContext("webgl");let s=t.image.data;(!s||s.length!==i*n*4)&&(s=new Uint8Array(i*n*4),t.image={width:i,height:n,data:s},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,i,n,r.RGBA,r.UNSIGNED_BYTE,s)}}const ty=ia({name:"Typesetter",dependencies:[z1,G1,w1],init(a,e,t){return a(e,t())}}),zh=ia({name:"Typesetter",dependencies:[ty],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}});zh.onMainThread;const bf={};function ny(a){let e=bf[a];return e||(e=bf[a]=new ta(1,1,a,a).translate(.5,.5,0)),e}const iy="aTroikaGlyphBounds",Tf="aTroikaGlyphIndex",ry="aTroikaGlyphColor";class ay extends wx{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Qs,this.boundingBox=new lr}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=ny(e);["position","normal","uv"].forEach(i=>{this.attributes[i]=t.attributes[i].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,i,n,r){this.updateAttributeData(iy,e,4),this.updateAttributeData(Tf,t,1),this.updateAttributeData(ry,r,3),this._blockBounds=i,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:i}=this;if(t){const{PI:n,floor:r,min:s,max:o,sin:l,cos:c}=Math,u=n/2,f=n*2,h=Math.abs(t),p=e[0]/h,v=e[2]/h,_=r((p+u)/f)!==r((v+u)/f)?-h:s(l(p)*h,l(v)*h),d=r((p-u)/f)!==r((v-u)/f)?h:o(l(p)*h,l(v)*h),g=r((p+n)/f)!==r((v+n)/f)?h*2:o(h-c(p)*h,h-c(v)*h);i.min.set(_,e[1],t<0?-g:0),i.max.set(d,e[3],t<0?0:g)}else i.min.set(e[0],e[1],0),i.max.set(e[2],e[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Tf).count,i=this._chunkedBounds;if(i)for(let n=i.length;n--;){t=i[n].end;let r=i[n].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,i){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new _x(t,i)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}const sy=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,oy=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,ly=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,cy=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function uy(a){const e=Al(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Je},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new Et(0,0,0,0)},uTroikaClipRect:{value:new Et(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Je},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Ke},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ze},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:sy,vertexTransform:oy,fragmentDefs:ly,fragmentColorTransform:cy,customRewriter({vertexShader:t,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(Nh,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const ec=new Zl({color:16777215,side:kn,transparent:!0}),wf=8421504,Af=new Ct,bs=new oe,al=new oe,va=[],fy=new oe,sl="+x+y";function Rf(a){return Array.isArray(a)?a[0]:a}let Vh=()=>{const a=new bn(new ta(1,1),ec);return Vh=()=>a,a},Hh=()=>{const a=new bn(new ta(1,1,32,1),ec);return Hh=()=>a,a};const hy={type:"syncstart"},dy={type:"synccomplete"},Wh=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],py=Wh.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Xh extends bn{constructor(){const e=new ay;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=wf,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=sl,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(hy),J1({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(n=>n&&n())})),this.dispatchEvent(dy),e&&e()})))}onBeforeRender(e,t,i,n,r,s){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return uy(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=ec.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),this.hasOutline()){let i=e._outlineMtl;return i||(i=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),i.dispose()})),[i,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Rf(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return Rf(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,i=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;i.uTroikaSDFTexture.value=o,i.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),i.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,i.uTroikaSDFExponent.value=n.sdfExponent,i.uTroikaTotalBounds.value.fromArray(l),i.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,f=0,h,p,v,_=0,d=0;if(t){let{outlineWidth:b,outlineOffsetX:M,outlineOffsetY:E,outlineBlur:w,outlineOpacity:S}=this;c=this._parsePercent(b)||0,u=Math.max(0,this._parsePercent(w)||0),h=S,_=this._parsePercent(M)||0,d=this._parsePercent(E)||0}else f=Math.max(0,this._parsePercent(this.strokeWidth)||0),f&&(v=this.strokeColor,i.uTroikaStrokeColor.value.set(v??wf),p=this.strokeOpacity,p==null&&(p=1)),h=this.fillOpacity;i.uTroikaEdgeOffset.value=c,i.uTroikaPositionOffset.value.set(_,d),i.uTroikaBlurRadius.value=u,i.uTroikaStrokeWidth.value=f,i.uTroikaStrokeOpacity.value=p,i.uTroikaFillOpacity.value=h??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let g=this.clipRect;if(g&&Array.isArray(g)&&g.length===4)i.uTroikaClipRect.value.fromArray(g);else{const b=(this.fontSize||.1)*100;i.uTroikaClipRect.value.set(l[0]-b,l[1]-b,l[2]+b,l[3]+b)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new Ke;(r!==o._input||typeof r=="object")&&o.set(o._input=r)}let s=this.orientation||sl;if(s!==e._orientation){let o=i.uTroikaOrient.value;s=s.replace(/[^-+xyz]/g,"");let l=s!==sl&&s.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,f,h]=l;bs.set(0,0,0)[u]=c==="-"?1:-1,al.set(0,0,0)[h]=f==="-"?-1:1,Af.lookAt(fy,bs.cross(al),al),o.setFromMatrix4(Af)}else o.identity();e._orientation=s}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),i=t?parseFloat(t[1]):NaN;e=(isNaN(i)?0:i/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Je){t.copy(e);const i=this.curveRadius;return i&&(t.x=Math.atan2(e.x,Math.abs(i)-Math.abs(e.z))*Math.abs(i)),t}worldPositionToTextCoords(e,t=new Je){return bs.copy(e),this.localPositionToTextCoords(this.worldToLocal(bs),t)}raycast(e,t){const{textRenderInfo:i,curveRadius:n}=this;if(i){const r=i.blockBounds,s=n?Hh():Vh(),o=s.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let f=r[0]+c.getX(u)*(r[2]-r[0]);const h=r[1]+c.getY(u)*(r[3]-r[1]);let p=0;n&&(p=n-Math.cos(f/n)*n,f=Math.sin(f/n)*n),l.setXYZ(u,f,h,p)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,s.matrixWorld=this.matrixWorld,s.material.side=this.material.side,va.length=0,s.raycast(e,va);for(let u=0;u<va.length;u++)va[u].object=this,t.push(va[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,py.forEach(i=>{this[i]=e[i]}),this}clone(){return new this.constructor().copy(this)}}Wh.forEach(a=>{const e="_private_"+a;Object.defineProperty(Xh.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new lr;new Ke;function ri(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function qh(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qr={duration:.5,overwrite:!1,delay:0},tc,Ft,ct,Tn=1e8,at=1/Tn,Cl=Math.PI*2,my=Cl/4,gy=0,jh=Math.sqrt,_y=Math.cos,vy=Math.sin,Pt=function(e){return typeof e=="string"},mt=function(e){return typeof e=="function"},ci=function(e){return typeof e=="number"},nc=function(e){return typeof e>"u"},Zn=function(e){return typeof e=="object"},nn=function(e){return e!==!1},ic=function(){return typeof window<"u"},Ts=function(e){return mt(e)||Pt(e)},Yh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vt=Array.isArray,Pl=/(?:-?\.?\d|\.)+/gi,Kh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ir=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ol=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zh=/[+-]=-?[.\d]+/,Jh=/[^,'"\[\]\s]+/gi,xy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ft,Wn,Ll,rc,vn={},Vs={},Qh,$h=function(e){return(Vs=jr(e,vn))&&on},ac=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ia=function(e,t){return!t&&console.warn(e)},ed=function(e,t){return e&&(vn[e]=t)&&Vs&&(Vs[e]=t)||vn},Fa=function(){return 0},yy={suppressEvents:!0,isStart:!0,kill:!1},Ps={suppressEvents:!0,kill:!1},Sy={suppressEvents:!0},sc={},Ai=[],Dl={},td,hn={},ll={},Cf=30,Ls=[],oc="",lc=function(e){var t=e[0],i,n;if(Zn(t)||mt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=Ls.length;n--&&!Ls[n].targetTest(t););i=Ls[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Td(e[n],i)))||e.splice(n,1);return e},tr=function(e){return e._gsap||lc(wn(e))[0]._gsap},nd=function(e,t,i){return(i=e[t])&&mt(i)?e[t]():nc(i)&&e.getAttribute&&e.getAttribute(t)||i},rn=function(e,t){return(e=e.split(",")).forEach(t)||e},gt=function(e){return Math.round(e*1e5)/1e5||0},yt=function(e){return Math.round(e*1e7)/1e7||0},Br=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},My=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Hs=function(){var e=Ai.length,t=Ai.slice(0),i,n;for(Dl={},Ai.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},cc=function(e){return!!(e._initted||e._startAt||e.add)},id=function(e,t,i,n){Ai.length&&!Ft&&Hs(),e.render(t,i,!!(Ft&&t<0&&cc(e))),Ai.length&&!Ft&&Hs()},rd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Jh).length<2?t:Pt(e)?e.trim():e},ad=function(e){return e},xn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Ey=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},jr=function(e,t){for(var i in t)e[i]=t[i];return e},Pf=function a(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Zn(t[i])?a(e[i]||(e[i]={}),t[i]):t[i]);return e},Ws=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},Ca=function(e){var t=e.parent||ft,i=e.keyframes?Ey(Vt(e.keyframes)):xn;if(nn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},by=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},sd=function(e,t,i,n,r){var s=e[n],o;if(r)for(o=t[r];s&&s[r]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=s,t.parent=t._dp=e,t},io=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,s=t._next;r?r._next=s:e[i]===t&&(e[i]=s),s?s._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},Li=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},nr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Ty=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ul=function(e,t,i,n){return e._startAt&&(Ft?e._startAt.revert(Ps):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},wy=function a(e){return!e||e._ts&&a(e.parent)},Lf=function(e){return e._repeat?Yr(e._tTime,e=e.duration()+e._rDelay)*e:0},Yr=function(e,t){var i=Math.floor(e=yt(e/t));return e&&i===e?i-1:i},Xs=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ro=function(e){return e._end=yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||at)||0))},ao=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=yt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ro(e),i._dirty||nr(i,e)),e},od=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Xs(e.rawTime(),t),(!t._dur||Wa(0,t.totalDuration(),i)-t._tTime>at)&&t.render(i,!0)),nr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-at}},qn=function(e,t,i,n){return t.parent&&Li(t),t._start=yt((ci(i)?i:i||e!==ft?Sn(e,i,t):e._time)+t._delay),t._end=yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),sd(e,t,"_first","_last",e._sort?"_start":0),Il(t)||(e._recent=t),n||od(e,t),e._ts<0&&ao(e,e._tTime),e},ld=function(e,t){return(vn.ScrollTrigger||ac("scrollTrigger",t))&&vn.ScrollTrigger.create(t,e)},cd=function(e,t,i,n,r){if(fc(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!Ft&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&td!==pn.frame)return Ai.push(e),e._lazy=[r,n],1},Ay=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},Il=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Ry=function(e,t,i,n){var r=e.ratio,s=t<0||!t&&(!e._start&&Ay(e)&&!(!e._initted&&Il(e))||(e._ts<0||e._dp._ts<0)&&!Il(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Wa(0,e._tDur,t),u=Yr(l,o),e._yoyo&&u&1&&(s=1-s),u!==Yr(e._tTime,o)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||Ft||n||e._zTime===at||!t&&e._zTime){if(!e._initted&&cd(e,t,n,i,l))return;for(f=e._zTime,e._zTime=t||(i?at:0),i||(i=t&&!f),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&Ul(e,t,i,!0),e._onUpdate&&!i&&mn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&mn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&Li(e,1),!i&&!Ft&&(mn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Cy=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Kr=function(e,t,i,n){var r=e._repeat,s=yt(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:yt(s*(r+1)+e._rDelay*r):s,o>0&&!n&&ao(e,e._tTime=e._tDur*o),e.parent&&ro(e),i||nr(e.parent,e),e},Df=function(e){return e instanceof qt?nr(e):Kr(e,e._dur)},Py={_start:0,endTime:Fa,totalDuration:Fa},Sn=function a(e,t,i){var n=e.labels,r=e._recent||Py,s=e.duration()>=Tn?r.endTime(!1):e._dur,o,l,c;return Pt(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=s),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(Vt(i)?i[0]:i).totalDuration()),o>1?a(e,t.substr(0,o-1),i)+l:s+l)):t==null?s:+t},Pa=function(e,t,i){var n=ci(t[1]),r=(n?2:1)+(e<2?0:1),s=t[r],o,l;if(n&&(s.duration=t[1]),s.parent=i,e){for(o=s,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=nn(l.vars.inherit)&&l.parent;s.immediateRender=nn(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new xt(t[0],s,t[r+1])},Ii=function(e,t){return e||e===0?t(e):t},Wa=function(e,t,i){return i<e?e:i>t?t:i},Gt=function(e,t){return!Pt(e)||!(t=xy.exec(e))?"":t[1]},Ly=function(e,t,i){return Ii(i,function(n){return Wa(e,t,n)})},Fl=[].slice,ud=function(e,t){return e&&Zn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Zn(e[0]))&&!e.nodeType&&e!==Wn},Dy=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return Pt(n)&&!t||ud(n,1)?(r=i).push.apply(r,wn(n)):i.push(n)})||i},wn=function(e,t,i){return ct&&!t&&ct.selector?ct.selector(e):Pt(e)&&!i&&(Ll||!Zr())?Fl.call((t||rc).querySelectorAll(e),0):Vt(e)?Dy(e,i):ud(e)?Fl.call(e,0):e?[e]:[]},Ol=function(e){return e=wn(e)[0]||Ia("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return wn(t,i.querySelectorAll?i:i===e?Ia("Invalid scope")||rc.createElement("div"):e)}},fd=function(e){return e.sort(function(){return .5-Math.random()})},hd=function(e){if(mt(e))return e;var t=Zn(e)?e:{each:e},i=ir(t.ease),n=t.from||0,r=parseFloat(t.base)||0,s={},o=n>0&&n<1,l=isNaN(n)||o,c=t.axis,u=n,f=n;return Pt(n)?u=f={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(u=n[0],f=n[1]),function(h,p,v){var _=(v||t).length,d=s[_],g,b,M,E,w,S,T,y,m;if(!d){if(m=t.grid==="auto"?0:(t.grid||[1,Tn])[1],!m){for(T=-Tn;T<(T=v[m++].getBoundingClientRect().left)&&m<_;);m<_&&m--}for(d=s[_]=[],g=l?Math.min(m,_)*u-.5:n%m,b=m===Tn?0:l?_*f/m-.5:n/m|0,T=0,y=Tn,S=0;S<_;S++)M=S%m-g,E=b-(S/m|0),d[S]=w=c?Math.abs(c==="y"?E:M):jh(M*M+E*E),w>T&&(T=w),w<y&&(y=w);n==="random"&&fd(d),d.max=T-y,d.min=y,d.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(m>_?_-1:c?c==="y"?_/m:m:Math.max(m,_/m))||0)*(n==="edges"?-1:1),d.b=_<0?r-_:r,d.u=Gt(t.amount||t.each)||0,i=i&&_<0?Md(i):i}return _=(d[h]-d.min)/d.max||0,yt(d.b+(i?i(_):_)*d.v)+d.u}},Nl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=yt(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(ci(i)?0:Gt(i))}},dd=function(e,t){var i=Vt(e),n,r;return!i&&Zn(e)&&(n=i=e.radius||Tn,e.values?(e=wn(e.values),(r=!ci(e[0]))&&(n*=n)):e=Nl(e.increment)),Ii(t,i?mt(e)?function(s){return r=e(s),Math.abs(r-s)<=n?r:s}:function(s){for(var o=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=Tn,u=0,f=e.length,h,p;f--;)r?(h=e[f].x-o,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!n||c<=n?e[u]:s,r||u===s||ci(s)?u:u+Gt(s)}:Nl(e))},pd=function(e,t,i,n){return Ii(Vt(e)?!t:i===!0?!!(i=0):!n,function(){return Vt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},Uy=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,s){return s(r)},n)}},Iy=function(e,t){return function(i){return e(parseFloat(i))+(t||Gt(i))}},Fy=function(e,t,i){return gd(e,t,0,1,i)},md=function(e,t,i){return Ii(i,function(n){return e[~~t(n)]})},Oy=function a(e,t,i){var n=t-e;return Vt(e)?md(e,a(0,e.length),t):Ii(i,function(r){return(n+(r-e)%n)%n+e})},Ny=function a(e,t,i){var n=t-e,r=n*2;return Vt(e)?md(e,a(0,e.length-1),t):Ii(i,function(s){return s=(r+(s-e)%r)%r||0,e+(s>n?r-s:s)})},Oa=function(e){for(var t=0,i="",n,r,s,o;~(n=e.indexOf("random(",t));)s=e.indexOf(")",n),o=e.charAt(n+7)==="[",r=e.substr(n+7,s-n-7).match(o?Jh:Pl),i+=e.substr(t,n-t)+pd(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=s+1;return i+e.substr(t,e.length-t)},gd=function(e,t,i,n,r){var s=t-e,o=n-i;return Ii(r,function(l){return i+((l-e)/s*o||0)})},By=function a(e,t,i,n){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var s=Pt(e),o={},l,c,u,f,h;if(i===!0&&(n=1)&&(i=null),s)e={p:e},t={p:t};else if(Vt(e)&&!Vt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(a(e[c-1],e[c]));f--,r=function(v){v*=f;var _=Math.min(h,~~v);return u[_](v-_)},i=t}else n||(e=jr(Vt(e)?[]:{},e));if(!u){for(l in t)uc.call(o,e,l,"get",t[l]);r=function(v){return pc(v,o)||(s?e.p:e)}}}return Ii(i,r)},Uf=function(e,t,i){var n=e.labels,r=Tn,s,o,l;for(s in n)o=n[s]-t,o<0==!!i&&o&&r>(o=Math.abs(o))&&(l=s,r=o);return l},mn=function(e,t,i){var n=e.vars,r=n[t],s=ct,o=e._ctx,l,c,u;if(r)return l=n[t+"Params"],c=n.callbackScope||e,i&&Ai.length&&Hs(),o&&(ct=o),u=l?r.apply(c,l):r.call(c),ct=s,u},Ma=function(e){return Li(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ft),e.progress()<1&&mn(e,"onInterrupt"),e},Fr,_d=[],vd=function(e){if(e)if(e=!e.name&&e.default||e,ic()||e.headless){var t=e.name,i=mt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:Fa,render:pc,add:uc,kill:eS,modifier:$y,rawVars:0},s={targetTest:0,get:0,getSetter:dc,aliases:{},register:0};if(Zr(),e!==n){if(hn[t])return;xn(n,xn(Ws(e,r),s)),jr(n.prototype,jr(r,Ws(e,s))),hn[n.prop=t]=n,e.targetTest&&(Ls.push(n),sc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ed(t,n),e.register&&e.register(on,n,an)}else _d.push(e)},rt=255,Ea={aqua:[0,rt,rt],lime:[0,rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rt],navy:[0,0,128],white:[rt,rt,rt],olive:[128,128,0],yellow:[rt,rt,0],orange:[rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rt,0,0],pink:[rt,192,203],cyan:[0,rt,rt],transparent:[rt,rt,rt,0]},cl=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*rt+.5|0},xd=function(e,t,i){var n=e?ci(e)?[e>>16,e>>8&rt,e&rt]:0:Ea.black,r,s,o,l,c,u,f,h,p,v;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ea[e])n=Ea[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+r+r+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&rt,n&rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&rt,e&rt]}else if(e.substr(0,3)==="hsl"){if(n=v=e.match(Pl),!t)l=+n[0]%360/360,c=+n[1]/100,u=+n[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,n.length>3&&(n[3]*=1),n[0]=cl(l+1/3,r,s),n[1]=cl(l,r,s),n[2]=cl(l-1/3,r,s);else if(~e.indexOf("="))return n=e.match(Kh),i&&n.length<4&&(n[3]=1),n}else n=e.match(Pl)||Ea.transparent;n=n.map(Number)}return t&&!v&&(r=n[0]/rt,s=n[1]/rt,o=n[2]/rt,f=Math.max(r,s,o),h=Math.min(r,s,o),u=(f+h)/2,f===h?l=c=0:(p=f-h,c=u>.5?p/(2-f-h):p/(f+h),l=f===r?(s-o)/p+(s<o?6:0):f===s?(o-r)/p+2:(r-s)/p+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(u*100+.5)),i&&n.length<4&&(n[3]=1),n},yd=function(e){var t=[],i=[],n=-1;return e.split(Ri).forEach(function(r){var s=r.match(Ir)||[];t.push.apply(t,s),i.push(n+=s.length+1)}),t.c=i,t},If=function(e,t,i){var n="",r=(e+n).match(Ri),s=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!r)return e;if(r=r.map(function(h){return(h=xd(h,t,1))&&s+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=yd(e),l=i.c,l.join(n)!==u.c.join(n)))for(c=e.replace(Ri,"1").split(Ir),f=c.length-1;o<f;o++)n+=c[o]+(~l.indexOf(o)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:i).shift());if(!c)for(c=e.split(Ri),f=c.length-1;o<f;o++)n+=c[o]+r[o];return n+c[f]},Ri=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ea)a+="|"+e+"\\b";return new RegExp(a+")","gi")})(),ky=/hsl[a]?\(/,Sd=function(e){var t=e.join(" "),i;if(Ri.lastIndex=0,Ri.test(t))return i=ky.test(t),e[1]=If(e[1],i),e[0]=If(e[0],i,yd(e[1])),!0},Na,pn=(function(){var a=Date.now,e=500,t=33,i=a(),n=i,r=1e3/240,s=r,o=[],l,c,u,f,h,p,v=function _(d){var g=a()-n,b=d===!0,M,E,w,S;if((g>e||g<0)&&(i+=g-t),n+=g,w=n-i,M=w-s,(M>0||b)&&(S=++f.frame,h=w-f.time*1e3,f.time=w=w/1e3,s+=M+(M>=r?4:r-M),E=1),b||(l=c(_)),E)for(p=0;p<o.length;p++)o[p](w,h,S,d)};return f={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(d){return h/(1e3/(d||60))},wake:function(){Qh&&(!Ll&&ic()&&(Wn=Ll=window,rc=Wn.document||{},vn.gsap=on,(Wn.gsapVersions||(Wn.gsapVersions=[])).push(on.version),$h(Vs||Wn.GreenSockGlobals||!Wn.gsap&&Wn||{}),_d.forEach(vd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(d){return setTimeout(d,s-f.time*1e3+1|0)},Na=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Na=0,c=Fa},lagSmoothing:function(d,g){e=d||1/0,t=Math.min(g||33,e)},fps:function(d){r=1e3/(d||240),s=f.time*1e3+r},add:function(d,g,b){var M=g?function(E,w,S,T){d(E,w,S,T),f.remove(M)}:d;return f.remove(d),o[b?"unshift":"push"](M),Zr(),M},remove:function(d,g){~(g=o.indexOf(d))&&o.splice(g,1)&&p>=g&&p--},_listeners:o},f})(),Zr=function(){return!Na&&pn.wake()},$e={},Gy=/^[\d.\-M][\d.\-,\s]/,zy=/["']/g,Vy=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,s=i.length,o,l,c;r<s;r++)l=i[r],o=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[n]=isNaN(c)?c.replace(zy,"").trim():+c,n=l.substr(o+1).trim();return t},Hy=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},Wy=function(e){var t=(e+"").split("("),i=$e[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Vy(t[1])]:Hy(e).split(",").map(rd)):$e._CE&&Gy.test(e)?$e._CE("",e):i},Md=function(e){return function(t){return 1-e(1-t)}},Ed=function a(e,t){for(var i=e._first,n;i;)i instanceof qt?a(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?a(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},ir=function(e,t){return e&&(mt(e)?e:$e[e]||Wy(e))||t},cr=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},s;return rn(e,function(o){$e[o]=vn[o]=r,$e[s=o.toLowerCase()]=i;for(var l in r)$e[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=$e[o+"."+l]=r[l]}),r},bd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ul=function a(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),s=r/Cl*(Math.asin(1/n)||0),o=function(u){return u===1?1:n*Math.pow(2,-10*u)*vy((u-s)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:bd(o);return r=Cl/r,l.config=function(c,u){return a(e,c,u)},l},fl=function a(e,t){t===void 0&&(t=1.70158);var i=function(s){return s?--s*s*((t+1)*s+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:bd(i);return n.config=function(r){return a(e,r)},n};rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;cr(a+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});$e.Linear.easeNone=$e.none=$e.Linear.easeIn;cr("Elastic",ul("in"),ul("out"),ul());(function(a,e){var t=1/e,i=2*t,n=2.5*t,r=function(o){return o<t?a*o*o:o<i?a*Math.pow(o-1.5/e,2)+.75:o<n?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};cr("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);cr("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});cr("Circ",function(a){return-(jh(1-a*a)-1)});cr("Sine",function(a){return a===1?1:-_y(a*my)+1});cr("Back",fl("in"),fl("out"),fl());$e.SteppedEase=$e.steps=vn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,s=1-at;return function(o){return((n*Wa(0,s,o)|0)+r)*i}}};qr.ease=$e["quad.out"];rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return oc+=a+","+a+"Params,"});var Td=function(e,t){this.id=gy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:nd,this.set=t?t.getSetter:dc},Ba=(function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Kr(this,+t.duration,1,1),this.data=t.data,ct&&(this._ctx=ct,ct.data.push(this)),Na||pn.wake()}var e=a.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Kr(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Zr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ao(this,i),!r._dp||r.parent||od(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&qn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===at||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),id(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Lf(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Lf(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?Yr(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-at?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Xs(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-at?0:this._rts,this.totalTime(Wa(-Math.abs(this._delay),this.totalDuration(),r),n!==!1),ro(this),Ty(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Zr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==at&&(this._tTime-=at)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&qn(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(nn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xs(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Sy);var n=Ft;return Ft=i,cc(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ft=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Df(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Df(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Sn(this,i),nn(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,nn(n)),this._dur||(this._zTime=-at),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-at:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-at,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-at)},e.eventCallback=function(i,n,r){var s=this.vars;return arguments.length>1?(n?(s[i]=n,r&&(s[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete s[i],this):s[i]},e.then=function(i){var n=this;return new Promise(function(r){var s=mt(i)?i:ad,o=function(){var c=n.then;n.then=null,mt(s)&&(s=s(n))&&(s.then||s===n)&&(n.then=c),r(s),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?o():n._prom=o})},e.kill=function(){Ma(this)},a})();xn(Ba.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-at,_prom:0,_ps:!1,_rts:1});var qt=(function(a){qh(e,a);function e(i,n){var r;return i===void 0&&(i={}),r=a.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=nn(i.sortChildren),ft&&qn(i.parent||ft,ri(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&ld(ri(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,s){return Pa(0,arguments,this),this},t.from=function(n,r,s){return Pa(1,arguments,this),this},t.fromTo=function(n,r,s,o){return Pa(2,arguments,this),this},t.set=function(n,r,s){return r.duration=0,r.parent=this,Ca(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new xt(n,r,Sn(this,s),1),this},t.call=function(n,r,s){return qn(this,xt.delayedCall(0,n,r),s)},t.staggerTo=function(n,r,s,o,l,c,u){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new xt(n,s,Sn(this,l)),this},t.staggerFrom=function(n,r,s,o,l,c,u){return s.runBackwards=1,Ca(s).immediateRender=nn(s.immediateRender),this.staggerTo(n,r,s,o,l,c,u)},t.staggerFromTo=function(n,r,s,o,l,c,u,f){return o.startAt=s,Ca(o).immediateRender=nn(o.immediateRender),this.staggerTo(n,r,o,l,c,u,f)},t.render=function(n,r,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=n<=0?0:yt(n),f=this._zTime<0!=n<0&&(this._initted||!c),h,p,v,_,d,g,b,M,E,w,S,T;if(this!==ft&&u>l&&n>=0&&(u=l),u!==this._tTime||s||f){if(o!==this._time&&c&&(u+=this._time-o,n+=this._time-o),h=u,E=this._start,M=this._ts,g=!M,f&&(c||(o=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(S=this._yoyo,d=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(d*100+n,r,s);if(h=yt(u%d),u===l?(_=this._repeat,h=c):(w=yt(u/d),_=~~w,_&&_===w&&(h=c,_--),h>c&&(h=c)),w=Yr(this._tTime,d),!o&&this._tTime&&w!==_&&this._tTime-w*d-this._dur<=0&&(w=_),S&&_&1&&(h=c-h,T=1),_!==w&&!this._lock){var y=S&&w&1,m=y===(S&&_&1);if(_<w&&(y=!y),o=y?0:u%c?c:u,this._lock=1,this.render(o||(T?0:yt(_*d)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&mn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,m&&(this._lock=2,o=y?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;Ed(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=Cy(this,yt(o),yt(h)),b&&(u-=h-(h=b._start))),this._tTime=u,this._time=h,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&u&&!r&&!w&&(mn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&n>=0)for(p=this._first;p;){if(v=p._next,(p._act||h>=p._start)&&p._ts&&b!==p){if(p.parent!==this)return this.render(n,r,s);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,r,s),h!==this._time||!this._ts&&!g){b=0,v&&(u+=this._zTime=-at);break}}p=v}else{p=this._last;for(var x=n<0?n:h;p;){if(v=p._prev,(p._act||x<=p._end)&&p._ts&&b!==p){if(p.parent!==this)return this.render(n,r,s);if(p.render(p._ts>0?(x-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(x-p._start)*p._ts,r,s||Ft&&cc(p)),h!==this._time||!this._ts&&!g){b=0,v&&(u+=this._zTime=x?-at:at);break}}p=v}}if(b&&!r&&(this.pause(),b.render(h>=o?0:-at)._zTime=h>=o?1:-1,this._ts))return this._start=E,ro(this),this.render(n,r,s);this._onUpdate&&!r&&mn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(E===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Li(this,1),!r&&!(n<0&&!o)&&(u||o||!l)&&(mn(this,u===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var s=this;if(ci(r)||(r=Sn(this,r,n)),!(n instanceof Ba)){if(Vt(n))return n.forEach(function(o){return s.add(o,r)}),this;if(Pt(n))return this.addLabel(n,r);if(mt(n))n=xt.delayedCall(0,n);else return this}return this!==n?qn(this,n,r):this},t.getChildren=function(n,r,s,o){n===void 0&&(n=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-Tn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof xt?r&&l.push(c):(s&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===n)return r[s]},t.remove=function(n){return Pt(n)?this.removeLabel(n):mt(n)?this.killTweensOf(n):(n.parent===this&&io(this,n),n===this._recent&&(this._recent=this._last),nr(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=yt(pn.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),a.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=Sn(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,s){var o=xt.delayedCall(0,r||Fa,s);return o.data="isPause",this._hasPause=1,qn(this,o,Sn(this,n))},t.removePause=function(n){var r=this._first;for(n=Sn(this,n);r;)r._start===n&&r.data==="isPause"&&Li(r),r=r._next},t.killTweensOf=function(n,r,s){for(var o=this.getTweensOf(n,s),l=o.length;l--;)Si!==o[l]&&o[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var s=[],o=wn(n),l=this._first,c=ci(r),u;l;)l instanceof xt?My(l._targets,o)&&(c?(!Si||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(o,r)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(n,r){r=r||{};var s=this,o=Sn(s,n),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,p,v=xt.to(s,xn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||at,onStart:function(){if(s.pause(),!p){var d=r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());v._dur!==d&&Kr(v,d,0,1).render(v._time,!0,!0),p=1}u&&u.apply(v,f||[])}},r));return h?v.render(0):v},t.tweenFromTo=function(n,r,s){return this.tweenTo(r,xn({startAt:{time:Sn(this,n)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Uf(this,Sn(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Uf(this,Sn(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+at)},t.shiftChildren=function(n,r,s){s===void 0&&(s=0);for(var o=this._first,l=this.labels,c;o;)o._start>=s&&(o._start+=n,o._end+=n),o=o._next;if(r)for(c in l)l[c]>=s&&(l[c]+=n);return nr(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return a.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),nr(this)},t.totalDuration=function(n){var r=0,s=this,o=s._last,l=Tn,c,u,f;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-n:n));if(s._dirty){for(f=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,qn(s,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!f&&!s._dp||f&&f.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Kr(s,s===ft&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(n){if(ft._ts&&(id(ft,Xs(n,ft)),td=pn.frame),pn.frame>=Cf){Cf+=_n.autoSleep||120;var r=ft._first;if((!r||!r._ts)&&_n.autoSleep&&pn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||pn.sleep()}}},e})(Ba);xn(qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Xy=function(e,t,i,n,r,s,o){var l=new an(this._pt,e,t,0,1,Ld,null,r),c=0,u=0,f,h,p,v,_,d,g,b;for(l.b=i,l.e=n,i+="",n+="",(g=~n.indexOf("random("))&&(n=Oa(n)),s&&(b=[i,n],s(b,e,t),i=b[0],n=b[1]),h=i.match(ol)||[];f=ol.exec(n);)v=f[0],_=n.substring(c,f.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),v!==h[u++]&&(d=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:d,c:v.charAt(1)==="="?Br(d,v)-d:parseFloat(v)-d,m:p&&p<4?Math.round:0},c=ol.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=o,(Zh.test(n)||g)&&(l.e=0),this._pt=l,l},uc=function(e,t,i,n,r,s,o,l,c,u){mt(n)&&(n=n(r||0,e,s));var f=e[t],h=i!=="get"?i:mt(f)?c?e[t.indexOf("set")||!mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,p=mt(f)?c?Zy:Cd:hc,v;if(Pt(n)&&(~n.indexOf("random(")&&(n=Oa(n)),n.charAt(1)==="="&&(v=Br(h,n)+(Gt(h)||0),(v||v===0)&&(n=v))),!u||h!==n||Bl)return!isNaN(h*n)&&n!==""?(v=new an(this._pt,e,t,+h||0,n-(h||0),typeof f=="boolean"?Qy:Pd,0,p),c&&(v.fp=c),o&&v.modifier(o,this,e),this._pt=v):(!f&&!(t in e)&&ac(t,n),Xy.call(this,e,t,h,n,p,l||_n.stringFilter,c))},qy=function(e,t,i,n,r){if(mt(e)&&(e=La(e,r,t,i,n)),!Zn(e)||e.style&&e.nodeType||Vt(e)||Yh(e))return Pt(e)?La(e,r,t,i,n):e;var s={},o;for(o in e)s[o]=La(e[o],r,t,i,n);return s},wd=function(e,t,i,n,r,s){var o,l,c,u;if(hn[e]&&(o=new hn[e]).init(r,o.rawVars?t[e]:qy(t[e],n,r,s,i),i,n,s)!==!1&&(i._pt=l=new an(i._pt,r,e,0,1,o.render,o,0,o.priority),i!==Fr))for(c=i._ptLookup[i._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Si,Bl,fc=function a(e,t,i){var n=e.vars,r=n.ease,s=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,u=n.runBackwards,f=n.yoyoEase,h=n.keyframes,p=n.autoRevert,v=e._dur,_=e._startAt,d=e._targets,g=e.parent,b=g&&g.data==="nested"?g.vars.targets:d,M=e._overwrite==="auto"&&!tc,E=e.timeline,w,S,T,y,m,x,C,A,O,P,k,F,X;if(E&&(!h||!r)&&(r="none"),e._ease=ir(r,qr.ease),e._yEase=f?Md(ir(f===!0?r:f,qr.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!E&&!!n.runBackwards,!E||h&&!n.stagger){if(A=d[0]?tr(d[0]).harness:0,F=A&&n[A.prop],w=Ws(n,sc),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!p?_.render(-1,!0):_.revert(u&&v?Ps:yy),_._lazy=0),s){if(Li(e._startAt=xt.set(d,xn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&nn(l),startAt:null,delay:0,onUpdate:c&&function(){return mn(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ft||!o&&!p)&&e._startAt.revert(Ps),o&&v&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&v&&!_){if(t&&(o=!1),T=xn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&nn(l),immediateRender:o,stagger:0,parent:g},w),F&&(T[A.prop]=F),Li(e._startAt=xt.set(d,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ft?e._startAt.revert(Ps):e._startAt.render(-1,!0)),e._zTime=t,!o)a(e._startAt,at,at);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&nn(l)||l&&!v,S=0;S<d.length;S++){if(m=d[S],C=m._gsap||lc(d)[S]._gsap,e._ptLookup[S]=P={},Dl[C.id]&&Ai.length&&Hs(),k=b===d?S:b.indexOf(m),A&&(O=new A).init(m,F||w,e,k,b)!==!1&&(e._pt=y=new an(e._pt,m,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(J){P[J]=y}),O.priority&&(x=1)),!A||F)for(T in w)hn[T]&&(O=wd(T,w,e,k,m,b))?O.priority&&(x=1):P[T]=y=uc.call(e,m,T,"get",w[T],k,b,0,n.stringFilter);e._op&&e._op[S]&&e.kill(m,e._op[S]),M&&e._pt&&(Si=e,ft.killTweensOf(m,P,e.globalTime(t)),X=!e.parent,Si=0),e._pt&&l&&(Dl[C.id]=1)}x&&Dd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,h&&t<=0&&E.render(Tn,!0,!0)},jy=function(e,t,i,n,r,s,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,p;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(u=h[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Bl=1,e.vars[t]="+=0",fc(e,o),Bl=0,l?Ia(t+" not eligible for reset"):1;c.push(u)}for(p=c.length;p--;)f=c[p],u=f._pt||f,u.s=(n||n===0)&&!r?n:u.s+(n||0)+s*u.c,u.c=i-u.s,f.e&&(f.e=gt(i)+Gt(f.e)),f.b&&(f.b=u.s+Gt(f.b))},Yy=function(e,t){var i=e[0]?tr(e[0]).harness:0,n=i&&i.aliases,r,s,o,l;if(!n)return t;r=jr({},t);for(s in n)if(s in r)for(l=n[s].split(","),o=l.length;o--;)r[l[o]]=r[s];return r},Ky=function(e,t,i,n){var r=t.ease||n||"power1.inOut",s,o;if(Vt(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)o=i[s]||(i[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:r})},La=function(e,t,i,n,r){return mt(e)?e.call(t,i,n,r):Pt(e)&&~e.indexOf("random(")?Oa(e):e},Ad=oc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Rd={};rn(Ad+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Rd[a]=1});var xt=(function(a){qh(e,a);function e(i,n,r,s){var o;typeof n=="number"&&(r.duration=n,n=r,r=null),o=a.call(this,s?n:Ca(n))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,v=l.keyframes,_=l.defaults,d=l.scrollTrigger,g=l.yoyoEase,b=n.parent||ft,M=(Vt(i)||Yh(i)?ci(i[0]):"length"in n)?[i]:wn(i),E,w,S,T,y,m,x,C;if(o._targets=M.length?lc(M):Ia("GSAP target "+i+" not found. https://gsap.com",!_n.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,v||h||Ts(c)||Ts(u)){if(n=o.vars,E=o.timeline=new qt({data:"nested",defaults:_||{},targets:b&&b.data==="nested"?b.vars.targets:M}),E.kill(),E.parent=E._dp=ri(o),E._start=0,h||Ts(c)||Ts(u)){if(T=M.length,x=h&&hd(h),Zn(h))for(y in h)~Ad.indexOf(y)&&(C||(C={}),C[y]=h[y]);for(w=0;w<T;w++)S=Ws(n,Rd),S.stagger=0,g&&(S.yoyoEase=g),C&&jr(S,C),m=M[w],S.duration=+La(c,ri(o),w,m,M),S.delay=(+La(u,ri(o),w,m,M)||0)-o._delay,!h&&T===1&&S.delay&&(o._delay=u=S.delay,o._start+=u,S.delay=0),E.to(m,S,x?x(w,m,M):0),E._ease=$e.none;E.duration()?c=u=0:o.timeline=0}else if(v){Ca(xn(E.vars.defaults,{ease:"none"})),E._ease=ir(v.ease||n.ease||"none");var A=0,O,P,k;if(Vt(v))v.forEach(function(F){return E.to(M,F,">")}),E.duration();else{S={};for(y in v)y==="ease"||y==="easeEach"||Ky(y,v[y],S,v.easeEach);for(y in S)for(O=S[y].sort(function(F,X){return F.t-X.t}),A=0,w=0;w<O.length;w++)P=O[w],k={ease:P.e,duration:(P.t-(w?O[w-1].t:0))/100*c},k[y]=P.v,E.to(M,k,A),A+=k.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return p===!0&&!tc&&(Si=ri(o),ft.killTweensOf(M),Si=0),qn(b,ri(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(f||!c&&!v&&o._start===yt(b._time)&&nn(f)&&wy(ri(o))&&b.data!=="nested")&&(o._tTime=-at,o.render(Math.max(0,-u)||0)),d&&ld(ri(o),d),o}var t=e.prototype;return t.render=function(n,r,s){var o=this._time,l=this._tDur,c=this._dur,u=n<0,f=n>l-at&&!u?l:n<at?0:n,h,p,v,_,d,g,b,M,E;if(!c)Ry(this,n,r,s);else if(f!==this._tTime||!n||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+n,r,s);if(h=yt(f%_),f===l?(v=this._repeat,h=c):(d=yt(f/_),v=~~d,v&&v===d?(h=c,v--):h>c&&(h=c)),g=this._yoyo&&v&1,g&&(E=this._yEase,h=c-h),d=Yr(this._tTime,_),h===o&&!s&&this._initted&&v===d)return this._tTime=f,this;v!==d&&(M&&this._yEase&&Ed(M,g),this.vars.repeatRefresh&&!g&&!this._lock&&h!==_&&this._initted&&(this._lock=s=1,this.render(yt(_*v),!0).invalidate()._lock=0))}if(!this._initted){if(cd(this,u?n:h,s,r,f))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&v!==d))return this;if(c!==this._dur)return this.render(n,r,s)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(E||this._ease)(h/c),this._from&&(this.ratio=b=1-b),!o&&f&&!r&&!d&&(mn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(b,p.d),p=p._next;M&&M.render(n<0?n:M._dur*M._ease(h/this._dur),r,s)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(u&&Ul(this,n,r,s),mn(this,"onUpdate")),this._repeat&&v!==d&&this.vars.onRepeat&&!r&&this.parent&&mn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Ul(this,n,!0,!0),(n||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Li(this,1),!r&&!(u&&!o)&&(f||o||g)&&(mn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),a.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,s,o,l){Na||pn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||fc(this,c),u=this._ease(c/this._dur),jy(this,n,r,s,o,u,c,l)?this.resetTo(n,r,s,o,1):(ao(this,0),this.parent||sd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ma(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ft),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Si&&Si.vars.overwrite!==!0)._first||Ma(this),this.parent&&s!==this.timeline.totalDuration()&&Kr(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=n?wn(n):o,c=this._ptLookup,u=this._pt,f,h,p,v,_,d,g;if((!r||r==="all")&&by(o,l))return r==="all"&&(this._pt=0),Ma(this);for(f=this._op=this._op||[],r!=="all"&&(Pt(r)&&(_={},rn(r,function(b){return _[b]=1}),r=_),r=Yy(o,r)),g=o.length;g--;)if(~l.indexOf(o[g])){h=c[g],r==="all"?(f[g]=r,v=h,p={}):(p=f[g]=f[g]||{},v=r);for(_ in v)d=h&&h[_],d&&((!("kill"in d.d)||d.d.kill(_)===!0)&&io(this,d,"_pt"),delete h[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&Ma(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return Pa(1,arguments)},e.delayedCall=function(n,r,s,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(n,r,s){return Pa(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,s){return ft.killTweensOf(n,r,s)},e})(Ba);xn(xt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});rn("staggerTo,staggerFrom,staggerFromTo",function(a){xt[a]=function(){var e=new qt,t=Fl.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var hc=function(e,t,i){return e[t]=i},Cd=function(e,t,i){return e[t](i)},Zy=function(e,t,i,n){return e[t](n.fp,i)},Jy=function(e,t,i){return e.setAttribute(t,i)},dc=function(e,t){return mt(e[t])?Cd:nc(e[t])&&e.setAttribute?Jy:hc},Pd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Qy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ld=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},pc=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},$y=function(e,t,i,n){for(var r=this._pt,s;r;)s=r._next,r.p===n&&r.modifier(e,t,i),r=s},eS=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?io(this,t,"_pt"):t.dep||(i=1),t=n;return!i},tS=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},Dd=function(e){for(var t=e._pt,i,n,r,s;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:s)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:s=t,t=i}e._pt=r},an=(function(){function a(t,i,n,r,s,o,l,c,u){this.t=i,this.s=r,this.c=s,this.p=n,this.r=o||Pd,this.d=l||this,this.set=c||hc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=tS,this.m=i,this.mt=r,this.tween=n},a})();rn(oc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return sc[a]=1});vn.TweenMax=vn.TweenLite=xt;vn.TimelineLite=vn.TimelineMax=qt;ft=new qt({sortChildren:!1,defaults:qr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_n.stringFilter=Sd;var rr=[],Ds={},nS=[],Ff=0,iS=0,hl=function(e){return(Ds[e]||nS).map(function(t){return t()})},kl=function(){var e=Date.now(),t=[];e-Ff>2&&(hl("matchMediaInit"),rr.forEach(function(i){var n=i.queries,r=i.conditions,s,o,l,c;for(o in n)s=Wn.matchMedia(n[o]).matches,s&&(l=1),s!==r[o]&&(r[o]=s,c=1);c&&(i.revert(),l&&t.push(i))}),hl("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Ff=e,hl("matchMedia"))},Ud=(function(){function a(t,i){this.selector=i&&Ol(i),this.data=[],this._r=[],this.isReverted=!1,this.id=iS++,t&&this.add(t)}var e=a.prototype;return e.add=function(i,n,r){mt(i)&&(r=n,n=i,i=mt);var s=this,o=function(){var c=ct,u=s.selector,f;return c&&c!==s&&c.data.push(s),r&&(s.selector=Ol(r)),ct=s,f=n.apply(s,arguments),mt(f)&&s._r.push(f),ct=c,s.selector=u,s.isReverted=!1,f};return s.last=o,i===mt?o(s,function(l){return s.add(null,l)}):i?s[i]=o:o},e.ignore=function(i){var n=ct;ct=null,i(this),ct=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof a?i.push.apply(i,n.getTweens()):n instanceof xt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof qt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof xt)&&c.revert&&c.revert(i);r._r.forEach(function(u){return u(i,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var s=rr.length;s--;)rr[s].id===this.id&&rr.splice(s,1)},e.revert=function(i){this.kill(i||{})},a})(),rS=(function(){function a(t){this.contexts=[],this.scope=t,ct&&ct.data.push(this)}var e=a.prototype;return e.add=function(i,n,r){Zn(i)||(i={matches:i});var s=new Ud(0,r||this.scope),o=s.conditions={},l,c,u;ct&&!s.selector&&(s.selector=ct.selector),this.contexts.push(s),n=s.add("onMatch",n),s.queries=i;for(c in i)c==="all"?u=1:(l=Wn.matchMedia(i[c]),l&&(rr.indexOf(s)<0&&rr.push(s),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(kl):l.addEventListener("change",kl)));return u&&n(s,function(f){return s.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},a})(),qs={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return vd(n)})},timeline:function(e){return new qt(e)},getTweensOf:function(e,t){return ft.getTweensOf(e,t)},getProperty:function(e,t,i,n){Pt(e)&&(e=wn(e)[0]);var r=tr(e||{}).get,s=i?ad:rd;return i==="native"&&(i=""),e&&(t?s((hn[t]&&hn[t].get||r)(e,t,i,n)):function(o,l,c){return s((hn[o]&&hn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=wn(e),e.length>1){var n=e.map(function(u){return on.quickSetter(u,t,i)}),r=n.length;return function(u){for(var f=r;f--;)n[f](u)}}e=e[0]||{};var s=hn[t],o=tr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=s?function(u){var f=new s;Fr._pt=0,f.init(e,i?u+i:u,Fr,0,[e]),f.render(1,f),Fr._pt&&pc(1,Fr)}:o.set(e,l);return s?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var n,r=on.to(e,xn((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),s=function(l,c,u){return r.resetTo(t,l,c,u)};return s.tween=r,s},isTweening:function(e){return ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ir(e.ease,qr.ease)),Pf(qr,e||{})},config:function(e){return Pf(_n,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,s=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!hn[o]&&!vn[o]&&Ia(t+" effect requires "+o+" plugin.")}),ll[t]=function(o,l,c){return i(wn(o),xn(l||{},r),c)},s&&(qt.prototype[t]=function(o,l,c){return this.add(ll[t](o,Zn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){$e[e]=ir(t)},parseEase:function(e,t){return arguments.length?ir(e,t):$e},getById:function(e){return ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new qt(e),n,r;for(i.smoothChildTiming=nn(e.smoothChildTiming),ft.remove(i),i._dp=0,i._time=i._tTime=ft._time,n=ft._first;n;)r=n._next,(t||!(!n._dur&&n instanceof xt&&n.vars.onComplete===n._targets[0]))&&qn(i,n,n._start-n._delay),n=r;return qn(ft,i,0),i},context:function(e,t){return e?new Ud(e,t):ct},matchMedia:function(e){return new rS(e)},matchMediaRefresh:function(){return rr.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||kl()},addEventListener:function(e,t){var i=Ds[e]||(Ds[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Ds[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:Oy,wrapYoyo:Ny,distribute:hd,random:pd,snap:dd,normalize:Fy,getUnit:Gt,clamp:Ly,splitColor:xd,toArray:wn,selector:Ol,mapRange:gd,pipe:Uy,unitize:Iy,interpolate:By,shuffle:fd},install:$h,effects:ll,ticker:pn,updateRoot:qt.updateRoot,plugins:hn,globalTimeline:ft,core:{PropTween:an,globals:ed,Tween:xt,Timeline:qt,Animation:Ba,getCache:tr,_removeLinkedListItem:io,reverting:function(){return Ft},context:function(e){return e&&ct&&(ct.data.push(e),e._ctx=ct),ct},suppressOverwrites:function(e){return tc=e}}};rn("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return qs[a]=xt[a]});pn.add(qt.updateRoot);Fr=qs.to({},{duration:0});var aS=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},sS=function(e,t){var i=e._targets,n,r,s;for(n in t)for(r=i.length;r--;)s=e._ptLookup[r][n],s&&(s=s.d)&&(s._pt&&(s=aS(s,n)),s&&s.modifier&&s.modifier(t[n],e,i[r],n))},dl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,r,s){s._onInit=function(o){var l,c;if(Pt(r)&&(l={},rn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}sS(o,r)}}}},on=qs.registerPlugin({name:"attr",init:function(e,t,i,n,r){var s,o,l;this.tween=i;for(s in t)l=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(l||0)+"",t[s],n,r,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(e,t){for(var i=t._pt;i;)Ft?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},dl("roundProps",Nl),dl("modifiers"),dl("snap",dd))||qs;xt.version=qt.version=on.version="3.13.0";Qh=1;ic()&&Zr();$e.Power0;$e.Power1;$e.Power2;$e.Power3;$e.Power4;$e.Linear;$e.Quad;$e.Cubic;$e.Quart;$e.Quint;$e.Strong;$e.Elastic;$e.Back;$e.SteppedEase;$e.Bounce;$e.Sine;$e.Expo;$e.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Of,Mi,kr,mc,Zi,Nf,gc,oS=function(){return typeof window<"u"},ui={},ji=180/Math.PI,Gr=Math.PI/180,Lr=Math.atan2,Bf=1e8,_c=/([A-Z])/g,lS=/(left|right|width|margin|padding|x)/i,cS=/[\s,\(]\S/,jn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Gl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},uS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},fS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},hS=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Id=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Fd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},dS=function(e,t,i){return e.style[t]=i},pS=function(e,t,i){return e.style.setProperty(t,i)},mS=function(e,t,i){return e._gsap[t]=i},gS=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},_S=function(e,t,i,n,r){var s=e._gsap;s.scaleX=s.scaleY=i,s.renderTransform(r,s)},vS=function(e,t,i,n,r){var s=e._gsap;s[t]=i,s.renderTransform(r,s)},ht="transform",sn=ht+"Origin",xS=function a(e,t){var i=this,n=this.target,r=n.style,s=n._gsap;if(e in ui&&r){if(this.tfm=this.tfm||{},e!=="transform")e=jn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=ai(n,o)}):this.tfm[e]=s.x?s[e]:ai(n,e),e===sn&&(this.tfm.zOrigin=s.zOrigin);else return jn.transform.split(",").forEach(function(o){return a.call(i,o,t)});if(this.props.indexOf(ht)>=0)return;s.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(sn,t,"")),e=ht}(r||t)&&this.props.push(e,t,r[e])},Od=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},yS=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(_c,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)n[s]=this.tfm[s];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=gc(),(!r||!r.isStart)&&!i[ht]&&(Od(i),n.zOrigin&&i[sn]&&(i[sn]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Nd=function(e,t){var i={target:e,props:[],revert:yS,save:xS};return e._gsap||on.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},Bd,zl=function(e,t){var i=Mi.createElementNS?Mi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Mi.createElement(e);return i&&i.style?i:Mi.createElement(e)},An=function a(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(_c,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&a(e,Jr(t)||t,1)||""},kf="O,Moz,ms,Ms,Webkit".split(","),Jr=function(e,t,i){var n=t||Zi,r=n.style,s=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(kf[s]+e in r););return s<0?null:(s===3?"ms":s>=0?kf[s]:"")+e},Vl=function(){oS()&&window.document&&(Of=window,Mi=Of.document,kr=Mi.documentElement,Zi=zl("div")||{style:{}},zl("div"),ht=Jr(ht),sn=ht+"Origin",Zi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Bd=!!Jr("perspective"),gc=on.core.reverting,mc=1)},Gf=function(e){var t=e.ownerSVGElement,i=zl("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),r;n.style.display="block",i.appendChild(n),kr.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),kr.removeChild(i),r},zf=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},kd=function(e){var t,i;try{t=e.getBBox()}catch{t=Gf(e),i=1}return t&&(t.width||t.height)||i||(t=Gf(e)),t&&!t.width&&!t.x&&!t.y?{x:+zf(e,["x","cx","x1"])||0,y:+zf(e,["y","cy","y1"])||0,width:0,height:0}:t},Gd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&kd(e))},sr=function(e,t){if(t){var i=e.style,n;t in ui&&t!==sn&&(t=ht),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(_c,"-$1").toLowerCase())):i.removeAttribute(t)}},Ei=function(e,t,i,n,r,s){var o=new an(e._pt,t,i,0,1,s?Fd:Id);return e._pt=o,o.b=n,o.e=r,e._props.push(i),o},Vf={deg:1,rad:1,turn:1},SS={grid:1,flex:1},Di=function a(e,t,i,n){var r=parseFloat(i)||0,s=(i+"").trim().substr((r+"").length)||"px",o=Zi.style,l=lS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=n==="px",p=n==="%",v,_,d,g;if(n===s||!r||Vf[n]||Vf[s])return r;if(s!=="px"&&!h&&(r=a(e,t,i,"px")),g=e.getCTM&&Gd(e),(p||s==="%")&&(ui[t]||~t.indexOf("adius")))return v=g?e.getBBox()[l?"width":"height"]:e[u],gt(p?r/v*f:r/100*v);if(o[l?"width":"height"]=f+(h?s:n),_=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Mi||!_.appendChild)&&(_=Mi.body),d=_._gsap,d&&p&&d.width&&l&&d.time===pn.time&&!d.uncache)return gt(r/d.width*f);if(p&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=f+n,v=e[u],b?e.style[t]=b:sr(e,t)}else(p||s==="%")&&!SS[An(_,"display")]&&(o.position=An(e,"position")),_===e&&(o.position="static"),_.appendChild(Zi),v=Zi[u],_.removeChild(Zi),o.position="absolute";return l&&p&&(d=tr(_),d.time=pn.time,d.width=_[u]),gt(h?v*r/f:v&&r?f/v*r:0)},ai=function(e,t,i,n){var r;return mc||Vl(),t in jn&&t!=="transform"&&(t=jn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ui[t]&&t!=="transform"?(r=Ga(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ys(An(e,sn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=js[t]&&js[t](e,t,i)||An(e,t)||nd(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?Di(e,t,r,i)+i:r},MS=function(e,t,i,n){if(!i||i==="none"){var r=Jr(t,e,1),s=r&&An(e,r,1);s&&s!==i?(t=r,i=s):t==="borderColor"&&(i=An(e,"borderTopColor"))}var o=new an(this._pt,e.style,t,0,1,Ld),l=0,c=0,u,f,h,p,v,_,d,g,b,M,E,w;if(o.b=i,o.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=An(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(_=e.style[t],e.style[t]=n,n=An(e,t)||n,_?e.style[t]=_:sr(e,t)),u=[i,n],Sd(u),i=u[0],n=u[1],h=i.match(Ir)||[],w=n.match(Ir)||[],w.length){for(;f=Ir.exec(n);)d=f[0],b=n.substring(l,f.index),v?v=(v+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(v=1),d!==(_=h[c++]||"")&&(p=parseFloat(_)||0,E=_.substr((p+"").length),d.charAt(1)==="="&&(d=Br(p,d)+E),g=parseFloat(d),M=d.substr((g+"").length),l=Ir.lastIndex-M.length,M||(M=M||_n.units[t]||E,l===n.length&&(n+=M,o.e+=M)),E!==M&&(p=Di(e,t,_,M)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:p,c:g-p,m:v&&v<4||t==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=t==="display"&&n==="none"?Fd:Id;return Zh.test(n)&&(o.e=0),this._pt=o,o},Hf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ES=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Hf[i]||i,t[1]=Hf[n]||n,t.join(" ")},bS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,s=i._gsap,o,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],ui[o]&&(l=1,o=o==="transformOrigin"?sn:ht),sr(i,o);l&&(sr(i,ht),s&&(s.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Ga(i,1),s.uncache=1,Od(n)))}},js={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var s=e._pt=new an(e._pt,t,i,0,0,bS);return s.u=n,s.pr=-10,s.tween=r,e._props.push(i),1}}},ka=[1,0,0,1,0,0],zd={},Vd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Wf=function(e){var t=An(e,ht);return Vd(t)?ka:t.substr(7).match(Kh).map(gt)},vc=function(e,t){var i=e._gsap||tr(e),n=e.style,r=Wf(e),s,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ka:r):(r===ka&&!e.offsetParent&&e!==kr&&!i.svg&&(l=n.display,n.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,kr.appendChild(e)),r=Wf(e),l?n.display=l:sr(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):kr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Hl=function(e,t,i,n,r,s){var o=e._gsap,l=r||vc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,p=l[0],v=l[1],_=l[2],d=l[3],g=l[4],b=l[5],M=t.split(" "),E=parseFloat(M[0])||0,w=parseFloat(M[1])||0,S,T,y,m;i?l!==ka&&(T=p*d-v*_)&&(y=E*(d/T)+w*(-_/T)+(_*b-d*g)/T,m=E*(-v/T)+w*(p/T)-(p*b-v*g)/T,E=y,w=m):(S=kd(e),E=S.x+(~M[0].indexOf("%")?E/100*S.width:E),w=S.y+(~(M[1]||M[0]).indexOf("%")?w/100*S.height:w)),n||n!==!1&&o.smooth?(g=E-c,b=w-u,o.xOffset=f+(g*p+b*_)-g,o.yOffset=h+(g*v+b*d)-b):o.xOffset=o.yOffset=0,o.xOrigin=E,o.yOrigin=w,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[sn]="0px 0px",s&&(Ei(s,o,"xOrigin",c,E),Ei(s,o,"yOrigin",u,w),Ei(s,o,"xOffset",f,o.xOffset),Ei(s,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",E+" "+w)},Ga=function(e,t){var i=e._gsap||new Td(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,s="px",o="deg",l=getComputedStyle(e),c=An(e,sn)||"0",u,f,h,p,v,_,d,g,b,M,E,w,S,T,y,m,x,C,A,O,P,k,F,X,J,q,V,G,W,z,H,K;return u=f=h=_=d=g=b=M=E=0,p=v=1,i.svg=!!(e.getCTM&&Gd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ht]!=="none"?l[ht]:"")),n.scale=n.rotate=n.translate="none"),T=vc(e,i.svg),i.svg&&(i.uncache?(J=e.getBBox(),c=i.xOrigin-J.x+"px "+(i.yOrigin-J.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Hl(e,X||c,!!X||i.originIsAbsolute,i.smooth!==!1,T)),w=i.xOrigin||0,S=i.yOrigin||0,T!==ka&&(C=T[0],A=T[1],O=T[2],P=T[3],u=k=T[4],f=F=T[5],T.length===6?(p=Math.sqrt(C*C+A*A),v=Math.sqrt(P*P+O*O),_=C||A?Lr(A,C)*ji:0,b=O||P?Lr(O,P)*ji+_:0,b&&(v*=Math.abs(Math.cos(b*Gr))),i.svg&&(u-=w-(w*C+S*O),f-=S-(w*A+S*P))):(K=T[6],z=T[7],V=T[8],G=T[9],W=T[10],H=T[11],u=T[12],f=T[13],h=T[14],y=Lr(K,W),d=y*ji,y&&(m=Math.cos(-y),x=Math.sin(-y),X=k*m+V*x,J=F*m+G*x,q=K*m+W*x,V=k*-x+V*m,G=F*-x+G*m,W=K*-x+W*m,H=z*-x+H*m,k=X,F=J,K=q),y=Lr(-O,W),g=y*ji,y&&(m=Math.cos(-y),x=Math.sin(-y),X=C*m-V*x,J=A*m-G*x,q=O*m-W*x,H=P*x+H*m,C=X,A=J,O=q),y=Lr(A,C),_=y*ji,y&&(m=Math.cos(y),x=Math.sin(y),X=C*m+A*x,J=k*m+F*x,A=A*m-C*x,F=F*m-k*x,C=X,k=J),d&&Math.abs(d)+Math.abs(_)>359.9&&(d=_=0,g=180-g),p=gt(Math.sqrt(C*C+A*A+O*O)),v=gt(Math.sqrt(F*F+K*K)),y=Lr(k,F),b=Math.abs(y)>2e-4?y*ji:0,E=H?1/(H<0?-H:H):0),i.svg&&(X=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Vd(An(e,ht)),X&&e.setAttribute("transform",X))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(p*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(v*=-1,b+=b<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+s,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+s,i.z=h+s,i.scaleX=gt(p),i.scaleY=gt(v),i.rotation=gt(_)+o,i.rotationX=gt(d)+o,i.rotationY=gt(g)+o,i.skewX=b+o,i.skewY=M+o,i.transformPerspective=E+s,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[sn]=Ys(c)),i.xOffset=i.yOffset=0,i.force3D=_n.force3D,i.renderTransform=i.svg?wS:Bd?Hd:TS,i.uncache=0,i},Ys=function(e){return(e=e.split(" "))[0]+" "+e[1]},pl=function(e,t,i){var n=Gt(t);return gt(parseFloat(t)+parseFloat(Di(e,"x",i+"px",n)))+n},TS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Hd(e,t)},Hi="0deg",xa="0px",Wi=") ",Hd=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,s=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,p=i.skewY,v=i.scaleX,_=i.scaleY,d=i.transformPerspective,g=i.force3D,b=i.target,M=i.zOrigin,E="",w=g==="auto"&&e&&e!==1||g===!0;if(M&&(f!==Hi||u!==Hi)){var S=parseFloat(u)*Gr,T=Math.sin(S),y=Math.cos(S),m;S=parseFloat(f)*Gr,m=Math.cos(S),s=pl(b,s,T*m*-M),o=pl(b,o,-Math.sin(S)*-M),l=pl(b,l,y*m*-M+M)}d!==xa&&(E+="perspective("+d+Wi),(n||r)&&(E+="translate("+n+"%, "+r+"%) "),(w||s!==xa||o!==xa||l!==xa)&&(E+=l!==xa||w?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+Wi),c!==Hi&&(E+="rotate("+c+Wi),u!==Hi&&(E+="rotateY("+u+Wi),f!==Hi&&(E+="rotateX("+f+Wi),(h!==Hi||p!==Hi)&&(E+="skew("+h+", "+p+Wi),(v!==1||_!==1)&&(E+="scale("+v+", "+_+Wi),b.style[ht]=E||"translate(0, 0)"},wS=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,s=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,p=i.target,v=i.xOrigin,_=i.yOrigin,d=i.xOffset,g=i.yOffset,b=i.forceCSS,M=parseFloat(s),E=parseFloat(o),w,S,T,y,m;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Gr,c*=Gr,w=Math.cos(l)*f,S=Math.sin(l)*f,T=Math.sin(l-c)*-h,y=Math.cos(l-c)*h,c&&(u*=Gr,m=Math.tan(c-u),m=Math.sqrt(1+m*m),T*=m,y*=m,u&&(m=Math.tan(u),m=Math.sqrt(1+m*m),w*=m,S*=m)),w=gt(w),S=gt(S),T=gt(T),y=gt(y)):(w=f,y=h,S=T=0),(M&&!~(s+"").indexOf("px")||E&&!~(o+"").indexOf("px"))&&(M=Di(p,"x",s,"px"),E=Di(p,"y",o,"px")),(v||_||d||g)&&(M=gt(M+v-(v*w+_*T)+d),E=gt(E+_-(v*S+_*y)+g)),(n||r)&&(m=p.getBBox(),M=gt(M+n/100*m.width),E=gt(E+r/100*m.height)),m="matrix("+w+","+S+","+T+","+y+","+M+","+E+")",p.setAttribute("transform",m),b&&(p.style[ht]=m)},AS=function(e,t,i,n,r){var s=360,o=Pt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?ji:1),c=l-n,u=n+c+"deg",f,h;return o&&(f=r.split("_")[1],f==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),f==="cw"&&c<0?c=(c+s*Bf)%s-~~(c/s)*s:f==="ccw"&&c>0&&(c=(c-s*Bf)%s-~~(c/s)*s)),e._pt=h=new an(e._pt,t,i,n,c,uS),h.e=u,h.u="deg",e._props.push(i),h},Xf=function(e,t){for(var i in t)e[i]=t[i];return e},RS=function(e,t,i){var n=Xf({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=i.style,o,l,c,u,f,h,p,v;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),s[ht]=t,o=Ga(i,1),sr(i,ht),i.setAttribute("transform",c)):(c=getComputedStyle(i)[ht],s[ht]=t,o=Ga(i,1),s[ht]=c);for(l in ui)c=n[l],u=o[l],c!==u&&r.indexOf(l)<0&&(p=Gt(c),v=Gt(u),f=p!==v?Di(i,l,c,v):parseFloat(c),h=parseFloat(u),e._pt=new an(e._pt,o,l,f,h-f,Gl),e._pt.u=v||0,e._props.push(l));Xf(o,n)};rn("padding,margin,Width,Radius",function(a,e){var t="Top",i="Right",n="Bottom",r="Left",s=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(o){return e<2?a+o:"border"+o+a});js[e>1?"border"+a:a]=function(o,l,c,u,f){var h,p;if(arguments.length<4)return h=s.map(function(v){return ai(o,v,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},s.forEach(function(v,_){return p[v]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,p,f)}});var Wd={name:"css",register:Vl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var s=this._props,o=e.style,l=i.vars.startAt,c,u,f,h,p,v,_,d,g,b,M,E,w,S,T,y;mc||Vl(),this.styles=this.styles||Nd(e),y=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(hn[_]&&wd(_,t,i,n,e,r)))){if(p=typeof u,v=js[_],p==="function"&&(u=u.call(i,n,e,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Oa(u)),v)v(this,e,_,u,i)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Ri.lastIndex=0,Ri.test(c)||(d=Gt(c),g=Gt(u)),g?d!==g&&(c=Di(e,_,c,g)+g):d&&(u+=d),this.add(o,"setProperty",c,u,n,r,0,0,_),s.push(_),y.push(_,0,o[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,n,e,r):l[_],Pt(c)&&~c.indexOf("random(")&&(c=Oa(c)),Gt(c+"")||c==="auto"||(c+=_n.units[_]||Gt(ai(e,_))||""),(c+"").charAt(1)==="="&&(c=ai(e,_))):c=ai(e,_),h=parseFloat(c),b=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),f=parseFloat(u),_ in jn&&(_==="autoAlpha"&&(h===1&&ai(e,"visibility")==="hidden"&&f&&(h=0),y.push("visibility",0,o.visibility),Ei(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=jn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in ui,M){if(this.styles.save(_),p==="string"&&u.substring(0,6)==="var(--"&&(u=An(e,u.substring(4,u.indexOf(")"))),f=parseFloat(u)),E||(w=e._gsap,w.renderTransform&&!t.parseTransform||Ga(e,t.parseTransform),S=t.smoothOrigin!==!1&&w.smooth,E=this._pt=new an(this._pt,o,ht,0,1,w.renderTransform,w,0,-1),E.dep=1),_==="scale")this._pt=new an(this._pt,w,"scaleY",w.scaleY,(b?Br(w.scaleY,b+f):f)-w.scaleY||0,Gl),this._pt.u=0,s.push("scaleY",_),_+="X";else if(_==="transformOrigin"){y.push(sn,0,o[sn]),u=ES(u),w.svg?Hl(e,u,0,S,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==w.zOrigin&&Ei(this,w,"zOrigin",w.zOrigin,g),Ei(this,o,_,Ys(c),Ys(u)));continue}else if(_==="svgOrigin"){Hl(e,u,1,S,0,this);continue}else if(_ in zd){AS(this,w,_,h,b?Br(h,b+u):u);continue}else if(_==="smoothOrigin"){Ei(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){RS(this,u,e);continue}}else _ in o||(_=Jr(_)||_);if(M||(f||f===0)&&(h||h===0)&&!cS.test(u)&&_ in o)d=(c+"").substr((h+"").length),f||(f=0),g=Gt(u)||(_ in _n.units?_n.units[_]:d),d!==g&&(h=Di(e,_,c,g)),this._pt=new an(this._pt,M?w:o,_,h,(b?Br(h,b+f):f)-h,!M&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?hS:Gl),this._pt.u=g||0,d!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=fS);else if(_ in o)MS.call(this,e,_,c,b?b+u:u);else if(_ in e)this.add(e,_,c||e[_],b?b+u:u,n,r);else if(_!=="parseTransform"){ac(_,u);continue}M||(_ in o?y.push(_,0,o[_]):typeof e[_]=="function"?y.push(_,2,e[_]()):y.push(_,1,c||e[_])),s.push(_)}}T&&Dd(this)},render:function(e,t){if(t.tween._time||!gc())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:ai,aliases:jn,getSetter:function(e,t,i){var n=jn[t];return n&&n.indexOf(",")<0&&(t=n),t in ui&&t!==sn&&(e._gsap.x||ai(e,"x"))?i&&Nf===i?t==="scale"?gS:mS:(Nf=i||{})&&(t==="scale"?_S:vS):e.style&&!nc(e.style[t])?dS:~t.indexOf("-")?pS:dc(e,t)},core:{_removeProperty:sr,_getMatrix:vc}};on.utils.checkPrefix=Jr;on.core.getStyleSaver=Nd;(function(a,e,t,i){var n=rn(a+","+e+","+t,function(r){ui[r]=1});rn(e,function(r){_n.units[r]="deg",zd[r]=1}),jn[n[13]]=a+","+e,rn(i,function(r){var s=r.split(":");jn[s[1]]=n[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){_n.units[a]="px"});on.registerPlugin(Wd);var vt=on.registerPlugin(Wd)||on;vt.core.Tween;const Xd=new Tx,qd=new Ph,St=[{name:"Fomosphere",background:"#75BCC6",config:{uPositionFrequency:1.15,uPositionStrength:.44,uTimeFrequency:.25,uSmallWavePositionFrequency:2,uSmallWavePositionStrength:.17,uSmallWaveTimeFrequency:.14,roughness:.16,metalness:1,envMapIntensity:2.1,clearcoat:.82,clearcoatRoughness:.38,transmission:.65,flatShading:!1,wireframe:!1,map:"cd"}},{name:"Discobrain",background:"#7600F0",config:{uPositionFrequency:2.05,uPositionStrength:.08,uTimeFrequency:1.15,uSmallWavePositionFrequency:2.54,uSmallWavePositionStrength:.19,uSmallWaveTimeFrequency:.97,roughness:.16,metalness:1,envMapIntensity:2.1,clearcoat:.82,clearcoatRoughness:.38,transmission:.65,flatShading:!1,wireframe:!1,map:"rainbow"}},{name:"Color Fusion",background:"#FDCF8A",config:{uPositionFrequency:2.6,uPositionStrength:.75,uTimeFrequency:.82,uSmallWavePositionFrequency:.68,uSmallWavePositionStrength:.84,uSmallWaveTimeFrequency:.68,roughness:.09,metalness:1,envMapIntensity:2,clearcoat:0,clearcoatRoughness:0,transmission:0,flatShading:!1,wireframe:!1,map:"cosmic-fusion"}},{name:"Purple Mirror",background:"#5300B1",config:{uPositionFrequency:.584,uPositionStrength:.276,uSmallWavePositionFrequency:.899,uSmallWavePositionStrength:1.266,roughness:0,metalness:1,envMapIntensity:2,clearcoat:0,clearcoatRoughness:0,transmission:0,flatShading:!1,wireframe:!1,map:"purple-rain"}},{name:"Alien Goo",background:"#657174",config:{uPositionFrequency:1.022,uPositionStrength:.99,uSmallWavePositionFrequency:.378,uSmallWavePositionStrength:.341,roughness:.292,metalness:.73,envMapIntensity:.86,clearcoat:1,clearcoatRoughness:0,transmission:0,flatShading:!1,wireframe:!1,map:"lucky-day"}}];let ml=!1,Dt=0;const or=new mx;or.background=new Ke("#333");const Ks=new Mn(75,window.innerWidth/window.innerHeight,.1,1e3),Ui=new Ch({canvas:document.querySelector("#canvas")});Ui.setSize(window.innerWidth,window.innerHeight);Ui.setPixelRatio(Math.min(window.devicePixelRatio,2));Ui.toneMapping=Yf;Ui.toneMappingExposure=1;Ui.outputColorSpace=Rt;const jd={uTime:{value:0},uPositionFrequency:{value:St[Dt].config.uPositionFrequency},uPositionStrength:{value:St[Dt].config.uPositionStrength},uTimeFrequency:{value:.3},uSmallWavePositionFrequency:{value:St[Dt].config.uSmallWavePositionFrequency},uSmallWavePositionStrength:{value:St[Dt].config.uSmallWavePositionStrength},uSmallWaveTimeFrequency:{value:.3}},Wt=new g1({baseMaterial:xx,vertexShader:v1,map:Xd.load(`./gradients/${St[Dt].config.map}.png`),metalness:St[Dt].config.metalness,roughness:St[Dt].config.roughness,envMapIntensity:St[Dt].config.envMapIntensity,clearcoat:St[Dt].config.clearcoat,clearcoatRoughness:St[Dt].config.clearcoatRoughness,transmission:St[Dt].config.transmission,flatShading:St[Dt].config.flatShading,wireframe:St[Dt].config.wireframe,uniforms:jd}),Yd=_1(new $l(1,70));Yd.computeTangents();const Wl=new bn(Yd,Wt);or.add(Wl);Ks.position.z=3;new Rx(qd).load("https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_08_1k.hdr",function(a){a.mapping=Is,or.environment=a});window.addEventListener("resize",()=>{Ks.aspect=window.innerWidth/window.innerHeight,Ks.updateProjectionMatrix(),Ui.setSize(window.innerWidth,window.innerHeight),Ui.setPixelRatio(Math.min(window.devicePixelRatio,2))});const CS=new Ax,Xl=new Pi({fragmentShader:"void main() { gl_FragColor = vec4(1.0); }",vertexShader:x1,side:kn,uniforms:{progress:{value:0},direction:{value:1}}}),ws=St.map((a,e)=>{const t=new Xh;return t.text=a.name,t.font="./aften_screen.woff",t.anchorX="center",t.anchorY="middle",t.material=Xl,t.position.set(0,0,2),e!==0&&t.scale.set(0,0,0),t.letterSpacing=-.08,t.fontSize=window.innerWidth/4e3,t.glyphGeometryDetail=20,t.sync(),or.add(t),t});window.addEventListener("wheel",a=>{if(ml)return;ml=!0;let e=Math.sign(a.deltaY),t=(Dt+e+St.length)%St.length;ws[t].scale.set(1,1,1),ws[t].position.x=e*3.5,vt.to(Xl.uniforms.progress,{value:.5,duration:1,ease:"linear",onComplete:()=>{Dt=t,ml=!1,Xl.uniforms.progress.value=0}}),vt.to(ws[Dt].position,{x:-e*3,duration:1,ease:"power2.inOut"}),vt.to(Wl.rotation,{y:Wl.rotation.y+Math.PI*4*-e,duration:1,ease:"power2.inOut"}),vt.to(ws[t].position,{x:0,duration:1,ease:"power2.inOut"});const i=new Ke(St[t].background);vt.to(or.background,{r:i.r,g:i.g,b:i.b,duration:1,ease:"linear"}),PS(St[t].config)});function PS(a){a.uPositionFrequency!==void 0&&vt.to(Wt.uniforms.uPositionFrequency,{value:a.uPositionFrequency,duration:1,ease:"power2.inOut"}),a.uPositionStrength!==void 0&&vt.to(Wt.uniforms.uPositionStrength,{value:a.uPositionStrength,duration:1,ease:"power2.inOut"}),a.uSmallWavePositionFrequency!==void 0&&vt.to(Wt.uniforms.uSmallWavePositionFrequency,{value:a.uSmallWavePositionFrequency,duration:1,ease:"power2.inOut"}),a.uSmallWavePositionStrength!==void 0&&vt.to(Wt.uniforms.uSmallWavePositionStrength,{value:a.uSmallWavePositionStrength,duration:1,ease:"power2.inOut"}),a.uSmallWaveTimeFrequency!==void 0&&vt.to(Wt.uniforms.uSmallWaveTimeFrequency,{value:a.uSmallWaveTimeFrequency,duration:1,ease:"power2.inOut"}),a.map!==void 0&&setTimeout(()=>{Wt.map=Xd.load(`./gradients/${a.map}.png`)},400),a.roughness!==void 0&&vt.to(Wt,{roughness:a.roughness,duration:1,ease:"power2.inOut"}),a.metalness!==void 0&&vt.to(Wt,{metalness:a.metalness,duration:1,ease:"power2.inOut"}),a.envMapIntensity!==void 0&&vt.to(Wt,{envMapIntensity:a.envMapIntensity,duration:1,ease:"power2.inOut"}),a.clearcoat!==void 0&&vt.to(Wt,{clearcoat:a.clearcoat,duration:1,ease:"power2.inOut"}),a.clearcoatRoughness!==void 0&&vt.to(Wt,{clearcoatRoughness:a.clearcoatRoughness,duration:1,ease:"power2.inOut"}),a.transmission!==void 0&&vt.to(Wt,{transmission:a.transmission,duration:1,ease:"power2.inOut"}),a.flatShading!==void 0&&vt.to(Wt,{flatShading:a.flatShading,duration:1,ease:"power2.inOut"}),a.wireframe!==void 0&&vt.to(Wt,{wireframe:a.wireframe,duration:1,ease:"power2.inOut"})}qd.onLoad=()=>{function a(){requestAnimationFrame(a),jd.uTime.value=CS.getElapsedTime(),Ui.render(or,Ks)}const e=new Ke(St[Dt].background);vt.to(or.background,{r:e.r,g:e.g,b:e.b,duration:1,ease:"linear"}),a()};
