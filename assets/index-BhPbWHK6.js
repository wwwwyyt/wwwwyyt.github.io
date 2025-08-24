(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Qn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const G={},gt=[],Re=()=>{},wi=()=>!1,fn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),eo=e=>e.startsWith("onUpdate:"),ee=Object.assign,to=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},_i=Object.prototype.hasOwnProperty,j=(e,t)=>_i.call(e,t),O=Array.isArray,vt=e=>un(e)==="[object Map]",lr=e=>un(e)==="[object Set]",D=e=>typeof e=="function",Q=e=>typeof e=="string",je=e=>typeof e=="symbol",Y=e=>e!==null&&typeof e=="object",ar=e=>(Y(e)||D(e))&&D(e.then)&&D(e.catch),cr=Object.prototype.toString,un=e=>cr.call(e),Ci=e=>un(e).slice(8,-1),dr=e=>un(e)==="[object Object]",no=e=>Q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ot=Qn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ki=/-(\w)/g,Te=pn(e=>e.replace(ki,(t,n)=>n?n.toUpperCase():"")),Mi=/\B([A-Z])/g,ut=pn(e=>e.replace(Mi,"-$1").toLowerCase()),hn=pn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Mn=pn(e=>e?`on${hn(e)}`:""),Je=(e,t)=>!Object.is(e,t),Sn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},fr=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},Si=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ti=e=>{const t=Q(e)?Number(e):NaN;return isNaN(t)?e:t};let So;const mn=()=>So||(So=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gn(e){if(O(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=Q(o)?zi(o):gn(o);if(r)for(const i in r)t[i]=r[i]}return t}else if(Q(e)||Y(e))return e}const Ei=/;(?![^(]*\))/g,Ai=/:([^]+)/,Oi=/\/\*[^]*?\*\//g;function zi(e){const t={};return e.replace(Oi,"").split(Ei).forEach(n=>{if(n){const o=n.split(Ai);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function oo(e){let t="";if(Q(e))t=e;else if(O(e))for(let n=0;n<e.length;n++){const o=oo(e[n]);o&&(t+=o+" ")}else if(Y(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ii="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fi=Qn(Ii);function ur(e){return!!e||e===""}const pr=e=>!!(e&&e.__v_isRef===!0),Et=e=>Q(e)?e:e==null?"":O(e)||Y(e)&&(e.toString===cr||!D(e.toString))?pr(e)?Et(e.value):JSON.stringify(e,hr,2):String(e),hr=(e,t)=>pr(t)?hr(e,t.value):vt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,r],i)=>(n[Tn(o,i)+" =>"]=r,n),{})}:lr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Tn(n))}:je(t)?Tn(t):Y(t)&&!O(t)&&!dr(t)?String(t):t,Tn=(e,t="")=>{var n;return je(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ce;class Di{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ce,!t&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ce;try{return Ce=this,t()}finally{Ce=n}}}on(){Ce=this}off(){Ce=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Li(){return Ce}let q;const En=new WeakSet;class mr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ce&&Ce.active&&Ce.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,En.has(this)&&(En.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,To(this),br(this);const t=q,n=Oe;q=this,Oe=!0;try{return this.fn()}finally{xr(this),q=t,Oe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)so(t);this.deps=this.depsTail=void 0,To(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?En.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hn(this)&&this.run()}get dirty(){return Hn(this)}}let gr=0,zt,It;function vr(e,t=!1){if(e.flags|=8,t){e.next=It,It=e;return}e.next=zt,zt=e}function ro(){gr++}function io(){if(--gr>0)return;if(It){let t=It;for(It=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;zt;){let t=zt;for(zt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(o){e||(e=o)}t=n}}if(e)throw e}function br(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function xr(e){let t,n=e.depsTail,o=n;for(;o;){const r=o.prevDep;o.version===-1?(o===n&&(n=r),so(o),Pi(o)):t=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=r}e.deps=t,e.depsTail=n}function Hn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(yr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function yr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Lt))return;e.globalVersion=Lt;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Hn(e)){e.flags&=-3;return}const n=q,o=Oe;q=e,Oe=!0;try{br(e);const r=e.fn(e._value);(t.version===0||Je(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{q=n,Oe=o,xr(e),e.flags&=-3}}function so(e,t=!1){const{dep:n,prevSub:o,nextSub:r}=e;if(o&&(o.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=o,e.nextSub=void 0),n.subs===e&&(n.subs=o,!o&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)so(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Pi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Oe=!0;const wr=[];function Ze(){wr.push(Oe),Oe=!1}function Qe(){const e=wr.pop();Oe=e===void 0?!0:e}function To(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=q;q=void 0;try{t()}finally{q=n}}}let Lt=0;class Ri{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!q||!Oe||q===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==q)n=this.activeLink=new Ri(q,this),q.deps?(n.prevDep=q.depsTail,q.depsTail.nextDep=n,q.depsTail=n):q.deps=q.depsTail=n,_r(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const o=n.nextDep;o.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=o),n.prevDep=q.depsTail,n.nextDep=void 0,q.depsTail.nextDep=n,q.depsTail=n,q.deps===n&&(q.deps=o)}return n}trigger(t){this.version++,Lt++,this.notify(t)}notify(t){ro();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{io()}}}function _r(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let o=t.deps;o;o=o.nextDep)_r(o)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const rn=new WeakMap,dt=Symbol(""),Bn=Symbol(""),Pt=Symbol("");function ce(e,t,n){if(Oe&&q){let o=rn.get(e);o||rn.set(e,o=new Map);let r=o.get(n);r||(o.set(n,r=new lo),r.map=o,r.key=n),r.track()}}function Be(e,t,n,o,r,i){const s=rn.get(e);if(!s){Lt++;return}const l=a=>{a&&a.trigger()};if(ro(),t==="clear")s.forEach(l);else{const a=O(e),u=a&&no(n);if(a&&n==="length"){const f=Number(o);s.forEach((p,x)=>{(x==="length"||x===Pt||!je(x)&&x>=f)&&l(p)})}else switch((n!==void 0||s.has(void 0))&&l(s.get(n)),u&&l(s.get(Pt)),t){case"add":a?u&&l(s.get("length")):(l(s.get(dt)),vt(e)&&l(s.get(Bn)));break;case"delete":a||(l(s.get(dt)),vt(e)&&l(s.get(Bn)));break;case"set":vt(e)&&l(s.get(dt));break}}io()}function $i(e,t){const n=rn.get(e);return n&&n.get(t)}function pt(e){const t=$(e);return t===e?t:(ce(t,"iterate",Pt),Se(e)?t:t.map(de))}function vn(e){return ce(e=$(e),"iterate",Pt),e}const Ni={__proto__:null,[Symbol.iterator](){return An(this,Symbol.iterator,de)},concat(...e){return pt(this).concat(...e.map(t=>O(t)?pt(t):t))},entries(){return An(this,"entries",e=>(e[1]=de(e[1]),e))},every(e,t){return $e(this,"every",e,t,void 0,arguments)},filter(e,t){return $e(this,"filter",e,t,n=>n.map(de),arguments)},find(e,t){return $e(this,"find",e,t,de,arguments)},findIndex(e,t){return $e(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return $e(this,"findLast",e,t,de,arguments)},findLastIndex(e,t){return $e(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return $e(this,"forEach",e,t,void 0,arguments)},includes(...e){return On(this,"includes",e)},indexOf(...e){return On(this,"indexOf",e)},join(e){return pt(this).join(e)},lastIndexOf(...e){return On(this,"lastIndexOf",e)},map(e,t){return $e(this,"map",e,t,void 0,arguments)},pop(){return Mt(this,"pop")},push(...e){return Mt(this,"push",e)},reduce(e,...t){return Eo(this,"reduce",e,t)},reduceRight(e,...t){return Eo(this,"reduceRight",e,t)},shift(){return Mt(this,"shift")},some(e,t){return $e(this,"some",e,t,void 0,arguments)},splice(...e){return Mt(this,"splice",e)},toReversed(){return pt(this).toReversed()},toSorted(e){return pt(this).toSorted(e)},toSpliced(...e){return pt(this).toSpliced(...e)},unshift(...e){return Mt(this,"unshift",e)},values(){return An(this,"values",de)}};function An(e,t,n){const o=vn(e),r=o[t]();return o!==e&&!Se(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const Hi=Array.prototype;function $e(e,t,n,o,r,i){const s=vn(e),l=s!==e&&!Se(e),a=s[t];if(a!==Hi[t]){const p=a.apply(e,i);return l?de(p):p}let u=n;s!==e&&(l?u=function(p,x){return n.call(this,de(p),x,e)}:n.length>2&&(u=function(p,x){return n.call(this,p,x,e)}));const f=a.call(s,u,o);return l&&r?r(f):f}function Eo(e,t,n,o){const r=vn(e);let i=n;return r!==e&&(Se(e)?n.length>3&&(i=function(s,l,a){return n.call(this,s,l,a,e)}):i=function(s,l,a){return n.call(this,s,de(l),a,e)}),r[t](i,...o)}function On(e,t,n){const o=$(e);ce(o,"iterate",Pt);const r=o[t](...n);return(r===-1||r===!1)&&fo(n[0])?(n[0]=$(n[0]),o[t](...n)):r}function Mt(e,t,n=[]){Ze(),ro();const o=$(e)[t].apply(e,n);return io(),Qe(),o}const Bi=Qn("__proto__,__v_isRef,__isVue"),Cr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(je));function ji(e){je(e)||(e=String(e));const t=$(this);return ce(t,"has",e),t.hasOwnProperty(e)}class kr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return o===(r?i?Zi:Er:i?Tr:Sr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const s=O(t);if(!r){let a;if(s&&(a=Ni[n]))return a;if(n==="hasOwnProperty")return ji}const l=Reflect.get(t,n,se(t)?t:o);return(je(n)?Cr.has(n):Bi(n))||(r||ce(t,"get",n),i)?l:se(l)?s&&no(n)?l:l.value:Y(l)?r?Ar(l):Rt(l):l}}class Mr extends kr{constructor(t=!1){super(!1,t)}set(t,n,o,r){let i=t[n];if(!this._isShallow){const a=ft(i);if(!Se(o)&&!ft(o)&&(i=$(i),o=$(o)),!O(t)&&se(i)&&!se(o))return a?!1:(i.value=o,!0)}const s=O(t)&&no(n)?Number(n)<t.length:j(t,n),l=Reflect.set(t,n,o,se(t)?t:r);return t===$(r)&&(s?Je(o,i)&&Be(t,"set",n,o):Be(t,"add",n,o)),l}deleteProperty(t,n){const o=j(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&o&&Be(t,"delete",n,void 0),r}has(t,n){const o=Reflect.has(t,n);return(!je(n)||!Cr.has(n))&&ce(t,"has",n),o}ownKeys(t){return ce(t,"iterate",O(t)?"length":dt),Reflect.ownKeys(t)}}class Vi extends kr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ui=new Mr,Ki=new Vi,Wi=new Mr(!0);const jn=e=>e,Yt=e=>Reflect.getPrototypeOf(e);function qi(e,t,n){return function(...o){const r=this.__v_raw,i=$(r),s=vt(i),l=e==="entries"||e===Symbol.iterator&&s,a=e==="keys"&&s,u=r[e](...o),f=n?jn:t?Vn:de;return!t&&ce(i,"iterate",a?Bn:dt),{next(){const{value:p,done:x}=u.next();return x?{value:p,done:x}:{value:l?[f(p[0]),f(p[1])]:f(p),done:x}},[Symbol.iterator](){return this}}}}function Jt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Gi(e,t){const n={get(r){const i=this.__v_raw,s=$(i),l=$(r);e||(Je(r,l)&&ce(s,"get",r),ce(s,"get",l));const{has:a}=Yt(s),u=t?jn:e?Vn:de;if(a.call(s,r))return u(i.get(r));if(a.call(s,l))return u(i.get(l));i!==s&&i.get(r)},get size(){const r=this.__v_raw;return!e&&ce($(r),"iterate",dt),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,s=$(i),l=$(r);return e||(Je(r,l)&&ce(s,"has",r),ce(s,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const s=this,l=s.__v_raw,a=$(l),u=t?jn:e?Vn:de;return!e&&ce(a,"iterate",dt),l.forEach((f,p)=>r.call(i,u(f),u(p),s))}};return ee(n,e?{add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear")}:{add(r){!t&&!Se(r)&&!ft(r)&&(r=$(r));const i=$(this);return Yt(i).has.call(i,r)||(i.add(r),Be(i,"add",r,r)),this},set(r,i){!t&&!Se(i)&&!ft(i)&&(i=$(i));const s=$(this),{has:l,get:a}=Yt(s);let u=l.call(s,r);u||(r=$(r),u=l.call(s,r));const f=a.call(s,r);return s.set(r,i),u?Je(i,f)&&Be(s,"set",r,i):Be(s,"add",r,i),this},delete(r){const i=$(this),{has:s,get:l}=Yt(i);let a=s.call(i,r);a||(r=$(r),a=s.call(i,r)),l&&l.call(i,r);const u=i.delete(r);return a&&Be(i,"delete",r,void 0),u},clear(){const r=$(this),i=r.size!==0,s=r.clear();return i&&Be(r,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=qi(r,e,t)}),n}function ao(e,t){const n=Gi(e,t);return(o,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(j(n,r)&&r in o?n:o,r,i)}const Yi={get:ao(!1,!1)},Ji={get:ao(!1,!0)},Xi={get:ao(!0,!1)};const Sr=new WeakMap,Tr=new WeakMap,Er=new WeakMap,Zi=new WeakMap;function Qi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function es(e){return e.__v_skip||!Object.isExtensible(e)?0:Qi(Ci(e))}function Rt(e){return ft(e)?e:co(e,!1,Ui,Yi,Sr)}function ts(e){return co(e,!1,Wi,Ji,Tr)}function Ar(e){return co(e,!0,Ki,Xi,Er)}function co(e,t,n,o,r){if(!Y(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const s=es(e);if(s===0)return e;const l=new Proxy(e,s===2?o:n);return r.set(e,l),l}function bt(e){return ft(e)?bt(e.__v_raw):!!(e&&e.__v_isReactive)}function ft(e){return!!(e&&e.__v_isReadonly)}function Se(e){return!!(e&&e.__v_isShallow)}function fo(e){return e?!!e.__v_raw:!1}function $(e){const t=e&&e.__v_raw;return t?$(t):e}function ns(e){return!j(e,"__v_skip")&&Object.isExtensible(e)&&fr(e,"__v_skip",!0),e}const de=e=>Y(e)?Rt(e):e,Vn=e=>Y(e)?Ar(e):e;function se(e){return e?e.__v_isRef===!0:!1}function ht(e){return os(e,!1)}function os(e,t){return se(e)?e:new rs(e,t)}class rs{constructor(t,n){this.dep=new lo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:$(t),this._value=n?t:de(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,o=this.__v_isShallow||Se(t)||ft(t);t=o?t:$(t),Je(t,n)&&(this._rawValue=t,this._value=o?t:de(t),this.dep.trigger())}}function uo(e){return se(e)?e.value:e}const is={get:(e,t,n)=>t==="__v_raw"?e:uo(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return se(r)&&!se(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function Or(e){return bt(e)?e:new Proxy(e,is)}function ss(e){const t=O(e)?new Array(e.length):{};for(const n in e)t[n]=as(e,n);return t}class ls{constructor(t,n,o){this._object=t,this._key=n,this._defaultValue=o,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return $i($(this._object),this._key)}}function as(e,t,n){const o=e[t];return se(o)?o:new ls(e,t,n)}class cs{constructor(t,n,o){this.fn=t,this.setter=n,this._value=void 0,this.dep=new lo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Lt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&q!==this)return vr(this,!0),!0}get value(){const t=this.dep.track();return yr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ds(e,t,n=!1){let o,r;return D(e)?o=e:(o=e.get,r=e.set),new cs(o,r,n)}const Xt={},sn=new WeakMap;let lt;function fs(e,t=!1,n=lt){if(n){let o=sn.get(n);o||sn.set(n,o=[]),o.push(e)}}function us(e,t,n=G){const{immediate:o,deep:r,once:i,scheduler:s,augmentJob:l,call:a}=n,u=S=>r?S:Se(S)||r===!1||r===0?Ye(S,1):Ye(S);let f,p,x,_,z=!1,E=!1;if(se(e)?(p=()=>e.value,z=Se(e)):bt(e)?(p=()=>u(e),z=!0):O(e)?(E=!0,z=e.some(S=>bt(S)||Se(S)),p=()=>e.map(S=>{if(se(S))return S.value;if(bt(S))return u(S);if(D(S))return a?a(S,2):S()})):D(e)?t?p=a?()=>a(e,2):e:p=()=>{if(x){Ze();try{x()}finally{Qe()}}const S=lt;lt=f;try{return a?a(e,3,[_]):e(_)}finally{lt=S}}:p=Re,t&&r){const S=p,B=r===!0?1/0:r;p=()=>Ye(S(),B)}const P=Li(),F=()=>{f.stop(),P&&to(P.effects,f)};if(i&&t){const S=t;t=(...B)=>{S(...B),F()}}let N=E?new Array(e.length).fill(Xt):Xt;const H=S=>{if(!(!(f.flags&1)||!f.dirty&&!S))if(t){const B=f.run();if(r||z||(E?B.some((ne,ue)=>Je(ne,N[ue])):Je(B,N))){x&&x();const ne=lt;lt=f;try{const ue=[B,N===Xt?void 0:E&&N[0]===Xt?[]:N,_];a?a(t,3,ue):t(...ue),N=B}finally{lt=ne}}}else f.run()};return l&&l(H),f=new mr(p),f.scheduler=s?()=>s(H,!1):H,_=S=>fs(S,!1,f),x=f.onStop=()=>{const S=sn.get(f);if(S){if(a)a(S,4);else for(const B of S)B();sn.delete(f)}},t?o?H(!0):N=f.run():s?s(H.bind(null,!0),!0):f.run(),F.pause=f.pause.bind(f),F.resume=f.resume.bind(f),F.stop=F,F}function Ye(e,t=1/0,n){if(t<=0||!Y(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,se(e))Ye(e.value,t,n);else if(O(e))for(let o=0;o<e.length;o++)Ye(e[o],t,n);else if(lr(e)||vt(e))e.forEach(o=>{Ye(o,t,n)});else if(dr(e)){for(const o in e)Ye(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&Ye(e[o],t,n)}return e}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Kt(e,t,n,o){try{return o?e(...o):e()}catch(r){bn(r,t,n)}}function ze(e,t,n,o){if(D(e)){const r=Kt(e,t,n,o);return r&&ar(r)&&r.catch(i=>{bn(i,t,n)}),r}if(O(e)){const r=[];for(let i=0;i<e.length;i++)r.push(ze(e[i],t,n,o));return r}}function bn(e,t,n,o=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=t&&t.appContext.config||G;if(t){let l=t.parent;const a=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](e,a,u)===!1)return}l=l.parent}if(i){Ze(),Kt(i,null,10,[e,a,u]),Qe();return}}ps(e,n,r,o,s)}function ps(e,t,n,o=!0,r=!1){if(r)throw e;console.error(e)}const he=[];let Le=-1;const xt=[];let We=null,mt=0;const zr=Promise.resolve();let ln=null;function hs(e){const t=ln||zr;return e?t.then(this?e.bind(this):e):t}function ms(e){let t=Le+1,n=he.length;for(;t<n;){const o=t+n>>>1,r=he[o],i=$t(r);i<e||i===e&&r.flags&2?t=o+1:n=o}return t}function po(e){if(!(e.flags&1)){const t=$t(e),n=he[he.length-1];!n||!(e.flags&2)&&t>=$t(n)?he.push(e):he.splice(ms(t),0,e),e.flags|=1,Ir()}}function Ir(){ln||(ln=zr.then(Dr))}function gs(e){O(e)?xt.push(...e):We&&e.id===-1?We.splice(mt+1,0,e):e.flags&1||(xt.push(e),e.flags|=1),Ir()}function Ao(e,t,n=Le+1){for(;n<he.length;n++){const o=he[n];if(o&&o.flags&2){if(e&&o.id!==e.uid)continue;he.splice(n,1),n--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function Fr(e){if(xt.length){const t=[...new Set(xt)].sort((n,o)=>$t(n)-$t(o));if(xt.length=0,We){We.push(...t);return}for(We=t,mt=0;mt<We.length;mt++){const n=We[mt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}We=null,mt=0}}const $t=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Dr(e){try{for(Le=0;Le<he.length;Le++){const t=he[Le];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Kt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Le<he.length;Le++){const t=he[Le];t&&(t.flags&=-2)}Le=-1,he.length=0,Fr(),ln=null,(he.length||xt.length)&&Dr()}}let fe=null,Lr=null;function an(e){const t=fe;return fe=e,Lr=e&&e.type.__scopeId||null,t}function Qt(e,t=fe,n){if(!t||e._n)return e;const o=(...r)=>{o._d&&No(-1);const i=an(t);let s;try{s=e(...r)}finally{an(i),o._d&&No(1)}return s};return o._n=!0,o._c=!0,o._d=!0,o}function ot(e,t,n,o){const r=e.dirs,i=t&&t.dirs;for(let s=0;s<r.length;s++){const l=r[s];i&&(l.oldValue=i[s].value);let a=l.dir[o];a&&(Ze(),ze(a,n,8,[e.el,l,e,t]),Qe())}}const vs=Symbol("_vte"),Pr=e=>e.__isTeleport,qe=Symbol("_leaveCb"),Zt=Symbol("_enterCb");function bs(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ho(()=>{e.isMounted=!0}),Kr(()=>{e.isUnmounting=!0}),e}const Me=[Function,Array],Rr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Me,onEnter:Me,onAfterEnter:Me,onEnterCancelled:Me,onBeforeLeave:Me,onLeave:Me,onAfterLeave:Me,onLeaveCancelled:Me,onBeforeAppear:Me,onAppear:Me,onAfterAppear:Me,onAppearCancelled:Me},$r=e=>{const t=e.subTree;return t.component?$r(t.component):t},xs={name:"BaseTransition",props:Rr,setup(e,{slots:t}){const n=xl(),o=bs();return()=>{const r=t.default&&Br(t.default(),!0);if(!r||!r.length)return;const i=Nr(r),s=$(e),{mode:l}=s;if(o.isLeaving)return zn(i);const a=Oo(i);if(!a)return zn(i);let u=Un(a,s,o,n,x=>u=x);a.type!==ge&&Nt(a,u);const f=n.subTree,p=f&&Oo(f);if(p&&p.type!==ge&&!at(a,p)&&$r(n).type!==ge){const x=Un(p,s,o,n);if(Nt(p,x),l==="out-in"&&a.type!==ge)return o.isLeaving=!0,x.afterLeave=()=>{o.isLeaving=!1,n.job.flags&8||n.update(),delete x.afterLeave},zn(i);l==="in-out"&&a.type!==ge&&(x.delayLeave=(_,z,E)=>{const P=Hr(o,p);P[String(p.key)]=p,_[qe]=()=>{z(),_[qe]=void 0,delete u.delayedLeave},u.delayedLeave=E})}return i}}};function Nr(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==ge){t=n;break}}return t}const ys=xs;function Hr(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function Un(e,t,n,o,r){const{appear:i,mode:s,persisted:l=!1,onBeforeEnter:a,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:x,onLeave:_,onAfterLeave:z,onLeaveCancelled:E,onBeforeAppear:P,onAppear:F,onAfterAppear:N,onAppearCancelled:H}=t,S=String(e.key),B=Hr(n,e),ne=(L,U)=>{L&&ze(L,o,9,U)},ue=(L,U)=>{const X=U[1];ne(L,U),O(L)?L.every(M=>M.length<=1)&&X():L.length<=1&&X()},ve={mode:s,persisted:l,beforeEnter(L){let U=a;if(!n.isMounted)if(i)U=P||a;else return;L[qe]&&L[qe](!0);const X=B[S];X&&at(e,X)&&X.el[qe]&&X.el[qe](),ne(U,[L])},enter(L){let U=u,X=f,M=p;if(!n.isMounted)if(i)U=F||u,X=N||f,M=H||p;else return;let J=!1;const le=L[Zt]=et=>{J||(J=!0,et?ne(M,[L]):ne(X,[L]),ve.delayedLeave&&ve.delayedLeave(),L[Zt]=void 0)};U?ue(U,[L,le]):le()},leave(L,U){const X=String(e.key);if(L[Zt]&&L[Zt](!0),n.isUnmounting)return U();ne(x,[L]);let M=!1;const J=L[qe]=le=>{M||(M=!0,U(),le?ne(E,[L]):ne(z,[L]),L[qe]=void 0,B[X]===e&&delete B[X])};B[X]=e,_?ue(_,[L,J]):J()},clone(L){const U=Un(L,t,n,o,r);return r&&r(U),U}};return ve}function zn(e){if(xn(e))return e=Xe(e),e.children=null,e}function Oo(e){if(!xn(e))return Pr(e.type)&&e.children?Nr(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&D(n.default))return n.default()}}function Nt(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Nt(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Br(e,t=!1,n){let o=[],r=0;for(let i=0;i<e.length;i++){let s=e[i];const l=n==null?s.key:String(n)+String(s.key!=null?s.key:i);s.type===me?(s.patchFlag&128&&r++,o=o.concat(Br(s.children,t,l))):(t||s.type!==ge)&&o.push(l!=null?Xe(s,{key:l}):s)}if(r>1)for(let i=0;i<o.length;i++)o[i].patchFlag=-2;return o}/*! #__NO_SIDE_EFFECTS__ */function ws(e,t){return D(e)?ee({name:e.name},t,{setup:e}):e}function jr(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Kn(e,t,n,o,r=!1){if(O(e)){e.forEach((z,E)=>Kn(z,t&&(O(t)?t[E]:t),n,o,r));return}if(yt(o)&&!r)return;const i=o.shapeFlag&4?bo(o.component):o.el,s=r?null:i,{i:l,r:a}=e,u=t&&t.r,f=l.refs===G?l.refs={}:l.refs,p=l.setupState,x=$(p),_=p===G?()=>!1:z=>j(x,z);if(u!=null&&u!==a&&(Q(u)?(f[u]=null,_(u)&&(p[u]=null)):se(u)&&(u.value=null)),D(a))Kt(a,l,12,[s,f]);else{const z=Q(a),E=se(a);if(z||E){const P=()=>{if(e.f){const F=z?_(a)?p[a]:f[a]:a.value;r?O(F)&&to(F,i):O(F)?F.includes(i)||F.push(i):z?(f[a]=[i],_(a)&&(p[a]=f[a])):(a.value=[i],e.k&&(f[e.k]=a.value))}else z?(f[a]=s,_(a)&&(p[a]=s)):E&&(a.value=s,e.k&&(f[e.k]=s))};s?(P.id=-1,_e(P,n)):P()}}}mn().requestIdleCallback;mn().cancelIdleCallback;const yt=e=>!!e.type.__asyncLoader,xn=e=>e.type.__isKeepAlive;function _s(e,t){Vr(e,"a",t)}function Cs(e,t){Vr(e,"da",t)}function Vr(e,t,n=ie){const o=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(yn(t,o,n),n){let r=n.parent;for(;r&&r.parent;)xn(r.parent.vnode)&&ks(o,t,n,r),r=r.parent}}function ks(e,t,n,o){const r=yn(t,e,o,!0);Wr(()=>{to(o[t],r)},n)}function yn(e,t,n=ie,o=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{Ze();const l=Wt(n),a=ze(t,n,e,s);return l(),Qe(),a});return o?r.unshift(i):r.push(i),i}}const Ve=e=>(t,n=ie)=>{(!Vt||e==="sp")&&yn(e,(...o)=>t(...o),n)},Ms=Ve("bm"),ho=Ve("m"),Ss=Ve("bu"),Ur=Ve("u"),Kr=Ve("bum"),Wr=Ve("um"),Ts=Ve("sp"),Es=Ve("rtg"),As=Ve("rtc");function Os(e,t=ie){yn("ec",e,t)}const zs="components";function Is(e,t){return Ds(zs,e,!0,t)||e}const Fs=Symbol.for("v-ndc");function Ds(e,t,n=!0,o=!1){const r=fe||ie;if(r){const i=r.type;{const l=kl(i,!1);if(l&&(l===t||l===Te(t)||l===hn(Te(t))))return i}const s=zo(r[e]||i[e],t)||zo(r.appContext[e],t);return!s&&o?i:s}}function zo(e,t){return e&&(e[t]||e[Te(t)]||e[hn(Te(t))])}function Ls(e,t,n,o){let r;const i=n,s=O(e);if(s||Q(e)){const l=s&&bt(e);let a=!1;l&&(a=!Se(e),e=vn(e)),r=new Array(e.length);for(let u=0,f=e.length;u<f;u++)r[u]=t(a?de(e[u]):e[u],u,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,i)}else if(Y(e))if(e[Symbol.iterator])r=Array.from(e,(l,a)=>t(l,a,void 0,i));else{const l=Object.keys(e);r=new Array(l.length);for(let a=0,u=l.length;a<u;a++){const f=l[a];r[a]=t(e[f],f,a,i)}}else r=[];return r}function qr(e,t,n={},o,r){if(fe.ce||fe.parent&&yt(fe.parent)&&fe.parent.ce)return be(),Bt(me,null,[re("slot",n,o)],64);let i=e[t];i&&i._c&&(i._d=!1),be();const s=i&&Gr(i(n)),l=n.key||s&&s.key,a=Bt(me,{key:(l&&!je(l)?l:`_${t}`)+(!s&&o?"_fb":"")},s||[],s&&e._===1?64:-2);return i&&i._c&&(i._d=!0),a}function Gr(e){return e.some(t=>jt(t)?!(t.type===ge||t.type===me&&!Gr(t.children)):!0)?e:null}const Wn=e=>e?hi(e)?bo(e):Wn(e.parent):null,Ft=ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Wn(e.parent),$root:e=>Wn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>mo(e),$forceUpdate:e=>e.f||(e.f=()=>{po(e.update)}),$nextTick:e=>e.n||(e.n=hs.bind(e.proxy)),$watch:e=>ol.bind(e)}),In=(e,t)=>e!==G&&!e.__isScriptSetup&&j(e,t),Ps={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:r,props:i,accessCache:s,type:l,appContext:a}=e;let u;if(t[0]!=="$"){const _=s[t];if(_!==void 0)switch(_){case 1:return o[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(In(o,t))return s[t]=1,o[t];if(r!==G&&j(r,t))return s[t]=2,r[t];if((u=e.propsOptions[0])&&j(u,t))return s[t]=3,i[t];if(n!==G&&j(n,t))return s[t]=4,n[t];qn&&(s[t]=0)}}const f=Ft[t];let p,x;if(f)return t==="$attrs"&&ce(e.attrs,"get",""),f(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==G&&j(n,t))return s[t]=4,n[t];if(x=a.config.globalProperties,j(x,t))return x[t]},set({_:e},t,n){const{data:o,setupState:r,ctx:i}=e;return In(r,t)?(r[t]=n,!0):o!==G&&j(o,t)?(o[t]=n,!0):j(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:i}},s){let l;return!!n[s]||e!==G&&j(e,s)||In(t,s)||(l=i[0])&&j(l,s)||j(o,s)||j(Ft,s)||j(r.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:j(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Io(e){return O(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let qn=!0;function Rs(e){const t=mo(e),n=e.proxy,o=e.ctx;qn=!1,t.beforeCreate&&Fo(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:s,watch:l,provide:a,inject:u,created:f,beforeMount:p,mounted:x,beforeUpdate:_,updated:z,activated:E,deactivated:P,beforeDestroy:F,beforeUnmount:N,destroyed:H,unmounted:S,render:B,renderTracked:ne,renderTriggered:ue,errorCaptured:ve,serverPrefetch:L,expose:U,inheritAttrs:X,components:M,directives:J,filters:le}=t;if(u&&$s(u,o,null),s)for(const Z in s){const K=s[Z];D(K)&&(o[Z]=K.bind(n))}if(r){const Z=r.call(n,n);Y(Z)&&(e.data=Rt(Z))}if(qn=!0,i)for(const Z in i){const K=i[Z],tt=D(K)?K.bind(n,n):D(K.get)?K.get.bind(n,n):Re,qt=!D(K)&&D(K.set)?K.set.bind(n):Re,nt=Ae({get:tt,set:qt});Object.defineProperty(o,Z,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Ie=>nt.value=Ie})}if(l)for(const Z in l)Yr(l[Z],o,n,Z);if(a){const Z=D(a)?a.call(n):a;Reflect.ownKeys(Z).forEach(K=>{Us(K,Z[K])})}f&&Fo(f,e,"c");function oe(Z,K){O(K)?K.forEach(tt=>Z(tt.bind(n))):K&&Z(K.bind(n))}if(oe(Ms,p),oe(ho,x),oe(Ss,_),oe(Ur,z),oe(_s,E),oe(Cs,P),oe(Os,ve),oe(As,ne),oe(Es,ue),oe(Kr,N),oe(Wr,S),oe(Ts,L),O(U))if(U.length){const Z=e.exposed||(e.exposed={});U.forEach(K=>{Object.defineProperty(Z,K,{get:()=>n[K],set:tt=>n[K]=tt})})}else e.exposed||(e.exposed={});B&&e.render===Re&&(e.render=B),X!=null&&(e.inheritAttrs=X),M&&(e.components=M),J&&(e.directives=J),L&&jr(e)}function $s(e,t,n=Re){O(e)&&(e=Gn(e));for(const o in e){const r=e[o];let i;Y(r)?"default"in r?i=en(r.from||o,r.default,!0):i=en(r.from||o):i=en(r),se(i)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[o]=i}}function Fo(e,t,n){ze(O(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function Yr(e,t,n,o){let r=o.includes(".")?ci(n,o):()=>n[o];if(Q(e)){const i=t[e];D(i)&&Dn(r,i)}else if(D(e))Dn(r,e.bind(n));else if(Y(e))if(O(e))e.forEach(i=>Yr(i,t,n,o));else{const i=D(e.handler)?e.handler.bind(n):t[e.handler];D(i)&&Dn(r,i,e)}}function mo(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,l=i.get(t);let a;return l?a=l:!r.length&&!n&&!o?a=t:(a={},r.length&&r.forEach(u=>cn(a,u,s,!0)),cn(a,t,s)),Y(t)&&i.set(t,a),a}function cn(e,t,n,o=!1){const{mixins:r,extends:i}=t;i&&cn(e,i,n,!0),r&&r.forEach(s=>cn(e,s,n,!0));for(const s in t)if(!(o&&s==="expose")){const l=Ns[s]||n&&n[s];e[s]=l?l(e[s],t[s]):t[s]}return e}const Ns={data:Do,props:Lo,emits:Lo,methods:At,computed:At,beforeCreate:pe,created:pe,beforeMount:pe,mounted:pe,beforeUpdate:pe,updated:pe,beforeDestroy:pe,beforeUnmount:pe,destroyed:pe,unmounted:pe,activated:pe,deactivated:pe,errorCaptured:pe,serverPrefetch:pe,components:At,directives:At,watch:Bs,provide:Do,inject:Hs};function Do(e,t){return t?e?function(){return ee(D(e)?e.call(this,this):e,D(t)?t.call(this,this):t)}:t:e}function Hs(e,t){return At(Gn(e),Gn(t))}function Gn(e){if(O(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function pe(e,t){return e?[...new Set([].concat(e,t))]:t}function At(e,t){return e?ee(Object.create(null),e,t):t}function Lo(e,t){return e?O(e)&&O(t)?[...new Set([...e,...t])]:ee(Object.create(null),Io(e),Io(t??{})):t}function Bs(e,t){if(!e)return t;if(!t)return e;const n=ee(Object.create(null),e);for(const o in t)n[o]=pe(e[o],t[o]);return n}function Jr(){return{app:null,config:{isNativeTag:wi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let js=0;function Vs(e,t){return function(o,r=null){D(o)||(o=ee({},o)),r!=null&&!Y(r)&&(r=null);const i=Jr(),s=new WeakSet,l=[];let a=!1;const u=i.app={_uid:js++,_component:o,_props:r,_container:null,_context:i,_instance:null,version:Sl,get config(){return i.config},set config(f){},use(f,...p){return s.has(f)||(f&&D(f.install)?(s.add(f),f.install(u,...p)):D(f)&&(s.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,x){if(!a){const _=u._ceVNode||re(o,r);return _.appContext=i,x===!0?x="svg":x===!1&&(x=void 0),p&&t?t(_,f):e(_,f,x),a=!0,u._container=f,f.__vue_app__=u,bo(_.component)}},onUnmount(f){l.push(f)},unmount(){a&&(ze(l,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=wt;wt=u;try{return f()}finally{wt=p}}};return u}}let wt=null;function Us(e,t){if(ie){let n=ie.provides;const o=ie.parent&&ie.parent.provides;o===n&&(n=ie.provides=Object.create(o)),n[e]=t}}function en(e,t,n=!1){const o=ie||fe;if(o||wt){const r=wt?wt._context.provides:o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&D(t)?t.call(o&&o.proxy):t}}const Xr={},Zr=()=>Object.create(Xr),Qr=e=>Object.getPrototypeOf(e)===Xr;function Ks(e,t,n,o=!1){const r={},i=Zr();e.propsDefaults=Object.create(null),ei(e,t,r,i);for(const s in e.propsOptions[0])s in r||(r[s]=void 0);n?e.props=o?r:ts(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Ws(e,t,n,o){const{props:r,attrs:i,vnode:{patchFlag:s}}=e,l=$(r),[a]=e.propsOptions;let u=!1;if((o||s>0)&&!(s&16)){if(s&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let x=f[p];if(wn(e.emitsOptions,x))continue;const _=t[x];if(a)if(j(i,x))_!==i[x]&&(i[x]=_,u=!0);else{const z=Te(x);r[z]=Yn(a,l,z,_,e,!1)}else _!==i[x]&&(i[x]=_,u=!0)}}}else{ei(e,t,r,i)&&(u=!0);let f;for(const p in l)(!t||!j(t,p)&&((f=ut(p))===p||!j(t,f)))&&(a?n&&(n[p]!==void 0||n[f]!==void 0)&&(r[p]=Yn(a,l,p,void 0,e,!0)):delete r[p]);if(i!==l)for(const p in i)(!t||!j(t,p))&&(delete i[p],u=!0)}u&&Be(e.attrs,"set","")}function ei(e,t,n,o){const[r,i]=e.propsOptions;let s=!1,l;if(t)for(let a in t){if(Ot(a))continue;const u=t[a];let f;r&&j(r,f=Te(a))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:wn(e.emitsOptions,a)||(!(a in o)||u!==o[a])&&(o[a]=u,s=!0)}if(i){const a=$(n),u=l||G;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Yn(r,a,p,u[p],e,!j(u,p))}}return s}function Yn(e,t,n,o,r,i){const s=e[n];if(s!=null){const l=j(s,"default");if(l&&o===void 0){const a=s.default;if(s.type!==Function&&!s.skipFactory&&D(a)){const{propsDefaults:u}=r;if(n in u)o=u[n];else{const f=Wt(r);o=u[n]=a.call(null,t),f()}}else o=a;r.ce&&r.ce._setProp(n,o)}s[0]&&(i&&!l?o=!1:s[1]&&(o===""||o===ut(n))&&(o=!0))}return o}const qs=new WeakMap;function ti(e,t,n=!1){const o=n?qs:t.propsCache,r=o.get(e);if(r)return r;const i=e.props,s={},l=[];let a=!1;if(!D(e)){const f=p=>{a=!0;const[x,_]=ti(p,t,!0);ee(s,x),_&&l.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!a)return Y(e)&&o.set(e,gt),gt;if(O(i))for(let f=0;f<i.length;f++){const p=Te(i[f]);Po(p)&&(s[p]=G)}else if(i)for(const f in i){const p=Te(f);if(Po(p)){const x=i[f],_=s[p]=O(x)||D(x)?{type:x}:ee({},x),z=_.type;let E=!1,P=!0;if(O(z))for(let F=0;F<z.length;++F){const N=z[F],H=D(N)&&N.name;if(H==="Boolean"){E=!0;break}else H==="String"&&(P=!1)}else E=D(z)&&z.name==="Boolean";_[0]=E,_[1]=P,(E||j(_,"default"))&&l.push(p)}}const u=[s,l];return Y(e)&&o.set(e,u),u}function Po(e){return e[0]!=="$"&&!Ot(e)}const ni=e=>e[0]==="_"||e==="$stable",go=e=>O(e)?e.map(Pe):[Pe(e)],Gs=(e,t,n)=>{if(t._n)return t;const o=Qt((...r)=>go(t(...r)),n);return o._c=!1,o},oi=(e,t,n)=>{const o=e._ctx;for(const r in e){if(ni(r))continue;const i=e[r];if(D(i))t[r]=Gs(r,i,o);else if(i!=null){const s=go(i);t[r]=()=>s}}},ri=(e,t)=>{const n=go(t);e.slots.default=()=>n},ii=(e,t,n)=>{for(const o in t)(n||o!=="_")&&(e[o]=t[o])},Ys=(e,t,n)=>{const o=e.slots=Zr();if(e.vnode.shapeFlag&32){const r=t._;r?(ii(o,t,n),n&&fr(o,"_",r,!0)):oi(t,o)}else t&&ri(e,t)},Js=(e,t,n)=>{const{vnode:o,slots:r}=e;let i=!0,s=G;if(o.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:ii(r,t,n):(i=!t.$stable,oi(t,r)),s=t}else t&&(ri(e,t),s={default:1});if(i)for(const l in r)!ni(l)&&s[l]==null&&delete r[l]},_e=dl;function Xs(e){return Zs(e)}function Zs(e,t){const n=mn();n.__VUE__=!0;const{insert:o,remove:r,patchProp:i,createElement:s,createText:l,createComment:a,setText:u,setElementText:f,parentNode:p,nextSibling:x,setScopeId:_=Re,insertStaticContent:z}=e,E=(c,d,h,v=null,m=null,g=null,C=void 0,w=null,y=!!d.dynamicChildren)=>{if(c===d)return;c&&!at(c,d)&&(v=Gt(c),Ie(c,m,g,!0),c=null),d.patchFlag===-2&&(y=!1,d.dynamicChildren=null);const{type:b,ref:A,shapeFlag:k}=d;switch(b){case _n:P(c,d,h,v);break;case ge:F(c,d,h,v);break;case Pn:c==null&&N(d,h,v,C);break;case me:M(c,d,h,v,m,g,C,w,y);break;default:k&1?B(c,d,h,v,m,g,C,w,y):k&6?J(c,d,h,v,m,g,C,w,y):(k&64||k&128)&&b.process(c,d,h,v,m,g,C,w,y,Ct)}A!=null&&m&&Kn(A,c&&c.ref,g,d||c,!d)},P=(c,d,h,v)=>{if(c==null)o(d.el=l(d.children),h,v);else{const m=d.el=c.el;d.children!==c.children&&u(m,d.children)}},F=(c,d,h,v)=>{c==null?o(d.el=a(d.children||""),h,v):d.el=c.el},N=(c,d,h,v)=>{[c.el,c.anchor]=z(c.children,d,h,v,c.el,c.anchor)},H=({el:c,anchor:d},h,v)=>{let m;for(;c&&c!==d;)m=x(c),o(c,h,v),c=m;o(d,h,v)},S=({el:c,anchor:d})=>{let h;for(;c&&c!==d;)h=x(c),r(c),c=h;r(d)},B=(c,d,h,v,m,g,C,w,y)=>{d.type==="svg"?C="svg":d.type==="math"&&(C="mathml"),c==null?ne(d,h,v,m,g,C,w,y):L(c,d,m,g,C,w,y)},ne=(c,d,h,v,m,g,C,w)=>{let y,b;const{props:A,shapeFlag:k,transition:T,dirs:I}=c;if(y=c.el=s(c.type,g,A&&A.is,A),k&8?f(y,c.children):k&16&&ve(c.children,y,null,v,m,Fn(c,g),C,w),I&&ot(c,null,v,"created"),ue(y,c,c.scopeId,C,v),A){for(const W in A)W!=="value"&&!Ot(W)&&i(y,W,null,A[W],g,v);"value"in A&&i(y,"value",null,A.value,g),(b=A.onVnodeBeforeMount)&&De(b,v,c)}I&&ot(c,null,v,"beforeMount");const R=Qs(m,T);R&&T.beforeEnter(y),o(y,d,h),((b=A&&A.onVnodeMounted)||R||I)&&_e(()=>{b&&De(b,v,c),R&&T.enter(y),I&&ot(c,null,v,"mounted")},m)},ue=(c,d,h,v,m)=>{if(h&&_(c,h),v)for(let g=0;g<v.length;g++)_(c,v[g]);if(m){let g=m.subTree;if(d===g||fi(g.type)&&(g.ssContent===d||g.ssFallback===d)){const C=m.vnode;ue(c,C,C.scopeId,C.slotScopeIds,m.parent)}}},ve=(c,d,h,v,m,g,C,w,y=0)=>{for(let b=y;b<c.length;b++){const A=c[b]=w?Ge(c[b]):Pe(c[b]);E(null,A,d,h,v,m,g,C,w)}},L=(c,d,h,v,m,g,C)=>{const w=d.el=c.el;let{patchFlag:y,dynamicChildren:b,dirs:A}=d;y|=c.patchFlag&16;const k=c.props||G,T=d.props||G;let I;if(h&&rt(h,!1),(I=T.onVnodeBeforeUpdate)&&De(I,h,d,c),A&&ot(d,c,h,"beforeUpdate"),h&&rt(h,!0),(k.innerHTML&&T.innerHTML==null||k.textContent&&T.textContent==null)&&f(w,""),b?U(c.dynamicChildren,b,w,h,v,Fn(d,m),g):C||K(c,d,w,null,h,v,Fn(d,m),g,!1),y>0){if(y&16)X(w,k,T,h,m);else if(y&2&&k.class!==T.class&&i(w,"class",null,T.class,m),y&4&&i(w,"style",k.style,T.style,m),y&8){const R=d.dynamicProps;for(let W=0;W<R.length;W++){const V=R[W],xe=k[V],ae=T[V];(ae!==xe||V==="value")&&i(w,V,xe,ae,m,h)}}y&1&&c.children!==d.children&&f(w,d.children)}else!C&&b==null&&X(w,k,T,h,m);((I=T.onVnodeUpdated)||A)&&_e(()=>{I&&De(I,h,d,c),A&&ot(d,c,h,"updated")},v)},U=(c,d,h,v,m,g,C)=>{for(let w=0;w<d.length;w++){const y=c[w],b=d[w],A=y.el&&(y.type===me||!at(y,b)||y.shapeFlag&70)?p(y.el):h;E(y,b,A,null,v,m,g,C,!0)}},X=(c,d,h,v,m)=>{if(d!==h){if(d!==G)for(const g in d)!Ot(g)&&!(g in h)&&i(c,g,d[g],null,m,v);for(const g in h){if(Ot(g))continue;const C=h[g],w=d[g];C!==w&&g!=="value"&&i(c,g,w,C,m,v)}"value"in h&&i(c,"value",d.value,h.value,m)}},M=(c,d,h,v,m,g,C,w,y)=>{const b=d.el=c?c.el:l(""),A=d.anchor=c?c.anchor:l("");let{patchFlag:k,dynamicChildren:T,slotScopeIds:I}=d;I&&(w=w?w.concat(I):I),c==null?(o(b,h,v),o(A,h,v),ve(d.children||[],h,A,m,g,C,w,y)):k>0&&k&64&&T&&c.dynamicChildren?(U(c.dynamicChildren,T,h,m,g,C,w),(d.key!=null||m&&d===m.subTree)&&si(c,d,!0)):K(c,d,h,A,m,g,C,w,y)},J=(c,d,h,v,m,g,C,w,y)=>{d.slotScopeIds=w,c==null?d.shapeFlag&512?m.ctx.activate(d,h,v,C,y):le(d,h,v,m,g,C,y):et(c,d,y)},le=(c,d,h,v,m,g,C)=>{const w=c.component=bl(c,v,m);if(xn(c)&&(w.ctx.renderer=Ct),yl(w,!1,C),w.asyncDep){if(m&&m.registerDep(w,oe,C),!c.el){const y=w.subTree=re(ge);F(null,y,d,h)}}else oe(w,c,d,h,m,g,C)},et=(c,d,h)=>{const v=d.component=c.component;if(al(c,d,h))if(v.asyncDep&&!v.asyncResolved){Z(v,d,h);return}else v.next=d,v.update();else d.el=c.el,v.vnode=d},oe=(c,d,h,v,m,g,C)=>{const w=()=>{if(c.isMounted){let{next:k,bu:T,u:I,parent:R,vnode:W}=c;{const ye=li(c);if(ye){k&&(k.el=W.el,Z(c,k,C)),ye.asyncDep.then(()=>{c.isUnmounted||w()});return}}let V=k,xe;rt(c,!1),k?(k.el=W.el,Z(c,k,C)):k=W,T&&Sn(T),(xe=k.props&&k.props.onVnodeBeforeUpdate)&&De(xe,R,k,W),rt(c,!0);const ae=Ln(c),Ee=c.subTree;c.subTree=ae,E(Ee,ae,p(Ee.el),Gt(Ee),c,m,g),k.el=ae.el,V===null&&cl(c,ae.el),I&&_e(I,m),(xe=k.props&&k.props.onVnodeUpdated)&&_e(()=>De(xe,R,k,W),m)}else{let k;const{el:T,props:I}=d,{bm:R,m:W,parent:V,root:xe,type:ae}=c,Ee=yt(d);if(rt(c,!1),R&&Sn(R),!Ee&&(k=I&&I.onVnodeBeforeMount)&&De(k,V,d),rt(c,!0),T&&Co){const ye=()=>{c.subTree=Ln(c),Co(T,c.subTree,c,m,null)};Ee&&ae.__asyncHydrate?ae.__asyncHydrate(T,c,ye):ye()}else{xe.ce&&xe.ce._injectChildStyle(ae);const ye=c.subTree=Ln(c);E(null,ye,h,v,c,m,g),d.el=ye.el}if(W&&_e(W,m),!Ee&&(k=I&&I.onVnodeMounted)){const ye=d;_e(()=>De(k,V,ye),m)}(d.shapeFlag&256||V&&yt(V.vnode)&&V.vnode.shapeFlag&256)&&c.a&&_e(c.a,m),c.isMounted=!0,d=h=v=null}};c.scope.on();const y=c.effect=new mr(w);c.scope.off();const b=c.update=y.run.bind(y),A=c.job=y.runIfDirty.bind(y);A.i=c,A.id=c.uid,y.scheduler=()=>po(A),rt(c,!0),b()},Z=(c,d,h)=>{d.component=c;const v=c.vnode.props;c.vnode=d,c.next=null,Ws(c,d.props,v,h),Js(c,d.children,h),Ze(),Ao(c),Qe()},K=(c,d,h,v,m,g,C,w,y=!1)=>{const b=c&&c.children,A=c?c.shapeFlag:0,k=d.children,{patchFlag:T,shapeFlag:I}=d;if(T>0){if(T&128){qt(b,k,h,v,m,g,C,w,y);return}else if(T&256){tt(b,k,h,v,m,g,C,w,y);return}}I&8?(A&16&&_t(b,m,g),k!==b&&f(h,k)):A&16?I&16?qt(b,k,h,v,m,g,C,w,y):_t(b,m,g,!0):(A&8&&f(h,""),I&16&&ve(k,h,v,m,g,C,w,y))},tt=(c,d,h,v,m,g,C,w,y)=>{c=c||gt,d=d||gt;const b=c.length,A=d.length,k=Math.min(b,A);let T;for(T=0;T<k;T++){const I=d[T]=y?Ge(d[T]):Pe(d[T]);E(c[T],I,h,null,m,g,C,w,y)}b>A?_t(c,m,g,!0,!1,k):ve(d,h,v,m,g,C,w,y,k)},qt=(c,d,h,v,m,g,C,w,y)=>{let b=0;const A=d.length;let k=c.length-1,T=A-1;for(;b<=k&&b<=T;){const I=c[b],R=d[b]=y?Ge(d[b]):Pe(d[b]);if(at(I,R))E(I,R,h,null,m,g,C,w,y);else break;b++}for(;b<=k&&b<=T;){const I=c[k],R=d[T]=y?Ge(d[T]):Pe(d[T]);if(at(I,R))E(I,R,h,null,m,g,C,w,y);else break;k--,T--}if(b>k){if(b<=T){const I=T+1,R=I<A?d[I].el:v;for(;b<=T;)E(null,d[b]=y?Ge(d[b]):Pe(d[b]),h,R,m,g,C,w,y),b++}}else if(b>T)for(;b<=k;)Ie(c[b],m,g,!0),b++;else{const I=b,R=b,W=new Map;for(b=R;b<=T;b++){const we=d[b]=y?Ge(d[b]):Pe(d[b]);we.key!=null&&W.set(we.key,b)}let V,xe=0;const ae=T-R+1;let Ee=!1,ye=0;const kt=new Array(ae);for(b=0;b<ae;b++)kt[b]=0;for(b=I;b<=k;b++){const we=c[b];if(xe>=ae){Ie(we,m,g,!0);continue}let Fe;if(we.key!=null)Fe=W.get(we.key);else for(V=R;V<=T;V++)if(kt[V-R]===0&&at(we,d[V])){Fe=V;break}Fe===void 0?Ie(we,m,g,!0):(kt[Fe-R]=b+1,Fe>=ye?ye=Fe:Ee=!0,E(we,d[Fe],h,null,m,g,C,w,y),xe++)}const ko=Ee?el(kt):gt;for(V=ko.length-1,b=ae-1;b>=0;b--){const we=R+b,Fe=d[we],Mo=we+1<A?d[we+1].el:v;kt[b]===0?E(null,Fe,h,Mo,m,g,C,w,y):Ee&&(V<0||b!==ko[V]?nt(Fe,h,Mo,2):V--)}}},nt=(c,d,h,v,m=null)=>{const{el:g,type:C,transition:w,children:y,shapeFlag:b}=c;if(b&6){nt(c.component.subTree,d,h,v);return}if(b&128){c.suspense.move(d,h,v);return}if(b&64){C.move(c,d,h,Ct);return}if(C===me){o(g,d,h);for(let k=0;k<y.length;k++)nt(y[k],d,h,v);o(c.anchor,d,h);return}if(C===Pn){H(c,d,h);return}if(v!==2&&b&1&&w)if(v===0)w.beforeEnter(g),o(g,d,h),_e(()=>w.enter(g),m);else{const{leave:k,delayLeave:T,afterLeave:I}=w,R=()=>o(g,d,h),W=()=>{k(g,()=>{R(),I&&I()})};T?T(g,R,W):W()}else o(g,d,h)},Ie=(c,d,h,v=!1,m=!1)=>{const{type:g,props:C,ref:w,children:y,dynamicChildren:b,shapeFlag:A,patchFlag:k,dirs:T,cacheIndex:I}=c;if(k===-2&&(m=!1),w!=null&&Kn(w,null,h,c,!0),I!=null&&(d.renderCache[I]=void 0),A&256){d.ctx.deactivate(c);return}const R=A&1&&T,W=!yt(c);let V;if(W&&(V=C&&C.onVnodeBeforeUnmount)&&De(V,d,c),A&6)yi(c.component,h,v);else{if(A&128){c.suspense.unmount(h,v);return}R&&ot(c,null,d,"beforeUnmount"),A&64?c.type.remove(c,d,h,Ct,v):b&&!b.hasOnce&&(g!==me||k>0&&k&64)?_t(b,d,h,!1,!0):(g===me&&k&384||!m&&A&16)&&_t(y,d,h),v&&yo(c)}(W&&(V=C&&C.onVnodeUnmounted)||R)&&_e(()=>{V&&De(V,d,c),R&&ot(c,null,d,"unmounted")},h)},yo=c=>{const{type:d,el:h,anchor:v,transition:m}=c;if(d===me){xi(h,v);return}if(d===Pn){S(c);return}const g=()=>{r(h),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(c.shapeFlag&1&&m&&!m.persisted){const{leave:C,delayLeave:w}=m,y=()=>C(h,g);w?w(c.el,g,y):y()}else g()},xi=(c,d)=>{let h;for(;c!==d;)h=x(c),r(c),c=h;r(d)},yi=(c,d,h)=>{const{bum:v,scope:m,job:g,subTree:C,um:w,m:y,a:b}=c;Ro(y),Ro(b),v&&Sn(v),m.stop(),g&&(g.flags|=8,Ie(C,c,d,h)),w&&_e(w,d),_e(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},_t=(c,d,h,v=!1,m=!1,g=0)=>{for(let C=g;C<c.length;C++)Ie(c[C],d,h,v,m)},Gt=c=>{if(c.shapeFlag&6)return Gt(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const d=x(c.anchor||c.el),h=d&&d[vs];return h?x(h):d};let kn=!1;const wo=(c,d,h)=>{c==null?d._vnode&&Ie(d._vnode,null,null,!0):E(d._vnode||null,c,d,null,null,null,h),d._vnode=c,kn||(kn=!0,Ao(),Fr(),kn=!1)},Ct={p:E,um:Ie,m:nt,r:yo,mt:le,mc:ve,pc:K,pbc:U,n:Gt,o:e};let _o,Co;return{render:wo,hydrate:_o,createApp:Vs(wo,_o)}}function Fn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function rt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Qs(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function si(e,t,n=!1){const o=e.children,r=t.children;if(O(o)&&O(r))for(let i=0;i<o.length;i++){const s=o[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=Ge(r[i]),l.el=s.el),!n&&l.patchFlag!==-2&&si(s,l)),l.type===_n&&(l.el=s.el)}}function el(e){const t=e.slice(),n=[0];let o,r,i,s,l;const a=e.length;for(o=0;o<a;o++){const u=e[o];if(u!==0){if(r=n[n.length-1],e[r]<u){t[o]=r,n.push(o);continue}for(i=0,s=n.length-1;i<s;)l=i+s>>1,e[n[l]]<u?i=l+1:s=l;u<e[n[i]]&&(i>0&&(t[o]=n[i-1]),n[i]=o)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}function li(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:li(t)}function Ro(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const tl=Symbol.for("v-scx"),nl=()=>en(tl);function Dn(e,t,n){return ai(e,t,n)}function ai(e,t,n=G){const{immediate:o,deep:r,flush:i,once:s}=n,l=ee({},n),a=t&&o||!t&&i!=="post";let u;if(Vt){if(i==="sync"){const _=nl();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!a){const _=()=>{};return _.stop=Re,_.resume=Re,_.pause=Re,_}}const f=ie;l.call=(_,z,E)=>ze(_,f,z,E);let p=!1;i==="post"?l.scheduler=_=>{_e(_,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,z)=>{z?_():po(_)}),l.augmentJob=_=>{t&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const x=us(e,t,l);return Vt&&(u?u.push(x):a&&x()),x}function ol(e,t,n){const o=this.proxy,r=Q(e)?e.includes(".")?ci(o,e):()=>o[e]:e.bind(o,o);let i;D(t)?i=t:(i=t.handler,n=t);const s=Wt(this),l=ai(r,i.bind(o),n);return s(),l}function ci(e,t){const n=t.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}const rl=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Te(t)}Modifiers`]||e[`${ut(t)}Modifiers`];function il(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||G;let r=n;const i=t.startsWith("update:"),s=i&&rl(o,t.slice(7));s&&(s.trim&&(r=n.map(f=>Q(f)?f.trim():f)),s.number&&(r=n.map(Si)));let l,a=o[l=Mn(t)]||o[l=Mn(Te(t))];!a&&i&&(a=o[l=Mn(ut(t))]),a&&ze(a,e,6,r);const u=o[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,ze(u,e,6,r)}}function di(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(r!==void 0)return r;const i=e.emits;let s={},l=!1;if(!D(e)){const a=u=>{const f=di(u,t,!0);f&&(l=!0,ee(s,f))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!l?(Y(e)&&o.set(e,null),null):(O(i)?i.forEach(a=>s[a]=null):ee(s,i),Y(e)&&o.set(e,s),s)}function wn(e,t){return!e||!fn(t)?!1:(t=t.slice(2).replace(/Once$/,""),j(e,t[0].toLowerCase()+t.slice(1))||j(e,ut(t))||j(e,t))}function Ln(e){const{type:t,vnode:n,proxy:o,withProxy:r,propsOptions:[i],slots:s,attrs:l,emit:a,render:u,renderCache:f,props:p,data:x,setupState:_,ctx:z,inheritAttrs:E}=e,P=an(e);let F,N;try{if(n.shapeFlag&4){const S=r||o,B=S;F=Pe(u.call(B,S,f,p,_,x,z)),N=l}else{const S=t;F=Pe(S.length>1?S(p,{attrs:l,slots:s,emit:a}):S(p,null)),N=t.props?l:sl(l)}}catch(S){Dt.length=0,bn(S,e,1),F=re(ge)}let H=F;if(N&&E!==!1){const S=Object.keys(N),{shapeFlag:B}=H;S.length&&B&7&&(i&&S.some(eo)&&(N=ll(N,i)),H=Xe(H,N,!1,!0))}return n.dirs&&(H=Xe(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&Nt(H,n.transition),F=H,an(P),F}const sl=e=>{let t;for(const n in e)(n==="class"||n==="style"||fn(n))&&((t||(t={}))[n]=e[n]);return t},ll=(e,t)=>{const n={};for(const o in e)(!eo(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function al(e,t,n){const{props:o,children:r,component:i}=e,{props:s,children:l,patchFlag:a}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return o?$o(o,s,u):!!s;if(a&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const x=f[p];if(s[x]!==o[x]&&!wn(u,x))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:o===s?!1:o?s?$o(o,s,u):!0:!!s;return!1}function $o(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const i=o[r];if(t[i]!==e[i]&&!wn(n,i))return!0}return!1}function cl({vnode:e,parent:t},n){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=n,t=t.parent;else break}}const fi=e=>e.__isSuspense;function dl(e,t){t&&t.pendingBranch?O(e)?t.effects.push(...e):t.effects.push(e):gs(e)}const me=Symbol.for("v-fgt"),_n=Symbol.for("v-txt"),ge=Symbol.for("v-cmt"),Pn=Symbol.for("v-stc"),Dt=[];let ke=null;function be(e=!1){Dt.push(ke=e?null:[])}function fl(){Dt.pop(),ke=Dt[Dt.length-1]||null}let Ht=1;function No(e){Ht+=e,e<0&&ke&&(ke.hasOnce=!0)}function ui(e){return e.dynamicChildren=Ht>0?ke||gt:null,fl(),Ht>0&&ke&&ke.push(e),e}function He(e,t,n,o,r,i){return ui(te(e,t,n,o,r,i,!0))}function Bt(e,t,n,o,r){return ui(re(e,t,n,o,r,!0))}function jt(e){return e?e.__v_isVNode===!0:!1}function at(e,t){return e.type===t.type&&e.key===t.key}const pi=({key:e})=>e??null,tn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Q(e)||se(e)||D(e)?{i:fe,r:e,k:t,f:!!n}:e:null);function te(e,t=null,n=null,o=0,r=null,i=e===me?0:1,s=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&pi(t),ref:t&&tn(t),scopeId:Lr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:fe};return l?(vo(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=Q(n)?8:16),Ht>0&&!s&&ke&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&ke.push(a),a}const re=ul;function ul(e,t=null,n=null,o=0,r=null,i=!1){if((!e||e===Fs)&&(e=ge),jt(e)){const l=Xe(e,t,!0);return n&&vo(l,n),Ht>0&&!i&&ke&&(l.shapeFlag&6?ke[ke.indexOf(e)]=l:ke.push(l)),l.patchFlag=-2,l}if(Ml(e)&&(e=e.__vccOpts),t){t=pl(t);let{class:l,style:a}=t;l&&!Q(l)&&(t.class=oo(l)),Y(a)&&(fo(a)&&!O(a)&&(a=ee({},a)),t.style=gn(a))}const s=Q(e)?1:fi(e)?128:Pr(e)?64:Y(e)?4:D(e)?2:0;return te(e,t,n,o,r,s,i,!0)}function pl(e){return e?fo(e)||Qr(e)?ee({},e):e:null}function Xe(e,t,n=!1,o=!1){const{props:r,ref:i,patchFlag:s,children:l,transition:a}=e,u=t?ml(r||{},t):r,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&pi(u),ref:t&&t.ref?n&&i?O(i)?i.concat(tn(t)):[i,tn(t)]:tn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==me?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xe(e.ssContent),ssFallback:e.ssFallback&&Xe(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&o&&Nt(f,a.clone(f)),f}function hl(e=" ",t=0){return re(_n,null,e,t)}function St(e="",t=!1){return t?(be(),Bt(ge,null,e)):re(ge,null,e)}function Pe(e){return e==null||typeof e=="boolean"?re(ge):O(e)?re(me,null,e.slice()):jt(e)?Ge(e):re(_n,null,String(e))}function Ge(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xe(e)}function vo(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(O(t))n=16;else if(typeof t=="object")if(o&65){const r=t.default;r&&(r._c&&(r._d=!1),vo(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!Qr(t)?t._ctx=fe:r===3&&fe&&(fe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else D(t)?(t={default:t,_ctx:fe},n=32):(t=String(t),o&64?(n=16,t=[hl(t)]):n=8);e.children=t,e.shapeFlag|=n}function ml(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const r in o)if(r==="class")t.class!==o.class&&(t.class=oo([t.class,o.class]));else if(r==="style")t.style=gn([t.style,o.style]);else if(fn(r)){const i=t[r],s=o[r];s&&i!==s&&!(O(i)&&i.includes(s))&&(t[r]=i?[].concat(i,s):s)}else r!==""&&(t[r]=o[r])}return t}function De(e,t,n,o=null){ze(e,t,7,[n,o])}const gl=Jr();let vl=0;function bl(e,t,n){const o=e.type,r=(t?t.appContext:e.appContext)||gl,i={uid:vl++,vnode:e,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Di(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ti(o,r),emitsOptions:di(o,r),emit:null,emitted:null,propsDefaults:G,inheritAttrs:o.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=il.bind(null,i),e.ce&&e.ce(i),i}let ie=null;const xl=()=>ie||fe;let dn,Jn;{const e=mn(),t=(n,o)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(o),i=>{r.length>1?r.forEach(s=>s(i)):r[0](i)}};dn=t("__VUE_INSTANCE_SETTERS__",n=>ie=n),Jn=t("__VUE_SSR_SETTERS__",n=>Vt=n)}const Wt=e=>{const t=ie;return dn(e),e.scope.on(),()=>{e.scope.off(),dn(t)}},Ho=()=>{ie&&ie.scope.off(),dn(null)};function hi(e){return e.vnode.shapeFlag&4}let Vt=!1;function yl(e,t=!1,n=!1){t&&Jn(t);const{props:o,children:r}=e.vnode,i=hi(e);Ks(e,o,i,t),Ys(e,r,n);const s=i?wl(e,t):void 0;return t&&Jn(!1),s}function wl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ps);const{setup:o}=n;if(o){Ze();const r=e.setupContext=o.length>1?Cl(e):null,i=Wt(e),s=Kt(o,e,0,[e.props,r]),l=ar(s);if(Qe(),i(),(l||e.sp)&&!yt(e)&&jr(e),l){if(s.then(Ho,Ho),t)return s.then(a=>{Bo(e,a,t)}).catch(a=>{bn(a,e,0)});e.asyncDep=s}else Bo(e,s,t)}else mi(e,t)}function Bo(e,t,n){D(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Y(t)&&(e.setupState=Or(t)),mi(e,n)}let jo;function mi(e,t,n){const o=e.type;if(!e.render){if(!t&&jo&&!o.render){const r=o.template||mo(e).template;if(r){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:l,compilerOptions:a}=o,u=ee(ee({isCustomElement:i,delimiters:l},s),a);o.render=jo(r,u)}}e.render=o.render||Re}{const r=Wt(e);Ze();try{Rs(e)}finally{Qe(),r()}}}const _l={get(e,t){return ce(e,"get",""),e[t]}};function Cl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,_l),slots:e.slots,emit:e.emit,expose:t}}function bo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Or(ns(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ft)return Ft[n](e)},has(t,n){return n in t||n in Ft}})):e.proxy}function kl(e,t=!0){return D(e)?e.displayName||e.name:e.name||t&&e.__name}function Ml(e){return D(e)&&"__vccOpts"in e}const Ae=(e,t)=>ds(e,t,Vt);function nn(e,t,n){const o=arguments.length;return o===2?Y(t)&&!O(t)?jt(t)?re(e,null,[t]):re(e,t):re(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&jt(n)&&(n=[n]),re(e,t,n))}const Sl="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xn;const Vo=typeof window<"u"&&window.trustedTypes;if(Vo)try{Xn=Vo.createPolicy("vue",{createHTML:e=>e})}catch{}const gi=Xn?e=>Xn.createHTML(e):e=>e,Tl="http://www.w3.org/2000/svg",El="http://www.w3.org/1998/Math/MathML",Ne=typeof document<"u"?document:null,Uo=Ne&&Ne.createElement("template"),Al={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const r=t==="svg"?Ne.createElementNS(Tl,e):t==="mathml"?Ne.createElementNS(El,e):n?Ne.createElement(e,{is:n}):Ne.createElement(e);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>Ne.createTextNode(e),createComment:e=>Ne.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ne.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,r,i){const s=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Uo.innerHTML=gi(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const l=Uo.content;if(o==="svg"||o==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ue="transition",Tt="animation",Ut=Symbol("_vtc"),vi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ol=ee({},Rr,vi),zl=e=>(e.displayName="Transition",e.props=Ol,e),Ko=zl((e,{slots:t})=>nn(ys,Il(e),t)),it=(e,t=[])=>{O(e)?e.forEach(n=>n(...t)):e&&e(...t)},Wo=e=>e?O(e)?e.some(t=>t.length>1):e.length>1:!1;function Il(e){const t={};for(const M in e)M in vi||(t[M]=e[M]);if(e.css===!1)return t;const{name:n="v",type:o,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:u=s,appearToClass:f=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:x=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=e,z=Fl(r),E=z&&z[0],P=z&&z[1],{onBeforeEnter:F,onEnter:N,onEnterCancelled:H,onLeave:S,onLeaveCancelled:B,onBeforeAppear:ne=F,onAppear:ue=N,onAppearCancelled:ve=H}=t,L=(M,J,le)=>{st(M,J?f:l),st(M,J?u:s),le&&le()},U=(M,J)=>{M._isLeaving=!1,st(M,p),st(M,_),st(M,x),J&&J()},X=M=>(J,le)=>{const et=M?ue:N,oe=()=>L(J,M,le);it(et,[J,oe]),qo(()=>{st(J,M?a:i),Ke(J,M?f:l),Wo(et)||Go(J,o,E,oe)})};return ee(t,{onBeforeEnter(M){it(F,[M]),Ke(M,i),Ke(M,s)},onBeforeAppear(M){it(ne,[M]),Ke(M,a),Ke(M,u)},onEnter:X(!1),onAppear:X(!0),onLeave(M,J){M._isLeaving=!0;const le=()=>U(M,J);Ke(M,p),Ke(M,x),Pl(),qo(()=>{M._isLeaving&&(st(M,p),Ke(M,_),Wo(S)||Go(M,o,P,le))}),it(S,[M,le])},onEnterCancelled(M){L(M,!1),it(H,[M])},onAppearCancelled(M){L(M,!0),it(ve,[M])},onLeaveCancelled(M){U(M),it(B,[M])}})}function Fl(e){if(e==null)return null;if(Y(e))return[Rn(e.enter),Rn(e.leave)];{const t=Rn(e);return[t,t]}}function Rn(e){return Ti(e)}function Ke(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Ut]||(e[Ut]=new Set)).add(t)}function st(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const n=e[Ut];n&&(n.delete(t),n.size||(e[Ut]=void 0))}function qo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Dl=0;function Go(e,t,n,o){const r=e._endId=++Dl,i=()=>{r===e._endId&&o()};if(n!=null)return setTimeout(i,n);const{type:s,timeout:l,propCount:a}=Ll(e,t);if(!s)return o();const u=s+"end";let f=0;const p=()=>{e.removeEventListener(u,x),i()},x=_=>{_.target===e&&++f>=a&&p()};setTimeout(()=>{f<a&&p()},l+1),e.addEventListener(u,x)}function Ll(e,t){const n=window.getComputedStyle(e),o=z=>(n[z]||"").split(", "),r=o(`${Ue}Delay`),i=o(`${Ue}Duration`),s=Yo(r,i),l=o(`${Tt}Delay`),a=o(`${Tt}Duration`),u=Yo(l,a);let f=null,p=0,x=0;t===Ue?s>0&&(f=Ue,p=s,x=i.length):t===Tt?u>0&&(f=Tt,p=u,x=a.length):(p=Math.max(s,u),f=p>0?s>u?Ue:Tt:null,x=f?f===Ue?i.length:a.length:0);const _=f===Ue&&/\b(transform|all)(,|$)/.test(o(`${Ue}Property`).toString());return{type:f,timeout:p,propCount:x,hasTransform:_}}function Yo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>Jo(n)+Jo(e[o])))}function Jo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Pl(){return document.body.offsetHeight}function Rl(e,t,n){const o=e[Ut];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Xo=Symbol("_vod"),$l=Symbol("_vsh"),Nl=Symbol(""),Hl=/(^|;)\s*display\s*:/;function Bl(e,t,n){const o=e.style,r=Q(n);let i=!1;if(n&&!r){if(t)if(Q(t))for(const s of t.split(";")){const l=s.slice(0,s.indexOf(":")).trim();n[l]==null&&on(o,l,"")}else for(const s in t)n[s]==null&&on(o,s,"");for(const s in n)s==="display"&&(i=!0),on(o,s,n[s])}else if(r){if(t!==n){const s=o[Nl];s&&(n+=";"+s),o.cssText=n,i=Hl.test(n)}}else t&&e.removeAttribute("style");Xo in e&&(e[Xo]=i?o.display:"",e[$l]&&(o.display="none"))}const Zo=/\s*!important$/;function on(e,t,n){if(O(n))n.forEach(o=>on(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=jl(e,t);Zo.test(n)?e.setProperty(ut(o),n.replace(Zo,""),"important"):e[o]=n}}const Qo=["Webkit","Moz","ms"],$n={};function jl(e,t){const n=$n[t];if(n)return n;let o=Te(t);if(o!=="filter"&&o in e)return $n[t]=o;o=hn(o);for(let r=0;r<Qo.length;r++){const i=Qo[r]+o;if(i in e)return $n[t]=i}return t}const er="http://www.w3.org/1999/xlink";function tr(e,t,n,o,r,i=Fi(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(er,t.slice(6,t.length)):e.setAttributeNS(er,t,n):n==null||i&&!ur(n)?e.removeAttribute(t):e.setAttribute(t,i?"":je(n)?String(n):n)}function nr(e,t,n,o,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?gi(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ur(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(r||t)}function Vl(e,t,n,o){e.addEventListener(t,n,o)}function Ul(e,t,n,o){e.removeEventListener(t,n,o)}const or=Symbol("_vei");function Kl(e,t,n,o,r=null){const i=e[or]||(e[or]={}),s=i[t];if(o&&s)s.value=o;else{const[l,a]=Wl(t);if(o){const u=i[t]=Yl(o,r);Vl(e,l,u,a)}else s&&(Ul(e,l,s,a),i[t]=void 0)}}const rr=/(?:Once|Passive|Capture)$/;function Wl(e){let t;if(rr.test(e)){t={};let o;for(;o=e.match(rr);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ut(e.slice(2)),t]}let Nn=0;const ql=Promise.resolve(),Gl=()=>Nn||(ql.then(()=>Nn=0),Nn=Date.now());function Yl(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;ze(Jl(o,n.value),t,5,[o])};return n.value=e,n.attached=Gl(),n}function Jl(e,t){if(O(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>r=>!r._stopped&&o&&o(r))}else return t}const ir=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Xl=(e,t,n,o,r,i)=>{const s=r==="svg";t==="class"?Rl(e,o,s):t==="style"?Bl(e,n,o):fn(t)?eo(t)||Kl(e,t,n,o,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Zl(e,t,o,s))?(nr(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&tr(e,t,o,s,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Q(o))?nr(e,Te(t),o,i,t):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),tr(e,t,o,s))};function Zl(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&ir(t)&&D(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ir(t)&&Q(n)?!1:t in e}const Ql=ee({patchProp:Xl},Al);let sr;function ea(){return sr||(sr=Xs(Ql))}const ta=(...e)=>{const t=ea().createApp(...e),{mount:n}=t;return t.mount=o=>{const r=oa(o);if(!r)return;const i=t._component;!D(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const s=n(r,!1,na(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};function na(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function oa(e){return Q(e)?document.querySelector(e):e}const Cn=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},ra={class:"card-content"},ia={class:"title"},sa={class:"icon"},la={class:"foot"},aa={class:"push"},ca={__name:"Card",props:{title:String,background_color:String,scr:String,url:String,html:String,index:Number,author:String,icon:String,date:String},emits:["display-html"],setup(e,{emit:t}){const n=e,o=t;function r(){o("display-html",{html:n.html,url:n.url})}var i="background-color: "+n.background_color;return(s,l)=>{const a=Is("v-icon");return be(),He("div",{class:"card",style:gn(uo(i)),onClick:r},[te("div",ra,[te("div",ia,Et(e.index)+" "+Et(e.title),1),te("div",sa,[re(a,{name:e.icon,scale:"4"},null,8,["name"])])]),te("div",la,[te("div",null,Et(e.date),1),te("div",aa,Et(e.author),1)])],4)}}},da=Cn(ca,[["__scopeId","data-v-7f4f7a4d"]]),fa={class:"card-container"},ua={__name:"CardGroup",setup(e){return(t,n)=>(be(),He("div",fa,[qr(t.$slots,"default",{},void 0)]))}},pa=Cn(ua,[["__scopeId","data-v-9af64a47"]]),ha={class:"article"},ma=["innerHTML"],ga={__name:"Article",props:{html:String},setup(e){return(t,n)=>(be(),He("div",ha,[qr(t.$slots,"default",{},void 0),te("div",{innerHTML:e.html},null,8,ma)]))}},va=Cn(ga,[["__scopeId","data-v-51c8d245"]]),ba=`<!doctype html>\r
<html>\r
<head>\r
<meta charset='UTF-8'><meta name='viewport' content='width=device-width initial-scale=1'>\r
<title></title></head>\r
<body><p>&nbsp;</p>\r
<h1>这里是沙乡之外，无边无际的荒野……</h1>\r
<p>回家吧。</p>\r
</body>\r
</html>`,xa=`<!doctype html>
<html>
<head>
<meta charset='UTF-8'><meta name='viewport' content='width=device-width initial-scale=1'>

<style type='text/css'>html {overflow-x: initial !important;}:root { --bg-color: #ffffff; --text-color: #333333; --select-text-bg-color: #B5D6FC; --select-text-font-color: auto; --monospace: "Lucida Console",Consolas,"Courier",monospace; --title-bar-height: 20px; }
.mac-os-11 { --title-bar-height: 28px; }
html { font-size: 14px; background-color: var(--bg-color); color: var(--text-color); font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
h1, h2, h3, h4, h5 { white-space: pre-wrap; }
body { margin: 0px; padding: 0px; height: auto; inset: 0px; font-size: 1rem; line-height: 1.42857; overflow-x: hidden; background: inherit; }
iframe { margin: auto; }
a.url { word-break: break-all; }
a:active, a:hover { outline: 0px; }
.in-text-selection, ::selection { text-shadow: none; background: var(--select-text-bg-color); color: var(--select-text-font-color); }
#write { margin: 0px auto; height: auto; width: inherit; word-break: normal; overflow-wrap: break-word; position: relative; white-space: normal; overflow-x: visible; padding-top: 36px; }
#write.first-line-indent p { text-indent: 2em; }
#write.first-line-indent li p, #write.first-line-indent p * { text-indent: 0px; }
#write.first-line-indent li { margin-left: 2em; }
.for-image #write { padding-left: 8px; padding-right: 8px; }
body.typora-export { padding-left: 30px; padding-right: 30px; }
.typora-export .footnote-line, .typora-export li, .typora-export p { white-space: pre-wrap; }
.typora-export .task-list-item input { pointer-events: none; }
@media screen and (max-width: 500px) {
  body.typora-export { padding-left: 0px; padding-right: 0px; }
  #write { padding-left: 20px; padding-right: 20px; }
}
#write li > figure:last-child { margin-bottom: 0.5rem; }
#write ol, #write ul { position: relative; }
img { max-width: 100%; vertical-align: middle; image-orientation: from-image; }
button, input, select, textarea { color: inherit; font: inherit; }
input[type="checkbox"], input[type="radio"] { line-height: normal; padding: 0px; }
*, ::after, ::before { box-sizing: border-box; }
#write h1, #write h2, #write h3, #write h4, #write h5, #write h6, #write p, #write pre { width: inherit; position: relative; }
#write svg h1, #write svg h2, #write svg h3, #write svg h4, #write svg h5, #write svg h6, #write svg p { position: static; }
p { line-height: inherit; }
h1, h2, h3, h4, h5, h6 { break-after: avoid-page; break-inside: avoid; orphans: 4; }
p { orphans: 4; }
h1 { font-size: 2rem; }
h2 { font-size: 1.8rem; }
h3 { font-size: 1.6rem; }
h4 { font-size: 1.4rem; }
h5 { font-size: 1.2rem; }
h6 { font-size: 1rem; }
.md-math-block, .md-rawblock, h1, h2, h3, h4, h5, h6, p { margin-top: 1rem; margin-bottom: 1rem; }
.hidden { display: none; }
.md-blockmeta { color: rgb(204, 204, 204); font-weight: 700; font-style: italic; }
a { cursor: pointer; }
sup.md-footnote { padding: 2px 4px; background-color: rgba(238, 238, 238, 0.7); color: rgb(85, 85, 85); border-radius: 4px; cursor: pointer; }
sup.md-footnote a, sup.md-footnote a:hover { color: inherit; text-transform: inherit; text-decoration: inherit; }
#write input[type="checkbox"] { cursor: pointer; width: inherit; height: inherit; }
figure { overflow-x: auto; margin: 1.2em 0px; max-width: calc(100% + 16px); padding: 0px; }
figure > table { margin: 0px; }
thead, tr { break-inside: avoid; break-after: auto; }
thead { display: table-header-group; }
table { border-collapse: collapse; border-spacing: 0px; width: 100%; overflow: auto; break-inside: auto; text-align: left; }
table.md-table td { min-width: 32px; }
.CodeMirror-gutters { border-right: 0px; background-color: inherit; }
.CodeMirror-linenumber { user-select: none; }
.CodeMirror { text-align: left; }
.CodeMirror-placeholder { opacity: 0.3; }
.CodeMirror pre { padding: 0px 4px; }
.CodeMirror-lines { padding: 0px; }
div.hr:focus { cursor: none; }
#write pre { white-space: pre-wrap; }
#write.fences-no-line-wrapping pre { white-space: pre; }
#write pre.ty-contain-cm { white-space: normal; }
.CodeMirror-gutters { margin-right: 4px; }
.md-fences { font-size: 0.9rem; display: block; break-inside: avoid; text-align: left; overflow: visible; white-space: pre; background: inherit; position: relative !important; }
.md-fences-adv-panel { width: 100%; margin-top: 10px; text-align: center; padding-top: 0px; padding-bottom: 8px; overflow-x: auto; }
#write .md-fences.mock-cm { white-space: pre-wrap; }
.md-fences.md-fences-with-lineno { padding-left: 0px; }
#write.fences-no-line-wrapping .md-fences.mock-cm { white-space: pre; overflow-x: auto; }
.md-fences.mock-cm.md-fences-with-lineno { padding-left: 8px; }
.CodeMirror-line, twitterwidget { break-inside: avoid; }
svg { break-inside: avoid; }
.footnotes { opacity: 0.8; font-size: 0.9rem; margin-top: 1em; margin-bottom: 1em; }
.footnotes + .footnotes { margin-top: 0px; }
.md-reset { margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: top; background: 0px 0px; text-decoration: none; text-shadow: none; float: none; position: static; width: auto; height: auto; white-space: nowrap; cursor: inherit; -webkit-tap-highlight-color: transparent; line-height: normal; font-weight: 400; text-align: left; box-sizing: content-box; direction: ltr; }
li div { padding-top: 0px; }
blockquote { margin: 1rem 0px; }
li .mathjax-block, li p { margin: 0.5rem 0px; }
li blockquote { margin: 1rem 0px; }
li { margin: 0px; position: relative; }
blockquote > :last-child { margin-bottom: 0px; }
blockquote > :first-child, li > :first-child { margin-top: 0px; }
.footnotes-area { color: rgb(136, 136, 136); margin-top: 0.714rem; padding-bottom: 0.143rem; white-space: normal; }
#write .footnote-line { white-space: pre-wrap; }
@media print {
  body, html { border: 1px solid transparent; height: 99%; break-after: avoid; break-before: avoid; font-variant-ligatures: no-common-ligatures; }
  #write { margin-top: 0px; border-color: transparent !important; padding-top: 0px !important; padding-bottom: 0px !important; }
  .typora-export * { -webkit-print-color-adjust: exact; }
  .typora-export #write { break-after: avoid; }
  .typora-export #write::after { height: 0px; }
  .is-mac table { break-inside: avoid; }
  #write > p:nth-child(1) { margin-top: 0px; }
  .typora-export-show-outline .typora-export-sidebar { display: none; }
  figure { overflow-x: visible; }
}
.footnote-line { margin-top: 0.714em; font-size: 0.7em; }
a img, img a { cursor: pointer; }
pre.md-meta-block { font-size: 0.8rem; min-height: 0.8rem; white-space: pre-wrap; background: rgb(204, 204, 204); display: block; overflow-x: hidden; }
p > .md-image:only-child:not(.md-img-error) img, p > img:only-child { display: block; margin: auto; }
#write.first-line-indent p > .md-image:only-child:not(.md-img-error) img { left: -2em; position: relative; }
p > .md-image:only-child { display: inline-block; width: 100%; }
#write .MathJax_Display { margin: 0.8em 0px 0px; }
.md-math-block { width: 100%; }
.md-math-block:not(:empty)::after { display: none; }
.MathJax_ref { fill: currentcolor; }
[contenteditable="true"]:active, [contenteditable="true"]:focus, [contenteditable="false"]:active, [contenteditable="false"]:focus { outline: 0px; box-shadow: none; }
.md-task-list-item { position: relative; list-style-type: none; }
.task-list-item.md-task-list-item { padding-left: 0px; }
.md-task-list-item > input { position: absolute; top: 0px; left: 0px; margin-left: -1.2em; margin-top: calc(1em - 10px); border: none; }
.math { font-size: 1rem; }
.md-toc { min-height: 3.58rem; position: relative; font-size: 0.9rem; border-radius: 10px; }
.md-toc-content { position: relative; margin-left: 0px; }
.md-toc-content::after, .md-toc::after { display: none; }
.md-toc-item { display: block; color: rgb(65, 131, 196); }
.md-toc-item a { text-decoration: none; }
.md-toc-inner:hover { text-decoration: underline; }
.md-toc-inner { display: inline-block; cursor: pointer; }
.md-toc-h1 .md-toc-inner { margin-left: 0px; font-weight: 700; }
.md-toc-h2 .md-toc-inner { margin-left: 2em; }
.md-toc-h3 .md-toc-inner { margin-left: 4em; }
.md-toc-h4 .md-toc-inner { margin-left: 6em; }
.md-toc-h5 .md-toc-inner { margin-left: 8em; }
.md-toc-h6 .md-toc-inner { margin-left: 10em; }
@media screen and (max-width: 48em) {
  .md-toc-h3 .md-toc-inner { margin-left: 3.5em; }
  .md-toc-h4 .md-toc-inner { margin-left: 5em; }
  .md-toc-h5 .md-toc-inner { margin-left: 6.5em; }
  .md-toc-h6 .md-toc-inner { margin-left: 8em; }
}
a.md-toc-inner { font-size: inherit; font-style: inherit; font-weight: inherit; line-height: inherit; }
.footnote-line a:not(.reversefootnote) { color: inherit; }
.reversefootnote { font-family: ui-monospace, sans-serif; }
.md-attr { display: none; }
.md-fn-count::after { content: "."; }
code, pre, samp, tt { font-family: var(--monospace); }
kbd { margin: 0px 0.1em; padding: 0.1em 0.6em; font-size: 0.8em; color: rgb(36, 39, 41); background: rgb(255, 255, 255); border: 1px solid rgb(173, 179, 185); border-radius: 3px; box-shadow: rgba(12, 13, 14, 0.2) 0px 1px 0px, rgb(255, 255, 255) 0px 0px 0px 2px inset; white-space: nowrap; vertical-align: middle; }
.md-comment { color: rgb(162, 127, 3); opacity: 0.6; font-family: var(--monospace); }
code { text-align: left; vertical-align: initial; }
a.md-print-anchor { white-space: pre !important; border-width: initial !important; border-style: none !important; border-color: initial !important; display: inline-block !important; position: absolute !important; width: 1px !important; right: 0px !important; outline: 0px !important; background: 0px 0px !important; text-decoration: initial !important; text-shadow: initial !important; }
.os-windows.monocolor-emoji .md-emoji { font-family: "Segoe UI Symbol", sans-serif; }
.md-diagram-panel > svg { max-width: 100%; }
[lang="flow"] svg, [lang="mermaid"] svg { max-width: 100%; height: auto; }
[lang="mermaid"] .node text { font-size: 1rem; }
table tr th { border-bottom: 0px; }
video { max-width: 100%; display: block; margin: 0px auto; }
iframe { max-width: 100%; width: 100%; border: none; }
.highlight td, .highlight tr { border: 0px; }
mark { background: rgb(255, 255, 0); color: rgb(0, 0, 0); }
.md-html-inline .md-plain, .md-html-inline strong, mark .md-inline-math, mark strong { color: inherit; }
.md-expand mark .md-meta { opacity: 0.3 !important; }
mark .md-meta { color: rgb(0, 0, 0); }
@media print {
  .typora-export h1, .typora-export h2, .typora-export h3, .typora-export h4, .typora-export h5, .typora-export h6 { break-inside: avoid; }
}
.md-diagram-panel .messageText { stroke: none !important; }
.md-diagram-panel .start-state { fill: var(--node-fill); }
.md-diagram-panel .edgeLabel rect { opacity: 1 !important; }
.md-fences.md-fences-math { font-size: 1em; }
.md-fences-advanced:not(.md-focus) { padding: 0px; white-space: nowrap; border: 0px; }
.md-fences-advanced:not(.md-focus) { background: inherit; }
.mermaid-svg { margin: auto; }
.typora-export-show-outline .typora-export-content { max-width: 1440px; margin: auto; display: flex; flex-direction: row; }
.typora-export-sidebar { width: 300px; font-size: 0.8rem; margin-top: 80px; margin-right: 18px; }
.typora-export-show-outline #write { --webkit-flex: 2; flex: 2 1 0%; }
.typora-export-sidebar .outline-content { position: fixed; top: 0px; max-height: 100%; overflow: hidden auto; padding-bottom: 30px; padding-top: 60px; width: 300px; }
@media screen and (max-width: 1024px) {
  .typora-export-sidebar, .typora-export-sidebar .outline-content { width: 240px; }
}
@media screen and (max-width: 800px) {
  .typora-export-sidebar { display: none; }
}
.outline-content li, .outline-content ul { margin-left: 0px; margin-right: 0px; padding-left: 0px; padding-right: 0px; list-style: none; overflow-wrap: anywhere; }
.outline-content ul { margin-top: 0px; margin-bottom: 0px; }
.outline-content strong { font-weight: 400; }
.outline-expander { width: 1rem; height: 1.42857rem; position: relative; display: table-cell; vertical-align: middle; cursor: pointer; padding-left: 4px; }
.outline-expander::before { content: ""; position: relative; font-family: Ionicons; display: inline-block; font-size: 8px; vertical-align: middle; }
.outline-item { padding-top: 3px; padding-bottom: 3px; cursor: pointer; }
.outline-expander:hover::before { content: ""; }
.outline-h1 > .outline-item { padding-left: 0px; }
.outline-h2 > .outline-item { padding-left: 1em; }
.outline-h3 > .outline-item { padding-left: 2em; }
.outline-h4 > .outline-item { padding-left: 3em; }
.outline-h5 > .outline-item { padding-left: 4em; }
.outline-h6 > .outline-item { padding-left: 5em; }
.outline-label { cursor: pointer; display: table-cell; vertical-align: middle; text-decoration: none; color: inherit; }
.outline-label:hover { text-decoration: underline; }
.outline-item:hover { border-color: rgb(245, 245, 245); background-color: var(--item-hover-bg-color); }
.outline-item:hover { margin-left: -28px; margin-right: -28px; border-left: 28px solid transparent; border-right: 28px solid transparent; }
.outline-item-single .outline-expander::before, .outline-item-single .outline-expander:hover::before { display: none; }
.outline-item-open > .outline-item > .outline-expander::before { content: ""; }
.outline-children { display: none; }
.info-panel-tab-wrapper { display: none; }
.outline-item-open > .outline-children { display: block; }
.typora-export .outline-item { padding-top: 1px; padding-bottom: 1px; }
.typora-export .outline-item:hover { margin-right: -8px; border-right: 8px solid transparent; }
.typora-export .outline-expander::before { content: "+"; font-family: inherit; top: -1px; }
.typora-export .outline-expander:hover::before, .typora-export .outline-item-open > .outline-item > .outline-expander::before { content: "−"; }
.typora-export-collapse-outline .outline-children { display: none; }
.typora-export-collapse-outline .outline-item-open > .outline-children, .typora-export-no-collapse-outline .outline-children { display: block; }
.typora-export-no-collapse-outline .outline-expander::before { content: "" !important; }
.typora-export-show-outline .outline-item-active > .outline-item .outline-label { font-weight: 700; }
.md-inline-math-container mjx-container { zoom: 0.95; }
mjx-container { break-inside: avoid; }
.md-alert.md-alert-note { border-left-color: rgb(9, 105, 218); }
.md-alert.md-alert-important { border-left-color: rgb(130, 80, 223); }
.md-alert.md-alert-warning { border-left-color: rgb(154, 103, 0); }
.md-alert.md-alert-tip { border-left-color: rgb(31, 136, 61); }
.md-alert.md-alert-caution { border-left-color: rgb(207, 34, 46); }
.md-alert { padding: 0px 1em; margin-bottom: 16px; color: inherit; border-left: 0.25em solid rgb(0, 0, 0); }
.md-alert-text-note { color: rgb(9, 105, 218); }
.md-alert-text-important { color: rgb(130, 80, 223); }
.md-alert-text-warning { color: rgb(154, 103, 0); }
.md-alert-text-tip { color: rgb(31, 136, 61); }
.md-alert-text-caution { color: rgb(207, 34, 46); }
.md-alert-text { font-size: 0.9rem; font-weight: 700; }
.md-alert-text svg { fill: currentcolor; position: relative; top: 0.125em; margin-right: 1ch; overflow: visible; }
.md-alert-text-container::after { content: attr(data-text); text-transform: capitalize; pointer-events: none; margin-right: 1ch; }


.CodeMirror { height: auto; }
.CodeMirror.cm-s-inner { background: inherit; }
.CodeMirror-scroll { overflow: auto hidden; z-index: 3; }
.CodeMirror-gutter-filler, .CodeMirror-scrollbar-filler { background-color: rgb(255, 255, 255); }
.CodeMirror-gutters { border-right: 1px solid rgb(221, 221, 221); background: inherit; white-space: nowrap; }
.CodeMirror-linenumber { padding: 0px 3px 0px 5px; text-align: right; color: rgb(153, 153, 153); }
.cm-s-inner .cm-keyword { color: rgb(119, 0, 136); }
.cm-s-inner .cm-atom, .cm-s-inner.cm-atom { color: rgb(34, 17, 153); }
.cm-s-inner .cm-number { color: rgb(17, 102, 68); }
.cm-s-inner .cm-def { color: rgb(0, 0, 255); }
.cm-s-inner .cm-variable { color: rgb(0, 0, 0); }
.cm-s-inner .cm-variable-2 { color: rgb(0, 85, 170); }
.cm-s-inner .cm-variable-3 { color: rgb(0, 136, 85); }
.cm-s-inner .cm-string { color: rgb(170, 17, 17); }
.cm-s-inner .cm-property { color: rgb(0, 0, 0); }
.cm-s-inner .cm-operator { color: rgb(152, 26, 26); }
.cm-s-inner .cm-comment, .cm-s-inner.cm-comment { color: rgb(170, 85, 0); }
.cm-s-inner .cm-string-2 { color: rgb(255, 85, 0); }
.cm-s-inner .cm-meta { color: rgb(85, 85, 85); }
.cm-s-inner .cm-qualifier { color: rgb(85, 85, 85); }
.cm-s-inner .cm-builtin { color: rgb(51, 0, 170); }
.cm-s-inner .cm-bracket { color: rgb(153, 153, 119); }
.cm-s-inner .cm-tag { color: rgb(17, 119, 0); }
.cm-s-inner .cm-attribute { color: rgb(0, 0, 204); }
.cm-s-inner .cm-header, .cm-s-inner.cm-header { color: rgb(0, 0, 255); }
.cm-s-inner .cm-quote, .cm-s-inner.cm-quote { color: rgb(0, 153, 0); }
.cm-s-inner .cm-hr, .cm-s-inner.cm-hr { color: rgb(153, 153, 153); }
.cm-s-inner .cm-link, .cm-s-inner.cm-link { color: rgb(0, 0, 204); }
.cm-negative { color: rgb(221, 68, 68); }
.cm-positive { color: rgb(34, 153, 34); }
.cm-header, .cm-strong { font-weight: 700; }
.cm-del { text-decoration: line-through; }
.cm-em { font-style: italic; }
.cm-link { text-decoration: underline; }
.cm-error { color: red; }
.cm-invalidchar { color: red; }
.cm-constant { color: rgb(38, 139, 210); }
.cm-defined { color: rgb(181, 137, 0); }
div.CodeMirror span.CodeMirror-matchingbracket { color: rgb(0, 255, 0); }
div.CodeMirror span.CodeMirror-nonmatchingbracket { color: rgb(255, 34, 34); }
.cm-s-inner .CodeMirror-activeline-background { background: inherit; }
.CodeMirror { position: relative; overflow: hidden; }
.CodeMirror-scroll { height: 100%; outline: 0px; position: relative; box-sizing: content-box; background: inherit; }
.CodeMirror-sizer { position: relative; }
.CodeMirror-gutter-filler, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-vscrollbar { position: absolute; z-index: 6; display: none; outline: 0px; }
.CodeMirror-vscrollbar { right: 0px; top: 0px; overflow: hidden; }
.CodeMirror-hscrollbar { bottom: 0px; left: 0px; overflow: auto hidden; }
.CodeMirror-scrollbar-filler { right: 0px; bottom: 0px; }
.CodeMirror-gutter-filler { left: 0px; bottom: 0px; }
.CodeMirror-gutters { position: absolute; left: 0px; top: 0px; padding-bottom: 10px; z-index: 3; overflow-y: hidden; }
.CodeMirror-gutter { white-space: normal; height: 100%; box-sizing: content-box; padding-bottom: 30px; margin-bottom: -32px; display: inline-block; }
.CodeMirror-gutter-wrapper { position: absolute; z-index: 4; background: 0px 0px !important; border: none !important; }
.CodeMirror-gutter-background { position: absolute; top: 0px; bottom: 0px; z-index: 4; }
.CodeMirror-gutter-elt { position: absolute; cursor: default; z-index: 4; }
.CodeMirror-lines { cursor: text; }
.CodeMirror pre { border-radius: 0px; border-width: 0px; background: 0px 0px; font-family: inherit; font-size: inherit; margin: 0px; white-space: pre; overflow-wrap: normal; color: inherit; z-index: 2; position: relative; overflow: visible; }
.CodeMirror-wrap pre { overflow-wrap: break-word; white-space: pre-wrap; word-break: normal; }
.CodeMirror-code pre { border-right: 30px solid transparent; width: fit-content; }
.CodeMirror-wrap .CodeMirror-code pre { border-right: none; width: auto; }
.CodeMirror-linebackground { position: absolute; inset: 0px; z-index: 0; }
.CodeMirror-linewidget { position: relative; z-index: 2; overflow: auto; }
.CodeMirror-wrap .CodeMirror-scroll { overflow-x: hidden; }
.CodeMirror-measure { position: absolute; width: 100%; height: 0px; overflow: hidden; visibility: hidden; }
.CodeMirror-measure pre { position: static; }
.CodeMirror div.CodeMirror-cursor { position: absolute; visibility: hidden; border-right: none; width: 0px; }
.CodeMirror div.CodeMirror-cursor { visibility: hidden; }
.CodeMirror-focused div.CodeMirror-cursor { visibility: inherit; }
.cm-searching { background: rgba(255, 255, 0, 0.4); }
span.cm-underlined { text-decoration: underline; }
span.cm-strikethrough { text-decoration: line-through; }
.cm-tw-syntaxerror { color: rgb(255, 255, 255); background-color: rgb(153, 0, 0); }
.cm-tw-deleted { text-decoration: line-through; }
.cm-tw-header5 { font-weight: 700; }
.cm-tw-listitem:first-child { padding-left: 10px; }
.cm-tw-box { border-style: solid; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-color: inherit; border-top-width: 0px !important; }
.cm-tw-underline { text-decoration: underline; }
@media print {
  .CodeMirror div.CodeMirror-cursor { visibility: hidden; }
}


:root {
  --mermaid-theme: night;
}

[lang='mermaid'] .label {
  color: #333;
}

/* CSS Document */

/** code highlight */

.cm-s-inner .cm-variable,
.cm-s-inner .cm-operator,
.cm-s-inner .cm-property {
    color: #b8bfc6;
}

.cm-s-inner .cm-keyword {
    color: #C88FD0;
}

.cm-s-inner .cm-tag {
    color: #7DF46A;
}

.cm-s-inner .cm-attribute {
    color: #7575E4;
}

.CodeMirror div.CodeMirror-cursor {
    border-left: 1px solid #b8bfc6;
    z-index: 3;
}

.cm-s-inner .cm-string {
    color: #D26B6B;
}

.cm-s-inner .cm-comment,
.cm-s-inner.cm-comment {
    color: #DA924A;
}

.cm-s-inner .cm-header,
.cm-s-inner .cm-def,
.cm-s-inner.cm-header,
.cm-s-inner.cm-def {
    color: #8d8df0;
}

.cm-s-inner .cm-quote,
.cm-s-inner.cm-quote {
    color: #57ac57;
}

.cm-s-inner .cm-hr {
    color: #d8d5d5;
}

.cm-s-inner .cm-link {
    color: #d3d3ef;
}

.cm-s-inner .cm-negative {
    color: #d95050;
}

.cm-s-inner .cm-positive {
    color: #50e650;
}

.cm-s-inner .cm-string-2 {
    color: #f50;
}

.cm-s-inner .cm-meta,
.cm-s-inner .cm-qualifier {
    color: #b7b3b3;
}

.cm-s-inner .cm-builtin {
    color: #f3b3f8;
}

.cm-s-inner .cm-bracket {
    color: #997;
}

.cm-s-inner .cm-atom,
.cm-s-inner.cm-atom {
    color: #84B6CB;
}

.cm-s-inner .cm-number {
    color: #64AB8F;
}

.cm-s-inner .cm-variable {
    color: #b8bfc6;
}

.cm-s-inner .cm-variable-2 {
    color: #9FBAD5;
}

.cm-s-inner .cm-variable-3 {
    color: #1cc685;
}

.CodeMirror-selectedtext,
.CodeMirror-selected {
    background: #4a89dc;
    color: #fff !important;
    text-shadow: none;
}

.CodeMirror-gutters {
    border-right: none;
}

/* CSS Document */

/** markdown source **/
.cm-s-typora-default .cm-header, 
.cm-s-typora-default .cm-property
{
    color: #cebcca;
}

.CodeMirror.cm-s-typora-default div.CodeMirror-cursor{
    border-left: 3px solid #b8bfc6;
}

.cm-s-typora-default .cm-comment {
    color: #9FB1FF;
}

.cm-s-typora-default .cm-string {
    color: #A7A7D9
}

.cm-s-typora-default .cm-atom, .cm-s-typora-default .cm-number {
    color: #848695;
    font-style: italic;
}

.cm-s-typora-default .cm-link {
    color: #95B94B;
}

.cm-s-typora-default .CodeMirror-activeline-background {
    background: rgba(51, 51, 51, 0.72);
}

.cm-s-typora-default .cm-comment, .cm-s-typora-default .cm-code {
	color: #8aa1e1;
}@import "";
@import "";
@import "";

:root {
    --bg-color:  #363B40;
    --side-bar-bg-color: #2E3033;
    --text-color: #b8bfc6;

    --select-text-bg-color:#4a89dc;

    --item-hover-bg-color: #0a0d16;
    --control-text-color: #b7b7b7;
    --control-text-hover-color: #eee;
    --window-border: 1px solid #555;

    --active-file-bg-color: rgb(34, 34, 34);
    --active-file-border-color: #8d8df0;

    --primary-color: #a3d5fe;

    --active-file-text-color: white;
    --item-hover-bg-color: #70717d;
    --item-hover-text-color: white;
    --primary-color: #6dc1e7;

    --rawblock-edit-panel-bd: #333;

    --search-select-bg-color: #428bca;
}

html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
}

html,
body {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    background: #363B40;
    background: var(--bg-color);
    fill: currentColor;
    line-height: 1.625rem;
}

#write {
    max-width: 914px;
}


@media only screen and (min-width: 1400px) {
	#write {
		max-width: 1024px;
	}
}

