(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xn(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const G={},vt=[],He=()=>{},yo=()=>!1,un=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Zn=e=>e.startsWith("onUpdate:"),ee=Object.assign,Qn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},xo=Object.prototype.hasOwnProperty,U=(e,t)=>xo.call(e,t),I=Array.isArray,gt=e=>hn(e)==="[object Map]",oi=e=>hn(e)==="[object Set]",$=e=>typeof e=="function",Q=e=>typeof e=="string",Ve=e=>typeof e=="symbol",Y=e=>e!==null&&typeof e=="object",ri=e=>(Y(e)||$(e))&&$(e.then)&&$(e.catch),li=Object.prototype.toString,hn=e=>li.call(e),wo=e=>hn(e).slice(8,-1),ci=e=>hn(e)==="[object Object]",es=e=>Q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ot=Xn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Co=/-(\w)/g,Ee=pn(e=>e.replace(Co,(t,n)=>n?n.toUpperCase():"")),So=/\B([A-Z])/g,ht=pn(e=>e.replace(So,"-$1").toLowerCase()),dn=pn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Sn=pn(e=>e?`on${dn(e)}`:""),Ye=(e,t)=>!Object.is(e,t),Tn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},fi=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},To=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Eo=e=>{const t=Q(e)?Number(e):NaN;return isNaN(t)?e:t};let Cs;const vn=()=>Cs||(Cs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ts(e){if(I(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=Q(s)?Io(s):ts(s);if(i)for(const o in i)t[o]=i[o]}return t}else if(Q(e)||Y(e))return e}const Ao=/;(?![^(]*\))/g,Oo=/:([^]+)/,Mo=/\/\*[^]*?\*\//g;function Io(e){const t={};return e.replace(Mo,"").split(Ao).forEach(n=>{if(n){const s=n.split(Oo);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function ns(e){let t="";if(Q(e))t=e;else if(I(e))for(let n=0;n<e.length;n++){const s=ns(e[n]);s&&(t+=s+" ")}else if(Y(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Po="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ro=Xn(Po);function ai(e){return!!e||e===""}const ui=e=>!!(e&&e.__v_isRef===!0),Xt=e=>Q(e)?e:e==null?"":I(e)||Y(e)&&(e.toString===li||!$(e.toString))?ui(e)?Xt(e.value):JSON.stringify(e,hi,2):String(e),hi=(e,t)=>ui(t)?hi(e,t.value):gt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i],o)=>(n[En(s,o)+" =>"]=i,n),{})}:oi(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>En(n))}:Ve(t)?En(t):Y(t)&&!I(t)&&!ci(t)?String(t):t,En=(e,t="")=>{var n;return Ve(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xe;class Fo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function $o(){return xe}let q;const An=new WeakSet;class pi{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xe&&xe.active&&xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,An.has(this)&&(An.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ss(this),gi(this);const t=q,n=Ie;q=this,Ie=!0;try{return this.fn()}finally{mi(this),q=t,Ie=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)os(t);this.deps=this.depsTail=void 0,Ss(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?An.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jn(this)&&this.run()}get dirty(){return jn(this)}}let di=0,Mt,It;function vi(e,t=!1){if(e.flags|=8,t){e.next=It,It=e;return}e.next=Mt,Mt=e}function ss(){di++}function is(){if(--di>0)return;if(It){let t=It;for(It=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Mt;){let t=Mt;for(Mt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function gi(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function mi(e){let t,n=e.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),os(s),No(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}e.deps=t,e.depsTail=n}function jn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(_i(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function _i(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ft))return;e.globalVersion=Ft;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!jn(e)){e.flags&=-3;return}const n=q,s=Ie;q=e,Ie=!0;try{gi(e);const i=e.fn(e._value);(t.version===0||Ye(i,e._value))&&(e._value=i,t.version++)}catch(i){throw t.version++,i}finally{q=n,Ie=s,mi(e),e.flags&=-3}}function os(e,t=!1){const{dep:n,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)os(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function No(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ie=!0;const bi=[];function Xe(){bi.push(Ie),Ie=!1}function Ze(){const e=bi.pop();Ie=e===void 0?!0:e}function Ss(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=q;q=void 0;try{t()}finally{q=n}}}let Ft=0;class Lo{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class rs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!q||!Ie||q===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==q)n=this.activeLink=new Lo(q,this),q.deps?(n.prevDep=q.depsTail,q.depsTail.nextDep=n,q.depsTail=n):q.deps=q.depsTail=n,yi(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=q.depsTail,n.nextDep=void 0,q.depsTail.nextDep=n,q.depsTail=n,q.deps===n&&(q.deps=s)}return n}trigger(t){this.version++,Ft++,this.notify(t)}notify(t){ss();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{is()}}}function yi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)yi(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const on=new WeakMap,at=Symbol(""),Bn=Symbol(""),$t=Symbol("");function ce(e,t,n){if(Ie&&q){let s=on.get(e);s||on.set(e,s=new Map);let i=s.get(n);i||(s.set(n,i=new rs),i.map=s,i.key=n),i.track()}}function Be(e,t,n,s,i,o){const r=on.get(e);if(!r){Ft++;return}const l=f=>{f&&f.trigger()};if(ss(),t==="clear")r.forEach(l);else{const f=I(e),h=f&&es(n);if(f&&n==="length"){const u=Number(s);r.forEach((p,b)=>{(b==="length"||b===$t||!Ve(b)&&b>=u)&&l(p)})}else switch((n!==void 0||r.has(void 0))&&l(r.get(n)),h&&l(r.get($t)),t){case"add":f?h&&l(r.get("length")):(l(r.get(at)),gt(e)&&l(r.get(Bn)));break;case"delete":f||(l(r.get(at)),gt(e)&&l(r.get(Bn)));break;case"set":gt(e)&&l(r.get(at));break}}is()}function Ho(e,t){const n=on.get(e);return n&&n.get(t)}function pt(e){const t=D(e);return t===e?t:(ce(t,"iterate",$t),Te(e)?t:t.map(fe))}function gn(e){return ce(e=D(e),"iterate",$t),e}const Do={__proto__:null,[Symbol.iterator](){return On(this,Symbol.iterator,fe)},concat(...e){return pt(this).concat(...e.map(t=>I(t)?pt(t):t))},entries(){return On(this,"entries",e=>(e[1]=fe(e[1]),e))},every(e,t){return De(this,"every",e,t,void 0,arguments)},filter(e,t){return De(this,"filter",e,t,n=>n.map(fe),arguments)},find(e,t){return De(this,"find",e,t,fe,arguments)},findIndex(e,t){return De(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return De(this,"findLast",e,t,fe,arguments)},findLastIndex(e,t){return De(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return De(this,"forEach",e,t,void 0,arguments)},includes(...e){return Mn(this,"includes",e)},indexOf(...e){return Mn(this,"indexOf",e)},join(e){return pt(this).join(e)},lastIndexOf(...e){return Mn(this,"lastIndexOf",e)},map(e,t){return De(this,"map",e,t,void 0,arguments)},pop(){return St(this,"pop")},push(...e){return St(this,"push",e)},reduce(e,...t){return Ts(this,"reduce",e,t)},reduceRight(e,...t){return Ts(this,"reduceRight",e,t)},shift(){return St(this,"shift")},some(e,t){return De(this,"some",e,t,void 0,arguments)},splice(...e){return St(this,"splice",e)},toReversed(){return pt(this).toReversed()},toSorted(e){return pt(this).toSorted(e)},toSpliced(...e){return pt(this).toSpliced(...e)},unshift(...e){return St(this,"unshift",e)},values(){return On(this,"values",fe)}};function On(e,t,n){const s=gn(e),i=s[t]();return s!==e&&!Te(e)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.value&&(o.value=n(o.value)),o}),i}const jo=Array.prototype;function De(e,t,n,s,i,o){const r=gn(e),l=r!==e&&!Te(e),f=r[t];if(f!==jo[t]){const p=f.apply(e,o);return l?fe(p):p}let h=n;r!==e&&(l?h=function(p,b){return n.call(this,fe(p),b,e)}:n.length>2&&(h=function(p,b){return n.call(this,p,b,e)}));const u=f.call(r,h,s);return l&&i?i(u):u}function Ts(e,t,n,s){const i=gn(e);let o=n;return i!==e&&(Te(e)?n.length>3&&(o=function(r,l,f){return n.call(this,r,l,f,e)}):o=function(r,l,f){return n.call(this,r,fe(l),f,e)}),i[t](o,...s)}function Mn(e,t,n){const s=D(e);ce(s,"iterate",$t);const i=s[t](...n);return(i===-1||i===!1)&&fs(n[0])?(n[0]=D(n[0]),s[t](...n)):i}function St(e,t,n=[]){Xe(),ss();const s=D(e)[t].apply(e,n);return is(),Ze(),s}const Bo=Xn("__proto__,__v_isRef,__isVue"),xi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ve));function Vo(e){Ve(e)||(e=String(e));const t=D(this);return ce(t,"has",e),t.hasOwnProperty(e)}class wi{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const i=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(i?o?Xo:Ei:o?Ti:Si).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const r=I(t);if(!i){let f;if(r&&(f=Do[n]))return f;if(n==="hasOwnProperty")return Vo}const l=Reflect.get(t,n,oe(t)?t:s);return(Ve(n)?xi.has(n):Bo(n))||(i||ce(t,"get",n),o)?l:oe(l)?r&&es(n)?l:l.value:Y(l)?i?Ai(l):Nt(l):l}}class Ci extends wi{constructor(t=!1){super(!1,t)}set(t,n,s,i){let o=t[n];if(!this._isShallow){const f=ut(o);if(!Te(s)&&!ut(s)&&(o=D(o),s=D(s)),!I(t)&&oe(o)&&!oe(s))return f?!1:(o.value=s,!0)}const r=I(t)&&es(n)?Number(n)<t.length:U(t,n),l=Reflect.set(t,n,s,oe(t)?t:i);return t===D(i)&&(r?Ye(s,o)&&Be(t,"set",n,s):Be(t,"add",n,s)),l}deleteProperty(t,n){const s=U(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&s&&Be(t,"delete",n,void 0),i}has(t,n){const s=Reflect.has(t,n);return(!Ve(n)||!xi.has(n))&&ce(t,"has",n),s}ownKeys(t){return ce(t,"iterate",I(t)?"length":at),Reflect.ownKeys(t)}}class Uo extends wi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const zo=new Ci,Wo=new Uo,Ko=new Ci(!0);const Vn=e=>e,qt=e=>Reflect.getPrototypeOf(e);function ko(e,t,n){return function(...s){const i=this.__v_raw,o=D(i),r=gt(o),l=e==="entries"||e===Symbol.iterator&&r,f=e==="keys"&&r,h=i[e](...s),u=n?Vn:t?Un:fe;return!t&&ce(o,"iterate",f?Bn:at),{next(){const{value:p,done:b}=h.next();return b?{value:p,done:b}:{value:l?[u(p[0]),u(p[1])]:u(p),done:b}},[Symbol.iterator](){return this}}}}function Gt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function qo(e,t){const n={get(i){const o=this.__v_raw,r=D(o),l=D(i);e||(Ye(i,l)&&ce(r,"get",i),ce(r,"get",l));const{has:f}=qt(r),h=t?Vn:e?Un:fe;if(f.call(r,i))return h(o.get(i));if(f.call(r,l))return h(o.get(l));o!==r&&o.get(i)},get size(){const i=this.__v_raw;return!e&&ce(D(i),"iterate",at),Reflect.get(i,"size",i)},has(i){const o=this.__v_raw,r=D(o),l=D(i);return e||(Ye(i,l)&&ce(r,"has",i),ce(r,"has",l)),i===l?o.has(i):o.has(i)||o.has(l)},forEach(i,o){const r=this,l=r.__v_raw,f=D(l),h=t?Vn:e?Un:fe;return!e&&ce(f,"iterate",at),l.forEach((u,p)=>i.call(o,h(u),h(p),r))}};return ee(n,e?{add:Gt("add"),set:Gt("set"),delete:Gt("delete"),clear:Gt("clear")}:{add(i){!t&&!Te(i)&&!ut(i)&&(i=D(i));const o=D(this);return qt(o).has.call(o,i)||(o.add(i),Be(o,"add",i,i)),this},set(i,o){!t&&!Te(o)&&!ut(o)&&(o=D(o));const r=D(this),{has:l,get:f}=qt(r);let h=l.call(r,i);h||(i=D(i),h=l.call(r,i));const u=f.call(r,i);return r.set(i,o),h?Ye(o,u)&&Be(r,"set",i,o):Be(r,"add",i,o),this},delete(i){const o=D(this),{has:r,get:l}=qt(o);let f=r.call(o,i);f||(i=D(i),f=r.call(o,i)),l&&l.call(o,i);const h=o.delete(i);return f&&Be(o,"delete",i,void 0),h},clear(){const i=D(this),o=i.size!==0,r=i.clear();return o&&Be(i,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=ko(i,e,t)}),n}function ls(e,t){const n=qo(e,t);return(s,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(U(n,i)&&i in s?n:s,i,o)}const Go={get:ls(!1,!1)},Yo={get:ls(!1,!0)},Jo={get:ls(!0,!1)};const Si=new WeakMap,Ti=new WeakMap,Ei=new WeakMap,Xo=new WeakMap;function Zo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qo(e){return e.__v_skip||!Object.isExtensible(e)?0:Zo(wo(e))}function Nt(e){return ut(e)?e:cs(e,!1,zo,Go,Si)}function er(e){return cs(e,!1,Ko,Yo,Ti)}function Ai(e){return cs(e,!0,Wo,Jo,Ei)}function cs(e,t,n,s,i){if(!Y(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=i.get(e);if(o)return o;const r=Qo(e);if(r===0)return e;const l=new Proxy(e,r===2?s:n);return i.set(e,l),l}function mt(e){return ut(e)?mt(e.__v_raw):!!(e&&e.__v_isReactive)}function ut(e){return!!(e&&e.__v_isReadonly)}function Te(e){return!!(e&&e.__v_isShallow)}function fs(e){return e?!!e.__v_raw:!1}function D(e){const t=e&&e.__v_raw;return t?D(t):e}function tr(e){return!U(e,"__v_skip")&&Object.isExtensible(e)&&fi(e,"__v_skip",!0),e}const fe=e=>Y(e)?Nt(e):e,Un=e=>Y(e)?Ai(e):e;function oe(e){return e?e.__v_isRef===!0:!1}function Et(e){return nr(e,!1)}function nr(e,t){return oe(e)?e:new sr(e,t)}class sr{constructor(t,n){this.dep=new rs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:D(t),this._value=n?t:fe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Te(t)||ut(t);t=s?t:D(t),Ye(t,n)&&(this._rawValue=t,this._value=s?t:fe(t),this.dep.trigger())}}function ir(e){return oe(e)?e.value:e}const or={get:(e,t,n)=>t==="__v_raw"?e:ir(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return oe(i)&&!oe(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function Oi(e){return mt(e)?e:new Proxy(e,or)}function rr(e){const t=I(e)?new Array(e.length):{};for(const n in e)t[n]=cr(e,n);return t}class lr{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Ho(D(this._object),this._key)}}function cr(e,t,n){const s=e[t];return oe(s)?s:new lr(e,t,n)}class fr{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new rs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ft-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&q!==this)return vi(this,!0),!0}get value(){const t=this.dep.track();return _i(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ar(e,t,n=!1){let s,i;return $(e)?s=e:(s=e.get,i=e.set),new fr(s,i,n)}const Yt={},rn=new WeakMap;let rt;function ur(e,t=!1,n=rt){if(n){let s=rn.get(n);s||rn.set(n,s=[]),s.push(e)}}function hr(e,t,n=G){const{immediate:s,deep:i,once:o,scheduler:r,augmentJob:l,call:f}=n,h=E=>i?E:Te(E)||i===!1||i===0?Ge(E,1):Ge(E);let u,p,b,w,P=!1,O=!1;if(oe(e)?(p=()=>e.value,P=Te(e)):mt(e)?(p=()=>h(e),P=!0):I(e)?(O=!0,P=e.some(E=>mt(E)||Te(E)),p=()=>e.map(E=>{if(oe(E))return E.value;if(mt(E))return h(E);if($(E))return f?f(E,2):E()})):$(e)?t?p=f?()=>f(e,2):e:p=()=>{if(b){Xe();try{b()}finally{Ze()}}const E=rt;rt=u;try{return f?f(e,3,[w]):e(w)}finally{rt=E}}:p=He,t&&i){const E=p,V=i===!0?1/0:i;p=()=>Ge(E(),V)}const L=$o(),F=()=>{u.stop(),L&&Qn(L.effects,u)};if(o&&t){const E=t;t=(...V)=>{E(...V),F()}}let j=O?new Array(e.length).fill(Yt):Yt;const B=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(t){const V=u.run();if(i||P||(O?V.some((ne,ue)=>Ye(ne,j[ue])):Ye(V,j))){b&&b();const ne=rt;rt=u;try{const ue=[V,j===Yt?void 0:O&&j[0]===Yt?[]:j,w];f?f(t,3,ue):t(...ue),j=V}finally{rt=ne}}}else u.run()};return l&&l(B),u=new pi(p),u.scheduler=r?()=>r(B,!1):B,w=E=>ur(E,!1,u),b=u.onStop=()=>{const E=rn.get(u);if(E){if(f)f(E,4);else for(const V of E)V();rn.delete(u)}},t?s?B(!0):j=u.run():r?r(B.bind(null,!0),!0):u.run(),F.pause=u.pause.bind(u),F.resume=u.resume.bind(u),F.stop=F,F}function Ge(e,t=1/0,n){if(t<=0||!Y(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,oe(e))Ge(e.value,t,n);else if(I(e))for(let s=0;s<e.length;s++)Ge(e[s],t,n);else if(oi(e)||gt(e))e.forEach(s=>{Ge(s,t,n)});else if(ci(e)){for(const s in e)Ge(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Ge(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zt(e,t,n,s){try{return s?e(...s):e()}catch(i){mn(i,t,n)}}function Pe(e,t,n,s){if($(e)){const i=zt(e,t,n,s);return i&&ri(i)&&i.catch(o=>{mn(o,t,n)}),i}if(I(e)){const i=[];for(let o=0;o<e.length;o++)i.push(Pe(e[o],t,n,s));return i}}function mn(e,t,n,s=!0){const i=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||G;if(t){let l=t.parent;const f=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,f,h)===!1)return}l=l.parent}if(o){Xe(),zt(o,null,10,[e,f,h]),Ze();return}}pr(e,n,i,s,r)}function pr(e,t,n,s=!0,i=!1){if(i)throw e;console.error(e)}const pe=[];let Ne=-1;const _t=[];let Ke=null,dt=0;const Mi=Promise.resolve();let ln=null;function dr(e){const t=ln||Mi;return e?t.then(this?e.bind(this):e):t}function vr(e){let t=Ne+1,n=pe.length;for(;t<n;){const s=t+n>>>1,i=pe[s],o=Lt(i);o<e||o===e&&i.flags&2?t=s+1:n=s}return t}function as(e){if(!(e.flags&1)){const t=Lt(e),n=pe[pe.length-1];!n||!(e.flags&2)&&t>=Lt(n)?pe.push(e):pe.splice(vr(t),0,e),e.flags|=1,Ii()}}function Ii(){ln||(ln=Mi.then(Ri))}function gr(e){I(e)?_t.push(...e):Ke&&e.id===-1?Ke.splice(dt+1,0,e):e.flags&1||(_t.push(e),e.flags|=1),Ii()}function Es(e,t,n=Ne+1){for(;n<pe.length;n++){const s=pe[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;pe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Pi(e){if(_t.length){const t=[...new Set(_t)].sort((n,s)=>Lt(n)-Lt(s));if(_t.length=0,Ke){Ke.push(...t);return}for(Ke=t,dt=0;dt<Ke.length;dt++){const n=Ke[dt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ke=null,dt=0}}const Lt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ri(e){try{for(Ne=0;Ne<pe.length;Ne++){const t=pe[Ne];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),zt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ne<pe.length;Ne++){const t=pe[Ne];t&&(t.flags&=-2)}Ne=-1,pe.length=0,Pi(),ln=null,(pe.length||_t.length)&&Ri()}}let ae=null,Fi=null;function cn(e){const t=ae;return ae=e,Fi=e&&e.type.__scopeId||null,t}function Zt(e,t=ae,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&Ls(-1);const o=cn(t);let r;try{r=e(...i)}finally{cn(o),s._d&&Ls(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function nt(e,t,n,s){const i=e.dirs,o=t&&t.dirs;for(let r=0;r<i.length;r++){const l=i[r];o&&(l.oldValue=o[r].value);let f=l.dir[s];f&&(Xe(),Pe(f,n,8,[e.el,l,e,t]),Ze())}}const mr=Symbol("_vte"),$i=e=>e.__isTeleport,ke=Symbol("_leaveCb"),Jt=Symbol("_enterCb");function _r(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return us(()=>{e.isMounted=!0}),zi(()=>{e.isUnmounting=!0}),e}const Ce=[Function,Array],Ni={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ce,onEnter:Ce,onAfterEnter:Ce,onEnterCancelled:Ce,onBeforeLeave:Ce,onLeave:Ce,onAfterLeave:Ce,onLeaveCancelled:Ce,onBeforeAppear:Ce,onAppear:Ce,onAfterAppear:Ce,onAppearCancelled:Ce},Li=e=>{const t=e.subTree;return t.component?Li(t.component):t},br={name:"BaseTransition",props:Ni,setup(e,{slots:t}){const n=yl(),s=_r();return()=>{const i=t.default&&ji(t.default(),!0);if(!i||!i.length)return;const o=Hi(i),r=D(e),{mode:l}=r;if(s.isLeaving)return In(o);const f=As(o);if(!f)return In(o);let h=zn(f,r,s,n,b=>h=b);f.type!==ve&&Ht(f,h);const u=n.subTree,p=u&&As(u);if(p&&p.type!==ve&&!lt(f,p)&&Li(n).type!==ve){const b=zn(p,r,s,n);if(Ht(p,b),l==="out-in"&&f.type!==ve)return s.isLeaving=!0,b.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete b.afterLeave},In(o);l==="in-out"&&f.type!==ve&&(b.delayLeave=(w,P,O)=>{const L=Di(s,p);L[String(p.key)]=p,w[ke]=()=>{P(),w[ke]=void 0,delete h.delayedLeave},h.delayedLeave=O})}return o}}};function Hi(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==ve){t=n;break}}return t}const yr=br;function Di(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function zn(e,t,n,s,i){const{appear:o,mode:r,persisted:l=!1,onBeforeEnter:f,onEnter:h,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:b,onLeave:w,onAfterLeave:P,onLeaveCancelled:O,onBeforeAppear:L,onAppear:F,onAfterAppear:j,onAppearCancelled:B}=t,E=String(e.key),V=Di(n,e),ne=(N,W)=>{N&&Pe(N,s,9,W)},ue=(N,W)=>{const X=W[1];ne(N,W),I(N)?N.every(T=>T.length<=1)&&X():N.length<=1&&X()},ge={mode:r,persisted:l,beforeEnter(N){let W=f;if(!n.isMounted)if(o)W=L||f;else return;N[ke]&&N[ke](!0);const X=V[E];X&&lt(e,X)&&X.el[ke]&&X.el[ke](),ne(W,[N])},enter(N){let W=h,X=u,T=p;if(!n.isMounted)if(o)W=F||h,X=j||u,T=B||p;else return;let J=!1;const re=N[Jt]=Qe=>{J||(J=!0,Qe?ne(T,[N]):ne(X,[N]),ge.delayedLeave&&ge.delayedLeave(),N[Jt]=void 0)};W?ue(W,[N,re]):re()},leave(N,W){const X=String(e.key);if(N[Jt]&&N[Jt](!0),n.isUnmounting)return W();ne(b,[N]);let T=!1;const J=N[ke]=re=>{T||(T=!0,W(),re?ne(O,[N]):ne(P,[N]),N[ke]=void 0,V[X]===e&&delete V[X])};V[X]=e,w?ue(w,[N,J]):J()},clone(N){const W=zn(N,t,n,s,i);return i&&i(W),W}};return ge}function In(e){if(_n(e))return e=Je(e),e.children=null,e}function As(e){if(!_n(e))return $i(e.type)&&e.children?Hi(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&$(n.default))return n.default()}}function Ht(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ht(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ji(e,t=!1,n){let s=[],i=0;for(let o=0;o<e.length;o++){let r=e[o];const l=n==null?r.key:String(n)+String(r.key!=null?r.key:o);r.type===de?(r.patchFlag&128&&i++,s=s.concat(ji(r.children,t,l))):(t||r.type!==ve)&&s.push(l!=null?Je(r,{key:l}):r)}if(i>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function xr(e,t){return $(e)?ee({name:e.name},t,{setup:e}):e}function Bi(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Wn(e,t,n,s,i=!1){if(I(e)){e.forEach((P,O)=>Wn(P,t&&(I(t)?t[O]:t),n,s,i));return}if(bt(s)&&!i)return;const o=s.shapeFlag&4?vs(s.component):s.el,r=i?null:o,{i:l,r:f}=e,h=t&&t.r,u=l.refs===G?l.refs={}:l.refs,p=l.setupState,b=D(p),w=p===G?()=>!1:P=>U(b,P);if(h!=null&&h!==f&&(Q(h)?(u[h]=null,w(h)&&(p[h]=null)):oe(h)&&(h.value=null)),$(f))zt(f,l,12,[r,u]);else{const P=Q(f),O=oe(f);if(P||O){const L=()=>{if(e.f){const F=P?w(f)?p[f]:u[f]:f.value;i?I(F)&&Qn(F,o):I(F)?F.includes(o)||F.push(o):P?(u[f]=[o],w(f)&&(p[f]=u[f])):(f.value=[o],e.k&&(u[e.k]=f.value))}else P?(u[f]=r,w(f)&&(p[f]=r)):O&&(f.value=r,e.k&&(u[e.k]=r))};r?(L.id=-1,ye(L,n)):L()}}}vn().requestIdleCallback;vn().cancelIdleCallback;const bt=e=>!!e.type.__asyncLoader,_n=e=>e.type.__isKeepAlive;function wr(e,t){Vi(e,"a",t)}function Cr(e,t){Vi(e,"da",t)}function Vi(e,t,n=ie){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(bn(t,s,n),n){let i=n.parent;for(;i&&i.parent;)_n(i.parent.vnode)&&Sr(s,t,n,i),i=i.parent}}function Sr(e,t,n,s){const i=bn(t,e,s,!0);Wi(()=>{Qn(s[t],i)},n)}function bn(e,t,n=ie,s=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{Xe();const l=Wt(n),f=Pe(t,n,e,r);return l(),Ze(),f});return s?i.unshift(o):i.push(o),o}}const Ue=e=>(t,n=ie)=>{(!Vt||e==="sp")&&bn(e,(...s)=>t(...s),n)},Tr=Ue("bm"),us=Ue("m"),Er=Ue("bu"),Ui=Ue("u"),zi=Ue("bum"),Wi=Ue("um"),Ar=Ue("sp"),Or=Ue("rtg"),Mr=Ue("rtc");function Ir(e,t=ie){bn("ec",e,t)}const Pr="components";function Rr(e,t){return $r(Pr,e,!0,t)||e}const Fr=Symbol.for("v-ndc");function $r(e,t,n=!0,s=!1){const i=ae||ie;if(i){const o=i.type;{const l=Tl(o,!1);if(l&&(l===t||l===Ee(t)||l===dn(Ee(t))))return o}const r=Os(i[e]||o[e],t)||Os(i.appContext[e],t);return!r&&s?o:r}}function Os(e,t){return e&&(e[t]||e[Ee(t)]||e[dn(Ee(t))])}function Nr(e,t,n,s){let i;const o=n,r=I(e);if(r||Q(e)){const l=r&&mt(e);let f=!1;l&&(f=!Te(e),e=gn(e)),i=new Array(e.length);for(let h=0,u=e.length;h<u;h++)i[h]=t(f?fe(e[h]):e[h],h,void 0,o)}else if(typeof e=="number"){i=new Array(e);for(let l=0;l<e;l++)i[l]=t(l+1,l,void 0,o)}else if(Y(e))if(e[Symbol.iterator])i=Array.from(e,(l,f)=>t(l,f,void 0,o));else{const l=Object.keys(e);i=new Array(l.length);for(let f=0,h=l.length;f<h;f++){const u=l[f];i[f]=t(e[u],u,f,o)}}else i=[];return i}function Ki(e,t,n={},s,i){if(ae.ce||ae.parent&&bt(ae.parent)&&ae.parent.ce)return Se(),jt(de,null,[te("slot",n,s)],64);let o=e[t];o&&o._c&&(o._d=!1),Se();const r=o&&ki(o(n)),l=n.key||r&&r.key,f=jt(de,{key:(l&&!Ve(l)?l:`_${t}`)+(!r&&s?"_fb":"")},r||[],r&&e._===1?64:-2);return o&&o._c&&(o._d=!0),f}function ki(e){return e.some(t=>Bt(t)?!(t.type===ve||t.type===de&&!ki(t.children)):!0)?e:null}const Kn=e=>e?ho(e)?vs(e):Kn(e.parent):null,Pt=ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Kn(e.parent),$root:e=>Kn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>hs(e),$forceUpdate:e=>e.f||(e.f=()=>{as(e.update)}),$nextTick:e=>e.n||(e.n=dr.bind(e.proxy)),$watch:e=>sl.bind(e)}),Pn=(e,t)=>e!==G&&!e.__isScriptSetup&&U(e,t),Lr={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:o,accessCache:r,type:l,appContext:f}=e;let h;if(t[0]!=="$"){const w=r[t];if(w!==void 0)switch(w){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return o[t]}else{if(Pn(s,t))return r[t]=1,s[t];if(i!==G&&U(i,t))return r[t]=2,i[t];if((h=e.propsOptions[0])&&U(h,t))return r[t]=3,o[t];if(n!==G&&U(n,t))return r[t]=4,n[t];kn&&(r[t]=0)}}const u=Pt[t];let p,b;if(u)return t==="$attrs"&&ce(e.attrs,"get",""),u(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==G&&U(n,t))return r[t]=4,n[t];if(b=f.config.globalProperties,U(b,t))return b[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:o}=e;return Pn(i,t)?(i[t]=n,!0):s!==G&&U(s,t)?(s[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:o}},r){let l;return!!n[r]||e!==G&&U(e,r)||Pn(t,r)||(l=o[0])&&U(l,r)||U(s,r)||U(Pt,r)||U(i.config.globalProperties,r)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ms(e){return I(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let kn=!0;function Hr(e){const t=hs(e),n=e.proxy,s=e.ctx;kn=!1,t.beforeCreate&&Is(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:r,watch:l,provide:f,inject:h,created:u,beforeMount:p,mounted:b,beforeUpdate:w,updated:P,activated:O,deactivated:L,beforeDestroy:F,beforeUnmount:j,destroyed:B,unmounted:E,render:V,renderTracked:ne,renderTriggered:ue,errorCaptured:ge,serverPrefetch:N,expose:W,inheritAttrs:X,components:T,directives:J,filters:re}=t;if(h&&Dr(h,s,null),r)for(const Z in r){const K=r[Z];$(K)&&(s[Z]=K.bind(n))}if(i){const Z=i.call(n,n);Y(Z)&&(e.data=Nt(Z))}if(kn=!0,o)for(const Z in o){const K=o[Z],et=$(K)?K.bind(n,n):$(K.get)?K.get.bind(n,n):He,Kt=!$(K)&&$(K.set)?K.set.bind(n):He,tt=Oe({get:et,set:Kt});Object.defineProperty(s,Z,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Re=>tt.value=Re})}if(l)for(const Z in l)qi(l[Z],s,n,Z);if(f){const Z=$(f)?f.call(n):f;Reflect.ownKeys(Z).forEach(K=>{Wr(K,Z[K])})}u&&Is(u,e,"c");function se(Z,K){I(K)?K.forEach(et=>Z(et.bind(n))):K&&Z(K.bind(n))}if(se(Tr,p),se(us,b),se(Er,w),se(Ui,P),se(wr,O),se(Cr,L),se(Ir,ge),se(Mr,ne),se(Or,ue),se(zi,j),se(Wi,E),se(Ar,N),I(W))if(W.length){const Z=e.exposed||(e.exposed={});W.forEach(K=>{Object.defineProperty(Z,K,{get:()=>n[K],set:et=>n[K]=et})})}else e.exposed||(e.exposed={});V&&e.render===He&&(e.render=V),X!=null&&(e.inheritAttrs=X),T&&(e.components=T),J&&(e.directives=J),N&&Bi(e)}function Dr(e,t,n=He){I(e)&&(e=qn(e));for(const s in e){const i=e[s];let o;Y(i)?"default"in i?o=Qt(i.from||s,i.default,!0):o=Qt(i.from||s):o=Qt(i),oe(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[s]=o}}function Is(e,t,n){Pe(I(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function qi(e,t,n,s){let i=s.includes(".")?lo(n,s):()=>n[s];if(Q(e)){const o=t[e];$(o)&&Fn(i,o)}else if($(e))Fn(i,e.bind(n));else if(Y(e))if(I(e))e.forEach(o=>qi(o,t,n,s));else{const o=$(e.handler)?e.handler.bind(n):t[e.handler];$(o)&&Fn(i,o,e)}}function hs(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,l=o.get(t);let f;return l?f=l:!i.length&&!n&&!s?f=t:(f={},i.length&&i.forEach(h=>fn(f,h,r,!0)),fn(f,t,r)),Y(t)&&o.set(t,f),f}function fn(e,t,n,s=!1){const{mixins:i,extends:o}=t;o&&fn(e,o,n,!0),i&&i.forEach(r=>fn(e,r,n,!0));for(const r in t)if(!(s&&r==="expose")){const l=jr[r]||n&&n[r];e[r]=l?l(e[r],t[r]):t[r]}return e}const jr={data:Ps,props:Rs,emits:Rs,methods:At,computed:At,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:At,directives:At,watch:Vr,provide:Ps,inject:Br};function Ps(e,t){return t?e?function(){return ee($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function Br(e,t){return At(qn(e),qn(t))}function qn(e){if(I(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function At(e,t){return e?ee(Object.create(null),e,t):t}function Rs(e,t){return e?I(e)&&I(t)?[...new Set([...e,...t])]:ee(Object.create(null),Ms(e),Ms(t??{})):t}function Vr(e,t){if(!e)return t;if(!t)return e;const n=ee(Object.create(null),e);for(const s in t)n[s]=he(e[s],t[s]);return n}function Gi(){return{app:null,config:{isNativeTag:yo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ur=0;function zr(e,t){return function(s,i=null){$(s)||(s=ee({},s)),i!=null&&!Y(i)&&(i=null);const o=Gi(),r=new WeakSet,l=[];let f=!1;const h=o.app={_uid:Ur++,_component:s,_props:i,_container:null,_context:o,_instance:null,version:Al,get config(){return o.config},set config(u){},use(u,...p){return r.has(u)||(u&&$(u.install)?(r.add(u),u.install(h,...p)):$(u)&&(r.add(u),u(h,...p))),h},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),h},component(u,p){return p?(o.components[u]=p,h):o.components[u]},directive(u,p){return p?(o.directives[u]=p,h):o.directives[u]},mount(u,p,b){if(!f){const w=h._ceVNode||te(s,i);return w.appContext=o,b===!0?b="svg":b===!1&&(b=void 0),p&&t?t(w,u):e(w,u,b),f=!0,h._container=u,u.__vue_app__=h,vs(w.component)}},onUnmount(u){l.push(u)},unmount(){f&&(Pe(l,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(u,p){return o.provides[u]=p,h},runWithContext(u){const p=yt;yt=h;try{return u()}finally{yt=p}}};return h}}let yt=null;function Wr(e,t){if(ie){let n=ie.provides;const s=ie.parent&&ie.parent.provides;s===n&&(n=ie.provides=Object.create(s)),n[e]=t}}function Qt(e,t,n=!1){const s=ie||ae;if(s||yt){const i=yt?yt._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&$(t)?t.call(s&&s.proxy):t}}const Yi={},Ji=()=>Object.create(Yi),Xi=e=>Object.getPrototypeOf(e)===Yi;function Kr(e,t,n,s=!1){const i={},o=Ji();e.propsDefaults=Object.create(null),Zi(e,t,i,o);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);n?e.props=s?i:er(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function kr(e,t,n,s){const{props:i,attrs:o,vnode:{patchFlag:r}}=e,l=D(i),[f]=e.propsOptions;let h=!1;if((s||r>0)&&!(r&16)){if(r&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let b=u[p];if(yn(e.emitsOptions,b))continue;const w=t[b];if(f)if(U(o,b))w!==o[b]&&(o[b]=w,h=!0);else{const P=Ee(b);i[P]=Gn(f,l,P,w,e,!1)}else w!==o[b]&&(o[b]=w,h=!0)}}}else{Zi(e,t,i,o)&&(h=!0);let u;for(const p in l)(!t||!U(t,p)&&((u=ht(p))===p||!U(t,u)))&&(f?n&&(n[p]!==void 0||n[u]!==void 0)&&(i[p]=Gn(f,l,p,void 0,e,!0)):delete i[p]);if(o!==l)for(const p in o)(!t||!U(t,p))&&(delete o[p],h=!0)}h&&Be(e.attrs,"set","")}function Zi(e,t,n,s){const[i,o]=e.propsOptions;let r=!1,l;if(t)for(let f in t){if(Ot(f))continue;const h=t[f];let u;i&&U(i,u=Ee(f))?!o||!o.includes(u)?n[u]=h:(l||(l={}))[u]=h:yn(e.emitsOptions,f)||(!(f in s)||h!==s[f])&&(s[f]=h,r=!0)}if(o){const f=D(n),h=l||G;for(let u=0;u<o.length;u++){const p=o[u];n[p]=Gn(i,f,p,h[p],e,!U(h,p))}}return r}function Gn(e,t,n,s,i,o){const r=e[n];if(r!=null){const l=U(r,"default");if(l&&s===void 0){const f=r.default;if(r.type!==Function&&!r.skipFactory&&$(f)){const{propsDefaults:h}=i;if(n in h)s=h[n];else{const u=Wt(i);s=h[n]=f.call(null,t),u()}}else s=f;i.ce&&i.ce._setProp(n,s)}r[0]&&(o&&!l?s=!1:r[1]&&(s===""||s===ht(n))&&(s=!0))}return s}const qr=new WeakMap;function Qi(e,t,n=!1){const s=n?qr:t.propsCache,i=s.get(e);if(i)return i;const o=e.props,r={},l=[];let f=!1;if(!$(e)){const u=p=>{f=!0;const[b,w]=Qi(p,t,!0);ee(r,b),w&&l.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!f)return Y(e)&&s.set(e,vt),vt;if(I(o))for(let u=0;u<o.length;u++){const p=Ee(o[u]);Fs(p)&&(r[p]=G)}else if(o)for(const u in o){const p=Ee(u);if(Fs(p)){const b=o[u],w=r[p]=I(b)||$(b)?{type:b}:ee({},b),P=w.type;let O=!1,L=!0;if(I(P))for(let F=0;F<P.length;++F){const j=P[F],B=$(j)&&j.name;if(B==="Boolean"){O=!0;break}else B==="String"&&(L=!1)}else O=$(P)&&P.name==="Boolean";w[0]=O,w[1]=L,(O||U(w,"default"))&&l.push(p)}}const h=[r,l];return Y(e)&&s.set(e,h),h}function Fs(e){return e[0]!=="$"&&!Ot(e)}const eo=e=>e[0]==="_"||e==="$stable",ps=e=>I(e)?e.map(Le):[Le(e)],Gr=(e,t,n)=>{if(t._n)return t;const s=Zt((...i)=>ps(t(...i)),n);return s._c=!1,s},to=(e,t,n)=>{const s=e._ctx;for(const i in e){if(eo(i))continue;const o=e[i];if($(o))t[i]=Gr(i,o,s);else if(o!=null){const r=ps(o);t[i]=()=>r}}},no=(e,t)=>{const n=ps(t);e.slots.default=()=>n},so=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},Yr=(e,t,n)=>{const s=e.slots=Ji();if(e.vnode.shapeFlag&32){const i=t._;i?(so(s,t,n),n&&fi(s,"_",i,!0)):to(t,s)}else t&&no(e,t)},Jr=(e,t,n)=>{const{vnode:s,slots:i}=e;let o=!0,r=G;if(s.shapeFlag&32){const l=t._;l?n&&l===1?o=!1:so(i,t,n):(o=!t.$stable,to(t,i)),r=t}else t&&(no(e,t),r={default:1});if(o)for(const l in i)!eo(l)&&r[l]==null&&delete i[l]},ye=al;function Xr(e){return Zr(e)}function Zr(e,t){const n=vn();n.__VUE__=!0;const{insert:s,remove:i,patchProp:o,createElement:r,createText:l,createComment:f,setText:h,setElementText:u,parentNode:p,nextSibling:b,setScopeId:w=He,insertStaticContent:P}=e,O=(c,a,d,m=null,v=null,g=null,C=void 0,x=null,y=!!a.dynamicChildren)=>{if(c===a)return;c&&!lt(c,a)&&(m=kt(c),Re(c,v,g,!0),c=null),a.patchFlag===-2&&(y=!1,a.dynamicChildren=null);const{type:_,ref:M,shapeFlag:S}=a;switch(_){case xn:L(c,a,d,m);break;case ve:F(c,a,d,m);break;case en:c==null&&j(a,d,m,C);break;case de:T(c,a,d,m,v,g,C,x,y);break;default:S&1?V(c,a,d,m,v,g,C,x,y):S&6?J(c,a,d,m,v,g,C,x,y):(S&64||S&128)&&_.process(c,a,d,m,v,g,C,x,y,wt)}M!=null&&v&&Wn(M,c&&c.ref,g,a||c,!a)},L=(c,a,d,m)=>{if(c==null)s(a.el=l(a.children),d,m);else{const v=a.el=c.el;a.children!==c.children&&h(v,a.children)}},F=(c,a,d,m)=>{c==null?s(a.el=f(a.children||""),d,m):a.el=c.el},j=(c,a,d,m)=>{[c.el,c.anchor]=P(c.children,a,d,m,c.el,c.anchor)},B=({el:c,anchor:a},d,m)=>{let v;for(;c&&c!==a;)v=b(c),s(c,d,m),c=v;s(a,d,m)},E=({el:c,anchor:a})=>{let d;for(;c&&c!==a;)d=b(c),i(c),c=d;i(a)},V=(c,a,d,m,v,g,C,x,y)=>{a.type==="svg"?C="svg":a.type==="math"&&(C="mathml"),c==null?ne(a,d,m,v,g,C,x,y):N(c,a,v,g,C,x,y)},ne=(c,a,d,m,v,g,C,x)=>{let y,_;const{props:M,shapeFlag:S,transition:A,dirs:R}=c;if(y=c.el=r(c.type,g,M&&M.is,M),S&8?u(y,c.children):S&16&&ge(c.children,y,null,m,v,Rn(c,g),C,x),R&&nt(c,null,m,"created"),ue(y,c,c.scopeId,C,m),M){for(const k in M)k!=="value"&&!Ot(k)&&o(y,k,null,M[k],g,m);"value"in M&&o(y,"value",null,M.value,g),(_=M.onVnodeBeforeMount)&&$e(_,m,c)}R&&nt(c,null,m,"beforeMount");const H=Qr(v,A);H&&A.beforeEnter(y),s(y,a,d),((_=M&&M.onVnodeMounted)||H||R)&&ye(()=>{_&&$e(_,m,c),H&&A.enter(y),R&&nt(c,null,m,"mounted")},v)},ue=(c,a,d,m,v)=>{if(d&&w(c,d),m)for(let g=0;g<m.length;g++)w(c,m[g]);if(v){let g=v.subTree;if(a===g||fo(g.type)&&(g.ssContent===a||g.ssFallback===a)){const C=v.vnode;ue(c,C,C.scopeId,C.slotScopeIds,v.parent)}}},ge=(c,a,d,m,v,g,C,x,y=0)=>{for(let _=y;_<c.length;_++){const M=c[_]=x?qe(c[_]):Le(c[_]);O(null,M,a,d,m,v,g,C,x)}},N=(c,a,d,m,v,g,C)=>{const x=a.el=c.el;let{patchFlag:y,dynamicChildren:_,dirs:M}=a;y|=c.patchFlag&16;const S=c.props||G,A=a.props||G;let R;if(d&&st(d,!1),(R=A.onVnodeBeforeUpdate)&&$e(R,d,a,c),M&&nt(a,c,d,"beforeUpdate"),d&&st(d,!0),(S.innerHTML&&A.innerHTML==null||S.textContent&&A.textContent==null)&&u(x,""),_?W(c.dynamicChildren,_,x,d,m,Rn(a,v),g):C||K(c,a,x,null,d,m,Rn(a,v),g,!1),y>0){if(y&16)X(x,S,A,d,v);else if(y&2&&S.class!==A.class&&o(x,"class",null,A.class,v),y&4&&o(x,"style",S.style,A.style,v),y&8){const H=a.dynamicProps;for(let k=0;k<H.length;k++){const z=H[k],me=S[z],le=A[z];(le!==me||z==="value")&&o(x,z,me,le,v,d)}}y&1&&c.children!==a.children&&u(x,a.children)}else!C&&_==null&&X(x,S,A,d,v);((R=A.onVnodeUpdated)||M)&&ye(()=>{R&&$e(R,d,a,c),M&&nt(a,c,d,"updated")},m)},W=(c,a,d,m,v,g,C)=>{for(let x=0;x<a.length;x++){const y=c[x],_=a[x],M=y.el&&(y.type===de||!lt(y,_)||y.shapeFlag&70)?p(y.el):d;O(y,_,M,null,m,v,g,C,!0)}},X=(c,a,d,m,v)=>{if(a!==d){if(a!==G)for(const g in a)!Ot(g)&&!(g in d)&&o(c,g,a[g],null,v,m);for(const g in d){if(Ot(g))continue;const C=d[g],x=a[g];C!==x&&g!=="value"&&o(c,g,x,C,v,m)}"value"in d&&o(c,"value",a.value,d.value,v)}},T=(c,a,d,m,v,g,C,x,y)=>{const _=a.el=c?c.el:l(""),M=a.anchor=c?c.anchor:l("");let{patchFlag:S,dynamicChildren:A,slotScopeIds:R}=a;R&&(x=x?x.concat(R):R),c==null?(s(_,d,m),s(M,d,m),ge(a.children||[],d,M,v,g,C,x,y)):S>0&&S&64&&A&&c.dynamicChildren?(W(c.dynamicChildren,A,d,v,g,C,x),(a.key!=null||v&&a===v.subTree)&&io(c,a,!0)):K(c,a,d,M,v,g,C,x,y)},J=(c,a,d,m,v,g,C,x,y)=>{a.slotScopeIds=x,c==null?a.shapeFlag&512?v.ctx.activate(a,d,m,C,y):re(a,d,m,v,g,C,y):Qe(c,a,y)},re=(c,a,d,m,v,g,C)=>{const x=c.component=bl(c,m,v);if(_n(c)&&(x.ctx.renderer=wt),xl(x,!1,C),x.asyncDep){if(v&&v.registerDep(x,se,C),!c.el){const y=x.subTree=te(ve);F(null,y,a,d)}}else se(x,c,a,d,v,g,C)},Qe=(c,a,d)=>{const m=a.component=c.component;if(cl(c,a,d))if(m.asyncDep&&!m.asyncResolved){Z(m,a,d);return}else m.next=a,m.update();else a.el=c.el,m.vnode=a},se=(c,a,d,m,v,g,C)=>{const x=()=>{if(c.isMounted){let{next:S,bu:A,u:R,parent:H,vnode:k}=c;{const _e=oo(c);if(_e){S&&(S.el=k.el,Z(c,S,C)),_e.asyncDep.then(()=>{c.isUnmounted||x()});return}}let z=S,me;st(c,!1),S?(S.el=k.el,Z(c,S,C)):S=k,A&&Tn(A),(me=S.props&&S.props.onVnodeBeforeUpdate)&&$e(me,H,S,k),st(c,!0);const le=$n(c),Ae=c.subTree;c.subTree=le,O(Ae,le,p(Ae.el),kt(Ae),c,v,g),S.el=le.el,z===null&&fl(c,le.el),R&&ye(R,v),(me=S.props&&S.props.onVnodeUpdated)&&ye(()=>$e(me,H,S,k),v)}else{let S;const{el:A,props:R}=a,{bm:H,m:k,parent:z,root:me,type:le}=c,Ae=bt(a);if(st(c,!1),H&&Tn(H),!Ae&&(S=R&&R.onVnodeBeforeMount)&&$e(S,z,a),st(c,!0),A&&ys){const _e=()=>{c.subTree=$n(c),ys(A,c.subTree,c,v,null)};Ae&&le.__asyncHydrate?le.__asyncHydrate(A,c,_e):_e()}else{me.ce&&me.ce._injectChildStyle(le);const _e=c.subTree=$n(c);O(null,_e,d,m,c,v,g),a.el=_e.el}if(k&&ye(k,v),!Ae&&(S=R&&R.onVnodeMounted)){const _e=a;ye(()=>$e(S,z,_e),v)}(a.shapeFlag&256||z&&bt(z.vnode)&&z.vnode.shapeFlag&256)&&c.a&&ye(c.a,v),c.isMounted=!0,a=d=m=null}};c.scope.on();const y=c.effect=new pi(x);c.scope.off();const _=c.update=y.run.bind(y),M=c.job=y.runIfDirty.bind(y);M.i=c,M.id=c.uid,y.scheduler=()=>as(M),st(c,!0),_()},Z=(c,a,d)=>{a.component=c;const m=c.vnode.props;c.vnode=a,c.next=null,kr(c,a.props,m,d),Jr(c,a.children,d),Xe(),Es(c),Ze()},K=(c,a,d,m,v,g,C,x,y=!1)=>{const _=c&&c.children,M=c?c.shapeFlag:0,S=a.children,{patchFlag:A,shapeFlag:R}=a;if(A>0){if(A&128){Kt(_,S,d,m,v,g,C,x,y);return}else if(A&256){et(_,S,d,m,v,g,C,x,y);return}}R&8?(M&16&&xt(_,v,g),S!==_&&u(d,S)):M&16?R&16?Kt(_,S,d,m,v,g,C,x,y):xt(_,v,g,!0):(M&8&&u(d,""),R&16&&ge(S,d,m,v,g,C,x,y))},et=(c,a,d,m,v,g,C,x,y)=>{c=c||vt,a=a||vt;const _=c.length,M=a.length,S=Math.min(_,M);let A;for(A=0;A<S;A++){const R=a[A]=y?qe(a[A]):Le(a[A]);O(c[A],R,d,null,v,g,C,x,y)}_>M?xt(c,v,g,!0,!1,S):ge(a,d,m,v,g,C,x,y,S)},Kt=(c,a,d,m,v,g,C,x,y)=>{let _=0;const M=a.length;let S=c.length-1,A=M-1;for(;_<=S&&_<=A;){const R=c[_],H=a[_]=y?qe(a[_]):Le(a[_]);if(lt(R,H))O(R,H,d,null,v,g,C,x,y);else break;_++}for(;_<=S&&_<=A;){const R=c[S],H=a[A]=y?qe(a[A]):Le(a[A]);if(lt(R,H))O(R,H,d,null,v,g,C,x,y);else break;S--,A--}if(_>S){if(_<=A){const R=A+1,H=R<M?a[R].el:m;for(;_<=A;)O(null,a[_]=y?qe(a[_]):Le(a[_]),d,H,v,g,C,x,y),_++}}else if(_>A)for(;_<=S;)Re(c[_],v,g,!0),_++;else{const R=_,H=_,k=new Map;for(_=H;_<=A;_++){const be=a[_]=y?qe(a[_]):Le(a[_]);be.key!=null&&k.set(be.key,_)}let z,me=0;const le=A-H+1;let Ae=!1,_e=0;const Ct=new Array(le);for(_=0;_<le;_++)Ct[_]=0;for(_=R;_<=S;_++){const be=c[_];if(me>=le){Re(be,v,g,!0);continue}let Fe;if(be.key!=null)Fe=k.get(be.key);else for(z=H;z<=A;z++)if(Ct[z-H]===0&&lt(be,a[z])){Fe=z;break}Fe===void 0?Re(be,v,g,!0):(Ct[Fe-H]=_+1,Fe>=_e?_e=Fe:Ae=!0,O(be,a[Fe],d,null,v,g,C,x,y),me++)}const xs=Ae?el(Ct):vt;for(z=xs.length-1,_=le-1;_>=0;_--){const be=H+_,Fe=a[be],ws=be+1<M?a[be+1].el:m;Ct[_]===0?O(null,Fe,d,ws,v,g,C,x,y):Ae&&(z<0||_!==xs[z]?tt(Fe,d,ws,2):z--)}}},tt=(c,a,d,m,v=null)=>{const{el:g,type:C,transition:x,children:y,shapeFlag:_}=c;if(_&6){tt(c.component.subTree,a,d,m);return}if(_&128){c.suspense.move(a,d,m);return}if(_&64){C.move(c,a,d,wt);return}if(C===de){s(g,a,d);for(let S=0;S<y.length;S++)tt(y[S],a,d,m);s(c.anchor,a,d);return}if(C===en){B(c,a,d);return}if(m!==2&&_&1&&x)if(m===0)x.beforeEnter(g),s(g,a,d),ye(()=>x.enter(g),v);else{const{leave:S,delayLeave:A,afterLeave:R}=x,H=()=>s(g,a,d),k=()=>{S(g,()=>{H(),R&&R()})};A?A(g,H,k):k()}else s(g,a,d)},Re=(c,a,d,m=!1,v=!1)=>{const{type:g,props:C,ref:x,children:y,dynamicChildren:_,shapeFlag:M,patchFlag:S,dirs:A,cacheIndex:R}=c;if(S===-2&&(v=!1),x!=null&&Wn(x,null,d,c,!0),R!=null&&(a.renderCache[R]=void 0),M&256){a.ctx.deactivate(c);return}const H=M&1&&A,k=!bt(c);let z;if(k&&(z=C&&C.onVnodeBeforeUnmount)&&$e(z,a,c),M&6)bo(c.component,d,m);else{if(M&128){c.suspense.unmount(d,m);return}H&&nt(c,null,a,"beforeUnmount"),M&64?c.type.remove(c,a,d,wt,m):_&&!_.hasOnce&&(g!==de||S>0&&S&64)?xt(_,a,d,!1,!0):(g===de&&S&384||!v&&M&16)&&xt(y,a,d),m&&ms(c)}(k&&(z=C&&C.onVnodeUnmounted)||H)&&ye(()=>{z&&$e(z,a,c),H&&nt(c,null,a,"unmounted")},d)},ms=c=>{const{type:a,el:d,anchor:m,transition:v}=c;if(a===de){_o(d,m);return}if(a===en){E(c);return}const g=()=>{i(d),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:C,delayLeave:x}=v,y=()=>C(d,g);x?x(c.el,g,y):y()}else g()},_o=(c,a)=>{let d;for(;c!==a;)d=b(c),i(c),c=d;i(a)},bo=(c,a,d)=>{const{bum:m,scope:v,job:g,subTree:C,um:x,m:y,a:_}=c;$s(y),$s(_),m&&Tn(m),v.stop(),g&&(g.flags|=8,Re(C,c,a,d)),x&&ye(x,a),ye(()=>{c.isUnmounted=!0},a),a&&a.pendingBranch&&!a.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===a.pendingId&&(a.deps--,a.deps===0&&a.resolve())},xt=(c,a,d,m=!1,v=!1,g=0)=>{for(let C=g;C<c.length;C++)Re(c[C],a,d,m,v)},kt=c=>{if(c.shapeFlag&6)return kt(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const a=b(c.anchor||c.el),d=a&&a[mr];return d?b(d):a};let Cn=!1;const _s=(c,a,d)=>{c==null?a._vnode&&Re(a._vnode,null,null,!0):O(a._vnode||null,c,a,null,null,null,d),a._vnode=c,Cn||(Cn=!0,Es(),Pi(),Cn=!1)},wt={p:O,um:Re,m:tt,r:ms,mt:re,mc:ge,pc:K,pbc:W,n:kt,o:e};let bs,ys;return{render:_s,hydrate:bs,createApp:zr(_s,bs)}}function Rn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function st({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Qr(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function io(e,t,n=!1){const s=e.children,i=t.children;if(I(s)&&I(i))for(let o=0;o<s.length;o++){const r=s[o];let l=i[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[o]=qe(i[o]),l.el=r.el),!n&&l.patchFlag!==-2&&io(r,l)),l.type===xn&&(l.el=r.el)}}function el(e){const t=e.slice(),n=[0];let s,i,o,r,l;const f=e.length;for(s=0;s<f;s++){const h=e[s];if(h!==0){if(i=n[n.length-1],e[i]<h){t[s]=i,n.push(s);continue}for(o=0,r=n.length-1;o<r;)l=o+r>>1,e[n[l]]<h?o=l+1:r=l;h<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,r=n[o-1];o-- >0;)n[o]=r,r=t[r];return n}function oo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:oo(t)}function $s(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const tl=Symbol.for("v-scx"),nl=()=>Qt(tl);function Fn(e,t,n){return ro(e,t,n)}function ro(e,t,n=G){const{immediate:s,deep:i,flush:o,once:r}=n,l=ee({},n),f=t&&s||!t&&o!=="post";let h;if(Vt){if(o==="sync"){const w=nl();h=w.__watcherHandles||(w.__watcherHandles=[])}else if(!f){const w=()=>{};return w.stop=He,w.resume=He,w.pause=He,w}}const u=ie;l.call=(w,P,O)=>Pe(w,u,P,O);let p=!1;o==="post"?l.scheduler=w=>{ye(w,u&&u.suspense)}:o!=="sync"&&(p=!0,l.scheduler=(w,P)=>{P?w():as(w)}),l.augmentJob=w=>{t&&(w.flags|=4),p&&(w.flags|=2,u&&(w.id=u.uid,w.i=u))};const b=hr(e,t,l);return Vt&&(h?h.push(b):f&&b()),b}function sl(e,t,n){const s=this.proxy,i=Q(e)?e.includes(".")?lo(s,e):()=>s[e]:e.bind(s,s);let o;$(t)?o=t:(o=t.handler,n=t);const r=Wt(this),l=ro(i,o.bind(s),n);return r(),l}function lo(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const il=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ee(t)}Modifiers`]||e[`${ht(t)}Modifiers`];function ol(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||G;let i=n;const o=t.startsWith("update:"),r=o&&il(s,t.slice(7));r&&(r.trim&&(i=n.map(u=>Q(u)?u.trim():u)),r.number&&(i=n.map(To)));let l,f=s[l=Sn(t)]||s[l=Sn(Ee(t))];!f&&o&&(f=s[l=Sn(ht(t))]),f&&Pe(f,e,6,i);const h=s[l+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Pe(h,e,6,i)}}function co(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const o=e.emits;let r={},l=!1;if(!$(e)){const f=h=>{const u=co(h,t,!0);u&&(l=!0,ee(r,u))};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}return!o&&!l?(Y(e)&&s.set(e,null),null):(I(o)?o.forEach(f=>r[f]=null):ee(r,o),Y(e)&&s.set(e,r),r)}function yn(e,t){return!e||!un(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,ht(t))||U(e,t))}function $n(e){const{type:t,vnode:n,proxy:s,withProxy:i,propsOptions:[o],slots:r,attrs:l,emit:f,render:h,renderCache:u,props:p,data:b,setupState:w,ctx:P,inheritAttrs:O}=e,L=cn(e);let F,j;try{if(n.shapeFlag&4){const E=i||s,V=E;F=Le(h.call(V,E,u,p,w,b,P)),j=l}else{const E=t;F=Le(E.length>1?E(p,{attrs:l,slots:r,emit:f}):E(p,null)),j=t.props?l:rl(l)}}catch(E){Rt.length=0,mn(E,e,1),F=te(ve)}let B=F;if(j&&O!==!1){const E=Object.keys(j),{shapeFlag:V}=B;E.length&&V&7&&(o&&E.some(Zn)&&(j=ll(j,o)),B=Je(B,j,!1,!0))}return n.dirs&&(B=Je(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&Ht(B,n.transition),F=B,cn(L),F}const rl=e=>{let t;for(const n in e)(n==="class"||n==="style"||un(n))&&((t||(t={}))[n]=e[n]);return t},ll=(e,t)=>{const n={};for(const s in e)(!Zn(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function cl(e,t,n){const{props:s,children:i,component:o}=e,{props:r,children:l,patchFlag:f}=t,h=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&f>=0){if(f&1024)return!0;if(f&16)return s?Ns(s,r,h):!!r;if(f&8){const u=t.dynamicProps;for(let p=0;p<u.length;p++){const b=u[p];if(r[b]!==s[b]&&!yn(h,b))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===r?!1:s?r?Ns(s,r,h):!0:!!r;return!1}function Ns(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const o=s[i];if(t[o]!==e[o]&&!yn(n,o))return!0}return!1}function fl({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const fo=e=>e.__isSuspense;function al(e,t){t&&t.pendingBranch?I(e)?t.effects.push(...e):t.effects.push(e):gr(e)}const de=Symbol.for("v-fgt"),xn=Symbol.for("v-txt"),ve=Symbol.for("v-cmt"),en=Symbol.for("v-stc"),Rt=[];let we=null;function Se(e=!1){Rt.push(we=e?null:[])}function ul(){Rt.pop(),we=Rt[Rt.length-1]||null}let Dt=1;function Ls(e){Dt+=e,e<0&&we&&(we.hasOnce=!0)}function ao(e){return e.dynamicChildren=Dt>0?we||vt:null,ul(),Dt>0&&we&&we.push(e),e}function ft(e,t,n,s,i,o){return ao(Me(e,t,n,s,i,o,!0))}function jt(e,t,n,s,i){return ao(te(e,t,n,s,i,!0))}function Bt(e){return e?e.__v_isVNode===!0:!1}function lt(e,t){return e.type===t.type&&e.key===t.key}const uo=({key:e})=>e??null,tn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Q(e)||oe(e)||$(e)?{i:ae,r:e,k:t,f:!!n}:e:null);function Me(e,t=null,n=null,s=0,i=null,o=e===de?0:1,r=!1,l=!1){const f={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&uo(t),ref:t&&tn(t),scopeId:Fi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ae};return l?(ds(f,n),o&128&&e.normalize(f)):n&&(f.shapeFlag|=Q(n)?8:16),Dt>0&&!r&&we&&(f.patchFlag>0||o&6)&&f.patchFlag!==32&&we.push(f),f}const te=hl;function hl(e,t=null,n=null,s=0,i=null,o=!1){if((!e||e===Fr)&&(e=ve),Bt(e)){const l=Je(e,t,!0);return n&&ds(l,n),Dt>0&&!o&&we&&(l.shapeFlag&6?we[we.indexOf(e)]=l:we.push(l)),l.patchFlag=-2,l}if(El(e)&&(e=e.__vccOpts),t){t=pl(t);let{class:l,style:f}=t;l&&!Q(l)&&(t.class=ns(l)),Y(f)&&(fs(f)&&!I(f)&&(f=ee({},f)),t.style=ts(f))}const r=Q(e)?1:fo(e)?128:$i(e)?64:Y(e)?4:$(e)?2:0;return Me(e,t,n,s,i,r,o,!0)}function pl(e){return e?fs(e)||Xi(e)?ee({},e):e:null}function Je(e,t,n=!1,s=!1){const{props:i,ref:o,patchFlag:r,children:l,transition:f}=e,h=t?gl(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&uo(h),ref:t&&t.ref?n&&o?I(o)?o.concat(tn(t)):[o,tn(t)]:tn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==de?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:f,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Je(e.ssContent),ssFallback:e.ssFallback&&Je(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return f&&s&&Ht(u,f.clone(u)),u}function dl(e=" ",t=0){return te(xn,null,e,t)}function vl(e,t){const n=te(en,null,e);return n.staticCount=t,n}function Nn(e="",t=!1){return t?(Se(),jt(ve,null,e)):te(ve,null,e)}function Le(e){return e==null||typeof e=="boolean"?te(ve):I(e)?te(de,null,e.slice()):Bt(e)?qe(e):te(xn,null,String(e))}function qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Je(e)}function ds(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(I(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),ds(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Xi(t)?t._ctx=ae:i===3&&ae&&(ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:ae},n=32):(t=String(t),s&64?(n=16,t=[dl(t)]):n=8);e.children=t,e.shapeFlag|=n}function gl(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=ns([t.class,s.class]));else if(i==="style")t.style=ts([t.style,s.style]);else if(un(i)){const o=t[i],r=s[i];r&&o!==r&&!(I(o)&&o.includes(r))&&(t[i]=o?[].concat(o,r):r)}else i!==""&&(t[i]=s[i])}return t}function $e(e,t,n,s=null){Pe(e,t,7,[n,s])}const ml=Gi();let _l=0;function bl(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||ml,o={uid:_l++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qi(s,i),emitsOptions:co(s,i),emit:null,emitted:null,propsDefaults:G,inheritAttrs:s.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=ol.bind(null,o),e.ce&&e.ce(o),o}let ie=null;const yl=()=>ie||ae;let an,Yn;{const e=vn(),t=(n,s)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(s),o=>{i.length>1?i.forEach(r=>r(o)):i[0](o)}};an=t("__VUE_INSTANCE_SETTERS__",n=>ie=n),Yn=t("__VUE_SSR_SETTERS__",n=>Vt=n)}const Wt=e=>{const t=ie;return an(e),e.scope.on(),()=>{e.scope.off(),an(t)}},Hs=()=>{ie&&ie.scope.off(),an(null)};function ho(e){return e.vnode.shapeFlag&4}let Vt=!1;function xl(e,t=!1,n=!1){t&&Yn(t);const{props:s,children:i}=e.vnode,o=ho(e);Kr(e,s,o,t),Yr(e,i,n);const r=o?wl(e,t):void 0;return t&&Yn(!1),r}function wl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Lr);const{setup:s}=n;if(s){Xe();const i=e.setupContext=s.length>1?Sl(e):null,o=Wt(e),r=zt(s,e,0,[e.props,i]),l=ri(r);if(Ze(),o(),(l||e.sp)&&!bt(e)&&Bi(e),l){if(r.then(Hs,Hs),t)return r.then(f=>{Ds(e,f,t)}).catch(f=>{mn(f,e,0)});e.asyncDep=r}else Ds(e,r,t)}else po(e,t)}function Ds(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Y(t)&&(e.setupState=Oi(t)),po(e,n)}let js;function po(e,t,n){const s=e.type;if(!e.render){if(!t&&js&&!s.render){const i=s.template||hs(e).template;if(i){const{isCustomElement:o,compilerOptions:r}=e.appContext.config,{delimiters:l,compilerOptions:f}=s,h=ee(ee({isCustomElement:o,delimiters:l},r),f);s.render=js(i,h)}}e.render=s.render||He}{const i=Wt(e);Xe();try{Hr(e)}finally{Ze(),i()}}}const Cl={get(e,t){return ce(e,"get",""),e[t]}};function Sl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Cl),slots:e.slots,emit:e.emit,expose:t}}function vs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Oi(tr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Pt)return Pt[n](e)},has(t,n){return n in t||n in Pt}})):e.proxy}function Tl(e,t=!0){return $(e)?e.displayName||e.name:e.name||t&&e.__name}function El(e){return $(e)&&"__vccOpts"in e}const Oe=(e,t)=>ar(e,t,Vt);function nn(e,t,n){const s=arguments.length;return s===2?Y(t)&&!I(t)?Bt(t)?te(e,null,[t]):te(e,t):te(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Bt(n)&&(n=[n]),te(e,t,n))}const Al="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jn;const Bs=typeof window<"u"&&window.trustedTypes;if(Bs)try{Jn=Bs.createPolicy("vue",{createHTML:e=>e})}catch{}const vo=Jn?e=>Jn.createHTML(e):e=>e,Ol="http://www.w3.org/2000/svg",Ml="http://www.w3.org/1998/Math/MathML",je=typeof document<"u"?document:null,Vs=je&&je.createElement("template"),Il={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t==="svg"?je.createElementNS(Ol,e):t==="mathml"?je.createElementNS(Ml,e):n?je.createElement(e,{is:n}):je.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>je.createTextNode(e),createComment:e=>je.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>je.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,o){const r=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{Vs.innerHTML=vo(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=Vs.content;if(s==="svg"||s==="mathml"){const f=l.firstChild;for(;f.firstChild;)l.appendChild(f.firstChild);l.removeChild(f)}t.insertBefore(l,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ze="transition",Tt="animation",Ut=Symbol("_vtc"),go={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Pl=ee({},Ni,go),Rl=e=>(e.displayName="Transition",e.props=Pl,e),Us=Rl((e,{slots:t})=>nn(yr,Fl(e),t)),it=(e,t=[])=>{I(e)?e.forEach(n=>n(...t)):e&&e(...t)},zs=e=>e?I(e)?e.some(t=>t.length>1):e.length>1:!1;function Fl(e){const t={};for(const T in e)T in go||(t[T]=e[T]);if(e.css===!1)return t;const{name:n="v",type:s,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:f=o,appearActiveClass:h=r,appearToClass:u=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:b=`${n}-leave-active`,leaveToClass:w=`${n}-leave-to`}=e,P=$l(i),O=P&&P[0],L=P&&P[1],{onBeforeEnter:F,onEnter:j,onEnterCancelled:B,onLeave:E,onLeaveCancelled:V,onBeforeAppear:ne=F,onAppear:ue=j,onAppearCancelled:ge=B}=t,N=(T,J,re)=>{ot(T,J?u:l),ot(T,J?h:r),re&&re()},W=(T,J)=>{T._isLeaving=!1,ot(T,p),ot(T,w),ot(T,b),J&&J()},X=T=>(J,re)=>{const Qe=T?ue:j,se=()=>N(J,T,re);it(Qe,[J,se]),Ws(()=>{ot(J,T?f:o),We(J,T?u:l),zs(Qe)||Ks(J,s,O,se)})};return ee(t,{onBeforeEnter(T){it(F,[T]),We(T,o),We(T,r)},onBeforeAppear(T){it(ne,[T]),We(T,f),We(T,h)},onEnter:X(!1),onAppear:X(!0),onLeave(T,J){T._isLeaving=!0;const re=()=>W(T,J);We(T,p),We(T,b),Hl(),Ws(()=>{T._isLeaving&&(ot(T,p),We(T,w),zs(E)||Ks(T,s,L,re))}),it(E,[T,re])},onEnterCancelled(T){N(T,!1),it(B,[T])},onAppearCancelled(T){N(T,!0),it(ge,[T])},onLeaveCancelled(T){W(T),it(V,[T])}})}function $l(e){if(e==null)return null;if(Y(e))return[Ln(e.enter),Ln(e.leave)];{const t=Ln(e);return[t,t]}}function Ln(e){return Eo(e)}function We(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Ut]||(e[Ut]=new Set)).add(t)}function ot(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Ut];n&&(n.delete(t),n.size||(e[Ut]=void 0))}function Ws(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Nl=0;function Ks(e,t,n,s){const i=e._endId=++Nl,o=()=>{i===e._endId&&s()};if(n!=null)return setTimeout(o,n);const{type:r,timeout:l,propCount:f}=Ll(e,t);if(!r)return s();const h=r+"end";let u=0;const p=()=>{e.removeEventListener(h,b),o()},b=w=>{w.target===e&&++u>=f&&p()};setTimeout(()=>{u<f&&p()},l+1),e.addEventListener(h,b)}function Ll(e,t){const n=window.getComputedStyle(e),s=P=>(n[P]||"").split(", "),i=s(`${ze}Delay`),o=s(`${ze}Duration`),r=ks(i,o),l=s(`${Tt}Delay`),f=s(`${Tt}Duration`),h=ks(l,f);let u=null,p=0,b=0;t===ze?r>0&&(u=ze,p=r,b=o.length):t===Tt?h>0&&(u=Tt,p=h,b=f.length):(p=Math.max(r,h),u=p>0?r>h?ze:Tt:null,b=u?u===ze?o.length:f.length:0);const w=u===ze&&/\b(transform|all)(,|$)/.test(s(`${ze}Property`).toString());return{type:u,timeout:p,propCount:b,hasTransform:w}}function ks(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>qs(n)+qs(e[s])))}function qs(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Hl(){return document.body.offsetHeight}function Dl(e,t,n){const s=e[Ut];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Gs=Symbol("_vod"),jl=Symbol("_vsh"),Bl=Symbol(""),Vl=/(^|;)\s*display\s*:/;function Ul(e,t,n){const s=e.style,i=Q(n);let o=!1;if(n&&!i){if(t)if(Q(t))for(const r of t.split(";")){const l=r.slice(0,r.indexOf(":")).trim();n[l]==null&&sn(s,l,"")}else for(const r in t)n[r]==null&&sn(s,r,"");for(const r in n)r==="display"&&(o=!0),sn(s,r,n[r])}else if(i){if(t!==n){const r=s[Bl];r&&(n+=";"+r),s.cssText=n,o=Vl.test(n)}}else t&&e.removeAttribute("style");Gs in e&&(e[Gs]=o?s.display:"",e[jl]&&(s.display="none"))}const Ys=/\s*!important$/;function sn(e,t,n){if(I(n))n.forEach(s=>sn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=zl(e,t);Ys.test(n)?e.setProperty(ht(s),n.replace(Ys,""),"important"):e[s]=n}}const Js=["Webkit","Moz","ms"],Hn={};function zl(e,t){const n=Hn[t];if(n)return n;let s=Ee(t);if(s!=="filter"&&s in e)return Hn[t]=s;s=dn(s);for(let i=0;i<Js.length;i++){const o=Js[i]+s;if(o in e)return Hn[t]=o}return t}const Xs="http://www.w3.org/1999/xlink";function Zs(e,t,n,s,i,o=Ro(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Xs,t.slice(6,t.length)):e.setAttributeNS(Xs,t,n):n==null||o&&!ai(n)?e.removeAttribute(t):e.setAttribute(t,o?"":Ve(n)?String(n):n)}function Qs(e,t,n,s,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?vo(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?e.getAttribute("value")||"":e.value,f=n==null?e.type==="checkbox"?"on":"":String(n);(l!==f||!("_value"in e))&&(e.value=f),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ai(n):n==null&&l==="string"?(n="",r=!0):l==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(i||t)}function Wl(e,t,n,s){e.addEventListener(t,n,s)}function Kl(e,t,n,s){e.removeEventListener(t,n,s)}const ei=Symbol("_vei");function kl(e,t,n,s,i=null){const o=e[ei]||(e[ei]={}),r=o[t];if(s&&r)r.value=s;else{const[l,f]=ql(t);if(s){const h=o[t]=Jl(s,i);Wl(e,l,h,f)}else r&&(Kl(e,l,r,f),o[t]=void 0)}}const ti=/(?:Once|Passive|Capture)$/;function ql(e){let t;if(ti.test(e)){t={};let s;for(;s=e.match(ti);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ht(e.slice(2)),t]}let Dn=0;const Gl=Promise.resolve(),Yl=()=>Dn||(Gl.then(()=>Dn=0),Dn=Date.now());function Jl(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Pe(Xl(s,n.value),t,5,[s])};return n.value=e,n.attached=Yl(),n}function Xl(e,t){if(I(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const ni=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Zl=(e,t,n,s,i,o)=>{const r=i==="svg";t==="class"?Dl(e,s,r):t==="style"?Ul(e,n,s):un(t)?Zn(t)||kl(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ql(e,t,s,r))?(Qs(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Zs(e,t,s,r,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Q(s))?Qs(e,Ee(t),s,o,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Zs(e,t,s,r))};function Ql(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&ni(t)&&$(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ni(t)&&Q(n)?!1:t in e}const ec=ee({patchProp:Zl},Il);let si;function tc(){return si||(si=Xr(ec))}const nc=(...e)=>{const t=tc().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=ic(s);if(!i)return;const o=t._component;!$(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const r=n(i,!1,sc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},t};function sc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ic(e){return Q(e)?document.querySelector(e):e}const wn=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},oc={class:"card-content"},rc={class:"title"},lc={class:"icon"},cc={class:"foot"},fc={class:"push"},ac={__name:"Card",props:{title:String,background_color:String,scr:String,url:String,html:String,index:Number,author:String,icon:String},emits:["display-html"],setup(e,{emit:t}){const n=e,s=t;function i(){s("display-html",n.html)}return(o,r)=>{const l=Rr("v-icon");return Se(),ft("div",{class:"card",onClick:i},[Me("div",oc,[Me("div",rc,Xt(e.title),1),Me("div",lc,[te(l,{name:e.icon,scale:"4"},null,8,["name"])])]),Me("div",cc,[Me("div",null,Xt(e.index),1),Me("div",fc,Xt(e.author),1)])])}}},uc=wn(ac,[["__scopeId","data-v-669c28d6"]]),hc={class:"card-container"},pc={__name:"CardGroup",setup(e){return(t,n)=>(Se(),ft("div",hc,[Ki(t.$slots,"default",{},void 0)]))}},dc=wn(pc,[["__scopeId","data-v-9af64a47"]]),vc={class:"article"},gc=["innerHTML"],mc={__name:"Article",props:{html:String},setup(e){return(t,n)=>(Se(),ft("div",vc,[Ki(t.$slots,"default",{},void 0),Me("div",{innerHTML:e.html},null,8,gc)]))}},_c=wn(mc,[["__scopeId","data-v-70f840d6"]]),ii=`<!doctype html>
<html>
<head>
<meta charset='UTF-8'><meta name='viewport' content='width=device-width initial-scale=1'>
<title></title></head>
<body><h1>人物轶事</h1>
<h2>褚赓 / 潘延</h2>
<h3>异世界同学</h3>
<p>【似乎是潘延的同学以第三方的视角叙述的潘延的故事，我借鉴了我喜欢的一个动漫的名字。】</p>
<p>在他醒来之后，我还是看了他，他变得很瘦，精神状态有点不好，蒙着被子，然后只留了一双眼睛观察外面，他看是我，想老半天才想起我是谁，也就很戏谑的笑了笑说，你知道吗？这15天我魂穿明日方舟的世界啊。他跟我是玩同一款游戏，我们还打算高考出来之后到沪市那边疯玩。他眨一眨眼，你就当听一个同人小说吧，介意我把那边的事情就讲给你听吗？</p>
<p>他讲了很多东西，时不时会彪出一些其他地方的方言，他说他出生点在彭棣湖旁边（鄱阳湖），家里是开米铺的，跟随恩师（原状元）学习，科举非常顺利，一直到达殿试，拿到一个不高不低的成绩，原本以为这样子可以到达人生巅峰了。</p>
<p>但是凡事都会有意外嘛。【“不出意外的出意外了”】</p>
<p>他说也不知道怎么回事，被特务机关盯上了，竟然是他说“岁“的事情，在某个夜黑风高的晚上，在某个灯火摇曳的房子里，某人对某个游戏人物发癫被发现了，果不其然，刚进入翰林就被赶到参政院了。</p>
<p>参政院的性质大家都知道，他那位老师就是因为进入参政院，一气之下，然后回乡教书了。</p>
<p>之后嘛发生大灾，让参议院去办。</p>
<p>他当时年轻，选的是最难的，也就是下江的堰塞湖排海问题，不辱使命搞定了，他与他的小伙伴可以说是与那新生的行政区绑定在一起了。</p>
<p>之后呢还真的娶到一个富婆（指他的一位世家子弟出身的同事的姐姐）。</p>
<p>之后呢就不详细说了，办了很多事，解决很多问题，有了一儿一女，安然地到了72岁，但是一道召令去和整合运动的人谈判，很“意外”被噶了。</p>
<p>他苦笑了一声，不再说话了。</p>
<p>他讲了很多，但也很少，因为很多细节他没讲，比如说他晚年有个养女，他挺喜欢他的<strong>养女</strong>【详见“<strong>褚赓与养女</strong>”】，但是他在他的叙述上很少，只是说非常聪明而且上进的孩子。我问他龙门的事情他是怎样的，他摇摇头：“我人微言轻，不像一些同人文里一句话就可以让魏总督上上心，塔露拉的悲剧我没有能力阻止，那时候我们正在忙恢复城乡发展正常和未来的规划。”</p>
<p>当我问他关于源石的问题时，他看着我，眼神很奇怪，感觉就是一个长辈在和自己说话。</p>
<p>“关于这个问题，我想已经回答很多次了。”他咳了咳，“抱歉，习惯这么说了，源石病只是个病，是可以传染的，感染者只是被感染了，他们只是生病了。”他的表情很微妙。</p>
<p>“你会……”</p>
<p>“我不会！‘法术’去死。”</p>
<p>高考成绩很快出来了，他竟然比春考多了100分（浙江省高考分两次，他春考分数过一本线30分），他的父母很开心，我们这些朋友也很开心，他也只是静悄悄地出院，在乡下老家宅着。</p>
<p>填完志愿后，他给我发信息，说他要散散心，我也没办法，可以呀，没问题，要去哪？沪城吧。好呀，那边还有个漫展，我们去看看吧。好，我看那边还有嘉城，那边还有一个湖啊，顺便看看吧，如果你还有时间，我们可以去趟苏北吗？我没有拒绝。</p>
<p>说实话，当我们到嘉城时，那个标志性的地方，他好像“失踪”了，不是真正的失踪，而是有些时候见不到人。上火车时即便不在同一个车厢，尚且能看到他盯着自己的二代身份证发呆，到了那个湖之后，他明明和我们在一起的，但是有一种悄无声息的样子。在景区的游船上我看到他眼神闪过一丝不可名状，再一次看到他时已经在宾馆了，在看漫展时，他又一次被我忽视了，漫展是很好玩的，他也这么说的。</p>
<p>“真奇怪，你说cos服还有护袖吗？”</p>
<p>“啊哈哈……，可能是自己搞的吧。”</p>
<p>“他”打完字后，看着自己的护袖，异瞳里说不出来的忧伤，“（金陵雅言）“，“他“已经是她了。<br>【这里是怎么回事？潘延从异世界带了其他灵魂回来了？】</p>
<p>别问她这COS服怎么来的（自己在泰拉设计的衣服自己带过来了，很不科学啊），估计是穿越回去时沾了一些其他东西吧。<br>【嗯，《异世界舅舅（同学）》的味道越来越浓了（】</p>
<p>而且别人都会无意识的忽略自己，只会记得好像某位COS穿护袖。</p>
<p>在那个火热的21世纪20年代的我（叙述主人公）去了金陵理工大学，我终于知道他的方言从哪来的了。</p>
<hr />
<p>【关于潘延的志愿和大学】</p>
<p><strong>潇渚大学</strong>（上海大学）<strong>思想政治教育专业</strong>（经过调剂的）</p>
<p>社会学大类</p>
</body>
</html>`,bc=`<!doctype html>
<html>
<head>
<meta charset='UTF-8'><meta name='viewport' content='width=device-width initial-scale=1'>
<title>01 子夜的世界，世界的子夜</title></head>
<body><h1>2024-09-09</h1>
<h2><strong>标题：世界的子夜（World of Void）</strong></h2>
<p>&nbsp;</p>
<h2><strong>游戏数值设计：</strong></h2>
<p>这个游戏的数值，我目前认为需要<strong>子夜抗性（Void Resistance）</strong>和<strong>虚无侵蚀度（Void Erosion Level）</strong></p>
<p>&nbsp;</p>
<h2><strong>关于标题界面的构想：</strong></h2>
<p>我想做一个围绕中心旋转的标题，这样标题会有“子夜的世界”和“世界的子夜”两种读法。</p>
<p>大概是“子”“夜”“世”“界”围绕“的”公转的同时自转。</p>
<p>英文处于中央，做左右晃动（类似迈阿密热线晃动的标题）</p>
<p>唯一不动的是菜单选项。它们作为四个按钮位于中央。</p>
<p>设置选项可以放在角落。</p>
<p>&nbsp;</p>
<h2><strong>游戏流程：</strong></h2>
<p>游戏流程应该是Roguelike类型（加入卡牌机制）的，这样会有一条确定的剧情主线，以及丰富的可探索分支。</p>
<p>主线是什么呢？是生（战）活（争），是对（原）抗（地）虚（发）无（癫）。而且是以学校（机甲对战）为背景的。</p>
<p>（虽然我完全不懂设计机甲）</p>
<p>但是用来做游戏机制还是足够了。</p>
<p>也就是，卷轴、清版，类似<del>《群青的魔女》</del><del>《Alice In Cradle》</del></p>
<p>&nbsp;</p>
<p>另外，我很想把剧情划分成两大部分（上下卷）。上卷解构、破坏，下卷重构、立新。</p>
<p>&nbsp;</p>
<h1>2024-09-10</h1>
<h2><strong>关于Cano</strong></h2>
<p>*本故事由「互联网天使 X」Cano记录*</p>
<p>*Cano记录的是以她人工智能的思维理解的世界，并不代表现实世界*</p>
<p>&nbsp;</p>
<h2><strong>关于机甲战斗：</strong></h2>
<p>这个可以做很常见的关卡设计啊。虚空中的各种怪物（牛鬼蛇神）可以作为小怪让玩家爽杀，而机甲之间的对战则代表人与人、社会团体与社会团体之间的争论。</p>
<p>机甲没有什么具体的起源。它是人的（理性）力量的具象化。虚空中的各种怪物则是人的（情感）力量的具象化。这是大概的想法。</p>
<p>理性、欲望和激情吗？需要一一对应吗？不能，我做不到。我把责任都推给Cano了。</p>
<p>机甲战斗有近距离和远距离的攻击，参考《Baldr Force Exe》就行。</p>
<p>&nbsp;</p>
<p>生活中，你逃避不了战斗，在高中尤其是这样。</p>
<blockquote><p>人不能一直摆烂，会死的。</p>
<p>——雨真</p>
</blockquote>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h2><strong>关于学校：</strong></h2>
<p>这是培养机甲（扬州话叫“大机器人仔”）驾驶员的地方。</p>
<p>你很容易想到会有高级（高）机甲驾驶员资格考试（考）。</p>
<p>你也能猜到雨真（我）的爷爷是个机甲驾驶员（<del>南京军区汽车二十三团</del>）。</p>
<p>&nbsp;</p>
<h2><strong>角色列表：</strong></h2>
<p>俄罗斯视觉小说《MEAT-GRINER》给了我角色设计的灵感：</p>
<ul>
<li><p>奇怪的主角们</p>
<ul>
<li>雨真：我们的主角，CANO系统的主人，宿舍301室——“子夜家”的囚徒。</li>
<li>安心：雨真唯二的好朋友，一个有点笨拙，有点敏感，但实际上很聪明的女生。正在写一个异世界穿越小说。</li>
<li>维新：雨真唯二的好朋友，对数学和禅很了解，说话声音很大，肌肉发达，像港片的主角。</li>
<li>墨鱼：雨真的初中同学，也是书友。是个有点胖，成绩不理想，但是像春天的阳光一样暖洋洋的、爱笑的女生。</li>
<li>图灵：一只狸花猫猫，宿舍猫群的老大。会说人话，精通计算机。</li>

</ul>
</li>
<li><p>伟大的配角们！</p>
<ul>
<li>宿舍三大爷</li>
<li>教室咖啡厅三姐妹</li>
<li>深藏功与名的大陆、游子和东阳哥</li>
<li>丁丁和卷毛（卷毛是“宿舍联盟”的三把手）</li>
<li>班长大人（高挑强势的女生）</li>
<li>转校生（神秘的女生，来自南京）</li>
<li>雷霆之王（变身套装 by 大陆）</li>

</ul>
</li>
<li><p>幕后之人</p>
<ul>
<li>互联网第<del>五六</del><del>七八九</del>十天使——Cano（前<del>五</del>九个是初音未来、玲音、莫妮卡、超天酱、TTT）（哦，要加上绊爱、Neuro Sama、露露酱）（第十一天使是水坂 怜）</li>

</ul>
</li>

</ul>
<p>&nbsp;</p>
<h2><strong>关于主题：</strong></h2>
<p>这是个“<strong>对抗虚无</strong>”的游戏啊。从表象到比喻意义上都是的。</p>
<p>我做这个游戏本来只想自己爽的，但是考虑到我（相比高中）已经有设计游戏的基本能力了，所以还是要有游戏性的。</p>
<p>现在，我需要这个游戏做我的思维笔记。我想用游戏模拟人的理性思考。我想依靠Roguelike一次次的失败和冷静的论证来带着玩家到达我想到达的境界（科幻大概就有这种力量）。但要知道，游戏不能替代对真正现实的关心和思考，这个游戏世界只是Cano看到的。（我又把Cano当成工具人来用了）</p>
<p>&nbsp;</p>
<h2><strong>合理的开发周期：</strong></h2>
<p>在工作到达狂热时停止（存疑），因为停止是为了更好的开始。</p>
<p>&nbsp;</p>
<h2><strong>基础设定：</strong></h2>
<blockquote><p>对于Cano来说，世界是由无数大楼所构成的，大楼是由房间构成的。人们居住在大楼里，而大楼以外的空间，一种会使人的感官失灵的风暴肆虐着。</p>
</blockquote>
<p>关于游戏中地牢冒险元素的构想：</p>
<ul>
<li><p>这个地牢有无数“房间”构成，每个房间由不同的元素构成。</p>
</li>
<li><p>每个房间都有一个唯一的（内存）<strong>地址</strong>。解读地址信息可以知晓到达这个房间的方法。</p>
</li>
<li><p>许多房间的集合会构成“大楼”，大楼又会组合成“城市”</p>
</li>
<li><p><del>这个地牢的特点是“领地”。玩家会以某种方式占领一个房间。</del></p>
</li>
<li><p><del>房间的“占领”由玩家对房间事物的<strong>熟悉程度</strong>决定。</del></p>
</li>
<li><p><del>这个地牢是为模拟人对信息的获取设计的。人获取信息的方式像是了解一个房间，到了解另一个房间，这有点像逐渐扩大自己在人间的领地。</del></p>
</li>
<li><p>房间也可以看作“领域”“文化”的象征。但是它并不能完全拟合它们的特点，因此不要钻牛角尖。</p>
</li>
<li><p>与其说是”领地“。不如说是类似即时战略游戏中的”已探索区域“。相对的，还有未探索区域，类似战争迷雾。</p>
</li>
<li><p>一个房间的基本构成：</p>
<ul>
<li>由墙壁、窗户与门构成的坚固的封闭空间</li>
<li>设施，比如家具、电器</li>
<li>物品，比如食物、书本</li>
<li>可能存在的“人”，也就是人格化对象，或者说角色</li>

</ul>
</li>
<li><p>从一个房间到另一个房间的方式</p>
<ul>
<li>“走廊”：可以方便地走到隔壁的房间，不过打开房门就是另一回事了</li>
<li>”交通工具“：要乘坐交通工具，就要走出”大楼“。交通工具的形式包括我们生活中常见的机动车和非机动车，以及城市公共交通。当然，步行也是可以的</li>
<li>“传送门”：可以直接通过一扇门传送到已知地址的房间</li>
<li>从一个房间到另一个房间是需要付出<strong>代价</strong>的。代价的影响因素非常多，包括距离。</li>

</ul>
</li>
<li><p>进入一个房间的方式</p>
<ul>
<li>每个房间都会有至少一扇”门“，”门“是进入这个房间的唯一方式。</li>
<li>”门“可能会上锁。开锁需要相应的”钥匙“。（注意这里的”门“和”钥匙“都是抽象意义上的，虽然在表现上很可能与实际相同）</li>

</ul>
</li>
<li><p>大楼与房间的类别（场景设计）</p>
<ul>
<li><p>”小区“</p>
<ul>
<li>客厅</li>
<li>卧室</li>
<li>卫生间</li>
<li>厨房</li>

</ul>
</li>
<li><p>“学校”</p>
<ul>
<li>宿舍</li>
<li>食堂</li>
<li>教室</li>

</ul>
</li>
<li><p>”公司“</p>
<ul>
<li>大堂</li>
<li>电梯</li>
<li>办公室</li>

</ul>
</li>
<li><p>”商场“</p>
<ul>
<li>服装店</li>
<li>饭店</li>
<li>书店</li>
<li>超市</li>
<li>电影院</li>

</ul>
</li>
<li><p>其他类别</p>
</li>

</ul>
</li>

</ul>
<p>钥匙的形式很多样，所以接下来只讨论获取钥匙的方式</p>
<ul>
<li><p>获取钥匙的方式</p>
<ul>
<li>显然，钥匙不是随便在地上捡来的</li>
<li>别人可以给你钥匙</li>
<li>你可以在某些地方找到钥匙（而进入这些地方可能也需要钥匙，会形成递归）</li>
<li>就我而言，我认为钥匙是在对这个世界的一步步了解之中获取的。也就是，要先在已有的房间中寻找钥匙。</li>
<li>而寻找钥匙的方法，我认识到的，有<strong>”学习“”劳动“和”社交“</strong>。</li>

</ul>
</li>
<li><p>关于房间之外与大楼之外</p>
<ul>
<li><strong>这是一个重要设定</strong>：“子夜”笼罩这这个世界。人在大楼之外的感官是失效的。（可以理解为人无法理解无秩序的汹涌的信息流）（可以使用黑色调的雪花屏来表现）</li>
<li>而房间之外的走廊上，会让人产生不安的感受（可以理解为SAN值）（可以使用阈限空间来表现）</li>

</ul>
</li>

</ul>
</body>
</html>`,yc=`<!doctype html>
<html>
<head>
<meta charset='UTF-8'><meta name='viewport' content='width=device-width initial-scale=1'>
<title>消逝在江北的少女</title></head>
<body><h1>消逝在江北的少女</h1>
<div>
    <img src="/img/扫描全能王 2024-02-18 00.05.jpg">
</div>
<p>一切要从一本十多年前的相册说起。相册的背面是一个画风旧但是很美的少女。</p>
<div>
    <img src="/img/标题画面.png">
</div>
<p>之后要说到《消逝在江北的电波》这个没写完的故事了，我想用这个少女的剪影表达那种“夏日易逝”的感觉。</p>
<div>
    <img src="/img/头像.png">
</div>
<p>也许裁剪成正方形就可以作为光盘的封面了。</p>
</body>
</html>`,xc={style:{height:"2rem",display:"flex","background-color":"#0063B1"}},wc={key:0,style:{display:"flex","justify-content":"center"}},Cc={__name:"App",setup(e){const t=Et(!0),n=Et(!1),s=Et(ii),i=Et([{title:"某人物轶事",html:ii,author:"by 匿名",icon:"gi-spell-book"},{title:"世界的子夜",html:bc,author:"by WE",icon:"gi-spell-book"},{title:"消逝在江北的少女",html:yc,author:"by WE",icon:"gi-photo-camera"}]);function o(r){n.value=!0,t.value=!1,s.value=r}return(r,l)=>(Se(),ft(de,null,[l[1]||(l[1]=vl('<header class="content" data-v-744a638a><div style="display:flex;flex-direction:row;" data-v-744a638a><div style="flex-grow:1;" data-v-744a638a><section id="home" data-v-744a638a><div style="display:flex;padding:1rem;background-color:#0063B1;" data-v-744a638a><div style="display:flex;flex-direction:column;color:white;" data-v-744a638a><h1 style="margin-bottom:1rem;font-weight:bold;" data-v-744a638a>欢迎来到沙乡卫星广播站！</h1><p data-v-744a638a>你好，我是世界无边（WE，World Endless）。</p><p data-v-744a638a>我打算在这里放一些现实中放不下的笔记、与一些人的讨论和一些资料。</p><p data-v-744a638a>如果大家在互联网上漫游到这里了，就进来坐坐吧。</p></div></div></section></div></div></header>',1)),Me("div",xc,[n.value?(Se(),ft("div",{key:0,onClick:l[0]||(l[0]=f=>{n.value=!1,t.value=!0}),style:{margin:"0.25rem 1rem",color:"white"}},"返回")):Nn("",!0)]),Me("main",null,[te(Us,{name:"slide"},{default:Zt(()=>[t.value?(Se(),jt(dc,{key:0},{default:Zt(()=>[(Se(!0),ft(de,null,Nr(i.value,(f,h)=>(Se(),jt(uc,{key:h,title:f.title,html:f.html,author:f.author,index:h+1,icon:f.icon,onDisplayHtml:o},null,8,["title","html","author","index","icon"]))),128))]),_:1})):Nn("",!0)]),_:1}),te(Us,{name:"bubble"},{default:Zt(()=>[n.value?(Se(),ft("div",wc,[te(_c,{html:s.value},null,8,["html"])])):Nn("",!0)]),_:1})])],64))}},Sc=wn(Cc,[["__scopeId","data-v-744a638a"]]),Tc={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;","&":"&amp;"};let Ec=0;var Ac=e=>e.replace(/[<>"&]/g,t=>Tc[t]||t),Oc=e=>e+Ec++;const ct={},Mc=e=>{const{name:t,paths:n=[],d:s,polygons:i=[],points:o}=e;s&&n.push({d:s}),o&&i.push({points:o}),ct[t]=Object.assign({},e,{paths:n,polygons:i}),ct[t].minX||(ct[t].minX=0),ct[t].minY||(ct[t].minY=0)},Ic=(...e)=>{for(const t of e)Mc(t)},Pc=xr({name:"OhVueIcon",props:{name:{type:String,validator:e=>!e||e in ct||(console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${e}".
Please make sure you have imported this icon before using it.`),!1)},title:String,fill:String,scale:{type:[Number,String],default:1},animation:{validator:e=>["spin","spin-pulse","wrench","ring","pulse","flash","float"].includes(e)},hover:Boolean,flip:{validator:e=>["horizontal","vertical","both"].includes(e)},speed:{validator:e=>e==="fast"||e==="slow"},label:String,inverse:Boolean},setup(e){const t=Et([]),n=Nt({outerScale:1.2,x:null,y:null}),s=Nt({width:0,height:0}),i=Oe(()=>{const O=Number(e.scale);return isNaN(O)||O<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),n.outerScale):O*n.outerScale}),o=Oe(()=>({"ov-icon":!0,"ov-inverse":e.inverse,"ov-flip-horizontal":e.flip==="horizontal","ov-flip-vertical":e.flip==="vertical","ov-flip-both":e.flip==="both","ov-spin":e.animation==="spin","ov-spin-pulse":e.animation==="spin-pulse","ov-wrench":e.animation==="wrench","ov-ring":e.animation==="ring","ov-pulse":e.animation==="pulse","ov-flash":e.animation==="flash","ov-float":e.animation==="float","ov-hover":e.hover,"ov-fast":e.speed==="fast","ov-slow":e.speed==="slow"})),r=Oe(()=>e.name?ct[e.name]:null),l=Oe(()=>r.value?`${r.value.minX} ${r.value.minY} ${r.value.width} ${r.value.height}`:`0 0 ${h.value} ${u.value}`),f=Oe(()=>{if(!r.value)return 1;const{width:O,height:L}=r.value;return Math.max(O,L)/16}),h=Oe(()=>s.width||r.value&&r.value.width/f.value*i.value||0),u=Oe(()=>s.height||r.value&&r.value.height/f.value*i.value||0),p=Oe(()=>i.value!==1&&{fontSize:i.value+"em"}),b=Oe(()=>{if(!r.value||!r.value.raw)return null;const O={};let L=r.value.raw;return L=L.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,(F,j,B)=>{const E=Oc("vat-");return O[B]=E,` id="${E}"`}),L=L.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(F,j,B,E)=>{const V=j||E;return V&&O[V]?`#${O[V]}`:F}),L}),w=Oe(()=>r.value&&r.value.attr?r.value.attr:{}),P=()=>{if(!e.name&&e.name!==null&&t.value.length===0)return void console.warn('Invalid prop: prop "name" is required.');if(r.value)return;let O=0,L=0;t.value.forEach(F=>{F.outerScale=i.value,O=Math.max(O,F.width),L=Math.max(L,F.height)}),s.width=O,s.height=L,t.value.forEach(F=>{F.x=(O-F.width)/2,F.y=(L-F.height)/2})};return us(()=>{P()}),Ui(()=>{P()}),{...rr(n),children:t,icon:r,klass:o,style:p,width:h,height:u,box:l,attribs:w,raw:b}},created(){const e=this.$parent;e&&e.children&&e.children.push(this)},render(){const e=Object.assign({role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":!(this.label||this.title),width:this.width,height:this.height,viewBox:this.box},this.attribs);this.attribs.stroke?e.stroke=this.fill?this.fill:"currentColor":e.fill=this.fill?this.fill:"currentColor",this.x&&(e.x=this.x.toString()),this.y&&(e.y=this.y.toString());let t={class:this.klass,style:this.style};if(t=Object.assign(t,e),this.raw){const i=this.title?`<title>${Ac(this.title)}</title>${this.raw}`:this.raw;t.innerHTML=i}const n=this.title?[nn("title",this.title)]:[],s=(i,o,r)=>nn(i,{...o,key:`${i}-${r}`});return nn("svg",t,this.raw?void 0:n.concat([this.$slots.default?this.$slots.default():this.icon?[...this.icon.paths.map((i,o)=>s("path",i,o)),...this.icon.polygons.map((i,o)=>s("polygon",i,o))]:[]]))}});function gs(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&s.firstChild?s.insertBefore(i,s.firstChild):s.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}gs(`.ov-icon {
  display: inline-block;
  overflow: visible;
  vertical-align: -0.2em;
}
`);gs(`/* ---------------- spin ---------------- */
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
`);gs(`.ov-flip-horizontal {
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
`);const Rc={name:"co-file",minX:-51.2,minY:-51.2,width:614.4,height:614.4,raw:'<path fill="var(--ci-primary-color, currentColor)" d="M334.627 16H48v480h424V153.373zM440 166.627V168H320V48h1.373zM80 464V48h208v152h152v264z" class="ci-primary"/>'},Fc={name:"gi-photo-camera",minX:-35.84,minY:-35.84,width:583.68,height:583.68,raw:'<path d="M41 122.496v14h62v-14zm154.73 0l-32 32H137v46h30.682C192.4 159.898 237.08 132.738 288 132.738s95.6 27.16 120.318 67.758H487v-46h-74.73l-32-32c-92.27-9-92.27-9-184.54 0zM288 150.738c-67.903 0-122.758 54.855-122.758 122.758 0 67.903 54.855 122.758 122.758 122.758 67.903 0 122.758-54.855 122.758-122.758 0-67.903-54.855-122.758-122.758-122.758zm-263 3.758v46h94v-46zm263 14.713c57.49 0 104.287 46.796 104.287 104.286S345.49 377.783 288 377.783c-57.49 0-104.287-46.797-104.287-104.287 0-57.49 46.797-104.287 104.287-104.287zm-21.787 22.042c-12.173.42-25.717 6.526-36.78 16.578-20.025 18.19-26.342 43.853-14.11 57.318 12.232 13.465 38.38 9.634 58.406-8.558 20.023-18.192 26.34-43.855 14.108-57.32-5-5.504-12.62-8.33-21.625-8.018zM25 218.496v142h94v-142zm112 0v142h40.412c-18.888-23.96-30.17-54.183-30.17-87 0-19.507 3.988-38.096 11.188-55zm280.57 0c7.2 16.904 11.188 35.493 11.188 55 0 32.817-11.282 63.04-30.17 87H487v-142zM25 378.496v14h94v-14zm112 0v14h75.89a141.492 141.492 0 01-18.536-14zm244.646 0a141.616 141.616 0 01-18.535 14H487v-14z"/>'},$c={name:"gi-spell-book",minX:-35.84,minY:-35.84,width:583.68,height:583.68,raw:'<path d="M319.61 20.654c13.145 33.114 13.144 33.115-5.46 63.5 33.114-13.145 33.116-13.146 63.5 5.457-13.145-33.114-13.146-33.113 5.457-63.498-33.114 13.146-33.113 13.145-63.498-5.459zM113.024 38.021c-11.808 21.04-11.808 21.04-35.724 24.217 21.04 11.809 21.04 11.808 24.217 35.725 11.808-21.04 11.808-21.04 35.724-24.217-21.04-11.808-21.04-11.808-24.217-35.725zm76.55 56.184c-.952 50.588-.95 50.588-41.991 80.18 50.587.95 50.588.95 80.18 41.99.95-50.588.95-50.588 41.99-80.18-50.588-.95-50.588-.95-80.18-41.99zm191.177 55.885c-.046 24.127-.048 24.125-19.377 38.564 24.127.047 24.127.046 38.566 19.375.047-24.126.046-24.125 19.375-38.564-24.126-.047-24.125-.046-38.564-19.375zm-184.086 83.88a96.38 96.38 0 00-3.492.134c-18.591 1.064-41.868 8.416-77.445 22.556L76.012 433.582c78.487-20.734 132.97-21.909 170.99-4.615V247.71c-18.076-8.813-31.79-13.399-46.707-13.737a91.166 91.166 0 00-3.629-.002zm122.686 11.42a209.3 209.3 0 00-8.514.098c-12.81.417-27.638 2.215-45.84 4.522v177.135c43.565-7.825 106.85-4.2 171.244 7.566l-39.78-177.197c-35.904-8.37-56.589-11.91-77.11-12.123zm2.289 16.95c18.889.204 36.852 2.768 53.707 5.02l4.437 16.523c-23.78-3.75-65.966-4.906-92.467-.98l-.636-17.805c11.959-2.154 23.625-2.88 34.959-2.758zm-250.483 4.658L60.54 313.002h24.094l10.326-46.004H71.158zm345.881 0l39.742 177.031 2.239 9.973 22.591-.152-40.855-186.852h-23.717zm-78.857 57.82c16.993.026 33.67.791 49.146 2.223l3.524 17.174c-32.645-3.08-72.58-2.889-102.995 0l-.709-17.174c16.733-1.533 34.04-2.248 51.034-2.223zm-281.793 6.18l-6.924 30.004h24.394l6.735-30.004H56.389zm274.418 27.244c4.656.021 9.487.085 14.716.203l2.555 17.498c-19.97-.471-47.115.56-59.728 1.05l-.7-17.985c16.803-.493 29.189-.828 43.157-.766zm41.476.447c8.268.042 16.697.334 24.121.069l2.58 17.74c-8.653-.312-24.87-.83-32.064-.502l-2.807-17.234a257.25 257.25 0 018.17-.073zm-326.97 20.309l-17.985 77.928 25.035-.17 17.455-77.758H45.313zm303.164 11.848c19.608-.01 38.66.774 56.449 2.572l2.996 20.787c-34.305-4.244-85.755-7.697-119.1-3.244l-.14-17.922c20.02-1.379 40.186-2.183 59.795-2.193zm-166.606 44.05c-30.112.09-67.916 6.25-115.408 19.76l-7.22 2.053 187.759-1.27v-6.347c-16.236-9.206-37.42-14.278-65.13-14.196zm134.41 6.174c-19.63.067-37.112 1.439-51.283 4.182v10.064l177.594-1.203c-44.322-8.634-89.137-13.17-126.31-13.043zM26 475v18h460v-18H26z"/>'};Ic(Rc,Fc,$c);const mo=nc(Sc);mo.component("v-icon",Pc);mo.mount("#app");