@media only screen and (min-width: 1800px) {
	#write {
		max-width: 1200px;
	}
}

html,
body,
button,
input,
select,
textarea,
div.code-tooltip-content {
    color: #b8bfc6;
    border-color: transparent;
}

div.code-tooltip,
.md-hover-tip .md-arrow:after {
    background: #333;
}

.native-window #md-notification {
    border: 1px solid #70717d;
}

.popover.bottom > .arrow:after {
    border-bottom-color: #333;
}

html,
body,
button,
input,
select,
textarea {
    font-family: "Helvetica Neue", Helvetica, Arial, 'Segoe UI Emoji', sans-serif;
}

hr {
    height: 2px;
    border: 0;
    margin: 24px 0 !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Lucida Grande", "Corbel", sans-serif;
    font-weight: normal;
    clear: both;
    -ms-word-wrap: break-word;
    word-wrap: break-word;
    margin: 0;
    padding: 0;
    color: #DEDEDE
}

h1 {
    font-size: 2.5rem;
    /* 36px */
    line-height: 2.75rem;
    /* 40px */
    margin-bottom: 1.5rem;
    /* 24px */
    letter-spacing: -1.5px;
}

h2 {
    font-size: 1.63rem;
    /* 24px */
    line-height: 1.875rem;
    /* 30px */
    margin-bottom: 1.5rem;
    /* 24px */
    letter-spacing: -1px;
    font-weight: bold;
}

h3 {
    font-size: 1.17rem;
    /* 18px */
    line-height: 1.5rem;
    /* 24px */
    margin-bottom: 1.5rem;
    /* 24px */
    letter-spacing: -1px;
    font-weight: bold;
}

h4 {
    font-size: 1.12rem;
    /* 16px */
    line-height: 1.375rem;
    /* 22px */
    margin-bottom: 1.5rem;
    /* 24px */
    color: white;
}

h5 {
    font-size: 0.97rem;
    /* 16px */
    line-height: 1.25rem;
    /* 22px */
    margin-bottom: 1.5rem;
    /* 24px */
    font-weight: bold;
}

h6 {
    font-size: 0.93rem;
    /* 16px */
    line-height: 1rem;
    /* 16px */
    margin-bottom: 0.75rem;
    color: white;
}

@media (min-width: 980px) {
    h3.md-focus:before,
    h4.md-focus:before,
    h5.md-focus:before,
    h6.md-focus:before {
        color: #ddd;
        border: 1px solid #ddd;
        border-radius: 3px;
        position: absolute;
        left: -1.642857143rem;
        top: .357142857rem;
        float: left;
        font-size: 9px;
        padding-left: 2px;
        padding-right: 2px;
        vertical-align: bottom;
        font-weight: normal;
        line-height: normal;
    }

    h3.md-focus:before {
        content: 'h3';
    }

    h4.md-focus:before {
        content: 'h4';
    }

    h5.md-focus:before {
        content: 'h5';
        top: 0px;
    }

    h6.md-focus:before {
        content: 'h6';
        top: 0px;
    }
}

a {
    text-decoration: none;
    outline: 0;
}

a:hover {
    outline: 0;
}

a:focus {
    outline: thin dotted;
}

sup.md-footnote {
    background-color: #555;
    color: #ddd;
}

p {
    -ms-word-wrap: break-word;
    word-wrap: break-word;
}

p,
ul,
dd,
ol,
hr,
address,
pre,
table,
iframe,
.wp-caption,
.wp-audio-shortcode,
.wp-video-shortcode {
    margin-top: 0;
    margin-bottom: 1.5rem;
    /* 24px */
}

audio:not([controls]) {
    display: none;
}

[hidden] {
    display: none;
}

::-moz-selection {
    background: #4a89dc;
    color: #fff;
    text-shadow: none;
}

*.in-text-selection,
::selection {
    background: #4a89dc;
    color: #fff;
    text-shadow: none;
}

ul,
ol {
    padding: 0 0 0 1.875rem;
    /* 30px */
}

ul {
    list-style: square;
}

ol {
    list-style: decimal;
}

ul ul,
ol ol,
ul ol,
ol ul {
    margin: 0;
}

b,
th,
dt,
strong {
    font-weight: bold;
}

i,
em,
dfn,
cite {
    font-style: italic;
}

blockquote {
    padding-left: 1.875rem;
    margin: 0 0 1.875rem 1.875rem;
    border-left: solid 2px #474d54;
    padding-left: 30px;
    margin-top: 35px;
}

pre,
code,
kbd,
tt,
var {
    font-size: 0.875em;
    font-family: Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;
}

code,
tt,
var {
    background: rgba(0, 0, 0, 0.05);
}

kbd {
    padding: 2px 4px;
    font-size: 90%;
    color: #fff;
    background-color: #333;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 rgba(0,0,0,.25);
}

pre.md-fences {
    padding: 10px 10px 10px 30px;
    margin-bottom: 20px;
    background: #333;
}

.CodeMirror-gutters {
    background: #333;
    border-right: 1px solid transparent;
}

.enable-diagrams pre.md-fences[lang="sequence"] .code-tooltip,
.enable-diagrams pre.md-fences[lang="flow"] .code-tooltip,
.enable-diagrams pre.md-fences[lang="mermaid"] .code-tooltip {
    bottom: -2.2em;
    right: 4px;
}

code,
kbd,
tt,
var {
    padding: 2px 5px;
}

table {
    max-width: 100%;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}

th,
td {
    padding: 5px 10px;
    vertical-align: top;
}

a {
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}

hr {
    background: #474d54;
    /* variable */
}

h1 {
    margin-top: 2em;
}

a {
    color: #e0e0e0;
    text-decoration: underline;
}

a:hover {
    color: #fff;
}

.md-inline-math script {
    color: #81b1db;
}

b,
th,
dt,
strong {
    color: #DEDEDE;
    /* variable */
}

mark {
    background: #D3D40E;
}

blockquote {
    color: #9DA2A6;
}

table a {
    color: #DEDEDE;
    /* variable */
}

th,
td {
    border: solid 1px #474d54;
    /* variable */
}

.task-list {
    padding-left: 0;
}

.md-task-list-item {
    padding-left: 1.25rem;
}

.md-task-list-item > input {
    top: auto;
}

.md-task-list-item > input:before {
    content: "";
    display: inline-block;
    width: 0.875rem;
    height: 0.875rem;
    vertical-align: middle;
    text-align: center;
    border: 1px solid #b8bfc6;
    background-color: #363B40;
    margin-top: -0.4rem;
}

.md-task-list-item > input:checked:before,
.md-task-list-item > input[checked]:before {
    content: '\\221A';
    /*◘*/
    font-size: 0.625rem;
    line-height: 0.625rem;
    color: #DEDEDE;
}

/** quick open **/
.auto-suggest-container {
    border: 0px;
    background-color: #525C65;
}

#typora-quick-open {
    background-color: #525C65;
}

#typora-quick-open input{
    background-color: #525C65;
    border: 0;
    border-bottom: 1px solid grey;
}

.typora-quick-open-item {
    background-color: inherit;
    color: inherit;
}

.typora-quick-open-item.active,
.typora-quick-open-item:hover {
    background-color: #4D8BDB;
    color: white;
}

.typora-quick-open-item:hover {
    background-color: rgba(77, 139, 219, 0.8);
}

.typora-search-spinner > div {
  background-color: #fff;
}

#write pre.md-meta-block {
    border-bottom: 1px dashed #ccc;
    background: transparent;
    padding-bottom: 0.6em;
    line-height: 1.6em;
}

.btn,
.btn .btn-default {
    background: transparent;
    color: #b8bfc6;
}

.ty-table-edit {
    border-top: 1px solid gray;
    background-color: #363B40;
}

.popover-title {
    background: transparent;
}

.md-image>.md-meta {
    color: #BBBBBB;
    background: transparent;
}

.md-expand.md-image>.md-meta {
    color: #DDD;
}

#write>h3:before,
#write>h4:before,
#write>h5:before,
#write>h6:before {
    border: none;
    border-radius: 0px;
    color: #888;
    text-decoration: underline;
    left: -1.4rem;
    top: 0.2rem;
}

#write>h3.md-focus:before {
    top: 2px;
}

#write>h4.md-focus:before {
    top: 2px;
}

.md-toc-item {
    color: #A8C2DC;
}

#write div.md-toc-tooltip {
    background-color: #363B40;
}

.dropdown-menu .btn:hover,
.dropdown-menu .btn:focus,
.md-toc .btn:hover,
.md-toc .btn:focus {
    color: white;
    background: black;
}

#toc-dropmenu {
    background: rgba(50, 54, 59, 0.93);
    border: 1px solid rgba(253, 253, 253, 0.15);
}

#toc-dropmenu .divider {
    background-color: #9b9b9b;
}

.outline-expander:before {
    top: 2px;
}

#typora-sidebar {
    box-shadow: none;
    border-right: 1px dashed;
    border-right: none;
}

.sidebar-tabs {
    border-bottom:0;
}

#typora-sidebar:hover .outline-title-wrapper {
    border-left: 1px dashed;
}

.outline-title-wrapper .btn {
    color: inherit;
}

.outline-item:hover {
    border-color: #363B40;
    background-color: #363B40;
    color: white;
}

h1.md-focus .md-attr,
h2.md-focus .md-attr,
h3.md-focus .md-attr,
h4.md-focus .md-attr,
h5.md-focus .md-attr,
h6.md-focus .md-attr,
.md-header-span .md-attr {
    color: #8C8E92;
    display: inline;
}

.md-comment {
    color: #5a95e3;
    opacity: 0.8;
}

.md-inline-math svg {
    color: #b8bfc6;
}

#math-inline-preview .md-arrow:after {
    background: black;
}

.modal-content {
    background: var(--bg-color);
    border: 0;
}

.modal-title {
    font-size: 1.5em;
}

.modal-content input {
    background-color: rgba(26, 21, 21, 0.51);
    color: white;
}

.modal-content .input-group-addon {
    color: white;
}

.modal-backdrop {
    background-color: rgba(174, 174, 174, 0.7);
}

.modal-content .btn-primary {
    border-color: var(--primary-color);
}

.md-table-resize-popover {
    background-color: #333;
}

.form-inline .input-group .input-group-addon {
    color: white;
}

#md-searchpanel {
    border-bottom: 1px dashed grey;
}

/** UI for electron */

.context-menu,
#spell-check-panel,
#footer-word-count-info {
    background-color: #42464A;
}

.context-menu.dropdown-menu .divider,
.dropdown-menu .divider {
    background-color: #777777;
    opacity: 1;
}

footer {
    color: inherit;
}

@media (max-width: 1000px) {
    footer {
        border-top: none;
    }
    footer:hover {
        color: inherit;
    }
}

#file-info-file-path .file-info-field-value:hover {
    background-color: #555;
    color: #dedede;
}

.megamenu-content,
.megamenu-opened header {
    background: var(--bg-color);
}

.megamenu-menu-panel h2,
.megamenu-menu-panel h1,
.long-btn {
    color: inherit;
}

.megamenu-menu-panel input[type='text'] {
    background: inherit;
    border: 0;
    border-bottom: 1px solid;
}

#recent-file-panel-action-btn {
    background: inherit;
    border: 1px grey solid;
}

.megamenu-menu-panel .dropdown-menu > li > a {
    color: inherit;
    background-color: #2F353A;
    text-decoration: none;
}

.megamenu-menu-panel table td:nth-child(1) {
    color: inherit;
    font-weight: bold;
}

.megamenu-menu-panel tbody tr:hover td:nth-child(1) {
    color: white;
}

.modal-footer .btn-default, 
.modal-footer .btn-primary,
.modal-footer .btn-default:not(:hover) {
    border: 1px solid;
    border-color: transparent;
}

.btn-primary {
    color: white;
}

.btn-default:hover, .btn-default:focus, .btn-default.focus, .btn-default:active, .btn-default.active, .open > .dropdown-toggle.btn-default {
    color: white;
    border: 1px solid #ddd;
    background-color: inherit;
}

.modal-header {
    border-bottom: 0;
}

.modal-footer {
    border-top: 0;
}

#recent-file-panel tbody tr:nth-child(2n-1) {
    background-color: transparent !important;
}

.megamenu-menu-panel tbody tr:hover td:nth-child(2) {
    color: inherit;
}

.megamenu-menu-panel .btn {
    border: 1px solid #eee;
    background: transparent;
}

.mouse-hover .toolbar-icon.btn:hover,
#w-full.mouse-hover,
#w-pin.mouse-hover {
    background-color: inherit;
}

.typora-node::-webkit-scrollbar {
    width: 5px;
}

.typora-node::-webkit-scrollbar-thumb:vertical {
    background: rgba(250, 250, 250, 0.3);
}

.typora-node::-webkit-scrollbar-thumb:vertical:active {
    background: rgba(250, 250, 250, 0.5);
}

#w-unpin {
    background-color: #4182c4;
}

#top-titlebar, #top-titlebar * {
    color: var(--item-hover-text-color);
}

.typora-sourceview-on #toggle-sourceview-btn,
#footer-word-count:hover,
.ty-show-word-count #footer-word-count {
    background: #333333;
}

#toggle-sourceview-btn:hover {
    color: #eee;
    background: #333333;
}

/** focus mode */
.on-focus-mode .md-end-block:not(.md-focus):not(.md-focus-container) * {
    color: #686868 !important;
}

.on-focus-mode .md-end-block:not(.md-focus) img,
.on-focus-mode .md-task-list-item:not(.md-focus-container)>input {
    opacity: #686868 !important;
}

.on-focus-mode li[cid]:not(.md-focus-container){
    color: #686868;
}

.on-focus-mode .md-fences.md-focus .CodeMirror-code>*:not(.CodeMirror-activeline) *,
.on-focus-mode .CodeMirror.cm-s-inner:not(.CodeMirror-focused) * {
    color: #686868 !important;
}

.on-focus-mode .md-focus,
.on-focus-mode .md-focus-container {
    color: #fff;
}

.on-focus-mode #typora-source .CodeMirror-code>*:not(.CodeMirror-activeline) * {
    color: #686868 !important;
}


/*diagrams*/
#write .md-focus .md-diagram-panel {
    border: 1px solid #ddd;
    margin-left: -1px;
    width: calc(100% + 2px);
}

/*diagrams*/
#write .md-focus.md-fences-with-lineno .md-diagram-panel {
    margin-left: auto;
}

.md-diagram-panel-error {
    color: #f1908e;
}

.active-tab-files #info-panel-tab-file,
.active-tab-files #info-panel-tab-file:hover,
.active-tab-outline #info-panel-tab-outline,
.active-tab-outline #info-panel-tab-outline:hover {
    color: #eee;
}

.sidebar-footer-item:hover,
.footer-item:hover {
    background: inherit;
    color: white;
}

.ty-side-sort-btn.active,
.ty-side-sort-btn:hover,
.selected-folder-menu-item a:after {
    color: white;
}

#sidebar-files-menu {
    border:solid 1px;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.79);
    background-color: var(--bg-color);
}

.file-list-item {
    border-bottom:none;
}

.file-list-item-summary {
    opacity: 1;
}

.file-list-item.active:first-child {
    border-top: none;
}

.file-node-background {
    height: 32px;
}

.file-library-node.active>.file-node-content,
.file-list-item.active {
    color: white;
    color: var(--active-file-text-color);
}

.file-library-node.active>.file-node-background{
    background-color: rgb(34, 34, 34);
    background-color: var(--active-file-bg-color);
}
.file-list-item.active {
    background-color: rgb(34, 34, 34);
    background-color: var(--active-file-bg-color);
}

#ty-tooltip {
    background-color: black;
    color: #eee;
}

.md-task-list-item>input {
    margin-left: -1.3em;
    margin-top: 0.3rem;
    -webkit-appearance: none;
}

.md-mathjax-midline {
    background-color: #57616b;
    border-bottom: none;
}

footer.ty-footer {
    border-color: #656565;
}

.ty-preferences .btn-default {
    background: transparent;
}
.ty-preferences .btn-default:hover {
    background: #57616b;
}

.ty-preferences select {
    border: 1px solid #989698;
    height: 21px;
}

.ty-preferences .nav-group-item.active,
.export-item.active,
.export-items-list-control,
.export-detail {
    background: var(--item-hover-bg-color);
}

.ty-preferences input[type="search"] {
    border-color: #333;
    background: #333;
    line-height: 22px;
    border-radius: 6px;
    color: white;
}

.ty-preferences input[type="search"]:focus {
    box-shadow: none;
}

[data-is-directory="true"] .file-node-content {
    margin-bottom: 0;
}

.file-node-title {
    line-height: 22px;
}

.html-for-mac .file-node-open-state, .html-for-mac .file-node-icon {
    line-height: 26px;
}

::-webkit-scrollbar-thumb {
    background: rgba(230, 230, 230, 0.30);
}

::-webkit-scrollbar-thumb:active {
    background: rgba(230, 230, 230, 0.50);
}

#typora-sidebar:hover div.sidebar-content-content::-webkit-scrollbar-thumb:horizontal {
    background: rgba(230, 230, 230, 0.30);
}

.nav-group-item:active {
    background-color: #474d54 !important;
}

.md-search-hit {
    background: rgba(199, 140, 60, 0.81);
    color: #eee;
}

.md-search-hit * {
    color: #eee;
}

#md-searchpanel input {
    color: white;
}

.modal-backdrop.in {
    opacity: 1;
    backdrop-filter: blur(1px);
}

.clear-btn-icon {
    top: 8px;
}

/* try fix https://github.com/typora/typora-issues/issues/5253 */
.file-node-expanded>.file-node-children {
    display: grid;
  }

.md-alert-text-note {
    color: rgb(47, 129, 247);
}
.md-alert-text-important {
    color: rgb(163, 113, 247);
}
.md-alert-text-warning {
    color:  rgb(210, 153, 34);
}


</style><title>在 Fedora Toolbox 中让 xdg-open 真正生效</title>
</head>
<body class='typora-export'><div class='typora-export-content'>
<div id='write'  class=''><h1 id='在-fedora-toolbox-中让-xdg-open-真正生效'><span>在 Fedora Toolbox 中让 xdg-open 真正生效</span></h1><h2 id='问题'><span>问题</span></h2><p><span>Toolbox 里装了 flatpak-xdg-utils，执行</span></p><pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="bash"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="bash"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 11px; left: 4px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">xdg-open https://www.fedoraproject.org</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 26px;"></div><div class="CodeMirror-gutters" style="display: none; height: 26px;"></div></div></div></pre><p><span>仍报：</span></p><pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang=""><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang=""><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 11px; left: 4px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">/usr/bin/xdg-open: 行 753: kde-open: 未找到命令</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 26px;"></div><div class="CodeMirror-gutters" style="display: none; height: 26px;"></div></div></div></pre><h2 id='原因'><span>原因</span></h2><p><span>Toolbox 容器没有桌面环境，kde-open、gio、gvfs-open 等均未安装。</span>
<span>flatpak-xdg-utils 自带 /usr/bin/xdg-open，优先级高于 /usr/local/bin，导致自定义脚本被覆盖。</span></p><h2 id='解决'><span>解决</span></h2><p><span>删除或备份系统脚本</span></p><pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="bash"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="bash"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 11px; left: 4px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-builtin">sudo</span> <span class="cm-builtin">mv</span> /usr/bin/xdg-open /usr/bin/xdg-open.bak</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 26px;"></div><div class="CodeMirror-gutters" style="display: none; height: 26px;"></div></div></div></pre><p><span>新建宿主转发脚本</span></p><pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="bash"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="bash"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 11px; left: 4px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-builtin">sudo</span> <span class="cm-builtin">tee</span> /usr/bin/xdg-open &gt;/dev/null &lt;&lt;<span class="cm-string">'EOF'</span></span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-meta">#!/bin/sh</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">exec flatpak-spawn <span class="cm-attribute">--host</span> /usr/bin/xdg-open <span class="cm-string">"</span><span class="cm-def">$@</span><span class="cm-string">"</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">EOF</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-builtin">sudo</span> <span class="cm-builtin">chmod</span> <span class="cm-operator">+</span>x /usr/bin/xdg-open</span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 130px;"></div><div class="CodeMirror-gutters" style="display: none; height: 130px;"></div></div></div></pre><h2 id='验证'><span>验证</span></h2><pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="bash"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="bash"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 11px; left: 4px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">xdg-open https://www.fedoraproject.org</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 26px;"></div><div class="CodeMirror-gutters" style="display: none; height: 26px;"></div></div></div></pre><p><span>浏览器应正常弹出。</span></p><p><span>完。</span></p></div></div>
</body>
</html>`;var Zn={home:[{title:"故事",icon:"gi-spell-book",url:"story"},{title:"相册",icon:"gi-photo-camera",url:"photo"},{title:"笔记",icon:"gi-notebook",url:"note"}],story:[],photo:[],note:[]};Zn.note.push({title:"在 Fedora Toolbox 中让 xdg-open 真正生效",html:xa,author:"by we",icon:"gi-notebook",date:"2025-08-25"});const ya={style:{height:"2rem",display:"flex","background-color":"#0063B1"}},wa={key:0,style:{display:"flex","justify-content":"center"}},_a={key:0},Ca={__name:"App",setup(e){const t=ht(!0),n=ht(!1),o=ht(!1),r=ht(ba);var i=ht([{title:"故事",icon:"gi-spell-book",url:"story"},{title:"相册",icon:"gi-photo-camera",url:"photo"},{title:"笔记",icon:"gi-notebook",url:"note"}]);function s(a){console.log("更新页面",a),a.html==null&&a.url!=null?(console.log("页面地址：",a.url),t.value=!1,o.value=!0,setTimeout(()=>{i.value=Zn[a.url],t.value=!0},250)):a.html!=null&&a.url==null?(n.value=!0,t.value=!1,r.value=a.html):console.log("更新页面失败")}function l(){console.log("返回主页"),t.value=!1,n.value=!1,setTimeout(()=>{i.value=Zn.home,t.value=!0,o.value=!1},250)}return(a,u)=>(be(),He(me,null,[u[2]||(u[2]=te("header",{class:"container"},[te("div",{class:"content"},[te("div",{style:{display:"flex","flex-direction":"column",color:"white"}},[te("h1",{style:{"margin-bottom":"1rem","font-weight":"bold"}},"欢迎来到沙乡卫星广播站！"),te("p",null,"你好，我是世界无边（WE，World Endless）。"),te("p",null,"我打算在这里放一些现实中放不下的笔记、与一些人的讨论和一些资料。"),te("p",null,"如果大家在互联网上漫游到这里了，就进来坐坐吧。")])])],-1)),te("div",ya,[n.value?(be(),He("div",{key:0,onClick:u[0]||(u[0]=f=>{n.value=!1,t.value=!0}),style:{margin:"0.25rem 1rem",color:"white"}},"返回")):St("",!0),o.value?(be(),He("div",{key:1,onClick:l,style:{margin:"0.25rem 1rem",color:"white"}},"主页")):St("",!0)]),te("main",null,[re(Ko,{name:"slide"},{default:Qt(()=>[t.value?(be(),Bt(pa,{key:0},{default:Qt(()=>[(be(!0),He(me,null,Ls(uo(i),(f,p)=>(be(),Bt(da,{key:p,title:f.title,html:f.html,url:f.url,author:f.author,index:p+1,icon:f.icon,background_color:f.background_color,date:f.date,onDisplayHtml:s},null,8,["title","html","url","author","index","icon","background_color","date"]))),128))]),_:1})):St("",!0)]),_:1}),re(Ko,{name:"bubble"},{default:Qt(()=>[n.value?(be(),He("div",wa,[re(va,{html:r.value},null,8,["html"])])):St("",!0)]),_:1})]),n.value?(be(),He("footer",_a,u[1]||(u[1]=[te("p",null,"© 2024-2025 世界无边 All rights reserved.",-1)]))):St("",!0)],64))}},ka=Cn(Ca,[["__scopeId","data-v-2b73fc4b"]]),Ma={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;","&":"&amp;"};let Sa=0;var Ta=e=>e.replace(/[<>"&]/g,t=>Ma[t]||t),Ea=e=>e+Sa++;const ct={},Aa=e=>{const{name:t,paths:n=[],d:o,polygons:r=[],points:i}=e;o&&n.push({d:o}),i&&r.push({points:i}),ct[t]=Object.assign({},e,{paths:n,polygons:r}),ct[t].minX||(ct[t].minX=0),ct[t].minY||(ct[t].minY=0)},Oa=(...e)=>{for(const t of e)Aa(t)},za=ws({name:"OhVueIcon",props:{name:{type:String,validator:e=>!e||e in ct||(console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${e}".
Please make sure you have imported this icon before using it.`),!1)},title:String,fill:String,scale:{type:[Number,String],default:1},animation:{validator:e=>["spin","spin-pulse","wrench","ring","pulse","flash","float"].includes(e)},hover:Boolean,flip:{validator:e=>["horizontal","vertical","both"].includes(e)},speed:{validator:e=>e==="fast"||e==="slow"},label:String,inverse:Boolean},setup(e){const t=ht([]),n=Rt({outerScale:1.2,x:null,y:null}),o=Rt({width:0,height:0}),r=Ae(()=>{const E=Number(e.scale);return isNaN(E)||E<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),n.outerScale):E*n.outerScale}),i=Ae(()=>({"ov-icon":!0,"ov-inverse":e.inverse,"ov-flip-horizontal":e.flip==="horizontal","ov-flip-vertical":e.flip==="vertical","ov-flip-both":e.flip==="both","ov-spin":e.animation==="spin","ov-spin-pulse":e.animation==="spin-pulse","ov-wrench":e.animation==="wrench","ov-ring":e.animation==="ring","ov-pulse":e.animation==="pulse","ov-flash":e.animation==="flash","ov-float":e.animation==="float","ov-hover":e.hover,"ov-fast":e.speed==="fast","ov-slow":e.speed==="slow"})),s=Ae(()=>e.name?ct[e.name]:null),l=Ae(()=>s.value?`${s.value.minX} ${s.value.minY} ${s.value.width} ${s.value.height}`:`0 0 ${u.value} ${f.value}`),a=Ae(()=>{if(!s.value)return 1;const{width:E,height:P}=s.value;return Math.max(E,P)/16}),u=Ae(()=>o.width||s.value&&s.value.width/a.value*r.value||0),f=Ae(()=>o.height||s.value&&s.value.height/a.value*r.value||0),p=Ae(()=>r.value!==1&&{fontSize:r.value+"em"}),x=Ae(()=>{if(!s.value||!s.value.raw)return null;const E={};let P=s.value.raw;return P=P.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,(F,N,H)=>{const S=Ea("vat-");return E[H]=S,` id="${S}"`}),P=P.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(F,N,H,S)=>{const B=N||S;return B&&E[B]?`#${E[B]}`:F}),P}),_=Ae(()=>s.value&&s.value.attr?s.value.attr:{}),z=()=>{if(!e.name&&e.name!==null&&t.value.length===0)return void console.warn('Invalid prop: prop "name" is required.');if(s.value)return;let E=0,P=0;t.value.forEach(F=>{F.outerScale=r.value,E=Math.max(E,F.width),P=Math.max(P,F.height)}),o.width=E,o.height=P,t.value.forEach(F=>{F.x=(E-F.width)/2,F.y=(P-F.height)/2})};return ho(()=>{z()}),Ur(()=>{z()}),{...ss(n),children:t,icon:s,klass:i,style:p,width:u,height:f,box:l,attribs:_,raw:x}},created(){const e=this.$parent;e&&e.children&&e.children.push(this)},render(){const e=Object.assign({role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":!(this.label||this.title),width:this.width,height:this.height,viewBox:this.box},this.attribs);this.attribs.stroke?e.stroke=this.fill?this.fill:"currentColor":e.fill=this.fill?this.fill:"currentColor",this.x&&(e.x=this.x.toString()),this.y&&(e.y=this.y.toString());let t={class:this.klass,style:this.style};if(t=Object.assign(t,e),this.raw){const r=this.title?`<title>${Ta(this.title)}</title>${this.raw}`:this.raw;t.innerHTML=r}const n=this.title?[nn("title",this.title)]:[],o=(r,i,s)=>nn(r,{...i,key:`${r}-${s}`});return nn("svg",t,this.raw?void 0:n.concat([this.$slots.default?this.$slots.default():this.icon?[...this.icon.paths.map((r,i)=>o("path",r,i)),...this.icon.polygons.map((r,i)=>o("polygon",r,i))]:[]]))}});function xo(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}xo(`.ov-icon {
  display: inline-block;
  overflow: visible;
  vertical-align: -0.2em;
}
`);xo(`/* ---------------- spin ---------------- */
.ov-spin:not(.ov-hover),
.ov-spin.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-spin {
  animation: ov-spin 1s linear infinite;
}

.ov-spin:not(.ov-hover).ov-fast,
.ov-spin.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-spin.ov-fast {
  animation: ov-spin 0.7s linear infinite;
}

.ov-spin:not(.ov-hover).ov-slow,
.ov-spin.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-spin.ov-slow {
  animation: ov-spin 2s linear infinite;
}

/* ---------------- spin-pulse ---------------- */

.ov-spin-pulse:not(.ov-hover),
.ov-spin-pulse.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse {
  animation: ov-spin 1s infinite steps(8);
}

.ov-spin-pulse:not(.ov-hover).ov-fast,
.ov-spin-pulse.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-fast {
  animation: ov-spin 0.7s infinite steps(8);
}

.ov-spin-pulse:not(.ov-hover).ov-slow,
.ov-spin-pulse.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-slow {
  animation: ov-spin 2s infinite steps(8);
}

@keyframes ov-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* ---------------- wrench ---------------- */
.ov-wrench:not(.ov-hover),
.ov-wrench.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-wrench {
  animation: ov-wrench 2.5s ease infinite;
}

.ov-wrench:not(.ov-hover).ov-fast,
.ov-wrench.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-wrench.ov-fast {
  animation: ov-wrench 1.2s ease infinite;
}

.ov-wrench:not(.ov-hover).ov-slow,
.ov-wrench.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-wrench.ov-slow {
  animation: ov-wrench 3.7s ease infinite;
}

@keyframes ov-wrench {
  0% {
    transform: rotate(-12deg);
  }

  8% {
    transform: rotate(12deg);
  }

  10%, 28%, 30%, 48%, 50%, 68% {
    transform: rotate(24deg);
  }

  18%, 20%, 38%, 40%, 58%, 60% {
    transform: rotate(-24deg);
  }

  75%, 100% {
    transform: rotate(0deg);
  }
}

/* ---------------- ring ---------------- */
.ov-ring:not(.ov-hover),
.ov-ring.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-ring {
  animation: ov-ring 2s ease infinite;
}

.ov-ring:not(.ov-hover).ov-fast,
.ov-ring.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-ring.ov-fast {
  animation: ov-ring 1s ease infinite;
}

.ov-ring:not(.ov-hover).ov-slow,
.ov-ring.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-ring.ov-slow {
  animation: ov-ring 3s ease infinite;
}

@keyframes ov-ring {
  0% {
    transform: rotate(-15deg);
  }

  2% {
    transform: rotate(15deg);
  }

  4%, 12% {
    transform: rotate(-18deg);
  }

  6% {
    transform: rotate(18deg);
  }

  8% {
    transform: rotate(-22deg);
  }

  10% {
    transform: rotate(22deg);
  }

  12% {
    transform: rotate(-18deg);
  }

  14% {
    transform: rotate(18deg);
  }

  16% {
    transform: rotate(-12deg);
  }

  18% {
    transform: rotate(12deg);
  }

  20%, 100% {
    transform: rotate(0deg);
  }
}

/* ---------------- pulse ---------------- */
.ov-pulse:not(.ov-hover),
.ov-pulse.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-pulse {
  animation: ov-pulse 2s linear infinite;
}

.ov-pulse:not(.ov-hover).ov-fast,
.ov-pulse.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-pulse.ov-fast {
  animation: ov-pulse 1s linear infinite;
}

.ov-pulse:not(.ov-hover).ov-slow,
.ov-pulse.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-pulse.ov-slow {
  animation: ov-pulse 3s linear infinite;
}

@keyframes ov-pulse {
  0% {
    transform: scale(1.1);
  }

  50% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1.1);
  }
}

/* ---------------- flash ---------------- */
.ov-flash:not(.ov-hover),
.ov-flash.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-flash {
  animation: ov-flash 2s ease infinite;
}

.ov-flash:not(.ov-hover).ov-fast,
.ov-flash.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-flash.ov-fast {
  animation: ov-flash 1s ease infinite;
}

.ov-flash:not(.ov-hover).ov-slow,
.ov-flash.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-flash.ov-slow {
  animation: ov-flash 3s ease infinite;
}

@keyframes ov-flash {
  0%, 100%, 50%{
    opacity: 1;
  }
  25%, 75%{
    opacity: 0;
  }
}

/* ---------------- float ---------------- */
.ov-float:not(.ov-hover),
.ov-float.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-float {
  animation: ov-float 2s linear infinite;
}

.ov-float:not(.ov-hover).ov-fast,
.ov-float.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-float.ov-fast {
  animation: ov-float 1s linear infinite;
}

.ov-float:not(.ov-hover).ov-slow,
.ov-float.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-float.ov-slow {
  animation: ov-float 3s linear infinite;
}

@keyframes ov-float {
  0%, 100% {
    transform: translateY(-3px);
  }
  50% {
    transform: translateY(3px);
  }
}
`);xo(`.ov-flip-horizontal {
  transform: scale(-1, 1);
}

.ov-flip-vertical {
  transform: scale(1, -1);
}

.ov-flip-both {
  transform: scale(-1, -1);
}

.ov-inverse {
  color: #fff;
}
`);const Ia={name:"co-file",minX:-51.2,minY:-51.2,width:614.4,height:614.4,raw:'<path fill="var(--ci-primary-color, currentColor)" d="M334.627 16H48v480h424V153.373zM440 166.627V168H320V48h1.373zM80 464V48h208v152h152v264z" class="ci-primary"/>'},Fa={name:"gi-notebook",minX:-35.84,minY:-35.84,width:583.68,height:583.68,raw:'<path d="M131.3 20.35c-14.6.1-28.1 10-31.93 24.82-2.33 9.13-.55 18.4 4.13 25.84-7.67 4.26-13.69 11.53-16.03 20.66-2.32 9.13-.56 18.33 4.1 25.83a32.687 32.687 0 00-15.96 20.6c-2.34 9.1-.54 18.4 4.18 25.8-7.72 4.3-13.75 11.5-16.09 20.7-2.33 9.1-.54 18.4 4.19 25.8-7.72 4.3-13.75 11.5-16.09 20.7-2.34 9.1-.54 18.4 4.18 25.8-7.72 4.3-13.75 11.5-16.08 20.7-2.34 9.1-.54 18.4 4.18 25.8-7.72 4.3-13.75 11.5-16.09 20.7-2.35 9.2-.51 18.5 4.3 26a32.915 32.915 0 00-16.28 20.8c-4.48 17.5 6.25 35.6 23.79 40.1l.1-.2 31.71 8.2-1.47 5.7 261.56 67L374 326.5l-22.4 21.2-87.8 26.5 15.5-42.5-151.7-38.8 4.4-17.4 153.5 39.3 9.7-26.7 15.3-14.4-167-42.8 4.4-17.4 178 45.6 39.6-37.4-206.1-52.8 4.4-17.4L380.7 207l-.1.4 31.5-29.8 18.3-71.4-261.6-67.04-4.8 18.66c2.2-16.32-8.1-32.27-24.5-36.44-2.7-.7-5.5-1.04-8.2-1.03zm.3 17.99c1.2 0 2.4.19 3.5.48 8.1 2.09 12.9 10.13 10.8 18.27l17.2 4.4-11 42.81c2.2-16.35-8.2-32.26-24.5-36.43l-.6-.15c-7.8-2.34-12.2-10.15-10.2-18.07 1.7-6.61 7.3-11 13.7-11.3h1.1zm-11.9 46.51c.9 0 1.9.14 2.9.36l.6.15c8.1 2.08 12.9 10.12 10.8 18.24l17.2 4.4-11 43c2.4-16.4-8-32.6-24.4-36.7-.7-.2-1.3-.4-1.9-.5-7-2.7-10.9-10.1-9-17.62 1.7-6.97 7.9-11.45 14.8-11.29zm59.9 4.59l217 55.66-4.4 17.4-217-55.6zm-72.9 41.86h1.3c.5 0 .9 0 1.4.1.6.2 1.2.3 1.8.5l.1-.2c8.1 2.1 12.9 10.1 10.8 18.3l17.2 4.4-11 43c2.3-16.3-8.1-32.4-24.4-36.6-8.18-2.1-12.94-10.1-10.85-18.3 1.69-6.6 7.25-10.9 13.65-11.2zM465.4 152l-10.2 9.6 31.6 33.5 10.2-9.6zm-23.3 22L315.7 293.5l31.5 33.5 126.5-119.5zm-347.23 3.7c1.48 0 3 .1 4.53.5 8.1 2.1 12.9 10.1 10.8 18.3l17.2 4.4-11 43c2.3-16.4-8.1-32.4-24.44-36.6-8.14-2.1-12.9-10.1-10.82-18.3 1.7-6.6 7.32-11 13.73-11.3zm-11.91 46.5c1.48 0 3 .1 4.53.5 8.14 2.1 12.91 10.1 10.81 18.3l17.2 4.4-11 42.9c2.3-16.3-8.1-32.3-24.45-36.5-8.14-2.1-12.89-10.1-10.81-18.3 1.69-6.6 7.31-11 13.72-11.3zm-11.9 46.5c1.48 0 3 .1 4.53.5 8.13 2.1 12.89 10.1 10.81 18.3l17.2 4.3-10.94 42.8c2.16-16.3-8.25-32.1-24.51-36.3-8.14-2.1-12.9-10.1-10.82-18.3 1.7-6.6 7.32-11 13.73-11.3zm235.34 39.2L293 346.6l37.4-11.3zm-247.25 7.3c1.48 0 3 .1 4.53.5 8.14 2.1 12.9 10.1 10.81 18.3l17.21 4.3-11 43c2.1-16.2-8.3-32-24.53-36.2l.1-.3c-8.16-2.1-12.92-10.1-10.84-18.3 1.69-6.6 7.31-11 13.72-11.3zm56.95 20.3L333.2 393l-4.4 17.4-217.1-55.5zM47.18 364c1.48 0 3 .1 4.52.5 8.14 2.1 12.9 10.1 10.82 18.3l17.2 4.3-3.69 14.4-31.92-8.2v.2c-8.01-2.2-12.67-10.1-10.61-18.2 1.7-6.6 7.32-11 13.73-11.3z"/>'},Da={name:"gi-photo-camera",minX:-35.84,minY:-35.84,width:583.68,height:583.68,raw:'<path d="M41 122.496v14h62v-14zm154.73 0l-32 32H137v46h30.682C192.4 159.898 237.08 132.738 288 132.738s95.6 27.16 120.318 67.758H487v-46h-74.73l-32-32c-92.27-9-92.27-9-184.54 0zM288 150.738c-67.903 0-122.758 54.855-122.758 122.758 0 67.903 54.855 122.758 122.758 122.758 67.903 0 122.758-54.855 122.758-122.758 0-67.903-54.855-122.758-122.758-122.758zm-263 3.758v46h94v-46zm263 14.713c57.49 0 104.287 46.796 104.287 104.286S345.49 377.783 288 377.783c-57.49 0-104.287-46.797-104.287-104.287 0-57.49 46.797-104.287 104.287-104.287zm-21.787 22.042c-12.173.42-25.717 6.526-36.78 16.578-20.025 18.19-26.342 43.853-14.11 57.318 12.232 13.465 38.38 9.634 58.406-8.558 20.023-18.192 26.34-43.855 14.108-57.32-5-5.504-12.62-8.33-21.625-8.018zM25 218.496v142h94v-142zm112 0v142h40.412c-18.888-23.96-30.17-54.183-30.17-87 0-19.507 3.988-38.096 11.188-55zm280.57 0c7.2 16.904 11.188 35.493 11.188 55 0 32.817-11.282 63.04-30.17 87H487v-142zM25 378.496v14h94v-14zm112 0v14h75.89a141.492 141.492 0 01-18.536-14zm244.646 0a141.616 141.616 0 01-18.535 14H487v-14z"/>'},La={name:"gi-spell-book",minX:-35.84,minY:-35.84,width:583.68,height:583.68,raw:'<path d="M319.61 20.654c13.145 33.114 13.144 33.115-5.46 63.5 33.114-13.145 33.116-13.146 63.5 5.457-13.145-33.114-13.146-33.113 5.457-63.498-33.114 13.146-33.113 13.145-63.498-5.459zM113.024 38.021c-11.808 21.04-11.808 21.04-35.724 24.217 21.04 11.809 21.04 11.808 24.217 35.725 11.808-21.04 11.808-21.04 35.724-24.217-21.04-11.808-21.04-11.808-24.217-35.725zm76.55 56.184c-.952 50.588-.95 50.588-41.991 80.18 50.587.95 50.588.95 80.18 41.99.95-50.588.95-50.588 41.99-80.18-50.588-.95-50.588-.95-80.18-41.99zm191.177 55.885c-.046 24.127-.048 24.125-19.377 38.564 24.127.047 24.127.046 38.566 19.375.047-24.126.046-24.125 19.375-38.564-24.126-.047-24.125-.046-38.564-19.375zm-184.086 83.88a96.38 96.38 0 00-3.492.134c-18.591 1.064-41.868 8.416-77.445 22.556L76.012 433.582c78.487-20.734 132.97-21.909 170.99-4.615V247.71c-18.076-8.813-31.79-13.399-46.707-13.737a91.166 91.166 0 00-3.629-.002zm122.686 11.42a209.3 209.3 0 00-8.514.098c-12.81.417-27.638 2.215-45.84 4.522v177.135c43.565-7.825 106.85-4.2 171.244 7.566l-39.78-177.197c-35.904-8.37-56.589-11.91-77.11-12.123zm2.289 16.95c18.889.204 36.852 2.768 53.707 5.02l4.437 16.523c-23.78-3.75-65.966-4.906-92.467-.98l-.636-17.805c11.959-2.154 23.625-2.88 34.959-2.758zm-250.483 4.658L60.54 313.002h24.094l10.326-46.004H71.158zm345.881 0l39.742 177.031 2.239 9.973 22.591-.152-40.855-186.852h-23.717zm-78.857 57.82c16.993.026 33.67.791 49.146 2.223l3.524 17.174c-32.645-3.08-72.58-2.889-102.995 0l-.709-17.174c16.733-1.533 34.04-2.248 51.034-2.223zm-281.793 6.18l-6.924 30.004h24.394l6.735-30.004H56.389zm274.418 27.244c4.656.021 9.487.085 14.716.203l2.555 17.498c-19.97-.471-47.115.56-59.728 1.05l-.7-17.985c16.803-.493 29.189-.828 43.157-.766zm41.476.447c8.268.042 16.697.334 24.121.069l2.58 17.74c-8.653-.312-24.87-.83-32.064-.502l-2.807-17.234a257.25 257.25 0 018.17-.073zm-326.97 20.309l-17.985 77.928 25.035-.17 17.455-77.758H45.313zm303.164 11.848c19.608-.01 38.66.774 56.449 2.572l2.996 20.787c-34.305-4.244-85.755-7.697-119.1-3.244l-.14-17.922c20.02-1.379 40.186-2.183 59.795-2.193zm-166.606 44.05c-30.112.09-67.916 6.25-115.408 19.76l-7.22 2.053 187.759-1.27v-6.347c-16.236-9.206-37.42-14.278-65.13-14.196zm134.41 6.174c-19.63.067-37.112 1.439-51.283 4.182v10.064l177.594-1.203c-44.322-8.634-89.137-13.17-126.31-13.043zM26 475v18h460v-18H26z"/>'};Oa(Ia,Da,La,Fa);const bi=ta(ka);bi.component("v-icon",za);bi.mount("#app");
